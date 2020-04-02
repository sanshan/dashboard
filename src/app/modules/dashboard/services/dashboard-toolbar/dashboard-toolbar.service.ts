import {Injectable} from '@angular/core';
import {ChartInterface} from '../../models/charts/chart.interface';
import {DashboardToolbarInterface} from '../../models/toolbar/dashboard-toolbar.interface';
import {BehaviorSubject, Observable} from 'rxjs';
import {AVAILABLE_CHARTS} from '../../_mock/dashboard-items.mock';

@Injectable({
  providedIn: 'root'
})
export class DashboardToolbarService implements DashboardToolbarInterface<ChartInterface> {

  private _itemsSubject$: BehaviorSubject<ChartInterface[]>;
  items$: Observable<ChartInterface[]>;

  constructor() {
    this._itemsSubject$ = new BehaviorSubject<ChartInterface[]>([]);
    this.items$ = this._initItems$();

    this._updateItemsSubject();
  }

  private _initItems$(): Observable<ChartInterface[]> {
    return this._itemsSubject$.asObservable();
  }

  private _updateItemsSubject() {
    this._itemsSubject$.next(this._getItemsData());
  }

  private _getItemsData(): ChartInterface[] {
    return AVAILABLE_CHARTS;
  }
}
