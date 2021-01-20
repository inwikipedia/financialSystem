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
var GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["Outlines"] =
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
	    var exports = __webpack_require__(4);
	    exports.SR = {};
	    exports.SR['en'] = __webpack_require__(5);
	    
	    module.exports = exports;
	
	}());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(2);
	    var Sheets = __webpack_require__(3);
	    var Commands = Sheets.Commands;
	    var ActionBase = Commands.ActionBase, $ = Sheets.GC$;
	    var OUTLINE_COLUMN = 'outlineColumn', REMOVE_COLUMN_OUTLINE = 'removeColumnOutline', EXPAND_COLUMN_OUTLINE = 'expandColumnOutline', EXPAND_COLUMN_OUTLINE_FOR_LEVEL = 'expandColumnOutlineForLevel',
	        OUTLINE_ROW = 'outlineRow', REMOVE_ROW_OUTLINE = 'removeRowOutline', EXPAND_ROW_OUTLINE = 'expandRowOutline', EXPAND_ROW_OUTLINE_FOR_LEVEL = 'expandRowOutlineForLevel';
	    var isNullOrUndefined = Common._Types._isNullOrUndefined;
	
	    function getOutline(self) {
	        var sheet = self._sheet;
	        return self._isRowGroup ? sheet.rowOutlines : sheet.columnOutlines;
	    }
	    function doExecuteOrUndoOutlineAction(isExecute) {
	        var self = this, ret = false;
	        if (isExecute ? self.canExecute() : self.canUndo()) {
	            var sheet = self._sheet, index = self._command.index, count = self._command.count, outlines = getOutline(self);
	            if (sheet && outlines && !isNullOrUndefined(index) && !isNullOrUndefined(count)) {
	                var groupExecuteFunc = isExecute ? outlines.group : outlines.ungroupRange;
	                self._beforeAction(sheet, true);
	                groupExecuteFunc.call(outlines, index, count);
	                self._afterAction(sheet, true);
	                ret = true;
	            }
	        }
	        return ret;
	    }
	    var OutlineUndoActionBase = (function (_super) {
	        $.inherit(OutlineUndoActionBase, _super);
	
	        function OutlineUndoActionBase(sheet, command, isRowGroup) {
	            var self = this;
	            _super.call(self);
	            self._sheet = sheet;
	            self._command = command;
	            self._isRowGroup = isRowGroup;
	        }
	
	        var proto = {
	            execute: function () {
	                return doExecuteOrUndoOutlineAction.call(this, true);
	            },
	            undo: function () {
	                return doExecuteOrUndoOutlineAction.call(this, false);
	            }
	        };
	
	        $.extend(OutlineUndoActionBase.prototype, proto);
	
	        return OutlineUndoActionBase;
	    })(ActionBase);
	    var ColumnOutlineUndoAction = (function (_super) {
	        $.inherit(ColumnOutlineUndoAction, _super);
	
	        function ColumnOutlineUndoAction(sheet, command) {
	            _super.call(this, sheet, command, false);
	        }
	
	        return ColumnOutlineUndoAction;
	    })(OutlineUndoActionBase);
	    var RowOutlineUndoAction = (function (_super) {
	        $.inherit(RowOutlineUndoAction, _super);
	
	        function RowOutlineUndoAction(sheet, command) {
	            _super.call(this, sheet, command, true);
	        }
	
	        return RowOutlineUndoAction;
	    })(OutlineUndoActionBase);
	
	    var RemoveOutlineUndoActionBase = (function (_super) {
	        $.inherit(RemoveOutlineUndoActionBase, _super);
	
	        function RemoveOutlineUndoActionBase(sheet, command, isRowGroup) {
	            var self = this;
	            _super.call(self);
	            self._sheet = sheet;
	            self._command = command;
	            self._isRowGroup = isRowGroup;
	        }
	
	        var proto = {
	            execute: function () {
	                var self = this, sheet = self._sheet, ret = false;
	                if (self.canExecute()) {
	                    var index = self._command.index, count = self._command.count, outlines = getOutline(self);
	                    if (sheet && outlines && !isNullOrUndefined(index) && !isNullOrUndefined(count)) {
	                        if (outlines.getLevel(index) >= 0 || outlines.getLevel(index + count - 1) >= 0) {
	                            self._beforeAction(sheet, true);
	                            outlines.ungroupRange(index, count);
	                            self._afterAction(sheet, true);
	                        }
	                        ret = true;
	                    }
	                }
	                return ret;
	            },
	            undo: function () {
	                var self = this, ret = false, sheet = self._sheet;
	                if (self.canUndo()) {
	                    var index = self._command.index, count = self._command.count, outlines = getOutline(self);
	                    if (sheet && outlines && !isNullOrUndefined(index) && !isNullOrUndefined(count)) {
	                        self._beforeAction(sheet, true);
	                        outlines.group(index, count);
	                        self._afterAction(sheet, true);
	                        ret = true;
	                    }
	                }
	                return ret;
	            }
	        };
	
	        $.extend(RemoveOutlineUndoActionBase.prototype, proto);
	
	        return RemoveOutlineUndoActionBase;
	    })(ActionBase);
	    var RemoveColumnOutlineUndoAction = (function (_super) {
	        $.inherit(RemoveColumnOutlineUndoAction, _super);
	
	        function RemoveColumnOutlineUndoAction(sheet, command) {
	            _super.call(this, sheet, command, false);
	        }
	
	        return RemoveColumnOutlineUndoAction;
	    })(RemoveOutlineUndoActionBase);
	    var RemoveRowOutlineUndoAction = (function (_super) {
	        $.inherit(RemoveRowOutlineUndoAction, _super);
	
	        function RemoveRowOutlineUndoAction(sheet, command) {
	            _super.call(this, sheet, command, true);
	        }
	
	        return RemoveRowOutlineUndoAction;
	    })(RemoveOutlineUndoActionBase);
	
	    function getExpandTotalSize(sheet, head, tail, count, getSizeFunc) {
	        var totalValue = 0, index;
	        for (index = head; index <= tail && index < count; index++) {
	            totalValue += getSizeFunc.call(sheet, index) * sheet.zoom();
	        }
	        return totalValue;
	    }
	
	    function getNewPosition(sheet, oldPos, increasedValue, count, getSizeFunc) {
	        var totalSize = 0, index;
	        for (index = oldPos; index < count && totalSize < increasedValue; index++) {
	            oldPos++;
	            totalSize += getSizeFunc.call(sheet, index) * sheet.zoom();
	        }
	        return oldPos >= count ? count - 1 : oldPos;
	    }
	
	    function tryGetNextScrollableIndex(sheet, startPos, getSizeFunc, min, max) {
	        if (startPos < min) {
	            return min;
	        }
	        if (startPos > max) {
	            return max;
	        }
	        for (var i = startPos; i <= max; i++) {
	            if (getSizeFunc.call(sheet, i)) {
	                return i;
	            }
	        }
	        return -1;
	    }
	
	    function showOutline(collapsed, isRowGroup, command) {
	        var self = this, sheet = self._sheet, summaryIndex = command.index,
	            count = isRowGroup ? sheet.getRowCount() : sheet.getColumnCount(),
	            keyword_undefined = void 0;
	        if (summaryIndex < 0 || summaryIndex >= count) {
	            return;
	        }
	        var outlines = getOutline(self), isForwardDirection = outlines.direction() === 1 ,
	            frozenCount = isRowGroup ? sheet.frozenRowCount() : sheet.frozenColumnCount(),
	            getSizeFunc = isRowGroup ? sheet.getRowHeight : sheet.getColumnWidth,
	            getViewportPosFunc = isRowGroup ? sheet.getViewportTopRow : sheet.getViewportLeftColumn,
	            getViewportSizeFunc = isRowGroup ? sheet.getViewportHeight : sheet.getViewportWidth,
	            startPos = getViewportPosFunc.call(sheet, 1), viewportSize, needViewportSize, newScrollPos,
	            rangeGroup = outlines.find(isForwardDirection ? summaryIndex - 1 : summaryIndex + 1, command.level);
	        if (!rangeGroup) {
	            return;
	        }
	        var startIndex = isForwardDirection ? rangeGroup.start : summaryIndex, endIndex = isForwardDirection ? summaryIndex : rangeGroup.end;
	        if (isForwardDirection) {
	            if (collapsed) {
	                startIndex = summaryIndex;
	            } else if (startIndex < frozenCount) {
	                startIndex = frozenCount;
	            }
	            if (startIndex < startPos) {
	                startPos = startIndex;
	            }
	            viewportSize = getViewportSizeFunc.call(sheet, 1);
	            needViewportSize = getExpandTotalSize(sheet, startPos, endIndex, count, getSizeFunc);
	            if (needViewportSize > viewportSize) {
	                startPos = getNewPosition(sheet, startPos, needViewportSize - viewportSize, count, getSizeFunc);
	            }
	            newScrollPos = tryGetNextScrollableIndex(sheet, startPos, getSizeFunc, frozenCount, count - 1);
	        } else {
	            if (collapsed) {
	                endIndex = summaryIndex;
	            } else if (endIndex >= count) {
	                endIndex = count - 1;
	            }
	            if (startIndex < startPos) {
	                newScrollPos = tryGetNextScrollableIndex(sheet, startIndex, getSizeFunc, frozenCount, count - 1);
	            } else {
	                viewportSize = getViewportSizeFunc.call(sheet, 1);
	                needViewportSize = getExpandTotalSize(sheet, startPos, endIndex, count, getSizeFunc);
	                if (needViewportSize > viewportSize) {
	                    newScrollPos = tryGetNextScrollableIndex(sheet, startIndex, getSizeFunc, frozenCount, count - 1);
	                }
	            }
	        }
	        if (isRowGroup && newScrollPos !== keyword_undefined) {
	            sheet._scrollTopRow = newScrollPos;
	            sheet._syncVScrollbarPosition();
	        } else if (!isRowGroup && newScrollPos !== keyword_undefined) {
	            sheet._scrollLeftCol = newScrollPos;
	            sheet._syncHScrollbarPosition();
	        }
	    }
	
	    function doExecuteOrUndoExpandOutlineAction(isExecute) {
	        var self = this, ret = false;
	        if (isExecute ? self.canExecute() : self.canUndo()) {
	            var sheet = self._sheet, command = self._command, outlines = getOutline(self);
	            var collapsed = command.collapsed, index = command.index, level = command.level;
	            if (sheet && outlines && !isNullOrUndefined(collapsed) && !isNullOrUndefined(index) && !isNullOrUndefined(level)) {
	                self._beforeAction(sheet, true);
	                if (!isExecute) {
	                    collapsed = !collapsed;
	                }
	                var info = outlines.direction() === 1  ? outlines.find(index - 1, level) : outlines.find(index + 1, level);
	                if(info) {
	                    outlines.setCollapsed(index, collapsed);
	                }
	                showOutline.call(self, collapsed, self._isRowGroup, command);
	                self._afterAction(sheet, true);
	                ret = true;
	
	            }
	        }
	        return ret;
	    }
	
	    var ExpandOutlineUndoActionBase = (function (_super) {
	        $.inherit(ExpandOutlineUndoActionBase, _super);
	
	        function ExpandOutlineUndoActionBase(sheet, command, isRowGroup) {
	            var self = this;
	            _super.call(self);
	            self._sheet = sheet;
	            self._command = command;
	            self._isRowGroup = isRowGroup;
	        }
	
	        var proto = {
	            execute: function () {
	                return doExecuteOrUndoExpandOutlineAction.call(this, true);
	            },
	            undo: function () {
	                return doExecuteOrUndoExpandOutlineAction.call(this, false);
	            }
	        };
	
	        $.extend(ExpandOutlineUndoActionBase.prototype, proto);
	
	        return ExpandOutlineUndoActionBase;
	    })(ActionBase);
	    var ExpandColumnOutlineUndoAction = (function (_super) {
	        $.inherit(ExpandColumnOutlineUndoAction, _super);
	
	        function ExpandColumnOutlineUndoAction(sheet, command) {
	            _super.call(this, sheet, command, false);
	        }
	
	        return ExpandColumnOutlineUndoAction;
	    })(ExpandOutlineUndoActionBase);
	    var ExpandRowOutlineUndoAction = (function (_super) {
	        $.inherit(ExpandRowOutlineUndoAction, _super);
	
	        function ExpandRowOutlineUndoAction(sheet, command) {
	            _super.call(this, sheet, command, true);
	        }
	
	        return ExpandRowOutlineUndoAction;
	    })(ExpandOutlineUndoActionBase);
	
	    var ExpandOutlineHeaderUndoActionBase = (function (_super) {
	        $.inherit(ExpandOutlineHeaderUndoActionBase, _super);
	
	        function ExpandOutlineHeaderUndoActionBase(sheet, command, isRowGroup) {
	            var self = this;
	            _super.call(self);
	            self._sheet = sheet;
	            self._command = command;
	            self._isRowGroup = isRowGroup;
	        }
	
	        var proto = {
	            execute: function () {
	                var self = this, sheet = self._sheet, ret = false;
	                if (self.canExecute()) {
	                    var index, level = self._command.level, outlines = getOutline(self);
	
	                    if (sheet && outlines && !isNullOrUndefined(level)) {
	                        sheet._modelManager.startTransaction();
	                        self._beforeAction(sheet, true);
	                        for (index = 0; index < level; index++) {
	                            outlines.expand(index, true);
	                        }
	                        outlines.expand(level, false);
	                        self._afterAction(sheet, true);
	                        var changesKey = Commands._getChangesKey(sheet.name());
	                        self._command[changesKey] = sheet._modelManager.endTransaction();
	                        ret = true;
	                    }
	                }
	                return ret;
	            },
	            undo: function () {
	                var self = this, ret = false;
	                if (self.canUndo()) {
	                    var sheet = self._sheet,
	                        changesKey = Commands._getChangesKey(sheet.name()),
	                        changes = self._command[changesKey];
	
	                    if (sheet && changes) {
	                        self._beforeAction(sheet, true);
	                        sheet._modelManager.undo(changes);
	                        ret = true;
	                        self._afterAction(sheet, true);
	                    }
	                }
	                return ret;
	            }
	        };
	        $.extend(ExpandOutlineHeaderUndoActionBase.prototype, proto);
	
	        return ExpandOutlineHeaderUndoActionBase;
	    })(ActionBase);
	    var ExpandColumnOutlineHeaderUndoAction = (function (_super) {
	        $.inherit(ExpandColumnOutlineHeaderUndoAction, _super);
	
	        function ExpandColumnOutlineHeaderUndoAction(sheet, command) {
	            _super.call(this, sheet, command, false);
	        }
	
	        return ExpandColumnOutlineHeaderUndoAction;
	    })(ExpandOutlineHeaderUndoActionBase);
	    var ExpandRowOutlineHeaderUndoAction = (function (_super) {
	        $.inherit(ExpandRowOutlineHeaderUndoAction, _super);
	
	        function ExpandRowOutlineHeaderUndoAction(sheet, command) {
	            _super.call(this, sheet, command, true);
	        }
	
	        return ExpandRowOutlineHeaderUndoAction;
	    })(ExpandOutlineHeaderUndoActionBase);
	
	    var executeCommand = Commands._executeCommand;
	
	   
	    
	    Commands[OUTLINE_COLUMN] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, ColumnOutlineUndoAction, options, isUndo);
	        }
	    };
	
	   
	    
	    Commands[OUTLINE_ROW] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, RowOutlineUndoAction, options, isUndo);
	        }
	    };
	
	   
	    
	    Commands[REMOVE_COLUMN_OUTLINE] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, RemoveColumnOutlineUndoAction, options, isUndo);
	        }
	    };
	
	   
	    
	    Commands[REMOVE_ROW_OUTLINE] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, RemoveRowOutlineUndoAction, options, isUndo);
	        }
	    };
	
	   
	    
	    Commands[EXPAND_COLUMN_OUTLINE] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, ExpandColumnOutlineUndoAction, options, isUndo);
	        }
	    };
	
	   
	    
	    Commands[EXPAND_ROW_OUTLINE] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, ExpandRowOutlineUndoAction, options, isUndo);
	        }
	    };
	
	   
	    
	    Commands[EXPAND_COLUMN_OUTLINE_FOR_LEVEL] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, ExpandColumnOutlineHeaderUndoAction, options, isUndo);
	        }
	    };
	
	   
	    
	    Commands[EXPAND_ROW_OUTLINE_FOR_LEVEL] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, ExpandRowOutlineHeaderUndoAction, options, isUndo);
	        }
	    };
	
	    Commands._initOutlineDefaultCommands = function (commands) {
	        commands.register(OUTLINE_COLUMN, Commands[OUTLINE_COLUMN]);
	        commands.register(OUTLINE_ROW, Commands[OUTLINE_ROW]);
	        commands.register(REMOVE_COLUMN_OUTLINE, Commands[REMOVE_COLUMN_OUTLINE]);
	        commands.register(REMOVE_ROW_OUTLINE, Commands[REMOVE_ROW_OUTLINE]);
	        commands.register(EXPAND_COLUMN_OUTLINE, Commands[EXPAND_COLUMN_OUTLINE]);
	        commands.register(EXPAND_ROW_OUTLINE, Commands[EXPAND_ROW_OUTLINE]);
	        commands.register(EXPAND_COLUMN_OUTLINE_FOR_LEVEL, Commands[EXPAND_COLUMN_OUTLINE_FOR_LEVEL]);
	        commands.register(EXPAND_ROW_OUTLINE_FOR_LEVEL, Commands[EXPAND_ROW_OUTLINE_FOR_LEVEL]);
	    };
	
	    module.exports = Commands;
	
	}());

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Common;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sheets;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(2);
	    var Sheets = __webpack_require__(3);
	    var Commands = __webpack_require__(1);
	
	    var Outlines = {};
	    var keyword_null = null, keyword_undefined = void 0, Math_max = Math.max, Math_min = Math.min, round = Math.round, Math_ceil = Math.ceil;
	    var $ = Sheets.GC$, $_each = $.each, getCssClassThemeStyle = Sheets._ThemeStyleHelper._getCssClassThemeStyle,
	        Worksheet = Sheets.Worksheet,
	        Rect = Sheets.Rect, arrayHelper = Common._ArrayHelper,
	        arrayHelper_nextNonEmptyIndex = arrayHelper._nextNonEmptyIndex, arrayHelper_clear = arrayHelper._clear,
	        arrayHelper_getLength = arrayHelper._getLength, GROUP_BTN_FONTSIZE = 8.25, GROUP_BUTTON_SIZE = 17 , GROUP_PADDING_SIZE = 4 ,
	        isDefined = Sheets._util._isDefined, isNullOrUndefined = Common._Types._isNullOrUndefined, defProperty = Sheets._util._defProperty, getFontHeight = Sheets._util._getFontHeight,
	        RANGE_GROUP = 'rangegroup', CSS_GROUP = 'gc-group', CSS_GROUP_BOX = CSS_GROUP + '-box', CSS_GROUP_EXPAND = CSS_GROUP_BOX + '-expand', CSS_GROUP_COLLAPSED = CSS_GROUP_BOX + '-collapsed', CSS_GROUP_LINE = CSS_GROUP + "-line", CSS_GROUP_DOT = CSS_GROUP + "-dot",
	        ROW_GROUP_HEADER = 'rgh', COL_GROUP_HEADER = 'cgh', ROW_GROUP = 'rg', COL_GROUP = 'cg';
	    var sR = function () {
	        return Common._getResource(Outlines.SR)();
	    };
	
	   
	    var sheetEx = {
	        _getOutlineLayout: function () {
	            var self = this, _cachedGroupLayout = self._cachedGroupLayout;
	            if (_cachedGroupLayout) {
	                return _cachedGroupLayout;
	            }
	            var options = self.options, sheetAreaOffset = options.sheetAreaOffset;
	           
	            var groupLayout = { x: sheetAreaOffset.left, y: sheetAreaOffset.top, width: 0, height: 0, rowMaxLevel: -1, colMaxLevel: -1 },
	                rowOutlines = self.rowOutlines, columnOutlines = self.columnOutlines,
	
	               
	                zoomGroupButtonSize = GROUP_BUTTON_SIZE * self.zoom(),
	                maxLevel;
	            if (self.showRowOutline() && rowOutlines && !rowOutlines._isEmpty()) {
	                maxLevel = rowOutlines.getMaxLevel();
	                if (maxLevel >= 0) {
	                    groupLayout.width = zoomGroupButtonSize * (maxLevel + 2) + GROUP_PADDING_SIZE;
	                    groupLayout.rowMaxLevel = maxLevel;
	                }
	            }
	            if (self.showColumnOutline() && columnOutlines && !columnOutlines._isEmpty()) {
	                maxLevel = columnOutlines.getMaxLevel();
	                if (maxLevel >= 0) {
	                    groupLayout.height = zoomGroupButtonSize * (maxLevel + 2) + GROUP_PADDING_SIZE;
	                    groupLayout.colMaxLevel = maxLevel;
	                }
	            }
	            self._cachedGroupLayout = groupLayout;
	            return groupLayout;
	        },
	       
	        
	        showRowOutline: defProperty('showRowOutline', true, function () {
	            this._invalidate();
	        }),
	       
	        
	        showColumnOutline: defProperty('showColumnOutline', true, function () {
	            this._invalidate();
	        })
	    };
	    $.extend(Sheets.Worksheet.prototype, sheetEx);
	   
	
	    function triggerOutlineStateChanging(sheet, data) {
	        sheet._trigger(Sheets.Events.RangeGroupStateChanging, data);
	    }
	
	    function triggerOutlineStateChanged(sheet, data) {
	        sheet._trigger(Sheets.Events.RangeGroupStateChanged, data);
	    }
	
	    function applyGroupHeaderEvent(sheet, hitInfo) {
	        if (!sheet.isEditing || !sheet.isEditing()) {
	            var level = hitInfo.info.index, isRowGroup = hitInfo.what === ROW_GROUP_HEADER;
	            var cmdName = isRowGroup ? 'expandRowOutlineForLevel' : 'expandColumnOutlineForLevel';
	            var args = getOutlineEventOption(sheet, isRowGroup, -1, level, true);
	            triggerOutlineStateChanging(sheet, args);
	            if (args && args.cancel === false) {
	                sheet._commandManager().execute({ cmd: cmdName, sheetName: sheet.name(), level: level });
	                triggerOutlineStateChanged(sheet, getOutlineEventOption(sheet, isRowGroup, -1, level, false));
	            }
	        }
	    }
	
	    function applyGroupButtonEvent(sheet, hitInfo) {
	        if (!sheet.isEditing || !sheet.isEditing()) {
	            var isRowGroup = hitInfo.what === ROW_GROUP;
	            if (getRowOrColumnOutlines(isRowGroup, sheet)) {
	                var info = hitInfo.info, index = info.index, infoIndex = index, level = info.level, args,
	                    cmdName = isRowGroup ? 'expandRowOutline' : 'expandColumnOutline';
	                info.lineDirection === 1  ? index-- : index++;
	                args = getOutlineEventOption(sheet, isRowGroup, index, level, true);
	                triggerOutlineStateChanging(sheet, args);
	                if (args && args.cancel === false) {
	                    sheet._commandManager().execute({
	                        cmd: cmdName,
	                        sheetName: sheet.name(),
	                        index: infoIndex,
	                        level: level,
	                        collapsed: info.isExpanded
	                    });
	                    triggerOutlineStateChanged(sheet, getOutlineEventOption(sheet, isRowGroup, index, level, false));
	                }
	            }
	        }
	    }
	
	    function getOutlineEventOption(sheet, isRowGroup, index, level, isStateChanging) {
	        var args = {sheet: sheet, sheetName: sheet.name(), isRowGroup: isRowGroup, index: index, level: level};
	        if (isStateChanging) {
	            args.cancel = false;
	        }
	        return args;
	    }
	
	    function outlineHitTest(x, y) {
	        var sheet = this, groupLayout = sheet._getOutlineLayout(), groupLayoutWidth = groupLayout.width, groupLayoutHeight = groupLayout.height;
	        if (!groupLayoutWidth && !groupLayoutHeight) {
	            return keyword_null;
	        }
	        var layout = sheet._getSheetLayout(),
	            gRowRect = new Rect(groupLayout.x, groupLayout.y, groupLayoutWidth, layout.height),
	            gColRect = new Rect(groupLayout.x, groupLayout.y, layout.width, groupLayoutHeight);
	        if (!gRowRect.contains(x, y) && !gColRect.contains(x, y)) {
	            return keyword_null;
	        }
	       
	        var t = getRowOrColOutlineHitTest(sheet, x, y, groupLayout.rowMaxLevel, true);
	       
	        if (!t) {
	            t = getRowOrColOutlineHitTest(sheet, x, y, groupLayout.colMaxLevel, false);
	        }
	        return t || { what: 'empty', info: keyword_null };
	    }
	
	    function getRowOrColOutlineHitTest(sheet, x, y, maxLevel, isRowGroup) {
	        var groupHeader = new OutlineHeaderPresenter(sheet, isRowGroup, maxLevel),
	            k = groupHeader._getGroupHeaderButton(x, y, isRowGroup);
	        if (k) {
	            return { what: isRowGroup ? ROW_GROUP_HEADER : COL_GROUP_HEADER, info: k };
	        }
	        var groups = createOutlinePresenter(sheet, isRowGroup, maxLevel), i;
	        for (i = 0; i <= 2; i++) {
	            k = groups[i]._getGroupButton(x, y, isRowGroup);
	            if (k) {
	                return { what: isRowGroup ? ROW_GROUP : COL_GROUP, info: k };
	            }
	        }
	        return keyword_null;
	    }
	
	    function createOutlinePresenter(sheet, isRowGroup, maxLevel) {
	        var groups = [
	            new OutlinePresenter(sheet, isRowGroup, 0, maxLevel),
	            new OutlinePresenter(sheet, isRowGroup, 1, maxLevel),
	            new OutlinePresenter(sheet, isRowGroup, 2, maxLevel)
	        ], i;
	        for (i = 0; i <= 2; i++) {
	            groups[i]._createGroupInfo();
	        }
	        return groups;
	    }
	
	    function calcMinWidthOrHeight(groupLayout, isRowGroup) {
	        var size = isRowGroup ? groupLayout.width : groupLayout.height;
	        return Math_max(0, (size - this.PADDING * 2) / (this._maxLevel + 2));
	    }
	
	    function getRowOrColumnOutlines(isRowGroup, sheet) {
	        return isRowGroup ? sheet.rowOutlines : sheet.columnOutlines;
	    }
	
	   
	   
	    
	    Outlines.OutlineDirection = {
	        
	        backward: 0,
	        
	        forward: 1
	    };
	   
	
	   
	   
	    
	    Outlines.OutlineState = {
	        
	        expanded: 0,
	        
	        collapsed: 1
	    };
	   
	
	   
	    var OutlineInfo = (function () {
	       
	        
	        function OutlineInfo(model, start, end, level) {
	            var self = this;
	           
	            
	            self.children = [];
	           
	            
	            self.parent = keyword_null;
	           
	            
	            self.model = model;
	           
	            
	            self.start = start;
	           
	            
	            self.end = end;
	           
	            
	            self.level = level;
	        }
	
	        OutlineInfo.prototype = {
	           
	            
	            state: function (value) {
	                var self = this, model = self.model;
	                if (arguments.length) {
	                    model && model.expandGroup(self, value === 0 );
	                } else {
	                    return model ? model.getState(self) : 0 ;
	                }
	            },
	           
	            
	            contains: function (index) {
	                return this.start <= index && index <= this.end;
	            },
	           
	            
	            addChild: function (child) {
	                if (child) {
	                    this.children.push(child);
	                    child.parent = this;
	                }
	            }
	        };
	        return OutlineInfo;
	    })();
	    Outlines.OutlineInfo = OutlineInfo;
	   
	
	    function addGroupItems(self, index, count) {
	        if (count > 0) {
	            var items = self.items, i, groupItemInfo;
	            var newArr = [];
	            for (i = 0; i < count; i++) {
	                newArr.push(keyword_null);
	            }
	            self.items = items = items.slice(0, index).concat(newArr, items.slice(index));
	            if (self._suspendAddingGroup <= 0 && index > 0) {
	               
	               
	                groupItemInfo = items[index - 1];
	                if (groupItemInfo) {
	                    for (i = 0; i < count; i++) {
	                        items[index + i] = new OutlineItemInfo(groupItemInfo);
	                    }
	                }
	            }
	            emptyRootCache(self);
	        }
	    }
	
	    function removeGroupItems(self, index, count) {
	        if (count > 0) {
	            self.items.splice(index, count);
	            emptyRootCache(self);
	        }
	    }
	
	    function createRangeGroupCore(self, start, level) {
	        var currentGroupInfo = keyword_null, items = self.items, item, index, ret, length;
	        for (index = start, length = arrayHelper_getLength(items); index < length; index++) {
	           
	            item = items[index];
	            if (!item || item.level < level) {
	                continue;
	            }
	            if (!currentGroupInfo) {
	                currentGroupInfo = new OutlineInfo(self, index, index, level);
	            }
	            if (item.level > level) {
	                ret = createRangeGroupCore(self, index, level + 1);
	                index = ret.index;
	                currentGroupInfo.addChild(ret.g);
	            }
	            if (index > currentGroupInfo.end) {
	                currentGroupInfo.end = index;
	            }
	            if (self.isGroupEnd(index, level)) {
	                break;
	            }
	        }
	
	        if (currentGroupInfo) {
	            var end = currentGroupInfo.end + 1;
	            for (var j = currentGroupInfo.start; j < end; j++) {
	                if (!items[j].groupInfo) {
	                    items[j].groupInfo = currentGroupInfo;
	                }
	            }
	        }
	
	        return { g: currentGroupInfo, index: index };
	    }
	
	    function isIndexValid(self, index) {
	        return (index >= -1 && index < arrayHelper_getLength(self.items));
	    }
	
	    function findImp(outline, index, level) {
	        var items = outline && outline.items;
	        if (items) {
	            var groupInfo = items[index] && items[index].groupInfo;
	            while (groupInfo) {
	                var currentLevel = groupInfo.level;
	                if (currentLevel === level) {
	                    return groupInfo;
	                } else if (currentLevel > level) {
	                    groupInfo = groupInfo.parent;
	                } else {
	                    break;
	                }
	            }
	        }
	        return keyword_null;
	    }
	
	    function isDefaultValue(propertyName, value) {
	        switch (propertyName) {
	            case 'head':
	            case 'tail':
	                return value === keyword_null;
	            case 'direction':
	                return value === 1 ;
	            case 'itemsData':
	                return arrayHelper_getLength(value) === 0;
	            default:
	                return false;
	        }
	    }
	
	    function emptyRootCache(self) {
	        self._rootCache = keyword_null;
	        self.refresh();
	    }
	
	    function updateRootCache(self, force) {
	        if (force || !self._suspendUpdate) {
	            self._rootCache = self.createRangeGroup();
	            applyGroupHandler(self);
	        }
	    }
	
	    function reCreateRootCacheIfNeeded(self) {
	        if (self._suspendUpdate && !self._rootCache) {
	            self._rootCache = self.createRangeGroup();
	        }
	    }
	
	    function applyGroupHandler(self, data) {
	        if (self.groupChangeHandler) {
	            self.groupChangeHandler(data);
	        }
	    }
	
	    function isLegalParam(self, index, count) {
	        throwInvalidIndexError(self, index);
	        if (!isIndexValid(self, index + count - 1)) {
	            throw new Error(sR().Exp_InvalidCount);
	        }
	    }
	
	    function throwInvalidIndexError(self, index) {
	        if (!isIndexValid(self, index)) {
	            throw new Error(sR().Exp_InvalidIndex);
	        }
	    }
	
	   
	    var Outline = (function () {
	       
	        
	        function Outline(count, sheet, isRowGroup) {
	            var self = this;
	            self.head = keyword_null;
	            self.tail = keyword_null;
	            self._rootCache = keyword_null;
	            self.items = new Array(count); 
	            self._suspendAddingGroup = 0;
	           
	           
	           
	           
	            self._empty = true;
	            self._sheet = sheet;
	            self._isRowGroup = isRowGroup;
	        }
	
	        Outline.prototype = {
	           
	            
	            direction: defProperty('direction', 1),
	           
	            
	            group: function (index, count) {
	                var self = this, n, currentN;
	                isLegalParam(self, index, count);
	                self._sheet._modelManager._backupOutlines(self._isRowGroup);
	                for (n = 0; n < count; n++) {
	                    currentN = index + n;
	                    if (self.items[currentN]) {
	                        self.items[currentN].level++;
	                    } else {
	                        self.items[currentN] = new OutlineItemInfo();
	                    }
	                }
	               
	                if (self._suspendUpdate && self._rootCache) {
	                    self._rootCache = keyword_null;
	                }
	                updateRootCache(self);
	                self._empty = false;
	            },
	            
	            _suspend: function () {
	                this._suspendUpdate = true;
	                this._rootCache = keyword_null;
	            },
	            
	            _resume: function () {
	                this._suspendUpdate = false;
	                this.refresh();
	            },
	           
	            
	            ungroupRange: function (index, count) {
	                var self = this, n, item;
	                isLegalParam(self, index, count);
	                self._sheet._modelManager._backupOutlines(self._isRowGroup);
	                for (n = 0; n < count; n++) {
	                    item = self.items[index + n];
	                    if (item && item.level > -1) {
	                        item.level--;
	                    }
	                }
	                updateRootCache(self);
	            },
	           
	            
	            ungroup: function () {
	                var self = this, count = arrayHelper_getLength(self.items);
	                self._sheet._modelManager._backupOutlines(self._isRowGroup);
	                self.items = new Array(count); 
	                updateRootCache(self);
	                self._empty = true;
	            },
	           
	            
	            expand: function (level, expand) {
	                if (level < -1) {
	                    throw new Error(sR().Exp_InvalidLevel);
	                }
	                var self = this, items = self.items, groupInfo;
	                self._sheet._modelManager._backupOutlines(self._isRowGroup);
	                reCreateRootCacheIfNeeded(self);
	                for (var index = 0, count = items.length; index < count; index++) {
	                    if (items[index]) {
	                        groupInfo = self.find(index, level);
	                        groupInfo && self.expandGroup(groupInfo, expand);
	                    }
	                }
	            },
	           
	            
	            expandGroup: function (groupInfo, expand) {
	                if (!groupInfo) {
	                    throw new Error(sR().Exp_GroupInfoIsNull);
	                }
	                var self = this, direction = self.direction(), summaryItemIndex = -1;
	                self._sheet._modelManager._backupOutlines(self._isRowGroup);
	                if (direction === 0 ) {
	                    summaryItemIndex = groupInfo.start - 1;
	                } else if (direction === 1 ) {
	                    summaryItemIndex = groupInfo.end + 1;
	                }
	                self.setCollapsed(summaryItemIndex, !expand);
	            },
	            _isVisible: function (index) {
	                return isIndexValid(this, index) ? !this.isCollapsed(index) : true;
	            },
	           
	            
	            isCollapsed: function (index) {
	                var currentItem = this.items[index];
	                return !!(currentItem && currentItem.viewCollapsed && currentItem.level > -1);
	            },
	           
	            
	            find: function (index, level) {
	                var self = this, ret;
	
	                reCreateRootCacheIfNeeded(self);
	                if (level === -1) {
	                    ret = self._rootCache;
	                } else {
	                    throwInvalidIndexError(self, index);
	                    ret = findImp(self, index, level);
	                }
	
	                return ret;
	            },
	           
	            
	            getLevel: function (index) {
	                var item = this.items[index];
	                return item ? item.level : -1;
	            },
	           
	            
	            getCollapsed: function (index) {
	                var item = this.items[index];
	                return item ? !!item.collapsed : false;
	            },
	
	            _setViewCollapsed: function (items, start, end, collapsed) {
	                for (var itemIndex = start; itemIndex <= end; itemIndex++) {
	                    var item = items[itemIndex];
	                    if (!item) {
	                        item = items[itemIndex] = new OutlineItemInfo();
	                        item.level = -1;
	                    }
	                    item.viewCollapsed = collapsed;
	                }
	            },
	           
	            
	            setCollapsed: function (index, collapsed) {
	                var self = this, changed = false, items = self.items, item;
	                self._sheet._modelManager._backupOutlines(self._isRowGroup);
	                reCreateRootCacheIfNeeded(self);
	                if (index < 0) {
	                    item = self.head;
	                    if (!item) {
	                        item = self.head = new OutlineItemInfo();
	                    }
	                } else if (index < arrayHelper_getLength(items)) {
	                    item = items[index];
	                    if (!item) {
	                        item = items[index] = new OutlineItemInfo();
	                        item.level = -1;
	                    }
	                } else {
	                    item = self.tail;
	                    if (!item) {
	                        item = self.tail = new OutlineItemInfo();
	                    }
	                }
	                var isForward = self.direction() === 1 ;
	                if (item.collapsed !== collapsed) {
	                    item.collapsed = collapsed;
	                    changed = true;
	                    self._updateViewCollapsed(index, collapsed);
	                }
	                var data;
	                if (changed) {
	                    index += isForward ? -1 : 1;
	                    var indexes = [];
	                    var group = self.find(index, self.getLevel(index));
	                    if (group) {
	                        for (var i = group.start; i <= group.end; i++) {
	                            indexes.push(i);
	                        }
	                        data = { indexes: indexes };
	                    }
	                }
	                applyGroupHandler(self, data);
	            },
	            _syncParentCollapsedStatus: function (index, status) {
	                var items = this.items;
	                if(!items[index]) {
	                    var item = items[index] = new OutlineItemInfo();
	                    item.level = -1;
	                    item.collapsed = status;
	                } else if(items[index].collapsed !== status) {
	                    items[index].collapsed = status;
	                }
	            },
	            _updateViewCollapsed: function (index, collapsed) {
	                var self = this, items = self.items, isForward = self.direction() === 1 , offsetIndex = isForward ? -1 : 1;
	                var summaryItemIndex = index + offsetIndex, group = findImp(self, summaryItemIndex, self.getLevel(summaryItemIndex));
	                if (group) {
	                    var changedIndex;
	                    if (collapsed) {
	                        changedIndex = isForward ? group.end + 1 : group.start - 1;
	                        self._syncParentCollapsedStatus(changedIndex, true);
	                       
	                        self._setViewCollapsed(items, group.start, group.end, true);
	                    } else {
	                        var parentCollapsed = false, parent = group.parent;
	                        while (parent) {
	                            var headIndex = isForward ? parent.end + 1 : parent.start - 1;
	                            if (items[headIndex] && items[headIndex].collapsed && items[headIndex].level > -1) {
	                                parentCollapsed = true;
	                                break;
	                            }
	                            parent = parent.parent;
	                        }
	                        if (!parentCollapsed) {
	                            changedIndex = isForward ? group.end + 1 : group.start - 1;
	                            self._syncParentCollapsedStatus(changedIndex, false);
	                            self._setViewCollapsed(items, group.start, group.end, false);
	                            var statck = [group], statckIndex = 0;
	                            while (statckIndex >= 0) {
	                                var current = statck[statckIndex--];
	                                headIndex = isForward ? current.end + 1 : current.start - 1;
	
	                                if (items[headIndex] && items[headIndex].collapsed && items[headIndex].level !== -1) {
	                                    self._setViewCollapsed(items, current.start, current.end, true);
	                                } else {
	                                    var children = current.children;
	                                    for (var childIndex = 0; children && childIndex < children.length; childIndex++) {
	                                        statck[++statckIndex] = children[childIndex];
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }
	            },
	           
	            
	            getMaxLevel: function () {
	                var maxLevel = -1, items = this.items, itemLevel;
	                $_each(items, function (p, item) {
	                    if (item) {
	                        itemLevel = item.level;
	                        if (itemLevel > maxLevel) {
	                            maxLevel = itemLevel;
	                        }
	                    }
	                });
	                return maxLevel;
	            },
	            _moveOrCopy: function (from, to, count, isMove) {
	                if (count <= 0 || from === to) {
	                    return;
	                }
	
	                var self = this;
	                self._sheet._modelManager._backupOutlines(self._isRowGroup);
	
	                if (from < 0) {
	                    from = 0;
	                }
	                if (to < 0) {
	                    to = 0;
	                }
	                var copiedItems = [], items = self.items,
	                    index = arrayHelper_nextNonEmptyIndex(items, from - 1), item;
	                while (index >= 0 && index < from + count) {
	                    item = new OutlineItemInfo(items[index]);
	                    copiedItems.push({ index: index - from, value: item });
	                    index = arrayHelper_nextNonEmptyIndex(items, index);
	                }
	                isMove && arrayHelper_clear(items, from, count);
	                arrayHelper_clear(items, to, count);
	                $_each(copiedItems, function (p, outlineItem) {
	                    items[to + outlineItem.index] = outlineItem.value;
	                });
	                emptyRootCache(self);
	            },
	            _exMoveOrCopy: function (srcOutLine, from, to, count, isMove) {
	                var self = this;
	                self._sheet._modelManager._backupOutlines(self._isRowGroup);
	
	                if (from < 0) {
	                    from = 0;
	                }
	                if (to < 0) {
	                    to = 0;
	                }
	                var clonedItems = [];
	                if (srcOutLine) {
	                    var index = arrayHelper_nextNonEmptyIndex(srcOutLine.items, from - 1);
	                    while (index >= 0 && index < (from + count)) {
	                        clonedItems[index - from] = new OutlineItemInfo(srcOutLine.items[index]);
	                        index = arrayHelper_nextNonEmptyIndex(srcOutLine.items, index);
	                    }
	                }
	                arrayHelper_clear(self.items, to, count);
	                if (clonedItems.length > 0) {
	                    for (var key in clonedItems) {
	                        if (clonedItems.hasOwnProperty(key)) {
	                            self.items[to + key] = clonedItems[key];
	                        }
	                    }
	                }
	
	                if (isMove) {
	                    arrayHelper_clear(srcOutLine.items, from, count);
	                }
	            },
	           
	            
	            refresh: function () {
	                if (!this._empty) {
	                    updateRootCache(this);
	                }
	            },
	            _setCount: function (count) {
	                var self = this, items = self.items, itemsLength = arrayHelper_getLength(items),
	                    countResult = count - itemsLength;
	                if (countResult < 0) {
	                    items.splice(count, -countResult);
	                } else {
	                    var lastItem = items[itemsLength - 1], i;
	                    if (lastItem) {
	                        for (i = 0; i < countResult; i++) {
	                            items.push(new OutlineItemInfo(lastItem));
	                        }
	                    } else {
	                        self.items = items.concat(new Array(countResult)); 
	                    }
	                }
	                emptyRootCache(self);
	            },
	           
	            
	            getState: function (groupInfo) {
	                var self = this, items = self.items, item, direction = self.direction(), summaryItemIndex = -1;
	                if (direction === 0 ) {
	                    summaryItemIndex = groupInfo.start - 1;
	                } else if (direction === 1 ) {
	                    summaryItemIndex = groupInfo.end + 1;
	                }
	                if (summaryItemIndex < 0) {
	                    item = self.head;
	                } else if (summaryItemIndex < arrayHelper_getLength(items)) {
	                    item = items[summaryItemIndex];
	                } else {
	                    item = self.tail;
	                }
	                return item && item.collapsed ? 1  : 0 ;
	            },
	            _setLevel: function (index, level) {
	                var self = this, items = self.items;
	                if (index < 0) {
	                    if (!self.head) {
	                        self.head = new OutlineItemInfo();
	                    }
	                    self.head.level = level;
	                } else if (index < arrayHelper_getLength(items)) {
	                    if (!items[index]) {
	                        items[index] = new OutlineItemInfo();
	                    }
	                    items[index].level = level;
	                } else {
	                    if (!self.tail) {
	                        self.tail = new OutlineItemInfo();
	                    }
	                    self.tail.level = level;
	                }
	                emptyRootCache(self);
	            },
	           
	            
	            suspendAdding: function () {
	               
	                this._suspendAddingGroup++;
	            },
	           
	            
	            resumeAdding: function () {
	                this._suspendAddingGroup--;
	            },
	            createRangeGroup: function () {
	                var self = this, items = self.items, itemsLength = arrayHelper_getLength(self.items),
	                    root = new OutlineInfo(self, 0, itemsLength - 1, -1), i;
	                i = 0;
	                while (i < itemsLength) {
	                    if (items[i]) {
	                        items[i].groupInfo = keyword_null;
	                    }
	                    i++;
	                }
	                i = 0;
	                while (i < itemsLength) {
	                    if (items[i]) {
	                        var t = createRangeGroupCore(self, i, 0), groupInfo = t.g;
	                        i = t.index + 1;
	                        if (groupInfo && groupInfo.level > -1) {
	                            root.addChild(groupInfo);
	                        }
	                    } else {
	                        i++;
	                    }
	                }
	                return root;
	            },
	           
	            
	            isGroupEnd: function (index, processLevel) {
	                var self = this, items = self.items, indexNext = index + 1, itemNext;
	               
	                if (!isIndexValid(self, indexNext)) {
	                    return true;
	                }
	                itemNext = items[indexNext];
	               
	                if (!itemNext) {
	                    return true;
	                }
	                var itemNextLevel = itemNext.level, itemLevel = items[index].level, ret = false;
	                if (itemNextLevel < itemLevel) {
	                    var offset1 = itemLevel - itemNextLevel, offset2 = itemLevel - processLevel;
	                    if (offset2 >= 0 && offset2 < offset1) {
	                        ret = true;
	                    }
	                }
	                return ret;
	            },
	            hitTest: function (sheet, x, y) {
	                return outlineHitTest.call(sheet, x, y);
	            },
	            _paint: function (sheet, ctx, clipRect, isRowGroup) {
	                var groupLayout = sheet._getOutlineLayout(), layout = sheet._getSheetLayout(), cachePool = sheet._cachePool,
	                    groupLayoutWidth = groupLayout.width, groupLayoutHeight = groupLayout.height;
	                if (!groupLayoutWidth && !groupLayoutHeight) {
	                    return;
	                }
	                var width = isRowGroup ? groupLayoutWidth : layout.width,
	                    height = isRowGroup ? layout.height : groupLayoutHeight,
	                    maxLevel = isRowGroup ? groupLayout.rowMaxLevel : groupLayout.colMaxLevel,
	                    getSizeGroupsFunc = isRowGroup ? cachePool._getRowGroups : cachePool._getColGroups;
	
	                ctx.save();
	                ctx.beginPath();
	                if (!clipRect || clipRect.intersect(groupLayout.x, groupLayout.y, width, height)) {
	                    var groupHeader = new OutlineHeaderPresenter(sheet, isRowGroup, maxLevel), groups, i;
	                    groupHeader._paintGroupHeader(ctx);
	                    groups = getSizeGroupsFunc.call(sheet._cachePool, function () {
	                        return createOutlinePresenter(sheet, isRowGroup, maxLevel);
	                    });
	                    for (i = 0; i <= 2; i++) {
	                        groups[i]._paintGroups(ctx);
	                    }
	                }
	                ctx.beginPath();
	                ctx.restore();
	            },
	            _doClick: function (sheet, hitInfo) {
	                if (hitInfo) {
	                    var what = hitInfo.what;
	                    if (what === ROW_GROUP_HEADER || what === COL_GROUP_HEADER) {
	                        applyGroupHeaderEvent(sheet, hitInfo);
	                    } else if (what === ROW_GROUP || what === COL_GROUP) {
	                        applyGroupButtonEvent(sheet, hitInfo);
	                    }
	                }
	            },
	            _isEmpty: function () {
	                return this._empty;
	            },
	            _getOutlineLineWidth: function () {
	                var lineWidth = parseInt(getCssClassThemeStyle(CSS_GROUP_LINE).borderTopWidth);
	                return isNaN(lineWidth) ? 2 : lineWidth;
	            },
	            fromJSON: function (settings, deserializationOptions) {
	                var ignoreStyle = deserializationOptions && deserializationOptions.ignoreStyle;
	                if (!settings || ignoreStyle) {
	                    return;
	                }
	                var self = this, items = self.items, itemsData = settings.itemsData,
	                    direction = settings.direction, head = settings.head, tail = settings.tail,
	                    itemIndex, itemInfo, k, collapsedItems = [];
	                $_each(itemsData, function (p, item) {
	                    itemIndex = item.index;
	                    itemInfo = item.info;
	                    if (itemIndex >= 0 && itemInfo) {
	                        for (k = 0; k < item.count; k++) {
	                            if (itemIndex + k >= arrayHelper_getLength(items)) {
	                                break;
	                            }
	                            if (item.info.collapsed) {
	                                collapsedItems.push(item);
	                            }
	                            items[itemIndex + k] = new OutlineItemInfo(itemInfo);
	                        }
	                        self._empty = false;
	                    }
	                });
	                if (!isNullOrUndefined(direction)) {
	                    self.direction(direction);
	                }
	                if (head) {
	                    self.head = head;
	                }
	                if (tail) {
	                    self.tail = tail;
	                }
	                updateRootCache(self, true);
	                for (var i = 0; i < collapsedItems.length; i++) {
	                    self._updateViewCollapsed(collapsedItems[i].index, true);
	                }
	            },
	            toJSON: function (serializationOption) {
	                var ignoreStyle = serializationOption && serializationOption.ignoreStyle;
	                if (ignoreStyle) {
	                    return;
	                }
	                var self = this, itemsData = [], items = self.items, i, k = -1;
	                for (i = 0; i < arrayHelper_getLength(items); i++) {
	                    var itemsDataK = itemsData[k], itemsI = items[i];
	                    if (itemsI) {
	                        if (k >= 0 && i === itemsDataK.count + itemsDataK.index && itemsI.level === itemsDataK.info.level && itemsI.collapsed === itemsDataK.info.collapsed) {
	                            itemsData[k].count++;
	                        } else {
	                            itemsData[++k] = {
	                                index: i,
	                                count: 1,
	                                info: { level: itemsI.level, collapsed: itemsI.collapsed }
	                            };
	                        }
	                    }
	                }
	                var dictData = {
	                    itemsData: itemsData,
	                    direction: self.direction(),
	                    head: self.head,
	                    tail: self.tail
	                }, sdata = {};
	                $_each(dictData, function (p, value) {
	                    if (!isDefaultValue(p, value)) {
	                        sdata[p] = value;
	                    }
	                });
	                if ($.isEmptyObject(sdata)) {
	                    return keyword_undefined;
	                }
	                return sdata;
	            }
	        };
	        return Outline;
	    })();
	    Outlines.Outline = Outline;
	   
	
	   
	    function OutlineItemInfo(info) {
	       
	        return {
	            level: info ? info.level : 0,
	            collapsed: info ? info.collapsed : false,
	            viewCollapsed: info ? info.viewCollapsed : false
	        };
	    }
	
	   
	
	   
	    function OutlinePresenter(sheet, isRowGroup, viewportIndex, maxLevel) {
	        var self = this;
	        self.PADDING = 2;
	        self.LINE_SIZE = 2;
	        self.START_LINE_SIZE = 6;
	        self._groupLineInfos = [];
	        self._groupDotInfos = [];
	        self._groupButtonInfos = [];
	        self._sheet = sheet;
	        self._isRowGroup = isRowGroup;
	        self._viewportIndex = viewportIndex;
	        self._maxLevel = isDefined(maxLevel) ? maxLevel : getRowOrColumnOutlines(isRowGroup, sheet).getMaxLevel();
	    }
	
	    OutlinePresenter.prototype = {
	        _createGroupInfo: function () {
	            var self = this;
	            if (self._maxLevel !== -1) {
	                var groupInfos = self._getGroupInfosByLevel(0, self._isRowGroup);
	                $_each(groupInfos, function (p, item) {
	                    self._measureGroups(item);
	                });
	            }
	        },
	        _measureGroups: function (groupInfo) {
	            var self = this, sheet = self._sheet, isRowGroup = self._isRowGroup,
	                groupDirection = getRowOrColumnOutlines(isRowGroup, sheet).direction(),
	                forwardDirection = groupDirection === 1 , backwardDirection = groupDirection === 0 ,
	                viewportStart = self._getViewportIndex(true, isRowGroup), viewportEnd = self._getViewportIndex(false, isRowGroup),
	                groupStartIndex = groupInfo.start, groupEndIndex = groupInfo.end, level = groupInfo.level, buttonIndex;
	            if (forwardDirection) {
	                buttonIndex = groupEndIndex + 1;
	            } else if (backwardDirection) {
	                buttonIndex = groupStartIndex - 1;
	            }
	            if (groupInfo.state() === 0 ) {
	                var needPaintingLine = true, parent = groupInfo.parent;
	                if (parent && ((backwardDirection && groupStartIndex === parent.start) || (forwardDirection && groupEndIndex === parent.end))) {
	                    needPaintingLine = false;
	                }
	                needPaintingLine && self._addButtonInfo(true, level, buttonIndex, viewportStart, viewportEnd, groupDirection);
	                if (groupStartIndex <= viewportEnd && groupEndIndex >= viewportStart) {
	                    var start = Math_max(viewportStart, groupStartIndex), end = Math_min(viewportEnd, groupEndIndex), groupLineInfo, i, j;
	                    if (needPaintingLine) {
	                        groupLineInfo = { start: start, end: end, level: level, startLine: keyword_null };
	                        if (forwardDirection && start === groupStartIndex || backwardDirection && end === groupEndIndex) {
	                            groupLineInfo.startLine = true;
	                        }
	                        self._groupLineInfos.push(groupLineInfo);
	                    }
	                    var excludeDots = [], groupChildren = groupInfo.children;
	                    for (i = start; i <= end; i++) {
	                        excludeDots.push(false);
	                    }
	                    $_each(groupChildren, function (p, item) {
	                        var childStartIndex = item.start, childEndIndex = item.end, removeItem;
	                        if (item.state() === 1 ) {
	                            for (j = childStartIndex; j <= childEndIndex; j++) {
	                                excludeDots[j - start] = true;
	                            }
	                        }
	                        if (forwardDirection) {
	                            removeItem = childEndIndex + 1;
	                        } else {
	                            removeItem = childEndIndex - 1;
	                        }
	                        excludeDots[removeItem - start] = true;
	                        self._measureGroups(item);
	                    });
	                    var needPaintingDot = true;
	                    for (i = 0; i < arrayHelper_getLength(groupChildren); i++) {
	                        var child = groupChildren[i], childStart = child.start, childEnd = child.end;
	                        var sameStart = childStart === groupStartIndex, sameEnd = childEnd === groupEndIndex;
	                        if (sameStart && sameEnd) {
	                            needPaintingDot = false;
	                            break;
	                        } else if ((forwardDirection && sameEnd) || (backwardDirection && sameStart)) {
	                            for (j = childStart; j <= childEnd; j++) {
	                                excludeDots[j - start] = true;
	                            }
	                        }
	                    }
	                    if (needPaintingDot) {
	                        for (var index = start; index <= end; index++) {
	                            if (!excludeDots[index - start]) {
	                                var groupDotInfo = { index: index, level: level + 1 };
	                                self._groupDotInfos.push(groupDotInfo);
	                            }
	                        }
	                    }
	                }
	            } else if (groupInfo.state() === 1 ) {
	                self._addButtonInfo(false, level, buttonIndex, viewportStart, viewportEnd, groupDirection);
	            }
	        },
	        _addButtonInfo: function (isExpanded, level, buttonIndex, viewportStart, viewportEnd, groupDirection) {
	            var button = { isExpanded: isExpanded, level: level };
	            if (isExpanded) {
	                button.paintLine = true;
	            }
	            if (buttonIndex >= viewportStart && buttonIndex <= viewportEnd) {
	                button.index = buttonIndex;
	                button.lineDirection = groupDirection;
	                this._groupButtonInfos.push(button);
	            }
	        },
	        _getIndexRowOrColumnLayout: function (index) {
	            var self = this, sheet = self._sheet, viewportIndex = self._viewportIndex;
	            return self._isRowGroup ? sheet._getRowLayout(viewportIndex).findRow(index) : sheet._getColumnLayout(viewportIndex).findCol(index);
	        },
	        _paintGroups: function (ctx) {
	            var self = this;
	            if (self._maxLevel === -1) {
	                return;
	            }
	            var groupLayout = self._sheet._getOutlineLayout(), isRowGroup = self._isRowGroup,
	                itemSize = calcMinWidthOrHeight.call(self, groupLayout, isRowGroup);
	            if (!itemSize) {
	                return;
	            }
	            var LINE_SIZE = parseInt(getCssClassThemeStyle(CSS_GROUP_LINE).borderTopWidth);
	            LINE_SIZE = isNaN(LINE_SIZE) ? 2 : LINE_SIZE;
	            var START_LINE_SIZE = round(itemSize / 3), PADDING = self.PADDING, offset = (itemSize - LINE_SIZE) / 2 + PADDING;
	            ctx.save();
	            ctx.fillStyle = getCssClassThemeStyle(CSS_GROUP).color;
	           
	            self._paintOutlineDots(ctx, self._groupDotInfos, isRowGroup, groupLayout, itemSize, offset, LINE_SIZE);
	            if(isRowGroup) {
	                self._paintRowOutlineLine(ctx, self._groupLineInfos, isRowGroup, groupLayout, itemSize, offset, LINE_SIZE, START_LINE_SIZE);
	            } else {
	                self._paintColumnOutlineLine(ctx, self._groupLineInfos, isRowGroup, groupLayout, itemSize, offset, LINE_SIZE, START_LINE_SIZE);
	            }
	           
	            self._paintOutlineButton(ctx, self._groupButtonInfos, isRowGroup, groupLayout, itemSize, offset, LINE_SIZE, PADDING);
	           
	            ctx.beginPath();
	            ctx.restore();
	        },
	        _paintOutlineDots: function (ctx, groupDotInfos, isRowGroup, groupLayout, itemSize, offset, LINE_SIZE) {
	            var columnX, rowY, self = this, dotSize = 2, sheet = self._sheet, options = sheet.options, sheetAreaOffset = options.sheetAreaOffset, offsetLeft = sheetAreaOffset.left, offsetTop = sheetAreaOffset.top;
	            ctx.save();
	            ctx.fillStyle = getCssClassThemeStyle(CSS_GROUP_DOT).color;
	            var groupLineInfos = self._groupLineInfos;
	            $_each(groupDotInfos, function (p, item) {
	                var index = item.index, level = item.level;
	               
	
	                if(self._canIgnoreRenderDot(groupLineInfos, index, level)) {
	                    return;
	                }
	                var layout = self._getIndexRowOrColumnLayout(index);
	
	                if (layout) {
	                    var layoutSize = isRowGroup ? layout.y : layout.x, layoutIncrement = (isRowGroup ? layout.height : layout.width) - LINE_SIZE;
	                    if (layoutIncrement >= 0) {
	                        columnX = layoutSize + Math_max(0, layoutIncrement / 2);
	                        rowY = item.level * itemSize + offset;
	                        if (isRowGroup) {
	                            var swap = columnX;
	                            columnX = rowY + 0.5;
	                            rowY = swap;
	                            rowY -= offsetTop;
	                        } else {
	                            rowY = rowY + 0.5;
	                            columnX -= offsetLeft;
	                        }
	                        ctx.strokeStyle = "transparent";
	                        ctx.lineWidth = 0;
	                        var startX = groupLayout.x + columnX, startY = groupLayout.y + rowY;
	                        if(startX % 1 !== 0) {
	                            startX += 0.5;
	                        }
	                        if(startY % 1 !== 0) {
	                            startY += 0.5;
	                        }
	                        ctx.strokeRect(startX, startY, dotSize, dotSize);
	                        ctx.fillRect(startX, startY, dotSize, dotSize);
	                    }
	                }
	            });
	            ctx.restore();
	        },
	        _canIgnoreRenderDot: function (groupLineInfos, index, level) {
	            var flag = false, lineInfoCounts = arrayHelper_getLength(groupLineInfos);
	            for(var i = 0; i < lineInfoCounts; i++) {
	                if(groupLineInfos[i].level === level && groupLineInfos[i].start <= index && groupLineInfos[i].end >= index) {
	                    flag = true;
	                    break;
	                }
	            }
	            return flag;
	        },
	        _paintRowOutlineLine: function (ctx, groupLineInfos, isRowGroup, groupLayout, itemSize, offset, LINE_SIZE, START_LINE_SIZE) {
	            ctx.save();
	            ctx.strokeStyle = getCssClassThemeStyle(CSS_GROUP_LINE).borderTopColor;
	            ctx.fillStyle = getCssClassThemeStyle(CSS_GROUP_LINE).borderTopColor;
	            ctx.lineWidth = LINE_SIZE;
	            var self = this, sheet = self._sheet, groupDirection = getRowOrColumnOutlines(isRowGroup, sheet).direction(), i;
	            var options = sheet.options, sheetAreaOffset = options.sheetAreaOffset, offsetTop = sheetAreaOffset.top;
	            for (i = 0; i < arrayHelper_getLength(groupLineInfos); i++) {
	                var groupLineInfo = groupLineInfos[i], start = groupLineInfo.start, end = groupLineInfo.end, startLayoutPos, endLayoutPos;
	                do {
	                    startLayoutPos = self._getIndexRowOrColumnLayout(start);
	                    start++;
	                } while (!startLayoutPos && start <= end);
	                do {
	                    endLayoutPos = self._getIndexRowOrColumnLayout(end);
	                    end--;
	                } while (!endLayoutPos && end >= start);
	                if (!startLayoutPos && !endLayoutPos) {
	                    continue;
	                } else if (!startLayoutPos) {
	                    startLayoutPos = endLayoutPos;
	                } else if (!endLayoutPos) {
	                    endLayoutPos = startLayoutPos;
	                }
	                var rowY = startLayoutPos.y, columnX = groupLineInfo.level * itemSize + offset,
	                    lineWidth = LINE_SIZE,
	                    lineHeight = Math_max(0, endLayoutPos.y + endLayoutPos.height - startLayoutPos.y);
	                if (groupDirection === 1 ) {
	                    rowY += 1;
	                }
	                rowY = Math_ceil(rowY) + 0.5;
	                rowY -= offsetTop;
	
	                ctx.beginPath();
	                var startX = groupLayout.x + columnX + lineWidth / 2;
	                startX = Math_ceil(startX);
	                ctx.moveTo(startX, groupLayout.y + rowY);
	                ctx.lineTo(startX, groupLayout.y + rowY + lineHeight);
	                ctx.stroke();
	
	               
	                if (groupLineInfo.startLine && itemSize / 2 - LINE_SIZE * 2 > 0) {
	                    if (groupDirection === 0 ) {
	                        rowY = rowY + lineHeight - LINE_SIZE - offsetTop;
	                    }
	                    if (rowY >= startLayoutPos.y - offsetTop && rowY < endLayoutPos.y + endLayoutPos.height - offsetTop) {
	                        ctx.fillRect(Math_ceil(groupLayout.x + columnX), groupLayout.y + rowY, START_LINE_SIZE, LINE_SIZE);
	                    }
	                }
	            }
	            ctx.restore();
	
	        },
	        _paintColumnOutlineLine: function (ctx, groupLineInfos, isRowGroup, groupLayout, itemSize, offset, LINE_SIZE, START_LINE_SIZE) {
	            ctx.save();
	            ctx.strokeStyle = getCssClassThemeStyle(CSS_GROUP_LINE).borderTopColor;
	            ctx.fillStyle = getCssClassThemeStyle(CSS_GROUP_LINE).borderTopColor;
	            ctx.lineWidth = LINE_SIZE;
	            var self = this, sheet = self._sheet, groupDirection = getRowOrColumnOutlines(isRowGroup, sheet).direction(), i;
	            var options = sheet.options, sheetAreaOffset = options.sheetAreaOffset, offsetLeft = sheetAreaOffset.left;
	            for (i = 0; i < arrayHelper_getLength(groupLineInfos); i++) {
	                var groupLineInfo = groupLineInfos[i], start = groupLineInfo.start, end = groupLineInfo.end, startLayoutPos, endLayoutPos;
	               
	                do {
	                    startLayoutPos = self._getIndexRowOrColumnLayout(start);
	                    start++;
	                } while (!startLayoutPos && start <= end);
	                do {
	                    endLayoutPos = self._getIndexRowOrColumnLayout(end);
	                    end--;
	                } while (!endLayoutPos && end >= start);
	                if (!startLayoutPos && !endLayoutPos) {
	                    continue;
	                } else if (!startLayoutPos) {
	                    startLayoutPos = endLayoutPos;
	                } else if (!endLayoutPos) {
	                    endLayoutPos = startLayoutPos;
	                }
	                var columnX = startLayoutPos.x, rowY = groupLineInfo.level * itemSize + offset,
	                    lineWidth = Math_max(0, endLayoutPos.x + endLayoutPos.width - startLayoutPos.x);
	                if (groupDirection === 1 ) {
	                    columnX += 1;
	                }
	                columnX -= offsetLeft;
	                var startY = groupLayout.y + rowY + LINE_SIZE / 2;
	                startY = Math_ceil(startY);
	                ctx.beginPath();
	                ctx.moveTo(groupLayout.x + columnX, startY);
	                ctx.lineTo(groupLayout.x + columnX + lineWidth, startY);
	                ctx.stroke();
	
	                if (groupLineInfo.startLine && itemSize / 2 - LINE_SIZE * 2 > 0) {
	                    if (groupDirection === 0 ) {
	                        columnX = columnX + lineWidth - LINE_SIZE - offsetLeft;
	                    }
	                    if (columnX >= startLayoutPos.x - offsetLeft && columnX < endLayoutPos.x + endLayoutPos.width - offsetLeft) {
	                        ctx.fillRect(groupLayout.x + columnX, Math_ceil(groupLayout.y + rowY), LINE_SIZE, START_LINE_SIZE);
	                    }
	                }
	            }
	            ctx.restore();
	
	        },
	        _getRealImagePathByClass : function (imageClass) {
	            var imagePath = getCssClassThemeStyle(imageClass).backgroundImage;
	           
	            if(imagePath === "none") {
	                imagePath = '';
	            }
	            if(imagePath) {
	               
	                imagePath = imagePath.split(",")[0];
	                imagePath = imagePath.replace(/url\(['"]?([^'"\)]+)['"]?\)/, "$1");
	                imagePath = imagePath.trim();
	            }
	            return imagePath;
	        },
	
	        _paintOutlineButton: function (ctx, groupButtonInfos, isRowGroup, groupLayout, itemSize, offset, LINE_SIZE, PADDING) {
	            var self = this, i, sheet = self._sheet, options = sheet.options, offsetLeft = options.sheetAreaOffset.left, offsetTop = options.sheetAreaOffset.top;
	            var btnStrokeColor = getCssClassThemeStyle(CSS_GROUP_BOX).borderTopColor,
	                btnFillColor = getCssClassThemeStyle(CSS_GROUP_BOX).backgroundColor,
	                btnFontColor = getCssClassThemeStyle(CSS_GROUP_BOX).color,
	                lineStrokeColor = getCssClassThemeStyle(CSS_GROUP_LINE).borderTopColor,
	                btnBorderWidth = 1;
	            var imageLoader = sheet._getImageLoader();
	            var imgSrcExpand = self._getRealImagePathByClass(CSS_GROUP_EXPAND), imgSrcCollapsed = self._getRealImagePathByClass(CSS_GROUP_COLLAPSED);
	            if(imgSrcExpand && !imageLoader._getState(imgSrcExpand)) {
	                imageLoader._addImage(imgSrcExpand);
	            }
	            if(imgSrcCollapsed && !imageLoader._getState(imgSrcCollapsed)) {
	                imageLoader._addImage(imgSrcCollapsed);
	            }
	
	            var hasCollapsedImg = imgSrcCollapsed && imageLoader._getImage(imgSrcCollapsed),
	                hasExpandImg = imgSrcExpand && imageLoader._getImage(imgSrcExpand);
	
	            var expandStyle = getCssClassThemeStyle(CSS_GROUP_EXPAND), collapsedStyle = getCssClassThemeStyle(CSS_GROUP_COLLAPSED);
	
	           
	            var expandColor = hasExpandImg ? expandStyle.backgroundColor : "",
	                collapsedColor = hasCollapsedImg ? collapsedStyle.backgroundColor : "",
	                btnExpandBorderColor = hasExpandImg ? expandStyle.borderTopColor : "",
	                btnCollapsedBorderColor = hasCollapsedImg ? collapsedStyle.borderTopColor : "";
	
	
	            var buttonImg, buttonBackColor, buttonBorderColor, btnOffset;
	
	            for (i = 0; i < arrayHelper_getLength(groupButtonInfos); i++) {
	                ctx.save();
	                var groupButtonInfo = groupButtonInfos[i], layout = self._getIndexRowOrColumnLayout(groupButtonInfo.index);
	                if (!layout) {
	                    ctx.restore();
	                    continue;
	                }
	                var layoutSize = isRowGroup ? layout.height : layout.width;
	                if (layoutSize <= 0) {
	                    ctx.restore();
	                    continue;
	                }
	                var sizeOffset = Math_max(0, (layoutSize - itemSize) / 2), row, col,
	                    columnX = (isRowGroup ? layout.y - offsetTop : layout.x - offsetLeft) + sizeOffset, rowY = groupButtonInfo.level * itemSize + PADDING,
	                    btnWidth = Math_min(itemSize, layoutSize), btnHeight = itemSize, columnXIncrement, rowYIncrement;
	                var sizeIncrement = layoutSize - btnWidth;
	                if (isRowGroup) {
	                    var t1 = columnX;
	                    columnX = rowY;
	                    rowY = t1;
	                    var t2 = btnWidth;
	                    btnWidth = btnHeight;
	                    btnHeight = t2;
	                    columnXIncrement = 0.5;
	                    rowYIncrement = 0;
	                } else {
	                    columnXIncrement = 0;
	                    rowYIncrement = 0.5;
	                }
	                buttonBorderColor = groupButtonInfo.isExpanded ? btnExpandBorderColor : btnCollapsedBorderColor;
	                ctx.strokeStyle = buttonBorderColor ? buttonBorderColor : btnStrokeColor;
	                ctx.lineWidth = btnBorderWidth;
	                buttonBackColor = groupButtonInfo.isExpanded ? expandColor : collapsedColor;
	                if(buttonBackColor) {
	                    ctx.fillStyle = buttonBackColor;
	                }else {
	                    ctx.fillStyle = btnFillColor;
	                }
	                ctx.fillRect(groupLayout.x + columnX, groupLayout.y + rowY, btnWidth, btnHeight);
	                row = groupLayout.x + columnX + columnXIncrement;
	                col = groupLayout.y + rowY + rowYIncrement;
	                ctx.strokeRect(row, col, btnWidth, btnHeight);
	                ctx.fillStyle = btnFontColor;
	                buttonImg = groupButtonInfo.isExpanded ? imgSrcExpand : imgSrcCollapsed;
	                self._paintButtonIcon(ctx, groupButtonInfo.isExpanded, buttonImg, row, col, btnWidth, btnHeight);
	                ctx.restore();
	               
	                if (groupButtonInfo.paintLine && sizeIncrement > 0) {
	                    ctx.save();
	                    ctx.strokeStyle = lineStrokeColor;
	                    columnX = isRowGroup ? layout.y - offsetTop : layout.x - offsetLeft;
	                    rowY = groupButtonInfo.level * itemSize + offset;
	                    var isBackwardDirection = groupButtonInfo.lineDirection === 0 ,
	                        btnLineWidth = isRowGroup ? LINE_SIZE : sizeOffset, btnLineHeight = isRowGroup ? sizeOffset : LINE_SIZE;
	                    if (isRowGroup) {
	                        var temp = columnX;
	                        columnX = rowY;
	                        rowY = temp;
	                        if (isBackwardDirection) {
	                            rowY += sizeOffset + btnHeight;
	                            btnLineHeight = sizeIncrement - sizeOffset;
	                        }
	                    } else if (isBackwardDirection) {
	                        columnX += sizeOffset + btnWidth;
	                        btnLineWidth = sizeIncrement - sizeOffset;
	                    }
	                   
	                    ctx.beginPath();
	                    ctx.lineWidth = LINE_SIZE;
	                    var startX = Math_ceil(groupLayout.x + columnX + LINE_SIZE / 2), startY = Math_ceil(groupLayout.y + rowY + LINE_SIZE / 2);
	                    if(isRowGroup) {
	                        ctx.moveTo(startX, groupLayout.y + rowY);
	                        ctx.lineTo(startX, groupLayout.y + rowY + btnLineHeight - btnBorderWidth);
	                    }else{
	                        btnOffset = 0;
	                        if(hasCollapsedImg && !groupButtonInfo.isExpanded) {
	                            btnOffset = 1;
	                        }
	
	                        ctx.moveTo(groupLayout.x + columnX, startY);
	                        ctx.lineTo(groupLayout.x + columnX + columnXIncrement + btnLineWidth + btnOffset, startY);
	                    }
	                    ctx.stroke();
	                    ctx.restore();
	                }
	            }
	        },
	        _paintButtonIcon: function (ctx, isExpanded, buttonImg, row, col, btnWidth, btnHeight) {
	            var self = this, sheet = this._sheet, imageLoader = sheet._getImageLoader();
	
	            if (buttonImg && imageLoader._getState(buttonImg)) {
	                var bkImg = imageLoader._getImage(buttonImg), width = bkImg.width, height = bkImg.height;
	                try{
	                    ctx.drawImage(bkImg, 0, 0, width, height, round(row), round(col), btnWidth - 1, btnHeight - 1);
	                }catch (e) {
	                   
	                }
	                return;
	            }
	            self._drawButtonIconWithoutImage(ctx, isExpanded, row, col, btnWidth, btnHeight);
	        },
	        _drawButtonIconWithoutImage: function (ctx, isExpanded, row, col, btnWidth, btnHeight) {
	            var quarterWidth = round(btnWidth / 4), halfWidth = round(btnWidth / 2);
	            if (!isExpanded) {
	                var quarterHeight = round(btnHeight / 4), halfHeight = round(btnHeight / 2);
	               
	                ctx.fillRect(row + btnWidth / 2 - 1, col + quarterHeight, 2, btnHeight - halfHeight);
	            }
	           
	            ctx.fillRect(row + quarterWidth, col + btnHeight / 2 - 1, halfWidth, 2);
	        },
	        _getGroupInfosByLevel: function (level, isRowGroup) {
	            var self = this, sheet = self._sheet, groupInfoArray = [], groupInfo, index = -1, count = -1,
	                outline = getRowOrColumnOutlines(isRowGroup, sheet), getLayoutFunc = isRowGroup ? sheet._getRowLayout : sheet._getColumnLayout,
	                layoutModel = getLayoutFunc.call(sheet, self._viewportIndex), layoutModelLength = arrayHelper_getLength(layoutModel);
	            if (layoutModelLength) {
	                var startLayout = layoutModel[0], endLayout = layoutModel[layoutModelLength - 1];
	                index = Math_max(0, (isRowGroup ? startLayout.row : startLayout.col) - 1);
	                count = isRowGroup ? Math_min(sheet.getRowCount(), endLayout.row + 2) : Math_min(sheet.getColumnCount(), endLayout.col + 2);
	            }
	            while (index < count) {
	                groupInfo = outline.find(index, level);
	                if (groupInfo) {
	                    index = groupInfo.end + 1;
	                    groupInfoArray.push(groupInfo);
	                } else {
	                    index++;
	                }
	            }
	            return groupInfoArray;
	        },
	        _getViewportIndex: function (isStartIndex, isRowGroup) {
	            var result = -1, self = this, sheet = self._sheet,
	                viewportIndex = self._viewportIndex, frozenRowCount = sheet.frozenRowCount(), frozenColumnCount = sheet.frozenColumnCount(),
	                frozenTrailingRowCount = sheet.frozenTrailingRowCount(), frozenTrailingColumnCount = sheet.frozenTrailingColumnCount(),
	                rowCount = sheet.getRowCount(), columnCount = sheet.getColumnCount();
	            if (viewportIndex === 0) {
	                if (isStartIndex) {
	                    result = 0;
	                } else {
	                    result = (isRowGroup ? frozenRowCount : frozenColumnCount) - 1;
	                }
	            } else if (viewportIndex === 1) {
	                if (isStartIndex) {
	                    result = isRowGroup ? frozenRowCount : frozenColumnCount;
	                } else {
	                    result = (isRowGroup ? rowCount - frozenTrailingRowCount : columnCount - frozenTrailingColumnCount) - 1;
	                }
	            } else if (viewportIndex === 2) {
	                if (isStartIndex) {
	                    result = isRowGroup ? rowCount - frozenTrailingRowCount : columnCount - frozenTrailingColumnCount;
	                } else {
	                    result = (isRowGroup ? rowCount : columnCount) - 1;
	                }
	            }
	            return result;
	        },
	        _processTouch: function (rect) {
	            if (rect && this._sheet._isTouchMode) {
	                rect.x -= 2;
	                rect.y -= 2;
	                rect.width += 4;
	                rect.height += 4;
	            }
	        },
	        _getGroupButton: function (x, y, isRowGroup) {
	            var self = this, maxLevel = self._maxLevel, sheet = self._sheet, options = sheet.options, offsetLeft = options.sheetAreaOffset.left, offsetTop = options.sheetAreaOffset.top;
	            if (maxLevel < 0) {
	                return keyword_null;
	            }
	            var groupLayout = sheet._getOutlineLayout(),
	                itemSize = calcMinWidthOrHeight.call(self, groupLayout, isRowGroup);
	            if (!itemSize) {
	                return keyword_null;
	            }
	            var groupButtonInfos = self._groupButtonInfos, size, btnRect, i;
	           
	            for (i = 0; i < arrayHelper_getLength(groupButtonInfos); i++) {
	                var groupButtonInfo = groupButtonInfos[i], index = groupButtonInfo.index,
	                    groupButtonSize = groupButtonInfo.level * itemSize + self.PADDING,
	                    currentLayout = self._getIndexRowOrColumnLayout(index);
	                if (!currentLayout) {
	                    continue;
	                }
	                size = isRowGroup ? currentLayout.height : currentLayout.width;
	                if (size <= 0) {
	                    continue;
	                }
	                var rectWidth = Math_min(itemSize, size),
	                    rectHeight = itemSize,
	                    columnX = (isRowGroup ? currentLayout.y - offsetTop : currentLayout.x - offsetLeft) + Math_max(0, (size - itemSize) / 2),
	                    rowY = groupButtonSize;
	                if (isRowGroup) {
	                    var t1 = rectWidth;
	                    rectWidth = rectHeight;
	                    rectHeight = t1;
	                    var t2 = columnX;
	                    columnX = rowY;
	                    rowY = t2;
	                }
	                btnRect = new Rect(groupLayout.x + columnX + 0.5, groupLayout.y + rowY + 0.5, rectWidth, rectHeight);
	                self._processTouch(btnRect);
	                if (btnRect.contains(x, y)) {
	                    return groupButtonInfo;
	                }
	            }
	            return keyword_null;
	        }
	    };
	   
	
	   
	    function OutlineHeaderPresenter(sheet, isRowGroup, maxLevel) {
	        var self = this;
	        self.PADDING = 2;
	        self._sheet = sheet;
	        self._isRowGroup = isRowGroup;
	        self._maxLevel = isDefined(maxLevel) ? maxLevel : getRowOrColumnOutlines(isRowGroup, sheet).getMaxLevel();
	    }
	
	    OutlineHeaderPresenter.prototype = {
	        _paintGroupHeader: function (ctx) {
	            var self = this, sheet = self._sheet, maxLevel = self._maxLevel;
	            if (maxLevel < 0) {
	                return;
	            }
	            var isRowGroup = self._isRowGroup, groupLayout = sheet._getOutlineLayout(),
	                minSize = calcMinWidthOrHeight.call(self, groupLayout, isRowGroup);
	            if (!minSize) {
	                return;
	            }
	            var buttonCount = maxLevel + 2, PADDING = self.PADDING, options = sheet.options,
	                groupLayoutWidth = groupLayout.width, groupLayoutHeight = groupLayout.height, groupLayoutX = groupLayout.x, groupLayoutY = groupLayout.y,
	                layout = sheet._getSheetLayout(), layoutWidth = layout.width, layoutHeight = layout.height, layoutColHeaderHeight = layout._colHeaderHeight, layoutRowHeaderWidth = layout._rowHeaderWidth, layoutHeaderX = layout._headerX, layoutHeaderY = layout._headerY,
	                headerIncrement, headerVisible, columnX, rowY, i;
	            ctx.save();
	
	            ctx.fillStyle = getCssClassThemeStyle(CSS_GROUP).backgroundColor;
	            ctx.strokeStyle = getCssClassThemeStyle(CSS_GROUP).borderTopColor;
	
	            ctx.lineWidth = 1;
	            ctx.fillRect(groupLayoutX, groupLayoutY, isRowGroup ? groupLayoutWidth : layoutWidth, isRowGroup ? layoutHeight : groupLayoutHeight);
	            ctx.strokeRect(groupLayoutX - 0.5, groupLayoutY - 0.5, isRowGroup ? groupLayoutWidth : layoutWidth + 1, isRowGroup ? layoutHeight + 1 : groupLayoutHeight);
	           
	           
	            isRowGroup ? ctx.strokeRect(groupLayoutX - 0.5, layoutHeaderY - 0.5, groupLayoutWidth, layoutColHeaderHeight) : ctx.strokeRect(layoutHeaderX - 0.5, groupLayoutY - 0.5, layoutRowHeaderWidth, groupLayoutHeight);
	            headerIncrement = (isRowGroup ? layoutColHeaderHeight : layoutRowHeaderWidth) - minSize;
	            columnX = Math_max(0, (isRowGroup ? layoutHeaderY - options.sheetAreaOffset.top : layoutHeaderX - options.sheetAreaOffset.left) + headerIncrement / 2);
	            rowY = PADDING;
	            if (isRowGroup) {
	                var swap = columnX;
	                columnX = rowY;
	                rowY = swap;
	            }
	            ctx.restore();
	            headerVisible = isRowGroup ? options.colHeaderVisible : options.rowHeaderVisible;
	            ctx.save();
	            if (headerVisible && headerIncrement >= 0) {
	                for (i = 0; i < buttonCount; i++) {
	                    var rectSize = minSize - 1, textHeight,
	                        rectX = groupLayoutX + columnX,
	                        rectY = groupLayoutY + rowY;
	                    if (isRowGroup) {
	                        rectX = round(rectX) + 0.5;
	                    } else {
	                        rectY += 0.5;
	                    }
	                    ctx.fillStyle = getCssClassThemeStyle(CSS_GROUP_BOX).backgroundColor;
	                    ctx.fillRect(rectX, rectY, rectSize, rectSize);
	                    ctx.font = GROUP_BTN_FONTSIZE * sheet.zoom() + 'pt Arial';
	                    ctx.strokeStyle = getCssClassThemeStyle(CSS_GROUP_BOX).borderTopColor;
	                    ctx.strokeRect(rectX, rectY, rectSize, rectSize);
	                    ctx.fillStyle = getCssClassThemeStyle(CSS_GROUP_BOX).color;
	                    textHeight = getFontHeight(ctx.font);
	                    self._paintHeaderIcon(ctx, rectX, rectY, rectSize, minSize, i + 1, textHeight);
	                    if(isRowGroup) {
	                        columnX += minSize;
	                    } else {
	                        rowY += minSize;
	                    }
	                }
	            }
	            ctx.restore();
	        },
	        _paintHeaderIcon: function (ctx, rectX, rectY, rectWidth, rectHeight, num, textHeight) {
	            var text = '' + num,
	                textWidth = ctx.measureText(text).width;
	            if (textWidth <= rectWidth && textHeight <= rectHeight) {
	                ctx.textBaseline = 'middle';
	                ctx.fillText(text, rectX + (rectWidth - textWidth) / 2, rectY + rectWidth / 2);
	            }
	        },
	        _getGroupHeaderButton: function (x, y, isRowGroup) {
	            var self = this, sheet = self._sheet, maxLevel = self._maxLevel;
	            if (maxLevel < 0) {
	                return keyword_null;
	            }
	            var buttonCount = maxLevel + 2, sheetLayout = sheet._getSheetLayout(), options = sheet.options, sheetAreaOffset = options.sheetAreaOffset;
	            return isRowGroup ? self._getHeaderIndex(sheet, x, y, isRowGroup, options.colHeaderVisible, sheetLayout._colHeaderHeight, sheetLayout._headerY - sheetAreaOffset.top, buttonCount)
	                : self._getHeaderIndex(sheet, x, y, isRowGroup, options.rowHeaderVisible, sheetLayout._rowHeaderWidth, sheetLayout._headerX - sheetAreaOffset.left, buttonCount);
	           },
	        _getHeaderIndex: function (sheet, x, y, isRowGroup, headerVisible, headerSize, layoutHeaderSize, buttonCount) {
	            var self = this, groupLayout = sheet._getOutlineLayout(),
	                minSize = calcMinWidthOrHeight.call(self, groupLayout, isRowGroup),
	                headerIncrement = headerSize - minSize, columnX, rowY, btnRect, i;
	            if (minSize && headerVisible && headerIncrement >= 0) {
	                columnX = Math_max(0, layoutHeaderSize + headerIncrement / 2);
	                rowY = self.PADDING;
	                if (isRowGroup) {
	                    var swap = columnX;
	                    columnX = rowY;
	                    rowY = swap;
	                }
	                for (i = 0; i < buttonCount; i++) {
	                    btnRect = new Sheets.Rect(groupLayout.x + columnX, groupLayout.y + rowY, minSize, minSize);
	                    if (btnRect.contains(x, y)) {
	                        return { index: i };
	                    }
	                    if (isRowGroup) {
	                        columnX += minSize;
	                    } else {
	                        rowY += minSize;
	                    }
	                }
	            }
	            return keyword_null;
	        }
	    };
	   
	
	    var _SheetModelManager = Sheets._SheetModelManager;
	    function _cloneOutlineItemInfo (item) {
	        return item && new OutlineItemInfo(item);
	    }
	    function backupOutline(outline) {
	        return {
	            items: outline.items.map(_cloneOutlineItemInfo),
	            head: _cloneOutlineItemInfo(outline.head),
	            tail: _cloneOutlineItemInfo(outline.tail),
	            _empty: outline._empty,
	            direction: outline.direction()
	        };
	    }
	    function restoreOutline(outline, outlineItem) {
	        outline.items = outlineItem.items.map(_cloneOutlineItemInfo);
	        outline.head = _cloneOutlineItemInfo(outlineItem.head);
	        outline.tail = _cloneOutlineItemInfo(outlineItem.tail);
	        outline._empty = outlineItem._empty;
	        outline.direction(outlineItem.direction);
	        updateRootCache(outline, true);
	    }
	    $.extend(_SheetModelManager.prototype, {
	        _backupOutlines: function (isRowGroup) {
	            var self = this;
	            var changes = self._changes;
	            if (changes) {
	                if (!changes._originalOutlines) {
	                    changes._originalOutlines = [];
	                }
	                if (isRowGroup && !changes._originalOutlines[0]) {
	                    changes._originalOutlines[0] = backupOutline(self._rowOutlines);
	                } else if (!isRowGroup && !changes._originalOutlines[1]) {
	                    changes._originalOutlines[1] = backupOutline(self._columnOutlines);
	                }
	            }
	        },
	        _restoreOutlines: function (originalOutlines) {
	            if (originalOutlines) {
	                var self = this;
	                var outlineItem = originalOutlines[0];
	                if (outlineItem) {
	                    restoreOutline(self._rowOutlines, outlineItem);
	                }
	                outlineItem = originalOutlines[1];
	                if (outlineItem) {
	                    restoreOutline(self._columnOutlines, outlineItem);
	                }
	            }
	        }
	    });
	    _SheetModelManager._registerFeature(RANGE_GROUP, {
	        init: function() {
	            var self = this, sheet = self._sheet;
	            self._columnOutlines = new Outline(self.getColumnCount(), sheet, false);
	            self._rowOutlines = new Outline(self.getRowCount(), sheet, true);
	        },
	        undo: function (changes) {
	            var originalOutlines = changes._originalOutlines;
	            if (originalOutlines) {
	                this._restoreOutlines(originalOutlines);
	
	                this._sheet._invalidate();
	            }
	        }
	    });
	   
	    var adapter = {
	        init: function () {
	            var self = this;
	           
	            
	            self.rowOutlines = self._modelManager._rowOutlines;
	           
	            
	            self.columnOutlines = self._modelManager._columnOutlines;
	            self.rowOutlines.groupChangeHandler = function (data) {
	                var indexes = data && data.indexes;
	                if (indexes && self.recalcRows) {
	                    self.recalcRows(indexes);
	                }
	                var parent = self.parent;
	                if (!parent || self === parent.getActiveSheet()) {
	                    self._invalidateVScrollbar();
	                }
	
	                var start, end;
	                if (indexes) {
	                    start = indexes[0];
	                    end = indexes[indexes.length - 1];
	                } else {
	                    start = 0;
	                    end = self.getRowCount() - 1;
	                }
	                Worksheet._callFeatureHandler(self, 'onGroupChanged', {start: start, end: end, isRow: true});
	            };
	            self.columnOutlines.groupChangeHandler = function (data) {
	                var parent = self.parent;
	                if (!parent || self === parent.getActiveSheet()) {
	                    self._invalidateHScrollbar();
	                }
	
	                var indexes = data && data.indexes;
	                var start, end;
	                if (indexes) {
	                    start = indexes[0];
	                    end = indexes[indexes.length - 1];
	                } else {
	                    start = 0;
	                    end = self.getColumnCount() - 1;
	                }
	                Worksheet._callFeatureHandler(self, 'onGroupChanged', {start: start, end: end, isRow: false});
	            };
	            self._rowStateProviders.push(self.rowOutlines);
	            self._colStateProviders.push(self.columnOutlines);
	        },
	        dispose: function () {
	            var self = this;
	            $(self._getCanvas()).unbind('mousedown.group');
	
	           
	           
	        },
	        setHost: function (host) {
	            if (!host) {
	                return;
	            }
	            var self = this;
	
	            host.bind('mousedown.group', function (e) {
	                var t = self._getCanvasOffset(),
	                    hitInfo = outlineHitTest.call(self, e.pageX - t.left, e.pageY - t.top);
	                if (hitInfo) {
	                    var what = hitInfo.what;
	                    if (what === ROW_GROUP || what === ROW_GROUP_HEADER) {
	                        self.rowOutlines._doClick(self, hitInfo);
	                    } else if (what === COL_GROUP || what === COL_GROUP_HEADER) {
	                        self.columnOutlines._doClick(self, hitInfo);
	                    }
	                }
	            });
	        },
	        onPaintSuspend: function(e) {
	            var self = this;
	            if (e.suspend) {
	                self.rowOutlines._suspend();
	                self.columnOutlines._suspend();
	            } else {
	                self.rowOutlines._resume();
	                self.columnOutlines._resume();
	            }
	        },
	        onLayoutChanged: function (e) {
	            var self = this, changeType = e.changeType;
	            var row = e.row, rowCount = e.rowCount,
	                col = e.col, colCount = e.colCount;
	            var sheetArea = e.sheetArea;
	            var rowRangeGroup = self.rowOutlines,
	                colRangeGroup = self.columnOutlines;
	            var modelManager = this._modelManager;
	            if (changeType === 'addRows') {
	                modelManager._backupOutlines(true);
	                addGroupItems(rowRangeGroup, row, rowCount);
	            } else if (changeType === 'deleteRows') {
	                modelManager._backupOutlines(true);
	                removeGroupItems(rowRangeGroup, row, rowCount);
	            } else if (changeType === 'addColumns') {
	                modelManager._backupOutlines(false);
	                addGroupItems(colRangeGroup, col, colCount);
	            } else if (changeType === 'deleteColumns') {
	                modelManager._backupOutlines(false);
	                removeGroupItems(colRangeGroup, col, colCount);
	            } else if (changeType === 'invalidateLayout') {
	                self._cachedGroupLayout = keyword_null;
	            } else if (changeType === 'setColumnCount') {
	                modelManager._backupOutlines(false);
	                if (sheetArea === 3  || sheetArea === 1 ) {
	                    colRangeGroup._setCount(colCount);
	                }
	            } else if (changeType === 'setRowCount' && (sheetArea === 3  || sheetArea === 2 )) {
	                modelManager._backupOutlines(true);
	                rowRangeGroup._setCount(rowCount);
	            }
	        },
	        paint: function (e) {
	            var ctx = e.ctx, clipRect = e.clipRect;
	            var sheet = this;
	            var rowOutlines = sheet.rowOutlines, columnOutlines = sheet.columnOutlines;
	            if (rowOutlines) {
	                rowOutlines._paint(sheet, ctx, clipRect, true);
	            }
	            if (columnOutlines) {
	                columnOutlines._paint(sheet, ctx, clipRect, false);
	            }
	        },
	        fromJson: function (data, noSchema, deserializationOptions) {
	            if (data) {
	                var self = this, outline,
	                    showRowRangeGroup = data.showRowRangeGroup, showColumnRangeGroup = data.showColumnRangeGroup,
	                    showRowOutline = isDefined(showRowRangeGroup) ? showRowRangeGroup : data.showRowOutline,
	                    showColumnOutline = isDefined(showColumnRangeGroup) ? showColumnRangeGroup : data.showColumnOutline;
	                if (!isNullOrUndefined(showRowOutline)) {
	                    self.showRowOutline(showRowOutline);
	                }
	                if (!isNullOrUndefined(showColumnOutline)) {
	                    self.showColumnOutline(showColumnOutline);
	                }
	                outline = data.rowRangeGroup || data.rowOutlines;
	                if (outline) {
	                    self.rowOutlines.fromJSON(outline, deserializationOptions);
	                }
	                outline = data.colRangeGroup || data.columnOutlines;
	                if (outline) {
	                    self.columnOutlines.fromJSON(outline, deserializationOptions);
	                }
	            }
	        },
	        toJson: function (data, serializationOption) {
	            var self = this, rowOutlines = self.rowOutlines, columnOutlines = self.columnOutlines;
	            var showRowOutline = self.showRowOutline();
	            if (showRowOutline !== true) {
	                data.showRowOutline = showRowOutline;
	            }
	            var showColumnOutline = self.showColumnOutline();
	            if (showColumnOutline !== true) {
	                data.showColumnOutline = showColumnOutline;
	            }
	            data.rowOutlines = rowOutlines ? rowOutlines.toJSON(serializationOption) : keyword_undefined;
	            data.columnOutlines = columnOutlines ? columnOutlines.toJSON(serializationOption) : keyword_undefined;
	        }
	    };
	    Sheets.Worksheet._registerFeature(RANGE_GROUP, adapter);
	   
	
	   
	    var ssAdapter = {
	        init: function () {
	            Commands._initOutlineDefaultCommands(this.commandManager());
	        }
	    };
	    Sheets.Workbook._registerFeature(RANGE_GROUP, ssAdapter);
	   
	
	    module.exports = Outlines;
	
	}());

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_InvalidIndex: 'Invalid index',
	        Exp_InvalidCount: 'Invalid count',
	        Exp_InvalidLevel: 'Invalid level',
	        Exp_GroupInfoIsNull: 'groupInfo is null'
	    };
	    
	
	}());

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.outlines.12.0.0.js.map