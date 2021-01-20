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
var GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["DataValidation"] =
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
	    __webpack_require__(5);
	    module.exports = exports;
	
	}());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(2);
	    var Sheets = __webpack_require__(3);
	    var ConditionalFormatting = __webpack_require__(4);
	    var Condition = ConditionalFormatting.Condition;
	    var createConditional = ConditionalFormatting._createCondition;
	    var StringHelper_TrimStart = Common._StringHelper._trimStart;
	    var isNullOrUndefined = Common._Types._isNullOrUndefined;
	    var $ = Sheets.GC$;
	    var keyword_null = null, keyword_undefined = void 0;
	    var util = Sheets._util, defProperty = util._defProperty, isDefined = util._isDefined;
	    var adjustConditionFormulaWhenFromJSON = util._adjustConditionFormulaWhenFromJSON;
	    var SheetsCalc = Sheets.CalcEngine;
	    var createRange = Sheets._createRange;
	    var Math_min = Math.min, Math_max = Math.max;
	    var dateTimeHelper = Common._DateTimeHelper;
	
	    function convertToDouble(val) {
	        if (isNullOrUndefined(val)) {
	            return 0.0;
	        }
	        if (typeof (val) === 'number') {
	            return val;
	        }
	        if (typeof (val) === 'string') {
	            var ret = parseFloat(val);
	            if (!isNaN(ret) && ret.toString() === val) {
	                return ret;
	            }
	        }
	        return keyword_null;
	    }
	
	    function convertToDateTime(val) {
	        if (val instanceof Date) {
	            return val;
	        }
	        if (typeof val === 'string') {
	            return new Date(val);
	        }
	        return keyword_null;
	    }
	
	    function getConditionFromJson(type, validatorInfo) {
	        if (isNullOrUndefined(type)) {
	            return;
	        }
	        var dataValidation;
	        if (type === 1  || type === 2 ) {
	            dataValidation = DataValidation.createNumberValidator(validatorInfo.operator, validatorInfo.value1, 
	                validatorInfo.value2, type === 1 );
	        } else if (type === 3 ) {
	            if (validatorInfo.value) {
	                dataValidation = DataValidation.createListValidator(validatorInfo.value);
	            } else if (validatorInfo.formula) {
	                dataValidation = DataValidation.createFormulaListValidator(validatorInfo.formula);
	            }
	        } else if (type === 4  || type === 5 ) {
	            var value1 = validatorInfo.value1, value2 = validatorInfo.value2;
	            if (value1 && value1.substr(0, 8) === '/OADate(') {
	                value1 = dateTimeHelper._fromOADateString(value1);
	            }
	            if (value2 && value2.substr(0, 8) === '/OADate(') {
	                value2 = dateTimeHelper._fromOADateString(value2);
	            }
	            dataValidation = DataValidation.createDateValidator(validatorInfo.operator, value1, value2);
	        } else if (type === 6 ) {
	            dataValidation = DataValidation.createTextLengthValidator(validatorInfo.operator, validatorInfo.value1, validatorInfo.value2);
	        } else if (type === 7 ) {
	            dataValidation = DataValidation.createFormulaValidator(validatorInfo.formula);
	        }
	        if (dataValidation) {
	            return dataValidation.condition();
	        }
	    }
	
	
	    var DataValidation = {};
	   
	    
	    DataValidation.CriteriaType = {
	        
	        anyValue: 0,
	        
	        wholeNumber: 0x1,
	        
	        decimalValues: 0x2,
	        
	        list: 0x3,
	        
	        date: 0x4,
	        
	        time: 0x5,
	        
	        textLength: 0x6,
	        
	        custom: 0x7
	    };
	   
	    
	    DataValidation.DataValidationResult = {
	        
	        forceApply: 0,
	        
	        discard: 1,
	        
	        retry: 2
	    };
	   
	    
	    DataValidation.ErrorStyle = {
	        
	        stop: 0,
	        
	        warning: 1,
	        
	        information: 2
	    };
	
	    var DefaultDataValidator = (function () {
	       
	        
	        function DefaultDataValidator(condition) {
	            var self = this;
	            self.id = DefaultDataValidator._validatorId++;
	            if (condition) {
	                self.condition(condition);
	                self.condition().ignoreBlank(self.ignoreBlank());
	            }
	            self._ranges = [];
	        }
	
	        function removeRange(srcRange, row, column, rowCount, columnCount, size) {
	            if (!srcRange.intersect(row, column, rowCount, columnCount)) {
	                return [srcRange];
	            }
	            var srcRowCount = srcRange.rowCount;
	            var srcColCount = srcRange.colCount;
	            var srcRow = Math_max(0, srcRange.row);
	            var srcCol = Math_max(0, srcRange.col);
	            var wholeRow = false, wholeCol = false, removeWholeRow = false;
	            row = Math_max(0, row);
	            column = Math_max(0, column);
	            if (!size) {
	                size = [-1, -1];
	            }
	           
	            var rc = size[0], cc = size[1];
	           
	            if (srcRowCount === -1) {
	                srcRowCount = rc - srcRow;
	                wholeCol = true;
	            }
	            if (srcColCount === -1) {
	                srcColCount = cc - srcCol;
	                wholeRow = true;
	            }
	            if (rowCount === -1) {
	                rowCount = rc - row;
	            }
	            if (columnCount === -1) {
	                columnCount = cc - column;
	                removeWholeRow = true;
	            }
	
	            var sourceRowTop = srcRow;
	            var sourceRowBottom = srcRow + srcRowCount - 1;
	            var sourceColumnLeft = srcCol;
	            var sourceColumnRight = srcCol + srcColCount - 1;
	            var removeRowTop = row;
	            var removeRowBottom = row + rowCount - 1;
	            var removeColumnLeft = column;
	            var removeColumnRight = column + columnCount - 1;
	            var newRanges = [];
	           
	            if (sourceRowTop !== -1 && sourceColumnLeft !== -1 && removeRowTop !== -1 && removeColumnLeft !== -1) {
	               
	                if (removeColumnLeft - sourceColumnLeft > 0) {
	                    var left = createRange(sourceRowTop, sourceColumnLeft, wholeCol ? -1 : srcRowCount, removeColumnLeft - sourceColumnLeft);
	                    newRanges.push(left);
	                }
	
	                if (sourceColumnRight - removeColumnRight > 0) {
	                    var right = createRange(sourceRowTop, removeColumnRight + 1, wholeCol ? -1 : srcRowCount, sourceColumnRight - removeColumnRight);
	                    newRanges.push(right);
	                }
	
	                if (removeRowTop - sourceRowTop > 0) {
	                    var top = createRange(sourceRowTop, Math_max(removeColumnLeft, sourceColumnLeft), removeRowTop - sourceRowTop, wholeRow && removeWholeRow ? -1 : Math_min(removeColumnRight, sourceColumnRight) - Math_max(removeColumnLeft, sourceColumnLeft) + 1);
	                    newRanges.push(top);
	                }
	                if (sourceRowBottom - removeRowBottom > 0) {
	                    var bottom = createRange(removeRowBottom + 1, Math_max(removeColumnLeft, sourceColumnLeft), sourceRowBottom - removeRowBottom, wholeRow && removeWholeRow ? -1 : Math_min(removeColumnRight, sourceColumnRight) - Math_max(removeColumnLeft, sourceColumnLeft) + 1);
	                    newRanges.push(bottom);
	                }
	            }
	
	            return newRanges;
	        }
	
	        var ps = ['errorStyle', 'ignoreBlank', 'inCellDropdown', 'showInputMessage', 'showErrorMessage', 'inputTitle',
	            'errorTitle', 'inputMessage', 'errorMessage', 'comparisonOperator', 'type', 'condition'];
	        DefaultDataValidator.prototype = {
	            constructor: DefaultDataValidator,
	           
	            
	            errorStyle: defProperty('errorStyle', 0 ),
	           
	            
	            ignoreBlank: defProperty('ignoreBlank', true, function (value) {
	                if (this.condition()) {
	                    this.condition().ignoreBlank(value);
	                }
	            }),
	           
	            
	            inCellDropdown: defProperty('inCellDropdown', true),
	           
	            
	            showInputMessage: defProperty('showInputMessage', true),
	           
	            
	            showErrorMessage: defProperty('showErrorMessage', true),
	           
	            
	            inputTitle: defProperty('inputTitle', ''),
	           
	            
	            errorTitle: defProperty('errorTitle', ''),
	           
	            
	            inputMessage: defProperty('inputMessage', ''),
	           
	            
	            errorMessage: defProperty('errorMessage', ''),
	           
	            
	            comparisonOperator: defProperty('comparisonOperator', 6 ),
	           
	            
	            condition: defProperty('condition', keyword_null),
	           
	            
	            type: defProperty('type', 0 ),
	           
	            
	            value1: function (baseRow, baseColumn) {
	               
	                var condition = this.condition();
	                var cond = (condition && condition.item1()) ? condition.item1() : condition;
	                if (cond) {
	                    var formula = cond.formula(baseRow, baseColumn);
	                    if (formula && formula.length > 0) {
	                        return '=' + StringHelper_TrimStart($.trim(formula.toString()), '=');
	                    }
	                    return cond.expected();
	                }
	                return keyword_null;
	            },
	           
	            
	            value2: function (baseRow, baseColumn) {
	                var condition = this.condition();
	                var cond = (condition && condition.item2()) ? condition.item2() : condition;
	                if (cond) {
	                    var formula = cond.formula(baseRow, baseColumn);
	                    if (formula && formula.length > 0) {
	                        return '=' + StringHelper_TrimStart($.trim(formula.toString()), '=');
	                    }
	                    return cond.expected();
	                }
	                return keyword_null;
	            },
	           
	            
	            isValid: function (evaluator, baseRow, baseColumn, actual) {
	                var self = this, condition = self.condition();
	                if (condition) {
	                    if (self.ignoreBlank() && (isNullOrUndefined(actual) || actual === '')) {
	                        return true;
	                    }
	                    var val = actual, v;
	                    if (!isNullOrUndefined(actual)) {
	                        switch (self.type()) {
	                            case 0 
	                            :
	                                return true;
	                            case 2 
	                            :
	                            case 1 
	                            :
	                                v = convertToDouble(actual);
	                                if (!isNullOrUndefined(v)) {
	                                    val = v;
	                                }
	                                break;
	                            case 4 
	                            :
	                            case 5 
	                            :
	                                v = convertToDateTime(actual);
	                                if (!isNullOrUndefined(v)) {
	                                    val = v;
	                                }
	                                break;
	                            case 7 
	                            :
	                            case 3 
	                            :
	                            case 6 
	                            :
	                                break;
	                        }
	                    }
	
	                    if (evaluator) {
	                        evaluator._isDataValidator = true;
	                    }
	                    var result;
	                    try {
	                        result = condition.evaluate(evaluator, baseRow, baseColumn, val, val);
	                    } catch (ex) {
	                        result = true;
	                    } finally {
	                        if (evaluator) {
	                            evaluator._isDataValidator = false;
	                        }
	                    }
	                    return result;
	                }
	                return true;
	            },
	           
	            
	            reset: function () {
	                var self = this;
	                self.errorStyle(0 );
	                self.ignoreBlank(true);
	                self.inCellDropdown(true);
	                self.showInputMessage(true);
	                self.showErrorMessage(true);
	                self.inputTitle('');
	                self.errorTitle('');
	                self.inputMessage('');
	                self.errorMessage('');
	                self.comparisonOperator(6 );
	                self.type(0 );
	                self.condition(keyword_null);
	                self._ranges.length = 0;
	            },
	           
	            
	            getValidList: function (evaluator, baseRow, baseColumn) {
	                if (!ConditionalFormatting) {
	                    return keyword_null;
	                }
	                var condition = this.condition();
	                if (condition !== keyword_null && this.type() === 3  && condition.conType() === 12 ) {
	                    return condition.getValidList(evaluator, baseRow, baseColumn);
	                }
	                return keyword_null;
	            },
	            toJSON: function (context) {
	                var self = this;
	                var jsonData = {};
	                ps.forEach(function (p) {
	                    var t = self[p]();
	                    if (!self[p].isDefault(t)) {
	                        jsonData[p] = (t && t.toJSON) ? t.toJSON(context) : t;
	                    }
	                });
	               
	                var ranges = self._ranges.map(function (range) {
	                   
	                    return (range.row === -1 && range.col === -1) ? createRange(-1, 0, range.rowCount, range.colCount) : range;
	                });
	                jsonData.ranges = SheetsCalc.rangesToFormula(ranges, 0, 0, 15 , false);
	
	                if ($.isEmptyObject(jsonData)) {
	                    return keyword_undefined;
	                }
	
	                return jsonData;
	            },
	            fromJSON: function (settings, noSchema, context) {
	                if (!settings || $.isEmptyObject(settings)) {
	                    return;
	                }
	                var self = this;
	               
	                if (settings.ranges) {
	                   
	                    self._ranges = SheetsCalc.formulaToRanges(context, settings.ranges, 0, 0, true )[0].ranges;
	                }
	                ps.forEach(function (p) {
	                    var t = settings[p];
	                    if (!isDefined(t)) {
	                        return;
	                    }
	                    if (p === 'condition') {
	                        var tempCondition = createConditional();
	                        tempCondition.fromJSON(settings.condition, context, noSchema);
	                        self.condition(tempCondition, false);
	                        var ranges = tempCondition.ranges();
	                        if (ranges && ranges.length) {
	                            self._ranges = ranges;
	                        } else {
	                            tempCondition.ranges(self._ranges);
	                        }
	                        tempCondition.context(context);
	                    } else {
	                        self[p](t, false);
	                    }
	                });
	
	               
	                var validatorInfo = settings.validatorInfo;
	                if (validatorInfo) {
	                    var isR1C1 = context._calcService.useR1C1;
	                    var condition = getConditionFromJson(settings.type, validatorInfo),
	                        operator = validatorInfo.operator;
	                    if (condition) {
	                        condition.ranges(self._ranges);
	                       
	                        condition.ignoreBlank(self.ignoreBlank());
	                        condition.context(context);
	                       
	                       
	                        if (isR1C1) {
	                            adjustConditionFormulaWhenFromJSON(condition);
	                        }
	                       
	                        self.condition(condition);
	                    }
	                    if (!isNullOrUndefined(operator)) {
	                        self.comparisonOperator(operator);
	                    }
	                }
	            },
	            clone: function (context) {
	               
	                if (this._fromCopyMove) {
	                    var condition = this.condition();
	                    if (condition) {
	                        condition.initExpression();
	                    }
	                    return this;
	                }
	
	                var validator = new DefaultDataValidator();
	                validator.fromJSON(this.toJSON(context), false, context || this._sheet);
	                delete validator.ranges;
	
	                return validator;
	            },
	            context: function (context) {
	                if (context) {
	                    this._context = context;
	                    var condition = this.condition();
	                    if (condition) {
	                        condition.ranges(this._ranges);
	                        condition.context(context);
	                    }
	                }
	                return this._context;
	            },
	            _addRange: function (range) {
	                if (range) {
	                    var ranges = this._ranges;
	                    for (var i = 0; i < ranges.length; i++) {
	                        if (ranges[i].containsRange(range)) {
	                            return;
	                        }
	                    }
	                    ranges.push(range);
	                }
	            },
	            _removeRange: function (range) {
	                var self = this, ranges = self._ranges;
	                if (range && ranges.length) {
	                    var row = range.row, col = range.col, rowCount = range.rowCount, colCount = range.colCount;
	                    var tmp = [];
	                    var sheet = self._sheet, size = sheet && [sheet.getRowCount(), sheet.getColumnCount()];
	                    ranges.forEach(function (rangeItem) {
	                        tmp.push(removeRange(rangeItem, row, col, rowCount, colCount, size));
	                    });
	                    self._ranges = [].concat.apply([], tmp);
	                }
	            },
	            _getRanges: function () {
	                return this._ranges;
	            },
	            _onRowsAdded: function (index, count) {
	                if (index < 0 || count <= 0) {
	                    return;
	                }
	                if (this.condition()) {
	                    this.condition().initExpression();
	                }
	                this._ranges.forEach(function (range) {
	                    var row = range.row;
	                    if (index <= row) {
	                        range.row += count;
	                    } else if (row < index && index < row + range.rowCount) {
	                        range.rowCount += count;
	                    }
	                });
	                if (this.condition()) {
	                    this.condition().ranges(this._ranges);
	                }
	            },
	            _onRowsRemoved: function (index, count) {
	                if (index < 0 || count <= 0) {
	                    return;
	                }
	                if (this.condition()) {
	                    this.condition().initExpression();
	                }
	                var ranges = [];
	                this._ranges.forEach(function (range) {
	                    var row = range.row, rowCount = range.rowCount;
	                    if (index < row) {
	                        var diff = index + count - row;
	                        if (diff <= 0) {
	                            row -= count;
	                        } else {
	                            row -= diff;
	                            range.rowCount -= diff;
	                        }
	                        if (row < 0) { 
	                            range.rowCount += row;
	                            row = 0;
	                        }
	                        range.row = row;
	                    } else if (row <= index && index < row + rowCount) {
	                        range.rowCount -= Math_min(count, row + rowCount - index);
	                    }
	                   
	                    if (range.rowCount !== 0) {
	                        ranges.push(range);
	                    }
	                });
	                this._ranges = ranges;
	                if (this.condition()) {
	                    this.condition().ranges(this._ranges);
	                }
	            },
	            _onColumnsAdded: function (index, count) {
	                if (index < 0 || count <= 0) {
	                    return;
	                }
	                if (this.condition()) {
	                    this.condition().initExpression();
	                }
	                this._ranges.forEach(function (range) {
	                    var col = range.col;
	                    if (index <= col) {
	                        range.col += count;
	                    } else if (col < index && index < col + range.colCount) {
	                        range.colCount += count;
	                    }
	                });
	                if (this.condition()) {
	                    this.condition().ranges(this._ranges);
	                }
	            },
	            _onColumnsRemoved: function (index, count) {
	                if (index < 0 || count <= 0) {
	                    return;
	                }
	                if (this.condition()) {
	                    this.condition().initExpression();
	                }
	                var ranges = [];
	                this._ranges.forEach(function (range) {
	                    var col = range.col, colCount = range.colCount;
	                    if (index < col) {
	                        var diff = index + count - col;
	                        if (diff <= 0) {
	                            col -= count;
	                        } else {
	                            col -= diff;
	                            range.colCount -= diff;
	                        }
	
	                        if (col < 0) { 
	                            range.colCount += col;
	                            col = 0;
	                        }
	                        range.col = col;
	                    } else if (col <= index && index < col + colCount) {
	                        range.colCount -= Math_min(count, col + colCount - index);
	                    }
	                   
	                    if (range.colCount !== 0) {
	                        ranges.push(range);
	                    }
	                });
	                this._ranges = ranges;
	                if (this.condition()) {
	                    this.condition().ranges(this._ranges);
	                }
	            },
	            _toString: function () {
	                var self = this, str = self._json;
	
	                if (!str) {
	                    var obj = self.toJSON();
	                   
	                    delete obj.ranges;
	                    obj.condition && delete obj.condition.ranges;
	                    str = self._json = JSON.stringify(obj);
	                }
	
	                return str;
	            },
	            _isSame: function (validator2) {
	                return validator2 && validator2._toString && validator2._toString() === this._toString();
	            }
	        };
	
	
	        DefaultDataValidator._validatorId = 1;
	        return DefaultDataValidator;
	    })();
	    DataValidation.DefaultDataValidator = DefaultDataValidator;
	
	    DataValidation._getImageSrc = function () {
	        return 'data:image/png;base64,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';
	    };
	    DataValidation._isFormula = function (val) {
	        return Sheets._supportsCalc && val && (val[0] === '=');
	    };
	   
	    
	    DataValidation.createNumberValidator = function (typeOperator, v1, v2, isIntegerValue) {
	        var formula1 = keyword_null, expect1 = keyword_null, formula2 = keyword_null, expect2 = keyword_null;
	        if (DataValidation._isFormula(v1)) {
	            formula1 = StringHelper_TrimStart(v1, '=');
	        } else {
	            expect1 = v1;
	        }
	        if (DataValidation._isFormula(v2)) {
	            formula2 = StringHelper_TrimStart(v2, '=');
	        } else {
	            expect2 = v2;
	        }
	        var conditionTemp = keyword_null, c1, c2;
	        if (typeOperator === 6 ) {
	            c1 = createConditional(1 , 3 , expect1, formula1);
	            c1.integerValue(isIntegerValue);
	            c2 = createConditional(1 , 5 , expect2, formula2);
	            c2.integerValue(isIntegerValue);
	            conditionTemp = createConditional(0 , 1 , keyword_null, keyword_null, keyword_null, keyword_null, keyword_null, c1, c2);
	        }
	        if (typeOperator === 7 ) {
	            c1 = createConditional(1 , 4 , expect1, formula1);
	            c1.integerValue(isIntegerValue);
	            c2 = createConditional(1 , 2 , expect2, formula2);
	            c2.integerValue(isIntegerValue);
	            conditionTemp = createConditional(0 , 0 , keyword_null, keyword_null, keyword_null, keyword_null, keyword_null, c1, c2);
	        }
	        if (typeOperator >= 0 && typeOperator <= 5) {
	            conditionTemp = createConditional(1 , typeOperator, expect1, formula1);
	            conditionTemp.integerValue(isIntegerValue);
	        }
	        var t = new DefaultDataValidator(conditionTemp);
	        t.type(isIntegerValue ? 1  : 2 );
	        t.comparisonOperator(typeOperator);
	        return t;
	    };
	   
	    
	    DataValidation.createDateValidator = function (typeOperator, v1, v2) {
	        var formula1 = keyword_null, expect1 = keyword_null, formula2 = keyword_null, expect2 = keyword_null;
	        if (DataValidation._isFormula(v1)) {
	            formula1 = StringHelper_TrimStart(v1, '=');
	        } else {
	            expect1 = v1;
	        }
	        if (DataValidation._isFormula(v2)) {
	            formula2 = StringHelper_TrimStart(v2, '=');
	        } else {
	            expect2 = v2;
	        }
	        var conditionTemp = keyword_null, c1, c2;
	        if (typeOperator === 6 ) {
	            c1 = createConditional(5 , 5 , expect1, formula1);
	            c2 = createConditional(5 , 3 , expect2, formula2);
	            conditionTemp = createConditional(0 , 1 , keyword_null, keyword_null, keyword_null, keyword_null, keyword_null, c1, c2);
	        }
	        if (typeOperator === 7 ) {
	            c1 = createConditional(5 , 2 , expect1, formula1);
	            c2 = createConditional(5 , 4 , expect2, formula2);
	            conditionTemp = createConditional(0 , 0 , keyword_null, keyword_null, keyword_null, keyword_null, keyword_null, c1, c2);
	        }
	        var dateType;
	        if (typeOperator >= 0 && typeOperator <= 5) {
	            switch (typeOperator) {
	                case 0 
	                :
	                    dateType = 0 ;
	                    break;
	                case 1 
	                :
	                    dateType = 1 ;
	                    break;
	                case 2 
	                :
	                    dateType = 4 ;
	                    break;
	                case 3 
	                :
	                    dateType = 5 ;
	                    break;
	                case 4 
	                :
	                    dateType = 2 ;
	                    break;
	                case 5 
	                :
	                    dateType = 3 ;
	                    break;
	            }
	            conditionTemp = createConditional(5 , dateType, expect1, formula1);
	        }
	
	        var t = new DefaultDataValidator(conditionTemp);
	        t.type(4 );
	        t.comparisonOperator(typeOperator);
	        return t;
	    };
	   
	    
	    DataValidation.createTextLengthValidator = function (typeOperator, v1, v2) {
	        var formula1 = keyword_null, expect1 = keyword_null, formula2 = keyword_null, expect2 = keyword_null;
	        if (DataValidation._isFormula(v1)) {
	            formula1 = StringHelper_TrimStart(v1, '=');
	        } else {
	            expect1 = v1;
	        }
	        if (DataValidation._isFormula(v2)) {
	            formula2 = StringHelper_TrimStart(v2, '=');
	        } else {
	            expect2 = v2;
	        }
	        var conditionTemp = keyword_null, c1, c2;
	        if (typeOperator === 6 ) {
	            c1 = createConditional(7 , 3 , expect1, formula1);
	            c2 = createConditional(7 , 5 , expect2, formula2);
	            conditionTemp = createConditional(0 , 1 , keyword_null, keyword_null, keyword_null, keyword_null, keyword_null, c1, c2);
	        }
	        if (typeOperator === 7 ) {
	            c1 = createConditional(7 , 4 , expect1, formula1);
	            c2 = createConditional(7 , 2 , expect2, formula2);
	            conditionTemp = createConditional(0 , 0 , keyword_null, keyword_null, keyword_null, keyword_null, keyword_null, c1, c2);
	        }
	        if (typeOperator >= 0 && typeOperator <= 5) {
	            conditionTemp = createConditional(7 , typeOperator, expect1, formula1);
	        }
	        var t = new DefaultDataValidator(conditionTemp);
	        t.type(6 );
	        t.comparisonOperator(typeOperator);
	        return t;
	    };
	   
	    
	    DataValidation.createFormulaValidator = function (formula) {
	        if (!Sheets._supportsCalc) {
	            return keyword_null;
	        }
	        var t = new DefaultDataValidator(createConditional(4 , keyword_null, keyword_null, StringHelper_TrimStart(formula, '='), 4 ));
	        t.type(7 );
	        return t;
	    };
	   
	    
	    DataValidation.createFormulaListValidator = function (formula) {
	        if (!Sheets._supportsCalc) {
	            return keyword_null;
	        }
	        var t = new DefaultDataValidator(Condition.fromFormula(formula));
	        t.type(3 );
	        return t;
	    };
	   
	    
	    DataValidation.createListValidator = function (source) {
	        var t = new DefaultDataValidator(Condition.fromSource(source));
	        t.type(3 );
	        return t;
	    };
	
	    $.extend(Sheets.Worksheet.prototype, {
	       
	        
	        getDataValidator: function (row, col, sheetArea) {
	            if (isNullOrUndefined(sheetArea)) {
	                sheetArea = 3 ;
	            }
	            if (sheetArea === 3  ) {
	                return this._validations._getValidators(row, col)[0];
	            }
	            return keyword_undefined;
	        },
	       
	        
	       
	        
	        setDataValidator: function (row, col, rowCount, colCount, value, sheetArea) {
	            var self = this, validations = self._validations;
	            if (arguments.length < 5) {
	               
	                value = rowCount;
	                sheetArea = colCount;
	               
	                rowCount = row === -1 ? -1 : 1;
	                colCount = col === -1 ? -1 : 1;
	            }
	            if (isNullOrUndefined(sheetArea)) {
	                sheetArea = 3 ;
	            }
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            if (sheetArea === 3) {
	                var oldValue = self.getDataValidator(row, col, sheetArea);
	                var isSingle = (rowCount === 1) && (colCount === 1);
	
	                if (isSingle && (oldValue === value)) {
	                    return;
	                }
	                self._modelManager._backupValidations();
	                var range = createRange(row, col, rowCount, colCount);
	                validations._removeValidator(range);
	                if (value) {
	                    validations._addValidator(value, range);
	                }
	
	                var pn = 'validator';
	                if (isSingle) {
	                    self._raiseCellChanged(pn, row, col, sheetArea, oldValue, value);
	
	                    if (row !== -1 && col === -1) {
	                        self._raiseRowChanged(row, sheetArea, pn, value, oldValue);
	                    } else if (row === -1 && col !== -1) {
	                        self._raiseColumnChanged(col, sheetArea, pn, value, oldValue);
	                    }
	                }
	            }
	        },
	       
	        
	        isValid: function (row, column, value) {
	            var self = this;
	            try {
	                self._validatingRow = row;
	                self._validatingColumn = column;
	                self._validatingValue = value;
	                self._isValidatingCell = true;
	                var dv = self.getDataValidator(row, column);
	                if (dv) {
	                    return dv.isValid(self, row, column, value);
	                }
	            } finally {
	                self._validatingRow = -1;
	                self._validatingColumn = -1;
	                self._validatingValue = keyword_null;
	                self._isValidatingCell = false;
	            }
	            return true;
	        },
	        _disposeValidationUI: function () {
	           
	            var self = this;
	           
	           
	            if (self._isDisposingValidationUI) {
	                return false;
	            }
	            self._isDisposingValidationUI = true;
	            var validationInputMessage = self._validationInputMessage, parent;
	            if (validationInputMessage) {
	                parent = validationInputMessage.parentNode;
	                if (parent) {
	                    parent.removeChild(validationInputMessage);
	                }
	                self._validationInputMessage = keyword_null;
	            }
	            var validationButton = self._validationButton;
	            if (validationButton) {
	                $(validationButton).unbind('click');
	                parent = validationButton.parentNode;
	                if (parent) {
	                    parent.removeChild(validationButton);
	                }
	                self._validationButton = keyword_null;
	            }
	            var validationSelect = self._validationSelect;
	            if (validationSelect) {
	                $(validationSelect).unbind('keydown').unbind('blur').unbind('click');
	                parent = validationSelect.parentNode;
	                if (parent) {
	                    parent.removeChild(validationSelect);
	                }
	                self._validationSelect = keyword_null;
	            }
	            self._isDisposingValidationUI = false;
	            return true;
	        },
	        _getValidatorsWithFormula: function () {
	            var self = this, result = [];
	            var validations = self._validations, validators = validations && validations._validators;
	
	            if (validators && validators.length) {
	                validators.forEach(function (validator) {
	                    var condition = validator && validator.condition();
	                    if (condition && condition.getExpressions && condition.getExpressions().length > 0) {
	                        result.push({validator: validator, sheet: self});
	                    }
	                });
	            }
	
	            return result;
	        }
	    });
	
	    $.extend(Sheets.Workbook.prototype, {
	        _getValidatorsWithFormula: function () {
	            var result = [];
	            var self = this, sheets = self.sheets;
	
	            sheets.forEach(function (sheet) {
	                var validators = sheet._getValidatorsWithFormula();
	
	                if (validators && validators.length) {
	                    validators.forEach(function (item) {
	                        result.push(item);
	                    });
	                }
	            });
	
	            return result;
	        }
	    });
	
	    $.extend(Sheets.CellRange.prototype, {
	       
	        
	        validator: function (value) {
	            var self = this, sheet = self.sheet, sheetArea = self.sheetArea;
	
	            var row = self.row, col = self.col,
	                rowCount = self.rowCount, colCount = self.colCount;
	
	            if (arguments.length === 0) {
	                return sheet.getDataValidator(row, col, sheetArea);
	            }
	
	            sheet.setDataValidator(row, col, rowCount, colCount, value, sheetArea);
	
	            return self;
	        }
	    });
	
	    function _getSheetActualRange(range) {
	        return this._getActualRange(range);
	    }
	
	    function _cloneToActualRanges(sheet, ranges) {
	       
	        if (sheet && ranges && ranges.length) {
	            return ranges.map(_getSheetActualRange.bind(sheet));
	        }
	    }
	
	    function _getAdjustedRange(actualRange, rowCount, columnCount) {
	        var rc = actualRange.rowCount, cc = actualRange.colCount;
	        var range = createRange(actualRange.row, actualRange.col, rc, cc);
	        if (actualRange.row === 0 && rc === rowCount) {
	            range.row = -1;
	        }
	        if (actualRange.col === 0 && cc === columnCount) {
	            range.col = -1;
	        }
	
	        return range;
	    }
	
	    function _cloneToRanges(sheet, actualRanges) {
	        var
	            rowCount = sheet.getRowCount(),
	            columnCount = sheet.getColumnCount();
	
	        return actualRanges.map(function (actualRange) {
	            return _getAdjustedRange(actualRange, rowCount, columnCount);
	        });
	    }
	
	    function _updateCache(range, sheetRowCount, sheetColCount, cache, validator) {
	        var rangeRow = range.row, rangeCol = range.col, rangeRowCount = range.rowCount, rangeColCount = range.colCount;
	        if (rangeRow + rangeRowCount - 1 >= sheetRowCount) {
	            rangeRowCount = sheetRowCount - rangeRow;
	        }
	        if (rangeCol + rangeColCount - 1 >= sheetColCount) {
	            rangeColCount = sheetColCount - rangeCol;
	        }
	        for (var r = 0, row = rangeRow; r < rangeRowCount; r++, row++) {
	            var rowCache = cache[row];
	            if (!rowCache) {
	                cache[row] = rowCache = {};
	            }
	            for (var c = 0, col = rangeCol; c < rangeColCount; c++, col++) {
	                var oldValidator = rowCache[col];
	                oldValidator && (oldValidator !== validator) && oldValidator._removeRange(range);
	                rowCache[col] = validator;
	            }
	        }
	    }
	
	    function _removeFromCache(range, cache) {
	        var rowCache;
	        for (var r = 0, row = range.row, rowCount = range.rowCount; r < rowCount; r++, row++) {
	            rowCache = cache[row];
	            if (!rowCache) {
	                continue;
	            }
	            for (var c = 0, col = range.col, colCount = range.colCount; c < colCount; c++, col++) {
	                var oldValidator = rowCache[col];
	                oldValidator && oldValidator._removeRange(range);
	                rowCache[col] = keyword_undefined;
	            }
	        }
	    }
	
	    function DataValidationManager(worksheet) {
	        this._worksheet = worksheet;
	        this._validators = [];
	        this._cellDataValidationCache = {};
	    }
	
	    DataValidationManager.prototype = {
	        _cloneToActualRanges: function (ranges) {
	            return _cloneToActualRanges(this._worksheet, ranges);
	        },
	        _cloneToRanges: function (actualRanges) {
	            return _cloneToRanges(this._worksheet, actualRanges);
	        },
	       
	        _resetCache: function (isFromJson) {
	            var self = this, validators = self._validators;
	            self._cellDataValidationCache = {};
	            validators && validators.forEach(function (validator) {
	                isFromJson && delete validator._json;
	                self._addCache(validator, true);
	            });
	            self._adjustValidators();
	        },
	        _addCache: function (validator, notAdjust) {
	            var self = this, cache = self._cellDataValidationCache,
	                ranges = self._cloneToActualRanges(validator._getRanges()),
	                sheet = self._worksheet, sheetRowCount = sheet.getRowCount(), sheetColCount = sheet.getColumnCount();
	            if (ranges) {
	                ranges.forEach(function (range) {
	                    _updateCache(range, sheetRowCount, sheetColCount, cache, validator);
	                });
	                if (!notAdjust) {
	                    self._adjustValidators();
	                }
	            }
	        },
	        _removeCache: function (validator) {
	            var self = this, cache = self._cellDataValidationCache,
	                ranges = self._cloneToActualRanges(validator._getRanges());
	            ranges.forEach(function (range) {
	                _removeFromCache(range, cache);
	            });
	            self._adjustValidators();
	        },
	        _removeCacheByRange: function (range) {
	            var self = this;
	            range && _removeFromCache(self._worksheet._getActualRange(range), self._cellDataValidationCache);
	            self._adjustValidators();
	        },
	        _adjustValidators: function () {
	            var validators = this._validators, result = [];
	
	            validators.forEach(function (validator) {
	                if (validator._getRanges().length) {
	                    result.push(validator);
	                    if (validator.condition()) {
	                        validator.condition().ranges(validator._getRanges());
	                    }
	                }
	            });
	            this._validators = result;
	        },
	        _addValidator: function (validator, range) {
	            var self = this, sheet = self._worksheet;
	
	            if (range) {
	                if (validator._sheet && sheet !== validator._sheet) {
	                    validator = validator.clone(sheet);
	                }
	                validator._sheet = sheet;
	                validator._addRange(range);
	            }
	
	            if (sheet) {
	                validator.context(sheet);
	                var validators = self._validators;
	                if (validators.indexOf(validator) === -1) {
	                    validators.push(validator);
	                }
	                self._addCache(validator);
	                sheet._invalidate();
	
	                return validator;
	            }
	        },
	        _removeValidator: function (range) {
	            if (range) {
	                var self = this, sheet = self._worksheet;
	
	                self._removeCacheByRange(range);
	                sheet._invalidate();
	            }
	        },
	        _clear: function () {
	            var self = this, sheet = self._worksheet;
	            if (sheet) {
	                self._validators.length = 0;
	                self._resetCache();
	            }
	        },
	        _getValidators: function (row, column) {
	            var self = this, validators = self._validators;
	            if (arguments.length === 0) {
	                return validators || [];
	            }
	
	            var result = [], cache = self._cellDataValidationCache, rowCache;
	
	            if (row === keyword_undefined) {
	                row = -1;
	            }
	            if (column === keyword_undefined) {
	                column = -1;
	            }
	
	            if (row === -1 && column === -1) {
	                return validators || [];
	            }
	
	            if (row !== -1 && column !== -1) {
	                rowCache = cache[row];
	                if (rowCache && rowCache[column]) {
	                    result.push(rowCache[column]);
	                }
	            } else if (row === -1) {
	                $.each(cache, function (p, rowCacheItem) {
	                    var cellCache = rowCacheItem[column];
	                    if (cellCache && result.indexOf(cellCache) === -1) {
	                        result.push(cellCache);
	                    }
	                });
	            } else {
	                rowCache = cache[row];
	                if (rowCache) {
	                    $.each(rowCache, function (p, cellCache) {
	                        if (cellCache && result.indexOf(cellCache) === -1) {
	                            result.push(cellCache);
	                        }
	                    });
	                }
	            }
	
	            return result;
	        },
	        _addData: function (index, count, isRow) {
	            var self = this, validators = self._validators;
	            if (validators) {
	                validators.forEach(function (validator) {
	                    if (isRow) {
	                        validator._onRowsAdded(index, count);
	                    } else {
	                        validator._onColumnsAdded(index, count);
	                    }
	                });
	            }
	            self._resetCache();
	        },
	        _onRowsAdded: function (row, rowCount) {
	            this._addData(row, rowCount, true);
	        },
	        _onColumnsAdded: function (col, colCount) {
	            this._addData(col, colCount, false);
	        },
	        _removeData: function (index, count, isRow) {
	            var self = this, validators = self._validators;
	            if (validators) {
	                validators.forEach(function (validator) {
	                    if (isRow) {
	                        validator._onRowsRemoved(index, count);
	                    } else {
	                        validator._onColumnsRemoved(index, count);
	                    }
	                });
	            }
	            self._resetCache();
	        },
	        _onRowsRemoved: function (row, rowCount) {
	            this._removeData(row, rowCount, true);
	        },
	        _onColumnsRemoved: function (col, colCount) {
	            this._removeData(col, colCount, false);
	        },
	        toJSON: function (context) {
	            return this._validators.map(function (validator) {
	                return validator && validator.toJSON(context) || keyword_null;
	            });
	        },
	        fromJSON: function (settings, noSchema, context) {
	            var self = this, sheet = self._worksheet;
	            self._validators.length = 0;
	            if (settings && settings.length) {
	                settings.forEach(function (json) {
	                    var validator = new DefaultDataValidator();
	                    validator.fromJSON(json, noSchema, context);
	                    validator._sheet = sheet;
	                    self._validators.push(validator);
	                });
	                self._resetCache();
	            }
	        },
	       
	        _importValidator: function (row, col, validator) {
	            var self = this, sheet = self._worksheet, validators = self._validators, count = validators.length;
	            var present = false;
	            for (var i = 0; i < count; i++) {
	                var current = validators[i];
	               
	                if (current._isSame(validator)) {
	                    validator = current;
	                    present = true;
	                    break;
	                }
	            }
	
	            if (!present) {
	                sheet.setDataValidator(row, col, validator);
	                return;
	            }
	
	            validator._addRange(createRange(row, col, 1, 1));
	        }
	    };
	
	    var _SheetModelManager = Sheets._SheetModelManager;
	    $.extend(_SheetModelManager.prototype, {
	        _backupValidations: function () {
	            var self = this;
	            var changes = self._changes;
	            if (changes && !changes._originalValidators) {
	                changes._originalValidators = self._validations._validators.map(function (item) {
	                    var ranges = item._ranges.map(function (range) {
	                        return createRange(range.row, range.col, range.rowCount, range.colCount);
	                    });
	                    return {
	                        validator: item,
	                        ranges: ranges
	                    };
	                });
	            }
	        },
	        _restoreValidations: function (originalValidators) {
	            if (originalValidators) {
	                var validations = this._validations;
	                validations._validators = originalValidators.map(function (item) {
	                    var validator = item.validator;
	                    validator._ranges = item.ranges;
	                    return validator;
	                });
	
	                validations._resetCache(false);
	            }
	        },
	        _onRowsAdded_Validator: function (row, rowCount) {
	            this._backupValidations();
	            this._validations._onRowsAdded(row, rowCount);
	        },
	        _onRowsRemoved_Validator: function (row, rowCount) {
	            this._backupValidations();
	            this._validations._onRowsRemoved(row, rowCount);
	        },
	        _onColumnsAdded_Validator: function (col, colCount) {
	            this._backupValidations();
	            this._validations._onColumnsAdded(col, colCount);
	        },
	        _onColumnsRemoved_Validator: function (col, colCount) {
	            this._backupValidations();
	            this._validations._onColumnsRemoved(col, colCount);
	        },
	        _onClear_Validator: function (range) {
	            this._backupValidations();
	            this._validations._removeCacheByRange(range);
	        },
	        _onSetRowColumnCount_Validator: function () {
	            this._backupValidations();
	            this._validations._resetCache();
	        }
	    });
	    _SheetModelManager._registerFeature('validator', {
	        init: function () {
	            this._validations = new DataValidationManager(this._sheet);
	        },
	        undo: function (changes) {
	            var originalValidations = changes._originalValidators;
	            if (originalValidations) {
	                this._restoreValidations(originalValidations);
	            }
	        }
	    });
	
	    Sheets.Worksheet._registerFeature('validator', {
	        init: function () {
	            this._validations = this._modelManager._validations;
	        },
	        dispose: function (clearCache) {
	            var self = this;
	            self._disposeValidationUI();
	            clearCache && self._validations._clear();
	        },
	        onLayoutChanged: function (e) {
	            var changeType = e.changeType;
	            var row = e.row;
	            var rowCount = e.rowCount;
	            var col = e.col;
	            var colCount = e.colCount;
	            var sheetArea = e.sheetArea;
	            var modelManager = this._modelManager;
	            if (changeType === 'addRows') {
	                modelManager._onRowsAdded_Validator(row, rowCount);
	            } else if (changeType === 'deleteRows') {
	                modelManager._onRowsRemoved_Validator(row, rowCount);
	            } else if (changeType === 'addColumns') {
	                modelManager._onColumnsAdded_Validator(col, colCount);
	            } else if (changeType === 'deleteColumns') {
	                modelManager._onColumnsRemoved_Validator(col, colCount);
	            } else if (changeType === 'clear') {
	                if (sheetArea === 3  && (e.type & 2 ) === 2) {
	                    modelManager._onClear_Validator(createRange(row, col, rowCount, colCount));
	                }
	            } else if (changeType === 'setColumnCount' || changeType === 'setRowCount') { 
	                if (sheetArea === 3  || sheetArea === 1 ) {
	                    modelManager._onSetRowColumnCount_Validator();
	                }
	            }
	        },
	
	        toJson: function (data, serializationOption) {
	            var validations = this._validations;
	            var ignoreStyle = serializationOption && serializationOption.ignoreStyle;
	            if (validations && validations._validators.length && !ignoreStyle) {
	                data.validations = validations.toJSON(this);
	            }
	        },
	
	        fromJson: function (data, noSchema, deserializationOptions) {
	            var ignoreStyle = deserializationOptions && deserializationOptions.ignoreStyle;
	            if (data && data.validations && !ignoreStyle) {
	                var obj = data.validations;
	                this._validations.fromJSON(obj, noSchema, this);
	            }
	        }
	    });
	
	   
	    Sheets.Style._registerFeature('validator', {
	        fromJson: function (arg) {
	            if (arg.p === 'validator') {
	                var validator = new DefaultDataValidator();
	                validator.fromJSON(arg.v);
	                this.validator = validator;
	                arg.r = true;
	            }
	        }
	    });
	
	   
	    window._gcGlobal._clickOutsideSheetCallBack.push(function (activeElement, hitElement) {
	        if (!hitElement && activeElement._disposeValidationUI) {
	            activeElement._disposeValidationUI();
	        }
	    });
	
	    module.exports = DataValidation;
	
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

	module.exports = GC.Spread.Sheets.ConditionalFormatting;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var Sheets = __webpack_require__(3);
	    var CalcEngine = __webpack_require__(6);
	    var Common = __webpack_require__(2);
	    var DataValidation = __webpack_require__(1);
	    var util_common_util = Sheets._util;
	    var createRange = Sheets._createRange;
	    var util_device = util_common_util._device();
	    var browser = util_common_util._browser;
	    var $ = Sheets.GC$;
	    var createElement = util_common_util._createElement;
	    var adjustFontWithFallback = util_common_util._adjustFontWithFallback;
	    var isNullOrUndefined = Common._Types._isNullOrUndefined;
	    var StringHelper = Common._StringHelper;
	    var cancelDefault = util_common_util._cancelDefault;
	    var DOCUMENT = document;
	    var Math_max = Math.max, Math_min = Math.min, cssPosition = 'position', cssAbsolute = 'absolute',
	        cssBorder = 'border', cssPadding = 'padding', cssBoxShadow = 'box-shadow',
	        cssFont = 'font', cssBackgroundColor = 'background-color', cssTop = 'top', cssLeft = 'left',
	        cssZIndex = 'z-index', cssOutline = 'outline',
	        cssAuto = 'auto', cssWhite = 'white', cssNone = 'none',
	        attrSize = 'size', attrGcUIElement = 'gcUIElement';
	
	    $.extend(Sheets._SheetEventHandler.prototype, {
	        _updateValidationUI: function (row, col) {
	
	           
	            function getValidatorProperty(obj, property) {
	                if (obj && obj[property]) {
	                    if (typeof obj[property] === 'function') {
	                        return obj[property]();
	                    }
	                    return obj[property];
	                }
	            }
	
	            var self = this;
	            var sheet = self._sheet, sheetParent = (sheet && sheet.parent);
	            if (!sheetParent || !DataValidation) {
	                return;
	            }
	           
	           
	            var disposed = sheet._disposeValidationUI();
	            if (!disposed) {
	                return;
	            }
	            var activeSheet = sheetParent.getActiveSheet();
	            if (!activeSheet || sheet.name() !== activeSheet.name()) {
	                return;
	            }
	            var dv = sheet.getDataValidator(row, col);
	            if (!dv) {
	                return;
	            }
	            var rect = sheet.getCellRect(row, col);
	            if (self._isInvalidRect(rect)) {
	                return;
	            }
	            var containerDiv = sheetParent._getContainerDiv();
	            var zIndex = util_common_util._getPreferredZIndex(sheetParent.getHost());
	            if (getValidatorProperty(dv, 'showInputMessage') && getValidatorProperty(dv, 'inputMessage')) {
	                var StringHelper_replace = StringHelper._replace, StringHelper_escapeHtml = StringHelper._escapeHtml;
	                var title = StringHelper_replace(StringHelper_escapeHtml(getValidatorProperty(dv, 'inputTitle')), '\n', '<br/>'),
	                    message = StringHelper_replace(StringHelper_escapeHtml(getValidatorProperty(dv, 'inputMessage')), '\n', '<br/>');
	                var span = createElement('span');
	                $(span).css(cssPosition, cssAbsolute)
	                    .css(cssBorder, '1px #C0C0C0 solid')
	                    .css(cssPadding, '3px 8px 3px 8px')
	                    .css(cssBackgroundColor, '#FFFFFF')
	                    .css(cssBoxShadow, '1px 2px 5px rgba(0,0,0,0.4)')
	                    .css(cssFont, 'normal normal normal 12px/normal Arial')
	                    .width(cssAuto)
	                    .height(cssAuto)
	                    .css(cssTop, rect.y + rect.height + 5)
	                    .css(cssLeft, rect.x + rect.width / 2)
	                    .css(cssZIndex, zIndex).html('<b>' + title + '</b><br/>' + message)
	                    .attr(attrGcUIElement, 'gcValidationInputMessage')
	                    .appendTo(containerDiv);
	                sheet._validationInputMessage = span;
	            }
	            if (dv && getValidatorProperty(dv, 'type') === 3  && getValidatorProperty(dv, 'inCellDropdown')) {
	                var validList = getValidatorProperty(dv, 'condition').getValidListImp(sheet, row, col);
	                var length = validList.length;
	                var select = createElement('select');
	                var cellText = sheet.getText(row, col);
	                var selectedIndex = -1;
	                var fragment = DOCUMENT.createDocumentFragment();
	                for (var i = 0; i < length; i++) {
	                    var v = validList[i].text;
	                    if (isNullOrUndefined(v) || (Sheets._supportsCalc && v instanceof CalcEngine.CalcError)) {
	                        continue;
	                    }
	                    if (selectedIndex < 0 && v === cellText) {
	                        selectedIndex = i;
	                    }
	                    if (v instanceof Date) {
	                        v = Common._DateTimeHelper._localeFormat(v, 'M/d/yyyy h:mm:ss');
	                    }
	                    var option = createElement('option');
	                    option.value = v;
	                    option.text = v;
	                    fragment.appendChild(option);
	                }
	                select.appendChild(fragment);
	                select.selectedIndex = selectedIndex > 0 ? selectedIndex : 0;
	                var cellStyle = sheet.getActualStyle(row, col), render = sheet._render;
	                var font = (cellStyle && cellStyle.font) ? cellStyle.font : render._getDefaultFont();
	                if (sheet.zoom() > 1) {
	                    font = render._getZoomFont(font);
	                }
	                var spans = sheet.getSpans(createRange(row, col, 1, 1));
	                var colSpan = 1;
	                if (spans && spans.length > 0 && spans[0]) {
	                    colSpan = spans[0].colCount;
	                }
	                var isLastColumn = ((col + colSpan - 1) === sheet.getColumnCount() - 1);
	                var buttonSize = sheet._getZoomRowHeight(row);
	                var useTouchLayout = sheet.parent && sheet.parent.options.useTouchLayout;
	                if (useTouchLayout) {
	                    buttonSize = Math_min(50, buttonSize);
	                } else {
	                    buttonSize = Math_min(15, buttonSize);
	                }
	                var device = util_device, isSafariOnIpad = browser.safari && (device.ipad || device.iphone);
	                var selectWidth, selectHeight, selectTop, selectLeft, backgroundColor;
	                if (isSafariOnIpad) {
	                    selectWidth = rect.width + 3;
	                    selectHeight = rect.height + 3;
	                    selectTop = rect.y - 1.5;
	                    selectLeft = rect.x - 1.5;
	                    backgroundColor = cssWhite;
	                } else {
	                    selectWidth = Math_max(rect.width + (isLastColumn ? 0 : buttonSize), sheet.defaults.colWidth);
	                    selectHeight = length > 8 ? 140 : cssAuto;
	                    selectTop = rect.y + rect.height;
	                    selectLeft = rect.x + rect.width + (isLastColumn ? 0 : buttonSize) - selectWidth;
	                    backgroundColor = '';
	                }
	                var $select = $(select).css(cssOutline, cssNone)
	                    .css(cssPosition, cssAbsolute)
	                    .css(cssFont, adjustFontWithFallback(font))
	                    .css(cssZIndex, zIndex)
	                    .css(cssBackgroundColor, backgroundColor)
	                    .width(selectWidth)
	                    .height(selectHeight)
	                    .css(cssTop, selectTop)
	                    .css(cssLeft, selectLeft)
	                    .attr(attrGcUIElement, 'gcValidationSelect')
	                    .appendTo(containerDiv)
	                    .attr(attrSize, length > 2 ? length : 2)
	                    .hide()
	                    .bind('click', function () {
	                        self._commitSelectValue(select, row, col, validList);
	                        if (isSafariOnIpad) {
	                            $(sheet._validationButton).show();
	                        }
	                    }).bind('keydown', function (event) {
	                        if (event.keyCode === 13  && !event.ctrlKey && !event.shiftKey && !event.altKey) {
	                            self._commitSelectValue(select, row, col, validList);
	                        } else if (event.keyCode === 27  && !event.ctrlKey && !event.shiftKey && !event.altKey) {
	                            $(select).hide();
	                        }
	                        if (isSafariOnIpad) {
	                            $(sheet._validationButton).show();
	                        }
	                    });
	                if (isSafariOnIpad) {
	                    $select.bind('blur', function () {
	                        self._commitSelectValue(select, row, col, validList);
	                        $(sheet._validationButton).show();
	                    });
	                }
	                sheet._validationSelect = select;
	                var button = createElement('input');
	                button.type = 'image';
	                button.src = DataValidation._getImageSrc();
	                button.alt = 'v';
	                $(button).css(cssPosition, cssAbsolute)
	                    .width(buttonSize)
	                    .height(buttonSize)
	                    .css(cssTop, rect.y + rect.height - (buttonSize + 3))
	                    .css(cssLeft, rect.x + rect.width - (isLastColumn ? buttonSize : 0))
	                    .css(cssZIndex, zIndex)
	                    .css(cssBackgroundColor, cssWhite)
	                    .css(cssBorder, '1px solid gray')
	                    .attr(attrGcUIElement, 'gcValidationButton')
	                    .appendTo(containerDiv)
	                    .bind('click', function (e) {
	                        if (sheet.isEditing() && !sheet.endEdit()) {
	                            return;
	                        }
	                        $(sheet._validationSelect).toggle().focus();
	                        if (isSafariOnIpad) {
	                            $(sheet._validationButton).toggle();
	                        }
	                        cancelDefault(e);
	                    });
	                sheet._validationButton = button;
	            }
	        }
	    });
	
	}());

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.CalcEngine;

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.datavalidation.12.0.0.js.map