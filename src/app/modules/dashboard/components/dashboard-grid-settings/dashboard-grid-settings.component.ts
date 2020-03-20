import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

import {DashboardGridSettingsService} from '../../services/grid/settings/dashboard-grid-settings.service';
import {GridParamGroupInterface} from '../../models/grid/params/param.interface';
import {DashboardGridOptionsService} from '../../services/grid/options/dashboard-grid-options.service';


@Component({
  selector: 'app-dashboard-grid-settings',
  templateUrl: './dashboard-grid-settings.component.html',
  styleUrls: ['./dashboard-grid-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardGridSettingsComponent implements OnInit {

  settingsForm: FormGroup;

  /** Стрим с параметрами формы */
  params$: Observable<GridParamGroupInterface[]>;

  /** Реактивная форма */
  get form(): FormGroup {
    return this.settingsForm;
  }

  constructor(
    private dgs: DashboardGridSettingsService,
    private dgo: DashboardGridOptionsService
  ) {
  }

  ngOnInit(): void {
    /** Инициализируется реактивная форма с параметрами грида */
    this.settingsForm = this.getForm();

    /** Инициализируется стрим с конфигурацией формы */
    this.params$ = this.getParams();

    /** Сделим за изменениями в форме */
    this.settingsFormSubscribe();
  }

  /** Получить группу контролов из реактивной формы */
  getGroup(value): FormGroup {
    return this.form.get(value) as FormGroup;
  }

  /** Получить реактивную форму из сервиса */
  private getForm() {
    return this.dgs.getForm;
  }

  /** Получить трим с параметрами формы */
  private getParams() {
    return this.dgs.params$;
  }

  /** Подписываемся и следим за изменениями в форме */
  private settingsFormSubscribe() {
    this.settingsForm.valueChanges.subscribe(this.sendOptionsToGrid);
  }

  /** Отправка опций в сервис грида */
  sendOptionsToGrid = (groups: FormGroup) => {
    this.dgo.updateOptionSubject(this.dgo.settingsToOptions(groups));
  }

}
