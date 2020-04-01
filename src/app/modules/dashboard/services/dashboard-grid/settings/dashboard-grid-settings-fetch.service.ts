import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {GridParamGroupInterface} from '../../../models/grid/params/param.interface';
import {GRID_SETTINGS} from '../../../config/grid';


@Injectable({
  providedIn: 'root'
})
export class DashboardGridSettingsFetchService {

  private settingsSubject$: BehaviorSubject<GridParamGroupInterface[]>;
  readonly settings$: Observable<GridParamGroupInterface[]>;

  constructor() {
    this.settingsSubject$ = new BehaviorSubject<GridParamGroupInterface[]>([]);
    this.settings$ = this._initSettings$();

    this._updateSettingsSubject();
  }

  /** Получить текущее значение из стрима с настройками */
  get currentSettings(): GridParamGroupInterface[] {
    return this.settingsSubject$.value;
  }

  private _updateSettingsSubject() {
    this.settingsSubject$.next(this._getSettingsData());
  }

  private _getSettingsData() {
    return GRID_SETTINGS;
  }

  private _initSettings$() {
    return this.settingsSubject$.asObservable();
  }

}
