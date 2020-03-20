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
  private readonly form: FormGroup;

  constructor(
    private dgsFormService: DashboardGridSettingsFormService
  ) {
    this.form = this.initForm;
  }

  /**
   * Предоставляю форму во внешний мир
   */
  get getForm() {
    return this.form;
  }

  /**
   * Предоставляю стрим с параметрами формы во внешний мир
   */
  get params$() {
    return this.dgsFormService.params$;
  }

  /**
   * Инициализация формы
   */
  private get initForm() {
    return this.dgsFormService.form;
  }

}
