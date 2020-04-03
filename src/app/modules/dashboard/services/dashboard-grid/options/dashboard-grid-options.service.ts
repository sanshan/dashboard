import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {GridsterConfig} from 'angular-gridster2';
import {FormGroup} from '@angular/forms';
import {collectionReducer} from '../../../../_shared/helpers/functions';
import {DashboardGridService} from '../dashboard-grid.service';
import {DashboardItem} from '../../../models/dashboard/dashboard.interface';
import {DashboardGridSettingsFetchService} from '../settings/dashboard-grid-settings-fetch.service';
import {GridParamGroupInterface} from '../../../models/grid/params/param.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardGridOptionsService {
  private _optionsSubject$: BehaviorSubject<GridsterConfig>;
  readonly options$: Observable<GridsterConfig>;


  constructor(
    private _dg: DashboardGridService,
    private _dgs: DashboardGridSettingsFetchService
  ) {
    this._optionsSubject$ = new BehaviorSubject<GridsterConfig>({});
    this.options$ = this._initOptions$();

    this._settings$.subscribe((settings) => {
      this.updateOptionSubject(this._gridBaseParamToOptions(settings));
    });
  }

  private get _settings$(): Observable<GridParamGroupInterface[]> {
    return this._dgs.settings$;
  }

  private _gridBaseParamToOptions(settings: GridParamGroupInterface[]): GridsterConfig {
    return settings
      .map((group) => {
        return group.controls;
      })
      .reduce((accumulator, group) => {
        return accumulator.concat(group);
      }).map((param) => {
        return {[param.paramName]: param.default};
      }).reduce(collectionReducer) as GridsterConfig;
  }

  /** Обновить опции грида */
  updateOptionSubject(options: GridsterConfig) {
    /** ТРЕБУЕТСЯ РЕФАКТОРИНГ */
    options.emptyCellClickCallback = this._emptyCellClick.bind(this);
    options.emptyCellDragCallback = this._emptyCellClick.bind(this);
    /** ********************* */

    this._optionsSubject$.next(options);
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

  private _initOptions$() {
    return this._optionsSubject$.asObservable();
  }

  private _emptyCellClick(_: MouseEvent, item: DashboardItem<any>) {
    this._dg.addItem(item);
  }

}
