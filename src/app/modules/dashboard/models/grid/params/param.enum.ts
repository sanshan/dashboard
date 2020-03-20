/**
 * Список возможных контролов для параметров
 */
export enum controlTypes {
  Select,
  InputText,
  InputNumber,
  Checkbox
}

/**
 * Перечень параметров грида
 */
export enum gridParams {
  compactType = 'compactType',                                            // compact items (enum GridCompact)
  displayGrid = 'displayGrid',                                            // display background grid of rows and columns (enum DisplayGrid)
  'draggable.enabled' = 'draggable.enabled',                              // enable/disable draggable items
  'draggable.delayStart' = 'draggable.delayStart',                        // milliseconds to delay the start of drag, useful for touch interaction
  disableScrollHorizontal = 'disableScrollHorizontal',                    // enable/disable auto horizontal scrolling when on edge of grid
  disableScrollVertical = 'disableScrollVertical',                        // enable/disable auto vertical scrolling when on edge of grid
  enableEmptyCellDrag = 'enableEmptyCellDrag'                             // enable empty cell drag events
}

/**
 * Перечисление возможных значений для displayGrid
 */
// export enum DisplayGrid {
//   'always' = 'always',
//   'onDrag&Resize' = 'onDrag&Resize',
//   'none' = 'none'
// }

/**
 * Перечисление возможных значений для CompactType
 */
// export enum GridCompact {
//   'none' = 'none',
//   'compactUp' = 'compactUp',
//   'compactLeft' = 'compactLeft',
//   'compactUp&Left' = 'compactUp&Left',
//   'compactLeft&Up' = 'compactLeft&Up',
//   'compactRight' = 'compactRight',
//   'compactUp&Right' = 'compactUp&Right',
//   'compactRight&Up' = 'compactRight&Up'
// }

/**
 * Возможные варианты компоновки элементов в гриде
 *
 * "fit" - will fit the items in the container without scroll
 * "scrollVertical" - will fit on width and height of the items will be the same as the width
 * "scrollHorizontal" - will fit on height and width of the items will be the same as the height
 * "fixed" - will set the rows and columns dimensions based on fixedColWidth and fixedRowHeight options
 * "verticalFixed" - will set the rows to fixedRowHeight and columns width will fit the space available
 * "horizontalFixed" - will set the columns to fixedColWidth and rows height will fit the space available
 */
// export enum GridType {
//   'fit',
//   'scrollVertical',
//   'scrollHorizontal',
//   'fixed',
//   'verticalFixed',
//   'horizontalFixed'
// }
