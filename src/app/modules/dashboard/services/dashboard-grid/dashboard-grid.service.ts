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

  private _dropIdSubject: BehaviorSubject<ID>;
  dropId$: Observable<ID>;

  private _componentsSubject: BehaviorSubject<ComponentInterface[]>;
  components$: Observable<ComponentInterface[]>;

  constructor(
    private _d: DashboardService
  ) {
    this._itemsSubject = new BehaviorSubject<DashboardItem<any>[]>([]);
    this.items$ = this._initItems$();

    this._dropIdSubject = new BehaviorSubject<ID>(-1);
    this.dropId$ = this._initDropId$();

    this._componentsSubject = new BehaviorSubject<ComponentInterface[]>([]);
    this.components$ = this._initComponents$();
  }

  get dropIdValue() {
    return this._dropIdSubject.value;
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
    this._removeFromItems(item);
    this._removeFromComponents(item);
  }

  /**
   * Добавить блок на дашборд
   *
   * @param item GridsterItem
   */
  addItem(item: DashboardItem<any>) {
    const items = this._itemsValue;

    item._id = Date.now().toString();
    items.push(item);

    this._updateDashboard(items);
  }

  /**
   * Добавляем chart в коллекцию чартов
   * Один контейнер - один чарт
   *
   * @param chart ChartInterface
   */
  dropItem(chart: ChartInterface): void {
    let components = this._componentsValue;
    const containerId = this._dropIdSubject.value;

    console.log('Последний контейнер над которым держали чарт был с ИД: ', containerId);

    if (containerId >= 0) {

      const comp: ComponentInterface = components.find(c => c.containerId.toString() === containerId.toString());
      if (!comp) {

        console.log('Добавляю чарт в контейнер');

        const componentItem: ComponentInterface = {
          id: this._dropIdSubject.value,
          containerId: containerId.toString(),
          componentRef: chart.comp
        };

        components = Object.assign([], components, {[components.length]: componentItem});
        this._componentsSubject.next(components);
        this._dropIdSubject.next(-1);
        console.log('Теперь коллекция с чартами такая: ', components);
      }
    }

  }

  /**
   * Сохранить ID добавленного контента в локальную переменную
   *
   * @param id ID
   */
  setDropId(id: ID): void {
    console.log('Событие: ', id);
    this._dropIdSubject.next(id);
    console.log('Теперь наблюдаемый ИД компонента такой:  ', this._dropIdSubject.value);
  }

  /**
   * Получить название добавляемого компонента
   *
   * @param id ID
   */
  getComponentRef(id: ID): string {
    const comp = this._componentsValue.find(c => c.id.toString() === id.toString());
    return comp ? comp.componentRef : null;
  }

  private _initItems$(): Observable<DashboardItem<any>[]> {
    return this._itemsSubject.asObservable();
  }

  private get _itemsValue(): DashboardItem<any>[] {
    return merge(this._itemsSubject.value) as DashboardItem<any>[];
  }

  private _initDropId$(): Observable<ID> {
    return this._dropIdSubject.asObservable();
  }

  private _initComponents$(): Observable<ComponentInterface[]> {
    return this._componentsSubject.asObservable();
  }

  private get _componentsValue(): ComponentInterface[] {
    return merge(this._componentsSubject.value) as ComponentInterface[];
  }

  private _updateDashboard(items: DashboardItem<any>[]): void {
    this._d.updateDashboard(items);
  }

  private _removeFromItems(item: DashboardItem<any>): void {
    const items = this._itemsValue;
    const currentItem = this._itemsValue.find(i => i._id.toString() === item._id.toString());
    items.splice(items.indexOf(currentItem), 1);

    this._updateDashboard(items);
  }

  private _removeFromComponents(item: DashboardItem<any>): void {
    const components = this._componentsValue;
    const comp = this._componentsValue.find(c => c.id.toString() === item._id.toString());
    components.splice(components.indexOf(comp), 1);

    this._componentsSubject.next(components);
  }

}
