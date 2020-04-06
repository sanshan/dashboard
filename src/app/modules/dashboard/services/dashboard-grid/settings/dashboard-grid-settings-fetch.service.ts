import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {GridParamGroupInterface} from '../../../models/grid/params/param.interface';
import {GRID_SETTINGS} from '../../../config/grid';
import {merge} from '../../../../_shared/helpers/functions';


@Injectable({
  providedIn: 'root'
})
export class DashboardGridSettingsFetchService {

  private _settingsSubject$: BehaviorSubject<GridParamGroupInterface[]>;
  readonly settings$: Observable<GridParamGroupInterface[]>;

  constructor() {
    this._settingsSubject$ = new BehaviorSubject<GridParamGroupInterface[]>([]);
    this.settings$ = this._initSettings$();

    this.updateSettingsSubject(this.getSettingsData());
  }

  /** Получить текущее значение из стрима с настройками */
  get settingsValue(): GridParamGroupInterface[] {
    return merge(this._settingsSubject$.value) as GridParamGroupInterface[];
  }

  updateSettingsSubject(settings: GridParamGroupInterface[]) {
    this._settingsSubject$.next(settings);
  }

  getSettingsData() {
    return GRID_SETTINGS;
  }

  private _initSettings$() {
    return this._settingsSubject$.asObservable();
  }

}
