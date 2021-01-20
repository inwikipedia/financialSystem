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
var GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["OutlineColumn"] =
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
	    __webpack_require__(4);
	    module.exports = exports;
	
	}());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Sheets = __webpack_require__(2);
	    var Common = __webpack_require__(3);
	    var Commands = __webpack_require__(4).commands;
	    var _setCheckStatus = __webpack_require__(4).setCheckStatus;
	    var arrayHelper = Common._ArrayHelper, arrayHelper_getLength = arrayHelper._getLength;
	    var $ = Sheets.GC$;
	    var $_each = $.each;
	    var $_isEmptyObject = $.isEmptyObject;
	    var isNullOrUndefined = Common._Types._isNullOrUndefined;
	    var TRIANGLE_HEIGHT = 5;
	    var TRIANGLE_BASE = 6;
	    var CHECKBOX_RADIUS = 6;
	    var GAP = 3;
	    var IMAGE_WIDTH = 16;
	    var IMAGE_HEIGHT = 16;
	    var INDICATOR_IMAGE_WIDTH = 16;
	    var INDICATOR_IMAGE_HEIGHT = 16;
	    var keyword_undefined = void 0;
	
	   
	    
	    var defaultOptions = {
	        columnIndex: keyword_undefined,
	        showCheckBox: false,
	        showImage: false,
	        images: keyword_undefined,
	        showIndicator: true,
	        expandIndicator: keyword_undefined,
	        collapseIndicator: keyword_undefined,
	        maxLevel: 10
	    };
	   
	
	    function isCustomIndicator(options) {
	        return options.expandIndicator || options.collapseIndicator;
	    }
	
	    function isOutlineColumn(sheet, col) {
	        return sheet.outlineColumn && sheet.outlineColumn.options() && sheet.outlineColumn.options().columnIndex === col;
	    }
	
	    function drawCheckBox(ctx, options, rect) {
	        var x = options.x + rect.x;
	        var y = rect.y + rect.height / 2 - options.height / 2;
	        var h = options.height;
	        var w = options.width;
	        if (rect.x + rect.width < x + w) {
	            return;
	        }
	        ctx.save();
	        ctx.beginPath();
	        ctx.strokeStyle = 'black';
	        ctx.strokeRect(x, y, w, h);
	        ctx.fillStyle = "white";
	        ctx.fillRect(x, y, w, h);
	        if(options.checkStatus === 3 ) {
	            ctx.beginPath();
	            ctx.fillStyle = 'black';
	            ctx.rect(x + w / 5, y + h / 5, w - (2 / 5) * w, h - (2 / 5) * h);
	            ctx.fill();
	        } else if (options.checkStatus === true || options.checkStatus === 1 ) {
	            ctx.beginPath();
	            ctx.lineWidth = w / 5;
	            ctx.moveTo(x + w / 6, y + h / 2);
	            ctx.lineTo(x + 2 * w / 5, y + 5 / 7 * h);
	            ctx.lineTo(x + 5 / 6 * w, y + h / 6);
	            ctx.stroke();
	        }
	        ctx.restore();
	    }
	
	    function drawIndicator(ctx, options, rect, imageLoader) {
	        var collapsed = options.collapsed;
	        var x = options.x + rect.x;
	        var y = rect.y + rect.height / 2 - options.height / 2;
	        var h = options.height;
	        var w = options.width;
	        if (rect.x + rect.width < x + w) {
	            return;
	        }
	        if (collapsed) {
	            if (options.expandIndicator) {
	                drawImage(ctx, options.expandIndicator, options, rect, imageLoader);
	            } else {
	                ctx.save();
	                ctx.fillStyle = "black";
	                ctx.beginPath();
	                ctx.moveTo(x, y);
	                ctx.lineTo(x, y + h);
	                ctx.lineTo(x + w, y + h / 2);
	                ctx.fill();
	                ctx.restore();
	            }
	        } else if (options.collapseIndicator) {
	            drawImage(ctx, options.collapseIndicator, options, rect, imageLoader);
	        } else {
	            ctx.save();
	            ctx.fillStyle = "black";
	            ctx.beginPath();
	            ctx.moveTo(x, y + h);
	            ctx.lineTo(x + w, y + h);
	            ctx.lineTo(x + w, y);
	            ctx.fill();
	            ctx.restore();
	
	        }
	    }
	
	    function drawImage(ctx, image, options, rect, imageLoader) {
	        var x = options.x + rect.x;
	        var y = rect.y + rect.height / 2 - options.height / 2;
	        var w = options.width;
	        var h = options.height;
	        if (rect.x + rect.width < x + w) {
	            return;
	        }
	        if (image && image !== 'none' && imageLoader) {
	            try {
	                if (imageLoader._getState(image)) {
	                    var bkImg = imageLoader._getImage(image);
	                    ctx.drawImage(bkImg, x, y, w, h);
	                } else {
	                    imageLoader._addImage(image);
	                }
	            } catch (ex) {
	               
	            }
	        }
	
	    }
	
	    function updateModelIndicator(sheet, row, collapsed) {
	        var level = sheet.rowOutlines.getLevel(row);
	        if (isNullOrUndefined(collapsed)) {
	            collapsed = !sheet.rowOutlines.getCollapsed(row);
	        }
	        var expandRowOutlineCmd = {
	            cmd: 'expandRowOutline',
	            collapsed: collapsed,
	            index: row,
	            level: level + 1,
	            sheetName: sheet.name()
	        };
	        sheet._commandManager().execute(expandRowOutlineCmd);
	
	    }
	
	    function updateModelCheckStatus(sheet, row, col, status) {
	        if (isNullOrUndefined(status)) {
	            var s = sheet.outlineColumn.getCheckStatus(row);
	            if(typeof s === 'number') {
	                status = s === 1  ? 2  : 1;
	            } else {
	                status = !s;
	            }
	        }
	        var updateOutlineColumnCheckStatus = {
	            cmd: 'updateOutlineColumnCheckStatus',
	            row: row,
	            col: col,
	            status: status,
	            sheetName: sheet.name()
	        };
	        sheet._commandManager().execute(updateOutlineColumnCheckStatus);
	    }
	
	    function updateRowOutlines(rowOutlines, row, textIndent) {
	        var level = rowOutlines.getLevel(row);
	        if (textIndent !== level + 1) {
	            var dValue = textIndent - (level + 1);
	            for (var k = 0, e = Math.abs(dValue); k < e; k++) {
	                if (dValue > 0) {
	                    rowOutlines.group(row, 1);
	                } else {
	                    rowOutlines.ungroupRange(row, 1);
	                }
	            }
	
	        }
	    }
	
	    function updateModelIndicatorByRow(sheet, row, options, col, textIndent, left, storage) {
	        var showIndicator = getActualOption(options, 'showIndicator');
	        if (showIndicator) {
	            var zoomFactor = sheet.zoom();
	            var rowCount = sheet.getRowCount();
	            var collapsed = !!sheet.rowOutlines.isCollapsed(row + 1);
	            var indicatorWidth = TRIANGLE_HEIGHT * zoomFactor,
	                indicatorHeight = TRIANGLE_BASE * zoomFactor,
	                expandIndicator = null, collapseIndicator = null;
	            if (options.expandIndicator) {
	                expandIndicator = options.expandIndicator;
	                if (collapsed) {
	                    indicatorWidth = INDICATOR_IMAGE_WIDTH * zoomFactor;
	                    indicatorHeight = INDICATOR_IMAGE_HEIGHT * zoomFactor;
	                }
	            }
	            if (options.collapseIndicator) {
	                collapseIndicator = options.collapseIndicator;
	                if (!collapsed) {
	                    indicatorWidth = INDICATOR_IMAGE_WIDTH * zoomFactor;
	                    indicatorHeight = INDICATOR_IMAGE_HEIGHT * zoomFactor;
	                }
	            }
	            if (row < rowCount - 1) {
	                var styleNext = sheet.getStyle(row + 1, col);
	                if (styleNext && styleNext.textIndent > textIndent) {
	                    storage.indicator = {
	                        x: left.value + GAP * zoomFactor,
	                        y: -indicatorHeight / 2,
	                        width: indicatorWidth,
	                        height: indicatorHeight,
	                        collapsed: collapsed,
	                        collapseIndicator: collapseIndicator,
	                        expandIndicator: expandIndicator
	                    };
	                } else {
	                    delete storage.indicator;
	                }
	            }
	            left.value += GAP * 2 * zoomFactor + indicatorWidth;
	        } else {
	            delete storage.indicator;
	        }
	
	    }
	
	    function getActualOption(options, key) {
	        return isNullOrUndefined(options[key]) ? defaultOptions[key] : options[key];
	    }
	
	    function updateModelCheckBoxByRow(sheet, row, options, col, left, storage) {
	        var showCheckBox = isNullOrUndefined(options.showCheckBox) ? defaultOptions.showCheckBox : options.showCheckBox;
	        if (showCheckBox) {
	            var checkStatus = (isNullOrUndefined(storage.checkBox) || storage.checkBox === 1 ) ? false : storage.checkBox.checkStatus;
	            var zoomFactor = sheet.zoom();
	            storage.checkBox = {
	                x: left.value + GAP * zoomFactor,
	                y: -CHECKBOX_RADIUS * zoomFactor,
	                width: CHECKBOX_RADIUS * 2 * zoomFactor,
	                height: CHECKBOX_RADIUS * 2 * zoomFactor,
	                checkStatus: checkStatus
	            };
	            left.value += GAP * 2 * zoomFactor + CHECKBOX_RADIUS * 2 * zoomFactor;
	        } else {
	            delete storage.checkBox;
	        }
	    }
	
	    function updateModelImageByRow(sheet, textIndent, options, left, storage) {
	        var showImage = isNullOrUndefined(options.showImage) ? defaultOptions.showImage : options.showImage;
	        if (showImage) {
	            var images = options.images;
	            var zoomFactor = sheet.zoom();
	            if (images && images.length) {
	                var image = (textIndent > images.length - 1) ? images[images.length - 1] : images[textIndent];
	                var imageX = left.value + GAP * zoomFactor, imageY = 0;
	                storage.images = {
	                    image: image,
	                    x: imageX,
	                    y: imageY,
	                    width: IMAGE_WIDTH * zoomFactor,
	                    height: IMAGE_HEIGHT * zoomFactor
	                };
	                left.value += GAP * 2 * zoomFactor + IMAGE_WIDTH * zoomFactor;
	            }
	        } else {
	            delete storage.images;
	        }
	    }
	
	    function updateModelByRow(sheet, row, storage) {
	        var options = sheet.outlineColumn.options();
	        var col = options && options.columnIndex;
	        if (isNullOrUndefined(col)) {
	            return;
	        }
	        var left = {value: 0};
	        var textIndent = 0;
	        var style = sheet.getStyle(row, col);
	        if (style && style.textIndent) {
	            textIndent = style.textIndent;
	        }
	        if (row !== 0) {
	            var preLevel = sheet.rowOutlines.getLevel(row - 1);
	            if (textIndent - preLevel >= 3) {
	                textIndent = preLevel + 2;
	            }
	        }
	
	        left.value += 8 * textIndent;
	
	        updateRowOutlines(sheet.rowOutlines, row, textIndent);
	
	        updateModelIndicatorByRow(sheet, row, options, col, textIndent, left, storage);
	
	        updateModelCheckBoxByRow(sheet, row, options, col, left, storage);
	
	        updateModelImageByRow(sheet, textIndent, options, left, storage);
	
	        storage.cellContent = {
	            left: left.value,
	            x: left.value,
	            y: 0,
	            width: -left.value,
	            height: 0
	        };
	        return storage;
	    }
	
	
	   
	   
	    
	
	
	    var OutlineColumn = function (sheet) {
	        this._sheet = sheet;
	        this.outlineColumnOptions = {};
	        this._suspendCount = 0;
	    };
	    OutlineColumn.prototype = {
	        _getWidth: function (row, col) {
	            if (this._hasOutlineColumn(col)) {
	                return this._viewModel._storage[row].cellContent.left;
	            }
	            return null;
	        },
	       
	        
	        options: function (outlineColumnOptions) {
	            var self = this;
	            var options = self._outlineColumnOptions;
	            if (arrayHelper_getLength(arguments)) {
	                self._outlineColumnOptions = outlineColumnOptions;
	                self.refresh();
	                return self;
	            }
	            return options;
	        },
	       
	        
	        refresh: function () {
	            var sheet = this._sheet;
	            if (isNullOrUndefined(this._outlineColumnOptions) || isNullOrUndefined(this._outlineColumnOptions.columnIndex)) {
	                return;
	            }
	            if (this._suspendCount === 0) {
	                sheet.suspendPaint();
	                sheet.outlineColumn._viewModel.updateModel();
	                sheet.resumePaint();
	            }
	        },
	       
	        
	        setCheckStatus: function (row, checkStatus) {
	            var col = this._outlineColumnOptions.columnIndex;
	            if (isNullOrUndefined(col)) {
	                return;
	            }
	            updateModelCheckStatus(this._sheet, row, col, checkStatus);
	        },
	        _setCheckStatusAll: function (status) {
	            this._sheet.outlineColumn._viewModel.setAllTiemCheckStatus(status);
	            this.refresh();
	        },
	       
	        
	        getCheckStatus: function (row) {
	            if (arrayHelper_getLength(arguments)) {
	                return this._sheet.outlineColumn._viewModel.getCheckStatus(row);
	            }
	            var result = [];
	            var rowCount = this._sheet.getRowCount();
	            for (row = 0; row < rowCount; row++) {
	                result[row] = this._sheet.outlineColumn._viewModel.getCheckStatus(row);
	            }
	            return result;
	        },
	       
	        
	        setCollapsed: function (row, collapsed) {
	            updateModelIndicator(this._sheet, row, collapsed);
	        },
	       
	        
	        getCollapsed: function (row) {
	            if (arrayHelper_getLength(arguments)) {
	                return this._sheet.outlineColumn._viewModel.getCollapsed(row);
	            }
	            var result = [];
	            var rowCount = this._sheet.getRowCount();
	            for (row = 0; row < rowCount; row++) {
	                result[row] = this._sheet.outlineColumn._viewModel.getCollapsed(row);
	            }
	            return result;
	        },
	        _isOutlineColumn: function (columnIndex) {
	            return this._outlineColumnOptions && this._outlineColumnOptions.columnIndex === columnIndex;
	        },
	
	        _hasOutlineColumn: function () {
	            return this._outlineColumnOptions && !isNullOrUndefined(this._outlineColumnOptions.columnIndex);
	        },
	        _suspend: function () {
	            this._suspendCount++;
	        },
	        _resume: function () {
	            if (this._suspendCount > 0) {
	                this._suspendCount--;
	            }
	            if (this._suspendCount === 0) {
	                this.refresh();
	            }
	        },
	        _insertRows: function (row, count) {
	            this._sheet.outlineColumn._viewModel.insertRows(row, count);
	        },
	        _getDefaultOptions: function () {
	            return defaultOptions;
	        },
	        _getDrawingConst: function () {
	            return {
	                TRIANGLE_HEIGHT: TRIANGLE_HEIGHT,
	                TRIANGLE_BASE: TRIANGLE_BASE,
	                CHECKBOX_RADIUS: CHECKBOX_RADIUS,
	                GAP: GAP,
	                IMAGE_WIDTH: IMAGE_WIDTH,
	                IMAGE_HEIGHT: IMAGE_HEIGHT,
	                INDICATOR_IMAGE_WIDTH: INDICATOR_IMAGE_WIDTH,
	                INDICATOR_IMAGE_HEIGHT: INDICATOR_IMAGE_HEIGHT
	            };
	        },
	        _checkStatusForFromJson: function (data) {
	            var self = this;
	            for (var index in data) {
	                if (data.hasOwnProperty(index)) {
	                    var rowStorage = self._viewModel._storage[index] = self._viewModel._storage[index] || {};
	                    rowStorage.checkBox = {
	                        checkStatus: data[index].checked
	                    };
	                }
	            }
	        },
	        _internalSetCheckStatus: function (row, checkStatus) {
	            var col = this._outlineColumnOptions.columnIndex;
	            if(isNullOrUndefined(col)) {
	                return;
	            }
	            _setCheckStatus(this._sheet, row, col, checkStatus);
	        },
	        _getStorage: function () {
	            return this._viewModel._storage;
	        }
	    };
	
	   
	    var OutlineColumnModel = (function () {
	        function OutlineColumnModel(sheet) {
	            var self = this;
	            self._sheet = sheet;
	            self._storage = {};
	        }
	
	        var proto = {
	            updateIndicatorCollapsed: function (row, collapsed) {
	                var self = this;
	                if (isNullOrUndefined(self._storage[row]) || isNullOrUndefined(self._storage[row].indicator)) {
	                    return;
	                }
	                self._storage[row].indicator.collapsed = collapsed;
	            },
	            updateCheckStatus: function (row, checkStatus) {
	                var self = this;
	                self._backupOutlineColumn(row);
	                if (isNullOrUndefined(self._storage[row])) {
	                    return;
	                }
	                self._storage[row].checkBox.checkStatus = checkStatus;
	            },
	            setAllTiemCheckStatus: function (checkStatus) {
	                var self = this, storage = self._storage;
	                for(var item in storage) {
	                    if(storage.hasOwnProperty(item)) {
	                        storage[item].checkBox.checkStatus = checkStatus;
	                    }
	                }
	            },
	            getCheckStatus: function (row) {
	                var self = this;
	                if (isNullOrUndefined(self._storage[row]) || isNullOrUndefined(self._storage[row].checkBox)) {
	                    return null;
	                }
	                return self._storage[row].checkBox.checkStatus;
	            },
	            getCollapsed: function (row) {
	                var self = this;
	                if (isNullOrUndefined(self._storage[row]) || isNullOrUndefined(self._storage[row].indicator)) {
	                    return false;
	                }
	                return self._storage[row].indicator.collapsed;
	            },
	            updateModel: function () {
	                var self = this;
	                var sheet = self._sheet;
	                var rowCount = sheet.getRowCount();
	                sheet.rowOutlines.direction(0);
	                for (var row = 0; row < rowCount; row++) {
	                    self._storage[row] = self._storage[row] || {};
	                    updateModelByRow(sheet, row, self._storage[row]);
	                }
	            },
	            insertRows: function (row, count) {
	                var sheet = this._sheet;
	                var options = sheet.outlineColumn.options();
	                if (isNullOrUndefined(options)) {
	                    return;
	                }
	                var col = options.columnIndex;
	                if (isNullOrUndefined(col)) {
	                    return;
	                }
	                var style = sheet.getStyle(row - 1, col);
	                var textIndent = 0;
	                if (style && style.textIndent) {
	                    textIndent = style.textIndent;
	                }
	                sheet.getRange(row, col, count, 1).textIndent(textIndent);
	            },
	            _addOutlineColumnItemInfo: function (data, row) {
	                var item = this._storage[row];
	                if (item && !data[row]) {
	                    var checkBox = item.checkBox;
	                    data[row] = {
	                        checked: checkBox && checkBox.checkStatus
	                    };
	                }
	            },
	            _getOutlineColumnStatusInfo: function (data) {
	                var self = this, storage = this._storage;
	                for (var row in storage) {
	                    if (storage.hasOwnProperty(row)) {
	                        self._addOutlineColumnItemInfo(data, row);
	                    }
	                }
	            },
	            _setOutlineColumnStatusImp: function (data) {
	                var storage = this._storage;
	                for (var index in data) {
	                    if (!isNullOrUndefined(data[index].checked)) {
	                        storage[index].checkBox.checkStatus = data[index].checked;
	                    }
	                }
	            },
	            _getChangesInfo: function () {
	                var changes = this._sheet._modelManager._changes;
	                if (changes) {
	                    if (!changes._outlineColumnChanges) {
	                        changes._outlineColumnChanges = {items: {}};
	                    }
	                    return changes._outlineColumnChanges;
	                }
	                return keyword_undefined;
	            },
	            _backupOutlineColumn: function (row) {
	                var self = this, changes = self._getChangesInfo();
	                if (changes && !changes.all) {
	                    if (isNullOrUndefined(row)) {
	                        changes.all = true;
	                        self._getOutlineColumnStatusInfo(changes.items);
	                    } else {
	                        self._addOutlineColumnItemInfo(changes.items, row);
	                    }
	                }
	            },
	            _restoreOutlineColumn: function (data) {
	                this._setOutlineColumnStatusImp(data.items);
	            }
	        };
	
	        $.extend(OutlineColumnModel.prototype, proto);
	        return OutlineColumnModel;
	    })();
	   
	
	
	    var _SheetModelManager = Sheets._SheetModelManager;
	
	    $.extend(_SheetModelManager.prototype, {
	        _restoreOutlineColumn: function (outlineColumnChanges) {
	            var self = this, outlineColumnModel = self._outlineColumn._viewModel;
	            outlineColumnModel.updateModel();
	            if (outlineColumnChanges) {
	                outlineColumnModel._restoreOutlineColumn(outlineColumnChanges);
	            }
	            self._sheet._invalidate();
	        }
	    });
	
	    _SheetModelManager._registerFeature('outlineColumn', {
	        init: function () {
	            var self = this, sheet = self._sheet;
	            self._outlineColumn = new OutlineColumn(sheet);
	            self._outlineColumn._viewModel = new OutlineColumnModel(sheet);
	        },
	        undo: function (changes) {
	            var outlineColumnChanges = changes._outlineColumnChanges;
	            if (outlineColumnChanges) {
	                this._restoreOutlineColumn(outlineColumnChanges);
	            }
	        }
	    });
	
	   
	    var outlineColumnAdapter = {
	        init: function () {
	            var sheet = this;
	           
	            
	            sheet.outlineColumn = sheet._modelManager._outlineColumn;
	        },
	       
	       
	       
	       
	       
	        toJson: function (data) {
	            function isDefaultValue(propertyName, value) {
	                var defaultValue = defaultOptions[propertyName];
	                return defaultValue === value;
	            }
	
	            var outlineColumnOptions = this.outlineColumn._outlineColumnOptions;
	            var storage = this.outlineColumn._viewModel._storage;
	            if (!isNullOrUndefined(outlineColumnOptions)) {
	                var dataDic = {};
	                var currentValue;
	                $_each(defaultOptions, function (p) {
	                    currentValue = outlineColumnOptions[p];
	                    if (!isNullOrUndefined(currentValue) && !isDefaultValue(p, currentValue)) {
	                        dataDic[p] = currentValue;
	                    }
	                });
	                var tempData = {};
	                if (outlineColumnOptions.showCheckBox) {
	                    for (var index in storage) {
	                        if (storage.hasOwnProperty(index)) {
	                            var checkStatus = storage[index].checkBox.checkStatus;
	                            if (checkStatus) {
	                                tempData[index] = {
	                                    checked: checkStatus
	                                };
	                            }
	                        }
	                    }
	                }
	                if (!$_isEmptyObject(tempData)) {
	                    dataDic.data = tempData;
	                }
	                data.outlineColumnOptions = dataDic;
	            }
	        },
	        fromJson: function (sheetSettings) {
	            var outlineColumnOptions = sheetSettings.outlineColumnOptions, self = this;
	            if (outlineColumnOptions) {
	                outlineColumnOptions._sheet = self;
	                var outlineColumnData = outlineColumnOptions.data;
	                if (outlineColumnData) {
	                    var options = {};
	                    for (var key in outlineColumnOptions) {
	                        if (key !== "data") {
	                            options[key] = outlineColumnOptions[key];
	                        }
	                    }
	                    this.outlineColumn._checkStatusForFromJson(outlineColumnData);
	                }
	                this.outlineColumn.options(isNullOrUndefined(options) ? outlineColumnOptions : options);
	                this.outlineColumn.refresh();
	            }
	        },
	
	        onLayoutChanged: function (args) {
	            var self = this, outlineColumn = self.outlineColumn, changeType = args.changeType, count = args.rowCount, row = args.row;
	            if (changeType === 'addRows') {
	                outlineColumn._viewModel._backupOutlineColumn();
	                outlineColumn._insertRows(row, count);
	                outlineColumn.refresh();
	            } else if (changeType === 'deleteRows') {
	                outlineColumn._viewModel._backupOutlineColumn();
	                outlineColumn.refresh();
	            } else if (changeType === 'zoomSheet') {
	                outlineColumn.refresh();
	            } else if (changeType === 'invalidateLayout') { 
	                if ((outlineColumn._viewModel._storage)
	                    && !$_isEmptyObject(outlineColumn._viewModel._storage)
	                    && (self.rowOutlines.items)
	                    && !$_isEmptyObject(self.rowOutlines.items)) {
	                    var rowItems = self.rowOutlines.items;
	                    for (var index in rowItems) {
	                        if (rowItems.hasOwnProperty(index)) {
	                            outlineColumn._viewModel.updateIndicatorCollapsed(parseInt(index), self.rowOutlines.isCollapsed(parseInt(index) + 1));
	                        }
	                    }
	                }
	            }
	        },
	        sortRangeChanged: function (options) {
	            var outlineColumn = this.outlineColumn, column = options.column, columnCount = options.columnCount;
	            var outlineColumnIndex = column;
	            while (outlineColumn._isOutlineColumn(outlineColumnIndex) && outlineColumnIndex <= column + columnCount) {
	                outlineColumn.refresh();
	                outlineColumnIndex += 1;
	            }
	        }
	    };
	    Sheets.Worksheet._registerFeature('outlineColumn', outlineColumnAdapter);
	
	    var outlineColumnBaseCellTypeAdapter = {
	        paintCellPadding: function (args) {
	            var cellRect = args.options.rect;
	            var sheet = args.options.context.sheet;
	            var context = args.options.context;
	            var row = context.row;
	            var col = context.col;
	            var ctx = args.ctx;
	            if (isOutlineColumn(sheet, col) && cellRect.width > 0 && cellRect.height > 0) {
	                var storage = sheet.outlineColumn._viewModel._storage[row];
	                if (storage) {
	                    ctx.save();
	                    if (storage.indicator) {
	                        drawIndicator(ctx, storage.indicator, cellRect, context.imageLoader);
	                    }
	                    if (storage.checkBox) {
	                        drawCheckBox(ctx, storage.checkBox, cellRect);
	                    }
	                    if (storage.images) {
	                        drawImage(ctx, storage.images.image, storage.images, cellRect, context.imageLoader);
	                    }
	                    ctx.restore();
	                    if (storage.cellContent) {
	                        cellRect.x += storage.cellContent.left;
	                        cellRect.width -= storage.cellContent.left;
	                    }
	                }
	            }
	
	        },
	        getCellPaddingRect: function (args) {
	            var cellRect = args.options.rect;
	            var sheet = args.options.context.sheet;
	            var context = args.options.context;
	            var row = context.row;
	            var col = context.col;
	            if (isOutlineColumn(sheet, col) && cellRect.width > 0 && cellRect.height > 0) {
	                var storage = sheet.outlineColumn._viewModel._storage[row];
	                if (storage && storage.cellContent) {
	                    cellRect.x += storage.cellContent.left;
	                    cellRect.width -= storage.cellContent.left;
	                }
	            }
	        },
	        getCellPaddingHitInfo: function (args) {
	            var sheet = args.context.sheet;
	            var col = args.context.col;
	            var row = args.context.row;
	            var x = args.x;
	            var y = args.y;
	            var rect = args.cellRect;
	            var outlineColumn = sheet.outlineColumn;
	            args.paddingHitInfo = null;
	            if (outlineColumn && outlineColumn._outlineColumnOptions) {
	                var storage = outlineColumn._viewModel._storage[row];
	                var columnIndex = outlineColumn._outlineColumnOptions.columnIndex;
	                rect = rect.clone();
	                while (col > columnIndex) {
	                    col--;
	                    rect.x -= sheet.getColumnWidth(col);
	                }
	                if (storage) {
	                    var blankOffsetRight, signX;
	                    if (storage.indicator) {
	                        blankOffsetRight = storage.indicator.x;
	                        signX = storage.indicator.x + rect.x;
	                        if (x >= signX && x < (signX + storage.indicator.width)) {
	                            args.paddingHitInfo = {
	                                x: x,
	                                y: y,
	                                row: row,
	                                col: col,
	                                outlineColumnHitInfo: {indicator: true}
	                            };
	                        }
	                    }
	                    if (storage.checkBox) {
	                        if (!blankOffsetRight) {
	                            blankOffsetRight = storage.checkBox.x;
	                        }
	                        signX = storage.checkBox.x + rect.x;
	                        if (x >= signX && x < (signX + storage.checkBox.width)) {
	                            args.paddingHitInfo = {
	                                x: x,
	                                y: y,
	                                row: row,
	                                col: col,
	                                outlineColumnHitInfo: {checkBox: true}
	                            };
	                        }
	
	                    }
	                    if (storage.images) {
	                        if (!blankOffsetRight) {
	                            blankOffsetRight = storage.images.x;
	                        }
	                        signX = storage.images.x + rect.x;
	                        if (x >= signX && x < (signX + storage.images.width)) {
	                            args.paddingHitInfo = {
	                                x: x,
	                                y: y,
	                                row: row,
	                                col: col,
	                                outlineColumnHitInfo: {image: true}
	                            };
	                        }
	                    }
	                    if (blankOffsetRight && x >= rect.x && x < (rect.x + blankOffsetRight)) {
	                        args.paddingHitInfo = {
	                            x: x,
	                            y: y,
	                            row: row,
	                            col: col,
	                            outlineColumnHitInfo: {blank: true}
	                        };
	                    }
	                }
	            }
	
	        },
	        processMouseDownOnCellPadding: function (hitInfo) {
	            var sheet = hitInfo.sheet;
	            var row = hitInfo.row;
	            var col = hitInfo.col;
	
	            var outlineColumnHitInfo = hitInfo.outlineColumnHitInfo;
	            if (isNullOrUndefined(outlineColumnHitInfo)) {
	                return;
	            }
	            if (outlineColumnHitInfo.indicator) {
	                updateModelIndicator(sheet, row);
	            } else if (outlineColumnHitInfo.checkBox) {
	                updateModelCheckStatus(sheet, row, col);
	            } else if (outlineColumnHitInfo.image) {
	               
	            } else if (outlineColumnHitInfo.blank) {
	               
	            }
	        },
	        getOutlineColumnOffset: function (args) {
	            var sheet = args.context.sheet;
	            var col = args.context.col;
	            if (isOutlineColumn(sheet, col)) {
	                var options = sheet.outlineColumn.options();
	                if (getActualOption(options, 'showIndicator')) {
	                    args.value += GAP;
	                    if (isCustomIndicator(options)) {
	                        args.value += INDICATOR_IMAGE_WIDTH;
	                    } else {
	                        args.value += TRIANGLE_HEIGHT;
	                    }
	                    args.value += GAP;
	                }
	                if (getActualOption(options, 'showCheckBox')) {
	                    args.value += GAP;
	                    args.value += CHECKBOX_RADIUS * 2;
	                    args.value += GAP;
	                }
	                if (getActualOption(options, 'showImage')) {
	                    args.value += GAP;
	                    args.value += IMAGE_WIDTH;
	                    args.value += GAP;
	                }
	               
	            }
	        }
	    };
	    Sheets.CellTypes.Base._registerFeature('outlineColumn', outlineColumnBaseCellTypeAdapter);
	   
	
	   
	    var ssAdapter = {
	        init: function () {
	            Commands._initOutlineColumnDefaultCommands(this.commandManager());
	        }
	    };
	    Sheets.Workbook._registerFeature('outlineColumn', ssAdapter);
	   
	
	
	    module.exports = {
	        OutlineColumn: OutlineColumn
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

	(function () {
	    'use strict';
	
	    var Sheets = __webpack_require__(2),
	        Common = __webpack_require__(3),
	        $ = Sheets.GC$,
	        Commands = Sheets.Commands,
	        ActionBase = Commands.ActionBase;
	    var isNullOrUndefined = Common._Types._isNullOrUndefined;
	    var INCREASE_CELLINDENT = 'increaseCellIndent',
	        DECREASE_CELLINDENT = 'decreaseCellIndent',
	        UPDATE_OUTLINECOLUMN_CHECKSTATUS = 'updateOutlineColumnCheckStatus';
	    var OUTLINECOLUMN_CHECKSTATUS = 'outlineColumnCheckStatus';
	    var executeCommand = Commands._executeCommand;
	
	    function canExecuteIncreaseOrDecreaseCellIndent(sheet, isAdd, changingRows, changingCols) {
	        return getChangingRows(sheet, isAdd, changingRows, changingCols);
	    }
	
	    function getChangingRows(sheet, isAdd, changingRows, changingCols) {
	        var colIndex = isNullOrUndefined(changingCols) ? sheet.getActiveColumnIndex() : changingCols;
	        if (!sheet.outlineColumn._isOutlineColumn(colIndex)) {
	            return null;
	        }
	        var variable = isAdd ? 1 : -1;
	        var rowIndex = sheet.getActiveRowIndex();
	        var rowCount = sheet.getSelections()[0].rowCount;
	        var i, canExcute = true;
	        if(isNullOrUndefined(changingRows)) {
	            changingRows = {};
	            canExcute = false;
	            for (i = rowIndex; i < rowCount + rowIndex; i++) {
	                if (i === 0) {
	                    continue;
	                }
	                var level = sheet.rowOutlines.getLevel(i);
	                if (isAdd) {
	                    var previousRowLevel = sheet.rowOutlines.getLevel(i - 1);
	                    if (level > previousRowLevel && !changingRows[i - 1]) {
	                        continue;
	                    }
	                }
	                var currentLevel = level + variable;
	                var options = sheet.outlineColumn.options();
	                var maxLevel = isNullOrUndefined(options.maxLevel) ? sheet.outlineColumn._getDefaultOptions().maxLevel : options.maxLevel;
	                if (!((maxLevel && (currentLevel + 1) > maxLevel) || currentLevel + 1 < 0)) {
	                    changingRows[i] = {row: i, original: level + 1, current: currentLevel + 1};
	                    canExcute = true;
	                }
	            }
	        }
	        if (canExcute) {
	            return changingRows;
	        }
	        return null;
	    }
	
	    function increaseOrDecreaseCellIndent(sheet, isAdd, oldChangingRows, oldChangingCols) {
	        var changingRows = getChangingRows(sheet, isAdd, oldChangingRows, oldChangingCols);
	        if (!changingRows) {
	            return null;
	        }
	        var colIndex = isNullOrUndefined(oldChangingCols) ? sheet.getActiveColumnIndex() : oldChangingCols;
	        sheet.outlineColumn._suspend();
	        sheet.suspendPaint();
	        for (var key in changingRows) {
	            if (Object.prototype.hasOwnProperty.call(changingRows, key)) {
	                var obj = changingRows[key];
	                sheet.getCell(obj.row, colIndex).textIndent(obj.current);
	            }
	        }
	        sheet.resumePaint();
	        sheet.outlineColumn._resume();
	    }
	
	    function setStatus(sheet, row, col, status) {
	        var parent = 0;
	        var nextLevel = 0;
	        var nextOutlineInfo;
	        var level = sheet.rowOutlines.getLevel(row);
	        sheet.outlineColumn._viewModel.updateCheckStatus(row, status);
	        var outlineInfo = row <= sheet.getRowCount() - 2 ? sheet.rowOutlines.find(row + 1, level + 1) : null;
	        if (outlineInfo !== null && status !== null) {
	            for (var r = outlineInfo.start; r < outlineInfo.end + 1; r++) {
	                sheet.outlineColumn._viewModel.updateCheckStatus(r, status);
	            }
	        }
	        outlineInfo = sheet.rowOutlines.find(row, level);
	        while (outlineInfo !== null && outlineInfo.parent !== null) {
	            if (outlineInfo.start > 0) {
	                parent = outlineInfo.start - 1;
	                nextLevel = sheet.rowOutlines.getLevel(parent);
	                sheet.outlineColumn._viewModel.updateCheckStatus(parent, status);
	                nextOutlineInfo = sheet.rowOutlines.find(parent + 1, nextLevel + 1);
	                for (r = nextOutlineInfo.start; r < nextOutlineInfo.end + 1; r++) {
	                    var nextStatus = sheet.outlineColumn._viewModel._storage[r].checkBox.checkStatus;
	                    if (nextStatus !== status) {
	                        var s = (typeof nextStatus === 'number' && typeof status === 'number') ? 3 : false;
	                        sheet.outlineColumn._viewModel.updateCheckStatus(parent, s);
	                        break;
	                    }
	                }
	                if (r === nextOutlineInfo.end + 1 && status === true) {
	                    sheet.outlineColumn._viewModel.updateCheckStatus(parent, true);
	                }
	            }
	            outlineInfo = outlineInfo.parent;
	        }
	    }
	
	    var IncreaseCellIndentUndoAction = (function (_super) {
	        $.inherit(IncreaseCellIndentUndoAction, _super);
	        function IncreaseCellIndentUndoAction(sheet, command) {
	            _super.call(this);
	            this._sheet = sheet;
	            this._command = command;
	        }
	
	        var prototype = {
	            canExecute: function () {
	                return canExecuteIncreaseOrDecreaseCellIndent(this._sheet, true, this._command.changingRows, this._command.changingColumns);
	            },
	            canUndo: function () {
	                return true;
	            },
	            execute: function () {
	                if (this.canExecute()) {
	                    var sheet = this._sheet;
	                    sheet._modelManager.startTransaction();
	                    sheet.outlineColumn._viewModel._backupOutlineColumn();
	                    increaseOrDecreaseCellIndent(this._sheet, true, this._command.changingRows, this._command.changingColumns);
	                    var changesKey = Commands._getChangesKey(sheet.name());
	                    this._command[changesKey] = sheet._modelManager.endTransaction();
	                    return true;
	                }
	                return false;
	            },
	            undo: function () {
	                var self = this;
	                var sheet = self._sheet,
	                    changesKey = Commands._getChangesKey(sheet.name()),
	                    changes = self._command[changesKey];
	                sheet._modelManager.undo(changes);
	                return true;
	            }
	        };
	
	        $.extend(IncreaseCellIndentUndoAction.prototype, prototype);
	
	        return IncreaseCellIndentUndoAction;
	    })(ActionBase);
	    var DecreaseCellIndentUndoAction = (function (_super) {
	        $.inherit(DecreaseCellIndentUndoAction, _super);
	        function DecreaseCellIndentUndoAction(sheet, command) {
	            _super.call(this);
	            this._sheet = sheet;
	            this._command = command;
	        }
	
	        var prototype = {
	            canExecute: function () {
	                return canExecuteIncreaseOrDecreaseCellIndent(this._sheet, false, this._command.changingRows, this._command.changingColumns);
	            },
	            canUndo: function () {
	                return true;
	            },
	            execute: function () {
	                if (this.canExecute()) {
	                    var sheet = this._sheet;
	                    sheet._modelManager.startTransaction();
	                    sheet.outlineColumn._viewModel._backupOutlineColumn();
	                    increaseOrDecreaseCellIndent(sheet, false, this._command.changingRows, this._command.changingColumns);
	                    var changesKey = Commands._getChangesKey(sheet.name());
	                    this._command[changesKey] = sheet._modelManager.endTransaction();
	                    return true;
	                }
	                return false;
	            },
	            undo: function () {
	                var self = this;
	                var sheet = self._sheet,
	                    changesKey = Commands._getChangesKey(sheet.name()),
	                    changes = self._command[changesKey];
	                sheet._modelManager.undo(changes);
	                return true;
	            }
	        };
	        $.extend(DecreaseCellIndentUndoAction.prototype, prototype);
	
	        return DecreaseCellIndentUndoAction;
	    })(ActionBase);
	    var UpdateOutlineColumnCheckStatusUndoAction = (function (_super) {
	        $.inherit(UpdateOutlineColumnCheckStatusUndoAction, _super);
	        function UpdateOutlineColumnCheckStatusUndoAction(sheet, command) {
	            _super.call(this);
	            this._sheet = sheet;
	            this._command = command;
	        }
	
	        var prototype = {
	            canExecute: function () {
	                return true;
	            },
	            canUndo: function () {
	                return true;
	            },
	            execute: function () {
	                var self = this;
	                var sheet = self._sheet, command = self._command;
	                var row = command.row, col = command.col, status = command.status;
	                sheet._modelManager.startTransaction();
	                setStatus(sheet, row, col, status);
	                sheet.outlineColumn.refresh();
	                var changesKey = Commands._getChangesKey(sheet.name());
	                command[changesKey] = sheet._modelManager.endTransaction();
	                return true;
	            },
	            undo: function () {
	                var self = this;
	                var sheet = self._sheet,
	                    changesKey = Commands._getChangesKey(sheet.name()),
	                    changes = self._command[changesKey];
	                sheet._modelManager.undo(changes);
	                sheet.outlineColumn.refresh();
	                return true;
	            }
	        };
	        $.extend(UpdateOutlineColumnCheckStatusUndoAction.prototype, prototype);
	
	        return UpdateOutlineColumnCheckStatusUndoAction;
	    })(ActionBase);
	
	    Commands[INCREASE_CELLINDENT] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            options.cmd = INCREASE_CELLINDENT;
	            return executeCommand(context, IncreaseCellIndentUndoAction, options, isUndo);
	        }
	    };
	
	    Commands[DECREASE_CELLINDENT] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            options.cmd = DECREASE_CELLINDENT;
	            return executeCommand(context, DecreaseCellIndentUndoAction, options, isUndo);
	        }
	    };
	
	    Commands[UPDATE_OUTLINECOLUMN_CHECKSTATUS] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, UpdateOutlineColumnCheckStatusUndoAction, options, isUndo);
	        }
	    };
	    Commands._initOutlineColumnDefaultCommands = function (commands) {
	        var isMac = Sheets._util._isMacOS(), ctrl = !isMac, meta = isMac;
	        commands.register(INCREASE_CELLINDENT, Commands[INCREASE_CELLINDENT], 221 , ctrl, false, true, meta);
	        commands.register(DECREASE_CELLINDENT, Commands[DECREASE_CELLINDENT], 219 , ctrl, false, true, meta);
	        commands.register(UPDATE_OUTLINECOLUMN_CHECKSTATUS, Commands[UPDATE_OUTLINECOLUMN_CHECKSTATUS]);
	    };
	
	    module.exports = {commands: Commands, outlineColumnCheckStatus: OUTLINECOLUMN_CHECKSTATUS, setCheckStatus: setStatus};
	
	}());

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.outlinecolumn.12.0.0.js.map