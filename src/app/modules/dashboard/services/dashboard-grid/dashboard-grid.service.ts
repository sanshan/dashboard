import {Injectable} from '@angular/core';
import {DashboardGridOptionsService} from './options/dashboard-grid-options.service';
import {Observable} from 'rxjs';
import {GridsterConfig} from 'angular-gridster2';
import {DashboardItem} from '../../models/dashboard/dashboard.interface';
import {DashboardService} from '../dashboard/dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardGridService {

  constructor(
    private _opt: DashboardGridOptionsService,
    private _d: DashboardService
  ) {
  }

  getOptions$(): Observable<GridsterConfig> {
    return this._opt.options$;
  }

  removeItem(item: DashboardItem<any>) {
    this._d.removeItem(item);
  }

}
