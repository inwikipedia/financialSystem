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
var GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["FloatingObjects"] =
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
	
	    var flocatingObjects = __webpack_require__(1);
	    __webpack_require__(5);
	    
	    __webpack_require__(4);
	    
	    __webpack_require__(6);
	    
	    flocatingObjects.SR = {};
	    flocatingObjects.SR['en'] = __webpack_require__(8);
	
	    var Drawing = __webpack_require__(9);
	    __webpack_require__(10);
	    __webpack_require__(11);
	    __webpack_require__(12);
	    __webpack_require__(13);
	    __webpack_require__(14);
	    __webpack_require__(15);
	    __webpack_require__(16);
	    __webpack_require__(17);
	    __webpack_require__(19);
	    __webpack_require__(20);
	    __webpack_require__(18);
	    __webpack_require__(21);
	    __webpack_require__(22);
	    __webpack_require__(23);
	    flocatingObjects.Drawing = Drawing;
	
	    module.exports = flocatingObjects;
	    
	
	}());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Sheets = __webpack_require__(2),
	        Common = __webpack_require__(3),
	        isNullOrUndefined = Common._Types._isNullOrUndefined,
	        FloatingobjectActions = __webpack_require__(4),
	        Rect = Sheets.Rect,
	        Point = Sheets.Point,
	        Events = Sheets.Events,
	        _ThemeContext = Sheets._ThemeContext,
	        isType = Common._Types._isType,
	        util = Sheets._util,
	        defProperty = util._defProperty,
	        isDefined = util._isDefined,
	        createElement = util._createElement,
	        getDistance = util._getDistance,
	        NamedObjectArray = FloatingobjectActions._NamedObjectArray,
	        DOCUMENT = document,
	        hasOwnProperty = Common._hasOwnProperty,
	       
	        sR = function () {
	            return Common._getResource(module.exports.SR)();
	        };
	    var $ = Sheets.GC$,
	        keyword_null = null,
	        keyword_undefined = void 0,
	        Math_ceil = Math.ceil,
	        Math_floor = Math.floor,
	        Math_max = Math.max,
	        Math_min = Math.min,
	        Math_abs = Math.abs;
	    var DIV = 'div',
	        ON = 'on',
	        Z_INDEX = 'z-index',
	        MOVE = 'move',
	        UNSELECTABLE = 'unselectable',
	        VIEWPORTINDEX = 1,
	        BORDER = 'border',
	        MAX_NUMBER = 9007199254740992,
	        FLOATING_OBJECTS = 'floatingObjects',
	        GC_FLOATINGOBJECT_NS = '.gcFloatingObject',
	        NAME = 'name',
	        X = 'x',
	        Y = 'y',
	        WIDTH = 'width',
	        HEIGHT = 'height',
	        START = 'start',
	        START_ROW = START + 'Row',
	        START_ROW_OFFSET = START + 'RowOffset',
	        START_COLUMN = START + 'Column',
	        START_COLUMN_OFFSET = START + 'ColumnOffset',
	        END = 'end',
	        END_ROW = END + 'Row',
	        END_ROW_OFFSET = END + 'RowOffset',
	        END_COLUMN = END + 'Column',
	        END_COLUMN_OFFSET = END + 'ColumnOffset',
	        IS_SELECTED = 'isSelected',
	        IS_LOCKED = 'isLocked',
	        IS_VISIBLE = 'isVisible',
	        CAN_PRINT = 'canPrint',
	        DYNAMIC_SIZE = 'dynamicSize',
	        DYNAMIC_MOVE = 'dynamicMove',
	        FIXED_POSITION = 'fixedPosition',
	        ALLOW_RESIZE = 'allowResize',
	        ALLOW_MOVE = 'allowMove',
	        CSS_ZINDEXDEFAULTVALUE = 700,
	        CSS_CONTAINERZINDEXVALUE = 701,
	        POSITION = 'position',
	        ABSOLUTE = 'absolute',
	        BACKGROUND = 'background',
	        CSS_CLASS_NONE_USER_SELECT = 'gc-no-user-select',
	        CSS_CLASS_FLOATINGOBJECT_SELECTED = 'gc-floatingobject-selected',
	        CSS_CLASS_FLOATINGOBJECT_UNSELECTED = 'gc-floatingobject-unselected',
	        CSS_CLASS_RESIZE_INDICATOR_SELECT = 'gc-floatingobject-resize-indicator-select',
	        CSS_CLASS_RESIZE_INDICATOR_UNSELECT = 'gc-floatingobject-resize-indicator-unSelect',
	        CSS_CLASS_FLOATINGOBJECT_CONTENT_CONTAINER = 'gc-floatingobject-content-container',
	        CSS_CLASS_FLOATINGOBJECT_CONTAINER = 'gc-floatingobject-container',
	        CSS_CLASS_FLOATINGOBJECT_MOVING_CONTAINER = 'gc-floatingobject-moving-container',
	        CSS_CLASS_FLOATINGOBJECT_MOVING_DIV = 'gc-floatingobject-moving-div',
	        CSS_SELECTOR_RESIZE_INDICATOR = '.gc-floatingobject-resize-indicator',
	        FLOATINGOBJECT_RESIZE_INDICATOR = 'gc-floatingobject-resize-indicator',
	        FLOATINGOBJECT_ABSOLUTE = 'gc-floatingobject-absolute',
	        FLOATINGOBJECT_TOP = 'gc-floatingobject-top',
	        FLOATINGOBJECT_MIDDLE = 'gc-floatingobject-middle',
	        FLOATINGOBJECT_BOTTOM = 'gcfloatingobject-bottom',
	        FLOATINGOBJECT_LEFT = 'gc-floatingobject-left',
	        FLOATINGOBJECT_CENTER = 'gc-floatingobject-center',
	        FLOATINGOBJECT_RIGHT = 'gc-floatingobject-right',
	        DIV_DOT_FLOATINGOBJECT_RESIZE_INDICATOR = 'div.' + FLOATINGOBJECT_RESIZE_INDICATOR,
	        CSS_SELECTOR_TOP_LEFT_RESIZE_INDICATOR = DIV_DOT_FLOATINGOBJECT_RESIZE_INDICATOR + '.' + FLOATINGOBJECT_TOP + '.' + FLOATINGOBJECT_LEFT,
	        CSS_SELECTOR_MIDDLE_LEFT_RESIZE_INDICATOR = DIV_DOT_FLOATINGOBJECT_RESIZE_INDICATOR + '.' + FLOATINGOBJECT_MIDDLE + '.' + FLOATINGOBJECT_LEFT,
	        CSS_SELECTOR_BOTTOM_LEFT_RESIZE_INDICATOR = DIV_DOT_FLOATINGOBJECT_RESIZE_INDICATOR + '.' + FLOATINGOBJECT_BOTTOM + '.' + FLOATINGOBJECT_LEFT,
	        CSS_SELECTOR_TOP_CENTER_RESIZE_INDICATOR = DIV_DOT_FLOATINGOBJECT_RESIZE_INDICATOR + '.' + FLOATINGOBJECT_TOP + '.' + FLOATINGOBJECT_CENTER,
	        CSS_SELECTOR_BOTTOM_CENTER_RESIZE_INDICATOR = DIV_DOT_FLOATINGOBJECT_RESIZE_INDICATOR + '.' + FLOATINGOBJECT_BOTTOM + '.' + FLOATINGOBJECT_CENTER,
	        CSS_SELECTOR_TOP_RIGHT_RESIZE_INDICATOR = DIV_DOT_FLOATINGOBJECT_RESIZE_INDICATOR + '.' + FLOATINGOBJECT_TOP + '.' + FLOATINGOBJECT_RIGHT,
	        CSS_SELECTOR_MIDDLE_RIGHT_RESIZE_INDICATOR = DIV_DOT_FLOATINGOBJECT_RESIZE_INDICATOR + '.' + FLOATINGOBJECT_MIDDLE + '.' + FLOATINGOBJECT_RIGHT,
	        CSS_SELECTOR_BOTTOM_RIGHT_RESIZE_INDICATOR = DIV_DOT_FLOATINGOBJECT_RESIZE_INDICATOR + '.' + FLOATINGOBJECT_BOTTOM + '.' + FLOATINGOBJECT_RIGHT,
	        CONTENT = 'content',
	        NO_USER_SELECT = 'gc-no-user-select', PERCENT_100 = '100%',
	        CSS_CLASS_FLOATINGOBJECT_BACKGROUND_COVER = 'gc-floatingobject-background-cover',
	        NS = '.fos';
	
	    var sheetEx = function () {
	        var _this = this;
	
	        _this._unSelectAllFloatingObjects = function () {
	            var floatingObjectModel = this._floatingObjectModel;
	            if (floatingObjectModel) {
	                floatingObjectModel._all().forEach(function (p) {
	                    p.isSelected(false);
	                });
	            }
	        };
	        _this._refreshObjectsAboveSheet = function () {
	            var self = this, floatingObjectModel = self._floatingObjectModel;
	            if (floatingObjectModel) {
	                floatingObjectModel.isNeedToUpdateLayout = true;
	            }
	        };
	        _this._getFloatingObjectClipboardHelper = function () {
	            var self = this,
	                workbook = self.parent,
	                worksheetFOClipboardHelper = self._floatingObjectClipboardHelper,
	                workbookFOClipboardHelper = workbook && workbook._floatingObjectClipboardHelper;
	            if (!worksheetFOClipboardHelper) {
	                worksheetFOClipboardHelper = self._floatingObjectClipboardHelper = workbookFOClipboardHelper ? workbookFOClipboardHelper : {
	                    fromSheet: keyword_null,
	                    isCutting: false
	                };
	            }
	
	            return worksheetFOClipboardHelper;
	        };
	        _this._clearFloatingObjectClipboardHelper = function () {
	            var self = this,
	                foClipboardHelper = self._getFloatingObjectClipboardHelper(),
	                fromSheet = foClipboardHelper && foClipboardHelper.fromSheet;
	            if (fromSheet) {
	                fromSheet._clipboardFloatingObjectData = keyword_null;
	            }
	            foClipboardHelper.fromSheet = keyword_null;
	            foClipboardHelper.isCutting = false;
	        };
	        _this._canSelectFloatingObject = function (floatingObject) {
	            var options = this.options;
	            return !options.isProtected || !floatingObject.isLocked() || options.protectionOptions.allowEditObjects;
	        };
	        _this._canEditFloatingObject = function (floatingObject) {
	            var options = this.options;
	            return !options.isProtected || !floatingObject.isLocked() || options.protectionOptions.allowEditObjects;
	        };
	        _this.isPasteFloatingObject = function () {
	            var self = this,
	                fromSheet = self._getFloatingObjectClipboardHelper().fromSheet;
	            var clipboardData = this._clipboardFloatingObjectData;
	            if (!clipboardData && fromSheet) {
	                clipboardData = fromSheet._clipboardFloatingObjectData;
	            }
	            return clipboardData && !clipboardData.isEmpty();
	        };
	    };
	    sheetEx.call(Sheets.Worksheet.prototype);
	
	    function disposeFloatingObjectUI(sheet) {
	        var floatingObjectRenderManagers = sheet._floatingObjectRenderManagers;
	        if (floatingObjectRenderManagers) {
	            var i, j, rowCount, colCount;
	            for (i = 0, rowCount = floatingObjectRenderManagers.length; i < rowCount; i++) {
	                var rowViewportRenderManagers = floatingObjectRenderManagers[i];
	                if (rowViewportRenderManagers) {
	                    for (j = 0, colCount = rowViewportRenderManagers.length; j < colCount; j++) {
	                        var renderManager = rowViewportRenderManagers[j];
	                        if (renderManager) {
	                            renderManager._dispose();
	                        }
	                    }
	                    rowViewportRenderManagers.length = 0;
	                }
	            }
	            floatingObjectRenderManagers.length = 0;
	            sheet._floatingObjectRenderManagers = keyword_null;
	        }
	
	        var floatingObjectModel = sheet._floatingObjectModel;
	        if (floatingObjectModel) {
	            floatingObjectModel._dispose();
	        }
	    }
	
	    function addRows(floatingObjectModel, row, rowCount) {
	        floatingObjectModel._all().forEach(function (item) {
	            item._onRowsAdded(row, rowCount);
	        });
	    }
	
	    function removeRows(floatingObjectModel, row, rowCount) {
	        var i, len;
	        var removeItems = [];
	        floatingObjectModel._all().forEach(function (floatingObject) {
	            if (!isCoverRange(row, -1, row + rowCount - 1, floatingObjectModel.sheet().getColumnCount(), floatingObject) || (!floatingObject.dynamicMove() && !floatingObject.dynamicSize())) {
	                floatingObject._onRowsRemoved(row, rowCount);
	            } else {
	                removeItems.push(floatingObject);
	            }
	        });
	        for (i = 0, len = removeItems.length; i < len; i++) {
	            floatingObjectModel._remove(removeItems[i].name());
	        }
	    }
	
	    function addColumns(floatingObjectModel, column, columnCount) {
	        floatingObjectModel._all().forEach(function (item) {
	            item._onColumnsAdded(column, columnCount);
	        });
	    }
	
	    function removeColumns(floatingObjectModel, column, columnCount) {
	        var i, len;
	        var removeItems = [];
	        floatingObjectModel._all().forEach(function (floatingObject) {
	            if (!isCoverRange(-1, column, floatingObjectModel.sheet().getRowCount(), column + columnCount - 1, floatingObject) || (!floatingObject.dynamicMove() && !floatingObject.dynamicSize())) {
	                floatingObject._onColumnsRemoved(column, columnCount);
	            } else {
	                removeItems.push(floatingObject);
	            }
	        });
	        for (i = 0, len = removeItems.length; i < len; i++) {
	            floatingObjectModel._remove(removeItems[i].name());
	        }
	    }
	
	    function isCoverRange(row, column, endRow, endColumn, floatingObject) {
	        var fStartRow = floatingObject[START_ROW]();
	        var fStartColumn = floatingObject[START_COLUMN]();
	        var fEndRow = floatingObject[END_ROW]();
	        var fEndColumn = floatingObject[END_COLUMN]();
	        return row <= fStartRow && column <= fStartColumn && endRow >= fEndRow && endColumn >= fEndColumn;
	    }
	
	
	    function toJsonFn(ps, jsData) {
	        var self = this;
	        if (!jsData) {
	            jsData = {};
	        }
	        $.each(ps, function (i, p) {
	            var pt = self[p];
	            var value = pt.call(self);
	            if (!pt.isDefault(value)) {
	                jsData[p] = value;
	            }
	        });
	        return jsData;
	    }
	
	    function fromJsonFn(ps, jsData) {
	        if (!jsData) {
	            return;
	        }
	        var self = this;
	        $.each(ps, function (i, p) {
	            if (jsData[p] !== keyword_undefined) {
	                self[p].call(self, jsData[p], false);
	            }
	        });
	    }
	
	    function propertyRefreshCallback(propertyName) {
	        var pname = propertyName;
	        return function (value, oldValue) {
	            var self = this, sheet = self.sheet();
	            if (pname === CONTENT) {
	                self._needRefresh = true;
	            }
	            if (sheet) {
	                sheet._invalidate();
	            }
	            self.onPropertyChanged(pname, value, oldValue);
	        };
	    }
	
	    function updateLocationRefreshCallback(propertyName) {
	        var pname = propertyName;
	        return function (value, oldValue) {
	            var self = this, sheet = self.sheet();
	            if (sheet) {
	                updateFloatingObjectLocation(self);
	                sheet._invalidate();
	            }
	            self.onPropertyChanged(pname, value, oldValue);
	        };
	    }
	
	    function updateSizeRefreshCallback(propertyName) {
	        var pname = propertyName;
	        return function (value, oldValue) {
	            var self = this, sheet = self.sheet();
	            if (sheet) {
	                updateFloatingObjectSize(self);
	                sheet._invalidate();
	            }
	            self.onPropertyChanged(pname, value, oldValue);
	        };
	    }
	
	    function updateFloatingObjectLocation(floatingobject) {
	        var sheet = floatingobject.sheet();
	        if (!sheet) {
	            return;
	        }
	
	        function updateLocation(startFn, totalFn, offsetFn, sizeFn, cacheID) {
	            var newValue = 0, startRow = startFn.call(floatingobject);
	            newValue = totalFn.call(floatingobject, sheet, 0, startRow);
	            updateStartOffset.call(floatingobject, startFn, offsetFn, sizeFn, true, cacheID);
	            newValue += offsetFn.call(floatingobject);
	            return newValue;
	        }
	
	        var newY = updateLocation(floatingobject[START_ROW], getTotalHeight, floatingobject[START_ROW_OFFSET], sheet.getRowHeight, START_ROW_OFFSET);
	        var newX = updateLocation(floatingobject[START_COLUMN], getTotalWidth, floatingobject[START_COLUMN_OFFSET], sheet.getColumnWidth, START_COLUMN_OFFSET);
	
	        var oldX = floatingobject.x(), oldY = floatingobject.y();
	        if (oldX !== newX || oldY !== newY) {
	            floatingobject.x(newX, false);
	            floatingobject.y(newY, false);
	            floatingobject.onPropertyChanged('position', new Point(newX, newY), new Point(oldX, oldY));
	        }
	    }
	
	    function updateStartOffset(startFn, offsetFn, sizeFn, isStart, cacheID) {
	        var self = this;
	        var startRowOffset = offsetFn.call(self),
	            startRowHeight = sizeFn.call(self.sheet(), startFn.call(self), 3 ),
	            cacheOffset = self._cacheOffset;
	        if (startRowHeight > 0) {
	            startRowHeight--;
	        }
	        if (startRowOffset > startRowHeight) {
	            if (!cacheOffset[cacheID]) {
	                cacheOffset[cacheID] = startRowOffset;
	            }
	            offsetFn.call(self, startRowHeight, false);
	        } else if (cacheOffset[cacheID]) {
	            if (cacheOffset[cacheID] < startRowHeight) {
	                offsetFn.call(self, cacheOffset[cacheID], false);
	                cacheOffset[cacheID] = keyword_undefined;
	            } else if ((isStart && startRowHeight < cacheOffset[cacheID]) || !isStart && startRowOffset < cacheOffset[cacheID]) {
	                offsetFn.call(self, startRowHeight, false);
	            }
	        }
	    }
	
	    function getTotalHeight(sheet, row1, row2, max) {
	        var height = 0;
	        for (var row = row1; row < row2; row++) {
	            height += sheet.getRowHeight(row, 3 );
	            if (height > max) {
	                break;
	            }
	        }
	        return height;
	    }
	
	    function getTotalWidth(sheet, col1, col2, max) {
	        var width = 0;
	        for (var column = col1; column < col2; column++) {
	            width += sheet.getColumnWidth(column, 3 );
	            if (width > max) {
	                break;
	            }
	        }
	        return width;
	    }
	
	    function updateStartPosition(floatingobject) {
	        var sheet = floatingobject.sheet();
	        if (!sheet) {
	            return;
	        }
	
	        function updateStart(isRow, y, startFn, offsetFn, count) {
	            var info = getAnchor(floatingobject, isRow, y);
	            var index = info.index;
	            offsetFn.call(floatingobject, info.offset, false);
	            if (info.offset === -1) {
	                index += 1;
	                offsetFn.call(floatingobject, 0);
	                if (index === count) {
	                    index = count - 1;
	                }
	            }
	            startFn.call(floatingobject, index, false);
	        }
	
	        updateStart(true, floatingobject.y(), floatingobject[START_ROW], floatingobject[START_ROW_OFFSET], sheet.getRowCount());
	        updateStart(false, floatingobject.x(), floatingobject[START_COLUMN], floatingobject[START_COLUMN_OFFSET], sheet.getColumnCount());
	    }
	
	    function updateEndPosition(floatingobject) {
	        var sheet = floatingobject.sheet();
	        if (!sheet) {
	            return;
	        }
	
	        function updateEnd(isRow, y, endFn, endOffsetFn) {
	            var info = getAnchor(floatingobject, isRow, y);
	            endFn.call(floatingobject, info.index, false);
	            endOffsetFn.call(floatingobject, info.offset, false);
	        }
	
	        updateEnd(true, floatingobject.y() + floatingobject[HEIGHT](), floatingobject[END_ROW], floatingobject[END_ROW_OFFSET]);
	        updateEnd(false, floatingobject.x() + floatingobject[WIDTH](), floatingobject[END_COLUMN], floatingobject[END_COLUMN_OFFSET]);
	    }
	
	    function getAnchor(floatingobject, isRow, y) {
	        var total = 0;
	        var offset = 0;
	        var sheet = floatingobject.sheet();
	        var count = isRow ? sheet.getRowCount() : sheet.getColumnCount();
	        var index = 0;
	        for (index = 0; index < count; index++) {
	            var size = isRow ? sheet.getRowHeight(index, 3 ) : sheet.getColumnWidth(index, 3);
	            total += size;
	            offset = total - y;
	            if (offset > 0) {
	                offset = offset > 0 ? size - offset : -1;
	                break;
	            } else if (offset === 0) {
	                offset = 0;
	                index += 1;
	                break;
	            }
	        }
	
	        if (index >= count) {
	            index = count - 1;
	            offset = 0;
	        }
	
	        return {
	            offset: offset,
	            index: index
	        };
	    }
	
	   
	    function syncFloatingObjectZIndex(floatingObject, containerDiv) {
	        setZIndex(containerDiv, getFloatingObjectZIndex(floatingObject));
	    }
	
	    function setZIndex(element, zIndex) {
	        if (element) {
	            element.style.zIndex = zIndex + "";
	        }
	    }
	
	   
	   
	   
	   
	    function getFloatingObjectZIndex(floatingObject) {
	       
	        var zIndex = floatingObject._zIndex;
	        if (isNullOrUndefined(zIndex)) {
	           
	            zIndex = floatingObject._zIndexAuto;
	        }
	
	        return zIndex;
	    }
	
	   
	    function updateFloatingObjectZIndex(floatingObject, zIndex) {
	        floatingObject._zIndex = zIndex;
	        floatingObject._host.forEach(function (div) {
	           
	            var container = div.parentElement;
	            while (container.className.indexOf(CSS_CLASS_FLOATINGOBJECT_CONTAINER) === -1) {
	                container = container.parentElement;
	            }
	            setZIndex(container, zIndex);
	        });
	    }
	
	   
	    function adjustFloatingObjectZIndex(floatingObject, offset) {
	        if (isNullOrUndefined(floatingObject._zIndex)) {
	           
	            floatingObject._zIndexAuto += offset;
	        }
	    }
	
	   
	    
	    function FloatingObjectCollection(sheet, typeName) {
	        this._sheet = sheet;
	        this._kind = typeName;
	    }
	
	    $.extend(FloatingObjectCollection.prototype, {
	       
	        
	        add: function (floatingObjectOrName, src, x, y, width, height) {  
	            var self = this, foInstance;
	            if (self._kind === '1' ) {
	                foInstance = new FloatingObjects.Picture(floatingObjectOrName, src, x, y, width, height) ;
	            } else if (self._kind === '0' ) {
	                foInstance = floatingObjectOrName;
	            }
	            self._sheet._floatingObjectModel._add(foInstance);
	            return foInstance;
	        },
	       
	        
	        get: function (name) {
	            return this._sheet._floatingObjectModel._get(name);
	        },
	       
	        
	        remove: function (name) {
	            this._sheet._floatingObjectModel._remove(name);
	        },
	       
	        
	        clear: function () {
	            return this._sheet._floatingObjectModel._clear(this._kind);
	        },
	       
	        
	        all: function () {
	            return this._sheet._floatingObjectModel._all(this._kind);
	        },
	       
	        
	        zIndex: function (name, zIndex) {
	            return this._sheet._floatingObjectModel._zIndex(name, zIndex);
	        },
	        _onGroupChanged: function (start, end, isRow) {
	            this.all().forEach(function (floatingObject) {
	                var floatingObjectStart = isRow ? floatingObject.startRow() : floatingObject.startColumn(),
	                    floatingObjectEnd = isRow ? floatingObject.endRow() : floatingObject.endColumn();
	                if (!(end < floatingObjectStart || start > floatingObjectEnd)) {
	                    updateFloatingObjectSize(floatingObject);
	                }
	            });
	        }
	    });
	
	    var FloatingObjectModel = (function () {
	        function FloatingObjectModel(sheet) {
	            var self = this;
	            self.sheet(sheet);
	            bindEventsOnSheet(self);
	            self._storage = {};
	        }
	
	        function bindEventsOnSheet(floatingobjectModel) {
	            var sheet = floatingobjectModel.sheet();
	            if (!sheet) {
	                return;
	            }
	            $(DOCUMENT.body).bind('scroll' + GC_FLOATINGOBJECT_NS, function () {
	                var activeSheet = sheet.parent.getActiveSheet();
	                if (activeSheet._floatingObjectModel) {
	                    sheet._paintFloatingObject(activeSheet._getBounds());
	                }
	            });
	           
	            sheet._bind(Events.ColumnChanged + GC_FLOATINGOBJECT_NS, function (event, data) {
	                var propertyName = data.propertyName;
	                if (propertyName === WIDTH || propertyName === IS_VISIBLE) {
	                    updateFloatingObjectsLayout(floatingobjectModel);
	                }
	            });
	            sheet._bind(Events.RowChanged + GC_FLOATINGOBJECT_NS, function (event, data) {
	                var propertyName = data.propertyName;
	                if (propertyName === HEIGHT || propertyName === IS_VISIBLE) {
	                    updateFloatingObjectsLayout(floatingobjectModel);
	                }
	            });
	            sheet._bind(Events.ColumnWidthChanged + GC_FLOATINGOBJECT_NS, function () {
	                updateFloatingObjectsLayout(floatingobjectModel);
	            });
	            sheet._bind(Events.RowHeightChanged + GC_FLOATINGOBJECT_NS, function () {
	                updateFloatingObjectsLayout(floatingobjectModel);
	            });
	        }
	
	        function updateFloatingObjectsLayout(floatingobjectModel) {
	            var sheet = floatingobjectModel.sheet();
	           
	            floatingobjectModel.isNeedToUpdateLayout = true;
	            sheet._paintFloatingObject && sheet._paintFloatingObject(sheet._getBounds());
	        }
	
	       
	        function containsInRect(x, y, rect) {
	            return rect && rect.width > 0 && rect.height > 0 && (rect.x === x || rect.y === y || rect.contains(x, y));
	        }
	
	        var proto = {
	            sheet: defProperty('sheet', keyword_undefined),
	            _adjustFloatingObjectZIndex: function (offset) {
	                this._all().forEach(function (floatingObject) {
	                    adjustFloatingObjectZIndex(floatingObject, offset);
	                });
	            },
	            _add: function (item, fixSameName) {
	                var self = this, sheet = self.sheet();
	                sheet.suspendPaint();
	                var name = item.name();
	                if (!name) {
	                    throw new Error(sR().Exp_FloatingObjectNameEmptyError);
	                }
	                if (self._storage[name]) {
	                    if (fixSameName) {
	                        name = self._generateFloatingObjectName(name + "__");
	                        item.name(name);
	                    } else {
	                        throw new Error(sR().Exp_FloatingObjectHasSameNameError);
	                    }
	                }
	                sheet._modelManager._saveFloatingObjectCollectionChange();
	
	                self._adjustFloatingObjectZIndex(-1);
	                item.sheet(sheet);
	                self._storage[name] = item;
	                sheet._onAddFloatingObject(item);
	                sheet.resumePaint();
	            },
	            _get: function (name) {
	                return this._storage[name];
	            },
	            _remove: function (name, needEvent) {
	                var self = this;
	                if (name) {
	                    var sheet = self.sheet(), item = self._get(name);
	                    sheet._modelManager._saveFloatingObjectCollectionChange();
	
	                    sheet.suspendPaint();
	                    if (needEvent) {
	                        var removingArgs = {
	                            sheet: sheet,
	                            sheetName: sheet.name(),
	                            floatingObject: item,
	                            cancel: false
	                        };
	                        sheet._trigger(Events.FloatingObjectRemoving, removingArgs);
	                        if (removingArgs.cancel === false) {
	                           
	                            delete self._storage[name];
	                            sheet._trigger(Events.FloatingObjectRemoved, {
	                                sheet: sheet,
	                                sheetName: sheet.name(),
	                                floatingObject: item
	                            });
	                        }
	                    } else {
	                        delete self._storage[name];
	                    }
	                    sheet.resumePaint();
	                    return true;
	                }
	                return false;
	            },
	            _rename: function (oldName, newName) {
	                var self = this, sheet = self.sheet();
	                sheet.suspendPaint();
	                if (!newName) {
	                    throw new Error(sR().Exp_FloatingObjectNameEmptyError);
	                }
	                if (self._storage[newName]) {
	                    throw new Error(sR().Exp_FloatingObjectHasSameNameError);
	                }
	                var floatingObject = self._storage[oldName];
	                delete self._storage[oldName];
	                self._storage[newName] = floatingObject;
	                floatingObject.onNameChanged && floatingObject.onNameChanged(oldName, newName);
	                sheet.resumePaint();
	            },
	            _clear: function (typeName) {
	                var self = this,
	                    sheet = self.sheet();
	                sheet.suspendPaint();
	                $.each(this._storage, function (index, floatingObject) {
	                    if (!typeName || typeName === floatingObject._kind) {
	                        self._remove(floatingObject.name());
	                    }
	                });
	                sheet.resumePaint();
	            },
	            _all: function (typeName) {
	                var result = [];
	                $.each(this._storage, function (index, floatingObject) {
	                    if (!typeName || typeName === floatingObject._kind) {
	                        result.push(floatingObject);
	                    }
	                });
	                return result;
	            },
	            _zIndex: function (name, zIndex) {
	                var isGetValue = isNaN(zIndex);
	                var floatingObject = this._get(name);
	                if (floatingObject) {
	                    if (isGetValue) {
	                        return getFloatingObjectZIndex(floatingObject);
	                    }
	                   
	                    updateFloatingObjectZIndex(floatingObject, zIndex);
	                }
	
	                if (isGetValue) {
	                    return -1;
	                }
	            },
	            toJSON: function () {
	                var jsonData = [];
	                this._all().forEach(function (floatingObject) {
	                    if (floatingObject instanceof FloatingObject && floatingObject._needSaveJsonToFloatingObjects()) { 
	                        var jsData = floatingObject.toJSON();
	                        var zIndex = floatingObject._zIndex;
	                        if (!isNaN(zIndex)) {
	                            jsData.zIndex = zIndex;
	                        }
	                        jsonData.push(jsData);
	                    }
	                });
	                return jsonData;
	            },
	            fromJSON: function (jsData, noSchema) {
	                var self = this;
	                if (!jsData || jsData.length === 0) {
	                    return;
	                }
	                for (var i = 0; i < jsData.length; i++) {
	                    var item = jsData[i];
	                    var floatingObject;
	                    if (item) {
	                        var FloatingObjectType, floatingObjectType = item.floatingObjectType,
	                            typeName = util._isDefined(floatingObjectType) ? floatingObjectType + '' : item.typeName;
	                        if (typeName === '0' ) {
	                            FloatingObjectType = FloatingObject;
	                        } else if (typeName === '1' ) {
	                            FloatingObjectType = FloatingObjects.Picture;
	                        } else {           
	                            FloatingObjectType = Sheets.getTypeFromString(typeName);
	                        }
	                        if (FloatingObjectType) {
	                            floatingObject = new FloatingObjectType();
	                            floatingObject.fromJSON(item, noSchema);
	                            self._add(floatingObject);
	                            var zIndex = item.zIndex;
	                            if (!isNullOrUndefined(zIndex)) {
	                                floatingObject._zIndex = zIndex;
	                            }
	                        }
	                    }
	                }
	            },
	            _dispose: function () {
	                $(DOCUMENT.body).unbind('scroll' + GC_FLOATINGOBJECT_NS);
	                var sheet = this.sheet();
	               
	                if (sheet) {
	                    sheet._unbind(Events.ColumnChanged + GC_FLOATINGOBJECT_NS);
	                    sheet._unbind(Events.RowChanged + GC_FLOATINGOBJECT_NS);
	                    sheet._unbind(Events.ColumnWidthChanged + GC_FLOATINGOBJECT_NS);
	                    sheet._unbind(Events.RowHeightChanged + GC_FLOATINGOBJECT_NS);
	                }
	            },
	            hitTest: function (x, y, ignoreProtected) {
	                var sheet = this.sheet(), layout = sheet._getSheetLayout();
	                var ret = keyword_null;
	                if (layout) {
	                    for (var r = 0; r <= 2; r++) {
	                        for (var c = 0; c <= 2; c++) {
	                            var rect = layout._viewportRect(r, c);
	                            if (!rect || !rect.contains(x, y)) {
	                                continue;
	                            }
	                            var floatingObjectRenderManager = sheet._getFloatingObjectRenderManager && sheet._getFloatingObjectRenderManager(r, c);
	                            if (floatingObjectRenderManager) {
	                                floatingObjectRenderManager._renders.each(function (render) { 
	                                    var floatingObject = render._floatingObject;
	                                    if (floatingObject && floatingObject.isVisible()
	                                        && (sheet._canSelectFloatingObject(floatingObject)
	                                            || ignoreProtected)
	                                        && containsInRect(x, y, render._containerRect)) {
	                                        if (!ret) {
	                                            ret = {x: x, y: y, floatingObject: floatingObject, _render: render};
	                                        } else if (getFloatingObjectZIndex(ret.floatingObject) < getFloatingObjectZIndex(floatingObject)) {
	                                            ret.floatingobject = floatingObject;
	                                        }
	                                    }
	                                });
	                            }
	                            if (ret) {
	                                return ret;
	                            }
	                        }
	                    }
	                }
	                return ret;
	            },
	            _generateFloatingObjectName: function (prefix) {
	                if (!prefix) {
	                    prefix = 'FloatingObject';
	                }
	                var len = 1;
	                var newName = prefix + len.toString();
	                while (this._get(newName)) {
	                    len++;
	                    newName = prefix + len.toString();
	                }
	                return newName;
	            }
	        };
	
	        $.extend(FloatingObjectModel.prototype, proto);
	        return FloatingObjectModel;
	    })();
	
	    function updateFloatingObjectSize(floatingobject) {
	        var sheet = floatingobject.sheet();
	        if (!sheet) {
	            return;
	        }
	
	        function updateSize(startFn, endFn, totalFn, sizeFn, startOffsetFn, endOffsetFn, cacheID) {
	            var newValue = 0, startRow = startFn.call(floatingobject), endRow = endFn.call(floatingobject);
	            newValue = totalFn.call(floatingobject, sheet, startRow, endRow);
	            if (startRow === endRow) {
	                updateStartOffset.call(floatingobject, endFn, endOffsetFn, sizeFn, false, cacheID);
	                newValue = endOffsetFn.call(floatingobject) - startOffsetFn.call(floatingobject);
	            } else {
	                var startRowHeight = sizeFn.call(sheet, startRow, 3 );
	                if (startRowHeight > 0) {
	                    newValue -= startOffsetFn.call(floatingobject);
	                }
	                updateStartOffset.call(floatingobject, endFn, endOffsetFn, sizeFn, false, cacheID);
	                newValue += endOffsetFn.call(floatingobject);
	            }
	
	            return newValue;
	        }
	
	        var newHeight = updateSize(floatingobject[START_ROW], floatingobject[END_ROW], getTotalHeight, sheet.getRowHeight, floatingobject[START_ROW_OFFSET], floatingobject[END_ROW_OFFSET], END_ROW_OFFSET);
	        var newWidth = updateSize(floatingobject[START_COLUMN], floatingobject[END_COLUMN], getTotalWidth, sheet.getColumnWidth, floatingobject[START_COLUMN_OFFSET], floatingobject[END_COLUMN_OFFSET], END_COLUMN_OFFSET);
	
	        if (newWidth < 0) {
	            newWidth = 0;
	        }
	        if (newHeight < 0) {
	            newHeight = 0;
	        }
	
	        var oldWidth = floatingobject[WIDTH]();
	        if (oldWidth !== newWidth) {
	            floatingobject[WIDTH](newWidth, false);
	            floatingobject.onPropertyChanged(WIDTH, newWidth, oldWidth);
	        }
	        var oldHeight = floatingobject[HEIGHT]();
	        if (oldHeight !== newHeight) {
	            floatingobject[HEIGHT](newHeight, false);
	            floatingobject.onPropertyChanged(HEIGHT, newHeight, oldHeight);
	        }
	    }
	
	    var borderStyles = ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'];
	
	    function _isBorderStyleWork(style) {
	        return borderStyles.indexOf(style) >= 0;
	    }
	
	    function checkFloatingObjectName(newName) {
	        if (isDefined(newName) && (typeof newName !== 'string' || newName === '')) {
	            throw new Error(sR().Exp_FloatingObjectNameEmptyError);
	        }
	        var _this = this;
	        if (newName === _this.name()) {
	            return false;
	        }
	        var sheet = _this.sheet();
	        if (sheet) {
	            var floatingobject = sheet._floatingObjectModel._get(newName);
	            return !floatingobject;
	        }
	       
	        return true;
	    }
	
	    var FloatingObject = (function () {
	        var ps = [NAME, X, Y, WIDTH, HEIGHT, START_ROW, START_ROW_OFFSET, START_COLUMN, START_COLUMN_OFFSET, END_ROW, END_ROW_OFFSET, END_COLUMN, END_COLUMN_OFFSET, CAN_PRINT, IS_SELECTED, IS_LOCKED, IS_VISIBLE, DYNAMIC_MOVE, DYNAMIC_SIZE, FIXED_POSITION, ALLOW_RESIZE, ALLOW_MOVE];
	        var propertiesInfo = [
	            ['sheet', keyword_null, function () {
	                updateFloatingObjectCoorinates(this);
	            }],
	            [NAME, keyword_undefined, function (newName, oldName) {
	                var self = this;
	                var sheet = self.sheet();
	                if (sheet) {
	                    var model = sheet._floatingObjectModel;
	                    var oldFloatingObject = model._get(oldName);
	                   
	                   
	                   
	                   
	                   
	                    if (oldFloatingObject === self) {
	                        model._rename(oldName, newName);
	                    }
	                }
	                self.onPropertyChanged('name', newName, oldName);
	            }, checkFloatingObjectName],
	            [X, 0, adjustSizeLocationCallback(X, false)],
	            [Y, 0, adjustSizeLocationCallback(Y, false)],
	            [HEIGHT, 0, adjustSizeLocationCallback(HEIGHT, true)],
	            [WIDTH, 0, adjustSizeLocationCallback(WIDTH, true)],
	            [START_ROW, keyword_undefined, updateLocationRefreshCallback(START_ROW)],
	            [START_ROW_OFFSET, 0, updateLocationRefreshCallback(START_ROW_OFFSET)],
	            [START_COLUMN, keyword_undefined, updateLocationRefreshCallback(START_COLUMN)],
	            [START_COLUMN_OFFSET, 0, updateLocationRefreshCallback(START_COLUMN_OFFSET)],
	            [END_ROW, keyword_undefined, updateSizeRefreshCallback(END_ROW)],
	            [END_ROW_OFFSET, 0, updateSizeRefreshCallback(END_ROW_OFFSET)],
	            [END_COLUMN, keyword_undefined, updateSizeRefreshCallback(END_COLUMN)],
	            [END_COLUMN_OFFSET, 0, updateSizeRefreshCallback(END_COLUMN_OFFSET)],
	            [IS_SELECTED, false, propertyRefreshCallback(IS_SELECTED)],
	            [IS_LOCKED, true, propertyChangedCallback(IS_LOCKED)],
	            [CAN_PRINT, true, propertyChangedCallback(CAN_PRINT)],
	            [IS_VISIBLE, true, propertyRefreshCallback(IS_VISIBLE)],
	            [DYNAMIC_MOVE, true, function (value, old) {
	                propertyChangedCallback(DYNAMIC_MOVE).call(this, value, old);
	            }, function (value) {
	                if (typeof value !== 'boolean') {
	                    return false;
	                }
	                if (!value) {
	                    this.dynamicSize(false, false);
	                }
	                return (!this.fixedPosition());
	            }],
	            [DYNAMIC_SIZE, true, function (value, old) {
	                propertyChangedCallback(DYNAMIC_SIZE).call(this, value, old);
	            }, function (value) {
	                return (typeof value === 'boolean' && this.dynamicMove() && !this.fixedPosition());
	            }],
	            [FIXED_POSITION, false, function (value, oldValue) {
	                var self = this;
	                if (value) {
	                    self.dynamicMove(false, false);
	                    self.dynamicSize(false, false);
	                }
	                self.onPropertyChanged(FIXED_POSITION, value, oldValue);
	            }],
	            [ALLOW_RESIZE, true, propertyRefreshCallback(ALLOW_RESIZE)],
	            [ALLOW_MOVE, true, propertyRefreshCallback(ALLOW_MOVE)]
	        ];
	
	       
	        
	        function FloatingObject(name, x, y, width, height) {
	            var self = this;
	            self._cacheOffset = {
	                startRowOffset: keyword_undefined,
	                startColumnOffset: keyword_undefined,
	                endRowOffset: keyword_undefined,
	                endColumnOffset: keyword_undefined
	            };
	           
	            
	            self.typeName = '0' ;
	            self._kind = '0' ;//Represents the kind string used for distinguishing floating object kind in FloatingObjectModel.
	            self.name(name);
	            self.x(x ? x : 0, false);
	            self.y(y ? y : 0, false);
	            self[WIDTH](width ? width : 0, false);
	            self[HEIGHT](height ? height : 0, false);
	            self._host = [];
	            self._needRefresh = false;
	            self._zIndexAuto = CSS_ZINDEXDEFAULTVALUE; 
	        }
	
	        function propertyChangedCallback(propertyName) {
	            return function (value, oldValue) {
	                this.onPropertyChanged(propertyName, value, oldValue);
	            };
	        }
	
	        function adjustSizeLocationCallback(propertyName, needAdjustSize) {
	            return function (value, oldValue) {
	                var self = this, sheet = self.sheet();
	                if (sheet) {
	                    if (needAdjustSize) {
	                        adjustSize(self);
	                    }
	                    adjustPosition(self);
	                    updateCoverRange(self);
	
	                    sheet._invalidate();
	                }
	                self.onPropertyChanged(propertyName, value, oldValue);
	            };
	        }
	
	        function updateOnAdd(startFn, endFn, index, count) {
	            var self = this;
	            var s = startFn.call(self), e = endFn.call(self);
	            if (index <= s) {
	                if (self.dynamicMove()) {
	                    startFn.call(self, s + count);
	                    endFn.call(self, e + count);
	                }
	            } else if (index < e && self.dynamicSize()) {
	                endFn.call(self, e + count);
	            }
	        }
	
	        function updateOnRemove(startFn, startOffsetFn, endFn, endOffsetFn, index, count, bottomRemoveRow) {
	            var self = this;
	            var s = startFn.call(self), e = endFn.call(self);
	            if (index <= s) {
	                if (bottomRemoveRow < s) {
	                    if (self.dynamicMove()) {
	                        startFn.call(self, s - count);
	                        endFn.call(self, e - count);
	                    }
	                } else if (bottomRemoveRow < e) {
	                    var removeCount = bottomRemoveRow - s + 1;
	                    var newCount = (e - s + 1) - removeCount;
	                    if (self.dynamicMove()) {
	                        startFn.call(self, index);
	                        startOffsetFn.call(self, 0);
	                    }
	                    if (self.dynamicSize()) {
	                        endFn.call(self, index + newCount - 1);
	                    }
	                }
	            } else if (index <= e) {
	                if (bottomRemoveRow < e) {
	                    if (self.dynamicSize()) {
	                        endFn.call(self, e - count);
	                    }
	                } else if (self.dynamicSize()) {
	                    endFn.call(self, index);
	                    endOffsetFn.call(self, 0);
	                }
	            }
	        }
	
	        function adjustSize(floatingobject) {
	            var sheetHeight = getSheetHeight(floatingobject, floatingobject[HEIGHT]());
	            var sheetWidth = getSheetWidth(floatingobject, floatingobject[WIDTH]());
	            if (floatingobject[WIDTH]() > sheetWidth) {
	                floatingobject[WIDTH](sheetWidth, false);
	            }
	            if (floatingobject[HEIGHT]() > sheetHeight) {
	                floatingobject[HEIGHT](sheetHeight, false);
	            }
	        }
	
	        function adjustPosition(floatingobject) {
	            var right = floatingobject.x() + floatingobject[WIDTH]();
	            var sheetWidth = getSheetWidth(floatingobject, right);
	            if (right > sheetWidth) {
	                floatingobject.x(Math_max(0, sheetWidth - floatingobject[WIDTH]()), false);
	            }
	            if (floatingobject.x() < 0) {
	                floatingobject.x(0, false);
	            }
	            var bottom = floatingobject.y() + floatingobject[HEIGHT]();
	            var sheetHeight = getSheetHeight(floatingobject, bottom);
	            if (bottom > sheetHeight) {
	                floatingobject.y(Math_max(0, sheetHeight - floatingobject[HEIGHT]()), false);
	            }
	            if (floatingobject.y() < 0) {
	                floatingobject.y(0, false);
	            }
	        }
	
	        function updateFloatingObjectCoorinates(floatingobject) {
	            adjustSize(floatingobject);
	            adjustPosition(floatingobject);
	            var srow = floatingobject[START_ROW](), scol = floatingobject[START_COLUMN]();
	            if (!isNullOrUndefined(srow) && !isNullOrUndefined(scol)) {
	                updateFloatingObjectLocation(floatingobject);
	            } else {
	                updateStartPosition(floatingobject);
	            }
	            var erow = floatingobject[END_ROW](), ecol = floatingobject[END_COLUMN]();
	            if (!isNullOrUndefined(erow) && !isNullOrUndefined(ecol)) {
	                updateFloatingObjectSize(floatingobject);
	            } else {
	                updateEndPosition(floatingobject);
	            }
	        }
	
	        function getSheetHeight(floatingobject, max) {
	            var sheet = floatingobject.sheet();
	            if (!sheet) {
	                return MAX_NUMBER;
	            }
	            var rowCount = sheet.getRowCount();
	            return getTotalHeight(sheet, 0, rowCount, max);
	        }
	
	        function getSheetWidth(floatingobject, max) {
	            var sheet = floatingobject.sheet();
	            if (!sheet) {
	                return MAX_NUMBER;
	            }
	            var columnCount = sheet.getColumnCount();
	            return getTotalWidth(sheet, 0, columnCount, max);
	        }
	
	        function updateCoverRange(floatingobject) {
	            updateStartPosition(floatingobject);
	            updateEndPosition(floatingobject);
	        }
	
	        var proto = {
	            constructor: FloatingObject,
	            position: function (value) {
	                var self = this, sheet = self.sheet();
	                if (arguments.length === 0) {
	                    return new Point(self.x(), self.y());
	                }
	                var oldX = self.x(), oldY = self.y();
	                if (isType(value, Point) && (oldX !== value.x || oldY !== value.y)) {
	                    self.x(value.x, false);
	                    self.y(value.y, false);
	
	                    adjustPosition(self);
	                    updateCoverRange(self);
	
	                    if (sheet) {
	                        sheet._invalidate();
	                    }
	                    self.onPropertyChanged('position', value, new Point(oldX, oldY));
	                }
	                return self;
	            },
	           
	            
	            content: defProperty(CONTENT, keyword_null, propertyRefreshCallback(CONTENT)),
	           
	            
	            cloneContent: function () {
	                var content = this.content();
	                if (content) {
	                    var clonedElement;
	                    if (content.cloneNode) {
	                        clonedElement = content.cloneNode(true);
	                    } else {
	                        var div = createElement(DIV);
	                        div.innerHTML = content.outerHTML;
	                        clonedElement = div.firstChild;
	                    }
	                    return $(clonedElement).removeAttr('id')[0];
	                }
	                return keyword_null;
	            },
	            refreshContent: function (contentContainer) {
	                var self = this;
	                if (self._needRefresh && contentContainer) {
	                    var $content = $(contentContainer);
	                    $content.empty();
	                    var child = self.cloneContent(), cssWidth = PERCENT_100, cssHeight = PERCENT_100,
	                        styleWidth = '', styleHeight = '';
	                    if (child && child.style) {
	                        styleWidth = child.style.width;
	                        styleHeight = child.style.height;
	                    }
	                    if (styleWidth !== '') {
	                        cssWidth = styleWidth;
	                    }
	                    if (styleHeight !== '') {
	                        cssHeight = styleHeight;
	                    }
	                    if (child !== keyword_null) {
	                        $(child).css({width: cssWidth, height: cssHeight})
	                            .addClass(CSS_CLASS_FLOATINGOBJECT_BACKGROUND_COVER)
	                            .addClass(CSS_CLASS_NONE_USER_SELECT)
	                            .attr(UNSELECTABLE, ON)
	                            .appendTo(contentContainer);
	                        $content.css(BACKGROUND, '');
	                    } else {
	                        $content.css(BACKGROUND, '');
	                    }
	                    self._needRefresh = false;
	                }
	            },
	            toJSON: function () {
	                var self = this, jsData = toJsonFn.call(self, ps);
	               
	                var cacheOffset = self._cacheOffset;
	                for (var p in cacheOffset) {
	                    if (!isNullOrUndefined(cacheOffset[p])) {
	                        jsData[p] = cacheOffset[p];
	                    }
	                }
	                jsData['typeName'] = self.typeName;
	                jsData[CONTENT] = $(createElement(DIV)).append(self.cloneContent()).html();
	                return jsData;
	            },
	            fromJSON: function (jsData, noSchema) {
	                if (!jsData) {
	                    return;
	                }
	                var self = this;
	                self._loading = true;
	                fromJsonFn.call(this, ps, jsData, noSchema);
	
	               
	               
	                if (isNullOrUndefined(jsData[START_ROW])) {
	                    updateCoverRange(self);
	                }
	
	                if (jsData.content) {
	                    var contentContainer = createElement(DIV);
	                    contentContainer.innerHTML = jsData.content;
	                    self.content($(contentContainer.firstChild)[0]);
	                }
	                self._loading = keyword_undefined;
	            },
	            clone: function () {
	                var self = this,
	                    floatingObjectType = Sheets.getTypeFromString(self.typeName),
	                    floatingObject = floatingObjectType ? new floatingObjectType() : new FloatingObject();
	                var jsonString = JSON.stringify(self.toJSON());
	                floatingObject.fromJSON(JSON.parse(jsonString));
	                floatingObject.content(self.cloneContent());
	                return floatingObject;
	            },
	            onPropertyChanged: function (name, value, oldValue) {
	                var self = this;
	                if (self._loading) {
	                    return;
	                }
	                var sheet = self.sheet();
	                if (sheet) {
	                    sheet._modelManager._saveFloatingObjectPropertyChange(self, name, oldValue);
	
	                    self._trigger({
	                        sheet: sheet,
	                        sheetName: sheet.name(),
	                        floatingObject: self,
	                        propertyName: name
	                    });
	                }
	            },
	            _trigger: function (args) {
	                var sheet = this.sheet();
	                if (sheet) {
	                    sheet._trigger(Events.FloatingObjectChanged, args);
	                    if (args.propertyName === IS_SELECTED) {
	                        var selectionArgs = {
	                            sheet: args.sheet,
	                            sheetName: args.sheetName,
	                            floatingObject: args.floatingObject
	                        };
	                        sheet._trigger(Events.FloatingObjectSelectionChanged, selectionArgs);
	                    }
	                }
	            },
	            _onRowsAdded: function (row, rowCount) {
	                var self = this;
	                row = Math_ceil(row);
	                rowCount = Math_ceil(rowCount);
	                updateOnAdd.call(self, self[START_ROW], self[END_ROW], row, rowCount);
	            },
	            _onRowsRemoved: function (row, rowCount) {
	                var self = this,
	                    bottomRemoveRow = row + rowCount - 1;
	                updateOnRemove.call(self, self[START_ROW], self[START_ROW_OFFSET], self[END_ROW], self[END_ROW_OFFSET], row, rowCount, bottomRemoveRow);
	            },
	            _onColumnsAdded: function (column, columnCount) {
	                var self = this;
	                column = Math_ceil(column);
	                columnCount = Math_ceil(columnCount);
	                updateOnAdd.call(self, self[START_COLUMN], self[END_COLUMN], column, columnCount);
	            },
	            _onColumnsRemoved: function (column, columnCount) {
	                var self = this;
	                column = Math_ceil(column);
	                columnCount = Math_ceil(columnCount);
	                var rightRemovedColumn = column + columnCount - 1;
	                updateOnRemove.call(self, self[START_COLUMN], self[START_COLUMN_OFFSET], self[END_COLUMN], self[END_COLUMN_OFFSET], column, columnCount, rightRemovedColumn);
	            },
	           
	            
	            getHost: function (rowViewportIndex, columnViewportIndex) {
	                var hostArray = this._host.concat();
	
	               
	                if (!isNullOrUndefined(rowViewportIndex) && !isNullOrUndefined(columnViewportIndex)) {
	                    for (var i = 0; i < hostArray.length; i++) {
	                        var host = hostArray[i];
	                        if (host.rowViewportIndex === rowViewportIndex && host.columnViewportIndex === columnViewportIndex) {
	                            return host;
	                        }
	                    }
	                    return keyword_null;
	                }
	
	                return hostArray;
	            },
	            _addContainer: function (contentContainer, rowViewportIndex, columnViewportIndex) {
	                var host = this._host;
	                if (contentContainer && host.indexOf(contentContainer) < 0) {
	                    contentContainer.rowViewportIndex = rowViewportIndex;
	                    contentContainer.columnViewportIndex = columnViewportIndex;
	                    host.push(contentContainer);
	                }
	            },
	            _removeContainer: function (contentContainer) {
	                var host = this._host,
	                    index = host.indexOf(contentContainer);
	                if (index >= 0) {
	                    host.splice(index, 1);
	                }
	            },
	            _createContentContainer: function (rowViewportIndex, columnViewportIndex) {
	                var contentContainer = createElement(DIV);
	                $(contentContainer).addClass(NO_USER_SELECT)
	                    .addClass(CSS_CLASS_FLOATINGOBJECT_CONTENT_CONTAINER)
	                    .attr(UNSELECTABLE, ON)
	                    .css(POSITION, ABSOLUTE);
	                var content = this.cloneContent(), cssWidth = PERCENT_100, cssHeight = PERCENT_100, styleWidth = '',
	                    styleHeight = '';
	                var contentStyle = content && content.style;
	                if (contentStyle) {
	                    styleWidth = contentStyle.width;
	                    styleHeight = contentStyle.height;
	                }
	                if (styleWidth !== '') {
	                    cssWidth = styleWidth;
	                }
	                if (styleHeight !== '') {
	                    cssHeight = styleHeight;
	                }
	                if (content !== keyword_null) {
	                    $(content).css({
	                        width: cssWidth,
	                        height: cssHeight
	                    }).addClass(CSS_CLASS_FLOATINGOBJECT_BACKGROUND_COVER).addClass(NO_USER_SELECT)
	                        .attr(UNSELECTABLE, ON)
	                        .appendTo(contentContainer);
	                }
	                this._addContainer(contentContainer, rowViewportIndex, columnViewportIndex);
	                return contentContainer;
	            },
	            _needSaveJsonToFloatingObjects: function () {
	                return true;
	            },
	            _dispose: function (clearCache) {      
	            },
	            _updateLocationSize: function () {
	                updateFloatingObjectLocation(this);
	                updateFloatingObjectSize(this);
	            }
	        };
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	        $.each(propertiesInfo, function (p, v) {
	            proto[v[0]] = defProperty(v[0], v[1], v[2], v[3]);
	        });
	        FloatingObject.prototype = proto;
	
	        return FloatingObject;
	    })();
	
	    var FloatingObjectRender = (function () {
	        var START_X = START + 'X', START_Y = START + 'Y', START_WIDTH = START + 'Width',
	            START_HEIGHT = START + 'Height',
	            END_X = END + 'X', END_Y = END + 'Y',
	            START_TOP_ROW = START + 'TopRow', START_LEFT_COLUMN = START + 'LeftColumn',
	            LEFT = 'left', CENTER = 'center', RIGHT = 'right',
	            TOP = 'top', TOP_LEFT = TOP + LEFT, TOP_CENTER = TOP + CENTER, TOP_RIGHT = TOP + RIGHT,
	            MIDDLE = 'middle', MIDDLE_LEFT = MIDDLE + LEFT, MIDDLE_RIGHT = MIDDLE + RIGHT,
	            BOTTOM = 'bottom', BOTTOM_LEFT = BOTTOM + LEFT, BOTTOM_CENTER = BOTTOM + CENTER,
	            BOTTOM_RIGHT = BOTTOM + RIGHT,
	            DASH_RESIZE = '-resize', CURSOR = 'cursor',
	            MOUSE_MOVE = 'mousemove', MOUSE_UP = 'mouseup';
	
	        function FloatingObjectRender(floatingObject, sheet) {
	            this._srcCache = '';
	            var self = this;
	            self._floatingObject = floatingObject;
	            self.name = floatingObject ? floatingObject.name() : '';
	            self._sheet = sheet;
	            self._isMouseCapture = false;
	            self._isResizeIndicatorDisplayed = false;
	        }
	
	        Sheets._defineFeature(FloatingObjectRender);
	
	        function getFloatingObjectResizingRect(floatingObjectRender, direction, point) {
	            var resizeInfo = floatingObjectRender._resizeInfo, x, y, width, height;
	            switch (direction) {
	                case TOP_LEFT:
	                    x = Math_min(resizeInfo[START_X] + resizeInfo[START_WIDTH], point.x);
	                    y = Math_min(resizeInfo[START_Y] + resizeInfo[START_HEIGHT], point.y);
	                    width = Math_abs(point.x - resizeInfo[START_X] - resizeInfo[START_WIDTH]);
	                    height = Math_abs(point.y - resizeInfo[START_Y] - resizeInfo[START_HEIGHT]);
	                    break;
	                case TOP_CENTER:
	                    x = resizeInfo[START_X];
	                    y = Math_min(resizeInfo[START_Y] + resizeInfo[START_HEIGHT], point.y);
	                    width = resizeInfo[START_WIDTH];
	                    height = Math_abs(point.y - resizeInfo[START_Y] - resizeInfo[START_HEIGHT]);
	                    break;
	                case TOP_RIGHT:
	                    x = Math_min(resizeInfo[START_X], point.x);
	                    y = Math_min(resizeInfo[START_Y] + resizeInfo[START_HEIGHT], point.y);
	                    width = Math_abs(point.x - resizeInfo[START_X]);
	                    height = Math_abs(point.y - resizeInfo[START_Y] - resizeInfo[START_HEIGHT]);
	                    break;
	                case MIDDLE_LEFT:
	                    x = Math_min(resizeInfo[START_X] + resizeInfo[START_WIDTH], point.x);
	                    y = resizeInfo[START_Y];
	                    width = Math_abs(point.x - resizeInfo[START_X] - resizeInfo[START_WIDTH]);
	                    height = resizeInfo[START_HEIGHT];
	                    break;
	                case MIDDLE_RIGHT:
	                    x = Math_min(resizeInfo[START_X], point.x);
	                    y = resizeInfo[START_Y];
	                    width = Math_abs(point.x - resizeInfo[START_X]);
	                    height = resizeInfo[START_HEIGHT];
	                    break;
	                case BOTTOM_LEFT:
	                    x = Math_min(resizeInfo[START_X] + resizeInfo[START_WIDTH], point.x);
	                    y = Math_min(resizeInfo[START_Y], point.y);
	                    width = Math_abs(point.x - resizeInfo[START_X] - resizeInfo[START_WIDTH]);
	                    height = Math_abs(point.y - resizeInfo[START_Y]);
	                    break;
	                case BOTTOM_CENTER:
	                    x = resizeInfo[START_X];
	                    y = Math_min(resizeInfo[START_Y], point.y);
	                    width = resizeInfo[START_WIDTH];
	                    height = Math_abs(point.y - resizeInfo[START_Y]);
	                    break;
	                case BOTTOM_RIGHT:
	                    x = Math_min(resizeInfo[START_X], point.x);
	                    y = Math_min(resizeInfo[START_Y], point.y);
	                    width = Math_abs(point.x - resizeInfo[START_X]);
	                    height = Math_abs(point.y - resizeInfo[START_Y]);
	                    break;
	            }
	            return new Rect(x, y, width, height);
	        }
	
	        function getHTMLElementBounds(element) {
	            var $element = $(element);
	            var position = $element.position();
	            return new Rect(position.left, position.top, $element[WIDTH](), $element[HEIGHT]());
	        }
	
	        function attachMoveResizeDivToContainer(moveResizeDiv, container, x, y, width, height) {
	            $(moveResizeDiv)
	                .css([TOP, LEFT, WIDTH, HEIGHT], [[y - 1], [x - 1], width, height])
	                .addClass(CSS_CLASS_FLOATINGOBJECT_MOVING_DIV).appendTo(container);
	        }
	
	        function hitTest(floatingObjectRender, resizeDirection) {
	            if (!floatingObjectRender._layout) {
	                return keyword_null;
	            }
	            var info = {
	                inMoving: false
	            };
	
	            if (!resizeDirection) {
	                info.inMoving = true;
	            }
	
	            return info;
	        }
	
	        function getViewportRect(floatingObjectRender) {
	            var self = floatingObjectRender,
	                sheet = self._sheet,
	                rowViewportIndex = self._rowViewportIndex,
	                columnViewportIndex = self._columnViewportIndex;
	            var frozenTrailingRowCount = sheet.frozenTrailingRowCount();
	            var frozenTrailingColumnCount = sheet.frozenTrailingColumnCount();
	            var layout = sheet._getSheetLayout(), rect = layout._viewportRect(rowViewportIndex, columnViewportIndex),
	                topRow, bottomRow, leftColumn, rightColumn, tempRect,
	                floatingObject = self._floatingObject, startRow = floatingObject[START_ROW](),
	                startColumn = floatingObject[START_COLUMN](), endRow = floatingObject[END_ROW](),
	                endColumn = floatingObject[END_COLUMN](),
	                frozenRowCount = sheet.frozenRowCount(), frozenColCount = sheet.frozenColumnCount(),
	                frozenTrailingRow = sheet.getRowCount(3 ) - frozenTrailingRowCount - 1,
	                frozenTrailingColumn = sheet.getColumnCount(3 ) - frozenTrailingColumnCount - 1;
	
	            if (rowViewportIndex === VIEWPORTINDEX) {
	                if (frozenRowCount > 0) {
	                    topRow = sheet.getViewportTopRow(rowViewportIndex);
	                   
	                    if (startRow < frozenRowCount || topRow === frozenRowCount) {
	                        rect.y -= layout._frozenHeight;
	                        rect[HEIGHT] += layout._frozenHeight;
	                    }
	                }
	                if (frozenTrailingRowCount > 0) {
	                    bottomRow = sheet.getViewportBottomRow(rowViewportIndex);
	                   
	                    if (endRow > frozenTrailingRow && bottomRow === frozenTrailingRow) {
	                        rect[HEIGHT] += layout._frozenTrailingHeight;
	                    }
	                }
	            } else if (rowViewportIndex === VIEWPORTINDEX - 1) {
	                topRow = sheet.getViewportTopRow(rowViewportIndex + 1);
	               
	                if (endRow >= topRow || topRow === frozenRowCount) {
	                    tempRect = layout._viewportRect(rowViewportIndex + 1, columnViewportIndex);
	                    rect[HEIGHT] += tempRect[HEIGHT];
	                }
	            } else if (rowViewportIndex === VIEWPORTINDEX + 1) {
	                bottomRow = sheet.getViewportBottomRow(rowViewportIndex - 1);
	               
	                if (startRow <= bottomRow || bottomRow === frozenTrailingRow) {
	                    tempRect = layout._viewportRect(rowViewportIndex - 1, columnViewportIndex);
	                    rect.y = tempRect.y;
	                    rect[HEIGHT] += tempRect[HEIGHT];
	                }
	            }
	            if (columnViewportIndex === VIEWPORTINDEX) {
	                if (frozenColCount > 0) {
	                    leftColumn = sheet.getViewportLeftColumn(columnViewportIndex);
	                   
	                    if (startColumn < frozenColCount || leftColumn === frozenColCount) {
	                        rect.x -= layout._frozenWidth;
	                        rect[WIDTH] += layout._frozenWidth;
	                    }
	                }
	                if (sheet.frozenTrailingColumnCount() > 0) {
	                    rightColumn = sheet.getViewportRightColumn(columnViewportIndex);
	                   
	                    if (endColumn > frozenTrailingColumn || rightColumn === frozenTrailingColumn) {
	                        rect[WIDTH] += layout._frozenTrailingWidth;
	                    }
	                }
	            } else if (columnViewportIndex === VIEWPORTINDEX - 1) {
	                leftColumn = sheet.getViewportLeftColumn(columnViewportIndex + 1);
	               
	                if (endColumn >= leftColumn || leftColumn === frozenColCount) {
	                    tempRect = layout._viewportRect(rowViewportIndex, columnViewportIndex + 1);
	                    rect[WIDTH] += tempRect[WIDTH];
	                }
	            } else if (columnViewportIndex === VIEWPORTINDEX + 1) {
	                rightColumn = sheet.getViewportRightColumn(columnViewportIndex - 1);
	               
	                if (startColumn <= rightColumn || rightColumn === frozenTrailingColumn) {
	                    tempRect = layout._viewportRect(rowViewportIndex, columnViewportIndex - 1);
	                    rect.x = tempRect.x;
	                    rect[WIDTH] += tempRect[WIDTH];
	                }
	            }
	            return rect;
	        }
	
	        function doResizeContainerImp(div, offsetLeft, offsetTop, offsetWidth, offsetHeight) {
	            var bounds = getHTMLElementBounds(div);
	            $(div).css([TOP, LEFT, WIDTH, HEIGHT], [bounds.y + offsetTop, bounds.x + offsetLeft, bounds[WIDTH] + offsetWidth, bounds[HEIGHT] + offsetHeight]);
	        }
	
	        function doResizeContainer(floatingObjectRender) {
	            var self = floatingObjectRender;
	            if (self._mouseDownHittestInfo) {
	                var point = self._mousePosition,
	                    layout = getViewportRect(self),
	                    moveResizeDiv = self._moveResizeDiv,
	                    resizeInfo = self._resizeInfo,
	                    direction = resizeInfo.direction,
	                    rect;
	                point = new Point(point.x - layout.x, point.y - layout.y);
	
	                rect = getFloatingObjectResizingRect(self, direction, point);
	                resizeInfo.endX = rect.x;
	                resizeInfo.endY = rect.y;
	                resizeInfo.endWidth = rect[WIDTH];
	                resizeInfo.endHeight = rect[HEIGHT];
	                var bounds = getHTMLElementBounds(moveResizeDiv);
	                var offsetTop = rect.y - bounds.y;
	                var offsetLeft = rect.x - bounds.x;
	                var offsetWidth = rect[WIDTH] - bounds[WIDTH];
	                var offsetHeight = rect[HEIGHT] - bounds[HEIGHT];
	                doResizeContainerImp(moveResizeDiv, offsetLeft, offsetTop, offsetWidth, offsetHeight);
	                var attachedMoveResizeDivDict = self._attachedMoveResizeDivDict;
	                for (var item in attachedMoveResizeDivDict) {
	                    if (hasOwnProperty(attachedMoveResizeDivDict, item)) {
	                        var value = attachedMoveResizeDivDict[item];
	                        doResizeContainerImp(value.moveResizeDiv, offsetLeft, offsetTop, offsetWidth, offsetHeight);
	                    }
	                }
	            }
	        }
	
	        function doMouseWheel(floatingObjectRender, e) {
	            var sheet = floatingObjectRender._sheet;
	            if (sheet) {
	                var returnValue = sheet._mouseWheelDelegate(e);
	                if (returnValue === false) {
	                    util._cancelDefault(e);
	                }
	            }
	        }
	
	        function doCopyFloatingObject(floatingObjectRender) {
	            var self = floatingObjectRender, sheet = self._sheet;
	            var moveInfo = self._moveInfo;
	            if (moveInfo) {
	                var viewportOffsetHeight = getDistance(sheet, moveInfo[START_TOP_ROW], sheet.getViewportTopRow(self._rowViewportIndex), true);
	                var viewportOffsetWidth = getDistance(sheet, moveInfo[START_LEFT_COLUMN], sheet.getViewportLeftColumn(self._columnViewportIndex), false);
	
	                var offsetX = moveInfo[END_X] - moveInfo[START_X] + (moveInfo[END_X] > moveInfo[START_X] ? viewportOffsetWidth : -1 * viewportOffsetWidth);
	                var offsetY = moveInfo[END_Y] - moveInfo[START_Y] + (moveInfo[END_Y] > moveInfo[START_Y] ? viewportOffsetHeight : -1 * viewportOffsetHeight);
	               
	                if (offsetX === 0 && offsetY === 0) {
	                    return;
	                }
	                var names = [];
	                names.push(self._floatingObject.name());
	                var attachedMoveResizeDivDict = self._attachedMoveResizeDivDict;
	                for (var item in attachedMoveResizeDivDict) {
	                    if (hasOwnProperty(attachedMoveResizeDivDict, item)) {
	                        names.push(item);
	                    }
	                }
	
	                sheet._commandManager().execute({
	                    cmd: 'dragCopyFloatingObjects',
	                    sheetName: sheet.name(),
	                    floatingObjects: names,
	                    offsetX: offsetX,
	                    offsetY: offsetY
	                });
	            }
	        }
	
	        function doMoveFloatingObject(floatingObjectRender) {
	            var self = floatingObjectRender,
	                sheet = self._sheet,
	                moveInfo = self._moveInfo,
	                zoomFactor = sheet.zoom();
	            if (moveInfo) {
	                var viewportOffsetHeight = getDistance(sheet, moveInfo[START_TOP_ROW], sheet.getViewportTopRow(self._rowViewportIndex), true);
	                var viewportOffsetWidth = getDistance(sheet, moveInfo[START_LEFT_COLUMN], sheet.getViewportLeftColumn(self._columnViewportIndex), false);
	
	                var offsetX = moveInfo[END_X] - moveInfo[START_X] + (moveInfo[END_X] > moveInfo[START_X] ? viewportOffsetWidth : -1 * viewportOffsetWidth);
	                var offsetY = moveInfo[END_Y] - moveInfo[START_Y] + (moveInfo[END_Y] > moveInfo[START_Y] ? viewportOffsetHeight : -1 * viewportOffsetHeight);
	                offsetX = offsetX / zoomFactor;
	                offsetY = offsetY / zoomFactor;
	                var names = [];
	                names.push(self._floatingObject.name());
	                var attachedMoveResizeDivDict = self._attachedMoveResizeDivDict;
	                for (var item in attachedMoveResizeDivDict) {
	                    if (hasOwnProperty(attachedMoveResizeDivDict, item)) {
	                        names.push(item);
	                    }
	                }
	                sheet._commandManager().execute({
	                    cmd: 'moveFloatingObjects',
	                    sheetName: sheet.name(),
	                    floatingObjects: names,
	                    offsetX: offsetX,
	                    offsetY: offsetY
	                });
	            }
	        }
	
	        function doResizeFloatingObject(floatingObjectRender) {
	            var self = floatingObjectRender,
	                sheet = self._sheet,
	                zoomFactor = sheet.zoom(),
	                floatingObject = self._floatingObject,
	                resizeInfo = self._resizeInfo;
	            if (resizeInfo) {
	                var viewportOffsetHeight = getDistance(sheet, resizeInfo[START_TOP_ROW], sheet.getViewportTopRow(self._rowViewportIndex), true);
	                var viewportOffsetWidth = getDistance(sheet, resizeInfo[START_LEFT_COLUMN], sheet.getViewportLeftColumn(self._columnViewportIndex), false);
	
	                var offsetX = resizeInfo[END_X] - resizeInfo[START_X] + (resizeInfo[END_X] > resizeInfo[START_X] ? viewportOffsetWidth : -1 * viewportOffsetWidth);
	                offsetX = offsetX / zoomFactor;
	                var offsetY = resizeInfo[END_Y] - resizeInfo[START_Y] + (resizeInfo[END_Y] > resizeInfo[START_Y] ? viewportOffsetHeight : -1 * viewportOffsetHeight);
	                offsetY = offsetY / zoomFactor;
	                var offsetWidth = (resizeInfo.endWidth + viewportOffsetWidth) / zoomFactor - floatingObject[WIDTH]();
	                var offsetHeight = (resizeInfo.endHeight + viewportOffsetHeight) / zoomFactor - floatingObject[HEIGHT]();
	                var names = [];
	                names.push(floatingObject.name());
	                var attachedMoveResizeDivDict = self._attachedMoveResizeDivDict;
	                for (var item in attachedMoveResizeDivDict) {
	                    if (hasOwnProperty(attachedMoveResizeDivDict, item)) {
	                        names.push(item);
	                    }
	                }
	                sheet._commandManager().execute({
	                    cmd: 'resizeFloatingObjects',
	                    sheetName: sheet.name(),
	                    floatingObjects: names,
	                    offsetX: offsetX,
	                    offsetY: offsetY,
	                    offsetWidth: offsetWidth,
	                    offsetHeight: offsetHeight
	                });
	            }
	        }
	
	        function doMoveContainer(floatingObjectRender, startPoint, endPoint) {
	           
	            var self = floatingObjectRender, moveResizeDiv = self._moveResizeDiv;
	            if (moveResizeDiv) {
	                var x = endPoint.x - startPoint.x;
	                var y = endPoint.y - startPoint.y;
	                doMoveContainerImp(moveResizeDiv, x, y);
	                var attachedMoveResizeDivDict = self._attachedMoveResizeDivDict;
	                for (var item in attachedMoveResizeDivDict) {
	                    if (hasOwnProperty(attachedMoveResizeDivDict, item)) {
	                        var value = attachedMoveResizeDivDict[item];
	                        doMoveContainerImp(value.moveResizeDiv, x, y);
	                    }
	                }
	            }
	        }
	
	        function doMoveContainerImp(div, x, y) {
	            var $movingContainer = $(div);
	            var position = $(div).position();
	            $movingContainer.css([TOP, LEFT], [position[TOP] + y, position[LEFT] + x]);
	        }
	
	        function adjustMoveInfo(floatingObjectRender) {
	            var self = floatingObjectRender;
	            var info = self._moveInfo;
	            if (!info) {
	                return;
	            }
	            var fo = self._floatingObject, sheet = self._sheet, layout = sheet._getSheetLayout(),
	                viewportWidth = layout[WIDTH] - layout._rowHeaderWidth - layout._headerX,
	                viewportHeight = layout[HEIGHT] - layout._colHeaderHeight - layout._headerY, startX = info.startX,
	                startY = info.startY;
	            var foX = fo.position().x, foY = fo.position().y, width = fo[WIDTH](), height = fo[HEIGHT]();
	            if (foX + info.endX - startX < 0) {
	                info.endX = startX - foX;
	            }
	            if (foY + info.endY - startY < 0) {
	                info.endY = startY - foY;
	            }
	            if (foX + width + info.endX - startX > viewportWidth) {
	                info.endX = viewportWidth + startX - foX - width;
	            }
	            if (foY + height + info.endY - startY > viewportHeight) {
	                info.endY = viewportHeight + startY - foY - height;
	            }
	            info.startTopRow = sheet.getViewportTopRow(self._rowViewportIndex);
	            info.startLeftColumn = sheet.getViewportLeftColumn(self._columnViewportIndex);
	        }
	
	        function adjustResizeInfo(floatingObjectRender) {
	            var self = floatingObjectRender;
	            var info = self._resizeInfo;
	            if (!info) {
	                return;
	            }
	            var sheet = self._sheet, layout = sheet._getSheetLayout(),
	                viewportWidth = layout[WIDTH] - layout._rowHeaderWidth - layout._headerX,
	                viewportHeight = layout[HEIGHT] - layout._colHeaderHeight - layout._headerY;
	            var resizeRect = new Rect(info.endX, info.endY, info.endWidth, info.endHeight);
	            resizeRect = resizeRect.getIntersect(0, 0, viewportWidth, viewportHeight);
	
	            info.endX = resizeRect.x;
	            info.endY = resizeRect.y;
	            info.endWidth = resizeRect[WIDTH];
	            info.endHeight = resizeRect[HEIGHT];
	            info.startTopRow = sheet.getViewportTopRow(self._rowViewportIndex);
	            info.startLeftColumn = sheet.getViewportLeftColumn(self._columnViewportIndex);
	        }
	
	        function createFloatingObjectContainer(floatingObjectRender) {
	            var outer = createElement(DIV);
	            var $outer = $(outer);
	            var self = floatingObjectRender;
	            $outer.addClass(CSS_CLASS_FLOATINGOBJECT_CONTAINER).addClass(CSS_CLASS_NONE_USER_SELECT)
	                .attr(UNSELECTABLE, ON)
	                .css(Z_INDEX, CSS_ZINDEXDEFAULTVALUE).bind('mousedown', function (event) {
	                self._doMouseDown(event);
	            }).bind(MOUSE_MOVE, function (event) {
	                self._doMouseMove(event);
	            }).bind(MOUSE_UP, function (event) {
	                self._doMouseUp(event);
	            });
	           
	            outer.addEventListener('mousewheel', function (event) {
	                doMouseWheel(self, event);
	            }, false);
	           
	            outer.addEventListener('DOMMouseScroll', function (event) {
	                doMouseWheel(self, event);
	            }, false);
	            var topLeft = $(createElement(DIV)).addClass(FLOATINGOBJECT_RESIZE_INDICATOR + ' ' + FLOATINGOBJECT_TOP + ' ' + FLOATINGOBJECT_LEFT + ' ' + FLOATINGOBJECT_ABSOLUTE),
	                topCenter = $(createElement(DIV)).addClass(FLOATINGOBJECT_RESIZE_INDICATOR + ' ' + FLOATINGOBJECT_TOP + ' ' + FLOATINGOBJECT_CENTER + ' ' + FLOATINGOBJECT_ABSOLUTE),
	                topRight = $(createElement(DIV)).addClass(FLOATINGOBJECT_RESIZE_INDICATOR + ' ' + FLOATINGOBJECT_TOP + ' ' + FLOATINGOBJECT_RIGHT + ' ' + FLOATINGOBJECT_ABSOLUTE),
	                middleLeft = $(createElement(DIV)).addClass(FLOATINGOBJECT_RESIZE_INDICATOR + ' ' + FLOATINGOBJECT_MIDDLE + ' ' + FLOATINGOBJECT_LEFT + ' ' + FLOATINGOBJECT_ABSOLUTE),
	                middleRight = $(createElement(DIV)).addClass(FLOATINGOBJECT_RESIZE_INDICATOR + ' ' + FLOATINGOBJECT_MIDDLE + ' ' + FLOATINGOBJECT_RIGHT + ' ' + FLOATINGOBJECT_ABSOLUTE),
	                bottomLeft = $(createElement(DIV)).addClass(FLOATINGOBJECT_RESIZE_INDICATOR + ' ' + FLOATINGOBJECT_BOTTOM + ' ' + FLOATINGOBJECT_LEFT + ' ' + FLOATINGOBJECT_ABSOLUTE),
	                bottomCenter = $(createElement(DIV)).addClass(FLOATINGOBJECT_RESIZE_INDICATOR + ' ' + FLOATINGOBJECT_BOTTOM + ' ' + FLOATINGOBJECT_CENTER + ' ' + FLOATINGOBJECT_ABSOLUTE),
	                bottomRight = $(createElement(DIV)).addClass(FLOATINGOBJECT_RESIZE_INDICATOR + ' ' + FLOATINGOBJECT_BOTTOM + ' ' + FLOATINGOBJECT_RIGHT + ' ' + FLOATINGOBJECT_ABSOLUTE);
	            $outer.append(topLeft).append(topCenter).append(topRight).append(middleLeft).append(middleRight).append(bottomLeft).append(bottomCenter).append(bottomRight);
	
	            FloatingObjectRender._callFeatureHandler(self, 'init', outer);
	
	            return outer;
	        }
	
	        function createMoveResizeContainer(floatingObjectRender) {
	            var self = floatingObjectRender,
	                layout = self._floatingObjectContainerDiv && self._layout;
	            if (layout && !self._moveResizeDiv) {
	                var moveResizeContainerDiv = self._moveResizeContainerDiv = createElement(DIV);
	                self._moveResizeDiv = createElement(DIV);
	                self._attachedMoveResizeDivDict = {};
	                self._renderManager._renders.each(function (foContainer) {
	                    var fo = foContainer._floatingObject;
	                    if (fo && fo.name() !== self._floatingObject.name() && fo.isSelected() && !self._attachedMoveResizeDivDict[fo.name()]) {
	                        var containerLayout = foContainer._layout;
	                        self._attachedMoveResizeDivDict[fo.name()] = {
	                            offsetX: containerLayout.x - layout.x,
	                            offsetY: containerLayout.y - layout.y,
	                            height: containerLayout[HEIGHT],
	                            width: containerLayout[WIDTH],
	                            moveResizeDiv: createElement(DIV)
	                        };
	                    }
	                });
	                var viewportRect = getViewportRect(self);
	                var $movingContainer = $(moveResizeContainerDiv);
	                $movingContainer.css([Z_INDEX, TOP, LEFT, WIDTH, HEIGHT, BACKGROUND], [CSS_CONTAINERZINDEXVALUE, viewportRect.y, viewportRect.x, viewportRect[WIDTH], viewportRect[HEIGHT], 'rgba(255,255,255,0.01)'])
	                    .addClass(CSS_CLASS_FLOATINGOBJECT_MOVING_CONTAINER).bind(MOUSE_MOVE, function (e) {
	                    self._doMouseMove(e);
	                }).bind(MOUSE_UP, function (e) {
	                    self._doMouseUp(e);
	                });
	                var top = layout.y - viewportRect.y;
	                var left = layout.x - viewportRect.x;
	                attachMoveResizeDivToContainer(self._moveResizeDiv, moveResizeContainerDiv, left, top, layout[WIDTH], layout[HEIGHT]);
	                var attachedMoveResizeDivDict = self._attachedMoveResizeDivDict;
	                for (var item in attachedMoveResizeDivDict) {
	                    if (hasOwnProperty(attachedMoveResizeDivDict, item)) {
	                        var value = attachedMoveResizeDivDict[item];
	                        attachMoveResizeDivToContainer(value.moveResizeDiv, self._moveResizeContainerDiv, left + value.offsetX, top + value.offsetY, value[WIDTH], value[HEIGHT]);
	                    }
	                }
	                if (self._containerDiv) {
	                    $(self._containerDiv).append(self._moveResizeContainerDiv);
	                }
	            }
	        }
	
	        function handleDocumentMouseMove(floatingObjectRender) {
	            var self = floatingObjectRender;
	            if (!self._isMouseCapture) {
	                $(DOCUMENT).bind(MOUSE_MOVE + GC_FLOATINGOBJECT_NS, function (e) {
	                    self._doMouseMove(e);
	                }).bind(MOUSE_UP + GC_FLOATINGOBJECT_NS, function (e) {
	                    self._doMouseUp(e);
	                });
	                self._isMouseCapture = true;
	            }
	        }
	
	        function unhandleDocumentMouseMove(floatingObjectRender) {
	            var self = floatingObjectRender;
	            if (self._isMouseCapture) {
	                self._isMouseCapture = false;
	                $(DOCUMENT).unbind(MOUSE_MOVE + GC_FLOATINGOBJECT_NS).unbind(MOUSE_UP + GC_FLOATINGOBJECT_NS);
	            }
	        }
	
	        function showResizeIndicator(floatingObjectRender, container) {
	            var $indicators = $(CSS_SELECTOR_RESIZE_INDICATOR, container);
	            $indicators.removeClass(CSS_CLASS_RESIZE_INDICATOR_UNSELECT);
	            var self = floatingObjectRender,
	                containerBounds = getHTMLElementBounds(self._floatingObjectContainerDiv),
	                contentDiv = self._floatingObjectContentDiv,
	                floatingObject = self._floatingObject;
	            if (self._borderDiv) {
	                contentDiv = self._borderDiv;
	            }
	            var resizeIndicatorSize = FloatingObjectRender._resizeIndicatorSize;
	            var contentBounds = getHTMLElementBounds(contentDiv),
	                leftOffset = contentBounds.x,
	                topOffset = contentBounds.y,
	                bottomOffset = containerBounds[HEIGHT] - contentBounds.y - contentBounds[HEIGHT],
	                rightOffset = containerBounds[WIDTH] - contentBounds.x - contentBounds[WIDTH],
	                position = 0,
	                resizeIndicatorSizeWithBorder = resizeIndicatorSize + 2,
	                gapStripSize = Math_floor(resizeIndicatorSize / 2 + 1);
	
	           
	            if (floatingObject.typeName === '1' ) {
	                var borderWidth = floatingObject.borderWidth(), borderStyle = floatingObject.borderStyle();
	                if (!_isBorderStyleWork(borderStyle)) {
	                    borderWidth = 0;
	                }
	                if (borderWidth >= gapStripSize) {
	                    position = borderWidth - gapStripSize;
	                }
	                bottomOffset = containerBounds[HEIGHT] - topOffset - contentBounds[HEIGHT] - borderWidth;
	                rightOffset = containerBounds[WIDTH] - leftOffset - contentBounds[WIDTH] - borderWidth;
	                leftOffset += borderWidth;
	                topOffset += borderWidth;
	            }
	            var resizeRectInfos = [];
	            if (leftOffset > 0) {
	                applyPosition(self, topOffset > 0, CSS_SELECTOR_TOP_LEFT_RESIZE_INDICATOR, position, position, keyword_undefined, keyword_undefined, 'nw' + DASH_RESIZE, TOP_LEFT, resizeRectInfos);
	                applyPosition(self, containerBounds[HEIGHT] > 0, CSS_SELECTOR_MIDDLE_LEFT_RESIZE_INDICATOR, position, (contentBounds[HEIGHT] - resizeIndicatorSizeWithBorder) / 2 + topOffset, keyword_undefined, keyword_undefined, 'w' + DASH_RESIZE, MIDDLE_LEFT, resizeRectInfos);
	                applyPosition(self, bottomOffset > 0, CSS_SELECTOR_BOTTOM_LEFT_RESIZE_INDICATOR, position, keyword_undefined, keyword_undefined, position, 'ne' + DASH_RESIZE, BOTTOM_LEFT, resizeRectInfos);
	            } else {
	                resizeIndicatorUnselect(self, CSS_SELECTOR_TOP_LEFT_RESIZE_INDICATOR);
	                resizeIndicatorUnselect(self, CSS_SELECTOR_MIDDLE_LEFT_RESIZE_INDICATOR);
	                resizeIndicatorUnselect(self, CSS_SELECTOR_BOTTOM_LEFT_RESIZE_INDICATOR);
	            }
	
	            applyPosition(self, topOffset > 0, CSS_SELECTOR_TOP_CENTER_RESIZE_INDICATOR, (contentBounds[WIDTH] - resizeIndicatorSizeWithBorder) / 2 + leftOffset, position, keyword_undefined, keyword_undefined, 'n' + DASH_RESIZE, TOP_CENTER, resizeRectInfos);
	            applyPosition(self, bottomOffset > 0, CSS_SELECTOR_BOTTOM_CENTER_RESIZE_INDICATOR, (contentBounds[WIDTH] - resizeIndicatorSizeWithBorder) / 2 + leftOffset, keyword_undefined, keyword_undefined, position, 'n' + DASH_RESIZE, BOTTOM_CENTER, resizeRectInfos);
	
	            if (rightOffset > 0) {
	                applyPosition(self, topOffset > 0, CSS_SELECTOR_TOP_RIGHT_RESIZE_INDICATOR, keyword_undefined, position, position, keyword_undefined, 'sw' + DASH_RESIZE, TOP_RIGHT, resizeRectInfos);
	                applyPosition(self, containerBounds[HEIGHT] > 0, CSS_SELECTOR_MIDDLE_RIGHT_RESIZE_INDICATOR, keyword_undefined, (contentBounds[HEIGHT] - resizeIndicatorSizeWithBorder) / 2 + topOffset, position, keyword_undefined, 'w' + DASH_RESIZE, MIDDLE_RIGHT, resizeRectInfos);
	                applyPosition(self, bottomOffset > 0, CSS_SELECTOR_BOTTOM_RIGHT_RESIZE_INDICATOR, keyword_undefined, keyword_undefined, position, position, 'se' + DASH_RESIZE, BOTTOM_RIGHT, resizeRectInfos);
	            } else {
	                resizeIndicatorUnselect(self, CSS_SELECTOR_TOP_RIGHT_RESIZE_INDICATOR);
	                resizeIndicatorUnselect(self, CSS_SELECTOR_MIDDLE_RIGHT_RESIZE_INDICATOR);
	                resizeIndicatorUnselect(self, CSS_SELECTOR_BOTTOM_RIGHT_RESIZE_INDICATOR);
	            }
	            self._isResizeIndicatorDisplayed = true;
	            self._resizeRectInfos = resizeRectInfos;
	        }
	
	        function applyPosition(render, apply, selector, left, top, right, bottom, cursor, direction, resizeRectInfos) {
	            var self = render,
	                $indicatorDiv = $(selector, self._floatingObjectContainerDiv);
	            var resizeIndicatorSize = FloatingObjectRender._resizeIndicatorSize;
	            if (apply) {
	                $indicatorDiv.css([LEFT, TOP, RIGHT, BOTTOM, WIDTH, HEIGHT, CURSOR], [left, top, right, bottom, resizeIndicatorSize, resizeIndicatorSize, cursor])
	                    .addClass(CSS_CLASS_RESIZE_INDICATOR_SELECT).attr('resizeDirection', direction);
	            } else {
	                resizeIndicatorUnselect(self, selector);
	            }
	
	            if (resizeRectInfos) {
	                var $containerDiv = $(self._floatingObjectContainerDiv);
	                var x = 0, y = 0;
	                if (!isNullOrUndefined(left)) {
	                    x = left;
	                }
	                if (!isNullOrUndefined(top)) {
	                    y = top;
	                }
	                if (!isNullOrUndefined(right)) {
	                    x = $containerDiv.width() - right - resizeIndicatorSize;
	                }
	                if (!isNullOrUndefined(bottom)) {
	                    y = $containerDiv.height() - bottom - resizeIndicatorSize;
	                }
	                var rect = new Rect(x, y, resizeIndicatorSize, resizeIndicatorSize);
	                resizeRectInfos.push({ rect: rect, cursor: cursor, direction: direction });
	            }
	        }
	
	        function resizeIndicatorUnselect(floatingObjectRender, selector) {
	            $(selector, floatingObjectRender._floatingObjectContainerDiv).removeClass(CSS_CLASS_RESIZE_INDICATOR_SELECT).addClass(CSS_CLASS_RESIZE_INDICATOR_UNSELECT);
	        }
	
	        function hideResizeIndicator(floatingObjectRender, container) {
	            $(CSS_SELECTOR_RESIZE_INDICATOR, container).removeClass(CSS_CLASS_RESIZE_INDICATOR_SELECT).addClass(CSS_CLASS_RESIZE_INDICATOR_UNSELECT);
	            floatingObjectRender._isResizeIndicatorDisplayed = false;
	        }
	
	        function paintImage(floatingObjectRender) {
	            var self = floatingObjectRender;
	            var floatingObject = self._floatingObject;
	            var src = floatingObject._rotatedSrc || floatingObject.src();
	            var stretch = floatingObject.pictureStretch();
	            var backColor = _ThemeContext._getColor(floatingObject.sheet(), floatingObject.backColor());
	            var contentDiv = self._floatingObjectContentDiv;
	            if (!src || !contentDiv) {
	                return;
	            }
	            var content = $(contentDiv);
	            if (self._srcCache !== src) {
	                self._srcCache = src;
	                content.css([BACKGROUND + '-image', BACKGROUND + '-repeat'], ['url(\'' + src + '\')', 'no-repeat']);
	            }
	            content.css(BACKGROUND + '-color', backColor);
	            if (stretch === keyword_null || stretch === keyword_undefined) {
	                return;
	            }
	            if (floatingObject._isImageLoaded) {
	                var imgWidth = floatingObject.getOriginalWidth(), imgHeight = floatingObject.getOriginalHeight(),
	                    contentWidth = content[WIDTH](), contentHeight = content[HEIGHT]();
	                var srcScale = floatingObject._srcScale, backgroundInfo;
	                if (srcScale) {
	                   
	                    var width = contentWidth / srcScale.width, height = contentHeight / srcScale.height;
	                    var left = width * srcScale.left, top = height * srcScale.top;
	                    backgroundInfo = {
	                        position: -left + 'px ' + -top + 'px',
	                        size: width + 'px ' + height + 'px'
	                    };
	                }
	                util._applyBackgroundImageLayout(contentDiv, contentWidth, contentHeight, imgWidth, imgHeight, stretch, backgroundInfo);
	            }
	        }
	
	        function applyBorderStyle(floatingObjectRender, contentRect, containerRect) {
	            var borderDiv = floatingObjectRender._borderDiv,
	                floatingObject = floatingObjectRender._floatingObject,
	                borderWidth = floatingObject.borderWidth(),
	                borderStyle = floatingObject.borderStyle(),
	                borderColor = _ThemeContext._getColor(floatingObject.sheet(), floatingObject.borderColor()),
	                borderRadius = floatingObject.borderRadius(),
	                gapSize = 0,
	                gapStripSize = Math_floor(FloatingObjectRender._resizeIndicatorSize / 2 + 1);
	            if (!_isBorderStyleWork(borderStyle) || floatingObject.noFill()) {
	                borderWidth = 0;
	            }
	            if (borderWidth < gapStripSize) {
	                gapSize = gapStripSize - borderWidth;
	            }
	            var left = gapSize, top = gapSize, bottom = gapSize, right = gapSize;
	            gapStripSize = Math_max(borderWidth, gapStripSize);
	            if (contentRect.x < 0) {
	                left += contentRect.x - gapStripSize;
	            } else {
	                if (contentRect.x < gapStripSize) {
	                    left += contentRect.x - gapStripSize;
	                } else {
	                    left += 0;
	                }
	                right = containerRect[WIDTH] - left - contentRect[WIDTH] - 2 - 2 * borderWidth;
	            }
	            if (contentRect.y < 0) {
	                top += contentRect.y - gapStripSize;
	            } else {
	                if (contentRect.y < gapStripSize) {
	                    top += contentRect.y - gapStripSize;
	                } else {
	                    top += 0;
	                }
	                bottom = containerRect[HEIGHT] - top - contentRect[HEIGHT] - 2 - 2 * borderWidth;
	            }
	            $(borderDiv).css([POSITION, LEFT, TOP, BOTTOM, RIGHT, BORDER + '-width', BORDER + '-style', BORDER + '-color', BORDER + '-radius'],
	                [ABSOLUTE, left, top, bottom, right, borderWidth, borderStyle, borderColor, borderRadius]);
	        }
	
	        FloatingObjectRender.prototype = {
	            _getResizeDirection: function (event) {
	                var resizeDirection = $(event.target).attr('resizeDirection');
	                if (resizeDirection) {
	                    return resizeDirection;
	                }
	
	                var offset = $(this._floatingObjectContainerDiv).offset();
	                var x = event.pageX - offset.left, y = event.pageY - offset.top;
	                var resizeRectInfos = this._resizeRectInfos;
	                if (resizeRectInfos) {
	                    for (var i = 0; i < resizeRectInfos.length; i++) {
	                        var rectInfo = resizeRectInfos[i];
	                        if (rectInfo.rect.contains(x, y)) {
	                            return rectInfo.direction;
	                        }
	                    }
	                }
	            },
	            _getResizeCursor: function (event) {
	                var target = event.target;
	                var resizeDirection = $(target).attr('resizeDirection');
	                if (resizeDirection) {
	                    return target.style.cursor;
	                }
	
	                var offset = $(this._floatingObjectContainerDiv).offset();
	                var x = event.pageX - offset.left, y = event.pageY - offset.top;
	                var resizeRectInfos = this._resizeRectInfos;
	                if (resizeRectInfos) {
	                    for (var i = 0; i < resizeRectInfos.length; i++) {
	                        var rectInfo = resizeRectInfos[i];
	                        if (rectInfo.rect.contains(x, y)) {
	                            return rectInfo.cursor;
	                        }
	                    }
	                }
	            },
	            _doMouseDown: function (event) {
	                var self = this,
	                    sheet = self._sheet,
	                    floatingObject = self._floatingObject,
	                    commentManager = sheet._modelManager._comments,
	                    rowViewportIndex = self._rowViewportIndex,
	                    columnViewportIndex = self._columnViewportIndex;
	
	                if (!sheet._canEditFloatingObject(floatingObject)) {
	                    return;
	                }
	                if (!sheet.endEdit()) {
	                    return;
	                }
	
	               
	                sheet._setFocus(true);
	
	                var argObj = {e: event, r: keyword_null};
	                FloatingObjectRender._callFeatureHandler(self, 'preProcessMouseDown', argObj);
	                if (argObj.r) {
	                    return;
	                }
	
	               
	                if (event.button === 0 || event.button === 2) {
	                    var isSelected = floatingObject.isSelected();
	                    if (event.ctrlKey || event.shiftKey) {
	                        floatingObject.isSelected(!isSelected);
	                    } else if (!isSelected) {
	                        sheet._unSelectAllFloatingObjects();
	                        floatingObject.isSelected(true);
	                    }
	                    if (!isSelected) {
	                        Sheets._FocusHelper._setActiveElement(sheet);
	                    }
	
	                   
	                    if (commentManager) {
	                        commentManager._clearActiveComment();
	                    }
	                    sheet._saveAndClearSheetSelections();
	                   
	                    if (event.button === 2) {
	                        return;
	                    }
	                    var eventHandler = sheet._eventHandler, canvasOffset = sheet._getCanvasOffset();
	                    var resizeDirection = self._getResizeDirection(event);
	                    var mousePosition = new Point(event.pageX - canvasOffset.left, event.pageY - canvasOffset.top),
	                        mouseDownHittestInfo = hitTest(self, resizeDirection);
	                    if (!floatingObject.allowMove() && !(floatingObject.allowResize() && !mouseDownHittestInfo.inMoving)) {
	                        return;
	                    }
	                    self._mousePosition = mousePosition;
	                    self._isMouseLeftButtonDown = true;
	                    self._mouseDownHittestInfo = mouseDownHittestInfo;
	                    if (mouseDownHittestInfo.inMoving) {
	                        var moveInfo = {};
	                        moveInfo.startTopRow = sheet.getViewportTopRow(rowViewportIndex);
	                        moveInfo.startLeftColumn = sheet.getViewportLeftColumn(columnViewportIndex);
	                        moveInfo.startX = mousePosition.x;
	                        moveInfo.startY = mousePosition.y;
	                        self._moveInfo = moveInfo;
	                    } else {
	                        createMoveResizeContainer(self);
	                        var resizeInfo = {};
	                        var elementBounds = getHTMLElementBounds(self._moveResizeDiv);
	                        resizeInfo.startX = elementBounds.x;
	                        resizeInfo.startY = elementBounds.y;
	                        resizeInfo.startWidth = elementBounds[WIDTH];
	                        resizeInfo.startHeight = elementBounds[HEIGHT];
	                        resizeInfo.startTopRow = sheet.getViewportTopRow(rowViewportIndex);
	                        resizeInfo.startLeftColumn = sheet.getViewportLeftColumn(columnViewportIndex);
	                        resizeInfo.cursor = self._getResizeCursor(event);
	                        resizeInfo.direction = resizeDirection;
	                        self._resizeInfo = resizeInfo;
	                    }
	                    handleDocumentMouseMove(self);
	                    var sheetHitTestInfo = sheet.hitTest(mousePosition.x, mousePosition.y);
	                    eventHandler._startHitInfo = {
	                        _scrollRowViewportIndex: sheetHitTestInfo.rowViewportIndex,
	                        _scrollColViewportIndex: sheetHitTestInfo.colViewportIndex,
	                        _hitTestType: sheetHitTestInfo.hitTestType
	                    };
	                    eventHandler._mousePosition = mousePosition;
	                    eventHandler._startScroll();
	                    eventHandler._isFloatingObjectWorking = true;
	                    sheet._trigger(Events.FloatingElementSelected, {type: 'floatingObject'});
	                }
	                return false;
	            },
	            _doMouseMove: function (event) {
	                var self = this,
	                    sheet = self._sheet,
	                    floatingObjectContainerDiv = self._floatingObjectContainerDiv,
	                    moveResizeContainerDiv = self._moveResizeContainerDiv;
	                if (!sheet._canEditFloatingObject(self._floatingObject)) {
	                    return;
	                }
	
	                var argObj = {e: event, r: keyword_null};
	                FloatingObjectRender._callFeatureHandler(self, 'preProcessMouseMove', argObj);
	                if (argObj.r) {
	                    return;
	                }
	
	                if (sheet._isMouseDownInSheet) {
	                    if (floatingObjectContainerDiv) {
	                        $(floatingObjectContainerDiv).css(CURSOR, 'default');
	                    }
	                    return true;
	                }
	                var eventHandler = sheet._eventHandler, canvasOffset = sheet._getCanvasOffset();
	                var point = new Point(event.pageX - canvasOffset.left, event.pageY - canvasOffset.top);
	                if (self._isMouseLeftButtonDown) {
	                    if (self._mouseDownHittestInfo.inMoving) {
	                        self._isMoving = true;
	                        createMoveResizeContainer(self);
	                        doMoveContainer(self, self._mousePosition, point);
	                        $(moveResizeContainerDiv).css(CURSOR, MOVE);
	                    } else if (self._floatingObject.allowResize()) {
	                        self._isResizing = true;
	                        doResizeContainer(self);
	                        $(moveResizeContainerDiv).css(CURSOR, self._resizeInfo[CURSOR]);
	                    }
	                    if (self._isMoving || self._isResizing) {
	                        self._mousePosition = point;
	                        eventHandler._mousePosition = point;
	                        eventHandler._continueScroll();
	                        $(DOCUMENT.body).addClass(CSS_CLASS_NONE_USER_SELECT)  
	                            .attr(UNSELECTABLE, ON);   
	                    }
	                }
	
	                return false;
	            },
	            _doMouseUp: function (event) {
	                var self = this,
	                    sheet = self._sheet,
	                    eventHandler = sheet._eventHandler,
	                    floatingObject = self._floatingObject,
	                    floatingObjectContainerDiv = self._floatingObjectContainerDiv,
	                    mouseDownHittestInfo = self._mouseDownHittestInfo;
	                if (!sheet._canEditFloatingObject(floatingObject)) {
	                    return;
	                }
	
	                var argObj = {e: event, r: keyword_null};
	                FloatingObjectRender._callFeatureHandler(self, 'preProcessMouseUp', argObj);
	                if (argObj.r) {
	                    return;
	                }
	
	                if (sheet._isMouseDownInSheet) {
	                    $(floatingObjectContainerDiv).css(CURSOR, MOVE);
	                    return true;
	                }
	                eventHandler._isFloatingObjectWorking = false;
	                eventHandler._stopScroll();
	                var canvasOffset = sheet._getCanvasOffset();
	                var point = new Point(event.pageX - canvasOffset.left, event.pageY - canvasOffset.top);
	                var moveInfo = self._moveInfo;
	                if (moveInfo) {
	                    moveInfo.endX = point.x;
	                    moveInfo.endY = point.y;
	                }
	                if (mouseDownHittestInfo) {
	                    var fixedPosition = floatingObject.fixedPosition();
	                    if (mouseDownHittestInfo.inMoving && self._isMoving) {
	                        if (fixedPosition) {
	                            adjustMoveInfo(self);
	                        }
	                        if (event.ctrlKey) {
	                            doCopyFloatingObject(self);
	                        } else {
	                            doMoveFloatingObject(self);
	                        }
	                    } else if (self._isResizing) {
	                        if (fixedPosition) {
	                            adjustResizeInfo(self);
	                        }
	                        doResizeFloatingObject(self);
	                    }
	                    $(DOCUMENT.body).removeClass(CSS_CLASS_NONE_USER_SELECT);
	                }
	                self._resetStatusOnMouseUp();
	                return false;
	            },
	            _resetStatusOnMouseUp: function () {
	                var self = this;
	                self._resizeInfo = keyword_null;
	                self._moveInfo = keyword_null;
	                self._attachedMoveResizeDivDict = keyword_null;
	                $(self._moveResizeContainerDiv).remove();
	                self._moveResizeDiv = keyword_null;
	                self._isMouseLeftButtonDown = false;
	                unhandleDocumentMouseMove(self);
	                self._isMoving = false;
	                self._isResizing = false;
	            },
	            _floatingObject: function () {
	                return this._floatingObject;
	            },
	            _render: function (containerRect, contentRect) {
	                var self = this,
	                    floatingObject = self._floatingObject,
	                    sheet = self._sheet;
	                if (!floatingObject) {
	                    return;
	                }
	
	                var isFloatingObjectCreate = false;
	                self._rect = containerRect;
	                var containerDiv = self._floatingObjectContainerDiv;
	                if (!containerDiv) {
	                    if (containerRect.width <= 0 || containerRect.height <= 0) {
	                        return;//for performance
	                    }
	                    containerDiv = self._floatingObjectContainerDiv = createFloatingObjectContainer(self);
	                    syncFloatingObjectZIndex(floatingObject, containerDiv);
	                    var workbook = sheet.parent;
	                    if (workbook) {
	                        var workbookContainerDiv = self._containerDiv = workbook._getContainerDiv();
	                        if (workbookContainerDiv) {
	                            $(workbookContainerDiv).append(containerDiv);
	                        }
	                    }
	                }
	                var contentDiv = self._floatingObjectContentDiv;
	               
	                if (!contentDiv) {
	                    contentDiv = self._floatingObjectContentDiv = floatingObject._createContentContainer(self._rowViewportIndex, self._columnViewportIndex);
	                   
	                    if (floatingObject.typeName === '1' ) {
	                        self._borderDiv = createElement(DIV);
	                        $(self._borderDiv).addClass(CSS_CLASS_NONE_USER_SELECT + ' ' + CSS_CLASS_FLOATINGOBJECT_CONTENT_CONTAINER)
	                            .attr(UNSELECTABLE, ON);   
	                        containerDiv.appendChild(self._borderDiv);
	                        self._borderDiv.appendChild(contentDiv);
	                    } else {
	                        containerDiv.appendChild(contentDiv);
	                        isFloatingObjectCreate = true;
	                    }
	                }
	                if (self._borderDiv) {
	                    applyBorderStyle(self, contentRect, containerRect);
	                    contentRect.x = 0;
	                    contentRect.y = 0;
	                }
	                var $content = $(contentDiv), isLocked = floatingObject.isLocked() && sheet.options.isProtected;
	                $(containerDiv).css([TOP, LEFT, WIDTH, HEIGHT], [containerRect.y, containerRect.x, containerRect[WIDTH], containerRect[HEIGHT]]);
	                $content.css([TOP, LEFT, WIDTH, HEIGHT, CURSOR], [contentRect.y, contentRect.x, contentRect[WIDTH], contentRect[HEIGHT], (isLocked || !floatingObject.allowMove()) ? "default" : MOVE]);
	                self._containerRect = containerRect;
	
	                if (floatingObject.refreshContent) {
	                    floatingObject.refreshContent(contentDiv);
	                }
	
	                if (self._borderDiv) {
	                    paintImage(self);
	                }
	                if (floatingObject.isSelected()) {
	                    $content.removeClass(CSS_CLASS_FLOATINGOBJECT_UNSELECTED).addClass(CSS_CLASS_FLOATINGOBJECT_SELECTED);
	                    if (floatingObject.allowResize()) {
	                        showResizeIndicator(self, containerDiv);
	                    } else if (self._isResizeIndicatorDisplayed) {
	                        hideResizeIndicator(self, containerDiv);
	                    }
	                } else {
	                    $content.removeClass(CSS_CLASS_FLOATINGOBJECT_SELECTED).addClass(CSS_CLASS_FLOATINGOBJECT_UNSELECTED);
	                    hideResizeIndicator(self, containerDiv);
	                }
	                if (isFloatingObjectCreate) {
	                    var element = contentDiv.firstChild;
	                    sheet._trigger(Events.FloatingObjectLoaded, {
	                        sheet: sheet,
	                        sheetName: sheet.name(),
	                        floatingObject: floatingObject,
	                        element: element
	                    });
	                }
	            },
	            _dispose: function () {
	                var self = this,
	                    floatingObject = self._floatingObject,
	                    floatingObjectContainerDiv = self._floatingObjectContainerDiv,
	                    moveResizeContainerDiv = self._moveResizeContainerDiv,
	                    contentContainerDiv = self._floatingObjectContentDiv;
	
	                FloatingObjectRender._callFeatureHandler(self, 'dispose');
	
	                if (contentContainerDiv && floatingObject._removeContainer) {
	                    floatingObject._removeContainer(contentContainerDiv);
	                    floatingObject._dispose(false);
	                }
	                if (floatingObjectContainerDiv) {
	                    $(floatingObjectContainerDiv).remove();
	                    self._floatingObjectContainerDiv = keyword_null;
	                }
	                if (moveResizeContainerDiv) {
	                    $(moveResizeContainerDiv).remove();
	                    self._moveResizeContainerDiv = keyword_null;
	                }
	
	            }
	        };
	        FloatingObjectRender._resizeIndicatorSize = 7;
	        return FloatingObjectRender;
	    })();
	
	    var FloatingObjectRenderManager = (function () {
	        function FloatingObjectRenderManager(sheet) {
	            this._sheet = sheet;
	           
	            this._renders = new NamedObjectArray();
	        }
	
	        function updateFloatingsObjectlayoutOnColumnRowChanged(floatingobjectModel) {
	            floatingobjectModel._all().forEach(function (item) {
	                if (item.dynamicMove()) {
	                    updateFloatingObjectLocation(item);
	                } else {
	                    updateStartPosition(item);
	                }
	                if (item.dynamicSize()) {
	                    updateFloatingObjectSize(item);
	                } else {
	                    updateEndPosition(item);
	                }
	            });
	        }
	
	        function getViewportRect(floatingObjectRenderManager, rowViewportIndex, columnViewportIndex) {
	            var sheet = floatingObjectRenderManager._sheet,
	                columnLayout = sheet._getViewportColumnLayout(columnViewportIndex), x = 0, y = 0, width = 0, height = 0;
	            if (columnLayout && columnLayout.length > 0) {
	                var firstColumnLayout = columnLayout[0], lastColumnLayout = columnLayout[columnLayout.length - 1];
	                x = firstColumnLayout.x;
	                width = lastColumnLayout.x + lastColumnLayout[WIDTH] - x;
	            }
	            var rowLayout = sheet._getViewportRowLayout(rowViewportIndex);
	            if (rowLayout && rowLayout.length > 0) {
	                var firstRowLayout = rowLayout[0], lastRowLayout = rowLayout[rowLayout.length - 1];
	                y = firstRowLayout.y;
	                height = lastRowLayout.y + lastRowLayout[HEIGHT] - y;
	            }
	            var layout = sheet._getSheetLayout();
	            var rect = layout._viewportRect(rowViewportIndex, columnViewportIndex);
	            return rect.getIntersect(x, y, width, height) || new Rect(0, 0, 0, 0);
	        }
	
	        function createViewportFloatingObjectLayoutModel(floatingObjectRenderManager, rowViewportIndex, columnViewportIndex, zoomFactor) {
	            var self = floatingObjectRenderManager, sheet = self._sheet;
	            var model = new NamedObjectArray();
	            var floatingObjectModel = sheet._floatingObjectModel;
	            if (floatingObjectModel.isNeedToUpdateLayout) {
	                updateFloatingsObjectlayoutOnColumnRowChanged(floatingObjectModel);
	                floatingObjectModel.isNeedToUpdateLayout = false;
	            }
	            var sheetLayout = sheet._getSheetLayout(), cachePool = sheet._cachePool,
	                colLayouts = sheet._getViewportColumnLayout(columnViewportIndex),
	                rowLayouts = sheet._getViewportRowLayout(rowViewportIndex);
	            if (colLayouts.length <= 0 || rowLayouts.length <= 0) {
	                return model;
	            }
	            var viewportLeftColLayout = colLayouts[0], viewportRightColLayout = colLayouts[colLayouts.length - 1],
	                viewportTopRowLayout = rowLayouts[0], viewportBottomRowLayout = rowLayouts[rowLayouts.length - 1];
	            floatingObjectModel._all().forEach(function (item) {
	                if (item && item.isVisible()) {
	                    var x, y;
	                    if (item.fixedPosition()) {
	                        var position = item.position();
	                        x = position.x * zoomFactor + sheetLayout._frozenX;
	                        y = position.y * zoomFactor + sheetLayout._frozenY;
	                    } else {
	                        var startColumn = item[START_COLUMN](), startColumnLayout = colLayouts.findCol(startColumn);
	                        if (startColumnLayout) {
	                            x = startColumnLayout.x;
	                        } else if (startColumn < viewportLeftColLayout.col) {
	                            x = viewportLeftColLayout.x;
	                            for (var c = viewportLeftColLayout.col - 1; c >= startColumn; c--) {
	                                x -= cachePool._getZoomColWidth(c);
	                            }
	                        } else {
	                            x = viewportRightColLayout.x + viewportRightColLayout[WIDTH];
	                            for (var col = viewportRightColLayout.col + 1; col <= startColumn; col++) {
	                                x += cachePool._getZoomColWidth(col);
	                            }
	                        }
	                        x += item[START_COLUMN_OFFSET]() * zoomFactor;
	                        var startRow = item[START_ROW](), startRowLayout = rowLayouts.findRow(startRow);
	                        if (startRowLayout) {
	                            y = startRowLayout.y;
	                        } else if (startRow < viewportTopRowLayout.row) {
	                            y = viewportTopRowLayout.y;
	                            for (var r = viewportTopRowLayout.row - 1; r >= startRow; r--) {
	                                y -= cachePool._getZoomRowHeight(r);
	                            }
	                        } else {
	                            y = viewportBottomRowLayout.y + viewportBottomRowLayout[HEIGHT];
	                            for (var row = viewportBottomRowLayout.row + 1; row <= startRow; row++) {
	                                y += cachePool._getZoomRowHeight(row);
	                            }
	                        }
	                        y += item[START_ROW_OFFSET]() * zoomFactor;
	                    }
	                    var width = Math_floor(item[WIDTH]() * zoomFactor);
	                    var height = Math_floor(item[HEIGHT]() * zoomFactor);
	                    if (width > 0 && height > 0) {
	                        model.push({ name: item.name(), x: x, y: y, width: width, height: height });
	                    }
	                }
	            });
	            return model;
	        }
	
	        FloatingObjectRenderManager.prototype = {
	            _dispose: function () {
	                var renders = this._renders;
	                renders.each(function (e) {
	                    e._dispose();
	                });
	                renders.empty();
	            },
	            _render: function (rowViewportIndex, columnViewportIndex, zoomFactor) {
	                if (rowViewportIndex < 0 || columnViewportIndex < 0) {
	                    return;
	                }
	                var self = this,
	                    sheet = self._sheet,
	                    renders = self._renders,
	                    floatingObjectModel = sheet._floatingObjectModel;
	                var floatingObjectLayoutModel = createViewportFloatingObjectLayoutModel(self, rowViewportIndex, columnViewportIndex, zoomFactor);
	                var willRemoveRenders = [];
	                renders.each(function (ele) {
	                    if (!floatingObjectLayoutModel.find(ele.name)) {
	                        willRemoveRenders.push(ele);
	                    }
	                });
	                var i, len;
	                for (i = 0, len = willRemoveRenders.length; i < len; i++) {
	                    var render = willRemoveRenders[i];
	                    render._renderManager = keyword_null;
	                    renders.remove(render.name);
	                    render._dispose();
	                }
	                var useTouchLayout = sheet.parent && sheet.parent.options.useTouchLayout;
	                FloatingObjectRender._resizeIndicatorSize = useTouchLayout ? 11 : 7;
	
	                floatingObjectLayoutModel.each(function (layout) {
	                    var floatingObject = floatingObjectModel._get(layout.name),
	                        visibleGapSize = Math_floor(FloatingObjectRender._resizeIndicatorSize / 2 + 1);
	                    if (floatingObject && floatingObject.typeName === '1') {
	                        var borderWidth = floatingObject.borderWidth(), borderStyle = floatingObject.borderStyle();
	                        if (!_isBorderStyleWork(borderStyle)) {
	                            borderWidth = 0;
	                        }
	                        if (borderWidth > visibleGapSize) {
	                            visibleGapSize = borderWidth;
	                        }
	                    }
	                    var viewportRect = getViewportRect(self, rowViewportIndex, columnViewportIndex);
	                    var contentDivBorderWidth = 1;
	                   
	                    var left = layout.x - visibleGapSize - contentDivBorderWidth;
	                    var top = layout.y - visibleGapSize - contentDivBorderWidth;
	                    var width = layout[WIDTH] + 2 * visibleGapSize + 2 * contentDivBorderWidth;
	                    var height = layout[HEIGHT] + 2 * visibleGapSize + 2 * contentDivBorderWidth;
	                   
	                    var outContainerTop = Math_max(viewportRect.y, top);
	                    var outContainerLeft = Math_max(viewportRect.x, left);
	                    var outContainerHeight = height;
	                    var outContainerWidth = width;
	                    var topOffset = visibleGapSize;
	                    var leftOffset = visibleGapSize;
	                    var minusGapSize = -1 * visibleGapSize - contentDivBorderWidth;
	                    topOffset = top - outContainerTop + topOffset;
	                    leftOffset = left - outContainerLeft + leftOffset;
	                    if (topOffset <= 0) {
	                        outContainerHeight += topOffset;
	                        outContainerHeight += minusGapSize;
	                    } else if (topOffset < visibleGapSize && topOffset > 0) {
	                        outContainerHeight -= (visibleGapSize - topOffset);
	                    }
	                    if (leftOffset <= 0) {
	                        outContainerWidth += leftOffset;
	                        outContainerWidth += minusGapSize;
	                    } else if (leftOffset < visibleGapSize && leftOffset > 0) {
	                        outContainerWidth -= (visibleGapSize - leftOffset);
	                    }
	                    var container = renders.find(layout.name);
	                    if (!container) {
	                        container = new FloatingObjectRender(floatingObjectModel._get(layout.name), sheet);
	                        container._renderManager = self;
	                        renders.push(container);
	                    }
	                    container._layout = layout;
	                    container._rowViewportIndex = rowViewportIndex;
	                    container._columnViewportIndex = columnViewportIndex;
	                    var clipRect = new Rect(viewportRect.x, viewportRect.y, viewportRect[WIDTH], viewportRect[HEIGHT]);
	                    container._render(new Rect(outContainerLeft, outContainerTop, outContainerWidth, outContainerHeight).getIntersectRect(clipRect) || new Rect(outContainerLeft, outContainerTop, 0, 0), new Rect(leftOffset, topOffset, layout[WIDTH], layout[HEIGHT]));
	                });
	            }
	        };
	        return FloatingObjectRenderManager;
	    })();
	
	    var FloatingObjects = {
	        FloatingObject: FloatingObject,
	        FloatingObjectCollection: FloatingObjectCollection,
	        _FloatingObjectRender: FloatingObjectRender,
	        _propertyRefreshCallback: propertyRefreshCallback,
	        _fromJsonFn: fromJsonFn,
	        _toJsonFn: toJsonFn
	    };
	
	    $.extend(FloatingObjects, FloatingobjectActions);   
	
	    var adapter = {
	       
	        init: function () {
	            var sheet = this;
	            var floatingObjectListeners = sheet._floatingObjectListeners = [];
	            sheet._onAddFloatingObject = function (floatingObject) {
	                floatingObjectListeners.forEach(function (item) {
	                    item._onAddItem && item._onAddItem(floatingObject);
	                });
	            };
	
	            sheet._floatingObjectModel = sheet._modelManager._floatingObjectModel;
	
	           
	            
	            sheet.pictures = new FloatingObjectCollection(sheet, '1' );
	           
	            
	            sheet.floatingObjects = new FloatingObjectCollection(sheet, '0' );
	        },
	       
	        dispose: function (clearCache) {
	            var self = this;
	            disposeFloatingObjectUI(self);
	            $.each(self._floatingObjectModel._all(), function (index, floatingObject) {
	                floatingObject._dispose(clearCache);
	            });
	            $(self._getCanvas()).unbind('mousedown.fos');
	
	            self.unbind(Events.TableFiltered + NS);
	            self.unbind(Events.RangeFiltered + NS);
	            self.unbind(Events.FloatingElementSelected + NS);
	           
	           
	        },
	        setHost: function (host) {
	            if (!host) {
	                return;
	            }
	            var self = this;
	           
	            host.bind('mousedown' + NS, function () {
	                self._unSelectAllFloatingObjects();
	            });
	
	            self.bind(Events.TableFiltered + NS, function () {
	                self._refreshObjectsAboveSheet();
	            });
	            self.bind(Events.RangeFiltered + NS, function () {
	                self._refreshObjectsAboveSheet();
	            });
	            self.bind(Events.FloatingElementSelected + NS, function (event, data) {
	                if (data.type !== 'floatingObject') {
	                    self._unSelectAllFloatingObjects();
	                }
	            });
	        },
	        onLayoutChanged: function (e) {
	            var changeType = e.changeType;
	            var row = e.row;
	            var rowCount = e.rowCount;
	            var col = e.col;
	            var colCount = e.colCount;
	            var floatingObjectModel = this._floatingObjectModel;
	            if (changeType === 'addRows') {
	                addRows(floatingObjectModel, row, rowCount);
	            } else if (changeType === 'deleteRows') {
	                removeRows(floatingObjectModel, row, rowCount);
	            } else if (changeType === 'addColumns') {
	                addColumns(floatingObjectModel, col, colCount);
	            } else if (changeType === 'deleteColumns') {
	                removeColumns(floatingObjectModel, col, colCount);
	            }
	        },
	        paint: function (e) {
	            var self = this;
	            var clipRect = e.clipRect;
	            if (!self._paintFloatingObject) {
	                self._getFloatingObjectRenderManager = function (rowViewportIndex, columnViewportIndex) {
	                    if (!self._floatingObjectRenderManagers) {
	                        self._floatingObjectRenderManagers = [];
	                    }
	                    var rowViewportRenderManagers = self._floatingObjectRenderManagers[rowViewportIndex];
	                    if (!rowViewportRenderManagers) {
	                        self._floatingObjectRenderManagers[rowViewportIndex] = [];
	                    }
	                    var renderManger = self._floatingObjectRenderManagers[rowViewportIndex][columnViewportIndex];
	                    if (!renderManger) {
	                        self._floatingObjectRenderManagers[rowViewportIndex][columnViewportIndex] = new FloatingObjectRenderManager(self);
	                    }
	                    renderManger = self._floatingObjectRenderManagers[rowViewportIndex][columnViewportIndex];
	                    return renderManger;
	                };
	                self._paintFloatingObject = function (rectangle, zoomFactor) {
	                    var sheet = this;
	                    if (!sheet._hoverCell && sheet._floatingObjectModel) {
	                        var layout = sheet._getSheetLayout(), rect;
	                        if (zoomFactor === keyword_null || typeof (zoomFactor) === 'undefined') {
	                            zoomFactor = sheet.zoom();
	                        }
	                        for (var r = 0; r <= 2; r++) {
	                            for (var c = 0; c <= 2; c++) {
	                                rect = layout._viewportRect(r, c);
	                                if (!rect) {
	                                    continue;
	                                }
	                                var floatingObjectRenderManager = sheet._getFloatingObjectRenderManager(r, c);
	                                if (floatingObjectRenderManager) {
	                                    floatingObjectRenderManager._render(r, c, zoomFactor);
	                                }
	                            }
	                        }
	                    }
	                };
	            }
	            self._paintFloatingObject(clipRect);
	        },
	        lastNonNullRowAndCol: function () {
	            var lastNonNullRow = 0, lastNonNullCol = 0;
	            var floatingObjectModel = this._floatingObjectModel;
	            if (floatingObjectModel) {
	                floatingObjectModel._all().forEach(function (fo) {
	                    if (fo) {
	                        if (fo[END_ROW]() > lastNonNullRow) {
	                            lastNonNullRow = fo[END_ROW]();
	                        }
	                        if (fo[END_COLUMN]() > lastNonNullCol) {
	                            lastNonNullCol = fo[END_COLUMN]();
	                        }
	                    }
	                });
	            }
	
	            return {
	                lastNonNullRow: lastNonNullRow, lastNonNullCol: lastNonNullCol
	            };
	        },
	        toJson: function (data, serializationOption) {
	            var ignoreStyle = serializationOption && serializationOption.ignoreStyle;
	            if (ignoreStyle) {
	                return;
	            }
	            var floatingObjects = this._floatingObjectModel.toJSON();
	            if (floatingObjects.length > 0) {
	                data.floatingObjects = floatingObjects;
	            }
	        },
	        fromJson: function (data, noSchema, deserializationOptions) {
	            var ignoreStyle = deserializationOptions && deserializationOptions.ignoreStyle;
	            if (ignoreStyle) {
	                return;
	            }
	            var self = this;
	            self._floatingObjectModel = new FloatingObjectModel(self);
	            self._modelManager._floatingObjectModel = self._floatingObjectModel;
	            var floatingObjectArray = data && data.floatingObjectArray;
	            var state = noSchema ? (floatingObjectArray && floatingObjectArray.floatingObjects) : data.floatingObjects;
	            if (state) {
	                self._floatingObjectModel.fromJSON(state, noSchema);
	            }
	        },
	        preProcessMouseDown: function () {
	            this._unSelectAllFloatingObjects();
	        },
	        processKeyDown: function (argObj) {
	            var floatingObjectModel = this._floatingObjectModel;
	            if (floatingObjectModel) {
	                var floatingObjects = floatingObjectModel._all();
	                var i, length = floatingObjects.length;
	                for (i = 0; i < length; i++) {
	                    var item = floatingObjects[i];
	                    if (item.isSelected()) {
	                        argObj.r = true;
	                        return;
	                    }
	                }
	            }
	        },
	        onGroupChanged: function (args) {
	            this.floatingObjects._onGroupChanged(args.start, args.end, args.isRow);
	            this.pictures._onGroupChanged(args.start, args.end, args.isRow);
	        }
	    };
	    Sheets.Worksheet._registerFeature(FLOATING_OBJECTS, adapter);
	
	    var ssAdapter = {
	        init: function () {
	            Sheets.Commands._initFloatingObjectsDefaultCommands(this.commandManager());
	        }
	    };
	    Sheets.Workbook._registerFeature(FLOATING_OBJECTS, ssAdapter);
	
	    var _SheetModelManager = Sheets._SheetModelManager;
	    $.extend(_SheetModelManager.prototype, {
	        _saveFloatingObjectPropertyChange: function (floatingObject, name, value) {
	            var changes = this._changes;
	            if (changes) {
	                var floatingObjectChanges = changes._floatingObjectChanges;
	                if (!floatingObjectChanges) {
	                    floatingObjectChanges = changes._floatingObjectChanges = [];
	                }
	                floatingObjectChanges.push({
	                    type: "property",
	                    floatingObject: floatingObject,
	                    name: name,
	                    value: value
	                });
	            }
	        },
	        _saveFloatingObjectCollectionChange: function () {
	            var changes = this._changes;
	            if (changes) {
	                var floatingObjectChanges = changes._floatingObjectChanges;
	                if (!floatingObjectChanges) {
	                    floatingObjectChanges = changes._floatingObjectChanges = [];
	                }
	                var floatingObjects = {};
	                var floatingObjectModel = this._floatingObjectModel;
	                $.each(floatingObjectModel._storage, function (name, floatingObject) {
	                    floatingObjects[name] = floatingObject;
	                });
	                floatingObjectChanges.push({type: "collection", floatingObjects: floatingObjects});
	            }
	        },
	        _restoreFloatingObjects: function (floatingObjectChanges) {
	            if (floatingObjectChanges) {
	                var floatingObjectModel = this._floatingObjectModel;
	                for (var i = floatingObjectChanges.length - 1; i >= 0; i--) {
	                    var change = floatingObjectChanges[i];
	                    if (change.type === "collection") {
	                        floatingObjectModel._storage = change.floatingObjects;
	                    } else if (change.type === "property") {
	                        var floatingObject = change.floatingObject, propertyName = change.name,
	                            propertyValue = change.value;
	                        floatingObject[propertyName](propertyValue);
	                    }
	                }
	            }
	        }
	    });
	    _SheetModelManager._registerFeature(FLOATING_OBJECTS, {
	        init: function () {
	            this._floatingObjectModel = new FloatingObjectModel(this._sheet);
	        },
	        undo: function (changes) {
	            var floatingObjectChanges = changes._floatingObjectChanges;
	            if (floatingObjectChanges) {
	                this._restoreFloatingObjects(floatingObjectChanges);
	            }
	        }
	    });
	
	    module.exports = FloatingObjects;
	
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
	
	    var Sheets = __webpack_require__(2),
	        Common = __webpack_require__(3),
	        $ = Sheets.GC$,
	        $_isArray = $.isArray,
	        Commands = Sheets.Commands,
	        getLength = Common._ArrayHelper._getLength,
	        ActionBase = Commands.ActionBase,
	        keyword_null = null, Math_min = Math.min,
	        isNullOrUndefined = Common._Types._isNullOrUndefined;
	
	    var UN_SELECTE_ALL_FLOATINGOBJECT_S = 'unSelectAllFloatingObjects',
	        DELETE_FLOATINGOBJECT_S = 'deleteFloatingObjects',
	        NAVIGATION_NEXT_FLOATINGOBJECT = 'navigationNextFloatingObject',
	        NAVIGATION_PREVIOUS_FLOATINGOBJECT = 'navigationPreviousFloatingObject',
	        CUT_FLOATINGOBJECT_S = 'cutFloatingObjects',
	        COPY_FLOATINGOBJECT_S = 'copyFloatingObjects',
	        PASTE_FLOATINGOBJECT_S = 'pasteFloatingObjects',
	        DRAG_COPY_FLOATINGOBJECT_S = 'dragCopyFloatingObjects',
	        SELECT_ALL_FLOATINGOBJECT_S = 'selectAllFloatingObjects',
	        MOVE_FLOATINGOBJECT_S = 'moveFloatingObjects',
	        MOVE_FLOATINGOBJECT_S_UP = 'moveFloatingObjectsUp',
	        MOVE_FLOATINGOBJECT_S_DOWN = 'moveFloatingObjectsDown',
	        MOVE_FLOATINGOBJECT_S_LEFT = 'moveFloatingObjectsLeft',
	        MOVE_FLOATINGOBJECT_S_RIGHT = 'moveFloatingObjectsRight',
	        RESIZE_FLOATINGOBJECT_S = 'resizeFloatingObjects',
	        IS_SELECTED = 'isSelected',
	        NAME = 'name';
	
	    var executeCommand = Commands._executeCommand;
	
	    var NamedObjectArray = (function () {
	        function getName(obj) {
	            if (typeof obj[NAME] === 'string') {
	                return obj[NAME];
	            }
	            return obj[NAME]();
	        }
	
	        function NamedObjectArray() {
	            this._elements = {};
	        }
	
	        NamedObjectArray.prototype = {
	            push: function (element) {
	                this._elements[getName(element)] = element;
	            },
	            remove: function (name) {
	                delete this._elements[name];
	            },
	            find: function (name) {
	                return this._elements[name];
	            },
	            empty: function () {
	                delete this._elements;
	                this._elements = {};
	            },
	            each: function (callback) {
	                var elements = this._elements;
	                for (var n in elements) {
	                    if (elements.hasOwnProperty(n)) {
	                        callback(elements[n]);
	                    }
	                }
	            },
	            isEmpty: function () {
	                var elements = this._elements;
	                for (var n in elements) {
	                    if (elements.hasOwnProperty(n)) {
	                        return false;
	                    }
	                }
	                return true;
	            }
	        };
	        return NamedObjectArray;
	    })();
	
	    function hasSelectedFloatingObject(sheet) {
	        var floatingObjectModel = sheet._floatingObjectModel,
	            selected = false;
	        if (floatingObjectModel) {
	            floatingObjectModel._all().forEach(function (p) {
	                if (p && p[IS_SELECTED]()) {
	                    selected = true;
	                }
	            });
	        }
	        return selected;
	    }
	
	    function resetFloatingObjectFocusByName(sheet, names) {
	        var len = getLength(names), i, item;
	        if (getLength(names) > 0) {
	            for (i = 0; i < len; i++) {
	                item = sheet._floatingObjectModel._get(names[i]);
	                if (item) {
	                    item.isSelected(true);
	                }
	            }
	        }
	    }
	
	    var FloatingObjectUndoActionBase = (function (_super) {
	        $.inherit(FloatingObjectUndoActionBase, _super);
	
	        function FloatingObjectUndoActionBase() {
	            _super.call(this);
	        }
	
	        var prototype = {
	            init: function (sheet, command) {
	                var self = this;
	                self._sheet = sheet;
	                self._command = command;
	            },
	            canExecute: function () {
	                if (hasSelectedFloatingObject(this._sheet)) {
	                    return true;
	                }
	                return false;
	            },
	            canUndo: function () {
	                var changesKey = Commands._getChangesKey(this._sheet.name());
	                var changes = this._command[changesKey];
	                var floatingObjectChanges = changes && changes._floatingObjectChanges;
	                if (floatingObjectChanges && getLength(floatingObjectChanges) > 0) {
	                    return true;
	                }
	                floatingObjectChanges = changes && changes._slicerChanges;
	                if (floatingObjectChanges && getLength(floatingObjectChanges) > 0) {
	                    return true;
	                }
	                return false;
	            }
	        };
	
	        $.extend(FloatingObjectUndoActionBase.prototype, prototype);
	
	        return FloatingObjectUndoActionBase;
	    })(ActionBase);
	    var DeleteFloatingObjectUndoAction = (function (_super) {
	        $.inherit(DeleteFloatingObjectUndoAction, _super);
	
	        function DeleteFloatingObjectUndoAction(sheet, command) {
	            _super.call(this);
	            this.init(sheet, command);
	        }
	
	        var prototype = {
	            constructor: DeleteFloatingObjectUndoAction,
	            execute: function () {
	                var self = this,
	                    ret = false,
	                    sheet = self._sheet,
	                    command = self._command,
	                    names = command.floatingObjects;
	                if (self.canExecute() && $_isArray(names)) {
	                    sheet._modelManager.startTransaction();
	                    self._beforeAction(sheet, true);
	                    var floatingObjectModel = sheet._floatingObjectModel;
	                    for (var i = 0, len = getLength(names); i < len; i++) {
	                        var item = floatingObjectModel._get(names[i]);
	                        if (item) {
	                            var sc = sheet.slicers;
	                            if (self._isSlicer(item) && sc) {
	                                sc._removeInternal(item[NAME]());
	                            }
	                            floatingObjectModel._remove(names[i], true);
	                            item[IS_SELECTED](false);
	                        }
	                    }
	                    sheet._loadAndSetSheetSelections();
	                    self._afterAction(sheet, true);
	                    var changesKey = Commands._getChangesKey(sheet.name());
	                    command[changesKey] = sheet._modelManager.endTransaction();
	                    ret = (getLength(names) > 0);
	                }
	                return ret;
	            },
	            undo: function () {
	                var self = this,
	                    command = self._command,
	                    sheet = self._sheet;
	                if (self.canUndo()) {
	                    self._beforeAction(sheet, true);
	                    var changesKey = Commands._getChangesKey(sheet.name());
	                    sheet._modelManager.undo(command[changesKey]);
	
	                   
	                   
	                   
	                   
	                   
	                   
	                   
	                   
	                   
	                   
	                   
	                    sheet._saveAndClearSheetSelections();
	                    self._afterAction(sheet, true);
	                    return true;
	                }
	                return false;
	            },
	            _isSlicer: function (floatingObject) {
	                return floatingObject && floatingObject.typeName === 'Slicer';
	            }
	        };
	
	        $.extend(DeleteFloatingObjectUndoAction.prototype, prototype);
	
	        return DeleteFloatingObjectUndoAction;
	    })(FloatingObjectUndoActionBase);
	
	    var MovingFloatingObjectUndoAction = (function (_super) {
	        $.inherit(MovingFloatingObjectUndoAction, _super);
	
	        function MovingFloatingObjectUndoAction(sheet, command) {
	            var self = this;
	            _super.call(self);
	            self.init(sheet, command);
	        }
	
	        var prototype = {
	            constructor: MovingFloatingObjectUndoAction,
	            canExecute: function () {
	                return true;
	            },
	            execute: function () {
	                var self = this,
	                    ret = false,
	                    command = self._command,
	                    names = command.floatingObjects,
	                    sheet = self._sheet;
	                if (self.canExecute() && $_isArray(names)) {
	                    sheet._modelManager.startTransaction();
	                    self._beforeAction(sheet, true);
	                    var floatingObjectModel = sheet._floatingObjectModel;
	                    for (var i = 0, len = getLength(names); i < len; i++) {
	                        var item = floatingObjectModel._get(names[i]);
	                        if (!item.allowMove()) {
	                            continue;
	                        }
	                        var position = item.position();
	                        item.position(new Sheets.Point(position.x + command.offsetX, position.y + command.offsetY));
	                    }
	
	                    self._afterAction(sheet, true);
	                    var changesKey = Commands._getChangesKey(sheet.name());
	                    command[changesKey] = sheet._modelManager.endTransaction();
	
	                    ret = (getLength(names) > 0);
	                }
	
	                return ret;
	            },
	            undo: function () {
	                var self = this,
	                    sheet = self._sheet;
	                if (self.canUndo()) {
	                    self._beforeAction(sheet, true);
	                    var changesKey = Commands._getChangesKey(sheet.name());
	                    sheet._modelManager.undo(self._command[changesKey]);
	                    self._afterAction(sheet, true);
	                    return true;
	                }
	                return false;
	            }
	        };
	
	        $.extend(MovingFloatingObjectUndoAction.prototype, prototype);
	
	        return MovingFloatingObjectUndoAction;
	    })(FloatingObjectUndoActionBase);
	
	    var ResizingFloatingObjectUndoAction = (function (_super) {
	        $.inherit(ResizingFloatingObjectUndoAction, _super);
	
	        function ResizingFloatingObjectUndoAction(sheet, command) {
	            var self = this;
	            _super.call(self);
	            self.init(sheet, command);
	        }
	
	        var prototype = {
	            execute: function () {
	                var self = this,
	                    ret = false,
	                    command = self._command,
	                    names = command.floatingObjects,
	                    sheet = self._sheet;
	                resetFloatingObjectFocusByName(sheet, names);
	                if (self.canExecute() && $_isArray(names)) {
	                    sheet._modelManager.startTransaction();
	                    self._beforeAction(sheet, true);
	                    var floatingObjectModel = sheet._floatingObjectModel;
	                    for (var i = 0, len = getLength(names); i < len; i++) {
	                        var item = floatingObjectModel._get(names[i]);
	                        var position = item.position();
	                        item.width(item.width() + command.offsetWidth);
	                        item.height(item.height() + command.offsetHeight);
	                        item.position(new Sheets.Point(position.x + command.offsetX, position.y + command.offsetY));
	                    }
	                    self._afterAction(sheet, true);
	                    var changesKey = Commands._getChangesKey(sheet.name());
	                    command[changesKey] = sheet._modelManager.endTransaction();
	
	                    ret = (getLength(names) > 0);
	                }
	                return ret;
	            },
	            undo: function () {
	                var self = this,
	                    sheet = self._sheet;
	                if (self.canUndo()) {
	                    self._beforeAction(sheet, true);
	                    var changesKey = Commands._getChangesKey(sheet.name());
	                    sheet._modelManager.undo(self._command[changesKey]);
	                    self._afterAction(sheet, true);
	                    return true;
	                }
	                return false;
	            }
	        };
	
	        $.extend(ResizingFloatingObjectUndoAction.prototype, prototype);
	
	        return ResizingFloatingObjectUndoAction;
	    })(FloatingObjectUndoActionBase);
	    var FloatingObjectCopyPasteUndoAction = (function (_super) {
	        $.inherit(FloatingObjectCopyPasteUndoAction, _super);
	
	        function FloatingObjectCopyPasteUndoAction() {
	            var self = this;
	            _super.call(self);
	            self._sheet = keyword_null;
	        }
	
	        var prototype = {
	            canExecute: function () {
	                var self = this,
	                    names = self._command.floatingObjects;
	                if (getLength(names) > 0 && self._canEditObjects(names)) {
	                    return true;
	                }
	                return false;
	            },
	            canUndo: function () {
	                var changesKey = Commands._getChangesKey(this._sheet.name());
	                var changes = this._command[changesKey];
	                var floatingObjectChanges = changes && changes._floatingObjectChanges;
	                if (floatingObjectChanges && getLength(floatingObjectChanges) > 0) {
	                    return true;
	                }
	                return false;
	            },
	            _canEditObjects: function (names) {
	                var self = this, sheet = self._sheet;
	                var floatingObjectModel = sheet._floatingObjectModel;
	                for (var i = 0, len = getLength(names); i < len; i++) {
	                    var item = floatingObjectModel._get(names[i]);
	                    if (item && !sheet._canEditFloatingObject(item)) {
	                        return false;
	                    }
	                }
	                return true;
	            },
	            _isSlicer: function (floatingObject) {
	                return floatingObject && floatingObject.typeName === 'Slicer';
	            }
	        };
	
	        $.extend(FloatingObjectCopyPasteUndoAction.prototype, prototype);
	
	        return FloatingObjectCopyPasteUndoAction;
	    })(ActionBase);
	
	    var ClipboardPasteFloatingObjectUndoAction = (function (_super) {
	        $.inherit(ClipboardPasteFloatingObjectUndoAction, _super);
	
	        function ClipboardPasteFloatingObjectUndoAction(sheet, command) {
	            var self = this;
	            _super.call(self);
	            self.OFFSET = 15;
	            self._sheet = sheet;
	            self._command = command;
	            if(isNullOrUndefined(command.clipboardFloatingObjectData)) {
	                command.clipboardFloatingObjectData = command.fromSheet._clipboardFloatingObjectData;
	            }
	        }
	
	        var prototype = {
	            execute: function () {
	                var self = this,
	                    command = self._command,
	                    names = command.floatingObjects;
	                if (self.canExecute()) {
	                    var sheet = self._sheet, fromSheet = command.fromSheet;
	                    sheet._modelManager.startTransaction();
	                    self._beforeAction(sheet, true);
	                    var selectedObjects = [];
	                    var floatingObjectModel = sheet._floatingObjectModel;
	                   
	                    var clipboardFloatingObjectData = command.clipboardFloatingObjectData;
	                    if (command._activeRowIndex === undefined) {
	                        if (hasSelectedFloatingObject(sheet)) {
	                            floatingObjectModel._all().forEach(function (floatingObject) {
	                                if (floatingObject && floatingObject[IS_SELECTED]()) {
	                                    selectedObjects.push(floatingObject);
	                                }
	                            });
	                        }
	                        command._activeRowIndex = self._sheet.getActiveRowIndex();
	                        command._activeColumnIndex = self._sheet.getActiveColumnIndex();
	                    }
	                   
	                    if (hasSelectedFloatingObject(sheet)) {
	                        floatingObjectModel._all().forEach(function (floatingObject) {
	                            if (floatingObject && floatingObject[IS_SELECTED]()) {
	                                floatingObject[IS_SELECTED](false);
	                            }
	                        });
	                    }
	
	                    var newLocations = [], i, len, maxValue = Number.MAX_VALUE, cutX = maxValue, cutY = maxValue;
	                    var relativePotions = [];
	                    for (i = 0, len = getLength(names); i < len; i++) {
	                        var position = clipboardFloatingObjectData.find(names[i]).position();
	                        cutX = Math_min(cutX, position.x);
	                        cutY = Math_min(cutY, position.y);
	                        relativePotions.push(new Sheets.Point(position.x - cutX, position.y - cutY));
	                    }
	                    var pasteX = 0;
	                    var pasteY = 0;
	                    if (selectedObjects.length) {
	                        var minX = maxValue, minY = maxValue;
	                        selectedObjects.forEach(function (floatingObject) {
	                            if (floatingObject) {
	                                var floatingObjectPosition = floatingObject.position();
	                                minX = Math_min(minX, floatingObjectPosition.x);
	                                minY = Math_min(minY, floatingObjectPosition.y);
	                            }
	                        });
	
	                        pasteX = (minX < maxValue) ? minX + self.OFFSET : 0;
	                        pasteY = (minY < maxValue) ? minY + self.OFFSET : 0;
	                    } else {
	                        for (var row = 0; row < command._activeRowIndex; row++) {
	                            pasteY += sheet._getActualRowHeight(row, 3 );
	                        }
	                        for (var column = 0; column < command._activeColumnIndex; column++) {
	                            pasteX += sheet._getActualColumnWidth(column, 3 );
	                        }
	                    }
	                    for (i = 0, len = getLength(names); i < len; i++) {
	                        var relativePoint = relativePotions[i];
	                        newLocations.push(new Sheets.Point(pasteX + relativePoint.x, pasteY + relativePoint.y));
	                    }
	
	                    var isCutting = command.isCutting;
	                    var fromModel = fromSheet._floatingObjectModel;
	                    for (i = 0, len = getLength(names); i < len; i++) {
	                        var destFloatingObject, newName, needNewName = false;
	                        var srcFloatingObject = clipboardFloatingObjectData.find(names[i]);
	                        destFloatingObject = srcFloatingObject.clone(sheet);
	                        destFloatingObject.sheet(sheet);
	
	                        if (isCutting && !fromModel._get(names[i]) && !floatingObjectModel._get(names[i])) {      
	                            newName = srcFloatingObject.name();
	                        } else {
	                            needNewName = destFloatingObject.name() === srcFloatingObject.name();
	                            if (needNewName) {                                                           
	                                newName = self._isSlicer(destFloatingObject) ? sheet.slicers._getAutoSlicerName(destFloatingObject[NAME]())
	                                    : floatingObjectModel._generateFloatingObjectName();
	                            }
	                        }
	                        if (needNewName) {
	                            destFloatingObject[NAME](newName);
	                        }
	
	                        if (self._isSlicer(destFloatingObject)) {
	                            sheet.slicers._addInternal(destFloatingObject);
	                           
	                            destFloatingObject.width(srcFloatingObject.width());
	                            destFloatingObject.height(srcFloatingObject.height());
	                        }
	
	                        destFloatingObject.isVisible(true);
	                        destFloatingObject.position(newLocations[i]);
	                        destFloatingObject[IS_SELECTED](true);
	
	                        floatingObjectModel._add(destFloatingObject);
	                    }
	                    self._afterAction(sheet, true);
	                    var changesKey = Commands._getChangesKey(sheet.name());
	                    command[changesKey] = sheet._modelManager.endTransaction();
	                    return true;
	                }
	                return false;
	            },
	            undo: function () {
	                var self = this;
	                if (self.canUndo()) {
	                    var sheet = self._sheet;
	                    self._beforeAction(sheet, true);
	                    var changesKey = Commands._getChangesKey(sheet.name());
	                    sheet._modelManager.undo(self._command[changesKey]);
	                    self._afterAction(sheet, true);
	                    return true;
	                }
	                return false;
	            }
	        };
	
	        $.extend(ClipboardPasteFloatingObjectUndoAction.prototype, prototype);
	
	        return ClipboardPasteFloatingObjectUndoAction;
	    })(FloatingObjectCopyPasteUndoAction);
	    var DragCopyFloatingObjectUndoAction = (function (_super) {
	        $.inherit(DragCopyFloatingObjectUndoAction, _super);
	
	        function DragCopyFloatingObjectUndoAction(sheet, command) {
	            var self = this;
	            self._sheet = sheet;
	            self._command = command;
	        }
	
	        var prototype = {
	            constructor: DragCopyFloatingObjectUndoAction,
	            execute: function () {
	                var self = this,
	                    ret = false,
	                    command = self._command,
	                    names = command.floatingObjects,
	                    sheet = self._sheet;
	                if (self.canExecute()) {
	                    sheet._modelManager.startTransaction();
	                    self._beforeAction(sheet, true);
	                    var floatingObjectModel = sheet._floatingObjectModel;
	                    var i, len;
	                    for (i = 0, len = getLength(names); i < len; i++) {
	                        var item = floatingObjectModel._get(names[i]);
	                        if (item) {
	                            var cloneObj = item.clone(sheet);
	                            cloneObj.sheet(sheet);
	                            var position = item.position();
	                            cloneObj.position(new Sheets.Point(position.x + command.offsetX, position.y + command.offsetY));
	                            cloneObj[NAME](floatingObjectModel._generateFloatingObjectName());
	                            cloneObj[IS_SELECTED](true);
	                            item[IS_SELECTED](false);
	                            if (self._isSlicer(cloneObj) && sheet.slicers) {
	                                var slicer = cloneObj;
	                                var slicerName = sheet.slicers._getAutoSlicerName(slicer.columnName());
	                                slicer[NAME](slicerName);
	                                sheet.slicers._addInternal(slicer);
	                            }
	                            floatingObjectModel._add(cloneObj);
	                        }
	                    }
	                    self._afterAction(sheet, true);
	                    var changesKey = Commands._getChangesKey(sheet.name());
	                    command[changesKey] = sheet._modelManager.endTransaction();
	                    ret = true;
	                }
	                return ret;
	            },
	            undo: function () {
	                var self = this,
	                    sheet = self._sheet;
	                if (self.canUndo()) {
	                    self._beforeAction(sheet, true);
	                    var changesKey = Commands._getChangesKey(sheet.name());
	                    sheet._modelManager.undo(self._command[changesKey]);
	                    self._afterAction(sheet, true);
	                    return true;
	                }
	                return false;
	            }
	        };
	
	        $.extend(DragCopyFloatingObjectUndoAction.prototype, prototype);
	
	        return DragCopyFloatingObjectUndoAction;
	    })(FloatingObjectCopyPasteUndoAction);
	
	    function getSelectedFloatingObjects(sheet) {
	        var names = [];
	        sheet._floatingObjectModel._all().forEach(function (item) {
	            if (item[IS_SELECTED]()) {
	                names.push(item[NAME]());
	            }
	        });
	        return names;
	    }
	
	    function clipboardFloatingObjectCopy(sheet, names, isCutting) {
	        var ch = sheet._getFloatingObjectClipboardHelper(),
	            fromSheet = ch.fromSheet;
	
	        ch.fromSheet = sheet;
	        ch.isCutting = isCutting;
	        var floatingObjects = new NamedObjectArray();
	        var length = 0;
	        for (var index = 0; index < getLength(names); index++) {
	            var floatingObject = sheet._floatingObjectModel._get(names[index]);
	            if (floatingObject) {
	                floatingObjects.push(floatingObject);
	                length++;
	            }
	        }
	
	        if (fromSheet) {
	            fromSheet._clipboardFloatingObjectData = keyword_null;
	        }
	
	        sheet._clipboardFloatingObjectData = floatingObjects;
	
	        return (length > 0);
	    }
	
	    Commands[UN_SELECTE_ALL_FLOATINGOBJECT_S] = {
	        canUndo: false,
	        execute: function (context, options) {
	            var sheet = Commands._getWorksheet(context, options);
	            if (hasSelectedFloatingObject(sheet)) {
	                sheet.suspendPaint();
	                sheet._unSelectAllFloatingObjects();
	                sheet._loadAndSetSheetSelections();
	                sheet.resumePaint();
	                return true;
	            }
	            return false;
	        }
	    };
	    Commands[SELECT_ALL_FLOATINGOBJECT_S] = {
	        canUndo: false,
	        execute: function (context, options) {
	            var sheet = Commands._getWorksheet(context, options);
	            sheet.suspendPaint();
	            sheet._floatingObjectModel._all().forEach(function (item) {
	                item[IS_SELECTED](true);
	            });
	            sheet.resumePaint();
	        }
	    };
	   
	    
	    Commands[DELETE_FLOATINGOBJECT_S] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	           
	           
	           
	            var sheet = Commands._getWorksheet(context, options);
	            if (!isUndo) {
	                if (!options.cmd) {
	                    options.cmd = DELETE_FLOATINGOBJECT_S;
	                }
	                if (!options.floatingObjects) {
	                    var names = getSelectedFloatingObjects(sheet);
	                    options.floatingObjects = names;
	                }
	            }
	
	            if (getLength(options.floatingObjects) > 0) {
	                return executeCommand(context, DeleteFloatingObjectUndoAction, options, isUndo);
	            }
	            return false;
	        }
	    };
	    Commands[NAVIGATION_NEXT_FLOATINGOBJECT] = {
	        canUndo: false,
	        execute: function (context, options) {
	            var sheet = Commands._getWorksheet(context, options);
	            if (hasSelectedFloatingObject(sheet)) {
	                sheet.suspendPaint();
	                var selected, first, next, i;
	                var floatingObjects = sheet._floatingObjectModel._all(), floatingObjectsLength = floatingObjects.length;
	                for (i = 0; i < floatingObjectsLength; i++) {
	                    var item = floatingObjects[i];
	                    if (!first) {
	                        first = item;
	                    }
	                    if (selected) {
	                        next = item;
	                        break;
	                    }
	                    if (item && item[IS_SELECTED]()) {
	                        selected = item;
	                    }
	                }
	                sheet._unSelectAllFloatingObjects();
	                if (!next) {
	                    next = first;
	                }
	                if (next) {
	                    next[IS_SELECTED](true);
	                }
	                sheet.resumePaint();
	                return true;
	            }
	            return false;
	        }
	    };
	    Commands[NAVIGATION_PREVIOUS_FLOATINGOBJECT] = {
	        canUndo: false,
	        execute: function (context, options) {
	            var sheet = Commands._getWorksheet(context, options);
	            if (hasSelectedFloatingObject(sheet)) {
	                sheet.suspendPaint();
	                var first, prev, i;
	                var floatingObjects = sheet._floatingObjectModel._all(), floatingObjectsLength = floatingObjects.length;
	                for (i = 0; i < floatingObjectsLength; i++) {
	                    var item = floatingObjects[i];
	                    if (!first) {
	                        first = item;
	                    }
	                    if (!first[IS_SELECTED]()) {
	                        if (!item[IS_SELECTED]()) {
	                            prev = item;
	                        }
	                        if (item[IS_SELECTED]()) {
	                            break;
	                        }
	                    } else {
	                        prev = item;
	                    }
	                }
	                if (prev) {
	                    sheet._unSelectAllFloatingObjects();
	                    prev[IS_SELECTED](true);
	                }
	                sheet.resumePaint();
	                return true;
	            }
	            return false;
	        }
	    };
	    Commands[CUT_FLOATINGOBJECT_S] = {
	        canUndo: false,
	        execute: function (context, options) {
	            var sheet = Commands._getWorksheet(context, options);
	            var selectedFloatingObjects = [];
	            sheet._floatingObjectModel._all().forEach(function (p) {
	                if (p[IS_SELECTED]()) {
	                    selectedFloatingObjects.push(p[NAME]());
	                }
	            });
	            if (getLength(selectedFloatingObjects) > 0) {
	                clipboardFloatingObjectCopy(sheet, selectedFloatingObjects, true);
	                var cmd = {
	                    cmd: DELETE_FLOATINGOBJECT_S, sheetName: sheet.name(), floatingObjects: selectedFloatingObjects
	                };
	                return sheet._commandManager().execute(cmd);
	            }
	
	            return false;
	        }
	    };
	    Commands[COPY_FLOATINGOBJECT_S] = {
	        canUndo: false,
	        execute: function (context, options) {
	            var sheet = Commands._getWorksheet(context, options);
	            var selectedFloatingObjects = [];
	            sheet._floatingObjectModel._all().forEach(function (p) {
	                if (p[IS_SELECTED]()) {
	                    selectedFloatingObjects.push(p[NAME]());
	                }
	            });
	
	            var result = clipboardFloatingObjectCopy(sheet, selectedFloatingObjects, false);
	            if(result) {
	                sheet._clearShapeClipboardHelper && sheet._clearShapeClipboardHelper();
	            }
	            return result;
	        }
	    };
	   
	    
	    Commands[PASTE_FLOATINGOBJECT_S] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            var sheet = Commands._getWorksheet(context, options);
	            if (sheet.isEditing()) {
	                return false;
	            }
	            var ch = sheet._getFloatingObjectClipboardHelper();
	            var fromSheet = ch.fromSheet;
	
	            var clipboardData = fromSheet && fromSheet._clipboardFloatingObjectData;
	            if (!clipboardData) {
	                return false;
	            }
	
	            var names = [];
	            clipboardData.each(function (ele) {
	                names.push(ele[NAME]());
	            });
	
	            if (getLength(names) === 0) {
	                return false;
	            }
	
	            if (sheet._disposed) {
	                return false;
	            }
	
	           
	           
	            if (!isUndo) {
	                if (!options.cmd) {
	                    options.cmd = PASTE_FLOATINGOBJECT_S;
	                }
	                if (!options.floatingObjects) {
	                    options.floatingObjects = names;
	                    options.fromSheet = fromSheet;
	                    options.isCutting = ch.isCutting;
	                }
	            }
	
	            if (getLength(options.floatingObjects) > 0) {
	                return executeCommand(context, ClipboardPasteFloatingObjectUndoAction, options, isUndo);
	            }
	            return false;
	        }
	    };
	   
	    
	    Commands[DRAG_COPY_FLOATINGOBJECT_S] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, DragCopyFloatingObjectUndoAction, options, isUndo);
	        }
	    };
	
	    function moveFloatingObjectFn(direction) {
	        return function (context, options) {
	            var sheet = Commands._getWorksheet(context, options);
	            var offsetX = 0;
	            if (direction === 0) {
	                offsetX = -1;
	            } else if (direction === 2) {
	                offsetX = 1;
	            }
	            var offsetY = 0;
	            if (direction === 1) {
	                offsetY = -1;
	            } else if (direction === 3) {
	                offsetY = 1;
	            }
	            var names = getSelectedFloatingObjects(sheet);
	            return getLength(names) > 0 ? sheet._commandManager().execute({
	                cmd: MOVE_FLOATINGOBJECT_S,
	                sheetName: sheet.name(),
	                floatingObjects: names,
	                offsetX: offsetX,
	                offsetY: offsetY
	            }) : false;
	        };
	    }
	
	    Commands[MOVE_FLOATINGOBJECT_S_LEFT] = moveFloatingObjectFn(0);
	    Commands[MOVE_FLOATINGOBJECT_S_UP] = moveFloatingObjectFn(1);
	    Commands[MOVE_FLOATINGOBJECT_S_RIGHT] = moveFloatingObjectFn(2);
	    Commands[MOVE_FLOATINGOBJECT_S_DOWN] = moveFloatingObjectFn(3);
	   
	    
	    Commands[MOVE_FLOATINGOBJECT_S] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            if (options.offsetX === 0 && options.offsetY === 0) {
	                return false;
	            }
	            return executeCommand(context, MovingFloatingObjectUndoAction, options, isUndo);
	        }
	    };
	   
	    
	    Commands[RESIZE_FLOATINGOBJECT_S] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, ResizingFloatingObjectUndoAction, options, isUndo);
	        }
	    };
	
	    Commands._initFloatingObjectsDefaultCommands = function (commands) {
	        var isMac = Sheets._util._isMacOS(), ctrl = !isMac, meta = isMac;
	
	        commands.register(UN_SELECTE_ALL_FLOATINGOBJECT_S, Commands[UN_SELECTE_ALL_FLOATINGOBJECT_S], 27 , false, false, false, false);
	        commands.register(SELECT_ALL_FLOATINGOBJECT_S, Commands[SELECT_ALL_FLOATINGOBJECT_S], 65 , ctrl, false, false, meta);
	        commands.register(DELETE_FLOATINGOBJECT_S, Commands[DELETE_FLOATINGOBJECT_S], isMac ? 8  : 46 , false, false, false, false);
	        commands.register(NAVIGATION_NEXT_FLOATINGOBJECT, Commands[NAVIGATION_NEXT_FLOATINGOBJECT], 9 , false, false, false, false);
	        commands.register(NAVIGATION_PREVIOUS_FLOATINGOBJECT, Commands[NAVIGATION_PREVIOUS_FLOATINGOBJECT], 9 , false, true, false, false);
	        commands.register(CUT_FLOATINGOBJECT_S, Commands[CUT_FLOATINGOBJECT_S], 88 , ctrl, false, false, meta);
	        commands.register(COPY_FLOATINGOBJECT_S, Commands[COPY_FLOATINGOBJECT_S], 67 , ctrl, false, false, meta);
	        commands.register(DRAG_COPY_FLOATINGOBJECT_S, Commands[DRAG_COPY_FLOATINGOBJECT_S]);
	        commands.register(PASTE_FLOATINGOBJECT_S, Commands[PASTE_FLOATINGOBJECT_S], 86 , ctrl, false, false, meta);
	        commands.register(MOVE_FLOATINGOBJECT_S, Commands[MOVE_FLOATINGOBJECT_S]);
	        commands.register(MOVE_FLOATINGOBJECT_S_UP, Commands[MOVE_FLOATINGOBJECT_S_UP], 38 , false, false, false, false);
	        commands.register(MOVE_FLOATINGOBJECT_S_DOWN, Commands[MOVE_FLOATINGOBJECT_S_DOWN], 40 , false, false, false, false);
	        commands.register(MOVE_FLOATINGOBJECT_S_LEFT, Commands[MOVE_FLOATINGOBJECT_S_LEFT], 37 , false, false, false, false);
	        commands.register(MOVE_FLOATINGOBJECT_S_RIGHT, Commands[MOVE_FLOATINGOBJECT_S_RIGHT], 39 , false, false, false, false);
	        commands.register(RESIZE_FLOATINGOBJECT_S, Commands[RESIZE_FLOATINGOBJECT_S]);
	    };
	
	
	    module.exports = {
	        _NamedObjectArray: NamedObjectArray,
	        FloatingObjectUndoActionBase: FloatingObjectUndoActionBase,
	        DeleteFloatingObjectUndoAction: DeleteFloatingObjectUndoAction,
	        MovingFloatingObjectUndoAction: MovingFloatingObjectUndoAction,
	        ResizingFloatingObjectUndoAction: ResizingFloatingObjectUndoAction,
	        FloatingObjectCopyPasteUndoAction: FloatingObjectCopyPasteUndoAction,
	        ClipboardPasteFloatingObjectUndoAction: ClipboardPasteFloatingObjectUndoAction,
	        DragCopyFloatingObjectUndoAction: DragCopyFloatingObjectUndoAction
	    };
	
	
	}());

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Sheets = __webpack_require__(2),
	        FloatingObjects = __webpack_require__(1),
	        createElement = Sheets._util._createElement,
	        defProperty = Sheets._util._defProperty,
	        FloatingObject = FloatingObjects.FloatingObject,
	        fromJsonFn = FloatingObjects._fromJsonFn,
	        toJsonFn = FloatingObjects._toJsonFn,
	        propertyRefreshCallback = FloatingObjects._propertyRefreshCallback;
	
	    var $ = Sheets.GC$;
	    var keyword_null = null, keyword_undefined = void 0;
	
	    var Picture = (function (_super) {
	        $.inherit(Picture, _super);
	
	        function isValidNumber(v) {
	            return typeof v === 'number' && !isNaN(v);
	        }
	
	        var SRC = 'src', BACK_COLOR = 'backColor', PICTURE_STRETCH = 'pictureStretch',
	            BORDER_RADIUS = 'borderRadius', BORDER_WIDTH = 'borderWidth', BORDER_STYLE = 'borderStyle',
	            BORDER_COLOR = 'borderColor', BORDER_NOFILL = 'noFill';
	        var ps = [SRC, BACK_COLOR, BORDER_RADIUS, BORDER_WIDTH, BORDER_STYLE, BORDER_NOFILL, BORDER_COLOR, PICTURE_STRETCH];
	        var propertiesInfo = [
	            [SRC, keyword_undefined, function (value, oldValue) {
	                var self = this;
	               
	
	                self._isImageLoaded = false;
	                loadImage(self);
	
	                if (!self.srccallback) {
	                    self.srccallback = propertyRefreshCallback(SRC);
	                }
	                self.srccallback.call(self, value, oldValue);
	            }],
	            [BACK_COLOR, keyword_null, propertyRefreshCallback(BACK_COLOR)],
	            [BORDER_RADIUS, -1, propertyRefreshCallback(BORDER_RADIUS), isValidNumber],
	            [BORDER_WIDTH, 1, propertyRefreshCallback(BORDER_WIDTH), isValidNumber],
	            [BORDER_STYLE, 'none', function (value, oldValue) {
	                var self = this;
	                if (!self._isBorderStyleWork(value)) {
	                    self.borderWidth(0);
	                }
	
	                if (!self.bscallback) {
	                    self.bscallback = propertyRefreshCallback(BORDER_STYLE);
	                }
	                self.bscallback.call(self, value, oldValue);
	            }],
	            [BORDER_NOFILL, keyword_undefined],
	            [BORDER_COLOR, keyword_null, propertyRefreshCallback(BORDER_COLOR)],
	            [PICTURE_STRETCH, 0, propertyRefreshCallback(PICTURE_STRETCH)]
	        ];
	       
	        
	        function Picture(name, src, x, y, width, height) {
	            var self = this;
	            _super.call(self, name, x, y, width, height);
	
	            self.typeName = '1';
	            self._kind = '1';
	            self._imageLoader = keyword_null;
	            self._isImageLoaded = false;
	            self._isTakeOriginalSize = false;
	            if (typeof src === 'string') {
	                self._isTakeOriginalSize = !width || !height;
	                self.src(src);
	            }
	        }
	
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	        function loadImage(picture) {
	            var self = picture,
	                src = self.src(),
	                sheet = self.sheet();
	            if (!self._imageLoader) {
	                self._imageLoader = new Sheets._ImageLoader(function () {
	                    loadImage(self);
	                });
	            }
	            var imageLoader = self._imageLoader;
	            try {
	                if (imageLoader._getState(src)) {
	                    self._isImageLoaded = true;
	                    var img = imageLoader._getImage(src);
	                    self._originalWidth = img.width;
	                    self._originalHeight = img.height;
	                    if (self._rot && self._rot % 90 === 0) {
	                        self._rotatedSrc = generateRotatedSrc(img, img.width, img.height, self._rot);
	                    }
	                    if (self._isTakeOriginalSize) {
	                        self.width(img.width, true);       
	                        self.height(img.height, true);
	                        self._isTakeOriginalSize = false;
	                    }
	                    
	                    if (self.isVisible()) {
	                        sheet && sheet.repaint();
	                    }
	                } else {
	                    imageLoader._addImage(src);
	                }
	            } catch (ex) {
	               
	            }
	        }
	        function generateRotatedSrc(img, width, height, rot) {
	            var canvasWidth = width, canvasHeight = height;
	            if (rot === 90 || rot === 270) {
	                canvasWidth = height;
	                canvasHeight = width;
	            }
	            var canvas = document.createElement('canvas');
	            canvas.width = canvasWidth;
	            canvas.height = canvasHeight;
	            var ctx = canvas.getContext('2d');
	            ctx.translate(canvasWidth / 2, canvasHeight / 2);
	            ctx.rotate(rot / 180 * Math.PI);
	            ctx.translate(-canvasWidth / 2, -canvasHeight / 2);
	            ctx.drawImage(img, 0, 0, width, height, (canvasWidth - width) / 2, (canvasHeight - height) / 2, width, height);
	           
	            ctx.setTransform(1, 0, 0, 1, 0, 0);
	            return canvas.toDataURL();
	        }
	
	        var proto = {
	            onPropertyChanged: function (name, value, oldValue) {
	                var self = this;
	                if (self._loading) {
	                    return;
	                }
	                var sheet = self.sheet();
	                if (sheet) {
	                    sheet._modelManager._saveFloatingObjectPropertyChange(self, name, oldValue);
	
	                    this._trigger({
	                        sheet: sheet,
	                        sheetName: sheet.name(),
	                        picture: self,
	                        propertyName: name
	                    });
	                }
	            },
	            toJSON: function () {
	                var self = this;
	                var jsData = _super.prototype.toJSON.call(this);
	                toJsonFn.call(self, ps, jsData);
	                if (self._rot) {
	                    jsData.rot = self._rot;
	                }
	                var srcScale = self._srcScale;
	                if (srcScale) {
	                    var left = srcScale.left, top = srcScale.top;
	                    jsData.srcRect = {
	                        l: left,
	                        t: top,
	                        r: 1 - left - srcScale.width,
	                        b: 1 - top - srcScale.height
	                    };
	                }
	                delete jsData.content; 
	                return jsData;
	            },
	            fromJSON: function (jsData, noSchema) {
	                if (!jsData) {
	                    return;
	                }
	                var self = this;
	                self._loading = true;
	                _super.prototype.fromJSON.call(self, jsData, noSchema);
	                fromJsonFn.call(self, ps, jsData, noSchema);
	                if (jsData.rot) {
	                    self._rot = jsData.rot;
	                }
	                self._isImageLoaded = false;
	                var srcRect = jsData.srcRect;
	                if (srcRect) {
	                    var left = srcRect.l, top = srcRect.t;
	                    self._srcScale = {
	                        left: left,
	                        top: top,
	                        width: 1 - left - srcRect.r,
	                        height: 1 - top - srcRect.b
	                    };
	                }
	                loadImage(self);
	                self._loading = keyword_undefined;
	            },
	            clone: function () {
	                var picture = new Picture();
	                var jsonString = JSON.stringify(this.toJSON());
	                picture.fromJSON(JSON.parse(jsonString));
	                return picture;
	            },
	           
	            
	            getOriginalWidth: function () {
	                return this._originalWidth;
	            },
	           
	            
	            getOriginalHeight: function () {
	                return this._originalHeight;
	            },
	            _isBorderStyleWork: function (style) {
	                var borderStyles = ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'];
	                return borderStyles.indexOf(style) >= 0;
	            },
	            _createContentContainer: function (rowViewportIndex, columnViewportIndex) {
	                var contentContainer = createElement('div');
	                $(contentContainer).addClass('gc-floatingobject-content-container')
	                    .addClass('gc-no-user-select')
	                    .attr('unselectable', 'on')
	                    .css('position', 'absolute');
	                this._addContainer(contentContainer, rowViewportIndex, columnViewportIndex);
	                return contentContainer;
	            },
	            _trigger: function (args) {
	                var sheet = this.sheet();
	                if (sheet) {
	                    sheet._trigger(Sheets.Events.PictureChanged, args);
	                    if (args.propertyName === 'isSelected') {
	                        var selectionArgs = {
	                            sheet: args.sheet,
	                            sheetName: args.sheetName,
	                            picture: args.picture
	                        };
	                        sheet._trigger(Sheets.Events.PictureSelectionChanged, selectionArgs);
	                    }
	                }
	            },
	            _dispose: function (clearCache) {
	                if (self._imageLoader && clearCache !== false) {
	                    self._imageLoader._dispose();
	                    self._imageLoader = keyword_null;
	                }
	            }
	        };
	        $.each(propertiesInfo, function (p, v) {
	            proto[v[0]] = defProperty(v[0], v[1], v[2], v[3]);
	        });
	        $.extend(Picture.prototype, proto);
	        return Picture;
	    })(FloatingObject);
	
	    FloatingObjects.Picture = Picture;
	    module.exports = FloatingObjects;
	
	}());

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var Touch = __webpack_require__(7);
	    if (Touch) {
	        (function () {
	            var Sheets = __webpack_require__(2),
	                FloatingObjects = __webpack_require__(1),
	                $ = Sheets.GC$,
	                $_extend = $.extend,
	                cancelDefault = Sheets._util._cancelDefault,
	                keyword_null = null;
	            var _TouchMouseMessageFilter = Touch._TouchMouseMessageFilter,
	                _TouchTargetElement = Touch._TouchTargetElement;
	    
	           
	            function FloatingObjectTouchManager(element, floatingObjectRender, touchEventProvider) {
	                var self = this;
	                self._touchMouseMessageFilter = new _TouchMouseMessageFilter(self);
	                self._touchTarget = new _TouchTargetElement(element, 'FL_' + floatingObjectRender.name, self._touchMouseMessageFilter, 2, 200);
	                self._touchEventProvider = touchEventProvider;
	                self._touchEventHandler = new FloatingObjectTouchEventHandler(element, floatingObjectRender);
	                var touchEventHandler = self._touchEventHandler;
	                var touchTarget = self._touchTarget;
	                touchTarget._canDoManipulation = function () {
	                    return floatingObjectRender._floatingObject.isSelected();
	                };
	                touchTarget._canDoTap = function () {
	                    return true;
	                };
	                touchTarget._manipulationStarting = function (e) {
	                    return touchEventHandler._doManipulationStarting(e);
	                };
	                touchTarget._manipulationStarted = function (e) {
	                    return touchEventHandler._doManipulationStarted(e);
	                };
	                touchTarget._manipulationDelta = function (e) {
	                    return touchEventHandler._doManipulationDelta(e);
	                };
	               
	               
	               
	                touchTarget._manipulationCompleted = function (e) {
	                    return touchEventHandler._doManipulationCompleted(e);
	                };
	                touchTarget._tapped = function (e) {
	                    return touchEventHandler._doTapped(e);
	                };
	               
	               
	               
	               
	               
	               
	            }
	            $_extend(FloatingObjectTouchManager.prototype, {
	                _attach: function () {
	                    var self = this, touchEventProvider = self._touchEventProvider;
	                    if (touchEventProvider) {
	                        touchEventProvider._attachDettach(self._touchTarget, true);
	                    }
	                },
	                _detach: function () {
	                    var self = this, touchEventProvider = self._touchEventProvider;
	                    if (touchEventProvider) {
	                        touchEventProvider._attachDettach(self._touchTarget, false);
	                    }
	                },
	                _preProcessMouseDown: function (event) {
	                    return this._touchMouseMessageFilter._preProcessMouseDown(event);
	                },
	                _preProcessMouseUp: function (event) {
	                    return this._touchMouseMessageFilter._preProcessMouseUp(event);
	                },
	                _preProcessMouseMove: function (event) {
	                    return this._touchMouseMessageFilter._preProcessMouseMove(event);
	                }
	            });
	    
	            function FloatingObjectTouchEventHandler(element, floatingObjectRender) {
	                var self = this;
	                self._floatingObjectRender = floatingObjectRender;
	                self._floatingObject = floatingObjectRender._floatingObject;
	                self._containerElement = element;
	                self._touchZoomManager = new Touch._TouchZoomManager(floatingObjectRender._sheet);
	            }
	            Sheets._defineFeature(FloatingObjectTouchEventHandler);
	            $_extend(FloatingObjectTouchEventHandler.prototype, {
	                _positionToPage: function(position) {
	                    var newPosition = new Touch._TouchPoint(position.X, position.Y);
	                    var t = $(this._containerElement).offset();
	                    if (t) {
	                        var body = document.body;
	                        newPosition.X += t.left + body.clientLeft || 0;
	                        newPosition.Y += t.top + body.clientTop || 0;
	                    }
	                    return newPosition;
	                },
	                _doManipulationStarting: function (e) {
	                    e._Mode = 1  | 2 ;
	                },
	                _doManipulationStarted: function (e, fromShape) {
	                    var self = this;
	                    var pagePosition = !fromShape ? self._positionToPage(e._Position) : e._Position;
	                   
	                   
	                   
	                   
	                   
	
	                    self._floatingObjectRender._doMouseDown({
	                        target: e._OriginalSource, isTouch: true, button: 0, pageX: pagePosition.X, pageY: pagePosition.Y, stopPropagation: function () {
	                        }
	                    });
	                    if (!fromShape) {
	                        self._touchZoomManager._startZoom();
	                    }
	                },
	                _doManipulationDelta: function (e, fromShape) {
	                    var self = this;
	                    var pagePosition = !fromShape ? self._positionToPage(e._Position) : e._Position;
	                   
	                   
	                   
	                   
	                   
	
	                    var scale = e._Cumulative._Scale, sheet = self._floatingObjectRender._sheet, parent = sheet.parent;
	                    if (scale !== 1 && parent && parent.options.allowUserZoom && !fromShape) {
	                       
	                        sheet._eventHandler._isFloatingObjectWorking = false;
	                        self._floatingObjectRender._resetStatusOnMouseUp();
	                        self._touchZoomManager._continueZoom(scale);
	                    } else {
	                        self._floatingObjectRender._doMouseMove({
	                            isTouch: true, button: 0, pageX: pagePosition.X, pageY: pagePosition.Y, stopPropagation: function () {
	                            }
	                        });
	                    }
	                },
	               
	               
	                _doManipulationCompleted: function (e, fromShape) {
	                    var self = this;
	                    var pagePosition = !fromShape ? self._positionToPage(e._Position) : e._Position;
	                   
	                   
	                   
	                   
	                   
	
	                    var scale = e._Cumulative._Scale, sheet = self._floatingObjectRender._sheet, parent = sheet.parent;
	                    if (scale !== 1 && parent && parent.options.allowUserZoom && !fromShape) {
	                        self._touchZoomManager._endZoom(scale);
	                    } else {
	                        this._floatingObjectRender._doMouseUp({
	                            isTouch: true, button: 0, pageX: pagePosition.X, pageY: pagePosition.Y, stopPropagation: function () {
	                            }
	                        });
	                    }
	                },
	                _doTapped: function (e, fromShape) {
	                    var self = this;
	                    var pagePosition = !fromShape ? self._positionToPage(e._Position) : e._Position;
	                    var argObj = { e: { _Position: pagePosition }, r: keyword_null };
	                    FloatingObjectTouchEventHandler._callFeatureHandler(self, 'preProcessTapped', argObj);
	                    if (argObj.r) {
	                        return;
	                    }
	
	                    try {
	                        var sheet = self._floatingObjectRender._sheet;
	                        sheet.suspendPaint();
	                        if (!self._floatingObject.isSelected()) {
	                            sheet._unSelectAllFloatingObjects();
	                            self._floatingObject.isSelected(true);
	                            sheet._trigger(Sheets.Events.FloatingElementSelected, { type: 'floatingObject' });
	                            Sheets._FocusHelper._setActiveElement(sheet);
	                        }
	                        sheet.clearSelection();
	                    } finally {
	                        sheet.resumePaint();
	                    }
	                }
	               
	               
	               
	               
	            });
	            FloatingObjects.FloatingObjectTouchEventHandler = FloatingObjectTouchEventHandler;
	           
	    
	            __webpack_require__(1)._FloatingObjectRender._registerFeature('touch', {
	                init: function (element) {
	                    var self = this;
	                    var touchManager = self._touchManager = new FloatingObjectTouchManager(element, self, self._sheet.parent._touchEventProvider);
	                    touchManager._attach();
	                },
	                dispose: function () {
	                    var touchManager = this._touchManager;
	                    if (touchManager) {
	                        touchManager._detach();
	                    }
	                },
	                preProcessMouseDown: function(argObj) {
	                    var event = argObj.e;
	                    var touchManager = this._touchManager;
	                    if (touchManager && !event.isTouch && touchManager._preProcessMouseDown(event)) {
	                        cancelDefault(event);
	                        argObj.r = true;
	                    }
	                },
	                preProcessMouseMove: function(argObj) {
	                    var event = argObj.e;
	                    var touchManager = this._touchManager;
	                    if (touchManager && !event.isTouch && touchManager._preProcessMouseMove(event)) {
	                        cancelDefault(event);
	                        argObj.r = true;
	                    }
	                },
	                preProcessMouseUp: function (argObj) {
	                    var event = argObj.e;
	                    var touchManager = this._touchManager;
	                    if (touchManager && !event.isTouch && touchManager._preProcessMouseUp(event)) {
	                        cancelDefault(event);
	                        argObj.r = true;
	                    }
	                }
	            });
	
	            module.exports = FloatingObjects;
	        })();
	    }
	
	}());

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sheets.Touch;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_FloatingObjectHasSameNameError: 'The current worksheet already has a floating object with the same name.',
	        Exp_FloatingObjectNameEmptyError: 'Floating object must have name'
	    };
	    
	
	}());

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {};
	
	}());

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Charts = __webpack_require__(9);
	
	    Charts.ST_TextStrikeType = {
	        noStrike: 0,
	        sngStrike: 1,
	        dblStrike: 2
	    };
	    Charts.ST_LineCap = {
	        rnd: 0,
	        sq: 1,
	        flat: 2
	    };
	    Charts.ST_BlipCompression = {
	        email: 0,
	        screen: 1,
	        print: 2,
	        hqprint: 3,
	        none: 4
	    };
	    Charts.ST_PathShadeType = {
	        shape: 0,
	        circle: 1,
	        rect: 2
	    };
	    Charts.ST_PresetMaterialType = {
	        legacyMatte: 0,
	        legacyPlastic: 1,
	        legacyMetal: 2,
	        legacyWireframe: 3,
	        matte: 4,
	        plastic: 5,
	        metal: 6,
	        warmMatte: 7,
	        translucentPowder: 8,
	        powder: 9,
	        dkEdge: 10,
	        softEdge: 11,
	        clear: 12,
	        flat: 13,
	        softmetal: 14
	    };
	    Charts.ST_Orientation = {
	        maxMin: 0,
	        minMax: 1
	    };
	    Charts.ST_CrossBetween = {
	        between: 0,
	        midCat: 1
	    };
	    Charts.AnchorType = {
	        TwoCellAnchor: 0,
	        OneCellAnchor: 1,
	        AbsoluteAnchor: 2,
	        RelSizeAnchor: 3,
	        AbsSizeAnchor: 4
	    };
	    Charts.ColorFillType = {
	        SolidColorFillProperties: 0,
	        PatternFillProperties: 1,
	        GradientFillProperties: 2,
	        BlipFillProperties: 3,
	        GroupFillProperties: 4,
	        NoFillProperties: 5
	    };
	    Charts.CT_ChartType = {
	        CT_StockChart: 0,
	        CT_ScatterChart: 1,
	        CT_RadarChart: 2,
	        CT_BubbleChart: 3,
	        CT_AreaChart: 4,
	        CT_Area3DChart: 5,
	        CT_BarChart: 6,
	        CT_Bar3DChart: 7,
	        CT_LineChart: 8,
	        CT_Line3DChart: 9,
	        CT_PieChart: 10,
	        CT_Pie3DChart: 11,
	        CT_DoughnutChart: 12,
	        CT_OfPieChart: 13,
	        CT_SurfaceChart: 14,
	        CT_Surface3DChart: 15,
	        CT_BoxWhisker : 16,
	        CT_Funnel : 17,
	        CT_ParetoLine : 18,
	        CT_RegionMap : 19,
	        CT_Sunburst: 20,
	        CT_Treemap : 21,
	        CT_Waterfall : 22,
	        CT_ClusteredColumn : 23
	    };
	    Charts.CT_AxisType = {
	        CT_CatAx: 0,
	        CT_DateAx: 1,
	        CT_SerAx: 2,
	        CT_ValAx: 3
	    };
	    Charts.CT_HiddenExtensionType = {
	        CT_HiddenScene3dExtension: 0,
	        CT_HiddenFillPropertiesExtension: 1,
	        CT_HiddenLinePropertiesBaseExtension: 2,
	        CT_HiddenShape3dExtension: 3,
	        CT_OfficeArtExtension: 4
	    };
	    Charts.ST_FontCollectionIndex = {
	        major: 0,
	        minor: 1,
	        none: 2
	    };
	    Charts.ST_PresetColorVal = {
	        aliceBlue: 0,
	        antiqueWhite: 1,
	        aqua: 2,
	        aquamarine: 3,
	        azure: 4,
	        beige: 5,
	        bisque: 6,
	        black: 7,
	        blanchedAlmond: 8,
	        blue: 9,
	        blueViolet: 10,
	        brown: 11,
	        burlyWood: 12,
	        cadetBlue: 13,
	        chartreuse: 14,
	        chocolate: 15,
	        coral: 16,
	        cornflowerBlue: 17,
	        cornsilk: 18,
	        crimson: 19,
	        cyan: 20,
	        dkBlue: 21,
	        dkCyan: 22,
	        dkGoldenrod: 23,
	        dkGray: 24,
	        dkGreen: 25,
	        dkKhaki: 26,
	        dkMagenta: 27,
	        dkOliveGreen: 28,
	        dkOrange: 29,
	        dkOrchid: 30,
	        dkRed: 31,
	        dkSalmon: 32,
	        dkSeaGreen: 33,
	        dkSlateBlue: 34,
	        dkSlateGray: 35,
	        dkTurquoise: 36,
	        dkViolet: 37,
	        deepPink: 38,
	        deepSkyBlue: 39,
	        dimGray: 40,
	        dodgerBlue: 41,
	        firebrick: 42,
	        floralWhite: 43,
	        forestGreen: 44,
	        fuchsia: 45,
	        gainsboro: 46,
	        ghostWhite: 47,
	        gold: 48,
	        goldenrod: 49,
	        gray: 50,
	        green: 51,
	        greenYellow: 52,
	        honeydew: 53,
	        hotPink: 54,
	        indianRed: 55,
	        indigo: 56,
	        ivory: 57,
	        khaki: 58,
	        lavender: 59,
	        lavenderBlush: 60,
	        lawnGreen: 61,
	        lemonChiffon: 62,
	        ltBlue: 63,
	        ltCoral: 64,
	        ltCyan: 65,
	        ltGoldenrodYellow: 66,
	        ltGray: 67,
	        ltGreen: 68,
	        ltPink: 69,
	        ltSalmon: 70,
	        ltSeaGreen: 71,
	        ltSkyBlue: 72,
	        ltSlateGray: 73,
	        ltSteelBlue: 74,
	        ltYellow: 75,
	        lime: 76,
	        limeGreen: 77,
	        linen: 78,
	        magenta: 79,
	        maroon: 80,
	        medAquamarine: 81,
	        medBlue: 82,
	        medOrchid: 83,
	        medPurple: 84,
	        medSeaGreen: 85,
	        medSlateBlue: 86,
	        medSpringGreen: 87,
	        medTurquoise: 88,
	        medVioletRed: 89,
	        midnightBlue: 90,
	        mintCream: 91,
	        mistyRose: 92,
	        moccasin: 93,
	        navajoWhite: 94,
	        navy: 95,
	        oldLace: 96,
	        olive: 97,
	        oliveDrab: 98,
	        orange: 99,
	        orangeRed: 100,
	        orchid: 101,
	        paleGoldenrod: 102,
	        paleGreen: 103,
	        paleTurquoise: 104,
	        paleVioletRed: 105,
	        papayaWhip: 106,
	        peachPuff: 107,
	        peru: 108,
	        pink: 109,
	        plum: 110,
	        powderBlue: 111,
	        purple: 112,
	        red: 113,
	        rosyBrown: 114,
	        royalBlue: 115,
	        saddleBrown: 116,
	        salmon: 117,
	        sandyBrown: 118,
	        seaGreen: 119,
	        seaShell: 120,
	        sienna: 121,
	        silver: 122,
	        skyBlue: 123,
	        slateBlue: 124,
	        slateGray: 125,
	        snow: 126,
	        springGreen: 127,
	        steelBlue: 128,
	        tan: 129,
	        teal: 130,
	        thistle: 131,
	        tomato: 132,
	        turquoise: 133,
	        violet: 134,
	        wheat: 135,
	        white: 136,
	        whiteSmoke: 137,
	        yellow: 138,
	        yellowGreen: 139
	    };
	    Charts.ST_Grouping = {
	        percentStacked: 0,
	        standard: 1,
	        stacked: 2
	    };
	    Charts.ST_ScatterStyle = {
	        none: 0,
	        line: 1,
	        lineMarker: 2,
	        marker: 3,
	        smooth: 4,
	        smoothMarker: 5
	    };
	    Charts.ST_RadarStyle = {
	        standard: 0,
	        marker: 1,
	        filled: 2
	    };
	    Charts.ST_BarGrouping = {
	        percentStacked: 0,
	        clustered: 1,
	        standard: 2,
	        stacked: 3
	    };
	    Charts.ST_BarDir = {
	        bar: 0,
	        col: 1
	    };
	    Charts.ST_OfPieType = {
	        pie: 0,
	        bar: 1
	    };
	    Charts.ST_AxPos = {
	        b: 0,
	        l: 1,
	        r: 2,
	        t: 3
	    };
	    Charts.ShadowEffectType = {
	        OuterShadowEffect: 0,
	        InnerShadowEffect: 1,
	        PresetShadowEffect: 2
	    };
	    Charts.SeriesType = {
	        BarSer: 0,
	        AreaSer: 1,
	        LineSer: 2,
	        PieSer: 3,
	        RadarSer: 4,
	        ScatterSer: 5,
	        BubbleSer: 6,
	        SurfaceSer: 7,
	        boxWhisker : 16,
	        funnel : 17,
	        paretoLine : 18,
	        regionMap : 19,
	        sunburst: 20,
	        treemap : 21,
	        waterfall : 22,
	        clusteredColumn : 23
	    };
	    Charts.ExtDataType = {
	        InvertSolidFillFmt: 0,
	        SeriesDataLabelsRange: 1
	    };
	    Charts.TextParagraphElementType = {
	        RegularTextRun: 0,
	        TextLineBreak: 1,
	        TextField: 2
	    };
	    Charts.StyleDataFlag = {
	        None: 0,
	        Font: 1,
	        Fill: 2,
	        Border: 4,
	        Alignment: 8,
	        Protection: 16,
	        FormatCode: 32,
	        All: 63
	    };
	   
	   
	   
	    Charts.ColorSchemeIndex = {
	        None: -4142,
	       
	       
	       
	        LT1: 0,
	       
	       
	       
	        DK1: 1,
	       
	       
	       
	        LT2: 2,
	       
	       
	       
	        DK2: 3,
	       
	       
	       
	        Accent1: 4,
	       
	       
	       
	        Accent2: 5,
	       
	       
	       
	        Accent3: 6,
	       
	       
	       
	        Accent4: 7,
	       
	       
	       
	        Accent5: 8,
	       
	       
	       
	        Accent6: 9,
	       
	       
	       
	        Hlink: 10,
	       
	       
	       
	        FolHlink: 11
	    };
	    Charts.ThemeFont = {
	        None: 0,
	        Major: 1,
	        Minor: 2
	    };
	    Charts.DisplayBlanksAs = {
	       
	       
	       
	        Interpolated: 0,
	       
	       
	        NotPlotted: 1,
	       
	       
	       
	        Zero: 2
	    };
	    Charts.ReferenceKind = {
	        Empty: 0,
	        Row: 1,
	        Column: 2,
	        RowIsRelative: 4,
	        ColumnIsRelative: 8,
	        LastRowIsRelative: 16,
	        LastColumnIsRelative: 32,
	        Range: 64,
	        Error: 128
	    };
	    Charts.DrawingType = {
	        Shape: 0,
	        Chart: 1,
	        Picture: 2,
	        Connector: 3,
	        GroupShape: 4
	    };
	    Charts.TextureAlignment = {
	        TextureTopLeft: 0,
	       
	        TextureTop: 1,
	       
	        TextureTopRight: 2,
	       
	        TextureLeft: 3,
	       
	        TextureCenter: 4,
	       
	        TextureRight: 5,
	       
	        TextureBottomLeft: 6,
	       
	        TextureBottom: 7,
	       
	        TextureBottomRight: 8
	    };
	   
	   
	    Charts.TextureType = {
	       
	       
	        TextureTypeNone: 0,
	       
	       
	       
	        TexturePreset: 1,
	       
	       
	       
	        TextureUserDefined: 2
	    };
	   
	   
	    Charts.FillType = {
	       
	       
	       
	        Solid: 0,
	       
	       
	       
	        Patterned: 1,
	       
	       
	       
	        Gradient: 2,
	       
	       
	       
	        Textured: 3,
	       
	       
	       
	        Background: 4,
	       
	       
	       
	        Picture: 5,
	       
	       
	       
	        Group: 6
	    };
	   
	   
	    Charts.PresetGradientType = {
	       
	       
	       
	        GradientEarlySunset: 0,
	       
	       
	       
	        GradientLateSunset: 1,
	       
	       
	       
	        GradientNightfall: 2,
	       
	       
	       
	        GradientDaybreak: 3,
	       
	       
	       
	        GradientHorizon: 4,
	       
	       
	       
	        GradientDesert: 5,
	       
	       
	       
	        GradientOcean: 6,
	       
	       
	       
	        GradientCalmWater: 7,
	       
	       
	       
	        GradientFire: 8,
	       
	       
	       
	        GradientFog: 9,
	       
	       
	       
	        GradientMoss: 10,
	       
	       
	       
	        GradientPeacock: 11,
	       
	       
	       
	        GradientWheat: 12,
	       
	       
	       
	        GradientParchment: 13,
	       
	       
	       
	        GradientMahogany: 14,
	       
	       
	       
	        GradientRainbow: 15,
	       
	       
	       
	        GradientRainbowII: 16,
	       
	       
	       
	        GradientGold: 17,
	       
	       
	       
	        GradientGoldII: 18,
	       
	       
	       
	        GradientBrass: 19,
	       
	       
	       
	        GradientChrome: 20,
	       
	       
	       
	        GradientChromeII: 21,
	       
	       
	       
	        GradientSilver: 22,
	       
	       
	       
	        GradientSapphire: 23
	    };
	   
	   
	    Charts.PresetTexture = {
	       
	       
	       
	        TexturePapyrus: 0,
	       
	       
	       
	        TextureCanvas: 1,
	       
	       
	       
	        TextureDenim: 2,
	       
	       
	       
	        TextureWovenMat: 3,
	       
	       
	       
	        TextureWaterDroplets: 4,
	       
	       
	       
	        TexturePaperBag: 5,
	       
	       
	       
	        TextureFishFossil: 6,
	       
	       
	       
	        TextureSand: 7,
	       
	       
	       
	        TextureGreenMarble: 8,
	       
	       
	       
	        TextureWhiteMarble: 9,
	       
	       
	       
	        TextureBrownMarble: 10,
	       
	       
	       
	        TextureGranite: 11,
	       
	       
	       
	        TextureNewsprint: 12,
	       
	       
	       
	        TextureRecycledPaper: 13,
	       
	       
	       
	        TextureParchment: 14,
	       
	       
	       
	        TextureStationery: 15,
	       
	       
	       
	        TextureBlueTissuePaper: 16,
	       
	       
	       
	        TexturePinkTissuePaper: 17,
	       
	       
	       
	        TexturePurpleMesh: 18,
	       
	       
	       
	        TextureBouquet: 19,
	       
	       
	       
	        TextureCork: 20,
	       
	       
	       
	        TextureWalnut: 21,
	       
	       
	       
	        TextureOak: 22,
	       
	       
	       
	        TextureMediumWood: 23
	    };
	   
	   
	    Charts.GradientColorType = {
	       
	       
	        GradientColorNone: 0,
	       
	       
	       
	        GradientOneColor: 1,
	       
	       
	       
	        GradientTwoColors: 2,
	       
	       
	       
	       
	        GradientPresetColors: 3,
	       
	        GradientMultiColor: 4
	    };
	   
	   
	    Charts.PatternType = {
	       
	       
	        PatternNone: 0,
	       
	       
	       
	        Pattern5Percent: 1,
	       
	       
	       
	        Pattern10Percent: 2,
	       
	       
	       
	        Pattern20Percent: 3,
	       
	       
	       
	        Pattern25Percent: 4,
	       
	       
	       
	        Pattern30Percent: 5,
	       
	       
	       
	        Pattern40Percent: 6,
	       
	       
	       
	        Pattern50Percent: 7,
	       
	       
	       
	        Pattern60Percent: 8,
	       
	       
	       
	        Pattern70Percent: 9,
	       
	       
	       
	        Pattern75Percent: 10,
	       
	       
	       
	        Pattern80Percent: 11,
	       
	       
	       
	        Pattern90Percent: 12,
	       
	       
	       
	        PatternDarkHorizontal: 13,
	       
	       
	       
	        PatternDarkVertical: 14,
	       
	       
	       
	       
	        PatternDarkDownwardDiagonal: 15,
	       
	       
	       
	       
	        PatternDarkUpwardDiagonal: 16,
	       
	       
	       
	        PatternSmallCheckerBoard: 17,
	       
	       
	       
	        PatternTrellis: 18,
	       
	       
	       
	        PatternLightHorizontal: 19,
	       
	       
	       
	        PatternLightVertical: 20,
	       
	       
	       
	       
	        PatternLightDownwardDiagonal: 21,
	       
	       
	       
	       
	        PatternLightUpwardDiagonal: 22,
	       
	       
	       
	       
	        PatternSmallGrid: 23,
	       
	       
	       
	       
	        PatternDottedDiamond: 24,
	       
	       
	       
	       
	        PatternWideDownwardDiagonal: 25,
	       
	       
	       
	       
	        PatternWideUpwardDiagonal: 26,
	       
	       
	       
	       
	        PatternDashedUpwardDiagonal: 27,
	       
	       
	       
	       
	        PatternDashedDownwardDiagonal: 28,
	       
	       
	       
	        PatternNarrowVertical: 29,
	       
	       
	       
	        PatternNarrowHorizontal: 30,
	       
	       
	       
	        PatternDashedVertical: 31,
	       
	       
	       
	        PatternDashedHorizontal: 32,
	       
	       
	       
	        PatternLargeConfetti: 33,
	       
	       
	       
	       
	        PatternLargeGrid: 34,
	       
	       
	       
	        PatternHorizontalBrick: 35,
	       
	       
	       
	        PatternLargeCheckerBoard: 36,
	       
	       
	       
	        PatternSmallConfetti: 37,
	       
	       
	       
	        PatternZigZag: 38,
	       
	       
	       
	        PatternSolidDiamond: 39,
	       
	       
	       
	        PatternDiagonalBrick: 40,
	       
	       
	       
	       
	        PatternOutlinedDiamond: 41,
	       
	       
	       
	       
	        PatternPlaid: 42,
	       
	       
	       
	       
	        PatternSphere: 43,
	       
	       
	       
	        PatternWeave: 44,
	       
	       
	       
	       
	        PatternDottedGrid: 45,
	       
	       
	       
	       
	        PatternDivot: 46,
	       
	       
	       
	        PatternShingle: 47,
	       
	       
	       
	        PatternWave: 48,
	       
	       
	       
	        PatternHorizontal: 49,
	       
	       
	       
	        PatternVertical: 50,
	       
	       
	       
	        PatternCross: 51,
	       
	       
	       
	        PatternDownwardDiagonal: 52,
	       
	       
	       
	        PatternUpwardDiagonal: 53,
	       
	       
	       
	        PatternDiagonalCross: 54
	    };
	   
	   
	    Charts.GradientStyle = {
	       
	       
	       
	        GradientHorizontal: 0,
	       
	       
	       
	        GradientVertical: 1,
	       
	       
	       
	        GradientDiagonalUp: 2,
	       
	       
	       
	        GradientDiagonalDown: 3,
	       
	       
	       
	        GradientFromCorner: 4,
	       
	       
	       
	        GradientFromTitle: 5,
	       
	       
	       
	        GradientFromCenter: 6
	    };
	   
	   
	    Charts.ArrowheadLength = {
	       
	       
	       
	        short: 0,
	       
	       
	       
	        medium: 1,
	       
	       
	       
	        long: 2
	    };
	   
	   
	    Charts.ArrowheadStyle = {
	       
	       
	       
	        none: 0,
	       
	       
	       
	        triangle: 1,
	       
	       
	       
	        stealth: 2,
	       
	       
	       
	        diamond: 3,
	       
	       
	       
	        oval: 4,
	       
	       
	       
	        open: 5
	    };
	   
	   
	    Charts.ArrowheadWidth = {
	       
	       
	       
	        narrow: 0,
	       
	       
	       
	        medium: 1,
	       
	       
	       
	        wide: 2
	    };
	   
	   
	    Charts.LineDashStyle = {
	       
	       
	       
	        solid: 0,
	       
	       
	       
	        squareDot: 1,
	       
	       
	       
	        dash: 2,
	       
	       
	       
	        longDash: 3,
	       
	       
	       
	        dashDot: 4,
	       
	       
	       
	        longDashDot: 5,
	       
	        longDashDotDot: 6,
	       
	        sysDash: 7,
	       
	        sysDot: 8,
	       
	        sysDashDot: 9,
	       
	       
	       
	        dashDotDot: 10,
	       
	       
	       
	        roundDot: 11
	    };
	   
	   
	   
	    Charts.LineCapStyle = {
	       
	       
	       
	        flat: 2,
	       
	       
	       
	        square: 1,
	       
	       
	       
	        round: 0
	    };
	
	   
	   
	   
	    Charts.LineJoinStyle = {
	       
	       
	       
	        round: 0,
	       
	       
	       
	        miter: 1,
	       
	       
	       
	        bevel: 2
	    };
	
	   
	   
	    Charts.LineStyle = {
	       
	       
	       
	        LineSingle: 0,
	       
	       
	       
	        LineThinThin: 1,
	       
	       
	       
	       
	        LineThinThick: 2,
	       
	       
	       
	       
	        LineThickThin: 3,
	       
	       
	       
	        LineThickBetweenThin: 4
	    };
	   
	   
	    Charts.PictureColorType = {
	       
	       
	       
	        PictureAutomatic: 0,
	       
	       
	       
	        PictureGrayscale: 1,
	       
	       
	       
	        PictureBlackAndWhite: 2,
	       
	       
	       
	        PictureWatermark: 3
	    };
	   
	   
	    Charts.ShadowType = {
	       
	       
	       
	        Shadow1: 0,
	       
	       
	       
	        Shadow2: 1,
	       
	       
	       
	        Shadow3: 2,
	       
	       
	       
	        Shadow4: 3,
	       
	       
	       
	        Shadow5: 4,
	       
	       
	       
	        Shadow6: 5,
	       
	       
	       
	        Shadow7: 6,
	       
	       
	       
	        Shadow8: 7,
	       
	       
	       
	        Shadow9: 8,
	       
	       
	       
	        Shadow10: 9,
	       
	       
	       
	        Shadow11: 10,
	       
	       
	       
	        Shadow12: 11,
	       
	       
	       
	        Shadow13: 12,
	       
	       
	       
	        Shadow14: 13,
	       
	       
	       
	        Shadow15: 14,
	       
	       
	       
	        Shadow16: 15,
	       
	       
	       
	        Shadow17: 16,
	       
	       
	       
	        Shadow18: 17,
	       
	       
	       
	        Shadow19: 18,
	       
	       
	       
	        Shadow20: 19,
	       
	       
	       
	        Shadow21: 20,
	       
	       
	       
	        Shadow22: 21,
	       
	       
	       
	        Shadow23: 22,
	       
	       
	       
	        Shadow24: 23,
	       
	       
	       
	        Shadow25: 24,
	       
	       
	       
	        Shadow26: 25,
	       
	       
	       
	        Shadow27: 26,
	       
	       
	       
	        Shadow28: 27,
	       
	       
	       
	        Shadow29: 28,
	       
	       
	       
	        Shadow30: 29,
	       
	       
	       
	        Shadow31: 30,
	       
	       
	       
	        Shadow32: 31,
	       
	       
	       
	        Shadow33: 32,
	       
	       
	       
	        Shadow34: 33,
	       
	       
	       
	        Shadow35: 34,
	       
	       
	       
	        Shadow36: 35,
	       
	       
	       
	        Shadow37: 36,
	       
	       
	       
	        Shadow38: 37,
	       
	       
	       
	        Shadow39: 38,
	       
	       
	       
	        Shadow40: 39,
	       
	       
	       
	        Shadow41: 40,
	       
	       
	       
	        Shadow42: 41,
	       
	       
	       
	        Shadow43: 42
	    };
	   
	   
	    Charts.ShadowStyle = {
	       
	       
	       
	        ShadowStyleInnerShadow: 0,
	       
	       
	       
	        ShadowStyleOuterShadow: 1
	    };
	   
	   
	    Charts.SoftEdgeType = {
	       
	       
	       
	        SoftEdgeTypeNone: 0,
	       
	       
	       
	        SoftEdgeType1: 1,
	       
	       
	       
	        SoftEdgeType2: 2,
	       
	       
	       
	        SoftEdgeType3: 3,
	       
	       
	       
	        SoftEdgeType4: 4,
	       
	       
	       
	        SoftEdgeType5: 5,
	       
	       
	       
	        SoftEdgeType6: 6
	    };
	   
	   
	    Charts.PresetCamera = {
	       
	       
	       
	        CameraLegacyObliqueTopLeft: 0,
	       
	       
	       
	        CameraLegacyObliqueTop: 1,
	       
	       
	       
	        CameraLegacyObliqueTopRight: 2,
	       
	       
	       
	        CameraLegacyObliqueLeft: 3,
	       
	       
	       
	        CameraLegacyObliqueFront: 4,
	       
	       
	       
	        CameraLegacyObliqueRight: 5,
	       
	       
	       
	        CameraLegacyObliqueBottomLeft: 6,
	       
	       
	       
	        CameraLegacyObliqueBottom: 7,
	       
	       
	       
	        CameraLegacyObliqueBottomRight: 8,
	       
	       
	       
	        CameraLegacyPerspectiveTopLeft: 9,
	       
	       
	       
	        CameraLegacyPerspectiveTop: 10,
	       
	       
	       
	        CameraLegacyPerspectiveTopRight: 11,
	       
	       
	       
	        CameraLegacyPerspectiveLeft: 12,
	       
	       
	       
	        CameraLegacyPerspectiveFront: 13,
	       
	       
	       
	        CameraLegacyPerspectiveRight: 14,
	       
	       
	       
	        CameraLegacyPerspectiveBottomLeft: 15,
	       
	       
	       
	        CameraLegacyPerspectiveBottom: 16,
	       
	       
	       
	        CameraLegacyPerspectiveBottomRight: 17,
	       
	       
	       
	        CameraOrthographicFront: 18,
	       
	       
	       
	        CameraIsometricTopUp: 19,
	       
	       
	       
	        CameraIsometricTopDown: 20,
	       
	       
	       
	        CameraIsometricBottomUp: 21,
	       
	       
	       
	        CameraIsometricBottomDown: 22,
	       
	       
	       
	        CameraIsometricLeftUp: 23,
	       
	       
	       
	        CameraIsometricLeftDown: 24,
	       
	       
	       
	        CameraIsometricRightUp: 25,
	       
	       
	       
	        CameraIsometricRightDown: 26,
	       
	       
	       
	        CameraIsometricOffAxis1Left: 27,
	       
	       
	       
	        CameraIsometricOffAxis1Right: 28,
	       
	       
	       
	        CameraIsometricOffAxis1Top: 29,
	       
	       
	       
	        CameraIsometricOffAxis2Left: 30,
	       
	       
	       
	        CameraIsometricOffAxis2Right: 31,
	       
	       
	       
	        CameraIsometricOffAxis2Top: 32,
	       
	       
	       
	        CameraIsometricOffAxis3Left: 33,
	       
	       
	       
	        CameraIsometricOffAxis3Right: 34,
	       
	       
	       
	        CameraIsometricOffAxis3Bottom: 35,
	       
	       
	       
	        CameraIsometricOffAxis4Left: 36,
	       
	       
	       
	        CameraIsometricOffAxis4Right: 37,
	       
	       
	       
	        CameraIsometricOffAxis4Bottom: 38,
	       
	       
	       
	        CameraObliqueTopLeft: 39,
	       
	       
	       
	        CameraObliqueTop: 40,
	       
	       
	       
	        CameraObliqueTopRight: 41,
	       
	       
	       
	        CameraObliqueLeft: 42,
	       
	       
	       
	        CameraObliqueRight: 43,
	       
	       
	       
	        CameraObliqueBottomLeft: 44,
	       
	       
	       
	        CameraObliqueBottom: 45,
	       
	       
	       
	        CameraObliqueBottomRight: 46,
	       
	       
	       
	        CameraPerspectiveFront: 47,
	       
	       
	       
	        CameraPerspectiveLeft: 48,
	       
	       
	       
	        CameraPerspectiveRight: 49,
	       
	       
	       
	        CameraPerspectiveAbove: 50,
	       
	       
	       
	        CameraPerspectiveBelow: 51,
	       
	       
	       
	        CameraPerspectiveAboveLeftFacing: 52,
	       
	       
	       
	        CameraPerspectiveAboveRightFacing: 53,
	       
	       
	       
	        CameraPerspectiveContrastingLeftFacing: 54,
	       
	       
	       
	        CameraPerspectiveContrastingRightFacing: 55,
	       
	       
	       
	        CameraPerspectiveHeroicLeftFacing: 56,
	       
	       
	       
	        CameraPerspectiveHeroicRightFacing: 57,
	       
	       
	       
	        CameraPerspectiveHeroicExtremeLeftFacing: 58,
	       
	       
	       
	        CameraPerspectiveHeroicExtremeRightFacing: 59,
	       
	       
	       
	        CameraPerspectiveRelaxed: 60,
	       
	       
	       
	        CameraPerspectiveRelaxedModerately: 61,
	       
	       
	        PresetCameraNone: 62
	    };
	   
	   
	   
	    Charts.PresetLightingDirection = {
	       
	       
	       
	        LightingTopLeft: 0,
	       
	       
	       
	        LightingTop: 1,
	       
	       
	       
	        LightingTopRight: 2,
	       
	       
	       
	        LightingLeft: 3,
	       
	       
	       
	        LightingNone: 4,
	       
	       
	       
	        LightingRight: 5,
	       
	       
	       
	        LightingBottomLeft: 6,
	       
	       
	       
	        LightingBottom: 7,
	       
	       
	       
	        LightingBottomRight: 8
	    };
	   
	   
	    Charts.LightRigType = {
	       
	       
	       
	        LightRigLegacyFlat1: 0,
	       
	       
	       
	        LightRigLegacyFlat2: 1,
	       
	       
	       
	        LightRigLegacyFlat3: 2,
	       
	       
	       
	        LightRigLegacyFlat4: 3,
	       
	       
	       
	        LightRigLegacyNormal1: 4,
	       
	       
	       
	        LightRigLegacyNormal2: 5,
	       
	       
	       
	        LightRigLegacyNormal3: 6,
	       
	       
	       
	        LightRigLegacyNormal4: 7,
	       
	       
	       
	        LightRigLegacyHarsh1: 8,
	       
	       
	       
	        LightRigLegacyHarsh2: 9,
	       
	       
	       
	        LightRigLegacyHarsh3: 10,
	       
	       
	       
	        LightRigLegacyHarsh4: 11,
	       
	       
	       
	        LightRigThreePoint: 12,
	       
	       
	       
	        LightRigBalanced: 13,
	       
	       
	       
	        LightRigSoft: 14,
	       
	       
	       
	        LightRigHarsh: 15,
	       
	       
	       
	        LightRigFlood: 16,
	       
	       
	       
	        LightRigContrasting: 17,
	       
	       
	       
	        LightRigMorning: 18,
	       
	       
	       
	        LightRigSunrise: 19,
	       
	       
	       
	        LightRigSunset: 20,
	       
	       
	       
	        LightRigChilly: 21,
	       
	       
	       
	        LightRigFreezing: 22,
	       
	       
	       
	        LightRigFlat: 23,
	       
	       
	       
	        LightRigTwoPoint: 24,
	       
	       
	       
	        LightRigGlow: 25,
	       
	       
	       
	        LightRigBrightRoom: 26
	    };
	   
	   
	    Charts.AxisType = {
	       
	       
	        Category: 0,
	       
	       
	       
	        Value: 1,
	       
	       
	       
	        SeriesAxis: 2
	    };
	   
	    
	    Charts.TickLabelPosition = {
	       
	       
	       
	        high: 0,
	       
	       
	       
	        low: 1,        
	        
	        nextToAxis: 2,        
	        
	        none: 3
	    };
	   
	   
	    Charts.ScaleType = {
	       
	       
	        ScaleLogarithmic: 0,
	       
	       
	       
	        ScaleLinear: 1
	    };
	   
	   
	    Charts.TimeUnit = {
	       
	       
	        Days: 0,
	       
	       
	       
	        Months: 1,
	       
	       
	       
	        Years: 2
	    };
	   
	    
	    Charts.TickMark = {
	        
	        cross: 0,
	        
	        inside: 1,
	        
	        none: 2,
	        
	        outside: 3
	    };
	   
	   
	    Charts.DisplayUnit = {
	       
	       
	       
	        Hundreds: 0,
	       
	       
	       
	        Thousands: 1,
	       
	       
	       
	        TenThousands: 2,
	       
	       
	       
	        HundredThousands: 3,
	       
	       
	       
	        Millions: 4,
	       
	       
	       
	        TenMillions: 5,
	       
	       
	       
	        HundredMillions: 6,
	       
	       
	       
	        ThousandMillions: 7,
	       
	       
	        MillionMillions: 8,
	        None: 9,
	        Custom: 10
	    };
	   
	   
	    Charts.AxisCrosses = {
	       
	       
	        AxisCrossesCustom: 0,
	       
	       
	       
	        AxisCrossesAutomatic: 1,
	       
	       
	       
	        AxisCrossesMaximum: 2,
	       
	       
	       
	        AxisCrossesMinimum: 3
	    };
	   
	   
	    Charts.CategoryType = {
	       
	       
	        AutomaticScale: 0,
	       
	       
	       
	        CategoryScale: 1,
	       
	       
	       
	        TimeScale: 2,
	       
	       
	       
	        ValueScale: 3
	    };
	   
	    
	    Charts.AxisGroup = {
	        
	        primary: 0,
	        
	        secondary: 1
	    };
	   
	   
	    Charts.BarShape = {
	       
	       
	       
	        ConeToPoint: 0,
	       
	       
	       
	        ConeToMax: 1,
	       
	       
	        Box: 2,
	       
	       
	       
	        Cylinder: 3,
	       
	       
	       
	        PyramidToPoint: 4,
	       
	       
	       
	        PyramidToMax: 5
	    };
	   
	    
	    Charts.ChartType = {
	        
	        combo: 0,
	        
	        xyScatter: 1,
	        
	        radar: 2,
	        
	        doughnut: 3,
	        pie3D: 4,
	        line3D: 5,
	        column3D: 6,
	        area3D: 7,
	        
	        area: 8,
	        
	        line: 9,
	        
	        pie: 10,
	        
	        bubble: 11,
	        
	        columnClustered: 12,
	        
	        columnStacked: 13,
	        
	        columnStacked100: 14,
	        columnClustered3D: 15,
	        columnStacked3D: 16,
	        columnStacked1003D: 17,
	        
	        barClustered: 18,
	        
	        barStacked: 19,
	        
	        barStacked100: 20,
	        barClustered3D: 21,
	        barStacked3D: 22,
	        barStacked1003D: 23,
	        
	        lineStacked: 24,
	        
	        lineStacked100: 25,
	        
	        lineMarkers: 26,
	        
	        lineMarkersStacked: 27,
	        
	        lineMarkersStacked100: 28,
	        pieOfPie: 29,
	        pieExploded: 30,
	        pieExploded3D: 31,
	        barOfPie: 32,
	        
	        xyScatterSmooth: 33,
	        
	        xyScatterSmoothNoMarkers: 34,
	        
	        xyScatterLines: 35,
	        
	        xyScatterLinesNoMarkers: 36,
	        
	        areaStacked: 37,
	        
	        areaStacked100: 38,
	        areaStacked3D: 39,
	        areaStacked1003D: 40,
	        doughnutExploded: 41,
	        
	        radarMarkers: 42,
	        
	        radarFilled: 43,
	        surface: 44,
	        surfaceWireframe: 45,
	        surfaceTopView: 46,
	        surfaceTopViewWireframe: 47,
	        bubble3DEffect: 48,
	        
	        stockHLC: 49,
	        
	        stockOHLC: 50,
	        
	        stockVHLC: 51,
	        
	        stockVOHLC: 52,
	        
	        boxWhisker : 53,
	        
	        funnel : 54,
	        
	        paretoLine : 55,
	        
	        regionMap : 56,
	        
	        sunburst: 57,
	        
	        treemap : 58,
	        
	        waterfall : 59,
	        
	        clusteredColumn : 60
	    };
	   
	   
	   
	    Charts.TrendlineType = {
	       
	       
	       
	        Exponential: 0,
	       
	       
	       
	       
	        Linear: 1,
	       
	       
	       
	        Logarithmic: 2,
	       
	       
	       
	       
	       
	        MovingAvg: 3,
	       
	       
	       
	        Polynomial: 4,
	       
	       
	       
	        Power: 5
	    };
	   
	    
	    Charts.DataLabelPosition = {
	        
	        bestFit: 0,
	        
	        below: 1,
	        
	        center: 2,
	        
	        insideBase: 3,
	        
	        insideEnd: 4,
	        
	        left: 5,
	        
	        outsideEnd: 6,
	        
	        right: 7,
	        
	        above: 8
	    };
	   
	   
	   
	    Charts.MarkerStyle = {
	       
	       
	       
	        MarkerStyleCircle: 0,
	       
	       
	       
	        MarkerStyleDash: 1,
	       
	       
	       
	        MarkerStyleDiamond: 2,
	       
	       
	       
	        MarkerStyleDot: 3,
	       
	       
	       
	        MarkerStyleNone: 4,
	       
	       
	       
	        MarkerStylePicture: 5,
	       
	       
	       
	        MarkerStylePlus: 6,
	       
	       
	       
	        MarkerStyleSquare: 7,
	       
	       
	       
	        MarkerStyleStar: 8,
	       
	       
	       
	        MarkerStyleTriangle: 9,
	       
	       
	        MarkerStyleX: 10,
	       
	       
	       
	        MarkerStyleAutomatic: 11
	    };
	   
	   
	   
	    Charts.DrawingPictureType = {
	       
	       
	        Stretch: 0,
	       
	       
	       
	        Stack: 1,
	       
	       
	       
	       
	        StackScale: 2
	    };
	   
	   
	    Charts.SizeRepresents = {
	       
	       
	        SizeIsArea: 0,
	       
	       
	       
	        SizeIsWidth: 1
	    };
	   
	   
	   
	    Charts.ChartSplitType = {
	       
	       
	       
	        SplitByPosition: 0,
	       
	       
	       
	       
	        SplitByValue: 1,
	       
	       
	       
	       
	        SplitByPercentValue: 2,
	       
	       
	       
	        SplitByCustomSplit: 3
	    };
	   
	    
	    Charts.LegendPosition = {
	       
	       
	        custom: 0,
	        
	        top: 1,
	        
	        right: 2,
	        
	        left: 3,
	        
	        bottom: 4,
	       
	       
	       
	        corner: 5
	    };
	   
	    
	    Charts.RowCol = {
	        
	        rows: 0,
	        
	        columns: 1
	    };
	   
	   
	    Charts.Placement = {
	       
	       
	        MoveAndSize: 0,
	       
	       
	       
	        Move: 1,
	       
	       
	       
	        FreeFloating: 2
	    };
	   
	   
	   
	    Charts.ChartElements = {
	        All: 0,
	        Chart: 1,
	        PlotArea: 2,
	        Series: 3,
	        SeriesCollection: 4,
	        Point: 5,
	        DataLabel: 6,
	        DataMarker: 7,
	        CategoryAxis: 8,
	        ValueAxis: 9,
	        SeriesAxis: 10,
	        Lengend: 11,
	        FloorWall: 12,
	        SideWall: 13,
	        BackWall: 14,
	        ChartTitle: 15,
	        AxisTitle: 16,
	        ChartGroup: 17
	    };
	    Charts.ImageType = {
	        PNG: 0,
	        JPG: 1,
	        JPEG: 2,
	        EMF: 3
	    };
	    Charts.SolidColorType = {
	        None: 0,
	        Automatic: 1,
	        RGB: 2,
	        Theme: 3
	    };
	    Charts.TextUnderlineType = {
	        None: 0,
	        Words: 1,
	        Single: 2,
	        Double: 3,
	        Heavy: 4,
	        Dotted: 5,
	        DottedHeavy: 6,
	        Dash: 7,
	        DashHeavy: 8,
	        DashLong: 9,
	        DashLongHeavy: 10,
	        DotDash: 11,
	        DotDashHeavy: 12,
	        DotDotDash: 13,
	        DotDotDashHeavy: 14,
	        Wavy: 15,
	        WavyHeavy: 16,
	        WavyDouble: 17
	    };
	    Charts.ReflectionType = {
	        ReflectionTypeNone: 0,
	        ReflectionType1: 1,
	        ReflectionType2: 2,
	        ReflectionType3: 3,
	        ReflectionType4: 4,
	        ReflectionType5: 5,
	        ReflectionType6: 6,
	        ReflectionType7: 7,
	        ReflectionType8: 8,
	        ReflectionType9: 9
	    };
	
	    module.exports = Charts;
	}());

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(3);
	    var Types = Common._Types;
	    var extend = Types._extend;
	    var isNullOrUndefined = Types._isNullOrUndefined;
	
	    var Charts = __webpack_require__(9);
	
	    var StatefullBase = (function () {
	        function StatefullBase(parent) {
	            var _this = this;
	            _this._children = [];
	            _this._workingState = 0;
	            _this._states = 0;
	            _this._parentStateFull = parent;
	            if (_this._parentStateFull) {
	                _this._parentStateFull.AddChildInternal(_this);
	            }
	        }
	        var prototype = StatefullBase.prototype;
	        var defineProperty = Object.defineProperty;
	        extend(prototype, {
	            SetState: function (prop, state) {
	                var _this = this;
	                var stateValue = prop;
	                if (state) {
	                    _this._states |= stateValue;
	                } else {
	                    _this._states &= (~stateValue);
	                }
	                if (!_this.IsClearChildrenStateSuspended) {
	                    _this._children.forEach(function (item) {
	                        item.SetState(prop, false);
	                    });
	                }
	            },
	            GetState: function (prop, includingParent) {
	                var _this = this;
	                var stateValue = prop;
	                var state = ((stateValue & _this._states) === stateValue);
	                if (!state && includingParent && !isNullOrUndefined(_this._parentStateFull)) {
	                    state = _this._parentStateFull.GetState(prop, true);
	                }
	                return state;
	            },
	            OnStateChanged: function (prop) {//eslint-disable-line
	            },
	            Dirty: function (prop) {
	                this.SetState(prop, true);
	            },
	            UnDirty: function (prop) {
	                this.SetState(prop, false);
	            },
	            UnDirtyAll: function () {
	                this._states = 0;
	            },
	            IsDirty: function (prop) {
	                return this.GetState(prop);
	            },
	            IsPropDirtyIncludingParent: function (prop, includingParent) {
	                var _this = this;
	                var dirty = _this.GetState(prop);
	                if (dirty) {
	                    return true;
	                }
	                if (includingParent && !isNullOrUndefined(_this._parentStateFull)) {
	                    return _this._parentStateFull.IsPropDirtyIncludingParent(prop, true);
	                }
	                return false;
	            },
	            IsDirtyIncludingParent: function (includingParent) {
	                var _this = this;
	                if (_this._states > 0) {
	                    return true;
	                }
	                if (includingParent && !isNullOrUndefined(_this._parentStateFull)) {
	                    return _this._parentStateFull.IsDirtyIncludingParent(true);
	                }
	                return false;
	            },
	            AddChildInternal: function (child) {
	                var children = this._children;
	                if (children.indexOf(child) === -1) {
	                    children.push(child);
	                }
	            },
	            RemoveChildInternal: function (child) {
	                var children = this._children, index = children.indexOf(child);
	                if (index !== -1) {
	                    children.splice(index, 1);
	                }
	            },
	           
	           
	           
	           
	            SetParentForChildren: function (newParent) {
	                var copy = this._children.slice(0);
	                copy.forEach(function (item) {
	                   
	                    item.ParentStateful = newParent;
	                });
	               
	            },
	            OnParentChanged: function (newParent) {//eslint-disable-line
	            },
	            SuspendClearChildrenState: function () {
	                this._workingState++;
	            },
	            ResumeClearChilrenState: function () {
	                this._workingState--;
	            }
	        });
	        defineProperty(prototype, "ParentStateful", {
	            get: function () {
	                return this._parentStateFull;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._parentStateFull) {
	                    if (_this._parentStateFull) {
	                        _this._parentStateFull.RemoveChildInternal(this);
	                    }
	                    _this._parentStateFull = value;
	                    if (_this._parentStateFull) {
	                        _this._parentStateFull.AddChildInternal(this);
	                    }
	                    _this.OnParentChanged(value);
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        defineProperty(prototype, "Children", {
	            get: function () {
	                return this._children;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        defineProperty(prototype, "IsClearChildrenStateSuspended", {
	            get: function () {
	                return this._workingState > 0;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return StatefullBase;
	    }());
	    Charts.StatefullBase = StatefullBase;
	
	    module.exports = Charts;
	}());


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Charts = __webpack_require__(9);
	    var Sheets = __webpack_require__(2),
	        $ = Sheets.GC$,
	        StatefullBase = __webpack_require__(11).StatefullBase;
	    var _ColorHelper = __webpack_require__(3)._ColorHelper;
	    var CT_ChartType = __webpack_require__(10).CT_ChartType;
	    var ChartType = __webpack_require__(10).ChartType;
	    var keyword_null = null, keyword_undefined = void 0, Math_max = Math.max, Math_min = Math.min,
	        Math_floor = Math.floor,
	        Math_log = Math.log, Math_pow = Math.pow, Math_ceil = Math.ceil, Math_abs = Math.abs;
	    var MAX_ROW_COUNT = 1048576, MAX_COLUMN_COUNT = 16384;
	
	    function ARGBColor_FromArgb(argb) {
	        return Charts.ARGBColor.FromArgb(argb);
	    }
	
	    function IsNumber(value) {
	        return typeof value === 'number' || value instanceof Date;
	    }
	
	    function defineProperty(obj, prop, descriptor) {
	        descriptor.configurable = true;
	        descriptor.enumerable = true;
	        Object.defineProperty(obj, prop, descriptor);
	    }
	
	    function IsDatesOrTimesNumberFormat(formatCode) {
	        if (!formatCode || formatCode.length === 0) {
	            return false;
	        }
	        formatCode = formatCode.toUpperCase().trim();
	        if (formatCode[0] === '[') {
	            var index = formatCode.indexOf(']');
	            if (index === -1 || index === formatCode.length - 1) {
	                return false;
	            }
	            formatCode = formatCode.substr(index + 1);
	        }
	        var start = -1;
	        var length = 0;
	        var inFormatPattern = false;
	        var isValidDateOrTimePattern = keyword_null;
	        var i = 0, subFormatPattern;
	        for (; i < formatCode.length; i++) {
	            var code = formatCode[i];
	            if (code === '[') {
	                do {
	                    code = formatCode[i];
	                    i++;
	                } while (i < formatCode.length && code !== ']');
	            }
	            if (code === 'Y' || code === 'D' || code === 'M' || code === 'H' || code === 'S') {
	                if (!inFormatPattern) {
	                   
	                   
	                   
	                    if (i === 0 || formatCode[i - 1] !== '\\') {
	                        inFormatPattern = true;
	                        start = i;
	                        length = 1;
	                    }
	                } else {
	                    length++;
	                }
	            } else {
	                inFormatPattern = false;
	                if (code === ' ' && isValidDateOrTimePattern) {
	                    return true;
	                }
	                if (length !== 0) {
	                    subFormatPattern = formatCode.substr(start, length);
	                    start = i;
	                    length = 0;
	                    if (UnitHelper.isNullOrUndefined(isValidDateOrTimePattern)) {   
	                        isValidDateOrTimePattern = IsValidDateOrTimeFormatPattern(subFormatPattern);
	                    } else {
	                        isValidDateOrTimePattern = isValidDateOrTimePattern & IsValidDateOrTimeFormatPattern(subFormatPattern);
	                    }
	                }
	            }
	        }
	        if (length !== 0 && i === formatCode.length) {
	            subFormatPattern = formatCode.substr(start, length);
	            if (UnitHelper.isNullOrUndefined(isValidDateOrTimePattern)) {
	                isValidDateOrTimePattern = IsValidDateOrTimeFormatPattern(subFormatPattern);
	            } else {
	                isValidDateOrTimePattern = isValidDateOrTimePattern & IsValidDateOrTimeFormatPattern(subFormatPattern);
	            }
	        }
	        return isValidDateOrTimePattern;
	    }
	
	    function IsValidDateOrTimeFormatPattern(pattern) {
	        var DateAndTimeFormatElementDict = {'Y': 4, 'D': 4, 'M': 5, 'H': 2, 'S': 2};
	        if (!pattern) {
	            return false;
	        }
	        var itemGroups = {};
	        for (var i = 0; i < pattern.length; i++) {
	            var c = pattern[i];
	            if (itemGroups[c]) {
	                itemGroups[c] = itemGroups[c] + 1;
	            } else {
	                itemGroups[c] = 1;
	            }
	        }
	        for (var prop in itemGroups) {
	            if (itemGroups.hasOwnProperty(prop)) {
	                var maxCount = DateAndTimeFormatElementDict[prop];
	                if (typeof maxCount === 'undefined') {
	                    return false;
	                }
	                if (itemGroups[prop] > maxCount) {
	                    return false;
	                }
	            }
	        }
	        return true;
	    }
	
	    function _getTimezoneOffset(date) {
	       
	       
	       
	       
	       
	       
	        var offset = date.getTimezoneOffset();
	        if (offset === -485) {
	            offset = -485 - 43 / 60;
	        }
	        return offset;
	    }
	
	    var DateTimeExtension = (function () {
	        function DateTimeExtension() {
	        }
	
	        DateTimeExtension.FromOADate = function (oadate) {
	           
	            if (oadate < 60) {
	                oadate++;
	            }
	            
	           
	           
	           
	           
	            var offsetDay = oadate - 25569;
	            var date = new Date(offsetDay * 86400000);
	           
	           
	           
	            var adjustValue = offsetDay >= 0 ? 1 : -1;
	            var oldDateTimezoneOffset = _getTimezoneOffset(date);
	            var ms = (oadate * 86400000 * 1440 + adjustValue - 25569 * 86400000 * 1440 + oldDateTimezoneOffset * 86400000) / 1440;
	            var firstResult = new Date(ms);
	           
	           
	            var fixHourSign = oldDateTimezoneOffset >= 0 ? 1 : -1;
	            var nextHour = new Date(ms + fixHourSign * 3600000);
	            var nextHourTimezoneOffset = _getTimezoneOffset(nextHour);
	            if (oldDateTimezoneOffset !== nextHourTimezoneOffset) {
	                var newResult = new Date(ms + (nextHourTimezoneOffset - oldDateTimezoneOffset) * 60 * 1000);
	                if (oldDateTimezoneOffset > nextHourTimezoneOffset) {
	                   
	                   
	                   
	                    if (fixHourSign === -1 || nextHourTimezoneOffset === _getTimezoneOffset(firstResult)) {
	                        newResult = newResult.getMilliseconds() === 999 ? new Date(newResult.valueOf() + 1) : newResult;
	                        return newResult;
	                    }
	                } else if (oldDateTimezoneOffset < nextHourTimezoneOffset) {    
	                   
	                   
	                   
	                    if (fixHourSign === 1 || nextHourTimezoneOffset === _getTimezoneOffset(firstResult)) {
	                        newResult = newResult.getMilliseconds() === 999 ? new Date(newResult.valueOf() + 1) : newResult;
	                        return newResult;
	                    }
	                }
	            }
	           
	           
	           
	            firstResult = firstResult.getMilliseconds() === 999 ? new Date(firstResult.valueOf() + 1) : firstResult;
	            return firstResult;
	        };
	        DateTimeExtension.ToOADate = function (date) {
	            if (UnitHelper.isNullOrUndefined(date)) {
	                return 0;
	            }
	            if (typeof date === 'number') {
	                date = new Date(date);
	            }
	           
	           
	            var result = (date.getTime() * 1440 + 25569 * 86400000 * 1440 - _getTimezoneOffset(date) * 86400000) / (86400000 * 1440);
	           
	            if (result < 61) {
	                result--;
	            }
	            return result;
	        };
	       
	        DateTimeExtension.OADateMinAsDouble = -657435.0;
	       
	        DateTimeExtension.OADateMaxAsDouble = 2958466.0;
	        return DateTimeExtension;
	    }());
	    Charts.DateTimeExtension = DateTimeExtension;
	    var NumberExtension = (function () {
	        function NumberExtension() {
	        }
	
	        NumberExtension.log = function (value, base) {
	            return Math_log(value) / Math_log(base);
	        };
	        NumberExtension.round = function (value, digits) {
	            var temp = Math_pow(10, digits);
	            return Math.round(value * temp) / temp;
	        };
	        NumberExtension.isNaNOrInfinite = function (value) {
	            return isNaN(value) || !isFinite(value);
	        };
	        NumberExtension.GetTriangleAngle = function (a, b, c) {
	            if (a === 0 && b === 0) {
	                return 0;
	            }
	            var cosB = (a * a + c * c - b * b) / Math_abs((2 * a * c));
	            var addAngle = 0;
	            if (a < 0 && b > 0) {
	                addAngle = 90;
	            } else if (a < 0 && b < 0) {
	                addAngle = 180;
	            } else if (a > 0 && b < 0) {
	                addAngle = 270;
	            }
	            return Math.acos(cosB) * 180 / Math.PI + addAngle;
	        };
	        NumberExtension.INT32_MAX_VALUE = 2147483647;
	        NumberExtension.DOUBLE_MAX_VALUE = Number.MAX_VALUE;
	        NumberExtension.DOUBLE_MIN_VALUE = -Number.MAX_VALUE;
	        return NumberExtension;
	    }());
	    Charts.NumberExtension = NumberExtension;
	    var UnitHelper = (function () {
	        function UnitHelper() {
	        }
	
	        function roundToDecimal(value, digits) {
	            var mult = Math.pow(10, digits);
	            return Math.round(value * mult) / mult;
	        }
	
	        UnitHelper.pointToPixel = function (point) {
	            return roundToDecimal(point * 96 / 72, 2);
	        };
	        UnitHelper.IsNullOrEmpty = function (value) {
	            return UnitHelper.isNullOrUndefined(value) || value === '';
	        };
	        UnitHelper.IsNegativeInfinity = function (value) {
	            return value === Number.NEGATIVE_INFINITY ;
	        };
	        UnitHelper.IsPositiveInfinity = function (value) {
	            return value === Number.POSITIVE_INFINITY ;
	        };
	        UnitHelper.isNullOrUndefined = function (value) {
	            return value === keyword_undefined || value === keyword_null;
	        };
	
	        return UnitHelper;
	    }());
	    Charts.UnitHelper = UnitHelper;
	    var CellRect = (function () {
	        function CellRect(row, column, rowCount, columnCount) {
	            var _this = this;
	            _this.Row = row;
	            _this.Column = column;
	            _this.RowCount = rowCount;
	            _this.ColumnCount = columnCount;
	        }
	
	        var CellRect_prototype = CellRect.prototype;
	        defineProperty(CellRect_prototype, "Left", {
	            get: function () {
	                return this.Column;
	            }
	        });
	        defineProperty(CellRect_prototype, "Top", {
	            get: function () {
	                return this.Row;
	            }
	        });
	        defineProperty(CellRect_prototype, "Right", {
	            get: function () {
	                return this.Column + this.ColumnCount;
	            }
	        });
	        defineProperty(CellRect_prototype, "Bottom", {
	            get: function () {
	                return this.Row + this.RowCount;
	            }
	        });
	        defineProperty(CellRect_prototype, "IsFullColumn", {
	            get: function () {
	                return this.Row === 0 && this.RowCount === NumberExtension.INT32_MAX_VALUE;
	            }
	        });
	        defineProperty(CellRect_prototype, "IsFullRow", {
	            get: function () {
	                return this.Column === 0 && this.ColumnCount === NumberExtension.INT32_MAX_VALUE;
	            }
	        });
	        CellRect_prototype.Intersect = function (range) {
	            var _this = this;
	            var other = range;
	            var left = Math_max(_this.Column, other.Column);
	            var top = Math_max(_this.Row, other.Row);
	            var right = Math_min(_this.Right, other.Right);
	            var bottom = Math_min(_this.Bottom, other.Bottom);
	            if (left >= right || top >= bottom) {
	                _this.Column = 0;
	                _this.Row = 0;
	                _this.ColumnCount = 0;
	                _this.RowCount = 0;
	            } else {
	                _this.Column = left;
	                _this.Row = top;
	                _this.ColumnCount = right - left;
	                _this.RowCount = bottom - top;
	            }
	        };
	        CellRect_prototype.IntersectsWith = function (range) {
	            var _this = this;
	            var other = range;
	            if (_this.Left >= other.Right || _this.Right <= other.Left || _this.Top >= other.Bottom || _this.Bottom <= other.Top) {
	                return false;
	            }
	            return true;
	        };
	        return CellRect;
	    }());
	    Charts.CellRect = CellRect;
	    var Range = (function () {
	        function Range(worksheet, cellRects) {
	            this.Worksheet = worksheet;
	            this._originalRects = cellRects;
	            this.UpdateRects();
	        }
	
	        var Range_prototype = Range.prototype;
	        Range_prototype.UpdateRects = function () {
	            var _this = this;
	            _this._rects = [];
	            var rowCount, columnCount, item, sheet = _this.Worksheet;
	            var maxRowCount = sheet.getRowCount(), maxColumnCount = sheet.getColumnCount();
	            for (var i = 0; i < _this._originalRects.length; i++) {
	                item = _this._originalRects[i];
	                var row = item.Row;
	                var column = item.Column;
	                rowCount = item.RowCount;
	                columnCount = item.ColumnCount;
	                if (row < 0 || rowCount < 0 || column < 0 || columnCount < 0) {
	                    if (row < 0 || rowCount < 0) {
	                        row = 0;
	                        rowCount = NumberExtension.INT32_MAX_VALUE;
	                    }
	                    if (column < 0 || columnCount < 0) {
	                        column = 0;
	                        columnCount = NumberExtension.INT32_MAX_VALUE;
	                    }
	                    _this._originalRects[i] = new CellRect(row, column, rowCount, columnCount);
	                }
	               
	               
	               
	               
	                if ((row !== 0 || rowCount !== NumberExtension.INT32_MAX_VALUE) &&
	                    (row < 0 || rowCount <= 0 || row + rowCount > MAX_ROW_COUNT)) {
	                    throw new Error();
	                }
	                if ((column !== 0 || columnCount !== NumberExtension.INT32_MAX_VALUE) &&
	                    (column < 0 || columnCount <= 0 || column + columnCount > MAX_COLUMN_COUNT)) {
	                    throw new Error();
	                }
	            }
	            for (var _i = 0, _a = _this._originalRects; _i < _a.length; _i++) {
	                item = _a[_i];
	                rowCount = Math_min(item.Bottom, maxRowCount) - item.Top;
	                columnCount = Math_min(item.Right, maxColumnCount) - item.Left;
	                _this._rects.push(new CellRect(item.Row, item.Column, rowCount, columnCount));
	            }
	        };
	        defineProperty(Range_prototype, "Row", {
	            get: function () {
	                var row = this._rects[0].Row;
	                if (row < 0) {
	                    return 0;
	                }
	                return row;
	            }
	        });
	        defineProperty(Range_prototype, "Column", {
	            get: function () {
	                var column = this._rects[0].Column;
	                if (column < 0) {
	                    return 0;
	                }
	                return column;
	            }
	        });
	        defineProperty(Range_prototype, "RowCount", {
	            get: function () {
	                var _this = this;
	                var rowCount = _this._rects[0].RowCount;
	                var row = _this._rects[0].Row;
	                if (rowCount < 0 || row < 0) {
	                    var sheet = _this.Worksheet, maxRowCount = sheet.getRowCount();
	                    return maxRowCount;
	                }
	                return rowCount;
	            }
	        });
	        defineProperty(Range_prototype, "ColumnCount", {
	            get: function () {
	                var _this = this;
	                var columnCount = this._rects[0].ColumnCount;
	                var column = this._rects[0].Column;
	                var sheet = _this.Worksheet, maxColumnCount = sheet.getColumnCount();
	                if (columnCount < 0 || column < 0) {
	                    return maxColumnCount;
	                }
	                return columnCount;
	            }
	        });
	        defineProperty(Range_prototype, "EntireRow", {
	            get: function () {
	                var cellList = [];
	                for (var i = 0; i < this._rects.length; i++) {
	                    var rect = this._rects[i];
	                    rect.Column = -1;
	                    rect.ColumnCount = -1;
	                    cellList.push(rect);
	                }
	                return new Range(this.Worksheet, cellList);
	            }
	        });
	        defineProperty(Range_prototype, "EntireColumn", {
	            get: function () {
	                var cellList = [];
	                for (var i = 0; i < this._rects.length; i++) {
	                    var rect = this._rects[i];
	                    rect.Row = -1;
	                    rect.RowCount = -1;
	                    cellList.push(rect);
	                }
	                return new Range(this.Worksheet, cellList);
	            }
	        });
	        defineProperty(Range_prototype, "Text", {
	            get: function () {
	                var _this = this;
	                return _this.Worksheet._GetCellText(_this.Row, _this.Column, _this.RowCount, _this.ColumnCount);
	            }
	        });
	        defineProperty(Range_prototype, "Areas", {
	            get: function () {
	                var rects = this._rects;
	                var areas = [];
	                for (var _i = 0, rects_1 = rects; _i < rects_1.length; _i++) {
	                    var rect = rects_1[_i];
	                    areas.push(new Range(this.Worksheet, [rect]));
	                }
	                return areas;
	            }
	        });
	        defineProperty(Range_prototype, "Hidden", {
	            get: function () {
	                return this.Worksheet._IsHidden(this._originalRects);
	            }//,
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	        });
	        return Range;
	    }());
	    Charts.Range = Range;
	    var Reference = (function () {
	        function Reference(worksheetName, row, column, lastRow, lastColumn) {
	            var _this = this;
	            _this.WorksheetName = worksheetName;
	            _this.Row = row;
	            _this.Column = column;
	            if (typeof lastRow !== 'undefined') {
	                _this.LastRow = lastRow;
	            }
	            if (typeof lastColumn !== 'undefined') {
	                _this.LastColumn = lastColumn;
	            }
	        }
	
	        var Reference_prototype = Reference.prototype;
	        defineProperty(Reference_prototype, "Row", {
	            get: function () {
	                if ((this.Kind & 1) === 1) {
	                    return this._row;
	                }
	                return 0;
	            },
	            set: function (value) {
	                this._row = value;
	                this.Kind |= 1;
	            }
	        });
	        defineProperty(Reference_prototype, "Column", {
	            get: function () {
	                if ((this.Kind & 2) === 2) {
	                    return this._column;
	                }
	                return 0;
	            },
	            set: function (value) {
	                this._column = value;
	                this.Kind |= 2;
	            }
	        });
	        defineProperty(Reference_prototype, "RowCount", {
	            get: function () {
	                var _this = this;
	                if (_this.IsRange) {
	                    if ((_this.Kind & 1) === 1) {
	                        if (_this.RowIsRelative && _this.LastRowIsRelative || !_this.RowIsRelative && !_this.LastRowIsRelative) {
	                            return _this.LastRow - _this.Row + 1;
	                        }
	                        return -1;
	                    }
	                    var sheet = _this.Worksheet, maxRowCount = sheet.getRowCount();
	                    return maxRowCount;
	                }
	                return 1;
	            }
	        });
	        defineProperty(Reference_prototype, "ColumnCount", {
	            get: function () {
	                var _this = this;
	                if (_this.IsRange) {
	                    if ((_this.Kind & 2) === 2) {
	                        if (_this.ColumnIsRelative && _this.LastColumnIsRelative || !_this.ColumnIsRelative && !_this.LastColumnIsRelative) {
	                            return _this.LastColumn - _this.Column + 1;
	                        }
	                        return -1;
	                    }
	                    var sheet = _this.Worksheet, maxColumnCount = sheet.getColumnCount();
	                    return maxColumnCount;
	
	                }
	                return 1;
	            }
	        });
	        defineProperty(Reference_prototype, "LastColumn", {
	            get: function () {
	                var _this = this;
	                if (_this.IsRange) {
	                    if ((_this.Kind & 2) === 2) {
	                        return _this._lastColumn;
	                    }
	                    var sheet = _this.Worksheet, maxColumnCount = sheet.getColumnCount();
	                    return maxColumnCount - 1;
	                }
	                return _this.Column;
	            },
	            set: function (value) {
	                this._lastColumn = value;
	                this.Kind |= 2 | 64;
	            }
	        });
	        defineProperty(Reference_prototype, "LastRow", {
	            get: function () {
	                var _this = this;
	                if (_this.IsRange) {
	                    if ((_this.Kind & 1) === 1) {
	                        return _this._lastRow;
	                    }
	                    var sheet = _this.Worksheet, maxRowCount = sheet.getRowCount();
	                    return maxRowCount - 1;
	                }
	                return _this.Row;
	            },
	            set: function (value) {
	                this._lastRow = value;
	                this.Kind |= 1 | 64;
	            }
	        });
	        defineProperty(Reference_prototype, "RowIsRelative", {
	            get: function () {
	                return (this.Kind & (1 | 4)) === (1 | 4);
	            }
	        });
	        defineProperty(Reference_prototype, "ColumnIsRelative", {
	            get: function () {
	                return (this.Kind & (2 | 8)) === (2 | 8);
	            }
	        });
	        defineProperty(Reference_prototype, "LastRowIsRelative", {
	            get: function () {
	                if (this.IsRange) {
	                    return (this.Kind & (1 | 16)) === (1 | 16);
	                }
	                return this.RowIsRelative;
	            }
	        });
	        defineProperty(Reference_prototype, "LastColumnIsRelative", {
	            get: function () {
	                if (this.IsRange) {
	                    return (this.Kind & (2 | 32)) === (2 | 32);
	                }
	                return this.ColumnIsRelative;
	            }
	        });
	        defineProperty(Reference_prototype, "IsRange", {
	            get: function () {
	                return (this.Kind & 64) === 64;
	            },
	            set: function (value) {
	                if (value) {
	                    this.Kind |= 64;
	                } else {
	                    this.Kind &= ~64;
	                }
	            }
	        });
	        defineProperty(Reference_prototype, "IsError", {
	            get: function () {
	                return this.WorksheetName === "#REF";
	            }
	        });
	        Reference_prototype.GetSourceRange = function (targetRow, targetColumn) {  
	            var _this = this;
	            var row = _this.Row;
	            var column = _this.Column;
	            var lastRow = _this.LastRow;
	            var lastColumn = _this.LastColumn;
	            return new CellRect(row, column, lastRow - row + 1, lastColumn - column + 1);
	        };
	        Reference_prototype.ToR1C1Text = function (defaultWorksheetName) {
	            if (defaultWorksheetName === keyword_undefined) {
	                defaultWorksheetName = keyword_null;
	            }
	            var _this = this;
	            if ((_this.Kind & 128) === 128) {
	                return _this.GetPrevText(defaultWorksheetName) + "#REF!";
	            }
	            var text = '', r, c;
	            if ((_this.Kind & 1) === 1) {
	                r = _this.Row;
	                if (_this.RowIsRelative) {
	                    if (r === 0) {
	                        text += "R";
	                    } else {
	                        text += "R[" + r.toString() + "]";
	                    }
	                } else {
	                    text += "R" + (r + 1).toString();
	                }
	            }
	            if ((_this.Kind & 2) === 2) {
	                c = _this.Column;
	                if (_this.ColumnIsRelative) {
	                    if (c === 0) {
	                        text += "C";
	                    } else {
	                        text += "C[" + c.toString() + "]";
	                    }
	                } else {
	                    text += "C" + (c + 1).toString();
	                }
	            }
	            if (_this.IsRange) {
	                var ignore = false;
	                if ((_this.Kind & (1 | 2)) !== (1 | 2)) {
	                    if ((_this.Kind & 1) === 1) {
	                        if (_this.RowIsRelative === _this.LastRowIsRelative && _this.Row === _this.LastRow) {
	                            ignore = true;
	                        }
	                    } else if (_this.ColumnIsRelative === _this.LastColumnIsRelative && _this.Column === _this.LastColumn) {
	                        ignore = true;
	                    }
	                }
	                if (!ignore) {
	                    text += ":";
	                    if ((_this.Kind & 1) === 1) {
	                        r = _this.LastRow;
	                        if (_this.LastRowIsRelative) {
	                            if (r === 0) {
	                                text += "R";
	                            } else {
	                                text += "R[" + r.toString() + "]";
	                            }
	                        } else {
	                            text += "R" + (r + 1).toString();
	                        }
	                    }
	                    if ((_this.Kind & 2) === 2) {
	                        c = _this.LastColumn;
	                        if (_this.LastColumnIsRelative) {
	                            if (c === 0) {
	                                text += "C";
	                            } else {
	                                text += "C[" + c.toString() + "]";
	                            }
	                        } else {
	                            text += "C" + (c + 1).toString();
	                        }
	                    }
	                }
	            }
	            return _this.GetPrevText(defaultWorksheetName) + text;
	        };
	        Reference_prototype.ToA1Text = function (baseRow, baseColumn, defaultWorksheetName) {
	            if (defaultWorksheetName === keyword_undefined) {
	                defaultWorksheetName = keyword_null;
	            }
	            var _this = this;
	            if ((_this.Kind & 128) === 128) {
	                return _this.GetPrevText(defaultWorksheetName) + "#REF!";
	            }
	            var text = '', r, c;
	            if ((_this.Kind & 2) === 2) {
	                c = _this.Column;
	                if (_this.ColumnIsRelative) {
	                    c += baseColumn;
	                } else {
	                    text += "$";
	                }
	                text += _this.GetColumnIndexInA1Letter(c);
	            }
	            if ((_this.Kind & 1) === 1) {
	                r = _this.Row;
	                if (_this.RowIsRelative) {
	                    r += baseRow;
	                } else {
	                    text += "$";
	                }
	                text += (r + 1).toString();
	            }
	            if (_this.IsRange) {
	                text += ":";
	                if ((_this.Kind & 2) === 2) {
	                    c = _this.LastColumn;
	                    if (_this.LastColumnIsRelative) {
	                        c += baseColumn;
	                    } else {
	                        text += "$";
	                    }
	                    text += _this.GetColumnIndexInA1Letter(c);
	                }
	                if ((_this.Kind & 1) === 1) {
	                    r = _this.LastRow;
	                    if (_this.LastRowIsRelative) {
	                        r += baseRow;
	                    } else {
	                        text += "$";
	                    }
	                    text += (r + 1).toString();
	                }
	            }
	            return _this.GetPrevText(defaultWorksheetName) + text;
	        };
	        Reference_prototype.GetPrevText = function (defaultWorksheetName) {
	            var _this = this;
	            var prevText = '';
	            if (_this.Workbook > 0) {
	                prevText = "[" + _this.Workbook.toString() + "]";
	            }
	            var worksheetName = _this.WorksheetName;
	            if (UnitHelper.isNullOrUndefined(worksheetName)) {
	                worksheetName = defaultWorksheetName;
	            }
	            if (worksheetName) {
	                if (!UnitHelper.isNullOrUndefined(_this.LastWorksheetName)) {
	                    prevText += worksheetName + ":" + _this.LastWorksheetName;
	                } else {
	                    prevText += worksheetName;
	                }
	            }
	            if (prevText) {
	                if (_this.IsSpecialSheetName(worksheetName) || _this.IsSpecialSheetName(_this.LastWorksheetName)) {
	                    prevText = "'" + prevText.replace("'", "''") + "'";
	                }
	                prevText += "!";
	            } else if (worksheetName === '') {
	                prevText = "!";
	            }
	            return prevText;
	        };
	        Reference_prototype.IsSpecialSheetName = function (name) {
	            if (!UnitHelper.isNullOrUndefined(name)) {
	                if (name === Reference.ErrorWorksheetName) {
	                    return false;
	                }
	                for (var i = 0; i < name.length; i++) {
	                    var c = name[i];
	                    if (!(c >= 'A' && c <= 'Z' || c >= 'a' && c <= 'z' || c >= '0' && c <= '9' || c === '_')) {
	                        return true;
	                    }
	                }
	            }
	            return false;
	        };
	        Reference_prototype.GetColumnIndexInA1Letter = function (num) {
	            var Alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	            var sb = [];
	            var index = 0;
	            while (true) { 
	                index = num % 26;
	                sb.unshift(Alpha[index]);
	                num = parseInt((num / 26));
	                if (num === 0) {
	                    break;
	                }
	                num--;
	            }
	            return sb.join('');
	        };
	        return Reference;
	    }());
	    Reference.ErrorWorksheetName = "#REF";
	    Charts.Reference = Reference;
	    var ChartConstants = Charts.ChartConstants = {
	        XValuesMinMax: "XValuesMinMax",
	        ValuesMinMax: "ValuesMinMax",
	        PrimaryValuesMinMax: "PrimaryValuesMinMax",
	        SecondaryValuesMinMax: "SecondaryValuesMinMax",
	        PrimaryXValuesMinMax: "PrimaryXValuesMinMax",
	        SecondaryXValuesMinMax: "SecondaryXValuesMinMax",
	        Collection: "Collection",
	        Restore: "Restore",
	        ChartType: "ChartType",
	        AxisGroup: "AxisGroup",
	        AreAllXValuesDateTime: "AreAllXValuesDateTime",
	        XValuesFormula: "XValuesFormula",
	        XValues: "XValues",
	        CategoryNames: "CategoryNames",
	        CategoryType: "CategoryType",
	        SecondaryPlot: "SecondaryPlot",
	        SplitType: "SplitType",
	        SplitValue: "SplitValue",
	        IsMultiLevelXValues: "IsMultiLevelXValues",
	        PlotOrder: "PlotOrder",
	        FIELD_TYPE_CELLRANGE: "CELLRANGE",
	        FIELD_TYPE_SERIESNAME: "SERIESNAME",
	        FIELD_TYPE_CATEGORYNAME: "CATEGORYNAME",
	        FIELD_TYPE_VALUE: "VALUE",
	        FIELD_TYPE_XVALUE: "XVALUE",
	        FIELD_TYPE_YVALUE: "YVALUE",
	        FIELD_TYPE_BUBBLESIZE: "BUBBLESIZE",
	        FIELD_TYPE_PERCENTAGE: "PERCENTAGE",
	        FIELD_TYPE_TXLINK: "TxLink",
	        FIELD_TEXT_CELLRANGE: "[CELLRANGE]",
	        FIELD_TEXT_SERIESNAME: "[SERIES NAME]",
	        FIELD_TEXT_CATEGORYNAME: "[CATEGORY NAME]",
	        FIELD_TEXT_VALUE: "[VALUE]",
	        FIELD_TEXT_XVALUE: "[XVALUE]",
	        FIELD_TEXT_YVALUE: "[YVALUE]",
	        FIELD_TEXT_BUBBLESIZE: "[BUBBLE SIZE]",
	        CHART_LATIN_HEAD_FONT: "+mj-lt",
	        CHART_LATIN_BODY_FONT: "+mn-lt",
	        CHART_EA_HEAD_FONT: "+mj-ea",
	        CHART_EA_BODY_FONT: "+mn-ea",
	        CHART_CS_HEAD_FONT: "+mj-cs",
	        CHART_CS_BODY_FONT: "+mn-cs",
	        DefaultLineColorBrightness: 0.85,
	        DefaultMarkerSize: 5
	    };
	    Charts.ShapeConstants = {
	        ShapeTypePrefix: "Shape",
	        PositiveFixedAngleConvert: 60000,
	        PositionConver: 100000,
	        CropPositionConver: 1000,
	        ShadeConver: 200000,
	        DefaultBrightness: 0.5,
	        RelativeRectConver: 1000,
	        DefaultTransparent: 0,
	        PositiveFixedPercentageConvert: 100000,
	        DefaultOffset: 2.07995176
	    };
	    var ChartUtility = (function () {
	        function ChartUtility() {
	        }
	
	        ChartUtility._ToARGBColor = function (currentTheme, color) {
	            var ARGBColor = Charts.ARGBColor;
	            var colorType = color.ColorType;
	            if (colorType === 3) {
	                return ARGBColor.FromIndexedColor(color.Value, color.Tint);
	            } else if (colorType === 4) {
	                var themeColor = ChartUtility.toThemeColorString(color.Value, color.Tint);
	                var colorObj = _ColorHelper._fromString(currentTheme.getColor(themeColor));
	                if (color.Transparency) {
	                    colorObj.a = parseInt(255 * (1 - color.Transparency)); 
	                }
	                return ARGBColor.FromArgbs(colorObj.a, colorObj.r, colorObj.g, colorObj.b);
	            } else if (colorType === 1) {
	                return ARGBColor.FromKnownColor(26);
	            } else if (colorType === 0) {
	                return new ARGBColor();
	            }
	            return ARGBColor.FromArgb(color.Value).GetTintColor(color.Tint);
	        };
	        ChartUtility._ToFont = function (currentTheme, themeFont) {
	            if (themeFont === 1) {
	                return currentTheme.getFont('Headings');
	            } else if (themeFont === 2) {
	                return currentTheme.getFont('Body');
	            }
	            return '';
	        };
	
	        ChartUtility.defineProperty = defineProperty;
	
	        ChartUtility.colorFormatToString = function (obj, needThemeColor, needRGBA, notAddTransprent) {
	            var colorFormat = obj && obj.Color;
	            if (colorFormat && colorFormat.ColorType !== 0 ) {
	                if (needThemeColor) {
	                    var colorData = colorFormat.GetColorData();
	                    if (colorData.ColorType === 4) {
	                        return ChartUtility.toThemeColorString(colorData.Value, colorData.Tint);
	                    }
	                }
	                var rgb = colorFormat.RGB;
	                if (rgb) {
	                    if (needRGBA) {
	                        return "rgba(" + rgb.R + "," + rgb.G + "," + rgb.B + "," + rgb.A / 255 + ")";
	                    }
	                    return "rgb(" + rgb.R + "," + rgb.G + "," + rgb.B + ")";
	                }
	            } else if (colorFormat && colorFormat.ColorType === 0  && notAddTransprent) {
	               
	                return "";
	            }
	            return "transparent";
	        };
	        ChartUtility.getTransparencyFromColorFormat = function (obj) {
	           
	           
	           
	           
	            var colorFormat = obj && obj.Color;
	            if (colorFormat && colorFormat.ColorType !== 0 ) {
	                if (!UnitHelper.isNullOrUndefined(colorFormat.Transparency)) {
	                    return parseFloat(colorFormat.Transparency.toFixed(2));
	                }
	                var rgb = colorFormat.RGB;
	                if (rgb) {
	                    return parseFloat((rgb.A / 255).toFixed(2));
	                }
	            }
	            return 0;
	        };
	        var toThemeColorDict = {
	            0: 'background 1',
	            2: 'background 2',
	            1: 'text 1',
	            3: 'text 2',
	            4: 'accent 1',
	            5: 'accent 2',
	            6: 'accent 3',
	            7: 'accent 4',
	            8: 'accent 5',
	            9: 'accent 6',
	            10: 'hyperlink',
	            11: 'followedhyperlink'
	        };
	        ChartUtility.toThemeColorString = function (index, tint) {
	            return toThemeColorDict[index] + ' ' + parseInt(tint * 100);
	        };
	        var fromThemeColorDict = {
	            'background 1': 0,
	            'background 2': 2,
	            'text 1': 1,
	            'text 2': 3,
	            'accent 1': 4,
	            'accent 2': 5,
	            'accent 3': 6,
	            'accent 4': 7,
	            'accent 5': 8,
	            'accent 6': 9,
	            'hyperlink': 10,
	            'followedhyperlink': 11
	        };
	        ChartUtility.fromThemeColorString = function (colorString) {
	            var tempArray = colorString.split(' '), length = tempArray.length;
	            var firstItem = tempArray[0].toLowerCase(), secondItem = tempArray[1], thirdItem = tempArray[2];
	            if (firstItem === 'hyperlink' || firstItem === 'followedhyperlink') {
	                if (length === 1) {
	                    return {
	                        index: fromThemeColorDict[firstItem],
	                        tint: 0
	                    };
	                }
	                if (length === 2) {
	                    return {
	                        index: fromThemeColorDict[firstItem],
	                        tint: parseInt(secondItem) / 100
	                    };
	                }
	            }
	            if (length >= 2) {
	                var index = fromThemeColorDict[firstItem + ' ' + secondItem];
	                if (index !== keyword_undefined) {
	                    if (length === 2) {
	                        return {
	                            index: index,
	                            tint: 0
	                        };
	                    }
	                    if (length === 3) {
	                        return {
	                            index: index,
	                            tint: parseInt(thirdItem) / 100
	                        };
	                    }
	                }
	            }
	        };
	        ChartUtility.InitPresetColors = function () {
	            var presetColors = ChartUtility.presetColors;
	            presetColors[0] = 16766374;
	            presetColors[1] = 10079474;
	            presetColors[2] = 14276864;
	            presetColors[3] = 12713798;
	            presetColors[4] = 16777126;
	            presetColors[5] = 10938086;
	            presetColors[6] = 8439295;
	            presetColors[7] = 0;
	            presetColors[8] = 8966143;
	            presetColors[9] = 14221312;
	            presetColors[10] = 13180022;
	            presetColors[11] = 2368652;
	            presetColors[12] = 6135762;
	            presetColors[13] = 8947281;
	            presetColors[14] = 55660;
	            presetColors[15] = 1661363;
	            presetColors[16] = 1989375;
	            presetColors[17] = 15234615;
	            presetColors[18] = 9825023;
	            presetColors[19] = 3346875;
	            presetColors[20] = 14276864;
	            presetColors[21] = 7733248;
	            presetColors[22] = 7763456;
	            presetColors[23] = 619164;
	            presetColors[24] = 9474192;
	            presetColors[25] = 21760;
	            presetColors[26] = 5154734;
	            presetColors[27] = 7733366;
	            presetColors[28] = 2644808;
	            presetColors[29] = 30681;
	            presetColors[30] = 11348866;
	            presetColors[31] = 118;
	            presetColors[32] = 5010145;
	            presetColors[33] = 7383408;
	            presetColors[34] = 7746621;
	            presetColors[35] = 4408104;
	            presetColors[36] = 11710208;
	            presetColors[37] = 11731070;
	            presetColors[38] = 8257770;
	            presetColors[39] = 14262784;
	            presetColors[40] = 5855577;
	            presetColors[41] = 15891200;
	            presetColors[42] = 1908119;
	            presetColors[43] = 10936831;
	            presetColors[44] = 1930781;
	            presetColors[45] = 14221529;
	            presetColors[46] = 12303291;
	            presetColors[47] = 16756141;
	            presetColors[48] = 47065;
	            presetColors[49] = 1805497;
	            presetColors[50] = 7171437;
	            presetColors[51] = 27904;
	            presetColors[52] = 196507;
	            presetColors[53] = 10944422;
	            presetColors[54] = 10040319;
	            presetColors[55] = 3881921;
	            presetColors[56] = 7274560;
	            presetColors[57] = 10944511;
	            presetColors[58] = 5954537;
	            presetColors[59] = 15641258;
	            presetColors[60] = 12822271;
	            presetColors[61] = 54889;
	            presetColors[62] = 8975359;
	            presetColors[63] = 14205567;
	            presetColors[64] = 5197802;
	            presetColors[65] = 16777112;
	            presetColors[66] = 9761779;
	            presetColors[67] = 11776947;
	            presetColors[68] = 6219358;
	            presetColors[69] = 9008383;
	            presetColors[70] = 4290815;
	            presetColors[71] = 9541403;
	            presetColors[72] = 16299856;
	            presetColors[73] = 8680547;
	            presetColors[74] = 13411718;
	            presetColors[75] = 10027007;
	            presetColors[76] = 55552;
	            presetColors[77] = 2797098;
	            presetColors[78] = 11193582;
	            presetColors[79] = 14221529;
	            presetColors[80] = 109;
	            presetColors[81] = 9945667;
	            presetColors[82] = 11403264;
	            presetColors[83] = 13120682;
	            presetColors[84] = 13715573;
	            presetColors[85] = 6330419;
	            presetColors[86] = 15284819;
	            presetColors[87] = 8639488;
	            presetColors[88] = 12238640;
	            presetColors[89] = 7410345;
	            presetColors[90] = 6231317;
	            presetColors[91] = 13959082;
	            presetColors[92] = 10068991;
	            presetColors[93] = 7654655;
	            presetColors[94] = 7193855;
	            presetColors[95] = 7143424;
	            presetColors[96] = 10738424;
	            presetColors[97] = 28013;
	            presetColors[98] = 1997147;
	            presetColors[99] = 36057;
	            presetColors[100] = 15321;
	            presetColors[101] = 13322704;
	            presetColors[102] = 7854820;
	            presetColors[103] = 6224222;
	            presetColors[104] = 14934908;
	            presetColors[105] = 7686353;
	            presetColors[106] = 9426175;
	            presetColors[107] = 7845887;
	            presetColors[108] = 3109301;
	            presetColors[109] = 9731583;
	            presetColors[110] = 13530830;
	            presetColors[111] = 14143106;
	            presetColors[112] = 7143533;
	            presetColors[113] = 217;
	            presetColors[114] = 7368873;
	            presetColors[115] = 13979170;
	            presetColors[116] = 1063798;
	            presetColors[117] = 4018680;
	            presetColors[118] = 3181041;
	            presetColors[119] = 4879911;
	            presetColors[120] = 10799871;
	            presetColors[121] = 2508424;
	            presetColors[122] = 10724259;
	            presetColors[123] = 14924631;
	            presetColors[124] = 12597837;
	            presetColors[125] = 8088927;
	            presetColors[126] = 11448063;
	            presetColors[127] = 7133440;
	            presetColors[128] = 10055484;
	            presetColors[129] = 6724547;
	            presetColors[130] = 7171328;
	            presetColors[131] = 12687809;
	            presetColors[132] = 1456895;
	            presetColors[133] = 12702498;
	            presetColors[134] = 15159783;
	            presetColors[135] = 8111854;
	            presetColors[136] = 14277081;
	            presetColors[137] = 13684944;
	            presetColors[138] = 55769;
	            presetColors[139] = 2797187;
	        };
	        ChartUtility.GetPresetColorRGB = function (color) {
	            return ChartUtility.presetColors[color];
	        };
	        ChartUtility.GetDimensioin = function (chartType) {
	            var dict = {
	                0: -1,
	                1: 2,
	                33: 2,
	                34: 2,
	                35: 2,
	                36: 2,
	                11: 3,
	                48: 3,
	                57: 2,
	                58: 2
	            };
	            return dict[chartType] || 1;
	        };
	        ChartUtility.AreValuesAllNum = function (sheet, range) {
	            if (UnitHelper.isNullOrUndefined(range)) {
	                return null;
	            }
	            var dataArray = sheet.getArray(range.row, range.col, range.rowCount, range.colCount);
	            var areAllNum = true;
	            for (var i = 0; i < dataArray.length; i++) {
	                if (!this.AreAllNumbers(dataArray[i])) {
	                    areAllNum = false;
	                    break;
	                }
	            }
	            return areAllNum;
	        };
	        ChartUtility.AreValuesDateTime = function (drawingSheet, refs, visibleOnly) {
	            if (UnitHelper.isNullOrUndefined(refs) || refs.length === 0) {
	                return false;
	            }
	            var areAllDateTimeFormat = true, value;
	            var styles = this.GetStylesFromCellRefers(drawingSheet, refs, visibleOnly);
	            var values = this.GetValuesFromCellRefers(drawingSheet, refs, visibleOnly);
	            for (var i = 0; i < styles.length; i++) {
	                var styleMatrix = styles[i];
	                var rowCount = styleMatrix.length;
	                var colCount = styleMatrix[0] && styleMatrix[0].length;
	                for (var col = 0; col < colCount; col++) {
	                    for (var row = 0; row < rowCount; row++) {
	                        var style = styleMatrix[row][col];
	                        value = values[i][row][col];
	                        if (!UnitHelper.isNullOrUndefined(value) && !(value instanceof Date)
	                            && (UnitHelper.isNullOrUndefined(style) || !IsDatesOrTimesNumberFormat(style.FormatCode) || !IsNumber(value))) {
	                            areAllDateTimeFormat = false;
	                            break;
	                        }
	                    }
	                    if (!areAllDateTimeFormat) {
	                        break;
	                    }
	                }
	                if (!areAllDateTimeFormat) {
	                    break;
	                }
	            }
	            if (areAllDateTimeFormat) {
	                var areAllValuesNull = true;
	                for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
	                    var valueMatrix = values_1[_i];
	                    for (var _a = 0, valueMatrix_1 = valueMatrix; _a < valueMatrix_1.length; _a++) {
	                        value = valueMatrix_1[_a];
	                        if (!UnitHelper.isNullOrUndefined(value)) {
	                            areAllValuesNull = false;
	                            break;
	                        }
	                    }
	                }
	                return !areAllValuesNull;
	            }
	            return false;
	        };
	        ChartUtility.AreAllNumbers = function (values) {
	            var areAllNumbers = true;
	            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
	                var val = values_2[_i];
	                if (!IsNumber(val)) {
	                    areAllNumbers = false;
	                    break;
	                }
	            }
	            return areAllNumbers;
	        };
	        ChartUtility.AreAllNull = function (values) {
	            var areAllNull = true;
	            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
	                var val = values_2[_i];
	                if (val !== null && val !== undefined) {
	                    areAllNull = false;
	                    break;
	                }
	            }
	            return areAllNull;
	        };
	        ChartUtility.AreAllDate = function (values) {
	            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
	                var val = values_2[_i];
	                if (!(val instanceof Date)) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        ChartUtility.TryAllToNumbers = function (values, result, ignoreNull) {
	            if (UnitHelper.isNullOrUndefined(values) || values.length === 0) {
	                return false;
	            }
	            var allNumbers = true;
	            var numbers = [];
	            var count = values.length;
	            for (var _i = 0; _i < count; _i++) {
	                var val = values[_i];
	                if (UnitHelper.isNullOrUndefined(val)) {
	                    if (!ignoreNull) {
	                        numbers.push(val);
	                    }
	                } else {
	                    var outObj = {value: undefined};
	                    if (!this.TryToDouble(val, outObj)) {
	                        allNumbers = false;
	                        numbers.push(0);
	                    } else {
	                        numbers.push(outObj.value);
	                    }
	                }
	            }
	            Array.prototype.push.apply(result, numbers);
	            return allNumbers;
	        };
	        
	        ChartUtility.TryToDouble = function (value, doubleValue, needParseString) {
	            var monthStrings = {
	                "JAN": 1,
	                "FEB": 2,
	                'MAR': 3,
	                'APR': 4,
	                'MAY': 5,
	                'JUN': 6,
	                'JUL': 7,
	                'AUG': 8,
	                'SEP': 9,
	                'OCT': 10,
	                'NOV': 11,
	                'DEC': 12
	            };
	            var result = keyword_null;
	            if (!value) {
	                doubleValue.value = 0;
	                return true;
	            }
	            var typestr = typeof value;
	            try {
	                if (typestr === 'number') {
	                    result = value;
	                } else if (typestr === 'string' && needParseString) {
	                   
	                   
	                   
	                   
	                   
	                   
	                   
	                    value = value.trim();
	                    if (value.length === 0) {
	                        doubleValue.value = 0;
	                        return true;
	                    }
	                   
	                   
	                    var decimalSeparator = '.';
	                    var groupSeparator = ',';
	                    if ((decimalSeparator !== '.' && groupSeparator !== '.' && value.indexOf('.') >= 0)
	                        || (decimalSeparator !== ',' && groupSeparator !== ',' && value.indexOf(',') >= 0)) {
	                        return false;
	                    }
	                   
	                    var isPercent = false;
	                    if (value.charAt(value.length - 1) === '%') {
	                        isPercent = true;
	                        value = value.substr(0, value.length - 1);
	                    }
	                   
	                   
	                   
	                   
	                    if (value[0] === '$' || value[value.length - 1] === '$') {
	                        return false;
	                    }
	                   
	                    if (value.indexOf(decimalSeparator) !== value.lastIndexOf(decimalSeparator)) {
	                        return false;
	                    }
	                   
	                   
	                   
	                    if (value.length >= 2 && value[0] === '0' && value[1] === 'x') {
	                        return false;
	                    }
	                    result = +value;
	                    if (NumberExtension.isNaNOrInfinite(result)) {
	                       
	                       
	                        var c = value.charCodeAt(0);
	                        c |= 0x20;
	                        if (value.length > 4 && c >= 96 && c <= 122) {
	                            var s = value[0] + value[1] + value[2];
	                            s = s.toUpperCase();
	                            if (!monthStrings[s]) {
	                                return false;
	                            }
	                        }
	                       
	                       
	                       
	                        if (value[0] === '/' || value[value.length - 1] === '/') {
	                            return false;
	                        }
	                       
	                       
	                       
	                        if (value[0] === '#' || value[value.length - 1] === '#') {
	                            return false;
	                        }
	                       
	                       
	                       
	                        result = new Date(value);
	                        if (NumberExtension.isNaNOrInfinite(result.valueOf())) {
	                            return false;
	                        }
	                        result = DateTimeExtension.ToOADate(result);
	                    }
	                    if (isPercent) {
	                        result /= 100;
	                    }
	                } else if (typestr === 'boolean') {
	                    result = value ? 1 : 0;
	                } else if (value instanceof Date) {
	                    result = DateTimeExtension.ToOADate(value);
	                } else {
	                    return false;
	                }
	            } catch (ex) {
	                return false;
	            }
	            doubleValue.value = result;  
	            return true;
	        };
	        ChartUtility.IsBarChart = function (chartType) {
	            return chartType === 18 ||
	                chartType === 21 ||
	                chartType === 19 ||
	                chartType === 20 ||
	                chartType === 23 ||
	                chartType === 22;
	        };
	        ChartUtility._getChartTypeString = function (chartType) {
	            var dict = ChartUtility.chartTypeDict;
	            if (!dict) {
	                dict = ChartUtility.chartTypeDict = {};
	                for (var p in ChartType) { 
	                    dict[ChartType[p]] = p.toLowerCase();
	                }
	            }
	            return dict[chartType];
	        };
	        ChartUtility.IsColumnChart = function (chartType) {
	            return ChartUtility._getChartTypeString(chartType).indexOf("column") >= 0;
	        };
	        ChartUtility.IsAnyPieChart = function (chartType) {
	            return this.IsPieChart(chartType) || this.IsDoughnutChart(chartType) || this.IsOfPieChart(chartType);
	        };
	        ChartUtility.IsPieChart = function (chartType) {
	            return ChartUtility._getChartTypeString(chartType).indexOf("pie") >= 0;
	        };
	        ChartUtility.IsPieOrDoughnutChart = function (chartType) {
	            return this.IsPieChart(chartType) || this.IsDoughnutChart(chartType);
	        };
	        ChartUtility.IsRadarChart = function (chartType) {
	            return chartType === 2 ||
	                chartType === 43 ||
	                chartType === 42;
	        };
	        ChartUtility.IsOfPieChart = function (chartType) {
	            return chartType === 29 ||
	                chartType === 32;
	        };
	        ChartUtility.IsStackedChart = function (chartType) {
	            return ChartUtility._getChartTypeString(chartType).indexOf("stacked") >= 0;
	        };
	        ChartUtility.IsStacked100Chart = function (chartType) {
	            return ChartUtility._getChartTypeString(chartType).indexOf("stacked100") >= 0;
	        };
	        ChartUtility.IsLineChart = function (chartType) {
	            return chartType === 5 ||
	                chartType === 9 ||
	                chartType === 26 ||
	                chartType === 27 ||
	                chartType === 28 ||
	                chartType === 24 ||
	                chartType === 25;
	        };
	        ChartUtility.IsLineMarkerChart = function (chartType) {
	            return chartType === 26 ||
	                chartType === 27 ||
	                chartType === 28;
	        };
	        ChartUtility.IsLineSeries = function (chartType) {
	            return chartType === 9 ||
	                chartType === 26 ||
	                chartType === 27 ||
	                chartType === 28 ||
	                chartType === 24 ||
	                chartType === 25 ||
	                chartType === 35 ||
	                chartType === 36 ||
	                chartType === 33 ||
	                chartType === 34 ||
	                chartType === 2 ||
	                chartType === 42;
	        };
	        ChartUtility.IsMarkerSeries = function (chartType) {
	            return chartType === 26 ||
	                chartType === 27 ||
	                chartType === 28 ||
	                chartType === 42 ||
	                chartType === 1 ||
	                chartType === 35 ||
	                chartType === 33;
	        };
	        ChartUtility.IsFillSeries = function (chartType) {
	            return !this.IsLineSeries(chartType) && chartType !== 1;
	        };
	        ChartUtility.IsAreaChart = function (chartType) {
	            return ChartUtility._getChartTypeString(chartType).indexOf("area") >= 0;
	        };
	        ChartUtility.IsScatterChart = function (chartType) {
	            return ChartUtility._getChartTypeString(chartType).indexOf("scatter") >= 0;
	        };
	        ChartUtility.IsSurfaceChart = function (chartType) {
	            return ChartUtility._getChartTypeString(chartType).indexOf("surface") >= 0;
	        };
	        ChartUtility.IsBubbleChart = function (chartType) {
	            return ChartUtility._getChartTypeString(chartType).indexOf("bubble") >= 0;
	        };
	        ChartUtility.IsSmoothLine = function (chartType) {
	            return ChartUtility._getChartTypeString(chartType).indexOf("smooth") >= 0;
	        };
	        ChartUtility.Is3DChart = function (chartType) {
	            var typeStr = ChartUtility._getChartTypeString(chartType);
	            return (typeStr.indexOf("3d") >= 0 && chartType !== 48) ||
	                this.IsSurfaceChart(chartType) ||
	                typeStr.indexOf("cylinder") >= 0 ||
	                typeStr.indexOf("cone") >= 0 ||
	                typeStr.indexOf("pyramid") >= 0;
	        };
	        ChartUtility.IsSurface3DChart = function (chartType) {
	            return chartType === 44 || chartType === 45;
	        };
	        ChartUtility.IsDoughnutChart = function (chartType) {
	            return chartType === 3 ||
	                chartType === 41;
	        };
	        ChartUtility.IsExplodedChart = function (chartType) {
	            return chartType === 31 ||
	                chartType === 41 ||
	                chartType === 30;
	        };
	        ChartUtility.HasSeriesAx = function (chartType) {
	            return chartType === 6 ||
	                chartType === 7 ||
	                chartType === 5 ||
	                this.IsSurfaceChart(chartType);
	        };
	        ChartUtility.IsStockChart = function (chartType) {
	            return ChartUtility._getChartTypeString(chartType).indexOf("stock") >= 0;
	        };
	        ChartUtility.IsTreeMap = function (chartType) {
	            return chartType === 58;
	        };
	        ChartUtility.IsSunburstChart = function (chartType) {
	            return chartType === 57;
	        };
	        ChartUtility.IsSunburstOrTreemapChart = function (chartType) {
	            return ChartUtility.IsTreeMap(chartType) || ChartUtility.IsSunburstChart(chartType);
	        };
	        ChartUtility.IsStockHLC = function (chartType) {
	            return chartType === 49;
	        };
	        ChartUtility.IsBuiltInComboChart = function (chartType) {
	            return this.IsStockChart(chartType);
	        };
	        ChartUtility.ConvertToTextUnderlineType = function (underline) {
	            var result = 0;
	            if (underline === 1) {
	                result = 2;
	            } else if (underline === 2) {
	                result = 3;
	            }
	            return result;
	        };
	        ChartUtility.ToUnderlineType = function (underline) {
	            var result = 0;
	            if (underline === 2) {
	                result = 1;
	            } else if (underline === 3) {
	                result = 2;
	            }
	            return result;
	        };
	        ChartUtility.MapToGroupType = function (chartType) {
	            var dict = {
	                12: 9,
	                13: 9,
	                14: 9,
	
	                15: 3,
	                16: 3,
	                17: 3,
	                6: 3,
	
	                18: 8,
	                19: 8,
	                20: 8,
	
	                21: 2,
	                22: 2,
	                23: 2,
	
	                9: 11,
	                24: 11,
	                25: 11,
	
	                26: 11,
	                27: 11,
	                28: 11,
	
	                5: 4,
	
	                10: 12,
	                29: 12,
	                30: 12,
	                32: 12,
	
	                31: 5,
	                4: 5,
	
	                1: 14,
	                33: 14,
	                34: 14,
	                35: 14,
	                36: 14,
	
	                8: 7,
	                37: 7,
	                38: 7,
	
	                39: 1,
	                40: 1,
	                7: 1,
	
	                3: 10,
	                41: 10,
	
	                2: 13,
	                42: 13,
	                43: 13,
	
	                44: 6,
	                45: 6,
	                46: 6,
	                47: 6,
	
	                11: 14,
	                48: 14,
	
	                49: 11,
	                50: 11,
	                51: 11,
	                52: 11
	            };
	            return dict[chartType] || 0;
	        };
	        ChartUtility.HasSeriesLines = function (chartType) {
	            return this.IsOfPieChart(chartType);
	        };
	        ChartUtility.HasHiLoLines = function (chartType) {
	            return this.IsStockChart(chartType);
	        };
	        ChartUtility.HasUpDownBars = function (chartType) {
	            return chartType === 50 ||
	                chartType === 52;
	        };
	        ChartUtility.RangeToReferences = function (range) {
	            var result = [];
	            for (var _i = 0, _a = range.Areas; _i < _a.length; _i++) {
	                var item = _a[_i];
	                result.push(ChartUtility.CreateReference(item.Worksheet.name(), item.Row, item.Column, item.RowCount, item.ColumnCount));
	            }
	            return result;
	        };
	        ChartUtility.CreateReference = function (worksheet, row, col, rowCount, colCount) {
	            if (rowCount === 1 && colCount === 1) {
	                return new Reference(worksheet, row, col);
	            }
	            return new Reference(worksheet, row, col, row + rowCount - 1, col + colCount - 1);
	        };
	        ChartUtility.ReferencesToFormula = function (refs, r1c1) {
	            if (r1c1 === keyword_undefined) {
	                r1c1 = false;
	            }
	            if (UnitHelper.isNullOrUndefined(refs) || refs.length === 0) {
	                return keyword_null;
	            }
	            var f = [];
	            for (var i = 0; i < refs.length; i++) {
	                if (i > 0) {
	                    f.push(",");
	                }
	                if (r1c1) {
	                    f.push(refs[i].ToR1C1Text());
	                } else {
	                    f.push(refs[i].ToA1Text(0, 0));
	                }
	            }
	            return f.join('');
	        };
	        ChartUtility.getRangeInfoByFormula = function (sheet, formula) {
	            if (formula) {
	                var formulaToRanges = Sheets.CalcEngine.formulaToRanges;
	                var result = formulaToRanges(sheet, formula, 0, 0), rangeItem = result[0];
	
	                if (rangeItem) {
	                    var spread = sheet.parent, worksheet = spread.getSheetFromName(rangeItem.sheetName);
	                    if (worksheet) {
	                        return {
	                            sheet: worksheet,
	                            range: rangeItem.ranges && rangeItem.ranges[0]
	                        };
	                    }
	                }
	            }
	            return {range: {}};
	        };
	        ChartUtility.isContinuousRange = function (rangeInfo1, rangeInfo2, isColumnBase) {
	            if (rangeInfo1.sheet !== rangeInfo2.sheet) {
	                return false;
	            }
	            var range1, row1, rowCount1, col1, colCount1, range2, row2, rowCount2, col2, colCount2;
	            if (isColumnBase) {
	                range1 = rangeInfo1.range;
	                rowCount1 = range1.rowCount;
	                col1 = range1.col;
	                colCount1 = range1.colCount;
	                range2 = rangeInfo2.range;
	                rowCount2 = range2.rowCount;
	                col2 = range2.col;
	                if (rowCount1 === rowCount2 && col1 + colCount1 === col2) {
	                    return true;
	                }
	            } else {
	                range1 = rangeInfo1.range;
	                rowCount1 = range1.rowCount;
	                row1 = range1.row;
	                colCount1 = range1.colCount;
	                range2 = rangeInfo2.range;
	                colCount2 = range2.colCount;
	                row2 = range1.row;
	                if (colCount1 === colCount2 && row1 + rowCount1 === row2) {
	                    return true;
	                }
	            }
	        };
	        ChartUtility.GetValuesFromCellRefers = function (drawingSheet, refers, visibleOnly) {
	            var values = [];
	            if (UnitHelper.isNullOrUndefined(refers) || refers.length === 0 || refers.some(function (r) {
	                return r.IsError;
	            })) {
	                return values;
	            }
	            for (var _i = 0, refers_1 = refers; _i < refers_1.length; _i++) {
	                var rect = refers_1[_i];
	                var valueMatrix = this.GetValuesFromCellRefer(drawingSheet, rect, visibleOnly);
	                if (!UnitHelper.isNullOrUndefined(valueMatrix)) {
	                    values.push(valueMatrix);
	                }
	            }
	            return values;
	        };
	        ChartUtility.GetValuesFromCellRefer = function (drawingSheet, refer, visibleOnly) {
	            var sheet = drawingSheet._GetSheet(refer.WorksheetName);
	            if (UnitHelper.isNullOrUndefined(sheet)) {
	                return keyword_null;
	            }
	            var valueMatrix;
	            if (visibleOnly) {
	                valueMatrix = sheet._GetVisibleCellValues(refer.Row, refer.Column, refer.RowCount, refer.ColumnCount, false);
	            } else {
	                valueMatrix = sheet._GetCellValues(refer.Row, refer.Column, refer.RowCount, refer.ColumnCount, false);
	            }
	            return valueMatrix;
	        };
	        ChartUtility.GetStylesFromCellRefers = function (drawingSheet, refers, visibleOnly) {
	            var styles = [];
	            if (UnitHelper.isNullOrUndefined(refers) || refers.length === 0 || refers.some(function (r) {
	                return r.IsError;
	            })) {
	                return styles;
	            }
	            for (var _i = 0, refers_2 = refers; _i < refers_2.length; _i++) {
	                var refer = refers_2[_i];
	                var styleMatrix = this.GetStylesFromCellRefer(drawingSheet, refer, visibleOnly);
	                if (!UnitHelper.isNullOrUndefined(styleMatrix)) {
	                    styles.push(styleMatrix);
	                }
	            }
	            return styles;
	        };
	        ChartUtility.GetStylesFromCellRefer = function (drawingSheet, refer, visibleOnly) {
	            var sheet = drawingSheet._GetSheet(refer.WorksheetName);
	            if (UnitHelper.isNullOrUndefined(sheet)) {
	                return keyword_null;
	            }
	            var styleMatrix;
	            if (visibleOnly) {
	                styleMatrix = sheet._GetVisibleCellStyles(refer.Row, refer.Column, refer.RowCount, refer.ColumnCount);
	            } else {
	                styleMatrix = sheet._GetCellStyles(refer.Row, refer.Column, refer.RowCount, refer.ColumnCount);
	            }
	            return styleMatrix;
	        };
	        ChartUtility.GetPrimaryAxises = function (ooPlotArea ) {
	            var result = [];
	            if (ooPlotArea.axes && ooPlotArea.axes.length > 0) {
	                var firstAx = ooPlotArea.axes[0];
	                result.push(firstAx.axId);
	                result.push(firstAx.crossAx);
	            }
	            return result;
	        };
	        ChartUtility.GetAxises = function (ooPlotArea , axisGroup) {
	            var pAxes = ChartUtility.GetPrimaryAxises(ooPlotArea);
	            if (axisGroup === 0) {
	                return pAxes;
	            }
	            var sAxes = [];
	            if (!UnitHelper.isNullOrUndefined(ooPlotArea.axes)) {
	                var secondAxes = ooPlotArea.axes.filter(function (item) {
	                    return pAxes.indexOf(item.axId) < 0;
	                });
	                for (var _i = 0, secondAxes_1 = secondAxes; _i < secondAxes_1.length; _i++) {
	                    var axisItem = secondAxes_1[_i];
	                    sAxes.push(axisItem.axId);
	                }
	            }
	            return sAxes;
	        };
	        ChartUtility.GetCategoryAxises = function (ooPlotArea ) {
	            var result = [];
	            for (var _i = 0, _a = ooPlotArea.chartGroups; _i < _a.length; _i++) {
	                var item = _a[_i];
	                if (!UnitHelper.isNullOrUndefined(item.axId) && item.axId.length > 0) {
	                    result.push(item.axId[0]);
	                }
	            }
	            return result;
	        };
	        ChartUtility.GetIs2016ChartByPlotArea = function (ooPlotArea ) {
	            var new2016ChartType = ChartUtility.Get2016ChartType(ooPlotArea);
	            return !!new2016ChartType;
	        };
	        ChartUtility.GetIs2016ChartByChartType = function (chartType ) {
	            return chartType === 53 || chartType === 54 || chartType === 55 || chartType === 56 ||
	                chartType === 57 || chartType === 58 || chartType === 59 || chartType === 60;
	        };
	        ChartUtility.Get2016ChartType = function (ooPlotArea ) {
	            var series = ooPlotArea && ooPlotArea.plotAreaRegion && ooPlotArea.plotAreaRegion.series;
	            var ctChartType;
	            if (series && series.length > 0) {
	                ctChartType = series[0].layoutId;
	            }
	            return ctChartType;
	        };
	        ChartUtility.GetChartType = function (ooPlotArea ) {
	            var new2016ChartType = ChartUtility.Get2016ChartType(ooPlotArea);
	            if (new2016ChartType) {
	                return ChartUtility.GetChartTypeBy2016InnerChartType(new2016ChartType);
	            }
	            var stockChart = this.GetStockChartType(ooPlotArea);
	            if (!UnitHelper.isNullOrUndefined(stockChart)) {
	                return stockChart;
	            }
	            var types = [];
	            for (var _i = 0, _a = ooPlotArea.chartGroups; _i < _a.length; _i++) {
	                var chart = _a[_i];
	                var type = ChartUtility.GetChartTypeByChartBase(chart);
	                if (types.indexOf(type) < 0) {
	                    types.push(type);
	                }
	            }
	            if (types.length === 0) {
	                return 12;
	            }
	            return types.length > 1 ? 0 : types[0];
	        };
	        ChartUtility.GetStockChartType = function (ooPlotArea ) {
	            var stockChart = ChartUtility.GetStockChart(ooPlotArea);
	            if (stockChart.length === 0) {
	                return keyword_null;
	            }
	            if ((!UnitHelper.isNullOrUndefined(ooPlotArea.chartGroups) && ooPlotArea.chartGroups.length > 1)) {
	                if (stockChart[0].ser.length === 3) {
	                    return 51;
	                } else if (stockChart[0].ser.length === 4) {
	                    return 52;
	                }
	            } else if (stockChart[0].ser.length === 3) {
	                return 49;
	            } else if (stockChart[0].ser.length === 4) {
	                return 50;
	            }
	            return keyword_null;
	        };
	        ChartUtility.GetChartTypeByChartBase = function (chart , ser) {
	            if (ser === keyword_undefined) {
	                ser = keyword_null;
	            }
	            if (chart.chartType === 6 || chart.chartType === 7) {
	                return ChartUtility.GetChartTypeByBarChart(chart);
	            } else if (chart.chartType === 4 || chart.chartType === 5) {
	                return ChartUtility.GetChartTypeByAreaChart(chart);
	            } else if (chart.chartType === 8 || chart.chartType === 9) {
	                return ChartUtility.GetChartTypeByLineChart(chart, ser );
	            } else if ([10, 11, 12, 13].indexOf(chart.chartType) >= 0) {
	                return ChartUtility.GetChartTypeByPieChart(chart, ser );
	            } else if (chart.chartType === 2) {
	                return ChartUtility.GetChartTypeByRadarChart(chart, ser );
	            } else if (chart.chartType === 1) {
	                return ChartUtility.GetChartTypeByScatterChart(chart);
	            } else if (chart.chartType === 3) {
	                return ChartUtility.GetChartTypeByBubbleChart(chart);
	            } else if (chart.chartType === 14 || chart.chartType === 15) {
	                return ChartUtility.GetChartTypeBySurfaceChart(chart);
	            }
	            return 12;
	        };
	        ChartUtility.GetChartTypeBy2016InnerChartType = function (innerChartType) {
	            if (!UnitHelper.isNullOrUndefined(innerChartType)) {
	                switch (innerChartType) {
	                    case CT_ChartType.CT_BoxWhisker:
	                        return ChartType.boxWhisker;
	                    case CT_ChartType.CT_Funnel:
	                        return ChartType.funnel;
	                    case CT_ChartType.CT_ParetoLine:
	                        return ChartType.paretoLine;
	                    case CT_ChartType.CT_RegionMap:
	                        return ChartType.regionMap;
	                    case CT_ChartType.CT_Sunburst:
	                        return ChartType.sunburst;
	                    case CT_ChartType.CT_Treemap:
	                        return ChartType.treemap;
	                    case CT_ChartType.CT_Waterfall:
	                        return ChartType.waterfall;
	                    case CT_ChartType.CT_ClusteredColumn:
	                        return ChartType.clusteredColumn;
	                }
	            }
	            return CT_ChartType.CT_Treemap;
	        };
	        ChartUtility.Get2016InnerChartTypeByChartType = function (chartType) {
	            if (!UnitHelper.isNullOrUndefined(chartType)) {
	                switch (chartType) {
	                    case ChartType.boxWhisker:
	                        return CT_ChartType.CT_BoxWhisker;
	                    case ChartType.funnel:
	                        return CT_ChartType.CT_Funnel;
	                    case ChartType.paretoLine:
	                        return CT_ChartType.CT_ParetoLine;
	                    case ChartType.regionMap:
	                        return CT_ChartType.CT_RegionMap;
	                    case ChartType.sunburst:
	                        return CT_ChartType.CT_Sunburst;
	                    case ChartType.treemap:
	                        return CT_ChartType.CT_Treemap;
	                    case ChartType.waterfall:
	                        return CT_ChartType.CT_Waterfall;
	                    case ChartType.clusteredColumn:
	                        return CT_ChartType.CT_ClusteredColumn;
	                }
	            }
	            return CT_ChartType.CT_Treemap;
	        };
	        ChartUtility.GetChartTypeByBarChart = function (barChart ) {
	            var is3dBar = barChart.chartType === 7;
	            if (!UnitHelper.isNullOrUndefined(barChart.grouping)) {
	                switch (barChart.grouping) {
	                    case 0
	                    :
	                        if (is3dBar) {
	                            return barChart.barDir === 0 ? 23 : 17;
	                        }
	                        return barChart.barDir === 0 ? 20 : 14;
	                    case 1
	                    :
	                        if (is3dBar) {
	                            return barChart.barDir === 0 ? 21 : 15;
	                        }
	                        return barChart.barDir === 0 ? 18 : 12;
	                    case 2
	                    :
	                        if (is3dBar) {
	                            return barChart.barDir === 0 ? 21 : 6;
	                        }
	                        return barChart.barDir === 0 ? 18 : 12;
	                    case 3
	                    :
	                        if (is3dBar) {
	                            return barChart.barDir === 0 ? 22 : 16;
	                        }
	                        return barChart.barDir === 0 ? 19 : 13;
	                }
	            } else {
	                if (is3dBar) {
	                    return barChart.barDir === 0 ? 21 : 15;
	                }
	                return barChart.barDir === 0 ? 18 : 12;
	            }
	            return 12;
	        };
	        ChartUtility.GetChartTypeByAreaChart = function (areaChart ) {
	            var is3dArea = areaChart.chartType === 5;
	            if (!UnitHelper.isNullOrUndefined(areaChart.grouping)) {
	                switch (areaChart.grouping) {
	                    case 0
	                    :
	                        return is3dArea ? 40 : 38;
	                    case 1
	                    :
	                        return is3dArea ? 7 : 8;
	                    case 2
	                    :
	                        return is3dArea ? 39 : 37;
	                }
	            } else {
	                return is3dArea ? 7 : 8;
	            }
	            return 8;
	        };
	        ChartUtility.GetChartTypeByLineChart = function (lineChart , lineSer ) {
	            var is3dLine = lineChart.chartType === 9;
	            var hasMarker = lineChart.marker;  
	           
	            if (hasMarker && lineSer && lineSer.marker && lineSer.marker.symbol === 4 ) {
	                hasMarker = false;
	            }
	            if (!UnitHelper.isNullOrUndefined(lineChart.grouping)) {
	                switch (lineChart.grouping) {
	                    case 0
	                    :
	                        if (is3dLine) {
	                            return 5;
	                        }
	                        return hasMarker ? 28 : 25;
	                    case 1
	                    :
	                        if (is3dLine) {
	                            return 5;
	                        }
	                        return hasMarker ? 26 : 9;
	                    case 2
	                    :
	                        if (is3dLine) {
	                            return 5;
	                        }
	                        return hasMarker ? 27 : 24;
	                    default:
	                        return 8;
	                }
	            } else if (is3dLine) {
	                return 5;
	            }
	            return hasMarker ? 26 : 9;
	        };
	        ChartUtility.GetChartTypeByPieChart = function (pieChart   ) {
	            if (pieChart.chartType === 10) {
	                return 10;
	            } else if (pieChart.chartType === 11) {
	                return 4;
	            } else if (pieChart.chartType === 13) {
	                var ofPieChart = pieChart;
	                return ofPieChart.ofPieType === 1 ? 32 : 29;
	            } else if (pieChart.chartType === 12) {
	                return 3;
	            }
	            return 10;
	        };
	        ChartUtility.GetChartTypeByRadarChart = function (radarChart , radarSer ) {
	            var noMarker = radarSer && radarSer.marker && radarSer.marker.symbol && radarSer.marker.symbol === 4 ;
	            if (!UnitHelper.isNullOrUndefined(radarChart.radarStyle)) {
	                switch (radarChart.radarStyle) {
	                    case 0
	                    :
	                    case 1
	                    :
	                        return noMarker ? 2 : 42;
	                    case 2
	                    :
	                        return 43;
	                }
	            }
	            return 2;
	        };
	        ChartUtility.GetChartTypeByScatterChart = function (scatterChart ) {
	           
	           
	           
	            var scatterStyle = scatterChart.scatterStyle;
	            if (!UnitHelper.isNullOrUndefined(scatterStyle)) {
	                var dict = {
	                    0: 1,
	                    1: 36,
	                    2: 35,
	                    3: 1,
	                    4: 34,
	                    5: 33,
	                };
	               
	                var value = scatterStyle;
	                var firstSeries = scatterChart.ser[0],
	                    symbol = firstSeries && firstSeries.marker && firstSeries.marker.symbol,
	                    noMarker = symbol === 4 ,
	                    line = firstSeries && firstSeries.spPr && firstSeries.spPr.ln,
	                    noLine = line && line.noFill;
	                if (value === 2 ) {
	                    if (noLine) {
	                        value = 3 ;
	                    } else if (noMarker) {
	                        value = 1 ;
	                    }
	                } else if (value === 5 ) {    
	                    if (noMarker) {
	                        value = 4 ;
	                    }
	                }
	
	                return dict[value];
	            }
	            return 1;
	        };
	        ChartUtility.GetChartTypeByBubbleChart = function (bubbleChart ) {
	            return bubbleChart.bubble3D ? 48 : 11;
	        };
	        ChartUtility.GetChartTypeBySurfaceChart = function (surfaceChart ) {
	            var is3d = surfaceChart.chartType === 15;
	            if (is3d) {
	                return surfaceChart.wireframe ? 45 : 44;
	            }
	            return surfaceChart.wireframe ? 47 : 46;
	        };
	        ChartUtility.GetTextFieldTypeString = function (type) {
	            var dict = {
	                0: ChartConstants.FIELD_TYPE_CELLRANGE,
	                1: ChartConstants.FIELD_TYPE_SERIESNAME,
	                2: ChartConstants.FIELD_TYPE_CATEGORYNAME,
	                3: ChartConstants.FIELD_TYPE_VALUE,
	                4: ChartConstants.FIELD_TYPE_XVALUE,
	                5: ChartConstants.FIELD_TYPE_YVALUE,
	                6: ChartConstants.FIELD_TYPE_BUBBLESIZE,
	                7: ChartConstants.FIELD_TYPE_PERCENTAGE,
	                8: ChartConstants.FIELD_TYPE_TXLINK
	            };
	            return dict[type] || "";
	        };
	        ChartUtility.GetTextFieldTypeText = function (type) {
	            var dict = {
	                0: ChartConstants.FIELD_TEXT_CELLRANGE,
	                1: ChartConstants.FIELD_TEXT_SERIESNAME,
	                2: ChartConstants.FIELD_TEXT_CATEGORYNAME,
	                3: ChartConstants.FIELD_TEXT_VALUE,
	                4: ChartConstants.FIELD_TEXT_XVALUE,
	                5: ChartConstants.FIELD_TEXT_YVALUE,
	                6: ChartConstants.FIELD_TEXT_BUBBLESIZE
	            };
	            return dict[type] || "";
	        };
	        ChartUtility.GetTextFieldType = function (typeString) {
	            var result = 0;
	            switch (typeString) {
	                case ChartConstants.FIELD_TYPE_CELLRANGE:
	                    result = 0;
	                    break;
	                case ChartConstants.FIELD_TYPE_SERIESNAME:
	                    result = 1;
	                    break;
	                case ChartConstants.FIELD_TYPE_CATEGORYNAME:
	                    result = 2;
	                    break;
	                case ChartConstants.FIELD_TYPE_VALUE:
	                    result = 3;
	                    break;
	                case ChartConstants.FIELD_TYPE_XVALUE:
	                    result = 4;
	                    break;
	                case ChartConstants.FIELD_TYPE_YVALUE:
	                    result = 5;
	                    break;
	                case ChartConstants.FIELD_TYPE_BUBBLESIZE:
	                    result = 6;
	                    break;
	                case ChartConstants.FIELD_TYPE_PERCENTAGE:
	                    result = 7;
	                    break;
	                case ChartConstants.FIELD_TYPE_TXLINK:
	                    result = 8;
	                    break;
	            }
	            return result;
	        };
	        ChartUtility.GetPrimaryPieChart = function (pieCharts) {
	            return pieCharts[0];
	        };
	        ChartUtility.GetPlotAreaCharts = function (plotArea, chartType) {
	            if (plotArea.chartGroups) {
	                return plotArea.chartGroups.filter(function (item) {
	                    return item.chartType === chartType;
	                });
	            }
	            return [];
	        };
	        ChartUtility.GetAreaChart = function (plotArea) {
	            return ChartUtility.GetPlotAreaCharts(plotArea, 4 );
	        };
	        ChartUtility.GetArea3DChart = function (plotArea) {
	            var area3DChart = ChartUtility.GetPlotAreaCharts(plotArea, 5 );
	            if (area3DChart.length > 0) {
	                return area3DChart[0];
	            }
	            return keyword_null;
	        };
	        ChartUtility.GetBarChart = function (plotArea) {
	            return ChartUtility.GetPlotAreaCharts(plotArea, 6 );
	        };
	        ChartUtility.GetBar3DChart = function (plotArea) {
	            var bar3DCharts = ChartUtility.GetPlotAreaCharts(plotArea, 7 );
	            if (bar3DCharts.length > 0) {
	                return bar3DCharts[0];
	            }
	            return keyword_null;
	        };
	        ChartUtility.GetLineChart = function (plotArea) {
	            return ChartUtility.GetPlotAreaCharts(plotArea, 8 );
	        };
	        ChartUtility.GetLine3DChart = function (plotArea) {
	            var line3DCharts = ChartUtility.GetPlotAreaCharts(plotArea, 9 );
	            if (line3DCharts.length > 0) {
	                return line3DCharts[0];
	            }
	            return keyword_null;
	        };
	        ChartUtility.GetStockChart = function (plotArea) {
	            return ChartUtility.GetPlotAreaCharts(plotArea, 0 );
	        };
	        ChartUtility.GetRadarChart = function (plotArea) {
	            return ChartUtility.GetPlotAreaCharts(plotArea, 2 );
	        };
	        ChartUtility.GetScatterChart = function (plotArea) {
	            return ChartUtility.GetPlotAreaCharts(plotArea, 1 );
	        };
	        ChartUtility.GetPieCharts = function (plotArea) {
	            var chartTypes = [10 , 11 , 12 , 13 ];
	            if (plotArea.chartGroups) {
	                return plotArea.chartGroups.filter(function (item) {
	                    return chartTypes.indexOf(item.chartType) >= 0;
	                });
	            }
	            return [];
	        };
	        ChartUtility.GetPieChart = function (plotArea) {
	            return ChartUtility.GetPlotAreaCharts(plotArea, 10 );
	        };
	        ChartUtility.GetPie3DChart = function (plotArea) {
	            var pie3DCharts = ChartUtility.GetPlotAreaCharts(plotArea, 11 );
	            if (pie3DCharts.length > 0) {
	                return pie3DCharts[0];
	            }
	            return keyword_null;
	        };
	        ChartUtility.GetDoughnutChart = function (plotArea) {
	            return ChartUtility.GetPlotAreaCharts(plotArea, 12 );
	        };
	        ChartUtility.GetOfPieChart = function (plotArea) {
	            return ChartUtility.GetPlotAreaCharts(plotArea, 13 );
	        };
	        ChartUtility.GetSurfaceChart = function (plotArea) {
	            var surfaceCharts = ChartUtility.GetPlotAreaCharts(plotArea, 14 );
	            if (surfaceCharts.length > 0) {
	                return surfaceCharts[0];
	            }
	            return keyword_null;
	        };
	        ChartUtility.GetSurface3DChart = function (plotArea) {
	            var surfaceCharts = ChartUtility.GetPlotAreaCharts(plotArea, 15 );
	            if (surfaceCharts.length > 0) {
	                return surfaceCharts[0];
	            }
	            return keyword_null;
	        };
	        ChartUtility.GetBubbleChart = function (plotArea) {
	            return ChartUtility.GetPlotAreaCharts(plotArea, 3 );
	        };
	        ChartUtility.GetAxes = function (plotArea, axisType) {
	            return plotArea.axes.filter(function (item) {
	                return item.axisType === axisType;
	            });
	        };
	        ChartUtility.removeEmptyArrayProperties = function (obj) {
	            for (var p in obj) {
	                if (obj.hasOwnProperty(p)) {
	                    var item = obj[p];
	                    if (Array.isArray(item) && item.length === 0) {
	                        delete obj[p];
	                    }
	                }
	            }
	        };
	        ChartUtility.allSeriesIsScatterOrBubble = function (argChart) {
	            var chartType = argChart.ChartType;
	            if (ChartUtility.IsBubbleChart(chartType) || ChartUtility.IsScatterChart(chartType)) {
	                return true;
	            } else if (chartType === 0 ) {
	                var seriesArray = argChart.SeriesCollection.AllSers;
	                var seriesLength = seriesArray.length, tempSeriesChartType = seriesArray[0].ChartType, i;
	                if (ChartUtility.IsBubbleChart(tempSeriesChartType)) {
	                    for (i = 1; i < seriesLength; i++) {
	                        if (!ChartUtility.IsBubbleChart(seriesArray[i].ChartType)) {
	                            return false;
	                        }
	                    }
	                    return true;
	                } else if (ChartUtility.IsScatterChart(tempSeriesChartType)) {
	                    for (i = 1; i < seriesLength; i++) {
	                        if (!ChartUtility.IsScatterChart(seriesArray[i].ChartType)) {
	                            return false;
	                        }
	                    }
	                    return true;
	                }
	            }
	            return false;
	        };
	        ChartUtility.getColumnGroupOrBarGroup = function (chart) {
	            var tempGroup, columnGroups = chart.ColumnGroups;
	            if (columnGroups && columnGroups.Count > 0) {
	                tempGroup = columnGroups.Get(0);
	            } else {
	                var barGroups = chart.BarGroups;
	                if (barGroups && barGroups.Count > 0) {
	                    tempGroup = barGroups.Get(0);
	                }
	            }
	            if (tempGroup) {
	                var serArray = tempGroup.GetSers(), serNumber = serArray && serArray.length;
	                if (serNumber > 0) {
	                    return tempGroup;
	                }
	            }
	            return keyword_null;
	        };
	        ChartUtility.getLineFormatInfo = function (value, needThemeColor, needRGBA, notAddTransprent) {
	            var formatLine = value && value.Format && value.Format.Line;
	            if (formatLine) {
	                var lineWidth = formatLine.Weight;
	                var retLineInfo = {};
	                if (lineWidth >= 0) {
	                    retLineInfo.width = lineWidth;
	                }
	                var rgbaColor = ChartUtility.colorFormatToString(formatLine, needThemeColor, needRGBA, notAddTransprent);
	                if (!needRGBA) {
	                    retLineInfo.transparency = ChartUtility.getTransparencyFromColorFormat(formatLine);
	                }
	                if (rgbaColor || (rgbaColor === '' && notAddTransprent)) {
	                    retLineInfo.color = rgbaColor;
	                }
	                return retLineInfo;
	            }
	            return keyword_null;
	        };
	
	        function isEmptyObject(obj) {
	           
	            if (obj === null || obj === undefined) {
	                return true;
	            }
	
	           
	            if (Array.isArray(obj)) {
	                return obj.length === 0;
	            }
	
	           
	            if (obj instanceof Date) {
	                return false;
	            }
	
	           
	            if (typeof obj !== "object") {
	                return false;
	            }
	
	           
	           
	            for (var key in obj) {    
	                return false;
	            }
	
	            return true;
	        }
	
	        function simpleJSONObject(obj, excludeFields) {
	            if (isEmptyObject(obj)) {
	                return null;
	            }
	            for (var key in obj) {    
	                if (excludeFields.indexOf(key) >= 0) {
	                    continue;
	                }
	                var item = obj[key];
	                if (Array.isArray(item)) {
	                    if ((item.length === 0) || (simpleArray(item, excludeFields) === null)) {
	                        delete obj[key];
	                    }
	                } else if (typeof item === "object") {
	                    item = simpleJSONObject(item, excludeFields);
	                    if (item === null) {
	                        delete obj[key];
	                    }
	                }
	            }
	            if (isEmptyObject(obj)) {
	                return null;
	            }
	            return obj;
	        }
	
	        function simpleArray(array, excludeFields) {
	            var result = [];
	            var count = array.length;
	            array.forEach(function (item) {
	                var temp = simpleJSONObject(item, excludeFields);
	                if (temp !== null) {
	                    result.push(temp);
	                }
	            });
	            if (result.length < count) {
	                [].splice.apply(array, [].concat(0, count, result));
	            }
	            return result.length ? array : null;
	        }
	
	        ChartUtility.simpleJSONObject = simpleJSONObject;
	
	        
	        function deleteFillItems(target) {
	            delete target.solidFill;
	            delete target.pattFill;
	            delete target.blipFill;
	            delete target.gradFill;
	            delete target.noFill;
	            delete target.grpFill;
	            delete target.uFill;
	            delete target.uFillTx;
	        }
	        ChartUtility._deleteFillItems = deleteFillItems;
	
	        return ChartUtility;
	    }());
	    ChartUtility.presetColors = {};
	    ChartUtility.InitPresetColors();
	    Charts.ChartUtility = ChartUtility;
	    var ShapeUtility = (function () {
	
	        function createColorFormatFromRGB(context, colorType, rgb) {
	            var color = new Charts.ColorFormat(context);
	            color.ColorType = colorType;
	            color.RGB = rgb;
	            return color;
	        }
	
	        function createGradientStop(context, position, color) {
	            var gradientStop = new Charts.GradientStop(context);
	            gradientStop.Position = position;
	            gradientStop.Color = color;
	            return gradientStop;
	        }
	
	        function createColorFormat(context, colorType, objectThemeColor, tintAndShade) {
	            var color = new Charts.ColorFormat(context);
	            color.ColorType = colorType;
	            color.ObjectThemeColor = objectThemeColor;
	            if (tintAndShade) {
	                color.TintAndShade = tintAndShade;
	            }
	            return color;
	        }
	
	        function ShapeUtility() {
	        }
	
	        ShapeUtility.InitGradientStops = function (context, gradientFill, colorType) {
	            var _this = this;
	            gradientFill._SetGradientStops(new Charts.GradientStops(context));
	            if (colorType === 1) {
	                _this.InitGradientStopOneColor(context, gradientFill);
	            } else if (colorType === 2) {
	                _this.InitGradientStopTwoColor(context, gradientFill);
	            } else if (colorType === 3) {
	                _this.InitGradientStopPresetColor(context, gradientFill);
	            } else {
	                throw new Error();
	            }
	            gradientFill.GradientAngle = _this.GetGradientAngle(gradientFill.GradientStyle, gradientFill.GradientVariant);
	        };
	        ShapeUtility.InitGradientStopPresetColor = function (context, gradientFill) {
	           
	            var stop1, stop2, stop3, stop4, stop5, stop6, stop7, stop8, stop9, stop10, stop11, stop12, stop13;
	            var gradientList = gradientFill.GradientStops.GradientStopList;
	            switch (gradientFill.PresetGradientType) {
	                case 0
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x000082)));
	                    stop2 = createGradientStop(context, 0.30000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x66008f)));
	                    stop3 = createGradientStop(context, 0.64999, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xba0066)));
	                    stop4 = createGradientStop(context, 0.89999, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xff0000)));
	                    stop5 = createGradientStop(context, 1.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xff8200)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                    gradientList.push(stop5);
	                }
	                    break;
	                case 1
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x000000)));
	                    stop2 = createGradientStop(context, 0.20000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x000040)));
	                    stop3 = createGradientStop(context, 0.50000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x400040)));
	                    stop4 = createGradientStop(context, 0.75000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x8f0040)));
	                    stop5 = createGradientStop(context, 0.89999, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xf27300)));
	                    stop6 = createGradientStop(context, 1.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xffbf00)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                    gradientList.push(stop5);
	                    gradientList.push(stop6);
	                }
	                    break;
	                case 2
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x000000)));
	                    stop2 = createGradientStop(context, 0.39999, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x0a128c)));
	                    stop3 = createGradientStop(context, 0.70000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x181cc7)));
	                    stop4 = createGradientStop(context, 0.88000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x7005d4)));
	                    stop5 = createGradientStop(context, 1.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x8c3d91)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                    gradientList.push(stop5);
	                }
	                    break;
	                case 3
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x5e9eff)));
	                    stop2 = createGradientStop(context, 0.39999, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x85c2ff)));
	                    stop3 = createGradientStop(context, 0.70000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xc4d6eb)));
	                    stop4 = createGradientStop(context, 1.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xffebfa)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                }
	                    break;
	                case 4
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xdcebf5)));
	                    stop2 = createGradientStop(context, 0.08000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x83a7c3)));
	                    stop3 = createGradientStop(context, 0.13000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x768fb9)));
	                    stop4 = createGradientStop(context, 0.21001, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x83a7c3)));
	                    stop5 = createGradientStop(context, 0.52000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xffffff)));
	                    stop6 = createGradientStop(context, 0.56000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x9c6563)));
	                    stop7 = createGradientStop(context, 0.58000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x80302d)));
	                    stop8 = createGradientStop(context, 0.71001, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xc0524e)));
	                    stop9 = createGradientStop(context, 0.94000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xebdad4)));
	                    stop10 = createGradientStop(context, 1.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x55261c)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                    gradientList.push(stop5);
	                    gradientList.push(stop6);
	                    gradientList.push(stop7);
	                    gradientList.push(stop8);
	                    gradientList.push(stop9);
	                    gradientList.push(stop10);
	                }
	                    break;
	                case 5
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xfc9fcb)));
	                    stop2 = createGradientStop(context, 0.87000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xf8b049)));
	                    stop3 = createGradientStop(context, 0.78999, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xf8b049)));
	                    stop4 = createGradientStop(context, 0.37000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xfee7f2)));
	                    stop5 = createGradientStop(context, 0.33000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xf952a0)));
	                    stop6 = createGradientStop(context, 0.31000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xc50849)));
	                    stop7 = createGradientStop(context, 0.17999, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xb43e85)));
	                    stop8 = createGradientStop(context, 0, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xf8b049)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                    gradientList.push(stop5);
	                    gradientList.push(stop6);
	                    gradientList.push(stop7);
	                    gradientList.push(stop8);
	                }
	                    break;
	                case 6
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x03d4a8)));
	                    stop2 = createGradientStop(context, 0.25000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x21d6e0)));
	                    stop3 = createGradientStop(context, 0.75000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x0087e6)));
	                    stop4 = createGradientStop(context, 1.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x005cbf)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                }
	                    break;
	                case 7
	                : {
	                    stop1 = createGradientStop(context, 0.5, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xccccff)));
	                    stop2 = createGradientStop(context, 0.41001, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x99ccff)));
	                    stop3 = createGradientStop(context, 0.32000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x9966ff)));
	                    stop4 = createGradientStop(context, 0.19500, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xcc99ff)));
	                    stop5 = createGradientStop(context, 0.8999, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x99ccff)));
	                    stop6 = createGradientStop(context, 0, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xccccff)));
	                    stop7 = createGradientStop(context, 0.59000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x99ccff)));
	                    stop8 = createGradientStop(context, 0.68000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x9966ff)));
	                    stop9 = createGradientStop(context, 0.80500, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xcc99ff)));
	                    stop10 = createGradientStop(context, 0.91001, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x99ccff)));
	                    stop11 = createGradientStop(context, 1, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xccccff)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                    gradientList.push(stop5);
	                    gradientList.push(stop6);
	                    gradientList.push(stop7);
	                    gradientList.push(stop8);
	                    gradientList.push(stop9);
	                    gradientList.push(stop10);
	                    gradientList.push(stop11);
	                }
	                    break;
	                case 8
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xfff200)));
	                    stop2 = createGradientStop(context, 0.45000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xff7a00)));
	                    stop3 = createGradientStop(context, 0.70000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xff0300)));
	                    stop4 = createGradientStop(context, 1.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x4d0808)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                }
	                    break;
	                case 9
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x8488c4)));
	                    stop2 = createGradientStop(context, 0.53000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xd4deff)));
	                    stop3 = createGradientStop(context, 0.83000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xd4deff)));
	                    stop4 = createGradientStop(context, 1.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x96ab94)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                }
	                    break;
	                case 10
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xddebcf)));
	                    stop2 = createGradientStop(context, 0.25000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x9cb86e)));
	                    stop3 = createGradientStop(context, 0.50000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x156b13)));
	                    stop4 = createGradientStop(context, 1, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xddebcf)));
	                    stop5 = createGradientStop(context, 0.75000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x9cb86e)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                    gradientList.push(stop5);
	                }
	                    break;
	                case 11
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x3399ff)));
	                    stop2 = createGradientStop(context, 0.16000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x00cccc)));
	                    stop3 = createGradientStop(context, 0.47000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x9999ff)));
	                    stop4 = createGradientStop(context, 0.60001, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x2e6792)));
	                    stop5 = createGradientStop(context, 0.71001, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x3333cc)));
	                    stop6 = createGradientStop(context, 0.81000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x1170ff)));
	                    stop7 = createGradientStop(context, 1.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x006699)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                    gradientList.push(stop5);
	                    gradientList.push(stop6);
	                    gradientList.push(stop7);
	                }
	                    break;
	                case 12
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xfbeac7)));
	                    stop2 = createGradientStop(context, 0.17999, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xfee7f2)));
	                    stop3 = createGradientStop(context, 0.36000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xfac77d)));
	                    stop4 = createGradientStop(context, 0.61000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xfba97d)));
	                    stop5 = createGradientStop(context, 0.82001, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xfbd49c)));
	                    stop6 = createGradientStop(context, 1.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xfee7f2)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                    gradientList.push(stop5);
	                    gradientList.push(stop6);
	                }
	                    break;
	                case 13
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xffefd1)));
	                    stop2 = createGradientStop(context, 0.64999, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xf0ebd5)));
	                    stop3 = createGradientStop(context, 1.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xd1c39f)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                }
	                    break;
	                case 14
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xd6b19c)));
	                    stop2 = createGradientStop(context, 0.15000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xd49e6c)));
	                    stop3 = createGradientStop(context, 0.35000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xa65528)));
	                    stop4 = createGradientStop(context, 0.50000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x663012)));
	                    stop5 = createGradientStop(context, 1.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xd6b19c)));
	                    stop6 = createGradientStop(context, 0.85000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xd49e6c)));
	                    stop7 = createGradientStop(context, 0.65000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xa65528)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                    gradientList.push(stop5);
	                    gradientList.push(stop6);
	                    gradientList.push(stop7);
	                }
	                    break;
	                case 15
	                : {
	                    stop1 = createGradientStop(context, 0.50000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xa603ab)));
	                    stop2 = createGradientStop(context, 0.39500, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x0819fb)));
	                    stop3 = createGradientStop(context, 0.32499, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x1a8d48)));
	                    stop4 = createGradientStop(context, 0.24000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xffff00)));
	                    stop5 = createGradientStop(context, 0.13500, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xee3f17)));
	                    stop6 = createGradientStop(context, 0.6000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xe81766)));
	                    stop7 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xa603ab)));
	                    stop8 = createGradientStop(context, 0.60501, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x0819fb)));
	                    stop9 = createGradientStop(context, 0.67501, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x1a8d48)));
	                    stop10 = createGradientStop(context, 0.76000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xffff00)));
	                    stop11 = createGradientStop(context, 0.86500, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xee3f17)));
	                    stop12 = createGradientStop(context, 0.94000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xe81766)));
	                    stop13 = createGradientStop(context, 1.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xa603ab)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                    gradientList.push(stop5);
	                    gradientList.push(stop6);
	                    gradientList.push(stop7);
	                    gradientList.push(stop8);
	                    gradientList.push(stop9);
	                    gradientList.push(stop10);
	                    gradientList.push(stop11);
	                    gradientList.push(stop12);
	                    gradientList.push(stop13);
	                }
	                    break;
	                case 16
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xff3399)));
	                    stop2 = createGradientStop(context, 0.25000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xff6633)));
	                    stop3 = createGradientStop(context, 0.50000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xffff00)));
	                    stop4 = createGradientStop(context, 0.75000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x01a78f)));
	                    stop5 = createGradientStop(context, 1.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x3366ff)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                    gradientList.push(stop5);
	                }
	                    break;
	                case 17
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xe6dcac)));
	                    stop2 = createGradientStop(context, 0.12000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xe6d78a)));
	                    stop3 = createGradientStop(context, 0.30000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xc7ac4c)));
	                    stop4 = createGradientStop(context, 0.45000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xe6d78a)));
	                    stop5 = createGradientStop(context, 0.77000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xc7ac4c)));
	                    stop6 = createGradientStop(context, 1.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xe6dcac)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                    gradientList.push(stop5);
	                    gradientList.push(stop6);
	                }
	                    break;
	                case 18
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xfbe4ae)));
	                    stop2 = createGradientStop(context, 0.13000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xbd922a)));
	                    stop3 = createGradientStop(context, 0.21001, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xbd922a)));
	                    stop4 = createGradientStop(context, 0.63000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xfbe4ae)));
	                    stop5 = createGradientStop(context, 0.67000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xbd922a)));
	                    stop6 = createGradientStop(context, 0.69000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x835e17)));
	                    stop7 = createGradientStop(context, 0.82001, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xa28949)));
	                    stop8 = createGradientStop(context, 1.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xfae3b7)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                    gradientList.push(stop5);
	                    gradientList.push(stop6);
	                    gradientList.push(stop7);
	                    gradientList.push(stop8);
	                }
	                    break;
	                case 19
	                : {
	                    stop1 = createGradientStop(context, 1, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x825600)));
	                    stop2 = createGradientStop(context, 0.87000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xffa800)));
	                    stop3 = createGradientStop(context, 0.72000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x825600)));
	                    stop4 = createGradientStop(context, 0.57001, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xffa800)));
	                    stop5 = createGradientStop(context, 0.42000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x825600)));
	                    stop6 = createGradientStop(context, 0.28000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xffa800)));
	                    stop7 = createGradientStop(context, 0.13000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x825600)));
	                    stop8 = createGradientStop(context, 0, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xffa800)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                    gradientList.push(stop5);
	                    gradientList.push(stop6);
	                    gradientList.push(stop7);
	                    gradientList.push(stop8);
	                }
	                    break;
	                case 20
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xffffff)));
	                    stop2 = createGradientStop(context, 0.16000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x1f1f1f)));
	                    stop3 = createGradientStop(context, 0.17999, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xffffff)));
	                    stop4 = createGradientStop(context, 0.42000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x636363)));
	                    stop5 = createGradientStop(context, 0.53000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xcfcfcf)));
	                    stop6 = createGradientStop(context, 0.66000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xcfcfcf)));
	                    stop7 = createGradientStop(context, 0.75999, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x1f1f1f)));
	                    stop8 = createGradientStop(context, 0.78999, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xffffff)));
	                    stop9 = createGradientStop(context, 1.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x7f7f7f)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                    gradientList.push(stop5);
	                    gradientList.push(stop6);
	                    gradientList.push(stop7);
	                    gradientList.push(stop8);
	                    gradientList.push(stop9);
	                }
	                    break;
	                case 21
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xcbcbcb)));
	                    stop2 = createGradientStop(context, 0.13000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x5f5f5f)));
	                    stop3 = createGradientStop(context, 0.21001, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x5f5f5f)));
	                    stop4 = createGradientStop(context, 0.63000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xffffff)));
	                    stop5 = createGradientStop(context, 0.67000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xb2b2b2)));
	                    stop6 = createGradientStop(context, 0.69000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x292929)));
	                    stop7 = createGradientStop(context, 0.82001, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x777777)));
	                    stop8 = createGradientStop(context, 1.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xeaeaea)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                    gradientList.push(stop5);
	                    gradientList.push(stop6);
	                    gradientList.push(stop7);
	                    gradientList.push(stop8);
	                }
	                    break;
	                case 22
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xffffff)));
	                    stop2 = createGradientStop(context, 0.03501, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xe6e6e6)));
	                    stop3 = createGradientStop(context, 0.16000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x7d8496)));
	                    stop4 = createGradientStop(context, 0.23500, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xe6e6e6)));
	                    stop5 = createGradientStop(context, 0.42501, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x7d8496)));
	                    stop6 = createGradientStop(context, 0.50000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xe6e6e6)));
	                    stop7 = createGradientStop(context, 1, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xe6e6e6)));
	                    stop8 = createGradientStop(context, 0.96500, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xe6e6e6)));
	                    stop9 = createGradientStop(context, 0.84000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x7d8496)));
	                    stop10 = createGradientStop(context, 0.76500, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xe6e6e6)));
	                    stop11 = createGradientStop(context, 0.57500, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x7d8496)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                    gradientList.push(stop5);
	                    gradientList.push(stop6);
	                    gradientList.push(stop7);
	                    gradientList.push(stop8);
	                    gradientList.push(stop9);
	                    gradientList.push(stop10);
	                    gradientList.push(stop11);
	                }
	                    break;
	                case 23
	                : {
	                    stop1 = createGradientStop(context, 0.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x000082)));
	                    stop2 = createGradientStop(context, 0.13000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x0047ff)));
	                    stop3 = createGradientStop(context, 0.28000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x000082)));
	                    stop4 = createGradientStop(context, 0.42999, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x0047ff)));
	                    stop5 = createGradientStop(context, 0.58000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x000082)));
	                    stop6 = createGradientStop(context, 0.72000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x0047ff)));
	                    stop7 = createGradientStop(context, 0.87000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x000082)));
	                    stop8 = createGradientStop(context, 1.00000, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0x0047ff)));
	                    gradientList.push(stop1);
	                    gradientList.push(stop2);
	                    gradientList.push(stop3);
	                    gradientList.push(stop4);
	                    gradientList.push(stop5);
	                    gradientList.push(stop6);
	                    gradientList.push(stop7);
	                    gradientList.push(stop8);
	                }
	                    break;
	            }
	        };
	        ShapeUtility.InitGradientStopTwoColor = function (context, gradientFill) {
	            var gradientStyle = gradientFill.GradientStyle;
	            if (gradientStyle === 6) {
	                this.InitGradientTwoColorCenterStops(context, gradientFill);
	                return;
	            } else if (gradientStyle === 4) {
	                this.InitGradientTwoColorCornerStops(context, gradientFill);
	                return;
	            }
	            var gradientStopList = gradientFill.GradientStops.GradientStopList;
	            var gradientVariant = gradientFill.GradientVariant;
	            if (gradientVariant === 1 || gradientVariant === 2) {
	                gradientStopList.push(createGradientStop(context, 0, createColorFormat(context, 3, 4)));
	                gradientStopList.push(createGradientStop(context, 1, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0XFFFFFF))));
	            } else if (gradientVariant === 3) {
	                gradientStopList.push(createGradientStop(context, 0, createColorFormat(context, 3, 4)));
	                gradientStopList.push(createGradientStop(context, 0.5, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0XFFFFFF))));
	                gradientStopList.push(createGradientStop(context, 1, createColorFormat(context, 3, 4)));
	            } else if (gradientVariant === 4) {
	                gradientStopList.push(createGradientStop(context, 0.5, createColorFormat(context, 3, 4)));
	                gradientStopList.push(createGradientStop(context, 0, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0XFFFFFF))));
	                gradientStopList.push(createGradientStop(context, 1, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0XFFFFFF))));
	            }
	        };
	        ShapeUtility.InitGradientTwoColorCornerStops = function (context, gradientFill) {
	            var gradientStopList = gradientFill.GradientStops.GradientStopList;
	            gradientStopList.push(createGradientStop(context, 0, createColorFormat(context, 3, 4)));
	            gradientStopList.push(createGradientStop(context, 1, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xFFFFFF))));
	        };
	        ShapeUtility.InitGradientTwoColorCenterStops = function (context, gradientFill) {
	            var gradientStopList = gradientFill.GradientStops.GradientStopList;
	            var gradientVariant = gradientFill.GradientVariant;
	            if (gradientVariant === 1) {
	                gradientStopList.push(createGradientStop(context, 0, createColorFormat(context, 3, 4)));
	                gradientStopList.push(createGradientStop(context, 1, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xFFFFFF))));
	            } else if (gradientVariant === 2) {
	                gradientStopList.push(createGradientStop(context, 0, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xFFFFFF))));
	                gradientStopList.push(createGradientStop(context, 1, createColorFormat(context, 3, 4)));
	            } else if (gradientVariant === 3) {
	                gradientStopList.push(createGradientStop(context, 0, createColorFormat(context, 3, 4)));
	                gradientStopList.push(createGradientStop(context, 0.5, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xFFFFFF))));
	                gradientStopList.push(createGradientStop(context, 1, createColorFormat(context, 3, 4)));
	            } else if (gradientVariant === 4) {
	                gradientStopList.push(createGradientStop(context, 0, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xFFFFFF))));
	                gradientStopList.push(createGradientStop(context, 0.5, createColorFormat(context, 3, 4)));
	                gradientStopList.push(createGradientStop(context, 1, createColorFormatFromRGB(context, 2, ARGBColor_FromArgb(0xFFFFFF))));
	            }
	        };
	        ShapeUtility.InitGradientOneColorCornerStops = function (context, gradientFill) {
	            var color = createColorFormat(context, 3, 4, this.GetTintAndShadeByDegree(gradientFill.GradientDegree));
	            var gradientStopList = gradientFill.GradientStops.GradientStopList;
	            gradientStopList.push(createGradientStop(context, 0, createColorFormat(context, 3, 4)));
	            gradientStopList.push(createGradientStop(context, 1, color));
	        };
	        ShapeUtility.InitGradientOneColorCenterStops = function (context, gradientFill) {
	            var color = createColorFormat(context, 3, 4, this.GetTintAndShadeByDegree(gradientFill.GradientDegree));
	            var gradientStopList = gradientFill.GradientStops.GradientStopList;
	            var gradientVariant = gradientFill.GradientVariant;
	            if (gradientVariant === 1) {
	                gradientStopList.push(createGradientStop(context, 0, createColorFormat(context, 3, 4)));
	                gradientStopList.push(createGradientStop(context, 1, color));
	            } else if (gradientVariant === 2) {
	                gradientStopList.push(createGradientStop(context, 0, color));
	                gradientStopList.push(createGradientStop(context, 1, createColorFormat(context, 3, 4)));
	            } else if (gradientVariant === 3) {
	                gradientStopList.push(createGradientStop(context, 0, createColorFormat(context, 3, 4)));
	                gradientStopList.push(createGradientStop(context, 0.5, color));
	                gradientStopList.push(createGradientStop(context, 1, createColorFormat(context, 3, 4)));
	            } else if (gradientVariant === 4) {
	                gradientStopList.push(createGradientStop(context, 0, color));
	                gradientStopList.push(createGradientStop(context, 0.5, createColorFormat(context, 3, 4)));
	                gradientStopList.push(createGradientStop(context, 1, color));
	            }
	        };
	        ShapeUtility.InitGradientStopOneColor = function (context, gradientFill) {
	            var gradientStyle = gradientFill.GradientStyle;
	            if (gradientStyle === 6) {
	                this.InitGradientOneColorCenterStops(context, gradientFill);
	                return;
	            } else if (gradientStyle === 4) {
	                this.InitGradientOneColorCornerStops(context, gradientFill);
	                return;
	            }
	            var tintAndShade = this.GetTintAndShadeByDegree(gradientFill.GradientDegree);
	            var gradientStopList = gradientFill.GradientStops.GradientStopList;
	            var gradientVariant = gradientFill.GradientVariant;
	            if (gradientVariant === 1 || gradientVariant === 2) {
	                gradientStopList.push(createGradientStop(context, 0, createColorFormat(context, 3, 4)));
	                gradientStopList.push(createGradientStop(context, 1, createColorFormat(context, 3, 4, tintAndShade)));
	            } else if (gradientVariant === 3) {
	                gradientStopList.push(createGradientStop(context, 0, createColorFormat(context, 3, 4)));
	                gradientStopList.push(createGradientStop(context, 0.5, createColorFormat(context, 3, 4, tintAndShade)));
	                gradientStopList.push(createGradientStop(context, 1, createColorFormat(context, 3, 4)));
	            } else if (gradientVariant === 4) {
	                gradientStopList.push(createGradientStop(context, 0.5, createColorFormat(context, 3, 4)));
	                gradientStopList.push(createGradientStop(context, 0, createColorFormat(context, 3, 4)));
	                gradientStopList.push(createGradientStop(context, 1, createColorFormat(context, 3, 4, tintAndShade)));
	            }
	        };
	        ShapeUtility.GetTintAndShadeByDegree = function (gradientDegree) {
	            return (gradientDegree - 0.5) * 2;
	        };
	        ShapeUtility.GetGradientAngle = function (style, variant) {
	            var res = 0;
	            switch (style) {
	                case 0
	                : {
	                    if (variant === 1) {
	                        res = 90;
	                    } else if (variant === 2 || variant === 4) {
	                        res = 270;
	                    } else if (variant === 3) {
	                        res = 90;
	                    }
	                }
	                    break;
	                case 1
	                : {
	                    if (variant === 1 || variant === 3) {
	                        res = 0;
	                    } else if (variant === 2 || variant === 4) {
	                        res = 180;
	                    }
	                }
	                    break;
	                case 2
	                : {
	                    if (variant === 1 || variant === 3) {
	                        res = 45;
	                    } else if (variant === 2 || variant === 4) {
	                        res = 225;
	                    }
	                }
	                    break;
	                case 3
	                :
	                    if (variant === 1 || variant === 3) {
	                        res = 135;
	                    } else if (variant === 2 || variant === 4) {
	                        res = 315;
	                    }
	                    break;
	                case 4
	                :
	                case 6
	                :
	                    res = 135;
	                    break;
	            }
	            return res;
	        };
	        ShapeUtility.ToLum = function (v) {
	            return 100000 - Math_floor((1 - v) * 200000);
	        };
	        ShapeUtility.FromLum = function (d) {
	            return 1 - (100000 - d) / 200000.0;
	        };
	        return ShapeUtility;
	    }());
	    Charts.ShapeUtility = ShapeUtility;
	    var AxisUtility = (function () {
	        function AxisUtility() {
	        }
	
	        AxisUtility.CalculateValidMinimum = function (minimum, maximum, logarithmic, logarithmicBase, autoMinimum, autoMaximum) {
	            if (logarithmic) {
	                if (minimum === NumberExtension.DOUBLE_MAX_VALUE || minimum <= 0.0) {
	                    if (maximum === NumberExtension.DOUBLE_MIN_VALUE || maximum <= 0.0) {
	                        minimum = 1.0;
	                    } else if (maximum < 1.0) {
	                        minimum = maximum / logarithmicBase;
	                    } else if (maximum === 1.0) {
	                        minimum = 1.0 / logarithmicBase;
	                    } else if (1.0 < maximum) {
	                        minimum = 1.0;
	                    }
	                } else if (maximum <= minimum) {
	                    if (maximum === NumberExtension.DOUBLE_MIN_VALUE || maximum <= 0.0) {
	                       
	                    } else if (maximum < 1.0 && (autoMinimum && !autoMaximum)) {
	                        minimum = maximum / logarithmicBase;
	                    } else if (maximum === 1.0 && (autoMinimum && !autoMaximum)) {
	                        minimum = 1.0 / logarithmicBase;
	                    } else if (1.0 < maximum && (autoMinimum || !autoMaximum)) {
	                        minimum = 1.0;
	                    }
	                }
	            } else if (minimum === NumberExtension.DOUBLE_MAX_VALUE) {
	                if (maximum === NumberExtension.DOUBLE_MIN_VALUE) {
	                    minimum = 0.0;
	                } else if (maximum < 0.0) {
	                    minimum = 2.0 * maximum;
	                } else if (maximum === 0.0) {
	                    minimum = -1.0;
	                } else if (0.0 < maximum) {
	                    minimum = 0.0;
	                }
	            } else if (maximum <= minimum) {
	                if (maximum === NumberExtension.DOUBLE_MIN_VALUE) {
	                   
	                } else if (maximum < 0.0 && (autoMinimum && !autoMaximum)) {
	                    minimum = 2.0 * maximum;
	                } else if (maximum === 0.0 && (autoMinimum && !autoMaximum)) {
	                    minimum = -1.0;
	                } else if (0.0 < maximum && (autoMinimum || !autoMaximum)) {
	                    minimum = 0.0;
	                }
	            }
	            return minimum;
	        };
	        AxisUtility.CalculateValidMaximum = function (minimum, maximum, logarithmic, logarithmicBase) {
	            if (logarithmic) {
	                if (maximum <= minimum) {
	                    if (minimum < 1.0) {
	                        maximum = 1.0;
	                    } else if (minimum === 1.0) {
	                        maximum = logarithmicBase;
	                    } else if (1.0 < minimum) {
	                        maximum = minimum * logarithmicBase;
	                    }
	                }
	            } else if (maximum <= minimum) {
	                if (minimum < 0.0) {
	                    maximum = 0.0;
	                } else if (minimum === 0.0) {
	                    maximum = 1.0;
	                } else if (0.0 < minimum) {
	                    maximum = 2.0 * minimum;
	                }
	            }
	            return maximum;
	        };
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	        function isOffsetNeeded(chartType) {
	            return chartType === 8  ||
	                (!ChartUtility.Is3DChart(chartType) &&
	                    (ChartUtility.IsBarChart(chartType) ||
	                        ChartUtility.IsColumnChart(chartType) ||
	                        ChartUtility.IsLineChart(chartType))// ||
	                   
	                );
	        }
	
	        function shouldUseOffset(chart) {
	            var chartType = chart.ChartType;
	
	            if (chartType === 0 ) {
	                var sers = chart.SeriesCollection.AllSers;
	                for (var i = 0, count = sers.length; i < count; i++) {
	                    if (isOffsetNeeded(sers[i].ChartType)) {
	                        return true;
	                    }
	                }
	            } else {
	                return isOffsetNeeded(chartType);
	            }
	            return false;
	        }
	
	       
	       
	        AxisUtility.calcMinMax = function (minimum, maximum, logarithmic, chart) {
	            var diff = maximum - minimum, offset = 0.05 * diff, min, max;
	            var chartType = chart.ChartType;
	            if (logarithmic) {
	                min = minimum;
	                max = maximum;
	                if (maximum < 1.0) {
	                    min = max = 1.0;
	                }
	            } else {
	                if (minimum >= 0) {
	                   
	                    max = maximum;
	                    if (shouldUseOffset(chart)) {
	                        max += offset;
	                    }
	                    if (6 * diff > maximum) {
	                        min = 0;
	                    } else {
	                        min = minimum - diff / 2;
	                        if (ChartUtility.IsScatterChart(chartType) || ChartUtility.IsBubbleChart(chartType)) {
	                            min = minimum;
	                        }
	                    }
	                } else if (maximum <= 0) {
	                   
	                    min = minimum;
	                    if (shouldUseOffset(chart)) {
	                        min -= offset;
	                    }
	                    if (6 * diff + minimum > 0) {
	                        max = 0;
	                    } else {
	                        max = maximum + diff / 2;
	                        if (ChartUtility.IsScatterChart(chartType) || ChartUtility.IsBubbleChart(chartType)) {
	                            max = maximum;
	                        }
	                    }
	                } else {
	                   
	                    min = minimum - offset;
	                    max = maximum + offset;
	                }
	            }
	
	            return {Min: min, Max: max};
	        };
	        AxisUtility.CalculateMinimum2 = function (minimum, maximum, majorUnit, logarithmic, logarithmicBase) {
	            if (logarithmic) {
	                minimum = Math_pow(logarithmicBase, Math_floor(NumberExtension.log(minimum, logarithmicBase)));
	            } else {
	                minimum = Math_floor(minimum / majorUnit) * majorUnit;
	            }
	            return minimum;
	        };
	        AxisUtility.CalculateMaximum2 = function (minimum, maximum, majorUnit, logarithmic, logarithmicBase) {
	            if (logarithmic) {
	                maximum = Math_pow(logarithmicBase, Math_ceil(NumberExtension.log(maximum, logarithmicBase)));
	            } else {
	                maximum = Math_ceil(maximum / majorUnit) * majorUnit;
	            }
	            return maximum;
	        };
	        AxisUtility.CalculateMajorUnit = function (minimum, maximum, autoMinorUnit, minorUnit, logarithmic, logarithmicBase) {
	            var range = Math_abs(maximum - minimum);
	            var majorUnit;
	            if (logarithmic) {
	                majorUnit = logarithmicBase;
	            } else {
	                majorUnit = Math_pow(10.0, Math_floor(NumberExtension.log(range, 10)));
	                if (range / majorUnit <= 1.6) {
	                    majorUnit /= 5.0;
	                } else if (range / majorUnit <= 4.0) {
	                    majorUnit /= 2.0;
	                } else if (range / majorUnit > 8.0) {
	                    majorUnit *= 2.0;
	                }
	                if (!autoMinorUnit) {
	                    majorUnit = Math_max(majorUnit, minorUnit);
	                }
	            }
	            return majorUnit;
	        };
	        AxisUtility.CalculateMinorUnit = function (minimum, maximum, majorUnit, logarithmic) {
	            var minorUnit;
	            if (logarithmic) {
	                minorUnit = majorUnit;
	            } else {
	                minorUnit = majorUnit / 5.0;
	            }
	            return minorUnit;
	        };
	        AxisUtility.GenerateAxisId = function () {
	            var id = 0;
	            while (true) { 
	                id = Math_floor(Math.random() * 90000000) + 10000000;
	                if (!this._axisIds[id]) {
	                    this._axisIds[id] = true;
	                    break;
	                }
	            }
	            return id;
	        };
	        return AxisUtility;
	    }());
	    AxisUtility._axisIds = {};
	    Charts.AxisUtility = AxisUtility;
	    var ChartElementBase = (function () {
	        function ChartElementBase() {
	        }
	
	        var ChartElementBase_prototype = ChartElementBase.prototype;
	        defineProperty(ChartElementBase_prototype, "ChartFormat", {
	            get: function () {
	                if (UnitHelper.isNullOrUndefined(this._format)) {
	                    this._format = this.GetDefaultFormat();
	                }
	                return this._format;
	            }
	        });
	        ChartElementBase_prototype.CreateFormat = function () {
	            return keyword_null;
	        };
	        ChartElementBase_prototype.GetDefaultFormat = function () {
	            return this.CreateFormat();
	        };
	        ChartElementBase_prototype.GetFormatInternal = function () {
	            return this._format;
	        };
	        ChartElementBase_prototype.FromShapeProperties = function (sp ) {
	            var _this = this;
	            if (!UnitHelper.isNullOrUndefined(sp)) {
	                if (UnitHelper.isNullOrUndefined(_this._format)) {
	                    _this._format = _this.CreateFormat();
	                }
	                _this._format.FromOOModel(sp);
	            } else {
	                _this.ClearFormat();
	            }
	        };
	        ChartElementBase_prototype.ToShapeProperties = function () {
	            return !UnitHelper.isNullOrUndefined(this._format) ? this._format.ToOOModel() : keyword_null;
	        };
	        ChartElementBase_prototype.Delete = function () {
	            if (!UnitHelper.isNullOrUndefined(this._format)) {
	                this._format.ParentStateful = keyword_null;
	            }
	        };
	        ChartElementBase_prototype.ClearFormat = function () {
	            var _this = this;
	            if (!UnitHelper.isNullOrUndefined(_this._format)) {
	                _this._format.SetParentForChildren(keyword_null);
	                _this._format.ParentStateful = keyword_null;
	                _this._format = keyword_null;
	            }
	        };
	        return ChartElementBase;
	    }());
	    Charts.ChartElementBase = ChartElementBase;
	    var StatefulChartElementBase = (function (_super) {
	        $.inherit(StatefulChartElementBase, _super);
	
	        function StatefulChartElementBase(p) {
	            return _super.call(this, p) || this;
	        }
	
	        var StatefulChartElementBase_prototype = StatefulChartElementBase.prototype;
	        defineProperty(StatefulChartElementBase_prototype, "ChartFormat", {
	            get: function () {
	                var _this = this;
	                if (UnitHelper.isNullOrUndefined(_this._format)) {
	                    _this._format = _this.GetDefaultFormat();
	                }
	                return _this._format;
	            },
	            set: function (value) {
	                var _this = this;
	               
	                if (!UnitHelper.isNullOrUndefined(_this._format)) {
	                    _this._format.SetParentForChildren(value);
	                }
	                var _oldFormat = _this._format;
	                _this._format = value;
	                if (!UnitHelper.isNullOrUndefined(_oldFormat)) {
	                    _this._format.ParentStateful = _oldFormat.ParentStateful;
	                }
	            }
	        });
	        StatefulChartElementBase_prototype.CreateFormat = function () {
	            return keyword_null;
	        };
	        StatefulChartElementBase_prototype.GetDefaultFormat = function () {
	            return this.CreateFormat();
	        };
	        StatefulChartElementBase_prototype.FromShapeProperties = function (sp ) {
	            var _this = this;
	            if (!UnitHelper.isNullOrUndefined(sp)) {
	                if (UnitHelper.isNullOrUndefined(_this._format)) {
	                    _this._format = _this.CreateFormat();
	                }
	                _this._format.FromOOModel(sp);
	            } else {
	                _this.ClearFormat();
	            }
	        };
	        StatefulChartElementBase_prototype.ToShapeProperties = function () {
	            return !UnitHelper.isNullOrUndefined(this._format) ? this._format.ToOOModel() : keyword_null;
	        };
	        StatefulChartElementBase_prototype.Delete = function () {
	            if (!UnitHelper.isNullOrUndefined(this._format)) {
	                this._format.ParentStateful = keyword_null;
	            }
	        };
	        StatefulChartElementBase_prototype.ClearFormat = function () {
	            var _this = this;
	           
	            if (!UnitHelper.isNullOrUndefined(_this._format)) {
	                _this._format.SetParentForChildren(keyword_null);
	                _this._format.ParentStateful = keyword_null;
	                _this._format = keyword_null;
	            }
	        };
	        return StatefulChartElementBase;
	    }(StatefullBase));
	    Charts.StatefulChartElementBase = StatefulChartElementBase;
	
	    module.exports = Charts;
	}());

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Charts = __webpack_require__(9);
	    var ColorHelper = __webpack_require__(3)._ColorHelper;
	    var COMMON_MODULE = __webpack_require__(12),
	        defineProperty = COMMON_MODULE.ChartUtility.defineProperty,
	        isNullOrUndefined = COMMON_MODULE.UnitHelper.isNullOrUndefined;
	    var keyword_null = null;
	
	
	    var ARGBColor = (function () {
	        function ARGBColor(value, state, name, knownColor) {
	            var _this = this;
	            _this.value = value;
	            _this.state = state;
	            _this.name = name;
	            _this.knownColor = knownColor;
	        }
	
	        var ARGBColor_prototype = ARGBColor.prototype;
	        defineProperty(ARGBColor_prototype, "Transparent", {
	           
	           
	           
	            get: function () {
	                return ARGBColor.FromKnownColor(27);
	            }
	        });
	        ARGBColor.FromKnownColor = function (knownColor) {
	            return new ARGBColor(0, ARGBColor.StateKnownColorValid, keyword_null, knownColor);
	        };
	        ARGBColor.FromIndexedColor = function (index, tint) {
	            var IndexedColors = ARGBColor.IndexedColors;
	            if (!IndexedColors) {
	                IndexedColors = ARGBColor.IndexedColors = [
	                    0xff000000,
	                    0xffFFFFFF,
	                    0xffFF0000,
	                    0xff00FF00,
	                    0xff0000FF,
	                    0xffFFFF00,
	                    0xffFF00FF,
	                    0xff00FFFF,
	                    0xFF000000,
	                    0xffFFFFFF,
	                    0xffFF0000,
	                    0xff00FF00,
	                    0xff0000FF,
	                    0xffFFFF00,
	                    0xffFF00FF,
	                    0xff00FFFF,
	                    0xff800000,
	                    0xff008000,
	                    0xff000080,
	                    0xff808000,
	                    0xff800080,
	                    0xff008080,
	                    0xffC0C0C0,
	                    0xff808080,
	                    0xff9999FF,
	                    0xff993366,
	                    0xffFFFFCC,
	                    0xffCCFFFF,
	                    0xff660066,
	                    0xffFF8080,
	                    0xff0066CC,
	                    0xffCCCCFF,
	                    0xff000080,
	                    0xffFF00FF,
	                    0xffFFFF00,
	                    0xff00FFFF,
	                    0xff800080,
	                    0xff800000,
	                    0xff008080,
	                    0xff0000FF,
	                    0xff00CCFF,
	                    0xffCCFFFF,
	                    0xffCCFFCC,
	                    0xffFFFF99,
	                    0xff99CCFF,
	                    0xffFF99CC,
	                    0xffCC99FF,
	                    0xffFFCC99,
	                    0xff3366FF,
	                    0xff33CCCC,
	                    0xff99CC00,
	                    0xffFFCC00,
	                    0xffFF9900,
	                    0xffFF6600,
	                    0xff666699,
	                    0xff969696,
	                    0xff003366,
	                    0xff339966,
	                    0xff003300,
	                    0xff333300,
	                    0xff993300,
	                    0xff993366,
	                    0xff333399,
	                    0xff333333,
	                    ARGBColor.FromKnownColor(26).ToArgb(),
	                    ARGBColor.FromKnownColor(24).ToArgb()
	                ];
	            }
	            return ARGBColor.FromArgb(IndexedColors[index]).GetTintColor(tint);
	        };
	        defineProperty(ARGBColor_prototype, "R", {
	           
	           
	           
	           
	            get: function () {
	                return (this.Value >> 0x10 & 0xff);
	            }
	        });
	        defineProperty(ARGBColor_prototype, "G", {
	           
	           
	           
	           
	            get: function () {
	                return (this.Value >> 8 & 0xff);
	            }
	        });
	        defineProperty(ARGBColor_prototype, "B", {
	           
	           
	           
	           
	            get: function () {
	                return (this.Value & 0xff);
	            }
	        });
	        defineProperty(ARGBColor_prototype, "A", {
	           
	           
	           
	           
	            get: function () {
	                return (this.Value >> 0x18 & 0xff);
	            }
	        });
	        defineProperty(ARGBColor_prototype, "IsKnownColor", {
	           
	           
	           
	           
	            get: function () {
	                return (this.state & ARGBColor.StateKnownColorValid) !== 0;
	            }
	        });
	        defineProperty(ARGBColor_prototype, "IsEmpty", {
	           
	           
	           
	           
	            get: function () {
	                return (this.state === 0);
	            }
	        });
	        defineProperty(ARGBColor_prototype, "IsNamedColor", {
	           
	           
	           
	           
	            get: function () {
	                if ((this.state & ARGBColor.StateNameValid) === 0) {
	                    return this.IsKnownColor;
	                }
	                return true;
	            }
	        });
	        defineProperty(ARGBColor_prototype, "IsSystemColor", {
	           
	           
	           
	           
	            get: function () {
	                if (!this.IsKnownColor) {
	                    return false;
	                }
	                if (this.knownColor > 0x1a) {
	                    return (this.knownColor > 0xa7);
	                }
	                return true;
	            }
	        });
	        defineProperty(ARGBColor_prototype, "Name", {
	           
	           
	           
	           
	            get: function () {
	                var _this = this;
	                if ((_this.state & ARGBColor.StateNameValid) !== 0) {
	                    return _this.name;
	                }
	                if (!_this.IsKnownColor) {
	                    return _this.value.toString(0x10);
	                }
	                var str = Charts.KnownColorTable.KnownColorToName(_this.knownColor);
	                if (!isNullOrUndefined(str)) {
	                    return str;
	                }
	                return "";
	            }
	        });
	        defineProperty(ARGBColor_prototype, "Value", {
	            get: function () {
	                var _this = this;
	                if ((_this.state & ARGBColor.StateValueMask) !== 0) {
	                    return _this.value;
	                }
	                if (_this.IsKnownColor) {
	                    return Charts.KnownColorTable.KnownColorToArgb(_this.knownColor);
	                }
	                return ARGBColor.NotDefinedValue;
	            }
	        });
	       
	       
	       
	       
	       
	        ARGBColor.FromArgb = function (argb) {
	            return new ARGBColor(argb, ARGBColor.StateARGBValueValid, keyword_null, 0);
	        };
	       
	       
	       
	       
	       
	       
	       
	       
	        ARGBColor.FromArgbs = function (alpha, red, green, blue) {
	            ARGBColor.CheckByte(alpha, "alpha");
	            ARGBColor.CheckByte(red, "red");
	            ARGBColor.CheckByte(green, "green");
	            ARGBColor.CheckByte(blue, "blue");
	            return new ARGBColor(ARGBColor.MakeArgb(alpha, red, green, blue), ARGBColor.StateARGBValueValid, keyword_null, 0);
	        };
	       
	       
	       
	       
	       
	       
	        ARGBColor.FromBaseColor = function (alpha, baseColor) {
	            ARGBColor.CheckByte(alpha, "alpha");
	            return new ARGBColor(ARGBColor.MakeArgb(alpha, baseColor.R, baseColor.G, baseColor.B), ARGBColor.StateARGBValueValid, keyword_null, 0);
	        };
	       
	       
	       
	       
	       
	       
	       
	        ARGBColor.FromRgb = function (red, green, blue) {
	            return ARGBColor.FromArgbs(0xff, red, green, blue);
	        };
	       
	       
	       
	       
	        ARGBColor_prototype.GetBrightness = function () {
	            var num = (this.R) / 255;
	            var num2 = (this.G) / 255;
	            var num3 = (this.B) / 255;
	            var num4 = num;
	            var num5 = num;
	            if (num2 > num4) {
	                num4 = num2;
	            }
	            if (num3 > num4) {
	                num4 = num3;
	            }
	            if (num2 < num5) {
	                num5 = num2;
	            }
	            if (num3 < num5) {
	                num5 = num3;
	            }
	            return (num4 + num5) / 2;
	        };
	       
	       
	       
	       
	        ARGBColor_prototype.GetHue = function () {
	            var _this = this;
	            if (_this.R === _this.G && _this.G === _this.B) {
	                return 0;
	            }
	            var num = (_this.R) / 255;
	            var num2 = (_this.G) / 255;
	            var num3 = (_this.B) / 255;
	            var num7 = 0;
	            var num4 = num;
	            var num5 = num;
	            if (num2 > num4) {
	                num4 = num2;
	            }
	            if (num3 > num4) {
	                num4 = num3;
	            }
	            if (num2 < num5) {
	                num5 = num2;
	            }
	            if (num3 < num5) {
	                num5 = num3;
	            }
	            var num6 = num4 - num5;
	            if (num === num4) {
	                num7 = (num2 - num3) / num6;
	            } else if (num2 === num4) {
	                num7 = 2 + (num3 - num) / num6;
	            } else if (num3 === num4) {
	                num7 = 4 + (num - num2) / num6;
	            }
	            num7 *= 60;
	            if (num7 < 0) {
	                num7 += 360;
	            }
	            return num7;
	        };
	       
	       
	       
	       
	        ARGBColor_prototype.GetSaturation = function () {
	            var num = (this.R) / 255;
	            var num2 = (this.G) / 255;
	            var num3 = (this.B) / 255;
	            var num7 = 0;
	            var num4 = num;
	            var num5 = num;
	            if (num2 > num4) {
	                num4 = num2;
	            }
	            if (num3 > num4) {
	                num4 = num3;
	            }
	            if (num2 < num5) {
	                num5 = num2;
	            }
	            if (num3 < num5) {
	                num5 = num3;
	            }
	            if (num4 === num5) {
	                return num7;
	            }
	            var num6 = (num4 + num5) / 2;
	            if (num6 <= 0.5) {
	                return (num4 - num5) / (num4 + num5);
	            }
	            return (num4 - num5) / (2 - num4 - num5);
	        };
	       
	       
	       
	       
	        ARGBColor_prototype.ToArgb = function () {
	            return this.Value;
	        };
	        ARGBColor_prototype.ToKnownColor = function () {
	            return this.knownColor;
	        };
	       
	       
	       
	       
	       
	        ARGBColor_prototype.ToString = function () {
	            var _this = this;
	            var builder = 'ARGBColor';
	            builder += (" [");
	            if ((_this.state & ARGBColor.StateNameValid) !== 0) {
	                builder += (_this.Name);
	            } else if ((_this.state & ARGBColor.StateKnownColorValid) !== 0) {
	                builder += (_this.Name);
	            } else if ((_this.state & ARGBColor.StateValueMask) !== 0) {
	                builder += ("A=");
	                builder += (_this.A);
	                builder += (", R=");
	                builder += (_this.R);
	                builder += (", G=");
	                builder += (_this.G);
	                builder += (", B=");
	                builder += (_this.B);
	            } else {
	                builder += ("Empty");
	            }
	            builder += ("]");
	            return builder;
	        };
	       
	       
	       
	       
	       
	        ARGBColor_prototype.Equals = function (obj) {
	            if (obj instanceof ARGBColor) {
	                var color = obj;
	                return this.Value === color.Value;
	            }
	            return false;
	        };
	        ARGBColor.CheckByte = function (value, name) { 
	            if (value < 0 || value > 0xff) {
	                throw new Error("InvalidEx2BoundArgument");
	            }
	        };
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	
	       
	       
	        var POWER24 = Math.pow(2, 0x18);
	        ARGBColor.MakeArgb = function (alpha, red, green, blue) {
	            return POWER24 * alpha + (red << 0x10 | green << 8 | blue);
	        };
	        ARGBColor_prototype.GetTintColor = function (tint) {
	            var _this = this;
	            if (tint === 0.0) {
	                return _this;
	            }
	            var argbData = ColorHelper._applyTint({ r: _this.R, g: _this.G, b: _this.B }, tint);
	            return Charts.ARGBColor.FromArgbs(argbData.a, argbData.r, argbData.g, argbData.b);
	        };
	        return ARGBColor;
	    }());
	    ARGBColor.StateKnownColorValid = 1;
	    ARGBColor.StateARGBValueValid = 2;
	    ARGBColor.StateValueMask = 2;
	    ARGBColor.StateNameValid = 8;
	    ARGBColor.NotDefinedValue = 0;
	    Charts.ARGBColor = ARGBColor;
	    var KnownColor = Charts.KnownColor = {
	        ActiveBorder: 1,
	        ActiveCaption: 2,
	        ActiveCaptionText: 3,
	        AliceBlue: 28,
	        AntiqueWhite: 29,
	        AppWorkspace: 4,
	        Aqua: 30,
	        Aquamarine: 31,
	        Azure: 32,
	        Beige: 33,
	        Bisque: 34,
	        Black: 35,
	        BlanchedAlmond: 36,
	        Blue: 37,
	        BlueViolet: 38,
	        Brown: 39,
	        BurlyWood: 40,
	        ButtonFace: 168,
	        ButtonHighlight: 169,
	        ButtonShadow: 170,
	        CadetBlue: 41,
	        Chartreuse: 42,
	        Chocolate: 43,
	        Control: 5,
	        ControlDark: 6,
	        ControlDarkDark: 7,
	        ControlLight: 8,
	        ControlLightLight: 9,
	        ControlText: 10,
	        Coral: 44,
	        CornflowerBlue: 45,
	        Cornsilk: 46,
	        Crimson: 47,
	        Cyan: 48,
	        DarkBlue: 49,
	        DarkCyan: 50,
	        DarkGoldenrod: 51,
	        DarkGray: 52,
	        DarkGreen: 53,
	        DarkKhaki: 54,
	        DarkMagenta: 55,
	        DarkOliveGreen: 56,
	        DarkOrange: 57,
	        DarkOrchid: 58,
	        DarkRed: 59,
	        DarkSalmon: 60,
	        DarkSeaGreen: 61,
	        DarkSlateBlue: 62,
	        DarkSlateGray: 63,
	        DarkTurquoise: 64,
	        DarkViolet: 65,
	        DeepPink: 66,
	        DeepSkyBlue: 67,
	        Desktop: 11,
	        DimGray: 68,
	        DodgerBlue: 69,
	        Firebrick: 70,
	        FloralWhite: 71,
	        ForestGreen: 72,
	        Fuchsia: 73,
	        Gainsboro: 74,
	        GhostWhite: 75,
	        Gold: 76,
	        Goldenrod: 77,
	        GradientActiveCaption: 171,
	        GradientInactiveCaption: 172,
	        Gray: 78,
	        GrayText: 12,
	        Green: 79,
	        GreenYellow: 80,
	        Highlight: 13,
	        HighlightText: 14,
	        Honeydew: 81,
	        HotPink: 82,
	        HotTrack: 15,
	        InactiveBorder: 16,
	        InactiveCaption: 17,
	        InactiveCaptionText: 18,
	        IndianRed: 83,
	        Indigo: 84,
	        Info: 19,
	        InfoText: 20,
	        Ivory: 85,
	        Khaki: 86,
	        Lavender: 87,
	        LavenderBlush: 88,
	        LawnGreen: 89,
	        LemonChiffon: 90,
	        LightBlue: 91,
	        LightCoral: 92,
	        LightCyan: 93,
	        LightGoldenrodYellow: 94,
	        LightGray: 95,
	        LightGreen: 96,
	        LightPink: 97,
	        LightSalmon: 98,
	        LightSeaGreen: 99,
	        LightSkyBlue: 100,
	        LightSlateGray: 101,
	        LightSteelBlue: 102,
	        LightYellow: 103,
	        Lime: 104,
	        LimeGreen: 105,
	        Linen: 106,
	        Magenta: 107,
	        Maroon: 108,
	        MediumAquamarine: 109,
	        MediumBlue: 110,
	        MediumOrchid: 111,
	        MediumPurple: 112,
	        MediumSeaGreen: 113,
	        MediumSlateBlue: 114,
	        MediumSpringGreen: 115,
	        MediumTurquoise: 116,
	        MediumVioletRed: 117,
	        Menu: 21,
	        MenuBar: 173,
	        MenuHighlight: 174,
	        MenuText: 22,
	        MidnightBlue: 118,
	        MintCream: 119,
	        MistyRose: 120,
	        Moccasin: 121,
	        NavajoWhite: 122,
	        Navy: 123,
	        OldLace: 124,
	        Olive: 125,
	        OliveDrab: 126,
	        Orange: 127,
	        OrangeRed: 128,
	        Orchid: 129,
	        PaleGoldenrod: 130,
	        PaleGreen: 131,
	        PaleTurquoise: 132,
	        PaleVioletRed: 133,
	        PapayaWhip: 134,
	        PeachPuff: 135,
	        Peru: 136,
	        Pink: 137,
	        Plum: 138,
	        PowderBlue: 139,
	        Purple: 140,
	        Red: 141,
	        RosyBrown: 142,
	        RoyalBlue: 143,
	        SaddleBrown: 144,
	        Salmon: 145,
	        SandyBrown: 146,
	        ScrollBar: 23,
	        SeaGreen: 147,
	        SeaShell: 148,
	        Sienna: 149,
	        Silver: 150,
	        SkyBlue: 151,
	        SlateBlue: 152,
	        SlateGray: 153,
	        Snow: 154,
	        SpringGreen: 155,
	        SteelBlue: 156,
	        Tan: 157,
	        Teal: 158,
	        Thistle: 159,
	        Tomato: 160,
	        Transparent: 27,
	        Turquoise: 161,
	        Violet: 162,
	        Wheat: 163,
	        White: 164,
	        WhiteSmoke: 165,
	        Window: 24,
	        WindowFrame: 25,
	        WindowText: 26,
	        Yellow: 166,
	        YellowGreen: 167
	    };
	    var KnownColorTable = (function () {
	        function KnownColorTable() {
	        }
	
	       
	        KnownColorTable.ArgbToKnownColor = function (targetARGB) {
	            this.EnsureColorTable();
	            for (var i = 0; i < KnownColorTable.colorTable.length; i++) {
	                var num2 = this.colorTable[i];
	                if (num2 === targetARGB) {
	                    var color = ARGBColor.FromArgb(i);
	                    if (!color.IsSystemColor) {
	                        return color;
	                    }
	                }
	            }
	            return ARGBColor.FromArgb(targetARGB);
	        };
	        KnownColorTable.Encode = function (alpha, red, green, blue) {
	            return (((red << 0x10) | (green << 8)) | blue) | (alpha << 0x18);
	        };
	        KnownColorTable.EnsureColorNameTable = function () {
	            if (isNullOrUndefined(KnownColorTable.colorNameTable)) {
	                KnownColorTable.InitColorNameTable();
	            }
	        };
	        KnownColorTable.EnsureColorTable = function () {
	            if (isNullOrUndefined(this.colorTable)) {
	                this.InitColorTable();
	            }
	        };
	        KnownColorTable.InitColorNameTable = function () {
	            var strArray = [];
	            for (var p in KnownColor) {
	                strArray[KnownColor[p]] = p;
	            }
	            KnownColorTable.colorNameTable = strArray;
	        };
	        function addSystemColors(colorTable) {
	           
	           
	            
	            colorTable[1] = 0xffb4b4b4;
	            colorTable[2] = 0xff99b4d1;
	            colorTable[3] = 0xff000000;
	            colorTable[4] = 0xffababab;
	            colorTable[5] = 0xfff0f0f0;
	            colorTable[6] = 0xffa0a0a0;
	            colorTable[7] = 0xff696969;
	            colorTable[8] = 0xffe3e3e3;
	            colorTable[9] = 0xffffffff;
	            colorTable[10] = 0xff000000;
	            colorTable[11] = 0xff000000;
	            colorTable[12] = 0xff6d6d6d;
	            colorTable[13] = 0xff3399ff;
	            colorTable[14] = 0xffffffff;
	            colorTable[15] = 0xff0066cc;
	            colorTable[16] = 0xfff4f7fc;
	            colorTable[17] = 0xffbfcddb;
	            colorTable[18] = 0xff000000;
	            colorTable[19] = 0xffffffe1;
	            colorTable[20] = 0xff000000;
	            colorTable[21] = 0xfff0f0f0;
	            colorTable[22] = 0xff000000;
	            colorTable[23] = 0xffc8c8c8;
	            colorTable[24] = 0xffffffff;
	            colorTable[25] = 0xff646464;
	            colorTable[26] = 0xff000000;
	            colorTable[168] = 0xfff0f0f0;
	            colorTable[169] = 0xffffffff;
	            colorTable[170] = 0xffa0a0a0;
	            colorTable[171] = 0xffb9d1ea;
	            colorTable[172] = 0xffd7e4f2;
	            colorTable[173] = 0xfff0f0f0;
	            colorTable[174] = 0xff3399ff;
	        }
	        KnownColorTable.InitColorTable = function () {
	            var colorTable = [];
	            addSystemColors(colorTable);   
	            colorTable[0x1b] = 0xffffff;
	            colorTable[0x1c] = -984833;
	            colorTable[0x1d] = -332841;
	            colorTable[30] = -16711681;
	            colorTable[0x1f] = -8388652;
	            colorTable[0x20] = -983041;
	            colorTable[0x21] = -657956;
	            colorTable[0x22] = -6972;
	            colorTable[0x23] = -16777216;
	            colorTable[0x24] = -5171;
	            colorTable[0x25] = -16776961;
	            colorTable[0x26] = -7722014;
	            colorTable[0x27] = -5952982;
	            colorTable[40] = -2180985;
	            colorTable[0x29] = -10510688;
	            colorTable[0x2a] = -8388864;
	            colorTable[0x2b] = -2987746;
	            colorTable[0x2c] = -32944;
	            colorTable[0x2d] = -10185235;
	            colorTable[0x2e] = -1828;
	            colorTable[0x2f] = -2354116;
	            colorTable[0x30] = -16711681;
	            colorTable[0x31] = -16777077;
	            colorTable[50] = -16741493;
	            colorTable[0x33] = -4684277;
	            colorTable[0x34] = -5658199;
	            colorTable[0x35] = -16751616;
	            colorTable[0x36] = -4343957;
	            colorTable[0x37] = -7667573;
	            colorTable[0x38] = -11179217;
	            colorTable[0x39] = -29696;
	            colorTable[0x3a] = -6737204;
	            colorTable[0x3b] = -7667712;
	            colorTable[60] = -1468806;
	            colorTable[0x3d] = -7357301;
	            colorTable[0x3e] = -12042869;
	            colorTable[0x3f] = -13676721;
	            colorTable[0x40] = -16724271;
	            colorTable[0x41] = -7077677;
	            colorTable[0x42] = -60269;
	            colorTable[0x43] = -16728065;
	            colorTable[0x44] = -9868951;
	            colorTable[0x45] = -14774017;
	            colorTable[70] = -5103070;
	            colorTable[0x47] = -1296;
	            colorTable[0x48] = -14513374;
	            colorTable[0x49] = -65281;
	            colorTable[0x4a] = -2302756;
	            colorTable[0x4b] = -460545;
	            colorTable[0x4c] = -10496;
	            colorTable[0x4d] = -2448096;
	            colorTable[0x4e] = -8355712;
	            colorTable[0x4f] = -16744448;
	            colorTable[80] = -5374161;
	            colorTable[0x51] = -983056;
	            colorTable[0x52] = -38476;
	            colorTable[0x53] = -3318692;
	            colorTable[0x54] = -11861886;
	            colorTable[0x55] = -16;
	            colorTable[0x56] = -989556;
	            colorTable[0x57] = -1644806;
	            colorTable[0x58] = -3851;
	            colorTable[0x59] = -8586240;
	            colorTable[90] = -1331;
	            colorTable[0x5b] = -5383962;
	            colorTable[0x5c] = -1015680;
	            colorTable[0x5d] = -2031617;
	            colorTable[0x5e] = -329006;
	            colorTable[0x5f] = -2894893;
	            colorTable[0x60] = -7278960;
	            colorTable[0x61] = -18751;
	            colorTable[0x62] = -24454;
	            colorTable[0x63] = -14634326;
	            colorTable[100] = -7876870;
	            colorTable[0x65] = -8943463;
	            colorTable[0x66] = -5192482;
	            colorTable[0x67] = -32;
	            colorTable[0x68] = -16711936;
	            colorTable[0x69] = -13447886;
	            colorTable[0x6a] = -331546;
	            colorTable[0x6b] = -65281;
	            colorTable[0x6c] = -8388608;
	            colorTable[0x6d] = -10039894;
	            colorTable[110] = -16777011;
	            colorTable[0x6f] = -4565549;
	            colorTable[0x70] = -7114533;
	            colorTable[0x71] = -12799119;
	            colorTable[0x72] = -8689426;
	            colorTable[0x73] = -16713062;
	            colorTable[0x74] = -12004916;
	            colorTable[0x75] = -3730043;
	            colorTable[0x76] = -15132304;
	            colorTable[0x77] = -655366;
	            colorTable[120] = -6943;
	            colorTable[0x79] = -6987;
	            colorTable[0x7a] = -8531;
	            colorTable[0x7b] = -16777088;
	            colorTable[0x7c] = -133658;
	            colorTable[0x7d] = -8355840;
	            colorTable[0x7e] = -9728477;
	            colorTable[0x7f] = -23296;
	            colorTable[0x80] = -47872;
	            colorTable[0x81] = -2461482;
	            colorTable[130] = -1120086;
	            colorTable[0x83] = -6751336;
	            colorTable[0x84] = -5247250;
	            colorTable[0x85] = -2396013;
	            colorTable[0x86] = -4139;
	            colorTable[0x87] = -9543;
	            colorTable[0x88] = -3308225;
	            colorTable[0x89] = -16181;
	            colorTable[0x8a] = -2252579;
	            colorTable[0x8b] = -5185306;
	            colorTable[140] = -8388480;
	            colorTable[0x8d] = -65536;
	            colorTable[0x8e] = -4419697;
	            colorTable[0x8f] = -12490271;
	            colorTable[0x90] = -7650029;
	            colorTable[0x91] = -360334;
	            colorTable[0x92] = -744352;
	            colorTable[0x93] = -13726889;
	            colorTable[0x94] = -2578;
	            colorTable[0x95] = -6270419;
	            colorTable[150] = -4144960;
	            colorTable[0x97] = -7876885;
	            colorTable[0x98] = -9807155;
	            colorTable[0x99] = -9404272;
	            colorTable[0x9a] = -1286;
	            colorTable[0x9b] = -16711809;
	            colorTable[0x9c] = -12156236;
	            colorTable[0x9d] = -2968436;
	            colorTable[0x9e] = -16744320;
	            colorTable[0x9f] = -2572328;
	            colorTable[160] = -40121;
	            colorTable[0xa1] = -12525360;
	            colorTable[0xa2] = -1146130;
	            colorTable[0xa3] = -663885;
	            colorTable[0xa4] = -1;
	            colorTable[0xa5] = -657931;
	            colorTable[0xa6] = -256;
	            colorTable[0xa7] = -6632142;
	            KnownColorTable.colorTable = colorTable;
	        };
	        KnownColorTable.KnownColorToArgb = function (color) {
	            this.EnsureColorTable();
	            if (color <= 174) {
	                return this.colorTable[color];
	            }
	            return 0;
	        };
	        KnownColorTable.KnownColorToName = function (color) {
	            this.EnsureColorNameTable();
	            if (color <= 174) {
	                return KnownColorTable.colorNameTable[color];
	            }
	            return keyword_null;
	        };
	        KnownColorTable.IsKnowColor = function (argbValue) {
	            KnownColorTable.EnsureColorTable();
	            return KnownColorTable.colorTable.indexOf(argbValue) !== -1;
	        };
	        return KnownColorTable;
	    }());
	    Charts.KnownColorTable = KnownColorTable;
	   
	   
	   
	
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	
	    module.exports = Charts;
	}());

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Charts = __webpack_require__(9);
	
	    var ColorData = (function () {
	        function ColorData() {
	        }
	
	       
	       
	       
	       
	       
	        ColorData.ConvertHexStringToInt = function (hexString) {
	            return parseInt(hexString, 16);
	        };
	        var ColorData_prototype = ColorData.prototype;
	        ColorData_prototype.Equals = function (other) {
	            return this.ColorType === other.ColorType && this.Value === other.Value && this.Tint === other.Tint;
	        };
	        ColorData_prototype.Clone = function () {
	            return this;
	        };
	        ColorData_prototype.Compose = function (other, conflictCompose) {
	            if (conflictCompose === void 0) {
	                conflictCompose = true;
	            }
	            if (other.Flag === 0) {
	                return;
	            }
	            if (conflictCompose) {
	                this.ConflictCompose(other);
	            } else {
	                this.NonConflictCompose(other);
	            }
	        };
	        ColorData_prototype.ConflictCompose = function (other) {
	            var _this = this;
	            if ((other.Flag & 1) === 1 &&
	                _this.ColorType !== other.ColorType) {
	                _this.ColorType = other.ColorType;
	                _this.Value = 0;
	                _this.Tint = 0;
	            }
	            if ((other.Flag & 2) === 2) {
	                _this.Value = other.Value;
	            }
	            if ((other.Flag & 4) === 4) {
	                _this.Tint = other.Tint;
	            }
	            _this.Flag |= other.Flag;
	        };
	        ColorData_prototype.NonConflictCompose = function (other) {
	            var _this = this;
	            if ((_this.Flag & 1) !== 1 &&
	                (other.Flag & 1) === 1) {
	                _this.ColorType = other.ColorType;
	                _this.Value = other.Value;
	                _this.Tint = other.Tint;
	                _this.Flag = other.Flag;
	            }
	        };
	        ColorData_prototype.RemoveDuplicateStyle = function (other) {
	            return this.Compare(other, false);
	        };
	        ColorData_prototype.RemoveDifferentStyle = function (other) {
	            return this.Compare(other, true);
	        };
	        ColorData_prototype.Compare = function (other, removeDifferent) {
	            var _this = this;
	            var isChanged = false;
	            if ((_this.Flag & 1) === 1) {
	                var isDiffColorType = (other.Flag & 1) !== 1 || _this.ColorType !== other.ColorType;
	                if (removeDifferent) {
	                    if (isDiffColorType) {
	                        _this.Flag = 0;
	                        isChanged = true;
	                    } else {
	                        if ((_this.Flag & 2) === 2) {
	                            var isDiffValue = (other.Flag & 2) !== 2 || _this.Value !== other.Value;
	                            if (isDiffValue) {
	                                _this.Flag = 0;
	                                isChanged = true;
	                            }
	                        }
	                        if ((_this.Flag & 4) === 4) {
	                            var isDiffTint = (other.Flag & 4) !== 4 || _this.Tint !== other.Tint;
	                            if (isDiffTint) {
	                                _this.Flag = 0;
	                                isChanged = true;
	                            }
	                        }
	                    }
	                } else if (!isDiffColorType) {
	                    if ((_this.Flag & 2) === 2) {
	                        isDiffValue = (other.Flag & 2) !== 2 || _this.Value !== other.Value;
	                        if (!isDiffValue) {
	                            _this.Flag &= ~2;
	                            isChanged = true;
	                        }
	                    }
	                    if ((_this.Flag & 4) === 4) {
	                        isDiffTint = (other.Flag & 4) !== 4 || _this.Tint !== other.Tint;
	                        if (!isDiffTint) {
	                            _this.Flag &= ~4;
	                            isChanged = true;
	                        }
	                    }
	                    if (_this.Flag === 1) {
	                        _this.Flag = 0;
	                        isChanged = true;
	                    }
	                }
	            }
	            return isChanged;
	        };
	        ColorData_prototype.UpdateDefaultValueFlag = function () {
	            if (this.ColorType === 0) {
	                this.Flag = 0;
	            } else {
	                this.Flag = 7;
	            }
	        };
	        ColorData_prototype.UpdateFlagFromBottom = function () {
	        };
	        ColorData_prototype.ClearFlag = function () {
	            this.Flag = 0;
	        };
	        ColorData_prototype.SetFullFlag = function () {
	            this.Flag = 7;
	        };
	        ColorData_prototype.IsFullFlag = function () {
	            return this.Flag === 7;
	        };
	        return ColorData;
	    }());
	    Charts.ColorData = ColorData;
	    Charts.ColorType = {
	        None: 0,
	        Auto: 1,
	        RGB: 2,
	        Index: 3,
	        Theme: 4
	    };
	    Charts.ColorDataFlag = {
	        None: 0,
	        ColorType: 1,
	        Value: 2,
	        Tint: 4,
	        All: 7
	    };
	
	    module.exports = Charts;
	}());

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Charts = __webpack_require__(9),
	        _ColorHelper = __webpack_require__(3)._ColorHelper;
	    var Sheets = __webpack_require__(2);
	    var $ = Sheets.GC$,    
	        $_inherit = $.inherit,
	        COMMON_MODULE = __webpack_require__(12),
	        ChartUtility = COMMON_MODULE.ChartUtility,
	        defineProperty = ChartUtility.defineProperty,
	        isNullOrUndefined = COMMON_MODULE.UnitHelper.isNullOrUndefined,
	        ShapeConstants = COMMON_MODULE.ShapeConstants,
	        DefaultTransparent = ShapeConstants.DefaultTransparent,
	        PositionConver = ShapeConstants.PositionConver,
	        ColorData = __webpack_require__(14).ColorData,
	        ARGBColor = __webpack_require__(13).ARGBColor,
	        StatefullBase = __webpack_require__(11).StatefullBase;
	    var keyword_null = null, Math_abs = Math.abs, Math_floor = Math.floor;
	
	    function isThemeColor(theme, colorString) {
	        return theme.getColor(colorString) !== colorString;
	    }
	
	   
	   
	   
	   
	   
	   
	   
	   
	    var ColorFormat = (function (_super) {
	        $_inherit(ColorFormat, _super);
	        function ColorFormat(context, parent) {
	            if (parent === void 0) {
	                parent = keyword_null;
	            }
	            var _this = _super.call(this, parent) || this;
	            _this._themeColor = -4142;
	            _this._rgbColor = keyword_null;
	            _this._tint = 0;
	            _this._brightness = 0;
	            _this._transparency = DefaultTransparent;
	            _this._context = context;
	            _this._parent = parent;
	            var drawingType = _this._context.DrawingType;
	            if (drawingType === 0) {
	                _this._colorType = 3;
	            } else if (drawingType === 1) {
	                _this._colorType = 1;
	            } else if (drawingType === 2) {
	                _this._colorType = 0;
	            }
	            return _this;
	        }
	
	        var ColorFormat_prototype = ColorFormat.prototype;
	        defineProperty(ColorFormat_prototype, "Brightness", {
	            get: function () {
	                if (!this.GetState(1) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.Brightness;
	                }
	                return this._brightness;
	            },
	            set: function (value) {
	                if (value < -1 || value > 1) {
	                    throw new Error();
	                }
	                this._brightness = value;
	                this.Dirty(1);
	            }
	        });
	        defineProperty(ColorFormat_prototype, "ObjectThemeColor", {
	            get: function () {
	                if (!this.GetState(2) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.ObjectThemeColor;
	                }
	                return this._themeColor;
	            },
	            set: function (value) {
	                var _this = this;
	               
	                var themeColorDict = {
	                    "13": 1,
	                    "14": 0,
	                    "15": 3,
	                    "16": 2
	                };
	                if (!isNullOrUndefined(themeColorDict[value])) {
	                    value = themeColorDict[value];
	                }
	                _this._themeColor = value;
	                _this.Dirty(2);
	                _this.ColorType = 3;
	                _this._rgbColor = keyword_null;
	                _this.UnDirty(4);
	                _this._brightness = 0;
	                _this.Dirty(1);
	            }
	        });
	        defineProperty(ColorFormat_prototype, "RGB", {
	            get: function () {
	                var _this = this;
	                if (!_this.HasOwnColor() && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.RGB;
	                }
	                return _this._context._ToARGBColor(_this.GetColorData());
	            },
	            set: function (value) {
	                var _this = this;
	                _this._rgbColor = value;
	               
	                _this.Transparency = 1 - (value.A / 255);
	                _this.Dirty(4);
	                _this.ColorType = 2;
	                _this._themeColor = -4142;
	                _this.Dirty(2);
	               
	                _this._brightness = 0;
	                _this._tint = 0;
	                _this.Dirty(1);
	                _this.Dirty(8);
	            }
	        });
	        defineProperty(ColorFormat_prototype, "TintAndShade", {
	           
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(8) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.TintAndShade;
	                }
	                return _this._tint;
	            },
	            set: function (value) {
	                this._tint = value;
	                this.Dirty(8);
	            }
	        });
	        defineProperty(ColorFormat_prototype, "Transparency", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(32) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Transparency;
	                }
	                return _this._transparency;
	            },
	            set: function (value) {
	               
	                value = Math.max(0, Math.min(1, value));
	                this._transparency = value;
	                this.Dirty(32);
	            }
	        });
	        defineProperty(ColorFormat_prototype, "ColorType", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(16) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.ColorType;
	                }
	                return _this._colorType;
	            },
	            set: function (value) {
	                this._colorType = value;
	                this.Dirty(16);
	            }
	        });
	        ColorFormat_prototype.setColor = function (sheet, colorString) {
	            var _this = this;
	            if(sheet && isThemeColor(sheet.currentTheme(), colorString)) {
	                var themeColorInfo = ChartUtility.fromThemeColorString(colorString);
	                if(themeColorInfo) {
	                    _this.ObjectThemeColor = themeColorInfo.index;
	                    if(themeColorInfo.tint !== undefined) {
	                        _this.TintAndShade = themeColorInfo.tint;
	                    }
	                }
	            } else {
	                var aRgbColor = _ColorHelper._fromString(colorString);
	                _this.RGB = ARGBColor.FromArgbs(aRgbColor.a, aRgbColor.r, aRgbColor.g, aRgbColor.b);
	            }
	        };
	        ColorFormat_prototype.GetColorData = function () {
	            var _this = this;
	            var data = new ColorData();
	            data.ColorType = 2;
	            var colorType = _this._colorType;
	            if (colorType === 0) {
	                data.ColorType = 0;
	            } else if (colorType === 1) {
	                data.ColorType = 1;
	                var autoColFormat = _this.GetAutoColorFormat();
	                if (!isNullOrUndefined(autoColFormat)) {
	                    return autoColFormat.GetColorData();
	                }
	            } else if (colorType === 2) {
	                if (!isNullOrUndefined(_this._rgbColor)) {
	                    data.ColorType = 2;
	                   
	                    var rgb = this._rgbColor;
	                    var alpha = 1 - _this._transparency;
	                    if (alpha !== 1) {
	                        rgb = ARGBColor.FromArgbs(parseInt(255 * alpha), rgb.R, rgb.G, rgb.B);
	                    }
	                    data.Value = rgb.ToArgb();
	                   
	                    data.Tint = _this._tint || _this._brightness;
	                }
	            } else if (colorType === 3) {
	                data.ColorType = 4;
	                data.Value = _this._themeColor;
	                data.Tint = _this._tint || _this._brightness;
	                data.Transparency = _this._transparency;
	            }
	            return data;
	        };
	        ColorFormat_prototype.HasOwnColor = function () {
	            return this.GetState(2) ||
	                this.GetState(4) ||
	                this.GetAutoColorFormat() !== keyword_null;
	        };
	        ColorFormat_prototype.GetAutoColorFormat = function () {
	            if (this.ColorType === 1 && !isNullOrUndefined(this.AutoColorFormat)) {
	                var auto = this.AutoColorFormat();
	                if (!isNullOrUndefined(auto) && auto.ColorType !== 1) {
	                    return auto;
	                }
	            }
	            return keyword_null;
	        };
	        ColorFormat_prototype.OnParentChanged = function (newParent) {
	            this._parent = newParent;
	        };
	        ColorFormat_prototype.ClearModel = function () {
	            this._ooModel = keyword_null;
	            for (var _i = 0, _a = this.Children; _i < _a.length; _i++) {
	                var item = _a[_i];
	                item.ClearModel();
	            }
	        };
	        ColorFormat_prototype.CalcBrightness = function (lumMod, lumOff) {
	            if (lumMod && lumMod.length > 0 && lumOff && lumOff.length > 0) {
	                return lumOff[0] / PositionConver;
	            }
	            if (lumMod && lumMod.length > 0) {
	                return lumMod[0] / PositionConver - 1;
	            }
	            return 0;
	        };
	        ColorFormat_prototype.CalcLumModeOff = function (lumMod, lumOff) {
	            var _this = this;
	            if (_this.Brightness > 0) {
	                lumMod.push(Math_floor((1 - _this.Brightness) * PositionConver));
	                lumOff.push(Math_floor(_this.Brightness * PositionConver));
	            } else if (_this.Brightness < 0) {
	                lumMod.push(Math_floor((1 + _this.Brightness) * PositionConver));
	            }
	        };
	        ColorFormat_prototype.FromCT_ColorProperties = function (color ) {
	            var _this = this;
	            _this._ooModel = color;
	            if (isNullOrUndefined(color)) {
	                _this.ColorType = 0;
	            } else if (!isNullOrUndefined(color.schemeClr)) {
	                var schemeClr = color.schemeClr;
	                _this.ObjectThemeColor = schemeClr.val;
	                _this.Brightness = _this.CalcBrightness(schemeClr.lumMod, schemeClr.lumOff);
	               
	               
	               
	                _this._tint = 0;
	                if (!isNullOrUndefined(schemeClr.tint) && schemeClr.tint.length > 0) {
	                    _this.FromTint(schemeClr.tint[0]);
	                }
	                if (!isNullOrUndefined(schemeClr.alpha) && schemeClr.alpha.length > 0) {
	                    _this.FromTransparency(schemeClr.alpha[0]);
	                }
	                var shade = schemeClr.shade;
	                if (shade && shade.length) {
	                    _this.FromShade(shade[0]);
	                }
	            } else if (!isNullOrUndefined(color.srgbClr) && !isNullOrUndefined(color.srgbClr.val) && color.srgbClr.val.length === 3) {
	                var srgbClr = color.srgbClr;
	                _this.RGB = ARGBColor.FromRgb(srgbClr.val[0], srgbClr.val[1], srgbClr.val[2]);
	                _this.Brightness = _this.CalcBrightness(srgbClr.lumMod, srgbClr.lumOff);
	                if (!isNullOrUndefined(srgbClr.alpha) && srgbClr.alpha.length > 0) {
	                    _this.FromTransparency(srgbClr.alpha[0]);
	                }
	                if (!isNullOrUndefined(srgbClr.tint) && srgbClr.tint.length > 0) {
	                    _this.FromTint(srgbClr.tint[0]);
	                }
	            } else if (!isNullOrUndefined(color.scrgbClr)) {
	                var scrgbClr = color.scrgbClr;
	                _this.RGB = ARGBColor.FromRgb(scrgbClr.r, scrgbClr.g, scrgbClr.b);
	            } else if (!isNullOrUndefined(color.sysClr)) {
	                var sysClr = color.sysClr;
	                var sysColor = sysClr.val;
	                if (!isNullOrUndefined(sysColor)) {
	                    _this.RGB = ARGBColor.FromKnownColor(sysColor);
	                } else if (!isNullOrUndefined(sysClr.lastClr) && sysClr.lastClr.length === 3) {
	                    _this.RGB = ARGBColor.FromRgb(sysClr.lastClr[0], sysClr.lastClr[1], sysClr.lastClr[2]);
	                }
	                _this.Brightness = _this.CalcBrightness(sysClr.lumMod, sysClr.lumOff);
	                if (!isNullOrUndefined(sysClr.alpha) && sysClr.alpha.length > 0) {
	                    _this.FromTransparency(sysClr.alpha[0]);
	                }
	            } else if (!isNullOrUndefined(color.prstClr)) {
	                var prstClr = color.prstClr;
	                _this.RGB = ARGBColor.FromArgb(ChartUtility.GetPresetColorRGB(prstClr.val));
	                _this.Brightness = _this.CalcBrightness(prstClr.lumMod, prstClr.lumOff);
	                if (!isNullOrUndefined(prstClr.alpha) && prstClr.alpha.length > 0) {
	                    _this.Transparency = prstClr.alpha[0] / PositionConver;
	                }
	            }
	        };
	        function removeColorItems(ooColorProperties) {
	            delete ooColorProperties.hslClr;
	            delete ooColorProperties.prstClr;
	            delete ooColorProperties.scrgbClr;
	            delete ooColorProperties.srgbClr;
	            delete ooColorProperties.sysClr;
	        }
	        function setLumValues(clr, lumMod, lumOff) {
	            if (lumMod.length > 0) {
	                clr.lumMod = lumMod;
	            }
	            if (lumOff.length > 0) {
	                clr.lumOff = lumOff;
	            }
	        }
	        ColorFormat_prototype.ToCT_ColorProperties = function (colorProperties) {
	            var _this = this;
	            var ooColorProperties = _this._ooModel || colorProperties;
	            var lumMod = [];
	            var lumOff = [];
	            var schemeClr = ooColorProperties.schemeClr;
	            if (schemeClr) {
	                ChartUtility.removeEmptyArrayProperties(schemeClr);
	            }
	            if (_this.ColorType === 3) {
	                removeColorItems(ooColorProperties);
	               
	                if (!schemeClr) {
	                    schemeClr = ooColorProperties.schemeClr = {};
	                }
	                schemeClr.val = _this.ObjectThemeColor;
	                _this.CalcLumModeOff(lumMod, lumOff);
	                setLumValues(schemeClr, lumMod, lumOff);
	                if (_this.TintAndShade > 0) {
	                    schemeClr.tint = [_this.ToTint()];
	                } else if (_this.TintAndShade < 0) {
	                    schemeClr.shade = [_this.ToShade()];
	                }
	                if (_this.Transparency !== DefaultTransparent) {
	                    schemeClr.alpha = [_this.ToTransparency()];
	                }
	            } else if (_this.ColorType === 2) {
	                removeColorItems(ooColorProperties);
	               
	                delete ooColorProperties.schemeClr;
	                var sysColor = keyword_null;
	                if (_this._rgbColor && _this._rgbColor.IsKnownColor) {
	                    sysColor = _this._rgbColor.ToKnownColor();
	                }
	                if (!isNullOrUndefined(sysColor)) {
	                    var sysClr = ooColorProperties.sysClr = {};
	                    sysClr.val = sysColor;
	                    sysClr.lastClr = [_this.RGB.R, _this.RGB.G, _this.RGB.B];
	                    _this.CalcLumModeOff(lumMod, lumOff);
	                    setLumValues(sysClr, lumMod, lumOff);
	                    if (_this.Transparency !== DefaultTransparent) {
	                        sysClr.alpha = [_this.ToTransparency()];
	                    }
	                } else {
	                    var srgbClr = ooColorProperties.srgbClr = {};
	                    srgbClr.val = [_this.RGB.R, _this.RGB.G, _this.RGB.B];
	                    _this.CalcLumModeOff(lumMod, lumOff);
	                    setLumValues(srgbClr, lumMod, lumOff);
	                    if (_this.Transparency !== DefaultTransparent) {
	                        srgbClr.alpha = [_this.ToTransparency()];
	                    }
	                    if (_this.TintAndShade > 0) {
	                        srgbClr.tint = [_this.ToTint()];
	                    } else if (_this.TintAndShade < 0) {
	                        srgbClr.shade = [_this.ToShade()];
	                    }
	                }
	            }
	            var colorFillType = colorProperties && colorProperties.colorFillType;
	            if (!isNullOrUndefined(colorFillType)) {
	                ooColorProperties.colorFillType = colorFillType;
	            }
	            return ooColorProperties;
	        };
	        ColorFormat_prototype.FromTint = function (val) {
	            this.TintAndShade = 1 - val / PositionConver;
	        };
	        ColorFormat_prototype.FromShade = function (val) {
	            this.TintAndShade = val / PositionConver - 1;
	        };
	        ColorFormat_prototype.ToTint = function () {
	            return Math_floor(Math_abs((1 - this.TintAndShade) * PositionConver));
	        };
	        ColorFormat_prototype.ToShade = function () {
	            return Math_floor(Math_abs((1 + this.TintAndShade) * PositionConver));
	        };
	        ColorFormat_prototype.FromTransparency = function (val) {
	            this.Transparency = 1 - val / PositionConver;
	        };
	        ColorFormat_prototype.ToTransparency = function () {
	            return Math_floor((1 - this.Transparency) * PositionConver);
	        };
	        ColorFormat_prototype.Clone = function () {
	            var _this = this;
	            var format = new ColorFormat(_this._context);
	            format._brightness = _this._brightness;
	            format._colorType = _this._colorType;
	            format._context = _this._context;
	            format._rgbColor = _this._rgbColor;
	            format._themeColor = _this._themeColor;
	            format._tint = _this._tint;
	            format.AutoColorFormat = _this.AutoColorFormat;
	            return format;
	        };
	        ColorFormat_prototype.FromOOModel = function (t ) {
	            this.FromCT_ColorProperties(t);
	        };
	        ColorFormat_prototype.ToOOModel = function () {
	            var colorType = this.ColorType;
	            if (colorType === 1) {
	                return {} ;
	            } else if (colorType === 0) {
	                return {
	                    colorFillType: 5 
	                };
	            }
	            return this.ToCT_ColorProperties({ colorFillType: 0 } );
	        };
	        ColorFormat_prototype.Color_FromOOModel = function (t ) {
	            this.FromCT_ColorProperties(t);
	        };
	        ColorFormat_prototype.Color_ToOOModel = function () {
	            return this.ToCT_ColorProperties({} );
	        };
	        ColorFormat_prototype.GradientStop_FromOOModel = function (t ) {
	            this.FromCT_ColorProperties(t);
	        };
	        ColorFormat_prototype.GradientStop_ToOOModel = function () {
	            return this.ToCT_ColorProperties({} ) ;
	        };
	        ColorFormat_prototype.ColorData_FromOOModel = function (t) {
	            if (t.ColorType === 2 || t.ColorType === 3) {
	                this.RGB = ARGBColor.FromArgb(t.Value);
	            } else if (t.ColorType === 4) {
	                this.ObjectThemeColor = t.Value;
	                this.TintAndShade = t.Tint;
	            }
	        };
	        ColorFormat_prototype.ColorData_ToOOModel = function () {
	            var _this = this;
	            var colorData = new ColorData();
	            if (_this.ColorType === 2) {
	                colorData.Value = _this.RGB.Value;
	                colorData.ColorType = 2;
	            } else if (_this.ColorType === 3) {
	                colorData.Value = _this.ObjectThemeColor;
	                colorData.Tint = _this.TintAndShade;
	                colorData.ColorType = 4;
	            }
	            return colorData;
	        };
	        return ColorFormat;
	    }(StatefullBase));
	    Charts.ColorFormat = ColorFormat;
	
	    module.exports = Charts;
	}());

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(3);
	    var Types = Common._Types;
	    var inherit = Types._inherit;
	
	    var Charts = __webpack_require__(9);
	    var StatefullBase = __webpack_require__(11).StatefullBase;
	    var ChartCommon = __webpack_require__(12),
	        ShapeConstants = ChartCommon.ShapeConstants,
	        ChartUtility = ChartCommon.ChartUtility,
	        defineProperty = ChartUtility.defineProperty,
	        NumberExtension = ChartCommon.NumberExtension,
	        UnitHelper = ChartCommon.UnitHelper,
	        isNullOrUndefined = UnitHelper.isNullOrUndefined;
	
	    var Math_floor = Math.floor, Math_sqrt = Math.sqrt;
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	    var ShadowFormat = (function (_super) {
	        inherit(ShadowFormat, _super);
	        function ShadowFormat(context, parent) {
	            _super.call(this);
	            var _this = this;
	            _this._blur = 5;
	            _this._obscured = false;
	            _this._offsetX = ShapeConstants.DefaultOffset;
	            _this._offsetY = ShapeConstants.DefaultOffset;
	            _this._rotateWithShape = false;
	            _this._size = 100;
	            _this._transparency = 0;
	            _this._visible = false;
	            _this.presetShadowOffset = -6.0;
	            _this._context = context;
	            _this._parent = parent;
	        }
	
	        var prototype = ShadowFormat.prototype;
	
	        prototype.OnStyleChange = function () {
	            var _this = this;
	            _this._blur = 0;
	            _this._offsetX = 0;
	            _this._offsetY = 0;
	            _this._size = 100;
	            _this._transparency = 0;
	            _this.UnDirty(256 );
	            if (_this.Style === 0) {
	                _this._rotateWithShape = false;
	            } else if (_this.Style === 1) {
	                _this._rotateWithShape = true;
	            }
	        };
	        prototype.OnTypeChange = function () {
	            var _this = this;
	            _this._blur = 5;
	            _this._offsetX = _this.presetShadowOffset;
	            _this._offsetY = _this.presetShadowOffset;
	            _this._size = 100;
	            _this._transparency = 0.5;
	            _this.UnDirty(64 );
	        };
	        prototype.GetDefaultColor = function () {
	            var foreColor = new Charts.ColorFormat(this._context, this._parent && this._parent._foreColor);
	            foreColor.ColorType = 0;
	            return foreColor;
	        };
	        defineProperty(prototype, "ForeColor", {
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._foreColor)) {
	                    _this._foreColor = _this.GetDefaultColor();
	                }
	                return _this._foreColor;
	            }
	        });
	        defineProperty(prototype, "Obscured", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(2 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Obscured;
	                }
	                return _this._obscured;
	            },
	            set: function (value) {
	                this._obscured = value;
	                this.SetState(2 , true);
	            }
	        });
	        defineProperty(prototype, "Blur", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(1 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Blur;
	                }
	                return _this._blur;
	            },
	            set: function (value) {
	                this._blur = value;
	                this.SetState(1 , true);
	            }
	        });
	        defineProperty(prototype, "OffsetX", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(4 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.OffsetX;
	                }
	                return _this._offsetX;
	            },
	            set: function (value) {
	                this._offsetX = value;
	                this.SetState(4 , true);
	            }
	        });
	        defineProperty(prototype, "OffsetY", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(8 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.OffsetY;
	                }
	                return _this._offsetY;
	            },
	            set: function (value) {
	                this._offsetY = value;
	                this.SetState(8 , true);
	            }
	        });
	        defineProperty(prototype, "RotateWithShape", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(16 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.RotateWithShape;
	                }
	                return _this._rotateWithShape;
	            },
	            set: function (value) {
	                var _this = this;
	                if (_this.Style === 0 || _this.GetState(256 )) {
	                    return;
	                }
	                _this._rotateWithShape = value;
	                _this.SetState(16 , true);
	            }
	        });
	        defineProperty(prototype, "Size", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(32 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Size;
	                }
	                return _this._size;
	            },
	            set: function (value) {
	                this._size = value;
	                this.SetState(32 , true);
	            }
	        });
	        defineProperty(prototype, "Style", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(64 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Style;
	                }
	                return _this._style;
	            },
	            set: function (value) {
	                var _this = this;
	                if (_this.Style !== value) {
	                    _this.OnStyleChange();
	                }
	                _this._style = value;
	                _this.SetState(64 , true);
	            }
	        });
	        defineProperty(prototype, "Transparency", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(128 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Transparency;
	                }
	                return _this._transparency;
	            },
	            set: function (value) {
	                this._transparency = value;
	                this.SetState(128 , true);
	            }
	        });
	        defineProperty(prototype, "Type", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(256 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Type;
	                }
	                return _this._type;
	            },
	            set: function (value) {
	                this._type = value;
	                this.SetState(256 , true);
	                this.OnTypeChange();
	            }
	        });
	        defineProperty(prototype, "Visible", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(512 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Visible;
	                }
	                return _this._visible;
	            },
	            set: function (value) {
	                var _this = this;
	                _this._visible = value;
	                _this.SetState(512 , true);
	                if (value !== false && !_this.GetState(64 )) {
	                    _this._style = 1;
	                }
	            }
	        });
	        prototype.IncrementOffsetX = function (Increment) {
	            this.OffsetX += Increment;
	        };
	        prototype.IncrementOffsetY = function (Increment) {
	            this.OffsetY += Increment;
	        };
	        prototype.FromOOModel = function (t ) {
	           
	            this._ooModel = t;
	        };
	        prototype.ToOOModel = function () {
	           
	            return this._ooModel;
	        };
	        prototype.ToCT_PresetShadowEffect = function () {
	            var _this = this;
	            var offsetX = _this.OffsetX, offsetY = _this.OffsetY;
	            var dis = Math_sqrt(offsetX * offsetX + offsetY * offsetY);
	            var presetShadow = { dist: 0, dir: 0 } ;
	            presetShadow.dist = dis;
	            presetShadow.dir = Math_floor(NumberExtension.GetTriangleAngle(offsetX, offsetY, dis) * ShapeConstants.PositiveFixedAngleConvert);
	            presetShadow.prst = _this.Type;
	            _this.ToCT_Color(presetShadow);
	            return presetShadow;
	        };
	        prototype.ToCT_InnerShadowEffect = function () {
	            var _this = this;
	            var offsetX = _this.OffsetX, offsetY = _this.OffsetY;
	            var dis = Math_sqrt(offsetX * offsetX + offsetY * offsetY);
	            var innerShadow = { blurRad: 0, dist: 0, dir: 0 } ;
	            innerShadow.blurRad = _this.Blur;
	            innerShadow.dist = dis;
	            if (offsetX !== 0 || offsetY !== 0) {
	                innerShadow.dir = Math_floor(NumberExtension.GetTriangleAngle(offsetX, offsetY, dis) * ShapeConstants.PositiveFixedAngleConvert);
	            }
	            innerShadow.scrgbClr = _this.ToCT_ScRgbColor();
	            return innerShadow;
	        };
	        prototype.ToCT_OuterShadowEffect = function () {
	            var _this = this;
	            var offsetX = _this.OffsetX, offsetY = _this.OffsetY;
	            var dis = Math_sqrt(offsetX * offsetX + offsetY * offsetY);
	            var outerShadow = { blurRad: 0, dist: 0, dir: 0, sx: 100000, sy: 100000, kx: 0, ky: 0, algn: 7, rotWithShape: true } ;
	            outerShadow.blurRad = _this.Blur;
	            outerShadow.dist = dis;
	            if (offsetX !== 0 || offsetY !== 0) {
	                outerShadow.dir = Math_floor(NumberExtension.GetTriangleAngle(offsetX, offsetY, dis) * ShapeConstants.PositiveFixedAngleConvert);
	            }
	            outerShadow.rotWithShape = _this.RotateWithShape === true;
	            outerShadow.sx = Math_floor(_this.Size * ShapeConstants.RelativeRectConver);
	            outerShadow.sy = Math_floor(_this.Size * ShapeConstants.RelativeRectConver);
	            outerShadow.scrgbClr = _this.ToCT_ScRgbColor();
	            return outerShadow;
	        };
	        prototype.ToCT_Color = function (presetShadow ) {
	            var _this = this;
	            if (isNullOrUndefined(_this._foreColor)) {
	                return;
	            }
	            if (_this._foreColor.ColorType === 3) {
	                var color = {};
	                color.val = _this._foreColor.ObjectThemeColor;
	                if (_this._foreColor.Brightness !== 0) {
	                    var percentage = Math_floor(_this._foreColor.Brightness * 100000);
	                    color.lumMod = [percentage];
	                    var percentage2 = Math_floor((1 - _this._foreColor.Brightness) * 100000);
	                    color.lumOff = [percentage2];
	                }
	                if (_this._foreColor.TintAndShade > 0 && _this._foreColor.TintAndShade < 1) {
	                    var fixedPercentage = Math_floor(_this._foreColor.TintAndShade * ShapeConstants.ShadeConver);
	                    color.shade = [fixedPercentage];
	                }
	               
	               
	               
	                presetShadow.schemeClr = color;
	            } else if (_this._foreColor.ColorType === 2) {
	                var srgbColor = {};
	                srgbColor.val = [_this._foreColor.RGB.R, _this._foreColor.RGB.G, _this._foreColor.RGB.B];
	                if (_this._foreColor.Brightness !== 0) {
	                    percentage = Math_floor(_this._foreColor.Brightness * 100000);
	                    srgbColor.lumMod = [percentage];
	                    percentage2 = Math_floor((1 - _this._foreColor.Brightness) * 100000);
	                    srgbColor.lumOff = [percentage2];
	                }
	                if (_this.Transparency !== 0) {
	                    fixedPercentage = Math_floor(_this.Transparency * ShapeConstants.PositiveFixedPercentageConvert);
	                    srgbColor.alpha = [fixedPercentage];
	                }
	                presetShadow.srgbClr = srgbColor;
	            }
	        };
	        prototype.ToCT_ScRgbColor = function () {
	            var color = {};
	            if (this.Transparency !== 0) {
	                var percentage = Math_floor(this.Transparency * ShapeConstants.PositiveFixedPercentageConvert);
	                color.alpha = [percentage];
	            }
	            return color;
	        };
	        prototype.SetState = function (prop, state) {
	            _super.prototype.SetState.call(this, prop, state);
	            if (prop === 1  || 
	                prop === 4  ||
	                prop === 8  ||
	                prop === 16  ||
	                prop === 32  ||
	                prop === 128 ) {
	                if (!this.GetState(64 )) {
	                    this._style = 1;
	                }
	            }
	        };
	        return ShadowFormat;
	    }(StatefullBase));
	    Charts.ShadowFormat = ShadowFormat;
	   
	   
	   
	   
	    var SoftEdgeFormat = (function (_super) {
	        inherit(SoftEdgeFormat, _super);
	        function SoftEdgeFormat(parent) {
	            _super.call(this, parent);
	            return this;
	        }
	        var prototype = SoftEdgeFormat.prototype;
	        prototype.FromOOModel = function (t ) {
	            this._ooModel = t;
	        };
	        prototype.ToOOModel = function () {
	            return this._ooModel;
	        };
	        return SoftEdgeFormat;
	    }(StatefullBase));
	    Charts.SoftEdgeFormat = SoftEdgeFormat;
	   
	   
	   
	   
	   
	   
	   
	    var ReflectionFormat = (function (_super) {
	        inherit(ReflectionFormat, _super);
	        function ReflectionFormat(context, parent) {
	            _super.call(this);
	            var _this = this;
	            _this._size = 100;
	            _this._type = 1;
	            _this.presetShadowOffset = -6.0;
	            _this._context = context;
	            _this._parent = parent;
	            return _this;
	        }
	
	        var prototype = ReflectionFormat.prototype;
	
	        defineProperty(prototype, "Blur", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(1 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Blur;
	                }
	                return _this._blur;
	            },
	            set: function (value) {
	                this._blur = value;
	                this.SetState(1 , true);
	            }
	        });
	        defineProperty(prototype, "Offset", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(2 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Offset;
	                }
	                return _this._offset;
	            },
	            set: function (value) {
	                this._offset = value;
	                this.SetState(2 , true);
	            }
	        });
	        defineProperty(prototype, "Size", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(4 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Size;
	                }
	                return _this._size;
	            },
	            set: function (value) {
	                this._size = value;
	                this.SetState(4 , true);
	            }
	        });
	        defineProperty(prototype, "Transparency", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(8 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Transparency;
	                }
	                return _this._transparency;
	            },
	            set: function (value) {
	                this._transparency = value;
	                this.SetState(8 , true);
	            }
	        });
	        prototype.FromOOModel = function (t ) {
	            this._ooModel = t;
	        };
	        prototype.ToOOModel = function () {
	            return this._ooModel;
	        };
	        prototype.OnTypeChange = function () {
	            var _this = this;
	            _this._blur = 5;
	            _this._offset = _this.presetShadowOffset;
	            _this._size = 100;
	            _this._transparency = 0.5;
	        };
	        return ReflectionFormat;
	    }(StatefullBase));
	    Charts.ReflectionFormat = ReflectionFormat;
	   
	   
	   
	   
	   
	    var GlowFormat = (function (_super) {
	        inherit(GlowFormat, _super);
	        function GlowFormat(context, parent) {
	            _super.call(this);
	            this._context = context;
	            this._parent = parent;
	        }
	
	        var prototype = GlowFormat.prototype;
	
	        defineProperty(prototype, "Color", {
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._color)) {
	                    _this._color = _this.GetDefaultColor();
	                }
	                return _this._color;
	            }
	        });
	        defineProperty(prototype, "Radius", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(2 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Radius;
	                }
	                return _this.radius;
	            },
	            set: function (value) {
	                this.radius = value;
	                this.Dirty(2 );
	            }
	        });
	        defineProperty(prototype, "Transparency", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(4 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Transparency;
	                }
	                return _this._transparency;
	            },
	            set: function (value) {
	                this._transparency = value;
	                this.Dirty(4 );
	            }
	        });
	        prototype.FromOOModel = function (t ) {
	            this._ooModel = t;
	        };
	        prototype.ToOOModel = function () {
	            return this._ooModel;
	        };
	        prototype.GetDefaultColor = function () {
	            var color = new Charts.ColorFormat(this._context, this._parent && this._parent.Color);
	            color.ColorType = 0;
	            return color;
	        };
	        prototype.SetState = function (prop, state) {
	            var _this = this;
	            _super.prototype.SetState.call(_this, prop, state);
	            if (prop === 2  || prop === 4 ) {   
	                if (_this._color && _this._color.ColorType === 0) {
	                    _this._color.ColorType = 2;
	                }
	            }
	        };
	        prototype.ToCT_Color = function (glowEffect ) {
	            var _this = this;
	            var color = _this._color;
	            if (isNullOrUndefined(color)) {
	                return;
	            }
	            var colorType = color.colorType;
	            var brightness = color.Brightness;
	            if (colorType === 3) {
	                var schemeColor = {};
	                schemeColor.val = color.ObjectThemeColor;
	                if (brightness !== 0) {
	                    var percentage = Math_floor(brightness * 100000);
	                    schemeColor.lumMod = [percentage];
	                    var percentage2 = Math_floor((1 - brightness) * 100000);
	                    schemeColor.lumOff = [percentage2];
	                }
	                if (color.TintAndShade > 0 && color.TintAndShade < 1) {
	                    var fixedPercentage = Math_floor(color.TintAndShade * ShapeConstants.ShadeConver);
	                    schemeColor.shade = [fixedPercentage];
	                } 
	               
	               
	               
	                glowEffect.schemeClr = schemeColor;
	            } else if (colorType === 2) {
	                var srgbColor = {};
	                srgbColor.val = [color.RGB.R, color.RGB.G, color.RGB.B];
	                if (brightness !== 0) {
	                    percentage = Math_floor(brightness * 100000);
	                    srgbColor.lumMod = [percentage];
	                    percentage2 = Math_floor((1 - brightness) * 100000);
	                    srgbColor.lumOff = [percentage2];
	                }
	                if (_this.Transparency !== 0) {
	                    fixedPercentage = Math_floor(_this.Transparency * ShapeConstants.PositiveFixedPercentageConvert);
	                    srgbColor.alpha = [fixedPercentage];
	                }
	                glowEffect.srgbClr = srgbColor;
	            }
	        };
	        return GlowFormat;
	    }(StatefullBase));
	    Charts.GlowFormat = GlowFormat;
	
	    module.exports = Charts;
	}());

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(3);
	   
	    var inherit = Common._Types._inherit;
	
	    var Charts = __webpack_require__(9);
	    var StatefullBase = __webpack_require__(11).StatefullBase;
	    var ChartCommon = __webpack_require__(12),
	        ShapeConstants = ChartCommon.ShapeConstants,
	        PositiveFixedPercentageConvert = ShapeConstants.PositiveFixedPercentageConvert,
	        PositiveFixedAngleConvert = ShapeConstants.PositiveFixedAngleConvert,
	        PositionConver = ShapeConstants.PositionConver,
	        ShapeUtility = ChartCommon.ShapeUtility,
	        ChartUtility = ChartCommon.ChartUtility,
	        defineProperty = ChartUtility.defineProperty,
	        UnitHelper = ChartCommon.UnitHelper,
	        isNullOrUndefined = UnitHelper.isNullOrUndefined;
	
	    var ColorFormat = __webpack_require__(15).ColorFormat;
	    var GradientStops = __webpack_require__(18).GradientStops;
	
	    var keyword_null = null, keyword_undefined = void 0, Math_floor = Math.floor;
	
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	    var FillFormat = (function (_super) {
	        inherit(FillFormat, _super);
	
	        function FillFormat(context, parent, autoColorFormat, container) {
	            _super.call(this, parent);
	            var _this = this;
	            _this._gradientScale = true;
	            _this._pathShapeType = 2 ;
	            _this._pattern = 0 ;
	            _this._rotateWithObject = true;
	            _this._visible = true;
	            _this._ooFill = keyword_null;
	            _this._context = context;
	            _this._type = 0 ;
	            _this._parent = parent;
	            _this._autoColorFormat = autoColorFormat;
	            _this._container = container;
	            _this._pictureFormat = new Charts.PictureFormat(1 , parent && parent.PictureFormat);
	            _this._pictureFormat.Container = container;
	            _this._textureHorizontalScale = 1;
	            _this._textureVerticalScale = 1;
	            _this._gradientStops = new GradientStops(_this._context);
	            return _this;
	        }
	
	        var prototype = FillFormat.prototype;
	
	        defineProperty(prototype, "Parent", {
	            get: function () {
	                return this._parent;
	            }
	        });
	        defineProperty(prototype, "PictureFormat", {
	            get: function () {
	                return this._pictureFormat;
	            },
	            set: function (value) {
	                var _this = this;
	                if (!isNullOrUndefined(_this._pictureFormat)) {
	                    _this._pictureFormat.SetParentForChildren(value);
	                }
	                var oldValue = _this._pictureFormat;
	                _this._pictureFormat = value;
	                if (!isNullOrUndefined(oldValue)) {
	                    _this._pictureFormat.ParentStateful = oldValue.ParentStateful;
	                }
	            }
	        });
	        defineProperty(prototype, "PatternColor", {
	            get: function () {
	                return this.PatternColorInternal;
	            }
	        });
	        defineProperty(prototype, "Color", {
	            get: function () {
	                return this.ColorInternal;
	            }
	        });
	        defineProperty(prototype, "GradientAngle", {
	            get: function () {
	                var _this = this;
	                if (!_this.IsDirty(2097152 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.GradientAngle;
	                }
	                if (_this.GradientStyle === 6 ||
	                    _this.GradientStyle === 4) {
	                    throw new Error();
	                }
	                return _this._gradientAngle;
	            },
	            set: function (value) {
	                this._gradientAngle = value;
	                this.Dirty(2097152 );
	            }
	        });
	        defineProperty(prototype, "GradientColorType", {
	            get: function () {
	                return this.GetGradientColorType();
	            }
	        });
	        prototype.GetGradientColorType = function () {
	            var colorStops = [];
	            for (var _i = 0, _a = this._gradientStops.GradientStopList; _i < _a.length; _i++) {
	                var stop = _a[_i];
	                if (!this.FindInColorStops(stop.Color, colorStops)) {
	                    colorStops.push(stop.Color);
	                }
	            }
	            var count = colorStops.length;
	            if (count === 0) {
	                return 0;
	            } else if (count === 1) {
	                return 1;
	            } else if (count === 2) {
	                return 2;
	            } else {   
	                return 4;
	            }
	        };
	        prototype.FindInColorStops = function (color, colorStops) {
	            for (var _i = 0, colorStops_1 = colorStops; _i < colorStops_1.length; _i++) {
	                var item = colorStops_1[_i];
	                var colorType = item.ColorType;
	                if (colorType !== color.ColorType) {
	                    continue;
	                }
	                if (colorType === 3) {
	                    if (item.ObjectThemeColor === color.ObjectThemeColor &&
	                        item.TintAndShade === color.TintAndShade) {
	                        return true;
	                    }
	                } else if (colorType === 2) { 
	                    if (item.RGB.Equals(color.RGB) &&
	                        item.TintAndShade === color.TintAndShade) {
	                        return true;
	                    }
	                }
	            }
	            return false;
	        };
	        defineProperty(prototype, "GradientDegree", {
	            get: function () {
	                var _this = this;
	                if (!_this.IsDirty(1048576 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.GradientDegree;
	                }
	                return _this._gradientDegree;
	            }
	        });
	        prototype._SetGradientDegree = function (value) {
	            this._gradientDegree = value;
	            this.Dirty(1048576 );
	        };
	        defineProperty(prototype, "GradientStops", {
	            get: function () {
	                var _this = this;
	                if (!_this.IsDirty(1 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.GradientStops;
	                }
	                return _this._gradientStops;
	            }
	        });
	        prototype._SetGradientStops = function (value) {
	            this._gradientStops = value;
	            this.Dirty(1 );
	        };
	        defineProperty(prototype, "GradientStyle", {
	            get: function () {
	                var _this = this;
	                if (!_this.IsDirty(2 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.GradientStyle;
	                }
	                return _this._gradientStyle;
	            }
	        });
	        prototype._SetGradientStyle = function (value) {
	            this._gradientStyle = value;
	            this.Dirty(2 );
	        };
	        defineProperty(prototype, "GradientVariant", {
	            get: function () {
	                var _this = this;
	                if (!_this.IsDirty(4194304 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.GradientVariant;
	                }
	                return _this._gradientVariant;
	            }
	        });
	        prototype._SetGradientVariant = function (value) {
	            this._gradientVariant = value;
	            this.Dirty(4194304 );
	        };
	        defineProperty(prototype, "Pattern", {
	            get: function () {
	                var _this = this;
	                if (!_this.IsDirty(8 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Pattern;
	                }
	                return _this._pattern;
	            }
	        });
	        prototype._SetPattern = function (value) {
	            if (value === 0 ) {
	                throw new Error("The specified value is out of range");
	            }
	            var _this = this;
	            if (_this.Pattern === 0 ) {
	                _this._SetType(1 );
	            }
	            _this._pattern = value;
	            _this.Dirty(8 );
	        };
	        defineProperty(prototype, "PresetGradientType", {
	            get: function () {
	                var _this = this;
	                if (!_this.IsDirty(8388608 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.PresetGradientType;
	                }
	                return _this._presetGradientType;
	            }
	        });
	        prototype._SetPresetGradientType = function (value) {
	            this._presetGradientType = value;
	            this.Dirty(8388608 );
	        };
	        defineProperty(prototype, "RotateWithObject", {
	            get: function () {
	                var _this = this;
	                if (!_this.IsDirty(32 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.RotateWithObject;
	                }
	                return _this._rotateWithObject;
	            },
	            set: function (value) {
	                this._rotateWithObject = value;
	                this.Dirty(32 );
	            }
	        });
	        defineProperty(prototype, "TextureAlignment", {
	            get: function () {
	                var _this = this;
	                if (!_this.IsDirty(64 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.TextureAlignment;
	                }
	                return _this._textureAlignment;
	            },
	            set: function (value) {
	                this._textureAlignment = value;
	                this.Dirty(64 );
	            }
	        });
	        defineProperty(prototype, "TextureHorizontalScale", {
	            get: function () {
	                var _this = this;
	                if (!_this.IsDirty(128 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.TextureHorizontalScale;
	                }
	                return _this._textureHorizontalScale;
	            },
	            set: function (value) {
	                this._textureHorizontalScale = value;
	                this.Dirty(128 );
	            }
	        });
	        defineProperty(prototype, "TextureOffsetX", {
	            get: function () {
	                var _this = this;
	                if (!_this.IsDirty(512 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.TextureOffsetX;
	                }
	                return _this._textureOffsetX;
	            },
	            set: function (value) {
	                this._textureOffsetX = value;
	                this.Dirty(512 );
	            }
	        });
	        defineProperty(prototype, "TextureOffsetY", {
	            get: function () {
	                var _this = this;
	                if (!_this.IsDirty(1024 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.TextureOffsetY;
	                }
	                return _this._textureOffsetY;
	            },
	            set: function (value) {
	                this._textureOffsetY = value;
	                this.Dirty(1024 );
	            }
	        });
	        defineProperty(prototype, "TextureVerticalScale", {
	            get: function () {
	                var _this = this;
	                if (!_this.IsDirty(8192 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.TextureVerticalScale;
	                }
	                return _this._textureVerticalScale;
	            },
	            set: function (value) {
	                this._textureVerticalScale = value;
	                this.Dirty(8192 );
	            }
	        });
	        defineProperty(prototype, "Transparency", {
	            get: function () {
	                var _this = this;
	                if (!_this.IsDirty(16384 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Transparency;
	                }
	                return _this.ColorInternal.Transparency;
	            },
	            set: function (value) {
	                this.ColorInternal.Transparency = value;
	                this.Dirty(16384 );
	            }
	        });
	        defineProperty(prototype, "Type", {
	            get: function () {
	                var _this = this;
	                if (!_this.IsDirty(32768 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Type;
	                }
	                return _this._type;
	            }
	        });
	        prototype._SetType = function (value) {
	            this._type = value;
	            this.Dirty(32768 );
	        };
	        defineProperty(prototype, "Visible", {
	            get: function () {
	                var _this = this;
	                if (!_this.IsDirty(65536 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Visible;
	                }
	                return _this._visible;
	            },
	            set: function (value) {
	                this._visible = value;
	                this.Dirty(65536 );
	            }
	        });
	        prototype.InitGradientInfo = function (style, variant, presetType) {
	            if (style === 5) {
	                throw new Error("The specified value is out of range");
	            }
	            var _this = this;
	            _this._SetGradientStyle(style);
	            _this._SetGradientVariant(variant);
	            _this._SetType(2 );
	            _this._SetPresetGradientType(presetType);
	        };
	        prototype.OneColorGradient = function (Style, Variant, Degree) {
	            if (Degree < 0 || Degree > 1) {
	                throw new Error("The specified value is out of range");
	            }
	            var _this = this;
	            _this.InitGradientInfo(Style, Variant, 0);
	            _this._SetGradientDegree(Degree);
	            ShapeUtility.InitGradientStops(_this._context, _this, 1);
	        };
	        prototype.TwoColorGradient = function (Style, Variant) {
	            this.InitGradientInfo(Style, Variant, 0);
	            ShapeUtility.InitGradientStops(this._context, this, 2);
	        };
	        prototype.PresetGradient = function (Style, Variant, PresetGradientType) {
	            this.InitGradientInfo(Style, Variant, PresetGradientType);
	            ShapeUtility.InitGradientStops(this._context, this, 3);
	        };
	        prototype.Patterned = function (Pattern) {
	            this.SetPatternColor();
	            this._SetType(1 );
	            this._SetPattern(Pattern);
	        };
	        prototype.SetPatternColor = function () {
	            var _this = this;
	            _this.Color.ObjectThemeColor = 0;
	            _this.PatternColor.ObjectThemeColor = 4;
	            _this.Color.ClearModel();
	            _this.PatternColor.ClearModel();
	        };
	        prototype.Solid = function () {
	            this._SetType(0 );
	            if (!isNullOrUndefined(this._color)) {
	                this._color.ClearModel();
	            }
	        };
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	        defineProperty(prototype, "ColorInternal", {
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._color)) {
	                    _this._color = new ColorFormat(_this._context, !isNullOrUndefined(_this._parent) ? _this._parent.Color : keyword_null);
	                    _this._color.AutoColorFormat = _this._autoColorFormat;
	                }
	                return _this._color;
	            }
	        });
	        defineProperty(prototype, "PatternColorInternal", {
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._patternColor)) {
	                    _this._patternColor = new ColorFormat(_this._context, !isNullOrUndefined(_this._parent) ? _this._parent.PatternColor : keyword_null);
	                }
	                return _this._patternColor;
	            }
	        });
	        defineProperty(prototype, "PresetTexture", {
	            get: function () {
	                var _this = this;
	                if (!_this.IsDirty(16 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.PresetTexture;
	                }
	                return _this._presetTexture;
	            },
	            set: function (value) {
	                this._presetTexture = value;
	                this.Dirty(16 );
	            }
	        });
	        prototype.ClearColor = function () {
	            this._color = keyword_null;
	        };
	        prototype.GetState = function (prop, includingParent) {
	            var _this = this;
	            if (includingParent === keyword_undefined) { includingParent = false; }
	            if (prop === 131072  && !isNullOrUndefined(_this._color)) {
	                return _this._color.IsDirtyIncludingParent(includingParent);
	            }
	            if (prop === 262144  && !isNullOrUndefined(_this._patternColor)) {
	                return _this._patternColor.IsDirtyIncludingParent(includingParent);
	            }
	            return _super.prototype.GetState.call(_this, prop, includingParent);
	        };
	        prototype.IsDirtyIncludingParent = function (includingParent) {
	            var _this = this;
	            if (includingParent === keyword_undefined) { includingParent = false; }
	            if (!isNullOrUndefined(_this._patternColor) && _this._patternColor.IsDirtyIncludingParent()) {
	                return true;
	            }
	            if (!isNullOrUndefined(_this._color) && _this._color.IsDirtyIncludingParent()) {
	                return true;
	            }
	            if (!isNullOrUndefined(_this._gradientStops) && _this._gradientStops.Count > 0) {
	                return true;
	            }
	            if (!isNullOrUndefined(_this._pictureFormat) && _this._pictureFormat.IsDirtyIncludingParent()) {
	                return true;
	            }
	            return _super.prototype.IsDirtyIncludingParent.call(_this, includingParent);
	        };
	        prototype.OnParentChanged = function (newParent) {
	            var _this = this;
	            _this._parent = newParent;
	            if (!isNullOrUndefined(_this._parent)) {
	                if (!isNullOrUndefined(_this._color)) {
	                    _this._color.ParentStateful = _this._parent.Color;
	                }
	                if (!isNullOrUndefined(_this._patternColor)) {
	                    _this._patternColor.ParentStateful = _this._parent.PatternColor;
	                }
	            } else {
	                if (!isNullOrUndefined(_this._color)) {
	                    _this._color.ParentStateful = keyword_null;
	                }
	                if (!isNullOrUndefined(_this._patternColor)) {
	                    _this._patternColor.ParentStateful = keyword_null;
	                }
	            }
	        };
	        prototype.FromOOModel = function (t , colorFillType) {
	            if (isNullOrUndefined(colorFillType)) {
	                throw new Error("colorFillType not provided!");
	            }
	            var _this = this;
	            _this._ooFill = t;
	            if (colorFillType === 0 ) {
	                _this.ColorInternal.FromOOModel(_this._ooFill);
	                _this._type = 0 ;
	                _this.SetState(32768 , true);
	            } else if (colorFillType === 1 ) {
	                _this.FromCT_PatternFillProperties(t);
	                _this._type = 1 ;
	                _this.SetState(32768 , true);
	            } else if (colorFillType === 2 ) {
	                _this.FromCT_GradientFillProperties(t);
	                _this._type = 2 ;
	                _this.SetState(32768 , true);
	            } else if (colorFillType === 3 ) {
	                _this._pictureFormat.FromOOModel(t);
	                _this._type = 5 ;
	                _this.SetState(32768 , true);
	            } else if (colorFillType === 4 ) {
	                _this._type = 6 ;
	                _this.SetState(32768 , true);
	            } else if (colorFillType === 5 ) {
	                _this._type = 0 ;
	                _this.SetState(32768 , true);
	            }
	        };
	        prototype.ToOOModel = function () {
	           
	           
	           
	           
	            var fill;
	            if (this.Visible) {
	                switch (this.Type) {
	                    case 0 :
	                        fill = this.ToCT_SolidColorFillProperties();
	                        break;
	                    case 1 :
	                        fill = this.ToCT_PatternFillProperties();
	                        break;
	                    case 2 :
	                        fill = this.ToCT_GradientFillProperties();
	                        break;
	                    case 3 :
	                        fill = this.ToCT_TileFillProperties();
	                        break;
	                    case 4 :
	                        break;
	                    case 5 :
	                        fill = this.ToCT_PictureFillProperties();
	                        break;
	                    case 6 :
	                        fill = {
	                            colorFillType: 4 
	                        };
	                        break;
	                    default:
	                        break;
	                }
	            } else {
	                fill = {
	                    colorFillType: 5 
	                };
	            }
	            return fill;
	        };
	        prototype.FromCT_PatternFillProperties = function (t ) {
	            this._SetPattern(t.prst);
	            this.ColorInternal.FromOOModel(t.bgClr);
	            this.PatternColorInternal.FromOOModel(t.fgClr);
	        };
	        prototype.ToCT_PatternFillProperties = function () {
	            var _this = this;
	            if (_this._context.DrawingType === 4 ) {
	                return keyword_null;
	            }
	            var patternFill = {
	                colorFillType: 1 
	            };
	            patternFill.prst = _this.Pattern;
	            if (_this.PatternColorInternal.ColorType !== 0) {
	                patternFill.fgClr = _this.PatternColorInternal.Color_ToOOModel();
	            }
	            if (_this.Color.ColorType !== 0) {
	                patternFill.bgClr = _this.Color.Color_ToOOModel();
	            }
	            return patternFill;
	        };
	        prototype.FromCT_GradientFillProperties = function (gradientFill ) {
	            var _this = this;
	            _this._SetGradientStops(new GradientStops(_this._context));
	            _this._gradientStops.FromOOModel(gradientFill.gsLst);
	            _this.RotateWithObject = gradientFill.rotWithShape;
	            if (!isNullOrUndefined(gradientFill.path)) {
	                _this.FromCT_PathShadeProperties(gradientFill.path);
	            } else if (!isNullOrUndefined(gradientFill.lin)) {
	                _this.FromCT_LinearShadeProperties(gradientFill.lin);
	                _this.FromTitleCT_RelativeRect(gradientFill.tileRect);
	            }
	        };
	        prototype.ToCT_GradientFillProperties = function () {
	            var _this = this;
	            var gradientFill = {
	                colorFillType: 2 
	            };
	            gradientFill.rotWithShape = _this.RotateWithObject;
	            if (!isNullOrUndefined(_this.GradientStops) && _this.GradientStops.Count > 0) {
	                gradientFill.gsLst = _this.GradientStops.ToOOModel();
	            }
	            if (_this.GradientStyle === 6 ||
	                _this.GradientStyle === 4) {
	                gradientFill.path = _this.ToCT_PathShadeProperties();
	            } else {
	                gradientFill.lin = _this.ToCT_LinearShadeProperties();
	            }
	            gradientFill.tileRect = _this.ToTitleCT_RelativeRect();
	            return gradientFill;
	        };
	        prototype.ToCT_PictureFillProperties = function () {
	           
	           
	           
	            return this._pictureFormat.ToOOModel();
	        };
	        prototype.FromTitleCT_RelativeRect = function (tileRect ) {
	            var _this = this;
	            if (isNullOrUndefined(tileRect)) {
	                return;
	            }
	            if (tileRect.l === -PositiveFixedPercentageConvert &&
	                tileRect.t === -PositiveFixedPercentageConvert) {
	                _this._SetGradientVariant(1);
	            } else if (tileRect.t === -PositiveFixedPercentageConvert &&
	                tileRect.r === -PositiveFixedPercentageConvert) {
	                _this._SetGradientVariant(2);
	            } else if (tileRect.l === -PositiveFixedPercentageConvert &&
	                tileRect.b === -PositiveFixedPercentageConvert) {
	                _this._SetGradientVariant(3);
	            } else if (tileRect.r === -PositiveFixedPercentageConvert &&
	                tileRect.b === -PositiveFixedPercentageConvert) {
	                _this._SetGradientVariant(4);
	            }
	        };
	        prototype.ToTitleCT_RelativeRect = function () {
	            var relativeRect = { l: 0, r: 0, t: 0, b: 0 };
	            var gradientVariant = this.GradientVariant;
	            if (this.GradientStyle === 4) {
	                if (gradientVariant === 1) {
	                    relativeRect.l = -PositiveFixedPercentageConvert;
	                    relativeRect.t = -PositiveFixedPercentageConvert;
	                } else if (gradientVariant === 2) {
	                    relativeRect.t = -PositiveFixedPercentageConvert;
	                    relativeRect.r = -PositiveFixedPercentageConvert;
	                } else if (gradientVariant === 3) {
	                    relativeRect.l = -PositiveFixedPercentageConvert;
	                    relativeRect.b = -PositiveFixedPercentageConvert;
	                } else if (gradientVariant === 4) {
	                    relativeRect.r = -PositiveFixedPercentageConvert;
	                    relativeRect.b = -PositiveFixedPercentageConvert;
	                }
	            }
	            return relativeRect;
	        };
	        prototype.FromCT_LinearShadeProperties = function (lin ) {
	            this.GradientAngle = lin.ang / PositiveFixedAngleConvert;
	            this._isLinearShade = true; 
	            this._gradientScale = lin.scaled;
	        };
	        prototype.ToCT_LinearShadeProperties = function () {
	            return {     
	                ang: Math_floor(this.GradientAngle * PositiveFixedAngleConvert),
	                scaled: this._gradientScale
	            };
	        };
	        prototype.FromCT_PathShadeProperties = function (path ) {
	            if (isNullOrUndefined(path)) {
	                return;
	            }
	            this._pathShapeType = path.path;
	            this.FromCT_RelativeRect(path.fillToRect);
	        };
	        prototype.ToCT_PathShadeProperties = function () {
	            return { 
	                path: this._pathShapeType,
	                fillToRect: this.ToCT_RelativeRect()
	            };
	        };
	        prototype.FromCT_RelativeRect = function (fillToRect ) {
	            if (isNullOrUndefined(fillToRect)) {
	                return;
	            }
	            var half = PositiveFixedPercentageConvert * 0.5;
	            var _this = this;
	            if (fillToRect.l === half &&
	                fillToRect.t === half &&
	                fillToRect.r === half &&
	                fillToRect.b === half) {
	                _this._SetGradientStyle(6);
	            } else if (fillToRect.r === PositiveFixedPercentageConvert &&
	                fillToRect.b === PositiveFixedPercentageConvert) {
	                _this._SetGradientStyle(4);
	                _this._SetGradientVariant(1);
	            } else if (fillToRect.l === PositiveFixedPercentageConvert &&
	                fillToRect.b === PositiveFixedPercentageConvert) {
	                _this._SetGradientStyle(4);
	                _this._SetGradientVariant(2);
	            } else if (fillToRect.r === PositiveFixedPercentageConvert &&
	                fillToRect.t === PositiveFixedPercentageConvert) {
	                _this._SetGradientStyle(4);
	                _this._SetGradientVariant(3);
	            } else if (fillToRect.l === PositiveFixedPercentageConvert &&
	                fillToRect.t === PositiveFixedPercentageConvert) {
	                _this._SetGradientStyle(4);
	                _this._SetGradientVariant(4);
	            }
	        };
	        prototype.ToCT_RelativeRect = function () {
	            var relativeRect = { l: 0, r: 0, t: 0, b: 0 };
	            var half = PositiveFixedPercentageConvert * 0.5;
	            if (this.GradientStyle === 6) {
	                relativeRect.l = half;
	                relativeRect.t = half;
	                relativeRect.r = half;
	                relativeRect.b = half;
	            } else if (this.GradientStyle === 4) {
	                var gradientVariant = this.GradientVariant;
	                if (gradientVariant === 1) {
	                    relativeRect.r = PositiveFixedPercentageConvert;
	                    relativeRect.b = PositiveFixedPercentageConvert;
	                } else if (gradientVariant === 2) {
	                    relativeRect.l = PositiveFixedPercentageConvert;
	                    relativeRect.b = PositiveFixedPercentageConvert;
	                } else if (gradientVariant === 3) {
	                    relativeRect.t = PositiveFixedPercentageConvert;
	                    relativeRect.r = PositiveFixedPercentageConvert;
	                } else if (gradientVariant === 4) {
	                    relativeRect.l = PositiveFixedPercentageConvert;
	                    relativeRect.t = PositiveFixedPercentageConvert;
	                }
	            }
	            return relativeRect;
	        };
	        prototype.ToCT_SolidColorFillProperties = function () {
	            return this.ColorInternal.ToOOModel();
	        };
	        prototype.ToCT_TileFillProperties = function () {
	            var blipFill = this._pictureFormat.ToOOModel();
	            blipFill.tile = this.ToCT_TileInfoProperties();
	            return blipFill;
	        };
	        prototype.ToCT_TileInfoProperties = function () {
	            var _this = this;
	            return { 
	                algn: _this.TextureAlignment,
	                tx: _this.TextureOffsetX,
	                ty: _this.TextureOffsetY,
	                sx: Math_floor(_this.TextureHorizontalScale * PositionConver),
	                sy: Math_floor(_this.TextureVerticalScale * PositionConver)
	            };
	        };
	        prototype.Clone = function () {
	            var _this = this;
	            var format = new FillFormat(_this._context, _this._parent, _this._autoColorFormat, _this._container);
	            if (!isNullOrUndefined(_this._patternColor)) {
	                format._patternColor = _this._patternColor.Clone();
	            }
	            if (!isNullOrUndefined(_this._color)) {
	                format._color = _this._color.Clone();
	            }
	            format._gradientDegree = _this._gradientDegree;
	            format._gradientScale = _this._gradientScale;
	            format._gradientStops = _this._gradientStops;
	            format._gradientVariant = _this._gradientVariant;
	            format._pattern = _this._pattern;
	            format._presetGradientType = _this._presetGradientType;
	            format._presetTexture = _this._presetTexture;
	            format._textureName = _this._textureName;
	            format._textureType = _this._textureType;
	            format._type = _this._type;
	            format._gradientAngle = _this._gradientAngle;
	            format._rotateWithObject = _this._rotateWithObject;
	            format._textureAlignment = _this._textureAlignment;
	            format._textureHorizontalScale = _this._textureHorizontalScale;
	            format._textureOffsetX = _this._textureOffsetX;
	            format._textureOffsetY = _this._textureOffsetY;
	            format._textureTile = _this._textureTile;
	            format._textureVerticalScale = _this._textureVerticalScale;
	            format._transparency = _this._transparency;
	            format._visible = _this._visible;
	            format._states = _this._states;
	            format._parent = _this._parent;
	            return format;
	        };
	
	        return FillFormat;
	
	    }(StatefullBase));
	
	    Charts.FillFormat = FillFormat;
	
	    module.exports = Charts;
	}());

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	    var Charts = __webpack_require__(9);
	
	    var ChartCommon = __webpack_require__(12),
	        defineProperty = ChartCommon.ChartUtility.defineProperty,
	        PositionConver = ChartCommon.ShapeConstants.PositionConver;
	
	    var ARGBColor = __webpack_require__(13).ARGBColor;
	    var ColorFormat = __webpack_require__(15).ColorFormat;
	    var keyword_undefined = void 0;
	
	    var GradientStop
	        = (function () {
	            function GradientStop(drawingContext) {
	                this._drawingContexxt = drawingContext;
	                this._color = new ColorFormat(this._drawingContexxt);
	            }
	            var prototype = GradientStop.prototype;
	
	            defineProperty(prototype, "Color", {
	                get: function () {
	                    return this._color;
	                },
	                set: function (value) {
	                    this._color = value;
	                }
	            });
	            defineProperty(prototype, "Position", {
	                get: function () {
	                    return this._position;
	                },
	                set: function (value) {
	                    this._position = value;
	                }
	            });
	            defineProperty(prototype, "Transparency", {
	                get: function () {
	                    return this._color.Transparency;
	                },
	                set: function (value) {
	                    this._color.Transparency = value;
	                }
	            });
	            prototype.FromOOModel = function (t ) {
	                this.Position = t.pos / PositionConver;
	                this._color.FromOOModel(t);
	            };
	            prototype.ToOOModel = function () {
	                var gradientStop = this._color.ToOOModel();
	                gradientStop.pos = Math.round(this.Position * PositionConver);
	                return gradientStop;
	            };
	            return GradientStop;
	        }());
	    Charts.GradientStop = GradientStop;
	
	    var GradientStops = (function () {
	        function GradientStops(drawingStyleContext) {
	            this._drawingStyleContext = drawingStyleContext;
	            this._gradientStopList = [];
	        }
	        var prototype = GradientStops.prototype;
	
	        prototype.Item = function (index) {
	            return this._gradientStopList[index];
	        };
	        defineProperty(prototype, "Count", {
	            get: function () {
	                return this._gradientStopList.length;
	            }
	        });
	        defineProperty(prototype, "GradientStopList", {
	            get: function () {
	                return this._gradientStopList;
	            }
	        });
	        prototype.Delete = function (index) {
	            if (index === -1) {
	                index = this.Count - 1;
	            }
	            this._gradientStopList.splice(index, 1);
	        };
	        prototype.Insert = function (RGB, Position, Transparency, Index, Brightness) {
	            if (Transparency === keyword_undefined) { Transparency = 0; }
	            if (Index === keyword_undefined) { Index = -1; }
	            if (Brightness === keyword_undefined) { Brightness = 0; }
	            var stop = new GradientStop(this._drawingStyleContext);
	            stop.Color.RGB = ARGBColor.FromArgb(RGB);
	            stop.Position = Position;
	            stop.Transparency = Transparency;
	            stop.Color.Brightness = Brightness;
	            if (Index < 0) {
	                this._gradientStopList.push(stop);
	            } else {
	                this._gradientStopList.splice(Index, 0, stop);
	            }
	        };
	        prototype.FromOOModel = function (t ) {
	            for (var _i = 0, _a = t.gs; _i < _a.length; _i++) {
	                var item = _a[_i];
	                var stop = new GradientStop(this._drawingStyleContext);
	                stop.FromOOModel(item);
	                this.GradientStopList.push(stop);
	            }
	        };
	        prototype.ToOOModel = function () {
	            var gradientStops = { gs: [] } ;
	            for (var _i = 0, _a = this._gradientStopList; _i < _a.length; _i++) {
	                var item = _a[_i];
	                gradientStops.gs.push(item.ToOOModel());
	            }
	            return gradientStops;
	        };
	        return GradientStops;
	    }());
	    Charts.GradientStops = GradientStops;
	    module.exports = Charts;
	}());

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Charts = __webpack_require__(9);
	    var ChartCommon = __webpack_require__(12),
	        isNullOrUndefined = ChartCommon.UnitHelper.isNullOrUndefined;
	
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	
	   
	   
	   
	    Charts.UnderlineType = {
	       
	       
	       
	        None: 0,
	       
	       
	       
	        Single: 1,
	       
	       
	       
	        Double: 2,
	       
	       
	       
	        SingleAccounting: 3,
	       
	       
	       
	        DoubleAccounting: 4
	    };
	
	   
	   
	   
	   
	   
	    
	    var FontData = (function () {
	        function FontData() {
	            var _this = this;
	            _this.Flag = 0 ;
	            _this.Size = 0;
	            _this.Family = 0;
	            _this.CharSet = 0;
	            _this.Scheme = 0 ;
	            _this.Underline = 0 ;
	            _this.VertAlign = 0 ;
	        }
	       
	       
	        var prototype = FontData.prototype;
	        prototype.Equals = function (other) {
	            if (isNullOrUndefined(other)) {
	                return false;
	            }
	            var _this = this;
	            return _this.Size === other.Size && _this.Color.Equals(other.Color) && _this.Name === other.Name && _this.Family === other.Family
	                && _this.CharSet === other.CharSet && _this.Scheme === other.Scheme && _this.Bold === other.Bold && _this.Italic === other.Italic && _this.Underline === other.Underline
	                && _this.Strike === other.Strike && _this.VertAlign === other.VertAlign && _this.Shadow === other.Shadow && _this.Outline === other.Outline
	                && _this.Condense === other.Condense && _this.Extend === other.Extend && _this.NotUsed === other.NotUsed;
	        };
	        prototype.Clone = function () {
	            var fData = new FontData();
	            var _this = this;
	            fData.Color = _this.Color;
	            fData.Size = _this.Size;
	            fData.Name = _this.Name;
	            fData.Family = _this.Family;
	            fData.CharSet = _this.CharSet;
	            fData.Scheme = _this.Scheme;
	            fData.Bold = _this.Bold;
	            fData.Italic = _this.Italic;
	            fData.Underline = _this.Underline;
	            fData.Strike = _this.Strike;
	            fData.VertAlign = _this.VertAlign;
	            fData.Shadow = _this.Shadow;
	            fData.Outline = _this.Outline;
	            fData.Condense = _this.Condense;
	            fData.Extend = _this.Extend;
	            fData.Flag = _this.Flag;
	            fData.NotUsed = _this.NotUsed;
	            return fData;
	        };
	        prototype.UpdateDefaultValueFlag = function () {
	            var _this = this;
	            var flag = 0 ;
	            _this.Color.UpdateDefaultValueFlag();
	            if (_this.Color.Flag !== 0) {
	                flag |= 1 ;
	            }
	            if (_this.Size !== 0) {
	                flag |= 2 ;
	            }
	            if (!isNullOrUndefined(_this.Name)) {
	                flag |= 4 ;
	            }
	            if (_this.Family !== 0) {
	                flag |= 8 ;
	            }
	            if (_this.CharSet !== 0) {
	                flag |= 16 ;
	            }
	            if (_this.Scheme !== 0 ) {
	                flag |= 32 ;
	            }
	            if (_this.Bold) {
	                flag |= 64 ;
	            }
	            if (_this.Italic) {
	                flag |= 128 ;
	            }
	            if (_this.Underline !== 0 ) {
	                flag |= 256 ;
	            }
	            if (_this.Strike) {
	                flag |= 512 ;
	            }
	            if (_this.VertAlign !== 0 ) {
	                flag |= 1024 ;
	            }
	            if (_this.Shadow) {
	                flag |= 2048 ;
	            }
	            if (_this.Outline) {
	                flag |= 4096 ;
	            }
	            if (_this.Condense) {
	                flag |= 8192 ;
	            }
	            if (_this.Extend) {
	                flag |= 16384 ;
	            }
	            _this.Flag = flag;
	        };
	        prototype.UpdateFlagFromBottom = function () {
	            var _this = this;
	            _this.Color.UpdateFlagFromBottom();
	            if (_this.Color.Flag === 0) {
	                _this.Flag &= ~1 ;
	            } else {
	                _this.Flag |= 1 ;
	            }
	        };
	        prototype.UpdateDefaultValueFlagForDxf = function () {
	            var _this = this, flag = _this.Flag;
	            var temp = 0 ;
	            if ((flag & 64 ) === 64 ) {
	                temp |= 64 ;
	            }
	            if ((flag & 128 ) === 128 ) {
	                temp |= 128 ;
	            }
	            _this.Color.UpdateDefaultValueFlag();
	            if (_this.Color.Flag !== 0) {
	                temp |= 1 ;
	            }
	            if (_this.Size !== 0) {
	                temp |= 2 ;
	            }
	            if (!isNullOrUndefined(_this.Name)) {
	                temp |= 4 ;
	            }
	            if (_this.Family !== 0) {
	                temp |= 8 ;
	            }
	            if (_this.CharSet !== 0) {
	                temp |= 16 ;
	            }
	            if (_this.Scheme !== 0 ) {
	                temp |= 32 ;
	            }
	            if (_this.Underline !== 0 ) {
	                temp |= 256 ;
	            }
	            if (_this.Strike) {
	                temp |= 512 ;
	            }
	            if (_this.VertAlign !== 0 ) {
	                temp |= 1024 ;
	            }
	            if (_this.Shadow) {
	                temp |= 2048 ;
	            }
	            if (_this.Outline) {
	                temp |= 4096 ;
	            }
	            if (_this.Condense) {
	                temp |= 8192 ;
	            }
	            if (_this.Extend) {
	                temp |= 16384 ;
	            }
	            _this.Flag = temp;
	        };
	        prototype.Compose = function (other, conflictCompose) {
	            if (conflictCompose === void 0) { conflictCompose = true; }
	            if (other.Flag === 0 ) {
	                return;
	            }
	            if (conflictCompose) {
	                this.ConflictCompose(other);
	            } else {
	                this.NonConflictCompose(other);
	            }
	        };
	        prototype.ConflictCompose = function (other) {
	            var _this = this;
	            var flag = other.Flag;
	            if ((flag & 1 ) === 1 ) {
	                _this.Color.Compose(other.Color);
	            }
	            if ((flag & 2 ) === 2 ) {
	                _this.Size = other.Size;
	            }
	            if ((flag & 4 ) === 4 ) {
	                _this.Name = other.Name;
	            }
	            if ((flag & 8 ) === 8 ) {
	                _this.Family = other.Family;
	            }
	            if ((flag & 16 ) === 16 ) {
	                _this.CharSet = other.CharSet;
	            }
	            if ((flag & 32 ) === 32 ) {
	                _this.Scheme = other.Scheme;
	            } else if ((flag & 4 ) === 4 ) {
	                _this.Scheme = 0 ;
	                flag &= ~32 ;
	            }
	            if ((flag & 64 ) === 64 ) {
	                _this.Bold = other.Bold;
	            }
	            if ((flag & 128 ) === 128 ) {
	                _this.Italic = other.Italic;
	            }
	            if ((flag & 256 ) === 256 ) {
	                _this.Underline = other.Underline;
	            }
	            if ((flag & 512 ) === 512 ) {
	                _this.Strike = other.Strike;
	            }
	            if ((flag & 1024 ) === 1024 ) {
	                _this.VertAlign = other.VertAlign;
	            }
	            if ((flag & 2048 ) === 2048 ) {
	                _this.Shadow = other.Shadow;
	            }
	            if ((flag & 4096 ) === 4096 ) {
	                _this.Outline = other.Outline;
	            }
	            if ((flag & 8192 ) === 8192 ) {
	                _this.Condense = other.Condense;
	            }
	            if ((flag & 16384 ) === 16384 ) {
	                _this.Extend = other.Extend;
	            }
	            _this.Flag |= flag;
	        };
	        prototype.NonConflictCompose = function (other) {
	            var _this = this;
	            var flag = _this.Flag;
	            _this.Color.Compose(other.Color, false);
	            if ((flag & 2 ) !== 2 ) {
	                _this.Size = other.Size;
	            }
	            if ((flag & 4 ) !== 4 ) {
	                _this.Name = other.Name;
	            }
	            if ((flag & 8 ) !== 8 ) {
	                _this.Family = other.Family;
	            }
	            if ((flag & 16 ) !== 16 ) {
	                _this.CharSet = other.CharSet;
	            }
	            if ((flag & 32 ) !== 32 ) {
	                _this.Scheme = other.Scheme;
	            }
	            if ((flag & 64 ) !== 64 ) {
	                _this.Bold = other.Bold;
	            }
	            if ((flag & 128 ) !== 128 ) {
	                _this.Italic = other.Italic;
	            }
	            if ((flag & 256 ) !== 256 ) {
	                _this.Underline = other.Underline;
	            }
	            if ((flag & 512 ) !== 512 ) {
	                _this.Strike = other.Strike;
	            }
	            if ((flag & 1024 ) !== 1024 ) {
	                _this.VertAlign = other.VertAlign;
	            }
	            if ((flag & 2048 ) !== 2048 ) {
	                _this.Shadow = other.Shadow;
	            }
	            if ((flag & 4096 ) !== 4096 ) {
	                _this.Outline = other.Outline;
	            }
	            if ((flag & 8192 ) !== 8192 ) {
	                _this.Condense = other.Condense;
	            }
	            if ((flag & 16384 ) !== 16384 ) {
	                _this.Extend = other.Extend;
	            }
	            _this.Flag |= other.Flag;
	        };
	        prototype.RemoveDuplicateStyle = function (other) {
	            return this.Compare(other, false);
	        };
	        prototype.RemoveDifferentStyle = function (other) {
	            return this.Compare(other, true);
	        };
	       
	       
	       
	       
	       
	       
	       
	       
	        prototype.Compare = function (other, removeDifferent) {
	            var _this = this;
	            var flag = _this.Flag, otherFlag = other.Flag, flags = [];
	            var isChanged = false;
	            var isDiff, shouldRemove;
	            if ((flag & 1 ) === 1 ) {
	                isDiff = (otherFlag & 1 ) !== 1 ;
	                if (!isDiff) {
	                    if (removeDifferent) {
	                        isChanged = _this.Color.RemoveDifferentStyle(other.Color);
	                        isDiff = _this.Color.Flag === 0;
	                    } else {
	                        isChanged = _this.Color.RemoveDuplicateStyle(other.Color);
	                        isDiff = _this.Color.Flag !== 0;
	                    }
	                }
	                shouldRemove = removeDifferent ? isDiff : !isDiff;
	                if (shouldRemove) {
	                    flags.push(1 );
	                }
	            }
	            if ((flag & 2 ) === 2 ) {
	                isDiff = (otherFlag & 2 ) !== 2  || _this.Size !== other.Size;
	                shouldRemove = removeDifferent ? isDiff : !isDiff;
	                if (shouldRemove) {
	                    flags.push(2 );
	                }
	            }
	            if ((flag & 4 ) === 4 ) {
	                isDiff = (otherFlag & 4 ) !== 4  || _this.Name !== other.Name;
	                shouldRemove = removeDifferent ? isDiff : !isDiff;
	                if (shouldRemove) {
	                    flags.push(4 );
	                }
	            }
	            if ((flag & 8 ) === 8 ) {
	                isDiff = (otherFlag & 8 ) !== 8  || _this.Family !== other.Family;
	                shouldRemove = removeDifferent ? isDiff : !isDiff;
	                if (shouldRemove) {
	                    flags.push(8 );
	                }
	            }
	            if ((flag & 16 ) === 16 ) {
	                isDiff = (otherFlag & 16 ) !== 16  || _this.CharSet !== other.CharSet;
	                shouldRemove = removeDifferent ? isDiff : !isDiff;
	                if (shouldRemove) {
	                    flags.push(16 );
	                }
	            }
	            if ((flag & 32 ) === 32 ) {
	                isDiff = (otherFlag & 32 ) !== 32  || _this.Scheme !== other.Scheme;
	                shouldRemove = removeDifferent ? isDiff : !isDiff;
	                if (shouldRemove) {
	                    flags.push(32 );
	                }
	            }
	            if ((flag & 64 ) === 64 ) {
	                isDiff = (otherFlag & 64 ) !== 64  || _this.Bold !== other.Bold;
	                shouldRemove = removeDifferent ? isDiff : !isDiff;
	                if (shouldRemove) {
	                    flags.push(64 );
	                }
	            }
	            if ((flag & 128 ) === 128 ) {
	                isDiff = (otherFlag & 128 ) !== 128  || _this.Italic !== other.Italic;
	                shouldRemove = removeDifferent ? isDiff : !isDiff;
	                if (shouldRemove) {
	                    flags.push(128 );
	                }
	            }
	            if ((flag & 256 ) === 256 ) {
	                isDiff = (otherFlag & 256 ) !== 256  || _this.Underline !== other.Underline;
	                shouldRemove = removeDifferent ? isDiff : !isDiff;
	                if (shouldRemove) {
	                    flags.push(256 );
	                }
	            }
	            if ((flag & 512 ) === 512 ) {
	                isDiff = (otherFlag & 512 ) !== 512  || _this.Strike !== other.Strike;
	                shouldRemove = removeDifferent ? isDiff : !isDiff;
	                if (shouldRemove) {
	                    flags.push(512 );
	                }
	            }
	            if ((flag & 1024 ) === 1024 ) {
	                isDiff = (otherFlag & 1024 ) !== 1024  || _this.VertAlign !== other.VertAlign;
	                shouldRemove = removeDifferent ? isDiff : !isDiff;
	                if (shouldRemove) {
	                    flags.push(1024 );
	                }
	            }
	            if ((flag & 2048 ) === 2048 ) {
	                isDiff = (otherFlag & 2048 ) !== 2048  || _this.Shadow !== other.Shadow;
	                shouldRemove = removeDifferent ? isDiff : !isDiff;
	                if (shouldRemove) {
	                    flags.push(~2048 );
	                }
	            }
	            if ((flag & 4096 ) === 4096 ) {
	                isDiff = (otherFlag & 4096 ) !== 4096  || _this.Outline !== other.Outline;
	                shouldRemove = removeDifferent ? isDiff : !isDiff;
	                if (shouldRemove) {
	                    flags.push(4096 );
	                }
	            }
	            if ((flag & 8192 ) === 8192 ) {
	                isDiff = (otherFlag & 8192 ) !== 8192  || _this.Condense !== other.Condense;
	                shouldRemove = removeDifferent ? isDiff : !isDiff;
	                if (shouldRemove) {
	                    flags.push(8192 );
	                }
	            }
	            if ((flag & 16384 ) === 16384 ) {
	                isDiff = (otherFlag & 16384 ) !== 16384  || _this.Extend !== other.Extend;
	                shouldRemove = removeDifferent ? isDiff : !isDiff;
	                if (shouldRemove) {
	                    flags.push(16384 );
	                }
	            }
	            var count = flags.length;
	            if (count > 0) {
	                isChanged = true;
	                for(var i = 0; i < count; i++) {
	                    flag &= ~flags[i];
	                }
	            }
	            _this.Flag = flag;
	            return isChanged;
	        };
	       
	        prototype.ClearFlag = function () {
	            this.Color.ClearFlag();
	            this.Flag = 0 ;
	        };
	        prototype.SetFullFlag = function () {
	            this.Color.SetFullFlag();
	            this.Flag = 32767 ;
	        };
	        prototype.IsFullFlag = function () {
	            if (this.Flag !== 32767 ) {
	                return false;
	            }
	            if (!this.Color.IsFullFlag()) {
	                return false;
	            }
	            return true;
	        };
	        return FontData;
	    }());
	    Charts.FontData = FontData;
	
	    module.exports = Charts;
	}());

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(3);
	    var Types = Common._Types;
	    var inherit = Types._inherit, isEmptyObject = Types._isEmptyObject;
	
	    var Charts = __webpack_require__(9);
	    var StatefullBase = __webpack_require__(11).StatefullBase;
	    var ChartCommon = __webpack_require__(12),
	        ChartUtility = ChartCommon.ChartUtility,
	        defineProperty = ChartUtility.defineProperty,
	        deleteFillItems = ChartUtility._deleteFillItems,
	        ChartConstants = ChartCommon.ChartConstants,
	        UnitHelper = ChartCommon.UnitHelper,
	        isNullOrUndefined = UnitHelper.isNullOrUndefined;
	
	    var FillFormat = __webpack_require__(17).FillFormat;
	    var FontData = __webpack_require__(19).FontData;
	
	    var keyword_null = null, keyword_undefined = void 0;
	
	    var ReferenceText = (function () {
	        function ReferenceText(drawing) {
	            this._drawing = drawing;
	        }
	
	        var ReferenceText_prototype = ReferenceText.prototype;
	        defineProperty(ReferenceText_prototype, "Formula", {
	            get: function () {
	                return this.GetFormula(false);
	            },
	            set: function (value) {
	                if (value !== this.Formula) {
	                    this.UpdateTextByFormulas(value);
	                }
	            }
	        });
	        defineProperty(ReferenceText_prototype, "FormulaR1C1", {
	            get: function () {
	                return this.GetFormula(true);
	            },
	            set: function (value) {
	                if (value !== this.Formula) {
	                    this.UpdateTextByFormulas(value, true);
	                }
	            }
	        });
	        defineProperty(ReferenceText_prototype, "Parent", {
	            get: function () {
	                return this._drawing;
	            }
	        });
	        defineProperty(ReferenceText_prototype, "ReferingText", {
	            get: function () {
	                return this.GetReferingText();
	            }
	        });
	        defineProperty(ReferenceText_prototype, "Worksheet", {
	            get: function () {
	                return this._drawing.sheet();
	            }
	        });
	        defineProperty(ReferenceText_prototype, "TextRefer", {
	            get: function () {
	                return this._textRefer;
	            },
	            set: function (value) {
	                this.SetTextRefer(value);
	            }
	        });
	        ReferenceText_prototype.SetTextRefer = function (value, updateFF) {
	            if (updateFF === keyword_undefined) {
	                updateFF = true;
	            }
	            this.SetTextReferInternal(value, updateFF);
	            this.OnSetTextRefer(value);
	        };
	        ReferenceText_prototype.OnSetTextRefer = function (value) {//eslint-disable-line
	        };
	        ReferenceText_prototype.GetReferingText = function () {
	            var text = "";
	            if (!isNullOrUndefined(this._textRefer)) {
	                var txtList = this.GetTextList(this._textRefer);
	                for (var _i = 0, txtList_1 = txtList; _i < txtList_1.length; _i++) {
	                    text += txtList_1[_i];
	                }
	            }
	            return text;
	        };
	        ReferenceText_prototype.GetTextList = function (range) {
	            var textList = [], worksheet = this.Worksheet;
	            if (isNullOrUndefined(range.WorksheetName)) {
	                range.WorksheetName = worksheet.name();
	            }
	            var sheet = worksheet._GetSheet(range.WorksheetName);
	            for (var row = range.Row; row <= range.LastRow; row++) {
	                for (var col = range.Column; col <= range.LastColumn; col++) {
	                    var txt = sheet._GetRange(row, col).Text;
	                    textList.push(!isNullOrUndefined(txt) ? txt : "");
	                }
	            }
	            return textList;
	        };
	        ReferenceText_prototype.SetTextReferInternal = function (refer, updateFF) {
	            this._textRefer = refer;
	        };
	        ReferenceText_prototype.GetFormula = function (r1c1) {
	            if (r1c1 === keyword_undefined) {
	                r1c1 = false;
	            }
	            var textRefer = this._textRefer;
	            if (!textRefer) {
	                return "";
	            }
	            var name = this.Worksheet.name();
	            if (r1c1) {
	                return textRefer.ToR1C1Text(name);
	            }
	            return textRefer.ToA1Text(0, 0, name);
	        };
	        ReferenceText_prototype.UpdateTextByFormulas = function (formula, r1c1) {
	            if (r1c1 === keyword_undefined) {
	                r1c1 = false;
	            }
	            var result = this.Worksheet._ParseFormula(formula, 0, 0, r1c1);
	            var refers = result.references;
	            this._textRefer = refers ? refers[0] : keyword_null;
	        };
	        return ReferenceText;
	    }());
	    Charts.ReferenceText = ReferenceText;
	
	    var DrawingText = (function (_super) {
	        inherit(DrawingText, _super);
	        function DrawingText(drawing, parentFont, defaultText, fontDefaultOptions) {
	            if (parentFont === keyword_undefined) {
	                parentFont = keyword_null;
	            }
	            if (defaultText === keyword_undefined) {
	                defaultText = keyword_null;
	            }
	            if (fontDefaultOptions === keyword_undefined) {
	                fontDefaultOptions = keyword_null;
	            }
	            var _this = _super.call(this, drawing) || this;
	            _this._textBody = keyword_null;
	
	            _this._ooText = keyword_null;
	            _this._defaultText = defaultText || '';
	            _this._fontDefaultOptions = fontDefaultOptions;
	            _this.InitRichTextFields(parentFont);
	            return _this;
	        }
	
	        var DrawingText_prototype = DrawingText.prototype;
	        DrawingText_prototype.InitRichTextFields = function (parentFont) {
	            var _this = this;
	            var newTextBody = new Charts.DrawingTextBody(_this._drawing, _this._fontDefaultOptions);
	            if (!isNullOrUndefined(_this._textBody)) {
	                _this._textBody.Font.SetParentForChildren(newTextBody.Font);
	            }
	            _this._textBody = newTextBody;
	            _this._textBody.Font.ParentStateful = parentFont;
	            if (!isNullOrUndefined(_this._defaultText)) {
	                _this._textBody.AddParagraph(_this._defaultText);
	            }
	        };
	        defineProperty(DrawingText_prototype, "TextBody", {
	            get: function () {
	                return this._textBody;
	            }
	        });
	        defineProperty(DrawingText_prototype, "Font", {
	            get: function () {
	                return this._textBody.Font;
	            }
	        });
	        defineProperty(DrawingText_prototype, "Text", {
	            get: function () {
	                if (!isNullOrUndefined(this.TextRefer)) {
	                    return this.ReferingText;
	                }
	                return this._textBody.Text;
	            },
	            set: function (value) {
	                this.SetTextInternal(value);
	            }
	        });
	        DrawingText_prototype.SetTextInternal = function (value) {
	            this.SetTextReferInternal(keyword_null);
	            this.UpdateTextBody(value);
	        };
	        DrawingText_prototype.UpdateTextBody = function (text) {
	            this._textBody.Clear();
	            var actualText = !isNullOrUndefined(text) ? text : this._defaultText;
	            if (!isNullOrUndefined(actualText)) {
	                this._textBody.AddParagraph(actualText);
	            }
	        };
	        DrawingText_prototype.OnSetTextRefer = function (value) {
	            _super.prototype.OnSetTextRefer.call(this, value);
	            this.UpdateTextBody(keyword_null);
	        };
	        DrawingText_prototype.FromOOModel = function (ooText ) {
	            var _this = this;
	            _this._ooText = ooText;
	            _this.InitRichTextFields(_this._textBody.Font.ParentStateful);
	            if (!isNullOrUndefined(ooText.rich)) {
	                _this._textBody.FromOOModel(ooText.rich);
	            }
	            if (!isNullOrUndefined(ooText.strRef) && ooText.strRef.f) {
	                _this.UpdateTextByFormulas(ooText.strRef.f);
	            }
	        };
	        DrawingText_prototype.ToOOModel = function () {
	            var _this = this;
	            var ooText = !isNullOrUndefined(_this._ooText) ? _this._ooText : {};
	            if (!isNullOrUndefined(_this._textRefer)) {
	                ooText.strRef = {
	                    f: _this.Formula
	                };
	                ooText.rich = _this._textBody.ToOOModel();
	            } else {
	                ooText.rich = this._textBody.ToOOModel();
	            }
	            return ooText;
	        };
	        DrawingText_prototype.SetParagraphSplitFlag = function (split) {
	            var textBody = this._textBody;
	            for (var i = 0, textBodyCount = textBody.Count; i < textBodyCount; i++) {
	                textBody.Get(i).SplitSpaceFlag = split;
	            }
	        };
	        DrawingText_prototype.UpdateFiledElementTextLink = function (textlink) {
	            var textBody = this._textBody;
	            for (var i = 0, textBodyCount = textBody.Count; i < textBodyCount; i++) {
	                var paragraph = textBody.Get(i);
	                for (var j = 0, paragraphCount = paragraph.Count; j < paragraphCount; j++) {
	                    var textField = paragraph.Get(j);
	                    if (isNullOrUndefined(textField) || textField.Type !== 8) {
	                        continue;
	                    }
	                    textField.UpdateTextByFormulas(textlink);
	                    return;
	                }
	            }
	        };
	        return DrawingText;
	    }(ReferenceText));
	    Charts.DrawingText = DrawingText;
	
	    var FontFormatStates = { 
	        Bold: 1,
	        Color: 2,
	        Italic: 4,
	        Name: 8,
	        OutlineFont: 16,
	        Shadow: 32,
	        Size: 64,
	        Strikethrough: 128,
	        Subscript: 256,
	        Superscript: 512,
	        ThemeFont: 1024,
	        Underline: 2048
	    };
	    Charts.TextFieldType = {
	        CellRange: 0,
	        SeriesName: 1,
	        CategoryName: 2,
	        Value: 3,
	        XValue: 4,
	        YValue: 5,
	        BubbleSize: 6,
	        Percentage: 7,
	        TxLink: 8
	    };
	    var FontFormat = (function (_super) {
	        inherit(FontFormat, _super);
	        function FontFormat(context, parent, defaults) {
	            if (parent === keyword_undefined) { parent = keyword_null; }
	            if (defaults === keyword_undefined) { defaults = keyword_null; }
	            _super.call(this, parent);
	            var _this = this;
	            _this._themeFont = 0 ;
	            _this._eaFontName = keyword_null;
	            _this._latinFontName = keyword_null;
	            _this._csFontName = keyword_null;
	            _this._context = context;
	            _this._fill = new FillFormat(context, parent && parent.FillInternal);
	            _this._parent = parent;
	            if (defaults) {
	                if (!isNullOrUndefined(defaults.Size)) {
	                    _this._size = defaults.Size;
	                }
	                if (!isNullOrUndefined(defaults.Bold)) {
	                    _this._bold = defaults.Bold;
	                }
	            }
	            return _this;
	        }
	
	        var prototype = FontFormat.prototype;
	
	        defineProperty(prototype, "Bold", {
	            get: function () {
	                var parent = this._parent;
	                if (parent && !this.GetState(1 )) {
	                    return parent.Bold;
	                }
	                return this._bold;
	            },
	            set: function (value) {
	                this._bold = value;
	                this.SetState(1 , true);
	            }
	        });
	        defineProperty(prototype, "Color", {
	            get: function () {
	                return this.FillInternal.Color;
	            }
	        });
	        defineProperty(prototype, "Italic", {
	            get: function () {
	                var parent = this._parent;
	                if (parent && !this.GetState(4 )) {
	                    return parent.Italic;
	                }
	                return this._italic;
	            },
	            set: function (value) {
	                this._italic = value;
	                this.SetState(4 , true);
	            }
	        });
	        defineProperty(prototype, "Name", {
	            get: function () {
	                var parent = this._parent;
	                if (parent && !this.HasOwnFont()) {
	                    return parent.Name;
	                }
	                return this.GetOwnFont();
	            },
	            set: function (value) {
	                this.SetFont(value);
	                this.ClearOOFontNames();
	            }
	        });
	        defineProperty(prototype, "Size", {
	            get: function () {
	                var parent = this._parent;
	                if (parent && !this.GetState(64 )) {
	                    return parent.Size;
	                }
	                return this._size;
	            },
	            set: function (value) {
	                this._size = value;
	                this.SetState(64 , true);
	            }
	        });
	        defineProperty(prototype, "Strikethrough", {
	            get: function () {
	                var parent = this._parent;
	                if (parent && !this.GetState(128 )) {
	                    return parent.Strikethrough;
	                }
	                return this._strikethrough;
	            },
	            set: function (value) {
	                this._strikethrough = value;
	                this.SetState(128 , true);
	            }
	        });
	        defineProperty(prototype, "Subscript", {
	            get: function () {
	                var parent = this._parent;
	                if (parent && !this.GetState(256 )) {
	                    return parent.Subscript;
	                }
	                return this._subscript;
	            },
	            set: function (value) {
	                this._subscript = value;
	                this.SetState(256 , true);
	            }
	        });
	        defineProperty(prototype, "Superscript", {
	            get: function () {
	                var parent = this._parent;
	                if (parent && !this.GetState(512 )) {
	                    return parent.Superscript;
	                }
	                return this._superscript;
	            },
	            set: function (value) {
	                this._superscript = value;
	                this.SetState(512 , true);
	            }
	        });
	        defineProperty(prototype, "Underline", {
	            get: function () {
	                var parent = this._parent;
	                if (parent && !this.GetState(2048 )) {
	                    return parent.Underline;
	                }
	                return this._underline;
	            },
	            set: function (value) {
	                this._underline = value;
	                this.SetState(2048 , true);
	            }
	        });
	        defineProperty(prototype, "ThemeFont", {
	            get: function () {
	                var parent = this._parent;
	                if (parent && !this.GetState(1024 )) {
	                    return parent.ThemeFont;
	                }
	                return this._themeFont;
	            },
	            set: function (value) {
	                this.SetThemeFont(value);
	                this.ClearOOFontNames();
	            }
	        });
	        prototype.IsDirtyIncludingParent = function (includingParent) {
	            if (this._fill && this._fill.IsDirtyIncludingParent(includingParent)) {
	                return true;
	            }
	            return _super.prototype.IsDirtyIncludingParent.call(this, includingParent);
	        };
	        prototype.HasOwnFont = function () {
	            return this.IsDirty(8 ) || this.IsDirty(1024 );
	        };
	        prototype.OnParentChanged = function (newParent) {
	            this._parent = newParent;
	            if (this._fill) {
	                this._fill.ParentStateful = newParent && newParent.FillInternal;
	            }
	        };
	        prototype.GetOwnFont = function () {
	            if (this._themeFont === 0 ) {
	                return this._name;
	            }
	            return this._context._ToFont(this._themeFont);
	        };
	        prototype.SetFont = function (value) {
	            var _this = this;
	            if (value === ChartConstants.CHART_CS_HEAD_FONT ||
	                value === ChartConstants.CHART_EA_HEAD_FONT ||
	                value === ChartConstants.CHART_LATIN_HEAD_FONT) {
	                _this.SetThemeFont(1);
	            } else if (value === ChartConstants.CHART_CS_BODY_FONT ||
	                value === ChartConstants.CHART_EA_BODY_FONT ||
	                value === ChartConstants.CHART_LATIN_BODY_FONT) {
	                _this.SetThemeFont(2);
	            } else {
	                _this._name = value;
	                _this.SetState(8 , true);
	                _this._themeFont = 0 ;
	                _this.SetState(1024 , false);
	            }
	        };
	        prototype.SetThemeFont = function (value) {
	            var _this = this;
	            _this._themeFont = value;
	            _this.SetState(1024 , true);
	            _this._name = keyword_null;
	            _this.SetState(8 , false);
	        };
	        prototype.ClearOOFontNames = function () {
	            this._latinFontName = keyword_null;
	            this._csFontName = keyword_null;
	            this._eaFontName = keyword_null;
	        };
	        prototype.GetActualFormat = function () {
	            var _this = this;
	            var fontFormat = new FontFormat(_this._context);
	            for (var prop in FontFormatStates) { 
	                var state = FontFormatStates[prop];
	                if (this.IsDirty(state)) {
	                    switch (state) {
	                        case 1 :
	                            fontFormat.Bold = this.Bold;
	                            break;
	                       
	                       
	                        case 4 :
	                            fontFormat.Italic = this.Italic;
	                            break;
	                        case 8 :
	                            fontFormat.Name = this.Name;
	                            break;
	                       
	                       
	                       
	                       
	                        case 64 :
	                            fontFormat.Size = this.Size;
	                            break;
	                        case 128 :
	                            fontFormat.Strikethrough = this.Strikethrough;
	                            break;
	                        case 256 :
	                            fontFormat.Superscript = this.Superscript;
	                            break;
	                        case 512 :
	                            fontFormat.Subscript = this.Subscript;
	                            break;
	                        case 1024 :
	                            fontFormat.ThemeFont = this.ThemeFont;
	                            break;
	                        case 2048 :
	                            fontFormat.Underline = this.Underline;
	                            break;
	                       
	                       
	                    }
	                }
	            }
	            return fontFormat;
	        };
	        defineProperty(prototype, "FillInternal", {
	            get: function () {
	                var _this = this;
	                if (!_this._fill) {
	                    _this._fill = new FillFormat(_this._context, _this._parent && _this._parent.FillInternal);
	                }
	                return _this._fill;
	            }
	        });
	       
	       
	        prototype.TextCharacterProperties_FromOOModel = function (chProperties ) {
	            var _this = this;
	            _this.SuspendClearChildrenState();
	            _this._ooTextCharacterProps = chProperties;
	            if (!isNullOrUndefined(chProperties.latin)) {
	                _this._latinFontName = chProperties.latin.typeface;
	            }
	            if (!isNullOrUndefined(chProperties.ea)) {
	                _this._eaFontName = chProperties.ea.typeface;
	            }
	            if (!isNullOrUndefined(chProperties.cs)) {
	                _this._csFontName = chProperties.cs.typeface;
	            }
	            if (_this._latinFontName) {
	                _this.SetFont(_this._latinFontName);
	            } else if (_this._eaFontName) {
	                _this.SetFont(_this._eaFontName);
	            } else if (_this._csFontName) {
	                _this.SetFont(_this._csFontName);
	            }
	            if (!isNullOrUndefined(chProperties.sz)) {
	               
	               
	               
	                var size = chProperties.sz;
	               
	                if (_this._size !== size) {
	                    _this.Size = size;
	                }
	            } else {
	               
	            }
	            if (!isNullOrUndefined(chProperties.b)) {
	                _this.Bold = chProperties.b;
	            }
	            if (!isNullOrUndefined(chProperties.i)) {
	                _this.Italic = chProperties.i;
	            }
	            if (!isNullOrUndefined(chProperties.strike)) {
	                _this.Strikethrough = chProperties.strike === 1  || chProperties.strike === 2 ;
	            }
	            if (!isNullOrUndefined(chProperties.u)) {
	                _this.Underline = chProperties.u;
	            }
	            if (!isNullOrUndefined(chProperties.baseline) && chProperties.baseline !== 0) {
	                _this.Subscript = true;
	            } else {
	                _this.Subscript = false;
	            }
	            if (!isNullOrUndefined(chProperties.solidFill)) {
	                _this.FillInternal.FromOOModel(chProperties.solidFill, 0 );
	            } else if (!isNullOrUndefined(chProperties.noFill)) {
	                _this.FillInternal.Color.ColorType = 0;
	            } else if (!isNullOrUndefined(chProperties.blipFill)) {
	                _this.FillInternal.FromOOModel(chProperties.blipFill, 3 );
	            } else if (!isNullOrUndefined(chProperties.gradFill)) {
	                _this.FillInternal.FromOOModel(chProperties.gradFill, 2 );
	            } else if (!isNullOrUndefined(chProperties.pattFill)) {
	                _this.FillInternal.FromOOModel(chProperties.pattFill, 1 );
	            } else {
	                _this.SetFillField(keyword_null);
	            }
	            _this.ResumeClearChilrenState();
	        };
	        prototype.AdjustStateful = function (currentValue, newValue) {
	            if (!isNullOrUndefined(currentValue)) {
	                currentValue.SetParentForChildren(newValue);
	                if (!isNullOrUndefined(newValue)) {
	                    newValue.ParentStateful = currentValue.ParentStateful;
	                }
	                currentValue.ParentStateful = keyword_null;
	            }
	        };
	        prototype.SetFillField = function (value) {
	            this.AdjustStateful(this._fill, value);
	            this._fill = value;
	        };
	        prototype.TextCharacterProperties_ToOOModel = function () {
	            var _this = this;
	            if (!_this.IsDirtyIncludingParent(true)) {
	                return {} ;
	            }
	            var ooModel = _this._ooTextCharacterProps || {} ;
	            if (_this.IsPropDirtyIncludingParent(8 , true)) {
	                var name = _this.Name;
	                if (isNullOrUndefined(ooModel.latin)) {
	                    ooModel.latin = {} ;
	                }
	                ooModel.latin.typeface = name;
	               
	               
	               
	               
	               
	               
	               
	               
	            } else if (_this.IsPropDirtyIncludingParent(1024 , true) &&
	                _this.ThemeFont !== 0 ) {
	                if (isNullOrUndefined(ooModel.latin)) {
	                    ooModel.latin = {} ;
	                }
	                ooModel.latin.typeface = _this.ThemeFont === 1 ?
	                    ChartConstants.CHART_LATIN_HEAD_FONT : ChartConstants.CHART_LATIN_BODY_FONT;
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	            } else if (_this._latinFontName ||
	                _this._eaFontName ||
	                _this._csFontName) {
	                if (_this._latinFontName) {
	                    if (isNullOrUndefined(ooModel.latin)) {
	                        ooModel.latin = {} ;
	                    }
	                    ooModel.latin.typeface = _this._latinFontName;
	                }
	                if (_this._eaFontName) {
	                    if (isNullOrUndefined(ooModel.ea)) {
	                        ooModel.ea = {} ;
	                    }
	                    ooModel.ea.typeface = _this._eaFontName;
	                }
	                if (_this._csFontName) {
	                    if (isNullOrUndefined(ooModel.cs)) {
	                        ooModel.cs = {} ;
	                    }
	                    ooModel.cs.typeface = _this._csFontName;
	                }
	            }
	           
	           
	           
	            if (_this.IsPropDirtyIncludingParent(64 , true) && _this.Size > 1) {
	                ooModel.sz = _this.Size;
	            } else {
	                delete ooModel.sz;
	            }
	            if (_this.IsPropDirtyIncludingParent(1 , true)) {
	                ooModel.b = _this.Bold;
	           
	           
	           
	            }
	            if (_this.IsPropDirtyIncludingParent(4 , true)) {
	                ooModel.i = _this.Italic;
	           
	           
	            }
	            if (_this.IsPropDirtyIncludingParent(128 , true)) {
	                ooModel.strike = _this.Strikethrough ? 1  : 0 ;
	           
	           
	            }
	            if (_this.IsPropDirtyIncludingParent(2048 , true)) {
	                ooModel.u = _this.Underline;
	           
	           
	            }
	            if (_this.Subscript && isNullOrUndefined(ooModel.baseline)) {
	                ooModel.baseline = -25000;
	            } else if (_this.Superscript && isNullOrUndefined(ooModel.baseline)) {
	                ooModel.baseline = 30000;
	            } else if (!_this.Subscript && !_this.Superscript) {
	                delete ooModel.baseline;
	            }
	            deleteFillItems(ooModel);
	            if (!isNullOrUndefined(_this._fill) && _this._fill.IsDirtyIncludingParent(true)) {
	                var fill = _this._fill.ToOOModel(), colorFillType = fill.colorFillType;
	                if (colorFillType === 0 ) {
	                    ooModel.solidFill = fill;
	                } else if (colorFillType === 1 ) {
	                    ooModel.pattFill = fill;
	                } else if (colorFillType === 2 ) {
	                    ooModel.gradFill = fill;
	                } else if (colorFillType === 3 ) {
	                    ooModel.blipFill = fill;
	                } else if (colorFillType === 5 ) {
	                    ooModel.noFill = true;
	                }
	                delete fill.colorFillType;
	            }
	            return ooModel;
	        };
	        prototype.FromOOModel = function (font) {
	            var _this = this;
	            _this.Bold = font.Bold;
	            _this.Italic = font.Italic;
	            _this.Name = font.Name;
	            if (font.Scheme !== 0 ) {
	                _this.ThemeFont = font.Scheme;
	            }
	            _this.Size = font.Size;
	            _this.Underline = ChartUtility.ConvertToTextUnderlineType(font.Underline);
	            _this.Strikethrough = font.Strike;
	            _this.Subscript = (font.VertAlign & 2 ) === 2 ;
	            _this.Superscript = (font.VertAlign & 1 ) === 1 ;
	            _this.FillInternal.ColorInternal.ColorData_FromOOModel(font.Color);
	        };
	        prototype.ToOOModel = function () {
	            var _this = this;
	            var fontData = new FontData();
	            fontData.Bold = _this.Bold;
	            fontData.Italic = _this.Italic;
	            fontData.Name = _this.Name;
	            fontData.Scheme = _this.ThemeFont;
	            fontData.Size = _this.Size;
	            fontData.Underline = ChartUtility.ToUnderlineType(_this.Underline);
	            fontData.Strike = _this.Strikethrough;
	            if (_this.Subscript) {
	                fontData.VertAlign = 2 ;
	            } else if (_this.Superscript) {
	                fontData.VertAlign = 1 ;
	            }
	            var fill = _this._fill;
	            if (fill && fill.ColorInternal.IsDirtyIncludingParent(true) && fill.ColorInternal.ColorType !== 0) {
	                fontData.Color = fill.ColorInternal.ColorData_ToOOModel();
	            }
	            return fontData;
	        };
	        return FontFormat;
	    }(StatefullBase));
	    Charts.FontFormat = FontFormat;
	   
	    var DrawingTextElement = (function () {
	        function DrawingTextElement(context, textParagraph) {
	            var _this = this;
	            _this._context = context;
	            _this._textParagraph = textParagraph;
	            _this._font = new FontFormat(context);
	            _this._font.ParentStateful = textParagraph.Font;
	        }
	
	        var prototype = DrawingTextElement.prototype;
	        
	        defineProperty(prototype, "Font", {
	            get: function () {
	                return this._font;
	            }
	        });
	        defineProperty(prototype, "Text", {
	            get: function () {
	                return "";
	            }
	        });
	        defineProperty(prototype, "IsCustomText", {
	            get: function () {
	                return false;
	            }
	        });
	        prototype.Delete = function () {
	            this._textParagraph.DeleteElement(this);
	            this._textParagraph = keyword_null;
	        };
	        return DrawingTextElement;
	    }());
	    Charts.DrawingTextElement = DrawingTextElement;
	    var DrawingTextRun = (function (_super) {
	        inherit(DrawingTextRun, _super);
	        function DrawingTextRun(context, text, textParagraph) {
	            _super.call(this, context, textParagraph);
	            var _this = this;
	            _this._ooTextRun = keyword_null;
	            _this._text = text;
	            _this._context = context;
	            _this.elementType = 0 ;
	            return _this;
	        }
	        var prototype = DrawingTextRun.prototype;
	
	        defineProperty(prototype, "Text", {
	            get: function () {
	                return this._text;
	            },
	            set: function (value) {
	                this._text = value;
	            }
	        });
	        prototype.FromOOModel = function (t ) {
	            var _this = this;
	            _this._ooTextRun = t;
	            _this._text = t.t;
	            if (!isNullOrUndefined(t.rPr)) {
	                _this._font.TextCharacterProperties_FromOOModel(t.rPr);
	            } else {
	                _this._font = new FontFormat(_this._context, _this._font.ParentStateful);
	            }
	        };
	        prototype.ToOOModel = function () {
	            var ooModel = this._ooTextRun || {
	                elementType: 0 
	            } ;
	            ooModel.t = this.Text;
	            ooModel.rPr = this._font.TextCharacterProperties_ToOOModel();
	            return ooModel;
	        };
	        return DrawingTextRun;
	    }(DrawingTextElement
	        ));
	    Charts.DrawingTextRun = DrawingTextRun;
	    var DrawingTextField = (function (_super) {
	        inherit(DrawingTextField, _super);
	
	        function DrawingTextField(context, type, paragraph) {
	            _super.call(this, context, paragraph);
	            var _this = this;
	            _this._type = type;
	            _this._drawing = context;
	            _this._referenceText = new Charts.ReferenceText(_this._drawing);
	            _this.elementType = 2 ;
	            return _this;
	        }
	
	        var prototype = DrawingTextField.prototype;
	
	        defineProperty(prototype, "Type", {
	            get: function () {
	                return this._type;
	            },
	            set: function (value) {
	                this._type = value;
	            }
	        });
	        defineProperty(prototype, "Text", {
	            get: function () {
	                if (this.Type === 8 ) {
	                    return this._referenceText.ReferingText;
	                }
	                return ChartUtility.GetTextFieldTypeText(this.Type);
	            }
	        });
	        defineProperty(prototype, "Worksheet", {
	            get: function () {
	                return this._drawing && this._drawing.Parent;
	            }
	        });
	        prototype.FromOOModel = function (t ) {
	            var _this = this;
	            _this._ooModel = t;
	            _this.Type = ChartUtility.GetTextFieldType(t.type);
	            if (!isNullOrUndefined(t.rPr)) {
	                _this._font.TextCharacterProperties_FromOOModel(t.rPr);
	            } else {
	                _this._font = new FontFormat(_this._context, _this._font.ParentStateful);
	            }
	        };
	        prototype.ToOOModel = function () {
	            var _this = this;
	            var ooModel = _this._ooModel || {
	                elementType: 2 
	            } ;
	            if (isNullOrUndefined(ooModel.id)) {
	                var guid = "{" + DrawingTextField.guid + "}";
	                ooModel.id = guid;
	                DrawingTextField.guid += 1;
	            }
	            ooModel.type = ChartUtility.GetTextFieldTypeString(_this.Type);
	            if (isNullOrUndefined(ooModel.rPr)) {
	                ooModel.rPr = {} ;
	            }
	            ooModel.rPr = _this._font.TextCharacterProperties_ToOOModel();
	            ooModel.t = _this.Text;
	            return ooModel;
	        };
	        prototype.UpdateTextByFormulas = function (formula, r1c1) {
	            this._referenceText.UpdateTextByFormulas(formula, r1c1);
	        };
	        return DrawingTextField;
	    }(DrawingTextElement
	        ));
	    DrawingTextField.guid = 1;
	    Charts.DrawingTextField = DrawingTextField;
	    var DrawingLineBreak = (function (_super) {
	        inherit(DrawingLineBreak, _super);
	        function DrawingLineBreak(context, paragraph) {
	            _super.call(this, context, paragraph);
	            this.elementType = 1 ;
	        }
	
	        var prototype = DrawingLineBreak.prototype;
	
	        defineProperty(prototype, "Text", {
	            get: function () {
	                return "\r\n";
	            }
	        });
	        prototype.FromOOModel = function (t ) {
	            this._ooModel = t;
	        };
	        prototype.ToOOModel = function () {
	            return this._ooModel || {
	                elementType: 1 
	            }; 
	        };
	        return DrawingLineBreak;
	    }(DrawingTextElement
	        ));
	    Charts.DrawingLineBreak = DrawingLineBreak;
	    var DrawingTextParagraph
	        = (function () {
	            function DrawingTextParagraph(context, textBody) {
	                var _this = this;
	                _this._ooTextPara = keyword_null;
	                _this._font = keyword_null;
	                _this._context = keyword_null;
	                _this._splitSpaceFlag = " ";
	                _this._context = context;
	                _this._textBody = textBody;
	                _this._font = new FontFormat(context);
	                _this._font.ParentStateful = _this._textBody.Font;
	                _this._elements = [];
	            }
	
	            var prototype = DrawingTextParagraph.prototype;
	
	            defineProperty(prototype, "SplitSpaceFlag", {
	                get: function () {
	                    return this._splitSpaceFlag;
	                },
	                set: function (value) {
	                    this._splitSpaceFlag = value;
	                }
	            });
	            defineProperty(prototype, "Text", {
	                get: function () {
	                    var text = "";
	                    for (var _i = 0, _a = this._elements; _i < _a.length; _i++) {
	                        var r = _a[_i];
	                       
	                       
	                       
	                        if (!isNullOrUndefined(r.Text)) {
	                            text += r.Text;
	                        }
	                    }
	                    return text;
	                },
	                set: function (value) {
	                    this.Clear();
	                    this.AddRun(value);
	                }
	            });
	            prototype.Get = function (index) {
	                return this._elements[index];
	            };
	            defineProperty(prototype, "Count", {
	                get: function () {
	                    return this._elements.length;
	                }
	            });
	            defineProperty(prototype, "Font", {
	                get: function () {
	                    return this._font;
	                }
	            });
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            prototype.AddRun = function (text, index) {
	                return this.AddRunInternal(text, index);
	            };
	            prototype.AddField = function (type) {
	                return this.AddFieldInternal(type);
	            };
	            prototype.Clear = function () {
	                for (var _i = 0, _a = this._elements; _i < _a.length; _i++) {
	                    var item = _a[_i];
	                    item.Font.ParentStateful = keyword_null;
	                }
	                this._elements.length = 0;
	            };
	            prototype.FromOOModel = function (t ) {
	                var _this = this;
	                _this._ooTextPara = t;
	                if (t.pPr && t.pPr.defRPr) {
	                    _this._font.TextCharacterProperties_FromOOModel(t.pPr.defRPr);
	                }
	                if (t.elements) {
	                    var totalCount = t.elements.length;
	                    var elements = _this._elements = [];
	                    var context = _this._context;
	                    for (var i = 0; i < totalCount; i++) {
	                        var item = t.elements[i];
	                        var elementType = item.elementType;
	                        var newItem;
	                        if (elementType === 0 ) {
	                            newItem = new DrawingTextRun(context, (item ).t, _this);
	                        } else if (elementType === 1 ) {
	                            newItem = new DrawingLineBreak(context, _this);
	                        } else if (elementType === 2 ) {
	                            newItem = new DrawingTextField(context, ChartUtility.GetTextFieldType((item ).type), _this);
	                        }
	                        if (newItem) {
	                            newItem.FromOOModel(item );
	                            elements.push(newItem);
	                        }
	                    }
	                }
	            };
	            prototype.AddRunInternal = function (text, index) {
	                var _this = this;
	                if (index === keyword_undefined) { index = -1; }
	                var run = new DrawingTextRun(_this._context, text, _this);
	                var elements = this._elements;
	                if (index < 0 || index >= elements.length) {
	                    elements.push(run);
	                } else {
	                    elements.splice(index, 0, run);
	                }
	                return run;
	            };
	            prototype.AddFieldInternal = function (type) {
	                var fld = new DrawingTextField(this._context, type, this);
	                this._elements.push(fld);
	                return fld;
	            };
	            prototype.ToOOModel = function () {
	                var _this = this;
	                var ooModel = _this._ooTextPara || { elements: [] } ;
	                if (!ooModel.pPr) {
	                    ooModel.pPr = {} ;
	                }
	                var pPr = ooModel.pPr;
	
	                if (!isNullOrUndefined(_this._font)) {
	                    pPr.defRPr = _this._font.TextCharacterProperties_ToOOModel();
	                }
	                var ooModelElements = ooModel.elements = [];
	                for (var i = 0, elements = _this._elements, count = elements.length; i < count; i++) {
	                    ooModelElements.push(elements[i].ToOOModel());
	                }
	                if ((_this._context.DrawingType === 1 || isNullOrUndefined(_this._ooTextPara)) &&
	                    isNullOrUndefined(ooModel.endParaRPr)) {
	                    ooModel.endParaRPr = {} ;
	                }
	                return ooModel;
	            };
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            prototype.Delete = function () {
	                var _this = this;
	                for (var i = _this._elements.length - 1; i >= 0; i--) {
	                    _this.DeleteElement(_this._elements[i]);
	                }
	                _this._textBody.DeleteParagraph(_this);
	                _this._textBody = keyword_null;
	            };
	            prototype.DeleteElement = function (element) {
	                element.Font.ParentStateful = keyword_null;
	                var index = this._elements.indexOf(element);
	                if (index >= 0) {
	                    this._elements.splice(index, 1);
	                }
	            };
	            return DrawingTextParagraph;
	        }());
	    Charts.DrawingTextParagraph = DrawingTextParagraph;
	
	    var DrawingTextBody
	        = (function () {
	            function DrawingTextBody(context, fontDefaultOptions) {
	                this._paragraphs = [];
	                this._ooTextBody = keyword_null;
	                this._context = context;
	                this._fontDefaultOptions = fontDefaultOptions;
	                this._font = new FontFormat(context, keyword_null, fontDefaultOptions);
	                this._rotation = 0;
	            }
	
	            var prototype = DrawingTextBody.prototype;
	
	            defineProperty(prototype, "Text", {
	                get: function () {
	                    var text = "";
	                    for (var _i = 0, _a = this._paragraphs; _i < _a.length; _i++) {
	                        var p = _a[_i];
	                        if (text !== "") {
	                            text += '\r\n';
	                        }
	                        text += p.Text;
	                    }
	                    return text;
	                },
	                set: function (value) {
	                    this.Clear();
	                    this.AddParagraph(value);
	                }
	            });
	            prototype.Get = function (index) {
	                return this._paragraphs[index];
	            };
	            defineProperty(prototype, "Count", {
	                get: function () {
	                    return this._paragraphs.length;
	                }
	            });
	            defineProperty(prototype, "Font", {
	                get: function () {
	                    return this._font;
	                }
	            });
	            defineProperty(prototype, "Rotation", {
	                get: function () {
	                    return this._rotation;
	                }
	            });
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            prototype.setFontColor = function (sheet, colorString) {
	               
	                var _this = this, paragraphLength = _this._paragraphs.length;
	                if (_this._font) {
	                    _this._font.Color.setColor(sheet, colorString);
	                }
	                for (var i = 0; i < paragraphLength; i++) {
	                    _this._paragraphs[i].Font.Color.setColor(sheet, colorString);
	                }
	            };
	            prototype.setFontTransparency = function (transparency) {
	               
	                var _this = this, paragraphLength = _this._paragraphs.length;
	                if (_this._font) {
	                    _this._font.Color.Transparency = transparency;
	                }
	                for (var i = 0; i < paragraphLength; i++) {
	                    _this._paragraphs[i].Font.Color.Transparency = transparency;
	                }
	            };
	            prototype.updateFont = function (name, size, bold, italic) {
	                var _this = this;
	                var fonts = [_this._font];
	                _this._paragraphs.forEach(function (p) {
	                    fonts.push(p.Font);
	                });
	                fonts.forEach(function (font) {
	                    if (font) {
	                        font.Name = name;
	                        font.Size = size;
	                        font.Bold = bold;
	                        font.Italic = italic;
	                    }
	                });
	            };
	            prototype.AddParagraph = function (text, index) {
	                if (index === keyword_undefined) { index = -1; }
	                var paragraph = new DrawingTextParagraph(this._context, this);
	                if (!isNullOrUndefined(text)) {
	                    paragraph.AddRun(text);
	                }
	                var paragraphs = this._paragraphs;
	                if (index < 0 || index >= paragraphs.length) {
	                    paragraphs.push(paragraph);
	                } else {
	                    paragraphs.splice(index, 0, paragraph);
	                }
	                return paragraph;
	            };
	            prototype.Clear = function () {
	                for (var _i = 0, _a = this._paragraphs; _i < _a.length; _i++) {
	                    var item = _a[_i];
	                    item.Font.ParentStateful = keyword_null;
	                }
	                this._paragraphs.length = 0;
	            };
	            prototype.ToOOModel = function () {
	                var _this = this;
	                var ooModel = _this._ooTextBody || { p: [] } ;
	                var paragraphs = this._paragraphs, count = paragraphs.length;
	                if (count === 0 && !this._font.IsDirtyIncludingParent()) {
	                    return keyword_null;
	                }
	                var ps = ooModel.p = [];
	                if (count > 0) {
	                    for (var _i = 0; _i < count; _i++) {
	                        var p = paragraphs[_i];
	                        ps.push(p.ToOOModel());
	                    }
	                } else {
	                    var defaultP = new DrawingTextParagraph(_this._context, _this);
	                   
	                    var defaultOOPModel = defaultP.ToOOModel();
	                    defaultOOPModel.pPr.defRPr = _this._font.TextCharacterProperties_ToOOModel();
	                    ps.push(defaultOOPModel);
	                }
	                if (isNullOrUndefined(ooModel.bodyPr)) {
	                    ooModel.bodyPr = {} ;
	                }
	                if (isNullOrUndefined(ooModel.lstStyle)) {
	                    ooModel.lstStyle = {} ;
	                }
	                return ooModel;
	            };
	            prototype.FromOOModel = function (t ) {
	                var _this = this;
	                _this._ooTextBody = t;
	                for (var _i = 0, _a = _this._paragraphs; _i < _a.length; _i++) {
	                    var p = _a[_i];
	                    p.Clear();
	                }
	                _this._paragraphs.length = 0;
	                var newFont = new FontFormat(_this._context, keyword_null, _this._fontDefaultOptions);
	                var font = _this._font;
	                if (font) {
	                    font.SetParentForChildren(newFont);
	                    newFont.ParentStateful = font.ParentStateful;
	                    font.ParentStateful = keyword_null;
	                }
	                _this._font = newFont;
	                if (t.p && t.p.length) {
	                    var pPr = t.p[0].pPr;
	                    var endParaRPr = t.p[0].endParaRPr;
	                    var chProperties;
	                    if (pPr && pPr.defRPr && !isEmptyObject(pPr.defRPr)) {
	                        chProperties = pPr.defRPr;
	                    } else if (endParaRPr && !isEmptyObject(endParaRPr)) {
	                        chProperties = endParaRPr;
	                    }
	                    if (chProperties) {
	                        _this._font.TextCharacterProperties_FromOOModel(chProperties);
	                    }
	                   
	                   
	                   
	                   
	                   
	                   
	                   
	                   
	                   
	                   
	                   
	                    for (var _b = 0, _c = t.p; _b < _c.length; _b++) {
	                        var oop = _c[_b];
	                        var chartP = new DrawingTextParagraph(_this._context, _this);
	                        chartP.FromOOModel(oop);
	                        _this._paragraphs.push(chartP);
	                    }
	                }
	               
	                var bodyProperties = t.bodyPr;
	                if(bodyProperties) {
	                    var rotationDegree = bodyProperties.rot;
	                    if (rotationDegree) {
	                        this._rotation = rotationDegree;
	                    }
	                }
	            };
	           
	           
	           
	           
	           
	           
	           
	           
	            prototype.Delete = function () {
	                for (var paragraphs = this._paragraphs, i = paragraphs.length - 1; i >= 0; i--) {
	                    this.DeleteParagraph(paragraphs[i]);
	                }
	            };
	            prototype.DeleteParagraph = function (paragraph) {
	                paragraph.Font.ParentStateful = keyword_null;
	                var index = this._paragraphs.indexOf(paragraph);
	                if (index >= 0) {
	                    this._paragraphs.splice(index, 1);
	                }
	            };
	            return DrawingTextBody;
	        }());
	    Charts.DrawingTextBody = DrawingTextBody;
	    var ComboColorFormat = (function (_super) {
	        inherit(ComboColorFormat, _super);
	        function ComboColorFormat(format1, format2) {
	            _super.call(this);
	            var _this = this;
	            _this.Format1 = format1;
	            _this.Format2 = format2;
	            return _this;
	        }
	
	        var prototype = ComboColorFormat.prototype;
	
	        defineProperty(prototype, "Stateful1", {
	            get: function () {
	                return this.Format1;
	            }
	        });
	        defineProperty(prototype, "Stateful2", {
	            get: function () {
	                return this.Format2;
	            }
	        });
	        defineProperty(prototype, "Brightness", {
	            get: function () {
	                var _this = this;
	                if (!isNullOrUndefined(_this.Format2) && _this.Stateful2.IsPropDirtyIncludingParent(1 , false)) {
	                    return _this.Format2.Brightness;
	                }
	                return _this.Format1.Brightness;
	            },
	            set: function (value) {
	                this.Format1.Brightness = value;
	            }
	        });
	        defineProperty(prototype, "ColorType", {
	            get: function () {
	                var _this = this;
	                if (!isNullOrUndefined(_this.Format2) && _this.Stateful2.IsPropDirtyIncludingParent(16 , false)) {
	                    return _this.Format2.ColorType;
	                }
	                return _this.Format1.ColorType;
	            },
	            set: function (value) {
	                this.Format1.ColorType = value;
	            }
	        });
	        defineProperty(prototype, "ObjectThemeColor", {
	            get: function () {
	                var _this = this;
	                if (!isNullOrUndefined(_this.Format2) && _this.Stateful2.IsPropDirtyIncludingParent(2 , false)) {
	                    return _this.Format2.ObjectThemeColor;
	                }
	                return _this.Format1.ObjectThemeColor;
	            },
	            set: function (value) {
	                this.Format1.ObjectThemeColor = value;
	            }
	        });
	        defineProperty(prototype, "RGB", {
	            get: function () {
	                var _this = this;
	                if (!isNullOrUndefined(_this.Format2) && _this.Stateful2.IsPropDirtyIncludingParent(4 , false)) {
	                    return _this.Format2.RGB;
	                }
	                return _this.Format1.RGB;
	            },
	            set: function (value) {
	                this.Format1.RGB = value;
	            }
	        });
	        defineProperty(prototype, "TintAndShade", {
	            get: function () {
	                var _this = this;
	                if (!isNullOrUndefined(_this.Format2) && _this.Stateful2.IsPropDirtyIncludingParent(8 , false)) {
	                    return _this.Format2.TintAndShade;
	                }
	                return _this.Format1.TintAndShade;
	            },
	            set: function (value) {
	                this.Format1.TintAndShade = value;
	            }
	        });
	        prototype.GetState = function () {
	
	        };
	        prototype.SetState = function () {
	
	        };
	        prototype.IsDirtyIncludingParent = function () {
	
	        };
	        prototype.IsPropDirtyIncludingParent = function (t, includingParent) {
	            return this.Stateful1.IsPropDirtyIncludingParent(t, includingParent) ||
	                this.Stateful2.IsPropDirtyIncludingParent(t, includingParent);
	        };
	        prototype.Dirty = function () {
	
	        };
	        prototype.UnDirty = function () {
	
	        };
	        prototype.SuspendClearChildrenState = function () {
	
	        };
	        prototype.ResumeClearChilrenState = function () {
	
	        };
	        prototype.AddChildInternal = function () {
	
	        };
	        prototype.RemoveChildInternal = function () {
	
	        };
	        return ComboColorFormat;
	    }(StatefullBase));
	    Charts.ComboColorFormat = ComboColorFormat;
	    
	    var ComboFontFormat = (function (_super) {
	        inherit(ComboFontFormat, _super);
	        function ComboFontFormat(format1, format2) {
	            _super.call(this);
	            var _this = this;
	            _this.Format1 = format1;
	            _this.Format2 = format2;
	            return _this;
	        }
	        var prototype = ComboFontFormat.prototype;
	
	        defineProperty(prototype, "Stateful1", {
	            get: function () {
	                return this.Format1;
	            }
	        });
	        defineProperty(prototype, "Stateful2", {
	            get: function () {
	                return this.Format2;
	            }
	        });
	        defineProperty(prototype, "Bold", {
	            get: function () {
	                var _this = this;
	                if (!isNullOrUndefined(_this.Format2) && _this.Stateful2.IsPropDirtyIncludingParent(1 , false)) {
	                    return _this.Format2.Bold;
	                }
	                return _this.Format1.Bold;
	            },
	            set: function (value) {
	                this.Format1.Bold = value;
	            }
	        });
	        defineProperty(prototype, "Color", {
	            get: function () {
	                return new ComboColorFormat(this.Format1.Color, this.Format2.Color);
	            }
	        });
	        defineProperty(prototype, "Italic", {
	            get: function () {
	                var _this = this;
	                if (!isNullOrUndefined(_this.Format2) && _this.Stateful2.IsPropDirtyIncludingParent(4 , false)) {
	                    return _this.Format2.Bold;
	                }
	                return _this.Format1.Bold;
	            },
	            set: function (value) {
	                this.Format1.Bold = value;
	            }
	        });
	        defineProperty(prototype, "Name", {
	            get: function () {
	                var _this = this;
	                if (!isNullOrUndefined(_this.Format2) && _this.Stateful2.IsPropDirtyIncludingParent(8 , false)) {
	                    return _this.Format2.Name;
	                }
	                return _this.Format1.Name;
	            },
	            set: function (value) {
	                this.Format1.Name = value;
	            }
	        });
	        defineProperty(prototype, "Size", {
	            get: function () {
	                var _this = this;
	                if (!isNullOrUndefined(_this.Format2) && _this.Stateful2.IsPropDirtyIncludingParent(64 , false)) {
	                    return _this.Format2.Size;
	                }
	                return _this.Format1.Size;
	            },
	            set: function (value) {
	                this.Format1.Size = value;
	            }
	        });
	        defineProperty(prototype, "Strikethrough", {
	            get: function () {
	                var _this = this;
	                if (!isNullOrUndefined(_this.Format2) && _this.Stateful2.IsPropDirtyIncludingParent(128 , false)) {
	                    return _this.Format2.Strikethrough;
	                }
	                return _this.Format1.Strikethrough;
	            },
	            set: function (value) {
	                this.Format1.Strikethrough = value;
	            }
	        });
	        defineProperty(prototype, "Subscript", {
	            get: function () {
	                var _this = this;
	                if (!isNullOrUndefined(_this.Format2) && _this.Stateful2.IsPropDirtyIncludingParent(256 , false)) {
	                    return _this.Format2.Subscript;
	                }
	                return _this.Format1.Subscript;
	            },
	            set: function (value) {
	                this.Format1.Subscript = value;
	            }
	        });
	        defineProperty(prototype, "Superscript", {
	            get: function () {
	                var _this = this;
	                if (!isNullOrUndefined(_this.Format2) && _this.Stateful2.IsPropDirtyIncludingParent(512 , false)) {
	                    return _this.Format2.Superscript;
	                }
	                return _this.Format1.Superscript;
	            },
	            set: function (value) {
	                this.Format1.Superscript = value;
	            }
	        });
	        defineProperty(prototype, "ThemeFont", {
	            get: function () {
	                var _this = this;
	                if (!isNullOrUndefined(_this.Format2) && _this.Stateful2.IsPropDirtyIncludingParent(1024 , false)) {
	                    return _this.Format2.ThemeFont;
	                }
	                return _this.Format1.ThemeFont;
	            },
	            set: function (value) {
	                this.Format1.ThemeFont = value;
	            }
	        });
	        defineProperty(prototype, "Underline", {
	            get: function () {
	                var _this = this;
	                if (!isNullOrUndefined(_this.Format2) && _this.Stateful2.IsPropDirtyIncludingParent(2048 , false)) {
	                    return _this.Format2.Underline;
	                }
	                return _this.Format1.Underline;
	            },
	            set: function (value) {
	                this.Format1.Underline = value;
	            }
	        });
	        prototype.GetState = function () {
	
	        };
	        prototype.SetState = function () {
	
	        };
	        prototype.IsDirtyIncludingParent = function () {
	
	        };
	        prototype.IsPropDirtyIncludingParent = function (t, includingParent) {
	            return this.Stateful1.IsPropDirtyIncludingParent(t, includingParent) ||
	                this.Stateful2.IsPropDirtyIncludingParent(t, includingParent);
	        };
	        prototype.Dirty = function () {
	
	        };
	        prototype.UnDirty = function () {
	
	        };
	        prototype.SuspendClearChildrenState = function () {
	
	        };
	        prototype.ResumeClearChilrenState = function () {
	
	        };
	        prototype.AddChildInternal = function () {
	
	        };
	        prototype.RemoveChildInternal = function () {
	
	        };
	        return ComboFontFormat;
	    }(StatefullBase));
	    Charts.ComboFontFormat = ComboFontFormat;
	
	    module.exports = Charts;
	}());

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(3);
	    var Types = Common._Types;
	    var inherit = Types._inherit;
	
	    var Charts = __webpack_require__(9);
	    var StatefullBase = __webpack_require__(11).StatefullBase;
	    var ChartCommon = __webpack_require__(12),
	        ChartUtility = ChartCommon.ChartUtility,
	        defineProperty = ChartUtility.defineProperty,
	        deleteFillItems = ChartUtility._deleteFillItems,
	        UnitHelper = ChartCommon.UnitHelper,
	        isNullOrUndefined = UnitHelper.isNullOrUndefined;
	
	    var FillFormat = __webpack_require__(17).FillFormat;
	
	    var keyword_null = null;
	
	    function isValidEnumValue(value, min, max) {
	        return value >= min && value <= max;
	    }
	
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	    var LineFormat = (function (_super) {
	        inherit(LineFormat, _super);
	
	        function LineFormat(context, parent, autoColorFormat) {
	            _super.call(this, parent);
	            var _this = this;
	            _this._beginArrowheadLength = 1 ;
	            _this._beginArrowheadStyle = 0 ;
	            _this._beginArrowheadWidth = 1 ;
	            _this._dashStyle = 0 ;
	            _this._endArrowheadLength = 1 ;
	            _this._endArrowheadStyle = 0 ;
	            _this._endArrowheadWidth = 1 ;
	            _this._style = 0 ;
	            _this._visible = true;
	            _this._weight = -1;
	            _this._ooLineProps = keyword_null;
	            _this._context = context;
	            _this._parent = parent;
	            _this._autoColorFormat = autoColorFormat;
	            _this._capStyle = 2 ;
	            _this._joinStyle = 0 ;
	            _this._fill = new FillFormat(context, parent && parent.FillInternal, autoColorFormat);
	            return _this;
	        }
	
	        var prototype = LineFormat.prototype;
	
	        defineProperty(prototype, "PatternColor", {
	            get: function () {
	                return this.FillInternal.PatternColorInternal;
	            }
	        });
	        defineProperty(prototype, "Color", {
	            get: function () {
	                return this.FillInternal.ColorInternal;
	            }
	        });
	        defineProperty(prototype, "BeginArrowheadLength", {
	            get: function () {
	                if (!this.IsDirty(4 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.BeginArrowheadLength;
	                }
	                return this._beginArrowheadLength;
	            },
	            set: function (value) {
	                this._beginArrowheadLength = value;
	                this.Dirty(4 );
	            }
	        });
	        defineProperty(prototype, "BeginArrowheadStyle", {
	            get: function () {
	                if (!this.IsDirty(8 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.BeginArrowheadStyle;
	                }
	                return this._beginArrowheadStyle;
	            },
	            set: function (value) {
	                this._beginArrowheadStyle = value;
	                this.Dirty(8 );
	            }
	        });
	        defineProperty(prototype, "BeginArrowheadWidth", {
	            get: function () {
	                if (!this.IsDirty(16 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.BeginArrowheadWidth;
	                }
	                return this._beginArrowheadWidth;
	            },
	            set: function (value) {
	                this._beginArrowheadWidth = value;
	                this.Dirty(16 );
	            }
	        });
	        defineProperty(prototype, "DashStyle", {
	            get: function () {
	                if (!this.IsDirty(32 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.DashStyle;
	                }
	                return this._dashStyle;
	            },
	            set: function (value) {
	               
	                if (isValidEnumValue(value, 0, 11)) {
	                    this._dashStyle = value;
	                    this.Dirty(32 );
	                }
	            }
	        });
	        defineProperty(prototype, "CapStyle", {
	            get: function () {
	                if (!this.IsDirty(32768 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.CapStyle;
	                }
	                return this._capStyle;
	            },
	            set: function (value) {
	               
	                if (isValidEnumValue(value, 0, 2)) {
	                    this._capStyle = value;
	                    this.Dirty(32768 );
	                }
	            }
	        });
	        defineProperty(prototype, "JoinStyle", {
	            get: function () {
	                if (!this.IsDirty(65536 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.JoinStyle;
	                }
	                return this._joinStyle;
	            },
	            set: function (value) {
	               
	                if (isValidEnumValue(value, 0, 2)) {
	                    this._joinStyle = value;
	                    this.Dirty(65536 );
	                }
	            }
	        });
	        defineProperty(prototype, "EndArrowheadLength", {
	            get: function () {
	                if (!this.IsDirty(64 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.EndArrowheadLength;
	                }
	                return this._endArrowheadLength;
	            },
	            set: function (value) {
	                this._endArrowheadLength = value;
	                this.Dirty(64 );
	            }
	        });
	        defineProperty(prototype, "EndArrowheadStyle", {
	            get: function () {
	                if (!this.IsDirty(128 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.EndArrowheadStyle;
	                }
	                return this._endArrowheadStyle;
	            },
	            set: function (value) {
	                this._endArrowheadStyle = value;
	                this.Dirty(128 );
	            }
	        });
	        defineProperty(prototype, "EndArrowheadWidth", {
	            get: function () {
	                if (!this.IsDirty(256 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.EndArrowheadWidth;
	                }
	                return this._endArrowheadWidth;
	            },
	            set: function (value) {
	                this._endArrowheadWidth = value;
	                this.Dirty(256 );
	            }
	        });
	        defineProperty(prototype, "InsetPen", {
	            get: function () {
	                if (!this.IsDirty(512 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.InsetPen;
	                }
	                return this._insetPen;
	            },
	            set: function (value) {
	                this._insetPen = value;
	                this.Dirty(512 );
	            }
	        });
	        defineProperty(prototype, "Pattern", {
	            get: function () {
	                return this.FillInternal.Pattern;
	            },
	            set: function (value) {
	                this.FillInternal._SetPattern(value);
	            }
	        });
	        defineProperty(prototype, "PresetGradientType", {
	            get: function () {
	                return this.FillInternal.PresetGradientType;
	            }
	        });
	        prototype._SetPresetGradientType = function (value) {
	            this.FillInternal._SetPresetGradientType(value);
	        };
	        defineProperty(prototype, "GradientAngle", {
	            get: function () {
	                return this.FillInternal.GradientAngle;
	            },
	            set: function (value) {
	                this.FillInternal.GradientAngle = value;
	            }
	        });
	        defineProperty(prototype, "GradientColorType", {
	            get: function () {
	                return this.FillInternal.GradientColorType;
	            }
	        });
	        defineProperty(prototype, "GradientDegree", {
	            get: function () {
	                return this.FillInternal.GradientDegree;
	            }
	        });
	        prototype._SetGradientDegree = function (value) {
	            this.FillInternal._SetGradientDegree(value);
	        };
	        defineProperty(prototype, "GradientStops", {
	            get: function () {
	                return this.FillInternal.GradientStops;
	            }
	        });
	        defineProperty(prototype, "GradientStyle", {
	            get: function () {
	                return this.FillInternal.GradientStyle;
	            }
	        });
	        prototype._SetGradientStyle = function (value) {
	            this.FillInternal._SetGradientStyle(value);
	        };
	        defineProperty(prototype, "GradientVariant", {
	            get: function () {
	                return this.FillInternal.GradientVariant;
	            }
	        });
	        prototype._SetGradientVariant = function (value) {
	            this.FillInternal._SetGradientVariant(value);
	        };
	        defineProperty(prototype, "Style", {
	            get: function () {
	                if (!this.IsDirty(2048 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.Style;
	                }
	                return this._style;
	            },
	            set: function (value) {
	                this._style = value;
	                this.Dirty(2048 );
	            }
	        });
	        defineProperty(prototype, "Transparency", {
	            get: function () {
	                return this.FillInternal.Transparency;
	            },
	            set: function (value) {
	                this.FillInternal.Transparency = value;
	            }
	        });
	        defineProperty(prototype, "Visible", {
	            get: function () {
	                if (!this.IsDirty(8192 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.Visible;
	                }
	                return this._visible;
	            },
	            set: function (value) {
	                this._visible = value;
	                this.Dirty(8192 );
	            }
	        });
	        defineProperty(prototype, "Weight", {
	            get: function () {
	                if (!this.IsDirty(16384 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.Weight;
	                }
	                return this._weight;
	            },
	            set: function (value) {
	                this._weight = value;
	                this.Dirty(16384 );
	            }
	        });
	        prototype.OneColorGradient = function (Style, Variant, Degree) {
	            this.FillInternal.OneColorGradient(Style, Variant, Degree);
	        };
	        prototype.TwoColorGradient = function (Style, Variant) {
	            this.FillInternal.TwoColorGradient(Style, Variant);
	        };
	        prototype.PresetGradient = function (Style, Variant, PresetGradientType) {
	            this.FillInternal.PresetGradient(Style, Variant, PresetGradientType);
	        };
	        prototype.Solid = function () {
	            this.FillInternal.Solid();
	        };
	        prototype.Patterned = function (pattern) {
	            this.FillInternal.Patterned(pattern);
	        };
	        defineProperty(prototype, "FillInternal", {
	            get: function () {
	                var _this = this;
	                if (!_this._fill) {
	                    _this._fill = new FillFormat(_this._context, _this._parent && _this._parent.FillInternal, _this._autoColorFormat);
	                }
	                return _this._fill;
	            }
	        });
	        defineProperty(prototype, "Type", {
	            get: function () {
	                return this.FillInternal.Type;
	            }
	        });
	        prototype.GetState = function (prop, includingParent) {
	            var fill = this._fill;
	            if (fill) {
	                if (prop === 1  && fill.Color) {
	                    return fill.Color.IsDirtyIncludingParent(includingParent);
	                }
	                if (prop === 2  && fill.PatternColor) {
	                    return fill.PatternColor.IsDirtyIncludingParent(includingParent);
	                }
	            }
	            return _super.prototype.GetState.call(this, prop, includingParent);
	        };
	        prototype.IsDirtyIncludingParent = function (includingParent) {
	            var fill = this._fill;
	            if (fill && fill.IsDirtyIncludingParent(includingParent)) {
	                return true;
	            }
	            return _super.prototype.IsDirtyIncludingParent.call(this, includingParent);
	        };
	        prototype.OnParentChanged = function (newParent) {
	            this._parent = newParent;
	            var fill = this._fill;
	            if (fill && newParent) {
	                fill.ParentStateful = newParent.FillInternal;
	            }
	        };
	        prototype.FromOOModel = function (t ) {
	            this._ooLineProps = t;
	            this.FromCT_LineProperties(t);
	        };
	        prototype.ToOOModel = function () {
	            return this.ToCT_LineProperties();
	        };
	        prototype.FromCT_LineProperties = function (ooModel ) {
	            var _this = this;
	            if (!isNullOrUndefined(ooModel.solidFill)) {
	                _this.FillInternal.FromOOModel(ooModel.solidFill, 0 );
	            } else if (!isNullOrUndefined(ooModel.pattFill)) {
	                _this.FillInternal.FromOOModel(ooModel.pattFill, 1 );
	            } else if (!isNullOrUndefined(ooModel.gradFill)) {
	                _this.FillInternal.FromOOModel(ooModel.gradFill, 2 );
	            } else if (!isNullOrUndefined(ooModel.noFill)) {
	                _this.FillInternal.ColorInternal.ColorType = 0;
	            }
	            if (!isNullOrUndefined(ooModel.headEnd)) {
	                _this.FromCT_LineEndProperties(ooModel.headEnd);
	            }
	            if (!isNullOrUndefined(ooModel.tailEnd)) {
	                _this.FromCT_TailLineEndProperties(ooModel.tailEnd);
	            }
	            if (!isNullOrUndefined(ooModel.w) && ooModel.w >= 0) {
	                _this.Weight = ooModel.w;
	            } else {
	                _this._weight = -1;
	                _this.UnDirty(16384 );
	            }
	            if (!isNullOrUndefined(ooModel.cmpd)) {
	                _this.Style = ooModel.cmpd;
	            }
	            _this.Round = !!ooModel.round;
	            if (!isNullOrUndefined(ooModel.prstDash)) {
	                _this.DashStyle = ooModel.prstDash;
	            } else {
	                _this.UnDirty(32 );
	            }
	            if (!isNullOrUndefined(ooModel.cap)) {
	                _this.CapStyle = ooModel.cap;
	            }
	            if (ooModel.bevel) {
	                _this.JoinStyle = 2 ;
	            } else if (ooModel.round) {
	                _this.JoinStyle = 0 ;
	            } else if (ooModel.miter) {
	                _this.JoinStyle = 1 ;
	            }
	        };
	        prototype.ToCT_LineProperties = function () {
	            var _this = this;
	            var lineProps = _this._ooLineProps;
	            if (!_this.IsDirtyIncludingParent() && !isNullOrUndefined(lineProps)) {
	                return lineProps;
	            }
	            var lineProp = lineProps || {} ;
	            deleteFillItems(lineProp);
	           
	            if (!_this._visible) {
	                lineProp.noFill = true;
	               
	               
	            } else if (!isNullOrUndefined(_this._fill)) {
	                var fillBase = _this._fill.ToOOModel();
	                if (fillBase.colorFillType === 0 ) {
	                    lineProp.solidFill = fillBase;
	                } else if (fillBase.colorFillType === 1 ) {
	                    lineProp.pattFill = fillBase;
	                } else if (fillBase.colorFillType === 2 ) {
	                    lineProp.gradFill = fillBase;
	                } else if (fillBase.colorFillType === 5 ) {
	                    lineProp.noFill = true;
	                }
	                delete fillBase.colorFillType;
	            }
	            var lineItem;
	            lineItem = _this.ToCT_HeadLineEndProperties();
	            if (lineItem) {
	                lineProp.headEnd = lineItem;
	            }
	            lineItem = _this.ToCT_TailLineEndProperties();
	            if (lineItem) {
	                lineProp.tailEnd = lineItem;
	            }
	            if (_this.Weight >= 0) {
	                lineProp.w = _this.Weight;
	            }
	            if (_this.GetState(2048 , true)) {
	                lineProp.cmpd = _this.Style;
	            }
	            if (_this.GetState(32 , true)) {
	                lineProp.prstDash = _this.DashStyle;
	            }
	            if (_this.Round) {
	                lineProp.round = true;
	            }
	            if (_this.GetState(32768 , true)) {
	                lineProp.cap = _this.CapStyle;
	            }
	
	           
	            delete lineProp.bevel;
	            delete lineProp.round;
	            delete lineProp.miter;
	            if (_this.GetState(65536 , true)) {
	                var joinStyle = _this.JoinStyle;
	
	                if (joinStyle === 2 ) {
	                    lineProp.bevel = {};
	                } else if (joinStyle === 0 ) {
	                    lineProp.round = true;
	                } else if (joinStyle === 1 ) {
	                    lineProp.miter = {lim: 0}; 
	                }
	            }
	           
	            return lineProp;
	        };
	        prototype.FromCT_LineEndProperties = function (ooModel ) {
	            var _this = this;
	            _this._beginArrowheadStyle = ooModel.type;
	            _this._beginArrowheadWidth = ooModel.w;
	            _this._beginArrowheadLength = ooModel.len;
	            _this.SetState(8 , true);
	            _this.SetState(16 , true);
	            _this.SetState(4 , true);
	        };
	        prototype.ToCT_HeadLineEndProperties = function () {
	            var lineBegin = {
	                w: 1 ,
	                len: 1 
	            } ;
	            var _this = this;
	            var dirty = false;
	            if (_this.GetState(8 , true)) {
	                lineBegin.type = _this.BeginArrowheadStyle;
	                dirty = true;
	            }
	            if (_this.GetState(16 , true)) {
	                lineBegin.w = _this.BeginArrowheadWidth;
	                dirty = true;
	            }
	            if (_this.GetState(4 , true)) {
	                lineBegin.len = _this.BeginArrowheadLength;
	                dirty = true;
	            }
	            if (dirty) {
	                return lineBegin;
	            }
	            return keyword_null;
	        };
	        prototype.FromCT_TailLineEndProperties = function (ooModel ) {
	            if (isNullOrUndefined(ooModel)) {
	                return;
	            }
	            var _this = this;
	            _this._endArrowheadStyle = ooModel.type;
	            _this._endArrowheadWidth = ooModel.w;
	            _this._endArrowheadLength = ooModel.len;
	            _this.SetState(128 , true);
	            _this.SetState(256 , true);
	            _this.SetState(64 , true);
	        };
	        prototype.ToCT_TailLineEndProperties = function () {
	            var lineEnd = {
	                w: 1 ,
	                len: 1 
	            } ;
	            var dirty = false;
	            var _this = this;
	            if (_this.GetState(128 , true)) {
	                lineEnd.type = _this.EndArrowheadStyle;
	                dirty = true;
	            }
	            if (_this.GetState(256 , true)) {
	                lineEnd.w = _this.EndArrowheadWidth;
	                dirty = true;
	            }
	            if (_this.GetState(64 , true)) {
	                lineEnd.len = _this.EndArrowheadLength;
	                dirty = true;
	            }
	            if (dirty) {
	                return lineEnd;
	            }
	            return keyword_null;
	        };
	       
	        prototype.Clone = function () {
	            var _this = this;
	            var format = new LineFormat(_this._context);
	            format._fill = _this._fill && _this._fill.Clone();
	            format._beginArrowheadLength = _this._beginArrowheadLength;
	            format._beginArrowheadStyle = _this._beginArrowheadStyle;
	            format._beginArrowheadWidth = _this._beginArrowheadWidth;
	            format._dashStyle = _this._dashStyle;
	            format._endArrowheadLength = _this._endArrowheadLength;
	            format._endArrowheadStyle = _this._endArrowheadStyle;
	            format._endArrowheadWidth = _this._endArrowheadWidth;
	            format._insetPen = _this._insetPen;
	            format._visible = _this._visible;
	            format._weight = _this._weight;
	            format._states = _this._states;
	            format._parent = _this._parent;
	            return format;
	        };
	        return LineFormat;
	    }(StatefullBase));
	    Charts.LineFormat = LineFormat;
	
	    module.exports = Charts;
	}());

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(3);
	    var Types = Common._Types;
	    var inherit = Types._inherit;
	
	    var Charts = __webpack_require__(9);
	    var StatefullBase = __webpack_require__(11).StatefullBase;
	    var ChartCommon = __webpack_require__(12),
	        ShapeConstants = ChartCommon.ShapeConstants,
	        PositionConver = ShapeConstants.PositionConver,
	        ChartUtility = ChartCommon.ChartUtility,
	        defineProperty = ChartUtility.defineProperty,
	        ShapeUtility = ChartCommon.ShapeUtility,
	        fromLum = ShapeUtility.FromLum,
	        toLum = ShapeUtility.ToLum,
	        UnitHelper = ChartCommon.UnitHelper,
	        isNullOrUndefined = UnitHelper.isNullOrUndefined;
	
	    var keyword_null = null, keyword_undefined = void 0;
	
	   
	   
	   
	   
	   
	   
	   
	   
	   
	
	    Charts.PictureFormatType = {
	        PictureShape: 0,
	        PictureFill: 1,
	        TextureFill: 2
	    };
	    var Crop = (function () {
	        function Crop(container) {
	            var _this = this;
	            _this._pictureOffsetX = 0;
	            _this._pictureOffsetY = 0;
	            _this._pictureWidth = 0;
	            _this._pictureHeight = 0;
	            _this._container = container;
	        }
	        var prototype = Crop.prototype;
	
	        defineProperty(prototype, "PictureHeight", {
	            get: function () {
	                return this._pictureHeight;
	            },
	            set: function (value) {
	                this._pictureHeight = value;
	            }
	        });
	        defineProperty(prototype, "PictureOffsetX", {
	            get: function () {
	                return this._pictureOffsetX;
	            },
	            set: function (value) {
	                this._pictureOffsetX = value;
	            }
	        });
	        defineProperty(prototype, "PictureOffsetY", {
	            get: function () {
	                return this._pictureOffsetY;
	            },
	            set: function (value) {
	                this._pictureOffsetY = value;
	            }
	        });
	        defineProperty(prototype, "PictureWidth", {
	            get: function () {
	                return this._pictureWidth;
	            },
	            set: function (value) {
	                this._pictureWidth = value;
	            }
	        });
	        defineProperty(prototype, "ShapeHeight", {
	            get: function () {
	                return this._container.Height;
	            },
	            set: function (value) {
	                this._container.Height = value;
	            }
	        });
	        defineProperty(prototype, "ShapeLeft", {
	            get: function () {
	                return this._container.Left;
	            },
	            set: function (value) {
	               
	                this._container.Left = value;
	            }
	        });
	        defineProperty(prototype, "ShapeTop", {
	            get: function () {
	                return this._container.Top;
	            },
	            set: function (value) {
	                this._container.Top = value;
	            }
	        });
	        defineProperty(prototype, "ShapeWidth", {
	            get: function () {
	                return this._container.Width;
	            },
	            set: function (value) {
	               
	                this._container.Width = value;
	            }
	        });
	        prototype.Clone = function () {
	            var _this = this;
	            var crop = new Crop(_this._container);
	            crop._pictureHeight = _this._pictureHeight;
	            crop._pictureOffsetX = _this._pictureOffsetX;
	            crop._pictureOffsetY = _this._pictureOffsetY;
	            crop._pictureWidth = _this._pictureWidth;
	            return crop;
	        };
	        return Crop;
	    }());
	    Charts.Crop = Crop;
	
	    var PictureFormat = (function (_super) {
	        inherit(PictureFormat, _super);
	        function PictureFormat(formatType, parent) {
	            if (formatType === keyword_undefined) { formatType = 0 ; }
	            if (parent === keyword_undefined) { parent = keyword_null; }
	            _super.call(this, parent);
	            var _this = this;
	            _this._brightness = ShapeConstants.DefaultBrightness;
	            _this._colorType = 0 ;
	            _this._contrast = ShapeConstants.DefaultBrightness;
	            _this._transparencyColor = ShapeConstants.DefaultTransparent;
	            _this._pictureFormatType = formatType;
	            _this._parent = parent;
	            _this._transparentBackground = _this._pictureFormatType === 0 ;
	
	            return _this;
	        }
	
	        var prototype = PictureFormat.prototype;
	
	        defineProperty(prototype, "Brightness", {
	            get: function () {
	                if (!this.IsDirty(1 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.Brightness;
	                }
	                return this._brightness;
	            },
	            set: function (value) {
	                if (value < 0 || value > 1) {
	                    throw new Error();
	                }
	                this._brightness = value;
	                this.Dirty(1 );
	            }
	        });
	        defineProperty(prototype, "ColorType", {
	            get: function () {
	                if (!this.IsDirty(2 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.ColorType;
	                }
	                return this._colorType;
	            },
	            set: function (value) {
	                if (value === 0 ) {
	                    this._brightness = ShapeConstants.DefaultBrightness;
	                    this._contrast = ShapeConstants.DefaultBrightness;
	                } else if (value === 3 ) {
	                    this._brightness = 0.85;
	                    this._contrast = 0.15;
	                }
	                this._colorType = value;
	                this.Dirty(2 );
	            }
	        });
	        defineProperty(prototype, "Contrast", {
	            get: function () {
	                if (!this.IsDirty(4 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.Contrast;
	                }
	                return this._contrast;
	            },
	            set: function (value) {
	                if (value < 0 || value > 1) {
	                    throw new Error();
	                }
	                this._contrast = value;
	                this.Dirty(4 );
	            }
	        });
	        defineProperty(prototype, "Crop", {
	            get: function () {
	                var _this = this;
	                if (!_this._crop) {
	                    _this._crop = new Crop(_this._shapeBase);
	                }
	                return _this._crop;
	            }
	        });
	        defineProperty(prototype, "CropBottom", {
	            get: function () {
	                return this.Crop.ShapeTop + this.Crop.ShapeHeight;
	            },
	            set: function (value) {
	                this.Crop.ShapeHeight = value - this.Crop.ShapeTop;
	            }
	        });
	        defineProperty(prototype, "CropLeft", {
	            get: function () {
	                return this.Crop.ShapeLeft;
	            },
	            set: function (value) {
	                this.Crop.ShapeLeft = value;
	            }
	        });
	        defineProperty(prototype, "CropRight", {
	            get: function () {
	                return this.Crop.ShapeLeft + this.Crop.ShapeWidth;
	            },
	            set: function (value) {
	                this.Crop.ShapeWidth = value - this.Crop.ShapeLeft;
	            }
	        });
	        defineProperty(prototype, "CropTop", {
	            get: function () {
	                return this.Crop.ShapeTop;
	            },
	            set: function (value) {
	                this.Crop.ShapeTop = value;
	            }
	        });
	        defineProperty(prototype, "TransparencyColor", {
	            get: function () {
	                if (!this.IsDirty(8 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.TransparencyColor;
	                }
	                return this._transparencyColor;
	            },
	            set: function (value) {
	                this._transparencyColor = value;
	                this.Dirty(8 );
	            }
	        });
	        defineProperty(prototype, "TransparentBackground", {
	            get: function () {
	                if (!this.IsDirty(16 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.TransparentBackground;
	                }
	                return this._transparentBackground;
	            },
	            set: function (value) {
	                this._transparentBackground = value;
	                var fill = this._shapeBase.Fill;
	                if (value) {
	                    fill.Transparency = 1;
	                }
	                fill.Solid();
	                this.Dirty(16 );
	            }
	        });
	        defineProperty(prototype, "Container", {
	            get: function () {
	                return this._shapeBase;
	            },
	            set: function (value) {
	                this._shapeBase = value;
	                if (value) {
	                    var crop = this.Crop;
	                    crop.PictureWidth = value.Width;
	                    crop.PictureHeight = value.Height;
	                }
	            }
	        });
	        defineProperty(prototype, "PicFill", {
	            get: function () {
	                if (!this.IsDirty(32 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.PicFill;
	                }
	                return this._picFill;
	            },
	            set: function (value) {
	                this._picFill = value;
	                this.Dirty(32 );
	            }
	        });
	        defineProperty(prototype, "PicType", {
	            get: function () {
	                if (!this.IsDirty(64 ) && !isNullOrUndefined(this._parent)) {
	                    return this._parent.PicType;
	                }
	                return this._picType;
	            },
	            set: function (value) {
	                this._picType = value;
	                this.Dirty(64 );
	            }
	        });
	        prototype.ClearModel = function () {
	            this._oomodel = keyword_null;
	            for (var _i = 0, _a = this.Children; _i < _a.length; _i++) {
	                var item = _a[_i];
	                item.ClearModel();
	            }
	        };
	        defineProperty(prototype, "PictureFormatType", {
	            get: function () {
	                return this._pictureFormatType;
	            },
	            set: function (value) {
	                this._pictureFormatType = value;
	            }
	        });
	        prototype.HasOwnPicture = function () {
	            return this.IsDirty(1 ) ||
	                this.IsDirty(2 ) ||
	                this.IsDirty(4 ) ||
	                this.IsDirty(8 ) ||
	                this.IsDirty(16 );
	        };
	        prototype.SetPictureInfo = function (picFill, type, pictureFormatType) {
	            this.PicFill = picFill;
	            this.PicType = type;
	            this.PictureFormatType = pictureFormatType;
	        };
	        prototype.IncrementBrightness = function (Increment) {
	            this.Brightness += Increment;
	        };
	        prototype.IncrementContrast = function (Increment) {
	            this.Contrast += Increment;
	        };
	        prototype.FromOOModel = function (t ) {
	            var _this = this;
	            _this._oomodel = t;
	            if (isNullOrUndefined(t)) {
	                return;
	            }
	            _this.FromCT_Blip(t.blip);
	            var shapeBase = _this._shapeBase;
	            if (isNullOrUndefined(shapeBase)) {
	                return;
	            }
	            if (!isNullOrUndefined(t.tile)) {
	                _this.PictureFormatType = 2 ;
	            }
	            _this.Crop.PictureWidth = shapeBase.Width;
	            _this.Crop.PictureHeight = shapeBase.Height;
	
	            if (_this.PictureFormatType === 0 ) {
	                _this.FromCT_RelativeRect(t.srcRect);
	            } else if (_this.PictureFormatType === 1 ) {
	                _this.FromCT_RelativeRect(t.stretch.fillRect);
	            }
	        };
	        prototype.ToOOModel = function () {
	            var _this = this;
	            var blipFill = _this._oomodel || {};
	            blipFill.colorFillType = 3 ;
	            blipFill.blip = _this.ToCT_Blip();
	            var shapeBase = _this._shapeBase;
	            if (isNullOrUndefined(shapeBase)) {
	                return blipFill;
	            }
	            var pictureFormatType = _this.PictureFormatType;
	            if (pictureFormatType === 0 ) {
	                blipFill.srcRect = _this.ToCT_RelativeRect();
	                blipFill.stretch = {} ;
	                blipFill.stretch.fillRect = { l: 0, r: 0, t: 0, b: 0 };
	            } else if (pictureFormatType === 1 ) {
	                blipFill.stretch = {} ;
	                blipFill.stretch.fillRect = _this.ToCT_RelativeRect();
	                blipFill.srcRect = { l: 0, r: 0, t: 0, b: 0 };
	            } else if (pictureFormatType === 2 ) {
	                blipFill.stretch = keyword_null;
	                blipFill.srcRect = keyword_null;
	            }
	            return blipFill;
	        };
	        prototype.FromCT_Blip = function (blip ) {
	            if (isNullOrUndefined(blip)) {
	                return;
	            }
	            var _this = this;
	            _this.FromCT_ColorChangeEffect(blip.clrChange);
	            _this.FromCT_LuminanceEffect(blip.lum);
	            if (!isNullOrUndefined(blip.grayscl)) {
	                _this.ColorType = 1 ;
	            } else if (!isNullOrUndefined(blip.biLevel)) {
	                _this.ColorType = 2 ;
	            }
	            _this.FromCT_BlipBlob(blip.blipBlob);
	        };
	        prototype.ToCT_Blip = function () {
	            var _this = this;
	            var blip = _this._oomodel && _this._oomodel.blip || { cstate: 4  } ;
	            if (_this.TransparencyColor !== ShapeConstants.DefaultTransparent) {
	                blip.clrChange = _this.ToCT_ColorChangeEffect();
	            }
	            if (_this.Brightness !== ShapeConstants.DefaultBrightness || _this.Contrast !== ShapeConstants.DefaultBrightness) {
	                blip.lum = _this.ToCT_LuminanceEffect();
	            }
	            if (_this.ColorType === 1 ) {
	                blip.grayscl = {} ;
	            } else if (_this.ColorType === 2 ) {
	                blip.biLevel = { 
	                    thresh: 50000
	                };
	            }
	            blip.blipBlob = _this.ToCT_BlipBlob();
	            return blip;
	        };
	        prototype.FromCT_ColorChangeEffect = function (clrChange ) {
	            var clr = clrChange && clrChange.clrFrom && clrChange.clrFrom.srgbClr;
	            if (clr) {
	                this.FromColorByteArr(clrChange.val);
	            }
	        };
	        prototype.ToCT_ColorChangeEffect = function () {
	            var colorByteArr = this.ToColorByteArr(this._transparencyColor);
	            return {
	                useA: true  ,
	                clrFrom: { 
	                    srgbClr: { val: colorByteArr }//new CT_SRgbColor()
	                },
	                clrTo: {
	                    srgbClr: {
	                        val: colorByteArr,
	                        alpha: [
	                            0
	                        ]
	                    }//new CT_SRgbColor()
	                }
	            };
	        };
	        prototype.FromColorByteArr = function (val) {
	            this._transparencyColor = (0 << 24) | (val[2] << 16) | (val[1] << 8) | val[0];
	        };
	        prototype.ToColorByteArr = function (val) {
	            var res = [];
	            res[3] = Math.floor(val / (1 << 24));
	            val = val % (1 << 24);
	            res[2] = Math.floor(val / (1 << 16));
	            val = val % (1 << 16);
	            res[1] = Math.floor(val / (1 << 8));
	            val = val % (1 << 8);
	            res[0] = Math.floor(val);
	            return res;
	        };
	        prototype.FromCT_LuminanceEffect = function (lum ) {
	            if (lum) {
	                this.Brightness = fromLum(lum.bright);
	                this.Contrast = fromLum(lum.contrast);
	            }
	        };
	        prototype.ToCT_LuminanceEffect = function () {
	            return {  
	                bright: toLum(this.Brightness),
	                contrast: toLum(this.Contrast)
	            };
	        };
	        prototype.FromCT_BlipBlob = function (blipBlob ) {
	            if (blipBlob) {
	                var _this = this;
	                _this._picFill = blipBlob.blob;
	                _this.Dirty(32 );
	                _this._picType = blipBlob.type;
	                _this.Dirty(64 );
	            }
	        };
	        prototype.ToCT_BlipBlob = function () {
	            var _this = this;
	            var blipBlob = _this._oomodel && _this._oomodel.blip && _this._oomodel.blip.blipBlob || { type: 0  } ;
	            blipBlob.blob = _this.PicFill;
	            blipBlob.type = _this.PicType;
	            return blipBlob;
	        };
	        prototype.FromCT_RelativeRect = function (srcRect ) {
	            var shapeBase = this._shapeBase;
	            if (isNullOrUndefined(srcRect) || isNullOrUndefined(shapeBase)) {
	                return;
	            }
	            var left = srcRect.l / PositionConver;
	            var right = srcRect.r / PositionConver;
	            var top = srcRect.t / PositionConver;
	            var bottom = srcRect.b / PositionConver;
	            var crop = this.Crop;
	            var pictureWidth = crop.PictureWidth = shapeBase.Width / (1 - left - right);
	            var pictureHeight = crop.PictureHeight = shapeBase.Height / (1 - top - bottom);
	            crop.PictureOffsetX = (pictureWidth - shapeBase.Width) / 2 - left * pictureWidth;
	            crop.PictureOffsetY = (pictureHeight - shapeBase.Height) / 2 - top * pictureHeight;
	        };
	        prototype.ToCT_RelativeRect = function () {
	            var shapeBase = this._shapeBase, crop = this.Crop,
	                shapeHeight = crop.ShapeHeight, shapeWidth = crop.ShapeWidth;
	            if (isNullOrUndefined(shapeBase) || shapeHeight === 0 || shapeWidth === 0) {
	                return { l: 0, r: 0, t: 0, b: 0 };
	            }
	            var pictureWidth = crop.PictureWidth, pictureHeight = crop.PictureHeight,
	                pictureOffsetX = crop.PictureOffsetX, pictureOffsetY = crop.PictureOffsetY;
	            var left = ((pictureWidth - shapeWidth) / 2 - pictureOffsetX) / pictureWidth;
	            var right = ((pictureWidth - shapeWidth) / 2 + pictureOffsetX) / pictureWidth;
	            var top = ((pictureHeight - shapeHeight) / 2 - pictureOffsetY) / pictureHeight;
	            var bottom = ((pictureHeight - shapeHeight) / 2 + pictureOffsetY) / pictureHeight;
	            return {
	                l: (left * PositionConver),
	                r: (right * PositionConver),
	                t: (top * PositionConver),
	                b: (bottom * PositionConver),
	            };
	        };
	        prototype.Clone = function () {
	            var _this = this;
	            var format = new PictureFormat();
	            format._brightness = _this._brightness;
	            format._contrast = _this._contrast;
	            format._colorType = _this._colorType;
	            if (_this._crop) {
	                format._crop = _this._crop.Clone();
	            }
	            format._picFill = _this._picFill;
	            format._pictureFormatType = _this._pictureFormatType;
	            format._picType = _this._picType;
	            format._shapeBase = _this._shapeBase;
	            format._transparencyColor = _this._transparencyColor;
	            format._transparentBackground = _this._transparentBackground;
	            return format;
	        };
	        prototype.OnParentChanged = function (newParent) {
	            this._parent = newParent;
	        };
	        return PictureFormat;
	    }(StatefullBase));
	    Charts.PictureFormat = PictureFormat;
	
	    module.exports = Charts;
	}());

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(3);
	    var Types = Common._Types;
	    var extend = Types._extend, inherit = Types._inherit;
	
	    var Charts = __webpack_require__(9);
	    var ChartCommon = __webpack_require__(12);
	    var defineProperty = ChartCommon.ChartUtility.defineProperty;
	    var StatefullBase = __webpack_require__(11).StatefullBase;
	    var PositiveFixedAngleConvert = ChartCommon.ShapeConstants.PositiveFixedAngleConvert;
	    var isNullOrUndefined = ChartCommon.UnitHelper.isNullOrUndefined;
	   
	    Charts.ThreeDFormatStates = {
	        BevelBottomDepth: 1,
	        BevelBottomInset: 2,
	        BevelBottomType: 4,
	        BevelTopDepth: 8,
	        BevelTopInset: 16,
	        BevelTopType: 32,
	        ContourColor: 64,
	        ContourWidth: 128,
	        Depth: 256,
	        ExtrusionColor: 512,
	        ExtrusionColorType: 1024,
	        FieldOfView: 2048,
	        LightAngle: 4096,
	        Perspective: 8192,
	        PresetCamera: 16384,
	        PresetExtrusionDirection: 32768,
	        PresetLighting: 65536,
	        PresetLightingDirection: 131072,
	        PresetLightingSoftness: 262144,
	        PresetMaterial: 524288,
	        PresetThreeDFormat: 1048576,
	        ProjectText: 2097152,
	        RotationX: 4194304,
	        RotationY: 8388608,
	        RotationZ: 16777216,
	        Visible: 33554432,
	        Z: 67108864,
	        AutoScale: 134217728,
	        DepthPercent: 268435456,
	        HeightPercent: 536870912,
	        RightAngleAxes: 1073741824
	    };
	    var keyword_null = null;
	
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	    var ThreeDFormat = (function (_super) {
	        inherit(ThreeDFormat, _super);
	        function ThreeDFormat(context, parent) {
	            _super.call(this, parent);
	            var _this = this;
	            _this._bevelBottomType = 0 ;
	            _this._bevelTopType = 0 ;
	            _this._extrusionColorType = 0 ;
	            _this._fieldOfView = 45;
	            _this._visible = true;
	            _this._dicCameraType = keyword_null;
	            _this._autoScale = true;
	            _this._depthPercent = 100;
	            _this._heightPercent = 100;
	            _this._rightAngleAxes = true;
	            _this._context = context;
	            _this._perspective = 30;
	            _this._parent = parent;
	            _this._SetPresetCamera(62);
	           
	           
	        }
	
	        var prototype = ThreeDFormat.prototype;
	        defineProperty(prototype, "Perspective", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                var _this = this;
	                if (!_this.Dirty(32768 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Perspective;
	                }
	                return _this._perspective;
	            },
	            set: function (value) {
	                var _this = this;
	                _this._perspective = value;
	                _this.Dirty(32768 );
	            }
	        });
	        defineProperty(prototype, "PresetCamera", {
	            get: function () {
	                var _this = this;
	                if (!_this.Dirty(16384 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.PresetCamera;
	                }
	                return _this._presetCamera;
	            }
	        });
	        defineProperty(prototype, "RotationX", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                var _this = this;
	                if (!_this.Dirty(4194304 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.RotationX;
	                }
	                if (!_this.Visible) {
	                    return 0;
	                }
	                return _this._rotationX;
	            },
	            set: function (value) {
	                var _this = this;
	               
	                if (value !== _this._rotationX) {
	                    _this._rotationX = value;
	                    _this.Dirty(4194304 );
	                    _this.UpdatePresetCamera();
	                }
	            }
	        });
	        defineProperty(prototype, "RotationY", {
	            get: function () {
	                var _this = this;
	                if (!_this.Dirty(8388608 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.RotationY;
	                }
	                if (!_this.Visible) {
	                    return 0;
	                }
	                return _this._rotationY;
	            },
	            set: function (value) {
	                var _this = this;
	                if (_this._context.DrawingType === 1) {
	                    if (value < -90 && value >= 180) {
	                        return;
	                    }
	                } else if (value < 0 && value >= 360) {
	                    return;
	                }
	                _this._rotationY = value;
	                _this.Dirty(8388608 );
	                _this.UpdatePresetCamera();
	            }
	        });
	        defineProperty(prototype, "RotationZ", {
	            get: function () {
	                var _this = this;
	                if (!_this.Dirty(16777216 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.RotationZ;
	                }
	                if (!_this.Visible) {
	                    return 0;
	                }
	                return _this._rotationZ;
	            },
	            set: function (value) {
	                var _this = this;
	               
	                if (value !== _this._rotationZ) {
	                    _this._rotationZ = value;
	                    _this.Dirty(16777216 );
	                    _this.UpdatePresetCamera();
	                }
	            }
	        });
	        defineProperty(prototype, "Visible", {
	            get: function () {
	                var _this = this;
	                if (!_this.Dirty(33554432 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Visible;
	                }
	                return _this._visible;
	            },
	            set: function (value) {
	                var _this = this;
	                _this._visible = value;
	                _this.Dirty(33554432 );
	            }
	        });
	        defineProperty(prototype, "Z", {
	            get: function () {
	                var _this = this;
	                if (!_this.Dirty(67108864 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Z;
	                }
	                if (!_this.Visible) {
	                    return 0;
	                }
	                return _this._z;
	            },
	            set: function (value) {
	                var _this = this;
	                _this._z = value;
	                _this.Dirty(67108864 );
	                _this.UpdatePresetCamera();
	            }
	        });
	        defineProperty(prototype, "Depth", {
	            get: function () {
	                var _this = this;
	                if (!_this.Dirty(256 ) && !isNullOrUndefined(_this._parent)) {
	                    return _this._parent.Depth;
	                }
	                if (!_this.Visible) {
	                    return 0;
	                }
	                return _this._depth;
	            },
	            set: function (value) {
	                var _this = this;
	                _this._depth = value;
	                _this.Dirty(256 );
	                _this.UpdatePresetCamera();
	            }
	        });
	        defineProperty(prototype, "DicCameraType", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._dicCameraType)) {
	                    _this.InitDicCameraType();
	                }
	                return _this._dicCameraType;
	            }
	        });
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	        defineProperty(prototype, "_InternalVisible", {
	            get: function () {
	                return this._visible;
	            },
	            set: function (value) {
	                this._visible = value;
	            }
	        });
	        defineProperty(prototype, "_AutoScale", {
	            get: function () {
	                return this._autoScale;
	            },
	            set: function (value) {
	                var _this = this;
	                _this._autoScale = value;
	                _this.Dirty(134217728 );
	            }
	        });
	        defineProperty(prototype, "_DepthPercent", {
	            get: function () {
	                return this._depthPercent;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value >= 20 && value <= 2000) {
	                    _this._depthPercent = value;
	                    _this.Dirty(268435456 );
	                }
	            }
	        });
	        defineProperty(prototype, "_HeightPercent", {
	            get: function () {
	                return this._heightPercent;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value >= 5 && value <= 500) {
	                    _this._heightPercent = value;
	                    _this.Dirty(536870912 );
	                }
	            }
	        });
	        defineProperty(prototype, "_RightAngleAxes", {
	            get: function () {
	                return this._rightAngleAxes;
	            },
	            set: function (value) {
	                var _this = this;
	                _this._rightAngleAxes = value;
	                _this.Dirty(1073741824 );
	            }
	        });
	
	        extend(prototype, {
	            _SetPresetCamera: function (value) {
	                var _this = this;
	                _this._presetCamera = value;
	                _this.Dirty(16384 );
	            },
	            InitDicCameraType: function () {
	                var dicCameraType = this._dicCameraType = {};
	                dicCameraType[0 ] = [0, 0, 0];
	                dicCameraType[1 ] = [0, 0, 0];
	                dicCameraType[2 ] = [0, 0, 0];
	                dicCameraType[3 ] = [0, 0, 0];
	                dicCameraType[4 ] = [0, 0, 0];
	                dicCameraType[5 ] = [0, 0, 0];
	                dicCameraType[6 ] = [0, 0, 0];
	                dicCameraType[7 ] = [0, 0, 0];
	                dicCameraType[8 ] = [0, 0, 0];
	                dicCameraType[9 ] = [0, 0, 0];
	                dicCameraType[10 ] = [0, 0, 0];
	                dicCameraType[11 ] = [0, 0, 0];
	                dicCameraType[12 ] = [0, 0, 0];
	                dicCameraType[13 ] = [0, 0, 0];
	                dicCameraType[14 ] = [0, 0, 0];
	                dicCameraType[15 ] = [0, 0, 0];
	                dicCameraType[16 ] = [0, 0, 0];
	                dicCameraType[17 ] = [0, 0, 0];
	                dicCameraType[18 ] = [0, 0, 0];
	                dicCameraType[19 ] = [314.7191, 324.6037, 60.16242];
	                dicCameraType[20 ] = [45.28088, 324.6037, 299.8376];
	                dicCameraType[21 ] = [45.28088, 35.39627, 60.16242];
	                dicCameraType[22 ] = [314.7191, 35.39627, 299.8376];
	                dicCameraType[23 ] = [45, 325, 0];
	                dicCameraType[24 ] = [45, 35, 0];
	                dicCameraType[25 ] = [315, 35, 0];
	                dicCameraType[26 ] = [315, 325, 0];
	                dicCameraType[27 ] = [64, 18, 0];
	                dicCameraType[28 ] = [334, 18, 0];
	                dicCameraType[29 ] = [306.5457, 301.2619, 57.6425];
	                dicCameraType[30 ] = [26, 18, 0];
	                dicCameraType[31 ] = [296, 18, 0];
	                dicCameraType[32 ] = [53.45424, 301.2619, 302.3575];
	                dicCameraType[33 ] = [64, 342, 0];
	                dicCameraType[34 ] = [334, 342, 0];
	                dicCameraType[35 ] = [306.5457, 58.73808, 302.3575];
	                dicCameraType[36 ] = [26, 342, 0];
	                dicCameraType[37 ] = [296, 342, 0];
	                dicCameraType[38 ] = [53.45424, 58.73808, 57.64252];
	                dicCameraType[39 ] = [0, 0, 0];
	                dicCameraType[40 ] = [0, 0, 0];
	                dicCameraType[41 ] = [0, 0, 0];
	                dicCameraType[42 ] = [0, 0, 0];
	                dicCameraType[43 ] = [0, 0, 0];
	                dicCameraType[44 ] = [0, 0, 0];
	                dicCameraType[45 ] = [0, 0, 0];
	                dicCameraType[46 ] = [0, 0, 0];
	                dicCameraType[47 ] = [0, 0, 0];
	                dicCameraType[48 ] = [20, 0, 0];
	                dicCameraType[49 ] = [340, 0, 0];
	                dicCameraType[50 ] = [0, 340, 0];
	                dicCameraType[51 ] = [0, 20, 0];
	                dicCameraType[52 ] = [14.33758, 39.30647, 341.1238];
	                dicCameraType[53 ] = [345.6624, 39.30647, 18.87615];
	                dicCameraType[54 ] = [43.93887, 10.39642, 356.4465];
	                dicCameraType[55 ] = [316.0611, 10.39642, 3.553517];
	                dicCameraType[56 ] = [14.29302, 348.9837, 2.626817];
	                dicCameraType[57 ] = [345.7069, 348.9837, 357.3732];
	                dicCameraType[58 ] = [34.46068, 8.12245, 357.0914];
	                dicCameraType[59 ] = [325.5393, 8.12245, 2.9086];
	                dicCameraType[60 ] = [0, 309.5601, 0];
	                dicCameraType[61 ] = [0, 324.844, 0];
	            },
	            SetPresetCamera: function (type) {
	                var _this = this;
	                _this._presetCamera = type;
	                _this.Dirty(16384 );
	            },
	            UpdatePresetCamera: function () {
	                var _this = this;
	                if (_this._presetCamera === 62) {
	                    _this.SetPresetCamera(18);
	                }
	            },
	            IncrementRotationX: function (Increment) {
	                this.RotationX += Increment;
	            },
	            IncrementRotationY: function (Increment) {
	                this.RotationY += Increment;
	            },
	            IncrementRotationZ: function (Increment) {
	                this.RotationZ += Increment;
	            },
	            ResetRotation: function () {
	                var _this = this;
	                _this.RotationX = 0;
	                _this.RotationY = 0;
	                _this.RotationZ = 0;
	            },
	            Clone: function () {
	                var _this = this;
	                var format = new ThreeDFormat(_this._context);
	                format._bevelBottomDepth = _this._bevelBottomDepth;
	                format._bevelBottomInset = _this._bevelBottomInset;
	                format._bevelBottomType = _this._bevelBottomType;
	                format._bevelTopDepth = _this._bevelTopDepth;
	                format._bevelTopInset = _this._bevelTopInset;
	                format._bevelTopType = _this._bevelTopType;
	                if (!isNullOrUndefined(_this._contourColor)) {
	                    format._contourColor = _this._contourColor.Clone();
	                }
	                format._contourWidth = _this._contourWidth;
	                format._depth = _this._depth;
	                if (!isNullOrUndefined(_this._extrusionColor)) {
	                    format._extrusionColor = _this._extrusionColor.Clone();
	                }
	                format._extrusionColorType = _this._extrusionColorType;
	                format._fieldOfView = _this._fieldOfView;
	                format._lightAngle = _this._lightAngle;
	                format._perspective = _this._perspective;
	                format._presetCamera = _this._presetCamera;
	                format._presetExtrusionDirection = _this._presetExtrusionDirection;
	                format._presetLighting = _this._presetLighting;
	                format._presetLightingDirection = _this._presetLightingDirection;
	                format._presetLightingSoftness = _this._presetLightingSoftness;
	                format._presetMaterial = _this._presetMaterial;
	                format._presetThreeDFormat = _this._presetThreeDFormat;
	                format._projectText = _this._projectText;
	                format._rotationX = _this._rotationX;
	                format._rotationY = _this._rotationY;
	                format._rotationZ = _this._rotationZ;
	                format._visible = _this._visible;
	                format._z = _this._z;
	                format._states = _this._states;
	                format._parent = _this._parent;
	                return format;
	            },
	            IsDirtyIncludingParent: function (includingParent) {
	                var _this = this;
	                if (_this._contourColor && _this._contourColor.IsDirtyIncludingParent(includingParent)) {
	                    return true;
	                }
	                if (_this._extrusionColor && _this._extrusionColor.IsDirtyIncludingParent(includingParent)) {
	                    return true;
	                }
	                return _super.prototype.IsDirtyIncludingParent.call(_this, includingParent);
	            },
	            OnParentChanged: function (newParent) {
	                var _this = this;
	                _this._parent = newParent;
	                if (isNullOrUndefined(_this._parent)) {
	                    if (_this._contourColor) {
	                        _this._contourColor.ParentStateful = keyword_null;
	                    }
	                    if (_this._extrusionColor) {
	                        _this._extrusionColor.ParentStateful = keyword_null;
	                    }
	                }
	            },
	            FromOOModel: function (t) {
	                var _this = this;
	                _this._ooModel = t;
	                _this.FromCT_Scene3D(_this._ooModel.Scene3D);
	                _this.FromCT_View3D(_this._ooModel.View3D);
	                _this.FromCT_Shape3D(_this._ooModel.Shape3D);
	            },
	            ToOOModel: function () {
	                var _this = this;
	                var ooModel = _this._ooModel || {};
	                ooModel.View3D = _this.ToCT_View3D();
	                if (_this.PresetCamera !== 62) {
	                    ooModel.Scene3D = _this.ToCT_Scene3D();
	                }
	                if (_this.IsPropDirtyIncludingParent(256 , true) ||
	                    _this.IsPropDirtyIncludingParent(67108864 , true)) {
	                    ooModel.Shape3D = _this.ToCT_Shape3D();
	                }
	                return ooModel;
	            },
	            FromCT_View3D: function (view3D ) {
	                var _this = this;
	                if (isNullOrUndefined(view3D)) {
	                    return;
	                }
	                if (!isNullOrUndefined(view3D.hPercent)) {
	                    _this._HeightPercent = view3D.hPercent;
	                }
	                if (!isNullOrUndefined(view3D.depthPercent)) {
	                    _this._DepthPercent = view3D.depthPercent;
	                }
	                if (!isNullOrUndefined(view3D.rotX)) {
	                    _this.RotationY = view3D.rotX;
	                }
	                if (!isNullOrUndefined(view3D.rotY)) {
	                    _this.RotationX = view3D.rotY;
	                }
	                if (!isNullOrUndefined(view3D.rAngAx)) {
	                    _this._RightAngleAxes = view3D.rAngAx;
	                } else {
	                    _this._RightAngleAxes = false;
	                }
	                if (!isNullOrUndefined(view3D.perspective)) {
	                    _this.Perspective = view3D.perspective / 2;
	                }
	            },
	            ToCT_View3D: function () {
	                var _this = this;
	                var view3D = _this._ooModel && _this._ooModel.View3D || {} ;
	                if (!_this._AutoScale && 
	                    _this.IsDirty(536870912 )) {
	                    view3D.hPercent = _this._HeightPercent;
	                }
	                if (_this.IsDirty(268435456 )) {
	                    view3D.depthPercent = _this._DepthPercent;
	                }
	               
	                if (_this.IsDirty(8388608 )) {
	                    view3D.rotX = _this.RotationY;
	                }
	                if (_this.IsDirty(4194304 )) {
	                    view3D.rotY = _this.RotationX;
	                }
	                if (_this.IsDirty(1073741824 )) {
	                    view3D.rAngAx = _this._RightAngleAxes;
	                }
	                if (!_this._RightAngleAxes && 
	                    _this.IsDirty(32768 )) {
	                    view3D.perspective = _this.Perspective * 2;
	                }
	                return view3D;
	            },
	            FromCT_Scene3D: function (scene3D ) {
	                if (isNullOrUndefined(scene3D)) {
	                    return;
	                }
	               
	                this.FromCT_Camera(scene3D.camera);
	               
	            },
	            ToCT_Scene3D: function () {
	                var _this = this;
	                var _ooModel = _this._ooModel;
	                var scene3d = _ooModel && _ooModel.Scene3D || {} ;
	               
	                scene3d.camera = _this.ToCT_Camera();
	               
	                if (!isNullOrUndefined(scene3d.camera) && isNullOrUndefined(scene3d.lightRig)) {
	                    scene3d.lightRig = _this.ToDefaultCT_LightRig();
	                }
	                if (!isNullOrUndefined(scene3d.camera) || !isNullOrUndefined(scene3d.backdrop) || !isNullOrUndefined(scene3d.lightRig)) {
	                    return scene3d;
	                }
	                return keyword_null;
	            },
	            GetActualCT_Scene3D: function () {
	                var _this = this;
	                if (!isNullOrUndefined(_this._ooModel) && !isNullOrUndefined(_this._ooModel.Scene3D)) {
	                    return _this._ooModel.Scene3D;
	                }
	                if (!isNullOrUndefined(_this._parent)) {
	                    return _this.GetActualCT_Scene3D();
	                }
	                return keyword_null;
	            },
	            FromCT_Shape3D: function (shape3D ) {
	                var _this = this;
	                if (isNullOrUndefined(shape3D)) {
	                    return;
	                }
	               
	                if (shape3D.extrusionH !== 0) {
	                    _this.Depth = shape3D.extrusionH;
	                    _this.Dirty(256 );
	                }
	               
	               
	               
	               
	                if (shape3D.z !== 0) {
	                    _this.Z = shape3D.z;
	                    _this.Dirty(67108864 );
	                }
	            },
	            ToCT_Shape3D: function () {
	                var _this = this;
	                var _ooModel = _this._ooModel;
	                var shape3d = _ooModel && _ooModel.Shape3D || { z: 0, extrusionH: 0, contourW: 0, prstMaterial: 7  } ;
	               
	                shape3d.extrusionH = _this.Depth;
	               
	               
	               
	               
	               
	               
	               
	                shape3d.z = _this.Z;
	                return shape3d;
	            },
	            ToDefaultCT_LightRig: function () {
	                
	                return {
	                    rig: 12,
	                    dir: 0
	                };
	            },
	           
	           
	           
	            FromCT_Camera: function (camera ) {
	                if (isNullOrUndefined(camera)) {
	                    return;
	                }
	                this._SetPresetCamera(camera.prst);
	                if (!isNullOrUndefined(camera.rot)) {
	                    this.FromCameraCT_SphereCoords(camera.rot);
	                }
	            },
	            ToCT_Camera: function () {
	                var _this = this;
	                if (_this._context.DrawingType === 0 ||
	                    _this._context.DrawingType === 4) {
	                    var camera = { zoom: 100000 } ;
	                    camera.prst = _this.PresetCamera;
	                    camera.rot = _this.ToCameraCT_SphereCoords();
	                    return camera;
	                }
	                var _ooModel = _this._ooModel;
	                return _ooModel && _ooModel.Scene3D && _ooModel.Scene3D.camera || keyword_null;
	            },
	            FromCameraCT_SphereCoords: function (coords ) {
	                var _this = this;
	                if (isNullOrUndefined(coords)) {
	                    return;
	                }
	                _this.RotationX = coords.lon / PositiveFixedAngleConvert;
	               
	               
	               
	               
	               
	               
	               
	               
	                _this.RotationY = coords.lat / PositiveFixedAngleConvert;
	               
	               
	               
	               
	               
	               
	               
	               
	                _this.RotationZ = coords.rev / PositiveFixedAngleConvert;
	               
	               
	               
	               
	               
	               
	               
	               
	            },
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            ToCameraCT_SphereCoords: function () {
	                var _this = this;
	                if (_this.RotationX === 0 &&
	                    _this.RotationY === 0 &&
	                    _this.RotationZ === 0) {
	                    return keyword_null;
	                }
	                var coords = {} ;
	                var x = _this.RotationX;
	               
	               
	               
	               
	               
	               
	               
	               
	                var y = _this.RotationY;
	               
	               
	               
	               
	                var z = _this.RotationZ;
	               
	               
	               
	               
	               
	               
	               
	               
	                coords.lon = x * PositiveFixedAngleConvert;
	                coords.lat = y * PositiveFixedAngleConvert;
	                coords.rev = z * PositiveFixedAngleConvert;
	                return coords;
	            }
	        });
	
	        return ThreeDFormat;
	    }(StatefullBase));
	    Charts.ThreeDFormat = ThreeDFormat;
	
	    module.exports = Charts;
	}());


/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.floatingobjects.12.0.0.js.map