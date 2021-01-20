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

(function (factory) {
   if(typeof module === 'object' && typeof module.exports === 'object') {
       module.exports = factory(require('@grapecity/spread-sheets'));
   } else if(typeof define === 'function' && define.amd) {
       define(['@grapecity/spread-sheets'], factory)
   } else if(typeof exports === 'object') {
       exports['Spread'] = factory(require('@grapecity/spread-sheets'));
   } else {
       factory(GC);
   }
}(function (GC) {
   GC = GC || {}; GC["Spread"] =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	function extend (to, from) {
	    for (var prop in from) {
	        if (from.hasOwnProperty(prop)) {
	            to[prop] = from[prop];
	        }
	    }
	    return to;
	}
	
	GC = GC || {};
	GC.Spread = GC.Spread || {};
	if (GC.Spread.Common) {
		GC.Spread.Common.SR["ja"] = extend(GC.Spread.Common.SR["ja"] || {}, __webpack_require__(1));
	}
	if (GC.Spread.Common) {
		GC.Spread.Common.SR["ja"] = extend(GC.Spread.Common.SR["ja"] || {}, __webpack_require__(2));
	}
	if (GC.Spread.CalcEngine) {
		GC.Spread.CalcEngine.SR["ja"] = extend(GC.Spread.Common.SR["ja"] || {}, __webpack_require__(3));
	}
	if (GC.Spread.Sheets) {
		GC.Spread.Sheets.SR["ja"] = extend(GC.Spread.Common.SR["ja"] || {}, __webpack_require__(4));
	}
	if (GC.Spread.Sheets.Bindings) {
		GC.Spread.Sheets.Bindings.SR["ja"] = extend(GC.Spread.Common.SR["ja"] || {}, __webpack_require__(7));
	}
	if (GC.Spread.Sheets.Outlines) {
		GC.Spread.Sheets.Outlines.SR["ja"] = extend(GC.Spread.Common.SR["ja"] || {}, __webpack_require__(8));
	}
	if (GC.Spread.Sheets.Touch) {
		GC.Spread.Sheets.Touch.SR["ja"] = extend(GC.Spread.Common.SR["ja"] || {}, __webpack_require__(9));
	}
	if (GC.Spread.Sheets.FloatingObjects) {
		GC.Spread.Sheets.FloatingObjects.SR["ja"] = extend(GC.Spread.Common.SR["ja"] || {}, __webpack_require__(10));
	}
	if (GC.Spread.Sheets.ConditionalFormatting) {
		GC.Spread.Sheets.ConditionalFormatting.SR["ja"] = extend(GC.Spread.Common.SR["ja"] || {}, __webpack_require__(11));
	}
	if (GC.Spread.Sheets.Filter) {
		GC.Spread.Sheets.Filter.SR["ja"] = extend(GC.Spread.Common.SR["ja"] || {}, __webpack_require__(12));
	}
	if (GC.Spread.Sheets.Tables) {
		GC.Spread.Sheets.Tables.SR["ja"] = extend(GC.Spread.Common.SR["ja"] || {}, __webpack_require__(13));
	}
	if (GC.Spread.Sheets.Slicers) {
		GC.Spread.Sheets.Slicers.SR["ja"] = extend(GC.Spread.Common.SR["ja"] || {}, __webpack_require__(14));
	}
	if (GC.Spread.Sheets.Fill) {
		GC.Spread.Sheets.Fill.SR["ja"] = extend(GC.Spread.Common.SR["ja"] || {}, __webpack_require__(15));
	}
	if (GC.Spread.Sheets.ContextMenu) {
		GC.Spread.Sheets.ContextMenu.SR["ja"] = extend(GC.Spread.Common.SR["ja"] || {}, __webpack_require__(16));
	}
	if (GC.Spread.Sheets.FormulaTextBox) {
		GC.Spread.Sheets.FormulaTextBox.SR["ja"] = extend(GC.Spread.Common.SR["ja"] || {}, __webpack_require__(17));
	}
	if (GC.Spread.Sheets.Print) {
		GC.Spread.Sheets.Print.SR["ja"] = extend(GC.Spread.Common.SR["ja"] || {}, __webpack_require__(18));
	}
	if (GC.Spread.Sheets.PDF) {
		GC.Spread.Sheets.PDF.SR["ja"] = extend(GC.Spread.Common.SR["ja"] || {}, __webpack_require__(19));
	}
	if (GC.Spread.Sheets.Shapes) {
		GC.Spread.Sheets.Shapes.SR["ja"] = extend(GC.Spread.Common.SR["ja"] || {}, __webpack_require__(20));
	}
	module.exports = GC.Spread;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_InvalidDateFormat: '\u7121\u52b9\u306a\u65e5\u4ed8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8',
	        Exp_InvalidExponentFormat: '\u7121\u52b9\u306a\u6307\u6570\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u3059',
	        Exp_InvalidSemicolons: '\u7121\u52b9\u306a\u30d5\u30a9\u30fc\u30de\u30c3\u30c8: \u30bb\u30df\u30b3\u30ed\u30f3\u304c\u591a\u3059\u304e\u307e\u3059',
	        Exp_InvalidNumberGroupSize: 'NumberGroupSize \u306f1\u304b\u30899\u306e\u5024\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002',
	        Exp_BadFormatSpecifier: '\u8aa4\u3063\u305f\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u6307\u793a\u5b50',
	        Exp_InvalidNumberFormat: '\u7121\u52b9\u306a\u6570\u5024\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u30d1\u30bf\u30fc\u30f3\u3067\u3059',
	        Exp_InvalidCast: '\u4f8b\u5916:\u7121\u52b9\u306a\u30ad\u30e3\u30b9\u30c8',
	        Exp_Separator: 'numberDecimalSeparator, listSeparator and arrayListSeparator should be different in cluture info.'
	    };
	
	}());

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_TokenIsNull: '\u30c8\u30fc\u30af\u30f3\u304c null \u3067\u3059',
	        Exp_InvalidBackslash: '\'\\\' \u3092\u8a55\u4fa1\u3067\u304d\u307e\u305b\u3093\u3002',
	        Exp_FormatIllegal: '\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u304c\u4e0d\u6b63\u3067\u3059\u3002',
	        Exp_ValueIsNull: '\u5024\u306f null \u3067\u3059',
	        Exp_DuplicatedDescriptor: '\u305d\u306e\u7a2e\u985e\u306e\u8a18\u8ff0\u5b50\u306f\u65e2\u306b\u8ffd\u52a0\u3055\u308c\u3066\u3044\u307e\u3059\u3002',
	        Exp_TokenIllegal: '\u30c8\u30fc\u30af\u30f3\u304c\u4e0d\u6b63\u3067\u3059\u3002',
	        Exp_ValueIllegal: '\u5024\u304c\u4e0d\u6b63\u3067\u3059\u3002',
	        Exp_InvalidCast: '\u4f8b\u5916:\u7121\u52b9\u306a\u30ad\u30e3\u30b9\u30c8'
	    };
	
	}());

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	(function() {
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
	        Exp_InvalidCast: '\u4f8b\u5916:\u7121\u52b9\u306a\u30ad\u30e3\u30b9\u30c8',
	        Exp_FormulaInvalidChar: '\u5165\u529b\u3055\u308c\u305f\u6570\u5f0f\u306f\u7121\u52b9\u306a\u6587\u5b57\u3092\u542b\u3093\u3067\u3044\u307e\u3059 : \'{0}\' \u8a72\u5f53\u3059\u308b\u30a4\u30f3\u30c7\u30c3\u30af\u30b9 : {1}',
	        Exp_FormulaInvalid: '\u7121\u52b9\u306a\u516c\u5f0f',
	        Exp_InvalidFunctionName: '\u7121\u52b9\u306a\u95a2\u6570\u540d',
	        Exp_InvalidOverrideFunction: '\u7d44\u8fbc\u95a2\u6570\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093',
	        Exp_InvalidArray: '\u7121\u52b9\u306a\u914d\u5217 : ',
	        Exp_OverrideNotAllowed: '\u8a31\u53ef\u3055\u308c\u3066\u3044\u306a\u3044\u95a2\u6570\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u306e\u5b9f\u884c\u3067\u3059',
	        Exp_NoSyntax: '\u69cb\u6587 \'{0}\' \u306f\u6b21\u306e\u69cb\u6587 \'{1}\' \u3068\u30de\u30c3\u30c1\u3057\u307e\u305b\u3093\u3067\u3057\u305f\u3002',
	        Exp_IsValid: '\'{0}\' \u306f\u7121\u52b9\u3067\u3059\u3002',
	        Exp_InvalidParameters: '\u7121\u52b9\u306a\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u691c\u51fa : {0}\u3002',
	        Exp_InvalidArrayColumns: '\u914d\u5217\u306e\u30ab\u30e9\u30e0\u9577\u304c\u4e00\u81f4\u3057\u307e\u305b\u3093 \u4f4d\u7f6e : {0}\u3002',
	        Exp_ExprIsNull: '\u5f15\u6570 \'expr\' \u304c null \u3067\u3059',
	        Exp_InvalidOperation: '\u7121\u52b9\u306a\u64cd\u4f5c\u306b\u3088\u308b\u4f8b\u5916',
	        Exp_ArgumentNull: 'null \u5f15\u6570\u306b\u3088\u308b\u4f8b\u5916',
	        Exp_CriteriaIsNull: '\u6761\u4ef6\u3068\u306a\u308b\u5f15\u6570\u304c null \u3067\u3059',
	        Exp_Format: '\u30d5\u30a9\u30fc\u30de\u30c3\u30c8',
	        Exp_ArrayFromulaPart: '\u914d\u5217\u306e\u4e00\u90e8\u3092\u5909\u66f4\u3067\u304d\u307e\u305b\u3093\u3002',
	        Exp_NotSupported: '\u4f8b\u5916:\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u6a5f\u80fd\u306e\u5229\u7528\u3092\u8a66\u307f\u307e\u3057\u305f',
	        _builtInFunctionsResource: {
	            'ABS': functionDescription('\u6307\u5b9a\u3057\u305f\u5024\u306e\u7d76\u5bfe\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'ACCRINT': functionDescription('\u5b9a\u671f\u7684\u306b\u5229\u606f\u304c\u652f\u6255\u308f\u308c\u308b\u8a3c\u5238\u306e\u672a\u53ce\u5229\u606f\u984d\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('issue'),
	                parameterDescription('first'),
	                parameterDescription('settle'),
	                parameterDescription('rate'),
	                parameterDescription('par'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'ACCRINTM': functionDescription('\u6e80\u671f\u306b\u5229\u606f\u304c\u652f\u6255\u308f\u308c\u308b\u8a3c\u5238\u306e\u672a\u53ce\u5229\u606f\u984d\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('issue'),
	                parameterDescription('maturity'),
	                parameterDescription('rate'),
	                parameterDescription('par'),
	                parameterDescription('basis')
	            ]),
	            'ACOS': functionDescription('\u6307\u5b9a\u306e\u5024\u304c\u30b3\u30b5\u30a4\u30f3\u3068\u306a\u308b\u89d2\u5ea6\u3092\u8fd4\u3057\u307e\u3059\u3002\u623b\u308a\u5024\u306e\u89d2\u5ea6\u306f 0\uff5e\u03c0\uff08\u30e9\u30b8\u30a2\u30f3\u5358\u4f4d\uff09\u3067\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'ACOSH': functionDescription('\u6307\u5b9a\u3057\u305f\u89d2\u5ea6\u306e\u30cf\u30a4\u30d1\u30fc\u30dc\u30ea\u30c3\u30af\u30b3\u30b5\u30a4\u30f3\u306e\u9006\u95a2\u6570\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'ADDRESS': functionDescription('\u6307\u5b9a\u306e\u884c\u756a\u53f7\u304a\u3088\u3073\u5217\u756a\u53f7\u306b\u57fa\u3065\u304d\u3001\u30bb\u30eb \u30a2\u30c9\u30ec\u30b9\u3092\u8868\u3059\u30c6\u30ad\u30b9\u30c8\u3092\u751f\u6210\u3057\u307e\u3059\u3002', [
	                parameterDescription('row'),
	                parameterDescription('column'),
	                parameterDescription('absnum'),
	                parameterDescription('a1style'),
	                parameterDescription('sheettext')
	            ]),
	            'AMORDEGRC': functionDescription('\u65e5\u5272\u308a\u8a08\u7b97\u306b\u3088\u308b\u6e1b\u4fa1\u511f\u5374\u3092\u8003\u616e\u3057\u3001\u8cc7\u7523\u8010\u7528\u5e74\u6570\u306b\u57fa\u3065\u304f\u6e1b\u4fa1\u511f\u5374\u4fc2\u6570\u3092\u8a08\u7b97\u306b\u9069\u7528\u3057\u3066\u3001\u4f1a\u8a08\u671f\u3054\u3068\u306e\u6e1b\u4fa1\u511f\u5374\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('cost'),
	                parameterDescription('datepurchased'),
	                parameterDescription('firstperiod'),
	                parameterDescription('salvage'),
	                parameterDescription('period'),
	                parameterDescription('drate'),
	                parameterDescription('basis')
	            ]),
	            'AMORLINC': functionDescription('\u65e5\u5272\u308a\u8a08\u7b97\u306b\u3088\u308b\u6e1b\u4fa1\u6d88\u5374\u3092\u8003\u616e\u3057\u3001\u6307\u5b9a\u306e\u4f1a\u8a08\u671f\u306e\u6e1b\u4fa1\u511f\u5374\u8cbb\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('cost'),
	                parameterDescription('datepurchased'),
	                parameterDescription('firstperiod'),
	                parameterDescription('salvage'),
	                parameterDescription('period'),
	                parameterDescription('drate'),
	                parameterDescription('basis')
	            ]),
	            'AND': functionDescription('\u3059\u3079\u3066\u306e\u5f15\u6570\u304c\u771f\u3067\u3042\u308c\u3070 True \u3092\u3001\uff11\u3064\u4ee5\u4e0a\u306e\u5f15\u6570\u304c\u507d\u3067\u3042\u308c\u3070 False \u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('logical1'),
	                parameterDescription('logical2')
	            ]),
	            'ASIN': functionDescription('\u6307\u5b9a\u306e\u5024\u304c\u30b5\u30a4\u30f3\u3068\u306a\u308b\u89d2\u5ea6\u3092\u8fd4\u3057\u307e\u3059\u3002\u623b\u308a\u5024\u306e\u89d2\u5ea6\u306f -\u03c0/2\uff5e\u03c0/2\uff08\u30e9\u30b8\u30a2\u30f3\u5358\u4f4d\uff09\u3067\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'ASINH': functionDescription('\u6307\u5b9a\u3057\u305f\u6570\u5024\u306e\u30cf\u30a4\u30d1\u30fc\u30dc\u30ea\u30c3\u30af\u30b5\u30a4\u30f3\u306e\u9006\u95a2\u6570\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'ATAN': functionDescription('\u6307\u5b9a\u306e\u5024\u304c\u30bf\u30f3\u30b8\u30a7\u30f3\u30c8\u3068\u306a\u308b\u89d2\u5ea6\u3092\u8fd4\u3057\u307e\u3059\u3002\u623b\u308a\u5024\u306e\u89d2\u5ea6\u306f -\u03c0/2\uff5e\u03c0/2\uff08\u30e9\u30b8\u30a2\u30f3\u5358\u4f4d\uff09\u3067\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'ATAN2': functionDescription('\u6307\u5b9a\u306e x \u5ea7\u6a19\u304a\u3088\u3073 y \u5ea7\u6a19\u306e\u30a2\u30fc\u30af\u30bf\u30f3\u30b8\u30a7\u30f3\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002\u623b\u308a\u5024\u306e\u89d2\u5ea6\u306f -\u03c0\uff5e\u03c0\uff08\u30e9\u30b8\u30a2\u30f3\u5358\u4f4d\u3001\u305f\u3060\u3057 -\u03c0 \u3092\u9664\u304f\uff09\u3067\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('y')
	            ]),
	            'ATANH': functionDescription('\u6307\u5b9a\u3057\u305f\u6570\u5024\u306e\u30cf\u30a4\u30d1\u30fc\u30dc\u30ea\u30c3\u30af\u30bf\u30f3\u30b8\u30a7\u30f3\u30c8\u306e\u9006\u95a2\u6570\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'AVEDEV': functionDescription('\u6307\u5b9a\u306e\u30c7\u30fc\u30bf\u5168\u4f53\u306e\u5e73\u5747\u5024\u306b\u5bfe\u3059\u308b\u3001\u500b\u3005\u306e\u5024\u306e\u7d76\u5bfe\u504f\u5dee\u306e\u5e73\u5747\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'AVERAGE': functionDescription('\u6307\u5b9a\u3057\u305f\u6570\u5024\u306e\u5e73\u5747\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'AVERAGEA': functionDescription('\u6307\u5b9a\u3057\u305f\u6570\u5024\u306e\u5e73\u5747\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'AVERAGEIF': functionDescription('\u6307\u5b9a\u3057\u305f\u57fa\u6e96\u3092\u6e80\u305f\u3059\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u5e73\u5747\u5024\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true),
	                parameterDescription('condition')
	            ]),
	            'AVERAGEIFS': functionDescription('\u6307\u5b9a\u3057\u305f\u8907\u6570\u306e\u57fa\u6e96\u3092\u6e80\u305f\u3059\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u5e73\u5747\u5024\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('condition1'),
	                parameterDescription('value2', true),
	                parameterDescription('condition2...')
	            ]),
	            'BESSELI': functionDescription('\u7d14\u865a\u6570\u3092\u5f15\u6570\u3068\u3057\u305f\u3068\u304d\u306e\u7b2c\uff11\u7a2e\u5909\u5f62\u30d9\u30c3\u30bb\u30eb\u95a2\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('order')
	            ]),
	            'BESSELJ': functionDescription('\u7b2c\uff11\u7a2e\u30d9\u30c3\u30bb\u30eb\u95a2\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('order')
	            ]),
	            'BESSELK': functionDescription('\u7d14\u865a\u6570\u3092\u5f15\u6570\u3068\u3057\u305f\u3068\u304d\u306e\u7b2c\uff12\u7a2e\u5909\u5f62\u30d9\u30c3\u30bb\u30eb\u95a2\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('order')
	            ]),
	            'BESSELY': functionDescription('\u7b2c\uff12\u7a2e\u30d9\u30c3\u30bb\u30eb\u95a2\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('order')
	            ]),
	            'BETADIST': functionDescription('\u7d2f\u7a4d\u03b2\u78ba\u7387\u5bc6\u5ea6\u95a2\u6570\u306e\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'BETAINV': functionDescription('\u7d2f\u7a4d\u03b2\u78ba\u7387\u5bc6\u5ea6\u95a2\u6570\u306e\u9006\u95a2\u6570\u306e\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('prob'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'BIN2DEC': functionDescription('\uff12\u9032\u6570\u5024\u3092 10 \u9032\u6570\u5024\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('number')
	            ]),
	            'BIN2HEX': functionDescription('\uff12\u9032\u6570\u5024\u3092 16 \u9032\u6570\u5024\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'BIN2OCT': functionDescription('\uff12\u9032\u6570\u5024\u3092\uff18\u9032\u6570\u5024\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'BINOMDIST': functionDescription('\u500b\u5225\u9805\u306e\u4e8c\u9805\u5206\u5e03\u306e\u78ba\u7387\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('cumulative')
	            ]),
	            'CEILING': functionDescription('\u6307\u5b9a\u3057\u305f\u57fa\u6e96\u5024\u306e\u500d\u6570\u306b\u306a\u308b\u3088\u3046\u306b\u6570\u5024\u3092\u4e38\u3081\u3001\u5143\u306e\u5024\u306b\u6700\u3082\u8fd1\u3044\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('signif')
	            ]),
	            'CHAR': functionDescription('\u6307\u5b9a\u3057\u305f\u6570\u5024\u306b\u5bfe\u5fdc\u3059\u308b\u6587\u5b57\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'CHIDIST': functionDescription('\u7247\u5074\u30ab\u30a4\uff12\u4e57\u5206\u5e03\u306e\u78ba\u7387\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('deg')
	            ]),
	            'CHIINV': functionDescription('\u7247\u5074\u30ab\u30a4\uff12\u4e57\u5206\u5e03\u78ba\u7387\u306e\u9006\u95a2\u6570\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('prob'),
	                parameterDescription('deg')
	            ]),
	            'CHITEST': functionDescription('\u30ab\u30a4\uff12\u4e57\u5206\u5e03\u304b\u3089\u306e\u72ec\u7acb\u6027\u3092\u691c\u5b9a\u3057\u307e\u3059\u3002', [
	                parameterDescription('obs_array'),
	                parameterDescription('exp_array')
	            ]),
	            'CHOOSE': functionDescription('\u5024\u30ea\u30b9\u30c8\u306e\u4e2d\u304b\u3089\u7279\u5b9a\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('index'),
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'CLEAN': functionDescription('\u6307\u5b9a\u306e\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u3001\u5370\u5237\u3067\u304d\u306a\u3044\u3059\u3079\u3066\u306e\u6587\u5b57\u3092\u524a\u9664\u3057\u307e\u3059\u3002', [
	                parameterDescription('text')
	            ]),
	            'CODE': functionDescription('\u30c6\u30ad\u30b9\u30c8\u5185\u306e\u5148\u982d\u6587\u5b57\u306b\u5bfe\u5fdc\u3059\u308b\u6570\u5024\u30b3\u30fc\u30c9\u3092\u8fd4\u3057\u307e\u3059\u3002\u8fd4\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306f\u3001Unicode\u3067\u3059\u3002', [
	                parameterDescription('text')
	            ]),
	            'COLUMN': functionDescription('\u53c2\u7167\u306e\u5217\u756a\u53f7\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('reference')
	            ]),
	            'COLUMNS': functionDescription('\u914d\u5217\u5185\u306e\u5217\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array')
	            ]),
	            'COMBIN': functionDescription('\u7dcf\u6570\u304b\u3089\u6307\u5b9a\u306e\u500b\u6570\u3092\u629c\u304d\u53d6\u308b\u5834\u5408\u3001\u9078\u629e\u53ef\u80fd\u306a\u7d44\u307f\u5408\u308f\u305b\u306e\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('k'),
	                parameterDescription('n')
	            ]),
	            'COMPLEX': functionDescription('\u5b9f\u6570\u4fc2\u6570\u304a\u3088\u3073\u865a\u6570\u4fc2\u6570\u3092\u8907\u7d20\u6570\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('realcoeff'),
	                parameterDescription('imagcoeff'),
	                parameterDescription('suffix')
	            ]),
	            'CONCATENATE': functionDescription('\u6307\u5b9a\u306e\u6587\u5b57\u5217\u307e\u305f\u306f\u6570\u5024\u3092\uff11\u3064\u306e\u6587\u5b57\u5217\u306b\u7d71\u5408\u3057\u307e\u3059\u3002', [
	                parameterDescription('text1'),
	                parameterDescription('text2'),
	                parameterDescription('....')
	            ]),
	            'CONFIDENCE': functionDescription('\u6bcd\u96c6\u56e3\u306e\u5e73\u5747\u5024\u306b\u5bfe\u3059\u308b\u4fe1\u983c\u533a\u9593\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('alpha'),
	                parameterDescription('stdev'),
	                parameterDescription('size')
	            ]),
	            'CONVERT': functionDescription('\u3042\u308b\u8a08\u6e2c\u5358\u4f4d\u306e\u5024\u3092\u3001\u5225\u306e\u8a08\u6e2c\u5358\u4f4d\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('from-unit'),
	                parameterDescription('to-unit')
	            ]),
	            'CORREL': functionDescription('\uff12\u7d44\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u9593\u306e\u76f8\u95a2\u4fc2\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'COS': functionDescription('\u6307\u5b9a\u3057\u305f\u89d2\u5ea6\u306e\u30b3\u30b5\u30a4\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('angle')
	            ]),
	            'COSH': functionDescription('\u6307\u5b9a\u3057\u305f\u89d2\u5ea6\u306e\u30cf\u30a4\u30d1\u30fc\u30dc\u30ea\u30c3\u30af\u30b3\u30b5\u30a4\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'COUNT': functionDescription('\u6307\u5b9a\u3057\u305f\u8907\u6570\u306e\u5024\u306b\u6570\u5024\u304c\u4f55\u500b\u542b\u307e\u308c\u3066\u3044\u308b\u304b\u500b\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'COUNTA': functionDescription('\u6307\u5b9a\u3057\u305f\u8907\u6570\u306e\u5024\u306b\u6570\u5024\u304c\u4f55\u500b\u542b\u307e\u308c\u3066\u3044\u308b\u304b\u500b\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'COUNTBLANK': functionDescription('\u30b7\u30fc\u30c8\u4e0a\u306e\u6307\u5b9a\u306e\u30bb\u30eb\u7bc4\u56f2\u304b\u3089\u3001\u7a7a\u767d\u30bb\u30eb\u306e\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('cellrange')
	            ]),
	            'COUNTIF': functionDescription('\u7279\u5b9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u30bb\u30eb\u306e\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('cellrange'),
	                parameterDescription('condition')
	            ]),
	            'COUNTIFS': functionDescription('\u8907\u6570\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u30bb\u30eb\u306e\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('cellrange'),
	                parameterDescription('condition')
	            ]),
	            'COUPDAYBS': functionDescription('\u8a3c\u5238\u306e\u5229\u6255\u671f\u9593\u306e\uff11\u65e5\u76ee\u304b\u3089\u53d7\u6e21\u65e5\u307e\u3067\u306e\u65e5\u6570\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COUPDAYS': functionDescription('\u8a3c\u5238\u306e\u5229\u6255\u671f\u9593\uff08\u53d7\u6e21\u65e5\u3092\u542b\u3080\uff09\u3092\u8868\u3059\u65e5\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COUPDAYSNC': functionDescription('\u8a3c\u5238\u306e\u53d7\u6e21\u65e5\u304b\u3089\u6b21\u306e\u5229\u6255\u65e5\u307e\u3067\u306e\u65e5\u6570\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COUPNCD': functionDescription('\u8a3c\u5238\u306e\u53d7\u6e21\u5f8c\u306e\u6b21\u56de\u306e\u5229\u6255\u65e5\u3092\u65e5\u4ed8\u5024\u3067\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basi')
	            ]),
	            'COUPNUM': functionDescription('\u8a3c\u5238\u306e\u53d7\u6e21\u65e5\u304b\u3089\u6e80\u671f\u65e5\u307e\u3067\u306e\u671f\u9593\u4e2d\u306e\u5229\u6255\u56de\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COUPPCD': functionDescription('\u8a3c\u5238\u306e\u53d7\u6e21\u65e5\u76f4\u524d\u306e\u5229\u6255\u65e5\u3092\u65e5\u4ed8\u5024\u3067\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COVAR': functionDescription('\uff12\u7d44\u306e\u5bfe\u5fdc\u3059\u308b\u30c7\u30fc\u30bf\u306e\u6a19\u6e96\u504f\u5dee\u306e\u7a4d\u306e\u5e73\u5747\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'CRITBINOM': functionDescription('\u7d2f\u7a4d\u4e8c\u9805\u5206\u5e03\u306e\u5024\u304c\u57fa\u6e96\u5024\u4ee5\u4e0a\u3068\u306a\u308b\u6700\u5c0f\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('alpha')
	            ]),
	            'CUMIPMT': functionDescription('\u958b\u59cb\u671f\u304b\u3089\u7d42\u4e86\u671f\u307e\u3067\u306e\u671f\u9593\u5185\u3067\u3001\u8cb8\u4ed8\u91d1\u306b\u5bfe\u3057\u3066\u652f\u6255\u308f\u308c\u308b\u5229\u606f\u306e\u7d2f\u8a08\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('startperiod'),
	                parameterDescription('endperiod'),
	                parameterDescription('paytype')
	            ]),
	            'CUMPRINC': functionDescription('\u958b\u59cb\u671f\u304b\u3089\u7d42\u4e86\u671f\u307e\u3067\u306e\u671f\u9593\u5185\u3067\u3001\u8cb8\u4ed8\u91d1\u306b\u5bfe\u3057\u3066\u652f\u6255\u308f\u308c\u308b\u5143\u91d1\u306e\u7d2f\u8a08\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('startperiod'),
	                parameterDescription('endperiod'),
	                parameterDescription('paytype')
	            ]),
	            'DATE': functionDescription('\u5e74\u3001\u6708\u3001\u65e5\u3067\u6307\u5b9a\u3057\u305f\u65e5\u4ed8\u306b\u5bfe\u3059\u308b\u65e5\u4ed8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('year'),
	                parameterDescription('month'),
	                parameterDescription('day')
	            ]),
	            'DATEDIF': functionDescription('\uff12\u3064\u306e\u65e5\u4ed8\u9593\u306e\u65e5\u6570\u3001\u6708\u6570\u3001\u307e\u305f\u306f\u5e74\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('date1'),
	                parameterDescription('date2'),
	                parameterDescription('outputcode')
	            ]),
	            'DATEVALUE': functionDescription('\u6307\u5b9a\u306e\u65e5\u4ed8\u306b\u5bfe\u3059\u308b\u65e5\u6642\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('date_string')
	            ]),
	            'DAVERAGE': functionDescription('\u30ea\u30b9\u30c8\u307e\u305f\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u5185\u306e\u6307\u5b9a\u306e\uff11\u5217\u306b\u304a\u3044\u3066\u3001\u6307\u5b9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u5024\u306e\u5e73\u5747\u5024\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DAY': functionDescription('\u7279\u5b9a\u306e\u65e5\u4ed8\u306b\u5bfe\u5fdc\u3059\u308b\u3001\u6708\u5185\u306e\u65e5\uff081\uff5e31\uff09\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('date')
	            ]),
	            'DAYS360': functionDescription('\uff11\u5e74\u3092 360 \u65e5\uff08\uff11\u6708\u304c 30 \u65e5\uff09\u3068\u307f\u306a\u3057\u3001\uff12\u3064\u306e\u65e5\u4ed8\u9593\u306e\u65e5\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate'),
	                parameterDescription('method')
	            ]),
	            'DB': functionDescription('\u5b9a\u7387\u6cd5\u3092\u4f7f\u7528\u3057\u3066\u3001\u7279\u5b9a\u306e\u671f\u306e\u8cc7\u7523\u306e\u6e1b\u4fa1\u511f\u5374\u8cbb\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life'),
	                parameterDescription('period'),
	                parameterDescription('month')
	            ]),
	            'DCOUNT': functionDescription('\u30ea\u30b9\u30c8\u307e\u305f\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u5185\u306e\u6307\u5b9a\u306e\uff11\u5217\u306b\u304a\u3044\u3066\u3001\u6307\u5b9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u6570\u5024\u3092\u4fdd\u6301\u3059\u308b\u30bb\u30eb\u6570\u3092\u30ab\u30a6\u30f3\u30c8\u3057\u307e\u3059\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DCOUNTA': functionDescription('\u30ea\u30b9\u30c8\u307e\u305f\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u5185\u306e\u6307\u5b9a\u306e\uff11\u5217\u306b\u304a\u3044\u3066\u3001\u6307\u5b9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u3001\u7a7a\u767d\u4ee5\u5916\u306e\u30bb\u30eb\u6570\u3092\u30ab\u30a6\u30f3\u30c8\u3057\u307e\u3059\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DDB': functionDescription('\u500d\u7387\u6cd5\u3001\u307e\u305f\u306f\u305d\u306e\u4ed6\u306e\u6307\u5b9a\u306e\u8a08\u7b97\u65b9\u6cd5\u3092\u4f7f\u7528\u3057\u3066\u3001\u7279\u5b9a\u306e\u671f\u306e\u8cc7\u7523\u306e\u6e1b\u4fa1\u511f\u5374\u8cbb\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life'),
	                parameterDescription('period'),
	                parameterDescription('factor')
	            ]),
	            'DEC2BIN': functionDescription('10 \u9032\u6570\u5024\u3092\uff12\u9032\u6570\u5024\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'DEC2HEX': functionDescription('10 \u9032\u6570\u5024\u3092 16 \u9032\u6570\u5024\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'DEC2OCT': functionDescription('10 \u9032\u6570\u5024\u3092\uff18\u9032\u6570\u5024\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'DEGREES': functionDescription('\u6307\u5b9a\u3057\u305f\u30e9\u30b8\u30a2\u30f3\u5358\u4f4d\u306e\u89d2\u5ea6\u306e\u5024\u3092\u5ea6\u5358\u4f4d\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('angle')
	            ]),
	            'DELTA': functionDescription('\uff12\u3064\u306e\u5024\u304c\u7b49\u3057\u3044\u304b\u3069\u3046\u304b\u3092\u8abf\u3079\u307e\u3059\u3002\uff12\u3064\u306e\u5024\u304c\u7b49\u3057\u3051\u308c\u3070\uff11\u3001\u305d\u3046\u3067\u306a\u3051\u308c\u3070\uff10\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2')
	            ]),
	            'DEVSQ': functionDescription('\u5e73\u5747\u5024\u306b\u5bfe\u3059\u308b\u500b\u3005\u306e\u30c7\u30fc\u30bf\u70b9\u306e\u504f\u5dee\u306e\u5e73\u65b9\u548c\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'DGET': functionDescription('\u30ea\u30b9\u30c8\u307e\u305f\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u5185\u306e\u6307\u5b9a\u306e\uff11\u5217\u306b\u304a\u3044\u3066\u3001\u6307\u5b9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\uff11\u3064\u306e\u5024\u3092\u62bd\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DISC': functionDescription('\u8a3c\u5238\u306e\u5272\u5f15\u7387\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('pricep'),
	                parameterDescription('redeem'),
	                parameterDescription('basis')
	            ]),
	            'DMAX': functionDescription('\u30ea\u30b9\u30c8\u307e\u305f\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u5185\u306e\u6307\u5b9a\u306e\uff11\u5217\u306b\u304a\u3044\u3066\u3001\u6307\u5b9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u6700\u5927\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DMIN': functionDescription('\u30ea\u30b9\u30c8\u307e\u305f\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u5185\u306e\u6307\u5b9a\u306e\uff11\u5217\u306b\u304a\u3044\u3066\u3001\u6307\u5b9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u6700\u5c0f\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DOLLAR': functionDescription('\u6570\u5024\u3092\u6307\u5b9a\u306e\u5c0f\u6570\u4f4d\u306b\u306a\u308b\u3088\u3046\u306b\u56db\u6368\u4e94\u5165\u3057\u3001\u901a\u8ca8\u66f8\u5f0f\u3092\u65bd\u3057\u305f\u6587\u5b57\u5217\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('digits')
	            ]),
	            'DOLLARDE': functionDescription('\u5206\u6570\u8868\u8a18\u3055\u308c\u305f\u30c9\u30eb\u5024\u3092\u3001\u5c0f\u6570\u8868\u8a18\u306e\u30c9\u30eb\u5024\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('fractionaldollar'),
	                parameterDescription('fraction')
	            ]),
	            'DOLLARFR': functionDescription('\u5c0f\u6570\u8868\u8a18\u3055\u308c\u305f\u30c9\u30eb\u5024\u3092\u3001\u5206\u6570\u8868\u8a18\u306e\u30c9\u30eb\u5024\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('decimaldollar'),
	                parameterDescription('fraction')
	            ]),
	            'DPRODUCT': functionDescription('\u30ea\u30b9\u30c8\u307e\u305f\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u5185\u306e\u6307\u5b9a\u306e\uff11\u5217\u306b\u304a\u3044\u3066\u3001\u6307\u5b9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u5024\u3092\u4e57\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DSTDEV': functionDescription('\u30ea\u30b9\u30c8\u307e\u305f\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u5185\u306e\u6307\u5b9a\u306e\uff11\u5217\u306b\u304a\u3051\u308b\u3001\u6307\u5b9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u6570\u5024\u3092\u6a19\u672c\u3068\u3057\u3066\u4f7f\u7528\u3057\u3066\u3001\u6bcd\u96c6\u56e3\u306e\u6a19\u6e96\u504f\u5dee\u3092\u8a55\u4fa1\u3057\u307e\u3059', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DSTDEVP': functionDescription('\u30ea\u30b9\u30c8\u307e\u305f\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u5185\u306e\u6307\u5b9a\u306e\uff11\u5217\u306b\u304a\u3051\u308b\u3001\u6307\u5b9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u6570\u5024\u3092\u4f7f\u7528\u3057\u3066\u3001\u6bcd\u96c6\u56e3\u5168\u4f53\u306b\u57fa\u3065\u304f\u6a19\u6e96\u504f\u5dee\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DSUM': functionDescription('\u30ea\u30b9\u30c8\u307e\u305f\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u5185\u306e\u6307\u5b9a\u306e\uff11\u5217\u306b\u304a\u3044\u3066\u3001\u6307\u5b9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u6570\u5024\u3092\u52a0\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DURATION': functionDescription('\u984d\u9762\u3092 $100 \u3068\u307f\u306a\u3057\u305f\u8a3c\u5238\u306e\u30de\u30b3\u30fc\u30ec\u30fc \u30c7\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('coupon'),
	                parameterDescription('yield'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'DVAR': functionDescription('\u30ea\u30b9\u30c8\u307e\u305f\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u5185\u306e\u6307\u5b9a\u306e\uff11\u5217\u306b\u304a\u3051\u308b\u3001\u6307\u5b9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u6570\u5024\u3092\u6a19\u672c\u3068\u3057\u3066\u4f7f\u7528\u3057\u3066\u3001\u6bcd\u96c6\u56e3\u306e\u5206\u6563\u3092\u8a55\u4fa1\u3057\u307e\u3059\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DVARP': functionDescription('\u30ea\u30b9\u30c8\u307e\u305f\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u5185\u306e\u6307\u5b9a\u306e\uff11\u5217\u306b\u304a\u3051\u308b\u3001\u6307\u5b9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u6570\u5024\u3092\u4f7f\u7528\u3057\u3066\u3001\u6bcd\u96c6\u56e3\u5168\u4f53\u306b\u57fa\u3065\u304f\u5206\u6563\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'EDATE': functionDescription('\u6307\u5b9a\u306e\u65e5\u4ed8\u304b\u3089\u3001\u6307\u5b9a\u306e\u6708\u6570\u3060\u3051\u524d\u307e\u305f\u306f\u5f8c\u306e\u65e5\u6642\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('startdate'),
	                parameterDescription('months')
	            ]),
	            'EFFECT': functionDescription('\u6307\u5b9a\u306e\u540d\u76ee\u5e74\u5229\u7387\u3068\uff11\u5e74\u3042\u305f\u308a\u306e\u8907\u5229\u8a08\u7b97\u671f\u9593\u306b\u57fa\u3065\u304d\u3001\u5b9f\u52b9\u5e74\u5229\u7387\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('nomrate'),
	                parameterDescription('comper')
	            ]),
	            'EOMONTH': functionDescription('\u6307\u5b9a\u306e\u65e5\u4ed8\u304b\u3089\u3001\u6307\u5b9a\u306e\u6708\u6570\u3060\u3051\u524d\u307e\u305f\u306f\u5f8c\u306e\u6708\u306e\u6700\u7d42\u65e5\uff08\u6708\u672b\u65e5\uff09\u3068\u306a\u308b\u65e5\u6642\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('startdate'),
	                parameterDescription('months')
	            ]),
	            'ERF': functionDescription('\u4e0a\u9650\u304b\u3089\u4e0b\u9650\u306e\u7bc4\u56f2\u3067\u3001\u8aa4\u5dee\u95a2\u6570\u306e\u7a4d\u5206\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('limit'),
	                parameterDescription('upperlimit')
	            ]),
	            'ERFC': functionDescription('\u4e0b\u9650\u304b\u3089\u7121\u9650\u5927\u306e\u7bc4\u56f2\u3067\u3001\u76f8\u88dc\u8aa4\u5dee\u95a2\u6570\u306e\u7a4d\u5206\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('lowerlimit')
	            ]),
	            'ERROR.TYPE': functionDescription('\u30a8\u30e9\u30fc\u5024\u306b\u5bfe\u5fdc\u3059\u308b\u6570\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002\u30a8\u30e9\u30fc\u304c\u306a\u3044\u5834\u5408\u306f\u3001#N/A \u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('errorvalue')
	            ]),
	            'EURO': functionDescription('ISO \u901a\u8ca8\u30b3\u30fc\u30c9\u306b\u57fa\u3065\u304d\u3001\uff11\u30e6\u30fc\u30ed\u306b\u76f8\u5f53\u3059\u308b\u901a\u8ca8\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('code')
	            ]),
	            'EUROCONVERT': functionDescription('\u30e6\u30fc\u30ed\u52a0\u76df\u56fd\u901a\u8ca8\uff08\u30e6\u30fc\u30ed\u3092\u542b\u3080\uff09\u9593\u3067\u3001\u3042\u308b\u901a\u8ca8\u5024\u3092\u5225\u306e\u901a\u8ca8\u5024\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('currency'),
	                parameterDescription('source'),
	                parameterDescription('target'),
	                parameterDescription('fullprecision'),
	                parameterDescription('triangulation')
	            ]),
	            'EVEN': functionDescription('\u6307\u5b9a\u3057\u305f\u5024\u3092\u5207\u308a\u4e0a\u3052\u3001\u6700\u3082\u8fd1\u3044\u5076\u6570\u306e\u6574\u6570\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'EXACT': functionDescription('\uff12\u3064\u306e\u6587\u5b57\u5217\u304c\u7b49\u3057\u3051\u308c\u3070 True \u3092\u3001\u305d\u3046\u3067\u306a\u3051\u308c\u3070 False \u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('text1'),
	                parameterDescription('text2')
	            ]),
	            'EXP': functionDescription('e\uff08\u81ea\u7136\u5bfe\u6570\u306e\u5e95\uff09\u3092\u5e95\u3068\u3059\u308b\u3001\u6307\u5b9a\u306e\u6570\u306e\u3079\u304d\u4e57 (ex) \u3092\u8fd4\u3057\u307e\u3059\u3002EXP \u95a2\u6570\u306f LN \u306e\u9006\u95a2\u6570\u3067\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'EXPONDIST': functionDescription('\u6307\u6570\u5206\u5e03\u95a2\u6570\u307e\u305f\u306f\u78ba\u7387\u5bc6\u5ea6\u95a2\u6570\u306e\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('lambda'),
	                parameterDescription('cumulative')
	            ]),
	            'FACT': functionDescription('\u6307\u5b9a\u3057\u305f\u5024\u306e\u968e\u4e57\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('number')
	            ]),
	            'FACTDOUBLE': functionDescription('\u6570\u5024\u306e\uff12\u4e57\u968e\u4e57\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('number')
	            ]),
	            'FALSE': functionDescription('\u8ad6\u7406\u5024\uff10\uff08False\uff09\u3092\u8fd4\u3057\u307e\u3059\u3002', []),
	            'FDIST': functionDescription('\uff12\u7d44\u306e\u30c7\u30fc\u30bf\u9593\u306e\u5206\u6563\u5ea6\u3092\u6bd4\u8f03\u3059\u308b F \u78ba\u7387\u5206\u5e03\u95a2\u6570\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'FIND': functionDescription('\u30c6\u30ad\u30b9\u30c8\u5185\u304b\u3089\u6307\u5b9a\u306e\u6587\u5b57\u3092\u691c\u7d22\u3057\u3001\u3053\u306e\u6587\u5b57\u306e\u4f4d\u7f6e\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('findtext'),
	                parameterDescription('intext'),
	                parameterDescription('start')
	            ]),
	            'FINV': functionDescription('F \u78ba\u7387\u5206\u5e03\u95a2\u6570\u306e\u9006\u95a2\u6570\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002p = FDIST(x,...) \u3067\u3042\u308b\u3068\u304d\u3001FINV(p,...) = x \u3068\u306a\u308a\u307e\u3059\u3002', [
	                parameterDescription('p'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'FISHER': functionDescription('\u6307\u5b9a\u306e\u5024\u306b\u5bfe\u3059\u308b\u30d5\u30a3\u30c3\u30b7\u30e3\u30fc\u5909\u63db\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'FISHERINV': functionDescription('\u30d5\u30a3\u30c3\u30b7\u30e3\u30fc\u5909\u63db\u306e\u9006\u95a2\u6570\u306e\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'FIXED': functionDescription('\u6570\u5024\u3092\u6307\u5b9a\u306e\u5c0f\u6570\u4f4d\u306b\u306a\u308b\u3088\u3046\u306b\u56db\u6368\u4e94\u5165\u3057\u3001\u30d4\u30ea\u30aa\u30c9\u3068\u30b3\u30f3\u30de\uff08\u6307\u5b9a\u3057\u305f\u5834\u5408\uff09\u306b\u3088\u308b\u5c0f\u6570\u66f8\u5f0f\u3092\u9069\u7528\u3057\u305f\u7d50\u679c\u3092\u30c6\u30ad\u30b9\u30c8\u3068\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('num'),
	                parameterDescription('digits'),
	                parameterDescription('notcomma')
	            ]),
	            'FLOOR': functionDescription('\u6307\u5b9a\u3057\u305f\u57fa\u6e96\u5024\u306e\u500d\u6570\u306b\u306a\u308b\u3088\u3046\u306b\u6570\u5024\u3092\u5207\u308a\u6368\u3066\u3001\u5143\u306e\u5024\u306b\u6700\u3082\u8fd1\u3044\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('signif')
	            ]),
	            'FORECAST': functionDescription('\u65e2\u77e5\u306e\u5024\u3092\u4f7f\u7528\u3057\u3066\u4e88\u6e2c\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('Yarray'),
	                parameterDescription('Xarray')
	            ]),
	            'FREQUENCY': functionDescription('\u6307\u5b9a\u306e\u5024\u7bc4\u56f2\u5185\u3067\u5024\u304c\u51fa\u73fe\u3059\u308b\u983b\u5ea6\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002 \u3053\u306e\u95a2\u6570\u306f\u3001\u6570\u5024\u306e\u5782\u76f4\u914d\u5217\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('dataarray'),
	                parameterDescription('binarray')
	            ]),
	            'FTEST': functionDescription('F \u691c\u5b9a\u306e\u7d50\u679c\u3092\u8fd4\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\uff12\u3064\u306e\u914d\u5217\u5185\u306e\u30c7\u30fc\u30bf\u306e\u5206\u6563\u306b\u6709\u610f\u306a\u5dee\u304c\u8a8d\u3081\u3089\u308c\u306a\u3044\u7247\u5074\u78ba\u7387\u306e\u7b97\u51fa\u7d50\u679c\u3067\u3059\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'FV': functionDescription('\u73fe\u5728\u4fa1\u5024\u3001\u5b9a\u671f\u6255\u3044\u3001\u304a\u3088\u3073\u7279\u5b9a\u306e\u5229\u7387\u3092\u6761\u4ef6\u3068\u3057\u3001\u6295\u8cc7\u306e\u5c06\u6765\u4fa1\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('numper'),
	                parameterDescription('paymt'),
	                parameterDescription('pval'),
	                parameterDescription('type')
	            ]),
	            'FVSCHEDULE': functionDescription('\u6295\u8cc7\u671f\u9593\u5185\u306e\u4e00\u9023\u306e\u91d1\u5229\u3092\u8907\u5408\u8a08\u7b97\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u521d\u671f\u6295\u8cc7\uff08\u5143\u91d1\uff09\u306e\u5c06\u6765\u4fa1\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('principal'),
	                parameterDescription('schedule')
	            ]),
	            'GAMMADIST': functionDescription('\u30ac\u30f3\u30de\u5206\u5e03\u95a2\u6570\u306e\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative')
	            ]),
	            'GAMMAINV': functionDescription('\u30ac\u30f3\u30de\u7d2f\u7a4d\u5206\u5e03\u95a2\u6570\u306e\u9006\u95a2\u6570\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002p = GAMMADIST(x,...) \u3067\u3042\u308b\u3068\u304d\u3001GAMMAINV(p,...) = x \u3068\u306a\u308a\u307e\u3059\u3002', [
	                parameterDescription('p'),
	                parameterDescription('alpha'),
	                parameterDescription('beta')
	            ]),
	            'GAMMALN': functionDescription('\u30ac\u30f3\u30de\u95a2\u6570\u306e\u5024\u306e\u81ea\u7136\u5bfe\u6570 (x) \u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'GCD': functionDescription('\uff12\u3064\u306e\u6570\u5024\u9593\u306e\u6700\u5927\u516c\u7d04\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002\u6700\u5927\u516c\u7d04\u6570\u3068\u306f\u3001\u5bfe\u8c61\u3068\u306a\u308b\u3059\u3079\u3066\u306e\u5024\u3092\u4f59\u308a\u3092\u51fa\u3055\u305a\u306b\u5272\u308a\u5207\u308b\u3053\u3068\u306e\u3067\u304d\u308b\u6700\u5927\u306e\u6574\u6570\u3067\u3059\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'GEOMEAN': functionDescription('\u4e00\u7fa4\u306e\u6b63\u6570\u306e\u76f8\u4e57\u5e73\u5747\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'GESTEP': functionDescription('\u6570\u5024\u304c\u3057\u304d\u3044\u5024\u306b\u7b49\u3057\u3044\u304b\u3069\u3046\u304b\u3092\u5224\u5b9a\u3057\u307e\u3059\u3002\u6307\u5b9a\u3057\u305f\u6570\u5024\u304c\u3057\u304d\u3044\u5024\u3068\u7b49\u3057\u3044\u304b\u3001\u305d\u308c\u4ee5\u4e0a\u3067\u3042\u308c\u3070\uff11\u3001\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u306f\uff10\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('step')
	            ]),
	            'GROWTH': functionDescription('\u4e88\u6e2c\u3055\u308c\u308b\u6307\u6570\u66f2\u7dda\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('y'),
	                parameterDescription('x'),
	                parameterDescription('newx'),
	                parameterDescription('constant')
	            ]),
	            'HARMEAN': functionDescription('\u4e00\u7fa4\u306e\u6570\u5024\u306e\u8abf\u548c\u5e73\u5747\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'HEX2BIN': functionDescription('16 \u9032\u6570\u5024\u3092\uff12\u9032\u6570\u5024\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription(' places')
	            ]),
	            'HEX2DEC': functionDescription('16 \u9032\u6570\u5024\u3092 10 \u9032\u6570\u5024\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('number')
	            ]),
	            'HEX2OCT': functionDescription('16 \u9032\u6570\u5024\u3092\uff18\u9032\u6570\u5024\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription(' places')
	            ]),
	            'HLOOKUP': functionDescription('\u6307\u5b9a\u7bc4\u56f2\u306e\u6700\u4e0a\u884c\u304b\u3089\u5024\u3092\u691c\u7d22\u3057\u3001\u6307\u5b9a\u306e\u884c\u304b\u3089\u3001\u3053\u306e\u5024\u3068\u540c\u3058\u5217\u5185\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('array'),
	                parameterDescription('row'),
	                parameterDescription('approx')
	            ]),
	            'HOUR': functionDescription('\u6307\u5b9a\u306e\u6642\u523b\u5024\u306b\u5bfe\u5fdc\u3059\u308b\u6642\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('time')
	            ]),
	            'HYPGEOMDIST': functionDescription('\u8d85\u5e7e\u4f55\u5206\u5e03\u95a2\u6570\u306e\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('M'),
	                parameterDescription('N')
	            ]),
	            'IF': functionDescription('\u8ad6\u7406\u5f0f\u306e\u7d50\u679c\u3092\u8868\u3059\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('valueTest'),
	                parameterDescription('valueTrue'),
	                parameterDescription('valueFalse')
	            ]),
	            'IFERROR': functionDescription('\u6570\u5f0f\u3092\u8a55\u4fa1\u3057\u3001\u30a8\u30e9\u30fc\u306e\u5834\u5408\u306b\u306f\u6307\u5b9a\u3057\u305f\u5024\u3001\u305d\u306e\u4ed6\u306e\u5834\u5408\u306b\u306f\u6570\u5f0f\u306e\u7d50\u679c\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('error')
	            ]),
	            'IMABS': functionDescription('\u8907\u7d20\u6570\u306e\u7d76\u5bfe\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMAGINARY': functionDescription('\u8907\u7d20\u6570\u306e\u865a\u6570\u4fc2\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMARGUMENT': functionDescription('\u30e9\u30b8\u30a2\u30f3\u5358\u4f4d\u306e\u89d2\u5ea6\u3067\u3042\u308b\u5f15\u6570\u03b8\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCONJUGATE': functionDescription('\u8907\u7d20\u6570\u306e\u8907\u7d20\u5171\u5f79\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCOS': functionDescription('\u8907\u7d20\u6570\u306e\u30b3\u30b5\u30a4\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMDIV': functionDescription('\uff12\u3064\u306e\u8907\u7d20\u6570\u306e\u5546\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum'),
	                parameterDescription('complexdenom')
	            ]),
	            'IMEXP': functionDescription('\u8907\u7d20\u6570\u306e\u6307\u6570\u95a2\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMLN': functionDescription('\u8907\u7d20\u6570\u306e\u81ea\u7136\u5bfe\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMLOG2': functionDescription('\u8907\u7d20\u6570\u306e\uff12\u3092\u5e95\u3068\u3059\u308b\u5bfe\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMLOG10': functionDescription('\u8907\u7d20\u6570\u306e\u5e38\u7528\u5bfe\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMPOWER': functionDescription('\u8907\u7d20\u6570\u306e\u6574\u6570\u4e57\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum'),
	                parameterDescription('powernum')
	            ]),
	            'IMPRODUCT': functionDescription('"x+yi" \u307e\u305f\u306f "x+yj" \u5f62\u5f0f\u306e\u30c6\u30ad\u30b9\u30c8\u3067\u6307\u5b9a\u3057\u305f\u3001\u6700\u5927 29 \u500b\u306e\u8907\u7d20\u6570\u306e\u7a4d\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum1'),
	                parameterDescription('complexnum2', true)
	            ]),
	            'IMREAL': functionDescription('"x+yi" \u307e\u305f\u306f "x+yj" \u5f62\u5f0f\u306e\u30c6\u30ad\u30b9\u30c8\u3067\u6307\u5b9a\u3057\u305f\u8907\u7d20\u6570\u306e\u5b9f\u6570\u4fc2\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSIN': functionDescription('"x+yi" \u307e\u305f\u306f "x+yj" \u5f62\u5f0f\u306e\u30c6\u30ad\u30b9\u30c8\u3067\u6307\u5b9a\u3057\u305f\u8907\u7d20\u6570\u306e\u30b5\u30a4\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSQRT': functionDescription('"x+yi" \u307e\u305f\u306f "x+yj" \u5f62\u5f0f\u306e\u30c6\u30ad\u30b9\u30c8\u3067\u6307\u5b9a\u3057\u305f\u8907\u7d20\u6570\u306e\u5e73\u65b9\u6839\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSUB': functionDescription('"x+yi" \u307e\u305f\u306f "x+yj" \u5f62\u5f0f\u306e\u30c6\u30ad\u30b9\u30c8\u3067\u6307\u5b9a\u3057\u305f\uff12\u3064\u306e\u8907\u7d20\u6570\u306e\u5dee\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum1'),
	                parameterDescription('complexnum2')
	            ]),
	            'IMSUM': functionDescription('"x+yi" \u307e\u305f\u306f "x+yj" \u5f62\u5f0f\u306e\u30c6\u30ad\u30b9\u30c8\u3067\u6307\u5b9a\u3057\u305f\uff12\u3064\u4ee5\u4e0a\u306e\u8907\u7d20\u6570\u306e\u5408\u8a08\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum1'),
	                parameterDescription('complexnum2', true)
	            ]),
	            'INDEX': functionDescription('\u914d\u5217\u307e\u305f\u306f\u30bb\u30eb\u7bc4\u56f2\u306e\u4e2d\u304b\u3089\u3001\u7279\u5b9a\u306e\u5024\u307e\u305f\u306f\u5024\u3078\u306e\u53c2\u7167\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('return'),
	                parameterDescription('row'),
	                parameterDescription('col'),
	                parameterDescription('area')
	            ]),
	            'INDIRECT': functionDescription('\u3053\u306e\u95a2\u6570\u306f\u3001\u30c6\u30ad\u30b9\u30c8\u6587\u5b57\u5217\u306b\u3088\u3063\u3066\u6307\u5b9a\u3057\u305f\u53c2\u7167\u3092\u8fd4\u3057\u307e\u3059\u3002\u53c2\u7167\u306f\u305f\u3060\u3061\u306b\u8a55\u4fa1\u3055\u308c\u3001\u305d\u306e\u5185\u5bb9\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002', [
	                parameterDescription('ref_text'),
	                parameterDescription('a1_style')
	            ]),
	            'INT': functionDescription('\u6307\u5b9a\u3057\u305f\u5024\u306e\u5c0f\u6570\u90e8\u5206\u3092\u5207\u308a\u6368\u3066\u3001\u6700\u3082\u8fd1\u3044\u6574\u6570\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'INTERCEPT': functionDescription('\u6307\u5b9a\u306e x \u5024\u3068 y \u5024\u3092\u4f7f\u7528\u3057\u3066\u5f97\u305f\u56de\u5e30\u76f4\u7dda\u304c y \u8ef8\u3068\u4ea4\u308f\u308b\u70b9\u3092\u6c42\u3081\u307e\u3059\u3002', [
	                parameterDescription('dependent'),
	                parameterDescription('independent')
	            ]),
	            'INTRATE': functionDescription('\u5168\u984d\u6295\u8cc7\u3055\u308c\u305f\u8a3c\u5238\u306e\u5229\u7387\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('invest'),
	                parameterDescription('redeem'),
	                parameterDescription('basis')
	            ]),
	            'IPMT': functionDescription('\u501f\u5165\u91d1\u8fd4\u6e08\u306b\u304a\u3044\u3066\u3001\u652f\u6255\u3046\u3079\u304d\u91d1\u5229\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('per'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'IRR': functionDescription('\u4e00\u9023\u306e\u5b9a\u671f\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u30d5\u30ed\u30fc\uff08values \u5f15\u6570\u306e\u914d\u5217\u5024\u3067\u6307\u5b9a\uff09\u306b\u57fa\u3065\u304d\u3001\u5185\u90e8\u5229\u76ca\u7387\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('arrayvals'),
	                parameterDescription('estimate')
	            ]),
	            'ISBLANK': functionDescription('\u30bb\u30eb\u306a\u3069\u306e\u5024\u304c\u7a7a\u767d\u304b\u3069\u3046\u304b\u3092\u5224\u5b9a\u3057\u307e\u3059\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISERR': functionDescription('\u30bb\u30eb\u306a\u3069\u306e\u5024\u304c\u3001#N/A\uff08\u5229\u7528\u4e0d\u53ef\uff09\u4ee5\u5916\u306e\u30a8\u30e9\u30fc\u5024\u3092\u53c2\u7167\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5224\u5b9a\u3057\u307e\u3059\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISERROR': functionDescription('\u30bb\u30eb\u306a\u3069\u306e\u5024\u304c\u3001\u4efb\u610f\u306e\u30a8\u30e9\u30fc\u5024\u3092\u53c2\u7167\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5224\u5b9a\u3057\u307e\u3059\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISEVEN': functionDescription('\u30bb\u30eb\u306a\u3069\u306e\u5024\u304c\u5076\u6570\u304b\u3069\u3046\u304b\u3092\u5224\u5b9a\u3057\u307e\u3059\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISLOGICAL': functionDescription('\u30bb\u30eb\u306a\u3069\u306e\u5024\u304c\u8ad6\u7406\u5024\u304b\u3069\u3046\u304b\u3092\u5224\u5b9a\u3057\u307e\u3059\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISNA': functionDescription('\u30bb\u30eb\u306a\u3069\u306e\u5024\u304c\u3001\u30a8\u30e9\u30fc\u5024 #N/A\uff08\u5229\u7528\u4e0d\u53ef\uff09\u3092\u53c2\u7167\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5224\u5b9a\u3057\u307e\u3059\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISNONTEXT': functionDescription('\u30bb\u30eb\u306a\u3069\u306e\u5024\u304c\u3001\u30c6\u30ad\u30b9\u30c8\u4ee5\u5916\u306e\u30c7\u30fc\u30bf\u304b\u3069\u3046\u304b\u3092\u5224\u5b9a\u3057\u307e\u3059\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISNUMBER': functionDescription('\u30bb\u30eb\u306a\u3069\u306e\u5024\u304c\u6570\u5024\u304b\u3069\u3046\u304b\u3092\u5224\u5b9a\u3057\u307e\u3059\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISODD': functionDescription('\u30bb\u30eb\u306a\u3069\u306e\u5024\u304c\u5947\u6570\u304b\u3069\u3046\u304b\u3092\u5224\u5b9a\u3057\u307e\u3059\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISPMT': functionDescription('\u6307\u5b9a\u306e\u6295\u8cc7\u671f\u9593\u306b\u652f\u6255\u308f\u308c\u308b\u91d1\u5229\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('per'),
	                parameterDescription('nper'),
	                parameterDescription('pv')
	            ]),
	            'ISREF': functionDescription('\u30bb\u30eb\u306a\u3069\u306e\u5024\u304c\u3001\u4ed6\u306e\u30bb\u30eb\u3078\u306e\u53c2\u7167\u304b\u3069\u3046\u304b\u3092\u5224\u5b9a\u3057\u307e\u3059\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISTEXT': functionDescription('\u30bb\u30eb\u306a\u3069\u306e\u5024\u304c\u6587\u5b57\u5217\u304b\u3069\u3046\u304b\u3092\u5224\u5b9a\u3057\u307e\u3059\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'KURT': functionDescription('\u30c7\u30fc\u30bf\u96c6\u5408\u306e\u5c16\u5ea6\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2'),
	                parameterDescription('value3'),
	                parameterDescription('value4', true)
	            ]),
	            'LARGE': functionDescription('\u30c7\u30fc\u30bf\u96c6\u5408\u5185\u3067 n \u756a\u76ee\u306b\u5927\u304d\u3044\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'LCM': functionDescription('\u6307\u5b9a\u3057\u305f\u6574\u6570\u306e\u6700\u5c0f\u516c\u500d\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'LEFT': functionDescription('\u30c6\u30ad\u30b9\u30c8\u5024\u304b\u3089\u5148\u982d\uff08\u5de6\u7aef\uff09\u306e\u6587\u5b57\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('mytext'),
	                parameterDescription('num_chars')
	            ]),
	            'LEN': functionDescription('\u30c6\u30ad\u30b9\u30c8\u306e\u6587\u5b57\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'LINEST': functionDescription('\u76f4\u7dda\u306b\u57fa\u3065\u304f\u7d71\u8a08\u5024\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('y'),
	                parameterDescription('x'),
	                parameterDescription('constant'),
	                parameterDescription('stats')
	            ]),
	            'LN': functionDescription('\u6307\u5b9a\u3057\u305f\u6570\u306e\u81ea\u7136\u5bfe\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002LN \u306f EXP \u306e\u9006\u95a2\u6570\u3067\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'LOG': functionDescription('Y \u3092\u5e95\u3068\u3059\u308b\u6570\u5024 X \u306e\u5bfe\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('base')
	            ]),
	            'LOG10': functionDescription('10 \u3092\u5e95\u3068\u3059\u308b\u6570\u5024 X \u306e\u5bfe\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'LOGEST': functionDescription('\u30c7\u30fc\u30bf\u306b\u9069\u5408\u3059\u308b\u6307\u6570\u66f2\u7dda\u3092\u8a08\u7b97\u3057\u3001\u3053\u306e\u66f2\u7dda\u3092\u8868\u3059\u5024\u306e\u914d\u5217\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('y'),
	                parameterDescription('x'),
	                parameterDescription('constant'),
	                parameterDescription('stats')
	            ]),
	            'LOGINV': functionDescription('x \u306e\u5bfe\u6570\u6b63\u898f\u7d2f\u7a4d\u5206\u5e03\u95a2\u6570\u306e\u9006\u95a2\u6570\u306e\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('prob'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'LOGNORMDIST': functionDescription('x \u306e\u5bfe\u6570\u6b63\u898f\u7d2f\u7a4d\u5206\u5e03\u95a2\u6570\u306e\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'LOOKUP': functionDescription('\uff11\u884c\u307e\u305f\u306f\uff11\u5217\u5185\u306e\u30bb\u30eb\u7bc4\u56f2\u3001\u307e\u305f\u306f\u914d\u5217\u304b\u3089\u5024\u3092\u691c\u7d22\u3057\u307e\u3059\u3002', [
	                parameterDescription('lookupvalue'),
	                parameterDescription('lookupvector'),
	                parameterDescription('resultvector')
	            ]),
	            'LOWER': functionDescription('\u30c6\u30ad\u30b9\u30c8\u3092\u5c0f\u6587\u5b57\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('string')
	            ]),
	            'MATCH': functionDescription('\u6307\u5b9a\u3055\u308c\u305f\u9805\u76ee\u306e\u7bc4\u56f2\u5185\u306b\u304a\u3051\u308b\u76f8\u5bfe\u4f4d\u7f6e\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('array'),
	                parameterDescription('type')
	            ]),
	            'MAX': functionDescription('\u5f15\u6570\u30ea\u30b9\u30c8\u306e\u4e2d\u304b\u3089\u6700\u5927\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MAXA': functionDescription('\u5f15\u6570\u30ea\u30b9\u30c8\u306e\u4e2d\u304b\u3089\u6700\u5927\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MDETERM': functionDescription('\u914d\u5217\u306e\u884c\u5217\u5f0f\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array')
	            ]),
	            'MDURATION': functionDescription('\u984d\u9762\u3092 $100 \u3068\u307f\u306a\u3057\u305f\u8a3c\u5238\u306e\u4fee\u6b63\u30de\u30b3\u30fc\u30ec\u30fc \u30c7\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('coupon'),
	                parameterDescription('yield'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'MEDIAN': functionDescription('\u6307\u5b9a\u3057\u305f\u4e00\u7fa4\u306e\u6570\u5024\u306e\u4e2d\u304b\u3089\u30e1\u30b8\u30a2\u30f3\uff08\u4e2d\u592e\u5024\uff09\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MID': functionDescription('\u30c6\u30ad\u30b9\u30c8\u5185\u306e\u6307\u5b9a\u4f4d\u7f6e\u304b\u3089\u3001\u6307\u5b9a\u3057\u305f\u6570\u306e\u6587\u5b57\u3092\u53d6\u308a\u51fa\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('text'),
	                parameterDescription('start_num'),
	                parameterDescription('num_chars')
	            ]),
	            'MIN': functionDescription('\u5f15\u6570\u30ea\u30b9\u30c8\u306e\u4e2d\u304b\u3089\u6700\u5c0f\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MINA': functionDescription('\u5f15\u6570\u30ea\u30b9\u30c8\u306e\u4e2d\u304b\u3089\u6700\u5c0f\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MINUTE': functionDescription('\u5f15\u6570\u30ea\u30b9\u30c8\u306e\u4e2d\u304b\u3089\u6700\u5c0f\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('time')
	            ]),
	            'MINVERSE': functionDescription('\u914d\u5217\u306b\u6307\u5b9a\u3057\u305f\u884c\u5217\u306e\u9006\u884c\u5217\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array')
	            ]),
	            'MIRR': functionDescription('\u4e00\u9023\u306e\u5b9a\u671f\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u30d5\u30ed\u30fc\u306b\u57fa\u3065\u304d\u3001\u4fee\u6b63\u5185\u90e8\u5229\u76ca\u7387\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('arrayvals'),
	                parameterDescription('payment_int'),
	                parameterDescription('income_int')
	            ]),
	            'MMULT': functionDescription('\uff12\u3064\u306e\u914d\u5217\u306b\u6307\u5b9a\u3057\u305f\u884c\u5217\u306e\u7a4d\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'MOD': functionDescription('number \u5f15\u6570\uff08\u88ab\u9664\u6570\uff09\u3092 divisor \u5f15\u6570\uff08\u9664\u6570\uff09\u3067\u5272\u3063\u305f\u3068\u304d\u306e\u5270\u4f59\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('dividend'),
	                parameterDescription('divisor')
	            ]),
	            'MODE': functionDescription('\u6307\u5b9a\u306e\u5f15\u6570\u30ea\u30b9\u30c8\u306e\u4e2d\u3067\u3001\u6700\u3082\u983b\u7e41\u306b\u51fa\u73fe\u3059\u308b\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MONTH': functionDescription('\u6307\u5b9a\u306e\u65e5\u4ed8\u5024\u306b\u5bfe\u5fdc\u3059\u308b\u6708\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('date')
	            ]),
	            'MROUND': functionDescription('\u6307\u5b9a\u306e\u500d\u6570\u3068\u306a\u308b\u3088\u3046\u306b\u4e38\u3081\u305f\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('multiple')
	            ]),
	            'MULTINOMIAL': functionDescription('\u6307\u5b9a\u3055\u308c\u305f\u5f15\u6570\u30ea\u30b9\u30c8\u306e\u591a\u9805\u4fc2\u6570\uff08\u30ea\u30b9\u30c8\u5185\u306e\u5024\u306e\u548c\u306e\u968e\u4e57\u3068\u3001\u5404\u5024\u306e\u968e\u4e57\u306e\u7a4d\u3068\u306e\u6bd4\uff09\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'N': functionDescription('\u6570\u5024\u306b\u5909\u63db\u3057\u305f\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'NA': functionDescription('\u300c\u5229\u7528\u4e0d\u53ef\u300d\u3092\u610f\u5473\u3059\u308b\u30a8\u30e9\u30fc\u5024 #N/A \u3092\u8fd4\u3057\u307e\u3059\u3002', []),
	            'NEGBINOMDIST': functionDescription('\u8ca0\u306e\u4e8c\u9805\u5206\u5e03\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('r'),
	                parameterDescription('p')
	            ]),
	            'NETWORKDAYS': functionDescription('\u958b\u59cb\u65e5\u304b\u3089\u7d42\u4e86\u65e5\u307e\u3067\u306e\u671f\u9593\u5185\u3067\u3001\u5b8c\u5168\u306a\u7a3c\u50cd\u65e5\u306e\u5408\u8a08\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate'),
	                parameterDescription('holidays')
	            ]),
	            'NOMINAL': functionDescription('\u6307\u5b9a\u306e\u5b9f\u52b9\u5229\u7387\u3068\uff11\u5e74\u3042\u305f\u308a\u306e\u8907\u5229\u8a08\u7b97\u671f\u9593\u306b\u57fa\u3065\u304d\u3001\u540d\u76ee\u4e0a\u306e\u5e74\u5229\u7387\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('effrate'),
	                parameterDescription('comper')
	            ]),
	            'NORMDIST': functionDescription('\u6307\u5b9a\u306e\u5e73\u5747\u3068\u6a19\u6e96\u504f\u5dee\u306b\u5bfe\u3059\u308b\u6b63\u898f\u7d2f\u7a4d\u5206\u5e03\u95a2\u6570\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev'),
	                parameterDescription('cumulative')
	            ]),
	            'NORMINV': functionDescription('\u6307\u5b9a\u306e\u5e73\u5747\u3068\u6a19\u6e96\u504f\u5dee\u306b\u5bfe\u3059\u308b\u6b63\u898f\u7d2f\u7a4d\u5206\u5e03\u95a2\u6570\u306e\u9006\u95a2\u6570\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('prob'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'NORMSDIST': functionDescription('\u6a19\u6e96\u6b63\u898f\u7d2f\u7a4d\u5206\u5e03\u95a2\u6570\u306e\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'NORMSINV': functionDescription('\u6a19\u6e96\u6b63\u898f\u7d2f\u7a4d\u5206\u5e03\u95a2\u6570\u306e\u9006\u95a2\u6570\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002\u3053\u306e\u5206\u5e03\u3067\u306f\u3001\u5e73\u5747\u304c\uff10\u3001\u6a19\u6e96\u504f\u5dee\u304c\uff11\u3068\u306a\u308a\u307e\u3059\u3002', [
	                parameterDescription('prob')
	            ]),
	            'NOT': functionDescription('\u5f15\u6570\u306e\u8ad6\u7406\u5024\u3092\u9006\u306b\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'NOW': functionDescription('\u73fe\u5728\u306e\u65e5\u4ed8\u3068\u6642\u523b\u3092\u8868\u3059\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', []),
	            'NPER': functionDescription('\u73fe\u884c\u4fa1\u5024\u3001\u5c06\u6765\u4fa1\u5024\u3001\u5b9a\u671f\u6255\u3044\u3001\u304a\u3088\u3073\u7279\u5b9a\u306e\u5229\u7387\u3092\u6761\u4ef6\u3068\u3057\u3001\u6295\u8cc7\u306b\u5fc5\u8981\u306a\u671f\u9593\uff08\u652f\u6255\u56de\u6570\uff09\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('paymt'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'NPV': functionDescription('\u5272\u5f15\u7387\u3068\u3001\u5c06\u6765\u884c\u308f\u308c\u308b\u4e00\u9023\u306e\u652f\u6255\u3044\u304a\u3088\u3073\u305d\u306e\u53ce\u76ca\u306b\u57fa\u3065\u3044\u3066\u3001\u6295\u8cc7\u306e\u6b63\u5473\u73fe\u5728\u4fa1\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('discount'),
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'OCT2BIN': functionDescription('\uff18\u9032\u6570\u5024\u3092\uff12\u9032\u6570\u5024\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'OCT2DEC': functionDescription('\uff18\u9032\u6570\u5024\u3092 10 \u9032\u6570\u5024\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('number')
	            ]),
	            'OCT2HEX': functionDescription('\uff18\u9032\u6570\u5024\u3092 16 \u9032\u6570\u5024\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'ODD': functionDescription('\u6307\u5b9a\u3057\u305f\u5024\u3092\u5207\u308a\u4e0a\u3052\u3001\u6700\u3082\u8fd1\u3044\u5947\u6570\u306e\u6574\u6570\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'ODDFPRICE': functionDescription('\uff11\u671f\u76ee\u306e\u65e5\u6570\u304c\u534a\u7aef\u306a\u8a3c\u5238\u306b\u5bfe\u3057\u3001\u984d\u9762 $100 \u3042\u305f\u308a\u306e\u4fa1\u683c\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
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
	            'ODDFYIELD': functionDescription('\uff11\u671f\u76ee\u306e\u65e5\u6570\u304c\u534a\u7aef\u306a\u8a3c\u5238\u306e\u5229\u56de\u308a\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
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
	            'ODDLPRICE': functionDescription('\u6700\u7d42\u671f\u306e\u65e5\u6570\u304c\u534a\u7aef\u306a\u8a3c\u5238\u306b\u5bfe\u3057\u3001\u984d\u9762 $100 \u3042\u305f\u308a\u306e\u4fa1\u683c\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('last'),
	                parameterDescription('rate'),
	                parameterDescription('yield'),
	                parameterDescription('redeem'),
	                parameterDescription('freq'),
	                parameterDescription('basis')
	            ]),
	            'ODDLYIELD': functionDescription('\u6700\u7d42\u671f\u306e\u65e5\u6570\u304c\u534a\u7aef\u306a\u8a3c\u5238\u306e\u5229\u56de\u308a\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('last'),
	                parameterDescription('rate'),
	                parameterDescription('price'),
	                parameterDescription('redeem'),
	                parameterDescription('freq'),
	                parameterDescription('basis')
	            ]),
	            'OFFSET': functionDescription('\u3053\u306e\u95a2\u6570\u306f\u3001\u30bb\u30eb\u7bc4\u56f2\u3078\u306e\u53c2\u7167\u3092\u8fd4\u3057\u307e\u3059\u3002 \u8fd4\u3055\u308c\u308b\u30bb\u30eb\u7bc4\u56f2\u306f\u3001\u5358\u4e00\u306e\u30bb\u30eb\u307e\u305f\u306f\u30bb\u30eb\u7bc4\u56f2\u304b\u3089\u306e\u884c\u6570\u3068\u5217\u6570\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u5358\u4e00\u306e\u30bb\u30eb\u307e\u305f\u306f\u30bb\u30eb\u7bc4\u56f2\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002', [
	                parameterDescription('reference'),
	                parameterDescription('rows'),
	                parameterDescription('cols'),
	                parameterDescription('height'),
	                parameterDescription('width')
	            ]),
	            'OR': functionDescription('\u3044\u305a\u308c\u304b\u306e\u5f15\u6570\u304c\u771f\u3067\u3042\u308c\u3070\uff11\uff08True\uff09\u3092\u3001\u3059\u3079\u3066\u306e\u5f15\u6570\u304c\u507d\u3067\u3042\u308c\u3070\uff10\uff08False\uff09\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('argument1'),
	                parameterDescription('argument2...')
	            ]),
	            'PEARSON': functionDescription('\u30d4\u30a2\u30bd\u30f3\u306e\u7a4d\u7387\u76f8\u95a2\u4fc2\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002\u3053\u308c\u306f -1.0\uff5e1.0 \u306e\u7bc4\u56f2\u306e\u6570\u5024\u3067\u3042\u308a\u3001\uff12\u7d44\u306e\u30c7\u30fc\u30bf\u9593\u3067\u306e\u7dda\u5f62\u76f8\u95a2\u306e\u7a0b\u5ea6\u3092\u793a\u3057\u307e\u3059\u3002', [
	                parameterDescription('array_ind'),
	                parameterDescription('array_dep')
	            ]),
	            'PERCENTILE': functionDescription('\u3042\u308b\u7bc4\u56f2\u5185\u306e\u5024\u306e\u4e2d\u3067 n \u756a\u76ee\u306e\u767e\u5206\u4f4d\u3092\u6301\u3064\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'PERCENTRANK': functionDescription('\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u5185\u306e\u5024\u306e\u9806\u4f4d\u3092\u3001\u3053\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u5185\u306e\u767e\u5206\u7387\u3068\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array'),
	                parameterDescription('n'),
	                parameterDescription('sigdig')
	            ]),
	            'PERMUT': functionDescription('\u6307\u5b9a\u3057\u305f\u6570\u306e\u6a19\u672c\u3092\u629c\u304d\u53d6\u308b\u969b\u306e\u3001\u6709\u52b9\u306a\u9806\u5217\u306e\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('k'),
	                parameterDescription('n')
	            ]),
	            'PI': functionDescription('\u5186\u5468\u7387\uff08\u03c0\uff09\u3092 3.1415926536 \u3068\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002', []),
	            'PMT': functionDescription('\u73fe\u5728\u4fa1\u5024\u3001\u6307\u5b9a\u306e\u5229\u7387\u3001\u304a\u3088\u3073\u652f\u6255\u56de\u6570\u306b\u57fa\u3065\u304d\u3001\u501f\u5165\u91d1\u8fd4\u6e08\u3067\u306e\u5b9a\u671f\u652f\u6255\u984d\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'POISSON': functionDescription('\u30dd\u30a2\u30bd\u30f3\u78ba\u7387\u5206\u5e03\u306e\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('nevents'),
	                parameterDescription('mean'),
	                parameterDescription('cumulative')
	            ]),
	            'POWER': functionDescription('\u6307\u5b9a\u306e\u6570\uff08X\uff09\u3092\u5e95\u3068\u3059\u308b\u6307\u6570\uff08Y\uff09\u306e\u3079\u304d\u4e57\u3092\u6c42\u3081\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('power')
	            ]),
	            'PPMT': functionDescription('\u5143\u91d1\u306e\u8fd4\u6e08\u984d\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('per'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'PRICE': functionDescription('\u5b9a\u671f\u7684\u306b\u5229\u606f\u304c\u652f\u6255\u308f\u308c\u308b\u8a3c\u5238\u306b\u5bfe\u3057\u3001\u984d\u9762 $100 \u3042\u305f\u308a\u306e\u4fa1\u683c\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('rate'),
	                parameterDescription('yield'),
	                parameterDescription('redeem'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'PRICEDISC': functionDescription('\u5272\u5f15\u50b5\u306e\u984d\u9762 $100 \u3042\u305f\u308a\u306e\u4fa1\u683c\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('discount'),
	                parameterDescription('redeem'),
	                parameterDescription('basis')
	            ]),
	            'PRICEMAT': functionDescription('\u6e80\u671f\u65e5\u306b\u5229\u606f\u304c\u6255\u308f\u308c\u308b\u8a3c\u5238\u306b\u5bfe\u3057\u3001\u984d\u9762 $100 \u3042\u305f\u308a\u306e\u4fa1\u683c\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('issue'),
	                parameterDescription('rate'),
	                parameterDescription('yield'),
	                parameterDescription('basis')
	            ]),
	            'PROB': functionDescription('\u7279\u5b9a\u7bc4\u56f2\u5185\u306e\u5024\u304c\u4e0a\u9650\u3068\u4e0b\u9650\u306e\u9593\u306b\u53ce\u307e\u308b\u78ba\u7387\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array'),
	                parameterDescription('probs'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'PRODUCT': functionDescription('\u3059\u3079\u3066\u306e\u5f15\u6570\u5024\u3092\u4e57\u7b97\u3057\u3066\u5f97\u305f\u7a4d\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'PROPER': functionDescription('\u6587\u5b57\u5217\u5185\u306e\u5168\u82f1\u5358\u8a9e\u306e\u5148\u982d\u6587\u5b57\u3092\u5927\u6587\u5b57\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('text')
	            ]),
	            'PV': functionDescription('\u7279\u5b9a\u306e\u5229\u7387\u3001\u5b9a\u671f\u6255\u3044\u306e\u56de\u6570\u3068\u652f\u6255\u984d\u3001\u304a\u3088\u3073\u5c06\u6765\u4fa1\u5024\u3092\u6761\u4ef6\u3068\u3057\u3066\u3001\u6295\u8cc7\u306e\u73fe\u5728\u4fa1\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('numper'),
	                parameterDescription('paymt'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'QUARTILE': functionDescription('\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u304b\u3089\u3001\u6307\u5b9a\u3057\u305f\u56db\u5206\u4f4d\u6570\uff08\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e 1/4\uff3b25%\uff3d\uff09\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array'),
	                parameterDescription('quart')
	            ]),
	            'QUOTIENT': functionDescription('\u9664\u7b97\u3067\u5f97\u305f\u5546\u306e\u6574\u6570\u90e8\u5206\u3092\u8fd4\u3057\u307e\u3059\u3002QUOTIENT \u95a2\u6570\u306f\u3001\u5546\u306e\u4f59\u308a\uff08\u5270\u4f59\uff09\u3092\u7121\u8996\u3057\u305f\u3044\u5834\u5408\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002', [
	                parameterDescription('numerator'),
	                parameterDescription('denominator')
	            ]),
	            'RADIANS': functionDescription('\u5ea6\u5358\u4f4d\u306e\u89d2\u5ea6\u306e\u5024\u3092\u30e9\u30b8\u30a2\u30f3\u5358\u4f4d\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'RAND': functionDescription('\u5206\u5e03\u304c\u4e00\u69d8\u306a\u30010\u4ee5\u4e0a1\u672a\u6e80\u306e\u4e71\u6570\u3092\u767a\u751f\u3055\u305b\u307e\u3059\u3002RAND \u95a2\u6570\u306f\u3001\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u304c\u518d\u8a08\u7b97\u3055\u308c\u308b\u305f\u3073\u306b\u65b0\u305f\u306a\u4e71\u6570\u3092\u767a\u751f\u3055\u305b\u307e\u3059\u3002', []),
	            'RANDBETWEEN': functionDescription('\u6307\u5b9a\u3057\u305f\uff12\u3064\u306e\u6570\u5024\u9593\u306e\u7bc4\u56f2\u3067\u4e71\u6570\u3092\u767a\u751f\u3055\u305b\u307e\u3059\u3002RANDBETWEEN \u95a2\u6570\u306f\u3001\u30b7\u30fc\u30c8\u304c\u518d\u8a08\u7b97\u3055\u308c\u308b\u305f\u3073\u306b\u65b0\u305f\u306b\u4e71\u6570\u3092\u767a\u751f\u3055\u305b\u307e\u3059\u3002', [
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'RANK': functionDescription('\u6570\u5024\u30ea\u30b9\u30c8\u306e\u4e2d\u304b\u3089\u3001\u6307\u5b9a\u306e\u6570\u5024\u304c\u4f55\u756a\u76ee\u306b\u4f4d\u7f6e\u3059\u308b\u304b\u3092\u8fd4\u3057\u307e\u3059\u3002RANK \u95a2\u6570\u306e\u8fd4\u3059\u9806\u4f4d\u306f\u3001\u30ea\u30b9\u30c8\u5185\u306e\u6570\u5024\u3092\u4e26\u3079\u66ff\u3048\u305f\u5834\u5408\u306e\u6570\u5024\u306e\u9806\u4f4d\u3068\u306a\u308a\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('array'),
	                parameterDescription('order')
	            ]),
	            'RATE': functionDescription('\u6295\u8cc7\u671f\u9593\u3092\u901a\u3058\u305f\u5229\u7387\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('nper'),
	                parameterDescription('pmt'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type'),
	                parameterDescription('guess')
	            ]),
	            'RECEIVED': functionDescription('\u5168\u984d\u6295\u8cc7\u3055\u308c\u305f\u8a3c\u5238\u306b\u5bfe\u3057\u3066\u3001\u6e80\u671f\u306b\u652f\u6255\u308f\u308c\u308b\u91d1\u984d\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('invest'),
	                parameterDescription('discount'),
	                parameterDescription('basis')
	            ]),
	            'REPLACE': functionDescription('\u6587\u5b57\u5217\u306e\u4e00\u90e8\u3092\u5225\u306e\u6587\u5b57\u5217\u306b\u7f6e\u304d\u63db\u3048\u307e\u3059\u3002', [
	                parameterDescription('old_text'),
	                parameterDescription('start_char'),
	                parameterDescription('num_chars'),
	                parameterDescription('new_text')
	            ]),
	            'REPT': functionDescription('\u6587\u5b57\u5217\u3092\u6307\u5b9a\u306e\u56de\u6570\u5206\u3001\u7e70\u308a\u8fd4\u3057\u8868\u793a\u3057\u307e\u3059\u3002', [
	                parameterDescription('text'),
	                parameterDescription('number')
	            ]),
	            'RIGHT': functionDescription('\u30c6\u30ad\u30b9\u30c8\u5024\u304b\u3089\u53f3\u7aef\u306e\u6587\u5b57\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('text'),
	                parameterDescription('num_chars')
	            ]),
	            'ROMAN': functionDescription('\u30a2\u30e9\u30d3\u30a2\u6570\u5b57\u3092\u3001\u30ed\u30fc\u30de\u6570\u5b57\u3092\u8868\u3059\u30c6\u30ad\u30b9\u30c8\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('style')
	            ]),
	            'ROUND': functionDescription('\u6307\u5b9a\u306e\u6570\u5024\u3092\u3001\u6307\u5b9a\u306e\u6841\u6570\u306b\u306a\u308b\u3088\u3046\u306b\u56db\u6368\u4e94\u5165\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('places')
	            ]),
	            'ROUNDDOWN': functionDescription('\u6307\u5b9a\u306e\u6570\u5024\u3092\u3001\u6307\u5b9a\u306e\u6841\u6570\u306b\u306a\u308b\u3088\u3046\u306b\u5207\u308a\u6368\u3066\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('places')
	            ]),
	            'ROUNDUP': functionDescription('\u6307\u5b9a\u306e\u6570\u5024\u3092\u3001\u6307\u5b9a\u306e\u6841\u6570\u306b\u306a\u308b\u3088\u3046\u306b\u5207\u308a\u4e0a\u3052\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('places')
	            ]),
	            'ROW': functionDescription('\u53c2\u7167\u306e\u884c\u756a\u53f7\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('reference')
	            ]),
	            'ROWS': functionDescription('\u914d\u5217\u5185\u306e\u884c\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array')
	            ]),
	            'RSQ': functionDescription('\u65e2\u77e5\u306e x \u3068\u65e2\u77e5\u306e Y \u3092\u901a\u904e\u3059\u308b\u56de\u5e30\u76f4\u7dda\u306e\u30c7\u30fc\u30bf\u70b9\u3092\u4f7f\u7528\u3057\u3066\u3001\u30d4\u30a2\u30bd\u30f3\u7a4d\u7387\u76f8\u95a2\u4fc2\u6570\u306e\u4e8c\u4e57\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array_dep'),
	                parameterDescription('array_ind')
	            ]),
	            'SEARCH': functionDescription('\u30c6\u30ad\u30b9\u30c8\u5185\u304b\u3089\u6307\u5b9a\u306e\u6587\u5b57\u3092\u691c\u7d22\u3057\u3001\u30c6\u30ad\u30b9\u30c8\u5185\u306b\u304a\u3051\u308b\u3053\u306e\u6587\u5b57\u306e\u958b\u59cb\u4f4d\u7f6e\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('string1'),
	                parameterDescription('string2')
	            ]),
	            'SECOND': functionDescription('\u6307\u5b9a\u306e\u6642\u523b\u5024\u306b\u5bfe\u5fdc\u3059\u308b\u79d2\u306e\u5024\uff080\uff5e59\uff09\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('time')
	            ]),
	            'SERIESSUM': functionDescription('\u3079\u304d\u7d1a\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('m'),
	                parameterDescription('coeff')
	            ]),
	            'SIGN': functionDescription('\u6570\u5024\u306e\u7b26\u53f7\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'SIN': functionDescription('\u6307\u5b9a\u3057\u305f\u89d2\u5ea6\u306e\u30b5\u30a4\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('angle')
	            ]),
	            'SINH': functionDescription('\u6307\u5b9a\u3057\u305f\u6570\u5024\u306e\u30cf\u30a4\u30d1\u30fc\u30dc\u30ea\u30c3\u30af\u30b5\u30a4\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'SKEW': functionDescription('\u5206\u5e03\u306e\u6b6a\u5ea6\uff08\u5e73\u5747\u5024\u304b\u3089\u306e\u30c7\u30fc\u30bf\u306e\u504f\u308a\uff09\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'SLN': functionDescription('\u5b9a\u984d\u6cd5\u3092\u4f7f\u7528\u3057\u3066\u3001\uff11\u671f\u3042\u305f\u308a\u306e\u8cc7\u7523\u306e\u6e1b\u4fa1\u511f\u5374\u8cbb\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life')
	            ]),
	            'SLOPE': functionDescription('\u56de\u5e30\u76f4\u7dda\u306e\u50be\u304d\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('array_dep'),
	                parameterDescription('array_ind')
	            ]),
	            'SMALL': functionDescription('\u30c7\u30fc\u30bf\u96c6\u5408\u5185\u3067 n \u756a\u76ee\u306b\u5c0f\u3055\u3044\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'SQRT': functionDescription('\u6307\u5b9a\u3057\u305f\u6570\u5024\u306e\u6b63\u306e\u5e73\u65b9\u6839\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'SQRTPI': functionDescription('\u6307\u5b9a\u306e\u6570\u5024\u3092\u5186\u5468\u7387\u306b\u639b\u3051\u305f\u5024\u306e\u6b63\u306e\u5e73\u65b9\u6839\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('multiple')
	            ]),
	            'STANDARDIZE': functionDescription('\u7279\u5b9a\u306e\u5e73\u5747\u5024\u3068\u6a19\u6e96\u504f\u5dee\u3067\u6c7a\u5b9a\u3055\u308c\u308b\u5206\u5e03\u3092\u6a19\u6e96\u5316\u3059\u308b\u305f\u3081\u306e\u5909\u91cf\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'STDEVA': functionDescription('\u6307\u5b9a\u3057\u305f\u6570\u5024\u306e\u96c6\u5408\u304b\u3089\u6a19\u6e96\u504f\u5dee\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'STDEVP': functionDescription('\u5f15\u6570\u3068\u3057\u3066\u6307\u5b9a\u3057\u305f\u6bcd\u96c6\u56e3\u5168\u4f53\u306e\u6a19\u6e96\u504f\u5dee\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'STDEVPA': functionDescription('\u5f15\u6570\u3068\u3057\u3066\u6307\u5b9a\u3057\u305f\u6bcd\u96c6\u56e3\u5168\u4f53\u306e\u6a19\u6e96\u504f\u5dee\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'STEYX': functionDescription('\u500b\u5225\u306e x \u306b\u5bfe\u3059\u308b y \u306e\u4e88\u6e2c\u5024\u306e\u6a19\u6e96\u8aa4\u5dee\u3092\u8fd4\u3057\u307e\u3059\u3002\u6a19\u6e96\u8aa4\u5dee\u3068\u306f\u3001x \u5024\u306b\u5bfe\u3057\u3066\u4e88\u6e2c\u3055\u308c\u308b y \u5024\u306e\u8aa4\u5dee\u306e\u91cf\u3092\u8868\u3059\u6307\u6a19\u3067\u3059\u3002', [
	                parameterDescription('array_dep'),
	                parameterDescription('array_ind')
	            ]),
	            'SUBSTITUTE': functionDescription('\u65e2\u5b58\u6587\u5b57\u5217\u5185\u306e\u6307\u5b9a\u306e\u6587\u5b57\u3092\u3001\u65b0\u898f\u6587\u5b57\u5217\u306b\u7f6e\u304d\u63db\u3048\u307e\u3059\u3002', [
	                parameterDescription('text'),
	                parameterDescription('old_piece'),
	                parameterDescription('new_piece'),
	                parameterDescription('instance')
	            ]),
	            'SUBTOTAL': functionDescription('\u5c0f\u8a08\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('functioncode'),
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'SUM': functionDescription('\u30bb\u30eb\u307e\u305f\u306f\u30bb\u30eb\u30d6\u30ed\u30c3\u30af\u306e\u548c\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'SUMIF': functionDescription('\u6307\u5b9a\u306e\u57fa\u6e96\u306b\u57fa\u3065\u304d\u3001\u30bb\u30eb\u5024\u3092\u5408\u8a08\u3057\u307e\u3059\u3002', [
	                parameterDescription('array'),
	                parameterDescription('condition'),
	                parameterDescription('sumrange')
	            ]),
	            'SUMIFS': functionDescription('\u8907\u6570\u306e\u57fa\u6e96\u306b\u57fa\u3065\u304d\u3001\u30bb\u30eb\u5024\u3092\u5408\u8a08\u3057\u307e\u3059\u3002', [
	                parameterDescription('array'),
	                parameterDescription('conditionarray'),
	                parameterDescription('condition', true)
	            ]),
	            'SUMPRODUCT': functionDescription('\u6307\u5b9a\u306e\u914d\u5217\u5185\u306e\u5bfe\u5fdc\u3059\u308b\u8981\u7d20\u306e\u7a4d\u3092\u7b97\u51fa\u3057\u3001\u3053\u308c\u3089\u306e\u7a4d\u306e\u5408\u8a08\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2', true)
	            ]),
	            'SUMSQ': functionDescription('\u5f15\u6570\u306b\u6307\u5b9a\u3057\u305f\u5024\u306e\uff12\u4e57\u306e\u5408\u8a08\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'SUMX2MY2': functionDescription('\uff12\u3064\u306e\u914d\u5217\u5185\u306e\u5bfe\u5fdc\u3059\u308b\u8981\u7d20\u306e\u5e73\u65b9\u5dee\u3092\u5408\u8a08\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array_x'),
	                parameterDescription('array_y')
	            ]),
	            'SUMX2PY2': functionDescription('\uff12\u3064\u306e\u914d\u5217\u5185\u306e\u5bfe\u5fdc\u3059\u308b\u8981\u7d20\u306e\u5e73\u65b9\u548c\u3092\u5408\u8a08\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array_x'),
	                parameterDescription('array_y')
	            ]),
	            'SUMXMY2': functionDescription('\uff12\u3064\u306e\u914d\u5217\u5185\u306e\u5bfe\u5fdc\u3059\u308b\u8981\u7d20\u306e\u5dee\u3092\uff12\u4e57\u3057\u3066\u5408\u8a08\u3057\u307e\u3059\u3002', [
	                parameterDescription('array_x'),
	                parameterDescription('array_y')
	            ]),
	            'SYD': functionDescription('\u5b9a\u984d\u9013\u6e1b\u6cd5\u3092\u4f7f\u7528\u3057\u3066\u3001\u7279\u5b9a\u671f\u9593\u306e\u8cc7\u7523\u306e\u6e1b\u4fa1\u511f\u5374\u8cbb\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life'),
	                parameterDescription('period')
	            ]),
	            'T': functionDescription('\u30bb\u30eb\u5185\u306b\u30c6\u30ad\u30b9\u30c8\u304c\u4fdd\u6301\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u3053\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'TAN': functionDescription('\u6307\u5b9a\u3057\u305f\u89d2\u5ea6\u306e\u30bf\u30f3\u30b8\u30a7\u30f3\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('angle')
	            ]),
	            'TANH': functionDescription('\u6307\u5b9a\u3057\u305f\u6570\u5024\u306e\u30cf\u30a4\u30d1\u30fc\u30dc\u30ea\u30c3\u30af\u30bf\u30f3\u30b8\u30a7\u30f3\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'TBILLEQ': functionDescription('\u7c73\u56fd\u8ca1\u52d9\u7701\u77ed\u671f\u8a3c\u5238\uff08TB\uff09\u306e\u50b5\u5238\u306b\u76f8\u5f53\u3059\u308b\u5229\u56de\u308a\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('discount')
	            ]),
	            'TBILLPRICE': functionDescription('\u7c73\u56fd\u8ca1\u52d9\u7701\u77ed\u671f\u8a3c\u5238\uff08TB\uff09\u306e\u984d\u9762 $100 \u3042\u305f\u308a\u306e\u4fa1\u683c\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('discount')
	            ]),
	            'TBILLYIELD': functionDescription('\u7c73\u56fd\u8ca1\u52d9\u7701\u77ed\u671f\u8a3c\u5238\uff08TB\uff09\u306e\u5229\u56de\u308a\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('priceper')
	            ]),
	            'TDIST': functionDescription('t \u5206\u5e03\u306e\u78ba\u7387\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('deg'),
	                parameterDescription('tails')
	            ]),
	            'TEXT': functionDescription('\u6570\u5024\u3092\u66f8\u5f0f\u8a2d\u5b9a\u3057\u3001\u30c6\u30ad\u30b9\u30c8\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('text')
	            ]),
	            'TIME': functionDescription('\u6307\u5b9a\u306e\u6642\u9593\u306b\u5bfe\u3059\u308b DateTime \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('hour'),
	                parameterDescription('minutes'),
	                parameterDescription('seconds')
	            ]),
	            'TIMEVALUE': functionDescription('\u6587\u5b57\u5217\u3067\u8868\u3055\u308c\u308b\u6642\u523b\u306b\u5bfe\u5fdc\u3059\u308b\u6642\u9593\u9593\u9694\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('time_string')
	            ]),
	            'TINV': functionDescription('\u30b9\u30c1\u30e5\u30fc\u30c7\u30f3\u30c8\u306e t \u5206\u5e03\u306e\u5024\u3092\u3001\u78ba\u7387\u3068\u81ea\u7531\u5ea6\u3092\u4f7f\u7528\u3057\u305f\u95a2\u6570\u3068\u3057\u3066\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('prog'),
	                parameterDescription('deg')
	            ]),
	            'TODAY': functionDescription('\u73fe\u5728\u306e\u65e5\u4ed8\u3092\u8868\u3059\u9023\u7d9a\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', []),
	            'TRANSPOSE': functionDescription('\u6c34\u5e73\u30bb\u30eb\u7bc4\u56f2\u3092\u5782\u76f4\u30bb\u30eb\u7bc4\u56f2\u3068\u3057\u3066\u8fd4\u3057\u3001\u5782\u76f4\u30bb\u30eb\u7bc4\u56f2\u3092\u6c34\u5e73\u30bb\u30eb\u7bc4\u56f2\u3068\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array')
	            ]),
	            'TREND': functionDescription('\u56de\u5e30\u76f4\u7dda\u306b\u5bfe\u3057\u3066\u4e88\u6e2c\u3055\u308c\u308b\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('y'),
	                parameterDescription('x'),
	                parameterDescription('newx'),
	                parameterDescription('constant')
	            ]),
	            'TRIM': functionDescription('\u6587\u5b57\u5217\u304b\u3089\u4f59\u5206\u306a\u30b9\u30da\u30fc\u30b9\u3092\u524a\u9664\u3057\u3001\u5358\u8a9e\u9593\u306b\uff11\u6587\u5b57\u5206\u306e\u30b9\u30da\u30fc\u30b9\u3092\u4fdd\u3061\u307e\u3059\u3002', [
	                parameterDescription('text')
	            ]),
	            'TRIMMEAN': functionDescription('\u4e0a\u4f4d\u304a\u3088\u3073\u4e0b\u4f4d\u306e\u30c7\u30fc\u30bf\u3092\u9664\u5916\u3057\u305f\u3001\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u5185\u306e\u4e2d\u9593\u30c7\u30fc\u30bf\u306e\u5e73\u5747\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('array'),
	                parameterDescription('percent')
	            ]),
	            'TRUE': functionDescription('\u8ad6\u7406\u5024\uff11\uff08True\uff09\u3092\u8fd4\u3057\u307e\u3059\u3002', []),
	            'TRUNC': functionDescription('\u30b9\u30c1\u30e5\u30fc\u30c7\u30f3\u30c8\u306e t \u691c\u5b9a\u306b\u95a2\u9023\u3059\u308b\u78ba\u7387\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('precision')
	            ]),
	            'TTEST': functionDescription('\u30b9\u30c1\u30e5\u30fc\u30c7\u30f3\u30c8\u306e t \u691c\u5b9a\u306b\u95a2\u9023\u3059\u308b\u78ba\u7387\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2'),
	                parameterDescription('tails'),
	                parameterDescription('type')
	            ]),
	            'TYPE': functionDescription('\u5024\u306e\u30c7\u30fc\u30bf\u578b\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'UPPER': functionDescription('\u30c6\u30ad\u30b9\u30c8\u3092\u5927\u6587\u5b57\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('string')
	            ]),
	            'VALUE': functionDescription('\u6570\u5024\u3092\u8868\u3059\u6587\u5b57\u5217\u3092\u6570\u5024\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('text')
	            ]),
	            'VAR': functionDescription('\u5f15\u6570\u5024\u3092\u6bcd\u96c6\u56e3\u306e\u6a19\u672c\u3068\u307f\u306a\u3057\u3001\u6bcd\u96c6\u56e3\u306e\u5206\u6563\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VARA': functionDescription('\u5f15\u6570\u5024\u3092\u6bcd\u96c6\u56e3\u306e\u6a19\u672c\u3068\u307f\u306a\u3057\u3001\u6bcd\u96c6\u56e3\u306e\u5206\u6563\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VARP': functionDescription('\u6bcd\u96c6\u56e3\u5168\u4f53\u306e\u5206\u6563\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VARPA': functionDescription('\u6bcd\u96c6\u56e3\u5168\u4f53\u306e\u5206\u6563\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VDB': functionDescription('\u500d\u7387\u6cd5\u3092\u4f7f\u7528\u3057\u3066\u3001\u6307\u5b9a\u3057\u305f\u4efb\u610f\u306e\u671f\u9593\u306b\u304a\u3051\u308b\u8cc7\u7523\u306e\u6e1b\u4fa1\u511f\u5374\u8cbb\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life'),
	                parameterDescription('start'),
	                parameterDescription('end'),
	                parameterDescription('factor'),
	                parameterDescription('switchnot')
	            ]),
	            'VLOOKUP': functionDescription('\u6307\u5b9a\u7bc4\u56f2\u306e\u6700\u5de6\u5217\u304b\u3089\u5024\u3092\u691c\u7d22\u3057\u3001\u6307\u5b9a\u306e\u5217\u304b\u3089\u3001\u3053\u306e\u5024\u3068\u540c\u3058\u884c\u5185\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('array'),
	                parameterDescription('colindex'),
	                parameterDescription('approx')
	            ]),
	            'WEEKDAY': functionDescription('\u6307\u5b9a\u306e\u65e5\u4ed8\u306b\u5bfe\u5fdc\u3059\u308b\u66dc\u65e5\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('date'),
	                parameterDescription('type')
	            ]),
	            'WEEKNUM': functionDescription('\u6307\u5b9a\u306e\u65e5\u4ed8\u304c\u305d\u306e\u5e74\u306e\u4f55\u9031\u76ee\u306b\u5f53\u305f\u308b\u304b\u3092\u8868\u3059\u6570\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('date'),
	                parameterDescription('weektype')
	            ]),
	            'WEIBULL': functionDescription('\uff12\u3064\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u3088\u308b\u30ef\u30a4\u30d6\u30eb\u5206\u5e03\u306e\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u4fe1\u983c\u6027\u306e\u5206\u6790\u306a\u3069\u306b\u3088\u304f\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative')
	            ]),
	            'WORKDAY': functionDescription('\u958b\u59cb\u65e5\u3088\u308a\u6307\u5b9a\u306e\u65e5\u6570\u5206\u4ee5\u524d\u307e\u305f\u306f\u4ee5\u964d\u306e\u7a3c\u50cd\u65e5\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('startdate'),
	                parameterDescription('numdays'),
	                parameterDescription('holidays')
	            ]),
	            'XIRR': functionDescription('\u4e88\u5b9a\u3055\u308c\u3066\u3044\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u30d5\u30ed\u30fc\uff08\u5b9a\u671f\u7684\u3001\u307e\u305f\u306f\u4e0d\u5b9a\u671f\uff09\u306b\u57fa\u3065\u304d\u3001\u5185\u90e8\u5229\u76ca\u7387\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('values'),
	                parameterDescription('dates'),
	                parameterDescription('guess')
	            ]),
	            'XNPV': functionDescription('\u4e88\u5b9a\u3055\u308c\u3066\u3044\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u30d5\u30ed\u30fc\uff08\u5b9a\u671f\u7684\u3001\u307e\u305f\u306f\u4e0d\u5b9a\u671f\uff09\u306b\u57fa\u3065\u304d\u3001\u6b63\u5473\u73fe\u5728\u4fa1\u5024\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('values'),
	                parameterDescription('dates')
	            ]),
	            'YEAR': functionDescription('\u6307\u5b9a\u306e\u65e5\u4ed8\u306b\u5bfe\u5fdc\u3059\u308b\u5e74\u3092\u8868\u3059\u6574\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('date')
	            ]),
	            'YEARFRAC': functionDescription('\u958b\u59cb\u65e5\u304b\u3089\u7d42\u4e86\u65e5\u307e\u3067\u306e\u671f\u9593\u5185\u306e\u5b8c\u5168\u306a\u65e5\u6570\u304c\u3001\uff11\u5e74\u306e\u3069\u308c\u3060\u3051\u3092\u5360\u3081\u308b\u304b\u3092\u8868\u3059\u5272\u5408\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate'),
	                parameterDescription('basis')
	            ]),
	            'YIELD': functionDescription('\u5b9a\u671f\u7684\u306b\u5229\u606f\u304c\u652f\u6255\u308f\u308c\u308b\u8a3c\u5238\u306e\u5229\u56de\u308a\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('rate'),
	                parameterDescription('price'),
	                parameterDescription('redeem'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'YIELDDISC': functionDescription('\u5272\u5f15\u50b5\u306e\u5e74\u5229\u56de\u308a\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('price'),
	                parameterDescription('redeem'),
	                parameterDescription('basis')
	            ]),
	            'YIELDMAT': functionDescription('\u6e80\u671f\u306b\u5229\u606f\u304c\u652f\u6255\u308f\u308c\u308b\u8a3c\u5238\u306e\u5e74\u5229\u56de\u308a\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('issue'),
	                parameterDescription('issrate'),
	                parameterDescription('price'),
	                parameterDescription('basis')
	            ]),
	            'ZTEST': functionDescription('z \u691c\u5b9a\u306e\u6709\u610f\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002z \u691c\u5b9a\u3067\u306f\u3001\u4e00\u7fa4\u306e\u30c7\u30fc\u30bf\u306b\u5bfe\u3059\u308b\u691c\u5b9a\u5024 x \u306e\u6a19\u6e96\u30b9\u30b3\u30a2\u3092\u751f\u6210\u3057\u3001\u6b63\u898f\u5206\u5e03\u306e\u4e21\u5074\u306e\u78ba\u7387\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array'),
	                parameterDescription('x'),
	                parameterDescription('sigma')
	            ]),
	            'HBARSPARKLINE': functionDescription('\u6c34\u5e73\u30d0\u30fc\u30b9\u30d1\u30fc\u30af\u30e9\u30a4\u30f3\u3092\u8868\u793a\u3059\u308b\u70ba\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059', [
	                parameterDescription('value'),
	                parameterDescription('colorScheme')
	            ]),
	            'VBARSPARKLINE': functionDescription('\u5782\u76f4\u30d0\u30fc\u30b9\u30d1\u30fc\u30af\u30e9\u30a4\u30f3\u3092\u8868\u793a\u3059\u308b\u70ba\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059', [
	                parameterDescription('value'),
	                parameterDescription('colorScheme')
	            ]),
	            'VARISPARKLINE': functionDescription('\u30d0\u30ea\u30b9\u30d1\u30fc\u30af\u30e9\u30a4\u30f3\u3092\u8868\u793a\u3059\u308b\u70ba\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059', [
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
	            'PIESPARKLINE': functionDescription('\u5186\u30b9\u30d1\u30fc\u30af\u30e9\u30a4\u30f3\u3092\u8868\u793a\u3059\u308b\u70ba\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059', [
	                parameterDescription('range|percentage'),
	                parameterDescription('color', true)
	            ]),
	            'AREASPARKLINE': functionDescription('\u9762\u30b9\u30d1\u30fc\u30af\u30e9\u30a4\u30f3\u3092\u8868\u793a\u3059\u308b\u70ba\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059', [
	                parameterDescription('points'),
	                parameterDescription('mini'),
	                parameterDescription('maxi'),
	                parameterDescription('line1'),
	                parameterDescription('line2'),
	                parameterDescription('colorPositive'),
	                parameterDescription('colorNegative')
	            ]),
	            'SCATTERSPARKLINE': functionDescription('\u6563\u5e03\u56f3\u30b9\u30d1\u30fc\u30af\u30e9\u30a4\u30f3\u3092\u8868\u793a\u3059\u308b\u70ba\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059', [
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
	            'LINESPARKLINE': functionDescription('\u6298\u308c\u7dda\u30b9\u30d1\u30fc\u30af\u30e9\u30a4\u30f3\u3092\u8868\u793a\u3059\u308b\u70ba\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059', [
	                parameterDescription('data'),
	                parameterDescription('dataOrientation'),
	                parameterDescription('dateAxisData'),
	                parameterDescription('dateAxisOrientation'),
	                parameterDescription('setting')
	            ]),
	            'COLUMNSPARKLINE': functionDescription('\u7e26\u68d2\u30b9\u30d1\u30fc\u30af\u30e9\u30a4\u30f3\u3092\u8868\u793a\u3059\u308b\u70ba\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059', [
	                parameterDescription('data'),
	                parameterDescription('dataOrientation'),
	                parameterDescription('dateAxisData'),
	                parameterDescription('dateAxisOrientation'),
	                parameterDescription('setting')
	            ]),
	            'WINLOSSSPARKLINE': functionDescription('\u52dd\u6557\u30b9\u30d1\u30fc\u30af\u30e9\u30a4\u30f3\u3092\u8868\u793a\u3059\u308b\u70ba\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059', [
	                parameterDescription('data'),
	                parameterDescription('dataOrientation'),
	                parameterDescription('dateAxisData'),
	                parameterDescription('dateAxisOrientation'),
	                parameterDescription('setting')
	            ]),
	            'BULLETSPARKLINE': functionDescription('\u30d6\u30ec\u30c3\u30c8\u30b9\u30d1\u30fc\u30af\u30e9\u30a4\u30f3\u3092\u8868\u793a\u3059\u308b\u70ba\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059', [
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
	            'SPREADSPARKLINE': functionDescription('\u30b9\u30d7\u30ec\u30c3\u30c9\u30b9\u30d1\u30fc\u30af\u30e9\u30a4\u30f3\u3092\u8868\u793a\u3059\u308b\u70ba\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059', [
	                parameterDescription('points'),
	                parameterDescription('showAverage'),
	                parameterDescription('scaleStart'),
	                parameterDescription('scaleEnd'),
	                parameterDescription('style'),
	                parameterDescription('colorScheme'),
	                parameterDescription('vertical')
	            ]),
	            'STACKEDSPARKLINE': functionDescription('\u7a4d\u307f\u4e0a\u3052\u30b9\u30d1\u30fc\u30af\u30e9\u30a4\u30f3\u3092\u8868\u793a\u3059\u308b\u70ba\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059', [
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
	            'BOXPLOTSPARKLINE': functionDescription('\u30dc\u30c3\u30af\u30b9\u30d7\u30ed\u30c3\u30c8\u30b9\u30d1\u30fc\u30af\u30e9\u30a4\u30f3\u3092\u8868\u793a\u3059\u308b\u70ba\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059', [
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
	            'CASCADESPARKLINE': functionDescription('\u30ab\u30b9\u30b1\u30fc\u30c9\u30b9\u30d1\u30fc\u30af\u30e9\u30a4\u30f3\u3092\u8868\u793a\u3059\u308b\u70ba\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059', [
	                parameterDescription('pointsRange'),
	                parameterDescription('pointIndex'),
	                parameterDescription('labelsRange'),
	                parameterDescription('minimum'),
	                parameterDescription('maximum'),
	                parameterDescription('colorPositive'),
	                parameterDescription('colorNegative'),
	                parameterDescription('vertical')
	            ]),
	            'PARETOSPARKLINE': functionDescription('\u30d1\u30ec\u30fc\u30c8\u30b9\u30d1\u30fc\u30af\u30e9\u30a4\u30f3\u3092\u8868\u793a\u3059\u308b\u70ba\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059', [
	                parameterDescription('points'),
	                parameterDescription('pointIndex'),
	                parameterDescription('colorRange'),
	                parameterDescription('target'),
	                parameterDescription('target2'),
	                parameterDescription('highlightPosition'),
	                parameterDescription('label'),
	                parameterDescription('vertical')
	            ]),
	        'MONTHSPARKLINE': functionDescription('\u6708\u30b9\u30d1\u30fc\u30af\u30e9\u30a4\u30f3\u3092\u8868\u793a\u3059\u308b\u70ba\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059', [
	                parameterDescription('year'),
	                parameterDescription('month'),
	                parameterDescription('dataRange'),
	                parameterDescription('emptyColor'),
	                parameterDescription('startColor'),
	                parameterDescription('middleColor'),
	                parameterDescription('endColor')
	            ]),
	        'YEARSPARKLINE': functionDescription('\u5e74\u30b9\u30d1\u30fc\u30af\u30e9\u30a4\u30f3\u3092\u8868\u793a\u3059\u308b\u70ba\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059', [
	                parameterDescription('year'),
	                parameterDescription('dataRange'),
	                parameterDescription('emptyColor'),
	                parameterDescription('startColor'),
	                parameterDescription('middleColor'),
	                parameterDescription('endColor')
	            ]),
	            'CEILING.PRECISE': functionDescription('\u6307\u5b9a\u3055\u308c\u305f\u57fa\u6e96\u5024\u306e\u500d\u6570\u306e\u3046\u3061\u3001\u6700\u3082\u8fd1\u3044\u5024\u306b\u6570\u5024\u3092\u5207\u308a\u4e0a\u3052\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('signif')
	            ]),
	            'COVARIANCE.S': functionDescription('\u6a19\u672c\u306e\u5171\u5206\u6563\u3092\u8fd4\u3057\u307e\u3059\u3002\u5171\u5206\u6563\u3068\u306f\u30012 \u7d44\u306e\u5bfe\u5fdc\u3059\u308b\u30c7\u30fc\u30bf\u9593\u3067\u306e\u6a19\u6e96\u504f\u5dee\u306e\u7a4d\u306e\u5e73\u5747\u5024\u3067\u3059\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'FLOOR.PRECISE': functionDescription('\u6307\u5b9a\u3055\u308c\u305f\u57fa\u6e96\u5024\u306e\u500d\u6570\u306e\u3046\u3061\u3001\u6700\u3082\u8fd1\u3044\u5024\u306b\u6570\u5024\u3092\u5207\u308a\u4e0a\u3052\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('signif')
	            ]),
	            'PERCENTILE.EXC': functionDescription('\u7279\u5b9a\u306e\u7bc4\u56f2\u306b\u542b\u307e\u308c\u308b\u30c7\u30fc\u30bf\u306e\u7b2c n \u767e\u5206\u4f4d\u6570\u306b\u5f53\u305f\u308b\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'QUARTILE.EXC': functionDescription('0 \u3088\u308a\u5927\u304d\u304f 1 \u3088\u308a\u5c0f\u3055\u3044\u767e\u5206\u4f4d\u5024\u306b\u57fa\u3065\u3044\u3066\u3001\u914d\u5217\u306b\u542b\u307e\u308c\u308b\u30c7\u30fc\u30bf\u304b\u3089\u56db\u5206\u4f4d\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array'),
	                parameterDescription('quart')
	            ]),
	            'RANK.AVG': functionDescription('\u6570\u5024\u306e\u30ea\u30b9\u30c8\u306e\u4e2d\u3067\u3001\u6307\u5b9a\u3057\u305f\u6570\u5024\u306e\u5e8f\u5217\u3092\u8fd4\u3057\u307e\u3059\u3002\u30ea\u30b9\u30c8\u306e\u4e2d\u306b\u540c\u3058\u6570\u5024\u304c\u5b58\u5728\u3059\u308b\u5834\u5408\u3001\u5e73\u5747\u306e\u9806\u4f4d\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('array'),
	                parameterDescription('order')
	            ]),
	            'MODE.MULT': functionDescription('\u914d\u5217\u307e\u305f\u306f\u30bb\u30eb\u7bc4\u56f2\u3068\u3057\u3066\u6307\u5b9a\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306e\u4e2d\u3067\u3001\u6700\u3082\u983b\u7e41\u306b\u51fa\u73fe\u3059\u308b\u5024 (\u6700\u983b\u5024) \u3092\u7e26\u65b9\u5411\u306e\u914d\u5217\u3068\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'STDEV.P': functionDescription('\u5f15\u6570\u3068\u3057\u3066\u6307\u5b9a\u3057\u305f\u6bcd\u96c6\u56e3\u5168\u4f53\u306e\u6a19\u6e96\u504f\u5dee\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VAR.P': functionDescription('\u6bcd\u96c6\u56e3\u5168\u4f53\u306e\u5206\u6563\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'COVARIANCE.P': functionDescription('\uff12\u7d44\u306e\u5bfe\u5fdc\u3059\u308b\u30c7\u30fc\u30bf\u306e\u6a19\u6e96\u504f\u5dee\u306e\u7a4d\u306e\u5e73\u5747\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'MODE.SNGL': functionDescription('\u6307\u5b9a\u306e\u5f15\u6570\u30ea\u30b9\u30c8\u306e\u4e2d\u3067\u3001\u6700\u3082\u983b\u7e41\u306b\u51fa\u73fe\u3059\u308b\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'PERCENTILE.INC': functionDescription('\u3042\u308b\u7bc4\u56f2\u5185\u306e\u5024\u306e\u4e2d\u3067 n \u756a\u76ee\u306e\u767e\u5206\u4f4d\u3092\u6301\u3064\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'QUARTILE.INC': functionDescription('\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u304b\u3089\u3001\u6307\u5b9a\u3057\u305f\u56db\u5206\u4f4d\u6570\uff08\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e 1/4\uff3b25%\uff3d\uff09\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array'),
	                parameterDescription('quart')
	            ]),
	            'RANK.EQ': functionDescription('\u6570\u5024\u30ea\u30b9\u30c8\u306e\u4e2d\u304b\u3089\u3001\u6307\u5b9a\u306e\u6570\u5024\u304c\u4f55\u756a\u76ee\u306b\u4f4d\u7f6e\u3059\u308b\u304b\u3092\u8fd4\u3057\u307e\u3059\u3002RANK \u95a2\u6570\u306e\u8fd4\u3059\u9806\u4f4d\u306f\u3001\u30ea\u30b9\u30c8\u5185\u306e\u6570\u5024\u3092\u4e26\u3079\u66ff\u3048\u305f\u5834\u5408\u306e\u6570\u5024\u306e\u9806\u4f4d\u3068\u306a\u308a\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('array'),
	                parameterDescription('order')
	            ]),            
	            'STDEV': functionDescription('\u5f15\u6570\u3092\u6a19\u672c\u3068\u898b\u306a\u3057\u3001\u6a19\u672c\u306b\u57fa\u3065\u3044\u3066\u6bcd\u96c6\u56e3\u306e\u6a19\u6e96\u504f\u5dee\u306e\u63a8\u5b9a\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'STDEV.S': functionDescription('\u5f15\u6570\u3092\u6a19\u672c\u3068\u898b\u306a\u3057\u3001\u6a19\u672c\u306b\u57fa\u3065\u3044\u3066\u6bcd\u96c6\u56e3\u306e\u6a19\u6e96\u504f\u5dee\u306e\u63a8\u5b9a\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'VAR.S': functionDescription('\u5f15\u6570\u5024\u3092\u6bcd\u96c6\u56e3\u306e\u6a19\u672c\u3068\u307f\u306a\u3057\u3001\u6bcd\u96c6\u56e3\u306e\u5206\u6563\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'BETA.INV': functionDescription('\u7d2f\u7a4d\u03b2\u78ba\u7387\u5bc6\u5ea6\u95a2\u6570\u306e\u9006\u95a2\u6570\u306e\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('prob'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'BINOM.DIST': functionDescription('\u500b\u5225\u9805\u306e\u4e8c\u9805\u5206\u5e03\u306e\u78ba\u7387\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('cumulative')
	            ]),
	            'BINOM.INV': functionDescription('\u7d2f\u7a4d\u4e8c\u9805\u5206\u5e03\u306e\u5024\u304c\u57fa\u6e96\u5024\u4ee5\u4e0a\u3068\u306a\u308b\u6700\u5c0f\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('alpha')
	            ]),
	            'CHISQ.DIST.RT': functionDescription('\u7247\u5074\u30ab\u30a4\uff12\u4e57\u5206\u5e03\u306e\u78ba\u7387\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('deg')
	            ]),
	            'CHISQ.INV.RT': functionDescription('\u7247\u5074\u30ab\u30a4\uff12\u4e57\u5206\u5e03\u78ba\u7387\u306e\u9006\u95a2\u6570\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('prob'),
	                parameterDescription('deg')
	            ]),
	            'CHISQ.TEST': functionDescription('\u30ab\u30a4\uff12\u4e57\u5206\u5e03\u304b\u3089\u306e\u72ec\u7acb\u6027\u3092\u691c\u5b9a\u3057\u307e\u3059\u3002', [
	                parameterDescription('obs_array'),
	                parameterDescription('exp_array')
	            ]),
	            'CONFIDENCE.NORM': functionDescription('\u6bcd\u96c6\u56e3\u306e\u5e73\u5747\u5024\u306b\u5bfe\u3059\u308b\u4fe1\u983c\u533a\u9593\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('alpha'),
	                parameterDescription('stdev'),
	                parameterDescription('size')
	            ]),
	            'EXPON.DIST': functionDescription('\u6307\u6570\u5206\u5e03\u95a2\u6570\u307e\u305f\u306f\u78ba\u7387\u5bc6\u5ea6\u95a2\u6570\u306e\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('lambda'),
	                parameterDescription('cumulative')
	            ]),
	            'F.DIST.RT': functionDescription('\uff12\u7d44\u306e\u30c7\u30fc\u30bf\u9593\u306e\u5206\u6563\u5ea6\u3092\u6bd4\u8f03\u3059\u308b F \u78ba\u7387\u5206\u5e03\u95a2\u6570\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'F.INV.RT': functionDescription('F \u78ba\u7387\u5206\u5e03\u95a2\u6570\u306e\u9006\u95a2\u6570\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002p = FDIST(x,...) \u3067\u3042\u308b\u3068\u304d\u3001FINV(p,...) = x \u3068\u306a\u308a\u307e\u3059\u3002', [
	                parameterDescription('p'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'F.TEST': functionDescription('F \u691c\u5b9a\u306e\u7d50\u679c\u3092\u8fd4\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\uff12\u3064\u306e\u914d\u5217\u5185\u306e\u30c7\u30fc\u30bf\u306e\u5206\u6563\u306b\u6709\u610f\u306a\u5dee\u304c\u8a8d\u3081\u3089\u308c\u306a\u3044\u7247\u5074\u78ba\u7387\u306e\u7b97\u51fa\u7d50\u679c\u3067\u3059\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'GAMMA.DIST': functionDescription('\u30ac\u30f3\u30de\u5206\u5e03\u95a2\u6570\u306e\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative')
	            ]),
	            'GAMMA.INV': functionDescription('\u30ac\u30f3\u30de\u7d2f\u7a4d\u5206\u5e03\u95a2\u6570\u306e\u9006\u95a2\u6570\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002p = GAMMADIST(x,...) \u3067\u3042\u308b\u3068\u304d\u3001GAMMAINV(p,...) = x \u3068\u306a\u308a\u307e\u3059\u3002', [
	                parameterDescription('p'),
	                parameterDescription('alpha'),
	                parameterDescription('beta')
	            ]),
	            'LOGNORM.INV': functionDescription('x \u306e\u5bfe\u6570\u6b63\u898f\u7d2f\u7a4d\u5206\u5e03\u95a2\u6570\u306e\u9006\u95a2\u6570\u306e\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('prob'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'NORM.DIST': functionDescription('\u6307\u5b9a\u306e\u5e73\u5747\u3068\u6a19\u6e96\u504f\u5dee\u306b\u5bfe\u3059\u308b\u6b63\u898f\u7d2f\u7a4d\u5206\u5e03\u95a2\u6570\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev'),
	                parameterDescription('cumulative')
	            ]),
	            'NORM.INV': functionDescription('\u6307\u5b9a\u306e\u5e73\u5747\u3068\u6a19\u6e96\u504f\u5dee\u306b\u5bfe\u3059\u308b\u6b63\u898f\u7d2f\u7a4d\u5206\u5e03\u95a2\u6570\u306e\u9006\u95a2\u6570\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('prob'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'NORM.S.INV': functionDescription('\u6a19\u6e96\u6b63\u898f\u7d2f\u7a4d\u5206\u5e03\u95a2\u6570\u306e\u9006\u95a2\u6570\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002\u3053\u306e\u5206\u5e03\u3067\u306f\u3001\u5e73\u5747\u304c\uff10\u3001\u6a19\u6e96\u504f\u5dee\u304c\uff11\u3068\u306a\u308a\u307e\u3059\u3002', [
	                parameterDescription('prob')
	            ]),
	            'PERCENTRANK.INC': functionDescription('\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u5185\u306e\u5024\u306e\u9806\u4f4d\u3092\u3001\u3053\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u5185\u306e\u767e\u5206\u7387\u3068\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array'),
	                parameterDescription('n'),
	                parameterDescription('signif')
	            ]),
	            'POISSON.DIST': functionDescription('\u30dd\u30a2\u30bd\u30f3\u78ba\u7387\u5206\u5e03\u306e\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('nevents'),
	                parameterDescription('mean'),
	                parameterDescription('cumulative')
	            ]),
	            'T.INV.2T': functionDescription('\u30b9\u30c1\u30e5\u30fc\u30c7\u30f3\u30c8\u306e t \u5206\u5e03\u306e\u5024\u3092\u3001\u78ba\u7387\u3068\u81ea\u7531\u5ea6\u3092\u4f7f\u7528\u3057\u305f\u95a2\u6570\u3068\u3057\u3066\u7b97\u51fa\u3057\u307e\u3059\u3002', [
	                parameterDescription('prog'),
	                parameterDescription('deg')
	            ]),
	            'T.TEST': functionDescription('\u30b9\u30c1\u30e5\u30fc\u30c7\u30f3\u30c8\u306e t \u691c\u5b9a\u306b\u95a2\u9023\u3059\u308b\u78ba\u7387\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2'),
	                parameterDescription('tails'),
	                parameterDescription('type')
	            ]),
	            'WEIBULL.DIST': functionDescription('\uff12\u3064\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u3088\u308b\u30ef\u30a4\u30d6\u30eb\u5206\u5e03\u306e\u5024\u3092\u7b97\u51fa\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u4fe1\u983c\u6027\u306e\u5206\u6790\u306a\u3069\u306b\u3088\u304f\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative')
	            ]),
	            'Z.TEST': functionDescription('z \u691c\u5b9a\u306e\u6709\u610f\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002z \u691c\u5b9a\u3067\u306f\u3001\u4e00\u7fa4\u306e\u30c7\u30fc\u30bf\u306b\u5bfe\u3059\u308b\u691c\u5b9a\u5024 x \u306e\u6a19\u6e96\u30b9\u30b3\u30a2\u3092\u751f\u6210\u3057\u3001\u6b63\u898f\u5206\u5e03\u306e\u4e21\u5074\u306e\u78ba\u7387\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array'),
	                parameterDescription('x'),
	                parameterDescription('sigma')
	            ]),
	            'T.DIST.RT': functionDescription('\u30b9\u30c1\u30e5\u30fc\u30c7\u30f3\u30c8\u306e\u53f3\u5074 t \u5206\u5e03\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('deg')
	            ]),
	            'T.DIST.2T': functionDescription('\u30b9\u30c1\u30e5\u30fc\u30c7\u30f3\u30c8\u306e\u4e21\u5074 t \u5206\u5e03\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('deg')
	            ]),
	            'ISO.CEILING': functionDescription('\u6700\u3082\u8fd1\u3044\u6574\u6570\u306b\u5207\u308a\u4e0a\u3052\u305f\u5024\u3001\u307e\u305f\u306f\u3001\u6307\u5b9a\u3055\u308c\u305f\u57fa\u6e96\u5024\u306e\u500d\u6570\u306e\u3046\u3061\u6700\u3082\u8fd1\u3044\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('signif')
	            ]),
	            'BETA.DIST': functionDescription('\u03b2 \u5206\u5e03\u306e\u7d2f\u7a4d\u5206\u5e03\u95a2\u6570\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'GAMMALN.PRECISE': functionDescription('\u30ac\u30f3\u30de\u95a2\u6570\u306e\u5024\u306e\u81ea\u7136\u5bfe\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'ERF.PRECISE': functionDescription('\u8aa4\u5dee\u95a2\u6570\u306e\u7a4d\u5206\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('lowerlimit')
	            ]),
	            'ERFC.PRECISE': functionDescription('x \uff5e\u7121\u9650\u5927\u306e\u7bc4\u56f2\u3067\u3001\u76f8\u88dc\u8aa4\u5dee\u95a2\u6570\u306e\u7a4d\u5206\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('lowerlimit')
	            ]),
	            'PERCENTRANK.EXC': functionDescription('\u914d\u5217\u5185\u3067\u306e\u5024\u306e\u9806\u4f4d\u3092\u767e\u5206\u7387 (0 \u3088\u308a\u5927\u304d\u304f 1 \u3088\u308a\u5c0f\u3055\u3044) \u3067\u8868\u3057\u305f\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array'),
	                parameterDescription('n'),
	                parameterDescription('signif')
	            ]),
	            'HYPGEOM.DIST': functionDescription('\u8d85\u5e7e\u4f55\u5206\u5e03\u95a2\u6570\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('M'),
	                parameterDescription('N'),
	                parameterDescription('cumulative')
	            ]),
	            'LOGNORM.DIST': functionDescription('\u5bfe\u6570\u6b63\u898f\u5206\u5e03\u306e\u7d2f\u7a4d\u5206\u5e03\u95a2\u6570\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev'),
	                parameterDescription('cumulative')
	            ]),
	            'NEGBINOM.DIST': functionDescription('\u8ca0\u306e\u4e8c\u9805\u5206\u5e03\u306e\u78ba\u7387\u95a2\u6570\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('r'),
	                parameterDescription('p'),
	                parameterDescription('cumulative')
	            ]),
	            'NORM.S.DIST': functionDescription('\u6a19\u6e96\u6b63\u898f\u5206\u5e03\u306e\u7d2f\u7a4d\u5206\u5e03\u95a2\u6570\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('z'),
	                parameterDescription('cumulative')
	            ]),
	            'T.DIST': functionDescription('\u30b9\u30c1\u30e5\u30fc\u30c7\u30f3\u30c8\u306e t \u5206\u5e03\u306e\u30d1\u30fc\u30bb\u30f3\u30c6\u30fc\u30b8 (\u78ba\u7387) \u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('deg'),
	                parameterDescription('cumulative')
	            ]),
	            'F.DIST': functionDescription('F \u5206\u5e03\u306e\u78ba\u7387\u95a2\u6570\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('degnum'),
	                parameterDescription('degden'),
	                parameterDescription('cumulative')
	            ]),
	            'CHISQ.DIST': functionDescription('\u7d2f\u7a4d \u03b2 \u78ba\u7387\u5bc6\u5ea6\u95a2\u6570\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('deg'),
	                parameterDescription('cumulative')
	            ]),
	            'F.INV': functionDescription('F \u5206\u5e03\u306e\u78ba\u7387\u95a2\u6570\u306e\u9006\u95a2\u6570\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('probability'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'T.INV': functionDescription('\u30b9\u30c1\u30e5\u30fc\u30c7\u30f3\u30c8\u306e t \u5206\u5e03\u306e t \u5024\u3092\u3001\u78ba\u7387\u3068\u81ea\u7531\u5ea6\u306e\u95a2\u6570\u3068\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('probability'),
	                parameterDescription('deg')
	            ]),
	            'CHISQ.INV': functionDescription('\u7d2f\u7a4d \u03b2 \u78ba\u7387\u5bc6\u5ea6\u95a2\u6570\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('probability'),
	                parameterDescription('deg')
	            ]),
	            'CONFIDENCE.T': functionDescription('\u30b9\u30c1\u30e5\u30fc\u30c7\u30f3\u30c8\u306e t \u5206\u5e03\u3092\u4f7f\u7528\u3057\u3066\u3001\u6bcd\u96c6\u56e3\u306b\u5bfe\u3059\u308b\u4fe1\u983c\u533a\u9593\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('alpha'),
	                parameterDescription('stdev'),
	                parameterDescription('size')
	            ]),
	            'NETWORKDAYS.INTL': functionDescription('\u9031\u672b\u304c\u3069\u306e\u66dc\u65e5\u3067\u4f55\u65e5\u9593\u3042\u308b\u304b\u3092\u793a\u3059\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3001\u958b\u59cb\u65e5\u3068\u7d42\u4e86\u65e5\u306e\u9593\u306b\u3042\u308b\u7a3c\u50cd\u65e5\u306e\u65e5\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate'),
	                parameterDescription('weekend'),
	                parameterDescription('holidays')
	            ]),
	            'WORKDAY.INTL': functionDescription('\u9031\u672b\u304c\u3069\u306e\u66dc\u65e5\u3067\u4f55\u65e5\u9593\u3042\u308b\u304b\u3092\u793a\u3059\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3001\u958b\u59cb\u65e5\u304b\u3089\u8d77\u7b97\u3057\u3066\u6307\u5b9a\u3057\u305f\u7a3c\u50cd\u65e5\u6570\u3060\u3051\u524d\u307e\u305f\u306f\u5f8c\u306e\u65e5\u4ed8\u306b\u5bfe\u5fdc\u3059\u308b\u30b7\u30ea\u30a2\u30eb\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('startdate'),
	                parameterDescription('numdays'),
	                parameterDescription('weekend'),
	                parameterDescription('holidays')
	            ]),
	            'REFRESH': functionDescription('\u95a2\u6570\u306e\u518d\u8a08\u7b97\u65b9\u6cd5\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002\u5bfe\u8c61\u306e\u95a2\u6570\u304c\u53c2\u7167\u3059\u308b\u5024\u306b\u5909\u66f4\u304c\u3042\u3063\u305f\u5834\u5408\u306e\u518d\u8a08\u7b97\u65b9\u6cd5\u3092evaluateMode\u5f15\u6570\u3092\u4f7f\u3063\u3066\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002 \u6307\u5b9a\u3067\u304d\u308b\u518d\u8a08\u7b97\u65b9\u6cd5\u306f"calculateOnce"\uff08\u4e00\u5ea6\u306e\u307f\u8a08\u7b97\uff09\u3001"onRecalculation"\uff08\u53c2\u7167\u5024\u306e\u5909\u66f4\u306b\u5fdc\u3058\u3066\u518d\u8a08\u7b97\uff09\u3001"onInterval"\uff08\u7b2c3\u5f15\u6570\u3067\u6307\u5b9a\u3057\u305f\u9593\u9694\u3067\u518d\u8a08\u7b97\uff09\u306e\u4e09\u7a2e\u985e\u3067\u3059\u3002', [
	                parameterDescription('formula'),
	                parameterDescription('evaluateMode'),
	                parameterDescription('interval')
	            ]),
	            'DAYS': functionDescription('2 \u3064\u306e\u65e5\u4ed8\u9593\u306e\u65e5\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate')
	            ]),
	            'ISOWEEKNUM': functionDescription('\u6307\u5b9a\u3055\u308c\u305f\u65e5\u4ed8\u306e\u305d\u306e\u5e74\u306b\u304a\u3051\u308b ISO \u9031\u756a\u53f7\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('date')
	            ]),
	            'BITAND': functionDescription('2 \u3064\u306e\u6570\u5024\u306e\u30d3\u30c3\u30c8\u5358\u4f4d\u306e \u201cAND\u201d \u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'BITLSHIFT': functionDescription('\u6307\u5b9a\u3055\u308c\u305f\u30d3\u30c3\u30c8\u306e\u6570\u3060\u3051\u5de6\u3078\u30b7\u30d5\u30c8\u3057\u305f\u6570\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'BITOR': functionDescription('2 \u3064\u306e\u6570\u5024\u306e\u30d3\u30c3\u30c8\u5358\u4f4d\u306e \u201cOR\u201d \u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'BITRSHIFT': functionDescription('\u6307\u5b9a\u3055\u308c\u305f\u30d3\u30c3\u30c8\u306e\u6570\u3060\u3051\u53f3\u3078\u30b7\u30d5\u30c8\u3057\u305f\u6570\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'BITXOR': functionDescription('2 \u3064\u306e\u6570\u5024\u306e\u30d3\u30c3\u30c8\u5358\u4f4d\u306e \u201cXOR\u201d \u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'IMCOSH': functionDescription('\u6587\u5b57\u5217 "x+yi" \u307e\u305f\u306f "x+yj" \u306e\u5f62\u5f0f\u3067\u6307\u5b9a\u3055\u308c\u305f\u8907\u7d20\u6570\u306e\u53cc\u66f2\u7dda\u4f59\u5f26\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCOT': functionDescription('\u6587\u5b57\u5217 "x+yi" \u307e\u305f\u306f "x+yj" \u306e\u5f62\u5f0f\u3067\u6307\u5b9a\u3055\u308c\u305f\u8907\u7d20\u6570\u306e\u4f59\u63a5\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCSC': functionDescription('\u6587\u5b57\u5217 "x+yi" \u307e\u305f\u306f "x+yj" \u306e\u5f62\u5f0f\u3067\u6307\u5b9a\u3055\u308c\u305f\u8907\u7d20\u6570\u306e\u4f59\u5272\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCSCH': functionDescription('\u6587\u5b57\u5217 "x+yi" \u307e\u305f\u306f "x+yj" \u306e\u5f62\u5f0f\u3067\u6307\u5b9a\u3055\u308c\u305f\u8907\u7d20\u6570\u306e\u53cc\u66f2\u7dda\u4f59\u5272\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSEC': functionDescription('\u6587\u5b57\u5217 "x+yi" \u307e\u305f\u306f "x+yj" \u306e\u5f62\u5f0f\u3067\u6307\u5b9a\u3055\u308c\u305f\u8907\u7d20\u6570\u306e\u6b63\u5272\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSECH': functionDescription('\u6587\u5b57\u5217 "x+yi" \u307e\u305f\u306f "x+yj" \u306e\u5f62\u5f0f\u3067\u6307\u5b9a\u3055\u308c\u305f\u8907\u7d20\u6570\u306e\u53cc\u66f2\u7dda\u6b63\u5272\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSINH': functionDescription('\u6587\u5b57\u5217 "x+yi" \u307e\u305f\u306f "x+yj" \u306e\u5f62\u5f0f\u3067\u6307\u5b9a\u3055\u308c\u305f\u8907\u7d20\u6570\u306e\u53cc\u66f2\u7dda\u6b63\u5f26\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMTAN': functionDescription('\u6587\u5b57\u5217 "x+yi" \u307e\u305f\u306f "x+yj" \u306e\u5f62\u5f0f\u3067\u6307\u5b9a\u3055\u308c\u305f\u8907\u7d20\u6570\u306e\u6b63\u63a5\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'PDURATION': functionDescription('\u6295\u8cc7\u304c\u6307\u5b9a\u3057\u305f\u4fa1\u5024\u306b\u9054\u3059\u308b\u307e\u3067\u306e\u6295\u8cc7\u671f\u9593\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('pval'),
	                parameterDescription('fval')
	            ]),
	            'RRI': functionDescription('\u6295\u8cc7\u306e\u6210\u9577\u306b\u5bfe\u3059\u308b\u7b49\u4fa1\u5229\u7387\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('fval')
	            ]),
	            'ISFORMULA': functionDescription('\u6570\u5f0f\u304c\u542b\u307e\u308c\u308b\u30bb\u30eb\u3078\u306e\u53c2\u7167\u304c\u3042\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3057\u3001TRUE \u307e\u305f\u306f FALSE \u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'IFNA': functionDescription('\u6570\u5f0f\u306e\u7d50\u679c\u304c #N/A \u30a8\u30e9\u30fc\u5024\u306e\u5834\u5408\u306f\u6307\u5b9a\u3057\u305f\u5024\u3092\u8fd4\u3057\u3001\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306f\u6570\u5f0f\u306e\u7d50\u679c\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('value_if_na')
	            ]),
	            'IFS': functionDescription('IFS \u95a2\u6570\u306f\u30011 \u3064\u4ee5\u4e0a\u306e\u6761\u4ef6\u304c\u6e80\u305f\u3055\u308c\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u3001\u6700\u521d\u306e TRUE \u6761\u4ef6\u306b\u5bfe\u5fdc\u3059\u308b\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('valueTest'),
	                parameterDescription('valueTrue'),
	                parameterDescription('....')
	            ]),
	            'SWITCH': functionDescription('SWITCH \u95a2\u6570\u306f\u3001(\u5f0f\u3068\u547c\u3070\u308c\u308b) 1 \u3064\u306e\u5024\u306b\u5bfe\u3057\u3066\u5024\u306e\u4e00\u89a7\u3092\u8a55\u4fa1\u3057\u3001\u6700\u521d\u306b\u4e00\u81f4\u3059\u308b\u5024\u306b\u5bfe\u5fdc\u3059\u308b\u7d50\u679c\u3092\u8fd4\u3057\u307e\u3059\u3002\u3044\u305a\u308c\u306b\u3082\u4e00\u81f4\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u4efb\u610f\u6307\u5b9a\u306e\u65e2\u5b9a\u5024\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002', [
	                parameterDescription('convertvalue'),
	                parameterDescription('matchvalue'),
	                parameterDescription('matchtrue'),
	                parameterDescription('matchfalse')
	            ]),
	            'XOR': functionDescription('\u3059\u3079\u3066\u306e\u5f15\u6570\u306e\u6392\u4ed6\u7684\u8ad6\u7406\u548c\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('logical'),
	                parameterDescription('....')
	            ]),
	            'AREAS': functionDescription('\u6307\u5b9a\u3055\u308c\u305f\u7bc4\u56f2\u306b\u542b\u307e\u308c\u308b\u9818\u57df\u306e\u500b\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002 \u9023\u7d9a\u3057\u305f\u30bb\u30eb\u7bc4\u56f2\u3001\u307e\u305f\u306f 1 \u3064\u306e\u30bb\u30eb\u304c\u9818\u57df\u3068\u898b\u306a\u3055\u308c\u307e\u3059\u3002', [
	                parameterDescription('reference')
	            ]),
	            'FORMULATEXT': functionDescription('\u6570\u5f0f\u3092\u6587\u5b57\u5217\u3068\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('reference')
	            ]),
	            'HYPERLINK': functionDescription('\u30cd\u30c3\u30c8\u30ef\u30fc\u30af \u30b5\u30fc\u30d0\u30fc\u3001\u30a4\u30f3\u30c8\u30e9\u30cd\u30c3\u30c8\u3001\u307e\u305f\u306f\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u4e0a\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u958b\u304f\u305f\u3081\u306b\u3001\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u307e\u305f\u306f\u30b8\u30e3\u30f3\u30d7\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002', [
	                parameterDescription('link_location'),
	                parameterDescription('friendly_name')
	            ]),
	            'ACOT': functionDescription('\u30b3\u30bf\u30f3\u30b8\u30a7\u30f3\u30c8\u3001\u307e\u305f\u306f\u9006\u30b3\u30bf\u30f3\u30b8\u30a7\u30f3\u30c8\u3001\u6570\u5024\u306e\u4e3b\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'ACOTH': functionDescription('\u6570\u5024\u306e\u9006\u53cc\u66f2\u7dda\u4f59\u63a5\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'ARABIC': functionDescription('\u30ed\u30fc\u30de\u6570\u5b57\u3092\u30a2\u30e9\u30d3\u30a2\u6570\u5b57\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('text')
	            ]),
	            'BASE': functionDescription('\u6307\u5b9a\u3055\u308c\u305f\u57fa\u6570 (\u5e95) \u306e\u30c6\u30ad\u30b9\u30c8\u8868\u73fe\u306b\u3001\u6570\u5024\u3092\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('number'),
	                parameterDescription('radix'),
	                parameterDescription('minLength')
	            ]),
	            'CEILING.MATH': functionDescription('\u6570\u5024\u3092\u6700\u3082\u8fd1\u3044\u6574\u6570\u3001\u307e\u305f\u306f\u57fa\u6e96\u5024\u306e\u500d\u6570\u3067\u6700\u3082\u8fd1\u3044\u6570\u306b\u5207\u308a\u4e0a\u3052\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('signif'),
	                parameterDescription('mode')
	            ]),
	            'COMBINA': functionDescription('\u6307\u5b9a\u3055\u308c\u305f\u500b\u6570\u3092\u9078\u629e\u3059\u308b\u3068\u304d\u306e\u7d44\u307f\u5408\u308f\u305b (\u53cd\u5fa9\u3042\u308a) \u306e\u6570\u3092\u8fd4\u3057\u307e\u3059', [
	                parameterDescription('number'),
	                parameterDescription('number_choosen')
	            ]),
	            'COT': functionDescription('\u30e9\u30b8\u30a2\u30f3\u3067\u6307\u5b9a\u3055\u308c\u305f\u89d2\u5ea6\u306e\u4f59\u63a5\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('angle')
	            ]),
	            'COTH': functionDescription('\u53cc\u66f2\u7dda\u89d2\u5ea6\u306e\u53cc\u66f2\u7dda\u4f59\u63a5\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'CSC': functionDescription('\u30e9\u30b8\u30a2\u30f3\u3067\u6307\u5b9a\u3055\u308c\u305f\u89d2\u5ea6\u306e\u4f59\u5272\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002', [
	                parameterDescription('angle')
	            ]),
	            'CSCH': functionDescription('\u30e9\u30b8\u30a2\u30f3\u3067\u6307\u5b9a\u3055\u308c\u305f\u89d2\u5ea6\u306e\u53cc\u66f2\u7dda\u4f59\u5272\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'DECIMAL': functionDescription('\u6307\u5b9a\u3055\u308c\u305f\u5e95\u306e\u6570\u5024\u306e\u6587\u5b57\u5217\u8868\u73fe\u3092 10 \u9032\u6570\u306b\u5909\u63db\u3057\u307e\u3059\u3002', [
	                parameterDescription('text'),
	                parameterDescription('radix')
	            ]),
	            'FLOOR.MATH': functionDescription('\u6307\u5b9a\u3055\u308c\u305f\u57fa\u6e96\u5024\u306e\u500d\u6570\u306e\u3046\u3061\u3001\u6700\u3082\u8fd1\u3044\u5024\u306b\u6570\u5024\u3092\u5207\u308a\u6368\u3066\u307e\u3059\u3002', [
	                parameterDescription('value'),
	                parameterDescription('signif'),
	                parameterDescription('mode')
	            ]),
	            'SEC': functionDescription('\u89d2\u5ea6\u306e\u6b63\u5272\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('angle')
	            ]),
	            'SECH': functionDescription('\u89d2\u5ea6\u306e\u53cc\u66f2\u7dda\u6b63\u5272\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'BINOM.DIST.RANGE': functionDescription('\u4e8c\u9805\u5206\u5e03\u3092\u4f7f\u7528\u3057\u305f\u8a66\u884c\u7d50\u679c\u306e\u78ba\u7387\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('cumulative')
	            ]),
	            'GAMMA': functionDescription('\u30ac\u30f3\u30de\u95a2\u6570\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('number')
	            ]),
	            'MAXIFS': functionDescription('MAXIFS \u95a2\u6570\u306f\u3001\u6761\u4ef6\u30bb\u30c3\u30c8\u3067\u6307\u5b9a\u3055\u308c\u305f\u30bb\u30eb\u306e\u4e2d\u306e\u6700\u5927\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array'),
	                parameterDescription('conditionarray'),
	                parameterDescription('condition', true)
	            ]),
	            'GAUSS': functionDescription('\u6a19\u6e96\u6b63\u898f\u6bcd\u96c6\u56e3\u306e\u30e1\u30f3\u30d0\u30fc\u304c\u3001\u5e73\u5747\u3068\u5e73\u5747\u304b\u3089\u6a19\u6e96\u504f\u5dee\u306e z \u500d\u306e\u7bc4\u56f2\u306b\u306a\u308b\u78ba\u7387\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002', [
	                parameterDescription('number')
	            ]),
	            'MINIFS': functionDescription('MINIFS \u95a2\u6570\u306f\u3001\u6761\u4ef6\u30bb\u30c3\u30c8\u3067\u6307\u5b9a\u3055\u308c\u305f\u30bb\u30eb\u306e\u4e2d\u306e\u6700\u5c0f\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('array'),
	                parameterDescription('conditionarray'),
	                parameterDescription('condition', true)
	            ]),
	            'PERMUTATIONA': functionDescription('\u6307\u5b9a\u3057\u305f\u6570\u306e\u5bfe\u8c61 (\u53cd\u5fa9\u3042\u308a) \u304b\u3089\u3001\u6307\u5b9a\u3057\u305f\u6570\u3060\u3051\u629c\u304d\u53d6\u308b\u5834\u5408\u306e\u9806\u5217\u306e\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('k'),
	                parameterDescription('n')
	            ]),
	            'PHI': functionDescription('\u6a19\u6e96\u6b63\u898f\u5206\u5e03\u306e\u5bc6\u5ea6\u95a2\u6570\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'SKEW.P': functionDescription('\u6bcd\u96c6\u56e3\u306b\u57fa\u3065\u304f\u5206\u5e03\u306e\u6b6a\u5ea6\u3092\u8fd4\u3057\u307e\u3059\u3002\u6b6a\u5ea6\u3068\u306f\u3001\u5206\u5e03\u306e\u5e73\u5747\u5024\u5468\u8fba\u3067\u306e\u4e21\u5074\u306e\u975e\u5bfe\u79f0\u5ea6\u3092\u8868\u3059\u5024\u3067\u3059\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'BAHTTEXT': functionDescription('\u6570\u5024\u3092\u30bf\u30a4\u8a9e\u306e\u6587\u5b57\u5217\u306b\u5909\u63db\u3057\u3001\u30d0\u30fc\u30c4\u3092\u8868\u3059\u63a5\u5c3e\u6587\u5b57\u5217\u3092\u4ed8\u52a0\u3057\u307e\u3059\u3002', [
	                parameterDescription('number')
	            ]),
	            'CONCAT': functionDescription('CONCAT \u95a2\u6570\u306f\u8907\u6570\u306e\u7bc4\u56f2\u3084\u6587\u5b57\u5217\u304b\u3089\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u7d50\u5408\u3057\u307e\u3059\u304c\u3001\u533a\u5207\u308a\u8a18\u53f7\u307e\u305f\u306f IgnoreEmpty \u5f15\u6570\u306f\u63d0\u4f9b\u3057\u307e\u305b\u3093\u3002', [
	                parameterDescription('text1'),
	                parameterDescription('text2'),
	                parameterDescription('....')
	            ]),
	            'FINDB': functionDescription('FINDB \u95a2\u6570\u3067\u306f\u3001DBCS \u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u8a00\u8a9e\u306e\u7de8\u96c6\u3092\u6709\u52b9\u306b\u3057\u305f\u5f8c\u3067\u305d\u306e\u8a00\u8a9e\u3092\u65e2\u5b9a\u306e\u8a00\u8a9e\u3068\u3057\u3066\u8a2d\u5b9a\u3057\u305f\u5834\u5408\u306b\u3001\u5404 2 \u30d0\u30a4\u30c8\u6587\u5b57\u304c 2 \u3064\u3068\u3057\u3066\u6570\u3048\u3089\u308c\u307e\u3059\u3002', [
	                parameterDescription('findtext'),
	                parameterDescription('intext'),
	                parameterDescription('start')
	            ]),
	            'LEFTB': functionDescription('LEFTB \u95a2\u6570\u306f\u3001\u6587\u5b57\u5217\u306e\u5148\u982d\u304b\u3089\u6307\u5b9a\u3055\u308c\u305f\u30d0\u30a4\u30c8\u6570\u306e\u6587\u5b57\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('mytext'),
	                parameterDescription('num_bytes')
	            ]),
	            'LENB': functionDescription('LENB \u95a2\u6570\u306f\u3001\u6587\u5b57\u5217\u306e\u30d0\u30a4\u30c8\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('value')
	            ]),
	            'MIDB': functionDescription('MIDB \u95a2\u6570\u306f\u3001\u6587\u5b57\u5217\u306e\u4efb\u610f\u306e\u4f4d\u7f6e\u304b\u3089\u6307\u5b9a\u3055\u308c\u305f\u30d0\u30a4\u30c8\u6570\u306e\u6587\u5b57\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('text'),
	                parameterDescription('start_num'),
	                parameterDescription('num_bytes')
	            ]),
	            'REPLACEB': functionDescription('REPLACEB \u95a2\u6570\u306f\u3001\u6587\u5b57\u5217\u4e2d\u306e\u6307\u5b9a\u3055\u308c\u305f\u30d0\u30a4\u30c8\u6570\u306e\u6587\u5b57\u3092\u5225\u306e\u6587\u5b57\u306b\u7f6e\u304d\u63db\u3048\u307e\u3059\u3002', [
	                parameterDescription('old_text'),
	                parameterDescription('start_byte'),
	                parameterDescription('num_bytes'),
	                parameterDescription('new_text')
	            ]),
	            'RIGHTB': functionDescription('RIGHTB \u95a2\u6570\u306f\u3001\u6587\u5b57\u5217\u306e\u672b\u5c3e (\u53f3\u7aef) \u304b\u3089\u6307\u5b9a\u3055\u308c\u305f\u30d0\u30a4\u30c8\u6570\u306e\u6587\u5b57\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('text'),
	                parameterDescription('num_bytes')
	            ]),
	            'SEARCHB': functionDescription('\u6307\u5b9a\u3055\u308c\u305f\u6587\u5b57\u5217\u3092\u4ed6\u306e\u6587\u5b57\u5217\u306e\u4e2d\u3067\u691c\u7d22\u3057\u3001\u305d\u306e\u6587\u5b57\u5217\u304c\u6700\u521d\u306b\u73fe\u308c\u308b\u4f4d\u7f6e\u3092\u5de6\u7aef\u304b\u3089\u6570\u3048\u3001\u305d\u306e\u756a\u53f7\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('string1'),
	                parameterDescription('string2')
	            ]),
	            'TEXTJOIN': functionDescription('TEXTJOIN \u95a2\u6570\u306f\u3001\u8907\u6570\u306e\u7bc4\u56f2\u3084\u6587\u5b57\u5217\u304b\u3089\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u7d50\u5408\u3057\u3001\u7d50\u5408\u3059\u308b\u5404\u30c6\u30ad\u30b9\u30c8\u5024\u306e\u9593\u306b\u3001\u6307\u5b9a\u3057\u305f\u533a\u5207\u308a\u8a18\u53f7\u3092\u633f\u5165\u3057\u307e\u3059\u3002\u533a\u5207\u308a\u8a18\u53f7\u304c\u7a7a\u306e\u6587\u5b57\u5217\u306e\u5834\u5408\u306f\u3001\u7bc4\u56f2\u304c\u9023\u7d50\u3055\u308c\u307e\u3059\u3002', [
	                parameterDescription('delimiter'),
	                parameterDescription('ignore_empty'),
	                parameterDescription('text1'),
	                parameterDescription('text2'),
	                parameterDescription('....')
	            ]),
	            'UNICHAR': functionDescription('\u6307\u5b9a\u3055\u308c\u305f\u6570\u5024\u306b\u3088\u308a\u53c2\u7167\u3055\u308c\u308b Unicode \u6587\u5b57\u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('number')
	            ]),
	            'UNICODE': functionDescription('\u6587\u5b57\u5217\u306e\u6700\u521d\u306e\u6587\u5b57\u306b\u5bfe\u5fdc\u3059\u308b\u756a\u53f7 (\u30b3\u30fc\u30c9 \u30dd\u30a4\u30f3\u30c8) \u3092\u8fd4\u3057\u307e\u3059\u3002', [
	                parameterDescription('text')
	            ]),
	            'ENCODEURL': functionDescription('URL \u5f62\u5f0f\u3067\u30a8\u30f3\u30b3\u30fc\u30c9\u3055\u308c\u305f\u6587\u5b57\u5217\u3092\u8fd4\u3057\u307e\u3059\u3002', [
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    (function () {
	        var GC$ = __webpack_require__(5).GC$;
	        var CultureManager = __webpack_require__(6).CultureManager;
	        var elements = GC$('meta[name=\'spreadjs culture\']');
	        if (elements.length > 0) {
	            var culture = GC$(elements[elements.length - 1]).attr('content');
	            if (culture !== null && culture !== undefined && culture.toLowerCase() === 'ja-jp') {
	                CultureManager.culture('ja-jp');
	            }
	        }
	    })();
	    module.exports = {
	        Exp_NotSupported: '\u4f8b\u5916:\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u6a5f\u80fd\u306e\u5229\u7528\u3092\u8a66\u307f\u307e\u3057\u305f',
	        Exp_PasteExtentIsNull: 'pasteExtent \u304c null \u3067\u3059',
	        Exp_InvalidPastedArea: '\u8cbc\u308a\u4ed8\u3051\u9818\u57df\u306f\u30b3\u30d4\u30fc/\u5207\u308a\u53d6\u308a\u7bc4\u56f2\u3068\u540c\u30b5\u30a4\u30ba\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002',
	        Exp_ChangePartOfArray: '\u914d\u5217\u306e\u4e00\u90e8\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002',
	        Exp_InvalidAndSpace: '\u7121\u52b9\u306a {0}: {1} \u306f {2} \u304b\u3089 {3}\u306e\u9593\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002',
	        Exp_SrcIsNull: '\u5f15\u6570 \'src\' \u306f null \u3067\u3059',
	        Exp_DestIsNull: '\u5f15\u6570 \'dest\' \u306f null \u3067\u3059',
	        Exp_InvalidCustomFunction: '\u7121\u52b9\u306a\u30ab\u30b9\u30bf\u30e0\u95a2\u6570',
	        Exp_InvalidCustomName: '\u7121\u52b9\u306a\u540d\u524d',
	        Exp_IndexOutOfRange: '\u7bc4\u56f2\u5916\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3067\u3059!',
	        Exp_InvalidRange: '\u7121\u52b9\u306a\u7bc4\u56f2',
	        Exp_NotAFunction: '{0}\u306f\u95a2\u6570\u3067\u306f\u3042\u308a\u307e\u305b\u3093',
	        Exp_ArgumentOutOfRange: '\u7bc4\u56f2\u5916\u306e\u5f15\u6570',
	        Exp_PasteSourceCellsLocked: '\u53c2\u7167\u5143\u3068\u306a\u3063\u3066\u3044\u308b\u30b7\u30fc\u30c8\u306e\u30bb\u30eb\u306f\u30ed\u30c3\u30af\u3055\u308c\u3066\u3044\u307e\u3059\u3002',
	        Exp_InvalidCopyPasteSize: '\u30b3\u30d4\u30fc\u3068\u8cbc\u308a\u4ed8\u3051\u306e\u7bc4\u56f2\u30b5\u30a4\u30ba\u304c\u7570\u306a\u3063\u3066\u3044\u307e\u3059\u3002',
	        Exp_PasteDestinationCellsLocked: '\u5909\u66f4\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308b\u30bb\u30eb\u306f\u4fdd\u8b77\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u8aad\u307f\u53d6\u308a\u5c02\u7528\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002',
	        Exp_PasteChangeMergeCell: '\u7d50\u5408\u3057\u305f\u30bb\u30eb\u306e\u4e00\u90e8\u306f\u5909\u66f4\u3067\u304d\u307e\u305b\u3093\u3002',
	        Tip_Row: '\u884c: ',
	        Tip_Column: '\u5217: ',
	        Tip_Height: '\u9ad8\u3055: {0} \u30d4\u30af\u30bb\u30eb',
	        Tip_Width: '\u5e45: {0} \u30d4\u30af\u30bb\u30eb',
	        NewTab: 'New...',
	        Exp_EmptyNamedStyle: '\u540d\u524d\u4ed8\u304d\u30b9\u30bf\u30a4\u30eb\u306e\u540d\u79f0\u3092\u7a7a\u306b\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002',
	        Exp_SheetNameInvalid: '\u30b7\u30fc\u30c8\u540d\u3092\u7a7a\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\u307e\u305f\u6b21\u306e\u6587\u5b57\u3092\u30b7\u30fc\u30c8\u540d\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093 : *, :, [, ], ?, \\, /',
	        Exp_ArrayFromulaSpan: '\u914d\u5217\u6570\u5f0f\u306f\u3001\u7d50\u5408\u3057\u305f\u30bb\u30eb\u3067\u306f\u7121\u52b9\u3067\u3059\u3002',
	        Exp_DestSheetIsNull: 'destSheet \u304c null \u3067\u3059\u3002',
	        Exp_SheetIsNull: 'sheet \u304c null\u3067\u3059\u3002',
	        Exp_OverlappingSpans: '\u3053\u306e\u64cd\u4f5c\u306f\u7d50\u5408\u90e8\u5206\u306e\u91cd\u8907\u3092\u5f15\u304d\u8d77\u3053\u3057\u307e\u3059\u3002',
	        NeedCanvasSupport: 'HTML5 Canvas\u306b\u5bfe\u5fdc\u3057\u305f\u30d6\u30e9\u30a6\u30b6\u3092\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002',
	       
	        ls1: ["30303030303030685f4f790000000000000000000000000000000067303030303072303052753030303030745830303052963030303030303000008a4f3076763030303030303030304e667630915e3030698a3058543000005f795569903030768a3030303030",
	            "b0ecfcd7b7c6a32a0f1a3e205370726561642e5368656574730d0a2cc8e9a4a2eb486e5429286fedfcabebb0836e7f6b3650558c66447e59020d0a55a192ee8468575fb5fcd0fc786e0042846a4d0392541c0e6e34086f0d0a0a3eb66de86b54f8c74f60554402"],
	       
	        ls2: ['30303030303030685f4f790000000000000000000000000000000000303030303030303067526795306b30000000000065303030',
	            'b0ecfcd7b7c6a32a0f1a3e205370726561642e536865657473200d0ac8e9a4a2ebadfc6e09b91f936f8b8a207b307d20e5675902'],
	       
	        ls3: ['3030303030605830893030303030303030303000008854303052753030303030303030300030303030303030305f893030',
	            'e9a4bbf3b9c5314c8b644b8a7e5b9367575f020d0afdc16e5429286b6fe9a4bbf3b9adfc2fc8e9a4a2ebadfc4cc5816759'],
	       
	        ls4: ['6b30303030303030605830535f303030303030303030',
	            '635744e9a4bbf3b9c53192d697674d7e5b9367575f02'],
	       
	        ls5: ['30303030303030685f4f790000000000000000000000000000000000303030303030303067526795307d4e3030303030',
	            'b0ecfcd7b7c6a32a0f1a3e205370726561642e536865657473200d0ac8e9a4a2ebadfc6e09b91f934c4286577e575f02'],
	        ls6: ["30303030303030685f4f790000000000000000000000000000303030303072000067303030303030915e30796b303030303030",
	            "b0ecfcd7b7c6a32a0f1a3e205370726561642e536865657473c8e9a4a2eb480d0a2cd0fcb8e7f36e4d036f8162558c66447e59"]
	    };
	
	
	}());

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sheets;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Common;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_NotSupportedDataSource: '\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3067\u3059\u3002'
	    };
	    
	
	}());

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_InvalidIndex: '\u7121\u52b9\u306a\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3067\u3059',
	        Exp_InvalidCount: '\u7121\u52b9\u306a\u30ab\u30a6\u30f3\u30c8\u3067\u3059',
	        Exp_InvalidLevel: '\u7121\u52b9\u306a\u30ec\u30d9\u30eb\u3067\u3059',
	        Exp_GroupInfoIsNull: 'groupInfo \u304c null \u3067\u3059'
	    };
	    
	
	}());

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        ToolStrip_PasteText: '\u8cbc\u308a\u4ed8\u3051',
	        ToolStrip_CutText: '\u5207\u308a\u53d6\u308a',
	        ToolStrip_CopyText: '\u30b3\u30d4\u30fc',
	        ToolStrip_AutoFillText: '\u30aa\u30fc\u30c8\u30d5\u30a3\u30eb'
	    };
	
	}());

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_FloatingObjectHasSameNameError: '\u3059\u3067\u306b\u540c\u540d\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u540d\u304c\u5b58\u5728\u3057\u307e\u3059\u3002',
	        Exp_FloatingObjectNameEmptyError: '\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u540d\u3092\u7a7a\u306b\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002'
	    };
	
	}());

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_RuleIsNull: '\u5f15\u6570 \'rule\' \u304c null \u3067\u3059',
	        Exp_NotSupported: '\u4f8b\u5916:\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u6a5f\u80fd\u306e\u5229\u7528\u3092\u8a66\u307f\u307e\u3057\u305f'
	    };
	
	}());

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_InvalidColumnIndex: '\u7121\u52b9\u306a\u5217\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3067\u3059\u3002',
	        SortAscending: '\u6607\u9806',
	        SortDescending: '\u964d\u9806',
	        OK: 'OK',
	        Cancel: '\u30ad\u30e3\u30f3\u30bb\u30eb',
	        Search: '\u691c\u7d22',
	        CheckAll: '\u3059\u3079\u3066\u9078\u629e',
	        UncheckAll: '\u3059\u3079\u3066\u89e3\u9664',
	        Blanks: '(\u7a7a\u767d\u30bb\u30eb)',
	        Exp_FilterItemIsNull: '\u30d5\u30a3\u30eb\u30bf\u9805\u76ee\u304c null \u3067\u3059\u3002',
	        Show: '\u8868\u793a',
	        ShowRows: '\u62bd\u51fa\u6761\u4ef6\u306e\u6307\u5b9a :',
	        And: 'AND',
	        Or: 'OR',
	        SortColor: '\u8272\u3067\u4e26\u3079\u66ff\u3048',
	        FilterColor: '\u8272\u30d5\u30a3\u30eb\u30bf\u30fc',
	        FilterCellTitle: '\u30bb\u30eb\u306e\u8272\u3067\u30d5\u30a3\u30eb\u30bf\u30fc',
	        FilterFontTitle: '\u30d5\u30a9\u30f3\u30c8\u306e\u8272\u3067\u30d5\u30a3\u30eb\u30bf\u30fc',
	        SortCellTitle: '\u30bb\u30eb\u306e\u8272\u3067\u4e26\u3079\u66ff\u3048',
	        SortFontTitle: '\u30d5\u30a9\u30f3\u30c8\u306e\u8272\u3067\u4e26\u3079\u66ff\u3048',
	        FontColor: '\u305d\u306e\u4ed6\u306e\u30d5\u30a9\u30f3\u30c8\u306e\u8272...',
	        CellColor: '\u305d\u306e\u4ed6\u306e\u30bb\u30eb\u306e\u8272...',
	        NoFill: '\u5857\u308a\u3064\u3076\u3057\u306a\u3057',
	        Automatic: '\u81ea\u52d5',
	        Clear: '{0} \u304b\u3089\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u30af\u30ea\u30a2',
	        TextFilter: '\u30c6\u30ad\u30b9\u30c8 \u30d5\u30a3\u30eb\u30bf\u30fc',
	        DateFilter: '\u65e5\u4ed8\u30d5\u30a3\u30eb\u30bf\u30fc',
	        NumberFilter: '\u6570\u5024\u30d5\u30a3\u30eb\u30bf\u30fc',
	        Custom: '\u30e6\u30fc\u30b6\u30fc\u8a2d\u5b9a\u30d5\u30a3\u30eb\u30bf\u30fc',
	        Equal: '\u6307\u5b9a\u306e\u5024\u306b\u7b49\u3057\u3044...',
	        NotEqual: '\u6307\u5b9a\u306e\u5024\u306b\u7b49\u3057\u304f\u306a\u3044...',
	        GreaterThan: '\u6307\u5b9a\u306e\u5024\u3088\u308a\u5927\u304d\u3044...',
	        GreaterOrEquals: '\u6307\u5b9a\u306e\u5024\u4ee5\u4e0a...',
	        LessThan: '\u6307\u5b9a\u306e\u5024\u3088\u308a\u5c0f\u3055\u3044...',
	        LessThanOrEquals: '\u6307\u5b9a\u306e\u5024\u4ee5\u4e0b...',
	        Between: '\u6307\u5b9a\u306e\u7bc4\u56f2\u5185...',
	        Top10: '\u30c8\u30c3\u30d7\u30c6\u30f3...',
	        AboveAverage: '\u5e73\u5747\u3088\u308a\u4e0a',
	        BelowAverage: '\u5e73\u5747\u3088\u308a\u4e0b',
	        Begin: '\u6307\u5b9a\u306e\u5024\u3067\u59cb\u307e\u308b...',
	        End: '\u6307\u5b9a\u306e\u5024\u3067\u7d42\u308f\u308b...',
	        Contain: '\u6307\u5b9a\u306e\u5024\u3092\u542b\u3080...',
	        NotContain: '\u6307\u5b9a\u306e\u5024\u3092\u542b\u307e\u306a\u3044...',
	        Before: '\u6307\u5b9a\u306e\u5024\u3088\u308a\u524d...',
	        After: '\u6307\u5b9a\u306e\u5024\u3088\u308a\u5f8c...',
	        Tomorrow: '\u660e\u65e5',
	        Today: '\u4eca\u65e5',
	        Yesterday: '\u6628\u65e5',
	        NextWeek: '\u6765\u9031',
	        ThisWeek: '\u4eca\u9031',
	        LastWeek: '\u5148\u9031',
	        NextMonth: '\u6765\u6708',
	        ThisMonth: '\u4eca\u6708',
	        LastMonth: '\u5148\u6708',
	        NextQuarter: '\u6765\u56db\u534a\u671f',
	        ThisQuarter: '\u4eca\u56db\u534a\u671f',
	        LastQuarter: '\u524d\u56db\u534a\u671f',
	        NextYear: '\u6765\u5e74',
	        ThisYear: '\u4eca\u5e74',
	        LastYear: '\u6628\u5e74',
	        YearToDate: '\u4eca\u5e74\u306e\u521d\u3081\u304b\u3089\u4eca\u65e5\u307e\u3067',
	        AllDates: '\u671f\u9593\u5185\u306e\u5168\u65e5\u4ed8',
	
	        Top10Filter: '\u30c8\u30c3\u30d7\u30c6\u30f3 \u30aa\u30fc\u30c8\u30d5\u30a3\u30eb\u30bf\u30fc',
	        CustomTitle: '\u30aa\u30fc\u30c8\u30d5\u30a3\u30eb\u30bf\u30fc \u30aa\u30d7\u30b7\u30e7\u30f3',
	        ColorTitle: '\u5229\u7528\u53ef\u80fd\u306a\u30bb\u30eb\u306e\u8272',
	        top: '\u4e0a\u4f4d',
	        bottom : '\u4e0b\u4f4d',
	
	        SortCell: '\u4e26\u3079\u66ff\u3048\u306e\u57fa\u6e96\u306b\u3059\u308b\u30bb\u30eb\u306e\u8272\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044:',
	        SortFont: '\u4e26\u3079\u66ff\u3048\u306e\u57fa\u6e96\u306b\u3059\u308b\u30d5\u30a9\u30f3\u30c8\u306e\u8272\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044:',
	        FilterCell: '\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u57fa\u6e96\u306b\u3059\u308b\u30bb\u30eb\u306e\u8272\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044:',
	        FilterFont: '\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u57fa\u6e96\u306b\u3059\u308b\u30d5\u30a9\u30f3\u30c8\u306e\u8272\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044:',
	        Selected: '\u9078\u629e\u6e08\u307f:',
	
	        IsEquals: '\u3068\u7b49\u3057\u3044',
	        NotEquals: '\u3068\u7b49\u3057\u304f\u306a\u3044',
	        IsGreaterThan: '\u3088\u308a\u5927\u304d\u3044',
	        IsGreaterOrEqual: '\u4ee5\u4e0a',
	        IsLess: '\u3088\u308a\u5c0f\u3055\u3044',
	        LessOrEqual: '\u4ee5\u4e0b',
	        IsBeginWith: '\u3067\u59cb\u307e\u308b',
	        NotBeginWith: '\u3067\u59cb\u307e\u3089\u306a\u3044',
	        IsEndWith: '\u3067\u7d42\u308f\u308b',
	        NotEndWith: '\u3067\u7d42\u308f\u3089\u306a\u3044',
	        IsContain: '\u3092\u542b\u3080',
	        NotContains: '\u3092\u542b\u307e\u306a\u3044',
	        IsAfter:'\u3088\u308a\u5f8c',
	        AfterOrEqual: '\u4ee5\u964d',
	        IsBefore: '\u3088\u308a\u524d',
	        BeforeOrEqual: '\u4ee5\u524d',
	        Q1:'\u7b2c 1 \u56db\u534a\u671f',
	        Q2:'\u7b2c 2 \u56db\u534a\u671f',
	        Q3:'\u7b2c 3 \u56db\u534a\u671f',
	        Q4:'\u7b2c 4 \u56db\u534a\u671f',
	        Jan:'1\u6708',
	        Feb:'2\u6708',
	        Mar:'3\u6708',
	        Apr:'4\u6708',
	        May:'5\u6708',
	        Jun:'6\u6708',
	        Jul:'7\u6708',
	        Aug:'8\u6708',
	        Sep:'9\u6708',
	        Oct:'10\u6708',
	        Nov:'11\u6708',
	        Dec:'12\u6708',
	
	        Explain1: '? \u3092\u4f7f\u3063\u3066\u4efb\u610f\u306e 1 \u6587\u5b57\u3092\u8868\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002',
	        Explain2: '* \u3092\u4f7f\u3063\u3066\u4efb\u610f\u306e\u6587\u5b57\u5217\u3092\u8868\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002',
	
	        Year: '\u5e74',
	        Day: '\u65e5'
	    };
	
	}());


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_DragDropShiftTableCell: '\u3053\u306e\u64cd\u4f5c\u306f\u30ef\u30fc\u30af\u30b7\u30fc\u30c8\u4e0a\u306e\u30c6\u30fc\u30d6\u30eb\u5185\u3067\u30bb\u30eb\u3092\u30b7\u30d5\u30c8\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308b\u305f\u3081\u8a31\u53ef\u3055\u308c\u307e\u305b\u3093\u3002',
	        Exp_DragDropChangePartOfTable: '\u64cd\u4f5c\u3092\u5b8c\u4e86\u3067\u304d\u307e\u305b\u3093\u3002\u8a31\u53ef\u3055\u308c\u3066\u3044\u306a\u3044\u65b9\u6cd5\u3067\u30c6\u30fc\u30d6\u30eb\u306e\u884c\u307e\u305f\u306f\u5217\u306e\u4e00\u90e8\u3092\u5909\u66f4\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u307e\u3059\u3002',
	        Exp_TableEmptyNameError: '\u30c6\u30fc\u30d6\u30eb\u540d\u3092\u7a7a\u306b\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002',
	        Exp_TableNameInvalid: '\u6b63\u3057\u304f\u306a\u3044\u30c6\u30fc\u30d6\u30eb\u540d\u3067\u3059\u3002',
	        Exp_TableInvalidRow: '\u7121\u52b9\u306a\u884c\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3082\u3057\u304f\u306f\u884c\u6570\u3067\u3059\u3002',
	        Exp_TableInvalidColumn: '\u7121\u52b9\u306a\u5217\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3082\u3057\u304f\u306f\u5217\u6570\u3067\u3059\u3002',
	        Exp_TableIntersectError: '\u30c6\u30fc\u30d6\u30eb\u3092\u91cd\u306d\u5408\u308f\u305b\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093\u3002',
	        Exp_TableHasSameNameError: '\u3059\u3067\u306b\u540c\u540d\u306e\u30ef\u30fc\u30af\u30b7\u30fc\u30c8\u304c\u5b58\u5728\u3057\u307e\u3059\u3002',
	        Exp_TableDataSourceNullError: '\u30c6\u30fc\u30d6\u30eb\u306e\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3092 null \u306b\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002',
	        Exp_TableMoveOutOfRange: '\u30c6\u30fc\u30d6\u30eb\u3092\u30b7\u30fc\u30c8\u5916\u306b\u79fb\u52d5\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002',
	        Exp_TableResizeOutOfRange: '\u7121\u52b9\u306a\u884c\u6570\u3001\u5217\u6570\u3067\u3059\u3002\u30c6\u30fc\u30d6\u30eb\u3092\u30b7\u30fc\u30c8\u7bc4\u56f2\u5916\u306b\u30ea\u30b5\u30a4\u30ba\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002',
	        Exp_ArrayFormulaTable: '\u8907\u6570\u30bb\u30eb\u306e\u914d\u5217\u6570\u5f0f\u306f\u30c6\u30fc\u30d6\u30eb\u3067\u306f\u8a31\u53ef\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002',
	        Exp_TableResizeInvalidRange: '\u30c6\u30fc\u30d6\u30eb\u306e\u898b\u51fa\u3057\u306e\u4f4d\u7f6e\u306f\u5909\u66f4\u3067\u304d\u307e\u305b\u3093\u3002\u307e\u305f\u3001\u65b0\u3057\u3044\u30c6\u30fc\u30d6\u30eb\u7bc4\u56f2\u304c\u5143\u306e\u30c6\u30fc\u30d6\u30eb\u7bc4\u56f2\u306b\u91cd\u306a\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002'
	    };
	
	}());

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Blank: '(blank)',
	        Exp_SlicerNameInvalid: '\u6b63\u3057\u304f\u306a\u3044\u30b9\u30e9\u30a4\u30b5\u30fc\u540d\u3067\u3059\u3002',
	        Exp_SlicerNameExist: '\u305d\u306e\u30b9\u30e9\u30a4\u30b5\u30fc\u540d\u306f\u65e2\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u65b0\u3057\u3044\u30b9\u30e9\u30a4\u30b5\u30fc\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002'
	    };
	
	}());

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        CopyCells: '\u30bb\u30eb\u306e\u30b3\u30d4\u30fc',
	        FillSeries: '\u9023\u7d9a\u30c7\u30fc\u30bf',
	        FillFormattingOnly: '\u66f8\u5f0f\u306e\u307f\u30b3\u30d4\u30fc',
	        FillWithoutFormatting: '\u66f8\u5f0f\u306a\u3057\u30b3\u30d4\u30fc',
	        Exp_NumberOnly: '\u6570\u5b57\u306e\u307f\u6709\u52b9\u3067\u3059',
	        Exp_RangeContainsMergedCell: '\u7d50\u5408\u3055\u308c\u305f\u30bb\u30eb\u304c\u7bc4\u56f2\u306b\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002',
	        Exp_TargetContainsMergedCells: '\u7d50\u5408\u3055\u308c\u305f\u30bb\u30eb\u304c\u6307\u5b9a\u306e\u7bc4\u56f2\u306b\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002',
	        Exp_MergedCellsIdentical: '\u3053\u306e\u64cd\u4f5c\u306b\u306f\u540c\u3058\u30b5\u30a4\u30ba\u306e\u7d50\u5408\u30bb\u30eb\u304c\u5fc5\u8981\u3067\u3059\u3002',
	        Exp_FillRangeContainsMergedCell: '\u7d50\u5408\u3057\u305f\u30bb\u30eb\u304c\u542b\u307e\u308c\u308b\u7bc4\u56f2\u3092\u30d5\u30a3\u30eb\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002',
	        Exp_FillCellsReadOnly: '\u30d5\u30a3\u30eb\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308b\u7bc4\u56f2\u306f\u4fdd\u8b77\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u8aad\u307f\u53d6\u308a\u5c02\u7528\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002',
	        Exp_ChangeMergedCell: '\u7d50\u5408\u3055\u308c\u305f\u30bb\u30eb\u306e\u4e00\u90e8\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002',
	        Exp_ColumnReadOnly: '\u5909\u66f4\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308b\u5217\u306f\u4fdd\u8b77\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u8aad\u307f\u53d6\u308a\u5c02\u7528\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002',
	        Exp_RowReadOnly: '\u5909\u66f4\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308b\u884c\u306f\u4fdd\u8b77\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u8aad\u307f\u53d6\u308a\u5c02\u7528\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002',
	        Exp_CellReadOnly: '\u5909\u66f4\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308b\u30bb\u30eb\u306f\u4fdd\u8b77\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u8aad\u307f\u53d6\u308a\u5c02\u7528\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002',
	        Exp_RangeIsNull: '\u7bc4\u56f2\u304c null \u3067\u3059',
	        Exp_ChangePartOfArray: '\u914d\u5217\u306e\u4e00\u90e8\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002'
	    };
	    
	
	}());

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	(function () {
	    'use strict';
	
	    module.exports = {
	        copy: '\u30b3\u30d4\u30fc',
	        cut: '\u5207\u308a\u53d6\u308a',
	        pasteOptions: '\u8cbc\u308a\u4ed8\u3051\u306e\u30aa\u30d7\u30b7\u30e7\u30f3:',
	        pasteAll: '\u3059\u3079\u3066',
	        pasteFormula: '\u6570\u5f0f',
	        pasteValues: '\u5024',
	        pasteFormatting: '\u66f8\u5f0f',
	        clearContents: '\u6570\u5f0f\u3068\u5024\u306e\u30af\u30ea\u30a2',
	        insertRows: "\u633f\u5165",
	        insertColumns: "\u633f\u5165",
	        deleteRows: "\u524a\u9664",
	        deleteColumns: "\u524a\u9664",
	        insertSheet: '\u633f\u5165',
	        deleteSheet: '\u524a\u9664',
	        insertComment: '\u30b3\u30e1\u30f3\u30c8\u306e\u633f\u5165',
	        filter: '\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0 ',
	        sort: '\u30bd\u30fc\u30c8',
	        slicerSortAscend: "\u6607\u9806",
	        slicerSortDescend: "\u964d\u9806",
	        sortAscend: '\u6607\u9806',
	        sortDescend: '\u964d\u9806',
	        hideRows: "\u975e\u8868\u793a",
	        hideColumns: "\u975e\u8868\u793a",
	        hideSheet: '\u975e\u8868\u793a',
	        unhideSheet: '\u518d\u8868\u793a',
	        unhideColumns: "\u518d\u8868\u793a",
	        unhideRows: "\u518d\u8868\u793a",
	        editComment: '\u30b3\u30e1\u30f3\u30c8\u306e\u7de8\u96c6',
	        deleteComment: '\u30b3\u30e1\u30f3\u30c8\u306e\u524a\u9664',
	        toggleComment: '\u30b3\u30e1\u30f3\u30c8\u306e\u8868\u793a/\u975e\u8868\u793a',
	        removeSlicer: '\u524a\u9664',
	        removeFloatingObject: '\u524a\u9664'
	    };
	}());

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    function tableFunctionDescription (name, description) {
	        return {
	            name: name,
	            description: description
	        };
	    }
	    
	    module.exports = {
	        Fbx_Summary: '\u6982\u8981',
	        Fbx_TableName_Description: '\u30c6\u30fc\u30d6\u30eb\u540d ',
	        Fbx_CustomName_Description: '\u30ab\u30b9\u30bf\u30e0\u540d ',
	        _tableFunctionsResource: [
	            tableFunctionDescription('#All', '\u30c6\u30fc\u30d6\u30eb\u306e\u3059\u3079\u3066\u306e\u5024\u3001\u307e\u305f\u306f\u3001\u6307\u5b9a\u3057\u305f\u30c6\u30fc\u30d6\u30eb\u5217\u3068\u5217\u756a\u53f7\u3001\u30c7\u30fc\u30bf\u304a\u3088\u3073\u96c6\u8a08\u884c\u3092\u8fd4\u3057\u307e\u3059\u3002'),
	            tableFunctionDescription('#Data', '\u30c6\u30fc\u30d6\u30eb\u307e\u305f\u306f\u6307\u5b9a\u3057\u305f\u30c6\u30fc\u30d6\u30eb\u5217\u306e\u30c7\u30fc\u30bf \u30bb\u30eb\u3092\u8fd4\u3057\u307e\u3059\u3002'),
	            tableFunctionDescription('#Headers', '\u30c6\u30fc\u30d6\u30eb\u307e\u305f\u306f\u6307\u5b9a\u3057\u305f\u30c6\u30fc\u30d6\u30eb\u5217\u306e\u5217\u756a\u53f7\u3092\u8fd4\u3057\u307e\u3059\u3002'),
	            tableFunctionDescription('#Totals', '\u30c6\u30fc\u30d6\u30eb\u307e\u305f\u306f\u6307\u5b9a\u3057\u305f\u30c6\u30fc\u30d6\u30eb\u5217\u306e\u96c6\u8a08\u884c\u3092\u8fd4\u3057\u307e\u3059\u3002'),
	            tableFunctionDescription('@', '\u3053\u306e\u884c\u3002')
	        ]
	    };
	
	}());

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_InvalidSheetIndex: 'Invalid  sheet index.'
	    };
	
	}());

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_FileIOError: '\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u53d6\u308a\u3068\u66f8\u304d\u8fbc\u307f\u306e\u4f8b\u5916\u3002',
	        Exp_FontError: '\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u30d5\u30a9\u30f3\u30c8\u5f62\u5f0f\u307e\u305f\u306f\u6a19\u6e96\u306e PDF \u30d5\u30a9\u30f3\u30c8\u3002'
	    };
	
	
	}());

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_InvalidConnectionSite: 'Invalid connection site.',
	        Exp_DuplicatedName: 'Duplicated name.',
	        Exp_EmptyName: 'Empty name.'
	    };
	
	}());

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.resources.ja.12.0.0.js.map
}));