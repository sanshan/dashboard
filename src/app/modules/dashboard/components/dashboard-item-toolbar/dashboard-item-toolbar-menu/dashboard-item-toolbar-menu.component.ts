import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DashboardItem} from '../../../models/dashboard/dashboard.interface';
import {DashboardGridService} from '../../../services/dashboard-grid/dashboard-grid.service';

@Component({
  selector: 'app-dashboard-item-toolbar-menu',
  templateUrl: './dashboard-item-toolbar-menu.component.html',
  styleUrls: ['./dashboard-item-toolbar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardItemToolbarMenuComponent implements OnInit {

  @Input() item: DashboardItem<any>;

  constructor(
    private _dg: DashboardGridService
  ) {
  }

  ngOnInit(): void {
  }

  deleteContainer() {
    this._dg.removeItem(this.item);
  }

}
