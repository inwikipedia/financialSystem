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
		GC.Spread.Common.SR["ko"] = extend(GC.Spread.Common.SR["ko"] || {}, __webpack_require__(1));
	}
	if (GC.Spread.Common) {
		GC.Spread.Common.SR["ko"] = extend(GC.Spread.Common.SR["ko"] || {}, __webpack_require__(2));
	}
	if (GC.Spread.CalcEngine) {
		GC.Spread.CalcEngine.SR["ko"] = extend(GC.Spread.Common.SR["ko"] || {}, __webpack_require__(3));
	}
	if (GC.Spread.Sheets) {
		GC.Spread.Sheets.SR["ko"] = extend(GC.Spread.Common.SR["ko"] || {}, __webpack_require__(4));
	}
	if (GC.Spread.Sheets.Bindings) {
		GC.Spread.Sheets.Bindings.SR["ko"] = extend(GC.Spread.Common.SR["ko"] || {}, __webpack_require__(7));
	}
	if (GC.Spread.Sheets.Outlines) {
		GC.Spread.Sheets.Outlines.SR["ko"] = extend(GC.Spread.Common.SR["ko"] || {}, __webpack_require__(8));
	}
	if (GC.Spread.Sheets.Touch) {
		GC.Spread.Sheets.Touch.SR["ko"] = extend(GC.Spread.Common.SR["ko"] || {}, __webpack_require__(9));
	}
	if (GC.Spread.Sheets.FloatingObjects) {
		GC.Spread.Sheets.FloatingObjects.SR["ko"] = extend(GC.Spread.Common.SR["ko"] || {}, __webpack_require__(10));
	}
	if (GC.Spread.Sheets.ConditionalFormatting) {
		GC.Spread.Sheets.ConditionalFormatting.SR["ko"] = extend(GC.Spread.Common.SR["ko"] || {}, __webpack_require__(11));
	}
	if (GC.Spread.Sheets.Filter) {
		GC.Spread.Sheets.Filter.SR["ko"] = extend(GC.Spread.Common.SR["ko"] || {}, __webpack_require__(12));
	}
	if (GC.Spread.Sheets.Tables) {
		GC.Spread.Sheets.Tables.SR["ko"] = extend(GC.Spread.Common.SR["ko"] || {}, __webpack_require__(13));
	}
	if (GC.Spread.Sheets.Slicers) {
		GC.Spread.Sheets.Slicers.SR["ko"] = extend(GC.Spread.Common.SR["ko"] || {}, __webpack_require__(14));
	}
	if (GC.Spread.Sheets.Fill) {
		GC.Spread.Sheets.Fill.SR["ko"] = extend(GC.Spread.Common.SR["ko"] || {}, __webpack_require__(15));
	}
	if (GC.Spread.Sheets.ContextMenu) {
		GC.Spread.Sheets.ContextMenu.SR["ko"] = extend(GC.Spread.Common.SR["ko"] || {}, __webpack_require__(16));
	}
	if (GC.Spread.Sheets.FormulaTextBox) {
		GC.Spread.Sheets.FormulaTextBox.SR["ko"] = extend(GC.Spread.Common.SR["ko"] || {}, __webpack_require__(17));
	}
	if (GC.Spread.Sheets.Print) {
		GC.Spread.Sheets.Print.SR["ko"] = extend(GC.Spread.Common.SR["ko"] || {}, __webpack_require__(18));
	}
	if (GC.Spread.Sheets.PDF) {
		GC.Spread.Sheets.PDF.SR["ko"] = extend(GC.Spread.Common.SR["ko"] || {}, __webpack_require__(19));
	}
	if (GC.Spread.Sheets.Shapes) {
		GC.Spread.Sheets.Shapes.SR["ko"] = extend(GC.Spread.Common.SR["ko"] || {}, __webpack_require__(20));
	}
	module.exports = GC.Spread;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = {
	    Exp_InvalidDateFormat: '\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \ud615\uc2dd\uc758 \ub0a0\uc9dc \ud328\ud134',
	    Exp_InvalidExponentFormat: '\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \ud615\uc2dd\uc758 \uc9c0\uc218 ',
	    Exp_InvalidSemicolons: '\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \ud615\uc2dd: \uc138\ubbf8\ucf5c\ub860\uc774 \ub108\ubb34 \ub9ce\uc74c',
	    Exp_InvalidNumberGroupSize: '\uc22b\uc790 \uadf8\ub8f9 \uc0ac\uc774\uc988\ub294 1\uc5d0\uc11c 9\uc0ac\uc774\uc5ec\uc57c \ud569\ub2c8\ub2e4.',
	    Exp_BadFormatSpecifier: '\uc798\ubabb\ub41c \ud615\uc2dd \uc9c0\uc815\uc790',
	    Exp_InvalidNumberFormat: '\uc798\ubabb\ub41c \uc22b\uc790 \uc11c\uc2dd \ud328\ud134',
	    Exp_InvalidCast: '\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uce90\uc2a4\ud2b8 \uc608\uc678',
	    Exp_Separator: '\uc18c\uc218 \uc790\ub9bf\uc218 \uad6c\ubd84\uc790\uc640 \ubaa9\ub85d \uad6c\ubd84\uc790 \uadf8\ub9ac\uace0 \ubc30\uc5f4 \ubaa9\ub85d \uad6c\ubd84\uc790\ub294 cluture info\uc640 \ub2ec\ub77c\uc57c \ud569\ub2c8\ub2e4.'
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = {
	    Exp_TokenIsNull: 'token\uc740 null\uc785\ub2c8\ub2e4',
	    Exp_InvalidBackslash: '\'\\\'\ub294 \uc778\uc2dd\ud560\uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',
	    Exp_FormatIllegal: '\ud615\uc2dd\uc774 \uc798\ubabb \ub418\uc5c8\uc2b5\ub2c8\ub2e4..',
	    Exp_ValueIsNull: '\uac12\uc740 null \uc785\ub2c8\ub2e4',
	    Exp_DuplicatedDescriptor: '\uc124\uba85\uc790 \uc720\ud615\uc774 \ucd94\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
	    Exp_TokenIllegal: 'token\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
	    Exp_ValueIllegal: 'value\uac00 \uc798\ubabb \ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
	    Exp_InvalidCast: '\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 Cast \uc608\uc678\uc785\ub2c8\ub2e4.'
	};

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
	        Exp_InvalidCast: 'Invalid Cast Exception',
	        Exp_FormulaInvalidChar: '\uc785\ub825\ud55c \uc218\uc2dd\uc5d0 \uc798\ubabb\ub41c \ubb38\uc790\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. {1}\uc5d0 \ub300\ud55c \uc778\ub371\uc2a4\uc5d0 \'{0}\'\uc774(\uac00) \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.',
	        Exp_FormulaInvalid: '\uc785\ub825\ud55c \uc218\uc2dd\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
	        Exp_InvalidFunctionName: '\uc798\ubabb\ub41c \ud568\uc218 \uc774\ub984',
	        Exp_InvalidOverrideFunction: '\uae30\ubcf8 \ud568\uc218\ub97c \uc7ac\uc815\uc758\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',
	        Exp_InvalidArray: '\uc798\ubabb\ub41c \ubc30\uc5f4',
	        Exp_OverrideNotAllowed: '\ud568\uc218\ub97c \uc7ac\uc815\uc758\ud558\ub824\uace0 \ud558\uc9c0\ub9cc \uc7ac\uc815\uc758\uac00 \ud5c8\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.',
	        Exp_NoSyntax: '\uad6c\ubb38 \'{1}\'\uacfc(\uc640) \uc77c\uce58\ud558\ub294 \uad6c\ubb38 \'{0}\'\uc774(\uac00) \uc5c6\uc2b5\ub2c8\ub2e4.',
	        Exp_IsValid: '\'{0}\'\uc774(\uac00) \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
	        Exp_InvalidParameters: '{0}\uc758 \ud568\uc218 \ub9e4\uac1c \ubcc0\uc218\uac00 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
	        Exp_InvalidArrayColumns: '{0}\uc5d0\uc11c \ubc30\uc5f4 \uc5f4\uc758 \uae38\uc774\uac00 \ub2e4\ub985\ub2c8\ub2e4.',
	        Exp_ExprIsNull: '\uc778\uc218 \'expr\'\uc774(\uac00) null\uc785\ub2c8\ub2e4.',
	        Exp_InvalidOperation: 'Invalid Operation Exception',
	        Exp_ArgumentNull: 'Argument Null Exception',
	        Exp_CriteriaIsNull: '\uae30\uc900\uc774 null\uc785\ub2c8\ub2e4.',
	        Exp_Format: '\ud615\uc2dd',
	        Exp_ArrayFromulaPart: '\ubc30\uc5f4\uc758 \uc77c\ubd80\ub97c \ubcc0\uacbd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',
	        Exp_NotSupported: 'NotSupportException',
	        _builtInFunctionsResource: {
	            'ABS': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uac12\uc758 \uc808\ub300\uac12\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'ACCRINT': functionDescription('\uc774 \ud568\uc218\ub294 \uc815\uae30\uc801\uc73c\ub85c \uc774\uc790\ub97c \uc9c0\uae09\ud558\ub294 \uc720\uac00 \uc99d\uad8c\uc758 \uacbd\uacfc \uc774\uc790\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('issue'),
	                parameterDescription('first'),
	                parameterDescription('settle'),
	                parameterDescription('rate'),
	                parameterDescription('par'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'ACCRINTM': functionDescription('\uc774 \ud568\uc218\ub294 \uc815\uae30\uc801\uc73c\ub85c \uc774\uc790\ub97c \uc9c0\uae09\ud558\ub294 \uc720\uac00 \uc99d\uad8c\uc758 \ub9cc\uae30 \uc2dc \uacbd\uacfc \uc774\uc790\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('issue'),
	                parameterDescription('maturity'),
	                parameterDescription('rate'),
	                parameterDescription('par'),
	                parameterDescription('basis')
	            ]),
	            'ACOS': functionDescription('\uc774 \ud568\uc218\ub294 ACOS \uc989, COS\uc774 \uc9c0\uc815\ub41c \uac12\uc778 \uac01\ub3c4\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'ACOSH': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uac12\uc758 ACOSH\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'ADDRESS': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \ud589/\uc5f4 \ubc88\ud638\ub97c \uac00\uc9c0\uace0 \ud14d\uc2a4\ud2b8 \ud615\uc2dd\uc758 \uc140 \uc8fc\uc18c\ub97c \ub9cc\ub4ed\ub2c8\ub2e4.', [
	                parameterDescription('row'),
	                parameterDescription('column'),
	                parameterDescription('absnum'),
	                parameterDescription('a1style'),
	                parameterDescription('sheettext')
	            ]),
	            'AMORDEGRC': functionDescription('\uc774 \ud568\uc218\ub294 \ube44\ub840 \ubc30\ubd84 \ub41c \uac10\uac00 \uc0c1\uac01\uc744 \uace0\ub824\ud558\uc5ec \ud68c\uacc4 \uae30\uac04\uc758 \uac10\uac00 \uc0c1\uac01\uc744 \ubc18\ud658\ud558\uace0 \uc790\uc0b0\uc758 \uc218\uba85\uc744 \uae30\uc900\uc73c\ub85c \uac10\uac00 \uc0c1\uac01 \uacc4\uc218\ub97c \uacc4\uc0b0\uc5d0 \uc801\uc6a9\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cost'),
	                parameterDescription('datepurchased'),
	                parameterDescription('firstperiod'),
	                parameterDescription('salvage'),
	                parameterDescription('period'),
	                parameterDescription('drate'),
	                parameterDescription('basis')
	            ]),
	            'AMORLINC': functionDescription('\uc774 \ud568\uc218\ub294 \uc77c\ud560 \uacc4\uc0b0\ub41c \uac10\uac00 \uc0c1\uac01\uc561\uc744 \uace0\ub824\ud558\uc5ec \ud68c\uacc4 \uae30\uac04\uc5d0 \ub300\ud55c \uac10\uac00 \uc0c1\uac01\uc561\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cost'),
	                parameterDescription('datepurchased'),
	                parameterDescription('firstperiod'),
	                parameterDescription('salvage'),
	                parameterDescription('period'),
	                parameterDescription('drate'),
	                parameterDescription('basis')
	            ]),
	            'AND': functionDescription('\ubaa8\ub4e0 \uc778\uc218\uac00 True\uc778\uc9c0 \ud655\uc778\ud558\uc2ed\uc2dc\uc624. \uc778\uc218\uac00 \ubaa8\ub450 True\uc774\uba74 True\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('logical1'),
	                parameterDescription('logical2')
	            ]),
	            'ASIN': functionDescription('\uc774 \ud568\uc218\ub294 ASIN \uc989, SIN\uc774 \uc9c0\uc815\ub41c \uac12\uc778 \uac01\ub3c4\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'ASINH': functionDescription('\uc774 \ud568\uc218\ub294 ASINH\uac12\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'ATAN': functionDescription('\uc774 \ud568\uc218\ub294 ATAN \uc989, TAN\uac00 \uc9c0\uc815\ub41c \uac12\uc778 \uac01\ub3c4\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'ATAN2': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c x \uc88c\ud45c\uc640 y \uc88c\ud45c\uc758 ATAN\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('y')
	            ]),
	            'ATANH': functionDescription('\uc774 \ud568\uc218\ub294 ATANH\uac12\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'AVEDEV': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uac12\uc758 \uc808\ub300 \ud3b8\ucc28\uc758 \ud3c9\uade0\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'AVERAGE': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc22b\uc790 \uac12\uc758 \ud3c9\uade0\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'AVERAGEA': functionDescription('\uc774 \ud568\uc218\ub294 \ud14d\uc2a4\ud2b8, \ub17c\ub9ac\uac12, \uc22b\uc790\uac12\uc744 \ube44\ub86f\ud55c \uc9c0\uc815\ub41c \uac12\uc758 \ud3c9\uade0\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'AVERAGEIF': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc22b\uc790 \uac12\uc774 \uc9c0\uc815\ub41c \uae30\uc900\uc744 \ucda9\uc871\ud560 \uacbd\uc6b0\uc758 \ud3c9\uade0\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true),
	                parameterDescription('condition')
	            ]),
	            'AVERAGEIFS': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc5ec\ub7ec \uae30\uc900\uc744 \ucda9\uc871\ud558\ub294 \ubaa8\ub4e0 \uc140\uc758 \ud3c9\uade0\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('condition1'),
	                parameterDescription('value2', true),
	                parameterDescription('condition2...')
	            ]),
	            'BESSELI': functionDescription('\uc774 \ud568\uc218\ub294 \uc21c \ud5c8\uc218 \uc778\uc218\uc5d0 \ub300\ud574 \uacc4\uc0b0\ub418\ub294 \uccab \ubc88\uc9f8 \uc885\ub958\uc758 \uc218\uc815\ub41c Bessel \ud568\uc218\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('order')
	            ]),
	            'BESSELJ': functionDescription('\uc774 \ud568\uc218\ub294 \uccab \ubc88\uc9f8 \uc885\ub958\uc758 Bessel \ud568\uc218\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('order')
	            ]),
	            'BESSELK': functionDescription('\uc774 \ud568\uc218\ub294 \uc21c \ud5c8\uc218 \uc778\uc218\uc5d0 \ub300\ud574 \uacc4\uc0b0\ub418\ub294 \ub450 \ubc88\uc9f8 \uc885\ub958\uc758 \uc218\uc815\ub41c Bessel \ud568\uc218\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('order')
	            ]),
	            'BESSELY': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \ubc88\uc9f8 \uc885\ub958\uc758 Bessel \ud568\uc218\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('order')
	            ]),
	            'BETADIST': functionDescription('\uc774 \ud568\uc218\ub294 \ub204\uc801 \ubca0\ud0c0 \ubd84\ud3ec \ud568\uc218\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'BETAINV': functionDescription('\uc774 \ud568\uc218\ub294 \ub204\uc801 \ubca0\ud0c0 \ubd84\ud3ec \ud568\uc218\uc758 \uc5ed\ud568\uc218\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('prob'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'BIN2DEC': functionDescription('\uc774 \ud568\uc218\ub294 2\uc9c4\uc218\ub97c 10\uc9c4\uc218\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number')
	            ]),
	            'BIN2HEX': functionDescription('\uc774 \ud568\uc218\ub294 2\uc9c4\uc218\ub97c 16\uc9c4\uc218\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'BIN2OCT': functionDescription('\uc774 \ud568\uc218\ub294 2\uc9c4\uc218\ub97c 8\uc9c4\uc218\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'BINOMDIST': functionDescription('\uc774 \ud568\uc218\ub294 \uac1c\ubcc4\ud56d \uc774\ud56d \ubd84\ud3ec \ud655\ub960\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('cumulative')
	            ]),
	            'CEILING': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uac12\uc758 \ubc30\uc218\uac00 \ub418\ub3c4\ub85d \uc808\ub300 \uac12\uc744 \uc62c\ub9bc\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('signif')
	            ]),
	            'CHAR': functionDescription('\uc774 \ud568\uc218\ub294 \ubc88\ud638\uc5d0 \ud574\ub2f9\ud558\ub294 \ubb38\uc790\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'CHIDIST': functionDescription('\uc774 \ud568\uc218\ub294 \uce74\uc774 \uc81c\uacf1 \ubd84\ud3ec\uc758 \ub2e8\uce21 \ud655\ub960\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('deg')
	            ]),
	            'CHIINV': functionDescription('\uc774 \ud568\uc218\ub294 \uce74\uc774 \uc81c\uacf1 \ubd84\ud3ec\uc758 \ub2e8\uce21 \ud655\ub960\uc758 \uc5ed\ud568\uc218\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('prob'),
	                parameterDescription('deg')
	            ]),
	            'CHITEST': functionDescription('\uc774 \ud568\uc218\ub294 \uce74\uc774 \uc81c\uacf1 \ubd84\ud3ec\uc5d0\uc11c \ub3c5\ub9bd \uac80\uc99d \uacb0\uacfc\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('obs_array'),
	                parameterDescription('exp_array')
	            ]),
	            'CHOOSE': functionDescription('\uc774 \ud568\uc218\ub294 \uac12 \ubaa9\ub85d\uc5d0\uc11c \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('index'),
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'CLEAN': functionDescription('\uc774 \ud568\uc218\ub294 \ud14d\uc2a4\ud2b8\uc5d0\uc11c \uc778\uc1c4\ud560 \uc218 \uc5c6\ub294 \ubb38\uc790\ub97c \ubaa8\ub450 \uc81c\uac70\ud569\ub2c8\ub2e4.', [
	                parameterDescription('text')
	            ]),
	            'CODE': functionDescription('\uc774 \ud568\uc218\ub294 \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\uc758 \uccab\uc9f8 \ubb38\uc790\ub97c \ub098\ud0c0\ub0b4\ub294 \uc22b\uc790 \ucf54\ub4dc\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \ubc18\ud658\ub418\ub294 \ucf54\ub4dc\ub294 Windows \ubb38\uc790 \uc9d1\ud569(ANSI)\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4.', [
	                parameterDescription('text')
	            ]),
	            'COLUMN': functionDescription('\uc774 \ud568\uc218\ub294 \ucc38\uc870 \uc601\uc5ed\uc758 \uc5f4 \ubc88\ud638\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('reference')
	            ]),
	            'COLUMNS': functionDescription('\uc774 \ud568\uc218\ub294 \ubc30\uc5f4\uc5d0 \uc788\ub294 \uc5f4 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array')
	            ]),
	            'COMBIN': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \ud56d\ubaa9 \uc218\uc5d0 \ub300\ud574 \uac00\ub2a5\ud55c \uc870\ud569 \uc218\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('k'),
	                parameterDescription('n')
	            ]),
	            'COMPLEX': functionDescription('\uc774 \ud568\uc218\ub294 \uc2e4\uc218\ubd80\uc640 \ud5c8\uc218\ubd80\uc758 \uacc4\uc218\ub97c \ubcf5\uc18c\uc218\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('realcoeff'),
	                parameterDescription('imagcoeff'),
	                parameterDescription('suffix')
	            ]),
	            'CONCATENATE': functionDescription('\uc774 \ud568\uc218\ub294 \uc5ec\ub7ec \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4 \ub610\ub294 \uc22b\uc790\ub97c \ud558\ub098\uc758 \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\ub85c \uacb0\ud569\ud569\ub2c8\ub2e4.', [
	                parameterDescription('text1'),
	                parameterDescription('text2'),
	                parameterDescription('....')
	            ]),
	            'CONFIDENCE': functionDescription('\uc774 \ud568\uc218\ub294 \ubaa8\uc9d1\ub2e8 \ud3c9\uade0\uc758 \uc2e0\ub8b0 \uad6c\uac04\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('alpha'),
	                parameterDescription('stdev'),
	                parameterDescription('size')
	            ]),
	            'CONVERT': functionDescription('\uc774 \ud568\uc218\ub294 \uc22b\uc790\ub97c \ub2e4\ub978 \ub2e8\uc704 \uccb4\uacc4\uc758 \uc22b\uc790\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('from-unit'),
	                parameterDescription('to-unit')
	            ]),
	            'CORREL': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \ub370\uc774\ud130 \uc138\ud2b8\uc758 \uc0c1\uad00 \uacc4\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'COS': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uac01\ub3c4\uc758 COS\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('angle')
	            ]),
	            'COSH': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uac12\uc758 COSH\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'COUNT': functionDescription('\uc774 \ud568\uc218\ub294 \uc22b\uc790\uac00 \uc788\ub294 \uc140 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'COUNTA': functionDescription('\uc774 \ud568\uc218\ub294 \uc22b\uc790, \ud14d\uc2a4\ud2b8 \ub610\ub294 \ub17c\ub9ac\uac12\uc774 \uc788\ub294 \uc140 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'COUNTBLANK': functionDescription('\uc774 \ud568\uc218\ub294 \uc2dc\ud2b8\uc758 \uc140 \ubc94\uc704 \ub0b4\uc5d0 \uc788\ub294 \ube48 \uc140\uc758 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cellrange')
	            ]),
	            'COUNTIF': functionDescription('\uc774 \ud568\uc218\ub294 \ud2b9\uc815 \uc870\uac74\uc744 \ub9cc\uc871\ud558\ub294 \uc140 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cellrange'),
	                parameterDescription('condition')
	            ]),
	            'COUNTIFS': functionDescription('\uc774 \ud568\uc218\ub294 \uc5ec\ub7ec \uc870\uac74\uc744 \ub9cc\uc871\ud558\ub294 \uc140 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cellrange'),
	                parameterDescription('condition')
	            ]),
	            'COUPDAYBS': functionDescription('\uc774 \ud568\uc218\ub294 \uc774\uc790 \uc9c0\uae09 \uae30\uac04\uc758 \uc2dc\uc791\uc77c\ubd80\ud130 \uacb0\uc0b0\uc77c\uae4c\uc9c0\uc758 \ub0a0\uc9dc \uc218\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COUPDAYS': functionDescription('\uc774 \ud568\uc218\ub294 \uacb0\uc0b0\uc77c\uc774 \ub4e4\uc5b4 \uc788\ub294 \uc774\uc790 \uc9c0\uae09 \uae30\uac04\uc758 \ub0a0\uc9dc \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COUPDAYSNC': functionDescription('\uc774 \ud568\uc218\ub294 \uacb0\uc0b0\uc77c\ubd80\ud130 \ub2e4\uc74c \uc774\uc790 \uc9c0\uae09\uc77c\uae4c\uc9c0\uc758 \ub0a0\uc9dc \uc218\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COUPNCD': functionDescription('\uc774 \ud568\uc218\ub294 \uacb0\uc0b0\uc77c \uc774\ud6c4\uc758 \ub2e4\uc74c \uc774\uc790 \uc9c0\uae09\uc77c\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basi')
	            ]),
	            'COUPNUM': functionDescription('\uc774 \ud568\uc218\ub294 \uacb0\uc0b0\uc77c\uacfc \ub9cc\uae30\uc77c \uc0ac\uc774\uc758 \uc774\uc790 \uc9c0\uae09 \ud69f\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COUPPCD': functionDescription('\uc774 \ud568\uc218\ub294 \uacb0\uc0b0\uc77c \ubc14\ub85c \uc804 \uc774\uc790 \uc9c0\uae09\uc77c\uc744 \ub098\ud0c0\ub0b4\ub294 \uc22b\uc790\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'COVAR': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \ub370\uc774\ud130 \uc9d1\ud569\uc758 \uac01 \ub370\uc774\ud130 \uc694\uc18c \uc30d\uc5d0 \ub300\ud55c \ud3b8\ucc28\ub97c \uacf1\ud55c \uac12\uc758 \ud3c9\uade0\uc744 \ub098\ud0c0\ub0b4\ub294 \uacf5 \ubd84\uc0b0\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'CRITBINOM': functionDescription('\uc774 \ud568\uc218\ub294 \ub204\uc801 \uc774\ud56d \ubd84\ud3ec\uac00 \uae30\uc900\uce58 \uc774\uc0c1\uc774 \ub418\ub294 \uac12 \uc911 \ucd5c\uc18c\uac12\uc744 \ub098\ud0c0\ub0b4\ub294 \uc870\uac74 \uc774\ud56d\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('alpha')
	            ]),
	            'CUMIPMT': functionDescription('\uc774 \ud568\uc218\ub294 \uc2dc\uc791 \uae30\uac04\uacfc \uc885\ub8cc \uae30\uac04 \uc0ac\uc774\uc5d0 \ub0a9\uc785\ud558\ub294 \ub300\ucd9c\uae08 \uc774\uc790\uc758 \ub204\uacc4\uc561\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('rate'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('startperiod'),
	                parameterDescription('endperiod'),
	                parameterDescription('paytype')
	            ]),
	            'CUMPRINC': functionDescription('\uc774 \ud568\uc218\ub294 \uc2dc\uc791 \uae30\uac04\uacfc \uc885\ub8cc \uae30\uac04 \uc0ac\uc774\uc5d0 \ub0a9\uc785\ud558\ub294 \ub300\ucd9c\uae08 \uc6d0\uae08\uc758 \ub204\uacc4\uc561\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('rate'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('startperiod'),
	                parameterDescription('endperiod'),
	                parameterDescription('paytype')
	            ]),
	            'DATE': functionDescription('\uc774 \ud568\uc218\ub294 \ud2b9\uc815 \ub0a0\uc9dc\uc5d0 \ub300\ud574 \ub144, \uc6d4, \uc77c\ub85c \uc9c0\uc815\ub41c DateTime \uac1c\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('year'),
	                parameterDescription('month'),
	                parameterDescription('day')
	            ]),
	            'DATEDIF': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \ub0a0\uc9dc \uc0ac\uc774\uc758 \uc77c \uc218, \uc6d4 \uc218 \ub610\ub294 \ub144 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('date1'),
	                parameterDescription('date2'),
	                parameterDescription('outputcode')
	            ]),
	            'DATEVALUE': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \ub0a0\uc9dc\uc758 DateTime \uac1c\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('date_string')
	            ]),
	            'DAVERAGE': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc870\uac74\uc5d0 \ub9de\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub098 \ubaa9\ub85d\uc758 \uc5f4\uc5d0 \uc788\ub294 \uac12\uc758 \ud3c9\uade0\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DAY': functionDescription('\uc774 \ud568\uc218\ub294 \uc8fc\uc5b4\uc9c4 \ub2ec\uc758 \uc9c0\uc815\ub41c \ub0a0\uc9dc\uc5d0 \ud574\ub2f9\ud558\ub294 \uac12\uc744 1\uacfc 31 \uc0ac\uc774\uc758 \uc22b\uc790\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('date')
	            ]),
	            'DAYS360': functionDescription('\uc774 \ud568\uc218\ub294 1\ub144\uc744 360\uc77c\ub85c \ud558\uc5ec, \ub450 \ub0a0\uc9dc \uc0ac\uc774\uc758 \ub0a0\uc9dc \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate'),
	                parameterDescription('method')
	            ]),
	            'DB': functionDescription('\uc774 \ud568\uc218\ub294 \uace0\uc815 \uc77c\ubcc4 \uade0\ud615 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc9c0\uc815\ud55c \uae30\uac04 \ub3d9\uc548 \uc790\uc0b0\uc758 \uac10\uac00 \uc0c1\uac01\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life'),
	                parameterDescription('period'),
	                parameterDescription('month')
	            ]),
	            'DCOUNT': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc870\uac74\uc5d0 \ub9de\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub098 \ubaa9\ub85d\uc758 \uc5f4\uc5d0\uc11c \uc22b\uc790\ub97c \ud3ec\ud568\ud558\ub294 \uc140\uc758 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DCOUNTA': functionDescription('\uc9c0\uc815\ub41c \uc870\uac74\uc5d0 \ub9de\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub098 \ubaa9\ub85d\uc758 \uc5f4\uc5d0\uc11c \ube44\uc5b4 \uc788\uc9c0 \uc54a\uc740 \uc140\uc758 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DDB': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ud55c \uae30\uac04 \ub3d9\uc548 \uc774\uc911 \uccb4\uac10\ubc95\uc774\ub098 \uc0ac\uc6a9\uc790\uac00 \uc815\ud558\ub294 \ub2e4\ub978 \ubc29\ubc95\uc73c\ub85c \uc790\uc0b0\uc758 \uac10\uac00 \uc0c1\uac01\uc561\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life'),
	                parameterDescription('period'),
	                parameterDescription('factor')
	            ]),
	            'DEC2BIN': functionDescription('\uc774 \ud568\uc218\ub294 10\uc9c4\uc218\ub97c 2\uc9c4\uc218\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'DEC2HEX': functionDescription('\uc774 \ud568\uc218\ub294 10\uc9c4\uc218\ub97c 16\uc9c4\uc218\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'DEC2OCT': functionDescription('\uc774 \ud568\uc218\ub294 10\uc9c4\uc218\ub97c 8\uc9c4\uc218\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'DEGREES': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uac12\uc744 \ub77c\ub514\uc548 \ud615\ud0dc\uc758 \uac01\ub3c4\uc5d0\uc11c \ub3c4 \ub2e8\uc704\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('angle')
	            ]),
	            'DELTA': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \uac12\uc774 \uac19\uc740\uc9c0 \uc2dd\ubcc4\ud569\ub2c8\ub2e4. \ub450 \uac12\uc774 \uac19\uc73c\uba74 1\uc744 \ubc18\ud658\ud558\uace0, \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 0\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2')
	            ]),
	            'DEVSQ': functionDescription('\uc774 \ud568\uc218\ub294 \ud45c\ubcf8 \ud3c9\uade0\uc73c\ub85c\ubd80\ud130 \ub370\uc774\ud130 \uc694\uc18c \ub610\ub294 \ub370\uc774\ud130 \uc694\uc18c \ubc30\uc5f4\uc758 \ud3b8\ucc28\uc758 \uc81c\uacf1\uc758 \ud569\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'DGET': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc870\uac74\uc5d0 \ub9de\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub098 \ubaa9\ub85d\uc758 \uc5f4\uc5d0\uc11c \ub2e8\uc77c \uac12\uc744 \ucd94\ucd9c\ud569\ub2c8\ub2e4.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DISC': functionDescription('\uc774 \ud568\uc218\ub294 \uc720\uac00 \uc99d\uad8c\uc758 \ud560\uc778\uc728\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('pricep'),
	                parameterDescription('redeem'),
	                parameterDescription('basis')
	            ]),
	            'DMAX': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc870\uac74\uc5d0 \ub9de\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub098 \ubaa9\ub85d\uc758 \uc5f4\uc5d0\uc11c \uac00\uc7a5 \ud070 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DMIN': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc870\uac74\uc5d0 \ub9de\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub098 \ubaa9\ub85d\uc758 \uc5f4\uc5d0\uc11c \uac00\uc7a5 \uc791\uc740 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DOLLAR': functionDescription('\uc774 \ud568\uc218\ub294 \ud1b5\ud654 \ud615\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc22b\uc790\ub97c \ud14d\uc2a4\ud2b8\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4. \uc18c\uc218\ub294 \uc9c0\uc815\ub41c \uc790\ub9bf\uc218\ub85c \ubc18\uc62c\ub9bc\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('digits')
	            ]),
	            'DOLLARDE': functionDescription('\uc774 \ud568\uc218\ub294 \ubd84\uc218\ub85c \ud45c\uc2dc\ub41c \uae08\uc561\uc744 \uc18c\uc218\ub85c \ud45c\uc2dc\ub41c \uae08\uc561\uc73c\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('fractionaldollar'),
	                parameterDescription('fraction')
	            ]),
	            'DOLLARFR': functionDescription('\uc774 \ud568\uc218\ub294 \uc18c\uc218\ub85c \ud45c\uc2dc\ub41c \uae08\uc561\uc744 \ubd84\uc218\ub85c \ud45c\uc2dc\ub41c \uae08\uc561\uc73c\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('decimaldollar'),
	                parameterDescription('fraction')
	            ]),
	            'DPRODUCT': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc870\uac74\uc5d0 \ub9de\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub098 \ubaa9\ub85d\uc758 \uc5f4\uc5d0\uc11c \uac12\ub4e4\uc758 \uacf1\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DSTDEV': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc870\uac74\uc5d0 \ub9de\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub098 \ubaa9\ub85d\uc758 \uc5f4\uc5d0 \uc788\ub294 \uc22b\uc790\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud45c\ubcf8 \uc9d1\ub2e8\uc758 \ud45c\uc900 \ud3b8\ucc28\ub97c \uad6c\ud569\ub2c8\ub2e4.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DSTDEVP': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc870\uac74\uc5d0 \ub9de\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub098 \ubaa9\ub85d\uc758 \uc5f4\uc5d0 \uc788\ub294 \uc22b\uc790\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc804\uccb4 \ubaa8\uc9d1\ub2e8\uc758 \ud45c\uc900 \ud3b8\ucc28\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DSUM': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc870\uac74\uc5d0 \ub9de\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub098 \ubaa9\ub85d\uc758 \uc5f4\uc5d0\uc11c \uac12\ub4e4\uc758 \ud569\uc744 \uad6c\ud569\ub2c8\ub2e4.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DURATION': functionDescription('\uc774 \ud568\uc218\ub294 \uac00\uc815\ub41c \uc561\uba74\uac00 $100\uc5d0 \ub300\ud55c Macaulay \uae30\uac04\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('coupon'),
	                parameterDescription('yield'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'DVAR': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc870\uac74\uc5d0 \ub9de\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub098 \ubaa9\ub85d\uc758 \uc5f4\uc5d0 \uc788\ub294 \uc22b\uc790\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud45c\ubcf8 \uc9d1\ub2e8\uc758 \ubd84\uc0b0\uc744 \uad6c\ud569\ub2c8\ub2e4.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'DVARP': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc870\uac74\uc5d0 \ub9de\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub098 \ubaa9\ub85d\uc758 \uc5f4\uc5d0 \uc788\ub294 \uc22b\uc790\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc804\uccb4 \ubaa8\uc9d1\ub2e8\uc758 \ubd84\uc0b0\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('database'),
	                parameterDescription(' field'),
	                parameterDescription(' criteria')
	            ]),
	            'EDATE': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ud55c \ub0a0\uc9dc \uc804\uc774\ub098 \ud6c4\uc758 \uac1c\uc6d4 \uc218\ub97c \ub098\ud0c0\ub0b4\ub294 \ub0a0\uc9dc\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('startdate'),
	                parameterDescription('months')
	            ]),
	            'EFFECT': functionDescription('\uc774 \ud568\uc218\ub294 \uc8fc\uc5b4\uc9c4 \uba85\ubaa9\uc0c1\uc758 \uc5f0\uc774\uc728\uc5d0 \ub300\ud55c \uc2e4\uc9c8\uc801\uc778 \uc5f0\uc774\uc728\uacfc \uc5f0\uac04 \ubcf5\ub9ac \uacc4\uc0b0 \ud69f\uc218\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('nomrate'),
	                parameterDescription('comper')
	            ]),
	            'EOMONTH': functionDescription('\uc774 \ud568\uc218\ub294 \uc2dc\uc791 \ub0a0\uc9dc \uc804\uc774\ub098 \ud6c4\uc758 \uac1c\uc6d4 \uc218\ub97c \ub098\ud0c0\ub0b4\ub294 \uc6d4\ub9d0 \ub0a0\uc9dc\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('startdate'),
	                parameterDescription('months')
	            ]),
	            'ERF': functionDescription('\uc774 \ud568\uc218\ub294 \ud558\ud55c\uac12\uacfc \uc0c1\ud55c\uac12 \uc0ac\uc774\uc5d0 \ud1b5\ud569\ub41c \uc624\ucc28 \ud568\uc218\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('limit'),
	                parameterDescription('upperlimit')
	            ]),
	            'ERFC': functionDescription('\uc774 \ud568\uc218\ub294 \ud558\ud55c\uac12\uacfc \ubb34\ud55c\ub300 \uc0ac\uc774\uc5d0 \ud1b5\ud569\ub41c \uc624\ucc28 \ud568\uc218\uc758 \uc5ec\uac12\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('lowerlimit')
	            ]),
	            'ERROR.TYPE': functionDescription('\uc774 \ud568\uc218\ub294 \uc624\ub958 \uac12 \uc911 \ud558\ub098\uc5d0 \ud574\ub2f9\ud558\ub294 \uc22b\uc790\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('errorvalue')
	            ]),
	            'EURO': functionDescription('\uc774 \ud568\uc218\ub294 ISO \ud1b5\ud654 \ucf54\ub4dc\ub97c \uae30\uc900\uc73c\ub85c 1\uc720\ub85c\uc758 \ub4f1\uac00\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('code')
	            ]),
	            'EUROCONVERT': functionDescription('\uc774 \ud568\uc218\ub294 \uc720\ub85c \ud68c\uc6d0\uad6d \ud1b5\ud654(\uc720\ub85c \ud3ec\ud568) \uac04\uc5d0 \ud1b5\ud654\ub97c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('currency'),
	                parameterDescription('source'),
	                parameterDescription('target'),
	                parameterDescription('fullprecision'),
	                parameterDescription('triangulation')
	            ]),
	            'EVEN': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uac12\uc744 \uac00\uc7a5 \uac00\uae4c\uc6b4 \uc9dd\uc218\uc778 \uc815\uc218\ub85c \uc62c\ub9bc\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'EXACT': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \ubb38\uc790\uc5f4\uc774 \uac19\uc73c\uba74 true\ub97c \ubc18\ud658\ud558\uace0, \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 false\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('text1'),
	                parameterDescription('text2')
	            ]),
	            'EXP': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uac12\uc758 \uac70\ub4ed\uc81c\uacf1\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'EXPONDIST': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc218 \ubd84\ud3ec \ub610\ub294 \ud655\ub960 \ubc00\ub3c4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('lambda'),
	                parameterDescription('cumulative')
	            ]),
	            'FACT': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc218\uc758 \uacc4\uc2b9\uac12\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number')
	            ]),
	            'FACTDOUBLE': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc218\uc758 \uc774\uc911 \uacc4\uc2b9\uac12\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number')
	            ]),
	            'FALSE': functionDescription('\uc774 \ud568\uc218\ub294 \ub17c\ub9ac\uac12 FALSE\uc5d0 \ud574\ub2f9\ud558\ub294 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', []),
	            'FDIST': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \ub370\uc774\ud130 \uc9d1\ud569 \uc0ac\uc774\uc758 \ubd84\ud3ec\ub3c4\ub97c \ub098\ud0c0\ub0b4\ub294 F \ud655\ub960 \ubd84\ud3ec\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'FIND': functionDescription('\uc774 \ud568\uc218\ub294 \ub2e4\ub978 \ud14d\uc2a4\ud2b8 \uac12\uc5d0\uc11c \ud14d\uc2a4\ud2b8 \uac12\uc744 \ucc3e\uace0 \uac80\uc0c9\ud55c \ud14d\uc2a4\ud2b8\uc5d0\uc11c \ud574\ub2f9 \ud14d\uc2a4\ud2b8 \uac12\uc758 \uc704\uce58\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('findtext'),
	                parameterDescription('intext'),
	                parameterDescription('start')
	            ]),
	            'FINV': functionDescription('\uc774 \ud568\uc218\ub294 F \ud655\ub960 \ubd84\ud3ec\uc758 \uc5ed\ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('p'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'FISHER': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uac12\uc5d0 \ub300\ud55c Fisher \ubcc0\ud658\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'FISHERINV': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uac12\uc5d0 \ub300\ud55c Fisher \ubcc0\ud658\uc758 \uc5ed\ubcc0\ud658 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'FIXED': functionDescription('\uc774 \ud568\uc218\ub294 \uc22b\uc790\ub97c \uc9c0\uc815\ub41c \uc18c\uc218 \uc790\ub9bf\uc218\ub85c \ubc18\uc62c\ub9bc\ud558\uace0, \ub9c8\uce68\ud45c\uc640 \uc27c\ud45c(\uc9c0\uc815\ub41c \uacbd\uc6b0)\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc18c\uc218\uc758 \uc11c\uc2dd\uc744 \uc9c0\uc815\ud558\uace0, \uacb0\uacfc\ub97c \ud14d\uc2a4\ud2b8\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('num'),
	                parameterDescription('digits'),
	                parameterDescription('notcomma')
	            ]),
	            'FLOOR': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uac12\uc758 \ubc30\uc218\uac00 \ub418\ub3c4\ub85d \uc808\ub300 \uac12\uc744 \ub0b4\ub9bc\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('signif')
	            ]),
	            'FORECAST': functionDescription('\uc774 \ud568\uc218\ub294 \uae30\uc874 \uac12\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubbf8\ub798 \uac00\uce58\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('Yarray'),
	                parameterDescription('Xarray')
	            ]),
	            'FREQUENCY': functionDescription('\uc774 \ud568\uc218\ub294 \uac12\uc758 \ubc94\uc704 \ub0b4\uc5d0\uc11c \uac12\uc758 \ube48\ub3c4\uc218\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4. \uc774 \ud568\uc218\ub294 \uc218\uc758 \uc138\ub85c \ubc30\uc5f4\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('dataarray'),
	                parameterDescription('binarray')
	            ]),
	            'FTEST': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \ubc30\uc5f4\uc758 \ubd84\uc0b0\uc774 \ud06c\uac8c \ucc28\uc774\uac00 \ub098\uc9c0 \uc54a\ub294 \uacbd\uc6b0 \ub2e8\uce21 \ud655\ub960\uc778 F-\uac80\uc815 \uacb0\uacfc\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'FV': functionDescription('\uc774 \ud568\uc218\ub294 \ud604\uc7ac \uac00\uce58, \uc8fc\uae30\uc801\uc778 \ub0a9\uc785 \ubc0f \uc9c0\uc815\ub41c \uc774\uc790\uc728\uc5d0 \uc758\uac70\ud55c \ud22c\uc790\uc758 \ubbf8\ub798 \uac00\uce58\ub97c \uc0b0\ucd9c\ud569\ub2c8\ub2e4.', [
	                parameterDescription('rate'),
	                parameterDescription('numper'),
	                parameterDescription('paymt'),
	                parameterDescription('pval'),
	                parameterDescription('type')
	            ]),
	            'FVSCHEDULE': functionDescription('\uc774 \ud568\uc218\ub294 \ucd08\uae30 \uc6d0\uae08\uc5d0 \uc77c\ub828\uc758 \ubcf5\ub9ac \uc774\uc728\uc744 \uc801\uc6a9\ud588\uc744 \ub54c\uc758 \ubbf8\ub798 \uac00\uce58\ub97c \uc0b0\ucd9c\ud569\ub2c8\ub2e4. \ubcc0\ub3d9 \uae08\ub9ac\ub97c \uc801\uc6a9\ud558\uc5ec \ud22c\uc790\uc758 \ubbf8\ub798 \uac00\uce58\ub97c \uc0b0\ucd9c\ud569\ub2c8\ub2e4.', [
	                parameterDescription('principal'),
	                parameterDescription('schedule')
	            ]),
	            'GAMMADIST': functionDescription('\uc774 \ud568\uc218\ub294 \uac10\ub9c8 \ubd84\ud3ec\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative')
	            ]),
	            'GAMMAINV': functionDescription('\uc774 \ud568\uc218\ub294 \uac10\ub9c8 \ub204\uc801 \ubd84\ud3ec\uc758 \uc5ed\ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('p'),
	                parameterDescription('alpha'),
	                parameterDescription('beta')
	            ]),
	            'GAMMALN': functionDescription('\uc774 \ud568\uc218\ub294 \uac10\ub9c8 \ud568\uc218 G(x)\uc758 \uc790\uc5f0 \ub85c\uadf8\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'GCD': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \uc218\uc758 \ucd5c\ub300 \uacf5\uc57d\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'GEOMEAN': functionDescription('\uc774 \ud568\uc218\ub294 \uc591\uc218 \ub370\uc774\ud130 \uc9d1\ud569\uc758 \uae30\ud558 \ud3c9\uade0\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'GESTEP': functionDescription('\uc774 \ud568\uc218(\ubcf4\ub2e4 \ud06c\uac70\ub098 \uac19\uc74c)\ub294 \uc22b\uc790\uac00 \uc784\uacc4\uac12\uacfc \uac19\uc740\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('step')
	            ]),
	            'GROWTH': functionDescription('\uc774 \ud568\uc218\ub294 \uc608\uc0c1 \uc9c0\uc218 \uc99d\uac00\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4. \uc774 \ud568\uc218\ub294 \uae30\uc874 x \ubc0f y \uac12\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc9c0\uc815\ud55c \uc0c8 x \uac12 \uacc4\uc5f4\uc5d0 \ub300\ud55c y \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('y'),
	                parameterDescription('x'),
	                parameterDescription('newx'),
	                parameterDescription('constant')
	            ]),
	            'HARMEAN': functionDescription('\uc774 \ud568\uc218\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc758 \uc870\ud654 \ud3c9\uade0\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'HEX2BIN': functionDescription('\uc774 \ud568\uc218\ub294 16\uc9c4\uc218\ub97c 2\uc9c4\uc218\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription(' places')
	            ]),
	            'HEX2DEC': functionDescription('\uc774 \ud568\uc218\ub294 16\uc9c4\uc218\ub97c 10\uc9c4\uc218\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number')
	            ]),
	            'HEX2OCT': functionDescription('\uc774 \ud568\uc218\ub294 16\uc9c4\uc218\ub97c 8\uc9c4\uc218\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription(' places')
	            ]),
	            'HLOOKUP': functionDescription('\uc774 \ud568\uc218\ub294 \uccab \ud589\uc5d0\uc11c \uac12\uc744 \uac80\uc0c9\ud55c \ub2e4\uc74c \uc9c0\uc815\ub41c \ud589\uc758 \ub3d9\uc77c\ud55c \uc5f4\uc5d0 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('array'),
	                parameterDescription('row'),
	                parameterDescription('approx')
	            ]),
	            'HOUR': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc2dc\uac04\uc5d0 \ud574\ub2f9\ud558\ub294 \uc2dc\uac04\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('time')
	            ]),
	            'HYPGEOMDIST': functionDescription('\uc774 \ud568\uc218\ub294 \ucd08\uae30 \ubd84\ud3ec\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('M'),
	                parameterDescription('N')
	            ]),
	            'IF': functionDescription('\uc774 \ud568\uc218\ub294 \uc81c\uacf5\ub41c \ub450 \uac12\uc744 \ube44\uad50\ud55c \ud6c4 \uacb0\uacfc\uc5d0 \ub530\ub77c \ub458 \uc911 \ud558\ub098\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('valueTest'),
	                parameterDescription('valueTrue'),
	                parameterDescription('valueFalse')
	            ]),
	            'IFERROR': functionDescription('\uc774 \ud568\uc218\ub294 \uc218\uc2dd\uc744 \ud3c9\uac00\ud55c \ud6c4 \uc81c\uacf5\ub41c \uac12(\uc624\ub958\uac00 \uc788\ub294 \uacbd\uc6b0) \ub610\ub294 \uc218\uc2dd \uacb0\uacfc\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('error')
	            ]),
	            'IMABS': functionDescription('\uc774 \ud568\uc218\ub294 \ubcf5\uc18c\uc218\uc758 \uc808\ub300\uac12 \ub610\ub294 \ubaa8\ub4c8\ub7ec\uc2a4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMAGINARY': functionDescription('\uc774 \ud568\uc218\ub294 \ubcf5\uc18c\uc218\uc758 \ud5c8\uc218\ubd80 \uacc4\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMARGUMENT': functionDescription('\uc774 \ud568\uc218\ub294 \uac01\ub3c4\ub97c \ub77c\ub514\uc548\uc73c\ub85c \ud45c\uc2dc\ud55c \uc778\uc218theta\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCONJUGATE': functionDescription('\uc774 \ud568\uc218\ub294 \ubcf5\uc18c\uc218\uc758 \ucf24\ub808 \ubcf5\uc18c\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCOS': functionDescription('\uc774 \ud568\uc218\ub294 \ubcf5\uc18c\uc218\uc758 COS\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMDIV': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \ubcf5\uc18c\uc218\uc758 \ubaab\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum'),
	                parameterDescription('complexdenom')
	            ]),
	            'IMEXP': functionDescription('\uc774 \ud568\uc218\ub294 \ubcf5\uc18c\uc218\uc758 \uc9c0\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMLN': functionDescription('\uc774 \ud568\uc218\ub294 \ubcf5\uc18c\uc218\uc758 \uc790\uc5f0 \ub85c\uadf8\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMLOG2': functionDescription('\uc774 \ud568\uc218\ub294 \ubcf5\uc18c\uc218\uc758 \ubc11\uc774 2\uc778 \ub85c\uadf8\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMLOG10': functionDescription('\uc774 \ud568\uc218\ub294 \ubcf5\uc18c\uc218\uc758 \uc0c1\uc6a9 \ub85c\uadf8\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMPOWER': functionDescription('\uc774 \ud568\uc218\ub294 \uac70\ub4ed\uc81c\uacf1\ud55c \ubcf5\uc18c\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum'),
	                parameterDescription('powernum')
	            ]),
	            'IMPRODUCT': functionDescription('\uc774 \ud568\uc218\ub294 \ucd5c\ub300 29\uac1c \ubcf5\uc18c\uc218\uc758 \uacf1\uc744 x+yi \ub610\ub294 x+yj \ud14d\uc2a4\ud2b8 \ud615\uc2dd\uc73c\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum1'),
	                parameterDescription('complexnum2', true)
	            ]),
	            'IMREAL': functionDescription('\uc774 \ud568\uc218\ub294 \ubcf5\uc18c\uc218\uc758 \uc2e4\uc218\ubd80 \uacc4\uc218\ub97c x+yi \ub610\ub294 x+yj \ud14d\uc2a4\ud2b8 \ud615\uc2dd\uc73c\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSIN': functionDescription('\uc774 \ud568\uc218\ub294 \ubcf5\uc18c\uc218\uc758 \uc0ac\uc778\uc744 x+yi \ub610\ub294 x+yj \ud14d\uc2a4\ud2b8 \ud615\uc2dd\uc73c\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSQRT': functionDescription('\uc774 \ud568\uc218\ub294 \ubcf5\uc18c\uc218\uc758 \uc81c\uacf1\uadfc\uc744 x+yi \ub610\ub294 x+yj \ud14d\uc2a4\ud2b8 \ud615\uc2dd\uc73c\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSUB': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \ubcf5\uc18c\uc218\uc758 \ucc28\ub97c x+yi \ub610\ub294 x+yj \ud14d\uc2a4\ud2b8 \ud615\uc2dd\uc73c\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum1'),
	                parameterDescription('complexnum2')
	            ]),
	            'IMSUM': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \uac1c \uc774\uc0c1\uc758 \ubcf5\uc18c\uc218\uc758 \ud569\uc744 x+yi \ub610\ub294 x+yj \ud14d\uc2a4\ud2b8 \ud615\uc2dd\uc73c\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum1'),
	                parameterDescription('complexnum2', true)
	            ]),
	            'INDEX': functionDescription('\uc774 \ud568\uc218\ub294 \ubc30\uc5f4 \ub610\ub294 \ubc94\uc704 \ub0b4\uc5d0\uc11c \uac12 \ub610\ub294 \uac12\uc5d0 \ub300\ud55c \ucc38\uc870\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('return'),
	                parameterDescription('row'),
	                parameterDescription('col'),
	                parameterDescription('area')
	            ]),
	            'INDIRECT': functionDescription('\uc774 \ud568\uc218\ub294 \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\ub85c \uc9c0\uc815\ub41c \ucc38\uc870\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \ucc38\uc870\ub97c \uc989\uc2dc \uacc4\uc0b0\ud558\uc5ec \ucf58\ud150\uce20\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4.', [
	                parameterDescription('ref_text'),
	                parameterDescription('a1_style')
	            ]),
	            'INT': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc218\ub97c \uc18c\uc218\uc810 \uc544\ub798\ub97c \ubc84\ub9ac\uace0 \uac00\uc7a5 \uac00\uae4c\uc6b4 \uc815\uc218\ub85c \ub0b4\ub9bc\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'INTERCEPT': functionDescription('\uc774 \ud568\uc218\ub294 \uae30\uc874 x \uac12\uacfc y \uac12\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc120\uc774 y\ucd95\uacfc \uad50\ucc28\ud558\ub294 \uc810\uc758 \uc88c\ud45c\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('dependent'),
	                parameterDescription('independent')
	            ]),
	            'INTRATE': functionDescription('\uc774 \ud568\uc218\ub294 \uc644\uc804 \ud22c\uc790\ud55c \uc720\uac00 \uc99d\uad8c\uc758 \uc774\uc790\uc728\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('invest'),
	                parameterDescription('redeem'),
	                parameterDescription('basis')
	            ]),
	            'IPMT': functionDescription('\uc774 \ud568\uc218\ub294 \ub300\ucd9c \uc774\uc790 \ub0a9\uc785\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('rate'),
	                parameterDescription('per'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'IRR': functionDescription('\uc774 \ud568\uc218\ub294 \ubc30\uc5f4\uc5d0 \uc22b\uc790\ub85c \ud45c\uc2dc\ub418\ub294 \uc77c\ub828\uc758 \ud604\uae08 \ud750\ub984\uc5d0 \ub300\ud55c \ub0b4\ubd80 \uc218\uc775\ub960\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('arrayvals'),
	                parameterDescription('estimate')
	            ]),
	            'ISBLANK': functionDescription('\uc774 \ud568\uc218\ub294 \ucc38\uc870 \uc140\uc758 \uac12, \uc2dd \ub610\ub294 \ub0b4\uc6a9\uc774 \ube44\uc5b4 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cellreference')
	            ]),
	            'ISERR': functionDescription('\uc774 \ud568\uc218(Is Error Other Than Not Available)\ub294 \ucc38\uc870 \uc140\uc758 \uac12, \uc2dd \ub610\ub294 \ub0b4\uc6a9\uc5d0 \uc0ac\uc6a9 \ubd88\uac00\ub2a5(#N/A) \uc774\uc678 \uc624\ub958\uac00 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cellreference')
	            ]),
	            'ISERROR': functionDescription('\uc774 \ud568\uc218(Is Error of Any Kind)\ub294 \ucc38\uc870 \uc140\uc758 \uac12, \uc2dd \ub610\ub294 \ub0b4\uc6a9\uc5d0 \uc624\ub958\uac00 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cellreference')
	            ]),
	            'ISEVEN': functionDescription('\uc774 \ud568\uc218(Is Number Even)\ub294 \ucc38\uc870 \uc140\uc758 \uac12, \uc2dd \ub610\ub294 \ub0b4\uc6a9\uc774 \uc9dd\uc218\uc778\uc9c0 \uc5ec\ubd80\ub97c \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cellreference')
	            ]),
	            'ISLOGICAL': functionDescription('\uc774 \ud568\uc218\ub294 \ucc38\uc870 \uc140\uc758 \uac12, \uc2dd \ub610\ub294 \ub0b4\uc6a9\uc774 \ub17c\ub9ac\uac12(Boolean)\uc778\uc9c0 \uc5ec\ubd80\ub97c \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cellreference')
	            ]),
	            'ISNA': functionDescription('\uc774 \ud568\uc218(Is Not Available)\ub294 \ucc38\uc870 \uc140\uc758 \uac12, \uc2dd \ub610\ub294 \ub0b4\uc6a9\uc5d0 \uc0ac\uc6a9 \ubd88\uac00\ub2a5(#N/A) \uc624\ub958 \uac12\uc774 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cellreference')
	            ]),
	            'ISNONTEXT': functionDescription('\uc774 \ud568\uc218\ub294 \ucc38\uc870 \uc140\uc758 \uac12, \uc2dd \ub610\ub294 \ub0b4\uc6a9\uc5d0 \ud14d\uc2a4\ud2b8 \uc774\uc678\uc758 \ub370\uc774\ud130 \ud615\uc2dd\uc774 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cellreference')
	            ]),
	            'ISNUMBER': functionDescription('\uc774 \ud568\uc218\ub294 \ucc38\uc870 \uc140\uc758 \uac12, \uc2dd \ub610\ub294 \ub0b4\uc6a9\uc5d0 \uc22b\uc790 \ub370\uc774\ud130\uac00 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cellreference')
	            ]),
	            'ISODD': functionDescription('\uc774 \ud568\uc218(Is Number Odd)\ub294 \ucc38\uc870 \uc140\uc758 \uac12, \uc2dd \ub610\ub294 \ub0b4\uc6a9\uc5d0 \uc22b\uc790 \ub370\uc774\ud130\uac00 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cellreference')
	            ]),
	            'ISPMT': functionDescription('\uc774 \ud568\uc218\ub294 \uc77c\uc815 \uae30\uac04 \ub3d9\uc548\uc758 \ud22c\uc790\uc5d0 \ub300\ud55c \uc774\uc790 \uc9c0\uae09\uc561\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('rate'),
	                parameterDescription('per'),
	                parameterDescription('nper'),
	                parameterDescription('pv')
	            ]),
	            'ISREF': functionDescription('\uc774 \ud568\uc218(Is Reference)\ub294 \ucc38\uc870 \uc140\uc758 \uac12, \uc2dd \ub610\ub294 \ub0b4\uc6a9\uc774 \ub2e4\ub978 \uc140\uc5d0 \ub300\ud55c \ucc38\uc870\uc778\uc9c0 \uc5ec\ubd80\ub97c \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cellreference')
	            ]),
	            'ISTEXT': functionDescription('\uc774 \ud568\uc218\ub294 \ucc38\uc870 \uc140\uc758 \uac12, \uc2dd \ub610\ub294 \ub0b4\uc6a9\uc5d0 \ud14d\uc2a4\ud2b8 \ub370\uc774\ud130\uac00 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cellreference')
	            ]),
	            'KURT': functionDescription('\uc774 \ud568\uc218\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc758 \ucca8\ub3c4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2'),
	                parameterDescription('value3'),
	                parameterDescription('value4', true)
	            ]),
	            'LARGE': functionDescription('\uc774 \ud568\uc218\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc5d0\uc11c n\ubc88\uc9f8\ub85c \ud070 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. n\uc740 \uc9c0\uc815\ub429\ub2c8\ub2e4.', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'LCM': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \uc218\uc758 \ucd5c\uc18c \uacf5\ubc30\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'LEFT': functionDescription('\uc774 \ud568\uc218\ub294 \ud14d\uc2a4\ud2b8 \uac12\uc5d0\uc11c \ub9e8 \uc67c\ucabd\uc5d0 \uc704\uce58\ud55c \uc9c0\uc815\ub41c \ubb38\uc790\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('mytext'),
	                parameterDescription('num_chars')
	            ]),
	            'LEN': functionDescription('\uc774 \ud568\uc218\ub294 \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\uc758 \uae38\uc774(\ubb38\uc790 \uc218)\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'LINEST': functionDescription('\uc774 \ud568\uc218\ub294 \uc904\uc5d0 \ub300\ud55c \ud1b5\uacc4\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('y'),
	                parameterDescription('x'),
	                parameterDescription('constant'),
	                parameterDescription('stats')
	            ]),
	            'LN': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc218\uc758 \uc790\uc5f0 \ub85c\uadf8\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'LOG': functionDescription('\uc774 \ud568\uc218\ub294 \uc218 X\uc5d0 \ub300\ud574 \ubc11\uc774 Y\uc778 \ub85c\uadf8\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('base')
	            ]),
	            'LOG10': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc218\uc5d0 \ub300\ud574 \ubc11\uc774 10\uc778 \ub85c\uadf8\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'LOGEST': functionDescription('\uc774 \ud568\uc218\ub294 \ub370\uc774\ud130\uc640 \uc77c\uce58\ud558\ub294 \uc9c0\uc218 \uace1\uc120\uc744 \uacc4\uc0b0\ud558\uace0 \uace1\uc120\uc744 \uc124\uba85\ud558\ub294 \uac12\uc758 \ubc30\uc5f4\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('y'),
	                parameterDescription('x'),
	                parameterDescription('constant'),
	                parameterDescription('stats')
	            ]),
	            'LOGINV': functionDescription('\uc774 \ud568\uc218\ub294 x\uc5d0 \ub300\ud55c \ub85c\uadf8 \uc815\uaddc \ub204\uc801 \ubd84\ud3ec\uc758 \uc5ed\ud568\uc218 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c LN(x)\uc740 \uc9c0\uc815\ub41c \ud3c9\uade0\uacfc \ud45c\uc900 \ud3b8\ucc28\ub97c \uac16\ub294 \uc815\uaddc \ubd84\ud3ec\uc785\ub2c8\ub2e4.', [
	                parameterDescription('prob'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'LOGNORMDIST': functionDescription('\uc774 \ud568\uc218\ub294 x\uc5d0 \ub300\ud55c \ub204\uc801 \uc790\uc5f0 \ub85c\uadf8 \uc815\uaddc \ubd84\ud3ec\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c LN(x)\uc740 \uc9c0\uc815\ub41c \ud3c9\uade0\uacfc \ud45c\uc900 \ud3b8\ucc28\ub97c \uac16\ub294 \uc815\uaddc \ubd84\ud3ec\uc785\ub2c8\ub2e4. \uc774 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub300\uc218\uc801\uc73c\ub85c \ubcc0\ud658\ub41c \ub370\uc774\ud130\ub97c \ubd84\uc11d\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'LOOKUP': functionDescription('\uc774 \ud568\uc218\ub294 \uac12\uc744 \uac80\uc0c9\ud558\uace0 \ub450 \ubc88\uc9f8 \uc601\uc5ed\uc758 \ub3d9\uc77c\ud55c \uc704\uce58\uc5d0\uc11c \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('lookupvalue'),
	                parameterDescription('lookupvector'),
	                parameterDescription('resultvector')
	            ]),
	            'LOWER': functionDescription('\uc774 \ud568\uc218\ub294 \ud14d\uc2a4\ud2b8\ub97c \uc18c\ubb38\uc790\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('string')
	            ]),
	            'MATCH': functionDescription('\uc774 \ud568\uc218\ub294 \ubc94\uc704 \ub0b4\uc5d0\uc11c \uc9c0\uc815\ub41c \ud56d\ubaa9\uc758 \uc0c1\ub300 \uc704\uce58\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('array'),
	                parameterDescription('type')
	            ]),
	            'MAX': functionDescription('\uc774 \ud568\uc218\ub294 \uc778\uc218\uc758 \ubaa8\ub4e0 \uac12 \uc911\uc5d0\uc11c \uac00\uc7a5 \ud070 \uac12\uc778 \ucd5c\ub300\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MAXA': functionDescription('\uc774 \ud568\uc218\ub294 \ud14d\uc2a4\ud2b8\uc640 \ub17c\ub9ac\uac12\uc744 \ud3ec\ud568\ud558\uc5ec \uc778\uc218 \ubaa9\ub85d\uc5d0\uc11c \uac00\uc7a5 \ud070 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MDETERM': functionDescription('\uc774 \ud568\uc218\ub294 \ubc30\uc5f4\uc758 \ud589\ub82c \uc2dd\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array')
	            ]),
	            'MDURATION': functionDescription('\uc774 \ud568\uc218\ub294 \uac00\uc815\ub41c \uc561\uba74\uac00\uac00 $100\uc778 \uc720\uac00 \uc99d\uad8c\uc758 \uc218\uc815\ub41c Macaulay \uae30\uac04\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('coupon'),
	                parameterDescription('yield'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'MEDIAN': functionDescription('\uc774 \ud568\uc218\ub294 \uc81c\uacf5\ub41c \uc22b\uc790\ub4e4 \uc911 \uc911\uac04\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \uc989, \uc22b\uc790\ub4e4 \uc911 \uc808\ubc18\uc740 \uc911\uac04\uac12\ubcf4\ub2e4 \ud070 \uac12\uc744 \uac16\uace0, \uc808\ubc18\uc740 \uc911\uac04\uac12\ubcf4\ub2e4 \uc791\uc740 \uac12\uc744 \uac16\uc2b5\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MID': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc704\uce58\uc5d0\uc11c \uc2dc\uc791\ud558\uc5ec \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\uc5d0\uc11c \uc694\uccad\ub41c \uc218\uc758 \ubb38\uc790\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('text'),
	                parameterDescription('start_num'),
	                parameterDescription('num_chars')
	            ]),
	            'MIN': functionDescription('\uc774 \ud568\uc218\ub294 \uc778\uc218\uc758 \ubaa8\ub4e0 \uac12 \uc911\uc5d0\uc11c \uac00\uc7a5 \uc791\uc740 \uac12\uc778 \ucd5c\uc18c\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MINA': functionDescription('\uc774 \ud568\uc218\ub294 \ud14d\uc2a4\ud2b8\uc640 \ub17c\ub9ac\uac12\uc744 \ud3ec\ud568\ud558\uc5ec \uc778\uc218 \ubaa9\ub85d\uc5d0\uc11c \ucd5c\uc18c\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MINUTE': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc2dc\uac04\uc5d0 \ud574\ub2f9\ud558\ub294 \ubd84\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('time')
	            ]),
	            'MINVERSE': functionDescription('\uc774 \ud568\uc218\ub294 \ubc30\uc5f4\uc758 \uc5ed\ud589\ub82c\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array')
	            ]),
	            'MIRR': functionDescription('\uc774 \ud568\uc218\ub294 \uc77c\ub828\uc758 \uc8fc\uae30\uc801\uc778 \ud604\uae08 \ud750\ub984\uc5d0 \ub300\ud55c \uc218\uc815\ub41c \ub0b4\ubd80 \uc218\uc775\ub960\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('arrayvals'),
	                parameterDescription('payment_int'),
	                parameterDescription('income_int')
	            ]),
	            'MMULT': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \ubc30\uc5f4\uc758 \ud589\ub82c \uacf1\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'MOD': functionDescription('\uc774 \ud568\uc218\ub294 \ub098\ub217\uc148\uc758 \ub098\uba38\uc9c0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('dividend'),
	                parameterDescription('divisor')
	            ]),
	            'MODE': functionDescription('\uc774 \ud568\uc218\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc5d0\uc11c \uac00\uc7a5 \uc790\uc8fc \ubc1c\uc0dd\ud558\ub294 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'MONTH': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \ub0a0\uc9dc \uac12\uc5d0 \ud574\ub2f9\ud558\ub294 \uc6d4\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('date')
	            ]),
	            'MROUND': functionDescription('\uc774 \ud568\uc218\ub294 \uc6d0\ud558\ub294 \ubc30\uc218\ub85c \ubc18\uc62c\ub9bc\ub41c \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('multiple')
	            ]),
	            'MULTINOMIAL': functionDescription('\uc774 \ud568\uc218\ub294 \uac12\uc758 \ud569\uacc4\uc640 \uacc4\uc2b9\uac12\uc758 \uacf1\uc758 \ube44\uc728\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'N': functionDescription('\uc774 \ud568\uc218\ub294 \uc22b\uc790\ub85c \ubcc0\ud658\ub41c \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'NA': functionDescription('\uc774 \ud568\uc218\ub294 \ud3c9\uade0\uc774 \uc0ac\uc6a9 \ubd88\uac00\ud55c \uc624\ucc28 \uac12 #N/A\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', []),
	            'NEGBINOMDIST': functionDescription('\uc774 \ud568\uc218\ub294 \uc74c \uc774\ud56d \ubd84\ud3ec\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('r'),
	                parameterDescription('p')
	            ]),
	            'NETWORKDAYS': functionDescription('\uc774 \ud568\uc218\ub294 \uc2dc\uc791 \ub0a0\uc9dc\uc640 \uc885\ub8cc \ub0a0\uc9dc \uc0ac\uc774\uc758 \uc804\uccb4 \uc791\uc5c5\uc77c\uc758 \ucd1d \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate'),
	                parameterDescription('holidays')
	            ]),
	            'NOMINAL': functionDescription('\uc774 \ud568\uc218\ub294 \uc8fc\uc5b4\uc9c4 \uc2e4\ud6a8 \uc774\uc728\uc5d0 \ub300\ud55c \uba85\ubaa9\uc0c1\uc758 \uc5f0\uc774\uc728\uacfc \uc5f0\uac04 \ubcf5\ub9ac \uacc4\uc0b0 \ud69f\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('effrate'),
	                parameterDescription('comper')
	            ]),
	            'NORMDIST': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ud55c \ud3c9\uade0\uacfc \ud45c\uc900 \ud3b8\ucc28\uc5d0 \uc758\uac70\ud558\uc5ec \uc815\uaddc \ubd84\ud3ec\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev'),
	                parameterDescription('cumulative')
	            ]),
	            'NORMINV': functionDescription('\uc774 \ud568\uc218\ub294 \uc8fc\uc5b4\uc9c4 \ud3c9\uade0\uacfc \ud45c\uc900 \ud3b8\ucc28\uc5d0 \uc758\uac70\ud558\uc5ec \uc815\uaddc \ub204\uc801 \ubd84\ud3ec\uc758 \uc5ed\ud568\uc218 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('prob'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'NORMSDIST': functionDescription('\uc774 \ud568\uc218\ub294 \ud45c\uc900 \uc815\uaddc \ub204\uc801 \ubd84\ud3ec \ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'NORMSINV': functionDescription('\uc774 \ud568\uc218\ub294 \ud45c\uc900 \uc815\uaddc \ub204\uc801 \ubd84\ud3ec\uc758 \uc5ed\ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \ubd84\ud3ec\uc758 \ud3c9\uade0\uc774 0\uc774\uace0 \ud45c\uc900 \ud3b8\ucc28\uac00 1\uc785\ub2c8\ub2e4.', [
	                parameterDescription('prob')
	            ]),
	            'NOT': functionDescription('\uc774 \ud568\uc218\ub294 \uc778\uc218\uc758 \ub17c\ub9ac\uac12\uc744 \ub418\ub3cc\ub9bd\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'NOW': functionDescription('\uc774 \ud568\uc218\ub294 \ud604\uc7ac \ub0a0\uc9dc\uc640 \uc2dc\uac04\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', []),
	            'NPER': functionDescription('\uc774 \ud568\uc218\ub294 \ud604\uc7ac \uac00\uce58, \ubbf8\ub798 \uac00\uce58, \uc8fc\uae30\uc801\uc778 \ub0a9\uc785 \ubc0f \uc9c0\uc815\ub41c \uc774\uc790\uc728\uc5d0 \uc758\uac70\ud55c \ud22c\uc790 \uae30\uac04\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('rate'),
	                parameterDescription('paymt'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'NPV': functionDescription('\uc774 \ud568\uc218\ub294 \ud560\uc778\uc728\uacfc \uc77c\ub828\uc758 \ubbf8\ub798 \ud22c\uc790 \ubc0f \uc218\uc785\uc744 \uae30\uc900\uc73c\ub85c \ud22c\uc790\uc758 \uc21c \ud604\uc7ac \uac00\uce58\ub97c \uc0b0\ucd9c\ud569\ub2c8\ub2e4.', [
	                parameterDescription('discount'),
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'OCT2BIN': functionDescription('\uc774 \ud568\uc218\ub294 8\uc9c4\uc218\ub97c 2\uc9c4\uc218\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'OCT2DEC': functionDescription('\uc774 \ud568\uc218\ub294 8\uc9c4\uc218\ub97c 10\uc9c4\uc218\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number')
	            ]),
	            'OCT2HEX': functionDescription('\uc774 \ud568\uc218\ub294 8\uc9c4\uc218\ub97c 16\uc9c4\uc218\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('places')
	            ]),
	            'ODD': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uac12\uc744 \uac00\uc7a5 \uac00\uae4c\uc6b4 \ud640\uc218\uc778 \uc815\uc218\ub85c \uc62c\ub9bc\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'ODDFPRICE': functionDescription('\uc774 \ud568\uc218\ub294 \uccab \uc774\uc218 \uae30\uac04\uc774 \uacbd\uc0c1 \uc774\uc218 \uae30\uac04\uacfc \ub2e4\ub978(\uc9e7\uac70\ub098 \uae34) \uc720\uac00 \uc99d\uad8c\uc758 \uc561\uba74\uac00 $100\ub2f9 \uac00\uaca9\uc744 \uc0b0\ucd9c\ud569\ub2c8\ub2e4.', [
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
	            'ODDFYIELD': functionDescription('\uc774 \ud568\uc218\ub294 \uccab \uc774\uc218 \uae30\uac04\uc774 \uacbd\uc0c1 \uc774\uc218 \uae30\uac04\uacfc \ub2e4\ub978(\uc9e7\uac70\ub098 \uae34) \uc720\uac00 \uc99d\uad8c\uc758 \uc5f0 \uc218\uc775\ub960\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
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
	            'ODDLPRICE': functionDescription('\uc774 \ud568\uc218\ub294 \ub9c8\uc9c0\ub9c9 \uc774\uc218 \uae30\uac04\uc774 \uacbd\uc0c1 \uc774\uc218 \uae30\uac04\uacfc \ub2e4\ub978(\uc9e7\uac70\ub098 \uae34) \uc720\uac00 \uc99d\uad8c\uc758 \uc561\uba74\uac00 $100\ub2f9 \uac00\uaca9\uc744 \uc0b0\ucd9c\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('last'),
	                parameterDescription('rate'),
	                parameterDescription('yield'),
	                parameterDescription('redeem'),
	                parameterDescription('freq'),
	                parameterDescription('basis')
	            ]),
	            'ODDLYIELD': functionDescription('\uc774 \ud568\uc218\ub294 \ub9c8\uc9c0\ub9c9 \uc774\uc218 \uae30\uac04\uc774 \uacbd\uc0c1 \uc774\uc218 \uae30\uac04\uacfc \ub2e4\ub978(\uc9e7\uac70\ub098 \uae34) \uc720\uac00 \uc99d\uad8c\uc758 \uc5f0 \uc218\uc775\ub960\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('last'),
	                parameterDescription('rate'),
	                parameterDescription('price'),
	                parameterDescription('redeem'),
	                parameterDescription('freq'),
	                parameterDescription('basis')
	            ]),
	            'OFFSET': functionDescription('\uc774 \ud568\uc218\ub294 \ubc94\uc704\uc5d0 \ub300\ud55c \ucc38\uc870\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \ubc94\uc704\ub294 \uc140 \ub610\ub294 \uc140 \ubc94\uc704\uc5d0\uc11c \uc9c0\uc815\ub41c \ud589\uacfc \uc5f4\uc758 \uac1c\uc218\uc785\ub2c8\ub2e4. \uc774 \ud568\uc218\ub294 \ub2e8\uc77c \uc140 \ub610\ub294 \uc140 \ubc94\uc704\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('reference'),
	                parameterDescription('rows'),
	                parameterDescription('cols'),
	                parameterDescription('height'),
	                parameterDescription('width')
	            ]),
	            'OR': functionDescription('\uc774 \ud568\uc218\ub294 \ub17c\ub9ac\uac12 OR\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4. \uc778\uc218 \uc911 \ud558\ub098 \uc774\uc0c1\uc774 \ucc38\uc774\uba74 TRUE\ub97c \ubc18\ud658\ud558\uace0, \ubaa8\ub4e0 \uc778\uc218\uac00 \uac70\uc9d3\uc774\uba74 FALSE\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('argument1'),
	                parameterDescription('argument2...')
	            ]),
	            'PEARSON': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \ub370\uc774\ud130 \uc138\ud2b8\uc758 \uc120\ud615 \uad00\uacc4\ub97c \ub098\ud0c0\ub0b4\ub294 -1.0\uc5d0\uc11c 1.0 \uc0ac\uc774\uc758 \ubb34 \ucc28\uc6d0 \uc778\ub371\uc2a4 \uc778 Pearson \uacf1\uc148 \uc0c1\uad00 \uacc4\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array_ind'),
	                parameterDescription('array_dep')
	            ]),
	            'PERCENTILE': functionDescription('\uc774 \ud568\uc218\ub294 \ubc94\uc704\uc5d0\uc11c n\ubc88\uc9f8 \ubc31\ubd84\uc704\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'PERCENTRANK': functionDescription('\uc774 \ud568\uc218\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc5d0\uc11c \ubc31\ubd84\uc728 \uc21c\uc704\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array'),
	                parameterDescription('n'),
	                parameterDescription('sigdig')
	            ]),
	            'PERMUT': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \ud56d\ubaa9 \uc218\uc5d0 \ub300\ud574 \uac00\ub2a5\ud55c \uc21c\uc5f4\uc758 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('k'),
	                parameterDescription('n')
	            ]),
	            'PI': functionDescription('\uc774 \ud568\uc218\ub294 PI\ub97c 3.1415926536\uc73c\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4.', []),
	            'PMT': functionDescription('\uc774 \ud568\uc218\ub294 \ud604\uc7ac \uac00\uce58, \uc9c0\uc815\ub41c \uc774\uc790\uc728 \ubc0f \ud56d\ubaa9 \uc218\uc5d0 \uc758\uac70\ud55c \ub300\ucd9c \ub300\uae08 \uc9c0\uae09\uc561\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('rate'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'POISSON': functionDescription('\uc774 \ud568\uc218\ub294 Poisson \ud655\ub960 \ubd84\ud3ec\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('nevents'),
	                parameterDescription('mean'),
	                parameterDescription('cumulative')
	            ]),
	            'POWER': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ud55c \uc218\ub97c \uc9c0\uc815\ud55c \uac70\ub4ed\uc81c\uacf1\uc73c\ub85c \uc62c\ub9bd\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('power')
	            ]),
	            'PPMT': functionDescription('\uc774 \ud568\uc218\ub294 \ud604\uc7ac \uac00\uce58, \uc9c0\uc815\ub41c \uc774\uc790\uc728 \ubc0f \ud56d\ubaa9 \uc218\uc5d0 \uc758\uac70\ud55c \ub300\ucd9c\uc758 \uc6d0\uae08 \ub0a9\uc785\uc561\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('rate'),
	                parameterDescription('per'),
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'PRICE': functionDescription('\uc774 \ud568\uc218\ub294 \uc815\uae30\uc801\uc73c\ub85c \uc774\uc790\ub97c \uc9c0\uae09\ud558\ub294 \uc720\uac00 \uc99d\uad8c\uc758 \uc561\uba74\uac00 $100\ub2f9 \uac00\uaca9\uc744 \uc0b0\ucd9c\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settlement'),
	                parameterDescription('maturity'),
	                parameterDescription('rate'),
	                parameterDescription('yield'),
	                parameterDescription('redeem'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'PRICEDISC': functionDescription('\uc774 \ud568\uc218\ub294 \ud560\uc778\ub41c \uc720\uac00 \uc99d\uad8c\uc758 \uc561\uba74\uac00 $100\ub2f9 \uac00\uaca9\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('discount'),
	                parameterDescription('redeem'),
	                parameterDescription('basis')
	            ]),
	            'PRICEMAT': functionDescription('\uc774 \ud568\uc218\ub294 \uc774\uc790\ub97c \uc9c0\uae09\ud558\ub294 \uc720\uac00 \uc99d\uad8c\uc758 \uc561\uba74\uac00 $100\ub2f9 \ub9cc\uae30 \uc2dc \uac00\uaca9\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('issue'),
	                parameterDescription('rate'),
	                parameterDescription('yield'),
	                parameterDescription('basis')
	            ]),
	            'PROB': functionDescription('\uc774 \ud568\uc218\ub294 \uc601\uc5ed \ub0b4\uc758 \uac12\uc774 \ub450 \ud55c\uacc4\uac12 \uc0ac\uc774\uc5d0 \uc788\uc744 \ud655\ub960\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array'),
	                parameterDescription('probs'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'PRODUCT': functionDescription('\uc774 \ud568\uc218\ub294 \ubaa8\ub4e0 \uc778\uc218\uc758 \uacf1\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'PROPER': functionDescription('\uc774 \ud568\uc218\ub294 \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\uc758 \uac01 \ub2e8\uc5b4\uc5d0\uc11c \uccab \uae00\uc790\ub97c \ub300\ubb38\uc790\ud654\ud569\ub2c8\ub2e4.', [
	                parameterDescription('text')
	            ]),
	            'PV': functionDescription('\uc774 \ud568\uc218\ub294 \uc774\uc790\uc728, \uc8fc\uae30\uc801\uc778 \ub0a9\uc785 \ud69f\uc218\uc640 \uae08\uc561, \ubbf8\ub798 \uac00\uce58\uc5d0 \uc758\uac70\ud55c \ud22c\uc790\uc758 \ud604\uc7ac \uac00\uce58\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \ud604\uc7ac \uac00\uce58\ub294 \uc77c\ub828\uc758 \ubbf8\ub798 \ud22c\uc790\uac00 \uc0c1\uc751\ud558\ub294 \ucd1d\ud569\uacc4\uc785\ub2c8\ub2e4.', [
	                parameterDescription('rate'),
	                parameterDescription('numper'),
	                parameterDescription('paymt'),
	                parameterDescription('fval'),
	                parameterDescription('type')
	            ]),
	            'QUARTILE': functionDescription('\uc774 \ud568\uc218\ub294 \uac12\uc774 \uc18d\ud558\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc758 \ubc31\ubd84\uc704\uc218(1/4 \ub610\ub294 25%)\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array'),
	                parameterDescription('quart')
	            ]),
	            'QUOTIENT': functionDescription('\uc774 \ud568\uc218\ub294 \ub098\ub217\uc148 \ubaab\uc758 \uc815\uc218 \ubd80\ubd84\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \ub098\ub217\uc148 \ubaab\uc758 \ub098\uba38\uc9c0\ub97c \ubb34\uc2dc\ud558\ub824\uba74 \uc774 \ud568\uc218\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.', [
	                parameterDescription('numerator'),
	                parameterDescription('denominator')
	            ]),
	            'RADIANS': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc218\ub97c \ub3c4 \ub2e8\uc704\uc5d0\uc11c \ub77c\ub514\uc548 \ud615\ud0dc\uc758 \uac01\ub3c4\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'RAND': functionDescription('\uc774 \ud568\uc218\ub294 0\uacfc 1 \uc0ac\uc774\uc758 \uade0\ub4f1\ud558\uac8c \ubd84\ud3ec\ub41c \ub09c\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', []),
	            'RANDBETWEEN': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ud55c \uc22b\uc790 \uc0ac\uc774\uc758 \ub09c\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'RANK': functionDescription('\uc774 \ud568\uc218\ub294 \uc22b\uc790 \uc9d1\ud569 \ub0b4\uc5d0\uc11c \uc9c0\uc815\ud55c \uc218\uc758 \uc21c\uc704\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \uc9d1\ud569\uc744 \uc815\ub82c\ud560 \uacbd\uc6b0 \uc218\uc758 \uc21c\uc704\ub294 \ubaa9\ub85d \ub0b4\uc5d0\uc11c \ud574\ub2f9 \uc218\uc758 \uc704\uce58\uc785\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('array'),
	                parameterDescription('order')
	            ]),
	            'RATE': functionDescription('\uc774 \ud568\uc218\ub294 \uc5f0\uae08\uc758 \uae30\uac04\ubcc4 \uc774\uc790\uc728\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('nper'),
	                parameterDescription('pmt'),
	                parameterDescription('pval'),
	                parameterDescription('fval'),
	                parameterDescription('type'),
	                parameterDescription('guess')
	            ]),
	            'RECEIVED': functionDescription('\uc774 \ud568\uc218\ub294 \uc644\uc804 \ud22c\uc790 \uc720\uac00 \uc99d\uad8c\uc5d0 \ub300\ud574 \ub9cc\uae30 \uc2dc \uc218\ub839\ud558\ub294 \uae08\uc561\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('invest'),
	                parameterDescription('discount'),
	                parameterDescription('basis')
	            ]),
	            'REPLACE': functionDescription('\uc774 \ud568\uc218\ub294 \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\uc758 \uc77c\ubd80\ub97c \ub2e4\ub978 \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\ub85c \ubc14\uafc9\ub2c8\ub2e4.', [
	                parameterDescription('old_text'),
	                parameterDescription('start_char'),
	                parameterDescription('num_chars'),
	                parameterDescription('new_text')
	            ]),
	            'REPT': functionDescription('\uc774 \ud568\uc218\ub294 \ud14d\uc2a4\ud2b8\ub97c \uc9c0\uc815\ub41c \ud69f\uc218\ub9cc\ud07c \ubc18\ubcf5\ud569\ub2c8\ub2e4.', [
	                parameterDescription('text'),
	                parameterDescription('number')
	            ]),
	            'RIGHT': functionDescription('\uc774 \ud568\uc218\ub294 \ud14d\uc2a4\ud2b8 \uac12\uc5d0\uc11c \ub9e8 \uc624\ub978\ucabd\uc5d0 \uc704\uce58\ud55c \uc9c0\uc815\ub41c \ubb38\uc790\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('text'),
	                parameterDescription('num_chars')
	            ]),
	            'ROMAN': functionDescription('\uc774 \ud568\uc218\ub294 \uc544\ub77c\ube44\uc544 \uc22b\uc790\ub97c \ud14d\uc2a4\ud2b8\uc778 \ub85c\ub9c8 \uc22b\uc790\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('style')
	            ]),
	            'ROUND': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc18c\uc218 \uc790\ub9bf\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc9c0\uc815\ub41c \uac12\uc744 \uac00\uc7a5 \uac00\uae4c\uc6b4 \uc22b\uc790\ub85c \ubc18\uc62c\ub9bc\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('places')
	            ]),
	            'ROUNDDOWN': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc18c\uc218 \uc790\ub9bf\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc9c0\uc815\ub41c \uac12\uc744 \uac00\uc7a5 \uac00\uae4c\uc6b4 \uc22b\uc790\ub85c \ub0b4\ub9bc\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('places')
	            ]),
	            'ROUNDUP': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc18c\uc218 \uc790\ub9bf\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc9c0\uc815\ub41c \uac12\uc744 \uac00\uc7a5 \uac00\uae4c\uc6b4 \uc22b\uc790\ub85c \uc62c\ub9bc\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('places')
	            ]),
	            'ROW': functionDescription('\uc774 \ud568\uc218\ub294 \ucc38\uc870 \uc601\uc5ed\uc758 \ud589 \ubc88\ud638\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('reference')
	            ]),
	            'ROWS': functionDescription('\uc774 \ud568\uc218\ub294 \ubc30\uc5f4\uc5d0 \uc788\ub294 \ud589 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array')
	            ]),
	            'RSQ': functionDescription('\uc774 \ud568\uc218\ub294 y \uac12\uacfc x \uac12\uc774 \uc54c\ub824\uc9c4 \ub370\uc774\ud130 \uc694\uc18c\uc5d0 \uc758\uac70\ud558\uc5ec Pearson \uacf1 \uc21c\uac04 \uc0c1\uad00 \uacc4\uc218\uc758 \uc81c\uacf1(R \uc81c\uacf1)\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array_dep'),
	                parameterDescription('array_ind')
	            ]),
	            'SEARCH': functionDescription('\uc774 \ud568\uc218\ub294 \ub2e4\ub978 \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\uc5d0\uc11c \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\uc744 \ucc3e\uc740 \ub2e4\uc74c \ubc1c\uacac\ub41c \ud14d\uc2a4\ud2b8\uc758 \uc2dc\uc791 \uc704\uce58\uc758 \uc9c0\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('string1'),
	                parameterDescription('string2')
	            ]),
	            'SECOND': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc2dc\uac04\uc5d0 \ub300\ud55c \ucd08(0~59) \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('time')
	            ]),
	            'SERIESSUM': functionDescription('\uc774 \ud568\uc218\ub294 \uba71\uae09\uc218\uc758 \ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('m'),
	                parameterDescription('coeff')
	            ]),
	            'SIGN': functionDescription('\uc774 \ud568\uc218\ub294 \uc2dd \ub610\ub294 \uc218\uc758 \ubd80\ud638\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cellreference')
	            ]),
	            'SIN': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uac01\ub3c4\uc758 SIN\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('angle')
	            ]),
	            'SINH': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc218\uc758 SINH\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'SKEW': functionDescription('\uc774 \ud568\uc218\ub294 \ubd84\ud3ec\uc758 \uc65c\uace1\ub3c4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'SLN': functionDescription('\uc774 \ud568\uc218\ub294 \ud55c \uae30\uac04 \ub3d9\uc548 \uc815\uc561\ubc95\uc5d0 \uc758\ud55c \uc790\uc0b0\uc758 \uac10\uac00 \uc0c1\uac01\uc561\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life')
	            ]),
	            'SLOPE': functionDescription('\uc774 \ud568\uc218\ub294 \uc120\ud615 \ud68c\uadc0\uc120\uc758 \uae30\uc6b8\uae30\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array_dep'),
	                parameterDescription('array_ind')
	            ]),
	            'SMALL': functionDescription('\uc774 \ud568\uc218\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc5d0\uc11c n\ubc88\uc9f8\ub85c \uc791\uc740 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. n\uc740 \uc9c0\uc815\ub429\ub2c8\ub2e4.', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'SQRT': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc218\uc758 \uc591\uc758 \uc81c\uacf1\uadfc\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'SQRTPI': functionDescription('\uc774 \ud568\uc218\ub294 \ud30c\uc774(p)\uc758 \ubc30\uc218\uc758 \uc591\uc758 \uc81c\uacf1\uadfc\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('multiple')
	            ]),
	            'STANDARDIZE': functionDescription('\uc774 \ud568\uc218\ub294 \ud3c9\uade0\uacfc \ud45c\uc900 \ud3b8\ucc28\ub85c \ud2b9\uc9d5\ub418\ub294 \ubd84\ud3ec\uc5d0\uc11c \uc815\uaddc\ud654\ub41c \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'STDEVA': functionDescription('\uc774 \ud568\uc218\ub294 \uc22b\uc790, \ud14d\uc2a4\ud2b8 \ub610\ub294 \ub17c\ub9ac\uac12\uc758 \uc9d1\ud569\uc5d0 \ub300\ud55c \ud45c\uc900 \ud3b8\ucc28\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'STDEVP': functionDescription('\uc774 \ud568\uc218\ub294 \uc22b\uc790 \uac12\uc758 \uc804\uccb4 \uc9c0\uc815\ub41c \ubaa8\uc9d1\ub2e8\uc5d0 \ub300\ud55c \ud45c\uc900 \ud3b8\ucc28\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'STDEVPA': functionDescription('\uc774 \ud568\uc218\ub294 \ud14d\uc2a4\ud2b8 \ub610\ub294 \ub17c\ub9ac\uac12\uacfc \uc22b\uc790 \uac12\uc744 \ube44\ub86f\ud558\uc5ec \uc804\uccb4 \uc9c0\uc815\ub41c \ubaa8\uc9d1\ub2e8\uc5d0 \ub300\ud55c \ud45c\uc900 \ud3b8\ucc28\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'STEYX': functionDescription('\uc774 \ud568\uc218\ub294 \uc608\uce21\ud55c y \uac12\uc758 \ud45c\uc900 \uc624\ucc28\ub97c \uac01 x \uac12\uc5d0 \ub300\ud558\uc5ec \ubc18\ud658\ud569\ub2c8\ub2e4. \ud45c\uc900 \uc624\ucc28\ub294 x \uac12\uc5d0 \ub300\ud574 \uc608\uce21\ud55c y \uac12\uc758 \uc624\ucc28 \ud06c\uae30\uc785\ub2c8\ub2e4.', [
	                parameterDescription('array_dep'),
	                parameterDescription('array_ind')
	            ]),
	            'SUBSTITUTE': functionDescription('\uc774 \ud568\uc218\ub294 \uae30\uc874 \ubb38\uc790\uc5f4\uc758 \uc9c0\uc815\ub41c \ubb38\uc790\ub97c \uc0c8 \ubb38\uc790\uc5f4\ub85c \ub300\uccb4\ud569\ub2c8\ub2e4.', [
	                parameterDescription('text'),
	                parameterDescription('old_piece'),
	                parameterDescription('new_piece'),
	                parameterDescription('instance')
	            ]),
	            'SUBTOTAL': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uae30\ubcf8 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc22b\uc790 \ubaa9\ub85d\uc758 \ubd80\ubd84\ud569\uc744 \uc0b0\ucd9c\ud569\ub2c8\ub2e4.', [
	                parameterDescription('functioncode'),
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'SUM': functionDescription('\uc774 \ud568\uc218\ub294 \uc140 \ub610\ub294 \uc140 \ubc94\uc704\uc758 \ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'SUMIF': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uae30\uc900\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc140\ub4e4\uc758 \ud569\uc744 \uad6c\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array'),
	                parameterDescription('condition'),
	                parameterDescription('sumrange')
	            ]),
	            'SUMIFS': functionDescription('\uc774 \ud568\uc218\ub294 \uc5ec\ub7ec \uae30\uc900\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubc94\uc704 \ub0b4 \uc140\ub4e4\uc758 \ud569\uc744 \uad6c\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array'),
	                parameterDescription('conditionarray'),
	                parameterDescription('condition', true)
	            ]),
	            'SUMPRODUCT': functionDescription('\uc774 \ud568\uc218\ub294 \uc140\ub4e4\uc758 \uc81c\uacf1\uc758 \ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \uc8fc\uc5b4\uc9c4 \ubc30\uc5f4\uc5d0\uc11c \ud574\ub2f9 \uc694\uc18c\ub4e4\uc758 \uc81c\uacf1\uc758 \ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array1'),
	                parameterDescription('array2', true)
	            ]),
	            'SUMSQ': functionDescription('\uc774 \ud568\uc218\ub294 \uc778\uc218\uc758 \uc81c\uacf1\uc758 \ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'SUMX2MY2': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \ubc30\uc5f4\uc5d0\uc11c \ud574\ub2f9 \uac12\uc758 \uc81c\uacf1\uc758 \ucc28\uc758 \ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array_x'),
	                parameterDescription('array_y')
	            ]),
	            'SUMX2PY2': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \ubc30\uc5f4\uc5d0\uc11c \ud574\ub2f9 \uac12\uc758 \uc81c\uacf1\uc758 \ud569\uc758 \ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array_x'),
	                parameterDescription('array_y')
	            ]),
	            'SUMXMY2': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \ubc30\uc5f4\uc5d0\uc11c \ud574\ub2f9 \uac12\uc758 \ucc28\uc758 \uc81c\uacf1\uc758 \ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array_x'),
	                parameterDescription('array_y')
	            ]),
	            'SYD': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uae30\uac04 \ub3d9\uc548 \ub144\uc218 \ud569\uacc4\ubc95\uc5d0 \uc758\ud55c \uc790\uc0b0\uc758 \uac10\uac00 \uc0c1\uac01\uc561\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life'),
	                parameterDescription('period')
	            ]),
	            'T': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc140\uc5d0 \uc788\ub294 \ud14d\uc2a4\ud2b8\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'TAN': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uac01\ub3c4\uc758 TAN\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('angle')
	            ]),
	            'TANH': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc218\uc758 TANH\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'TBILLEQ': functionDescription('\uc774 \ud568\uc218\ub294 \uad6d\ucc44\uc5d0 \ud574\ub2f9\ud558\ub294 \uc218\uc775\ub960\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('discount')
	            ]),
	            'TBILLPRICE': functionDescription('\uc774 \ud568\uc218\ub294 \uc7ac\ubb34\ubd80 \uccad\uad6c\uc11c (\ub610\ub294 T- \uccad\uad6c\uc11c)\uc758 \uc561\uba74\uac00 $ 100 \ub2f9 \uac00\uaca9\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('discount')
	            ]),
	            'TBILLYIELD': functionDescription('\uc774 \ud568\uc218\ub294 \uad6d\ucc44\uc5d0 \ub300\ud55c \uc218\uc775\ub960\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settle'),
	                parameterDescription('mature'),
	                parameterDescription('priceper')
	            ]),
	            'TDIST': functionDescription('\uc774 \ud568\uc218\ub294 t-\ubd84\ud3ec\uc5d0 \ub300\ud55c \ud655\ub960\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('deg'),
	                parameterDescription('tails')
	            ]),
	            'TEXT': functionDescription('\uc774 \ud568\uc218\ub294 \uc22b\uc790\uc758 \uc11c\uc2dd\uc744 \uc9c0\uc815\ud558\uace0 \uc22b\uc790\ub97c \ud14d\uc2a4\ud2b8\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('text')
	            ]),
	            'TIME': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc2dc\uac04\uc5d0 \ub300\ud55c TimeSpan \uac1c\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('hour'),
	                parameterDescription('minutes'),
	                parameterDescription('seconds')
	            ]),
	            'TIMEVALUE': functionDescription('\uc774 \ud568\uc218\ub294 \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\ub85c \ud45c\uc2dc\ub41c \uc2dc\uac04\uc758 TimeSpan \uac1c\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('time_string')
	            ]),
	            'TINV': functionDescription('\uc774 \ud568\uc218\ub294 \ud559\uc0dd\uc758 t-\ubd84\ud3ec\uc5d0 \ub300\ud55c t \uac12\uc744 \ud655\ub960 \ud568\uc218\uc640 \uc790\uc720\ub3c4\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('prog'),
	                parameterDescription('deg')
	            ]),
	            'TODAY': functionDescription('\uc774 \ud568\uc218\ub294 \ud604\uc7ac \ub0a0\uc9dc\uc640 \uc2dc\uac04\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', []),
	            'TRANSPOSE': functionDescription('\uc774 \ud568\uc218\ub294 \uc140\uc758 \ud589\uacfc \uc5f4\uc744 \ubc14\uafc9\ub2c8\ub2e4.', [
	                parameterDescription('array')
	            ]),
	            'TREND': functionDescription('\uc774 \ud568\uc218\ub294 \uc120\ud615 \ucd94\uc138\ub97c \ub530\ub77c \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \uc774 \ud568\uc218\ub294 x \uac12\uacfc y \uac12\uc774 \uc54c\ub824\uc9c4 \ubc30\uc5f4\uc5d0 \uc9c1\uc120\uc744 \ub9de\ucda5\ub2c8\ub2e4. \uc9c0\uc815\ub41c \uc0c8 x \uac12\uc758 \ubc30\uc5f4\uc5d0 \ub300\ud574 \ud574\ub2f9 \uc120\uc744 \ub530\ub77c y \uac12\uc744 \ubc18\ud658\ud558\ub294 \uac83\uc774 \ucd94\uc138\uc785\ub2c8\ub2e4.', [
	                parameterDescription('y'),
	                parameterDescription('x'),
	                parameterDescription('newx'),
	                parameterDescription('constant')
	            ]),
	            'TRIM': functionDescription('\uc774 \ud568\uc218\ub294 \ubb38\uc790\uc5f4\uc5d0\uc11c \ucd94\uac00 \uacf5\ubc31\uc744 \uc81c\uac70\ud558\uace0 \ub2e8\uc5b4 \uc0ac\uc774\uc758 \uacf5\ubc31\uc744 \ud55c \uce78\uc73c\ub85c \uc720\uc9c0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('text')
	            ]),
	            'TRIMMEAN': functionDescription('\uc774 \ud568\uc218\ub294 \ub9e8 \uc704 \ub370\uc774\ud130\uc640 \ub9e8 \uc544\ub798 \ub370\uc774\ud130\ub97c \uc81c\uc678\ud558\uace0 \ub370\uc774\ud130 \ud558\uc704 \uc9d1\ud569\uc758 \ud3c9\uade0\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array'),
	                parameterDescription('percent')
	            ]),
	            'TRUE': functionDescription('\uc774 \ud568\uc218\ub294 \ub17c\ub9ac\uac12 TRUE\uc5d0 \ud574\ub2f9\ud558\ub294 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', []),
	            'TRUNC': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \uc218\uc758 \uc9c0\uc815\ub41c \ubd84\uc218 \ubd80\ubd84\uc744 \uc81c\uac70\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('precision')
	            ]),
	            'TTEST': functionDescription('\uc774 \ud568\uc218\ub294 t-\uac80\uc99d\uacfc \uad00\ub828\ub41c \ud655\ub960\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array1'),
	                parameterDescription('array2'),
	                parameterDescription('tails'),
	                parameterDescription('type')
	            ]),
	            'TYPE': functionDescription('\uc774 \ud568\uc218\ub294 \uac12\uc758 \uc720\ud615\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'UPPER': functionDescription('\uc774 \ud568\uc218\ub294 \ud14d\uc2a4\ud2b8\ub97c \ub300\ubb38\uc790\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('string')
	            ]),
	            'VALUE': functionDescription('\uc774 \ud568\uc218\ub294 \uc22b\uc790\uc778 \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\uc744 \uc22b\uc790 \uac12\uc73c\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('text')
	            ]),
	            'VAR': functionDescription('\uc774 \ud568\uc218\ub294 \uc22b\uc790 \uac12\ub9cc \uc0ac\uc6a9\ud558\ub294 \ubaa8\uc9d1\ub2e8\uc758 \ud45c\ubcf8 \ubd84\uc0b0\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VARA': functionDescription('\uc774 \ud568\uc218\ub294 \uc22b\uc790, \ub17c\ub9ac\uac12 \ub610\ub294 \ud14d\uc2a4\ud2b8 \uac12\uc744 \ud3ec\ud568\ud558\ub294 \ubaa8\uc9d1\ub2e8\uc758 \ud45c\ubcf8 \ubd84\uc0b0\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VARP': functionDescription('\uc774 \ud568\uc218\ub294 \uc22b\uc790 \uac12\ub9cc \uc0ac\uc6a9\ud558\ub294 \uc804\uccb4 \ubaa8\uc9d1\ub2e8\uc758 \ubd84\uc0b0\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VARPA': functionDescription('\uc774 \ud568\uc218\ub294 \uc22b\uc790, \ub17c\ub9ac\uac12 \ub610\ub294 \ud14d\uc2a4\ud2b8 \uac12\uc744 \ud3ec\ud568\ud558\ub294 \uc804\uccb4 \ubaa8\uc9d1\ub2e8\uc758 \ubd84\uc0b0\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VDB': functionDescription('\uc774 \ud568\uc218\ub294 \uac00\ubcc0 \uc815\uc728\ubc95\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc9c0\uc815\ud55c \uae30\uac04 \ub3d9\uc548 \uc790\uc0b0\uc758 \uac10\uac00 \uc0c1\uac01\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cost'),
	                parameterDescription('salvage'),
	                parameterDescription('life'),
	                parameterDescription('start'),
	                parameterDescription('end'),
	                parameterDescription('factor'),
	                parameterDescription('switchnot')
	            ]),
	            'VLOOKUP': functionDescription('\uc774 \ud568\uc218\ub294 \uac00\uc7a5 \uc67c\ucabd \uc5f4\uc5d0\uc11c \uac12\uc744 \uac80\uc0c9\ud55c \ub2e4\uc74c \uc9c0\uc815\ub41c \uc5f4\uc758 \ub3d9\uc77c\ud55c \ud589\uc5d0 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('array'),
	                parameterDescription('colindex'),
	                parameterDescription('approx')
	            ]),
	            'WEEKDAY': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ub41c \ub0a0\uc9dc\uc758 \uc694\uc77c\uc5d0 \ud574\ub2f9\ud558\ub294 \uc22b\uc790\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('date'),
	                parameterDescription('type')
	            ]),
	            'WEEKNUM': functionDescription('\uc774 \ud568\uc218\ub294 \uc5f0\ub3c4\uc758 \uc8fc\uac04\uc744 \ub098\ud0c0\ub0b4\ub294 \uc22b\uc790\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('date'),
	                parameterDescription('weektype')
	            ]),
	            'WEIBULL': functionDescription('\uc774 \ud568\uc218\ub294 \uc548\uc815\uc131 \ubd84\uc11d\uc5d0 \uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 2\uac1c\uc758 \ub9e4\uac1c \ubcc0\uc218 WEIBULL \ubd84\ud3ec\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative')
	            ]),
	            'WORKDAY': functionDescription('\uc774 \ud568\uc218\ub294 \uc2dc\uc791 \ub0a0\uc9dc \uc774\uc804 \ub610\ub294 \uc774\ud6c4\uc758 \uc791\uc5c5\uc77c \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('startdate'),
	                parameterDescription('numdays'),
	                parameterDescription('holidays')
	            ]),
	            'XIRR': functionDescription('\uc774 \ud568\uc218\ub294 \ube44\uc815\uae30\uc801\uc77c \uc218\ub3c4 \uc788\ub294 \ud604\uae08 \ud750\ub984\uc758 \ub0b4\ubd80 \ud68c\uc218\uc728\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('values'),
	                parameterDescription('dates'),
	                parameterDescription('guess')
	            ]),
	            'XNPV': functionDescription('\uc774 \ud568\uc218\ub294 \ube44\uc815\uae30\uc801\uc77c \uc218\ub3c4 \uc788\ub294 \ud604\uae08 \ud750\ub984\uc758 \uc21c \ud604\uc7ac \uac00\uce58\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('rate'),
	                parameterDescription('values'),
	                parameterDescription('dates')
	            ]),
	            'YEAR': functionDescription('\uc774 \ud568\uc218\ub294 \uc5f0\ub3c4\ub97c \uc9c0\uc815\ub41c \ub0a0\uc9dc\uc5d0 \ub300\ud55c \uc815\uc218\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('date')
	            ]),
	            'YEARFRAC': functionDescription('\uc774 \ud568\uc218\ub294 \uc2dc\uc791 \ub0a0\uc9dc\uc640 \uc885\ub8cc \ub0a0\uc9dc \uc0ac\uc774\uc758 \uc804\uccb4 \ub0a0\uc9dc \uc218\ub85c \ud45c\uc2dc\ub41c \uc5f0\ub3c4 \ubd80\ubd84\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate'),
	                parameterDescription('basis')
	            ]),
	            'YIELD': functionDescription('\uc774 \ud568\uc218\ub294 \uc815\uae30\uc801\uc73c\ub85c \uc774\uc790\ub97c \uc9c0\uae09\ud558\ub294 \uc720\uac00 \uc99d\uad8c\uc758 \uc218\uc775\ub960\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('rate'),
	                parameterDescription('price'),
	                parameterDescription('redeem'),
	                parameterDescription('frequency'),
	                parameterDescription('basis')
	            ]),
	            'YIELDDISC': functionDescription('\uc774 \ud568\uc218\ub294 \ud560\uc778\ub41c \uc720\uac00 \uc99d\uad8c\uc758 \uc5f0\uac04 \uc218\uc775\ub960\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('price'),
	                parameterDescription('redeem'),
	                parameterDescription('basis')
	            ]),
	            'YIELDMAT': functionDescription('\uc774 \ud568\uc218\ub294 \ub9cc\uae30 \uc2dc \uc774\uc790\ub97c \uc9c0\uae09\ud558\ub294 \uc720\uac00 \uc99d\uad8c\uc758 \uc5f0\uac04 \uc218\uc775\ub960\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('settle'),
	                parameterDescription('maturity'),
	                parameterDescription('issue'),
	                parameterDescription('issrate'),
	                parameterDescription('price'),
	                parameterDescription('basis')
	            ]),
	            'ZTEST': functionDescription('\uc774 \ud568\uc218\ub294 z-\uac80\uc99d\uc758 significance \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. z-\uac80\uc99d\uc5d0\uc11c\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc5d0 \ub300\ud55c x\uc758 \ud45c\uc900 \uc131\uacfc\ub97c \uc0dd\uc131\ud558\uace0 \uc815\uaddc \ubd84\ud3ec\uc5d0 \ub300\ud55c \uc591\uce21 \ud655\ub960\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array'),
	                parameterDescription('x'),
	                parameterDescription('sigma')
	            ]),
	            'HBARSPARKLINE': functionDescription('\uc774 \ud568\uc218\ub294 Hbar \uc2a4\ud30c\ud06c\ub77c\uc778\uc744 \ud45c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('colorScheme')
	            ]),
	            'VBARSPARKLINE': functionDescription('\uc774 \ud568\uc218\ub294 Vbar \uc2a4\ud30c\ud06c\ub77c\uc778\uc744 \ud45c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('colorScheme')
	            ]),
	            'VARISPARKLINE': functionDescription('\uc774 \ud568\uc218\ub294 \ubd84\uc0b0 \uc2a4\ud30c\ud06c\ub77c\uc778\uc744 \ud45c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
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
	            'PIESPARKLINE': functionDescription('\uc774 \ud568\uc218\ub294 \uc6d0\ud615 \uc2a4\ud30c\ud06c\ub77c\uc778\uc744 \ud45c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('range|percentage'),
	                parameterDescription('color', true)
	            ]),
	            'AREASPARKLINE': functionDescription('\uc774 \ud568\uc218\ub294 \uc601\uc5ed \uc2a4\ud30c\ud06c\ub77c\uc778\uc744 \ud45c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('points'),
	                parameterDescription('mini'),
	                parameterDescription('maxi'),
	                parameterDescription('line1'),
	                parameterDescription('line2'),
	                parameterDescription('colorPositive'),
	                parameterDescription('colorNegative')
	            ]),
	            'SCATTERSPARKLINE': functionDescription('\uc774 \ud568\uc218\ub294 \ubd84\uc0b0\ud615 \uc2a4\ud30c\ud06c\ub77c\uc778\uc744 \ud45c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
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
	            'LINESPARKLINE': functionDescription('\uc774 \ud568\uc218\ub294 \uc120 \uc2a4\ud30c\ud06c\ub77c\uc778\uc744 \ud45c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('data'),
	                parameterDescription('dataOrientation'),
	                parameterDescription('dateAxisData'),
	                parameterDescription('dateAxisOrientation'),
	                parameterDescription('setting')
	            ]),
	            'COLUMNSPARKLINE': functionDescription('\uc774 \ud568\uc218\ub294 \uc5f4 \uc2a4\ud30c\ud06c\ub77c\uc778\uc744 \ud45c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('data'),
	                parameterDescription('dataOrientation'),
	                parameterDescription('dateAxisData'),
	                parameterDescription('dateAxisOrientation'),
	                parameterDescription('setting')
	            ]),
	            'WINLOSSSPARKLINE': functionDescription('\uc774 \ud568\uc218\ub294 \uc2b9\ud328 \uc2a4\ud30c\ud06c\ub77c\uc778\uc744 \ud45c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('data'),
	                parameterDescription('dataOrientation'),
	                parameterDescription('dateAxisData'),
	                parameterDescription('dateAxisOrientation'),
	                parameterDescription('setting')
	            ]),
	            'BULLETSPARKLINE': functionDescription('\uc774 \ud568\uc218\ub294 \uae00\uba38\ub9ac \uae30\ud638 \uc2a4\ud30c\ud06c\ub77c\uc778\uc744 \ud45c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
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
	            'SPREADSPARKLINE': functionDescription('\uc774 \ud568\uc218\ub294 \uc2a4\ud504\ub808\ub4dc \uc2a4\ud30c\ud06c\ub77c\uc778\uc744 \ud45c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('points'),
	                parameterDescription('showAverage'),
	                parameterDescription('scaleStart'),
	                parameterDescription('scaleEnd'),
	                parameterDescription('style'),
	                parameterDescription('colorScheme'),
	                parameterDescription('vertical')
	            ]),
	            'STACKEDSPARKLINE': functionDescription('\uc774 \ud568\uc218\ub294 \ub204\uc801 \uc2a4\ud30c\ud06c\ub77c\uc778\uc744 \ud45c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
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
	            'BOXPLOTSPARKLINE': functionDescription('\uc774 \ud568\uc218\ub294 \uc0c1\uc790 \uadf8\ub9bc \uc2a4\ud30c\ud06c\ub77c\uc778\uc744 \ud45c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
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
	            'CASCADESPARKLINE': functionDescription('\uc774 \ud568\uc218\ub294 \uacc4\ub2e8\uc2dd \ubc30\uc5f4 \uc2a4\ud30c\ud06c\ub77c\uc778\uc744 \ud45c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('pointsRange'),
	                parameterDescription('pointIndex'),
	                parameterDescription('labelsRange'),
	                parameterDescription('minimum'),
	                parameterDescription('maximum'),
	                parameterDescription('colorPositive'),
	                parameterDescription('colorNegative'),
	                parameterDescription('vertical')
	            ]),
	            'PARETOSPARKLINE': functionDescription('\uc774 \ud568\uc218\ub294 \ud30c\ub808\ud1a0 \uc2a4\ud30c\ud06c\ub77c\uc778\uc744 \ud45c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('points'),
	                parameterDescription('pointIndex'),
	                parameterDescription('colorRange'),
	                parameterDescription('target'),
	                parameterDescription('target2'),
	                parameterDescription('highlightPosition'),
	                parameterDescription('label'),
	                parameterDescription('vertical')
	            ]),
	            'MONTHSPARKLINE': functionDescription('\uc774 \ud568\uc218\ub294 \uc6d4 \uc2a4\ud30c\ud06c\ub77c\uc778\uc744 \ud45c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('year'),
	                parameterDescription('month'),
	                parameterDescription('dataRange'),
	                parameterDescription('emptyColor'),
	                parameterDescription('startColor'),
	                parameterDescription('middleColor'),
	                parameterDescription('endColor')
	            ]),
	            'YEARSPARKLINE': functionDescription('\uc774 \ud568\uc218\ub294 \ub144 \uc2a4\ud30c\ud06c\ub77c\uc778\uc744 \ud45c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('year'),
	                parameterDescription('dataRange'),
	                parameterDescription('emptyColor'),
	                parameterDescription('startColor'),
	                parameterDescription('middleColor'),
	                parameterDescription('endColor')
	            ]),
	            'CEILING.PRECISE': functionDescription('\uc774 \ud568\uc218\ub294 \uac00\uc7a5 \uac00\uae4c\uc6b4 \uc815\uc218 \ub610\ub294 \uc9c0\uc815\ub41c \uac12\uc758 \uac00\uc7a5 \uac00\uae4c\uc6b4 \ubc30\uc218\uac00 \ub418\ub3c4\ub85d \uac12\uc744 \uc62c\ub9bc\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('signif')
	            ]),
	            'COVARIANCE.S': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \ub370\uc774\ud130 \uc9d1\ud569\uc758 \uac01 \ub370\uc774\ud130 \uc694\uc18c \uc30d\uc5d0 \ub300\ud55c \ud3b8\ucc28\ub97c \uacf1\ud55c \uac12\uc758 \ud3c9\uade0\uc744 \ub098\ud0c0\ub0b4\ub294 \ud45c\ubcf8 \uacf5 \ubd84\uc0b0\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'FLOOR.PRECISE': functionDescription('\uc774 \ud568\uc218\ub294 \uac00\uc7a5 \uac00\uae4c\uc6b4 \uc815\uc218 \ub610\ub294 \uc9c0\uc815\ub41c \uac12\uc758 \uac00\uc7a5 \uac00\uae4c\uc6b4 \ubc30\uc218\uac00 \ub418\ub3c4\ub85d \uac12\uc744 \ub0b4\ub9bc\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('signif')
	            ]),
	            'PERCENTILE.EXC': functionDescription('\uc774 \ud568\uc218\ub294 \ubc94\uc704\uc5d0\uc11c n\ubc88\uc9f8 \ubc31\ubd84\uc704\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'QUARTILE.EXC': functionDescription('\uc774 \ud568\uc218\ub294 \uac12\uc774 \uc18d\ud558\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc758 \ubc31\ubd84\uc704\uc218(1/4 \ub610\ub294 25%)\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array'),
	                parameterDescription('quart')
	            ]),
	            'RANK.AVG': functionDescription('\uc774 \ud568\uc218\ub294 \uc22b\uc790 \uc9d1\ud569 \ub0b4\uc5d0\uc11c \uc9c0\uc815\ud55c \uc218\uc758 \uc21c\uc704\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \uc77c\ubd80 \uac12\uc758 \uc21c\uc704\uac00 \ub3d9\uc77c\ud55c \uacbd\uc6b0 \ud3c9\uade0 \uc21c\uc704\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('array'),
	                parameterDescription('order')
	            ]),
	            'MODE.MULT': functionDescription('\uc774 \ud568\uc218\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc5d0\uc11c \uac00\uc7a5 \uc790\uc8fc \ubc1c\uc0dd\ud558\ub294 \uac12 \ub610\ub294 \uac00\uc7a5 \uc790\uc8fc \ubc1c\uc0dd\ud558\ub294 \uc138\ub85c \ubc30\uc5f4\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'STDEV.P': functionDescription('\uc774 \ud568\uc218\ub294 \uc22b\uc790 \uac12\uc758 \uc804\uccb4 \uc9c0\uc815\ub41c \ubaa8\uc9d1\ub2e8\uc5d0 \ub300\ud55c \ud45c\uc900 \ud3b8\ucc28\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'VAR.P': functionDescription('\uc774 \ud568\uc218\ub294 \uc22b\uc790 \uac12\ub9cc \uc0ac\uc6a9\ud558\ub294 \uc804\uccb4 \ubaa8\uc9d1\ub2e8\uc758 \ubd84\uc0b0\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'COVARIANCE.P': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \ub370\uc774\ud130 \uc9d1\ud569\uc758 \uac01 \ub370\uc774\ud130 \uc694\uc18c \uc30d\uc5d0 \ub300\ud55c \ud3b8\ucc28\ub97c \uacf1\ud55c \uac12\uc758 \ud3c9\uade0\uc744 \ub098\ud0c0\ub0b4\ub294 \uacf5 \ubd84\uc0b0\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'MODE.SNGL': functionDescription('\uc774 \ud568\uc218\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc5d0\uc11c \uac00\uc7a5 \uc790\uc8fc \ubc1c\uc0dd\ud558\ub294 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'PERCENTILE.INC': functionDescription('\uc774 \ud568\uc218\ub294 \ubc94\uc704\uc5d0\uc11c n\ubc88\uc9f8 \ubc31\ubd84\uc704\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array'),
	                parameterDescription('n')
	            ]),
	            'QUARTILE.INC': functionDescription('\uc774 \ud568\uc218\ub294 \uac12\uc774 \uc18d\ud558\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc758 \ubc31\ubd84\uc704\uc218(1/4 \ub610\ub294 25%)\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array'),
	                parameterDescription('quart')
	            ]),
	            'RANK.EQ': functionDescription('\uc774 \ud568\uc218\ub294 \uc22b\uc790 \uc9d1\ud569 \ub0b4\uc5d0\uc11c \uc9c0\uc815\ud55c \uc218\uc758 \uc21c\uc704\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \uc9d1\ud569\uc744 \uc815\ub82c\ud560 \uacbd\uc6b0 \uc218\uc758 \uc21c\uc704\ub294 \ubaa9\ub85d \ub0b4\uc5d0\uc11c \ud574\ub2f9 \uc218\uc758 \uc704\uce58\uc785\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('array'),
	                parameterDescription('order')
	            ]),
	            'STDEV': functionDescription('\uc774 \ud568\uc218\ub294 \ud45c\ubcf8\uc5d0 \ub530\ub77c \uc608\uce21\ub418\ub294 \ud45c\uc900 \ud3b8\ucc28\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'STDEV.S': functionDescription('\uc774 \ud568\uc218\ub294 \ud45c\ubcf8\uc5d0 \ub530\ub77c \uc608\uce21\ub418\ub294 \ud45c\uc900 \ud3b8\ucc28\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'VAR.S': functionDescription('\uc774 \ud568\uc218\ub294 \uc22b\uc790 \uac12\ub9cc \uc0ac\uc6a9\ud558\ub294 \ubaa8\uc9d1\ub2e8\uc758 \ud45c\ubcf8 \ubd84\uc0b0\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value1'),
	                parameterDescription('value2', true)
	            ]),
	            'BETA.INV': functionDescription('\uc774 \ud568\uc218\ub294 \ub204\uc801 \ubca0\ud0c0 \ubd84\ud3ec \ud568\uc218\uc758 \uc5ed\ud568\uc218\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('prob'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'BINOM.DIST': functionDescription('\uc774 \ud568\uc218\ub294 \uac1c\ubcc4\ud56d \uc774\ud56d \ubd84\ud3ec \ud655\ub960\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('cumulative')
	            ]),
	            'BINOM.INV': functionDescription('\uc774 \ud568\uc218\ub294 \ub204\uc801 \uc774\ud56d \ubd84\ud3ec\uac00 \uae30\uc900\uce58 \uc774\uc0c1\uc774 \ub418\ub294 \uac12 \uc911 \ucd5c\uc18c\uac12\uc744 \ub098\ud0c0\ub0b4\ub294 \uc870\uac74 \uc774\ud56d\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('alpha')
	            ]),
	            'CHISQ.DIST.RT': functionDescription('\uc774 \ud568\uc218\ub294 \uce74\uc774 \uc81c\uacf1 \ubd84\ud3ec\uc758 \ub2e8\uce21 \ud655\ub960\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('deg')
	            ]),
	            'CHISQ.INV.RT': functionDescription('\uc774 \ud568\uc218\ub294 \uce74\uc774 \uc81c\uacf1 \ubd84\ud3ec\uc758 \ub2e8\uce21 \ud655\ub960\uc758 \uc5ed\ud568\uc218\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('prob'),
	                parameterDescription('deg')
	            ]),
	            'CHISQ.TEST': functionDescription('\uc774 \ud568\uc218\ub294 \uce74\uc774 \uc81c\uacf1 \ubd84\ud3ec\uc5d0\uc11c \ub3c5\ub9bd \uac80\uc99d \uacb0\uacfc\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('obs_array'),
	                parameterDescription('exp_array')
	            ]),
	            'CONFIDENCE.NORM': functionDescription('\uc774 \ud568\uc218\ub294 \ubaa8\uc9d1\ub2e8 \ud3c9\uade0\uc758 \uc2e0\ub8b0 \uad6c\uac04\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('alpha'),
	                parameterDescription('stdev'),
	                parameterDescription('size')
	            ]),
	            'EXPON.DIST': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc218 \ubd84\ud3ec \ub610\ub294 \ud655\ub960 \ubc00\ub3c4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('lambda'),
	                parameterDescription('cumulative')
	            ]),
	            'F.DIST.RT': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \ub370\uc774\ud130 \uc9d1\ud569 \uc0ac\uc774\uc758 \ubd84\ud3ec\ub3c4\ub97c \ub098\ud0c0\ub0b4\ub294 F \ud655\ub960 \ubd84\ud3ec\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'F.INV.RT': functionDescription('\uc774 \ud568\uc218\ub294 F \ud655\ub960 \ubd84\ud3ec\uc758 \uc5ed\ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('p'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'F.TEST': functionDescription('\uc774 \ud568\uc218\ub294 \ub450 \ubc30\uc5f4\uc758 \ubd84\uc0b0\uc774 \ud06c\uac8c \ucc28\uc774\uac00 \ub098\uc9c0 \uc54a\ub294 \uacbd\uc6b0 \ub2e8\uce21 \ud655\ub960\uc778 F-\uac80\uc815 \uacb0\uacfc\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array1'),
	                parameterDescription('array2')
	            ]),
	            'GAMMA.DIST': functionDescription('\uc774 \ud568\uc218\ub294 \uac10\ub9c8 \ubd84\ud3ec\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative')
	            ]),
	            'GAMMA.INV': functionDescription('\uc774 \ud568\uc218\ub294 \uac10\ub9c8 \ub204\uc801 \ubd84\ud3ec\uc758 \uc5ed\ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('p'),
	                parameterDescription('alpha'),
	                parameterDescription('beta')
	            ]),
	            'LOGNORM.INV': functionDescription('\uc774 \ud568\uc218\ub294 x\uc5d0 \ub300\ud55c \ub85c\uadf8 \uc815\uaddc \ub204\uc801 \ubd84\ud3ec\uc758 \uc5ed\ud568\uc218 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c LN(x)\uc740 \uc9c0\uc815\ub41c \ud3c9\uade0\uacfc \ud45c\uc900 \ud3b8\ucc28\ub97c \uac16\ub294 \uc815\uaddc \ubd84\ud3ec\uc785\ub2c8\ub2e4.', [
	                parameterDescription('prob'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'NORM.DIST': functionDescription('\uc774 \ud568\uc218\ub294 \uc9c0\uc815\ud55c \ud3c9\uade0\uacfc \ud45c\uc900 \ud3b8\ucc28\uc5d0 \uc758\uac70\ud558\uc5ec \uc815\uaddc \ubd84\ud3ec\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev'),
	                parameterDescription('cumulative')
	            ]),
	            'NORM.INV': functionDescription('\uc774 \ud568\uc218\ub294 \uc8fc\uc5b4\uc9c4 \ud3c9\uade0\uacfc \ud45c\uc900 \ud3b8\ucc28\uc5d0 \uc758\uac70\ud558\uc5ec \uc815\uaddc \ub204\uc801 \ubd84\ud3ec\uc758 \uc5ed\ud568\uc218 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('prob'),
	                parameterDescription('mean'),
	                parameterDescription('stdev')
	            ]),
	            'NORM.S.INV': functionDescription('\uc774 \ud568\uc218\ub294 \ud45c\uc900 \uc815\uaddc \ub204\uc801 \ubd84\ud3ec\uc758 \uc5ed\ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \ubd84\ud3ec\uc758 \ud3c9\uade0\uc774 0\uc774\uace0 \ud45c\uc900 \ud3b8\ucc28\uac00 1\uc785\ub2c8\ub2e4.', [
	                parameterDescription('prob')
	            ]),
	            'PERCENTRANK.INC': functionDescription('\uc774 \ud568\uc218\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc5d0\uc11c \ubc31\ubd84\uc728 \uc21c\uc704\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array'),
	                parameterDescription('n'),
	                parameterDescription('signif')
	            ]),
	            'POISSON.DIST': functionDescription('\uc774 \ud568\uc218\ub294POISSON \ud655\ub960 \ubd84\ud3ec\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('nevents'),
	                parameterDescription('mean'),
	                parameterDescription('cumulative')
	            ]),
	            'T.INV.2T': functionDescription('\uc774 \ud568\uc218\ub294 \ud559\uc0dd\uc758 t-\ubd84\ud3ec\uc5d0 \ub300\ud55c t \uac12\uc744 \ud655\ub960 \ud568\uc218\uc640 \uc790\uc720\ub3c4\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('prog'),
	                parameterDescription('deg')
	            ]),
	            'T.TEST': functionDescription('\uc774 \ud568\uc218\ub294 t-\uac80\uc99d\uacfc \uad00\ub828\ub41c \ud655\ub960\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array1'),
	                parameterDescription('array2'),
	                parameterDescription('tails'),
	                parameterDescription('type')
	            ]),
	            'WEIBULL.DIST': functionDescription('\uc774 \ud568\uc218\ub294 \uc548\uc815\uc131 \ubd84\uc11d\uc5d0 \uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 2 \ub9e4\uac1c \ubcc0\uc218 WEIBULL \ubd84\ud3ec\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative')
	            ]),
	            'Z.TEST': functionDescription('\uc774 \ud568\uc218\ub294 z-\uac80\uc99d\uc758 significance \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. z-\uac80\uc99d\uc5d0\uc11c\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc5d0 \ub300\ud55c x\uc758 \ud45c\uc900 \uc131\uacfc\ub97c \uc0dd\uc131\ud558\uace0 \uc815\uaddc \ubd84\ud3ec\uc5d0 \ub300\ud55c \uc591\uce21 \ud655\ub960\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array'),
	                parameterDescription('x'),
	                parameterDescription('sigma')
	            ]),
	            'T.DIST.RT': functionDescription('\uc774 \ud568\uc218\ub294 \uc6b0\uce21 \uac80\uc99d t-\ubd84\ud3ec\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('deg')
	            ]),
	            'T.DIST.2T': functionDescription('\uc774 \ud568\uc218\ub294 \uc591\uce21 t-\ubd84\ud3ec\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('deg')
	            ]),
	            'ISO.CEILING': functionDescription('\uc774 \ud568\uc218\ub294 significance\uc758 \ubd80\ud638\uc5d0 \uc0c1\uad00\uc5c6\uc774 \uac00\uc7a5 \uac00\uae4c\uc6b4 \uc815\uc218 \ub610\ub294 significance\uc758 \uac00\uc7a5 \uac00\uae4c\uc6b4 \ubc30\uc218\ub85c \uac12\uc744 \uc62c\ub9bc\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('signif')
	            ]),
	            'BETA.DIST': functionDescription('\uc774 \ud568\uc218\ub294 \ubca0\ud0c0 \ubd84\ud3ec\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('alpha'),
	                parameterDescription('beta'),
	                parameterDescription('cumulative'),
	                parameterDescription('lower'),
	                parameterDescription('upper')
	            ]),
	            'GAMMALN.PRECISE': functionDescription('\uc774 \ud568\uc218\ub294 \uac10\ub9c8 \ud568\uc218\uc758 \uc790\uc5f0 \ub85c\uadf8\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'ERF.PRECISE': functionDescription('\uc774 \ud568\uc218\ub294 \uc624\ucc28 \ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('lowerlimit')
	            ]),
	            'ERFC.PRECISE': functionDescription('\uc774 \ud568\uc218\ub294 ERF \ud568\uc218\uc758 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('lowerlimit')
	            ]),
	            'PERCENTRANK.EXC': functionDescription('\uc774 \ud568\uc218\ub294 \ub370\uc774\ud130 \uc9d1\ud569\uc5d0 \uc788\ub294 \uac12\uc758 \ubc31\ubd84\uc728 \uc21c\uc704(0..1, \ub2e8\ub3c5)\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array'),
	                parameterDescription('n'),
	                parameterDescription('signif')
	            ]),
	            'HYPGEOM.DIST': functionDescription('\uc774 \ud568\uc218\ub294hypergeometric \ubd84\ud3ec\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('M'),
	                parameterDescription('N'),
	                parameterDescription('cumulative')
	            ]),
	            'LOGNORM.DIST': functionDescription('\uc774 \ud568\uc218\ub294 x\uc758 \ub85c\uadf8 \uc815\uaddc \ubd84\ud3ec\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('mean'),
	                parameterDescription('stdev'),
	                parameterDescription('cumulative')
	            ]),
	            'NEGBINOM.DIST': functionDescription('\uc774 \ud568\uc218\ub294 \uc74c \uc774\ud56d \ubd84\ud3ec\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('r'),
	                parameterDescription('p'),
	                parameterDescription('cumulative')
	            ]),
	            'NORM.S.DIST': functionDescription('\uc774 \ud568\uc218\ub294 \ud45c\uc900 \uc815\uaddc \ubd84\ud3ec\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('z'),
	                parameterDescription('cumulative')
	            ]),
	            'T.DIST': functionDescription('\uc774 \ud568\uc218\ub294 t-\ubd84\ud3ec\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('deg'),
	                parameterDescription('cumulative')
	            ]),
	            'F.DIST': functionDescription('\uc774 \ud568\uc218\ub294 F \ud655\ub960 \ubd84\ud3ec\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('degnum'),
	                parameterDescription('degden'),
	                parameterDescription('cumulative')
	            ]),
	            'CHISQ.DIST': functionDescription('\uc774 \ud568\uc218\ub294 \uce74\uc774 \uc81c\uacf1 \ubd84\ud3ec\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('deg'),
	                parameterDescription('cumulative')
	            ]),
	            'F.INV': functionDescription('\uc774 \ud568\uc218\ub294 F \ud655\ub960 \ubd84\ud3ec\uc758 \uc5ed\ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('probability'),
	                parameterDescription('degnum'),
	                parameterDescription('degden')
	            ]),
	            'T.INV': functionDescription('\uc774 \ud568\uc218\ub294 t-\ubd84\ud3ec\uc758 \uc88c\uce21 \uc5ed\ud568\uc218 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('probability'),
	                parameterDescription('deg')
	            ]),
	            'CHISQ.INV': functionDescription('\uc774 \ud568\uc218\ub294 \uce74\uc774 \uc81c\uacf1 \ubd84\ud3ec\uc758 \uc88c\uce21 \ud655\ub960\uc758 \uc5ed\ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('probability'),
	                parameterDescription('deg')
	            ]),
	            'CONFIDENCE.T': functionDescription('\uc774 \ud568\uc218\ub294 \ud559\uc0dd \ubd84\ud3ec\uc5d0 \ub300\ud55c \uc2e0\ub8b0 \uad6c\uac04\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('alpha'),
	                parameterDescription('stdev'),
	                parameterDescription('size')
	            ]),
	            'NETWORKDAYS.INTL': functionDescription('\uc774 \ud568\uc218\ub294 \uc778\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uacf5\ud734\uc77c\uacfc \uc8fc\ub9d0\uc744 \ub098\ud0c0\ub0b4\uc5b4 \ub450 \ub0a0\uc9dc \uc0ac\uc774\uc758 \uc791\uc5c5\uc77c \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate'),
	                parameterDescription('weekend'),
	                parameterDescription('holidays')
	            ]),
	            'WORKDAY.INTL': functionDescription('\uc774 \ud568\uc218\ub294 \uc0ac\uc6a9\uc790 \uc9c0\uc815 weekend \ub9e4\uac1c \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud2b9\uc815 \uc77c\uc758 \uc804\uc774\ub098 \ud6c4\uc5d0 \ud574\ub2f9\ud558\ub294 \ub0a0\uc9dc\uc758 \uc77c\ub828 \ubc88\ud638\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ub9e4\uac1c \ubcc0\uc218\ub294 \uc8fc\ub9d0\uacfc \uacf5\ud734\uc77c\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.', [
	                parameterDescription('startdate'),
	                parameterDescription('numdays'),
	                parameterDescription('weekend'),
	                parameterDescription('holidays')
	            ]),
	            'REFRESH': functionDescription('\uc774 \ud568\uc218\ub294 \uc218\uc2dd\uc744 \ub2e4\uc2dc \uacc4\uc0b0\ud558\ub294 \ubc29\ubc95\uc744 \uacb0\uc815\ud569\ub2c8\ub2e4. evaluateMode \uc778\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubcc0\uacbd\ub41c \ucc38\uc870 \uac12\uc5d0 \ub300\ud55c \uc218\uc2dd \uc7ac\uacc4\uc0b0\uc744 \ud55c \ubc88\ub9cc \uc218\ud589\ud558\uac70\ub098 \ud2b9\uc815 \uac04\uaca9\uc73c\ub85c \ub2e4\uc2dc \uacc4\uc0b0\ud558\ub3c4\ub85d \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.', [
	                parameterDescription('formula'),
	                parameterDescription('evaluateMode'),
	                parameterDescription('interval')
	            ]),
	            'DAYS': functionDescription('\ub450 \ub0a0\uc9dc \uc0ac\uc774\uc758 \uc77c \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('startdate'),
	                parameterDescription('enddate')
	            ]),
	            'ISOWEEKNUM': functionDescription('\uc9c0\uc815\ub41c \ub0a0\uc9dc\uc758 \uc5f0\ub3c4\uc5d0 \ud574\ub2f9\ud558\ub294 ISO \uc8fc \ubc88\ud638\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('date')
	            ]),
	            'BITAND': functionDescription('\ub450 \uc22b\uc790\uc758 \ube44\ud2b8 \ub2e8\uc704 "AND"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'BITLSHIFT': functionDescription('\uc9c0\uc815\ub41c \ube44\ud2b8\ub9cc\ud07c \uc67c\ucabd\uc73c\ub85c \uc774\ub3d9\ud55c \uc22b\uc790\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'BITOR': functionDescription('\ub450 \uc22b\uc790\uc758 \ube44\ud2b8 \ub2e8\uc704 "OR"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'BITRSHIFT': functionDescription('\uc9c0\uc815\ub41c \ube44\ud2b8\ub9cc\ud07c \uc624\ub978\ucabd\uc73c\ub85c \uc774\ub3d9\ud55c \uc22b\uc790\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'BITXOR': functionDescription('\ub450 \uc22b\uc790\uc758 \ube44\ud2b8 \ub2e8\uc704 "XOR"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number1'),
	                parameterDescription('number2')
	            ]),
	            'IMCOSH': functionDescription('x + yi \ub610\ub294 x + yj \ud14d\uc2a4\ud2b8 \ud615\uc2dd\uc778 \ubcf5\uc18c\uc218\uc758 \ud558\uc774\ud37c\ubcfc\ub9ad \ucf54\uc0ac\uc778 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCOT': functionDescription('x + yi \ub610\ub294 x + yj \ud14d\uc2a4\ud2b8 \ud615\uc2dd\uc778 \ubcf5\uc18c\uc218\uc758 \ucf54\ud0c4\uc820\ud2b8 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCSC': functionDescription('x + yi \ub610\ub294 x + yj \ud14d\uc2a4\ud2b8 \ud615\uc2dd\uc778 \ubcf5\uc18c\uc218\uc758 \ucf54\uc2dc\ucee8\ud2b8 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMCSCH': functionDescription('x + yi \ub610\ub294 x + yj \ud14d\uc2a4\ud2b8 \ud615\uc2dd\uc778 \ubcf5\uc18c\uc218\uc758 \ud558\uc774\ud37c\ubcfc\ub9ad \ucf54\uc2dc\ucee8\ud2b8 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSEC': functionDescription('x + yi \ub610\ub294 x + yj \ud14d\uc2a4\ud2b8 \ud615\uc2dd\uc778 \ubcf5\uc18c\uc218\uc758 \uc2dc\ucee8\ud2b8 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSECH': functionDescription('x + yi \ub610\ub294 x + yj \ud14d\uc2a4\ud2b8 \ud615\uc2dd\uc778 \ubcf5\uc18c\uc218\uc758 \ud558\uc774\ud37c\ubcfc\ub9ad \uc2dc\ucee8\ud2b8 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMSINH': functionDescription('x + yi \ub610\ub294 x + yj \ud14d\uc2a4\ud2b8 \ud615\uc2dd\uc778 \ubcf5\uc18c\uc218\uc758 \ud558\uc774\ud37c\ubcfc\ub9ad \uc2dc\ucee8\ud2b8 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'IMTAN': functionDescription('x + yi \ub610\ub294 x + yj \ud14d\uc2a4\ud2b8 \ud615\uc2dd\uc778 \ubcf5\uc18c\uc218\uc758 \ud0c4\uc820\ud2b8 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('complexnum')
	            ]),
	            'PDURATION': functionDescription('\ud22c\uc790 \uae08\uc561\uc774 \uc9c0\uc815\ub41c \uac12\uc5d0 \ub3c4\ub2ec\ud560 \ub54c\uae4c\uc9c0 \ud544\uc694\ud55c \uae30\uac04\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('rate'),
	                parameterDescription('pval'),
	                parameterDescription('fval')
	            ]),
	            'RRI': functionDescription('\ud22c\uc790 \uc218\uc775\uc5d0 \ud574\ub2f9\ud558\ub294 \uc774\uc790\uc728\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('nper'),
	                parameterDescription('pval'),
	                parameterDescription('fval')
	            ]),
	            'ISFORMULA': functionDescription('\uc218\uc2dd\uc744 \ud3ec\ud568\ud558\ub294 \uc140\uc5d0 \ub300\ud55c \ucc38\uc870\uac00 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud655\uc778\ud558\uace0 TRUE \ub610\ub294 FALSE\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('cellreference')
	            ]),
	            'IFNA': functionDescription('\uc218\uc2dd\uc774 #N/A \uc624\ub958 \uac12\uc744 \ubc18\ud658\ud558\ub294 \uacbd\uc6b0 \uc9c0\uc815\ud55c \uac12\uc744 \ubc18\ud658\ud558\uace0, \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 \uc218\uc2dd \uacb0\uacfc\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('value_if_na')
	            ]),
	            'IFS': functionDescription('IFS \ud568\uc218\ub294 \ud558\ub098 \uc774\uc0c1\uc758 \uc870\uac74\uc774 \ucda9\uc871\ub418\ub294\uc9c0\ub97c \ud655\uc778\ud558\uace0 \uccab \ubc88\uc9f8 TRUE \uc870\uac74\uc5d0 \ud574\ub2f9\ud558\ub294 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('valueTest'),
	                parameterDescription('valueTrue'),
	                parameterDescription('....')
	            ]),
	            'SWITCH': functionDescription('SWITCH \ud568\uc218\ub294 \uac12\uc758 \ubaa9\ub85d\uc5d0 \ub300\ud55c \ud558\ub098\uc758 \uac12(\uc2dd\uc774\ub77c\uace0 \ud568)\uc744 \uacc4\uc0b0\ud558\uace0 \uccab \ubc88\uc9f8 \uc77c\uce58\ud558\ub294 \uac12\uc5d0 \ud574\ub2f9\ud558\ub294 \uacb0\uacfc\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. ', [
	                parameterDescription('convertvalue'),
	                parameterDescription('matchvalue'),
	                parameterDescription('matchtrue'),
	                parameterDescription('matchfalse')
	            ]),
	            'XOR': functionDescription('\ubaa8\ub4e0 \uc778\uc218\uc758 \ub17c\ub9ac \ubc30\ud0c0\uc801 OR\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('logical'),
	                parameterDescription('....')
	            ]),
	            'AREAS': functionDescription('\ucc38\uc870 \uc601\uc5ed \ub0b4\uc758 \uc601\uc5ed \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \uc601\uc5ed\uc740 \uc778\uc811\ud55c \uc140\uc758 \ubc94\uc704 \ub610\ub294 \ub2e8\uc77c \uc140\uc785\ub2c8\ub2e4.', [
	                parameterDescription('reference')
	            ]),
	            'FORMULATEXT': functionDescription('\uc218\uc2dd\uc744 \ubb38\uc790\uc5f4\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('reference')
	            ]),
	            'HYPERLINK': functionDescription('\ub124\ud2b8\uc6cc\ud06c \uc11c\ubc84, \uc778\ud2b8\ub77c\ub137 \ub610\ub294 \uc778\ud130\ub137\uc5d0 \uc800\uc7a5\ub41c \ubb38\uc11c\ub85c \uc774\ub3d9\ud560 \ubc14\ub85c \uac00\uae30 \ud0a4\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. ', [
	                parameterDescription('link_location'),
	                parameterDescription('friendly_name')
	            ]),
	            'ACOT': functionDescription('\uc544\ud06c\ucf54\ud0c4\uc820\ud2b8, \uc989 \uc5ed \ucf54\ud0c4\uc820\ud2b8\uc758 \uc8fc\uce58\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'ACOTH': functionDescription('\uc5ed \ud558\uc774\ud37c\ubcfc\ub9ad \ucf54\ud0c4\uc820\ud2b8 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'ARABIC': functionDescription('\ub85c\ub9c8 \uc22b\uc790\ub97c \uc544\ub77c\ube44\uc544 \uc22b\uc790\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('text')
	            ]),
	            'BASE': functionDescription('\uc22b\uc790\ub97c \uc9c0\uc815\ub41c \uae30\uc218\uc758 \ud14d\uc2a4\ud2b8 \ud45c\ud604\uc73c\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('radix'),
	                parameterDescription('minLength')
	            ]),
	            'CEILING.MATH': functionDescription('\uac00\uc7a5 \uac00\uae4c\uc6b4 \uc815\uc218 \ub610\ub294 \uac00\uc7a5 \uac00\uae4c\uc6b4 significance\uc758 \ubc30\uc218\ub85c \uc22b\uc790\ub97c \uc62c\ub9bc\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('signif'),
	                parameterDescription('mode')
	            ]),
	            'COMBINA': functionDescription('\uc8fc\uc5b4\uc9c4 \uac1c\uccb4 \uc218\ub85c \ub9cc\ub4e4 \uc218 \uc788\ub294 \uc870\ud569(\ubc18\ubcf5 \ud3ec\ud568)\uc758 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number'),
	                parameterDescription('number_choosen')
	            ]),
	            'COT': functionDescription('\uac01\ub3c4\uc758 \ucf54\ud0c4\uc820\ud2b8\ub97c \ub77c\ub514\uc548 \ub2e8\uc704\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('angle')
	            ]),
	            'COTH': functionDescription('\ud558\uc774\ud37c\ubcfc\ub9ad \uac01\ub3c4\uc758 \ud558\uc774\ud37c\ubcfc\ub9ad \ucf54\ud0c4\uc820\ud2b8 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'CSC': functionDescription('\uac01\ub3c4\uc758 \ucf54\uc2dc\ucee8\ud2b8\ub97c \ub77c\ub514\uc548 \ub2e8\uc704\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('angle')
	            ]),
	            'CSCH': functionDescription('\uac01\ub3c4\uac00 \ub77c\ub514\uc548\uc73c\ub85c \uc9c0\uc815\ub418\ub294 \ud558\uc774\ud37c\ubcfc\ub9ad \ucf54\uc2dc\ucee8\ud2b8\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'DECIMAL': functionDescription('\ud2b9\uc815 \uae30\uc218\uc758 \ud14d\uc2a4\ud2b8 \ud45c\ud604\uc744 10\uc9c4\uc218\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('text'),
	                parameterDescription('radix')
	            ]),
	            'FLOOR.MATH': functionDescription('\uac00\uc7a5 \uac00\uae4c\uc6b4 \uc815\uc218 \ub610\ub294 \uac00\uc7a5 \uac00\uae4c\uc6b4 significance\uc758 \ubc30\uc218\ub85c \uc22b\uc790\ub97c \ub0b4\ub9bc\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value'),
	                parameterDescription('signif'),
	                parameterDescription('mode')
	            ]),
	            'SEC': functionDescription('\uac01\ub3c4\uc758 \uc2dc\ucee8\ud2b8 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('angle')
	            ]),
	            'SECH': functionDescription('\uac01\ub3c4\uc758 \ud558\uc774\ud37c\ubcfc\ub9ad \uc2dc\ucee8\ud2b8 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'BINOM.DIST.RANGE': functionDescription('\uc774\ud56d \ubd84\ud3ec\ub97c \uc0ac\uc6a9\ud55c \uc2dc\ud589 \uacb0\uacfc\uc758 \ud655\ub960\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('x'),
	                parameterDescription('n'),
	                parameterDescription('p'),
	                parameterDescription('cumulative')
	            ]),
	            'GAMMA': functionDescription('\uac10\ub9c8 \ud568\uc218 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number')
	            ]),
	            'MAXIFS': functionDescription('MAXIFS \ud568\uc218\ub294 \uc8fc\uc5b4\uc9c4 \uc870\uac74\uc5d0 \ub9de\ub294 \uc140\uc5d0\uc11c \ucd5c\ub300\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array'),
	                parameterDescription('conditionarray'),
	                parameterDescription('condition', true)
	            ]),
	            'GAUSS': functionDescription('\ud45c\uc900 \uc815\uaddc \ubaa8\uc9d1\ub2e8 \uad6c\uc131\uc6d0\uc774 \ud3c9\uade0 \ubc0f \ud3c9\uade0\uc758 z \ud45c\uc900 \ud3b8\ucc28 \uc0ac\uc774\uc5d0 \uc788\uc744 \ud655\ub960\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number')
	            ]),
	            'MINIFS': functionDescription('MINIFS \ud568\uc218\ub294 \uc8fc\uc5b4\uc9c4 \uc870\uac74 \uc9d1\ud569\uc5d0 \ub9de\ub294 \uc140\uc5d0\uc11c \ucd5c\uc18c\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('array'),
	                parameterDescription('conditionarray'),
	                parameterDescription('condition', true)
	            ]),
	            'PERMUTATIONA': functionDescription('\uc804\uccb4 \uac1c\uccb4\uc5d0\uc11c \uc120\ud0dd\ud558\uc5ec \uc8fc\uc5b4\uc9c4 \uac1c\uccb4 \uc218(\ubc18\ubcf5 \ud3ec\ud568)\ub85c \ub9cc\ub4e4 \uc218 \uc788\ub294 \uc21c\uc5f4\uc758 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('k'),
	                parameterDescription('n')
	            ]),
	            'PHI': functionDescription('\ud45c\uc900 \uc815\uaddc \ubd84\ud3ec\uc758 \ubc00\ub3c4 \ud568\uc218 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'SKEW.P': functionDescription('\ubaa8\uc9d1\ub2e8\uc744 \uae30\uc900\uc73c\ub85c \ubd84\ud3ec\uc758 \uc65c\uace1\ub3c4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \uc65c\uace1\ub3c4\ub780 \ud3c9\uade0\uc5d0 \ub300\ud55c \ubd84\ud3ec\uc758 \ube44\ub300\uce6d \uc815\ub3c4\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4.', [
	                parameterDescription('number1'),
	                parameterDescription('number2', true)
	            ]),
	            'BAHTTEXT': functionDescription('\uc22b\uc790\ub97c \ud0dc\uad6d\uc5b4 \ud14d\uc2a4\ud2b8\ub85c \ubcc0\ud658\ud558\uace0 "Baht" \uc811\ubbf8\uc0ac\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number')
	            ]),
	            'CONCAT': functionDescription('CONCAT \ud568\uc218\ub294 \uc5ec\ub7ec \ubc94\uc704 \ubc0f/\ub610\ub294 \ubb38\uc790\uc5f4\uc758 \ud14d\uc2a4\ud2b8\ub97c \uacb0\ud569\ud558\uc9c0\ub9cc \uad6c\ubd84 \uae30\ud638\ub098 IgnoreEmpty \uc778\uc218\ub294 \uc81c\uacf5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.', [
	                parameterDescription('text1'),
	                parameterDescription('text2'),
	                parameterDescription('....')
	            ]),
	            'FINDB': functionDescription('FINDB\ub294 DBCS\ub97c \uc9c0\uc6d0\ud558\ub294 \uc5b8\uc5b4\ub97c \ud3b8\uc9d1\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud558\uace0 \uc774 \uc5b8\uc5b4\ub97c \uae30\ubcf8 \uc5b8\uc5b4\ub85c \uc124\uc815\ud55c \uacbd\uc6b0 \uac01 \ub354\ube14\ubc14\uc774\ud2b8 \ubb38\uc790\ub97c 2\ub85c \uacc4\uc0b0\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacbd\uc6b0\uac00 \uc544\ub2c8\uba74 FINDB\ub294 \uac01 \ubb38\uc790\ub97c 1\ub85c \uacc4\uc0b0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('findtext'),
	                parameterDescription('intext'),
	                parameterDescription('start')
	            ]),
	            'LEFTB': functionDescription('LEFTB\ub294 \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\uc758 \uccab \ubc88\uc9f8 \ubb38\uc790\ubd80\ud130 \uc2dc\uc791\ud558\uc5ec \uc9c0\uc815\ud55c \ubc14\uc774\ud2b8 \uc218\ub9cc\ud07c \ubb38\uc790\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('mytext'),
	                parameterDescription('num_bytes')
	            ]),
	            'LENB': functionDescription('LENB\ub294 \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\uc758 \ubb38\uc790\ub97c \ub098\ud0c0\ub0b4\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ubc14\uc774\ud2b8 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('value')
	            ]),
	            'MIDB': functionDescription('MIDB\ub294 \uc9c0\uc815\ud55c \ubc14\uc774\ud2b8 \uc218\uc5d0 \ub530\ub77c \ubb38\uc790\uc5f4\uc758 \uc9c0\uc815\ud55c \uc704\uce58\ub85c\ubd80\ud130 \uc9c0\uc815\ud55c \uac1c\uc218\uc758 \ubb38\uc790\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4.', [
	                parameterDescription('text'),
	                parameterDescription('start_num'),
	                parameterDescription('num_bytes')
	            ]),
	            'REPLACEB': functionDescription('REPLACEB\ub294 \uc9c0\uc815\ud55c \ubc14\uc774\ud2b8 \uc218\uc5d0 \ub530\ub77c \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\uc758 \uc77c\ubd80\ub97c \ub2e4\ub978 \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\ub85c \ubc14\uafc9\ub2c8\ub2e4.', [
	                parameterDescription('old_text'),
	                parameterDescription('start_byte'),
	                parameterDescription('num_bytes'),
	                parameterDescription('new_text')
	            ]),
	            'RIGHTB': functionDescription('RIGHTB\ub294 \uc9c0\uc815\ud55c \ubc14\uc774\ud2b8 \uc218\uc5d0 \ub530\ub77c \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\uc758 \ub9c8\uc9c0\ub9c9 \ubb38\uc790\ubd80\ud130 \uc9c0\uc815\ub41c \uae38\uc774\uc758 \ubb38\uc790\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('text'),
	                parameterDescription('num_bytes')
	            ]),
	            'SEARCHB': functionDescription('\ud568\uc218\ub294 \ub450 \ubc88\uc9f8 \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\uc5d0\uc11c \uc9c0\uc815\ub41c \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\uc744 \uac80\uc0c9\ud558\uace0, \ub450 \ubc88\uc9f8 \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\uc758 \uccab \ubb38\uc790\ub97c \uae30\uc900\uc73c\ub85c \uba87 \ubc88\uc9f8 \uc704\uce58\uc5d0\uc11c \uccab \ubc88\uc9f8 \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\uc774 \uc2dc\uc791\ud558\ub294\uc9c0 \ub098\ud0c0\ub0b4\ub294 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. ', [
	                parameterDescription('string1'),
	                parameterDescription('string2')
	            ]),
	            'TEXTJOIN': functionDescription('TEXTJOIN \ud568\uc218\ub294 \uc5ec\ub7ec \ubc94\uc704 \ubc0f/\ub610\ub294 \ubb38\uc790\uc5f4\uc758 \ud14d\uc2a4\ud2b8\ub97c \uacb0\ud569\ud558\uba70, \uacb0\ud569\ud560 \uac01 \ud14d\uc2a4\ud2b8 \uac12 \uc0ac\uc774\uc5d0 \uc9c0\uc815\ub418\ub294 \uad6c\ubd84 \uae30\ud638\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4. \uad6c\ubd84 \uae30\ud638\uac00 \ube48 \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc5f4\uc778 \uacbd\uc6b0 \uc774 \ud568\uc218\ub294 \ubc94\uc704\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uc5f0\uacb0\ud569\ub2c8\ub2e4.', [
	                parameterDescription('delimiter'),
	                parameterDescription('ignore_empty'),
	                parameterDescription('text1'),
	                parameterDescription('text2'),
	                parameterDescription('....')
	            ]),
	            'UNICHAR': functionDescription('\uc8fc\uc5b4\uc9c4 \uc22b\uc790 \uac12\uc774 \ucc38\uc870\ud558\ub294 \uc720\ub2c8\ucf54\ub4dc \ubb38\uc790\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('number')
	            ]),
	            'UNICODE': functionDescription('\ud14d\uc2a4\ud2b8\uc758 \uccab \ubb38\uc790\uc5d0 \ud574\ub2f9\ud558\ub294 \uc22b\uc790(\ucf54\ub4dc \ud3ec\uc778\ud2b8)\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.', [
	                parameterDescription('text')
	            ]),
	            'ENCODEURL': functionDescription('URL\ub85c \uc778\ucf54\ub529\ub41c \ubb38\uc790\uc5f4\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.', [
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
	            if (culture !== null && culture !== undefined && culture.toLowerCase() === 'ko-kr') {
	                CultureManager.culture('ko-kr');
	            }
	        }
	    })();
	    module.exports = {
	        Exp_NotSupported: 'NotSupportException',
	        Exp_PasteExtentIsNull: 'pasteExtent\uac00 null\uc785\ub2c8\ub2e4.',
	        Exp_InvalidPastedArea: '\ubd99\uc5ec\ub123\uc744 \uc601\uc5ed\uc758 \ud06c\uae30\uac00 \ubcf5\uc0ac \ub610\ub294 \uc798\ub77c\ub0b8 \uc601\uc5ed\uacfc \uac19\uc544\uc57c \ud569\ub2c8\ub2e4.',
	        Exp_ChangePartOfArray: '\ubc30\uc5f4\uc758 \uc77c\ubd80\ub97c \ubcc0\uacbd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',
	        Exp_InvalidAndSpace: '\uc798\ubabb\ub41c {0}: {1}({2}\uc5d0\uc11c {3} \uc0ac\uc774\uc5ec\uc57c \ud568).',
	        Exp_SrcIsNull: '\uc778\uc218 \'src\'\uac00 null\uc785\ub2c8\ub2e4.',
	        Exp_DestIsNull: '\uc778\uc218 \'dest\'\uac00 null\uc785\ub2c8\ub2e4.',
	        Exp_InvalidCustomFunction: '\uc798\ubabb\ub41c \uc0ac\uc6a9\uc790 \uc9c0\uc815 \ud568\uc218',
	        Exp_InvalidCustomName: '\uc798\ubabb\ub41c \uc0ac\uc6a9\uc790 \uc9c0\uc815 \uc774\ub984',
	        Exp_IndexOutOfRange: '\uc778\ub371\uc2a4\uac00 \ubc94\uc704\ub97c \ubc97\uc5b4\ub0ac\uc2b5\ub2c8\ub2e4!',
	        Exp_InvalidRange: '\uc798\ubabb\ub41c \ubc94\uc704',
	        Exp_ArgumentOutOfRange: 'ArgumentOutOfRange',
	        Exp_PasteSourceCellsLocked: '\uc6d0\ubcf8 \uc2dc\ud2b8\uc758 \uc140\uc774 \uc7a0\uaca8 \uc788\uc2b5\ub2c8\ub2e4.',
	        Exp_InvalidCopyPasteSize: '\ubcf5\uc0ac \uc601\uc5ed\uacfc \ubd99\uc5ec\ub123\uae30 \uc601\uc5ed\uc758 \ud06c\uae30\uac00 \uac19\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.',
	        Exp_PasteDestinationCellsLocked: '\ubcc0\uacbd\ud558\ub824\ub294 \uc140\uc740 \ubcf4\ud638\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c \uc77d\uae30 \uc804\uc6a9\uc785\ub2c8\ub2e4.',
	        Exp_PasteChangeMergeCell: '\ubcd1\ud569\ub41c \uc140\uc758 \uc77c\ubd80\ub97c \ubcc0\uacbd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',
	        Tip_Row: '\ud589: ',
	        Tip_Column: '\uc5f4: ',
	        Tip_Height: '\ub192\uc774: {0}\ud53d\uc140',
	        Tip_Width: '\ub108\ube44: {0}\ud53d\uc140',
	        NewTab: '\uc0c8\ub85c \ub9cc\ub4e4\uae30...',
	        Exp_EmptyNamedStyle: '\uba85\uba85\ub41c \uc2a4\ud0c0\uc77c\uc758 \uc774\ub984\uc740 \ube44\uc6cc \ub450\uac70\ub098 null\ub85c \uc124\uc815\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',
	        Exp_SheetNameInvalid: '\uc2dc\ud2b8 \uc774\ub984\uc740 \ube44\uc6cc \ub450\uac70\ub098 *, :, [, ], ?, \\, / \ubb38\uc790\ub97c \ud3ec\ud568\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',
	        Exp_ArrayFromulaSpan: '\ubc30\uc5f4 \uc218\uc2dd\uc740 \ubcd1\ud569\ub41c \uc140\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',
	        Exp_DestSheetIsNull: 'destSheet\uac00 null\uc785\ub2c8\ub2e4.',
	        Exp_SheetIsNull: '\uc2dc\ud2b8\uac00 null\uc785\ub2c8\ub2e4.',
	        Exp_OverlappingSpans: '\uc774 \uc791\uc5c5\uc73c\ub85c \ubc94\uc704\uac00 \uacb9\uce60 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
	        NeedCanvasSupport: 'SpreadJS\ub97c \uc2e4\ud589\ud558\ub824\uba74 HTML5 Canvas\ub97c \uc644\ubcbd\ud558\uac8c \uc9c0\uc6d0\ud558\ub294 \ube0c\ub77c\uc6b0\uc800\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.',
	       
	        ls1: ['00000000000000000000000000000000000000000000000000000000000000000000000000c700ccd5d3c700b8cec5b900bcd3d500c200c7c2b2b2000000c7c200bcd300d0b200d1c2d2c6c7b800c8acb4b2b20000000000000000000000000000000000000000000000000000c7b800c7bac7c700bcb000c8c2c2c600',
	            '506f776572656420627920477261706543697479205370726561642e5368656574732e0d0a7420b4d81040205cecd0cc2030ec6020182088b5c8e42e0d0a84dc2030ec20a494204ca4b8a93c5c201cf529c8e42e0d0a73616c65732d6b6f72406772617065636974792e636f6d3c5c2074547c4420f4b420fceddc242e'],
	       
	        ls2: ['00000000000000000000000000000000000000000000000000000000000000000000000000c7c200bcd300d0ac00000000c700d6c500b9b8b4b2b200',
	            '506f776572656420627920477261706543697479205370726561642e5368656574732e0d0a84dc2030ec20a400207b307d7c20c4d020cccc29c8e42e'],
	       
	        ls3: ['b7c7c1c2b900ccc700c200c5c7000000000000000000000000000000b900c2d5d5b8ba00c7d6d500b7c7c1c200d0ac00d5c6d5b2b2000000c7c200d0b200ccd5c6c7b800c8acb4b2b2000000b7c7c1c2b900adc7d500acc600adb900d6c700c7bac7c5c100d0b900d6c7d500c200c7c2b2b2000000b3c6c700d5c6d5b2ba000000000000000000000000000000000000000000000000c7b800c7bac7c700bcb000c8c2c2c600',
	            '7c7420a47c203e44201820c64c0d0a5370726561642e5368656574737c20e4895824742020a85c207c7420a420a40020449469c8e42e0d0a84dc20a49420b4d8a93c5c201cf529c8e42e0d0a7c7420a47c206c855c20bdb0206ce42055782074547cd01c20a47c2055786020182088b5c8e42e0d0ac4c07420449458e4742073616c65732d6b6f72406772617065636974792e636f6d3c5c2074547c4420f4b420fceddc242e'],
	       
	        ls4: ['c7bab400b7c7c1c200d00000b3c6c700d5c6d5b2ba000000000000000000000000000000000000000000000000c7b800c7bac7c700bcb000c8c2c2c600',
	            '98bb1c207c7420a420a40d0ac4c07420449458e4742073616c65732d6b6f72406772617065636974792e636f6d3c5c2074547c4420f4b420fceddc242e'],
	       
	        ls5: ['00000000000000000000000000000000000000000000000000000000000000000000000000c7c200bcd300d0ac00b9b8b4c5c2b2b2000000b3c6c700d5c6d5b2ba000000000000000000000000000000000000000000000000c7b800c7bac7c700bcb000c8c2c2c600',
	            '506f776572656420627920477261706543697479205370726561642e5368656574732e0d0a84dc2030ec20a40020cccc18c8b5c8e42e0d0ac4c07420449458e4742073616c65732d6b6f72406772617065636974792e636f6d3c5c2074547c4420f4b420fceddc242e'],
	        ls6: ['c8ac0000000000000000000000000000000000000000000000000000ccd5d30000bcd3c6c7b800d5acb4c900c5c7',
	            '1cf53a20477261706543697479205370726561642e53686565747320b4d8100d0a30eca93c5c20c80018c0204a4c']
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
	        Exp_NotSupportedDataSource: '\ub370\uc774\ud130 \uc18c\uc2a4\uac00 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4!'
	    };
	
	
	}());

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_InvalidIndex: '\uc798\ubabb\ub41c \uc778\ub371\uc2a4',
	        Exp_InvalidCount: '\uc798\ubabb\ub41c \uac1c\uc218',
	        Exp_InvalidLevel: '\uc798\ubabb\ub41c \ub808\ubca8',
	        Exp_GroupInfoIsNull: 'groupInfo\uac00 null\uc785\ub2c8\ub2e4.'
	    };
	
	
	}());

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        ToolStrip_PasteText: '\ubd99\uc5ec\ub123\uae30',
	        ToolStrip_CutText: '\uc798\ub77c\ub0b4\uae30',
	        ToolStrip_CopyText: '\ubcf5\uc0ac',
	        ToolStrip_AutoFillText: '\uc790\ub3d9 \ucc44\uc6b0\uae30'
	    };
	
	}());

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_FloatingObjectHasSameNameError: '\ud604\uc7ac \uc6cc\ud06c\uc2dc\ud2b8\uc5d0 \ub3d9\uc77c\ud55c \uc774\ub984\uc744 \uac00\uc9c4 \ubd80\ub3d9 \uac1c\uccb4(FloatingObject)\uac00 \uc774\ubbf8 \uc788\uc2b5\ub2c8\ub2e4.',
	        Exp_FloatingObjectNameEmptyError: '\ubd80\ub3d9 \uac1c\uccb4(FloatingObject)\ub294 \uc774\ub984\uc774 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4.'
	    };
	
	
	}());

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_RuleIsNull: '\uc778\uc218 \'rule\'\uc774 null\uc785\ub2c8\ub2e4.',
	        Exp_NotSupported: 'NotSupportException'
	    };
	
	}());

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	(function () {
	    'use strict';
	
	    module.exports = {
	        Exp_InvalidColumnIndex: '\uc5f4 \uc778\ub371\uc2a4\uac00 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
	        SortAscending: '\uc624\ub984\ucc28\uc21c \uc815\ub82c',
	        SortDescending: '\ub0b4\ub9bc\ucc28\uc21c \uc815\ub82c',
	        OK: '\ud655\uc778',
	        Cancel: '\ucde8\uc18c',
	        Search: '\uac80\uc0c9',
	        CheckAll: '\ubaa8\ub450 \uc120\ud0dd',
	        UncheckAll: '\ubaa8\ub450 \uc120\ud0dd \ucde8\uc18c',
	        Blanks: '(\uacf5\ubc31)',
	        Exp_FilterItemIsNull: 'FilterItem\uc774 null\uc785\ub2c8\ub2e4.',
	        Show: '\ud45c\uc2dc',
	        ShowRows: '\ud589 \ud45c\uc2dc \uc704\uce58:',
	        And: '\ubc0f',
	        Or: '\ub610\ub294',
	        SortColor: '\uc0c9 \uae30\uc900 \uc815\ub82c',
	        FilterColor: '\uc0c9 \uae30\uc900 \ud544\ud130',
	        FilterCellTitle: '\uc140 \uc0c9 \uae30\uc900 \ud544\ud130',
	        FilterFontTitle: '\uae00\uaf34 \uc0c9 \uae30\uc900 \ud544\ud130',
	        SortCellTitle: '\uc140 \uc0c9 \uae30\uc900 \uc815\ub82c',
	        SortFontTitle: '\uae00\uaf34 \uc0c9 \uae30\uc900 \uc815\ub82c',
	        FontColor: '\ucd94\uac00 \uae00\uaf34 \uc0c9...',
	        CellColor: '\ucd94\uac00 \uc140 \uc0c9...',
	        NoFill: '\ucc44\uc6b0\uae30 \uc5c6\uc74c',
	        Automatic: '\uc790\ub3d9',
	        Clear: '\ud544\ud130 \uc9c0\uc6b0\uae30:{0}',
	        TextFilter: '\ud14d\uc2a4\ud2b8 \ud544\ud130',
	        DateFilter: '\ub0a0\uc9dc \ud544\ud130',
	        NumberFilter: '\uc22b\uc790 \ud544\ud130',
	        Custom: '\uc0ac\uc6a9\uc790 \uc815\uc758 \ud544\ud130...',
	        Equal: '\uacfc(\uc640) \uac19\uc74c...',
	        NotEqual: '\uac19\uc9c0 \uc54a\uc74c...',
	        GreaterThan: '\ubcf4\ub2e4 \ud07c...',
	        GreaterOrEquals: '\ubcf4\ub2e4 \ud06c\uac70\ub098 \uac19\uc74c...',
	        LessThan: '\ubcf4\ub2e4 \uc791\uc74c...',
	        LessThanOrEquals: '\ubcf4\ub2e4 \uc791\uac70\ub098 \uac19\uc74c...',
	        Between: '\ud574\ub2f9 \ubc94\uc704...',
	        Top10: '\uc0c1\uc704 10\uac1c...',
	        AboveAverage: '\ud3c9\uade0 \ucd08\uacfc',
	        BelowAverage: '\ud3c9\uade0 \ubbf8\ub9cc',
	        Begin: '(\uc73c)\ub85c \uc2dc\uc791...',
	        End: '(\uc73c)\ub85c \ub05d\ub0a8...',
	        Contain: '\ud3ec\ud568...',
	        NotContain: '\ud3ec\ud568 \uc548 \ud568...',
	        Before: '\uc774\uc804...',
	        After: '\uc774\ud6c4...',
	        Tomorrow: '\ub0b4\uc77c',
	        Today: '\uc624\ub298',
	        Yesterday: '\uc5b4\uc81c',
	        NextWeek: '\ub2e4\uc74c \uc8fc',
	        ThisWeek: '\uc774\ubc88 \uc8fc',
	        LastWeek: '\uc9c0\ub09c \uc8fc',
	        NextMonth: '\ub2e4\uc74c \ub2ec',
	        ThisMonth: '\uc774\ubc88 \ub2ec',
	        LastMonth: '\uc9c0\ub09c \ub2ec',
	        NextQuarter: '\ub2e4\uc74c \ubd84\uae30',
	        ThisQuarter: '\uc774\ubc88 \ubd84\uae30',
	        LastQuarter: '\uc9c0\ub09c \ubd84\uae30',
	        NextYear: '\ub0b4\ub144',
	        ThisYear: '\uc62c\ud574',
	        LastYear: '\uc791\ub144',
	        YearToDate: '\uc5f0\uac04 \ub204\uacc4',
	        AllDates: '\uae30\uac04\uc758 \ubaa8\ub4e0 \ub0a0\uc9dc',
	
	        Top10Filter: '\uc0c1\uc704 10\uac1c \uc790\ub3d9 \ud544\ud130',
	        CustomTitle: '\uc0ac\uc6a9\uc790 \uc815\uc758 \uc790\ub3d9 \ud544\ud130',
	        ColorTitle: '\uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc140 \uc0c9',
	        top: '\uc704\ucabd',
	        bottom: '\uc544\ub798\ucabd',
	
	        SortCell: '\uc815\ub82c \uae30\uc900\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc140 \uc0c9 \uc120\ud0dd:',
	        SortFont: '\uc815\ub82c \uae30\uc900\uc73c\ub85c \uc0ac\uc6a9\ud560 \uae00\uaf34 \uc0c9 \uc120\ud0dd:',
	        FilterCell: '\ud544\ud130 \uae30\uc900\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc140 \uc0c9 \uc120\ud0dd:',
	        FilterFont: '\ud544\ud130 \uae30\uc900\uc73c\ub85c \uc0ac\uc6a9\ud560 \uae00\uaf34 \uc0c9 \uc120\ud0dd:',
	        Selected: '\uc120\ud0dd \ud56d\ubaa9:',
	
	        IsEquals: '\uac19\uc74c',
	        NotEquals: '\uac19\uc9c0 \uc54a\uc74c',
	        IsGreaterThan: '\ubcf4\ub2e4 \ud07c',
	        IsGreaterOrEqual: '\ubcf4\ub2e4 \ud06c\uac70\ub098 \uac19\uc74c',
	        IsLess: '\ubcf4\ub2e4 \uc791\uc74c',
	        LessOrEqual: '\ubcf4\ub2e4 \uc791\uac70\ub098 \uac19\uc74c',
	        IsBeginWith: '(\uc73c)\ub85c \uc2dc\uc791',
	        NotBeginWith: '(\uc73c)\ub85c \uc2dc\uc791 \uc548 \ud568',
	        IsEndWith: '(\uc73c)\ub85c \ub05d\ub0a8',
	        NotEndWith: '(\uc73c)\ub85c \ub05d\ub098\uc9c0 \uc54a\uc74c',
	        IsContain: '\ud3ec\ud568',
	        NotContains: '\ud3ec\ud568 \uc548 \ud568',
	        IsAfter: '\uc774\ud6c4',
	        AfterOrEqual: '\uc774\ud6c4\uc774\uac70\ub098 \uac19\uc74c',
	        IsBefore: '\uc774\uc804',
	        BeforeOrEqual: '\uc774\uc804\uc774\uac70\ub098 \uac19\uc74c',
	        Q1: '1\ubd84\uae30',
	        Q2: '2\ubd84\uae30',
	        Q3: '3\ubd84\uae30',
	        Q4: '4\ubd84\uae30',
	        Jan: '1\uc6d4',
	        Feb: '2\uc6d4',
	        Mar: '3\uc6d4',
	        Apr: '4\uc6d4',
	        May: '5\uc6d4',
	        Jun: '6\uc6d4',
	        Jul: '7\uc6d4',
	        Aug: '8\uc6d4',
	        Sep: '9\uc6d4',
	        Oct: '10\uc6d4',
	        Nov: '11\uc6d4',
	        Dec: '12\uc6d4',
	
	        Explain1: '\ub2e8\uc77c \ubb38\uc790\ub97c \ub098\ud0c0\ub0b4\ub824\uba74 ? \uc0ac\uc6a9',
	        Explain2: '\uc77c\ub828\uc758 \ubb38\uc790\ub97c \ub098\ud0c0\ub0b4\ub824\uba74 * \uc0ac\uc6a9',
	
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
	        Exp_DragDropShiftTableCell: '\uc774 \uc791\uc5c5\uc740 \ud5c8\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774 \uc791\uc5c5\uc740 \uc6cc\ud06c\uc2dc\ud2b8\uc758 \ud14c\uc774\ube14\uc5d0\uc11c \uc140\uc744 \ubcc0\ud658\ud558\ub824\uace0 \uc2dc\ub3c4\ud569\ub2c8\ub2e4.',
	        Exp_DragDropChangePartOfTable: '\uc791\uc5c5\uc744 \uc644\ub8cc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ud14c\uc774\ube14 \ud589 \ub610\ub294 \uc5f4\uc758 \uc77c\ubd80\ub97c \ud5c8\uc6a9\ub418\uc9c0 \uc54a\ub294 \ubc29\uc2dd\uc73c\ub85c \ubcc0\uacbd\ud558\ub824\uace0 \ud569\ub2c8\ub2e4.',
	        Exp_TableEmptyNameError: '\ud14c\uc774\ube14 \uc774\ub984\uc740 \ube44\uc6cc \ub458 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',
	        Exp_TableNameInvalid: '\ud14c\uc774\ube14 \uc774\ub984\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
	        Exp_TableInvalidRow: '\ud589 \uc778\ub371\uc2a4 \ub610\ub294 \ud589 \uc218\uac00 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
	        Exp_TableInvalidColumn: '\uc5f4 \uc778\ub371\uc2a4 \ub610\ub294 \uc5f4 \uc218\uac00 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
	        Exp_TableIntersectError: '\ud14c\uc774\ube14\uc774 \uad50\ucc28\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',
	        Exp_TableHasSameNameError: '\ud604\uc7ac \uc6cc\ud06c\uc2dc\ud2b8\uac00 \ub3d9\uc77c\ud55c \uc774\ub984\uc744 \uac00\uc9c4 \ud14c\uc774\ube14\uc5d0 \uc774\ubbf8 \uc788\uc2b5\ub2c8\ub2e4.',
	        Exp_TableDataSourceNullError: '\ud14c\uc774\ube14 \uc6d0\ubcf8 \ub370\uc774\ud130\ub294 null\uc77c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',
	        Exp_TableMoveOutOfRange: '\ud14c\uc774\ube14\uc744 \uc2dc\ud2b8 \ubc16\uc73c\ub85c \uc774\ub3d9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',
	        Exp_TableResizeOutOfRange: '\uc798\ubabb\ub41c \ud589 \uc218, \uc5f4 \uc218 \ubc0f \ud14c\uc774\ube14\uc758 \ud06c\uae30\ub97c \uc2dc\ud2b8 \ubc16\uc73c\ub85c \uc870\uc815\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',
	        Exp_ArrayFormulaTable: '\ub2e4\uc911 \uc140 \ubc30\uc5f4 \uc218\uc2dd\uc740 \ud45c\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',
	        Exp_TableResizeInvalidRange: '\uba38\ub9ac\uae00\uc740 \ub3d9\uc77c\ud55c \ud589\uc5d0 \uc720\uc9c0\ub418\uace0 \uacb0\uacfc \ud45c \ubc94\uc704\ub294 \uc6d0\ub798 \ud45c \ubc94\uc704\uc640 \uc77c\uce58\ud574\uc57c \ud569\ub2c8\ub2e4.'
	    };
	
	}());

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Blank: '(\uacf5\ubc31)',
	        Exp_SlicerNameInvalid: '\uc2ac\ub77c\uc774\uc11c \uc774\ub984\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
	        Exp_SlicerNameExist: '\uc2ac\ub77c\uc774\uc11c \uc774\ub984\uc740 \uc774\ubbf8 \uc0ac\uc6a9\ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uace0\uc720\ud55c \uc774\ub984\uc744 \uc785\ub825\ud558\uc2ed\uc2dc\uc624.'
	    };
	
	}());

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        CopyCells: '\uc140 \ubcf5\uc0ac',
	        FillSeries: '\uacc4\uc5f4 \ucc44\uc6b0\uae30',
	        FillFormattingOnly: '\uc11c\uc2dd\ub9cc \ucc44\uc6b0\uae30',
	        FillWithoutFormatting: '\uc11c\uc2dd \uc5c6\uc774 \ucc44\uc6b0\uae30',
	        Exp_NumberOnly: '\uc22b\uc790\uc5d0 \ub300\ud574\uc11c\ub9cc \uc791\ub3d9',
	        Exp_RangeContainsMergedCell: '\ubc94\uc704\ub294 \ubcd1\ud569\ub41c \uc140\uc744 \ud3ec\ud568\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',
	        Exp_TargetContainsMergedCells: '\ub300\uc0c1 \ubc94\uc704\ub294 \ubcd1\ud569\ub41c \uc140\uc744 \ud3ec\ud568\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',
	        Exp_MergedCellsIdentical: '\uc774 \uc791\uc5c5\uc744 \uc218\ud589\ud558\ub824\uba74 \ubcd1\ud569\ud558\ub824\ub294 \uc140\uc758 \ud06c\uae30\uac00 \ub3d9\uc77c\ud574\uc57c \ud569\ub2c8\ub2e4.',
	        Exp_FillRangeContainsMergedCell: '\ubcd1\ud569\ub41c \uc140\uc744 \ud3ec\ud568\ud558\ub294 \ubc94\uc704\ub97c \ucc44\uc6b8 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',
	        Exp_FillCellsReadOnly: '\ucc44\uc6b0\ub824\ub294 \uc140\uc740 \uc77d\uae30 \uc804\uc6a9\uc73c\ub85c \ubcf4\ud638\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.',
	        Exp_ChangeMergedCell: '\ubcd1\ud569\ub41c \uc140\uc758 \uc77c\ubd80\ub97c \ubcc0\uacbd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',
	        Exp_ColumnReadOnly: '\ubcc0\uacbd\ud558\ub824\ub294 \uc5f4\uc740 \uc77d\uae30 \uc804\uc6a9\uc73c\ub85c \ubcf4\ud638\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.',
	        Exp_RowReadOnly: '\ubcc0\uacbd\ud558\ub824\ub294 \ud589\uc740 \uc77d\uae30 \uc804\uc6a9\uc73c\ub85c \ubcf4\ud638\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.',
	        Exp_CellReadOnly: '\ubcc0\uacbd\ud558\ub824\ub294 \uc140\uc740 \uc77d\uae30 \uc804\uc6a9\uc73c\ub85c \ubcf4\ud638\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.',
	        Exp_RangeIsNull: '\ubc94\uc704\uac00 null\uc785\ub2c8\ub2e4.',
	        Exp_ChangePartOfArray: '\ubc30\uc5f4\uc758 \uc77c\ubd80\ub97c \ubcc0\uacbd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.'
	    };
	
	
	}());

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	(function () {
	    'use strict';
	
	    module.exports = {
	        copy: '\ubcf5\uc0ac',
	        cut: '\uc798\ub77c\ub0b4\uae30',
	        pasteOptions: '\ubd99\uc5ec\ub123\uae30 \uc635\uc158:',
	        pasteAll: '\ubaa8\ub450',
	        pasteFormula: '\uc218\uc2dd',
	        pasteValues: '\uac12',
	        pasteFormatting: '\uc11c\uc2dd',
	        clearContents: '\ub0b4\uc6a9 \uc9c0\uc6b0\uae30',
	        insertRows: "\uc0bd\uc785",
	        insertColumns: "\uc0bd\uc785",
	        deleteRows: "\uc0ad\uc81c",
	        deleteColumns: "\uc0ad\uc81c",
	        insertSheet: '\uc0bd\uc785',
	        deleteSheet: '\uc0ad\uc81c',
	        insertComment: '\uba54\ubaa8 \uc0bd\uc785',
	        filter: '\ud544\ud130',
	        sort: '\uc815\ub82c',
	        slicerSortAscend: "\uc624\ub984\ucc28\uc21c \uc815\ub82c",
	        slicerSortDescend: "\ub0b4\ub9bc\ucc28\uc21c \uc815\ub82c",
	        sortAscend: '\uc624\ub984\ucc28\uc21c \uc815\ub82c',
	        sortDescend: '\ub0b4\ub9bc\ucc28\uc21c \uc815\ub82c',
	        hideRows: "\uc228\uae30\uae30",
	        hideColumns: "\uc228\uae30\uae30",
	        hideSheet: '\uc228\uae30\uae30',
	        unhideSheet: '\uc228\uae30\uae30 \ucde8\uc18c',
	        unhideColumns: "\uc228\uae30\uae30 \ucde8\uc18c",
	        unhideRows: "\uc228\uae30\uae30 \ucde8\uc18c",
	        editComment: '\uba54\ubaa8 \ud3b8\uc9d1',
	        deleteComment: '\uba54\ubaa8 \uc0ad\uc81c',
	        toggleComment: '\uba54\ubaa8 \ud45c\uc2dc/\uc228\uae30\uae30',
	        removeSlicer: '\uc81c\uac70',
	        removeFloatingObject: '\uc81c\uac70'
	    };
	}());

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    function tableFunctionDescription(name, description) {
	        return {
	            name: name,
	            description: description
	        };
	    }
	
	    module.exports = {
	        Fbx_Summary: '\uc694\uc57d',
	        Fbx_TableName_Description: '\ud45c \uc774\ub984 ',
	        Fbx_CustomName_Description: '\uc0ac\uc6a9\uc790 \uc9c0\uc815 \uc774\ub984 ',
	        _tableFunctionsResource: [
	            tableFunctionDescription('#All', '\uc5f4 \uba38\ub9ac\uae00, \ub370\uc774\ud130, \uc694\uc57d \ud589 \ub4f1 \uc9c0\uc815\ud55c \ud45c \uc5f4\uc774\ub098 \ud45c\uc758 \uc804\uccb4 \ub0b4\uc6a9\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.'),
	            tableFunctionDescription('#Data', '\ud45c\uc758 \ub370\uc774\ud130 \uc140\uc774\ub098 \uc9c0\uc815\ud55c \ud45c \uc5f4\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.'),
	            tableFunctionDescription('#Headers', '\ud45c\uc758 \uc5f4 \uba38\ub9ac\uae00\uc774\ub098 \uc9c0\uc815\ud55c \ud45c \uc5f4\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.'),
	            tableFunctionDescription('#Totals', '\ud45c\uc758 \uc694\uc57d \ud589\uc774\ub098 \uc9c0\uc815\ud55c \ud45c \uc5f4\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.'),
	            tableFunctionDescription('@', '\uc774 \ud589.')
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
	        Exp_FileIOError: '\ud30c\uc77c \uc77d\uae30 \ubc0f \uc4f0\uae30 \uc608\uc678\uc785\ub2c8\ub2e4.',
	        Exp_FontError: '\uc9c0\uc6d0 \ub418\ub294 \uae00\uaf34 \ud615\uc2dd\uc774 \ub098 \ud45c\uc900 PDF \uae00\uaf34\uc774 \uc544\ub2d9\ub2c8\ub2e4.'
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
//# sourceMappingURL=gc.spread.sheets.resources.ko.12.0.0.js.map
}));