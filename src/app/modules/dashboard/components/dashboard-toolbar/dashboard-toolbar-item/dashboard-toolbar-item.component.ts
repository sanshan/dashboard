import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {DashboardToolbarItemComponentInterface} from '../../../models/toolbar/dashboard-toolbar.interface';
import {ChartInterface} from '../../../models/charts/chart.interface';

@Component({
  selector: 'app-dashboard-toolbar-item',
  templateUrl: './dashboard-toolbar-item.component.html',
  styleUrls: ['./dashboard-toolbar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardToolbarItemComponent implements DashboardToolbarItemComponentInterface<ChartInterface> {

  @Input() item: ChartInterface;

}
