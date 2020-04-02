import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {Dashboard, DashboardItem, DashboardServiceInterface} from '../../models/dashboard/dashboard.interface';
import {ID} from '../../../_shared/interfaces/interfaces';
import {DashboardModel} from '../../models/dashboard/model/dashboard.model';
import {DashboardModelService} from '../../models/dashboard/model/dashboard-model.service';
import {merge} from '../../../_shared/helpers/functions';

@Injectable({
  providedIn: 'root'
})
export class DashboardService implements DashboardServiceInterface {

  private _dashboardSubject: BehaviorSubject<DashboardModel>;
  readonly dashboard$: Observable<DashboardModel>;

  constructor(
    private _m: DashboardModelService
  ) {
    this._dashboardSubject = new BehaviorSubject<DashboardModel>(undefined);
    this.dashboard$ = this._initDashboard$();
  }

  /**
   * Активировать дашборд
   *
   * @param dashboardId Dashboard ID
   */
  activate(dashboardId: ID): DashboardServiceInterface {
    const dashboard = this._m.getById(dashboardId);
    this._dashboardSubject.next(dashboard);

    return this;
  }

  /**
   * Обновить стрим
   *
   * @param items DashboardItem<any>[]
   */
  updateDashboard(items: DashboardItem<any>[]) {
    const dashboard = merge(
      this._getDValue().items = items,
      {},
      {}
    ) as DashboardModel;

    this._dashboardSubject.next(dashboard);
  }

  private _initDashboard$(): Observable<DashboardModel> {
    return this._dashboardSubject.asObservable();
  }

  /** Получить текущее значение DashboardModel из стрима */
  _getDValue(): Dashboard<any> {
    return this._dashboardSubject.value;
  }

}
