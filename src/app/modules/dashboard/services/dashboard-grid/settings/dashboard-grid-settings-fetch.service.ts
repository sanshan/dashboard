import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {GridParamGroupInterface} from '../../../models/grid/params/param.interface';
import {GRID_SETTINGS} from '../../../config/grid';


@Injectable({
  providedIn: 'root'
})
export class DashboardGridSettingsFetchService {

  private settingsSubject$: BehaviorSubject<GridParamGroupInterface[]>;

  /** Стрим с настройками для панели конфигурации */
  readonly settings$: Observable<GridParamGroupInterface[]>;

  constructor() {
    this.settingsSubject$ = new BehaviorSubject<GridParamGroupInterface[]>([]);
    this.settings$ = this.settingsSubject$.asObservable();

    this._updateSettingsSubject();
  }

  /** Получить текущее значение из стрима с настройками */
  get currentSettings(): GridParamGroupInterface[] {
    return this.settingsSubject$.value;
  }

  /** Отправить объект с настройками для панели конфигурации в стрим */
  private _updateSettingsSubject() {
    this.settingsSubject$.next(this._getSettingsData());
  }

  /** Получить объект с настройками для панели конфигурации из внешнего источника */
  private _getSettingsData() {
    return GRID_SETTINGS;
  }

}
