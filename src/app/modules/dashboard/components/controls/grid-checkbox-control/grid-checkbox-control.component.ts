import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {GridCheckboxParamInterface} from '../../../models/grid/params/param.interface';
import {DynamicCheckboxControlComponentInterface} from '../../../models/grid/controls/control.interface';


@Component({
  selector: 'app-grid-checkbox-control',
  templateUrl: './grid-checkbox-control.component.html',
  styleUrls: ['./grid-checkbox-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridCheckboxControlComponent implements DynamicCheckboxControlComponentInterface {

  @Input() param: GridCheckboxParamInterface;
  @Input() form: FormGroup;

}
