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
  private readonly settings$: Observable<GridParamGroupInterface[]>;

  constructor() {
    this.settingsSubject$ = new BehaviorSubject<GridParamGroupInterface[]>([]);
    this.settings$ = this.settingsSubject$.asObservable();

    this.updateSettingsSubject();
  }

  /** Получить стрим с настройками для панели конфигурации */
  get receiveSettings(): Observable<GridParamGroupInterface[]> {
    return this.settings$;
  }

  /** Получить текущее значение из стрима с настройками */
  get currentSettings(): GridParamGroupInterface[] {
    return this.settingsSubject$.value;
  }

  /** Отправить объект с настройками для панели конфигурации в стрим */
  private updateSettingsSubject() {
    this.settingsSubject$.next(this.getSettingsData());
  }

  /** Получить объект с настройками для панели конфигурации из внешнего источника */
  private getSettingsData() {
    return GRID_SETTINGS;
  }

}
