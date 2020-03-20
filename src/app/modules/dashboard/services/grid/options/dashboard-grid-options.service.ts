import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {GridsterConfig} from 'angular-gridster2';
import {FormGroup} from '@angular/forms';
import {collectionReducer} from '../../../../_shared/helpers/functions';

@Injectable({
  providedIn: 'root'
})
export class DashboardGridOptionsService {

  private optionsSubject$: BehaviorSubject<GridsterConfig>;
  /** Стрим с опциями грида */
  private readonly options$: Observable<GridsterConfig>;

  constructor() {
    this.optionsSubject$ = new BehaviorSubject<GridsterConfig>({});
    this.options$ = this.optionsSubject$.asObservable();
  }

  /** Получить стрим с опцифми для грида */
  get receiveOptions(): Observable<GridsterConfig> {
    return this.options$;
  }

  /** Обновить опции грида */
  updateOptionSubject(options: GridsterConfig) {
    this.optionsSubject$.next(options);
  }

  /**
   * Надо из данных предоставляемых формой в формате FormGroup формировать объект настроек грида GridsterConfig
   * Возникла проблема: в конфиге есть вложенные объекты. У нас в конфиге все параметры одноуровневые.
   *
   * Задача такова: надо из параметра типа: paramName: 'draggable.delayStart'
   * Сделать так: options: { draggable: { delayStart: value } }
   *
   * Может быть 3 уровня вложенности. Поэтому разбираем все 3 случая.
   *
   * @param settings Объект типа FormGroup
   */
  settingsToOptions(settings: FormGroup): GridsterConfig {
    /** Новый объект с опциями */
    const options = {};

    /** Объединяем все вложенные FormGroup в один объект */
    const obj = Object.values(settings).reduce(collectionReducer, {});

    /** Перебираем все ключи объекта obj */
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {

        /** Разделяю ключ на массивы. Разделитель - точка */
        const param = key.split('.');

        switch (param.length) {
          /** Если в результате разбиения получился массив с одним элементом, то просто добавляем эти ключ/значение к новому объекту */
          case 1:
            options[param[0]] = obj[key];
            break;

          /** Если в результате разбиения получился массив с двумя элементами */
          case 2:
            /** Проверяю, существует ли уже вложенный объект */
            if (options.hasOwnProperty(param[0])) {
              /* Существует. Добавляю к нему пару ключ значение */
              options[param[0]][param[1]] = obj[key];
            } else {
              /* Не существует. Добавляю объект с парой ключ/значение */
              options[param[0]] = {[param[1]]: obj[key]};
            }
            break;
        }
      }
    }

    return options as GridsterConfig;
  }

}