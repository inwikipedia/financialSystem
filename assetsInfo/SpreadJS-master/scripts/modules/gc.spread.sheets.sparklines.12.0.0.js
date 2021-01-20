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
var GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["Sparklines"] =
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
	
	    module.exports = __webpack_require__(1);
	    __webpack_require__(6);
	
	}());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var Core = __webpack_require__(2);
	    var Common = __webpack_require__(3);
	    var Calc = __webpack_require__(4);
	    var SparklineEx_Module = __webpack_require__(5);
	
	    var exports = {};
	
	    var GC$ = Core.GC$;
	    var isEmptyObject = GC$.isEmptyObject;
	    var Worksheet = Core.Worksheet;
	    var _SparseArray = Core._SparseArray;
	    var createRange = Core._createRange;
	    var isNullOrUndefined = Common._Types._isNullOrUndefined;
	    var arrayHelper = Common._ArrayHelper;
	    var ArrayHelper_remove = arrayHelper._remove;
	    var ArrayHelper_getLength = arrayHelper._getLength;
	    var ArrayHelper_contains = arrayHelper._contains;
	    var __invalidValuePlaceHolder = SparklineEx_Module.__invalidValuePlaceHolder;
	    var SparklineRender = SparklineEx_Module.SparklineRender;
	
	    var keyword_null = null, keyword_undefined = void 0, Math_max = Math.max, Number_MAX_VALUE = Number.MAX_VALUE;
	
	    var _SheetModelManager = Core._SheetModelManager;
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	    GC$.extend(_SheetModelManager.prototype, {
	        _backupSparklines: function (type) {
	            var self = this, changes = self._changes, args = arguments[1];
	            if(changes) {
	                if (!changes._originalSparklines) {
	                    changes._originalSparklines = [];
	                }
	                var originalInfo = {
	                    type: type
	                };
	                switch (type) {
	
	                    case 0 :
	                        var backupOptions = args, sparkline;
	                        if(backupOptions && backupOptions.sparkline) {
	                            sparkline = backupOptions.sparkline;
	                        } else {
	                            sparkline = keyword_null;
	                        }
	                        originalInfo._changeInfo = {
	                            row : backupOptions.row,
	                            col : backupOptions.col,
	                            sparkline : sparkline
	                        };
	                        break;
	                    case 12 :
	                    case 1 :
	                    case 2 :
	                    case 3 :
	                    case 4 :
	                    case 5 :
	                    case 6 :
	                    case 7 :
	                    case 8 :
	                    case 9 :
	                    case 10 :
	                    case 11 :
	                    case 13 :
	                    case 14 :
	                    case 15 : 
	                    case 16 :
	                        originalInfo._changeInfo = args;
	                        break;
	                }
	                changes._originalSparklines.push(originalInfo);
	            }
	        },
	        _restoreSparklineByChange : function (originalSparkline) {
	            var self = this, changeOption = originalSparkline._changeInfo, sparkline;
	            switch (originalSparkline.type) {
	                case 12 :
	                   
	                    if(changeOption.sparkline) {
	                        changeOption.sparkline.row = changeOption.row;
	                        changeOption.sparkline.column = changeOption.col;
	                        self._sparklineGroupManager._updateCache(changeOption.row, changeOption.col, changeOption.sparkline);
	                       
	                       
	                       
	                    } else {
	                        self._sparklineGroupManager._updateCache(changeOption.row, changeOption.col, keyword_null);
	                    }
	
	                    break;
	                case 0 :
	                   
	                    self._sparklineGroupManager._updateCache(changeOption.row, changeOption.col, changeOption.sparkline);
	                    if (changeOption.sparkline && !self._sparklineGroupManager.contains(changeOption.sparkline.group())) {
	                        self._sparklineGroupManager.add(changeOption.sparkline.group());
	                    }
	                   
	                    break;
	                case 1 :
	                    var row, col, sp, len = ArrayHelper_getLength(changeOption);
	                    for(var i = 0; i < len; i++) {
	                        row = changeOption[i].row;
	                        col = changeOption[i].col;
	                        sp = self._sparklineGroupManager._getCacheValue(row, col);
	                        if(i === 0 && sp._group.count() === len) {
	                            self._sparklineGroupManager.remove(sp._group);
	                        }
	                        this._sparklineGroupManager.add(sp.group(changeOption[i].group)._group);
	                    }
	                    break;
	                case 2 :
	                    var sparkLineList = [];
	                    for(var index = 0; index < ArrayHelper_getLength(changeOption); index++) {
	                        sparkLineList.push(self._sparklineGroupManager._getCacheValue(changeOption[index].row, changeOption[index].col));
	                    }
	                    self._sparklineGroupManager._sheet.groupSparkline(sparkLineList);
	                    break;
	                case 3 :
	                    sparkline = self._sparklineGroupManager._getCacheValue(changeOption.row, changeOption.col);
	                    sparkline.sparklineType(changeOption.sparklineType);
	                    break;
	                case 4 :
	                    sparkline = self._sparklineGroupManager._getCacheValue(changeOption.row, changeOption.col);
	                    sparkline.setting(changeOption.setting);
	                    break;
	                case 5 :
	                   
	                    changeOption.sparkline.data(changeOption.data);
	                    break;
	                case 15 :
	                    sparkline = self._sparklineGroupManager._getCacheValue(changeOption.row, changeOption.col);
	                    sparkline.dataSheetName(changeOption.dataSheetName);
	                    break;
	                case 6 :
	                    sparkline = self._sparklineGroupManager._getCacheValue(changeOption.row, changeOption.col);
	                    sparkline.dataOrientation(changeOption.dataOrientation);
	                    break;
	                case 7 :
	                    sparkline = self._sparklineGroupManager._getCacheValue(changeOption.row, changeOption.col);
	                    sparkline.displayDateAxis(changeOption.displayDateAxis);
	                    break;
	                case 8 :
	                    var range, rangeInfo = changeOption.rangeInfo;
	                    if(rangeInfo) {
	                        range = createRange(rangeInfo.row, rangeInfo.col, rangeInfo.rowCount, rangeInfo.colCount);
	                    } else {
	                        range = rangeInfo;
	                    }
	                    changeOption.group.dateAxisData(range);
	                    break;
	                case 16 :
	                    changeOption.group.dateAxisDataSheetName(changeOption.dateAxisDataSheetName);
	                    break;
	                case 9 :
	                    changeOption.group.dateAxisOrientation(changeOption.dateAxisOrientation);
	                    break;
	                case 10 :
	                    var oldList = changeOption.group._innerList;
	                    oldList.forEach(function (item) {
	                        self._sparklineGroupManager._removeExternalSparkline(item);
	                    });
	
	                    changeOption.group._innerList = changeOption._innerList;
	                    var newList = changeOption.group._innerList;
	                    for (var j = 0; j < ArrayHelper_getLength(newList); j++) {
	                        newList[j].group(changeOption.group);
	                    }
	
	                    newList.forEach(function (item) {
	                        self._sparklineGroupManager._addExternalSparkline(item);
	                    });
	                    break;
	                case 11 :
	                    sparkline = self._sparklineGroupManager._getCacheValue(changeOption.row, changeOption.col);
	                    sparkline.group(changeOption.group);
	                    break;
	                case 13 :
	                    ArrayHelper_remove(self._sparklineGroupManager.groups(), changeOption);
	                    self._sparklineGroupManager._onGroupRemoved(changeOption);
	                    break;
	                case 14 :
	                    self._sparklineGroupManager.groups().push(changeOption);
	                    self._sparklineGroupManager._onGroupAdded(changeOption);
	                    break;
	            }
	        },
	        _restoreSparklines: function (originalSparklines) {
	            var len = ArrayHelper_getLength(originalSparklines);
	            for(var i = len - 1; i >= 0; i--) {
	                this._restoreSparklineByChange(originalSparklines[i]);
	            }
	        },
	        _onRowsAdded_Sparkline: function (row, rowCount) {
	            this._sparklineGroupManager._onRowsAdded(row, rowCount);
	        },
	        _onRowsRemoved_Sparkline: function (row, rowCount) {
	            this._sparklineGroupManager._onRowsRemoved(row, rowCount);
	        },
	        _onColumnsAdded_Sparkline: function (col, colCount) {
	            this._sparklineGroupManager._onColumnsAdded(col, colCount);
	        },
	        _onColumnsRemoved_Sparkline: function (col, colCount) {
	            this._sparklineGroupManager._onColumnsRemoved(col, colCount);
	        },
	        _onClear_Sparkline: function (row, col, rowCount, colCount) {
	            this._sparklineGroupManager.clear(row, col, rowCount, colCount);
	        },
	        _getExternalChanges: function () {
	            var changes = this._changes;
	            if (changes) {
	                if (!changes._externalChanges) {
	                    changes._externalChanges = [];
	                }
	                return changes._externalChanges;
	            }
	            return keyword_null;
	        }
	    });
	    _SheetModelManager._registerFeature('sparkline', {
	        init: function() {
	            var sheet = this._sheet;
	            this._sparklineGroupManager = new WorksheetSparklineGroupManager(sheet, sheet);
	        },
	        undo: function (changes) {
	            var originalSparklines = changes._originalSparklines;
	            if (originalSparklines) {
	                this._restoreSparklines(originalSparklines);
	            }
	
	            var sheet = this._sheet;
	            var externalChanges = changes._externalChanges;
	            if (externalChanges) {
	                externalChanges.forEach(function(item) {
	                    var modelManager = sheet.parent.getSheetFromName(item.sheetName)._modelManager;
	                    modelManager.undo(item.changes);
	                });
	            }
	        }
	    });
	
	   
	    var adapter = {
	       
	        init: function () {
	            this._sparklineGroupManager = this._modelManager._sparklineGroupManager;
	        },
	        dispose: function (clearCache) {
	            if (clearCache !== false) {
	                this._sparklineGroupManager = keyword_null;
	            }
	        },
	        onLayoutChanged: function (e) {
	            var changeType = e.changeType;
	            var row = e.row;
	            var rowCount = e.rowCount;
	            var col = e.col;
	            var colCount = e.colCount;
	            var modelManager = this._modelManager;
	            if (changeType === 'addRows') {
	                modelManager._onRowsAdded_Sparkline(row, rowCount);
	            } else if (changeType === 'deleteRows') {
	                modelManager._onRowsRemoved_Sparkline(row, rowCount);
	            } else if (changeType === 'addColumns') {
	                modelManager._onColumnsAdded_Sparkline(col, colCount);
	            } else if (changeType === 'deleteColumns') {
	                modelManager._onColumnsRemoved_Sparkline(col, colCount);
	            } else if (changeType === 'clear') {
	                var type = e.type;
	                if (e.sheetArea === 3 && (type & 16 ) === 16 ) {
	                    modelManager._onClear_Sparkline(row, col, rowCount, colCount);
	                }
	            }
	        },
	        toJson: function (data, serializationOption) {
	            var ignoreStyle = serializationOption && serializationOption.ignoreStyle;
	            if (!ignoreStyle) {
	                data.sparklineGroups = this._sparklineGroupManager.toJSON();
	            }
	        },
	        fromJson: function (data, noSchema, deserializationOptions) {
	            var ignoreStyle = deserializationOptions && deserializationOptions.ignoreStyle;
	            var self = this;
	            var sparklineGroupManager = self._sparklineGroupManager;
	            var data_sparklineGroupManager = data.sparklineGroupManager;
	            var sparklineGroups = noSchema ? (data_sparklineGroupManager && data_sparklineGroupManager.groups) : data.sparklineGroups;
	            if (sparklineGroups && !ignoreStyle) {
	                sparklineGroupManager._restore(sparklineGroups, noSchema);
	            }
	        },
	        setName: function (e) {
	            var oldName = e.oldName, newName = e.newName;
	            this._sparklineGroupManager._onSheetNameChanged(oldName, newName);
	        }
	    };
	    Worksheet._registerFeature('sparkline', adapter);
	
	    function getRangeInfo(sheet, formula) {
	        var result = Core.CalcEngine.formulaToRanges(sheet, formula, 0, 0), rangeItem = result[0];
	        var range = rangeItem && rangeItem.ranges && rangeItem.ranges[0];
	        if (range) {
	            return {
	                range: range,
	                sheetName: rangeItem.sheetName
	            };
	        }
	        return keyword_null;
	    }
	
	    var sheetEx = {
	       
	        
	        getSparkline: function (row, col) {
	            if (!this._sparklineGroupManager) {
	                return keyword_null;
	            }
	            return this._sparklineGroupManager._getCacheValue(row, col);
	        },
	       
	        
	        setSparkline: function (row, col, dataRange, dataOrientation, sparklineType, sparklineSetting, dateAxisRange, dateAxisOrientation) {
	            var self = this, sparklineGroupManager = self._sparklineGroupManager;
	            if (!sparklineGroupManager) {
	                return keyword_null;
	            }
	            var dataSheetName;
	            if (typeof dataRange === 'string') {
	                var rangeInfo = getRangeInfo(self, dataRange);
	                if (!rangeInfo) {
	                    return keyword_null;
	                }
	                dataRange = rangeInfo.range;
	                dataSheetName = rangeInfo.sheetName;
	            }
	            var sparkline = new Sparkline(row, col, dataRange, dataOrientation, sparklineType, sparklineSetting);
	            if (dataSheetName && dataSheetName !== self.name()) {
	                sparkline.dataSheetName(dataSheetName);
	            }
	            if (dateAxisRange && !isNullOrUndefined(dateAxisOrientation)) {
	                var dateAxisDataSheetName;
	                if (typeof dateAxisRange === 'string') {
	                    var axisRangeInfo = getRangeInfo(self, dateAxisRange);
	                    if (!axisRangeInfo) {
	                        return keyword_null;
	                    }
	                    dateAxisRange = axisRangeInfo.range;
	                    dateAxisDataSheetName = axisRangeInfo.sheetName;
	                }
	                sparkline.dateAxisData(dateAxisRange);
	                if (dateAxisDataSheetName && dateAxisDataSheetName !== self.name()) {
	                    sparkline.dateAxisDataSheetName(dateAxisDataSheetName);
	                }
	                sparkline.dateAxisOrientation(dateAxisOrientation);
	                sparkline.group().displayDateAxis = true;
	            }
	            var oldValue = self.getSparkline(row, col);
	            self.removeSparkline(row, col);
	            setSparklineInternal.call(self, row, col, oldValue, sparkline);
	            self._invalidate();
	            return sparkline;
	        },
	       
	        
	        removeSparkline: function (row, col) {
	            var self = this, sparklineGroupManager = self._sparklineGroupManager;
	            if (!sparklineGroupManager) {
	                return;
	            }
	            var old = self.getSparkline(row, col);
	            var backupOption = {
	                row : row,
	                col : col,
	                sparkline : old
	            };
	            self._modelManager._backupSparklines(0 , backupOption);
	            if (old) {
	                var g = old.group();
	                g.remove(old);
	                if (g.count() <= 0) {
	                    sparklineGroupManager.remove(g);
	                }
	                setSparklineInternal.call(self, row, col, old, keyword_null);
	            }
	            self._invalidate();
	        },
	       
	        
	        groupSparkline: function (sparklines) {
	            var self = this, sparklineGroupManager = self._sparklineGroupManager;
	            if (!sparklineGroupManager) {
	                return keyword_null;
	            }
	            var first = keyword_null, backupList = [], needBackup = self._modelManager._changes !== keyword_undefined;
	            for (var i = 0; i < sparklines.length; i++) {
	                var si = sparklines[i];
	                if (!si) {
	                    continue;
	                }
	                if(needBackup) {
	                    backupList.push({group : si.group().clone(), row : si.row, col : si.column});
	                }
	                if (!first) {
	                    first = si.group();
	                    continue;
	                }
	                var sg = si.group();
	                sg.remove(si);
	                first.add(si);
	                if (sg.count() <= 0) {
	                    sparklineGroupManager.remove(sg);
	                }
	            }
	            self._invalidate();
	           
	            self._modelManager._backupSparklines(1 , backupList);
	            return first;
	        },
	       
	        
	        ungroupSparkline: function (group) {
	            var self = this, sparklineGroupManager = self._sparklineGroupManager;
	            if (!sparklineGroupManager || !group) {
	                return;
	            }
	            var sparklines = [], backupList = [], needBackup = self._modelManager._changes !== keyword_undefined;
	            sparklines = sparklines.concat(group._innerList);
	            for (var i = 0; i < sparklines.length; i++) {
	                var sparkline = sparklines[i];
	                if (sparkline) {
	                    if(needBackup) {
	                        backupList.push({
	                            row : sparkline.row,
	                            col : sparkline.column
	                        });
	                    }
	                    group.remove(sparkline);
	                    var newGroup = group.clone();
	                    newGroup.add(sparkline);
	                    sparklineGroupManager.add(newGroup);
	                }
	            }
	            sparklineGroupManager.remove(group);
	            self._modelManager._backupSparklines(2 , backupList);
	            self._invalidate();
	        }
	    };
	
	    function setSparklineInternal(row, col, oldValue, sparkline) {
	        var self = this;
	        var sparklineGroupManager = self._sparklineGroupManager;
	        sparklineGroupManager._updateCache(row, col, sparkline);
	        if (sparkline) {
	            sparklineGroupManager.add(sparkline.group());
	        }
	        self._raiseCellChanged('sparkline', row, col, 3 , oldValue, sparkline);
	    }
	
	    GC$.extend(Worksheet.prototype, sheetEx);
	   
	
	   
	    function WorksheetSparklineGroupManager(sheet, calcEvaluator) {
	        this._groups = [];
	        this._sheet = sheet;
	        this.evaluator = calcEvaluator;
	        this._cache = {};
	        this._externalSparklines = [];
	        this._externalSparklineGroups = [];
	    }
	
	    function _getKey(row, col) {
	        return row + "_" + col;
	    }
	
	    WorksheetSparklineGroupManager.prototype = {
	        constructor: WorksheetSparklineGroupManager,
	        _restore: function (jsonData, noSchema) {
	            var sparklineGroupManager = this;
	            sparklineGroupManager.fromJSON(jsonData, noSchema);
	            sparklineGroupManager.groups().forEach(function (group) {
	                group._innerList.forEach(function(sparkline) {
	                    sparklineGroupManager._updateCacheByValue(sparkline);
	                });
	            });
	        },
	        _updateCacheByValue: function (sparkline) {
	            if (sparkline) {
	                this._updateCache(sparkline.row, sparkline.column, sparkline);
	            }
	        },
	        _updateCache: function(row, col, value) {
	            if(this._sheet._modelManager._changes) {
	                var backupOptions = {
	                    row : row,
	                    col : col,
	                    sparkline :this._getCacheValue(row, col)
	                };
	                this._sheet._modelManager._backupSparklines(12 , backupOptions);
	            }
	            if(value) {
	                this._cache[_getKey(row, col)] = value;
	            } else {
	                delete this._cache[_getKey(row, col)];
	            }
	        },
	        _getCacheValue: function(row, col) {
	            return this._cache[_getKey(row, col)] || keyword_null;
	        },
	        groups: function (value) {
	            if (arguments.length === 0) {
	                return this._groups;
	            }
	
	            this._groups = value;
	        },
	        add: function (group) {
	            var self = this;
	            self._sheet._modelManager._backupSparklines(13 , group);
	            self.groups().push(group);
	            group._sparklineGroupManager = self;
	            group._adjustGroupMaxMinValue();
	            self._onGroupAdded(group);
	        },
	        _onGroupAdded: function (group) {
	            var self = this;
	            self._addExternalSparklineGroup(group);
	            group.all().forEach(function (item) {
	                self._addExternalSparkline(item);
	            });
	        },
	        remove: function (group) {
	            var self = this;
	            self._sheet._modelManager._backupSparklines(14 , group);
	            ArrayHelper_remove(self.groups(), group);
	            self._onGroupRemoved(group);
	        },
	        _onGroupRemoved: function (group) {
	            var self = this;
	            self._removeExternalSparklineGroup(group);
	            group.all().forEach(function (item) {
	                self._removeExternalSparkline(item);
	            });
	        },
	        contains: function (group) {
	            return ArrayHelper_contains(this.groups(), group);
	        },
	        count: function () {
	            return this.groups().length;
	        },
	        _onRowsAdded: function (row, count) {
	            _addRowsOrColumns(this._groups, row, count, true, this);
	            _addRowsOrColumnsForExternalSparkline(row, count, true, this._externalSparklineGroups, this._externalSparklines, this._sheet._modelManager._getExternalChanges());
	        },
	        _onColumnsAdded: function (column, count) {
	            _addRowsOrColumns(this._groups, column, count, false, this);
	            _addRowsOrColumnsForExternalSparkline(column, count, false, this._externalSparklineGroups, this._externalSparklines, this._sheet._modelManager._getExternalChanges());
	        },
	        _onRowsRemoved: function (row, count) {
	            _removeRowsOrColumns(this._groups, row, count, true, this);
	            _removeRowsOrColumnsForExternalSparkline(row, count, true, this._externalSparklineGroups, this._externalSparklines, this._sheet._modelManager._getExternalChanges());
	        },
	        _onColumnsRemoved: function (column, count) {
	            _removeRowsOrColumns(this._groups, column, count, false, this);
	            _removeRowsOrColumnsForExternalSparkline(column, count, false, this._externalSparklineGroups, this._externalSparklines, this._sheet._modelManager._getExternalChanges());
	        },
	        _onSheetNameChanged: function (oldName, newName) {
	            this._externalSparklineGroups.forEach(function (group) {
	                if (group.dateAxisDataSheetName() === oldName) {
	                    group.dateAxisDataSheetName(newName);
	                }
	            });
	            this._externalSparklines.forEach(function (sp) {
	                if (sp.dataSheetName() === oldName) {
	                    sp.dataSheetName(newName);
	                }
	            });
	        },
	        _addExternalSparkline: function (sparkline) {
	            var currentSheet = this._sheet;
	            var dataSheetName = sparkline.dataSheetName();
	            if (dataSheetName && dataSheetName !== currentSheet.name()) {
	                var dataSheet = currentSheet.parent.getSheetFromName(dataSheetName);
	                if (dataSheet) {
	                    var externalSparklines = dataSheet._sparklineGroupManager._externalSparklines;
	                    if (externalSparklines.indexOf(sparkline) < 0) {
	                        externalSparklines.push(sparkline);
	                    }
	                }
	            }
	        },
	        _removeExternalSparkline: function (sparkline) {
	            var dataSheetName = sparkline.dataSheetName();
	            if (dataSheetName) {
	                var dataSheet = this._sheet.parent.getSheetFromName(dataSheetName);
	                if (dataSheet) {
	                    var externalSparklines = dataSheet._sparklineGroupManager._externalSparklines;
	                    var index = externalSparklines.indexOf(sparkline);
	                    if (index >= 0) {
	                        externalSparklines.splice(index, 1);
	                    }
	                }
	            }
	        },
	        _addExternalSparklineGroup: function (sparklineGroup) {
	            var currentSheet = this._sheet;
	            var dateAxisDataSheetName = sparklineGroup.dateAxisDataSheetName();
	            if (dateAxisDataSheetName && dateAxisDataSheetName !== currentSheet.name()) {
	                var dateAxisDataSheet = currentSheet.parent.getSheetFromName(dateAxisDataSheetName);
	                if (dateAxisDataSheet) {
	                    var externalSparklineGroups = dateAxisDataSheet._sparklineGroupManager._externalSparklineGroups;
	                    if (externalSparklineGroups.indexOf(sparklineGroup) < 0) {
	                        externalSparklineGroups.push(sparklineGroup);
	                    }
	                }
	            }
	        },
	        _removeExternalSparklineGroup: function (sparklineGroup) {
	            var dateAxisDataSheetName = sparklineGroup.dateAxisDataSheetName();
	            if (dateAxisDataSheetName) {
	                var dateAxisDataSheet = this._sheet.parent.getSheetFromName(dateAxisDataSheetName);
	                if (dateAxisDataSheet) {
	                    var externalSparklineGroups = dateAxisDataSheet._sparklineGroupManager._externalSparklineGroups;
	                    var index = externalSparklineGroups.indexOf(sparklineGroup);
	                    if (index >= 0) {
	                        externalSparklineGroups.splice(index, 1);
	                    }
	                }
	            }
	        },
	        clear: function (row, column, rowCount, columnCount) {
	            var self = this;
	            if (arguments.length === 0) {
	                var groups = self._groups;
	                for (var i = ArrayHelper_getLength(groups) - 1; i > -1 ; i--) {
	                    var item = groups[i];
	                    if (item) {
	                       
	                        for(var j = item.count() - 1; j > -1; j--) {
	                            var sp = item._innerList[j];
	                            self._updateCache(sp.row, sp.column, keyword_null);
	                            item.remove(sp);
	                        }
	                        self.remove(item);
	                    }
	                }
	               
	               
	            } else {
	                for (var r = row; r < row + rowCount; r++) {
	                    for (var c = column; c < column + columnCount; c++) {
	                        var sparkline = self._find(r, c);
	                        if (sparkline) {
	                            self._updateCache(sparkline.row, sparkline.column, keyword_null);
	                            var g = sparkline.group();
	                            g.remove(sparkline);
	                            if (g.count() === 0) {
	                                self.remove(g);
	                            }
	                        }
	                    }
	                }
	            }
	        },
	        _find: function (row, column) {
	            var groups = this._groups;
	            for (var i = 0; i < groups.length; i++) {
	                var g = groups[i];
	                for (var j = 0; j < g.count(); j++) {
	                    var si = g._innerList[j];
	                    if (si && si.row === row && si.column === column) {
	                        return si;
	                    }
	                }
	            }
	            return keyword_null;
	        },
	        _copy: function (fromRow, fromColumn, toRow, toColumn, rowCount, columnCount, ignoreFilteredOutRow) {
	            var self = this;
	            var sheet = self._sheet;
	            if (!sheet) {
	                return;
	            }
	            var savedSparkline = new _SparseArray();
	            var offsetRow = toRow - fromRow;
	            var offsetColumn = toColumn - fromColumn;
	            var i, j, sheetRowCount = sheet.getRowCount(), sheetColumnCount = sheet.getColumnCount();
	            var sparklineGroupManager = sheet._sparklineGroupManager;
	            for (i = 0; i < rowCount; i++) {
	                if (ignoreFilteredOutRow && sheet._isRowFilterOut && sheet._isRowFilterOut(toRow + i)) {
	                    continue;
	                }
	                for (j = 0; j < columnCount; j++) {
	                    var sparkline = sheet.getSparkline(fromRow + i, fromColumn + j);
	                    if (sparkline) {
	                        var newSparkline = sparkline.clone();
	                        newSparkline.row = toRow + i;
	                        newSparkline.column = toColumn + j;
	                        var dateAxisRef = newSparkline.dateAxisData();
	                        if (!isNullOrUndefined(dateAxisRef) && self._canOffset(dateAxisRef, offsetRow, offsetColumn, sheetRowCount, sheetColumnCount)) {
	                            newSparkline.dateAxisData(dateAxisRef.offset(offsetColumn, offsetRow));
	                        }
	                        var dataRef = newSparkline.data();
	                        if (!isNullOrUndefined(dataRef) && self._canOffset(dataRef, offsetRow, offsetColumn, sheetRowCount, sheetColumnCount)) {
	                            newSparkline.data(dataRef.offset(offsetColumn, offsetRow));
	                        }
	                        self.add(newSparkline.group());
	                        savedSparkline.set(i, j, newSparkline);
	                    }
	                }
	            }
	            for (i = 0; i < rowCount; i++) {
	                if (ignoreFilteredOutRow && sheet._isRowFilterOut && sheet._isRowFilterOut(toRow + i)) {
	                    continue;
	                }
	                for (j = 0; j < columnCount; j++) {
	                    sparklineGroupManager._updateCache(toRow + i, toColumn + j, savedSparkline.get(i, j));
	                }
	            }
	        },
	        _canOffset: function (exp, offsetRow, offsetColumn, maxRowCount, maxColumnCount) {
	            var dataRange = this._getExpressionRange(exp);
	            if (dataRange) {
	                var row = Math_max(dataRange.row, 0);
	                var column = Math_max(dataRange.col, 0);
	                var rowCount = dataRange.row < 0 ? maxRowCount : dataRange.rowCount;
	                var columnCount = dataRange.col < 0 ? maxColumnCount : dataRange.colCount;
	                return !(row + offsetRow < 0 || column + offsetColumn < 0 || row + rowCount + offsetRow > maxRowCount || column + columnCount + offsetColumn > maxColumnCount);
	            }
	            return false;
	        },
	        _move: function (fromRow, fromColumn, toRow, toColumn, rowCount, columnCount) {
	            var sheet = this._sheet;
	            if (!sheet) {
	                return;
	            }
	            this._moveDataRange(fromRow, fromColumn, toRow, toColumn, rowCount, columnCount);
	            var sparklineGroupManager = sheet._sparklineGroupManager;
	            var savedSparkline = new _SparseArray();
	            var i, j;
	            for (i = 0; i < rowCount; i++) {
	                for (j = 0; j < columnCount; j++) {
	                    var sparkline = sheet.getSparkline(fromRow + i, fromColumn + j);
	                    if (sparkline) {
	                        sparkline.row = toRow + i;
	                        sparkline.column = toColumn + j;
	                        savedSparkline.set(i, j, sparkline);
	                    }
	                    sparklineGroupManager._updateCache(fromRow + i, fromColumn + j, keyword_null);
	                }
	            }
	            for (i = 0; i < rowCount; i++) {
	                for (j = 0; j < columnCount; j++) {
	                    sheet.removeSparkline(toRow + i, toColumn + j);
	                    sparklineGroupManager._updateCache(toRow + i, toColumn + j, savedSparkline.get(i, j));
	                }
	            }
	        },
	        _moveDataRange: function (fromRow, fromColumn, toRow, toColumn, rowCount, columnCount) {
	            var self = this;
	            var moveRange = createRange(fromRow, fromColumn, rowCount, columnCount);
	            var offsetRow = toRow - fromRow;
	            var offsetColumn = toColumn - fromColumn;
	            var groups = self._groups;
	            for (var i = 0; i < groups.length; i++) {
	                var g = groups[i], innerList = g._innerList;
	                for (var j = 0; j < innerList.length; j++) {
	                    var sparkline = innerList[j];
	                    if (!sparkline) {
	                        continue;
	                    }
	                    var dateAxisRef = sparkline.dateAxisData();
	                    var dateAxisRange = self._getExpressionRange(dateAxisRef);
	                    if (dateAxisRange && moveRange.containsRange(dateAxisRange) && moveRange.contains(sparkline.row, sparkline.column)) {
	                        sparkline.dateAxisData(dateAxisRef.offset(offsetColumn, offsetRow));
	                    }
	                    var dataRef = sparkline.data();
	                    var dataRange = self._getExpressionRange(dataRef);
	                    if (dataRange && moveRange.containsRange(dataRange) && moveRange.contains(sparkline.row, sparkline.column)) {
	                        sparkline.data(dataRef.offset(offsetColumn, offsetRow));
	                    }
	                }
	            }
	        },
	        _getExpressionRange: function (exp) {
	           
	            return exp;
	        },
	       
	        _exCopy: function (src, fromRow, fromColumn, toRow, toColumn, rowCount, columnCount, ignoreFilteredOutRow) {
	            var self = this;
	            var sheet = self._sheet;
	            if (!sheet) {
	                return;
	            }
	            if (src === sheet) {
	                self._copy(fromRow, fromColumn, toRow, toColumn, rowCount, columnCount);
	                return;
	            }
	
	            var offsetRow = toRow - fromRow;
	            var offsetColumn = toColumn - fromColumn;
	            var destSparklineGroupManager = sheet._sparklineGroupManager;
	            var sheetRowCount = sheet.getRowCount(), sheetColumnCount = sheet.getColumnCount();
	            for (var i = 0; i < rowCount; i++) {
	                if (ignoreFilteredOutRow && sheet._isRowFilterOut && sheet._isRowFilterOut(toRow + i)) {
	                    continue;
	                }
	                for (var j = 0; j < columnCount; j++) {
	                    var sparkline = src.getSparkline(fromRow + i, fromColumn + j);
	                    if (sparkline) {
	                        var newSparkline = sparkline.clone();
	                        newSparkline.row = toRow + i;
	                        newSparkline.column = toColumn + j;
	                        var dateAxisRef = newSparkline.dateAxisData();
	                        if (!isNullOrUndefined(dateAxisRef) && self._canOffset(dateAxisRef, offsetRow, offsetColumn, sheetRowCount, sheetColumnCount)) {
	                            newSparkline.dateAxisData(dateAxisRef.offset(offsetColumn, offsetRow));
	                        }
	                        var dataRef = newSparkline.data();
	                        if (!isNullOrUndefined(dataRef) && self._canOffset(dataRef, offsetRow, offsetColumn, sheetRowCount, sheetColumnCount)) {
	                            newSparkline.data(dataRef.offset(offsetColumn, offsetRow));
	                        }
	                        self.add(newSparkline.group());
	                        destSparklineGroupManager._updateCache(toRow + i, toColumn + j, newSparkline);
	                    } else {
	                        destSparklineGroupManager._updateCache(toRow + i, toColumn + j, keyword_null);
	                    }
	                }
	            }
	        },
	       
	        _exMove: function (src, fromRow, fromColumn, toRow, toColumn, rowCount, columnCount) {
	            var self = this;
	            var sheet = self._sheet;
	            if (!sheet) {
	                return;
	            }
	            if (src === sheet) {
	                self._move(fromRow, fromColumn, toRow, toColumn, rowCount, columnCount);
	                return;
	            }
	
	            var srcSparklineGroupManager = src._sparklineGroupManager,
	                destSparklineGroupManager = sheet._sparklineGroupManager;
	            self._exMoveDataRange(src, fromRow, fromColumn, toRow, toColumn, rowCount, columnCount);
	            for (var i = 0; i < rowCount; i++) {
	                for (var j = 0; j < columnCount; j++) {
	                    var sparkline = src.getSparkline(fromRow + i, fromColumn + j);
	                    if (sparkline) {
	                        sparkline.row = toRow + i;
	                        sparkline.column = toColumn + j;
	                        var oldGroup = sparkline.group();
	                        var newGroup = oldGroup.clone();
	                        oldGroup.remove(sparkline);
	                        if (oldGroup.count() <= 0) {
	                            srcSparklineGroupManager.remove(oldGroup);
	                        }
	                        newGroup.add(sparkline);
	                        self.add(newGroup);
	                        destSparklineGroupManager._updateCache(toRow + i, toColumn + j, sparkline);
	                    } else {
	                        destSparklineGroupManager._updateCache(toRow + i, toColumn + j, keyword_null);
	                    }
	                   
	                    srcSparklineGroupManager._updateCache(fromRow + i, fromColumn + j, keyword_null);
	                }
	            }
	        },
	        _exMoveDataRange: function (src, fromRow, fromColumn, toRow, toColumn, rowCount, columnCount) {
	            var self = this;
	            var sheet = self._sheet;
	            if (!src || !sheet) {
	                return;
	            }
	            if (src === sheet) {
	                self._moveDataRange(fromRow, fromColumn, toRow, toColumn, rowCount, columnCount);
	                return;
	            }
	            var moveRange = createRange(fromRow, fromColumn, rowCount, columnCount);
	            var offsetRow = toRow - fromRow;
	            var offsetColumn = toColumn - fromColumn;
	            var groups = src._sparklineGroupManager._groups;
	            for (var i = 0; i < groups.length; i++) {
	                var g = groups[i];
	                for (var j = 0; j < g._innerList.length; j++) {
	                    var sparkline = g._innerList[j];
	                    if (!sparkline) {
	                        continue;
	                    }
	                    var dateAxisRef = sparkline.dateAxisData();
	                    var dateAxisRange = self._getExpressionRange(dateAxisRef);
	                    if (dateAxisRange && moveRange.containsRange(dateAxisRange) && moveRange.contains(sparkline.row, sparkline.column)) {
	                        sparkline.dateAxisData(dateAxisRef.offset(offsetColumn, offsetRow));
	                    }
	                    var dataRef = sparkline.data();
	                    var dataRange = self._getExpressionRange(dataRef);
	                    if (dataRange && moveRange.containsRange(dataRange) && moveRange.contains(sparkline.row, sparkline.column)) {
	                        sparkline.data(dataRef.offset(offsetColumn, offsetRow));
	                    }
	                }
	            }
	        },
	        toJSON: function () {
	            var groups = this._groups;
	            var jsonData = [];
	            for (var i = 0; groups && i < groups.length; i++) {
	                jsonData.push(groups[i].toJSON());
	            }
	            if (jsonData.length === 0) {
	                return keyword_undefined;
	            }
	            return jsonData;
	        },
	        fromJSON: function (jsonData, noSchema) {
	            this._groups.length = 0;
	            this._cache = {};
	            for (var i = 0; jsonData && i < jsonData.length; i++) {
	                var item = jsonData[i];
	                var sparklineGroup = new SparklineGroup();
	                sparklineGroup.fromJSON(item, noSchema);
	                this.add(sparklineGroup);
	            }
	        }
	    };
	
	    function _addRowRange(row, rowCount, range) {
	        if (range) {
	            if (row > range.row + range.rowCount - 1) {
	                return range;
	            }
	            if (row > range.row) {
	                return createRange(range.row, range.col, range.rowCount + rowCount, range.colCount);
	            }
	            return createRange(range.row + rowCount, range.col, range.rowCount, range.colCount);
	        }
	        return keyword_null;
	    }
	    function _addColumnRange(column, columnCount, range) {
	        if (range) {
	            if (column > range.col + range.colCount - 1) {
	                return range;
	            }
	            if (column > range.col) {
	                return createRange(range.row, range.col, range.rowCount, range.colCount + columnCount);
	            }
	
	            return createRange(range.row, range.col + columnCount, range.rowCount, range.colCount);
	        }
	        return keyword_null;
	    }
	    function _addRowsOrColumns(groups, index, count, isRow, sparklineGroupManager) {
	        var savedSparkline = new _SparseArray();
	        for (var i = 0; i < groups.length; i++) {
	            var g = groups[i], innerList = g._innerList;
	            if (g.displayDateAxis) {
	                var dateAxis, oldDateAxisData = g.dateAxisData();
	                if (isRow) {
	                    dateAxis = _addRowRange(index, count, oldDateAxisData);
	                } else {
	                    dateAxis = _addColumnRange(index, count, oldDateAxisData);
	                }
	                g.dateAxisData(dateAxis);
	            }
	            for (var j = 0; j < innerList.length; j++) {
	                var sparkline = innerList[j];
	               
	                var oldIndex = isRow ? sparkline.row : sparkline.column;
	                if (index <= oldIndex) {
	                    savedSparkline.set(i, j, sparkline);
	                    sparklineGroupManager._updateCache(sparkline.row, sparkline.column, keyword_null);
	                    if (isRow) {
	                        sparkline.row += count;
	                    } else {
	                        sparkline.column += count;
	                    }
	                }
	               
	                var data, oldData = sparkline.data();
	                if (isRow) {
	                    data = _addRowRange(index, count, oldData);
	                } else {
	                    data = _addColumnRange(index, count, oldData);
	                }
	                sparkline.data(data);
	            }
	        }
	        for (var m = 0; m < groups.length; m++) {
	            var group = groups[m], list = group._innerList;
	            for (var n = 0; n < list.length; n++) {
	                sparklineGroupManager._updateCacheByValue(savedSparkline.get(m, n));
	            }
	        }
	    }
	    function _addRowsOrColumnsForExternalSparkline(index, count, isRow, externalSparklineGroups, externalSparklines, changes) {
	        for (var i = 0; i < externalSparklineGroups.length; i++) {
	            var group = externalSparklineGroups[i];
	            if (group.displayDateAxis) {
	                var sheet = group._getSheet();
	                var modelManager = sheet._modelManager, dummy = false;
	                if (changes && !modelManager._changes) {
	                    modelManager._changes = [];
	                    dummy = true;
	                }
	
	                var dateAxis, oldDateAxisData = group.dateAxisData();
	                if (isRow) {
	                    dateAxis = _addRowRange(index, count, oldDateAxisData);
	                } else {
	                    dateAxis = _addColumnRange(index, count, oldDateAxisData);
	                }
	                group.dateAxisData(dateAxis);
	
	                if (dummy) {
	                    changes.push({sheetName: sheet.name(), changes: modelManager._changes});
	                    modelManager._changes = keyword_undefined;
	                }
	            }
	        }
	        for (var j = 0; j < externalSparklines.length; j++) {
	            var sparkline = externalSparklines[j];
	            var spSheet = sparkline._getWorksheet();
	            var spModelManager = spSheet._modelManager, isDummy = false;
	            if (changes && !spModelManager._changes) {
	                spModelManager._changes = [];
	                isDummy = true;
	            }
	
	            var data, oldData = sparkline.data();
	            if (isRow) {
	                data = _addRowRange(index, count, oldData);
	            } else {
	                data = _addColumnRange(index, count, oldData);
	            }
	            sparkline.data(data);
	
	            if (isDummy) {
	                changes.push({sheetName: spSheet.name(), changes: spModelManager._changes});
	                spModelManager._changes = keyword_undefined;
	            }
	        }
	    }
	
	    function _removeColumnRange(column, columnCount, range) {
	        var ret = _rangeSubCat(range.col, range.col + range.colCount - 1, column, column + columnCount - 1);
	        if (!ret) {
	            return keyword_null;
	        }
	        return createRange(range.row, ret.start, range.rowCount, ret.end - ret.start + 1);
	    }
	    function _removeRowRange(row, rowCount, range) {
	        var ret = _rangeSubCat(range.row, range.row + range.rowCount - 1, row, row + rowCount - 1);
	        if (!ret) {
	            return keyword_null;
	        }
	        return createRange(ret.start, range.col, ret.end - ret.start + 1, range.colCount);
	    }
	    function _rangeSubCat(sourceStart, sourceEnd, targetStart, targetEnd) {
	        var resultStart = -1;
	        var resultEnd, i;
	        if (targetEnd < sourceStart) {
	            var removeCount = targetEnd - targetStart + 1;
	            resultStart = sourceStart - removeCount;
	            resultEnd = sourceEnd - removeCount;
	            return {start: resultStart, end: resultEnd};
	        }
	        if (targetStart > sourceEnd) {
	            resultStart = sourceStart;
	            resultEnd = sourceEnd;
	            return {start: resultStart, end: resultEnd};
	        }
	        if (targetStart <= sourceStart) {
	            var sourceCount = sourceEnd - sourceStart + 1;
	            var removedCount = 0;
	            for (i = sourceStart; i <= targetEnd; i++) {
	                if (i <= sourceEnd) {
	                    removedCount++;
	                } else {
	                    break;
	                }
	            }
	            resultStart = targetStart;
	            resultEnd = resultStart + sourceCount - removedCount - 1;
	            return {start: resultStart, end: resultEnd};
	        }
	        var remainedCount = 0;
	        for (i = sourceStart; i <= sourceEnd; i++) {
	            if (resultStart === -1 && (i < targetStart || i > targetEnd)) {
	                resultStart = i;
	            }
	            if (i < targetStart || i > targetEnd) {
	                remainedCount++;
	            }
	        }
	        if (resultStart !== -1 && remainedCount > 0) {
	            resultEnd = resultStart + remainedCount - 1;
	            return {start: resultStart, end: resultEnd};
	        }
	        return keyword_null;
	    }
	    function _removeRowsOrColumns(groups, index, count, isRow, sparklineGroupManager) {
	        var savedSparkline = new _SparseArray(), groupsLength = groups.length, maxInListLen = 0;
	        for (var i = groupsLength - 1; i > -1; i--) {
	            var g = groups[i];
	            if (g.displayDateAxis) {
	                var dateAxis, oldDateAxisData = g.dateAxisData();
	                if (isRow) {
	                    dateAxis = _removeRowRange(index, count, oldDateAxisData);
	                } else {
	                    dateAxis = _removeColumnRange(index, count, oldDateAxisData);
	                }
	                if (!isNullOrUndefined(dateAxis)) {
	                    g.dateAxisData(dateAxis);
	                } else {
	                    g.clear();
	                    sparklineGroupManager.remove(g);
	                   
	                    continue;
	                }
	            }
	            var lines = [];
	            lines = lines.concat(g._innerList);
	            var linesLen = ArrayHelper_getLength(lines);
	            maxInListLen = Math_max(linesLen, maxInListLen);
	            for (var j = linesLen - 1; j > -1; j--) {
	                var sparkline = lines[j], oldIndex = isRow ? sparkline.row : sparkline.column;
	                if (oldIndex >= index && oldIndex < index + count) {
	                    g.remove(sparkline);
	                    sparklineGroupManager._updateCache(sparkline.row, sparkline.column, keyword_null);
	                } else {
	                   
	                    if (index <= oldIndex) {
	                        sparklineGroupManager._updateCache(sparkline.row, sparkline.column, keyword_null);
	                        if (isRow) {
	                            sparkline.row -= count;
	                        } else {
	                            sparkline.column -= count;
	                        }
	                        savedSparkline.set(i, j, sparkline);
	
	                    }
	                   
	                    var data, oldData = sparkline.data();
	                    if (isRow) {
	                        data = _removeRowRange(index, count, oldData);
	                    } else {
	                        data = _removeColumnRange(index, count, oldData);
	                    }
	                    if (!isNullOrUndefined(data)) {
	                        sparkline.data(data);
	                    } else {
	                       
	                        g.remove(sparkline);
	                    }
	                }
	            }
	            if (g.count() <= 0) {
	                sparklineGroupManager.remove(g);
	               
	            }
	        }
	
	        var _sparkline;
	        for (var m = 0; m < groupsLength; m++) {
	            for (var n = 0; n < maxInListLen; n++) {
	                _sparkline = savedSparkline.get(m, n);
	                if (_sparkline) {
	                    sparklineGroupManager._updateCacheByValue(_sparkline);
	                }
	            }
	        }
	    }
	    function _removeRowsOrColumnsForExternalSparkline(index, count, isRow, externalSparklineGroups, externalSparklines, changes) {
	        var groupCount = externalSparklineGroups.length;
	        for (var i = groupCount - 1; i > -1; i--) {
	            var group = externalSparklineGroups[i];
	            if (group.displayDateAxis) {
	                var sheet = group._getSheet();
	                var modelManager = sheet._modelManager, dummy = false;
	                if (changes && !modelManager._changes) {
	                    modelManager._changes = [];
	                    dummy = true;
	                }
	
	                var dateAxis, oldDateAxisData = group.dateAxisData();
	                if (isRow) {
	                    dateAxis = _removeRowRange(index, count, oldDateAxisData);
	                } else {
	                    dateAxis = _removeColumnRange(index, count, oldDateAxisData);
	                }
	                if (!isNullOrUndefined(dateAxis)) {
	                    group.dateAxisData(dateAxis);
	                } else {
	                    group.clear();
	                    group._sparklineGroupManager.remove(group);
	                }
	
	                if (dummy) {
	                    changes.push({sheetName: sheet.name(), changes: modelManager._changes});
	                    modelManager._changes = keyword_undefined;
	                }
	            }
	        }
	        var sparklineCount = externalSparklines.length;
	        for (var j = sparklineCount - 1; j > -1; j--) {
	            var sparkline = externalSparklines[j];
	            var spSheet = sparkline._getWorksheet();
	            var spModelManager = spSheet._modelManager, isDummy = false;
	            if (changes && !spModelManager._changes) {
	                spModelManager._changes = [];
	                isDummy = true;
	            }
	
	            var data, oldData = sparkline.data();
	            if (isRow) {
	                data = _removeRowRange(index, count, oldData);
	            } else {
	                data = _removeColumnRange(index, count, oldData);
	            }
	            if (!isNullOrUndefined(data)) {
	                sparkline.data(data);
	            } else {
	               
	                var sparklineGroup = sparkline.group();
	                sparklineGroup.remove(sparkline);
	                if (sparklineGroup.count() <= 0) {
	                    sparklineGroup._sparklineGroupManager.remove(sparklineGroup);
	                }
	            }
	
	            if (isDummy) {
	                changes.push({sheetName: spSheet.name(), changes: spModelManager._changes});
	                spModelManager._changes = keyword_undefined;
	            }
	        }
	    }
	   
	
	   
	   
	    
	    exports.EmptyValueStyle = {
	        
	        gaps: 0,
	        
	        zero: 1,
	        
	        connect: 2
	    };
	   
	
	   
	   
	    
	    exports.SparklineAxisMinMax = {
	        
	        individual: 0,
	        
	        group: 1,
	        
	        custom: 2
	    };
	   
	
	   
	    var MARKER_COLOR1 = Common._ColorHelper._toString(255, 149, 179, 215),
	        MARKER_COLOR2 = Common._ColorHelper._toString(255, 36, 64, 98);
	    var defaultOptions = {
	        axisColor: 'black',
	        firstMarkerColor: MARKER_COLOR1,
	        highMarkerColor: 'Blue',
	        lastMarkerColor: MARKER_COLOR1,
	        lowMarkerColor: 'Blue',
	        markersColor: MARKER_COLOR2,
	        negativeColor: 'Brown',
	        seriesColor: MARKER_COLOR2,
	        displayEmptyCellsAs: 0,
	        rightToLeft: false,
	        displayHidden: false,
	        displayXAxis: false,
	        showFirst: false,
	        showHigh: false,
	        showLast: false,
	        showLow: false,
	        showNegative: false,
	        showMarkers: false,
	        manualMax: 0.0,
	        manualMin: 0.0,
	        maxAxisType: 0,
	        minAxisType: 0,
	       
	       
	        lineWeight: 1.0
	    };
	
	   
	    
	   
	    
	    function SparklineSetting(settings) {
	        var self = this;
	        self.options = {};
	        for (var x in defaultOptions) {
	            if (defaultOptions.hasOwnProperty(x)) {
	                self.options[x] = settings && settings[x] ? settings[x] : defaultOptions[x];
	            }
	        }
	        self._worksheet = keyword_null;
	    }
	
	    SparklineSetting.prototype = {
	        constructor: SparklineSetting,
	       
	        
	        clone: function () {
	            return new SparklineSetting(this.options);
	        },
	        toJSON: function () {
	            var self = this, options = self.options;
	            var sdata = {};
	            for (var item in options) {
	                if (defaultOptions[item] !== options[item]) {
	                    sdata[item] = options[item];
	                }
	            }
	            if (isEmptyObject(sdata)) {
	                return keyword_undefined;
	            }
	            return sdata;
	        }
	    };
	    exports.SparklineSetting = SparklineSetting;
	   
	
	   
	   
	    
	    exports.SparklineType = {
	        
	        line: 0,
	        
	        column: 1,
	        
	        winloss: 2
	    };
	   
	
	   
	   
	    
	    exports.DataOrientation = {
	        
	        vertical: 0,
	        
	        horizontal: 1
	    };
	   
	
	   
	   
	    
	    function SparklineGroup(type, setting) {
	        var self = this;
	        self.displayDateAxis = false;
	        self._sparklineGroupManager = keyword_null;
	        self._innerList = [];
	        self._axisReference = keyword_null;
	        self._axisOrientation = 1 ;
	       
	        
	        self.setting = setting;
	       
	        
	        self.sparklineType = type;
	    }
	
	
	    function _isDefaultValue(propertyName, value) {
	        var result = false;
	        if (propertyName === 'setting' || propertyName === 'axisReference') {
	            result = value === keyword_null;
	        } else if (propertyName === 'displayDateAxis') {
	            result = value === false;
	        } else if (propertyName === 'axisOrientation') {
	            result = value === 1 ;
	        } else if (propertyName === 'sparklines') {
	            result = value.length === 0;
	        }
	        return result;
	    }
	    SparklineGroup.prototype = {
	        constructor: SparklineGroup,
	        _getSheet: function () {
	            var self = this, sheet;
	            if(self._sparklineGroupManager) {
	                sheet = self._sparklineGroupManager._sheet;
	            }
	            return sheet;
	        },
	        _backupGroupList : function () {
	            var self = this;
	            var sheet = self._getSheet();
	            if(sheet && sheet._modelManager._changes) {
	                var backupOption = {
	                    group : self,
	                    _innerList : self._innerList.concat()
	                };
	                sheet._modelManager._backupSparklines(10 , backupOption);
	            }
	
	        },
	       
	        
	        add: function (item) {
	            var self = this;
	            if (item) {
	                self._backupGroupList();
	                self._innerList.push(item);
	
	                item.group(self);
	                self._adjustGroupMaxMinValue();
	
	                var sparklineGroupManager = self._sparklineGroupManager;
	                if (sparklineGroupManager) {
	                    sparklineGroupManager._addExternalSparkline(item);
	                }
	
	                self.onGroupChanged();
	            }
	        },
	        clear: function () {
	            this._backupGroupList();
	
	            var sparklineGroupManager = this._sparklineGroupManager;
	            if (sparklineGroupManager) {
	                this._innerList.forEach(function (item) {
	                    sparklineGroupManager._removeExternalSparkline(item);    
	                });
	            }
	
	            this._innerList = [];
	        },
	        all: function () {
	          return this._innerList;
	        },
	       
	        
	        remove: function (item) {
	            var self = this, innerList = self._innerList;
	            self._backupGroupList();
	            ArrayHelper_remove(innerList, item);
	            item.onSparklineChanged();
	            item._group = self.clone();
	           
	            self._adjustGroupMaxMinValue();
	
	            var sparklineGroupManager = self._sparklineGroupManager;
	            if (sparklineGroupManager) {
	                sparklineGroupManager._removeExternalSparkline(item);
	            }
	            
	            self.onGroupChanged();
	            return innerList;
	        },
	       
	        
	        contains: function (item) {
	            return ArrayHelper_contains(this._innerList, item);
	        },
	        onGroupChanged: function () {
	            var innerList = this._innerList;
	            if (innerList) {
	                for (var i = 0; i < innerList.length; i++) {
	                    var item = innerList[i];
	                    if (item) {
	                        item.onSparklineChanged();
	                    }
	                }
	            }
	        },
	       
	        
	        clone: function () {
	            var self = this;
	            var setting = self.setting ? self.setting.clone() : keyword_null;
	            var g = new SparklineGroup(self.sparklineType, setting);
	            g.displayDateAxis = self.displayDateAxis;
	            g._axisReference = self._axisReference;
	            g._dateAxisDataSheetName = self._dateAxisDataSheetName;
	            g._axisOrientation = self._axisOrientation;
	            return g;
	        },
	       
	        
	        dateAxisData: function (value) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._axisReference;
	            }
	            var sheet = self._getSheet();
	            if(sheet && sheet._modelManager._changes) {
	                var rangeInfo;
	                if(self._axisReference) {
	                    rangeInfo = {
	                        row : self._axisReference.row,
	                        col : self._axisReference.col,
	                        rowCount : self._axisReference.rowCount,
	                        colCount : self._axisReference.colCount
	                    };
	                } else {
	                    rangeInfo = keyword_null;
	                }
	
	                var backOption = {
	                    group : self,
	                    rangeInfo: rangeInfo
	                };
	                sheet._modelManager._backupSparklines(8 , backOption);
	            }
	            var oldValue = self._axisReference;
	            self._axisReference = value;
	            if (oldValue !== value) {
	                self.onGroupChanged();
	            }
	        },
	        dateAxisDataSheetName: function (value) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._dateAxisDataSheetName;
	            }
	            var dateAxisDataSheetName = self._dateAxisDataSheetName;
	            var sheet = self._getSheet();
	            if (sheet && sheet._modelManager._changes) {
	                var backOption = {
	                    group : self,
	                    dateAxisDataSheetName: dateAxisDataSheetName
	                };
	                sheet._modelManager._backupSparklines(16 , backOption);
	            }
	            if (dateAxisDataSheetName !== value) {
	               
	                if (dateAxisDataSheetName && sheet) {
	                    sheet._sparklineGroupManager._removeExternalSparklineGroup(self);
	                }
	
	                self._dateAxisDataSheetName = value;
	
	               
	                if (value && sheet) {
	                    sheet._sparklineGroupManager._addExternalSparklineGroup(self);
	                }
	                self.onGroupChanged();
	            }
	            return self;
	        },
	       
	        
	        dateAxisOrientation: function (value) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._axisOrientation;
	            }
	            var sheet = self._getSheet();
	            if(sheet && sheet._modelManager._changes) {
	                var backOption = {
	                    group : self,
	                    dateAxisOrientation: self._axisOrientation
	                };
	                sheet._modelManager._backupSparklines(9 , backOption);
	            }
	
	            var oldValue = self._axisOrientation;
	            self._axisOrientation = value;
	            if (oldValue !== value) {
	                self.onGroupChanged();
	            }
	        },
	       
	        
	        count: function () {
	            return this._innerList.length;
	        },
	       
	        _adjustGroupMaxMinValue: function () {
	            var self = this, setting = self.setting, innerList = self._innerList;
	            if (setting) {
	                var options = setting.options;
	                options.groupMaxValue = -Number_MAX_VALUE;
	                options.groupMinValue = Number_MAX_VALUE;
	                var useGroupMax = options.maxAxisType === 1 ;
	                var useGroupMin = options.minAxisType === 1 ;
	                if (useGroupMax || useGroupMin) {
	                    for (var i = 0; i < innerList.length; i++) {
	                        var sparkline = innerList[i];
	                        var res = self._getMaxMinValues(sparkline);
	                        var min = res.min;
	                        var max = res.max;
	                        if (useGroupMax && options.groupMaxValue < max) {
	                            options.groupMaxValue = max;
	                        }
	                        if (useGroupMin && options.groupMinValue > min) {
	                            options.groupMinValue = min;
	                        }
	                    }
	                }
	            }
	        },
	        _getMaxMinValues: function (sparkline) {
	            var max = -Number_MAX_VALUE;
	            var min = Number_MAX_VALUE;
	            var data = sparkline.data();
	            if (data) {
	                var worksheet = sparkline._getWorksheet(),
	                    dataSheet = worksheet && worksheet.parent.getSheetFromName(sparkline.dataSheetName());
	                var values = sparkline._provideValues(data, sparkline.dataOrientation(), false, dataSheet || worksheet);
	                for (var i = 0; i < values.length; i++) {
	                    var val = values[i];
	                    if (val === __invalidValuePlaceHolder) {
	                        val = 0;
	                    }
	                    if (typeof val === 'number') {
	                        var check = val;
	                        max = max < check ? check : max;
	                        min = min > check ? check : min;
	                    }
	                }
	            }
	            return {min: min, max: max};
	        },
	
	        toJSON: function () {
	            var self = this;
	            var dictData = {
	                setting: self.setting ? self.setting.toJSON() : keyword_null,
	                displayDateAxis: self.displayDateAxis,
	                sparklineType: self.sparklineType,
	                axisOrientation: self._axisOrientation,
	                sparklines: self._innerList.map(function (item) {
	                    return item.toJSON();
	                })
	            };
	            var axisReference = self._axisReference;
	            if (axisReference) {
	                dictData.axisReference = {
	                    row: axisReference.row,
	                    col: axisReference.col,
	                    rowCount: axisReference.rowCount,
	                    colCount: axisReference.colCount,
	                    sheetName: self._dateAxisDataSheetName
	                };
	            }
	            var jsonData = {};
	            for (var key in dictData) {
	                if (dictData.hasOwnProperty(key)) {
	                    var value = dictData[key];
	                    if (!_isDefaultValue(key, value)) {
	                        jsonData[key] = value;
	                    }
	                }
	            }
	            if (isEmptyObject(jsonData)) {
	                return keyword_undefined;
	            }
	            return jsonData;
	        },
	        fromJSON: function (jsonData, noSchema) {
	            if (jsonData) {
	                var self = this;
	                var displayDateAxis = jsonData.displayDateAxis,
	                    sparklineType = jsonData.sparklineType,
	                    axisReference = jsonData.axisReference,
	                    axisOrientation = jsonData.axisOrientation,
	                    sparklines = jsonData.sparklines;
	                self.setting = new SparklineSetting(jsonData.setting);
	                if (!isNullOrUndefined(displayDateAxis)) {
	                    self.displayDateAxis = displayDateAxis;
	                }
	                if (!isNullOrUndefined(sparklineType)) {
	                    self.sparklineType = sparklineType;
	                }
	                if (!isNullOrUndefined(axisReference)) {
	                    self._axisReference = createRange(axisReference.row, axisReference.col, axisReference.rowCount, axisReference.colCount);
	                    self._dateAxisDataSheetName = axisReference.sheetName;
	                }
	                if (!isNullOrUndefined(axisOrientation)) {
	                    self._axisOrientation = axisOrientation;
	                }
	                if (sparklines) {
	                    self._innerList = [];
	                    for (var i = 0, count = sparklines.length; i < count; i++) {
	                        var sp = new Sparkline();
	                        sp.fromJSON(sparklines[i], noSchema);
	                        self.add(sp);
	                    }
	                }
	            }
	        }
	    };
	    exports.SparklineGroup = SparklineGroup;
	   
	
	   
	   
	    
	    function Sparkline(row, column, dataReference, dataOrientation, type, setting) {
	        var self = this;
	       
	        
	        self.row = row;
	       
	        
	        self.column = column;
	        self._dataOrientation = dataOrientation;
	        self._data = dataReference;
	        self._group = new SparklineGroup(type, setting);
	        self._group.add(self);
	    }
	
	    Sparkline.prototype = {
	        constructor: Sparkline,
	       
	        
	        group: function (value) {
	            var self = this;
	            if (arguments.length === 0) {
	                var g = self._group;
	                if (!g) {
	                    g = new SparklineGroup();
	                    g.add(self);
	                    self._group = g;
	                }
	                return g;
	            }
	
	            var oldGroup = self._group;
	            var sheet = self._getWorksheet();
	            if(sheet && sheet._modelManager._changes) {
	                var backOption = {
	                    row : self.row,
	                    col : self.column,
	                    group : oldGroup   
	                };
	                sheet._modelManager._backupSparklines(11 , backOption);
	            }
	            if (value !== oldGroup) {
	                if (oldGroup) {
	                    oldGroup.remove(self);
	                }
	                self._group = value;
	                if (value && !value.contains(self)) {
	                    value.add(self);
	                }
	                self.onSparklineChanged();
	            }
	            if(sheet) {
	                sheet._invalidate();
	            }
	            return self;
	        },
	       
	        
	        sparklineType: function (value) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self.group().sparklineType;
	            }
	
	
	            var group = self.group(), oldType = group.sparklineType;
	            if (oldType !== value) {
	                group.sparklineType = value;
	
	                var sheet = self._getWorksheet();
	                if(sheet && sheet._modelManager._changes) {
	                    var backOption = {
	                        row : self.row,
	                        col : self.column,
	                        sparklineType : oldType
	                    };
	                    sheet._modelManager._backupSparklines(3 , backOption);
	                }
	
	                self.onSparklineChanged();
	                if(sheet) {
	                    sheet._invalidate();
	                }
	            }
	            return self;
	        },
	        onSparklineChanged: function () {
	            var self = this;
	            var sheet = self._getWorksheet();
	            if (sheet) {
	                sheet._trigger(Core.Events.SparklineChanged, {
	                    sheet: sheet,
	                    sheetName: sheet.name(),
	                    sparkline: self
	                });
	            }
	        },
	       
	        
	        setting: function (value) {
	            var self = this, group = self.group();
	            var sheet = self._getWorksheet(), isNeedBackup = sheet && sheet._modelManager._changes;
	            if (arguments.length === 0) {
	                var result;
	                if(isNeedBackup) {
	                    result = GC$.extend(true, {}, group.setting);
	                } else {
	                    result = group.setting;
	                }
	               
	                return result;
	            }
	
	            if(isNeedBackup) {
	                var backOption = {
	                    row : self.row,
	                    col : self.column,
	                    setting : GC$.extend(true, {}, group.setting)
	                };
	                sheet._modelManager._backupSparklines(4 , backOption);
	            }
	            group.setting = value;
	            if(sheet) {
	                sheet._invalidate();
	            }
	            return self;
	        },
	       
	        
	        data: function (value) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._data;
	            }
	            var sheet = self._getWorksheet();
	            if(sheet && sheet._modelManager._changes) {
	                var backOption = {
	                    row : self.row,
	                    col : self.column,
	                    sparkline: self,
	                    data : GC$.extend(true, {}, self._data)
	                };
	                sheet._modelManager._backupSparklines(5 , backOption);
	            }
	            if (self._data !== value) {
	                self._data = value;
	                self.onSparklineChanged();
	            }
	            if(sheet) {
	                sheet._invalidate();
	            }
	            return self;
	        },
	        dataSheetName: function (value) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._dataSheetName;
	            }
	            var dataSheetName = self._dataSheetName;
	            var sheet = self._getWorksheet();
	            if (sheet && sheet._modelManager._changes) {
	                var backOption = {
	                    row : self.row,
	                    col : self.column,
	                    dataSheetName : dataSheetName
	                };
	                sheet._modelManager._backupSparklines(15 , backOption);
	            }
	            if (dataSheetName !== value) {
	               
	                if (dataSheetName && sheet) {
	                    sheet._sparklineGroupManager._removeExternalSparkline(self);
	                }
	
	                self._dataSheetName = value;
	
	               
	                if (value && sheet) {
	                    sheet._sparklineGroupManager._addExternalSparkline(self);
	                }
	                self.onSparklineChanged();
	            }
	            return self;
	        },
	       
	        
	        dataOrientation: function (value) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._dataOrientation;
	            }
	            var sheet = self._getWorksheet();
	            if(sheet && sheet._modelManager._changes) {
	                var backOption = {
	                    row : self.row,
	                    col : self.column,
	                    dataOrientation : self._dataOrientation
	                };
	                sheet._modelManager._backupSparklines(6 , backOption);
	            }
	            if (self._dataOrientation !== value) {
	                self._dataOrientation = value;
	                self.onSparklineChanged();
	            }
	            if(sheet) {
	                sheet._invalidate();
	            }
	            return self;
	        },
	       
	        
	        dateAxisData: function (value) {
	            var self = this, group = self.group();
	            if (arguments.length === 0) {
	                return group.dateAxisData();
	            }
	
	            group.dateAxisData(value);
	            return self;
	        },
	        dateAxisDataSheetName: function (value) {
	            var self = this, group = self.group();
	            if (arguments.length === 0) {
	                return group.dateAxisDataSheetName();
	            }
	
	            group.dateAxisDataSheetName(value);
	            return self;
	        },
	       
	        
	        dateAxisOrientation: function (value) {
	            var self = this, group = self.group();
	            if (arguments.length === 0) {
	                return group.dateAxisOrientation();
	            }
	
	            group.dateAxisOrientation(value);
	            return self;
	        },
	       
	        
	        displayDateAxis: function (value) {
	            var self = this, group = self.group();
	            if (arguments.length === 0) {
	                return group.displayDateAxis;
	            }
	            var sheet = self._getWorksheet();
	            if(sheet && sheet._modelManager._changes) {
	                var backOption = {
	                    row : self.row,
	                    col : self.column,
	                    displayDateAxis : group.displayDateAxis
	                };
	                sheet._modelManager._backupSparklines(7 , backOption);
	            }
	
	            group.displayDateAxis = value;
	            return self;
	        },
	       
	        
	        clone: function () {
	            var self = this;
	            var s = new Sparkline();
	            s.row = self.row;
	            s.column = self.column;
	            s.data(self.data());
	            s.dataSheetName(self.dataSheetName());
	            s.dataOrientation(self.dataOrientation());
	            s.group(self.group().clone());
	            return s;
	        },
	       
	        
	        paintSparkline: function (ctx, x, y, w, h) {
	            var self = this;
	            var worksheet = self._getWorksheet();
	            var dataSheet = worksheet.parent.getSheetFromName(self.dataSheetName());
	            var dateAxisDataSheet = worksheet.parent.getSheetFromName(self.dateAxisDataSheetName());
	            var value = {
	                sparklineType: self.sparklineType(),
	                displayDateAxis: self.displayDateAxis(),
	                zoomFactor: worksheet.zoom(),
	                values: self._provideValues(self.data(), self.dataOrientation(), false, dataSheet || worksheet),
	                dateValues: self._provideValues(self.dateAxisData(), self.dateAxisOrientation(), true, dateAxisDataSheet || worksheet),
	                settings: self.setting(),
	                getColor: function (color) {
	                    if (worksheet && color) {
	                        var c = Core._ThemeContext._getColor(worksheet, color);
	                        if (c) {
	                            return c;
	                        }
	                    }
	                    return color;
	                }
	            };
	
	            new SparklineRender().paint(ctx, value, x, y, w, h);
	        },
	       
	        _provideValues: function (range, orientation, isDatetime, sheet) {
	            var self = this, displayHidden = self.setting().options.displayHidden;
	            return Sparkline._provideValuesImp(keyword_undefined, sheet, displayHidden, range, orientation, isDatetime);
	        },
	        _getWorksheet: function () {
	            var group = this.group(), sparklineGroupManager = group && group._sparklineGroupManager;
	            return sparklineGroupManager ? sparklineGroupManager._sheet : keyword_null;
	        },
	        toJSON: function () {
	            var self = this;
	            return {
	                row: self.row,
	                col: self.column,
	                orientation: self._dataOrientation,
	                data: {
	                    row: self._data.row,
	                    rowCount: self._data.rowCount,
	                    col: self._data.col,
	                    colCount: self._data.colCount,
	                    sheetName: self._dataSheetName
	                }
	            };
	        },
	        fromJSON: function (jsonData) {
	            if (jsonData) {
	                var self = this;
	                var row = jsonData.row,
	                    col = jsonData.col,
	                    orientation = jsonData.orientation,
	                    data = jsonData.data;
	                if (!isNullOrUndefined(row)) {
	                    self.row = row;
	                }
	                if (!isNullOrUndefined(col)) {
	                    self.column = col;
	                }
	                if (!isNullOrUndefined(orientation)) {
	                    self._dataOrientation = orientation;
	                }
	                if (data) {
	                    var cr = data;
	                    self._data = createRange(cr.row, cr.col, cr.rowCount, cr.colCount);
	                    self._dataSheetName = cr.sheetName;
	                }
	            }
	        }
	    };
	    Sparkline._provideValuesImp = function (values, sheet, displayHidden, range, orientation, isDatetime) {
	        var const_number = 'number';
	        var ret = [],
	            isHorizontal = orientation === 1 ;
	       
	        if (sheet && range) {
	            for (var i = 0, count = isHorizontal ? range.colCount : range.rowCount; i < count; i++) {
	                var rowOffset = isHorizontal ? 0 : i,
	                    colOffset = isHorizontal ? i : 0;
	                var value = values ? values[rowOffset][colOffset] : sheet.getValue(range.row + rowOffset, range.col + colOffset);
	
	               
	                if (value instanceof Calc.CalcError) {
	                    continue;
	                }
	                
	                if (!displayHidden && (sheet.getRowHeight(range.row + rowOffset) <= 0 || sheet.getColumnWidth(range.col + colOffset) <= 0)) {
	                    value = NaN;
	                } else if (!isNullOrUndefined(value)) {
	                    if (isDatetime) {
	                        if (typeof value === const_number) {
	                            value = Common._DateTimeHelper._fromOADate(value);
	                        } else {
	                            value = Date.parse(value);
	                        }
	                    } else if (typeof value !== const_number) {
	                        value = __invalidValuePlaceHolder;
	                    }
	                }
	                ret.push(value);
	            }
	        }
	        return ret;
	    };
	   
	    
	    exports.Sparkline = Sparkline;
	   
	
	    module.exports = exports;
	
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
/***/ (function(module, exports) {

	module.exports = GC.Spread.CalcEngine;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sparklines;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Calc = __webpack_require__(4);
	    var Core = __webpack_require__(2);
	    var SparklineEx_Module = __webpack_require__(5);
	    var Sparklines = __webpack_require__(1);
	    var Common = __webpack_require__(3);
	
	    var exports = Sparklines;
	
	    var isReference = Calc && Calc.Convert._isReference;
	    var Functions = Calc && Calc.Functions;
	    var GCFunction = Functions && Functions.Function;
	    var Functions_builtInFunctions = Functions && Functions._builtInFunctions;
	    var isNullOrUndefined = Common._Types._isNullOrUndefined;
	    var $ = Core.GC$, Workbook = Core.Workbook, inherit = $.inherit, extend = $.extend;
	    var SparklineRender = SparklineEx_Module.SparklineRender;
	    var SparklineExRenders = SparklineEx_Module.SparklineExRenders;
	
	    var keyword_null = null;
	    var isNotANumber = isNaN;
	    var convertFloat = parseFloat;
	    var NOT_A_NUMBER = NaN;
	    var PIESPARKLINE = 'PIESPARKLINE';
	    var AREASPARKLINE = 'AREASPARKLINE';
	    var SCATTERSPARKLINE = 'SCATTERSPARKLINE';
	    var BULLETSPARKLINE = 'BULLETSPARKLINE';
	    var SPREADSPARKLINE = 'SPREADSPARKLINE';
	    var STACKEDSPARKLINE = 'STACKEDSPARKLINE';
	    var HBARSPARKLINE = 'HBARSPARKLINE';
	    var VBARSPARKLINE = 'VBARSPARKLINE';
	    var VARISPARKLINE = 'VARISPARKLINE';
	    var BOXPLOTSPARKLINE = 'BOXPLOTSPARKLINE';
	    var CASCADESPARKLINE = 'CASCADESPARKLINE';
	    var PARETOSPARKLINE = 'PARETOSPARKLINE';
	    var MONTHSPARKLINE = 'MONTHSPARKLINE';
	    var YEARSPARKLINE = 'YEARSPARKLINE';
	    var LINESPARKLINE = 'LINESPARKLINE';
	    var COLUMNSPARKLINE = 'COLUMNSPARKLINE';
	    var WINLOSSSPARKLINE = 'WINLOSSSPARKLINE';
	
	    function acceptZero(argIndex) {
	        return argIndex === 0;
	    }
	
	    function acceptZeroAndTwo(argIndex) {
	        return argIndex === 0 || argIndex === 2;
	    }
	
	    function getAllValuesFromReference(reference) {
	        var resultArray = [];
	        if (isReference(reference)) {
	            for (var i = 0, rangesCount = reference.getRangeCount(); i < rangesCount; i++) {
	                var rowCount = reference.getRowCount(i), colCount = reference.getColumnCount(i);
	                for (var r = 0; r < rowCount; r++) {
	                    for (var c = 0; c < colCount; c++) {
	                        resultArray.push(reference.getValue(i, r, c));
	                    }
	                }
	            }
	        }
	        return resultArray;
	    }
	
	    function getRangeValuesFromReference(reference, rangeIndex) {
	        var resultArray = [];
	        if (isReference(reference)) {
	            var rangesCount = reference.getRangeCount();
	            if (rangesCount > rangeIndex) {
	                var rowCount = reference.getRowCount(rangeIndex), colCount = reference.getColumnCount(rangeIndex);
	                for (var r = 0; r < rowCount; r++) {
	                    resultArray[r] = [];
	                    for (var c = 0; c < colCount; c++) {
	                        resultArray[r].push(reference.getValue(rangeIndex, r, c));
	                    }
	                }
	            }
	        }
	        return resultArray;
	    }
	
	    function getFirstValueFromReference(reference) {
	        var result;
	        if (isReference(reference)) {
	            result = reference.getValue(0, 0, 0);
	        } else if (!isNullOrUndefined(reference)) {
	            result = reference;
	        }
	        return result;
	    }
	
	   
	    var SparklineExValue = exports.SparklineExValue = function (name, value) {
	        this.name = name;
	        this.value = value;
	        this.typeName = "SparklineExValue";
	    };
	   
	    SparklineExValue.prototype.toString = function () {
	        return '';
	    };
	   
	
	   
	   
	    
	    function SparklineEx() {
	        var customFunction = this.createFunction();
	        if (customFunction) {
	            var name = customFunction.name;
	            var oldEvaluate = customFunction.evaluate;
	            customFunction.evaluate = function () {
	                var value = oldEvaluate.call(this, arguments);
	                if (value instanceof Calc.CalcError) {
	                    return value;
	                } else if(value) {
	                    return new SparklineExValue(name, value);
	                }
	                return keyword_null;
	            };
	            this._name = name;
	            if (name && !Functions.findGlobalFunction(name)) {
	                Functions._customFunctions[name] = customFunction;
	            }
	        }
	       
	        
	        this.typeName = '';
	    }
	
	    extend(SparklineEx.prototype, {
	       
	        
	        name: function () {
	            return this._name;
	        },
	       
	        
	        createFunction: function () {
	            return keyword_null;
	        },
	       
	        
	        paint: function (context, value, x, y, width, height, options) {
	        },
	       
	        
	        toJSON: function () {
	            var settings = {};
	            for (var p in this) {
	                if (this.hasOwnProperty(p)) {
	                    settings[p] = this[p];
	                }
	            }
	            return settings;
	        },
	       
	        
	        fromJSON: function (settings) {
	            if (settings) {
	                for (var p in settings) {
	                    if (!isNullOrUndefined(settings[p])) {
	                        this[p] = settings[p];
	                    }
	                }
	            }
	        }
	    });
	    exports.SparklineEx = SparklineEx;
	   
	
	   
	   
	    
	    function PieSparkline() {
	        SparklineEx.call(this);
	    }
	
	    inherit(PieSparkline, SparklineEx);
	    extend(PieSparkline.prototype, {
	        createFunction: function () {
	            var func = new GCFunction(PIESPARKLINE, 1, 255);
	            func.evaluate = function (args) {
	                var reference = args[0];
	                var resultArray = getAllValuesFromReference(reference);
	                if (resultArray.length <= 0 && !isNullOrUndefined(reference)) {
	                    resultArray.push(reference);
	                }
	                return {
	                    values: resultArray,
	                    colors: Array.prototype.slice.call(args, 1)
	                };
	            };
	            func.acceptsReference = acceptZero;
	            return func;
	        },
	        paint: SparklineExRenders[PIESPARKLINE]
	    });
	    exports.PieSparkline = PieSparkline;
	   
	
	   
	   
	    
	    function AreaSparkline() {
	        SparklineEx.call(this);
	    }
	
	    inherit(AreaSparkline, SparklineEx);
	    extend(AreaSparkline.prototype, {
	        createFunction: function () {
	            var func = new GCFunction(AREASPARKLINE, 1, 7);
	            func.evaluate = function (args) {
	                return {
	                    points: getAllValuesFromReference(args[0]),
	                    mini: args[1],
	                    maxi: args[2],
	                    line1: args[3],
	                    line2: args[4],
	                    colorPositive: args[5],
	                    colorNegative: args[6]
	                };
	            };
	            func.acceptsReference = acceptZero;
	            return func;
	        },
	        paint: SparklineExRenders[AREASPARKLINE]
	    });
	    exports.AreaSparkline = AreaSparkline;
	   
	
	   
	   
	    
	    function ScatterSparkline() {
	        SparklineEx.call(this);
	    }
	
	    inherit(ScatterSparkline, SparklineEx);
	    extend(ScatterSparkline.prototype, {
	        createFunction: function () {
	            var func = new GCFunction(SCATTERSPARKLINE, 1, 18);
	            func.evaluate = function (args) {
	                var points1 = getRangeValuesFromReference(args[0], 0), points2 = getRangeValuesFromReference(args[1], 0);
	                return {
	                    points1: points1,
	                    points2: points2,
	                    minX: args[2],
	                    maxX: args[3],
	                    minY: args[4],
	                    maxY: args[5],
	                    hLine: args[6],
	                    vLine: args[7],
	                    xMinZone: args[8],
	                    xMaxZone: args[9],
	                    yMinZone: args[10],
	                    yMaxZone: args[11],
	                    tags: args[12],
	                    drawSymbol: args[13],
	                    drawLines: args[14],
	                    color1: args[15],
	                    color2: args[16],
	                    dash: args[17]
	                };
	            };
	            func.acceptsReference = function (argIndex) {
	                return argIndex === 0 || argIndex === 1;
	            };
	            return func;
	        },
	        paint: SparklineExRenders[SCATTERSPARKLINE]
	    });
	    exports.ScatterSparkline = ScatterSparkline;
	   
	
	   
	   
	    
	    function BulletSparkline() {
	        SparklineEx.call(this);
	    }
	
	    inherit(BulletSparkline, SparklineEx);
	    extend(BulletSparkline.prototype, {
	        createFunction: function () {
	            var func = new GCFunction(BULLETSPARKLINE, 3, 9);
	            func.evaluate = function (args) {
	                return {
	                    measure: getFirstValueFromReference(args[0]),
	                    target: getFirstValueFromReference(args[1]),
	                    maxi: getFirstValueFromReference(args[2]),
	                    good: getFirstValueFromReference(args[3]),
	                    bad: getFirstValueFromReference(args[4]),
	                    forecast: getFirstValueFromReference(args[5]),
	                    tickUnit: getFirstValueFromReference(args[6]),
	                    colorScheme: args[7],
	                    vertical: args[8]
	                };
	            };
	            func.acceptsReference = function (argIndex) {
	                return 0 <= argIndex && argIndex <= 6;
	            };
	            return func;
	        },
	        paint: SparklineExRenders[BULLETSPARKLINE]
	    });
	    exports.BulletSparkline = BulletSparkline;
	   
	
	   
	   
	    
	    function SpreadSparkline() {
	        SparklineEx.call(this);
	    }
	
	    inherit(SpreadSparkline, SparklineEx);
	    extend(SpreadSparkline.prototype, {
	        createFunction: function () {
	            function fixValues(values) {
	                var newValues = [], temp;
	                for (var i = 0, j = 0, length = values.length; i < length; i++) {
	                    temp = convertFloat(values[i]);
	                    if (!isNotANumber(temp) && isFinite(temp)) {
	                        newValues[j++] = temp;
	                    }
	                }
	                return newValues;
	            }
	
	            function toArray(points) {
	                var dict = {};
	                for (var i = 0, p, pointCount = points.length; i < pointCount; i++) {
	                    p = points[i];
	                    if (dict[p]) {
	                        dict[p]++;
	                    } else {
	                        dict[p] = 1;
	                    }
	                }
	                var resultArray = [];
	                for (var key in dict) {
	                    if (dict.hasOwnProperty(key)) {
	                        resultArray.push({key: convertFloat(key), value: dict[key]});
	                    }
	                }
	                return resultArray.sort(function (item1, item2) {
	                    return item1.key - item2.key;
	                });
	            }
	
	            var func = new GCFunction(SPREADSPARKLINE, 1, 7);
	            func.evaluate = function (args) {
	                var points = getAllValuesFromReference(args[0]);
	                var sparklineDataArray = [];
	                if (!isNullOrUndefined(points)) {
	                    points = fixValues(points);
	                    sparklineDataArray = toArray(points);
	                    var style = args[4];
	                    if (style === 3 ) {
	                        for (var i = 0, pointCount = sparklineDataArray.length; i < pointCount; i++) {
	                            var p = sparklineDataArray[i], pValue = p.value, randomNumbers = [], MAX_ATTEMPT_TIMES = Math.max(100, pValue * 10);
	                            for (var k = 0; k < MAX_ATTEMPT_TIMES + pValue - 1; k++) {
	                                randomNumbers.push(Math.random());
	                            }
	                            p.randomNumbers = randomNumbers;
	                        }
	                    }
	                }
	                return {
	                    spreadData: sparklineDataArray,
	                    showAverage: args[1],
	                    scaleStart: args[2],
	                    scaleEnd: args[3],
	                    style: style,
	                    colorScheme: args[5],
	                    vertical: args[6]
	                };
	            };
	            func.acceptsReference = acceptZero;
	            return func;
	        },
	        paint: SparklineExRenders[SPREADSPARKLINE]
	    });
	    exports.SpreadSparkline = SpreadSparkline;
	   
	
	   
	   
	    
	    function StackedSparkline() {
	        SparklineEx.call(this);
	    }
	
	    inherit(StackedSparkline, SparklineEx);
	    extend(StackedSparkline.prototype, {
	        createFunction: function () {
	            var func = new GCFunction(STACKEDSPARKLINE, 1, 13);
	            func.evaluate = function (args) {
	                return {
	                    points: getAllValuesFromReference(args[0]),
	                    colorRange: getAllValuesFromReference(args[1]),
	                    labelRange: getAllValuesFromReference(args[2]),
	                    maximum: args[3],
	                    targetRed: args[4],
	                    targetGreen: args[5],
	                    targetBlue: args[6],
	                    targetYellow: args[7],
	                    color: args[8],
	                    highlightPosition: args[9],
	                    vertical: args[10],
	                    textOrientation: args[11],
	                    textSize: args[12]
	                };
	            };
	            func.acceptsReference = function (argIndex) {
	                return 0 <= argIndex && argIndex <= 2;
	            };
	            return func;
	        },
	        paint: SparklineExRenders[STACKEDSPARKLINE]
	    });
	    exports.StackedSparkline = StackedSparkline;
	   
	
	   
	   
	    
	    function HBarSparkline() {
	        SparklineEx.call(this);
	    }
	
	    inherit(HBarSparkline, SparklineEx);
	    extend(HBarSparkline.prototype, {
	        createFunction: function () {
	            var func = new GCFunction(HBARSPARKLINE, 1, 2);
	            func.evaluate = function (args) {
	                return {
	                    value: getFirstValueFromReference(args[0]),
	                    colorScheme: args[1]
	                };
	            };
	            func.acceptsReference = acceptZero;
	            return func;
	        },
	        paint: SparklineExRenders[HBARSPARKLINE]
	    });
	    exports.HBarSparkline = HBarSparkline;
	   
	
	   
	   
	    
	    function VBarSparkline() {
	        SparklineEx.call(this);
	    }
	
	    inherit(VBarSparkline, SparklineEx);
	    extend(VBarSparkline.prototype, {
	        createFunction: function () {
	            var func = new GCFunction(VBARSPARKLINE, 1, 2);
	            func.evaluate = function (args) {
	                return {
	                    value: getFirstValueFromReference(args[0]),
	                    colorScheme: args[1]
	                };
	            };
	            func.acceptsReference = acceptZero;
	            return func;
	        },
	        paint: SparklineExRenders[VBARSPARKLINE]
	    });
	    exports.VBarSparkline = VBarSparkline;
	   
	
	   
	   
	    
	    function VariSparkline() {
	        SparklineEx.call(this);
	    }
	
	    inherit(VariSparkline, SparklineEx);
	    extend(VariSparkline.prototype, {
	        createFunction: function () {
	            var func = new GCFunction(VARISPARKLINE, 1, 10);
	            func.evaluate = function (args) {
	                return {
	                    variance: getFirstValueFromReference(args[0]),
	                    reference: getFirstValueFromReference(args[1]),
	                    mini: getFirstValueFromReference(args[2]),
	                    maxi: getFirstValueFromReference(args[3]),
	                    mark: getFirstValueFromReference(args[4]),
	                    tickUnit: getFirstValueFromReference(args[5]),
	                    legend: args[6],
	                    colorPositive: args[7],
	                    colorNegative: args[8],
	                    vertical: args[9]
	                };
	            };
	            func.acceptsReference = function (argIndex) {
	                return 0 <= argIndex && argIndex <= 5;
	            };
	            return func;
	        },
	        paint: SparklineExRenders[VARISPARKLINE]
	    });
	    exports.VariSparkline = VariSparkline;
	   
	
	   
	   
	    
	    function BoxPlotSparkline() {
	        SparklineEx.call(this);
	    }
	
	    inherit(BoxPlotSparkline, SparklineEx);
	    extend(BoxPlotSparkline.prototype, {
	        createFunction: function () {
	            function getPercentitleValue(reference, dValue) {
	                if (isReference(reference) && !isNotANumber(dValue) && 0 <= dValue && dValue <= 100) {
	                    return Functions_builtInFunctions['PERCENTILE'].evaluate(reference, dValue / 100.0);
	                }
	                return NOT_A_NUMBER;
	            }
	
	            function getStDevpValue(reference) {
	                if (isReference(reference)) {
	                    return Functions_builtInFunctions['STDEVP'].evaluate(reference);
	                }
	                return NOT_A_NUMBER;
	            }
	
	            var func = new GCFunction(BOXPLOTSPARKLINE, 1, 10);
	            func.evaluate = function (args) {
	                var reference = args[0];
	                return {
	                    points: getAllValuesFromReference(reference),
	                    boxPlotClass: args[1],
	                    showAverage: args[2],
	                    scaleStart: getFirstValueFromReference(args[3]),
	                    scaleEnd: getFirstValueFromReference(args[4]),
	                    acceptableStart: getFirstValueFromReference(args[5]),
	                    acceptableEnd: getFirstValueFromReference(args[6]),
	                    colorScheme: args[7],
	                    style: args[8],
	                    vertical: args[9],
	                    perc02: getPercentitleValue(reference, 2),
	                    perc09: getPercentitleValue(reference, 9),
	                    perc10: getPercentitleValue(reference, 10),
	                    perc90: getPercentitleValue(reference, 90),
	                    perc91: getPercentitleValue(reference, 91),
	                    perc98: getPercentitleValue(reference, 98),
	                    q1: getPercentitleValue(reference, 25),
	                    q3: getPercentitleValue(reference, 75),
	                    median: getPercentitleValue(reference, 50),
	                    stDev: getStDevpValue(reference)
	                };
	            };
	            func.acceptsReference = acceptZero;
	            return func;
	        },
	        paint: SparklineExRenders[BOXPLOTSPARKLINE]
	    });
	    exports.BoxPlotSparkline = BoxPlotSparkline;
	   
	
	   
	   
	    
	    function CascadeSparkline() {
	        SparklineEx.call(this);
	    }
	
	    inherit(CascadeSparkline, SparklineEx);
	    extend(CascadeSparkline.prototype, {
	        createFunction: function () {
	            var func = new GCFunction(CASCADESPARKLINE, 1, 8);
	            func.evaluate = function (args) {
	                return {
	                    points: getAllValuesFromReference(args[0]),
	                    pointIndex: getFirstValueFromReference(args[1]),
	                    labels: getAllValuesFromReference(args[2]),
	                    minimum: getFirstValueFromReference(args[3]),
	                    maximum: getFirstValueFromReference(args[4]),
	                    colorPositive: args[5],
	                    colorNegative: args[6],
	                    vertical: args[7]
	                };
	            };
	            func.acceptsReference = acceptZeroAndTwo;
	            func.acceptsArray = acceptZeroAndTwo;
	            return func;
	        },
	        paint: SparklineExRenders[CASCADESPARKLINE]
	    });
	    exports.CascadeSparkline = CascadeSparkline;
	   
	
	   
	   
	    
	    function ParetoSparkline() {
	        SparklineEx.call(this);
	    }
	
	    inherit(ParetoSparkline, SparklineEx);
	    extend(ParetoSparkline.prototype, {
	        createFunction: function () {
	            var func = new GCFunction(PARETOSPARKLINE, 1, 8);
	            func.evaluate = function (args) {
	                return {
	                    points: getAllValuesFromReference(args[0]),
	                    pointIndex: getFirstValueFromReference(args[1]),
	                    colorRange: getAllValuesFromReference(args[2]),
	                    target: getFirstValueFromReference(args[3]),
	                    target2: getFirstValueFromReference(args[4]),
	                    highlightPosition: getFirstValueFromReference(args[5]),
	                    label: args[6],
	                    vertical: args[7]
	                };
	            };
	            func.acceptsReference = acceptZeroAndTwo;
	            func.acceptsArray = acceptZeroAndTwo;
	            return func;
	        },
	        paint: SparklineExRenders[PARETOSPARKLINE]
	    });
	    exports.ParetoSparkline = ParetoSparkline;
	   
	
	   
	   
	    
	    function MonthSparkline() {
	        SparklineEx.call(this);
	    }
	
	    inherit(MonthSparkline, SparklineEx);
	    extend(MonthSparkline.prototype, {
	        createFunction: function () {
	            var func = new GCFunction(MONTHSPARKLINE, 3, 7);
	            func.evaluate = function (args) {
	                var year = args[0], month = args[1], reference = args[2];
	                var rangeValues = reference;
	                if (isReference(reference)) {
	                    rangeValues = getRangeValuesFromReference(reference, 0);
	                }
	                var emptyColorOrColorRange = args[3];
	                var rangeColors = [];
	                if (isReference(emptyColorOrColorRange)) {
	                    rangeColors = getRangeValuesFromReference(emptyColorOrColorRange, 0);
	                }
	                var values = [], colors = [];
	                for (var i = 0, length = rangeValues.length; i < length; i++) {
	                    var tmp = rangeValues[i];
	                    if (tmp) {
	                        var date = tmp[0];
	                        if (date && date.getFullYear() === year && date.getMonth() + 1 === month) {
	                            var index = date.getDate() - 1;
	                            values[index] = tmp[1];
	                            if (rangeColors.length > 0) {
	                                colors[index] = rangeColors[i][0];
	                            }
	                        }
	                    }
	                }
	                if (rangeColors.length > 0) {
	                    return {
	                        year: year,
	                        month: month,
	                        values: values,
	                        colors: colors
	                    };
	                }
	                return {
	                    year: year,
	                    month: month,
	                    values: values,
	                    emptyColor: emptyColorOrColorRange,
	                    startColor: args[4],
	                    middleColor: args[5],
	                    endColor: args[6]
	                };
	            };
	            func.acceptsReference = function (argIndex) {
	                return argIndex === 2 || argIndex === 3;
	            };
	            return func;
	        },
	        paint: SparklineExRenders[MONTHSPARKLINE]
	    });
	    exports.MonthSparkline = MonthSparkline;
	   
	
	   
	   
	    
	    function YearSparkline() {
	        SparklineEx.call(this);
	    }
	
	    inherit(YearSparkline, SparklineEx);
	
	    function daysOfMonth(year, month) {
	        switch (month) {
	            case 2:
	                var isLeapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
	                return isLeapYear ? 29 : 28;
	            case 4:
	            case 6:
	            case 9:
	            case 11:
	                return 30;
	            default:
	                return 31;
	        }
	    }
	
	    function dayInYear(date) {
	        var year = date.getFullYear(), month = date.getMonth();
	        var day = date.getDate();
	        for (var i = 1; i < month + 1; i++) {
	            day += daysOfMonth(year, i);
	        }
	        return day;
	    }
	
	    extend(YearSparkline.prototype, {
	        createFunction: function () {
	            var func = new GCFunction(YEARSPARKLINE, 2, 6);
	            func.evaluate = function (args) {
	                var year = args[0], reference = args[1];
	                var rangeValues = reference;
	                if (isReference(reference)) {
	                    rangeValues = getRangeValuesFromReference(reference, 0);
	                }
	                var emptyColorOrColorRange = args[2];
	                var rangeColors = [];
	                if (isReference(emptyColorOrColorRange)) {
	                    rangeColors = getRangeValuesFromReference(emptyColorOrColorRange, 0);
	                }
	                var values = [], colors = [];
	                for (var i = 0, length = rangeValues.length; i < length; i++) {
	                    var tmp = rangeValues[i];
	                    if (tmp) {
	                        var date = tmp[0];
	                        if (date && date.getFullYear() === year) {
	                            var index = dayInYear(date) - 1;
	                            values[index] = tmp[1];
	                            if (rangeColors.length > 0) {
	                                colors[index] = rangeColors[i][0];
	                            }
	                        }
	                    }
	                }
	                if (rangeColors.length > 0) {
	                    return {
	                        year: year,
	                        values: values,
	                        colors: colors
	                    };
	                }
	                return {
	                    year: year,
	                    values: values,
	                    emptyColor: emptyColorOrColorRange,
	                    startColor: args[3],
	                    middleColor: args[4],
	                    endColor: args[5]
	                };
	            };
	            func.acceptsReference = function (argIndex) {
	                return argIndex === 1 || argIndex === 2;
	            };
	            return func;
	        },
	        paint: SparklineExRenders[YEARSPARKLINE]
	    });
	    exports.YearSparkline = YearSparkline;
	   
	
	   
	    function compatibleSparkline_createFunction(name, type) {
	        function _parseSetting(jsonSetting) {
	            var setting = {}, inBracket = false, inProperty = true, property = '', value = '';
	            if (jsonSetting) {
	                jsonSetting = jsonSetting.substr(1, jsonSetting.length - 2);
	                for (var i = 0, len = jsonSetting.length; i < len; i++) {
	                    var ch = jsonSetting.charAt(i);
	                    if (ch === ':') {
	                        inProperty = false;
	                    } else if (ch === ',' && !inBracket) {
	                        setting[property] = value;
	                        property = '';
	                        value = '';
	                        inProperty = true;
	                    } else if (ch === '\'' || ch === '"') {
	                       
	                    } else {
	                        if (ch === '(') {
	                            inBracket = true;
	                        } else if (ch === ')') {
	                            inBracket = false;
	                        }
	                        if (inProperty) {
	                            property += ch;
	                        } else {
	                            value += ch;
	                        }
	                    }
	                }
	                if (property) {
	                    setting[property] = value;
	                }
	                for (var p in setting) {
	                    if (setting.hasOwnProperty(p)) {
	                        var v = setting[p];
	                        if (!isNullOrUndefined(v)) {
	                            if (v.toUpperCase() === 'TRUE') {
	                                setting[p] = true;
	                            } else if (v.toUpperCase() === 'FALSE') {
	                                setting[p] = false;
	                            } else if (!isNotANumber(v) && isFinite(v)) {
	                                setting[p] = convertFloat(v);
	                            }
	                        }
	                    }
	                }
	            }
	            return setting;
	        }
	
	        function cloneRange(range) {
	            return new Core.Range(range.getRow(0), range.getColumn(0), range.getRowCount(0), range.getColumnCount(0));
	        }
	
	        var func = new GCFunction(name, 2, 5);
	        func.evaluate = function (args) {
	            var args0 = args[0];
	            if (isReference(args0)) {
	                var rangesCount = args0.getRangeCount();
	                if (rangesCount > 0) {
	                    var dataReference = cloneRange(args0);
	                    var dataSheetName = args0.getSource().getSheet().name();
	                    var dataOrientation = args[1];
	                    var args2 = args[2], dateAxisRange, dateAxisOrientation, dateAxisDataSheetName;
	                    if (isReference(args2)) {
	                        dateAxisDataSheetName = args2.getSource().getSheet().name();
	                        rangesCount = args2.getRangeCount();
	                        if (rangesCount > 0) {
	                            dateAxisRange = cloneRange(args2);
	                            dateAxisOrientation = args[3];
	                        }
	                    }
	                    var settingObj = _parseSetting(args[4] || '{}');
	                    var shortDict = {
	                        ac: "axisColor",
	                        fmc: "firstMarkerColor",
	                        hmc: "highMarkerColor",
	                        lastmc: "lastMarkerColor",
	                        lowmc: "lowMarkerColor",
	                        mc: "markersColor",
	                        nc: "negativeColor",
	                        sc: "seriesColor",
	                        deca: "displayEmptyCellsAs",
	                        rtl: "rightToLeft",
	                        dh: "displayHidden",
	                        dxa: "displayXAxis",
	                        sf: "showFirst",
	                        sh: "showHigh",
	                        slast: "showLast",
	                        slow: "showLow",
	                        sn: "showNegative",
	                        sm: "showMarkers",
	                        mmax: "manualMax",
	                        mmin: "manualMin",
	                        maxat: "maxAxisType",
	                        minat: "minAxisType",
	                        lw: "lineWeight"
	                    };
	                    for (var p in shortDict) {
	                        if (shortDict.hasOwnProperty(p) && settingObj.hasOwnProperty(p)) {
	                            settingObj[shortDict[p]] = settingObj[p];
	                        }
	                    }
	                    var setting = new Sparklines.SparklineSetting(settingObj);
	                    var settingOptions = setting.options;
	                    if (settingOptions.maxAxisType === 1 ) {
	                        settingOptions.maxAxisType = 0 ;
	                    }
	                    if (settingOptions.minAxisType === 1 ) {
	                        settingOptions.minAxisType = 0 ;
	                    }
	                    return {
	                        data: dataReference,
	                        dataSheetName: dataSheetName,
	                        dataOrientation: dataOrientation,
	                        dateAxisData: dateAxisRange,
	                        dateAxisDataSheetName: dateAxisDataSheetName,
	                        dateAxisOrientation: dateAxisOrientation,
	                        sparklineType: type,
	                        displayDateAxis: dateAxisRange && !isNullOrUndefined(dateAxisOrientation),
	                        setting: setting,
	                        values: getRangeValuesFromReference(args0, 0),
	                        dateValues: getRangeValuesFromReference(args2, 0)
	                    };
	                }
	            }
	        };
	        func.acceptsReference = acceptZeroAndTwo;
	        return func;
	    }
	
	    function compatibleSparkline_paint(context, value, x, y, width, height, options) {
	        var compatibleSparkline_adjustValues = Sparklines.Sparkline._provideValuesImp;
	        var worksheet = options.sheet, dataSheet = worksheet.parent.getSheetFromName(value.dataSheetName), dateAxisDataSheet = worksheet.parent.getSheetFromName(value.dateAxisDataSheetName);
	        var setting = value.setting;
	       
	        if (!setting || !setting.options) {
	            setting = new Sparklines.SparklineSetting(setting);
	        }
	        var displayHidden = setting.options.displayHidden;
	        var obj = {
	            sparklineType: value.sparklineType,
	            displayDateAxis: value.displayDateAxis,
	            zoomFactor: options.zoomFactor,
	            values: compatibleSparkline_adjustValues(value.values, dataSheet || worksheet, displayHidden, value.data, value.dataOrientation),
	            dateValues: compatibleSparkline_adjustValues(value.dateValues, dateAxisDataSheet || worksheet, displayHidden, value.dateAxisData, value.dateAxisOrientation, true),
	            settings: setting,
	            getColor: function (color) {
	                if (worksheet && color) {
	                    var c = Core._ThemeContext._getColor(worksheet, color);
	                    if (c) {
	                        return c;
	                    }
	                }
	                return color;
	            }
	        };
	        new SparklineRender().paint(context, obj, x, y, width, height);
	    }
	
	   
	    
	    function LineSparkline() {
	        SparklineEx.call(this);
	    }
	
	    inherit(LineSparkline, SparklineEx);
	    extend(LineSparkline.prototype, {
	        createFunction: function () {
	            return compatibleSparkline_createFunction(LINESPARKLINE, 0 );
	        },
	        paint: compatibleSparkline_paint
	    });
	    exports.LineSparkline = LineSparkline;
	
	   
	    
	    function ColumnSparkline() {
	        SparklineEx.call(this);
	    }
	
	    inherit(ColumnSparkline, SparklineEx);
	    extend(ColumnSparkline.prototype, {
	        createFunction: function () {
	            return compatibleSparkline_createFunction(COLUMNSPARKLINE, 1 );
	        },
	        paint: compatibleSparkline_paint
	    });
	    exports.ColumnSparkline = ColumnSparkline;
	
	   
	    
	    function WinlossSparkline() {
	        SparklineEx.call(this);
	    }
	
	    inherit(WinlossSparkline, SparklineEx);
	    extend(WinlossSparkline.prototype, {
	        createFunction: function () {
	            return compatibleSparkline_createFunction(WINLOSSSPARKLINE, 2 );
	        },
	        paint: compatibleSparkline_paint
	    });
	    exports.WinlossSparkline = WinlossSparkline;
	   
	
	   
	    var _sparklineExCollection = {};
	
	    function addSparklineEx(sparklineEx) {
	        if (sparklineEx) {
	            _sparklineExCollection[sparklineEx.name()] = sparklineEx;
	        }
	    }
	
	    if (GCFunction) {
	        addSparklineEx(new PieSparkline());
	        addSparklineEx(new AreaSparkline());
	        addSparklineEx(new ScatterSparkline());
	        addSparklineEx(new BulletSparkline());
	        addSparklineEx(new SpreadSparkline());
	        addSparklineEx(new StackedSparkline());
	        addSparklineEx(new HBarSparkline());
	        addSparklineEx(new VBarSparkline());
	        addSparklineEx(new VariSparkline());
	        addSparklineEx(new BoxPlotSparkline());
	        addSparklineEx(new CascadeSparkline());
	        addSparklineEx(new ParetoSparkline());
	        addSparklineEx(new MonthSparkline());
	        addSparklineEx(new YearSparkline());
	        addSparklineEx(new LineSparkline());
	        addSparklineEx(new ColumnSparkline());
	        addSparklineEx(new WinlossSparkline());
	    }
	
	    exports._sparklineExCollection = _sparklineExCollection;
	
	    extend(Workbook.prototype, {
	       
	        
	        addSparklineEx: function (sparklineEx) {
	            if (!this._sparklineExs) {
	                this._sparklineExs = {};
	            }
	            var sparklineExs = this._sparklineExs;
	            if (sparklineEx) {
	                sparklineExs[sparklineEx.name()] = sparklineEx;
	            }
	        },
	        getSparklineEx: function (name) {
	            var sp = _sparklineExCollection[name];
	            if (sp) {
	                return sp;
	            }
	
	            var sparklineExs = this._sparklineExs;
	            return sparklineExs && sparklineExs[name];
	        },
	       
	        
	        removeSparklineEx: function (name) {
	            var sparklineExs = this._sparklineExs;
	            if (sparklineExs) {
	                sparklineExs[name] = void 0;
	            }
	        }
	    });
	   
	
	   
	    Workbook._registerFeature('sparklineEx', {
	        toJson: function (data) {
	            var workbook_sparklineExs = this._sparklineExs;
	            var sparklineExs = [];
	            if (workbook_sparklineExs) {
	                for (var name in workbook_sparklineExs) {
	                    if (workbook_sparklineExs.hasOwnProperty(name)) {
	                        var sparklineEx = workbook_sparklineExs[name];
	                        var jsonData = sparklineEx.toJSON();
	                        if (jsonData && jsonData.typeName) {
	                            sparklineExs.push(jsonData);
	                        }
	                    }
	                }
	                if (sparklineExs.length > 0) {
	                    data.sparklineExs = sparklineExs;
	                }
	            }
	        },
	        fromJson: function (workbookData) {
	            var sparklineExs = workbookData.sparklineExs;
	            if (sparklineExs) {
	                for (var num = 0; num < sparklineExs.length; num++) {
	                    var sparklineExJsonData = sparklineExs[num];
	                    var sparklineExClass = Core.getTypeFromString(sparklineExJsonData.typeName);
	                    if (sparklineExClass) {
	                        var sparkline = new sparklineExClass();
	                        sparkline.fromJSON(sparklineExJsonData);
	                        this.addSparklineEx(sparkline);
	                    }
	                }
	            }
	        }
	    });
	
	    module.exports = exports;
	
	}());

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.sparklines.12.0.0.js.map