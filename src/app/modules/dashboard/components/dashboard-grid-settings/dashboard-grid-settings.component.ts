import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

import {DashboardGridSettingsService} from '../../services/dashboard-grid/settings/dashboard-grid-settings.service';
import {GridParamGroupInterface} from '../../models/grid/params/param.interface';
import {DashboardGridOptionsService} from '../../services/dashboard-grid/options/dashboard-grid-options.service';


@Component({
  selector: 'app-dashboard-grid-settings',
  templateUrl: './dashboard-grid-settings.component.html',
  styleUrls: ['./dashboard-grid-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardGridSettingsComponent implements OnInit {

  readonly form: FormGroup;

  /** Стрим с параметрами формы */
  readonly params$: Observable<GridParamGroupInterface[]>;

  constructor(
    private _dgs: DashboardGridSettingsService,
    private _dgo: DashboardGridOptionsService
  ) {
    this.params$ = this._getParams$();
    this.form = this._getForm();
  }

  ngOnInit(): void {
    /** Сделим за изменениями в форме */
    this._settingsFormSubscribe();
  }

  /** Получить группу контролов из реактивной формы */
  getGroup(value): FormGroup {
    return this.form.get(value) as FormGroup;
  }

  /** Получить реактивную форму из сервиса */
  private _getForm() {
    return this._dgs.form;
  }

  /** Получить трим с параметрами формы */
  private _getParams$() {
    return this._dgs.params$;
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
