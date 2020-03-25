import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';

import {GridsterConfig, GridsterItem, GridsterItemComponent} from 'angular-gridster2';

@Component({
  selector: 'app-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardGridComponent implements OnInit, OnChanges {
  @Input() options: GridsterConfig;
  dashboard: GridsterItem[];
  itemToPush: GridsterItemComponent;

  ngOnInit() {
    this.dashboard = [
      {cols: 3, rows: 3, y: 0, x: 0},
      {cols: 3, rows: 4, y: 4, x: 2},
      {cols: 6, rows: 6, y: 6, x: 6}
    ];
  }

  ngOnChanges() {
    /** ТРЕБУЕТСЯ РЕФАКТОРИНГ */
    this.options.emptyCellClickCallback = this.emptyCellClick.bind(this);
    this.options.emptyCellDragCallback = this.emptyCellClick.bind(this);
    /** ********************* */
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  initItem(item: GridsterItem, itemComponent: GridsterItemComponent) {
    this.itemToPush = itemComponent;
  }

  /**
   * Обработка события клика по пустой ячейке
   *
   * @param event MouseEvent
   * @param item GridsterItem
   */
  emptyCellClick(event: MouseEvent, item: GridsterItem) {
    this.dashboard.push(item);
  }

}
