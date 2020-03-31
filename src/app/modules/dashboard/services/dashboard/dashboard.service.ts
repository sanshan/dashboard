import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Dashboard, DashboardItem, DashboardServiceInterface} from '../../models/dashboard/dashboard.interface';
import {ID} from '../../../_shared/interfaces/interfaces';
import {DashboardModel} from '../../models/dashboard/model/dashboard.model';
import {DashboardModelService} from '../../models/dashboard/model/dashboard-model.service';
import {GridsterItem} from 'angular-gridster2';
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

  activate(dashboardId: ID): DashboardServiceInterface {
    const dashboard = this._m.getById(dashboardId);
    this._dashboardSubject.next(dashboard);

    return this;
  }

  getDashboardSubjectValue(): Dashboard<any> {
    return this._dashboardSubject.value;
  }

  private _initDashboard$(): Observable<DashboardModel> {
    return this._dashboardSubject.asObservable();
  }

  removeItem(item: DashboardItem<any>) {
    const oldDashboard = this.getDashboardSubjectValue();
    oldDashboard.items.splice(oldDashboard.items.indexOf(item), 1);
    const dashboard = merge(this.getDashboardSubjectValue(), {}, {}) as DashboardModel;

    this._dashboardSubject.next(dashboard);
  }

  addItem(item: GridsterItem) {
    const dashboard = merge(this.getDashboardSubjectValue(), {}, {}) as DashboardModel;

    dashboard.items.push(item);
    this._dashboardSubject.next(dashboard);
  }

}
