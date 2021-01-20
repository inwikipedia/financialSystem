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
   GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["Print"] =
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
	    exports.SR['en'] = __webpack_require__(4);
	    module.exports = exports;
	
	}());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var Core = __webpack_require__(2);
	    var Common = __webpack_require__(3);
	
	    var Workbook = Core.Workbook, Worksheet = Core.Worksheet, _CellOverflowLayoutBuilder = Core._CellOverflowLayoutBuilder;
	    var $ = Core.GC$, $_extend = $.extend, $_each = $.each, _ImageLoader = Core._ImageLoader, Rect = Core.Rect, Sheets_util = Core._util, Sheets_util_browser = Sheets_util._browser;
	
	    var Print = {};
	    var str_firstPageNumber = 'firstPageNumber', str_margin = 'margin', str_paperSize = 'paperSize', str_pageBreak = 'pageBreak', str_empty = '', str_printPage = 'gc-printPage', str_2d = '2d', str_px = 'px', str_div = 'div', str_canvas = 'canvas', keyword_null = null, Math_min = Math.min, Math_max = Math.max, Math_floor = Math.floor, parseIntFn = parseInt, parseFloatFn = parseFloat, JSON_stringify = JSON.stringify, JSON_parse = JSON.parse;
	    
	    function isInteger(obj) {
	        return typeof obj === 'number' && obj % 1 === 0;
	    }
	    var sR = function () {
	        return Common._getResource(Print.SR)();
	    };
	   
	    $_extend(Worksheet.prototype, {
	       
	        
	        printInfo: function (value) {
	            var self = this, returnValue;
	            if (arguments.length === 0) {
	                if (!self._printInfo) {
	                    self._printInfo = new PrintInfo();
	                }
	                returnValue = self._printInfo;
	            } else {
	                self._printInfo = value;
	                returnValue = self;
	            }
	            return returnValue;
	        },
	       
	        
	        getRowPageBreak: function (row) {
	            return this._modelManager.getPageBreak(true, 3 , row);
	        },
	       
	        
	        setRowPageBreak: function (row, value) {
	            this._setRowColInfo(row, value, str_pageBreak, true);
	        },
	       
	        
	        getColumnPageBreak: function (column) {
	            return this._modelManager.getPageBreak(false, 3 , column);
	        },
	       
	        
	        setColumnPageBreak: function (column, value) {
	            this._setRowColInfo(column, value, str_pageBreak, false);
	        }
	    });
	
	    Worksheet._registerFeature('print', {
	        toJson: function (data) {
	            var printInfo = this._printInfo;
	            if (printInfo) {
	                data.printInfo = printInfo.toJSON();
	            }
	        },
	        fromJson: function (data) {
	            var printInfo = data && data.printInfo;
	            if (printInfo) {
	                this.printInfo().fromJSON(printInfo);
	            }
	        }
	    });
	   
	
	   
	   
	    
	    Workbook.prototype.print = function (sheetIndex) {
	        var self = this;
	       
	        if(!isUndefined(sheetIndex) && sheetIndex !== keyword_null && !(isInteger(sheetIndex) && sheetIndex >= 0 && self.getSheetCount() > sheetIndex)) {
	            throw new Error(sR().Exp_InvalidSheetIndex);
	        }
	        if (!self._printer) {
	            self._printer = new SpreadPrinter();
	        }
	        var printer = self._printer;
	        printer.print(self, sheetIndex);
	    };
	
	    Workbook._registerFeature('print', {
	        dispose: function () {
	            var printer = this._printer;
	            if (printer) {
	                printer.dispose();
	            }
	        }
	    });
	   
	
	   
	   
	    
	    Print.PrintVisibilityType = {
	        
	        inherit: 0,
	        
	        hide: 1,
	        
	        show: 2,
	        
	        showOnce: 3
	    };
	   
	
	   
	   
	    
	    Print.PrintCentering = {
	        
	        none: 0,
	        
	        horizontal: 1,
	        
	        vertical: 2,
	        
	        both: 3
	    };
	   
	
	   
	   
	    
	    Print.PrintPageOrientation = {
	        
	        portrait: 1,
	        
	        landscape: 2
	    };
	   
	
	   
	   
	    
	    Print.PrintPageOrder = {
	        
	        auto: 0,
	        
	        downThenOver: 1,
	        
	        overThenDown: 2
	    };
	   
	
	   
	   
	    
	    Print.PaperKind = {
	        
	        a2: 0x42,
	
	        
	        a3: 8,
	
	        
	        a3Extra: 0x3f,
	
	        
	        a3ExtraTransverse: 0x44,
	
	        
	        a3Rotated: 0x4c,
	
	        
	        a3Transverse: 0x43,
	
	        
	        a4: 9,
	
	        
	        a4Extra: 0x35,
	
	        
	        a4Plus: 60,
	
	        
	        a4Rotated: 0x4d,
	
	        
	        a4Small: 10,
	
	        
	        a4Transverse: 0x37,
	
	        
	        a5: 11,
	
	        
	        a5Extra: 0x40,
	
	        
	        a5Rotated: 0x4e,
	
	        
	        a5Transverse: 0x3d,
	
	        
	        a6: 70,
	
	        
	        a6Rotated: 0x53,
	
	        
	        aPlus: 0x39,
	
	        
	        b4: 12,
	
	        
	        b4Envelope: 0x21,
	
	        
	        b4JisRotated: 0x4f,
	
	        
	        b5: 13,
	
	        
	        b5Envelope: 0x22,
	
	        
	        b5Extra: 0x41,
	
	        
	        b5JisRotated: 80,
	
	        
	        b5Transverse: 0x3e,
	
	        
	        b6Envelope: 0x23,
	
	        
	        b6Jis: 0x58,
	
	        
	        b6JisRotated: 0x59,
	
	        
	        bPlus: 0x3a,
	
	        
	        c3Envelope: 0x1d,
	
	        
	        c4Envelope: 30,
	
	        
	        c5Envelope: 0x1c,
	
	        
	        c65Envelope: 0x20,
	
	        
	        c6Envelope: 0x1f,
	
	        
	        cSheet: 0x18,
	
	        
	        custom: 0,
	
	        
	        dlEnvelope: 0x1b,
	
	        
	        dSheet: 0x19,
	
	        
	        eSheet: 0x1a,
	
	        
	        executive: 7,
	
	        
	        folio: 14,
	
	        
	        germanLegalFanfold: 0x29,
	
	        
	        germanStandardFanfold: 40,
	
	        
	        inviteEnvelope: 0x2f,
	
	        
	        isoB4: 0x2a,
	
	        
	        italyEnvelope: 0x24,
	
	        
	        japaneseDoublePostcard: 0x45,
	
	        
	        japaneseDoublePostcardRotated: 0x52,
	
	        
	        japaneseEnvelopeChouNumber3: 0x49,
	
	        
	        japaneseEnvelopeChouNumber3Rotated: 0x56,
	
	        
	        japaneseEnvelopeChouNumber4: 0x4a,
	
	        
	        japaneseEnvelopeChouNumber4Rotated: 0x57,
	
	        
	        japaneseEnvelopeKakuNumber2: 0x47,
	
	        
	        japaneseEnvelopeKakuNumber2Rotated: 0x54,
	
	        
	        japaneseEnvelopeKakuNumber3: 0x48,
	
	        
	        japaneseEnvelopeKakuNumber3Rotated: 0x55,
	
	        
	        japaneseEnvelopeYouNumber4: 0x5b,
	
	        
	        japaneseEnvelopeYouNumber4Rotated: 0x5c,
	
	        
	        japanesePostcard: 0x2b,
	
	        
	        japanesePostcardRotated: 0x51,
	
	        
	        ledger: 4,
	
	        
	        legal: 5,
	
	        
	        legalExtra: 0x33,
	
	        
	        letter: 1,
	
	        
	        letterExtra: 50,
	
	        
	        letterExtraTransverse: 0x38,
	
	        
	        letterPlus: 0x3b,
	
	        
	        letterRotated: 0x4b,
	
	        
	        letterSmall: 2,
	
	        
	        letterTransverse: 0x36,
	
	        
	        monarchEnvelope: 0x25,
	
	        
	        note: 0x12,
	
	        
	        number10Envelope: 20,
	
	        
	        number11Envelope: 0x15,
	
	        
	        number12Envelope: 0x16,
	
	        
	        number14Envelope: 0x17,
	
	        
	        number9Envelope: 0x13,
	
	        
	        personalEnvelope: 0x26,
	
	        
	        prc16K: 0x5d,
	
	        
	        prc16KRotated: 0x6a,
	
	        
	        prc32K: 0x5e,
	
	        
	        prc32KBig: 0x5f,
	
	        
	        prc32KBigRotated: 0x6c,
	
	        
	        prc32KRotated: 0x6b,
	
	        
	        prcEnvelopeNumber1: 0x60,
	
	        
	        prcEnvelopeNumber10: 0x69,
	
	        
	        prcEnvelopeNumber10Rotated: 0x76,
	
	        
	        prcEnvelopeNumber1Rotated: 0x6d,
	
	        
	        prcEnvelopeNumber2: 0x61,
	
	        
	        prcEnvelopeNumber2Rotated: 110,
	
	        
	        prcEnvelopeNumber3: 0x62,
	
	        
	        prcEnvelopeNumber3Rotated: 0x6f,
	
	        
	        prcEnvelopeNumber4: 0x63,
	
	        
	        prcEnvelopeNumber4Rotated: 0x70,
	
	        
	        prcEnvelopeNumber5: 100,
	
	        
	        prcEnvelopeNumber5Rotated: 0x71,
	
	        
	        prcEnvelopeNumber6: 0x65,
	
	        
	        prcEnvelopeNumber6Rotated: 0x72,
	
	        
	        prcEnvelopeNumber7: 0x66,
	
	        
	        prcEnvelopeNumber7Rotated: 0x73,
	
	        
	        prcEnvelopeNumber8: 0x67,
	
	        
	        prcEnvelopeNumber8Rotated: 0x74,
	
	        
	        prcEnvelopeNumber9: 0x68,
	
	        
	        prcEnvelopeNumber9Rotated: 0x75,
	
	        
	        quarto: 15,
	
	        
	        standard10x11: 0x2d,
	
	        
	        standard10x14: 0x10,
	
	        
	        standard11x17: 0x11,
	
	        
	        standard12x11: 90,
	
	        
	        standard15x11: 0x2e,
	
	        
	        standard9x11: 0x2c,
	
	        
	        statement: 6,
	
	        
	        tabloid: 3,
	
	        
	        tabloidExtra: 0x34,
	
	        
	        usStandardFanfold: 0x27
	    };
	   
	
	   
	   
	    
	    function PaperSize(widthOrKind, height) {
	        var self = this;
	        var argumentsLength = arguments.length;
	        if (argumentsLength === 1) {
	            self.kind(widthOrKind);
	        } else if (argumentsLength === 2) {
	            self._width = widthOrKind;
	            self._height = height;
	            self._kind = 0 ;
	        } else {
	            self.kind(1 );
	        }
	    }
	    $_extend(PaperSize.prototype, {
	       
	        
	        height: function (value) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._height;
	            }
	
	            if (self._height !== value) {
	                self._kind = 0 ;
	            }
	            self._height = value;
	            return self;
	        },
	       
	        
	        width: function (value) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._width;
	            }
	
	            if (self._width !== value) {
	                self._kind = 0 ;
	            }
	            self._width = value;
	            return self;
	        },
	       
	        
	        kind: function (value) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._kind;
	            }
	
	            self._kind = value;
	            var size = self.getPageSize(value);
	            self._width = size.width;
	            self._height = size.height;
	            return self;
	        },
	       
	        
	        getPageSize: function (kind) {
	            function _toHundredthsOfInch(num, isInch) {
	                return isInch ? num * 100 : num / 25.4 * 100;
	            }
	            function _fromInch(width, height) {
	                return {width: _toHundredthsOfInch(width, true), height: _toHundredthsOfInch(height, true)};
	            }
	            function _fromMM(width, height) {
	                return {width: _toHundredthsOfInch(width, false), height: _toHundredthsOfInch(height, false)};
	            }
	
	            switch (kind) {
	                case 0 :
	                    return { width: 0, height: 0 };
	                case 1 :
	                    return _fromInch(8.5, 11);
	                case 5 :
	                    return _fromInch(8.5, 14);
	                case 9 :
	                    return _fromMM(210, 297);
	                case 24 :
	                    return _fromInch(17, 22);
	                case 25 :
	                    return _fromInch(22, 34);
	                case 26 :
	                    return _fromInch(34, 44);
	                case 2 :
	                    return _fromInch(8.5, 11);
	                case 3 :
	                    return _fromInch(11, 17);
	                case 4 :
	                    return _fromInch(17, 11);
	                case 6 :
	                    return _fromInch(5.5, 8.5);
	                case 7 :
	                    return _fromInch(7.25, 10.5);
	                case 8 :
	                    return _fromMM(297, 420);
	                case 10 :
	                    return _fromMM(210, 297);
	                case 11 :
	                    return _fromMM(148, 210);
	                case 12 :
	                    return _fromMM(250, 353);
	                case 13 :
	                    return _fromMM(176, 250);
	                case 14 :
	                    return _fromInch(8.5, 13);
	                case 15 :
	                    return _fromMM(215, 275);
	                case 16 :
	                    return _fromInch(10, 14);
	                case 17 :
	                    return _fromInch(11, 17);
	                case 18 :
	                    return _fromInch(8.5, 11);
	                case 19 :
	                    return _fromInch(3.875, 8.875);
	                case 20 :
	                    return _fromInch(4.125, 9.5);
	                case 21 :
	                    return _fromInch(4.5, 10.375);
	                case 22 :
	                    return _fromInch(4.75, 11);
	                case 23 :
	                    return _fromInch(5, 11.5);
	                case 27 :
	                    return _fromMM(110, 220);
	                case 28 :
	                    return _fromMM(162, 229);
	                case 29 :
	                    return _fromMM(324, 458);
	                case 30 :
	                    return _fromMM(229, 324);
	                case 31 :
	                    return _fromMM(114, 162);
	                case 32 :
	                    return _fromMM(114, 229);
	                case 33 :
	                    return _fromMM(250, 353);
	                case 34 :
	                    return _fromMM(176, 250);
	                case 35 :
	                    return _fromMM(176, 125);
	                case 36 :
	                    return _fromMM(110, 230);
	                case 37 :
	                    return _fromInch(3.875, 7.5);
	                case 38 :
	                    return _fromInch(3.625, 6.5);
	                case 39 :
	                    return _fromInch(14.875, 11);
	                case 40 :
	                    return _fromInch(8.5, 12);
	                case 41 :
	                    return _fromInch(8.5, 13);
	                case 42 :
	                    return _fromMM(250, 353);
	                case 43 :
	                    return _fromMM(100, 148);
	                case 44 :
	                    return _fromInch(9, 11);
	                case 45 :
	                    return _fromInch(10, 11);
	                case 46 :
	                    return _fromInch(15, 11);
	                case 47 :
	                    return _fromMM(220, 220);
	                case 50 :
	                    return _fromInch(9.275, 12);
	                case 51 :
	                    return _fromInch(9.275, 15);
	                case 52 :
	                    return _fromInch(11.69, 18);
	                case 53 :
	                    return _fromMM(236, 322);
	                case 54 :
	                    return _fromInch(8.275, 11);
	                case 55 :
	                    return _fromMM(210, 297);
	                case 56 :
	                    return _fromInch(9.275, 12);
	                case 57 :
	                    return _fromMM(227, 356);
	                case 58 :
	                    return _fromMM(305, 487);
	                case 59 :
	                    return _fromInch(8.5, 12.69);
	                case 60 :
	                    return _fromMM(210, 330);
	                case 61 :
	                    return _fromMM(148, 210);
	                case 62 :
	                    return _fromMM(182, 257);
	                case 63 :
	                    return _fromMM(322, 445);
	                case 64 :
	                    return _fromMM(174, 235);
	                case 65 :
	                    return _fromMM(201, 276);
	                case 66 :
	                    return _fromMM(420, 594);
	                case 67 :
	                    return _fromMM(297, 420);
	                case 68 :
	                    return _fromMM(322, 445);
	                case 69 :
	                    return _fromMM(200, 148);
	                case 70 :
	                    return _fromMM(105, 148);
	                case 71 :
	                    return _fromMM(240, 332);
	                case 72 :
	                    return _fromMM(216, 277);
	                case 73 :
	                    return _fromMM(120, 235);
	                case 74 :
	                    return _fromMM(90, 205);
	                case 75 :
	                    return _fromInch(11, 8.5);
	                case 76 :
	                    return _fromMM(420, 297);
	                case 77 :
	                    return _fromMM(297, 210);
	                case 78 :
	                    return _fromMM(210, 148);
	                case 79 :
	                    return _fromMM(364, 257);
	                case 80 :
	                    return _fromMM(257, 182);
	                case 81 :
	                    return _fromMM(148, 100);
	                case 82 :
	                    return _fromMM(148, 200);
	                case 83 :
	                    return _fromMM(148, 105);
	                case 84 :
	                    return _fromMM(332, 240);
	                case 85 :
	                    return _fromMM(277, 216);
	                case 86 :
	                    return _fromMM(235, 120);
	                case 87 :
	                    return _fromMM(205, 90);
	                case 88 :
	                    return _fromMM(128, 182);
	                case 89 :
	                    return _fromMM(182, 128);
	                case 90 :
	                    return _fromInch(12, 11);
	                case 91 :
	                    return _fromMM(235, 105);
	                case 92 :
	                    return _fromMM(105, 235);
	                case 93 :
	                    return _fromMM(146, 215);
	                case 94 :
	                    return _fromMM(97, 151);
	                case 95 :
	                    return _fromMM(97, 151);
	                case 96 :
	                    return _fromMM(102, 165);
	                case 97 :
	                    return _fromMM(102, 176);
	                case 98 :
	                    return _fromMM(125, 176);
	                case 99 :
	                    return _fromMM(110, 208);
	                case 100 :
	                    return _fromMM(110, 220);
	                case 101 :
	                    return _fromMM(120, 230);
	                case 102 :
	                    return _fromMM(160, 230);
	                case 103 :
	                    return _fromMM(120, 309);
	                case 104 :
	                    return _fromMM(229, 324);
	                case 105 :
	                    return _fromMM(324, 458);
	                case 106 :
	                    return _fromMM(146, 215);
	                case 107 :
	                    return _fromMM(97, 151);
	                case 108 :
	                    return _fromMM(97, 151);
	                case 109 :
	                    return _fromMM(165, 102);
	                case 110 :
	                    return _fromMM(176, 102);
	                case 111 :
	                    return _fromMM(176, 125);
	                case 112 :
	                    return _fromMM(208, 110);
	                case 113 :
	                    return _fromMM(220, 110);
	                case 114 :
	                    return _fromMM(230, 120);
	                case 115 :
	                    return _fromMM(230, 160);
	                case 116 :
	                    return _fromMM(309, 120);
	                case 117 :
	                    return _fromMM(324, 229);
	                case 118 :
	                    return _fromMM(458, 324);
	                default:
	                    return { width: 0, height: 0 };
	            }
	        },
	        toJSON: function () {
	            return {
	                width: this._width,
	                height: this._height,
	                kind: this._kind
	            };
	        },
	        fromJSON: function (setting) {
	            if (!isUndefined(setting.width)) {
	                this._width = setting.width;
	            }
	            if (!isUndefined(setting.height)) {
	                this._height = setting.height;
	            }
	            if (!isUndefined(setting.kind)) {
	                this._kind = setting.kind;
	            }
	        }
	    });
	    Print.PaperSize = PaperSize;
	   
	
	   
	    
	
	   
	    
	
	       
	    var DEFAULT_MARGIN = '{"top":75,"bottom":75,"left":70,"right":70,"header":30,"footer":30}';
	    var PrintInfoPropertyDict = {
	        bestFitRows: false,
	        bestFitColumns: false,
	        columnStart: -1,
	        columnEnd: -1,
	        rowStart: -1,
	        rowEnd: -1,
	        repeatColumnStart: -1,
	        repeatColumnEnd: -1,
	        repeatRowStart: -1,
	        repeatRowEnd: -1,
	        showBorder: true,
	        showGridLine: false,
	        showColumnHeader: 0 ,
	        showRowHeader: 0 ,
	        useMax: true,
	        centering: 0 ,
	        firstPageNumber: 1,
	        headerLeft: str_empty,
	        headerCenter: str_empty,
	        headerRight: str_empty,
	        footerLeft: str_empty,
	        footerCenter: str_empty,
	        footerRight: str_empty,
	        headerLeftImage: str_empty,
	        headerCenterImage: str_empty,
	        headerRightImage: str_empty,
	        footerLeftImage: str_empty,
	        footerCenterImage: str_empty,
	        footerRightImage: str_empty,
	        margin: JSON_parse(DEFAULT_MARGIN),
	        orientation: 1 ,
	        pageRange: str_empty,
	        pageOrder: 0 ,
	        blackAndWhite: false,
	        zoomFactor: 1,
	        fitPagesTall: -1,
	        fitPagesWide: -1,
	        paperSize: {},
	        qualityFactor: 2
	    };
	
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	    function PrintInfo() {
	        var self = this;
	        $_each(PrintInfoPropertyDict, function (p, v) {
	            if (p === str_margin) {
	                self['_' + p] = JSON_parse(DEFAULT_MARGIN);
	            } else if (p === str_paperSize) {
	                self['_' + p] = new PaperSize();
	            } else {
	                self['_' + p] = v;
	            }
	        });
	    }
	
	    var PrintInfoPrototype = {
	        toJSON: function () {
	            function isDefaultValue(propertyName, value, printInfo) {
	                var isDefault = false, defaultValue = PrintInfoPropertyDict[propertyName];
	                if (propertyName === str_margin) {
	                    isDefault = JSON_stringify(defaultValue) === JSON_stringify(value);
	                } else if (propertyName === str_paperSize) {
	                    isDefault = value.width === 850 && value.height === 1100 && value.kind === 0 ;
	                } else if (propertyName === str_firstPageNumber) {
	                    isDefault = value === 1 && !printInfo._isFirstPageNumberSet;
	                } else {
	                    isDefault = defaultValue === value;
	                }
	                return isDefault;
	            }
	
	            var self = this;
	            var dataDic = {}, currentValue;
	            $_each(PrintInfoPropertyDict, function (p) {
	                currentValue = self['_' + p];
	                if (!isDefaultValue(p, currentValue, self)) {
	                    if (p === str_paperSize) {
	                        dataDic[p] = currentValue.toJSON();
	                    } else {
	                        dataDic[p] = currentValue;
	                    }
	                }
	            });
	            return dataDic;
	        },
	        fromJSON: function (setting) {
	            var self = this;
	            $_each(PrintInfoPropertyDict, function (p) {
	                var jsonValue = setting[p];
	                if (!isUndefined(jsonValue)) {
	                    if (p === str_paperSize) {
	                        self['_' + p].fromJSON(jsonValue);
	                    } else {
	                        if (p === str_firstPageNumber) {
	                            self._isFirstPageNumberSet = true;
	                        }
	                        self['_' + p] = jsonValue;
	                    }
	                }
	            });
	        }
	    };
	    $_each(PrintInfoPropertyDict, function (p) {
	        PrintInfoPrototype[p] = function (value) {
	            if (arguments.length === 0) {
	                return this['_' + p];
	            }
	
	            if (p === 'zoomFactor') {
	                if (value < 0.1) {
	                    value = 0.1;
	                } else if (value > 4) {
	                    value = 4;
	                }
	            } else if (p === 'qualityFactor') {
	                var validValue = parseIntFn(value, 10);
	                if (validValue < 1) {
	                    validValue = 1;
	                } else if (validValue > 8) {
	                    validValue = 8;
	                }
	                value = validValue;
	            } else if (p === str_firstPageNumber) {
	                this._isFirstPageNumberSet = true;
	            }
	            this['_' + p] = value;
	            return this;
	        };
	    });
	    $_extend(PrintInfo.prototype, PrintInfoPrototype);
	    Print.PrintInfo = PrintInfo;
	   
	
	   
	    function isUndefined(v) {
	        return typeof v === 'undefined';
	    }
	
	    function createElement(doc, tagName) {
	        return doc.createElement(tagName);
	    }
	
	    function initPrintingSize(sheet, printInfo, outParam) {
	        var paperSize = getPaperSize(sheet, printInfo.paperSize(), printInfo.orientation(), !printInfo.showBorder()), paperWidth = paperSize.width, paperHeight = paperSize.height;
	        var margin = getMargin(printInfo.margin());
	        var leftMargin = margin.left;
	        var topMargin = margin.top;
	        var rightMargin = margin.right;
	        var bottomMargin = margin.bottom;
	        outParam.paperSize = {width: paperWidth, height: paperHeight};
	        outParam.pageImageableArea = new Rect(leftMargin, topMargin, paperWidth - leftMargin - rightMargin, paperHeight - topMargin - bottomMargin);
	    }
	
	    function getPaperSize(sheet, originalPaperSize, orientation, needTopLeftLine) {
	        var factor = 0.96;
	        var size = {};
	        var originalPaperWidth = originalPaperSize.width() * factor, originalPaperHeight = originalPaperSize.height() * factor;
	        if (orientation === 2 ) {
	            size.width = originalPaperHeight;
	            size.height = parseIntFn(originalPaperWidth, 10);
	        } else {
	            size.width = originalPaperWidth;
	            size.height = parseIntFn(originalPaperHeight, 10);
	        }
	        if (needTopLeftLine) {
	            var sheetAreaOffset = sheet.options.sheetAreaOffset;
	            size.width -= sheetAreaOffset.left;
	            size.height -= sheetAreaOffset.top;
	        }
	        return size;
	    }
	
	    function getMargin(originalMargin) {
	        var factor = 0.96;
	        var margin = {};
	        margin.left = originalMargin.left * factor;
	        margin.top = originalMargin.top * factor;
	        margin.right = originalMargin.right * factor;
	        margin.bottom = originalMargin.bottom * factor;
	        margin.header = originalMargin.header * factor;
	        margin.footer = originalMargin.footer * factor;
	        return margin;
	    }
	
	    function getPageRange(pageRange) {
	        if (!pageRange) {
	            return [];
	        }
	        var pages = [];
	        var ranges = pageRange.split(','), i, count, tmpRange, index, start, end, step, tmpIndex;
	        for (i = 0, count = ranges.length; i < count; i++) {
	            tmpRange = ranges[i].trim();
	            if (!tmpRange) {
	                continue;
	            }
	            index = tmpRange.indexOf('-');
	            if (index >= 0) {
	                start = parseIntFn(tmpRange.substr(0, index), 10);
	                end = parseIntFn(tmpRange.substr(index + 1), 10);
	                step = end >= start ? 1 : -1;
	                for (tmpIndex = start; tmpIndex !== end; tmpIndex += step) {
	                    pages.push(tmpIndex);
	                }
	                pages.push(end);
	            } else {
	                pages.push(parseIntFn(tmpRange, 10));
	            }
	        }
	        return pages;
	    }
	
	    function modifyPageIndexes(pageIndexes, pageCount) {
	        pageIndexes.sort();
	        var removeArray = [], i, count, j;
	        for (i = 0, count = pageIndexes.length; i < count; i++) {
	            pageIndexes[i] -= 1;
	            if (pageIndexes[i] >= pageCount || pageIndexes[i] < 0) {
	                removeArray.push(i);
	            }
	        }
	        for (j = removeArray.length - 1; j >= 0; j--) {
	            pageIndexes.splice(removeArray[j], 1);
	        }
	    }
	
	    function getLastNonEmptyColumn(sheet) {
	        var modelManager = sheet._modelManager, lastDirtyColumn = modelManager.getLastNonNullCol(), lastDirtyRow = modelManager.getLastNonNullRow(), tables = sheet.tables && sheet.tables.all();
	        var c, columnStyle,
	            i, length, tableRange,
	            r;
	        for (c = lastDirtyColumn; c >= 0; c--) {
	            columnStyle = sheet._getStyleImp(-1, c);
	            if (isValidatingStyleForPrinting(columnStyle)) {
	                return c;
	            }
	            if (tables) {
	                for (i = 0, length = tables.length; i < length; i++) {
	                    tableRange = tables[i].range();
	                    if (c >= tableRange.col && c <= tableRange.col + tableRange.colCount - 1) {
	                        return c;
	                    }
	                }
	            }
	            for (r = 0; r <= lastDirtyRow; r++) {
	                if (isCellNonEmpty(sheet, r, c)) {
	                    return c;
	                }
	            }
	        }
	        return -1;
	    }
	
	    function getLastNonEmptyRow(sheet) {
	        var modelManager = sheet._modelManager, lastDirtyColumn = modelManager.getLastNonNullCol(), lastDirtyRow = modelManager.getLastNonNullRow(), tables = sheet.tables && sheet.tables.all();
	        var r, rowStyle,
	            i, length, tableRange,
	            c;
	        for (r = lastDirtyRow; r >= 0; r--) {
	            rowStyle = sheet._getStyleImp(r, -1);
	            if (isValidatingStyleForPrinting(rowStyle)) {
	                return r;
	            }
	            if (tables) {
	                for (i = 0, length = tables.length; i < length; i++) {
	                    tableRange = tables[i].range();
	                    if (r >= tableRange.row && r <= tableRange.row + tableRange.rowCount - 1) {
	                        return r;
	                    }
	                }
	            }
	            for (c = 0; c <= lastDirtyColumn; c++) {
	                if (isCellNonEmpty(sheet, r, c)) {
	                    return r;
	                }
	            }
	        }
	        return -1;
	    }
	
	    function isCellNonEmpty(sheet, r, c) {
	        var value = sheet.getValue(r, c), sparkline, style;
	        if (value !== keyword_null && !isUndefined(value)) {
	            return true;
	        }
	        sparkline = sheet.getSparkline && sheet.getSparkline(r, c);
	        if (sparkline) {
	            return true;
	        }
	        style = sheet._getStyleImp(r, c);
	        return isValidatingStyleForPrinting(style);
	    }
	
	    function isValidatingStyleForPrinting(style) {
	        return !!(style && (style.backColor || style.backgroundImage || style.borderBottom || style.borderLeft || style.borderRight || style.borderTop || style.diagonalDown || style.diagonalUp));
	    }
	
	    function iteratePicturesAndCharts(sheet, callback) {
	        var floatingObjects = [];
	        var pictures = sheet.pictures && sheet.pictures.all();
	        if (pictures) {
	            floatingObjects = floatingObjects.concat(pictures);
	        }
	        var charts = sheet.charts && sheet.charts.all();
	        if (charts) {
	            floatingObjects = floatingObjects.concat(charts);
	        }
	        floatingObjects.forEach(callback);
	    }
	
	    function getLastFloatingObjectDirtyIndex(sheet, isRow) {
	        var lastDirtyIndex = -1;
	       
	        iteratePicturesAndCharts(sheet, function (floatingObject) {
	            if (floatingObject.isVisible() && floatingObject.canPrint()) {
	                lastDirtyIndex = Math_max(lastDirtyIndex, isRow ? floatingObject.endRow() : floatingObject.endColumn());
	            }
	        });
	        return lastDirtyIndex;
	    }
	
	
	
	    
	    function _getOverflowMaxEndColumn(sheet) {
	       
	       
	        var cachePool = sheet._cachePool, rowCount = getLastNonEmptyRow(sheet) + 1;
	        var width = 0;
	        for (var headerCol = 0, headerColCount = sheet.getColumnCount(2 ); headerCol < headerColCount; headerCol++) {
	            width += sheet._getZoomColumnWidth(headerCol, 2 );
	        }
	        for (var col = 0, colCount = sheet.getColumnCount(); col < colCount; col++) {
	            width += cachePool._getZoomColWidth(col);
	        }
	        var height = 0;
	        for (var headerRow = 0, headerRowCount = sheet.getRowCount(1 ); headerRow < headerRowCount; headerRow++) {
	            height += sheet._getZoomRowHeight(headerRow, 1 );
	        }
	        for (var row = 0; row < rowCount; row++) {
	            height += cachePool._getZoomRowHeight(row);
	        }
	        var rect = new Rect(0, 0, width, height);
	        sheet._setBounds(rect);
	        sheet.invalidateLayout();
	
	        var maxOverflowColumn = -1;
	        for (var rowIndex = 0; rowIndex < rowCount; rowIndex++) {
	            var rowViewportIndex = sheet._getRowViewportIndex(rowIndex);
	            for (var colViewportIndex = 0; colViewportIndex <= 2; colViewportIndex++) {
	                var layoutBuilder = new _CellOverflowLayoutBuilder(sheet, rowViewportIndex, colViewportIndex);
	                var overflowLayoutModel = layoutBuilder._getCellOverflowLayoutModel(rowIndex);
	                for (var i = 0, length = overflowLayoutModel.length; i < length; i++) {
	                    var overflowLayout = overflowLayoutModel[i];
	                    if (overflowLayout.endColumn > maxOverflowColumn) {
	                        maxOverflowColumn = overflowLayout.endColumn;
	                    }
	                }
	                var headingOverflowlayout = overflowLayoutModel.headingOverflowlayout;
	                if (headingOverflowlayout && headingOverflowlayout.endColumn > maxOverflowColumn) {
	                    maxOverflowColumn = headingOverflowlayout.endColumn;
	                }
	                var trailingOverflowLayout = overflowLayoutModel.trailingOverflowLayout;
	                if (trailingOverflowLayout && trailingOverflowLayout.endColumn > maxOverflowColumn) {
	                    maxOverflowColumn = trailingOverflowLayout.endColumn;
	                }
	            }
	        }
	        return maxOverflowColumn;
	    }
	
	    function _getSpanMaxIndex(spans, rowCount, colCount) {
	        var maxColIndex = -1, maxRowIndex = -1;
	        _eachSpan(spans, 0, 0, rowCount, colCount, function (span) {
	            var maxSpanColIndex = span.col + span.colCount - 1;
	            var maxSpanRowIndex = span.row + span.rowCount - 1;
	            if (maxSpanColIndex > maxColIndex) {
	                maxColIndex = maxSpanColIndex;
	            }
	            if (maxSpanRowIndex > maxRowIndex) {
	                maxRowIndex = maxSpanRowIndex;
	            }
	        });
	        return {colIndex: maxColIndex, rowIndex: maxRowIndex};
	    }
	
	    function _eachSpan(spans, row, col, rowCount, colCount, callback) {
	        var self = spans;
	        for (var i = 0, length = self.length; i < length; i++) {
	            if (row >= 0 || col >= 0) {
	                while (i < length && !self[i].intersect(row, col, rowCount, colCount)) {
	                    i++;
	                }
	            }
	            if (i < length && callback) {
	                var value = callback(self[i]);
	                if (value === false) {
	                    break;
	                }
	            }
	        }
	    }
	
	    function _getLastSpanDirtyColumn(sheet) {
	        var maxColumnIndex = -1;
	       
	        var colHeaderSpans = sheet._modelManager.getSpans(keyword_null, 1);
	        var colHeaderRowCount = sheet.getRowCount(1), colHeaderColCount = sheet.getColumnCount(1);
	        maxColumnIndex = Math_max(maxColumnIndex, _getSpanMaxIndex(colHeaderSpans, colHeaderRowCount, colHeaderColCount).colIndex);
	
	       
	        var vpSpans = sheet._modelManager.getSpans(keyword_null, 3 );
	        var vpRowCount = sheet.getRowCount(), vpColCount = sheet.getColumnCount();
	        maxColumnIndex = Math_max(maxColumnIndex, _getSpanMaxIndex(vpSpans, vpRowCount, vpColCount).colIndex);
	        return maxColumnIndex;
	    }
	
	    function _getLastSpanDirtyRow(sheet) {
	        var maxRowIndex = -1;
	       
	        var rowHeaderSpans = sheet._modelManager.getSpans(keyword_null, 2);
	        var rowHeaderRowCount = sheet.getRowCount(2), rowHeaderColCount = sheet.getColumnCount(2);
	        maxRowIndex = Math_max(maxRowIndex, _getSpanMaxIndex(rowHeaderSpans, rowHeaderRowCount, rowHeaderColCount).rowIndex);
	
	       
	        var vpSpans = sheet._modelManager.getSpans(keyword_null, 3 );
	        var vpRowCount = sheet.getRowCount(), vpColCount = sheet.getColumnCount();
	        maxRowIndex = Math_max(maxRowIndex, _getSpanMaxIndex(vpSpans, vpRowCount, vpColCount).rowIndex);
	        return maxRowIndex;
	    }
	
	    function getLastPrintingColumn(sheet, printSettings) {
	        var columnEnd, printSettings_columnEnd = printSettings.columnEnd(), sheet_columnCount = sheet.getColumnCount();
	        if (printSettings_columnEnd === -1) {
	            var lastColumn;
	            if (printSettings.useMax()) {
	                var lastDirtyColumn = getLastNonEmptyColumn(sheet);
	                if (sheet.options.allowCellOverflow) {
	                    var maxOverflowColumn = _getOverflowMaxEndColumn(sheet);
	                    lastDirtyColumn = Math_max(lastDirtyColumn, maxOverflowColumn);
	                }
	                var lastFBDirtyColumn = getLastFloatingObjectDirtyIndex(sheet, false);
	                var lastSPDirtyColum = -1;
	                if(sheet.shapes) {
	                    lastSPDirtyColum = sheet.shapes._getLastColumnShapeDirtyIndex();
	                }
	                lastColumn = Math_max(lastDirtyColumn, lastFBDirtyColumn, lastSPDirtyColum);
	                var lastSpanDirtyColumn = _getLastSpanDirtyColumn(sheet);
	                lastColumn = Math_max(lastColumn, lastSpanDirtyColumn);
	            } else {
	                lastColumn = sheet_columnCount - 1;
	            }
	            columnEnd = lastColumn;
	        } else {
	            columnEnd = printSettings_columnEnd;
	        }
	        columnEnd = Math_min(columnEnd, sheet_columnCount - 1);
	        return columnEnd;
	    }
	
	    function getLastPrintingRow(sheet, printSettings) {
	        var rowEnd, printSettings_rowEnd = printSettings.rowEnd(), sheet_rowCount = sheet.getRowCount();
	        if (printSettings_rowEnd === -1) {
	            var lastRow;
	            if (printSettings.useMax()) {
	                var lastDirtyRow = getLastNonEmptyRow(sheet);
	                var lastFBDirtyRow = getLastFloatingObjectDirtyIndex(sheet, true);
	                var lastSPDirtyRow = -1;
	                if(sheet.shapes) {
	                    lastSPDirtyRow = sheet.shapes._getRowLastShapeDirtyIndex();
	                }
	                lastRow = Math_max(lastDirtyRow, lastFBDirtyRow, lastSPDirtyRow);
	                var lastSpanDirtyRow = _getLastSpanDirtyRow(sheet);
	                lastRow = Math_max(lastRow, lastSpanDirtyRow);
	            } else {
	                lastRow = sheet_rowCount - 1;
	            }
	            rowEnd = lastRow;
	        } else {
	            rowEnd = printSettings_rowEnd;
	        }
	        rowEnd = Math_min(rowEnd, sheet_rowCount - 1);
	        return rowEnd;
	    }
	
	   
	
	   
	    var PageInfoPropertyDict = {
	        headerSize: 0,
	        contentSize: 0,
	        contentOffset: 0,
	        itemStart: -1,
	        itemEnd: -1,
	        repeatItemStart: -1,
	        repeatItemEnd: -1
	    };
	
	    function PageInfo() {
	        var self = this;
	        $_each(PageInfoPropertyDict, function (p, v) {
	            self['_' + p] = v;
	        });
	    }
	
	    var PageInfoPrototype = {};
	    $_each(PageInfoPropertyDict, function (p) {
	        PageInfoPrototype[p] = function (value) {
	            if (arguments.length === 0) {
	                return this['_' + p];
	            }
	
	            this['_' + p] = value;
	            return this;
	        };
	    });
	    $_extend(PageInfo.prototype, PageInfoPrototype);
	   
	
	   
	    var SheetPageInfoPropertyDict = {
	        sheetIndex: -1,
	        pageNumber: -1,
	        columnPageIndex: -1,
	        rowPageIndex: -1,
	        pageNumberInSheet: -1,
	        columnPageIndexInSheet: -1,
	        rowPageIndexInSheet: -1,
	        columnPage: keyword_null,
	        rowPage: keyword_null,
	        paperSize: keyword_null,
	        pageImageableArea: keyword_null,
	        workbookName: str_empty,
	        worksheetName: str_empty
	    };
	
	    function SheetPageInfo() {
	        var self = this;
	        $_each(SheetPageInfoPropertyDict, function (p, v) {
	            if (p === 'columnPage' || p === 'rowPage') {
	                v = new PageInfo();
	            } else if (p === str_paperSize) {
	                v = {width: 0, height: 0};
	            } else if (p === 'pageImageableArea') {
	                v = new Rect(0, 0, 0, 0);
	            }
	            self['_' + p] = v;
	        });
	    }
	
	    var SheetPageInfoPrototype = {
	        getPageSize: function () {
	            var columnPage = this.columnPage(), rowPage = this.rowPage();
	            return {
	                width: columnPage.contentSize() + columnPage.headerSize(),
	                height: rowPage.contentSize() + rowPage.headerSize()
	            };
	        }
	    };
	    $_each(SheetPageInfoPropertyDict, function (p) {
	        SheetPageInfoPrototype[p] = function (value) {
	            if (arguments.length === 0) {
	                return this['_' + p];
	            }
	
	            this['_' + p] = value;
	            return this;
	        };
	    });
	    $_extend(SheetPageInfo.prototype, SheetPageInfoPrototype);
	   
	
	   
	    function WorksheetPaginator(workbook, sheetIndex, paperSize, pageImageableArea) {
	        var self = this;
	        self._workbook = workbook;
	        self._sheet = workbook.getSheet(sheetIndex);
	        self._sheetIndex = sheetIndex;
	        self._printSettings = self._sheet.printInfo();
	        self._paperSize = paperSize;
	        self._pageImageableArea = pageImageableArea;
	        self._pageSize = {width: pageImageableArea.width, height: pageImageableArea.height};
	        self._pageCount = 0;
	        self._columnPages = [];
	        self._rowPages = [];
	        self._horizontalZoomFactor = 1;
	        self._verticalZoomFactor = 1;
	    }
	
	    var WorksheetPaginatorPrototype = {
	        paginate: function () {
	            var self = this;
	            if (!self._sheet.visible() || self._contentWidth() <= 0 || self._contentHeight() <= 0) {
	                self._pageCount = 0;
	                return;
	            }
	            var printSettings = self._printSettings, fitPagesTall = printSettings.fitPagesTall(), fitPagesWide = printSettings.fitPagesWide();
	            if (fitPagesTall === -1 && fitPagesWide === -1) {
	                var zoomFactor = printSettings.zoomFactor();
	                self.horizontalZoomFactor(zoomFactor);
	                self.verticalZoomFactor(zoomFactor);
	            }
	           
	            self._rowHeightCache = {};
	            self._colWidthCache = {};
	            self._paginateCore();
	            if (fitPagesTall >= 1 || fitPagesWide >= 1) {
	                var totalContentWidth = 0, totalContentHeight = 0;
	                for (var col = 0, hPageCount = self.horizontalPageCount(); col < hPageCount; col++) {
	                    totalContentWidth += self._columnPages[col].contentSize();
	                }
	                for (var row = 0, vPageCount = self.verticalPageCount(); row < vPageCount; row++) {
	                    totalContentHeight += self._rowPages[row].contentSize();
	                }
	                var verticalPageCount = self.verticalPageCount();
	                if (fitPagesTall < verticalPageCount && fitPagesTall >= 1) {
	                    self._verticalFitPaginate(totalContentHeight, verticalPageCount);
	                }
	                var horizontalPageCount = self.horizontalPageCount();
	                if (fitPagesWide < horizontalPageCount && fitPagesWide >= 1) {
	                    self._horizontalFitPaginate(totalContentWidth, horizontalPageCount);
	                }
	                self._pageCount = self.verticalPageCount() * self.horizontalPageCount();
	            }
	           
	            self._rowHeightCache = {};
	            self._colWidthCache = {};
	        },
	        pageCount: function () {
	            return this._pageCount;
	        },
	        getPage: function (pageIndex) {
	            var self = this;
	            var rowPageIndex = 0;
	            var colPageIndex = 0;
	            var pageOrder = self._printSettings.pageOrder(), verticalPageCount = self.verticalPageCount(), horizontalPageCount = self.horizontalPageCount();
	            if (pageOrder === 1  || pageOrder === 0  && verticalPageCount >= horizontalPageCount) {
	                rowPageIndex = pageIndex % verticalPageCount;
	                colPageIndex = Math_floor(pageIndex / verticalPageCount);
	            } else {
	                colPageIndex = pageIndex % horizontalPageCount;
	                rowPageIndex = Math_floor(pageIndex / horizontalPageCount);
	            }
	            var sheetPageInfo = new SheetPageInfo();
	            sheetPageInfo.sheetIndex(self._sheetIndex);
	            sheetPageInfo.pageNumberInSheet(pageIndex);
	            sheetPageInfo.rowPageIndexInSheet(rowPageIndex);
	            sheetPageInfo.columnPageIndexInSheet(colPageIndex);
	            sheetPageInfo.pageNumber(pageIndex);
	            sheetPageInfo.rowPageIndex(rowPageIndex);
	            sheetPageInfo.columnPageIndex(colPageIndex);
	            sheetPageInfo.rowPage(self._rowPages[rowPageIndex]);
	            sheetPageInfo.columnPage(self._columnPages[colPageIndex]);
	            sheetPageInfo.paperSize(self._paperSize);
	            sheetPageInfo.pageImageableArea(self._pageImageableArea);
	            sheetPageInfo.workbookName(self._sheet.parent.name);
	            sheetPageInfo.worksheetName(self._sheet.name());
	            return sheetPageInfo;
	        },
	        verticalZoomFactor: function (value) {
	            if (arguments.length === 0) {
	                return this._verticalZoomFactor;
	            }
	
	            this._verticalZoomFactor = value;
	           
	            this._rowHeightCache = {};
	            return this;
	        },
	        horizontalZoomFactor: function (value) {
	            if (arguments.length === 0) {
	                return this._horizontalZoomFactor;
	            }
	
	            this._horizontalZoomFactor = value;
	           
	            this._colWidthCache = {};
	            return this;
	        },
	        horizontalPageCount: function () {
	            return this._columnPages.length;
	        },
	        verticalPageCount: function () {
	            return this._rowPages.length;
	        },
	        sheetIndex: function () {
	            return this._sheetIndex;
	        },
	        _contentWidth: function () {
	            return this._pageSize.width;
	        },
	        _contentHeight: function () {
	            return this._pageSize.height;
	        },
	        _paginateCore: function () {
	            var self = this;
	           
	            self._verticalPaginate();
	           
	            self._horizontalPaginate();
	           
	            self._pageCount = self.verticalPageCount() * self.horizontalPageCount();
	        },
	        _horizontalFitPaginate: function (totalContentWidth, hPageCount) {
	            var self = this;
	            var fitPagesWide = self._printSettings.fitPagesWide();
	            var minHorizontalZoomFactor = 1.0;
	            if (fitPagesWide < hPageCount) {
	                minHorizontalZoomFactor = fitPagesWide / hPageCount;
	            }
	            var maxHorizontalZoomFactor = fitPagesWide * self._contentWidth() / totalContentWidth;
	            var horizontalZoomFactor = maxHorizontalZoomFactor;
	            var magicNumber = 15;
	            var delta = (maxHorizontalZoomFactor - minHorizontalZoomFactor) / magicNumber;
	            for (var i = 0; i <= magicNumber; i++) {
	                self.horizontalZoomFactor(horizontalZoomFactor);
	                self._horizontalPaginate();
	                if (self.horizontalPageCount() === fitPagesWide) {
	                    break;
	                }
	                horizontalZoomFactor -= delta;
	            }
	        },
	        _verticalFitPaginate: function (totalContentHeight, vPageCount) {
	            var self = this;
	            var fitPagesTall = self._printSettings.fitPagesTall();
	            var minVerticalZoomFactor = 1.0;
	            if (fitPagesTall < vPageCount) {
	                minVerticalZoomFactor = fitPagesTall / vPageCount;
	            }
	            var maxVerticalZoomFactor = fitPagesTall * self._contentHeight() / totalContentHeight;
	            var verticalZoomFactor = maxVerticalZoomFactor;
	            var magicNumber = 15;
	            var delta = (maxVerticalZoomFactor - minVerticalZoomFactor) / magicNumber;
	            for (var i = 0; i <= magicNumber; i++) {
	                self.verticalZoomFactor(verticalZoomFactor);
	                self._verticalPaginate();
	                if (self.verticalPageCount() === fitPagesTall) {
	                    break;
	                }
	                verticalZoomFactor -= delta;
	            }
	        },
	        _horizontalPaginate: function () {
	            var self = this, printSettings = self._printSettings, sheet = self._sheet;
	            var columnStart = printSettings.columnStart() === -1 ? 0 : printSettings.columnStart();
	            var columnEnd = getLastPrintingColumn(sheet, printSettings);
	            if (columnEnd === -1) {
	                return;
	            }
	            var rowHeaderWidth = self._getRowHeaderWidth(), contentWidth = self._contentWidth();
	            var repeatColumnStart = printSettings.repeatColumnStart(), repeatColumnEnd = printSettings.repeatColumnEnd(), showRowHeader = printSettings.showRowHeader();
	            var pageBreakArray = [];
	            for (var columnIndex = columnStart; columnIndex <= columnEnd; columnIndex++) {
	                if (sheet.getColumnPageBreak(columnIndex)) {
	                    pageBreakArray.push(columnIndex);
	                }
	            }
	            self._columnPages = [];
	            var prePageEnd = -1;
	            var columnStartColumnEndArray = _splitByPageBreak(columnStart, columnEnd, pageBreakArray);
	            for (var index = 0, length = columnStartColumnEndArray.length; index < length - 1; index += 2) {
	                var eachColumnStart = columnStartColumnEndArray[index], eachColumnEnd = columnStartColumnEndArray[index + 1];
	                var columnPages = [];
	                if (showRowHeader === 2  || showRowHeader === 0  && sheet.options.rowHeaderVisible) {
	                    columnPages = self._horizontalPaginateCore(eachColumnStart, eachColumnEnd, repeatColumnStart, repeatColumnEnd, 3 , contentWidth - rowHeaderWidth, prePageEnd);
	                    for (var i = 0, count = columnPages.length; i < count; i++) {
	                        columnPages[i].headerSize(rowHeaderWidth);
	                    }
	                } else if (showRowHeader === 3 ) {
	                    var tpPages = self._horizontalPaginateCore(eachColumnStart, eachColumnEnd, repeatColumnStart, repeatColumnEnd, 3 , contentWidth - rowHeaderWidth, prePageEnd);
	                    if (tpPages.length > 0) {
	                        tpPages[0].headerSize(rowHeaderWidth);
	                        columnPages.push(tpPages[0]);
	                        if (tpPages.length > 1) {
	                            tpPages = self._horizontalPaginateCore(tpPages[1].itemStart(), eachColumnEnd, repeatColumnStart, repeatColumnEnd, 3 , contentWidth, tpPages[0].itemEnd());
	                            columnPages = columnPages.concat(tpPages);
	                        }
	                    }
	                } else {
	                    columnPages = self._horizontalPaginateCore(eachColumnStart, eachColumnEnd, repeatColumnStart, repeatColumnEnd, 3 , contentWidth, prePageEnd);
	                }
	                self._columnPages = self._columnPages.concat(columnPages);
	
	                if (columnPages.length > 0) {
	                    prePageEnd = columnPages[columnPages.length - 1].itemEnd();
	                }
	            }
	        },
	        _verticalPaginate: function () {
	            var self = this, printSettings = self._printSettings, sheet = self._sheet;
	            var rowStart = printSettings.rowStart() === -1 ? 0 : printSettings.rowStart();
	            var rowEnd = getLastPrintingRow(sheet, printSettings);
	            if (rowEnd === -1) {
	                return;
	            }
	            var columnHeaderHeight = self._getColumnHeaderHeight(), contentHeight = self._contentHeight();
	            var repeatRowStart = printSettings.repeatRowStart(), repeatRowEnd = printSettings.repeatRowEnd(), showColumnHeader = printSettings.showColumnHeader();
	            var pageBreakArray = [];
	            for (var rowIndex = rowStart; rowIndex <= rowEnd; rowIndex++) {
	                if (sheet.getRowPageBreak(rowIndex)) {
	                    pageBreakArray.push(rowIndex);
	                }
	            }
	            self._rowPages = [];
	            var prePageEnd = -1;
	            var rowStartRowEndArray = _splitByPageBreak(rowStart, rowEnd, pageBreakArray);
	            for (var index = 0, length = rowStartRowEndArray.length; index < length - 1; index += 2) {
	                var eachRowStart = rowStartRowEndArray[index], eachRowEnd = rowStartRowEndArray[index + 1];
	                var rowPages = [];
	                if (showColumnHeader === 2  || showColumnHeader === 0  && sheet.options.colHeaderVisible) {
	                    rowPages = self._verticalPaginateCore(eachRowStart, eachRowEnd, repeatRowStart, repeatRowEnd, 3 , contentHeight - columnHeaderHeight, prePageEnd);
	                    for (var i = 0, count = rowPages.length; i < count; i++) {
	                        rowPages[i].headerSize(columnHeaderHeight);
	                    }
	                } else if (showColumnHeader === 3 ) {
	                    var tpPages = self._verticalPaginateCore(eachRowStart, eachRowEnd, repeatRowStart, repeatRowEnd, 3 , contentHeight - columnHeaderHeight, prePageEnd);
	                    if (tpPages.length > 0) {
	                        tpPages[0].headerSize(columnHeaderHeight);
	                        rowPages.push(tpPages[0]);
	                        if (tpPages.length > 1) {
	                            tpPages = self._verticalPaginateCore(tpPages[1].itemStart(), eachRowEnd, repeatRowStart, repeatRowEnd, 3 , contentHeight, tpPages[0].itemEnd());
	                            rowPages = rowPages.concat(tpPages);
	                        }
	                    }
	                } else {
	                    rowPages = self._verticalPaginateCore(eachRowStart, eachRowEnd, repeatRowStart, repeatRowEnd, 3 , contentHeight, prePageEnd);
	                }
	                self._rowPages = self._rowPages.concat(rowPages);
	
	                if (rowPages.length > 0) {
	                    prePageEnd = rowPages[rowPages.length - 1].itemEnd();
	                }
	            }
	        },
	        _getRowHeaderWidth: function () {
	            var self = this, rowHeaderPages = self._horizontalPaginateCore(0, self._sheet.getColumnCount(2 ) - 1, -1, -1, 2 , self._contentWidth(), -1);
	            var rowHeaderWidth = 0;
	            for (var i = 0; i < rowHeaderPages.length; i++) {
	                rowHeaderWidth += rowHeaderPages[i].contentSize();
	            }
	            return rowHeaderWidth;
	        },
	        _getColumnHeaderHeight: function () {
	            var self = this, columnHeaderPages = self._verticalPaginateCore(0, self._sheet.getRowCount(1 ) - 1, -1, -1, 1 , self._contentHeight(), -1);
	            var columnHeaderWidth = 0;
	            for (var i = 0; i < columnHeaderPages.length; i++) {
	                columnHeaderWidth += columnHeaderPages[i].contentSize();
	            }
	            return columnHeaderWidth;
	        },
	        _horizontalPaginateCore: function (columnStart, columnEnd, repeatColumnStart, repeatColumnEnd, sheetArea, pageWidth, prePageEnd) {
	            var self = this;
	            var handleRepeatColumns = repeatColumnStart < columnStart;
	            var currentColumnWidth = 0;
	            var currentWidth = 0;
	            var contentWidth = 0;
	            var repeatColumnWidth = 0;
	            var tpPageSize = pageWidth;
	            var tpRepeatColumnStart;
	            var tpRepeatColumnEnd;
	            var prePageLastColumnLargeThanPage = false;
	            var page = keyword_null;
	            var pages = [];
	            if (columnStart > columnEnd) {
	                var tp = columnStart;
	                columnStart = columnEnd;
	                columnEnd = tp;
	            }
	            for (var currentColumn = columnStart; currentColumn <= columnEnd; currentColumn++) {
	                if (handleRepeatColumns && sheetArea === 3 ) {
	                    tpRepeatColumnStart = repeatColumnStart;
	                    tpRepeatColumnEnd = repeatColumnEnd;
	                    if (tpRepeatColumnStart !== -1 && tpRepeatColumnStart <= prePageEnd) {
	                        if (tpRepeatColumnEnd !== -1 && tpRepeatColumnEnd > prePageEnd) {
	                            tpRepeatColumnEnd = prePageEnd - 1;
	                        }
	                        if (page === keyword_null) {
	                            page = new PageInfo();
	                        }
	                        page.repeatItemStart(repeatColumnStart);
	                        page.repeatItemEnd(repeatColumnEnd);
	                        for (var i = tpRepeatColumnStart; i <= tpRepeatColumnEnd; i++) {
	                            var columnWith = self._getColumnWidth(i, sheetArea);
	                            if (i <= prePageEnd) {
	                                repeatColumnWidth += columnWith;
	                            }
	                        }
	                        tpPageSize -= repeatColumnWidth;
	                        handleRepeatColumns = false;
	                    }
	                }
	                currentColumnWidth = self._getColumnWidth(currentColumn, sheetArea);
	                if (currentColumnWidth > tpPageSize && (prePageLastColumnLargeThanPage || currentColumn === columnStart)) {
	                    prePageLastColumnLargeThanPage = false;
	                    var totalPaginatedColumnWidth = 0;
	                    while (currentColumnWidth - totalPaginatedColumnWidth >= tpPageSize) {
	                        if (page === keyword_null) {
	                            page = new PageInfo();
	                        }
	                        page.repeatItemStart(repeatColumnStart);
	                        page.repeatItemEnd(repeatColumnEnd);
	                        page.itemStart(currentColumn);
	                        page.itemEnd(currentColumn);
	                        page.contentSize(pageWidth);
	                        page.contentOffset(totalPaginatedColumnWidth);
	                        pages.push(page);
	                       
	                        totalPaginatedColumnWidth += tpPageSize;
	                        page = keyword_null;
	                        currentWidth = 0;
	                       
	                       
	                        handleRepeatColumns = true;
	                    }
	                    var remainingWidth = currentColumnWidth - totalPaginatedColumnWidth;
	                   
	                    if (remainingWidth === 0) {
	                        prePageEnd = currentColumn;
	                        continue;
	                    } else {
	                        prePageEnd = currentColumn - 1;
	                    }
	                    if (currentColumn === columnEnd) {
	                        if (page === keyword_null) {
	                            page = new PageInfo();
	                        }
	                        page.repeatItemStart(repeatColumnStart);
	                        page.repeatItemEnd(repeatColumnEnd);
	                        page.itemStart(currentColumn);
	                        page.itemEnd(currentColumn);
	                        page.contentSize(remainingWidth + repeatColumnWidth);
	                        page.contentOffset(totalPaginatedColumnWidth);
	                        pages.push(page);
	                        break;
	                    } else {
	                       
	                        currentColumn++;
	                        if (currentColumn <= columnEnd) {
	                            if (page === keyword_null) {
	                                page = new PageInfo();
	                            }
	                            page.repeatItemStart(repeatColumnStart);
	                            page.repeatItemEnd(repeatColumnEnd);
	                            currentWidth = remainingWidth;
	                            page.contentOffset(totalPaginatedColumnWidth);
	                            currentColumnWidth = self._getColumnWidth(currentColumn, sheetArea);
	                        } else {
	                            break;
	                        }
	                    }
	                }
	                currentWidth += currentColumnWidth;
	                if (currentWidth > tpPageSize || currentWidth === tpPageSize) {
	                    if (currentWidth > tpPageSize) {
	                        contentWidth = currentWidth - currentColumnWidth + repeatColumnWidth;
	                        currentColumn -= 1;
	                    } else {
	                        contentWidth = currentWidth + repeatColumnWidth;
	                    }
	                    if (page === keyword_null) {
	                        page = new PageInfo();
	                    }
	                    if (prePageEnd === -1) {
	                        page.itemStart(columnStart);
	                    } else {
	                        page.itemStart(prePageEnd + 1);
	                    }
	                    page.itemEnd(currentColumn);
	                    page.contentSize(contentWidth);
	                    pages.push(page);
	                    page = keyword_null;
	                    currentWidth = 0;
	                    repeatColumnWidth = 0;
	                    tpPageSize = pageWidth;
	                    handleRepeatColumns = true;
	                    prePageEnd = currentColumn;
	                    if (currentColumnWidth > tpPageSize) {
	                        prePageLastColumnLargeThanPage = true;
	                    }
	                } else if (currentColumn === columnEnd) {
	                    if (page === keyword_null) {
	                        page = new PageInfo();
	                    }
	                    contentWidth = currentWidth + repeatColumnWidth;
	                    if (prePageEnd === -1) {
	                        page.itemStart(columnStart);
	                    } else {
	                        page.itemStart(prePageEnd + 1);
	                    }
	                    page.itemEnd(currentColumn);
	                    page.contentSize(contentWidth);
	                    pages.push(page);
	                    page = keyword_null;
	                    currentWidth = 0;
	                    repeatColumnWidth = 0;
	                    tpPageSize = pageWidth;
	                    handleRepeatColumns = true;
	                }
	            }
	            return pages;
	        },
	        _verticalPaginateCore: function (rowStart, rowEnd, repeatRowStart, repeatRowEnd, sheetArea, pageHeight, prePageEnd) {
	            var self = this;
	            var handleRepeatColumns = repeatRowStart < rowStart;
	            var currentRowHeight = 0;
	            var currentHeight = 0;
	            var contentHeight = 0;
	            var repeatRowHeight = 0.0;
	            var tpPageSize = pageHeight;
	            var tpRepeatRowStart;
	            var tpRepeatRowEnd = repeatRowEnd;
	            var prePageLastRowLargeThanPage = false;
	            var page = keyword_null;
	            var pages = [];
	            if (rowStart > rowEnd) {
	                var tp = rowStart;
	                rowStart = rowEnd;
	                rowEnd = tp;
	            }
	            for (var currentRow = rowStart; currentRow <= rowEnd; currentRow++) {
	                if (handleRepeatColumns && sheetArea === 3 ) {
	                    tpRepeatRowStart = repeatRowStart;
	                    tpRepeatRowEnd = repeatRowEnd;
	                    if (tpRepeatRowStart !== -1 && tpRepeatRowStart <= prePageEnd) {
	                        if (tpRepeatRowEnd !== -1 && tpRepeatRowEnd > prePageEnd) {
	                            tpRepeatRowEnd = prePageEnd - 1;
	                        }
	                        if (page === keyword_null) {
	                            page = new PageInfo();
	                        }
	                        page.repeatItemStart(tpRepeatRowStart);
	                        page.repeatItemEnd(tpRepeatRowEnd);
	                        for (var i = tpRepeatRowStart; i <= tpRepeatRowEnd; i++) {
	                            var rowHeight = self._getRowHeight(i, sheetArea);
	                            if (i <= prePageEnd) {
	                                repeatRowHeight += rowHeight;
	                            }
	                        }
	                        tpPageSize -= repeatRowHeight;
	                        handleRepeatColumns = false;
	                    }
	                }
	                currentRowHeight = self._getRowHeight(currentRow, sheetArea);
	                if (currentRowHeight > tpPageSize && (prePageLastRowLargeThanPage || currentRow === rowStart)) {
	                    prePageLastRowLargeThanPage = false;
	                    var totalPaginatedRowHeight = 0;
	                    while (currentRowHeight - totalPaginatedRowHeight >= tpPageSize) {
	                        if (page === keyword_null) {
	                            page = new PageInfo();
	                        }
	                        page.repeatItemStart(repeatRowStart);
	                        page.repeatItemEnd(tpRepeatRowEnd);
	                        page.itemStart(currentRow);
	                        page.itemEnd(currentRow);
	                        page.contentSize(pageHeight);
	                        page.contentOffset(totalPaginatedRowHeight);
	                        pages.push(page);
	                       
	                        totalPaginatedRowHeight += tpPageSize;
	                        page = keyword_null;
	                        currentHeight = 0;
	                       
	                       
	                        handleRepeatColumns = true;
	                    }
	                    var remainingHeight = currentRowHeight - totalPaginatedRowHeight;
	                   
	                    if (remainingHeight === 0) {
	                        prePageEnd = currentRow;
	                        continue;
	                    } else {
	                        prePageEnd = currentRow - 1;
	                    }
	                    if (currentRow === rowEnd) {
	                        if (page === keyword_null) {
	                            page = new PageInfo();
	                        }
	                        page.repeatItemStart(repeatRowStart);
	                        page.repeatItemEnd(repeatRowEnd);
	                        page.itemStart(currentRow);
	                        page.itemEnd(currentRow);
	                        page.contentSize(remainingHeight + repeatRowHeight);
	                        page.contentOffset(totalPaginatedRowHeight);
	                        pages.push(page);
	                        break;
	                    } else {
	                        currentRow++;
	                        if (currentRow <= rowEnd) {
	                            if (page === keyword_null) {
	                                page = new PageInfo();
	                            }
	                            page.repeatItemStart(repeatRowStart);
	                            page.repeatItemEnd(tpRepeatRowEnd);
	                            currentHeight = remainingHeight;
	                            page.contentOffset(totalPaginatedRowHeight);
	                            currentRowHeight = self._getRowHeight(currentRow, sheetArea);
	                        } else {
	                            break;
	                        }
	                    }
	                }
	                currentHeight += currentRowHeight;
	                if (currentHeight > tpPageSize || currentHeight === tpPageSize) {
	                    if (currentHeight > tpPageSize) {
	                        contentHeight = currentHeight - currentRowHeight + repeatRowHeight;
	                        currentRow -= 1;
	                    } else {
	                        contentHeight = currentHeight + repeatRowHeight;
	                    }
	                    if (page === keyword_null) {
	                        page = new PageInfo();
	                    }
	                    if (prePageEnd === -1) {
	                        page.itemStart(rowStart);
	                    } else {
	                        page.itemStart(prePageEnd + 1);
	                    }
	                    page.itemEnd(currentRow);
	                    page.contentSize(contentHeight);
	                    pages.push(page);
	                    page = keyword_null;
	                    currentHeight = 0;
	                    repeatRowHeight = 0;
	                    tpPageSize = pageHeight;
	                    handleRepeatColumns = true;
	                    prePageEnd = currentRow;
	                    if (currentRowHeight > tpPageSize) {
	                        prePageLastRowLargeThanPage = true;
	                    }
	                } else if (currentRow === rowEnd) {
	                    if (page === keyword_null) {
	                        page = new PageInfo();
	                    }
	                    contentHeight = currentHeight + repeatRowHeight;
	                    if (prePageEnd === -1) {
	                        page.itemStart(rowStart);
	                    } else {
	                        page.itemStart(prePageEnd + 1);
	                    }
	                    page.itemEnd(currentRow);
	                    page.contentSize(contentHeight);
	                    pages.push(page);
	                    page = keyword_null;
	                    currentHeight = 0;
	                    repeatRowHeight = 0;
	                    tpPageSize = pageHeight;
	                    handleRepeatColumns = true;
	                }
	            }
	            return pages;
	        },
	        _getColumnWidthCore: function (c, sheetArea) {
	            var self = this, sheet = self._sheet, defaults = sheet.defaults;
	            var isVisible = sheet.getColumnVisible(c, sheetArea);
	            if (sheetArea === 3  && c < sheet.getColumnCount() && sheet.columnOutlines) {
	                isVisible = isVisible && !sheet.columnOutlines.isCollapsed(c);
	            }
	            var columnWidth = 0;
	            if (isVisible) {
	                columnWidth = sheet.getColumnWidth(c, sheetArea);
	                if (self._printSettings.bestFitColumns()) {
	                    var isRowHeader = sheetArea === 2 ;
	                    var autoFitValue = Sheets_util._getColumnAutoFitValue(c, sheet, isRowHeader ? 2  : 3 , 1 );
	                    if (autoFitValue <= 0) {
	                        if (isRowHeader) {
	                            columnWidth = defaults.rowHeaderColWidth;
	                        } else {
	                            columnWidth = defaults.colWidth;
	                        }
	                    } else {
	                        columnWidth = autoFitValue;
	                    }
	                }
	            }
	            return columnWidth;
	        },
	        _getColumnWidth: function (c, sheetArea) {
	            var self = this;
	            var cache = self._colWidthCache[sheetArea];
	            if (!cache) {
	                cache = self._colWidthCache[sheetArea] = {};
	            }
	            var width = cache[c];
	            if (isUndefined(width)) {
	                width = cache[c] = self._getColumnWidthCore(c, sheetArea) * self._horizontalZoomFactor;
	            }
	            return width;
	        },
	        _getRowHeightCore: function (r, sheetArea) {
	            var self = this, sheet = self._sheet, defaults = sheet.defaults, defaultRowHeight = defaults.rowHeight, defaultColHeaderRowHeight = defaults.colHeaderRowHeight;
	            var isVisible = sheet.getRowVisible(r, sheetArea);
	            if (sheetArea === 3  && r < sheet.getRowCount() && sheet.rowOutlines) {
	                isVisible = isVisible && !(sheet._isRowFilterOut && sheet._isRowFilterOut(r)) && !sheet.rowOutlines.isCollapsed(r);
	            }
	            var rowHeight = 0;
	            if (isVisible) {
	                rowHeight = sheet.getRowHeight(r, sheetArea);
	                if (self._printSettings.bestFitRows()) {
	                    var isColumnHeader = sheetArea === 1 ;
	                    var autoFitValue = Sheets_util._getRowAutoFitValue(r, sheet, isColumnHeader ? 1  : 3 , 1 );
	                    if (autoFitValue <= 0) {
	                        if (isColumnHeader) {
	                            rowHeight = defaultColHeaderRowHeight;
	                        } else {
	                            rowHeight = defaultRowHeight;
	                        }
	                    } else {
	                        var height = autoFitValue;
	                        if (isColumnHeader) {
	                            if (height < defaultColHeaderRowHeight) {
	                                height = defaultColHeaderRowHeight;
	                            }
	                        } else if (height < defaultRowHeight) {
	                            height = defaultRowHeight;
	                        }
	                        rowHeight = height;
	                    }
	                }
	            }
	            return rowHeight;
	        },
	        _getRowHeight: function (r, sheetArea) {
	            var self = this;
	            var cache = self._rowHeightCache[sheetArea];
	            if (!cache) {
	                cache = self._rowHeightCache[sheetArea] = {};
	            }
	            var height = cache[r];
	            if (isUndefined(height)) {
	                height = cache[r] = self._getRowHeightCore(r, sheetArea) * self._verticalZoomFactor;
	            }
	            return height;
	        }
	    };
	
	    function _splitByPageBreak(start, end, pageBreakArray) {
	        var result = [], i, length, index;
	        result.push(start);
	        for (i = 0, length = pageBreakArray.length; i < length; i++) {
	            index = pageBreakArray[i];
	            if (index - 1 >= start) {
	                result.push(index - 1);
	                result.push(index);
	            }
	        }
	        result.push(end);
	        return result;
	    }
	
	    $_extend(WorksheetPaginator.prototype, WorksheetPaginatorPrototype);
	   
	
	   
	    function WorkbookPaginator(workbook) {
	        this._workbook = workbook;
	        this._pageCount = 0;
	        var sheetPaginators = [], i, count, sheet, outParam;
	        for (i = 0, count = workbook.getSheetCount(); i < count; i++) {
	            sheet = workbook.getSheet(i);
	            if (sheet.visible()) {
	                outParam = {};
	                initPrintingSize(sheet, sheet.printInfo(), outParam);
	                sheetPaginators.push(new WorksheetPaginator(workbook, i, outParam.paperSize, outParam.pageImageableArea));
	            }
	        }
	        this._sheetPaginators = sheetPaginators;
	    }
	
	    var WorkbookPaginatorPrototype = {
	        paginate: function () {
	            var sheetPaginators = this._sheetPaginators, i, count, paginator;
	            for (i = 0, count = sheetPaginators.length; i < count; i++) {
	                paginator = sheetPaginators[i];
	                paginator.paginate();
	                this._pageCount += paginator.pageCount();
	            }
	        },
	        pageCount: function () {
	            return this._pageCount;
	        },
	        getPage: function (pageNumber) {
	            var outParam = {pageNumberInSheet: -1};
	            var sheetPaginator = this.getSheetPaginator(pageNumber, outParam);
	            var pageNumberInSheet = outParam.pageNumberInSheet;
	            var sheetPageInfo = keyword_null;
	            if (sheetPaginator) {
	                sheetPageInfo = sheetPaginator.getPage(pageNumberInSheet);
	                if (sheetPageInfo.sheetIndex() > 0) {
	                    sheetPageInfo.pageNumber(pageNumber);
	                    var sheetPaginators = this._sheetPaginators;
	                    for (var i = 0, count = sheetPaginators.length; i < count; i++) {
	                        var paginator = sheetPaginators[i];
	                        if (sheetPageInfo.sheetIndex() < paginator.sheetIndex()) {
	                            sheetPageInfo.rowPageIndex(sheetPageInfo.rowPageIndexInSheet() + paginator.verticalPageCount());
	                            sheetPageInfo.columnPageIndex(sheetPageInfo.columnPageIndexInSheet() + paginator.horizontalPageCount());
	                        }
	                    }
	                }
	            }
	            return sheetPageInfo;
	        },
	        getSheetPaginator: function (pageNumber, outParam) {
	            var currentTotalCount = 0;
	            var pageNumberInSheet = -1;
	            var sheetPaginators = this._sheetPaginators;
	            for (var i = 0, count = sheetPaginators.length; i < count; i++) {
	                var paginator = sheetPaginators[i];
	                pageNumberInSheet = pageNumber - currentTotalCount;
	                if (pageNumberInSheet >= 0 && pageNumberInSheet < paginator.pageCount()) {
	                    outParam.pageNumberInSheet = pageNumberInSheet;
	                    return paginator;
	                }
	                currentTotalCount += paginator.pageCount();
	            }
	            return keyword_null;
	        }
	    };
	    $_extend(WorkbookPaginator.prototype, WorkbookPaginatorPrototype);
	   
	
	   
	    function ChartsProcessor(charts) {
	        this._charts = charts;
	    }
	    ChartsProcessor.prototype._processAChart = function(container, chart) {
	        var div = document.createElement("div");
	        div.style.width = chart.width() + "px";
	        div.style.height = chart.height() + "px";
	        container.appendChild(div);
	        chart._initFlexDV(div, chart.sheet().printInfo().qualityFactor(), false);
	        var canvas = div.getElementsByTagName("canvas")[0];
	        chart._dispose();
	        chart._canvas = canvas;
	    };
	    ChartsProcessor.prototype._processAllCharts = function () {
	        var self = this;
	        var container = self._container;
	        if (!container) {
	            container = self._container = document.createElement("div");
	            container.style.width = "0px";
	            container.style.height = "0px";
	            container.style.overflow = "hidden";
	            document.body.appendChild(container);
	        }
	        self._charts.forEach(function (chart) {
	            self._processAChart(container, chart);
	        });
	        container.innerHTML = "";  
	    };
	    ChartsProcessor.prototype._dispose = function () {
	        var self = this;
	        self._charts = keyword_null;
	
	        var container = self._container;
	        if (container) {
	            if (container.parentElement) {
	                container.parentElement.removeChild(container);
	            }
	            self._container = keyword_null;
	        }
	    };
	   
	
	   
	    function _getIframeDocument(iframe) {
	        var doc = iframe.contentDocument;
	        if (!doc.head) {
	            doc.write('<head></head>');
	        }
	        if (!doc.body) {
	            doc.write('<body></body>');
	        }
	        return doc;
	    }
	
	    function _getSheetPaginator(paginator, pageNumber) {
	        var sheetPaginator;
	        if (paginator instanceof WorksheetPaginator) {
	            sheetPaginator = paginator;
	        } else if (paginator instanceof WorkbookPaginator) {
	            sheetPaginator = paginator.getSheetPaginator(pageNumber, {});
	        }
	        return sheetPaginator;
	    }
	
	    function _createContainer(doc, width, height, className) {
	        var div = createElement(doc, str_div);
	        var divStyle = div.style;
	        divStyle.border = '1px transparent solid';
	        divStyle.boxSizing = 'border-box';
	        divStyle.width = width + str_px;
	        divStyle.height = height + str_px;
	        div.className = className;
	        doc.body.appendChild(div);
	        return div;
	    }
	
	    function _createContentContainer(doc, container, width, height, marginLeft, marginTop) {
	        var contentContainer = createElement(doc, str_div);
	        var contentContainerStyle = contentContainer.style;
	        contentContainerStyle.marginLeft = marginLeft + str_px;
	        contentContainerStyle.width = width + str_px;
	        contentContainerStyle.marginTop = marginTop + str_px;
	        contentContainerStyle.height = height + str_px;
	        container.appendChild(contentContainer);
	        return contentContainer;
	    }
	
	    function _addHeader(doc, width, height, qualityFactor) {
	        var canvas = createElement(doc, str_canvas);
	        var $headerCanvas = $(canvas);
	        var canvasStyle = canvas.style;
	        canvasStyle.height = height + str_px;
	        canvasStyle.width = width + str_px;
	        canvas.width = $headerCanvas.width() * qualityFactor;
	        canvas.height = $headerCanvas.height() * qualityFactor;
	        canvas.getContext(str_2d).scale(qualityFactor, qualityFactor);
	        return canvas;
	    }
	
	    function _addFooter(doc, width, height, qualityFactor) {
	        var canvas = createElement(doc, str_canvas);
	        var $footerCanvas = $(canvas);
	        var canvasStyle = canvas.style;
	        canvasStyle.height = height + str_px;
	        canvasStyle.width = width + str_px;
	        canvas.width = $footerCanvas.width() * qualityFactor;
	        canvas.height = $footerCanvas.height() * qualityFactor;
	        canvas.getContext(str_2d).scale(qualityFactor, qualityFactor);
	        return canvas;
	    }
	
	    function _createBodyContainer(doc, container, width, height) {
	        var bodyContainer = createElement(doc, str_div);
	        var bodyContainerStyle = bodyContainer.style;
	        bodyContainerStyle.width = width + str_px;
	        bodyContainerStyle.height = height + str_px;
	        container.appendChild(bodyContainer);
	        return bodyContainer;
	    }
	
	    function _addBody(sheet, doc, container, width, height, showBorder, centering, horizontalZoomFactor, verticalZoomFactor, qualityFactor) {
	        var borderWidth = 0;
	        if (showBorder) {
	            borderWidth = 1;
	        } else {
	            var sheetAreaOffset = sheet.options.sheetAreaOffset;
	            width += sheetAreaOffset.left;
	            height += sheetAreaOffset.top;
	        }
	        var containerStyle = container.style;
	        if (centering === 1  || centering === 3 ) {
	            containerStyle.boxSizing = 'border-box';
	            containerStyle.paddingLeft = ($(container).width() - width - borderWidth * 2) / 2 + str_px;
	        }
	        if (centering === 2  || centering === 3 ) {
	            containerStyle.boxSizing = 'border-box';
	            containerStyle.paddingTop = ($(container).height() - height - borderWidth * 2) / 2 + str_px;
	        }
	        var div = createElement(doc, str_div);
	        var divStyle = div.style;
	        divStyle.width = width + str_px;
	        divStyle.height = height + str_px;
	        divStyle.border = borderWidth + 'px black solid';
	        var canvas = createElement(doc, str_canvas);
	        var canvasStyle = canvas.style;
	        canvasStyle.margin = borderWidth + str_px;
	        canvas.width = 1 / horizontalZoomFactor * (width - 2 * borderWidth);
	        canvas.height = 1 / verticalZoomFactor * (height - 2 * borderWidth);
	        canvasStyle.width = (width - 2 * borderWidth) + str_px;
	        canvasStyle.height = (height - 2 * borderWidth) + str_px;
	        var scaleX = qualityFactor, scaleY = qualityFactor;
	        if (Sheets_util_browser.chrome) {
	            var pixelPointCount = canvas.width * scaleX * canvas.height * scaleY;
	            while (pixelPointCount < 65792) {
	                pixelPointCount *= 2;
	                scaleY *= 2;
	            }
	        }
	        canvas._actualWidth = canvas.width;
	        canvas._actualHeight = canvas.height;
	        canvas.width *= scaleX;
	        canvas.height *= scaleY;
	
	        canvas.getContext(str_2d).scale(scaleX, scaleY);
	    
	        container.appendChild(div);
	        return canvas;
	    }
	
	    function _generateHeaderFooterContents(pageNumber, source, image, sheetPageInfo, pageCount) {
	        var contents = [];
	        if (!source) {
	            return contents;
	        }
	        var COMMAND_PREFIX = '&', COLOR_PREFIX = 'K', STRIKETHROUGH_PREFIX = 'S', UNDERLINE_PREFIX = 'U', FONT_PREFIX = '"', BOLD_PREFIX = 'B', ITALIC_PREFIX = 'I', DATE_PREFIX = 'D', TIME_PREFIX = 'T', CURRENT_PAGE_PREFIX = 'P', PAGE_COUNT_PREFIX = 'N', PICTURE_PREFIX = 'G', WORKBOOK_NAME_CMD_PREFIX = 'F', WORKSHEET_NAME_CMD_PREFIX = 'A';
	        var COMMAND_PREFIX_LENGTH = COMMAND_PREFIX.length;
	        var FONT_SIZE_REGEX = /&[0-9]+/;
	        var RGB_COLOR_REGEX = /&K[0-9A-Fa-f]{6}/;
	        var FONT_REGEX = /&".+"/;
	        var fontName = str_empty, isStrikethrough = false, fontSize = 0, isBold = false, isItalic = false, isUnderline = false, foreground = 'black';
	        var text = str_empty;
	        while (source) {
	            var fontNameNext = fontName;
	            var isStrikethroughNext = isStrikethrough;
	            var fontSizeNext = fontSize;
	            var isUnderlineNext = isUnderline;
	            var isBoldNext = isBold;
	            var isItalicNext = isItalic;
	            var foregroundNext = foreground;
	            var index = source.indexOf(COMMAND_PREFIX);
	            if (index < 0) {
	                index = source.length;
	            }
	            text += source.substr(0, index);
	            var cmd = index + 1 < source.length ? source.substr(index + 1, 1) : str_empty;
	            cmd = cmd.toUpperCase();
	            var nextIndex = -1;
	            var submit = false;
	            var submitImage = false, result, firstMatch, now = new Date();
	            if ('1234567890'.indexOf(cmd) > -1) {
	               
	                result = FONT_SIZE_REGEX.exec(source.substr(index));
	                if (result && result.length > 0) {
	                    firstMatch = result[0];
	                    fontSizeNext = parseFloatFn(firstMatch.substr(1));
	                    submit = true;
	                    nextIndex = index + firstMatch.length;
	                } else {
	                    nextIndex = index + COMMAND_PREFIX_LENGTH;
	                }
	            } else if (cmd === COLOR_PREFIX) {
	               
	                result = RGB_COLOR_REGEX.exec(source.substr(index));
	                if (result && result.length > 0) {
	                    firstMatch = result[0];
	                    foregroundNext = '#' + firstMatch.substr(2, 2) + firstMatch.substr(4, 2) + firstMatch.substr(6, 2);
	                    submit = true;
	                    nextIndex = index + firstMatch.length;
	                } else {
	                    nextIndex = index + COMMAND_PREFIX_LENGTH;
	                }
	            } else if (cmd === STRIKETHROUGH_PREFIX) {
	                isStrikethroughNext = !isStrikethroughNext;
	                submit = true;
	                nextIndex = index + COMMAND_PREFIX_LENGTH + STRIKETHROUGH_PREFIX.length;
	            } else if (cmd === UNDERLINE_PREFIX) {
	                isUnderlineNext = !isUnderlineNext;
	                submit = true;
	                nextIndex = index + COMMAND_PREFIX_LENGTH + UNDERLINE_PREFIX.length;
	
	            } else if (cmd === FONT_PREFIX) {
	               
	                result = FONT_REGEX.exec(source.substr(index));
	                if (result && result.length > 0) {
	                    firstMatch = result[0];
	                    fontNameNext = firstMatch.substr(2, firstMatch.length - 3);
	                    submit = true;
	                    nextIndex = index + firstMatch.length;
	                } else {
	                    nextIndex = index + COMMAND_PREFIX_LENGTH;
	                }
	            } else if (cmd === BOLD_PREFIX) {
	                isBoldNext = !isBoldNext;
	                submit = true;
	                nextIndex = index + COMMAND_PREFIX_LENGTH + BOLD_PREFIX.length;
	            } else if (cmd === ITALIC_PREFIX) {
	                isItalicNext = !isItalicNext;
	                submit = true;
	                nextIndex = index + COMMAND_PREFIX_LENGTH + ITALIC_PREFIX.length;
	            } else if (cmd === COMMAND_PREFIX) {
	                text += COMMAND_PREFIX;
	                submit = true;
	                nextIndex = index + COMMAND_PREFIX_LENGTH + COMMAND_PREFIX_LENGTH;
	            } else if (cmd === DATE_PREFIX) {
	                text += now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate();
	                submit = true;
	                nextIndex = index + COMMAND_PREFIX_LENGTH + DATE_PREFIX.length;
	            } else if (cmd === TIME_PREFIX) {
	                text += now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
	                submit = true;
	                nextIndex = index + COMMAND_PREFIX_LENGTH + TIME_PREFIX.length;
	            } else if (cmd === CURRENT_PAGE_PREFIX) {
	                text += pageNumber;
	                submit = true;
	                nextIndex = index + COMMAND_PREFIX_LENGTH + CURRENT_PAGE_PREFIX.length;
	            } else if (cmd === PAGE_COUNT_PREFIX) {
	                text += pageCount;
	                submit = true;
	                nextIndex = index + COMMAND_PREFIX_LENGTH + PAGE_COUNT_PREFIX.length;
	            } else if (cmd === PICTURE_PREFIX) {
	                if (image) {
	                    submit = true;
	                    submitImage = true;
	                }
	                nextIndex = index + COMMAND_PREFIX_LENGTH + PICTURE_PREFIX.length;
	            } else if (cmd === WORKBOOK_NAME_CMD_PREFIX) {
	                text += sheetPageInfo.workbookName() || str_empty;
	                submit = true;
	                nextIndex = index + COMMAND_PREFIX_LENGTH + WORKBOOK_NAME_CMD_PREFIX.length;
	            } else if (cmd === WORKSHEET_NAME_CMD_PREFIX) {
	                text += sheetPageInfo.worksheetName() || str_empty;
	                submit = true;
	                nextIndex = index + COMMAND_PREFIX_LENGTH + WORKSHEET_NAME_CMD_PREFIX.length;
	            } else {
	                nextIndex = index + COMMAND_PREFIX_LENGTH;
	            }
	
	            if (nextIndex >= source.length) {
	                source = str_empty;
	            } else {
	                if (nextIndex < 0) {
	                    nextIndex = index + COMMAND_PREFIX_LENGTH;
	                }
	                source = source.substr(nextIndex);
	            }
	            if (text && (submit || !source)) {
	                contents.push({
	                    text: text,
	                    underline: isUnderline,
	                    strikethrough: isStrikethrough,
	                    fontFamily: fontName,
	                    fontSize: fontSize > 0 ? fontSize + str_px : str_empty,
	                    fontWeight: isBold ? 'bold' : str_empty,
	                    fontStyle: isItalic ? 'italic' : str_empty,
	                    color: foreground
	                });
	                text = str_empty;
	            }
	            if (submitImage && image) {
	                contents.push({image: image});
	            }
	            fontName = fontNameNext;
	            isStrikethrough = isStrikethroughNext;
	            fontSize = fontSizeNext;
	            isUnderline = isUnderlineNext;
	            isBold = isBoldNext;
	            isItalic = isItalicNext;
	            foreground = foregroundNext;
	        }
	        return contents;
	    }
	
	    function _renderHeaderFooterContents(ctx, contents, x, y, width, height, horizontalAlign, verticalAlign, imageLoader) {
	        var lines = [];
	        var processedContents = [];
	        for (var i = 0, count = contents.length; i < count; i++) {
	            var tempContent = contents[i], text = tempContent.text;
	            if (text) {
	                var containRN = text.indexOf('\r\n') >= 0;
	                if (containRN || text.indexOf('\n') >= 0) {
	                    var textArray = containRN ? text.split('\r\n') : text.split('\n');
	                    if (textArray[0]) {
	                        processedContents.push($_extend({}, tempContent, {text: textArray[0]}));
	                    }
	                    lines.push(processedContents);
	                    processedContents = [];
	
	                    for (var j = 1, length = textArray.length; j < length - 1; j++) {
	                        if (textArray[j]) {
	                            lines.push([$_extend({}, tempContent, {text: textArray[j]})]);
	                        }
	                    }
	
	                    if (textArray[textArray.length - 1]) {
	                        processedContents.push($_extend({}, tempContent, {text: textArray[textArray.length - 1]}));
	                    }
	                } else {
	                    processedContents.push(tempContent);
	                }
	            } else {
	                processedContents.push(tempContent);
	            }
	        }
	        if (processedContents.length > 0) {
	            lines.push(processedContents);
	           
	        }
	        for (var k = 0, lineCount = lines.length; k < lineCount; k++) {
	            _renderHeaderFooterContentsImp(ctx, lines[k], x, y + k * height / lineCount, width, height / lineCount, horizontalAlign, verticalAlign, imageLoader);
	        }
	    }
	    function _renderHeaderFooterContentsImp(ctx, contents, x, y, width, height, horizontalAlign, verticalAlign, imageLoader) {
	        var fontArray = [], textHeightArray = [], textWidthArray = [];
	        var imageSize = Math_min(width, height) - 2;
	        var startX = x;
	        if (horizontalAlign === 1 ) {
	            startX = x + width / 2;
	        } else if (horizontalAlign === 2 ) {
	            startX = x + width;
	        }
	        var maxHeight = imageSize, i, count, textWidth, textHeight, tempContent, image, text;
	        for (i = 0, count = contents.length; i < count; i++) {
	            tempContent = contents[i];
	            image = tempContent.image;
	            text = tempContent.text;
	            var fontFamily = tempContent.fontFamily, fontSize = tempContent.fontSize, fontWeight = tempContent.fontWeight,
	                fontStyle = tempContent.fontStyle;
	            if (image) {
	                if (horizontalAlign === 1 ) {
	                    startX -= imageSize / 2;
	                } else if (horizontalAlign === 2 ) {
	                    startX -= imageSize;
	                }
	            } else if (text) {
	                var font = _buildFontString(fontFamily, fontSize, fontWeight, fontStyle);
	                fontArray[i] = font;
	                Sheets_util._setContextFont(ctx, font);
	                textHeight = parseFloatFn(fontSize || '13.3px');
	                if (maxHeight < textHeight) {
	                    maxHeight = textHeight;
	                }
	                textHeightArray[i] = textHeight;
	                textWidth = ctx.measureText(text).width;
	                textWidthArray[i] = textWidth;
	                if (horizontalAlign === 1 ) {
	                    startX -= textWidth / 2;
	                } else if (horizontalAlign === 2 ) {
	                    startX -= textWidth;
	                }
	            }
	        }
	        var startY = y + maxHeight / 2;
	        if (verticalAlign === 1 ) {
	            startY = y + height / 2;
	        } else if (verticalAlign === 2 ) {
	            startY = y + height - maxHeight / 2;
	        }
	        ctx.save();
	        ctx.textAlign = 'left';
	        ctx.textBaseline = 'middle';
	        for (i = 0, count = contents.length; i < count; i++) {
	            tempContent = contents[i];
	            image = tempContent.image;
	            text = tempContent.text;
	            var underline = tempContent.underline,
	                strikethrough = tempContent.strikethrough, color = tempContent.color;
	            if (image) {
	                _paintImage(ctx, imageLoader, image, startX, startY - imageSize / 2, imageSize, imageSize);
	                startX += imageSize;
	            } else if (text) {
	                ctx.beginPath();
	                ctx.font = fontArray[i];
	                ctx.fillStyle = color;
	                ctx.fillText(text, startX, startY);
	                textHeight = textHeightArray[i];
	                textWidth = textWidthArray[i];
	                if (underline || strikethrough) {
	                    ctx.beginPath();
	                    ctx.moveTo(startX, strikethrough ? startY : startY + textHeight / 2);
	                    ctx.lineTo(startX + textWidth, strikethrough ? startY : startY + textHeight / 2);
	                    ctx.stroke();
	                }
	                startX += textWidth;
	            }
	        }
	        ctx.restore();
	    }
	
	    function _paintImage(ctx, imageLoader, imageSrc, destX, destY, destWidth, destHeight) {
	        if (imageLoader._getState(imageSrc)) {
	            var bkImg = imageLoader._getImage(imageSrc);
	            try {
	                ctx.drawImage(bkImg, 0, 0, bkImg.width, bkImg.height, destX, destY, destWidth, destHeight);
	            } catch (ex) {
	               
	            }
	        } else {
	            imageLoader._addImage(imageSrc);
	        }
	    }
	
	    function _buildFontString(fontFamily, fontSize, fontWeight, fontStyle) {
	        if (!fontFamily) {
	            fontFamily = 'Arial';
	        }
	        if (!fontSize) {
	            fontSize = '13.3px';
	        }
	        var f = str_empty;
	        var normal = 'normal';
	        var str_space = ' ';
	        var defaultFontWeight = '400';
	        if (fontStyle !== normal) {
	            f = fontStyle;
	        }
	        if (fontWeight !== normal && fontWeight !== defaultFontWeight) {
	            f += (f ? str_space : str_empty) + fontWeight;
	        }
	        f += (f ? str_space : str_empty) + fontSize;
	        f += str_space + fontFamily;
	        return f;
	    }
	
	    function _applyBlackAndWhite(ctx, rect) {
	        var imageData = ctx.getImageData(rect.x, rect.y, rect.width, rect.height);
	        var data = imageData.data;
	        for (var i = 0; i < data.length - 4; i += 4) {
	            var gray = Math_floor((data[i] * 30 + data[i + 1] * 59 + data[i + 2] * 11 + 50) / 100);
	            data[i] = gray;
	            data[i + 1] = gray;
	            data[i + 2] = gray;
	        }
	        ctx.putImageData(imageData, rect.x, rect.y);
	    }
	
	    function _paintPicturesImp(sheet, ctx, clipRect, rowViewportIndex, colViewportIndex, imageLoader) {
	        var cachePool = sheet._cachePool, zoomFactor = sheet.zoom(), colLayouts = sheet._getViewportColumnLayout(colViewportIndex), rowLayouts = sheet._getViewportRowLayout(rowViewportIndex), viewportLeftColLayout = colLayouts[0], viewportRightColLayout = colLayouts[colLayouts.length - 1], viewportTopRowLayout = rowLayouts[0], viewportBottomRowLayout = rowLayouts[rowLayouts.length - 1];
	        iteratePicturesAndCharts(sheet, function (floatingObject) {
	            if (floatingObject.isVisible() && floatingObject.canPrint()) {
	               
	                var x = 0, y = 0, width = floatingObject.width() * zoomFactor, height = floatingObject.height() * zoomFactor;
	                var startColumn = floatingObject.startColumn(), startColumnLayout = colLayouts.findCol(startColumn);
	                if (startColumnLayout) {
	                    x = startColumnLayout.x;
	                } else if (startColumn < viewportLeftColLayout.col) {
	                    x = viewportLeftColLayout.x;
	                    for (var c = viewportLeftColLayout.col - 1; c >= startColumn; c--) {
	                        x -= cachePool._getZoomColWidth(c);
	                    }
	                } else {
	                    x = viewportRightColLayout.x;
	                    for (var col = viewportRightColLayout.col + 1; col <= startColumn; col++) {
	                        x += cachePool._getZoomColWidth(col);
	                    }
	                }
	                x += floatingObject.startColumnOffset() * zoomFactor;
	                var startRow = floatingObject.startRow(), startRowLayout = rowLayouts.findRow(startRow);
	                if (startRowLayout) {
	                    y = startRowLayout.y;
	                } else if (startRow < viewportTopRowLayout.row) {
	                    y = viewportTopRowLayout.y;
	                    for (var r = viewportTopRowLayout.row - 1; r >= startRow; r--) {
	                        y -= cachePool._getZoomRowHeight(r);
	                    }
	                } else {
	                    y = viewportBottomRowLayout.y;
	                    for (var row = viewportBottomRowLayout.row + 1; row <= startRow; row++) {
	                        y += cachePool._getZoomRowHeight(row);
	                    }
	                }
	                y += floatingObject.startRowOffset() * zoomFactor;
	               
	                if (clipRect && clipRect.intersect(x, y, width, height)) {
	                    ctx.save();
	                    ctx.rect(clipRect.x, clipRect.y, clipRect.width, clipRect.height);
	                    ctx.clip();
	                    ctx.beginPath();
	                    if (floatingObject.typeName === '1') {
	                        var src = floatingObject._rotatedSrc || floatingObject.src();
	                        if (src) {
	                            _paintImage(ctx, imageLoader, src, x, y, width, height);
	                        }
	                    } else if (floatingObject.typeName === '2' ) {
	                        var canvas = floatingObject._canvas;
	                        if (canvas) {
	                            try {
	                                ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, x, y, width, height);
	                            } catch (ex) {
	                               
	                            }
	                        }
	                    }
	                    ctx.restore();
	                }
	            }
	        });
	    }
	    
	    function _adjustStartColumnOffsetAfterHideColumn(sheet, column) {
	        var offsetArray = [], columnWidth = sheet._getActualColumnWidth(column);
	        iteratePicturesAndCharts(sheet, function (floatingObject) {
	            if (floatingObject.startColumn() <= column && column <= floatingObject.endColumn()) {
	                offsetArray.push({type: "startColumnOffset", floatingObject: floatingObject, offset: floatingObject.startColumnOffset()});                
	                floatingObject.startColumnOffset(floatingObject.startColumnOffset() - columnWidth);
	            }
	        });
	        return offsetArray;
	    }
	    
	    function _adjustStartRowOffsetAfterHideRow(sheet, row) {
	        var offsetArray = [], rowHeight = sheet._getActualRowHeight(row);
	        iteratePicturesAndCharts(sheet, function (floatingObject) {
	            if (floatingObject.startRow() <= row && row <= floatingObject.endRow()) {
	                offsetArray.push({type: "startRowOffset", floatingObject: floatingObject, offset: floatingObject.startRowOffset()});
	                floatingObject.startRowOffset(floatingObject.startRowOffset() - rowHeight);
	            }
	        });
	        return offsetArray;
	    }
	
	    function _autoFitColumn(sheet, columns, isRowHeader, autoFitType) {
	        sheet._commandManager().execute({cmd:'autoFitColumn', sheetName: sheet.name(), columns: columns, rowHeader: isRowHeader, autoFitType: autoFitType});
	    }
	
	    function _autoFitRow(sheet, rows, isColHeader, autoFitType) {
	        sheet._commandManager().execute({cmd: 'autoFitRow', sheetName: sheet.name(), rows: rows, columnHeader: isColHeader, autoFitType: autoFitType});
	    }
	
	    function _createAlternativeImgElement(doc, canvas, imageLoader, needMargin) {
	        var src = canvas.toDataURL();
	        var imgElement = doc.createElement('img');
	        if (needMargin) {
	            imgElement.style.margin = canvas.style.margin;
	        }
	        imgElement.style.width = canvas.style.width;
	        imgElement.style.height = canvas.style.height;
	        imgElement.src = src;
	        if (!imageLoader._getState(src)) {
	            imageLoader._addImage(src);
	        }
	        return imgElement;
	    }
	    function calcPageNumbers(paginator, workbook) {
	        var pageNumbers = [];
	        var pageNum = 1, sheetIndex = -1;
	        for (var index = 0, pageCount = paginator.pageCount(); index < pageCount; index++) {
	            var sheetPageInfo = paginator.getPage(index);
	            var currentSheetIndex = sheetPageInfo.sheetIndex();
	            if (sheetIndex !== currentSheetIndex) {
	                var sheet = workbook.getSheet(currentSheetIndex);
	                var printInfo = sheet.printInfo();
	                var firstPageNumber = printInfo.firstPageNumber();
	                if (firstPageNumber !== 1 || printInfo._isFirstPageNumberSet) {
	                    pageNum = firstPageNumber;
	                }
	                sheetIndex = currentSheetIndex;
	            }
	            pageNumbers[index] = pageNum++;
	        }
	        return pageNumbers;
	    }
	
	    function PrintPagePresenter(workbook, paginator) {
	       
	        this._cache = {};
	        this._workbook = workbook;
	        this._paginator = paginator;
	    }
	
	    var PrintPagePresenterPrototype = {
	        initBuild: function () {
	            var self = this;
	            var doc = _getIframeDocument(self._getIframe());
	            doc.open();
	            doc.write('<head><style>body{margin:0} .gc-printPage{page-break-after: always} .grayscale{filter: grayscale(100%)}</style></head><body></body>');
	            doc.close();
	        },
	        initContainer: function (paperSize, margin) {
	            var self = this;
	            var doc = _getIframeDocument(self._getIframe());
	            var paperWidth = paperSize.width, paperHeight = paperSize.height;
	            var marginLeft = margin.left, marginRight = margin.right, marginTop = margin.top, marginBottom = margin.bottom, marginHeader = margin.header, marginFooter = margin.footer;
	            var contentWidth = paperWidth - marginLeft - marginRight, contentHeight = paperHeight - Math_min(marginHeader, marginTop) - Math_min(marginFooter, marginBottom);
	            var container = _createContainer(doc, paperWidth, paperHeight, str_printPage);
	            self._container = container;
	            self._contentContainer = _createContentContainer(doc, container, contentWidth, contentHeight, marginLeft, Math_min(marginHeader, marginTop));
	        },
	        processHeader: function (contentWidth, headerHeight, printInfo, sheetPageInfo, pageCount, imageLoader, pageNumber, options) {
	            var self = this, contentContainer = self._contentContainer;
	            var qualityFactor = options.qualityFactor;
	            var doc = _getIframeDocument(self._getIframe());
	            var headerCanvas = _addHeader(doc, contentWidth, headerHeight, qualityFactor);
	            self._paintHeader(headerCanvas.getContext(str_2d), contentWidth, headerHeight, printInfo, sheetPageInfo, pageCount, imageLoader, pageNumber);
	            contentContainer.appendChild(qualityFactor <= 2 ? headerCanvas : _createAlternativeImgElement(doc, headerCanvas, imageLoader));
	        },
	        _paintHeader: function (ctx, width, height, printInfo, sheetPageInfo, pageCount, imageLoader, pageNumber) {
	            var contentsHeaderLeft = _generateHeaderFooterContents(pageNumber, printInfo.headerLeft(), printInfo.headerLeftImage(), sheetPageInfo, pageCount),
	                contentsHeaderCenter,
	                contentsHeaderRight;
	            _renderHeaderFooterContents(ctx, contentsHeaderLeft, 0, 0, width / 3, height, 0 , 0 , imageLoader);
	            contentsHeaderCenter = _generateHeaderFooterContents(pageNumber, printInfo.headerCenter(), printInfo.headerCenterImage(), sheetPageInfo, pageCount);
	            _renderHeaderFooterContents(ctx, contentsHeaderCenter, width / 3, 0, width / 3, height, 1 , 0 , imageLoader);
	            contentsHeaderRight = _generateHeaderFooterContents(pageNumber, printInfo.headerRight(), printInfo.headerRightImage(), sheetPageInfo, pageCount);
	            _renderHeaderFooterContents(ctx, contentsHeaderRight, width / 3 * 2, 0, width / 3, height, 2 , 0 , imageLoader);
	        },
	        processBody: function (sheet, bodyWidth, bodyHeight, imageLoader, options) {
	            var self = this, contentContainer = self._contentContainer;
	            var qualityFactor = options.qualityFactor, contentWidth = options.contentWidth, bodyContentHeight = options.bodyContentHeight, showBorder = options.showBorder, centering = options.centering;
	            var doc = _getIframeDocument(self._getIframe());
	            var bodyContainer = _createBodyContainer(doc, contentContainer, contentWidth, bodyContentHeight);
	            var sheetPaginator = options.sheetPaginator;
	            var canvas = _addBody(sheet, doc, bodyContainer, bodyWidth, bodyHeight, showBorder, centering, sheetPaginator.horizontalZoomFactor(), sheetPaginator.verticalZoomFactor(), qualityFactor);
	            var canvas_context = canvas.getContext(str_2d), canvas_width = canvas._actualWidth, canvas_height = canvas._actualHeight;
	            self._paintBody(sheet, canvas_context, new Rect(0, 0, canvas_width, canvas_height), imageLoader, !showBorder);
	            self._paintPictures(sheet, canvas_context, new Rect(0, 0, canvas_width, canvas_height), imageLoader);
	            if(sheet.shapes) {
	                sheet.shapes._paintShapesForPrint(sheet, canvas_context, new Rect(0, 0, canvas_width, canvas_height));
	            }
	            var canvasParent = bodyContainer.children[0];
	            canvasParent.appendChild(qualityFactor <= 2 ? canvas : _createAlternativeImgElement(doc, canvas, imageLoader, true));
	        },
	        _paintBody: function (sheet, ctx, rect, imageLoader, needTopLeftLine) {
	            sheet._imageLoader = imageLoader;
	            sheet._setBounds(rect);
	            sheet.invalidateLayout();
	            sheet._render._paintSheetForPrint(ctx, rect, needTopLeftLine);
	        },
	        _paintPictures: function (sheet, ctx, clipRect, imageLoader) {
	            var sheetLayout = sheet._getSheetLayout();
	            for (var r = 0; r <= 2; r++) {
	                for (var c = 0; c <= 2; c++) {
	                    var intersectRect = clipRect.getIntersectRect(sheetLayout._viewportRect(r, c));
	                    if (intersectRect) {
	                        _paintPicturesImp(sheet, ctx, intersectRect, r, c, imageLoader);
	                    }
	                }
	            }
	        },
	        processFooter: function (contentWidth, footerHeight, printInfo, sheetPageInfo, pageCount, imageLoader, pageNumber, options) {
	            var self = this, contentContainer = self._contentContainer;
	            var qualityFactor = options.qualityFactor;
	            var doc = _getIframeDocument(self._getIframe());
	            var footerCanvas = _addFooter(doc, contentWidth, footerHeight, qualityFactor);
	            self._paintFooter(footerCanvas.getContext(str_2d), contentWidth, footerHeight, printInfo, sheetPageInfo, pageCount, imageLoader, pageNumber);
	            contentContainer.appendChild(qualityFactor <= 2 ? footerCanvas : _createAlternativeImgElement(doc, footerCanvas, imageLoader));
	        },
	        _paintFooter: function (ctx, width, height, printInfo, sheetPageInfo, pageCount, imageLoader, pageNumber) {
	            var contentsFooterLeft = _generateHeaderFooterContents(pageNumber, printInfo.footerLeft(), printInfo.footerLeftImage(), sheetPageInfo, pageCount),
	                contentsFooterCenter,
	                contentsFooterRight;
	            _renderHeaderFooterContents(ctx, contentsFooterLeft, 0, 0, width / 3, height, 0 , 2 , imageLoader);
	            contentsFooterCenter = _generateHeaderFooterContents(pageNumber, printInfo.footerCenter(), printInfo.footerCenterImage(), sheetPageInfo, pageCount);
	            _renderHeaderFooterContents(ctx, contentsFooterCenter, width / 3, 0, width / 3, height, 1 , 2 , imageLoader);
	            contentsFooterRight = _generateHeaderFooterContents(pageNumber, printInfo.footerRight(), printInfo.footerRightImage(), sheetPageInfo, pageCount);
	            _renderHeaderFooterContents(ctx, contentsFooterRight, width / 3 * 2, 0, width / 3, height, 2 , 2 , imageLoader);
	        },
	        processBlackAndWhite: function () {
	            var container = this._container;
	            if (Sheets_util_browser.mozilla) {
	                container.classList.add('grayscale');
	            } else {
	                var $canvasList = $(str_canvas, container);
	                for (var i = 0, length = $canvasList.length; i < length; i++) {
	                    var canvasItem = $canvasList[i];
	                    _applyBlackAndWhite(canvasItem.getContext(str_2d), new Rect(0, 0, canvasItem.width, canvasItem.height));
	                }
	            }
	        },
	        clearAfterBuild: function () {
	            var self = this;
	            var doc = _getIframeDocument(self._getIframe());
	            var lastDiv = doc.body.lastChild;
	            if (lastDiv) {
	                $(lastDiv).removeClass(str_printPage);
	            }
	        },
	        build: function () {
	            var self = this, workbook = self._workbook, paginator = self._paginator;
	            self.initBuild();
	            var pageCount = paginator.pageCount();
	            var imageLoader = self._getImageLoader();
	            self._preProcessCharts();
	            var pageNumbers = calcPageNumbers(paginator, workbook);
	            for (var index = 0; index < pageCount; index++) {
	                var sheetPageInfo = paginator.getPage(index);
	                var sheet = workbook.getSheet(sheetPageInfo.sheetIndex());
	                var printInfo = sheet.printInfo();
	                var pageRange = printInfo.pageRange();
	                if (pageRange) {
	                    var pageIndexes = getPageRange(pageRange);
	                    modifyPageIndexes(pageIndexes, pageCount);
	                    if (pageIndexes.indexOf(sheetPageInfo.pageNumberInSheet()) < 0) {
	                        continue;
	                    }
	                }
	                var changes = self._prepareSheet(sheet, sheetPageInfo);
	                var margin = getMargin(printInfo.margin()), marginLeft = margin.left, marginRight = margin.right, marginTop = margin.top, marginBottom = margin.bottom, marginHeader = margin.header, marginFooter = margin.footer;
	                var orientation = printInfo.orientation();
	                var paperSize = getPaperSize(sheet, printInfo.paperSize(), orientation), paperWidth = paperSize.width, paperHeight = paperSize.height;
	                var contentWidth = paperWidth - marginLeft - marginRight, contentHeight = paperHeight - Math_min(marginHeader, marginTop) - Math_min(marginFooter, marginBottom);
	                var headerHeight = Math_max(0, marginTop - marginHeader);
	                var footerHeight = Math_max(0, marginBottom - marginFooter);
	                var bodySize = sheetPageInfo.getPageSize(), bodyWidth = bodySize.width, bodyHeight = bodySize.height;
	                var processOptions = {
	                    qualityFactor: printInfo.qualityFactor(),
	                    marginHeader: marginHeader,
	                    paperHeight: paperHeight,
	                    marginFooter: marginFooter,
	                    contentWidth: contentWidth,
	                    bodyContentHeight: contentHeight - headerHeight - footerHeight,
	                    showBorder: printInfo.showBorder(),
	                    centering: printInfo.centering(),
	                    marginLeft: marginLeft,
	                    marginTop: marginTop,
	                    sheetPaginator: _getSheetPaginator(paginator, index)
	                };
	               
	                self.initContainer(paperSize, margin, orientation);
	               
	                if (headerHeight > 0) {
	                    self.processHeader(contentWidth, headerHeight, printInfo, sheetPageInfo, pageCount, imageLoader, pageNumbers[index], processOptions);
	                }
	               
	                self.processBody(sheet, bodyWidth, bodyHeight, imageLoader, processOptions);
	               
	                if (footerHeight > 0) {
	                    self.processFooter(contentWidth, footerHeight, printInfo, sheetPageInfo, pageCount, imageLoader, pageNumbers[index], processOptions);
	                }
	                if (printInfo.blackAndWhite()) {
	                    self.processBlackAndWhite();
	                }
	                self._restoreSheet(changes);
	                sheet._dispose(false);
	            }
	            self.clearAfterBuild();
	            if (imageLoader._isAllImagesLoaded()) {
	                self.onBuildCompleted();
	            }
	        },
	        print: function () {
	            var iframe = this._getIframe(), doc, win;
	            if (Sheets_util_browser.msie) {
	                doc = _getIframeDocument(iframe);
	                doc.execCommand('print');
	            } else {
	                win = iframe.contentWindow;
	                win.focus();
	                win.print();
	            }
	            window.focus();
	        },
	        dispose: function () {
	            var self = this, iframe = self._iframe, parentElement = iframe && iframe.parentElement;
	            if (parentElement) {
	                parentElement.removeChild(iframe);
	                self._iframe = keyword_null;
	            }
	            if (self._imageLoader) {
	                self._imageLoader._dispose();
	                self._imageLoader = keyword_null;
	            }
	            if (self._chartsProcessor) {
	                self._chartsProcessor._dispose();
	                self._chartsProcessor = keyword_null;
	            }
	            var workbook = self._workbook;
	            if (workbook) {
	                workbook.destroy();
	                self._workbook = keyword_null;
	            }
	            self._paginator = keyword_null;
	           
	            self._cache = {};
	            self._contentContainer = keyword_null;
	            self._container = keyword_null;
	        },
	        _getIframe: function () {
	            if (!this._iframe) {
	                var DOCUMENT = document;
	                var iframe = createElement(DOCUMENT, 'IFRAME');
	                var iframeStyle = iframe.style;
	                iframeStyle.position = 'absolute';
	                iframeStyle.left = '-10px';
	                iframeStyle.width = '0px';
	                iframeStyle.height = '0px';
	                DOCUMENT.body.insertBefore(iframe, keyword_null);
	                this._iframe = iframe;
	            }
	            return this._iframe;
	        },
	        _prepareSheet: function (sheet, sheetPageInfo) {
	            var changes = [];
	            sheet.suspendPaint();
	            sheet.suspendEvent();
	            Core._supportsCalc && sheet.suspendCalcService();
	           
	            if (sheet.showRowOutline) {
	                sheet.showRowOutline(false);
	                sheet.showColumnOutline(false);
	            }
	           
	            sheet.zoom(1);
	
	            var options = sheet.options;
	           
	            var printInfo = sheet.printInfo();
	            var showGridLine = printInfo.showGridLine();
	            var gridline = sheet.options.gridline;
	            gridline.showHorizontalGridline = showGridLine;
	            gridline.showVerticalGridline = showGridLine;
	
	            var self = this;
	            if (!self._cache[sheet.name()]) {
	                var needUpdatePictures = false;
	               
	                if (printInfo.bestFitColumns()) {
	                   
	                    var printInfo_columnStart = printInfo.columnStart(), columnStart = printInfo_columnStart === -1 ? 0 : printInfo_columnStart;
	                    var columnEnd = getLastPrintingColumn(sheet, printInfo);
	                    var columns = [];
	                    for (var columnIndex = columnStart; columnIndex <= columnEnd; columnIndex++) {
	                        columns.push({col: columnIndex});
	                    }
	                    _autoFitColumn(sheet, columns, false, 1 );
	
	                   
	                    var rowHeaderColumns = [];
	                    var rowHeaderColumnCount = sheet.getColumnCount(2 );
	                    for (var rowHeaderColumnIndex = 0; rowHeaderColumnIndex < rowHeaderColumnCount; rowHeaderColumnIndex++) {
	                        rowHeaderColumns.push({col: rowHeaderColumnIndex});
	                    }
	                    _autoFitColumn(sheet, rowHeaderColumns, true, 1 );
	                    needUpdatePictures = true;
	                }
	               
	                if (printInfo.bestFitRows()) {
	                   
	                    var printInfo_rowStart = printInfo.rowStart(), rowStart = printInfo_rowStart === -1 ? 0 : printInfo_rowStart;
	                    var rowEnd = getLastPrintingRow(sheet, printInfo);
	                    var rows = [];
	                    for (var rowIndex = rowStart; rowIndex <= rowEnd; rowIndex++) {
	                        rows.push({row: rowIndex});
	                    }
	                    _autoFitRow(sheet, rows, false, 1 );
	                   
	                    var columnHeaderRows = [];
	                    var columnHeaderRowCount = sheet.getRowCount(1 );
	                    for (var columnHeaderRowIndex = 0; columnHeaderRowIndex < columnHeaderRowCount; columnHeaderRowIndex++) {
	                        columnHeaderRows.push({row: columnHeaderRowIndex});
	                    }
	                    _autoFitRow(sheet, columnHeaderRows, true, 1 );
	                    needUpdatePictures = true;
	                }
	                if (needUpdatePictures) {
	                    iteratePicturesAndCharts(sheet, function (floatingObject) {
	                        floatingObject._updateLocationSize();
	                    });
	                }
	                self._cache[sheet.name()] = true;
	            }
	
	
	
	           
	            var showRowHeader = printInfo.showRowHeader();
	            if (showRowHeader === 0 ) {
	               
	            } else if (showRowHeader === 2  || showRowHeader === 3  && sheetPageInfo.columnPageIndexInSheet() === 0) {
	                options.rowHeaderVisible = true;
	            } else {
	                options.rowHeaderVisible = false;
	            }
	           
	            var showColumnHeader = printInfo.showColumnHeader();
	            if (showColumnHeader === 0 ) {
	               
	            } else if (showColumnHeader === 2  || showColumnHeader === 3  && sheetPageInfo.rowPageIndexInSheet() === 0) {
	                options.colHeaderVisible = true;
	            } else {
	                options.colHeaderVisible = false;
	            }
	           
	            sheet.frozenRowCount(0);
	            sheet.frozenColumnCount(0);
	            sheet.frozenTrailingRowCount(0);
	            sheet.frozenTrailingColumnCount(0);
	           
	            var rowFilter = sheet._rowFilter;
	            if (rowFilter) {
	                rowFilter.filterButtonVisible(false);
	            }
	           
	            var tables = sheet.tables && sheet.tables.all(), i, length;
	            if (tables) {
	                for (i = 0, length = tables.length; i < length; i++) {
	                    tables[i].filterButtonVisible(false);
	                }
	            }
	           
	            var columnPage = sheetPageInfo.columnPage(), columnPage_repeatItemStart = columnPage.repeatItemStart(), columnPage_repeatItemEnd = columnPage.repeatItemEnd();
	            var hiddenColWidth = 0;
	            if (columnPage_repeatItemStart !== -1 && columnPage_repeatItemEnd !== -1) {
	                sheet.frozenColumnCount(columnPage_repeatItemEnd + 1);
	                for (i = 0, length = columnPage_repeatItemStart; i < length; i++) {
	                    changes.push({type: "colVisible", sheetName: sheet.name(), index: i, visible: sheet.getColumnVisible(i)});
	                    sheet.setColumnVisible(i, false);
	                    hiddenColWidth += sheet._getActualColumnWidth(i);
	                    var columnOffsetArray = _adjustStartColumnOffsetAfterHideColumn(sheet, i);
	                    changes.push.apply(changes, columnOffsetArray);
	                }
	            }
	           
	            var rowPage = sheetPageInfo.rowPage(), rowPage_repeatItemStart = rowPage.repeatItemStart(), rowPage_repeatItemEnd = rowPage.repeatItemEnd();
	            var hiddenRowHeight = 0;
	            if (rowPage_repeatItemStart !== -1 && rowPage_repeatItemEnd !== -1) {
	                sheet.frozenRowCount(rowPage_repeatItemEnd + 1);
	                for (i = 0, length = rowPage_repeatItemStart; i < length; i++) {
	                    changes.push({type: "rowVisible", sheetName: sheet.name(), index: i, visible: sheet.getRowVisible(i)});
	                    sheet.setRowVisible(i, false);
	                    hiddenRowHeight += sheet._getActualRowHeight(i);
	                    var rowOffsetArray = _adjustStartRowOffsetAfterHideRow(sheet, i);
	                    changes.push.apply(changes, rowOffsetArray);
	                }
	            }
	            if(sheet.shapes && (hiddenColWidth > 0 || hiddenRowHeight > 0)) {
	                var shapeChanges = sheet.shapes._moveShapeForHideRowAndColumn(sheet, hiddenColWidth, hiddenRowHeight);
	                changes.push.apply(changes, shapeChanges);
	            }
	           
	            sheet.showCell(rowPage.itemStart(), columnPage.itemStart(), 0 , 0 );
	            return changes;
	        },
	        _restoreSheet: function (changes) {
	            var workbook = this._workbook;
	            for (var i = changes.length - 1; i >= 0; i--) {
	                var currentChange = changes[i], type = currentChange.type, index = currentChange.index, visible = currentChange.visible,
	                    floatingObject = currentChange.floatingObject, offset = currentChange.offset, shape = currentChange.shape;
	                var sheet = workbook.getSheetFromName(currentChange.sheetName);
	                if (type === "colVisible") {
	                    sheet.setColumnVisible(index, visible);
	                } else if (type === "rowVisible") {
	                    sheet.setRowVisible(index, visible);
	                } else if (type === "startRowOffset") {
	                    floatingObject.startRowOffset(offset);
	                } else if (type === "startColumnOffset") {
	                    floatingObject.startColumnOffset(offset);
	                } else if(type === "shapePosition") {
	                    shape.resize(offset.x, offset.y, shape.width(), shape.height());
	                }
	            }
	        },
	        _getImageLoader: function () {
	            var self = this;
	            if (!self._imageLoader) {
	                self._imageLoader = new _ImageLoader(function () {
	                    if (self._imageLoader) {
	                        self.build();
	                    }
	                });
	            }
	            return self._imageLoader;
	        },
	        _preProcessCharts: function () {
	            var self = this;
	            if (!self._chartsProcessor) {
	                var charts = [];
	                var paginator = self._paginator, sheets = paginator instanceof WorksheetPaginator ? [paginator._sheet] : self._workbook.sheets;
	                sheets.forEach(function (sheet) {
	                    if (sheet.charts) {
	                        sheet.charts.all().forEach(function (chart) {
	                            if (chart.isVisible() && chart.canPrint()) {
	                                charts.push(chart);
	                            }
	                        });
	                    }
	                });
	                if (charts.length > 0) {
	                    self._chartsProcessor = new ChartsProcessor(charts);
	                    self._chartsProcessor._processAllCharts();
	                }
	            }
	        }
	    };
	    $_extend(PrintPagePresenter.prototype, PrintPagePresenterPrototype);
	
	    Print._PrintPagePresenter = PrintPagePresenter;
	   
	
	   
	    function SpreadPrinter() {
	    }
	
	    var SpreadPrinterPrototype = {
	        print: function (workbook, sheetIndex) {
	            var self = this;
	            self.dispose();
	            var context = self.prepareContext(workbook, sheetIndex);
	            var presenter = new PrintPagePresenter(context.workbook, context.paginator);
	            self._presenter = presenter;
	            presenter.onBuildCompleted = function () {
	                presenter.print();
	            };
	            presenter.build();
	        },
	        prepareContext: function (workbook, sheetIndex) {
	            var self = this;
	            var newWorkbook = new Workbook(), paginator, outParam;
	            newWorkbook.suspendPaint();
	            newWorkbook.suspendEvent();
	           
	            newWorkbook.fromJSON(JSON_parse(JSON_stringify(workbook.toJSON({includeBindingSource: true, ignoreFormula: true }))));
	           
	            var options = newWorkbook.options;
	            options.scrollbarMaxAlign = false;
	            options.scrollbarShowMax = true;
	            options.scrollIgnoreHidden = false;
	           
	            var sheetCount = newWorkbook.getSheetCount(), newSheet;
	            for(var start = 0; start < sheetCount; start++) {
	                newSheet = newWorkbook.getSheet(start);
	                if(newSheet.printInfo().showBorder()) {
	                    newSheet.options.sheetAreaOffset = {left:0, top: 0};
	                }else {
	                    newSheet.options.sheetAreaOffset = {left:2, top: 2};
	                }
	
	            }
	
	           
	            var sheet;
	            do {
	                if (isUndefined(sheetIndex) || sheetIndex === keyword_null) {
	                    paginator = new WorkbookPaginator(newWorkbook);
	                } else {
	                    outParam = {};
	                    sheet = newWorkbook.getSheet(sheetIndex);
	                    initPrintingSize(sheet, sheet.printInfo(), outParam);
	                    paginator = new WorksheetPaginator(newWorkbook, sheetIndex, outParam.paperSize, outParam.pageImageableArea);
	                }
	                paginator.paginate();
	            } while(!self._checkPaginateResult(paginator, newWorkbook));
	
	            return {
	                workbook: newWorkbook,
	                paginator: paginator
	            };
	        },
	        dispose: function () {
	            var presenter = this._presenter;
	            if (presenter) {
	                presenter.dispose();
	            }
	            this._presenter = keyword_null;
	        },
	        _checkPaginateResult: function (paginator, spread) {
	            var pageCount = paginator.pageCount();
	            for (var index = 0; index < pageCount; index++) {
	                var sheetPageInfo = paginator.getPage(index), preSheetPageInfo, sheetIndex, sheet;
	                var rowPageInfo = sheetPageInfo.rowPage(), preRowPageInfo;
	                if (rowPageInfo.contentOffset() > 0 && index - 1 >= 0) {
	                    preSheetPageInfo = paginator.getPage(index - 1);
	                    preRowPageInfo = preSheetPageInfo.rowPage();
	                    sheetIndex = sheetPageInfo.sheetIndex();
	                    sheet = spread.getSheet(sheetIndex);
	                    if (sheetIndex === preSheetPageInfo.sheetIndex()) {
	                        sheet.setRowHeight(preRowPageInfo.itemEnd(), rowPageInfo.contentOffset(), 3 );
	                        return false;
	                    }
	                }
	                var colPageInfo = sheetPageInfo.columnPage(), preColPageInfo;
	                if (colPageInfo.contentOffset() > 0 && index - 1 >= 0) {
	                    preSheetPageInfo = paginator.getPage(index - 1);
	                    preColPageInfo = preSheetPageInfo.columnPage();
	                    sheetIndex = sheetPageInfo.sheetIndex();
	                    sheet = spread.getSheet(sheetIndex);
	                    if (sheetIndex === preSheetPageInfo.sheetIndex()) {
	                        sheet.setColumnWidth(preColPageInfo.itemEnd(), colPageInfo.contentOffset(), 3 );
	                        return false;
	                    }
	                }
	            }
	            return true;
	        }
	    };
	    $_extend(SpreadPrinter.prototype, SpreadPrinterPrototype);
	    Print._SpreadPrinter = SpreadPrinter;
	   
	
	    module.exports = Print;
	
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

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_InvalidSheetIndex: 'Invalid  sheet index.'
	    };
	
	}());

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.print.12.0.0.js.map
}));