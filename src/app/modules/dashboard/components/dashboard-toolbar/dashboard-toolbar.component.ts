import {Component, ChangeDetectionStrategy} from '@angular/core';
import {DashboardToolbarInterface} from '../../models/toolbar/dashboard-toolbar.interface';
import {Observable} from 'rxjs';
import {ChartInterface} from '../../models/charts/chart.interface';
import {DashboardToolbarService} from '../../services/dashboard-toolbar/dashboard-toolbar.service';
import {DashboardGridService} from '../../services/dashboard-grid/dashboard-grid.service';

@Component({
  selector: 'app-dashboard-toolbar',
  templateUrl: './dashboard-toolbar.component.html',
  styleUrls: ['./dashboard-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardToolbarComponent implements DashboardToolbarInterface<ChartInterface> {

  items$: Observable<ChartInterface[]>;

  constructor(
    private _dt: DashboardToolbarService,
    private _dg: DashboardGridService
  ) {
    this.items$ = this._getItems$();
  }

  /**
   * Собитие по окончанию перетаскивания элемента DashboardToolbarItem
   *
   * @param item ChartInterface
   */
  dropItem(item: ChartInterface): void {
    this._dg.dropItem(item);
  }

  private _getItems$() {
    return this._dt.items$;
  }

}
