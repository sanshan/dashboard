import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {Dashboard, DashboardItem, DashboardServiceInterface} from '../../models/dashboard/dashboard.interface';
import {ID} from '../../../_shared/interfaces/interfaces';
import {DashboardModelService} from '../../models/dashboard/model/dashboard-model.service';
import {merge} from '../../../_shared/helpers/functions';

@Injectable({
  providedIn: 'root'
})
export class DashboardService implements DashboardServiceInterface {

  private _dashboardSubject: BehaviorSubject<Dashboard<any>>;
  readonly dashboard$: Observable<Dashboard<any>>;

  constructor(
    private _m: DashboardModelService
  ) {
    this._dashboardSubject = new BehaviorSubject<Dashboard<any>>(undefined);
    this.dashboard$ = this._initDashboard$();
  }

  /**
   * Активировать дашборд
   *
   * @param dashboardId Dashboard ID
   */
  activate(dashboardId: ID): DashboardServiceInterface {
    const dashboard = this._getById(dashboardId);
    this._dashboardSubject.next(dashboard);

    return this;
  }

  /**
   * Обновить стрим
   *
   * @param items DashboardItem<any>[]
   */
  updateDashboard(items: DashboardItem<any>[]) {
    const dashboard = this._dashboardValue;
    dashboard.items = items;

    this._dashboardSubject.next(dashboard);
  }

  private _initDashboard$(): Observable<Dashboard<any>> {
    return this._dashboardSubject.asObservable();
  }

  /** Получить текущее значение Dashboard<any> из стрима */
  private get _dashboardValue(): Dashboard<any> {
    return merge(this._dashboardSubject.value) as Dashboard<any>;
  }

  private _getById(dashboardId) {
    return this._m.getById(dashboardId);
  }

}
