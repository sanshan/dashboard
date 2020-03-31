import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {GridsterConfig} from 'angular-gridster2';
import {DashboardItem} from '../../models/dashboard/dashboard.interface';
import {Observable} from 'rxjs';
import {DashboardGridService} from '../../services/dashboard-grid/dashboard-grid.service';

@Component({
  selector: 'app-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardGridComponent implements OnInit {

  @Input() items: DashboardItem<any>[];

  readonly options$: Observable<GridsterConfig>;

  constructor(
    private _dg: DashboardGridService
  ) {
    this.options$ = this._getOptions$();
  }

  ngOnInit() {
    /** подписываемся на обновление опций грида и реагируем на изменения в них */
    this.options$.subscribe(this.optionsChanged);
  }

  removeItem($event, item) {
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
    return this._dg.getOptions$();
  }

}
