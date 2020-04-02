import {GridCheckboxControlComponent} from '../components/controls/grid-checkbox-control/grid-checkbox-control.component';
import {GridNumberInputControlComponent} from '../components/controls/grid-number-input-control/grid-number-input-control.component';
import {GridTextInputControlComponent} from '../components/controls/grid-text-input-control/grid-text-input-control.component';
import {GridSelectControlComponent} from '../components/controls/grid-select-control/grid-select-control.component';
import {GridControlComponents, GridParamGroupInterface} from '../models/grid/params/param.interface';
import {CompactType, DisplayGrid, GridType} from 'angular-gridster2';

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
    title: 'Grid sizes',
    controls: [
      {
        paramName: 'maxCols',
        controlType: 'InputNumber',
        labelText: 'Max cols',
        additionalText: 'Maximum amount of columns in the dashboard-grid',
        value: 12,
        default: 12
      },
      {
        paramName: 'maxRows',
        controlType: 'InputNumber',
        labelText: 'Max rows',
        additionalText: 'Maximum amount of rows in the dashboard-grid',
        value: 12,
        default: 12
      },
      {
        paramName: 'minCols',
        controlType: 'InputNumber',
        labelText: 'Min cols',
        additionalText: 'Minimum amount of columns in the dashboard-grid',
        value: 12,
        default: 12
      },
      {
        paramName: 'minRows',
        controlType: 'InputNumber',
        labelText: 'Min rows',
        additionalText: 'Minimum amount of rows in the dashboard-grid',
        value: 12,
        default: 12
      },
      {
        paramName: 'maxItemCols',
        controlType: 'InputNumber',
        labelText: 'Max item cols',
        additionalText: 'maximum item number of cols',
        value: 12,
        default: 12
      },
      {
        paramName: 'minItemCols',
        controlType: 'InputNumber',
        labelText: 'Min item cols',
        additionalText: 'minimum item number of cols',
        value: 1,
        default: 1
      },
      {
        paramName: 'maxItemRows',
        controlType: 'InputNumber',
        labelText: 'Max item rows',
        additionalText: 'maximum item number of rows',
        value: 12,
        default: 12
      },
      {
        paramName: 'minItemRows',
        controlType: 'InputNumber',
        labelText: 'Min item rows',
        additionalText: 'minimum item number of rows',
        value: 1,
        default: 1
      },
      {
        paramName: 'minItemArea',
        controlType: 'InputNumber',
        labelText: 'Min item area',
        additionalText: 'minimum item area: cols * rows',
        value: 1,
        default: 1
      },
      {
        paramName: 'maxItemArea',
        controlType: 'InputNumber',
        labelText: 'Max item area',
        additionalText: 'maximum item area: cols * rows',
        value: 144,
        default: 144
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
      },
      {
        paramName: 'draggable.dropOverItems',
        controlType: 'Checkbox',
        labelText: 'Drop over another',
        additionalText: 'enable items drop over another, will work if swap and push is disabled',
        value: false,
        default: false
      },
      {
        paramName: 'swap',
        controlType: 'Checkbox',
        labelText: 'Swap items',
        additionalText: 'allow items to switch position if drop on top of another',
        value: true,
        default: true
      }
    ]
  },
  {
    title: 'Resize&Add',
    controls: [
      {
        paramName: 'resizable.enabled',
        controlType: 'Checkbox',
        labelText: 'Resizable items',
        additionalText: 'enable/disable resizable items',
        value: false,
        default: false
      },
      {
        paramName: 'resizable.delayStart',
        controlType: 'InputNumber',
        labelText: 'Delay start ms',
        additionalText: 'milliseconds to delay the start of resize, useful for touch interaction',
        value: 0,
        default: 0
      },
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
        paramName: 'enableEmptyCellDrop',
        controlType: 'Checkbox',
        labelText: 'Enable drop to add',
        additionalText: 'Enable drop to add',
        value: false,
        default: false
      },
      {
        paramName: 'enableOccupiedCellDrop',
        controlType: 'Checkbox',
        labelText: ' Enable drop on occupied cell',
        additionalText: 'enable occupied cell drop events',
        value: false,
        default: false
      },
      {
        paramName: 'enableEmptyCellContextMenu',
        controlType: 'Checkbox',
        labelText: 'Enable right click to add',
        additionalText: 'enable empty cell context menu (right click) events',
        value: false,
        default: false
      },
      {
        paramName: 'emptyCellDragMaxCols',
        controlType: 'InputNumber',
        labelText: 'Drag max colls',
        additionalText: 'limit empty cell drag max rows',
        value: 50,
        default: 50
      },
      {
        paramName: 'emptyCellDragMaxRows',
        controlType: 'InputNumber',
        labelText: 'Drag max rows',
        additionalText: 'limit empty cell drag max rows',
        value: 50,
        default: 50
      }
    ]
  },
  {
    title: 'Grid Types',
    controls: [
      {
        paramName: 'gridType',
        controlType: 'Select',
        labelText: 'Grid type',
        additionalText: 'different types for layout for the dashboard-grid',
        value: GridType.Fit,
        default: GridType.Fit,
        options: [
          {key: GridType.Fit, value: GridType.Fit},
          {key: GridType.ScrollVertical, value: GridType.ScrollVertical},
          {key: GridType.ScrollHorizontal, value: GridType.ScrollHorizontal},
          {key: GridType.Fixed, value: GridType.Fixed},
          {key: GridType.VerticalFixed, value: GridType.VerticalFixed},
          {key: GridType.HorizontalFixed, value: GridType.HorizontalFixed},
        ]
      },
      {
        paramName: 'fixedColWidth',
        controlType: 'InputNumber',
        labelText: 'Fixed col width(px)',
        additionalText: 'fixed col width for gridType: fixed',
        value: 200,
        default: 200
      },
      {
        paramName: 'fixedRowHeight',
        controlType: 'InputNumber',
        labelText: 'Fixed row height(px)',
        additionalText: 'fixed row height for gridType: fixed',
        value: 100,
        default: 100
      },
      {
        paramName: 'keepFixedWidthInMobile',
        controlType: 'Checkbox',
        labelText: 'Keep fixed width in mobile',
        additionalText: 'keep the width from fixed gridType in mobile layout',
        value: false,
        default: false
      },
      {
        paramName: 'keepFixedHeightInMobile',
        controlType: 'Checkbox',
        labelText: 'Keep fixed height in mobile',
        additionalText: 'keep the height from fixed gridType in mobile layout',
        value: false,
        default: false
      },
      {
        paramName: 'mobileBreakpoint',
        controlType: 'InputNumber',
        labelText: 'Mobile breakpoint',
        additionalText: 'if the screen is not wider that this, remove the grid layout and stack the items',
        value: 640,
        default: 640
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
        additionalText: 'dashboard-grid compact items',
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
        labelText: 'Display dashboard-grid lines',
        additionalText: 'display background dashboard-grid of rows and columns',
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
    title: 'Margins',
    controls: [
      {
        paramName: 'margin',
        controlType: 'InputNumber',
        labelText: 'Margin',
        additionalText: 'margin between grid items',
        value: 10,
        default: 10
      },
      {
        paramName: 'outerMargin',
        controlType: 'Checkbox',
        labelText: 'Outer margin',
        additionalText: 'if margins will apply to the sides of the container',
        value: true,
        default: true
      },
      {
        paramName: 'outerMarginTop',
        controlType: 'InputNumber',
        labelText: 'Grid margin top',
        additionalText: 'override top outer margin for grid',
        value: null,
        default: null
      },
      {
        paramName: 'outerMarginRight',
        controlType: 'InputNumber',
        labelText: 'Grid margin right',
        additionalText: 'override right outer margin for grid',
        value: null,
        default: null
      },
      {
        paramName: 'outerMarginBottom',
        controlType: 'InputNumber',
        labelText: 'Grid margin bottom',
        additionalText: 'override bottom outer margin for grid',
        value: null,
        default: null
      },
      {
        paramName: 'outerMarginLeft',
        controlType: 'InputNumber',
        labelText: 'Grid margin left',
        additionalText: 'override left outer margin for grid',
        value: null,
        default: null
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
        additionalText: 'enable/disable auto horizontal scrolling when on edge of dashboard-grid',
        value: 0,
        default: 0
      },
      {
        paramName: 'disableScrollVertical',
        controlType: 'Checkbox',
        labelText: 'Disable vertical scroll',
        additionalText: 'enable/disable auto vertical scrolling when on edge of dashboard-grid',
        value: 0,
        default: 0
      }
    ]
  },
  {
    title: 'Push',
    controls: [
      {
        paramName: 'pushItems',
        controlType: 'Checkbox',
        labelText: 'Push items',
        additionalText: 'push items when resizing and dragging',
        value: true,
        default: true
      },
      {
        paramName: 'disablePushOnDrag',
        controlType: 'Checkbox',
        labelText: 'Disable Push On Drag',
        additionalText: 'disable push on drag',
        value: false,
        default: false
      },
      {
        paramName: 'disablePushOnResize',
        controlType: 'Checkbox',
        labelText: 'Disable Push On Resize',
        additionalText: 'disable push on resize',
        value: false,
        default: false
      },
      {
        paramName: 'pushResizeItems',
        controlType: 'Checkbox',
        labelText: 'Push Resize Items',
        additionalText: 'on resize of item will shrink adjacent items',
        value: true,
        default: true
      }
    ]
  }
];
