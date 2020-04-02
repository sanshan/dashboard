import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {DashboardService} from '../dashboard/dashboard.service';
import {ID} from '../../../_shared/interfaces/interfaces';
import {ComponentInterface, DashboardItem} from '../../models/dashboard/dashboard.interface';
import {merge} from '../../../_shared/helpers/functions';
import {ChartInterface} from '../../models/charts/chart.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardGridService {

  private _itemsSubject: BehaviorSubject<DashboardItem<any>[]>;
  items$: Observable<DashboardItem<any>[]>;

  private dropId: ID;
  private components: ComponentInterface[] = [];

  constructor(
    private _d: DashboardService
  ) {
    this._itemsSubject = new BehaviorSubject<DashboardItem<any>[]>([]);
    this.items$ = this._initItems();
  }

  /**
   * Обновить данные в стриме
   *
   * @param items DashboardItem<any>[]
   */
  updateItems(items: DashboardItem<any>[]): void {
    this._itemsSubject.next(items);
  }

  /**
   * Удалить блок с дашборда
   *
   * @param item DashboardItem<any>
   */
  removeItem(item: DashboardItem<any>) {
    const oldItems = this._getIValues();
    const _item = this._getIValues().find(i => i._id === item._id);

    const items = merge(
      oldItems.splice(oldItems.indexOf(_item), 1),
      {},
      {}
    ) as DashboardItem<any>[];

    const comp = this.components.find(c => c.id.toString() === item._id.toString());
    this.components.splice(this.components.indexOf(comp), 1);

    this._d.updateDashboard(items);
  }

  /**
   * Добавить блок на дашборд
   *
   * @param item GridsterItem
   */
  addItem(item: DashboardItem<any>) {
    const oldItems = this._getIValues();

    item._id = Date.now().toString();

    const items = merge(
      oldItems.push(item),
      {},
      {}
    ) as DashboardItem<any>[];

    this._d.updateDashboard(items);
  }

  /**
   * Добавляем chart в коллекцию чартов
   *
   * @param chart ChartInterface
   */
  dropItem(chart: ChartInterface): void {
    const {components} = this;
    const comp: ComponentInterface = components.find(c => c.id.toString() === this.dropId.toString());

    const updateIdx: number = comp ? components.indexOf(comp) : components.length;
    const componentItem: ComponentInterface = {
      id: this.dropId,
      componentRef: chart.comp
    };
    this.components = Object.assign([], components, {[updateIdx]: componentItem});
  }

  /**
   * Сохранить ID добавленного контента в локальную переменную
   *
   * @param id ID
   */
  setDropId(id: ID): void {
    this.dropId = id;
  }

  /**
   * Получить название добавляемого компонента
   *
   * @param id ID
   */
  getComponentRef(id: ID): string {
    const comp = this.components.find(c => c.id.toString() === id.toString());
    return comp ? comp.componentRef : null;
  }

  private _initItems(): Observable<DashboardItem<any>[]> {
    return this._itemsSubject.asObservable();
  }

  private _getIValues(): DashboardItem<any>[] {
    return this._itemsSubject.value;
  }

}
