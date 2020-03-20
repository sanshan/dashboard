import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {DashboardGridSettingsFetchService} from './dashboard-grid-settings-fetch.service';
import {GridBaseParamInterface, GridParamGroupInterface} from '../../../models/grid/params/param.interface';
import {collectionReducer} from '../../../../_shared/helpers/functions';


@Injectable({
  providedIn: 'root'
})
export class DashboardGridSettingsFormService {

  private readonly paramsForm: FormGroup;

  constructor(
    private dgsFetchService: DashboardGridSettingsFetchService
  ) {
    this.paramsForm = this.generateForm(this.receiveSettings);
  }

  /**
   * Получить форму настройки грида
   */
  get form() {
    return this.paramsForm;
  }

  /**
   * Создать из группы параметров группы для реактивной формы
   */
  private generateForm(gridParams: GridParamGroupInterface[]): FormGroup {

    type CustomFormControl = {
      [x: string]: FormControl
    };

    type CustomFormGroup = {
      [x: string]: FormGroup
    };

    /**
     * Создание контрола для параметра
     *
     * @param control Контрол GridBaseParamInterface
     */
    const mapControl = (control: GridBaseParamInterface): CustomFormControl => {
      return {
        [control.paramName]: new FormControl(control.value)
      };
    };

    /**
     * Создание контрола для группы параметров
     *
     * @param group Группа параметров GridParamGroupInterface
     */
    const mapGroup = (group: GridParamGroupInterface): CustomFormGroup => {
      return {
        [group.title]: new FormGroup(group.controls.map(mapControl).reduce(collectionReducer, {}))
      };
    };

    /**
     * Объект для создания реактивной формы
     */
    const formObj = gridParams
      .map(mapGroup)
      .reduce(collectionReducer, {});

    return new FormGroup(formObj);
  }


  /**
   * Получить данные о параметрах из сервиса
   */
  private get receiveSettings(): GridParamGroupInterface[] {
    return this.dgsFetchService.currentSettings;
  }

  /**
   * Получить стрим с параметрами из сервиса
   */
  get params$() {
    return this.dgsFetchService.receiveSettings;
  }
}
