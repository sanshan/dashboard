import {Component, OnInit} from '@angular/core';
import {map, shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {GridsterConfig, GridsterItem} from 'angular-gridster2';
import {DashboardGridOptionsService} from './services/grid/options/dashboard-grid-options.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private gridOptions$: Observable<GridsterConfig>;

  options: GridsterConfig = {};
  dashboard: GridsterItem[] = [];

  /**
   *  Стрим проверяющий размер экрана
   */
  public isHandset$: Observable<boolean> = this.observeHandset(Breakpoints.Handset);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dgOptionsService: DashboardGridOptionsService
  ) {
  }

  ngOnInit(): void {
    this.gridOptions$ = this.dgOptionsService.receiveOptions;

    /** подписываемся на обновление опций грида и реагируем на изменения в них */
    this.gridOptions$.subscribe(this.changedOptions);
  }

  /**
   * Получаю стрим проверяющий размер экрана
   *
   * @param type Размер экрана
   */
  private observeHandset(type): Observable<boolean> {
    return this.breakpointObserver.observe(type)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  /**
   * Изменить настройки
   *
   * @param options Объект с настройками
   */
  private changedOptions = (options: GridsterConfig) => {
    this.options = options;

    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

}
