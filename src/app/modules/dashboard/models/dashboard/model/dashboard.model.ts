import {DashboardItem, DashboardItemContent} from '../dashboard.interface';
import {ID} from '../../../../_shared/interfaces/interfaces';
import {DashboardModelInterface} from './dashboard-model.interface';

export class DashboardModel implements DashboardModelInterface<any> {
  _id: ID;
  items: DashboardItem<DashboardItemContent<any>>[];

  constructor(obj: DashboardModelInterface<any>) {
    this._id = obj._id;
    this.items = obj.items;
  }

}
