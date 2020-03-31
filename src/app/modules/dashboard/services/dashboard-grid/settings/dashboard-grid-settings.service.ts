import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {DashboardGridSettingsFormService} from './dashboard-grid-settings-form.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardGridSettingsService {

  /**
   * Рекативня форма для управления параметрами грида
   */
  readonly form: FormGroup;

  constructor(
    private _dgsf: DashboardGridSettingsFormService
  ) {
    this.form = this._getForm();
  }

  /**
   * Предоставляю стрим с параметрами формы во внешний мир
   */
  get params$() {
    return this._dgsf.params$;
  }

  /**
   * Инициализация формы
   */
  private _getForm() {
    return this._dgsf.form;
  }

}
