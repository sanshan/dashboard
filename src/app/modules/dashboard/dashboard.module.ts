import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

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


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardGridComponent,
    DashboardGridSettingsComponent,
    DynamicFieldDirective,
    GridTextInputControlComponent,
    GridNumberInputControlComponent,
    GridSelectControlComponent,
    GridCheckboxControlComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GridsterModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule {
}
