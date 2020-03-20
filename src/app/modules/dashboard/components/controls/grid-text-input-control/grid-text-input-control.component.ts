import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {GridInputTextParamInterface} from '../../../models/grid/params/param.interface';
import {DynamicTextInputControlComponentInterface} from '../../../models/grid/controls/control.interface';

@Component({
  selector: 'app-grid-text-input-control',
  templateUrl: './grid-text-input-control.component.html',
  styleUrls: ['./grid-text-input-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridTextInputControlComponent implements DynamicTextInputControlComponentInterface {

  @Input() param: GridInputTextParamInterface;
  @Input() form: FormGroup;

}
