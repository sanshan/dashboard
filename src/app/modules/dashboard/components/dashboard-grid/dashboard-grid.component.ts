import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {GridsterConfig} from 'angular-gridster2';
import {ComponentInterface, DashboardItem} from '../../models/dashboard/dashboard.interface';
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
  readonly components$: Observable<ComponentInterface[]>;

  constructor(
    private _dg: DashboardGridService,
    private _dgo: DashboardGridOptionsService,
    private _change: ChangeDetectorRef
  ) {
    this.options$ = this._getOptions$();
    this.items$ = this._getItems$();
    this.components$ = this._getComponents$();
  }

  ngOnInit() {
    /** Подписываемся на обновление опций грида и реагируем на изменения в них */
    this.options$.subscribe(this.optionsChanged);

    /** Подписываемся на добавление контента и реагируем на это */
    this.components$.subscribe((_) => {
      this._change.markForCheck();
    });
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

  private _getComponents$(): Observable<ComponentInterface[]> {
    return this._dg.components$;
  }

}
