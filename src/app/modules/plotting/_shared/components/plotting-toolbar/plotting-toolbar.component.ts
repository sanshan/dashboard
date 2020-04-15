import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-plotting-toolbar',
  templateUrl: './plotting-toolbar.component.html',
  styleUrls: ['./plotting-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlottingToolbarComponent implements OnInit {

  @Input() title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
