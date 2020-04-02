import {ID} from '../../../_shared/interfaces/interfaces';
import {GridsterItem} from 'angular-gridster2';
import {Observable} from 'rxjs';

export interface DashboardItemContent<T> {
  componentRef: T;
}

export interface DashboardItem<T> extends GridsterItem {
  _id: ID;
  x: number;
  y: number;
  rows: number;
  cols: number;
  content: DashboardItemContent<T>;
}

export interface Dashboard<T> {
  _id: ID;
  items: DashboardItem<T>[];
}

export interface DashboardServiceInterface {
  dashboard$: Observable<Dashboard<any>>;

  activate(id: ID): DashboardServiceInterface;

  updateDashboard(items: DashboardItem<any>[]): void;
}

export interface ComponentInterface {
  id: ID;
  componentRef: string;
}
