import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-item-toolbar-menu',
  templateUrl: './dashboard-item-toolbar-menu.component.html',
  styleUrls: ['./dashboard-item-toolbar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardItemToolbarMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
