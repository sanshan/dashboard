import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DashboardItem} from '../../models/dashboard/dashboard.interface';
import {ID} from '../../../_shared/interfaces/interfaces';
import {DashboardGridService} from '../../services/dashboard-grid/dashboard-grid.service';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardItemComponent implements OnInit {

  @Input() item: DashboardItem<any>;

  chartItem = {
    _id: 4,
    type: 'advanced',
    comp: 'Chart4Component'
  };

  constructor(
    private _dg: DashboardGridService,
  ) {
  }

  ngOnInit(): void {
  }

  /**
   * Сохранить перетаскиваемые компонент в локальную переменную
   *
   * @param id ID
   */
  setDropId(id: ID): void {
    this._dg.setDropId(id);
  }

  /**
   * Получить название добавляемого компонента
   *
   * @param id ID
   */
  getComponentRef(id: ID) {
    return this._dg.getComponentRef(id);
  }

}
