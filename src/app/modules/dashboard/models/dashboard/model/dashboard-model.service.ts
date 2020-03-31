import {Injectable} from '@angular/core';

import {DASHBOARDS} from '../../../_mock/dashboard-items.mock';
import {ID} from '../../../../_shared/interfaces/interfaces';
import {DashboardModelInterface, DashboardModelServiceInterface} from './dashboard-model.interface';
import {DashboardModel} from './dashboard.model';


@Injectable({
  providedIn: 'root'
})
export class DashboardModelService implements DashboardModelServiceInterface<any> {

  getById(id: ID): DashboardModelInterface<any> {
    const d = DASHBOARDS.find((dashboard) => dashboard._id.toString() === id.toString());
    if (d) {
      return new DashboardModel(d);
    } else {
      throw new Error(`Dashboard with ID: '${id}' not found!`);
    }
  }

}
