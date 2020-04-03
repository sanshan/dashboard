import {Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {DashboardGridSettingsService} from '../../services/dashboard-grid/settings/dashboard-grid-settings.service';
import {DashboardGridOptionsService} from '../../services/dashboard-grid/options/dashboard-grid-options.service';
import {DashboardGridSettingsFormService} from '../../services/dashboard-grid/settings/dashboard-grid-settings-form.service';


@Component({
  selector: 'app-dashboard-grid-settings',
  templateUrl: './dashboard-grid-settings.component.html',
  styleUrls: ['./dashboard-grid-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardGridSettingsComponent implements OnInit, AfterViewInit {
  constructor(
    private _dgs: DashboardGridSettingsService,
    private _dgo: DashboardGridOptionsService,
    private _dgf: DashboardGridSettingsFormService,
    private _change: ChangeDetectorRef,
  ) {
  }

  get params$() {
    return this._dgs.params$;
  }

  get form(): FormGroup {
    return this._dgs.form;
  }

  ngOnInit(): void {
    /** Сделим за изменениями в форме */
    this._settingsFormSubscribe();
  }

  ngAfterViewInit(): void {
    this._dgo.updateOptionSubject(
      this._dgo.settingsToOptions(
        this._dgf.formValue
      )
    );
  }

  /** Получить группу контролов из реактивной формы */
  getGroup(value): FormGroup {
    return this.form.get(value) as FormGroup;
  }

  /** Подписываемся и следим за изменениями в форме */
  private _settingsFormSubscribe() {
    this.form.valueChanges.subscribe(this.sendOptionsToGrid);
  }

  /** Отправка опций в сервис грида */
  sendOptionsToGrid = (groups: FormGroup) => {
    this._dgo.updateOptionSubject(this._dgo.settingsToOptions(groups));
  }

}
