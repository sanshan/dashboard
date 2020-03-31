import {ID} from '../../../_shared/interfaces/interfaces';
import {GridsterItem} from 'angular-gridster2';
import {Observable} from 'rxjs';

export interface DashboardItemContent<T> {
  _id: ID;
  data: T;
}

export interface DashboardItem<T> extends GridsterItem {
  x: number;
  y: number;
  rows: number;
  cols: number;
  content?: T;
}

export interface Dashboard<T> {
  _id: ID;
  items: DashboardItem<DashboardItemContent<T>>[];
}

export interface DashboardServiceInterface {
  dashboard$: Observable<Dashboard<any>>;

  activate(id: ID): DashboardServiceInterface;

  getDashboardSubjectValue(): Dashboard<any>;
}
