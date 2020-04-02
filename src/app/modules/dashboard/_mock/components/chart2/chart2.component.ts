import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {ChartComponentInterface, ChartInterface} from '../../../models/charts/chart.interface';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Chart2Component implements OnInit, ChartComponentInterface {

  @Input() item: ChartInterface;

  constructor() {
  }

  ngOnInit(): void {
  }

}
