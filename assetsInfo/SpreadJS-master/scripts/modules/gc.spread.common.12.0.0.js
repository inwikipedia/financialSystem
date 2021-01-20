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
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Spread"] = factory();
	else
		root["GC"] = root["GC"] || {}, root["GC"]["Spread"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
	
	    exports.Common = __webpack_require__(1);
	    exports.Commands = __webpack_require__(13);
	    exports.Formatter = __webpack_require__(16);
	    exports.Sparklines = __webpack_require__(19);
	    exports.Slicers = __webpack_require__(21);
	
	}());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var common = __webpack_require__(2);
	    __webpack_require__(10);
	    var culture = __webpack_require__(3);
	    _CopyProperty(common, culture);
	    var functionHelper = __webpack_require__(11);
	    _CopyProperty(common, functionHelper);
	
	    common._Types = __webpack_require__(4);
	    common._ArrayHelper = __webpack_require__(9);
	    common._DateTimeHelper = __webpack_require__(8);
	    common._NumberHelper = __webpack_require__(5);
	    common._RegexHelper = __webpack_require__(6);
	    common._StringHelper = __webpack_require__(7);
	
	    common.SR = {};
	    common.SR['en'] = __webpack_require__(12);
	
	
	    module.exports = common;
	
	    function _CopyProperty (to, from) {
	        for (var prop in from) {
	            if (from.hasOwnProperty(prop)) {
	                to[prop] = from[prop];
	            }
	        }
	    }
	
	}());

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var common = {};
	    var cM = __webpack_require__(3).CultureManager;
	    
	    
	    var getResource = function (resources) {
	        return function () {
	            var cultureName = cM.culture();
	            if (resources && cultureName) {
	                var key = cultureName.substr(0, 2).toLowerCase();
	                if (resources.hasOwnProperty(key)) {
	                    return resources[key];
	                }
	                return resources.en;
	            }
	            return {};
	        };
	    };
	    
	    function addElements(a, aCount, index, count) {
	        if (a && 0 <= index && index < aCount) {
	            var rows = [], rowCount, i;
	            for (i = index; i < aCount; i++) {
	                if (typeof (a[i]) !== 'undefined') {
	                    rows.push(i);
	                }
	            }
	            rowCount = rows.length;
	            for (i = 0; i < rowCount; i++) {
	                var k = rows[rowCount - i - 1];
	                var value = a[k];
	                a[k] = null;
	                a[Math.floor(k) + count] = value;
	            }
	        }
	    }
	    function deleteElements(a, aCount, index, count) {
	        if (a && 0 <= index && index < aCount) {
	            var rows = [], rowCount, index2 = index + count, i;
	            for (i = index; i < aCount; i++) {
	                if (typeof (a[i]) !== 'undefined') {
	                    if (index <= i && i < index2) {
	                        a[i] = null;
	                    } else if (i >= index2) {
	                        rows.push(i);
	                    }
	                }
	            }
	            rowCount = rows.length;
	            for (i = 0; i < rowCount; i++) {
	                var k = rows[i];
	                var value = a[k];
	                a[k] = null;
	                a[Math.floor(k) - count] = value;
	            }
	        }
	    }
	    function hasOwnProperty(obj, property) {
	        return obj.hasOwnProperty(property);
	    }
	    function isInstanceOf(obj, type) {
	        return obj instanceof type;
	    }
	    
	    common._addElements = addElements;
	    common._deleteElements = deleteElements;
	    common._getResource = getResource;
	    common._hasOwnProperty = hasOwnProperty;
	    common._isInstanceOf = isInstanceOf;
	    
	    module.exports = common;
	
	}());

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var types = __webpack_require__(4);
	    var keyword_undefined = void 0, keyword_null = null;
	    var inherit = types._inherit, each = types._each;
	    var WINDOW = window;
	    var datePattern1 = [
	        'MM/dd/yyyy',
	        'MM/d/yyyy',
	        'M/dd/yyyy',
	        'M/d/yyyy',
	        'yy/MM/dd',
	        'yy/MM/d',
	        'yy/M/dd',
	        'yy/M/d',
	        'yyyy/MM/dd',
	        'yyyy/MM/d',
	        'yyyy/M/dd',
	        'yyyy/M/d'
	    ], timePattern1 = [
	        'hh:mm:ss',
	        'hh:mm:s',
	        'hh:m:ss',
	        'hh:m:s',
	        'h:mm:ss',
	        'h:mm:s',
	        'h:m:ss',
	        'h:m:s',
	        'hh:mm:ss tt',
	        'hh:mm:s tt',
	        'hh:m:ss tt',
	        'hh:m:s tt',
	        'h:mm:ss tt',
	        'h:mm:s tt',
	        'h:m:ss tt',
	        'h:m:s tt',
	        'hh:mm',
	        'hh:m',
	        'h:mm',
	        'h:m',
	        'hh:mm tt',
	        'hh:m tt',
	        'h:mm tt',
	        'h:m tt'
	    ], datePattern2 = [
	        'MM-dd-yyyy',
	        'MM-d-yyyy',
	        'M-dd-yyyy',
	        'M-d-yyyy',
	        'yy-MM-dd',
	        'yy-MM-d',
	        'yy-M-dd',
	        'yy-M-d',
	        'yyyy-MM-dd',
	        'yyyy-MM-d',
	        'yyyy-M-dd',
	        'yyyy-M-d',
	        'dd-MMMM-yy',
	        'dd-MMM-yy'
	    ];
	    var dateTimeFormatPattern = datePattern1.concat(timePattern1);
	    each(datePattern1, function (dateIndex, dateValue) {
	        each(timePattern1, function (timeIndex, timeValue) {
	            if (timeIndex < timePattern1.length - 4) {
	                dateTimeFormatPattern.push(dateValue + ' ' + timeValue);
	            }
	        });
	    });
	    dateTimeFormatPattern = dateTimeFormatPattern.concat(datePattern2);
	    each(datePattern2, function (dateIndex, dateValue) {
	        each(timePattern1, function (timeIndex, timeValue) {
	            if (timeIndex < timePattern1.length - 4) {
	                dateTimeFormatPattern.push(dateValue + ' ' + timeValue);
	            }
	        });
	    });
	
	
	    var CultureInfo = (function () {
	       
	        
	        function CultureInfo() { 
	           
	            
	
	           
	            
	            this.NumberFormat = {
	                currencyDecimalDigits: 2,
	                currencyDecimalSeparator: '.',
	                currencyGroupSeparator: ',',
	                currencyGroupSizes: [3],
	                currencyNegativePattern: 0,
	                currencyPositivePattern: 0,
	                currencySymbol: '\u00A4',
	                digitSubstitution: 1,
	                isReadOnly: true,
	                numberGroupSizes: [3],
	                nanSymbol: 'NaN',
	                nativeDigits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
	                numberNegativePattern: 1,
	                negativeInfinitySymbol: '-Infinity',
	                negativeSign: '-',
	                numberDecimalDigits: 2,
	                numberDecimalSeparator: '.',
	                numberGroupSeparator: ',',
	                positiveInfinitySymbol: 'Infinity',
	                positiveSign: '+',
	                percentDecimalDigits: 2,
	                percentDecimalSeparator: '.',
	                percentGroupSeparator: ',',
	                percentGroupSizes: [3],
	                percentNegativePattern: 0,
	                percentPositivePattern: 0,
	                percentSymbol: '%',
	                perMilleSymbol: '\u2030',
	                listSeparator: ',',
	                arrayListSeparator: ',',
	                arrayGroupSeparator: ';',
	                dbNumber: {}
	            };
	
	
	           
	            
	
	           
	            
	            this.DateTimeFormat = {
	                abbreviatedDayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	                abbreviatedMonthGenitiveNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ''],
	                abbreviatedMonthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ''],
	                amDesignator: 'AM',
	                calendarIsReadOnly: true,
	                calendarWeekRule: 0,
	                Calendar: {
	                    MinSupportedDateTime: '@-62135568000000@',
	                    MaxSupportedDateTime: '@253402300799999@',
	                    AlgorithmType: 1,
	                    CalendarType: 1,
	                    Eras: [1],
	                    TwoDigitYearMax: 2029,
	                    isReadOnly: true
	                },
	                dateSeparator: '/',
	                dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	                firstDayOfWeek: 0,
	                fullDateTimePattern: 'dddd, dd MMMM yyyy HH:mm:ss',
	                longDatePattern: 'dddd, dd MMMM yyyy',
	                longTimePattern: 'HH:mm:ss',
	                monthDayPattern: 'MMMM dd',
	                monthGenitiveNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', ''],
	                monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', ''],
	                nativeCalendarName: 'Gregorian Calendar',
	                pmDesignator: 'PM',
	                rfc1123Pattern: 'ddd, dd MMM yyyy HH\':\'mm\':\'ss \'GMT\'',
	                shortDatePattern: 'MM/dd/yyyy',
	                shortestDayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	                shortTimePattern: 'HH:mm',
	                sortableDateTimePattern: 'yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss',
	                timeSeparator: ':',
	                universalSortableDateTimePattern: 'yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'',
	                yearMonthPattern: 'yyyy MMMM',
	                filterDialogDateFormatter: 'yyyy/mmmm/dd'  
	            };
	            this.name = function () {
	                return '';
	            };
	            this.id = -1;
	        }
	
	        CultureInfo.prototype = {
	            constructor: CultureInfo,
	            _getDateTimePattern: function () {
	                if (!this._dateTimeFormatPattern) {
	                    var dateTimeFormat = this.DateTimeFormat;
	                    var shortDatePattern = dateTimeFormat.shortDatePattern.replace(/m/g, 'M');
	                    var cultureDateTimeFormatPattern = [shortDatePattern,
	                        shortDatePattern + ' h:mm',
	                        shortDatePattern + ' h:mm:ss',
	                        shortDatePattern + ' h:mm:ss.0',
	                        'MMMdd',
	                        'MMMd',
	                        'MMM dd',
	                        'MMM d'
	                    ];
	                    this._dateTimeFormatPattern = cultureDateTimeFormatPattern.concat(dateTimeFormatPattern);
	                }
	                return this._dateTimeFormatPattern;
	            },
	            _getMonthIndex: function (value) {
	                var self = this;
	                if (!self._upperMonths) {
	                    self._upperMonths = __toUpperArray(self.DateTimeFormat.monthNames);
	                    self._upperMonthsGenitive = __toUpperArray(self.DateTimeFormat.monthGenitiveNames);
	                }
	                return __getIndex(value, self._upperMonths, self._upperMonthsGenitive);
	            },
	            _getAbbrMonthIndex: function (value) {
	                var self = this;
	                if (!self._upperAbbrMonths) {
	                    self._upperAbbrMonths = __toUpperArray(self.DateTimeFormat.abbreviatedMonthNames);
	                    self._upperAbbrMonthsGenitive = __toUpperArray(self.DateTimeFormat.abbreviatedMonthGenitiveNames);
	                }
	                return __getIndex(value, self._upperAbbrMonths, self._upperAbbrMonthsGenitive);
	            },
	            _getDayIndex: function (value) {
	                var self = this;
	                if (!self._upperDays) {
	                    self._upperDays = __toUpperArray(self.DateTimeFormat.dayNames);
	                }
	                return self._upperDays.indexOf(__toUpper(value));
	            },
	            _getAbbrDayIndex: function (value) {
	                var self = this;
	                if (!self._upperAbbrDays) {
	                    self._upperAbbrDays = __toUpperArray(self.DateTimeFormat.abbreviatedDayNames);
	                }
	                return self._upperAbbrDays.indexOf(__toUpper(value));
	            }
	        };
	        function __toUpper(value) {
	            return value.split('\u00A0').join(' ').toUpperCase();
	        }
	
	        function __toUpperArray(arr) {
	            var result = [];
	            for (var i = 0, il = arr.length; i < il; i++) {
	                result[i] = __toUpper(arr[i]);
	            }
	            return result;
	        }
	
	        function __getIndex(value, a1, a2) {
	            var upper = __toUpper(value), i = a1.indexOf(upper);
	            if (i === -1) {
	                i = a2.indexOf(upper);
	            }
	            return i;
	        }
	
	        return CultureInfo;
	    })();
	    var _EraHelper = (function () {
	        function _EraHelper() {
	        }
	
	        _EraHelper._isValidEraDate = function (date) {
	            return date >= this._getEraMin() && date <= this._getEraMax();
	        };
	        _EraHelper._getEraDates = function () {
	            var eras = CultureInfo.eras;
	            if (eras !== keyword_undefined) {
	                var eraDates = [];
	                for (var i = 0; i < eras.length; i++) {
	                    eraDates[i] = new Date(eras[i].startDate.replace(/-/g, '/'));
	                }
	                return eraDates;
	            }
	            return this._EraDates;
	        };
	        _EraHelper._getEraPropByFormat = function (format) {
	            var self = this, propName, retValue;
	            switch (format) {
	                case 'g':
	                    propName = 'symbol';
	                    retValue = self._symbols;
	                    break;
	                case 'gg':
	                    propName = 'abbreviation';
	                    retValue = self._abbreviations;
	                    break;
	                case 'ggg':
	                    propName = 'name';
	                    retValue = self._names;
	                    break;
	                default:
	                    return [];
	            }
	
	            var eras = CultureInfo.eras;
	            var eraNames = [];
	            if (eras !== keyword_undefined) {
	                for (var i = 0; i < eras.length; i++) {
	                    eraNames[i] = eras[i][propName];
	                }
	                return eraNames;
	            }
	            return retValue;
	        };
	        _EraHelper._getEraMax = function () {
	            var eras = CultureInfo.eras;
	            if (eras !== keyword_undefined && eras.length > 0) {
	                var date = new Date(eras[eras.length - 1].startDate.replace(/-/g, '/'));
	                date.setFullYear(date.getFullYear() + 99);
	                return date;
	            }
	            return this._EraMax;
	        };
	        _EraHelper._getEraMin = function () {
	            var eras = CultureInfo.eras;
	            if (eras !== keyword_undefined && eras.length > 0) {
	                return new Date(eras[0].startDate.replace(/-/g, '/'));
	            }
	            return this._EraMin;
	        };
	        _EraHelper._getEraCount = function () {
	            var eras = CultureInfo.eras;
	            if (eras !== keyword_undefined) {
	                return eras.length;
	            }
	            return this._EraCount;
	        };
	        _EraHelper._getEraYears = function () {
	            var eras = CultureInfo.eras;
	            if (eras !== keyword_undefined) {
	                var eraYears = [];
	                for (var i = 1; i < eras.length; i++) {
	                    var date1 = new Date(eras[i - 1].startDate.replace(/-/g, '/'));
	                    var date2 = new Date(eras[i].startDate.replace(/-/g, '/'));
	                    eraYears[i - 1] = date2.getFullYear() - date1.getFullYear() + 1;
	                }
	                eraYears[i - 1] = 99;
	                return eraYears;
	            }
	            return this._EraYears;
	        };
	        _EraHelper._getEraDate = function (date) {
	            var eraDate = {};
	            eraDate._era = -1;
	            eraDate._eraYear = -1;
	            var self = this;
	            if (!self._isValidEraDate(date)) {
	                return eraDate;
	            }
	            for (var i = 0; i < self._getEraCount(); i++) {
	                var nextDate = i + 1 !== self._getEraCount() ? self._getEraDates()[i + 1] : self._addMilliseconds(self._getEraMax(), 1);
	                if (date < nextDate) {
	                    eraDate._era = i;
	                    eraDate._eraYear = date.getFullYear() - self._getEraDates()[i].getFullYear() + 1;
	                    break;
	                }
	            }
	            return eraDate;
	        };
	        _EraHelper._addMilliseconds = function (date, msec) {
	            var newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
	            newDate.setMilliseconds(newDate.getMilliseconds() + msec);
	            return new Date(newDate.valueOf());
	        };
	        _EraHelper._getYearFromEra = function (era, eraYear) {
	            var startYear = _EraHelper._getEraDates()[era].getFullYear();
	            return startYear + eraYear - 1;
	        };
	        _EraHelper._parseEraPart = function (format, text) {
	            text = text.toUpperCase();
	            var eraNames = _EraHelper._getEraPropByFormat(format);
	            for (var i = 0; i < eraNames.length; i++) {
	                if (eraNames[i] === text) {
	                    return i;
	                }
	            }
	            return -1;
	        };
	        _EraHelper._formatEraPart = function (format, date) {
	            var eras = _EraHelper;
	            var eraDateInfo = eras._getEraDate(date);
	            var era = eraDateInfo._era;
	            if (era >= 0) {
	                var ret = eras._getEraPropByFormat(format);
	                if (ret.length > 0) {
	                    return ret[era];
	                }
	            }
	            var eraYear = eraDateInfo._eraYear;
	            if (eraYear >= 0) {
	                var eraYearStr = eraYear.toString();
	                if (format === 'ee') {
	                    if (eraYearStr.length === 1) {
	                        eraYearStr = '0' + eraYearStr;
	                    }
	                    return eraYearStr;
	                }
	                if (format === 'e') {
	                    return eraYearStr;
	                }
	            }
	            return '';
	        };
	        _EraHelper._EraDates = [new Date(1868, 8, 8), new Date(1912, 6, 30), new Date(1926, 11, 25), new Date(1989, 0, 8)];
	        _EraHelper._EraCount = 4;
	        _EraHelper._EraYears = [45, 15, 64, 99];
	        _EraHelper._EraMax = new Date(2087, 12 - 1, 31, 23, 59, 59);
	        _EraHelper._EraMin = new Date(1868, 9 - 1, 8);
	        _EraHelper._shortcuts = ['1,m', '2,t', '3,s', '4,h'];
	        _EraHelper._EraIndices = [0, 1, 2, 3, 0, 1, 2, 3];
	        _EraHelper._names = ['\u660e\u6cbb', '\u5927\u6b63', '\u662d\u548c', '\u5e73\u6210'];
	        _EraHelper._symbols = ['M', 'T', 'S', 'H'];
	        _EraHelper._abbreviations = ['\u660e', '\u5927', '\u662d', '\u5e73'];
	        _EraHelper._EraYearMax = 99;
	        return _EraHelper;
	    })();
	    var _ENCultureInfo = (function (_super) {
	        inherit(_ENCultureInfo, _super);
	        function _ENCultureInfo() {
	            _super.apply(this, arguments);
	            overridePro.call(this, 'NumberFormat', ['currencySymbol', 'isReadOnly'], ['$', false]);
	            overridePro.call(this, 'DateTimeFormat',
	                ['fullDateTimePattern', 'longDatePattern', 'longTimePattern', 'shortDatePattern', 'shortTimePattern', 'yearMonthPattern', 'calendarIsReadOnly'],
	                ['dddd, MMMM dd, yyyy h:mm:ss tt', 'dddd, MMMM dd, yyyy', 'h:mm:ss tt', 'M/d/yyyy', 'h:mm tt', 'MMMM, yyyy', false]);
	            this.name = function () {
	                return 'en-US';
	            };
	            this.id = 0x0409;
	        }
	
	        return _ENCultureInfo;
	    })(CultureInfo);
	    var _JACultureInfo = (function (_super) {
	        inherit(_JACultureInfo, _super);
	        function _JACultureInfo() {
	            _super.apply(this, arguments);
	            var dbNumber = {
	                1: {
	                    letters: ['\u5146', '\u5343', '\u767e', '\u5341', '\u4ebf', '\u5343', '\u767e', '\u5341', '\u4e07', '\u5343', '\u767e', '\u5341', ''],
	                    numbers: ['\u3007', '\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d', '\u4e03', '\u516b', '\u4e5d']
	                },
	                2: {
	                    letters: ['\u5146', '\u9621', '\u767e', '\u62fe', '\u5104', '\u9621', '\u767e', '\u62fe', '\u842c', '\u9621', '\u767e', '\u62fe', ''],
	                    numbers: ['\u3007', '\u58f1', '\u5f10', '\u53c2', '\u56db', '\u4f0d', '\u516d', '\u4e03', '\u516b', '\u4e5d']
	                },
	                3: {
	                    letters: keyword_null,
	                    numbers: ['\uff10', '\uff11', '\uff12', '\uff13', '\uff14', '\uff15', '\uff16', '\uff17', '\uff18', '\uff19']
	                }
	            };
	            overridePro.call(this, 'NumberFormat',
	                ['currencyDecimalDigits', 'currencyNegativePattern', 'currencySymbol', 'isReadOnly', 'nanSymbol',
	                    'negativeInfinitySymbol', 'percentNegativePattern', 'percentPositivePattern', 'positiveInfinitySymbol', 'dbNumber'],
	                [0, 1, '\xa5', false, 'NaN (\u975e\u6570\u5024)', '-\u221e', 1, 1, '+\u221e', dbNumber]);
	            var monthNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', ''];
	            var monthNames = ['1\u6708', '2\u6708', '3\u6708', '4\u6708', '5\u6708', '6\u6708', '7\u6708', '8\u6708', '9\u6708', '10\u6708', '11\u6708', '12\u6708', ''];
	            overridePro.call(this, 'DateTimeFormat', ['abbreviatedDayNames', 'abbreviatedMonthGenitiveNames', 'abbreviatedMonthNames', 'amDesignator',
	                    'calendarIsReadOnly', 'dayNames', 'fullDateTimePattern', 'longDatePattern', 'longTimePattern', 'monthDayPattern', 'monthGenitiveNames',
	                    'monthNames', 'nativeCalendarName', 'pmDesignator', 'shortDatePattern', 'shortestDayNames', 'shortTimePattern', 'yearMonthPattern',
	                    'filterDialogDateFormatter', 'EraFilterDialogDateFormatter'],
	                [['\u65e5', '\u6708', '\u706b', '\u6c34', '\u6728', '\u91d1', '\u571f'], monthNum, monthNum, '\u5348\u524d', false, ['\u65e5\u66dc\u65e5', '\u6708\u66dc\u65e5', '\u706b\u66dc\u65e5', '\u6c34\u66dc\u65e5', '\u6728\u66dc\u65e5', '\u91d1\u66dc\u65e5', '\u571f\u66dc\u65e5'],
	                    'yyyy\'\u5e74\'M\'\u6708\'d\'\u65e5\' H:mm:ss', 'yyyy\'\u5e74\'M\'\u6708\'d\'\u65e5\'', 'H:mm:ss', 'M\'\u6708\'d\'\u65e5\'', monthNames, monthNames,
	                    '\u897f\u66a6 (\u65e5\u672c\u8a9e)', '\u5348\u5f8c', 'yyyy/MM/dd', ['\u65e5', '\u6708', '\u706b', '\u6c34', '\u6728', '\u91d1', '\u571f'], 'H:mm', 'yyyy\'\u5e74\'M\'\u6708\'', 'yyyy\u5e74/mmmm/d\u65e5', 'ggge/mmmm/d\u65e5']);
	            this.DateTimeFormat.eras = _EraHelper;
	            this.name = function () {
	                return 'ja-JP';
	            };
	            this.id = 0x0411;
	            this.isJCKCulture = true;
	        }
	
	        return _JACultureInfo;
	    })(CultureInfo);
	    var _ZHCultureInfo = (function (_super) {
	        inherit(_ZHCultureInfo, _super);
	        function _ZHCultureInfo() {
	            _super.apply(this, arguments);
	            var dbNumber = {
	                1: {
	                    letters: ['\u5146', '\u5343', '\u767e', '\u5341', '\u4ebf', '\u5343', '\u767e', '\u5341', '\u4e07', '\u5343', '\u767e', '\u5341', ''],
	                    numbers: ['\u25cb', '\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d', '\u4e03', '\u516b', '\u4e5d']
	                },
	                2: {
	                    letters: ['\u5146', '\u4edf', '\u4f70', '\u62fe', '\u4ebf', '\u4edf', '\u4f70', '\u62fe', '\u4e07', '\u4edf', '\u4f70', '\u62fe', ''],
	                    numbers: ['\u96f6', '\u58f9', '\u8d30', '\u53c1', '\u8086', '\u4f0d', '\u9646', '\u67d2', '\u634c', '\u7396']
	                },
	                3: {
	                    letters: keyword_null,
	                    numbers: ['\uff10', '\uff11', '\uff12', '\uff13', '\uff14', '\uff15', '\uff16', '\uff17', '\uff18', '\uff19']
	                }
	            };
	            overridePro.call(this, 'NumberFormat', ['currencyNegativePattern', 'currencySymbol', 'isReadOnly', 'nanSymbol', 'negativeInfinitySymbol',
	                    'percentNegativePattern', 'percentPositivePattern', 'positiveInfinitySymbol', 'dbNumber'],
	                [2, '\xa5', false, '\u975e\u6570\u5b57', '\u8d1f\u65e0\u7a77\u5927', 1, 1, '\u6b63\u65e0\u7a77\u5927', dbNumber]);
	            var abbMNames = ['1\u6708', '2\u6708', '3\u6708', '4\u6708', '5\u6708', '6\u6708', '7\u6708', '8\u6708', '9\u6708', '10\u6708', '11\u6708', '12\u6708', ''];
	            var mNames = ['\u4e00\u6708', '\u4e8c\u6708', '\u4e09\u6708', '\u56db\u6708', '\u4e94\u6708', '\u516d\u6708', '\u4e03\u6708', '\u516b\u6708', '\u4e5d\u6708', '\u5341\u6708', '\u5341\u4e00\u6708', '\u5341\u4e8c\u6708', ''];
	            overridePro.call(this, 'DateTimeFormat', ['abbreviatedDayNames', 'abbreviatedMonthGenitiveNames', 'abbreviatedMonthNames',
	                    'amDesignator', 'calendarIsReadOnly', 'dayNames', 'firstDayOfWeek', 'fullDateTimePattern', 'longDatePattern', 'longTimePattern',
	                    'monthDayPattern', 'monthGenitiveNames', 'monthNames', 'nativeCalendarName', 'pmDesignator',
	                    'shortDatePattern', 'shortestDayNames', 'shortTimePattern', 'yearMonthPattern',
	                    'filterDialogDateFormatter'],
	                [['\u5468\u65e5', '\u5468\u4e00', '\u5468\u4e8c', '\u5468\u4e09', '\u5468\u56db', '\u5468\u4e94', '\u5468\u516d'], abbMNames, abbMNames, '\u4e0a\u5348', false, ['\u661f\u671f\u65e5', '\u661f\u671f\u4e00', '\u661f\u671f\u4e8c', '\u661f\u671f\u4e09', '\u661f\u671f\u56db', '\u661f\u671f\u4e94', '\u661f\u671f\u516d'], 1,
	                    'yyyy\'\u5e74\'M\'\u6708\'d\'\u65e5\' H:mm:ss', 'yyyy\'\u5e74\'M\'\u6708\'d\'\u65e5\'', 'H:mm:ss', 'M\'\u6708\'d\'\u65e5\'', mNames, mNames, '\u516c\u5386', '\u4e0b\u5348', 'yyyy/M/d',
	                    ['\u65e5', '\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d'], 'H:mm', 'yyyy\'\u5e74\'M\'\u6708\'', 'yyyy\u5e74/mmmm/d\u65e5']);
	            this.name = function () {
	                return 'zh-cn';
	            };
	            this.id = 0x0804;
	            this.isJCKCulture = true;
	        }
	
	        return _ZHCultureInfo;
	    })(CultureInfo);
	    var _KOCultureInfo = (function (_super) {
	        inherit(_KOCultureInfo, _super);
	        function _KOCultureInfo() {
	            _super.apply(this, arguments);
	            var dbNumber = {
	                1: {
	                    letters: ['\u5146', '\u5343', '\u767e', '\u5341', '\u5104', '\u5343', '\u767e', '\u5341', '\u4e07', '\u5343', '\u767e', '\u5341', ''],
	                    numbers: ['\uff10', '\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\uf9d1', '\u4e03', '\u516b', '\u4e5d']
	                },
	                2: {
	                    letters: ['\u5146', '\u9621', '\u767e', '\uf973', '\u5104', '\u9621', '\u767e', '\uf973', '\u842c', '\u9621', '\u767e', '\uf973', ''],
	                    numbers: ['\uf9b2', '\u58f9', '\u8cb3', '\uf96b', '\u56db', '\u4f0d', '\uf9d1', '\u4e03', '\u516b', '\u4e5d']
	                },
	                3: {
	                    letters: ['\u5146', '\u5343', '\u767e', '\u5341', '\u5104', '\u5343', '\u767e', '\u5341', '\u4e07', '\u5343', '\u767e', '\u5341', ''],
	                    numbers: ['\uff10', '\uff11', '\uff12', '\uff13', '\uff14', '\uff15', '\uff16', '\uff17', '\uff18', '\uff19']
	                }
	            };
	            overridePro.call(this, 'NumberFormat', ['currencyDecimalDigits', 'currencyNegativePattern', 'currencySymbol', 'isReadOnly', 'dbNumber'],
	                [0, 1, '\u20a9', false, dbNumber]);
	            var abbMNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", ""];
	            var mNames = ["1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4", ""];
	            overridePro.call(this, 'DateTimeFormat', ['abbreviatedDayNames', 'abbreviatedMonthGenitiveNames', 'abbreviatedMonthNames',
	                    'amDesignator', 'calendarIsReadOnly', 'dayNames', 'firstDayOfWeek', 'fullDateTimePattern', 'longDatePattern', 'longTimePattern',
	                    'monthDayPattern', 'monthGenitiveNames', 'monthNames', 'nativeCalendarName', 'pmDesignator',
	                    'shortDatePattern', 'shortestDayNames', 'shortTimePattern', 'yearMonthPattern',
	                    'filterDialogDateFormatter'],
	                [["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"], abbMNames, abbMNames, '\uc624\uc804', false, ["\uc77c\uc694\uc77c", "\uc6d4\uc694\uc77c", "\ud654\uc694\uc77c", "\uc218\uc694\uc77c", "\ubaa9\uc694\uc77c", "\uae08\uc694\uc77c", "\ud1a0\uc694\uc77c"], 1,
	                    'yyyy\'\ub144\' M\'\uc6d4\' d\'\uc77c\' dddd h:mm:ss', 'yyyy\'\ub144\' M\'\uc6d4\' d\'\uc77c\' dddd', 'h:mm:ss', 'M\'\uc6d4\' d\'\uc77c\'', mNames, mNames, '\uc11c\uae30', '\uc624\ud6c4', 'yyyy-MM-dd',
	                    ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"], 'tt h:mm', 'yyyy\'\ub144\' M\'\uc6d4\'', 'yyyy\ub144/mmmm/d\uc77c']);
	            this.name = function () {
	                return 'ko-kr';
	            };
	            this.id = 0x0412;
	            this.isJCKCulture = true;
	        }
	
	        return _KOCultureInfo;
	    })(CultureInfo);
	
	    var cultureInfoDict = {
	        'invariant': new CultureInfo(),
	        'en-us': new _ENCultureInfo(),
	        'ja-jp': new _JACultureInfo(),
	        'zh-cn': new _ZHCultureInfo(),
	        'ko-kr': new _KOCultureInfo()
	    };
	
	    function overridePro(proName, fields, values) {
	        var self = this;
	        var field;
	        for (var i = 0, len = fields.length; i < len; i++) {
	            field = fields[i];
	            self[proName][field] = values[i];
	        }
	    }
	
	    var CultureManager = (function () {
	        if (typeof CultureManager.instance === 'object') {
	            return CultureManager.instance;
	        }
	       
	        
	        function CultureManager() {
	            var cRName = 'en-us';
	           
	            
	            this.culture = function (cultureName) {
	                if (arguments.length === 0) {
	                    return cRName;
	                }
	                if (!cultureName) {
	                    return;
	                }
	                if (cRName !== cultureName) {
	                    cRName = cultureName.toLowerCase();
	                    triggerEvent(cRName);
	                }
	            };
	           
	            
	            this.addCultureInfo = function (cultureName, culture) {
	                var numberDecimalSeparator = culture.NumberFormat.numberDecimalSeparator,
	                    arrayListSeparator = culture.NumberFormat.arrayListSeparator,
	                    arrayGroupSeparator = culture.NumberFormat.arrayGroupSeparator;
	                if (numberDecimalSeparator === culture.NumberFormat.listSeparator || arrayGroupSeparator === arrayListSeparator) {
	                    var Common = __webpack_require__(2);
	                    throw Common._getResource(Common.SR)().Exp_Separator;
	                }
	                cultureInfoDict[cultureName.toLowerCase()] = culture;
	            };
	           
	            
	            this.getCultureInfo = function (cultureName) {
	                if (arguments.length === 0) {
	                    return cultureInfoDict[cRName];
	                }
	
	                var isString = typeof (cultureName) === 'string';
	                cultureName = isString ? cultureName.toLowerCase() : cultureName;
	                var dic = cultureInfoDict;
	                var culture = keyword_null;
	                for (var p in dic) {
	                    if (p === cultureName || (dic[p].id !== keyword_undefined && dic[p].id === cultureName)) {
	                        culture = dic[p];
	                        break;
	                    }
	                }
	
	                return culture;
	            };
	            this._getCultureInfo = function (cultureName) {
	                var culture = this.getCultureInfo(cultureName);
	                if (!culture) {
	                    culture = cultureInfoDict[cRName];
	                    if (!culture) {
	                        culture = new CultureInfo();
	                    }
	                }
	                return culture;
	            };
	            this._getFilterDialogFormatterStr = function (id, formatWords) {
	                var cultureInfo = this.getCultureInfo(id) || this.getCultureInfo('en-US');
	                var dateTimeFormatInfo = cultureInfo.DateTimeFormat;
	                var formatterStr = dateTimeFormatInfo.filterDialogDateFormatter;
	                if(formatWords.indexOf('g') >= 0 || formatWords.indexOf('e') >= 0) {
	                    formatterStr = dateTimeFormatInfo.EraFilterDialogDateFormatter || formatterStr;  
	                }
	                return formatterStr;
	            };
	            CultureManager.instance = this;
	        }
	
	        function triggerEvent(culture) {
	            var evt;
	            if (typeof CustomEvent !== 'function') {
	                evt = document.createEvent('CustomEvent');
	                evt.initCustomEvent('cultureChanged', false, false, undefined);
	            } else {
	                evt = new CustomEvent('cultureChanged', {});
	            }
	            evt.cultureInfo = culture;
	           
	           
	           
	           
	            WINDOW.gcCultureInfo = culture;
	            document.dispatchEvent(evt);
	        }
	
	        return CultureManager;
	    })();
	
	    module.exports = {
	        CultureInfo: CultureInfo,
	        CultureManager: new CultureManager()
	    };
	
	}());

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Types = {};
	    Types._each = function (obj, callback) {
	        var value, isArray = Types._isArraylike(obj);
	        if (isArray) {
	            for (var i = 0, length = obj.length; i < length; i++) {
	                value = callback.call(obj[i], i, obj[i]);
	                if (value === false) {
	                    break;
	                }
	            }
	        } else {
	            for (var p in obj) {
	                if (obj.hasOwnProperty(p)) {
	                    value = callback.call(obj[p], p, obj[p]);
	                    if (value === false) {
	                        break;
	                    }
	                }
	            }
	        }
	        return obj;
	    };
	    Types._isEmptyObject = function (obj) {
	        return obj ? (typeof obj === 'object') && (Object.keys(obj).length === 0) : true;
	    };
	    Types._isFunction = function (obj) {
	        return Types._getType(obj) === 'function';
	    };
	    Types._isArray = function (obj) {
	        if (Array.isArray) {
	            return Array.isArray(obj);
	        }
	        return Types._getType(obj) === 'array';
	    };
	    Types._isNumeric = function (obj) {
	        return !isNaN(parseFloat(obj)) && isFinite(obj);
	    };
	    Types._getType = function (obj) {
	        if (obj === null) {
	            return "null";
	        }
	        var class2type = Types._class2type;
	        if (!class2type) {
	            class2type = Types._class2type = {};
	            var arr = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error'];
	            for (var i = 0, length = arr.length; i < length; i++) {
	                class2type['[object ' + arr[i] + ']'] = arr[i].toLowerCase();
	            }
	        }
	        var core_toString = class2type.toString;
	        var typeofObj = typeof obj;
	        return typeofObj === 'object' || typeofObj === 'function' ? class2type[core_toString.call(obj)] || 'object' : typeofObj;
	    };
	    Types._inArray = function (elem, arr, i) {
	        var len;
	        if (arr) {
	            var core_indexOf = [].indexOf;
	            if (core_indexOf) {
	                return core_indexOf.call(arr, elem, i);
	            }
	            len = arr.length;
	            if (Types._isNullOrUndefined(i)) {
	                i = 0;
	            }
	            i = i < 0 ? Math.max(0, len + i) : i;
	            for (; i < len; i++) {
	               
	                if (i in arr && arr[i] === elem) {
	                    return i;
	                }
	            }
	        }
	        return -1;
	    };
	    Types._merge = function (first, second) {
	        var l = second.length, i = first.length, j = 0;
	        if (typeof l === 'number') {
	            for (; j < l; j++) {
	                first[i++] = second[j];
	            }
	        } else {
	            while (second[j] !== undefined) {
	                first[i++] = second[j++];
	            }
	        }
	        first.length = i;
	        return first;
	    };
	    Types._map = function (elems, callback, arg) {
	        var value, i = 0, length = elems.length, isArray = Types._isArraylike(elems), ret = [];
	       
	        if (isArray) {
	            for (; i < length; i++) {
	                value = callback(elems[i], i, arg);
	                if (value !== null) {
	                    ret[ret.length] = value;
	                }
	            }
	        } else {
	            for (i in elems) {
	                if (elems.hasOwnProperty(i)) {
	                    value = callback(elems[i], i, arg);
	                    if (value !== null) {
	                        ret[ret.length] = value;
	                    }
	                }
	            }
	        }
	       
	        var core_concat = [].concat;
	        return core_concat.apply([], ret);
	    };
	    Types._extend = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {}, i = 1, length = arguments.length,
	            deep = false;
	       
	        if (typeof target === 'boolean') {
	            deep = target;
	            target = arguments[1] || {};
	           
	            i = 2;
	        }
	       
	        if (typeof target !== 'object' && !Types._isFunction(target)) {
	            target = {};
	        }
	       
	        if (length === i) {
	            target = this;
	            --i;
	        }
	        for (; i < length; i++) {
	            options = arguments[i];
	           
	            if (!Types._isNullOrUndefined(options)) {
	                for (name in options) { 
	                    src = target[name];
	                    copy = options[name];
	                   
	                    if (target === copy) {
	                        continue;
	                    }
	                   
	                    copyIsArray = Types._isArray(copy);
	                    if (deep && copy && (Types._isPlainObject(copy) || copyIsArray)) {
	                        if (copyIsArray) {
	                            clone = src && Types._isArray(src) ? src : [];
	                        } else {
	                            clone = src && Types._isPlainObject(src) ? src : {};
	                        }
	                       
	                        target[name] = Types._extend(deep, clone, copy);
	                    } else if (copy !== undefined) {
	                        target[name] = copy;
	                    }
	                }
	            }
	        }
	       
	        return target;
	    };
	    Types._inherit = function (d, b) {
	        for (var p in b) {
	            if (b.hasOwnProperty(p)) {
	                d[p] = b[p];
	            }
	        }
	        function __() {
	            this.constructor = d;
	        }
	
	        __.prototype = b.prototype;
	        d.prototype = new __();
	    };
	    Types._isWindow = function (obj) {
	        return obj !== null && obj === obj.window;
	    };
	    Types._isPlainObject = function (obj) {
	       
	       
	       
	        if (!obj || Types._getType(obj) !== 'object' || obj.nodeType || Types._isWindow(obj)) {
	            return false;
	        }
	        var core_hasOwn = {}.hasOwnProperty;
	        try {
	           
	            if (obj.constructor && !core_hasOwn.call(obj, 'constructor') && !core_hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
	                return false;
	            }
	        } catch (e) {
	           
	            return false;
	        }
	       
	       
	        var key;
	        for (key in obj) {
	           
	        }
	        return key === undefined || core_hasOwn.call(obj, key);
	    };
	    Types._isArraylike = function (obj) {
	        if (Types._isNullOrUndefined(obj)) {
	            return false;
	        }
	        var length = obj.length, type = Types._getType(obj);
	        if (Types._isWindow(obj)) {
	            return false;
	        }
	        if (obj.nodeType === 1 && length) {
	            return true;
	        }
	        return type === 'array' || type !== 'function' && (length === 0 || typeof length === 'number' && length > 0 && (length - 1) in obj); 
	    };
	    Types._makeArray = function (arr, results) {
	        var ret = results || [];
	        if (arr !== null) {
	            if (Types._isArraylike(Object(arr))) {
	                Types._merge(ret, typeof arr === 'string' ? [arr] : arr);
	            } else {
	                [].push.call(ret, arr);
	            }
	        }
	        return ret;
	    };
	    Types._isType = function (obj, type) {
	        if (Types._isNullOrUndefined(obj)) {
	            return type === 'null';
	        }
	        if (!type) {
	            return false;
	        }
	        if (type instanceof Function && obj instanceof type) {
	            return true;
	        }
	
	        if (typeof obj === type) {
	            return true;
	        }
	        if (type === 'function' && /^\s*\bfunction\b/.test('' + obj)) {
	            return true;
	        }
	
	        if (Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === type.toLowerCase()) {
	            return true;
	        }
	        if (type === 'DateTime' || type === 'TimeSpan') {
	            return obj instanceof Date;
	        }
	        if (typeof type === 'string' && 'undefined number boolean string'.indexOf(type) > -1) {
	            return false;
	        }
	        return false;
	    };
	    Types._isNullOrUndefined = function (value) {
	        return value === void 0 || value === null;
	    };
	    Types._isNumber = function (value, cultureName) {
	        var numHelper = __webpack_require__(5);
	        if (!numHelper._isValidCultureNumberString(value, cultureName)) {
	            return false;
	        }
	        value = numHelper._replaceCultureSymbolToNormal(value, cultureName);
	        return Types._isType(value, 'number') || Types._isType(value, 'DateTime') || Types._isType(value, 'TimeSpan') ||
	            (value && !Types._isType(value, 'boolean') && !isNaN(value) && !isNaN(parseFloat(value)) && !(value.length >= 2 && value[0] === '0' && value[1] === 'x'));
	       
	    };
	    Types._toDouble = function (value) {
	        var DateTimeHelper = __webpack_require__(8);
	        if (Types._isNullOrUndefined(value) || value === '') {
	            return 0.0;
	        } else if (Types._isType(value, 'number')) {
	            return value;
	        } else if (Types._isType(value, 'string') && !isNaN(value)) {
	            return __webpack_require__(5)._parseLocale(value);
	        } else if (Types._isType(value, 'boolean')) {
	            return value ? 1.0 : 0.0;
	        } else if (Types._isType(value, 'DateTime')) {
	            return DateTimeHelper._toOADate(value);
	        } else if (Types._isType(value, 'TimeSpan')) {
	            return Math.floor(DateTimeHelper._toOADate(value));
	        }
	        return parseFloat(value);
	    };
	
	    Types._cloneObject = function (obj) {
	        if (!obj) {
	            return obj;
	        }
	        if (typeof (obj) === 'number' || typeof (obj) === 'string' || typeof (obj) === 'boolean' || Types._isNullOrUndefined(obj)) {
	            return obj;
	        } else if (obj.clone) {
	            return obj.clone();
	        } else if (obj instanceof Date) {
	            return new Date(obj.valueOf());
	        }
	        var objClone, key, value;
	        if (obj instanceof Object) {
	            objClone = new obj.constructor();
	        } else {
	            objClone = new obj.constructor(obj.valueOf());
	        }
	        for (key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                value = obj[key];
	                if (obj.hasOwnProperty(key) && objClone[key] !== value) {
	                    if (typeof (value) === 'object') {
	                        objClone[key] = Types._cloneObject(value);
	                    } else {
	                        objClone[key] = value;
	                    }
	                }
	            }
	        }
	        objClone.toString = obj.toString;
	        objClone.valueOf = obj.valueOf;
	        return objClone;
	    };
	
	    module.exports = Types;
	
	}());

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(2);
	    var isNullOrUndefined = __webpack_require__(4)._isNullOrUndefined;
	    var RegexHelper = __webpack_require__(6);
	    var StringHelper = __webpack_require__(7);
	    var padZeroLeft = StringHelper._padZeroLeft, padZeroRight = StringHelper._padZeroRight;
	    var cM = __webpack_require__(3).CultureManager;
	    var keyword_null = null, keyword_undefined = void 0, parseIntFn = parseInt, parseFloatFn = parseFloat,
	        FALSE = false, TRUE = true, Math_floor = Math.floor, Math_abs = Math.abs, Math_pow = Math.pow,
	        Math_min = Math.min;
	
	    function substr(str, start, length) {
	        return str.substr(start, length);
	    }
	
	    var sR = function () {
	        return Common._getResource(Common.SR)();
	    };
	
	    var NumberHelper = (function () {
	        var _generalNumberInt = '##################0';
	        var _generalNumberDec = '################';
	        var _signs = {'1': '+', '0': '', '-1': '-'};
	        var _maxInt32 = 4294967295;
	        var _intPlaceholder = ['0', '#', '?'];
	        var currencySymbolList = {
	            "\xa4": "\xa4",
	            "Br": "Br",
	            "Fdj": "Fdj",
	            "Nfk": "Nfk",
	            "R": "R",
	            "$": "$",
	            "FCFA": "FCFA",
	            "GH\u20b5": "GH\u20b5",
	            "\u1265\u122d": "\u1265\u122d",
	            "\u0631.\u0633.\u200f": "\u0631.\u0633.\u200f",
	            "XDR": "XDR",
	            "\u062f.\u0625.\u200f": "\u062f.\u0625.\u200f",
	            "\u062f.\u0628.\u200f": "\u062f.\u0628.\u200f",
	            "\u062f.\u062c.\u200f": "\u062f.\u062c.\u200f",
	            "\u062c.\u0645.\u200f": "\u062c.\u0645.\u200f",
	            "\u20aa": "\u20aa",
	            "\u062f.\u0639.\u200f": "\u062f.\u0639.\u200f",
	            "\u062f.\u0627.\u200f": "\u062f.\u0627.\u200f",
	            "\u0641.\u062c.\u0642.\u200f": "\u0641.\u062c.\u0642.\u200f",
	            "\u062f.\u0643.\u200f": "\u062f.\u0643.\u200f",
	            "\u0644.\u0644.\u200f": "\u0644.\u0644.\u200f",
	            "\u062f.\u0644.\u200f": "\u062f.\u0644.\u200f",
	            "\u062f.\u0645.\u200f": "\u062f.\u0645.\u200f",
	            "\u0623.\u0645.\u200f": "\u0623.\u0645.\u200f",
	            "\u0631.\u0639.\u200f": "\u0631.\u0639.\u200f",
	            "\u0631.\u0642.\u200f": "\u0631.\u0642.\u200f",
	            "\u062c.\u0633.": "\u062c.\u0633.",
	            "S": "S",
	            "\xa3": "\xa3",
	            "\u0644.\u0633.\u200f": "\u0644.\u0633.\u200f",
	            "\u062f.\u062a.\u200f": "\u062f.\u062a.\u200f",
	            "\u0631.\u064a.\u200f": "\u0631.\u064a.\u200f",
	            "\u20b9": "\u20b9",
	            "TSh": "TSh",
	            "\u20ac": "\u20ac",
	            "\u20bc": "\u20bc",
	            "\u20bd": "\u20bd",
	            "K": "K",
	            "\u043b\u0432.": "\u043b\u0432.",
	            "\u20a6": "\u20a6",
	            "CFA": "CFA",
	            "\u09f3": "\u09f3",
	            "\xa5": "\xa5",
	            "KM": "KM",
	            "\u041a\u041c": "\u041a\u041c",
	            "USh": "USh",
	            "K\u010d": "K\u010d",
	            "kr.": "kr.",
	            "Ksh": "Ksh",
	            "CHF": "CHF",
	            "\u0783.": "\u0783.",
	            "Nu.": "Nu.",
	            "EC$": "EC$",
	            "P": "P",
	            "US$": "US$",
	            "D": "D",
	            "Rp": "Rp",
	            "Ar": "Ar",
	            "MOP$": "MOP$",
	            "Rs": "Rs",
	            "MK": "MK",
	            "RM": "RM",
	            "\u20b1": "\u20b1",
	            "RF": "RF",
	            "SR": "SR",
	            "SDG": "SDG",
	            "Le": "Le",
	            "NAf.": "NAf.",
	            "E": "E",
	            "T$": "T$",
	            "VT": "VT",
	            "WS$": "WS$",
	            "Bs": "Bs",
	            "\u20a1": "\u20a1",
	            "Q": "Q",
	            "L": "L",
	            "C$": "C$",
	            "B/.": "B/.",
	            "S/.": "S/.",
	            "\u20b2": "\u20b2",
	            "Bs.": "Bs.",
	            "\u0631\u064a\u0627\u0644": "\u0631\u064a\u0627\u0644",
	            "FG": "FG",
	            "UM": "UM",
	            "kr": "kr",
	            "FBu": "FBu",
	            "FC": "FC",
	            "DA": "DA",
	            "G": "G",
	            "CF": "CF",
	            "DH": "DH",
	            "FCFP": "FCFP",
	            "LS": "LS",
	            "DT": "DT",
	            "kn": "kn",
	            "HUF": "HUF",
	            "\u058f": "\u058f",
	            "ISK": "ISK",
	            "\u20be": "\u20be",
	            "\u200b": "\u200b",
	            "\u20b8": "\u20b8",
	            "\u17db": "\u17db",
	            "\u20a9": "\u20a9",
	            "\u0441\u043e\u043c": "\u0441\u043e\u043c",
	            "Kz": "Kz",
	            "\u20ad": "\u20ad",
	            "MTn": "MTn",
	            "\u0434\u0435\u043d": "\u0434\u0435\u043d",
	            "\u20ae": "\u20ae",
	            "\u0930\u0941": "\u0930\u0941",
	            "Afl.": "Afl.",
	            "\u07d6\u07d5.": "\u07d6\u07d5.",
	            "\u0440\u0443\u0431.": "\u0440\u0443\u0431.",
	            "z\u0142": "z\u0142",
	            "\u060b": "\u060b",
	            "R$": "R$",
	            "Db": "Db",
	            "RON": "RON",
	            "\u20b4": "\u20b4",
	            "MAD": "MAD",
	            "\u0dbb\u0dd4.": "\u0dbb\u0dd4.",
	            "Lek\xeb": "Lek\xeb",
	            "den": "den",
	            "RSD": "RSD",
	            "\u0434\u0438\u043d.": "\u0434\u0438\u043d.",
	            "\u0720.\u0723.\u200f": "\u0720.\u0723.\u200f",
	            "Rs.": "Rs.",
	            "\u0441\u043c\u043d": "\u0441\u043c\u043d",
	            "\u0e3f": "\u0e3f",
	            "m.": "m.",
	            "\u20ba": "\u20ba",
	            "\u2d37\u2d54": "\u2d37\u2d54",
	            "so\u02bbm": "so\u02bbm",
	            "\u0441\u045e\u043c": "\u0441\u045e\u043c",
	            "\u20ab": "\u20ab",
	            "HK$": "HK$",
	            "MOP": "MOP",
	            "NT$": "NT$"
	        };
	
	        function _toFormattedString(num, format, cultureInfo, isFraction) {
	            if (!format || (format.length === 0) || (format === 'i')) {
	                if (cultureInfo && (cultureInfo.name.length > 0)) {
	                    return num.toLocaleString();
	                }
	                return num.toString();
	            }
	            return _toCustomFormattedString(num, format, cultureInfo.NumberFormat, isFraction);
	        }
	
	        function _toCustomFormattedString(num, format, numberFormatCultureInfo, isFraction) {
	            var parsedFormat = _parseCustomNumberFormatter(format, numberFormatCultureInfo);
	           
	           
	            return _formatNumber(num, parsedFormat, numberFormatCultureInfo, isFraction);
	        }
	
	        function _getIntegerAndDecimalLength(value, separator) {
	            var ip = Math_floor(Math_abs(value));
	            var digit = {_integer: 1, _decimal: 0};
	            while (ip >= 10) {
	                ip = ip / 10;
	                digit._integer++;
	            }
	            var valueStr = value.toString();
	            var exponentIndex = valueStr.search(/e/ig);
	            var pointIndex = valueStr.indexOf(separator);
	            var length;
	            if (exponentIndex !== -1) {
	                var numPart = substr(valueStr, 0, exponentIndex);
	                var expPart = substr(valueStr, exponentIndex + 1);
	                var decimalPartLength = 0;
	                if (pointIndex !== -1) {
	                    decimalPartLength = substr(numPart, pointIndex + 1).length;
	                }
	                var expValue = parseFloatFn(expPart);
	                length = decimalPartLength - expValue;
	                if (length < 0) {
	                    length = 0;
	                }
	                digit._decimal = length;
	            } else {
	                length = 0;
	                if (pointIndex !== -1) {
	                    length = substr(valueStr, pointIndex + 1).length;
	                }
	                digit._decimal = length;
	            }
	            return digit;
	        }
	
	        function _parseExponentFormat(format) {
	            var exponent = {
	                _symbol: format.charAt(0),
	                _sign: 0,
	                _exp: 0
	            };
	            var ss = '';
	            for (var si = 1; si < format.length; si++) {
	                ss = format.charAt(si);
	                if (ss === '+') {
	                    exponent._sign = 1;
	                } else if (ss === '-') {
	                    exponent._sign = -1;
	                } else if (ss === '0') {
	                    exponent._exp = format.length - si;
	                    break;
	                } else {
	                    throw new Error(sR().Exp_InvalidExponentFormat);
	                }
	            }
	            return exponent;
	        }
	
	        function _parseCustomNumberFormatter(format, numberFormatCultureInfo) {
	            var currentParsedPart = {
	                _intPart: keyword_null,
	                _decPart: keyword_null,
	                _group: FALSE,
	                _scale: 0,
	                _percent: 0,
	                _permille: 0,
	                _exponent: keyword_null
	            };
	            var stringBuffer = '', inDoubleQuoteString = FALSE, inScientific = FALSE, decimalPointFound = FALSE,
	                groupSeparatorFound = FALSE, scientificFound = FALSE, intPlaceHoldFound = FALSE;
	            var currentChar, previousChar = keyword_null, currentPart = [];
	
	            for (var i = 0; i < format.length; i++) {                 currentChar = format.charAt(i);
	                if (inDoubleQuoteString) {
	                    stringBuffer += currentChar;
	                    if (currentChar === '"') {
	                        currentPart.push(stringBuffer);
	                        stringBuffer = '';
	                        inDoubleQuoteString = FALSE;
	                    }
	                } else if (inScientific) {
	                    if (previousChar === 'E' || previousChar === 'e') {
	                        if (['+', '-', '0'].indexOf(currentChar) >= 0) {
	                            stringBuffer += currentChar;
	                        } else {
	                            inScientific = FALSE;
	                            i--;                             continue;
	                        }
	                    } else if (previousChar === '+' || previousChar === '-') {
	                        if (currentChar === '0') {
	                            stringBuffer += currentChar;
	                        } else {
	                            inScientific = FALSE;
	                            i--;                             continue;
	                        }
	                    } else if (previousChar === '0') {
	                        if (currentChar === '0') {
	                            stringBuffer += currentChar;
	                        } else {
	                            inScientific = FALSE;
	                            if (!scientificFound) {
	                                scientificFound = TRUE;
	                               
	                                currentParsedPart._exponent = _parseExponentFormat(stringBuffer);
	                            }
	                            i--;                             continue;
	                        }
	                    }
	                } else if ((previousChar === '*' || previousChar === '_' || previousChar === '\\') && stringBuffer !== '') {
	                    stringBuffer += currentChar;
	                    currentPart.push(stringBuffer);
	                    stringBuffer = '';
	                } else if (currentChar === '*' || currentChar === '_' || currentChar === '\\') {
	                    intPlaceHoldFound = FALSE;
	                    if (stringBuffer !== '') {
	                        currentPart.push(stringBuffer);
	                        stringBuffer = '';
	                    }
	                    stringBuffer += currentChar;
	                } else if (currentChar === "'") {
	                    intPlaceHoldFound = FALSE;
	                    if (stringBuffer !== '') {
	                        currentPart.push(stringBuffer);
	                        stringBuffer = '';
	                    }
	                    currentPart.push(currentChar);
	                } else if (currentChar === '"') {
	                    intPlaceHoldFound = FALSE;
	                    inDoubleQuoteString = TRUE;
	                    if (stringBuffer !== '') {
	                        currentPart.push(stringBuffer);
	                        stringBuffer = '';
	                    }
	                    stringBuffer += currentChar;
	                } else if (_intPlaceholder.indexOf(currentChar) >= 0) {
	                    intPlaceHoldFound = TRUE;
	                    if (_intPlaceholder.indexOf(previousChar) < 0 && stringBuffer !== '') {
	                        currentPart.push(stringBuffer);
	                        stringBuffer = '';
	                    }
	                    stringBuffer += currentChar;
	                } else if (currentChar === '.' && !decimalPointFound) {
	                    if (stringBuffer !== '') {
	                        currentPart.push(stringBuffer);
	                        stringBuffer = '';
	                    }
	                    currentParsedPart._intPart = currentPart;
	                    currentPart = [];
	                    decimalPointFound = TRUE;
	                    intPlaceHoldFound = FALSE;
	                } else if (currentChar === numberFormatCultureInfo.percentSymbol) {
	                    intPlaceHoldFound = FALSE;
	                    currentParsedPart._percent++;
	                    if (stringBuffer !== '') {
	                        currentPart.push(stringBuffer);
	                        stringBuffer = '';
	                    }
	                    currentPart.push(currentChar);
	                } else if (currentChar === numberFormatCultureInfo.perMilleSymbol) {
	                    intPlaceHoldFound = FALSE;
	                    currentParsedPart._permille++;
	                    if (stringBuffer !== '') {
	                        currentPart.push(stringBuffer);
	                        stringBuffer = '';
	                    }
	                    currentPart.push(currentChar);
	                } else if (currentChar === numberFormatCultureInfo.percentGroupSeparator) {
	                    if (!intPlaceHoldFound) {
	                        stringBuffer += currentChar;
	                    } else {
	                        if (stringBuffer !== '') {
	                            currentPart.push(stringBuffer);
	                            stringBuffer = '';
	                        }
	                        var isScale = TRUE, stringQuote = '';
	                        for (var j = i + 1; j < format.length; j++) {                             var nextChar = format.charAt(j);
	                            if (stringQuote !== '') {
	                                if (nextChar === '"') {
	                                    stringQuote = '';
	                                }
	                                continue;
	                            }
	                            if (nextChar === '"') {
	                                stringQuote = nextChar;
	                            } else if (_intPlaceholder.indexOf(nextChar) >= 0) {
	                                isScale = FALSE;
	                                break;
	                            } else if (nextChar === numberFormatCultureInfo.numberDecimalSeparator || nextChar === ';') {
	                                break;
	                            }
	                        }
	                        if (isScale) {
	                            currentParsedPart._scale++;
	                        } else if (!decimalPointFound) {
	                            nextChar = format.charAt(i + 1);
	                            if (nextChar && (_intPlaceholder.indexOf(nextChar) >= 0)) {
	                                groupSeparatorFound = TRUE;
	                            }
	                        }
	                    }
	                } else if (currentChar === 'E' || currentChar === 'e') {
	                    intPlaceHoldFound = FALSE;
	                    inScientific = TRUE;
	                    if (stringBuffer !== '') {
	                        currentPart.push(stringBuffer);
	                        stringBuffer = '';
	                    }
	                    stringBuffer += currentChar;
	                } else {
	                    intPlaceHoldFound = FALSE;
	                    if (_intPlaceholder.indexOf(previousChar) >= 0 && stringBuffer !== '') {
	                        currentPart.push(stringBuffer);
	                        stringBuffer = '';
	                    }
	                    stringBuffer += currentChar;
	                }
	                previousChar = currentChar;
	            }
	
	            if (stringBuffer !== '') {
	                if (inScientific && !scientificFound) {
	                   
	                    currentParsedPart._exponent = _parseExponentFormat(stringBuffer);
	                }
	                currentPart.push(stringBuffer);
	            }
	            if (groupSeparatorFound) {
	                currentParsedPart._group = TRUE;
	            }
	            if (decimalPointFound) {
	                currentParsedPart._decPart = currentPart;
	            } else {
	                currentParsedPart._intPart = currentPart;
	            }
	            return currentParsedPart;
	        }
	
	        function _insertGroupSeparator(numberArray, groupSizes, sep, shareFlags) {
	            var curSize = groupSizes[0];
	            var curGroupIndex = 1;
	            var numberCount = 0;
	            var needSep = FALSE;
	            var originLength = numberArray.length;
	            for (var i = 0; i < originLength; i++) {
	                var type = numberArray[i].type;
	                if (type === 'number') {
	                    var result = '';
	                    var numberString = numberArray[i].value;
	                    var stringIndex = numberString.length - 1;
	                    while (stringIndex >= 0) {
	                        if (curSize < 1 || curSize > 9) {
	                            throw new Error(sR().Exp_InvalidNumberGroupSize);
	                        }
	                        if (/\d/ig.test(numberString[stringIndex])) {
	                            if (needSep) {
	                                if (result) {
	                                    numberArray.push({type: 'number', value: result});
	                                }
	                                numberArray.push({type: 'groupSeparator', value: sep});
	                                result = '';
	                                needSep = FALSE;
	                            }
	                            numberCount++;
	                        } else {
	                            numberCount = 0;
	                        }
	                        result = numberString[stringIndex] + result;
	                        if (numberCount === curSize) {
	                            needSep = TRUE;
	                            numberCount = 0;
	                            if (curGroupIndex < groupSizes.length) {
	                                curSize = groupSizes[curGroupIndex];
	                                curGroupIndex++;
	                            }
	                        }
	                        stringIndex--;
	                    }
	                    if (result) {
	                        numberArray.push({type: type, value: result});
	                    }
	                } else {
	                    if (type === 'fillingChar') {
	                        shareFlags.infillIndex = numberArray.length - originLength;
	                    }
	                    numberArray.push({type: type, value: numberArray[i].value});
	                }
	            }
	            return numberArray.splice(0, originLength);
	        }
	
	        function _expandNumber(num, precision, groupSizes, sep, decimalChar, negativeSign) {
	            var rounded = round10(num, -precision);
	            if (!isFinite(rounded)) {
	                rounded = num;
	            }
	            num = rounded;
	            var numberString = num.toString();
	            var right;
	            var exponent;
	            var split = numberString.split(/e/i);
	            numberString = split[0];
	            exponent = (split.length > 1 ? parseIntFn(split[1], 10) : 0);
	            split = numberString.split('.');
	            numberString = split[0];
	            right = split.length > 1 ? split[1] : '';
	            if (exponent > 0) {
	                right = padZeroRight(right, exponent);
	                numberString += right.slice(0, exponent);
	                right = substr(right, exponent);
	            } else if (exponent < 0) {
	                exponent = -exponent;
	                if (num < 0) {
	                    numberString = negativeSign + padZeroLeft(numberString.replace(negativeSign, ''), exponent + 1);
	                } else {
	                    numberString = padZeroLeft(numberString, exponent + 1);
	                }
	                right = numberString.slice(-exponent, numberString.length) + right;
	                numberString = numberString.slice(0, -exponent);
	            }
	            if (precision > 0) {
	                if (right.length > precision) {
	                    right = right.slice(0, precision);
	                } else {
	                    right = padZeroRight(right, precision);
	                }
	                right = decimalChar + right;
	            } else {
	                right = '';
	            }
	            return numberString + right;
	        }
	
	        function _processValueWithScale(value, percent, permille, scale) {
	            var result = value;
	           
	            if (percent > 0) {
	                result = _fixNumber(value * (Math_pow(100, percent)), 13);
	            }
	            if (permille > 0) {
	                result = _fixNumber(value * (Math_pow(1000, permille)), 13);
	            }
	            if (scale > 0) {
	                result = _fixNumber(value / (Math_pow(1000, scale)), 13);
	            }
	            return result;
	        }
	
	        function _getPartFormatter(part) {
	            var result = keyword_null;
	            if (part) {
	                result = '';
	                for (var i = 0; i < part.length; i++) {
	                    var partItem = part[i];
	                    if (/^(0|#|\?)+/g.test(partItem)) {
	                        result += partItem;
	                    }
	                }
	            }
	            return result;
	        }
	
	        function _processExponentValue(value, exponent, integerFormatter) {
	            var result = {value: value, exponentValue: 0};
	            var digitLength = _getIntegerAndDecimalLength(value, '.');
	            var digitIntegerLength = digitLength._integer;
	            var absoluteValue = Math_abs(value);
	            var integerLength = (!integerFormatter) ? 1 : integerFormatter.length;
	            if (absoluteValue >= 1) {
	                if (digitIntegerLength > integerLength) {
	                    digitIntegerLength -= integerLength;
	                    result.value = value / Math_pow(10, digitIntegerLength);
	                    result.exponentValue = digitIntegerLength;
	                } else {
	                    result.exponentValue = 0;
	                }
	                if (exponent._sign === -1) {
	                    exponent._sign = 0;
	                }
	            } else if (absoluteValue < 1 && absoluteValue > 0) {
	                exponent._sign = -1;
	                var baseVal = Math_pow(10, integerLength);
	                while (absoluteValue * 10 < baseVal) {
	                    absoluteValue *= 10;
	                    result.exponentValue++;
	                }
	                result.value *= Math_pow(10, result.exponentValue);
	            }
	            return result;
	        }
	
	        function _processIntegerPart(integerPart, numberIntPart, partIntegerFormatter, formatter, exponentValue, result, shareFlags, numberFormatCultureInfo) {             var numberGroupSizes = numberFormatCultureInfo.numberGroupSizes,
	                numberGroupSeparator = numberFormatCultureInfo.numberGroupSeparator,
	                negativeSign = numberFormatCultureInfo.negativeSign,
	                percent = numberFormatCultureInfo.percentSymbol,
	                permille = numberFormatCultureInfo.perMilleSymbol;
	            var exponent = formatter._exponent;
	            var neg = substr(numberIntPart, 0, 1);
	            if (neg === negativeSign) {
	                numberIntPart = substr(numberIntPart, 1);
	            }
	            var numIntPartLength = numberIntPart.length === 1 && numberIntPart === '0' ? 0 : numberIntPart.length;
	            numberIntPart = numIntPartLength === 0 ? '' : numberIntPart;
	
	            var processedDigitLen = 0, processedIntPart = '';
	            for (var i = integerPart.length - 1; i >= 0; i--) {
	                var resultString = '';
	                var integerPartItem = integerPart[i];
	                if (/^(0|#|\?)+/g.test(integerPartItem)) {
	                    if (processedIntPart !== partIntegerFormatter) {
	                        var intPartLength = integerPartItem.length;
	                        for (var intPartIndex = numIntPartLength - processedDigitLen - 1; intPartIndex >= 0 && intPartLength > 0; intPartIndex--) {
	                            var nc = numberIntPart.charAt(intPartIndex);
	                            resultString = nc + resultString;
	                            intPartLength--;
	                            processedDigitLen++;
	                        }
	                        for (var j = intPartLength - 1; j >= 0; j--) {
	                            var formatChar = integerPartItem[j];
	                            processedDigitLen++;
	                            if (formatChar === '0') {
	                                resultString = formatChar + resultString;
	                            } else if (formatChar === '?') {
	                                if (resultString !== '') {
	                                    result.push({type: 'number', value: resultString});
	                                    resultString = '';
	                                }
	                                result.push({type: 'numberPlaceholder', value: formatChar});
	                            }
	                        }
	                        processedIntPart = integerPartItem + processedIntPart;
	                        if (processedIntPart === partIntegerFormatter && processedDigitLen < numIntPartLength) {
	                            resultString = numberIntPart.substr(0, numIntPartLength - processedDigitLen) + resultString;
	                        }
	                        if (resultString !== '') {
	                            result.push({type: 'number', value: resultString});
	                        }
	                    }
	                } else if (formatter._exponent && !shareFlags.replaceExponent && /^((E(\+|-)?|e(\+|-)?)\d+)/g.test(integerPartItem)) {
	                    shareFlags.replaceExponent = TRUE;
	                    var exponentStr = '';
	                    exponentStr += exponent._symbol;
	                    exponentStr += _signs[exponent._sign];
	                    exponentStr += padZeroLeft(exponentValue.toString(), exponent._exp);
	                    result.push({type: 'exponent', value: exponentStr});
	                } else if (integerPartItem[0] === '_') {
	                    result.push({type: 'placeholder', value: integerPartItem[1]});
	                } else if (integerPartItem[0] === '*') {
	                   
	                   
	                    if (!shareFlags.hasInfilling) {
	                        result.push({type: 'fillingChar', value: integerPartItem[1]});
	                        shareFlags.hasInfilling = true;
	                        shareFlags.infillIndex = result.length - 1;
	                    }
	                } else if (integerPartItem[0] === '\\') {
	                    if (integerPartItem.length === 2) {
	                        result.push({type: 'text', value: integerPartItem[1]});
	                    }
	                } else if (integerPartItem[0] === '"' && integerPartItem[integerPartItem.length - 1] === '"') {
	                    if (integerPartItem.length > 2) {
	                        result.push({type: 'text', value: integerPartItem.substr(1, integerPartItem.length - 2)});
	                    }
	                } else if (integerPartItem === percent) {
	                    result.push({type: 'percent', value: integerPartItem});
	                } else if (integerPartItem === permille) {
	                    result.push({type: 'permille', value: integerPartItem});
	                } else if (currencySymbolList[integerPartItem]) {
	                    result.push({type: 'currency', value: integerPartItem});
	                } else {
	                    result.push({type: 'text', value: integerPartItem});
	                }
	            }
	           
	            if (neg === negativeSign && partIntegerFormatter) {
	                result.push({type: 'text', value: neg});
	            }
	            if (formatter._group === TRUE) {
	                _insertGroupSeparator(result, numberGroupSizes, numberGroupSeparator, shareFlags);
	            }
	            result = result.reverse();
	            shareFlags.infillIndex = result.length - 1 - shareFlags.infillIndex;
	        }
	
	        function _processDecimalPart(decimalPart, numbers, partDecimalFormatter, partIntegerFormatter, formatter, exponentValue, result, shareFlags, numberFormatCultureInfo) {             var numberDecimalSeparator = numberFormatCultureInfo.numberDecimalSeparator;
	            var percent = numberFormatCultureInfo.percentSymbol,
	                permille = numberFormatCultureInfo.perMilleSymbol;
	            var decimalSeparatorIndex = numbers.indexOf(numberDecimalSeparator);
	            var exponent = formatter._exponent;
	            if (decimalSeparatorIndex > 0 || partIntegerFormatter !== _generalNumberInt || partDecimalFormatter !== _generalNumberDec) {
	                result.push({type: 'decimalSeparator', value: numberDecimalSeparator});
	            }
	            var numberDecPart = (decimalSeparatorIndex !== -1) ? numbers.substring(decimalSeparatorIndex + 1) : '';
	
	            var processedDigitLen = 0, processedDecimalPart = '';
	            for (var d = 0; d < decimalPart.length; d++) {
	                var decimalPartItem = decimalPart[d];
	                if (/^(0|#|\?)+/g.test(decimalPartItem)) {
	                    var resultString = '';
	                    if (processedDecimalPart !== partDecimalFormatter) {
	                        var decPartLength = decimalPartItem.length;
	                        var processedItemLength = 0;
	                        for (var decPartIndex = processedDigitLen; decPartLength > 0 && numberDecPart.length - processedDigitLen > 0;) {
	                            var nc = numberDecPart.charAt(decPartIndex);
	                            resultString += nc;
	                            decPartLength--;
	                            processedDigitLen++;
	                            processedItemLength++;
	                            decPartIndex++;
	                        }
	                        for (var j = processedItemLength; decPartLength > 0;) {
	                            var formatChar = decimalPartItem[j];
	                            j++;
	                            processedDigitLen++;
	                            decPartLength--;
	                            if (formatChar === '0') {
	                                resultString += formatChar;
	                            } else if (formatChar === '?') {
	                                if (resultString !== '') {
	                                    result.push({type: 'number', value: resultString});
	                                    resultString = '';
	                                }
	                                result.push({type: 'numberPlaceholder', value: formatChar});
	                            }
	                        }
	                        if (resultString !== '') {
	                            result.push({type: 'number', value: resultString});
	                        }
	                        processedDecimalPart += decimalPartItem;
	                    }
	                } else if (exponent && !shareFlags.replaceExponent && /^((E(\+|-)?|e(\+|-)?)\d+)/g.test(decimalPartItem)) {
	                    shareFlags.replaceExponent = TRUE;
	                    var exponentStr = '';
	                    exponentStr += exponent._symbol;
	                    exponentStr += _signs[exponent._sign];
	                    exponentStr += padZeroLeft(exponentValue.toString(), exponent._exp);
	                    result.push({type: 'exponent', value: exponentStr});
	                } else if (decimalPartItem[0] === '_') {
	                    result.push({type: 'placeholder', value: decimalPartItem[1]});
	                } else if (decimalPartItem[0] === '*') {
	                   
	                   
	                    result.push({type: 'fillingChar', value: decimalPartItem[1]});
	                    if (shareFlags.hasInfilling) {
	                        result.splice(shareFlags.infillIndex, 1);
	                    }
	                    shareFlags.hasInfilling = true;
	                    shareFlags.infillIndex = result.length - 1;
	                } else if (decimalPartItem[0] === '\\') {
	                    if (decimalPartItem.length === 2) {
	                        result.push({type: 'text', value: decimalPartItem[1]});
	                    }
	                } else if (decimalPartItem[0] === '"' && decimalPartItem[decimalPartItem.length - 1] === '"') {
	                    if (decimalPartItem.length > 2) {
	                        result.push({type: 'text', value: decimalPartItem.substr(1, decimalPartItem.length - 2)});
	                    }
	                } else if (decimalPartItem === percent) {
	                    result.push({type: 'percent', value: decimalPartItem});
	                } else if (decimalPartItem === permille) {
	                    result.push({type: 'permille', value: decimalPartItem});
	                } else if (currencySymbolList[decimalPartItem]) {
	                    result.push({type: 'currency', value: decimalPartItem});
	                } else {
	                    result.push({type: 'text', value: decimalPartItem});
	                }
	            }
	
	        }
	
	        function _removeLastZeroInDecimal(numbers, numberDecimalSeparator) {
	            var num = numbers;
	            var pointIndex = numbers.indexOf(numberDecimalSeparator);
	            if (pointIndex !== -1) {
	                num = numbers.replace(/0+$/, '');
	            }
	            return num;
	        }
	
	        function _formatNumber(value, formatter, numnerFormatInfo, isFraction) {
	           
	            var result = [];
	            value = _processValueWithScale(value, formatter._percent, formatter._permille, formatter._scale);
	            var integerPart = formatter._intPart, decimalPart = formatter._decPart;
	            if (!integerPart && !decimalPart) {
	                return result;
	            }
	            var partIntegerFormatter = _getPartFormatter(integerPart);
	            var partDecimalFormatter = _getPartFormatter(decimalPart);
	            if (!partDecimalFormatter) {
	                partDecimalFormatter = '';
	            }
	            var exponentValue;
	            if (formatter._exponent) {
	                var processedExponent = _processExponentValue(value, formatter._exponent, partIntegerFormatter);
	                value = processedExponent.value;
	                exponentValue = processedExponent.exponentValue;
	            }
	            var digitLength = _getIntegerAndDecimalLength(value, '.');
	            var numberGroupSizes = numnerFormatInfo.numberGroupSizes,
	                numberGroupSeparator = numnerFormatInfo.numberGroupSeparator,
	                numberDecimalSeparator = numnerFormatInfo.numberDecimalSeparator,
	                negativeSign = numnerFormatInfo.negativeSign;
	            var precision = Math_min(digitLength._decimal, partDecimalFormatter.length);
	            var numbers = _expandNumber(value, precision, numberGroupSizes, numberGroupSeparator, numberDecimalSeparator, negativeSign);
	            if (!isFraction) {
	                numbers = _removeLastZeroInDecimal(numbers, numberDecimalSeparator);
	            }
	            if (numbers === '') {
	                result.push({
	                    type: 'text',
	                    value: (integerPart ? integerPart.join('') : '') + (decimalPart ? decimalPart.join('') : '')
	                });
	                return result;
	            }
	
	            var shareFlags = {hasInfilling: FALSE, infillIndex: -1, replaceExponent: FALSE};
	            var numberIntPart = numbers.split(numberDecimalSeparator)[0];
	            if (integerPart) {
	                _processIntegerPart(integerPart, numberIntPart, partIntegerFormatter, formatter, exponentValue, result, shareFlags, numnerFormatInfo);
	            }
	           
	           
	           
	           
	            if (numberIntPart !== '0' && partIntegerFormatter === '' && decimalPart) {
	                result.push({type: 'number', value: numberIntPart});
	            }
	            if (decimalPart) {
	                _processDecimalPart(decimalPart, numbers, partDecimalFormatter, partIntegerFormatter, formatter, exponentValue, result, shareFlags, numnerFormatInfo);
	            }
	            return result;
	        }
	
	        function _parseNumber(value, cultureInfo) {
	            value = (!isNullOrUndefined(value)) ? StringHelper._trimEnd(value, '') : '';
	            if (value.match(/^[+-]?infinity$/i)) {
	                return parseFloatFn(value);
	            }
	            if (value.match(/^0x[a-f0-9]+$/i)) {
	                return parseIntFn(value, 10);
	            }
	            var numFormat = cultureInfo.NumberFormat;
	            var numberNegativePattern = numFormat.numberNegativePattern;
	            var signInfo = _parseNumberNegativePattern(value, numFormat, numberNegativePattern);
	            var sign = signInfo[0];
	            var num = signInfo[1];
	            if ((sign === '') && (numberNegativePattern !== 1)) {
	                signInfo = _parseNumberNegativePattern(value, numFormat, 1);
	                sign = signInfo[0];
	                num = signInfo[1];
	            }
	            if (sign === '') {
	                sign = '+';
	            }
	           
	            if (num[0] === numFormat.currencySymbol) {
	                num = substr(num, 1);
	            }
	            var exponent;
	            var intAndFraction;
	            var exponentPos = num.indexOf('e');
	            if (exponentPos < 0) {
	                exponentPos = num.indexOf('E');
	            }
	            if (exponentPos < 0) {
	                intAndFraction = num;
	                exponent = keyword_null;
	            } else {
	                intAndFraction = substr(num, 0, exponentPos);
	                exponent = substr(num, exponentPos + 1);
	            }
	            var integer, fraction;
	            var decimalPos = intAndFraction.indexOf('.');
	            if (decimalPos < 0) {
	                integer = intAndFraction;
	                fraction = keyword_null;
	            } else {
	                integer = substr(intAndFraction, 0, decimalPos);
	                fraction = substr(intAndFraction, decimalPos + '.'.length);
	            }
	            integer = integer.split(',').join('');
	            var altNumGroupSeparator = ','.replace(/\u00A0/g, ' ');
	            if (',' !== altNumGroupSeparator) {
	                integer = integer.split(altNumGroupSeparator).join('');
	            }
	            var p = sign + integer;
	            if (fraction !== keyword_null) {
	                p += '.' + fraction;
	            }
	           
	            var lastChar = p[p.length - 1];
	            if (lastChar === numFormat.percentSymbol) {
	                p = substr(p, 0, p.length - 1);
	                p = StringHelper._trimEnd(p, '');
	                var ndp = p.indexOf('.');
	                if (ndp === -1) {
	                    ndp = p.length;
	                }
	                var resultBuilder = '';
	                resultBuilder += substr(p, 0, ndp - 2);
	                resultBuilder += '.';
	                resultBuilder += substr(p, ndp - 2, 2);
	                resultBuilder += substr(p, ndp + 1);
	                p = resultBuilder;
	            }
	            if (exponent !== keyword_null) {
	                var expSignInfo = _parseNumberNegativePattern(exponent, numFormat, 1);
	                if (expSignInfo[0] === '') {
	                    expSignInfo[0] = '+';
	                }
	                p += 'e' + expSignInfo[0] + expSignInfo[1];
	            }
	            if (p.match(/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/)) {
	                return parseFloatFn(p);
	            }
	            return NaN;
	        }
	
	        function _parseNumberNegativePattern(value, numFormat, numberNegativePattern) {
	            var neg = numFormat.negativeSign;
	            var pos = numFormat.positiveSign;
	            var strHelper = StringHelper;
	
	            if (numberNegativePattern === 4 || numberNegativePattern === 2) {
	                neg = ' ' + neg;
	                pos = ' ' + pos;
	            }
	            if (numberNegativePattern === 4 || numberNegativePattern === 3) {
	                if (strHelper._endsWith(value, neg)) {
	                    return ['-', substr(value, 0, value.length - neg.length)];
	                } else if (strHelper._endsWith(value, pos)) {
	                    return ['+', substr(value, 0, value.length - pos.length)];
	                }
	            } else if (numberNegativePattern === 2 || numberNegativePattern === 1) {
	                if (strHelper._startsWith(value, neg)) {
	                    return ['-', substr(value, neg.length)];
	                } else if (strHelper._startsWith(value, pos)) {
	                    return ['+', substr(value, pos.length)];
	                }
	            } else if (numberNegativePattern === 0) {
	                if (strHelper._startsWith(value, '(') && strHelper._endsWith(value, ')')) {
	                    return ['-', substr(value, 1, value.length - 2)];
	                }
	            } else {
	                throw new Error('');
	            }
	            return ['', value];
	        }
	
	        function _toHexString(num, lowCase, precision) {
	            if (Math_abs(Math_floor(num) - num) !== 0) {
	                throw new Error(sR().Exp_BadFormatSpecifier);
	            }
	            var number = num >= 0 ? num.toString(16) : (_maxInt32 + num + 1).toString(16);
	            number = lowCase ? number.toLowerCase() : number.toUpperCase();
	            if (!isNullOrUndefined(precision) && number.length < precision) {
	                return padZeroLeft(number, precision);
	            }
	            return number;
	        }
	
	       
	        function round10(value, exp) {
	            value = +value;
	            exp = +exp;
	           
	            if (isNaN(value) || !(exp % 1 === 0)) {
	                return NaN;
	            }
	
	           
	           
	           
	           
	           
	            var isNegative = value < 0;
	            value = isNegative ? -value : value;
	
	           
	            if (typeof exp === keyword_undefined || exp === 0) {
	               
	                value = Math.round(value);
	               
	                return isNegative ? -value : value;
	            }
	
	           
	            value = value.toString().split('e');
	            value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
	           
	            value = isNegative ? -value : value;
	            value = value.toString().split('e');
	            return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
	        }
	
	        var DOT_REPLACE_SYMBOL = '#dot#';
	        var GROUP_REPLACE_SYMBOL = '#group#';
	
	        function getNumberFormat(cultureName) {
	            var numberFormat = cM._getCultureInfo().NumberFormat;
	            if (typeof cultureName === 'string') {
	                numberFormat = cM._getCultureInfo(cultureName).NumberFormat;
	            }
	            return numberFormat;
	        }
	
	        function _formatObjectToSrting(formatObject) {
	            var resultString = '';
	            if (Array.isArray(formatObject) && formatObject.length > 0) {
	                for (var i = 0; i < formatObject.length; i++) {
	                    var valueType = formatObject[i].type;
	                    var value = formatObject[i].value;
	                    if (valueType === 'placeholder') {
	                        resultString += ' ';
	                    } else if (valueType === 'fillingChar') {
	                        continue;
	                    } else if (valueType === 'numberPlaceholder') {
	                        resultString += ' ';
	                    } else {
	                        resultString += value;
	                    }
	
	                }
	            }
	            return resultString;
	        }
	
	        function _fixNumber(value, num) {
	            if (typeof value === 'number' && value.toString().length >= num) {
	                value = (value < 1 && value > -1) ?
	                    +value.toFixed(num) :
	                    +value.toPrecision(num);
	            }
	            return value;
	        }
	
	        return {
	            _parseLocale: function (value) {
	                return _parseNumber(value, cM._getCultureInfo());
	            },
	            _parseInvariant: function (value) {
	                return _parseNumber(value, cM._getCultureInfo('invariant'));
	            },
	            _customCultureFormat: function (num, format, cultureInfo, isFraction) {
	                if (!cultureInfo) {
	                    cultureInfo = cM._getCultureInfo();
	                }
	                return _toFormattedString(num, format, cultureInfo, isFraction);
	            },
	            _replaceNormalToCultureSymbol: function (value, cultureName) {
	                if (typeof value !== 'string') {
	                    return value;
	                }
	                var numberFormat = getNumberFormat(cultureName);
	                var decimalSeparator = numberFormat.numberDecimalSeparator;
	                var groupSeparator = numberFormat.numberGroupSeparator;
	
	                if (decimalSeparator !== '.') {
	                    value = value.replace(_getReg('[.]'), DOT_REPLACE_SYMBOL);
	                }
	                if (groupSeparator !== ',') {
	                    value = value.replace(_getReg('[,]'), GROUP_REPLACE_SYMBOL);
	                }
	                if (decimalSeparator !== '.') {
	                    value = value.replace(_getReg(DOT_REPLACE_SYMBOL), decimalSeparator);
	                }
	                if (groupSeparator !== ',') {
	                    value = value.replace(_getReg(GROUP_REPLACE_SYMBOL), groupSeparator);
	                }
	                return value;
	            },
	            _replaceCultureSymbolToNormal: function (value, cultureName) {
	                if (typeof value !== 'string') {
	                    return value;
	                }
	                var numberFormat = getNumberFormat(cultureName);
	                var decimalSeparator = numberFormat.numberDecimalSeparator;
	                var groupSeparator = numberFormat.numberGroupSeparator;
	                if (decimalSeparator !== '.') {
	                    value = value.replace(_getReg('[' + decimalSeparator + ']'), DOT_REPLACE_SYMBOL);
	                }
	                if (groupSeparator !== ',') {
	                    value = value.replace(_getReg('[' + groupSeparator + ']'), GROUP_REPLACE_SYMBOL);
	                }
	                if (decimalSeparator !== '.') {
	                    value = value.replace(_getReg(DOT_REPLACE_SYMBOL), '.');
	                }
	                if (groupSeparator !== ',') {
	                    value = value.replace(_getReg(GROUP_REPLACE_SYMBOL), ',');
	                }
	                return value;
	            },
	            _isValidCultureNumberString: function (value, cultureName) {
	               
	               
	               
	               
	                if (typeof value === 'string') {
	                    var numberFormat = getNumberFormat(cultureName);
	                    var decimalSeparator = numberFormat.numberDecimalSeparator;
	                    var groupSeparator = numberFormat.numberGroupSeparator;
	                    if ((decimalSeparator !== '.' && groupSeparator !== '.' && value.indexOf('.') >= 0)
	                        || (decimalSeparator !== ',' && groupSeparator !== ',' && value.indexOf(',') >= 0)) {
	                        return false;
	                    }
	                }
	                return true;
	            },
	            _parseFloat: function (number, cultureName) {
	                return parseFloatFn(this._replaceCultureSymbolToNormal(number, cultureName));
	            },
	            _toHexString: _toHexString,
	            _parseCustomNumberFormatter: _parseCustomNumberFormatter,
	            _formatNumber: _formatNumber,
	            _formatObjectToSrting: _formatObjectToSrting,
	            _generalNumberInt: _generalNumberInt,
	            _generalNumberDec: _generalNumberDec,
	            _fixNumber: _fixNumber
	        };
	    })();
	
	
	    function _getReg(regStr) {
	        return RegexHelper._getReg(regStr);
	    }
	
	    module.exports = NumberHelper;
	
	}());

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var StringHelper = __webpack_require__(7);
	    
	    var RegexHelper = (function () {
	        function RegexHelper() {
	        }
	    
	        RegexHelper._getReg = function (regStr) {
	            var reg = RegexHelper._regDict[regStr];
	            if (!reg) {
	                reg = RegexHelper._regDict[regStr] = new RegExp(regStr, 'g');
	            }
	            reg.lastIndex = 0;
	            return reg;
	        };
	        RegexHelper._getRegIgnoreCase = function (regStr) {
	            var reg = RegexHelper._regDictIgnoreCase[regStr];
	            if (!reg) {
	                reg = RegexHelper._regDictIgnoreCase[regStr] = new RegExp(regStr, 'gi');
	            }
	            reg.lastIndex = 0;
	            return reg;
	        };
	        RegexHelper._getWildcardCriteria = function (criteria, ignoreTilda , exactMatch) {
	            if (RegexHelper._wildcardParseRecord[criteria]) {
	                return RegexHelper._wildcardParseResultBuffer[criteria];
	            }
	            var wildcardChars = '[~?*]+';
	            if (RegexHelper._getReg(wildcardChars).test(criteria)) {
	                var result = [];
	                var charArray = criteria.split(''), currentChar;
	                var escapeCharDict = {
	                    '.': true,
	                    '+': true,
	                    '$': true,
	                    '^': true,
	                    '[': true,
	                    ']': true,
	                    '(': true,
	                    ')': true,
	                    '{': true,
	                    '}': true,
	                    '|': true,
	                    '/': true
	                };
	                for (var i = 0; i < charArray.length; i++) {
	                    currentChar = charArray[i];
	                    if (currentChar === '~' && i < charArray.length - 1) {
	                        i++; 
	                        currentChar = charArray[i];
	                        if (currentChar === '*' || currentChar === '?') {
	                            result.push('\\');
	                        } else if (ignoreTilda) {
	                            result.push('~');
	                        }
	                        result.push(currentChar);
	                    } else if (currentChar === '?') {
	                        result.push('.');
	                    } else if (currentChar === '*') {
	                        result.push('.');
	                        if(exactMatch) {
	                            result.push('+');
	                        } else {
	                            result.push('*');
	                        }
	                    } else if(escapeCharDict[currentChar]) {
	                        result.push('\\');
	                        result.push(currentChar);
	                    } else {
	                        result.push(currentChar);
	                    }
	                }
	                return result.join('');
	            }
	            return null;
	        };
	        RegexHelper._getWildcardCriteriaFullMatch = function (criteria, ignoreTilda , exactMatch) {
	            var criteriaTemp = RegexHelper._getWildcardCriteria(criteria, ignoreTilda, exactMatch);
	            if (criteriaTemp) {
	                criteriaTemp = '^' + criteriaTemp + '$';
	            }
	            return criteriaTemp;
	        };
	        RegexHelper._getReplaceSymbol = function (expectSymbol, srcStr) {
	            var asteriskSymbol = '#' + expectSymbol + '0#';
	            var i = 1;
	            while (srcStr.indexOf(asteriskSymbol) > 0) { 
	                asteriskSymbol = StringHelper._join(asteriskSymbol, '#' + expectSymbol + (i - 1) + '#', '#' + expectSymbol + i + '#');
	                i++;
	            }
	            return asteriskSymbol;
	        };
	        RegexHelper._regDict = {};
	        RegexHelper._regDictIgnoreCase = {};
	        RegexHelper._wildcardParseRecord = {};
	        RegexHelper._wildcardParseResultBuffer = {};
	        RegexHelper._replaceRegString2NormalString = function (srcStr) {
	            return srcStr.replace(/([\~\!\@\#\$\%\^\&\*\(\)\-\_\+\=\[\]\{\}\|\\\;\:\'\"\,\.\/\<\>\?])/, '\\$1');
	        };
	        return RegexHelper;
	    })();
	    
	    module.exports = RegexHelper;
	
	}());

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var isNullOrUndefined = __webpack_require__(4)._isNullOrUndefined;
	    
	    function substr(str, start, length) {
	        return str.substr(start, length);
	    }
	    
	    var StringHelper = {
	        _contains: function (str, value, ignoreCase) {
	            if (ignoreCase) {
	                str = str.toLowerCase();
	                value = value.toLowerCase();
	            }
	            return value === '' || str.indexOf(value) >= 0;
	        },
	        _indexOf: function (str, value, ignoreCase) {
	            if (ignoreCase) {
	                var tempStr = str.toLowerCase();
	                var tempValue = value.toLowerCase();
	                return tempStr.indexOf(tempValue);
	            }
	            return str.indexOf(value);
	        },
	       
	        _trimStart: function (str, trimChar) {
	            if (!trimChar) {
	                return str;
	            }
	            var temp = str;
	            while (substr(temp, 0, trimChar.length) === trimChar) {
	                temp = substr(temp, trimChar.length);
	            }
	            return temp;
	        },
	       
	        _trimEnd: function (str, trimChar) {
	            if (!trimChar) {
	                return str;
	            }
	            var temp = str;
	            while (substr(temp, temp.length - trimChar.length, trimChar.length) === trimChar) {
	                temp = substr(temp, 0, temp.length - trimChar.length);
	            }
	            return temp;
	        },
	        _insert: function (str, startIndex, value) {
	            if (startIndex < 0 || startIndex > str.length || isNullOrUndefined(value)) {
	                throw new Error();
	            }
	            var tempStrStart = substr(str, 0, startIndex);
	            var tempStrEnd = substr(str, startIndex, str.length - startIndex);
	            return tempStrStart + value + tempStrEnd;
	        },
	        _remove: function (str, startIndex, count) {
	            if (isNullOrUndefined(count)) {
	                count = str.length - startIndex;
	            }
	            if (startIndex < 0 || count < 0 || startIndex + count > str.length) {
	                throw new Error();
	            }
	            var valueStart = substr(str, 0, startIndex);
	            var valueEnd = substr(str, startIndex + count, str.length - startIndex - count);
	            return valueStart + valueEnd;
	        },
	        _startsWith: function (str, value, ignoreCase) {
	            return stringWith(str, value, ignoreCase, function (str1, str2) {
	                return str1.slice(0, str2.length) === str2;
	            });
	        },
	        _endsWith: function (str, value, ignoreCase) {
	            return stringWith(str, value, ignoreCase, function (str1, str2) {
	                return str1.slice(-str2.length) === str2;
	            });
	        },
	        _replace: function (str, oldValue, newValue, ignoreCase) {
	            if (!oldValue) {
	                throw new Error();
	            }
	           
	            newValue = ('' + newValue).replace(/\$/g, '$$$$');
	            return str.replace(new RegExp(oldValue, 'g' + (ignoreCase ? 'i' : '')), newValue);
	        },
	        _replaceAllNoReg: function (str, oldValue, newValue, ignoreCase) {
	            oldValue = __webpack_require__(6)._replaceRegString2NormalString(oldValue);
	            return this._replace(str, oldValue, newValue, ignoreCase);
	        },
	        _leftBefore: function (src, suffex) {
	            var index = src.indexOf(suffex);
	            if (index < 0 || index >= src.length) {
	                return src;
	            }
	            return substr(src, 0, index);
	        },
	        _count: function (src, ss) {
	            var count = 0, pos = src.indexOf(ss);
	            while (pos >= 0) {
	                count += 1;
	                pos = src.indexOf(ss, pos + 1);
	            }
	            return count;
	        },
	        _join: function (src, substring, replacement) {
	            return src.split(substring).join(replacement);
	        },
	        _format: function (format, args) {
	            var f = format;
	            for (var i = 0; i < args.length; i++) {
	                var re = new RegExp('\\{' + i + '\\}', 'g');
	                f = f.replace(re, args[i]);
	            }
	            return f;
	        },
	       
	       
	       
	       
	       
	       
	       
	       
	        _padZero: function (str, count, left) {
	            var str2 = str.toString();
	            for (var l = str2.length; l < count; l++) {
	                str2 = (left ? ('0' + str2) : (str2 + '0'));
	            }
	            return str2;
	        },
	        _padZeroLeft: function (string, count) {
	            return StringHelper._padZero(string, count, true);
	        },
	        _padZeroRight: function (string, count) {
	            return StringHelper._padZero(string, count, false);
	        },
	        _compareStringIgnoreCase: function (s1, s2) {
	            return s1 === s2 || !s1 && !s2 || s1 && s2 && s1.toLowerCase() === s2.toLowerCase();
	        },
	        _toUpperCase: function (string) {
	            return string.toUpperCase();
	        },
	        _escapeHtml: function (str) {
	            var map = {
	                '&': '&amp;',
	                '<': '&lt;',
	                '>': '&gt;',
	                '"': '&quot;',
	                '\'': '&#x27;',
	                '`': '&#x60;'
	            };
	            var replaceReg = __webpack_require__(6)._getReg('(?:&|<|>|\"|\'|`)');
	            return replaceReg.test(str) ? str.replace(replaceReg, function (m) {
	                return map[m];
	            }) : str;
	        },
	        _unescapeHtml: function (str) {
	            var map = {
	                '&amp;': '&',
	                '&lt;': '<',
	                '&gt;': '>',
	                '&quot;': '"',
	                '&#x27;': '\'',
	                '&#x60;': '`'
	            };
	            var replaceReg = __webpack_require__(6)._getReg('(?:&amp;|&lt;|&gt;|&quot;|&#x27;|&#x60;)');
	            return replaceReg.test(str) ? str.replace(replaceReg, function (m) {
	                return map[m];
	            }) : str;
	        }
	    };
	    
	    function stringWith(str, value, ignoreCase, callBack) {
	        if (isNullOrUndefined(value)) {
	            throw new Error();
	        }
	        if (value === '') {
	            return true;
	        }
	        if (value.length > str.length) {
	            return false;
	        }
	        var thisStr = str;
	        var valueStr = value;
	        if (ignoreCase) {
	            thisStr = thisStr.toLowerCase();
	            valueStr = valueStr.toLowerCase();
	        }
	        return callBack(thisStr, valueStr);
	    }
	    
	    module.exports = StringHelper;
	
	}());

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(2);
	    var StringHelper = __webpack_require__(7);
	    var ArrayHelper = __webpack_require__(9);
	    var cM = __webpack_require__(3).CultureManager;
	    var isNullOrUndefined = __webpack_require__(4)._isNullOrUndefined;
	    var padZeroLeft = StringHelper._padZeroLeft;
	    var keyword_null = null, parseIntFn = parseInt, FALSE = false, TRUE = true, Math_floor = Math.floor,
	        Math_abs = Math.abs;
	
	    var sR = function () {
	        return Common._getResource(Common.SR)();
	    };
	
	    var dateCache = {};
	    var DateTimeHelper = (function () {
	        function parseDate(value, cultureInfo, args) {
	            var i, l, date, format, formats, custom = FALSE;
	            formats = args;
	            formats.slice(1).forEach(function (f) {
	                if (f) {
	                    custom = true;
	                }
	            });
	            if (!custom) {
	                formats = formats.concat(cultureInfo._getDateTimePattern());
	            }
	            for (i = 1, l = formats.length; i < l; i++) {
	                format = formats[i];
	                if (format) {
	                    custom = TRUE;
	                    date = parseDateExact(value, format, cultureInfo);
	                    if (date) {
	                        return date;
	                    }
	                }
	            }
	            return keyword_null;
	        }
	
	        function toFormattedString(date, format, cultureInfo) {
	            var dtf = cultureInfo.DateTimeFormat, convert = dtf.Calendar.convert;
	            if (!format || !format.length) {
	                if (cultureInfo && cultureInfo.name.length) {
	                    if (convert) {
	                        return toFormattedString(date, dtf.fullDateTimePattern, cultureInfo);
	                    }
	                    return date.toLocaleString();
	                }
	                return date.toString();
	            }
	            var eras = dtf.eras, sortable = (format === 's');
	            var ret = '';
	            var hour;
	            var foundDay, checkedDay, dayPartRegExp = /([^d]|^)(d|dd)([^d]|$)/g;
	
	            function hasDay() {
	                if (foundDay || checkedDay) {
	                    return foundDay;
	                }
	                foundDay = dayPartRegExp.test(format);
	                checkedDay = TRUE;
	                return foundDay;
	            }
	
	            var quoteCount = 0, tokenRegExp = getTokenRegExp(), converted;
	            if (!sortable && convert) {
	                converted = convert.fromGregorian(date);
	            }
	            function getPart(dateObj, part) {
	                if (converted) {
	                    return converted[part];
	                }
	                switch (part) {
	                    case 0:
	                        return dateObj.getFullYear();
	                    case 1:
	                        return dateObj.getMonth();
	                    case 2:
	                        return dateObj.getDate();
	                    default:
	                        return;
	                }
	            }
	            var eraIndex = -2;
	            var eraYearIndex = -2;
	            var stringValue = { _value: '' };
	            for (var tokenIndex = 0; ; tokenIndex++) { 
	                var index = tokenRegExp.lastIndex;
	                var ar = tokenRegExp.exec(format);
	                var preMatch = format.slice(index, ar ? ar.index : format.length);
	                stringValue._value = '';
	                quoteCount += appendPreOrPostMatch(preMatch, stringValue);
	                ret += stringValue._value;
	                if (!ar) {
	                    break;
	                }
	                if ((quoteCount % 2) === 1) {
	                    ret += (ar[0]);
	                    continue;
	                }
	                var fullYear = date.getFullYear(),
	                    day = date.getDay(),
	                    hours = date.getHours(),
	                    minutes = date.getMinutes(),
	                    seconds = date.getSeconds(),
	                    milliseconds = date.getMilliseconds(),
	                    timezoneOffset = date.getTimezoneOffset();
	                switch (ar[0]) {
	                    case 'dddd':
	                        ret += (dtf.dayNames[day]);
	                        break;
	                    case 'ddd':
	                        ret += (dtf.abbreviatedDayNames[day]);
	                        break;
	                    case 'dd':
	                        foundDay = TRUE;
	                        ret += (padZeroLeft(getPart(date, 2), 2));
	                        break;
	                    case 'd':
	                        foundDay = TRUE;
	                        ret += (getPart(date, 2));
	                        break;
	                    case 'MMMM':
	                        ret += ((dtf.monthGenitiveNames && hasDay()) ? dtf.monthGenitiveNames[getPart(date, 1)] : dtf.monthNames[getPart(date, 1)]);
	                        break;
	                    case 'MMM':
	                        ret += ((dtf.abbreviatedMonthGenitiveNames && hasDay()) ? dtf.abbreviatedMonthGenitiveNames[getPart(date, 1)] : dtf.abbreviatedMonthNames[getPart(date, 1)]);
	                        break;
	                    case 'MM':
	                        ret += padZeroLeft(getPart(date, 1) + 1, 2);
	                        break;
	                    case 'M':
	                        ret += (getPart(date, 1) + 1);
	                        break;
	                    case 'yyyy':
	                    case 'yyy':
	                       
	                        if (eraIndex >= 0) {
	                            ret += eras._formatEraPart('ee', date);
	                        } else {
	                            ret += padZeroLeft((converted ? converted[0] : fullYear), 4);
	                        }
	                        break;
	                    case 'yy':
	                       
	                        if (eraIndex >= 0) {
	                            ret += eras._formatEraPart('ee', date);
	                        } else {
	                            ret += padZeroLeft((converted ? converted[0] : fullYear) % 100, 2);
	                        }
	                        break;
	                    case 'y':
	                       
	                        if (eraIndex >= 0) {
	                            ret += eras._formatEraPart('e', date);
	                        } else {
	                            ret += (((converted ? converted[0] : fullYear) % 100).toString());
	                        }
	                        break;
	                    case 'hh':
	                        hour = hours % 12;
	                        if (hour === 0) {
	                            hour = 12;
	                        }
	                        ret += (padZeroLeft(hour, 2));
	                        break;
	                    case 'h':
	                        hour = hours % 12;
	                        if (hour === 0) {
	                            hour = 12;
	                        }
	                        ret += (hour);
	                        break;
	                    case 'HH':
	                        ret += padZeroLeft(hours, 2);
	                        break;
	                    case 'H':
	                        ret += (hours.toString());
	                        break;
	                    case 'mm':
	                        ret += padZeroLeft(minutes, 2);
	                        break;
	                    case 'm':
	                        ret += (minutes.toString());
	                        break;
	                    case 'ss':
	                        ret += padZeroLeft(seconds, 2);
	                        break;
	                    case 's':
	                        ret += (seconds.toString());
	                        break;
	                    case 'tt':
	                        ret += ((hours < 12) ? dtf.amDesignator : dtf.pmDesignator);
	                        break;
	                    case 't':
	                        ret += (((hours < 12) ? dtf.amDesignator : dtf.pmDesignator).charAt(0));
	                        break;
	                    case 'f':
	                    case '0':
	                        ret += (padZeroLeft(milliseconds, 3).charAt(0));
	                        break;
	                    case 'ff':
	                    case '00':
	                        ret += (padZeroLeft(milliseconds, 3).substr(0, 2));
	                        break;
	                    case 'fff':
	                    case '000':
	                        ret += (padZeroLeft(milliseconds, 3));
	                        break;
	                    case 'z':
	                        hour = timezoneOffset / 60;
	                        ret += (((hour <= 0) ? '+' : '-') + Math_floor(Math_abs(hour)));
	                        break;
	                    case 'zz':
	                        hour = timezoneOffset / 60;
	                        ret += (((hour <= 0) ? '+' : '-') + padZeroLeft(Math_floor(Math_abs(hour)), 2));
	                        break;
	                    case 'zzz':
	                        hour = timezoneOffset / 60;
	                        ret += (((hour <= 0) ? '+' : '-') + padZeroLeft(Math_floor(Math_abs(hour)), 2) + ':' + padZeroLeft(Math_abs(timezoneOffset % 60), 2));
	                        break;
	                    case 'g':
	                    case 'gg':
	                    case 'ggg':
	                       
	                        if (!eras) {
	                            break;
	                        }
	                        if (eraIndex === tokenIndex - 1) {
	                            eraIndex = tokenIndex;
	                            break;
	                        } else {
	                            ret += eras._formatEraPart(ar[0], date);
	                            eraIndex = tokenIndex;
	                        }
	                        break;
	                    case 'e':
	                    case 'ee':
	                       
	                        if (!eras) {
	                            ret += padZeroLeft((converted ? converted[0] : fullYear), 4);
	                            break;
	                        } else if (eraYearIndex === tokenIndex - 1) {
	                            eraYearIndex = tokenIndex;
	                            break;
	                        } else {
	                            ret += eras._formatEraPart(ar[0], date);
	                            eraYearIndex = tokenIndex;
	                        }
	                        break;
	                    case '/':
	                        ret += (dtf.dateSeparator);
	                        break;
	                    case '[h]':
	                    case '[hh]':
	                    case '[H]':
	                    case '[HH]':
	                    case '[mm]':
	                    case '[ss]':
	                        ret += ar[0];
	                        break;
	                    default:
	                        throw new Error(sR().Exp_InvalidDateFormat);
	                }
	            }
	            return ret.toString();
	        }
	
	        function appendPreOrPostMatch(preMatch, strBuilder) {
	            var quoteCount = 0;
	            var escaped = FALSE;
	            for (var i = 0, il = preMatch.length; i < il; i++) {
	                var c = preMatch.charAt(i);
	                switch (c) {
	                   
	                    case '\"':
	                        if (escaped) {
	                            strBuilder._value += '\'';
	                        } else {
	                            quoteCount++;
	                        }
	                        escaped = FALSE;
	                        break;
	                    case '\\':
	                        if (escaped) {
	                            strBuilder._value += '\\';
	                        }
	                        escaped = !escaped;
	                        break;
	                    default:
	                        strBuilder._value += c;
	                        escaped = FALSE;
	                        break;
	                }
	            }
	            return quoteCount;
	        }
	
	        function expandYear(cultureInfo, year) {
	            var now = new Date();
	            var eras = cultureInfo.DateTimeFormat.eras;
	            if (eras && year < 100) {
	                var curr = eras._getEraDate(now)._eraYear;
	                year += curr - (curr % 100);
	                if (year > cultureInfo.DateTimeFormat.Calendar.TwoDigitYearMax) {
	                    year -= 100;
	                }
	            }
	            return year;
	        }
	
	        function getTokenRegExp() {
	            return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|000|00|0|zzz|zz|z|ggg|gg|g|ee|e|\[H\]|\[HH\]|\[h\]|\[hh\]|\[mm\]|\[ss\]/g;
	        }
	
	        function getParseRegExp(dtf, format) {
	            if (!dtf._parseRegExp) {
	                dtf._parseRegExp = {};
	            } else if (dtf._parseRegExp[format]) {
	                return dtf._parseRegExp[format];
	            }
	            var expFormat = format;
	           
	           
	           
	            expFormat = expFormat.replace('%M', 'M');
	            expFormat = expFormat.replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, '\\\\$1');
	            var regexp = '^';
	            var stringValue = { _value: '' };
	            var groups = [];
	            var index = 0;
	            var quoteCount = 0;
	            var tokenRegExp = getTokenRegExp();
	            var match;
	            while ((match = tokenRegExp.exec(expFormat)) !== keyword_null) {
	                stringValue._value = '';
	                var preMatch = expFormat.slice(index, match.index);
	                index = tokenRegExp.lastIndex;
	                quoteCount += appendPreOrPostMatch(preMatch, stringValue);
	                regexp += stringValue._value;
	                if ((quoteCount % 2) === 1) {
	                    regexp += match[0];
	                    continue;
	                }
	                switch (match[0]) {
	                    case 'dddd':
	                    case 'ddd':
	                    case 'MMMM':
	                    case 'MMM':
	                    case 'gggg':
	                    case 'ggg':
	                    case 'gg':
	                    case 'g':
	                        regexp += '(\\D+)';
	                        break;
	                    case 'tt':
	                    case 't':
	                        regexp += '(\\D*)';
	                        break;
	                    case 'dd':
	                    case 'd':
	                    case 'MM':
	                    case 'M':
	                    case 'yy':
	                    case 'y':
	                    case 'eee':
	                    case 'ee':
	                    case 'e':
	                    case 'HH':
	                    case 'H':
	                    case 'hh':
	                    case 'h':
	                    case 'mm':
	                    case 'm':
	                    case 'ss':
	                    case 's':
	                        regexp += '(\\d\\d?)';
	                        break;
	                    case 'yyy':
	                    case 'yyyy':
	                        regexp += '(\\d{2}|\\d{4})';
	                        break;
	                    case 'fff':
	                    case '000':
	                        regexp += '(\\d{3})';
	                        break;
	                    case 'ff':
	                    case '00':
	                        regexp += '(\\d{2})';
	                        break;
	                    case 'f':
	                    case '0':
	                        regexp += '(\\d)';
	                        break;
	                    case 'zzz':
	                        regexp += '([+-]?\\d\\d?:\\d{2})';
	                        break;
	                    case 'zz':
	                    case 'z':
	                        regexp += '([+-]?\\d\\d?)';
	                        break;
	                    case '/':
	                        regexp += '(\\' + dtf.dateSeparator + ')';
	                        break;
	                    default:
	                        throw new Error(sR().Exp_InvalidDateFormat);
	                }
	                ArrayHelper._add(groups, match[0]);
	            }
	            stringValue._value = '';
	            appendPreOrPostMatch(expFormat.slice(index), stringValue);
	            regexp += stringValue._value;
	            regexp += '$';
	            var regexpStr = regexp.toString().replace(/\s+/g, '\\s+');
	            var parseRegExp = { '_regExp': regexpStr, '_groups': groups, '_exp': new RegExp(regexpStr) };
	            dtf._parseRegExp[format] = parseRegExp;
	            return parseRegExp;
	        }
	
	        function parseDateExact(value, format, cultureInfo) {
	            value = value.trim();
	            var dtf = cultureInfo.DateTimeFormat, parseInfo = getParseRegExp(dtf, format),
	                match = parseInfo._exp.exec(value);
	            if (match === keyword_null) {
	                return keyword_null;
	            }
	            var groups = parseInfo._groups, era = keyword_null, year = keyword_null, month = keyword_null,
	                date = keyword_null,
	                weekDay = keyword_null, hour = 0, hourOffset, min = 0, sec = 0, msec = 0, tzMinOffset = keyword_null,
	                pmHour = FALSE;
	            for (var j = 0, jl = groups.length; j < jl; j++) {
	                var matchGroup = match[j + 1];
	                if (matchGroup) {
	                    switch (groups[j]) {
	                        case 'dd':
	                        case 'd':
	                            date = parseIntFn(matchGroup, 10);
	                            if ((date < 1) || (date > 31)) {
	                                return keyword_null;
	                            }
	                            break;
	                        case 'MMMM':
	                            month = cultureInfo._getMonthIndex(matchGroup);
	                            if ((month < 0) || (month > 11)) {
	                                return keyword_null;
	                            }
	                            break;
	                        case 'MMM':
	                            month = cultureInfo._getAbbrMonthIndex(matchGroup);
	                            if ((month < 0) || (month > 11)) {
	                                return keyword_null;
	                            }
	                            break;
	                        case 'M':
	                        case 'MM':
	                        case '%M':
	                            month = parseIntFn(matchGroup, 10) - 1;
	                            if ((month < 0) || (month > 11)) {
	                                return keyword_null;
	                            }
	                            break;
	                        case 'e':
	                        case 'ee':
	                            year = expandYear(cultureInfo, parseIntFn(matchGroup, 10));
	                            if ((year < 0) || (year > 9999)) {
	                                return keyword_null;
	                            }
	                            break;
	                        case 'y':
	                        case 'yy':
	                        case 'yyy':
	                        case 'yyyy':
	                            year = parseIntFn(matchGroup, 10);
	                            if ((year < 0) || (year > 9999)) {
	                                return keyword_null;
	                            }
	                            break;
	                        case 'h':
	                        case 'hh':
	                        case 'H':
	                        case 'HH':
	                            hour = parseIntFn(matchGroup, 10);
	                           
	                           
	                            if (hour < 0) {
	                                return keyword_null;
	                            }
	                            break;
	                        case 'm':
	                        case 'mm':
	                            min = parseIntFn(matchGroup, 10);
	                            if ((min < 0) || (min > 59)) {
	                                return keyword_null;
	                            }
	                            break;
	                        case 's':
	                        case 'ss':
	                            sec = parseIntFn(matchGroup, 10);
	                            if ((sec < 0) || (sec > 59)) {
	                                return keyword_null;
	                            }
	                            break;
	                        case 'tt':
	                        case 't':
	                            var upperToken = matchGroup.toUpperCase();
	                            pmHour = (upperToken === dtf.pmDesignator.toUpperCase());
	                            if (!pmHour && (upperToken !== dtf.amDesignator.toUpperCase())) {
	                                return keyword_null;
	                            }
	                            break;
	                        case 'f':
	                        case '0':
	                            msec = parseIntFn(matchGroup, 10) * 100;
	                            if ((msec < 0) || (msec > 999)) {
	                                return keyword_null;
	                            }
	                            break;
	                        case 'ff':
	                        case '00':
	                            msec = parseIntFn(matchGroup, 10) * 10;
	                            if ((msec < 0) || (msec > 999)) {
	                                return keyword_null;
	                            }
	                            break;
	                        case 'fff':
	                        case '000':
	                            msec = parseIntFn(matchGroup, 10);
	                            if ((msec < 0) || (msec > 999)) {
	                                return keyword_null;
	                            }
	                            break;
	                        case 'dddd':
	                            weekDay = cultureInfo._getDayIndex(matchGroup);
	                            if ((weekDay < 0) || (weekDay > 6)) {
	                                return keyword_null;
	                            }
	                            break;
	                        case 'ddd':
	                            weekDay = cultureInfo._getAbbrDayIndex(matchGroup);
	                            if ((weekDay < 0) || (weekDay > 6)) {
	                                return keyword_null;
	                            }
	                            break;
	                        case 'zzz':
	                            var offsets = matchGroup.split(/:/);
	                            if (offsets.length !== 2) {
	                                return keyword_null;
	                            }
	                            hourOffset = parseIntFn(offsets[0], 10);
	                            if ((hourOffset < -12) || (hourOffset > 13)) {
	                                return keyword_null;
	                            }
	                            var minOffset = parseIntFn(offsets[1], 10);
	                            if ((minOffset < 0) || (minOffset > 59)) {
	                                return keyword_null;
	                            }
	                            tzMinOffset = (hourOffset * 60) + (StringHelper._startsWith(matchGroup, '-') ? -minOffset : minOffset);
	                            break;
	                        case 'z':
	                        case 'zz':
	                            hourOffset = parseIntFn(matchGroup, 10);
	                            if ((hourOffset < -12) || (hourOffset > 13)) {
	                                return keyword_null;
	                            }
	                            tzMinOffset = hourOffset * 60;
	                            break;
	                        case 'g':
	                        case 'gg':
	                        case 'ggg':
	                            var eraName = matchGroup;
	                            if (!eraName || !dtf.eras) {
	                                return keyword_null;
	                            }
	                            era = dtf.eras._parseEraPart(groups[j], eraName);
	                            if (era < 0) {
	                                return keyword_null;
	                            }
	                            break;
	                        default:
	                            break;
	                    }
	                }
	            }
	           
	            var timeOnly = /^(\d|\d\d):/.test(value);
	            var result = timeOnly ? new Date(1899, 11, 30) : new Date(), defaults, convert = dtf.Calendar.convert;
	            if (convert) {
	                defaults = convert.fromGregorian(result);
	            }
	            if (!convert) {
	                defaults = [result.getFullYear(), result.getMonth(), result.getDate()];
	            }
	            if (year === keyword_null) {
	                year = defaults[0];
	            } else if (year < 100) {
	                if (dtf.eras && era !== keyword_null) {
	                    year = dtf.eras._getYearFromEra(era || 0, year);
	                } else if (year >= 30) {
	                    year += 1900;
	                } else {
	                    year += 2000;
	                }
	            }
	            if (month === keyword_null) {
	                month = defaults[1];
	            }
	            if (date === keyword_null) {
	                date = defaults[2];
	            }
	            if (convert) {
	                result = convert.toGregorian(year, month, date);
	                if (result === keyword_null) {
	                    return keyword_null;
	                }
	            } else {
	                result.setFullYear(year, month, date);
	                if (result.getDate() !== date) {
	                    return keyword_null;
	                }
	                if ((weekDay !== keyword_null) && (result.getDay() !== weekDay)) {
	                    return keyword_null;
	                }
	            }
	            if (pmHour && (hour < 12)) {
	                hour += 12;
	            }
	            result.setHours(hour, min, sec, msec);
	            if (tzMinOffset !== keyword_null) {
	                var adjustedMin = result.getMinutes() - (tzMinOffset + result.getTimezoneOffset());
	                result.setHours(result.getHours() + adjustedMin / 60, adjustedMin % 60);
	            }
	           
	           
	            return result;
	        }
	        
	        function _getTimezoneOffset(date) {
	           
	           
	           
	           
	           
	           
	            var offset = date.getTimezoneOffset();
	            if (offset === -485) {
	                offset = -485 - 43 / 60;
	            }
	            return offset;
	        }
	        return {
	            _customCultureFormat: function (date, format, cultureInfo) {
	                if (!cultureInfo) {
	                    cultureInfo = cM._getCultureInfo();
	                }
	                return toFormattedString(date, format, cultureInfo);
	            },
	            _localeFormat: function (date, format, cultureInfo) {
	                return toFormattedString(date, format, cultureInfo || cM._getCultureInfo());
	            },
	            _parseLocale: function (value, formats, cultureInfo) {
	                var args, result;
	                if (!formats && !cultureInfo) {
	                    result = dateCache[value];
	                    if (result !== undefined) {
	                        return result ? new Date(result) : result;
	                    }
	                }
	                if (formats) {
	                    args = [value, formats];
	                } else {
	                    args = [value];
	                }
	                result = parseDate(value, cultureInfo || cM._getCultureInfo(), args);
	                if (!formats && !cultureInfo) {
	                    dateCache[value] = result;
	                }
	                return result ? new Date(result) : result;
	            },
	            _parseInvariant: function (value, formats) {
	                return parseDate(value, cM._getCultureInfo('invariant'), [value, formats]);
	            },
	            _parseExact: parseDateExact,
	            _fromOADate: function (oadate) {
	               
	               
	               
	               
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
	            },
	            _fromOADateString: function (oadateString) {
	                if (oadateString.substr(0, 8) === '/OADate(') {
	                    var oadate = parseFloat(oadateString.substr(8, oadateString.length - 10));// 10 for '/OADate(' length and ')/' length
	                    return this._fromOADate(oadate);
	                }
	            },
	            _toOADateString: function (date) {
	                return '/OADate(' + this._toOADate(date) + ')/';
	            },
	            _toOADate: function (date) {
	                if (isNullOrUndefined(date)) {
	                    return 0;
	                }
	                if (typeof date === 'number') {
	                    date = new Date(date);
	                }
	               
	               
	                var timezoneOffset = _getTimezoneOffset(date);
	                return (date.getTime() * 1440 + 25569 * 86400000 * 1440 - timezoneOffset * 86400000) / (86400000 * 1440);
	            },
	            _DT: function (value) {
	                var dateValue = keyword_null;
	                var sucess = TRUE;
	                if (isNullOrUndefined(value)) {
	                    dateValue = this._fromOADate(0);
	                } else if (value instanceof Date) {
	                    dateValue = new Date(value.valueOf());
	                } else if (typeof value === 'string') {
	                    var dateTime = this._parseLocale(value);
	                    if (!dateTime) {
	                        if (!isNaN(value)) {
	                            dateTime = DateTimeHelper._fromOADate(parseFloat(value));
	                            if (!dateTime) {
	                                sucess = FALSE;
	                            }
	                        } else if (this._isInvalidDateString(value)) {
	                            sucess = FALSE;
	                        } else {
	                            dateTime = new Date(value);
	                            if (isNaN(dateTime.valueOf())) {
	                                sucess = FALSE;
	                            }
	                            var reg = /^[-+=\s]*(\d+)\W+(\d+)\W+(\d+)$/;
	                            var results = reg.exec(value.replace(/ |\n/g, '').trim());
	                            if (results && results.length === 4) { 
	                                if (results.indexOf(dateTime.getFullYear().toString()) === -1 ||
	                                    results.indexOf((dateTime.getMonth() + 1).toString()) === -1 ||
	                                    results.indexOf(dateTime.getDate().toString()) === -1) {
	                                    sucess = FALSE;
	                                }
	                            }
	                        }
	                    }
	                    dateValue = dateTime;
	                } else if (typeof value === 'number') {
	                    dateValue = this._fromOADate(value);
	                } else {
	                    sucess = FALSE;
	                }
	                if (sucess) {
	                    return dateValue;
	                }
	                throw sR().Exp_InvalidCast;
	            },
	            _isInvalidDateString: function (value) {
	               
	               
	               
	               
	               
	               
	               
	                var ci = cM._getCultureInfo().DateTimeFormat;
	                var isInvalid = function (val, dict) {
	                    var repeatCount = 0;
	                    dict.forEach(function (con) {
	                        if (con && val.indexOf(con) > -1) {
	                            repeatCount++;
	                        }
	                    });
	                    return repeatCount > 1;
	                };
	                return isInvalid(value, ci.monthNames) ||
	                    isInvalid(value, ci.abbreviatedMonthNames) ||
	                    isInvalid(value, ci.dayNames) ||
	                    isInvalid(value, ci.abbreviatedDayNames);
	            },
	            _isDate: function (value) {
	               
	                return value && (value.constructor === Date || value.getUTCDate && value.setFullYear);
	            }
	        };
	    })();
	
	    module.exports = DateTimeHelper;
	
	}());

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	(function () {
	    'use strict';
	
	    var keyword_null = null, keyword_undefined = void 0;
	
	    var ArrayHelper = (function () {
	        function ArrayHelper() {
	        }
	
	        ArrayHelper._insert = function (array, index, item) {
	            array.splice(index, 0, item);
	        };
	        ArrayHelper._add = function (array, item) {
	            array.push(item);
	        };
	        ArrayHelper._contains = function (array, item) {
	            return array.indexOf(item) > -1;
	        };
	        ArrayHelper._remove = function (array, item) {
	            var index = array.indexOf(item);
	            if (index > -1) {
	                array.splice(index, 1);
	            }
	        };
	        ArrayHelper._removeByIndex = function (array, index) {
	            return array.slice(0, index).concat(array.slice(index + 1));
	        };
	        ArrayHelper._indexOf = function (array, item, start) {
	            return array.indexOf(item, start);
	        };
	        ArrayHelper._clear = function (array, index, count) {
	            if (index < 0) {
	                return;
	            }
	            for(var i = 0; i < count && index + i < array.length; i++) {
	                array[index + i] = keyword_null;
	            }
	        };
	        ArrayHelper._nextNonEmptyIndex = function (array, index) {
	            if (index < 0) {
	                index = -1;
	            }
	            var n = index + 1;
	            for (var i = n; i < array.length; i++) {
	                if (array[i] !== keyword_undefined && array[i] !== keyword_null) {
	                    return i;
	                }
	            }
	            return -1;
	        };
	        ArrayHelper._getLength = function (array) {
	            return array && array.length;
	        };
	
	        function cloneArray(newArray, source) {
	            for (var i in source) {
	                if (source.hasOwnProperty(i)) {
	                    var item = source[i];
	                    if (Array.isArray(item)) {
	                        newArray[i] = [];
	                        cloneArray(newArray[i], source[i]);
	                    } else if (typeof item === "object") {
	                        newArray[i] = {};
	                        cloneArray(newArray[i], source[i]);
	                    } else {
	                        newArray[i] = source[i];
	                    }
	                }
	            }
	        }
	
	        ArrayHelper._clone = function (array) {
	            var result = [];
	            cloneArray(result, array);
	            return result;
	        };
	        return ArrayHelper;
	    })();
	
	    module.exports = ArrayHelper;
	
	}());

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(2);
	    var _toHexString = __webpack_require__(5)._toHexString;
	
	    var Math_min = Math.min, Math_max = Math.max, Math_abs = Math.abs;
	    var parseIntFn = parseInt;
	
	    var ColorHelper = (function () {
	        function ColorHelper() {
	
	        }
	
	        ColorHelper._toString = function (color) {
	           
	            var a = color.a;
	            var r = color.r;
	            var g = color.g;
	            var b = color.b;
	            if (arguments.length === 3) {
	                a = 255;
	                r = arguments[0];
	                g = arguments[1];
	                b = arguments[2];
	            }
	            if (arguments.length === 4) {
	                a = arguments[0];
	                r = arguments[1];
	                g = arguments[2];
	                b = arguments[3];
	            }
	            if (a === 255) {
	                return '#' + _toHexString(r, true, 2) + _toHexString(g, true, 2) + _toHexString(b, true, 2);
	            }
	            return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
	        };
	
	        ColorHelper._equal = function (color1, color2) {
	            return color1.a === color2.a && color1.r === color2.r && color1.g === color2.g && color1.b === color2.b;
	        };
	
	        ColorHelper._getBrightness = function (color) {
	            return ((color.r * 299) + (color.g * 587) + (color.b * 114)) / 1000;
	        };
	        ColorHelper._hueToRGB = function (n1, n2, hue) {
	            if (hue < 0) {
	                hue += 240;
	            }
	            if (hue > 240) {
	                hue -= 240;
	            }
	            if (hue < 40) {
	                return (n1 + ((((n2 - n1) * hue) + 20) / 40));
	            }
	            if (hue < 120) {
	                return n2;
	            }
	            if (hue < 160) {
	                return (n1 + ((((n2 - n1) * (160 - hue)) + 20) / 40));
	            }
	            return n1;
	        };
	        function saturate(n1, n2, hue) {
	            return Math_min(parseIntFn(((ColorHelper._hueToRGB(n1, n2, hue) * 0xff) + 120) / 240), 255); 
	        }
	
	        ColorHelper._fromHLS = function (hue, luminosity, saturation) {
	            var r, g, b;
	
	            if (saturation === 0) {
	                r = g = b = parseIntFn(((luminosity * 0xff) / 240), 10);
	            } else {
	                var n1, n2;
	                n2 = (luminosity <= 120)
	                    ? parseIntFn(((luminosity * (240 + saturation)) + 120) / 240)
	                    : (luminosity + saturation) - parseIntFn(((luminosity * saturation) + 120) / 240);
	
	                n1 = (2 * luminosity) - n2;
	
	                r = saturate(n1, n2, hue + 80);
	                g = saturate(n1, n2, hue);
	                b = saturate(n1, n2, hue - 80);
	            }
	            return {a: 0xff, r: r, g: g, b: b};
	
	        };
	        ColorHelper._isTwoColorSimilar = function (color1, color2) {
	           
	            var r = 255 - Math_abs(color1.r - color2.r);
	            var g = 255 - Math_abs(color1.g - color2.g);
	            var b = 255 - Math_abs(color1.b - color2.b);
	            var a = Math_abs(color1.a - color2.a);
	           
	            r /= 255;
	            g /= 255;
	            b /= 255;
	           
	            var judge = (r + g + b) / 3;
	            return !!(judge >= 0.9 && a <= 0.05);
	
	        };
	        ColorHelper._invertColor = function (color) {
	            var r = color.r ^ 255;
	            var g = color.g ^ 255;
	            var b = color.b ^ 255;
	            return ColorHelper._toString(color.a, r, g, b);
	        };
	        function stringToARGB(value) {
	            var canvasContext = ColorHelper._ctx;
	            if (!canvasContext) {
	                var c = document.createElement('canvas');
	                if (c && c.getContext) {
	                    canvasContext = ColorHelper._ctx = c.getContext('2d');
	                }
	            }
	            if (!canvasContext) {
	                return value;
	            }
	            canvasContext.clearRect(1, 1, 1, 1);
	            canvasContext.fillStyle = value;
	            canvasContext.fillRect(1, 1, 1, 1);
	
	            var imgData = canvasContext.getImageData(1, 1, 1, 1);
	            if (imgData) {
	                return imgData.data;
	            }
	            return null;
	        }
	
	        ColorHelper._fromString = function (value) {
	            if (value instanceof ColorHelper) {
	                return value;
	            }
	            var a = 0, r = 0, g = 0, b = 0;
	            if (value) {
	                var val = stringToARGB(value);
	                if (val) {
	                    r = val[0];
	                    g = val[1];
	                    b = val[2];
	                    a = val[3];
	                }
	            }
	            return {a: a, r: r, g: g, b: b};
	        };
	        ColorHelper._applyTint = function (color, tint) {
	            if (tint === 0) {
	                return color;
	            }
	            var hls = new HLSColor(color); 
	            var lumDiff = parseIntFn((tint > 0 ? ((240 - hls._luminosity) * tint) : (hls._luminosity * tint)), 10);
	            return ColorHelper._fromHLS(hls._hue, hls._luminosity + lumDiff, hls._saturation);
	        };
	        ColorHelper._getLighterColor = function (colorString, percentLighter) {
	            var color = ColorHelper._fromString(colorString);
	            var hls = new HLSColor(color);
	            var lighterColor = hls._getLighterColor(percentLighter);
	            return ColorHelper._toString(lighterColor);
	        };
	
	        return ColorHelper;
	    })();
	
	    var HLSColor = (function () {
	        function HLSColor(rgbColor) {
	            var self = this;
	            var r = rgbColor.r, g = rgbColor.g, b = rgbColor.b;
	            var maxUnit = Math_max(Math_max(r, g), b);
	            var minUnit = Math_min(Math_min(r, g), b);
	            var sum = maxUnit + minUnit;
	            self._luminosity = parseIntFn((((sum * 240) + 0xff) / 510), 10);
	            var diff = maxUnit - minUnit;
	            if (diff === 0) {
	                self._saturation = 0;
	                self._hue = 160;
	            } else {
	                if (self._luminosity <= 120) {
	                    self._saturation = parseIntFn((((diff * 240) + (sum / 2)) / sum), 10);
	                } else {
	                    self._saturation = parseIntFn((((diff * 240) + ((510 - sum) / 2)) / (510 - sum)), 10);
	                }
	                var partR = (((maxUnit - r) * 40) + (diff / 2)) / diff;
	                var partG = (((maxUnit - g) * 40) + (diff / 2)) / diff;
	                var partB = (((maxUnit - b) * 40) + (diff / 2)) / diff;
	                if (r === maxUnit) {
	                    self._hue = parseIntFn((partB - partG), 10);
	                } else if (g === maxUnit) {
	                    self._hue = parseIntFn(((80 + partR) - partB), 10);
	                } else {
	                    self._hue = parseIntFn(((160 + partG) - partR), 10);
	                }
	                if (self._hue < 0) {
	                    self._hue += 240;
	                }
	                if (self._hue > 240) {
	                    self._hue -= 240;
	                }
	            }
	        }
	
	        HLSColor.prototype = {
	            constructor: HLSColor,
	           
	           
	           
	            _getLighterColor: function (percentLighter) {
	                var self = this;
	                var luminosity = self._luminosity;
	                var newLuma = self._newLuma(self._luminosity, 500, true);
	                return ColorHelper._fromHLS(self._hue, luminosity + ((newLuma - luminosity) * percentLighter), self._saturation);
	            },
	           
	           
	           
	           
	           
	            _newLuma: function (luminosity, n, scale) {
	                if (n === 0) {
	                    return luminosity;
	                }
	                if (scale) {
	                    if (n > 0) {
	                        return (((luminosity * (0x3e8 - n)) + (0xf1 * n)) / 0x3e8);
	                    }
	                    return ((luminosity * (n + 0x3e8)) / 0x3e8);
	                }
	                luminosity += ((n * 240) / 0x3e8);
	                if (luminosity < 0) {
	                    luminosity = 0;
	                }
	                if (luminosity > 240) {
	                    luminosity = 240;
	                }
	                return luminosity;
	            }
	        };
	        return HLSColor;
	    })();
	
	
	    Common._ColorHelper = ColorHelper;
	
	    module.exports = Common;
	
	}());

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    var isNaNFunc = isNaN;
	    var common = {};
	    var ROW_COUNT = 'rowCount', COLUMN_COUNT = 'colCount';
	    function getNumber(value) {
	        return value;
	    }
	    function _getTrendOrGrowthData(isTrend, knownY, knownX, newX, constant, convertFunc, concreteArray, errorNotAvailable, errorValue, logFunc, expFunc) { 
	        var i, j, k, x, y, mm, nn, d, result, s, val, L, temp, found, oneMoreKnownXColCount, twoMoreKnownXColCount,
	            knownX_rowCount = knownX[ROW_COUNT], knownX_colCount = knownX[COLUMN_COUNT],
	            knownY_rowCount = knownY[ROW_COUNT], knownY_colCount = knownY[COLUMN_COUNT],
	            newX_rowCount = newX[ROW_COUNT], newX_colCount = newX[COLUMN_COUNT],
	            isOneKnownXColCount = knownX_colCount === 1, isOneKnownYColCount = knownY_colCount === 1;
	        if (knownY_rowCount === knownX_rowCount && knownY_colCount === knownX_colCount) {
	            var sumx = 0.0, sumx2 = 0.0, sumy = 0.0, sumxy = 0.0;
	            nn = knownX_rowCount * knownX_colCount;
	            for (i = 0; i < knownX_rowCount; i++) {
	                for (j = 0; j < knownX_colCount; j++) {
	                    x = convertFunc(knownX[i][j]);
	                    y = convertFunc(knownY[i][j]);
	                    if (isTrend && (isNaNFunc(x) || isNaNFunc(y))) {
	                        return errorValue;
	                    }
	                    y = logFunc(y);
	                    sumx += x;
	                    sumx2 += x * x;
	                    sumy += y;
	                    sumxy += x * y;
	                }
	            }
	            var sumMM = nn * sumxy - sumx * sumy;
	            mm = constant ? sumMM / (nn * sumx2 - sumx * sumx) : sumxy / sumx2;
	            d = constant ? (sumy * sumx2 - sumx * sumxy) / (nn * sumx2 - sumx * sumx) : 0.0;
	            result = [];
	            for (i = 0; i < newX_rowCount; i++) {
	                result[i] = [];
	                for (j = 0; j < newX_colCount; j++) {
	                    x = convertFunc(newX[i][j]);
	                    if (isTrend && isNaNFunc(x)) {
	                        return errorValue;
	                    }
	                    result[i][j] = sumMM === 0 ? knownY[0][0] : expFunc(mm * x + d);
	                }
	            }
	            return concreteArray ? new concreteArray(result) : result;
	        } else if ((isOneKnownYColCount && knownY_rowCount === knownX_rowCount) || (knownY_rowCount === 1 && knownY_colCount === knownX_colCount)) {
	            x = [];
	            y = [];
	            oneMoreKnownXColCount = knownX_colCount + 1;
	            twoMoreKnownXColCount = knownX_colCount + 2;
	            for (i = 0; i < knownX_rowCount; i++) {
	                val = isOneKnownYColCount ? knownY[i][0] : knownY[0][i];
	                d = convertFunc(val);
	                if (isTrend && isNaNFunc(d)) {
	                    return errorValue;
	                }
	                y[i] = isOneKnownXColCount ? logFunc(d) : d;
	            }
	            for (i = 0; i < knownX_rowCount; i++) {
	                x[i] = [];
	                for (j = 0; j < knownX_colCount; j++) {
	                    d = convertFunc(knownX[i][j]);
	                    if (isTrend && isNaNFunc(d)) {
	                        return errorValue;
	                    }
	                    x[i][j] = d;
	                }
	            }
	            var q = [];
	            for (mm = 0; mm < oneMoreKnownXColCount; mm++) {
	                q[mm] = [];
	                for (nn = 0; nn < twoMoreKnownXColCount; nn++) {
	                    q[mm][nn] = 0;
	                }
	            }
	            for (k = 0; k < knownX_rowCount; k++) {
	                q[0][oneMoreKnownXColCount] += y[k];
	                for (i = 0; i < knownX_colCount; i++) {
	                    val = i + 1;
	                    q[0][val] += x[k][i];
	                    q[val][0] = q[0][val];
	                    q[val][oneMoreKnownXColCount] += x[k][i] * y[k];
	                    for (j = i; j < knownX_colCount; j++) {
	                        temp = j + 1;
	                        q[temp][val] += x[k][i] * x[k][j];
	                        q[val][temp] = q[temp][val];
	                    }
	                }
	            }
	            q[0][0] = knownX_rowCount;
	            var start = constant ? 0 : 1;
	            for (s = start; s < oneMoreKnownXColCount; s++) {
	                if (isTrend) {
	                    if (q[s][s] === 0.0) {
	                        found = false;
	                        for (j = s + 1; !found && j < oneMoreKnownXColCount; j++) {
	                            if (q[j][s] !== 0.0) {
	                                for (k = 0; k < twoMoreKnownXColCount; k++) {
	                                    temp = q[s][k];
	                                    q[s][k] = q[j][k];
	                                    q[j][k] = temp;
	                                }
	                                found = true;
	                            }
	                        }
	                        if (!found) {
	                            return errorNotAvailable;
	                        }
	                    }
	                } else {
	                    i = s;
	                    while (i < oneMoreKnownXColCount && q[i][s] === 0.0) {
	                        i++;
	                    }
	                    if (i >= oneMoreKnownXColCount) {
	                        return errorNotAvailable;
	                    }
	                    for (L = start; L < twoMoreKnownXColCount; L++) {
	                        val = q[s][L];
	                        q[s][L] = q[i][L];
	                        q[i][L] = val;
	                    }
	                }
	                val = 1.0 / q[s][s];
	                for (L = start; L < twoMoreKnownXColCount; L++) {
	                    q[s][L] *= val;
	                }
	                for (i = start; i < oneMoreKnownXColCount; i++) {
	                    if (i !== s) {
	                        val = -q[i][s];
	                        for (L = 0; L < twoMoreKnownXColCount; L++) {
	                            q[i][L] += val * q[s][L];
	                        }
	                    }
	                }
	                if (!constant) {
	                    q[0][oneMoreKnownXColCount] = 0.0;
	                }
	            }
	            result = [];
	            if (!isOneKnownYColCount) {
	                result[0] = [];
	            }
	            for (i = 0; i < newX_rowCount; i++) {
	                if (isOneKnownYColCount) {
	                    result[i] = [];
	                }
	                val = q[0][oneMoreKnownXColCount];
	                for (j = 0; j < knownX_colCount; j++) {
	                    d = convertFunc(isOneKnownYColCount ? newX[i][j] : newX[j][i]);
	                    if (isTrend && isNaNFunc(d)) {
	                        return errorValue;
	                    }
	                    val += q[j + 1][oneMoreKnownXColCount] * d;
	                }
	                if (isOneKnownYColCount) {
	                    result[i][0] = expFunc(val);
	                } else {
	                    result[0][i] = expFunc(val);
	                }
	            }
	            return concreteArray ? new concreteArray(result) : result;
	        }
	        return errorNotAvailable;
	    }
	    function _trend(knownY, knownX, newX, constant, convertFunc, concreteArray, errorValue, errorNotAvailable) { 
	        return _getTrendOrGrowthData(true, knownY, knownX, newX, constant, convertFunc, concreteArray, errorNotAvailable, errorValue, getNumber, getNumber);
	    }
	    function _growth(knownY, knownX, newX, constant, concreteArray, errorNumber, errorNotAvailable) {
	        var i, j;
	        for (i = 0; i < knownY[ROW_COUNT]; i++) {
	            for (j = 0; j < knownY[COLUMN_COUNT]; j++) {
	                if (knownY[i][j] <= 0.0) {
	                    return errorNumber;
	                }
	            }
	        }
	        return _getTrendOrGrowthData(false, knownY, knownX, newX, constant, getNumber, concreteArray, errorNotAvailable, null, Math.log, Math.exp);
	    }
	    
	    common._trend = _trend;
	    common._growth = _growth;
	    
	    module.exports = common;
	
	}());

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_InvalidDateFormat: 'Invalid date format pattern',
	        Exp_InvalidExponentFormat: 'invalid exponent format',
	        Exp_InvalidSemicolons: 'invalid format: too many semicolons',
	        Exp_InvalidNumberGroupSize: 'NumberGroupSize must be between 1 and 9.',
	        Exp_BadFormatSpecifier: 'Bad Format Specifier',
	        Exp_InvalidNumberFormat: 'Invalid number format pattern',
	        Exp_InvalidCast: 'InvalidCastException',
	        Exp_Separator: 'numberDecimalSeparator, listSeparator and arrayListSeparator should be different in cluture info.'
	    };
	
	}());

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var exports = {};
	    _CopyProperty(exports, __webpack_require__(14));
	    _CopyProperty(exports, __webpack_require__(15));
	    module.exports = exports;
	    
	    function _CopyProperty(to, from) {
	        for (var prop in from) {
	            if (from.hasOwnProperty(prop)) {
	                to[prop] = from[prop];
	            }
	        }
	    }
	
	}());

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    var exports = {};
	   
	    
	    exports.Key = {
	        
	        left: 37,
	        
	        right: 39,
	        
	        up: 38,
	        
	        down: 40,
	        
	        tab: 9,
	        
	        enter: 13,
	        
	        shift: 16,
	        
	        ctrl: 17,
	        
	        space: 32,
	        
	        altkey: 18,
	        
	        home: 36,
	        
	        end: 35,
	        
	        pup: 33,
	        
	        pdn: 34,
	        
	        backspace: 8,
	        
	        del: 46,
	        
	        esc: 27,
	        
	        a: 65,
	        
	        c: 67,
	        
	        v: 86,
	        
	        x: 88,
	        
	        z: 90,
	        
	        y: 89
	    };
	    
	    function Command(owner, cmdDef, name) {
	        var self = this;
	        self._owner = owner;
	        self._cmdDef = cmdDef;
	        self._name = name;
	    
	        Object.defineProperty(self, 'shortcutKey', {
	            get: function () {
	                return self._shortcutKey;
	            },
	            set: function (value) {
	                var key = self._shortcutKey;
	                if (key !== value) {
	                    var shortcutKeys = self._owner._shortcutKeys;
	                    var actions = shortcutKeys[key];
	                    if (actions) {
	                        var n = actions.indexOf(self);
	                        if (n >= 0) {
	                            actions.splice(n, 1);
	                        }
	                    }
	    
	                    self._shortcutKey = value;
	    
	                    if (value) {
	                        actions = shortcutKeys[value];
	                        if (!actions) {
	                            shortcutKeys[value] = actions = [];
	                        }
	                        actions.splice(0, 0, self);
	                    }
	                }
	            }
	        });
	    }
	    
	    Command.prototype = {
	        canUndo: function () {
	            var cmd = this._cmdDef;
	            return cmd.canUndo;
	        },
	       
	        execute: function (context, options, actionType) {
	            var self = this, success = true;
	            try {
	               
	                var fn = self._cmdDef.execute || self._cmdDef;
	                var ret = fn(context, options, actionType === 1 );
	                success = (ret !== false);
	            } catch (e) {
	                success = false;
	            }
	    
	            if (options && success) {
	                self._owner._commandExecuted({command: options, result: ret, _actionType: actionType});
	            }
	    
	            return ret;
	        }
	    };
	    
	   
	   
	   
	   
	   
	    
	    function CommandManager(context) {
	        var self = this;
	        self._context = context;
	        self._listeners = {};
	        self._shortcutKeys = {};
	    }
	    
	    CommandManager.prototype = {
	       
	        
	        register: function (name, command, key, ctrl, shift, alt, meta) {
	            var self = this;
	            var cmd = new Command(self, command, name);
	            self[name] = cmd;
	    
	            if (key) {
	                cmd.shortcutKey = self.getShortcutKey(key, ctrl, shift, alt, meta);
	            }
	        },
	       
	        getCommand: function (name) {
	            return this[name];
	        },
	       
	        
	        execute: function (commandOptions) {
	            var cmd = this[commandOptions.cmd];
	            if (cmd) {
	                return cmd.execute(this._context, commandOptions, 0 );
	            }
	        },
	       
	        
	        setShortcutKey: function (commandName, key, ctrl, shift, alt, meta) {
	            var self = this;
	            if (commandName) {
	                var cmd = self[commandName];
	                if (cmd) {
	                    cmd.shortcutKey = self.getShortcutKey(key, ctrl, shift, alt, meta);
	                }
	            } else {
	                var shortcutKey = self.getShortcutKey(key, ctrl, shift, alt, meta);
	                var cmds = self.getCommands(shortcutKey);
	                if (cmds) {
	                    for (var i = cmds.length - 1; i >= 0; i--) {
	                        cmds[i].shortcutKey = void 0;
	                    }
	                }
	            }
	        },
	        getShortcutKey: function (key, ctrl, shift, alt, meta) {
	            if (!key) {
	                return undefined;
	            }
	            var t = ('A'.charCodeAt(0) <= key && key <= 'Z'.charCodeAt(0)) ? String.fromCharCode(key) : exports.Key[key];
	            if (!t) {
	                t = key;
	            }
	            return '' + t + (ctrl ? '+ctrl' : '') + (shift ? '+shift' : '') + (alt ? '+alt' : '') + (meta ? '+window' : '');
	        },
	        getCommands: function (shortcutKey) {
	            return this._shortcutKeys[shortcutKey];
	        },
	       
	       
	       
	       
	       
	        addListener: function (name, action) {
	            this._listeners[name] = action;
	        },
	       
	       
	       
	       
	        removeListener: function (name) {
	            delete this._listeners[name];
	        },
	        _commandExecuted: function (arg) {
	            var listeners = this._listeners;
	            for (var t in listeners) {
	                if (listeners.hasOwnProperty(t)) {
	                    listeners[t](arg);
	                }
	            }
	        }
	    };
	    exports.CommandManager = CommandManager;
	    module.exports = exports;
	
	}());

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	(function () {
	    'use strict';
	
	   
	   
	   
	   
	   
	
	   
	    
	    function UndoManager(context, maxLength, allowUndo) {
	        var self = this;
	        self._context = context;
	        if (maxLength < 0) {
	            maxLength = 2147483647;
	        }
	        self._maxLength = maxLength;
	        self._allowUndo = allowUndo;
	
	        self._undoStack = [];
	        self._redoStack = [];
	    }
	
	    UndoManager.prototype = {
	        _addCommand: function (command, actionType) {
	            var self = this;
	            if (!command) {
	                return;
	            }
	            if (actionType === 1 ) {
	                self._redoStack.push(command);
	            } else {
	                var maxLength = self._maxLength, undoStackLength = self._undoStack.length;
	                if (maxLength > 0 && undoStackLength >= maxLength) {
	                    for (var i = 0; i < undoStackLength - maxLength + 1; i++) {
	                        self._undoStack.shift();
	                    }
	                }
	                self._undoStack.push(command);
	                if (actionType === 0 ) {
	                    self._redoStack = [];
	                }
	            }
	        },
	       
	        
	        canUndo: function () {
	            return this._undoStack.length > 0;
	        },
	       
	        
	        undo: function () {
	            var self = this, undoStack = self._undoStack;
	            var result = true;
	            if (self._allowUndo && self.canUndo()) {
	                var undoAction = undoStack[undoStack.length - 1];
	                try {
	                    var cmd = self._context.commandManager()[undoAction.cmd];
	                    if (cmd) {
	                        undoAction._fromUndoManager = true;
	                        result = cmd.execute(self._context, undoAction, 1 );
	                    }
	                } catch (e) {
	                    result = false;
	                }
	                delete undoAction._fromUndoManager;
	                if (result !== false) {
	                    undoStack.pop();
	                    self._redoStack.push(undoAction);
	                }
	            }
	            return result;
	        },
	       
	        
	        canRedo: function () {
	            return this._redoStack.length > 0;
	        },
	       
	        
	        redo: function () {
	            var self = this, redoStack = self._redoStack;
	            var result = true;
	            if (self._allowUndo && self.canRedo()) {
	                var redoAction = redoStack[redoStack.length - 1];
	                try {
	                    var cmd = self._context.commandManager()[redoAction.cmd];
	                    if (cmd) {
	                        var backupChanges = redoAction._changes;
	                        redoAction._fromUndoManager = true;
	                        result = cmd.execute(self._context, redoAction, 2 );
	                        if (backupChanges && redoAction._changes && !redoAction._changes.calc) {
	                            redoAction._changes = backupChanges;
	                        }
	                    }
	                } catch (e) {
	                    result = false;
	                }
	                delete redoAction._fromUndoManager;
	                if (result !== false) {
	                    redoStack.pop();
	                    self._undoStack.push(redoAction);
	                }
	            }
	            return result;
	        },
	       
	        
	        clear: function () {
	            this._undoStack = [];
	            this._redoStack = [];
	        }
	    };
	    module.exports.UndoManager = UndoManager;
	
	}());

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var exports = {};
	    _CopyProperty(exports, __webpack_require__(17));
	    exports.SR = {};
	    exports.SR['en'] = __webpack_require__(18);
	    module.exports = exports;
	    
	    function _CopyProperty(to, from) {
	        for (var prop in from) {
	            if (from.hasOwnProperty(prop)) {
	                to[prop] = from[prop];
	            }
	        }
	    }
	
	}());

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var keyword_null = null, keyword_undefined = void 0, Math_abs = Math.abs;
	    var Plugins = {};
	    var commonNS = __webpack_require__(1);
	    var stringHelper = commonNS._StringHelper;
	    var dateTimeHelper = commonNS._DateTimeHelper;
	    var Types = commonNS._Types;
	    var isType = Types._isType;
	    var isArray = Types._isArray;
	    var numberHelper = commonNS._NumberHelper;
	    var generalNumberFormatDigit = numberHelper._generalNumberInt + '.' + numberHelper._generalNumberDec;
	    var formatObjectToSrting = numberHelper._formatObjectToSrting;
	    var customCultureFormat = numberHelper._customCultureFormat;
	    var fixNumber = numberHelper._fixNumber;
	    var isNullOrUndefined = Types._isNullOrUndefined;
	    var cM = commonNS.CultureManager;
	    var DBNum1Ten = '\u4e00\u5341', DBNum1ExcelTen = '\u5341';
	    var SR = function () {
	        return commonNS._getResource(Plugins.SR)();
	    };
	    var getCultureInfo = function (cultureName) {
	        return cM._getCultureInfo(cultureName);
	    };
	    var getDateTimeFormat = function (cultureName) {
	        return getCultureInfo(cultureName).DateTimeFormat;
	    };
	    var getNumberFormat = function (cultureName) {
	        return getCultureInfo(cultureName).NumberFormat;
	    };
	
	    var toLowerCase = function (s) {
	        return s && s.toLowerCase();
	    };
	    var throwFormatEx = function () {
	        throw new Error(SR().Exp_FormatIllegal);
	    };
	
	    var stringEx = {
	        _Empty: '',
	        _format: function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            if (arguments.length === 0) {
	                return keyword_null;
	            }
	            var str = args[0];
	            for (var i = 1; i < arguments.length; i++) {
	                var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
	                str = str.replace(re, arguments[i]);
	            }
	            return str;
	        },
	        _isNullOrEmpty: function (obj) {
	            return !obj || obj === stringEx._Empty;
	        }
	    };
	
	    var CharHelper = {
	        _isDigit: function (c) {
	            var cc = c.charCodeAt(0);
	            return cc >= 0x30 && cc <= 0x39;
	        },
	        _isWhiteSpace: function (c) {
	            var cc = c.charCodeAt(0);
	            return (cc >= 0x0009 && cc <= 0x000D) || (cc === 0x0020) || (cc === 0x0085) || (cc === 0x00A0);
	        }
	    };
	
	    var LocaleIDFormatPart = (function () {
	        function LocaleIDFormatPart(token, original) {
	            appendFormatBasePro.call(this, original);
	            var self = this;
	            self._content = token;
	            var contentTemp = self._content;
	            var startWithDollar = isEquals(contentTemp[0], '$', false);
	            var minusIndex = contentTemp.indexOf('-');
	            if (startWithDollar && minusIndex > -1) {
	                self._currencySymbol = substr(contentTemp, 1, minusIndex - 1);
	                contentTemp = stringHelper._remove(contentTemp, 0, minusIndex + 1);
	                if (contentTemp.length > 0) {
	                    self._locateID = parseInt(contentTemp, 16);
	                }
	            } else {
	                throw new Error(SR().Exp_TokenIllegal);
	            }
	        }
	
	        LocaleIDFormatPart.Name = 'LocaleIDFormatPart';
	
	        LocaleIDFormatPart.prototype = {
	            cultureInfo: function () {
	                var self = this;
	                if (!self._cultureInfo) {
	                    self._cultureInfo = getCultureInfo(self._locateID);
	                    if (self._currencySymbol && self._currencySymbol !== stringEx._Empty && !self._cultureInfo.NumberFormat.isReadOnly) {
	                        self._cultureInfo.NumberFormat.currencySymbol = self._currencySymbol;
	                    }
	                }
	                return self._cultureInfo;
	            },
	            currencySymbol: function () {
	                if (this._currencySymbol) {
	                    return stringHelper._replace(this._currencySymbol, '\\.', '\".\"');
	                }
	                return stringEx._Empty;
	            },
	            allowScience: function () {
	                if (this._cultureInfo) {
	                    return (!(this._cultureInfo.name().indexOf('ja') === 0) && !(this._cultureInfo.name().indexOf('zh') === 0));
	                }
	            },
	            toString: function () {
	                if (this._content) {
	                    return addSquareBracket(this._content);
	                }
	                return stringEx._Empty;
	            }
	        };
	
	        return LocaleIDFormatPart;
	    })();
	
	    var FormatterBase = (function () {
	       
	        
	        function FormatterBase(format, cultureName) {
	            this.formatCached = format;
	            this.cultureName = cultureName;
	           
	            
	            this.typeName = '';
	        }
	
	        FormatterBase.prototype = {
	           
	            
	            format: function (obj, conditionalForeColor) { 
	                return keyword_null;
	            },
	           
	            
	            parse: function (text) {  
	                return keyword_null;
	            },
	            formatString: function () {
	                return this.formatCached;
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
	        return FormatterBase;
	    })();
	
	    var dateTimeTokens = {
	        _yearTwoDigit: 'yy',
	        _yearSingleDigit: 'y',
	        _yearFourDigit: 'yyyy',
	        _monthSingleDigit: 'm',
	        _monthTwoDigit: 'mm',
	        _monthAbbreviation: 'mmm',
	        _monthUnabbreviated: 'mmmm',
	        _monthJD: 'mmmmm',
	        _daySingleDigit: 'd',
	        _dayTwoDigit: 'dd',
	        _dayWeekDayAbbreviation: 'aaa',
	        _dayWeekDayUnabbreviated: 'aaaa',
	        _hoursSingleDigit: 'h',
	        _hoursTwoDigit: 'hh',
	        _minuteSingleDigit: 'm',
	        _minuteTwoDigit: 'mm',
	        _secondSingleDigit: 's',
	        _secondTwoDigit: 'ss',
	        _eraYear: 'e',
	        _aMPMTwoDigit: 'AM/PM',
	        _aMPMSingleDigit: 'A/P',
	        _placeholderMonthJD: '@mmmmm',
	        _defaultAbsoluteTime: new Date(1899, 11, 30, 0, 0, 0, 0)
	    };
	    var dateTimeKeyWords = [
	        dateTimeTokens._yearSingleDigit,
	        dateTimeTokens._yearTwoDigit,
	        dateTimeTokens._yearFourDigit,
	        dateTimeTokens._monthSingleDigit,
	        dateTimeTokens._monthTwoDigit,
	        dateTimeTokens._monthAbbreviation,
	        dateTimeTokens._monthUnabbreviated,
	        dateTimeTokens._monthJD,
	        dateTimeTokens._daySingleDigit,
	        dateTimeTokens._dayTwoDigit,
	        dateTimeTokens._dayWeekDayAbbreviation,
	        dateTimeTokens._dayWeekDayUnabbreviated,
	        dateTimeTokens._hoursSingleDigit,
	        dateTimeTokens._hoursTwoDigit,
	        dateTimeTokens._minuteSingleDigit,
	        dateTimeTokens._minuteTwoDigit,
	        dateTimeTokens._secondSingleDigit,
	        dateTimeTokens._secondTwoDigit,
	        'ggg',
	        'gg',
	        'g',
	        'ee',
	        'e'
	    ];
	
	    var ConditionalFormatPart = (function () {
	        function ConditionalFormatPart(content, original) {
	            appendFormatBasePro.call(this, original);
	            var self = this;
	            var op;
	            var token;
	            var value;
	            var validOperator = ['<=', '<>', '>=', '>', '<', '='];
	            for (var i = 0, len = validOperator.length; i < len; i++) {
	                op = validOperator[i];
	                if (stringHelper._startsWith(content, op, true )) {
	                    token = stringHelper._remove(content, 0, op.length);
	                    var tempValue = parseFloat(token);
	                    if (!isNaN(tempValue)) {
	                        value = tempValue;
	                    }
	                    break;
	                }
	            }
	            if (value === keyword_null && value === keyword_undefined) {
	                throw new Error(SR().Exp_TokenIllegal);
	            }
	            self.value = value;
	            self._compareOperator = op;
	            self.isMeetCondition = createComp(self);
	        }
	
	        ConditionalFormatPart.Name = 'ConditionalFormatPart';
	
	        ConditionalFormatPart.prototype = {
	            toString: function () {
	                return addSquareBracket(this._compareOperator + this.value.toString());
	            }
	        };
	        function createComp(part) {
	            var body = 'var self = this;', operator = part._compareOperator;
	            operator = operator === '<>' ? '!=' : operator;
	            operator = operator === '=' ? '===' : operator;
	            body += 'return value ' + operator + ' self.value;';
	            return new Function(['value'], body); 
	        }
	
	        return ConditionalFormatPart;
	    })();
	
	    var DBNumberFormatPart = (function () {
	       
	        function DBNumberFormatPart(token, original) {
	            appendFormatBasePro.call(this, original);
	            var self = this;
	            self.token = token;
	            self.type = parseInt(stringHelper._remove(token, 0, 'dbnum'.length), 10);
	            if (self.type < 0 || self.type > 3) {
	                throw new Error(SR().Exp_TokenIllegal);
	            }
	        }
	
	        DBNumberFormatPart.Name = 'DBNumberFormatPart';
	
	        DBNumberFormatPart.prototype = {
	            _replaceNumberString: function (s, dbNumber, isNumber) {
	                if (!s || s === stringEx._Empty) {
	                    return s;
	                }
	                var strData = s;
	                var str = s;
	                var end = -1;
	                var start = -1;
	                var hasPoint = false;
	                var token;
	                var ret;
	                var formatedNumber;
	                for (var n = s.length - 1; n >= 0; n--) {
	                    var c = str[n];
	                    if ((!isNaN(c) && !isEquals(c, ' ', false)) || (isEquals(c, '.', false) && !hasPoint)) {
	                        if (isEquals(c, '.', false)) {
	                            hasPoint = true;
	                        }
	                        if (end === -1) {
	                            end = n;
	                        }
	                        start = n;
	                    } else if (start > -1 && end > -1) {
	                        token = substr(str, start, end - start + 1);
	                        ret = parseFloat(token);
	                        if (!isNaN(ret)) {
	                            formatedNumber = numberString(token, dbNumber, isNumber);
	                            strData = stringHelper._remove(strData, start, end - start + 1);
	                            strData = stringHelper._insert(strData, start, formatedNumber);
	                        }
	                        end = -1;
	                        start = -1;
	                        hasPoint = false;
	                    }
	                }
	                if (start > -1 && end > -1) {
	                    token = substr(str, start, end - start + 1);
	                    ret = parseFloat(token);
	                    if (!isNaN(ret)) {
	                        formatedNumber = numberString(token, dbNumber, isNumber);
	                        strData = stringHelper._remove(strData, start, end - start + 1);
	                        strData = stringHelper._insert(strData, start, formatedNumber);
	                    }
	                }
	                return strData;
	            },
	            toString: function () {
	                if (this.type > -1) {
	                    return addSquareBracket('DBNum' + this.type);
	                }
	                throw new Error();
	            }
	        };
	
	        function numberString(value, dbNumber, isNumber) {
	            var partValues = value.split('.');
	            if (partValues) {
	                if (partValues.length === 1) {
	                    return formatNumberString(partValues[0], dbNumber.numbers, isNumber ? dbNumber.letters : keyword_null);
	                } else if (partValues.length === 2) {
	                    var integerString = formatNumberString(partValues[0], dbNumber.numbers, isNumber ? dbNumber.letters : keyword_null);
	                    var decimalString = formatNumberString(partValues[1], dbNumber.numbers);
	                    return integerString + '.' + decimalString;
	                }
	            }
	            throw new Error(SR().Exp_ValueIllegal);
	        }
	
	        function formatNumberString(value, numbers, letters) {
	            var strValue = value;
	            var n = 0;
	            var c;
	            var nC = 0;
	            if (arguments.length === 2) {
	                var sb = '';
	                for (n = 0; n < strValue.length; n++) {
	                    c = substr(strValue, n, 1);
	                    nC = parseInt(c, 10);
	                    sb += (numbers[nC]);
	                }
	                return sb;
	            } else if (arguments.length === 3) {
	                if (!letters) {
	                    return formatNumberString(value, numbers);
	                }
	                var zeroCount = 0;
	                var result = '';
	                var maxLength = strValue.length;
	                var inZero = false;
	                var numberLetter = [];
	                for (n = 0; n < maxLength; n++) {
	                    var validCharIndex = letters.length - 1 - n;
	                    if (validCharIndex > -1) {
	                        numberLetter.push(letters[validCharIndex].toString());
	                    } else {
	                        numberLetter.push(stringEx._Empty);
	                    }
	                }
	                var tmpLetters = [];
	                for (var i = numberLetter.length - 1; i >= 0; i--) {
	                    tmpLetters[numberLetter.length - i - 1] = numberLetter[i];
	                }
	                numberLetter = tmpLetters;
	                var isZeroAcceptable = false;
	                for (i = 0; i < maxLength; i++) {
	                    c = substr(strValue, i, 1);
	                    nC = parseInt(c, 10);
	                    var ch1;
	                    var ch2 = stringEx._Empty;
	                    if (maxLength - i - 16 > 0) {
	                        ch1 = numbers[nC];
	                        ch2 = '';
	                        isZeroAcceptable = true;
	                    } else if (i !== (maxLength - 1) && i !== (maxLength - 5) && i !== (maxLength - 9) && i !== (maxLength - 13)) {
	                        if (c === '0') {
	                            ch1 = '';
	                            ch2 = '';
	                            zeroCount = zeroCount + 1;
	                        } else if (c !== '0' && zeroCount !== 0) {
	                            ch1 = numbers[0] + numbers[nC];
	                            ch2 = numberLetter[i];
	                            zeroCount = 0;
	                        } else {
	                            ch1 = numbers[nC];
	                            ch2 = numberLetter[i];
	                            zeroCount = 0;
	                        }
	                    } else if (c !== '0' && zeroCount !== 0) {
	                        ch1 = numbers[0] + numbers[nC];
	                        ch2 = numberLetter[i];
	                        zeroCount = 0;
	                    } else if ((c !== '0' && zeroCount === 0) || isZeroAcceptable) {
	                        ch1 = numbers[nC];
	                        ch2 = numberLetter[i];
	                        zeroCount = 0;
	                        isZeroAcceptable = false;
	                    } else if (c === '0' && zeroCount >= 3) {
	                        ch1 = '';
	                        ch2 = '';
	                        zeroCount = zeroCount + 1;
	                    } else if (maxLength >= 11) {
	                        ch1 = '';
	                        zeroCount = zeroCount + 1;
	                    } else {
	                        ch1 = '';
	                        ch2 = numberLetter[i];
	                        zeroCount = zeroCount + 1;
	                    }
	                    var isZero = (ch1 + ch2) === stringEx._Empty;
	                    if (!isZero) {
	                        inZero = false;
	                    }
	                    if (i === (maxLength - 13) && !inZero) {
	                        ch2 = numberLetter[i];
	                        inZero = true;
	                    }
	                    if (i === (maxLength - 9) && !inZero) {
	                        ch2 = numberLetter[i];
	                        inZero = true;
	                    }
	                    if (i === (maxLength - 1)) {
	                        ch2 = numberLetter[i];
	                        inZero = true;
	                    }
	                    result = result + ch1 + ch2;
	                }
	                var iValue = parseInt(value, 10);
	                if (iValue === 0) {
	                    return numbers[0];
	                }
	                return result;
	            }
	        }
	
	        return DBNumberFormatPart;
	    })();
	
	    var NumberFormatDateTime = (function () {
	        function NumberFormatDateTime(format, partLocaleID, dbNumberFormatPart, cultureName, absTimeParts) {
	            appendNumberFormatPro.call(this, partLocaleID, dbNumberFormatPart, cultureName);
	            var self = this;
	            self._formatString = self._fixFormat(trimUnsupportedSymbol(format));
	            self._absTimeParts = absTimeParts;
	            self._formatType = 2 ;
	            self._init();
	        }
	
	        NumberFormatDateTime.prototype = {
	            _init: function () {
	                var self = this;
	                var formatTemp = {'_value': self._formatString};
	                var selfClass = NumberFormatDateTime;
	                if (selfClass._evaluateFormat(formatTemp._value)) {
	                    var hasAMPM = self._processAMPM(formatTemp);
	                   
	                   
	                    self.hasJD = self._replace(formatTemp._value, dateTimeTokens._monthJD, '"' + dateTimeTokens._placeholderMonthJD + '"', true, false, formatTemp, false);
	                   
	                    self._replace(formatTemp._value, dateTimeTokens._monthUnabbreviated, 'MMMM', true, false, formatTemp, false);
	                   
	                    self._replace(formatTemp._value, dateTimeTokens._monthAbbreviation, 'MMM', true, false, formatTemp, false);
	                   
	                    self._replace(formatTemp._value, dateTimeTokens._monthTwoDigit, 'MM', true, false, formatTemp, false);
	                   
	                    self._replace(formatTemp._value, dateTimeTokens._monthSingleDigit, 'M', true, false, formatTemp, false);
	                   
	                    self._replace(formatTemp._value, dateTimeTokens._dayWeekDayAbbreviation, 'ddd', true, true, formatTemp, true);
	                   
	                    self._replace(formatTemp._value, dateTimeTokens._dayWeekDayUnabbreviated, 'dddd', true, true, formatTemp, true);
	                   
	                    if (!hasAMPM) {
	                       
	                        self._replace(formatTemp._value, dateTimeTokens._hoursSingleDigit, 'H', true, true, formatTemp, false);
	                       
	                        self._replace(formatTemp._value, dateTimeTokens._hoursTwoDigit, 'HH', true, true, formatTemp, false);
	                    }
	                   
	                    if (self._partDBNumberFormat && self._partLocaleID) {
	                       
	                        self._hasYearDelay = self._hasYearDelay || self._replace(formatTemp._value, dateTimeTokens._yearFourDigit, '"@' + dateTimeTokens._yearFourDigit + '"', true, false, formatTemp, true);
	                       
	                        self._hasYearDelay = self._hasYearDelay || self._replace(formatTemp._value, dateTimeTokens._yearTwoDigit, '"@' + dateTimeTokens._yearTwoDigit + '"', true, false, formatTemp, true);
	                    }
	                    if (self._absTimeParts) {
	                        for (var key = 0; key < self._absTimeParts.length; key++) {
	                            var absPart = self._absTimeParts[key];
	                            self._replace(formatTemp._value, absPart._originalToken, '@' + absPart._originalToken, true, true, formatTemp, true);
	                        }
	                    }
	                    self._validDateTimeFormatString = formatTemp._value;
	                } else {
	                    throwFormatEx();
	                }
	            },
	            formatString: function () {
	                return this._formatString;
	            },
	            format: function (obj) {
	                var self = this;
	                var result = stringEx._Empty;
	                var dateTime = keyword_null;
	                try {
	                    dateTime = dateTimeHelper._DT(obj);
	                    if (dateTime && isNaN(dateTime.valueOf())) {
	                        dateTime = keyword_null;
	                    }
	
	                    if (!dateTime) {
	                        result = obj.toString();
	                    } else {
	                        obj = dateTime;
	                    }
	
	                    if (dateTime) {
	                        result = dateTimeHelper._customCultureFormat(dateTime, self._validDateTimeFormatString, (self._partLocaleID && self._partLocaleID.cultureInfo()) || getCultureInfo(self.cultureName));
	                        if (self.hasJD) {
	                            var monthName = getCultureInfo(self.cultureName).DateTimeFormat.monthNames[dateTime.getMonth()];
	                            result = stringHelper._replace(result, dateTimeTokens._placeholderMonthJD, substr(monthName, 0, 1));
	                        }
	                        if (self._absTimeParts) {
	                            var span = (dateTimeHelper._toOADate(dateTime) - dateTimeHelper._toOADate(dateTimeTokens._defaultAbsoluteTime)) * 24 * 60 * 60 * 1000;
	                            for (var key = 0; key < self._absTimeParts.length; key++) {
	                                var absPart = self._absTimeParts[key];
	                                var absTimePartString = absPart._getTimeSpan(span);
	                                if (!isNullOrUndefined(absTimePartString)) {
	                                    var tempAbsPart = absPart._originalToken.replace('[', '\\[').replace(']', '\\]');
	                                    result = stringHelper._replace(result, '@' + tempAbsPart, absTimePartString);
	                                }
	                            }
	                        }
	                    }
	                } catch (ex) {
	                    result = convertToString(obj);
	                }
	                return convertDateTimeNumberString(result, obj, self._partLocaleID, self._partDBNumberFormat, self.cultureName);
	            },
	            parse: function (s) {
	                if (!s || s === stringEx._Empty) {
	                    return keyword_null;
	                }
	                var self = this;
	                var strTemp = s;
	                var boolResult = toLowerCase(strTemp);
	                if (boolResult === 'true') {
	                    return true;
	                } else if (boolResult === 'false') {
	                    return false;
	                }
	                if (self._validDateTimeFormatString) {
	                    var dateTimeResult = dateTimeHelper._parseExact(strTemp, self._validDateTimeFormatString, getCultureInfo(self.cultureName));
	                    if (dateTimeResult) {
	                        return dateTimeResult;
	                    }
	                }
	
	                try {
	                    var resultDate = dateTimeHelper._DT(strTemp);
	                    if (resultDate && !isNaN(resultDate)) {
	                        return resultDate;
	                    }
	                    resultDate = new Date(strTemp);
	                    return !isNaN(resultDate.valueOf()) ? resultDate : strTemp;
	                } catch (err) {
	                    return strTemp;
	                }
	            },
	            _fixFormat: function (format) {
	               
	                var formatTemp = format;
	                var strBuilder = '';
	                var inComments = false;
	                for (var n = 0; n < formatTemp.length; n++) {
	                    var c = formatTemp[n];
	                    if (c === '\"') {
	                        inComments = !inComments;
	                    } else if (!inComments) {
	                        if (c === 'Y' || c === 'D' || c === 'S' || c === 'E' || c === 'G') {
	                            c = toLowerCase(c);
	                        } else if (c === 'M') {
	                            var frontC = formatTemp[n - 1];
	                            if (!isEquals('A', frontC, true) && !isEquals('P', frontC, true)) {
	                                c = toLowerCase(c);
	                            }
	                        }
	                    }
	
	                    strBuilder += c;
	                }
	                return strBuilder;
	            },
	            _processAMPM: function (format) {
	                var keywords = [dateTimeTokens._aMPMTwoDigit, getDateTimeFormat(this.cultureName).amDesignator + '/' + getDateTimeFormat(this.cultureName).pmDesignator,
	                    dateTimeTokens._aMPMSingleDigit];
	                var array2 = ['tt', 'tt', 't'];
	                for (var i = 0; i < 3; i++) {
	                    if (stringHelper._contains(format._value, keywords[i], 1)) {
	                        format._value = stringHelper._replace(format._value, keywords[i], array2[i], true);
	                        return true;
	                    }
	                }
	
	                return false;
	            },
	            _replace: function (format, oldToken, newToken, isReplaceInDateFormat, isReplaceInTimeFormat, result, isIgnoreCase) {
	                if (isReplaceInDateFormat || isReplaceInTimeFormat) {
	                    var positions = [];
	                    var isInDate = true;
	                    if (!hasDate(format) && hasTime(format)) {
	                        isInDate = false;
	                    }
	                    var isStartSpecialString = false;
	                    var index = 0;
	                    for (; index < format.length; index++) {
	                        var c = format[index];
	                        if (hasTime(c)) {
	                            isInDate = false;
	                        } else if (hasDate(c)) {
	                            isInDate = true;
	                        }
	                        if ((isReplaceInDateFormat && isEquals(c, oldToken[0], isIgnoreCase) && isInDate) ||
	                            (isReplaceInTimeFormat && isEquals(c, oldToken[0], isIgnoreCase) && !isInDate)) {
	                            var isMatch = true;
	                            for (var x = 0; x < oldToken.length; x++) {
	                                if (x + index >= format.length || !isEquals(oldToken[x], format[x + index], isIgnoreCase)) {
	                                    isMatch = false;
	                                    break;
	                                }
	                            }
	                            var indexLastMatch = index + oldToken.length - 1;
	                            if (isMatch && indexLastMatch + 1 < format.length) {
	                                var lastMatchChar = format[indexLastMatch];
	                                var tail = -1;
	                                for (tail = indexLastMatch + 1; tail < format.length; tail++) {
	                                    if (!isEquals(lastMatchChar, format[tail], isIgnoreCase)) {
	                                        break;
	                                    }
	                                }
	                                if (tail > indexLastMatch + 1) {
	                                    index = tail; 
	                                    isMatch = false;
	                                }
	                            }
	                            if (isMatch && !isStartSpecialString) {
	                                positions.splice(0, 0, index);
	                            }
	                        }
	                        if (c === '\"') {
	                            isStartSpecialString = !isStartSpecialString;
	                        }
	                    }
	                    result._value = format;
	                    if (positions.length > 0) {
	                        for (index = 0; index < positions.length; index++) {
	                            var position = positions[index];
	                            result._value = stringHelper._remove(result._value, position, oldToken.length);
	                            result._value = stringHelper._insert(result._value, position, newToken);
	                        }
	                        return true;
	                    }
	                    return false;
	                }
	                return false;
	            }
	        };
	
	        function hasTime(s) {
	            return stringHelper._indexOf(s, dateTimeTokens._hoursSingleDigit[0], true ) > -1 ||
	                stringHelper._indexOf(s, dateTimeTokens._secondSingleDigit[0], true ) > -1;
	        }
	
	        function hasDate(s) {
	            return (stringHelper._indexOf(s, dateTimeTokens._yearTwoDigit[0], true ) > -1 ||
	            stringHelper._indexOf(s, dateTimeTokens._daySingleDigit[0], true ) > -1);
	        }
	
	        NumberFormatDateTime._evaluateFormat = function (content) {
	            return containsKeywords(content, dateTimeKeyWords);
	        };
	       
	
	        return NumberFormatDateTime;
	    })();
	
	    var ABSTimeFormatPart = function (token, original) {
	        appendFormatBasePro.call(this, original);
	        var self = this;
	        var keyword = toLowerCase(token)[0];
	        var factor;
	        if (keyword === 'h') {
	            factor = 3600;
	        } else if (keyword === 'm') {
	            factor = 60;
	        } else if (keyword === 's') {
	            factor = 1;
	        } else {
	            throw new Error(SR().Exp_TokenIllegal);
	        }
	        self._getTimeSpan = function (span) {
	            var result = span / 1000 / factor;
	           
	            if (Math.abs(result - Math.round(result)) < 0.000001) {
	                return Math.round(result);
	            }
	            return Math.floor(result);
	        };
	    };
	    ABSTimeFormatPart.Name = 'ABSTimeFormatPart';
	
	    var ColorFormatPart = (function () {
	        function ColorFormatPart(token, original) {
	            appendFormatBasePro.call(this, original);
	            this.foreColor = token;
	        }
	
	        ColorFormatPart.Name = 'ColorFormatPart';
	
	        ColorFormatPart.prototype.toString = function () {
	            return addSquareBracket(this.foreColor);
	        };
	        return ColorFormatPart;
	    })();
	
	    var NumberFormatDigital = (function () {
	        function NumberFormatDigital(format, partLocaleID, dbNumberFormatPart, cultureName) {
	            function splitString(s, spliter) {
	                var strs = [], strMark = '\"';
	                if (s === keyword_null || s === '') {
	                    return strs;
	                }
	                var inEscape = false, sb = [], inStr = false, n, c;
	                for (n = 0; n < s.length; n++) {
	                    c = s[n];
	                    if (c === strMark && !inEscape) {
	                        inStr = !inStr;
	                    }
	                    if (!inEscape && !inStr && c === spliter) {
	                        strs.push(sb.join(''));
	                        sb = [];
	                    } else {
	                        sb.push(c);
	                    }
	                    inEscape = c === '\\' ? !inEscape : false;
	                }
	                strs.push(sb.join(''));
	                return strs;
	            }
	
	           
	            appendNumberFormatPro.call(this, partLocaleID, dbNumberFormatPart, cultureName);
	            var self = this;
	            self._isGeneralNumber = false;
	            self._formatType = 1 ;
	            self._fullFormatString = filterSquareBracket(format);
	            var formatTemp = trimUnsupportedSymbol(format);
	            if (partLocaleID) {
	                formatTemp = replaceKeyword(formatTemp, self._partLocaleID._originalToken, self._partLocaleID.currencySymbol());
	            }
	            formatTemp = filterSquareBracket(formatTemp);
	           
	            var solidusIndex = formatTemp.indexOf('/');
	            if (solidusIndex > -1) {
	                var sp = splitString(formatTemp, '/');
	                if (sp && sp.length === 2) { 
	                    self._fractionDenominatorFormat = sp[1];
	                    var left = sp[0];
	                    if (left) {
	                        var kjIndex = left.lastIndexOf(' ');
	                        if (kjIndex > -1) {
	                            self._fractionIntegerFormat = substr(left, 0, kjIndex);
	                            self._fractionNumeratorFormat = substr(left, kjIndex + 1, left.length - kjIndex - 1);
	                        } else {
	                            self._fractionNumeratorFormat = left;
	                        }
	                    }
	                }
	            }
	            self._numberFormatString = formatTemp;
	        }
	
	        NumberFormatDigital.prototype = {
	            formatString: function () {
	                return this._fullFormatString;
	            },
	            format: function (obj) {
	                if (isType(obj, 'boolean')) {
	                    return obj.toString().toUpperCase();
	                }
	                var self = this;
	                var num = Types._toDouble(obj);
	                if (isNaN(num) || !isFinite(num) || isNaN(obj)) {
	                    if (typeof obj === 'string') {
	                        return obj;
	                    }
	                    return keyword_null;
	                }
	                var cultureInfo = getCultureInfo(self.cultureName);
	                var result, denominatorFormat, fixedDenominator, numeratorValueRoundUp, temp;
	                var sb;
	
	                if (self._fractionNumeratorFormat && self._fractionDenominatorFormat) {
	                    var out_integer = {'value': 0.0};
	                    var out_numerator = {'value': 0.0};
	                    var out_denominator = {'value': 0.0};
	                    var d = self._getDenominatorLength();
	                    if (getFraction(num, d, out_integer, out_numerator, out_denominator)) {
	                        var tempValue = getGCD(out_numerator.value, out_denominator.value);
	                        if (tempValue > 1) {
	                            out_numerator.value /= tempValue;
	                            out_denominator.value /= tempValue;
	                        }
	                        if (self._fractionIntegerFormat) {
	                            sb = '';
	
	                           
	                            if (out_denominator.value === 1) {
	                                out_integer.value += out_numerator.value;
	                                out_numerator.value = 0;
	                                out_denominator.value = 0;
	                            }
	                            var tempIntegerString = formatObjectToSrting(customCultureFormat(out_integer.value, self._fractionIntegerFormat, cultureInfo));
	                            if (tempIntegerString && tempIntegerString !== '0') {
	                                sb += tempIntegerString;
	                                sb += ' ';
	                            }
	                            if (out_integer.value === 0 && num < 0) {
	                                sb += cultureInfo.NumberFormat.negativeSign;
	                            }
	
	                            if (num === 0) {
	                                sb += ('0');
	                            }
	
	                            denominatorFormat = self._fractionDenominatorFormat;
	                            fixedDenominator = parseFloat(denominatorFormat);
	                            if (!isNaN(fixedDenominator) && fixedDenominator > 0) {
	                                if (out_numerator.value !== 0 && out_denominator.value !== 0) {
	                                    out_numerator.value *= fixedDenominator / out_denominator.value;
	                                }
	                                out_denominator.value = fixedDenominator;
	                                denominatorFormat = denominatorFormat.replace(/^\d+/, toNumberPlaceholder(fixedDenominator));
	                                numeratorValueRoundUp = Math.ceil(out_numerator.value);
	                                temp = numeratorValueRoundUp - out_numerator.value;
	                                if (temp <= 0.5 && temp >= 0) {
	                                    out_numerator.value = parseFloat(numeratorValueRoundUp.toString());
	                                } else {
	                                    out_numerator.value = parseFloat((numeratorValueRoundUp - 1).toString());
	                                }
	                            }
	
	                           
	                            var numeratorFormat = self._fractionNumeratorFormat;
	                            var fixedNumeratorForma = parseFloat(numeratorFormat);
	                            if (!isNaN(fixedNumeratorForma) && fixedNumeratorForma === 0) {
	                                var numeratorFormatLength = numeratorFormat.length;
	                                var numeratorString = out_numerator.value.toString();
	                                var numeratorLength = numeratorString.length;
	                                if (numeratorFormatLength > numeratorLength) {
	                                    numeratorFormat = numeratorFormat.substr(0, numeratorFormatLength - (numeratorFormatLength - numeratorLength));
	                                } else if (numeratorFormatLength < numeratorLength) {
	                                    numeratorString = numeratorString.substr(0, numeratorLength - (numeratorLength - numeratorFormatLength));
	                                    out_numerator.value = parseInt(numeratorString, 10);
	                                }
	                            }
	                            var fractionString = self._getFormattedFractionString(out_numerator.value, out_denominator.value, numeratorFormat, denominatorFormat, cultureInfo);
	                            if (out_numerator.value === 0) {
	                               
	                                fractionString = fractionString.replace(/./g, ' ');
	                               
	                                if (tempIntegerString === "") {
	                                    return '0 ' + fractionString;
	                                }
	                            }
	                            sb += fractionString;
	                            return sb === '' ? '0' : sb;
	                        }
	                        sb = '';
	                        var value = out_integer.value * out_denominator.value + out_numerator.value;
	                        denominatorFormat = self._fractionDenominatorFormat;
	                        fixedDenominator = parseFloat(denominatorFormat);
	                        if (fixedDenominator > 0) {
	                            value *= fixedDenominator / out_denominator.value;
	                            out_denominator.value = fixedDenominator;
	                            numeratorValueRoundUp = Math.ceil(value);
	                            temp = numeratorValueRoundUp - value;
	                            if (temp <= 0.5 && temp >= 0) {
	                                value = parseFloat(numeratorValueRoundUp.toString());
	                            } else {
	                                value = parseFloat((numeratorValueRoundUp - 1).toString());
	                            }
	                            sb += (value + '/' + out_denominator.value);
	                        } else {
	                            sb += self._getFormattedFractionString(value, out_denominator.value, self._fractionNumeratorFormat, self._fractionDenominatorFormat, cultureInfo);
	                        }
	                        return value === 0 ? '0' : sb;
	                    }
	                   
	                   
	                    return num.toString();
	                }
	                result = customCultureFormat(num, self._numberFormatString, cultureInfo);
	                result = convertNumberString(result, self._isGeneralNumber, self._partLocaleID, self._partDBNumberFormat, self.cultureName);
	                return result;
	            },
	            parse: function (s) {
	                var self = this;
	                if (!s || s === stringEx._Empty) {
	                    return keyword_null;
	                }
	                var sl = toLowerCase(s);
	                if (sl === 'true') {
	                    return true;
	                } else if (sl === 'false') {
	                    return false;
	                }
	
	                s = self._trimSpecialSymbol(s);
	                s = self._trimCurrencySymbol(s);
	                var result = self._trimPercentSign(s);
	                var isPer = result._isPer;
	                var str = result._str;
	                if (self._isValidaNumberString(str)) {
	                    str = stringHelper._replaceAllNoReg(str, getNumberFormat(self.cultureName).numberGroupSeparator, '');
	                    var value = numberHelper._parseFloat(str, self.cultureName);
	                    if (!isNaN(value) && isFinite(value)) {
	                        if (isPer) {
	                            value = fixNumber(value / 100.0, 15);
	                        }
	                        return value;
	                    }
	                }
	
	                return keyword_null;
	            },
	            _getDenominatorLength: function () {
	                var self = this;
	                var fractionDenominatorFormat = self._fractionDenominatorFormat;
	                var length = 0;
	                if (fractionDenominatorFormat) {
	                    var l = fractionDenominatorFormat.length;
	                    for (var i = 0; i < l; i++) {
	                        if (fractionDenominatorFormat[i].match(/[#?0\d]/)) {
	                            length++;
	                        } else {
	                            break;
	                        }
	                    }
	                }
	                return length;
	            },
	            _isValidaNumberString: function (str) {
	                var tempStr = '';
	                var decimalFlagCount = 0;
	                var eFlagCount = 0;
	                var separatorFlagCount = 0;
	                var isValidGroup = true;
	                var numberFormatInfo = getNumberFormat(this.cultureName);
	                for (var i = str.length - 1; i > -1; i--) {
	                    if (str[i] === numberFormatInfo.numberDecimalSeparator) {
	                        decimalFlagCount++;
	                        if (separatorFlagCount > 0) {
	                            isValidGroup = false;
	                        }
	                        tempStr = '';
	                    } else if (toLowerCase(str[i]) === 'e') {
	                        eFlagCount++;
	                        tempStr = '';
	                        if (i === str.length - 1) {
	                           
	                            return false;
	                        }
	                    } else if (str[i] === numberFormatInfo.numberGroupSeparator) {
	                        isValidGroup = (tempStr.length === 3);
	                        separatorFlagCount++;
	                        tempStr = '';
	                    } else if (str[i] === '-' || str[i] === '+') {
	                        if (i > 0 && toLowerCase(str[i - 1]) !== 'e') {
	                            return false;
	                        }
	                    } else if (CharHelper._isDigit(str[i])) {
	                        tempStr += str[i];
	                    } else {
	                        return false;
	                    }
	                    if (decimalFlagCount > 1 || eFlagCount > 1 || !isValidGroup) {
	                        return false;
	                    }
	                }
	                return true;
	            },
	            _trimSpecialSymbol: function (s) {
	                var strTemp = s;
	                var digital = [];
	                for (var i = 0; i < strTemp.length; i++) {
	                    if (CharHelper._isDigit(strTemp[i])) {
	                        digital.push(i);
	                    }
	                }
	                var fp = getNumberFormat(this.cultureName);
	                var keywords = [fp.currencyDecimalSeparator, fp.currencyGroupSeparator, fp.currencySymbol, fp.nanSymbol, fp.negativeInfinitySymbol, fp.negativeSign,
	                    fp.numberDecimalSeparator, fp.numberGroupSeparator, fp.percentDecimalSeparator, fp.percentGroupSeparator, fp.percentSymbol,
	                    fp.perMilleSymbol, fp.positiveInfinitySymbol, fp.positiveSign];
	
	                for (var n = strTemp.length - 1; n > -1; n--) {
	                    var c = strTemp[n];
	                    if (CharHelper._isWhiteSpace(c) && !(keywords.indexOf(c.toString()) > -1)) {
	                        if (n < digital[0] || digital[digital.length - 1] < n) {
	                            strTemp = stringHelper._remove(strTemp, n, 1);
	                        }
	                    } else if (c === '-' || c === '+') {
	                        var frontChar = n > 0 ? strTemp[n - 1].toString() : keyword_null;
	                        var permitChars = ['e', 'E', '(', getNumberFormat(this.cultureName).currencySymbol];
	                        if (permitChars.indexOf(frontChar) < 0) {
	                            break;
	                        }
	                    }
	                }
	                return strTemp;
	            },
	            _trimCurrencySymbol: function (s) {
	                var currencySymbol = getNumberFormat(this.cultureName).currencySymbol;
	                var tempS = stringHelper._startsWith(s, currencySymbol) ? stringHelper._remove(s, 0, currencySymbol.length) : s;
	                return tempS.indexOf(currencySymbol) < 0 ? tempS : s;
	            },
	            _trimPercentSign: function (s) {
	                var percentSymbol = getNumberFormat(this.cultureName).percentSymbol;
	                var isPercent = true;
	                var tempS = s;
	                if (stringHelper._startsWith(s, percentSymbol)) {
	                    tempS = stringHelper._remove(s, 0, percentSymbol.length);
	                } else if (stringHelper._endsWith(s, percentSymbol)) {
	                    tempS = stringHelper._remove(s, s.length - percentSymbol.length, percentSymbol.length);
	                } else {
	                    isPercent = false;
	                }
	
	                if (stringHelper._contains(tempS, percentSymbol)) {
	                    isPercent = false;
	                }
	
	                return {_str: tempS, _isPer: isPercent};
	            },
	            _getFormattedFractionString: function (numberatorValue, denominatorValue, numeratorFormat, denominatorFormat, cultureInfo) {
	               
	               
	                var numeratorFormatStr = formatObjectToSrting(customCultureFormat(numberatorValue, numeratorFormat, cultureInfo));
	               
	                var fakeDenominatorNumber = '0.' + denominatorValue;
	                var fakeDenominatorformat = '#.' + denominatorFormat;
	                var denominatorStr = formatObjectToSrting(customCultureFormat(fakeDenominatorNumber, fakeDenominatorformat, cultureInfo, true));
	               
	                var resultString = numeratorFormatStr + '/' + denominatorStr.substr(denominatorStr.indexOf('.') + 1);
	               
	                if (numeratorFormat === '') {
	                    resultString = numberatorValue + resultString;
	                }
	                if (denominatorFormat === '') {
	                    resultString += denominatorValue;
	                }
	                return resultString;
	            }
	        };
	       
	        function getGCD(value1, value2) {
	            if (value1 === 0.0) {
	                return Math_abs(value2);
	            }
	            if (value2 === 0.0) {
	                return Math_abs(value1);
	            }
	
	            var max = Math.max(value1, value2);
	            var min = Math.min(value1, value2);
	            var value3 = max % min;
	
	            while (value3 !== 0.0) {
	                max = min;
	                min = value3;
	                value3 = max % min;
	            }
	
	            return Math_abs(min);
	        }
	
	        function getFraction(value, denominatorDigits, out_integer, out_numerator, out_denominator) {
	            var integer = 0;
	            var numerator = 0;
	            var denominator = 0;
	            var decimalValue = 0;
	            var Math_ceil = Math.ceil;
	            if (value > 0) {
	                decimalValue = value - Math_ceil(value) + 1.0;
	                if (decimalValue === 1.0) {
	                    decimalValue = 0;
	                    integer = value;
	                } else {
	                    integer = Math_ceil(value) - 1.0;
	                }
	            } else if (value < 0) {
	                integer = Math_ceil(value);
	                decimalValue = Math_ceil(value) - value;
	            }
	
	            var min = Math.pow(10, denominatorDigits - 1);
	            var max = Math.pow(10, denominatorDigits) - 1;
	            if (min < 2) {
	                min = 2;
	            }
	            if (max < 2) {
	                max = 2;
	            }
	            var isValueSet = false;
	            var lastTriedValue = 0;
	            for (var n = min; n <= max; n++) {
	                var valueTemp = n * decimalValue;
	                var valueIntegerTemp = Math.round(valueTemp);
	                var triedValue = valueIntegerTemp / n;
	                var deviation = Math_abs(triedValue - decimalValue);
	                if (isValueSet ? deviation < Math_abs(lastTriedValue - decimalValue) : true) {
	                    isValueSet = true;
	                    lastTriedValue = triedValue;
	                    numerator = valueIntegerTemp;
	                    denominator = n;
	
	                   
	                    if (deviation < 0.00001) {
	                        break;
	                    }
	                }
	            }
	            out_integer.value = integer;
	            out_numerator.value = numerator;
	            out_denominator.value = denominator;
	            return isValueSet;
	        }
	
	        function toNumberPlaceholder(num) {
	            return num.toString().replace(/\d/g, '?');
	        }
	
	        return NumberFormatDigital;
	    })();
	
	    var NumberFormatGeneral = (function () {
	        function NumberFormatGeneral(format, partLocaleID, dbNumberFormatPart, cultureName) {
	            appendNumberFormatPro.call(this, partLocaleID, dbNumberFormatPart, cultureName);
	            if (arguments.length > 0) {
	                if (format.indexOf('0') >= 0 || format.indexOf('#') >= 0 || format.indexOf('.') >= 0 || format.indexOf('@') >= 0) {
	                    throwFormatEx();
	                }
	                this._fullFormatString = format;
	            } else {
	                this._fullFormatString = 'General';
	            }
	            this._formatType = 0 ;
	        }
	
	        NumberFormatGeneral.prototype = {
	            _getDigitalFormat: function () {
	                var self = this;
	                if (!self._digitalFormat) {
	                    var nfStringTmp = self._fullFormatString;
	                    nfStringTmp = replaceKeyword(nfStringTmp, 'General', generalNumberFormatDigit);
	                    self._digitalFormat = new NumberFormatDigital(nfStringTmp, self._partLocaleID, self._partDBNumberFormat, self.cultureName);
	                    self._digitalFormat._isGeneralNumber = true;
	                }
	                return self._digitalFormat;
	            },
	            _getExponentialDigitalFormat: function () {
	                var self = this;
	                if (!self._exponentialDigitalFormat) {
	                    self._exponentialDigitalFormat = new NumberFormatDigital('0.#####E+00', self._partLocaleID, self._partDBNumberFormat, self.cultureName);
	                    self._exponentialDigitalFormat._isGeneralNumber = true;
	                }
	                return self._exponentialDigitalFormat;
	            },
	            formatString: function () {
	                return stringHelper._replace(this._fullFormatString, '@NumberFormat', 'General');
	            },
	            format: function (obj) {
	                var self = this;
	                if (Types._isNumber(obj, self.cultureName)) {
	                    var allowS = !self._partLocaleID ? true : self._partLocaleID.allowScience();
	                    var d = Types._toDouble(obj);
	                    if (d !== keyword_undefined && d !== keyword_null) {
	                        if ((Math_abs(d) > 99999999999 && allowS) || (Math_abs(d) < 1E-11 && d !== 0)) {
	                            return self._getExponentialDigitalFormat().format(obj);
	                        }
	                        return self._getDigitalFormat().format(obj);
	                    }
	                } else if (isType(obj, 'string')) {
	                    var formatTmp = stringHelper._replace(self.formatString(), '"', '');
	                    formatTmp = trimBackslash(formatTmp);
	                    if (formatTmp) {
	                        return stringHelper._replace(formatTmp, 'General', obj);
	                    }
	                    return obj;
	                } else if (isType(obj, 'boolean')) {
	                    return obj.toString().toUpperCase();
	                }
	                return '';
	            },
	            parse: function (s) {
	                if (stringEx._isNullOrEmpty(s)) {
	                    return keyword_null;
	                }
	                if (typeof s === 'number') {
	                    return s;
	                }
	                var hasMin = false;
	                var minIndex = stringHelper._indexOf(s, '-');
	                if (minIndex > 0 && !isEquals(s.charAt(minIndex - 1), 'E', true)) {
	                    hasMin = true;
	                }
	                if (stringHelper._contains(s, '/') || hasMin || stringHelper._contains(s, ':') || stringHelper._contains(s, '-')) {
	                    var dt = dateTimeHelper._parseLocale(s);
	                   
	                    if (dt) {
	                        return dt;
	                    }
	                }
	
	                var result;
	                var hasNegativeSin = s.charAt(0) === '-';
	                var temp = hasNegativeSin ? stringHelper._remove(s, 0, 1) : s;
	                var hasParenthesis = temp.charAt(0) === '(' && s.charAt(s.length - 1) === ')';
	                result = this._getDigitalFormat().parse(temp);
	                if (result !== keyword_null && result !== keyword_undefined) {
	                    if ((hasParenthesis || hasNegativeSin) && isType(result, 'number')) {
	                        return -1 * Math_abs(result);
	                    }
	                    return result;
	                }
	
	                return s;
	            }
	        };
	
	        return NumberFormatGeneral;
	    })();
	
	    var NumberFormatText = (function () {
	        function NumberFormatText(format, partLocaleID, dbNumberFormatPart, culture) {
	            var self = this;
	            appendNumberFormatPro.call(self, partLocaleID, dbNumberFormatPart, culture);
	            var formatTemp = trimUnsupportedSymbol(format, false);
	            if (partLocaleID) {
	                formatTemp = replaceKeyword(formatTemp, self._partLocaleID._originalToken, self._partLocaleID.currencySymbol());
	            }
	            formatTemp = filterSquareBracket(formatTemp);
	            formatTemp = trimBackslash(formatTemp);
	            self._formatString = formatTemp;
	            self._formatType = 3 ;
	        }
	
	        NumberFormatText.prototype = {
	            format: function (obj) {
	                var self = this;
	                try {
	                    var result, value;
	                    if (obj instanceof Date) {
	                        value = dateTimeHelper._toOADate(obj).toString();
	                    } else {
	                        value = convertToString(obj);
	                    }
	                    var formatObj = self._parseFormat(self._formatString);
	                    result = self._toFormattedObject(value, formatObj);
	                    return result;
	                } catch (err) {
	                    return '';
	                }
	            },
	            parse: function (str) {
	                return str ? str : '';
	            },
	            formatString: function () {
	                return this._formatString;
	            },
	            _parseFormat: function (format) { 
	                var stringBuffer = '', inDoubleQuoteString = false;
	                var currentChar, previousChar = keyword_null, currentPart = [];
	                for (var i = 0; i < format.length; i++) { 
	                    currentChar = format.charAt(i);
	                    if (inDoubleQuoteString) {
	                        if (currentChar !== '"') {
	                            stringBuffer += currentChar;
	                        } else {
	                            stringBuffer += currentChar;
	                            currentPart.push(stringBuffer);
	                            stringBuffer = '';
	                            inDoubleQuoteString = false;
	                        }
	                        previousChar = currentChar;
	                        continue;
	                    } else if ((previousChar === '*' || previousChar === '_' || previousChar === '\\') && stringBuffer !== '') {
	                        stringBuffer += currentChar;
	                        currentPart.push(stringBuffer);
	                        stringBuffer = '';
	                        continue;
	                    }
	                    if (currentChar === '*' || currentChar === '_' || currentChar === '\\') {
	                        previousChar = currentChar;
	                        if (stringBuffer !== '') {
	                            currentPart.push(stringBuffer);
	                            stringBuffer = '';
	                        }
	                        stringBuffer += currentChar;
	                        continue;
	                    } else if (currentChar === '@') {
	                        previousChar = currentChar;
	                        if (stringBuffer !== '') {
	                            currentPart.push(stringBuffer);
	                            stringBuffer = '';
	                        }
	                        currentPart.push(currentChar);
	                        continue;
	                    } else if (currentChar === '"') {
	                        previousChar = currentChar;
	                        if (stringBuffer !== '') {
	                            currentPart.push(stringBuffer);
	                        }
	                        stringBuffer = currentChar;
	                        inDoubleQuoteString = true;
	                        continue;
	                    }
	                    stringBuffer += currentChar;
	                    previousChar = currentChar;
	                }
	                if (stringBuffer !== '') {
	                    currentPart.push(stringBuffer);
	                }
	                return currentPart;
	            },
	            _toFormattedObject: function (value, format) {
	                var result = [];
	                var hasInfilling = false;
	                for (var i = format.length - 1; i >= 0; i--) {
	                    var intPartItem = format[i];
	                    if (intPartItem[0] === '*') {
	                        if (!hasInfilling) {
	                            hasInfilling = true;
	                            result.push({type: 'fillingChar', value: intPartItem[1]});
	                        }
	                    } else if (intPartItem[0] === '_') {
	                        result.push({type: 'placeholder', value: intPartItem[1]});
	                    } else if (intPartItem[0] === '"' && intPartItem[intPartItem.length - 1] === '"') {
	                        if (intPartItem.length > 2) {
	                            result.push({type: 'text', value: intPartItem.substr(1, intPartItem.length - 2)});
	                        }
	                    } else if (intPartItem[0] === '@') {
	                        result.push({type: 'text', value: value});
	                    } else {
	                        result.push({type: 'text', value: intPartItem});
	                    }
	                }
	                return result.reverse();
	            }
	        };
	        return NumberFormatText;
	    })();
	
	    function substr(str, start, length) {
	        return str.substr(start, length);
	    }
	
	    function convertToString(value) {
	        if (Types._isNullOrUndefined(value)) {
	            return '';
	        } else if (typeof value === 'boolean') {
	            return value ? 'TRUE' : 'FALSE';
	        } else if (typeof value === 'string') {
	            return value;
	        }
	        return value.toString();
	    }
	
	    var formatPart = {
	        _positive: 0,
	        _negative: 1,
	        _zero: 2,
	        _text: 3
	    };
	    var replaceRegExp = new RegExp('([.+?*$^\\[\\](){}|\/])', 'g');
	
	    function isEscapeCharacter(str, currentpos) {
	        if (str[currentpos] === '\\') {
	            throw new Error(SR().Exp_InvalidBackslash);
	        }
	       
	        if (currentpos - 1 > 0 && currentpos - 1 < str.length && str[currentpos - 1] === '\\') {
	            if (currentpos - 2 < 0) {
	                return true;
	            } else if (currentpos - 2 > 0 && currentpos - 2 < str.length) {
	                return str[currentpos - 2] !== '\\';
	            }
	        }
	        return false;
	    }
	
	    function addSquareBracket(token) {
	        if (!token) {
	            throw new Error(SR().Exp_TokenIsNull);
	        }
	        return '[' + token + ']';
	    }
	
	    function filterSquareBracket(s) {
	        if (s === keyword_undefined || s === keyword_null || s === '') {
	            return s;
	        }
	        var sb = '';
	        var refCount = 0;
	        for (var n = 0; n < s.length; n++) {
	            var c = s[n];
	            if (c === '[') {
	                refCount++;
	            } else if (c === ']') {
	                refCount--;
	                if (refCount < 0) {
	                    refCount = 0;
	                }
	            } else if (refCount === 0) {
	                sb += c;
	            }
	        }
	        return sb.toString();
	    }
	
	    function trimSquareBracket(token) {
	        token = replaceKeyword(token, '[', '');
	        return replaceKeyword(token, ']', '');
	    }
	
	    function replaceKeyword(s, oldString, newString) {
	        if (!s || s === stringEx._Empty || isEquals(oldString, newString, true)) {
	            return s;
	        }
	
	        oldString = oldString.replace(replaceRegExp, '\\$1');
	        return s.replace(new RegExp(oldString, 'g'), newString);
	    }
	
	    function trimBackslash(token) {
	        var len = token.length;
	        var inEscape = false;
	        var sb = '';
	        for (var n = 0; n < len; n++) {
	            var c = token.charAt(n);
	            if (c === '\\') {
	                inEscape = !inEscape;
	                if (!inEscape) {
	                    sb += c;
	                }
	            } else {
	                inEscape = false;
	                sb += c;
	            }
	        }
	        return sb;
	    }
	
	    function isEquals(a, b, isIgnoreCase) {
	        return isIgnoreCase ? toLowerCase(a) === toLowerCase(b) : a === b;
	    }
	
	    function trimUnsupportedSymbol(format, isSupportedFraction) {
	        if (arguments.length === 1) {
	            isSupportedFraction = true;
	        }
	        var inComments = false;
	        var sb = '';
	        for (var n = 0; n < format.length; n++) {
	            var c = format[n];
	            if (c === '\"') {
	                inComments = !inComments;
	            } else if (!inComments && !isSupportedFraction && c === '/' && !isEscapeCharacter(format, n)) {
	                if (c === '_') {
	                    n++; 
	                }
	                continue;
	            }
	            sb += c;
	        }
	        return sb;
	    }
	
	    function trimCommentedChar(format) {
	        var result = '';
	        var inComments = false;
	        for (var i = 0, l = format.length; i < l; i++) {
	            var c = format[i];
	            if (c === '"') {
	                inComments = !inComments;
	            }
	            if (c !== 'E' && !inComments) {
	                result += toLowerCase(c);
	            }
	        }
	        return result;
	    }
	
	    function containsKeywords(format, keywords) {
	        if (!format || format === stringEx._Empty) {
	            return false;
	        }
	        var formatTemp = trimUnsupportedSymbol(format);
	        var result = trimCommentedChar(formatTemp);
	        for (var index = 0; index < keywords.length; index++) {
	            var keywordsIndex = result.indexOf(keywords[index]);
	            if (keywordsIndex === 0) {
	                return true;
	            } else if (keywordsIndex > 0 && result[keywordsIndex - 1] !== '_' && result[keywordsIndex - 1] !== '*') {
	                return true;
	            }
	        }
	        return false;
	    }
	
	    var defaultPattern = [
	        ['M/d', 'MMM/d', 'MMMM/d', 'd/M', 'd/MMM', 'd/MMMM', 'M-d', 'MMM-d', 'MMMM-d', 'd-M', 'd-MMM', 'd-MMMM'],
	        ['M/y', 'MMM/y', 'M/yyyy', 'MMM/yyyy', 'M-y', 'MMM-y', 'M-yyyy', 'MMM-yyyy'],
	        ['M/d/y', 'MMM/d/y', 'MMMM/d/y', 'M/d/yyyy', 'MMM/d/yyyy', 'MMMM/d/yyyy', 'd/M/y', 'd/MMM/y', 'd/MMMM/y', 'd/M/yyyy', 'd/MMM/yyyy', 'd/MMMM/yyyy', 'yyyy/M/d', 'M-d-y', 'MMM-d-y', 'MMMM-d-y', 'M-d-yyyy', 'MMM-d-yyyy', 'MMMM-d-yyyy', 'd-M-y', 'd-MMM-y', 'd-MMMM-y', 'd-M-yyyy', 'd-MMM-yyyy', 'd-MMMM-yyyy', 'yyyy-M-d'],
	        ['H:m', 'h:m tt'],
	        ['H:m:s', 'h:m:s tt', 'H:m:s', 'h:mm:ss tt'],
	        ['H:m:s.FFF', 'h:m:s.FFF tt'],
	        ['M/d H:m',
	            'MMM/d H:m',
	            'MMMM/d H:m',
	            'd/M H:m',
	            'd/MMM H:m',
	            'd/MMMM H:m',
	            'M/y H:m',
	            'MMM/y H:m',
	            'M/yyyy H:m',
	            'MMM/yyyy H:m',
	            'M/d/y H:m',
	            'MMM/d/y H:m',
	            'MMMM/d/y H:m',
	            'M/d/yyyy H:m',
	            'MMM/d/yyyy H:m',
	            'MMMM/d/yyyy H:m',
	            'M-d H:m',
	            'MMM-d H:m',
	            'MMMM-d H:m',
	            'd-M H:m',
	            'd-MMM H:m',
	            'd-MMMM H:m',
	            'M-y H:m',
	            'MMM-y H:m',
	            'M-yyyy H:m',
	            'MMM-yyyy H:m',
	            'M-d-y H:m',
	            'MMM-d-y H:m',
	            'MMMM-d-y H:m',
	            'M-d-yyyy H:m',
	            'MMM-d-yyyy H:m',
	            'MMMM-d-yyyy H:m',
	            'M/d h:m tt',
	            'MMM/d h:m tt',
	            'MMMM/d h:m tt',
	            'd/M h:m tt',
	            'd/MMM h:m tt',
	            'd/MMMM h:m tt',
	            'M/y h:m tt',
	            'MMM/y h:m tt',
	            'M/yyyy h:m tt',
	            'MMM/yyyy h:m tt',
	            'M/d/y h:m tt',
	            'MMM/d/y h:m tt',
	            'MMMM/d/y h:m tt',
	            'M/d/yyyy h:m tt',
	            'MMM/d/yyyy h:m tt',
	            'MMMM/d/yyyy h:m tt',
	            'M-d h:m tt',
	            'MMM-d h:m tt',
	            'MMMM-d h:m tt',
	            'd-M h:m tt',
	            'd-MMM h:m tt',
	            'd-MMMM h:m tt',
	            'M-y h:m tt',
	            'MMM-y h:m tt',
	            'M-yyyy h:m tt',
	            'MMM-yyyy h:m tt',
	            'M-d-y h:m tt',
	            'MMM-d-y h:m tt',
	            'MMMM-d-y h:m tt',
	            'M-d-yyyy h:m tt',
	            'MMM-d-yyyy h:m tt',
	            'MMMM-d-yyyy h:m tt'
	        ],
	        [
	            'M/d H:m:s',
	            'MMM/d H:m:s',
	            'MMMM/d H:m:s',
	            'd/M H:m:s',
	            'd/MMM H:m:s',
	            'd/MMMM H:m:s',
	            'M/y H:m:s',
	            'MMM/y H:m:s',
	            'M/yyyy H:m:s',
	            'MMM/yyyy H:m:s',
	            'M/d/y H:m:s',
	            'MMM/d/y H:m:s',
	            'MMMM/d/y H:m:s',
	            'M/d/yyyy H:m:s',
	            'MMM/d/yyyy H:m:s',
	            'MMMM/d/yyyy H:m:s',
	            'd/M/y H:m:s',
	            'd/MMM/y H:m:s',
	            'd/MMMM/y H:m:s',
	            'd/M/yyyy H:m:s',
	            'd/MMM/yyyy H:m:s',
	            'd/MMMM/yyyy H:m:s',
	            'yyyy/M/d H:m:s',
	            'M-d H:m:s',
	            'MMM-d H:m:s',
	            'MMMM-d H:m:s',
	            'd-M H:m:s',
	            'd-MMM H:m:s',
	            'd-MMMM H:m:s',
	            'M-y H:m:s',
	            'MMM-y H:m:s',
	            'M-yyyy H:m:s',
	            'MMM-yyyy H:m:s',
	            'M-d-y H:m:s',
	            'MMM-d-y H:m:s',
	            'MMMM-d-y H:m:s',
	            'M-d-yyyy H:m:s',
	            'MMM-d-yyyy H:m:s',
	            'MMMM-d-yyyy H:m:s',
	            'd-M-y H:m:s',
	            'd-MMM-y H:m:s',
	            'd-MMMM-y H:m:s',
	            'd-M-yyyy H:m:s',
	            'd-MMM-yyyy H:m:s',
	            'd-MMMM-yyyy H:m:s',
	            'yyyy-M-d H:m:s',
	            'M/d h:m:s tt',
	            'MMM/d h:m:s tt',
	            'MMMM/d h:m:s tt',
	            'd/M h:m:s tt',
	            'd/MMM h:m:s tt',
	            'd/MMMM h:m:s tt',
	            'M/y h:m:s tt',
	            'MMM/y h:m:s tt',
	            'M/yyyy h:m:s tt',
	            'MMM/yyyy h:m:s tt',
	            'M/d/y h:m:s tt',
	            'MMM/d/y h:m:s tt',
	            'MMMM/d/y h:m:s tt',
	            'M/d/yyyy h:m:s tt',
	            'MMM/d/yyyy h:m:s tt',
	            'MMMM/d/yyyy h:m:s tt',
	            'd/M/y h:m:s tt',
	            'd/MMM/y h:m:s tt',
	            'd/MMMM/y h:m:s tt',
	            'd/M/yyyy h:m:s tt',
	            'd/MMM/yyyy h:m:s tt',
	            'd/MMMM/yyyy h:m:s tt',
	            'yyyy/M/d h:m:s tt',
	            'M/d/yyyy h:mm:ss tt',
	            'M-d h:m:s tt',
	            'MMM-d h:m:s tt',
	            'MMMM-d h:m:s tt',
	            'd-M h:m:s tt',
	            'd-MMM h:m:s tt',
	            'd-MMMM h:m:s tt',
	            'M-y h:m:s tt',
	            'MMM-y h:m:s tt',
	            'M-yyyy h:m:s tt',
	            'MMM-yyyy h:m:s tt',
	            'M-d-y h:m:s tt',
	            'MMM-d-y h:m:s tt',
	            'MMMM-d-y h:m:s tt',
	            'M-d-yyyy h:m:s tt',
	            'MMM-d-yyyy h:m:s tt',
	            'MMMM-d-yyyy h:m:s tt',
	            'd-M-y h:m:s tt',
	            'd-MMM-y h:m:s tt',
	            'd-MMMM-y h:m:s tt',
	            'd-M-yyyy h:m:s tt',
	            'd-MMM-yyyy h:m:s tt',
	            'd-MMMM-yyyy h:m:s tt',
	            'yyyy-M-d h:m:s tt'
	        ],
	        [
	            'M/d H:m:s.FFF',
	            'MMM/d H:m:s.FFF',
	            'MMMM/d H:m:s.FFF',
	            'd/M H:m:s.FFF',
	            'd/MMM H:m:s.FFF',
	            'd/MMMM H:m:s.FFF',
	            'M/y H:m:s.FFF',
	            'MMM/y H:m:s.FFF',
	            'M/yyyy H:m:s.FFF',
	            'MMM/yyyy H:m:s.FFF',
	            'd/M/y H:m',
	            'd/MMM/y H:m',
	            'd/MMMM/y H:m',
	            'd/M/yyyy H:m',
	            'd/mmm/yyyy H:m',
	            'd/MMMM/yyyy H:m',
	            'yyyy/M/d H:m',
	            'M/d/y H:m:s.FFF',
	            'MMM/d/y H:m:s.FFF',
	            'MMMM/d/y H:m:s.FFF',
	            'M/d/yyyy H:m:s',
	            'MMM/d/yyyy H:m:s.FFF',
	            'MMMM/d/yyyy H:m:s.FFF',
	            'd/M/y H:m:s.FFF',
	            'd/MMM/y H:m:s.FFF',
	            'd/MMMM/y H:m:s.FFF',
	            'd/M/yyyy H:m:s.FFF',
	            'd/MMM/yyyy H:m:s.FFF',
	            'd/MMMM/yyyy H:m:s.FFF',
	            'yyyy/M/d H:m:s.FFF',
	            'M-d H:m:s.FFF',
	            'MMM-d H:m:s.FFF',
	            'MMMM-d H:m:s.FFF',
	            'd-M H:m:s.FFF',
	            'd-MMM H:m:s.FFF',
	            'd-MMMM H:m:s.FFF',
	            'M-y H:m:s.FFF',
	            'MMM-y H:m:s.FFF',
	            'M-yyyy H:m:s.FFF',
	            'MMM-Yyyy H:m:s.FFF',
	            'd-M-y H:m',
	            'd-MMM-y H:m',
	            'd-MMMM-y H:m',
	            'd-M-yyyy H:m',
	            'd-MMM-yyyy H:m',
	            'd-MMMM-yyyy H:m',
	            'yyyy-M-d H:m',
	            'M-d-y H:m:s.FFF',
	            'MMM-d-y H:m:s.FFF',
	            'MMMM-d-y H:m:s.FFF',
	            'M-d-yyyy H:m:s',
	            'MMM-d-yyyy H:m:s.FFF',
	            'MMMM-d-yyyy H:m:s.FFF',
	            'D-M-y H:m:s.FFF',
	            'd-MMM-y H:m:s.FFF',
	            'd-MMMM-y H:m:s.FFF',
	            'D-M-yyyy H:m:s.FFF',
	            'd-MMM-yyyy H:m:s.FFF',
	            'd-MMMM-yyyy H:m:s.FFF',
	            'yyyy-M-d H:m:s.FFF',
	            'M/d h:m:s.FFF tt',
	            'MMM/d h:m:s.FFF tt',
	            'MMMM/d h:m:s.FFF tt',
	            'd/M h:m:s.FFF tt',
	            'd/MMM h:m:s.FFF tt',
	            'd/MMMM h:m:s.FFF tt',
	            'M/y h:m:s.FFF tt',
	            'MMM/y h:m:s.FFF tt',
	            'M/yyyy h:m:s.FFF tt',
	            'MMM/yyyy h:m:s.FFF tt',
	            'd/M/y h:m tt',
	            'd/MMM/y h:m tt',
	            'd/MMMM/y h:m tt',
	            'd/M/yyyy h:m tt',
	            'd/mmm/yyyy h:m tt',
	            'd/MMMM/yyyy h:m tt',
	            'yyyy/M/d h:m tt',
	            'M/d/y h:m:s.FFF tt',
	            'MMM/d/y h:m:s.FFF tt',
	            'MMMM/d/y h:m:s.FFF tt',
	            'M/d/yyyy h:m:s tt',
	            'MMM/d/yyyy h:m:s.FFF tt',
	            'MMMM/d/yyyy h:m:s.FFF tt',
	            'd/M/y h:m:s.FFF tt',
	            'd/MMM/y h:m:s.FFF tt',
	            'd/MMMM/y h:m:s.FFF tt',
	            'd/M/yyyy h:m:s.FFF tt',
	            'd/MMM/yyyy h:m:s.FFF tt',
	            'd/MMMM/yyyy h:m:s.FFF tt',
	            'yyyy/M/d h:m:s.FFF tt',
	            'M-d h:m:s.FFF tt',
	            'MMM-d h:m:s.FFF tt',
	            'MMMM-d h:m:s.FFF tt',
	            'd-M h:m:s.FFF tt',
	            'd-MMM h:m:s.FFF tt',
	            'd-MMMM h:m:s.FFF tt',
	            'M-y h:m:s.FFF tt',
	            'MMM-y h:m:s.FFF tt',
	            'M-yyyy h:m:s.FFF tt',
	            'MMM-Yyyy h:m:s.FFF tt',
	            'd-M-y h:m tt',
	            'd-MMM-y h:m tt',
	            'd-MMMM-y h:m tt',
	            'd-M-yyyy h:m tt',
	            'd-MMM-yyyy h:m tt',
	            'd-MMMM-yyyy h:m tt',
	            'yyyy-M-d h:m tt',
	            'M-d-y h:m:s.FFF tt',
	            'MMM-d-y h:m:s.FFF tt',
	            'MMMM-d-y h:m:s.FFF tt',
	            'M-d-yyyy H:m:s tt',
	            'MMM-d-yyyy H:m:s.FFF tt',
	            'MMMM-d-yyyy h:m:s.FFF tt',
	            'd-M-y h:m:s.FFF tt',
	            'd-MMM-y h:m:s.FFF tt',
	            'd-MMMM-y h:m:s.FFF tt',
	            'd-M-yyyy h:m:s.FFF tt',
	            'd-MMM-yyyy h:m:s.FFF tt',
	            'd-MMMM-yyyy h:m:s.FFF tt',
	            'yyyy-M-d h:m:s.FFF tt'
	        ]
	    ];
	    var defaultDateTimeFormatter = function () {
	        return {
	            pattern: defaultPattern,
	            formatter: ['d-mmm', 'mmm-yy', getDateTimeFormat().shortDatePattern, 'h:mm', 'h:mm:ss', 'h:mm:ss.0',
	                getDateTimeFormat().shortDatePattern + ' h:mm',
	                getDateTimeFormat().shortDatePattern + ' h:mm:ss',
	                getDateTimeFormat().shortDatePattern + ' h:mm:ss.0'
	            ]
	        };
	    };
	
	    function appendNumberFormatPro(partLocaleID, dbNumberFormatPart, cultureName) {
	        this._partLocaleID = partLocaleID;
	        this._partDBNumberFormat = dbNumberFormatPart;
	        this.cultureName = cultureName;
	    }
	
	    function appendFormatBasePro(token) {
	        this._originalToken = token;
	    }
	
	    function getFormatPartType(token) {
	        var type;
	        var content = trimSquareBracket(token);
	        if (!content || content === stringEx._Empty) {
	            return type;
	        }
	        var c = content[0];
	        if (['<', '>', '='].indexOf(c) > -1) {
	            type = ConditionalFormatPart;
	            type.Name = 'ConditionalFormatPart';
	        } else if (stringHelper._startsWith(content, 'DBNum', true )) {
	            type = DBNumberFormatPart;
	            type.Name = 'DBNumberFormatPart';
	        } else if (isEquals(content[0], '$', false) && content.indexOf('-') > -1) {
	            type = LocaleIDFormatPart;
	            type.Name = 'LocaleIDFormatPart';
	        } else if (isABSTimePart(content)) {
	            type = ABSTimeFormatPart;
	            type.Name = 'ABSTimeFormatPart';
	        } else if (content.indexOf('$') < 0 && content.length >= 3) {
	            type = ColorFormatPart;
	            type.Name = 'ColorFormatPart';
	        }
	
	        return type;
	    }
	
	    function getFormatterType(content, isConditionalFormat) {
	        var isDigitalOrText = false;
	        var type;
	        content = content ? content.toString() : stringEx._Empty;
	        if (containsKeywords(content, ['general'])) {
	            type = NumberFormatGeneral;
	        } else if (NumberFormatDateTime._evaluateFormat(content)) {
	            type = NumberFormatDateTime;
	        } else if (containsKeywords(content, ['E+', 'E-', '#', '.', ',', '%', '0', '/', '?']) || isConditionalFormat) {
	            isDigitalOrText = true;
	            type = NumberFormatDigital;
	        } else {
	            isDigitalOrText = true;
	            type = NumberFormatText;
	        }
	        return {
	            _isDigitalOrText: isDigitalOrText,
	            _type: type
	        };
	    }
	
	    function isABSTimePart(content) {
	        var contentLowerCase = toLowerCase(content);
	        var c = contentLowerCase[0];
	        if (c !== 'h' && c !== 'm' && c !== 's') {
	            return false;
	        }
	        for (var n = 1; n < contentLowerCase.length; n++) {
	            if (c !== contentLowerCase[n]) {
	                return false;
	            }
	        }
	        return true;
	    }
	
	    function getDBNumber(locale, dbNumberType, cultureName) {
	        var cultureInfo;
	        if (locale) {
	            cultureInfo = locale.cultureInfo();
	        } else {
	            cultureInfo = getCultureInfo(cultureName);
	        }
	        var dbNumbers = cultureInfo.NumberFormat.dbNumber;
	        if (dbNumbers) {
	            return dbNumbers[dbNumberType];
	        }
	        return keyword_null;
	    }
	
	    function convertDateTimeNumberString(num, value, locale, dbNumber, cultureName) {
	        var strTemp = num;
	        if (!isNullOrUndefined(dbNumber) && value instanceof Date) {
	            var dbNumberTemp = getDBNumber(locale, dbNumber.type, cultureName);
	            strTemp = dbNumber._replaceNumberString(strTemp, dbNumberTemp, true);
	            if (dbNumber.type === 1) {
	                strTemp = strTemp.replace(new RegExp(DBNum1Ten, 'g'), DBNum1ExcelTen);
	            }
	            strTemp = strTemp.replace('@' + dateTimeTokens._yearFourDigit, dateTimeHelper._localeFormat(value, dateTimeTokens._yearFourDigit));
	            strTemp = strTemp.replace('@' + dateTimeTokens._yearTwoDigit, dateTimeHelper._localeFormat(value, dateTimeTokens._yearTwoDigit));
	            strTemp = dbNumber._replaceNumberString(strTemp, dbNumberTemp, false);
	        }
	        return strTemp;
	    }
	
	    function convertNumberString(num, isGeneralNumber, locale, dbNumber, cultureName) {
	        if (!isNullOrUndefined(dbNumber)) {
	            var dbNumberTemp = getDBNumber(locale, dbNumber.type, cultureName);
	            if (!isNullOrUndefined(dbNumberTemp)) {
	                var isFractional = false;
	                var fractional;
	                var cultureInfo = getCultureInfo(cultureName);
	                var head;
	                for (var i = 0, len = num.length; i < len; i++) {
	                    if (num[i].type === 'decimalSeparator') {
	                        isFractional = true;
	                        num[i].value = dbNumber._replaceNumberString(num[i].value, dbNumberTemp, isGeneralNumber);
	                        fractional = num[i].value;
	                    }
	                    if (num[i].type === 'number') {
	                        if (isFractional) {
	                            num[i].value = dbNumber._replaceNumberString(fractional + num[i].value, dbNumberTemp, isGeneralNumber).slice(1);
	                        } else {
	                            num[i].value = dbNumber._replaceNumberString(num[i].value, dbNumberTemp, isGeneralNumber);
	                        }
	                       
	                        if (cultureInfo.name() === 'ja-JP' &&
	                            num[i].value.length > 1 && ((head = num[i].value.substr(0, 2)) === '\u4e00\u5343' || head === '\u4e00\u767e' || head === '\u4e00\u5341')) {
	                           
	                            num[i].value = num[i].value.substr(1);
	                        }
	                    }
	
	                }
	                return num;
	            }
	        }
	        return num;
	    }
	
	
	    var CustomNumberFormat = (function () {
	        function CustomNumberFormat(format, cultureName) {
	            var self = this;
	            if (arguments.length === 0) {
	                self.formatCached = 'General';
	                self._numberFormat = new NumberFormatGeneral();
	            } else {
	                self._init(format, cultureName);
	            }
	        }
	
	       
	        var proNames = ['colorFormatPart', 'conditionalFormatPart', 'dbNumberFormatPart', 'localeIDFormatPart'];
	
	        function checkFormatter(str) {
	            if (!str || str === stringEx._Empty) {
	                throw new Error(SR().Exp_TokenIllegal);
	            }
	        }
	
	        function preProcessPart(part) {
	            checkFormatter(part);
	            var content = trimSquareBracket(part);
	            checkFormatter(content);
	            return content;
	        }
	
	        function partToNormalStr(part) {
	            var content = preProcessPart(part);            
	            if (content[0] === '$') {
	                content = content.slice(1);
	            }
	            return '"' + content + '"';
	        }
	
	        CustomNumberFormat.prototype = {
	            _init: function (format, cultureName) {
	                if (format === keyword_null || format === keyword_undefined) {
	                    throwFormatEx();
	                }
	                var formatCache = format;
	                var self = this;
	                self.formatCached = format;
	                var contentToken = '';
	                var token = '';
	                var isInFormatPart = false;
	                var absTimePart = [];
	               
	               
	               
	                for (var index = 0; index < format.length; index++) {
	                    var c = format[index];
	                    if (c === '[') {
	                        if (isInFormatPart) {
	                            throwFormatEx();
	                        }
	
	                       
	                        if (token) {
	                            if (!contentToken) {
	                                contentToken = '';
	                            }
	                            contentToken += token;
	                        }
	                        token = c.toString();
	                        isInFormatPart = true;
	                    } else if (c === ']') {
	                        if (!isInFormatPart) {
	                            throwFormatEx();
	                        }
	
	                        if (token) {
	                            token += c;
	                            var part = token.toString();
	                            var partType = getFormatPartType(token.toString());
	                            if (partType) {
	                                if (partType.Name === 'ABSTimeFormatPart') {
	                                    absTimePart.push(new partType(preProcessPart(part), part));
	                                    contentToken += token;
	                                } else {
	                                    self.addPart(partType, part);
	                                }
	                            } else {
	                               
	                               
	                               
	                               
	                               
	                               
	                                var partString = partToNormalStr(part);
	                                contentToken += partString;
	                                formatCache = replaceKeyword(format, part, partString);
	                            }
	                            token = '';
	                        } else {
	                            throwFormatEx();
	                        }
	
	                        isInFormatPart = false;
	                    } else {
	                        token += c;
	                    }
	                }
	                if (token) {
	                    if (isInFormatPart) {
	                        throwFormatEx();
	                    } else {
	                        contentToken += token;
	                    }
	                } else if (!contentToken) {
	                   
	                   
	                   
	                    contentToken = self._getDBNumberDefaultFormat();
	                }
	               
	                if (self.localeIDFormatPart) {
	                    cultureName = self.localeIDFormatPart.cultureInfo().name();
	                }
	                var isConditionalFormat = self.conditionalFormatPart;
	                var result = getFormatterType(contentToken, isConditionalFormat);
	                var formatType = result._type;
	                var formatTemp = result._isDigitalOrText ? formatCache : contentToken;
	                if (formatType) {
	                    self._numberFormat = new formatType(formatTemp, self.localeIDFormatPart, self.dbNumberFormatPart, cultureName, absTimePart.length > 0 ? absTimePart : keyword_null);
	                } else {
	                    throwFormatEx();
	                }
	            },            
	            _getDBNumberDefaultFormat: function () {
	                var _this = this, retFormat = '';
	                if (_this.dbNumberFormatPart) {
	                    var hasOtherPart = proNames.some(function (item) {
	                        return item !== 'dbNumberFormatPart' && _this[item];
	                    });
	                    if (!hasOtherPart) {
	                        retFormat = 'General';
	                    }
	                }
	                return retFormat;
	            },
	            formatString: function () {
	                var self = this;
	                var formatString = '';
	                for (var i = 0, len = proNames.length; i < len; i++) {
	                    var proName = proNames[i];
	                    if (self[proName]) {
	                        formatString += self[proName].toString();
	                    }
	                }
	                formatString += (self._numberFormat.formatString());
	                return formatString;
	            },
	            addPart: function (type, part) {
	                var self = this;
	                var content = preProcessPart(part);
	                for (var i = 0, len = proNames.length; i < len; i++) {
	                    var proName = proNames[i];
	                    if (isEquals(proName, type.Name, true)) {
	                        if (!self[proName]) {
	                            self[proName] = new type(content, part);
	                        } else {
	                            throw new Error(SR().Exp_DuplicatedDescriptor);
	                        }
	                    }
	                }
	            },
	            format: function (obj) {
	                return this._numberFormat.format(obj);
	            },
	            parse: function (str) {
	                return this._numberFormat.parse(str);
	            }
	        };
	        return CustomNumberFormat;
	    })();
	
	    var GeneralFormatter = (function (_super) {
	        Types._inherit(GeneralFormatter, _super);
	       
	        
	        function GeneralFormatter(format, cultureName) {
	            var self = this;
	            self._isSingleFormatterInfo = true;
	            self.PropertyChanged = [];
	            if (stringEx._isNullOrEmpty(format)) {
	                format = 'General';
	            }
	
	            self.formatCached = format;
	            self.cultureName = cultureName;
	            self.init();
	        }
	
	       
	        function defFormatter(formatStr) {
	            var t = GeneralFormatter[formatStr];
	            if (!t) {
	                t = new GeneralFormatter(formatStr);
	                GeneralFormatter[formatStr] = t;
	            }
	            return t;
	        }
	
	        GeneralFormatter.prototype = {
	            toJSON: function () {
	                var self = this;
	                var jsData = {
	                    formatCached: self.formatCached
	                };
	                if (self.cultureName) {
	                    jsData['customerCultureName'] = self.cultureName;
	                }
	                if (toLowerCase(self.formatCached) === 'general') {
	                    delete jsData.formatCached;
	                }
	                return jsData;
	            },
	
	            hasFormatedColor: function () {
	                var self = this;
	                for (var pro in formatPart) {
	                    if (formatPart.hasOwnProperty(pro)) {
	                        var expression = self.getFormatter(formatPart[pro]);
	                        if (expression && expression.colorFormatPart) {
	                            return true;
	                        }
	                    }
	                }
	                return false;
	            },
	           
	            
	            formatString: function (value) {
	                var self = this;
	                if (arguments.length === 0) {
	                   
	                    var formatStringBuilder = stringEx._Empty;
	                    for (var i = 0, len = self.formatters.length; i < len; i++) {
	                        var p = self.formatters[i];
	                        formatStringBuilder += (p.formatString());
	                        if (i !== len - 1) {
	                            formatStringBuilder += (';');
	                        }
	                    }
	                    return formatStringBuilder;
	                }
	               
	                if (!value) {
	                    throw new Error(SR().Exp_ValueIsNull);
	                }
	                self.formatters = keyword_null;
	                self.formatCached = value;
	                self.init();
	                self._raisePropertyChanged('formatString');
	                return self;
	            },
	            getFormatter: function (index) {
	                var self = this;
	                return self.formatters && self.formatters[index];
	            },
	
	            getPreferredEditingFormatter: function (obj) {
	                var dateTimeFormatInfo = getDateTimeFormat(this.cultureName);
	                if (isType(obj, 'DateTime')) {
	                    var addF = (obj.getHours() === 0 && obj.getMinutes() === 0 && obj.getSeconds() === 0 && obj.getMilliseconds() === 0) ? '' : ' h:mm:ss';
	                    return defFormatter(dateTimeFormatInfo.shortDatePattern + addF);
	                } else if (isType(obj, 'TimeSpan')) {
	                    return defFormatter(dateTimeFormatInfo.longTimePattern);
	                } else if (Types._isNumber(obj, this.cultureName)) {
	                    var value = Types._toDouble(obj);
	                    if (value >= 1E20 || value <= 1E-17 && value > 0 || value <= -1E20 || value < 0 && value >= -1E-17) {
	                        return defFormatter('0.##E+00');
	                    }
	                    return defFormatter(generalNumberFormatDigit);
	                }
	                return defFormatter('General');
	            },
	
	            getPreferredDisplayFormatter: function (s, valueRef) {
	               
	               
	               
	                var self = this;
	                if (!valueRef) {
	                    valueRef = {'value': keyword_null};
	                }
	                valueRef.value = keyword_null;
	                if (stringEx._isNullOrEmpty(s)) {
	                    return new GeneralFormatter();
	                }
	                var strTemp = s;
	                var v = valueRef.value = self.parse(strTemp);
	                if (isType(v, 'DateTime') || isType(v, 'TimeSpan')) {
	                    var dateTimeFormatter = defaultDateTimeFormatter();
	                    var pattern = dateTimeFormatter.pattern;
	                    var formatter = dateTimeFormatter.formatter;
	                    for (var i = 0; i < pattern.length; i++) {
	                        var p = pattern[i];
	                        for (var j = 0; j < p.length; j++) {
	                            var f = p[j];
	                            var dt = dateTimeHelper._parseLocale(s, f);
	                            if (dt && (dt - v === 0)) {
	                                return new GeneralFormatter(formatter[i]);
	                            }
	                        }
	                    }
	                } else if (Types._isNumber(v, self.cultureName)) {
	                    var numberFormat = getNumberFormat(self.cultureName);
	                    var currencySymbol = numberFormat.currencySymbol;
	                    var decimalSymbol = numberFormat.numberDecimalSeparator;
	                    var percentSymbol = numberFormat.percentSymbol;
	                    var numberGroupSymbol = numberFormat.numberGroupSeparator;
	                    var eSymbol = 'E';
	                    var contains = stringHelper._contains;
	                    var hasDecimalSymbol = contains(strTemp, decimalSymbol);
	                    var decimalPart = hasDecimalSymbol ? '.00' : '';
	                    if (strTemp[0] === currencySymbol) {
	                        return defFormatter(stringEx._format('{0}#,##0{1};[Red]({0}#,##0{1})', currencySymbol, decimalPart));
	                    } else if (contains(strTemp, eSymbol, 1)) {
	                        return defFormatter('0.00E+00');
	                    } else if (strTemp[0].toString() === percentSymbol || strTemp[strTemp.length - 1].toString() === percentSymbol) {
	                        return defFormatter(stringEx._format('0{0}%', decimalPart));
	                    } else if (contains(strTemp, numberGroupSymbol)) {
	                        return defFormatter(stringEx._format('#,##0{0}', decimalPart));
	                    }
	                }
	                return defFormatter('General');
	            },
	           
	            
	            format: function (obj, formattedData) {
	                if (isType(obj, 'boolean')) {
	                    return obj.toString().toUpperCase();
	                }
	                var formatInfo = this._getFormatInfo(obj);
	                if (formatInfo) {
	                    var colorPart = formatInfo.colorFormatPart;
	                    if (formattedData && colorPart) {
	                        formattedData.conditionalForeColor = formattedData.value = colorPart.foreColor;
	                    }
	                   
	                    var value = 0;
	                    var isNumber = Types._isNumber(obj, self.cultureName);
	                    if (isNumber) {
	                        value = Types._toDouble(obj);
	                    }
	
	                    var result = stringEx._Empty;
	                    try {
	                        if (isNumber && formatInfo === this.getFormatter(formatPart._negative)) {
	                            result = formatInfo.format(Math_abs(value));
	                        } else {
	                            result = formatInfo.value; 
	                            if (result === keyword_undefined) {
	                                result = formatInfo.format(obj);
	                            }
	                        }
	                        if (formattedData) {
	                            formattedData.content = isArray(result) ? result : [{type: 'text', value: result}];
	                        }
	                        if (isArray(result)) {
	                            result = numberHelper._formatObjectToSrting(result);
	                        }
	                    } catch (Exception) {
	                        if (isType(obj, 'string')) {
	                            result = obj.toString();
	                        }
	                    }
	                    return result;
	                }
	                if (isNumber && value < 0) {
	                    return '-'.toString();
	                }
	                if (isType(obj, 'string')) {
	                    return obj.toString();
	                }
	                return (obj === keyword_undefined || obj === keyword_null) ? stringEx._Empty : obj.toString();
	            },
	           
	            
	            parse: function (str) {
	                var self = this;
	                if (self.formatters && self.formatters.length > 0) {
	                    return self.formatters[0].parse(str);
	                }
	                return keyword_null;
	            },
	           
	           
	            init: function () {
	                var self = this;
	                var format = self.formatCached;
	                if (stringEx._isNullOrEmpty(format)) {
	                    throwFormatEx();
	                }
	                self.formatters = [];
	                var items = format.split(';');
	                self._isSingleFormatterInfo = (items.length === 1);
	                if (!items || items.length < 1 || items.length > 4) {
	                    throwFormatEx();
	                }
	                for (var index = 0; index < items.length; index++) {
	                    var formatItem = new CustomNumberFormat(items[index], self.cultureName);
	                    self.formatters.push(formatItem);
	                }
	                if (!self.getFormatter(formatPart._positive)) {
	                    throwFormatEx();
	                }
	            },
	            _getFormatInfo: function (obj) {
	               
	               
	               
	                var self = this;
	                var positive = self.getFormatter(formatPart._positive);
	                var hasPCondition = positive && positive.conditionalFormatPart;
	                var text = self.getFormatter(formatPart._text);
	                if (typeof (obj) === 'string' && isNaN(obj)) {
	                    if (text) {
	                        return text;
	                    }
	                    if (hasPCondition) {
	                        return obj;
	                    }
	                    return positive;   
	                } else if (Types._isNumber(obj, self.cultureName) || isType(obj, 'boolean')) {
	                    var negative = self.getFormatter(formatPart._negative);
	                    var zero = self.getFormatter(formatPart._zero);
	                    var value = Types._toDouble(obj);
	                    var positiveMatchCondition = hasPCondition && positive.conditionalFormatPart.isMeetCondition(value);
	                    var hasNCondition = negative && negative.conditionalFormatPart;
	                    var negativeMatchCondition = hasNCondition && negative.conditionalFormatPart.isMeetCondition(value);
	                    var resultFormatter;
	
	                    if (self._isSingleFormatterInfo || (hasPCondition ? positiveMatchCondition : (value > 0 || (value === 0 && !zero)))) {
	                        resultFormatter = positive;
	                    } else if (hasNCondition ? negativeMatchCondition : value < 0) {
	                        resultFormatter = negative;
	                    } else if (zero) {
	                        resultFormatter = zero;
	                    } else if (negative) {
	                       
	                       
	                       
	                       
	                       
	                        if (hasPCondition && hasNCondition) {
	                            var result = zero === '' ? '' : value + '';  
	                           
	                            return { value: result };
	                           
	                           
	                           
	                           
	                        }
	                        resultFormatter = negative;
	                    }
	                    return resultFormatter;
	                }
	                return keyword_null;
	            },
	            _raisePropertyChanged: function (propertyName) {
	                var self = this;
	                if (self.PropertyChanged) {
	                    for (var index = 0; index < self.PropertyChanged.length; index++) {
	                        var method = self.PropertyChanged[index];
	                        if (typeof (method) === 'function') {
	                            method(self, propertyName);
	                        }
	                    }
	                }
	            }
	        };
	
	        return GeneralFormatter;
	    })(FormatterBase);
	    Plugins.GeneralFormatter = GeneralFormatter;
	
	    Plugins.FormatterBase = FormatterBase;
	
	    module.exports = Plugins;
	
	}());

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_TokenIsNull: 'token is null',
	        Exp_InvalidBackslash: 'the \'\\\' cannot be evaluated',
	        Exp_FormatIllegal: 'format is illegal.',
	        Exp_ValueIsNull: 'value is null',
	        Exp_DuplicatedDescriptor: 'The type of descriptor was added.',
	        Exp_TokenIllegal: 'token is illegal.',
	        Exp_ValueIllegal: 'value is illegal.',
	        Exp_InvalidCast: 'InvalidCastException'
	    };
	
	}());

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    module.exports = __webpack_require__(20);
	
	}());

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(1);
	    var isNullOrUndefined = Common._Types._isNullOrUndefined;
	
	    var _ColorHelper = Common._ColorHelper;
	    var getLighterColor = _ColorHelper._getLighterColor;
	    var parseColor = _ColorHelper._fromString;
	    var ArrayHelper = Common._ArrayHelper;
	    var ArrayHelper_indexOf = ArrayHelper._indexOf;
	
	    var exports = {};
	    var __invalidValuePlaceHolder = exports.__invalidValuePlaceHolder = {};
	
	    var keyword_null = null, keyword_undefined = void 0, Math_floor = Math.floor, Math_PI = Math.PI,
	        Math_sin = Math.sin,
	        Math_cos = Math.cos, Math_min = Math.min, Math_max = Math.max, Math_round = Math.round, Math_pow = Math.pow,
	        Math_sqrt = Math.sqrt, Math_abs = Math.abs, Math_ceil = Math.ceil, const_undefined = 'undefined',
	        const_string = 'string';
	    var isNotANumber = isNaN;
	    var convertFloat = parseFloat;
	    var NUMBER_MAX_VALUE = Number.MAX_VALUE;
	    var DEFAULT_COLOR1 = '#969696';
	    var DEFAULT_COLOR2 = '#CB0000';
	    var DEFAULT_COLOR3 = '#646464';
	    var DEFAULT_COLOR4 = '#DCDCDC';
	    var WHITE_COLOR = 'white';
	    var BLACK_COLOR = 'black';
	    var BLUE_COLOR = 'blue';
	    var GREEN_COLOR = 'green';
	    var RED_COLOR = 'red';
	    var LEFT_ALIGN = 'left';
	    var RIGHT_ALIGN = 'right';
	    var CENTER_ALIGN = 'center';
	    var TOP_ALIGN = 'top';
	    var BOTTOM_ALIGN = 'bottom';
	    var MIDDLE_ALIGN = 'middle';
	    var PX_ARIAL = 'px Arial';
	
	    function Point(x, y) {
	        this.x = x;
	        this.y = y;
	    }
	
	    function Rect(x, y, width, height) {
	        var self = this;
	        self.x = x;
	        self.y = y;
	        self.width = width;
	        self.height = height;
	    }
	
	    function getMinOrMax(array, isMin) {
	        var t = array[0];
	        var r = t && t.value ? t.value : t, temp;
	        for (var i = 1, length = array.length; i < length; i++) {
	            t = array[i];
	            temp = t && t.value ? t.value : t;
	            if (isMin && r > temp || !isMin && r < temp) {
	                r = temp;
	            }
	        }
	        return r;
	    }
	
	    function drawLine(context, x1, y1, x2, y2, strokeStyle, lineWidth) {
	        if (strokeStyle) {
	            context.strokeStyle = strokeStyle;
	        }
	        if (lineWidth) {
	            context.lineWidth = lineWidth;
	        }
	
	        context.beginPath();
	        context.moveTo(x1, y1);
	        context.lineTo(x2, y2);
	        context.stroke();
	    }
	
	    function drawLines(context, condition, x1, y1, x2, y2, x3, y3, x4, y4, strokeStyle, lineWidth) {         if (condition) {
	            drawLine(context, x1, y1, x2, y2, strokeStyle, lineWidth);
	        } else {
	            drawLine(context, x3, y3, x4, y4, strokeStyle, lineWidth);
	        }
	    }
	
	    function getTextColor(backColor) {
	        if (_ColorHelper._getBrightness(_ColorHelper._fromString(backColor)) < 255 / 2) {
	            return WHITE_COLOR;
	        }
	        return BLACK_COLOR;
	    }
	
	    function getPlotRect(x, y, width, height, margin, leftOffset, vertical) {
	        var rect = {};
	        if (vertical) {
	            rect.left = y + margin + leftOffset;
	            rect.width = height - 2 * margin;
	            rect.top = x + margin;
	            rect.height = width - 2 * margin;
	        } else {
	            rect.left = x + margin;
	            rect.width = width - 2 * margin;
	            rect.top = y + margin;
	            rect.height = height - 2 * margin;
	        }
	
	        return rect;
	    }
	
	    function getSum(array, condition) {
	        var sum = 0;
	        for (var i = 0, len = array.length; i < len; i++) {
	            sum += (condition && !condition(array[i])) ? 0 : array[i];
	        }
	        return sum;
	    }
	
	    function fixValues(values, condition, getValue, processValues) {
	        var newValues = [], temp;
	        for (var i = 0, j = 0, length = values.length; i < length; i++) {
	            if (condition) {
	                if (condition(values[i])) {
	                    newValues[j++] = getValue ? getValue(values[i]) : values[i];
	                } else {           
	                    newValues[j++] = 0;
	                }
	            } else {
	                temp = convertFloat(values[i]);
	                if (!isNotANumber(temp) && isFinite(temp)) {
	                    newValues[j++] = temp;
	                }
	            }
	        }
	        if (processValues) {
	            processValues(newValues);
	        }
	
	        return newValues;
	    }
	
	    function paintRect(ctx, x, y, width, height, fillStyle) {
	        var endX = Math_round(x + width), endY = Math_round(y + height);
	        x = Math_round(x);
	        y = Math_round(y);
	        width = Math_round(endX - x);
	        height = Math_round(endY - y);
	
	        ctx.beginPath();
	        ctx.fillStyle = fillStyle;
	        ctx.fillRect(x, y, width, height);
	        ctx.fill();
	    }
	
	    function adjustValue(value, max, min) {
	        value = Math_min(value, max);
	        value = Math_max(value, min);
	        return value;
	    }
	
	    function clipContext(context, x, y, width, height) {
	        context.save();
	        context.rect(x, y, width, height);
	        context.clip();
	    }
	
	   
	    function pieSparkline_paint(context, value, x, y, width, height) {
	        var centerX = x + width / 2, centerY = y + height / 2, margin = 5,
	            radius = Math_min(width, height) / 2 - margin,
	            fromAngle = -0.5 * Math_PI, toAngle, XOnCircle = centerX + radius * Math_cos(fromAngle),
	            YOnCircle = centerY + radius * Math_sin(fromAngle), XOnCircleCacheArray = [], YOnCircleCacheArray = [];
	        if (radius <= 0) {
	            return;
	        }
	        var values = fixValues(value.values,
	            function (v) {
	                return !isNullOrUndefined(v) && !isNotANumber(v) && isFinite(v);
	            },
	            function (v) {
	                return Math_abs(v);
	            },
	            function (needFixedValues) {
	                if (needFixedValues.length === 1) {
	                    needFixedValues[1] = 1 - needFixedValues[0];
	                }
	            });
	        var length = values.length, colors = pieSparkline_fixColors(length, value.colors);
	        var sum = getSum(values), i;
	
	        context.save();
	       
	        for (i = 0; i < length; i++) {
	            toAngle = fromAngle + values[i] / sum * 2 * Math_PI;
	            context.beginPath();
	            context.moveTo(centerX, centerY);
	            context.lineTo(XOnCircle, YOnCircle);
	            context.arc(centerX, centerY, radius, fromAngle, toAngle, false);
	            context.lineTo(centerX, centerY);
	            context.fillStyle = colors[i];
	            context.fill();
	
	            XOnCircleCacheArray.push(XOnCircle);
	            YOnCircleCacheArray.push(YOnCircle);
	
	            fromAngle = toAngle;
	            XOnCircle = centerX + radius * Math_cos(fromAngle);
	            YOnCircle = centerY + radius * Math_sin(fromAngle);
	        }
	       
	        for (i = 0; i < length; i++) {
	            drawLine(context, centerX, centerY, XOnCircleCacheArray[i], YOnCircleCacheArray[i], WHITE_COLOR);
	        }
	
	        context.restore();
	    }
	
	    function pieSparkline_fixColors(valueCount, colors) {
	        var newColors = [], colorCount = colors.length;
	        if (valueCount <= colorCount) {
	            newColors = colors.slice(0, valueCount);
	        } else {
	            if (colorCount === 0) {
	                newColors.push('darkgray');
	                colorCount = 1;
	            } else {
	                newColors = colors.slice(0);
	            }
	            var baseColors = [], color, len = valueCount - colorCount + 1, i;
	            for (i = 0; i < colorCount; i++) {
	                baseColors[i] = parseColor(newColors[i]);
	            }
	            for (i = colorCount; i < valueCount; i++) {
	                color = baseColors[i % colorCount];
	                for (var pro in color) {
	                    if (color.hasOwnProperty(pro)) {
	                        var pValue = color[pro];
	                        color[pro] = Math_floor(pValue - (pValue / len) * (i / colorCount));
	                    }
	                }
	
	                color.a = 255;
	                newColors[i] = _ColorHelper._toString(color);
	            }
	        }
	        return newColors;
	    }
	
	   
	
	   
	    function AreaPoint(x, y, value) {
	        this.x = x;
	        this.y = y;
	        this.value = value;
	    }
	
	    function areaSparkline_paint(context, value, x, y, width, height) {
	        context.save();
	        var points = value.points, mini = value.mini, maxi = value.maxi, line1 = value.line1, line2 = value.line2,
	            colorPositive = value.colorPositive, colorNegative = value.colorNegative, margin = 5,
	            sngMin, sngMax, threshold, pointsCount, plotLeft, plotTop, plotWidth, plotHeight, sngIntvX, sngIntvY;
	        points = fixValues(points, function (v) {
	            return !isNullOrUndefined(v) && !isNotANumber(v) && isFinite(v);
	        });
	        colorPositive = isNullOrUndefined(colorPositive) ? '#787878' : colorPositive;
	        colorNegative = isNullOrUndefined(colorNegative) ? DEFAULT_COLOR2 : colorNegative;
	
	        var maxTag = getMinOrMax(points, false);
	        maxi = isNullOrUndefined(maxi) ? maxTag : maxi;
	        sngMax = Math_max(maxi, maxTag);
	        var minTag = getMinOrMax(points, true);
	        mini = isNullOrUndefined(mini) ? minTag : mini;
	        sngMin = Math_min(mini, minTag);
	        sngMin = sngMin > 0 ? 0 : sngMin;
	        sngMax = sngMax < 0 ? 0 : sngMax;
	        threshold = 0;
	        threshold = threshold > sngMax ? sngMax : threshold;
	        threshold = threshold < sngMin ? sngMin - 1 : threshold;
	        pointsCount = points.length;
	        var rect = getPlotRect(x, y, width, height, margin);
	        plotLeft = rect.left;
	        plotTop = rect.top;
	        plotWidth = rect.width;
	        plotHeight = rect.height;
	        sngIntvX = plotWidth / (pointsCount - 1);
	        sngIntvY = (sngMax - sngMin) / plotHeight;
	       
	        var polyArray = [], currentPoint, poly, prevPoly, thresholdX,
	            thresholdY = plotTop + (sngMax - threshold) / sngIntvY,
	            currentPointX, currentPointY;
	        for (var i = 0; i < pointsCount; i++) {
	            currentPoint = points[i];
	            currentPointX = plotLeft + sngIntvX * i;
	            currentPointY = plotTop + (sngMax - currentPoint) / sngIntvY;
	            if (i === 0) {
	                polyArray.push(new AreaPoint(currentPointX, thresholdY, threshold));
	            }
	            if (i > 0 && currentPoint * points[i - 1] < 0) {
	                prevPoly = polyArray[polyArray.length - 1];
	                if (prevPoly) {
	                    thresholdX = areaSparkline_getXInStraightLine(prevPoly.x, prevPoly.y, currentPointX, currentPointY, thresholdY);
	                    polyArray.push(new AreaPoint(thresholdX, thresholdY, threshold));
	                }
	            }
	            polyArray.push(new AreaPoint(currentPointX, currentPointY, currentPoint));
	            if (i === pointsCount - 1) {
	                polyArray.push(new AreaPoint(currentPointX, thresholdY, threshold));
	            }
	        }
	        context.beginPath();
	        for (var k = 0, polyArrayLength = polyArray.length; k < polyArrayLength; k++) {
	            poly = polyArray[k];
	            if (poly) {
	                if (k === 0) {
	                    context.moveTo(poly.x, poly.y);
	                } else {
	                    context.lineTo(poly.x, poly.y);
	                }
	                prevPoly = polyArray[k - 1];
	                if (poly.value === threshold && prevPoly) {
	                    context.fillStyle = prevPoly.value > threshold ? colorPositive : colorNegative;
	                    context.fill();
	                    if (k !== polyArrayLength - 1) {
	                        context.beginPath();
	                        context.moveTo(poly.x, poly.y);
	                    }
	                }
	            }
	        }
	
	       
	        drawAreaLine(line1);
	       
	        drawAreaLine(line2);
	        context.restore();
	
	        function drawAreaLine(line) {
	            if (line !== keyword_null || typeof line === const_undefined) {
	                var lineValue = adjustValue(line, sngMax, sngMin);
	                var adjustY = sngIntvY !== 0 ? (sngMax - lineValue) / sngIntvY : plotHeight / 2;
	                var linePosition = Math_round(plotTop + adjustY) - 0.5;
	                drawLine(context, plotLeft, linePosition, plotLeft + plotWidth, linePosition, BLUE_COLOR);
	            }
	        }
	    }
	
	    function areaSparkline_getXInStraightLine(x1, y1, x2, y2, y) {
	        return ((y1 - y) * x2 + (y - y2) * x1) / (y1 - y2);
	    }
	
	   
	
	   
	    function scatterSparkline_paint(context, value, xVal, yVal, width, height) {
	        var points1 = value.points1, points2 = value.points2, minX = value.minX, maxX = value.maxX, minY = value.minY,
	            maxY = value.maxY, hLine = value.hLine, vLine = value.vLine, xMinZone = value.xMinZone,
	            xMaxZone = value.xMaxZone,
	            yMinZone = value.yMinZone, yMaxZone = value.yMaxZone, tags = value.tags, drawSymbol = value.drawSymbol,
	            needDrawLines = value.drawLines, color1 = value.color1, color2 = value.color2, dash = value.dash,
	            symbolSize = 4,
	            scatterPoints1, scatterPoints2, dblMinY, dblMaxY, dblMinX, dblMaxX, i, point, length, dblXLeft,
	            dblYLeft, dblXRight, dblYRight, saveX, saveY, saveX2, saveY2, tagMinX, tagMinY, tagMaxX, tagMaxY,
	            linePosition;
	        var rect = getPlotRect(xVal, yVal, width, height, 5);
	        var plotLeft = rect.left, plotTop = rect.top, plotWidth = rect.width, plotHeight = rect.height;
	        if (!points1 || points1.length <= 0) {
	            return;
	        }
	        scatterPoints1 = scatterSparkline_getScatterPoints(points1);
	        if (scatterPoints1.length <= 0) {
	            return;
	        }
	        if (points2 && points2.length > 0) {
	            scatterPoints2 = scatterSparkline_getScatterPoints(points2);
	            if (scatterPoints2.length <= 0) {
	                return;
	            }
	        }
	        clipContext(context, xVal, yVal, width, height);
	        context.beginPath();
	        drawSymbol = isNullOrUndefined(drawSymbol) ? true : drawSymbol;
	        color1 = isNullOrUndefined(color1) ? DEFAULT_COLOR1 : color1;
	        color2 = isNullOrUndefined(color2) ? DEFAULT_COLOR2 : color2;
	
	        fixMinMaxValue(scatterPoints1, minY, maxY, minX, maxX);
	       
	        if (!isNullOrUndefined(xMinZone) && !isNullOrUndefined(xMaxZone) && !isNullOrUndefined(yMinZone) &&
	            !isNullOrUndefined(yMaxZone) && dblMinX <= xMinZone && xMinZone <= dblMaxX && dblMinX <= xMaxZone &&
	            xMaxZone <= dblMaxX && dblMinY <= yMinZone && yMinZone <= dblMaxY && dblMinY <= yMaxZone && yMaxZone <= dblMaxY) {
	            var zoneLeft = Math_max(dblMinX, xMinZone), zoneRight = Math_min(dblMaxX, xMaxZone),
	                zoneBottom = Math_max(dblMinY, yMinZone), zoneTop = Math_min(dblMaxY, yMaxZone);
	            if (zoneLeft >= zoneRight) {
	                zoneRight = zoneLeft + 1;
	            }
	            if (zoneBottom >= zoneTop) {
	                zoneTop = zoneBottom + 1;
	            }
	            paintRect(context, plotLeft + (zoneLeft - dblMinX) * plotWidth / (dblMaxX - dblMinX),
	                plotTop + (dblMaxY - zoneTop) * plotHeight / (dblMaxY - dblMinY),
	                (zoneRight - zoneLeft) * plotWidth / (dblMaxX - dblMinX),
	                (zoneTop - zoneBottom) * plotHeight / (dblMaxY - dblMinY), DEFAULT_COLOR4);
	        }
	       
	        tagMinX = -NUMBER_MAX_VALUE;
	        tagMinY = -NUMBER_MAX_VALUE;
	        tagMaxX = NUMBER_MAX_VALUE;
	        tagMaxY = NUMBER_MAX_VALUE;
	        for (i = 0, length = scatterPoints1.length; i < length - 1; i++) {
	            paintPoints(scatterPoints1, i, color1, strokeShape);
	            if (tags) {
	                if (i === 0) {
	                    if (saveY > tagMinY) {
	                        tagMinX = saveX;
	                        tagMinY = saveY;
	                    }
	                    if (saveY < tagMaxY) {
	                        tagMaxX = saveX;
	                        tagMaxY = saveY;
	                    }
	                }
	                if (saveY2 > tagMinY) {
	                    tagMinX = saveX2;
	                    tagMinY = saveY2;
	                }
	                if (saveY2 < tagMaxY) {
	                    tagMaxX = saveX2;
	                    tagMaxY = saveY2;
	                }
	            }
	        }
	       
	        if (scatterPoints2 && scatterPoints2.length > 0) {
	            fixMinMaxValue(scatterPoints2, dblMinY, dblMaxY, dblMinX, dblMaxX);
	            for (i = 0, length = scatterPoints2.length; i < length - 1; i++) {
	                paintPoints(scatterPoints2, i, color2, strokeRect);
	            }
	        }
	       
	        if (tags) {
	            fillShape(tagMinX, tagMinY, DEFAULT_COLOR2);
	            fillShape(tagMaxX, tagMaxY, '#0000FF');
	        }
	       
	        if (!isNullOrUndefined(hLine) && dblMinY <= hLine && hLine <= dblMaxY) {
	            linePosition = Math_round(plotTop + (dblMaxY - hLine) * plotHeight / (dblMaxY - dblMinY)) - 0.5;
	            scatterSparkline_paintLine(context, plotLeft, linePosition, plotLeft + plotWidth, linePosition, DEFAULT_COLOR2);
	        }
	       
	        if (!isNullOrUndefined(vLine) && dblMinX <= vLine && vLine <= dblMaxX) {
	            linePosition = Math_round(plotLeft + (vLine - dblMinX) * plotWidth / (dblMaxX - dblMinX)) - 0.5;
	            scatterSparkline_paintLine(context, linePosition, plotTop, linePosition, plotTop + plotHeight, DEFAULT_COLOR2);
	        }
	        function paintPoints(scatterPoints, index, color, drawFuncion) {
	            point = scatterPoints[index];
	            dblXLeft = point.x;
	            dblYLeft = point.y;
	            point = scatterPoints[index + 1];
	            dblXRight = point.x;
	            dblYRight = point.y;
	            saveX = plotLeft + (dblXLeft - dblMinX) * plotWidth / (dblMaxX - dblMinX);
	            saveX2 = plotLeft + (dblXRight - dblMinX) * plotWidth / (dblMaxX - dblMinX);
	            saveY = plotTop + (dblMaxY - dblYLeft) * plotHeight / (dblMaxY - dblMinY);
	            saveY2 = plotTop + (dblMaxY - dblYRight) * plotHeight / (dblMaxY - dblMinY);
	            if (needDrawLines) {
	                scatterSparkline_paintLine(context, saveX, saveY, saveX2, saveY2, color, dash);
	            }
	            if (drawSymbol) {
	                if (index === 0) {
	                    drawFuncion(saveX, saveY);
	                }
	                drawFuncion(saveX2, saveY2);
	            }
	        }
	
	        function fixMinMaxValue(scatterPoints, y1, y2, x1, x2) {
	            var minPoint = scatterSparkline_getMinOrMaxScatterPoint(scatterPoints, true);
	            var maxPoint = scatterSparkline_getMinOrMaxScatterPoint(scatterPoints, false);
	            dblMinY = isNullOrUndefined(minY) ? minPoint.y : y1;
	            dblMaxY = isNullOrUndefined(maxY) ? maxPoint.y : y2;
	            dblMinX = isNullOrUndefined(minX) ? minPoint.x : x1;
	            dblMaxX = isNullOrUndefined(maxX) ? maxPoint.x : x2;
	            dblMaxX = dblMinX >= dblMaxX ? dblMinX + 1 : dblMaxX;
	            dblMaxY = dblMinY >= dblMaxY ? dblMinY + 1 : dblMaxY;
	        }
	
	        function fillShape(x, y, fillStyle) {
	            context.beginPath();
	            context.arc(x - symbolSize / 2, y - symbolSize / 2, symbolSize / 2, 0, Math_PI * 2, false);
	            context.fillStyle = fillStyle;
	            context.fill();
	        }
	
	        function strokeShape(x, y) {
	            context.beginPath();
	            context.strokeStyle = color1;
	            context.arc(x - symbolSize / 2, y - symbolSize / 2, symbolSize / 2, 0, Math_PI * 2, false);
	            context.stroke();
	        }
	
	        function strokeRect(x, y) {
	            context.beginPath();
	            context.strokeStyle = color2;
	            context.strokeRect(x - symbolSize / 2, y - symbolSize / 2, symbolSize, symbolSize);
	        }
	
	        context.restore();
	    }
	
	    function scatterSparkline_getMinOrMaxScatterPoint(scatterPoints, isMin) {
	        var factor = isMin ? 1 : -1;
	        var coompareFn = isMin ? Math_min : Math_max;
	        var value = new Point(factor * NUMBER_MAX_VALUE, factor * NUMBER_MAX_VALUE), length = scatterPoints.length,
	            point;
	        for (var i = 0; i < length; i++) {
	            point = scatterPoints[i];
	            value.x = coompareFn(value.x, point.x);
	            value.y = coompareFn(value.y, point.y);
	        }
	        return value;
	    }
	
	    function scatterSparkline_getXInStraightLine(x1, x2, length, totalLength) {
	        return length / totalLength * (x2 - x1) + x1;
	    }
	
	    function scatterSparkline_paintLine(context, startX, startY, endX, endY, color, isDashed) {
	        if (isDashed) {
	            var totalLength = Math_sqrt(Math_pow(endX - startX, 2) + Math_pow(endY - startY, 2)), paintedLength = 0,
	                longLength = 6, shortLength = 2, intervalLength = 4;
	            var scatterPoints = [], minX, maxX, x, y;
	            if (startX <= endX) {
	                minX = startX;
	                maxX = endX;
	                x = startX;
	                y = startY;
	            } else {
	                minX = endX;
	                maxX = startX;
	                x = endX;
	                y = endY;
	            }
	           
	            var k = (endY - startY) / (endX - startX), b = startY - k * startX;
	            scatterPoints.push(new Point(x, y));
	            var offset = [longLength, intervalLength, shortLength, intervalLength];
	            while (paintedLength < totalLength) {
	                for (var i = 0, len = offset.length; i < len; i++) {
	                    paintedLength += offset[i];
	                    if (paintedLength <= totalLength) {
	                        x = scatterSparkline_getXInStraightLine(minX, maxX, paintedLength, totalLength);
	                        y = k * x + b;
	                        scatterPoints.push(new Point(x, y));
	                    }
	                }
	            }
	            for (var index = 0, length = scatterPoints.length; index < length - 1; index += 2) {
	                drawLine(context, scatterPoints[index].x, scatterPoints[index].y, scatterPoints[index + 1].x, scatterPoints[index + 1].y, color);
	            }
	        } else {
	            drawLine(context, startX, startY, endX, endY, color);
	        }
	    }
	
	    function scatterSparkline_getScatterPoints(points) {
	        var scatterPoints = [], rowCount, colCount;
	        rowCount = points.length;
	        if (rowCount > 0) {
	            colCount = points[0].length;
	            if (rowCount < colCount) {
	                if (rowCount >= 2) {
	                    for (var c = 0; c < colCount; c++) {
	                        scatterPoints.push(new Point(points[0][c], points[1][c]));
	                    }
	                }
	            } else if (colCount >= 2) {
	                for (var r = 0; r < rowCount; r++) {
	                    scatterPoints.push(new Point(points[r][0], points[r][1]));
	                }
	            }
	        }
	        return scatterPoints;
	    }
	
	   
	
	   
	    function bulletSparkline_paint(context, value, x, y, width, height) {
	        var measure = value.measure, target = value.target, maxi = value.maxi, good = value.good,
	            bad = value.bad, forecast = value.forecast, tickUnit = value.tickUnit, colorScheme = value.colorScheme,
	            vertical = value.vertical, margin = 5;
	        if (isNullOrUndefined(maxi) || maxi < 0) {
	            return;
	        }
	
	        measure = (isNullOrUndefined(measure) || measure < 0) ? 0 : measure;
	        good = (isNullOrUndefined(good) || good < 0) ? 0 : good;
	        bad = (isNullOrUndefined(bad) || bad < 0) ? 0 : bad;
	        target = isNullOrUndefined(target) ? 0 : target;
	        forecast = isNullOrUndefined(forecast) ? 0 : forecast;
	        tickUnit = isNullOrUndefined(tickUnit) ? 0 : tickUnit;
	        colorScheme = isNullOrUndefined(colorScheme) ? '#A0A0A0' : colorScheme;
	
	        var measureBarColor = '#252525';
	        if (measure > maxi) {
	            measure = maxi;
	            measureBarColor = DEFAULT_COLOR2;
	        }
	        if (good > maxi) {
	            good = maxi;
	            measureBarColor = DEFAULT_COLOR2;
	        }
	        if (bad > maxi) {
	            bad = maxi;
	            measureBarColor = DEFAULT_COLOR2;
	        }
	        if (target > maxi) {
	            target = 0;
	            measureBarColor = DEFAULT_COLOR2;
	        }
	        if (forecast > maxi) {
	            forecast = maxi;
	            measureBarColor = DEFAULT_COLOR2;
	        }
	        var rect = getPlotRect(x, y, width, height, margin, height - 2 * margin, vertical);
	        var plotLeft = rect.left, plotWidth = rect.width;
	        context.save();
	       
	        drawRect(getLighterColor(colorScheme, 1.66), 1, 1, 0.2, 0.6);
	       
	        drawRect(getLighterColor(colorScheme, 1.33), good, maxi, 0.2, 0.6);
	       
	        drawRect(colorScheme, bad, maxi, 0.2, 0.6);
	       
	        drawRect(measureBarColor, measure, maxi, 0.375, 0.25);
	
	       
	        if (forecast > 0) {
	            var startForecast = plotLeft, endForecast = plotWidth * (forecast / maxi);
	            if (endForecast > plotWidth) {
	                endForecast = plotWidth;
	            }
	            drawLines(context, vertical, x + width * 0.5, startForecast, x + width * 0.5, startForecast - endForecast,
	                startForecast, y + height * 0.5, startForecast + endForecast, y + height * 0.5, '#3690BF', 3);
	        }
	       
	        if (target > 0) {
	            var startTarget = Math_round(plotLeft - (vertical ? 1 : -1) * plotWidth * (target / maxi)) - 0.5;
	            drawLines(context, vertical, x + width * 0.2, startTarget, x + width * 0.8, startTarget,
	                startTarget, y + height * 0.2, startTarget, y + height * 0.8, DEFAULT_COLOR2, 1);
	        }
	       
	        if (tickUnit > 0) {
	            var numTicks = Math_floor(maxi / tickUnit), xMark;
	            for (var i = 0; i <= numTicks; i++) {
	                xMark = Math_round(plotLeft - (vertical ? 1 : -1) * (plotWidth / maxi * tickUnit) * i) - 0.5;
	                drawLines(context, vertical, x, xMark, x + width * 0.05, xMark,
	                    xMark, y + height, xMark, y + height * 0.95, DEFAULT_COLOR3, 1);
	            }
	        }
	        context.restore();
	
	        function drawRect(fillStyle, statusType, maxIndex, factor1, factor2) {
	           
	            context.fillStyle = fillStyle;
	            var startGood = plotLeft, endGood = plotWidth * (statusType / maxIndex);
	            if (endGood > plotWidth) {
	                endGood = plotWidth;
	            }
	            var fillRect = vertical ? new Rect(x + width * factor1, startGood - endGood, width * factor2, endGood) : new Rect(startGood, y + height * factor1, endGood, height * factor2);
	            context.fillRect(fillRect.x, fillRect.y, fillRect.width, fillRect.height);
	        }
	    }
	
	   
	
	   
	    function spreadSparkline_paint(context, value, x, y, width, height) {
	        var spreadSparklineDataArray = value.spreadData, showAverage = value.showAverage,
	            scaleStart = value.scaleStart, scaleEnd = value.scaleEnd, style = value.style,
	            colorScheme = value.colorScheme,
	            vertical = value.vertical, margin = 5;
	        var length = spreadSparklineDataArray.length;
	        if (length <= 0) {
	            return;
	        }
	        var minKey = spreadSparklineDataArray[0].key, maxKey = spreadSparklineDataArray[length - 1].key;
	        scaleStart = isNullOrUndefined(scaleStart) ? minKey : scaleStart;
	        scaleEnd = isNullOrUndefined(scaleEnd) ? maxKey : scaleEnd;
	        style = isNullOrUndefined(style) ? 4 : style;
	        colorScheme = isNullOrUndefined(colorScheme) ? DEFAULT_COLOR3 : colorScheme;
	        var rect = getPlotRect(x, y, width, height, margin, height - 2 * margin, vertical);
	        var plotLeft = rect.left, plotWidth = rect.width, plotTop = rect.top, plotHeight = rect.height;
	        clipContext(context, x, y, width, height);
	        context.beginPath();
	        context.strokeStyle = colorScheme;
	        context.fillStyle = colorScheme;
	        context.lineWidth = 2;
	       
	        var xMark, yMark, max = getMinOrMax(spreadSparklineDataArray, false), offset;
	        for (var i = 0, pointCount = spreadSparklineDataArray.length; i < pointCount; i++) {
	            var p = spreadSparklineDataArray[i], pKey = p.key, pValue = p.value;
	            xMark = plotLeft + (vertical ? -1 : 1) * plotWidth * (pKey - scaleStart) / (scaleEnd - scaleStart);
	            if (vertical) {
	                xMark = Math_min(xMark, plotLeft);
	                xMark = Math_max(xMark, plotLeft - plotWidth);
	            } else {
	                xMark = Math_max(xMark, plotLeft);
	                xMark = Math_min(xMark, plotLeft + plotWidth);
	            }
	
	            xMark = Math_round(xMark);
	            if (style === 1 ) {
	                offset = pValue / 2 * plotHeight / max;
	                offset = offset < 0.5 ? 0.5 : offset;
	                var lineStart = plotTop + plotHeight / 2 - offset, lineEnd = plotTop + plotHeight / 2 + offset;
	                drawLines(context, vertical, lineStart, xMark, lineEnd, xMark, xMark, lineStart, xMark, lineEnd);
	            } else if (style === 4 ) {
	                offset = pValue * plotHeight / max;
	                offset = offset < 1 ? 1 : offset;
	                drawLines(context, vertical, plotTop, xMark, plotTop + offset, xMark, xMark, plotTop + plotHeight, xMark, plotTop + plotHeight - offset);
	            } else if (style === 6 ) {
	                drawLines(context, vertical, plotTop, xMark, plotTop + plotHeight, xMark, xMark, plotTop, xMark, plotTop + plotHeight);
	            } else {
	                var symbolSize = 2;
	                for (var j = 1; j <= pValue; j++) {
	                    switch (style) {
	                        case 2                         :
	                            yMark = plotTop + plotHeight / 2 - margin - (pValue / 2 - j) * plotHeight / max;
	                            break;
	                        case 3                         :
	                            var randomOffsetArray = spreadSparkline_getRandomOffsetArray(pValue, plotHeight, symbolSize + 1, p.randomNumbers);
	                            yMark = plotTop + plotHeight - margin - randomOffsetArray[j - 1];
	                            break;
	                        case 5                         :
	                        default:
	                            yMark = plotTop + plotHeight - j * plotHeight / max;
	                            break;
	                    }
	                    yMark = Math_round(yMark);
	                    context.beginPath();
	                    context.fillRect(vertical ? yMark : xMark, vertical ? xMark : yMark, symbolSize, symbolSize);
	                }
	            }
	        }
	       
	        if (showAverage) {
	            var average = spreadSparkline_getAverage(spreadSparklineDataArray);
	            xMark = plotLeft - (vertical ? 1 : -1) * plotWidth * (average - scaleStart) / (scaleEnd - scaleStart);
	            drawLines(context, vertical, plotTop - margin, xMark, plotTop + plotHeight + margin, xMark,
	                xMark, plotTop - margin, xMark, plotTop + plotHeight + margin, DEFAULT_COLOR2);
	        }
	        context.restore();
	    }
	
	    function spreadSparkline_getRandomOffsetArray(count, totalOffset, minInterval, randomNumbers) {
	        var randomOffsetArray = [], MAX_ATTEMPT_TIMES = Math_max(100, count * 10), attemptedTimes = 0,
	            forbiddenRangeArray = [], i = 0;
	        while (randomOffsetArray.length < count) {
	            var offset = Math_floor(randomNumbers[i++] * totalOffset);
	            if (attemptedTimes > MAX_ATTEMPT_TIMES || spreadSparkline_isValid(offset, forbiddenRangeArray)) {
	                randomOffsetArray.push(offset);
	                forbiddenRangeArray.push([offset - minInterval, offset + minInterval]);
	            }
	            attemptedTimes++;
	        }
	        return randomOffsetArray;
	    }
	
	    function spreadSparkline_getAverage(array) {
	        var sum = 0, count = 0;
	        for (var i = 0, length = array.length; i < length; i++) {
	            var p = array[i];
	            count += p.value;
	            sum += p.key * p.value;
	        }
	        if (count === 0) {
	            return 0;
	        }
	        return sum / count;
	    }
	
	    function spreadSparkline_isValid(offset, forbiddenRangeArray) {
	        for (var i = 0, length = forbiddenRangeArray.length; i < length; i++) {
	            var t = forbiddenRangeArray[i];
	            if (t[0] <= offset && offset <= t[1]) {
	                return false;
	            }
	        }
	        return true;
	    }
	
	   
	
	   
	   
	   
	   
	   
	    function stackedSparkline_paint(context, value, x, y, width, height, options) {
	        var pointsCount, points = value.points, colorRange = value.colorRange, labelRange = value.labelRange,
	            maximum = value.maximum, targetRed = value.targetRed, targetGreen = value.targetGreen,
	            targetBlue = value.targetBlue,
	            targetYellow = value.targetYellow, color = value.color, highlightPosition = value.highlightPosition,
	            vertical = value.vertical, textOrientation = value.textOrientation, textSize = value.textSize, margin = 5;
	        if (isNullOrUndefined(points) || (pointsCount = points.length) <= 0) {
	            return;
	        }
	        color = isNullOrUndefined(color) ? DEFAULT_COLOR3 : color;
	        if (isNullOrUndefined(colorRange) || colorRange.length !== pointsCount || stackedSparkline_hasNullOrUndefined(colorRange)) {
	            colorRange = [];
	            for (var index = 0; index < pointsCount; index++) {
	                colorRange.push(getLighterColor(color, 1 + index / pointsCount));
	            }
	        }
	        var sumPositive = getSum(points, function (v) {
	            return v > 0;
	        });
	        maximum = (isNullOrUndefined(maximum) || maximum < sumPositive) ? sumPositive : maximum;
	        textOrientation = isNullOrUndefined(textOrientation) ? 0 : textOrientation;
	        textSize = (isNullOrUndefined(textSize) || textSize <= 0) ? 10 : textSize;
	        textSize = !isNotANumber(textSize) ? textSize * options.zoomFactor : textSize;
	        var rect = getPlotRect(x, y, width, height, margin, height - 2 * margin, vertical);
	        var plotLeft = rect.left, plotWidth = rect.width, plotTop = rect.top, plotHeight = rect.height;
	        context.save();
	        var startX = plotLeft, sWidth, rectX, rectY, rectWidth, rectHeight, p;
	        for (var i = 0, length = pointsCount; i < length; i++) {
	            p = points[i];
	            if (p <= 0) {
	                continue;
	            }
	            sWidth = p / maximum * plotWidth;
	            if (vertical) {
	                rectX = x + width * 0.15;
	                rectWidth = width * 0.7;
	                rectY = startX - sWidth;
	                rectHeight = sWidth;
	            } else {
	                rectX = startX;
	                rectWidth = sWidth;
	                rectY = y + height * 0.15;
	                rectHeight = height * 0.7;
	            }
	           
	            var backColor = (i + 1 === highlightPosition) ? DEFAULT_COLOR2 : colorRange[i];
	            context.save();
	            context.fillStyle = backColor;
	            context.fillRect(rectX, rectY, rectWidth, rectHeight);
	           
	            var text = labelRange && labelRange[i];
	            if (text) {
	                context.save();
	                context.fillStyle = getTextColor(backColor);
	                context.textBaseline = MIDDLE_ALIGN;
	                context.textAlign = CENTER_ALIGN;
	                context.font = textSize + PX_ARIAL;
	                context.rect(rectX, rectY, rectWidth, rectHeight);
	                context.clip();
	                if (textOrientation === 1 ) {
	                    context.translate(rectX + rectWidth / 2, rectY);
	                    context.rotate(Math.PI / 2);
	                    context.fillText(text, rectHeight / 2, 0);
	                } else {
	                    context.fillText(text, rectX + rectWidth / 2, rectY + rectHeight / 2);
	                }
	                context.restore();
	            }
	            startX = startX + (vertical ? -1 : 1) * sWidth;
	            context.restore();
	        }
	        drawStackedLine(RED_COLOR, targetRed, function (v) {
	            return v > 0;
	        });
	        drawStackedLine(GREEN_COLOR, targetGreen);
	        drawStackedLine(BLUE_COLOR, targetBlue);
	        drawStackedLine('yellow', targetYellow);
	        context.restore();
	
	        function drawStackedLine(style, target, callBack) {
	            if (target === keyword_null || target === keyword_undefined) {
	                return;
	            }
	            target = target > maximum ? maximum : target;
	            if (callBack && !callBack(target)) {
	                return;
	            }
	            target = target < 0 ? 0 : target;
	            var linePosition;
	            var temp = target / maximum * plotWidth;
	            if (vertical) {
	                linePosition = Math_round(plotLeft - temp) - 0.5;
	                drawLine(context, plotTop, linePosition, plotTop + plotHeight, linePosition, style);
	            } else {
	                linePosition = Math_round(plotLeft + temp) - 0.5;
	                drawLine(context, linePosition, plotTop, linePosition, plotTop + plotHeight, style);
	            }
	        }
	    }
	
	    function stackedSparkline_hasNullOrUndefined(array) {
	        for (var i = 0, length = array.length; i < length; i++) {
	            if (isNullOrUndefined(array[i])) {
	                return true;
	            }
	        }
	        return false;
	    }
	
	   
	
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	
	    function barSparklineBase_paintLine(context, startX, startY, endX, endY, strokeStyle) {
	        drawLine(context, barSparklineBase_fixValue(startX), barSparklineBase_fixValue(startY), barSparklineBase_fixValue(endX), barSparklineBase_fixValue(endY), isNullOrUndefined(strokeStyle) ? BLACK_COLOR : strokeStyle, 1);
	    }
	
	    function barSparklineBase_paintArrow(context, topX, topY, refWidth, direction) {
	        var arrowSideLength = refWidth * 0.4;
	        topX = barSparklineBase_fixValue(topX);
	        topY = barSparklineBase_fixValue(topY);
	        context.beginPath();
	        context.moveTo(topX, topY);
	        var para1 = arrowSideLength / 2;
	        var para2 = Math_sqrt(3) * arrowSideLength / 2;
	        var para3 = arrowSideLength / Math_sqrt(3);
	        var xArray, yArry;
	        switch (direction) {
	            case 0             :
	                xArray = [-para1, 0, para1];
	                yArry = [para2, para3, para2];
	                break;
	            case 2             :
	                xArray = [-para1, 0, para1];
	                yArry = [-para2, -para3, -para2];
	                break;
	            case 3             :
	                xArray = [para2, para3, para2];
	                yArry = [-para1, 0, para1];
	                break;
	            case 1             :
	                xArray = [-para2, -para3, -para2];
	                yArry = [-para1, 0, para1];
	                break;
	            default:
	                xArray = [];
	                yArry = [];
	                break;
	        }
	        xArray.forEach(function (x, index) {
	            context.lineTo(barSparklineBase_fixValue(topX + x), barSparklineBase_fixValue(topY + yArry[index]));
	        });
	
	        context.lineTo(topX, topY);
	        context.closePath();
	        context.fillStyle = WHITE_COLOR;
	        context.fill();
	    }
	
	    function barSparklineBase_paint(type, context, value, x, y, width, height) {
	        var ratio = value.value, colorScheme = value.colorScheme;
	        var rectMargin = 5, arrowMargin = 5, rectRatio = 0.7, needDrawArrow = false;
	        var arrow, rect, lineStart, lineEnd, arrowDirection, refWidth;
	        ratio = convertFloat(ratio);
	        if (isNotANumber(ratio)) {
	            return;
	        }
	        if (ratio > 1) {
	            ratio = 1;
	            needDrawArrow = true;
	        } else if (ratio < -1) {
	            ratio = -1;
	            needDrawArrow = true;
	        }
	        colorScheme = isNullOrUndefined(colorScheme) ? 'grey' : colorScheme;
	
	        context.save();
	        if (type === 0 ) {
	            var rectHMaxWidth = width - rectMargin * 2;
	            var rectHMaxHeight = height * rectRatio;
	            if (ratio >= 0) {
	                if (needDrawArrow) {
	                    arrow = new Point(x + rectMargin + rectHMaxWidth - arrowMargin, y + height / 2);
	                }
	                rect = new Rect(x + rectMargin, y + height * (1 - rectRatio) / 2, rectHMaxWidth * ratio, rectHMaxHeight);
	                lineStart = new Point(x + rectMargin, y + 1);
	                lineEnd = new Point(x + rectMargin, y + height);
	                arrowDirection = 1 ;
	            } else {
	                var rectWidth = Math_abs(rectHMaxWidth * ratio);
	                if (needDrawArrow) {
	                    arrow = new Point(x + rectMargin + arrowMargin, y + height / 2);
	                }
	                rect = new Rect(x + width - rectMargin - rectWidth, y + height * (1 - rectRatio) / 2, rectWidth, rectHMaxHeight);
	                lineStart = new Point(x + width - rectMargin, y + 1);
	                lineEnd = new Point(x + width - rectMargin, y + height);
	                arrowDirection = 3 ;
	            }
	            refWidth = height;
	        } else if (type === 1 ) {
	            var rectVMaxHeight = height - rectMargin * 2;
	            var rectVMaxWidth = width * rectRatio;
	            if (ratio >= 0) {
	                var rectHeight = rectVMaxHeight * ratio;
	                rect = new Rect(x + (1 - rectRatio) / 2 * width, y + height - rectMargin - rectHeight, rectVMaxWidth, rectHeight);
	                if (needDrawArrow) {
	                    arrow = new Point(x + width / 2, y + height - rectMargin - rectHeight + arrowMargin);
	                    arrowDirection = 0 ;
	                }
	                lineStart = new Point(x + 1, y + height - rectMargin);
	                lineEnd = new Point(x + width, y + height - rectMargin);
	            } else {
	                ratio = Math_abs(ratio);
	                rect = new Rect(x + (1 - rectRatio) / 2 * width, y + rectMargin, rectVMaxWidth, rectVMaxHeight * ratio);
	                if (needDrawArrow) {
	                    arrow = new Point(x + width / 2, y + rectMargin + rectVMaxHeight - arrowMargin);
	                    arrowDirection = 2 ;
	                }
	                lineStart = new Point(x + 1, y + rectMargin);
	                lineEnd = new Point(x + width, y + rectMargin);
	            }
	            refWidth = width;
	        }
	       
	        context.beginPath();
	        if (rect) {
	            paintRect(context, rect.x, rect.y, rect.width, rect.height, colorScheme);
	            clipContext(context, rect.x, rect.y, rect.width, rect.height);
	        }
	        if (arrow) {
	            barSparklineBase_paintArrow(context, arrow.x, arrow.y, refWidth, arrowDirection);
	        }
	        context.restore();
	        if (lineStart) {
	            barSparklineBase_paintLine(context, lineStart.x, lineStart.y, lineEnd.x, lineEnd.y);
	        }
	        context.restore();
	    }
	
	    function barSparklineBase_fixValue(value) {
	        return Math_round(value) - 0.5;
	    }
	
	    function hBarSparkline_paint(context, value, x, y, width, height) {
	        barSparklineBase_paint(0, context, value, x, y, width, height);
	    }
	
	    function vBarSparkline_paint(context, value, x, y, width, height) {
	        barSparklineBase_paint(1, context, value, x, y, width, height);
	    }
	
	    function variSparkline_paint(context, value, x, y, width, height, options) {
	        var variance = value.variance, reference = value.reference, mini = value.mini, maxi = value.maxi,
	            mark = value.mark,
	            tickUnit = value.tickUnit, legend = value.legend, colorPositive = value.colorPositive,
	            colorNegative = value.colorNegative, vertical = value.vertical;
	        var plotLeft, plotWidth, plotHeight;
	        var xy, labelText, refWidth, needShowReference;
	        var rectRatio = 0.5, halfRectRatio = 0.5 - rectRatio / 2, needDrawArrow, margin = 5,
	            defaultMarklineColor = DEFAULT_COLOR2,
	            defaultTickColor = DEFAULT_COLOR1, fontSize = 13 * options.zoomFactor;
	        variance = convertFloat(variance);
	        if (isNotANumber(variance)) {
	            return;
	        }
	        colorNegative = isNullOrUndefined(colorNegative) ? RED_COLOR : colorNegative;
	        colorPositive = isNullOrUndefined(colorPositive) ? GREEN_COLOR : colorPositive;
	        tickUnit = isNullOrUndefined(tickUnit) ? 0 : tickUnit;
	        maxi = isNullOrUndefined(maxi) ? 1 : maxi;
	        mini = isNullOrUndefined(mini) ? -1 : mini;
	        needShowReference = !isNullOrUndefined(reference);
	        if (!needShowReference) {
	            reference = 0;
	        }
	        if (vertical) {
	            plotLeft = y + height - margin;
	            plotWidth = height - 2 * margin;
	            plotHeight = width - 4 * margin;
	            xy = -1;
	        } else {
	            plotLeft = x + margin;
	            plotWidth = width - 2 * margin;
	            plotHeight = height - 4 * margin;
	            xy = 1;
	        }
	        if (legend) {
	            var temp = convertFloat(value.variance);
	            if (!isNotANumber(temp)) {
	                var tempStr = temp.toString();
	                var len = tempStr.substr(tempStr.indexOf('.') + 1).length;
	                labelText = len >= 2 ? (temp * 100).toFixed(len - 2) + '%' : (temp * 100).toFixed(0) + '%';
	            }
	        }
	        if (variance > maxi) {
	            variance = maxi;
	            needDrawArrow = true;
	        }
	        if (variance < mini) {
	            variance = mini;
	            needDrawArrow = true;
	        }
	
	        reference = adjustValue(reference, maxi, mini);
	        if (needDrawArrow) {
	            refWidth = adjustValue(plotHeight, 60, 15);
	        }
	       
	        var amplitude = Math_abs(maxi - mini);
	        var unit = plotWidth / amplitude;
	        var startShape = plotLeft + xy * Math_abs(mini - reference) * unit;
	        var endShape = Math_abs(variance - reference) * unit;
	        if (endShape > Math_abs(amplitude) * unit) {
	            endShape = Math_abs(amplitude + mini) * unit;
	        }
	        var limitRight = plotLeft + xy * plotWidth;
	        if ((vertical && startShape < limitRight) || (!vertical && startShape > limitRight)) {
	            return;
	        }
	        clipContext(context, x, y, width, height);
	        if (variance > reference) {
	            drawLegend(colorPositive, 0, margin - plotWidth, plotWidth - margin, 0, 1, y - startShape, BOTTOM_ALIGN, TOP_ALIGN, startShape - x - width, LEFT_ALIGN, RIGHT_ALIGN, -1, Math_abs(maxi - variance) * unit);
	        } else {
	            if (endShape > Math_abs(amplitude) * unit) {
	                endShape = Math_abs(amplitude + mini) * unit;
	                startShape = plotLeft;
	            }
	            drawLegend(colorNegative, 1, -margin, margin, 2, 3, startShape - y - height, TOP_ALIGN, BOTTOM_ALIGN, x - startShape, RIGHT_ALIGN, LEFT_ALIGN, 1, Math_abs(mini - variance) * unit);
	        }
	       
	        if (needShowReference) {
	            var referencePosition = plotLeft + xy * (Math.abs(mini - reference) * unit);
	            drawPart(x, referencePosition, x + width, referencePosition, referencePosition, y, referencePosition, y + height);
	        }
	       
	        if (tickUnit > 0) {
	            context.beginPath();
	            var numTicks = amplitude / tickUnit;
	            for (var i = 0; i <= numTicks; i++) {
	                var xMark = plotLeft + plotWidth / numTicks * i * xy;
	                drawPart(x, xMark, x + 0.1 * width, xMark, xMark, y + 0.9 * height, xMark, y + height, defaultTickColor, defaultTickColor);
	            }
	        }
	       
	        if (!isNullOrUndefined(mark) && mini <= mark && mark <= maxi) {
	            context.beginPath();
	            var markPosition = plotLeft - (vertical ? 1 : -1) * Math_abs(mini - mark) * unit;
	            drawPart(x, markPosition, x + 0.33 * width, markPosition, markPosition, y + 0.66 * height, markPosition, y + height, defaultMarklineColor, defaultMarklineColor);
	            context.fill();
	        }
	        context.restore();
	
	        function drawLegend(color, rectType, arrowOffsetY1, arrowOffsetX2, verticalDir, horizonDir, dValue1, defaultDir1, dir1, dValue2, defaultDir2, dir2, factor, blank) {             var clipX, clipY, clipWidth, clipHeight;
	            if (vertical) {
	                clipX = x + halfRectRatio * width;
	                clipY = rectType === 0 ? startShape - endShape : startShape;
	                clipWidth = width * rectRatio;
	                clipHeight = endShape;
	                paintRect(context, clipX, clipY, clipWidth, clipHeight, color);
	            } else {
	                clipX = rectType === 0 ? startShape : startShape - endShape;
	                clipY = y + halfRectRatio * height;
	                clipWidth = endShape;
	                clipHeight = height * rectRatio;
	                paintRect(context, clipX, clipY, clipWidth, clipHeight, color);
	            }
	           
	            if (needDrawArrow) {
	                clipContext(context, clipX, clipY, clipWidth, clipHeight);
	                if (vertical) {
	                    barSparklineBase_paintArrow(context, x + width / 2, plotLeft + arrowOffsetY1, refWidth, verticalDir );
	                } else {
	                    barSparklineBase_paintArrow(context, plotLeft + arrowOffsetX2, y + height / 2, refWidth, horizonDir );
	                }
	                context.restore();
	            }
	
	           
	            if (legend) {
	                var dValue;
	                var offsetFromArrow = 0;
	                if (needDrawArrow) {
	                    offsetFromArrow = 0.4 * refWidth * Math_sqrt(3) / 2 + margin + 2;
	                }
	                context.save();
	                context.beginPath();
	                context.font = fontSize + PX_ARIAL;
	                context.fillStyle = BLACK_COLOR;
	
	                if (vertical) {
	                   
	                   
	                    context.textAlign = CENTER_ALIGN;
	                    dValue = fontSize + endShape + dValue1;
	                    initDrawLegendContext(dValue, blank, color, defaultDir1, dir1, clipX, clipY, clipWidth, clipHeight, vertical);
	                    context.fillText(labelText, x + width / 2, startShape + factor * (endShape - offsetFromArrow));
	                } else {
	                    context.textBaseline = MIDDLE_ALIGN;
	                    dValue = context.measureText(labelText).width + endShape + dValue2;
	                    initDrawLegendContext(dValue, blank, color, defaultDir2, dir2, clipX, clipY, clipWidth, clipHeight, vertical);
	                    context.fillText(labelText, startShape + factor * (offsetFromArrow - endShape), y + height / 2);
	                }
	                context.restore();
	            }
	        }
	
	        function initDrawLegendContext(dValue, blank, color, defaultDir, dir, clipX, clipY, clipWidth, clipHeight, isVertical) {
	            if (isVertical) {
	                context.textBaseline = defaultDir;
	            } else {
	                context.textAlign = defaultDir;
	            }
	            if (dValue > 0 && blank < endShape) {
	                context.rect(clipX, clipY, clipWidth, clipHeight);
	                context.clip();
	                if (isVertical) {
	                    context.textBaseline = dir;
	                } else {
	                    context.textAlign = dir;
	                }
	                context.fillStyle = getTextColor(color);
	            }
	        }
	
	        function drawPart(x1, y1, x2, y2, x3, y3, x4, y4, stroke1, stroke2) {             if (vertical) {
	                barSparklineBase_paintLine(context, x1, y1, x2, y2, stroke1);
	            } else {
	                barSparklineBase_paintLine(context, x3, y3, x4, y4, stroke2);
	            }
	        }
	    }
	
	   
	
	   
	   
	   
	   
	   
	    var _7NS = '7ns', _5NS = '5ns', _TUKEY = 'tukey', _BOWLEY = 'bowley', _SIGMA3 = 'sigma3';
	
	    function boxPlotSparkline_paint(context, value, x, y, width, height) {
	        var points = value.points, boxPlotClass = value.boxPlotClass, showAverage = value.showAverage,
	            scaleStart = value.scaleStart, scaleEnd = value.scaleEnd, acceptableStart = value.acceptableStart,
	            acceptableEnd = value.acceptableEnd, style = value.style, colorScheme = value.colorScheme,
	            vertical = value.vertical, margin = 5, maximum = getMinOrMax(points, false),
	            minimum = getMinOrMax(points, true);
	        if (isNullOrUndefined(points)) {
	            return;
	        }
	        points = fixValues(points);
	        if (points.length <= 0) {
	            return;
	        }
	        boxPlotClass = (boxPlotClass === keyword_null || typeof boxPlotClass !== const_string) ? _5NS : boxPlotClass.toLocaleLowerCase();
	        if (boxPlotClass !== _5NS && boxPlotClass !== _7NS && boxPlotClass !== _TUKEY && boxPlotClass !== _BOWLEY && boxPlotClass !== _SIGMA3) {
	            boxPlotClass = _5NS;
	        }
	
	        scaleStart = convertFloat(scaleStart);
	        scaleStart = isNotANumber(scaleStart) ? minimum : scaleStart;
	        scaleEnd = convertFloat(scaleEnd);
	        scaleEnd = isNotANumber(scaleEnd) ? maximum : scaleEnd;
	        acceptableStart = convertFloat(acceptableStart);
	        acceptableEnd = convertFloat(acceptableEnd);
	        if (colorScheme === keyword_null || typeof colorScheme !== const_string) {
	            colorScheme = '#D2D2D2';
	        }
	        if (style === keyword_null || style !== 0  && style !== 1 ) {
	            style = 0 ;
	        }
	        var unreasonableColor = DEFAULT_COLOR2;
	        if (scaleStart > minimum) {
	            colorScheme = unreasonableColor;
	            scaleStart = minimum;
	        }
	        if (scaleEnd < maximum) {
	            colorScheme = unreasonableColor;
	            scaleEnd = maximum;
	        }
	        clipContext(context, x, y, width, height);
	        context.lineWidth = 2;
	        var rect = getPlotRect(x, y, width, height, margin, height - 2 * margin, vertical);
	        var plotLeft = rect.left, plotWidth = rect.width, plotTop = rect.top, plotHeight = rect.height;
	        var xy = vertical ? -1 : 1;
	        var perc02 = value.perc02, perc09 = value.perc09, perc10 = value.perc10, perc90 = value.perc90,
	            perc91 = value.perc91, perc98 = value.perc98, q1 = value.q1, q3 = value.q3, iQR = q3 - q1, x01 = minimum,
	            x03 = maximum, y01 = 1.5 * iQR, y03 = 1.5 * iQR, stDev = value.stDev,
	            avgMean = getSum(points) / Math_max(1, points.length),
	            startAverage = 0, transparency = 0, topBox = plotTop + plotHeight * 0.1, heightBox = plotHeight * 0.7,
	            amplitude = Math_abs(scaleEnd - scaleStart);
	        for (var i = 0, len = points.length; i < len; i++) {
	            var point = points[i];
	            if (point < q1 && point >= q1 - 1.5 * iQR && point - (q1 - 1.5 * iQR) < y01) {
	                y01 = point - (q1 - 1.5 * iQR);
	                x01 = point;
	            }
	            if (point > q3 && point <= q3 + 1.5 * iQR && q3 + 1.5 * iQR - point < y03) {
	                y03 = q3 + 1.5 * iQR - point;
	                x03 = point;
	            }
	            var blOutlier = false;
	            startAverage = plotLeft + xy * (plotWidth * ((point - scaleStart) / amplitude));
	           
	            if (boxPlotClass === _TUKEY && (point <= q1 - 1.5 * iQR || point >= q3 + 1.5 * iQR)) {
	                blOutlier = true;
	                transparency = (point <= q1 - 3 * iQR || point >= q3 + 3 * iQR) ? 0 : 1;
	            }
	           
	            if (boxPlotClass === _7NS && (point <= perc02 || point >= perc98)) {
	                blOutlier = true;
	                transparency = 1;
	            }
	           
	            if (boxPlotClass === _SIGMA3 && (point <= (avgMean - 2 * stDev) || point >= (avgMean + 2 * stDev))) {
	                blOutlier = true;
	                transparency = (point <= avgMean - 3 * stDev || point >= avgMean + 3 * stDev) ? 0 : 1;
	            }
	            var outlierColor = DEFAULT_COLOR1;
	            if (blOutlier) {
	                if (style === 1 ) {
	                    if (transparency === 1) {
	                        _drawLines(0.2, 0.8, startAverage, outlierColor);
	                    } else {
	                        _drawLines(0.3, 0.7, startAverage, outlierColor);
	                    }
	                } else {
	                    var diameter = 0.1 * plotHeight;
	                    if (diameter < 2) {
	                        diameter = 2;
	                    }
	                    context.beginPath();
	                    context.strokeStyle = outlierColor;
	                    var tempX = plotTop + plotHeight * 0.45;
	                    var tempY = startAverage;
	                    context.arc(vertical ? tempX : tempY, vertical ? tempY : tempX, diameter / 2, 0, 2 * Math.PI);
	                    context.stroke();
	                }
	            }
	        }
	        if (scaleStart > acceptableStart || scaleEnd < acceptableEnd) {
	            colorScheme = '#C0FF00';
	        }
	        acceptableStart = Math_max(scaleStart, acceptableStart);
	        acceptableEnd = Math_min(scaleEnd, acceptableEnd);
	       
	        if (acceptableStart > acceptableEnd) {
	            colorScheme = unreasonableColor;
	        } else if (acceptableStart < acceptableEnd) {
	            var startAcceptable = plotLeft + xy * (plotWidth * ((acceptableStart - scaleStart) / amplitude));
	            var endAcceptable = plotLeft + xy * (plotWidth * ((acceptableEnd - scaleStart) / amplitude));
	            var xyMark = plotTop + plotHeight * 0.9;
	            drawLines(context, vertical, xyMark, startAcceptable, xyMark, endAcceptable,
	                startAcceptable, xyMark, endAcceptable, xyMark, DEFAULT_COLOR3);
	        }
	
	        var startBox = plotLeft + xy * (plotWidth * ((q1 - scaleStart) / amplitude)),
	            endBox = Math_abs(plotLeft + xy * (plotWidth * ((q3 - scaleStart) / amplitude)) - startBox),
	            median = value.median, startMedian = plotLeft + xy * (plotWidth * ((median - scaleStart) / amplitude)),
	            startWhisker, endWhisker;
	        var para1, para2;
	        switch (boxPlotClass) {
	            case _7NS:
	                para1 = perc02;
	                para2 = perc98;
	                break;
	            case _TUKEY:
	                para1 = x01;
	                para2 = x03;
	                break;
	            case _SIGMA3:
	                startBox = plotLeft + xy * (plotWidth * ((avgMean - stDev - scaleStart) / amplitude));
	                endBox = Math_abs(plotLeft + xy * (plotWidth * ((avgMean + stDev - scaleStart) / amplitude)) - startBox);
	                startMedian = plotLeft + xy * (plotWidth * ((avgMean - scaleStart) / amplitude));
	                var tempValue = avgMean - 2 * stDev;
	                para1 = tempValue > scaleStart ? tempValue : minimum;
	                tempValue = avgMean + 2 * stDev;
	                para2 = tempValue < scaleEnd ? tempValue : maximum;
	                showAverage = false;
	                break;
	            case _5NS:
	            case _BOWLEY:
	            default:
	                para1 = minimum;
	                para2 = maximum;
	                break;
	        }
	        startWhisker = plotLeft + xy * (plotWidth * ((para1 - scaleStart) / amplitude));
	        endWhisker = plotLeft + xy * (plotWidth * ((para2 - scaleStart) / amplitude));
	        var lineColor = DEFAULT_COLOR1;
	       
	        if (style === 1 ) {
	            _paintRect('#F2F2F2', topBox, endWhisker, heightBox, startWhisker - endWhisker,
	                startWhisker, topBox, endWhisker - startWhisker, heightBox);
	        } else {
	            var topWhiskerLine = plotTop + plotHeight * 0.45;
	            drawLines(context, vertical, topWhiskerLine, startWhisker, topWhiskerLine, endWhisker,
	                startWhisker, topWhiskerLine, endWhisker, topWhiskerLine, lineColor);
	        }
	       
	        _paintRect(colorScheme, topBox, startBox - endBox, heightBox, endBox,
	            startBox, topBox, endBox, heightBox);
	       
	        drawLines(context, vertical, topBox, startMedian, topBox + heightBox, startMedian,
	            startMedian, topBox, startMedian, topBox + heightBox, lineColor);
	
	       
	        if (style === 0 ) {
	            drawLines(context, vertical, topBox + heightBox * 0.3, endWhisker, topBox + heightBox * 0.7, endWhisker,
	                endWhisker, topBox + heightBox * 0.3, endWhisker, topBox + heightBox * 0.7, lineColor);
	            drawLines(context, vertical, topBox + heightBox * 0.3, startWhisker, topBox + heightBox * 0.7, startWhisker,
	                startWhisker, topBox + heightBox * 0.3, startWhisker, topBox + heightBox * 0.7, lineColor);
	        }
	       
	        if (boxPlotClass === _7NS || boxPlotClass === _BOWLEY) {
	            var startHatch, endHatch;
	            if (boxPlotClass === _7NS) {
	                para1 = perc09;
	                para2 = perc91;
	            } else {
	                para1 = perc10;
	                para2 = perc90;
	            }
	            startHatch = plotLeft + xy * (plotWidth * ((para1 - scaleStart) / amplitude));
	            endHatch = plotLeft + xy * (plotWidth * ((para2 - scaleStart) / amplitude));
	            _drawLines(0.3, 0.7, endHatch, lineColor);
	            _drawLines(0.3, 0.7, startHatch, lineColor);
	        }
	       
	        if (showAverage) {
	            startAverage = plotLeft + xy * (plotWidth * ((avgMean - scaleStart) / amplitude));
	            _drawLines(0.2, 0.8, startAverage, unreasonableColor);
	        }
	        context.restore();
	
	        function _paintRect(color, x1, y1, width1, height1, x2, y2, width2, height2) {             if (vertical) {
	                paintRect(context, x1, y1, width1, height1, color);
	            } else {
	                paintRect(context, x2, y2, width2, height2, color);
	            }
	        }
	
	        function _drawLines(factor1, factor2, param, color) {
	            drawLines(context, vertical, topBox + heightBox * factor1, param, topBox + heightBox * factor2, param,
	                param, topBox + heightBox * factor1, param, topBox + heightBox * factor2, color);
	        }
	    }
	
	   
	
	   
	    function accumulateSparklineBase_paintLine(ctx, startX, startY, endX, endY) {
	        startX = Math_round(startX);
	        startY = Math_round(startY);
	        endX = Math_round(endX);
	        endY = Math_round(endY);
	        if (startX === endX) {
	            endX = endX - 0.5;
	            startX = endX;
	        }
	        if (startY === endY) {
	            endY = endY - 0.5;
	            startY = endY;
	        }
	        ctx.moveTo(startX, startY);
	        ctx.lineTo(endX, endY);
	    }
	
	    function accumulateSparklineBase_paintLines(ctx, condition, strokeStyle, x1, y1, x2, y2, x3, y3, x4, y4) {         ctx.beginPath();
	        ctx.strokeStyle = strokeStyle;
	        if (condition) {
	            accumulateSparklineBase_paintLine(ctx, x1, y1, x2, y2);
	        } else {
	            accumulateSparklineBase_paintLine(ctx, x3, y3, x4, y4);
	        }
	        ctx.stroke();
	    }
	    function clipCtx(context, x, y, width, height) {
	        context.rect(x, y, width, height);
	        context.clip();
	    }
	    function accumulateSparklineBase_paintLabel(context, x, y, width, height, labelOption) {
	        var labelText = labelOption.labelText, fontSize = labelOption.fontSize,
	            startBox = labelOption.startBox, endBox = labelOption.endBox, boxColor = labelOption.boxColor,
	            isInRightOrTopOfBox = labelOption.isInRightOrTopOfBox;
	        context.save();
	        context.beginPath();
	        context.font = fontSize + PX_ARIAL;
	        var dValue, labelStartX, labelStartY, textMargin = 1;
	        var textAlign, textBaseline, fillStyle = BLACK_COLOR;
	        if (labelOption.vertical) {
	            textAlign = CENTER_ALIGN;
	            if (isInRightOrTopOfBox) {
	                dValue = fontSize + endBox - (startBox - y);
	                if (dValue > 0 && startBox - endBox - y < endBox) {
	                    textBaseline = TOP_ALIGN;
	                    fillStyle = getTextColor(boxColor);
	                    labelStartY = startBox - endBox + textMargin;
	                    clipCtx(context, x, startBox - endBox, width, endBox);
	                } else {
	                    textBaseline = BOTTOM_ALIGN;
	                    labelStartY = startBox - endBox - textMargin;
	                }
	            } else {
	                dValue = fontSize - (y + height - startBox);
	                if (dValue > 0 && y + height - startBox < endBox) {
	                    clipCtx(context, x, startBox - endBox, width, endBox);
	                    textBaseline = BOTTOM_ALIGN;
	                    fillStyle = getTextColor(boxColor);
	                    labelStartY = startBox - textMargin;
	                } else {
	                    textBaseline = TOP_ALIGN;
	                    labelStartY = startBox + textMargin;
	                }
	            }
	            context.textAlign = textAlign;
	            context.textBaseline = textBaseline;
	            context.fillStyle = fillStyle;
	            context.fillText(labelText, x + width / 2, labelStartY);
	        } else {
	            textBaseline = MIDDLE_ALIGN;
	            var textWidth = context.measureText(labelText);
	            if (isInRightOrTopOfBox) {
	                dValue = textWidth.width + endBox - (x + width - startBox);
	                if (dValue > 0 && x + width - (startBox + endBox) < endBox) {
	                    clipCtx(context, startBox, y, endBox, height);
	                    textAlign = RIGHT_ALIGN;
	                    fillStyle = getTextColor(boxColor);
	                    labelStartX = startBox + endBox - textMargin;
	                } else {
	                    textAlign = LEFT_ALIGN;
	                    labelStartX = startBox + endBox + textMargin;
	                }
	            } else {
	                dValue = textWidth.width - (startBox - x);
	                if (dValue > 0 && startBox - x < endBox) {
	                    clipCtx(context, startBox, y, endBox, height);
	                    labelStartX = startBox + textMargin;
	                    textAlign = LEFT_ALIGN;
	                    fillStyle = getTextColor(boxColor);
	                } else {
	                    textAlign = RIGHT_ALIGN;
	                    labelStartX = startBox - textMargin;
	                }
	            }
	            context.textAlign = textAlign;
	            context.textBaseline = textBaseline;
	            context.fillStyle = fillStyle;
	            context.fillText(labelText, labelStartX, y + height / 2);
	        }
	        context.restore();
	    }
	
	    function cascadeSparkline_paint(context, value, x, y, width, height, options) {
	        var points = value.points, labels = value.labels, pointIndex = value.pointIndex,
	            minimum = value.minimum, maximum = value.maximum, colorPositive = value.colorPositive,
	            colorNegative = value.colorNegative, vertical = value.vertical, margin = 5,
	            fontSize = 13 * options.zoomFactor;
	        if (isNullOrUndefined(points)) {
	            return;
	        }
	        var pointsLength = points.length;
	        if (pointsLength <= 0) {
	            return;
	        }
	        pointIndex = parseInt(pointIndex);
	        if (isNotANumber(pointIndex) || pointIndex <= 0 || pointIndex > pointsLength) {
	            return;
	        }
	        labels = isNullOrUndefined(labels) ? [] : labels;
	        if (colorPositive === keyword_null || typeof colorPositive !== const_string) {
	            colorPositive = '#8CBF64';
	        }
	        if (colorNegative === keyword_null || typeof colorNegative !== const_string) {
	            colorNegative = '#D6604D';
	        }
	        var positiveStartColor = colorPositive, positiveMidColor = getLighterColor(colorPositive, 1.3),
	            negativeStartColor = colorNegative, negativeMidColor = getLighterColor(colorNegative, 1.3);
	       
	        var rank = 1, totalValue = 0, totalValuePrevious = 0, min = 0, max = 0, dataArray = [], zero = 0;
	        for (var i = 0, len = points.length; i < len; i++) {
	            var pointValue = points[i];
	            dataArray[rank] = [];
	            var dataPoint = dataArray[rank];
	            if (isNotANumber(pointValue)) {
	                dataPoint[0] = 0;
	                dataPoint[1] = totalValue;
	                dataPoint[2] = 0;
	            } else {
	                dataPoint[0] = Math_abs(pointValue);
	                totalValue = pointValue + totalValue;
	                dataPoint[1] = pointValue > 0 ? totalValuePrevious : totalValue;
	                dataPoint[2] = pointValue;
	            }
	            dataPoint[3] = rank;
	
	            min = Math_min(totalValuePrevious, min);
	            max = Math_max(totalValuePrevious, max);
	
	            if (rank === pointsLength) {
	                zero = min < 0 ? -min : 0;
	                dataPoint[1] = pointValue > 0 ? 0 : pointValue;
	            }
	            totalValuePrevious = pointValue + totalValuePrevious;
	            rank++;
	        }
	        totalValue = totalValue - pointValue;
	       
	        var scaleStart, scaleEnd;
	        minimum = convertFloat(minimum);
	        if (isNotANumber(minimum) || minimum > 0 || minimum > min) {
	            scaleStart = min;
	            minimum = min;
	        } else {
	            scaleStart = minimum;
	            zero = -minimum;
	        }
	        maximum = convertFloat(maximum);
	        if (isNotANumber(maximum) || maximum < 0 || maximum < max) {
	            scaleEnd = max;
	        } else {
	            scaleEnd = maximum;
	            zero = -minimum;
	        }
	
	        var rect = getPlotRect(x, y, width, height, margin, height - 2 * margin, vertical);
	        var plotLeft = rect.left, plotWidth = rect.width, plotTop = rect.top, plotHeight = rect.height;
	        var xy = vertical ? -1 : 1;
	        var amplitude = scaleEnd - scaleStart, unit = plotWidth / amplitude;
	        clipContext(context, x, y, width, height);
	        context.beginPath();
	        context.lineWidth = 1;
	        var point = dataArray[pointIndex], dataPointValue = point[2],
	            startBox = plotLeft + xy * (point[1] + zero) * unit, endBox = point[0] * unit;
	        var boxColor;
	
	        if (pointIndex === 1 || pointIndex === pointsLength) {
	            boxColor = dataPointValue >= 0 ? positiveStartColor : negativeStartColor;
	        } else {
	            boxColor = dataPointValue >= 0 ? positiveMidColor : negativeMidColor;
	        }
	
	       
	        if (vertical) {
	            paintRect(context, plotTop, startBox - endBox, plotHeight, endBox, boxColor);
	        } else {
	            paintRect(context, startBox, plotTop, endBox, plotHeight, boxColor);
	        }
	       
	        if (vertical) {
	           
	            if (pointIndex !== 1) {
	                if (pointIndex !== pointsLength) {
	                    accumulateSparklineBase_paintLines(context, dataPointValue > 0, DEFAULT_COLOR4, x, startBox, plotTop + plotHeight, startBox,
	                        x, startBox - endBox, plotTop + plotHeight, startBox - endBox);
	                } else {
	                    var yMark = plotLeft - (totalValue + zero) * unit;
	                    accumulateSparklineBase_paintLines(context, true, DEFAULT_COLOR4, x, yMark, plotTop + plotHeight, yMark);
	                }
	            }
	           
	            if (pointIndex !== pointsLength) {
	                accumulateSparklineBase_paintLines(context, dataPointValue > 0, DEFAULT_COLOR4, plotTop, startBox - endBox, x + width, startBox - endBox,
	                    plotTop, startBox, x + width, startBox);
	            }
	        } else {
	           
	            if (pointIndex !== 1) {
	                if (pointIndex !== pointsLength) {
	                    accumulateSparklineBase_paintLines(context, dataPointValue > 0, DEFAULT_COLOR4, startBox, y, startBox, plotTop + plotHeight,
	                        startBox + endBox, y, startBox + endBox, plotTop + plotHeight);
	                } else {
	                    var xMark = plotLeft + (totalValue + zero) * unit;
	                    accumulateSparklineBase_paintLines(context, true, DEFAULT_COLOR4, xMark, y, xMark, plotTop + plotHeight);
	                }
	            }
	           
	            if (pointIndex !== pointsLength) {
	                accumulateSparklineBase_paintLines(context, dataPointValue > 0, DEFAULT_COLOR4, startBox + endBox, plotTop, startBox + endBox, y + height,
	                    startBox, plotTop, startBox, y + height);
	            }
	        }
	       
	        var labelText = labels[pointIndex - 1];
	        if (labels.length > 0 && !isNullOrUndefined(labelText) && labelText !== '') {
	            accumulateSparklineBase_paintLabel(context, x, y, width, height, {
	                labelText: labelText,
	                vertical: vertical,
	                isInRightOrTopOfBox: dataPointValue > 0,
	                fontSize: fontSize,
	                startBox: startBox,
	                endBox: endBox,
	                boxColor: boxColor
	            });
	        }
	       
	        accumulateSparklineBase_paintLines(context, vertical, BLACK_COLOR, x, plotLeft - zero * unit, x + width, plotLeft - zero * unit,
	            plotLeft + zero * unit, y, plotLeft + zero * unit, y + height);
	        context.restore();
	    }
	
	    function paretoSparkline_paint(context, value, x, y, width, height, options) {
	        var points = value.points, pointIndex = value.pointIndex, colorRange = value.colorRange,
	            target = value.target, target2 = value.target2, highlightPosition = value.highlightPosition,
	            label = value.label, vertical = value.vertical, margin = 5, fontSize = 13 * options.zoomFactor;
	        if (isNullOrUndefined(points)) {
	            return;
	        }
	        var pointsLength = points.length;
	        if (pointsLength <= 0) {
	            return;
	        }
	        pointIndex = parseInt(pointIndex);
	        if (isNotANumber(pointIndex) || pointIndex <= 0 || pointIndex > pointsLength) {
	            return;
	        }
	        colorRange = isNullOrUndefined(colorRange) ? [] : colorRange;
	        target = processTarget(target);
	        target2 = processTarget(target2);
	        label = parseInt(label);
	        label = isNotANumber(label) ? 0 : label;
	
	       
	        var rank = 1, total = 0, paretoArray = [];
	        for (var i = 0, len = points.length; i < len; i++) {
	            var pointValue = points[i];
	            paretoArray[rank] = [];
	            var paretoPoint = paretoArray[rank];
	            if (pointValue < 0 || isNotANumber(pointValue) || isNullOrUndefined(pointValue)) {
	                paretoPoint[0] = rank === 1 ? 0 : total;
	                paretoPoint[1] = 0;
	            } else {
	                total = total + pointValue;
	                paretoPoint[0] = rank === 1 ? 0 : total - pointValue;
	                paretoPoint[1] = pointValue;
	            }
	            rank++;
	        }
	        var rect = getPlotRect(x, y, width, height, margin, height - 2 * margin, vertical);
	        var plotLeft = rect.left, plotWidth = rect.width, plotTop = rect.top, plotHeight = rect.height;
	        var xy = vertical ? -1 : 1;
	        var unit = plotWidth / total;
	        clipContext(context, x, y, width, height);
	        context.beginPath();
	        context.lineWidth = 1;
	        var point = paretoArray[pointIndex], dataPointValue = point[1], startBox = plotLeft + xy * point[0] * unit,
	            endBox = point[1] * unit, boxColor;
	        if (pointIndex === highlightPosition) {
	            boxColor = DEFAULT_COLOR2;
	        } else if (colorRange.length === 0 || typeof colorRange[pointIndex - 1] !== const_string) {
	            boxColor = DEFAULT_COLOR1;
	        } else {
	            boxColor = colorRange[pointIndex - 1];
	        }
	       
	        if (vertical) {
	            paintRect(context, plotTop, startBox - endBox, plotHeight, endBox, boxColor);
	        } else {
	            paintRect(context, startBox, plotTop, endBox, plotHeight, boxColor);
	        }
	       
	        var labelPerc;
	        if (label === 1) {
	            labelPerc = (point[0] + dataPointValue) / total * 1000;
	        } else if (label === 2) {
	            labelPerc = dataPointValue / total * 1000;
	        }
	        var labelText = Math_round(labelPerc) / 10 + '%';
	        if ((label === 1 || label === 2) && labelText !== '') {
	            accumulateSparklineBase_paintLabel(context, x, y, width, height, {
	                labelText: labelText,
	                vertical: vertical,
	                isInRightOrTopOfBox: (point[0] + point[1]) * unit < plotWidth / 2,
	                fontSize: fontSize,
	                startBox: startBox,
	                endBox: endBox,
	                boxColor: boxColor
	            });
	        }
	       
	       
	        var colorArray = ['#8CBF64', '#EE5D5D'];
	        [target, target2].forEach(function (item, index) {
	            var targetLine = Math_ceil(plotLeft + xy * plotWidth * item);
	            accumulateSparklineBase_paintLines(context, vertical, colorArray[index], x, targetLine, x + width, targetLine, targetLine, y, targetLine, y + height);
	        });
	        context.restore();
	
	        function processTarget(targetVaule) {
	            targetVaule = convertFloat(targetVaule);
	            targetVaule = isNotANumber(targetVaule) ? 0 : targetVaule;
	            targetVaule = targetVaule < 0 ? 0 : targetVaule;
	            targetVaule = targetVaule > 1 ? 1 : targetVaule;
	            return targetVaule;
	        }
	    }
	
	   
	
	   
	    function calendarSparkline_daysOfMonth(year, month) {
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
	
	    function calendarSparkline_getLinearColor(percent, startColor, endColor) {
	        if (percent < 0) {
	            percent = 0;
	        }
	        if (percent > 1) {
	            percent = 1;
	        }
	        var minColor = parseColor(startColor);
	        var maxColor = parseColor(endColor);
	        var a = (minColor.a) * (1 - percent) + (maxColor.a) * (percent);
	        var r = (minColor.r) * (1 - percent) + (maxColor.r) * (percent);
	        var g = (minColor.g) * (1 - percent) + (maxColor.g) * (percent);
	        var b = (minColor.b) * (1 - percent) + (maxColor.b) * (percent);
	        return "rgba(" + parseInt(r, 10) + "," + parseInt(g, 10) + "," + parseInt(b, 10) + "," + convertFloat(a / 255) + ")";
	    }
	
	    function calendarSparkline_getPercent(currentValue, minValue, maxValue) {
	        if (currentValue === minValue && currentValue === maxValue) {
	            return 1.0;
	        }
	        if (currentValue <= minValue) {
	            return 0.0;
	        }
	        if (currentValue >= maxValue) {
	            return 1.0;
	        }
	        return (currentValue - minValue) / (maxValue - minValue);
	    }
	
	    function calendarSparkline_getColor(startColor, middleColor, endColor, currentValue, minValue, maxValue) {
	        var middleValue = (maxValue + minValue) / 2;
	        if (minValue <= currentValue && currentValue <= middleValue) {
	            return calendarSparkline_getLinearColor(calendarSparkline_getPercent(currentValue, minValue, middleValue), startColor, middleColor);
	        }
	        return calendarSparkline_getLinearColor(calendarSparkline_getPercent(currentValue, middleValue, maxValue), middleColor, endColor);
	    }
	
	    function calendarSparkline_getMinMaxValue(values) {
	        var minValue = NUMBER_MAX_VALUE, maxValue = -NUMBER_MAX_VALUE;
	        values.forEach(function (v) {
	            if (v !== keyword_null && v !== keyword_undefined) {
	                if (minValue > v) {
	                    minValue = v;
	                }
	                if (maxValue < v) {
	                    maxValue = v;
	                }
	            }
	        });
	        return {min: minValue, max: maxValue};
	    }
	
	    function calendarSparkline_fillColors(values, colors, dayOfWeek, value_colors, startColor, middleColor, endColor) {
	        if (value_colors) {
	            values.forEach(function (v, i) {
	                if (v !== 0 && v !== keyword_null && v !== keyword_undefined) {
	                    colors[dayOfWeek + i] = value_colors[i] || colors[dayOfWeek + i];
	                }
	            });
	        } else {
	            var returnObj = calendarSparkline_getMinMaxValue(values);
	            var minValue = returnObj.min, maxValue = returnObj.max;
	            values.forEach(function (v, i) {
	                if (v !== 0 && v !== keyword_null && v !== keyword_undefined) {
	                    colors[dayOfWeek + i] = calendarSparkline_getColor(startColor, middleColor, endColor, v, minValue, maxValue);
	                }
	            });
	        }
	    }
	
	    function monthSparkline_paint(context, value, x, y, width, height) {
	        var year = value.year, month = value.month, values = value.values,
	            emptyColor = value.emptyColor || "lightgray", startColor = value.startColor,
	            middleColor = value.middleColor, endColor = value.endColor, notThisMonthColor = "white";
	        var HORIZONTAL_ITEMCOUNT = 6, VERTICAL_ITEMCOUNT = 7;
	        var MARGIN = 2, UNIT_WIDTH = (width - (HORIZONTAL_ITEMCOUNT + 1) * MARGIN) / HORIZONTAL_ITEMCOUNT,
	            UNIT_HEIGHT = (height - (VERTICAL_ITEMCOUNT + 1) * MARGIN) / VERTICAL_ITEMCOUNT;
	        var colors = [];
	        var dayOfWeek = new Date(year, month - 1, 1).getDay();
	        for (var i = 0; i < HORIZONTAL_ITEMCOUNT * VERTICAL_ITEMCOUNT; i++) {
	            if (i < dayOfWeek) {
	                colors[i] = notThisMonthColor;
	            } else if (i < dayOfWeek + calendarSparkline_daysOfMonth(year, month)) {
	                colors[i] = emptyColor;
	            } else {
	                colors[i] = notThisMonthColor;
	            }
	        }
	        calendarSparkline_fillColors(values, colors, dayOfWeek, value.colors, startColor, middleColor, endColor);
	
	        context.save();
	        context.rect(x, y, width, height);
	        context.clip();
	        context.beginPath();
	
	        var colorIndex = 0;
	        for (var col = 0; col < HORIZONTAL_ITEMCOUNT; col++) {
	            for (var row = 0; row < VERTICAL_ITEMCOUNT; row++) {
	                context.fillStyle = colors[colorIndex++];
	                context.fillRect(x + col * UNIT_WIDTH + (col + 1 ) * MARGIN, y + row * UNIT_HEIGHT + (row + 1) * MARGIN, UNIT_WIDTH, UNIT_HEIGHT);
	            }
	        }
	
	        context.restore();
	    }
	
	    function calendarSparkline_dayInYear(date) {
	        var year = date.getFullYear(), month = date.getMonth();
	        var day = date.getDate();
	        for (var i = 1; i < month + 1; i++) {
	            day += calendarSparkline_daysOfMonth(year, i);
	        }
	        return day;
	    }
	
	    function yearSparkline_paint(context, value, x, y, width, height, options) {
	        var year = value.year, values = value.values,
	            emptyColor = value.emptyColor || "lightgray", startColor = value.startColor,
	            middleColor = value.middleColor, endColor = value.endColor, notThisYearColor = "white";
	        var VERTICAL_ITEMCOUNT = 7, HORIZONTAL_ITEMCOUNT = parseInt(366 / VERTICAL_ITEMCOUNT) + 2;
	        var colors = [];
	        var dayOfWeek = new Date(year, 0, 1).getDay(), totalDays = calendarSparkline_dayInYear(new Date(year, 11, 31));
	        for (var i = 0; i < HORIZONTAL_ITEMCOUNT * VERTICAL_ITEMCOUNT; i++) {
	            if (i < dayOfWeek) {
	                colors[i] = notThisYearColor;
	            } else if (i < dayOfWeek + totalDays) {
	                colors[i] = emptyColor;
	            } else {
	                colors[i] = notThisYearColor;
	            }
	        }
	        calendarSparkline_fillColors(values, colors, dayOfWeek, value.colors, startColor, middleColor, endColor);
	
	        context.save();
	        context.rect(x, y, width, height);
	        context.clip();
	
	                var zoomFactor = options.zoomFactor;
	        var YEAR_WIDTH = 15 * zoomFactor, plotX = x + YEAR_WIDTH, plotY = y, plotWidth = width - YEAR_WIDTH,
	            plotHeight = height;
	        context.save();
	        context.translate(x + YEAR_WIDTH / 2, plotY + plotHeight);
	        context.rotate(-Math.PI / 2);
	        context.font = 13 * zoomFactor + PX_ARIAL;
	        context.fillStyle = "black";
	        context.textBaseline = "middle";
	        context.textAlign = "center";
	        context.fillText(year, plotHeight / 2, 0);
	        context.restore();
	                var MARGIN = 2, UNIT_WIDTH = (plotWidth - (HORIZONTAL_ITEMCOUNT + 1) * MARGIN) / HORIZONTAL_ITEMCOUNT,
	            UNIT_HEIGHT = (plotHeight - (VERTICAL_ITEMCOUNT + 1) * MARGIN) / VERTICAL_ITEMCOUNT;
	        var index = 0, row, col, layout;
	        var layoutModel = [];
	        for (col = 0; col < HORIZONTAL_ITEMCOUNT; col++) {
	            for (row = 0; row < VERTICAL_ITEMCOUNT; row++) {
	                layout = {
	                    x: plotX + col * UNIT_WIDTH + (col + 1 ) * MARGIN,
	                    y: plotY + row * UNIT_HEIGHT + (row + 1) * MARGIN,
	                    w: UNIT_WIDTH,
	                    h: UNIT_HEIGHT
	                };
	                layoutModel[index] = layout;
	                context.fillStyle = colors[index++];
	                context.fillRect(layout.x, layout.y, layout.w, layout.h);
	            }
	        }
	                var lines = [];
	        var firstDayIndexDict = {};
	        for (var m = 0; m < 12; m++) {
	            firstDayIndexDict[m] = calendarSparkline_dayInYear(new Date(year, m, 1)) - 1 + dayOfWeek;
	        }
	        var lastDayInYear = firstDayIndexDict[11] + calendarSparkline_daysOfMonth(year, 12) - 1;
	        index = 0;
	        for (col = 0; col < HORIZONTAL_ITEMCOUNT; col++) {
	            for (row = 0; row < VERTICAL_ITEMCOUNT; row++) {
	                if (dayOfWeek <= index && index < dayOfWeek + totalDays) {
	                    var tmpDate = new Date(year, 0, index - dayOfWeek + 1);
	                    var tmpMonth = tmpDate.getMonth();
	                    var firstDayInMonth = firstDayIndexDict[tmpMonth];
	                    layout = layoutModel[index];
	                                        if (firstDayInMonth <= index && index < 7 + firstDayInMonth) {
	                        lines.push({
	                            x1: layout.x,
	                            y1: layout.y - MARGIN / 2,
	                            x2: layout.x,
	                            y2: layout.y + layout.h + MARGIN / 2
	                        });
	                    }
	                                        if (index === firstDayInMonth || tmpDate.getDay() === 0) {
	                        lines.push({
	                            x1: layout.x - MARGIN / 2,
	                            y1: layout.y,
	                            x2: layout.x + layout.w + MARGIN / 2 + (index === firstDayInMonth ? MARGIN : 0),
	                            y2: layout.y
	                        });
	                    }
	                                        if (lastDayInYear - 7 < index && index <= lastDayInYear) {
	                        lines.push({
	                            x1: layout.x + layout.w,
	                            y1: layout.y - MARGIN / 2,
	                            x2: layout.x + layout.w,
	                            y2: layout.y + layout.h + MARGIN / 2
	                        });
	                    }
	                                        if (index === lastDayInYear || tmpDate.getDay() === 6) {
	                        lines.push({
	                            x1: layout.x - MARGIN / 2 - (index === lastDayInYear ? MARGIN : 0),
	                            y1: layout.y + layout.h,
	                            x2: layout.x + layout.w + MARGIN / 2,
	                            y2: layout.y + layout.h
	                        });
	                    }
	                }
	                index++;
	            }
	        }
	        context.strokeStyle = "black";
	        context.lineWidth = 2;
	        for (var j = 0; j < lines.length; j++) {
	            var lineInfo = lines[j];
	            context.beginPath();
	            context.moveTo(lineInfo.x1, lineInfo.y1);
	            context.lineTo(lineInfo.x2, lineInfo.y2);
	            context.stroke();
	        }
	
	        context.restore();
	    }
	
	   
	
	   
	    var SparklineRender = (function () {
	        function SparklineRender() {
	            var self = this;
	            self._minItemHeight = 2;
	            self._cachedMinDatetime = NUMBER_MAX_VALUE;
	            self._cachedMaxDatetime = -NUMBER_MAX_VALUE;
	            self._cachedMinValue = NUMBER_MAX_VALUE;
	            self._cachedMaxValue = -NUMBER_MAX_VALUE;
	        }
	
	        SparklineRender.prototype = {
	            constructor: SparklineRender,
	            paint: function (ctx, value, x, y, w, h) {
	                var self = this;
	                self.options = value;
	                self.setting = value.settings;
	                var values = value.values;
	                var dateValues = value.dateValues;
	                var zoomFactor = value.zoomFactor;
	                ctx.save();
	                ctx.rect(x, y, w, h);
	                ctx.clip();
	                ctx.beginPath();
	                if (value.sparklineType === 0 ) {
	                    self._paintLines(ctx, x, y, w, h, values, dateValues, zoomFactor);
	                }
	                self._paintDataPoints(ctx, x, y, w, h, values, dateValues, zoomFactor);
	                self._paintAxis(ctx, x, y, w, h, values, dateValues, zoomFactor);
	                ctx.restore();
	            },
	            _getSpace: function (zoomFactor) {
	                if (this.options.sparklineType === 0 ) {
	                    return 3 + this._getLineWeight(zoomFactor) + 1;
	                }
	                return 3;
	            },
	            _getCachedIndexMaping: function (cachedValues, cachedDatetimes) {
	                var cachedIndexMapping = this._cachedIndexMapping;
	                if (cachedIndexMapping) {
	                    return cachedIndexMapping;
	                }
	                cachedIndexMapping = this._cachedIndexMapping = [];
	                var valueCount = cachedValues.length, i, v;
	                if (this.options.displayDateAxis) {
	                    var dateAxisCount = cachedDatetimes.length, count = Math_min(valueCount, dateAxisCount),
	                        sorted = [];
	                    if (count > 0) {
	                        sorted = cachedDatetimes.slice(0, count);
	                    }
	                   
	                    sorted.sort(function (a, b) {
	                        if (a === b) {
	                            return 0;
	                        }
	                        if (a === __invalidValuePlaceHolder) {
	                            a = 0;
	                        }
	                        if (b === __invalidValuePlaceHolder) {
	                            b = 0;
	                        }
	                        return a - b;
	                    });
	                    var sortedCount = sorted.length, datetime, valueIndex;
	                    for (i = 0; i < sortedCount; i++) {
	                        datetime = sorted[i];
	                        if (typeof datetime === const_undefined || datetime === keyword_null) {
	                            continue;
	                        }
	                        valueIndex = ArrayHelper_indexOf(cachedDatetimes, datetime);
	                        while (ArrayHelper._contains(cachedIndexMapping, valueIndex)) {
	                            valueIndex = ArrayHelper_indexOf(cachedDatetimes, datetime, valueIndex + 1);
	                        }
	                        if (!isNaN(datetime)) {
	                            v = cachedValues[valueIndex];
	                            if (!(v !== keyword_undefined && v !== keyword_null && isNaN(v) && v !== __invalidValuePlaceHolder)) {
	                                cachedIndexMapping.push(valueIndex);
	                            }
	                        }
	                    }
	                } else {
	                    for (i = 0; i < valueCount; i++) {
	                        v = cachedValues[i];
	                        if (!(typeof v !== const_undefined && v !== keyword_null && isNaN(v) && v !== __invalidValuePlaceHolder)) {
	                            cachedIndexMapping.push(i);
	                        }
	                    }
	                }
	                return cachedIndexMapping;
	            },
	            _getValue: function (valueIndex, cachedValues) {
	                var item = cachedValues[valueIndex];
	                if (typeof item === const_undefined || item === keyword_null) {
	                    if (this.setting.options.displayEmptyCellsAs === 1 ) {
	                        item = 0;
	                    }
	                } else if (item === __invalidValuePlaceHolder) {
	                    item = 0;
	                }
	                return item;
	            },
	            _paintLines: function (ctx, x, y, w, h, cachedValues, cachedDatetimes, zoomFactor) {
	               
	                var self = this;
	                var cachedIndexMaping = self._getCachedIndexMaping(cachedValues, cachedDatetimes), i, p1, p2,
	                    count = cachedIndexMaping.length - 1;
	                if (count < 0) {
	                    count = 0;
	                }
	                var optionSettings = self.setting.options;
	                var linePos = self.linePos = [], start, end, endIndex, startRec, endRec,
	                    displayEmptyCellsAs = optionSettings.displayEmptyCellsAs, temp, d;
	                for (i = 0; i < count; i++) {
	                    start = self._getValue(cachedIndexMaping[i], cachedValues);
	                    if (typeof start !== const_undefined && start !== keyword_null) {
	                        endIndex = i + 1;
	                        end = self._getValue(cachedIndexMaping[endIndex], cachedValues);
	                        if (typeof end === const_undefined || end === keyword_null) {
	                            if (displayEmptyCellsAs === 1 ) {
	                                end = 0;
	                            } else if (displayEmptyCellsAs === 2 ) {
	                                for (endIndex = i + 2; endIndex <= count; endIndex++) {
	                                    temp = cachedValues[cachedIndexMaping[endIndex]];
	                                    if (typeof temp !== const_undefined && temp !== keyword_null) {
	                                        end = temp;
	                                        break;
	                                    }
	                                }
	                            }
	                        }
	                        if (typeof end !== const_undefined && end !== keyword_null) {
	                            startRec = self._getDataPointPosition(cachedIndexMaping[i], {
	                                Width: w,
	                                Height: h
	                            }, cachedValues, cachedDatetimes, zoomFactor);
	                            endRec = self._getDataPointPosition(cachedIndexMaping[endIndex], {
	                                Width: w,
	                                Height: h
	                            }, cachedValues, cachedDatetimes, zoomFactor);
	                            d = startRec.Width / 2;
	                            p1 = {X: startRec.X + d, Y: startRec.Y + d};
	                            p2 = {X: endRec.X + d, Y: endRec.Y + d};
	                            linePos[i] = {P1: p1, P2: p2};
	                        } else {
	                            i++;                         }
	                    }
	                }
	               
	               
	                var linePosCount = linePos.length, line;
	                if (linePosCount > 0) {
	                    ctx.strokeStyle = self.options.getColor(optionSettings.seriesColor);
	                    ctx.lineCap = 'round';
	                    ctx.lineWidth = self._getLineWeight(zoomFactor);
	                    for (i = 0; i < linePosCount; i++) {
	                        line = linePos[i];
	                        if (!line) {
	                            continue;
	                        }
	                        ctx.beginPath();
	                        p1 = line.P1;
	                        p2 = line.P2;
	                        ctx.moveTo(x + p1.X, y + p1.Y);
	                        ctx.lineTo(x + p2.X, y + p2.Y);
	                        ctx.stroke();
	                        ctx.closePath();
	                    }
	                }
	               
	            },
	            _getDataPointColor: function (indexInValueCache, cachedValues, cachedDatetimes) {
	                var self = this;
	                var options = self.options;
	                var settingOptions = self.setting.options;
	                var ret = keyword_null,
	                    value = self._getValue(indexInValueCache, cachedValues),
	                    cachedIndexMaping = self._getCachedIndexMaping(cachedValues, cachedDatetimes),
	                    cachedIndexMapingCount = cachedIndexMaping.length;
	                var getColor = options.getColor.bind(self);
	                if (typeof value !== const_undefined && value !== keyword_null) {
	                    if (self._cachedMinValue === NUMBER_MAX_VALUE || self._cachedMaxValue === -NUMBER_MAX_VALUE) {
	                        self._getMaxMinValue(cachedValues);
	                    }
	                    if (value === self._cachedMinValue && settingOptions.showLow) {
	                        ret = getColor(settingOptions.lowMarkerColor);
	                    }
	                    if (value === self._cachedMaxValue && settingOptions.showHigh && (typeof ret === const_undefined || ret === keyword_null)) {
	                        ret = getColor(settingOptions.highMarkerColor);
	                    }
	                    if (typeof ret === const_undefined || ret === keyword_null) {
	                        if (options.displayDateAxis) {
	                            var dateIndex1 = ArrayHelper_indexOf(cachedIndexMaping, indexInValueCache);
	                            if (dateIndex1 === 0 && settingOptions.showFirst) {
	                                ret = getColor(settingOptions.firstMarkerColor);
	                            }
	                        } else if (indexInValueCache === 0 && settingOptions.showFirst) {
	                            ret = getColor(settingOptions.firstMarkerColor);
	                        }
	                    }
	                    if (typeof ret === const_undefined || ret === keyword_null) {
	                        if (options.displayDateAxis) {
	                            var dateIndex2 = ArrayHelper_indexOf(cachedIndexMaping, indexInValueCache);
	                            if (dateIndex2 === cachedIndexMapingCount - 1 && settingOptions.showLast) {
	                               
	                                ret = getColor(settingOptions.lastMarkerColor);
	                            }
	                        } else if (indexInValueCache === cachedIndexMapingCount - 1 && settingOptions.showLast) {
	                            ret = getColor(settingOptions.lastMarkerColor);
	                        }
	                    }
	                    if (value < 0 && settingOptions.showNegative && (typeof ret === const_undefined || ret === keyword_null)) {
	                        ret = getColor(settingOptions.negativeColor);
	                    }
	                    if (typeof ret === const_undefined || ret === keyword_null) {
	                        var sparklineType = options.sparklineType;
	                        if (sparklineType === 0 ) {
	                            if (settingOptions.showMarkers) {
	                                ret = getColor(settingOptions.markersColor);
	                            }
	                        } else if (sparklineType === 1 ) {
	                            ret = getColor(settingOptions.seriesColor);
	                        } else if (sparklineType === 2 ) {
	                            ret = getColor(settingOptions.seriesColor);
	                        }
	                    }
	                }
	                if (ret === keyword_undefined || ret === keyword_null) {
	                    return 'Transparent';
	                }
	                return ret;
	            },
	
	            _paintDataPoints: function (ctx, x, y, w, h, cachedValues, cachedDatetimes, zoomFactor) {                 var self = this;
	                var finalSize = {
	                        Width: w,
	                        Height: h
	                    }, cachedIndexMaping = self._getCachedIndexMaping(cachedValues, cachedDatetimes),
	                    cachedIndexMapingCount = cachedIndexMaping.length, spType = self.options.sparklineType, index,
	                    color,
	                    rec, centerX, centerY, newX, newY, newWidth, newHeight;
	                for (var i = 0; i < cachedIndexMapingCount; i++) {
	                    index = cachedIndexMaping[i];
	                    color = self._getDataPointColor(index, cachedValues, cachedDatetimes);
	                    rec = self._getDataPointPosition(index, finalSize, cachedValues, cachedDatetimes, zoomFactor);
	                    if (ctx.fillStyle !== color) {
	                        ctx.fillStyle = color;
	                    }
	                    if (spType === 0 ) {
	                        ctx.save();
	                        centerX = x + rec.X + rec.Width / 2;
	                        centerY = y + rec.Y + rec.Height / 2;
	                        ctx.translate(centerX, centerY);
	                        ctx.rotate(45 * Math_PI / 180);
	                        ctx.fillRect(0 - rec.Width / 2, 0 - rec.Height / 2, rec.Width, rec.Height);
	                        ctx.restore();
	                    } else {
	                        newX = x + rec.X + rec.Width / 4;
	                        newX = Math_floor(newX);
	                        newY = y + rec.Y;
	                        newWidth = rec.Width / 2;
	                        newHeight = rec.Height;
	                        ctx.fillRect(newX, newY, newWidth, newHeight);
	                    }
	                }
	            },
	            _paintAxis: function (ctx, x, y, w, h, cachedValues, cachedDatetimes, zoomFactor) {                 var self = this;
	                var settingOptions = self.setting && self.setting.options;
	                if (!settingOptions || !settingOptions.displayXAxis || !self._hasAxis(cachedValues, cachedDatetimes)) {
	                    return;
	                }
	                var avalibleSize = {
	                        Width: w,
	                        Height: h
	                    }, x1 = self._getSpace(zoomFactor), x2 = avalibleSize.Width - self._getSpace(zoomFactor),
	                    y1 = Math_floor(self._getAxisY(avalibleSize, cachedValues, zoomFactor)) + 0.5, y2 = y1,
	                    color = self.options.getColor(settingOptions.axisColor), lineWidth = zoomFactor;
	                if (lineWidth < 1) {
	                    lineWidth = 1;
	                }
	                if (ctx.strokeStyle !== color) {
	                    ctx.strokeStyle = color;
	                }
	                if (ctx.lineWidth !== lineWidth) {
	                    ctx.lineWidth = lineWidth;
	                }
	                ctx.beginPath();
	                ctx.moveTo(x + x1, y + y1);
	                ctx.lineTo(x + x2, y + y2);
	                ctx.stroke();
	            },
	            _hasAxisNormal: function (cachedValues) {
	                var max = this._getActualMaxValue(cachedValues);
	                if (max !== -NUMBER_MAX_VALUE) {
	                    var min = this._getActualMinValue(cachedValues);
	                    if (min !== NUMBER_MAX_VALUE) {
	                        return max === min || max * min <= 0;
	                    }
	                }
	                return true;
	            },
	            _hasAxis: function (cachedValues, cachedDatetimes) {
	                var b = this._hasAxisNormal(cachedValues);
	                if (this.options.sparklineType !== 2 ) {
	                    return b;
	                }
	                var cachedIndexMaping = this._getCachedIndexMaping(cachedValues, cachedDatetimes),
	                    cachedIndexMapingCount = cachedIndexMaping.length, index, item;
	                if (!b && cachedIndexMapingCount > 0) {
	                    for (var i = 0; i < cachedIndexMapingCount; i++) {
	                        index = cachedIndexMaping[i];
	                        item = cachedValues[index];
	                        if (typeof item !== const_undefined && item !== keyword_null) {
	                            return true;
	                        }
	                    }
	                }
	                return b;
	            },
	            _getMinDatetime: function (cachedValues, cachedDatetimes) {
	                var oldCachedMinDatetime = this._cachedMinDatetime;
	                if (isNaN(oldCachedMinDatetime) || oldCachedMinDatetime === NUMBER_MAX_VALUE) {
	                    this._getMaxMindatetimes(cachedValues, cachedDatetimes);
	                }
	                return this._cachedMinDatetime;
	            },
	            _getMaxDatetime: function (cachedValues, cachedDatetimes) {
	                var oldCachedMaxDatetime = this._cachedMaxDatetime;
	                if (isNaN(oldCachedMaxDatetime) || oldCachedMaxDatetime === -NUMBER_MAX_VALUE) {
	                    this._getMaxMindatetimes(cachedValues, cachedDatetimes);
	                }
	                return this._cachedMaxDatetime;
	            },
	            _getMaxMindatetimes: function (cachedValues, cachedDatetimes) {
	                var self = this;
	                var maxDatetime = new Date(0, 0, 0), minDatetime = NUMBER_MAX_VALUE,
	                    cachedIndexMaping = self._getCachedIndexMaping(cachedValues, cachedDatetimes),
	                    cachedIndexMapingCount = cachedIndexMaping.length, index, datetime, v;
	                for (var i = 0; i < cachedIndexMapingCount; i++) {                     index = cachedIndexMaping[i];
	                    datetime = cachedDatetimes[index];
	                    if (isNaN(datetime)) {
	                        continue;
	                    }
	                    v = self._getValue(index, cachedValues);
	                    if (v !== keyword_null && typeof v === const_undefined || isNaN(v)) {
	                        continue;
	                    }
	                    if (typeof datetime === const_undefined || datetime === keyword_null) {
	                        continue;
	                    }
	                    if (datetime > maxDatetime) {
	                        maxDatetime = datetime;
	                    }
	                    if (datetime < minDatetime) {
	                        minDatetime = datetime;
	                    }
	                }
	                self._cachedMaxDatetime = maxDatetime;
	                self._cachedMinDatetime = minDatetime;
	            },
	            _calcItemWidth: function (availableSize, cachedValues, cachedDatetimes, zoomFactor) {
	                var self = this;
	                var min = self._getMinDatetime(cachedValues, cachedDatetimes),
	                    max = self._getMaxDatetime(cachedValues, cachedDatetimes),
	                    datetimeValues = [], i, d, index,
	                    cachedIndexMaping = self._getCachedIndexMaping(cachedValues, cachedDatetimes),
	                    cachedIndexMapingCount = cachedIndexMaping.length;
	                for (i = 0; i < cachedIndexMapingCount; i++) {
	                    index = cachedIndexMaping[i];
	                    d = cachedDatetimes[index];
	                    if (!d || isNaN(d)) {
	                        continue;
	                    }
	                    datetimeValues.push(d);
	                }
	                datetimeValues.sort(function (x, y) {
	                    return x - y;
	                });
	                var valueCount = datetimeValues.length;
	                if (valueCount > 1 && min !== max) {
	                    var minDValue = NUMBER_MAX_VALUE, sumD = 0, oa;
	                    for (i = 1; i < valueCount; i++) {
	                        oa = datetimeValues[i];
	                        d = oa - datetimeValues[i - 1];
	                        if (d < minDValue && d > 0) {
	                            minDValue = d;
	                        }
	                        sumD += d;
	                    }
	                    var width = (availableSize.Width - self._getSpace(zoomFactor) - self._getSpace(zoomFactor)) * minDValue / sumD / 2;
	                    if (width < 2) {
	                        width = 2;
	                    }
	                    return width;
	                }
	                return (availableSize.Width - self._getSpace(zoomFactor) - self._getSpace(zoomFactor)) / 2;
	            },
	            _getItemWidth: function (availableSize, cachedValues, cachedDatetimes, zoomFactor) {
	                var self = this;
	                if (self.options.displayDateAxis) {
	                    return self._calcItemWidth(availableSize, cachedValues, cachedDatetimes, zoomFactor);
	                }
	                var count = self._getCachedIndexMaping(cachedValues, cachedDatetimes).length;
	                return (availableSize.Width - self._getSpace(zoomFactor) - self._getSpace(zoomFactor)) / count;
	            },
	            _getItemX: function (availableSize, index, cachedValues, cachedDatetimes, zoomFactor) {
	                var self = this;
	                var itemWidth, leftSpace = self._getSpace(zoomFactor);
	                if (self.options.displayDateAxis) {
	                    itemWidth = self._getItemWidth(availableSize, cachedValues, cachedDatetimes, zoomFactor);
	                    var max = self._getMaxDatetime(cachedValues, cachedDatetimes),
	                        min = self._getMinDatetime(cachedValues, cachedDatetimes);
	                    if (max === min) {
	                        return leftSpace + itemWidth / 2;
	                    }
	                    var datetime = cachedDatetimes[index];
	                    if (!datetime) {
	                        return 0;
	                    }
	                   
	                    var canvasWidth = availableSize.Width - leftSpace - self._getSpace(zoomFactor);
	                    canvasWidth -= itemWidth;
	                    var range = max - min;
	                    return leftSpace + Math_floor(((datetime - min) / range) * canvasWidth);
	                }
	
	                itemWidth = self._getItemWidth(availableSize, cachedValues, cachedDatetimes, zoomFactor);
	                var valueIndex = ArrayHelper_indexOf(self._getCachedIndexMaping(cachedValues, cachedDatetimes), index),
	                    x = leftSpace + itemWidth * valueIndex;
	                return Math_floor(x);
	            },
	            _getCanvasSize: function (availableSize, zoomFactor) {
	                var self = this;
	                var w = availableSize.Width - self._getSpace(zoomFactor) - self._getSpace(zoomFactor);
	                w = Math_max(w, 0);
	                var h = availableSize.Height - self._getSpace(zoomFactor) - self._getSpace(zoomFactor);
	                h = Math_max(h, 0);
	                return {Width: w, Height: h};
	            },
	            _getMaxMinValue: function (cachedValues) {
	                var self = this;
	                var valueCount = cachedValues.length, item;
	                for (var i = 0; i < valueCount; i++) {
	                    item = cachedValues[i];
	                    if (typeof item !== const_undefined && item !== keyword_null) {
	                        if (typeof item !== 'number') {
	                            item = 0;
	                        }
	                        if (item < self._cachedMinValue) {
	                            self._cachedMinValue = item;
	                        }
	                        if (item > self._cachedMaxValue) {
	                            self._cachedMaxValue = item;
	                        }
	                    }
	                }
	            },
	            _getActualMaxValue: function (cachedValues) {
	                var self = this;
	                if (self._cachedMaxValue === -NUMBER_MAX_VALUE || !self._cachedMaxValue) {
	                    self._getMaxMinValue(cachedValues);
	                }
	                var settingOptions = self.setting.options, maxAxisType = settingOptions.maxAxisType;
	                if (maxAxisType === 0 ) {
	                    return self._cachedMaxValue;
	                } else if (maxAxisType === 1 ) {
	                    return settingOptions.groupMaxValue;
	                } else if (maxAxisType === 2 ) {
	                    return settingOptions.manualMax;
	                }
	                return self._cachedMaxValue;
	            },
	            _getActualMinValue: function (cachedValues) {
	                var self = this;
	                if (self._cachedMinValue === NUMBER_MAX_VALUE || !self._cachedMinValue) {
	                    self._getMaxMinValue(cachedValues);
	                }
	                var settingOptions = self.setting.options, maxAxisType = settingOptions.minAxisType;
	                if (maxAxisType === 0 ) {
	                    return self._cachedMinValue;
	                } else if (maxAxisType === 1 ) {
	                    return settingOptions.groupMinValue;
	                } else if (maxAxisType === 2 ) {
	                    return settingOptions.manualMin;
	                }
	            },
	            _getItemHeightNormal: function (availableSize, index, cachedValues, zoomFactor) {
	                var size = this._getCanvasSize(availableSize, zoomFactor), max = this._getActualMaxValue(cachedValues),
	                    min = this._getActualMinValue(cachedValues), range = max - min, value, d;
	                if (max === min) {
	                    if (max === 0) {
	                        return 0;
	                    }
	                    range = Math_abs(max);
	                }
	                value = cachedValues[index];
	                if (!value) {
	                    value = 0;
	                }
	                d = size.Height / range;
	                return value * d;
	            },
	            _getItemHeight: function (availableSize, index, cachedValues, zoomFactor) {
	                var self = this;
	                var sparklineType = self.options.sparklineType, value;
	                if (sparklineType === 0 ) {
	                    return self._getItemHeightNormal(availableSize, index, cachedValues, zoomFactor);
	                } else if (sparklineType === 1 ) {
	                    value = cachedValues[index];
	                    if (self.setting.options.displayEmptyCellsAs === 1  && (typeof value === const_undefined || value === keyword_null)) {
	                        return 0;
	                    }
	                    var h = self._getItemHeightNormal(availableSize, index, cachedValues, zoomFactor);
	                    if (h > -self._minItemHeight && h < self._minItemHeight) {
	                        if (value > 0) {
	                            return h + self._minItemHeight;
	                        } else if (value < 0) {
	                            return h - self._minItemHeight;
	                        }
	                    }
	                    return h;
	                } else if (sparklineType === 2 ) {
	                    value = cachedValues[index];
	                    if (typeof value === const_undefined || value === keyword_null || value === 0 || isNaN(value)) {
	                        return 0;
	                    }
	                    var size = self._getCanvasSize(availableSize, zoomFactor);
	                    if (value >= 0) {
	                        return size.Height / 2;
	                    }
	                    return -size.Height / 2;
	                }
	            },
	            _getAxisYNormal: function (availableSize, cachedValues, zoomFactor) {
	                var self = this;
	                var size = self._getCanvasSize(availableSize, zoomFactor), max = self._getActualMaxValue(cachedValues),
	                    min = self._getActualMinValue(cachedValues);
	               
	                if (max === -NUMBER_MAX_VALUE || min === NUMBER_MAX_VALUE) {
	                    return availableSize.Height / 2;
	                }
	                var range = max - min;
	                if (max === min) {
	                    if (max === 0) {
	                        return availableSize.Height / 2;
	                    }
	                    range = max;
	                    if (max < 0) {
	                        max = 0;
	                    }
	                }
	                var d = size.Height / range;
	                return self._getSpace(zoomFactor) + max * d;
	            },
	            _getAxisY: function (availableSize, cachedValues, zoomFactor) {
	                if (this.options.sparklineType === 2 ) {
	                    return availableSize.Height / 2;
	                }
	                return this._getAxisYNormal(availableSize, cachedValues, zoomFactor);
	            },
	            _getItemVisibleHeightNormal: function (availableSize, index, cachedValues, zoomFactor) {
	                var self = this;
	                var size = self._getCanvasSize(availableSize, zoomFactor), max = self._getActualMaxValue(cachedValues),
	                    min = self._getActualMinValue(cachedValues), range = max - min, d, value;
	                if (max === min) {
	                    if (max === 0) {
	                        return 0;
	                    }
	                    range = max;
	                }
	                d = size.Height / range;
	                value = self._getValue(index, cachedValues);
	                if (typeof value === const_undefined || value === keyword_null) {
	                    value = 0;
	                }
	                if (max !== min && max * min > 0) {
	                    var visibleHeight = 0;
	                    if (value >= 0) {
	                        visibleHeight = (value - min) * d;
	                    } else {
	                        visibleHeight = (value - max) * d;
	                    }
	                    return visibleHeight;
	                }
	                return value * d;
	            },
	            _getItemVisibleHeight: function (availableSize, index, cachedValues, zoomFactor) {
	                var self = this;
	                var sparklineType = self.options.sparklineType;
	                if (sparklineType === 0 ) {
	                    return self._getItemVisibleHeightNormal(availableSize, index, cachedValues, zoomFactor);
	                } else if (sparklineType === 1 ) {
	                    var h = self._getItemVisibleHeightNormal(availableSize, index, cachedValues, zoomFactor),
	                        minItemHeight = self._minItemHeight;
	                    if (h > -minItemHeight && h < minItemHeight) {
	                        var value = self._getValue(index, cachedValues);
	                        if (typeof value === const_undefined || value === keyword_null) {
	                            value = 0;
	                        }
	                        if (value !== 0) {
	                            if (value > 0) {
	                                return h + minItemHeight;
	                            }
	                            return h - minItemHeight;
	                        }
	                    }
	                    return h;
	                } else if (sparklineType === 2 ) {
	                    return self._getItemHeight(availableSize, index, cachedValues, zoomFactor);
	                }
	            },
	            _getDataPointPositionNormal: function (index, availableSize, cachedValues, cachedDatetimes, zoomFactor) {
	                var self = this;
	                var itemWidth = self._getItemWidth(availableSize, cachedValues, cachedDatetimes, zoomFactor),
	                    x = self._getItemX(availableSize, index, cachedValues, cachedDatetimes, zoomFactor);
	                if (itemWidth < 0) {
	                    itemWidth = 0;
	                }
	                itemWidth = Math_floor(itemWidth);
	                if (itemWidth % 2 === 1) {
	                    itemWidth += 1;
	                }
	                var height = self._getItemHeight(availableSize, index, cachedValues, zoomFactor),
	                    axis = self._getAxisY(availableSize, cachedValues, zoomFactor),
	                    max = self._getActualMaxValue(cachedValues),
	                    min = self._getActualMinValue(cachedValues), y = 0;
	                if (max < 0 && min < 0) {
	                    y = Math_max(self._getSpace(zoomFactor), axis);
	                } else {
	                    y = axis;
	                    if (height >= 0) {
	                        y = axis - height;
	                    }
	                }
	                var visibleHeight = self._getItemVisibleHeight(availableSize, index, cachedValues, zoomFactor),
	                    rect = new _PositionRect(x, y, itemWidth, Math_abs(visibleHeight));
	                if (height !== 0) {
	                    var topSpace = self._getSpace(zoomFactor);
	                    if (rect.Y < topSpace && rect.Bottom < topSpace + 1) {
	                        rect.Height = Math_floor(rect.Height + 1);
	                    } else {
	                        var bottomLine = availableSize.Height - self._getSpace(zoomFactor);
	                        if (rect.Bottom > bottomLine && rect.Y > bottomLine - 1) {
	                            rect.Y = bottomLine - visibleHeight;
	                            rect.Height = visibleHeight;
	                        }
	                    }
	                }
	                return rect;
	            },
	            _getLineWeight: function (zoomFactor) {
	                var lineWeight = this.setting.options.lineWeight * zoomFactor;
	                if (lineWeight < 1) {
	                    lineWeight = 1;
	                }
	                return lineWeight;
	            },
	            _getDataPointPosition: function (index, availableSize, cachedValues, cachedDatetimes, zoomFactor) {
	                var self = this;
	                var lineWeight = self._getLineWeight(zoomFactor);
	                lineWeight++;
	                if (lineWeight < 2) {
	                    lineWeight = 2;
	                }
	                var rec = self._getDataPointPositionNormal(index, availableSize, cachedValues, cachedDatetimes, zoomFactor);
	                if (self.options.sparklineType === 0 ) {
	                   
	                    rec.X = rec.X + (rec.Width - lineWeight) / 2;
	                    var value = self._getValue(index, cachedValues);
	                    if (typeof value !== const_undefined && value !== keyword_null) {
	                        if (value >= 0) {
	                            rec.Y -= lineWeight / 2;
	                        } else {
	                            rec.Y = rec.Bottom - lineWeight / 2;
	                        }
	                        rec.Width = lineWeight;
	                        rec.Height = lineWeight;
	                    } else {
	                        rec.Width = 0;
	                        rec.Height = 0;
	                    }
	                }
	                if (self.setting.options.rightToLeft) {
	                    var left = rec.X, reverseLeft = availableSize.Width - left, newLeft = reverseLeft - rec.Width;
	                    rec = new _PositionRect(newLeft, rec.Y, rec.Width, rec.Height);
	                }
	                return rec;
	            }
	        };
	
	        function _PositionRect(x, y, w, h) {
	            var self = this;
	            self.X = x;
	            self.Y = y;
	            self.Width = w;
	            self.Height = h;
	            self.Left = self.X;
	            self.Right = self.Left + self.Width;
	            self.Top = self.Y;
	            self.Bottom = self.Y + self.Height;
	        }
	
	        return SparklineRender;
	    })();
	    exports.SparklineRender = SparklineRender;
	    exports.SparklineExRenders = {
	        PIESPARKLINE: pieSparkline_paint,
	        AREASPARKLINE: areaSparkline_paint,
	        SCATTERSPARKLINE: scatterSparkline_paint,
	        BULLETSPARKLINE: bulletSparkline_paint,
	        SPREADSPARKLINE: spreadSparkline_paint,
	        STACKEDSPARKLINE: stackedSparkline_paint,
	        HBARSPARKLINE: hBarSparkline_paint,
	        VBARSPARKLINE: vBarSparkline_paint,
	        VARISPARKLINE: variSparkline_paint,
	        BOXPLOTSPARKLINE: boxPlotSparkline_paint,
	        CASCADESPARKLINE: cascadeSparkline_paint,
	        PARETOSPARKLINE: paretoSparkline_paint,
	        MONTHSPARKLINE: monthSparkline_paint,
	        YEARSPARKLINE: yearSparkline_paint
	    };
	   
	
	    module.exports = exports;
	
	}());

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    module.exports = __webpack_require__(22);
	
	}());

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var keyword_undefined = void 0, keyword_null = null;
	    var NUMBER = 'number', STRING = 'string', BOOLEAN = 'boolean';
	    var commonNS = __webpack_require__(1);
	    var dateTimeHelper = commonNS._DateTimeHelper;
	    var toOADate = dateTimeHelper._toOADate;
	
	   
	    
	    var FilteredOutDataType = {
	        
	        all: 0,
	        
	        byCurrentColumn: 1,
	        
	        byOtherColumns: 2
	    };
	
	   
	    
	    var SlicerAggregateType = {
	        
	        average: 1,
	        
	        count: 2,
	        
	        counta: 3,
	        
	        max: 4,
	        
	        min: 5,
	        
	        product: 6,
	        
	        stdev: 7,
	        
	        stdevp: 8,
	        
	        sum: 9,
	        
	        vars: 10,
	        
	        varp: 11
	    };
	
	    function isDataItemObject(value) {
	        return value && value.text !== keyword_undefined;
	    }
	
	    var _SortHelper = (function () {
	        function _SortHelper() {
	        }
	
	        _SortHelper.quickSort = function (values) {
	            var count = getLength(values);
	            var array = [];
	            var temp;
	            for (temp = 0; temp < count; temp++) {
	                array[temp] = {
	                    index: temp,
	                    value: values[temp]
	                };
	            }
	            return this.quickSortImp(array);
	        };
	        _SortHelper.quickSortImp = function (arr) {
	            if (getLength(arr) <= 1) {
	                return arr;
	            }
	            var self = this;
	            var pivotIndex = Math.floor(getLength(arr) / 2);
	            var pivot = arr[pivotIndex];
	            var left = [];
	            var right = [];
	            var equal = [];
	            for (var i = 0; i < getLength(arr); i++) {
	                var compareResult = self.sortCompare(arr[i].value, pivot.value);
	                if (compareResult < 0) {
	                    left.push(arr[i]);
	                } else if (compareResult > 0) {
	                    right.push(arr[i]);
	                } else {
	                    equal.push(arr[i]);
	                }
	            }
	            return self.quickSortImp(left).concat(equal, self.quickSortImp(right));
	        };
	        _SortHelper.isEquals = function (v1, v2) {
	            if ((isNullOrUndefined(v1) || v1 === '') && (isNullOrUndefined(v2) || v2 === '')) {
	                return true;
	            }
	            if (v1 instanceof Date && v2 instanceof Date) {
	                return v1.valueOf() === v2.valueOf();
	            } else if (getType(v1) === STRING && getType(v2) === STRING) {
	                return v1.toLowerCase() === v2.toLowerCase();
	            }
	            return v1 === v2;
	        };
	        _SortHelper._toOADate = toOADate;
	        _SortHelper.isGreaterThan = function (v1, v2) {
	            var v1Type = getType(v1), v2Type = getType(v2);
	            if (v1Type === BOOLEAN) {
	                v1 = (v1 ? 1 : 0);
	            } else if (v1 instanceof Date) {
	                v1 = this._toOADate(v1);
	            }
	            if (v2Type === BOOLEAN) {
	                v2 = (v2 ? 1 : 0);
	            } else if (v2 instanceof Date) {
	                v2 = this._toOADate(v2);
	            }
	            if (v1Type !== v2Type && (v1Type === NUMBER || v2Type === NUMBER)) {
	                return (getType(v2) === NUMBER);
	            }
	            if (v1Type === STRING && v2Type === STRING) {
	                return v1.toLowerCase() > v2.toLowerCase(); 
	            }
	            return v1 > v2;
	        };
	        _SortHelper.sortCompare = function (value1, value2) {
	            var self = this;
	            var ret = 0,
	                value1IsNullOrEmptyOrNaN,
	                value2IsNullOrEmptyOrNaN;
	            value1IsNullOrEmptyOrNaN = isNullOrUndefined(value1) || value1 === '' || (getType(value1) === NUMBER && isNaN(value1));
	            value2IsNullOrEmptyOrNaN = isNullOrUndefined(value2) || value2 === '' || (getType(value2) === NUMBER && isNaN(value2));
	            if (value1IsNullOrEmptyOrNaN && value2IsNullOrEmptyOrNaN) {
	                ret = 0;
	            } else if (value1IsNullOrEmptyOrNaN) {
	                ret = 1;
	            } else if (value2IsNullOrEmptyOrNaN) {
	                ret = -1;
	            } else if (self.isEquals(value1, value2)) {
	                ret = 0;
	            } else if (self.isGreaterThan(value1, value2)) {
	                ret = 1;
	            } else {
	                ret = -1;
	            }
	            return ret;
	        };
	        return _SortHelper;
	    })();
	
	    function tryToNumber(value, outValue) { 
	        if (value === keyword_null || value === keyword_undefined) {
	            return false;
	        } else if (getType(value) === NUMBER) {
	            outValue.value = value;
	        } else if (getType(value) === BOOLEAN) {
	            outValue.value = (value ? 1 : 0);
	        } else if (value instanceof Date) {
	            outValue.value = _SortHelper._toOADate(value);
	        } else if (getType(value) === STRING) {
	            value = value.trim();
	            if (getLength(value) === 0) {
	                return false;
	            }
	            var isPercent = false;
	            if (value.charAt(getLength(value) - 1) === '%') {
	                isPercent = true;
	                value = value.substr(0, getLength(value) - 1);
	            }
	           
	           
	            if (getLength(value) >= 2 && value[0] === '0' && value[1] === 'x') {
	                return false;
	            }
	
	            var result = Number(value).valueOf();
	            if (isNaN(result) || !isFinite(result)) {
	               
	               
	                result = new Date(value);
	                if (isNaN(result)) {
	                    return false;
	                }
	                result = _SortHelper._toOADate(result);
	            }
	            if (isPercent) {
	                result /= 100;
	            }
	            outValue.value = result;
	        } else {
	            return false;
	        }
	        return true;
	    }
	
	    function updateFilteredRows(generalSlicerData) {
	        var inPreview = generalSlicerData._inPreview;
	        if (!inPreview) {
	            generalSlicerData._filteredRowMap = [];
	            generalSlicerData._filteredRowIndexes = [];
	        }
	        var filteredRowMap = inPreview ? generalSlicerData._filteredPreviewRowMap : generalSlicerData._filteredRowMap,
	            filteredInfoByRangeSet = generalSlicerData._filteredInfoByRangeSet,
	            filteredInfoSet = generalSlicerData._filteredInfoSet,
	            filteredRowIndexes = inPreview ? generalSlicerData._filteredPreviewRowIndexes : generalSlicerData._filteredRowIndexes,
	            filteredColumns = generalSlicerData._filteredColumns,
	            filteredPreviewColumnSet = generalSlicerData._filteredPreviewColumnSet,
	            filteredPreviewByRangColumnSet = generalSlicerData._filteredPreviewByRangColumnSet,
	            rowCount = getLength(generalSlicerData.data),
	            exclusiveIndex;
	        for (var row = 0; row < rowCount; row++) {
	            var filteredOut = false;
	            for (var i = 0; i < getLength(filteredColumns); i++) { 
	                var col = filteredColumns[i];
	                if (inPreview && col === generalSlicerData._previewCol) {
	                    continue;
	                }
	                if (filteredInfoSet[col]) {
	                    exclusiveIndex = generalSlicerData.getExclusiveRowIndex(generalSlicerData.columnNames[col], row);
	                    filteredOut = !filteredInfoSet[col][exclusiveIndex];
	                } else if (filteredInfoByRangeSet[col]) {
	                    filteredOut = !filteredInfoByRangeSet[col][row];
	                }
	                if (filteredOut) {
	                    break;
	                }
	            }
	            if (!filteredOut && inPreview) {
	                if (filteredPreviewColumnSet) {
	                    exclusiveIndex = generalSlicerData.getExclusiveRowIndex(generalSlicerData.columnNames[col], row);
	                    filteredOut = !filteredPreviewColumnSet[exclusiveIndex];
	                } else if (filteredPreviewByRangColumnSet) {
	                    filteredOut = !filteredPreviewByRangColumnSet[row];
	                }
	            }
	            if (!filteredOut) {
	                filteredRowMap[row] = true;
	            }
	        }
	        for (i = 0; i < getLength(filteredRowMap); i++) {
	            if (filteredRowMap[i]) {
	                filteredRowIndexes.push(i);
	            }
	        }
	    }
	
	    function getKey(value) {
	        if (typeof value === 'string') {
	            return value.toLowerCase();
	        } else if (value instanceof Date) {
	            return _SortHelper._toOADate(value);
	        }
	        return value;
	    }
	
	    function updateDataCaches(generalSlicerData) {
	        var columnsSet = generalSlicerData._columnsSet = {};
	        generalSlicerData._columnDataCache = [];
	        generalSlicerData._exclusiveDataCache = [];
	        generalSlicerData._exclusiveToFullMap = [];
	        generalSlicerData._fullToExclusivelMap = [];
	        var columnNames = generalSlicerData.columnNames;
	        for (var col = 0; col < getLength(columnNames); col++) {
	            columnsSet[(columnNames[col] + '').toUpperCase()] = col;
	        }
	    }
	
	    function updateDataCache(generalSlicerData, col) {
	        var columnDataCache = generalSlicerData._columnDataCache;
	        var exclusiveDataCache = generalSlicerData._exclusiveDataCache;
	        var filteredInfoIndexes = generalSlicerData._exclusiveDataIndex;
	        var exclusiveToFullMap = generalSlicerData._exclusiveToFullMap;
	        var fullToExclusivelMap = generalSlicerData._fullToExclusivelMap;
	        var data = generalSlicerData.data;
	        var fullToExclusivelSet = fullToExclusivelMap[col] = [];
	        generalSlicerData._sortedColumnDataCache = [];
	        columnDataCache[col] = [];
	        exclusiveDataCache[col] = [];
	        filteredInfoIndexes[col] = {};
	        exclusiveToFullMap[col] = [];
	        var uniqueSet = {};
	        for (var row = 0; row < getLength(data); row++) {
	            var dataItem = data[row][col], oneData = isDataItemObject(dataItem) ? dataItem.text.trim() : dataItem;
	            columnDataCache[col].push(oneData);
	            var item = uniqueSet[getKey(oneData)];
	            if (item) {
	                item.list.push(row);
	                fullToExclusivelSet[row] = item.index;
	            } else {
	                var exclusiveToFullList = [row];
	                exclusiveDataCache[col].push(oneData);
	                exclusiveToFullMap[col].push(exclusiveToFullList);
	                var exclusivelIndex = getLength(exclusiveToFullMap[col]) - 1;
	                filteredInfoIndexes[col][oneData] = exclusivelIndex;
	                fullToExclusivelSet[row] = exclusivelIndex;
	                uniqueSet[getKey(oneData)] = { list: exclusiveToFullList, index: exclusivelIndex };
	            }
	        }
	    }
	
	    function getFilteredInfos(generalSlicerData, columnName, isFilteredOut) {
	        var data2SortedMapping = generalSlicerData._data2SortedMapping;
	        var colIndex = generalSlicerData.getColumnIndex(columnName);
	        var result = [];
	        if (!colIndex) {
	            return result;
	        }
	        var filteredRanges = generalSlicerData._inPreview ? generalSlicerData._filteredPreviewByRangColumn : generalSlicerData._filteredInfoByRange[colIndex],
	            filteredInfoSet = generalSlicerData._filteredRowMap;
	        if (!filteredRanges) {
	            return result;
	        }
	        if (!data2SortedMapping[colIndex]) {
	            generalSlicerData._sortOneCol(colIndex);
	        }
	        var sortedData = [],
	            sortedColMapping = data2SortedMapping[colIndex];
	        for (var i = 0; i < getLength(sortedColMapping); i++) {
	            var dataItem = generalSlicerData.data[i][colIndex],
	                dataItemValue = isDataItemObject(dataItem) ? dataItem.value : dataItem;
	            sortedData[sortedColMapping[i]] = dataItemValue;
	        }
	        var sorted2DataMapping = generalSlicerData._sorted2DataMapping[colIndex];
	        for (i = 0; i < getLength(filteredRanges); i++) {
	            var range = filteredRanges[i],
	                isVisible = false;
	            var startEndIndex = generalSlicerData._getStartEndIndex(sortedData, range);
	            for (var row = startEndIndex.start; row <= startEndIndex.end; row++) {
	                if (filteredInfoSet[sorted2DataMapping[row]]) {
	                    isVisible = true;
	                    break;
	                }
	            }
	            if (isVisible !== isFilteredOut) {
	                result.push(range);
	            }
	        }
	        return result;
	    }
	
	    function getAllFilteredOutExclusiveRowIndexes(generalSlicerData, columnName) {
	        var exclusiveIndexes = [];
	        var colIndex = generalSlicerData.getColumnIndex(columnName);
	        if (colIndex >= 0) {
	            var rowCount = getLength(generalSlicerData.getData(columnName)),
	                filteredRowMap = generalSlicerData._inPreview ? generalSlicerData._filteredPreviewRowMap : generalSlicerData._filteredRowMap;
	            for (var r = 0; r < rowCount; r++) {
	                if (!filteredRowMap[r]) {
	                    var index = generalSlicerData.getExclusiveRowIndex(columnName, r);
	                    if (exclusiveIndexes.indexOf(index) === -1) {
	                        exclusiveIndexes.push(index);
	                    }
	                }
	            }
	            return exclusiveIndexes;
	        }
	    }
	
	    function getFilteredOutExclusiveRowIndexesBySelf(generalSlicerData, columnName) {
	        var exclusiveIndexes = [];
	        var indexes = {};
	        var colIndex = generalSlicerData.getColumnIndex(columnName);
	        if (colIndex >= 0) {
	            var filteredColumnSetOrRangColumnSet = generalSlicerData._filteredPreviewColumnSet || generalSlicerData._filteredPreviewByRangColumnSet;
	            var filteredInfoSetOrRangeSet = generalSlicerData._filteredInfoSet[colIndex] || generalSlicerData._filteredInfoByRangeSet[colIndex];
	            var filteredBySelf = (generalSlicerData._inPreview && colIndex === generalSlicerData._previewCol) ? filteredColumnSetOrRangColumnSet : filteredInfoSetOrRangeSet;
	            var isRangeFilter = !!generalSlicerData._filteredInfoByRangeSet[colIndex];
	            var length = isRangeFilter ? getLength(generalSlicerData.getData(columnName)) : getLength(generalSlicerData.getExclusiveData(columnName));
	            for (var i = 0; i < length; i++) {
	                if (filteredBySelf && !filteredBySelf[i]) {
	                    var exclusiveIndex = isRangeFilter ? generalSlicerData.getExclusiveRowIndex(columnName, i) : i;
	                    if (!indexes[exclusiveIndex]) {
	                        indexes[exclusiveIndex] = true;
	                        exclusiveIndexes.push(exclusiveIndex);
	                    }
	                }
	            }
	        }
	        return exclusiveIndexes;
	    }
	
	    function getFilteredOutExclusiveRowIndexesByOther(generalSlicerData, columnName) {
	        var indexes = {}, columnNames = generalSlicerData.columnNames;
	        for (var i = 0, length = getLength(columnNames); i < length; i++) {
	            if (columnNames[i] === columnName) {
	                continue;
	            }
	            var foedIndex = getFilteredOutExclusiveRowIndexesBySelf(generalSlicerData, columnNames[i]);
	            for (var j = 0; j < getLength(foedIndex); j++) {
	                var rowIndexes = generalSlicerData.getRowIndexes(columnNames[i], foedIndex[j]);
	                for (var k = 0; k < getLength(rowIndexes); k++) {
	                    if (!indexes[rowIndexes[k]]) {
	                        indexes[rowIndexes[k]] = true;
	                    }
	                }
	            }
	        }
	        var indexes2 = {};
	        for (i = 0, length = getLength(generalSlicerData.data); i < length; i++) {
	            var en = generalSlicerData.getExclusiveRowIndex(columnName, i);
	            if (!indexes[i]) {
	                indexes2[en] = true;
	            }
	        }
	        var edLength = getLength(generalSlicerData.getExclusiveData(columnName)), result = [];
	        for (i = 0; i < edLength; i++) {
	            if (!indexes2[i]) {
	                result.push(i);
	            }
	        }
	        return result;
	    }
	
	    function doFilterByRange(generalSlicerData, columnName, ranges, isPreview) {
	        var colIndex = generalSlicerData.getColumnIndex(columnName),
	            data2SortedMapping = generalSlicerData._data2SortedMapping;
	        if (!data2SortedMapping[colIndex]) {
	            generalSlicerData._sortOneCol(colIndex);
	        }
	        var sortedData = [],
	            sortedColMapping = data2SortedMapping[colIndex];
	        for (var i = 0; i < getLength(sortedColMapping); i++) {
	            var dataItem = generalSlicerData.data[i][colIndex],
	                dataItemValue = isDataItemObject(dataItem) ? dataItem.value : dataItem;
	            sortedData[sortedColMapping[i]] = dataItemValue;
	        }
	        var map = {};
	        for (i = 0; i < getLength(ranges); i++) {
	            var minMax = generalSlicerData._getStartEndIndex(sortedData, ranges[i]);
	            for (var rowIndex = 0; rowIndex < getLength(sortedColMapping); rowIndex++) {
	                if (sortedColMapping[rowIndex] >= minMax.start && sortedColMapping[rowIndex] <= minMax.end) {
	                    map[rowIndex] = true;
	                }
	            }
	        }
	        if (isPreview) {
	            generalSlicerData._filteredPreviewByRangColumnSet = map;
	            generalSlicerData._filteredPreviewByRangColumn = ranges;
	        } else {
	            generalSlicerData._filteredInfoByRange[colIndex] = ranges;
	            generalSlicerData._filteredInfoByRangeSet[colIndex] = map;
	            delete generalSlicerData._filteredInfoSet[colIndex];
	            delete generalSlicerData._filteredInfoIndexes[colIndex];
	        }
	        updateFilteredRows(generalSlicerData);
	    }
	
	    function doFilterByIndexes(generalSlicerData, columnName, exclusiveRowIndexes, isPreview) {
	        var colIndex = generalSlicerData.getColumnIndex(columnName);
	        var newSet = {};
	        for (var i = 0; i < getLength(exclusiveRowIndexes); i++) {
	            newSet[exclusiveRowIndexes[i]] = true;
	        }
	        if (isPreview) {
	            generalSlicerData._filteredPreviewColumnSet = newSet;
	        } else {
	            generalSlicerData._filteredInfoSet[colIndex] = newSet;
	            generalSlicerData._filteredInfoIndexes[colIndex] = exclusiveRowIndexes;
	            delete generalSlicerData._filteredInfoByRange[colIndex];
	            delete generalSlicerData._filteredInfoByRangeSet[colIndex];
	        }
	        updateFilteredRows(generalSlicerData);
	    }
	
	    function clearPreviewCore(generalSlicerData, fireEvent) {
	        generalSlicerData._inPreview = false;
	        generalSlicerData._filteredPreviewColumnSet = {};
	        generalSlicerData._filteredPreviewRowIndexes = [];
	        generalSlicerData._filteredPreviewRowMap = [];
	        generalSlicerData._filteredPreviewByRangColumnSet = [];
	        if (fireEvent) {
	            generalSlicerData.onFiltered();
	        }
	    }
	
	    var GeneralSlicerData = (function () {
	       
	        
	        function GeneralSlicerData(data, columnNames) {
	            var self = this;
	            self._columnsSet = {};
	            self._columnDataCache = [];
	            self._exclusiveDataCache = [];
	            self._exclusiveDataIndex = [];
	            self._exclusiveToFullMap = [];
	            self._fullToExclusivelMap = [];
	            self._filteredInfoSet = [];
	            self._filteredInfoIndexes = [];
	            self._filteredInfoByRangeSet = [];
	            self._filteredInfoByRange = [];
	            self._filteredRowMap = [];
	            self._filteredRowIndexes = [];
	            self._filteredColumns = [];
	            self._filteredPreviewRowIndexes = [];
	            self._filteredPreviewRowMap = [];
	            self._inPreview = false;
	            self._listeners = [];
	            self._suspendCount = 0;
	            self._sortedColumnDataCache = [];
	            self._sorted2DataMapping = [];
	            self._data2SortedMapping = [];
	            self._setDataSource(data, columnNames);
	            for (var row = 0; row < getLength(self.data); row++) {
	                self._filteredRowMap[row] = true;
	                self._filteredRowIndexes.push(row);
	            }
	        }
	
	        GeneralSlicerData.prototype = {
	            constructor: GeneralSlicerData,
	           
	            
	            inPreview: function () {
	                return this._inPreview;
	            },
	            _setDataSource: function (data, columnNames) {
	                var self = this;
	               
	               
	                
	                self.data = data;
	               
	                
	                self.columnNames = columnNames;
	               
	                updateDataCaches(self);
	            },
	           
	            
	            onDataChanged: function (changedDataItems) {
	                var self = this,
	                    changedColumnIndexes = new Array(getLength(self.columnNames)), 
	                    filteredInfoIndexes = self._filteredInfoIndexes,
	                    exclusiveDataCache = self._exclusiveDataCache,
	                    filteredInfoSet = self._filteredInfoSet,
	                    columnDataCache = self._columnDataCache;
	
	                for (var i = 0; i < getLength(changedDataItems); i++) {
	                    var changedDataItem = changedDataItems[i],
	                        data = changedDataItem.data,
	                        row = changedDataItem.row,
	                        col = self.getColumnIndex(changedDataItem.columnName);
	                    self.data[row][col] = data;
	                    var text = isDataItemObject(data) ? data.text : data;
	                    if (columnDataCache[col]) {
	                        columnDataCache[col][row] = text;
	                    }
	                    changedColumnIndexes[col] = true;
	                }
	                for (var changedCol = 0; changedCol < getLength(changedColumnIndexes); changedCol++) {
	                    if (changedColumnIndexes[changedCol]) {
	                        var oldFilteredIndexes = filteredInfoIndexes[changedCol];
	                        filteredInfoIndexes[changedCol] = oldFilteredIndexes ? [] : undefined;
	                        filteredInfoSet[changedCol] = oldFilteredIndexes ? {} : undefined;
	
	                        var oldFiltedData = [];
	                        for (i = 0; oldFilteredIndexes && i < getLength(oldFilteredIndexes); i++) {
	                            oldFiltedData.push(exclusiveDataCache[changedCol][oldFilteredIndexes[i]]);
	                        }
	                        updateDataCache(self, changedCol);
	                        for (i = 0; i < getLength(oldFiltedData); i++) {
	                            var newIndex = self._exclusiveDataIndex[changedCol][oldFiltedData[i]];
	                            filteredInfoIndexes[changedCol].push(newIndex);
	                            filteredInfoSet[changedCol][newIndex] = true;
	                        }
	                    }
	                }
	                updateFilteredRows(self);
	                self._notifyListeners(changedDataItems, 'onDataChanged');
	            },
	            _notifyListeners: function () {
	                var paraList = arguments,
	                    fnName = paraList[getLength(paraList) - 1];
	                paraList.length -= 1;
	
	                var listeners = this._listeners || [];
	                for (var i = 0; i < getLength(listeners); i++) {
	                    var listener = listeners[i];
	                    listener[fnName] && listener[fnName].apply(listener, paraList);
	                }
	            },
	           
	            
	            onColumnNameChanged: function (oldName, newName) {
	                var self = this, columnsSet = self._columnsSet;
	                var index = self.getColumnIndex(oldName);
	                if (index < 0) {
	                    return;
	                }
	                self.columnNames[index] = newName;
	                delete columnsSet[oldName.toUpperCase()];
	                columnsSet[newName.toUpperCase()] = index;
	                self._notifyListeners(oldName, newName, 'onColumnNameChanged');
	            },
	           
	            
	            onRowsAdded: function (rowIndex, rowCount, notNotify) {
	                var self = this,
	                    dataColCount = getLength(self.columnNames),
	                    data = self.data,
	                    columnDataCache = self._columnDataCache,
	                    exclusiveDataCache = self._exclusiveDataCache,
	                    exclusiveToFullMap = self._exclusiveToFullMap,
	                    fullToExclusivelMap = self._fullToExclusivelMap,
	                    filteredInfoSet = self._filteredInfoSet,
	                    filteredInfoIndexes = self._filteredInfoIndexes,
	                    filteredRowMap = self._filteredRowMap,
	                    filteredRowIndexes = self._filteredRowIndexes,
	                    filteredColumns = self._filteredColumns;
	                self._sortedColumnDataCache = [];
	                for (var i = 0; i < rowCount; i++) {
	                    data.splice(rowIndex, 0, new Array(dataColCount));
	                }
	                for (var col = 0; col < dataColCount; col++) {
	                    for (i = 0; i < rowCount; i++) {
	                        columnDataCache[col] && columnDataCache[col].splice(rowIndex, 0, keyword_undefined);
	                    }
	                    var exclusiveRowData = exclusiveDataCache[col],
	                        addedDataExclusiveIndex;
	                    if (exclusiveRowData) {
	                        var needAddedIndexMap = keyword_null;
	                        for (var exclusiveRow = 0; exclusiveRow < getLength(exclusiveRowData); exclusiveRow++) {
	                            var oneRowExclusiveToFullMap = exclusiveToFullMap[col][exclusiveRow];
	                            for (var index = 0; index < getLength(oneRowExclusiveToFullMap); index++) {
	                                if (oneRowExclusiveToFullMap[index] >= rowIndex) {
	                                    oneRowExclusiveToFullMap[index] += rowCount;
	                                }
	                            }
	                            if (_SortHelper.isEquals(exclusiveRowData[exclusiveRow], keyword_null)) {
	                                needAddedIndexMap = oneRowExclusiveToFullMap;
	                                addedDataExclusiveIndex = exclusiveRow;
	                            }
	                        }
	                        if (!needAddedIndexMap) {
	                            needAddedIndexMap = [];
	                            exclusiveRowData.push(keyword_null);
	                            addedDataExclusiveIndex = getLength(exclusiveRowData) - 1;
	                            self._exclusiveDataIndex[col][keyword_null] = addedDataExclusiveIndex;
	                            exclusiveToFullMap[col].push(needAddedIndexMap);
	                            if (filteredInfoSet[col] && filteredColumns.indexOf(col) === -1) {
	                                filteredInfoSet[col][addedDataExclusiveIndex] = true;
	                                filteredInfoIndexes[col].push(addedDataExclusiveIndex);
	                            }
	                        }
	                        for (var addedRow = rowIndex; addedRow < rowIndex + rowCount; addedRow++) {
	                            needAddedIndexMap.push(addedRow);
	                        }
	                        for (var row = rowIndex; row < rowIndex + rowCount; row++) {
	                            fullToExclusivelMap[col].splice(row, 0, addedDataExclusiveIndex);
	                        }
	                    }
	                }
	                var isAddedRowVisiable = true;
	                for (i = 0; i < getLength(filteredColumns); i++) {
	                    col = filteredColumns[i];
	                    var exclusiveIndex = fullToExclusivelMap[col][rowIndex];
	                    if (filteredInfoSet[col][exclusiveIndex] !== true) {
	                        isAddedRowVisiable = false;
	                    }
	                }
	                for (i = 0; i < getLength(filteredRowIndexes); i++) {
	                    if (filteredRowIndexes[i] >= rowIndex) {
	                        filteredRowIndexes[i] += rowCount;
	                    }
	                }
	                for (row = getLength(data) - 1; row >= rowIndex + rowCount; row--) {
	                    filteredRowMap[row] = filteredRowMap[row - rowCount];
	                }
	                var isFiltered = getLength(filteredColumns) > 0;
	                for (row = rowIndex; row < rowIndex + rowCount; row++) {
	                    if (isAddedRowVisiable) {
	                        filteredRowIndexes.push(row);
	                    }
	                    filteredRowMap[row] = !isFiltered;
	                }
	                if (!notNotify) {
	                    self._notifyListeners(rowIndex, rowCount, true, 'onRowsChanged');
	                }
	            },
	           
	            
	            onRowsRemoved: function (rowIndex, rowCount) {
	                this._onRowsRemovedCore(rowIndex, rowCount, true);
	            },
	            _onRowsRemovedCore: function (rowIndex, rowCount, updateFilter) {
	                var self = this,
	                    filteredInfoIndexes = self._filteredInfoIndexes,
	                    exclusiveDataCache = self._exclusiveDataCache,
	                    filteredInfoSet = self._filteredInfoSet,
	                    data = self.data,
	                    dataColCount = getLength(self.columnNames),
	                    columnDataCache = self._columnDataCache;
	                data.splice(rowIndex, rowCount);
	                for (var col = 0; col < dataColCount; col++) {
	                    columnDataCache[col] && columnDataCache[col].splice(rowIndex, rowCount);
	                    var oldFilteredIndexes = filteredInfoIndexes[col];
	                    var oldFiltedData = [];
	                    if (oldFilteredIndexes && updateFilter) {
	                        for (var i = 0; i < getLength(oldFilteredIndexes); i++) {
	                            var oldIndexes = self.getRowIndexes(self.columnNames[col], oldFilteredIndexes[i]);
	                            var needRemoved = true;
	                            for (var j = 0; j < getLength(oldIndexes); j++) {
	                                if (oldIndexes[j] < rowIndex || oldIndexes[j] >= rowIndex + rowCount) {
	                                    needRemoved = false;
	                                    break;
	                                }
	                            }
	                            if (!needRemoved) {
	                                oldFiltedData.push(exclusiveDataCache[col][oldFilteredIndexes[i]]);
	                            }
	                        }
	                        filteredInfoIndexes[col] = [];
	                        filteredInfoSet[col] = {};
	                    }
	                    updateDataCache(self, col);
	                    if (oldFilteredIndexes && updateFilter) {
	                        for (i = 0; i < getLength(oldFiltedData); i++) {
	                            var newIndex = self._exclusiveDataIndex[col][oldFiltedData[i]];
	                            filteredInfoIndexes[col].push(newIndex);
	                            filteredInfoSet[col][newIndex] = true;
	                        }
	                    }
	                }
	                if (updateFilter) {
	                    updateFilteredRows(self);
	                }
	                self._notifyListeners(rowIndex, rowCount, false, 'onRowsChanged');
	            },
	           
	           
	           
	           
	            
	            onColumnsRemoved: function (colIndex, colCount) {
	                var self = this, data = self.data;
	                var shouldRemoveColumnNames = [];
	                var filteredColumns = self._filteredColumns;
	                var endColIndex = colIndex + colCount;
	                for (var i = colIndex; i < endColIndex; i++) {
	                    var columnName = self.columnNames[i], columnIndex = i;
	                    shouldRemoveColumnNames.push(columnName);
	                    if (filteredColumns.indexOf(columnIndex) !== -1) {
	                        self.doUnfilter(columnName);
	                    }
	                }
	                var filteredInfoSet = self._filteredInfoSet || self._filteredInfoByRangeSet,
	                    filteredInfoIndexes = self._filteredInfoIndexes || self._filteredInfoByRange,
	                    columnsSet = self._columnsSet;
	                for (i = 0; i < getLength(data); i++) {
	                    data[i].splice(colIndex, colCount);
	                }
	                self._sortedColumnDataCache = [];
	                self.columnNames.splice(colIndex, colCount);
	                self._columnDataCache.splice(colIndex, colCount);
	                self._exclusiveDataCache.splice(colIndex, colCount);
	                self._exclusiveDataIndex.splice(colIndex, colCount);
	                self._exclusiveToFullMap.splice(colIndex, colCount);
	                self._fullToExclusivelMap.splice(colIndex, colCount);
	                filteredInfoSet.splice(colIndex, colCount);
	                filteredInfoIndexes.splice(colIndex, colCount);
	                for (var item in columnsSet) {
	                    if (columnsSet[item] >= colIndex + colCount) {
	                        columnsSet[item] -= colCount;
	                    }
	                }
	                for (i = 0; i < getLength(shouldRemoveColumnNames); i++) {
	                    columnName = shouldRemoveColumnNames[i];
	                    delete columnsSet[columnName.toUpperCase()];
	                    colIndex = self.getColumnIndex(columnName);
	                    var index = filteredColumns.indexOf(colIndex);
	                    if (index !== -1) {
	                        filteredColumns.splice(index, 1);
	                    }
	                    self._notifyListeners(shouldRemoveColumnNames[i], 'onColumnRemoved');
	                }
	            },
	            _getSortedColumnDataCache: function () {
	                return this._sortedColumnDataCache;
	            },
	            _getSorted2DataMapping: function () {
	                return this._sorted2DataMapping;
	            },
	            _sortOneCol: function (col) {
	                var self = this, data = self.data;
	                if (!self._columnDataCache[col]) {
	                    updateDataCache(self, col);
	                }
	                var rowCount = getLength(data), values = [];
	                for (var row = 0; row < rowCount; row++) {
	                    var dataItem = data[row][col],
	                        value = isDataItemObject(dataItem) ? dataItem.value : dataItem;
	                    values.push(value);
	                }
	                var result = _SortHelper.quickSort(values);
	                var dataCache = self._sortedColumnDataCache[col] = [],
	                    sorted2DataMapping = self._sorted2DataMapping[col] = [],
	                    data2SortedMapping = self._data2SortedMapping[col] = [];
	                for (var i = 0; i < getLength(result); i++) {
	                    var item = result[i];
	                    dataCache.push(item.value);
	                    sorted2DataMapping.push(item.index);
	                    data2SortedMapping[item.index] = i;
	                }
	            },
	           
	            
	            getColumnIndex: function (columnName) {
	                var colIndex = this._columnsSet[columnName.toUpperCase()];
	                if (colIndex === undefined) {
	                    return -1;
	                }
	                return colIndex;
	            },
	           
	            
	            getFilteredRowIndexes: function () {
	                var self = this;
	                return self._inPreview ? self._filteredPreviewRowIndexes : self._filteredRowIndexes;
	            },
	           
	            
	            getFilteredOutRowIndexes: function () {
	                var self = this;
	                var rowCount = getLength(self.data);
	                var filteredMap = self._inPreview ? self._filteredPreviewRowMap : self._filteredRowMap;
	                var result = [];
	                for (var i = 0; i < rowCount; i++) {
	                    if (!filteredMap[i]) {
	                        result.push(i);
	                    }
	                }
	                return result;
	            },
	           
	            
	            getData: function (columnName, range) {
	                var self = this, columnDataCache = self._columnDataCache;
	                var colIndex = self.getColumnIndex(columnName);
	                if (colIndex >= 0) {
	                    if (range) {
	                        if (!self._sortedColumnDataCache[colIndex]) {
	                            self._sortOneCol(colIndex);
	                        }
	                        var columnDataTexts = columnDataCache[colIndex],
	                            sortedData = self._sortedColumnDataCache[colIndex];
	                        var startEnd = self._getStartEndIndex(sortedData, range);
	                        var start = startEnd.start;
	                        var end = startEnd.end,
	                            result = [];
	                        for (var i = start; i <= end; i++) {
	                            result.push(columnDataTexts[self._sorted2DataMapping[colIndex][i]]);
	                        }
	                        return result;
	                    } else if (!columnDataCache[colIndex]) {
	                        updateDataCache(self, colIndex);
	                    }
	                    return columnDataCache[colIndex];
	                }
	                return [];
	            },
	           
	            
	            aggregateData: function (columnName, aggregateType, range) {
	                var self = this,
	                    col = self.getColumnIndex(columnName),
	                    start,
	                    end;
	                if (col < 0) {
	                    return keyword_undefined;
	                }
	                if (!self._sortedColumnDataCache[col]) {
	                    self._sortOneCol(col);
	                }
	                var sortedData = self._sortedColumnDataCache[col],
	                    dataCount = getLength(sortedData);
	                var startEnd = self._getStartEndIndex(sortedData, range);
	                start = startEnd.start;
	                end = startEnd.end;
	                if (aggregateType === 5 
	                ) {
	                    return start >= dataCount ? keyword_undefined : sortedData[start];
	                } else if (aggregateType === 4 
	                ) {
	                    return end < 0 ? keyword_undefined : sortedData[end];
	                } else if (aggregateType === 3 
	                ) {
	                    return end < start ? 0 : end - start + 1;
	                }
	                var option = self._calcSpecialData(sortedData, aggregateType, start, end);
	                var data1 = option.data1, data2 = option.data2, data3 = option.data3;
	                if (aggregateType === 1 
	                ) {
	                    data1 = data1 / data2;
	                } else if (aggregateType === 7  ||
	                    aggregateType === 10 
	                ) {
	                    data1 = (data3 * data2 - data1 * data1) / (data3 * (data3 - 1.0));
	                    data1 = aggregateType === 7 
	                        ? Math.sqrt(data1) : data1;
	                } else if (aggregateType === 8  ||
	                    aggregateType === 11 
	                ) {
	                    data1 = (data3 * data2 - data1 * data1) / (data3 * data3);
	                    data1 = aggregateType === 8 
	                        ? Math.sqrt(data1) : data1;
	                }
	                return data1;
	            },
	            _calcSpecialData: function (sortedData, aggregateType, start, end) {
	                var data1 = aggregateType === 6 ? 1 : 0, data2 = 0, data3 = 0;
	                for (var index = start; index <= end; index++) {
	                    var itemValue = sortedData[index];
	                    if (itemValue === keyword_null && itemValue === keyword_undefined) {
	                        continue;
	                    }
	                    var item = {
	                        value: keyword_null
	                    };
	                    if (tryToNumber(itemValue, item)) {
	                        itemValue = item.value;
	                        if (aggregateType === 1 
	                        ) {
	                            data1 += itemValue;
	                            data2++;
	                        } else if (aggregateType === 2 
	                        ) {
	                            data1++;
	                        } else if (aggregateType === 9 
	                        ) {
	                            data1 += itemValue;
	                        } else if (aggregateType === 6 
	                        ) {
	                            data1 *= itemValue;
	                        } else if (aggregateType === 7  ||
	                            aggregateType === 8  ||
	                            aggregateType === 10  ||
	                            aggregateType === 11 
	                        ) {
	                            data1 += itemValue;
	                            data2 += itemValue * itemValue;
	                            data3++;
	                        }
	                    }
	                }
	                return {data1: data1, data2: data2, data3: data3};
	            },
	            _getStartEndIndex: function (sortedData, range) {
	                var dataCount = getLength(sortedData),
	                    start,
	                    end;
	                if (range) {
	                    if (range.min === -Infinity) {
	                        start = 0;
	                    } else {
	                        for (var i = 0; i < dataCount; i++) {
	                            var item = sortedData[i];
	                            if (_SortHelper.isEquals(range.min, item) || _SortHelper.isGreaterThan(item, range.min)) {
	                                start = i;
	                                break;
	                            }
	                        }
	                    }
	                    if (start === keyword_undefined) {
	                        start = dataCount;
	                    }
	                    if (end === Infinity) {
	                        end = dataCount - 1;
	                    } else {
	                        for (i = dataCount - 1; i >= 0; i--) {
	                            item = sortedData[i];
	                            if (_SortHelper.isEquals(item, range.max) || _SortHelper.isGreaterThan(range.max, item)) {
	                                end = i;
	                                break;
	                            }
	                        }
	                        if (end === keyword_undefined) {
	                            end = -1;
	                        }
	                    }
	                } else {
	                    start = 0;
	                    end = dataCount - 1;
	                }
	                return {
	                    start: start,
	                    end: end
	                };
	            },
	           
	            
	            getExclusiveData: function (columnName) {
	                var self = this, exclusiveDataCache = self._exclusiveDataCache,
	                    colIndex = self.getColumnIndex(columnName);
	                if (colIndex >= 0) {
	                    if (!exclusiveDataCache[colIndex]) {
	                        updateDataCache(self, colIndex);
	                    }
	                    return exclusiveDataCache[colIndex];
	                }
	                return [];
	            },
	           
	            
	            getRowIndexes: function (columnName, exclusiveRowIndex) {
	                var self = this, colIndex = self.getColumnIndex(columnName);
	                if (colIndex >= 0) {
	                    if (!self._fullToExclusivelMap[colIndex]) {
	                        updateDataCache(self, colIndex);
	                    }
	                    return self._exclusiveToFullMap[colIndex][exclusiveRowIndex];
	                }
	                return [];
	            },
	           
	            
	            getExclusiveRowIndex: function (columnName, rowIndex) {
	                var self = this, fullToExclusivelMap = self._fullToExclusivelMap,
	                    colIndex = self.getColumnIndex(columnName);
	                if (colIndex >= 0) {
	                    if (!fullToExclusivelMap[colIndex]) {
	                        updateDataCache(self, colIndex);
	                    }
	                    return fullToExclusivelMap[colIndex][rowIndex];
	                }
	                return -1;
	            },
	           
	            
	            getFilteredIndexes: function (columnName) {
	                var exclusiveIndexes = [],
	                    exclusiveSet = {};
	                this._getFilteredExclusiveIndexes(columnName, exclusiveIndexes, exclusiveSet);
	                return exclusiveIndexes;
	            },
	            _getFilteredExclusiveIndexes: function (columnName, exclusiveIndexes, exclusiveSet) {
	                var self = this,
	                    filteredRowIndexes = self._inPreview ? self._filteredPreviewRowIndexes : self._filteredRowIndexes;
	                for (var i = 0; i < getLength(filteredRowIndexes); i++) {
	                    var rowIndex = filteredRowIndexes[i];
	                    var exclusiveIndex = self.getExclusiveRowIndex(columnName, rowIndex);
	                    if (!exclusiveSet[exclusiveIndex]) {
	                        exclusiveSet[exclusiveIndex] = 1;
	                        exclusiveIndexes.push(exclusiveIndex);
	                    } else {
	                        exclusiveSet[exclusiveIndex]++;
	                    }
	                }
	            },
	           
	            
	            getFilteredRanges: function (columnName) {
	                return getFilteredInfos(this, columnName, false);
	            },
	           
	            
	            getFilteredOutRanges: function (columnName) {
	                return getFilteredInfos(this, columnName, true);
	            },
	           
	            
	            getFilteredOutIndexes: function (columnName, filteredOutDataType) {
	                var self = this;
	                if (filteredOutDataType === 0 
	                ) {
	                    return getAllFilteredOutExclusiveRowIndexes(self, columnName);
	                } else if (filteredOutDataType === 1 
	                ) {
	                    return getFilteredOutExclusiveRowIndexesBySelf(self, columnName);
	                }
	                return getFilteredOutExclusiveRowIndexesByOther(self, columnName);
	            },
	           
	            
	            attachListener: function (listener) {
	                this._listeners.push(listener);
	            },
	           
	            
	            detachListener: function (listener) {
	                var listeners = this._listeners || [];
	                for (var i = 0; i < getLength(listeners); i++) {
	                    if (listeners[i] === listener) {
	                        listeners.splice(i, 1);
	                        break;
	                    }
	                }
	            },
	           
	            
	            suspendFilteredEvents: function () {
	                this._suspendCount++;
	            },
	           
	            
	            resumeFilteredEvents: function () {
	                var self = this;
	                self._suspendCount--;
	                if (self._suspendCount === 0) {
	                    self.onFiltered();
	                }
	            },
	           
	            
	            doFilter: function (columnName, conditional, isPreview) {
	                this._doFilterInternal(columnName, conditional, isPreview);
	                this.onFiltered();
	            },
	            _doFilterInternal: function (columnName, conditional, isPreview) {
	                var self = this, filteredColumns = self._filteredColumns;
	                var colIndex = self.getColumnIndex(columnName);
	                if (colIndex < 0) {
	                    return;
	                }
	                if (isPreview) {
	                    self._inPreview = true;
	                    self._previewCol = colIndex;
	                } else if (self._inPreview) {
	                    clearPreviewCore(self, false);
	                }
	                if (filteredColumns.indexOf(colIndex) < 0) {
	                    filteredColumns.push(colIndex);
	                }
	                if (conditional.ranges) {
	                    doFilterByRange(self, columnName, conditional.ranges, isPreview);
	                } else {
	                    doFilterByIndexes(self, columnName, conditional.exclusiveRowIndexes, isPreview);
	                }
	            },
	           
	            
	            clearPreview: function () {
	                clearPreviewCore(this, true);
	            },
	           
	            
	            doUnfilter: function (columnName) {
	                this._doUnfilterInternal(columnName);
	                this.onFiltered();
	            },
	            _doUnfilterInternal: function (columnName) {
	                var self = this;
	                if (self._inPreview) {
	                    clearPreviewCore(self, false);
	                }
	                var colIndex = self.getColumnIndex(columnName);
	                if (colIndex < 0) {
	                    return;
	                }
	                delete self._filteredInfoByRange[colIndex];
	                delete self._filteredInfoByRangeSet[colIndex];
	                delete self._filteredInfoSet[colIndex];
	                delete self._filteredInfoIndexes[colIndex];
	                updateFilteredRows(self);
	                var index = self._filteredColumns.indexOf(colIndex);
	                if (index >= 0) {
	                    self._filteredColumns.splice(index, 1);
	                }
	            },
	           
	            
	            onFiltered: function () {
	                var self = this;
	                if (self._suspendCount === 0) {
	                    self._notifyListeners({
	                        rowIndexes: self.getFilteredRowIndexes(),
	                        isPreview: self._inPreview
	                    }, 'onFiltered');
	                }
	            },
	            getListener: function () {
	                return this._listeners;
	            }
	        };
	        return GeneralSlicerData;
	    })();
	
	    function isNullOrUndefined(value) {
	        return value === keyword_null || value === keyword_undefined;
	    }
	
	    function getType(value) {
	        return typeof value;
	    }
	
	    function getLength(arr) {
	        return arr ? arr.length : 0;
	    }
	
	   
	    
	
	   
	    
	
	   
	    
	
	   
	    
	
	   
	    
	
	   
	    
	
	    module.exports = {
	        FilteredOutDataType: FilteredOutDataType,
	        SlicerAggregateType: SlicerAggregateType,
	        GeneralSlicerData: GeneralSlicerData,
	        _SortHelper: _SortHelper
	    };
	
	
	}());

/***/ })
/******/ ])
});
;
//# sourceMappingURL=gc.spread.common.12.0.0.js.map