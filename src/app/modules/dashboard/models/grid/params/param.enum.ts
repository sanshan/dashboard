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
  'compactType' = 'compactType',                                          // compact items (enum GridCompact)
  'displayGrid' = 'displayGrid',                                          // display background grid of rows and columns (enum DisplayGrid)
  'draggable.enabled' = 'draggable.enabled',                              // enable/disable draggable items
  'draggable.delayStart' = 'draggable.delayStart',                        // milliseconds to delay the start of drag, useful for touch interaction
  'disableScrollHorizontal' = 'disableScrollHorizontal',                  // enable/disable auto horizontal scrolling when on edge of grid
  'disableScrollVertical' = 'disableScrollVertical',                      // enable/disable auto vertical scrolling when on edge of grid
  'enableEmptyCellDrag' = 'enableEmptyCellDrag',                          // enable empty cell drag events
  'enableEmptyCellClick' = 'enableEmptyCellClick',                        // enable empty cell click events
  'draggable.ignoreContent' = 'draggable.ignoreContent',                  // if true drag will start only from elements from dragHandleClass
  'draggable.dragHandleClass' = 'draggable.dragHandleClass',              // drag event only from this class. If ignoreContent is true
  'draggable.ignoreContentClass' = 'draggable.ignoreContentClass',        // default content class to ignore the drag event from
  'draggable.dropOverItems' = 'draggable.dropOverItems',                  // enable items drop over another, will work if swap and push is disabled
  'enableEmptyCellContextMenu' = 'enableEmptyCellContextMenu',            // enable empty cell context menu (right click) events
  'enableEmptyCellDrop' = 'enableEmptyCellDrop',                          // enable empty cell drop events
  'enableOccupiedCellDrop' = 'enableOccupiedCellDrop',                    // enable occupied cell drop events
  'emptyCellDragMaxRows' = 'emptyCellDragMaxRows',                        // limit empty cell drag max rows
  'emptyCellDragMaxCols' = 'emptyCellDragMaxCols',                        // limit empty cell drag max cols
  'margin' = 'margin',                                                    // margin between grid items
  'outerMargin' = 'outerMargin',                                          // if margins will apply to the sides of the container
  'outerMarginTop' = 'outerMarginTop',                                    // override top outer margin for grid
  'outerMarginRight' = 'outerMarginRight',                                // override right outer margin for grid
  'outerMarginBottom' = 'outerMarginBottom',                              // override bottom outer margin for grid
  'outerMarginLeft' = 'outerMarginLeft',                                  // override left outer margin for grid
  'minCols' = 'minCols',                                                  // minimum amount of columns in the grid
  'maxCols' = 'maxCols',                                                  // maximum amount of columns in the grid
  'minRows' = 'minRows',                                                  // minimum amount of rows in the grid
  'maxRows' = 'maxRows',                                                  // maximum amount of rows in the grid
  'defaultItemCols' = 'defaultItemCols',                                  // default width of an item in columns
  'defaultItemRows' = 'defaultItemRows',                                  // default height of an item in rows
  'minItemCols' = 'minItemCols',                                          // minimum item number of cols
  'maxItemCols' = 'maxItemCols',                                          // maximum item number of cols
  'minItemRows' = 'minItemRows',                                          // minimum item number of rows
  'maxItemRows' = 'maxItemRows',                                          // maximum item number of rows
  'minItemArea' = 'minItemArea',                                          // minimum item area: cols * rows
  'maxItemArea' = 'maxItemArea',                                          // maximum item area: cols * rows
  'gridType' = 'gridType',                                                // different types for layout for the grid
  'fixedColWidth' = 'fixedColWidth',                                      // fixed col width for gridType: fixed
  'fixedRowHeight' = 'fixedRowHeight',                                    // fixed row height for gridType: fixed
  'keepFixedHeightInMobile' = 'keepFixedHeightInMobile',                  // keep the height from fixed gridType in mobile layout
  'keepFixedWidthInMobile' = 'keepFixedWidthInMobile',                    // keep the width from fixed gridType in mobile layout
  'setGridSize' = 'setGridSize',                                          // sets grid size depending on content
  'mobileBreakpoint' = 'mobileBreakpoint',                                // if the screen is not wider that this, remove the grid layout and stack the items
  'x' = 'x',                                                              // x position if missing will auto position
  'y' = 'y',                                                              // y position if missing will auto position
  'rows' = 'rows',                                                        // number of rows if missing will use grid option defaultItemRows
  'cols' = 'cols',                                                        // number of columns if missing will use grid option defaultItemCols
  'pushItems' = 'pushItems',                                              // push items when resizing and dragging
  'disablePushOnDrag' = 'disablePushOnDrag',                              // disable push on drag
  'disablePushOnResize' = 'disablePushOnResize',                          // disable push on resize
  'pushResizeItems' = 'pushResizeItems',                                  // on resize of item will shrink adjacent items
  // 'pushDirections' = 'pushDirections',                                 // control the directions items are pushed          | рефакторинг, значение является объектом, такая ситуация не описана
  'resizable.enabled' = 'resizable.enabled',                              // enable/disable resizable items
  'resizable.delayStart' = 'resizable.delayStart',                        // milliseconds to delay the start of resize, useful for touch interaction
  // 'resizable.handles' = 'resizable.handles',                              // resizable edges of an item                    | рефакторинг, значение является объектом, такая ситуация не описана
  'swap' = 'swap',                                                        // allow items to switch position if drop on top of another
  'swapWhileDragging' = 'swapWhileDragging',                              // swap items while dragging and save new position
}
