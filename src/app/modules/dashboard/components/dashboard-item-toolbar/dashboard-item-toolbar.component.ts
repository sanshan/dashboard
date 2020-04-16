import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DashboardItem} from '../../models/dashboard/dashboard.interface';

@Component({
  selector: 'app-dashboard-item-toolbar',
  templateUrl: './dashboard-item-toolbar.component.html',
  styleUrls: ['./dashboard-item-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardItemToolbarComponent {

  @Input() item: DashboardItem<any>;

}
