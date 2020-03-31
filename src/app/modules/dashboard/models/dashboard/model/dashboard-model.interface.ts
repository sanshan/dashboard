import {ID} from '../../../../_shared/interfaces/interfaces';
import {DashboardItem, DashboardItemContent} from '../dashboard.interface';

export interface DashboardModelInterface<T> {
  _id: ID;
  items: DashboardItem<DashboardItemContent<T>>[];
}

export interface DashboardModelServiceInterface<T> {
  getById(id: ID): DashboardModelInterface<T>;
}
