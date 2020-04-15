import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlottingToolbarComponent} from './_shared/components/plotting-toolbar/plotting-toolbar.component';
import {PlottingToolbarMenuComponent} from './_shared/components/plotting-toolbar/plotting-toolbar-menu/plotting-toolbar-menu.component';
import {SharedModule} from '../_shared/shared.module';


@NgModule({
  declarations: [PlottingToolbarComponent, PlottingToolbarMenuComponent],
  exports: [
    PlottingToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PlottingModule {
}
