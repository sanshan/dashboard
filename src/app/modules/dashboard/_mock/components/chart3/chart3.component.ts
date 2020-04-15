import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {ChartComponentInterface, ChartInterface} from '../../../models/charts/chart.interface';

@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Chart3Component implements OnInit, ChartComponentInterface {

  @Input() item: ChartInterface;

  public title = 'TEST text TEST text TEST text TEST text TEST text TEST text TEST text TEST text ';

  constructor() {
  }

  ngOnInit(): void {
  }

}
