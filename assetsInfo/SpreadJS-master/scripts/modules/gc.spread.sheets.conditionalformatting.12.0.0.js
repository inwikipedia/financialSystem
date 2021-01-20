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
var GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["ConditionalFormatting"] =
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
	
	    var exports = __webpack_require__(1);
	    exports.SR = {};
	    exports.SR['en'] = __webpack_require__(5);
	    
	    module.exports = exports;
	
	}());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var ConditionalFormatting = {};
	    var Common = __webpack_require__(2);
	    var Sheets = __webpack_require__(3);
	    var CalcEngine = __webpack_require__(4);
	
	    var $ = Sheets.GC$, stringHelper = Common._StringHelper;
	    var keyword_null = null, keyword_undefined = void 0, const_undefined = 'undefined', const_string = 'string',
	        math_min = Math.min, math_max = Math.max, math_abs = Math.abs, math_floor = Math.floor, math_ceil = Math.ceil,
	        calcConvert = CalcEngine.Convert, calcConvert_isNumber = calcConvert._isNumber,
	        calcConvert_toDouble = calcConvert._toDouble, calcConvert_tryToDouble = calcConvert._tryToDouble;
	    var StringHelper = Common._StringHelper;
	    var StringHelper_TrimStart = StringHelper._trimStart;
	    var StringHelper_StartWith = StringHelper._startsWith;
	    var StringHelper_EndsWith = StringHelper._endsWith;
	    var StringHelper_Contains = StringHelper._contains;
	    var isNullOrUndefined = Common._Types._isNullOrUndefined;
	    var RegexHelper = Common._RegexHelper;
	    var isInstanceOf = Common._isInstanceOf;
	    var util = Sheets._util;
	    var adjustConditionFormulaWhenFromJSON = util._adjustConditionFormulaWhenFromJSON;
	    var getBaseRowBaseCol = util._getBaseRowBaseCol;
	    var hasCalc = Sheets._supportsCalc;
	    var Style = Sheets.Style;
	
	    var ColorHelper = Common._ColorHelper;
	    var ColorToString = ColorHelper._toString;
	    var createRange = Sheets._createRange;
	    var Range = Sheets.Range;
	    var dateTimeHelper = Common._DateTimeHelper;
	    var arrayHelper = Common._ArrayHelper;
	    var arrayHelper_remove = arrayHelper._remove, arrayHelper_indexOf = arrayHelper._indexOf,
	        arrayHelper_getLength = arrayHelper._getLength;
	    var Functions = CalcEngine.Functions;
	    var createCellIdentity = CalcEngine._createCellIdentity;
	    var _ThemeContext = Sheets._ThemeContext;
	
	
	    var sR = function () {
	        return Common._getResource(ConditionalFormatting.SR)();
	    };
	
	    var createExpressionByRange = function (range) {
	        var row = range.row < 0 ? CalcEngine.BAND_INDEX_CONST : range.row;
	        var col = range.col < 0 ? CalcEngine.BAND_INDEX_CONST : range.col;
	        return new CalcEngine._createRangeExpression(keyword_null, keyword_null, row, col, row + range.rowCount - 1, col + range.colCount - 1);
	    };
	
	    var createExpression = function (obj) {
	        var expr;
	        if (obj instanceof CalcEngine.Expression) {
	            expr = obj;
	        } else if (obj instanceof Range) {
	            expr = createExpressionByRange(obj);
	        } else if (calcConvert_isNumber(obj)) {
	            obj = calcConvert_toDouble(obj);
	            if (!isNaN(obj)) {
	                expr = new CalcEngine.Expression(2 );
	                expr.value = obj;
	            }
	        } else {
	            throw sR().Exp_NotSupport;
	        }
	        return expr;
	    };
	
	    function getRange(ranges, row, column) {
	        for (var i = 0; i < ranges.length; i++) {
	            var range = ranges[i];
	            if (range.contains(row, column)) {
	                return range;
	            }
	        }
	    }
	
	    function getRowCount(obj) {
	        return obj.rowCount;
	    }
	
	    function getColCount(obj) {
	        return obj.colCount;
	    }
	
	    var defProperty = function (propertyName, initValue, setCallback, getCallBack) {
	        var pname = propertyName;
	        var defValue = initValue;
	        var t = function (value, shouldCallback) {
	            var self = this;
	            if (!self.hasOwnProperty('_ps')) {
	                self._ps = {};
	            }
	            var ps = self._ps;
	            if (arguments.length === 0) {
	                if (ps[pname] !== keyword_undefined) {
	                    if (getCallBack) {
	                        return getCallBack.call(self, ps[pname]);
	                    }
	                    return ps[pname];
	                }
	                return defValue;
	            }
	            if (ps[pname] !== value) {
	                var old = ps[pname] !== keyword_undefined ? ps[pname] : defValue;
	                ps[pname] = value;
	                if (shouldCallback !== false && setCallback) {
	                    setCallback.call(self, value, old);
	                }
	            }
	            return self;
	        };
	        t.isDefault = function (value) {
	            return value === defValue;
	        };
	        return t;
	    };
	
	    var toJsonFn = function (context, ps, jsData) {
	        var self = this;
	        if (!jsData) {
	            jsData = {};
	        }
	        if (!ps) {
	            ps = self;
	        }
	        $.each(ps, function (i, p) {
	            var pt = self[p];
	            if (!isNullOrUndefined(pt)) {
	                var value = pt.call(self);
	               
	                if (p === 'formula') {
	                    if (self.getFormulaString) {
	                        value = self.getFormulaString(context, keyword_undefined , keyword_undefined , true );
	                    } else if (self.condition() && self.condition().getFormulaString) {
	                        value = self.condition().getFormulaString(context, keyword_undefined , keyword_undefined , true );
	                    }
	                    if (value) {
	                        jsData[p] = value;
	                    }
	                } else if (p === 'iconCriteria' || p === 'icons') {
	                    jsData[p] = value;
	                } else if (dateTimeHelper._isDate(value)) {
	                    jsData[p] = dateTimeHelper._toOADateString(value);
	                } else if (value && value.toJSON) {
	                    jsData[p] = value.toJSON(context);
	                } else if (!isNullOrUndefined(value) && !pt.isDefault(value)) {
	                    jsData[p] = value;
	                }
	            }
	        });
	        return jsData;
	    };
	    var fromJsonFn = function (context, ps, jsData, noSchema) {
	        if (!jsData) {
	            return;
	        }
	        var self = this, data;
	        if (!ps) {
	            ps = self;
	        }
	        $.each(ps, function (i, p) {
	            data = jsData[p];
	            if (!isNullOrUndefined(data)) {
	                if (p === 'ranges') {
	                    var ranges = [];
	                    for (var j = 0; j < data.length; j++) {
	                        var r = data[j];
	                        ranges.push(createRange(r.row, r.col, getRowCount(r), getColCount(r)));
	                    }
	                    self.ranges(ranges, false);
	                } else if (p === 'style') {
	                    self.style(new Style(), false);
	                    self.style().fromJSON(data, noSchema);
	                } else if (p === 'iconCriteria') {
	                    var length = data.length;
	                    for (var k = 0; k < length; k++) {
	                        var iconCriterion = data[k];
	                        self._iconCriteria[k] = new IconCriterion(iconCriterion.isGreaterThanOrEqualTo, iconCriterion.iconValueType, iconCriterion.iconValue) ;
	                    }
	                } else if (p === 'icons') {
	                    var iconsCount = data.length;
	                    for (var l = 0; l < iconsCount; l++) {
	                        var iconInfo = data[l];
	                        self._icons[l] = {iconSetType: iconInfo.iconSetType, iconIndex: iconInfo.iconIndex};
	                    }
	                } else if (p === 'iconSetType') {
	                    self[p](data, true);
	                } else if (p === 'item1' || p === 'item2') {
	                    self[p](createCondition(), false) ;
	                    self[p]().fromJSON(data, context);
	                } else if (p === 'expected') {
	                    if ($.getType(data) === const_string && jsData['conType'] === 5 ) {
	                        if (data.substr(0, 8) === '/OADate(') {
	                            self[p](dateTimeHelper._fromOADateString(data), false);
	                        } else {
	                           
	                           
	                            self[p](new Date(data));
	                        }
	                    } else {
	                        self[p](data, false);
	                    }
	                } else if (p === 'condition') {
	                    var condition = new Condition() ;
	                    condition.fromJSON(data, context);
	                    self.condition(condition, false);
	                } else if ($.getType(data) === const_string && data.substr(0, 8) === '/OADate(') {
	                    self[p](dateTimeHelper._fromOADateString(data), false);
	                } else {
	                    self[p](data, false);
	                }
	            }
	        });
	    };
	
	    function compareByType(compareType, value, expectedValue) {
	        switch (compareType) {
	            case 0 
	            :
	                return value === expectedValue;
	            case 1 
	            :
	                return value !== expectedValue;
	            case 2 
	            :
	                return value > expectedValue;
	            case 3 
	            :
	                return value >= expectedValue;
	            case 4 
	            :
	                return value < expectedValue;
	            case 5 
	            :
	                return value <= expectedValue;
	            default:
	                return false;
	        }
	    }
	
	    var _SheetModelManager = Sheets._SheetModelManager;
	    $.extend(_SheetModelManager.prototype, {
	        _backupConditionalRules: function () {
	            var self = this;
	            var changes = self._changes;
	            if (changes && !changes._originalConditinalRules) {
	                changes._originalConditinalRules = self._conditionalFormats._rules.map(function (item) {
	                    return {
	                        rule: item,
	                        ranges: item.ranges().slice()
	                    };
	                });
	            }
	        },
	        _restoreConditionalRules: function (originalConditinalRules) {
	            var conditionalFormats = this._conditionalFormats,
	                sheet = this._sheet;
	
	            sheet.suspendPaint();
	            if (originalConditinalRules) {
	                conditionalFormats._rules = originalConditinalRules.map(function (item) {
	                    var rule = item.rule;
	                    rule.ranges(item.ranges);
	                    return rule;
	                });
	                conditionalFormats._resetCache();
	            }
	            sheet.resumePaint();
	        },
	        _onRowsAdded_ConditionalRule: function (row, rowCount) {
	            this._backupConditionalRules();
	            this._conditionalFormats._onRowsAdded(row, rowCount);
	        },
	        _onRowsRemoved_ConditionalRule: function (row, rowCount) {
	            this._backupConditionalRules();
	            this._conditionalFormats._onRowsRemoved(row, rowCount);
	        },
	        _onColumnsAdded_ConditionalRule: function (col, colCount) {
	            this._backupConditionalRules();
	            this._conditionalFormats._onColumnsAdded(col, colCount);
	        },
	        _onColumnsRemoved_ConditionalRule: function (col, colCount) {
	            this._backupConditionalRules();
	            this._conditionalFormats._onColumnsRemoved(col, colCount);
	        },
	        _onClear_ConditionalRule: function () {
	            this._backupConditionalRules();
	            this._conditionalFormats._clearCache();
	        },
	        _onSetRowColumnCount_ConditionalRule: function () {
	            this._backupConditionalRules();
	            this._conditionalFormats._resetCache();
	        }
	    });
	    _SheetModelManager._registerFeature('conditionalFormat', {
	        init: function () {
	            this._conditionalFormats = new ConditionalFormats(this._sheet) ;
	        },
	        undo: function (changes) {
	            var originalConditinalRules = changes._originalConditinalRules;
	            if (originalConditinalRules) {
	                this._restoreConditionalRules(originalConditinalRules);
	            }
	        }
	    });
	
	    var adapter = {
	        init: function () {
	           
	            
	            this.conditionalFormats = this._modelManager._conditionalFormats;
	        },
	        dispose: function (clearCache) {
	            if (clearCache !== false) {
	                var cfs = this.conditionalFormats;
	                if (cfs) {
	                    cfs._clearCellRuleCache();
	                }
	            }
	           
	           
	        },
	        onLayoutChanged: function (e) {
	            var changeType = e.changeType;
	            var row = e.row;
	            var rowCount = getRowCount(e);
	            var col = e.col;
	            var colCount = getColCount(e);
	            var sheetArea = e.sheetArea;
	            var modelManager = this._modelManager;
	            if (changeType === 'addRows') {
	                modelManager._onRowsAdded_ConditionalRule(row, rowCount);
	            } else if (changeType === 'deleteRows') {
	                modelManager._onRowsRemoved_ConditionalRule(row, rowCount);
	            } else if (changeType === 'addColumns') {
	                modelManager._onColumnsAdded_ConditionalRule(col, colCount);
	            } else if (changeType === 'deleteColumns') {
	                modelManager._onColumnsRemoved_ConditionalRule(col, colCount);
	            } else if (changeType === 'clear') {
	                modelManager._onClear_ConditionalRule();
	            } else if (changeType === 'setColumnCount' || changeType === 'setRowCount') { 
	                if (sheetArea === 3  || sheetArea === 1 ) {
	                    modelManager._onSetRowColumnCount_ConditionalRule();
	                }
	            }
	        },
	
	        toJson: function (data, serializationOption) {
	            var cfs = this.conditionalFormats;
	            var ignoreStyle = serializationOption && serializationOption.ignoreStyle;
	            if (cfs && !ignoreStyle) {
	                data.conditionalFormats = cfs.toJSON(this);
	            }
	        },
	
	        fromJson: function (data, noSchema, deserializationOptions) {
	            var ignoreStyle = deserializationOptions && deserializationOptions.ignoreStyle;
	            if (data && data.conditionalFormats && !ignoreStyle) {
	                this.conditionalFormats.fromJSON(data.conditionalFormats, this, noSchema);
	            }
	        }
	
	    };
	
	   
	    Sheets.Worksheet._registerFeature('conditionalFormat', adapter);
	
	
	   
	   
	    
	    ConditionalFormatting.GeneralComparisonOperators = {
	        
	        equalsTo: 0,
	        
	        notEqualsTo: 1,
	        
	        greaterThan: 2,
	        
	        greaterThanOrEqualsTo: 3,
	        
	        lessThan: 4,
	        
	        lessThanOrEqualsTo: 5
	    };
	   
	    
	    ConditionalFormatting.LogicalOperators = {
	        
	        or: 0,
	        
	        and: 1
	    };
	   
	    
	    ConditionalFormatting.ComparisonOperators = {
	        
	        equalsTo: 0,
	        
	        notEqualsTo: 1,
	        
	        greaterThan: 2,
	        
	        greaterThanOrEqualsTo: 3,
	        
	        lessThan: 4,
	        
	        lessThanOrEqualsTo: 5,
	        
	        between: 6,
	        
	        notBetween: 7
	    };
	   
	    
	    ConditionalFormatting.TextComparisonOperators = {
	        
	        contains: 0,
	        
	        doesNotContain: 1,
	        
	        beginsWith: 2,
	        
	        endsWith: 3
	    };
	   
	    
	    ConditionalFormatting.TextCompareType = {
	        
	        equalsTo: 0,
	        
	        notEqualsTo: 1,
	        
	        beginsWith: 2,
	        
	        doesNotBeginWith: 3,
	        
	        endsWith: 4,
	        
	        doesNotEndWith: 5,
	        
	        contains: 6,
	        
	        doesNotContain: 7
	    };
	   
	    
	    ConditionalFormatting.ColorCompareType = {
	        
	        backgroundColor: 0,
	        
	        foregroundColor: 1
	    };
	   
	    
	    ConditionalFormatting.CustomValueType = {
	        
	        empty: 0,
	        
	        nonEmpty: 1,
	        
	        error: 2,
	        
	        nonError: 3,
	        
	        formula: 4
	    };
	   
	    
	    ConditionalFormatting.DateCompareType = {
	        
	        equalsTo: 0,
	        
	        notEqualsTo: 1,
	        
	        before: 2,
	        
	        beforeEqualsTo: 3,
	        
	        after: 4,
	        
	        afterEqualsTo: 5
	    };
	   
	    
	    ConditionalFormatting.Top10ConditionType = {
	        
	        top: 0,
	        
	        bottom: 1
	    };
	   
	    
	    ConditionalFormatting.DateOccurringType = {
	        
	        today: 0,
	        
	        yesterday: 1,
	        
	        tomorrow: 2,
	        
	        last7Days: 3,
	        
	        thisMonth: 4,
	        
	        lastMonth: 5,
	        
	        nextMonth: 6,
	        
	        thisWeek: 7,
	        
	        lastWeek: 8,
	        
	        nextWeek: 9,
	        
	        nextQuarter: 10,
	        
	        thisQuarter: 11,
	        
	        lastQuarter: 12,
	        
	        nextYear: 13,
	        
	        thisYear: 14,
	        
	        lastYear: 15
	    };
	   
	    
	    ConditionalFormatting.QuarterType = {
	        
	        quarter1: 0,
	        
	        quarter2: 1,
	        
	        quarter3: 2,
	        
	        quarter4: 3
	    };
	   
	    
	    ConditionalFormatting.AverageConditionType = {
	        
	        above: 0,
	        
	        below: 1,
	        
	        equalOrAbove: 2,
	        
	        equalOrBelow: 3,
	        
	        above1StdDev: 4,
	        
	        below1StdDev: 5,
	        
	        above2StdDev: 6,
	        
	        below2StdDev: 7,
	        
	        above3StdDev: 8,
	        
	        below3StdDev: 9
	    };
	
	   
	    
	    ConditionalFormatting.ScaleValueType = {
	        
	        number: 0,
	        
	        lowestValue: 1,
	        
	        highestValue: 2,
	        
	        percent: 3,
	        
	        percentile: 4,
	        
	        automin: 5,
	        
	        formula: 6,
	        
	        automax: 7
	    };
	   
	    
	    ConditionalFormatting.BarDirection = {
	        
	        leftToRight: 0,
	        
	        rightToLeft: 1
	    };
	   
	    
	    ConditionalFormatting.DataBarAxisPosition = {
	        
	        automatic: 0,
	        
	        cellMidPoint: 1,
	        
	        none: 2
	    };
	   
	    
	    ConditionalFormatting.IconSetType = {
	        
	        threeArrowsColored: 0,
	        
	        threeArrowsGray: 1,
	        
	        threeTriangles: 2,
	        
	        threeStars: 3,
	        
	        threeFlags: 4,
	        
	        threeTrafficLightsUnrimmed: 5,
	        
	        threeTrafficLightsRimmed: 6,
	        
	        threeSigns: 7,
	        
	        threeSymbolsCircled: 8,
	        
	        threeSymbolsUncircled: 9,
	        
	        fourArrowsColored: 10,
	        
	        fourArrowsGray: 11,
	        
	        fourRedToBlack: 12,
	        
	        fourRatings: 13,
	        
	        fourTrafficLights: 14,
	        
	        fiveArrowsColored: 15,
	        
	        fiveArrowsGray: 16,
	        
	        fiveRatings: 17,
	        
	        fiveQuarters: 18,
	        
	        fiveBoxes: 19,
	        
	        noIcons: 20
	    };
	   
	    
	    ConditionalFormatting.IconValueType = {
	        
	        number: 1,
	        
	        percent: 4,
	        
	        formula: 7,
	        
	        percentile: 5
	    };
	   
	    
	    var ConditionType = {
	        
	        relationCondition: 0,
	        
	        numberCondition: 1,
	        
	        textCondition: 2,
	        
	        colorCondition: 3,
	        
	        formulaCondition: 4,
	        
	        dateCondition: 5,
	        
	        dateExCondition: 6,
	        
	        textLengthCondition: 7,
	        
	        top10Condition: 8,
	        
	        uniqueCondition: 9,
	        
	        averageCondition: 10,
	        
	        cellValueCondition: 11,
	        
	        areaCondition: 12
	    };
	    ConditionalFormatting.ConditionType = ConditionType;
	   
	    
	    var RuleType = {
	        
	        conditionRuleBase: 0,
	        
	        cellValueRule: 1,
	        
	        specificTextRule: 2,
	        
	        formulaRule: 3,
	        
	        dateOccurringRule: 4,
	        
	        top10Rule: 5,
	        
	        uniqueRule: 6,
	        
	        duplicateRule: 7,
	        
	        averageRule: 8,
	       
	        
	        twoScaleRule: 10,
	        
	        threeScaleRule: 11,
	        
	        dataBarRule: 12,
	        
	        iconSetRule: 13
	    };
	    ConditionalFormatting.RuleType = RuleType;
	
	    (function () {
	        var prop;
	        for (prop in ConditionType) {
	            if (ConditionType[prop] !== keyword_undefined) {
	                ConditionType[ConditionType[prop]] = prop;
	            }
	        }
	        for (prop in RuleType) {
	            if (RuleType[prop] !== keyword_undefined) {
	                RuleType[RuleType[prop]] = prop;
	            }
	        }
	    })();
	
	   
	
	
	   
	    var Condition = (function () {
	        var ps = ['conType', 'compareType', 'item1', 'item2', 'ignoreBlank', 'expected', 'formula',
	            'treatNullValueAsZero', 'integerValue', 'forceValue2Text', 'useWildCards', 'ignoreCase',
	            'customValueType', 'expectTypeId', 'type', 'ranges', 'isPercent', 'regex'];
	
	       
	        
	        function Condition(conditionType, args) {
	            if (!args) {
	                args = {};
	            }
	            var formula2 = args.formula;
	            var self = this;
	            self.offsetRow = 0;
	            self.offsetCol = 0;
	            self.conType((typeof conditionType === 'string') ? ConditionalFormatting.ConditionType[conditionType] : conditionType);
	            if (!isNullOrUndefined(args.compareType)) {
	                self._compareType(args.compareType);
	            }
	            if (!isNullOrUndefined(args.expected)) {
	                self.expected(args.expected);
	            }
	            if (!isNullOrUndefined(formula2)) {
	                self.formula((typeof formula2 === 'string') ? StringHelper_TrimStart($.trim(formula2), '=') : formula2);
	            }
	            if (!isNullOrUndefined(args.item1)) {
	                self.item1(args.item1);
	            }
	            if (!isNullOrUndefined(args.item2)) {
	                self.item2(args.item2);
	            }
	            if (!isNullOrUndefined(args.customValueType)) {
	                self.customValueType(args.customValueType);
	            }
	            if (!isNullOrUndefined(args.type)) {
	                self.type(args.type);
	            }
	            self.ranges(args.ranges);
	            self._expr = keyword_null;
	            self._stdevExpr = keyword_null;
	        }
	
	        var createDayBeginning = function (datetime) {
	            return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate(), 0, 0, 0, 0);
	        };
	        var createDayEnding = function (datetime) {
	            return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate(), 23, 59, 59, 999);
	        };
	        var setDate = function (datatime, value) {
	            datatime.setDate(value);
	        };
	        var getDate = function (datatime) {
	            return datatime.getDate();
	        };
	
	        var isEquals = function (expectedValue, value) {
	            return expectedValue.getYear() === value.getYear() && expectedValue.getMonth() === value.getMonth() && expectedValue.getDate() === value.getDate();
	        };
	        var isAfter = function (expectedValue, value) {
	            var date = createDayEnding(expectedValue);
	            return value > date;
	        };
	        var isBefore = function (expectedValue, value) {
	            var date = createDayBeginning(expectedValue);
	            return value < date;
	        };
	
	
	        Condition.prototype = {
	            conType: defProperty('conType', keyword_null),
	           
	            
	            ranges: defProperty('ranges', keyword_null, function (value) {
	                var item1 = this.item1(), item2 = this.item2();
	                if (item1 && item1.ranges) {
	                    item1.ranges(value);
	                }
	                if (item2 && item2.ranges) {
	                    item2.ranges(value);
	                }
	            }),
	            context: function (context) {
	                if (arguments.length === 1) {
	                    this._context = context;
	                    var item1 = this.item1(), item2 = this.item2();
	                    if (item1 && item1.context) {
	                        item1.context(context);
	                    }
	                    if (item2 && item2.context) {
	                        item2.context(context);
	                    }
	                }
	                return this._context;
	            },
	            _setFlagForInitExpression: function (isFromJSON) {
	                var self = this, item1 = self.item1(), item2 = self.item2();
	                if (isFromJSON) {
	                    self._isFromJSON = true;
	                } else {
	                    self._useReferenceStyle = true;
	                }
	                item1 && item1._setFlagForInitExpression(isFromJSON);
	                item2 && item2._setFlagForInitExpression(isFromJSON);
	            },
	            _removeFlagForInitExpression: function () {
	                var self = this, item1 = self.item1(), item2 = self.item2();
	                delete self._isFromJSON;
	                delete self._useReferenceStyle;
	                item1 && item1._removeFlagForInitExpression();
	                item2 && item2._removeFlagForInitExpression();
	            },
	            initExpression: function (context, baseRow, baseColumn) {
	                var item1 = this.item1(), item2 = this.item2();
	                if (item1 && item1.initExpression) {
	                    item1.initExpression();
	                }
	                if (item2 && item2.initExpression) {
	                    item2.initExpression();
	                }
	                context = context || this._context;
	                var formula = this._formula;
	                if (!context || !formula || this._expr) {
	                    return;
	                }
	                if (this.ranges()) {
	                    var baseRowCol = getBaseRowBaseCol(this.ranges());
	                    baseRow = baseRowCol.r;
	                    baseColumn = baseRowCol.c;
	                } else {
	                    baseRow = baseRow || 0;
	                    baseColumn = baseColumn || 0;
	                }
	                var calcService = context.getCalcService(), calcSource = context._getSheetSource();
	                if (calcService && calcSource) {
	                   
	                    var forceA1 = false;   
	                   
	                    if (this._isFromJSON) {
	                        forceA1 = !this._useReferenceStyle;
	                    }
	                   
	                    this._expr = calcService.parse(calcSource, formula, baseRow, baseColumn, false , true , forceA1);
	                }
	            },
	            expression: function (expr, context, baseRow, baseColumn) {
	                if (arguments.length === 1) {
	                    this._expr = expr;
	                    context = context || this._context;
	                    if (!expr) {
	                        this._formula = expr;
	                    } else if (context) {
	                        if (this.ranges()) {
	                            var baseRowCol = getBaseRowBaseCol(this.ranges());
	                            baseRow = baseRowCol.r;
	                            baseColumn = baseRowCol.c;
	                        } else {
	                            baseRow = baseRow || 0;
	                            baseColumn = baseColumn || 0;
	                        }
	                        var calcService = context.getCalcService(), calcSource = context._getSheetSource();
	                        if (calcService && calcSource) {
	                            this._formula = calcService.unparse(calcSource, expr, baseRow, baseColumn);
	                        }
	                    }
	                    return this._expr;
	                }
	                if (!this._expr) {
	                    this.initExpression(context, baseRow, baseColumn);
	                }
	                return this._expr;
	            },
	            getFormulaString: function (context, baseRow, baseColumn, forceA1) {
	                context = context || this._context;
	                var expr = this._expr, formula = this._formula;
	                if (!context || !formula) {
	                    return formula;
	                }
	                if (!expr) {
	                    this.initExpression(context, baseRow, baseColumn);
	                    expr = this._expr;
	                }
	                var baseRowCol = getBaseRowBaseCol(this.ranges());
	                baseRow = isNullOrUndefined(baseRow) ? baseRowCol.r : baseRow;
	                baseColumn = isNullOrUndefined(baseColumn) ? baseRowCol.c : baseColumn;
	                return context.getCalcService().unparse(context._getSheetSource(), expr, baseRow, baseColumn, keyword_undefined , !!forceA1 );
	            },
	           
	            
	            ignoreBlank: defProperty('ignoreBlank', false),
	           
	            
	            compareType: defProperty('compareType', keyword_undefined),
	           
	            
	            expected: defProperty('expected', keyword_undefined),
	           
	            
	            formula: function (formulaOrBaseRow, baseColumn, index) {
	                if (typeof formulaOrBaseRow === 'string') {
	                    this._formula = formulaOrBaseRow;
	                    this._expr = keyword_null;
	                } else {
	                    var item1 = this.item1(), item2 = this.item2();
	                    if (index === 0 && item1 && item1.formula) {
	                        return item1.formula(formulaOrBaseRow, baseColumn, index);
	                    }
	                    if (index === 1 && item2 && item2.formula) {
	                        return item2.formula(formulaOrBaseRow, baseColumn, index);
	                    }
	                    return this.getFormulaString(keyword_undefined, formulaOrBaseRow, baseColumn);
	                }
	            },
	           
	           
	            
	            item1: defProperty('item1', keyword_null),
	           
	            
	            item2: defProperty('item2', keyword_null),
	           
	           
	            
	            treatNullValueAsZero: defProperty('treatNullValueAsZero', false),
	           
	            integerValue: defProperty('integerValue', false),
	           
	            forceValue2Text: defProperty('forceValue2Text', false),
	           
	           
	            
	            useWildCards: defProperty('useWildCards', true),
	            regex: defProperty('regex', keyword_null),
	           
	            
	            ignoreCase: defProperty('ignoreCase', false),
	           
	           
	            customValueType: defProperty('customValueType', keyword_undefined),
	           
	           
	            expectTypeId: defProperty('expectTypeId', 0),
	           
	           
	            type: defProperty('type', keyword_null),
	            isPercent: defProperty('isPercent', false),
	           
	           
	           
	           
	            adjustOffset: function (row, col) {
	                var self = this;
	                var item = self.item1();
	                if (item && item.adjustOffset) {
	                    item.adjustOffset(row, col);
	                }
	                item = self.item2();
	                if (item && item.adjustOffset) {
	                    item.adjustOffset(row, col);
	                }
	                self.offsetRow = row;
	                self.offsetCol = col;
	            },
	            relationConditionEvaluate: function (evaluator, baseRow, baseColumn, actualValue1, actualValue2) {
	                var self = this;
	
	                function getCondionalFormatActualValue(item, actualValue) {
	                    if (evaluator && item && item.conType() === 3 ) {
	                        var style = evaluator.getActualStyle(baseRow, baseColumn);
	                        if (style) {
	                            if (item._compareType() === 0 ) {
	                                actualValue = style.backColor;
	                            } else if (item._compareType() === 1 ) {
	                                actualValue = style.foreColor;
	                            }
	                        }
	                    }
	                    return actualValue;
	                }
	
	                function getActualValue(item, actualValue) {
	                    if (item) {
	                        item.ignoreBlank(self.ignoreBlank());
	                        if (arguments.length < 5) {
	                           
	                            return getCondionalFormatActualValue(item, actualValue1);
	                        }
	                       
	                        return actualValue;
	                    }
	                }
	
	                function getEvaluateResult(item, value) {
	                    return isNullOrUndefined(item) ? false : item.evaluate(evaluator, baseRow, baseColumn, value);
	                }
	
	                var value1 = getActualValue(self.item1(), actualValue1),
	                    value2 = getActualValue(self.item2(), actualValue2);
	               
	               
	                return (getEvaluateResult(self.item1(), value1) +
	                    getEvaluateResult(self.item2(), value2)) > self._compareType();
	            },
	           
	           
	            cellValueConditionEvaluate: function (evaluator, baseRow, baseColumn, actualValue) {
	                var expected = this.getExpected(evaluator, baseRow, baseColumn);
	                if (expected === keyword_null && evaluator && evaluator._isDataValidator) {
	                    return true;
	                }
	                return this.cellValueConditionCheckCondition(expected, actualValue);
	            },
	            cellValueConditionCheckCondition: function (expectedValue, actualValue) {
	                var self = this;
	                var dActualValue = 0;
	                var isNumber = false;
	
	                if (isNullOrUndefined(actualValue) && isNullOrUndefined(expectedValue)) {
	                    switch (self._compareType()) {
	                        case 0 
	                        :
	                        case 3 
	                        :
	                        case 5 
	                        :
	                            return true;
	                        case 1 
	                        :
	                        case 2 
	                        :
	                        case 4 
	                        :
	                            return false;
	                        default:
	                            return false;
	                    }
	                }
	
	                if (typeof expectedValue === 'boolean' || typeof actualValue === 'boolean') {
	                    return compareByType(self._compareType(), actualValue, expectedValue);
	                }
	                var dValue = {};
	                if (isNullOrUndefined(actualValue)) {
	                    if (self.treatNullValueAsZero()) {
	                        isNumber = true;
	                       
	                    } else {
	                        dActualValue = actualValue;
	                    }
	                } else if (typeof actualValue !== 'boolean' && calcConvert_tryToDouble(actualValue, dValue)) {
	                    dActualValue = dValue.value;
	                    isNumber = !isNaN(dActualValue);
	                }
	                if (isNumber) {
	                    var doubleExpectedValue = 0.0;
	                    var expIsNumber = false;
	                    if (calcConvert_tryToDouble(expectedValue, dValue)) {
	                        doubleExpectedValue = dValue.value;
	                        expIsNumber = true;
	                    }
	                    if (!expIsNumber) {
	                       
	                        return self._compareType() === 1 ;
	                    }
	                    return compareByType(self._compareType(), dActualValue, doubleExpectedValue);
	                } else if (typeof actualValue === 'string') {
	                    if (typeof expectedValue === 'string') {
	                        return compareByType(self._compareType(), actualValue, expectedValue);
	                    }
	                   
	                    return self._compareType() === 1 ;
	                } else if (isNullOrUndefined(actualValue)) {
	                    return self._compareType() === 1;
	                }
	                return false;
	            },
	           
	           
	            numberConditionEvaluate: function (evaluator, baseRow, baseColumn, actualValue) {
	                var expected = this.numberConditionGetExpected(evaluator, baseRow, baseColumn);
	                if (expected === keyword_null && evaluator && evaluator._isDataValidator) {
	                    return true;
	                }
	                if (this.integerValue()) {
	                    if (isNaN(expected)) {
	                        expected = keyword_null;
	                    } else {
	                        expected = expected > 0 ? math_floor(expected) : math_ceil(expected);
	                    }
	                }
	                return this.numberConditionCheckCondition(expected, actualValue);
	            },
	            numberConditionCheckCondition: function (expectedValue, actualValue) {
	                var self = this;
	                if ((isNullOrUndefined(actualValue) || actualValue === '') && self.ignoreBlank()) {
	                    return true;
	                }
	                if (isNaN(actualValue)) {
	                    return false;
	                }
	                if (isNullOrUndefined(expectedValue)) {
	                    if (self.ignoreBlank()) {
	                        return true;
	                    }
	                    expectedValue = 0;
	                }
	                var doubleCellValue;
	                try {
	                    doubleCellValue = parseFloat(actualValue);
	                } catch (e) {
	                    return false;
	                }
	                if (self.integerValue()) {
	                    var isValueInteger = ((doubleCellValue - math_floor(doubleCellValue)) === 0);
	                    if (!isValueInteger) {
	                        return false;
	                    }
	                }
	                return compareByType(self._compareType(), doubleCellValue, expectedValue);
	            },
	            numberConditionGetExpected: function (evaluator, baseRow, baseColumn) {
	                var self = this;
	                if (self._formula && self._formula.length > 0) {
	                    var calcService = evaluator._getCalcServiceInternal();
	                    if (!calcService) {
	                        return self.expected();
	                    }
	                    return calcService.evaluate(evaluator._getSheetSource(), self.expression(keyword_null, evaluator), baseRow, baseColumn);
	                }
	                return self.expected();
	            },
	           
	           
	            textConditionEvaluate: function (evaluator, baseRow, baseColumn, actualObj) {
	                var self = this;
	                var compareType = self.compareType();
	                var ignoreCase = self.ignoreCase();
	
	                function isEquals(expectedValue, value) {
	                    return self.testTextByCondition(value, expectedValue, '^', '$', function () {
	                        if (ignoreCase) {
	                            return expectedValue.toLowerCase() === value.toLowerCase();
	                        }
	                        return expectedValue === value;
	                    });
	                }
	
	                function isStartWith(expectedValue, value) {
	                    return self.testTextByCondition(value, expectedValue, '^', '', function () {
	                        return StringHelper_StartWith(value, expectedValue, ignoreCase);
	                    });
	                }
	
	                function isEndWith(expectedValue, value) {
	                    return self.testTextByCondition(value, expectedValue, '', '$', function () {
	                        return StringHelper_EndsWith(value, expectedValue, ignoreCase);
	                    });
	                }
	
	                function isContains(expectedValue, value) {
	                    return self.testTextByCondition(value, expectedValue, '', '', function () {
	                        return StringHelper_Contains(value, (expectedValue === keyword_undefined || expectedValue === keyword_null) ? '' : expectedValue, ignoreCase);
	                    });
	                }
	
	                if (!self.forceValue2Text() && isInstanceOf(actualObj, Date)) {
	                    if (compareType === 2 
	                        || compareType === 4 
	                        || compareType === 6 ) {
	                        return false;
	                    }
	                    return compareType === 3 
	                        || compareType === 5 
	                        || compareType === 7 ;
	                }
	
	                var actual = isNullOrUndefined(actualObj) ? '' : actualObj.toString();
	                if (self.ignoreBlank() && (actual === '')) {
	                    return true;
	                }
	                var obj = this.getExpected(evaluator, baseRow, baseColumn);
	                var expected = isNullOrUndefined(obj) ? '' : obj.toString();
	                if (self.hasWildcard(expected)) { 
	                   
	                    if (typeof actualObj === 'number') {
	                        return compareType === 3 
	                            || compareType === 7 
	                            || compareType === 5 
	                            || compareType === 1 ;
	                    }
	                }
	                switch (compareType) {
	                    case 0 
	                    :
	                        return isEquals(expected, actual);
	                    case 1 
	                    :
	                        return !isEquals(expected, actual);
	                    case 2 
	                    :
	                        return isStartWith(expected, actual);
	                    case 3 
	                    :
	                        return !isStartWith(expected, actual);
	                    case 4 
	                    :
	                        return isEndWith(expected, actual);
	                    case 5 
	                    :
	                        return !isEndWith(expected, actual);
	                    case 6 
	                    :
	                        return isContains(expected, actual);
	                    case 7 
	                    :
	                        return !isContains(expected, actual);
	                    default:
	                        return false;
	                }
	            },
	            hasWildcard: function (text) {
	                return text.indexOf('*') > -1 || text.indexOf('?') > -1;
	            },
	            testTextByCondition: function (value, expected, prefix, suffix, fnNormalTest) {
	                var useWildCards = this.useWildCards();
	                if (!useWildCards) {
	                    return fnNormalTest();
	                }
	                if (this.regex()) {
	                    return RegexHelper._getReg(this.regex()).test(value);
	                }
	                var criteria = RegexHelper._getWildcardCriteria(expected);
	                if (!criteria) {
	                   
	                    return fnNormalTest();
	                }
	                criteria = prefix + criteria + suffix;
	                if (this.ignoreCase()) {
	                    return RegexHelper._getRegIgnoreCase(criteria).test(value);
	                }
	                return RegexHelper._getReg(criteria).test(value);
	            },
	           
	           
	            colorConditionEvaluate: function (evaluator, baseRow, baseColumn, actualObj) {
	                function getColorFromString(colorStr) {
	                    return (isNullOrUndefined(colorStr) || colorStr === '') ? keyword_null : ColorHelper._fromString(colorStr);
	                }
	
	                var self = this;
	                var expectedColor = getColorFromString(self.expected());
	                if (!isNullOrUndefined(expectedColor) && expectedColor !== '') {
	                    var actualColor = getColorFromString(actualObj);
	                    if ((isNullOrUndefined(actualColor) || actualColor === '') && evaluator && evaluator.getDefaultStyle) {
	                        var defaultStyle = evaluator.getDefaultStyle();
	                        if (self._compareType() === 0 ) {
	                            actualColor = defaultStyle.backColor;
	                        } else if (self._compareType() === 1 ) {
	                            actualColor = defaultStyle.foreColor;
	                        }
	                    }
	                    if (!isNullOrUndefined(actualColor) && actualColor !== '') {
	                        return actualColor.a === expectedColor.a && actualColor.r === expectedColor.r && actualColor.g === expectedColor.g && actualColor.b === expectedColor.b;
	                    }
	                } else if (self.ignoreBlank() || (isNullOrUndefined(expectedColor) && isNullOrUndefined(actualObj))) { 
	                    return true;
	                }
	                return false;
	            },
	           
	           
	            formulaConditionEvaluate: function (evaluator, baseRow, baseColumn, actualObj) {
	                if (!hasCalc) {
	                    return false;
	                }
	                var self = this;
	                if (self.customValueType() === 4 ) {
	                    var expected = self.getExpected(evaluator, baseRow, baseColumn);
	                    if (self.ignoreBlank() && (isNullOrUndefined(expected) || expected === '')) {
	                        return true;
	                    }
	                    var result = {};
	                    return calcConvert._tryToBool(expected, result) ? result.value : false;
	                }
	                var isError = calcConvert._isError;
	                switch (self.customValueType()) {
	                    case 0 
	                    :
	                        return isNullOrUndefined(actualObj) || actualObj === '';
	                    case 1 
	                    :
	                        return !isNullOrUndefined(actualObj) && actualObj !== '';
	                    case 2 
	                    :
	                        return isError(actualObj);
	                    case 3 
	                    :
	                        return !isError(actualObj);
	                    default:
	                        return false;
	                }
	            },
	            formulaConditionGetExpected: function (evaluator, baseRow, baseCol) {
	                var self = this;
	                if (self._formula && self._formula.length > 0) {
	                    var calcService = evaluator._getCalcServiceInternal();
	                    if (!calcService) {
	                        return self.expected();
	                    }
	                    var v = calcService._evaluateParsedFormula(evaluator._getSheetSource(), self.expression(keyword_undefined, evaluator), createCellIdentity(baseRow, baseCol), true);
	                    var rowCount, colCount, resultArray, r, c;
	                    if (calcConvert._isReference(v)) {
	                        rowCount = v.getRowCount(0);
	                        colCount = v.getColumnCount(0);
	                        resultArray = [];
	                        for (r = 0; r < rowCount; r++) {
	                            resultArray[r] = [];
	                            for (c = 0; c < colCount; c++) {
	                                resultArray[r][c] = v.getValue(0, r, c);
	                            }
	                        }
	                        v = resultArray;
	                    } else if (calcConvert._isArray(v)) {
	                        rowCount = v.getRowCount();
	                        colCount = v.getColumnCount();
	                        resultArray = [];
	                        for (r = 0; r < rowCount; r++) {
	                            resultArray[r] = [];
	                            for (c = 0; c < colCount; c++) {
	                                resultArray[r][c] = v.getValue(r, c);
	                            }
	                        }
	                        v = resultArray;
	                    }
	                    if (isInstanceOf(v, Array)) {
	                        rowCount = arrayHelper_getLength(v);
	                        colCount = arrayHelper_getLength(v[0]);
	                        if (rowCount === 1 && colCount === 1) {
	                            return v[0][0];
	                        }
	                        var baseRange = getRange(self.ranges(), baseRow, baseCol);
	                        var offsetRow = baseRow - baseRange.row;
	                        var offsetCol = baseCol - baseRange.col;
	                        if (offsetRow < rowCount && offsetCol < colCount) {
	                            return v[offsetRow][offsetCol];
	                        }
	                        return CalcEngine.Errors.NotAvailable;
	                    }
	                    return v;
	                }
	                return self.expected();
	            },
	           
	           
	            dateConditionEvaluate: function (evaluator, baseRow, baseColumn, actualObj) {
	
	                var self = this;
	                if ((isNullOrUndefined(actualObj) || actualObj === '') && self.ignoreBlank()) {
	                    return true;
	                }
	                if (!(isInstanceOf(actualObj, Date))) {
	                    if (self._compareType() === 1 ) {
	                        return true;
	                    }
	                    return false;
	                }
	                var expected = keyword_null;
	                var obj = this.getExpected(evaluator, baseRow, baseColumn);
	                if (isInstanceOf(obj, Date)) {
	                    expected = obj;
	                } else if (typeof obj === 'string') {
	                    expected = dateTimeHelper._parseLocale(obj);
	                } else if (typeof (obj) === "number") {
	                    expected = dateTimeHelper._fromOADate(obj);
	                }
	
	                if (isNullOrUndefined(expected)) {
	                    return !!self.ignoreBlank();
	                }
	                switch (self._compareType()) {
	                    case 0 
	                    :
	                        return isEquals(expected, actualObj);
	                    case 1 
	                    :
	                        return !isEquals(expected, actualObj);
	                    case 4 
	                    :
	                        return isAfter(expected, actualObj);
	                    case 5 
	                    :
	                        return isAfter(expected, actualObj) || isEquals(expected, actualObj);
	                    case 2 
	                    :
	                        return isBefore(expected, actualObj);
	                    case 3 
	                    :
	                        return isBefore(expected, actualObj) || isEquals(expected, actualObj);
	                    default:
	                        return false;
	                }
	
	            },
	           
	           
	            dateExConditionEvaluate: function (evaluator, baseRow, baseColumn, actualObj) {
	                var expected = this._getExpectedInt(evaluator, baseRow, baseColumn);
	                if (!isNullOrUndefined(expected)) {
	                    return this.dateExConditionCheckCondition(expected, actualObj);
	                }
	                return false;
	            },
	            getExConditionDateScope: function (expected) {
	                var from = keyword_null;
	                var to = keyword_null;
	                var now = new Date();
	                var now2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
	                switch (expected) {
	                    case 3 
	                    :
	                        setDate(now2, getDate(now2) - 6);
	                        from = createDayBeginning(now2);
	                        to = createDayEnding(now);
	                        break;
	                    case 1 
	                    :
	                        setDate(now2, getDate(now2) - 1);
	                        from = createDayBeginning(now2);
	                        to = createDayEnding(now2);
	                        break;
	                    case 0 
	                    :
	                        from = createDayBeginning(now);
	                        to = createDayEnding(now);
	                        break;
	                    case 2 
	                    :
	                        setDate(now2, getDate(now2) + 1);
	                        from = createDayBeginning(now2);
	                        to = createDayEnding(now2);
	                        break;
	                    case 8 
	                    :
	                        var firstDayOfLastWeek = now;
	                        setDate(firstDayOfLastWeek, getDate(now) - now.getDay() - 7);
	                        var lastDayOfLastWeek = now2;
	                        lastDayOfLastWeek.setDate(getDate(now2) - now2.getDay() - 1);
	                        from = createDayBeginning(firstDayOfLastWeek);
	                        to = createDayEnding(lastDayOfLastWeek);
	                        break;
	                    case 7 
	                    :
	                        var firstDayOfThisWeek = now;
	                        setDate(firstDayOfThisWeek, getDate(now) - now.getDay());
	                        var lastDayOfThisWeek = now2;
	                        setDate(lastDayOfThisWeek, getDate(now2) - now2.getDay() + 6);
	                        from = createDayBeginning(firstDayOfThisWeek);
	                        to = createDayEnding(lastDayOfThisWeek);
	                        break;
	                    case 9 
	                    :
	                        var firstDayOfNextWeek = now;
	                        setDate(firstDayOfNextWeek, getDate(now) - now.getDay() + 7);
	                        var lastDayOfNextWeek = now2;
	                        setDate(lastDayOfNextWeek, getDate(now2) - now2.getDay() + 13);
	                        from = createDayBeginning(firstDayOfNextWeek);
	                        to = createDayEnding(lastDayOfNextWeek);
	                        break;
	                    case 5 
	                    :
	                        var firstDayOfLastMonth = now;
	                        setDate(firstDayOfLastMonth, 1);
	                        firstDayOfLastMonth.setMonth(now.getMonth() - 1);
	                        var lastDayOfLastMonth = now2;
	                        setDate(lastDayOfLastMonth, 0);
	                        from = createDayBeginning(firstDayOfLastMonth);
	                        to = createDayEnding(lastDayOfLastMonth);
	                        break;
	                    case 4 
	                    :
	                        var firstDayOfThisMonth = now;
	                        setDate(firstDayOfThisMonth, 1);
	                        var lastDayOfThisMonth = now2;
	                        setDate(lastDayOfThisMonth, 1);
	                        lastDayOfThisMonth.setMonth(now2.getMonth() + 1);
	                        setDate(lastDayOfThisMonth, 0);
	                        from = createDayBeginning(firstDayOfThisMonth);
	                        to = createDayEnding(lastDayOfThisMonth);
	                        break;
	                    case 6 
	                    :
	                        var firstDayOfNextMonth = now;
	                        setDate(firstDayOfNextMonth, 1);
	                        firstDayOfNextMonth.setMonth(now.getMonth() + 1);
	                        var lastDayOfNextMonth = now2;
	                        setDate(lastDayOfNextMonth, 1);
	                        lastDayOfNextMonth.setMonth(now2.getMonth() + 2);
	                        setDate(lastDayOfNextMonth, 0);
	                        from = createDayBeginning(firstDayOfNextMonth);
	                        to = createDayEnding(lastDayOfNextMonth);
	                        break;
	                    case 10 
	                    :
	                        var firstDayOfNextQuarter = now;
	                        var nowMonth = firstDayOfNextQuarter.getMonth(), delta = nowMonth % 3;
	                        firstDayOfNextQuarter.setMonth(nowMonth - delta + 3);
	                        firstDayOfNextQuarter.setDate(1);
	                        var lastDayOfNextQuarter = now2, lastMonthDaysNextQuarter;
	                        lastDayOfNextQuarter.setMonth(nowMonth - delta + 6);
	
	                       
	                        if (lastDayOfNextQuarter.getMonth() === 2 || lastDayOfNextQuarter.getMonth() === 11 ) {
	                            lastMonthDaysNextQuarter = 31;
	                        } else { 
	                            lastMonthDaysNextQuarter = 30;
	                        }
	                        lastDayOfNextQuarter.setDate(lastMonthDaysNextQuarter);
	                        from = createDayBeginning(firstDayOfNextQuarter);
	                        to = createDayEnding(lastDayOfNextQuarter);
	                        break;
	                    case 11 
	                    :
	                        var firstDayOfThisQuarter = now;
	                        var nowMonthThisQuarter = firstDayOfThisQuarter.getMonth(),
	                            deltaThisQuarter = nowMonthThisQuarter % 3;
	                        firstDayOfThisQuarter.setMonth(nowMonthThisQuarter - deltaThisQuarter);
	                        firstDayOfThisQuarter.setDate(1);
	                        var lastDayOfThisQuarter = now2, lastMonthDaysOfThisQuarter;
	                        lastDayOfThisQuarter.setMonth(nowMonthThisQuarter - deltaThisQuarter + 3);
	                        if (lastDayOfThisQuarter.getMonth() === 2  || lastDayOfThisQuarter.getMonth() === 11 ) {
	                            lastMonthDaysOfThisQuarter = 31;
	                        } else {
	                            lastMonthDaysOfThisQuarter = 30;
	                        }
	                        lastDayOfThisQuarter.setDate(lastMonthDaysOfThisQuarter);
	                        from = createDayBeginning(firstDayOfThisQuarter);
	                        to = createDayEnding(lastDayOfThisQuarter);
	                        break;
	                    case 12 
	                    :
	                        var firstDayOfLastQuarter = now;
	                        var nowMonthLastQuarter = firstDayOfLastQuarter.getMonth(),
	                            deltaLastQuarter = nowMonthLastQuarter % 3;
	                        firstDayOfLastQuarter.setMonth(nowMonthLastQuarter - deltaLastQuarter - 3);
	                        firstDayOfLastQuarter.setDate(1);
	                        var lastDayOfLastQuarter = now2, daysLastQuarter;
	                        lastDayOfLastQuarter.setMonth(nowMonthLastQuarter - deltaLastQuarter);
	                        if (lastDayOfLastQuarter.getMonth() === 2  || lastDayOfLastQuarter.getMonth() === 11 ) {
	                            daysLastQuarter = 31;
	                        } else {
	                            daysLastQuarter = 30;
	                        }
	                        lastDayOfLastQuarter.setDate(daysLastQuarter);
	                        from = createDayBeginning(firstDayOfLastQuarter);
	                        to = createDayEnding(lastDayOfLastQuarter);
	                        break;
	                    case 13 
	                    :
	                        var firstDayOfNextYear = now;
	                       
	                        firstDayOfNextYear.setFullYear(firstDayOfNextYear.getFullYear() + 1);
	                        firstDayOfNextYear.setMonth(0);
	                        firstDayOfNextYear.setDate(1);
	                        var lastDayOfNextYear = now2;
	                        lastDayOfNextYear.setFullYear(lastDayOfNextYear.getFullYear() + 1);
	                        lastDayOfNextYear.setMonth(11);
	                        lastDayOfNextYear.setDate(31);
	                        from = createDayBeginning(firstDayOfNextYear);
	                        to = createDayEnding(lastDayOfNextYear);
	                        break;
	                    case 14 
	                    :
	                        var firstDayOfThisYear = now;
	                        firstDayOfThisYear.setMonth(0);
	                        firstDayOfThisYear.setDate(1);
	                        var lastDayOfThisYear = now2;
	                        lastDayOfThisYear.setMonth(11);
	                        lastDayOfThisYear.setDate(31);
	                        from = createDayBeginning(firstDayOfThisYear);
	                        to = createDayEnding(lastDayOfThisYear);
	                        break;
	                    case 15 
	                    :
	                        var firstDayOfLastYear = now;
	                        firstDayOfLastYear.setFullYear(firstDayOfLastYear.getFullYear() - 1);
	                        firstDayOfLastYear.setMonth(0);
	                        firstDayOfLastYear.setDate(1);
	                        var lastDayOfLastYear = now2;
	                        lastDayOfLastYear.setFullYear(lastDayOfLastYear.getFullYear() - 1);
	                        lastDayOfLastYear.setMonth(11);
	                        lastDayOfLastYear.setDate(31);
	                        from = createDayBeginning(firstDayOfLastYear);
	                        to = createDayEnding(lastDayOfLastYear);
	                        break;
	                    default:
	                        break;
	                }
	                return {
	                    from: from,
	                    to: to
	                };
	            },
	            dateExConditionCheckCondition: function (expected, actualValue) {
	                function isEqualsQuarter(expectedValue, actualDateTime) {
	                    switch (expectedValue) {
	                        case 0 
	                        :
	                            return actualDateTime.getMonth() >= 0 && actualDateTime.getMonth() <= 2;
	                        case 1 
	                        :
	                            return actualDateTime.getMonth() >= 3 && actualDateTime.getMonth() <= 5;
	                        case 2 
	                        :
	                            return actualDateTime.getMonth() >= 6 && actualDateTime.getMonth() <= 8;
	                        case 3 
	                        :
	                            return actualDateTime.getMonth() >= 9 && actualDateTime.getMonth() <= 11;
	                        default:
	                            return false;
	                    }
	                }
	
	                var self = this;
	                var actual = actualValue;
	                if (self.ignoreBlank() && (isNullOrUndefined(actual) || actual === '')) {
	                    return true;
	                }
	                try {
	                    actual = calcConvert._toDateTime(actual);
	                } catch (err) {
	                    return false;
	                }
	                var expectedNumber;
	                var expectTypeId = self.expectTypeId();
	                if (expectTypeId === 0) {
	                    var dateScope = this.getExConditionDateScope(expected),
	                        from = dateScope.from, to = dateScope.to;
	                    if (!isNullOrUndefined(from) && !isNullOrUndefined(to)) {
	                        var condition1 = createCondition(5 , 5 , from, keyword_null);
	                        var condition2 = createCondition(5 , 3 , to, keyword_null);
	                        var condition = createCondition(0 , 1 , keyword_null, keyword_null, keyword_null, keyword_null, keyword_null, condition1, condition2);
	                        return condition.evaluate(keyword_null, 0, 0, actual);
	                    }
	                } else {
	                    expectedNumber = self._getExpectedInt(keyword_null, 0, 0);
	                    if (!isNullOrUndefined(expectedNumber)) {
	                        if (expectTypeId === 1) {
	                            return expectedNumber === actual.getFullYear();
	                        } else if (expectTypeId === 2) {
	                            return isEqualsQuarter(expectedNumber, actual);
	                        } else if (expectTypeId === 3) {
	                            return expectedNumber === actual.getMonth();
	                        } else if (expectTypeId === 4) {
	                            return expectedNumber === actual.getDay();
	                        } else if (expectTypeId === 5) {
	                            return expectedNumber === getDate(actual);
	                        } else if (expectTypeId === 6 ) {
	                            var start = new Date(), end = new Date();
	                            start.setMonth(0, 1);//set date as 1/1/yyyy ,the first day of a year
	                            start.setHours(0, 0, 0, 0);
	                            end.setHours(23, 59, 59, 59);
	                            return start <= actual && actual <= end;
	                        }
	                    }
	                }
	                return false;
	            },
	           
	           
	            textLengthConditionEvaluate: function (evaluator, baseRow, baseColumn, actualObj) {
	                if (isNullOrUndefined(actualObj) || actualObj === '') {
	                    return this.ignoreBlank();
	                }
	                var actualLen = isNullOrUndefined(actualObj) ? 0 : (actualObj.toString()).length;
	                var expectedLen = this._getExpectedInt(evaluator, baseRow, baseColumn);
	                if (typeof expectedLen === 'number') {
	                    return compareByType(this._compareType(), actualLen, expectedLen);
	                }
	                return false;
	            },
	           
	           
	            top10ConditionEvaluate: function (evaluator, baseRow, baseColumn, actualObj) {
	                var self = this;
	                if (isNullOrUndefined(actualObj) || actualObj === '') {
	                    return self.ignoreBlank();
	                }
	                var expectedRank = self._getExpectedInt(evaluator, baseRow, baseColumn);
	                if (!isNullOrUndefined(expectedRank)) {
	                    var values = self.getTopValues(evaluator, expectedRank, self.ranges());
	                    if (values) {
	                        var dactual = 0;
	                        try {
	                            dactual = self._toDouble(actualObj);
	                        } catch (ex) {
	                            return false;
	                        }
	                        if (arrayHelper._contains(values, dactual)) {
	                            return true;
	                        }
	                    }
	                }
	                return false;
	            },
	            _getExpectedInt: function (evaluator, baseRow, baseColumn) {
	                var obj = this.getExpected(evaluator, baseRow, baseColumn);
	                obj = parseInt(obj, 10);
	                return (isNaN(obj) || !isFinite(obj)) ? keyword_null : obj;
	            },
	            adjustRange: function (range, sheet) {
	                return createRange(range.row, range.col, Math.min(getRowCount(range), sheet.getRowCount()), Math.min(getColCount(range), sheet.getColumnCount()));
	            },
	            getTopValues: function (evaluator, rank, ranges) {
	                var factor = this.type() === 0  ? 1 : -1;
	
	                var values = [];
	                if (!ranges) {
	                    return values;
	                }
	
	                var actualRanges = this._cloneToActualRanges(evaluator, ranges);
	                var rangeCount = arrayHelper_getLength(actualRanges), range, row, column, doubleValue;
	                for (var i = 0; i < rangeCount; i++) {
	                    range = this.adjustRange(actualRanges[i], evaluator);
	                    for (var r = 0; r < getRowCount(range); r++) {
	                        row = r + range.row;
	                        for (var c = 0; c < getColCount(range); c++) {
	                            column = c + range.col;
	                            doubleValue = this._toDouble(evaluator.getValue(row, column));
	                            if (!isNullOrUndefined(doubleValue)) {
	                                values.push(doubleValue);
	                            }
	                        }
	                    }
	                }
	                values.sort(function (a, b) {
	                    return (b - a) * factor;
	                });
	                if (arrayHelper_getLength(values) > rank) {
	                    values = values.slice(0, rank);
	                }
	                return values;
	
	            },
	            _toDouble: function (value) {
	                if (((typeof value === 'number') || (isInstanceOf(value, Date))) && hasCalc) {
	                    return calcConvert_toDouble(value);
	                }
	                return keyword_null;
	            },
	           
	           
	            uniqueConditionEvaluate: function (evaluator, baseRow, baseColumn, actualObj) {
	                var self = this;
	                var value = actualObj;
	                if (isNullOrUndefined(value) || value === '') {
	                    return self.ignoreBlank();
	                }
	                if (hasCalc && calcConvert_isNumber(value)) {
	                    value = calcConvert_toDouble(value);
	                }
	                var obj = this.getExpected(evaluator, baseRow, baseColumn);
	                var result = {};
	                calcConvert._tryToBool(obj, result);
	                var expectDuplicated = result.value;
	                if (!isNullOrUndefined(expectDuplicated)) {
	                    var cached = self.duplicatedArrayCached || self.getDuplicated(evaluator, self.ranges());
	                    if (!isNullOrUndefined(cached) && arrayHelper._contains(cached, value)) {
	                        return expectDuplicated === true;
	                    }
	                    return expectDuplicated !== true;
	                }
	                return false;
	            },
	            getDuplicated: function (evaluator, ranges) {
	                var duplicated = [];
	                var obj = {};
	                var actualRanges = this._cloneToActualRanges(evaluator, ranges);
	                if (actualRanges) {
	                   
	                    var length = arrayHelper_getLength(actualRanges);
	                    for (var i = 0; i < length; i++) {
	                        var cellrange = actualRanges[i];
	                        cellrange = this.adjustRange(cellrange, evaluator);
	                        var rowCount = getRowCount(cellrange), colCount = getColCount(cellrange);
	                        for (var r = 0; r < rowCount; r++) {
	                            var row = r + cellrange.row;
	                            for (var c = 0; c < colCount; c++) {
	                                var column = c + cellrange.col;
	                                var o = evaluator.getValue(row, column, 3);
	                                if (!isNullOrUndefined(o) && hasCalc && calcConvert_isNumber(o)) {
	                                    o = calcConvert_toDouble(o);
	                                }
	
	                                var temp = obj[o];
	                                if (!temp) {
	                                    obj[o] = 1;
	                                } else if (temp === 1) {
	                                   
	                                    duplicated.push(o);
	                                }
	                            }
	                        }
	                    }
	                }
	                return duplicated;
	            },
	            _containsKey: function (map, key) {
	                var length = map.length;
	                for (var i = 0; i < length; i++) {
	                    if (map[i].key === key) {
	                        return true;
	                    }
	                }
	                return false;
	            },
	           
	           
	            averageConditionEvaluate: function (evaluator, baseRow, baseColumn, actualObj) {
	                if (!hasCalc) {
	                    return false;
	                }
	                var self = this;
	                if (self.ignoreBlank() && (isNullOrUndefined(actualObj) || actualObj === '')) {
	                    return true;
	                }
	                self._rebuildFormula();
	                var obj = this.getExpected(evaluator, baseRow, baseColumn);
	                var result = {};
	                var averageValue = calcConvert_tryToDouble(obj, result) ? result.value : NaN;
	
	                var stddevValue = keyword_null;
	                var stddevObjValue = self._stdevExpr ? self._getExpectedByExpression(evaluator, self._stdevExpr, baseRow, baseColumn) : keyword_null;
	                if (!isNullOrUndefined(stddevObjValue)) {
	                    result = {};
	                    stddevValue = calcConvert_tryToDouble(stddevObjValue, result) ? result.value : NaN;
	                }
	                if (calcConvert_isNumber(actualObj)) {
	                    var cellValue = calcConvert_toDouble(actualObj);
	                    if (!isNaN(averageValue)) {
	                        var isDevNaN = isNaN(stddevValue);
	                        switch (self.type()) {
	                            case 0 
	                            :
	                                return cellValue > averageValue;
	                            case 1 
	                            :
	                                return cellValue < averageValue;
	                            case 2 
	                            :
	                                return cellValue >= averageValue;
	                            case 3 
	                            :
	                                return cellValue <= averageValue;
	                            case 4 
	                            :
	                                return isDevNaN ? false : cellValue > (averageValue + stddevValue);
	                            case 5 
	                            :
	                                return isDevNaN ? false : cellValue < (averageValue - stddevValue);
	                            case 6 
	                            :
	                                return isDevNaN ? false : cellValue > (averageValue + 2 * stddevValue);
	                            case 7 
	                            :
	                                return isDevNaN ? false : cellValue < (averageValue - 2 * stddevValue);
	                            case 8 
	                            :
	                                return isDevNaN ? false : cellValue > (averageValue + 3 * stddevValue);
	                            case 9 
	                            :
	                                return isDevNaN ? false : cellValue < (averageValue - 3 * stddevValue);
	                            default:
	                                return false;
	                        }
	                    }
	                }
	                return false;
	            },
	            _rebuildFormula: function () {
	                var self = this;
	                if (self.ranges()) {
	                    self._expr = self._createExpression('AVERAGE', self.ranges());
	                   
	                    if (self.type() >= 4 && self.type() <= 9) {
	                        self._stdevExpr = self._createExpression('STDEV', self.ranges());
	                    }
	                }
	            },
	            _createExpression: function (name, parameters) {
	                if (!hasCalc) {
	                    return keyword_null;
	                }
	                var averageFunc = Functions.findGlobalFunction(name);
	                if (averageFunc) {
	                    var args = [];
	                    var length = arrayHelper_getLength(parameters);
	                    for (var i = 0; i < length; i++) {
	                        args[i] = createExpression(parameters[i]);
	                    }
	                    return CalcEngine._createFunctionExpression(averageFunc, args);
	                }
	                return keyword_null;
	            },
	            averageConditionGetExpected: function (evaluator, baseRow, baseColumn) {
	                var calcService = evaluator._getCalcServiceInternal();
	                if (!calcService) {
	                    return keyword_null;
	                }
	                return calcService._evaluateParsedFormula(evaluator._getSheetSource(), this.expression(keyword_undefined, evaluator), createCellIdentity(baseRow, baseColumn), false);
	            },
	            _getExpectedByExpression: function (evaluator, expression, baseRow, baseColumn) {
	                var calcService = evaluator._getCalcServiceInternal();
	                if (!calcService) {
	                    return keyword_null;
	                }
	                return calcService._evaluateParsedFormula(evaluator._getSheetSource(), expression, createCellIdentity(baseRow, baseColumn), false);
	            },
	           
	           
	            _concatArray: function (destArray, array) {
	                var temp, i;
	                for (i = 0; i < arrayHelper_getLength(array); i++) {
	                    temp = array[i];
	                    if (isInstanceOf(temp, Array) && arrayHelper_getLength(temp) > 0) {
	                       
	                        if (arrayHelper_getLength(array) > 1) {
	                            destArray.push(temp[0]);
	                        } else {
	                            destArray.push.apply(destArray, temp);
	                        }
	                    } else {
	                        destArray.push(temp);
	                    }
	                }
	            },
	           
	            
	            getValidList: function (evaluator, baseRow, baseColumn) {
	                var valueList = [];
	                var list = this.getValidListImp(evaluator, baseRow, baseColumn);
	                for (var i = 0, length = arrayHelper_getLength(list); i < length; i++) {
	                    valueList.push(list[i].value);
	                }
	                return valueList;
	            },
	            getValidListImp: function (evaluator, baseRow, baseColumn) {
	                var self = this;
	                var validValuesTemp = [];
	                if (self._formula && self._formula.length > 0) {
	                    var obj = self.getExpected(evaluator, baseRow, baseColumn);
	                    if (isInstanceOf(obj, Array)) {
	                        self._concatArray(validValuesTemp, obj);
	                    } else {
	                        validValuesTemp.push(obj);
	                    }
	                } else if (self.expected() && self.expected().length > 0) {
	                    var source = self.expected();
	                    var dataArray = source.split(',');
	                    if (dataArray) {
	                        for (var i = 0; i < arrayHelper_getLength(dataArray); i++) {
	                            var data = dataArray[i];
	                            if (isNullOrUndefined(data)) {
	                                continue;
	                            }
	                            var dataTemp = $.trim(data);
	                            if (dataTemp !== '') {
	                                validValuesTemp.push({text: dataTemp, value: dataTemp});
	                            }
	                        }
	                    }
	                }
	                return validValuesTemp;
	            },
	            areaConditionEvaluate: function (evaluator, baseRow, baseColumn, actualObj) {
	                function _equals(v1, v2) {
	                    if (isInstanceOf(v1, Date) && isInstanceOf(v2, Date)) {
	                        return v1.valueOf() === v2.valueOf();
	                    }
	                    return v1 === v2;
	                }
	
	                var self = this;
	                if (isNullOrUndefined(actualObj) || actualObj === '') {
	                    return self.ignoreBlank() === true;
	                }
	                var valids = self.getValidList(evaluator, baseRow, baseColumn);
	               
	               
	                for (var i = 0; i < arrayHelper_getLength(valids); i++) {
	                    var obj = valids[i];
	                    if (isNullOrUndefined(obj) && isNullOrUndefined(actualObj)) {
	                        return true;
	                    }
	                    if (self._formula) {
	                        if (_equals(obj, actualObj)) {
	                            return true;
	                        }
	                    } else {
	                        var style = evaluator.getActualStyle(baseRow, baseColumn);
	                        var parsedValue = util._parseText2Value(style, obj, true);
	                        if (_equals(parsedValue, actualObj)) {
	                            return true;
	                        }
	                    }
	                }
	                return false;
	            },
	            areaConditionGetExpected: function (evaluator, baseRow, baseColumn) {
	                var self = this;
	                var arrayValue = [];
	                if (self._formula) {
	                    var rowCount, colCount, r, c, value, text;
	                    var calcService = evaluator._getCalcServiceInternal();
	                    if (!calcService) {
	                        return arrayValue;
	                    }
	                   
	                    var v = calcService._evaluateParsedFormula(evaluator._getSheetSource(), self.expression(keyword_undefined, evaluator), createCellIdentity(baseRow, baseColumn), true);
	                    if (calcConvert._isReference(v)) {
	                        rowCount = v.getRowCount(0);
	                        colCount = v.getColumnCount(0);
	                       
	                        var row = v.getRow(0), col = v.getColumn(0), sheet = v._source && v._source._sheet;
	                        for (r = 0; r < rowCount; r++) {
	                            arrayValue[r] = [];
	                            for (c = 0; c < colCount; c++) {
	                                value = v.getValue(0, r, c);
	                                text = sheet ? sheet.getText(row + r, col + c) : value;
	                                arrayValue[r][c] = {value: value, text: text};
	                            }
	                        }
	                    } else if (calcConvert._isArray(v)) {
	                        rowCount = v.getRowCount();
	                        colCount = v.getColumnCount();
	                        for (r = 0; r < rowCount; r++) {
	                            arrayValue[r] = [];
	                            for (c = 0; c < colCount; c++) {
	                                value = v.getValue(r, c);
	                                arrayValue[r][c] = {value: value, text: value};
	                            }
	                        }
	                    }
	                } else {
	                    arrayValue.push({value: self.expected(), text: self.expected()});
	                }
	                return arrayValue;
	            },
	           
	           
	            
	            reset: function () {
	                var self = this;
	                self.ignoreBlank(false);
	                self._compareType(1) ;
	                self.item1(keyword_null);
	                self.item2(keyword_null);
	                self.value1 = keyword_null;
	                self.value2 = keyword_null;
	                self.style(keyword_null);
	                self.stopIfTrue(false);
	                self.priority(1);
	                self.expected(keyword_null);
	                self._compareType(0) ;
	                self.integerValue(false);
	                self.operator = 0 ;
	                self.text = '';
	                self._compareType(0) ;
	                self.useWildCards(true);
	                self.ignoreCase(false);
	                self.forceValue2Text(false);
	                self.customValueType(0) ;
	                self._expr = keyword_null;
	                self.type(0) ;
	                this.expectTypeId(0);
	                self.ranges(keyword_null);
	                self.isPercent(false);
	                self.regex(keyword_null);
	
	                switch (self.conType()) {
	                    case 0 
	                    :
	                        self.ignoreBlank(false);
	                        self._compareType(1) ;
	                        break;
	                    case 1 
	                    :
	                        self._compareType(0) ;
	                        self.integerValue(false);
	                        break;
	                    case 2 
	                    :
	                        self._compareType(0) ;
	                        self.useWildCards(true);
	                        self.forceValue2Text(false);
	                        break;
	                    case 3 
	                    :
	                        self._compareType(0) ;
	                        break;
	                    case 4 
	                    :
	                        self.customValueType(0) ;
	                        self._stdevExpr = keyword_null;
	                        break;
	                    case 5 
	                    :
	                        self._compareType(0) ;
	                        break;
	                    case 6 
	                    :
	                        self.expectTypeId(0);
	                        break;
	                    case 7 
	                    :
	                        self._compareType(0) ;
	                        break;
	                    case 8 
	                    :
	                        self.type(0) ;
	                        break;
	                    case 10 
	                    :
	                        self.type(0) ;
	                        break;
	                    case 11 
	                    :
	                        self.operator = 6 ;
	                        break;
	                    case 12 
	                    :
	                        break;
	                    default:
	                        break;
	                }
	            },
	           
	            
	            evaluate: function (evaluator, baseRow, baseColumn, actualObj) {
	                var conditionType = this.conType();
	                if (isNullOrUndefined(conditionType)) {
	                    return false;
	                }
	                return this[ConditionType[conditionType] + 'Evaluate'](evaluator, baseRow, baseColumn, actualObj);
	            },
	            getExpectedNormal: function (evaluator, baseRow, baseColumn, parseRow, parseColumn, convertNullToZero) {
	                var self = this, formula = self._formula, expected = self.expected();
	                if (formula) {
	                    var calcService = evaluator._getCalcServiceInternal();
	                    if (!calcService) {
	                        return expected;
	                    }
	                   
	                    return calcService._evaluateParsedFormula(evaluator._getSheetSource(), self.expression(keyword_undefined, evaluator), createCellIdentity(baseRow, baseColumn), false, convertNullToZero);
	                }
	                return expected;
	            },
	           
	            
	            getExpected: function (evaluator, baseRow, baseColumn) {
	                var self = this;
	                switch (self.conType()) {
	                    case 2 
	                    :
	                        return self.getExpectedNormal(evaluator, baseRow, baseColumn, baseRow - self.offsetRow, baseColumn - self.offsetCol, false);
	                    case 5 
	                    :
	                    case 6 
	                    :
	                    case 7 
	                    :
	                    case 9 
	                    :
	                    case 11 
	                    :
	                        return self.getExpectedNormal(evaluator, baseRow, baseColumn, baseRow - self.offsetRow, baseColumn - self.offsetCol, false);
	                    case 8 
	                    :
	                        return self.getExpectedNormal(evaluator, baseRow, baseColumn, baseRow, baseColumn);
	                    case 0 
	                    :
	                        return keyword_null;
	                    case 1 
	                    :
	                        return self.numberConditionGetExpected(evaluator, baseRow, baseColumn);
	                    case 3 
	                    :
	                        return keyword_null;
	                    case 4 
	                    :
	                        return self.formulaConditionGetExpected(evaluator, baseRow, baseColumn);
	                    case 10 
	                    :
	                        return self.averageConditionGetExpected(evaluator, baseRow, baseColumn);
	                    case 12 
	                    :
	                        return self.areaConditionGetExpected(evaluator, baseRow, baseColumn);
	                    default:
	                        return keyword_null;
	                }
	            },
	
	            _cloneToActualRanges: function (evaluator, ranges) {
	                var newRanges = [];
	                for (var i = 0, length = arrayHelper_getLength(ranges); i < length; i++) {
	                    var actualRange = evaluator._getActualRange(ranges[i]);
	                    newRanges.push(actualRange);
	
	                }
	                return newRanges;
	            },
	            getExpressions: function () {
	                var result = [], self = this;
	                if (self.conType() === 0 ) {
	                    if (self.item1() && self.item1().getExpressions) {
	                        result = self.item1().getExpressions();
	                    }
	                    if (self.item2() && self.item2().getExpressions) {
	                        result = result.concat(self.item2().getExpressions());
	                    }
	                    return result;
	                }
	                if (!self._expr) {
	                    self.initExpression();
	                }
	                return self._expr ? [self._expr] : [];
	            },
	            setExpressions: function (expressions) {
	                var self = this, length1;
	                if (self.conType() === 0 ) {
	                    if (self.item1() && self.item1().setExpressions) {
	                        length1 = self.item1().getExpressions().length;
	                        self.item1().setExpressions(expressions.slice(0, length1));
	                    }
	                    if (self.item2() && self.item2().setExpressions) {
	                        self.item2().setExpressions(expressions.slice(length1));
	                    }
	                    return;
	                }
	                self.expression(expressions[0]);
	            },
	            toJSON: function (context) {
	                return toJsonFn.call(this, context, ps);
	            },
	            fromJSON: function (settings, context, noSchema) {
	                if (!settings) {
	                    return;
	                }
	                var self = this;
	                fromJsonFn.call(self, context, ps, settings, noSchema);
	               
	               
	               
	               
	               
	               
	                self._setFlagForInitExpression(true); 
	                self.initExpression();
	               
	                self._removeFlagForInitExpression();
	               
	            }
	        };
	       
	        Condition.prototype._compareType = Condition.prototype.compareType;
	       
	        
	        Condition.fromSource = function (expected) {
	            return createCondition(12 , keyword_null, expected, keyword_null);
	        };
	       
	        
	        Condition.fromFormula = function (formula) {
	            return createCondition(12 , keyword_null, '', formula);
	        };
	       
	        
	        Condition.fromDay = function (day) {
	            var con = createCondition(6 , keyword_null, day);
	            con.expectTypeId(5);
	            return con;
	        };
	       
	        
	        Condition.fromMonth = function (month) {
	            var con = createCondition(6 , keyword_null, month);
	            con.expectTypeId(3);
	            return con;
	        };
	       
	        
	        Condition.fromQuarter = function (quarter) {
	            var con = createCondition(6 , keyword_null, quarter);
	            con.expectTypeId(2);
	            return con;
	        };
	       
	        
	        Condition.fromWeek = function (week) {
	            var con = createCondition(6 , keyword_null, week);
	            con.expectTypeId(4);
	            return con;
	        };
	       
	        
	        Condition.fromYear = function (year) {
	            var con = createCondition(6 , keyword_null, year);
	            con.expectTypeId(1);
	            return con;
	        };
	        return Condition;
	    })();
	    ConditionalFormatting.Condition = Condition;
	
	    var createCondition = function (conditionType, compareType, expected, formula, customValueType, type, ranges, item1, item2) {
	        return new Condition(conditionType, {
	            compareType: compareType, expected: expected, formula: formula, customValueType: customValueType,
	            type: type, ranges: ranges, item1: item1, item2: item2
	        });
	    };
	    ConditionalFormatting._createCondition = createCondition;
	
	    var ConditionRuleBase = (function () {
	       
	        
	        function ConditionRuleBase(ruleType, style, ranges) {
	            var self = this;
	            self.ruleType(ruleType);
	            self.style(style);
	            self.ranges(ranges);
	        }
	
	        var proto = {
	           
	            
	            ruleType: defProperty('ruleType', keyword_null),
	           
	            
	            ranges: defProperty('ranges', keyword_null, function (value) {
	                var condition = this.condition();
	                if (condition && condition.ranges()) {
	                    condition.ranges(value);
	                }
	            }),
	           
	            
	            condition: defProperty('condition', keyword_null),
	           
	            
	            style: defProperty('style', keyword_null),
	           
	            
	            priority: defProperty('priority', 1),
	           
	            
	            stopIfTrue: defProperty('stopIfTrue', false),
	           
	            
	            evaluate: function (evaluator, baseRow, baseColumn, actual) {
	                var self = this;
	                if (self.contains(baseRow, baseColumn)) {
	                    self.initCondition();
	                    var baseCoord = {baseRow: 0, baseCol: 0};
	                    self.getBaseCoordinate(baseCoord);
	                    self.condition().adjustOffset(baseRow - baseCoord.baseRow, baseColumn - baseCoord.baseCol);
	                    var result = keyword_null;
	                    if (self.condition().evaluate(evaluator, baseRow, baseColumn, actual)) {
	                        result = self.getExpected();
	                    }
	                    self.condition().adjustOffset(0, 0);
	                    return result;
	                }
	                return keyword_null;
	            },
	           
	            
	            contains: function (row, column) {
	                var ranges = this.ranges();
	                if (ranges) {
	                    var count = arrayHelper_getLength(ranges), range;
	                    for (var i = 0; i < count; i++) {
	                        range = ranges[i];
	                        if (range.contains(row, column)) {
	                            return true;
	                        }
	                    }
	                }
	                return false;
	            },
	           
	            
	            createCondition: function () {
	                return null;
	            },
	            initCondition: function (context) {
	                var condition = this.condition();
	                if (!condition) {
	                    condition = this.createCondition();
	                    if (condition) {
	                        condition.ranges(this.ranges());
	                        this.condition(condition);
	                    }
	                    if (context) {
	                        this.context(context);
	                    }
	                    if (this.context() && condition) {
	                        condition.context(this.context());
	                    }
	                }
	            },
	            context: function (context) {
	                if (arguments.length === 1) {
	                    this._context = context;
	                    if (this.condition()) {
	                        this.condition().context(context);
	                    }
	                }
	                return this._context;
	            },
	           
	            
	            getExpected: function () {
	                return this.style();
	            },
	           
	            
	            reset: function () {
	                var self = this;
	                self.ranges(keyword_null);
	                self.condition(keyword_null);
	                self.style(keyword_null);
	                self.stopIfTrue(false);
	                self.priority(1);
	            },
	           
	            
	            intersects: function (row, column, rowCount, columnCount) {
	                var ranges = this.ranges();
	                if (ranges) {
	                    var count = arrayHelper_getLength(ranges), cs;
	                    for (var n = 0; n < count; n++) {
	                        cs = ranges[n];
	                        if (cs.intersect(row, column, rowCount, columnCount)) {
	                            return true;
	                        }
	                    }
	                }
	                return false;
	            },
	           
	            
	            isScaleRule: function () {
	                return false;
	            },
	            getBaseCoordinate: function (baseCoord) {
	                baseCoord.baseRow = Number.MAX_VALUE;
	                baseCoord.baseCol = Number.MAX_VALUE;
	                var self = this;
	                if (self.ranges() && arrayHelper_getLength(self.ranges()) > 0) {
	                    for (var i = 0; i < arrayHelper_getLength(self.ranges()); i++) {
	                        var range = self.ranges()[i], row = range.row, col = range.col;
	                        row = row === -1 ? 0 : row;
	                        col = col === -1 ? 0 : col;
	                        baseCoord.baseRow = math_min(row, baseCoord.baseRow);
	                        baseCoord.baseCol = math_min(col, baseCoord.baseCol);
	                    }
	                } else {
	                    baseCoord.baseRow = 0;
	                    baseCoord.baseCol = 0;
	                }
	            },
	            _addData: function (index, count, isRow) {
	                var self = this;
	                var rowCount = isRow ? count : 0;
	                var colCount = isRow ? 0 : count;
	                if (self.ranges()) {
	                    var length = arrayHelper_getLength(self.ranges());
	                    for (var i = 0; i < length; i++) {
	                        var range = self.ranges()[i];
	                        var dataIndex = isRow ? range.row : range.col;
	                        var dataCount = isRow ? getRowCount(range) : getColCount(range);
	                        if (dataIndex !== -1) {
	                            if (dataIndex >= index) {
	                                self.ranges()[i] = createRange(range.row + rowCount, range.col + colCount, getRowCount(range), getColCount(range));
	                            } else if (index < dataIndex + dataCount) {
	                                self.ranges()[i] = createRange(range.row, range.col, getRowCount(range) + rowCount, getColCount(range) + colCount);
	                            }
	                        }
	                    }
	                }
	            },
	            _onRowsAdded: function (row, rowCount) {
	                this._addData(row, rowCount, true);
	            },
	            _onColumnsAdded: function (col, colCount) {
	                this._addData(col, colCount, false);
	            },
	            _removeData: function (index, count, isRow) {
	                var self = this;
	                var row = isRow ? index : 0;
	                var col = isRow ? 0 : index;
	                var rowCount = isRow ? count : 0;
	                var colCount = isRow ? 0 : count;
	                if (self.ranges()) {
	                    var delList = [];
	                    var length = arrayHelper_getLength(self.ranges());
	                    for (var i = 0; i < length; i++) {
	                        var range = self.ranges()[i];
	                        var dataIndex = isRow ? range.row : range.col;
	                        var dataCount = isRow ? getRowCount(range) : getColCount(range);
	                        if (dataIndex !== -1) {
	                            if (dataIndex > index) {
	                                if (dataIndex + dataCount <= index + count) {
	                                   
	                                    delList.push(range);
	                                } else {
	                                    self.ranges()[i] = createRange(range.row - rowCount, range.col - colCount, getRowCount(range), getColCount(range));
	                                }
	                            } else if (index < dataIndex + dataCount) {
	                                var newRange = createRange(range.row, range.col, getRowCount(range) - math_min(range.row + getRowCount(range) - row, rowCount), getColCount(range) - math_min(range.col + getColCount(range) - col, colCount));
	                                if (getColCount(newRange) === 0 || getRowCount(newRange) === 0) {
	                                   
	                                    delList.push(range);
	                                } else {
	                                    self.ranges()[i] = newRange;
	                                }
	                            }
	                        }
	                    }
	                    var len = arrayHelper_getLength(delList);
	                    for (var j = 0; j < len; j++) {
	                        var delRange = delList[j];
	                        arrayHelper_remove(self.ranges(), delRange);
	                    }
	                }
	            },
	            _onRowsRemoved: function (row, rowCount) {
	                this._removeData(row, rowCount, true);
	            },
	            _onColumnsRemoved: function (col, colCount) {
	                this._removeData(col, colCount, false);
	            },
	            toJSON: function (context) {
	                return toJsonFn.call(this, context);
	            },
	            fromJSON: function (settings, context, noSchema) {
	                if (!settings) {
	                    return;
	                }
	                fromJsonFn.call(this, context, keyword_null, settings, noSchema);
	                this.initCondition(context);
	                this._adjustConditionFormula();
	            },
	            _adjustConditionFormula: function() {
	                var condition = this.condition();
	                if (condition) {
	                   
	                    adjustConditionFormulaWhenFromJSON(condition);
	                }
	            }
	        };
	        $.extend(ConditionRuleBase.prototype, proto);
	        return ConditionRuleBase;
	    })();
	    ConditionalFormatting.ConditionRuleBase = ConditionRuleBase;
	
	    var NormalConditionRule = (function (_super) {
	        $.inherit(NormalConditionRule, _super);
	        var ps = ['ruleType', 'style', 'operator', 'text', 'formula', 'type', 'rank', 'priority', 'stopIfTrue', 'ranges'];
	
	       
	        
	        function NormalConditionRule(ruleType, ranges, style, operator, value1, value2, text, formula, type, rank) {
	            _super.call(this, ruleType, style);
	            var self = this;
	            self.ranges(ranges);
	            self.operator(operator);
	            self.value1((typeof value1 === 'string') ? $.trim(value1) : value1);
	            self.value2((typeof value2 === 'string') ? $.trim(value2) : value2);
	            self.text(text);
	            self.formula(formula);
	            self.type(type);
	            self.rank(rank);
	
	            self.cached = false;
	            self._oldRanges = keyword_null;
	        }
	
	        var normalPrototype = {
	           
	            
	            operator: defProperty('operator', keyword_null),
	           
	            
	            value1: function (valueOrBaseRow, baseColumn) {
	                if (arguments.length === 1) {
	                    this._value1 = valueOrBaseRow;
	                } else {
	                   
	                    var condition = this.condition();
	                    if (condition) {
	                        var formula = condition.formula(valueOrBaseRow, baseColumn, 0);
	                        if (formula && formula.length > 0) {
	                            return '=' + StringHelper_TrimStart($.trim(formula.toString()), '=');
	                        }
	                    }
	                    return this._value1;
	                }
	            },
	           
	            
	            value2: function (valueOrBaseRow, baseColumn) {
	                if (arguments.length === 1) {
	                    this._value2 = valueOrBaseRow;
	                } else {
	                   
	                    var condition = this.condition();
	                    if (condition) {
	                        var formula = condition.formula(valueOrBaseRow, baseColumn, 1);
	                        if (formula && formula.length > 0) {
	                            return '=' + StringHelper_TrimStart($.trim(formula.toString()), '=');
	                        }
	                    }
	                    return this._value2;
	                }
	            },
	           
	            
	            text: defProperty('text', keyword_null),
	           
	            
	            formula: function (formulaOrBaseRow, baseColumn) {
	                var self = this, condition = self.condition();
	                if (typeof formulaOrBaseRow === 'string') {
	                    self._formula = formulaOrBaseRow;
	                    if (condition) {
	                        condition.formula(formulaOrBaseRow);
	                    }
	                } else {
	                    return condition && condition.formula(formulaOrBaseRow, baseColumn) || self._formula;
	                }
	            },
	           
	            
	            type: defProperty('type', keyword_null),
	           
	            
	            rank: defProperty('rank', keyword_null),
	            priority: defProperty('priority', 1),
	
	            cellValueRuleCreateCondition: function () {
	                var self = this;
	                var value1 = self.value1(), value2 = self.value2(), ranges = self.ranges();
	                var formula1 = self._isFormula(value1) ? StringHelper_TrimStart(value1, '=') : keyword_null;
	                var formula2 = self._isFormula(value2) ? StringHelper_TrimStart(value2, '=') : keyword_null;
	                var condition1, condition2, condition3, condition4;
	                var relationCondition1, relationCondition2;
	                var op = self.operator();
	                if (op === 6 ) {
	                    condition1 = createCondition(11 , 3 , value1, formula1, keyword_undefined, keyword_undefined, ranges);
	                    condition1.treatNullValueAsZero(true);
	                    condition2 = createCondition(11 , 5 , value2, formula2, keyword_undefined, keyword_undefined, ranges);
	                    condition2.treatNullValueAsZero(true);
	                    relationCondition1 = createCondition(0 , 1 , keyword_null, keyword_null, keyword_null, keyword_null, ranges, condition1, condition2);
	
	                    condition3 = createCondition(11 , 5 , value1, formula1, keyword_undefined, keyword_undefined, ranges);
	                    condition3.treatNullValueAsZero(true);
	                    condition4 = createCondition(11 , 3 , value2, formula2, keyword_undefined, keyword_undefined, ranges);
	                    condition4.treatNullValueAsZero(true);
	                    relationCondition2 = createCondition(0 , 1 , keyword_null, keyword_null, keyword_null, keyword_null, ranges, condition3, condition4);
	
	                    return createCondition(0 , 0 , keyword_null, keyword_null, keyword_null, keyword_null, ranges, relationCondition1, relationCondition2);
	                } else if (op === 7 ) {
	                    condition1 = createCondition(11 , 4 , value1, formula1, keyword_undefined, keyword_undefined, ranges);
	                    condition1.treatNullValueAsZero(true);
	                    condition2 = createCondition(11 , 2 , value2, formula2, keyword_undefined, keyword_undefined, ranges);
	                    condition1.treatNullValueAsZero(true);
	                    relationCondition1 = createCondition(0 , 0 , keyword_null, keyword_null, keyword_null, keyword_null, ranges, condition1, condition2);
	
	                    condition3 = createCondition(11 , 2 , value1, formula1, keyword_undefined, keyword_undefined, ranges);
	                    condition3.treatNullValueAsZero(true);
	                    condition4 = createCondition(11 , 4 , value2, formula2, keyword_undefined, keyword_undefined, ranges);
	                    condition4.treatNullValueAsZero(true);
	                    relationCondition2 = createCondition(0 , 0 , keyword_null, keyword_null, keyword_null, keyword_null, ranges, condition3, condition4);
	
	                    return createCondition(0 , 1 , keyword_null, keyword_null, keyword_null, keyword_null, ranges, relationCondition1, relationCondition2);
	                }
	
	               
	                var compareType = op;
	
	                var t = createCondition(11 , compareType, value1, formula1, keyword_undefined, keyword_undefined, ranges);
	                t.treatNullValueAsZero(true);
	                return t;
	            },
	            _isFormula: function (val) {
	                return !isNullOrUndefined(val) && (val[0] === '=');
	            },
	            specificTextRuleCreateCondition: function () {
	                var type, operator = this.operator();
	                switch (operator) {
	                    case 2 
	                    :
	                        type = 2 ;
	                        break;
	                    case 3 
	                    :
	                        type = 4 ;
	                        break;
	                    case 0 
	                    :
	                        type = 6 ;
	                        break;
	                    case 1 
	                    :
	                        type = 7 ;
	                        break;
	                    default:
	                        type = 0 ;
	                        break;
	                }
	                var text = this.text(), formula = keyword_null;
	                if (text && (text[0] === '=')) {
	                    formula = text;
	                }
	                var condition = createCondition(2 , type, text, formula, keyword_undefined, keyword_undefined, this.ranges());
	                condition.ignoreCase(true);
	               
	                condition.useWildCards(operator !== 2  && operator !== 3 );
	                return condition;
	            },
	            formulaRuleCreateCondition: function () {
	                var self = this, ranges = self.ranges();
	                return createCondition(4 , keyword_null, keyword_null, self._formula, 4 , ranges);
	            },
	            dateOccurringRuleCreateCondition: function () {
	                return createCondition(6 , keyword_null, this.type(), keyword_null, keyword_null, keyword_undefined, this.ranges());
	            },
	            top10RuleCreateCondition: function () {
	                return createCondition(8 , keyword_null, this.rank(), keyword_null, keyword_null, this.type(), this.ranges());
	            },
	            uniqueRuleCreateCondition: function () {
	                return createCondition(9 , keyword_null, false, keyword_null, keyword_null, keyword_null, this.ranges());
	            },
	            duplicateRuleCreateCondition: function () {
	                return createCondition(9 , keyword_null, true, keyword_null, keyword_null, keyword_null, this.ranges());
	            },
	            averageRuleCreateCondition: function () {
	                return createCondition(10 , keyword_null, keyword_null, keyword_null, keyword_null, this.type(), this.ranges());
	            },
	           
	            
	            createCondition: function () {
	                return this[RuleType[this.ruleType()] + 'CreateCondition']();
	            },
	           
	            
	            reset: function () {
	                var self = this;
	                self.ranges(keyword_null);
	                self.condition(keyword_null);
	                self.style(keyword_null);
	                self.stopIfTrue(false);
	                self.priority(1);
	                self.operator(6 );
	                self.value1(keyword_null);
	                self.value2(keyword_null);
	                self.text('');
	                self.formula(keyword_null);
	                self.type(0);
	                self.rank(10);
	
	                switch (self.ruleType()) {
	                    case 1 
	                    :
	                        self.operator(6 );
	                        break;
	                    case 2 
	                    :
	                        self.operator(0 );
	                        break;
	                    case 4 
	                    :
	                        self.style(0 );
	                        break;
	                    case 5 
	                    :
	                        self.type(0 );
	                        self.rank(10);
	                        break;
	                    case 8 
	                    :
	                        self.type(0 );
	                        break;
	                    default:
	                }
	            },
	
	            evaluate: function (evaluator, baseRow, baseColumn, actual) {
	                this._tryCache(evaluator);
	                return _super.prototype.evaluate.call(this, evaluator, baseRow, baseColumn, actual);
	            },
	            _cloneRanges: function (ranges) {
	                var newRanges = [], length = arrayHelper_getLength(ranges), r;
	                for (var i = 0; i < length; i++) {
	                    r = ranges[i];
	                    newRanges.push(createRange(r.row, r.col, getRowCount(r), getColCount(r)));
	                }
	                return newRanges;
	            },
	            _rangesChanged: function () {
	                var oldRanges = this._oldRanges, newRanges = this.ranges();
	                if (!oldRanges) {
	                    this._oldRanges = this._cloneRanges(newRanges);
	                    return false;
	                }
	                var oldCount = arrayHelper_getLength(oldRanges), newCount = arrayHelper_getLength(newRanges);
	                if (oldCount !== newCount) {
	                    return true;
	                }
	                for (var i = 0; i < newCount; i++) {
	                    if (!oldRanges[i].equals(newRanges[i])) {
	                        return true;
	                    }
	                }
	                return false;
	            },
	            _tryCache: function (evaluator) {
	                var self = this;
	                self.initCondition();
	                var condition = self.condition();
	                if (condition.conType() === 9 ) {
	                    if (self._rangesChanged()) {
	                        self._clearCache();
	                        self._oldRanges = self._cloneRanges(self.ranges());
	                    }
	                    if (self.cached === false) {
	                        condition.duplicatedArrayCached = condition.getDuplicated(evaluator, self.ranges());
	                        self.cached = true;
	                    }
	                }
	            },
	            _clearCache: function () {
	                this.cached = false;
	            },
	            _onRowsAdded: function (row, rowCount) {
	                _super.prototype._onRowsAdded.call(this, row, rowCount);
	                this._clearCache();
	            },
	            _onColumnsAdded: function (col, colCount) {
	                _super.prototype._onColumnsAdded.call(this, col, colCount);
	                this._clearCache();
	            },
	            _onRowsRemoved: function (row, rowCount) {
	                _super.prototype._onRowsRemoved.call(this, row, rowCount);
	                this._clearCache();
	            },
	            _onColumnsRemoved: function (col, colCount) {
	                _super.prototype._onColumnsRemoved.call(this, col, colCount);
	                this._clearCache();
	            },
	
	            toJSON: function (context) {
	                var obj = toJsonFn.call(this, context, ps);
	                var value1 = this.value1();
	                var value2 = this.value2();
	                if (!isNullOrUndefined(value1)) {
	                    obj.value1 = value1;
	                }
	                if (!isNullOrUndefined(value2)) {
	                    obj.value2 = value2;
	                }
	                return obj;
	            },
	            fromJSON: function (settings, context, noSchema) {
	                fromJsonFn.call(this, context, ps, settings, noSchema);
	                if (!isNullOrUndefined(settings.value1)) {
	                    this.value1(settings.value1);
	                }
	                if (!isNullOrUndefined(settings.value2)) {
	                    this.value2(settings.value2);
	                }
	                this.initCondition(context);
	                this._adjustConditionFormula();
	            }
	        };
	        $.extend(NormalConditionRule.prototype, normalPrototype);
	        return NormalConditionRule;
	    })(ConditionRuleBase);
	    ConditionalFormatting.NormalConditionRule = NormalConditionRule;
	
	    var ScaleValue = (function () {
	       
	        
	        function ScaleValue(type, value) {
	           
	            
	            this.type = type;
	           
	            
	            this.value = value;
	        }
	
	        return ScaleValue;
	    })();
	    ConditionalFormatting.ScaleValue = ScaleValue;
	    var ScaleRule = (function (_super) {
	        $.inherit(ScaleRule, _super);
	        var ps = ['ruleType', 'ranges', 'minType', 'minValue', 'minColor', 'maxType', 'maxValue', 'maxColor', 'midType', 'midValue', 'midColor', 'priority'];
	
	       
	        
	        function ScaleRule(ruleType, minType, minValue, minColor, midType, midValue, midColor, maxType, maxValue, maxColor, ranges) {
	            _super.call(this, ruleType, keyword_null, ranges);
	            var self = this;
	            self.lowestValueCached = keyword_null;
	            self.highestValueCached = keyword_null;
	            self.cached = false;
	            self._oldRanges = keyword_null;
	            var _minType = minType, _minValue = minValue, _minColor = minColor, _midType = midType,
	                _midValue = midValue, _midColor = midColor, _maxType = maxType, _maxValue = maxValue,
	                _maxColor = maxColor;
	
	            if (arguments.length <= 1) {
	                _minType = 1 ;
	                _minValue = keyword_null;
	                _minColor = ColorToString(255, 248, 105, 107);
	                _midType = 4 ;
	                _midValue = 50;
	                _midColor = ColorToString(255, 255, 235, 132);
	                _maxType = 2 ;
	                _maxValue = keyword_null;
	                _maxColor = ColorToString(255, 99, 190, 123);
	            }
	            self.minColor(_minColor);
	            self.minValue(_minValue);
	            self.minType(_minType);
	            self.midColor(_midColor);
	            self.midValue(_midValue);
	            self.midType(_midType);
	            self.maxColor(_maxColor);
	            self.maxValue(_maxValue);
	            self.maxType(_maxType);
	        }
	
	        var scalePrototype = {
	           
	            
	            stopIfTrue: function () {
	                return false;
	            },
	           
	            
	            minValue: defProperty('minValue', keyword_null),
	           
	            
	            minType: defProperty('minType', 5 ),
	           
	            
	            minColor: defProperty('minColor', keyword_null),
	           
	            
	            midValue: defProperty('midValue', 50, keyword_null, function (value) {
	                var self = this;
	                if (self._evaluator) {
	                    if (self.midType() === 2 ) {
	                        return self._getHighestValue(self._evaluator);
	                    } else if (self.midType() === 1 ) {
	                        return self._getLowestValue(self._evaluator);
	                    }
	                }
	                return value;
	            }),
	           
	            
	            midType: defProperty('midType', keyword_null),
	           
	            
	            midColor: defProperty('midColor', keyword_null),
	           
	            
	            maxType: defProperty('maxType', 7 ),
	           
	            
	            maxValue: defProperty('maxValue', keyword_null),
	           
	            
	            maxColor: defProperty('maxColor', keyword_null),
	
	            isScaleRule: function () {
	                return true;
	            },
	           
	            
	            createCondition: function () {
	                return keyword_null;
	            },
	            _calculateLowestValueEx: function (evaluator) {
	                var rets = createCondition(8 , keyword_null, keyword_null, keyword_null, keyword_null, 1 ).getTopValues(evaluator, 1, this.ranges());
	                return (arrayHelper_getLength(rets) > 0 ? rets[0] : keyword_null);
	            },
	            _calculateHighestValueEx: function (evaluator) {
	                var rets = createCondition(8 , keyword_null, keyword_null, keyword_null, keyword_null, 0 ).getTopValues(evaluator, 1, this.ranges());
	                return (arrayHelper_getLength(rets) > 0 ? rets[0] : keyword_null);
	            },
	            _cloneRanges: function (ranges) {
	                var newRanges = [], length = arrayHelper_getLength(ranges), r;
	                for (var i = 0; i < length; i++) {
	                    r = ranges[i];
	                    newRanges.push(createRange(r.row, r.col, getRowCount(r), getColCount(r)));
	                }
	                return newRanges;
	            },
	            _rangesChanged: function () {
	                var oldRanges = this._oldRanges, newRanges = this.ranges();
	                if (!oldRanges) {
	                    this._oldRanges = this._cloneRanges(newRanges);
	                    return false;
	                }
	                var oldCount = arrayHelper_getLength(oldRanges), newCount = arrayHelper_getLength(newRanges);
	                if (oldCount !== newCount) {
	                    return true;
	                }
	                for (var i = 0; i < newCount; i++) {
	                    if (!oldRanges[i].equals(newRanges[i])) {
	                        return true;
	                    }
	                }
	                return false;
	            },
	            _tryCache: function (evaluator) {
	                var self = this;
	                if (self._rangesChanged()) {
	                    self._clearCache();
	                    self._oldRanges = self._cloneRanges(self.ranges());
	                }
	                if (self.cached === false) {
	                    self.lowestValueCached = self._calculateLowestValueEx(evaluator);
	                    self.highestValueCached = self._calculateHighestValueEx(evaluator);
	                    self.cached = true;
	                }
	            },
	            _clearCache: function () {
	                this.lowestValueCached = keyword_null;
	                this.highestValueCached = keyword_null;
	                this.cached = false;
	            },
	            _calculateFormula: function (evaluator, baseRow, baseColumn, formula) {
	                if (formula) {
	                    var calcService = evaluator._getCalcServiceInternal();
	                    if (!calcService) {
	                        return keyword_null;
	                    }
	                    var expr = calcService.parse(evaluator._getSheetSource(), formula, baseRow, baseColumn);
	                    return calcService._evaluateParsedFormula(evaluator._getSheetSource(), expr, createCellIdentity(baseRow, baseColumn), false);
	                }
	                return keyword_null;
	            },
	            _isFormula: function (val) {
	                return (val) && (val[0] === '=');
	            },
	            _trimFormula: function (val) {
	                if (isNullOrUndefined(val) || val === '') {
	                    return keyword_null;
	                }
	                return (val[0] === '=') ? val.substr(1) : val;
	            },
	            _calculateValue: function (evaluator, baseRow, baseColumn, value) {
	                if (this._isFormula(value)) {
	                    return this._calculateFormula(evaluator, baseRow, baseColumn, this._trimFormula(value.toString()));
	                }
	                var result = {};
	                return calcConvert_tryToDouble(value, result) ? result.value : NaN;
	            },
	            _getHighestValue: function (evaluator) {
	                this._tryCache(evaluator);
	                return this.highestValueCached;
	            },
	            _getLowestValue: function (evaluator) {
	                this._tryCache(evaluator);
	                return this.lowestValueCached;
	            },
	            _calculatePercent: function (evaluator, baseRow, baseColumn, value) {
	                var dValue = this._calculateValue(evaluator, baseRow, baseColumn, value);
	                if (!isNaN(dValue) && 0 <= dValue && dValue <= 100) {
	                    var min = this._getLowestValue(evaluator);
	                    var max = this._getHighestValue(evaluator);
	                    if (typeof (min) !== const_undefined && min !== keyword_null && typeof (max) !== const_undefined && max !== keyword_null) {
	                        return min + (max - min) * dValue / 100.0;
	                    }
	                }
	                return keyword_null;
	            },
	            _calculatePercentile: function (evaluator, baseRow, baseColumn, value) {
	                var dValue = this._calculateValue(evaluator, baseRow, baseColumn, value);
	                if (!isNaN(dValue) && 0 <= dValue && dValue <= 100) {
	                    var total = 0, ranges = this.ranges(), length = arrayHelper_getLength(ranges);
	                    for (var i = 0; i < length; i++) {
	                        var exp = this._createExpression('PERCENTILE', [evaluator._getActualRange(ranges[i]), dValue / 100.0]),
	                            calcService = evaluator._getCalcServiceInternal(),
	                            formula = calcService.unparse(keyword_null, exp, baseRow, baseColumn),
	                            exp2 = calcService.parse(evaluator._getSheetSource(), formula, baseRow, baseColumn),
	                            val = calcService._evaluateParsedFormula(evaluator._getSheetSource(), exp2, createCellIdentity(baseRow, baseColumn), false);
	                        var result = {};
	                        total += calcConvert_tryToDouble(val, result) ? result.value : 0;
	                    }
	                    return (total / length);
	                }
	                return keyword_null;
	            },
	            _getActualValue: function (evaluator, baseRow, baseColumn, type, value) {
	                var self = this;
	                switch (type) {
	                    case 6 
	                    :
	                        if (!self._isFormula(value)) {
	                            value = '=' + value;
	                        }
	                        return self._calculateValue(evaluator, baseRow, baseColumn, value);
	                    case 2 
	                    :
	                        return self._getHighestValue(evaluator);
	                    case 1 
	                    :
	                        return self._getLowestValue(evaluator);
	                    case 0 
	                    :
	                        return self._calculateValue(evaluator, baseRow, baseColumn, value);
	                    case 3 
	                    :
	                        return self._calculatePercent(evaluator, baseRow, baseColumn, value);
	                    case 4 
	                    :
	                        return self._calculatePercentile(evaluator, baseRow, baseColumn, value);
	                    case 7 
	                    :
	                        var max = self._getHighestValue(evaluator);
	                        return max < 0.0 ? 0.0 : max;
	                    case 5 
	                    :
	                        var min = self._getLowestValue(evaluator);
	                        return min > 0.0 ? 0.0 : min;
	                    default:
	                        return keyword_null;
	                }
	            },
	            _evaluate2Scale: function (value, min, max) {
	                if (value === min && value === max) {
	                    return 1.0;
	                }
	                if (value <= min) {
	                    return 0.0;
	                }
	                if (value >= max) {
	                    return 1.0;
	                }
	
	                return (value - min) / (max - min);
	            },
	            _evaluateColor: function (value, color1, color2) {
	                if (0 <= value && value <= 1) {
	                    var minColor = ColorHelper._fromString(color1);
	                    var maxColor = ColorHelper._fromString(color2);
	                    var a = (minColor.a) * (1 - value) + (maxColor.a) * (value);
	                    var r = (minColor.r) * (1 - value) + (maxColor.r) * (value);
	                    var g = (minColor.g) * (1 - value) + (maxColor.g) * (value);
	                    var b = (minColor.b) * (1 - value) + (maxColor.b) * (value);
	                    return ColorToString(parseFloat((a / 255)), parseInt(r, 10), parseInt(g, 10), parseInt(b, 10));
	                }
	                return keyword_null;
	            },
	            _createExpression: function (name, parameters) {
	                if (!hasCalc) {
	                    return keyword_null;
	                }
	                var averageFunc = Functions.findGlobalFunction(name);
	                if (averageFunc) {
	                    var args = [];
	                    var length = arrayHelper_getLength(parameters);
	                    for (var i = 0; i < length; i++) {
	                        args[i] = createExpression(parameters[i]);
	                    }
	                    return new CalcEngine._createFunctionExpression(averageFunc, args);
	                }
	                return keyword_null;
	            },
	            _onRowsAdded: function (row, rowCount) {
	                _super.prototype._onRowsAdded.call(this, row, rowCount);
	                this._clearCache();
	            },
	            _onColumnsAdded: function (col, colCount) {
	                _super.prototype._onColumnsAdded.call(this, col, colCount);
	                this._clearCache();
	            },
	            _onRowsRemoved: function (row, rowCount) {
	                _super.prototype._onRowsRemoved.call(this, row, rowCount);
	                this._clearCache();
	            },
	            _onColumnsRemoved: function (col, colCount) {
	                _super.prototype._onColumnsRemoved.call(this, col, colCount);
	                this._clearCache();
	            },
	            scaleEvaluate: function (evaluator, baseRow, baseColumn, actual) {
	                var self = this;
	                self._tryCache(evaluator);
	                if (self.contains(baseRow, baseColumn)) {
	                    if (isNullOrUndefined(actual)) {
	                        return keyword_null;
	                    }
	                    try {
	                        var numberValue = calcConvert_toDouble(actual);
	                        var minValue = self._getActualValue(evaluator, baseRow, baseColumn, self.minType(), self.minValue());
	                        var midValue = self._getActualValue(evaluator, baseRow, baseColumn, self.midType(), self.midValue());
	                        var maxValue = self._getActualValue(evaluator, baseRow, baseColumn, self.maxType(), self.maxValue());
	                        if (minValue > maxValue) {
	                            return keyword_null;
	                        }
	                        if (isNaN(midValue)) {
	                            if (!isNaN(minValue) && !isNaN(maxValue)) {
	                                return self._evaluate2Scale(numberValue, minValue, maxValue);
	                            }
	                        } else if (!isNaN(minValue) && !isNaN(maxValue)) {
	                            if (numberValue < minValue) {
	                                return 0.0;
	                            }
	                            if (numberValue >= maxValue) {
	                                return 2.0;
	                            }
	                            if (minValue <= numberValue && numberValue <= midValue) {
	                                return self._evaluate2Scale(numberValue, minValue, midValue);
	                            }
	                            return 1 + self._evaluate2Scale(numberValue, minValue, maxValue);
	                        }
	                    } catch (err) {
	                        return keyword_null;
	                    }
	                }
	                return keyword_null;
	            },
	            twoScaleRuleEvaluate: function (evaluator, baseRow, baseColumn, actual) {
	                if (!isNullOrUndefined(actual)) {
	                    var result = {},
	                        numberValue = (calcConvert_isNumber(actual) && calcConvert_tryToDouble(actual, result)) ? result.value : NaN;
	                    if (isNaN(numberValue)) {
	                        return keyword_null;
	                    }
	                    var self = this;
	                    var minValue = self._getActualValue(evaluator, baseRow, baseColumn, self.minType(), self.minValue());
	                    var maxValue = self._getActualValue(evaluator, baseRow, baseColumn, self.maxType(), self.maxValue());
	                    if (!isNullOrUndefined(minValue) && !isNullOrUndefined(maxValue)) {
	                        result = self._evaluate2Scale(numberValue, minValue, maxValue);
	                        return self._evaluateColor(result, self.minColor(), self.maxColor());
	                    }
	                }
	                return keyword_null;
	            },
	            threeScaleRuleEvaluate: function (evaluator, baseRow, baseColumn, actual) {
	                var self = this;
	                self._evaluator = evaluator;
	                if (!isNullOrUndefined(actual)) {
	                    var result = {},
	                        numberValue = (calcConvert_isNumber(actual) && calcConvert_tryToDouble(actual, result)) ? result.value : NaN;
	                    if (isNaN(numberValue)) {
	                        return keyword_null;
	                    }
	                    var minValue = self._getActualValue(evaluator, baseRow, baseColumn, self.minType(), self.minValue());
	                    var midValue = self._getActualValue(evaluator, baseRow, baseColumn, self.midType(), self.midValue());
	                    var maxValue = self._getActualValue(evaluator, baseRow, baseColumn, self.maxType(), self.maxValue());
	                    if (!isNullOrUndefined(minValue) && !isNullOrUndefined(maxValue) && !isNullOrUndefined(midValue)) {
	                        if (minValue > maxValue) {
	                            return keyword_null;
	                        }
	                        if (numberValue <= minValue || minValue === maxValue) {
	                            return numberValue >= maxValue ? self.maxColor() : self.minColor();
	                        }
	                        if (numberValue >= maxValue) {
	                            return self.maxColor();
	                        }
	                        if (numberValue <= midValue) {
	                            result = self._evaluate2Scale(numberValue, minValue, midValue);
	                            return self._evaluateColor(result, self.minColor(), self.midColor());
	                        }
	                        result = self._evaluate2Scale(numberValue, midValue, maxValue);
	                        return self._evaluateColor(result, self.midColor(), self.maxColor());
	                    }
	                }
	                return keyword_null;
	            },
	           
	            
	            evaluate: function (evaluator, baseRow, baseColumn, actual) {
	                return this[RuleType[this.ruleType()] + 'Evaluate'](evaluator, baseRow, baseColumn, actual);
	            },
	            _init: function () {
	                var self = this;
	
	                self.minValue(keyword_null);
	                self.minType(1 );
	                self.midValue(50);
	                self.midType(4 );
	                self.maxValue(keyword_null);
	                self.maxType(2 );
	
	                if (self.ruleType() === 10 ) {
	                    self.minColor(ColorToString(0, 255, 255, 255));
	                    self.maxColor(ColorToString(255, 99, 190, 123));
	                }
	                if (self.ruleType() === 11 ) {
	                    self.midValue(50);
	                    self.midType(4 );
	                    self.minColor(ColorToString(255, 248, 105, 107));
	                    self.midColor(ColorToString(255, 255, 235, 132));
	                    self.maxColor(ColorToString(255, 99, 190, 123));
	                }
	            },
	            reset: function () {
	                var self = this;
	                self.ranges(keyword_null);
	                self.condition(keyword_null);
	                self.style(keyword_null);
	                self._init();
	                self._evaluator = keyword_null;
	                self.stopIfTrue(false);
	                self.priority(1);
	            },
	            toJSON: function (context) {
	                return toJsonFn.call(this, context, ps);
	            },
	            fromJSON: function (settings, context, noSchema) {
	                fromJsonFn.call(this, context, ps, settings, noSchema);
	                this.initCondition(context);
	                this._adjustConditionFormula();
	            }
	        };
	
	        $.extend(ScaleRule.prototype, scalePrototype);
	        return ScaleRule;
	    })(ConditionRuleBase);
	    ConditionalFormatting.ScaleRule = ScaleRule;
	
	    var DataBarRule = (function (_super) {
	        $.inherit(DataBarRule, _super);
	        var ps = ['ruleType', 'ranges', 'gradient', 'color', 'showBorder', 'borderColor', 'dataBarDirection',
	            'negativeFillColor', 'useNegativeFillColor', 'negativeBorderColor', 'useNegativeBorderColor',
	            'axisPosition', 'axisColor', 'showBarOnly', 'minType', 'minValue', 'maxType', 'maxValue', 'priority'];
	
	       
	        
	        function DataBarRule(minType, minValue, maxType, maxValue, color, ranges) {
	            var _minType = minType, _minValue = minValue, _maxType = maxType, _maxValue = maxValue, _color = color;
	            if (arguments.length === 0) {
	                _minType = 5 ;
	                _minValue = keyword_null;
	                _maxType = 7 ;
	                _maxValue = keyword_null;
	                _color = ColorToString(255, 99, 142, 198);
	            }
	            _super.call(this, 12 , _minType, _minValue, keyword_null, keyword_null, keyword_null, keyword_null, _maxType, _maxValue, keyword_null, ranges);
	            this._init(_color);
	        }
	
	        var proto = {
	           
	            
	            gradient: defProperty('gradient', true),
	           
	            
	            color: defProperty('color', keyword_null),
	           
	            
	            showBorder: defProperty('showBorder', false),
	           
	            
	            borderColor: defProperty('borderColor', 'black'),
	           
	            
	            dataBarDirection: defProperty('dataBarDirection', 0),
	           
	            
	            negativeFillColor: defProperty('negativeFillColor', 'red'),
	           
	            
	            useNegativeFillColor: defProperty('useNegativeFillColor', true),
	           
	            
	            negativeBorderColor: defProperty('negativeBorderColor', 'black'),
	           
	            
	            useNegativeBorderColor: defProperty('useNegativeBorderColor', false),
	           
	            
	            axisPosition: defProperty('axisPosition', 0),
	           
	            
	            axisColor: defProperty('axisColor', 'black'),
	           
	            
	            showBarOnly: defProperty('showBarOnly', false),
	            _init: function (color) {
	                var self = this;
	                self.gradient(true);
	                self.color(color);
	                self.showBorder(false);
	                self.borderColor('black');
	                self.dataBarDirection(0) ;
	                self.negativeFillColor('red');
	                self.useNegativeFillColor(true);
	                self.negativeBorderColor('black');
	                self.useNegativeBorderColor(false);
	                self.axisPosition(0) ;
	                self.axisColor('black');
	                self.showBarOnly(false);
	            },
	            reset: function () {
	                var self = this;
	                self.ranges(keyword_null);
	                self.condition(keyword_null);
	                self.style(keyword_null);
	                self._init(ColorToString(255, 99, 142, 198));
	                self.stopIfTrue(false);
	                self.priority(1);
	                self.minValue(keyword_null);
	                self.minType(5 );
	                self.midValue(keyword_null);
	                self.midType(keyword_null);
	                self.maxValue(keyword_null);
	                self.maxType(7 );
	                self.minColor(keyword_null);
	                self.midColor(keyword_null);
	                self.maxColor(keyword_null);
	            },
	            _calcuteMaxMinValue: function (evaluator, baseRow, baseColumn, isMax) {
	                var self = this;
	                var tpRange;
	                var type = isMax ? self.maxType() : self.minType();
	                var value = isMax ? self.maxValue() : self.minValue();
	                if (type === 6  || type === 4 ) {
	                    for (var i = 0; i < arrayHelper_getLength(self.ranges()); i++) {
	                        if (self.ranges()[i].intersect(baseRow, -1, 1, -1)) {
	                            tpRange = self.ranges()[i];
	                            if (tpRange) {
	                                var tpRow = tpRange.row, tpCol = tpRange.col;
	                                tpRow = tpRow === -1 ? 0 : tpRow;
	                                tpCol = tpCol === -1 ? 0 : tpCol;
	                                return self._getActualValue(evaluator, tpRow, tpCol, type, value);
	                            }
	                        }
	                    }
	                } else {
	                    return self._getActualValue(evaluator, baseRow, baseColumn, type, value);
	                }
	            },
	            _evaluateNoneScale: function (currentValue, minValue, maxValue, axisScale) {
	                axisScale = 0.0;
	                if (currentValue >= maxValue && currentValue > minValue) {
	                    return [1.0, axisScale];
	                }
	                if (currentValue <= minValue && currentValue < maxValue) {
	                    return [0.0, axisScale];
	                }
	                if (maxValue === minValue) {
	                    return [0.5, axisScale];
	                }
	                return [(currentValue - minValue) / (maxValue - minValue), axisScale];
	            },
	
	            _evaluateMidScale: function (currentValue, minValue, maxValue, axisScale) {
	                axisScale = 0.5;
	                var totalValue = math_abs(maxValue - minValue);
	                if (maxValue > 0 && minValue >= 0) {
	                    if (maxValue === minValue) {
	                        return [0.5, axisScale];
	                    }
	
	                    if (currentValue >= maxValue) {
	                        return [0.5, axisScale];
	                    } else if (currentValue <= minValue) {
	                        return [minValue / maxValue * 0.5, axisScale];
	                    }
	                    return [math_abs(currentValue / maxValue) * 0.5, axisScale];
	                } else if (maxValue > 0 && minValue < 0) {
	                    var positiveMaxScale = maxValue > math_abs(minValue) ? 0.5 : maxValue / totalValue;
	                    var negativeMaxScale = maxValue > math_abs(minValue) ? minValue / totalValue : -0.5;
	                    if (currentValue > 0) {
	                        if (currentValue >= maxValue) {
	                            return [positiveMaxScale, axisScale];
	                        }
	                        return [(currentValue / maxValue) * positiveMaxScale, axisScale];
	                    } else if (currentValue < 0) {
	                        if (currentValue <= minValue) {
	                            return [negativeMaxScale, axisScale];
	                        }
	                        return [(currentValue / minValue) * negativeMaxScale, axisScale];
	                    }
	                    return [0.0, axisScale];
	                } else if (maxValue <= 0 && minValue < 0) {
	                    if (maxValue === minValue) {
	                        return [-0.5, axisScale];
	                    }
	
	                    if (currentValue >= maxValue) {
	                        return [-maxValue / minValue * 0.5, axisScale];
	                    } else if (currentValue <= minValue) {
	                        return [-0.5, axisScale];
	                    }
	                    return [-currentValue / minValue * 0.5, axisScale];
	                } else if (maxValue === 0 && minValue === 0) {
	                    return [0.0, axisScale];
	                }
	
	                axisScale = -1;
	                return [-1, axisScale];
	            },
	            _evaluateAutoScale: function (currentValue, minValue, maxValue, axisScale) {
	                var absMinValue = math_abs(minValue);
	                var absMaxValue = math_abs(maxValue);
	                var totalValue = math_abs(maxValue - minValue);
	                var minus = minValue < 0 ? -1.0 : 1.0;
	                if ((maxValue > 0 && minValue >= 0) || (maxValue <= 0 && minValue < 0)) {
	                    var maxValue2 = math_max(absMinValue, absMaxValue);
	                    var minValue2 = math_min(absMinValue, absMaxValue);
	                    var absCurrentValue = math_abs(currentValue);
	                    axisScale = minValue < 0 ? 1.0 : 0.0;
	
	                    if (absCurrentValue <= minValue2 && absCurrentValue < maxValue2) {
	                        return [0.0, axisScale];
	                    }
	                    if (absCurrentValue >= maxValue2 && absCurrentValue > minValue2) {
	                        return [minus, axisScale];
	                    }
	                    if (minValue2 === maxValue2) {
	                        return [minus * 0.5, axisScale];
	                    }
	                    return [minus * (math_abs(currentValue) - minValue2) / totalValue, axisScale];
	                }
	                if (maxValue > 0 && minValue < 0) {
	                    axisScale = math_abs(minValue) / totalValue;
	                    if (currentValue === 0) {
	                        return [0.0, axisScale];
	                    }
	                    if (currentValue >= maxValue) {
	                        return [1 - axisScale, axisScale];
	                    }
	                    return [math_max(currentValue, minValue) / totalValue, axisScale];
	                } else if (maxValue === 0 && minValue === 0) {
	                    axisScale = 0.5;
	                    if (currentValue === 0) {
	                        return [0.0, axisScale];
	                    }
	                    return [minus * 0.5, axisScale];
	                }
	                axisScale = -1;
	                return [-1, axisScale];
	            },
	            _evaluateScale: function (currentValue, minValue, maxValue, axisScale) {
	                var self = this;
	                if (self.axisPosition() === 0 ) {
	                    return self._evaluateAutoScale(currentValue, minValue, maxValue, axisScale);
	                } else if (self.axisPosition() === 1 ) {
	                    return self._evaluateMidScale(currentValue, minValue, maxValue, axisScale);
	                }
	                return self._evaluateNoneScale(currentValue, minValue, maxValue, axisScale);
	            },
	
	           
	            
	            evaluate: function (evaluator, baseRow, baseColumn, actual) {
	                if (!isNullOrUndefined(actual)) {
	                    var result = {},
	                        numberValue = (calcConvert_isNumber(actual, true) && calcConvert_tryToDouble(actual, result)) ? result.value : NaN;
	                    if (isNaN(numberValue)) {
	                        return keyword_null;
	                    }
	                    var self = this;
	                    var minValue = self._calcuteMaxMinValue(evaluator, baseRow, baseColumn, false);
	                    var maxValue = self._calcuteMaxMinValue(evaluator, baseRow, baseColumn, true);
	                    if (isInstanceOf(minValue, Date)) {
	                        minValue = dateTimeHelper._toOADate(minValue);
	                    }
	                    if (isInstanceOf(maxValue, Date)) {
	                        maxValue = dateTimeHelper._toOADate(maxValue);
	                    }
	                    if (!isNullOrUndefined(minValue) && !isNullOrUndefined(maxValue)) {
	                        if (minValue > maxValue) {
	                            var tpNum = maxValue;
	                            maxValue = minValue;
	                            minValue = tpNum;
	                        }
	                        var axisScale;
	                        var resultArray = self._evaluateScale(numberValue, minValue, maxValue, axisScale);
	                        if (!resultArray || arrayHelper_getLength(resultArray) < 2) {
	                            return keyword_null;
	                        }
	                        var barScale = resultArray[0];
	                        axisScale = resultArray[1];
	                        var fillColor = numberValue < 0 && self.useNegativeFillColor() ? self.negativeFillColor() : self.color();
	                        var borderFillColor = numberValue < 0 && self.useNegativeBorderColor() ? self.negativeBorderColor() : self.borderColor();
	                        var axisColor = self.axisColor();
	                        fillColor = _ThemeContext._getColor(evaluator, fillColor);
	                        borderFillColor = _ThemeContext._getColor(evaluator, borderFillColor);
	                        axisColor = _ThemeContext._getColor(evaluator, axisColor);
	                        return {
	                            fillColor: fillColor,
	                            borderColor: borderFillColor,
	                            showBorder: self.showBorder(),
	                            axisColor: axisColor,
	                            isGradient: self.gradient(),
	                            direction: self.dataBarDirection(),
	                            axisLocation: axisScale,
	                            scale: barScale,
	                            showBarOnly: self.showBarOnly()
	                        };
	                    }
	                }
	                return keyword_null;
	            },
	            toJSON: function (context) {
	                return toJsonFn.call(this, context, ps);
	            },
	            fromJSON: function (settings, context, noSchema) {
	                fromJsonFn.call(this, context, ps, settings, noSchema);
	                this.initCondition(context);
	                this._adjustConditionFormula();
	            }
	        };
	        $.extend(DataBarRule.prototype, proto);
	
	        DataBarRule.paintDataBar = function (ctx, obj, x, y, w, h) {
	            var rc = new Sheets.Rect(x + 2, y + 2, w - 4, h - 4), startX = rc.x, startY = rc.y,
	                width = math_floor(math_abs(rc.width * obj.scale)), height = rc.height;
	            if (obj.axisLocation === 0) {
	                if (obj.scale <= 0) {
	                    width = 0;
	                }
	            } else if (obj.axisLocation === 1) {
	                if (obj.scale < 0) {
	                    startX = startX + rc.width - width;
	                } else {
	                    width = 0;
	                }
	            } else {
	                var axisX = math_floor(rc.width * obj.axisLocation + startX) + 0.5, axisY = rc.y, axisWidth = 1.0,
	                    axisHeight = h - 2;
	                ctx.lineWidth = axisWidth;
	                ctx.strokeStyle = obj.axisColor;
	                ctx.beginPath();
	                for (var len = 0; len <= axisHeight; len += 2) {
	                    if (obj.direction === 1 ) {
	                        ctx.moveTo(2 * x + w - axisX, axisY + len);
	                        ctx.lineTo(2 * x + w - axisX, axisY + len + 1);
	                    } else {
	                        ctx.moveTo(axisX, axisY + len);
	                        ctx.lineTo(axisX, axisY + len + 1);
	                    }
	                }
	                ctx.stroke();
	                if (obj.scale > 0.0) {
	                    startX = axisX + axisWidth;
	                } else if (obj.scale < 0.0) {
	                    startX = axisX - width;
	                } else {
	                    width = 0.0;
	                }
	            }
	            if (obj.showBorder) {
	                startX = math_floor(startX) + 0.5;
	                width -= 1;
	                startY += 0.5;
	                height -= 1;
	            }
	            var linearGradientX0 = startX;
	            var linearGradientX1 = startX + width;
	            if (obj.direction === 1 ) {
	                linearGradientX0 = 2 * x + w - startX - width;
	                linearGradientX1 = 2 * x + w - startX;
	            }
	            if (width >= 0 && height >= 0) {
	                var fillStyle = obj.fillColor;
	                if (obj.isGradient) {
	                    var factor = 0.9;
	                    fillStyle = ctx.createLinearGradient(linearGradientX0, startY, linearGradientX1, startY);
	                    var tempColor = ColorHelper._fromString(obj.fillColor),
	                        color1 = ColorToString(tempColor.a, math_floor(255 * factor + tempColor.r * (1 - factor)), math_floor(255 * factor + tempColor.g * (1 - factor)), math_floor(255 * factor + tempColor.b * (1 - factor))),
	                        offset1 = obj.scale < 0 ? 1 - factor : factor, color2 = obj.fillColor,
	                        offset2 = obj.scale < 0 ? 1 : 0;
	                    if (obj.direction === 1 ) {
	                        fillStyle.addColorStop(offset1, color2);
	                        fillStyle.addColorStop(offset2, color1);
	                    } else {
	                        fillStyle.addColorStop(offset1, color1);
	                        fillStyle.addColorStop(offset2, color2);
	                    }
	                }
	
	                ctx.fillStyle = fillStyle;
	
	                ctx.fillRect(linearGradientX0, startY, width, height);
	                if (obj.showBorder && width > 0 && height > 0) {
	                    ctx.strokeStyle = obj.borderColor;
	                    ctx.strokeRect(linearGradientX0, startY, width, height);
	                }
	            }
	        };
	        return DataBarRule;
	    })(ScaleRule);
	    ConditionalFormatting.DataBarRule = DataBarRule;
	    var IconCriterion = (function () {
	       
	        
	        function IconCriterion(isGreaterThanOrEqualTo, iconValueType, iconValue) {
	            this.isGreaterThanOrEqualTo = isGreaterThanOrEqualTo;
	            this.iconValueType = iconValueType;
	            this.iconValue = iconValue;
	        }
	
	        return IconCriterion;
	    })();
	    ConditionalFormatting.IconCriterion = IconCriterion;
	    var IconSetRule = (function (_super) {
	        $.inherit(IconSetRule, _super);
	        var ps = ['ruleType', 'ranges', 'iconSetType', 'iconCriteria', 'showIconOnly', 'reverseIconOrder', 'priority', 'icons'];
	
	       
	        
	        function IconSetRule(iconSetType, ranges) {
	            var _iconSetType = iconSetType;
	            if (arguments.length === 0) {
	                _iconSetType = 0 ;
	            }
	            _super.call(this, 13 , keyword_null, keyword_null, keyword_null);
	            this.ranges(ranges);
	            this._init(_iconSetType);
	        }
	
	        var proto = {
	            _initIconSetType: function (iconSetType) {
	                var self = this;
	                self.iconSetType(iconSetType, false);
	                if (self.iconSetType() >= 0  && self.iconSetType() <= 9 ) {
	                    self._iconCriteria = [] ;
	                    self._iconCriteria[0] = new IconCriterion(true, 4 , 33);
	                    self._iconCriteria[1] = new IconCriterion(true, 4 , 67);
	                    self._icons = [];
	                    self._icons[0] = {iconSetType: iconSetType, iconIndex: 0};
	                    self._icons[1] = {iconSetType: iconSetType, iconIndex: 1};
	                    self._icons[2] = {iconSetType: iconSetType, iconIndex: 2};
	                } else if (self.iconSetType() >= 10  && self.iconSetType() <= 14 ) {
	                    self._iconCriteria = [] ;
	                    self._iconCriteria[0] = new IconCriterion(true, 4 , 25);
	                    self._iconCriteria[1] = new IconCriterion(true, 4 , 50);
	                    self._iconCriteria[2] = new IconCriterion(true, 4 , 75);
	                    self._icons = [];
	                    self._icons[0] = {iconSetType: iconSetType, iconIndex: 0};
	                    self._icons[1] = {iconSetType: iconSetType, iconIndex: 1};
	                    self._icons[2] = {iconSetType: iconSetType, iconIndex: 2};
	                    self._icons[3] = {iconSetType: iconSetType, iconIndex: 3};
	                } else if (self.iconSetType() >= 15  && self.iconSetType() <= 19 ) {
	                    self._iconCriteria = [] ;
	                    self._iconCriteria[0] = new IconCriterion(true, 4 , 20);
	                    self._iconCriteria[1] = new IconCriterion(true, 4 , 40);
	                    self._iconCriteria[2] = new IconCriterion(true, 4 , 60);
	                    self._iconCriteria[3] = new IconCriterion(true, 4 , 80);
	                    self._icons = [];
	                    self._icons[0] = {iconSetType: iconSetType, iconIndex: 0};
	                    self._icons[1] = {iconSetType: iconSetType, iconIndex: 1};
	                    self._icons[2] = {iconSetType: iconSetType, iconIndex: 2};
	                    self._icons[3] = {iconSetType: iconSetType, iconIndex: 3};
	                    self._icons[4] = {iconSetType: iconSetType, iconIndex: 4};
	                } else if (self.iconSetType() > 19 ) {
	                    self._iconCriteria = [];
	                    self._icons = [];
	                }
	            },
	            _init: function (iconSetType) {
	                this.showIconOnly(false);
	                this.reverseIconOrder(false);
	                this._initIconSetType(iconSetType);
	            },
	            _modifyIconIndex: function (index) {
	                var iconCount = arrayHelper_getLength(this._iconCriteria) + 1;
	                if (this.reverseIconOrder() && iconCount > 2) {
	                    return iconCount - 1 - index;
	                }
	                return index;
	            },
	            _getActualValue: function (evaluator, baseRow, baseColumn, index) {
	                var self = this;
	                var value = self._iconCriteria[index];
	                if (value) {
	                    switch (value.iconValueType) {
	                        case 7 
	                        :
	                            return self._calculateValue(evaluator, baseRow, baseColumn, value.iconValue);
	                        case 1 
	                        :
	                            return self._calculateValue(evaluator, baseRow, baseColumn, value.iconValue);
	                        case 4 
	                        :
	                            return self._calculatePercent(evaluator, baseRow, baseColumn, value.iconValue);
	                        case 5 
	                        :
	                            return self._calculatePercentile(evaluator, baseRow, baseColumn, value.iconValue);
	                        default:
	                            return keyword_null;
	                    }
	                }
	            },
	           
	            
	            evaluate: function (evaluator, baseRow, baseColumn, actual) {
	                var self = this;
	                var value = actual;
	                if (isNullOrUndefined(value)) {
	                    return keyword_null;
	                }
	                var result = {},
	                    numberValue = (calcConvert_isNumber(actual, true) && typeof value !== 'boolean' && calcConvert_tryToDouble(actual, result)) ? result.value : NaN;
	                if (isNaN(numberValue)) {
	                    return keyword_null;
	                }
	                var iconCount = 0, iconSetType = self.iconSetType(), iconCriteria = self._iconCriteria;
	                if (iconSetType >= 15 ) {
	                    iconCount = 5;
	                } else if (iconSetType >= 10 ) {
	                    iconCount = 4;
	                } else if (iconSetType >= 0 ) {
	                    iconCount = 3;
	                }
	                if (!iconCriteria) {
	                    return 0;
	                }
	                var criterion;
	                var modifyIndex = 0;
	                for (var n = iconCount - 1; n > 0; n--) {
	                    if (n < arrayHelper_getLength(iconCriteria) + 1) {
	                        criterion = iconCriteria[n - 1];
	                        if (!isNullOrUndefined((criterion && criterion.iconValue))) {
	                            var currentValue = self._getActualValue(evaluator, baseRow, baseColumn, n - 1);
	                            if (!isNullOrUndefined(currentValue)) {
	                                var isGreater = criterion.isGreaterThanOrEqualTo ?
	                                    numberValue >= currentValue : numberValue > currentValue;
	                                if (numberValue < Number.MAX_VALUE && isGreater) {
	                                    modifyIndex = n;
	                                    break;
	                                }
	                            }
	                        }
	                    }
	                }
	                var iconIndex = self._modifyIconIndex(modifyIndex);
	                var icons = self._icons;
	               
	                if (!icons) {
	                    return {
	                        iconSetType: ConditionalFormatting.IconSetType.noIcons,
	                        iconIndex: 0,
	                        showIconOnly: self.showIconOnly()
	                    };
	                }
	                return {
	                    iconSetType: icons[iconIndex] ? icons[iconIndex].iconSetType : ConditionalFormatting.IconSetType.noIcons,
	                    iconIndex: icons[iconIndex] ? icons[iconIndex].iconIndex : 0,
	                    showIconOnly: self.showIconOnly()
	                };
	            },
	           
	            
	            reset: function () {
	                var self = this;
	                self.ranges(keyword_null);
	                self.condition(keyword_null);
	                self.style(keyword_null);
	                self.showIconOnly(false);
	                self.reverseIconOrder(false);
	                self.iconSetType(0 , false);
	                self._iconCriteria = keyword_null;
	                self.stopIfTrue(false);
	                self.priority(1);
	                self.minColor(keyword_null);
	                self.minValue(keyword_null);
	                self.minType(5 );
	                self.midColor(keyword_null);
	                self.midValue(keyword_null);
	                self.midType(keyword_null);
	                self.maxColor(keyword_null);
	                self.maxValue(keyword_null);
	                self.maxType(7 );
	                self._icons = keyword_null;
	            },
	           
	            
	            iconSetType: defProperty('iconSetType', 0 , function (value) {
	                this._initIconSetType(value);
	            }),
	           
	            
	            icons: function (value) {
	                if (arguments.length === 1) {
	                    this._icons = value;
	                }
	                return this._icons;
	            },
	           
	            
	            reverseIconOrder: defProperty('reverseIconOrder', false),
	           
	            
	            showIconOnly: defProperty('showIconOnly', false),
	           
	            
	            iconCriteria: function () {
	                return this._iconCriteria;
	            },
	            toJSON: function (context) {
	                return toJsonFn.call(this, context, ps);
	            },
	            fromJSON: function (settings, context, noSchema) {
	                fromJsonFn.call(this, context, ps, settings, noSchema);
	                this.initCondition(context);
	                this._adjustConditionFormula();
	            }
	        };
	        $.extend(IconSetRule.prototype, proto);
	
	        IconSetRule.paintIconSet = function (ctx, obj, x, y, w, h, style, imageLoader, zoomFactor) {
	            var startX = x + 1, startY = y + 2, width = parseInt(zoomFactor * 16.0), height = parseInt(zoomFactor * 16.0);
	            if (obj.showIconOnly) {
	                if (style.hAlign === 1 ) {
	                    startX = x + w / 2.0 - width / 2.0;
	                } else if (style.hAlign === 2 ) {
	                    startX = x + w - width - 2;
	                }
	            }
	            if (style.vAlign === 1 ) {
	                startY = y + h / 2.0 - height / 2.0;
	            } else if (style.vAlign === 2 ) {
	                startY = y + h - height - 2;
	            }
	            if (obj.iconSetType === ConditionalFormatting.IconSetType.noIcons) {
	                return;
	            }
	            var icon = IconSetRule.getIcon(obj.iconSetType, obj.iconIndex);
	
	            try {
	                if (icon && imageLoader) {
	                    if ($.getType(icon) === 'string') {
	                        drawImage(icon, startX, startY, width, height);
	                    } else {
	                        drawImage(icon.image, icon.x, icon.y, icon.w, icon.h, startX, startY, width, height);
	                    }
	                }
	            } catch (ex) {
	               
	            }
	
	            function drawImage() {
	                var args = arguments, image = args[0], sx = args[1], sy = args[2], sw = args[3], sh = args[4];
	                if (imageLoader._getState(image)) {
	                    var imageObj = imageLoader._getImage(image);
	                    if (arrayHelper_getLength(args) === 5) {
	                        ctx.drawImage(imageObj, sx, sy, sw, sh);
	                    } else {
	                        ctx.drawImage(imageObj, sx, sy, sw, sh, args[5], args[6], args[7], args[8]);
	                    }
	                } else {
	                    imageLoader._addImage(image);
	                }
	            }
	        };
	        IconSetRule._getImageSrc = function () {
	            return 'data:image/png;base64,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';
	        };
	       
	        
	        IconSetRule.getIcon = function (iconSetType, iconIndex) {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            var iconArray = [
	                [160, 180, 80, keyword_null, keyword_null],
	                [100, 120, 140, keyword_null, keyword_null],
	                [900, 920, 880, keyword_null, keyword_null],
	                [820, 840, 860, keyword_null, keyword_null],
	                [780, 1000, 420, keyword_null, keyword_null],
	                [680, 940, 400, keyword_null, keyword_null],
	                [800, 1020, 440, keyword_null, keyword_null],
	                [740, 1040, 400, keyword_null, keyword_null],
	                [720, 980, 380, keyword_null, keyword_null],
	                [700, 960, 360, keyword_null, keyword_null],
	                [160, 40, 60, 80, keyword_null],
	                [100, 0, 20, 140, keyword_null],
	                [220, 340, 460, 760, keyword_null],
	                [600, 620, 640, 660, keyword_null],
	                [200, 680, 940, 400, keyword_null],
	                [160, 40, 180, 60, 80],
	                [100, 0, 120, 20, 140],
	                [580, 600, 620, 640, 660],
	                [480, 500, 520, 540, 560],
	                [240, 260, 280, 300, 320]
	            ];
	           
	            var x = '0,', heightAndWidth = ',16,16';
	            for (var i = 0; i < arrayHelper_getLength(iconArray); i++) {
	                for (var j = 0; j < arrayHelper_getLength(iconArray[i]); j++) {
	                    var newVar = iconArray[i][j];
	                    if (newVar !== keyword_null) {
	                        iconArray[i][j] = x + newVar + heightAndWidth;
	                    }
	                }
	            }
	            var image = IconSetRule._getImageSrc();
	            if (!iconArray[iconSetType]) {
	                return keyword_null;
	            }
	            var imageRect = iconArray[iconSetType][iconIndex];
	            if (imageRect) {
	                var rect = imageRect.split(',');
	                return {
	                    image: image,
	                    x: rect[0],
	                    y: rect[1],
	                    w: rect[2],
	                    h: rect[3]
	                };
	            }
	            return keyword_null;
	        };
	        return IconSetRule;
	    })(ScaleRule);
	    ConditionalFormatting.IconSetRule = IconSetRule;
	
	    function adjustCellValueRuleValue(value) {
	        if (typeof value === "string") {
	            value = $.trim(value);
	            if (value[0] !== '=') {
	                value = '="' + stringHelper._replace(value, '"', '""') + '"';
	            }
	        }
	        return value;
	    }
	
	    var ConditionalFormats = (function () {
	       
	        
	        function ConditionalFormats(worksheet) {
	            this._rules = [];
	            this._ruleTypes = keyword_null;
	            this._cellRuleCache = {};
	            this._worksheet = worksheet;
	        }
	
	        function addRuleToArray(rulesTemp, cellCache) {
	            if (cellCache) {
	                for (var i = 0; i < cellCache.length; i++) {
	                    rulesTemp.push(cellCache[i]);
	                }
	            }
	        }
	
	        var proto = {
	           
	            
	            getRule: function (index) {
	                return this._rules[index];
	            },
	           
	            
	            count: function () {
	                return arrayHelper_getLength(this._rules);
	            },
	            _getAllRules: function () {
	                return this._rules;
	            },
	            _cloneToActualRanges: function (ranges) {
	                var newRanges = [], sheet = this._worksheet;
	                var length = arrayHelper_getLength(ranges);
	                for (var i = 0; i < length; i++) {
	                    var actualRange = sheet._getActualRange(ranges[i]);
	                    newRanges.push(actualRange);
	                }
	                return newRanges;
	            },
	            _cloneToRanges: function (actualRanges) {
	                var newRanges = [], sheet = this._worksheet;
	                for (var i = 0, len = arrayHelper_getLength(actualRanges); i < len; i++) {
	                    var actualRange = actualRanges[i],
	                        range = new Range(actualRange.row, actualRange.col, getRowCount(actualRange), getColCount(actualRange));
	                    if (actualRange.row === 0 && getRowCount(actualRange) === sheet.getRowCount()) {
	                        range.row = -1;
	                    }
	                    if (actualRange.col === 0 && getColCount(actualRange) === sheet.getColumnCount()) {
	                        range.col = -1;
	                    }
	                    newRanges.push(range);
	                }
	                return newRanges;
	            },
	            _resetCache: function () {
	                this._cellRuleCache = {};
	                if (this._rules) {
	                    for (var i = 0; i < arrayHelper_getLength(this._rules); i++) {
	                        this._addCache(this._rules[i]);
	                    }
	                }
	            },
	            _clearCellRuleCache: function () {
	                this._cellRuleCache = {};
	            },
	            _addCache: function (rule) {
	                var self = this, cellRuleCache = self._cellRuleCache, rowCache, cellCache, row, col,
	                    ranges = self._cloneToActualRanges(rule.ranges());
	                var sheet = self._worksheet, sheetRowCount = sheet.getRowCount(),
	                    sheetColCount = sheet.getColumnCount();
	                for (var i = 0; i < arrayHelper_getLength(ranges); i++) {
	                    var range = ranges[i];
	                    var rangeRow = range.row, rangeCol = range.col, rangeRowCount = getRowCount(range),
	                        rangeColCount = getColCount(range);
	                    if (rangeRow + rangeRowCount - 1 >= sheetRowCount) {
	                        rangeRowCount = sheetRowCount - rangeRow;
	                    }
	                    if (rangeCol + rangeColCount - 1 >= sheetColCount) {
	                        rangeColCount = sheetColCount - rangeCol;
	                    }
	                    for (var r = 0; r < rangeRowCount; r++) {
	                        row = r + rangeRow;
	                        rowCache = cellRuleCache[row];
	                        if (!rowCache) {
	                            cellRuleCache[row] = rowCache = {};
	                        }
	                        for (var c = 0; c < rangeColCount; c++) {
	                            col = c + rangeCol;
	                            cellCache = rowCache[col];
	                            if (!cellCache) {
	                                rowCache[col] = cellCache = [];
	                            }
	                            cellCache.push(rule);
	                        }
	                    }
	                }
	            },
	            _removeCache: function (rule) {
	                var cellRuleCache = this._cellRuleCache, rowCache, cellCache, row, col,
	                    ranges = this._cloneToActualRanges(rule.ranges());
	                for (var i = 0; i < arrayHelper_getLength(ranges); i++) {
	                    var range = ranges[i];
	                    for (var r = 0; r < getRowCount(range); r++) {
	                        row = r + range.row;
	                        rowCache = cellRuleCache[row];
	                        if (!rowCache) {
	                            continue;
	                        }
	                        for (var c = 0; c < getColCount(range); c++) {
	                            col = c + range.col;
	                            cellCache = rowCache[col];
	                            if (!cellCache) {
	                                continue;
	                            }
	                            var newCellCache = [];
	                            for (var k = 0; k < arrayHelper_getLength(cellCache); k++) {
	                                if (cellCache[k] !== rule) {
	                                    newCellCache.push(cellCache[k]);
	                                }
	                            }
	                            if (arrayHelper_getLength(newCellCache) === 0) {
	                                newCellCache = keyword_undefined;
	                            }
	                            rowCache[col] = newCellCache;
	                        }
	                    }
	                }
	            },
	            _removeCacheByRange: function (row, col, rowCount, colCount) {
	                var r, c, caches = this._cellRuleCache, rowCache;
	                for (var i = 0; i < rowCount; i++) {
	                    r = i + row;
	                    rowCache = caches[r];
	                    if (rowCache) {
	                        for (var j = 0; j < colCount; j++) {
	                            c = j + col;
	                            rowCache[c] = keyword_undefined;
	                        }
	                    }
	                }
	            },
	           
	            
	            addSpecificTextRule: function (comparisionOperator, text, style, ranges) {
	                var rule = new NormalConditionRule(2 , ranges, style, comparisionOperator, keyword_null, keyword_null, text);
	                return this.addRule(rule);
	            },
	           
	            
	            addCellValueRule: function (comparisionOperator, value1, value2, style, ranges) {
	                var rule = new NormalConditionRule(1 , ranges, style, comparisionOperator, adjustCellValueRuleValue(value1), adjustCellValueRuleValue(value2));
	                return this.addRule(rule);
	            },
	           
	            
	            addDateOccurringRule: function (type, style, ranges) {
	                var rule = new NormalConditionRule(4 , ranges, style, keyword_null, keyword_null, keyword_null, keyword_null, keyword_null, type);
	                return this.addRule(rule);
	            },
	           
	            
	            addFormulaRule: function (formula, style, ranges) {
	                var rule = new NormalConditionRule(3 , ranges, style, keyword_null, keyword_null, keyword_null, keyword_null, formula);
	                return this.addRule(rule);
	            },
	           
	            
	            addTop10Rule: function (type, rank, style, ranges) {
	                var rule = new NormalConditionRule(5 , ranges, style, keyword_null, keyword_null, keyword_null, keyword_null, keyword_null, type, rank);
	                return this.addRule(rule);
	            },
	           
	            
	            addUniqueRule: function (style, ranges) {
	                var rule = new NormalConditionRule(6 , ranges, style);
	                return this.addRule(rule);
	            },
	           
	            
	            addDuplicateRule: function (style, ranges) {
	                var rule = new NormalConditionRule(7 , ranges, style);
	                return this.addRule(rule);
	            },
	           
	            
	            addAverageRule: function (type, style, ranges) {
	                var rule = new NormalConditionRule(8 , ranges, style, keyword_null, keyword_null, keyword_null, keyword_null, keyword_null, type);
	                return this.addRule(rule);
	            },
	           
	            
	            add3ScaleRule: function (minType, minValue, minColor, midType, midValue, midColor, maxType, maxValue, maxColor, ranges) {
	                var rule;
	                if (arguments.length === 0) {
	                    rule = new ScaleRule(11 );
	                } else {
	                    rule = new ScaleRule(11 , minType, minValue, minColor, midType, midValue, midColor, maxType, maxValue, maxColor, ranges);
	                }
	                return this.addRule(rule);
	            },
	           
	            
	            add2ScaleRule: function (minType, minValue, minColor, maxType, maxValue, maxColor, ranges) {
	                var rule;
	                if (arguments.length === 0) {
	                    rule = new ScaleRule(10 );
	                } else {
	                    rule = new ScaleRule(10 , minType, minValue, minColor, keyword_null, keyword_null, keyword_null, maxType, maxValue, maxColor, ranges);
	                }
	                return this.addRule(rule);
	            },
	           
	            
	            addDataBarRule: function (minType, minValue, maxType, maxValue, color, ranges) {
	                var rule;
	                if (arguments.length === 0) {
	                    rule = new DataBarRule();
	                } else {
	                    rule = new DataBarRule(minType, minValue, maxType, maxValue, color, ranges);
	                }
	                return this.addRule(rule);
	            },
	           
	            
	            addIconSetRule: function (iconSetTye, ranges) {
	                var rule = new IconSetRule(iconSetTye, ranges);
	                return this.addRule(rule);
	            },
	           
	            
	            addRule: function (rule) {
	                var self = this, sheet = self._worksheet;
	                if (sheet) {
	                    if (!rule) {
	                        throw new Error(sR().Exp_RuleIsNull);
	                    }
	                    sheet._modelManager._backupConditionalRules(0 , rule);
	                    for (var index = 0; index < arrayHelper_getLength(self._rules); index++) {
	                        self._rules[index].priority(self._rules[index].priority() + 1);
	                    }
	                    rule.priority(1);
	                    self._rules.push(rule);
	                    rule.context(sheet);
	                    self._addCache(rule);
	                    sheet._invalidate();
	                    return rule;
	                }
	            },
	           
	            
	            removeRule: function (rule) {
	                var self = this, sheet = self._worksheet;
	                if (sheet) {
	                    if (rule) {
	                        sheet._modelManager._backupConditionalRules(1 , rule);
	                        self._removeCache(rule);
	                        arrayHelper_remove(self._rules, rule);
	                    }
	                    sheet._invalidate();
	                }
	            },
	            _removeRange: function (srcRange, row, column, rowCount, columnCount) {
	                if (!srcRange.intersect(row, column, rowCount, columnCount)) {
	                    return [srcRange];
	                }
	                var sourceRowTop = srcRange.row;
	                var sourceRowBottom = srcRange.row + getRowCount(srcRange) - 1;
	                var sourceColumnLeft = srcRange.col;
	                var sourceColumnRight = srcRange.col + getColCount(srcRange) - 1;
	                var removeRowTop = row;
	                var removeRowBottom = row + rowCount - 1;
	                var removeColumnLeft = column;
	                var removeColumnRight = column + columnCount - 1;
	                var newRanges = [];
	               
	                if (sourceRowTop !== -1 && sourceColumnLeft !== -1 && removeRowTop !== -1 && removeColumnLeft !== -1) {
	                   
	                    if (removeColumnLeft - sourceColumnLeft > 0) {
	                        var left = createRange(sourceRowTop, sourceColumnLeft, getRowCount(srcRange), removeColumnLeft - sourceColumnLeft);
	                        newRanges.push(left);
	                    }
	
	                    if (sourceColumnRight - removeColumnRight > 0) {
	                        var right = createRange(sourceRowTop, removeColumnRight + 1, getRowCount(srcRange), sourceColumnRight - removeColumnRight);
	                        newRanges.push(right);
	                    }
	
	                    if (removeRowTop - sourceRowTop > 0) {
	                        var top = createRange(sourceRowTop, math_max(removeColumnLeft, sourceColumnLeft), removeRowTop - sourceRowTop, math_min(removeColumnRight, sourceColumnRight) - math_max(removeColumnLeft, sourceColumnLeft) + 1);
	                        newRanges.push(top);
	                    }
	                    if (sourceRowBottom - removeRowBottom > 0) {
	                        var bottom = createRange(removeRowBottom + 1, math_max(removeColumnLeft, sourceColumnLeft), sourceRowBottom - removeRowBottom, math_min(removeColumnRight, sourceColumnRight) - math_max(removeColumnLeft, sourceColumnLeft) + 1);
	                        newRanges.push(bottom);
	                    }
	                }
	                if (arrayHelper_getLength(newRanges) > 0) {
	                    return newRanges;
	                }
	                return keyword_null;
	            },
	           
	            
	            removeRuleByRange: function (row, column, rowCount, columnCount) {
	                var self = this, sheet = self._worksheet;
	                if (sheet) {
	                    var removeRules = [];
	                    if (self._rules) {
	                        sheet._modelManager._backupConditionalRules(2 );
	                        self._removeCacheByRange(row, column, rowCount, columnCount);
	                        for (var i = 0, rulesLength = arrayHelper_getLength(self._rules); i < rulesLength; i++) {
	                            var rule = self._rules[i];
	                            if (rule && rule.ranges() && rule.intersects(row, column, rowCount, columnCount)) {
	                                var newRanges = [], actualRanges = self._cloneToActualRanges(rule.ranges());
	                                for (var j = 0, rangesLength = arrayHelper_getLength(actualRanges); j < rangesLength; j++) {
	                                    var ranges = self._removeRange(actualRanges[j], row, column, rowCount, columnCount);
	                                    if (ranges) {
	                                        newRanges = newRanges.concat(ranges);
	                                    }
	                                }
	                                if (arrayHelper_getLength(newRanges) > 0) {
	                                    rule.ranges(self._cloneToRanges(newRanges));
	                                } else {
	                                    removeRules.push(rule);
	                                }
	                            }
	                        }
	                    }
	                    for (var k = 0, length = arrayHelper_getLength(removeRules); k < length; k++) {
	                        arrayHelper_remove(self._rules, removeRules[k]);
	                    }
	                    sheet._invalidate();
	                }
	            },
	           
	            
	            clearRule: function () {
	                var self = this, sheet = self._worksheet;
	                if (sheet) {
	                    sheet._modelManager._backupConditionalRules(2 );
	                    self._rules.length = 0;
	                    self._resetCache();
	                    sheet._invalidate();
	                }
	            },
	           
	            
	            getRules: function (row, column) {
	                var rules = this._rules;
	                if (arguments.length === 0 || arrayHelper_getLength(rules) === 0) {
	                    return rules;
	                }
	                row = row === keyword_undefined ? -1 : row;
	                column = column === keyword_undefined ? -1 : column;
	                var caches = this._cellRuleCache, rulesTemp = [], cellCache, rowCache;
	                if (row !== -1 && column !== -1) {
	                    rowCache = caches[row];
	                    if (rowCache) {
	                        cellCache = rowCache[column];
	                        addRuleToArray(rulesTemp, cellCache);
	                    }
	                } else if (row === -1) {
	                    $.each(caches, function (p, rowCacheItem) {
	                        cellCache = rowCacheItem[column];
	                        addRuleToArray(rulesTemp, cellCache);
	                    });
	                } else {
	                    rowCache = caches[row];
	                    if (rowCache) {
	                        $.each(caches, function (p, cellCacheItem) {
	                            addRuleToArray(rulesTemp, cellCacheItem);
	                        });
	                    }
	                }
	                return rulesTemp;
	            },
	           
	            
	            containsRule: function (rule, row, column) {
	                if (rule && arrayHelper._contains(this._rules, rule)) {
	                    return rule.contains(row, column);
	                }
	                return false;
	            },
	            _addData: function (index, count, isRow) {
	                var self = this;
	                if (self._rules && self._worksheet) {
	                    var length = arrayHelper_getLength(self._rules);
	                    for (var i = 0; i < length; i++) {
	                        var rule = self._rules[i];
	                        if (rule) {
	                            if (isRow) {
	                                rule._onRowsAdded(index, count);
	                            } else {
	                                rule._onColumnsAdded(index, count);
	                            }
	                        }
	                    }
	                }
	                this._resetCache();
	            },
	            _onRowsAdded: function (row, rowCount) {
	                this._addData(row, rowCount, true);
	            },
	            _onColumnsAdded: function (col, colCount) {
	                this._addData(col, colCount, false);
	            },
	            _removeData: function (index, count, isRow) {
	                var self = this;
	                if (self._rules && self._worksheet) {
	                    var length = arrayHelper_getLength(self._rules);
	                    for (var i = length - 1; i >= 0; i--) {
	                        var rule = self._rules[i];
	                        if (rule) {
	                            if (isRow) {
	                                rule._onRowsRemoved(index, count);
	                            } else {
	                                rule._onColumnsRemoved(index, count);
	                            }
	                            if (rule.ranges().length <= 0) {
	                                self._removeCache(rule);
	                                self._rules.splice(i, 1);
	                            }
	                        }
	                    }
	                }
	                this._resetCache();
	            },
	            _onRowsRemoved: function (row, rowCount) {
	                this._removeData(row, rowCount, true);
	            },
	            _onColumnsRemoved: function (col, colCount) {
	                this._removeData(col, colCount, false);
	            },
	            _clearCache: function () {
	                var rules = this._rules, rule;
	                if (rules !== keyword_null && arrayHelper_getLength(rules) > 0) {
	                    for (var i = 0, count = arrayHelper_getLength(rules); i < count; i++) {
	                        rule = rules[i];
	                        if (rule._clearCache) {
	                            rule._clearCache();
	                        }
	                    }
	                }
	            },
	            _copyRules: function (srcRow, srcColumn, destConditionalFormats, destRow, destColumn, copyRowCount, copyColumnCount) {
	                var cacheRules = [], cacheRanges = [];
	
	                var dealedRanges = [];
	                var self = this, sheet = self._worksheet;
	                if (srcRow === -1) {
	                    srcRow = 0;
	                    destRow = 0;
	                    copyRowCount = sheet.getRowCount();
	                }
	                if (srcColumn === -1) {
	                    srcColumn = 0;
	                    destColumn = 0;
	                    copyColumnCount = sheet.getColumnCount();
	                }
	                for (var rowOffset = 0; rowOffset < copyRowCount; rowOffset++) {
	                    for (var colOffset = 0; colOffset < copyColumnCount; colOffset++) {
	                        var srcRules = self.getRules(srcRow + rowOffset, srcColumn + colOffset);
	                        for (var ruleIndex = 0; ruleIndex < arrayHelper_getLength(srcRules); ruleIndex++) {
	                            var rule = srcRules[ruleIndex], ruleRanges = rule.ranges();
	                            var tempRanges = [];
	                            for (var rangeIndex = 0; rangeIndex < arrayHelper_getLength(ruleRanges); rangeIndex++) {
	                                var range = ruleRanges[rangeIndex], actualRange = sheet._getActualRange(range),
	                                    row = actualRange.row, col = actualRange.col, rowCount = getRowCount(actualRange),
	                                    colCount = getColCount(actualRange);
	                               
	                                if (arrayHelper_indexOf(dealedRanges, range) <= -1 && range.contains(srcRow + rowOffset, srcColumn + colOffset)) {
	                                    dealedRanges.push(range);
	                                    var newRange = createRange(destRow + rowOffset, destColumn + colOffset, -1, -1);
	                                   
	                                   
	                                   
	                                   
	                                    if (row + rowCount >= copyRowCount + srcRow) {
	                                        newRange.rowCount = copyRowCount - rowOffset;
	                                    } else if (srcRow < row) {
	                                        newRange.rowCount = rowCount;
	                                    } else {
	                                        newRange.rowCount = row + rowCount - srcRow;
	                                    }
	                                   
	                                    if (col + colCount >= copyColumnCount + srcColumn) {
	                                        newRange.colCount = copyColumnCount - colOffset;
	                                    } else if (srcColumn < col) {
	                                        newRange.colCount = colCount;
	                                    } else {
	                                        newRange.colCount = col + colCount - srcColumn;
	                                    }
	                                    if (self !== destConditionalFormats || !range.containsRange(newRange)) {
	                                        tempRanges.push(newRange);
	                                    }
	                                }
	                            }
	                            if (tempRanges.length > 0) {
	                                var indexOfRule = cacheRules.indexOf(rule);
	                                if (indexOfRule < 0) {
	                                    cacheRules.push(rule);
	                                    cacheRanges.push(tempRanges);
	                                } else {
	                                    cacheRanges[indexOfRule] = cacheRanges[indexOfRule].concat(tempRanges);
	                                }
	                            }
	                        }
	                    }
	                }
	
	                for (var i = 0, length = cacheRules.length; i < length; i++) {
	                    var clonedRule = self._createRuleFromJson(cacheRules[i].toJSON(), cacheRules[i].context());
	                    var oldRanges = clonedRule.ranges();
	                    clonedRule.ranges(cacheRanges[i]);
	                    var oldFormula = clonedRule._formula;
	                    if (oldFormula) {
	                        var useR1C1 = sheet.parent.options.referenceStyle === 1 ;
	                        var oldBaseRowBaseCol = getBaseRowBaseCol(oldRanges);
	                        var expression = Sheets.CalcEngine.formulaToExpression(sheet, oldFormula, oldBaseRowBaseCol.r, oldBaseRowBaseCol.c, useR1C1);
	                        var newBaseRowBaseCol = getBaseRowBaseCol(cacheRanges[i]);
	                        var formula = Sheets.CalcEngine.expressionToFormula(sheet, expression, newBaseRowBaseCol.r, newBaseRowBaseCol.c, useR1C1);
	                        clonedRule.formula(formula);
	                    }
	                    destConditionalFormats.addRule(clonedRule);
	                }
	                self._resetCache();
	            },
	            _onRulesMoved: function (srcRow, srcColumn, moveRowCount, moveColumnCount) {
	                var dealedRanges = [];
	                var self = this, sheet = self._worksheet;
	                if (srcRow === -1) {
	                    srcRow = 0;
	                    moveRowCount = sheet.getRowCount();
	                }
	                if (srcColumn === -1) {
	                    srcColumn = 0;
	                    moveColumnCount = sheet.getColumnCount();
	                }
	                for (var rowOffset = 0; rowOffset < moveRowCount; rowOffset++) {
	                    for (var colOffset = 0; colOffset < moveColumnCount; colOffset++) {
	                        var srcRules = self.getRules(srcRow + rowOffset, srcColumn + colOffset);
	                        for (var ruleIndex = 0; ruleIndex < arrayHelper_getLength(srcRules); ruleIndex++) {
	                            var rule = srcRules[ruleIndex], ruleRanges = rule.ranges();
	                            var newRanges = [];
	                            for (var rangeIndex = 0; rangeIndex < arrayHelper_getLength(ruleRanges); rangeIndex++) {
	                                var range = ruleRanges[rangeIndex], actualRange = sheet._getActualRange(range),
	                                    row = actualRange.row, col = actualRange.col, rowCount = getRowCount(actualRange),
	                                    colCount = getColCount(actualRange);
	                               
	                                if (arrayHelper_indexOf(dealedRanges, range) <= -1 && range.contains(srcRow + rowOffset, srcColumn + colOffset)) {
	                                    dealedRanges.push(range);
	                                    if (srcRow > row) {
	                                        newRanges.push(createRange(row, col, srcRow - row, colCount));
	                                    }
	                                    if (srcColumn > col) {
	
	                                        newRanges.push(createRange(math_max(srcRow, row), col, math_min(srcRow + moveRowCount, row + rowCount) - math_max(srcRow, row), srcColumn - col));
	                                    }
	                                    if (srcColumn + moveColumnCount < col + colCount) {
	                                        newRanges.push(createRange(math_max(srcRow, row), srcColumn + moveColumnCount,
	                                            math_min(srcRow + moveRowCount, row + rowCount) - math_max(srcRow, row), col + colCount - (srcColumn + moveColumnCount)));
	                                    }
	                                    if (srcRow + moveRowCount < row + rowCount) {
	                                        newRanges.push(createRange(srcRow + moveRowCount, col, row + rowCount - (srcRow + moveRowCount), colCount));
	                                    }
	                                }
	                            }
	                            for (var delIndex = 0; delIndex < arrayHelper_getLength(dealedRanges); delIndex++) {
	                                arrayHelper_remove(ruleRanges, dealedRanges[delIndex]);
	                            }
	                            var tempRanges = ruleRanges.concat(newRanges);
	                            if (tempRanges.length > 0) {
	                                rule.ranges(tempRanges);
	                            } else {
	                                self.removeRule(rule);
	                            }
	                        }
	                    }
	                }
	                self._resetCache();
	            },
	            _paint: function (ctx, value, x, y, w, h, style, options) {
	                var ICONSET_SIZE = 16;
	                var showBarOnly = false, showIconOnly = false;
	                var sheet = options.sheet, row = options.row, col = options.col, iconSet, dataBar, iconSetZoomFactor = math_min(1, sheet.zoom());
	                var iconSetAndDataBar = this._getIconSetAndDataBar(sheet, row, col, value);
	                iconSet = iconSetAndDataBar.iconSet;
	                dataBar = iconSetAndDataBar.dataBar;
	                if (dataBar || iconSet) {
	                    ctx.save();
	                    ctx.beginPath();
	                    if (dataBar) {
	                        DataBarRule.paintDataBar(ctx, dataBar, x, y, w, h);
	                        showBarOnly = dataBar.showBarOnly;
	                    }
	                    if (iconSet) {
	                        ICONSET_SIZE = parseInt(ICONSET_SIZE * iconSetZoomFactor);
	                        if (w < ICONSET_SIZE || h < ICONSET_SIZE) {
	                            ctx.rect(x, y, w, h);
	                            ctx.clip();
	                            ctx.beginPath();
	                        }
	                        IconSetRule.paintIconSet(ctx, iconSet, x, y, w, h, style, options.imageLoader, iconSetZoomFactor);
	                        showIconOnly = iconSet.showIconOnly;
	                    }
	                    ctx.restore();
	                }
	                return (showBarOnly || showIconOnly);
	            },
	            _getIconSetAndDataBar: function (sheet, row, col, value) {
	                var self = this, cachePool = sheet._cachePool, iconSet, dataBar;
	                var caches = cachePool._getConditionalFormat(row, col);
	                if (caches) {
	                    iconSet = caches.i;
	                    dataBar = caches.d;
	                } else {
	                    var rules = self.getRules(row, col), rulesLength = arrayHelper_getLength(rules);
	                    if (rulesLength > 0) {
	                        rules.sort(function (a, b) {
	                            return a.priority() - b.priority();
	                        });
	                        var dataBarRule = keyword_null, iconSetRule = keyword_null, rule, obj, n;
	
	                        for (n = 0; n < rulesLength && !(dataBarRule && iconSetRule); n++) {
	                            rule = rules[n];
	                            if (rule) {
	                                if (isInstanceOf(rule, DataBarRule)) {
	                                    dataBarRule = rule;
	                                }
	                                if (isInstanceOf(rule, IconSetRule)) {
	                                    iconSetRule = rule;
	                                }
	                            }
	                        }
	                       
	                        if (dataBarRule || iconSetRule) {
	                            dataBarRule = iconSetRule = keyword_null;
	                            for (n = 0; n < rulesLength && !(dataBarRule && iconSetRule); n++) {
	                                rule = rules[n];
	                                if (rule) {
	                                    if (!dataBarRule && isInstanceOf(rule, DataBarRule)) {
	                                        dataBarRule = rule;
	                                    }
	                                    if (!iconSetRule && isInstanceOf(rule, IconSetRule)) {
	                                        iconSetRule = rule;
	                                    }
	                                    if (rule.stopIfTrue()) {
	                                        obj = rule.evaluate(sheet, row, col, value);
	                                        if (obj) {
	                                            break;
	                                        }
	                                    }
	                                }
	                            }
	                        }
	                        if (dataBarRule) {
	                            dataBar = dataBarRule.evaluate(sheet, row, col, value);
	                        }
	                        if (iconSetRule) {
	                            iconSet = iconSetRule.evaluate(sheet, row, col, value);
	                        }
	                    }
	                    cachePool._setConditionalFormat(row, col, dataBar, iconSet);
	                }
	                return {dataBar: dataBar, iconSet: iconSet};
	            },
	            _hasIconSet: function (row, col, sheetArea) {
	                if (isNullOrUndefined(sheetArea) || sheetArea === 3 ) {
	                    var rules = this.getRules(row, col);
	                    for (var i = 0, length = arrayHelper_getLength(rules); i < length; i++) {
	                        if (rules[i] instanceof IconSetRule) {
	                            return true;
	                        }
	                    }
	                }
	                return false;
	            },
	            toJSON: function (context) {
	                var rules = [];
	                for (var i = 0; i < arrayHelper_getLength(this._rules); i++) {
	                    var rule = this._rules[i];
	                    rules.push(rule ? rule.toJSON(context) : keyword_null);
	                }
	                if (arrayHelper_getLength(rules) === 0) {
	                    return keyword_undefined;
	                }
	                return {
	                    rules: rules
	                };
	            },
	            fromJSON: function (settings, context, noSchema) {
	                if (!settings) {
	                    return;
	                }
	                if (settings.rules) {
	                    this._rules = [];
	                    for (var i = 0; i < arrayHelper_getLength(settings.rules); i++) {
	                        var ruleSettings = settings.rules[i];
	                        var rule = this._createRuleFromJson(ruleSettings, context, noSchema);
	                        if (rule) {
	                            this._rules.push(rule);
	                        }
	                    }
	                    this._resetCache();
	                }
	            },
	            _createRuleFromJson: function (ruleSettings, context, noSchema) {
	                var rule = keyword_null;
	                if (ruleSettings) {
	                    var dict = this._getRuleTypes();
	                    var ruleClass = dict[ruleSettings.ruleType];
	                    if (ruleClass) {
	                        rule = new ruleClass();
	                        rule.fromJSON(ruleSettings, context, noSchema);
	                    }
	                }
	                return rule;
	            },
	            _getRuleTypes: function () {
	                if (!this._ruleTypes) {
	                    var dict = {};
	                    dict[0 ] = ConditionRuleBase;
	                    dict[1 ] = NormalConditionRule;
	                    dict[2 ] = NormalConditionRule;
	                    dict[3 ] = NormalConditionRule;
	                    dict[4 ] = NormalConditionRule;
	                    dict[5 ] = NormalConditionRule;
	                    dict[6 ] = NormalConditionRule;
	                    dict[7 ] = NormalConditionRule;
	                    dict[8 ] = NormalConditionRule;
	                    dict[9 ] = ScaleRule;
	                    dict[10 ] = ScaleRule;
	                    dict[11 ] = ScaleRule;
	                    dict[12 ] = DataBarRule;
	                    dict[13 ] = IconSetRule;
	                    this._ruleTypes = dict;
	                }
	                return this._ruleTypes;
	            },
	           
	            _applyFormats: function (info, row, column, sheetArea) {
	                var self = this;
	                if (self && self.count() > 0) {
	                    var rules = self.getRules(row, column), rulesLength = arrayHelper_getLength(rules), rule,
	                        expected = keyword_null;
	                    if (rulesLength > 0) {
	                        rules.sort(function (a, b) {
	                            return a.priority() - b.priority();
	                        });
	                        for (var n = 0; n < rulesLength; n++) {
	                            rule = rules[n];
	                            if (!rule) {
	                                continue;
	                            }
	                            var worksheet = self._worksheet;
	                            if (rule.isScaleRule()) {
	                                if (rule.ruleType() === 10  || rule.ruleType() === 11 ) {
	                                    expected = rule.evaluate(worksheet, row, column, worksheet.getValue(row, column, sheetArea));
	                                    if (expected) {
	                                        if (!info) {
	                                            info = new Style();
	                                        }
	                                        if (info.backColor === keyword_undefined) {
	                                            info.backColor = expected;
	                                        }
	                                    }
	                                }
	                            } else {
	                                expected = rule.evaluate(worksheet, row, column, worksheet.getValue(row, column, sheetArea));
	                                if (expected) {
	                                    if (!info) {
	                                        info = new Style();
	                                    }
	                                    info._compose(expected, false, 1 );
	                                }
	                            }
	                            if (rule.stopIfTrue() && expected) {
	                                break;
	                            }
	                        }
	                    }
	                }
	                return info;
	            },
	            _getConditionalStyle: function (row, col, property, sheetArea) {
	                var ret = {_hasResult: false};
	                var self = this;
	                if (self && self.count() > 0) {
	                    var rules = self.getRules(row, col), rulesLength = arrayHelper_getLength(rules), rule,
	                        expected = keyword_null;
	                    if (rulesLength > 0) {
	                        rules.sort(function (a, b) {
	                            return a.priority() - b.priority();
	                        });
	                        for (var n = 0; n < rulesLength; n++) {
	                            rule = rules[n];
	                            if (!rule) {
	                                continue;
	                            }
	                            var worksheet = self._worksheet;
	                            if (rule.isScaleRule()) {
	                                if (property === 'backColor' && isInstanceOf(rule, ConditionalFormatting.ScaleRule)) {
	                                    expected = rule.evaluate(worksheet, row, col, worksheet.getValue(row, col, sheetArea));
	                                    if (expected) {
	                                        ret._result = expected;
	                                        ret._hasResult = true;
	                                        break;
	                                    }
	                                }
	                            } else {
	                                expected = rule.evaluate(worksheet, row, col, worksheet.getValue(row, col, sheetArea));
	                                if (expected && expected[property] !== keyword_undefined) {
	                                    ret._result = expected[property];
	                                    ret._hasResult = true;
	                                    break;
	                                }
	                            }
	                            if (rule.stopIfTrue() && expected) {
	                                break;
	                            }
	                        }
	                    }
	                }
	
	                return ret;
	            }
	        };
	        $.extend(ConditionalFormats.prototype, proto);
	        return ConditionalFormats;
	    })();
	    ConditionalFormatting.ConditionalFormats = ConditionalFormats;
	
	   
	    
	
	    module.exports = ConditionalFormatting;
	
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
/***/ (function(module, exports) {

	module.exports = GC.Spread.CalcEngine;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_RuleIsNull: 'The argument \'rule\' is null',
	        Exp_NotSupported: 'NotSupportException'
	    };
	
	}());

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.conditionalformatting.12.0.0.js.map