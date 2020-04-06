import {Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {DashboardGridSettingsService} from '../../services/dashboard-grid/settings/dashboard-grid-settings.service';
import {DashboardGridOptionsService} from '../../services/dashboard-grid/options/dashboard-grid-options.service';
import {DashboardGridSettingsFormService} from '../../services/dashboard-grid/settings/dashboard-grid-settings-form.service';
import {Role, UserService} from '../../_mock/user.service';
import {GridParamGroupInterface} from '../../models/grid/params/param.interface';
import {DashboardGridSettingsFetchService} from '../../services/dashboard-grid/settings/dashboard-grid-settings-fetch.service';


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
    private _dgfch: DashboardGridSettingsFetchService,
    private _cdr: ChangeDetectorRef,
    private _u: UserService
  ) {
  }

  get user() {
    return this._u.user;
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

    this._userSubscribe();
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

  /** Подписываемся и следим за измененим пользователя */
  private _userSubscribe() {
    this._u.user$.subscribe((user) => {
      console.log('UPDATE: ', user);
      this._cdr.markForCheck();
    });
  }


  /** Отправка опций в сервис грида */
  sendOptionsToGrid = (groups: FormGroup) => {
    this._dgo.updateOptionSubject(this._dgo.settingsToOptions(groups));
  }

  switchUser(role: Role) {
    console.log('ACTIVATE ROLE: ', role);

    console.log('BEFORE switchUser(): ', this._dgfch.settingsValue);

    const groups = this._dgfch.getSettingsData()
      .map((group) => {
        return {
          title: group.title,
          controls: group.controls.filter((control) => {
            return control.access.indexOf(role) !== -1;
          })
        } as GridParamGroupInterface;
      });

    console.log('AFTER switchUser(): ', groups);

    this._dgfch.updateSettingsSubject(groups);

    // console.log(groups);

    //
    // this._u.updateUserSubject(role);
    // this._cdr.markForCheck();
  }

}
