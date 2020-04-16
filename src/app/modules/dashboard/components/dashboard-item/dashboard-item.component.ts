import {Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef} from '@angular/core';
import {DashboardItem} from '../../models/dashboard/dashboard.interface';
import {ID} from '../../../_shared/interfaces/interfaces';
import {DashboardGridService} from '../../services/dashboard-grid/dashboard-grid.service';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardItemComponent implements OnInit {

  @Input() item: DashboardItem<any>;

  constructor(
    private _dg: DashboardGridService,
    private _cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this._dg.components$.subscribe((_) => {
      console.log('Список компонентов обновился');
      if (this._dg.dropIdValue.toString() === this.item._id.toString()) {
        console.log('Перерисовываю контейнер: ', this.item._id);
        this._cdr.detectChanges();
      }
    });
  }

  /**
   * Обновить ID контейнера над которым пронесли чарт
   *
   * @param $event Event
   * @param id ID
   */
  setDropId($event: Event, id: ID): void {
    this._dg.setDropId(id);
  }

  /**
   * Получить название добавляемого компонента
   *
   * @param id ID
   */
  getComponentRef(id: ID) {
    return this._dg.getComponentRef(id);
  }

}
