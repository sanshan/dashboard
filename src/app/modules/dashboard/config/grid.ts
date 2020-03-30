import {GridCheckboxControlComponent} from '../components/controls/grid-checkbox-control/grid-checkbox-control.component';
import {GridNumberInputControlComponent} from '../components/controls/grid-number-input-control/grid-number-input-control.component';
import {GridTextInputControlComponent} from '../components/controls/grid-text-input-control/grid-text-input-control.component';
import {GridSelectControlComponent} from '../components/controls/grid-select-control/grid-select-control.component';
import {GridControlComponents, GridParamGroupInterface} from '../models/grid/params/param.interface';
import {CompactType, DisplayGrid} from 'angular-gridster2';

/** Список доступных компонент для панели настроек грида. */
export const GRID_CONTROL_COMPONENTS: GridControlComponents<any> = {
  Checkbox: GridCheckboxControlComponent,
  InputNumber: GridNumberInputControlComponent,
  InputText: GridTextInputControlComponent,
  Select: GridSelectControlComponent
};

/** Конфигурация панели с настройками грида */
export const GRID_SETTINGS: GridParamGroupInterface[] = [
  {
    title: 'Width&Height',
    controls: [
      {
        paramName: 'maxCols',
        controlType: 'InputNumber',
        labelText: 'Max cols',
        additionalText: 'Maximum amount of columns in the grid',
        value: 12,
        default: 12
      },
      {
        paramName: 'maxRows',
        controlType: 'InputNumber',
        labelText: 'Max rows',
        additionalText: 'Maximum amount of rows in the grid',
        value: 12,
        default: 12
      },
      {
        paramName: 'minCols',
        controlType: 'InputNumber',
        labelText: 'Min cols',
        additionalText: 'Minimum amount of columns in the grid',
        value: 12,
        default: 12
      },
      {
        paramName: 'minRows',
        controlType: 'InputNumber',
        labelText: 'Min rows',
        additionalText: 'Minimum amount of rows in the grid',
        value: 12,
        default: 12
      }
    ]
  },
  {
    title: 'Drag&Drop',
    controls: [
      {
        paramName: 'draggable.enabled',
        controlType: 'Checkbox',
        labelText: 'Drag Items',
        additionalText: 'enable/disable draggable items',
        value: false,
        default: false
      },
      {
        paramName: 'draggable.delayStart',
        controlType: 'InputNumber',
        labelText: 'Delay start ms',
        additionalText: 'milliseconds to delay the start of drag, useful for touch interaction',
        value: 0,
        default: 0
      }
    ]
  },
  {
    title: 'Resize&Add',
    controls: [
      {
        paramName: 'enableEmptyCellClick',
        controlType: 'Checkbox',
        labelText: 'Click to add',
        additionalText: 'enable empty cell click events',
        value: false,
        default: false
      },
      {
        paramName: 'enableEmptyCellDrag',
        controlType: 'Checkbox',
        labelText: 'Drag to add',
        additionalText: 'enable empty cell drag events',
        value: false,
        default: false
      },
      {
        paramName: 'resizable.enabled',
        controlType: 'Checkbox',
        labelText: 'Resizable items',
        additionalText: 'enable/disable resizable items',
        value: false,
        default: false
      }
    ]
  },
  {
    title: 'View',
    controls: [
      {
        paramName: 'compactType',
        controlType: 'Select',
        labelText: 'Compact Type',
        additionalText: 'grid compact items',
        value: CompactType.None,
        default: CompactType.None,
        options: [
          {key: CompactType.None, value: CompactType.None},
          {key: CompactType.CompactLeft, value: CompactType.CompactLeft},
          {key: CompactType.CompactRight, value: CompactType.CompactRight},
          {key: CompactType.CompactUp, value: CompactType.CompactUp},
          {key: CompactType.CompactLeftAndUp, value: CompactType.CompactLeftAndUp},
          {key: CompactType.CompactRightAndUp, value: CompactType.CompactRightAndUp},
          {key: CompactType.CompactUpAndLeft, value: CompactType.CompactUpAndLeft},
          {key: CompactType.CompactUpAndRight, value: CompactType.CompactUpAndRight},
        ]
      },
      {
        paramName: 'displayGrid',
        controlType: 'Select',
        labelText: 'Display grid lines',
        additionalText: 'display background grid of rows and columns',
        value: DisplayGrid.OnDragAndResize,
        default: DisplayGrid.OnDragAndResize,
        options: [
          {key: DisplayGrid.OnDragAndResize, value: DisplayGrid.OnDragAndResize},
          {key: DisplayGrid.Always, value: DisplayGrid.Always},
          {key: DisplayGrid.None, value: DisplayGrid.None},
        ]
      }
    ]
  },
  {
    title: 'Scroll',
    controls: [
      {
        paramName: 'disableScrollHorizontal',
        controlType: 'Checkbox',
        labelText: 'Disable horizontal scroll',
        additionalText: 'enable/disable auto horizontal scrolling when on edge of grid',
        value: 0,
        default: 0
      },
      {
        paramName: 'disableScrollVertical',
        controlType: 'Checkbox',
        labelText: 'Disable vertical scroll',
        additionalText: 'enable/disable auto vertical scrolling when on edge of grid',
        value: 0,
        default: 0
      }
    ]
  }
];
