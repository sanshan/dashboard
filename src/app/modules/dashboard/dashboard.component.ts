import {ChangeDetectionStrategy, Component} from '@angular/core';
import {shareReplay, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Dashboard} from './models/dashboard/dashboard.interface';
import {DashboardService} from './services/dashboard/dashboard.service';
import {ID} from '../_shared/interfaces/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent  {

  readonly dashboard$: Observable<Dashboard<any>>;
  readonly isHandset$: Observable<boolean>;

  /** Дашборд поумолчанию */
  currentId: ID = 1;

  constructor(
    private _d: DashboardService,
    private _bp: BreakpointObserver
  ) {
    this.dashboard$ = this._getDashboard$(this.currentId);
    this.isHandset$ = this._getIsHandset$(Breakpoints.Handset);
  }

  /**
   * Получаю стрим проверяющий размер экрана
   *
   * @param type Размер экрана
   */
  private _getIsHandset$(type): Observable<boolean> {
    return this._bp.observe(type)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  /**
   * Получаю стрим с дашбордом
   *
   * @param dashboardId ID дашборда
   */
  private _getDashboard$(dashboardId: ID): Observable<Dashboard<any>> {
    return this._d.activate(dashboardId).dashboard$;
  }

}
