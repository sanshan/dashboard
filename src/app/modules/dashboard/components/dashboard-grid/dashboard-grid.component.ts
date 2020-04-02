import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {GridsterConfig} from 'angular-gridster2';
import {DashboardItem} from '../../models/dashboard/dashboard.interface';
import {Observable} from 'rxjs';
import {DashboardGridService} from '../../services/dashboard-grid/dashboard-grid.service';
import {ID} from '../../../_shared/interfaces/interfaces';
import {DashboardGridOptionsService} from '../../services/dashboard-grid/options/dashboard-grid-options.service';

@Component({
  selector: 'app-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardGridComponent implements OnInit, OnChanges {
  @Input() items: DashboardItem<string>[];
  readonly items$: Observable<DashboardItem<string>[]>;
  readonly options$: Observable<GridsterConfig>;

  constructor(
    private _dg: DashboardGridService,
    private _dgo: DashboardGridOptionsService
  ) {
    this.options$ = this._getOptions$();
    this.items$ = this._getItems$();
  }

  ngOnInit() {
    /** подписываемся на обновление опций грида и реагируем на изменения в них */
    this.options$.subscribe(this.optionsChanged);
  }

  ngOnChanges(changes: SimpleChanges): void {
    /** Обновляем данные в стриме */
    this._dg.updateItems(this.items);
  }

  /**
   * Удалить блок с дашборда
   *
   * @param $event Событие
   * @param item DashboardItem<any>
   */
  removeItem($event, item: DashboardItem<string>) {
    $event.preventDefault();
    $event.stopPropagation();

    this._dg.removeItem(item);
  }

  /**
   * Сохранить перетаскиваемые компонент в локальную переменную
   *
   * @param id ID
   */
  setDropId(id: ID): void {
    this._dg.setDropId(id);
  }

  /**
   * Получить название добавляемого компонента
   *
   * @param id ID
   */
  getComponentRef(id: ID) {
    return this._dg.getComponentRef(id);
  }

  /**
   * Изменить настройки
   *
   * @param options Объект с настройками
   */
  private optionsChanged = (options: GridsterConfig) => {
    if (options.api && options.api.optionsChanged) {

      options.api.optionsChanged();
    }
  }

  private _getOptions$(): Observable<GridsterConfig> {
    return this._dgo.options$;
  }

  private _getItems$(): Observable<DashboardItem<string>[]> {
    return this._dg.items$;
  }

}
