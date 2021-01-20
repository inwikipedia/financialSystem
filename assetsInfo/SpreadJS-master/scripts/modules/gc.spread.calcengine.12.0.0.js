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
var GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["CalcEngine"] =
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
	
	    var calc = __webpack_require__(1);
	    __webpack_require__(3);
	    __webpack_require__(4);
	    __webpack_require__(5);
	    calc.SR = {};
	    calc.SR['en'] = __webpack_require__(6);
	    module.exports = calc;
	
	}());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	    
	    
	    var Common = __webpack_require__(2);
	    var Calc = {};
	    var Functions = Calc.Functions = {};
	    var const_number = 'number', const_string = 'string', const_boolean = 'boolean', const_true = 'TRUE',
	        const_false = 'FALSE';
	    var const_null = '#NULL!', const_div0 = '#DIV/0!', const_value = '#VALUE!',
	        const_ref = '#REF!', const_name = '#NAME?', const_na = '#N/A', const_num = '#NUM!',
	        ErrorList = [const_null, const_div0, const_value, const_ref, const_name, const_na, const_num],
	        ErrorCodeList = [0x00, 0x07, 0x0F, 0x17, 0x1D, 0x2A, 0x24];
	    Calc.ErrorList = ErrorList;
	    var Types = Common._Types, isArray = Types._isArray;
	    var extend = Types._extend;
	    var inherit = Common._Types._inherit;
	    var dateTimeHelper = Common._DateTimeHelper;
	    var stringHelper = Common._StringHelper;
	
	    function toUpperCase(str) {
	        return str && str.toUpperCase();
	    }
	
	    var sR = function () {
	        return Common._getResource(Calc.SR)();
	    };
	    var CalcValueTypeStrings = ['o', 'n', 's', 'b', 'd'];
	    var keyword_null = null, keyword_undefined = void 0, Math_abs = Math.abs;
	   
	    Calc.BangSource = {};
	    Calc.RefErrorSource = {};
	
	    var CalcError = (function () {
	       
	        
	        function CalcError(error) {
	            var err = CalcError._parseCore(error);
	            if (err) {
	                this._error = err.error;
	                this._code = err.code;
	            } else {
	                throw sR().Exp_NotSupported;
	            }
	        }
	
	       
	        
	        CalcError.prototype.toString = function () {
	            return this._error;
	        };
	        CalcError.prototype.clone = function () {
	            return new CalcError(this._error);
	        };
	        CalcError.prototype.toJSON = function () {
	            return {
	                _calcError: this._error,
	                _code: this._code
	            };
	        };
	
	       
	        
	        CalcError.parse = function (value) {
	            try {
	                return new CalcError(value);
	            } catch (e) {
	                return keyword_undefined;
	            }
	        };
	        CalcError._parseCore = function (value) {
	            if (value) {
	                for (var i = 0; i < ErrorList.length; i++) {
	                    var errItem = ErrorList[i];
	                    if (errItem === value || errItem === toUpperCase(value)) {
	                        return {error: errItem, code: ErrorCodeList[i]};
	                    }
	                }
	            }
	            return keyword_undefined;
	        };
	        return CalcError;
	    })();
	    Calc.CalcError = CalcError;
	    var errors = Calc.Errors = {};
	    errors.Name = new CalcError(const_name, 0x1D);
	    errors.Null = new CalcError(const_null, 0x00);
	    errors.DivideByZero = new CalcError(const_div0, 0x07);
	    errors.NotAvailable = new CalcError(const_na, 0x2A);
	    var CalcErrorsValue = errors.Value = new CalcError(const_value, 0x0F),
	        CalcErrorsReference = errors.Reference = new CalcError(const_ref, 0x17),
	        CalcErrorsNumber = errors.Number = new CalcError(const_num, 0x24);
	
	    var CalcArray = Calc.CalcArray = function (array) {
	        this.array = array;
	    };
	    CalcArray.prototype = {
	        getRowCount: function () {
	            return this.array.length;
	        },
	        getColumnCount: function () {
	            return this.array[0].length;
	        },
	        getValue: function (row, column) {
	            var array = this.array;
	            if (row.row !== keyword_undefined) {
	                row = row.row;
	                column = row.column;
	            }
	            if (row < 0 || column < 0 || row >= array.length || column >= array[0].length) {
	                return CalcErrorsValue;
	            }
	            return this.array[row][column];
	        },
	        getValueByIndex: function (index) {
	            var cc = this.getColumnCount(),
	                r = Math.floor(index / cc),
	                c = index % cc;
	            return this.getValue(r, c);
	        },
	        toArray: function (valueType, toOneDimension, breakOnError, breakOnConvertError, ignoreBlank) {
	            var self = this, rowCount = 1, colCount = 1, result = [], value, colValues,
	                errorOjbect = Convert.CalcConvertedError;
	            toOneDimension = toOneDimension === keyword_undefined ? true : toOneDimension;
	            rowCount = self.getRowCount();
	            colCount = self.getColumnCount();
	            for (var i = 0; i < rowCount; i++) {
	                if (!toOneDimension) {
	                    colValues = [];
	                    result.push(colValues);
	                }
	                for (var j = 0; j < colCount; j++) {
	                    value = self.getValue(i, j);
	                    if (breakOnError && Convert._isError(value)) {
	                        result = [value];
	                        result.isError = true;
	                        return result;
	                    }
	                    value = Convert._convertValue(value, valueType, false, ignoreBlank);
	                    if (breakOnConvertError && value === errorOjbect) {
	                        result = [value];
	                        result.isError = true;
	                        return result;
	                    }
	                    if (toOneDimension) {
	                        result.push(value);
	                    } else {
	                        colValues.push(value);
	                    }
	                }
	            }
	            result.rowCount = rowCount;
	            result.colCount = colCount;
	            result.rangeCount = 1;
	            return result;
	        },
	        slice: function (row, column, rowCount, columnCount) {
	            var self = this, array = self.array, result = [], colArray;
	            row = row < 0 ? 0 : row;
	            column = column < 0 ? 0 : column;
	            rowCount = row + rowCount > self.getRowCount() ? self.getRowCount() - row : rowCount;
	            columnCount = column + columnCount > self.getColumnCount() ? self.getColumnCount() - column : columnCount;
	            for (var i = 0; i < rowCount; i++) {
	                colArray = [];
	                result.push(colArray);
	                for (var j = 0; j < columnCount; j++) {
	                    colArray.push(array[i + row][j + column]);
	                }
	            }
	            return new CalcArray(result);
	        }
	    };
	    var CalcReference = Calc.CalcReference = function (calcSource, identities) {
	        var self = this;
	        self._source = calcSource;
	        if (identities) {
	            self._identities = identities;
	            self._rangeCount = identities.length;
	        } else {
	            self._rangeCount = 1;
	        }
	    };
	    CalcReference.prototype = {
	        getRangeCount: function () {
	            return this._rangeCount;
	        },
	        getSource: function () {
	            return this._source;
	        },
	        create: function (identities) {
	            return new CalcReference(this._source, identities);
	        },
	        toArray: function (valueType, toOneDimension, breakOnError, breakOnConvertError, ignoreBlank, followFormatter, ignoreBoolean) {
	            var source = this._source, referenceToArray = source.referenceToArray;
	            return referenceToArray && referenceToArray.call(source, this, valueType, toOneDimension, breakOnError, breakOnConvertError, ignoreBlank, followFormatter, ignoreBoolean);
	        }
	    };
	
	   
	   
	   
	   
	   
	   
	
	   
	    
	    Calc.ExpressionType = {
	        
	        unknow: 0,
	        
	        reference: 1,
	        
	        number: 2,
	        
	        string: 3,
	        
	        boolean: 4,
	        
	        error: 5,
	        
	        array: 6,
	        
	        function: 7,
	        
	        name: 8,
	        
	        operator: 9,
	        
	        parentheses: 10,
	        
	        missingArgument: 11,
	        
	        expand: 12,
	        
	        structReference: 13
	    };
	
	    var Expression = Calc.Expression = (function () {
	       
	        
	        function Expression(type) {
	            var self = this;
	
	           
	            
	            self.type = type;
	        }
	
	        return Expression;
	    })();
	
	    var CalcSource = Calc.CalcSource = (function () {
	        
	        function CalcSource(service) {
	            this.id = CalcSource.sourceId++;
	            this._service = service;
	            
	            this._calcSourceModel = null;
	        }
	
	        CalcSource.sourceId = 1;
	        return CalcSource;
	    })();
	
	    CalcSource.prototype = {
	        
	        getCalcService: function () {
	            return this._service;
	        },
	        _getCalcServiceInternal: function () {
	            return this._service;
	        },
	        setCalcService: function (service) {
	            this._service = service;
	        },
	        
	        getCalcSourceModel: function () {
	            return this._calcSourceModel;
	        },
	        setCalcSourceModel: function (model) {
	            this._calcSourceModel = model;
	        },
	        
	        getValue: function (identity, valueType) {
	            return keyword_null;
	        },
	        
	        getName: function () {
	            return '';
	        },
	        
	        setValue: function (identity, value) {
	        },
	        
	        getReference: function (identity) {
	            return new CalcReference(this, identity);
	        },
	       
	       
	       
	        getSources: function (endSource) {
	            return [this];
	        },
	        referenceToArray: function (reference, valueType, toOneDimension, breakOnError, breakOnConvertError, ignoreBlank, followFormatter) {
	            return reference.toArray(valueType, toOneDimension, breakOnError, breakOnConvertError, ignoreBlank, followFormatter);
	        },        
	        
	        setFormula: function (identity, formula) {
	        },
	        
	        setArrayFormula: function (identity, formula) {
	        },
	        
	        getRowCount: function () {
	            return 1000;
	        },
	        
	        getColumnCount: function () {
	            return 100;
	        },
	        
	        isHiddenRow: function (row, onlyFiltered) {
	            return false;
	        },
	        
	        getParserContext: function (useR1C1, identity, option) {
	            return new Calc.ParserContext(this, useR1C1, identity, option);
	        },
	        startCalculation: function () {
	        },
	        endCalculation: function () {
	        },
	        
	        getEvaluatorContext: function (identity, arrayFormula, arrayIdentity) {
	            return new Calc.EvaluateContext(this, identity, arrayFormula, arrayIdentity);
	        },
	        
	        getCustomFunction: function (name) {
	            return keyword_null;
	        },
	        
	        getCustomName: function (name) {
	            return keyword_null;
	        },
	        refresh: function () {
	        },
	        toJSON: function (jsonData, calcData) {
	        }
	    };
	
	    var BaseCalc = Calc.BaseCalc = (function () {
	        function BaseCalc(sourceModel) {
	            this._listeners = [];
	            this._sourceModel = sourceModel;
	        }
	
	        return BaseCalc;
	    })();
	    BaseCalc.prototype = {
	        hasListeners: function () {
	            var self = this, listeners = self._listeners;
	            for (var i = 0; i < listeners.length; i++) {
	                var listener = self[listeners[i]];
	                if (listener) {
	                    for (var key in listener) {
	                        if (listener[key]) {
	                            return true;
	                        }
	                    }
	                }
	            }
	            return false;
	        },
	        _processListener: function (type, listener, isAdd) {
	            var listeners = this[type];
	            if (!listeners) {
	                this._listeners.push(type);
	                listeners = this[type] = {};
	            }
	            var key = listener.getKey();
	            if (isAdd) {
	                listeners[key] = listener;
	            } else {
	                delete listeners[key];
	            }
	        },
	        _addListenersToAdjust: function () {
	            var listeners = this._listeners, calc;
	            for (var lIndex = 0; lIndex < listeners.length; lIndex++) {
	                var cls = this[listeners[lIndex]];
	                if (cls) {
	                    for (var key in cls) { 
	                        calc = cls[key];
	                        calc && calc._addToAdjust();
	                    }
	                }
	            }
	           
	        },
	        _addListenersToDirty: function () {
	            var listeners = this._listeners, calc;
	            for (var lIndex = 0; lIndex < listeners.length; lIndex++) {
	                var cls = this[listeners[lIndex]];
	                if (cls) {
	                    for (var key in cls) { 
	                        calc = cls[key];
	                        if (calc && !calc._preDirty && !calc._nextDirty) {
	                            calc._addToDirty();
	                        }
	                    }
	                }
	            }
	           
	        },
	        _adjustDelayOfListeners: function (isIncrement) {
	            var listeners = this._listeners, calc, increment = isIncrement ? 1 : -1;
	            for (var lIndex = 0; lIndex < listeners.length; lIndex++) {
	                var cls = this[listeners[lIndex]];
	                if (cls) {
	                    for (var key in cls) { 
	                        calc = cls[key];
	                        if (calc) {
	                            calc.delay += increment;
	                            if (isIncrement && calc._setAsyncFunctionNodeNeedRecalculate) {
	                                calc._setAsyncFunctionNodeNeedRecalculate();
	                            }
	                        }
	                    }
	                }
	            }
	        },
	        _addToAdjust: function () {
	        },
	        _addToDirty: function () {
	        },
	        _stopListening: function () {
	        },
	        _startListening: function () {
	        }
	    };
	
	   
	    var NameIDCalc = Calc.NameIDCalc = (function (_super) {
	        inherit(NameIDCalc, _super);
	        function NameIDCalc(sourceModel, name) {
	            _super.call(this, sourceModel);
	            var self = this;
	            self.name = name;
	            self.delay = 0;
	        }
	
	        return NameIDCalc;
	    })(BaseCalc);
	    extend(NameIDCalc.prototype, {
	        getKey: function () {
	            var self = this;
	            var sourceModel = self._sourceModel;
	            var sourceName = sourceModel === null ? '' : sourceModel._source.id + ',';
	            return sourceName + self.name;
	        },
	        _startListening: function () {
	            var self = this;
	            self._sourceModel._dealWithNameIDExpression(self.name, true);
	        },
	        _stopListening: function () {
	            var self = this;
	            self._sourceModel._dealWithNameIDExpression(self.name, false);
	        },
	        _addToAdjust: function () {
	            this._sourceModel._getCalcServiceInternal()._getOperatorAdjustor()._addAdjust(this, 3 );
	        },
	        _addToDirty: function () {
	            this._sourceModel._getCalcServiceInternal()._addDirty(this, 3 );
	        }
	    });
	
	    var PathCalc = Calc.PathCalc = (function (_super) {
	        inherit(PathCalc, _super);
	        function PathCalc(sourceModel, id, name) {
	            _super.call(this, sourceModel);
	            var self = this;
	            self.id = id;
	            self.name = name;
	            self.delay = 0;
	        }
	
	        return PathCalc;
	    })(BaseCalc);
	    extend(PathCalc.prototype, {
	        getKey: function () {
	            var self = this;
	            return self._sourceModel.getName() + "," + self.id + "#" + self.name;
	        },
	        _startListening: function () {
	            var self = this;
	           
	            self._sourceModel._dealWithExpression(self.id, self.name, true);
	        },
	        _stopListening: function () {
	            var self = this;
	           
	            self._sourceModel._dealWithExpression(self.id, self.name, false);
	        },
	        _addToAdjust: function () {
	            this._sourceModel.service._getOperatorAdjustor()._addAdjust(this, 6 );
	        },
	        _addToDirty: function () {
	            this._sourceModel.service._addDirty(this, 6 );
	        }
	    });
	
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	
	    var CalcService = Calc.CalcService = (function () {
	        
	        function CalcService() {
	            var self = this;
	            self._sourceModels = {};
	            self.autoCalculation = true;
	            self.maximumIterations = 1000;
	            self.maximumChange = 0.01;
	            self._parser = new Calc.Parser();
	            self._evaluator = new Calc.Evaluator(self);
	            self.useR1C1 = false;
	            self._suspended = 0;
	            self._adjustSuspended = 0;
	            self._operatorAdjustor = Calc.CalcOperatorAdjustor && new Calc.CalcOperatorAdjustor();
	            self._resolvers = [];
	            self.addResolver(new Calc.DefaultTokenResolver());
	        }
	
	        return CalcService;
	    })();
	    CalcService.prototype = {
	        getResolvers: function () {
	            return this._resolvers;
	        },
	        addResolver: function (resolve) {
	            var resolves = this._resolvers;
	           
	           
	           
	           
	            for (var i = 0; ; i++) {
	                if (!resolves[i] || resolve.priority > resolves[i].priority) {
	                    resolves.splice(i, 0, resolve);
	                    break;
	                }
	            }
	        },
	        dispose: function () {
	            var self = this;
	            self._sourceModels = {};
	            self._globalSourceModel = keyword_null;
	        },
	        cloneFrom: function (oldService) {
	            var self = this;
	            self.useR1C1 = oldService.useR1C1;
	            self._suspended = oldService._suspended;
	            self._ignoreDirty = oldService._ignoreDirty;
	        },
	        _getOperatorAdjustor: function () {
	            return this._operatorAdjustor;
	        },
	        getExternalSource: function (bookName, sheetName) {
	            var service = this;
	            var models = service.getAllSourceModels();
	            for (var i = 0, count = models.length; i < count; i++) {
	                if (stringHelper._compareStringIgnoreCase(models[i].getSource().getName(), sheetName)) {
	                    return models[i].getSource();
	                }
	            }
	            return keyword_null;
	        },
	        
	        getSourceModel: function (source) {
	            var model = this._sourceModels[source.id];
	            if (!model) {
	                if (source.createSourceModel) {
	                    model = source.createSourceModel(this);
	                } else {
	                    model = new Calc.CalcSourceModel(this, source);
	                }
	                this._sourceModels[source.id] = model;
	                source.setCalcSourceModel(model);
	                source.setCalcService(this);
	            }
	            return model;
	        },
	        getGlobalSourceModel: function (source) {
	            if (!this._globalSourceModel) {
	                source = source || new CalcSource();
	                if (source.createSourceModel) {
	                    this._globalSourceModel = source.createSourceModel(this);
	                } else {
	                    this._globalSourceModel = new Calc.CalcSourceModel(this, source);
	                }
	                source.setCalcSourceModel(this._globalSourceModel);
	            }
	            return this._globalSourceModel;
	        },
	        setSourceModel: function (source, model) {
	            this._sourceModels[source.id] = model;
	            model.setCalcService(this);
	        },
	        getAllSourceModels: function () {
	            var result = [], models = this._sourceModels;
	            for (var modelName in models) { 
	                result.push(models[modelName]);
	            }
	            return result;
	        },
	        
	        removeSource: function (source) {
	            var model = this._sourceModels[source.id];
	            if (model) {
	                this._operatorAdjustor._adjustFormulasOnRemoveSheet(source);
	                delete this._sourceModels[source.id];
	            }
	        },
	        clearSource: function () {
	            this._sourceModels = {};
	            this.clearDirties();
	        },
	        ignoreDirty: function () {
	            return this._ignoreDirty;
	        },
	        suspend: function (ignoreDirty) {
	           
	           
	           
	            this._suspended++;
	            this._ignoreDirty = ignoreDirty ? true : ignoreDirty;
	        },
	        resume: function (recalcAll) {
	            var self = this;
	            self._suspended--;
	            if (self._suspended < 0) {
	                self._suspended = 0;
	            }
	            if (!self.IsSuspended()) {
	                self._parseCache = keyword_null;
	                self._ignoreDirty = false;
	                self.recalculateAll(recalcAll);
	            }
	        },
	        suspendAdjust: function () {
	            this._adjustSuspended++;
	        },
	        resumeAdjust: function () {
	            var self = this;
	            self._adjustSuspended--;
	            if (self._adjustSuspended < 0) {
	                self._adjustSuspended = 0;
	            }
	        },
	        isAdjustSuspended: function () {
	            return this._adjustSuspended > 0;
	        },
	        clearDirties: function () {
	            var self = this;
	            var heads = self._heads;
	            if (heads) {
	                for (var p in heads) {
	                    if (heads.hasOwnProperty(p)) {
	                        var node = heads[p];
	                        while (node) {
	                            var nextNode = node._nextDirty;
	                            if (nextNode) {
	                                node._nextDirty = nextNode._preDirty = keyword_undefined;
	                                node = nextNode;
	                            } else {
	                                node = keyword_null;
	                            }
	                        }
	                    }
	                }
	            }
	            self._heads = self._tails = keyword_null;
	        },
	        resumeWithoutCalc: function () {
	            this._suspended = 0;
	            this.clearDirties();
	            this._ignoreDirty = false; 
	        },
	        IsSuspended: function () {
	            return this._suspended > 0;
	        },
	        
	        recalculateAll: function (dirtyAll, isAyncEvaluate) {
	            var self = this, sourceModel;
	            if (self.IsSuspended()) {
	                return;
	            }
	            if (!isAyncEvaluate) {
	                self._evaluator.startCache();
	            }
	            var sourceModels = self._sourceModels;
	            for (var sourceName in sourceModels) { 
	                sourceModel = sourceModels[sourceName];
	                sourceModel.getSource().startCalculation();
	                sourceModel.addDirtyNodesForCalc(dirtyAll, isAyncEvaluate);
	            }
	            self._recalculateImp();
	            if (!isAyncEvaluate) {
	                for (sourceName in sourceModels) { 
	                    sourceModel = sourceModels[sourceName];
	                    sourceModel._checkAndUpdateVolatitles();
	                }
	            }
	            for (sourceName in sourceModels) { 
	                sourceModel = sourceModels[sourceName];
	                sourceModel.getSource().endCalculation();
	            }
	            if (!isAyncEvaluate) {
	                self._evaluator.endCache();
	            }
	        },
	       
	        _recalculateImp: function (dirtyDependency) {
	            if (dirtyDependency === undefined) {
	                dirtyDependency = true;
	            }
	            var self = this;
	            var heads = self._heads;
	            if (!heads) {
	                return;
	            }
	
	            var p, current;
	            if (dirtyDependency) {
	                for (p in heads) {
	                    if (heads.hasOwnProperty(p)) {
	                        current = heads[p];
	                        if (current) {
	                            current._sourceModel.addListenersToDirty(self, parseInt(p));
	                            current.processed = true;
	                        }
	                    }
	                }
	
	               
	                for (p in heads) {
	                    if (heads.hasOwnProperty(p)) {
	                        current = heads[p];
	                        if (current) {
	                            if (!current.processed) {
	                                current._sourceModel.addListenersToDirty(self, parseInt(p));
	                            } else {
	                                delete current.processed;
	                            }
	                        }
	                    }
	                }
	            }
	
	            for (p in heads) {
	                if (heads.hasOwnProperty(p)) {
	                    heads[p]._sourceModel.initDelay(self, parseInt(p));
	                }
	            }
	
	            for (p in heads) {
	                if (heads.hasOwnProperty(p)) {
	                    heads[p]._sourceModel.adjustDelayOfListeners(self, parseInt(p), true);
	                }
	            }
	
	            var progress;
	            do {
	                progress = false;
	                for (p in heads) {
	                    if (heads.hasOwnProperty(p)) {
	                        var b = heads[p]._sourceModel.calculateDirtyNodes(self, parseInt(p));
	                        if (b) {
	                            progress = true;
	                        }
	                    }
	                }
	            } while (progress);
	
	            for (p in heads) {
	                if (heads.hasOwnProperty(p)) {
	                    heads[p]._sourceModel.calculateIterations(self, parseInt(p));
	                }
	            }
	
	            self._heads = self._tails = keyword_undefined;
	        },
	        _iterationChange: function (oldValue, newValue) {
	            oldValue = oldValue || 0;
	            newValue = newValue || 0;
	            var oldDouble = parseFloat(oldValue);
	            var newDouble = parseFloat(newValue);
	            return Math_abs(newDouble - oldDouble);
	        },
	        initParserContext: function (source) {
	            var parseContext = this._parserContext;
	            if (!parseContext) {
	                this._parserContext = source.getParserContext(this.useR1C1);
	            }
	        },
	        getParserContext: function (source) {
	            var self = this;
	            var parseContext = self._parserContext;
	            if (!parseContext) {
	                if (!source) {
	                    parseContext = new Calc.ParserContext(keyword_null, self.useR1C1);
	                } else {
	                    self._parserContext = parseContext = source.getParserContext(self.useR1C1);
	                }
	            }
	            parseContext.setSource(source);
	            return parseContext;
	        },
	        parseWithContext: function (parseContext, formula) {
	            return this._parser.parse(parseContext, formula);
	        },
	        unparseWithContext: function (parseContext, expr) {
	            return this._parser.unparse(parseContext, expr);
	        },
	        _addDirty: function (node, type) {
	            var self = this, head, tail;
	            if (isNaN(type)) {
	                return;
	            }
	
	            var heads = self._heads, tails = self._tails;
	            if (!heads) {
	                heads = self._heads = {};
	                tails = self._tails = {};
	            }
	
	            head = heads[type];
	            tail = tails[type];
	
	            if (node && !node._preDirty && node !== head) {
	               
	               
	                if (head) {
	                    tail._nextDirty = node;
	                } else {
	                    heads[type] = node;
	                }
	                node._preDirty = tail;
	                node._nextDirty = keyword_null;
	
	                tails[type] = node;
	            }
	        },
	        _removeDirty: function (node, type) {
	            var self = this, head;
	            if (isNaN(type)) {
	                return;
	            }
	
	            var heads = self._heads, tails = self._tails;
	            if (heads) {
	                head = self._heads[type];
	            }
	
	            if (node && (node._preDirty || node === head)) {
	                var prevDirty = node._preDirty;
	                var nextDirty = node._nextDirty;
	                if (prevDirty) {
	                    prevDirty._nextDirty = nextDirty;
	                } else if (heads) {
	                    if (nextDirty) {
	                        heads[type] = nextDirty;
	                    } else {
	                        delete heads[type];
	                    }
	                }
	
	                if (nextDirty) {
	                    nextDirty._preDirty = prevDirty;
	                } else if (tails) {
	                    if (prevDirty) {
	                        tails[type] = prevDirty;
	                    } else {
	                        delete tails[type];
	                    }
	                }
	                node._preDirty = keyword_null;
	                node._nextDirty = keyword_null;
	            }
	        },        
	        evaluateExpression: function (source, expr, identity) {
	            var self = this;
	            return self._evaluator.evaluateExpression(expr, source.getEvaluatorContext(identity, false), false);
	        },
	        onClearExpr: function (source, identity) {
	            this._evaluator && this._evaluator.asyncManager.clearCell(source, identity);
	        }
	    };
	    var createErrorExpression = Calc._createErrorExpression = function (err, source, endSource) {
	        var expr = new Expression(5 );
	        if (source) {
	            expr.source = source;
	        }
	        if (endSource) {
	            expr.endSource = endSource;
	        }
	        expr.value = err;
	        return expr;
	    };
	    Calc._referenceErrorExpr = createErrorExpression(CalcErrorsReference);
	    Calc._createFunctionExpression = function (func, args) {
	        var expr = new Expression(7 );
	        expr.arguments = args;
	        if (func instanceof Expression) {
	            expr.function = func.function;
	            expr.functionName = func.functionName;
	        } else {
	            expr.function = func.name && func;
	            expr.functionName = func.name || func;
	        }
	        return expr;
	    };
	
	    Calc.createExpandExpression = function (oldExpr, needExpendIndexs) {
	        var expr = new Expression(12 );
	        expr.value = oldExpr;
	        expr.needExpendIndexs = needExpendIndexs;
	        return expr;
	    };
	
	    Calc._createOperatorExpression = function (operatorType, value, value2) {
	        var expr = new Expression(9 );
	        expr.operatorType = operatorType;
	        expr.value = value;
	        expr.value2 = value2;
	        return expr;
	    };
	    Calc._createParenthesesExpression = function (expr) {
	        var pExpr = new Expression(10 );
	        pExpr.value = expr;
	        return pExpr;
	    };
	
	    Calc.createStringExpression = function (value) {
	        var expr = new Expression(3 );
	        expr.value = value;
	        return expr;
	    };
	
	    Calc.createNumberExpression = function (value) {
	        var expr = new Expression(2 );
	        expr.value = value;
	        return expr;
	    };
	
	   
	    function Convert() {
	    }
	
	    function _isNumber(value, strict) {
	        return (typeof value === const_number) || (value instanceof Date) ||
	            !strict && (typeof value === const_boolean || (!isNaN(value) && !isNaN(parseFloat(value))));
	
	    }
	
	    Convert._isNumber = _isNumber;
	   
	   
	   
	   
	    function _isError(value) {
	        return value instanceof CalcError;
	    }
	
	    Convert._isError = _isError;
	    function _isNotAvailableError(value) {
	        return _isError(value) && value._code === ErrorCodeList[5];
	    }
	
	    Convert._isNotAvailableError = _isNotAvailableError;
	    function _isCalcArray(value) {
	        return value instanceof CalcArray;
	    }
	
	    Convert._isArray = _isCalcArray;
	    function _isReference(value) {
	        return value instanceof CalcReference;
	    }
	
	    Convert._isReference = _isReference;
	    function _toResult(value) {
	        if (isNaN(value) || !isFinite(value)) {
	            return CalcErrorsNumber;
	        }
	        return value;
	    }
	
	    Convert._toResult = _toResult;
	    function _toArray(value, valueType, toOneDimension, breakOnError, breakOnConvertError, ignoreBlank, followFormatter, ignoreBoolean) {
	        var result;
	        if (value && value.length && value.rowCount && value.colCount) {
	            return value;
	        } else if (_isCalcArray(value)) {
	            result = value.toArray(valueType, toOneDimension, breakOnError, breakOnConvertError, ignoreBlank);
	            result.isArray = true;
	        } else if (_isReference(value)) {
	            result = value.toArray(valueType, toOneDimension, breakOnError, breakOnConvertError, ignoreBlank, followFormatter, ignoreBoolean);
	            result.isReference = true;
	        } else if (isArray(value) && value.length > 0) {
	            result = [];
	            if (isArray(value[0])) {
	                return Convert._convertArray(value, valueType, true);
	            }
	            for (var i = 0; i < value.length; i++) {
	                var arg = _convertValue(value[i], valueType, false);
	                if (arg === Convert.CalcConvertedError) {
	                    result.isConvertError = true;
	                }
	                result.push(arg);
	            }
	            result.rowCount = 1;
	            result.colCount = value.length;
	            result.rangeCount = 1;
	        } else {
	            value = _convertValue(value, valueType, true);
	            if (breakOnError && _isError(value)) {
	                result = [CalcErrorsValue];
	                result.isError = true;
	            } else if (value === Convert.CalcConvertedError) {
	                result = [Convert.CalcConvertedError];
	                result.isConvertError = true;
	            } else if (toOneDimension) {
	                result = [];
	                result.push(value);
	            } else {
	                result = [[]];
	                result[0].push(value);
	            }
	            result.rowCount = 1;
	            result.colCount = 1;
	            result.rangeCount = 1;
	        }
	        return result;
	    }
	
	    Convert._toArray = _toArray;
	    function _convertValue(value, valueType, convert, ignoreBlank, ignoreBoolean) {
	        if (_isError(value)) {
	            return value;
	        }
	        var refValue = {value: keyword_null}, error = Convert.CalcConvertedError;
	        if (valueType !== 0  && _judgeBlankChar(value, ignoreBlank)) {
	            return error;
	        }
	        switch (valueType) {
	            case 1 
	            :
	            case 5 
	            :
	                if (!convert || valueType === 5) {
	                    if ((typeof value) === const_number) {
	                       
	                    } else if (value instanceof Date) {
	                        value = dateTimeHelper._toOADate(value);
	                    } else {
	                        value = error;
	                    }
	                } else {
	                    if ((typeof value) === const_boolean && ignoreBoolean) {
	                        return error;
	                    }
	                    value = _tryToDouble(value, refValue) ? refValue.value : error;
	                }
	                break;
	            case 4 
	            :
	                if (typeof (value) === const_string) {
	                    var date = Common._DateTimeHelper._parseLocale(value);
	                    if (date !== keyword_undefined && date !== keyword_null) {
	                        value = dateTimeHelper._toOADate(date);
	                    } else {
	                        value = error;
	                    }
	                } else if (!convert) {
	                    if ((typeof value) !== const_number && !(value instanceof Date)) {
	                        value = error;
	                    }
	                } else {
	                    value = _tryToDouble(value, refValue) ? refValue.value : error;
	                }
	                break;
	            case 3 
	            :
	                if (!convert) {
	                    if ((typeof value) !== const_boolean) {
	                        value = error;
	                    }
	                } else {
	                    value = _tryToDouble(value, refValue) ? refValue.value : error;
	                }
	                break;
	            case 2 
	            :
	                value = value === keyword_null || value === keyword_undefined ? '' : value.toString();
	                break;
	        }
	        return value;
	    }
	
	    Convert._convertValue = _convertValue;
	   
	   
	    function _judgeBlankChar(value, ignoreBlank) {
	        return ignoreBlank && (value === keyword_null || value === keyword_undefined || (typeof (value) === const_string && value.trim() === ''));
	    }
	
	    Convert._judgeBlankChar = _judgeBlankChar;
	    function _convertArray(array, valueType, convert) {
	        var convertedArray;
	        if (!array || !array.length || !array[0].length) {
	            convertedArray = [];
	            convertedArray.isError = true;
	            return [[CalcErrorsValue]];
	        }
	       
	        if (valueType === 0 ) {
	            return array;
	        }
	        var typeString = CalcValueTypeStrings[valueType];
	        var rowCount = array.length, colCount = array[0].length, rowValue, convertedRowValue, value,
	            refValue = {value: keyword_null};
	        var errorMarked = false, convertErrorMarked = false, errorObject = Convert.CalcConvertedError;
	        convertedArray = array[typeString];
	        if (!convertedArray) {
	            convertedArray = [];
	            array[typeString] = convertedArray;
	            for (var i = 0; i < rowCount; i++) {
	                rowValue = array[i];
	                convertedRowValue = convertedArray[i] = [];
	                for (var j = 0; j < colCount; j++) {
	                    value = rowValue[j];
	                    if (_isError(value)) {
	                        if (!errorMarked) {
	                            convertedArray.isError = true;
	                            errorMarked = true;
	                        }
	                        convertedRowValue.push(value);
	                        continue;
	                    }
	                    switch (valueType) {
	                        case 1 
	                        :
	                        case 5 
	                        :
	                            if (!convert || valueType === 5) {
	                                if ((typeof value) !== const_number && !(value instanceof Date)) {
	                                    if (!convertErrorMarked) {
	                                        convertErrorMarked = true;
	                                        convertedArray.isConvertError = true;
	                                    }
	                                    value = errorObject;
	                                }
	                            } else if (_tryToDouble(value, refValue)) {
	                                value = refValue.value;
	                            } else {
	                                if (!convertErrorMarked) {
	                                    convertErrorMarked = true;
	                                    convertedArray.isConvertError = true;
	                                }
	                                value = 0;
	                            }
	                            break;
	                        case 3 
	                        :
	                            if (!convert) {
	                                if ((typeof value) !== const_boolean) {
	                                    if (!convertErrorMarked) {
	                                        convertErrorMarked = true;
	                                        convertedArray.isConvertError = true;
	                                    }
	                                    value = errorObject;
	                                }
	                            } else if (_tryToBool(value, refValue)) {
	                                value = refValue.value;
	                            } else {
	                                if (!convertErrorMarked) {
	                                    convertErrorMarked = true;
	                                    convertedArray.isConvertError = true;
	                                }
	                                value = false;
	                            }
	                            break;
	                        case 2 
	                        :
	                            value = value === keyword_null || value === keyword_undefined ? '' : value.toString();
	                            break;
	                    }
	                    convertedRowValue.push(value);
	                }
	            }
	        }
	        return convertedArray;
	    }
	
	    Convert._convertArray = _convertArray;
	    function _isNaNOrInfinite(value) {
	        return isNaN(value) || !isFinite(value);
	    }
	
	    Convert._isNaNOrInfinite = _isNaNOrInfinite;
	    function _toInt(value) {
	        var dVal = _toDouble(value);
	        if (Math_abs(dVal) < 1E+21) {
	            return parseInt(dVal, 10);
	        }
	        throw sR().Exp_InvalidCast;
	    }
	
	    Convert._toInt = _toInt;
	    function _tryToInt(value, intValue) {
	        var dVal = _tryToDouble(value, intValue);
	        if (!dVal) {
	            return false;
	        }
	        if (Math_abs(intValue.value) < 1E+21) {
	            intValue.value = parseInt(intValue.value, 10);
	            return true;
	        }
	       
	        return false;
	    }
	
	    Convert._tryToInt = _tryToInt;
	    function _toDouble(value) {
	        var doubleValue = {value: 0};
	        if (_tryToDouble(value, doubleValue)) {
	            return doubleValue.value;
	        }
	        throw sR().Exp_InvalidCast;
	    }
	
	    Convert._toDouble = _toDouble;
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
	
	    function _tryToDouble(value, doubleValue) {
	        var result = keyword_null;
	        if (!value) {
	            doubleValue.value = 0;
	            return true;
	        }
	        var typestr = typeof value;
	        try {
	            if (typestr === const_number) {
	                result = value;
	            } else if (typestr === const_string) {
	               
	               
	               
	               
	               
	               
	               
	                value = value.trim();
	                if (value.length === 0) {
	                    doubleValue.value = 0;
	                    return true;
	                }
	               
	               
	                var decimalSeparator = Calc.Parser.numberDecimalSeparator;
	                var groupSeparator = Calc.Parser.numberGroupSeparator;
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
	                result = Number(value).valueOf();
	                
	                if (Convert._isNaNOrInfinite(result)) {
	
	                   
	                   
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
	                    if (Convert._isNaNOrInfinite(result.valueOf())) {
	                        return false;
	                    }
	                    result = dateTimeHelper._toOADate(result);
	                   
	                }
	                if (isPercent) {
	                    result /= 100;
	                }
	            } else if (typestr === const_boolean) {
	                result = value ? 1 : 0;
	            } else if (value instanceof Date) {
	                result = dateTimeHelper._toOADate(value);
	            } else {
	                return false;
	            }
	        } catch (ex) {
	            return false;
	        }
	        doubleValue.value = result;
	        return true;
	    }
	
	    Convert._tryToDouble = _tryToDouble;
	    function _tryToBool(value, boolValue) {
	        try {
	            if (!value) {
	                value = false;
	            } else if (typeof value === const_boolean) {
	            } else if (value instanceof Date) {
	                value = dateTimeHelper._toOADate(value) !== 0;
	            } else if (_isNumber(value)) {
	                value = value !== 0;
	            } else {
	                return false;
	            }
	        } catch (ex) {
	            return false;
	        }
	        boolValue.value = value;
	        return true;
	    }
	
	    Convert._tryToBool = _tryToBool;
	    function _toBool(value) {
	        if (!value) {
	            return false;
	        } else if (typeof value === const_boolean) {
	            return value;
	        } else if (value instanceof Date) {
	            return dateTimeHelper._toOADate(value) !== 0;
	        } else if (_isNumber(value)) {
	            return value !== 0;
	        } else if (_isError(value)) {
	            return false;
	        }
	        throw sR().Exp_InvalidCast;
	    }
	
	    Convert._toBool = _toBool;
	    function _toString(value) {
	        try {
	            if (value === keyword_undefined || value === keyword_null) {
	                return '';
	            } else if (typeof value === const_boolean) {
	                return value ? const_true : const_false;
	            } else if (typeof value === const_string) {
	                return value;
	            } else if (value instanceof Date) {
	               
	                return dateTimeHelper._toOADate(value).toString();
	            } else if (_isCalcArray(value)) {
	                throw sR().Exp_InvalidCast;
	            } else {
	                return value.toString();
	            }
	        } catch (err) {
	            throw sR().Exp_InvalidCast;
	        }
	    }
	
	    Convert._toString = _toString;
	    function _toDateTime(value) {
	        var dateValue = {value: keyword_null};
	        if (_tryToDateTime(value, dateValue)) {
	            return dateValue.value;
	        }
	        throw sR().Exp_InvalidCast;
	    }
	
	    Convert._toDateTime = _toDateTime;
	    function _tryToDateTime(value, dateValue) {
	        if (!value) {
	            dateValue.value = Common._DateTimeHelper._fromOADate(0);
	        } else if (value instanceof Date) {
	            dateValue.value = new Date(value.valueOf());
	        } else if (typeof value === const_string) {
	            var dateTime = Common._DateTimeHelper._parseLocale(value);
	            if (!dateTime) {
	                if (!isNaN(value)) {
	                    dateTime = Common._DateTimeHelper._fromOADate(parseFloat(value));
	                    if (!dateTime) {
	                        return false;
	                    }
	                } else {
	                    dateTime = new Date(value);
	                    if (isNaN(dateTime.valueOf())) {
	                        return false;
	                    }
	                   
	                   
	                   
	                    try {
	                        var reg = /^[-+=\s]*(\d+)\W+(\d+)\W+(\d+)$/;
	                        var value2 = stringHelper._trimEnd(stringHelper._trimStart(value.replace(/ |\n/g, ''), ' '), ' ');
	                        var results = reg.exec(value2);
	                        if (results && results.length === 4) { 
	                            if (results.indexOf(dateTime.getYear().toString()) === -1 || results.indexOf(dateTime.getMonth().toString()) === -1 || results.indexOf(dateTime.getDate().toString()) === -1) {
	                                return false;
	                            }
	                        }
	                    } catch (ex) {
	                        return false;
	                    }
	                }
	
	            }
	            dateValue.value = dateTime;
	        } else if (typeof value === const_number) {
	            dateValue.value = Common._DateTimeHelper._fromOADate(value);
	        } else {
	            return false;
	        }
	        return true;
	    }
	
	    Convert._tryToDateTime = _tryToDateTime;
	    Convert.CalcConvertedError = {};
	    Calc.Convert = Convert;
	   
	
	    var _Helper = (function () {
	        function _Helper() {
	        }
	
	        _Helper._approxEqual = function (x, y) {
	            var num = 16777216;
	            return x === y ? true : Math_abs(x - y) < Math_abs(x) / (num * num);
	        };
	        _Helper.getArrayValue = function (array, i, j) {
	            if (!array) {
	                return CalcErrorsValue;
	            }
	            if (i < array.getRowCount() && j < array.getColumnCount()) {
	                return array.getValue(i, j);
	            }
	            if (j >= array.getColumnCount() && array.getColumnCount() === 1 && i < array.getRowCount()) {
	                return array.getValue(i, 0);
	            }
	            if (i >= array.getRowCount() && array.getColumnCount() === 1 && j < array.getColumnCount()) {
	                return array.getValue(0, j);
	            }
	            return CalcErrorsValue;
	        };
	        _Helper.tryExtractToSingleValue = function (arg) {
	            var success = true;
	            if ((_isReference(arg)) || _isCalcArray(arg)) {
	                var array = _toArray(arg, 0 , false, true);
	                if (array.isError) {
	                    arg = array[0];
	                } else if (array.rowCount === 1 && array.colCount === 1) {
	                    arg = array[0][0];
	                } else {
	                    arg = array;
	                    success = false;
	                }
	            }
	            return {
	                value: arg,
	                success: success
	            };
	        };
	        return _Helper;
	    })();
	    Calc._Helper = _Helper;
	
	    var CalcArrayHelper = (function () {
	        function CalcArrayHelper() {
	        }
	
	        CalcArrayHelper.getLength = function (obj, rangeId) {
	            if (_isCalcArray(obj)) {
	                return obj.getRowCount() * obj.getColumnCount();
	            } else if (_isReference(obj)) {
	                rangeId = rangeId ? rangeId : 0;
	                return obj.getRowCount(rangeId) * obj.getColumnCount(rangeId);
	            }
	        };
	        CalcArrayHelper.getRowCount = function (obj, rangeId) {
	            if (_isCalcArray(obj)) {
	                return obj.getRowCount();
	            } else if (_isReference(obj)) {
	                rangeId = rangeId ? rangeId : 0;
	                return obj.getRowCount(rangeId);
	            }
	        };
	        CalcArrayHelper.getColumnCount = function (obj, rangeId) {
	            if (_isCalcArray(obj)) {
	                return obj.getColumnCount();
	            } else if (_isReference(obj)) {
	                rangeId = rangeId ? rangeId : 0;
	                return obj.getColumnCount(rangeId);
	            }
	        };
	        CalcArrayHelper.getValueByIndex = function (obj, i, rangeId) {
	            if (_isCalcArray(obj)) {
	                return obj.getValueByIndex(i);
	            } else if (_isReference(obj)) {
	                rangeId = rangeId ? rangeId : 0;
	                var cc = obj.getColumnCount(rangeId);
	                return obj.getValue(rangeId, parseInt((i / cc), 10), i % cc);
	            }
	        };
	        CalcArrayHelper.getValue = function (obj, row, column, rangeId) {
	            if (_isCalcArray(obj)) {
	                return obj.getValue(row, column);
	            } else if (_isReference(obj)) {
	                rangeId = rangeId ? rangeId : 0;
	                return obj.getValue(rangeId, row, column);
	            }
	        };
	        return CalcArrayHelper;
	    })();
	    Calc.CalcArrayHelper = CalcArrayHelper;
	
	   
	
	    
	    (function (ArrayArgumentEvaluateMode) {
	        
	        ArrayArgumentEvaluateMode[ArrayArgumentEvaluateMode['normal'] = 0] = 'normal';
	        
	        ArrayArgumentEvaluateMode[ArrayArgumentEvaluateMode['allwaysExpand'] = 1] = 'allwaysExpand';
	        
	        ArrayArgumentEvaluateMode[ArrayArgumentEvaluateMode['neverExpand'] = 2] = 'neverExpand' ;
	
	    })(Functions.ArrayArgumentEvaluateMode || (Functions.ArrayArgumentEvaluateMode = {}));
	
	
	   
	    
	
	   
	    
	
	    var Function = (function () { 
	       
	        
	        function Function(name, minArgs, maxArgs, functionDescription) { 
	            var self = this, argumentsLength = arguments.length;
	           
	            
	            self.name = name;
	           
	            
	            self.minArgs = argumentsLength < 2 ? 0 : minArgs;
	           
	            
	            self.maxArgs = argumentsLength < 3 ? 0 : maxArgs;
	            self._description = functionDescription;
	           
	            
	            self.typeName = '';
	        }
	
	        Function.prototype = {
	           
	            
	            description: function () {
	                var self = this, builtInFunctionsResource = sR()._builtInFunctionsResource;
	                return self._description ? self._description : (builtInFunctionsResource && builtInFunctionsResource[self.name]);
	            },
	           
	            
	            acceptsArray: function (argIndex) {
	                return false;
	            },
	           
	            
	            acceptsReference: function (argIndex) {
	                return false;
	            },
	           
	            
	            acceptsError: function (argIndex) {
	                return false;
	            },
	           
	            
	            acceptsMissingArgument: function (argIndex) {
	                return false;
	            },
	           
	            
	            isVolatile: function () {
	                return false;
	            },
	           
	            
	            isContextSensitive: function () {
	                return false;
	            },
	           
	            
	            isBranch: function () {
	                return false;
	            },
	           
	            
	            findTestArgument: function () {
	                return -1;
	            },
	           
	            
	            findBranchArgument: function (test) {
	                return -1;
	            },
	            expandRows: function () {
	                return true;
	            },
	            expandColumns: function () {
	                return true;
	            },
	            precedentReference: function () {
	                return true;
	            },
	            returnReference: function () {
	                return false;
	            },
	           
	            
	            evaluate: function (args) {
	            },
	            evaluateWithContext: function (context, args) {
	                var self = this, args1 = args;
	                if (self.isContextSensitive()) {
	                   
	                   
	
	                   
	                    args1 = [context].concat(args1);
	                }
	                return self.evaluate.apply(self, args1);
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
	                if (!settings) {
	                    return;
	                }
	                for (var p in settings) {
	                    if (settings[p] !== keyword_undefined) {
	                        this[p] = settings[p];
	                    }
	                }
	            }
	        };
	        Function._create = function (name, fnEvaluate, options) {
	            var fn = new Functions.Function(name, 0, 255);
	            if (fnEvaluate && typeof fnEvaluate === 'function') {
	                fn.evaluate = fnEvaluate;
	            }
	            if (options) {
	                for (var prop in options) {
	                    if (options.hasOwnProperty(prop) && prop !== 'override') {
	                        fn[prop] = options[prop];
	                    }
	                }
	            }
	            return fn;
	        };
	        return Function;
	    })();
	    Functions.Function = Function;
	
	    var AsyncFunction = (function (_super) {
	        inherit(AsyncFunction, _super);
	       
	        
	        function AsyncFunction(name, minArgs, maxArgs, description) {
	            _super.call(this, name, minArgs, maxArgs, description);
	        }
	
	        return AsyncFunction;
	    })(Function);
	    extend(AsyncFunction.prototype, {
	        isContextSensitive: function () {
	            return true;
	        },
	        evaluate: function (context, args) {
	            return this.evaluateAsync.apply(this, arguments);
	        },
	       
	        
	        evaluateAsync: function (context, args) {
	            this.evaluate.apply(this, arguments);
	        },
	       
	        
	        defaultValue: function () {
	            return 0;
	        },
	       
	        
	        evaluateMode: function () {
	            return 0;
	        },
	        evaluateWhenArgumentsIsSame: function () {
	            return true;
	        },
	       
	        
	        interval: function () {
	            return 10000;
	        }
	
	    });
	    Functions.AsyncFunction = AsyncFunction;
	
	   
	    
	    Functions.AsyncFunctionEvaluateMode = {
	        
	        onRecalculation: 0,
	        
	        calculateOnce: 1,
	        
	        onInterval: 2
	    };
	
	    Functions._builtInFunctions = {};
	    Functions._customFunctions = {};
	
	   
	    
	    function defineGlobalCustomFunction(name, fn) {
	        Functions._customFunctions[toUpperCase(name)] = fn;
	        return fn;
	    }
	
	    Functions.defineGlobalCustomFunction = defineGlobalCustomFunction;
	
	   
	    
	    function findGlobalFunction(name) {
	        if (!name) {
	            return getAllGlobalFunctions();
	        }
	        name = toUpperCase(name);
	        var buildInFuncs = Functions._builtInFunctions, customFuncs = Functions._customFunctions;
	        return buildInFuncs && buildInFuncs[name] || customFuncs && customFuncs[name];
	    }
	
	    Functions.findGlobalFunction = findGlobalFunction;
	
	   
	    
	    function removeGlobalFunction(name) {
	        if (!name) {
	            Functions._builtInFunctions = {};
	            Functions._customFunctions = {};
	            return;
	        }
	        name = toUpperCase(name);
	        var buildInFuncs = Functions._builtInFunctions, customFuncs = Functions._customFunctions;
	        if (buildInFuncs[name]) {
	            delete buildInFuncs[name];
	        } else if (customFuncs[name]) {
	            delete customFuncs[name];
	        }
	    }
	
	    Functions.removeGlobalFunction = removeGlobalFunction;
	
	    function getAllGlobalFunctions() {
	        var buildInFuncs = Functions._builtInFunctions, customFuncs = Functions._customFunctions;
	        var functions = [];
	        for (var name in buildInFuncs) { 
	            functions.push(buildInFuncs[name]);
	        }
	        for (name in customFuncs) { 
	            functions.push(customFuncs[name]);
	        }
	        return functions;
	    }
	
	
	    module.exports = Calc;
	
	
	}());

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Common;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(2);
	    var Calc = __webpack_require__(1);
	    var inherit = Common._Types._inherit, extend = Common._Types._extend;
	
	    var keyword_undefined = void 0, keyword_null = null,
	        const_string = 'string', const_boolean = 'boolean', const_true = 'TRUE', const_false = 'FALSE',
	        const_array = 'ARRAY', ErrorList = Calc.ErrorList;
	
	    var Expression = Calc.Expression;
	
	    var stringHelper = Common._StringHelper,
	        sR = function () {
	            return Common._getResource(Calc.SR)();
	        };
	
	    var Exp_FormulaInvalidChar = 'Exp_FormulaInvalidChar', Exp_FormulaInvalid = 'Exp_FormulaInvalid', Exp_NoSyntax = 'Exp_NoSyntax';
	
	    function throwParseError() {
	        throw sR()[Exp_FormulaInvalid];
	    }
	
	    function throwParseCharError(char, index, exp) {
	        throw stringHelper._format(sR()[exp || Exp_FormulaInvalidChar], [char, index]);
	    }
	
	    Calc.OperatorType = {
	        Plus: 0,
	        Negate: 1,
	        Percent: 2,
	        Add: 3,
	        Sub: 4,
	        Mul: 5,
	        Div: 6,
	        Exp: 7,
	        Concat: 8,
	        EqualTo: 9,
	        NotEqualTo: 10,
	        LessThan: 11,
	        LessThanOrEqualTo: 12,
	        GreaterThan: 13,
	        GreaterThanOrEqualTo: 14,
	        Range: 15,
	        Union: 16,
	        Intersect: 17
	    };
	    var OperatorTypeStringMap = Calc._OperatorTypeStringMap = [
	        '+', 
	        '-', 
	        '%', 
	        '+', 
	        '-', 
	        '*', 
	        '/', 
	        '^', 
	        '&', 
	        '=', 
	        '<>', 
	        '<', 
	        '<=', 
	        '>', 
	        '>=', 
	        ':', 
	        ',', 
	        ' '  
	    ];
	    var binaryOperatorPriorities = {
	        ':': 1,
	        '^': 2,
	        ' ': 3,
	        '*': 4,
	        '/': 4,
	        ',': 5,
	        '+': 6,
	        '-': 6,
	        '&': 7,
	        '<': 8,
	        '=': 8,
	        '>': 8,
	        '>=': 8,
	        '<=': 8,
	        '<>': 8
	    };
	
	    Calc.FormulaTokenType = {
	        Operand: 0,
	        Function: 1,
	        Subexpression: 2,
	        Argument: 3,
	        OperatorPrefix: 4,
	        OperatorInfix: 5,
	        OperatorPostfix: 6,
	        Whitespace: 7
	    };
	
	    Calc.FormulaTokenSubtype = {
	        Nothing: 0,
	        Start: 1,
	        Stop: 2,
	        Text: 3,
	        Number: 4,
	        Logical: 5,
	        Error: 6,
	        RangeOrName: 7
	       
	       
	       
	       
	       
	    };
	
	    var numberDecimalSeparator = '.', listSeparator = ',', arrayGroupSeparator = ';', arrayListSeparator = ',';
	
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	    var categoryForLatin1 = [
	        0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe,
	        0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe,
	        0xb, 0x18, 0x18, 0x18, 0x1a, 0x18, 0x18, 0x18, 0x14, 0x15, 0x18, 0x19, 0x18, 0x13, 0x18, 0x18,
	        0x8, 0x8, 0x8, 0x8, 0x8, 0x8, 0x8, 0x8, 0x8, 0x8, 0x18, 0x18, 0x19, 0x19, 0x19, 0x18,
	        0x18, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
	        0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x14, 0x18, 0x15, 0x1b, 0x12,
	        0x1b, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1,
	        0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x14, 0x19, 0x15, 0x19, 0xe,
	        0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe,
	        0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe, 0xe,
	        0xb, 0x18, 0x1a, 0x1a, 0x1a, 0x1a, 0x1c, 0x1c, 0x1b, 0x1c, 0x1, 0x16, 0x19, 0x13, 0x1c, 0x1b,
	        0x1c, 0x19, 0xa, 0xa, 0x1b, 0x1, 0x1c, 0x18, 0x1b, 0xa, 0x1, 0x17, 0xa, 0xa, 0xa, 0x18,
	        0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
	        0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x19, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1,
	        0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1,
	        0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x19, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1
	    ];
	
	    function isLatin1(cc) {
	        return cc <= 0x00ff;
	    }
	
	    function isAscii(cc) {
	        return cc <= 0x007f;
	    }
	
	    var isDigit = Calc.isDigit = function (c) {
	       
	       
	       
	       
	        return c >= 48 && c <= 57;
	    };
	    Calc._isLetter = function (c) {
	        var cc = c.charCodeAt(0);
	        if (!isLatin1(cc)) {
	            return true;
	        }
	       
	        if (!isAscii(cc)) {
	            return categoryForLatin1[cc] === 0  || categoryForLatin1[cc] === 1 ;
	        }
	        cc |= 0x20;
	       
	        return (cc >= 96 && cc <= 122);
	    };
	    var isLetterOrDigit = Calc._isLetterOrDigit = function (c) { 
	        var cc = c.charCodeAt(0);
	        if (!isLatin1(cc)) {
	            return true;
	        }
	       
	        if (!isAscii(cc)) {
	            return categoryForLatin1[cc] === 0  || categoryForLatin1[cc] === 1 ;
	        }
	        if (cc <= 57) {
	            return cc >= 48;
	        }
	        cc |= 0x20;
	       
	        return (cc >= 96 && cc <= 122);
	    };
	
	    Calc.isNumber = function (c) {
	        var cc = c.charCodeAt(0);
	       
	       
	       
	       
	        if (!isAscii(cc)) {
	            return categoryForLatin1[cc] === 8  || categoryForLatin1[cc] === 0x0a ;
	        }
	       
	        return cc >= 48 && cc <= 57;
	    };
	
	    function readString(formula, startIndex, startSign, endSign, escapeSign, throwError) {
	        var len = formula.length;
	        var startSignCount = (startSign === endSign) ? 0 : 1;
	        var text = [], skipCount = 0;
	        for (var index = startIndex + 1; index < len; index++) {
	            var currentChar = formula[index];
	            if (currentChar === escapeSign) {
	                text.push(currentChar);
	                index++;
	                skipCount++;
	                currentChar = formula[index];
	            }
	            if (currentChar === startSign) {
	                startSignCount++;
	               
	               
	               
	            }
	            if (currentChar === endSign) {
	                startSignCount--;
	                if (startSign === endSign && index + 2 < len && formula[index + 1] === startSign) {
	                    text.push(startSign);
	                    index++;
	                    skipCount++;
	                } else if (startSignCount !== 0) {
	                    text.push(currentChar);
	                } else {
	                    return {result: text, endIndex: index, skipCount: skipCount};
	                }
	            } else {
	                text.push(currentChar);
	            }
	        }
	        if (throwError) {
	            throwParseCharError(endSign, startSign, Exp_NoSyntax);
	        }
	    }
	
	    function readError(formula, startIndex, throwError) {
	        var len = formula.length;
	        var surplusLen = len - startIndex;
	        for (var i = 0; i < ErrorList.length; i++) {
	            var err = ErrorList[i], errLength = err.length;
	            if (startIndex + errLength <= len) {
	                var errStr = formula.slice(startIndex, startIndex + errLength);
	                if (errLength <= surplusLen && (err === errStr.join('').toUpperCase())) {
	                    return {result: errStr, endIndex: startIndex + errLength - 1};
	                }
	            }
	        }
	        if (throwError) {
	            throwParseCharError([formula[startIndex], startIndex]);
	        }
	    }
	
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	    function _readNumber(str, startIndex, decimalSeparator) {
	        var len = str.length;
	        var state = 0 , num = [];
	        for (var i = startIndex; i < len; i++) {
	            var currentChar = str[i];
	            if (isDigit(currentChar.charCodeAt(0))) {
	                if (state === 0 ) {
	                    state = 2 ;
	                } else if (state === 3 ) {
	                    state = 4 ;
	                } else if (state === 1 ) {
	                    state = 2 ;
	                } else if (state === 5  || state === 6 ) {
	                    state = 7 ;
	                }
	                num.push(currentChar);
	            } else if (currentChar === decimalSeparator) {
	                if (state === 2 ) {
	                    state = 4 ;
	                } else if (state === 0  || state === 1 ) {
	                    state = 3 ;
	                } else {
	                    return {};
	                }
	                num.push('.');
	            } else if (currentChar === '+' || currentChar === '-') {
	                if (state === 0 ) {
	                    state = 1 ;
	                } else if (state === 5 ) {
	                    state = 6 ;
	                } else {
	                    return {num: num, endIndex: i - 1};
	                }
	                num.push(currentChar);
	            } else if (currentChar === 'E' || currentChar === 'e') {
	                if (state === 2  || state === 4 ) {
	                    state = 5 ;
	                } else {
	                    return {};
	                }
	                num.push(currentChar);
	            } else if (state === 2  || state === 4  || state === 7 ) {
	                return {num: num, endIndex: i - 1};
	            }
	        }
	        if (state === 2  || state === 4  || state === 7 ) {
	            return {num: num, endIndex: len - 1};
	        }
	        return {};
	    }
	
	    var conatArray = function (arr1, arr2) {
	        arr1.push.apply(arr1, arr2);
	        return arr1;
	    };
	
	    var FormulaToken = Calc.FormulaToken = (function () {
	        function FormulaToken(value, type, index, endIndex, subType) {
	            subType = subType || 0 ;
	            var self = this;
	            self._value = value;
	            var stringValue = Array.isArray(value) ? value.join('') : value;
	            self._type = type;
	            self._index = index;
	            self._endIndex = endIndex || index + value.length - 1;
	            if (type === 0 && subType === 0 && value) {
	                var lowValue = stringValue.toUpperCase();
	                if (lowValue === const_true || lowValue === const_false) {
	                    subType = 5;
	                    
	                    stringValue = lowValue;
	                }
	            } else if (type === 1 && stringValue !== const_array) {
	                stringValue = stringValue.toUpperCase();
	            }
	            self._stringValue = stringValue;
	            self._subType = subType;
	            self._children = [];
	
	           
	            self.type = function () {
	                return self._type;
	            };
	
	            self.subType = function () {
	                return self._subType;
	            };
	
	            self.stringValue = function () {
	                return self._stringValue;
	            };
	        }
	
	        return FormulaToken;
	    })();
	
	    var TokenResolver = Calc.TokenResolver = (function () {
	        function TokenResolver(priority) {
	            this.priority = priority || 5000;
	        }
	
	        TokenResolver.prototype.resolveToken = function (context, builder, originalTokens, currentTokenIndex) {
	
	        };
	        TokenResolver.prototype.unparse = function (context, parser, expression, formulaChars) {
	
	        };
	        return TokenResolver;
	    })();
	
	    var preOperaterTypesMap = {
	        '+': 0 ,
	        '-': 1 
	    };
	    var operaterTypesMap = Calc.operaterTypesMap = {
	        ':': 15 ,
	        ',': 16 ,
	        '+': 3 ,
	        '-': 4 ,
	        '*': 5 ,
	        '/': 6 ,
	        '^': 7 ,
	        '%': 2 ,
	        '&': 8 ,
	        '=': 9 ,
	        '<': 11 ,
	        '<>': 10 ,
	        '<=': 12 ,
	        '>': 13 ,
	        '>=': 14 
	    };
	
	    Calc.Parser = (function () {
	        function Parser() {
	           
	           
	           
	           
	        }
	
	        Parser.prototype = {
	            setParserOption: function (culture) {
	               
	               
	               
	               
	               
	               
	               
	               
	               
	                var option, cultureOption;
	                if (culture === keyword_undefined || !Common.CultureManager._getCultureInfo()) {
	                    option = {};
	                    cultureOption = option;
	                } else {
	                    cultureOption = culture.NumberFormat ? culture.NumberFormat : Common.CultureManager._getCultureInfo().NumberFormat;
	                    option = culture ? cultureOption : {};
	                }
	                listSeparator = Parser.listSeparator = option.listSeparator || ',';
	                numberDecimalSeparator = option.numberDecimalSeparator || '.';
	                if (culture || !Parser.numberDecimalSeparator) {
	                    Parser.numberGroupSeparator = cultureOption.numberGroupSeparator || ',';
	                    Parser.numberDecimalSeparator = cultureOption.numberDecimalSeparator || '.';
	                }
	                arrayGroupSeparator = Parser.arrayGroupSeparator = option.arrayGroupSeparator || ';';
	                arrayListSeparator = Parser.arrayListSeparator = option.arrayListSeparator || ',';
	            },
	           
	            parse: function (context, formula) {
	                this.setParserOption(context.culture);
	                var charArray = formula.split('');
	                this._charArray = charArray;
	               
	               
	               
	               
	                var tokens = this.parseToTokens(context, charArray, !context.ignoreError);
	                return this.buildExpressionTree(context, tokens, !context.ignoreError);
	            },
	            unparse: function (context, expression, formulaCharArray) {
	                formulaCharArray = formulaCharArray || [];
	                this._unparseCore(context, expression, formulaCharArray);
	                return formulaCharArray.join('');
	            },
	            _unparseCore: function (context, expression, formulaCharArray) {
	                this.setParserOption(context.culture);
	                var resolvers = context.getResolvers();
	                for (var i = 0; i < resolvers.length; i++) {
	                    if (resolvers[i].unparse(context, this, expression, formulaCharArray)) {
	                        break;
	                    }
	                }
	            },
	
	            parseToTokens: function (parserContext, charArray, throwError) {
	                if (throwError === void 0) {
	                    throwError = true;
	                }
	                var self = this;
	                var addOperand = function (tokenList, valueArray, start) {
	                    if (valueArray.length > 0) {
	                        tokenList.push(new FormulaToken(valueArray, 0 , start));
	                        return [];
	                    }
	                    return valueArray;
	                };
	                var len = charArray.length;
	                var tokens1 = [];
	                var stack = [];
	                var stackEnd = -1;
	                var value = [];
	                var currentToken;
	                var tokenStartIndex;
	                var startIndex = 0, endIndex;
	                var stackToken;
	                while (startIndex < len && charArray[startIndex] === ' ') {
	                    startIndex++;
	                }
	                if (charArray[startIndex] === '=') {
	                    startIndex++;
	                }
	                tokenStartIndex = startIndex;
	                for (var index = startIndex; index < len; index++) {
	                    var currentChar = charArray[index];
	                    var currentCharCode = currentChar.charCodeAt();
	                    var rs;
	                    if (currentCharCode >= 97 && currentCharCode <= 122
	                        || currentCharCode >= 65 && currentCharCode <= 90) {
	                        value.push(currentChar);
	                    } else if (currentCharCode === 34) {
	                       
	                        rs = readString(charArray, index, '"', '"', '', throwError);
	                        if (rs) {
	                            var token = new FormulaToken(rs.result, 0 , index, index + rs.result.length + 2, 3 );
	                            if (rs.skipCount) {
	                                token._fullString = charArray.slice(index, rs.endIndex + 1).join('');
	                                token._endIndex += rs.skipCount;
	                            }
	                            tokens1.push(token);
	                            index = rs.endIndex;
	                            tokenStartIndex = index + 1;
	                        } else {
	                            conatArray(value, charArray.slice(index, len));
	                            index = len - 1;
	                        }
	                    } else if (currentCharCode === 39) {
	                       
	                        rs = readString(charArray, index, '\'', '\'', '', throwError);
	                        if (rs) {
	                            value.push('\'');
	                            conatArray(value, rs.result);
	                            value.push('\'');
	                            index = rs.endIndex;
	                        } else {
	                            value.push('\'');
	                            index = len - 1;
	                        }
	                    } else if (currentCharCode === 91) {
	                       
	                       
	                        rs = readString(charArray, index, '[', ']', '\'', throwError);
	                        if (rs) {
	                            value.push('[');
	                            conatArray(value, rs.result);
	                            value.push(']');
	                            index = rs.endIndex;
	                        } else {
	                            if (self._isR1C1 && value.length === 0 && (value[0] === 'R' || value[0] === 'r' || value[0] === 'C' || value[0] === 'c')) {
	                                continue;
	                            }
	                            conatArray(value, charArray.slice(index, len));
	                            index = len - 1;
	                        }
	                    } else if (currentCharCode === 13 || currentChar === 10) {
	                        continue;
	                    } else if (currentCharCode === 35) {
	                       
	                        var re = readError(charArray, index);
	                        if (re) {
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                            tokens1.push(new FormulaToken(re.result, 0 , index, index + re.result.length - 1, 6 ));
	                            tokenStartIndex = index + 1;
	                           
	                            index = re.endIndex;
	                        } else {
	                            value.push(currentChar);
	                        }
	                    } else if (currentCharCode === 33) {
	                        if (value.length === 0) {
	                           
	                        }
	                        var tokenLength = tokens1.length;
	                        if (tokenLength > 0 && tokens1[tokenLength - 1]._type === 0) {
	                            var lastToken = tokens1[tokenLength - 1];
	                            lastToken._value.push.apply(lastToken._value, value);
	                            tokens1[tokenLength - 1] = new FormulaToken(lastToken._value, 0 , lastToken._index, index, 12 );
	                        } else {
	                            tokens1.push(new FormulaToken(value, 0 , tokenStartIndex, index, 12 ));
	                        }
	                        value = [];
	                        tokenStartIndex = index + 1;
	                    } else if (currentCharCode === 43 || currentCharCode === 45) {
	                        var previous = tokens1.length === 0 ? null : tokens1[tokens1.length - 1];
	                        if (value.length !== 0) {
	                            tokens1.push(new FormulaToken(value, 0 , tokenStartIndex));
	                            tokens1.push(new FormulaToken(currentChar, 5 , index));
	                            value = [];
	                            tokenStartIndex = index + 1;
	                        } else {
	                            if (previous && previous._type === 7 ) {
	                                tokens1.pop();
	                            }
	                            if (previous && (previous._subType === 2  || previous._type === 6  || previous._type === 0 )) {
	                               
	                                tokens1.push(new FormulaToken(currentChar, 5 , index));
	                                tokenStartIndex = index + 1;
	                            } else {
	                                tokens1.push(new FormulaToken(currentChar, 4 , index));
	                                tokenStartIndex = index + 1;
	                            }
	                        }
	                    } else if (currentChar === numberDecimalSeparator || isDigit(currentCharCode)) {
	                        if (value.length > 0) {
	                            value.push(currentChar);
	                        } else {
	                            var isNum = _readNumber(charArray, index, numberDecimalSeparator);
	                            if (isNum.num) {
	                                endIndex = isNum.endIndex;
	                                var num = isNum.num;
	
	                               
	                                if (endIndex <= len - 2 && charArray[endIndex + 1] === '!') {
	                                    conatArray(value, num);
	                                    tokenStartIndex = endIndex;
	                                } else {
	                                    tokens1.push(new FormulaToken(num, 0 , index, endIndex, 4 ));
	                                    tokenStartIndex = endIndex + 1;
	                                }
	                                index = endIndex;
	                            } else {
	                                value.push(currentChar);
	                            }
	                        }
	                    } else if (currentCharCode === 123) {
	                        if (value.length > 0 && throwError) {
	                            throwParseCharError(currentChar, index);
	                        }
	                        currentToken = new FormulaToken(const_array, 1 , index, index, 1 );
	                        tokens1.push(currentToken);
	                        stack[++stackEnd] = currentToken;
	                        tokenStartIndex = index + 1;
	                    } else if (currentChar === arrayGroupSeparator && stackEnd >= 0 && stack[stackEnd].value === const_array) {
	                       
	                        value = addOperand(tokens1, value, tokenStartIndex);
	                        if (stackEnd < 0 && throwError) {
	                            throwParseCharError(currentChar, index);
	                        }
	                        tokens1.push(new FormulaToken(arrayGroupSeparator, 3 , index, index));
	                        tokenStartIndex = index + 1;
	                    } else if (currentCharCode === 125) {
	                        value = addOperand(tokens1, value, tokenStartIndex);
	                        if (endIndex < 0 && throwError) {
	                            throwParseCharError(currentChar, index);
	                        }
	                        stackToken = stack[stackEnd--];
	                        stackToken = new FormulaToken(currentChar, stackToken._type, index, index, 2 );
	                        tokens1.push(stackToken);
	                        tokenStartIndex = index + 1;
	                    } else if (currentCharCode === 32) {
	                        value = addOperand(tokens1, value, tokenStartIndex);
	                        tokenStartIndex = index + 1;
	                    } else if (currentChar === listSeparator || currentChar === arrayListSeparator || currentChar === arrayGroupSeparator) {
	                       
	                        value = addOperand(tokens1, value, tokenStartIndex);
	                        if (stackEnd < 0 || stack[stackEnd]._type !== 1 ) {
	                            tokens1.push(new FormulaToken(listSeparator, 5 , index, index, 10 ));
	                        } else {
	                            tokens1.push(new FormulaToken(currentChar, 3 , index, index));
	                        }
	                        tokenStartIndex = index + 1;
	                    } else if (currentCharCode === 37) {
	                        value = addOperand(tokens1, value, tokenStartIndex);
	                        tokens1.push(new FormulaToken(charArray[index], 6 , index, index));
	                        tokenStartIndex = index + 1;
	                    } else if ((index + 2) <= len && operaterTypesMap[currentChar + charArray[index + 1]]) {
	                        value = addOperand(tokens1, value, tokenStartIndex);
	                        tokens1.push(new FormulaToken(charArray.slice(index, index + 2), 5 , index, index + 1, 5 ));
	                        index++;
	                        tokenStartIndex = index + 1;
	                    } else if (operaterTypesMap[currentChar]) {
	                       
	                        value = addOperand(tokens1, value, tokenStartIndex);
	                        tokens1.push(new FormulaToken(currentChar, 5 , index, index));
	                        tokenStartIndex = index + 1;
	                    } else if (currentChar === '(') {
	                       
	                        if (value.length > 0) {
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	
	                            currentToken = new FormulaToken(value, 1 , tokenStartIndex, index, 1 );
	                            value = [];
	                        } else {
	                            currentToken = new FormulaToken(currentChar, 2 , index, index, 1 );
	                        }
	                        tokens1.push(currentToken);
	                        stack[++stackEnd] = currentToken;
	                        tokenStartIndex = index + 1;
	                    } else if (currentChar === ')') {
	                        value = addOperand(tokens1, value, tokenStartIndex);
	                        if (stackEnd < 0) {
	                            throwError && throwParseCharError(currentChar, index);
	                            continue;
	                        }
	                        stackToken = stack[stackEnd--];
	                        stackToken = new FormulaToken(currentChar, stackToken._type, index, index, 2 );
	                        tokens1.push(stackToken);
	                        tokenStartIndex = index + 1;
	                    } else if (currentChar === ':') {
	                       
	                       
	                       
	                       
	                       
	                       
	                       
	                       
	                        value = addOperand(tokens1, value, tokenStartIndex);
	                        tokens1.push(new FormulaToken(currentChar, 5 , index, index, 11 ));
	                        tokenStartIndex = index + 1;
	                    } else if (currentChar === '\r' || currentChar === '\n') {
	                       
	                    } else {
	                        value.push(currentChar);
	                    }
	                }
	                addOperand(tokens1, value, tokenStartIndex);
	               
	                return tokens1;
	            },
	            buildExpressionTree: function (parserContext, tokens, throwError) {
	                var expressions = this._buildExpressionNodes(parserContext, tokens, throwError);
	                var expr = this._buildExpressionsToTree(parserContext, expressions, throwError);
	                if (throwError) {
	                    this._checkExpression(expr);
	                }
	                return expr;
	            },
	            _checkExpression: function (expr) {
	                while (expr.type === 10 ) {
	                    expr = expr.value;
	                }
	                var self = this;
	                if (expr.type === 9 ) {
	                    if (!expr.value) {
	                        throwParseError();
	                    }
	                    self._checkExpression(expr.value);
	                    expr.value2 && self._checkExpression(expr.value2);
	                } else if (expr.type === 7 ) {
	                    var args = expr.arguments, count = args.length;
	                    var fn = expr.function;
	                    if (fn) {
	                        var min = fn.minArgs, max = fn.maxArgs;
	                        if (count < min || count > max) {
	                            throwParseError();
	                        }
	                    }
	                    for (var i = 0; i < count; i++) {
	                        var subExpr = args[i];
	                        if(!subExpr) {
	                            throwParseError();
	                        }
	                        self._checkExpression(subExpr);
	                    }
	                }
	            },
	            _buildExpressionsToTree: function (parserContext, expressions, throwError) {
	               
	               
	                var binaryExprs = this._parseToBinaryOperatorList(parserContext, expressions, throwError);
	                var currentExpression, lastExpression, nextExpression, index;
	
	               
	                for (index = 3; index < binaryExprs.length;) {
	                    var nextToken = binaryExprs[index];
	                    var currentToken = binaryExprs[index - 2];
	                    if (currentToken.type !== 9 ) {
	                        throwParseError();
	                    }
	                    if (nextToken && nextToken.type === 9 ) {
	                       
	                       
	                       
	                       
	                       
	                       
	                       
	                       
	                       
	                       
	                       
	                       
	                       
	                       
	                       
	                       
	                       
	                        while (index >= 3 &&
	                        binaryOperatorPriorities[nextToken.value] >= binaryOperatorPriorities[currentToken.value]) {
	                           
	                            lastExpression = binaryExprs[index - 3];
	                            nextExpression = binaryExprs[index - 1];
	                            currentExpression = Calc._createOperatorExpression(currentToken.operatorType, lastExpression, nextExpression);
	                            binaryExprs.splice(index - 3, 3, currentExpression);
	                            index -= 2;
	                            if (index >= 3) {
	                                currentToken = binaryExprs[index - 2];
	                            }
	                        }
	                        index += 2;
	                    } else {
	                        index++;
	                    }
	                }
	                if (binaryExprs.length === 1) {
	                    return binaryExprs[0];
	                }
	               
	               
	               
	                for (index = binaryExprs.length - 2; index > 0; index -= 2) {
	                    lastExpression = binaryExprs[index - 1];
	                    nextExpression = binaryExprs[index + 1];
	                    if (binaryExprs[index].type !== 9 ) {
	                        throwParseError();
	                    }
	                    currentExpression = Calc._createOperatorExpression(binaryExprs[index].operatorType, lastExpression, nextExpression);
	                    binaryExprs.splice(index - 1, 3, currentExpression);
	                }
	                return currentExpression;
	            },
	            _parseToBinaryOperatorList: function (context, expressions, throwError) {
	                expressions = Array.isArray(expressions) ? expressions : [expressions];
	                var result = [], length = expressions.length;
	                for (var i = 0; i < length; i++) {
	                    var expr = expressions[i], newExpr = expr;
	                    if (expr.type === 9 ) {
	                        if (expr.operatorType === 0  || expr.operatorType === 1 ) {
	                            if (i === length - 1) {
	                                throwError && throwParseError();
	                            } else {
	                                var endIndex = i;
	                                while (expressions[endIndex].type === 9 && expressions[endIndex].operatorType <= 1) {
	                                    endIndex++;
	                                }
	                                var operated = this._buildExpressionsToTree(context, expressions[endIndex]);
	                                for (var index = endIndex - 1; index >= i; index--) {
	                                    newExpr = Calc._createOperatorExpression(expressions[index].operatorType, operated);
	                                    operated = newExpr;
	                                }
	                                newExpr = operated;
	                                i = endIndex;
	                            }
	                        } else if (expr.operatorType === 2 ) {
	                            if (i === 0) {
	                                throwError && throwParseError();
	                            } else {
	                                newExpr = Calc._createOperatorExpression(expr.operatorType, this._buildExpressionsToTree(context, result[result.length - 1]));
	                                result[result.length - 1] = newExpr;
	                                continue;
	                            }
	                        }
	                    } else if (expr.type === 10 ) {
	                        expr.value = this._buildExpressionsToTree(context, expr.value);
	                        newExpr = expr;
	                    } else if (expr.type === 7 ) {
	                       
	                        var argIndex = 0, functionArgs = expr.arguments, newArgs = [], argExprs = [];
	                        if (functionArgs.length > 0) {
	                            for (var j = 0; j <= functionArgs.length; j++) {
	                                var arg = functionArgs[j];
	                                if (j === functionArgs.length || arg.type === 0  && arg.value === listSeparator) {
	                                    if (argIndex === j) {
	                                        newArgs.push(new Expression(11 ));
	                                    } else {
	                                        newArgs.push(this._buildExpressionsToTree(context, argExprs));
	                                    }
	                                    argIndex = j + 1;
	                                    argExprs = [];
	                                } else {
	                                    argExprs.push(arg);
	                                }
	                            }
	                            expr.arguments = newArgs;
	                        }
	                        newExpr = expr;
	                    }
	                    result.push(newExpr);
	                }
	                return result;
	            },
	            _buildExpressionNodes: function (parserContext, tokens1, throwError) {
	                var expressions = [];
	                for (var i = 0, length = tokens1.length; i < length;) {
	                    i = this.resolveToken(parserContext, tokens1, expressions, i, throwError);
	                }
	                return expressions;
	            },
	            resolveToken: function (parserContext, tokens, expressions, currentTokenIndex, throwError) {
	                var currentToken = tokens[currentTokenIndex];
	                var resolvers = parserContext.getResolvers();
	                for (var resolveIndex = 0; resolveIndex < resolvers.length; resolveIndex++) {
	                    var result = resolvers[resolveIndex].resolveToken(parserContext, this, tokens, currentTokenIndex);
	                    if (result) {
	                        var expr = result.expr;
	                        var priviousIndex = currentTokenIndex - 1;
	                        if (expr && result.index !== keyword_undefined) {
	                            currentTokenIndex = result.index - 1;
	                        } else {
	                            expr = result;
	                        }
	                       
	                       
	                        var priviousExpr = expressions.length > 0 ? expressions[expressions.length - 1] : keyword_null;
	                        if (priviousExpr && expr.type !== 0  && expr.type !== 7  && expr.type < 9 
	                            && priviousExpr.type !== 0  && priviousExpr.type !== 7  && priviousExpr.type < 9 ) {
	                            var priviousEnd = tokens[priviousIndex]._endIndex;
	                            if (priviousEnd < currentToken._index - 1) {
	                                expressions.push(Calc._createOperatorExpression(17 , ' '));
	                            }
	                        }
	                        expressions.push(expr);
	                        break;
	                    }
	                }
	                return currentTokenIndex + 1;
	            },
	            resolveSubTokens: function (parserContext, tokens, currentTokenIndex, throwError) {
	                var subExpressions = [];
	                while (currentTokenIndex < tokens.length && tokens[currentTokenIndex]._subType !== 2 ) {
	                    currentTokenIndex = this.resolveToken(parserContext, tokens, subExpressions, currentTokenIndex, throwError);
	                }
	                return {exprs: subExpressions, index: currentTokenIndex + 1};
	            }
	        };
	        return Parser;
	    })();
	
	
	    Calc.ParserContext = (function () {
	        
	        function ParserContext(source, useR1C1, baseIdentity, option) {
	            var self = this;
	            self._toStandard = false;
	            self.ignoreError = false;
	            self.useR1C1 = useR1C1;
	            self.baseIdentity = baseIdentity;
	            self.option = option;
	            self.source = source;
	        }
	
	        ParserContext.prototype = {
	            
	            getExternalSource: function (bookName, sheetName) {
	                var service = this.source.getCalcService();
	                var models = service.getAllSourceModels();
	                for (var i = 0; i < models.length; i++) {
	                    if (stringHelper._compareStringIgnoreCase(models[i].getSource().getName(), sheetName)) {
	                        return models[i].getSource();
	                    }
	                }
	                return keyword_null;
	            },
	            
	            getExternalSourceToken: function (source) {
	                return source.getName();
	            },
	            setSource: function (source) {
	                this.source = source;
	            },
	            getResolvers: function () {
	                var service = (this.source || this._sheet).getCalcService();
	                return service && service.getResolvers();
	            },
	            addResolver: function (resolve) {
	                var service = (this.source || this._sheet).getCalcService();
	                service && service.addResolver(resolve);
	            },
	            getFunction: function (name) {
	                return this.source && this.source.getCustomFunction(name) || Calc.Functions.findGlobalFunction(name);
	            }
	        };
	        return ParserContext;
	    })();
	
	   
	   
	   
	    function getValidSources(context, charArray, charArray2) {
	        if (!charArray || charArray.length === 0
	            || needConvertToError(context, charArray) || needConvertToError(context, charArray2)) {
	            return [];
	        }
	        var result = charArray;
	        if (charArray2) {
	            result.push(':');
	            for (var i = 0; i < charArray2.length; i++) {
	                result.push(charArray2[i]);
	            }
	        }
	        return result;
	    }
	
	    function needConvertToError(context, nameArray) {
	        if (!nameArray || nameArray.length === 0 || !context._toStandard) {
	            return false;
	        }
	        var startIndex = nameArray[0] === '\'' ? 1 : 0;
	        return nameArray[startIndex] === '[' && nameArray.indexOf(']') > startIndex;
	    }
	
	    var DefaultTokenResolver = Calc.DefaultTokenResolver = function () {
	        TokenResolver.call(this);
	    };
	    inherit(DefaultTokenResolver, TokenResolver);
	    extend(DefaultTokenResolver.prototype, {
	        resolveToken: function (context, parser, tokens, currentTokenIndex) {
	            var currentToken = tokens[currentTokenIndex], stringValue = currentToken._stringValue, valueArray = currentToken._value;
	            var expr, arrayRowIndex, currentTokenType = currentToken._type;
	            var source = null, value, subResult;
	            var currentTokenSubType = currentToken._subType;
	            if (currentTokenType === 0  && currentTokenSubType === 12 ) {
	                var startSourceString;
	                if (stringValue) {
	                    startSourceString = stringValue;
	                    if (startSourceString.charAt(0) === '\'') {
	                        startSourceString = startSourceString.substring(1, startSourceString.length - 1);
	                    }
	                }
	                currentTokenIndex++;
	
	                if (startSourceString) {
	                    source = context.getExternalSource('', startSourceString);
	                }
	                currentToken = tokens[currentTokenIndex];
	                if (!currentToken) {
	                    expr = new Expression(8 );
	                    expr.value = stringValue;
	                    return expr;
	                }
	                stringValue = currentToken._stringValue;
	            }
	
	           
	            if (currentTokenType === 0 ) {
	                if (currentToken._subType === 0 ) {
	                    value = stringValue.toUpperCase();
	                    if (value === const_true || value === const_false) {
	                        currentToken._subType = 5 ;
	                        currentToken._stringValue = value;
	                        expr = new Expression(4 );
	                        expr.value = value === const_true;
	                    } else {
	                        expr = new Expression(8 );
	                        expr.value = stringValue;
	                    }
	                } else if (currentToken._subType === 4 ) {
	                    expr = new Expression(2 );
	                    expr.value = parseFloat(stringValue);
	                    expr.originalValue = stringValue;
	                } else if (currentToken._subType === 3 ) {
	                    expr = new Expression(3 );
	                    expr.value = stringValue;
	                } else if (currentToken._subType === 5 ) {
	                    expr = new Expression(4 );
	                    expr.value = stringValue === const_true;
	                } else if (currentToken._subType === 6 ) {
	                    expr = new Expression(5 );
	                    expr.value = Calc.CalcError.parse(stringValue);
	                } else if (currentToken._subType === 7 ) {
	                    expr = new Expression(8 );
	                    expr.value = stringValue;
	                }
	            } else if (currentTokenType === 1 ) {
	                if (stringValue === const_array) {
	                    expr = new Expression(6 );
	                    currentTokenIndex++;
	                    value = [[]];
	                    arrayRowIndex = 0;
	                    var arrayColumnCount = 0, currentArrayColumnCount = 0;
	                    while (currentTokenIndex < tokens.length && tokens[currentTokenIndex]._subType !== 2 ) {
	                        currentToken = tokens[currentTokenIndex];
	
	                       
	                        if (currentTokenIndex < tokens.length - 1 && currentToken._type === 4 && currentToken._stringValue === "-" &&
	                            tokens[currentTokenIndex + 1]._subType === 4) {
	                            currentTokenIndex++;
	                            currentToken = tokens[currentTokenIndex];
	                            valueArray.unshift("-");
	                            currentToken._stringValue = "-" + currentToken._stringValue;
	                        }
	                        if (currentToken._type === 3 ) {
	                            if (currentToken._stringValue === arrayGroupSeparator) {
	                                if (arrayColumnCount !== currentArrayColumnCount) {
	                                    throw stringHelper._format(sR().Exp_InvalidArrayColumns, [currentToken._index]);
	                                }
	                                value.push([]);
	                                arrayRowIndex++;
	                                currentArrayColumnCount = 0;
	                            }
	                        } else if (currentToken._type === 0  &&
	                            (currentToken._subType === 4  || currentToken._subType === 3 
	                            || currentToken._subType === 5  || currentToken._subType === 6 )) {
	                            var tokenValue = currentToken._stringValue;
	                            if (currentToken._subType === 4 ) {
	                                tokenValue = parseFloat(tokenValue);
	                            } else if (currentToken._subType === 5 ) {
	                                tokenValue = tokenValue.toUpperCase() === 'TRUE';
	                            } else if (currentToken._subType === 6 ) {
	                                tokenValue = Calc.CalcError.parse(tokenValue);
	                            }
	                            value[arrayRowIndex].push(tokenValue);
	                            arrayRowIndex === 0 && arrayColumnCount++;
	                            currentArrayColumnCount++;
	                        } else {
	                            throw sR().Exp_InvalidArray;
	                        }
	                        currentTokenIndex++;
	                    }
	                    if (arrayColumnCount !== currentArrayColumnCount) {
	                        throw stringHelper._format(sR().Exp_InvalidArrayColumns, [currentToken._index]);
	                    }
	                    currentTokenIndex++;
	                    expr.value = new Calc.CalcArray(value);
	                    return {expr: expr, index: currentTokenIndex};
	                } else if (valueArray.length > 0) { 
	                    if (valueArray[0] === '@') {
	                        currentToken._stringValue = valueArray.slice(1).join('');
	                        stringValue = currentToken._stringValue;
	                    }
	                    expr = new Expression(7 );
	                    expr.functionName = stringValue;
	                    expr.function = context.getFunction(expr.functionName) || Calc.Functions.findGlobalFunction(expr.functionName);
	                    subResult = parser.resolveSubTokens(context, tokens, currentTokenIndex + 1);
	                    if (subResult) {
	                        expr.arguments = subResult.exprs;
	                        return {expr: expr, index: subResult.index};
	                    }
	                    expr.arguments = [];
	                    return expr;
	                }
	            } else if (currentTokenType === 4 
	                || currentTokenType === 6 
	                || currentTokenType === 5 ) {
	                expr = Calc._createOperatorExpression(currentTokenType === 4 ? preOperaterTypesMap[stringValue] : operaterTypesMap[stringValue], stringValue);
	            } else if (currentTokenType === 2 ) {
	                expr = new Expression(10 );
	                subResult = parser.resolveSubTokens(context, tokens, currentTokenIndex + 1);
	                if (subResult) {
	                    expr.value = subResult.exprs;
	                    return {expr: expr, index: subResult.index};
	                }
	                throwParseError();
	            } else if (currentTokenType === 3 ) {
	                expr = new Expression(0 );
	                expr.value = stringValue;
	
	            }
	
	            if (source && expr) {
	                expr.source = source;
	               
	               
	               
	               
	               
	               
	                expr = { expr: expr, index: currentTokenIndex + 1 };
	            }
	
	            return expr;
	        },
	        unparse: function (context, parser, expr, formula) {
	            var self = this;
	            if (expr.type === 6 
	                || expr.type === 4 
	                || expr.type === 2 
	                || expr.type === 5 
	                || expr.type === 3 ) {
	                self._unparseConstantExpression(context, expr, formula);
	            } else if (expr.type === 9 ) {
	                self._unparseOperatorExpressions(context, parser, expr, formula);
	            } else if (expr.type === 10 ) {
	                formula.push('(');
	                parser._unparseCore(context, expr.value, formula);
	                formula.push(')');
	            } else if (expr.type === 7 ) {
	                conatArray(formula, (expr.function && expr.function.name || expr.functionName).split(''));
	                formula.push('(');
	                for (var i = 0; i < expr.arguments.length; i++) {
	                    if (i !== 0) {
	                       
	                       
	                       
	                       
	                       
	                        formula.push(listSeparator);
	                    }
	                    parser._unparseCore(context, expr.arguments[i], formula);
	                }
	                formula.push(')');
	            } else if (expr.type === 1  || expr.type === 8 ) {
	                self.unparseRefenceExpressions(context, parser, expr, formula);
	                return true;
	            } else {
	                return false;
	            }
	            return true;
	        },
	        unparseSource: function (context, formula, source, endSource) {
	            if (context.getExternalSourceToken) {
	                if (source !== Calc.BangSource) {
	                    var sourceName = getValidSources(context, context.getExternalSourceToken(source).split(''), endSource && context.getExternalSourceToken(endSource).split(''));
	                    if (sourceName.length > 0) {
	                        formula.push.apply(formula, sourceName);
	                    } else {
	                        return false;
	                    }
	                }
	                formula.push('!');
	                return true;
	            }
	            return false;
	        },
	
	        unparseRefenceExpressions: function (context, parser, expr, formula) {
	            if (expr.source === Calc.BangSource ) {
	                formula.push('!');
	            } else if (expr.source) {
	                var isSourceValid = this.unparseSource(context, formula, expr.source, expr.endSource);
	                if (!isSourceValid) {
	                    formula.push('#', 'R', 'E', 'F', '!');
	                    return;
	                }
	            }
	            if (expr.type === 8 ) {
	                formula.push(expr.value);
	            }
	        },
	        _unparseOperatorExpressions: function (context, parser, expr, formula) {
	            var operatorType = expr.operatorType;
	            if (operatorType === 2  ) {
	                parser._unparseCore(context, expr.value, formula);
	                formula.push('%');
	            } else if (operatorType === 0  || operatorType === 1 ) {
	                formula.push(OperatorTypeStringMap[operatorType]);
	                parser._unparseCore(context, expr.value, formula);
	            } else {
	                parser._unparseCore(context, expr.value, formula);
	                formula.push(OperatorTypeStringMap[operatorType]);
	                parser._unparseCore(context, expr.value2, formula);
	
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	            }
	        },
	        _unparseConstantExpression: function (context, expr, formula) {
	            var errMsg = sR().Exp_InvalidArray;
	            if (expr.type === 3 ) {
	                formula.push('"');
	               
	                formula.push(stringHelper._replace(expr.value, '\"', '\"\"'));
	                formula.push('"');
	            } else if (expr.type === 2 ) {
	                var value = expr.originalValue || expr.value.toString();
	                if (numberDecimalSeparator !== '.') {
	                    value = value.replace('.', numberDecimalSeparator);
	                }
	                formula.push(value);
	            } else if (expr.type === 4 ) {
	                formula.push(expr.value ? const_true : const_false);
	            } else if (expr.type === 6 ) {
	                formula.push('{');
	                var array = expr.value;
	                if (array.getRowCount() <= 0) {
	                    throw errMsg;
	                }
	                for (var rowIndex = 0, rowCount = array.getRowCount(); rowIndex < rowCount; rowIndex++) {
	                    if (rowIndex >= 1) {
	                       
	                       
	                       
	                        formula.push(arrayGroupSeparator);
	                       
	                    }
	                    for (var columnIndex = 0, columnCount = array.getColumnCount(); columnIndex < columnCount; columnIndex++) {
	                        if (columnIndex !== 0) {
	                           
	                           
	                           
	                           
	                           
	                           
	                           
	                            formula.push(arrayListSeparator);
	                        }
	                        var v = array.getValue(rowIndex, columnIndex);
	                        if (v === keyword_undefined || v === keyword_null) {
	                            throw errMsg;
	                        }
	                        var valueType = typeof v;
	                       
	                       
	                       
	                        if (valueType === const_string) {
	                            formula.push('"');
	                            formula.push(v);
	                            formula.push('"');
	                        } else if (valueType === const_boolean) {
	                            formula.push(v ? const_true : const_false);
	                        } else if (valueType === 'number' && numberDecimalSeparator !== '.') {
	                            formula.push(v.toString().replace('.', numberDecimalSeparator));
	                        } else {
	                            formula.push(v.toString());
	                        }
	                    }
	                }
	                formula.push('}');
	            } else if (expr.type === 5  ) {
	                formula.push(expr.value.toString());
	            } else if (expr.type === 11  ) {
	            }
	        }
	    });
	
	
	}());

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Calc = __webpack_require__(1);
	    var Errors = Calc.Errors;
	    var Common = __webpack_require__(2);
	    var inherit = Common._Types._inherit;
	
	    var keyword_null = null, keyword_undefined = void 0, Math_pow = Math.pow, Math_min = Math.min, Math_max = Math.max, const_string = 'string', const_boolean = 'boolean';
	    var sR = function () {
	        return Common._getResource(Calc.SR)();
	    };
	    var Exp_Format = sR().Exp_Format;
	    var Convert = Calc.Convert, _tryToDouble = Convert._tryToDouble, _isError = Convert._isError, _toArray = Convert._toArray;
	
	    var CalcErrorsReference = Errors.Reference,
	        CalcErrorsValue = Errors.Value, CalcArray = Calc.CalcArray, CalcErrorsName = Errors.Name,
	        CalcErrorsNotAvailable = Errors.NotAvailable, CalcErrorsDivideByZero = Errors.DivideByZero;
	
	    function createRange(row, col, rowCount, colCount) {
	        return {row: row, col: col, rowCount: rowCount, colCount: colCount};
	    }
	
	   
	    var EvaluateContext = (function () {
	        
	        function EvaluateContext(source, identity, arrayFormula, arrayIdentity) {
	            var self = this;
	            self._asyncId = 0;
	            self._asyncCount = 0;
	           
	            self._expandArrayToMultiCallCount = 0;
	            self.source = source;
	            self.arrayFormulaMode = !!arrayFormula;
	            self.identity = identity || Calc._createCellIdentity(0, 0);
	            self.arrayIdentity = arrayIdentity;
	            self.row = arrayIdentity ? arrayIdentity.row : (self.identity.row || 0);
	            self.column = arrayIdentity ? arrayIdentity.col : (self.identity.col || 0);
	            self.rowOffset = arrayIdentity ? self.identity.row - arrayIdentity.row : self.row;
	            self.columnOffset = arrayIdentity ? self.identity.col - arrayIdentity.col : self.column;
	           
	           
	           
	           
	           
	           
	           
	           
	        }
	
	        return EvaluateContext;
	    })();
	
	    EvaluateContext.prototype = {
	        _getActualSource: function (source) {
	            return source === Calc.BangSource ? this.source : source;
	        },
	        
	        getValue: function (source, identity) {
	            if (!source) {
	                return CalcErrorsReference;
	            }
	            return this._getActualSource(source).getValue(identity);
	        },
	        
	        getReference: function (source, identity) {
	            if (!source) {
	                return CalcErrorsReference;
	            }
	            return this._getActualSource(source).getReference(identity);
	        },
	        getSheetRangeReference: function (id) {
	            if (!id || !id.source || !id.endSource) {
	                return CalcErrorsReference;
	            }
	            return this._getActualSource(id.source).getSheetRangeReference(id);
	        },
	        
	        getFunction: function (name) {
	            var self = this;
	            return self.source ? self.source.getCustomFunction(name) : keyword_null;
	        },
	        
	        getName: function (name) {
	            var self = this;
	            var nameInfo = self.source ? self.source.getCustomName(name) : keyword_null;
	            if (!nameInfo && self.source) {
	                var globalSource = self.source._getCalcServiceInternal().getGlobalSourceModel();
	                nameInfo = globalSource && globalSource.getSource().getCustomName(name);
	            }
	            return nameInfo;
	        },
	        _isExpandArrayToMultiCall: function () {
	            return this._expandArrayToMultiCallCount > 0;
	        },
	        _beginExpandArrayToMultiCall: function () {
	            this._expandArrayToMultiCallCount++;
	        },
	        _endExpandArrayToMultiCall: function () {
	            this._expandArrayToMultiCallCount--;
	        },
	        SetAsyncResult: function (ctx, value) {
	            this.source._getCalcServiceInternal()._evaluator.SetAsyncResult(ctx, value);
	        },
	        cloneFrom: function (context) {
	            var self = this;
	            self.acceptsReference = context.acceptsReference;
	           
	           
	            self.arrayFormulaMode = context.arrayFormulaMode;
	           
	           
	           
	           
	           
	           
	        }
	    };
	
	    Calc.EvaluateContext = EvaluateContext;
	
	    var AsyncEvaluateContext = (function () {
	       
	        
	        function AsyncEvaluateContext(context, node) {
	            this.id = context._asyncId++;
	            this.ctx = context;
	            this.row = context.row + (context.arrayFormulaMode && context.rowOffset || 0);
	            this.col = context.column + (context.arrayFormulaMode && context.columnOffset || 0);
	            this.node = node;
	        }
	
	       
	        
	        AsyncEvaluateContext.prototype.setAsyncResult = function (value) {
	            this.node._result = value;
	            this.node._hasResult = true;
	            this.ctx.SetAsyncResult(this, value);
	            this.ctx.source.refresh();
	        };
	        AsyncEvaluateContext.prototype.getFormula = function() {
	            return this.ctx.source.getCalcService().unparse(this.ctx.source, this.expression, this.row, this.col);
	        };
	        return AsyncEvaluateContext;
	    })();
	    Calc.AsyncEvaluateContext = AsyncEvaluateContext;
	
	    var GloableEvaluateContext = (function (_super) {
	        inherit(GloableEvaluateContext, _super);
	        function GloableEvaluateContext(source, arrayFormula, baseRow, baseColumn, rowCount, columnCount, activeRow, activeColumn) {
	            _super.call(this, source, arrayFormula, baseRow, baseColumn, rowCount, columnCount, activeRow, activeColumn);
	            var gm = source._getCalcServiceInternal().getGlobalSourceModel(source);
	            this._globalSource = gm && gm.getSource();
	        }
	
	        GloableEvaluateContext.prototype.getName = function (name) {
	            var self = this;
	            return self._globalSource ? self._globalSource.getCustomName(name) : keyword_null;
	        };
	        return GloableEvaluateContext;
	    })(EvaluateContext);
	    Calc.GloableEvaluateContext = GloableEvaluateContext;
	
	    Calc.Evaluator = (function () {
	        function Evaluator(service) {
	            this._aync = {};
	            this._aync2 = {};
	            this.asyncManager = new AsyncFunctionManager(this);
	            this.service = service;
	        }
	
	        return Evaluator;
	    })();
	
	    function isSameContextIdentity(identity1, identity2) {
	        if (identity1 && identity2) {
	            return identity1.row === identity2.row && identity1.col === identity2.col;
	        }
	        return identity1 === identity2;
	    }
	
	    Calc.Evaluator.prototype = {
	        
	        evaluateExpression: function (expression, evaluatorContext, convertNullToZero, acceptsArray, acceptsReference) {
	            var expr = (expression.type === undefined && expression._expr) ? expression._expr : expression;
	            var result = this.evaluate(expr, evaluatorContext, !!acceptsArray, !!acceptsReference);
	            if (result === keyword_undefined || result === keyword_null) {
	                return convertNullToZero === false ? result : 0;
	            } else if (Calc.Convert._isArray(result) && !acceptsArray || Convert._isReference(result) && !acceptsReference) {
	                result = this.getOneValue(evaluatorContext, result);
	            }
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            var CALC_PRECISION = 15;
	            if (typeof result === 'number' && result > -10 && result < 10) {
	                var valStr = result.toString();
	                if (valStr.indexOf('000000000000') > 1 || valStr.indexOf('999999999999') > 1) {
	                    CALC_PRECISION = 14;
	                }
	            }
	           
	            return Common._NumberHelper._fixNumber(result, CALC_PRECISION);
	        },
	        evaluate: function (expr, context, acceptsArray, acceptsReference) {
	            if (!expr) {
	                throw sR().Exp_ExprIsNull;
	            }
	            if (expr.type === undefined && expr._expr) {
	                expr = expr._expr;
	            }
	            while (expr.type === 10 ) {
	                expr = expr.value;
	            }
	            var self = this;
	            var result;
	            var needExpendIndexs = keyword_null;
	            if (expr.type === 12 ) {
	                needExpendIndexs = expr.needExpendIndexs;
	                expr = expr.value;
	            }
	            if (expr.type >= 2  && expr.type <= 6 ) {
	                result = self.evaluateConst(expr, context, acceptsArray);
	            } else if (expr.type === 1  || expr.type === 13 ) {
	                result = self.evaluateReference(expr, context, acceptsReference, acceptsArray);
	               
	               
	               
	               
	               
	               
	               
	               
	               
	            } else if (expr.type === 8 ) {
	                result = self.evaluateName(expr, context, acceptsArray, acceptsReference);
	            } else if (expr.type === 9  && !expr.value2) {
	                result = self.evaluateUnaryOperation(expr, context, acceptsArray, acceptsReference, needExpendIndexs);
	            } else if (expr.type === 9 ) {
	                result = self.evaluateBinaryOperation(expr, context, acceptsArray, acceptsReference, needExpendIndexs);
	            } else if (expr.type === 7 ) {
	                result = self.evaluateFunction(expr, context, acceptsArray, acceptsReference, needExpendIndexs);
	               
	               
	               
	            } else if (expr.type === 11 ) {
	                result = keyword_undefined;
	            } else if (context.evaluate) {
	                return context.evaluate(expr, acceptsArray, acceptsReference);
	            }
	            return result;
	        },
	        evaluateConst: function (expr, context, acceptsArray) {
	            var value = expr.value;
	            if (Convert._isArray(value)) {
	                if (acceptsArray || (context && (context.arrayFormulaMode || context._isExpandArrayToMultiCall()))) {
	                    return value;
	                }
	                return value.getValue(0, 0);
	            }
	            return value;
	        },
	        evaluateReference: function (expr, context, acceptsReference, acceptsArray) {
	            if (!context) {
	                return CalcErrorsValue;
	            }
	            var source = (expr.type === 13  ? expr.source() : expr.source) || context.source;
	            var baseRow = isNaN(context.row) ? 0 : context.row, baseColumn = isNaN(context.column) ? 0 : context.column;
	            var pos = expr.getRange && expr.getRange(baseRow, baseColumn);
	            if (!pos) {
	                return expr.type === 13  ? CalcErrorsValue : CalcErrorsReference;
	            }
	            var row = pos.row < 0 ? 0 : pos.row, col = pos.col < 0 ? 0 : pos.col, rowCount = pos.rowCount, colCount = pos.colCount;
	            if (acceptsReference || context.arrayFormulaMode) {
	                if (expr.endSource) {
	                    return context.getSheetRangeReference({
	                        source: expr.source,
	                        endSource: expr.endSource,
	                        row: row,
	                        col: col,
	                        rowCount: rowCount,
	                        colCount: colCount
	                    });
	                }
	                return context.getReference(source, pos);
	            } else if (acceptsArray && (rowCount > 1 || colCount > 1)) {
	                var array = [];
	                for (var i = 0; i < rowCount; i++) {
	                    array[i] = [];
	                    for (var j = 0; j < colCount; j++) {
	                        array[i][j] = source.getValue(i + row, j + col);
	                    }
	                }
	                return new CalcArray(array);
	            }
	            if (rowCount > 1 || colCount > 1) {
	                var rowInRange = baseRow >= pos.row && baseRow < pos.row + rowCount;
	                var colInRange = baseColumn >= pos.col && baseColumn < pos.col + colCount;
	                if (rowInRange && colInRange) {
	                    row = baseRow;
	                    col = baseColumn;
	                } else if (!rowInRange && !colInRange) {
	                    return CalcErrorsValue;
	                } else if (rowInRange && colCount === 1) {
	                    row = baseRow;
	                } else if (colInRange && rowCount === 1) {
	                    col = baseColumn;
	                   
	                   
	                   
	                } else {
	                    return CalcErrorsValue;
	                }
	            } else if (pos.row === -1 && rowCount === -1) {
	                if (colCount !== 1) {
	                    return CalcErrorsValue;
	                }
	                row = baseRow;
	            } else if (pos.col === -1 && colCount === -1) {
	                if (rowCount !== 1) {
	                    return CalcErrorsValue;
	                }
	                col = baseColumn;
	            }
	            return source.getValue(row, col);
	        },
	        evaluateName: function (expr, context, acceptsArray, acceptsReference) {
	            if (!context) {
	                return CalcErrorsName;
	            }
	            var source;
	            if (expr.source) {
	                source = expr.source;
	                context = source.getEvaluatorContext(context.identity, context.arrayFormulaMode, context.arrayIdentity);
	            }
	            var sub = context.getName(expr.value);
	            if (!sub) {
	                return CalcErrorsName;
	            }
	            return this.evaluate(sub, context, acceptsArray, acceptsReference);
	        },
	        evaluateUnaryOperation: function (expr, context, acceptsArray, acceptsReference, needExpendIndexs) {
	            var acceptsReferences = false;
	            if (needExpendIndexs && needExpendIndexs.length > 0) {
	                acceptsArray = true;
	                acceptsReferences = true;
	            }
	           
	            var arg = this.evaluate(expr.value, context, acceptsArray, acceptsReferences);
	            if (Convert._isError(arg)) {
	                return arg;
	            }
	            if (arg === Calc.missingArgument) {
	                return CalcErrorsNotAvailable;
	            }
	            return this.evaluateWithArgs(expr, function (args1) {
	                return evaluateOperator(expr.operatorType, args1[0]);
	            }, context, needExpendIndexs, [arg], acceptsArray, acceptsReference);
	        },
	        evaluateBinaryOperation: function (expr, context, acceptsArray, acceptsReference, needExpendIndexs) {
	            var acceptsArrays = [acceptsArray, acceptsArray];
	            var operatorAcceptsReference = expr.operatorType >= 15 ;
	            var acceptsReferences = [operatorAcceptsReference, operatorAcceptsReference];
	            if (needExpendIndexs && needExpendIndexs.length > 0) {
	                for (var i = 0; i < needExpendIndexs.length; i++) {
	                    acceptsArrays[needExpendIndexs[i]] = true;
	                    acceptsReferences[needExpendIndexs[i]] = true;
	                }
	
	            }
	           
	           
	            var sub = [expr.value, expr.value2];
	            var args = [];
	            for (i = 0; i < 2; i++) {
	                var arg = this.evaluate(sub[i], context, acceptsArrays[i], acceptsReferences[i]);
	                if (Convert._isError(arg)) {
	                    return arg;
	                }
	                if (arg === Calc.missingArgument) {
	                    return CalcErrorsNotAvailable;
	                }
	                args[i] = arg;
	            }
	            return this.evaluateWithArgs(expr, function (args1) {
	                return evaluateOperator(expr.operatorType, args1[0], args1[1]);
	            }, context, needExpendIndexs, args, acceptsArray, acceptsReference);
	        },
	        startCache: function () {
	            this._functionResultCaches = {};
	            this.service._hasAsync && this.asyncManager.startCalc();
	        },
	        endCache: function () {
	            this._functionResultCaches = keyword_null;
	        },
	        evaluateFunction: function (expr, context, acceptsArray, acceptsReference, needExpendIndexs) {
	            if (!expr || !expr.function || typeof expr.function === 'string') {
	                return CalcErrorsName;
	            }
	            var argCount = expr.arguments.length, self = this, asyncCount = context._asyncCount;
	            var fn = expr.function;
	            var args, arg;
	            var getReferenceValues = keyword_null;
	            if (fn instanceof Functions.AsyncFunction) { 
	                this.asyncManager.startCalcFunction(fn, expr.arguments, context);
	            }
	            if (argCount === 0) {
	                args = [];
	            } else {
	                args = [];
	                var acceptsArrays = [];
	                var acceptsReferences = [];
	                for (var i = 0; i < argCount; i++) {
	                    acceptsArrays[i] = fn.acceptsArray(i);
	                    acceptsReferences[i] = fn.acceptsReference(i);
	                }
	                if (needExpendIndexs && needExpendIndexs.length > 0) {
	                    getReferenceValues = [];
	                    for (i = 0; i < argCount; i++) {
	                        getReferenceValues[i] = true;
	                    }
	                    for (i = 0; i < needExpendIndexs.length; i++) {
	                        var argIndex = needExpendIndexs[i];
	                        acceptsArrays[argIndex] = true;
	                        acceptsReferences[argIndex] = true;
	                       
	                       
	                       
	                        getReferenceValues[argIndex] = !(fn.acceptsReference(argIndex) && !fn.acceptsArray(argIndex));
	                    }
	                }
	                if (fn.isBranch() && (context.arrayFormulaMode || context._isExpandArrayToMultiCall())) {
	                    acceptsArrays[fn.findTestArgument()] = true;
	                    acceptsReferences[fn.findTestArgument()] = true;
	                }
	                var testArgValue;
	                var testArg = -1;
	                var branchArgument = -1;
	                if (fn.isBranch()) {
	                    testArg = fn.findTestArgument();
	                    if (fn.acceptsArray(testArg)) {
	                        context._beginExpandArrayToMultiCall();
	                    }
	                    testArgValue = self.evaluate(expr.arguments[testArg], context, acceptsArrays[testArg], acceptsReferences[testArg]);
	                    if (fn.acceptsArray(testArg)) {
	                        context._endExpandArrayToMultiCall();
	                    }
	                    if (!Convert._isReference(testArgValue) && !Convert._isArray(testArgValue)) {
	                        branchArgument = fn.findBranchArgument(testArgValue);
	                    }
	                }
	                for (i = 0; i < argCount; i++) {
	                    if (testArg === i) {
	                        arg = testArgValue;
	                    } else if (branchArgument >= 0 && i !== branchArgument) {
	                        args[i] = null;
	                        continue;
	                    } else {
	                        if (fn.acceptsArray(i)) {
	                            context._beginExpandArrayToMultiCall();
	                        }
	                        arg = self.evaluate(expr.arguments[i], context, acceptsArrays[i], acceptsReferences[i]);
	                        if (fn.acceptsArray(i)) {
	                            context._endExpandArrayToMultiCall();
	                        }
	                    }
	                    if (!fn.acceptsArray(i) && (Convert._isArray(arg)) || (!fn.acceptsReference(i)) && (Convert._isReference(arg))) {
	                        var array = (Convert._isArray(arg)) ? arg : keyword_null;
	                        var reference = (Convert._isReference(arg)) ? arg : keyword_null;
	                        if (array && array.getRowCount() === 1 && array.getColumnCount() === 1) {
	                            arg = array.getValue(0, 0);
	                        } else if (reference && reference.getRowCount(0) === 1 && reference.getColumnCount(0) === 1) {
	                            arg = reference.getValue(0, 0, 0);
	                        } else {
	                            var list = [];
	                            var contains = false;
	                            if (needExpendIndexs) {
	                                for (var j = 0; j < needExpendIndexs.length; j++) {
	                                    list.push(needExpendIndexs[j]);
	                                    if (needExpendIndexs[j] === i) {
	                                        contains = true;
	                                    }
	                                }
	                            }
	                            if (!contains) {
	                                list.push(i);
	                                needExpendIndexs = list;
	                            }
	                        }
	                    }
	                    if ((Convert._isError(arg)) && !fn.acceptsError(i)) {
	                        return arg;
	                    }
	                    if (arg === Calc.missingArgument && !fn.acceptsMissingArgument(i)) {
	                        arg = keyword_null;
	                    }
	                    args[i] = arg;
	                }
	            }
	            return self.evaluateWithArgs(expr, function (args1, expression, isItemInArray) {
	                var value, retValue;
	                retValue = processBuiltInFunctionArgs(args1, fn._argsLimit);
	                args1 = retValue._args;
	                if (fn.isContextSensitive()) {
	                    context.acceptsReference = acceptsReference || context._isExpandArrayToMultiCall();
	                    if (fn instanceof Functions.AsyncFunction) {
	                        self._ayncFunctionResultCaches = self._ayncFunctionResultCaches || {};
	                        return fn.evaluateWhenArgumentsIsSame() ?
	                            self.evaluateAsyncFunction(context, expression, fn, asyncCount, args1, isItemInArray) :
	                            self.evaluateWithCache(fn, args1, function () {
	                                return self.evaluateAsyncFunction(context, expression, fn, asyncCount, args1, isItemInArray);
	                            }, self._ayncFunctionResultCaches);
	                    }
	                    return fn.evaluateWithContext(context, args1);
	                }
	                var isArrayFormula = context.arrayFormulaMode;
	                if (isArrayFormula) {
	                    fn._offsetIdentity = {
	                        row: context.rowOffset,
	                        col: context.columnOffset
	                    };
	                }
	                var evluateFunc = function () {
	                    return retValue._isExecuteFunc ? fn.evaluate.apply(fn, args1) : retValue._result;
	                };
	                value = isArrayFormula ? self.evaluateWithCache(fn, args1, evluateFunc, self._functionResultCaches) : evluateFunc();
	                delete fn._offsetIdentity;
	                return value;
	            }, context, needExpendIndexs, args, acceptsArray, acceptsReference, getReferenceValues);
	        },
	       
	       
	        evaluateAsyncFunction: function (context, expr, fn, asyncCount, args1, isItemInArray) {
	           
	            var node = this.asyncManager.getNode();
	            var result;
	            if (node._hasResult) {
	                result = node._result;
	            } else if (!node.canEvaluate()) {
	                result = node._result !== keyword_undefined ? node._result : fn.defaultValue();
	            } else {
	                var aContext = new AsyncEvaluateContext(context, node);
	                result = fn.evaluateWithContext(aContext, args1);
	                if (aContext.notAsync) {
	                    return result;
	                }
	                if (result === keyword_undefined) {
	                    if (node._result !== keyword_undefined) {
	                        result = node._result;
	                    } else {
	                        result = fn.defaultValue();
	                    }
	                } else if (node.evaluateMode === 1) {
	                    node._hasResult = true;
	                }
	            }
	            node._result = result;
	            if (!isItemInArray) {
	                this.asyncManager.endCalcFunction();
	            }
	            return result;
	        },
	        evaluateWithCache: function (fn, args1, evaluateFunction, functionCaches) {
	            if (functionCaches) {
	                var cached = false;
	                var functionInfos = functionCaches[fn.name + args1.length];
	                if (functionInfos) {
	                    for (var i = 0; i < functionInfos.length; i++) {
	                        var functionInfo = functionInfos[i];
	                        cached = false;
	                        if (functionInfo.args.length === args1.length) {
	                            cached = true;
	                            for (var argIndex = 0; argIndex < args1.length; argIndex++) {
	                                var cacheArg = functionInfo.args[argIndex], newArg = args1[argIndex];
	                                if (cacheArg === newArg) {
	                                    continue;
	                                }
	                                if ((cacheArg instanceof Calc.CalcReference) && newArg instanceof Calc.CalcReference) {
	                                    var rangeCount = cacheArg._rangeCount;
	                                    if (cacheArg._source !== newArg._source || rangeCount !== newArg._rangeCount) {
	                                        cached = false;
	                                        break;
	                                    }
	                                    for (var rangeIndex = 0; rangeIndex < rangeCount; rangeIndex++) {
	                                        if (cacheArg.getRow(rangeIndex) !== newArg.getRow(rangeIndex) || cacheArg.getColumn(rangeIndex) !== newArg.getColumn(rangeIndex) || cacheArg.getRowCount(rangeIndex) !== newArg.getRowCount(rangeIndex) || cacheArg.getColumnCount(rangeIndex) !== newArg.getColumnCount(rangeIndex)) {
	                                            cached = false;
	                                            break;
	                                        }
	                                    }
	                                } else {
	                                    cached = false;
	                                    break;
	                                }
	                            }
	                            if (cached && !isSameContextIdentity(functionInfo._offsetIdentity, fn._offsetIdentity)) {
	                                cached = false;
	                            }
	                        }
	                        if (cached) {
	                            functionInfo.flag++;
	                            return functionInfo.value;
	                        }
	                    }
	                } else {
	                    functionInfos = functionCaches[fn.name + args1.length] = [];
	                }
	            }
	            var value = evaluateFunction();
	            if (functionCaches && value !== keyword_undefined) {
	                var length = functionInfos.length;
	                if (length >= 100) {
	                    var tmp = [];
	                    for (i = 0; i < length; i++) {
	                        if (functionInfos[i].flag > 0) {
	                            tmp.push(functionInfos[i]);
	                        }
	                    }
	                    tmp.sort(function (a, b) {
	                        return b.flag - a.flag;
	                    });
	                    length = Math.min(50, tmp.length);
	                    functionInfos = tmp.slice(0, length);
	                    functionCaches[fn.name + args1.length] = functionInfos;
	                }
	                functionInfos.push({args: args1, value: value, flag: 0, _offsetIdentity: fn._offsetIdentity});
	            }
	            return value;
	        },
	        SetAsyncResult: function (context) {
	            var ctx = context.ctx;
	            ctx.source._getCalcServiceInternal().recalculate(ctx.source, context.row, context.col, true);
	        },
	        evaluateWithArgs: function (expr, evaluateDelegate, context, needExpendIndexs, args, acceptsArray, acceptsReference, getReferenceValues) {
	            if (needExpendIndexs && needExpendIndexs.length > 0) {
	                var expendedArgs = this._expandArgs(context, expr, args, needExpendIndexs, getReferenceValues);
	                if (!expendedArgs) {
	                    return CalcErrorsNotAvailable;
	                }
	                var valueArray = [], value;
	                var rowCount = expendedArgs[0].length;
	                var colCount = expendedArgs[0][0].length;
	                for (var rowIndex = 0; rowIndex < rowCount; rowIndex++) {
	                    valueArray[rowIndex] = [];
	                    for (var colIndex = 0; colIndex < colCount; colIndex++) {
	                        try {
	                            var expArgs = [];
	                            for (var argIndex = 0; argIndex < args.length; argIndex++) {
	                                expArgs[argIndex] = expendedArgs[argIndex][rowIndex][colIndex];
	                            }
	                            value = evaluateDelegate(expArgs, expr, (rowIndex + 1 !== rowCount) || (colIndex + 1 !== colCount)  );
	                            if (Convert._isReference(value)) {
	                                if (expr.type === 7 ) {
	                                    var fn = expr.function;
	                                    if (fn.returnReference && fn.returnReference()) {
	                                        return value;
	                                    }
	                                }
	                                value = this.getOneValue(context, value);
	                            }
	                            valueArray[rowIndex][colIndex] = value;
	                        } catch (InvalidCastException) {
	                            valueArray[rowIndex][colIndex] = CalcErrorsValue;
	                        }
	                    }
	                }
	                return new Calc.CalcArray(valueArray);
	            }
	            try {
	                value = evaluateDelegate(args, expr);
	                if (context.arrayFormulaMode && context._isExpandArrayToMultiCall()) {
	                    return value;
	                }
	                if ((Convert._isArray(value)) && !acceptsArray) {
	                    return this.getOneValue(context, value);
	                } else if ((Convert._isReference(value)) && !acceptsReference) {
	                    var refValue = value;
	                    if (acceptsArray && refValue.getRangeCount() === 1) {
	                        var array = [];
	                        for (var i = 0; i < refValue.getRowCount(0); i++) {
	                            array[i] = [];
	                            for (var j = 0; j < refValue.getColumnCount(0); j++) {
	                                array[i][j] = refValue.getValue(0, i, j);
	                            }
	                        }
	                        return new Calc.CalcArray(array, refValue.getColumnCount(0));
	                    }
	                    return this.getOneValue(context, value);
	                }
	                return value;
	            } catch (InvalidCastException) {
	                return CalcErrorsValue;
	            }
	        },
	        getOneValue: function (context, value) {
	            var r, c;
	            if (Convert._isReference(value)) {
	                var reference = value, rouCount = reference.getRowCount(0), columnCount = reference.getColumnCount(0);
	                if (reference.getRangeCount() > 1
	                    || !context.arrayFormulaMode && rouCount > 1 && columnCount > 1) {
	                    value = CalcErrorsValue;
	                } else {
	                    if (context.rowOffset !== -1 || context.columnOffset !== -1) {
	                        if (rouCount === 1) {
	                            r = 0;
	                        } else if (context.arrayFormulaMode) {
	                            r = context.rowOffset;
	                        } else {
	                            r = context.rowOffset - reference.getRow(0);
	                        }
	                        if (columnCount === 1) {
	                            c = 0;
	                        } else if (context.arrayFormulaMode) {
	                            c = context.columnOffset;
	                        } else {
	                            c = context.columnOffset - reference.getColumn(0);
	                        }
	                    } else {
	                        r = rouCount === 1 ? 0 : context.row - reference.getRow(0);
	                        c = columnCount === 1 ? 0 : context.column - reference.getColumn(0);
	                    }
	                    if (r >= rouCount || c >= columnCount) {
	                        value = CalcErrorsNotAvailable;
	                    } else {
	                        value = reference.getValue(0, r, c);
	                    }
	                }
	            } else if (Convert._isArray(value)) {
	                var array = value;
	                if (context.arrayFormulaMode && (context.rowOffset !== -1 || context.columnOffset !== -1)) {
	                    r = array.getRowCount() === 1 ? 0 : context.rowOffset;
	                    c = array.getColumnCount() === 1 ? 0 : context.columnOffset;
	                    if (r >= array.getRowCount() || c >= array.getColumnCount()) {
	                        value = CalcErrorsNotAvailable;
	                    } else {
	                        value = array.getValue(r, c);
	                    }
	                } else {
	                    value = array.getValue(0, 0);
	                }
	            }
	            return (Convert._isReference(value) || Convert._isArray(value)) ? this.getOneValue(context, value) : value;
	        },
	        _expandArgs: function (context, expr, args, needExpendIndexs, getReferenceValues) {
	            var rowCount = 1;
	            var colCount = 1;
	            var testArg = -1;
	            var expandRow = true, expandColumn = true;
	            var array = null;
	            var reference = null;
	            var rc = 1, cc = 1;
	            var functionExpr = expr.type === 7  ? expr : keyword_null;
	            if (functionExpr && !functionExpr.function.expandRows()) {
	                expandRow = false;
	            }
	            if (functionExpr && !functionExpr.function.expandColumns()) {
	                expandColumn = false;
	            }
	            if (functionExpr && functionExpr.function.isBranch() && (context.arrayFormulaMode || context._isExpandArrayToMultiCall())) {
	                testArg = functionExpr.function.findTestArgument();
	                var indexList = [];
	                var contains = false;
	                if (needExpendIndexs) {
	                    for (var i = 0; i < needExpendIndexs.length; i++) {
	                        indexList.push(needExpendIndexs[i]);
	                        if (needExpendIndexs[i] === testArg) {
	                            contains = true;
	                        }
	                    }
	                }
	                if (contains || (Convert._isArray(args[testArg])) || (Convert._isReference(args[testArg]))) {
	                    for (var j = 0; j < functionExpr.arguments.length; j++) {
	                        if (j !== testArg && Common._ArrayHelper._indexOf(indexList, j) < 0 && (Convert._isArray(args[j]) || Convert._isReference(args[j]))) {
	                            indexList.push(j);
	                        }
	                    }
	                    needExpendIndexs = indexList;
	                }
	            }
	            for (var k = 0; k < needExpendIndexs.length; k++) {
	                var argValue = args[needExpendIndexs[k]];
	                array = Convert._isArray(argValue) ? argValue : null;
	                reference = Convert._isReference(argValue) ? argValue : null;
	                rc = 0;
	                cc = 0;
	                if (array) {
	                    rc = array.getRowCount();
	                    cc = array.getColumnCount();
	                } else if (reference) {
	                    if (reference.getRangeCount() > 1) {
	                        return keyword_null;
	                    }
	                    rc = expandRow ? reference.getRowCount(0) : 1;
	                    cc = expandColumn ? reference.getColumnCount(0) : 1;
	                }
	                rowCount = rc > rowCount ? rc : rowCount;
	                colCount = cc > colCount ? cc : colCount;
	            }
	            var expArgs = [];
	            var expendIndexIndex = 0;
	            var expendIndex = needExpendIndexs[expendIndexIndex];
	            for (var argIndex = 0; argIndex < args.length; argIndex++) {
	                expArgs[argIndex] = [];
	                var value = args[argIndex];
	                array = keyword_null;
	                reference = keyword_null;
	                rc = cc = 1;
	                if (argIndex === expendIndex) {
	                    array = Convert._isArray(value) ? value : keyword_null;
	                    reference = Convert._isReference(value) ? value : keyword_null;
	                    if (array || reference) {
	                        rc = array && array.getRowCount() || (expandRow ? reference.getRowCount(0) : 1);
	                        cc = array && array.getColumnCount() || (expandColumn ? reference.getColumnCount(0) : 1);
	                        if ((rc !== 1 && rc !== rowCount || cc !== 1 && cc !== colCount) && (testArg === -1 || argIndex === testArg) && !context.arrayFormulaMode) {
	                            return keyword_null;
	                        }
	                    }
	                    expendIndexIndex++;
	                    if (expendIndexIndex < needExpendIndexs.length) {
	                        expendIndex = needExpendIndexs[expendIndexIndex];
	                    } else {
	                        expendIndex = -1;
	                    }
	                } else if (getReferenceValues === keyword_undefined) {
	                    array = Convert._isArray(value) ? value : keyword_null;
	                    reference = Convert._isReference(value) ? value : keyword_null;
	                    if (array || reference) {
	                        rc = array && array.getRowCount() || (expandRow ? reference.getRowCount(0) : 1);
	                        cc = array && array.getColumnCount() || (expandColumn ? reference.getColumnCount(0) : 1);
	                        if ((rc !== 1 && rc !== rowCount || cc !== 1 && cc !== colCount) && (testArg === -1 || argIndex === testArg) && !context.arrayFormulaMode) {
	                            return keyword_null;
	                        }
	                    }
	                }
	                if (reference) {
	                    var sRow = reference.getRow(0), sCol = reference.getColumn(0);
	                    rowCount = sRow + rowCount - sRow;
	                    colCount = sCol + colCount - sCol;
	                }
	                for (var rowIndex = 0; rowIndex < rowCount; rowIndex++) {
	                    expArgs[argIndex][rowIndex] = [];
	                    for (var colIndex = 0; colIndex < colCount; colIndex++) {
	                        if (rc !== 1 && rowIndex >= rc || cc !== 1 && colIndex >= cc) {
	                            expArgs[argIndex][rowIndex][colIndex] = CalcErrorsNotAvailable;
	                        } else if (array) {
	                            expArgs[argIndex][rowIndex][colIndex] = array.getValue(rc === 1 ? 0 : rowIndex, cc === 1 ? 0 : colIndex);
	                        } else if (reference) {
	                            if (!getReferenceValues || getReferenceValues[argIndex]) {
	                                expArgs[argIndex][rowIndex][colIndex] = reference.getValue(0, rc === 1 ? 0 : rowIndex, cc === 1 ? 0 : colIndex);
	                            } else {
	                                expArgs[argIndex][rowIndex][colIndex] = reference.create([createRange(reference.getRow(0) + (rc === 1 ? 0 : rowIndex), reference.getColumn(0) + (cc === 1 ? 0 : colIndex), 1, 1)]);
	                            }
	                        } else {
	                            expArgs[argIndex][rowIndex][colIndex] = value;
	                        }
	                    }
	                }
	            }
	            return expArgs;
	        }
	    };
	
	    var AsyncFunctionNode = (function () {
	        function AsyncFunctionNode(id, evaluateMode) {
	           
	           
	            this.id = id;
	            this._result = keyword_undefined;
	            this._hasResult = false;   
	            this._children = [];   
	            if (evaluateMode !== keyword_undefined) {
	                this.evaluateMode = evaluateMode;
	            }
	        }
	
	        return AsyncFunctionNode;
	    })();
	
	    AsyncFunctionNode.prototype = {
	        canEvaluate: function () {
	            var children = this._children;
	            for (var i = 0; i < children.length; i++) {
	                if (!children[i]._hasResult) {
	                    return false;
	                }
	            }
	            return true;
	        }
	    };
	
	    var AsyncFunctionManager = (function () {
	        function AsyncFunctionManager(evaluator) {
	            var self = this;
	            self._stack = [];
	            self._stackIndex = -1;
	            self._nodes = {};
	            self._cellFunctionId = -1;
	            self._evaluator = evaluator;
	            self._nodeCount = 0;
	        }
	
	        return AsyncFunctionManager;
	    })();
	
	   
	    AsyncFunctionManager.prototype = {
	        startCalc: function () {
	            var length;
	            if (!this._nodeCount) {
	                return;
	            }
	            for (var key in this._nodes) { 
	                var sourceNodes = this._nodes[key];
	                if (sourceNodes) {
	                    for (var rowIndex in sourceNodes) { 
	                        var rowNodes = sourceNodes[rowIndex];
	                        if (rowNodes) {
	                            for (var columnIndex in rowNodes) { 
	                                var cellNodes = rowNodes[columnIndex];
	                                if (cellNodes) {
	                                    length = cellNodes.length;
	                                    if (length > 0) {
	                                        for (var i = 0; i < length; i++) {
	                                            var node = cellNodes[i];
	                                            if (node.evaluateMode === 0 ) {
	                                                node._hasResult = false;
	                                            }
	                                        }
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	        },
	        startCalcCell: function (source, identity) {
	            var self = this, sourceName = source.getName(), row = identity.row, column = identity.col;
	            self._cellFunctionId = -1;
	            self.source = source;
	            var sourceNodes = self._nodes[sourceName];
	            if (!sourceNodes) {
	                sourceNodes = self._nodes[sourceName] = {};
	            }
	            var rowNodes = sourceNodes[row];
	            if (!rowNodes) {
	                rowNodes = sourceNodes[row] = {};
	            }
	            var cellNodes = rowNodes[column];
	            if (cellNodes) {
	                self.cellNodes = cellNodes;
	                return;
	            }
	            var node = new AsyncFunctionNode(-1);
	            cellNodes = rowNodes[column] = [];
	            self._nodeCount++;
	            self._stackIndex = -1;
	            self.cellNodes = cellNodes;
	            self.row = row;
	            self.col = column;
	            cellNodes.root = node;
	            self._stack[++self._stackIndex] = node;
	            self.evaluateMode = -1;
	        },
	        startCalcFunction: function (fn, args, context) {
	            var self = this;
	            self._cellFunctionId++;
	            self.isNewNode = false;
	            var node = self.cellNodes[self._cellFunctionId];
	            if (node) {
	                self.currentNode = node;
	                return node;
	            }
	            self.isNewNode = true;
	            var selfEvaluateMode = self.evaluateMode;
	            var evaluateMode = fn.evaluateMode();
	            if (fn.name === 'REFRESH') {
	                evaluateMode = args[1] ? self._evaluator.evaluate(args[1], context, false, false) : 0;
	                self.evaluateMode = evaluateMode;
	            } else if (selfEvaluateMode !== -1) {
	                evaluateMode = selfEvaluateMode;
	            }
	            node = new AsyncFunctionNode(self._cellFunctionId, evaluateMode);
	            self.cellNodes[self._cellFunctionId] = node;
	            self._stack[self._stackIndex]._children.push(node);
	            node.parent = self._stack[self._stackIndex];
	            self._stack.push(node);
	            self._stackIndex++;
	            self.currentNode = node;
	            if (evaluateMode === 2  && selfEvaluateMode === -1) {
	                var defaultInterval = 60000;
	                var intervals = self.intervals, interval = fn.interval() || defaultInterval;
	                if (fn.name === 'REFRESH') {
	                    node.isRefresh = true;
	                    interval = args[2] ? self._evaluator.evaluate(args[2], context, false, false) : defaultInterval;
	                }
	                if (!intervals) {
	                    self.intervals = intervals = {};
	                }
	                var fns = intervals[interval];
	                var i;
	                if (!fns) {
	                    fns = intervals[interval] = [];
	                    fns.intervalObj = window.setInterval(function () {
	                        var currentFunctionInfos = self.intervals[interval];
	                        for (i = 0; i < currentFunctionInfos.length; i++) {
	                            var fnObj = currentFunctionInfos[i];
	                            var node1 = fnObj.node;
	                            node1._hasResult = false;
	                            if (node1.isRefresh) {
	                                invalidChildren(node1);
	                            }
	                            self._evaluator.service.recalculate(fnObj.source, fnObj.row, fnObj.col, true);
	                            self.source.refresh();
	                        }
	                    }, interval);
	                }
	                var finded = false;
	                for (i = 0; i < fns.length; i++) {
	                    var fnTmp = fns[i];
	                    if (fnTmp.source === self.source && fnTmp.node === node && fnTmp.row === self.row && fnTmp.col === self.col) {
	                        finded = true;
	                        break;
	                    }
	                }
	                if (!finded) {
	                    fns.push({source: self.source, node: node, row: self.row, col: self.col});
	                }
	            }
	            return node;
	        },
	        getNode: function () {
	            return this.currentNode;
	        },
	        endCalcFunction: function () {
	            if (this.isNewNode) {
	                this._stack.pop();
	                this._stackIndex--;
	            }
	            this.currentNode = this.currentNode.parent;
	        },
	        endCalcCell: function () {
	
	        },
	        clearCell: function (source, identity) {
	            var self = this;
	            if (!self._nodeCount) {
	                return;
	            }
	            var sourceName = source.getName(), row = identity.row, column = identity.col;
	            self._cellFunctionId = -1;
	            self.source = source;
	            var sourceNodes = self._nodes[sourceName];
	            if (sourceNodes) {
	                var rowNodes = sourceNodes[row];
	                if (rowNodes) {
	                    var cellNodes = rowNodes[column];
	                    if (cellNodes) {
	                        var node = cellNodes[0], cellCalc = node && node._calc;
	                        if (cellCalc) {
	                            delete cellCalc._hasAsync;
	                            delete cellCalc._asyncNode;
	                        }
	                        rowNodes[column] = keyword_undefined;
	                        self._nodeCount--;
	                    }
	                }
	            }
	            var intervals = self.intervals;
	            for (var timeKey in intervals) {   
	                var fns = intervals[timeKey];
	                if (fns) {
	                    var keepFns = [];
	                    for (var i = 0; i < fns.length; i++) {
	                        var fnInfo = fns[i];
	                        if (fnInfo.source !== source || fnInfo.row !== identity.row || fnInfo.col !== identity.col) {
	                            keepFns.push(fnInfo);
	                        }
	                    }
	                    if (!keepFns.length) {
	                        intervals[timeKey] = keyword_undefined;
	                        window.clearInterval(fns.intervalObj);
	                    } else if (keepFns.length !== fns.length) {
	                        keepFns.intervalObj = fns.intervalObj;
	                        intervals[timeKey] = keepFns;
	                    }
	                }
	            }
	        },
	        setAsyncResult: function (node, value) {
	            node._result = value;
	        },
	        addRows: function (source, row, count) {
	            this._addRemoveRows(source, row, count, true);
	        },
	        deleteRows: function (source, row, count) {
	            this._addRemoveRows(source, row, count, false);
	        },
	        _addRemoveRows: function (source, row, count, isAdd) {
	            var self = this;
	            if (!self._nodeCount) {
	                return;
	            }
	            var sourceName = source.getName();
	            var sourceNodes = self._nodes[sourceName];
	            if (sourceNodes) {
	                var newSourceNodes = {};
	                for (var rowKey in sourceNodes) { 
	                    var rowNodes = sourceNodes[rowKey];
	                    if (rowNodes) {
	                        var rowIndex = parseInt(rowKey);
	                        if (isAdd) {
	                            var newRowIndex = rowIndex >= row ? rowIndex + count : rowIndex;
	                            newSourceNodes[newRowIndex] = rowNodes;
	                        } else if (rowIndex < row) {
	                            newSourceNodes[rowIndex] = rowNodes;
	                        } else if (rowIndex >= row + count) {
	                            newSourceNodes[rowIndex - count] = rowNodes;
	                        }
	                    }
	                }
	                self._nodes[sourceName] = newSourceNodes;
	            }
	
	            var intervals = self.intervals;
	            for (var timeKey in intervals) {   
	                var fns = intervals[timeKey];
	                if (fns) {
	                    var keepFns = [];
	                    for (var i = 0; i < fns.length; i++) {
	                        var fnInfo = fns[i];
	                        if (fnInfo.source === source && isAdd && fnInfo.row >= row) {
	                            fnInfo.row += count;
	                        } else if (fnInfo.source === source && !isAdd
	                            && (fnInfo.row < row || fnInfo.row >= row + count)) {
	                            fnInfo.row = fnInfo.row < row ? fnInfo.row : fnInfo.row - count;
	                            keepFns.push(fnInfo);
	                        }
	                    }
	                    if (!isAdd && keepFns.length !== fns.length) {
	                        keepFns.intervalObj = fns.intervalObj;
	                        intervals[timeKey] = keepFns;
	                    }
	                }
	            }
	        },
	        addColumns: function (source, column, count) {
	            this._addRemoveColumns(source, column, count, true);
	        },
	        deleteColumns: function (source, column, count) {
	            this._addRemoveColumns(source, column, count, false);
	        },
	        _addRemoveColumns: function (source, column, count, isAdd) {
	            var self = this;
	            if (!self._nodeCount) {
	                return;
	            }
	            var sourceName = source.getName();
	            var sourceNodes = self._nodes[sourceName];
	            if (sourceNodes) {
	                for (var rowKey in sourceNodes) { 
	                    var rowNodes = sourceNodes[rowKey];
	                    if (rowNodes) {
	                        var newRowNodes = {};
	                        for (var columnKey in rowNodes) { 
	                            var cellNodes = rowNodes[columnKey];
	                            if (cellNodes && cellNodes.length) {
	                                var columnIndex = parseInt(columnKey);
	                                if (isAdd) {
	                                    var newColumnIndex = columnIndex >= column ? columnIndex + count : columnIndex;
	                                    newRowNodes[newColumnIndex] = cellNodes;
	                                } else if (columnIndex < column) {
	                                    newRowNodes[columnIndex] = cellNodes;
	                                } else if (columnIndex >= column + count) {
	                                    newRowNodes[columnIndex - count] = cellNodes;
	                                }
	                            }
	                        }
	                        sourceNodes[rowKey] = newRowNodes;
	                    }
	                }
	            }
	
	            var intervals = self.intervals;
	            for (var timeKey in intervals) {   
	                var fns = intervals[timeKey];
	                if (fns) {
	                    var keepFns = [];
	                    for (var i = 0; i < fns.length; i++) {
	                        var fnInfo = fns[i];
	                        if (fnInfo.source === source && isAdd && fnInfo.col >= column) {
	                            fnInfo.col += count;
	                        } else if (fnInfo.source === source && !isAdd && (fnInfo.col < column || fnInfo.col >= column + count)) {
	                            fnInfo.col = fnInfo.col < column ? fnInfo.col : fnInfo.col - count;
	                            keepFns.push(fnInfo);
	                        }
	                    }
	                    if (!isAdd && keepFns.length !== fns.length) {
	                        keepFns.intervalObj = fns.intervalObj;
	                        intervals[timeKey] = keepFns;
	                    }
	                }
	            }
	        },
	        changeSourceName: function (oldName, newName) {
	            var self = this;
	            if (!self._nodeCount) {
	                return;
	            }
	            var sourceNodes = self._nodes[oldName];
	            if (sourceNodes) {
	                self._nodes[newName] = sourceNodes;
	                delete self._nodes[oldName];
	            }
	        }
	    };
	
	    function invalidChildren(node) {
	        var child;
	        for (var i = 0; i < node._children.length; i++) {
	            child = node._children[i];
	            child._hasResult = false;
	            if (child._children.length > 0) {
	                invalidChildren(child);
	            }
	        }
	    }
	
	    var tryExtractToSingleValue = function (arg) {
	        var success = true;
	        if (arg && arg.getValue) {
	            var array = _toArray(arg, 0 , false, true);
	            if (array.isError) {
	                arg = array[0];
	            } else if (array.rowCount === 1 && array.colCount === 1) {
	                arg = array[0][0];
	            } else {
	                arg = array;
	                success = false;
	            }
	        }
	        return {
	            value: arg,
	            success: success
	        };
	    };
	    var evaluateOperator = Calc.evaluateOperator = function (operatorType, value1, value2) {
	        if (_isError(value1)) {
	            return value1;
	        }
	        if (_isError(value2)) {
	            return value2;
	        }
	        if (operatorType <= 2 ) {
	            return evaluateUnaryOperator(operatorType, value1);
	        } else if (operatorType <= 14 ) {
	            return evaluateMathOperator(operatorType, value1, value2);
	        }
	        return evaluateReferenceOperator(operatorType, value1, value2);
	    };
	
	    function evaluateUnaryOperator(operatorType, value) {
	        if (!value) {
	            return 0;
	        }
	        var isArg0Simple = tryExtractToSingleValue(value);
	        if (isArg0Simple.success) {
	            return evaluateMathOperatorSingleValue(operatorType, isArg0Simple.value);
	        }
	    }
	
	    function evaluateMathOperator(operatorType, left, right) {
	        var evaluateSingleValue;
	        if (operatorType <= 7 ) {
	            evaluateSingleValue = evaluateMathOperatorSingleValue;
	        } else if (operatorType === 8 ) {
	            evaluateSingleValue = evaluateStringOperatorSingleValue;
	        } else {
	            evaluateSingleValue = evaluateCompareOperatorSingleValue;
	        }
	        var isArg0Simple = tryExtractToSingleValue(left);
	        var isArg1Simple = tryExtractToSingleValue(right);
	        if (isArg0Simple.success && isArg1Simple.success) {
	            return evaluateSingleValue(operatorType, isArg0Simple.value, isArg1Simple.value);
	        }
	        left = isArg0Simple.value;
	        right = isArg1Simple.value;
	        var rowArg0 = isArg0Simple.success ? -1 : left.rowCount;
	        var colArg0 = isArg0Simple.success ? -1 : left.colCount;
	        var rowArg1 = isArg1Simple.success ? -1 : right.rowCount;
	        var colArg1 = isArg1Simple.success ? -1 : right.colCount;
	        var row = -1, col = -1;
	        if (!isArg0Simple.success && !isArg1Simple.success) {
	            if (rowArg0 !== 1 && rowArg1 !== 1 && rowArg0 !== rowArg1 || colArg0 !== 1 && colArg1 !== 1 && colArg0 !== colArg1) {
	                return CalcErrorsNotAvailable;
	            }
	            row = rowArg0 === 1 ? rowArg1 : rowArg0;
	            col = colArg0 === 1 ? colArg1 : colArg0;
	        } else if (!isArg0Simple.success) {
	            row = rowArg0;
	            col = colArg0;
	        } else {
	            row = rowArg1;
	            col = colArg1;
	        }
	        var result = [];
	        for (var i = 0; i < row; i++) {
	            result[i] = [];
	            for (var j = 0; j < col; j++) {
	                if (!isArg0Simple.success && (rowArg0 !== 1 && rowArg0 < row || colArg0 !== 1 && colArg0 < col) || !isArg1Simple.success && (rowArg1 !== 1 && rowArg1 < row || colArg1 !== 1 && colArg1 < col)) {
	                    result[i][j] = CalcErrorsNotAvailable;
	                } else {
	                    var fixedRowArg0 = rowArg0 === 1 ? 0 : i;
	                    var fixedColArg0 = colArg0 === 1 ? 0 : j;
	                    var fixedRowArg1 = rowArg1 === 1 ? 0 : i;
	                    var fixedColArg1 = colArg1 === 1 ? 0 : j;
	                    result[i][j] = evaluateSingleValue(operatorType, isArg0Simple.success ? left : left[fixedRowArg0][fixedColArg0], isArg1Simple.success ? right : right[fixedRowArg1][fixedColArg1]);
	                }
	            }
	        }
	        return new Calc.CalcArray(result);
	    }
	
	    function evaluateMathOperatorSingleValue(operatorType, value1, value2) {
	        function isEmptyString(str) {
	            return (typeof str === 'string') && str.trim().length === 0;
	        }
	        if (isEmptyString(value1) || isEmptyString(value2)) {
	            return CalcErrorsValue;
	        }
	        var doubleValue = {value: 0};
	        if (!_tryToDouble(value1, doubleValue)) {
	           
	            if (operatorType === 0  && (typeof value1 === 'string')) {
	                return value1;
	            }
	            return CalcErrorsValue;
	        }
	        var doubleLeft = doubleValue.value, doubleRight;
	        if (value2 !== keyword_undefined) {
	            if (!_tryToDouble(value2, doubleValue)) {
	                return CalcErrorsValue;
	            }
	            doubleRight = doubleValue.value;
	        } else {
	            doubleRight = 0;
	        }
	        if (operatorType === 0 ) {
	            return doubleLeft;
	        } else if (operatorType === 1 ) {
	            return -doubleLeft;
	        } else if (operatorType === 2 ) {
	            return doubleLeft / 100;
	        } else if (operatorType === 3 ) {
	            return doubleLeft + doubleRight;
	        } else if (operatorType === 4 ) {
	            return doubleLeft - doubleRight;
	        } else if (operatorType === 5 ) {
	            return doubleLeft * doubleRight;
	        } else if (operatorType === 6 ) {
	            return doubleRight ? (doubleLeft / doubleRight) : CalcErrorsDivideByZero;
	        } else if (operatorType === 7 ) {
	            return !doubleLeft && doubleRight < 0 ? CalcErrorsDivideByZero : Math_pow(doubleLeft, doubleRight);
	        }
	    }
	
	    function evaluateStringOperatorSingleValue(operatorType, left, right) {
	        if (operatorType === 8 ) {
	            if (_isError(left)) {
	                return left;
	            }
	            if (_isError(right)) {
	                return right;
	            }
	            return Convert._toString(left) + Convert._toString(right);
	        }
	    }
	
	    function evaluateCompareOperatorSingleValue(operatorType, left, right) {
	        if (_isError(left)) {
	            return left;
	        }
	        if (_isError(right)) {
	            return right;
	        }
	        var compareResult;
	       
	       
	
	       
	        var leftBool = typeof left === const_boolean, rightBool = typeof right === const_boolean;
	        if (leftBool || rightBool) {
	            if (leftBool && rightBool) {
	                if (left === right) {
	                    compareResult = 0;    
	                } else {
	                    compareResult = left > right ? 1 : -1;
	                }
	            } else {
	                compareResult = leftBool ? 1 : -1;
	            }
	        } else {
	            var leftIsString = typeof left === const_string, rightIsString = typeof right === const_string;
	            var isString = leftIsString || rightIsString;
	            var defaultValue = isString ? '' : 0;
	            left = (left === keyword_null || left === keyword_undefined) ? defaultValue : left;
	            right = (right === keyword_null || right === keyword_undefined) ? defaultValue : right;
	            var compare = function () {
	                if (left === right) {
	                    return 0;
	                }
	                if (leftIsString && rightIsString) {
	                    return left.toUpperCase().localeCompare(right.toUpperCase());
	                } else if (leftIsString) {
	                    return 1;
	                } else if (rightIsString) {
	                    return -1;
	                }
	                return Calc._Helper._approxEqual(left, right) ? 0 : left - right;
	            };
	           
	           
	           
	           
	           
	           
	            if (!isString) {
	                var doubleLeft = {value: 0};
	                var doubleRight = {value: 0};
	                if (!_tryToDouble(left, doubleLeft) || !_tryToDouble(right, doubleRight)) {
	                    return CalcErrorsValue;
	                }
	                left = doubleLeft.value;
	                right = doubleRight.value;
	            }
	
	            compareResult = compare();
	        }
	        return operatorType === 9  && compareResult === 0
	            || operatorType === 10  && compareResult !== 0
	            || operatorType === 11  && compareResult < 0
	            || operatorType === 12  && compareResult <= 0
	            || operatorType === 13  && compareResult > 0
	            || operatorType === 14  && compareResult >= 0;
	    }
	
	    function evaluateReferenceOperator(operatorType, left, right) {
	        if (!left || !right
	            || (left.getRangeCount() !== 1 || right.getRangeCount() !== 1) && operatorType !== 16 
	            || left.endSource || right.endSource) {
	            return CalcErrorsValue;
	        }
	        var leftSource = left.getSource();
	        if (!leftSource || leftSource !== right.getSource()) {
	            return CalcErrorsValue;
	        }
	        var newIndenties;
	        if (operatorType === 16 ) {
	            newIndenties = left._identities.concat(right._identities);
	        } else {
	            var indexFunction = operatorType === 15  ? Math_min : Math_max,
	                countFunction = operatorType === 15  ? Math_max : Math_min;
	
	            var leftRow = left.getRow(0);
	            var leftColumn = left.getColumn(0);
	            var rightRow = right.getRow(0);
	            var rightColumn = right.getColumn(0);
	            var row = indexFunction(leftRow, rightRow);
	            var column = indexFunction(leftColumn, rightColumn);
	            var rowCount = countFunction(leftRow + left.getRowCount(0), rightRow + right.getRowCount(0)) - row;
	            var columnCount = countFunction(leftColumn + left.getColumnCount(0), rightColumn + right.getColumnCount(0)) - column;
	            if (rowCount < 1 || columnCount < 1) {
	                return Errors.Null;
	            }
	            newIndenties = [createRange(row, column, rowCount, columnCount)];
	        }
	
	        return new Calc.CalcReference(leftSource, newIndenties);
	    }
	
	    var _toDouble = Convert._toDouble, _toInt = Convert._toInt, _toString = Convert._toString, _tryToDateTime = Convert._tryToDateTime,
	        _toBool = Convert._toBool;
	
	    function processArgType(argValue, argLimitValue) {
	        var isExecuteFunc = true, retValue, needNumber;
	        switch (argLimitValue._argType) {
	            case 0 
	            :
	                retValue = _toDouble(argValue);
	                needNumber = true;
	                break;
	            case 1 
	            :
	                retValue = parseFloat(argValue);
	                needNumber = true;
	                break;
	            case 2 
	            :
	                retValue = _toInt(argValue);
	                needNumber = true;
	                break;
	            case 3 
	            :
	                retValue = parseInt(argValue);
	                needNumber = true;
	                break;
	            case 4 
	            :
	                retValue = _toArray(argValue, argLimitValue._valueType, argLimitValue._toOneDimension || false,
	                    argLimitValue._breakOnError || false, argLimitValue._breakOnConvertError || false, argLimitValue._ignoreBlank, argLimitValue._followFormatter);
	                if (retValue.isError) {
	                    retValue = retValue[0];
	                    isExecuteFunc = false;
	                }
	                if (retValue.isConvertError) {
	                    retValue = CalcErrorsValue;
	                    isExecuteFunc = false;
	                }
	                break;
	            case 5 
	            :
	                retValue = _toString(argValue);
	                if (argLimitValue._acceptsEmptyString && retValue === '') {
	                    retValue = CalcErrorsValue;
	                    isExecuteFunc = false;
	                }
	                break;
	            case 6 
	            :
	                var dateValue = {value: keyword_null};
	                if (_tryToDateTime(argValue, dateValue)) {
	                    retValue = dateValue.value;
	                } else {
	                    retValue = CalcErrorsValue;
	                    isExecuteFunc = false;
	                }
	                break;
	            case 7 
	            :
	                retValue = _toBool(argValue);
	                break;
	            case 8 
	            :
	                retValue = convertToComplex(argValue);
	                if (!retValue || argLimitValue._complexCondition && retValue._getReal() === 0 && retValue._getImag() === 0) {
	                    retValue = Calc.Errors.Number;
	                    isExecuteFunc = false;
	                } else {
	                    retValue = {_real: retValue._getReal(), _imag: retValue._getImag()};
	                }
	                break;
	            default:
	                retValue = argValue;
	                break;
	        }
	        if (needNumber && isNaN(retValue)) {
	            retValue = CalcErrorsValue;
	            isExecuteFunc = false;
	        }
	        return {_retValue: retValue, _isExecuteFunc: isExecuteFunc};
	    }
	
	    var Functions = Calc.Functions;
	   
	    function Complex(real, imag, suffix) {
	        this._real = real;
	        this._imag = imag;
	        this._suffix = suffix || 'i';
	    }
	
	    Complex.prototype = {
	        _getReal: function () {
	            return this._real;
	        },
	        _getImag: function () {
	            return this._imag;
	        },
	        _getSuffix: function () {
	            return this._suffix;
	        },
	        _toString: function (suffix) {
	            suffix = suffix || 'i';
	            var self = this, real = self._real, imag = self._imag, sb = '';
	            if (real !== 0 || imag === 0) {
	                sb += real.toString();
	            }
	            if (imag === -1) {
	                sb += '-';
	            } else if (real !== 0 && imag > 0) {
	                sb += '+';
	            }
	            if (imag !== -1 && imag !== 0 && imag !== 1) {
	                sb += imag.toString();
	            }
	            if (imag !== 0) {
	                sb += suffix;
	            }
	            return sb;
	        }
	    };
	    Functions._Complex = Complex;
	
	    function charAtFunc(stringValue, ch) {
	        return stringValue.charAt(ch);
	    }
	
	    function checkString(s, i) {
	        var stringLength = s.length, digitFlag = false;
	        while (i < stringLength && !isNaN(charAtFunc(s, i))) {
	            i++;
	            digitFlag = true;
	        }
	        if (i < stringLength && charAtFunc(s, i) === '.') {
	            i++;
	        }
	        while (i < stringLength && !isNaN(charAtFunc(s, i))) {
	            i++;
	            digitFlag = true;
	        }
	        if (i < stringLength && (charAtFunc(s, i) === 'E' || charAtFunc(s, i) === 'e')) {
	            i++;
	            digitFlag = false;
	            if (i < stringLength && (charAtFunc(s, i) === '+' || charAtFunc(s, i) === '-')) {
	                i++;
	            }
	            while (i < stringLength && !isNaN(charAtFunc(s, i))) {
	                i++;
	                digitFlag = true;
	            }
	        }
	        return {_digitFlag: digitFlag, _index: i};
	    }
	
	    function convertToComplex(value) {
	        function parseComplex(s) {
	            var real = 0, imag = 0, imagSuffix = false, realDigit, imagDigit, suffix;
	            var realLen = 0, imagLen = 0, i = 0, stringLength = s.length;
	            if (!s) {
	                throw sR().Exp_ArgumentNull;
	            }
	            if (stringLength === 0) {
	                throw Exp_Format;
	            }
	            if (i < stringLength && (charAtFunc(s, i) === '+' || charAtFunc(s, i) === '-')) {
	                i++;
	            }
	            var retValue = checkString(s, i);
	            i = retValue._index;
	            realDigit = retValue._digitFlag;
	            if (i < stringLength && (charAtFunc(s, i) === '+' || charAtFunc(s, i) === '-')) {
	                realLen = i;
	                i++;
	                retValue = checkString(s, i);
	                i = retValue._index;
	                imagDigit = retValue._digitFlag;
	                if (i < stringLength && (charAtFunc(s, i) === 'i' || charAtFunc(s, i) === 'j')) {
	                    suffix = charAtFunc(s, i);
	                    i++;
	                    imagSuffix = true;
	
	                }
	                imagLen = i - realLen;
	            } else if (i < stringLength && (charAtFunc(s, i) === 'i' || charAtFunc(s, i) === 'j')) {
	                suffix = charAtFunc(s, i);
	                i++;
	                imagLen = i;
	                imagDigit = realDigit;
	                imagSuffix = true;
	                realDigit = false;
	
	            } else {
	                realLen = i;
	            }
	            if (i < stringLength) {
	                throw Exp_Format;
	            }
	            if (realLen > 0) {
	                if (realDigit) {
	                    real = parseInt(s.substr(0, realLen), 10);
	                } else {
	                    throw Exp_Format;
	                }
	            }
	            if (imagLen > 0) {
	                if (!imagSuffix) {
	                    throw Exp_Format;
	                }
	                if (imagLen === 1 || imagLen === 2 && charAtFunc(s, realLen) === '+') {
	                    imag = 1;
	                } else if (imagLen === 2 && charAtFunc(s, realLen) === '-') {
	                    imag = -1;
	                } else if (imagDigit) {
	                    imag = parseInt(s.substr(realLen, imagLen - 1), 10);
	                } else {
	                    throw Exp_Format;
	                }
	            }
	            return new Complex(real, imag, suffix);
	        }
	
	        try {
	            if (!value) {
	                return new Complex(0, 0);
	            }
	            if (typeof value === 'number') {
	                return new Complex(parseFloat(value), 0);
	            }
	            if (typeof value === 'string') {
	                return parseComplex(value);
	            }
	            return null;
	        } catch (err) {
	            return null;
	        }
	    }
	
	    Functions._convertToComplex = convertToComplex;
	    function processArgCondition(result, argCondition, conditionErrorValue) {
	        if (!Array.isArray(argCondition)) {
	            argCondition = [argCondition];
	        }
	        var argValue = result._retValue, i;
	        for (i = 0; i < argCondition.length; i++) {
	            var argConditionArray = argCondition[i].split(' '),
	                sign = argConditionArray[0], num = parseInt(argConditionArray[1]);
	            if (sign === '<' && argValue < num || sign === '>' && argValue > num ||
	                sign === '<=' && argValue <= num || sign === '>=' && argValue >= num ||
	                sign === '=' && argValue === num || sign === '!=' && argValue !== num ||
	                sign === 'checkLength' && argValue.length > num) {
	                result._retValue = conditionErrorValue === keyword_undefined ? Calc.Errors.Number : conditionErrorValue;
	                result._isExecuteFunc = false;
	                return;
	            }
	        }
	    }
	
	    function processBuiltInFunctionArgs(args, fnArgsLimit) {
	        var argsLimit = [], result, i;
	        if (!fnArgsLimit) {
	            return {_args: args, _isExecuteFunc: true};
	        }
	        if (fnArgsLimit._isAllArgsSameLimit) {
	            for (var j = 0; j < args.length; j++) {
	                argsLimit.push(fnArgsLimit);
	            }
	        } else if (!Array.isArray(fnArgsLimit)) {
	            argsLimit = [fnArgsLimit];
	        } else {
	            argsLimit = fnArgsLimit;
	        }
	        for (i = 0; i < argsLimit.length; i++) {
	            var argLimitValue = argsLimit[i];
	            if (argLimitValue._acceptsRealValue && !args[i]) {
	                throw sR().Exp_ArgumentNull;
	            }
	            var isArgExists = args[i] !== keyword_undefined;
	            if (!isArgExists) {
	                args[i] = argLimitValue._needArgExistsValue ?
	                {_isArgExists: isArgExists, _value: argLimitValue._defaultValue} : argLimitValue._defaultValue;
	                continue;
	            }
	            result = processArgType(args[i], argLimitValue);
	            argLimitValue._argCondition && processArgCondition(result, argLimitValue._argCondition, argLimitValue._conditionErrorValue);
	            if (!result._isExecuteFunc) {
	                break;
	            }
	            args[i] = argLimitValue._needArgExistsValue ?
	            {_isArgExists: isArgExists, _value: result._retValue} : result._retValue;
	        }
	        if (result) {
	            return {_args: args, _isExecuteFunc: result._isExecuteFunc, _result: result._retValue};
	        }
	    }
	}());

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(2);
	    var Calc = __webpack_require__(1);
	
	    var dateTimeHelper_toOADate = Common._DateTimeHelper._toOADate, arrayHelper_getLength = Common._ArrayHelper._getLength,
	        RegexHelper = Common._RegexHelper, Types = Common._Types, inArray = Types._inArray,
	        isNullOrUndefined = Types._isNullOrUndefined;
	    var keyword_undefined = void 0, isNaNFunc = isNaN,
	        Math_abs = Math.abs, Math_exp = Math.exp, Math_log = Math.log, Math_pow = Math.pow;
	    var Calc_Errors = Calc.Errors, CalcErrorsValue = Calc_Errors.Value, CalcErrorsNumber = Calc_Errors.Number,
	        CalcErrorsDivideByZero = Calc_Errors.DivideByZero, CalcErrorsNotAvailable = Calc_Errors.NotAvailable, CalcErrorsNull = Calc_Errors.Null;
	
	    var CalcConvert = Calc.Convert, CalcConvertedError = CalcConvert.CalcConvertedError,
	        CalcConvert_tryToDouble = CalcConvert._tryToDouble, CalcConvert_toInt = CalcConvert._toInt,
	        CalcConvert_toDouble = CalcConvert._toDouble, CalcConvert_isNumber = CalcConvert._isNumber,
	        CalcConvert_toArray = CalcConvert._toArray, CalcConvert_toResult = CalcConvert._toResult;
	    var CalcConvert_isError = CalcConvert._isError;
	    var Functions = Calc.Functions, Calc_Helper = Calc._Helper, approxEqual = Calc_Helper._approxEqual;
	    var parseIntFunc = parseInt, keyword_null = null, Math_floor = Math.floor;
	    var sR = function () {
	        return Common._getResource(Calc.SR)();
	    };
	
	   
	    function AcceptsHelper(args) {
	        this._args = args;
	    }
	
	    AcceptsHelper.prototype = {
	        _acceptsArgs: function (index) {
	            var args = this._args, i;
	            if (!Types._isArray(args)) {
	                args = [args];
	            }
	            if (args[0] === -1 ) {
	                return true;
	            }
	            for (i = 0; i < args.length; i++) {
	                var argAccepts = args[i], sign, num;
	                if (isString(argAccepts)) {
	                    argAccepts = argAccepts.split(' ');
	                    sign = argAccepts[0];
	                    num = parseInt(argAccepts[1]);
	                    if (sign === '!=' && index !== num ||
	                        sign === '>' && index > num ||
	                        sign === '>=' && index >= num ||
	                        sign === '%=' && index % 2 === num) {
	                        return true;
	                    }
	                } else if (index === argAccepts) {
	                    return true;
	                }
	            }
	            return false;
	        },
	        _checkArgs: function () {
	            return this._args;
	        }
	    };
	
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	    function defineFunction(name, fnEvaluate, options) {
	        if (isNullOrUndefined(name)) {
	            throw sR().Exp_InvalidFunctionName;
	        }
	        name = name.toUpperCase();
	        if (Functions._builtInFunctions[name]) {
	            throw sR().Exp_InvalidOverrideFunction;
	        }
	        var fn = Functions._builtInFunctions[name];
	        if (!fn) {
	            Functions._builtInFunctions[name] = fn = new Functions.Function(name, 0, 255);
	        } else if (!options || !options.override) {
	            throw sR().Exp_OverrideNotAllowed;
	        }
	        if (fnEvaluate && typeof fnEvaluate === 'function') {
	            fn.evaluate = fnEvaluate;
	        }
	        Types._each(options, function (prop, value) {
	            var acceptHelper;
	            if (inArray(prop, ['acceptsReference', 'acceptsArray', 'acceptsError', 'acceptsMissingArgument',
	                    'precedentReference', 'expandColumns', 'expandRows']) >= 0) {
	                acceptHelper = new AcceptsHelper(value);
	                fn[prop] = function (index) {
	                    return acceptHelper._acceptsArgs(index);
	                };
	            } else if (inArray(prop, ['isVolatile', 'isBranch', 'findTestArgument', 'returnReference', 'isContextSensitive']) >= 0) {
	                acceptHelper = new AcceptsHelper(value);
	                fn[prop] = function () {
	                    return acceptHelper._checkArgs();
	                };
	            } else if (options.hasOwnProperty(prop) && prop !== 'override') {
	                fn[prop] = value;
	            }
	        });
	        return fn;
	    }
	
	    Functions._defineBuiltInFunction = function (name, fnEvaluate, minArgs, maxArgs, argsLimit, acceptsReference, acceptsArray, options) {
	        if (!options) {
	            options = {};
	        }
	        if (minArgs !== keyword_undefined) {
	            options.minArgs = minArgs;
	        }
	        if (maxArgs !== keyword_undefined) {
	            options.maxArgs = maxArgs;
	        }
	        if (acceptsReference !== keyword_undefined) {
	            options.acceptsReference = acceptsReference;
	        }
	        if (acceptsArray !== keyword_undefined) {
	            options.acceptsArray = acceptsArray;
	        }
	        if (argsLimit !== keyword_undefined) {
	            options._argsLimit = argsLimit;
	        }
	       
	        if (options._acceptsMissingArgument !== keyword_undefined) {
	            options.acceptsMissingArgument = options._acceptsMissingArgument;
	        }
	        if (options._isVolatile !== keyword_undefined) {
	            options.isVolatile = options._isVolatile;
	        }
	        if (options._isContextSensitive !== keyword_undefined) {
	            options.isContextSensitive = options._isContextSensitive;
	        }
	        if (options._precedentReference !== keyword_undefined) {
	            options.precedentReference = options._precedentReference;
	        }
	        if (options._arrayArgumentEvaluateMode !== keyword_undefined) {
	            options.arrayArgumentEvaluateMode = options._arrayArgumentEvaluateMode;
	        }
	        if (options._acceptsError !== keyword_undefined) {
	            options.acceptsError = options._acceptsError;
	        }
	        return defineFunction(name, fnEvaluate, options);
	    };
	
	
	    Functions._MAX_DOUBLE_VALUE = 1.79769e+308;
	    function isBoolean(value) {
	        return typeof value === 'boolean';
	    }
	
	    Functions._isBoolean = isBoolean;
	    function isString(value) {
	        return typeof value === 'string';
	    }
	
	    Functions._isString = isString;
	    function isNumber(value) {
	        return typeof value === 'number';
	    }
	
	    Functions._isNumber = isNumber;
	
	    function isLeapYear(year) {
	       
	        return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0 || year === 1900;
	    }
	
	    Functions._isLeapYear = isLeapYear;
	    function annualYearBasis(date, basis) {
	        switch (basis) {
	            case 0:             case 2:             case 4:                 return 360;
	            case 1:                 return isLeapYear(date.getFullYear()) ? 366 : 365;
	            case 3:                 return 365;
	            default:
	                return -1;
	        }
	    }
	
	    Functions._annualYearBasis = annualYearBasis;
	    function compareDateTime(date1, date2) {
	        return date1 - date2;
	    }
	
	    Functions._compareDateTime = compareDateTime;
	    function getDaysInMonth(year, month) {
	        if (inArray(month, [0, 2, 4, 6, 7, 9, 11]) >= 0) {
	            return 31;
	        }
	        if (inArray(month, [3, 5, 8, 10]) >= 0) {
	            return 30;
	        }
	        if (month === 1) {
	            return isLeapYear(year) ? 29 : 28;
	        }
	    }
	
	    Functions._getDaysInMonth = getDaysInMonth;
	    function getDaysBetweenBASIS(isMSRB, isSymOrEp, from, to) {
	        var y1 = from.getFullYear(), m1 = from.getMonth(), d1 = from.getDate(),
	            y2 = to.getFullYear(), m2 = to.getMonth(), d2 = to.getDate();
	        if (isMSRB) {
	            var isFromDate2Month = m1 === 2 && getDaysInMonth(y1, m1) === d1,
	                isToDate2Month = m2 === 2 && getDaysInMonth(y2, m2) === d2;
	            if (isSymOrEp) {
	                if (isFromDate2Month) {
	                    d1 = 30;
	                }
	                if (isToDate2Month) {
	                    d2 = 30;
	                }
	            } else if (isFromDate2Month && isToDate2Month) {
	                d1 = 30;
	                d2 = 30;
	            }
	            if (d2 === 31 && d1 >= 30) {
	                d2 = 30;
	            }
	        } else if (d2 === 31) {
	            d2 = 1;
	            isSymOrEp && m2++;
	        }
	        if (d1 === 31) {
	            d1 = 30;
	        }
	        return (y2 - y1) * 360 + (m2 - m1) * 30 + d2 - d1;
	    }
	
	    function daysBetweenBasis(from, to, basis) {
	        var sign = 1, retValue;
	        if (compareDateTime(from, to) > 0) {
	            var swap = from;
	            from = to;
	            to = swap;
	            sign = -1;
	        }
	        if (inArray(basis, [1, 2, 3]) >= 0) {
	            retValue = sign * CalcConvert_toInt(dateTimeHelper_toOADate(to) - dateTimeHelper_toOADate(from));
	        } else if (inArray(basis, [4, 5]) >= 0) {
	            retValue = sign * getDaysBetweenBASIS(false, basis === 5, from, to);
	        } else {
	            retValue = sign * getDaysBetweenBASIS(true, basis === 6, from, to);
	        }
	        return retValue;
	    }
	
	    Functions._daysBetweenBasis = daysBetweenBasis;
	    function st_normsdist(z) {
	        var w, x, y;
	        if (z === 0.0) {
	            x = 0.0;
	        } else {
	            y = 0.5 * Math_abs(z);
	            if (y >= (6.0  * 0.5)) {
	                x = 1.0;
	            } else if (y < 1.0) {
	                w = y * y;
	                x = ((((((((0.000124818987 * w - 0.001075204047) * w + 0.005198775019) * w - 0.019198292004) * w + 0.059054035642) * w - 0.151968751364) * w + 0.319152932694) * w - 0.531923007300) * w + 0.797884560593) * y * 2.0;
	            } else {
	                y -= 2.0;
	                x = (((((((((((((-0.000045255659 * y + 0.000152529290) * y - 0.000019538132) * y - 0.000676904986) * y + 0.001390604284) * y - 0.000794620820) * y - 0.002034254874) * y + 0.006549791214) * y - 0.010557625006) * y + 0.011630447319) * y - 0.009279453341) * y + 0.005353579108) * y - 0.002141268741) * y + 0.000535310849) * y + 0.999936657524;
	            }
	        }
	        return z > 0.0 ? (x + 1.0) * 0.5 : (1.0 - x) * 0.5;
	    }
	
	    Functions._st_normsdist = st_normsdist;
	   
	    function st_includeSubstotals(args, includeSubtotals, number, isDevVarFormula, data) {
	        var includeHiddenRow = number < 100;
	        var isCountFormula = number === 2  || number === 102 ;
	        var isCountOrCountaFormula = isCountFormula || number === 3  || number === 103 ;
	        var isMinFormula = number === 5  || number === 105 ;
	        var isMinOrMaxFormula = number === 4  || number === 104  || isMinFormula;
	        var isSumformula = number === 9  || number === 109 ;
	        var isDevVarOrAverageOrSumFormula = number === 1 || number === 101 || isSumformula || isDevVarFormula;
	        var isProductFormula = number === 6  || number === 106 ;
	        var retValue = isProductFormula ? 1 : 0, anyValue = false, n = 0, i, range, rangeRef, refRow, refCol, row, col, rowRef, val;
	        for (i = 0; i < arrayHelper_getLength(args); i++) {
	           
	            var obj = args[i], array;
	            if (isCountOrCountaFormula) {
	                array = CalcConvert_toArray(obj, 0 , false, false, false, isCountFormula);
	            } else if (isMinOrMaxFormula) {
	                array = CalcConvert_toArray(obj, 5 , false, true, false, true);
	            } else if (isDevVarOrAverageOrSumFormula) {
	                array = CalcConvert_toArray(obj, 5 , false, isSumformula, false, true);
	            } else if (isProductFormula) {
	                array = CalcConvert_toArray(obj, 5 , false, false, false, true);
	            }
	            if (array.isError) {
	                return array[0];
	            }
	            if (array.isConvertError) {
	                return CalcErrorsValue;
	            }
	            var rangeCount = array.rangeCount, isReference = array.isReference;
	            for (range = 0; range < rangeCount; range++) {
	                rangeRef = rangeCount > 1 ? array[range] : array;
	                if (isReference) {
	                    refRow = obj.getRow(range);
	                    refCol = obj.getColumn(range);
	                }
	                for (row = 0; row < arrayHelper_getLength(rangeRef); row++) {
	                   
	                    if (!includeSubtotals && isReference && obj.isHiddenRow(range, row, includeHiddenRow)) {
	                        continue;
	                    }
	                    rowRef = rangeRef[row];
	                    for (col = 0; col < arrayHelper_getLength(rowRef); col++) {
	                        if (includeSubtotals || !isReference || !obj.isSubtotal(range, row + refRow, col + refCol)) {
	                            val = rowRef[col];
	                            if (val !== CalcConvertedError) {
	                                if (isCountOrCountaFormula && !isNullOrUndefined(val) && (!isCountFormula || val !== '' && CalcConvert_isNumber(val, true))) {
	                                    retValue++;
	                                } else if (isMinOrMaxFormula && (!anyValue || isMinFormula && val < retValue || !isMinFormula && val > retValue)) {
	                                    retValue = val;
	                                } else if (isDevVarOrAverageOrSumFormula) {
	                                    if (isDevVarFormula) {
	                                        data.sumx += val;
	                                        data.sumx2 += val * val;
	                                        data.n++;
	                                    } else {
	                                        retValue += val;
	                                        n++;
	                                    }
	                                } else if (isProductFormula) {
	                                    retValue *= val;
	                                    n++;
	                                }
	                                anyValue = true;
	                            }
	                        }
	                    }
	                }
	            }
	        }
	        if (isDevVarOrAverageOrSumFormula) {
	            if (isSumformula) {
	                return retValue;
	            }
	            if (!isDevVarFormula) {
	                return n === 0 ? CalcErrorsDivideByZero : CalcConvert_toResult(retValue / n);
	            }
	        } else if (isProductFormula) {
	            return CalcConvert_toResult(n > 0 ? retValue : 0.0);
	        } else {
	            return retValue;
	        }
	    }
	
	    Functions._st_includeSubstotals = st_includeSubstotals;
	   
	    function st_devVarIncludeSubtotals(args, includeSubtotals, number) {
	        var temp = number % 100;
	        var isStdevFormula = temp === 7  || temp === 8 ;
	        var num = temp === 7  || temp === 10  ? 1 : 0;
	        var data = {sumx: 0.0, sumx2: 0.0, n: 0.0}, result;
	        st_includeSubstotals(args, includeSubtotals, number, true, data);
	        if (data.n <= num) {
	            return CalcErrorsDivideByZero;
	        }
	        result = Math.max(0.0, (data.n * data.sumx2 - data.sumx * data.sumx) / (data.n * (data.n - num)));
	        return isStdevFormula ? CalcConvert_toResult(Math.sqrt(result)) : CalcConvert_toResult(result);
	    }
	
	    Functions._st_devVarIncludeSubtotals = st_devVarIncludeSubtotals;
	
	    function st_includeAggregate(args, option, number) {
	        var ignoreHiddenRow = option === 1 || option === 3 || option === 5 || option === 7;
	        var ignoreNestSubtotalAggregate = option === 1 || option === 2 || option === 3 || option === 4 || option === 0;
	        var ignoreError = option === 2 || option === 3 || option === 6 || option === 7;
	        var isCountFormula = number === 2 ;
	        var isCountOrCountaFormula = isCountFormula || number === 3 ;
	        var isMedian = number === 12;
	        var isModeSngl = number === 13;
	        var isLarge = number === 14;
	        var isSmall = number === 15;
	        var isPercentileInc = number === 16;
	        var isQuartileInc = number === 17;
	        var isPercentileExc = number === 18;
	        var isQuartileExc = number === 19;
	
	        var isDoubleParam = isLarge || isSmall || isPercentileInc || isQuartileInc || isPercentileExc || isQuartileExc;
	
	        var retValue = [], i, range, rangeRef, refRow, refCol, row, col, rowRef, val;
	        if (isDoubleParam && arrayHelper_getLength(args) !== 2) {
	            return CalcErrorsValue;
	        }
	        for (i = 0; i < arrayHelper_getLength(args); i++) {
	           
	            var obj = args[i], array;
	
	            if (isCountOrCountaFormula) {
	                array = CalcConvert_toArray(obj, 0, false, false, false, isCountFormula);
	            } else {
	                array = CalcConvert_toArray(obj, 5, false, false, false, true);
	            }
	            if (array.isConvertError) {
	                return CalcErrorsValue;
	            }
	            var rangeCount = array.rangeCount, isReference = array.isReference;
	            for (range = 0; range < rangeCount; range++) {
	                rangeRef = rangeCount > 1 ? array[range] : array;
	                if (isReference) {
	                    refRow = obj.getRow(range);
	                    refCol = obj.getColumn(range);
	                }
	                for (row = 0; row < arrayHelper_getLength(rangeRef); row++) {
	                   
	                    if (isReference && obj.isHiddenRow(range, row, !ignoreHiddenRow)) {
	                        continue;
	                    }
	                    rowRef = rangeRef[row];
	                    for (col = 0; col < arrayHelper_getLength(rowRef); col++) {
	                        if (isReference && ignoreNestSubtotalAggregate && obj.isSubtotal(range, row + refRow, col + refCol)) {
	                            continue;
	                        }
	                        val = rowRef[col];
	                        if (ignoreError && CalcConvert_isError(val)) {
	                            continue;
	                        }
	                        if (!ignoreError && CalcConvert_isError(val)) {
	                            return val;
	                        }
	                        if (typeof val === 'object' && Object.keys(val).length === 0) {
	                            continue;
	                        }
	                        retValue.push(val);
	                    }
	                }
	            }
	        }
	        if (isMedian || isModeSngl || isDoubleParam) {
	            return st_includeAggregateMulti(retValue, number);
	        }
	        return st_includeSubstotals(retValue, true, number );
	    }
	
	    Functions._st_includeAggregate = st_includeAggregate;
	    function getListData(args) {
	        var list = [], k;
	        for (k = 0; k < arrayHelper_getLength(args); k++) {
	            addArrayDataToList(args[k], list);
	        }
	        return list;
	    }
	
	    function sortArray(list) {
	        list.sort(function (x, y) {
	            return x - y;
	        });
	    }
	
	    function addArrayDataToList(array, list) {
	        for (var i = 0; i < arrayHelper_getLength(array); i++) {
	            var x = array[i];
	            if (x !== CalcConvertedError) {
	                list.push(x);
	            }
	        }
	        sortArray(list);
	    }
	
	    function st_median() {
	        var list = getListData(arguments[0]);
	        var listLength = arrayHelper_getLength(list);
	        if (listLength === 0) {
	            return CalcErrorsNumber;
	        }
	        if (listLength % 2 === 0) {
	            return (CalcConvert_toDouble(list[listLength / 2 - 1]) + CalcConvert_toDouble(list[listLength / 2])) / 2.0;
	        }
	        return list[parseIntFunc((listLength / 2).toString())];
	    }
	
	    function st_mode() {
	        var mode = keyword_null;
	        var modeCount = 0;
	        var list = getListData(arguments[0]), listLength = arrayHelper_getLength(list);
	        var i, j, count;
	        for (i = 0; i < listLength; i++) {
	            count = 0;
	            for (j = 0; j < listLength; j++) {
	                if (j !== i && list[j] === list[i]) {
	                    count++;
	                }
	            }
	            if (count > modeCount) {
	                modeCount = count;
	                mode = list[i];
	            }
	        }
	        return modeCount === 0 ? CalcErrorsNotAvailable : mode;
	    }
	
	    function st_large(array, k) {
	        return st_large_small(true, array, k);
	    }
	
	    function st_small(array, k) {
	        return st_large_small(false, array, k);
	    }
	
	    function st_large_small(isLarge, array, k) {
	        var list = [];
	        addArrayDataToList(array, list);
	        var listLength = arrayHelper_getLength(list);
	        if (k <= 0 || listLength < k) {
	            return CalcErrorsNumber;
	        }
	        return isLarge ? list[listLength - k] : list[k - 1];
	    }
	
	    function st_percentile(array, k) {
	        array = CalcConvert_toArray(array, 1 , true, true, false, true);
	        k = CalcConvert_toDouble(k);
	        if (array.isError) {
	            return array[0];
	        }
	        if (array.isConvertError || isNaNFunc(k)) {
	            return CalcErrorsValue;
	        }
	        var list = [];
	        addArrayDataToList(array, list);
	        if (!arrayHelper_getLength(list) || k < 0 || k > 1) {
	            return CalcErrorsNumber;
	        }
	        var index = k * (arrayHelper_getLength(list) - 1), rem = index % 1.0;
	        index = parseIntFunc(index.toString());
	        return rem === 0.0 ? list[index] : CalcConvert_toDouble(list[index]) + rem * (CalcConvert_toDouble(list[index + 1]) - CalcConvert_toDouble(list[index]));
	    }
	
	    function st_quartile(array, quart) {
	        var quartIndex = inArray(quart, [0, 1, 2, 3, 4]);
	        return quartIndex < 0 ? CalcErrorsNumber : st_percentile(array, quartIndex * 0.25);
	    }
	
	    function st_percentileexc(list, k) {
	       
	        var listLength = arrayHelper_getLength(list);
	        sortArray(list);
	        if (!listLength) {
	            return CalcErrorsNumber;
	        }
	        var index = k * (listLength + 1) - 1;
	        var rem = index % 1.0;
	        if (index < 0.0 || (listLength - 1) < index) {
	            return CalcErrorsNumber;
	        }
	        var tempIndex = Math_floor(index), temp = list[tempIndex];
	        return rem === 0.0 ? temp : temp + rem * (list[tempIndex + 1] - temp);
	    }
	
	    function st_quartileexc(array, quart) {
	       
	        var quartIndex = inArray(quart, [1, 2, 3]);
	        return quartIndex < 0 ? CalcErrorsNumber : st_percentileexc(array, (quartIndex + 1) * 0.25);
	    }
	
	    function st_includeAggregateMulti(arg, number) {
	        var isMedian = number === 12;
	        var isModeSngl = number === 13;
	        var isLarge = number === 14;
	        var isSmall = number === 15;
	        var isPercentileInc = number === 16;
	        var isQuartileInc = number === 17;
	        var isPercentileExc = number === 18;
	        var isQuartileExc = number === 19;
	        if (isMedian) {
	            return st_median(arg);
	        } else if (isModeSngl) {
	            return st_mode(arg);
	        } else if (isLarge) {
	            return st_large(arg[0], arg[1]);
	        } else if (isSmall) {
	            return st_small(arg[0], arg[1]);
	        } else if (isPercentileInc) {
	            return st_percentile(arg[0], arg[1]);
	        } else if (isQuartileInc) {
	            return st_quartile(arg[0], arg[1]);
	        } else if (isPercentileExc) {
	            return st_percentileexc(arg[0], arg[1]);
	        } else if (isQuartileExc) {
	            return st_quartileexc(arg[0], arg[1]);
	        }
	        return CalcErrorsNull;
	    }
	
	    Functions._st_includeAggregateMulti = st_includeAggregateMulti;
	
	    function fact(x) {
	        var result = 1.0, i;
	        for (i = x; i > 1; i--) {
	            result *= i;
	        }
	        return result;
	    }
	
	    Functions._fact = fact;
	    function days360(startDate, endDate, method) {
	        var startDay = startDate.getDate(), endDay = endDate.getDate(),
	            startMonth = startDate.getMonth(), endMonth = endDate.getMonth(),
	            startYear = startDate.getFullYear(), endYear = endDate.getFullYear();
	        startDay = startDay === 31 ? 30 : startDay;
	        if (method) {
	            endDay = endDay === 31 ? 30 : endDay;
	        } else if (endDay === 31) {
	            if (startDay < 30) {
	                endDay = 1;
	                endMonth++;
	                if (endMonth > 12) {
	                    endMonth = 1;
	                    endYear++;
	                }
	            } else {
	                endDay = 30;
	            }
	        }
	        return ((endYear - startYear) * 12 + endMonth - startMonth) * 30 + endDay - startDay;
	    }
	
	    Functions._days360 = days360;
	    function yearfracImp(from, to, basis) {
	        var days = daysBetweenBasis(from, to, basis), peryear;
	        if (days < 0) {
	            days = -days;
	            var swap = from;
	            from = to;
	            to = swap;
	        }
	        if (basis === 1) {
	            var y1 = from.getFullYear(), y2 = to.getFullYear();
	            var d1, d2, feb29s, years;
	            d1 = new Date(from.valueOf());
	            d1.setFullYear(d1.getFullYear() + 1);
	            if (compareDateTime(to, d1) > 0) { 
	                years = y2 + 1 - y1;
	                d1 = new Date(y1, 0, 1);
	                d2 = new Date(y2 + 1, 0, 1);
	                feb29s = CalcConvert_toInt(dateTimeHelper_toOADate(d2) - dateTimeHelper_toOADate(d1)) - 365 * (y2 + 1 - y1);
	            } else {   
	                years = 1;
	                feb29s = (isLeapYear(y1) && from.getMonth() < 3 || isLeapYear(y2) && (to.getMonth() * 0x100 + to.getDate() >= 2 * 0x100 + 29)) ? 1 : 0;
	            }
	            var d = CalcConvert_toDouble(feb29s) / CalcConvert_toDouble(years);
	            peryear = 365.0 + d;
	        } else {
	            peryear = annualYearBasis(new Date(), basis);
	        }
	        return days / peryear;
	    }
	
	    function yearfrac(startDate, endDate, basis) {
	        if (basis < 0 || basis > 4) {
	            return CalcErrorsNumber;
	        }
	        return yearfracImp(startDate, endDate, basis);
	    }
	
	    Functions._yearfrac = yearfrac;
	    function compareFunc(crit, v1, v2) {
	        var retValue;
	        if (crit === 0) {
	            retValue = v1 <= v2;
	        } else if (crit === 1) {
	            retValue = v1 >= v2;
	        } else if (crit === 2) {
	            retValue = v1 !== v2;
	        } else if (crit === 3) {
	            retValue = v1 < v2;
	        } else if (crit === 4) {
	            retValue = v1 === v2;
	        } else if (crit === 5) {
	            retValue = v1 > v2;
	        }
	        return retValue;
	    }
	
	    function buildCriteria(crit, criteria) {
	        var critVal = -1, isCritNumber = true, doubleValue = {value: 0}, wildcardCriteria = RegexHelper._getWildcardCriteriaFullMatch(criteria);
	        if (crit === 4 && wildcardCriteria) {
	            var regMatchString = function (v1) {
	                var reg = RegexHelper._getRegIgnoreCase(wildcardCriteria);
	                reg.lastIndex = 0;
	                return reg.test(v1);
	            };
	        }
	        function isEmptyString(str) {
	            return str.toString().trim().length === 0;
	        }
	        if (isNullOrUndefined(criteria)) {
	            critVal = 0;
	        } else if (wildcardCriteria) {
	            isCritNumber = false;
	        } else if (!isEmptyString(criteria) && CalcConvert_tryToDouble(criteria.toString(), doubleValue)) {
	            critVal = doubleValue.value;
	        } else {
	            isCritNumber = false;
	        }
	        return function (value) {
	            if (value instanceof Calc.CalcError) {
	                return false;
	            }
	            if (isNullOrUndefined(value)) {
	                value = '';
	            }
	            var doubleNum = {value: 0};
	            if (isCritNumber && CalcConvert_tryToDouble(value, doubleNum)) {
	                return value !== '' && compareFunc(crit, doubleNum.value, critVal);
	            } else if (wildcardCriteria && CalcConvert_isNumber(value, true)) {
	                return false;
	            }
	            var fixedCriteria = isNullOrUndefined(criteria) ? '' : criteria.toString().toUpperCase();
	            return wildcardCriteria && regMatchString ? regMatchString(value.toString())
	                : compareFunc(crit, value.toString().toUpperCase(), fixedCriteria);
	        };
	    }
	
	    var criteriaCaches = {};
	    var MathHelper = {
	        _approxFloor: function (x) {
	            var r = Math.floor(x);
	            return approxEqual(x, r + 1.0) ? r + 1.0 : r;
	        },
	        _parseCriteria: function (criteria) {
	            var key = criteria;
	            var cache = criteriaCaches;
	            if (!cache) {
	                criteriaCaches = cache = {};
	            }
	            var result = cache[key];
	            if (result) {
	                return result;
	            }
	            if (CalcConvert_isNumber(criteria)) {
	               
	                result = cache[key] = buildCriteria(4, criteria);
	                return result;
	            }
	            var OPERATORS_INFIX = '=><', critString = isNullOrUndefined(criteria) ? '' : criteria.toString().toUpperCase(),
	                prevChar = '\0', i, tc;
	            for (i = 0; i < 2 && i < arrayHelper_getLength(critString); i++) {
	                tc = critString[i];
	                if (OPERATORS_INFIX.indexOf(tc) !== -1) {
	                    if (tc === '=') {
	                        if (prevChar === '<') {
	                            result = buildCriteria(0, critString.substring(2));
	                        } else if (prevChar === '>') {
	                            result = buildCriteria(1, critString.substring(2));
	                        } else {
	                            result = buildCriteria(4, prevChar === '\0' ? critString.substring(1) : criteria);
	                        }
	                        cache[key] = result;
	                        return result;
	                    } else if (prevChar === '\0') {
	                        prevChar = tc;
	                    } else if (prevChar === '<') {
	                        if (tc === '>') {
	                            result = buildCriteria(2, critString.substring(2));
	                        } else {
	                            result = buildCriteria(3, critString.substring(1));
	                        }
	                        cache[key] = result;
	                        return result;
	                    } else if (prevChar === '>') {
	                        cache[key] = result = buildCriteria(5, critString.substring(1));
	                        return result;
	                    }
	                } else if (prevChar === '<') {
	                    cache[key] = result = buildCriteria(3, critString.substring(1));
	                    return result;
	                } else if (prevChar === '>') {
	                    cache[key] = result = buildCriteria(5, critString.substring(1));
	                    return result;
	                } else {
	                    break;
	                }
	            }
	            cache[key] = result = buildCriteria(4, criteria);
	            return result;
	        },
	        _pow10: function (n) {
	            var value = [1e0, 1e1, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13, 1e14, 1e15, 1e16][n];
	            return isNullOrUndefined(value) ? Math_pow(10.0, parseFloat(n)) : value;
	        },
	        _approxCeiling: function (x) {
	            var r = Math.ceil(x);
	            return approxEqual(x, r - 1.0) ? r - 1.0 : r;
	        },
	        _round: function (number, digits) {
	            var power = MathHelper._pow10(Math_abs(digits));
	            number = digits < 0 ? number / power : number * power;
	            number = number < 0 ? MathHelper._approxCeiling(number - 0.5) : MathHelper._approxFloor(number + 0.5);
	            number = digits < 0 ? number * power : number / power;
	            return CalcConvert_toResult(number);
	        },
	        _combin: function (n, k) {
	            if (n < 0.0 || k < 0.0 || n < k) {
	                return CalcErrorsNumber;
	            }
	            var result = 1.0, i;
	            k = Math.min(n - k, k);
	            for (i = 1.0; i <= k; i++) {
	                result *= n - i + 1.0;
	                result /= i;
	            }
	            return CalcConvert_toResult(result);
	        },
	        _pow1p: function (x, y) {
	            var ret = Math_abs(x) > 0.5 ? Math_pow(1.0 + x, y) : Math_exp(y * Math_log(1.0 + x));
	            if (!isFinite(ret)) {
	                if (ret === Number.POSITIVE_INFINITY) {
	                    ret = Functions._MAX_DOUBLE_VALUE;
	                } else if (ret === Number.NEGATIVE_INFINITY) {
	                    ret = -Functions._MAX_DOUBLE_VALUE;
	                }
	            } else if (isNaNFunc(ret)) {
	                ret = 4.94066e-324;
	            }
	            return ret;
	        },
	        _sinhCosh: function (d, isSinh) {
	            return (Math_exp(d) + (isSinh ? -1 : 1) * Math_exp(-d)) / 2;
	        },
	        _log: function (a, base) {
	            if (isNaNFunc(a)) {
	                return a;
	            }
	            if (isNaNFunc(base)) {
	                return base;
	            }
	            if (base !== 1.0 && a === 1.0 || base !== 0.0 && (base !== Number.POSITIVE_INFINITY)) {
	                return (Math_log(a) / Math_log(base));
	            }
	            return NaN;
	        }
	    };
	    Functions._MathHelper = MathHelper;
	
	    module.exports = Functions;
	
	}());

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	(function () {
	    'use strict';
	
	    function functionDescription(description, parameters) {
	        return {
	            description: description,
	            parameters: parameters
	        };
	    }
	
	    function parameterDescription(name, repeatable) {
	        return {
	            name: name,
	            repeatable: repeatable
	        };
	    }
	
	    module.exports = {
	        Exp_InvalidCast: 'Invalid Cast Exception',
	        Exp_FormulaInvalidChar: 'The formula contains an invalid character: \'{0}\' at index on {1}',
	        Exp_FormulaInvalid: 'Invalid Formula',
	        Exp_InvalidFunctionName: 'Invalid function name',
	        Exp_InvalidOverrideFunction: 'Cannot override built-in function',
	        Exp_InvalidArray: 'Invalid array',
	        Exp_OverrideNotAllowed: 'Attempt to override function while override is not allowed',
	        Exp_NoSyntax: 'No syntax \'{0}\' to match the syntax \'{1}\'.',
	        Exp_IsValid: '\'{0}\' is invalid.',
	        Exp_InvalidParameters: 'Invalid function parameter at {0}.',
	        Exp_InvalidArrayColumns: 'The length of array columns are not equal at {0}.',
	        Exp_ExprIsNull: 'The argument \'expr\' is null',
	        Exp_InvalidOperation: 'Invalid Operation Exception',
	        Exp_ArgumentNull: 'Argument Null Exception',
	        Exp_CriteriaIsNull: 'Criteria is null',
	        Exp_Format: 'Format',
	        Exp_ArrayFromulaPart: 'Cannot change part of an array.',
	        Exp_NotSupported: 'Not Supported Exception',
	        _builtInFunctionsResource: {
	            'ABS': functionDescription('This function calculates the absolute value of the specified value.', [
	                parameterDescription('value')
	            ]),
	            'ACCRINT': functionDescription('This function calculates the accrued interest for a security that pays periodic interest.', [
	                parameterDescription('issue'),
	                parameterDescription('first'),
	                parameterDescription('settle'),
	                parameterDescription('rate'),
	                parameterDescription('par'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'ACCRINTM': functionDescription('This function calculates the accrued interest at maturity for a security that pays periodic interest.', [
	                parameterDescription('issue'),
	                parameterDescription('maturity'),
	                parameterDescription('rate'),
	                parameterDescription('par'),
	                parameterDescription('basis')
	            ]),
	            'ACOS': functionDescription('This function calculates the arccosine, that is, the angle whose cosine is the specified value.', [
	                parameterDescription('value')
	            ]),
	            'ACOSH': functionDescription('This function calculates the inverse hyperbolic cosine of the specified value.', [
	                parameterDescription('value')
	            ]),
	            'ADDRESS': functionDescription('This function uses the row and column numbers to create a cell address in text.', [
	                parameterDescription('row'),
	                parameterDescription('column'),
	                parameterDescription('absnum'),
	                parameterDescription('a1style'),
	                parameterDescription('sheettext')
	            ]),
	            'AMORDEGRC': functionDescription('This function returns the depreciation for an accounting period, taking into consideration prorated depreciation, and applies a depreciation coefficient in the calculation based on the life of the assets.', [
	                parameterDescription('cost'),
	                parameterDescription('datepurchased'),
	                parameterDescription('firstperiod'),
	                parameterDescription('salvage'),
	                parameterDescription('period'),
	                parameterDescription('drate'),
	                parameterDescription('basis')
	            ]),
	            'AMORLINC': functionDescription('This function calculates the depreciation for an accounting period, taking into account prorated depreciation.', [
	                parameterDescription('cost'),
	                parameterDescription('datepurchased'),
	                parameterDescription('firstperiod'),
	                parameterDescription('salvage'),
	                parameterDescription('period'),
	                parameterDescription('drate'),
	                parameterDescription('basis')
	            ]),
	            'AND': functionDescription('Check whether all arguments are True, and returns True if all arguments are True.', [
	                parameterDescription('logical1'),
	                parameterDescription('logical2')
	            ]),
	            'ASIN': functionDescription('This function calculates the arcsine, that is, the angle whose sine is the specified value.', [
	                parameterDescription('value')
	            ]),
	            'ASINH': functionDescription('This function calculates the inverse hyperbolic sine of a number.', [
	                parameterDescription('value')
	            ]),
	            'ATAN': functionDescription('This function calculates the arctangent, that is, the angle whose tangent is the specified value.', [
	                parameterDescription('value')
	            ]),
	            'ATAN2': functionDescription('This function calculates the arctangent of the specified x- and y-coordinates.', [
	                parameterDescription('x'),
	                parameterDescription('y')
	            ]),
	            'ATANH': functionDescription('This function calculates the inverse hyperbolic tangent of a number.', [
	                parameterDescription('value')
	            ]),
	            'AVEDEV': functionDescription('This function calculates the average of the absolute deviations of the specified values from their mean.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'AVERAGE': functionDescription('This function calculates the average of the specified numeric values.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'AVERAGEA': functionDescription('This function calculates the average of the specified values, including text or logical values as well as numeric values.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'AVERAGEIF': functionDescription('This function calculates the average of the specified numeric values provided that they meet the specified criteria.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true),
	                parameterDescription('condition')
	            ]),
	            'AVERAGEIFS': functionDescription('This function calculates the average of all cells that meet multiple specified criteria.', [
	                parameterDescription('value1'),
	                parameterDescription('condition1'),
	                parameterDescription('value2', true),
	                parameterDescription('condition2...')
	            ]),
	            'BESSELI': functionDescription('This function calculates the modified Bessel function of the first kind evaluated for purely imaginary arguments.', [
	                parameterDescription('value'),
	                parameterDescription('order')
	            ]),
	            'BESSELJ': functionDescription('This function calculates the Bessel function of the first kind.', [
	                parameterDescription('value'),
	                parameterDescription('order')
	            ]),
	            'BESSELK': functionDescription('This function calculates the modified Bessel function of the second kind evaluated for purely imaginary arguments.', [
	                parameterDescription('value'),
	                parameterDescription('order')
	            ]),
	            'BESSELY': functionDescription('This function calculates the Bessel function of the second kind.', [
	                parameterDescription('value'),
	                parameterDescription('order')
	            ]),
	            'BETADIST': functionDescription('This function calculates the cumulative beta distribution function.', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'BETAINV': functionDescription('This function calculates the inverse of the cumulative beta distribution function.', [
	                parameterDescription('prob'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'BIN2DEC': functionDescription('This function converts a binary number to a decimal number', [
	                parameterDescription('number')
	            ]),
	            'BIN2HEX': functionDescription('This function converts a binary number to a hexadecimal number.', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'BIN2OCT': functionDescription('This function converts a binary number to an octal number.', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'BINOMDIST': functionDescription('This function calculates the individual term binomial distribution probability.', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('cumulative')
	            ]),
	            'CEILING': functionDescription('This function rounds a number up to the nearest multiple of a specified value.', [
	                parameterDescription('value'),
	                parameterDescription('signif')
	            ]),
	            'CHAR': functionDescription('This function returns the character specified by a number.', [
	                parameterDescription('value')
	            ]),
	            'CHIDIST': functionDescription('This function calculates the one-tailed probability of the chi-squared distribution.', [
	                parameterDescription('value'),
	                parameterDescription('deg')
	            ]),
	            'CHIINV': functionDescription('This function calculates the inverse of the one-tailed probability of the chi-squared distribution', [
	                parameterDescription('prob'),
	                parameterDescription('deg')
	            ]),
	            'CHITEST': functionDescription('This function calculates the test for independence from the chi-squared distribution.', [
	                parameterDescription('obs_array'),
	                parameterDescription('exp_array')
	            ]),
	            'CHOOSE': functionDescription('This function returns a value from a list of values.', [
	                parameterDescription('index'),
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'CLEAN': functionDescription('This function removes all non-printable characters from text.', [
	                parameterDescription('text')
	            ]),
	            'CODE': functionDescription('This function returns a numeric code to represent the first character in a text string. The returned code corresponds to the Windows character set (ANSI).', [
	                parameterDescription('text')
	            ]),
	            'COLUMN': functionDescription('This function returns the column number of a reference.', [
	                parameterDescription('reference')
	            ]),
	            'COLUMNS': functionDescription('This function returns the number of columns in an array.', [
	                parameterDescription('array')
	            ]),
	            'COMBIN': functionDescription('This function calculates the number of possible combinations for a specified number of items.', [
	                parameterDescription('k'),
	                parameterDescription('n')
	            ]),
	            'COMPLEX': functionDescription('This function converts real and imaginary coefficients into a complex number.', [
	                parameterDescription('realcoeff'),
	                parameterDescription('imagcoeff'),
	                parameterDescription('suffix')
	            ]),
	            'CONCATENATE': functionDescription('This function combines multiple text strings or numbers into one text string.', [
	                parameterDescription('text1'),
	                parameterDescription('text2'),
	                parameterDescription('....')
	            ]),
	            'CONFIDENCE': functionDescription('This function returns confidence interval for a population mean.', [
	                parameterDescription('alpha'),
	                parameterDescription('stdev'),
	                parameterDescription('size')
	            ]),
	            'CONVERT': functionDescription('This function converts a number from one measurement system to its equivalent in another measurement system.', [
	                parameterDescription('number'),
	                parameterDescription('from-unit'),
	                parameterDescription('to-unit')
	            ]),
	            'CORREL': functionDescription('This function returns the correlation coefficient of the two sets of data.', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'COS': functionDescription('This function returns the cosine of the specified angle.', [
	                parameterDescription('angle')
	            ]),
	            'COSH': functionDescription('This function returns the hyperbolic cosine of the specified value.', [
	                parameterDescription('value')
	            ]),
	            'COUNT': functionDescription('This function returns the number of cells that contain numbers.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'COUNTA': functionDescription('This function returns the number of number of cells that contain numbers, text, or logical values.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'COUNTBLANK': functionDescription('This function returns the number of empty (or blank) cells in a range of cells on a sheet.', [
	                parameterDescription('cellrange')
	            ]),
	            'COUNTIF': functionDescription('This function returns the number of cells that meet a certain condition', [
	                parameterDescription('cellrange'),
	                parameterDescription('condition')
	            ]),
	            'COUNTIFS': functionDescription('This function returns the number of cells that meet multiple conditions.', [
	                parameterDescription('cellrange'),
	                parameterDescription('condition')
	            ]),
	            'COUPDAYBS': functionDescription('This function calculates the number of days from the beginning of the coupon period to the settlement date.', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COUPDAYS': functionDescription('This function returns the number of days in the coupon period that contains the settlement date.', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COUPDAYSNC': functionDescription('This function calculates the number of days from the settlement date to the next coupon date.', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COUPNCD': functionDescription('This function returns a date number of the next coupon date after the settlement date.', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basi')
	            ]),
	            'COUPNUM': functionDescription('This function returns the number of coupons due between the settlement date and maturity date.', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COUPPCD': functionDescription('This function returns a date number of the previous coupon date before the settlement date.', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COVAR': functionDescription('This function returns the covariance, which is the average of the products of deviations for each data point pair in two sets of numbers.', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'CRITBINOM': functionDescription('This function returns the criterion binomial, the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value.', [
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('alpha')
	            ]),
	            'CUMIPMT': functionDescription('This function returns the cumulative interest paid on a loan between the starting and ending periods.', [
	                parameterDescription('rate'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('startperiod'),
	                parameterDescription('endperiod'),
	                parameterDescription('paytype')
	            ]),
	            'CUMPRINC': functionDescription('This function returns the cumulative principal paid on a loan between the start and end periods.', [
	                parameterDescription('rate'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('startperiod'),
	                parameterDescription('endperiod'),
	                parameterDescription('paytype')
	            ]),
	            'DATE': functionDescription('This function returns the DateTime object for a particular date, specified by the year, month, and day.', [
	                parameterDescription('year'),
	                parameterDescription('month'),
	                parameterDescription('day')
	            ]),
	            'DATEDIF': functionDescription('This function returns the number of days, months, or years between two dates.', [
	                parameterDescription('date1'),
	                parameterDescription('date2'),
	                parameterDescription('outputcode')
	            ]),
	            'DATEVALUE': functionDescription('This function returns a DateTime object of the specified date.', [
	                parameterDescription('date_string')
	            ]),
	            'DAVERAGE': functionDescription('This function calculates the average of values in a column of a list or database that match the specified conditions.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DAY': functionDescription('This function returns the day number of the month (integer 1 to 31) that corresponds to the specified date.', [
	                parameterDescription('date')
	            ]),
	            'DAYS360': functionDescription('This function returns the number of days between two dates based on a 360-day year.', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate'),
	                parameterDescription('method')
	            ]),
	            'DB': functionDescription('This function calculates the depreciation of an asset for a specified period using the fixed\u2011declining balance method', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life'),
	                parameterDescription('period'),
	                parameterDescription('month')
	            ]),
	            'DCOUNT': functionDescription('This function counts the cells that contain numbers in a column of a list or database that match the specified conditions', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DCOUNTA': functionDescription('This function counts the non-blank cells in a column of a list or database that match the specified conditions', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DDB': functionDescription('This function calculates the depreciation of an asset for a specified period using the double-declining balance method or another method you specify.', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life'),
	                parameterDescription('period'),
	                parameterDescription('factor')
	            ]),
	            'DEC2BIN': functionDescription('This function converts a decimal number to a binary number.', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'DEC2HEX': functionDescription('This function converts a decimal number to a hexadecimal number', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'DEC2OCT': functionDescription('This function converts a decimal number to an octal number', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'DEGREES': functionDescription('This function converts the specified value from radians to degrees', [
	                parameterDescription('angle')
	            ]),
	            'DELTA': functionDescription('This function identifies whether two values are equal. Returns 1 if they are equal; returns 0 otherwise.', [
	                parameterDescription('value1'),
	                parameterDescription('value2')
	            ]),
	            'DEVSQ': functionDescription('This function calculates the sum of the squares of deviations of data points (or of an array of data points) from their sample mean.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'DGET': functionDescription('This function extracts a single value from a column of a list or database that matches the specified conditions.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DISC': functionDescription('This function calculates the discount rate for a security.', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('pricep'),
	                parameterDescription('redeem'),
	                parameterDescription('basis')
	            ]),
	            'DMAX': functionDescription('This function returns the largest number in a column of a list or database that matches the specified conditions.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DMIN': functionDescription('This function returns the smallest number in a column of a list or database that matches the specified conditions.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DOLLAR': functionDescription('This function converts a number to text using currency format, with the decimals rounded to the specified place.', [
	                parameterDescription('value'),
	                parameterDescription('digits')
	            ]),
	            'DOLLARDE': functionDescription('This function converts a fraction dollar price to a decimal dollar price.', [
	                parameterDescription('fractionaldollar'),
	                parameterDescription('fraction')
	            ]),
	            'DOLLARFR': functionDescription('This function converts a decimal number dollar price to a fraction dollar price.', [
	                parameterDescription('decimaldollar'),
	                parameterDescription('fraction')
	            ]),
	            'DPRODUCT': functionDescription('This function multiplies the values in a column of a list or database that match the specified conditions.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DSTDEV': functionDescription('This function estimates the standard deviation of a population based on a sample by using the numbers in a column of a list or database that match the specified conditions.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DSTDEVP': functionDescription('This function calculates the standard deviation of a population based on the entire population using the numbers in a column of a list or database that match the specified conditions.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DSUM': functionDescription('This function adds the numbers in a column of a list or database that match the specified conditions.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DURATION': functionDescription('This function returns the Macaulay duration for an assumed par value of $100.', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('coupon'),
	                parameterDescription('yield'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'DVAR': functionDescription('This function estimates the variance of a population based on a sample by using the numbers in a column of a list or database that match the specified conditions.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DVARP': functionDescription('This function calculates the variance of a population based on the entire population by using the numbers in a column of a list or database that match the specified conditions.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'EDATE': functionDescription('This function calculates the date that is the indicated number of months before or after a specified date.', [
	                parameterDescription('startdate'),
	                parameterDescription('months')
	            ]),
	            'EFFECT': functionDescription('This function calculates the effective annual interest rate for a given nominal annual interest rate and the number of compounding periods per year.', [
	                parameterDescription('nomrate'),
	                parameterDescription('comper')
	            ]),
	            'EOMONTH': functionDescription('This function calculates the date for the last day of the month (end of month) that is the indicated number of months before or after the starting date.', [
	                parameterDescription('startdate'),
	                parameterDescription('months')
	            ]),
	            'ERF': functionDescription('This function calculates the error function integrated between a lower and an upper limit.', [
	                parameterDescription('limit'),
	                parameterDescription('upperlimit')
	            ]),
	            'ERFC': functionDescription('This function calculates the complementary error function integrated between a lower limit and infinity.', [
	                parameterDescription('lowerlimit')
	            ]),
	            'ERROR.TYPE': functionDescription('This function returns a number corresponding to one of the error values.', [
	                parameterDescription('errorvalue')
	            ]),
	            'EURO': functionDescription('This function returns the equivalent of one Euro based on the ISO currency code.', [
	                parameterDescription('code')
	            ]),
	            'EUROCONVERT': functionDescription('This function converts currency from a Euro member currency (including Euros) to another Euro member currency (including Euros).', [
	                parameterDescription('currency'),
	                parameterDescription('source'),
	                parameterDescription('target'),
	                parameterDescription('fullprecision'),
	                parameterDescription('triangulation')
	            ]),
	            'EVEN': functionDescription('This function rounds the specified value up to the nearest even integer.', [
	                parameterDescription('value')
	            ]),
	            'EXACT': functionDescription('This function returns true if two strings are the same; otherwise, false.', [
	                parameterDescription('text1'),
	                parameterDescription('text2')
	            ]),
	            'EXP': functionDescription('This function returns e raised to the power of the specified value.', [
	                parameterDescription('value')
	            ]),
	            'EXPONDIST': functionDescription('This function returns the exponential distribution or the probability density.', [
	                parameterDescription('value'),
	                parameterDescription('lambda'),
	                parameterDescription('cumulative')
	            ]),
	            'FACT': functionDescription('This function calculates the factorial of the specified number.', [
	                parameterDescription('number')
	            ]),
	            'FACTDOUBLE': functionDescription('This function calculates the double factorial of the specified number.', [
	                parameterDescription('number')
	            ]),
	            'FALSE': functionDescription('This function returns the value for logical FALSE.', []),
	            'FDIST': functionDescription('This function calculates the F probability distribution, to see degrees of diversity between two sets of data.', [
	                parameterDescription('value'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'FIND': functionDescription('This function finds one text value within another and returns the text value\u2019s position in the text you searched.', [
	                parameterDescription('findtext'),
	                parameterDescription('intext'),
	                parameterDescription('start')
	            ]),
	            'FINV': functionDescription('This function returns the inverse of the F probability distribution.', [
	                parameterDescription('p'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'FISHER': functionDescription('This function returns the Fisher transformation for a specified value.', [
	                parameterDescription('value')
	            ]),
	            'FISHERINV': functionDescription('This function returns the inverse of the Fisher transformation for a specified value.', [
	                parameterDescription('value')
	            ]),
	            'FIXED': functionDescription('This function rounds a number to the specified number of decimal places, formats the number in decimal format using a period and commas (if so specified), and returns the result as text.', [
	                parameterDescription('num'),
	                parameterDescription('digits'),
	                parameterDescription('notcomma')
	            ]),
	            'FLOOR': functionDescription('This function rounds a number down to the nearest multiple of a specified value.', [
	                parameterDescription('value'),
	                parameterDescription('signif')
	            ]),
	            'FORECAST': functionDescription('This function calculates a future value using existing values.', [
	                parameterDescription('value'),
	                parameterDescription('Yarray'),
	                parameterDescription('Xarray')
	            ]),
	            'FREQUENCY': functionDescription('This function calculates how often values occur within a range of values. This function returns a vertical array of numbers.', [
	                parameterDescription('dataarray'),
	                parameterDescription('binarray')
	            ]),
	            'FTEST': functionDescription('This function returns the result of an F-test, which returns the one-tailed probability that the variances in two arrays are not significantly different.', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'FV': functionDescription('This function returns the future value of an investment based on a present value, periodic payments, and a specified interest rate.', [
	                parameterDescription('rate'),
	                parameterDescription('numper'),
	                parameterDescription('paymt'),
	                parameterDescription('pval'),
	                parameterDescription('type')
	            ]),
	            'FVSCHEDULE': functionDescription('This function returns the future value of an initial principal after applying a series of compound interest rates. Calculate future value of an investment with a variable or adjustable rate.', [
	                parameterDescription('principal'),
	                parameterDescription('schedule')
	            ]),
	            'GAMMADIST': functionDescription('This function returns the gamma distribution.', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative')
	            ]),
	            'GAMMAINV': functionDescription('This function returns the inverse of the gamma cumulative distribution.', [
	                parameterDescription('p'),
	                parameterDescription('alpha'),
	                parameterDescription('beta')
	            ]),
	            'GAMMALN': functionDescription('This function returns the natural logarithm of the Gamma function, G(x).', [
	                parameterDescription('value')
	            ]),
	            'GCD': functionDescription('This function returns the greatest common divisor of two numbers.', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'GEOMEAN': functionDescription('This function returns the geometric mean of a set of positive data.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'GESTEP': functionDescription('This function, greater than or equal to step, returns an indication of whether a number is equal to a threshold.', [
	                parameterDescription('number'),
	                parameterDescription('step')
	            ]),
	            'GROWTH': functionDescription('This function calculates predicted exponential growth. This function returns the y values for a series of new x values that are specified by using existing x and y values.', [
	                parameterDescription('y'),
	                parameterDescription('x'),
	                parameterDescription('newx'),
	                parameterDescription('constant')
	            ]),
	            'HARMEAN': functionDescription('This function returns the harmonic mean of a data set.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'HEX2BIN': functionDescription('This function converts a hexadecimal number to a binary number.', [
	                parameterDescription('number'),
	                parameterDescription(' places')
	            ]),
	            'HEX2DEC': functionDescription('This function converts a hexadecimal number to a decimal number.', [
	                parameterDescription('number')
	            ]),
	            'HEX2OCT': functionDescription('This function converts a hexadecimal number to an octal number.', [
	                parameterDescription('number'),
	                parameterDescription(' places')
	            ]),
	            'HLOOKUP': functionDescription('This function searches for a value in the top row and then returns a value in the same column from a specified row.', [
	                parameterDescription('value'),
	                parameterDescription('array'),
	                parameterDescription('row'),
	                parameterDescription('approx')
	            ]),
	            'HOUR': functionDescription('This function returns the hour that corresponds to a specified time.', [
	                parameterDescription('time')
	            ]),
	            'HYPGEOMDIST': functionDescription('This function returns the hypergeometric distribution.', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('M'),
	                parameterDescription('N')
	            ]),
	            'IF': functionDescription('This function performs a comparison and returns one of two provided values based on that comparison.', [
	                parameterDescription('valueTest'),
	                parameterDescription('valueTrue'),
	                parameterDescription('valueFalse')
	            ]),
	            'IFERROR': functionDescription('This function evaluates a formula and returns a value you provide if there is an error or the formula result.', [
	                parameterDescription('value'),
	                parameterDescription('error')
	            ]),
	            'IMABS': functionDescription('This function returns the absolute value or modulus of a complex number.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMAGINARY': functionDescription('This function returns the imaginary coefficient of a complex number.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMARGUMENT': functionDescription('This function returns the argument theta, which is an angle expressed in radians.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCONJUGATE': functionDescription('This function returns the complex conjugate of a complex number.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCOS': functionDescription('This function returns the cosine of a complex number.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMDIV': functionDescription('This function returns the quotient of two complex numbers.', [
	                parameterDescription('complexnum'),
	                parameterDescription('complexdenom')
	            ]),
	            'IMEXP': functionDescription('This function returns the exponential of a complex number.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMLN': functionDescription('This function returns the natural logarithm of a complex number.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMLOG2': functionDescription('This function returns the base-2 logarithm of a complex number.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMLOG10': functionDescription('This function returns the common logarithm of a complex number.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMPOWER': functionDescription('This function returns a complex number raised to a power.', [
	                parameterDescription('complexnum'),
	                parameterDescription('powernum')
	            ]),
	            'IMPRODUCT': functionDescription('This function returns the product of up to 29 complex numbers in the x+yi or x+yj text format.', [
	                parameterDescription('complexnum1'),
	                parameterDescription('complexnum2', true)
	            ]),
	            'IMREAL': functionDescription('This function returns the real coefficient of a complex number in the x+yi or x+yj text format.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSIN': functionDescription('This function returns the sine of a complex number in the x+yi or x+yj text format.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSQRT': functionDescription('This function returns the square root of a complex number in the x+yi or x+yj text format.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSUB': functionDescription('This function returns the difference of two complex numbers in the x+yi or x+yj text format.', [
	                parameterDescription('complexnum1'),
	                parameterDescription('complexnum2')
	            ]),
	            'IMSUM': functionDescription('This function returns the sum of two or more complex numbers in the x+yi or x+yj text format.', [
	                parameterDescription('complexnum1'),
	                parameterDescription('complexnum2', true)
	            ]),
	            'INDEX': functionDescription('This function returns a value or the reference to a value from within an array or range.', [
	                parameterDescription('return'),
	                parameterDescription('row'),
	                parameterDescription('col'),
	                parameterDescription('area')
	            ]),
	            'INDIRECT': functionDescription('This function returns the reference specified by a text string. References are immediately evaluated to display their contents.', [
	                parameterDescription('ref_text'),
	                parameterDescription('a1_style')
	            ]),
	            'INT': functionDescription('This function rounds a specified number down to the nearest integer.', [
	                parameterDescription('value')
	            ]),
	            'INTERCEPT': functionDescription('This function returns the coordinates of a point at which a line intersects the y-axis, by using existing x values and y values.', [
	                parameterDescription('dependent'),
	                parameterDescription('independent')
	            ]),
	            'INTRATE': functionDescription('This function calculates the interest rate for a fully invested security.', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('invest'),
	                parameterDescription('redeem'),
	                parameterDescription('basis')
	            ]),
	            'IPMT': functionDescription('This function calculates the payment of interest on a loan.', [
	                parameterDescription('rate'),
	                parameterDescription('per'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'IRR': functionDescription('This function returns the internal rate of return for a series of cash flows represented by the numbers in an array.', [
	                parameterDescription('arrayvals'),
	                parameterDescription('estimate')
	            ]),
	            'ISBLANK': functionDescription('This function tests whether a value, an expression, or contents of a referenced cell is empty.', [
	                parameterDescription('cellreference')
	            ]),
	            'ISERR': functionDescription('This function, Is Error Other Than Not Available, tests whether a value, an expression, or contents of a referenced cell has an error other than not available (#N/A).', [
	                parameterDescription('cellreference')
	            ]),
	            'ISERROR': functionDescription('This function, Is Error of Any Kind, tests whether a value, an expression, or contents of a referenced cell has an error of any kind.', [
	                parameterDescription('cellreference')
	            ]),
	            'ISEVEN': functionDescription('This function, Is Number Even, tests whether a value, an expression, or contents of a referenced cell is even.', [
	                parameterDescription('cellreference')
	            ]),
	            'ISLOGICAL': functionDescription('This function tests whether a value, an expression, or contents of a referenced cell is a logical (Boolean) value.', [
	                parameterDescription('cellreference')
	            ]),
	            'ISNA': functionDescription('This function, Is Not Available, tests whether a value, an expression, or contents of a referenced cell has the not available (#N/A) error value.', [
	                parameterDescription('cellreference')
	            ]),
	            'ISNONTEXT': functionDescription('This function tests whether a value, an expression, or contents of a referenced cell has any data type other than text.', [
	                parameterDescription('cellreference')
	            ]),
	            'ISNUMBER': functionDescription('This function tests whether a value, an expression, or contents of a referenced cell has numeric data.', [
	                parameterDescription('cellreference')
	            ]),
	            'ISODD': functionDescription('This function, Is Number Odd, tests whether a value, an expression, or contents of a referenced cell has numeric data.', [
	                parameterDescription('cellreference')
	            ]),
	            'ISPMT': functionDescription('This function calculates the interest paid during a specific period of an investment.', [
	                parameterDescription('rate'),
	                parameterDescription('per'),
	                parameterDescription('nper'),
	                parameterDescription('pv')
	            ]),
	            'ISREF': functionDescription('This function, Is Reference, tests whether a value, an expression, or contents of a referenced cell is a reference to another cell.', [
	                parameterDescription('cellreference')
	            ]),
	            'ISTEXT': functionDescription('This function tests whether a value, an expression, or contents of a referenced cell has text data.', [
	                parameterDescription('cellreference')
	            ]),
	            'KURT': functionDescription('This function returns the kurtosis of a data set.', [
	                parameterDescription('value1'),
	                parameterDescription('value2'),
	                parameterDescription('value3'),
	                parameterDescription('value4', true)
	            ]),
	            'LARGE': functionDescription('This function returns the nth largest value in a data set, where n is specified.', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'LCM': functionDescription('This function returns the least common multiple of two numbers.', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'LEFT': functionDescription('This function returns the specified leftmost characters from a text value, and based on the number of characters you specify.', [
	                parameterDescription('mytext'),
	                parameterDescription('num_chars')
	            ]),
	            'LEN': functionDescription('This function returns the length of the number of characters in a text string.', [
	                parameterDescription('value')
	            ]),
	            'LINEST': functionDescription('This function calculates the statistics for a line.', [
	                parameterDescription('y'),
	                parameterDescription('x'),
	                parameterDescription('constant'),
	                parameterDescription('stats')
	            ]),
	            'LN': functionDescription('This function returns the natural logarithm of the specified number.', [
	                parameterDescription('value')
	            ]),
	            'LOG': functionDescription('This function returns the logarithm base Y of a number X.', [
	                parameterDescription('number'),
	                parameterDescription('base')
	            ]),
	            'LOG10': functionDescription('This function returns the logarithm base 10 of the number given.', [
	                parameterDescription('value')
	            ]),
	            'LOGEST': functionDescription('This function calculates an exponential curve that fits the data and returns an array of values that describes the curve.', [
	                parameterDescription('y'),
	                parameterDescription('x'),
	                parameterDescription('constant'),
	                parameterDescription('stats')
	            ]),
	            'LOGINV': functionDescription('This function returns the inverse of the lognormal cumulative distribution function of x, where LN(x) is normally distributed with the specified mean and standard deviation.', [
	                parameterDescription('prob'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'LOGNORMDIST': functionDescription('This function returns the cumulative natural log normal distribution of x, where LN(x) is normally distributed with the specified mean and standard deviation. Analyze data that has been logarithmically transformed with this function.', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'LOOKUP': functionDescription('This function searches for a value and returns a value from the same location in a second area.', [
	                parameterDescription('lookupvalue'),
	                parameterDescription('lookupvector'),
	                parameterDescription('resultvector')
	            ]),
	            'LOWER': functionDescription('This function converts text to lower case letters.', [
	                parameterDescription('string')
	            ]),
	            'MATCH': functionDescription('This function returns the relative position of a specified item in a range.', [
	                parameterDescription('value1'),
	                parameterDescription('array'),
	                parameterDescription('type')
	            ]),
	            'MAX': functionDescription('This function returns the maximum value, the greatest value, of all the values in the arguments.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MAXA': functionDescription('This function returns the largest value in a list of arguments, including text and logical values.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MDETERM': functionDescription('This function returns the matrix determinant of an array.', [
	                parameterDescription('array')
	            ]),
	            'MDURATION': functionDescription('This function calculates the modified Macaulay duration of a security with an assumed par value of $100.', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('coupon'),
	                parameterDescription('yield'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'MEDIAN': functionDescription('This function returns the median, the number in the middle of the provided set of numbers; that is, half the numbers have values that are greater than the median, and half have values that are less than the median.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MID': functionDescription('This function returns the requested number of characters from a text string starting at the position you specify, and based on the number of characters you specify.', [
	                parameterDescription('text'),
	                parameterDescription('start_num'),
	                parameterDescription('num_chars')
	            ]),
	            'MIN': functionDescription('This function returns the minimum value, the least value, of all the values in the arguments.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MINA': functionDescription('This function returns the minimum value in a list of arguments, including text and logical values.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MINUTE': functionDescription('This function returns the minute corresponding to a specified time.', [
	                parameterDescription('time')
	            ]),
	            'MINVERSE': functionDescription('This function returns the inverse matrix for the matrix stored in an array.', [
	                parameterDescription('array')
	            ]),
	            'MIRR': functionDescription('This function returns the modified internal rate of return for a series of periodic cash flows.', [
	                parameterDescription('arrayvals'),
	                parameterDescription('payment_int'),
	                parameterDescription('income_int')
	            ]),
	            'MMULT': functionDescription('This function returns the matrix product for two arrays.', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'MOD': functionDescription('This function returns the remainder of a division operation.', [
	                parameterDescription('dividend'),
	                parameterDescription('divisor')
	            ]),
	            'MODE': functionDescription('This function returns the most frequently occurring value in a set of data.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MONTH': functionDescription('This function returns the month corresponding to the specified date value.', [
	                parameterDescription('date')
	            ]),
	            'MROUND': functionDescription('This function returns a number rounded to the desired multiple.', [
	                parameterDescription('number'),
	                parameterDescription('multiple')
	            ]),
	            'MULTINOMIAL': functionDescription('This function calculates the ratio of the factorial of a sum of values to the product of factorials.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'N': functionDescription('This function returns a value converted to a number.', [
	                parameterDescription('value')
	            ]),
	            'NA': functionDescription('This function returns the error value #N/A that means not available.', []),
	            'NEGBINOMDIST': functionDescription('This function returns the negative binomial distribution.', [
	                parameterDescription('x'),
	                parameterDescription('r'),
	                parameterDescription('p')
	            ]),
	            'NETWORKDAYS': functionDescription('This function returns the total number of complete working days between the start and end dates.', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate'),
	                parameterDescription('holidays')
	            ]),
	            'NOMINAL': functionDescription('This function returns the nominal annual interest rate for a given effective rate and number of compounding periods per year.', [
	                parameterDescription('effrate'),
	                parameterDescription('comper')
	            ]),
	            'NORMDIST': functionDescription('This function returns the normal cumulative distribution for the specified mean and standard deviation.', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev'),
	                parameterDescription('cumulative')
	            ]),
	            'NORMINV': functionDescription('This function returns the inverse of the normal cumulative distribution for the given mean and standard deviation.', [
	                parameterDescription('prob'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'NORMSDIST': functionDescription('This function returns the standard normal cumulative distribution function.', [
	                parameterDescription('value')
	            ]),
	            'NORMSINV': functionDescription('This function returns the inverse of the standard normal cumulative distribution. The distribution has a mean of zero and a standard deviation of one.', [
	                parameterDescription('prob')
	            ]),
	            'NOT': functionDescription('This function reverses the logical value of its argument.', [
	                parameterDescription('value')
	            ]),
	            'NOW': functionDescription('This function returns the current date and time.', []),
	            'NPER': functionDescription('This function returns the number of periods for an investment based on a present value, future value, periodic payments, and a specified interest rate.', [
	                parameterDescription('rate'),
	                parameterDescription('paymt'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'NPV': functionDescription('This function calculates the net present value of an investment by using a discount rate and a series of future payments and income.', [
	                parameterDescription('discount'),
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'OCT2BIN': functionDescription('This function converts an octal number to a binary number.', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'OCT2DEC': functionDescription('This function converts an octal number to a decimal number.', [
	                parameterDescription('number')
	            ]),
	            'OCT2HEX': functionDescription('This function converts an octal number to a hexadecimal number.', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'ODD': functionDescription('This function rounds the specified value up to the nearest odd integer.', [
	                parameterDescription('value')
	            ]),
	            'ODDFPRICE': functionDescription('This function calculates the price per $100 face value of a security with an odd first period.', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('issue'),
	                parameterDescription('first'),
	                parameterDescription('rate'),
	                parameterDescription('yield'),
	                parameterDescription('redeem'),
	                parameterDescription('freq'),
	                parameterDescription('basis')
	            ]),
	            'ODDFYIELD': functionDescription('This function calculates the yield of a security with an odd first period.', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('issue'),
	                parameterDescription('first'),
	                parameterDescription('rate'),
	                parameterDescription('price'),
	                parameterDescription('redeem'),
	                parameterDescription('freq'),
	                parameterDescription('basis')
	            ]),
	            'ODDLPRICE': functionDescription('This function calculates the price per $100 face value of a security with an odd last coupon period.', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('last'),
	                parameterDescription('rate'),
	                parameterDescription('yield'),
	                parameterDescription('redeem'),
	                parameterDescription('freq'),
	                parameterDescription('basis')
	            ]),
	            'ODDLYIELD': functionDescription('This function calculates the yield of a security with an odd last period.', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('last'),
	                parameterDescription('rate'),
	                parameterDescription('price'),
	                parameterDescription('redeem'),
	                parameterDescription('freq'),
	                parameterDescription('basis')
	            ]),
	            'OFFSET': functionDescription('This function returns a reference to a range. The range is a specified number of rows and columns from a cell or range of cells. The function returns a single cell or a range of cells.', [
	                parameterDescription('reference'),
	                parameterDescription('rows'),
	                parameterDescription('cols'),
	                parameterDescription('height'),
	                parameterDescription('width')
	            ]),
	            'OR': functionDescription('This function calculates logical OR. It returns TRUE if any of its arguments are true; otherwise, returns FALSE if all arguments are false.', [
	                parameterDescription('argument1'),
	                parameterDescription('argument2...')
	            ]),
	            'PEARSON': functionDescription('This function returns the Pearson product moment correlation coefficient, a dimensionless index between -1.0 to 1.0 inclusive indicative of the linear relationship of two data sets.', [
	                parameterDescription('array_ind'),
	                parameterDescription('array_dep')
	            ]),
	            'PERCENTILE': functionDescription('This function returns the nth percentile of values in a range.', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'PERCENTRANK': functionDescription('This function returns the rank of a value in a data set as a percentage of the data set.', [
	                parameterDescription('array'),
	                parameterDescription('n'),
	                parameterDescription('sigdig')
	            ]),
	            'PERMUT': functionDescription('This function returns the number of possible permutations for a specified number of items.', [
	                parameterDescription('k'),
	                parameterDescription('n')
	            ]),
	            'PI': functionDescription('This function returns PI as 3.1415926536.', []),
	            'PMT': functionDescription('This function returns the payment amount for a loan given the present value, specified interest rate, and number of terms.', [
	                parameterDescription('rate'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'POISSON': functionDescription('This function returns the Poisson distribution.', [
	                parameterDescription('nevents'),
	                parameterDescription('mean'),
	                parameterDescription('cumulative')
	            ]),
	            'POWER': functionDescription('This function raises the specified number to the specified power.', [
	                parameterDescription('number'),
	                parameterDescription('power')
	            ]),
	            'PPMT': functionDescription('This function returns the amount of payment of principal for a loan given the present value, specified interest rate, and number of terms.', [
	                parameterDescription('rate'),
	                parameterDescription('per'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'PRICE': functionDescription('This function calculates the price per $100 face value of a periodic interest security', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('rate'),
	                parameterDescription('yield'),
	                parameterDescription('redeem'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'PRICEDISC': functionDescription('This function returns the price per $100 face value of a discounted security.', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('discount'),
	                parameterDescription('redeem'),
	                parameterDescription('basis')
	            ]),
	            'PRICEMAT': functionDescription('This function returns the price at maturity per $100 face value of a security that pays interest.', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('issue'),
	                parameterDescription('rate'),
	                parameterDescription('yield'),
	                parameterDescription('basis')
	            ]),
	            'PROB': functionDescription('This function returns the probability that values in a range are between two limits.', [
	                parameterDescription('array'),
	                parameterDescription('probs'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'PRODUCT': functionDescription('This function multiplies all the arguments and returns the product.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'PROPER': functionDescription('This function capitalizes the first letter in each word of a text string.', [
	                parameterDescription('text')
	            ]),
	            'PV': functionDescription('This function returns the present value of an investment based on the interest rate, number and amount of periodic payments, and future value. The present value is the total amount that a series of future payments is worth now.', [
	                parameterDescription('rate'),
	                parameterDescription('numper'),
	                parameterDescription('paymt'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'QUARTILE': functionDescription('This function returns which quartile (which quarter or 25 percent) of a data set a value is.', [
	                parameterDescription('array'),
	                parameterDescription('quart')
	            ]),
	            'QUOTIENT': functionDescription('This function returns the integer portion of a division. Use this to ignore the remainder of a division.', [
	                parameterDescription('numerator'),
	                parameterDescription('denominator')
	            ]),
	            'RADIANS': functionDescription('This function converts the specified number from degrees to radians.', [
	                parameterDescription('value')
	            ]),
	            'RAND': functionDescription('This function returns an evenly distributed random number between 0 and 1.', []),
	            'RANDBETWEEN': functionDescription('This function returns a random number between the numbers you specify.', [
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'RANK': functionDescription('This function returns the rank of a number in a set of numbers. If you were to sort the set, the rank of the number would be its position in the list.', [
	                parameterDescription('number'),
	                parameterDescription('array'),
	                parameterDescription('order')
	            ]),
	            'RATE': functionDescription('This function returns the interest rate per period of an annuity.', [
	                parameterDescription('nper'),
	                parameterDescription('pmt'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type'),
	                parameterDescription('guess')
	            ]),
	            'RECEIVED': functionDescription('This function returns the amount received at maturity for a fully invested security.', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('invest'),
	                parameterDescription('discount'),
	                parameterDescription('basis')
	            ]),
	            'REPLACE': functionDescription('This function replaces part of a text string with a different text string, based on the number of characters you specify.', [
	                parameterDescription('old_text'),
	                parameterDescription('start_char'),
	                parameterDescription('num_chars'),
	                parameterDescription('new_text')
	            ]),
	            'REPT': functionDescription('This function repeats text a specified number of times.', [
	                parameterDescription('text'),
	                parameterDescription('number')
	            ]),
	            'RIGHT': functionDescription('This function returns the specified rightmost characters from a text value, and based on the number of characters you specify.', [
	                parameterDescription('text'),
	                parameterDescription('num_chars')
	            ]),
	            'ROMAN': functionDescription('This function converts an Arabic numeral to a Roman numeral text equivalent.', [
	                parameterDescription('number'),
	                parameterDescription('style')
	            ]),
	            'ROUND': functionDescription('This function rounds the specified value to the nearest number, using the specified number of decimal places.', [
	                parameterDescription('value'),
	                parameterDescription('places')
	            ]),
	            'ROUNDDOWN': functionDescription('This function rounds the specified number down to the nearest number, using the specified number of decimal places.', [
	                parameterDescription('value'),
	                parameterDescription('places')
	            ]),
	            'ROUNDUP': functionDescription('This function rounds the specified number up to the nearest number, using the specified number of decimal places.', [
	                parameterDescription('value'),
	                parameterDescription('places')
	            ]),
	            'ROW': functionDescription('This function returns the number of a row from a reference.', [
	                parameterDescription('reference')
	            ]),
	            'ROWS': functionDescription('This function returns the number of rows in an array.', [
	                parameterDescription('array')
	            ]),
	            'RSQ': functionDescription('This function returns the square of the Pearson product moment correlation coefficient (R-squared) through data points in known y\ufffds and known x\ufffds.', [
	                parameterDescription('array_dep'),
	                parameterDescription('array_ind')
	            ]),
	            'SEARCH': functionDescription('This function finds one text string in another text string and returns the index of the starting position of the found text.', [
	                parameterDescription('string1'),
	                parameterDescription('string2')
	            ]),
	            'SECOND': functionDescription('This function returns the seconds (0 to 59) value for a specified time.', [
	                parameterDescription('time')
	            ]),
	            'SERIESSUM': functionDescription('This function returns the sum of a power series.', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('m'),
	                parameterDescription('coeff')
	            ]),
	            'SIGN': functionDescription('This function returns the sign of a number or expression.', [
	                parameterDescription('cellreference')
	            ]),
	            'SIN': functionDescription('This function returns the sine of the specified angle.', [
	                parameterDescription('angle')
	            ]),
	            'SINH': functionDescription('This function returns the hyperbolic sine of the specified number.', [
	                parameterDescription('value')
	            ]),
	            'SKEW': functionDescription('This function returns the skewness of a distribution.', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'SLN': functionDescription('This function returns the straight-line depreciation of an asset for one period.', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life')
	            ]),
	            'SLOPE': functionDescription('This function calculates the slope of a linear regression.', [
	                parameterDescription('array_dep'),
	                parameterDescription('array_ind')
	            ]),
	            'SMALL': functionDescription('This function returns the nth smallest value in a data set, where n is specified.', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'SQRT': functionDescription('This function returns the positive square root of the specified number.', [
	                parameterDescription('value')
	            ]),
	            'SQRTPI': functionDescription('This function returns the positive square root of a multiple of pi (p).', [
	                parameterDescription('multiple')
	            ]),
	            'STANDARDIZE': functionDescription('This function returns a normalized value from a distribution characterized by mean and standard deviation.', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'STDEVA': functionDescription('This function returns the standard deviation for a set of numbers, text, or logical values.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'STDEVP': functionDescription('This function returns the standard deviation for an entire specified population (of numeric values).', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'STDEVPA': functionDescription('This function returns the standard deviation for an entire specified population, including text or logical values as well as numeric values.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'STEYX': functionDescription('This function returns the standard error of the predicted y value for each x. The standard error is a measure of the amount of error in the prediction of y for a value of x.', [
	                parameterDescription('array_dep'),
	                parameterDescription('array_ind')
	            ]),
	            'SUBSTITUTE': functionDescription('This function substitutes a new string for specified characters in an existing string.', [
	                parameterDescription('text'),
	                parameterDescription('old_piece'),
	                parameterDescription('new_piece'),
	                parameterDescription('instance')
	            ]),
	            'SUBTOTAL': functionDescription('This function calculates a subtotal of a list of numbers using a specified built-in function.', [
	                parameterDescription('functioncode'),
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'SUM': functionDescription('This function returns the sum of cells or range of cells.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'SUMIF': functionDescription('This function adds the cells using a given criteria.', [
	                parameterDescription('array'),
	                parameterDescription('condition'),
	                parameterDescription('sumrange')
	            ]),
	            'SUMIFS': functionDescription('This function adds the cells in a range using multiple criteria.', [
	                parameterDescription('array'),
	                parameterDescription('conditionarray'),
	                parameterDescription('condition', true)
	            ]),
	            'SUMPRODUCT': functionDescription('This function returns the sum of products of cells. Multiplies corresponding components in the given arrays, and returns the sum of those products.', [
	                parameterDescription('array1'),
	                parameterDescription('array2', true)
	            ]),
	            'SUMSQ': functionDescription('This function returns the sum of the squares of the arguments.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'SUMX2MY2': functionDescription('This function returns the sum of the difference of the squares of corresponding values in two arrays.', [
	                parameterDescription('array_x'),
	                parameterDescription('array_y')
	            ]),
	            'SUMX2PY2': functionDescription('This function returns the sum of the sum of squares of corresponding values in two arrays.', [
	                parameterDescription('array_x'),
	                parameterDescription('array_y')
	            ]),
	            'SUMXMY2': functionDescription('This function returns the sum of the square of the differences of corresponding values in two arrays.', [
	                parameterDescription('array_x'),
	                parameterDescription('array_y')
	            ]),
	            'SYD': functionDescription('This function returns the sum-of-years\' digits depreciation of an asset for a specified period.', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life'),
	                parameterDescription('period')
	            ]),
	            'T': functionDescription('This function returns the text in a specified cell.', [
	                parameterDescription('value')
	            ]),
	            'TAN': functionDescription('This function returns the tangent of the specified angle.', [
	                parameterDescription('angle')
	            ]),
	            'TANH': functionDescription('This function returns the hyperbolic tangent of the specified number.', [
	                parameterDescription('value')
	            ]),
	            'TBILLEQ': functionDescription('This function returns the equivalent yield for a Treasury bill (or T-bill)', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('discount')
	            ]),
	            'TBILLPRICE': functionDescription('This function returns the price per $100 face value for a Treasury bill (or T-bill).', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('discount')
	            ]),
	            'TBILLYIELD': functionDescription('This function returns the yield for a Treasury bill (or T-bill).', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('priceper')
	            ]),
	            'TDIST': functionDescription('This function returns the probability for the t-distribution.', [
	                parameterDescription('x'),
	                parameterDescription('deg'),
	                parameterDescription('tails')
	            ]),
	            'TEXT': functionDescription('This function formats a number and converts it to text.', [
	                parameterDescription('value'),
	                parameterDescription('text')
	            ]),
	            'TIME': functionDescription('This function returns the TimeSpan object for a specified time.', [
	                parameterDescription('hour'),
	                parameterDescription('minutes'),
	                parameterDescription('seconds')
	            ]),
	            'TIMEVALUE': functionDescription('This function returns the TimeSpan object of the time represented by a text string.', [
	                parameterDescription('time_string')
	            ]),
	            'TINV': functionDescription('This function returns the t-value of the student\'s t-distribution as a function of the probability and the degrees of freedom.', [
	                parameterDescription('prog'),
	                parameterDescription('deg')
	            ]),
	            'TODAY': functionDescription('This function returns the date and time of the current date.', []),
	            'TRANSPOSE': functionDescription('This function returns a vertical range of cells as a horizontal range or a horizontal range of cells as a vertical range.', [
	                parameterDescription('array')
	            ]),
	            'TREND': functionDescription('This function returns values along a linear trend. This function fits a straight line to the arrays known x and y values. Trend returns the y values along that line for the array of specified new x values.', [
	                parameterDescription('y'),
	                parameterDescription('x'),
	                parameterDescription('newx'),
	                parameterDescription('constant')
	            ]),
	            'TRIM': functionDescription('This function removes extra spaces from a string and leaves single spaces between words.', [
	                parameterDescription('text')
	            ]),
	            'TRIMMEAN': functionDescription('This function returns the mean of a subset of data excluding the top and bottom data.', [
	                parameterDescription('array'),
	                parameterDescription('percent')
	            ]),
	            'TRUE': functionDescription('This function returns the value for logical TRUE.', []),
	            'TRUNC': functionDescription('This function removes the specified fractional part of the specified number.', [
	                parameterDescription('value'),
	                parameterDescription('precision')
	            ]),
	            'TTEST': functionDescription('This function returns the probability associated with a t-test.', [
	                parameterDescription('array1'),
	                parameterDescription('array2'),
	                parameterDescription('tails'),
	                parameterDescription('type')
	            ]),
	            'TYPE': functionDescription('This function returns the type of value.', [
	                parameterDescription('value')
	            ]),
	            'UPPER': functionDescription('This function converts text to uppercase letters.', [
	                parameterDescription('string')
	            ]),
	            'VALUE': functionDescription('This function converts a text string that is a number to a numeric value.', [
	                parameterDescription('text')
	            ]),
	            'VAR': functionDescription('This function returns the variance based on a sample of a population, which uses only numeric values.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VARA': functionDescription('This function returns the variance based on a sample of a population, which includes numeric, logical, or text values.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VARP': functionDescription('This function returns variance based on the entire population, which uses only numeric values.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VARPA': functionDescription('This function returns variance based on the entire population, which includes numeric, logical, or text values.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VDB': functionDescription('This function returns the depreciation of an asset for any period you specify using the variable declining balance method.', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life'),
	                parameterDescription('start'),
	                parameterDescription('end'),
	                parameterDescription('factor'),
	                parameterDescription('switchnot')
	            ]),
	            'VLOOKUP': functionDescription('This function searches for a value in the leftmost column and returns a value in the same row from a column you specify.', [
	                parameterDescription('value'),
	                parameterDescription('array'),
	                parameterDescription('colindex'),
	                parameterDescription('approx')
	            ]),
	            'WEEKDAY': functionDescription('This function returns the number corresponding to the day of the week for a specified date.', [
	                parameterDescription('date'),
	                parameterDescription('type')
	            ]),
	            'WEEKNUM': functionDescription('This function returns a number that indicates the week of the year numerically.', [
	                parameterDescription('date'),
	                parameterDescription('weektype')
	            ]),
	            'WEIBULL': functionDescription('This function returns the two-parameter Weibull distribution, often used in reliability analysis.', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative')
	            ]),
	            'WORKDAY': functionDescription('This function returns the number of working days before or after the starting date.', [
	                parameterDescription('startdate'),
	                parameterDescription('numdays'),
	                parameterDescription('holidays')
	            ]),
	            'XIRR': functionDescription('This function calculates the internal rate of return for a schedule of cash flows that may not be periodic.', [
	                parameterDescription('values'),
	                parameterDescription('dates'),
	                parameterDescription('guess')
	            ]),
	            'XNPV': functionDescription('This function calculates the net present value for a schedule of cash flows that may not be periodic.', [
	                parameterDescription('rate'),
	                parameterDescription('values'),
	                parameterDescription('dates')
	            ]),
	            'YEAR': functionDescription('This function returns the year as an integer for a specified date.', [
	                parameterDescription('date')
	            ]),
	            'YEARFRAC': functionDescription('This function returns the fraction of the year represented by the number of whole days between the start and end dates.', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate'),
	                parameterDescription('basis')
	            ]),
	            'YIELD': functionDescription('This function calculates the yield on a security that pays periodic interest.', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('rate'),
	                parameterDescription('price'),
	                parameterDescription('redeem'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'YIELDDISC': functionDescription('This function calculates the annual yield for a discounted security.', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('price'),
	                parameterDescription('redeem'),
	                parameterDescription('basis')
	            ]),
	            'YIELDMAT': functionDescription('This function calculates the annual yield of a security that pays interest at maturity.', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('issue'),
	                parameterDescription('issrate'),
	                parameterDescription('price'),
	                parameterDescription('basis')
	            ]),
	            'ZTEST': functionDescription('This function returns the significance value of a z-test. The z-test generates a standard score for x with respect to the set of data and returns the two-tailed probability for the normal distribution.', [
	                parameterDescription('array'),
	                parameterDescription('x'),
	                parameterDescription('sigma')
	            ]),
	            'HBARSPARKLINE': functionDescription('This function returns a data set used for representing a Hbar sparkline', [
	                parameterDescription('value'),
	                parameterDescription('colorScheme')
	            ]),
	            'VBARSPARKLINE': functionDescription('This function returns a data set used for representing a Vbar sparkline', [
	                parameterDescription('value'),
	                parameterDescription('colorScheme')
	            ]),
	            'VARISPARKLINE': functionDescription('This function returns a data set used for representing a variance sparkline', [
	                parameterDescription('variance'),
	                parameterDescription('reference'),
	                parameterDescription('mini'),
	                parameterDescription('maxi'),
	                parameterDescription('mark'),
	                parameterDescription('tickunit'),
	                parameterDescription('legend'),
	                parameterDescription('colorPositive'),
	                parameterDescription('colorNegative'),
	                parameterDescription('vertical')
	            ]),
	            'PIESPARKLINE': functionDescription('This function returns a data set used for representing a pie sparkline', [
	                parameterDescription('range|percentage'),
	                parameterDescription('color', true)
	            ]),
	            'AREASPARKLINE': functionDescription('This function returns a data set used for representing a area sparkline', [
	                parameterDescription('points'),
	                parameterDescription('mini'),
	                parameterDescription('maxi'),
	                parameterDescription('line1'),
	                parameterDescription('line2'),
	                parameterDescription('colorPositive'),
	                parameterDescription('colorNegative')
	            ]),
	            'SCATTERSPARKLINE': functionDescription('This function returns a data set used for representing a scatter sparkline', [
	                parameterDescription('points1'),
	                parameterDescription('points2'),
	                parameterDescription('minX'),
	                parameterDescription('maxX'),
	                parameterDescription('minY'),
	                parameterDescription('maxY'),
	                parameterDescription('hLine'),
	                parameterDescription('vLine'),
	                parameterDescription('xMinZone'),
	                parameterDescription('xMaxZone'),
	                parameterDescription('yMinZone'),
	                parameterDescription('yMaxZone'),
	                parameterDescription('tags'),
	                parameterDescription('drawSymbol'),
	                parameterDescription('drawLines'),
	                parameterDescription('color1'),
	                parameterDescription('color2'),
	                parameterDescription('dash')
	            ]),
	            'LINESPARKLINE': functionDescription('This function returns a data set used for representing a line sparkline', [
	                parameterDescription('data'),
	                parameterDescription('dataOrientation'),
	                parameterDescription('dateAxisData'),
	                parameterDescription('dateAxisOrientation'),
	                parameterDescription('setting')
	            ]),
	            'COLUMNSPARKLINE': functionDescription('This function returns a data set used for representing a column sparkline', [
	                parameterDescription('data'),
	                parameterDescription('dataOrientation'),
	                parameterDescription('dateAxisData'),
	                parameterDescription('dateAxisOrientation'),
	                parameterDescription('setting')
	            ]),
	            'WINLOSSSPARKLINE': functionDescription('This function returns a data set used for representing a win/loss sparkline', [
	                parameterDescription('data'),
	                parameterDescription('dataOrientation'),
	                parameterDescription('dateAxisData'),
	                parameterDescription('dateAxisOrientation'),
	                parameterDescription('setting')
	            ]),
	            'BULLETSPARKLINE': functionDescription('This function returns a data set used for representing a bullet sparkline', [
	                parameterDescription('measure'),
	                parameterDescription('target'),
	                parameterDescription('maxi'),
	                parameterDescription('good'),
	                parameterDescription('bad'),
	                parameterDescription('forecast'),
	                parameterDescription('tickunit'),
	                parameterDescription('colorScheme'),
	                parameterDescription('vertical')
	            ]),
	            'SPREADSPARKLINE': functionDescription('This function returns a data set used for representing a spread sparkline', [
	                parameterDescription('points'),
	                parameterDescription('showAverage'),
	                parameterDescription('scaleStart'),
	                parameterDescription('scaleEnd'),
	                parameterDescription('style'),
	                parameterDescription('colorScheme'),
	                parameterDescription('vertical')
	            ]),
	            'STACKEDSPARKLINE': functionDescription('This function returns a data set used for representing a stacked sparkline', [
	                parameterDescription('points'),
	                parameterDescription('colorRange'),
	                parameterDescription('labelRange'),
	                parameterDescription('maximum'),
	                parameterDescription('targetRed'),
	                parameterDescription('targetGreen'),
	                parameterDescription('targetBlue'),
	                parameterDescription('tragetYellow'),
	                parameterDescription('color'),
	                parameterDescription('highlightPosition'),
	                parameterDescription('vertical'),
	                parameterDescription('textOrientation'),
	                parameterDescription('textSize')
	            ]),
	            'BOXPLOTSPARKLINE': functionDescription('This function returns a data set used for representing a boxplot sparkline', [
	                parameterDescription('points'),
	                parameterDescription('boxPlotClass'),
	                parameterDescription('showAverage'),
	                parameterDescription('scaleStart'),
	                parameterDescription('scaleEnd'),
	                parameterDescription('acceptableStart'),
	                parameterDescription('acceptableEnd'),
	                parameterDescription('colorScheme'),
	                parameterDescription('style'),
	                parameterDescription('vertical')
	            ]),
	            'CASCADESPARKLINE': functionDescription('This function returns a data set used for representing a cascade sparkline', [
	                parameterDescription('pointsRange'),
	                parameterDescription('pointIndex'),
	                parameterDescription('labelsRange'),
	                parameterDescription('minimum'),
	                parameterDescription('maximum'),
	                parameterDescription('colorPositive'),
	                parameterDescription('colorNegative'),
	                parameterDescription('vertical')
	            ]),
	            'PARETOSPARKLINE': functionDescription('This function returns a data set used for representing a pareto sparkline', [
	                parameterDescription('points'),
	                parameterDescription('pointIndex'),
	                parameterDescription('colorRange'),
	                parameterDescription('target'),
	                parameterDescription('target2'),
	                parameterDescription('highlightPosition'),
	                parameterDescription('label'),
	                parameterDescription('vertical')
	            ]),
	            'MONTHSPARKLINE': functionDescription('This function returns a data set used for representing a month sparkline', [
	                parameterDescription('year'),
	                parameterDescription('month'),
	                parameterDescription('dataRange'),
	                parameterDescription('emptyColor'),
	                parameterDescription('startColor'),
	                parameterDescription('middleColor'),
	                parameterDescription('endColor')
	            ]),
	            'YEARSPARKLINE': functionDescription('This function returns a data set used for representing a year sparkline', [
	                parameterDescription('year'),
	                parameterDescription('dataRange'),
	                parameterDescription('emptyColor'),
	                parameterDescription('startColor'),
	                parameterDescription('middleColor'),
	                parameterDescription('endColor')
	            ]),
	            'CEILING.PRECISE': functionDescription('This function rounds a number up to the nearest integer or to the nearest multiple of a specified value.', [
	                parameterDescription('number'),
	                parameterDescription('signif')
	            ]),
	            'COVARIANCE.S': functionDescription('This function returns the sample covariance, which is the average of the products of deviations for each data point pair in two sets of numbers.', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'FLOOR.PRECISE': functionDescription('This function rounds a number down to the nearest integer or to the nearest multiple of a specified value.', [
	                parameterDescription('number'),
	                parameterDescription('signif')
	            ]),
	            'PERCENTILE.EXC': functionDescription('This function returns the nth percentile of values in a range.', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'QUARTILE.EXC': functionDescription('This function returns which quartile (which quarter or 25 percent) of a data set a value is.', [
	                parameterDescription('array'),
	                parameterDescription('quart')
	            ]),
	            'RANK.AVG': functionDescription('This function returns the rank of a number in a set of numbers. If some values have the same rank, it will return the average rank.', [
	                parameterDescription('number'),
	                parameterDescription('array'),
	                parameterDescription('order')
	            ]),
	            'MODE.MULT': functionDescription('This function returns the most frequently occurring vertical array or the most frequently occurring value in a set of data.', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'STDEV.P': functionDescription('This function returns the standard deviation for an entire specified population (of numeric values).', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VAR.P': functionDescription('This function returns variance based on the entire population, which uses only numeric values.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'COVARIANCE.P': functionDescription('This function returns the covariance, which is the average of the products of deviations for each data point pair in two sets of numbers.', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'MODE.SNGL': functionDescription('This function returns the most frequently occurring value in a set of data.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'PERCENTILE.INC': functionDescription('This function returns the nth percentile of values in a range.', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'QUARTILE.INC': functionDescription('This function returns which quartile (which quarter or 25 percent) of a data set a value is.', [
	                parameterDescription('array'),
	                parameterDescription('quart')
	            ]),
	            'RANK.EQ': functionDescription('This function returns the rank of a number in a set of numbers. If you were to sort the set, the rank of the number would be its position in the list.', [
	                parameterDescription('number'),
	                parameterDescription('array'),
	                parameterDescription('order')
	            ]),
	            'STDEV': functionDescription('This function returns standard deviation is estimated based on a sample.', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'STDEV.S': functionDescription('This function returns standard deviation is estimated based on a sample.', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'VAR.S': functionDescription('This function returns the variance based on a sample of a population, which uses only numeric values.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'BETA.INV': functionDescription('This function calculates the inverse of the cumulative beta distribution function.', [
	                parameterDescription('prob'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'BINOM.DIST': functionDescription('This function calculates the individual term binomial distribution probability.', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('cumulative')
	            ]),
	            'BINOM.INV': functionDescription('This function returns the criterion binomial, the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value.', [
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('alpha')
	            ]),
	            'CHISQ.DIST.RT': functionDescription('This function calculates the one-tailed probability of the chi-squared distribution.', [
	                parameterDescription('value'),
	                parameterDescription('deg')
	            ]),
	            'CHISQ.INV.RT': functionDescription('This function calculates the inverse of the one-tailed probability of the chi-squared distribution.', [
	                parameterDescription('prob'),
	                parameterDescription('deg')
	            ]),
	            'CHISQ.TEST': functionDescription('This function calculates the test for independence from the chi-squared distribution.', [
	                parameterDescription('obs_array'),
	                parameterDescription('exp_array')
	            ]),
	            'CONFIDENCE.NORM': functionDescription('This function returns confidence interval for a population mean.', [
	                parameterDescription('alpha'),
	                parameterDescription('stdev'),
	                parameterDescription('size')
	            ]),
	            'EXPON.DIST': functionDescription('This function returns the exponential distribution or the probability density.', [
	                parameterDescription('value'),
	                parameterDescription('lambda'),
	                parameterDescription('cumulative')
	            ]),
	            'F.DIST.RT': functionDescription('This function calculates the F probability distribution, to see degrees of diversity between two sets of data.', [
	                parameterDescription('value'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'F.INV.RT': functionDescription('This function returns the inverse of the F probability distribution.', [
	                parameterDescription('p'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'F.TEST': functionDescription('This function returns the result of an F-test, which returns the one-tailed probability that the variances in two arrays are not significantly different.', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'GAMMA.DIST': functionDescription('This function returns the gamma distribution.', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative')
	            ]),
	            'GAMMA.INV': functionDescription('This function returns the inverse of the gamma cumulative distribution.', [
	                parameterDescription('p'),
	                parameterDescription('alpha'),
	                parameterDescription('beta')
	            ]),
	            'LOGNORM.INV': functionDescription('This function returns the inverse of the lognormal cumulative distribution function of x, where LN(x) is normally distributed with the specified mean and standard deviation.', [
	                parameterDescription('prob'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'NORM.DIST': functionDescription('This function returns the normal cumulative distribution for the specified mean and standard deviation.', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev'),
	                parameterDescription('cumulative')
	            ]),
	            'NORM.INV': functionDescription('This function returns the inverse of the normal cumulative distribution for the given mean and standard deviation.', [
	                parameterDescription('prob'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'NORM.S.INV': functionDescription('This function returns the inverse of the standard normal cumulative distribution. The distribution has a mean of zero and a standard deviation of one.', [
	                parameterDescription('prob')
	            ]),
	            'PERCENTRANK.INC': functionDescription('This function returns the rank of a value in a data set as a percentage of the data set.', [
	                parameterDescription('array'),
	                parameterDescription('n'),
	                parameterDescription('signif')
	            ]),
	            'POISSON.DIST': functionDescription('This function returns the Poisson distribution.', [
	                parameterDescription('nevents'),
	                parameterDescription('mean'),
	                parameterDescription('cumulative')
	            ]),
	            'T.INV.2T': functionDescription('This function returns the t-value of the student\'s t-distribution as a function of the probability and the degrees of freedom.', [
	                parameterDescription('prog'),
	                parameterDescription('deg')
	            ]),
	            'T.TEST': functionDescription('This function returns the probability associated with a t-test.', [
	                parameterDescription('array1'),
	                parameterDescription('array2'),
	                parameterDescription('tails'),
	                parameterDescription('type')
	            ]),
	            'WEIBULL.DIST': functionDescription('This function returns the two-parameter Weibull distribution, often used in reliability analysis.', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative')
	            ]),
	            'Z.TEST': functionDescription('This function returns the significance value of a z-test. The z-test generates a standard score for x with respect to the set of data and returns the two-tailed probability for the normal distribution.', [
	                parameterDescription('array'),
	                parameterDescription('x'),
	                parameterDescription('sigma')
	            ]),
	            'T.DIST.RT': functionDescription('This function returns the right-tailed t-distribution.', [
	                parameterDescription('x'),
	                parameterDescription('deg')
	            ]),
	            'T.DIST.2T': functionDescription('This function returns the two-tailed t-distribution.', [
	                parameterDescription('x'),
	                parameterDescription('deg')
	            ]),
	            'ISO.CEILING': functionDescription('This function returns a number up to the nearest integer or to the nearest multiple of significance, regardless of sign of significance.', [
	                parameterDescription('number'),
	                parameterDescription('signif')
	            ]),
	            'BETA.DIST': functionDescription('This function returns the beta distribution.', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'GAMMALN.PRECISE': functionDescription('This function returns the natural logarithm of the gamma function.', [
	                parameterDescription('value')
	            ]),
	            'ERF.PRECISE': functionDescription('This function returns the error function.', [
	                parameterDescription('lowerlimit')
	            ]),
	            'ERFC.PRECISE': functionDescription('This function returns the complementary ERF function.', [
	                parameterDescription('lowerlimit')
	            ]),
	            'PERCENTRANK.EXC': functionDescription('This function returns the percentage rank(0..1, exclusive) of a value in a data set.', [
	                parameterDescription('array'),
	                parameterDescription('n'),
	                parameterDescription('signif')
	            ]),
	            'HYPGEOM.DIST': functionDescription('This function returns the hypergeometric distribution.', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('M'),
	                parameterDescription('N'),
	                parameterDescription('cumulative')
	            ]),
	            'LOGNORM.DIST': functionDescription('This function returns the log normal distribution of x.', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev'),
	                parameterDescription('cumulative')
	            ]),
	            'NEGBINOM.DIST': functionDescription('This function returns the negative binomial distribution.', [
	                parameterDescription('x'),
	                parameterDescription('r'),
	                parameterDescription('p'),
	                parameterDescription('cumulative')
	            ]),
	            'NORM.S.DIST': functionDescription('This function returns the standard normal distribution.', [
	                parameterDescription('z'),
	                parameterDescription('cumulative')
	            ]),
	            'T.DIST': functionDescription('This function returns the t-distribution.', [
	                parameterDescription('x'),
	                parameterDescription('deg'),
	                parameterDescription('cumulative')
	            ]),
	            'F.DIST': functionDescription('This function returns the F probability distribution.', [
	                parameterDescription('x'),
	                parameterDescription('degnum'),
	                parameterDescription('degden'),
	                parameterDescription('cumulative')
	            ]),
	            'CHISQ.DIST': functionDescription('This function returns the chi-squared distribution.', [
	                parameterDescription('x'),
	                parameterDescription('deg'),
	                parameterDescription('cumulative')
	            ]),
	            'F.INV': functionDescription('This function returns the inverse of the F probability distribution.', [
	                parameterDescription('probability'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'T.INV': functionDescription('This function returns the left-tailed inverse of the t-distribution.', [
	                parameterDescription('probability'),
	                parameterDescription('deg')
	            ]),
	            'CHISQ.INV': functionDescription('This function returns the inverse of left-tailed probability of the chi-squared distribution.', [
	                parameterDescription('probability'),
	                parameterDescription('deg')
	            ]),
	            'CONFIDENCE.T': functionDescription('This function returns the confidence interval for a Student\'s t distribution.', [
	                parameterDescription('alpha'),
	                parameterDescription('stdev'),
	                parameterDescription('size')
	            ]),
	            'NETWORKDAYS.INTL': functionDescription('This function returns the number of workdays between two dates using arguments to indicate holidays and weekend days.', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate'),
	                parameterDescription('weekend'),
	                parameterDescription('holidays')
	            ]),
	            'WORKDAY.INTL': functionDescription('This function returns the serial number of the date before or after a number of workdays with custom weekend parameters. These parameters indicate weekend days and holidays.', [
	                parameterDescription('startdate'),
	                parameterDescription('numdays'),
	                parameterDescription('weekend'),
	                parameterDescription('holidays')
	            ]),
	            'REFRESH': functionDescription('This function decides how to re-calculate the formula. Can use the evaluateMode argument to specific the formula re-calculate on the reference value changed, evaluate once , re-calculate or interval.', [
	                parameterDescription('formula'),
	                parameterDescription('evaluateMode'),
	                parameterDescription('interval')
	            ]),
	            'DAYS': functionDescription('This function returns the number of days between two dates.', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate')
	            ]),
	            'ISOWEEKNUM': functionDescription('This function returns the number of the ISO week number of the year for a given date.', [
	                parameterDescription('date')
	            ]),
	            'BITAND': functionDescription('This function returns a bitwise "AND" of two numbers.', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'BITLSHIFT': functionDescription('This function returns a bitwise "OR" of two numbers.', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'BITOR': functionDescription('This function returns a bitwise "OR" of two numbers.', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'BITRSHIFT': functionDescription('This function returns a bitwise "OR" of two numbers.', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'BITXOR': functionDescription('This function returns a bitwise "XOR" of two numbers.', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'IMCOSH': functionDescription('This function returns the hyperbolic cosine of a complex number in x+yi or x+yj text format.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCOT': functionDescription('This function returns the cotangent of a complex number in x+yi or x+yj text format.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCSC': functionDescription('This function returns the cosecant of a complex number in x+yi or x+yj text format.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCSCH': functionDescription('This function returns the hyperbolic cosecant of a complex number in x+yi or x+yj text format.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSEC': functionDescription('This function returns the secant of a complex number in x+yi of x+yj text format.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSECH': functionDescription('This function returns the hyperbolic secant of a complex number in x+yi or x+yj text format.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSINH': functionDescription('This function returns the hyperbolic sine of a complex number in x+yi of x+yj text format.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMTAN': functionDescription('This function returns the tangent of a complex number in x+yi or x+yj text format.', [
	                parameterDescription('complexnum')
	            ]),
	            'PDURATION': functionDescription('This function returns the number of periods required by an investment to reach a specified value.', [
	                parameterDescription('rate'),
	                parameterDescription('pval'),
	                parameterDescription('fval')
	            ]),
	            'RRI': functionDescription('This function returns an equivalent interest rate for the growth of an investment.', [
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('fval')
	            ]),
	            'ISFORMULA': functionDescription('This function tests whether contains a formula of a referenced cell.', [
	                parameterDescription('cellreference')
	            ]),
	            'IFNA': functionDescription('This function returns the value you specify if the formula returns the #N/A error value, otherwise returns the result of the formula.', [
	                parameterDescription('value'),
	                parameterDescription('value_if_na')
	            ]),
	            'IFS': functionDescription('This function checks whether one or more conditions are met and returns a value that corresponds to the first TRUE condition.', [
	                parameterDescription('valueTest'),
	                parameterDescription('valueTrue'),
	                parameterDescription('....')
	            ]),
	            'SWITCH': functionDescription('This function evaluates one value for a list of values, and returns the result corresponding to the first matching value, otherwise returns the default value', [
	                parameterDescription('convertvalue'),
	                parameterDescription('matchvalue'),
	                parameterDescription('matchtrue'),
	                parameterDescription('matchfalse')
	            ]),
	            'XOR': functionDescription('This function returns a logical exclusive or of all arguments.', [
	                parameterDescription('logical'),
	                parameterDescription('....')
	            ]),
	            'AREAS': functionDescription('This function returns the number of areas in a reference.', [
	                parameterDescription('reference')
	            ]),
	            'FORMULATEXT': functionDescription('This function returns a formula as a string.', [
	                parameterDescription('reference')
	            ]),
	            'HYPERLINK': functionDescription('This function creates a shortcut or jump that opens a document stored on a network server, an intranet, or the Internet.', [
	                parameterDescription('link_location'),
	                parameterDescription('friendly_name')
	            ]),
	            'ACOT': functionDescription('This function calculates the inverse arccotangent of a number.', [
	                parameterDescription('value')
	            ]),
	            'ACOTH': functionDescription('This function calculates the inverse hyperbolic arccotangent of a number.', [
	                parameterDescription('value')
	            ]),
	            'ARABIC': functionDescription('This function converts a Roman numeral text to an Arabic numeral equivalent.', [
	                parameterDescription('text')
	            ]),
	            'BASE': functionDescription('This function converts a number into a text representation with the given radix (base).', [
	                parameterDescription('number'),
	                parameterDescription('radix'),
	                parameterDescription('minLength')
	            ]),
	            'CEILING.MATH': functionDescription('This function round  a number up to the nearest integer or to the nearest multiple of significance.', [
	                parameterDescription('value'),
	                parameterDescription('signif'),
	                parameterDescription('mode')
	            ]),
	            'COMBINA': functionDescription('This function calculates the number of possible combinations with repetitions for a specified number of items.', [
	                parameterDescription('number'),
	                parameterDescription('number_choosen')
	            ]),
	            'COT': functionDescription('This function returns the cotangent of the specified angle.', [
	                parameterDescription('angle')
	            ]),
	            'COTH': functionDescription('This function returns the hyperbolic cotangent of the specified number.', [
	                parameterDescription('value')
	            ]),
	            'CSC': functionDescription('This function returns the cosecant of the specified angle.', [
	                parameterDescription('angle')
	            ]),
	            'CSCH': functionDescription('This function returns the hyperbolic cosecant of the specified number.', [
	                parameterDescription('value')
	            ]),
	            'DECIMAL': functionDescription('This function converts a text representation of a number in a given base into a decimal number.', [
	                parameterDescription('text'),
	                parameterDescription('radix')
	            ]),
	            'FLOOR.MATH': functionDescription('This function round a number down to the nearest integer or to the nearest multiple of significance.', [
	                parameterDescription('value'),
	                parameterDescription('signif'),
	                parameterDescription('mode')
	            ]),
	            'SEC': functionDescription('This function returns the secant of the specified angle.', [
	                parameterDescription('angle')
	            ]),
	            'SECH': functionDescription('This function returns the hyperbolic secant of the specified value.', [
	                parameterDescription('value')
	            ]),
	            'BINOM.DIST.RANGE': functionDescription('This function calculates the probability of a trial result using a binomial distribution.', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('cumulative')
	            ]),
	            'GAMMA': functionDescription('This function returns the gamma function value.', [
	                parameterDescription('number')
	            ]),
	            'MAXIFS': functionDescription('This function returns the maximum value among cells specified by a given set of conditions or criteria.', [
	                parameterDescription('array'),
	                parameterDescription('conditionarray'),
	                parameterDescription('condition', true)
	            ]),
	            'GAUSS': functionDescription('This function calculates the probability that a member of a standard normal population will fall between the mean and z standard deviations from the mean.', [
	                parameterDescription('number')
	            ]),
	            'MINIFS': functionDescription('This function returns the minimum value among cells specified by a given set of conditions or criteria.', [
	                parameterDescription('array'),
	                parameterDescription('conditionarray'),
	                parameterDescription('condition', true)
	            ]),
	            'PERMUTATIONA': functionDescription('This function returns the number of permutations for a given number of object that can be selected from the total objects.', [
	                parameterDescription('k'),
	                parameterDescription('n')
	            ]),
	            'PHI': functionDescription('This function returns the value of the density function for a standard normal distribution.', [
	                parameterDescription('value')
	            ]),
	            'SKEW.P': functionDescription('This function returns the skewness of a distribution base on a poopulation: a characterization of the degree of asymmetry of a distribution around its mean.', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'BAHTTEXT': functionDescription('This function converts a number to Thai text and adds a suffix of "Baht"', [
	                parameterDescription('number')
	            ]),
	            'CONCAT': functionDescription('This function combines multiple text strings or numbers into one text string, the function will stay available for compatibility with "CONCATENATE" function.', [
	                parameterDescription('text1'),
	                parameterDescription('text2'),
	                parameterDescription('....')
	            ]),
	            'FINDB': functionDescription('This function finds one text value within another and returns the text value\ufffds position in the text you searched, and counts each double-byte characte as 2 when set DBCS as the default language.', [
	                parameterDescription('findtext'),
	                parameterDescription('intext'),
	                parameterDescription('start')
	            ]),
	            'LEFTB': functionDescription('This function returns the specified leftmost characters from a text value, and based on the number of bytes you specify.', [
	                parameterDescription('mytext'),
	                parameterDescription('num_bytes')
	            ]),
	            'LENB': functionDescription('This function returns the length of the number of bytes in a text string.', [
	                parameterDescription('value')
	            ]),
	            'MIDB': functionDescription('This function returns the requested number of characters from a text string starting at the position you specify, and based on the number of bytes you specify.', [
	                parameterDescription('text'),
	                parameterDescription('start_num'),
	                parameterDescription('num_bytes')
	            ]),
	            'REPLACEB': functionDescription('This function replaces part of a text string with a different text string, based on the number of bytes you specify.', [
	                parameterDescription('old_text'),
	                parameterDescription('start_byte'),
	                parameterDescription('num_bytes'),
	                parameterDescription('new_text')
	            ]),
	            'RIGHTB': functionDescription('This function returns the specified rightmost characters from a text value, and based on the number of bytes you specify.', [
	                parameterDescription('text'),
	                parameterDescription('num_bytes')
	            ]),
	            'SEARCHB': functionDescription('This function finds one text string in another text string and returns the index of the starting position of the found text, and counts each double-byte characte as 2 when set DBCS as the default language.', [
	                parameterDescription('string1'),
	                parameterDescription('string2')
	            ]),
	            'TEXTJOIN': functionDescription('This function combines multiple ranges and/or strings into one text, and the text includes a delimiter you specify between each text value.', [
	                parameterDescription('delimiter'),
	                parameterDescription('ignore_empty'),
	                parameterDescription('text1'),
	                parameterDescription('text2'),
	                parameterDescription('....')
	            ]),
	            'UNICHAR': functionDescription('This function returns the Unicode character of a given numeric reference.', [
	                parameterDescription('number')
	            ]),
	            'UNICODE': functionDescription('This function returns the number corresponding to the first character of the text.', [
	                parameterDescription('text')
	            ]),
	            'ENCODEURL': functionDescription('This function returns a URL-encoded string.', [
	                parameterDescription('text')
	            ]),
	            'BC_QRCODE': functionDescription('This function returns a data set for representing a QRCode', [
	                parameterDescription('value'),
	                parameterDescription('color'),
	                parameterDescription('backgroundColor'),
	                parameterDescription('errorCorrectionLevel'),
	                parameterDescription('model'),
	                parameterDescription('version'),
	                parameterDescription('mask'),
	                parameterDescription('connection'),
	                parameterDescription('connectionNo'),
	                parameterDescription('charCode'),
	                parameterDescription('charset'),
	                parameterDescription('quietZoneLeft'),
	                parameterDescription('quietZoneRight'),
	                parameterDescription('quietZoneTop'),
	                parameterDescription('quietZoneBottom')
	            ]),
	            'BC_EAN13': functionDescription('This function returns a data set for representing a EAN13.', [
	                parameterDescription('value'),
	                parameterDescription('color'),
	                parameterDescription('backgroundColor'),
	                parameterDescription('showLabel'),
	                parameterDescription('labelPosition'),
	                parameterDescription('addOn'),
	                parameterDescription('addOnLabelPosition'),
	                parameterDescription('fontFamily'),
	                parameterDescription('fontStyle'),
	                parameterDescription('fontWeight'),
	                parameterDescription('textDecoration'),
	                parameterDescription('textAlign'),
	                parameterDescription('fontSize'),
	                parameterDescription('quietZoneLeft'),
	                parameterDescription('quietZoneRight'),
	                parameterDescription('quietZoneTop'),
	                parameterDescription('quietZoneBottom')
	            ]),
	            'BC_EAN8': functionDescription('This function returns a data set for representing a EAN8.', [
	                parameterDescription('value'),
	                parameterDescription('color'),
	                parameterDescription('backgroundColor'),
	                parameterDescription('showLabel'),
	                parameterDescription('labelPosition'),
	                parameterDescription('fontFamily'),
	                parameterDescription('fontStyle'),
	                parameterDescription('fontWeight'),
	                parameterDescription('textDecoration'),
	                parameterDescription('textAlign'),
	                parameterDescription('fontSize'),
	                parameterDescription('quietZoneLeft'),
	                parameterDescription('quietZoneRight'),
	                parameterDescription('quietZoneTop'),
	                parameterDescription('quietZoneBottom')
	            ]),
	            'BC_CODABAR': functionDescription('This function returns a data set for representing a CODABAR.', [
	                parameterDescription('value'),
	                parameterDescription('color'),
	                parameterDescription('backgroundColor'),
	                parameterDescription('showLabel'),
	                parameterDescription('labelPosition'),
	                parameterDescription('checkDigit'),
	                parameterDescription('nwRatio'),
	                parameterDescription('fontFamily'),
	                parameterDescription('fontStyle'),
	                parameterDescription('fontWeight'),
	                parameterDescription('textDecoration'),
	                parameterDescription('textAlign'),
	                parameterDescription('fontSize'),
	                parameterDescription('quietZoneLeft'),
	                parameterDescription('quietZoneRight'),
	                parameterDescription('quietZoneTop'),
	                parameterDescription('quietZoneBottom')
	            ]),
	            'BC_CODE39': functionDescription('This function returns a data set for representing a CODE39.', [
	                parameterDescription('value'),
	                parameterDescription('color'),
	                parameterDescription('backgroundColor'),
	                parameterDescription('showLabel'),
	                parameterDescription('labelPosition'),
	                parameterDescription('labelWithStartAndStopCharacter'),
	                parameterDescription('checkDigit'),
	                parameterDescription('nwRatio'),
	                parameterDescription('fullASCII'),
	                parameterDescription('fontFamily'),
	                parameterDescription('fontStyle'),
	                parameterDescription('fontWeight'),
	                parameterDescription('textDecoration'),
	                parameterDescription('textAlign'),
	                parameterDescription('fontSize'),
	                parameterDescription('quietZoneLeft'),
	                parameterDescription('quietZoneRight'),
	                parameterDescription('quietZoneTop'),
	                parameterDescription('quietZoneBottom')
	            ]),
	            'BC_CODE93': functionDescription('This function returns a data set for representing a CODE93.', [
	                parameterDescription('value'),
	                parameterDescription('color'),
	                parameterDescription('backgroundColor'),
	                parameterDescription('showLabel'),
	                parameterDescription('labelPosition'),
	                parameterDescription('checkDigit'),
	                parameterDescription('fullASCII'),
	                parameterDescription('fontFamily'),
	                parameterDescription('fontStyle'),
	                parameterDescription('fontWeight'),
	                parameterDescription('textDecoration'),
	                parameterDescription('textAlign'),
	                parameterDescription('fontSize'),
	                parameterDescription('quietZoneLeft'),
	                parameterDescription('quietZoneRight'),
	                parameterDescription('quietZoneTop'),
	                parameterDescription('quietZoneBottom')
	            ]),
	            'BC_CODE128': functionDescription('This function returns a data set for representing a CODE128.', [
	                parameterDescription('value'),
	                parameterDescription('color'),
	                parameterDescription('backgroundColor'),
	                parameterDescription('showLabel'),
	                parameterDescription('labelPosition'),
	                parameterDescription('codeSet'),
	                parameterDescription('fontFamily'),
	                parameterDescription('fontStyle'),
	                parameterDescription('fontWeight'),
	                parameterDescription('textDecoration'),
	                parameterDescription('textAlign'),
	                parameterDescription('fontSize'),
	                parameterDescription('quietZoneLeft'),
	                parameterDescription('quietZoneRight'),
	                parameterDescription('quietZoneTop'),
	                parameterDescription('quietZoneBottom')
	            ]),
	            'BC_GS1_128': functionDescription('This function returns a data set for representing a GS1_128.', [
	                parameterDescription('value'),
	                parameterDescription('color'),
	                parameterDescription('backgroundColor'),
	                parameterDescription('showLabel'),
	                parameterDescription('labelPosition'),
	                parameterDescription('fontFamily'),
	                parameterDescription('fontStyle'),
	                parameterDescription('fontWeight'),
	                parameterDescription('textDecoration'),
	                parameterDescription('textAlign'),
	                parameterDescription('fontSize'),
	                parameterDescription('quietZoneLeft'),
	                parameterDescription('quietZoneRight'),
	                parameterDescription('quietZoneTop'),
	                parameterDescription('quietZoneBottom')
	            ]),
	            'BC_CODE49': functionDescription('This function returns a data set for representing a CODE49.', [
	                parameterDescription('value'),
	                parameterDescription('color'),
	                parameterDescription('backgroundColor'),
	                parameterDescription('showLabel'),
	                parameterDescription('labelPosition'),
	                parameterDescription('grouping'),
	                parameterDescription('groupNo'),
	                parameterDescription('fontFamily'),
	                parameterDescription('fontStyle'),
	                parameterDescription('fontWeight'),
	                parameterDescription('textDecoration'),
	                parameterDescription('textAlign'),
	                parameterDescription('fontSize'),
	                parameterDescription('quietZoneLeft'),
	                parameterDescription('quietZoneRight'),
	                parameterDescription('quietZoneTop'),
	                parameterDescription('quietZoneBottom')
	            ]),
	            'BC_PDF417': functionDescription('This function returns a data set for representing a PDF417.', [
	                parameterDescription('value'),
	                parameterDescription('color'),
	                parameterDescription('backgroundColor'),
	                parameterDescription('errorCorrectionLevel'),
	                parameterDescription('rows'),
	                parameterDescription('columns'),
	                parameterDescription('compact'),
	                parameterDescription('quietZoneLeft'),
	                parameterDescription('quietZoneRight'),
	                parameterDescription('quietZoneTop'),
	                parameterDescription('quietZoneBottom')
	            ]),
	            'BC_DATAMATRIX': functionDescription('This function returns a data set for representing a DATAMATRIX.', [
	                parameterDescription('value'),
	
	                parameterDescription('color'),
	                parameterDescription('backgroundColor'),
	                parameterDescription('eccMode'),
	                parameterDescription('ecc200SymbolSize'),
	                parameterDescription('ecc200EncodingMode'),
	                parameterDescription('ecc00_140SymbolSize'),
	                parameterDescription('structuredAppend'),
	                parameterDescription('structureNumber'),
	                parameterDescription('fileIdentifier'),
	                parameterDescription('quietZoneLeft'),
	                parameterDescription('quietZoneRight'),
	                parameterDescription('quietZoneTop'),
	                parameterDescription('quietZoneBottom')
	            ])
	        }
	    };
	}());

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.calcengine.12.0.0.js.map