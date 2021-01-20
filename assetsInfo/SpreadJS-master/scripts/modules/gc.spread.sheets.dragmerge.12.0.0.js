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
var GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["DragMerge"] =
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
	
	    __webpack_require__(1);
	    __webpack_require__(3);
	    __webpack_require__(5);
	}());


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Sheets = __webpack_require__(2),
	        $ = Sheets.GC$,
	        Commands = Sheets.Commands,
	        ActionBase = Commands.ActionBase,
	        executeCommand = Commands._executeCommand;
	    var DRAG_MERGE = 'dragMerge';
	
	    var Math_max = Math.max;
	
	    function getActualRange(sheet, selection) {
	        return sheet._getActualRange(selection);
	    }
	
	
	    $.inherit(DragMergeUndoAction, ActionBase);
	   
	    function DragMergeUndoAction(sheet, command) {
	        var self = this;
	        ActionBase.call(self);
	        self._command = command;
	        self._sheet = sheet;
	    }
	
	    $.extend(DragMergeUndoAction.prototype, {
	        canExecute: function () {
	            var sheet = this._sheet;
	            var command = this._command, oldSelection = getActualRange(sheet, command.oldSelection), newSelection = getActualRange(sheet, command.newSelection);
	            if (oldSelection.equals(newSelection)) {
	                var span = sheet.getSpan(oldSelection.row, oldSelection.col);
	                if (span && oldSelection.equals(span)) {
	                    return false;
	                }
	                if (oldSelection.rowCount === 1 && oldSelection.colCount === 1) {
	                    return false;
	                }
	            }
	            return true;
	        },
	        canUndo: function () {
	            var changesKey = Commands._getChangesKey(this._sheet.name());
	            var changes = this._command[changesKey];
	            return Commands._isNotEmptyChanges(changes);
	        },
	        undo: function () {
	            var self = this;
	            if (self.canUndo()) {
	                var sheet = self._sheet;
	                self._beforeAction(sheet, true);
	                var changesKey = Commands._getChangesKey(sheet.name());
	                sheet._modelManager.undo(self._command[changesKey]);
	                self._afterAction(sheet, true);
	            } else {
	                return false;
	            }
	        },
	        execute: function () {
	            var self = this;
	            var sheet = self._sheet;
	            var command = self._command, oldSelection = command.oldSelection, newSelection = command.newSelection;
	            if (self.canExecute()) {
	                sheet._modelManager.startTransaction();
	                self._beforeAction(sheet, true);
	                sheet._modelManager.do('clearSpan', oldSelection.row, oldSelection.col, oldSelection.rowCount, oldSelection.colCount);
	                var newSelectionRow = newSelection.row, newSelectionCol = newSelection.col, newSelectionRowCount = newSelection.rowCount, newSelectionColCount = newSelection.colCount;
	                sheet.addSpan(newSelectionRow, newSelectionCol, newSelectionRowCount, newSelectionColCount);
	                sheet.setSelection(newSelectionRow, newSelectionCol, Math_max(newSelectionRowCount, 1), Math_max(newSelectionColCount, 1));
	                self._afterAction(sheet, true);
	                var changesKey = Commands._getChangesKey(sheet.name());
	                command[changesKey] = sheet._modelManager.endTransaction();
	            } else {
	                return false;
	            }
	        }
	    });
	
	
	    Commands[DRAG_MERGE] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, DragMergeUndoAction, options, isUndo);
	        }
	    };
	
	    Commands._initDragMergeCommands = function (commandManager) {
	        commandManager.register(DRAG_MERGE, Commands[DRAG_MERGE]);
	    };
	
	    module.exports = Commands;
	}());


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sheets;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Sheets = __webpack_require__(2),
	        $ = Sheets.GC$,
	        Commands = __webpack_require__(1);
	    var DEFAULT_BACKCOLOR = 'white';
	    var _ThemeContext = Sheets._ThemeContext;
	    var Common = __webpack_require__(4);
	    var _ColorHelper = Common._ColorHelper;
	
	    function getSheetBackColor(sheet) {
	        var parent = sheet.parent;
	        return parent && parent.options.backColor || DEFAULT_BACKCOLOR;
	    }
	
	    $.extend(Sheets._SheetRender.prototype, {
	        _paintDragMergeIndicator: function (ctx) {
	            var self = this, sheet = self._sheet, eventHandler = sheet._eventHandler;
	            var selection = sheet._getActiveSelectedRange();
	            var selectionRect = sheet._getRangeWholeRect(eventHandler._getRealRange(selection));
	            self._paintIndicator(ctx, selectionRect);
	        },
	        _paintIndicator: function (ctx, selectionRect) {
	            var self = this,
	                sheet = self._sheet;
	            ctx.save();
	           
	            var INDICATOR_RECTANGLE_WIDTH = 4, INDICATOR_RECTANGLE_HEIGHT = 8;
	            var HALF_INDICATOR_RECTANGLE_WIDTH = INDICATOR_RECTANGLE_WIDTH / 2, HALF_INDICATOR_RECTANGLE_HEIGHT = INDICATOR_RECTANGLE_HEIGHT / 2;
	            var x = selectionRect.x, y = selectionRect.y, w = selectionRect.width, h = selectionRect.height;
	            self._dragMergeIndicatorRect = selectionRect;
	            ctx.fillStyle = _ThemeContext._getColor(sheet, sheet.getSelectionBorderColor());
	           
	            ctx.beginPath();
	            ctx.rect(x + w - HALF_INDICATOR_RECTANGLE_WIDTH, y + h / 2 - HALF_INDICATOR_RECTANGLE_HEIGHT, INDICATOR_RECTANGLE_WIDTH, INDICATOR_RECTANGLE_HEIGHT);
	            ctx.fill();
	           
	            ctx.beginPath();
	            ctx.rect(x + w / 2 - HALF_INDICATOR_RECTANGLE_HEIGHT, y + h - HALF_INDICATOR_RECTANGLE_WIDTH, INDICATOR_RECTANGLE_HEIGHT, INDICATOR_RECTANGLE_WIDTH);
	            ctx.fill();
	            ctx.restore();
	        },
	        _paintDragMergeArea: function (sheetRander, selection) {
	            var self = sheetRander,
	                sheet = self._sheet,
	                parent = sheet.parent,
	                eventHandler = sheet._eventHandler,
	                ctx = sheetRander._getCtx();
	            var SELECTION_BORDER_WIDTH = 2, HALF_SELECTION_BORDER_WIDTH = SELECTION_BORDER_WIDTH / 2;
	            if (!parent || !parent.options.allowUserDragMerge || !eventHandler._isDragMerging) {
	                return;
	            }
	            var activeRowIndex = sheet.getActiveRowIndex(), activeColumnIndex = sheet.getActiveColumnIndex();
	            var activeCellStyle = sheet.getActualStyle(activeRowIndex, activeColumnIndex);
	            var backColor = activeCellStyle && activeCellStyle.backColor;
	            var defaultBackColor = getSheetBackColor(sheet);
	            var fillColor = _ColorHelper._fromString(_ThemeContext._getColor(sheet, backColor || defaultBackColor));
	            fillColor.a *= (0.6 / 255);
	            ctx.fillStyle = _ColorHelper._toString(fillColor);
	            ctx.strokeStyle = _ThemeContext._getColor(sheet, sheet.getSelectionBorderColor());
	            ctx.lineWidth = 2;
	            ctx.beginPath();
	            var themeVersion = parent._themeVersion;
	            var selectionRect = sheet._getRangeWholeRect(selection);
	            var selection_x = selectionRect.x, selection_y = selectionRect.y, selection_width = selectionRect.width, selection_height = selectionRect.height;
	            if (themeVersion > 2007 ) {
	                ctx.rect(selection_x, selection_y, selection_width - HALF_SELECTION_BORDER_WIDTH, selection_height - HALF_SELECTION_BORDER_WIDTH);
	                ctx.strokeRect(selection_x - 1, selection_y - 1, selection_width + 1, selection_height + 1);
	            } else {
	                ctx.rect(selection_x + 1, selection_y + 1, selection_width - SELECTION_BORDER_WIDTH - 0.5, selection_height - SELECTION_BORDER_WIDTH - 0.5);
	                ctx.strokeRect(selection_x - 0.5, selection_y - 0.5, selection_width, selection_height);
	            }
	            ctx.fill();
	            ctx.restore();
	            self._paintIndicator(ctx, selectionRect);
	        }
	    });
	
	    var ssAdapter = {
	        init: function () {
	            Commands._initDragMergeCommands(this.commandManager());
	        }
	    };
	    Sheets.Workbook._registerFeature('dragMerge', ssAdapter);
	
	    var adapter = {
	        paintAdornment: function (e) {
	            var ctx = e.ctx;
	            var sheet = this, sheetRender = sheet._render;
	            var selections = sheet._modelManager.getSelections();
	            if (sheet.parent && sheet.parent.options.allowUserDragMerge && selections.length === 1 && !sheet._isTouchMode) {
	                sheetRender._paintDragMergeIndicator(ctx);
	            }
	        }
	    };
	    Sheets.Worksheet._registerFeature('dragMerge', adapter);
	}());


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Common;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Sheets = __webpack_require__(2),
	        $ = Sheets.GC$;
	    var keyword_null = null, keyword_undefined = void 0, Math_abs = Math.abs;
	    var Events = Sheets.Events;
	    var createRange = Sheets._createRange;
	
	    function triggerDragMerging(sheet, data) {
	        sheet._trigger(Events.DragMerging, data);
	    }
	
	    function triggerDragMerged(sheet, data) {
	        sheet._trigger(Events.DragMerged, data);
	    }
	
	    $.extend(Sheets._SheetEventHandler.prototype, {
	        _getRealRange: function (selection) {
	            var self = this,
	                sheet = self._sheet;
	            var result = selection;
	            var span = sheet._modelManager.findSpan(selection.row, selection.col);
	            if (span && span.containsRange(selection)) {
	                result = span;
	            }
	            return result;
	        },
	        _getDragMergeInfo: function(target, x, y) {
	            var sheet = this._sheet,
	                parent = sheet.parent,
	                selection = sheet._getActiveSelectedRange(),
	                sheetRander = sheet._render;
	           
	            var INDICATOR_WIDTH = 4, INDICATOR_HEIGHT = 8;
	            var HALF_INDICATOR_WIDTH = INDICATOR_WIDTH / 2, HALF_INDICATOR_HEIGHT = INDICATOR_HEIGHT / 2;
	            if (parent && parent.options.allowUserDragMerge && selection && !sheet._isTouchMode && sheetRander._dragMergeIndicatorRect) {
	                var selectionRect = sheetRander._dragMergeIndicatorRect;
	                var selectionRectX = selectionRect.x, selectionRectY = selectionRect.y, selectionRectWidth = selectionRect.width, selectionRectHeight = selectionRect.height;
	               
	                if (Math_abs(selectionRectX + selectionRectWidth - x) <= HALF_INDICATOR_WIDTH && Math_abs(selectionRectY + selectionRectHeight / 2 - y) <= HALF_INDICATOR_HEIGHT) {
	                    return { right: true };
	                }
	               
	                if (Math_abs(selectionRectX + selectionRectWidth / 2 - x) <= HALF_INDICATOR_HEIGHT && Math_abs(selectionRectY + selectionRectHeight - y) <= HALF_INDICATOR_WIDTH) {
	                    return { bottom: true };
	                }
	            }
	            return keyword_null;
	        },
	        _startDragMerge: function (target) {
	            var self = this;
	            self._isMouseDown = true;
	            self._isWorking = true;
	            self._isDragMerging = true;
	            self._startHitInfo = {
	                _scrollRowViewportIndex: target.rowViewportIndex,
	                _scrollColViewportIndex: target.colViewportIndex,
	                _hitTestType: target.hitTestType
	            };
	            self._dragMergeInfo = target.dragMergeInfo;
	            var sheet = self._sheet;
	            var modelManager = sheet._modelManager;
	            var oldSelection = sheet._getActiveSelectedRange();
	            self._dragMergeOldRange = self._getRealRange(oldSelection);
	            var oldRealRange = sheet._getActualRange(self._dragMergeOldRange);
	            var oldRangeRow = oldRealRange.row, oldRangeCol = oldRealRange.col, oldRangeRowCount = oldRealRange.rowCount, oldRangeColCount = oldRealRange.colCount;
	            if (modelManager._hasPartSpans(oldRangeRow, oldRangeCol, oldRangeRowCount, oldRangeColCount)) {
	                self._isWorking = false;
	                self._isDragMerging = false;
	                return;
	            }
	            self._dragMergeOldSpans = sheet.getSpans(oldRealRange);
	            sheet.suspendPaint();
	            modelManager.do('clearSpan', oldRangeRow, oldRangeCol, oldRangeRowCount, oldRangeColCount);
	            sheet.resumePaint();
	           
	            self._dragMergeOldSelectRange = oldRealRange;
	            self._refreshDragMerge();
	            self._refreshDragMergeArea(oldRealRange);
	
	            self._startScroll();
	        },
	        _continueDragMerge: function () {
	            var self = this,
	                sheet = self._sheet,
	                parent = sheet.parent;
	            if (parent && !parent.options.allowUserDragMerge) {
	                self._stopDragMerge();
	                return;
	            }
	            var hitRow = self._getHitRowIndex();
	            var hitCol = self._getHitColumnIndex();
	            var oldSelectRange = self._dragMergeOldSelectRange || self._dragMergeOldRange,
	                oldRange = sheet._getActualRange(oldSelectRange);
	            if (hitRow >= 0 && hitCol >= 0) {
	                var dragMergeInfo = self._dragMergeInfo;
	                var newRange = self._getNewSelectionForDragMerge(oldRange, hitRow, hitCol, dragMergeInfo);
	                self._dragMergeNewRange = newRange;
	                var newRangeRowCount = newRange.rowCount, newRangeColCount = newRange.colCount;
	                if (newRangeRowCount > 0 && newRangeColCount > 0) {
	                    self._refreshDragMerge();
	                    self._refreshDragMergeArea(newRange);
	                    self._dragMergeOldSelectRange = newRange;
	                    self._continueScroll();
	                }
	            }
	        },
	        _refreshDragMerge: function () {
	            var sheet = this._sheet;
	            var oldSelectRange = this._dragMergeOldSelectRange;
	            if (oldSelectRange) {
	                var oldDragMergeRect = sheet._getRangeWholeRect(oldSelectRange);
	                oldDragMergeRect.x -= 2;
	                oldDragMergeRect.y -= 2;
	                oldDragMergeRect.width += 4;
	                oldDragMergeRect.height += 4;
	                sheet._render._copyDoubleBufferRect(oldDragMergeRect);
	            }
	        },
	        _getNewSelectionForDragMerge: function (oldRange, hitRow, hitCol, dragMergeInfo) {
	            var self = this,
	                sheet = self._sheet;
	            var oldRangeRow = oldRange.row, oldRangeCol = oldRange.col, oldRangeRowCount = oldRange.rowCount, oldSelectionRange = oldRange.colCount;
	            var newNangeRow, newRangeCol, newRangeRowCount, newRangeColCount;
	            var changedRangeRow, changedRangeCol, changedRangeRowCount, changedRangeColCount;
	            if (dragMergeInfo.right) {
	                newNangeRow = oldRangeRow;
	                newRangeCol = oldRangeCol;
	                newRangeRowCount = oldRangeRowCount;
	                newRangeColCount = hitCol - oldRangeCol + 1;
	                changedRangeRow = newNangeRow;
	                changedRangeCol = oldRangeCol + oldSelectionRange;
	                changedRangeRowCount = newRangeRowCount;
	                changedRangeColCount = hitCol - oldRangeCol - oldSelectionRange + 1;
	            } else if (dragMergeInfo.bottom) {
	                newNangeRow = oldRangeRow;
	                newRangeCol = oldRangeCol;
	                newRangeRowCount = hitRow - oldRangeRow + 1;
	                newRangeColCount = oldSelectionRange;
	                changedRangeRow = oldRangeRow + oldRangeRowCount;
	                changedRangeCol = newRangeCol;
	                changedRangeRowCount = hitRow - oldRangeRow - oldRangeRowCount + 1;
	                changedRangeColCount = newRangeColCount;
	            }
	            if (sheet._modelManager._hasSpans(changedRangeRow, changedRangeCol, changedRangeRowCount, changedRangeColCount)) {
	                newNangeRow = oldRangeRow;
	                newRangeCol = oldRangeCol;
	                newRangeRowCount = oldRangeRowCount;
	                newRangeColCount = oldSelectionRange;
	            }
	            return createRange(newNangeRow, newRangeCol, newRangeRowCount, newRangeColCount);
	        },
	        _stopDragMerge: function () {
	            var self = this;
	            var sheet = self._sheet;
	            var parent = sheet.parent;
	            var oldSpans = self._dragMergeOldSpans;
	            var oldRange = self._dragMergeOldRange;
	            var newRange = self._dragMergeNewRange || oldRange;
	            self._isMouseDown = false;
	            self._isWorking = false;
	            self._isDragMerging = false;
	            self._dragMergeNewRange = keyword_undefined;
	            self._dragMergeOldSpans = keyword_undefined;
	            self._dragMergeOldSelectRange = keyword_undefined;
	            self._dragMergeOldRange = keyword_undefined;
	            self._stopScroll();
	
	            if (parent && parent.options.allowUserDragMerge) {
	                var modelManager = sheet._modelManager;
	                sheet.suspendPaint();
	                if (oldSpans.length > 0) {
	                    oldSpans.forEach(function (range) {
	                        modelManager.do('addSpan', range);
	                    });
	                }
	                sheet.resumePaint();
	                var dragMergingData = {
	                    sheetName: sheet.name(),
	                    sheet: sheet,
	                    mergeRange: newRange,
	                    cancel: false
	                };
	                triggerDragMerging(sheet, dragMergingData);
	                if (!dragMergingData.cancel) {
	                    var dragMergeInfo = {
	                        cmd: 'dragMerge',
	                        sheetName: sheet.name(),
	                        oldSelection: oldRange,
	                        newSelection: newRange
	                    };
	                    sheet._commandManager().execute(dragMergeInfo);
	                    triggerDragMerged(sheet, {
	                        sheetName: sheet.name(),
	                        sheet: sheet,
	                        mergeRange: newRange
	                    });
	                }
	            }
	        },
	        _refreshDragMergeArea: function (selectRect) {
	            var self = this,
	                sheet = self._sheet,
	                sheetRander = sheet._render,
	                paintDragMergeArea = sheetRander._paintDragMergeArea;
	            paintDragMergeArea(sheetRander, selectRect);
	        }
	    });
	}());


/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.dragmerge.12.0.0.js.map