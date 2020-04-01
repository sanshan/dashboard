import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Chart1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
