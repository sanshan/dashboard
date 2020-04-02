import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {TranslateModule} from '@ngx-translate/core';

import {SharedModule} from '../_shared/shared.module';
import {GridsterModule} from 'angular-gridster2';

import {DashboardComponent} from './dashboard.component';
import {DashboardGridComponent} from './components/dashboard-grid/dashboard-grid.component';
import {DashboardGridSettingsComponent} from './components/dashboard-grid-settings/dashboard-grid-settings.component';
import {DynamicFieldDirective} from './components/controls/dynamic-field.directive';
import {GridTextInputControlComponent} from './components/controls/grid-text-input-control/grid-text-input-control.component';
import {GridNumberInputControlComponent} from './components/controls/grid-number-input-control/grid-number-input-control.component';
import {GridSelectControlComponent} from './components/controls/grid-select-control/grid-select-control.component';
import {GridCheckboxControlComponent} from './components/controls/grid-checkbox-control/grid-checkbox-control.component';
import {DashboardRoutingModule} from './routing/dashboard-routing.module';
import {Chart1Component} from './_mock/components/chart1/chart1.component';
import {Chart2Component} from './_mock/components/chart2/chart2.component';
import {Chart3Component} from './_mock/components/chart3/chart3.component';
import {DashboardToolbarComponent} from './components/dashboard-toolbar/dashboard-toolbar.component';
import { DashboardToolbarItemComponent } from './components/dashboard-toolbar/dashboard-toolbar-item/dashboard-toolbar-item.component';
import { DynamicDashboardItemDirective } from './_mock/components/dynamic-dashboard-item.directive';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardGridComponent,
    DashboardGridSettingsComponent,
    DynamicFieldDirective,
    GridTextInputControlComponent,
    GridNumberInputControlComponent,
    GridSelectControlComponent,
    GridCheckboxControlComponent,
    Chart1Component,
    Chart2Component,
    Chart3Component,
    DashboardToolbarComponent,
    DashboardToolbarItemComponent,
    DynamicDashboardItemDirective
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    GridsterModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule {
}
