import {Observable} from 'rxjs';

/** Интерфейс компонента DashboardToolbar */
export interface DashboardToolbarItemComponentInterface<T> {
  item: T;
}

export interface DashboardToolbarInterface<T> {
  items$: Observable<T[]>;
}
