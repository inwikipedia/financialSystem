/*!
 * 
 * Spread.Sheets Library 12.0.0
 * 
 * Copyright(c) GrapeCity, Inc.  All rights reserved.
 * 
 * Licensed under the SpreadJS Commercial License.
 * us.sales@grapecity.com
 * http://www.grapecity.com/en/licensing/grapecity/
 * 
 * 
 */
var GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["Fill"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    __webpack_require__(1);
	    __webpack_require__(6);
	    __webpack_require__(7);
	    var exports = __webpack_require__(4);
	    exports.SR = {};
	    exports.SR['en'] = __webpack_require__(9);
	    module.exports = exports;
	
	}());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var Sheets = __webpack_require__(2);
	    var Common = __webpack_require__(3);
	    var Fill = __webpack_require__(4);
	
	    var isNullOrUndefined = Common._Types._isNullOrUndefined, keyword_null = null, createRange = Sheets._createRange,
	        $ = Sheets.GC$, Math_max = Math.max, Math_floor = Math.floor;
	    var Commands = Sheets.Commands, ActionBase = Commands.ActionBase, ChangedCells = Commands._ChangedCells,
	        raiseRangeDataChanged = Commands._raiseRangeDataChanged;
	    var Events = Sheets.Events, ALL_OPTION = 1023 , START_RANGE = 'startRange', FILL_RANGE = 'fillRange',
	        AUTO_FILL_TYPE = 'autoFillType', FILL_DIRECTION = 'fillDirection', CANCEL = 'cancel', FILL = 'fill', DRAG_DROP = 'dragDrop',
	        $_isEmptyObject = $.isEmptyObject;
	
	    var sR = function () {
	        return Common._getResource(Fill.SR)();
	    };
	
	    function getRowCount(obj) {
	        return obj.rowCount;
	    }
	    function getColCount(obj) {
	        return obj.colCount;
	    }
	    function getSheetRowCount(sheet, sheetArea) {
	        return sheet.getRowCount(sheetArea);
	    }
	    function getSheetColumnCount(sheet, sheetArea) {
	        return sheet.getColumnCount(sheetArea);
	    }
	
	   
	    function checkFillRange(startRange, wholeRange, series, direction) {
	        if (!startRange || !wholeRange || !wholeRange.containsRange(startRange)) {
	            return false;
	        }
	        if (!isNullOrUndefined(series)) { 
	            if (series === 1  && startRange.row === wholeRange.row && getRowCount(startRange) === getRowCount(wholeRange) ||
	                series === 0  && startRange.col === wholeRange.col && getColCount(startRange) === getColCount(wholeRange)) {
	                return true;
	            }
	        }
	        if (!isNullOrUndefined(direction)) { 
	            if ((direction === 2  || direction === 3 ) && startRange.col === wholeRange.col && getColCount(startRange) === getColCount(wholeRange) ||
	                (direction === 0  || direction === 1 ) && startRange.row === wholeRange.row && getRowCount(startRange) === getRowCount(wholeRange)) {
	                return true;
	            }
	        }
	        return false;
	    }
	    var sheetEx = {
	       
	        
	        fillAuto: function (startRange, wholeRange, options) {
	            if (!wholeRange) {
	                throw new Error(sR().Exp_RangeIsNull);
	            }
	            var self = this, fillType = options.fillType, series = options.series, direction = options.direction, step = options.step, stop = options.stop,
	                fill = new Fill._FillImp(self);
	            if (!checkFillRange(startRange, wholeRange, direction ? keyword_null : series, direction)) {
	                return;
	            }
	            if (startRange) {
	                self._eventHandler._dragFillStartRange = startRange;
	            }
	            if (fillType === 4 ) {
	                fill._fillAuto(wholeRange, series, false, options.withTag, options.withoutStyle);
	            } else if (fillType === 0 ) {
	                fill._fillAutoByDirection(wholeRange, direction);
	            } else if (fillType === 1  || fillType === 2 ) {
	                fill._fillLinearOrGrowth(fillType === 1, wholeRange, series, step, stop);
	            } else if (fillType === 3 ) {
	                fill._seriesFillRange(wholeRange, series, 3 , step, isNullOrUndefined(stop) ? keyword_null : Common._DateTimeHelper._toOADate(stop), options.unit);
	            }
	            self._invalidate();
	        }
	    };
	    $.extend(Sheets.Worksheet.prototype, sheetEx);
	   
	
	   
	    Sheets.Worksheet._registerFeature(FILL, {
	        setHost: function (host) {
	            if (!host) {
	                return;
	            }
	            var commands = this._commandManager();
	            if (!commands[FILL]) {
	                commands.register(FILL, Commands[FILL]);
	            }
	            if (!commands[DRAG_DROP]) {
	                commands.register(DRAG_DROP, Commands[DRAG_DROP]);
	            }
	        }
	    });
	   
	
	   
	    var DragFillUndoAction = (function (_super) {
	        $.inherit(DragFillUndoAction, _super);
	        function DragFillUndoAction(sheet, dragFillExtent) {
	            var self = this, fillDirection = dragFillExtent[FILL_DIRECTION], isLeftDirection = fillDirection === 0 ,
	                isLeftOrRightDirection = isLeftDirection || fillDirection === 1 ,
	                fillRange = dragFillExtent[FILL_RANGE], startRange = dragFillExtent[START_RANGE],
	                startRange_row = startRange.row, startRange_col = startRange.col,
	                startRange_rowCount = getRowCount(startRange), startRange_colCount = getColCount(startRange);
	            _super.call(self);
	            self._sheet = sheet;
	            self._dragFillExtent = dragFillExtent;
	            if (dragFillExtent[AUTO_FILL_TYPE] === 4 ) {
	                self._clearValueUndoAction = new Commands._ClearValueUndoAction(sheet, {ranges: [dragFillExtent[FILL_RANGE]]});
	            } else if (isLeftOrRightDirection) {
	                self._wholeFillRange = createRange(startRange_row, isLeftDirection ? fillRange.col : startRange_col, startRange_rowCount, startRange_colCount + getColCount(fillRange));
	            } else {
	                self._wholeFillRange = createRange(fillDirection === 2  ? fillRange.row : startRange_row, startRange_col, startRange_rowCount + getRowCount(fillRange), startRange_colCount);
	            }
	            self._fillSeries = isLeftOrRightDirection ? 1  : 0 ;
	        }
	
	        var proto = {
	            canExecute: function () {
	                var self = this, sheet = self._sheet, dragFillExtent = self._dragFillExtent,
	                    startRange = dragFillExtent[START_RANGE], fillRange = dragFillExtent[FILL_RANGE];
	                if (!sheet._canChange(fillRange.row, fillRange.col, getRowCount(fillRange), getColCount(fillRange))) {
	                    return false;
	                }
	                return dragFillExtent[AUTO_FILL_TYPE] === 4  ? true : !fillRange.intersect(startRange.row, startRange.col, getRowCount(startRange), getColCount(startRange));
	            },
	            execute: function () {
	                var self = this;
	                if (self.canExecute()) {
	                    var dragFillExtent = self._dragFillExtent, fillRange = dragFillExtent[FILL_RANGE], sheet = self._sheet;
	                    sheet._modelManager.startTransaction();
	                    self._beforeAction(sheet);
	                    try {
	                        Sheets._supportsCalc && sheet.suspendCalcService();
	
	                        if (!sheet.isDirtySuspended()) {
	                            self._savedBeforeFillChangedCells = new ChangedCells(sheet, dragFillExtent[FILL_RANGE], ALL_OPTION);
	                        }
	                        
	                        dragFillExtent[AUTO_FILL_TYPE] === 4  ? self._executeDragFillClear(sheet) : self._executeDragFill(sheet);
	                    } finally {
	                        self._afterAction(sheet);
	                        var changesKey = Commands._getChangesKey(sheet.name());
	                        dragFillExtent[changesKey] = sheet._modelManager.endTransaction();
	                        Sheets._supportsCalc && sheet.resumeCalcService(false);
	                       
	                       
	                       
	                        sheet._updateTableSlicer && sheet._updateTableSlicer(fillRange.row, fillRange.col, getRowCount(fillRange), getColCount(fillRange));
	                        var changedCells = [];
	                        if (!sheet.isDirtySuspended()) {
	                            self._savedAfterFilledChangedCells = new ChangedCells(sheet, fillRange, ALL_OPTION);
	                            self._savedAfterFilledChangedCells._mergeCellsHasDiffData(self._savedBeforeFillChangedCells._getCellsData());
	                            changedCells = self._savedAfterFilledChangedCells._getChangedCells();
	                        }
	                        raiseRangeDataChanged(sheet, fillRange.row, fillRange.col, getRowCount(fillRange), getColCount(fillRange), changedCells, 1 );
	                    }
	                }
	            },
	            _executeDragFillClear: function (sheetView) {
	                var self = this;
	                self._clearValueUndoAction.execute(sheetView);
	                var dragFillExtent = self._dragFillExtent, startRange = dragFillExtent[START_RANGE], clearRange = dragFillExtent[FILL_RANGE],
	                    isColumnSeries = self._fillSeries === 0 , newRange, startRange_rowCount = getRowCount(startRange), startRange_colCount = getColCount(startRange),
	                    newRowCount = isColumnSeries ? Math_max(1, startRange_rowCount - getRowCount(clearRange)) : startRange_rowCount,
	                    newColCount = isColumnSeries ? startRange_colCount : Math_max(1, startRange_colCount - getColCount(clearRange));
	                if (!startRange.equals(clearRange)) {
	                    newRange = createRange(startRange.row, startRange.col, newRowCount, newColCount);
	                    sheetView._setActiveCellImp(Math_max(sheetView._getFirstVisualRow(), newRange.row), Math_max(sheetView._getFirstVisualColumn(), newRange.col), sheetView._activeRowViewportIndex, sheetView._activeColViewportIndex);
	                    sheetView._clearSelectionImp();
	                    sheetView.addSelection(newRange.row, newRange.col, getRowCount(newRange), getColCount(newRange));
	                }
	            },
	            _executeDragFill: function (sheetView) {
	                var self = this, sheet = self._sheet, startRange = self._dragFillExtent[START_RANGE], fillRange = self._dragFillExtent[FILL_RANGE],
	                    autoFillType = self._dragFillExtent[AUTO_FILL_TYPE], wholeFillRange = self._wholeFillRange, r, c, fillAutoArgs = {
	                        fillType: 4 ,
	                        series: self._fillSeries,
	                        withTag: true
	                    };
	                if (autoFillType === 1 ) {
	                    sheet.fillAuto(startRange, wholeFillRange, fillAutoArgs);
	                   
	                   
	                   
	                    if (sheet._modelManager._hasSpans(startRange.row, startRange.col, startRange.rowCount, startRange.colCount)) {
	                        for (r = 0; r < fillRange.rowCount; r++) {
	                            for (c = 0; c < fillRange.colCount; c++) {
	                                var style = sheet._getStyleObject(startRange.row + Math_floor(r % startRange.rowCount), startRange.col + Math_floor(c % startRange.colCount));
	                                if (style && style.clone) {
	                                    style = style.clone();
	                                }
	                                sheet._setStyleObject(fillRange.row + r, fillRange.col + c, style);
	                            }
	                        }
	                    }
	
	                } else if (autoFillType === 0 ) {
	                   
	                    var copyToWithoutCommentOption = ALL_OPTION ^ 4 ;
	                    self._copyCells(startRange, fillRange, copyToWithoutCommentOption);
	                } else if (autoFillType === 2 ) {
	                    self._copyCells(startRange, fillRange, 64  | 128 );
	                } else if (autoFillType === 3 ) {
	                    var isDragSingleCell = (getRowCount(startRange) === 1 && getColCount(startRange) === 1) && !(startRange.row === -1 && startRange.col !== -1) && !(startRange.col === -1 && startRange.row !== -1);
	                    if (isDragSingleCell) {
	                        var noStyleOption = 2  | 8  | 32  | 16  | 128  | 1 ;
	                        self._copyCells(startRange, fillRange, noStyleOption);
	                    } else {
	                        fillAutoArgs.withoutStyle = true;
	                        sheet.fillAuto(startRange, wholeFillRange, fillAutoArgs);
	                    }
	                }
	                sheet._setActiveCellImp(Math_max(sheetView._getFirstVisualRow(), wholeFillRange.row), Math_max(sheetView._getFirstVisualColumn(), wholeFillRange.col), sheetView._activeRowViewportIndex, sheetView._activeColViewportIndex);
	                if (sheetView._clearSelectionImp) {
	                    sheetView._clearSelectionImp();
	                }
	                sheet.addSelection(wholeFillRange.row, wholeFillRange.col, getRowCount(wholeFillRange), getColCount(wholeFillRange));
	            },
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	
	            _copyCells: function (fromRange, toRange, copyOption) {
	                var self = this, sheet = self._sheet, adjustedFromRange = sheet._getActualRange(fromRange), adjustedToRange = sheet._getActualRange(toRange),
	                    adjustedFromRange_row = adjustedFromRange.row, adjustedFromRange_col = adjustedFromRange.col, adjustedFromRange_rowCount = getRowCount(adjustedFromRange), adjustedFromRange_colCount = getColCount(adjustedFromRange),
	                    adjustedToRange_row = adjustedToRange.row, adjustedToRange_col = adjustedToRange.col, adjustedToRange_rowCount = getRowCount(adjustedToRange), adjustedToRange_colCount = getColCount(adjustedToRange),
	                    fillDirection = self._dragFillExtent[FILL_DIRECTION], isDownDirection = fillDirection === 3 , isRightDirection = fillDirection === 1 ,
	                    rows = Math_floor(adjustedToRange_rowCount / adjustedFromRange_rowCount), lastCopyRows = adjustedToRange_rowCount % adjustedFromRange_rowCount,
	                    columns = Math_floor(adjustedToRange_colCount / adjustedFromRange_colCount), lastCopyColumns = adjustedToRange_colCount % adjustedFromRange_colCount,
	                    i, fromRow, fromColumn, toRow, toColumn;
	                if (self._fillSeries === 0 ) {
	                    for (i = 0; i < rows; i++) {
	                        toRow = isDownDirection ? adjustedToRange_row + i * adjustedFromRange_rowCount : adjustedToRange_row + adjustedToRange_rowCount - (i + 1) * adjustedFromRange_rowCount;
	                        sheet._copyToCore(adjustedFromRange_row, adjustedFromRange_col, toRow, adjustedToRange_col, adjustedFromRange_rowCount, adjustedFromRange_colCount, copyOption, true);
	                    }
	                    if (lastCopyRows !== 0) {
	                        fromRow = isDownDirection ? adjustedFromRange_row : adjustedFromRange_row + (rows + 1) * adjustedFromRange_rowCount - adjustedToRange_rowCount;
	                        toRow = isDownDirection ? adjustedToRange_row + adjustedFromRange_rowCount * rows : adjustedToRange_row + adjustedToRange_rowCount - rows * adjustedFromRange_rowCount - lastCopyRows;
	                        sheet._copyToCore(fromRow, adjustedFromRange_col, toRow, adjustedToRange_col, lastCopyRows, adjustedFromRange_colCount, copyOption, true);
	                    }
	                } else {
	                    for (i = 0; i < columns; i++) {
	                        toColumn = isRightDirection ? adjustedToRange_col + i * adjustedFromRange_colCount : adjustedToRange_col + adjustedToRange_colCount - (i + 1) * adjustedFromRange_colCount;
	                        sheet._copyToCore(adjustedFromRange_row, adjustedFromRange_col, adjustedToRange_row, toColumn, adjustedFromRange_rowCount, adjustedFromRange_colCount, copyOption, true);
	                    }
	                    if (lastCopyColumns !== 0) {
	                        fromColumn = isRightDirection ? adjustedFromRange_col : adjustedFromRange_col + (columns + 1) * adjustedFromRange_colCount - adjustedToRange_colCount;
	                        toColumn = isRightDirection ? adjustedToRange_col + adjustedFromRange_colCount * columns : adjustedToRange_col + adjustedToRange_colCount - columns * adjustedFromRange_colCount - lastCopyColumns;
	                        sheet._copyToCore(adjustedFromRange_row, fromColumn, adjustedToRange_row, toColumn, adjustedFromRange_rowCount, lastCopyColumns, copyOption, true);
	                    }
	                }
	            },
	            undo: function () {
	                var self = this, sheet = self._sheet, result = false;
	                if (self.canUndo()) {
	                    self._beforeAction(sheet, true);
	                    try {
	                        Sheets._supportsCalc && sheet.suspendCalcService();
	                        var oldSelections = sheet.getSelections(), dragFillExtent = self._dragFillExtent,
	                            smartTag = sheet._fillDialog, fillRange = dragFillExtent[FILL_RANGE];
	                        result = dragFillExtent[AUTO_FILL_TYPE] === 4  ? self._undoDragClear(sheet) : self._undoDragFill(sheet);
	                        if (!sheet._skipCloseDragFillSmartTag && smartTag) {
	                            smartTag.close();
	                        }
	                        raiseRangeDataChanged(sheet, fillRange.row, fillRange.col, getRowCount(fillRange), getColCount(fillRange), self._savedAfterFilledChangedCells ? self._savedAfterFilledChangedCells._getChangedCells() : [], 1 );
	                        if (sheet._raiseSelectionChanging(oldSelections, sheet.getSelections())) {
	                            sheet._raiseSelectionChanged(oldSelections);
	                        }
	                    } finally {
	                        self._afterAction(sheet, true);
	                        Sheets._supportsCalc && sheet.resumeCalcService(false);
	                    }
	                }
	                return result;
	            },
	            _undoDragClear: function (sheet) {
	                var self = this, startRange = self._dragFillExtent[START_RANGE], startRange_row = startRange.row, startRange_col = startRange.col,
	                    result = self._clearValueUndoAction.undo();
	                sheet._setActiveCellImp(Math_max(sheet._getFirstVisualRow(), startRange_row), Math_max(sheet._getFirstVisualColumn(), startRange_col), sheet._activeRowViewportIndex, sheet._activeColViewportIndex);
	                return result;
	            },
	            _undoDragFill: function (sheet) {
	                var self = this, dragFillExtent = self._dragFillExtent, startRange = dragFillExtent[START_RANGE], startRange_row = startRange.row, startRange_col = startRange.col;
	                Sheets._supportsCalc && sheet.suspendCalcService();
	                try {
	                    var changesKey = Commands._getChangesKey(sheet.name());
	                    sheet._modelManager.undo(dragFillExtent[changesKey]);
	                    sheet._setActiveCellImp(Math_max(sheet._getFirstVisualRow(), startRange_row), Math_max(sheet._getFirstVisualColumn(), startRange_col), sheet._activeRowViewportIndex, sheet._activeColViewportIndex);
	                } finally {
	                    Sheets._supportsCalc && sheet.resumeCalcService(false);
	                }
	                sheet.invalidateLayout();
	                return true;
	            }
	        };
	        $.extend(DragFillUndoAction.prototype, proto);
	        return DragFillUndoAction;
	    })(ActionBase);
	   
	
	   
	    var FillUndoAction = (function (_super) {
	        $.inherit(FillUndoAction, _super);
	        function FillUndoAction(sheet, fillExtent) {
	            var self = this;
	            _super.call(self);
	            self._sheet = sheet;
	            self._fillExtent = fillExtent;
	            self._startRange = fillExtent[START_RANGE];
	            self._fillRange = fillExtent[FILL_RANGE];
	            self._autoFillType = fillExtent[AUTO_FILL_TYPE];
	            self._fillDirection = fillExtent[FILL_DIRECTION];
	        }
	
	        var proto = {
	            execute: function () {
	                var self = this;
	                var succeed = false;
	                if (self.canExecute()) {
	                    var sheet = self._sheet, fillRange = self._fillRange;
	                    self._beforeDataChange();
	                    self._beforeAction(sheet, true);
	                    try {
	                        var eventHandler = sheet._eventHandler, args = {sheet: sheet, sheetName: sheet.name()};
	                        args[CANCEL] = false;
	                        args[FILL_RANGE] = fillRange;
	                        args[AUTO_FILL_TYPE] = self._autoFillType;
	                        args[FILL_DIRECTION] = self._fillDirection;
	                        sheet._trigger(Events.DragFillBlock, args);
	                        eventHandler._currentDragFillType = args[AUTO_FILL_TYPE];
	                        eventHandler._isCancelDragFill = args[CANCEL];
	                        self._executeDragFillAction(args);
	                        delete args[CANCEL];
	                        sheet._trigger(Events.DragFillBlockCompleted, args);
	                        succeed = true;
	                    } finally {
	                        self._afterAction(sheet, true);
	                        self._afterDataChange(sheet, fillRange);
	                    }
	                }
	                return succeed;
	            },
	            _executeDragFillAction: function (args) {
	                var self = this, sheet = self._sheet, eventHandler = sheet._eventHandler, fillRange = self._fillRange, autoFillType = self._autoFillType;
	                eventHandler._currentDragFillType = autoFillType;
	                if (!eventHandler._isCancelDragFill) {
	                   
	                    var dragFillExtent = {};
	                    dragFillExtent[START_RANGE] = self._startRange;
	                    dragFillExtent[FILL_RANGE] = fillRange;
	                    dragFillExtent[AUTO_FILL_TYPE] = args[AUTO_FILL_TYPE] === 5  ? autoFillType : args[AUTO_FILL_TYPE];
	                    dragFillExtent[FILL_DIRECTION] = self._fillDirection;
	                    var dragFillUndoAction = new DragFillUndoAction(sheet, dragFillExtent);
	                    sheet.suspendEvent();
	                    dragFillUndoAction.execute();
	                    sheet.resumeEvent();
	                    self._fillExtent._dragFillUndoAction = dragFillUndoAction;
	                }
	            },
	            _beforeDataChange: function () {
	                var self = this;
	                if (!self._sheet.isDirtySuspended()) {
	                    self._savedBeforeFillChangedCells = new ChangedCells(self._sheet, self._fillRange, ALL_OPTION);
	                }
	            },
	            undo: function () {
	                var self = this;
	                var ret = false;
	                if(self.canUndo()) {
	                    var sheet = self._sheet, fillRange = self._fillRange;
	                    self._beforeDataChange();
	                    self._beforeAction(sheet);
	                    try {
	                        ret = self._fillExtent._dragFillUndoAction.undo();
	                    } finally {
	                        self._afterAction(sheet, false);
	                        self._afterDataChange(sheet, fillRange);
	                    }
	                }
	                return ret;
	            },
	            _afterDataChange: function (sheet, fillRange) {
	                var self = this;
	                var changedCells = [];
	                if (!sheet.isDirtySuspended()) {
	                    var savedAfterFilledChangedCells = new ChangedCells(sheet, fillRange, ALL_OPTION);
	                    savedAfterFilledChangedCells._mergeCellsHasDiffData(self._savedBeforeFillChangedCells._getCellsData());
	                    changedCells = savedAfterFilledChangedCells._getChangedCells();
	                }
	                raiseRangeDataChanged(sheet, fillRange.row, fillRange.col, getRowCount(fillRange), getColCount(fillRange), changedCells, 1 );
	            }
	        };
	        $.extend(FillUndoAction.prototype, proto);
	        return FillUndoAction;
	    })(ActionBase);
	   
	
	   
	    function dragDropUndoAction_updateSelection(sheet, r, c, rc, cc) {
	        var oldSelections = sheet.getSelections();
	        sheet._clearSelectionImp();
	        sheet.addSelection(r, c, rc, cc);
	        sheet._raiseSelectionChanged(oldSelections);
	        var ar = r > 0 ? r : sheet._getFirstVisualRow();
	        var ac = c > 0 ? c : sheet._getFirstVisualColumn();
	        sheet._setActiveCellImp(ar, ac, sheet._activeRowViewportIndex, sheet._activeColViewportIndex);
	    }
	
	    $.inherit(DragDropUndoAction, ActionBase);
	    function DragDropUndoAction(sheet, command) {
	        var self = this;
	        ActionBase.call(self);
	        self._sheet = sheet;
	        self._command = command;
	    }
	    $.extend(DragDropUndoAction.prototype, {
	        canExecute: function () {
	            var self = this;
	            var sheet = self._sheet, command = self._command;
	            var fromRow = command.fromRow, fromColumn = command.fromColumn,
	                rowCount = getRowCount(command), columnCount = command.columnCount,
	                toRow = command.toRow, toColumn = command.toColumn;
	            if (!sheet._isValidRange(fromRow, fromColumn, rowCount, columnCount,
	                    getSheetRowCount(sheet), getSheetColumnCount(sheet))) {
	                return false;
	            }
	            if (!command.insert) { 
	                if (!sheet._isValidRange(toRow, toColumn, rowCount, columnCount,
	                        getSheetRowCount(sheet), getSheetColumnCount(sheet))) {
	                    return false;
	                }
	            }
	            var rowCondition = toRow >= 0 && toColumn < 0 && fromRow >= 0 && fromColumn < 0 && rowCount > 0 && columnCount < 0;
	            var columnCondition = toRow < 0 && toColumn >= 0 && fromRow < 0 && fromColumn >= 0 && rowCount < 0 && columnCount > 0;
	            var isAllowDragInsert = self._canAllowOptionIsProtected(rowCondition, columnCondition);
	            return sheet._canChange(toRow, toColumn, rowCount, columnCount, keyword_null, keyword_null, isAllowDragInsert)
	                && sheet._canChange(fromRow, fromColumn, rowCount, columnCount, keyword_null, keyword_null, isAllowDragInsert);
	        },
	        _canAllowOptionIsProtected: function (rowCondition, columnCondition) {
	            var self = this, command = self._command, sheet = self._sheet, insert = command.insert;
	            var isProtected = sheet.options.isProtected, protectionOptions = sheet.options.protectionOptions;
	            if(isProtected && !$_isEmptyObject(protectionOptions)) {
	                var allowDragInsertRows = protectionOptions.allowDragInsertRows;
	                var allowDragInsertColumns = protectionOptions.allowDragInsertColumns;
	                if(insert 
	                    && ((allowDragInsertRows && rowCondition)
	                    || (allowDragInsertColumns && columnCondition))) {
	                    return true;
	                }
	            }
	            return false;
	        },
	        execute: function () {
	            var self = this;
	            var succeed = false;
	            if (self.canExecute()) {
	                var sheet = self._sheet, command = self._command;
	                self._beforeDataChange();
	                var from, to, count;
	                var fromRow = command.fromRow, fromColumn = command.fromColumn,
	                    toRow = command.toRow, toColumn = command.toColumn,
	                    rowCount = getRowCount(command), columnCount = command.columnCount,
	                    option = command.option;
	                sheet._modelManager.startTransaction();
	                self._beforeAction(sheet, true);
	                try {
	                    if (command.insert) {
	                        if (fromColumn >= 0 && fromRow < 0) {
	                            from = fromColumn;
	                            to = toColumn;
	                            count = columnCount;
	                            var activeColumn = toColumn;
	                            sheet.addColumns(to, count);
	                            if (command.copy) {
	                                sheet.copyTo(-1, (to <= from ? from + count : from), -1, to, -1, count, option);
	                            } else {
	                                sheet.moveTo(-1, (to <= from ? from + count : from), -1, to, -1, count, option);
	                                sheet.deleteColumns((to <= from ? from + count : from), count);
	                                if (from < to) {
	                                    activeColumn = to - count;
	                                }
	                            }
	                            dragDropUndoAction_updateSelection(sheet, -1, activeColumn, getSheetRowCount(sheet), count);
	                        } else if (fromRow >= 0 && fromColumn < 0) {
	                            from = fromRow;
	                            to = toRow;
	                            count = rowCount;
	                            var activeRow = toRow;
	
	                            sheet.addRows(to, count);
	                            if (command.copy) {
	                                sheet.copyTo((to <= from ? from + count : from), -1, to, -1, count, -1, option);
	                            } else {
	                                sheet.moveTo((to <= from ? from + count : from), -1, to, -1, count, -1, option);
	                                sheet.deleteRows((to <= from ? from + count : from), count);
	                                if (from < to) {
	                                    activeRow = to - count;
	                                }
	                            }
	
	                            dragDropUndoAction_updateSelection(sheet, activeRow, -1, count, getSheetColumnCount(sheet));
	                        }
	                    } else {
	                        if (command.copy) {
	                            sheet.copyTo(fromRow, fromColumn, toRow, toColumn, rowCount, columnCount, option);
	                        } else {
	                            sheet.moveTo(fromRow, fromColumn, toRow, toColumn, rowCount, columnCount, option);
	                        }
	                        if (sheet) {
	                            dragDropUndoAction_updateSelection(sheet, toRow, toColumn, rowCount, columnCount);
	
	                            var state = command._state;
	                            if (!command.copy && !sheet.isDirtySuspended()) {
	                                state._savedFromAfterPastedChangedCells = self._mergeCellsData(sheet, state._savedFromBeforePastedChangedCells, fromRow, fromColumn, rowCount, columnCount);
	                            }
	
	                            if (!sheet.isDirtySuspended()) {
	                                state._savedToAfterPastedChangedCells = self._mergeCellsData(sheet, state._savedToBeforePastedChangedCells, toRow, toColumn, rowCount, columnCount);
	                            }
	                        }
	                    }
	
	                    succeed = true;
	                } finally {
	                    sheet._eventHandler._dragRect = {};
	                    self._afterAction(sheet, true);
	                    var changesKey = Commands._getChangesKey(sheet.name());
	                    command[changesKey] = sheet._modelManager.endTransaction();
	                }
	            }
	
	            return succeed;
	        },
	        _mergeCellsData: function (sheet, beforePastedChangedCells, r, c, rc, cc) {
	            var afterPastedChangedCells = new ChangedCells(sheet, createRange(r, c, rc, cc), this._command.option);
	            afterPastedChangedCells._mergeCellsHasDiffData(beforePastedChangedCells._getCellsData());
	            raiseRangeDataChanged(sheet, r, c, rc, cc, afterPastedChangedCells._getChangedCells(), 0 );
	            return afterPastedChangedCells;
	        },
	        _beforeDataChange: function () {
	            var self = this;
	            var sheet = self._sheet, command = self._command;
	            var state = command._state = {};
	
	            var dragDropExtent_fromRow = command.fromRow, dragDropExtent_fromColumn = command.fromColumn,
	                dragDropExtent_toRow = command.toRow, dragDropExtent_toColumn = command.toColumn,
	                option = command.option;
	            var fromRow = dragDropExtent_fromRow < 0 ? 0 : dragDropExtent_fromRow;
	            var fromColumn = dragDropExtent_fromColumn < 0 ? 0 : dragDropExtent_fromColumn;
	            var toRow = dragDropExtent_toRow < 0 ? 0 : dragDropExtent_toRow;
	            var toColumn = dragDropExtent_toColumn < 0 ? 0 : dragDropExtent_toColumn;
	            var rowCount = dragDropExtent_fromRow < 0 ? getSheetRowCount(sheet) : getRowCount(command);
	            var columnCount = dragDropExtent_fromColumn < 0 ? getSheetColumnCount(sheet) : command.columnCount;
	            if (!command.insert && !sheet.isDirtySuspended()) {
	                if (!command.copy) {
	                    state._savedFromBeforePastedChangedCells = new ChangedCells(sheet, createRange(fromRow, fromColumn, rowCount, columnCount), option);
	                }
	
	                state._savedToBeforePastedChangedCells = new ChangedCells(sheet, createRange(toRow, toColumn, rowCount, columnCount), option);
	            }
	            state._savedAcitveRowViewportIndex = sheet._activeRowViewportIndex;
	            state._savedAcitveColumnViewportIndex = sheet._activeColViewportIndex;
	            state._savedActiveRow = sheet._activeRowIndex;
	            state._savedActiveColumn = sheet._activeColIndex;
	        },
	        undo: function () {
	            var self = this;
	            if (self.canUndo()) {
	                var sheet = self._sheet, command = self._command;
	                var dragDropExtent_fromRow = command.fromRow, dragDropExtent_fromColumn = command.fromColumn,
	                    dragDropExtent_toRow = command.toRow, dragDropExtent_toColumn = command.toColumn,
	                    dragDropExtent_rowCount = getRowCount(command), dragDropExtent_columnCount = command.columnCount;
	                if (!sheet._isValidRange(dragDropExtent_fromRow, dragDropExtent_fromColumn, dragDropExtent_rowCount,
	                        dragDropExtent_columnCount, getSheetRowCount(sheet), getSheetColumnCount(sheet))) {
	                    return false;
	                }
	                if (!command.insert) { 
	                    if (!sheet._isValidRange(dragDropExtent_toRow, dragDropExtent_toColumn, dragDropExtent_rowCount,
	                            dragDropExtent_columnCount, getSheetRowCount(sheet), getSheetColumnCount(sheet))) {
	                        return false;
	                    }
	                }
	                var count;
	                var state = command._state;
	                self._beforeAction(sheet, true);
	                var changesKey = Commands._getChangesKey(sheet.name());
	                sheet._modelManager.undo(command[changesKey]);
	                try {
	                    if (command.insert) {
	                        if (!(dragDropExtent_fromColumn >= 0 && dragDropExtent_fromRow >= 0)) {
	                            if (dragDropExtent_fromColumn >= 0) {
	                                var activeColumn = dragDropExtent_fromColumn;
	                                count = dragDropExtent_columnCount;
	                                if (sheet) {
	                                    dragDropUndoAction_updateSelection(sheet, -1, activeColumn, getSheetRowCount(sheet), count);
	                                }
	                            } else if (dragDropExtent_fromRow >= 0) {
	                                count = dragDropExtent_rowCount;
	                                var activeRow = dragDropExtent_fromRow;
	                                if (sheet) {
	                                    dragDropUndoAction_updateSelection(sheet, activeRow, -1, count, getSheetColumnCount(sheet));
	                                }
	                            }
	                        }
	                    } else {
	                        var fromRow = dragDropExtent_fromRow < 0 ? 0 : dragDropExtent_fromRow;
	                        var fromColumn = dragDropExtent_fromColumn < 0 ? 0 : dragDropExtent_fromColumn;
	                        var toRow = dragDropExtent_toRow < 0 ? 0 : dragDropExtent_toRow;
	                        var toColumn = dragDropExtent_toColumn < 0 ? 0 : dragDropExtent_toColumn;
	                        var rowCount = dragDropExtent_fromRow < 0 ? getSheetRowCount(sheet) : dragDropExtent_rowCount;
	                        var columnCount = dragDropExtent_fromColumn < 0 ? getSheetColumnCount(sheet) : dragDropExtent_columnCount;
	
	                        if (sheet) {
	                            dragDropUndoAction_updateSelection(sheet, dragDropExtent_fromRow, dragDropExtent_fromColumn, dragDropExtent_rowCount, dragDropExtent_columnCount);
	                            raiseRangeDataChanged(sheet, toRow, toColumn, rowCount, columnCount,
	                                state._savedToAfterPastedChangedCells ? state._savedToAfterPastedChangedCells._getChangedCells() : [], 0 );
	                            raiseRangeDataChanged(sheet, fromRow, fromColumn, rowCount, columnCount,
	                                state._savedFromAfterPastedChangedCells ? state._savedFromAfterPastedChangedCells._getChangedCells() : [], 0 );
	                        }
	                    }
	
	                    if (sheet) {
	                        if (state._savedActiveRow !== -1 && state._savedActiveColumn !== -1) {
	                            var selection = sheet.getSelections()[0];
	                            if (selection.contains(state._savedActiveRow, state._savedActiveColumn)) {
	                                sheet._setActiveCellCore(state._savedActiveRow, state._savedActiveColumn);
	                            } else {
	                                sheet._setActiveCellCore(selection.row, selection.col);
	                            }
	                        }
	                        if (state._savedAcitveRowViewportIndex !== -2 && state._savedAcitveColumnViewportIndex !== -2 &&
	                            state._savedActiveRow !== -1 && state._savedActiveColumn !== -1) {
	                            sheet.showCell(state._savedActiveRow, state._savedActiveColumn, 3 , 3 );
	                        }
	                    }
	                } finally {
	                    self._afterAction(sheet, true);
	                }
	            }
	
	            return true;
	        }
	    });
	   
	
	   
	    
	    Commands[FILL] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return Commands._executeCommand(context, FillUndoAction, options, isUndo);
	        }
	    };
	
	   
	    
	    Commands[DRAG_DROP] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return Commands._executeCommand(context, DragDropUndoAction, options, isUndo);
	        }
	    };
	
	}());

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sheets;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Common;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var Sheets = __webpack_require__(2);
	    var Common = __webpack_require__(3);
	    var CalcEngine = __webpack_require__(5);
	    var Fill = __webpack_require__(6);
	
	    var Types = Common._Types;
	    var keyword_null = null, keyword_undefined = void 0, Math_floor = Math.floor, createRange = Sheets._createRange,
	        isNullOrUndefined = Types._isNullOrUndefined, FormatConverter_toDouble = Types._toDouble,
	        arrayHelper = Common._ArrayHelper, arrayHelper_insert = arrayHelper._insert,
	        arrayHelper_getLength = arrayHelper._getLength, dateTimeHelper = Common._DateTimeHelper,
	        dateTimeHelper_toOADate = dateTimeHelper._toOADate, dateTimeHelper_fromOADate = dateTimeHelper._fromOADate;
	    var NUMBER_STRING = 'number', DATE_STRING = 'date';
	    var sR = function () {
	        return Common._getResource(Fill.SR)();
	    };
	
	    function isNumber(value) {
	       
	        return typeof (value) === "string" ? false : Types._isNumber(value);
	    }
	
	   
	   
	    
	    Fill.AutoFillType = {
	        
	        copyCells: 0,
	        
	        fillSeries: 1,
	        
	        fillFormattingOnly: 2,
	        
	        fillWithoutFormatting: 3,
	        
	        clearValues: 4,
	        
	        auto: 5
	    };
	   
	
	   
	   
	    
	    Fill.FillDirection = {
	        
	        left: 0,
	        
	        right: 1,
	        
	        up: 2,
	        
	        down: 3
	    };
	   
	
	   
	   
	    
	    Fill.FillSeries = {
	        
	        column: 0,
	        
	        row: 1
	    };
	   
	
	   
	   
	    
	    Fill.FillType = {
	        
	        direction: 0,
	        
	        linear: 1,
	        
	        growth: 2,
	        
	        date: 3,
	        
	        auto: 4
	    };
	   
	
	   
	   
	    
	    Fill.FillDateUnit = {
	        
	        day: 0,
	        
	        weekday: 1,
	        
	        month: 2,
	        
	        year: 3
	    };
	   
	
	   
	    function toArray(array) {
	        var result = [array];
	        result.rowCount = 1;
	        result.colCount = arrayHelper_getLength(array);
	        return result;
	    }
	    function getNumber(value) {
	        return value;
	    }
	    function getTrendOrGrowthValue(isTrend, values, indexes, dest) {
	        var valuesArray = toArray(values), indexesArray = toArray(indexes), destArray = toArray([dest]),
	            result = isTrend ? Common._trend(valuesArray, indexesArray, destArray, true, getNumber, keyword_null, keyword_null, keyword_null)
	                : Common._growth(valuesArray, indexesArray, destArray, true, keyword_null, keyword_null, keyword_null),
	            value = result && result[0][0];
	        return (typeof value === NUMBER_STRING) ? Common._NumberHelper._fixNumber(value, 13) : value;
	    }
	   
	
	   
	    function NumberSource(startIndex) {
	        var self = this;
	        self._indexes = [];
	        self._innerValues = [];
	        self._type = keyword_null;
	        self._startIndex = isNullOrUndefined(startIndex) ? -1 : startIndex;
	    }
	    NumberSource.prototype = {
	        _dataCount: function () {
	            return arrayHelper_getLength(this._innerValues);
	        },
	        _values: function () {
	            var self = this, values = [], innerValues = self._innerValues, i, value;
	            for (i = 0; i < arrayHelper_getLength(innerValues); i++) {
	                value = innerValues[i];
	                values.push(self._type === 'object' ? self._toDateTime(value) : value);
	            }
	            return values;
	        },
	        _indexes2: function () {
	            var self = this, indexes = self._indexes;
	            if (arrayHelper_getLength(indexes) > 0) {
	                var startIndex = self._startIndex, value = [], i;
	                if (startIndex === -1) {
	                    startIndex = indexes[0];
	                }
	                for (i = 0; i < arrayHelper_getLength(indexes); i++) {
	                    value[i] = indexes[i] - startIndex + 1;
	                }
	                return value;
	            }
	            return keyword_null;
	        },
	        _values2: function () {
	            var innerValues = this._innerValues;
	            return arrayHelper_getLength(innerValues) ? innerValues : keyword_null;
	        },
	        _insert: function (insertIndex, index, value) {
	            if (!isNumber(value)) {
	                throw new Error(sR().Exp_NumberOnly);
	            }
	            var self = this;
	            if (isNullOrUndefined(self._type)) {
	                self._type = value instanceof Date ? DATE_STRING : NUMBER_STRING;
	            }
	            arrayHelper_insert(self._indexes, insertIndex, index);
	            arrayHelper_insert(self._innerValues, insertIndex, FormatConverter_toDouble(value));
	        },
	        _add: function (index, value) {
	            var self = this;
	            if (isNullOrUndefined(self._type)) {
	                if (value instanceof Date) {
	                    self._type = DATE_STRING;
	                } else {
	                    self._type = NUMBER_STRING;
	                }
	            }
	            self._indexes.push(index);
	            self._innerValues.push(FormatConverter_toDouble(value));
	        },
	        _toActualValue: function (value) {
	            return this._type === DATE_STRING ? this._toDateTime(value) : value;
	        },
	        _toDateTime: function (value) {
	            var ret = keyword_null;
	            if (value instanceof Date) {
	                ret = value;
	            } else if (CalcEngine) {
	                try {
	                    ret = CalcEngine.Convert._toDateTime(value);
	                } catch (err) {
	                    ret = value;
	                }
	            }
	            return ret;
	        }
	    };
	   
	
	   
	    function FillImp(sheet) {
	        this._sheet = sheet;
	    }
	    FillImp.prototype = {
	        _fillLinearOrGrowth: function (isLinear, fillRange, series, step, stop) {
	            var self = this, fillType = isLinear ? 1  : 2 ;
	            isNullOrUndefined(step) && isNullOrUndefined(stop) ? self._seriesFillRange(fillRange, series, fillType) : self._seriesFillRange(fillRange, series, fillType, step, stop, keyword_null);
	        },
	        _seriesFillRange: function (fillRange, fillSeries, fillType, stepValue, stopValue, dateUnit) {
	            var self = this, sheet = self._sheet, newRange = sheet._getActualRange(fillRange);
	            var row = newRange.row, column = newRange.col, rowCount = newRange.rowCount, columnCount = newRange.colCount;
	            if (sheet._modelManager._hasSpans(row, column, rowCount, columnCount)) {
	                throw new Error(sR().Exp_RangeContainsMergedCell);
	            }
	            var index, targetData, i, initIndex, initValue,
	                isLongArgsLength = arguments.length > 3, startPos = 0,
	                isRowSeries = fillSeries === 1 , count = isRowSeries ? columnCount : rowCount,
	                start = isRowSeries ? row : column, end = isRowSeries ? row + rowCount : column + columnCount,
	                usedIndexCount = isLongArgsLength ? 1 : count;
	            var startRange = this._sheet._eventHandler._dragFillStartRange;
	            var isLeftOrUpDirection = (startRange.row === row && startRange.rowCount === rowCount && startRange.col > column ||
	            startRange.col === column && startRange.colCount === columnCount && startRange.row > row);
	            for (index = start; index < end; index++) {
	                var dataColumn = isLeftOrUpDirection && isLongArgsLength ? column + columnCount - 1 : column;
	                var dataRow = isLeftOrUpDirection && isLongArgsLength ? row + rowCount - 1 : row;
	                var sourceData = isRowSeries ? self._getSeriesSource(index, dataColumn, 1, usedIndexCount, fillSeries) : self._getSeriesSource(dataRow, index, usedIndexCount, 1, fillSeries);
	                if (sourceData && sourceData._dataCount()) {
	                    initIndex = sourceData._indexes[0];
	                    if (isLongArgsLength) {
	                        initValue = isLeftOrUpDirection ? sourceData._innerValues[arrayHelper_getLength(sourceData._innerValues) - 1]
	                            : sourceData._innerValues[0];
	                        targetData = self._calcSeriesData(isLeftOrUpDirection, initValue, count, fillType, stepValue, stopValue, dateUnit);
	                        if (isLeftOrUpDirection) {
	                            startPos = count - arrayHelper_getLength(targetData);
	                            initIndex = sourceData._indexes[arrayHelper_getLength(sourceData._indexes) - 1];
	                        }
	                    } else {
	                        targetData = self._calcSeriesTrendData(sourceData, count, fillType);
	                    }
	                    for (i = 0; i < arrayHelper_getLength(targetData); i++) {
	                        var actualValue = sourceData._toActualValue(targetData[i]);
	                        isRowSeries ? self._copyCell(sheet, index, initIndex, index, column + startPos + i, actualValue, fillType)
	                            : self._copyCell(sheet, initIndex, index, row + startPos + i, index, actualValue, fillType);
	                    }
	                }
	            }
	        },
	        _getSeriesSource: function (row, column, rowCount, columnCount, fillSeries) {
	            var numberSource = keyword_null, sheet = this._sheet, value,
	                isRowSeries = fillSeries === 1 , index = isRowSeries ? column + columnCount - 1 : row + rowCount - 1, start = isRowSeries ? column : row;
	            while (index >= start) {
	                value = isRowSeries ? sheet.getValue(row, index) : sheet.getValue(index, column);
	                if (isNumber(value)) {
	                    if (!numberSource) {
	                        numberSource = new NumberSource(start);
	                    }
	                    numberSource._insert(0, index, value);
	                }
	                index--;
	            }
	            return numberSource;
	        },
	        _calcSeriesData: function (isLeftOrUp, initValue, count, type, stepValue, stopValue, dateUnit) {
	            var newValues = [], currentValue = initValue, i;
	            var isPositiveStep = stepValue >= 0;
	            var noStopValue = isNullOrUndefined(stopValue);
	            for (i = 0; i < count; i++) {
	                var isBiggerThanStopValue = currentValue >= stopValue, isSmallerThanStopValue = currentValue <= stopValue;
	                if (isLeftOrUp && (noStopValue || isPositiveStep && isBiggerThanStopValue || !isPositiveStep && isSmallerThanStopValue)) {
	                    newValues.unshift(currentValue);
	                    if (type === 1 ) {
	                        currentValue -= stepValue;
	                    } else if (type === 2 ) {
	                        currentValue /= stepValue;
	                    } else if (type === 3  && !isNullOrUndefined(dateUnit)) {
	                        currentValue = this._getNextDateValue(true, dateUnit, initValue, currentValue, stepValue, i + 1);
	                    }
	                } else if (!isLeftOrUp && (noStopValue || isPositiveStep && isSmallerThanStopValue || !isPositiveStep && isBiggerThanStopValue)) {
	                    newValues.push(currentValue);
	                    if (type === 1 ) {
	                        currentValue += stepValue;
	                    } else if (type === 2 ) {
	                        currentValue *= stepValue;
	                    } else if (type === 3  && !isNullOrUndefined(dateUnit)) {
	                        currentValue = this._getNextDateValue(false, dateUnit, initValue, currentValue, stepValue, i + 1);
	                    }
	                }
	            }
	            return newValues;
	        },
	        _calcSeriesTrendData: function (sourceData, count, type) {
	            var newValues = [], i, isLinearType = type === 1 ;
	            if (isLinearType || type === 2 ) {
	                if (sourceData._dataCount() === 1) {
	                    sourceData._add(sourceData._indexes[0] + 1, isLinearType ? sourceData._toActualValue(sourceData._innerValues[0] + 1) : sourceData._values()[0]);
	                }
	                for (i = 0; i < count; i++) {
	                    newValues.push(getTrendOrGrowthValue(!!isLinearType, sourceData._values2(), sourceData._indexes2(), i + 1));
	                }
	                return newValues;
	            }
	            return keyword_null;
	        },
	        _fillAuto: function (range, series, justGetToolTipContent, withTag, withoutStyle) {
	            var self = this, sheet = self._sheet, modelManager = sheet._modelManager, newRange = sheet._getActualRange(range),
	                row = newRange.row, column = newRange.col, rowCount = newRange.rowCount, columnCount = newRange.colCount,
	                sourceRange = sheet._getActualRange(sheet._eventHandler._dragFillStartRange), sourceRange_row = sourceRange.row, sourceRange_col = sourceRange.col;
	            if (modelManager._hasPartSpans(sourceRange_row, sourceRange_col, sourceRange.rowCount, sourceRange.colCount) || modelManager._hasPartSpans(row, column, rowCount, columnCount)) {
	                throw new Error(sR().Exp_ChangeMergedCell);
	            }
	            return self._autoFillRange(sourceRange, rowCount, columnCount, series, justGetToolTipContent, !(row < sourceRange_row || column < sourceRange_col), withTag, withoutStyle);
	        },
	        _autoFillRange: function (sourceRange, rowCount, columnCount, fillSeries, justGetTooltipContent, isIncrease, withTag, withoutStyle) {
	            var self = this, directionNum = isIncrease ? 1 : -1, nWhole, nPartial, targetRange, i,
	                sourceRange_row = sourceRange.row, sourceRange_col = sourceRange.col, sourceRange_rowCount = sourceRange.rowCount, sourceRange_colCount = sourceRange.colCount;
	            if (fillSeries === 1 ) {
	                nWhole = Math_floor(columnCount / sourceRange_colCount);
	                nPartial = columnCount % sourceRange_colCount;
	                if (!justGetTooltipContent) {
	                    for (i = 1; i < nWhole; i++) {
	                        targetRange = createRange(sourceRange_row, sourceRange_col + i * directionNum * sourceRange_colCount, sourceRange_rowCount, sourceRange_colCount);
	                        self._copyRange(sourceRange, targetRange, fillSeries, 4 , justGetTooltipContent, keyword_undefined, keyword_undefined, keyword_undefined, keyword_undefined, withTag, withoutStyle);
	                    }
	                }
	                if (justGetTooltipContent && nWhole > 1 && nPartial === 0) {
	                    nWhole = nWhole - 1;
	                    nPartial = sourceRange_colCount;
	                }
	                if (nWhole > 0 && nPartial > 0) {
	                    targetRange = isIncrease ? createRange(sourceRange_row, sourceRange_col + nWhole * sourceRange_colCount, sourceRange_rowCount, nPartial)
	                        : createRange(sourceRange_row, sourceRange_col - nWhole * sourceRange_colCount + sourceRange_colCount - nPartial, sourceRange_rowCount, nPartial);
	                    return self._copyRange(sourceRange, targetRange, fillSeries, 4 , justGetTooltipContent, isIncrease, keyword_null, isIncrease ? 0 : sourceRange_colCount - nPartial, keyword_undefined, withTag, withoutStyle);
	                }
	            } else  {
	                nWhole = Math_floor(rowCount / sourceRange_rowCount);
	                nPartial = rowCount % sourceRange_rowCount;
	                if (!justGetTooltipContent) {
	                    for (i = 1; i < nWhole; i++) {
	                        targetRange = createRange(sourceRange_row + i * directionNum * sourceRange_rowCount, sourceRange_col, sourceRange_rowCount, sourceRange_colCount);
	                        self._copyRange(sourceRange, targetRange, fillSeries, 4 , justGetTooltipContent, keyword_null, keyword_null, keyword_null, true, withTag, withoutStyle);
	                    }
	                }
	                if (justGetTooltipContent && nWhole > 1 && nPartial === 0) {
	                    nWhole = nWhole - 1;
	                    nPartial = sourceRange_rowCount;
	                }
	                if (nWhole > 0 && nPartial > 0) {
	                    targetRange = isIncrease ? createRange(sourceRange_row + nWhole * sourceRange_rowCount, sourceRange_col, nPartial, sourceRange_colCount)
	                        : createRange(sourceRange_row - nWhole * sourceRange_rowCount + sourceRange_rowCount - nPartial, sourceRange_col, nPartial, sourceRange_colCount);
	                    return self._copyRange(sourceRange, targetRange, fillSeries, 4 , justGetTooltipContent, isIncrease, isIncrease ? 0 : sourceRange_rowCount - nPartial, keyword_null, true, withTag, withoutStyle);
	                }
	            }
	        },
	        _copyRange: function (sourceRange, targetRange, fillSeries, fillType, justGetTooltipContent, isIncrease, rowOffset, colOffset, ignoreFilteredOutRow, withTag, withoutStyle) {
	            var self = this, sheet = self._sheet, isRowSeries = fillSeries === 1 , formula, valueType, sourceSpan, outerIndex, result,
	                outerSourceRangeIndex = isRowSeries ? sourceRange.row : sourceRange.col, innerSourceRangeIndex = isRowSeries ? sourceRange.col : sourceRange.row,
	                outerTargetRangeIndex = isRowSeries ? targetRange.row : targetRange.col, innerTargetRangeIndex = isRowSeries ? targetRange.col : targetRange.row,
	                outerSourceRangeCount = isRowSeries ? sourceRange.rowCount : sourceRange.colCount, innerSourceRangeCount = isRowSeries ? sourceRange.colCount : sourceRange.rowCount,
	                targetRangeCount = isRowSeries ? targetRange.colCount : targetRange.rowCount;
	            for (outerIndex = 0; outerIndex < outerSourceRangeCount; outerIndex++) {
	                var trendData = keyword_null, trendDataType = keyword_null, innerIndex = 0,
	                    sourceRow = outerSourceRangeIndex + outerIndex, targetRow = outerTargetRangeIndex + outerIndex, outerSourceIndex = sourceRow, outerTargetIndex = targetRow,
	                    offset = (isRowSeries ? colOffset : rowOffset) || 0, argOffset = isRowSeries ? 0 : offset, argIgnoreFilteredOutRow = isRowSeries ? keyword_null : ignoreFilteredOutRow;
	                while (innerIndex < innerSourceRangeCount) {
	                    var sourceColumn = innerSourceRangeIndex + innerIndex, targetColumn = innerTargetRangeIndex + innerIndex - offset,
	                        sourceValue = keyword_null, innerSourceIndex = sourceColumn, innerTargetIndex = targetColumn;
	                    if (!isRowSeries) {
	                        sourceRow = sourceColumn;
	                        sourceColumn = outerSourceIndex;
	                        targetRow = targetColumn;
	                        targetColumn = outerTargetIndex;
	                    }
	                    sourceSpan = sheet._modelManager.findSpan(sourceRow, sourceColumn);
	                   
	                    formula = sheet.getFormula && sheet.getFormula(sourceRow, sourceColumn);
	                    if (!formula || formula === '') {
	                        sourceValue = sheet.getValue(sourceRow, sourceColumn);
	                    }
	                    if (fillType === 4  && isNumber(sourceValue)) {
	                        if (!trendData) {
	                            trendData = new NumberSource();
	                        }
	                        valueType = sourceValue instanceof Date ? DATE_STRING : NUMBER_STRING;
	                        if (!trendDataType) {
	                            trendDataType = valueType;
	                        }
	                        if (trendDataType === valueType) {
	                            trendData._add(innerSourceIndex, sourceValue);
	                            if (sourceSpan) {
	                                innerIndex += isRowSeries ? sourceSpan.colCount : sourceSpan.rowCount;
	                            } else {
	                                innerIndex++;
	                            }
	                            continue;
	                        }
	                    }
	                    if (sourceValue && trendData && trendData._dataCount()) {
	                        result = self._autoFillTrendValues(isRowSeries, sourceRange, targetRange, outerSourceIndex, outerTargetIndex, trendData, justGetTooltipContent, isIncrease, argOffset, argIgnoreFilteredOutRow, withTag, withoutStyle);
	                        if (justGetTooltipContent && result) {
	                            return result;
	                        }
	                        trendData = keyword_null;
	                        trendDataType = keyword_null;
	                        continue;
	                    }
	                    if (!sourceSpan || sourceSpan && (isRowSeries ? sourceSpan.row : sourceSpan.col) === outerSourceIndex) {
	                        var sameIndex = innerTargetIndex === innerTargetRangeIndex + targetRangeCount - 1;
	                        if (justGetTooltipContent) {
	                            if (sourceSpan && sameIndex || !sourceSpan && (sameIndex && isIncrease || !isIncrease && innerTargetIndex === innerTargetRangeIndex)) {
	                                return sourceValue;
	                            }
	                        } else if (innerTargetIndex < innerTargetRangeIndex + targetRangeCount && innerTargetIndex >= innerTargetRangeIndex &&
	                            (isRowSeries || !isRowSeries && !(ignoreFilteredOutRow && sheet._isRowFilterOut && sheet._isRowFilterOut(innerTargetIndex)))) {
	                            self._copyCell(sheet, sourceRow, sourceColumn, targetRow, targetColumn, sourceValue, fillType, withTag, withoutStyle);
	                        }
	                    }
	                    if (sourceSpan) {
	                        innerIndex += isRowSeries ? sourceSpan.colCount : sourceSpan.rowCount;
	                    } else {
	                        innerIndex++;
	                    }
	                }
	                if (trendData && trendData._dataCount()) {
	                    result = self._autoFillTrendValues(isRowSeries, sourceRange, targetRange, outerSourceIndex, outerTargetIndex, trendData, justGetTooltipContent, isIncrease, argOffset, argIgnoreFilteredOutRow, withTag, withoutStyle);
	                    if (justGetTooltipContent && result) {
	                        return result;
	                    }
	                }
	            }
	            return keyword_null;
	        },
	        _copyCell: function (sheet, fromRow, fromColumn, toRow, toColumn, newValue, type, withTag, withoutStyle) {
	            var modelManager = sheet._modelManager, calcModel, span;
	            if (Sheets._supportsCalc && (sheet.hasFormula(fromRow, fromColumn) || sheet.hasFormula(toRow, toColumn))) {
	                sheet.setFormula(toRow, toColumn, keyword_null);
	                if (type === 0  || type === 4 ) {
	                    calcModel = sheet._getCalcModel();
	                    if (sheet.getFormula(fromRow, fromColumn)) {
	                        CalcEngine.CalcOperatorAdjustor.copyFormula(calcModel, fromRow, fromColumn, calcModel, toRow, toColumn, 1, 1);
	                    }
	                }
	            }
	            sheet.setValue(toRow, toColumn, newValue);
	            var copyToOption = withoutStyle ? 0 : 64 ;
	            if (withTag) {
	                copyToOption |= 128 ;
	            }
	            sheet.copyTo(fromRow, fromColumn, toRow, toColumn, 1, 1, copyToOption);
	            sheet.removeSpan(toRow, toColumn, 3 );
	            span = modelManager.findSpan(fromRow, fromColumn);
	            if (span && fromRow === span.row && fromColumn === span.col) {
	                sheet._addSpanImp(toRow, toColumn, span.rowCount, span.colCount, 3 );
	            }
	        },
	        _autoFillTrendValues: function (isRowTrend, sourceRange, targetRange, sourceArg, targetArg, trendData, justGetTooltipContent, isIncrease, indexOffset, ignoreFilteredOutRow, withTag, withoutStyle) {
	            var self = this, sheet = self._sheet, count, i, value, startIndex,
	                targetRangeIndex = isRowTrend ? targetRange.col : targetRange.row, sourceRangeIndex = isRowTrend ? sourceRange.col : sourceRange.row,
	                targetRangeCount = isRowTrend ? targetRange.colCount : targetRange.rowCount, sourceRangeCount = isRowTrend ? sourceRange.colCount : sourceRange.rowCount;
	            indexOffset = indexOffset || 0;
	            var trendDataCount = trendData._dataCount(), multiplier = (targetRangeIndex - sourceRangeIndex - indexOffset) / sourceRangeCount, isArithmeticProgression = self._isArithmeticProgression(trendData._indexes, trendData._innerValues);
	            if (isArithmeticProgression) {
	                value = [];
	                for (i = 0; i < trendDataCount; i++) {
	                    value[i] = i + 1;
	                }
	                count = trendDataCount;
	            } else {
	                startIndex = trendData._indexes[0];
	                count = trendData._indexes[trendDataCount - 1] - startIndex + 1;
	                if (trendDataCount === 1) {
	                    trendData._add(trendData._indexes[0] + 1, trendData._toActualValue(trendData._innerValues[0] + 1));
	                }
	                value = trendData._indexes2();
	            }
	            for (i = 0; i < count; i++) {
	                var newV = getTrendOrGrowthValue(true, trendData._values2(), value, count * multiplier + i + 1), targetRangeEndIndex = targetRangeIndex + targetRangeCount - 1,
	                    sourceIndex = isArithmeticProgression ? trendData._indexes[i] : startIndex + i, targetIndex = sourceIndex + multiplier * sourceRangeCount;
	                if (justGetTooltipContent) {
	                    if (isArithmeticProgression && (isIncrease && targetIndex === targetRangeEndIndex || !isIncrease && targetIndex === targetRangeIndex) ||
	                        !isArithmeticProgression && targetIndex + indexOffset === targetRangeEndIndex) {
	                        return trendData._toActualValue(newV);
	                    }
	                } else if (targetIndex < targetRangeIndex + targetRangeCount && targetIndex >= targetRangeIndex) {
	                    if (isRowTrend) {
	                        self._copyCell(sheet, sourceArg, sourceIndex, targetArg, targetIndex, trendData._toActualValue(newV), 4 , withTag, withoutStyle);
	                    } else if (!(ignoreFilteredOutRow && sheet._isRowFilterOut && sheet._isRowFilterOut(targetIndex))) {
	                        self._copyCell(sheet, sourceIndex, sourceArg, targetIndex, targetArg, trendData._toActualValue(newV), 4 , withTag, withoutStyle);
	                    }
	                }
	            }
	            return keyword_null;
	        },
	        _isArithmeticProgression: function (indexes, values) {
	            var count = arrayHelper_getLength(values);
	            if (count <= 1 || arrayHelper_getLength(indexes) !== count) {
	                return false;
	            }
	            var indexDiff = indexes[1] - indexes[0], valueDiff = values[1] - values[0], i;
	            for (i = 2; i < count; i++) {
	                if (indexes[i] - indexes[i - 1] !== indexDiff || values[i] - values[i - 1] !== valueDiff) {
	                    return false;
	                }
	            }
	            return true;
	        },
	        _fillAutoByDirection: function (range, direction) {
	            var self = this, sheet = this._sheet, spans = sheet.getSpans(), newRange = sheet._getActualRange(range),
	                row = newRange.row, column = newRange.col, rowCount = newRange.rowCount, columnCount = newRange.colCount,
	                sourceRange;
	            if (direction === 0 ) {
	                sourceRange = createRange(row, column + columnCount - 1, rowCount, 1);
	            } else if (direction === 1 ) {
	                sourceRange = createRange(row, column, rowCount, 1);
	            } else if (direction === 2 ) {
	                sourceRange = createRange(row + rowCount - 1, column, 1, columnCount);
	            } else  {
	                sourceRange = createRange(row, column, 1, columnCount);
	            }
	            sourceRange = sheet._cellRangeInflate(spans, sourceRange);
	            sourceRange && self._directionFillRange(sourceRange, row, column, rowCount, columnCount, direction);
	        },
	        _directionFillRange: function (sourceRange, row, column, rowCount, columnCount, direction) {
	            var self = this, sourceRange_row = sourceRange.row, sourceRange_col = sourceRange.col, sourceRange_rowCount = sourceRange.rowCount, sourceRange_colCount = sourceRange.colCount,
	                nWhole, i, argCount, indexCount, fillSeries, rowCountHelper, colCountHelper,
	                modelManager = self._sheet._modelManager, hasSpan;
	            if (direction === 0 ) {
	                hasSpan = modelManager._hasSpans(row, column, rowCount, columnCount - sourceRange_colCount);
	                rowCountHelper = 0;
	                colCountHelper = -1 * sourceRange_colCount;
	                argCount = columnCount;
	                indexCount = sourceRange_colCount;
	                fillSeries = 1 ;
	            } else if (direction === 1 ) {
	                hasSpan = modelManager._hasSpans(row, column + sourceRange_colCount, rowCount, columnCount - sourceRange_colCount);
	                rowCountHelper = 0;
	                colCountHelper = sourceRange_colCount;
	                argCount = columnCount;
	                indexCount = sourceRange_colCount;
	                fillSeries = 1 ;
	            } else if (direction === 2 ) {
	                hasSpan = modelManager._hasSpans(row, column, rowCount - sourceRange_rowCount, columnCount);
	                rowCountHelper = -1 * sourceRange_rowCount;
	                colCountHelper = 0;
	                argCount = rowCount;
	                indexCount = sourceRange_rowCount;
	                fillSeries = 0 ;
	            } else  {
	                hasSpan = modelManager._hasSpans(row + sourceRange_rowCount, column, rowCount - sourceRange_rowCount, columnCount);
	                rowCountHelper = sourceRange_rowCount;
	                colCountHelper = 0;
	                argCount = rowCount;
	                indexCount = sourceRange_rowCount;
	                fillSeries = 0 ;
	            }
	            if (hasSpan) {
	                throw new Error(sR().Exp_TargetContainsMergedCells);
	            }
	            if (argCount % indexCount !== 0) {
	                throw new Error(sR().Exp_MergedCellsIdentical);
	            }
	            nWhole = Math_floor(argCount / indexCount);
	            for (i = 1; i < nWhole; i++) {
	                self._copyRange(sourceRange, createRange(sourceRange_row + i * rowCountHelper, sourceRange_col + i * colCountHelper, sourceRange_rowCount, sourceRange_colCount), fillSeries, 0 );
	            }
	        },
	        _getNextDateValue: function (isLeftOrUp, dateUnit, initValue, currentValue, stepValue, nextIndex) {
	            var temp = isLeftOrUp ? -1 : 1;
	            var nextStepValue = Math_floor(nextIndex * stepValue), addValue = Math.abs(stepValue),
	                retDate = dateTimeHelper_fromOADate(dateUnit > 1 ? initValue : currentValue);
	            if (dateUnit === 0 ) {
	                retDate.setDate(retDate.getDate() + temp * stepValue);
	            } else if (dateUnit === 1 ) {
	                while (addValue > 0) {
	                    retDate.setDate(retDate.getDate() + temp * (stepValue > 0 ? 1 : -1));
	                    if (retDate.getDay() !== 6 && retDate.getDay() !== 0) {
	                        addValue--;
	                    }
	                }
	            } else if (dateUnit === 2 ) {
	                retDate.setMonth(retDate.getMonth() + temp * nextStepValue);
	            } else  {
	                retDate.setFullYear(retDate.getFullYear() + temp * nextStepValue);
	            }
	            return dateTimeHelper_toOADate(retDate);
	        }
	    };
	    Fill._FillImp = FillImp;
	   
	
	    module.exports = Fill;
	
	}());

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.CalcEngine;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var Sheets = __webpack_require__(2);
	    var Common = __webpack_require__(3);
	    var BaseDialog = Sheets._BaseDialog;
	    
	    var Fill = {};
	    var $ = Sheets.GC$, createElement = Sheets._util._createElement, util = Sheets._util, getPreferredZIndex = util._getPreferredZIndex, $DOCUMENT = $(document);
	    var BUTTON_CLASS = ' btn btn-default', UI_STATE_HOVER_CLASS = 'ui-state-hover ', ITEM_CLASS = 'gc-fill-type-item', MENU_CLASS = 'gc-fill-menu-container',
	        UI_STATE_AND_SMART_MENU_HOVER_CLASS = UI_STATE_HOVER_CLASS + 'gc-smartMenu-item-hover', UI_STATE_AND_SMART_TAG_HOVER_CLASS = UI_STATE_HOVER_CLASS + 'gc-smart-tag-hover',
	        MENU_RADIO_CLASS = 'ui-icon ui-icon-check gc-check-image', MENU_ITEM_INPUT_CLASS = 'gc-menu-item-input', TOGGLE_CLASS = 'ui-state-active gc-smart-tag-active', TAG_CONTAINER_CLASS = 'gc-tag-container',
	        FLOAT = 'float', LEFT = 'left', TOP = 'top', DISPLAY = 'display', WIDTH = 'width', HEIGHT = 'height', MARGIN = 'margin', CHANGE = 'change',
	        INPUT_RADIO = 'input[type=radio]', MOUSE_OVER = 'mouseover', MOUSE_OUT = 'mouseout', CLICK = 'click', FILL_TYPE_CHANGED = 'fillTypeChanged', FILL_KEY_DOWN = 'keydown.ui-fill';
	    var sR = function () {
	        return Common._getResource(Fill.SR)();
	    };
	    
	   
	   
	   
	   
	    
	   
	    function createMenuItem(sheet, id, itemClass, text, inputValue, checked) {
	        var isTouchMode = sheet._isTouchMode, width = isTouchMode ? '160px' : '150px', height = isTouchMode ? '25px' : '20px',
	            outerDiv = $(createElement('div')).css([DISPLAY, WIDTH, HEIGHT, 'padding', MARGIN], ['block', width, height, 0, 0]).addClass('gc-smartMenu-item-default ' + itemClass + ' ui-state-default' + BUTTON_CLASS),
	            inputDiv = $(createElement('div')).addClass(MENU_ITEM_INPUT_CLASS).appendTo(outerDiv),
	            spanDiv = $(createElement('div')).addClass('gc-menu-item-text').appendTo(outerDiv),
	            itemInput = $(createElement('input')).attr({
	                'id': id,
	                'value': inputValue,
	                'type': 'radio',
	                'name': 'fill-group',
	                'style': 'display:none'
	            }).appendTo(inputDiv);
	        $(createElement('span')).text(text).appendTo(spanDiv);
	        if (checked) {
	            inputDiv.addClass(MENU_RADIO_CLASS);
	            itemInput.prop('checked', 'checked');
	        } else {
	            itemInput.prop('checked', '');
	        }
	        return outerDiv;
	    }
	    var _FillMenuDialog = (function (_super) {
	        $.inherit(_FillMenuDialog, _super);
	        function _FillMenuDialog(host, sheet) {
	            var self = this, menuContainer;
	            _super.call(self, host, getPreferredZIndex(sheet.parent._host));
	            self._sheet = sheet;
	            self._smartTagContainer = $('.' + TAG_CONTAINER_CLASS);
	            menuContainer = self._menuContainer = self._getContainer();
	            menuContainer.addClass(MENU_CLASS);
	            createMenuItem(sheet, 'smartMenuCopyCells', ITEM_CLASS, sR().CopyCells, '0', true).appendTo(menuContainer);
	            createMenuItem(sheet, 'smartMenuFillSeries', ITEM_CLASS, sR().FillSeries, '1').appendTo(menuContainer);
	            createMenuItem(sheet, 'smartMenuFillFormattingOnly', ITEM_CLASS, sR().FillFormattingOnly, '2').appendTo(menuContainer);
	            createMenuItem(sheet, 'smartMenuFillWithoutFormatting', ITEM_CLASS, sR().FillWithoutFormatting, '3').appendTo(menuContainer);
	        }
	    
	        var proto = {
	            _show: function () {
	                _super.prototype._show.call(this);
	            },
	            _attachEvent: function () {
	                var self = this;
	                var $smartMenuItem = $('.' + ITEM_CLASS);
	                $smartMenuItem.bind(MOUSE_OVER, function () {
	                    $(this).addClass(UI_STATE_AND_SMART_MENU_HOVER_CLASS);
	                }).bind(MOUSE_OUT, function () {
	                    $(this).removeClass(UI_STATE_AND_SMART_MENU_HOVER_CLASS);
	                }).bind(CLICK, function () {
	                    var $menuItem = $(this), smartTagContainer = self._smartTagContainer, radioArray = $menuItem.find(INPUT_RADIO), radio = radioArray[0];
	                    radio.checked = true;
	                    radioArray.trigger(CHANGE);
	                    smartTagContainer.trigger(CLICK);
	                    smartTagContainer.trigger(MOUSE_OUT);
	                    $menuItem.removeClass(UI_STATE_AND_SMART_MENU_HOVER_CLASS);
	                    var fillType = parseInt($(radio).attr('value'));
	                    self._changeFill(fillType);
	                });
	                var smartMenuRadio = self._menuContainer.find(INPUT_RADIO);
	                smartMenuRadio.bind(CHANGE, function () {
	                    $('.' + MENU_ITEM_INPUT_CLASS).removeClass(MENU_RADIO_CLASS);
	                    $(this).parent().addClass(MENU_RADIO_CLASS);
	                });
	            },
	            _dettachEvent: function () {
	                $('.' + ITEM_CLASS).unbind(MOUSE_OVER).unbind(MOUSE_OUT).unbind(CLICK);
	                this._menuContainer.find(INPUT_RADIO).unbind(CHANGE);
	            },
	            _changeFill: function (fillType) {
	                var self = this, sheet = self._sheet, eventHandler = sheet._eventHandler;
	                if (self._fillType === fillType) {
	                    return;
	                }
	                self._fillType = fillType;
	                sheet._skipCloseDragFillSmartTag = true;
	                sheet.suspendEvent();
	                try {
	                    Sheets.Commands.undo.execute(sheet.parent, {sheetName: sheet.name()});
	                } finally {
	                    sheet.resumeEvent();
	                }
	                sheet._skipCloseDragFillSmartTag = false;
	                sheet._commandManager().execute({
	                    cmd: 'fill', sheetName: sheet.name(),
	                    startRange: eventHandler._dragFillStartRange, fillRange: eventHandler._currentFillRange,
	                    autoFillType: fillType, fillDirection: eventHandler._currentFillDirection
	                });
	                self._smartTagContainer.trigger(FILL_TYPE_CHANGED, fillType);
	            },
	            _isOpen: function () {
	                return !!$('.' + MENU_CLASS).length;
	            }
	        };
	        $.extend(_FillMenuDialog.prototype, proto);
	    
	        return _FillMenuDialog;
	    })(BaseDialog);
	   
	    
	   
	    function getImageSrc(state) {
	        var iconCommonString1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA',
	            iconCommonString2 = 'AAAASCAYAAA',
	            iconCommonString3 = 'AAAACXBIWXMAAA7',
	            iconCommonString4 = 'lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN';
	        return (!state ) ? iconCommonString1 + 'BI' + iconCommonString2 + 'BWzo5X' + iconCommonString3 + 'EAAAOxAGVKw4bAAAKT2' + iconCommonString4 + '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'
	            :  iconCommonString1 + 'Ac' + iconCommonString2 + 'CXScT7' + iconCommonString3 + 'DAAAOwwHHb6hkAAAKTW' + iconCommonString4 + '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';
	    }
	    var _FillDialog = (function (_super) {
	        $.inherit(_FillDialog, _super);
	        function _FillDialog(host, sheet, fillInfo) {
	            var self = this, tagContainer;
	            _super.call(self, host, getPreferredZIndex(sheet.parent._host));
	            self._sheet = sheet;
	            self._fillInfo = fillInfo;
	            tagContainer = self._tagContainer = self._getContainer().addClass('gc-smart-tag-default ' + TAG_CONTAINER_CLASS + ' gc-no-user-select ui-widget-header' + BUTTON_CLASS);
	            self._smartTag = $(createElement('img')).attr('src', getImageSrc(0 )).css(FLOAT, LEFT).appendTo(tagContainer);
	            self._smartTagDown = $(createElement('img')).attr('src', getImageSrc(1 )).css([FLOAT, DISPLAY], [LEFT, 'none']).appendTo(tagContainer);
	        }
	    
	        var proto = {
	            _doMouseEvent: function (isMouseOver, tagContainer, isSafariOnIpad) {
	                var self = this, isTouchMode = self._sheet._isTouchMode, $tagContainer = $(tagContainer), menuDialog = self._menuDialog, smartTagDown = self._smartTagDown,
	                    hoverInWidth = isTouchMode ? '38px' : '32px', hoverOutWidth = isTouchMode ? '24px' : '18px';
	                if (menuDialog && menuDialog._isOpen()) {
	                    return;
	                }
	               
	                isMouseOver ? $tagContainer.addClass(UI_STATE_AND_SMART_TAG_HOVER_CLASS) : $tagContainer.removeClass(UI_STATE_AND_SMART_TAG_HOVER_CLASS);
	               
	                $tagContainer.css([WIDTH, HEIGHT], [isMouseOver ? hoverInWidth : hoverOutWidth, hoverOutWidth ]);
	                if (!isSafariOnIpad) {
	                    isMouseOver ? smartTagDown.show() : smartTagDown.hide();
	                }
	            },
	            _registerEvent: function () {
	                var self = this, tagContainer = self._tagContainer, device = util._device(), isSafariOnIpad = util._browser.safari && (device.ipad || device.iphone);
	                tagContainer.bind(MOUSE_OVER, function () {
	                    self._doMouseEvent(true, this, isSafariOnIpad);
	                }).bind(MOUSE_OUT, function () {
	                    self._doMouseEvent(false, this, isSafariOnIpad);
	                });
	                tagContainer.bind(CLICK, function () {
	                    var $tagContainer = $(this), menuDialog = self._menuDialog, smartTagDown = self._smartTagDown,
	                        isOpen = menuDialog && menuDialog._isOpen();
	                    if (isOpen) {
	                        isSafariOnIpad && smartTagDown.hide();
	                        $tagContainer.removeClass(TOGGLE_CLASS);
	                        self._closeMenu();
	                    } else {
	                        isSafariOnIpad && smartTagDown.show();
	                        $tagContainer.addClass(TOGGLE_CLASS);
	                        self._openMenu();
	                        var menuContainer = self._menuContainer, radio = menuContainer && menuContainer.find(INPUT_RADIO)[self._fillInfo.fillType];
	                        if (radio && !radio.checked ) {
	                            radio.checked = true;
	                            $(radio).trigger(CHANGE);
	                        }
	                    }
	                });
	                $DOCUMENT.bind(FILL_KEY_DOWN, function (event) {
	                    if (event.keyCode === 27 ) {
	                        self._menuDialog && self._menuDialog._isOpen() ? self._closeMenu() : self.close();
	                        util._cancelDefault(event);
	                    }
	                });
	            },
	            _open: function () {
	                var self = this, tagContainer = self._tagContainer, fillInfo = self._fillInfo,
	                    isTouchMode = self._sheet._isTouchMode, margin = isTouchMode ? '3px' : '0px', height = isTouchMode ? '24px' : '18px';
	                if (tagContainer) {
	                    tagContainer.css([LEFT, TOP], [fillInfo.x, fillInfo.y]);
	                    self._show();
	                    self._registerEvent();
	                    self._smartTag.css(MARGIN, margin);
	                    self._smartTagDown.css(HEIGHT, height);
	                    self._reset();
	                }
	            },
	            _openMenu: function () {
	                var self = this, sheet = self._sheet;
	                if (!self._menuDialog) {
	                    self._menuDialog = new _FillMenuDialog(sheet.parent._getContainerDiv(), sheet);
	                    self._menuContainer = self._menuDialog._getContainer();
	                }
	                var $tagContainer = self._tagContainer, left = $tagContainer.css(LEFT), top = $tagContainer.css(TOP), topNumber = parseFloat(top),
	                    menuDialog = self._menuDialog, fillInfo = self._fillInfo;
	                menuDialog._fillType = fillInfo.fillType;
	                if (!isNaN(topNumber)) {
	                    top = topNumber + $tagContainer.height() + 2;
	                }
	                self._menuContainer.css([LEFT, TOP], [left, top]);
	                menuDialog._show();
	                menuDialog._attachEvent();
	               
	                menuDialog._smartTagContainer.unbind(FILL_TYPE_CHANGED).bind(FILL_TYPE_CHANGED, function (e, args) {
	                    fillInfo.fillType = args;
	                });
	            },
	            _closeMenu: function () {
	                var menuDialog = this._menuDialog;
	                if (menuDialog) {
	                    menuDialog._dettachEvent();
	                    menuDialog.close();
	                }
	            },
	            _reset: function () {
	                var self = this, menuDialog = self._menuDialog, tagContainer = self._tagContainer;
	                if (menuDialog) {
	                    if (menuDialog._isOpen()) {
	                        tagContainer.trigger(CLICK);
	                    }
	                    tagContainer.trigger(MOUSE_OUT);
	                }
	            },
	            close: function () {
	                var self = this, sheet = self._sheet;
	                self._reset();
	                $DOCUMENT.unbind(FILL_KEY_DOWN);
	                _super.prototype.close.call(self);
	                sheet && sheet._setFocus();
	            }
	        };
	        $.extend(_FillDialog.prototype, proto);
	    
	        return _FillDialog;
	    })(BaseDialog);
	    Fill._FillDialog = _FillDialog;
	   
	    
	    module.exports = Fill;
	
	}());

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var Sheets = __webpack_require__(2);
	    var Common = __webpack_require__(3);
	    var CalcEngine = __webpack_require__(5);
	    var FillNS = __webpack_require__(4);
	    var $ = Sheets.GC$;
	    var createRange = Sheets._createRange;
	    var hasCalc = Sheets._supportsCalc;
	    var Events = Sheets.Events;
	    var isNullOrUndefined = Common._Types._isNullOrUndefined;
	    var Rect = Sheets.Rect, createLine = Sheets._createLine;
	
	    var keyword_null = null, keyword_undefined = void 0, Math_min = Math.min, Math_abs = Math.abs,
	        Math_max = Math.max;
	    var DRAGDROPTOOLTIP_OFFSET = 5, DRAGFILLTOOLTIP_OFFSET = 3;
	    var DRAG = 'drag', CORNER = 'corner', STR_BLACK = 'black';
	
	    var sR = function () {
	        return Common._getResource(FillNS.SR)();
	    };
	
	    function getRowViewportIndex(object) {
	        return object.rowViewportIndex;
	    }
	    function getColViewportIndex(object) {
	        return object.colViewportIndex;
	    }
	    function getFrozenRowCount(sheet) {
	        return sheet.frozenRowCount();
	    }
	    function getFrozenColumnCount(sheet) {
	        return sheet.frozenColumnCount();
	    }
	    function getHitTestType(object) {
	        return object.hitTestType;
	    }
	    function getSheetRowCount(sheet, sheetArea) {
	        return sheet.getRowCount(sheetArea);
	    }
	    function getSheetColumnCount(sheet, sheetArea) {
	        return sheet.getColumnCount(sheetArea);
	    }
	    function getColCount(obj) {
	        return obj.colCount;
	    }
	    function getRowCount(obj) {
	        return obj.rowCount;
	    }
	    function getHeight(obj) {
	        return obj.height;
	    }
	    function getWidth(obj) {
	        return obj.width;
	    }
	    function paintDragLine(ctx, fromX, fromY, toX, toY) {
	        ctx.save();
	        var line1, line2, line3;
	        if (fromX === toX) {
	            ctx.rect(fromX - 2, fromY, 7, Math_abs(toY - fromY));
	            ctx.clip();
	            ctx.beginPath();
	            if (fromY < toY) {
	                fromY -= 3;
	                toY += 3;
	            } else {
	                fromY += 3;
	                toY -= 3;
	            }
	            line1 = createLine(fromX - 1, fromY - 1, toX - 1, toY + 1, STR_BLACK, 7 );
	            line2 = createLine(fromX, fromY, toX, toY, STR_BLACK, 7 );
	            line3 = createLine(fromX + 1, fromY - 1, toX + 1, toY + 1, STR_BLACK, 7 );
	        } else if (fromY === toY) {
	            ctx.rect(fromX, fromY - 2, Math_abs(toX - fromX), 7);
	            ctx.clip();
	            ctx.beginPath();
	            if (fromX < toX) {
	                fromX -= 3;
	                toX += 3;
	            } else {
	                fromX += 3;
	                toX -= 3;
	            }
	            line1 = createLine(fromX - 1, fromY - 1, toX + 1, toY - 1, STR_BLACK, 7 );
	            line2 = createLine(fromX, fromY, toX, toY, STR_BLACK, 7 );
	            line3 = createLine(fromX - 1, fromY + 1, toX + 1, toY + 1, STR_BLACK, 7 );
	        }
	        line1 && line1._paintLine(ctx);
	        line2 && line2._paintLine(ctx);
	        line3 && line3._paintLine(ctx);
	       
	        ctx.stroke();
	        ctx.beginPath();
	        ctx.restore();
	    }
	
	    function _raiseDragDropBlockOrBlockCompleted(sheet, isDragDropBlock, fromRow, fromColumn, toRow, toColumn, rowCount, columnCount, copy, insert, copyOption) {
	        var triggerEvent = isDragDropBlock ? Events.DragDropBlock : Events.DragDropBlockCompleted,
	            args = {
	                sheet: sheet,
	                sheetName: sheet.name(),
	                fromRow: fromRow,
	                fromCol: fromColumn,
	                toRow: toRow,
	                toCol: toColumn,
	                rowCount: rowCount,
	                colCount: columnCount,
	                copy: copy,
	                insert: insert,
	                copyOption: copyOption
	            };
	        if (isDragDropBlock) {
	            args.cancel = false;
	        }
	        sheet._trigger(triggerEvent, args);
	        return args.cancel;
	    }
	
	    function hasSameSpan(sheet, startRangeSpan, fillRange, hasSameRowAndRowCount, hasSameColAndColCount) {
	        for (var r = 0; r < fillRange.rowCount; r++) {
	            for (var c = 0; c < fillRange.colCount; c++) {
	                var span = sheet.getSpan(fillRange.row + r, fillRange.col + c);
	                if (!span || span.rowCount !== startRangeSpan.rowCount || span.colCount !== startRangeSpan.colCount) {
	                    return false;
	                }
	                if (hasSameRowAndRowCount) {
	                    c += startRangeSpan.colCount;
	                }
	            }
	            if (hasSameColAndColCount) {
	                r += startRangeSpan.rowCount;
	            }
	        }
	        return true;
	    }
	    function canDragFillSpan(sheet, startRange, fillRange) {
	        var startRange_row = startRange.row, startRange_rowCount = startRange.rowCount, startRange_col = startRange.col, startRange_colCount = startRange.colCount;
	        var fillRange_row = fillRange.row, fillRange_rowCount = fillRange.rowCount, fillRange_col = fillRange.col, fillRange_colCount = fillRange.colCount;
	        var hasSameRowAndRowCount = startRange_row === fillRange_row && startRange_rowCount === fillRange_rowCount,
	            hasSameColAndColCount = startRange_col === fillRange_col && startRange_colCount === fillRange_colCount;
	        if (!hasSameRowAndRowCount && !hasSameColAndColCount) {
	            return false;
	        }
	        var startRangeSpan = sheet.getSpan(startRange_row, startRange_col);
	        if (!startRangeSpan || !hasSameSpan(sheet, startRangeSpan, startRange, hasSameRowAndRowCount, hasSameColAndColCount)) {
	            return false;
	        }
	        if (sheet._modelManager._hasPartSpans(fillRange_row, fillRange_col, fillRange_rowCount, fillRange_colCount)) {
	            return false;
	        }
	        return hasSameSpan(sheet, startRangeSpan, fillRange, hasSameRowAndRowCount, hasSameColAndColCount);
	    }
	    $.extend(Sheets._SheetEventHandler.prototype, {
	       
	        _startDragDropping: function (target) {
	            var self = this;
	            if (self._isDragDropping) {
	                return;
	            }
	            var sheet = self._sheet;
	            var fromRange = keyword_null;
	            var selections = sheet._modelManager.getSelections();
	            if (selections.length === 1) {
	                fromRange = selections[0];
	            } else if (selections.length < 1) {
	                fromRange = sheet._modelManager.getSpan(sheet._activeRowIndex, sheet._activeColIndex);
	            }
	            if (fromRange) {
	                self._isDragDropping = true;
	                self._isWorking = true;
	                self._dragDropFromRange = fromRange;
	                var rect = sheet.getRangeRect(getRowViewportIndex(target), getColViewportIndex(target), fromRange);
	                var dragRect = self._dragRect;
	                dragRect.x = rect.x;
	                dragRect.y = rect.y;
	                dragRect.width = rect.width - 1;
	                dragRect.height = rect.height - 1;
	                dragRect.row = fromRange.row;
	                dragRect.col = fromRange.col;
	                dragRect.rowCount = getRowCount(fromRange);
	                dragRect.colCount = getColCount(fromRange);
	                var rg = sheet._getActualRange(fromRange);
	                var hitRow = target.row, hitCol = target.col;
	                if (hitRow < rg.row) {
	                    hitRow = rg.row;
	                }
	                if (hitRow >= rg.row + getRowCount(rg)) {
	                    hitRow = rg.row + getRowCount(rg) - 1;
	                }
	                if (hitCol < rg.col) {
	                    hitCol = rg.col;
	                }
	                if (hitCol >= rg.col + getColCount(rg)) {
	                    hitCol = rg.col + getColCount(rg) - 1;
	                }
	                dragRect.hitRow = hitRow;
	                dragRect.hitCol = hitCol;
	                dragRect.rowOffset = hitRow - rg.row;
	                dragRect.colOffset = hitCol - rg.col;
	                self._startHitInfo = {
	                    _scrollRowViewportIndex: getRowViewportIndex(target),
	                    _scrollColViewportIndex: getColViewportIndex(target),
	                    _hitTestType: getHitTestType(target)
	                };
	                self._startScroll();
	            }
	        },
	        _continueDragDropping: function () {
	            var self = this;
	            if (!self._startHitInfo || !self._isWorking) {
	                return;
	            }
	            if (!self._isDragDropping || !self._dragDropFromRange) {
	                return;
	            }
	            var mousePosition = self._mousePosition;
	            var dragRect = self._dragRect;
	            var halfWidth = dragRect.width / 2, midX = dragRect.x + halfWidth;
	            var halfHeight = dragRect.height / 2, midY = dragRect.y + halfHeight;
	            dragRect.hitTarget = {x: mousePosition.x, y: mousePosition.y};
	            var hitRow = self._getHitRowIndex();
	            var hitCol = self._getHitColumnIndex();
	            var canDrag = false;
	            if (Math_abs(midX - mousePosition.x) > (halfWidth + 5) || Math_abs(midY - mousePosition.y) > (halfHeight + 5)) {
	               
	               
	                canDrag = true;
	            }
	            if (hitRow >= 0 && hitCol >= 0 && canDrag) {
	                self._updateDragDropRect(hitRow, hitCol);
	            }
	            self._continueScroll();
	        },
	        _updateDragDropRect: function (hitRow, hitCol) {
	            var self = this;
	            if (!self._isDragDropping || !self._dragDropFromRange) {
	                return;
	            }
	            var sheet = self._sheet;
	            var dragRect = self._dragRect;
	            var activeSelRange = sheet._getActiveSelectedRange();
	            if (activeSelRange.row === -1 && activeSelRange.col !== -1) {
	                dragRect.row = -1;
	                dragRect.col = Math_max(0, Math_min(getSheetColumnCount(sheet) - getColCount(dragRect), hitCol - dragRect.colOffset));
	            } else if (activeSelRange.row !== -1 && activeSelRange.col === -1) {
	                dragRect.row = Math_max(0, Math_min(getSheetRowCount(sheet) - getRowCount(dragRect), hitRow - dragRect.rowOffset));
	                dragRect.col = -1;
	            } else {
	                dragRect.row = dragRect.row < 0 ? -1 :
	                    Math_max(0, Math_min(getSheetRowCount(sheet) - getRowCount(dragRect), hitRow - dragRect.rowOffset));
	                dragRect.col = dragRect.col < 0 ? -1 :
	                    Math_max(0, Math_min(getSheetColumnCount(sheet) - getColCount(dragRect), hitCol - dragRect.colOffset));
	            }
	            dragRect.hitRow = hitRow;
	            dragRect.hitCol = hitCol;
	            var dragRange = sheet._getActualRange(dragRect);
	           
	            var oldDragRange = self._oldDragRange;
	            if (oldDragRange) { 
	                if (dragRange.row === oldDragRange.row &&
	                    dragRange.col === oldDragRange.col &&
	                    getRowCount(dragRange) === getRowCount(oldDragRange) &&
	                    getColCount(dragRange) === getColCount(oldDragRange) &&
	                    dragRange.row > sheet._getFirstVisualRow() &&
	                    dragRange.col > sheet._getFirstVisualColumn() &&
	                    dragRange.row + getRowCount(dragRange) - 1 < sheet._getLastVisualRow() &&
	                    dragRange.col + getColCount(dragRange) - 1 < sheet._getLastVisualColumn()) {
	                   
	                    return;
	                }
	            }
	            self._actualDragRange = dragRange;
	            sheet._render._refreshDragDropIndicator();
	            self._oldDragRange = dragRange;
	            var workbook = sheet.parent;
	            if (workbook && workbook.options.showDragDropTip) {
	                var left = dragRect.x + dragRect.width + DRAGDROPTOOLTIP_OFFSET;
	                var top = dragRect.y + dragRect.height + DRAGDROPTOOLTIP_OFFSET;
	                workbook._showTooltip(self._getDragDropRectString(dragRange), left, top);
	            }
	        },
	        _getDragDropRectString: function (dragRange) {
	            if (dragRange && hasCalc) {
	                var sheet = this._sheet;
	                var activeSelRange = sheet._getActiveSelectedRange();
	                var activeRow = sheet.getActiveRowIndex();
	                var activeCol = sheet.getActiveColumnIndex();
	                var exp;
	                activeRow = activeRow < 0 ? 0 : activeRow;
	                activeCol = activeCol < 0 ? 0 : activeCol;
	                if (getRowCount(activeSelRange) === 1 && getColCount(activeSelRange) === 1) {
	                    exp = CalcEngine._createCellExpression(keyword_null, keyword_null, dragRange.row - activeRow, dragRange.col - activeCol, true, true);
	                } else {
	                    var row, col, endRow, endCol;
	                    if (activeSelRange.row === -1 && activeSelRange.col >= 0) {
	                        row = endRow = CalcEngine.BAND_INDEX_CONST;
	                        col = dragRange.col - activeCol;
	                        endCol = dragRange.col - activeCol + getColCount(activeSelRange) - 1;
	                    } else if (activeSelRange.col === -1 && activeSelRange.row >= 0) {
	                        col = endCol = CalcEngine.BAND_INDEX_CONST;
	                        row = dragRange.row - activeRow;
	                        endRow = dragRange.row - activeRow + getRowCount(activeSelRange) - 1;
	                    } else if (activeSelRange.row >= 0 && activeSelRange.col >= 0) {
	                        row = dragRange.row - activeRow;
	                        endRow = dragRange.row - activeRow + getRowCount(activeSelRange) - 1;
	                        col = dragRange.col - activeCol;
	                        endCol = dragRange.col - activeCol + getColCount(activeSelRange) - 1;
	                    }
	                    exp = CalcEngine._createRangeExpression(keyword_null, keyword_null, row, col, endRow, endCol, true, true, true, true);
	                }
	                return sheet._getCalcServiceInternal().unparse(sheet._getSheetSource(), exp, activeRow, activeCol);
	            }
	            return keyword_undefined;
	        },
	        _stopDragDrop: function () {
	            var self = this;
	            var isInvalid = false;
	            var invalidMessage = '';
	            var doCommandSuccessfully = false;
	            var sheet = self._sheet;
	            var rg;
	            self._startHitInfo = keyword_null;
	            self._stopScroll();
	            var selectedRange = sheet._getActiveSelectedRange();
	            if (selectedRange && (getRowCount(selectedRange) > 0 || getColCount(selectedRange) > 0)) {
	                rg = {
	                    r: selectedRange.row,
	                    c: selectedRange.col,
	                    rc: getRowCount(selectedRange),
	                    cc: getColCount(selectedRange)
	                };
	            } else {
	                rg = {
	                    r: sheet._activeRowIndex,
	                    c: sheet._activeColIndex,
	                    rc: 1,
	                    cc: 1
	                };
	            }
	            if (self._isDragDropping === true && self._isWorking === true) {
	                var fromRow = rg.r;
	                var fromColumn = rg.c;
	                var rowCount = rg.rc;
	                var columnCount = rg.cc;
	                var toRow = self._dragRect.row;
	                var toColumn = self._dragRect.col;
	                var protectionOptions = sheet.options.protectionOptions;
	                var cancel;
	
	                var e = {
	                    fromRow: fromRow,
	                    fromColumn: fromColumn,
	                    rowCount: rowCount,
	                    columnCount: columnCount,
	                    toRow: toRow,
	                    toColumn: toColumn,
	                    isDragInsert: self._isDragInsert,
	                    isDragCopy: self._isDragCopy
	                };
	                sheet._trigger(Events.BeforeDragDrop, e);
	                invalidMessage = e.invalidMessage;
	
	                if (!invalidMessage || invalidMessage.length === 0) {
	                    if (self._isDragInsert && (fromRow === -1 || fromColumn === -1)) {
	                        if (fromColumn >= 0) {
	                           
	                            if ((self._isDragCopy && (toColumn <= fromColumn || toColumn >= fromColumn + columnCount)) ||
	                                (!self._isDragCopy && (toColumn < fromColumn || toColumn > fromColumn + columnCount))) {
	                                if (sheet._hasPartSpans(-1, fromColumn, -1, columnCount) ||
	                                    sheet._hasPartSpans(-1, toColumn, -1, 0)) {
	                                    isInvalid = true;
	                                    invalidMessage = sR().Exp_ChangeMergedCell;
	                                }
	                               
	                               
	                               
	                               
	                               
	                               
	                               
	                               
	                                var allowDragInsertColumns = protectionOptions && protectionOptions.allowDragInsertColumns;
	                                if (!isInvalid && sheet.options.isProtected && allowDragInsertColumns !== true) {
	                                    isInvalid = true;
	                                    invalidMessage = sR().Exp_ColumnReadOnly;
	                                }
	
	                                if (!isInvalid) {
	                                    cancel = _raiseDragDropBlockOrBlockCompleted(sheet, true, -1,
	                                        fromColumn, -1, toColumn,
	                                        -1, columnCount, self._isDragCopy, true, 1023 );
	                                    if (!cancel) {
	                                        doCommandSuccessfully = sheet._commandManager()
	                                            .execute({
	                                                cmd: 'dragDrop',
	                                                sheetName: sheet.name(),
	                                                fromRow: -1,
	                                                fromColumn: fromColumn,
	                                                toRow: -1,
	                                                toColumn: toColumn,
	                                                rowCount: -1,
	                                                columnCount: columnCount,
	                                                copy: self._isDragCopy,
	                                                insert: true,
	                                                option: 1023 
	                                            });
	
	                                        _raiseDragDropBlockOrBlockCompleted(sheet, false, -1,
	                                            fromColumn, -1, toColumn,
	                                            -1, columnCount, self._isDragCopy, true, 1023 );
	                                    }
	                                }
	                            }
	                        } else if (fromRow >= 0 && fromColumn < 0) { 
	                           
	                            if ((self._isDragCopy && (toRow <= fromRow || toRow >= fromRow + rowCount)) ||
	                                (!self._isDragCopy && (toRow < fromRow || toRow > fromRow + rowCount))) {
	                                if (sheet._hasPartSpans(fromRow, -1, rowCount, -1) || sheet._hasPartSpans(toRow, -1, 0, -1)) {
	                                    isInvalid = true;
	                                    invalidMessage = sR().Exp_ChangeMergedCell;
	                                }
	                                if (!isInvalid) { 
	                                    if (hasCalc && (sheet._hasPartArrayFormulas(fromRow, -1, rowCount, -1) || sheet._hasPartArrayFormulas(toRow, -1, 0, -1))) {
	                                        isInvalid = true;
	                                        invalidMessage = sR().Exp_ChangePartOfArray;
	                                    }
	                                }
	                                var allowDragInsertRows = protectionOptions && protectionOptions.allowDragInsertRows;
	                                if (!isInvalid && sheet.options.isProtected && allowDragInsertRows !== true) {
	                                    isInvalid = true;
	                                    invalidMessage = sR().Exp_RowReadOnly;
	                                }
	                                if (!isInvalid) {
	                                    cancel = _raiseDragDropBlockOrBlockCompleted(sheet, true, fromRow,
	                                        -1, toRow, -1,
	                                        rowCount, -1, self._isDragCopy, true, 1023 );
	                                    if (!cancel) {
	                                        doCommandSuccessfully = sheet._commandManager()
	                                            .execute({
	                                                cmd: 'dragDrop',
	                                                sheetName: sheet.name(),
	                                                fromRow: fromRow,
	                                                fromColumn: -1,
	                                                toRow: toRow,
	                                                toColumn: -1,
	                                                rowCount: rowCount,
	                                                columnCount: -1,
	                                                copy: self._isDragCopy,
	                                                insert: true,
	                                                option: 1023 
	                                            });
	                                        _raiseDragDropBlockOrBlockCompleted(sheet, false, fromRow,
	                                            -1, toRow, -1,
	                                            rowCount, -1, self._isDragCopy, true, 1023 );
	                                    }
	                                }
	                            }
	                        }
	                    } else if (toRow !== fromRow || toColumn !== fromColumn) {
	                        if (sheet._hasPartSpans(fromRow, fromColumn, rowCount, columnCount) ||
	                            sheet._hasPartSpans(toRow, toColumn, rowCount, columnCount)) {
	                            isInvalid = true;
	                            invalidMessage = sR().Exp_ChangeMergedCell;
	                        }
	                        if (!isInvalid) { 
	                            if (hasCalc && (sheet._hasPartArrayFormulas(fromRow, fromColumn, rowCount, columnCount) ||
	                                sheet._hasPartArrayFormulas(toRow, toColumn, rowCount, columnCount))) {
	                                isInvalid = true;
	                                invalidMessage = sR().Exp_ChangePartOfArray;
	                            }
	                        }
	
	                        if (!isInvalid && sheet.options.isProtected) { 
	                            if ((!self._isDragCopy && sheet._isAnyCellInRangeLocked(createRange(fromRow, fromColumn, rowCount, columnCount))) ||
	                                sheet._isAnyCellInRangeLocked(createRange(toRow, toColumn, rowCount, columnCount))) {
	                                isInvalid = true;
	                                invalidMessage = sR().Exp_CellReadOnly;
	                            }
	                        }
	                        if (!isInvalid) {
	                           
	                            cancel = _raiseDragDropBlockOrBlockCompleted(sheet, true, fromRow, fromColumn,
	                                toRow, toColumn, rowCount,
	                                columnCount, self._isDragCopy, false, 1023 );
	                            if (!cancel) {
	                                doCommandSuccessfully = sheet._commandManager().execute({
	                                    cmd: 'dragDrop',
	                                    sheetName: sheet.name(),
	                                    fromRow: fromRow,
	                                    fromColumn: fromColumn,
	                                    toRow: toRow,
	                                    toColumn: toColumn,
	                                    rowCount: rowCount,
	                                    columnCount: columnCount,
	                                    copy: self._isDragCopy,
	                                    insert: false,
	                                    option: 1023 
	                                });
	                                _raiseDragDropBlockOrBlockCompleted(sheet, false, fromRow,
	                                    fromColumn, toRow, toColumn,
	                                    rowCount, columnCount, self._isDragCopy, false, 1023 );
	                            }
	                        }
	                    }
	                }
	            }
	            self._isWorking = false;
	            self._isDragDropping = false;
	            self._dragDropFromRange = keyword_null;
	            self._isDragInsert = false;
	            self._isDragCopy = false;
	            self._oldDragRange = keyword_null;
	            self._removeTooltip();
	            if (!doCommandSuccessfully) {
	                self._dragRect = {};
	                sheet.repaint();
	            }
	            if (isInvalid) {
	                sheet._raiseInvalidOperation(3 , invalidMessage);
	            }
	        },
	       
	        _startDragFill: function (target) {
	            var self = this;
	            if (self._isDraggingFill === true || self._isWorking === true) {
	                return;
	            }
	            self._updateDragFillStartRange();
	            if (!self._dragFillStartRange) {
	                return;
	            }
	            self._isWorking = true;
	            self._isDraggingFill = true;
	            self._isDragAroundIndicator = true;
	            self._dragStartRowViewport = target;
	            self._dragStartColumnViewport = getColViewportIndex(target);
	            self._dragToRowViewport = getRowViewportIndex(target);
	            self._dragToColumnViewport = getColViewportIndex(target);
	            self._updateDragStartRangeViewports();
	            self._startHitInfo = {
	                _scrollRowViewportIndex: getRowViewportIndex(target),
	                _scrollColViewportIndex: getColViewportIndex(target),
	                _hitTestType: getHitTestType(target)
	            };
	            self._startScroll();
	        },
	        _updateDragStartRangeViewports: function () {
	            var self = this;
	            var frozenRowCount = getFrozenRowCount(self._sheet);
	            var frozenColCount = getFrozenColumnCount(self._sheet);
	            var dragFillStartTopRow = self._dragFillStartTopRow();
	            if (dragFillStartTopRow >= 0 && dragFillStartTopRow < frozenRowCount) {
	                self._dragFillStartTopRowViewport = 0;
	            } else if (dragFillStartTopRow >= frozenRowCount && dragFillStartTopRow <= getSheetRowCount(self._sheet)) {
	                self._dragFillStartTopRowViewport = 1;
	            }
	            if (self._isDragFillWholeColumns()) {
	                self._dragFillStartBottomRowViewport = 1;
	            } else {
	                self._dragFillStartBottomRowViewport = self._dragStartRowViewport;
	            }
	            var dragFillStartLeftColumn = self._dragFillStartLeftColumn();
	            if (dragFillStartLeftColumn >= 0 && dragFillStartLeftColumn < frozenColCount) {
	                self._dragFillStartLeftColumnViewport = 0;
	            } else if (dragFillStartLeftColumn >= frozenColCount &&
	                dragFillStartLeftColumn <= getSheetColumnCount(self._sheet)) {
	                self._dragFillStartLeftColumnViewport = 1;
	            }
	            if (self._isDragFillWholeRows()) {
	                self._dragFillStartRightColumnViewport = 1;
	            } else {
	                self._dragFillStartRightColumnViewport = self._dragStartColumnViewport;
	            }
	        },
	        _continueDragFill: function () {
	            var self = this;
	            if (!self._startHitInfo || !self._isDraggingFill) {
	                return;
	            }
	            if (!self._isWorking || !self._dragFillStartRange) {
	                return;
	            }
	            self._dragToRowViewport = self._getHitRowViewportIndex();
	            self._dragToColumnViewport = self._getHitColumnViewportIndex();
	            self._dragToRow = self._getHitRowIndex();
	            self._dragToColumn = self._getHitColumnIndex();
	            if (self._dragToRow >= 0 && self._dragToColumn >= 0) {
	                self._updateCurrentFillSettings();
	                self._updateCurrentFillRange();
	                var workbook = self._sheet.parent;
	                var canDragFill = false;
	                var wholeFillRange = self._getDragFillFrameRange();
	                if (wholeFillRange) {
	                    canDragFill = self._validateFillRange(self._dragFillStartRange, self._currentFillRange, true);
	                }
	                if (workbook && workbook.options.showDragFillTip && canDragFill) {
	                    self._showDragFillTooltip();
	                }
	                self._refreshDragFill();
	            }
	            self._continueScroll();
	        },
	        _getDragFillTooltipContent: function () {
	            var self = this;
	            var sheet = self._sheet;
	            var startRange = self._dragFillStartRange;
	            var fillRange = self._currentFillRange;
	            var sheetAutoFillType = sheet.parent.options.defaultDragFillType;
	            var actualFillType = self._getDragAutoFillType(
	                (sheetAutoFillType === 3 ) ? 5  : sheetAutoFillType
	            );
	            var fillDirection = self._getCurrentFillDirection();
	            var dragFillFrameRange = self._getDragFillFrameRange();
	            var fillSeries;
	            if (actualFillType === 1 ) {
	                if (fillDirection === 0  || fillDirection === 1 ) {
	                    fillSeries = 1 ;
	                } else {
	                    fillSeries = 0 ;
	                }
	                var fill = new FillNS._FillImp(sheet);
	                var trendValue = fill._fillAuto(dragFillFrameRange, fillSeries, true);
	                var cellRange = self._getAvailableRange(fillDirection, fillRange, startRange);
	                var style = sheet.getActualStyle(cellRange.row, cellRange.col);
	                var ct = (style.cellType || sheet._getDefaultCellType());
	                var fmt = style.formatter ? style.formatter : style._autoFormatter;
	                var Formatter_module = __webpack_require__(8);
	                var GeneralFormatter = Formatter_module && Formatter_module.GeneralFormatter;
	                if (trendValue instanceof Date && GeneralFormatter) {
	                    fmt = new GeneralFormatter(
	                        Common.CultureManager._getCultureInfo().DateTimeFormat.shortDatePattern + ' hh:mm:ss AM/PM;@', 0
	                    );
	                }
	                var hitInfo = self._startHitInfo, hitType = 3 ;
	                if (hitInfo) {
	                    hitType = hitInfo._hitTestType;
	                }
	                var context = {
	                    sheet: sheet,
	                    row: cellRange.row,
	                    col: cellRange.col,
	                    sheetArea: hitType,
	                    quotePrefix: style.quotePrefix
	                };
	                var formattedData = {};
	                return ct.format(trendValue, fmt, formattedData, context);
	            } else if (actualFillType === 0 ) {
	                cellRange = self._getAvailableRange(fillDirection, fillRange, startRange);
	                var formula = sheet.getFormula(cellRange.row, cellRange.col);
	                if (formula) {
	                    return keyword_null;
	                }
	                return sheet.getText(cellRange.row, cellRange.col);
	            }
	            return keyword_null;
	        },
	        _getAvailableRange: function (fillDirection, fillRange, startRange) {
	            var startRangeRow = startRange.row;
	            var startRangeCol = startRange.col;
	            var startRangeRowCount = getRowCount(startRange);
	            var startRangeColCount = getColCount(startRange);
	            var cellRange = createRange(startRangeRow, startRangeCol, 1, 1);
	            if (fillDirection === 3 ) {
	                var index = getRowCount(fillRange) % startRangeRowCount;
	                if (index === 0) {
	                    index = startRangeRow + startRangeRowCount - 1;
	                } else {
	                    index = startRangeRow + index - 1;
	                }
	                cellRange.row = index;
	                cellRange.col = startRangeCol;
	            } else if (fillDirection === 1 ) {
	                index = getColCount(fillRange) % startRangeColCount;
	                if (index === 0) {
	                    index = startRangeCol + startRangeColCount - 1;
	                } else {
	                    index = startRangeCol + index - 1;
	                }
	                cellRange.row = startRangeRow;
	                cellRange.col = index;
	            } else if (fillDirection === 0 ) {
	                index = getColCount(fillRange) % startRangeColCount;
	                if (index === 0) {
	                    index = startRangeCol;
	                } else {
	                    index = startRangeCol + startRangeColCount - index;
	                }
	                cellRange.row = startRangeRow;
	                cellRange.col = index;
	            } else if (fillDirection === 2 ) {
	                index = getRowCount(fillRange) % startRangeRowCount;
	                if (index === 0) {
	                    index = startRangeRow;
	                } else {
	                    index = startRangeRow + startRangeRowCount - index;
	                }
	                cellRange.row = index;
	                cellRange.col = startRangeCol;
	            }
	            return cellRange;
	        },
	        _showDragFillTooltip: function () {
	            var self = this;
	            var sheet = self._sheet;
	
	            var autoFillType = self._getDragAutoFillType();
	            if (autoFillType === 4  ||
	                self._isDragFillWholeRows() ||
	                self._isDragFillWholeColumns()) {
	                self._removeTooltip();
	                return keyword_null;
	            }
	            var left, top, info;
	            var fillDirection = self._getCurrentFillDirection();
	            var dragFillFrameRange = self._getDragFillFrameRange();
	            var rect = sheet._getRangeWholeRect(dragFillFrameRange);
	            info = self._getDragFillTooltipContent();
	            if (fillDirection === 3  || fillDirection === 1 ) {
	                left = rect.x + rect.width + DRAGFILLTOOLTIP_OFFSET;
	                top = rect.y + rect.height + DRAGFILLTOOLTIP_OFFSET;
	            } else if (fillDirection === 0 ) {
	                left = rect.x + DRAGFILLTOOLTIP_OFFSET;
	                top = rect.y + rect.height + DRAGFILLTOOLTIP_OFFSET;
	            } else if (fillDirection === 2 ) {
	                left = rect.x + rect.width + DRAGFILLTOOLTIP_OFFSET;
	                top = rect.y + DRAGFILLTOOLTIP_OFFSET;
	            }
	            self._showTooltip(info, left, top);
	        },
	        _refreshDragFill: function () {
	            var self = this;
	            self._clearDragFill();
	            self._refreshSelectionBorder();
	            self._paintDragFill();
	            self._oldDragFillFrameRange = self._getDragFillFrameRange();
	        },
	        _clearDragFill: function () {
	            var sheet = this._sheet;
	            if (this._oldDragFillFrameRange) {
	                var oldDragFillRect = sheet._getRangeWholeRect(this._oldDragFillFrameRange);
	                oldDragFillRect.x -= 2;
	                oldDragFillRect.y -= 2;
	                oldDragFillRect.width += 4;
	                oldDragFillRect.height += 4;
	                sheet._render._copyDoubleBufferRect(oldDragFillRect);
	            }
	        },
	        _refreshSelectionBorder: function (ctx) {
	            var sheet = this._sheet;
	            sheet._render._repaintSelection(this._dragFillStartRange, keyword_null, ctx);
	        },
	        _paintDragFill: function () {
	            var sheet = this._sheet;
	            var render = sheet._render;
	            var dragFillFrameRange = this._getDragFillFrameRange();
	            if (!dragFillFrameRange) {
	                return;
	            }
	            var ctx = render._getCtx();
	            var dragFillRect = sheet._getRangeWholeRect(dragFillFrameRange);
	            ctx.save();
	            ctx.beginPath();
	            render._paintDragRectangle(ctx, dragFillRect);
	            ctx.restore();
	        },
	        _updateCurrentFillRange: function () {
	            this._currentFillRange = this._getCurrentFillRange();
	        },
	        _isDragFillWholeRows: function () {
	            return this._dragFillStartRange.col === -1 && this._dragFillStartRange.row !== -1;
	        },
	        _isDragFillWholeColumns: function () {
	            return this._dragFillStartRange.row === -1 && this._dragFillStartRange.col !== -1;
	        },
	        _isDragClear: function () {
	            return this._currentFillDirection === 4  || this._currentFillDirection === 5 ;
	        },
	        _getCurrentFillRange: function () {
	            var self = this;
	            var row = -1, column = -1, rowCount = -1, columnCount = -1;
	            switch (self._currentFillDirection) {
	                case 0 
	                :
	                    if (self._isDragFillWholeColumns()) {
	                        row = -1;
	                        rowCount = -1;
	                    } else {
	                        row = self._dragFillStartTopRow();
	                        rowCount = getRowCount(self._dragFillStartRange);
	                    }
	                    column = self._dragToColumn;
	                    columnCount = self._dragFillStartLeftColumn() - column;
	                    break;
	                case 1 
	                :
	                    if (self._isDragFillWholeColumns()) {
	                        row = -1;
	                        rowCount = -1;
	                    } else {
	                        row = self._dragFillStartTopRow();
	                        rowCount = getRowCount(self._dragFillStartRange);
	                    }
	                    column = self._dragFillStartRightColumn() + 1;
	                    columnCount = self._dragToColumn - column + 1;
	                    break;
	                case 2 
	                :
	                    row = self._dragToRow;
	                    rowCount = self._dragFillStartTopRow() - row;
	                    if (self._isDragFillWholeRows()) {
	                        column = -1;
	                        columnCount = -1;
	                    } else {
	                        column = self._dragFillStartLeftColumn();
	                        columnCount = getColCount(self._dragFillStartRange);
	                    }
	                    break;
	                case 3 
	                :
	                    row = self._dragFillStartBottomRow() + 1;
	                    rowCount = self._dragToRow - row + 1;
	                    if (self._isDragFillWholeRows()) {
	                        column = -1;
	                        columnCount = -1;
	                    } else {
	                        column = self._dragFillStartLeftColumn();
	                        columnCount = getColCount(self._dragFillStartRange);
	                    }
	                    break;
	                case 5 
	                :
	                    row = self._dragToRow;
	                    rowCount = self._dragFillStartBottomRow() - row + 1;
	                    if (self._isDragFillWholeRows()) {
	                        column = -1;
	                        columnCount = -1;
	                    } else {
	                        column = self._dragFillStartLeftColumn();
	                        columnCount = getColCount(self._dragFillStartRange);
	                    }
	                    break;
	                case 4 
	                :
	                    if (self._isDragFillWholeColumns()) {
	                        row = -1;
	                        rowCount = -1;
	                    } else {
	                        row = self._dragFillStartRange.row;
	                        rowCount = getRowCount(self._dragFillStartRange);
	                    }
	                    column = self._dragToColumn;
	                    columnCount = self._dragFillStartRightColumn() - column + 1;
	                    break;
	                default:
	                    break;
	            }
	            return createRange(row, column, rowCount, columnCount);
	        },
	        _dragFillStartBottomRowLayout: function () {
	            var dragStartBottomRow = this._dragFillStartBottomRow();
	            if (dragStartBottomRow !== -1) {
	                return this._sheet._getRowLayout(this._dragFillStartBottomRowViewport).findRow(dragStartBottomRow);
	            }
	            return keyword_null;
	        },
	        _dragFillToViewportBottomRowLayout: function () {
	            return this._sheet._getRowLayout(this._dragToRowViewport).findRow(this._dragFillToViewportBottomRow());
	        },
	        _dragFillToViewportBottomRow: function () {
	            return this._sheet.getViewportBottomRow(this._dragToRowViewport);
	        },
	        _dragFillStartRightColumnLayout: function () {
	            var dragStartRightColumn = this._dragFillStartRightColumn();
	            if (dragStartRightColumn !== -1) {
	                return this._sheet._getColumnLayout(this._dragFillStartRightColumnViewport).findCol(dragStartRightColumn);
	            }
	            return keyword_null;
	        },
	        _dragFillToViewportRightColumnLayout: function () {
	            return this._sheet._getColumnLayout(this._dragToColumnViewport).findCol(this._dragFillToViewportRightColumn());
	        },
	        _dragFillToViewportRightColumn: function () {
	            return this._sheet.getViewportRightColumn(this._dragToColumnViewport);
	        },
	        _updateCurrentFillSettings: function () {
	            var self = this;
	            var isWholeRows = self._isDragFillWholeRows(), isWholeColumns = self._isDragFillWholeColumns();
	            var t = $(self._sheet._getCanvas()).offset();
	            var e = self._mousePosition.e, x = self._mousePosition.x, y = self._mousePosition.y;
	            var actualX = e.pageX - t.left, actualY = e.pageY - t.top, notClear = false;
	            var hOffset, vOffset;
	            if (!isWholeRows && !isWholeColumns) {
	               
	                if (self._dragToRow >= self._dragFillStartTopRow() && self._dragToRow <= self._dragFillStartBottomRow()) {
	                    if (self._dragToColumn >= self._dragFillStartLeftColumn() &&
	                        self._dragToColumn <= self._dragFillStartRightColumn()) {
	                        hOffset = Math_abs(self._dragToColumn - self._dragFillStartRightColumn());
	                        vOffset = Math_abs(self._dragToRow - self._dragFillStartBottomRow());
	                        if (vOffset > hOffset) {
	                            self._currentFillDirection = 5 ;
	                        } else if (vOffset < hOffset) {
	                            self._currentFillDirection = 4 ;
	                        } else {
	                            var dragFillStartBottomRowLayout = self._dragFillStartBottomRowLayout();
	                            if (!dragFillStartBottomRowLayout) {
	                                dragFillStartBottomRowLayout = self._dragFillToViewportBottomRowLayout();
	                            }
	                            if (y > dragFillStartBottomRowLayout.y + dragFillStartBottomRowLayout.height) {
	                                self._currentFillDirection = 3 ;
	                            } else {
	                                var dragFillStartRightColumnLayout = self._dragFillStartRightColumnLayout();
	                                if (!dragFillStartRightColumnLayout) {
	                                    dragFillStartRightColumnLayout = self._dragFillToViewportRightColumnLayout();
	                                }
	                                var hDistance = dragFillStartRightColumnLayout.x + dragFillStartRightColumnLayout.width - x;
	                                var vDistance = dragFillStartBottomRowLayout.y + dragFillStartBottomRowLayout.height - y;
	                                if (actualX >= dragFillStartRightColumnLayout.x &&
	                                    actualX <= dragFillStartRightColumnLayout.x + dragFillStartRightColumnLayout.width &&
	                                    actualY >= dragFillStartBottomRowLayout.y &&
	                                    actualY <= dragFillStartBottomRowLayout.y + dragFillStartBottomRowLayout.height) {
	                                    if (hDistance >= vDistance) {
	                                        self._currentFillDirection = 4 ;
	                                    } else {
	                                        self._currentFillDirection = 5 ;
	                                    }
	                                } else {
	                                    notClear = true;
	                                }
	                            }
	                        }
	                    } else if (self._dragToColumn < self._dragFillStartLeftColumn()) {
	                        self._currentFillDirection = 0 ;
	                    } else if (self._dragToColumn > self._dragFillStartRightColumn()) {
	                        self._currentFillDirection = 1 ;
	                    }
	                } else if (self._dragToRow < self._dragFillStartTopRow()) {
	                    if (self._dragToColumn >= self._dragFillStartLeftColumn() &&
	                        self._dragToColumn <= self._dragFillStartRightColumn()) {
	                        self._currentFillDirection = 2 ;
	                    } else if (self._dragToColumn < self._dragFillStartLeftColumn()) {
	                        hOffset = Math_abs(self._dragToColumn - self._dragFillStartLeftColumn());
	                        vOffset = Math_abs(self._dragToRow - self._dragFillStartTopRow());
	                        if (vOffset >= hOffset) {
	                            self._currentFillDirection = 2 ;
	                        } else {
	                            self._currentFillDirection = 0 ;
	                        }
	                    } else if (self._dragToColumn > self._dragFillStartRightColumn()) {
	                        hOffset = Math_abs(self._dragToColumn - self._dragFillStartRightColumn());
	                        vOffset = Math_abs(self._dragToRow - self._dragFillStartTopRow());
	                        if (vOffset >= hOffset) {
	                            self._currentFillDirection = 2 ;
	                        } else {
	                            self._currentFillDirection = 1 ;
	                        }
	                    }
	                } else if (self._dragToRow > self._dragFillStartBottomRow()) {
	                    if (self._dragToColumn >= self._dragFillStartLeftColumn() &&
	                        self._dragToColumn <= self._dragFillStartRightColumn()) {
	                        self._currentFillDirection = 3 ;
	                    } else if (self._dragToColumn < self._dragFillStartLeftColumn()) {
	                        hOffset = Math_abs(self._dragToColumn - self._dragFillStartLeftColumn());
	                        vOffset = Math_abs(self._dragToRow - self._dragFillStartBottomRow());
	                        if (vOffset >= hOffset) {
	                            self._currentFillDirection = 3 ;
	                        } else {
	                            self._currentFillDirection = 0 ;
	                        }
	                    } else if (self._dragToColumn > self._dragFillStartRightColumn()) {
	                        hOffset = Math_abs(self._dragToColumn - self._dragFillStartRightColumn());
	                        vOffset = Math_abs(self._dragToRow - self._dragFillStartBottomRow());
	                        if (vOffset >= hOffset) {
	                            self._currentFillDirection = 3 ;
	                        } else {
	                            self._currentFillDirection = 1 ;
	                        }
	                    }
	                }
	            } else if (isWholeColumns) {
	                if (self._dragToColumn >= self._dragFillStartLeftColumn() &&
	                    self._dragToColumn <= self._dragFillStartRightColumn()) {
	                    self._currentFillDirection = 4 ;
	                } else if (self._dragToColumn < self._dragFillStartLeftColumn()) {
	                    self._currentFillDirection = 0 ;
	                } else if (self._dragToColumn > self._dragFillStartRightColumn()) {
	                    self._currentFillDirection = 1 ;
	                }
	            } else if (isWholeRows) { 
	                if (self._dragToRow >= self._dragFillStartTopRow() && self._dragToRow <= self._dragFillStartBottomRow()) {
	                    self._currentFillDirection = 5 ;
	                } else if (self._dragToRow < self._dragFillStartTopRow()) {
	                    self._currentFillDirection = 2 ;
	                } else if (self._dragToRow > self._dragFillStartBottomRow()) {
	                    self._currentFillDirection = 3 ;
	                }
	            }
	            var rect = self._sheet._render._dragFillIndicatorRect;
	            if (rect) {
	               
	                var currentRow = self._dragFillStartBottomRow(),
	                    currentColumn = self._dragFillStartRightColumn(),
	                    nextRow = currentRow + 1, nextColumn = currentColumn + 1;
	                var currentRowHieght = self._sheet.getRowHeight(currentRow, 3 ),
	                    currentColumnWidth = self._sheet.getColumnWidth(currentColumn, 3 ),
	                    nextRowHeight = self._sheet.getRowHeight(nextRow, 3 ),
	                    nextColumnWidth = self._sheet.getColumnWidth(nextColumn, 3 );
	                var minX = (rect.x + rect.width / 2) - Math_min(10, currentColumnWidth / 2),
	                    maxX = (rect.x + rect.width / 2) + Math_min(10, nextColumnWidth / 2),
	                    minY = (rect.y + rect.height / 2) - Math_min(10, currentRowHieght / 2),
	                    maxY = (rect.y + rect.height / 2) + Math_min(10, nextRowHeight / 2);
	                var isAroundIndicator = false;
	                if (!isWholeRows && !isWholeColumns) {
	                    isAroundIndicator = (minX <= actualX && actualX <= maxX && minY <= actualY && actualY <= maxY);
	                } else if (isWholeColumns) {
	                    isAroundIndicator = (minX <= actualX && actualX <= maxX);
	                } else {
	                    isAroundIndicator = (minY <= actualY && actualY <= maxY);
	                }
	                if (isAroundIndicator || notClear) {
	                   
	                   
	                   
	                    self._isDragAroundIndicator = true;
	                    self._currentFillDirection = 4 ;
	                } else {
	                    self._isDragAroundIndicator = false;
	                }
	            }
	        },
	        _dragFillStartTopRow: function () {
	            if (!this._dragFillStartRange) {
	                return -1;
	            } else if (this._dragFillStartRange.row === -1) {
	                return 0;
	            }
	            return this._dragFillStartRange.row;
	        },
	        _dragFillStartBottomRow: function () {
	            var self = this;
	            if (!self._dragFillStartRange) {
	                return -1;
	            } else if (self._dragFillStartRange.row === -1) {
	                return getSheetRowCount(self._sheet) - 1;
	            }
	            return self._dragFillStartRange.row + getRowCount(self._dragFillStartRange) - 1;
	        },
	        _dragFillStartLeftColumn: function () {
	            if (!this._dragFillStartRange) {
	                return -1;
	            } else if (this._dragFillStartRange.col === -1) {
	                return 0;
	            }
	            return this._dragFillStartRange.col;
	        },
	        _dragFillStartRightColumn: function () {
	            var self = this;
	            if (!self._dragFillStartRange) {
	                return -1;
	            } else if (self._dragFillStartRange.col === -1) {
	                return getSheetColumnCount(self._sheet) - 1;
	            }
	            return self._dragFillStartRange.col + getColCount(self._dragFillStartRange) - 1;
	        },
	        _fixFillRange: function (startRange, fillRange) {
	           
	           
	            var range = createRange(fillRange.row, fillRange.col, fillRange.rowCount, fillRange.colCount);
	            var sheet = this._sheet;
	            if (sheet._modelManager.findSpan(startRange.row, startRange.col)) {
	                var startRange_rowCount = startRange.rowCount,
	                    fillRange_rowCount = range.rowCount;
	                if (Math.floor(fillRange_rowCount % startRange_rowCount) !== 0) {
	                    var tempRowCount = Math.ceil(fillRange_rowCount / startRange_rowCount) * startRange_rowCount;
	                    if (range.row + tempRowCount <= sheet.getRowCount()) {
	                        range.rowCount = tempRowCount;
	                    }
	                }
	                var startRange_colCount = startRange.colCount,
	                    fillRange_colCount = range.colCount;
	                if (Math.floor(fillRange_colCount % startRange_colCount) !== 0) {
	                    var tempColCount = Math.ceil(fillRange_colCount / startRange_colCount) * startRange_colCount;
	                    if (range.col + tempColCount <= sheet.getColumnCount()) {
	                        range.colCount = tempColCount;
	                    }
	                }
	            }
	            return range;
	        },
	        _endDragFill: function () {
	            var self = this, sheet = self._sheet;
	            self._startHitInfo = keyword_null;
	            self._stopScroll();
	
	            self._removeTooltip();
	            if (!self._isDraggingFill || !self._isWorking) {
	                self._resetDragFill();
	                return;
	            }
	            self._isDraggingFill = false;
	            self._isWorking = false;
	            var wholeFillRange = self._getDragFillFrameRange();
	            if (!wholeFillRange) {
	                return;
	            }
	            var canDragFill = self._validateFillRange(self._dragFillStartRange, self._currentFillRange);
	            if (!canDragFill || self._isDragAroundIndicator) {
	                self._resetDragFill();
	                self._refreshSelection(wholeFillRange);
	            } else {
	                var startRange = sheet._eventHandler._dragFillStartRange,
	                    fillRange = self._fixFillRange(startRange, self._currentFillRange);
	                var autoFillType = self._getDragAutoFillType();
	                sheet._commandManager().execute({
	                    cmd: 'fill', sheetName: sheet.name(),
	                    startRange: startRange, fillRange: fillRange,
	                    autoFillType: autoFillType, fillDirection: sheet._eventHandler._getCurrentFillDirection()
	                });
	                var cancel = self._isCancelDragFill;
	                if (!cancel && self._isDragFill() && sheet.parent.options.showDragFillSmartTag &&
	                    self._currentDragFillType !== 4 ) {
	                    self._showDragFillSmartTag(self._currentDragFillType);
	                } else {
	                    self._refreshSelection(wholeFillRange);
	                }
	                self._resetDragFill();
	            }
	        },
	        _showDragFillSmartTag: function (autoFillType) {
	            var sheet = this._sheet;
	            var rect = sheet._render._dragFillIndicatorRect;
	            var fillInfo = {
	                x: rect.x + rect.width,
	                y: rect.y + rect.height,
	                fillType: autoFillType
	            };
	            sheet._fillDialog = new FillNS._FillDialog(sheet.parent._getContainerDiv(), sheet, fillInfo);
	            sheet._fillDialog._open();
	        },
	        _updateDragFillStartRange: function () {
	            var sheet = this._sheet;
	            var selections = sheet._modelManager.getSelections();
	            if (selections.length === 1) {
	                this._dragFillStartRange = selections[0];
	            } else if (sheet._activeRowIndex >= 0 && sheet._activeColIndex >= 0) {
	                this._dragFillStartRange = createRange(sheet._activeRowIndex, sheet._activeColIndex, 1, 1);
	            }
	        },
	        _resetDragFill: function () {
	            this._isWorking = false;
	            this._isDraggingFill = false;
	        },
	        _refreshSelection: function (range) {
	            this._sheet._render._repaintSelection(range);
	        },
	        _getDragAutoFillType: function (fillType) {
	            var self = this, sheet = self._sheet,
	                defaultDragFillType = fillType !== keyword_undefined ? fillType : sheet.parent.options.defaultDragFillType;
	            if (self._isDragClear()) {
	                return 4 ;
	            }
	            if (defaultDragFillType !== 5 ) {
	                return defaultDragFillType;
	            }
	            var isDragSingleCell = (getRowCount(self._dragFillStartRange) === 1 &&
	                getColCount(self._dragFillStartRange) === 1) && !self._isDragFillWholeColumns() && !self._isDragFillWholeRows();
	            if (isDragSingleCell) {
	                if (self._isControlPressed) {
	                    return 1 ;
	                }
	                return 0 ;
	            }
	            if (self._isControlPressed) {
	                return 0 ;
	            }
	            return 1 ;
	        },
	        _getDragFillFrameRange: function () {
	            var self = this;
	            if (!self._dragFillStartRange) {
	                return keyword_null;
	            }
	            if (self._isDragClear()) {
	                return self._dragFillStartRange;
	            }
	            if (!self._currentFillRange) {
	                return keyword_null;
	            }
	            var row = 0, rowCount = 0, column = 0, columnCount = 0;
	            if (self._isVerticalDragFill()) {
	                row = self._currentFillDirection === 2  ? self._currentFillRange.row : self._dragFillStartRange.row;
	                rowCount = getRowCount(self._dragFillStartRange) + getRowCount(self._currentFillRange);
	                column = self._dragFillStartRange.col;
	                columnCount = getColCount(self._dragFillStartRange);
	            } else {
	                row = self._dragFillStartRange.row;
	                rowCount = getRowCount(self._dragFillStartRange);
	                column = self._currentFillDirection === 0  ? self._currentFillRange.col : self._dragFillStartRange.col;
	                columnCount = getColCount(self._dragFillStartRange) + getColCount(self._currentFillRange);
	            }
	            return createRange(row, column, rowCount, columnCount);
	        },
	        _validateFillRange: function (startRange, fillRange, ignoreEvent) {
	            var sheet = this._sheet;
	            var canDragFill = true;
	            var invalidMessage = '';
	            if (sheet._modelManager._hasSpans(fillRange.row, fillRange.col, getRowCount(fillRange), getColCount(fillRange)) && !canDragFillSpan(sheet, startRange, fillRange)) {
	                canDragFill = false;
	                invalidMessage = sR().Exp_FillRangeContainsMergedCell;
	            }
	            if (canDragFill && sheet.options.isProtected && sheet._isAnyCellInRangeLocked(fillRange)) {
	                canDragFill = false;
	                invalidMessage = sR().Exp_FillCellsReadOnly;
	            }
	            if (!canDragFill && !ignoreEvent) {
	                sheet._raiseInvalidOperation(2 , invalidMessage);
	            }
	            return canDragFill;
	        },
	        _isDragFill: function () {
	            return this._isIncreaseFill() || this._isDecreaseFill();
	        },
	        _isIncreaseFill: function () {
	            return this._currentFillDirection === 3  || this._currentFillDirection === 1 ;
	        },
	        _isDecreaseFill: function () {
	            return this._currentFillDirection === 0  || this._currentFillDirection === 2 ;
	        },
	        _isVerticalDragFill: function () {
	            return this._currentFillDirection === 2  ||
	                this._currentFillDirection === 3  ||
	                this._currentFillDirection === 5 ;
	        },
	        _getCurrentFillDirection: function () {
	            var currentFillDirection = this._currentFillDirection;
	            if (currentFillDirection >= 0 && currentFillDirection <= 3) {
	                return currentFillDirection;
	            }
	            if (currentFillDirection === 4 ) {
	                return 0 ;
	            }
	            if (currentFillDirection === 5) {
	                return 2 ;
	            }
	            return 3 ;
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	        },
	        _getDragInfo: function (target, x, y) {
	            var self = this;
	            var op = keyword_null;
	            var rowViewportIndex = getRowViewportIndex(target), colViewportIndex = getColViewportIndex(target);
	            var sheet = self._sheet, parent = sheet.parent;
	            if (isNullOrUndefined(rowViewportIndex) || isNullOrUndefined(colViewportIndex) || !parent.options.allowUserDragDrop && !parent.options.allowUserDragFill) {
	                return op;
	            }
	
	            var activeSelRange = sheet._getActiveSelectedRange();
	            if (activeSelRange.row === -1 && activeSelRange.col === -1) {
	                return op;
	            }
	            if (rowViewportIndex >= 0 && colViewportIndex >= 0 && sheet._modelManager.getSelections().length === 1) {
	               
	                if (self._inGrayArea(rowViewportIndex, colViewportIndex, x, y)) {
	                    return op;
	                }
	               
	                var r = sheet.getRangeRect(rowViewportIndex, colViewportIndex, activeSelRange);
	                if (r.x - 4 < x && x < r.x + 4 && r.y <= y && y < r.y + r.height) {
	                    op = {action: DRAG, side: 'left'};
	                }
	                if (!op) {
	                    var rect = self._sheet._render._dragFillIndicatorRect;
	                    if (rect && rect.x <= x && x <= rect.x + rect.width && rect.y <= y && y <= rect.y + rect.height) {
	                        op = {action: DRAG, side: CORNER};
	                    }
	                }
	                if (!op) { 
	                    if (r.x + r.width - 4 < x && x < r.x + r.width + 4 && r.y <= y && y < r.y + r.height) {
	                        op = {action: DRAG, side: 'right'};
	                    }
	                }
	                if (!op) { 
	                    if (r.y - 4 < y && y < r.y + 4 && r.x <= x && x < r.x + r.width) {
	                        op = {action: DRAG, side: 'top'};
	                    }
	                }
	                if (!op) { 
	                    if (r.y + r.height - 4 < y && y < r.y + r.height + 4 && r.x <= x && x < r.x + r.width) {
	                        op = {action: DRAG, side: 'bottom'};
	                    }
	                }
	                if (op) { 
	                    if (x < r.x || x > r.x + r.width || y < r.y || y > r.y + r.height) {
	                        op.outside = true;
	                    }
	                }
	            }
	            if (!parent || !parent.options.allowUserDragDrop) { 
	                if (op && op.side !== CORNER) {
	                    op.side = keyword_null;
	                }
	            }
	            if (!parent || !parent.options.allowUserDragFill) { 
	                if (op && op.side === CORNER) {
	                    op.side = keyword_null;
	                }
	            }
	            return op;
	        }
	    });
	
	    $.extend(Sheets._SheetRender.prototype, {
	        _getDragFillIndicatorRect: function (selectRect, themeVersion) {
	            var sheet = this._sheet;
	            var selectRect_x = selectRect.x, selectRect_y = selectRect.y, selectRect_width = getWidth(selectRect), selectRect_height = getHeight(selectRect);
	            var range = sheet._getActiveSelectedRange();
	            var layout = sheet._getSheetLayout();
	            var sizeAdjust = 4, posAdjust = -2 - 0.5;
	            if (themeVersion > 2007 ) {
	                sizeAdjust = 5;
	                posAdjust = -3;
	            }
	            var rect = new Rect(-4, -4, sizeAdjust, sizeAdjust);
	            if (range.col === -1) {
	                rect.x = layout._frozenX;
	                rect.y = selectRect_y + selectRect_height + posAdjust;
	            } else if (range.row === -1) {
	                rect.x = selectRect_x + selectRect_width + posAdjust;
	                rect.y = layout._frozenY;
	            } else {
	                rect.x = selectRect_x + selectRect_width + posAdjust;
	                rect.y = selectRect_y + selectRect_height + posAdjust;
	            }
	            return rect;
	        },
	        _paintDragFillIndicator: function (ctx, rowViewportIndex, colViewportIndex, selectRect, clipRect) {
	            var self = this, sheet = self._sheet;
	            var layout = sheet._getSheetLayout();
	            var parent = sheet.parent, themeVersion = parent && parent._themeVersion;
	            var indicatorRect = self._getDragFillIndicatorRect(selectRect, themeVersion),
	                indicatorRect_x = indicatorRect.x, indicatorRect_y = indicatorRect.y,
	                indicatorRect_width = getWidth(indicatorRect), indicatorRect_height = getHeight(indicatorRect);
	            var viewportRect = layout._viewportRect(rowViewportIndex, colViewportIndex);
	            if (!clipRect || indicatorRect.intersectRect(clipRect)) { 
	                if (indicatorRect.intersectRect(viewportRect)) {
	                    var adjustSize = -1.5;
	                    if (themeVersion > 2007 ) {
	                        adjustSize = -1;
	                    }
	                    var copyRect = new Rect(indicatorRect_x + adjustSize, indicatorRect_y + adjustSize, indicatorRect_width + 2, indicatorRect_height + 2);
	                    copyRect.x = Math_max(copyRect.x, viewportRect.x);
	                    copyRect.y = Math_max(copyRect.y, viewportRect.y);
	                    self._copyDoubleBufferRect(copyRect);
	                    ctx.save();
	                    if (clipRect && !clipRect.containsRect(indicatorRect)) {
	                        ctx.rect(clipRect.x, clipRect.y, getWidth(clipRect), getHeight(clipRect));
	                        ctx.clip();
	                    }
	                    ctx.beginPath();
	                    ctx.fillStyle = Sheets._ThemeContext._getColor(sheet, sheet.getSelectionBorderColor());
	                    ctx.fillRect(indicatorRect_x, indicatorRect_y, indicatorRect_width, indicatorRect_height);
	                    self._dragFillIndicatorRect = new Rect(indicatorRect.x, indicatorRect.y, 4, 4);
	                    ctx.beginPath();
	                    ctx.restore();
	                }
	            }
	        },
	        _paintDragRectangle: function (ctx, rect) {
	            var x = rect.x, y = rect.y, rightX = x + getWidth(rect), bottomY = y + getHeight(rect);
	           
	            paintDragLine(ctx, x, y, rightX, y);
	           
	            paintDragLine(ctx, x, bottomY, rightX, bottomY);
	           
	            paintDragLine(ctx, x, y, x, bottomY);
	           
	            paintDragLine(ctx, rightX, y, rightX, bottomY);
	        },
	        _paintDragDropIndicator: function (ctx, viewportClipRect) {
	            var self = this;
	            var sheet = self._sheet;
	            var dragRect = sheet._eventHandler._dragRect, hitTarget = dragRect.hitTarget;
	            if (!dragRect || !hitTarget) {
	                return;
	            }
	            var dragRect_hitCol = dragRect.hitCol, dragRect_hitRow = dragRect.hitRow;
	            var isDragInsert = sheet._eventHandler._isDragInsert;
	            var oldRect = sheet._dragOldRect, clipRect;
	            ctx.save();
	            if (isDragInsert === true && (dragRect.row === -1 || dragRect.col === -1)) {
	                if (dragRect.row === -1 && dragRect.col !== -1) {
	                    var cl = sheet._getColumnLayout(0).findCol(dragRect_hitCol);
	                    if (!cl) {
	                        cl = sheet._getColumnLayout(1).findCol(dragRect_hitCol);
	                    }
	                    if (!cl) {
	                        cl = sheet._getColumnLayout(2).findCol(dragRect_hitCol);
	                    }
	                    if (cl) {
	                        var x = cl.x;
	                        var width = getWidth(cl);
	                        dragRect.col = dragRect_hitCol;
	                        if (hitTarget.x > x + width / 2 && (dragRect.col < sheet._getLastFullyVisibleColumn() || dragRect.col === sheet._getLastVisualColumn())) {
	                            x = cl.x + getWidth(cl);
	                            dragRect.col++;
	                        }
	                        if (!oldRect || getWidth(oldRect) !== 0) {
	                            oldRect = sheet._eventHandler._dragRect;
	                        }
	                        if (oldRect) {
	                            clipRect = new Rect(oldRect.x - 2, oldRect.y - 2, getWidth(oldRect) + 4, getHeight(oldRect) + 4);
	                            self._copyDoubleBufferRect(clipRect, viewportClipRect);
	                            self._repaintSelection(sheet._getActiveSelectedRange(), viewportClipRect);
	                        }
	                        sheet._insertDragRect = new Rect(x, dragRect.y, 0, getHeight(dragRect));
	                        ctx.rect(viewportClipRect.x, viewportClipRect.y, getWidth(viewportClipRect), getHeight(viewportClipRect));
	                        ctx.clip();
	                        ctx.beginPath();
	                        paintDragLine(ctx, x, dragRect.y, x, dragRect.y + getHeight(dragRect));
	                    }
	                } else if (dragRect.row !== -1 && dragRect.col === -1) {
	                    var rl = sheet._getRowLayout(0).findRow(dragRect_hitRow);
	                    if (!rl) {
	                        rl = sheet._getRowLayout(1).findRow(dragRect_hitRow);
	                    }
	                    if (!rl) {
	                        rl = sheet._getRowLayout(2).findRow(dragRect_hitRow);
	                    }
	                    if (rl) {
	                        var y = rl.y;
	                        var height = getHeight(rl);
	                        dragRect.row = dragRect_hitRow;
	                        if (hitTarget.y > y + height / 2 && (dragRect.row < sheet._getLastFullyVisibleRow() || dragRect.row === sheet._getLastVisualRow())) {
	                            y = rl.y + getHeight(rl);
	                            dragRect.row++;
	                        }
	                        if (!oldRect || getHeight(oldRect) !== 0) {
	                            oldRect = sheet._eventHandler._dragRect;
	                        }
	                        if (oldRect) {
	                            clipRect = new Rect(oldRect.x - 2, oldRect.y - 2, getWidth(oldRect) + 4, getHeight(oldRect) + 4);
	                            self._copyDoubleBufferRect(clipRect, viewportClipRect);
	                            self._repaintSelection(sheet._getActiveSelectedRange(), viewportClipRect);
	                        }
	                        sheet._insertDragRect = new Rect(dragRect.x, y, getWidth(dragRect), 0);
	                        ctx.rect(viewportClipRect.x, viewportClipRect.y, getWidth(viewportClipRect), getHeight(viewportClipRect));
	                        ctx.clip();
	                        ctx.beginPath();
	                        paintDragLine(ctx, dragRect.x, y, dragRect.x + getWidth(dragRect), y);
	                    }
	                }
	            } else {
	                if (oldRect) {
	                    clipRect = new Rect(oldRect.x - 2, oldRect.y - 2, getWidth(oldRect) + 4, getHeight(oldRect) + 4);
	                    self._copyDoubleBufferRect(clipRect, viewportClipRect);
	                    self._repaintSelection(sheet._getActiveSelectedRange(), viewportClipRect);
	                }
	                ctx.rect(viewportClipRect.x, viewportClipRect.y, getWidth(viewportClipRect), getHeight(viewportClipRect));
	                ctx.clip();
	                ctx.beginPath();
	                self._paintDragRectangle(ctx, dragRect);
	            }
	           
	            ctx.beginPath();
	            ctx.restore();
	        },
	        _refreshDragDropIndicator: function () {
	            var self = this;
	            var sheet = self._sheet;
	            var target = sheet._currentTarget;
	            if (!target || !target.dragInfo) {
	                return;
	            }
	            var ctx = self._getCtx();
	            var layout = sheet._getSheetLayout();
	            var dragRange = sheet._eventHandler._actualDragRange;
	            var dragRect = sheet._eventHandler._dragRect;
	            var rect = sheet._getRangeWholeRect(dragRange);
	           
	            var frozenTrailingColCount = sheet.frozenTrailingColumnCount(), frozenTrailingRowCount = sheet.frozenTrailingRowCount();
	            var endCol = sheet.getColumnCount() - frozenTrailingColCount, endRow = sheet.getRowCount() - frozenTrailingRowCount;
	            var vpRect = layout._viewportRect(1, 1);
	            if (frozenTrailingColCount > 0 && dragRange.col + dragRange.colCount <= endCol && rect.x + getWidth(rect) > vpRect.x + getWidth(vpRect) && rect.intersectRect(vpRect)) {
	                rect = rect.getIntersectRect(vpRect);
	            }
	            if (frozenTrailingRowCount > 0 && dragRange.row + dragRange.rowCount <= endRow && rect.y + getHeight(rect) > vpRect.y + getHeight(vpRect) && rect.intersectRect(vpRect)) {
	                rect = rect.getIntersectRect(vpRect);
	            }
	           
	            var viewportRect = new Rect(layout._frozenX, layout._frozenY, layout._frozenTrailingX + layout._frozenTrailingWidth, layout._frozenTrailingY + layout._frozenTrailingHeight);
	            if (getWidth(rect) > 0 && getHeight(rect) > 0) {
	                dragRect.x = rect.x;
	                dragRect.y = rect.y;
	                dragRect.width = getWidth(rect) - 1;
	                dragRect.height = getHeight(rect) - 1;
	                self._paintDragDropIndicator(ctx, viewportRect);
	            } else if (getWidth(rect) === 0 || getHeight(rect) === 0) {
	                dragRect.x = rect.x;
	                dragRect.y = rect.y;
	                dragRect.width = getWidth(rect);
	                dragRect.height = getHeight(rect);
	                self._paintDragDropIndicator(ctx, viewportRect);
	            }
	            var isDragInsert = sheet._eventHandler._isDragInsert;
	            if (isDragInsert === true) {
	                sheet._dragOldRect = sheet._insertDragRect;
	            } else {
	                sheet._dragOldRect = new Rect(dragRect.x, dragRect.y, getWidth(dragRect), getHeight(dragRect));
	            }
	        }
	    });
	
	}());

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Formatter;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        CopyCells: 'Copy Cells',
	        FillSeries: 'Fill Series',
	        FillFormattingOnly: 'Fill Formatting Only',
	        FillWithoutFormatting: 'Fill Without Formatting',
	        Exp_NumberOnly: 'Only works for Numbers',
	        Exp_RangeContainsMergedCell: 'Range should not have merged cells.',
	        Exp_TargetContainsMergedCells: 'Target range should not have merged cells.',
	        Exp_MergedCellsIdentical: 'This operation requires the merged cells to be identically sized.',
	        Exp_FillRangeContainsMergedCell: 'Cannot fill range that contains a merged cell.',
	        Exp_FillCellsReadOnly: 'The cells you are trying to fill are protected and therefore read-only.',
	        Exp_ChangeMergedCell: 'Cannot change part of merged cell.',
	        Exp_ColumnReadOnly: 'The column you are trying to change is protected and therefore read-only.',
	        Exp_RowReadOnly: 'The row you are trying to change is protected and therefore read-only.',
	        Exp_CellReadOnly: 'The cell you are trying to change is protected and therefore read-only.',
	        Exp_RangeIsNull: 'range is null',
	        Exp_ChangePartOfArray: 'Cannot change part of an array.'
	    };
	
	}());

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.fill.12.0.0.js.map