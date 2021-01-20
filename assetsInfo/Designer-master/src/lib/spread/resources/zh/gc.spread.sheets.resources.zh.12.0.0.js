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
		GC.Spread.Common.SR["zh"] = extend(GC.Spread.Common.SR["zh"] || {}, __webpack_require__(1));
	}
	if (GC.Spread.Common) {
		GC.Spread.Common.SR["zh"] = extend(GC.Spread.Common.SR["zh"] || {}, __webpack_require__(2));
	}
	if (GC.Spread.CalcEngine) {
		GC.Spread.CalcEngine.SR["zh"] = extend(GC.Spread.Common.SR["zh"] || {}, __webpack_require__(3));
	}
	if (GC.Spread.Sheets) {
		GC.Spread.Sheets.SR["zh"] = extend(GC.Spread.Common.SR["zh"] || {}, __webpack_require__(4));
	}
	if (GC.Spread.Sheets.Bindings) {
		GC.Spread.Sheets.Bindings.SR["zh"] = extend(GC.Spread.Common.SR["zh"] || {}, __webpack_require__(7));
	}
	if (GC.Spread.Sheets.Outlines) {
		GC.Spread.Sheets.Outlines.SR["zh"] = extend(GC.Spread.Common.SR["zh"] || {}, __webpack_require__(8));
	}
	if (GC.Spread.Sheets.Touch) {
		GC.Spread.Sheets.Touch.SR["zh"] = extend(GC.Spread.Common.SR["zh"] || {}, __webpack_require__(9));
	}
	if (GC.Spread.Sheets.FloatingObjects) {
		GC.Spread.Sheets.FloatingObjects.SR["zh"] = extend(GC.Spread.Common.SR["zh"] || {}, __webpack_require__(10));
	}
	if (GC.Spread.Sheets.ConditionalFormatting) {
		GC.Spread.Sheets.ConditionalFormatting.SR["zh"] = extend(GC.Spread.Common.SR["zh"] || {}, __webpack_require__(11));
	}
	if (GC.Spread.Sheets.Filter) {
		GC.Spread.Sheets.Filter.SR["zh"] = extend(GC.Spread.Common.SR["zh"] || {}, __webpack_require__(12));
	}
	if (GC.Spread.Sheets.Tables) {
		GC.Spread.Sheets.Tables.SR["zh"] = extend(GC.Spread.Common.SR["zh"] || {}, __webpack_require__(13));
	}
	if (GC.Spread.Sheets.Slicers) {
		GC.Spread.Sheets.Slicers.SR["zh"] = extend(GC.Spread.Common.SR["zh"] || {}, __webpack_require__(14));
	}
	if (GC.Spread.Sheets.Fill) {
		GC.Spread.Sheets.Fill.SR["zh"] = extend(GC.Spread.Common.SR["zh"] || {}, __webpack_require__(15));
	}
	if (GC.Spread.Sheets.ContextMenu) {
		GC.Spread.Sheets.ContextMenu.SR["zh"] = extend(GC.Spread.Common.SR["zh"] || {}, __webpack_require__(16));
	}
	if (GC.Spread.Sheets.FormulaTextBox) {
		GC.Spread.Sheets.FormulaTextBox.SR["zh"] = extend(GC.Spread.Common.SR["zh"] || {}, __webpack_require__(17));
	}
	if (GC.Spread.Sheets.Print) {
		GC.Spread.Sheets.Print.SR["zh"] = extend(GC.Spread.Common.SR["zh"] || {}, __webpack_require__(18));
	}
	if (GC.Spread.Sheets.PDF) {
		GC.Spread.Sheets.PDF.SR["zh"] = extend(GC.Spread.Common.SR["zh"] || {}, __webpack_require__(19));
	}
	if (GC.Spread.Sheets.Shapes) {
		GC.Spread.Sheets.Shapes.SR["zh"] = extend(GC.Spread.Common.SR["zh"] || {}, __webpack_require__(20));
	}
	module.exports = GC.Spread;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_InvalidDateFormat: '\u65e0\u6548\u65e5\u671f\u683c\u5f0f',
	        Exp_InvalidExponentFormat: '\u65e0\u6548\u6307\u6570\u683c\u5f0f',
	        Exp_InvalidSemicolons: '\u65e0\u6548\u683c\u5f0f : \u8fc7\u591a\u5206\u53f7',
	        Exp_InvalidNumberGroupSize: '\u6570\u503c\u7ec4\u5927\u5c0f\u8303\u56f4\u5fc5\u987b\u5728 1 \u5230 9 \u4e4b\u95f4\u3002',
	        Exp_BadFormatSpecifier: '\u9519\u8bef\u7684\u683c\u5f0f\u6307\u793a\u7b26',
	        Exp_InvalidNumberFormat: '\u65e0\u6548\u6570\u503c\u683c\u5f0f',
	        Exp_InvalidCast: '\u65e0\u6548\u8f6c\u6362\u5f02\u5e38',
	        Exp_Separator: '\u5728\u6587\u5316\u4fe1\u606f\u4e2d\uff0c\u5c0f\u6570\u70b9\u5206\u9694\u7b26, \u6570\u7ec4\u5206\u9694\u7b26\u548c\u5217\u5206\u9694\u7b26\u5fc5\u987b\u4e0d\u76f8\u540c\u3002'
	    };
	    
	
	}());

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_TokenIsNull: '\u6807\u5fd7\u4e3a\u7a7a\u3002',
	        Exp_InvalidBackslash: '\u5b57\u7b26 \'\\\' \u65e0\u6cd5\u88ab\u8ba1\u7b97\u3002',
	        Exp_FormatIllegal: '\u65e0\u6548\u683c\u5f0f\u3002',
	        Exp_ValueIsNull: '\u6570\u503c\u4e3a\u7a7a',
	        Exp_DuplicatedDescriptor: '\u91cd\u590d\u7684\u63cf\u8ff0\u88ab\u6dfb\u52a0\u3002',
	        Exp_TokenIllegal: '\u65e0\u6548\u6807\u5fd7\u3002',
	        Exp_ValueIllegal: '\u65e0\u6548\u6570\u503c\u3002',
	        Exp_InvalidCast: '\u65e0\u6548\u8f6c\u6362\u5f02\u5e38'
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
	        Exp_InvalidCast: '\u65e0\u6548\u8f6c\u6362\u5f02\u5e38',
	        Exp_FormulaInvalidChar: '\u516c\u5f0f\u5305\u542b\u65e0\u6548\u5b57\u7b26: \'{0}\' \u5728 {1} \u7d22\u5f15\u5904\u3002',
	        Exp_FormulaInvalid: '\u65e0\u6548\u7684\u516c\u5f0f',
	        Exp_InvalidFunctionName: '\u65e0\u6548\u51fd\u6570\u540d',
	        Exp_InvalidOverrideFunction: '\u4e0d\u80fd\u91cd\u5199\u5185\u7f6e\u51fd\u6570',
	        Exp_InvalidArray: '\u65e0\u6548\u6570\u7ec4',
	        Exp_OverrideNotAllowed: '\u5c1d\u8bd5\u91cd\u5199\u51fd\u6570\uff0c\u4f46\u91cd\u5199\u884c\u4e3a\u662f\u4e0d\u88ab\u5141\u8bb8\u7684\u3002',
	        Exp_NoSyntax: '\u6ca1\u6709\u8bed\u6cd5\u5728 \'{0}\' \u5904\u5339\u914d\u5230\u8bed\u6cd5 \'{1}\'\u3002',
	        Exp_IsValid: '\'{0}\' \u662f\u65e0\u6548\u7684\u3002',
	        Exp_InvalidParameters: '\u5728 {0} \u5904\u5b58\u5728\u65e0\u6548\u51fd\u6570\u53c2\u6570\u3002',
	        Exp_InvalidArrayColumns: '\u5217\u6570\u7ec4\u957f\u5ea6\u5728 {0} \u5904\u4e0d\u76f8\u7b49\u3002',
	        Exp_ExprIsNull: '\u53c2\u6570 \'expr\' \u662f\u7a7a',
	        Exp_InvalidOperation: '\u65e0\u6548\u64cd\u4f5c\u5f02\u5e38',
	        Exp_ArgumentNull: '\u7a7a\u53c2\u6570\u5f02\u5e38',
	        Exp_CriteriaIsNull: '\u6761\u4ef6\u4e3a\u7a7a',
	        Exp_Format: '\u683c\u5f0f',
	        Exp_ArrayFromulaPart: '\u65e0\u6cd5\u4ec5\u6539\u53d8\u6570\u7ec4\u516c\u5f0f\u7684\u4e00\u90e8\u5206\u3002',
	        Exp_NotSupported: '\u4e0d\u652f\u6301\u5f02\u5e38',
	        _builtInFunctionsResource: {
	            'ABS': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u6307\u5b9a\u6570\u5b57\u7684\u7edd\u5bf9\u503c\u3002', [
	                parameterDescription('value')
	            ]),
	            'ACCRINT': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u5b9a\u671f\u4ed8\u606f\u8bc1\u5238\u7684\u5e94\u8ba1\u5229\u606f\u3002', [
	                parameterDescription('issue'),
	                parameterDescription('first'),
	                parameterDescription('settle'),
	                parameterDescription('rate'),
	                parameterDescription('par'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'ACCRINTM': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u5728\u5230\u671f\u65e5\u652f\u4ed8\u5229\u606f\u7684\u6709\u4ef7\u8bc1\u5238\u7684\u5e94\u8ba1\u5229\u606f\u3002', [
	                parameterDescription('issue'),
	                parameterDescription('maturity'),
	                parameterDescription('rate'),
	                parameterDescription('par'),
	                parameterDescription('basis')
	            ]),
	            'ACOS': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u6570\u5b57\u7684\u53cd\u4f59\u5f26\u503c\u3002\u53cd\u4f59\u5f26\u503c\u662f\u89d2\u5ea6\uff0c\u5b83\u7684\u4f59\u5f26\u503c\u4e3a\u6570\u5b57\u3002\u8fd4\u56de\u7684\u89d2\u5ea6\u503c\u4ee5\u5f27\u5ea6\u8868\u793a\uff0c\u8303\u56f4\u662f0\u5230pi\u3002', [
	                parameterDescription('value')
	            ]),
	            'ACOSH': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56denumber\u53c2\u6570\u7684\u53cd\u53cc\u66f2\u4f59\u5f26\u503c\u3002\u53c2\u6570\u5fc5\u987b\u5927\u4e8e\u6216\u7b49\u4e8e1\u3002\u53cd\u53cc\u66f2\u4f59\u5f26\u503c\u7684\u53cc\u66f2\u4f59\u5f26\u5373\u4e3anumber\uff0c\u56e0\u6b64ACOSH(COSH(number))\u7b49\u4e8enumber\u3002', [
	                parameterDescription('value')
	            ]),
	            'ADDRESS': functionDescription('\u8be5\u51fd\u6570\u5728\u7ed9\u51fa\u6307\u5b9a\u884c\u6570\u548c\u5217\u6570\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u4f7f\u7528ADDRESS\u51fd\u6570\u83b7\u53d6\u5de5\u4f5c\u8868\u5355\u5143\u683c\u7684\u5730\u5740\u3002', [
	                parameterDescription('row'),
	                parameterDescription('column'),
	                parameterDescription('absnum'),
	                parameterDescription('a1style'),
	                parameterDescription('sheettext')
	            ]),
	            'AMORDEGRC': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u6bcf\u4e2a\u7ed3\u7b97\u671f\u95f4\u7684\u6298\u65e7\u503c\u3002\u8be5\u51fd\u6570\u4e3b\u8981\u4e3a\u6cd5\u56fd\u4f1a\u8ba1\u7cfb\u7edf\u63d0\u4f9b\u3002\u5982\u679c\u67d0\u9879\u8d44\u4ea7\u662f\u5728\u8be5\u7ed3\u7b97\u671f\u7684\u4e2d\u671f\u8d2d\u5165\u7684\uff0c\u5219\u6309\u76f4\u7ebf\u6298\u65e7\u6cd5\u8ba1\u7b97\u3002\u8be5\u51fd\u6570\u4e0e\u51fd\u6570AMORLINC\u76f8\u4f3c\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u8be5\u51fd\u6570\u4e2d\u7528\u4e8e\u8ba1\u7b97\u7684\u6298\u65e7\u7cfb\u6570\u53d6\u51b3\u4e8e\u8d44\u4ea7\u7684\u5bff\u547d\u3002', [
	                parameterDescription('cost'),
	                parameterDescription('datepurchased'),
	                parameterDescription('firstperiod'),
	                parameterDescription('salvage'),
	                parameterDescription('period'),
	                parameterDescription('drate'),
	                parameterDescription('basis')
	            ]),
	            'AMORLINC': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u6bcf\u4e2a\u7ed3\u7b97\u671f\u95f4\u7684\u6298\u65e7\u503c\uff0c\u8be5\u51fd\u6570\u4e3a\u6cd5\u56fd\u4f1a\u8ba1\u7cfb\u7edf\u63d0\u4f9b\u3002\u5982\u679c\u67d0\u9879\u8d44\u4ea7\u662f\u5728\u7ed3\u7b97\u671f\u95f4\u7684\u4e2d\u671f\u8d2d\u5165\u7684\uff0c\u5219\u6309\u7ebf\u6027\u6298\u65e7\u6cd5\u8ba1\u7b97\u3002', [
	                parameterDescription('cost'),
	                parameterDescription('datepurchased'),
	                parameterDescription('firstperiod'),
	                parameterDescription('salvage'),
	                parameterDescription('period'),
	                parameterDescription('drate'),
	                parameterDescription('basis')
	            ]),
	            'AND': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u903b\u8f91\u4e0e\u3002\u5982\u679c\u6bcf\u4e00\u4e2a\u53c2\u6570\u90fd\u662fTRUE\u65f6\u8fd4\u56deTRUE\u3002', [
	                parameterDescription('logical1'),
	                parameterDescription('logical2')
	            ]),
	            'ASIN': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u53c2\u6570\u7684\u53cd\u6b63\u5f26\u503c\u3002\u53cd\u6b63\u5f26\u503c\u4e3a\u4e00\u4e2a\u89d2\u5ea6\uff0c\u8be5\u89d2\u5ea6\u7684\u6b63\u5f26\u503c\u5373\u7b49\u4e8e\u6b64\u51fd\u6570\u7684number\u53c2\u6570\u3002\u8fd4\u56de\u7684\u89d2\u5ea6\u503c\u5c06\u4ee5\u5f27\u5ea6\u8868\u793a\uff0c\u8303\u56f4\u4e3a-pi/2\u5230pi/2\u3002', [
	                parameterDescription('value')
	            ]),
	            'ASINH': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u53c2\u6570\u7684\u53cd\u53cc\u66f2\u6b63\u5f26\u503c\u3002\u53cd\u53cc\u66f2\u6b63\u5f26\u503c\u7684\u53cc\u66f2\u6b63\u5f26\u5373\u7b49\u4e8e\u6b64\u51fd\u6570\u7684number\u53c2\u6570\u503c\uff0c\u56e0\u6b64ASINH(SINH(number))\u7b49\u4e8enumber\u53c2\u6570\u503c\u3002', [
	                parameterDescription('value')
	            ]),
	            'ATAN': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u53cd\u6b63\u5207\u503c\u3002\u53cd\u6b63\u5207\u503c\u4e3a\u89d2\u5ea6\uff0c\u8d77\u6b63\u5207\u503c\u5373\u7b49\u4e8enumber\u53c2\u6570\u503c\u3002\u8fd4\u56de\u7684\u89d2\u5ea6\u503c\u5c06\u4ee5\u5f27\u5ea6\u8868\u793a\uff0c\u8303\u56f4\u4e3a-pi/2\u5230pi/2\u3002', [
	                parameterDescription('value')
	            ]),
	            'ATAN2': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u7ed9\u5b9aX\u53caY\u5750\u6807\u503c\u7684\u53cd\u6b63\u5207\u503c\u3002', [
	                parameterDescription('x'),
	                parameterDescription('y')
	            ]),
	            'ATANH': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u53c2\u6570\u7684\u53cd\u53cc\u66f2\u6b63\u5207\u503c\u3002', [
	                parameterDescription('value')
	            ]),
	            'AVEDEV': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4e00\u7ec4\u6570\u636e\u4e0e\u5176\u5747\u503c\u7684\u7edd\u5bf9\u504f\u5dee\u7684\u5e73\u5747\u503c\uff0cAVEDEV\u7528\u4e8e\u8bc4\u6d4b\u8fd9\u7ec4\u6570\u636e\u7684\u79bb\u6563\u5ea6\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'AVERAGE': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u53c2\u6570\u7684\u5e73\u5747\u503c\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'AVERAGEA': functionDescription('\u8be5\u51fd\u6570\u8ba1\u7b97\u53c2\u6570\u5217\u8868\u4e2d\u6570\u503c\u7684\u5e73\u5747\u503c\uff0c\u5305\u62ec\u6587\u672c\u548c\u903b\u8f91\u503c\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'AVERAGEIF': functionDescription('\u8fd4\u56de\u67d0\u4e2a\u533a\u57df\u5185\u6ee1\u8db3\u7ed9\u5b9a\u6761\u4ef6\u7684\u6240\u6709\u5355\u5143\u683c\u7684\u5e73\u5747\u503c\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true),
	                parameterDescription('condition')
	            ]),
	            'AVERAGEIFS': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u6ee1\u8db3\u591a\u91cd\u6761\u4ef6\u7684\u6240\u6709\u5355\u5143\u683c\u7684\u5e73\u5747\u503c\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('condition1'),
	                parameterDescription('value2', true),
	                parameterDescription('condition2...')
	            ]),
	            'BESSELI': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4fee\u6b63Bessel\u51fd\u6570\u503c\uff0c\u5b83\u4e0e\u7528\u7eaf\u865a\u6570\u53c2\u6570\u8fd0\u7b97\u65f6\u7684Bessel\u51fd\u6570\u503c\u76f8\u7b49\u3002', [
	                parameterDescription('value'),
	                parameterDescription('order')
	            ]),
	            'BESSELJ': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56deBessel\u51fd\u6570\u503c\u3002', [
	                parameterDescription('value'),
	                parameterDescription('order')
	            ]),
	            'BESSELK': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4fee\u6b63Bessel\u51fd\u6570\u503c\uff0c\u5b83\u4e0e\u7528\u7eaf\u865a\u6570\u53c2\u6570\u8fd0\u7b97\u65f6\u7684Bessel\u51fd\u6570\u503c\u76f8\u7b49\u3002', [
	                parameterDescription('value'),
	                parameterDescription('order')
	            ]),
	            'BESSELY': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56deBessel\u51fd\u6570\u503c\uff0c\u8be5\u51fd\u6570\u4e5f\u79f0\u4f5c\u8bfa\u4f0a\u66fc\u51fd\u6570\u3002', [
	                parameterDescription('value'),
	                parameterDescription('order')
	            ]),
	            'BETADIST': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u7d2f\u79efbeta\u5206\u5e03\u7684\u6982\u7387\u5bc6\u5ea6\u51fd\u6570\u3002', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'BETAINV': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u6307\u5b9abeta\u5206\u5e03\u7d2f\u79efbeta\u5206\u5e03\u7684\u6982\u7387\u5bc6\u5ea6\u51fd\u6570\u7684\u53cd\u51fd\u6570\u503c\u3002', [
	                parameterDescription('prob'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'BIN2DEC': functionDescription('\u8be5\u51fd\u6570\u5c06\u4e8c\u8fdb\u5236\u6570\u8f6c\u6362\u4e3a\u5341\u8fdb\u5236\u6570\u3002', [
	                parameterDescription('number')
	            ]),
	            'BIN2HEX': functionDescription('\u8be5\u51fd\u6570\u5c06\u4e8c\u8fdb\u5236\u6570\u8f6c\u6362\u4e3a\u5341\u516d\u8fdb\u5236\u6570\u3002', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'BIN2OCT': functionDescription('\u8be5\u51fd\u6570\u5c06\u4e8c\u8fdb\u5236\u6570\u8f6c\u6362\u4e3a\u516b\u8fdb\u5236\u6570\u3002', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'BINOMDIST': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4e00\u5143\u4e8c\u9879\u5f0f\u5206\u5e03\u7684\u6982\u7387\u503c\u3002', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('cumulative')
	            ]),
	            'CEILING': functionDescription('\u8be5\u51fd\u6570\u5c06\u53c2\u6570\u5411\u4e0a\u820d\u5165\u3002', [
	                parameterDescription('value'),
	                parameterDescription('signif')
	            ]),
	            'CHAR': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u5bf9\u5e94\u6570\u5b57\u4ee3\u7801\u7684\u5b57\u7b26\u3002', [
	                parameterDescription('value')
	            ]),
	            'CHIDIST': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de \u03c72 \u5206\u5e03\u7684\u5355\u5c3e\u6982\u7387\u3002', [
	                parameterDescription('value'),
	                parameterDescription('deg')
	            ]),
	            'CHIINV': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de \u03c72 \u5206\u5e03\u5355\u5c3e\u6982\u7387\u7684\u53cd\u51fd\u6570\u503c\u3002', [
	                parameterDescription('prob'),
	                parameterDescription('deg')
	            ]),
	            'CHITEST': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u72ec\u7acb\u6027\u68c0\u6d4b\u503c\u3002', [
	                parameterDescription('obs_array'),
	                parameterDescription('exp_array')
	            ]),
	            'CHOOSE': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4ece\u503c\u5f97\u5217\u8868\u4e2d\u9009\u62e9\u503c\u3002', [
	                parameterDescription('index'),
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'CLEAN': functionDescription('\u8be5\u51fd\u6570\u5220\u9664\u6587\u672c\u4e2d\u6240\u6709\u975e\u6253\u5370\u5b57\u7b26\u3002', [
	                parameterDescription('text')
	            ]),
	            'CODE': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u6587\u672c\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e00\u4e2a\u5b57\u7b26\u7684\u6570\u5b57\u4ee3\u7801\u3002\u8fd4\u56de\u7684\u4ee3\u7801\u5bf9\u5e94\u4e8e\u8ba1\u7b97\u673a\u5f53\u524d\u4f7f\u7528\u7684\u5b57\u7b26\u4e32\u3002', [
	                parameterDescription('text')
	            ]),
	            'COLUMN': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u5f15\u7528\u7684\u5217\u53f7\u3002', [
	                parameterDescription('reference')
	            ]),
	            'COLUMNS': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u5f15\u7528\u4e2d\u5305\u542b\u7684\u5217\u6570\u3002', [
	                parameterDescription('array')
	            ]),
	            'COMBIN': functionDescription('\u8be5\u51fd\u6570\u8ba1\u7b97\u4ece\u7ed9\u5b9a\u6570\u76ee\u7684\u5bf9\u8c61\u96c6\u5408\u4e2d\u63d0\u53d6\u82e5\u5e72\u5bf9\u8c61\u7684\u7ec4\u5408\u6570\u3002', [
	                parameterDescription('k'),
	                parameterDescription('n')
	            ]),
	            'COMPLEX': functionDescription('\u8be5\u51fd\u6570\u5c06\u5b9e\u7cfb\u6570\u548c\u865a\u7cfb\u6570\u8f6c\u6362\u4e3a\u590d\u6570\u3002', [
	                parameterDescription('realcoeff'),
	                parameterDescription('imagcoeff'),
	                parameterDescription('suffix')
	            ]),
	            'CONCATENATE': functionDescription('\u8be5\u51fd\u6570\u5c06\u4e24\u4e2a\u6216\u591a\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\u5408\u5e76\u4e3a\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\u3002', [
	                parameterDescription('text1'),
	                parameterDescription('text2'),
	                parameterDescription('....')
	            ]),
	            'CONFIDENCE': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u603b\u4f53\u5e73\u5747\u503c\u7684\u7f6e\u4fe1\u533a\u95f4\u3002', [
	                parameterDescription('alpha'),
	                parameterDescription('stdev'),
	                parameterDescription('size')
	            ]),
	            'CONVERT': functionDescription('\u8be5\u51fd\u6570\u5c06\u6570\u5b57\u4ece\u4e00\u79cd\u5ea6\u91cf\u7cfb\u7edf\u8f6c\u6362\u4e3a\u53e6\u4e00\u79cd\u5ea6\u91cf\u7cfb\u7edf\u3002', [
	                parameterDescription('number'),
	                parameterDescription('from-unit'),
	                parameterDescription('to-unit')
	            ]),
	            'CORREL': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4e24\u4e2a\u6570\u636e\u96c6\u4e4b\u95f4\u7684\u76f8\u5173\u7cfb\u6570\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'COS': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u6570\u5b57\u7684\u4f59\u5f26\u503c\u3002', [
	                parameterDescription('angle')
	            ]),
	            'COSH': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u6570\u5b57\u7684\u53cc\u66f2\u4f59\u5f26\u503c\u3002', [
	                parameterDescription('value')
	            ]),
	            'COUNT': functionDescription('\u8be5\u51fd\u6570\u8ba1\u7b97\u53c2\u6570\u5217\u8868\u4e2d\u6570\u5b57\u7684\u4e2a\u6570\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'COUNTA': functionDescription('\u8be5\u51fd\u6570\u8ba1\u7b97\u533a\u57df\u4e2d\u4e0d\u4e3a\u7a7a\u7684\u5355\u5143\u683c\u7684\u4e2a\u6570\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'COUNTBLANK': functionDescription('\u8be5\u51fd\u6570\u8ba1\u7b97\u6307\u5b9a\u5355\u5143\u683c\u533a\u57df\u4e2d\u7a7a\u767d\u5355\u5143\u683c\u7684\u4e2a\u6570\u3002', [
	                parameterDescription('cellrange')
	            ]),
	            'COUNTIF': functionDescription('\u8be5\u51fd\u6570\u8ba1\u7b97\u533a\u57df\u5185\u7b26\u5408\u7ed9\u5b9a\u6761\u4ef6\u7684\u5355\u5143\u683c\u7684\u6570\u91cf\u3002', [
	                parameterDescription('cellrange'),
	                parameterDescription('condition')
	            ]),
	            'COUNTIFS': functionDescription('\u8be5\u51fd\u6570\u8ba1\u7b97\u533a\u57df\u5185\u7b26\u5408\u591a\u4e2a\u6761\u4ef6\u7684\u5355\u5143\u683c\u7684\u6570\u91cf\u3002', [
	                parameterDescription('cellrange'),
	                parameterDescription('condition')
	            ]),
	            'COUPDAYBS': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4ece\u4ed8\u606f\u671f\u5f00\u59cb\u5230\u6210\u4ea4\u65e5\u4e4b\u95f4\u7684\u5929\u6570\u3002', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COUPDAYS': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u5305\u542b\u6210\u4ea4\u65e5\u7684\u4ed8\u606f\u5929\u6570\u3002', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COUPDAYSNC': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4ece\u7ed3\u7b97\u65e5\u5230\u4e0b\u4e00\u4ed8\u606f\u65e5\u4e4b\u95f4\u7684\u5929\u6570\u3002', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COUPNCD': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u5728\u7ed3\u7b97\u65e5\u4e4b\u540e\u4e0b\u4e00\u4e2a\u4ed8\u606f\u65e5\u7684\u6570\u5b57\u3002', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basi')
	            ]),
	            'COUPNUM': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u5728\u7ed3\u7b97\u65e5\u548c\u5230\u671f\u65e5\u4e4b\u95f4\u4ed8\u606f\u6b21\u6570\uff0c\u5411\u4e0a\u820d\u5165\u5230\u6700\u8fd1\u7684\u6574\u6570\u3002', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COUPPCD': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u8868\u793a\u7ed3\u7b97\u65e5\u4e4b\u524d\u7684\u4ed8\u606f\u65e5\u7684\u6570\u5b57\u3002', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COVAR': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u534f\u65b9\u5dee\uff0c\u5373\u4e24\u4e2a\u6570\u636e\u96c6\u4e2d\u6bcf\u5bf9\u6570\u636e\u70b9\u7684\u504f\u5dee\u4e58\u79ef\u7684\u5e73\u5747\u503c\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'CRITBINOM': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u7d2f\u79ef\u4e8c\u9879\u5f0f\u5206\u5e03\u5927\u4e8e\u7b49\u4e8e\u4e34\u754c\u503c\u7684\u6700\u5c0f\u503c\u3002', [
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('alpha')
	            ]),
	            'CUMIPMT': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4e24\u4e2a\u4ed8\u6b3e\u671f\u4e4b\u95f4\u7d2f\u79ef\u652f\u4ed8\u7684\u5229\u606f\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('startperiod'),
	                parameterDescription('endperiod'),
	                parameterDescription('paytype')
	            ]),
	            'CUMPRINC': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4e24\u4e2a\u4ed8\u6b3e\u671f\u4e4b\u95f4\u4e3a\u8d37\u6b3e\u7d2f\u79ef\u652f\u4ed8\u7684\u672c\u91d1\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('startperiod'),
	                parameterDescription('endperiod'),
	                parameterDescription('paytype')
	            ]),
	            'DATE': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56deDateTime\u5bf9\u8c61\uff0c\u4ee3\u8868\u4e86\u4e00\u4e2a\u72ec\u6709\u7684\u65e5\u671f\uff0c\u901a\u8fc7\u5b9a\u5236\u5e74\uff0c\u6708\u548c\u65e5\u3002', [
	                parameterDescription('year'),
	                parameterDescription('month'),
	                parameterDescription('day')
	            ]),
	            'DATEDIF': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4e24\u4e2a\u65e5\u671f\u95f4\u7684\u5929\uff0c\u6708\u548c\u5e74\u7684\u6570\u76ee\u3002', [
	                parameterDescription('date1'),
	                parameterDescription('date2'),
	                parameterDescription('outputcode')
	            ]),
	            'DATEVALUE': functionDescription('\u8be5\u51fd\u6570\u5c06\u6587\u672c\u683c\u5f0f\u7684\u65e5\u671f\u8f6c\u6362\u4e3a\u65e5\u671f\u5bf9\u8c61\u3002', [
	                parameterDescription('date_string')
	            ]),
	            'DAVERAGE': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u5217\u8868\u6216\u6570\u636e\u5e93\u4e2d\u6ee1\u8db3\u6307\u5b9a\u6761\u4ef6\u7684\u8bb0\u5f55\u5b57\u6bb5\uff08\u5217\uff09\u4e2d\u7684\u6570\u503c\u7684\u5e73\u5747\u503c\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DAY': functionDescription('\u8be5\u51fd\u6570\u5c06\u5e8f\u5217\u53f7\u8f6c\u6362\u4e3a\u6708\u4efd\u65e5\u671f\u3002', [
	                parameterDescription('date')
	            ]),
	            'DAYS360': functionDescription('\u8be5\u51fd\u6570\u4ee5\u4e00\u5e74360\u5929\u4e3a\u57fa\u51c6\u8ba1\u7b97\u4e24\u4e2a\u65e5\u671f\u95f4\u7684\u5929\u6570\u3002', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate'),
	                parameterDescription('method')
	            ]),
	            'DB': functionDescription('\u8be5\u51fd\u6570\u4f7f\u7528\u56fa\u5b9a\u4f59\u989d\u9012\u51cf\u6cd5\uff0c\u8fd4\u56de\u4e00\u7b14\u8d44\u4ea7\u5728\u7ed9\u5b9a\u671f\u95f4\u5185\u7684\u6298\u65e7\u503c\u3002', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life'),
	                parameterDescription('period'),
	                parameterDescription('month')
	            ]),
	            'DCOUNT': functionDescription('\u8be5\u51fd\u6570\u8ba1\u7b97\u6570\u636e\u5e93\u4e2d\u5305\u542b\u6570\u5b57\u7684\u5355\u5143\u683c\u7684\u6570\u91cf\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DCOUNTA': functionDescription('\u8be5\u51fd\u6570\u8ba1\u7b97\u6570\u636e\u5e93\u4e2d\u975e\u7a7a\u5355\u5143\u683c\u7684\u6570\u91cf\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DDB': functionDescription('\u8be5\u51fd\u6570\u4f7f\u7528\u53cc\u500d\u4f59\u989d\u9012\u51cf\u6cd5\u6216\u5176\u4ed6\u6307\u5b9a\u65b9\u6cd5\uff0c\u8fd4\u56de\u4e00\u7b14\u8d44\u4ea7\u5728\u7ed9\u5b9a\u671f\u95f4\u5185\u7684\u6298\u65e7\u503c\u3002', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life'),
	                parameterDescription('period'),
	                parameterDescription('factor')
	            ]),
	            'DEC2BIN': functionDescription('\u8be5\u51fd\u6570\u5c06\u5341\u8fdb\u5236\u6570\u8f6c\u6362\u4e3a\u4e8c\u8fdb\u5236\u6570\u3002', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'DEC2HEX': functionDescription('\u8be5\u51fd\u6570\u5c06\u5341\u8fdb\u5236\u6570\u8f6c\u6362\u4e3a\u5341\u516d\u8fdb\u5236\u6570\u3002', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'DEC2OCT': functionDescription('\u8be5\u51fd\u6570\u5c06\u5341\u8fdb\u5236\u6570\u8f6c\u6362\u4e3a\u516b\u8fdb\u5236\u6570\u3002', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'DEGREES': functionDescription('\u8be5\u51fd\u6570\u5c06\u5f27\u5ea6\u8f6c\u6362\u4e3a\u5ea6\u3002', [
	                parameterDescription('angle')
	            ]),
	            'DELTA': functionDescription('\u8be5\u51fd\u6570\u6d4b\u8bd5\u4e24\u4e2a\u6570\u503c\u662f\u5426\u76f8\u7b49\u3002\u5982\u679cnumber1= number2\uff0c\u5219\u8fd4\u56de1\uff0c\u5426\u5219\u8fd4\u56de0\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2')
	            ]),
	            'DEVSQ': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u6570\u636e\u70b9\u4e0e\u5404\u81ea\u6837\u672c\u5e73\u5747\u503c\u504f\u5dee\u7684\u5e73\u65b9\u548c\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'DGET': functionDescription('\u8be5\u51fd\u6570\u4ece\u5217\u8868\u6216\u6570\u636e\u5e93\u7684\u5217\u4e2d\u63d0\u53d6\u7b26\u5408\u6307\u5b9a\u6761\u4ef6\u7684\u5355\u4e2a\u503c\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DISC': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u6709\u4ef7\u8bc1\u5238\u7684\u8d34\u73b0\u7387\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('pricep'),
	                parameterDescription('redeem'),
	                parameterDescription('basis')
	            ]),
	            'DMAX': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u5217\u8868\u6216\u6570\u636e\u5e93\u4e2d\u6ee1\u8db3\u6307\u5b9a\u6761\u4ef6\u7684\u8bb0\u5f55\u5b57\u6bb5\uff08\u5217\uff09\u4e2d\u7684\u6700\u5927\u6570\u5b57\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DMIN': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u5217\u8868\u6216\u6570\u636e\u5e93\u4e2d\u6ee1\u8db3\u6307\u5b9a\u6761\u4ef6\u7684\u8bb0\u5f55\u5b57\u6bb5\uff08\u5217\uff09\u4e2d\u7684\u6700\u5c0f\u6570\u5b57\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DOLLAR': functionDescription('\u8be5\u51fd\u6570\u4f9d\u7167\u8d27\u5e01\u683c\u5f0f\u5c06\u5c0f\u6570\u56db\u820d\u4e94\u5165\u5230\u6307\u5b9a\u7684\u4f4d\u6570\u5e76\u8f6c\u6362\u6210\u6587\u672c\u3002', [
	                parameterDescription('value'),
	                parameterDescription('digits')
	            ]),
	            'DOLLARDE': functionDescription('\u8be5\u51fd\u6570\u5c06\u6309\u5206\u6570\u8868\u793a\u7684\u4ef7\u683c\u8f6c\u6362\u4e3a\u6309\u5c0f\u6570\u8868\u793a\u7684\u4ef7\u683c\u3002', [
	                parameterDescription('fractionaldollar'),
	                parameterDescription('fraction')
	            ]),
	            'DOLLARFR': functionDescription('\u8be5\u51fd\u6570\u5c06\u4ee5\u5c0f\u6570\u8868\u793a\u7684\u4ef7\u683c\u8f6c\u6362\u4e3a\u4ee5\u5206\u6570\u8868\u793a\u7684\u4ef7\u683c\u3002', [
	                parameterDescription('decimaldollar'),
	                parameterDescription('fraction')
	            ]),
	            'DPRODUCT': functionDescription('\u8be5\u51fd\u6570\u5c06\u6570\u636e\u5e93\u4e2d\u7b26\u5408\u6761\u4ef6\u7684\u8bb0\u5f55\u7684\u7279\u5b9a\u5b57\u6bb5\u4e2d\u7684\u503c\u76f8\u4e58\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DSTDEV': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u5229\u7528\u5217\u8868\u6216\u6570\u636e\u5e93\u4e2d\u6ee1\u8db3\u6307\u5b9a\u6761\u4ef6\u7684\u8bb0\u5f55\u5b57\u6bb5\uff08\u5217\uff09\u4e2d\u7684\u6570\u5b57\u4f5c\u4e3a\u4e00\u4e2a\u6837\u672c\u4f30\u7b97\u51fa\u7684\u6837\u672c\u603b\u4f53\u6807\u51c6\u504f\u5dee\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DSTDEVP': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u5229\u7528\u5217\u8868\u6216\u6570\u636e\u5e93\u4e2d\u6ee1\u8db3\u6307\u5b9a\u6761\u4ef6\u7684\u8bb0\u5f55\u5b57\u6bb5\uff08\u5217\uff09\u4e2d\u7684\u6570\u5b57\u4f5c\u4e3a\u6837\u672c\u603b\u4f53\u8ba1\u7b97\u51fa\u7684\u603b\u4f53\u6807\u51c6\u504f\u5dee\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DSUM': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u5217\u8868\u6216\u6570\u636e\u5e93\u4e2d\u6ee1\u8db3\u6307\u5b9a\u6761\u4ef6\u7684\u8bb0\u5f55\u5b57\u6bb5\uff08\u5217\uff09\u4e2d\u7684\u6570\u5b57\u4e4b\u548c\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DURATION': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u5047\u8bbe\u9762\u503c \uffe5100 \u7684\u5b9a\u671f\u4ed8\u606f\u6709\u4ef7\u8bc1\u5238\u7684\u4fee\u6b63\u671f\u9650\u3002', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('coupon'),
	                parameterDescription('yield'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'DVAR': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u5229\u7528\u5217\u8868\u6216\u6570\u636e\u5e93\u4e2d\u6ee1\u8db3\u6307\u5b9a\u6761\u4ef6\u7684\u8bb0\u5f55\u5b57\u6bb5\uff08\u5217\uff09\u4e2d\u7684\u6570\u5b57\u4f5c\u4e3a\u4e00\u4e2a\u6837\u672c\u4f30\u7b97\u51fa\u7684\u6837\u672c\u603b\u4f53\u65b9\u5dee\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DVARP': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u5229\u7528\u5217\u8868\u6216\u6570\u636e\u5e93\u4e2d\u6ee1\u8db3\u6307\u5b9a\u6761\u4ef6\u7684\u8bb0\u5f55\u5b57\u6bb5\uff08\u5217\uff09\u4e2d\u7684\u6570\u5b57\u4f5c\u4e3a\u6837\u672c\u603b\u4f53\u8ba1\u7b97\u51fa\u7684\u6837\u672c\u603b\u4f53\u65b9\u5dee\u3002', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'EDATE': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u7528\u4e8e\u8868\u793a\u5f00\u59cb\u65e5\u671f\u4e4b\u524d\u6216\u4e4b\u540e\u6708\u6570\u7684\u65e5\u671f\u7684\u5e8f\u5217\u53f7\u3002', [
	                parameterDescription('startdate'),
	                parameterDescription('months')
	            ]),
	            'EFFECT': functionDescription('\u8be5\u51fd\u6570\u5229\u7528\u7ed9\u5b9a\u7684\u540d\u4e49\u5e74\u5229\u7387\u548c\u6bcf\u5e74\u7684\u590d\u5229\u671f\u6570\uff0c\u8ba1\u7b97\u6709\u6548\u7684\u5e74\u5229\u7387\u3002', [
	                parameterDescription('nomrate'),
	                parameterDescription('comper')
	            ]),
	            'EOMONTH': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u6307\u5b9a\u6708\u6570\u4e4b\u524d\u6216\u4e4b\u540e\u7684\u6708\u4efd\u7684\u6700\u540e\u4e00\u5929\u7684\u5e8f\u5217\u53f7\u3002', [
	                parameterDescription('startdate'),
	                parameterDescription('months')
	            ]),
	            'ERF': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u8bef\u5dee\u51fd\u6570\u5728\u4e0a\u4e0b\u9650\u4e4b\u95f4\u7684\u79ef\u5206\u3002', [
	                parameterDescription('limit'),
	                parameterDescription('upperlimit')
	            ]),
	            'ERFC': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4ece x \u5230 \u221e\uff08\u65e0\u7a77\uff09\u79ef\u5206\u7684 ERF \u51fd\u6570\u7684\u8865\u4f59\u8bef\u5dee\u51fd\u6570\u3002', [
	                parameterDescription('lowerlimit')
	            ]),
	            'ERROR.TYPE': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u5bf9\u5e94\u4e8e\u9519\u8bef\u7c7b\u578b\u7684\u6570\u5b57\u3002', [
	                parameterDescription('errorvalue')
	            ]),
	            'EURO': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4e00\u6b27\u5143\u7b49\u4ef7\u8d27\u5e01\u91d1\u989d\uff0c\u57fa\u4e8eISO\u8d27\u5e01\u4ee3\u7801\u3002', [
	                parameterDescription('code')
	            ]),
	            'EUROCONVERT': functionDescription('\u8be5\u51fd\u6570\u5c06\u6570\u5b57\u8f6c\u6362\u4e3a\u6b27\u5143\u5f62\u5f0f\uff0c\u5c06\u6570\u5b57\u7531\u6b27\u5143\u5f62\u5f0f\u8f6c\u6362\u4e3a\u6b27\u76df\u6210\u5458\u56fd\u8d27\u5e01\u5f62\u5f0f\uff0c\u6216\u5229\u7528\u6b27\u5143\u4f5c\u4e3a\u4e2d\u95f4\u8d27\u5e01\u5c06\u6570\u5b57\u7531\u67d0\u4e00\u6b27\u76df\u6210\u5458\u56fd\u8d27\u5e01\u8f6c\u5316\u4e3a\u53e6\u4e00\u6b27\u76df\u6210\u5458\u56fd\u8d27\u5e01\u7684\u5f62\u5f0f\uff08\u4e09\u89d2\u8f6c\u6362\u5173\u7cfb\uff09\u3002\u53ea\u6709\u91c7\u7528\u4e86\u6b27\u5143\u7684\u6b27\u76df (EU) \u6210\u5458\u56fd\u8d27\u5e01\u624d\u80fd\u8fdb\u884c\u8fd9\u4e9b\u8f6c\u6362\u3002\u6b64\u51fd\u6570\u6240\u4f7f\u7528\u7684\u662f\u7531\u6b27\u76df (EU) \u5efa\u7acb\u7684\u56fa\u5b9a\u8f6c\u6362\u6c47\u7387\u3002', [
	                parameterDescription('currency'),
	                parameterDescription('source'),
	                parameterDescription('target'),
	                parameterDescription('fullprecision'),
	                parameterDescription('triangulation')
	            ]),
	            'EVEN': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u6cbf\u7edd\u5bf9\u503c\u589e\u5927\u65b9\u5411\u53d6\u6574\u540e\u6700\u63a5\u8fd1\u7684\u5076\u6570\u3002', [
	                parameterDescription('value')
	            ]),
	            'EXACT': functionDescription('\u8be5\u51fd\u6570\u7528\u4e8e\u6bd4\u8f83\u4e24\u4e2a\u5b57\u7b26\u4e32\uff1a\u5982\u679c\u5b83\u4eec\u5b8c\u5168\u76f8\u540c\uff0c\u5219\u8fd4\u56de TRUE\uff1b\u5426\u5219\uff0c\u8fd4\u56de FALSE\u3002', [
	                parameterDescription('text1'),
	                parameterDescription('text2')
	            ]),
	            'EXP': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de e \u7684 n \u6b21\u65b9\u3002', [
	                parameterDescription('value')
	            ]),
	            'EXPONDIST': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u6307\u6570\u5206\u5e03\u3002', [
	                parameterDescription('value'),
	                parameterDescription('lambda'),
	                parameterDescription('cumulative')
	            ]),
	            'FACT': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u6570\u5b57\u7684\u9636\u4e58\u3002', [
	                parameterDescription('number')
	            ]),
	            'FACTDOUBLE': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u6570\u5b57\u7684\u53cc\u500d\u9636\u4e58\u3002', [
	                parameterDescription('number')
	            ]),
	            'FALSE': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u903b\u8f91\u503c FALSE\u3002', []),
	            'FDIST': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de F \u6982\u7387\u5206\u5e03\u3002\u4f7f\u7528\u6b64\u51fd\u6570\u53ef\u4ee5\u786e\u5b9a\u4e24\u4e2a\u6570\u636e\u96c6\u662f\u5426\u5b58\u5728\u53d8\u5316\u7a0b\u5ea6\u4e0a\u7684\u4e0d\u540c\u3002', [
	                parameterDescription('value'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'FIND': functionDescription('\u8be5\u51fd\u6570\u5728\u4e00\u4e2a\u6587\u672c\u503c\u4e2d\u67e5\u627e\u53e6\u4e00\u4e2a\u6587\u672c\u503c\uff08\u533a\u5206\u5927\u5c0f\u5199\uff09\u3002', [
	                parameterDescription('findtext'),
	                parameterDescription('intext'),
	                parameterDescription('start')
	            ]),
	            'FINV': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de F \u6982\u7387\u5206\u5e03\u7684\u53cd\u51fd\u6570\u503c\u3002', [
	                parameterDescription('p'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'FISHER': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de Fisher \u53d8\u6362\u503c\u3002', [
	                parameterDescription('value')
	            ]),
	            'FISHERINV': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de Fisher \u53d8\u6362\u7684\u53cd\u51fd\u6570\u503c\u3002', [
	                parameterDescription('value')
	            ]),
	            'FIXED': functionDescription('\u8be5\u51fd\u6570\u5c06\u6570\u5b57\u6309\u6307\u5b9a\u7684\u5c0f\u6570\u4f4d\u6570\u8fdb\u884c\u53d6\u6574\uff0c\u5229\u7528\u53e5\u53f7\u548c\u9017\u53f7\uff0c\u4ee5\u5c0f\u6570\u683c\u5f0f\u5bf9\u8be5\u6570\u8fdb\u884c\u683c\u5f0f\u8bbe\u7f6e\uff0c\u5e76\u4ee5\u6587\u672c\u5f62\u5f0f\u8fd4\u56de\u7ed3\u679c\u3002', [
	                parameterDescription('num'),
	                parameterDescription('digits'),
	                parameterDescription('notcomma')
	            ]),
	            'FLOOR': functionDescription('\u8be5\u51fd\u6570\u5411\u7edd\u5bf9\u503c\u51cf\u5c0f\u7684\u65b9\u5411\u820d\u5165\u6570\u5b57\u3002', [
	                parameterDescription('value'),
	                parameterDescription('signif')
	            ]),
	            'FORECAST': functionDescription('\u8be5\u51fd\u6570\u6839\u636e\u5df2\u6709\u7684\u6570\u503c\u8ba1\u7b97\u6216\u9884\u6d4b\u672a\u6765\u503c\u3002', [
	                parameterDescription('value'),
	                parameterDescription('Yarray'),
	                parameterDescription('Xarray')
	            ]),
	            'FREQUENCY': functionDescription('\u8be5\u51fd\u6570\u8ba1\u7b97\u6570\u503c\u5728\u67d0\u4e2a\u533a\u57df\u5185\u7684\u51fa\u73b0\u9891\u7387\uff0c\u7136\u540e\u8fd4\u56de\u4e00\u4e2a\u5782\u76f4\u6570\u7ec4\u3002', [
	                parameterDescription('dataarray'),
	                parameterDescription('binarray')
	            ]),
	            'FTEST': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de F \u68c0\u9a8c\u7684\u7ed3\u679c\u3002F \u68c0\u9a8c\u8fd4\u56de\u7684\u662f\u5f53\u6570\u7ec4 1 \u548c\u6570\u7ec4 2 \u7684\u65b9\u5dee\u65e0\u660e\u663e\u5dee\u5f02\u65f6\u7684\u5355\u5c3e\u6982\u7387\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'FV': functionDescription('\u8be5\u51fd\u6570\u57fa\u4e8e\u56fa\u5b9a\u5229\u7387\u53ca\u7b49\u989d\u5206\u671f\u4ed8\u6b3e\u65b9\u5f0f\uff0c\u8fd4\u56de\u67d0\u9879\u6295\u8d44\u7684\u672a\u6765\u503c\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('numper'),
	                parameterDescription('paymt'),
	                parameterDescription('pval'),
	                parameterDescription('type')
	            ]),
	            'FVSCHEDULE': functionDescription('\u8be5\u51fd\u6570\u57fa\u4e8e\u4e00\u7cfb\u5217\u590d\u5229\u8fd4\u56de\u672c\u91d1\u7684\u672a\u6765\u503c\u3002\u51fd\u6570 FVSCHEDULE \u7528\u4e8e\u8ba1\u7b97\u67d0\u9879\u6295\u8d44\u5728\u53d8\u52a8\u6216\u53ef\u8c03\u5229\u7387\u4e0b\u7684\u672a\u6765\u503c\u3002', [
	                parameterDescription('principal'),
	                parameterDescription('schedule')
	            ]),
	            'GAMMADIST': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de \u03b3 \u5206\u5e03\u3002', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative')
	            ]),
	            'GAMMAINV': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de \u03b3 \u7d2f\u79ef\u5206\u5e03\u51fd\u6570\u7684\u53cd\u51fd\u6570\u3002', [
	                parameterDescription('p'),
	                parameterDescription('alpha'),
	                parameterDescription('beta')
	            ]),
	            'GAMMALN': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de \u03b3 \u51fd\u6570\u7684\u81ea\u7136\u5bf9\u6570\uff0c\u0393(x)\u3002', [
	                parameterDescription('value')
	            ]),
	            'GCD': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u6700\u5927\u516c\u7ea6\u6570\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'GEOMEAN': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u6b63\u6570\u6570\u7ec4\u6216\u533a\u57df\u7684\u51e0\u4f55\u5e73\u5747\u503c\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'GESTEP': functionDescription('\u8be5\u51fd\u6570\u68c0\u9a8c\u6570\u5b57\u662f\u5426\u5927\u4e8e\u9608\u503c\u3002', [
	                parameterDescription('number'),
	                parameterDescription('step')
	            ]),
	            'GROWTH': functionDescription('\u8be5\u51fd\u6570\u6839\u636e\u73b0\u6709\u7684\u6570\u636e\u9884\u6d4b\u6307\u6570\u589e\u957f\u503c\u3002\u6839\u636e\u73b0\u6709\u7684 x \u503c\u548c y \u503c\uff0cGROWTH \u51fd\u6570\u8fd4\u56de\u4e00\u7ec4\u65b0\u7684 x \u503c\u5bf9\u5e94\u7684 y \u503c\u3002', [
	                parameterDescription('y'),
	                parameterDescription('x'),
	                parameterDescription('newx'),
	                parameterDescription('constant')
	            ]),
	            'HARMEAN': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u8c03\u548c\u5e73\u5747\u503c\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'HEX2BIN': functionDescription('\u8be5\u51fd\u6570\u5c06\u5341\u516d\u8fdb\u5236\u6570\u8f6c\u6362\u4e3a\u4e8c\u8fdb\u5236\u6570\u3002', [
	                parameterDescription('number'),
	                parameterDescription(' places')
	            ]),
	            'HEX2DEC': functionDescription('\u8be5\u51fd\u6570\u5c06\u5341\u516d\u8fdb\u5236\u6570\u8f6c\u6362\u4e3a\u5341\u8fdb\u5236\u6570\u3002', [
	                parameterDescription('number')
	            ]),
	            'HEX2OCT': functionDescription('\u8be5\u51fd\u6570\u5c06\u5341\u516d\u8fdb\u5236\u6570\u8f6c\u6362\u4e3a\u516b\u8fdb\u5236\u6570\u3002', [
	                parameterDescription('number'),
	                parameterDescription(' places')
	            ]),
	            'HLOOKUP': functionDescription('\u8be5\u51fd\u6570\u67e5\u627e\u6570\u7ec4\u7684\u9996\u884c\uff0c\u5e76\u8fd4\u56de\u6307\u5b9a\u5355\u5143\u683c\u7684\u503c\u3002', [
	                parameterDescription('value'),
	                parameterDescription('array'),
	                parameterDescription('row'),
	                parameterDescription('approx')
	            ]),
	            'HOUR': functionDescription('\u8fd4\u56de\u65f6\u95f4\u503c\u7684\u5c0f\u65f6\u6570\u3002', [
	                parameterDescription('time')
	            ]),
	            'HYPGEOMDIST': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u8d85\u51e0\u4f55\u5206\u5e03\u3002 ', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('M'),
	                parameterDescription('N')
	            ]),
	            'IF': functionDescription('\u4f7f\u7528\u903b\u8f91\u51fd\u6570 IF \u51fd\u6570\u65f6\uff0c\u5982\u679c\u6761\u4ef6\u4e3a\u771f\uff0c\u8be5\u51fd\u6570\u5c06\u8fd4\u56de\u4e00\u4e2a\u503c\uff1b\u5982\u679c\u6761\u4ef6\u4e3a\u5047\uff0c\u51fd\u6570\u5c06\u8fd4\u56de\u53e6\u4e00\u4e2a\u503c\u3002', [
	                parameterDescription('valueTest'),
	                parameterDescription('valueTrue'),
	                parameterDescription('valueFalse')
	            ]),
	            'IFERROR': functionDescription('\u8be5\u51fd\u6570\u5982\u679c\u516c\u5f0f\u7684\u8ba1\u7b97\u7ed3\u679c\u9519\u8bef\uff0c\u5219\u8fd4\u56de\u60a8\u6307\u5b9a\u7684\u503c\uff1b\u5426\u5219\u8fd4\u56de\u516c\u5f0f\u7684\u7ed3\u679c\u3002', [
	                parameterDescription('value'),
	                parameterDescription('error')
	            ]),
	            'IMABS': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u590d\u6570\u7684\u7edd\u5bf9\u503c\uff08\u6a21\u6570\uff09\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMAGINARY': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u590d\u6570\u7684\u865a\u7cfb\u6570\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMARGUMENT': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u53c2\u6570 theta\uff0c\u5373\u4ee5\u5f27\u5ea6\u8868\u793a\u7684\u89d2\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCONJUGATE': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u590d\u6570\u7684\u5171\u8f6d\u590d\u6570\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCOS': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u590d\u6570\u7684\u4f59\u5f26\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMDIV': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u4e24\u4e2a\u590d\u6570\u7684\u5546\u3002', [
	                parameterDescription('complexnum'),
	                parameterDescription('complexdenom')
	            ]),
	            'IMEXP': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u590d\u6570\u7684\u6307\u6570\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMLN': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u590d\u6570\u7684\u81ea\u7136\u5bf9\u6570\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMLOG2': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u590d\u6570\u7684\u4ee5 2 \u4e3a\u5e95\u6570\u7684\u5bf9\u6570\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMLOG10': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4ee5 x + yi \u6216 x + yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u590d\u6570\u7684\u5e38\u7528\u5bf9\u6570\uff08\u4ee5 10 \u4e3a\u5e95\u6570\uff09\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMPOWER': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u590d\u6570\u7684 n \u6b21\u5e42\u3002', [
	                parameterDescription('complexnum'),
	                parameterDescription('powernum')
	            ]),
	            'IMPRODUCT': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684 1 \u81f3 29 \u4e2a\u590d\u6570\u7684\u4e58\u79ef\u3002', [
	                parameterDescription('complexnum1'),
	                parameterDescription('complexnum2', true)
	            ]),
	            'IMREAL': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u590d\u6570\u7684\u5b9e\u7cfb\u6570\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSIN': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u590d\u6570\u7684\u6b63\u5f26\u503c\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSQRT': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u590d\u6570\u7684\u5e73\u65b9\u6839\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSUB': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u4e24\u4e2a\u590d\u6570\u7684\u5dee\u3002', [
	                parameterDescription('complexnum1'),
	                parameterDescription('complexnum2')
	            ]),
	            'IMSUM': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u4e24\u4e2a\u6216\u591a\u4e2a\u590d\u6570\u7684\u548c\u3002', [
	                parameterDescription('complexnum1'),
	                parameterDescription('complexnum2', true)
	            ]),
	            'INDEX': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u8868\u683c\u6216\u533a\u57df\u4e2d\u7684\u503c\u6216\u503c\u3002', [
	                parameterDescription('return'),
	                parameterDescription('row'),
	                parameterDescription('col'),
	                parameterDescription('area')
	            ]),
	            'INDIRECT': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u7531\u6587\u672c\u5b57\u7b26\u4e32\u6307\u5b9a\u7684\u5f15\u7528\u3002', [
	                parameterDescription('ref_text'),
	                parameterDescription('a1_style')
	            ]),
	            'INT': functionDescription('\u8be5\u51fd\u6570\u5c06\u6570\u5b57\u5411\u4e0b\u820d\u5165\u5230\u6700\u63a5\u8fd1\u7684\u6574\u6570\u3002', [
	                parameterDescription('value')
	            ]),
	            'INTERCEPT': functionDescription('\u8be5\u51fd\u6570\u5229\u7528\u73b0\u6709\u7684 x \u503c\u4e0e y \u503c\u8ba1\u7b97\u5e76\u8fd4\u56de\u76f4\u7ebf\u4e0e y \u8f74\u7684\u622a\u8ddd\u3002', [
	                parameterDescription('dependent'),
	                parameterDescription('independent')
	            ]),
	            'INTRATE': functionDescription('\u8be5\u51fd\u6570\u8ba1\u7b97\u5e76\u8fd4\u56de\u4e00\u6b21\u6027\u4ed8\u606f\u8bc1\u5238\u7684\u5229\u7387\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('invest'),
	                parameterDescription('redeem'),
	                parameterDescription('basis')
	            ]),
	            'IPMT': functionDescription('\u6b64\u51fd\u6570\u57fa\u4e8e\u56fa\u5b9a\u5229\u7387\u53ca\u7b49\u989d\u5206\u671f\u4ed8\u6b3e\u65b9\u5f0f\uff0c\u8fd4\u56de\u7ed9\u5b9a\u671f\u6570\u5185\u5bf9\u6295\u8d44\u7684\u5229\u606f\u507f\u8fd8\u989d\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('per'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'IRR': functionDescription('\u8be5\u51fd\u6570\u8fd4\u56de\u7531\u6570\u503c\u4ee3\u8868\u7684\u4e00\u7ec4\u73b0\u91d1\u6d41\u7684\u5185\u90e8\u6536\u76ca\u7387\u3002', [
	                parameterDescription('arrayvals'),
	                parameterDescription('estimate')
	            ]),
	            'ISBLANK': functionDescription('\u8be5\u51fd\u6570\u68c0\u9a8c\u6307\u5b9a\u7684\u503c\uff0c\u8868\u8fbe\u5f0f\u6216\u8005\u5f15\u7528\u5355\u5143\u683c\u7684\u5185\u5bb9\u662f\u5426\u4e3a\u7a7a\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISERR': functionDescription('\u8be5\u51fd\u6570\u68c0\u9a8c\u4e00\u4e2a\u503c\uff0c\u8868\u8fbe\u5f0f\u6216\u8005\u5f15\u7528\u5355\u5143\u683c\u7684\u5185\u5bb9\u662f\u5426\u4e3a\u9664\u53bb #N/A \u7684\u4efb\u610f\u9519\u8bef\u503c\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISERROR': functionDescription('\u6b64\u51fd\u6570\u68c0\u9a8c\u4e00\u4e2a\u503c\uff0c\u8868\u8fbe\u5f0f\u6216\u8005\u5f15\u7528\u5355\u5143\u683c\u7684\u5185\u5bb9\u662f\u5426\u4e3a\u4efb\u610f\u9519\u8bef\u503c\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISEVEN': functionDescription('\u6b64\u51fd\u6570\u68c0\u9a8c\u4e00\u4e2a\u503c\uff0c\u8868\u8fbe\u5f0f\u6216\u8005\u5f15\u7528\u5355\u5143\u683c\u7684\u5185\u5bb9\u662f\u5426\u4e3a\u5076\u6570\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISLOGICAL': functionDescription('\u6b64\u51fd\u6570\u68c0\u9a8c\u4e00\u4e2a\u503c\uff0c\u8868\u8fbe\u5f0f\u6216\u8005\u5f15\u7528\u5355\u5143\u683c\u7684\u5185\u5bb9\u662f\u5426\u662f\u4e00\u4e2a\u903b\u8f91\u503c\uff08\u5e03\u5c14\u578b\u503c\uff09\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISNA': functionDescription('\u6b64\u51fd\u6570\u68c0\u9a8c\u4e00\u4e2a\u503c\uff0c\u8868\u8fbe\u5f0f\u6216\u8005\u5f15\u7528\u5355\u5143\u683c\u7684\u5185\u5bb9\u5305\u542b\u503c\u4e0d\u5b58\u5728\uff08#N/A\uff09\u9519\u8bef\u503c\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISNONTEXT': functionDescription('\u6b64\u51fd\u6570\u68c0\u9a8c\u4e00\u4e2a\u503c\uff0c\u8868\u8fbe\u5f0f\u6216\u8005\u5f15\u7528\u5355\u5143\u683c\u7684\u5185\u5bb9\u662f\u5426\u4e3a\u4e0d\u662f\u6587\u672c\u7684\u4efb\u610f\u6570\u636e\u7c7b\u578b\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISNUMBER': functionDescription('\u6b64\u51fd\u6570\u68c0\u9a8c\u4e00\u4e2a\u503c\uff0c\u8868\u8fbe\u5f0f\u6216\u8005\u5f15\u7528\u5355\u5143\u683c\u7684\u5185\u5bb9\u662f\u5426\u662f\u6570\u503c\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISODD': functionDescription('\u6b64\u51fd\u6570\u68c0\u9a8c\u4e00\u4e2a\u503c\uff0c\u8868\u8fbe\u5f0f\u6216\u8005\u5f15\u7528\u5355\u5143\u683c\u7684\u5185\u5bb9\u662f\u5426\u4e3a\u5947\u6570\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISPMT': functionDescription('\u6b64\u51fd\u6570\u8ba1\u7b97\u7279\u5b9a\u6295\u8d44\u671f\u5185\u8981\u652f\u4ed8\u7684\u5229\u606f\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('per'),
	                parameterDescription('nper'),
	                parameterDescription('pv')
	            ]),
	            'ISREF': functionDescription('\u6b64\u51fd\u6570\u68c0\u9a8c\u4e00\u4e2a\u503c\uff0c\u8868\u8fbe\u5f0f\u6216\u8005\u5f15\u7528\u5355\u5143\u683c\u7684\u5185\u5bb9\u662f\u5230\u53e6\u5916\u5355\u5143\u683c\u7684\u5f15\u7528\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'ISTEXT': functionDescription('\u6b64\u51fd\u6570\u68c0\u9a8c\u4e00\u4e2a\u503c\uff0c\u8868\u8fbe\u5f0f\u6216\u8005\u5f15\u7528\u5355\u5143\u683c\u7684\u5185\u5bb9\u662f\u5426\u662f\u6587\u672c\u578b\u6570\u636e\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'KURT': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6570\u636e\u96c6\u7684\u5cf0\u503c\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2'),
	                parameterDescription('value3'),
	                parameterDescription('value4', true)
	            ]),
	            'LARGE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6570\u636e\u96c6\u4e2d\u7b2c n \u4e2a\u6700\u5927\u503c\u3002', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'LCM': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6574\u6570\u7684\u6700\u5c0f\u516c\u500d\u6570\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'LEFT': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6587\u672c\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e00\u4e2a\u5b57\u7b26\u6216\u524d\u51e0\u4e2a\u5b57\u7b26\u3002', [
	                parameterDescription('mytext'),
	                parameterDescription('num_chars')
	            ]),
	            'LEN': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6587\u672c\u5b57\u7b26\u4e32\u4e2d\u7684\u5b57\u7b26\u6570\u3002', [
	                parameterDescription('value')
	            ]),
	            'LINEST': functionDescription('\u6b64\u51fd\u6570\u8ba1\u7b97\u4e0e\u73b0\u6709\u6570\u636e\u6700\u4f73\u62df\u5408\u7684\u76f4\u7ebf\uff0c\u6765\u8ba1\u7b97\u67d0\u76f4\u7ebf\u7684\u7edf\u8ba1\u503c\uff0c\u7136\u540e\u8fd4\u56de\u63cf\u8ff0\u6b64\u76f4\u7ebf\u7684\u6570\u7ec4\u3002', [
	                parameterDescription('y'),
	                parameterDescription('x'),
	                parameterDescription('constant'),
	                parameterDescription('stats')
	            ]),
	            'LN': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6307\u5b9a\u6570\u5b57\u7684\u81ea\u7136\u5bf9\u6570\u3002', [
	                parameterDescription('value')
	            ]),
	            'LOG': functionDescription('\u6b64\u51fd\u6570\u6309\u6240\u6307\u5b9a\u7684\u5e95\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u6570\u7684\u5bf9\u6570\u3002', [
	                parameterDescription('number'),
	                parameterDescription('base')
	            ]),
	            'LOG10': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4ee5 10 \u4e3a\u5e95\u7684\u5bf9\u6570\u3002', [
	                parameterDescription('value')
	            ]),
	            'LOGEST': functionDescription('\u6b64\u51fd\u6570\u5728\u56de\u5f52\u5206\u6790\u4e2d\uff0c\u8ba1\u7b97\u6700\u7b26\u5408\u6570\u636e\u7684\u6307\u6570\u56de\u5f52\u62df\u5408\u66f2\u7ebf\uff0c\u5e76\u8fd4\u56de\u63cf\u8ff0\u8be5\u66f2\u7ebf\u7684\u6570\u503c\u6570\u7ec4\u3002', [
	                parameterDescription('y'),
	                parameterDescription('x'),
	                parameterDescription('constant'),
	                parameterDescription('stats')
	            ]),
	            'LOGINV': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de x \u7684\u5bf9\u6570\u7d2f\u79ef\u5206\u5e03\u51fd\u6570\u7684\u53cd\u51fd\u6570\uff0c\u6b64\u5904\u7684 LN(x) \u662f\u542b\u6709 mean \u4e0e stdev \u53c2\u6570\u7684\u6b63\u6001\u5206\u5e03\u3002', [
	                parameterDescription('prob'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'LOGNORMDIST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de x \u7684\u5bf9\u6570\u7d2f\u79ef\u5206\u5e03\u51fd\u6570\uff0c\u5176\u4e2d ln(x) \u662f\u670d\u4ece\u53c2\u6570 mean \u548c stdev \u7684\u6b63\u6001\u5206\u5e03\u3002\u4f7f\u7528\u6b64\u51fd\u6570\u53ef\u4ee5\u5206\u6790\u7ecf\u8fc7\u5bf9\u6570\u53d8\u6362\u7684\u6570\u636e\u3002', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'LOOKUP': functionDescription('\u6b64\u51fd\u6570\u53ef\u4ece\u5355\u884c\u6216\u5355\u5217\u533a\u57df\u6216\u8005\u4ece\u4e00\u4e2a\u6570\u7ec4\u8fd4\u56de\u503c\u3002LOOKUP \u51fd\u6570\u5177\u6709\u4e24\u79cd\u8bed\u6cd5\u5f62\u5f0f\uff1a\u5411\u91cf\u5f62\u5f0f\u548c\u6570\u7ec4\u5f62\u5f0f\u3002', [
	                parameterDescription('lookupvalue'),
	                parameterDescription('lookupvector'),
	                parameterDescription('resultvector')
	            ]),
	            'LOWER': functionDescription('\u6b64\u51fd\u6570\u5c06\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\u4e2d\u7684\u6240\u6709\u5927\u5199\u5b57\u6bcd\u8f6c\u6362\u4e3a\u5c0f\u5199\u5b57\u6bcd\u3002', [
	                parameterDescription('string')
	            ]),
	            'MATCH': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6307\u5b9a\u503c\u5728\u5355\u5143\u683c\u533a\u57df\u4e2d\u7684\u76f8\u5bf9\u4f4d\u7f6e\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('array'),
	                parameterDescription('type')
	            ]),
	            'MAX': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u7ec4\u503c\u4e2d\u7684\u6700\u5927\u503c\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MAXA': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u53c2\u6570\u5217\u8868\u4e2d\u7684\u6700\u5927\u503c\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MDETERM': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\u7684\u77e9\u9635\u884c\u5217\u5f0f\u7684\u503c\u3002', [
	                parameterDescription('array')
	            ]),
	            'MDURATION': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5047\u8bbe\u9762\u503c \uffe5100 \u7684\u6709\u4ef7\u8bc1\u5238\u7684 Macauley \u4fee\u6b63\u671f\u9650\u3002', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('coupon'),
	                parameterDescription('yield'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'MEDIAN': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u7ed9\u5b9a\u6570\u503c\u7684\u4e2d\u503c\u3002\u4e2d\u503c\u662f\u5728\u4e00\u7ec4\u6570\u503c\u4e2d\u5c45\u4e8e\u4e2d\u95f4\u7684\u6570\u503c\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MID': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6587\u672c\u5b57\u7b26\u4e32\u4e2d\u4ece\u6307\u5b9a\u4f4d\u7f6e\u5f00\u59cb\u7684\u7279\u5b9a\u6570\u76ee\u7684\u5b57\u7b26\uff0c\u8be5\u6570\u76ee\u7531\u7528\u6237\u6307\u5b9a\u3002', [
	                parameterDescription('text'),
	                parameterDescription('start_num'),
	                parameterDescription('num_chars')
	            ]),
	            'MIN': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u7ec4\u503c\u4e2d\u7684\u6700\u5c0f\u503c\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MINA': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u7ec4\u5305\u542b\u6587\u672c\u548c\u903b\u8f91\u503c\u7684\u503c\u4e2d\u7684\u6700\u5c0f\u503c\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MINUTE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u65f6\u95f4\u503c\u4e2d\u7684\u5206\u949f\u3002\u4e3a\u4e00\u4e2a\u4ecb\u4e8e 0 \u5230 59 \u4e4b\u95f4\u7684\u6574\u6570\u3002', [
	                parameterDescription('time')
	            ]),
	            'MINVERSE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6570\u7ec4\u4e2d\u5b58\u50a8\u7684\u77e9\u9635\u7684\u9006\u8ddd\u9635\u3002', [
	                parameterDescription('array')
	            ]),
	            'MIRR': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u67d0\u4e00\u8fde\u7eed\u671f\u95f4\u5185\u73b0\u91d1\u6d41\u7684\u4fee\u6b63\u5185\u90e8\u6536\u76ca\u7387\u3002 \u51fd\u6570 MIRR \u540c\u65f6\u8003\u8651\u4e86\u6295\u8d44\u7684\u6210\u672c\u548c\u73b0\u91d1\u518d\u6295\u8d44\u7684\u6536\u76ca\u7387\u3002', [
	                parameterDescription('arrayvals'),
	                parameterDescription('payment_int'),
	                parameterDescription('income_int')
	            ]),
	            'MMULT': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e24\u4e2a\u6570\u7ec4\u7684\u77e9\u9635\u4e58\u79ef\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'MOD': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e24\u6570\u76f8\u9664\u7684\u4f59\u6570\u3002', [
	                parameterDescription('dividend'),
	                parameterDescription('divisor')
	            ]),
	            'MODE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5728\u67d0\u4e00\u6570\u7ec4\u6216\u6570\u636e\u533a\u57df\u4e2d\u51fa\u73b0\u9891\u7387\u6700\u591a\u7684\u6570\u503c\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MONTH': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4ee5\u5e8f\u5217\u53f7\u8868\u793a\u7684\u65e5\u671f\u4e2d\u7684\u6708\u4efd\u3002', [
	                parameterDescription('date')
	            ]),
	            'MROUND': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u53c2\u6570\u6309\u6307\u5b9a\u57fa\u6570\u820d\u5165\u540e\u7684\u6570\u503c\u3002', [
	                parameterDescription('number'),
	                parameterDescription('multiple')
	            ]),
	            'MULTINOMIAL': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u53c2\u6570\u548c\u7684\u9636\u4e58\u4e0e\u5404\u53c2\u6570\u9636\u4e58\u4e58\u79ef\u7684\u6bd4\u503c\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'N': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u8f6c\u5316\u4e3a\u6570\u503c\u540e\u7684\u503c\u3002', [
	                parameterDescription('value')
	            ]),
	            'NA': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u9519\u8bef\u503c #N/A\u3002\u9519\u8bef\u503c #N/A \u8868\u793a\u201c\u65e0\u6cd5\u5f97\u5230\u6709\u6548\u503c\u201d\u3002', []),
	            'NEGBINOMDIST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u8d1f\u4e8c\u9879\u5f0f\u5206\u5e03\u3002', [
	                parameterDescription('x'),
	                parameterDescription('r'),
	                parameterDescription('p')
	            ]),
	            'NETWORKDAYS': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u53c2\u6570\u5f00\u59cb\u65e5\u671f\u548c\u7ed3\u675f\u65e5\u671f\u4e4b\u95f4\u5b8c\u6574\u7684\u5de5\u4f5c\u65e5\u6570\u503c\u3002 \u5de5\u4f5c\u65e5\u4e0d\u5305\u62ec\u5468\u672b\u548c\u4e13\u95e8\u6307\u5b9a\u7684\u5047\u671f\u3002', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate'),
	                parameterDescription('holidays')
	            ]),
	            'NOMINAL': functionDescription('\u6b64\u51fd\u6570\u57fa\u4e8e\u7ed9\u5b9a\u7684\u5b9e\u9645\u5229\u7387\u548c\u5e74\u590d\u5229\u671f\u6570\uff0c\u8fd4\u56de\u540d\u4e49\u5e74\u5229\u7387\u3002', [
	                parameterDescription('effrate'),
	                parameterDescription('comper')
	            ]),
	            'NORMDIST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6307\u5b9a\u5e73\u5747\u503c\u548c\u6807\u51c6\u504f\u5dee\u7684\u6b63\u6001\u5206\u5e03\u51fd\u6570\u3002 \u6b64\u51fd\u6570\u5728\u7edf\u8ba1\u65b9\u9762\u5e94\u7528\u8303\u56f4\u5e7f\u6cdb\uff08\u5305\u62ec\u5047\u8bbe\u68c0\u9a8c\uff09\u3002', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev'),
	                parameterDescription('cumulative')
	            ]),
	            'NORMINV': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6307\u5b9a\u5e73\u5747\u503c\u548c\u6807\u51c6\u504f\u5dee\u7684\u6b63\u6001\u7d2f\u79ef\u5206\u5e03\u51fd\u6570\u7684\u53cd\u51fd\u6570\u3002', [
	                parameterDescription('prob'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'NORMSDIST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6807\u51c6\u6b63\u6001\u7d2f\u79ef\u5206\u5e03\u51fd\u6570\u3002', [
	                parameterDescription('value')
	            ]),
	            'NORMSINV': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6807\u51c6\u6b63\u6001\u7d2f\u79ef\u5206\u5e03\u51fd\u6570\u7684\u53cd\u51fd\u6570\u3002\u8be5\u5206\u5e03\u7684\u5e73\u5747\u503c\u4e3a 0\uff0c\u6807\u51c6\u504f\u5dee\u4e3a 1\u3002', [
	                parameterDescription('prob')
	            ]),
	            'NOT': functionDescription('\u6b64\u51fd\u6570\u5bf9\u53c2\u6570\u503c\u6c42\u53cd\u3002\u5f53\u8981\u786e\u4fdd\u4e00\u4e2a\u503c\u4e0d\u7b49\u4e8e\u67d0\u4e00\u7279\u5b9a\u503c\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 NOT \u51fd\u6570\u3002', [
	                parameterDescription('value')
	            ]),
	            'NOW': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5f53\u524d\u7684\u65e5\u671f\u548c\u65f6\u95f4\u3002', []),
	            'NPER': functionDescription('\u6b64\u51fd\u6570\u57fa\u4e8e\u56fa\u5b9a\u5229\u7387\u53ca\u7b49\u989d\u5206\u671f\u4ed8\u6b3e\u65b9\u5f0f\uff0c\u8fd4\u56de\u67d0\u9879\u6295\u8d44\u7684\u603b\u671f\u6570\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('paymt'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'NPV': functionDescription('\u6b64\u51fd\u6570\u901a\u8fc7\u4f7f\u7528\u8d34\u73b0\u7387\u4ee5\u53ca\u4e00\u7cfb\u5217\u672a\u6765\u652f\u51fa\uff08\u8d1f\u503c\uff09\u548c\u6536\u5165\uff08\u6b63\u503c\uff09\uff0c\u8fd4\u56de\u4e00\u9879\u6295\u8d44\u7684\u51c0\u73b0\u503c\u3002', [
	                parameterDescription('discount'),
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'OCT2BIN': functionDescription('\u6b64\u51fd\u6570\u5c06\u516b\u8fdb\u5236\u6570\u8f6c\u6362\u4e3a\u4e8c\u8fdb\u5236\u6570\u3002', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'OCT2DEC': functionDescription('\u6b64\u51fd\u6570\u5c06\u516b\u8fdb\u5236\u6570\u8f6c\u6362\u4e3a\u5341\u8fdb\u5236\u6570\u3002', [
	                parameterDescription('number')
	            ]),
	            'OCT2HEX': functionDescription('\u6b64\u51fd\u6570\u5c06\u516b\u8fdb\u5236\u6570\u8f6c\u6362\u4e3a\u5341\u516d\u8fdb\u5236\u6570\u3002', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'ODD': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5bf9\u6307\u5b9a\u6570\u503c\u8fdb\u884c\u5411\u4e0a\u820d\u5165\u540e\u7684\u5947\u6570\u3002', [
	                parameterDescription('value')
	            ]),
	            'ODDFPRICE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u9996\u671f\u4ed8\u606f\u65e5\u4e0d\u56fa\u5b9a\uff08\u957f\u671f\u6216\u77ed\u671f\uff09\u7684\u9762\u503c \uffe5100 \u7684\u6709\u4ef7\u8bc1\u5238\u4ef7\u683c\u3002', [
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
	            'ODDFYIELD': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u9996\u671f\u4ed8\u606f\u65e5\u4e0d\u56fa\u5b9a\u7684\u6709\u4ef7\u8bc1\u5238\uff08\u957f\u671f\u6216\u77ed\u671f\uff09\u7684\u6536\u76ca\u7387\u3002', [
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
	            'ODDLPRICE': functionDescription('T\u6b64\u51fd\u6570\u8fd4\u56de\u672b\u671f\u4ed8\u606f\u65e5\u4e0d\u56fa\u5b9a\u7684\u9762\u503c \uffe5100 \u7684\u6709\u4ef7\u8bc1\u5238\uff08\u957f\u671f\u6216\u77ed\u671f\uff09\u7684\u4ef7\u683c\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('last'),
	                parameterDescription('rate'),
	                parameterDescription('yield'),
	                parameterDescription('redeem'),
	                parameterDescription('freq'),
	                parameterDescription('basis')
	            ]),
	            'ODDLYIELD': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u672b\u671f\u4ed8\u606f\u65e5\u4e0d\u56fa\u5b9a\u7684\u6709\u4ef7\u8bc1\u5238\uff08\u957f\u671f\u6216\u77ed\u671f\uff09\u7684\u6536\u76ca\u7387\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('last'),
	                parameterDescription('rate'),
	                parameterDescription('price'),
	                parameterDescription('redeem'),
	                parameterDescription('freq'),
	                parameterDescription('basis')
	            ]),
	            'OFFSET': functionDescription('\u6b64\u51fd\u6570\u4ee5\u6307\u5b9a\u7684\u5f15\u7528\u4e3a\u53c2\u7167\u7cfb\uff0c\u901a\u8fc7\u7ed9\u5b9a\u504f\u79fb\u91cf\u5f97\u5230\u65b0\u7684\u5f15\u7528\u3002 \u8fd4\u56de\u7684\u5f15\u7528\u53ef\u4ee5\u4e3a\u4e00\u4e2a\u5355\u5143\u683c\u6216\u5355\u5143\u683c\u533a\u57df\u3002\u5e76\u53ef\u4ee5\u6307\u5b9a\u8fd4\u56de\u7684\u884c\u6570\u6216\u5217\u6570\u3002', [
	                parameterDescription('reference'),
	                parameterDescription('rows'),
	                parameterDescription('cols'),
	                parameterDescription('height'),
	                parameterDescription('width')
	            ]),
	            'OR': functionDescription('\u6b64\u51fd\u6570\u5728\u5176\u53c2\u6570\u7ec4\u4e2d\uff0c\u4efb\u4f55\u4e00\u4e2a\u53c2\u6570\u903b\u8f91\u503c\u4e3a TRUE\uff0c\u5373\u8fd4\u56de TRUE\uff1b \u4efb\u4f55\u4e00\u4e2a\u53c2\u6570\u7684\u903b\u8f91\u503c\u4e3a FALSE\uff0c\u5373\u8fd4\u56de FALSE\u3002', [
	                parameterDescription('argument1'),
	                parameterDescription('argument2...')
	            ]),
	            'PEARSON': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de Pearson\uff08\u76ae\u5c14\u751f\uff09\u4e58\u79ef\u77e9\u76f8\u5173\u7cfb\u6570 r\uff0c\u8fd9\u662f\u4e00\u4e2a\u8303\u56f4\u5728 -1.0 \u5230 1.0 \u4e4b\u95f4\uff08\u5305\u62ec -1.0 \u548c 1.0 \u5728\u5185\uff09\u7684\u65e0\u91cf\u7eb2\u6307\u6570\uff0c\u53cd\u6620\u4e86\u4e24\u4e2a\u6570\u636e\u96c6\u5408\u4e4b\u95f4\u7684\u7ebf\u6027\u76f8\u5173\u7a0b\u5ea6\u3002 ', [
	                parameterDescription('array_ind'),
	                parameterDescription('array_dep')
	            ]),
	            'PERCENTILE': functionDescription('\u6b64\u51fd\u6570 \u8fd4\u56de\u533a\u57df\u4e2d\u6570\u503c\u7684\u7b2c n \u4e2a\u767e\u5206\u70b9\u7684\u503c\u3002', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'PERCENTRANK': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u7279\u5b9a\u6570\u503c\u5728\u4e00\u4e2a\u6570\u636e\u96c6\u4e2d\u7684\u767e\u5206\u6bd4\u6392\u4f4d\u3002', [
	                parameterDescription('array'),
	                parameterDescription('n'),
	                parameterDescription('sigdig')
	            ]),
	            'PERMUT': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4ece\u7ed9\u5b9a\u6570\u76ee\u7684\u5bf9\u8c61\u96c6\u5408\u4e2d\u9009\u53d6\u7684\u82e5\u5e72\u5bf9\u8c61\u7684\u6392\u5217\u6570\u3002', [
	                parameterDescription('k'),
	                parameterDescription('n')
	            ]),
	            'PI': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de PI \u503c 3.1415926536\u3002', []),
	            'PMT': functionDescription('\u6b64\u51fd\u6570\u57fa\u4e8e\u56fa\u5b9a\u5229\u7387\u53ca\u7b49\u989d\u5206\u671f\u4ed8\u6b3e\u65b9\u5f0f\uff0c\u8fd4\u56de\u8d37\u6b3e\u7684\u6bcf\u671f\u4ed8\u6b3e\u989d\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'POISSON': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6cca\u677e\u5206\u5e03\u3002', [
	                parameterDescription('nevents'),
	                parameterDescription('mean'),
	                parameterDescription('cumulative')
	            ]),
	            'POWER': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u7ed9\u5b9a\u6570\u5b57\u7684\u4e58\u5e42\u3002', [
	                parameterDescription('number'),
	                parameterDescription('power')
	            ]),
	            'PPMT': functionDescription('\u6b64\u51fd\u6570\u57fa\u4e8e\u56fa\u5b9a\u5229\u7387\u53ca\u7b49\u989d\u5206\u671f\u4ed8\u6b3e\u65b9\u5f0f\uff0c\u8fd4\u56de\u6295\u8d44\u5728\u67d0\u4e00\u7ed9\u5b9a\u671f\u95f4\u5185\u7684\u672c\u91d1\u507f\u8fd8\u989d\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('per'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'PRICE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5b9a\u671f\u4ed8\u606f\u7684\u9762\u503c \uffe5100 \u7684\u6709\u4ef7\u8bc1\u5238\u7684\u4ef7\u683c\u3002', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('rate'),
	                parameterDescription('yield'),
	                parameterDescription('redeem'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'PRICEDISC': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6298\u4ef7\u53d1\u884c\u7684\u9762\u503c \uffe5100 \u7684\u6709\u4ef7\u8bc1\u5238\u7684\u4ef7\u683c\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('discount'),
	                parameterDescription('redeem'),
	                parameterDescription('basis')
	            ]),
	            'PRICEMAT': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5230\u671f\u4ed8\u606f\u7684\u9762\u503c \uffe5100 \u7684\u6709\u4ef7\u8bc1\u5238\u7684\u4ef7\u683c\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('issue'),
	                parameterDescription('rate'),
	                parameterDescription('yield'),
	                parameterDescription('basis')
	            ]),
	            'PROB': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u533a\u57df\u4e2d\u7684\u6570\u503c\u843d\u5728\u6307\u5b9a\u533a\u95f4\u5185\u7684\u6982\u7387\u3002', [
	                parameterDescription('array'),
	                parameterDescription('probs'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'PRODUCT': functionDescription('\u6b64\u51fd\u6570\u53ef\u8ba1\u7b97\u7528\u4f5c\u53c2\u6570\u7684\u6240\u6709\u6570\u5b57\u7684\u4e58\u79ef\uff0c\u7136\u540e\u8fd4\u56de\u4e58\u79ef\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'PROPER': functionDescription('\u6b64\u51fd\u6570\u5c06\u6587\u672c\u5b57\u7b26\u4e32\u7684\u9996\u5b57\u6bcd\u53ca\u4efb\u4f55\u975e\u5b57\u6bcd\u5b57\u7b26\u4e4b\u540e\u7684\u9996\u5b57\u6bcd\u8f6c\u6362\u6210\u5927\u5199\u3002', [
	                parameterDescription('text')
	            ]),
	            'PV': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6295\u8d44\u7684\u73b0\u503c\u3002\u73b0\u503c\u4e3a\u4e00\u7cfb\u5217\u672a\u6765\u4ed8\u6b3e\u7684\u5f53\u524d\u503c\u7684\u7d2f\u79ef\u548c\u3002\u4f8b\u5982\uff0c\u501f\u5165\u65b9\u7684\u501f\u5165\u6b3e\u5373\u4e3a\u8d37\u51fa\u65b9\u8d37\u6b3e\u7684\u73b0\u503c\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('numper'),
	                parameterDescription('paymt'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'QUARTILE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6570\u636e\u96c6\u7684\u56db\u5206\u4f4d\u6570\u3002', [
	                parameterDescription('array'),
	                parameterDescription('quart')
	            ]),
	            'QUOTIENT': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5546\u7684\u6574\u6570\u90e8\u5206\uff0c\u8be5\u51fd\u6570\u53ef\u7528\u4e8e\u820d\u6389\u5546\u7684\u5c0f\u6570\u90e8\u5206\u3002', [
	                parameterDescription('numerator'),
	                parameterDescription('denominator')
	            ]),
	            'RADIANS': functionDescription('\u6b64\u51fd\u6570\u5c06\u89d2\u5ea6\u8f6c\u6362\u4e3a\u5f27\u5ea6\u3002', [
	                parameterDescription('value')
	            ]),
	            'RAND': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5927\u4e8e\u7b49\u4e8e 0 \u53ca\u5c0f\u4e8e 1 \u7684\u5747\u5300\u5206\u5e03\u968f\u673a\u5b9e\u6570\u3002', []),
	            'RANDBETWEEN': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4f4d\u4e8e\u6307\u5b9a\u7684\u4e24\u4e2a\u6570\u4e4b\u95f4\u7684\u4e00\u4e2a\u968f\u673a\u6574\u6570\u3002', [
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'RANK': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\u5728\u6570\u5b57\u5217\u8868\u4e2d\u7684\u6392\u4f4d\u3002\u6570\u5b57\u7684\u6392\u4f4d\u662f\u5176\u5927\u5c0f\u4e0e\u5217\u8868\u4e2d\u5176\u4ed6\u503c\u7684\u6bd4\u503c\uff08\u5982\u679c\u5217\u8868\u5df2\u6392\u8fc7\u5e8f\uff0c\u5219\u6570\u5b57\u7684\u6392\u4f4d\u5c31\u662f\u5b83\u5f53\u524d\u7684\u4f4d\u7f6e\uff09\u3002', [
	                parameterDescription('number'),
	                parameterDescription('array'),
	                parameterDescription('order')
	            ]),
	            'RATE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5e74\u91d1\u7684\u5404\u671f\u5229\u7387\u3002', [
	                parameterDescription('nper'),
	                parameterDescription('pmt'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type'),
	                parameterDescription('guess')
	            ]),
	            'RECEIVED': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u6b21\u6027\u4ed8\u606f\u7684\u6709\u4ef7\u8bc1\u5238\u5230\u671f\u6536\u56de\u7684\u91d1\u989d\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('invest'),
	                parameterDescription('discount'),
	                parameterDescription('basis')
	            ]),
	            'REPLACE': functionDescription('\u6b64\u51fd\u6570\u4f7f\u7528\u5176\u4ed6\u6587\u672c\u5b57\u7b26\u4e32\u5e76\u6839\u636e\u6240\u6307\u5b9a\u7684\u5b57\u7b26\u6570\u66ff\u6362\u67d0\u6587\u672c\u5b57\u7b26\u4e32\u4e2d\u7684\u90e8\u5206\u6587\u672c\u3002', [
	                parameterDescription('old_text'),
	                parameterDescription('start_char'),
	                parameterDescription('num_chars'),
	                parameterDescription('new_text')
	            ]),
	            'REPT': functionDescription('\u6b64\u51fd\u6570\u6309\u7167\u7ed9\u5b9a\u7684\u6b21\u6570\u91cd\u590d\u663e\u793a\u6587\u672c\u3002', [
	                parameterDescription('text'),
	                parameterDescription('number')
	            ]),
	            'RIGHT': functionDescription('\u6b64\u51fd\u6570\u6839\u636e\u6240\u6307\u5b9a\u7684\u5b57\u7b26\u6570\u8fd4\u56de\u6587\u672c\u5b57\u7b26\u4e32\u4e2d\u6700\u540e\u4e00\u4e2a\u6216\u591a\u4e2a\u5b57\u7b26\u3002', [
	                parameterDescription('text'),
	                parameterDescription('num_chars')
	            ]),
	            'ROMAN': functionDescription('\u6b64\u51fd\u6570\u5c06\u963f\u62c9\u4f2f\u6570\u5b57\u8f6c\u6362\u4e3a\u5176\u7b49\u4ef7\u7684\u6587\u672c\u5f62\u5f0f\u7684\u7f57\u9a6c\u6570\u5b57\u3002', [
	                parameterDescription('number'),
	                parameterDescription('style')
	            ]),
	            'ROUND': functionDescription('\u6b64\u51fd\u6570\u53ef\u5c06\u67d0\u4e2a\u6570\u5b57\u56db\u820d\u4e94\u5165\u4e3a\u6307\u5b9a\u7684\u4f4d\u6570\u3002', [
	                parameterDescription('value'),
	                parameterDescription('places')
	            ]),
	            'ROUNDDOWN': functionDescription('\u6b64\u51fd\u6570\u9760\u8fd1\u96f6\u503c\uff0c\u5411\u4e0b\uff08\u7edd\u5bf9\u503c\u51cf\u5c0f\u7684\u65b9\u5411\uff09\u820d\u5165\u6570\u5b57\u3002', [
	                parameterDescription('value'),
	                parameterDescription('places')
	            ]),
	            'ROUNDUP': functionDescription('\u6b64\u51fd\u6570\u8fdc\u79bb\u96f6\u503c\uff0c\u5411\u4e0a\u820d\u5165\u6570\u5b57\u3002', [
	                parameterDescription('value'),
	                parameterDescription('places')
	            ]),
	            'ROW': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5f15\u7528\u7684\u884c\u53f7\u3002', [
	                parameterDescription('reference')
	            ]),
	            'ROWS': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5f15\u7528\u6216\u6570\u7ec4\u7684\u884c\u6570\u3002', [
	                parameterDescription('array')
	            ]),
	            'RSQ': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6839\u636e y s \u548c x s \u4e2d\u6570\u636e\u70b9\u8ba1\u7b97\u5f97\u51fa\u7684 Pearson \u4e58\u79ef\u77e9\u76f8\u5173\u7cfb\u6570\u7684\u5e73\u65b9\u3002', [
	                parameterDescription('array_dep'),
	                parameterDescription('array_ind')
	            ]),
	            'SEARCH': functionDescription('\u6b64\u51fd\u6570\u5728\u4e00\u4e2a\u6587\u672c\u503c\u4e2d\u67e5\u627e\u53e6\u4e00\u4e2a\u6587\u672c\u503c\u5e76\u8fd4\u56de\u7b2c\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\u7684\u8d77\u59cb\u4f4d\u7f6e\u7684\u7f16\u53f7\uff0c\u8be5\u7f16\u53f7\u4ece\u7b2c\u4e8c\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u7b97\u8d77\u3002', [
	                parameterDescription('string1'),
	                parameterDescription('string2')
	            ]),
	            'SECOND': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u65f6\u95f4\u503c\u7684\u79d2\u6570\u3002\u8fd4\u56de\u7684\u79d2\u6570\u4e3a 0 \u5230 59 \u4e4b\u95f4\u7684\u6574\u6570\u3002', [
	                parameterDescription('time')
	            ]),
	            'SERIESSUM': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5e42\u7ea7\u6570\u4e4b\u548c\u3002', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('m'),
	                parameterDescription('coeff')
	            ]),
	            'SIGN': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6570\u5b57\u7684\u7b26\u53f7\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'SIN': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u7ed9\u5b9a\u89d2\u5ea6\u7684\u6b63\u5f26\u503c\u3002', [
	                parameterDescription('angle')
	            ]),
	            'SINH': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u67d0\u4e00\u6570\u5b57\u7684\u53cc\u66f2\u6b63\u5f26\u503c\u3002', [
	                parameterDescription('value')
	            ]),
	            'SKEW': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5206\u5e03\u7684\u4e0d\u5bf9\u79f0\u5ea6\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'SLN': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u67d0\u9879\u8d44\u4ea7\u5728\u4e00\u4e2a\u671f\u95f4\u4e2d\u7684\u7ebf\u6027\u6298\u65e7\u503c\u3002', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life')
	            ]),
	            'SLOPE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6839\u636e array_dep \u548c array_ind \u4e2d\u7684\u6570\u636e\u70b9\u62df\u5408\u7684\u7ebf\u6027\u56de\u5f52\u76f4\u7ebf\u7684\u659c\u7387\u3002', [
	                parameterDescription('array_dep'),
	                parameterDescription('array_ind')
	            ]),
	            'SMALL': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6570\u636e\u96c6\u4e2d\u7b2c n \u4e2a\u6700\u5c0f\u503c\u3002', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'SQRT': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6b63\u5e73\u65b9\u6839\u3002', [
	                parameterDescription('value')
	            ]),
	            'SQRTPI': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u67d0\u6570\u4e0e pi \u7684\u4e58\u79ef\u7684\u5e73\u65b9\u6839\u3002', [
	                parameterDescription('multiple')
	            ]),
	            'STANDARDIZE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4ee5 mean \u4e3a\u5e73\u5747\u503c\uff0c\u4ee5 stdev \u4e3a\u6807\u51c6\u504f\u5dee\u7684\u5206\u5e03\u7684\u6b63\u6001\u5316\u6570\u503c\u3002', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'STDEVA': functionDescription('\u6b64\u51fd\u6570\u57fa\u4e8e\u6837\u672c\uff08\u5305\u62ec\u6570\u5b57\u3001\u6587\u672c\u548c\u903b\u8f91\u503c\uff09\u4f30\u7b97\u6807\u51c6\u504f\u5dee\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'STDEVP': functionDescription('\u6b64\u51fd\u6570\u57fa\u4e8e\u6574\u4e2a\u6837\u672c\u603b\u4f53\u8ba1\u7b97\u6807\u51c6\u504f\u5dee\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'STDEVPA': functionDescription('\u6b64\u51fd\u6570\u57fa\u4e8e\u603b\u4f53\uff08\u5305\u62ec\u6570\u5b57\u3001\u6587\u672c\u548c\u903b\u8f91\u503c\uff09\u8ba1\u7b97\u6807\u51c6\u504f\u5dee\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'STEYX': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u901a\u8fc7\u7ebf\u6027\u56de\u5f52\u6cd5\u8ba1\u7b97\u6bcf\u4e2a x \u7684 y \u9884\u6d4b\u503c\u65f6\u6240\u4ea7\u751f\u7684\u6807\u51c6\u8bef\u5dee\u3002 \u6807\u51c6\u8bef\u5dee\u7528\u6765\u5ea6\u91cf\u6839\u636e\u5355\u4e2a x \u53d8\u91cf\u8ba1\u7b97\u51fa\u7684 y \u9884\u6d4b\u503c\u7684\u8bef\u5dee\u91cf\u3002', [
	                parameterDescription('array_dep'),
	                parameterDescription('array_ind')
	            ]),
	            'SUBSTITUTE': functionDescription('\u6b64\u51fd\u6570\u5728\u6587\u672c\u5b57\u7b26\u4e32\u4e2d\u7528\u65b0\u6587\u672c\u66ff\u6362\u65e7\u6587\u672c\u3002', [
	                parameterDescription('text'),
	                parameterDescription('old_piece'),
	                parameterDescription('new_piece'),
	                parameterDescription('instance')
	            ]),
	            'SUBTOTAL': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5217\u8868\u6216\u6570\u636e\u5e93\u4e2d\u7684\u5206\u7c7b\u6c47\u603b\u3002', [
	                parameterDescription('functioncode'),
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'SUM': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u67d0\u4e00\u5355\u5143\u683c\u533a\u57df\u4e2d\u6240\u6709\u6570\u5b57\u4e4b\u548c\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'SUMIF': functionDescription('\u6b64\u51fd\u6570\u6309\u7ed9\u5b9a\u6761\u4ef6\u5bf9\u6307\u5b9a\u5355\u5143\u683c\u6c42\u548c\u3002', [
	                parameterDescription('array'),
	                parameterDescription('condition'),
	                parameterDescription('sumrange')
	            ]),
	            'SUMIFS': functionDescription('\u6b64\u51fd\u6570\u5bf9\u533a\u57df\u4e2d\u6ee1\u8db3\u591a\u4e2a\u6761\u4ef6\u7684\u5355\u5143\u683c\u6c42\u548c\u3002', [
	                parameterDescription('array'),
	                parameterDescription('conditionarray'),
	                parameterDescription('condition', true)
	            ]),
	            'SUMPRODUCT': functionDescription('\u6b64\u51fd\u6570\u5728\u7ed9\u5b9a\u7684\u51e0\u7ec4\u6570\u7ec4\u4e2d\uff0c\u5c06\u6570\u7ec4\u95f4\u5bf9\u5e94\u7684\u5143\u7d20\u76f8\u4e58\uff0c\u5e76\u8fd4\u56de\u4e58\u79ef\u4e4b\u548c\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2', true)
	            ]),
	            'SUMSQ': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u53c2\u6570\u7684\u5e73\u65b9\u548c\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'SUMX2MY2': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e24\u6570\u7ec4\u4e2d\u5bf9\u5e94\u6570\u503c\u7684\u5e73\u65b9\u5dee\u4e4b\u548c\u3002', [
	                parameterDescription('array_x'),
	                parameterDescription('array_y')
	            ]),
	            'SUMX2PY2': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e24\u6570\u7ec4\u4e2d\u5bf9\u5e94\u6570\u503c\u7684\u5e73\u65b9\u548c\u4e4b\u548c\u3002', [
	                parameterDescription('array_x'),
	                parameterDescription('array_y')
	            ]),
	            'SUMXMY2': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e24\u6570\u7ec4\u4e2d\u5bf9\u5e94\u6570\u503c\u4e4b\u5dee\u7684\u5e73\u65b9\u548c\u3002', [
	                parameterDescription('array_x'),
	                parameterDescription('array_y')
	            ]),
	            'SYD': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u67d0\u9879\u8d44\u4ea7\u6309\u5e74\u9650\u603b\u548c\u6298\u65e7\u6cd5\u8ba1\u7b97\u7684\u6307\u5b9a\u671f\u95f4\u7684\u6298\u65e7\u503c\u3002', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life'),
	                parameterDescription('period')
	            ]),
	            'T': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6307\u5b9a\u5355\u5143\u683c\u7684\u6587\u672c\u3002', [
	                parameterDescription('value')
	            ]),
	            'TAN': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u7ed9\u5b9a\u89d2\u5ea6\u7684\u6b63\u5207\u503c\u3002', [
	                parameterDescription('angle')
	            ]),
	            'TANH': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u67d0\u4e00\u6570\u5b57\u7684\u53cc\u66f2\u6b63\u5207\u3002', [
	                parameterDescription('value')
	            ]),
	            'TBILLEQ': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u56fd\u5e93\u5238\u7684\u7b49\u6548\u6536\u76ca\u7387\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('discount')
	            ]),
	            'TBILLPRICE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u9762\u503c \uffe5100 \u7684\u56fd\u5e93\u5238\u7684\u4ef7\u683c\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('discount')
	            ]),
	            'TBILLYIELD': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u56fd\u5e93\u5238\u7684\u6536\u76ca\u7387\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('priceper')
	            ]),
	            'TDIST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de t \u5206\u5e03\u7684\u767e\u5206\u70b9\uff08\u6982\u7387\uff09\u3002', [
	                parameterDescription('x'),
	                parameterDescription('deg'),
	                parameterDescription('tails')
	            ]),
	            'TEXT': functionDescription('\u6b64\u51fd\u6570\u683c\u5f0f\u5316\u4e00\u4e2a\u6570\u503c\u5e76\u5c06\u5176\u8f6c\u6362\u6210\u6587\u672c\u3002', [
	                parameterDescription('value'),
	                parameterDescription('text')
	            ]),
	            'TIME': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6307\u5b9a\u65f6\u95f4\u7684\u65f6\u95f4\u95f4\u9694\u5bf9\u8c61\u3002', [
	                parameterDescription('hour'),
	                parameterDescription('minutes'),
	                parameterDescription('seconds')
	            ]),
	            'TIMEVALUE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u7531\u6587\u672c\u5b57\u7b26\u4e32\u6240\u4ee3\u8868\u7684\u65f6\u95f4\u7684\u65f6\u95f4\u95f4\u9694\u5bf9\u8c61\u503c\u3002', [
	                parameterDescription('time_string')
	            ]),
	            'TINV': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4f5c\u4e3a\u6982\u7387\u548c\u81ea\u7531\u5ea6\u51fd\u6570\u7684\u5b66\u751f t \u5206\u5e03\u7684 t \u503c\u3002', [
	                parameterDescription('prog'),
	                parameterDescription('deg')
	            ]),
	            'TODAY': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5f53\u524d\u7684\u65e5\u671f\u548c\u65f6\u95f4\u3002', []),
	            'TRANSPOSE': functionDescription('\u6b64\u51fd\u6570 TRANSPOSE \u51fd\u6570\u53ef\u8fd4\u56de\u8f6c\u7f6e\u5355\u5143\u683c\u533a\u57df\uff0c\u5373\u5c06\u884c\u5355\u5143\u683c\u533a\u57df\u8f6c\u7f6e\u6210\u5217\u5355\u5143\u683c\u533a\u57df\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002', [
	                parameterDescription('array')
	            ]),
	            'TREND': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u6761\u7ebf\u6027\u56de\u5f52\u62df\u5408\u7ebf\u7684\u503c\u3002 \u5373\u627e\u5230\u9002\u5408\u5df2\u77e5\u6570\u7ec4 y s \u548c x s \u7684\u76f4\u7ebf\uff08\u7528\u6700\u5c0f\u4e8c\u4e58\u6cd5\uff09\uff0c \u5e76\u8fd4\u56de\u6307\u5b9a\u6570\u7ec4 newx s \u5728\u76f4\u7ebf\u4e0a\u5bf9\u5e94\u7684 y \u503c\u3002', [
	                parameterDescription('y'),
	                parameterDescription('x'),
	                parameterDescription('newx'),
	                parameterDescription('constant')
	            ]),
	            'TRIM': functionDescription('\u6b64\u51fd\u6570\u9664\u4e86\u5355\u8bcd\u4e4b\u95f4\u7684\u5355\u4e2a\u7a7a\u683c\u5916\uff0c\u6e05\u9664\u6587\u672c\u4e2d\u6240\u6709\u7684\u7a7a\u683c\u3002', [
	                parameterDescription('text')
	            ]),
	            'TRIMMEAN': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6570\u636e\u96c6\u7684\u5185\u90e8\u5e73\u5747\u503c\u3002\u51fd\u6570 TRIMMEAN \u5148\u4ece\u6570\u636e\u96c6\u7684\u5934\u90e8\u548c\u5c3e\u90e8\u9664\u53bb\u4e00\u5b9a\u767e\u5206\u6bd4\u7684\u6570\u636e\u70b9\uff0c\u7136\u540e\u518d\u6c42\u5e73\u5747\u503c\u3002', [
	                parameterDescription('array'),
	                parameterDescription('percent')
	            ]),
	            'TRUE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u903b\u8f91\u503c TRUE\u3002', []),
	            'TRUNC': functionDescription('\u6b64\u51fd\u6570\u5c06\u6307\u5b9a\u6570\u5b57\u7684\u5c0f\u6570\u90e8\u5206\u622a\u53bb\uff0c\u8fd4\u56de\u6574\u6570\u3002', [
	                parameterDescription('value'),
	                parameterDescription('precision')
	            ]),
	            'TTEST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e0e\u5b66\u751f t \u68c0\u9a8c\u76f8\u5173\u7684\u6982\u7387\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2'),
	                parameterDescription('tails'),
	                parameterDescription('type')
	            ]),
	            'TYPE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6570\u503c\u7684\u7c7b\u578b\u3002', [
	                parameterDescription('value')
	            ]),
	            'UPPER': functionDescription('\u6b64\u51fd\u6570\u5c06\u6587\u672c\u8f6c\u6362\u4e3a\u5927\u5199\u5f62\u5f0f\u3002', [
	                parameterDescription('string')
	            ]),
	            'VALUE': functionDescription('\u6b64\u51fd\u6570\u5c06\u4ee3\u8868\u6570\u5b57\u7684\u6587\u672c\u5b57\u7b26\u4e32\u8f6c\u6362\u6210\u6570\u5b57\u3002', [
	                parameterDescription('text')
	            ]),
	            'VAR': functionDescription('\u6b64\u51fd\u6570\u8ba1\u7b97\u57fa\u4e8e\u7ed9\u5b9a\u6837\u672c\u7684\u65b9\u5dee\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VARA': functionDescription('\u6b64\u51fd\u6570\u57fa\u4e8e\u6837\u672c\uff08\u5305\u62ec\u6570\u5b57\u3001\u6587\u672c\u548c\u903b\u8f91\u503c\uff09\u4f30\u7b97\u65b9\u5dee\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VARP': functionDescription('\u6b64\u51fd\u6570\u8ba1\u7b97\u57fa\u4e8e\u6574\u4e2a\u6837\u672c\u603b\u4f53\u7684\u65b9\u5dee\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VARPA': functionDescription('\u6b64\u51fd\u6570\u8ba1\u7b97\u57fa\u4e8e\u603b\u4f53\uff08\u5305\u62ec\u6570\u5b57\u3001\u6587\u672c\u548c\u903b\u8f91\u503c\uff09\u4f30\u7b97\u65b9\u5dee', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VDB': functionDescription('\u6b64\u51fd\u6570\u4f7f\u7528\u53cc\u500d\u4f59\u989d\u9012\u51cf\u6cd5\u6216\u5176\u4ed6\u6307\u5b9a\u7684\u65b9\u6cd5\uff0c\u8fd4\u56de\u6307\u5b9a\u7684\u4efb\u4f55\u671f\u95f4\u5185\uff08\u5305\u62ec\u90e8\u5206\u671f\u95f4\uff09\u7684\u8d44\u4ea7\u6298\u65e7\u503c\u3002\u51fd\u6570 VDB \u4ee3\u8868\u53ef\u53d8\u4f59\u989d\u9012\u51cf\u6cd5\u3002', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life'),
	                parameterDescription('start'),
	                parameterDescription('end'),
	                parameterDescription('factor'),
	                parameterDescription('switchnot')
	            ]),
	            'VLOOKUP': functionDescription('\u6b64\u51fd\u6570\u5728\u8868\u683c\u6570\u7ec4\u7684\u9996\u5217\u67e5\u627e\u6307\u5b9a\u7684\u503c\uff0c\u5e76\u7531\u6b64\u8fd4\u56de\u8868\u683c\u6570\u7ec4\u5f53\u524d\u884c\u4e2d\u5176\u4ed6\u5217\u7684\u503c\u3002', [
	                parameterDescription('value'),
	                parameterDescription('array'),
	                parameterDescription('colindex'),
	                parameterDescription('approx')
	            ]),
	            'WEEKDAY': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u67d0\u65e5\u671f\u4e3a\u661f\u671f\u51e0\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5176\u503c\u4e3a 1\uff08\u661f\u671f\u5929\uff09\u5230 7\uff08\u661f\u671f\u516d\uff09\u4e4b\u95f4\u7684\u6574\u6570\u3002', [
	                parameterDescription('date'),
	                parameterDescription('type')
	            ]),
	            'WEEKNUM': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\uff0c\u8be5\u6570\u5b57\u4ee3\u8868\u4e00\u5e74\u4e2d\u7684\u7b2c\u51e0\u5468\u3002', [
	                parameterDescription('date'),
	                parameterDescription('weektype')
	            ]),
	            'WEIBULL': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u97e6\u4f2f\u5206\u5e03\u3002\u4f7f\u7528\u6b64\u51fd\u6570\u53ef\u4ee5\u8fdb\u884c\u53ef\u9760\u6027\u5206\u6790\uff0c\u6bd4\u5982\u8ba1\u7b97\u8bbe\u5907\u7684\u5e73\u5747\u6545\u969c\u65f6\u95f4\u3002', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative')
	            ]),
	            'WORKDAY': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u67d0\u65e5\u671f\uff08\u8d77\u59cb\u65e5\u671f\uff09\u4e4b\u524d\u6216\u4e4b\u540e\u76f8\u9694\u6307\u5b9a\u5de5\u4f5c\u65e5\u7684\u67d0\u4e00\u65e5\u671f\u7684\u65e5\u671f\u503c\u3002', [
	                parameterDescription('startdate'),
	                parameterDescription('numdays'),
	                parameterDescription('holidays')
	            ]),
	            'XIRR': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u7ec4\u73b0\u91d1\u6d41\u7684\u5185\u90e8\u6536\u76ca\u7387\uff0c\u8fd9\u4e9b\u73b0\u91d1\u6d41\u4e0d\u4e00\u5b9a\u5b9a\u671f\u53d1\u751f\u3002', [
	                parameterDescription('values'),
	                parameterDescription('dates'),
	                parameterDescription('guess')
	            ]),
	            'XNPV': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u7ec4\u73b0\u91d1\u6d41\u7684\u51c0\u73b0\u503c\uff0c\u8fd9\u4e9b\u73b0\u91d1\u6d41\u4e0d\u4e00\u5b9a\u5b9a\u671f\u53d1\u751f\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('values'),
	                parameterDescription('dates')
	            ]),
	            'YEAR': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u67d0\u65e5\u671f\u5bf9\u5e94\u7684\u5e74\u4efd\u3002', [
	                parameterDescription('date')
	            ]),
	            'YEARFRAC': functionDescription('\u6b64\u51fd\u6570 \u8fd4\u56de start \u548c end \u4e4b\u95f4\u7684\u5929\u6570\u5360\u5168\u5e74\u5929\u6570\u7684\u767e\u5206\u6bd4\u3002', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate'),
	                parameterDescription('basis')
	            ]),
	            'YIELD': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5b9a\u671f\u4ed8\u606f\u6709\u4ef7\u8bc1\u5238\u7684\u6536\u76ca\u7387\uff0c\u51fd\u6570 YIELD \u7528\u4e8e\u8ba1\u7b97\u503a\u5238\u6536\u76ca\u7387\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('rate'),
	                parameterDescription('price'),
	                parameterDescription('redeem'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'YIELDDISC': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6298\u4ef7\u53d1\u884c\u7684\u6709\u4ef7\u8bc1\u5238\u7684\u5e74\u6536\u76ca\u7387\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('price'),
	                parameterDescription('redeem'),
	                parameterDescription('basis')
	            ]),
	            'YIELDMAT': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5230\u671f\u4ed8\u606f\u7684\u6709\u4ef7\u8bc1\u5238\u7684\u5e74\u6536\u76ca\u7387\u3002', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('issue'),
	                parameterDescription('issrate'),
	                parameterDescription('price'),
	                parameterDescription('basis')
	            ]),
	            'ZTEST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de z \u68c0\u9a8c\u7684\u5355\u5c3e\u6982\u7387\u503c\u3002\u5bf9\u4e8e\u7ed9\u5b9a\u7684\u5047\u8bbe\u603b\u4f53\u5e73\u5747\u503c \u03bc0\uff0cZTEST \u8fd4\u56de\u6837\u672c\u5e73\u5747\u503c\u5927\u4e8e\u6570\u636e\u96c6\uff08\u6570\u7ec4\uff09\u4e2d\u89c2\u5bdf\u5e73\u5747\u503c\u7684\u6982\u7387\uff0c\u5373\u89c2\u5bdf\u6837\u672c\u5e73\u5747\u503c\u3002', [
	                parameterDescription('array'),
	                parameterDescription('x'),
	                parameterDescription('sigma')
	            ]),
	            'HBARSPARKLINE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8\u6a2a\u5411\u6761\u72b6\u8ff7\u4f60\u56fe\u7684\u6570\u636e\u96c6\u3002', [
	                parameterDescription('value'),
	                parameterDescription('colorScheme')
	            ]),
	            'VBARSPARKLINE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8\u7ad6\u5411\u67f1\u72b6\u578b\u8ff7\u4f60\u56fe\u7684\u6570\u636e\u96c6\u3002', [
	                parameterDescription('value'),
	                parameterDescription('colorScheme')
	            ]),
	            'VARISPARKLINE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8\u65b9\u5dee\u8ff7\u4f60\u56fe\u7684\u6570\u636e\u96c6\u3002', [
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
	            'PIESPARKLINE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8\u997c\u5f62\u8ff7\u4f60\u56fe\u7684\u6570\u636e\u96c6\u3002', [
	                parameterDescription('range|percentage'),
	                parameterDescription('color', true)
	            ]),
	            'AREASPARKLINE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8\u9762\u79ef\u8ff7\u4f60\u56fe\u7684\u6570\u636e\u96c6\u3002', [
	                parameterDescription('points'),
	                parameterDescription('mini'),
	                parameterDescription('maxi'),
	                parameterDescription('line1'),
	                parameterDescription('line2'),
	                parameterDescription('colorPositive'),
	                parameterDescription('colorNegative')
	            ]),
	            'SCATTERSPARKLINE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8\u6563\u70b9\u8ff7\u4f60\u56fe\u7684\u6570\u636e\u96c6\u3002', [
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
	            'LINESPARKLINE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8\u6298\u7ebf\u8ff7\u4f60\u56fe\u7684\u6570\u636e\u96c6\u3002', [
	                parameterDescription('data'),
	                parameterDescription('dataOrientation'),
	                parameterDescription('dateAxisData'),
	                parameterDescription('dateAxisOrientation'),
	                parameterDescription('setting')
	            ]),
	            'COLUMNSPARKLINE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8\u67f1\u5f62\u8ff7\u4f60\u56fe\u7684\u6570\u636e\u96c6\u3002', [
	                parameterDescription('data'),
	                parameterDescription('dataOrientation'),
	                parameterDescription('dateAxisData'),
	                parameterDescription('dateAxisOrientation'),
	                parameterDescription('setting')
	            ]),
	            'WINLOSSSPARKLINE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8\u76c8\u4e8f\u8ff7\u4f60\u56fe\u7684\u6570\u636e\u96c6\u3002', [
	                parameterDescription('data'),
	                parameterDescription('dataOrientation'),
	                parameterDescription('dateAxisData'),
	                parameterDescription('dateAxisOrientation'),
	                parameterDescription('setting')
	            ]),
	            'BULLETSPARKLINE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8\u5b50\u5f39\u8ff7\u4f60\u56fe\u7684\u6570\u636e\u96c6\u3002', [
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
	            'SPREADSPARKLINE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8\u6563\u5e03\u8ff7\u4f60\u56fe\u7684\u6570\u636e\u96c6\u3002', [
	                parameterDescription('points'),
	                parameterDescription('showAverage'),
	                parameterDescription('scaleStart'),
	                parameterDescription('scaleEnd'),
	                parameterDescription('style'),
	                parameterDescription('colorScheme'),
	                parameterDescription('vertical')
	            ]),
	            'STACKEDSPARKLINE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8\u5806\u79ef\u8ff7\u4f60\u56fe\u7684\u6570\u636e\u96c6\u3002', [
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
	            'BOXPLOTSPARKLINE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8\u7bb1\u7ebf\u8ff7\u4f60\u56fe\u7684\u6570\u636e\u96c6\u3002', [
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
	            'CASCADESPARKLINE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8\u7011\u5e03\u8ff7\u4f60\u56fe\u7684\u6570\u636e\u96c6\u3002', [
	                parameterDescription('pointsRange'),
	                parameterDescription('pointIndex'),
	                parameterDescription('labelsRange'),
	                parameterDescription('minimum'),
	                parameterDescription('maximum'),
	                parameterDescription('colorPositive'),
	                parameterDescription('colorNegative'),
	                parameterDescription('vertical')
	            ]),
	            'PARETOSPARKLINE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8\u9636\u68af\u7011\u5e03\u8ff7\u4f60\u56fe\u7684\u6570\u636e\u96c6\u3002', [
	                parameterDescription('points'),
	                parameterDescription('pointIndex'),
	                parameterDescription('colorRange'),
	                parameterDescription('target'),
	                parameterDescription('target2'),
	                parameterDescription('highlightPosition'),
	                parameterDescription('label'),
	                parameterDescription('vertical')
	            ]),
	            'MONTHSPARKLINE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8\u6708\u4efd\u8ff7\u4f60\u56fe\u7684\u6570\u636e\u96c6\u3002', [
	                parameterDescription('year'),
	                parameterDescription('month'),
	                parameterDescription('dataRange'),
	                parameterDescription('emptyColor'),
	                parameterDescription('startColor'),
	                parameterDescription('middleColor'),
	                parameterDescription('endColor')
	            ]),
	            'YEARSPARKLINE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8\u5e74\u4efd\u8ff7\u4f60\u56fe\u7684\u6570\u636e\u96c6\u3002', [
	                parameterDescription('year'),
	                parameterDescription('dataRange'),
	                parameterDescription('emptyColor'),
	                parameterDescription('startColor'),
	                parameterDescription('middleColor'),
	                parameterDescription('endColor')
	            ]),
	            'CEILING.PRECISE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\uff0c\u8be5\u6570\u5b57\u5411\u4e0a\u820d\u5165\u4e3a\u6700\u63a5\u8fd1\u7684\u6574\u6570\u6216\u6700\u63a5\u8fd1\u7684\u6709\u6548\u4f4d\u7684\u500d\u6570\u3002', [
	                parameterDescription('number'),
	                parameterDescription('signif')
	            ]),
	            'COVARIANCE.S': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6837\u672c\u534f\u65b9\u5dee\uff0c\u5373\u4e24\u4e2a\u6570\u636e\u96c6\u4e2d\u6bcf\u5bf9\u6570\u636e\u70b9\u7684\u504f\u5dee\u4e58\u79ef\u7684\u5e73\u5747\u503c\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'FLOOR.PRECISE': functionDescription('\u6b64\u51fd\u6570\u5411\u7edd\u5bf9\u503c\u51cf\u5c0f\u7684\u65b9\u5411\u820d\u5165\u6570\u5b57\u3002', [
	                parameterDescription('number'),
	                parameterDescription('signif')
	            ]),
	            'PERCENTILE.EXC': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u533a\u57df\u4e2d\u6570\u503c\u7684\u7b2c n \u4e2a\u767e\u5206\u70b9\u7684\u503c\u3002', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'QUARTILE.EXC': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6570\u636e\u96c6\u7684\u56db\u5206\u4f4d\u6570\u3002', [
	                parameterDescription('array'),
	                parameterDescription('quart')
	            ]),
	            'RANK.AVG': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\u5728\u6570\u5b57\u5217\u8868\u4e2d\u7684\u6392\u4f4d\u3002\u6570\u5b57\u7684\u6392\u4f4d\u662f\u5176\u5927\u5c0f\u4e0e\u5217\u8868\u4e2d\u5176\u4ed6\u503c\u7684\u6bd4\u503c\uff08\u5982\u679c\u5217\u8868\u5df2\u6392\u8fc7\u5e8f\uff0c\u5219\u6570\u5b57\u7684\u6392\u4f4d\u5c31\u662f\u5b83\u5f53\u524d\u7684\u4f4d\u7f6e\uff09\u3002', [
	                parameterDescription('number'),
	                parameterDescription('array'),
	                parameterDescription('order')
	            ]),
	            'MODE.MULT': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u7ec4\u6570\u636e\u6216\u6570\u636e\u533a\u57df\u4e2d\u51fa\u73b0\u9891\u7387\u6700\u9ad8\u6216\u91cd\u590d\u51fa\u73b0\u7684\u6570\u503c\u7684\u5782\u76f4\u6570\u7ec4\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'STDEV.P': functionDescription('\u6b64\u51fd\u6570\u4f30\u7b97\u57fa\u4e8e\u6837\u672c\u7684\u6807\u51c6\u504f\u5dee\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VAR.P': functionDescription('\u6b64\u51fd\u6570\u8ba1\u7b97\u57fa\u4e8e\u7ed9\u5b9a\u6837\u672c\u7684\u65b9\u5dee\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'COVARIANCE.P': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u534f\u65b9\u5dee\uff08\u6210\u5bf9\u504f\u5dee\u4e58\u79ef\u7684\u5e73\u5747\u503c\uff09\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'MODE.SNGL': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5728\u67d0\u4e00\u6570\u7ec4\u6216\u6570\u636e\u533a\u57df\u4e2d\u51fa\u73b0\u9891\u7387\u6700\u591a\u7684\u6570\u503c\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'PERCENTILE.INC': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u533a\u57df\u4e2d\u6570\u503c\u7684\u7b2c n \u4e2a\u767e\u5206\u70b9\u7684\u503c\u3002', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'QUARTILE.INC': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6570\u636e\u96c6\u7684\u56db\u5206\u4f4d\u6570\u3002', [
	                parameterDescription('array'),
	                parameterDescription('quart')
	            ]),
	            'RANK.EQ': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\u5728\u6570\u5b57\u5217\u8868\u4e2d\u7684\u6392\u4f4d\u3002\u6570\u5b57\u7684\u6392\u4f4d\u662f\u5176\u5927\u5c0f\u4e0e\u5217\u8868\u4e2d\u5176\u4ed6\u503c\u7684\u6bd4\u503c\uff08\u5982\u679c\u5217\u8868\u5df2\u6392\u8fc7\u5e8f\uff0c\u5219\u6570\u5b57\u7684\u6392\u4f4d\u5c31\u662f\u5b83\u5f53\u524d\u7684\u4f4d\u7f6e\uff09\u3002', [
	                parameterDescription('number'),
	                parameterDescription('array'),
	                parameterDescription('order')
	            ]),
	            'STDEV': functionDescription('\u6b64\u51fd\u6570\u4f30\u7b97\u57fa\u4e8e\u6837\u672c\u7684\u6807\u51c6\u504f\u5dee\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'STDEV.S': functionDescription('\u6b64\u51fd\u6570\u4f30\u7b97\u57fa\u4e8e\u6837\u672c\u7684\u6807\u51c6\u504f\u5dee\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'VAR.S': functionDescription('\u6b64\u51fd\u6570\u8ba1\u7b97\u57fa\u4e8e\u7ed9\u5b9a\u6837\u672c\u7684\u65b9\u5dee\u3002', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'BETA.INV': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6307\u5b9a Beta \u5206\u5e03\u7684\u7d2f\u79ef\u5206\u5e03\u51fd\u6570\u7684\u53cd\u51fd\u6570\u3002', [
	                parameterDescription('prob'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'BINOM.DIST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e8c\u9879\u5f0f\u5206\u5e03\u7684\u6982\u7387\u503c\u3002', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('cumulative')
	            ]),
	            'BINOM.INV': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4f7f\u7d2f\u79ef\u4e8c\u9879\u5f0f\u5206\u5e03\u5c0f\u4e8e\u6216\u7b49\u4e8e\u4e34\u754c\u503c\u7684\u6700\u5c0f\u503c\u3002', [
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('alpha')
	            ]),
	            'CHISQ.DIST.RT': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de \u03c72 \u5206\u5e03\u7684\u5355\u5c3e\u6982\u7387\u3002', [
	                parameterDescription('value'),
	                parameterDescription('deg')
	            ]),
	            'CHISQ.INV.RT': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de \u03c72 \u5206\u5e03\u7684\u5355\u5c3e\u6982\u7387\u7684\u53cd\u51fd\u6570\u3002', [
	                parameterDescription('prob'),
	                parameterDescription('deg')
	            ]),
	            'CHISQ.TEST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u72ec\u7acb\u6027\u68c0\u9a8c\u503c\u3002', [
	                parameterDescription('obs_array'),
	                parameterDescription('exp_array')
	            ]),
	            'CONFIDENCE.NORM': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u603b\u4f53\u5e73\u5747\u503c\u7684\u7f6e\u4fe1\u533a\u95f4\u3002', [
	                parameterDescription('alpha'),
	                parameterDescription('stdev'),
	                parameterDescription('size')
	            ]),
	            'EXPON.DIST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6307\u6570\u5206\u5e03\u3002', [
	                parameterDescription('value'),
	                parameterDescription('lambda'),
	                parameterDescription('cumulative')
	            ]),
	            'F.DIST.RT': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de F \u6982\u7387\u5206\u5e03\u3002', [
	                parameterDescription('value'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'F.INV.RT': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de F \u6982\u7387\u5206\u5e03\u7684\u53cd\u51fd\u6570\u3002', [
	                parameterDescription('p'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'F.TEST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de F \u68c0\u9a8c\u7684\u7ed3\u679c\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'GAMMA.DIST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de \u03b3 \u5206\u5e03\u3002', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative')
	            ]),
	            'GAMMA.INV': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de \u03b3 \u7d2f\u79ef\u5206\u5e03\u51fd\u6570\u7684\u53cd\u51fd\u6570\u3002', [
	                parameterDescription('p'),
	                parameterDescription('alpha'),
	                parameterDescription('beta')
	            ]),
	            'LOGNORM.INV': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5bf9\u6570\u7d2f\u79ef\u5206\u5e03\u7684\u53cd\u51fd\u6570\u3002', [
	                parameterDescription('prob'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'NORM.DIST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6b63\u6001\u7d2f\u79ef\u5206\u5e03\u3002', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev'),
	                parameterDescription('cumulative')
	            ]),
	            'NORM.INV': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6807\u51c6\u6b63\u6001\u7d2f\u79ef\u5206\u5e03\u7684\u53cd\u51fd\u6570\u3002', [
	                parameterDescription('prob'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'NORM.S.INV': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6807\u51c6\u6b63\u6001\u7d2f\u79ef\u5206\u5e03\u51fd\u6570\u7684\u53cd\u51fd\u6570\u3002', [
	                parameterDescription('prob')
	            ]),
	            'PERCENTRANK.INC': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6570\u636e\u96c6\u4e2d\u503c\u7684\u767e\u5206\u6bd4\u6392\u4f4d\u3002', [
	                parameterDescription('array'),
	                parameterDescription('n'),
	                parameterDescription('signif')
	            ]),
	            'POISSON.DIST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6cca\u677e\u5206\u5e03\u3002', [
	                parameterDescription('nevents'),
	                parameterDescription('mean'),
	                parameterDescription('cumulative')
	            ]),
	            'T.INV.2T': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5b66\u751f\u7684 t \u5206\u5e03\u7684\u53cd\u51fd\u6570\u3002', [
	                parameterDescription('prog'),
	                parameterDescription('deg')
	            ]),
	            'T.TEST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e0e\u5b66\u751f\u7684 t \u68c0\u9a8c\u76f8\u5173\u7684\u6982\u7387\u3002', [
	                parameterDescription('array1'),
	                parameterDescription('array2'),
	                parameterDescription('tails'),
	                parameterDescription('type')
	            ]),
	            'WEIBULL.DIST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de Weibull \u5206\u5e03\u3002', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative')
	            ]),
	            'Z.TEST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de z \u68c0\u9a8c\u7684\u5355\u5c3e\u6982\u7387\u503c\u3002', [
	                parameterDescription('array'),
	                parameterDescription('x'),
	                parameterDescription('sigma')
	            ]),
	            'T.DIST.RT': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5b66\u751f\u7684 t \u5206\u5e03\u3002', [
	                parameterDescription('x'),
	                parameterDescription('deg')
	            ]),
	            'T.DIST.2T': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5b66\u751f\u7684 t \u5206\u5e03\u7684\u767e\u5206\u70b9\uff08\u6982\u7387\uff09\u3002', [
	                parameterDescription('x'),
	                parameterDescription('deg')
	            ]),
	            'ISO.CEILING': functionDescription('\u6b64\u51fd\u6570\u5c06\u6570\u5b57\u5411\u4e0a\u820d\u5165\u5230\u6700\u63a5\u8fd1\u7684\u6574\u6570\u6216\u57fa\u6570\u7684\u6700\u63a5\u8fd1\u500d\u6570\u3002', [
	                parameterDescription('number'),
	                parameterDescription('signif')
	            ]),
	            'BETA.DIST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de Beta \u7d2f\u79ef\u5206\u5e03\u51fd\u6570\u3002', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'GAMMALN.PRECISE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4f3d\u739b\u51fd\u6570\u7684\u81ea\u7136\u5bf9\u6570\uff0c\u0393(x)\u3002', [
	                parameterDescription('value')
	            ]),
	            'ERF.PRECISE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u8bef\u5dee\u51fd\u6570\u3002', [
	                parameterDescription('lowerlimit')
	            ]),
	            'ERFC.PRECISE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4ece x \u5230\u65e0\u7a77\u5927\u79ef\u5206\u7684\u4e92\u8865 ERF \u51fd\u6570\u3002', [
	                parameterDescription('lowerlimit')
	            ]),
	            'PERCENTRANK.EXC': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u67d0\u4e2a\u6570\u503c\u5728\u4e00\u4e2a\u6570\u636e\u96c6\u4e2d\u7684\u767e\u5206\u6bd4\uff080 \u5230 1\uff0c\u4e0d\u5305\u62ec 0 \u548c 1\uff09\u6392\u4f4d\u3002', [
	                parameterDescription('array'),
	                parameterDescription('n'),
	                parameterDescription('signif')
	            ]),
	            'HYPGEOM.DIST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u8d85\u51e0\u4f55\u5206\u5e03\u3002', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('M'),
	                parameterDescription('N'),
	                parameterDescription('cumulative')
	            ]),
	            'LOGNORM.DIST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5bf9\u6570\u7d2f\u79ef\u5206\u5e03\u51fd\u6570\u3002', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev'),
	                parameterDescription('cumulative')
	            ]),
	            'NEGBINOM.DIST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u8d1f\u4e8c\u9879\u5f0f\u5206\u5e03\u3002', [
	                parameterDescription('x'),
	                parameterDescription('r'),
	                parameterDescription('p'),
	                parameterDescription('cumulative')
	            ]),
	            'NORM.S.DIST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6807\u51c6\u6b63\u6001\u7d2f\u79ef\u5206\u5e03\u3002', [
	                parameterDescription('z'),
	                parameterDescription('cumulative')
	            ]),
	            'T.DIST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5b66\u751f\u7684 t \u5206\u5e03\u7684\u767e\u5206\u70b9\uff08\u6982\u7387\uff09\u3002', [
	                parameterDescription('x'),
	                parameterDescription('deg'),
	                parameterDescription('cumulative')
	            ]),
	            'F.DIST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de F \u6982\u7387\u5206\u5e03\u3002', [
	                parameterDescription('x'),
	                parameterDescription('degnum'),
	                parameterDescription('degden'),
	                parameterDescription('cumulative')
	            ]),
	            'CHISQ.DIST': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u7d2f\u79ef Beta \u6982\u7387\u5bc6\u5ea6\u51fd\u6570\u3002', [
	                parameterDescription('x'),
	                parameterDescription('deg'),
	                parameterDescription('cumulative')
	            ]),
	            'F.INV': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de F \u6982\u7387\u5206\u5e03\u7684\u53cd\u51fd\u6570\u3002', [
	                parameterDescription('probability'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'T.INV': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4f5c\u4e3a\u6982\u7387\u548c\u81ea\u7531\u5ea6\u51fd\u6570\u7684\u5b66\u751f t \u5206\u5e03\u7684 t \u503c\u3002', [
	                parameterDescription('probability'),
	                parameterDescription('deg')
	            ]),
	            'CHISQ.INV': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u7d2f\u79ef Beta \u6982\u7387\u5bc6\u5ea6\u51fd\u6570\u3002', [
	                parameterDescription('probability'),
	                parameterDescription('deg')
	            ]),
	            'CONFIDENCE.T': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u603b\u4f53\u5e73\u5747\u503c\u7684\u7f6e\u4fe1\u533a\u95f4\uff08\u4f7f\u7528\u5b66\u751f\u7684 t \u5206\u5e03\uff09\u3002', [
	                parameterDescription('alpha'),
	                parameterDescription('stdev'),
	                parameterDescription('size')
	            ]),
	            'NETWORKDAYS.INTL': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e24\u4e2a\u65e5\u671f\u4e4b\u95f4\u7684\u6240\u6709\u5de5\u4f5c\u65e5\u6570\u3002', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate'),
	                parameterDescription('weekend'),
	                parameterDescription('holidays')
	            ]),
	            'WORKDAY.INTL': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6307\u5b9a\u7684\u82e5\u5e72\u4e2a\u5de5\u4f5c\u65e5\u4e4b\u524d\u6216\u4e4b\u540e\u7684\u65e5\u671f\u7684\u5e8f\u5217\u53f7\uff08\u4f7f\u7528\u81ea\u5b9a\u4e49\u5468\u672b\u53c2\u6570\uff09\u3002\u5468\u672b\u53c2\u6570\u6307\u660e\u5468\u672b\u6709\u51e0\u5929\u4ee5\u53ca\u662f\u54ea\u51e0\u5929\u3002', [
	                parameterDescription('startdate'),
	                parameterDescription('numdays'),
	                parameterDescription('weekend'),
	                parameterDescription('holidays')
	            ]),
	            'REFRESH': functionDescription('\u6b64\u51fd\u6570\u51b3\u5b9a\u4e86\u5728\u4ec0\u4e48\u65f6\u673a\u91cd\u65b0\u8ba1\u7b97\u516c\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7 evaluateMode \u53c2\u6570\u6765\u6307\u5b9a\u662f\u5728\u5355\u5143\u683c\u5f15\u7528\u7684\u503c\u53d1\u751f\u53d8\u5316\u7684\u65f6\u5019\u3001\u53ea\u8ba1\u7b97\u4e00\u6b21\u8fd8\u662f\u4ee5\u4e00\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u91cd\u590d\u8ba1\u7b97\u3002', [
	                parameterDescription('formula'),
	                parameterDescription('evaluateMode'),
	                parameterDescription('interval')
	            ]),
	            'DAYS': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e24\u4e2a\u65e5\u671f\u4e4b\u95f4\u7684\u5929\u6570\u3002', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate')
	            ]),
	            'ISOWEEKNUM': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u7ed9\u5b9a\u65e5\u671f\u5728\u5168\u5e74\u4e2d\u7684 ISO \u5468\u6570\u3002', [
	                parameterDescription('date')
	            ]),
	            'BITAND': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e24\u4e2a\u6570\u7684\u6309\u4f4d\u201c\u4e0e\u201d\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'BITLSHIFT': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5411\u5de6\u79fb\u52a8\u6307\u5b9a\u4f4d\u6570\u540e\u7684\u6570\u503c\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'BITOR': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e24\u4e2a\u6570\u7684\u6309\u4f4d\u201c\u6216\u201d\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'BITRSHIFT': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5411\u53f3\u79fb\u52a8\u6307\u5b9a\u4f4d\u6570\u540e\u7684\u6570\u503c\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'BITXOR': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e24\u4e2a\u6570\u503c\u7684\u6309\u4f4d\u201c\u5f02\u6216\u201d\u7ed3\u679c\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'IMCOSH': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u590d\u6570\u7684\u53cc\u66f2\u4f59\u5f26\u503c\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCOT': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u590d\u6570\u7684\u4f59\u5207\u503c\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCSC': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u590d\u6570\u7684\u4f59\u5272\u503c\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCSCH': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u590d\u6570\u7684\u53cc\u66f2\u4f59\u5272\u503c\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSEC': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u590d\u6570\u7684\u6b63\u5272\u503c\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSECH': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u590d\u6570\u7684\u53cc\u66f2\u6b63\u5272\u503c\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSINH': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u590d\u6570\u7684\u53cc\u66f2\u6b63\u5f26\u503c\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'IMTAN': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4ee5 x+yi \u6216 x+yj \u6587\u672c\u683c\u5f0f\u8868\u793a\u7684\u590d\u6570\u7684\u6b63\u5207\u503c\u3002', [
	                parameterDescription('complexnum')
	            ]),
	            'PDURATION': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6295\u8d44\u5230\u8fbe\u6307\u5b9a\u503c\u6240\u9700\u7684\u671f\u6570\u3002', [
	                parameterDescription('rate'),
	                parameterDescription('pval'),
	                parameterDescription('fval')
	            ]),
	            'RRI': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6295\u8d44\u589e\u957f\u7684\u7b49\u6548\u5229\u7387\u3002', [
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('fval')
	            ]),
	            'ISFORMULA': functionDescription('\u6b64\u51fd\u6570\u68c0\u67e5\u662f\u5426\u5b58\u5728\u5305\u542b\u516c\u5f0f\u7684\u5355\u5143\u683c\u5f15\u7528\uff0c\u7136\u540e\u8fd4\u56de TRUE \u6216 FALSE\u3002', [
	                parameterDescription('cellreference')
	            ]),
	            'IFNA': functionDescription('\u5982\u679c\u516c\u5f0f\u8fd4\u56de\u9519\u8bef\u503c #N/A\uff0c\u5219\u7ed3\u679c\u8fd4\u56de\u60a8\u6307\u5b9a\u7684\u503c\uff1b\u5426\u5219\u8fd4\u56de\u516c\u5f0f\u7684\u7ed3\u679c\u3002', [
	                parameterDescription('value'),
	                parameterDescription('value_if_na')
	            ]),
	            'IFS': functionDescription('\u6b64\u51fd\u6570\u68c0\u67e5\u662f\u5426\u6ee1\u8db3\u4e00\u4e2a\u6216\u591a\u4e2a\u6761\u4ef6\uff0c\u5e76\u8fd4\u56de\u7b2c\u4e00\u4e2a TRUE \u6761\u4ef6\u5bf9\u5e94\u7684\u503c\u3002', [
	                parameterDescription('valueTest'),
	                parameterDescription('valueTrue'),
	                parameterDescription('....')
	            ]),
	            'SWITCH': functionDescription('\u6b64\u51fd\u6570\u6839\u636e\u503c\u5217\u8868\u8ba1\u7b97\u4e00\u4e2a\u503c\uff08\u79f0\u4e3a\u8868\u8fbe\u5f0f\uff09\uff0c\u5e76\u8fd4\u56de\u4e0e\u7b2c\u4e00\u4e2a\u5339\u914d\u503c\u5bf9\u5e94\u7684\u7ed3\u679c', [
	                parameterDescription('convertvalue'),
	                parameterDescription('matchvalue'),
	                parameterDescription('matchtrue'),
	                parameterDescription('matchfalse')
	            ]),
	            'XOR': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6240\u6709\u53c2\u6570\u7684\u903b\u8f91\u5f02\u6216\u3002', [
	                parameterDescription('logical'),
	                parameterDescription('....')
	            ]),
	            'AREAS': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5f15\u7528\u4e2d\u7684\u533a\u57df\u4e2a\u6570\u3002 \u533a\u57df\u662f\u6307\u8fde\u7eed\u7684\u5355\u5143\u683c\u533a\u57df\u6216\u5355\u4e2a\u5355\u5143\u683c\u3002', [
	                parameterDescription('reference')
	            ]),
	            'FORMULATEXT': functionDescription('\u6b64\u51fd\u6570\u4ee5\u5b57\u7b26\u4e32\u7684\u5f62\u5f0f\u8fd4\u56de\u516c\u5f0f\u3002', [
	                parameterDescription('reference')
	            ]),
	            'HYPERLINK': functionDescription('\u6b64\u51fd\u6570\u521b\u5efa\u5feb\u6377\u65b9\u5f0f\u6216\u8df3\u8f6c\uff0c\u4ee5\u6253\u5f00\u5b58\u50a8\u5728\u7f51\u7edc\u670d\u52a1\u5668\u3001intranet \u6216 Internet \u4e0a\u7684\u6587\u6863\u3002', [
	                parameterDescription('link_location'),
	                parameterDescription('friendly_name')
	            ]),
	            'ACOT': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6570\u5b57\u7684\u53cd\u4f59\u5207\u503c\u7684\u4e3b\u503c\u3002', [
	                parameterDescription('value')
	            ]),
	            'ACOTH': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6570\u5b57\u7684\u53cd\u53cc\u66f2\u4f59\u5207\u503c\u3002', [
	                parameterDescription('value')
	            ]),
	            'ARABIC': functionDescription('\u6b64\u51fd\u6570\u5c06\u7f57\u9a6c\u6570\u5b57\u8f6c\u6362\u4e3a\u963f\u62c9\u4f2f\u6570\u5b57\u3002', [
	                parameterDescription('text')
	            ]),
	            'BASE': functionDescription('\u6b64\u51fd\u6570\u5c06\u6570\u5b57\u8f6c\u6362\u4e3a\u5177\u5907\u7ed9\u5b9a\u57fa\u6570\u7684\u6587\u672c\u8868\u793a\u3002', [
	                parameterDescription('number'),
	                parameterDescription('radix'),
	                parameterDescription('minLength')
	            ]),
	            'CEILING.MATH': functionDescription('\u6b64\u51fd\u6570\u5c06\u6570\u5b57\u5411\u4e0a\u820d\u5165\u4e3a\u6700\u63a5\u8fd1\u7684\u6574\u6570\u6216\u6700\u63a5\u8fd1\u7684\u6307\u5b9a\u57fa\u6570\u7684\u500d\u6570\u3002', [
	                parameterDescription('value'),
	                parameterDescription('signif'),
	                parameterDescription('mode')
	            ]),
	            'COMBINA': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u7ed9\u5b9a\u6570\u76ee\u7684\u9879\u7684\u7ec4\u5408\u6570\uff08\u5305\u542b\u91cd\u590d\uff09\u3002', [
	                parameterDescription('number'),
	                parameterDescription('number_choosen')
	            ]),
	            'COT': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4ee5\u5f27\u5ea6\u8868\u793a\u7684\u89d2\u5ea6\u7684\u4f59\u5207\u503c\u3002', [
	                parameterDescription('angle')
	            ]),
	            'COTH': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u53cc\u66f2\u89d2\u5ea6\u7684\u53cc\u66f2\u4f59\u5207\u503c\u3002', [
	                parameterDescription('value')
	            ]),
	            'CSC': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u89d2\u5ea6\u7684\u4f59\u5272\u503c\uff0c\u4ee5\u5f27\u5ea6\u8868\u793a\u3002', [
	                parameterDescription('angle')
	            ]),
	            'CSCH': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u89d2\u5ea6\u7684\u53cc\u66f2\u4f59\u5272\u503c\uff0c\u4ee5\u5f27\u5ea6\u8868\u793a\u3002', [
	                parameterDescription('value')
	            ]),
	            'DECIMAL': functionDescription('\u6b64\u51fd\u6570\u6309\u7ed9\u5b9a\u57fa\u6570\u5c06\u6570\u5b57\u7684\u6587\u672c\u8868\u793a\u5f62\u5f0f\u8f6c\u6362\u6210\u5341\u8fdb\u5236\u6570\u3002', [
	                parameterDescription('text'),
	                parameterDescription('radix')
	            ]),
	            'FLOOR.MATH': functionDescription('\u6b64\u51fd\u6570\u5c06\u6570\u5b57\u5411\u4e0b\u820d\u5165\u4e3a\u6700\u63a5\u8fd1\u7684\u6574\u6570\u6216\u6700\u63a5\u8fd1\u7684\u6307\u5b9a\u57fa\u6570\u7684\u500d\u6570\u3002', [
	                parameterDescription('value'),
	                parameterDescription('signif'),
	                parameterDescription('mode')
	            ]),
	            'SEC': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u89d2\u5ea6\u7684\u6b63\u5272\u503c\u3002', [
	                parameterDescription('angle')
	            ]),
	            'SECH': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u89d2\u5ea6\u7684\u53cc\u66f2\u6b63\u5272\u503c\u3002', [
	                parameterDescription('value')
	            ]),
	            'BINOM.DIST.RANGE': functionDescription('\u6b64\u51fd\u6570\u4f7f\u7528\u4e8c\u9879\u5f0f\u5206\u5e03\u8fd4\u56de\u8bd5\u9a8c\u7ed3\u679c\u7684\u6982\u7387\u3002', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('cumulative')
	            ]),
	            'GAMMA': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de gamma \u51fd\u6570\u503c\u3002', [
	                parameterDescription('number')
	            ]),
	            'MAXIFS': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u7ec4\u7ed9\u5b9a\u6761\u4ef6\u6216\u6807\u51c6\u6307\u5b9a\u7684\u5355\u5143\u683c\u4e2d\u7684\u6700\u5927\u503c\u3002', [
	                parameterDescription('array'),
	                parameterDescription('conditionarray'),
	                parameterDescription('condition', true)
	            ]),
	            'GAUSS': functionDescription('\u6b64\u51fd\u6570\u8ba1\u7b97\u6807\u51c6\u6b63\u6001\u603b\u4f53\u7684\u6210\u5458\u5904\u4e8e\u5e73\u5747\u503c\u4e0e\u5e73\u5747\u503c\u7684 z \u500d\u6807\u51c6\u504f\u5dee\u4e4b\u95f4\u7684\u6982\u7387\u3002', [
	                parameterDescription('number')
	            ]),
	            'MINIFS': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u7ec4\u7ed9\u5b9a\u6761\u4ef6\u6216\u6807\u51c6\u6307\u5b9a\u7684\u5355\u5143\u683c\u4e4b\u95f4\u7684\u6700\u5c0f\u503c\u3002', [
	                parameterDescription('array'),
	                parameterDescription('conditionarray'),
	                parameterDescription('condition', true)
	            ]),
	            'PERMUTATIONA': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u53ef\u4ece\u5bf9\u8c61\u603b\u6570\u4e2d\u9009\u62e9\u7684\u7ed9\u5b9a\u6570\u76ee\u5bf9\u8c61\uff08\u542b\u91cd\u590d\uff09\u7684\u6392\u5217\u6570\u3002', [
	                parameterDescription('k'),
	                parameterDescription('n')
	            ]),
	            'PHI': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6807\u51c6\u6b63\u6001\u5206\u5e03\u7684\u5bc6\u5ea6\u51fd\u6570\u503c\u3002', [
	                parameterDescription('value')
	            ]),
	            'SKEW.P': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u57fa\u4e8e\u6837\u672c\u603b\u4f53\u7684\u5206\u5e03\u4e0d\u5bf9\u79f0\u5ea6\uff1a\u8868\u660e\u5206\u5e03\u76f8\u5bf9\u4e8e\u5e73\u5747\u503c\u7684\u4e0d\u5bf9\u79f0\u7a0b\u5ea6\u3002', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'BAHTTEXT': functionDescription('\u6b64\u51fd\u6570\u5c06\u6570\u5b57\u8f6c\u6362\u4e3a\u6cf0\u8bed\u6587\u672c\u5e76\u6dfb\u52a0\u540e\u7f00\u201c\u6cf0\u94e2\u201d\u3002', [
	                parameterDescription('number')
	            ]),
	            'CONCAT': functionDescription('\u6b64\u51fd\u6570\u5c06\u591a\u4e2a\u533a\u57df\u548c/\u6216\u5b57\u7b26\u4e32\u7684\u6587\u672c\u7ec4\u5408\u8d77\u6765\uff0c\u4f46\u4e0d\u63d0\u4f9b\u5206\u9694\u7b26\u6216 IgnoreEmpty \u53c2\u6570\u3002', [
	                parameterDescription('text1'),
	                parameterDescription('text2'),
	                parameterDescription('....')
	            ]),
	            'FINDB': functionDescription('\u6b64\u51fd\u6570\u7528\u4e8e\u5728\u7b2c\u4e8c\u4e2a\u6587\u672c\u4e32\u4e2d\u5b9a\u4f4d\u7b2c\u4e00\u4e2a\u6587\u672c\u4e32\uff0c\u5e76\u8fd4\u56de\u7b2c\u4e00\u4e2a\u6587\u672c\u4e32\u7684\u8d77\u59cb\u4f4d\u7f6e\u7684\u503c\uff0c\u8be5\u503c\u4ece\u7b2c\u4e8c\u4e2a\u6587\u672c\u4e32\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u7b97\u8d77\u3002', [
	                parameterDescription('findtext'),
	                parameterDescription('intext'),
	                parameterDescription('start')
	            ]),
	            'LEFTB': functionDescription('\u6b64\u51fd\u6570\u57fa\u4e8e\u6240\u6307\u5b9a\u7684\u5b57\u8282\u6570\u8fd4\u56de\u6587\u672c\u5b57\u7b26\u4e32\u4e2d\u7684\u7b2c\u4e00\u4e2a\u6216\u524d\u51e0\u4e2a\u5b57\u7b26\u3002', [
	                parameterDescription('mytext'),
	                parameterDescription('num_bytes')
	            ]),
	            'LENB': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u6587\u672c\u5b57\u7b26\u4e32\u4e2d\u7528\u4e8e\u4ee3\u8868\u5b57\u7b26\u7684\u5b57\u8282\u6570\u3002', [
	                parameterDescription('value')
	            ]),
	            'MIDB': functionDescription('\u6b64\u51fd\u6570\u6839\u636e\u6307\u5b9a\u7684\u5b57\u8282\u6570\uff0c\u8fd4\u56de\u6587\u672c\u5b57\u7b26\u4e32\u4e2d\u4ece\u6307\u5b9a\u4f4d\u7f6e\u5f00\u59cb\u7684\u7279\u5b9a\u6570\u76ee\u7684\u5b57\u7b26\u3002', [
	                parameterDescription('text'),
	                parameterDescription('start_num'),
	                parameterDescription('num_bytes')
	            ]),
	            'REPLACEB': functionDescription('\u6b64\u51fd\u6570\u4f7f\u7528\u5176\u4ed6\u6587\u672c\u5b57\u7b26\u4e32\u5e76\u6839\u636e\u6240\u6307\u5b9a\u7684\u5b57\u8282\u6570\u66ff\u6362\u67d0\u6587\u672c\u5b57\u7b26\u4e32\u4e2d\u7684\u90e8\u5206\u6587\u672c\u3002', [
	                parameterDescription('old_text'),
	                parameterDescription('start_byte'),
	                parameterDescription('num_bytes'),
	                parameterDescription('new_text')
	            ]),
	            'RIGHTB': functionDescription('\u6b64\u51fd\u6570\u6839\u636e\u6240\u6307\u5b9a\u7684\u5b57\u8282\u6570\u8fd4\u56de\u6587\u672c\u5b57\u7b26\u4e32\u4e2d\u6700\u540e\u4e00\u4e2a\u6216\u591a\u4e2a\u5b57\u7b26\u3002', [
	                parameterDescription('text'),
	                parameterDescription('num_bytes')
	            ]),
	            'SEARCHB': functionDescription('\u6b64\u51fd\u6570\u53ef\u5728\u7b2c\u4e8c\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\u4e2d\u67e5\u627e\u7b2c\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u5e76\u8fd4\u56de\u7b2c\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\u7684\u8d77\u59cb\u4f4d\u7f6e\u7684\u7f16\u53f7\uff0c\u8be5\u7f16\u53f7\u4ece\u7b2c\u4e8c\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u7b97\u8d77\u3002', [
	                parameterDescription('string1'),
	                parameterDescription('string2')
	            ]),
	            'TEXTJOIN': functionDescription('\u6b64\u51fd\u6570\u5c06\u591a\u4e2a\u533a\u57df\u548c/\u6216\u5b57\u7b26\u4e32\u7684\u6587\u672c\u7ec4\u5408\u8d77\u6765\uff0c\u5e76\u5305\u62ec\u4f60\u5728\u8981\u7ec4\u5408\u7684\u5404\u6587\u672c\u503c\u4e4b\u95f4\u6307\u5b9a\u7684\u5206\u9694\u7b26\u3002', [
	                parameterDescription('delimiter'),
	                parameterDescription('ignore_empty'),
	                parameterDescription('text1'),
	                parameterDescription('text2'),
	                parameterDescription('....')
	            ]),
	            'UNICHAR': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u7ed9\u5b9a\u6570\u503c\u5f15\u7528\u7684 Unicode \u5b57\u7b26\u3002', [
	                parameterDescription('number')
	            ]),
	            'UNICODE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u5bf9\u5e94\u4e8e\u6587\u672c\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u7684\u6570\u5b57\uff08\u4ee3\u7801\u70b9\uff09\u3002', [
	                parameterDescription('text')
	            ]),
	            'ENCODEURL': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de URL \u7f16\u7801\u7684\u5b57\u7b26\u4e32\u3002', [
	                parameterDescription('text')
	            ]),
	            'BC_QRCODE': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8QRCode\u7684\u6570\u636e\u96c6\u3002', [
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
	            'BC_EAN13': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8EAN13\u7684\u6570\u636e\u96c6\u3002', [
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
	            'BC_EAN8': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8EAN8\u7684\u6570\u636e\u96c6\u3002', [
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
	            'BC_CODABAR': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8CODABAR\u7684\u6570\u636e\u96c6\u3002', [
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
	            'BC_CODE39': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8CODE39\u7684\u6570\u636e\u96c6\u3002', [
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
	            'BC_CODE93': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8CODE93\u7684\u6570\u636e\u96c6\u3002', [
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
	            'BC_CODE128': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8CODE128\u7684\u6570\u636e\u96c6\u3002', [
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
	            'BC_GS1_128': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8GS1_128\u7684\u6570\u636e\u96c6\u3002', [
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
	            'BC_CODE49': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8CODE49\u7684\u6570\u636e\u96c6\u3002', [
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
	            'BC_PDF417': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8PDF417\u7684\u6570\u636e\u96c6\u3002', [
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
	            'BC_DATAMATRIX': functionDescription('\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u7528\u4e8e\u63cf\u7ed8DATAMATRIX\u7684\u6570\u636e\u96c6\u3002', [
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

	(function() {
	    'use strict';
	
	    (function () {
	        var GC$ = __webpack_require__(5).GC$;
	        var CultureManager = __webpack_require__(6).CultureManager;
	        var elements = GC$('meta[name=\'spreadjs culture\']');
	        if (elements.length > 0) {
	            var culture = GC$(elements[elements.length - 1]).attr('content');
	            if (culture !== null && culture !== undefined && culture.toLowerCase() === 'zh-cn') {
	               
	               
	                CultureManager.culture('zh-cn');
	            }
	        }
	    })();
	    module.exports = {
	        Exp_NotSupported: '\u4e0d\u652f\u6301\u5f02\u5e38',
	        Exp_PasteExtentIsNull: 'pasteExtent\u4e3a\u7a7a',
	        Exp_InvalidPastedArea: '\u7c98\u8d34\u7684\u533a\u57df\u5e94\u8be5\u4e0e\u62f7\u8d1d\u7684\u533a\u57df\u6216\u526a\u8d34\u7684\u533a\u57df\u5927\u5c0f\u76f8\u540c\u3002',
	        Exp_ChangePartOfArray: '\u65e0\u6cd5\u4ec5\u6539\u53d8\u90e8\u5206\u7684\u6570\u7ec4\u3002',
	        Exp_InvalidAndSpace: '\u65e0\u6548\u7684 {0}: {1} (\u5fc5\u987b\u5728 {2} \u5230 {3} \u4e4b\u95f4)\u3002',
	        Exp_SrcIsNull: '\u53c2\u6570 \'src\' \u4e3a\u7a7a',
	        Exp_DestIsNull: '\u53c2\u6570 \'dest\' \u4e3a\u7a7a',
	        Exp_InvalidCustomFunction: '\u65e0\u6548\u81ea\u5b9a\u4e49\u51fd\u6570',
	        Exp_InvalidCustomName: '\u65e0\u6548\u81ea\u5b9a\u4e49\u540d\u79f0',
	        Exp_IndexOutOfRange: '\u7d22\u5f15\u8d85\u51fa\u533a\u95f4!',
	        Exp_InvalidRange: '\u65e0\u6548\u533a\u95f4',
	        Exp_ArgumentOutOfRange: '\u53c2\u6570\u8d85\u51fa\u8303\u56f4',
	        Exp_PasteSourceCellsLocked: '\u6e90\u8868\u5355\u7684\u5355\u5143\u683c\u88ab\u9501\u5b9a\u3002',
	        Exp_InvalidCopyPasteSize: '\u590d\u5236\u548c\u7c98\u8d34\u7684\u533a\u57df\u5927\u5c0f\u4e0d\u4e00\u81f4\u3002',
	        Exp_PasteDestinationCellsLocked: '\u60a8\u5c1d\u8bd5\u6539\u53d8\u7684\u5355\u5143\u683c\u662f\u88ab\u4fdd\u62a4\u7684\uff0c\u56e0\u6b64\u662f\u53ea\u8bfb\u7684\u3002',
	        Exp_PasteChangeMergeCell: '\u4e0d\u80fd\u4ec5\u6539\u53d8\u5408\u5e76\u5355\u5143\u683c\u7684\u4e00\u90e8\u5206\u3002',
	        Tip_Row: '\u884c: ',
	        Tip_Column: '\u5217: ',
	        Tip_Height: '\u9ad8\u5ea6: {0} \u50cf\u7d20',
	        Tip_Width: '\u5bbd\u5ea6: {0} \u50cf\u7d20',
	        NewTab: '\u65b0\u5efa...',
	        Exp_EmptyNamedStyle: '\u547d\u540d\u6837\u5f0f\u7684\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a',
	        Exp_SheetNameInvalid: '\u8868\u5355\u540d\u4e0d\u80fd\u4e3a\u7a7a\u4e14\u4e0d\u80fd\u5305\u542b\u4ee5\u4e0b\u5b57\u7b26 : *, :, [, ], ?, \\, /',
	        Exp_ArrayFromulaSpan: '\u5408\u5e76\u5355\u5143\u683c\u7684\u6570\u7ec4\u516c\u5f0f\u4e0d\u662f\u6709\u6548\u7684\u3002',
	        Exp_DestSheetIsNull: 'destSheet\u4e3a\u7a7a\u3002',
	        Exp_SheetIsNull: 'sheet\u4e3a\u7a7a\u3002',
	        Exp_OverlappingSpans: '\u64cd\u4f5c\u5c06\u5e26\u6765\u91cd\u590d\u7684\u5408\u5e76\u6548\u679c\u3002',
	        NeedCanvasSupport: '\u4f60\u9700\u8981\u4e00\u4e2a\u5b8c\u5168\u652f\u6301HTML5 Canvas\u7684\u6d4f\u89c8\u5668\u6765\u8fd0\u884cSpreadJS',
	        lsru :  ['907f',
	            'e872'],
	        lsde : ['8b8b56',
	            'bea168'],
	       
	        ls1: ['895b84845700000000000000000000000000634f62676563300000678b4f72674e966757000000304e650000008b534e966d8b75903000008b60548b8b5390904e520000000000000000000000000000000000000000000030',
	            '7f896104ce5370726561642e536865657473d09b802f2f01020d0a2cc430482cc5502c307b317d0234f67b317db8efc5504bd52814020d0ae6c5a8e2f7d101aef63073616c65732e7861406772617065636974792e636f6d02'],
	       
	        ls2:  ['895b84845700000000000000000000000000634f626765633000004e650000008b53524f0000005930',
	            '7f896104ce5370726561642e536865657473d09b802f2f01020d0a34f67b317db8ef69597b307d2902'],
	       
	        ls3: ['6762528b538b3000008f8800000000000000000000000000ff6097899951535f546c8b538b3000004e658b534e968b4f7590300000595d8d4eff8b578d4e904e4e67628b538b30000059975e52ff8b5390904e520000000000000000000000000000000000000000000030',
	            '2a7e30b8efc1020d0ad04c5370726561642e5368656574730ca800819648d69708d5b8efc1020d0a34f6b8efc550c4302814020d0a82f22d700cf7282d70aef62de57eb8efc1020d0a82002ea90cf7d101aef63073616c65732e7861406772617065636974792e636f6d02'],
	       
	        ls4: ['65658b538b30000059975e52ff8b5390904e520000000000000000000000000000000000000000000030',
	            'e048b8efc1020d0a82002ea90cf7d101aef63073616c65732e7861406772617065636974792e636f6d02'],
	       
	        ls5: ['895b84845700000000000000000000000000634f626765633000004e650000008b535d8f67ff8b5390904e520000000000000000000000000000000000000000000083535e5230',
	            '7f896104ce5370726561642e536865657473d09b802f2f01020d0a34f67b317db8eff2c71f0cf7d101aef63073616c65732e7861406772617065636974792e636f6db7d62ea902'],
	        ls6: ["6772674e895b848457000000000000000000000000004e548b7572ff67535f51525363673000005997835f6b5f6367ff8b817500000000000000000000000030",
	            "2c482c3a7f896104ce5370726561642e536865657473a7c1d528480c2ad6978d06d18843020d0a8200b797630f88430cf7f4353430302d3635372d3630303802"]
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
	        Exp_NotSupportedDataSource: '\u6570\u636e\u6e90\u4e0d\u652f\u6301\uff01'
	    };
	    
	
	}());

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_InvalidIndex: '\u65e0\u6548\u7d22\u5f15',
	        Exp_InvalidCount: '\u65e0\u6548\u6570\u91cf',
	        Exp_InvalidLevel: '\u65e0\u6548\u5c42\u7ea7',
	        Exp_GroupInfoIsNull: 'groupInfo\u4e3a\u7a7a'
	    };
	    
	
	}());

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        ToolStrip_PasteText: '\u7c98\u8d34',
	        ToolStrip_CutText: '\u526a\u8d34',
	        ToolStrip_CopyText: '\u590d\u5236',
	        ToolStrip_AutoFillText: '\u81ea\u52a8\u586b\u5145'
	    };
	
	}());

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_FloatingObjectHasSameNameError: '\u5f53\u524d\u8868\u5355\u5df2\u7ecf\u5305\u542b\u4e00\u4e2a\u5177\u6709\u76f8\u540c\u540d\u79f0\u7684\u6d6e\u52a8\u5bf9\u8c61\u3002',
	        Exp_FloatingObjectNameEmptyError: '\u6d6e\u52a8\u5bf9\u8c61\u5fc5\u987b\u5177\u6709\u540d\u79f0\u3002'
	    };
	    
	
	}());

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_RuleIsNull: '\u53c2\u6570 \'rule\' \u662f\u7a7a',
	        Exp_NotSupported: '\u4e0d\u652f\u6301\u5f02\u5e38'
	    };
	
	}());

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	(function () {
	    'use strict';
	
	    module.exports = {
	        Exp_InvalidColumnIndex: '\u65e0\u6548\u5217\u7d22\u5f15\u3002',
	        SortAscending: '\u5347\u5e8f',
	        SortDescending: '\u964d\u5e8f',
	        OK: '\u786e\u5b9a',
	        Cancel: '\u53d6\u6d88',
	        Search: '\u641c\u7d22',
	        CheckAll: '\u5168\u9009',
	        UncheckAll: '\u53d6\u6d88\u5168\u9009',
	        Blanks: '(\u7a7a)',
	        Exp_FilterItemIsNull: '\u7b5b\u9009\u9879\u4e3a\u7a7a\u3002',
	        Show: '\u663e\u793a',
	        ShowRows: '\u663e\u793a\u884c:',
	        And: '\u4e0e',
	        Or: '\u6216',
	        SortColor: '\u6309\u989c\u8272\u6392\u5e8f',
	        FilterColor: '\u6309\u989c\u8272\u7b5b\u9009',
	        FilterCellTitle: '\u6309\u5355\u5143\u683c\u989c\u8272\u7b5b\u9009',
	        FilterFontTitle: '\u6309\u5b57\u4f53\u989c\u8272\u7b5b\u9009',
	        SortCellTitle: '\u6309\u5355\u5143\u683c\u989c\u8272\u6392\u5e8f',
	        SortFontTitle: '\u6309\u5b57\u4f53\u989c\u8272\u6392\u5e8f',
	        FontColor: '\u5176\u4ed6\u5b57\u4f53\u989c\u8272...',
	        CellColor: '\u5176\u4ed6\u5355\u5143\u683c\u989c\u8272...',
	        NoFill: '\u65e0\u586b\u5145',
	        Automatic: '\u81ea\u52a8',
	        Clear: '\u4ece{0}\u4e2d\u6e05\u9664\u7b5b\u9009',
	        TextFilter: '\u6587\u672c\u7b5b\u9009',
	        DateFilter: '\u65e5\u671f\u7b5b\u9009',
	        NumberFilter: '\u6570\u5b57\u7b5b\u9009',
	        Custom: '\u81ea\u5b9a\u4e49\u7b5b\u9009...',
	        Equal: '\u7b49\u4e8e...',
	        NotEqual: '\u4e0d\u7b49\u4e8e...',
	        GreaterThan: '\u5927\u4e8e...',
	        GreaterOrEquals: '\u5927\u4e8e\u6216\u7b49\u4e8e...',
	        LessThan: '\u5c0f\u4e8e...',
	        LessThanOrEquals: '\u5c0f\u4e8e\u6216\u7b49\u4e8e...',
	        Between: '\u4ecb\u4e8e...',
	        Top10: '\u524d10\u9879...',
	        AboveAverage: '\u9ad8\u4e8e\u5e73\u5747\u503c',
	        BelowAverage: '\u4f4e\u4e8e\u5e73\u5747\u503c',
	        Begin: '\u5f00\u5934\u662f...',
	        End: '\u7ed3\u5c3e\u662f...',
	        Contain: '\u5305\u542b...',
	        NotContain: '\u4e0d\u5305\u542b...',
	        Before: '\u4e4b\u524d...',
	        After: '\u4e4b\u540e...',
	        Tomorrow: '\u660e\u5929',
	        Today: '\u4eca\u5929',
	        Yesterday: '\u6628\u5929',
	        NextWeek: '\u4e0b\u5468',
	        ThisWeek: '\u672c\u5468',
	        LastWeek: '\u4e0a\u5468',
	        NextMonth: '\u4e0b\u6708',
	        ThisMonth: '\u672c\u6708',
	        LastMonth: '\u4e0a\u6708',
	        NextQuarter: '\u4e0b\u5b63\u5ea6',
	        ThisQuarter: '\u672c\u5b63\u5ea6',
	        LastQuarter: '\u4e0a\u5b63\u5ea6',
	        NextYear: '\u660e\u5e74',
	        ThisYear: '\u4eca\u5e74',
	        LastYear: '\u53bb\u5e74',
	        YearToDate: '\u672c\u5e74\u5ea6\u622a\u6b62\u5230\u73b0\u5728',
	        AllDates: '\u671f\u95f4\u6240\u6709\u65e5\u671f',
	
	        Top10Filter: '\u81ea\u52a8\u7b5b\u9009\u524d10\u4e2a',
	        CustomTitle: '\u81ea\u5b9a\u4e49\u81ea\u52a8\u7b5b\u9009\u65b9\u5f0f',
	        ColorTitle: '\u53ef\u7528\u5355\u5143\u683c\u989c\u8272',
	        top: "\u6700\u5927",
	        bottom : '\u6700\u5c0f',
	
	        SortCell: '\u8bf7\u9009\u62e9\u4f5c\u4e3a\u6392\u5e8f\u4f9d\u636e\u7684\u5355\u5143\u683c\u989c\u8272:',
	        SortFont: '\u9009\u62e9\u7528\u4f5c\u6392\u5e8f\u4f9d\u636e\u7684\u5b57\u4f53\u989c\u8272:',
	        FilterCell: '\u8bf7\u9009\u62e9\u4f5c\u4e3a\u7b5b\u9009\u4f9d\u636e\u7684\u5355\u5143\u683c\u989c\u8272:',
	        FilterFont: '\u8bf7\u9009\u62e9\u4f5c\u4e3a\u7b5b\u9009\u4f9d\u636e\u7684\u5b57\u4f53\u989c\u8272:',
	        Selected: '\u5df2\u9009\u5b9a:',
	
	        IsEquals: '\u7b49\u4e8e',
	        NotEquals: '\u4e0d\u7b49\u4e8e',
	        IsGreaterThan: '\u5927\u4e8e',
	        IsGreaterOrEqual: '\u5927\u4e8e\u6216\u7b49\u4e8e',
	        IsLess: '\u5c0f\u4e8e',
	        LessOrEqual: '\u5c0f\u4e8e\u6216\u7b49\u4e8e',
	        IsBeginWith: '\u5f00\u5934\u662f',
	        NotBeginWith: '\u5f00\u5934\u4e0d\u662f',
	        IsEndWith: '\u7ed3\u5c3e\u662f',
	        NotEndWith: '\u7ed3\u5c3e\u4e0d\u662f',
	        IsContain: '\u5305\u542b',
	        NotContains: '\u4e0d\u5305\u542b',
	        IsAfter: '\u5728\u4ee5\u4e0b\u65e5\u671f\u4e4b\u540e',
	        AfterOrEqual: '\u5728\u4ee5\u4e0b\u65e5\u671f\u4e4b\u540e\u6216\u4e0e\u4e4b\u76f8\u540c',
	        IsBefore: '\u5728\u4ee5\u4e0b\u65e5\u671f\u4e4b\u524d',
	        BeforeOrEqual: '\u5728\u4ee5\u4e0b\u65e5\u671f\u4e4b\u524d\u6216\u4e0e\u4e4b\u76f8\u540c',
	        Q1: '\u7b2c 1 \u5b63\u5ea6',
	        Q2: '\u7b2c 2 \u5b63\u5ea6',
	        Q3: '\u7b2c 3 \u5b63\u5ea6',
	        Q4: '\u7b2c 4 \u5b63\u5ea6',
	        Jan: '\u4e00\u6708',
	        Feb: '\u4e8c\u6708',
	        Mar: '\u4e09\u6708',
	        Apr: '\u56db\u6708',
	        May: '\u4e94\u6708',
	        Jun: '\u516d\u6708',
	        Jul: '\u4e03\u6708',
	        Aug: '\u516b\u6708',
	        Sep: '\u4e5d\u6708',
	        Oct: '\u5341\u6708',
	        Nov: '\u5341\u4e00\u6708',
	        Dec: '\u5341\u4e8c\u6708',
	
	        Explain1: '\u53ef\u7528 ? \u4ee3\u8868\u5355\u4e2a\u5b57\u7b26',
	        Explain2: '\u7528 * \u4ee3\u8868\u4efb\u610f\u591a\u4e2a\u5b57\u7b26',
	
	        Year: '',
	        Day: ''
	    };
	
	}());

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_DragDropShiftTableCell: '\u6b64\u64cd\u4f5c\u662f\u4e0d\u5141\u8bb8\u7684\u3002\u6b64\u64cd\u4f5c\u8bd5\u56fe\u5728\u4f60\u8868\u5355\u7684\u8868\u683c\u4e2d\u6539\u53d8\u5355\u5143\u683c\u3002',
	        Exp_DragDropChangePartOfTable: '\u65e0\u6cd5\u5b8c\u6210\u6b64\u64cd\u4f5c: \u60a8\u6b63\u5728\u5c1d\u8bd5\u5c06\u90e8\u5206\u7684\u8868\u683c\u884c\u6216\u5217\u4ee5\u6b64\u65b9\u5f0f\u66f4\u6539\uff0c\u8fd9\u662f\u4e0d\u5141\u8bb8\u7684\u3002',
	        Exp_TableEmptyNameError: '\u8868\u683c\u7684\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\u3002',
	        Exp_TableNameInvalid: '\u8868\u683c\u7684\u540d\u79f0\u65e0\u6548\u3002',
	        Exp_TableInvalidRow: '\u65e0\u6548\u7684\u884c\u7d22\u5f15\u6216\u884c\u6570\u3002',
	        Exp_TableInvalidColumn: '\u65e0\u6548\u7684\u5217\u7d22\u5f15\u6216\u5217\u6570\u3002',
	        Exp_TableIntersectError: '\u8868\u683c\u4e0d\u80fd\u76f8\u4ea4\u3002',
	        Exp_TableHasSameNameError: '\u5f53\u524d\u8868\u5355\u5df2\u5305\u542b\u5177\u6709\u76f8\u540c\u540d\u79f0\u7684\u8868\u683c\u3002',
	        Exp_TableDataSourceNullError: '\u8868\u683c\u6570\u636e\u6e90\u4e0d\u80fd\u4e3a\u7a7a\u3002',
	        Exp_TableMoveOutOfRange: '\u8868\u683c\u4e0d\u80fd\u88ab\u79fb\u51fa\u8868\u5355\u3002',
	        Exp_TableResizeOutOfRange: '\u65e0\u6548\u7684\u884c\u6570\uff0c\u5217\u6570\u548c\u8868\u683c\u5927\u5c0f\u4e0d\u80fd\u8d85\u51fa\u8868\u5355\u3002',
	        Exp_ArrayFormulaTable: '\u591a\u4e2a\u5355\u5143\u683c\u6570\u7ec4\u516c\u5f0f\u5728\u8868\u683c\u4e2d\u662f\u4e0d\u5141\u8bb8\u7684\u3002',
	        Exp_TableResizeInvalidRange: '\u6807\u9898\u5fc5\u987b\u4fdd\u7559\u5728\u540c\u4e00\u884c\u4e0a\uff0c\u5e76\u4e14\u6700\u7ec8\u8868\u683c\u533a\u57df\u5fc5\u987b\u8986\u76d6\u539f\u6709\u8868\u683c\u533a\u57df\u3002'
	    };
	
	}());

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Blank: '(\u7a7a)',
	        Exp_SlicerNameInvalid: '\u5207\u7247\u5668\u7684\u540d\u79f0\u65e0\u6548\u3002',
	        Exp_SlicerNameExist: '\u5207\u7247\u5668\u7684\u540d\u79f0\u5df2\u7ecf\u5b58\u5728\uff0c\u8bf7\u8d4b\u4e88\u5176\u552f\u4e00\u540d\u3002'
	    };
	
	}());

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        CopyCells: '\u590d\u5236\u5355\u5143\u683c',
	        FillSeries: '\u4ee5\u5e8f\u5217\u65b9\u5f0f\u586b\u5145',
	        FillFormattingOnly: '\u4ec5\u586b\u5145\u683c\u5f0f',
	        FillWithoutFormatting: '\u4e0d\u5e26\u683c\u5f0f\u586b\u5145',
	        Exp_NumberOnly: '\u4ec5\u5bf9\u6570\u5b57\u6709\u6548',
	        Exp_RangeContainsMergedCell: '\u533a\u57df\u5185\u4e0d\u5e94\u5305\u542b\u5408\u5e76\u5355\u5143\u683c\u3002',
	        Exp_TargetContainsMergedCells: '\u76ee\u6807\u533a\u57df\u4e0d\u5e94\u5305\u542b\u5408\u5e76\u5355\u5143\u683c\u3002',
	        Exp_MergedCellsIdentical: '\u6b64\u884c\u4e3a\u9700\u8981\u5408\u5e76\u5355\u5143\u683c\u7684\u5927\u5c0f\u4e00\u81f4\u3002',
	        Exp_FillRangeContainsMergedCell: '\u65e0\u6cd5\u586b\u5145\u4e00\u7247\u5305\u542b\u5408\u5e76\u5355\u5143\u683c\u7684\u533a\u57df\u3002',
	        Exp_FillCellsReadOnly: '\u60a8\u5c1d\u8bd5\u586b\u5145\u7684\u5355\u5143\u683c\u662f\u88ab\u4fdd\u62a4\u7684\uff0c\u56e0\u6b64\u5b83\u662f\u53ea\u8bfb\u7684\u3002',
	        Exp_ChangeMergedCell: '\u65e0\u6cd5\u4ec5\u6539\u53d8\u5408\u5e76\u5355\u5143\u683c\u7684\u4e00\u90e8\u5206',
	        Exp_ColumnReadOnly: '\u60a8\u5c1d\u8bd5\u4fee\u6539\u7684\u5217\u662f\u88ab\u4fdd\u62a4\u7684\uff0c\u56e0\u6b64\u5b83\u662f\u53ea\u8bfb\u7684\u3002',
	        Exp_RowReadOnly: '\u60a8\u5c1d\u8bd5\u4fee\u6539\u7684\u884c\u662f\u88ab\u4fdd\u62a4\u7684\uff0c\u56e0\u6b64\u5b83\u662f\u53ea\u8bfb\u7684\u3002',
	        Exp_CellReadOnly: '\u60a8\u5c1d\u8bd5\u4fee\u6539\u7684\u5355\u5143\u683c\u662f\u88ab\u4fdd\u62a4\u7684\uff0c\u56e0\u6b64\u5b83\u662f\u53ea\u8bfb\u7684\u3002',
	        Exp_RangeIsNull: '\u533a\u95f4\u4e3a\u7a7a',
	        Exp_ChangePartOfArray: '\u65e0\u6cd5\u4ec5\u6539\u53d8\u90e8\u5206\u7684\u6570\u7ec4\u3002'
	    };
	    
	
	}());

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	(function () {
	    'use strict';
	
	    module.exports = {
	        copy: '\u590d\u5236',
	        cut: '\u526a\u5207',
	        pasteOptions: '\u7c98\u8d34\u9009\u9879:',
	        pasteAll: '\u5168\u90e8\u7c98\u8d34',
	        pasteFormula: '\u516c\u5f0f',
	        pasteValues: '\u503c',
	        pasteFormatting: '\u683c\u5f0f',
	        clearContents: '\u6e05\u9664',
	        insertRows: "\u63d2\u5165",
	        insertColumns: "\u63d2\u5165",
	        deleteRows: "\u5220\u9664",
	        deleteColumns: "\u5220\u9664",
	        insertSheet: '\u63d2\u5165',
	        deleteSheet: '\u5220\u9664',
	        insertComment: '\u63d2\u5165\u6279\u6ce8',
	        filter: '\u8fc7\u6ee4',
	        sort: '\u6392\u5e8f',
	        sortAscend: '\u4eceA\u5230Z',
	        sortDescend: '\u4eceZ\u5230A',
	        slicerSortAscend: "\u4eceA\u5230Z",
	        slicerSortDescend: "\u4eceZ\u5230A",
	        hideRows: "\u9690\u85cf",
	        hideColumns: "\u9690\u85cf",
	        hideSheet: '\u9690\u85cf',
	        unhideSheet: '\u663e\u793a',
	        unhideColumns: "\u663e\u793a",
	        unhideRows: "\u663e\u793a",
	        editComment: '\u7f16\u8f91\u6279\u6ce8',
	        deleteComment: '\u5220\u9664\u6279\u6ce8',
	        toggleComment: '\u663e\u793a/\u9690\u85cf \u6279\u6ce8',
	        removeSlicer: '\u79fb\u9664',
	        removeFloatingObject: '\u79fb\u9664'
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
	        Fbx_TableName_Description: '\u8868\u683c\u540d\u4e3a ',
	        Fbx_CustomName_Description: '\u81ea\u5b9a\u4e49\u540d\u79f0\u4e3a ',
	        _tableFunctionsResource: [
	            tableFunctionDescription('#All', '\u8fd4\u56de\u8868\u6216\u6307\u5b9a\u8868\u5217\u7684\u5b8c\u6574\u5185\u5bb9\uff0c\u5305\u62ec\u5217\u6807\u9898\u3001\u6570\u636e\u548c\u6c47\u603b\u884c'),
	            tableFunctionDescription('#Data', '\u8fd4\u56de\u8868\u6216\u6307\u5b9a\u8868\u5217\u7684\u6570\u636e\u5355\u5143\u683c'),
	            tableFunctionDescription('#Headers', '\u8fd4\u56de\u8868\u6216\u6307\u5b9a\u8868\u5217\u7684\u5217\u6807\u9898'),
	            tableFunctionDescription('#Totals', '\u8fd4\u56de\u8868\u6216\u6307\u5b9a\u8868\u5217\u7684\u6c47\u603b\u884c'),
	            tableFunctionDescription('@', '\u6b64\u884c')
	        ]
	    };
	
	}());

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_InvalidSheetIndex: '\u65e0\u6548\u7684\u8868\u5355\u7d22\u5f15\u3002'
	    };
	
	}());

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_FileIOError: '\u6587\u4ef6\u8bfb\u5199\u5f02\u5e38\u3002',
	        Exp_FontError: '\u975e\u652f\u6301\u5b57\u4f53\u683c\u5f0f\u6216\u975e\u6807\u51c6PDF\u5b57\u4f53\u3002'
	    };
	}());

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_InvalidConnectionSite: '\u65e0\u6548\u7684\u8fde\u63a5\u70b9\u3002',
	        Exp_DuplicatedName: '\u540d\u5b57\u91cd\u590d\u3002',
	        Exp_EmptyName: '\u540d\u5b57\u4e3a\u7a7a\u3002'
	    };
	
	}());

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.resources.zh.12.0.0.js.map
}));