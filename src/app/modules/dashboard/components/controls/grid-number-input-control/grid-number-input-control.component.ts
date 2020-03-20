import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {GridInputNumberParamInterface} from '../../../models/grid/params/param.interface';
import {DynamicNumberInputControlComponentInterface} from '../../../models/grid/controls/control.interface';

@Component({
  selector: 'app-grid-number-input-control',
  templateUrl: './grid-number-input-control.component.html',
  styleUrls: ['./grid-number-input-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridNumberInputControlComponent implements DynamicNumberInputControlComponentInterface {

  @Input() param: GridInputNumberParamInterface;
  @Input() form: FormGroup;

}
