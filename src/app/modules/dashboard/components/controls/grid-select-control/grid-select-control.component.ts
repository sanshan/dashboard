import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {GridSelectParamInterface} from '../../../models/grid/params/param.interface';
import {DynamicSelectControlComponentInterface} from '../../../models/grid/controls/control.interface';

@Component({
  selector: 'app-grid-select-control',
  templateUrl: './grid-select-control.component.html',
  styleUrls: ['./grid-select-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridSelectControlComponent implements DynamicSelectControlComponentInterface {

  @Input() param: GridSelectParamInterface;
  @Input() form: FormGroup;

}
