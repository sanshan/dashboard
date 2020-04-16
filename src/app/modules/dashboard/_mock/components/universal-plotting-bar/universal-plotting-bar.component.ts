import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {ChartComponentInterface} from '../../../models/charts/chart.interface';
import {ID} from '../../../../_shared/interfaces/interfaces';

@Component({
  selector: 'app-universal-plotting-bar',
  templateUrl: './universal-plotting-bar.component.html',
  styleUrls: ['./universal-plotting-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversalPlottingBarComponent implements ChartComponentInterface {
  @Input() id: ID;

  constructor() {
  }

  get chartId() {
    return `Chart4_${this.id}`;
  }

}
