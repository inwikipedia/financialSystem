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
var GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["ContextMenu"] =
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

	(function () {
	    'use strict';
	    var exports = __webpack_require__(1);
	    exports.MenuView = __webpack_require__(5);
	    exports.SR = {};
	    exports.SR['en'] = __webpack_require__(6);
	    module.exports = exports;
	}());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	    var Sheets = __webpack_require__(2);
	    var Common = __webpack_require__(3);
	    var ContextMenuViewDialog = __webpack_require__(4);
	    var MenuView = __webpack_require__(5);
	    var $ = Sheets.GC$, isNullOrUndefined = Common._Types._isNullOrUndefined,
	        isEmptyObject = Common._Types._isEmptyObject, cancelDefault = Sheets._util._cancelDefault;
	    var COMMAND_PREFIX = "gc.spread.contextMenu.", MENUITEM_NAME_PREFIX = "gc.spread.",
	        ICON_CLASS_PREFIX = "gc-spread-";
	    var VIEWPORT = "viewport", COLHEADER = "colHeader", ROWHEADER = "rowHeader", SLICER = "slicer",
	        SHEETTAB = "sheetTab", CORNER = 'corner';
	    var REMOVE_SLICER = "removeSlicer", TOGGLE_COMMENT = "toggleComment", DELETE_COMMENT = "deleteComment",
	        EDIT_COMMENT = "editComment",
	        UNHIDE_SHEET = "unhideSheet", HIDE_SHEET = "hideSheet", UNHIDE_ROWS = "unhideRows",
	        UNHIDE_COLUMNS = "unhideColumns", HIDE_ROWS = "hideRows",
	        HIDE_COLUMNS = "hideColumns", SORT_ASCEND = "sortAscend", SORT_DESCEND = "sortDescend", SORT = "sort",
	        FILTER = "filter", INSERT_COMMENT = "insertComment", DELETE_SHEET = "deleteSheet",
	        INSERT_SHEET = "insertSheet", INSERT_ROWS = 'insertRows', INSERT_COLUMNS = 'insertColumns',
	        DELETE_ROWS = 'deleteRows', DELETE_COLUMNS = 'deleteColumns', CLEAR_CONTENT = "clearContents", PASTE = "paste",
	        PASTE_OPTIONS = 'pasteOptions', PASTE_FORMATTING = "pasteFormatting", PASTE_VALUES = "pasteValues",
	        PASTE_FORMULA = "pasteFormula", PASTE_ALL = "pasteAll", CUT = "cut", COPY = "copy",
	        SEPARATOR = "separator", GROUP_HEADER = "groupHeader", SLICER_SORT_ASCEND = "slicerSortAscend",
	        SLICER_SORT_DESCEND = "slicerSortDescend";
	    var ROW = "row", COL = "col", keyword_undefined = void 0;
	
	    var ContextMenuNS = {};
	    var sR = function () {
	        return Common._getResource(ContextMenuNS.SR)();
	    };
	    var filterMap = {
	        sheetTab: function (hitInfo, spread, menuItem) {
	            return new RegExp("sheetTab", "i").test(menuItem.workArea) && hitInfo.tabStripHitInfo && hitInfo.tabStripHitInfo.sheetTab && hitInfo.tabStripHitInfo.sheetTab.sheetName !== "newSheet";
	        },
	        outline: function (hitInfo, spread, menuItem) {
	            return new RegExp("outline", "i").test(menuItem.workArea) && hitInfo.worksheetHitInfo && hitInfo.worksheetHitInfo.outlineHitInfo;
	        },
	        viewport: function (hitInfo, spread, menuItem) {
	            if (new RegExp("viewport", "i").test(menuItem.workArea)
	                && hitInfo.worksheetHitInfo
	                && hitInfo.worksheetHitInfo.hitTestType === 3
	                && !hitInfo.worksheetHitInfo.floatingObjectHitInfo
	                && !hitInfo.worksheetHitInfo.shapeHitInfo
	                && !hitInfo.worksheetHitInfo.commentHitInfo) {
	                return filterCommentMenuItem(spread, menuItem)
	                    && filterSortFilterMenuItem(spread, menuItem);
	            }
	        },
	        rowHeader: function (hitInfo, spread, menuItem) {
	            return new RegExp("rowHeader", "i").test(menuItem.workArea) && hitInfo.worksheetHitInfo && hitInfo.worksheetHitInfo.hitTestType === 2;
	        },
	        colHeader: function (hitInfo, spread, menuItem) {
	            return new RegExp("colHeader", "i").test(menuItem.workArea) && hitInfo.worksheetHitInfo && hitInfo.worksheetHitInfo.hitTestType === 1;
	        },
	        corner: function (hitInfo, spread, menuItem) {
	            if (new RegExp("corner", "i").test(menuItem.workArea) && hitInfo.worksheetHitInfo && hitInfo.worksheetHitInfo.hitTestType === 0) {
	                return filterCommentMenuItem(spread, menuItem)
	                    && filterSortFilterMenuItem(spread, menuItem);
	            }
	        },
	        slicer: function (hitInfo, spread, menuItem) {
	            return new RegExp("slicer", "i").test(menuItem.workArea) && hitInfo.worksheetHitInfo && hitInfo.worksheetHitInfo.floatingObjectHitInfo && hitInfo.worksheetHitInfo.floatingObjectHitInfo.floatingObject && hitInfo.worksheetHitInfo.floatingObjectHitInfo.floatingObject.typeName === "Slicer";
	        },
	        chart: function (hitInfo, spread, menuItem) {
	            return new RegExp("chart", "i").test(menuItem.workArea) && hitInfo.worksheetHitInfo && hitInfo.worksheetHitInfo.floatingObjectHitInfo && hitInfo.worksheetHitInfo.floatingObjectHitInfo.floatingObject && hitInfo.worksheetHitInfo.floatingObjectHitInfo.floatingObject.typeName === "2";
	        },
	        shape: function (hitInfo, spread, menuItem) {
	            return new RegExp("shape", "i").test(menuItem.workArea) && hitInfo.worksheetHitInfo && hitInfo.worksheetHitInfo.shapeHitInfo;
	        }
	    };
	
	    var hideSheetsStack = [];
	
	    function isSelectSlicer(sheet) {
	        if (sheet.slicers) {
	            var slicers = sheet.slicers.all();
	            if (!slicers || isEmptyObject(slicers)) {
	                return null;
	            }
	            for (var item in slicers) {
	                if (slicers[item].isSelected()) {
	                    return true;
	                }
	            }
	            return false;
	        }
	    }
	
	    function execInSelectionsForRowOrCol(selections, orientation, callback) {
	        var count = orientation === ROW ? "rowCount" : "colCount";
	        for (var i = 0; i < selections.length; i++) {
	            var selection = selections[i];
	            var rowOrCol = selection[orientation] === -1 ? 0 : selection[orientation];
	            for (var j = 0; j < selection[count]; j++) {
	                callback(rowOrCol + j);
	            }
	        }
	    }
	
	   
	   
	   
	    function isAnyHiddenRowOrColBeforeFirstVisibleRowOrCol(sheet, range) {
	        if (range.colCount === 1 && range.row === -1) {
	            var selectedColumnIndex = range.col;
	            if (selectedColumnIndex === sheet._getFirstVisualColumn()) {
	                var columnIndexBeforeSelectedColumn = selectedColumnIndex - 1;
	                if (columnIndexBeforeSelectedColumn >= 0 && !sheet.getColumnVisible(columnIndexBeforeSelectedColumn)) {
	                    return true;
	                }
	            }
	        } else if (range.rowCount === 1 && range.col === -1) {
	            var selectedRowIndex = range.row;
	            if (selectedRowIndex === sheet._getFirstVisualRow()) {
	                var rowIndexBeforeSelectedRow = selectedRowIndex - 1;
	                if (rowIndexBeforeSelectedRow >= 0 && !sheet.getRowVisible(rowIndexBeforeSelectedRow)) {
	                    return true;
	                }
	            }
	        }
	    }
	
	    function getSelectedSlicers(sheet) {
	        if (sheet.slicers) {
	            var slicers = sheet.slicers.all();
	            if (!slicers || isEmptyObject(slicers)) {
	                return null;
	            }
	            var selectedSlicers = [];
	            for (var item in slicers) {
	                if (slicers[item].isSelected()) {
	                    selectedSlicers.push(slicers[item]);
	                }
	            }
	            return selectedSlicers;
	        }
	    }
	
	    function filterCommentMenuItem(spread, menuItem) {
	        var commentItems = [MENUITEM_NAME_PREFIX + INSERT_COMMENT, MENUITEM_NAME_PREFIX + EDIT_COMMENT, MENUITEM_NAME_PREFIX + TOGGLE_COMMENT, MENUITEM_NAME_PREFIX + DELETE_COMMENT];
	        var itemName = menuItem.name;
	        if (commentItems.indexOf(itemName) < 0) {
	            return true;
	        }
	        var sheet = spread.getActiveSheet();
	        var row = sheet.getActiveRowIndex();
	        var col = sheet.getActiveColumnIndex();
	        if (sheet.comments) {
	            var comment = sheet.comments.get(row, col);
	            if (comment) {
	                return itemName !== MENUITEM_NAME_PREFIX + INSERT_COMMENT;
	            }
	            if (itemName === MENUITEM_NAME_PREFIX + EDIT_COMMENT || itemName === MENUITEM_NAME_PREFIX + TOGGLE_COMMENT) {
	                return false;
	            } else if (itemName === MENUITEM_NAME_PREFIX + INSERT_COMMENT) {
	                return true;
	            }
	            var selections = sheet.getSelections();
	            for (var i = 0; i < selections.length; i++) {
	                var selection = selections[i];
	                if (hasCommentsInSelection(selection, sheet)) {
	                    return true;
	                }
	            }
	            return false;
	        }
	    }
	
	    function hasUnlockedCommentsInSelection(selections, sheet) {
	        if (sheet.comments) {
	            var comments = sheet.comments.all();
	            var colIndex, rowIndex;
	            for (var j = 0; j < selections.length; j++) {
	                var selection = selections[j];
	                for (var i = 0; i < comments.length; i++) {
	                    if (!comments[i].locked()) {
	                        rowIndex = comments[i]._rowIndex;
	                        colIndex = comments[i]._colIndex;
	                        if (rowIndex >= selection.row && rowIndex < (selection.row + selection.rowCount) && colIndex >= selection.col && colIndex < (selection.col + selection.colCount)) {
	                            return true;
	                        }
	                    }
	                }
	            }
	        }
	        return false;
	    }
	
	    function hasCommentsInSelection(selection, sheet) {
	        if (sheet.comments) {
	            var comments = sheet.comments.all();
	            var colIndex, rowIndex;
	            for (var i = 0; i < comments.length; i++) {
	                rowIndex = comments[i]._rowIndex;
	                colIndex = comments[i]._colIndex;
	                if (rowIndex >= selection.row && rowIndex < (selection.row + selection.rowCount) && colIndex >= selection.col && colIndex < (selection.col + selection.colCount)) {
	                    return true;
	                }
	            }
	        }
	        return false;
	    }
	
	    function filterSortFilterMenuItem(spread, menuItem) {
	        if ([MENUITEM_NAME_PREFIX + SORT, MENUITEM_NAME_PREFIX + FILTER].indexOf(menuItem.name) < 0) {
	            return true;
	        }
	        var sheet = spread.getActiveSheet();
	        var selections = sheet.getSelections();
	        if (!selections || selections.length !== 1) {
	            return false;
	        }
	        var selection = selections[0];
	        var table = getTable(sheet, selection);
	        if (table) {
	            var tableRange = table.range();
	            if (selection.row < tableRange.row || selection.col < tableRange.col
	                || selection.row + selection.rowCount > tableRange.row + tableRange.rowCount
	                || selection.col + selection.colCount > tableRange.col + tableRange.colCount) {
	                return false;
	            }
	        }
	        return true;
	    }
	
	    function getTable(sheet, selection) {
	        for (var row = selection.row; row < selection.row + selection.rowCount; row++) {
	            for (var col = selection.col; col < selection.col + selection.colCount; col++) {
	                if (sheet.tables) {
	                    var table = sheet.tables.find(row, col);
	                    if (table) {
	                        return table;
	                    }
	                }
	            }
	        }
	        return null;
	    }
	
	    function getSortedRowSelections(selections) {
	        var sortedRanges = selections;
	        for (var i = 0; i < sortedRanges.length - 1; i++) {
	            for (var j = i + 1; j < sortedRanges.length; j++) {
	                if (sortedRanges[i].row < sortedRanges[j].row) {
	                    var temp = sortedRanges[i];
	                    sortedRanges[i] = sortedRanges[j];
	                    sortedRanges[j] = temp;
	                }
	            }
	        }
	        return sortedRanges;
	    }
	
	    function getSortedColumnsSelections(selections) {
	        var sortedRanges = selections;
	        for (var i = 0; i < sortedRanges.length - 1; i++) {
	            for (var j = i + 1; j < sortedRanges.length; j++) {
	                if (sortedRanges[i].col < sortedRanges[j].col) {
	                    var temp = sortedRanges[i];
	                    sortedRanges[i] = sortedRanges[j];
	                    sortedRanges[j] = temp;
	                }
	            }
	        }
	        return sortedRanges;
	    }
	
	    function setSpanStyleWhenInsertRowsColumns(sheet, insertRow, insertColumn, count) {
	        var viewportSpans = sheet.getSpans(keyword_undefined, 3 );
	        if (insertRow >= 0) {
	            setStyleToInsertRowsInSpan(sheet, viewportSpans, insertRow, count, 3 );
	            setStyleToInsertRowsInSpan(sheet, sheet.getSpans(keyword_undefined, 2 ), insertRow, count, 2 );
	        } else if (insertColumn >= 0) {
	            setStyleToInsertColumnsInSpan(sheet, viewportSpans, insertColumn, count, 3 );
	            setStyleToInsertColumnsInSpan(sheet, sheet.getSpans(keyword_undefined, 1 ), insertColumn, count, 1 );
	        }
	    }
	
	    function setStyleToInsertColumnsInSpan(sheet, spans, insertCol, count, sheetArea) {
	        for (var i = 0, len = spans.length; i < len; i++) {
	            var span = spans[i];
	            if (insertCol > span.col && insertCol < span.col + span.colCount) {
	                var firstCellStyle = sheet.getStyle(span.row, span.col, sheetArea);
	                for (var col = insertCol; col < insertCol + count; col++) {
	                    for (var row = span.row; row < span.row + span.rowCount; row++) {
	                        sheet.setStyle(row, col, firstCellStyle, sheetArea);
	                        if (row === span.row + span.rowCount - 1) {
	                            var lastCell = sheet.getCell(span.row + span.rowCount - 1, span.col);
	                            var borderBottom = lastCell.borderBottom();
	                            if (borderBottom) {
	                                sheet.getCell(row, col).borderBottom(borderBottom);
	                            }
	                        }
	                    }
	                }
	            }
	        }
	    }
	
	    function setStyleToInsertRowsInSpan(sheet, spans, insertRow, count, sheetArea) {
	        for (var i = 0, len = spans.length; i < len; i++) {
	            var span = spans[i];
	            if (insertRow >= span.row && insertRow <= (span.row + span.rowCount)) {
	                var firstCellStyle = sheet.getStyle(span.row, span.col, sheetArea);
	                for (var row = insertRow; row < insertRow + count; row++) {
	                    for (var col = span.col; col < span.col + span.colCount; col++) {
	                        sheet.setStyle(row, col, firstCellStyle, sheetArea);
	                        if (col === span.col + span.colCount - 1) {
	                            var lastCell = sheet.getCell(span.row, span.col + span.colCount - 1);
	                            var borderRight = lastCell.borderRight();
	                            if (borderRight) {
	                                sheet.getCell(row, col).borderRight(borderRight);
	                            }
	                        }
	                    }
	                }
	            }
	        }
	    }
	
	    function doAction(spread, options, isUndo, fnExecute, fnUndo) {
	        var sheet = spread.getSheetFromName(options.sheetName);
	        if (!sheet) {
	            return false;
	        }
	        sheet.suspendPaint();
	        var changesKey = Sheets.Commands._getChangesKey(sheet.name());
	        if (isUndo) {
	            if (fnUndo) {
	                fnUndo(sheet, options);
	            }
	            sheet._modelManager.undo(options[changesKey]);
	        } else {
	            sheet._modelManager.startTransaction();
	            var ret = fnExecute(sheet, options);
	            options[changesKey] = sheet._modelManager.endTransaction();
	        }
	        sheet.resumePaint();
	        return ret;
	    }
	
	   
	    
	    var ContextMenu = (function () {
	        function ContextMenu() {
	            var self = this;
	           
	            
	            self.menuView = new MenuView();
	           
	            
	            self.menuData = [
	                {
	                    text: sR().copy,
	                    name: MENUITEM_NAME_PREFIX + COPY,
	                    command: COMMAND_PREFIX + COPY,
	                    iconClass: ICON_CLASS_PREFIX + COPY,
	                    workArea: VIEWPORT + COLHEADER + ROWHEADER + SLICER + CORNER
	                },
	                {
	                    text: sR().cut,
	                    name: MENUITEM_NAME_PREFIX + CUT,
	                    command: COMMAND_PREFIX + CUT,
	                    iconClass: ICON_CLASS_PREFIX + CUT,
	                    workArea: VIEWPORT + COLHEADER + ROWHEADER + SLICER + CORNER
	                },
	                {
	                    text: sR().pasteOptions,
	                    name: MENUITEM_NAME_PREFIX + PASTE_OPTIONS,
	                    iconClass: ICON_CLASS_PREFIX + PASTE_OPTIONS,
	                    type: GROUP_HEADER,
	                    workArea: VIEWPORT + COLHEADER + ROWHEADER + SLICER + CORNER
	                },
	                {
	                    command: COMMAND_PREFIX + PASTE_ALL,
	                    name: MENUITEM_NAME_PREFIX + PASTE_ALL,
	                    iconClass: ICON_CLASS_PREFIX + PASTE_ALL,
	                    group: MENUITEM_NAME_PREFIX + PASTE_OPTIONS,
	                    text: sR().pasteAll,
	                    workArea: VIEWPORT + COLHEADER + ROWHEADER + SLICER + CORNER
	                },
	                {
	                    command: COMMAND_PREFIX + PASTE_FORMULA,
	                    name: MENUITEM_NAME_PREFIX + PASTE_FORMULA,
	                    iconClass: ICON_CLASS_PREFIX + PASTE_FORMULA,
	                    group: MENUITEM_NAME_PREFIX + PASTE_OPTIONS,
	                    text: sR().pasteFormula,
	                    workArea: VIEWPORT + COLHEADER + ROWHEADER + CORNER
	                },
	                {
	                    command: COMMAND_PREFIX + PASTE_VALUES,
	                    name: MENUITEM_NAME_PREFIX + PASTE_VALUES,
	                    iconClass: ICON_CLASS_PREFIX + PASTE_VALUES,
	                    group: MENUITEM_NAME_PREFIX + PASTE_OPTIONS,
	                    text: sR().pasteValues,
	                    workArea: VIEWPORT + COLHEADER + ROWHEADER + CORNER
	                },
	                {
	                    command: COMMAND_PREFIX + PASTE_FORMATTING,
	                    name: MENUITEM_NAME_PREFIX + PASTE_FORMATTING,
	                    iconClass: ICON_CLASS_PREFIX + PASTE_FORMATTING,
	                    group: MENUITEM_NAME_PREFIX + PASTE_OPTIONS,
	                    text: sR().pasteFormatting,
	                    workArea: VIEWPORT + COLHEADER + ROWHEADER + CORNER
	                },
	                {"type": SEPARATOR},
	                {
	                    text: sR().clearContents,
	                    command: COMMAND_PREFIX + CLEAR_CONTENT,
	                    name: MENUITEM_NAME_PREFIX + CLEAR_CONTENT,
	                    workArea: VIEWPORT + COLHEADER + ROWHEADER + CORNER
	                },
	                {"type": SEPARATOR},
	                {
	                    text: sR().insertRows,
	                    name: MENUITEM_NAME_PREFIX + INSERT_ROWS,
	                    command: COMMAND_PREFIX + INSERT_ROWS,
	                    workArea: ROWHEADER
	                },
	                {
	                    text: sR().insertColumns,
	                    name: MENUITEM_NAME_PREFIX + INSERT_COLUMNS,
	                    command: COMMAND_PREFIX + INSERT_COLUMNS,
	                    workArea: COLHEADER
	                },
	                {
	                    text: sR().deleteRows,
	                    name: MENUITEM_NAME_PREFIX + DELETE_ROWS,
	                    command: COMMAND_PREFIX + DELETE_ROWS,
	                    workArea: ROWHEADER
	                },
	                {
	                    text: sR().deleteColumns,
	                    name: MENUITEM_NAME_PREFIX + DELETE_COLUMNS,
	                    command: COMMAND_PREFIX + DELETE_COLUMNS,
	                    workArea: COLHEADER
	                },
	                {
	                    text: sR().insertSheet,
	                    name: MENUITEM_NAME_PREFIX + INSERT_SHEET,
	                    command: COMMAND_PREFIX + INSERT_SHEET,
	                    workArea: SHEETTAB
	                },
	                {
	                    text: sR().deleteSheet,
	                    name: MENUITEM_NAME_PREFIX + DELETE_SHEET,
	                    command: COMMAND_PREFIX + DELETE_SHEET,
	                    workArea: SHEETTAB
	                },
	                {"type": SEPARATOR},
	                {
	                    text: sR().filter,
	                    name: MENUITEM_NAME_PREFIX + FILTER,
	                    command: COMMAND_PREFIX + FILTER,
	                    workArea: VIEWPORT + CORNER
	                },
	                {
	                    text: sR().sort,
	                    name: MENUITEM_NAME_PREFIX + SORT,
	                    subMenu: [
	                        {
	                            text: sR().sortAscend,
	                            name: MENUITEM_NAME_PREFIX + SORT_ASCEND,
	                            command: COMMAND_PREFIX + SORT_ASCEND,
	                            iconClass: ICON_CLASS_PREFIX + SORT_ASCEND
	                        },
	                        {
	                            text: sR().sortDescend,
	                            name: MENUITEM_NAME_PREFIX + SORT_DESCEND,
	                            command: COMMAND_PREFIX + SORT_DESCEND,
	                            iconClass: ICON_CLASS_PREFIX + SORT_DESCEND
	                        }
	                    ],
	                    workArea: VIEWPORT + CORNER
	                },
	                {
	                    text: sR().slicerSortAscend,
	                    name: MENUITEM_NAME_PREFIX + SLICER_SORT_ASCEND,
	                    command: COMMAND_PREFIX + SLICER_SORT_ASCEND,
	                    iconClass: ICON_CLASS_PREFIX + SORT_ASCEND,
	                    workArea: SLICER
	                },
	                {
	                    text: sR().slicerSortDescend,
	                    name: MENUITEM_NAME_PREFIX + SLICER_SORT_DESCEND,
	                    command: COMMAND_PREFIX + SLICER_SORT_DESCEND,
	                    iconClass: ICON_CLASS_PREFIX + SORT_DESCEND,
	                    workArea: SLICER
	                },
	                {"type": SEPARATOR},
	                {
	                    text: sR().insertComment,
	                    name: MENUITEM_NAME_PREFIX + INSERT_COMMENT,
	                    command: COMMAND_PREFIX + INSERT_COMMENT,
	                    iconClass: ICON_CLASS_PREFIX + INSERT_COMMENT,
	                    workArea: VIEWPORT + CORNER
	                },
	                {
	                    text: sR().editComment,
	                    name: MENUITEM_NAME_PREFIX + EDIT_COMMENT,
	                    command: COMMAND_PREFIX + EDIT_COMMENT,
	                    iconClass: ICON_CLASS_PREFIX + EDIT_COMMENT,
	                    workArea: VIEWPORT + CORNER
	                },
	                {
	                    text: sR().deleteComment,
	                    name: MENUITEM_NAME_PREFIX + DELETE_COMMENT,
	                    command: COMMAND_PREFIX + DELETE_COMMENT,
	                    iconClass: ICON_CLASS_PREFIX + DELETE_COMMENT,
	                    workArea: VIEWPORT + CORNER
	                },
	                {
	                    text: sR().toggleComment,
	                    name: MENUITEM_NAME_PREFIX + TOGGLE_COMMENT,
	                    command: COMMAND_PREFIX + TOGGLE_COMMENT,
	                    workArea: VIEWPORT + CORNER
	                },
	                {"type": SEPARATOR},
	                {
	                    text: sR().hideRows,
	                    name: MENUITEM_NAME_PREFIX + HIDE_ROWS,
	                    command: COMMAND_PREFIX + HIDE_ROWS,
	                    workArea: ROWHEADER
	                },
	                {
	                    text: sR().unhideRows,
	                    name: MENUITEM_NAME_PREFIX + UNHIDE_ROWS,
	                    command: COMMAND_PREFIX + UNHIDE_ROWS,
	                    workArea: ROWHEADER
	                },
	                {
	                    text: sR().hideColumns,
	                    name: MENUITEM_NAME_PREFIX + HIDE_COLUMNS,
	                    command: COMMAND_PREFIX + HIDE_COLUMNS,
	                    workArea: COLHEADER
	                },
	                {
	                    text: sR().unhideColumns,
	                    name: MENUITEM_NAME_PREFIX + UNHIDE_COLUMNS,
	                    command: COMMAND_PREFIX + UNHIDE_COLUMNS,
	                    workArea: COLHEADER
	                },
	                {"type": SEPARATOR},
	                {
	                    text: sR().hideSheet,
	                    name: MENUITEM_NAME_PREFIX + HIDE_SHEET,
	                    command: COMMAND_PREFIX + HIDE_SHEET,
	                    workArea: SHEETTAB
	                },
	                {
	                    text: sR().unhideSheet,
	                    name: MENUITEM_NAME_PREFIX + UNHIDE_SHEET,
	                    command: COMMAND_PREFIX + UNHIDE_SHEET,
	                    workArea: SHEETTAB
	                },
	                {"type": SEPARATOR},
	                {
	                    text: sR().removeSlicer,
	                    name: MENUITEM_NAME_PREFIX + REMOVE_SLICER,
	                    command: COMMAND_PREFIX + REMOVE_SLICER,
	                    workArea: SLICER
	                }
	            ];
	        }
	
	        var proto = {
	            _init: function (spread) {
	                var self = this;
	                if (!self._initialized) {
	                    self._commandManager = spread.commandManager();
	                    if (isNullOrUndefined(self._contextMenuDialog)) {
	                        self._contextMenuDialog = new ContextMenuViewDialog(spread._getContainerDiv(), $(spread._userEventsElem));
	                    }
	                    self._registerCommand(spread);
	                    self._featureRelatedMenuData = {
	                        filter: {
	                            menuDataDict: [
	                                MENUITEM_NAME_PREFIX + FILTER
	                            ],
	                            checkFunction: function (sheet) {
	                                if (sheet.rowFilter) {
	                                    return true;
	                                }
	                            }
	                        },
	                        comments: {
	                            menuDataDict: [
	                                MENUITEM_NAME_PREFIX + INSERT_COMMENT,
	                                MENUITEM_NAME_PREFIX + EDIT_COMMENT,
	                                MENUITEM_NAME_PREFIX + DELETE_COMMENT,
	                                MENUITEM_NAME_PREFIX + TOGGLE_COMMENT
	                            ],
	                            checkFunction: function (sheet) {
	                                if (sheet.comments) {
	                                    return true;
	                                }
	                            }
	                        },
	                        slicer: {
	                            menuDataDict: [
	                                MENUITEM_NAME_PREFIX + SLICER_SORT_ASCEND,
	                                MENUITEM_NAME_PREFIX + SLICER_SORT_DESCEND,
	                                MENUITEM_NAME_PREFIX + REMOVE_SLICER
	                            ],
	                            checkFunction: function (sheet) {
	                                if (sheet.slicers) {
	                                    return true;
	                                }
	                            }
	                        },
	                        floatingObject: {
	                            menuDataDict: [
	                                MENUITEM_NAME_PREFIX + PASTE_VALUES,
	                                MENUITEM_NAME_PREFIX + PASTE_FORMATTING,
	                                MENUITEM_NAME_PREFIX + PASTE_FORMULA
	                            ],
	                            checkFunction: function (sheet) {
	                                if (!sheet._getFloatingObjectClipboardHelper) {
	                                    return true;
	                                }
	                                var ch = sheet._getFloatingObjectClipboardHelper();
	                                var fromSheet = ch.fromSheet;
	                                var clipboardData = fromSheet && fromSheet._clipboardFloatingObjectData;
	                                if (!clipboardData) {
	                                    return true;
	                                }
	                            }
	                        }
	                    };
	                    self._initialized = true;
	                }
	            },
	
	            _doContextMenu: function (event, spread) {
	                var self = this;
	                spread.focus();
	                var hitInfo = self._getHitInfo(event, spread);
	                if (isNullOrUndefined(hitInfo)) {
	                    cancelDefault(event);
	                    return;
	                }
	                var sheet = spread.getActiveSheet();
	                var activeCellPosition = {
	                    row: sheet.getActiveRowIndex(),
	                    col: sheet.getActiveColumnIndex()
	                };
	               
	               
	               
	                if ((sheet.isEditing()
	                        && hitInfo.worksheetHitInfo
	                        && hitInfo.worksheetHitInfo.col === activeCellPosition.col
	                        && hitInfo.worksheetHitInfo.row === activeCellPosition.row)
	                    || (spread.getTab()
	                        && spread.getTab()._tabNameEditor)) {
	                    return;
	                }
	                self._init(spread);
	                self._preOpenContextMenuView(hitInfo, spread);
	                var itemsDataForShown = self._filterDataWithHitInfo(self.menuData, hitInfo, spread);
	                var result = self.onOpenMenu(self.menuData, itemsDataForShown, hitInfo, spread);
	                if (!result) {
	                    cancelDefault(event);
	                    if (itemsDataForShown.length) {
	                        self._openContextMenuImp(itemsDataForShown, hitInfo, spread);
	                    }
	                }
	            },
	
	            _preOpenContextMenuView: function (hitInfo, spread) {
	                var self = this;
	                if (self._contextMenuDialog._isHitOutside(hitInfo)) {
	                    self._switchContextByHitInfo(hitInfo, spread);
	                }
	            },
	
	            _switchContextByHitInfo: function (hitInfo, spread) {
	                var self = this;
	                var sheet = spread.getActiveSheet();
	                if (sheet.isEditing()) {
	                    sheet.endEdit();
	                }
	                if (self._isHitOnSheetTab(hitInfo)) {
	                    self._switchTabStripContextHandler(hitInfo, spread);
	                } else if (self._isHitOnWorkSheet(hitInfo)) {
	                    self._switchWorkSheetContextHandler(hitInfo, spread);
	                }
	            },
	
	            _isHitOnWorkSheet: function (hitInfo) {
	                return hitInfo.worksheetHitInfo;
	            },
	
	            _isHitOutsideSelection: function (selections, rowIndex, colIndex, sheetArea) {
	                var isHitOutsideSelection = true, i, selection;
	                if (sheetArea === 1 ) {
	                    for (i = 0; i < selections.length; i++) {
	                        selection = selections[i];
	                        if (selection.row === -1
	                            && colIndex >= selection.col
	                            && colIndex < selection.col + selection.colCount) {
	                            isHitOutsideSelection = false;
	                        }
	                    }
	                    return isHitOutsideSelection;
	                }
	                if (sheetArea === 2 ) {
	                    for (i = 0; i < selections.length; i++) {
	                        selection = selections[i];
	                        if (selection.col === -1
	                            && rowIndex >= selection.row
	                            && rowIndex < selection.row + selection.rowCount) {
	                            isHitOutsideSelection = false;
	                        }
	                    }
	                    return isHitOutsideSelection;
	                }
	                for (i = 0; i < selections.length; i++) {
	                    selection = selections[i];
	                    if (selection.contains(rowIndex, colIndex)) {
	                        return false;
	                    }
	                }
	                return true;
	            },
	
	            _isHitOnSheetTab: function (hitInfo) {
	                return hitInfo.tabStripHitInfo && hitInfo.tabStripHitInfo.sheetTab;
	            },
	
	            _getHitSheetName: function (hitInfo) {
	                return hitInfo.tabStripHitInfo.sheetTab.sheetName;
	            },
	
	            _switchWorkSheetContextHandler: function (hitInfo, spread) {
	                var self = this;
	                var sheet = spread.getActiveSheet();
	                var worksheetHitInfo = hitInfo.worksheetHitInfo;
	                if (worksheetHitInfo.floatingObjectHitInfo
	                    || worksheetHitInfo.commentHitInfo
	                    || worksheetHitInfo.shapeHitInfo) {
	                   
	                    return;
	                }
	                self._changeSelection(sheet, worksheetHitInfo);
	                self._handleCommentEvent(sheet);
	            },
	
	            _handleCommentEvent: function (sheet) {
	                var row = sheet.getActiveRowIndex();
	                var col = sheet.getActiveColumnIndex();
	                var commentManager = sheet.comments;
	                if (commentManager) {
	                    var comment = commentManager.get(row, col);
	                    if (comment && commentManager._hoverShowComment === comment) {
	                        commentManager._hide(comment);
	                    }
	                }
	            },
	
	            _isHitOnViewPort: function (worksheetHitInfo) {
	                return worksheetHitInfo.hitTestType === 3;
	            },
	
	            _updateValidationUI: function (sheet, r, c) {
	                sheet._updateValidationUI && sheet._updateValidationUI(r, c);
	            },
	
	            _changeSelection: function (sheet, worksheetHitInfo) {
	                var self = this;
	                var oldSelections = sheet._modelManager.getSelections(), r = worksheetHitInfo.row,
	                    c = worksheetHitInfo.col;
	                if ((self._isHitOutsideSelection(oldSelections, r, c, worksheetHitInfo.hitTestType))
	                    && sheet._canSelect(worksheetHitInfo.rowViewportIndex < 0 ? -1 : worksheetHitInfo.row, worksheetHitInfo.colViewportIndex < 0 ? -1 : worksheetHitInfo.col)) {
	                    sheet._eventHandler._changeSelection(sheet, worksheetHitInfo, r, c);
	                    var newSelections = sheet._modelManager.getSelections();
	                    sheet._raiseSelectionChanged(oldSelections, newSelections);
	                }
	            },
	
	            _switchTabStripContextHandler: function (hitInfo, spread) {
	                var beHitSheetName = this._getHitSheetName(hitInfo);
	                spread.setActiveSheet(beHitSheetName);
	                this._specialSwitchContextForTabUnhide(this.menuData, hitInfo, spread);
	            },
	
	            _getHitInfo: function (event, spread) {
	                var offset = spread._getSpreadOffset();
	                var x = event.pageX - offset.left;
	                var y = event.pageY - offset.top;
	                return spread.hitTest(x, y, true);
	            },
	
	           
	            
	            onOpenMenu: function (menuData, itemsDataForShown, hitInfo, spread) {
	
	            },
	
	            _openContextMenuImp: function (itemsDataForShown, hitInfo, spread) {
	                var self = this;
	                if (self._contextMenuDialog._isHitOutside(hitInfo)) {
	                    self._clearOldContextMenu();
	                    self._showNewContextMenu(itemsDataForShown, hitInfo, spread);
	                }
	            },
	
	            _clearOldContextMenu: function () {
	                this._contextMenuDialog.close();
	            },
	
	            _showNewContextMenu: function (itemsDataForShown, hitInfo, spread) {
	                var self = this;
	                self._contextMenuDialog._open(self.menuView, itemsDataForShown, hitInfo.x, hitInfo.y, spread);
	            },
	
	            _filterDataWithHitInfo: function (allMenuData, hitInfo, spread) {
	                var self = this;
	                var itemsDataForShown = [];
	                var menuData = {};
	                $.extend(true, menuData, allMenuData);
	                $.each(menuData, function (menuItemIndex, menuItemData) {
	                    if (isNullOrUndefined(menuItemData)) {
	                        return;
	                    }
	                    if (menuItemData.type === SEPARATOR) {
	                        itemsDataForShown.push(menuItemData);
	                    }
	                    $.each(filterMap, function (workAreaType, checkFunction) {
	                        if (checkFunction(hitInfo, spread, menuItemData)) {
	                            itemsDataForShown.push(menuItemData);
	                        }
	                    });
	                });
	                self._filterMenuDataByHitArea(itemsDataForShown, hitInfo);
	                self._filterMenuDataByFeatures(itemsDataForShown, spread);
	                self._checkMenuItemAvailable(itemsDataForShown, spread);
	                self._trimNullObject(itemsDataForShown);
	                itemsDataForShown = self._trimSeparatorLine(itemsDataForShown);
	                return itemsDataForShown;
	            },
	
	            _filterMenuDataByHitArea: function (itemsDataForShown, hitInfo) {
	                var worksheetHitInfo = hitInfo.worksheetHitInfo;
	                var isGrayArea = worksheetHitInfo && (worksheetHitInfo.row === keyword_undefined || worksheetHitInfo.col === keyword_undefined);
	                if (isGrayArea) {
	                    itemsDataForShown.splice(0, itemsDataForShown.length);
	                }
	               
	               
	               
	               
	               
	               
	            },
	
	            _filterMenuDataByFeatures: function (itemsDataForShown, spread) {
	                var self = this;
	                var sheet = spread.getActiveSheet();
	                var featureRelatedMenuData = self._featureRelatedMenuData;
	                $.each(featureRelatedMenuData, function (category, detail) {
	                    if (!detail.checkFunction(sheet)) {
	                        var menuItemsName = detail.menuDataDict;
	                        var i = 0, menuItemsCount = menuItemsName.length;
	                        for (; i < menuItemsCount; i++) {
	                            self._iteratorMenuDataByName(itemsDataForShown, menuItemsName[i], function (menuData, menuItemDataIndex) {
	                                menuData[menuItemDataIndex] = null;
	                            });
	                        }
	                    }
	                });
	                return itemsDataForShown;
	            },
	
	            _trimNullObject: function (itemsData) {
	                var self = this;
	                var i, itemsCount = itemsData.length;
	                for (i = itemsCount - 1; i > 0; i--) {
	                    if (!itemsData[i]) {
	                        itemsData.splice(i, 1);
	                    } else if (itemsData[i].subMenu) {
	                        self._trimNullObject(itemsData[i].subMenu);
	                    }
	                }
	                return itemsData;
	            },
	
	            _trimSeparatorLine: function (itemsData) {
	                var itemsDataForShown = [];
	                var i, itemsCount = itemsData.length;
	                for (i = 0; i < itemsCount; i++) {
	                    if (itemsData[i] && itemsData[i].type === SEPARATOR && itemsData[i + 1] && itemsData[i + 1].type === SEPARATOR) {
	                        continue;
	                    }
	                    itemsDataForShown.push(itemsData[i]);
	                }
	                itemsCount = itemsDataForShown.length;
	                var start = 0, end = 0, calcStart = true, calcEnd = true;
	                for (i = 0; i < itemsCount; i++) {
	                    if (calcStart && itemsDataForShown[i].type === SEPARATOR) {
	                        start++;
	                    } else {
	                        calcStart = false;
	                    }
	                    if (calcEnd && itemsDataForShown[itemsCount - 1 - i].type === SEPARATOR) {
	                        end++;
	                    } else {
	                        calcEnd = false;
	                    }
	                    if (!calcStart && !calcEnd) {
	                        break;
	                    }
	                }
	                itemsDataForShown.splice(itemsCount - end, end);
	                itemsDataForShown.splice(0, start);
	                return itemsDataForShown;
	            },
	
	            _checkMenuItemAvailable: function (itemsDataForShown, spread) {
	                var self = this;
	                self._checkAvailableByCurrentSelections(itemsDataForShown, spread);
	                self._checkAvailableByProtectionSettings(itemsDataForShown, spread);
	            },
	
	            _checkAvailableByCurrentSelections: function (itemsDataForShown, spread) {
	                var self = this;
	                var sheet = spread.getActiveSheet();
	                for (var i = 0; i < itemsDataForShown.length; i++) {
	                    if (!itemsDataForShown[i]) {
	                        continue;
	                    }
	                    switch (itemsDataForShown[i].name) {
	                        case MENUITEM_NAME_PREFIX + INSERT_ROWS:
	                        case MENUITEM_NAME_PREFIX + DELETE_ROWS:
	                            if (!sheet._isFullRows()) {
	                                itemsDataForShown[i].disable = true;
	                            }
	                            break;
	                        case MENUITEM_NAME_PREFIX + INSERT_COLUMNS:
	                        case MENUITEM_NAME_PREFIX + DELETE_COLUMNS:
	                            if (!sheet._isFullCols()) {
	                                itemsDataForShown[i].disable = true;
	                            }
	                            break;
	                        default:
	                            break;
	                    }
	                    if (itemsDataForShown[i] && itemsDataForShown[i].subMenu) {
	                        self._checkAvailableByCurrentSelections(itemsDataForShown[i].subMenu, spread);
	                    }
	                }
	            },
	
	            _checkAvailableByProtectionSettings: function (itemsDataForShown, spread) {
	                var self = this;
	                var sheet = spread.getActiveSheet(), isProtected = sheet.options.isProtected,
	                    protectionOptions = sheet.options.protectionOptions;
	                if (!isProtected) {
	                    return;
	                }
	                if (protectionOptions) {
	                    var comment;
	                    for (var i = 0; i < itemsDataForShown.length; i++) {
	                        if (!itemsDataForShown[i]) {
	                            continue;
	                        }
	                        switch (itemsDataForShown[i].name) {
	                            case MENUITEM_NAME_PREFIX + INSERT_ROWS:
	                                if (!protectionOptions.allowInsertRows) {
	                                    itemsDataForShown[i].disable = true;
	                                }
	                                break;
	                            case MENUITEM_NAME_PREFIX + INSERT_COLUMNS:
	                                if (!protectionOptions.allowInsertColumns) {
	                                    itemsDataForShown[i].disable = true;
	                                }
	                                break;
	                            case MENUITEM_NAME_PREFIX + DELETE_ROWS:
	                                if (!protectionOptions.allowDeleteRows) {
	                                    itemsDataForShown[i].disable = true;
	                                }
	                                break;
	                            case MENUITEM_NAME_PREFIX + DELETE_COLUMNS:
	                                if (!protectionOptions.allowDeleteColumns) {
	                                    itemsDataForShown[i].disable = true;
	                                }
	                                break;
	                            case MENUITEM_NAME_PREFIX + FILTER:
	                                if (!protectionOptions.allowFilter) {
	                                    itemsDataForShown[i].disable = true;
	                                }
	                                break;
	                            case MENUITEM_NAME_PREFIX + SORT_ASCEND:
	                            case MENUITEM_NAME_PREFIX + SORT_DESCEND:
	                               
	                               
	                                if (!protectionOptions.allowSort) {
	                                    itemsDataForShown[i].disable = true;
	                                }
	                                break;
	                            case MENUITEM_NAME_PREFIX + HIDE_ROWS:
	                            case MENUITEM_NAME_PREFIX + UNHIDE_ROWS:
	                            case MENUITEM_NAME_PREFIX + HIDE_COLUMNS:
	                            case MENUITEM_NAME_PREFIX + UNHIDE_COLUMNS:
	                                itemsDataForShown[i].disable = true;
	                                break;
	                            case MENUITEM_NAME_PREFIX + SLICER_SORT_ASCEND:
	                            case MENUITEM_NAME_PREFIX + SLICER_SORT_DESCEND:
	                               
	                                if (!protectionOptions.allowEditObjects) {
	                                    itemsDataForShown.splice(0, itemsDataForShown.length);
	                                }
	                                break;
	                            case MENUITEM_NAME_PREFIX + INSERT_COMMENT:
	                                if (!protectionOptions.allowEditObjects) {
	                                    itemsDataForShown[i] = null;
	                                }
	                                break;
	                            case MENUITEM_NAME_PREFIX + EDIT_COMMENT:
	                                var isLockText;
	                                if (sheet.comments) {
	                                    comment = sheet.comments.get(sheet.getActiveRowIndex(), sheet.getActiveColumnIndex());
	                                    isLockText = comment && comment.lockText();
	                                }
	                                if (!protectionOptions.allowEditObjects && isLockText) {
	                                    itemsDataForShown[i] = null;
	                                }
	                                break;
	                            case MENUITEM_NAME_PREFIX + DELETE_COMMENT:
	                                var isAllLockedCommentInSelections;
	                                if (sheet.comments) {
	                                    isAllLockedCommentInSelections = !hasUnlockedCommentsInSelection(sheet.getSelections(), sheet);
	                                }
	                                if (!protectionOptions.allowEditObjects && isAllLockedCommentInSelections) {
	                                    itemsDataForShown[i] = null;
	                                }
	                                break;
	                            default:
	                                break;
	                        }
	                        if (itemsDataForShown[i] && itemsDataForShown[i].subMenu) {
	                            self._checkAvailableByProtectionSettings(itemsDataForShown[i].subMenu, spread);
	                        }
	                    }
	                }
	            },
	
	            _specialSwitchContextForTabUnhide: function (menuData, hitInfo, spread) {
	                if (!hitInfo.tabStripHitInfo) {
	                    return;
	                }
	                var self = this;
	                var sheets = spread.sheets;
	                var unhideMenuItemData = self._find(MENUITEM_NAME_PREFIX + UNHIDE_SHEET);
	                if (unhideMenuItemData) {
	                    for (var i = 0; i < sheets.length; i++) {
	                        if (!sheets[i].visible()) {
	                            unhideMenuItemData.disable = false;
	                            return;
	                        }
	                    }
	                    unhideMenuItemData.disable = true;
	                }
	            },
	
	            _find: function (name) {
	                var self = this;
	                return self._findImp(self.menuData, name);
	            },
	
	            _findImp: function (menuData, name) {
	                var self = this;
	                var menuItemData;
	                self._iteratorMenuDataByName(menuData, name, function (data, index) {
	                    menuItemData = data[index];
	                });
	                return menuItemData;
	            },
	
	            _iteratorMenuDataByName: function (menuData, name, callback) {
	                var self = this;
	                var menuDataCount = menuData.length, menuItemDataIndex = 0;
	                for (; menuItemDataIndex < menuDataCount; menuItemDataIndex++) {
	                    if (isNullOrUndefined(menuData[menuItemDataIndex])) {
	                        continue;
	                    }
	                    if (name === menuData[menuItemDataIndex].name) {
	                        callback(menuData, menuItemDataIndex);
	                        return;
	                    }
	                    if (menuData[menuItemDataIndex].subMenu) {
	                        self._iteratorMenuDataByName(menuData[menuItemDataIndex].subMenu, name, callback);
	                    }
	                }
	            },
	
	            _registerCommand: function (workbook) {
	                var commandManager = workbook.commandManager();
	                var copy = {
	                    canUndo: false,
	                    execute: function (spread, options) {
	                        var sheet = spread.getSheetFromName(options.sheetName);
	                        if (!sheet) {
	                            return;
	                        }
	                        if (isSelectSlicer(sheet)) {
	                            commandManager.execute({cmd: "copyFloatingObjects", sheetName: sheet.name()});
	                        } else {
	                            commandManager.execute({cmd: COPY, sheetName: sheet.name(), ignoreClipboard: true});
	                        }
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + COPY, copy, null, false, false, false, false);
	
	                var cut = {
	                    canUndo: false,
	                    execute: function (spread, options) {
	                        var sheet = spread.getSheetFromName(options.sheetName);
	                        if (!sheet) {
	                            return;
	                        }
	                        if (isSelectSlicer(sheet)) {
	                            commandManager.execute({cmd: "cutFloatingObjects", sheetName: sheet.name()});
	                        } else {
	                            commandManager.execute({cmd: CUT, sheetName: sheet.name(), ignoreClipboard: true});
	                        }
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + CUT, cut, null, false, false, false, false);
	
	                var pasteAll = {
	                    canUndo: false,
	                    execute: function (spread, options) {
	                        var sheet = spread.getSheetFromName(options.sheetName);
	                        if (!sheet) {
	                            return;
	                        }
	                        if (sheet.isPasteFloatingObject && sheet.isPasteFloatingObject()) {
	                            commandManager.execute({
	                                cmd: "pasteFloatingObjects",
	                                sheetName: sheet.name()
	                            });
	                        } else if (sheet.isPasteShapes && sheet.isPasteShapes()) {
	                            commandManager.execute({
	                                cmd: "pasteShapes",
	                                sheetName: sheet.name()
	                            });
	                        } else {
	                            var oldClipOption = sheet.options.clipBoardOptions;
	                            sheet.options.clipBoardOptions = 0;
	                            var callback = function () {
	                                sheet.options.clipBoardOptions = oldClipOption;
	                            };
	                            commandManager.execute({cmd: PASTE, sheetName: sheet.name(), callback: callback});
	                        }
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + PASTE_ALL, pasteAll, null, false, false, false, false);
	
	                var pasteFormula = {
	                    canUndo: false,
	                    execute: function (spread, options) {
	                        var sheet = spread.getSheetFromName(options.sheetName);
	                        if (!sheet) {
	                            return;
	                        }
	                        var oldClipOption = sheet.options.clipBoardOptions;
	                        sheet.options.clipBoardOptions = 3;
	                        var callback = function () {
	                            sheet.options.clipBoardOptions = oldClipOption;
	                        };
	                        commandManager.execute({cmd: PASTE, sheetName: sheet.name(), callback: callback});
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + PASTE_FORMULA, pasteFormula, null, false, false, false, false);
	
	                var pasteValues = {
	                    canUndo: false,
	                    execute: function (spread, options) {
	                        var sheet = spread.getSheetFromName(options.sheetName);
	                        if (!sheet) {
	                            return;
	                        }
	                        var oldClipOption = sheet.options.clipBoardOptions;
	                        sheet.options.clipBoardOptions = 1;
	                        var callback = function () {
	                            sheet.options.clipBoardOptions = oldClipOption;
	                        };
	                        commandManager.execute({cmd: PASTE, sheetName: sheet.name(), callback: callback});
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + PASTE_VALUES, pasteValues, null, false, false, false, false);
	
	                var pasteFormatting = {
	                    canUndo: false,
	                    execute: function (spread, options) {
	                        var sheet = spread.getSheetFromName(options.sheetName);
	                        if (!sheet) {
	                            return;
	                        }
	                        var oldClipOption = sheet.options.clipBoardOptions;
	                        sheet.options.clipBoardOptions = 2;
	                        var callback = function () {
	                            sheet.options.clipBoardOptions = oldClipOption;
	                        };
	                        commandManager.execute({cmd: PASTE, sheetName: sheet.name(), callback: callback});
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + PASTE_FORMATTING, pasteFormatting, null, false, false, false, false);
	
	                var clear = {
	                    canUndo: false,
	                    execute: function (spread, options) {
	                        var sheet = spread.getSheetFromName(options.sheetName);
	                        if (!sheet) {
	                            return;
	                        }
	                        commandManager.execute({cmd: "clear", sheetName: sheet.name()});
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + CLEAR_CONTENT, clear, null, false, false, false, false);
	
	                var insertComment = {
	                    canUndo: true,
	                    execute: function (spread, options, isUndo) {
	                        return doAction(spread, options, isUndo, function (sheet, cmdOptions) {
	                           
	                           
	                            var state = cmdOptions.commentState || 2 ;
	                            var displayMode = cmdOptions.displayMode;
	                            var row = cmdOptions.activeRow;
	                            var col = cmdOptions.activeCol;
	                            var comment = sheet.comments.add(row, col, '');
	                            if (comment) {
	                                comment.commentState(state);
	                                if (displayMode) {
	                                    comment.displayMode(displayMode);
	                                }
	                            }
	                        }, function (sheet, cmdOptions) {
	                            var row = cmdOptions.activeRow;
	                            var col = cmdOptions.activeCol;
	                            var comment = sheet.comments.get(row, col);
	                            if (comment) {
	                                cmdOptions.displayMode = comment.displayMode();
	                                cmdOptions.commentState = comment.commentState();
	                            }
	                        });
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + INSERT_COMMENT, insertComment, null, false, false, false, false);
	
	                var editComment = {
	                    canUndo: false,
	                    execute: function (spread, options) {
	                        var sheet = spread.getSheetFromName(options.sheetName);
	                        if (!sheet) {
	                            return;
	                        }
	                        var row = options.activeRow;
	                        var col = options.activeCol;
	                        var comment = sheet.comments.get(row, col);
	                        if (comment) {
	                            comment.commentState(2 );
	                        }
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + EDIT_COMMENT, editComment, null, false, false, false, false);
	
	                var deleteComment = {
	                    canUndo: true,
	                    execute: function (spread, options, isUndo) {
	                        return doAction(spread, options, isUndo, function (sheet) {
	                            var selections = options.selections;
	                            var length = selections.length;
	                            if (length <= 0) {
	                                return;
	                            }
	                            for (var i = 0; i < length; i++) {
	                                var sel = selections[i];
	                                for (var r = sel.row; r < sel.row + sel.rowCount; r++) {
	                                    for (var c = sel.col; c < sel.col + sel.colCount; c++) {
	                                        var comment = sheet.comments.get(r, c);
	                                        if (comment && !(sheet.options.isProtected && comment.locked())) {
	                                            commandManager.execute({
	                                                cmd: DELETE_COMMENT,
	                                                sheetName: sheet.name(),
	                                                row: comment._rowIndex,
	                                                col: comment._colIndex
	                                            });
	                                        }
	                                    }
	                                }
	                            }
	                        });
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + DELETE_COMMENT, deleteComment, null, false, false, false, false);
	
	                var toggleComment = {
	                    canUndo: false,
	                    execute: function (spread, options) {
	                        var sheet = spread.getSheetFromName(options.sheetName);
	                        if (!sheet) {
	                            return;
	                        }
	                        var row = options.activeRow;
	                        var col = options.activeCol;
	                        var comment = sheet.comments.get(row, col);
	                        if (comment) {
	                            if (comment.displayMode() === 2) {
	                                comment.displayMode(1 );
	                            } else {
	                                comment.displayMode(2 );
	                            }
	                        }
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + TOGGLE_COMMENT, toggleComment, null, false, false, false, false);
	
	                var insertRows = {
	                    canUndo: true,
	                    execute: function (spread, options, isUndo) {
	                        return doAction(spread, options, isUndo, function (sheet) {
	                            var sortedRanges = getSortedRowSelections(options.selections);
	                            for (var i = 0; i < sortedRanges.length; i++) {
	                                var preRow = sheet.getRange(sortedRanges[i].row - 1, 0, 1, sortedRanges[i].colCount);
	                                var isPreRowLocked = [];
	                                for (var s = 0; s < preRow.colCount; s++) {
	                                    if (!sheet.getCell(preRow.row, s).locked()) {
	                                        isPreRowLocked.push(s);
	                                    }
	                                }
	                                sheet.addRows(sortedRanges[i].row, sortedRanges[i].rowCount);
	                                for (var f = 0; f < isPreRowLocked.length; f++) {
	                                    for (var k = sortedRanges[i].row; k < sortedRanges[i].row + sortedRanges[i].rowCount; k++) {
	                                        sheet.getCell(k, isPreRowLocked[f]).locked(false);
	                                    }
	
	                                }
	                                setSpanStyleWhenInsertRowsColumns(sheet, sortedRanges[i].row, -1, sortedRanges[i].rowCount);
	                            }
	                        });
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + INSERT_ROWS, insertRows, null, false, false, false, false);
	
	                var insertColumns = {
	                    canUndo: true,
	                    execute: function (spread, options, isUndo) {
	                        return doAction(spread, options, isUndo, function (sheet) {
	                            var sortedRanges = getSortedColumnsSelections(options.selections);
	                            for (var i = 0; i < sortedRanges.length; i++) {
	                                var preRow = sheet.getRange(0, sortedRanges[i].col - 1, sortedRanges[i].rowCount, 1);
	                                var isPreColLocked = [];
	                                for (var s = 0; s < preRow.rowCount; s++) {
	                                    if (!sheet.getCell(s, preRow.col).locked()) {
	                                        isPreColLocked.push(s);
	                                    }
	                                }
	                                sheet.addColumns(sortedRanges[i].col, sortedRanges[i].colCount);
	                                for (var f = 0; f < isPreColLocked.length; f++) {
	                                    for (var k = sortedRanges[i].col; k < sortedRanges[i].col + sortedRanges[i].colCount; k++) {
	                                        sheet.getCell(isPreColLocked[f], k).locked(false);
	                                    }
	                                }
	                                setSpanStyleWhenInsertRowsColumns(sheet, -1, sortedRanges[i].col, sortedRanges[i].colCount);
	                            }
	
	                        });
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + INSERT_COLUMNS, insertColumns, null, false, false, false, false);
	
	                var deleteRows = {
	                    canUndo: true,
	                    execute: function (spread, options, isUndo) {
	                        return doAction(spread, options, isUndo, function (sheet) {
	                            var sortedRanges = getSortedRowSelections(options.selections);
	                            for (var i = 0; i < sortedRanges.length; i++) {
	                                sheet.deleteRows(sortedRanges[i].row, sortedRanges[i].rowCount);
	                            }
	                        });
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + DELETE_ROWS, deleteRows, null, false, false, false, false);
	
	                var deleteColumns = {
	                    canUndo: true,
	                    execute: function (spread, options, isUndo) {
	                        return doAction(spread, options, isUndo, function (sheet) {
	                            var sortedRanges = getSortedColumnsSelections(options.selections);
	                            for (var i = 0; i < sortedRanges.length; i++) {
	                                sheet.deleteColumns(sortedRanges[i].col, sortedRanges[i].colCount);
	                            }
	                        });
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + DELETE_COLUMNS, deleteColumns, null, false, false, false, false);
	
	                var insertSheet = {
	                    canUndo: false,
	                    execute: function (spread) {
	                        spread.addSheet(spread.getActiveSheetIndex());
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + INSERT_SHEET, insertSheet, null, false, false, false, false);
	
	                var deleteSheet = {
	                    canUndo: false,
	                    execute: function (spread) {
	                        if (spread.getSheetCount() > 1) {
	                            spread.removeSheet(spread.getActiveSheetIndex());
	                        }
	                        spread.undoManager().clear();
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + DELETE_SHEET, deleteSheet, null, false, false, false, false);
	
	                var filter = {
	                    canUndo: true,
	                    execute: function (spread, options, isUndo) {
	                        return doAction(spread, options, isUndo, function (sheet) {
	                            var selections = options.selections;
	                            var selection = selections[0];
	                            var table = getTable(sheet, selection);
	                            var activeRow = options.activeRow;
	                            var activeCol = options.activeCol;
	                            if (table) {
	                                var tableRange = table.range();
	                                if (tableRange.contains(activeRow, activeCol, 1, 1)) {
	                                    var tableName = table.name();
	                                    commandManager.execute({
	                                        cmd: "contextmenuFilterForTable",
	                                        sheetName: sheet.name(),
	                                        cmdOption: {
	                                            tableName: tableName,
	                                            activeRow: activeRow,
	                                            activeCol: activeCol,
	                                            expectedText: sheet.getText(activeRow, activeCol)
	                                        }
	                                    });
	                                }
	                            } else if (sheet.rowFilter) {
	                                commandManager.execute({
	                                    cmd: "contextmenuFilterForSheet",
	                                    sheetName: sheet.name(),
	                                    cmdOption: {
	                                        activeRow: activeRow,
	                                        activeCol: activeCol,
	                                        selection: selection,
	                                        expectedText: sheet.getText(activeRow, activeCol)
	                                    }
	                                });
	                            }
	                        });
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + FILTER, filter, null, false, false, false, false);
	
	                var sortAscend = {
	                    canUndo: true,
	                    execute: function (spread, options, isUndo) {
	                        return doAction(spread, options, isUndo, function (sheet) {
	                            var col = options.activeCol;
	                            var selections = options.selections;
	                            var table = getTable(sheet, selections[0]);
	                            var range = table ? table.dataRange() : selections[0];
	                            sheet.sortRange(range.row, range.col, range.rowCount, range.colCount, true, [{
	                                index: col,
	                                ascending: true
	                            }]);
	                        });
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + SORT_ASCEND, sortAscend, null, false, false, false, false);
	
	                var sortDescend = {
	                    canUndo: true,
	                    execute: function (spread, options, isUndo) {
	                        return doAction(spread, options, isUndo, function (sheet) {
	                            var col = options.activeCol;
	                            var selections = options.selections;
	                            var table = getTable(sheet, selections[0]);
	                            var range = table ? table.dataRange() : selections[0];
	                            sheet.sortRange(range.row, range.col, range.rowCount, range.colCount, true, [{
	                                index: col,
	                                ascending: false
	                            }]);
	                        });
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + SORT_DESCEND, sortDescend, null, false, false, false, false);
	
	                var slicerSortAscend = {
	                    canUndo: true,
	                    execute: function (spread, options, isUndo) {
	                        return doAction(spread, options, isUndo, function (sheet) {
	                            var selectedSlicers = getSelectedSlicers(sheet);
	                            if (!selectedSlicers || selectedSlicers.length === 0) {
	                                return;
	                            }
	                            for (var item in selectedSlicers) {
	                                if (selectedSlicers.hasOwnProperty(item)) {
	                                    selectedSlicers[item].sortState(1);
	                                }
	                            }
	                        });
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + SLICER_SORT_ASCEND, slicerSortAscend, null, false, false, false, false);
	
	                var slicerSortDescend = {
	                    canUndo: true,
	                    execute: function (spread, options, isUndo) {
	                        return doAction(spread, options, isUndo, function (sheet) {
	                            var selectedSlicers = getSelectedSlicers(sheet);
	                            if (!selectedSlicers || selectedSlicers.length === 0) {
	                                return;
	                            }
	                            for (var item in selectedSlicers) {
	                                if (selectedSlicers.hasOwnProperty(item)) {
	                                    selectedSlicers[item].sortState(2);
	                                }
	                            }
	                        });
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + SLICER_SORT_DESCEND, slicerSortDescend, null, false, false, false, false);
	
	                var hideRows = {
	                    canUndo: true,
	                    execute: function (spread, options, isUndo) {
	                        return doAction(spread, options, isUndo, function (sheet) {
	                            execInSelectionsForRowOrCol(options.selections, ROW, function (row) {
	                                sheet.setRowVisible(row, false);
	                            });
	                        });
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + HIDE_ROWS, hideRows, null, false, false, false, false);
	
	                var hideColumns = {
	                    canUndo: true,
	                    execute: function (spread, options, isUndo) {
	                        return doAction(spread, options, isUndo, function (sheet) {
	                            execInSelectionsForRowOrCol(options.selections, COL, function (column) {
	                                sheet.setColumnVisible(column, false);
	                            });
	                        });
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + HIDE_COLUMNS, hideColumns, null, false, false, false, false);
	
	                var hideSheet = {
	                    canUndo: false,
	                    execute: function (spread) {
	                        if ((spread.getSheetCount() - hideSheetsStack.length) <= 1) {
	                            return;
	                        }
	                        var sheet = spread.getActiveSheet();
	                        if (sheet) {
	                            hideSheetsStack.push(sheet);
	                            sheet.visible(false);
	                            if (spread.getActiveSheet()) {
	                                spread.focus(true);
	                            }
	                        }
	                        spread.undoManager().clear();
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + HIDE_SHEET, hideSheet, null, false, false, false, false);
	
	                var unhideRows = {
	                    canUndo: true,
	                    execute: function (spread, options, isUndo) {
	                        return doAction(spread, options, isUndo, function (sheet) {
	                            var selections = options.selections;
	                            var flag = options.isAnyHiddenRowOrColBeforeFirstVisibleRowOrCol;
	                            if (isNullOrUndefined(flag)) {
	                                flag = options.isAnyHiddenRowOrColBeforeFirstVisibleRowOrCol = isAnyHiddenRowOrColBeforeFirstVisibleRowOrCol(sheet, selections[0]);
	                            }
	                            if (selections.length === 1 && flag) {
	                                sheet.setRowVisible(selections[0].row - 1, true);
	                                sheet._setTopRow(selections[0].row - 1);
	                            } else {
	                                execInSelectionsForRowOrCol(selections, ROW, function (row) {
	                                    sheet.setRowVisible(row, true);
	                                });
	                            }
	                        });
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + UNHIDE_ROWS, unhideRows, null, false, false, false, false);
	
	                var unhideColumns = {
	                    canUndo: true,
	                    execute: function (spread, options, isUndo) {
	                        return doAction(spread, options, isUndo, function (sheet) {
	                            var selections = options.selections;
	                            var flag = options.isAnyHiddenRowOrColBeforeFirstVisibleRowOrCol;
	                            if (isNullOrUndefined(flag)) {
	                                flag = options.isAnyHiddenRowOrColBeforeFirstVisibleRowOrCol = isAnyHiddenRowOrColBeforeFirstVisibleRowOrCol(sheet, selections[0]);
	                            }
	                            if (selections.length === 1 && flag) {
	                                sheet.setColumnVisible(selections[0].col - 1, true);
	                                sheet._setLeftColumn(selections[0].col - 1);
	                            } else {
	                                execInSelectionsForRowOrCol(selections, COL, function (column) {
	                                    sheet.setColumnVisible(column, true);
	                                });
	                            }
	                        });
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + UNHIDE_COLUMNS, unhideColumns, null, false, false, false, false);
	
	                var unhideSheet = {
	                    canUndo: false,
	                    execute: function (spread) {
	                        if (hideSheetsStack.length === 0) {
	                            var sheets = spread.sheets;
	                            for (var i = 0; i < sheets.length; i++) {
	                                if (!sheets[i].visible()) {
	                                    hideSheetsStack.push(sheets[i]);
	                                }
	                            }
	                        }
	                        if (hideSheetsStack.length > 0) {
	                            var tempSheet = hideSheetsStack.pop();
	                            tempSheet.visible(true);
	                            spread.setActiveSheet(tempSheet.name());
	                        }
	                        if (spread.getActiveSheet()) {
	                            spread.focus(true);
	                        }
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + UNHIDE_SHEET, unhideSheet, null, false, false, false, false);
	
	                var removeSlicer = {
	                    canUndo: false,
	                    execute: function (spread, options) {
	                        var sheet = spread.getSheetFromName(options.sheetName);
	                        if (!sheet) {
	                            return;
	                        }
	                        spread.suspendPaint();
	                        var slicerNameArray = [];
	                        var slicers = sheet.slicers.all();
	                        if (!slicers || isEmptyObject(slicers)) {
	                            return;
	                        }
	                        for (var item in slicers) {
	                            if (slicers[item].isSelected()) {
	                                slicerNameArray.push(slicers[item].name());
	                            }
	                        }
	                        if (slicerNameArray.length > 0) {
	                            commandManager.execute({
	                                cmd: "deleteFloatingObjects",
	                                sheetName: sheet.name(),
	                                floatingObjects: slicerNameArray
	                            });
	                        }
	                        spread.resumePaint();
	                    }
	                };
	                commandManager.register(COMMAND_PREFIX + REMOVE_SLICER, removeSlicer, null, false, false, false, false);
	            }
	        };
	
	        $.extend(ContextMenu.prototype, proto);
	        return ContextMenu;
	    })();
	
	    var ssAdapter = {
	        setHost: function () {
	            var self = this;
	            var host = self._host;
	           
	            
	            if (!self.contextMenu) {
	                self.contextMenu = new ContextMenu();
	            }
	            $(host).bind("contextmenu.gcSheet", function (event) {
	                if (self.options.allowContextMenu) {
	                    return self.contextMenu._doContextMenu(event, self);
	                }
	            });
	        },
	        dispose: function () {
	            $(this._host).unbind("contextmenu.gcSheet");
	        },
	        onCultureChanged: function () {
	            var resource = sR();
	            var contextMenu = this.contextMenu;
	            if (contextMenu) {
	                var allMenuData = contextMenu.menuData;
	                $.each(resource, function (name, text) {
	                    contextMenu._iteratorMenuDataByName(allMenuData, MENUITEM_NAME_PREFIX + name, function (menuData, menuItemDataIndex) {
	                        menuData[menuItemDataIndex].text = text;
	                    });
	                });
	            }
	        }
	    };
	    Sheets.Workbook._registerFeature("contextmenu", ssAdapter);
	    ContextMenuNS.ContextMenu = ContextMenu;
	
	   
	    
	    module.exports = ContextMenuNS;
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

	(function () {
	    'use strict';
	    var Sheets = __webpack_require__(2);
	   
	
	    var BaseDialog = Sheets._BaseDialog;
	    var $ = Sheets.GC$, getPreferredZIndex = Sheets._util._getPreferredZIndex;
	
	    var COMMAND_EXECUTED = "gc.command.executed";
	
	    var LEFT = 'left', TOP = 'top';
	
	    var ContextMenuViewDialog = (function (_super) {
	        $.inherit(ContextMenuViewDialog, _super);
	        function ContextMenuViewDialog(host, elem) {
	            var self = this;
	            self._elem = elem;
	            _super.call(self, host, getPreferredZIndex(host));
	        }
	
	        var proto = {
	           
	           
	           
	           
	           
	           
	            _initContextMenuView: function (container, menuData, spread) {
	                var self = this;
	                var host = container[0];
	                if (self._menuView && self._menuView._create) {
	                    self._menuView._create(host, menuData, spread, this._elem);
	                }
	            },
	
	            _open: function (menuView, menuData, x, y, spread) {
	                var self = this;
	                var container = self._prepareContainer(x, y);
	                self._menuView = menuView;
	                self._initContextMenuView(container, menuData, spread);
	            },
	
	            _prepareContainer: function (x, y) {
	                var self = this;
	                var container = self._getContainer();
	                container.css([LEFT, TOP], [x, y]);
	                container.empty();
	                _super.prototype._show.call(self);
	                self._attachEvent();
	                return container;
	            },
	
	            _isHitOutside: function (hitInfo) {
	                var self = this;
	                var container = self._getContainer();
	                if (container.css("display") !== 'block') {
	                    return true;
	                }
	                var containerOffset = container.offset();
	                containerOffset.top += document.body.clientTop || 0;
	                containerOffset.left += document.body.clientLeft || 0;
	                var x = hitInfo.x;
	                var y = hitInfo.y;
	                if (x < containerOffset.left || x > (container.width() + containerOffset.left) || y < containerOffset.top || y > (container.height() + containerOffset.top)) {
	                    return true;
	                }
	                return false;
	            },
	
	            _attachEvent: function () {
	                var self = this;
	                self._elem.bind(COMMAND_EXECUTED, function () {
	                    self.close();
	                });
	            },
	
	            _detachEvent: function () {
	                var self = this;
	                self._elem.unbind(COMMAND_EXECUTED);
	            },
	
	            close: function () {
	                var self = this;
	                if (self._menuView) {
	                    self._menuView._dispose();
	                }
	                self._detachEvent();
	                if (self._hasTargetContainer(self._name)) {
	                    $('#' + self._name).remove();
	                }
	                _super.prototype.close.call(self);
	            }
	        };
	        $.extend(ContextMenuViewDialog.prototype, proto);
	
	        return ContextMenuViewDialog;
	    }(BaseDialog));
	
	    module.exports = ContextMenuViewDialog;
	}());

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	    var Sheets = __webpack_require__(2);
	    var Common = __webpack_require__(3);
	    var $ = Sheets.GC$, createElement = Sheets._util._createElement;
	    var Types = Common._Types, isNullOrUndefined = Types._isNullOrUndefined, isFunction = Types._isFunction,
	        cloneObject = Types._cloneObject;
	    var MOUSE_ENTER = 'mouseenter', MOUSE_LEAVE = 'mouseleave', CLICK = 'click',
	        COMMAND_EXECUTED = "gc.command.executed", CLASS_SELECTOR_PREFIX = '.';
	    var NAMESPACE = "gc-ui-contextmenu", CLASS_SEPARATOR = "-", MENU_CONTAINER_CLASS_SUFFIX = "container",
	        MENUITEM_HOVER_CLASS_SUFFIX = "hover", DISABLE_MENUITEM_HOVER_CLASS_SUFFIX = "disable-hover",
	        TEXT_CLASS_SUFFIX = "text", ICON_CLASS_SUFFIX = "icon",
	        MENUITEM_CLASS_SUFFIX = "menuitem", NONSELECTIVE_MENUITEM_CLASS_SUFFIX = "nonselective-menuitem",
	        MENUITEM_CONTENT_CLASS_SUFFIX = "menuitem-content", SUP_MENUITEM_CLASS_SUFFIX = "sup-container",
	        SEPARATOR_CLASS_SUFFIX = "separator",
	        SUP_MENUITEM_ICON_CLASS_SUFFIX = "sup-indicator", SUB_MENUITEM_CLASS_SUFFIX = "subitems-container",
	        GROUP_CONTAINER_CLASS_SUFFIX = "group-container", TITLE = 'title',
	        GROUP_MENUITEM_CLASS_SUFFIX = "group-header",
	        GROUPITEMS_MENUITEM_CONTAINER_CLASS_SUFFIX = "groupitems-container",
	        GROUPITEMS_MENUITEM_CLASS_SUFFIX = "groupitem",
	        NONEXECUTABLE_CLASS_SUFFIX = "nonexecutable", EXECUTABLE_CLASS_SUFFIX = "executable",
	        DISABLE_CLASS_SUFFIX = "disable";
	    var MENUITEM_HOVER_CLASS = NAMESPACE + CLASS_SEPARATOR + MENUITEM_HOVER_CLASS_SUFFIX,
	        MENUITEM_CLASS = NAMESPACE + CLASS_SEPARATOR + MENUITEM_CLASS_SUFFIX,
	        NONSELECTIVE_MENUITEM_CLASS = NAMESPACE + CLASS_SEPARATOR + NONSELECTIVE_MENUITEM_CLASS_SUFFIX,
	        MENUITEM_CONTENT_CLASS = NAMESPACE + CLASS_SEPARATOR + MENUITEM_CONTENT_CLASS_SUFFIX,
	        EXECUTABLE_MENUITEM_CLASS = NAMESPACE + CLASS_SEPARATOR + EXECUTABLE_CLASS_SUFFIX,
	        SUP_MENUITEM_CLASS = NAMESPACE + CLASS_SEPARATOR + SUP_MENUITEM_CLASS_SUFFIX,
	        SUBMENU_CLASS = NAMESPACE + CLASS_SEPARATOR + SUB_MENUITEM_CLASS_SUFFIX;
	    var JQ_DEFAULT = ' ui-widget', JQ_HOVER = ' ui-state-hover', JQ_INDICATOR = ' ui-icon ui-icon-triangle-1-e';
	    var DIV = "DIV", SPAN = "SPAN", KEY_DOWN = "keydown.ctx.gcSheet", keyword_undefined = void 0;
	
	    function isObject(value) {
	        if (value instanceof Object) {
	            return true;
	        }
	    }
	
	   
	    
	    var MenuView = (function () {
	        function MenuView() {
	        }
	
	        var proto = {
	            _create: function (host, menuData, spread, elem) {
	                var self = this;
	                self._host = $(host);
	                self._menuData = cloneObject(menuData);
	                self._commandManager = spread.commandManager();
	                self._context = spread;
	                self._elem = elem;
	                self._menuItems = [];
	                self._menus = {};
	                self._menuStack = [];
	                self._activeMenuItem = null;
	                self._initMenuView();
	            },
	            _repositionMenuView: function () {
	                var self = this;
	                var leftOffset = parseInt(self._host.css('left'));
	                var topOffset = parseInt(self._host.css('top'));
	                var menuViewWidth = self._host.width();
	                var menuViewHeight = self._host.height();
	                var spreadHost = $(self._context.getHost());
	                var spreadWidth = spreadHost.width();
	                var spreadHeight = spreadHost.height();
	                if (leftOffset + menuViewWidth > spreadWidth) {
	                    leftOffset = (leftOffset - menuViewWidth) > 0 ? (leftOffset - menuViewWidth) : leftOffset;
	                    self._host.css('left', leftOffset);
	                }
	                if (topOffset + menuViewHeight > spreadHeight) {
	                    if (topOffset - menuViewHeight > 0) {
	                        topOffset = topOffset - menuViewHeight;
	                    } else {
	                        var topDelta = topOffset + menuViewHeight - spreadHeight;
	                        topOffset = (topOffset - topDelta) > 0 ? (topOffset - topDelta) : topOffset;
	                    }
	                    self._host.css('top', topOffset);
	                }
	            },
	            _initMenuView: function () {
	                var self = this;
	                var menuData = self._menuData;
	                if (isNullOrUndefined(menuData) || !isObject(menuData) || menuData.length < 1) {
	                    return;
	                }
	                if (!(menuData instanceof Array)) {
	                    menuData = [menuData];
	                }
	                var menuName = "menuView";
	                var menuItems = self._createMenuItems(menuName, menuData);
	                self._menus.menuView = menuItems;
	                var menuView = self._getMenuView(self._menuData);
	                menuView.appendTo(self._host);
	                self._repositionMenuView();
	                self._attachEvent();
	                self._menuStack.push({
	                    name: menuName,
	                    menuView: menuView
	                });
	            },
	            _createMenuItems: function (menuName, menuData) {
	                var self = this;
	                var menuItemsCount = menuData.length, menuItemIndex = 0;
	                var menuItems = [];
	                for (; menuItemIndex < menuItemsCount; menuItemIndex++) {
	                    var itemData = menuData[menuItemIndex];
	                    if (isNullOrUndefined(itemData) || itemData.type === "separator") {
	                        continue;
	                    } else if (itemData.subMenu) {
	                        self._menus[itemData.name] = self._createMenuItems(itemData.name, itemData.subMenu);
	                    } else if (itemData.type === "groupHeader") {
	                        self._collectGroupItemsByGroupHeader(itemData, menuData);
	                        self._menus[itemData.name] = self._createMenuItems(menuName, itemData.groups);
	                    }
	                    menuItems.push(self._createMenuItem(menuName, itemData));
	                }
	                return menuItems;
	            },
	            _createMenuItem: function (menuName, menuItemData) {
	                var self = this;
	                var menuItemHost;
	               
	                if (menuItemData.type === "groupHeader") {
	                    menuItemHost = self._createNonSelectiveMenuItemHost();
	                } else {
	                    menuItemHost = self._createMenuItemHost();
	                }
	                var menuItemView = self.createMenuItemElement(menuItemData);
	                if (isNullOrUndefined(menuItemView)) {
	                    return;
	                }
	                if (menuItemView instanceof HTMLElement) {
	                    menuItemView = $(menuItemView);
	                }
	                menuItemView.appendTo(menuItemHost);
	                var menuItem = {
	                    name: menuItemData.name,
	                    host: menuItemHost,
	                    menuItemData: menuItemData,
	                    menuName: menuName
	                };
	                self._menuItems.push(menuItem);
	                return menuItem;
	            },
	            _createMenuItemHost: function () {
	                var menuItemContainer = $(createElement(DIV));
	                menuItemContainer.addClass(MENUITEM_CLASS);
	                return menuItemContainer;
	            },
	            _createNonSelectiveMenuItemHost: function () {
	                var menuItemContainer = $(createElement(DIV));
	                menuItemContainer.addClass(NONSELECTIVE_MENUITEM_CLASS);
	                return menuItemContainer;
	            },
	           
	            
	            createMenuItemElement: function (menuItemData) {
	                var self = this;
	                var menuItemView;
	                if (menuItemData.type === "groupHeader") {
	                    menuItemView = self._createGroupMenuView(menuItemData);
	                } else if (menuItemData.type === "groupItem") {
	                    menuItemView = self._createGroupMenuItemView(menuItemData);
	                } else if (menuItemData.subMenu) {
	                    menuItemView = self._createSubMenuView(menuItemData);
	                } else {
	                    menuItemView = self._createBaseMenuItemView(menuItemData);
	                }
	                return menuItemView;
	            },
	            _createBaseMenuItemView: function (menuItemData) {
	                var menuItemContent = $(createElement(DIV)).addClass(MENUITEM_CONTENT_CLASS);
	                if (menuItemData.command) {
	                    if (menuItemData.disable) {
	                        menuItemContent.addClass(NAMESPACE + CLASS_SEPARATOR + DISABLE_CLASS_SUFFIX);
	                    } else {
	                        menuItemContent.addClass(EXECUTABLE_MENUITEM_CLASS);
	                    }
	                } else {
	                    menuItemContent.addClass(NAMESPACE + CLASS_SEPARATOR + NONEXECUTABLE_CLASS_SUFFIX);
	                }
	                var icon = $(createElement(SPAN)).addClass(NAMESPACE + CLASS_SEPARATOR + ICON_CLASS_SUFFIX);
	                if (menuItemData.iconClass) {
	                    icon.addClass(menuItemData.iconClass);
	                }
	                icon.appendTo(menuItemContent);
	                if (menuItemData.text) {
	                    var text = $(createElement(SPAN)).addClass(NAMESPACE + CLASS_SEPARATOR + TEXT_CLASS_SUFFIX);
	                    text[0].innerHTML = menuItemData.text;
	                    text.appendTo(menuItemContent);
	                }
	                return menuItemContent;
	            },
	            _createSeparatorLine: function (menuItemData) {
	                return $(createElement(DIV)).addClass(NAMESPACE + CLASS_SEPARATOR + SEPARATOR_CLASS_SUFFIX);
	            },
	            _createGroupMenuView: function (menuItemData) {
	                var self = this;
	                var groupContainer = $(createElement(DIV)).addClass(NAMESPACE + CLASS_SEPARATOR + GROUP_CONTAINER_CLASS_SUFFIX);
	                if (menuItemData.groups.length <= 0) {
	                    return groupContainer;
	                }
	                var groupHeaderView = self._createBaseMenuItemView(menuItemData);
	                groupHeaderView.addClass(NAMESPACE + CLASS_SEPARATOR + GROUP_MENUITEM_CLASS_SUFFIX);
	                groupHeaderView.appendTo(groupContainer);
	                var groupItemsContainer = $(createElement(DIV)).addClass(NAMESPACE + CLASS_SEPARATOR + GROUPITEMS_MENUITEM_CONTAINER_CLASS_SUFFIX);
	                var groupItemsData = menuItemData.groups, groupItemsCount = groupItemsData.length, groupItemIndex = 0;
	                for (; groupItemIndex < groupItemsCount; groupItemIndex++) {
	                    var groupMenuItem = self._findMenuItem("name", groupItemsData[groupItemIndex].name);
	                    var groupItemView = groupMenuItem.host;
	                    groupItemView.addClass(NAMESPACE + CLASS_SEPARATOR + GROUPITEMS_MENUITEM_CLASS_SUFFIX);
	                    groupItemView.appendTo(groupItemsContainer);
	                }
	                groupItemsContainer.appendTo(groupContainer);
	                return groupContainer;
	            },
	            _createGroupMenuItemView: function (menuItemData) {
	                var self = this;
	                var menuItemView = self._createBaseMenuItemView(menuItemData);
	                var textSpan = menuItemView.find(CLASS_SELECTOR_PREFIX + NAMESPACE + CLASS_SEPARATOR + TEXT_CLASS_SUFFIX);
	                textSpan.remove();
	                menuItemView.attr(TITLE, menuItemData.text);
	                return menuItemView;
	            },
	            _createSubMenuView: function (menuItemData) {
	                var self = this;
	                var supMenuItemContainer = $(createElement(DIV)).addClass(SUP_MENUITEM_CLASS);
	                var supMenuItemView = self._createBaseMenuItemView(menuItemData);
	                if (menuItemData.subMenu.length > 0) {
	                    var subMenuIndicatorIcon = $(createElement(SPAN)).addClass(NAMESPACE + CLASS_SEPARATOR + SUP_MENUITEM_ICON_CLASS_SUFFIX + JQ_INDICATOR);
	                    subMenuIndicatorIcon.appendTo(supMenuItemView);
	                    var subMenuView = self._getMenuView(menuItemData.subMenu);
	                    subMenuView.addClass(SUBMENU_CLASS);
	                    subMenuView.appendTo(supMenuItemContainer);
	                }
	                supMenuItemView.appendTo(supMenuItemContainer);
	                return supMenuItemContainer;
	            },
	            _getMenuView: function (menuData) {
	                var self = this;
	                var menuContainer = $(createElement(DIV)).addClass(NAMESPACE + CLASS_SEPARATOR + MENU_CONTAINER_CLASS_SUFFIX + JQ_DEFAULT);
	                var menuDataCount = menuData.length, menuDataIndex = 0;
	                for (; menuDataIndex < menuDataCount; menuDataIndex++) {
	                    if (isNullOrUndefined(menuData[menuDataIndex])) {
	                        continue;
	                    }
	                    var menuItemName = menuData[menuDataIndex].name;
	                    if (!isNullOrUndefined(menuItemName)) {
	                        var menuItem = self._findMenuItem("name", menuItemName);
	                        if (!isNullOrUndefined(menuItem)) {
	                            menuItem.host.appendTo(menuContainer);
	                        }
	                    } else if (menuData[menuDataIndex].type === "separator") {
	                        var menuItemContainer = self._createNonSelectiveMenuItemHost();
	                        var menuItemView = self._createSeparatorLine(menuData[menuDataIndex]);
	                        menuItemView.appendTo(menuItemContainer);
	                        menuItemContainer.appendTo(menuContainer);
	                    }
	                }
	                return menuContainer;
	            },
	            _findMenuItem: function (propertyName, value) {
	                var self = this;
	                var menuItems = self._menuItems;
	                var menuItemsCount = menuItems.length, menuItemIndex = 0;
	                for (; menuItemIndex < menuItemsCount; menuItemIndex++) {
	                    if ((value instanceof $) ? value[0] === menuItems[menuItemIndex][propertyName][0] : menuItems[menuItemIndex][propertyName] === value) {
	                        return menuItems[menuItemIndex];
	                    }
	                }
	            },
	            _collectGroupItemsByGroupHeader: function (groupHeaderData, menuData) {
	                groupHeaderData.groups = [];
	                var menuItemsCount = menuData.length, menuItemIndex = 0;
	                for (; menuItemIndex < menuItemsCount; menuItemIndex++) {
	                    var itemData = menuData[menuItemIndex];
	                    if (!itemData) {
	                        continue;
	                    }
	                    if (itemData.group && itemData.group === groupHeaderData.name) {
	                        itemData.type = "groupItem";
	                        groupHeaderData.groups.push(itemData);
	                        menuData.splice(menuItemIndex--, 1);
	                    }
	                }
	            },
	            _attachEvent: function () {
	                var self = this;
	                $(CLASS_SELECTOR_PREFIX + MENUITEM_CLASS).bind(MOUSE_ENTER, function () {
	                    var target = $(this);
	                    var menuItem = self._findMenuItem("host", target);
	                    self._activeMenuItem = menuItem;
	                   
	                    var menuStack = self._menuStack;
	                    var i = 0, count = menuStack.length;
	                    for (; i < count; i++) {
	                        if (menuItem.menuName !== self._menuStack[count - i - 1].name) {
	                            self._closeSubMenu();
	                        } else {
	                            break;
	                        }
	                    }
	                    self._updateUIState();
	                    self._showSubMenu(false);
	                }).bind(MOUSE_LEAVE, function () {
	                   
	                   
	                   
	                   
	                   
	                    self._activeMenuItem = null;
	                    self._updateUIState();
	                }).bind(CLICK, function (event) {
	                    var target = $(this);
	                    var menuItem = self._findMenuItem("host", target);
	                    self._activeMenuItem = menuItem;
	                    var result = self._selectMenuItem(false, event);
	                    if (result) {
	                        self._close();
	                    }
	                });
	                $(document).bind(KEY_DOWN, function (event) {
	                    var result;
	                   
	                    switch (event.keyCode) {
	                        case 27: 
	                           
	                            result = self._closeSubMenu();
	                            if (!result) {
	                                self._close();
	                            }
	                            break;
	                        case 32: 
	                        case 13: 
	                            result = self._selectMenuItem(true, event);
	                            if (result) {
	                                self._close();
	                            }
	                            break;
	                        case 9: 
	                            if (event.shiftKey) {
	                                self._moveToNextMenuItem(false, true);
	                            } else {
	                                self._moveToNextMenuItem(true, true);
	                            }
	                            break;
	                        case 37: 
	                            var subMenuItemName = self._closeSubMenu();
	                            var subMenuItem = self._findMenuItem("name", subMenuItemName);
	                            if (subMenuItem) {
	                                self._activeMenuItem = subMenuItem;
	                            }
	                            if (self._activeMenuItem && self._activeMenuItem.menuItemData.group) {
	                                self._moveToNextMenuItem(false, true);
	                            }
	                            break;
	                        case 38: 
	                            self._moveToNextMenuItem(false, false);
	                            break;
	                        case 39: 
	                            if (self._activeMenuItem && self._activeMenuItem.menuItemData.group) {
	                                self._moveToNextMenuItem(true, true);
	                            }
	                            self._showSubMenu(true);
	                            break;
	                        case 40: 
	                            self._moveToNextMenuItem(true, false);
	                            break;
	                        default:
	                            break;
	                    }
	                    if (event.preventDefault) {
	                        event.preventDefault();
	                    } else {
	                        event.returnValue = false;
	                    }
	                });
	            },
	            _repositionSubMenu: function (subMenu) {
	                var leftPosToWindow = subMenu.offset().left;
	                var subMenuWidth = subMenu.width();
	                if (leftPosToWindow + subMenuWidth > window.innerWidth) {
	                    subMenu.css("left", -subMenuWidth);
	                }
	                var topPosToWindow = subMenu.offset().top;
	                var subMenuHeight = subMenu.height();
	                var topPosToParent = subMenu.position().top;
	                if (topPosToWindow + subMenuHeight > window.innerHeight) {
	                    subMenu.css("top", topPosToParent - (topPosToWindow + subMenuHeight - window.innerHeight));
	                }
	            },
	            _getCommand: function (menuItemData) {
	                return menuItemData.command;
	            },
	           
	            
	            getCommandOptions: function (menuItemData, host, event) {
	
	            },
	            _selectMenuItem: function (isKeyboardEvent, event) {
	                var self = this;
	                var selectedMenuItem = self._activeMenuItem;
	                if (!selectedMenuItem || selectedMenuItem.menuItemData.disable) {
	                    return;
	                }
	                var menuItemData = selectedMenuItem.menuItemData;
	                if (menuItemData.subMenu) {
	                    if (menuItemData.subMenu.length > 0) {
	                        self._showSubMenu(isKeyboardEvent);
	                    }
	                    return;
	                }
	                self._executeCommand(event);
	                return true;
	            },
	            _executeCommand: function (event) {
	                var self = this;
	                var menuItem = self._activeMenuItem;
	                var command = self._getCommand(menuItem.menuItemData);
	                if (!isNullOrUndefined(command)) {
	                    var commandOptions = self.getCommandOptions(menuItem.menuItemData, menuItem.host[0], event);
	                    var commandManager = self._commandManager;
	                    if (isFunction(command)) {
	                        command(self._context, commandOptions);
	                    } else {
	                        var sheet = self._context.getActiveSheet();
	                        commandManager.execute({
	                            cmd: command,
	                            sheetName: sheet.name(),
	                            selections: sheet.getSelections(),
	                            activeRow: sheet.getActiveRowIndex(),
	                            activeCol: sheet.getActiveColumnIndex(),
	                            commandOptions: commandOptions
	                        });
	                    }
	                }
	            },
	            _detachEvent: function () {
	                $(CLASS_SELECTOR_PREFIX + MENUITEM_CLASS).unbind(MOUSE_ENTER).unbind(MOUSE_LEAVE).unbind(CLICK);
	                $(document).unbind(KEY_DOWN);
	            },
	            _dispose: function () {
	                var self = this;
	                self._host = null;
	                self._menuData = null;
	                self._commandManager = null;
	                self._context = null;
	                self._elem = null;
	                self._menuItems = null;
	                self._menus = null;
	                self._activeMenuItem = null;
	                self._detachEvent();
	            },
	            _closeSubMenu: function () {
	                var self = this;
	                if (self._menuStack.length > 1) {
	                    var subMenu = self._menuStack.pop();
	                    var $subMenu = subMenu.menuView;
	                    var $menuItemsInSubMenu = $subMenu.find(CLASS_SELECTOR_PREFIX + MENUITEM_CLASS);
	                    $menuItemsInSubMenu.removeClass(MENUITEM_HOVER_CLASS + JQ_HOVER);
	                    subMenu.menuView.hide();
	                    return subMenu.name;
	                }
	            },
	            _updateUIState: function () {
	                var self = this;
	                var currentMenuItems = self._getMenuItemsInCurrentMenu(true);
	                if (currentMenuItems) {
	                    var i = 0, count = currentMenuItems.length;
	                    for (; i < count; i++) {
	                        currentMenuItems[i].host.removeClass(MENUITEM_HOVER_CLASS + JQ_HOVER);
	                    }
	                    if (self._activeMenuItem) {
	                        var menuItemData = self._activeMenuItem.menuItemData;
	                        if (menuItemData.disable) {
	                            self._activeMenuItem.host.addClass(NAMESPACE + CLASS_SEPARATOR + DISABLE_MENUITEM_HOVER_CLASS_SUFFIX + JQ_HOVER);
	                        } else {
	                            self._activeMenuItem.host.addClass(MENUITEM_HOVER_CLASS + JQ_HOVER);
	                        }
	                    }
	                }
	            },
	            _close: function () {
	                var self = this;
	                self._elem.trigger(COMMAND_EXECUTED);
	                self._dispose();
	            },
	            _moveToNextMenuItem: function (isDescend, isTabKey) {
	                var self = this;
	                var currentMenuItems = self._getMenuItemsInCurrentMenu(isTabKey);
	                var activeMenuItemIndex;
	                if (self._activeMenuItem) {
	                    activeMenuItemIndex = self._getMenuItemIndexInCurrentMenu(self._activeMenuItem, currentMenuItems);
	                   
	                    if (!activeMenuItemIndex) {
	                        var activeGroupMenuItems = self._menus[self._activeMenuItem.menuItemData.group];
	                        if (activeGroupMenuItems) {
	                            var activeMenuItem = activeGroupMenuItems[0];
	                            activeMenuItemIndex = self._getMenuItemIndexInCurrentMenu(activeMenuItem, currentMenuItems);
	                        }
	                    }
	                }
	                if (isDescend) {
	                    if (activeMenuItemIndex === keyword_undefined || activeMenuItemIndex === currentMenuItems.length - 1) {
	                        activeMenuItemIndex = -1;
	                    }
	                    activeMenuItemIndex = (typeof activeMenuItemIndex === "number") ? activeMenuItemIndex + 1 : 0;
	                } else {
	                    if (activeMenuItemIndex === keyword_undefined || activeMenuItemIndex === 0) {
	                        activeMenuItemIndex = currentMenuItems.length;
	                    }
	                    activeMenuItemIndex = (typeof activeMenuItemIndex === "number") ? activeMenuItemIndex - 1 : 0;
	                }
	                self._activeMenuItem = currentMenuItems[activeMenuItemIndex];
	                self._updateUIState();
	            },
	            _getMenuItemsInCurrentMenu: function (isTabKey) {
	                var self = this;
	                var currentMenuName, currentMenuItems;
	               
	               
	               
	               
	                currentMenuName = self._menuStack[self._menuStack.length - 1].name;
	                currentMenuItems = self._menus[currentMenuName];
	               
	                var i = 0, count = currentMenuItems.length;
	                var menuItemsInCurrentMenu = [];
	                for (; i < count; i++) {
	                    if (currentMenuItems[i].menuItemData.type === "groupHeader") {
	                        var groupMenuItems = self._menus[currentMenuItems[i].menuItemData.name];
	                        if (isTabKey) {
	                            var j = 0, groupMenuItemsCount = groupMenuItems.length;
	                            for (; j < groupMenuItemsCount; j++) {
	                                menuItemsInCurrentMenu.push(groupMenuItems[j]);
	                            }
	                        } else {
	                            menuItemsInCurrentMenu.push(groupMenuItems[0]);
	                        }
	                        continue;
	                    }
	                    menuItemsInCurrentMenu.push(currentMenuItems[i]);
	                }
	                return menuItemsInCurrentMenu;
	            },
	            _getMenuItemIndexInCurrentMenu: function (menuItem, currentMenuItems) {
	                var count = currentMenuItems.length;
	                for (var i = 0; i < count; i++) {
	                    if (menuItem.name === currentMenuItems[i].name) {
	                        return i;
	                    }
	                }
	            },
	            _showSubMenu: function (isKeyboardEvent) {
	                var self = this;
	                var activeMenuItem = self._activeMenuItem;
	                if (activeMenuItem) {
	                    var activeMenuItemData = activeMenuItem.menuItemData;
	                    if (activeMenuItemData.subMenu && activeMenuItemData.subMenu.length > 0) {
	                        if (activeMenuItemData.name !== self._menuStack[self._menuStack.length - 1].name) {
	                            var $subMenu = $(activeMenuItem.host.find(CLASS_SELECTOR_PREFIX + SUBMENU_CLASS)[0]);
	                            $subMenu.show();
	                            self._repositionSubMenu($subMenu);
	                            self._menuStack.push({
	                                name: activeMenuItemData.name,
	                                menuView: $subMenu
	                            });
	                        }
	                        self._activeMenuItem = null;
	                        if (isKeyboardEvent) {
	                            self._moveToNextMenuItem(true, false);
	                        }
	                    }
	                }
	            }
	        };
	        $.extend(MenuView.prototype, proto);
	        return MenuView;
	    })();
	
	    module.exports = MenuView;
	}());

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	(function () {
	    'use strict';
	
	    module.exports = {
	        copy: 'Copy',
	        cut: 'Cut',
	        pasteOptions: 'Paste Options:',
	        pasteAll: 'All',
	        pasteFormula: 'Formulas',
	        pasteValues: 'Values',
	        pasteFormatting: 'Formatting',
	        clearContents: 'Clear Contents',
	        insertRows: "Insert",
	        insertColumns: "Insert",
	        deleteRows: "Delete",
	        deleteColumns: "Delete",
	        insertSheet: 'Insert',
	        deleteSheet: 'Delete',
	        insertComment: 'Insert Comment',
	        filter: 'Filter',
	        sort: 'Sort',
	        slicerSortAscend: "Sort A to Z",
	        slicerSortDescend: "Sort Z to A",
	        sortAscend: 'Sort A to Z',
	        sortDescend: 'Sort Z to A',
	        hideRows: "Hide",
	        hideColumns: "Hide",
	        hideSheet: 'Hide',
	        unhideSheet: 'Unhide',
	        unhideColumns: "Unhide",
	        unhideRows: "Unhide",
	        editComment: 'Edit Comment',
	        deleteComment: 'Delete Comment',
	        toggleComment: 'Show/Hide Comment',
	        removeSlicer: 'Remove',
	        removeFloatingObject: 'Remove'
	    };
	}());

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.contextmenu.12.0.0.js.map