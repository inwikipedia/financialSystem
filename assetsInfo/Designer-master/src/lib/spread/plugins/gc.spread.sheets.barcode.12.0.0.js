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
   GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["Barcode"] =
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
	
	}());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Sheets = __webpack_require__(2);
	    var Calc = __webpack_require__(3);
	    var Common = __webpack_require__(4);
	    var Barcode = __webpack_require__(5);
	    var Sparklines = Sheets.Sparklines;
	    var SparklineEx = Sparklines.SparklineEx, $ = Sheets.GC$, $_isEmptyObject = $.isEmptyObject;
	    var GCFunction = Calc.Functions.Function;
	    var _sparklineExCollection = Sparklines._sparklineExCollection;
	    var isNullOrUndefined = Common._Types._isNullOrUndefined;
	    var cloneObject = Common._Types._cloneObject;
	    var CalcConvert = Calc.Convert, CalcConvert_isArray = CalcConvert._isArray;
	    var Errors = Calc.Errors;
	    var CalcErrorsValue = Errors.Value;
	
	    function processBarcodeOptions(value, array) {
	        var barcodeOptionsArray = array;
	        var options = {}, quietZone = {}, font = {};
	       
	       
	        
	        barcodeOptionsArray.forEach(function (key, index) {
	            var info = value[index];
	            if (!isNullOrUndefined(info)) {
	                if (key.indexOf("quietZone") !== -1) {
	                    switch (key) {
	                        case 'quietZoneLeft':
	                            quietZone.left = info;
	                            break;
	                        case 'quietZoneRight':
	                            quietZone.right = info;
	                            break;
	                        case 'quietZoneTop':
	                            quietZone.top = info;
	                            break;
	                        case 'quietZoneBottom':
	                            quietZone.bottom = info;
	                            break;
	                        default:
	                            break;
	                    }
	                } else if (key.indexOf("font") !== -1) {
	                    switch (key) {
	                        case 'fontFontFamily':
	                            font.fontFamily = info;
	                            break;
	                        case 'fontFontStyle':
	                            font.fontStyle = info;
	                            break;
	                        case 'fontFontWeight':
	                            font.fontWeight = info;
	                            break;
	                        case 'fontTextDecoration':
	                            font.textDecoration = info;
	                            break;
	                        case 'fontTextAlign':
	                            font.textAlign = info;
	                            break;
	                        case 'fontFontSize':
	                            font.fontSize = info;
	                            break;
	                        default:
	                            break;
	                    }
	                } else {
	                    options[key] = info;
	                }
	            }
	        });
	        if (!$_isEmptyObject(quietZone)) {
	            options["quietZone"] = quietZone;
	        }
	        if (!$_isEmptyObject(font)) {
	            options["font"] = font;
	        }
	        return options;
	    }
	
	    function getPlotRect(x, y, width, height, margin) {
	        return {
	            plotX: x + margin,
	            plotY: y + margin,
	            plotWidth: width - 2 * margin,
	            plotHeight: height - 2 * margin
	        };
	    }
	
	    function barcode_paint(context, value, x, y, w, h, options) {
	       
	        var margin = 2;
	        var plotRect = getPlotRect(x, y, w, h, margin);
	        var _value = cloneObject(value);
	        var plotX = plotRect.plotX, plotY = plotRect.plotY, plotWidth = plotRect.plotWidth,
	            plotHeight = plotRect.plotHeight;
	        _value.desiredSize = {width: plotWidth, height: plotHeight, forceRounding: false};//desiredSize is the barcode size, and can adjust anytime.
	        var barcode;
	        try {
	            barcode = new Barcode(null, _value);
	        } catch (e) {
	            return;
	        }
	        var barcodeSize = barcode.getSize();
	        var fontSize = parseInt(barcode.option.font.fontSize);// convert size unit to pixel.
	        fontSize = isNaN(fontSize) ? 12 : fontSize;
	        var screen = window.screen, deviceXDPI = screen.deviceXDPI,
	            devicePixelRatio = window.devicePixelRatio || (deviceXDPI ? deviceXDPI / screen.logicalXDPI : 1);
	       
	        barcode.destroy();
	        _value.desiredSize.width = plotWidth * devicePixelRatio;
	        _value.desiredSize.height = plotHeight * devicePixelRatio;
	
	       
	        _value.font = _value.font || {};
	        _value.font.fontSize = fontSize * devicePixelRatio * options.zoomFactor + "px";
	
	       
	        var src = Barcode.getDataUrl(_value);
	        var imageLoader = options.sheet._imageLoader;
	        if (imageLoader) {
	            if (imageLoader._getState(src)) {
	                var bkImg = imageLoader._getImage(src);
	                context.save();
	                context.rect(x, y, w, h);
	                context.clip();
	                context.drawImage(bkImg, 0, 0, bkImg.width, bkImg.height, plotX, plotY, barcodeSize.width, barcodeSize.height);
	                context.restore();
	            } else {
	                imageLoader._addImage(src);
	            }
	        }
	    }
	
	    function BarcodeBase() {
	        this._barcodeCommonProperties = ["text", "color", "backgroundColor"];
	        SparklineEx.call(this);
	    }
	
	    $.inherit(BarcodeBase, SparklineEx);
	    $.extend(BarcodeBase.prototype, {
	        createFunction: function () {
	            var self = this;
	            var info = this.getBarcodeInfo();
	            var func = new GCFunction(info.fnName, info.minimum, info.maxmum);
	            var index = info.acceptsArrayArgIndex;
	            func.acceptsArray = function (argIndex) {
	                return argIndex === index;
	            };
	            func.evaluate = function (args) {
	                args[index] = CalcConvert_isArray(args[index]) ? args[index].array[0] : args[index];
	                var options = self._getBarcodeOptions(args, info.properties);
	                options.type = info.type;
	               
	               
	                try {
	                    var _value = cloneObject(options);
	                    new Barcode(null, _value);   
	                } catch (e) {
	                    return CalcErrorsValue;
	                }
	                return options;
	            };
	            return func;
	        },
	        paint: function (context, value, x, y, w, h, options) {
	            barcode_paint(context, value, x, y, w, h, options);
	        },
	        _getBarcodeOptions: function (value, properties) {
	            return processBarcodeOptions(value, properties);
	        }
	    });
	    exports.BarcodeBase = BarcodeBase;
	
	   
	   
	    
	    function QRCode() {
	        this._barcodeProperties = ["errorCorrectionLevel", "model", "version", "mask", "connection", "connectionNo", "charCode", "charset", "quietZoneLeft", "quietZoneRight", "quietZoneTop", "quietZoneBottom", "quietZoneAddOn"];
	        BarcodeBase.call(this);
	    }
	
	    $.inherit(QRCode, BarcodeBase);
	    $.extend(QRCode.prototype, {
	        getBarcodeInfo: function () {
	            return {
	                fnName: "BC_QRCODE",
	                minimum: 1,
	                maxmum: 16,
	                type: "QRCode",
	                acceptsArrayArgIndex: 9,
	                properties: this._barcodeCommonProperties.concat(this._barcodeProperties)
	            };
	        }
	    });
	    exports.QRCode = QRCode;
	   
	
	   
	   
	    
	    function EAN13() {
	        this._barcodeProperties = ["showLabel", "labelPosition", "addOn", "addOnLabelPosition", "fontFontFamily", "fontFontStyle", "fontFontWeight", "fontTextDecoration", "fontTextAlign", "fontFontSize", "quietZoneLeft", "quietZoneRight", "quietZoneTop", "quietZoneBottom"];
	        BarcodeBase.call(this);
	    }
	
	    $.inherit(EAN13, BarcodeBase);
	    $.extend(EAN13.prototype, {
	        getBarcodeInfo: function () {
	            return {
	                fnName: "BC_EAN13",
	                minimum: 1,
	                maxmum: 18,
	                type: "EAN13",
	                properties: this._barcodeCommonProperties.concat(this._barcodeProperties)
	            };
	        }
	    });
	    exports.EAN13 = EAN13;
	   
	
	   
	   
	    
	    function EAN8() {
	        this._barcodeProperties = ["showLabel", "labelPosition", "fontFontFamily", "fontFontStyle", "fontFontWeight", "fontTextDecoration", "fontTextAlign", "fontFontSize", "quietZoneLeft", "quietZoneRight", "quietZoneTop", "quietZoneBottom"];
	        BarcodeBase.call(this);
	    }
	
	    $.inherit(EAN8, BarcodeBase);
	    $.extend(EAN8.prototype, {
	        getBarcodeInfo: function () {
	            return {
	                fnName: "BC_EAN8",
	                minimum: 1,
	                maxmum: 15,
	                type: "EAN8",
	                properties: this._barcodeCommonProperties.concat(this._barcodeProperties)
	            };
	        }
	    });
	    exports.EAN8 = EAN8;
	   
	
	   
	   
	    
	    function Codabar() {
	        this._barcodeProperties = ["showLabel", "labelPosition", "checkDigit", "nwRatio", "fontFontFamily", "fontFontStyle", "fontFontWeight", "fontTextDecoration", "fontTextAlign", "fontFontSize", "quietZoneLeft", "quietZoneRight", "quietZoneTop", "quietZoneBottom"];
	        BarcodeBase.call(this);
	    }
	
	    $.inherit(Codabar, BarcodeBase);
	    $.extend(Codabar.prototype, {
	        getBarcodeInfo: function () {
	            return {
	                fnName: "BC_CODABAR",
	                minimum: 1,
	                maxmum: 17,
	                type: "Codabar",
	                properties: this._barcodeCommonProperties.concat(this._barcodeProperties)
	            };
	        }
	    });
	    exports.Codabar = Codabar;
	   
	
	   
	   
	    
	    function Code39() {
	        this._barcodeProperties = ["showLabel", "labelPosition", "labelWithStartAndStopCharacter", "checkDigit", "nwRatio", "fullASCII", "fontFontFamily", "fontFontStyle", "fontFontWeight", "fontTextDecoration", "fontTextAlign", "fontFontSize", "quietZoneLeft", "quietZoneRight", "quietZoneTop", "quietZoneBottom"];
	        BarcodeBase.call(this);
	    }
	
	    $.inherit(Code39, BarcodeBase);
	    $.extend(Code39.prototype, {
	        getBarcodeInfo: function () {
	            return {
	                fnName: "BC_CODE39",
	                minimum: 1,
	                maxmum: 19,
	                type: "Code39",
	                properties: this._barcodeCommonProperties.concat(this._barcodeProperties)
	            };
	        }
	    });
	    exports.Code39 = Code39;
	   
	
	   
	   
	    
	    function Code93() {
	        this._barcodeProperties = ["showLabel", "labelPosition", "checkDigit", "fullASCII", "fontFontFamily", "fontFontStyle", "fontFontWeight", "fontTextDecoration", "fontTextAlign", "fontFontSize", "quietZoneLeft", "quietZoneRight", "quietZoneTop", "quietZoneBottom"];
	        BarcodeBase.call(this);
	    }
	
	    $.inherit(Code93, BarcodeBase);
	    $.extend(Code93.prototype, {
	        getBarcodeInfo: function () {
	            return {
	                fnName: "BC_CODE93",
	                minimum: 1,
	                maxmum: 17,
	                type: "Code93",
	                properties: this._barcodeCommonProperties.concat(this._barcodeProperties)
	            };
	        }
	    });
	    exports.Code93 = Code93;
	   
	
	   
	   
	    
	    function Code128() {
	        this._barcodeProperties = ["showLabel", "labelPosition", "codeSet", "fontFontFamily", "fontFontStyle", "fontFontWeight", "fontTextDecoration", "fontTextAlign", "fontFontSize", "quietZoneLeft", "quietZoneRight", "quietZoneTop", "quietZoneBottom"];
	        BarcodeBase.call(this);
	    }
	
	    $.inherit(Code128, BarcodeBase);
	    $.extend(Code128.prototype, {
	        getBarcodeInfo: function () {
	            return {
	                fnName: "BC_CODE128",
	                minimum: 1,
	                maxmum: 16,
	                type: "Code128",
	                properties: this._barcodeCommonProperties.concat(this._barcodeProperties)
	            };
	        }
	    });
	    exports.Code128 = Code128;
	   
	
	   
	   
	    
	    function GS1_128() {
	        this._barcodeProperties = ["showLabel", "labelPosition", "fontFontFamily", "fontFontStyle", "fontFontWeight", "fontTextDecoration", "fontTextAlign", "fontFontSize", "quietZoneLeft", "quietZoneRight", "quietZoneTop", "quietZoneBottom"];
	        BarcodeBase.call(this);
	    }
	
	    $.inherit(GS1_128, BarcodeBase);
	    $.extend(GS1_128.prototype, {
	        getBarcodeInfo: function () {
	            return {
	                fnName: "BC_GS1_128",
	                minimum: 1,
	                maxmum: 16,
	                type: "GS1_128",
	                properties: this._barcodeCommonProperties.concat(this._barcodeProperties)
	            };
	        }
	    });
	    exports.GS1_128 = GS1_128;
	   
	
	   
	   
	    
	    function Code49() {
	        this._barcodeProperties = ["showLabel", "labelPosition", "grouping", "groupNo", "fontFontFamily", "fontFontStyle", "fontFontWeight", "fontTextDecoration", "fontTextAlign", "fontFontSize", "quietZoneLeft", "quietZoneRight", "quietZoneTop", "quietZoneBottom"];
	        BarcodeBase.call(this);
	    }
	
	    $.inherit(Code49, BarcodeBase);
	    $.extend(Code49.prototype, {
	        getBarcodeInfo: function () {
	            return {
	                fnName: "BC_CODE49",
	                minimum: 1,
	                maxmum: 17,
	                type: "Code49",
	                properties: this._barcodeCommonProperties.concat(this._barcodeProperties)
	            };
	        }
	    });
	    exports.Code49 = Code49;
	   
	
	   
	   
	    
	    function PDF417() {
	        this._barcodeProperties = ["errorCorrectionLevel", "rows", "columns", "compact", "quietZoneLeft", "quietZoneRight", "quietZoneTop", "quietZoneBottom"];
	        BarcodeBase.call(this);
	    }
	
	    $.inherit(PDF417, BarcodeBase);
	    $.extend(PDF417.prototype, {
	        getBarcodeInfo: function () {
	            return {
	                fnName: "BC_PDF417",
	                minimum: 1,
	                maxmum: 11,
	                type: "PDF417",
	                properties: this._barcodeCommonProperties.concat(this._barcodeProperties)
	            };
	        }
	    });
	    exports.PDF417 = PDF417;
	   
	
	   
	   
	    
	    function DataMatrix() {
	        this._barcodeProperties = ["eccMode", "ecc200SymbolSize", "ecc200EncodingMode", "ecc00_140SymbolSize", "structuredAppend", "structureNumber", "fileIdentifier", "quietZoneLeft", "quietZoneRight", "quietZoneTop", "quietZoneBottom"];
	        BarcodeBase.call(this);
	    }
	
	    $.inherit(DataMatrix, BarcodeBase);
	    $.extend(DataMatrix.prototype, {
	        getBarcodeInfo: function () {
	            return {
	                fnName: "BC_DATAMATRIX",
	                minimum: 1,
	                maxmum: 14,
	                type: "DataMatrix",
	                properties: this._barcodeCommonProperties.concat(this._barcodeProperties)
	            };
	        }
	    });
	    exports.DataMatrix = DataMatrix;
	
	   
	
	    function addSparklineEx(barCode) {
	        if (barCode) {
	            _sparklineExCollection[barCode.name()] = barCode;
	        }
	    }
	
	    if (GCFunction) {
	        addSparklineEx(new QRCode());
	        addSparklineEx(new EAN13());
	        addSparklineEx(new EAN8());
	        addSparklineEx(new Codabar());
	        addSparklineEx(new Code39());
	        addSparklineEx(new Code93());
	        addSparklineEx(new Code128());
	        addSparklineEx(new GS1_128());
	        addSparklineEx(new Code49());
	        addSparklineEx(new PDF417());
	        addSparklineEx(new DataMatrix());
	    }
	
	    module.exports = exports;
	}());

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sheets;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.CalcEngine;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Common;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	
	(function webpackUniversalModuleDefinition(root, factory) {
	    if(true)
	        module.exports = factory();
	    else if(typeof define === 'function' && define.amd)
	        define([], factory);
	    else if(typeof exports === 'object')
	        exports["Barcode"] = factory();
	    else
	        root["Barcode"] = factory();
	})(typeof self !== 'undefined' ? self : this, function() {
	    return  (function(modules) {
	         
	         	var installedModules = {};
	        
	         
	         	function __webpack_require__(moduleId) {
	            
	             	
	             		if(installedModules[moduleId]) {
	                 			return installedModules[moduleId].exports;
	                 		}
	             	
	             		var module = installedModules[moduleId] = {
	                 			i: moduleId,
	                 			l: false,
	                 			exports: {}
	                 		};
	            
	             	
	             		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	            
	             	
	             		module.l = true;
	            
	             	
	             		return module.exports;
	             	}
	        
	        
	         
	         	__webpack_require__.m = modules;
	        
	         
	         	__webpack_require__.c = installedModules;
	        
	         
	         	__webpack_require__.d = function(exports, name, getter) {
	             		if(!__webpack_require__.o(exports, name)) {
	                 			Object.defineProperty(exports, name, {
	                     				configurable: false,
	                     				enumerable: true,
	                     				get: getter
	                     			});
	                 		}
	             	};
	        
	         
	         	__webpack_require__.n = function(module) {
	             		var getter = module && module.__esModule ?
	                 			function getDefault() { return module['default']; } :
	                 			function getModuleExports() { return module; };
	             		__webpack_require__.d(getter, 'a', getter);
	             		return getter;
	             	};
	        
	         
	         	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	        
	         
	         	__webpack_require__.p = "";
	        
	         
	         	return __webpack_require__(__webpack_require__.s = 20);
	         })
	    
	     ([
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	            exports.isFunction = isFunction;
	            exports.isWindow = isWindow;
	            exports.isDefined = isDefined;
	            exports.isNaN = isNaN;
	            exports.isNumberLike = isNumberLike;
	            exports.sliceString = sliceString;
	            exports.sliceArray = sliceArray;
	            exports.str2Array = str2Array;
	            exports.combineTruthy = combineTruthy;
	            exports.convertRadix = convertRadix;
	            exports.isEven = isEven;
	            exports.isOdd = isOdd;
	            exports.toNumber = toNumber;
	            exports.getUnit = getUnit;
	            exports.getMaxValue = getMaxValue;
	            exports.assign = assign;
	            exports.deepMerge = deepMerge;
	            exports.strRepeat = strRepeat;
	            exports.isInteger = isInteger;
	            exports.fillArray = fillArray;
	            exports.strPadStart = strPadStart;
	            exports.registerPlugin = registerPlugin;
	            exports.measureText = measureText;
	            exports.convertUnit = convertUnit;
	            exports.fixSize2PixelDefault = fixSize2PixelDefault;
	            exports.getQuietZoneRelativeValue = getQuietZoneRelativeValue;
	            exports.getQuietZonePixelValue = getQuietZonePixelValue;
	            function isFunction(value) {
	                return typeof value === 'function';
	            }
	
	            function isWindow(obj) {
	                return !!obj && obj === obj.window;
	            }
	
	            function isDefined(value) {
	                return typeof value !== 'undefined';
	            }
	
	            function isNaN(value) {
	                if (isFunction(Number.isNaN)) {
	                    return Number.isNaN(value);
	                } else {
	                    return value !== value;
	                }
	            }
	
	            function isNumberLike(value) {
	                return !isNaN(+value);
	            }
	
	            function sliceString() {
	                var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	                var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	                var fn = arguments[2];
	
	                var index = 0,
	                    length = text.length;
	
	                while (index < length) {
	                    fn(text.substring(index, index + step));
	                    index += step;
	                }
	            }
	
	            function sliceArray() {
	                var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	                var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	                var fn = arguments[2];
	
	                var index = 0,
	                    length = arr.length;
	
	                while (index < length) {
	                    fn(arr.slice(index, index + step));
	                    index += step;
	                }
	            }
	
	            function str2Array() {
	                var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	
	                if (isFunction(Array.from)) {
	                    return Array.from(text);
	                } else {
	                    return Array.prototype.slice.call(text);
	                }
	            }
	
	            function combineTruthy() {
	                var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	
	                var chars = str2Array(text),
	                    stack = [];
	
	                chars.forEach(function (char) {
	                    if (char === '0') {
	                        stack.push(0);
	                    } else {
	                        if (stack[stack.length - 1] && stack[stack.length] !== 0) {
	                            var top = stack.pop();
	                            stack.push(++top);
	                        } else {
	                            stack.push(1);
	                        }
	                    }
	                });
	
	                return stack;
	            }
	
	            function convertRadix(num) {
	                var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	
	                num = +num;
	                return num.toString(radix);
	            }
	
	            function isEven(number) {
	                return number % 2 === 0;
	            }
	
	            function isOdd(number) {
	                return number % 2 === 1;
	            }
	
	            function toNumber() {
	                var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	                var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	                if (typeof str === 'number') {
	                    return str;
	                }
	
	                var value = parseFloat(str);
	
	                return isNaN(value) ? defaultValue : value;
	            }
	
	            function getUnit() {
	                var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	
	                var result = /[a-zA-Z]+/.exec(str);
	
	                return result ? result[0] : 'px';
	            }
	
	            function getMaxValue(arr) {
	                var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'length';
	
	                var max = 0;
	                arr.forEach(function (item) {
	                    if (item[field] > max) {
	                        max = item[field];
	                    }
	                });
	
	                return max;
	            }
	
	            function assign(target) {
	                for (var _len = arguments.length, varArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                    varArgs[_key - 1] = arguments[_key];
	                }
	
	                if (isFunction(Object.assign)) {
	                    return Object.assign.apply(Object, [target].concat(varArgs));
	                }
	
	                if (target == null) {
	                   
	                    throw new TypeError('Cannot convert undefined or null to object');
	                }
	
	                var to = Object(target);
	
	                for (var index = 0; index < varArgs.length; index++) {
	                    var nextSource = varArgs[index];
	
	                    if (nextSource != null) {
	                       
	                        for (var nextKey in nextSource) {
	                           
	                            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
	                                to[nextKey] = nextSource[nextKey];
	                            }
	                        }
	                    }
	                }
	                return to;
	            }
	
	            function deepMerge(target) {
	                if (target == null) {
	                   
	                    throw new TypeError('Cannot convert undefined or null to object');
	                }
	
	                for (var _len2 = arguments.length, srcs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                    srcs[_key2 - 1] = arguments[_key2];
	                }
	
	                srcs.forEach(function (src) {
	                    if (src) {
	                        for (var key in src) {
	                            if (Object.prototype.hasOwnProperty.call(src, key)) {
	                                if (_typeof(src[key]) === 'object' && _typeof(target[key]) === 'object') {
	                                    target[key] = deepMerge({}, target[key] || {}, src[key]);
	                                } else {
	                                    target[key] = src[key];
	                                }
	                            }
	                        }
	                    }
	                });
	                return target;
	            }
	
	            function strRepeat(text, count) {
	                if (isFunction(text.repeat)) {
	                    return text.repeat(count);
	                }
	
	                var str = '' + text;
	                count = +count;
	                if (count != count) {
	                    count = 0;
	                }
	                if (count < 0) {
	                    throw new RangeError('repeat count must be non-negative');
	                }
	                if (count == Infinity) {
	                    throw new RangeError('repeat count must be less than infinity');
	                }
	                count = Math.floor(count);
	                if (str.length == 0 || count == 0) {
	                    return '';
	                }
	               
	               
	               
	                if (str.length * count >= 1 << 28) {
	                    throw new RangeError('repeat count must not overflow maximum string size');
	                }
	                var rpt = '';
	                for (var i = 0; i < count; i++) {
	                    rpt += str;
	                }
	                return rpt;
	            }
	
	            function isInteger(value) {
	                if (isFunction(Number.isInteger)) {
	                    return Number.isInteger(value);
	                }
	                return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
	            }
	
	            function fillArray(arr, value) {
	                if (isFunction(arr.fill)) {
	                    return arr.fill(value);
	                }
	
	                for (var i = 0; i < arr.length; i++) {
	                    arr[i] = value;
	                }
	                return arr;
	            }
	
	            function strPadStart(str, targetLength, padString) {
	                if (isFunction(str.padStart)) {
	                    return str.padStart(targetLength, padString);
	                }
	
	                targetLength = targetLength >> 0;
	                padString = String(typeof padString !== 'undefined' ? padString : ' ');
	                if (str.length > targetLength) {
	                    return str;
	                } else {
	                    targetLength = targetLength - str.length;
	                    if (targetLength > padString.length) {
	                        padString += strRepeat(padString, targetLength / padString.length);
	                    }
	                    return padString.slice(0, targetLength) + String(str);
	                }
	            }
	
	            var plugins = {};
	            function registerPlugin(name, fn) {
	                plugins[name] = fn;
	            }
	
	            function _defaultMeasureText(text, style) {
	                var num = toNumber(style.fontSize, 12);
	                return num * 1.4;
	            }
	            function _measureText(text, style) {
	                return plugins.measureText(text, style);
	            }
	            function measureText(text, style) {
	                if (isFunction(plugins.measureText)) {
	                    exports.measureText = measureText = _measureText;
	                    return measureText(text, style);
	                }
	
	                return _defaultMeasureText(text, style);
	            }
	
	            function _defaultConvertUnit(size) {
	                var num = toNumber(size, 12);
	                return num;
	            }
	            function _convertUnit(size) {
	                if (isNumberLike(size)) {
	                    return toNumber(size, 12);
	                }
	                return plugins.convertUnit(size);
	            }
	            function convertUnit(size) {
	                if (isFunction(plugins.convertUnit)) {
	                    exports.convertUnit = convertUnit = _convertUnit;
	                    return convertUnit(size);
	                }
	                return _defaultConvertUnit(size);
	            }
	
	            function fixSize2PixelDefault(size) {
	                if (isNumberLike(size)) {
	                    return size + 'px';
	                }
	
	                return size;
	            }
	
	            function getQuietZoneRelativeValue(info) {
	                return info.originIsAbsoluteValue ? 0 : info.relativeValue;
	            }
	
	            function getQuietZonePixelValue(info) {
	                return info.originIsAbsoluteValue ? info.pixelValue : 0;
	            }
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	            function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	
	            var BadArgumentsException = exports.BadArgumentsException = function (_Error) {
	                _inherits(BadArgumentsException, _Error);
	
	                function BadArgumentsException(arg) {
	                    var reason = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	                    _classCallCheck(this, BadArgumentsException);
	
	                    var _this = _possibleConstructorReturn(this, (BadArgumentsException.__proto__ || Object.getPrototypeOf(BadArgumentsException)).call(this));
	
	                    _this.name = 'BadArgumentsException';
	                    var input = JSON.stringify(arg);
	                    _this.message = input + ' is not a valid argument. ' + reason;
	                    return _this;
	                }
	
	                return BadArgumentsException;
	            }(Error);
	
	
	
	
	            var TypeNotSupportException = exports.TypeNotSupportException = function (_Error2) {
	                _inherits(TypeNotSupportException, _Error2);
	
	                function TypeNotSupportException(type) {
	                    _classCallCheck(this, TypeNotSupportException);
	
	                    var _this2 = _possibleConstructorReturn(this, (TypeNotSupportException.__proto__ || Object.getPrototypeOf(TypeNotSupportException)).call(this));
	
	                    _this2.name = 'TypeNotSupportException';
	                    _this2.message = type + ' is not support!';
	                    return _this2;
	                }
	
	                return TypeNotSupportException;
	            }(Error);
	
	
	
	
	            var NotAValidBarcodeEncoderException = exports.NotAValidBarcodeEncoderException = function (_Error3) {
	                _inherits(NotAValidBarcodeEncoderException, _Error3);
	
	                function NotAValidBarcodeEncoderException(name) {
	                    _classCallCheck(this, NotAValidBarcodeEncoderException);
	
	                    var _this3 = _possibleConstructorReturn(this, (NotAValidBarcodeEncoderException.__proto__ || Object.getPrototypeOf(NotAValidBarcodeEncoderException)).call(this));
	
	                    _this3.name = 'NotAValidBarcodeEncoderException';
	                    _this3.message = name + ' is not support!';
	                    return _this3;
	                }
	
	                return NotAValidBarcodeEncoderException;
	            }(Error);
	
	            var SubclassNotImplementException = exports.SubclassNotImplementException = function (_Error4) {
	                _inherits(SubclassNotImplementException, _Error4);
	
	                function SubclassNotImplementException() {
	                    _classCallCheck(this, SubclassNotImplementException);
	
	                    var _this4 = _possibleConstructorReturn(this, (SubclassNotImplementException.__proto__ || Object.getPrototypeOf(SubclassNotImplementException)).call(this));
	
	                    _this4.name = 'SubclassNotImplementException';
	                    _this4.message = 'must implement by subclass!';
	                    return _this4;
	                }
	
	                return SubclassNotImplementException;
	            }(Error);
	
	
	
	
	            var UnrecognizedRenderException = exports.UnrecognizedRenderException = function (_Error5) {
	                _inherits(UnrecognizedRenderException, _Error5);
	
	                function UnrecognizedRenderException(type) {
	                    _classCallCheck(this, UnrecognizedRenderException);
	
	                    var _this5 = _possibleConstructorReturn(this, (UnrecognizedRenderException.__proto__ || Object.getPrototypeOf(UnrecognizedRenderException)).call(this));
	
	                    _this5.name = 'UnrecognizedRenderException';
	                    _this5.message = type + ' is not support!';
	                    return _this5;
	                }
	
	                return UnrecognizedRenderException;
	            }(Error);
	
	
	
	
	            var MethodNotImplementException = exports.MethodNotImplementException = function (_Error6) {
	                _inherits(MethodNotImplementException, _Error6);
	
	                function MethodNotImplementException(name) {
	                    _classCallCheck(this, MethodNotImplementException);
	
	                    var _this6 = _possibleConstructorReturn(this, (MethodNotImplementException.__proto__ || Object.getPrototypeOf(MethodNotImplementException)).call(this));
	
	                    _this6.name = 'MethodNotImplementException';
	                    _this6.message = name + ' doesn\'t have this method!';
	                    return _this6;
	                }
	
	                return MethodNotImplementException;
	            }(Error);
	
	
	
	
	            var InvalidTextException = exports.InvalidTextException = function (_Error7) {
	                _inherits(InvalidTextException, _Error7);
	
	                function InvalidTextException() {
	                    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Empty text';
	                    var reason = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	                    _classCallCheck(this, InvalidTextException);
	
	                    var _this7 = _possibleConstructorReturn(this, (InvalidTextException.__proto__ || Object.getPrototypeOf(InvalidTextException)).call(this));
	
	                    _this7.name = 'InvalidTextException';
	                    _this7.message = text + ' is invalid. ' + reason;
	                    return _this7;
	                }
	
	                return InvalidTextException;
	            }(Error);
	
	            var InvalidCharException = exports.InvalidCharException = function (_Error8) {
	                _inherits(InvalidCharException, _Error8);
	
	                function InvalidCharException(char) {
	                    _classCallCheck(this, InvalidCharException);
	
	                    var _this8 = _possibleConstructorReturn(this, (InvalidCharException.__proto__ || Object.getPrototypeOf(InvalidCharException)).call(this));
	
	                    _this8.name = 'InvalidCharException';
	                    _this8.message = char + ' is invalid.';
	                    return _this8;
	                }
	
	                return InvalidCharException;
	            }(Error);
	
	            var TextTooLargeException = exports.TextTooLargeException = function (_Error9) {
	                _inherits(TextTooLargeException, _Error9);
	
	                function TextTooLargeException() {
	                    _classCallCheck(this, TextTooLargeException);
	
	                    var _this9 = _possibleConstructorReturn(this, (TextTooLargeException.__proto__ || Object.getPrototypeOf(TextTooLargeException)).call(this));
	
	                    _this9.name = 'TextTooLargeException';
	                    _this9.message = 'Text is too larget to encode';
	                    return _this9;
	                }
	
	                return TextTooLargeException;
	            }(Error);
	
	            var ConnectionOverflowException = exports.ConnectionOverflowException = function (_Error10) {
	                _inherits(ConnectionOverflowException, _Error10);
	
	                function ConnectionOverflowException(num) {
	                    _classCallCheck(this, ConnectionOverflowException);
	
	                    var _this10 = _possibleConstructorReturn(this, (ConnectionOverflowException.__proto__ || Object.getPrototypeOf(ConnectionOverflowException)).call(this));
	
	                    _this10.name = 'ConnectionOverflowException';
	                    _this10.message = 'Max Connection Number is ' + (num - 1);
	                    return _this10;
	                }
	
	                return ConnectionOverflowException;
	            }(Error);
	
	            var GroupOverflowException = exports.GroupOverflowException = function (_Error11) {
	                _inherits(GroupOverflowException, _Error11);
	
	                function GroupOverflowException(num) {
	                    _classCallCheck(this, GroupOverflowException);
	
	                    var _this11 = _possibleConstructorReturn(this, (GroupOverflowException.__proto__ || Object.getPrototypeOf(GroupOverflowException)).call(this));
	
	                    _this11.name = 'GroupOverflowException';
	                    _this11.message = 'Max Group Number is ' + (num - 1);
	                    return _this11;
	                }
	
	                return GroupOverflowException;
	            }(Error);
	
	            var GroupSizeException = exports.GroupSizeException = function (_Error12) {
	                _inherits(GroupSizeException, _Error12);
	
	                function GroupSizeException(num) {
	                    _classCallCheck(this, GroupSizeException);
	
	                    var _this12 = _possibleConstructorReturn(this, (GroupSizeException.__proto__ || Object.getPrototypeOf(GroupSizeException)).call(this));
	
	                    _this12.name = 'GroupSizeException';
	                    _this12.message = 'Group size is ' + num + '. The max group size is 9.';
	                    return _this12;
	                }
	
	                return GroupSizeException;
	            }(Error);
	
	            var InvalidStructureNumberException = exports.InvalidStructureNumberException = function (_Error13) {
	                _inherits(InvalidStructureNumberException, _Error13);
	
	                function InvalidStructureNumberException() {
	                    _classCallCheck(this, InvalidStructureNumberException);
	
	                    var _this13 = _possibleConstructorReturn(this, (InvalidStructureNumberException.__proto__ || Object.getPrototypeOf(InvalidStructureNumberException)).call(this));
	
	                    _this13.name = 'InvalidStructureNumberException';
	                    _this13.message = 'InvalidStructureNumberException.';
	                    return _this13;
	                }
	
	                return InvalidStructureNumberException;
	            }(Error);
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	            (function(global) {
	
	                Object.defineProperty(exports, "__esModule", {
	                    value: true
	                });
	
	                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	                var _utils = __webpack_require__(0);
	
	                var _exceptions = __webpack_require__(1);
	
	                var _render = __webpack_require__(23);
	
	                var _render2 = _interopRequireDefault(_render);
	
	                var _constants = __webpack_require__(6);
	
	                var _constants2 = _interopRequireDefault(_constants);
	
	                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	                var defaultCommonOptions = {
	                    renderType: 'canvas',
	                    unitSize: '1px',
	                    color: 'rgb(0,0,0)',
	                    backgroundColor: 'rgb(255,255,255)',
	                    font: {
	                        fontFamily: 'sans-serif',
	                        fontStyle: 'normal',
	                        fontWeight: 'normal',
	                        textDecoration: 'none',
	                        textAlign: 'center',
	                        fontSize: '12px'
	                    }
	                   
	                   
	                   
	                   
	                   
	                };
	
	                var customDefaultOptions = {};
	
	                var encoders = {};
	
	                var Barcode = function () {
	                    _createClass(Barcode, null, [{
	                        key: 'getImageData',
	
	                       
	                       
	
	                        value: function getImageData() {
	                            var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	                            var instance = new Barcode(option);
	                            return instance.getImageData();
	                        }
	                    }, {
	                        key: 'getDataUrl',
	                        value: function getDataUrl() {
	                            var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	                            var instance = new Barcode(option);
	                            return instance.getDataUrl();
	                        }
	
	                       
	
	                    }, {
	                        key: 'setDefaultOptions',
	                        value: function setDefaultOptions() {
	                            var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	                            customDefaultOptions = (0, _utils.deepMerge)({}, option);
	                        }
	
	                       
	
	                    }, {
	                        key: 'registerEncoder',
	                        value: function registerEncoder(name, encoder) {
	                            encoders[name] = encoder;
	                            Barcode.supportType.push(name);
	                        }
	                    }, {
	                        key: 'registerPlugin',
	                        value: function registerPlugin(name, fn) {
	                            (0, _utils.registerPlugin)(name, fn);
	                        }
	
	                       
	
	                    }]);
	
	                    function Barcode() {
	                        _classCallCheck(this, Barcode);
	
	                        var dom = void 0,
	                            option = void 0,
	                            callback = void 0;
	
	                        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                            args[_key] = arguments[_key];
	                        }
	
	                        if (args.length >= 3) {
	                            dom = args[0];
	                            option = args[1];
	                            callback = args[2];
	                        } else if (args.length === 2) {
	                            if ((0, _utils.isFunction)(args[1])) {
	                                option = args[0];
	                                callback = args[1];
	                            } else {
	                                dom = args[0];
	                                option = args[1];
	                            }
	                        } else if (args.length === 1) {
	                            option = args[0];
	                        } else {
	                            throw new _exceptions.BadArgumentsException(args);
	                        }
	
	                        if (typeof dom === 'string') {
	                            this.dom = document.querySelector(dom);
	                        } else {
	                            this.dom = dom;
	                        }
	
	                        this.callback = callback && callback.bind(this);
	                        this.setOption(option);
	                    }
	
	                    _createClass(Barcode, [{
	                        key: 'mergeOption',
	                        value: function mergeOption(option) {
	                            this.option = (0, _utils.deepMerge)({}, this.option, option);
	                            this.update();
	                            return this;
	                        }
	
	                        
	
	                    }, {
	                        key: 'setOption',
	                        value: function setOption(option) {
	                            this.option = (0, _utils.deepMerge)({}, defaultCommonOptions, customDefaultOptions, option);
	                            this.update();
	                            return this;
	                        }
	
	                        
	
	                    }, {
	                        key: 'update',
	                        value: function update() {
	                            var option = this.option;
	
	                            var Encoder = encoders[option.type];
	
	                            if (!Encoder) {
	                                throw new _exceptions.TypeNotSupportException(option.type);
	                            }
	
	                            this.encoder = new Encoder(option);
	
	                            if (this.render) {
	                                this.render.destroy();
	                                this.render = null;
	                            }
	                            this.render = new _render2.default(this.dom, this.encoder);
	                            this.render.render();
	
	                            if ((0, _utils.isFunction)(this.callback)) {
	                                this.callback();
	                            }
	                        }
	                    }, {
	                        key: 'getImageData',
	                        value: function getImageData() {
	                            return this.render.getImageData();
	                        }
	                    }, {
	                        key: 'getDataUrl',
	                        value: function getDataUrl() {
	                            return this.render.getDataUrl();
	                        }
	                    }, {
	                        key: 'getSize',
	                        value: function getSize() {
	                            return this.render.size;
	                        }
	                    }, {
	                        key: 'destroy',
	                        value: function destroy() {
	                            if (this.render) {
	                                this.render.destroy();
	                            }
	                        }
	                    }]);
	
	                    return Barcode;
	                }();
	
	                exports.default = Barcode;
	
	
	                Barcode.supportType = [];
	                Barcode.constants = _constants2.default;
	
	                if ((0, _utils.isWindow)(global)) {
	                    global.Barcode = Barcode;
	                }
	                }.call(exports, __webpack_require__(22)))
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _exceptions = __webpack_require__(1);
	
	            var _utils = __webpack_require__(0);
	
	            var _BCH = __webpack_require__(13);
	
	            var _BCH2 = _interopRequireDefault(_BCH);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            var defaultConfig = {
	                version: 'auto',
	                errorCorrectionLevel: 'L',
	                model: 2,
	                mask: 'auto',
	                connection: false,
	                connectionNo: 0,
	                charCode: undefined,
	                charset: 'UTF-8',
	                quietZone: {
	                    top: 4,
	                    left: 4,
	                    right: 4,
	                    bottom: 4
	                }
	            };
	
	            var MODE_INDICATOR = {
	                ECI: 7,
	                Numeric: 1,
	                Alphanumeric: 2,
	                '8BitByte': 4,
	                Kanji: 8,
	                StructuredAppend: 3,
	                FNC1First: 5,
	                FNC2Second: 9,
	                Terminator: 0
	            };
	
	            var EC_INDICATOR = {
	                L: 1,
	                M: 0,
	                Q: 3,
	                H: 2
	            };
	
	            function isNumericMode(cc) {
	                return cc >= 0x30 && cc <= 0x39;
	            }
	
	            function isAlphanumericMode(cc) {
	                var symbols = ' $%*+-./:';
	                if (symbols.match(String.fromCharCode(cc))) {
	                    return true;
	                }
	                return cc >= 0x30 && cc <= 0x39 || cc >= 0x41 && cc <= 0x5a;
	            }
	
	            function is8BitByteMode(cc) {
	                return cc >= 0x00 && cc <= 0xff;
	            }
	
	            function isKanjiMode(cc) {
	                return cc >= 0x813f && cc <= 0xfc4b;
	            }
	
	            var checkFns = {
	                Numeric: isNumericMode,
	                Alphanumeric: isAlphanumericMode,
	                '8BitByte': is8BitByteMode,
	                Kanji: isKanjiMode
	            };
	
	            function isMode(mode, charcode) {
	                var checkFn = checkFns[mode];
	
	                if (charcode.length === 1) {
	                    return checkFn(charcode);
	                }
	                return charcode.every(function (c) {
	                    return checkFn(c);
	                });
	            }
	
	            function getCharMode(code) {
	                var charset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'UTF-8';
	
	                if (isNumericMode(code)) {
	                    return 'Numeric';
	                }
	                if (isAlphanumericMode(code)) {
	                    return 'Alphanumeric';
	                }
	                if (charset === 'Shift_JIS' && isKanjiMode(code)) {
	                    return 'Kanji';
	                }
	
	                return '8BitByte';
	            }
	
	            var getSizeByVersion = function getSizeByVersion(version) {
	                return version * 4 + 17;
	            };
	
	            function getCharacterCountIndicatorbitsNumber(version) {
	                if (version >= 1 && version <= 9) {
	                    return {
	                        Numeric: 10,
	                        Alphanumeric: 9,
	                        '8BitByte': 8,
	                        Kanji: 8
	                    };
	                } else if (version >= 10 && version <= 26) {
	                    return {
	                        Numeric: 12,
	                        Alphanumeric: 11,
	                        '8BitByte': 16,
	                        Kanji: 10
	                    };
	                } else {
	                    return {
	                        Numeric: 14,
	                        Alphanumeric: 13,
	                        '8BitByte': 16,
	                        Kanji: 12
	                    };
	                }
	            }
	
	            var SYMBOL_MAP = {
	                ' ': 36,
	                '$': 37,
	                '%': 38,
	                '*': 39,
	                '+': 40,
	                '-': 41,
	                '.': 42,
	                '/': 43,
	                ':': 44
	            };
	
	            function getAlphanumericCharValue(cc) {
	                if (cc >= 0x30 && cc <= 0x39) {
	                    return +String.fromCharCode(cc);
	                }
	
	                if (cc >= 0x41 && cc <= 0x5a) {
	                    return cc - 0x41 + 10;
	                }
	
	                var result = SYMBOL_MAP[String.fromCharCode(cc)];
	
	                if (!result) {
	                    throw new _exceptions.InvalidTextException(String.fromCharCode(cc));
	                } else {
	                    return result;
	                }
	            }
	
	            function createModules(size) {
	                var arr = [];
	                for (var i = 0; i < size; i++) {
	                    arr.push((0, _utils.fillArray)(new Array(size), null));
	                }
	                return arr;
	            }
	
	            var alignmentPatterns = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]];
	
	            function getAlignmentPattersPos(version) {
	                return alignmentPatterns[version - 1];
	            }
	
	            var padCodewords0 = 0xEC;
	            var padCodewords1 = 0x11;
	            var maskFuncs = [function (i, j) {
	                return (i + j) % 2 === 0;
	            }, function (i) {
	                return i % 2 === 0;
	            }, function (i, j) {
	                return j % 3 === 0;
	            }, function (i, j) {
	                return (i + j) % 3 === 0;
	            }, function (i, j) {
	                return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
	            }, function (i, j) {
	                return i * j % 2 + i * j % 3 === 0;
	            }, function (i, j) {
	                return (i * j % 2 + i * j % 3) % 2 === 0;
	            }, function (i, j) {
	                return (i * j % 3 + (i + j) % 2) % 2 === 0;
	            }];
	
	            var MODEL2_1ERROR_CORRECTION_CHARACTERISTICS = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9],
	
	
	                [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16],
	
	                [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13],
	
	
	                [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9],
	
	
	                [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12],
	
	
	                [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15],
	
	
	                [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14],
	
	
	                [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15],
	
	
	                [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13],
	
	
	                [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16],
	
	
	                [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13],
	
	
	                [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15],
	
	
	                [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12],
	
	
	                [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13],
	
	
	                [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13],
	
	
	                [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16],
	
	
	                [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15],
	
	
	                [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15],
	
	
	                [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14],
	
	
	                [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16],
	
	
	                [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17],
	
	
	                [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13],
	
	
	                [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16],
	
	
	                [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17],
	
	
	                [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16],
	
	
	                [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17],
	
	
	                [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16],
	
	
	                [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16],
	
	
	                [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16],
	
	
	                [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16],
	
	
	                [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16],
	
	
	                [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16],
	
	
	                [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16],
	
	
	                [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17],
	
	
	                [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16],
	
	
	                [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16],
	
	
	                [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16],
	
	
	                [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16],
	
	
	                [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16],
	
	
	                [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
	            var MODEL1_ERROR_CORRECTION_CHARACTERISTICS = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9],
	
	
	                [1, 46, 36], [1, 46, 30], [1, 46, 24], [1, 46, 16],
	
	                [1, 72, 57], [1, 72, 44], [1, 72, 36], [1, 72, 24],
	
	
	                [1, 100, 80], [1, 100, 60], [1, 100, 50], [1, 100, 34],
	
	
	                [1, 134, 108], [1, 134, 82], [1, 134, 68], [2, 67, 23],
	
	
	                [1, 170, 136], [2, 85, 53], [2, 85, 43], [2, 85, 29],
	
	
	                [1, 212, 170], [2, 106, 66], [2, 106, 54], [3, 70, 24],
	
	
	                [2, 128, 104], [2, 128, 80], [2, 128, 64], [3, 85, 29],
	
	
	                [2, 153, 123], [2, 153, 93], [3, 102, 52], [3, 102, 34],
	
	
	                [2, 179, 145], [2, 179, 111], [3, 119, 61], [4, 89, 31],
	
	
	                [2, 208, 168], [4, 104, 64], [4, 104, 52], [5, 83, 29],
	
	
	                [2, 238, 192], [4, 119, 73], [4, 119, 61], [5, 95, 33],
	
	
	                [3, 180, 144], [4, 135, 83], [4, 135, 69], [6, 90, 32],
	
	
	                [3, 203, 163], [4, 152, 92], [5, 122, 62], [6, 101, 35]];
	
	            function getErrorCorrectionCharacteristics(version, ecLevel) {
	                var model = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
	
	                var index = void 0;
	                switch (ecLevel) {
	                    case 1:
	                        index = 0;
	                        break;
	                    case 0:
	                        index = 1;
	                        break;
	                    case 3:
	                        index = 2;
	                        break;
	                    case 2:
	                        index = 3;
	                        break;
	                }
	                var table = model === 2 ? MODEL2_1ERROR_CORRECTION_CHARACTERISTICS : MODEL1_ERROR_CORRECTION_CHARACTERISTICS;
	                var info = table[(version - 1) * 4 + index];
	                var result = [];
	                var length = info.length / 3;
	
	                for (var i = 0; i < length; i++) {
	                    var blockCount = info[i * 3];
	
	                    for (var j = 0; j < blockCount; j++) {
	                        result.push({
	                            total: info[i * 3 + 1],
	                            data: info[i * 3 + 2],
	                            ec: info[i * 3 + 1] - info[i * 3 + 2]
	                        });
	                    }
	                }
	
	                return result;
	            }
	
	            function getMaskFunc(type) {
	                return maskFuncs[type];
	            }
	
	            function cloneModules(modules) {
	                return modules.reduce(function (arr, row) {
	                    arr.push(row.slice(0));
	                    return arr;
	                }, []);
	            }
	
	            function getMaskScore(modules) {
	                var moduleCount = modules.length;
	                var score = 0;
	
	                for (var row = 0; row < moduleCount; row++) {
	                    for (var col = 0; col < moduleCount; col++) {
	                        var sameCount = 0;
	                        var dark = modules[row][col];
	
	                        for (var r = -1; r <= 1; r++) {
	                            if (row + r < 0 || moduleCount <= row + r) {
	                                continue;
	                            }
	                            for (var c = -1; c <= 1; c++) {
	                                if (col + c < 0 || moduleCount <= col + c) {
	                                    continue;
	                                }
	
	                                if (r == 0 && c == 0) {
	                                    continue;
	                                }
	
	                                if (dark == modules[row + r][col + c]) {
	                                    sameCount += 1;
	                                }
	                            }
	                        }
	
	                        if (sameCount > 5) {
	                            score += 3 + sameCount - 5;
	                        }
	                    }
	                }
	
	                for (var _row = 0; _row < moduleCount - 1; _row++) {
	                    for (var _col = 0; _col < moduleCount - 1; _col++) {
	                        var count = 0;
	                        if (modules[_row][_col]) count += 1;
	                        if (modules[_row + 1][_col]) count += 1;
	                        if (modules[_row][_col + 1]) count += 1;
	                        if (modules[_row + 1][_col + 1]) count += 1;
	                        if (count == 0 || count == 4) {
	                            score += 3;
	                        }
	                    }
	                }
	
	                for (var _row2 = 0; _row2 < moduleCount; _row2++) {
	                    for (var _col2 = 0; _col2 < moduleCount - 6; _col2++) {
	                        if (modules[_row2][_col2] && !modules[_row2][_col2 + 1] && modules[_row2][_col2 + 2] && modules[_row2][_col2 + 3] && modules[_row2][_col2 + 4] && !modules[_row2][_col2 + 5] && modules[_row2][_col2 + 6]) {
	                            score += 40;
	                        }
	                    }
	                }
	
	                for (var _col3 = 0; _col3 < moduleCount; _col3++) {
	                    for (var _row3 = 0; _row3 < moduleCount - 6; _row3++) {
	                        if (modules[_row3][_col3] && !modules[_row3 + 1][_col3] && modules[_row3 + 2][_col3] && modules[_row3 + 3][_col3] && modules[_row3 + 4][_col3] && !modules[_row3 + 5][_col3] && modules[_row3 + 6][_col3]) {
	                            score += 40;
	                        }
	                    }
	                }
	
	                var darkCount = 0;
	
	                for (var _col4 = 0; _col4 < moduleCount; _col4++) {
	                    for (var _row4 = 0; _row4 < moduleCount; _row4++) {
	                        if (modules[_row4][_col4]) {
	                            darkCount += 1;
	                        }
	                    }
	                }
	
	                var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
	                score += ratio * 10;
	
	                return score;
	            }
	
	            function addFormatInformation(originModules, maskPattern, ec, model) {
	                var modulesCount = originModules.length;
	                var modules = cloneModules(originModules);
	                var ecIndicator = (0, _utils.strPadStart)((0, _utils.convertRadix)(ec, 2), 2, 0);
	                var mask = (0, _utils.strPadStart)((0, _utils.convertRadix)(maskPattern, 2), 3, 0);
	                var data = ecIndicator + mask;
	                var format = _BCH2.default.getBCH15(parseInt(data, 2), model);
	
	                modules[modulesCount - 8][8] = 1;
	
	                for (var i = 15; i > 0; i--) {
	                    var dark = format >> i - 1 & 1;
	                    if (i > 9) {
	                        modules[8][15 - i] = dark;
	                        modules[modulesCount - 1 - 15 + i][8] = dark;
	                    } else if (i > 8) {
	                        modules[8][15 - i + 1] = dark;
	                        modules[modulesCount - 1 - 15 + i][8] = dark;
	                    } else if (i > 6) {
	                        modules[i][8] = dark;
	                        modules[8][modulesCount - i] = dark;
	                    } else {
	                        modules[i - 1][8] = dark;
	                        modules[8][modulesCount - i] = dark;
	                    }
	                }
	
	                return modules;
	            }
	
	            function getEstimatedVersion(ec, charCode, model) {
	                var numCount = 0,
	                    alphaCount = 0,
	                    byteCount = 0,
	                    kanjiCount = 0;
	
	                charCode.forEach(function (cc) {
	                    if (isNumericMode(cc)) {
	                        numCount++;
	                    } else if (isAlphanumericMode(cc)) {
	                        alphaCount++;
	                    } else if (isKanjiMode(cc)) {
	                        kanjiCount++;
	                    } else if (is8BitByteMode(cc)) {
	                        byteCount++;
	                    }
	                });
	
	                var size = Math.ceil((alphaCount * 5 + numCount * 3 + kanjiCount * 13 + byteCount * 8) / 8);
	
	                for (var ver = 1; ver <= 40; ver++) {
	                    var blocks = getErrorCorrectionCharacteristics(ver, ec, model);
	                    var dataCapacity = blocks.reduce(function (sum, b) {
	                        return sum += b.data;
	                    }, 0);
	                    if (size <= dataCapacity) {
	                        return ver;
	                    }
	                }
	
	                throw new _exceptions.TextTooLargeException();
	            }
	
	            var MODE_CHECK_INFO = {
	                Alphanumeric: [[6, 11], [7, 15], [8, 16]],
	                Numeric: [[4, 6, 6, 13], [4, 7, 8, 15], [5, 8, 9, 17]]
	            };
	
	            function getModeCheckInfo(mode, version) {
	                var modeInfo = MODE_CHECK_INFO[mode];
	
	                if (version <= 9) {
	                    return modeInfo[0];
	                } else if (version <= 26) {
	                    return modeInfo[1];
	                } else {
	                    return modeInfo[2];
	                }
	            }
	
	            function utf8Encode(charCode) {
	                var bytes = [];
	                for (var i = 0, len = charCode.length; i < len; i++) {
	                    var c = charCode[i];
	                    if (c < 0x80) {
	                        bytes.push(c);
	                    } else if (c < 0x800) {
	                        bytes.push(0xc0 | c >> 6, 0x80 | c & 0x3f);
	                    } else if (c < 0xd800 || c >= 0xe000) {
	                        bytes.push(0xe0 | c >> 12, 0x80 | c >> 6 & 0x3f, 0x80 | c & 0x3f);
	                    } else {
	                        i++;
	                        c = 0x10000 + ((c & 0x3ff) << 10 | charCode[i] & 0x3ff);
	                        bytes.push(0xf0 | c >> 18, 0x80 | c >> 12 & 0x3f, 0x80 | c >> 6 & 0x3f, 0x80 | c & 0x3f);
	                    }
	                }
	
	                return bytes;
	            }
	
	            function getParityData(charCode) {
	                var bytes = utf8Encode(charCode);
	                var result = bytes[0];
	                for (var i = 1, len = bytes.length; i < len; i++) {
	                    result ^= bytes[i];
	                }
	                return result;
	            }
	
	            function getCharCode(text) {
	                var result = [];
	                (0, _utils.sliceString)(text, 1, function (c) {
	                    result.push(c.charCodeAt(0));
	                });
	                return result;
	            }
	
	            exports.default = {
	                defaultConfig: defaultConfig,
	                MODE_INDICATOR: MODE_INDICATOR,
	                isMode: isMode,
	                getSizeByVersion: getSizeByVersion,
	                getCharacterCountIndicatorbitsNumber: getCharacterCountIndicatorbitsNumber,
	                getAlphanumericCharValue: getAlphanumericCharValue,
	                createModules: createModules,
	                getMaskFunc: getMaskFunc,
	                getAlignmentPattersPos: getAlignmentPattersPos,
	                getErrorCorrectionCharacteristics: getErrorCorrectionCharacteristics,
	                padCodewords0: padCodewords0, padCodewords1: padCodewords1,
	                getMaskScore: getMaskScore,
	                maskFuncs: maskFuncs,
	                addFormatInformation: addFormatInformation,
	                getEstimatedVersion: getEstimatedVersion,
	                getCharMode: getCharMode,
	                EC_INDICATOR: EC_INDICATOR,
	                getModeCheckInfo: getModeCheckInfo,
	                getParityData: getParityData,
	                utf8Encode: utf8Encode,
	                getCharCode: getCharCode
	            };
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _BarcodeEncoder2 = __webpack_require__(10);
	
	            var _BarcodeEncoder3 = _interopRequireDefault(_BarcodeEncoder2);
	
	            var _utils = __webpack_require__(0);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	            function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	            var OneDimensionalBarcode = function (_BarcodeEncoder) {
	                _inherits(OneDimensionalBarcode, _BarcodeEncoder);
	
	                function OneDimensionalBarcode() {
	                    _classCallCheck(this, OneDimensionalBarcode);
	
	                    return _possibleConstructorReturn(this, (OneDimensionalBarcode.__proto__ || Object.getPrototypeOf(OneDimensionalBarcode)).apply(this, arguments));
	                }
	
	                _createClass(OneDimensionalBarcode, [{
	                    key: 'adjustDesiredSize',
	                    value: function adjustDesiredSize(data) {
	                        var _config = this.config,
	                            desiredSize = _config.desiredSize,
	                            showLabel = _config.showLabel,
	                            quietZone = this.quietZone,
	                            fontHeight = this.fontHeight,
	                            containerWidth = this.containerWidth,
	                            containerHeight = this.containerHeight;
	
	
	                        if (!desiredSize) {
	                            return;
	                        }
	                        var symbolWidth = data.length + (0, _utils.getQuietZoneRelativeValue)(quietZone.left) + (0, _utils.getQuietZoneRelativeValue)(quietZone.right);
	                        containerWidth = containerWidth - (0, _utils.getQuietZonePixelValue)(quietZone.left) - (0, _utils.getQuietZonePixelValue)(quietZone.right);
	                        var uWidth = void 0,
	                            unitValue = void 0;
	                        if (desiredSize.forceRounding) {
	                            uWidth = ~~(containerWidth / symbolWidth);
	                            unitValue = uWidth < 1 ? 1 : uWidth;
	                        } else {
	                            uWidth = unitValue = containerWidth / symbolWidth;
	                        }
	                        this.style.unitValue = unitValue;
	                        this.style.fontSizeInUnit = fontHeight / unitValue;
	
	                        containerHeight = showLabel ? containerHeight - fontHeight : containerHeight;
	                        containerHeight = containerHeight - (0, _utils.getQuietZonePixelValue)(quietZone.top) - (0, _utils.getQuietZonePixelValue)(quietZone.bottom);
	
	                        this.height = containerHeight / unitValue - (0, _utils.getQuietZoneRelativeValue)(quietZone.top) - (0, _utils.getQuietZoneRelativeValue)(quietZone.bottom);
	
	                        Object.keys(quietZone).forEach(function (item) {
	                            if (quietZone[item].originIsAbsoluteValue) {
	                                quietZone[item].relativeValue = quietZone[item].pixelValue / unitValue;
	                            }
	                        });
	                    }
	                }, {
	                    key: 'convertToShape',
	                    value: function convertToShape(data) {
	                        var label = this.label,
	                            quietZone = this.quietZone,
	                            isLabelBottom = this.isLabelBottom,
	                            height = this.height,
	                            showLabel = this.config.showLabel,
	                            _style = this.style,
	                            fontSizeInUnit = _style.fontSizeInUnit,
	                            textAlign = _style.textAlign;
	
	
	                        if (!showLabel) {
	                            fontSizeInUnit = 0;
	                        }
	                        var shapes = [];
	
	                        var startX = quietZone.left.relativeValue,
	                            startY = quietZone.top.relativeValue,
	                            textY = void 0;
	
	                        if (isLabelBottom) {
	                            textY = startY + height;
	                        } else {
	                            textY = startY;
	                            startY += fontSizeInUnit;
	                        }
	
	                        (0, _utils.combineTruthy)(data).forEach(function (num) {
	                            if (num !== 0) {
	                                shapes.push({
	                                    type: 'rect',
	                                    x: startX,
	                                    y: startY,
	                                    width: num,
	                                    height: height
	                                });
	                                startX += num;
	                            } else {
	                                startX++;
	                            }
	                        });
	
	                        if (showLabel) {
	                            var textX = quietZone.left.relativeValue;
	                            var cellWidth = data.length;
	
	                            switch (textAlign) {
	                                case 'center':
	                                    textX += cellWidth / 2;
	                                    break;
	                                case 'right':
	                                    textX += cellWidth;
	                                    break;
	                                default:
	                            }
	
	                            shapes.push({
	                                type: 'text',
	                                x: textX,
	                                y: textY,
	                                text: label,
	                                textAlign: textAlign,
	                                maxWidth: cellWidth
	                            });
	                        }
	
	                        if (isLabelBottom) {
	                            this.size = {
	                                width: startX + quietZone.right.relativeValue,
	                                height: textY + fontSizeInUnit + quietZone.bottom.relativeValue
	                            };
	                        } else {
	                            this.size = {
	                                width: startX + quietZone.right.relativeValue,
	                                height: startY + height + quietZone.bottom.relativeValue
	                            };
	                        }
	
	                        this.shapes = shapes;
	                    }
	                }]);
	
	                return OneDimensionalBarcode;
	            }(_BarcodeEncoder3.default);
	
	            exports.default = OneDimensionalBarcode;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _exceptions = __webpack_require__(1);
	
	            var _utils = __webpack_require__(0);
	
	            var _constants = __webpack_require__(6);
	
	            var _constants2 = _interopRequireDefault(_constants);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            var TableCode128A = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')',
	                '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[',
	                '\\', ']', '^', '_', '\0', '\x01', '\x02', '\x03', '\x04', '\x05', '\x06', '\x07', '\b', '\t', '\n', '\x0B', '\f', '\r', '\x0E', '\x0F', '\x10', '\x11', '\x12', '\x13', '\x14', '\x15', '\x16', '\x17', '\x18', '\x19', '\x1A', '\x1B', '\x1C', '\x1D', '\x1E', '\x1F', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
	
	            var TableCode128B = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')',
	                '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[',
	                '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~', '\x7F', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
	
	            var TableCode128Data = ['212222', '222122', '222221', '121223', '121322', '131222', '122213', '122312', '132212', '221213',
	                '221312', '231212', '112232', '122132', '122231', '113222', '123122', '123221', '223211', '221132', '221231', '213212', '223112', '312131', '311222', '321122', '321221', '312212', '322112', '322211', '212123', '212321', '232121', '111323', '131123', '131321', '112313', '132113', '132311', '211313', '231113', '231311', '112133', '112331', '132131', '113123', '113321', '133121', '313121', '211331', '231131', '213113', '213311', '213131', '311123', '311321', '331121', '312113', '312311', '332111',
	                '314111', '221411', '431111', '111224', '111422', '121124', '121421', '141122', '141221', '112214', '112412', '122114', '122411', '142112', '142211', '241211', '221114', '413111', '241112', '134111', '111242', '121142', '121241', '114212', '124112', '124211', '411212', '421112', '421211', '212141', '214121', '412121', '111143', '111341', '131141', '114113',
	                '114311',
	                '411113',
	                '411311',
	                '113141',
	
	                '114131',
	                '311141',
	                '411131',
	
	                '211412',
	                '211214',
	                '211232'
	            ];
	
	            var stopPattern = '2331112';
	
	            var Code128Sym = {
	                CodeC: 99,
	                CodeB: 100,
	                CodeA: 101,
	                FNC1: 102,
	                FNC2: 97,
	                FNC3: 96,
	                StartA: 103,
	                StartB: 104,
	                StartC: 105
	            };
	
	            var Code128Char = {
	                CodeC: String.fromCharCode(204),
	                CodeB: String.fromCharCode(205),
	                CodeA: String.fromCharCode(206),
	                FNC1: _constants2.default.FNC1,
	                FNC2: _constants2.default.FNC2,
	                FNC3: _constants2.default.FNC3,
	                StartA: String.fromCharCode(208),
	                StartB: String.fromCharCode(209),
	                StartC: String.fromCharCode(210)
	            };
	
	            function getCharValue(str, table) {
	                if (str === Code128Char.FNC1) {
	                    return Code128Sym.FNC1;
	                } else if (str === Code128Char.FNC2) {
	                    return Code128Sym.FNC2;
	                } else if (str === Code128Char.FNC3) {
	                    return Code128Sym.FNC3;
	                }
	                var value = void 0;
	                switch (table) {
	                    case 'A':
	                        value = TableCode128A.indexOf(str);
	                        return value;
	                    case 'B':
	                        value = TableCode128B.indexOf(str);
	                        return value;
	                    case 'C':
	                        return +str;
	                }
	            }
	
	            function getCharPattern(str, table) {
	                var result = TableCode128Data[getCharValue(str, table)];
	                if (!result) {
	                    throw new _exceptions.InvalidCharException(str);
	                }
	                return result;
	            }
	
	            function getPatternByIndex(index) {
	                return TableCode128Data[index];
	            }
	
	            var defaultConfig = {
	                height: 60,
	                showLabel: true,
	                codeSet: 'auto',
	                quietZone: {
	                    top: 0,
	                    right: 10,
	                    bottom: 0,
	                    left: 10
	                },
	                labelPosition: 'bottom'
	            };
	
	            function encode(str) {
	                var data = '';
	
	                (0, _utils.str2Array)(str).forEach(function (n, index) {
	                    if ((0, _utils.isEven)(index)) {
	                        data += (0, _utils.strRepeat)('1', +n);
	                    } else {
	                        data += (0, _utils.strRepeat)('0', +n);
	                    }
	                });
	
	                return data;
	            }
	
	            exports.default = {
	                getCharValue: getCharValue, getCharPattern: getCharPattern, getPatternByIndex: getPatternByIndex, Code128Sym: Code128Sym, stopPattern: stopPattern, defaultConfig: defaultConfig, Code128Char: Code128Char, encode: encode
	            };
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	            var FNC1 = '\xCF';
	            var FNC2 = '\xCA';
	            var FNC3 = '\xC9';
	            var DataMatrixFNC1 = '\u2000';
	            var DataMatrixMacro05 = '\u2004';
	            var DataMatrixMacro06 = '\u2005';
	            exports.default = {
	                FNC1: FNC1, FNC2: FNC2, FNC3: FNC3, DataMatrixFNC1: DataMatrixFNC1, DataMatrixMacro05: DataMatrixMacro05, DataMatrixMacro06: DataMatrixMacro06
	            };
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _BarcodeEncoder2 = __webpack_require__(10);
	
	            var _BarcodeEncoder3 = _interopRequireDefault(_BarcodeEncoder2);
	
	            var _utils = __webpack_require__(0);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	            function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	            var TwoDimensionalBarcode = function (_BarcodeEncoder) {
	                _inherits(TwoDimensionalBarcode, _BarcodeEncoder);
	
	                function TwoDimensionalBarcode() {
	                    _classCallCheck(this, TwoDimensionalBarcode);
	
	                    return _possibleConstructorReturn(this, (TwoDimensionalBarcode.__proto__ || Object.getPrototypeOf(TwoDimensionalBarcode)).apply(this, arguments));
	                }
	
	                _createClass(TwoDimensionalBarcode, [{
	                    key: 'adjustDesiredSize',
	                    value: function adjustDesiredSize(matrix) {
	                        var _config = this.config,
	                            desiredSize = _config.desiredSize,
	                            showLabel = _config.showLabel,
	                            quietZone = this.quietZone,
	                            fontHeight = this.fontHeight,
	                            containerWidth = this.containerWidth,
	                            containerHeight = this.containerHeight;
	
	
	                        if (!desiredSize) {
	                            return;
	                        }
	                        var symbolWidth = matrix[0].length + (0, _utils.getQuietZoneRelativeValue)(quietZone.left) + (0, _utils.getQuietZoneRelativeValue)(quietZone.right),
	                            symbolHeight = matrix.length + (0, _utils.getQuietZoneRelativeValue)(quietZone.top) + (0, _utils.getQuietZoneRelativeValue)(quietZone.bottom);
	                        containerWidth = containerWidth - (0, _utils.getQuietZonePixelValue)(quietZone.left) - (0, _utils.getQuietZonePixelValue)(quietZone.right);
	                        containerHeight = containerHeight - (0, _utils.getQuietZonePixelValue)(quietZone.top) - (0, _utils.getQuietZonePixelValue)(quietZone.bottom);
	
	                        var uWidth = void 0,
	                            uHight = void 0,
	                            unitValue = void 0;
	                        if (desiredSize.forceRounding) {
	                            uWidth = ~~(containerWidth / symbolWidth), uHight = ~~(containerHeight / symbolHeight);
	                            uWidth = uWidth < 1 ? 1 : uWidth;
	                            uHight = uHight < 1 ? 1 : uHight;
	                        } else {
	                            uWidth = containerWidth / symbolWidth, uHight = containerHeight / symbolHeight;
	                        }
	
	                        this.style.unitValue = unitValue = Math.min(uWidth, uHight);
	                        this.style.fontSizeInUnit = fontHeight / unitValue;
	
	                        containerHeight = showLabel ? containerHeight - fontHeight : containerHeight;
	                        this.height = containerHeight / unitValue - (0, _utils.getQuietZoneRelativeValue)(quietZone.top) - (0, _utils.getQuietZoneRelativeValue)(quietZone.bottom);
	
	                        Object.keys(quietZone).forEach(function (item) {
	                            if (quietZone[item].originIsAbsoluteValue) {
	                                quietZone[item].relativeValue = quietZone[item].pixelValue / unitValue;
	                            }
	                        });
	                    }
	                }, {
	                    key: 'convertToShape',
	                    value: function convertToShape(modules) {
	                        var quietZone = this.quietZone;
	
	
	                        var shapes = [];
	
	                        var startY = quietZone.top.relativeValue;
	
	                        modules.forEach(function (row) {
	                            var startX = quietZone.left.relativeValue;
	                            row.forEach(function (cell) {
	                                if (cell) {
	                                    shapes.push({
	                                        type: 'rect',
	                                        x: startX,
	                                        y: startY,
	                                        width: 1,
	                                        height: 1
	                                    });
	                                }
	                                startX++;
	                            });
	                            startY++;
	                        });
	
	                        this.shapes = shapes;
	
	                        this.size = {
	                            width: modules[0].length + quietZone.left.relativeValue + quietZone.right.relativeValue,
	                            height: startY + quietZone.bottom.relativeValue
	                        };
	                    }
	                }]);
	
	                return TwoDimensionalBarcode;
	            }(_BarcodeEncoder3.default);
	
	            exports.default = TwoDimensionalBarcode;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _utils = __webpack_require__(0);
	
	            var _exceptions = __webpack_require__(1);
	
	            var _constants = __webpack_require__(6);
	
	            var _constants2 = _interopRequireDefault(_constants);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            var CONSTANTS = {
	                FNC1Input: _constants2.default.DataMatrixFNC1.charCodeAt(0),
	                Macro05Input: _constants2.default.DataMatrixMacro05.charCodeAt(0),
	                Macro06Input: _constants2.default.DataMatrixMacro06.charCodeAt(0),
	                StructuredAppand: 233,
	                FileIdentifierMax: 254,
	                ASCIIPad: 129,
	                ASCIIUpperShift: 235,
	                ASCIIFNC1: 232,
	                Macro05: 236,
	                Macro06: 237,
	
	                TripletUppershift: 158,
	                TripletFNC1: 155,
	                TripletPad: 0,
	                InvalidTripletValue: 0xff,
	
	                LatchToC40: 230,
	                LatchToBase256: 231,
	                LatchToX12: 238,
	                LatchToText: 239,
	                LatchToEDIFACT: 240,
	                TripletUnlatch: 254,
	                EDIFACTUnlatch: 31,
	
	                PseudoRandomSeed: 149,
	                PadRandomBase: 253,
	                Base256RandomBase: 255,
	
	                Base256SmallBlockSize: 249,
	                EDIFACTMask: 0x3f,
	                Unvisited: 0xff,
	
	                TripletShifts: [255, 0, 1, 2],
	
	                MaxCodeWrods: 2178,
	                MaxStructures: 16,
	                MaxLookAheadOffset: 50
	            };
	
	            var SymbolInfo = {
	                keys: ['square10', 'square12', 'square14', 'square16', 'square18', 'square20', 'square22', 'square24', 'square26', 'square32', 'square36', 'square40', 'square44', 'square48', 'square52', 'square64', 'square72', 'square80', 'square88', 'square96', 'square104', 'square120', 'square132', 'square144', 'rectangular8x18', 'rectangular8x32', 'rectangular12x26', 'rectangular12x36', 'rectangular16x36', 'rectangular16x48'],
	                values: [[10, 10, 3, 5, 1, 1, 8, 8], [12, 12, 5, 7, 1, 1, 10, 10], [14, 14, 8, 10, 1, 1, 12, 12], [16, 16, 12, 12, 1, 1, 14, 14], [18, 18, 18, 14, 1, 1, 16, 16], [20, 20, 22, 18, 1, 1, 18, 18], [22, 22, 30, 20, 1, 1, 20, 20], [24, 24, 36, 24, 1, 1, 22, 22], [26, 26, 44, 28, 1, 1, 24, 24], [32, 32, 62, 36, 1, 4, 14, 14], [36, 36, 86, 42, 1, 4, 16, 16], [40, 40, 114, 48, 1, 4, 18, 18], [44, 44, 144, 56, 1, 4, 20, 20], [48, 48, 174, 68, 1, 4, 22, 22], [52, 52, 204, 84, 2, 4, 24, 24], [64, 64, 280, 112, 2, 16, 14, 14], [72, 72, 368, 144, 4, 16, 16, 16], [80, 80, 456, 192, 4, 16, 18, 18], [88, 88, 576, 224, 4, 16, 20, 20], [96, 96, 696, 272, 4, 16, 22, 22], [104, 104, 816, 336, 6, 16, 24, 24], [120, 120, 1050, 408, 6, 36, 18, 18], [132, 132, 1304, 496, 8, 36, 20, 20], [144, 144, 1558, 620, 10, 36, 22, 22], [8, 18, 5, 7, 1, 1, 6, 16], [8, 32, 10, 11, 1, 2, 6, 14], [12, 26, 16, 14, 1, 1, 10, 24], [12, 36, 22, 18, 1, 2, 10, 16], [16, 36, 32, 24, 1, 2, 14, 16], [16, 48, 49, 28, 1, 2, 14, 22]]
	            };
	
	            function getSymbolInfo(type) {
	                var info = SymbolInfo.values[SymbolInfo.keys.indexOf(type)];
	                if (!info) {
	                    throw new _exceptions.BadArgumentsException({ ecc200SymbolSize: type });
	                }
	                return {
	                    symbolRows: info[0],
	                    symbolColumns: info[1],
	                    symbolDataCapacity: info[2],
	                    eccLength: info[3],
	                    interleavedBlocks: info[4],
	                    regions: info[5],
	                    regionRows: info[6],
	                    regionColumns: info[7]
	                };
	            }
	
	            function getSuitableSymbolSize(prefered, codeLength) {
	                if (prefered !== 'squareAuto' && prefered !== 'rectangularAuto') {
	                    return getSymbolInfo(prefered);
	                }
	
	                for (var i = prefered == 'squareAuto' ? 0 : 24; i < SymbolInfo.keys.length; ++i) {
	                    if (SymbolInfo.values[i][2] >= codeLength) {
	                        return getSymbolInfo(SymbolInfo.keys[i]);
	                    }
	                }
	
	                throw new _exceptions.TextTooLargeException();
	            }
	
	            function getInfoOfRegions(size) {
	                var rowOfRegion = void 0,
	                    colOfRegion = void 0;
	                switch (size) {
	                    case 1:
	                    case 2:
	                        rowOfRegion = 1;
	                        break;
	                    case 4:
	                        rowOfRegion = 2;
	                        break;
	                    case 16:
	                        rowOfRegion = 4;
	                        break;
	                    case 36:
	                        rowOfRegion = 6;
	                }
	                colOfRegion = ~~(size / rowOfRegion);
	
	                return { rowOfRegion: rowOfRegion, colOfRegion: colOfRegion };
	            }
	
	            function createModules(row, col) {
	                if (!col) {
	                    col = row;
	                }
	                var arr = [];
	                for (var i = 0; i < row; i++) {
	                    arr.push((0, _utils.fillArray)(new Array(col), null));
	                }
	                return arr;
	            }
	
	            var TripletUppershift = 158;
	            var TripletFNC1 = 155;
	
	            var ASCIIMax = 127;
	            var ExtendedASCIIMin = 128;
	            var Space = 32;
	            var NumericMin = 48;
	            var NumericMax = 57;
	            var LowerCasedLetterMin = 97;
	            var LowerCasedLetterMax = 122;
	            var UpperCasedLetterMin = 65;
	            var UpperCasedLetterMax = 90;
	
	            function getCharType(value) {
	                if (value > ASCIIMax) {
	                    if (value == CONSTANTS.FNC1Input) {
	
	                        return 'FNC1';
	                    } else {
	                        return 'ExtendedASCII';
	                    }
	                }
	
	                if (value >= NumericMin && value <= NumericMax) {
	                    return 'Numeric';
	                }
	                if (value >= LowerCasedLetterMin && value <= LowerCasedLetterMax) {
	                    return 'LowerCasedLetter';
	                }
	                if (value >= UpperCasedLetterMin && value <= UpperCasedLetterMax) {
	                    return 'UpperCasedLetter';
	                }
	
	                return 'ASCIIOther';
	            }
	
	            function getX12Value(value) {
	                var type = getCharType(value);
	                switch (type) {
	                    case 'Numeric':
	                        return value - 44;
	                    case 'UpperCasedLetter':
	                        return value - 51;
	                    default:
	                        switch (value) {
	                            case 13:
	                                return 0;
	                            case 42:
	                                return 1;
	                            case 62:
	                                return 2;
	                            case 32:
	                                return 3;
	                        }
	                        break;
	                }
	                return CONSTANTS.InvalidTripletValue;
	            }
	
	            function getTripletCharValue(charSet, value) {
	                if (charSet == 'X12') {
	                    return getX12Value(value);
	                }
	
	                if (value < 32) {
	                    return value;
	                }
	                if (value == 32) {
	                    return 3;
	                }
	                if (value < 48) {
	                    return value - 33;
	                }
	                if (value < 58) {
	                    return value - 44;
	                }
	                if (value < 65) {
	                    return value - 43;
	                }
	                if (value < 91) {
	                    return charSet == 'C40' ? value - 51 : value - 64;
	                }
	                if (value < 96) {
	                    return value - 69;
	                }
	                if (value == 96) {
	                    return 0;
	                }
	                if (value < 123) {
	                    return charSet == 'C40' ? value - 96 : value - 83;
	                }
	                if (value < 128) {
	                    return value - 96;
	                }
	                if (value == TripletFNC1 || value == TripletUppershift) {
	                    return value - 128;
	                }
	                throw new _exceptions.InvalidCharException(String.fromCharCode(value));
	            }
	
	            function isDigit(value) {
	                return value >= NumericMin && value <= NumericMax;
	            }
	
	            function getTripletCharSetChannel(charSet, value) {
	                if (charSet === 'X12') return 0;
	
	                if (value < 32) return 1;
	                if (value == 32) return 0;
	                if (value < 48) return 2;
	                if (value < 58) return 0;
	                if (value < 65) return 2;
	                if (value < 91) {
	                    return charSet == 'C40' ? 0 : 3;
	                }
	                if (value < 96) {
	                    return 2;
	                }
	                if (value == 96) {
	                    return 3;
	                }
	                if (value < 123) {
	                    return charSet === 'C40' ? 3 : 0;
	                }
	                if (value == CONSTANTS.TripletFNC1 || value == CONSTANTS.TripletUppershift) {
	                    return 2;
	                }
	
	                return 3;
	            }
	
	            function getTripletEncodeValues(charSet, symbol) {
	                var values = [];
	
	                if (symbol == CONSTANTS.FNC1Input) {
	                    if (charSet == 'X12') {
	                        throw new _exceptions.InvalidCharException('FNC1');
	                    }
	                    symbol = CONSTANTS.TripletFNC1;
	                } else if (symbol > ASCIIMax) {
	                    if (charSet == 'C40' || charSet == 'Text') {
	                        values.push(CONSTANTS.TripletShifts[2]);
	                        values.push(getTripletCharValue(charSet, CONSTANTS.TripletUppershift));
	                        symbol -= ExtendedASCIIMin;
	                    } else {
	                        throw new _exceptions.InvalidCharException(String.fromCharCode(symbol));
	                    }
	                }
	
	                var shift = getTripletCharSetChannel(charSet, symbol);
	                if (shift > 0) {
	                    values.push(CONSTANTS.TripletShifts[shift]);
	                }
	                values.push(getTripletCharValue(charSet, symbol));
	
	                return values;
	            }
	
	            function getEDIFACTValue(value) {
	                if (value < 32 || value > 94) {
	                    return CONSTANTS.InvalidTripletValue;
	                }
	                return value & CONSTANTS.EDIFACTMask;
	            }
	
	            function getRandomizedValue(value, position, baseValue) {
	                var tempValue = value + CONSTANTS.PseudoRandomSeed * position % baseValue + 1;
	                return tempValue > baseValue + 1 ? tempValue - baseValue - 1 : tempValue;
	            }
	
	            function mergeUnits(units) {
	                var mergedList = [];
	                if (units.length > 0) {
	                    var current = units[0];
	                    for (var i = 1; i < units.length; ++i) {
	                        if (units[i].charSet != current.charSet) {
	                            if (current.length > 0) {
	                                mergedList.push((0, _utils.assign)({}, current));
	                            }
	                            current.charSet = units[i].charSet;
	                            current.start = units[i].start;
	                            current.length = units[i].length;
	                        } else {
	                            current.length += units[i].length;
	                        }
	                    }
	
	                    if (current.length > 0) {
	                        mergedList.push(current);
	                    }
	                }
	
	                return mergedList;
	            }
	
	            exports.default = {
	                getSymbolInfo: getSymbolInfo,
	                getInfoOfRegions: getInfoOfRegions,
	                createModules: createModules,
	                CONSTANTS: CONSTANTS,
	                getTripletCharValue: getTripletCharValue,
	                getRandomizedValue: getRandomizedValue,
	                getCharType: getCharType,
	                getSuitableSymbolSize: getSuitableSymbolSize,
	                isDigit: isDigit,
	                getTripletCharSetChannel: getTripletCharSetChannel,
	                getX12Value: getX12Value,
	                getEDIFACTValue: getEDIFACTValue,
	                getTripletEncodeValues: getTripletEncodeValues,
	                mergeUnits: mergeUnits,
	                TripletUppershift: TripletUppershift,
	                TripletFNC1: TripletFNC1,
	                ASCIIMax: ASCIIMax,
	                ExtendedASCIIMin: ExtendedASCIIMin,
	                Space: Space,
	                NumericMin: NumericMin,
	                NumericMax: NumericMax,
	                LowerCasedLetterMin: LowerCasedLetterMin,
	                LowerCasedLetterMax: LowerCasedLetterMax,
	                UpperCasedLetterMin: UpperCasedLetterMin,
	                UpperCasedLetterMax: UpperCasedLetterMax,
	                setRegionData: setRegionData,
	                setFinder: setFinder
	            };
	
	
	            function setFinder(matrix, info, rowOffset, colOffset) {
	                var regionColumns = info.regionColumns,
	                    regionRows = info.regionRows;
	
	                regionRows += 2;
	                regionColumns += 2;
	                rowOffset *= regionRows;
	                colOffset *= regionColumns;
	
	                var firstRow = matrix[rowOffset];
	                for (var i = colOffset; i < colOffset + regionColumns; i++) {
	                    if ((0, _utils.isEven)(i)) {
	                        firstRow[i] = 1;
	                    } else {
	                        firstRow[i] = 0;
	                    }
	                }
	                var lastRow = matrix[rowOffset + regionRows - 1];
	                for (var _i = colOffset; _i < colOffset + regionColumns; _i++) {
	                    lastRow[_i] = 1;
	                }
	                for (var _i2 = rowOffset; _i2 < rowOffset + regionRows; _i2++) {
	                    matrix[_i2][colOffset] = 1;
	
	                    if ((0, _utils.isEven)(_i2)) {
	                        matrix[_i2][colOffset + regionColumns - 1] = 0;
	                    } else {
	                        matrix[_i2][colOffset + regionColumns - 1] = 1;
	                    }
	                }
	            }
	            function setRegionData(matrix, info, r, c, data) {
	                var regionColumns = info.regionColumns,
	                    regionRows = info.regionRows;
	
	                var targetRowOffset = r * (regionRows + 2) + 1;
	                var targetColOffset = c * (regionColumns + 2) + 1;
	                var orginRowOffset = r * regionRows;
	                var originColOffset = c * regionColumns;
	
	                for (var _r = 0; _r < regionRows; ++_r) {
	                    for (var _c = 0; _c < regionColumns; ++_c) {
	                        matrix[targetRowOffset + _r][targetColOffset + _c] = data[orginRowOffset + _r][originColOffset + _c];
	                    }
	                }
	            }
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	            var NORMAL_GUARD = '101';
	            var CENTRE_GUARD = '01010';
	            var ADD_ON_GUARD = '1011';
	            var ADD_ON_DELINEATOR = '01';
	
	            var TABLE = {
	                A: ['0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	                B: ['0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111'],
	                C: ['1110010', '1100110', '1101100', '1000010', '1011100', '1001110', '1010000', '1000100', '1001000', '1110100']
	            };
	
	            var leftStructure = ['AAAAAA', 'AABABB', 'AABBAB', 'AABBBA', 'ABAABB', 'ABBAAB', 'ABBBAA', 'ABABAB', 'ABABBA', 'ABBABA'];
	
	            var rightStructure = 'CCCCCC';
	            var ean8LeftStructure = 'AAAA';
	
	            var fiveDigitAddOnStructure = ['BBAAA', 'BABAA', 'BAABA', 'BAAAB', 'ABBAA', 'AABBA', 'AAABB', 'ABABA', 'ABAAB', 'AABAB'];
	
	            var defaultConfig = {
	                height: 60,
	                showLabel: true,
	                labelPosition: 'bottom',
	                addOnHeight: 'auto',
	                addOnLabelPosition: 'top',
	                quietZone: {
	                    top: 0,
	                    right: 7,
	                    bottom: 0,
	                    left: 11,
	                    addOn: 5
	                }
	            };
	
	            var get2DigitAddOnTable = function get2DigitAddOnTable(num) {
	                num = parseInt(num);
	                switch (num % 4) {
	                    case 0:
	                        return { leftStructure: 'A', rightStructure: 'A' };
	                    case 1:
	                        return { leftStructure: 'A', rightStructure: 'B' };
	                    case 2:
	                        return { leftStructure: 'B', rightStructure: 'A' };
	                    case 3:
	                        return { leftStructure: 'B', rightStructure: 'B' };
	                }
	            };
	
	            var get5DigitAddOnTable = function get5DigitAddOnTable(num) {
	                num += '';
	
	                var a = +num[0] + +num[2] + +num[4];
	                var b = 3 * a;
	                var c = +num[1] + +num[3];
	                var d = 9 * c;
	                var e = b + d;
	
	                return fiveDigitAddOnStructure[e % 10];
	            };
	
	            exports.default = {
	                NORMAL_GUARD: NORMAL_GUARD,
	                CENTRE_GUARD: CENTRE_GUARD,
	                TABLE: TABLE,
	                leftStructure: leftStructure,
	                rightStructure: rightStructure,
	                defaultConfig: defaultConfig,
	                get2DigitAddOnTable: get2DigitAddOnTable,
	                ean8LeftStructure: ean8LeftStructure,
	                ADD_ON_DELINEATOR: ADD_ON_DELINEATOR,
	                get5DigitAddOnTable: get5DigitAddOnTable,
	                ADD_ON_GUARD: ADD_ON_GUARD
	            };
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _exceptions = __webpack_require__(1);
	
	            var _utils = __webpack_require__(0);
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            var BarcodeEncoder = function () {
	                function BarcodeEncoder(config) {
	                    var defaultConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	                    _classCallCheck(this, BarcodeEncoder);
	
	                    this.config = (0, _utils.deepMerge)({}, defaultConfig, config);
	
	                    var _config = this.config,
	                        text = _config.text,
	                        quietZone = _config.quietZone,
	                        unitSize = _config.unitSize,
	                        height = _config.height,
	                        backgroundColor = _config.backgroundColor,
	                        color = _config.color,
	                        renderType = _config.renderType,
	                        labelPosition = _config.labelPosition,
	                        desiredSize = _config.desiredSize,
	                        showLabel = _config.showLabel,
	                        font = _config.font;
	
	                    if ((0, _utils.isDefined)(text)) {
	                        this.config.text += '';
	                    }
	
	                    if ((0, _utils.isDefined)(labelPosition)) {
	                        this.isLabelBottom = labelPosition !== 'top';
	                    }
	                    unitSize = (0, _utils.fixSize2PixelDefault)(unitSize);
	                    font.fontSize = (0, _utils.fixSize2PixelDefault)(font.fontSize);
	                    var unitValue = (0, _utils.convertUnit)(unitSize);
	                    var fontHeight = (0, _utils.measureText)(text, font);
	                    this.fontHeight = fontHeight;
	                    var fontSizeInUnit = showLabel ? fontHeight / unitValue : 0;
	                    this.style = (0, _utils.assign)({}, font, {
	                        backgroundColor: backgroundColor, color: color, fontSizeInUnit: fontSizeInUnit, unitValue: unitValue, renderType: renderType, fontHeight: fontHeight
	                    });
	
	                    quietZone = (0, _utils.assign)({}, quietZone);
	                    for (var key in quietZone) {
	                        if (quietZone.hasOwnProperty(key)) {
	                            var item = quietZone[key];
	                            if ((0, _utils.isNumberLike)(item)) {
	                                quietZone[key] = {
	                                    relativeValue: +item,
	                                    originIsAbsoluteValue: false
	                                };
	                            } else {
	                                var pixelValue = (0, _utils.convertUnit)(item);
	                                quietZone[key] = {
	                                    relativeValue: pixelValue / unitValue,
	                                    originIsAbsoluteValue: true,
	                                    pixelValue: pixelValue
	                                };
	                            }
	                        }
	                    }
	                    this.quietZone = quietZone;
	
	                   
	                    if ((0, _utils.isDefined)(height)) {
	                        if ((0, _utils.isNumberLike)(height)) {
	                            this.height = +height - fontSizeInUnit - quietZone.top.relativeValue - quietZone.bottom.relativeValue;
	                        } else {
	                            this.height = (0, _utils.convertUnit)(height) / unitValue - fontSizeInUnit - quietZone.top.relativeValue - quietZone.bottom.relativeValue;
	                        }
	                    }
	
	                    if (desiredSize) {
	                        this.containerWidth = (0, _utils.convertUnit)((0, _utils.fixSize2PixelDefault)(desiredSize.width));
	                        this.containerHeight = (0, _utils.convertUnit)((0, _utils.fixSize2PixelDefault)(desiredSize.height));
	                    }
	
	                    this.shapes = [];
	                    this.size = {
	                        width: 0,
	                        height: 0
	                    };
	
	                    this.validate();
	                }
	
	                
	
	
	                _createClass(BarcodeEncoder, [{
	                    key: 'validate',
	                    value: function validate() {
	                        throw new _exceptions.SubclassNotImplementException();
	                    }
	                }, {
	                    key: 'adjustDesiredSize',
	                    value: function adjustDesiredSize() {
	                        throw new _exceptions.SubclassNotImplementException();
	                    }
	                }, {
	                    key: 'convertToShape',
	                    value: function convertToShape() {
	                        throw new _exceptions.SubclassNotImplementException();
	                    }
	                }]);
	
	                return BarcodeEncoder;
	            }();
	
	            exports.default = BarcodeEncoder;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _index = __webpack_require__(2);
	
	            var _index2 = _interopRequireDefault(_index);
	
	            var _OneDimensionalBarcode = __webpack_require__(4);
	
	            var _OneDimensionalBarcode2 = _interopRequireDefault(_OneDimensionalBarcode);
	
	            var _helper = __webpack_require__(5);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            var _Code128A = __webpack_require__(27);
	
	            var _Code128A2 = _interopRequireDefault(_Code128A);
	
	            var _Code128B = __webpack_require__(28);
	
	            var _Code128B2 = _interopRequireDefault(_Code128B);
	
	            var _Code128C = __webpack_require__(29);
	
	            var _Code128C2 = _interopRequireDefault(_Code128C);
	
	            var _Code128Auto = __webpack_require__(30);
	
	            var _Code128Auto2 = _interopRequireDefault(_Code128Auto);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	            function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	            var Code128 = function (_OneDimensionalBarcod) {
	                _inherits(Code128, _OneDimensionalBarcod);
	
	                function Code128(originConfig) {
	                    var isUccEan128 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	                    _classCallCheck(this, Code128);
	
	                    var _this = _possibleConstructorReturn(this, (Code128.__proto__ || Object.getPrototypeOf(Code128)).call(this, originConfig, _helper2.default.defaultConfig));
	
	                    var text = _this.config.text;
	
	
	                    _this.isUccEan128 = isUccEan128;
	                    if (isUccEan128 && text[0] !== _helper2.default.Code128Char.FNC1) {
	                        text = _helper2.default.Code128Char.FNC1 + text;
	                    }
	
	                    _this.text = text;
	                    _this.label = text.replace(/[^\x20-\x7E]/g, '');
	
	                    var data = _this.calculateData();
	                    _this.adjustDesiredSize(data);
	                    _this.convertToShape(data);
	                    return _this;
	                }
	
	                _createClass(Code128, [{
	                    key: 'validate',
	                    value: function validate() {
	                        return;
	                    }
	                }, {
	                    key: 'calculateData',
	                    value: function calculateData() {
	                        var config = this.config,
	                            text = this.text,
	                            isUccEan128 = this.isUccEan128;
	
	                        var innerEncoder = void 0;
	                        if (isUccEan128) {
	                            innerEncoder = new _Code128Auto2.default(text);
	                        } else {
	                            switch (config.codeSet) {
	                                case 'A':
	                                    innerEncoder = new _Code128A2.default(text);
	                                    break;
	                                case 'B':
	                                    innerEncoder = new _Code128B2.default(text);
	                                    break;
	                                case 'C':
	                                    innerEncoder = new _Code128C2.default(text);
	                                    break;
	                                default:
	                                    innerEncoder = new _Code128Auto2.default(text);
	                            }
	                        }
	
	                        return innerEncoder.getData();
	                    }
	                }]);
	
	                return Code128;
	            }(_OneDimensionalBarcode2.default);
	
	            exports.default = Code128;
	
	
	            _index2.default.registerEncoder('Code128', Code128);
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _OneDimensionalBarcode = __webpack_require__(4);
	
	            var _OneDimensionalBarcode2 = _interopRequireDefault(_OneDimensionalBarcode);
	
	            var _utils = __webpack_require__(0);
	
	            var _helper = __webpack_require__(9);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	            function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	            var EAN = function (_OneDimensionalBarcod) {
	                _inherits(EAN, _OneDimensionalBarcod);
	
	                function EAN(originConfig) {
	                    _classCallCheck(this, EAN);
	
	                    var _this = _possibleConstructorReturn(this, (EAN.__proto__ || Object.getPrototypeOf(EAN)).call(this, originConfig, _helper2.default.defaultConfig));
	
	                    var textAlign = _this.style.textAlign,
	                        addOnLabelPosition = _this.config.addOnLabelPosition;
	
	                    _this.isTextGroup = textAlign === 'group';
	                    _this.isAddOnLabelBottom = addOnLabelPosition !== 'top';
	                    return _this;
	                }
	
	                _createClass(EAN, [{
	                    key: 'encode',
	                    value: function encode(text, structure) {
	                        var structureList = (0, _utils.str2Array)(structure);
	                        var texts = (0, _utils.str2Array)(text);
	                        return texts.reduce(function (result, char, index) {
	                            var useTable = _helper2.default.TABLE[structureList[index]];
	                            result += useTable[char];
	                            return result;
	                        }, '');
	                    }
	                }, {
	                    key: 'encodeChar',
	                    value: function encodeChar(char, structure, index) {
	                        var structureList = (0, _utils.str2Array)(structure);
	                        var useTable = _helper2.default.TABLE[structureList[index]];
	
	                        return useTable[char];
	                    }
	                }, {
	                    key: 'checksum',
	                    value: function checksum(number) {
	                        var evenMultiply3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	                        var numberArray = (0, _utils.str2Array)(number);
	                        var fn = evenMultiply3 ? _utils.isOdd : _utils.isEven;
	
	                        var sum = numberArray.reduce(function (sum, num, index) {
	                            num = +num;
	                            sum += fn(index) ? num : num * 3;
	                            return sum;
	                        }, 0);
	                        var remainder = sum % 10;
	                        if (remainder === 0) {
	                            return 0;
	                        }
	
	                        return 10 - remainder;
	                    }
	                }, {
	                    key: 'convertToShape',
	                    value: function convertToShape(data) {
	                        var isTextGroup = this.isTextGroup,
	                            isLabelBottom = this.isLabelBottom,
	                            addOnHeight = this.addOnHeight,
	                            isAddOnLabelBottom = this.isAddOnLabelBottom,
	                            height = this.height,
	                            quietZone = this.quietZone,
	                            showLabel = this.config.showLabel,
	                            _style = this.style,
	                            fontSizeInUnit = _style.fontSizeInUnit,
	                            textAlign = _style.textAlign;
	
	
	                        if (!showLabel) {
	                            fontSizeInUnit = 0;
	                        }
	                        addOnHeight = addOnHeight || 0;
	
	                        var shapes = [];
	
	                        var guardHeight = void 0;
	
	                        var startX = quietZone.left.relativeValue,
	                            startY = quietZone.top.relativeValue,
	                            textY = void 0,
	                            totalMainHeight = void 0,
	                            addOnY = void 0,
	                            addOnLabelY = void 0,
	                            addOnBarHeight = void 0,
	                            totalAddOnHeight = void 0;
	
	                        if (isLabelBottom) {
	                            guardHeight = height + 5;
	                            textY = startY + height;
	                            totalMainHeight = showLabel ? height + fontSizeInUnit : guardHeight;
	                            if (isAddOnLabelBottom) {
	                                addOnY = startY;
	                                if (addOnHeight === 'auto') {
	                                    addOnBarHeight = showLabel ? height : guardHeight;
	                                } else {
	                                    addOnBarHeight = addOnHeight;
	                                }
	                                addOnLabelY = addOnY + addOnBarHeight;
	                            } else {
	                                addOnLabelY = startY;
	                                addOnY = startY + fontSizeInUnit;
	
	                                if (addOnHeight === 'auto') {
	                                    addOnBarHeight = guardHeight - fontSizeInUnit;
	                                } else {
	                                    addOnBarHeight = addOnHeight;
	                                }
	                            }
	                        } else {
	                            guardHeight = height;
	                            height = height - 5;
	                            textY = startY;
	                            startY = startY + fontSizeInUnit;
	
	                            totalMainHeight = showLabel ? guardHeight + fontSizeInUnit : guardHeight;
	                            if (isAddOnLabelBottom) {
	                                addOnY = quietZone.top.relativeValue;
	                                if (addOnHeight === 'auto') {
	                                    addOnBarHeight = showLabel ? height : guardHeight;
	                                } else {
	                                    addOnBarHeight = addOnHeight;
	                                }
	                                addOnLabelY = addOnY + addOnBarHeight;
	                            } else {
	                                addOnLabelY = quietZone.top.relativeValue;
	                                addOnY = quietZone.top.relativeValue + fontSizeInUnit;
	                                if (addOnHeight === 'auto') {
	                                    addOnBarHeight = guardHeight;
	                                } else {
	                                    addOnBarHeight = addOnHeight;
	                                }
	                            }
	                        }
	
	                        totalAddOnHeight = showLabel ? addOnBarHeight + fontSizeInUnit : addOnBarHeight;
	
	                        data.forEach(function (item) {
	                            var y0 = startY,
	                                h = height,
	                                textY0 = textY,
	                                _textAlign = isTextGroup ? 'center' : textAlign,
	                                width = void 0,
	                                textX = startX;
	
	                            switch (item.role) {
	                                case 'GUARD':
	                                    h = guardHeight;
	                                    width = item.binary.length;
	                                    break;
	                                case 'ADDON':
	                                    y0 = addOnY;
	                                    h = addOnBarHeight;
	                                    textY0 = addOnLabelY;
	                                    width = item.binary.length;
	                                    break;
	                                case 'LEFT_QUIET_ZONE':
	                                    _textAlign = 'left';
	                                    width = quietZone.left.relativeValue;
	                                    textX = 0;
	                                    break;
	                                case 'RIGHT_QUIET_ZONE':
	                                case 'NO_ADDON_RIGHT_QUIET_ZONE':
	                                    _textAlign = 'right';
	                                    width = quietZone.right.relativeValue;
	                                    break;
	                                case 'ADDON_QUIET_ZONE':
	                                    width = quietZone.addOn.relativeValue;
	                                    break;
	                                case 'ADDON_RIGHT_QUIET_ZONE':
	                                    _textAlign = 'right';
	                                    textY0 = addOnLabelY;
	                                    width = quietZone.right.relativeValue;
	                                    break;
	                                default:
	                                    width = item.binary.length;
	                            }
	
	                            if (showLabel && item.text) {
	                                switch (_textAlign) {
	                                    case 'center':
	                                        textX += width / 2;
	                                        break;
	                                    case 'right':
	                                        textX += width;
	                                        break;
	                                    default:
	                                }
	
	                                var textShape = {
	                                    type: 'text',
	                                    x: textX,
	                                    y: textY0,
	                                    text: item.text,
	                                    textAlign: _textAlign,
	                                    maxWidth: width
	                                };
	
	                                if (item.role === 'NO_ADDON_RIGHT_QUIET_ZONE' || item.role === 'ADDON_RIGHT_QUIET_ZONE') {
	                                    textShape.fontStyle = 'normal';
	                                    textShape.fontWeight = 'normal';
	                                    textShape.textDecoration = 'none';
	                                }
	
	                                shapes.push(textShape);
	                            }
	
	                            if (item.binary) {
	                                (0, _utils.combineTruthy)(item.binary).forEach(function (num) {
	                                    if (num !== 0) {
	                                        shapes.push({
	                                            type: 'rect',
	                                            x: startX,
	                                            y: y0,
	                                            width: num,
	                                            height: h
	                                        });
	                                        startX += num;
	                                    } else {
	                                        startX++;
	                                    }
	                                });
	                            } else {
	                                if (item.role === 'ADDON_QUIET_ZONE') {
	                                    startX += width;
	                                }
	                            }
	                        });
	
	                        this.size = {
	                            width: startX + quietZone.right.relativeValue,
	                            height: Math.max(totalMainHeight, totalAddOnHeight) + quietZone.top.relativeValue + quietZone.bottom.relativeValue
	                        };
	
	                        this.shapes = shapes;
	                    }
	                }, {
	                    key: 'adjustDesiredSize',
	                    value: function adjustDesiredSize(data) {
	                        var _config = this.config,
	                            desiredSize = _config.desiredSize,
	                            showLabel = _config.showLabel,
	                            addOn = _config.addOn,
	                            addOnHeight = _config.addOnHeight,
	                            fontHeight = this.fontHeight,
	                            containerWidth = this.containerWidth,
	                            containerHeight = this.containerHeight,
	                            addOnHeightInPiexl = this.addOnHeightInPiexl,
	                            quietZone = this.quietZone;
	
	
	                        if (!desiredSize) {
	                            return;
	                        }
	                        var symbolWidth = data.reduce(function (sum, m) {
	                            if (m.binary) {
	                                sum += m.binary.length;
	                            }
	                            return sum;
	                        }, 0);
	
	                        symbolWidth = symbolWidth + (0, _utils.getQuietZoneRelativeValue)(quietZone.left) + (0, _utils.getQuietZoneRelativeValue)(quietZone.right);
	                        if (addOn) {
	                            symbolWidth += (0, _utils.getQuietZoneRelativeValue)(quietZone.addOn);
	                            containerWidth -= (0, _utils.getQuietZonePixelValue)(quietZone.addOn);
	                        }
	                        containerWidth = containerWidth - (0, _utils.getQuietZonePixelValue)(quietZone.left) - (0, _utils.getQuietZonePixelValue)(quietZone.right);
	                        var uWidth = void 0,
	                            unitValue = void 0;
	                        if (desiredSize.forceRounding) {
	                            uWidth = ~~(containerWidth / symbolWidth);
	                            unitValue = uWidth < 1 ? 1 : uWidth;
	                        } else {
	                            uWidth = unitValue = containerWidth / symbolWidth;
	                        }
	
	                        this.style.unitValue = unitValue;
	                        this.style.fontSizeInUnit = fontHeight / unitValue;
	
	                        containerHeight = showLabel ? containerHeight - fontHeight : containerHeight;
	                        containerHeight = containerHeight - (0, _utils.getQuietZonePixelValue)(quietZone.top) - (0, _utils.getQuietZonePixelValue)(quietZone.bottom);
	                        this.height = containerHeight / unitValue - (0, _utils.getQuietZoneRelativeValue)(quietZone.top) - (0, _utils.getQuietZoneRelativeValue)(quietZone.bottom);
	
	                        Object.keys(quietZone).forEach(function (item) {
	                            if (quietZone[item].originIsAbsoluteValue) {
	                                quietZone[item].relativeValue = quietZone[item].pixelValue / unitValue;
	                            }
	                        });
	
	                        if ((0, _utils.isDefined)(addOn)) {
	                            if (addOnHeight !== 'auto') {
	                                if ((0, _utils.isNumberLike)(addOnHeight)) {
	                                    addOnHeight = +addOnHeight;
	                                } else {
	                                    addOnHeight = addOnHeightInPiexl / unitValue;
	                                }
	
	                                if (addOnHeight > this.height) {
	                                    this.addOnHeight = this.height;
	                                } else {
	                                    this.addOnHeight = addOnHeight;
	                                }
	                            }
	                        }
	                    }
	                }]);
	
	                return EAN;
	            }(_OneDimensionalBarcode2.default);
	
	            exports.default = EAN;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	            var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
	            var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
	            var MODEL2_G15_MASK = 21522;
	            var MODEL1_G15_MASK = 10277;
	
	            function getBCHDigit(data) {
	                var digit = 0;
	                while (data != 0) {
	                    digit += 1;
	                    data >>>= 1;
	                }
	                return digit;
	            }
	
	            function getBCH15(data, model) {
	                var G15_MASK = model === 2 ? MODEL2_G15_MASK : MODEL1_G15_MASK;
	                var d = data << 10;
	                while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
	                    d ^= G15 << getBCHDigit(d) - getBCHDigit(G15);
	                }
	                return (data << 10 | d) ^ G15_MASK;
	            }
	
	            function getBCH18(data) {
	                var d = data << 12;
	                while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
	                    d ^= G18 << getBCHDigit(d) - getBCHDigit(G18);
	                }
	                return data << 12 | d;
	            }
	
	            exports.default = {
	                getBCH15: getBCH15, getBCH18: getBCH18
	            };
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _helper = __webpack_require__(3);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            var _ReedSolomon = __webpack_require__(55);
	
	            var _ReedSolomon2 = _interopRequireDefault(_ReedSolomon);
	
	            var _exceptions = __webpack_require__(1);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            var QRCodeBase = function () {
	                function QRCodeBase(config) {
	                    _classCallCheck(this, QRCodeBase);
	
	                    var version = config.version,
	                        model = config.model,
	                        text = config.text,
	                        charCode = config.charCode;
	
	
	                    this.charCode = charCode ? charCode : _helper2.default.getCharCode(text);
	                    var errorCorrectionLevel = _helper2.default.EC_INDICATOR[config.errorCorrectionLevel];
	
	                    this.config = config;
	
	                    this.errorCorrectionLevel = errorCorrectionLevel;
	
	                    this.model = +model;
	
	                    if (version === 'auto') {
	                        version = this.getAutoVersion();
	                    } else {
	                        version = +version;
	                    }
	                    this.version = version;
	
	                    this.modulesCount = _helper2.default.getSizeByVersion(version);
	                    this.charCountIndicatorBitsNumber = _helper2.default.getCharacterCountIndicatorbitsNumber(version);
	                    this.errorCorrectionCharacteristics = _helper2.default.getErrorCorrectionCharacteristics(version, errorCorrectionLevel, this.model);
	
	                    this.totalDataCount = this.errorCorrectionCharacteristics.reduce(function (result, item) {
	                        return result += item.data;
	                    }, 0);
	                    this.totalDataBits = 8 * this.totalDataCount;
	                }
	
	                _createClass(QRCodeBase, [{
	                    key: 'getConnections',
	                    value: function getConnections() {
	                        var totalDataBits = this.totalDataBits,
	                            charCode = this.charCode;
	
	                        var maxBit = totalDataBits - 20;
	                        var len = charCode.length;
	                        var start = 0,
	                            end = 1;
	                        var results = [];
	                        var last = charCode[0];
	                        while (end <= len) {
	                            var code = charCode.slice(start, end);
	
	                            var sets = this.analysisData(code);
	                            var buffer = this.encodeData(sets);
	                            if (buffer.length > maxBit) {
	                                results.push(last);
	                                start = end - 1;
	                            } else if (end === len) {
	                                results.push(code);
	                            }
	                            last = code;
	                            end++;
	                        }
	                        return results;
	                    }
	                }, {
	                    key: 'processConnection',
	                    value: function processConnection(buffer) {
	                        var totalDataBits = this.totalDataBits,
	                            _config = this.config,
	                            connection = _config.connection,
	                            connectionNo = _config.connectionNo;
	
	                        connectionNo = +connectionNo;
	                        if (connection) {
	                            var connectionCnt = Math.ceil(buffer.length / (totalDataBits - 20));
	                            if (connectionNo > connectionCnt - 1) {
	                                throw new _exceptions.ConnectionOverflowException(connectionCnt);
	                            }
	
	                            var connections = this.getConnections();
	                            var substr = connections[connectionNo];
	                            var sets = this.analysisData(substr);
	                            var _buffer = this.encodeData(sets, { connectionNo: connectionNo, connectionCnt: connectionCnt });
	                            return _buffer;
	                        } else {
	                            if (buffer.length > totalDataBits) {
	                                throw new _exceptions.TextTooLargeException();
	                            }
	                            return buffer;
	                        }
	                    }
	                }, {
	                    key: 'padBuffer',
	                    value: function padBuffer(buffer) {
	                        var totalDataBits = this.totalDataBits;
	
	
	                        if (buffer.length + 4 <= totalDataBits) {
	                            buffer.put(_helper2.default.MODE_INDICATOR.Terminator, 4);
	                        }
	
	                        while (buffer.length % 8 != 0) {
	                            buffer.putBit(false);
	                        }
	
	                        while (true) {
	                           
	                            if (buffer.length >= totalDataBits) {
	                                break;
	                            }
	                            buffer.put(_helper2.default.padCodewords0, 8);
	                            if (buffer.length >= totalDataBits) {
	                                break;
	                            }
	                            buffer.put(_helper2.default.padCodewords1, 8);
	                        }
	                    }
	                }, {
	                    key: 'getAutoVersion',
	                    value: function getAutoVersion() {
	                        var errorCorrectionLevel = this.errorCorrectionLevel,
	                            charCode = this.charCode,
	                            model = this.model;
	
	                        var estimatedVersion = _helper2.default.getEstimatedVersion(errorCorrectionLevel, charCode, model);
	                        for (var v = estimatedVersion; v < 40; v++) {
	                            this.version = v;
	                            this.modulesCount = _helper2.default.getSizeByVersion(this.version);
	                            this.charCountIndicatorBitsNumber = _helper2.default.getCharacterCountIndicatorbitsNumber(this.version);
	                            this.errorCorrectionCharacteristics = _helper2.default.getErrorCorrectionCharacteristics(this.version, errorCorrectionLevel);
	                            this.totalDataCount = this.errorCorrectionCharacteristics.reduce(function (result, item) {
	                                return result += item.data;
	                            }, 0);
	                            this.totalDataBits = 8 * this.totalDataCount;
	                            var datas = this.analysisData(charCode);
	                            var buffer = this.encodeData(datas);
	                            if (buffer.length > this.totalDataBits) {
	                                continue;
	                            }
	
	                            return v;
	                        }
	
	                        throw new _exceptions.TextTooLargeException();
	                    }
	
	                   
	
	                }, {
	                    key: 'analysisData',
	                    value: function analysisData(charCode) {
	                        var version = this.version,
	                            charset = this.config.charset;
	
	
	                        var initMode = _helper2.default.getCharMode(charCode[0], charset);
	
	                        switch (initMode) {
	                            case 'Alphanumeric':
	                               
	                                var info1 = _helper2.default.getModeCheckInfo(initMode, version);
	                                var remainderStr = charCode.slice(1, 1 + info1[0]);
	                                if (_helper2.default.isMode('8BitByte', remainderStr)) {
	                                    initMode = '8BitByte';
	                                }
	                                break;
	                            case 'Numeric':
	                               
	                                var info2 = _helper2.default.getModeCheckInfo(initMode, version);
	                                var remainderStr1 = charCode.slice(1, 1 + info2[0]),
	                                    remainderStr2 = charCode.slice(1, 1 + info2[1]);
	                                if (_helper2.default.isMode('8BitByte', remainderStr1)) {
	                                    initMode = '8BitByte';
	                                } else if (_helper2.default.isMode('Alphanumeric', remainderStr2)) {
	                                    initMode = 'Alphanumeric';
	                                }
	                                break;
	                        }
	                        var lastMode = { mode: initMode, code: [] };
	                        var sets = [lastMode];
	                        charCode.forEach(function (cc, index) {
	                            var mode = _helper2.default.getCharMode(cc, charset);
	
	                            if (lastMode.mode === mode) {
	                                lastMode.code.push(cc);
	                            } else {
	                                if (lastMode.mode === '8BitByte') {
	                                    if (mode === 'Kanji') {
	                                        lastMode = { mode: mode, code: [cc] };
	                                        sets.push(lastMode);
	                                    } else if (mode === 'Numeric') {
	                                        var info = _helper2.default.getModeCheckInfo(mode, version);
	                                        if (_helper2.default.isMode(mode, charCode.slice(index, index + info[2]))) {
	                                            lastMode = { mode: mode, code: [cc] };
	                                            sets.push(lastMode);
	                                        } else {
	                                            lastMode.code.push(cc);
	                                        }
	                                    } else if (mode === 'Alphanumeric') {
	                                        var _info = _helper2.default.getModeCheckInfo(mode, version);
	                                        if (_helper2.default.isMode(mode, charCode.slice(index, index + _info[1]))) {
	                                            lastMode = { mode: mode, code: [cc] };
	                                            sets.push(lastMode);
	                                        } else {
	                                            lastMode.code.push(cc);
	                                        }
	                                    } else {
	                                        lastMode.code.push(cc);
	                                    }
	                                } else if (lastMode.mode === 'Alphanumeric') {
	                                    if (mode === 'Kanji') {
	                                        lastMode = { mode: mode, code: [cc] };
	                                        sets.push(lastMode);
	                                    } else if (mode === 'Alphanumeric') {
	                                        lastMode = { mode: mode, code: [cc] };
	                                        sets.push(lastMode);
	                                    } else if (mode === 'Numeric') {
	                                        var _info2 = _helper2.default.getModeCheckInfo(mode, version);
	                                        if (_helper2.default.isMode(mode, charCode.slice(index, index + _info2[2]))) {
	                                            lastMode = { mode: mode, code: [cc] };
	                                            sets.push(lastMode);
	                                        } else {
	                                            lastMode.code.push(cc);
	                                        }
	                                    } else {
	                                        lastMode.code.push(cc);
	                                    }
	                                } else {
	                                    lastMode = { mode: mode, code: [cc] };
	                                    sets.push(lastMode);
	                                }
	                            }
	                        });
	                        return sets;
	                    }
	                }, {
	                    key: 'encodeData',
	                    value: function encodeData() {
	                        throw new _exceptions.SubclassNotImplementException();
	                    }
	                }, {
	                    key: 'generateErrorCorrectionCode',
	                    value: function generateErrorCorrectionCode(buffer) {
	                        var errorCorrectionCharacteristics = this.errorCorrectionCharacteristics;
	
	
	                        var blocks = [];
	                        var pos = 0;
	                        errorCorrectionCharacteristics.forEach(function (item) {
	                            var cw = buffer.getBuffer().slice(pos, pos + item.data);
	                            blocks.push({
	                                data: cw,
	                                ec: (0, _ReedSolomon2.default)(cw, item.ec, item.data)
	                            });
	                            pos += item.data;
	                        });
	
	                        return blocks;
	                    }
	                }, {
	                    key: 'getFinalMessage',
	                    value: function getFinalMessage() {
	                        throw new _exceptions.SubclassNotImplementException();
	                    }
	
	                   
	
	                }, {
	                    key: 'setModules',
	                    value: function setModules() {
	                        throw new _exceptions.SubclassNotImplementException();
	                    }
	                }, {
	                    key: 'maskModules',
	                    value: function maskModules() {
	                        throw new _exceptions.SubclassNotImplementException();
	                    }
	                }, {
	                    key: 'autoMask',
	                    value: function autoMask() {
	                        throw new _exceptions.SubclassNotImplementException();
	                    }
	
	                   
	
	                }, {
	                    key: 'addRectModule',
	                    value: function addRectModule(x, y, w, h) {
	                        var flag = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	                        var modules = this.modules;
	
	                        var height = h + y,
	                            width = w + x;
	                        for (; y < height; y++) {
	                            var _x = x;
	                            for (; _x < width; _x++) {
	                                modules[y][_x] = +flag;
	                            }
	                        }
	                    }
	                }, {
	                    key: 'addPositionDetectionPattern',
	                    value: function addPositionDetectionPattern() {
	                        var modules = this.modules;
	
	                        var modulesCount = modules.length;
	
	                       
	                        this.addPattern(0, 0, 7);
	                       
	                        this.addRectModule(7, 0, 1, 8, false);
	                        this.addRectModule(0, 7, 8, 1, false);
	
	                       
	                        var trX = modulesCount - 7;
	                        this.addPattern(trX, 0, 7);
	                       
	                        this.addRectModule(trX - 1, 0, 1, 8, false);
	                        this.addRectModule(trX - 1, 7, 8, 1, false);
	
	                       
	                        var blY = modulesCount - 7;
	                        this.addPattern(0, blY, 7);
	                       
	                        this.addRectModule(7, blY - 1, 1, 8, false);
	                        this.addRectModule(0, blY - 1, 8, 1, false);
	                    }
	                }, {
	                    key: 'addTimingPattern',
	                    value: function addTimingPattern() {
	                        var modules = this.modules;
	
	                        var modulesCount = modules.length;
	                        var dark = true;
	                        for (var i = 8; i < modulesCount - 7; i++) {
	                            modules[6][i] = +dark;
	                            modules[i][6] = +dark;
	                            dark = !dark;
	                        }
	                    }
	                }, {
	                    key: 'addPattern',
	                    value: function addPattern(x, y, s) {
	                        this.addRectModule(x, y, s, s, true);
	                        this.addRectModule(x + 1, y + 1, s - 2, s - 2, false);
	                        this.addRectModule(x + 2, y + 2, s - 4, s - 4, true);
	                    }
	                }, {
	                    key: 'getMatrix',
	                    value: function getMatrix() {
	                        throw new _exceptions.SubclassNotImplementException();
	                    }
	                }]);
	
	                return QRCodeBase;
	            }();
	
	            exports.default = QRCodeBase;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _helper = __webpack_require__(3);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            var Mode8BitByte = function () {
	                function Mode8BitByte(data) {
	                    _classCallCheck(this, Mode8BitByte);
	
	                    this.mode = '8BitByte';
	                    this.data = data;
	                    this.bytes = _helper2.default.utf8Encode(data);
	                }
	
	                _createClass(Mode8BitByte, [{
	                    key: 'getMode',
	                    value: function getMode() {
	                        return _helper2.default.MODE_INDICATOR['8BitByte'];
	                    }
	                }, {
	                    key: 'getLength',
	                    value: function getLength() {
	                        return this.bytes.length;
	                    }
	                }, {
	                    key: 'write',
	                    value: function write(buffer) {
	                        this.bytes.forEach(function (b) {
	                            buffer.put(b, 8);
	                        });
	                    }
	                }]);
	
	                return Mode8BitByte;
	            }();
	
	            exports.default = Mode8BitByte;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _helper = __webpack_require__(3);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            var _utils = __webpack_require__(0);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            var ModeNumeric = function () {
	                function ModeNumeric(data) {
	                    _classCallCheck(this, ModeNumeric);
	
	                    this.mode = 'Numeric';
	                    this.data = data;
	                }
	
	                _createClass(ModeNumeric, [{
	                    key: 'getMode',
	                    value: function getMode() {
	                        return _helper2.default.MODE_INDICATOR['Numeric'];
	                    }
	                }, {
	                    key: 'getLength',
	                    value: function getLength() {
	                        return this.data.length;
	                    }
	                }, {
	                    key: 'write',
	                    value: function write(buffer) {
	                        (0, _utils.sliceArray)(this.data, 3, function (arr) {
	                            var num = parseInt(arr.reduce(function (str, item) {
	                                return str += String.fromCharCode(item);
	                            }, ''));
	                            switch (arr.length) {
	                                case 1:
	                                    buffer.put(num, 4);
	                                    return;
	                                case 2:
	                                    buffer.put(num, 7);
	                                    return;
	                                default:
	                                    buffer.put(num, 10);
	                                    return;
	                            }
	                        });
	                    }
	                }]);
	
	                return ModeNumeric;
	            }();
	
	            exports.default = ModeNumeric;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _helper = __webpack_require__(3);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            var _utils = __webpack_require__(0);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            var ModeAlphanumeric = function () {
	                function ModeAlphanumeric(data) {
	                    _classCallCheck(this, ModeAlphanumeric);
	
	                    this.mode = 'Alphanumeric';
	                    this.data = data;
	                }
	
	                _createClass(ModeAlphanumeric, [{
	                    key: 'getMode',
	                    value: function getMode() {
	                        return _helper2.default.MODE_INDICATOR['Alphanumeric'];
	                    }
	                }, {
	                    key: 'getLength',
	                    value: function getLength() {
	                        return this.data.length;
	                    }
	                }, {
	                    key: 'write',
	                    value: function write(buffer) {
	                        (0, _utils.sliceArray)(this.data, 2, function (arr) {
	                            var first = _helper2.default.getAlphanumericCharValue(arr[0]);
	
	                            if (arr.length === 2) {
	                                var second = _helper2.default.getAlphanumericCharValue(arr[1]);
	                                var num = first * 45 + second;
	                                buffer.put(num, 11);
	                            } else {
	                                buffer.put(first, 6);
	                            }
	                        });
	                    }
	                }]);
	
	                return ModeAlphanumeric;
	            }();
	
	            exports.default = ModeAlphanumeric;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _helper = __webpack_require__(3);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            var ModeKanji = function () {
	                function ModeKanji(data) {
	                    _classCallCheck(this, ModeKanji);
	
	                    this.mode = 'Kanji';
	                    this.data = data;
	                }
	
	                _createClass(ModeKanji, [{
	                    key: 'getMode',
	                    value: function getMode() {
	                        return _helper2.default.MODE_INDICATOR['Kanji'];
	                    }
	                }, {
	                    key: 'getLength',
	                    value: function getLength() {
	                        return this.data.length;
	                    }
	                }, {
	                    key: 'write',
	                    value: function write(buffer) {
	                        this.data.forEach(function (d) {
	                            var result = void 0;
	                            if (d > 0x8140 && d < 0x9FFC) {
	                                d -= 0x8140;
	                                var first = d >>> 8;
	                                var second = d & 0xff;
	                                result = first * 0xC0 + second;
	                            } else if (d > 0xE040 && d < 0xEBBF) {
	                                d -= 0xC140;
	                                var _first = d >>> 8;
	                                var _second = d & 0xff;
	                                result = _first * 0xC0 + _second;
	                            }
	
	                            buffer.put(result, 13);
	                        });
	                    }
	                }]);
	
	                return ModeKanji;
	            }();
	
	            exports.default = ModeKanji;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            var BitBuffer = function () {
	                function BitBuffer() {
	                    var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	                    _classCallCheck(this, BitBuffer);
	
	                    this.buffer = buffer;
	                    this.length = buffer.length * 8;
	                    this.index = 0;
	                }
	
	                _createClass(BitBuffer, [{
	                    key: "putBit",
	                    value: function putBit(bit) {
	                        var bufIndex = Math.floor(this.length / 8);
	                        if (this.buffer.length <= bufIndex) {
	                            this.buffer.push(0);
	                        }
	
	                        if (bit) {
	                            this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
	                        }
	                        this.length += 1;
	                    }
	                }, {
	                    key: "put",
	                    value: function put(num, length) {
	                        for (var i = 0; i < length; i += 1) {
	                            this.putBit((num >>> length - i - 1 & 1) == 1);
	                        }
	                    }
	                }, {
	                    key: "getAt",
	                    value: function getAt(index) {
	                        var bufIndex = Math.floor(index / 8);
	                        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
	                    }
	                }, {
	                    key: "getBuffer",
	                    value: function getBuffer() {
	                        return this.buffer;
	                    }
	                }, {
	                    key: "next",
	                    value: function next() {
	                        this.index++;
	                        return this.getAt(this.index - 1);
	                    }
	                }]);
	
	                return BitBuffer;
	            }();
	
	            exports.default = BitBuffer;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            __webpack_require__(21);
	            __webpack_require__(11);
	            __webpack_require__(31);
	            __webpack_require__(33);
	            __webpack_require__(35);
	            __webpack_require__(37);
	            __webpack_require__(45);
	            __webpack_require__(48);
	            __webpack_require__(49);
	            __webpack_require__(53);
	            __webpack_require__(57);
	            __webpack_require__(58);
	            module.exports = __webpack_require__(2);
	
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _OneDimensionalBarcode = __webpack_require__(4);
	
	            var _OneDimensionalBarcode2 = _interopRequireDefault(_OneDimensionalBarcode);
	
	            var _index = __webpack_require__(2);
	
	            var _index2 = _interopRequireDefault(_index);
	
	            var _utils = __webpack_require__(0);
	
	            var _helper = __webpack_require__(26);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            var _exceptions = __webpack_require__(1);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	            function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	            var REG = /^([A-D]?)([0-9\-\$\:\.\+\/]+)([A-D]?)$/;
	
	            var Codabar = function (_OneDimensionalBarcod) {
	                _inherits(Codabar, _OneDimensionalBarcod);
	
	                function Codabar(originConfig) {
	                    _classCallCheck(this, Codabar);
	
	                    var _this = _possibleConstructorReturn(this, (Codabar.__proto__ || Object.getPrototypeOf(Codabar)).call(this, originConfig, _helper2.default.defaultConfig));
	
	                    var _this$config = _this.config,
	                        checkDigit = _this$config.checkDigit,
	                        text = _this$config.text,
	                        nwRatio = _this$config.nwRatio;
	
	                    var _this$getTextEntity = _this.getTextEntity(text),
	                        originStartPattern = _this$getTextEntity.originStartPattern,
	                        startPattern = _this$getTextEntity.startPattern,
	                        content = _this$getTextEntity.content,
	                        originStopPattern = _this$getTextEntity.originStopPattern,
	                        stopPattern = _this$getTextEntity.stopPattern;
	
	                    if (checkDigit) {
	                        var checksum = _this.checksum(content);
	                        _this.text = startPattern + content + checksum + stopPattern;
	                        _this.label = originStartPattern + content + checksum + originStopPattern;
	                    } else {
	                        _this.text = startPattern + content + stopPattern;
	                        _this.label = text;
	                    }
	
	                    _this.nwRatio = +nwRatio;
	
	                    var data = _this.calculateData();
	                    _this.adjustDesiredSize(data);
	                    _this.convertToShape(data);
	                    return _this;
	                }
	
	                _createClass(Codabar, [{
	                    key: 'validate',
	                    value: function validate() {
	                        var _config = this.config,
	                            text = _config.text,
	                            nwRatio = _config.nwRatio;
	                       
	
	                        if (!REG.test(text)) {
	                            throw new _exceptions.InvalidTextException(text);
	                        }
	
	                        if (nwRatio != 2 && nwRatio != 3) {
	                            throw new _exceptions.BadArgumentsException({ nwRatio: nwRatio }, 'NwRatio is 2 or 3');
	                        }
	                    }
	                }, {
	                    key: 'getTextEntity',
	                    value: function getTextEntity(text) {
	                        var res = REG.exec(text);
	
	                        var originStartPattern = res[1];
	                        var startPattern = originStartPattern || 'A';
	                        var content = res[2];
	                        var originStopPattern = res[3];
	                        var stopPattern = originStopPattern || 'B';
	                        return { originStartPattern: originStartPattern, startPattern: startPattern, content: content, originStopPattern: originStopPattern, stopPattern: stopPattern };
	                    }
	                }, {
	                    key: 'encode',
	                    value: function encode(str) {
	                        var nwRatio = this.nwRatio;
	
	                        var data = '';
	                        var pattern1 = (0, _utils.strRepeat)('1', nwRatio);
	                        var pattern0 = (0, _utils.strRepeat)('0', nwRatio);
	                        (0, _utils.str2Array)(str).forEach(function (item, index) {
	                            if ((0, _utils.isEven)(index)) {
	                                if (item === '1') {
	                                    data += pattern1;
	                                } else {
	                                    data += '1';
	                                }
	                            } else {
	                                if (item === '1') {
	                                    data += pattern0;
	                                } else {
	                                    data += '0';
	                                }
	                            }
	                        });
	
	                        return data;
	                    }
	                }, {
	                    key: 'calculateData',
	                    value: function calculateData() {
	                        var _this2 = this;
	
	                        var text = this.text;
	
	                        var data = '';
	
	                        (0, _utils.sliceString)(text, 1, function (char) {
	                            data = data + _this2.encode(_helper2.default.TABLE[char]) + '0';
	                        });
	
	                        data = data.substr(0, data.length - 1);
	                        return data;
	                    }
	
	                   
	
	                }, {
	                    key: 'checksum',
	                    value: function checksum(text) {
	                        var checksum = (0, _utils.str2Array)(text).filter(function (ch) {
	                                return (0, _utils.isInteger)(+ch);
	                            }).reverse().reduce(function (result, ch, index) {
	                                var num = (0, _utils.toNumber)(ch);
	                                if ((0, _utils.isEven)(index)) {
	                                    var _num = 2 * num;
	                                    result += _num > 9 ? _num - 9 : _num;
	                                } else {
	                                    result += num;
	                                }
	                                return result;
	                            }, 0) % 10;
	                        if (checksum !== 0) {
	                            checksum = 10 - checksum;
	                        }
	                        return checksum;
	                    }
	                }]);
	
	                return Codabar;
	            }(_OneDimensionalBarcode2.default);
	
	            exports.default = Codabar;
	
	
	            _index2.default.registerEncoder('Codabar', Codabar);
	
	             }),
	        
	         (function(module, exports) {
	
	            var g;
	
	
	            g = (function() {
	                return this;
	            })();
	
	            try {
	               
	                g = g || Function("return this")() || (1,eval)("this");
	            } catch(e) {
	               
	                if(typeof window === "object")
	                    g = window;
	            }
	
	
	
	
	
	            module.exports = g;
	
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _CanvasRenderContext = __webpack_require__(24);
	
	            var _CanvasRenderContext2 = _interopRequireDefault(_CanvasRenderContext);
	
	            var _SVGRenderContext = __webpack_require__(25);
	
	            var _SVGRenderContext2 = _interopRequireDefault(_SVGRenderContext);
	
	            var _exceptions = __webpack_require__(1);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            function createRenderDom(type, size) {
	                var dom = void 0;
	                if (type === 'svg') {
	                    dom = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	                    dom.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	                } else {
	                    dom = document.createElement('canvas');
	                }
	
	                dom.setAttribute('width', size.width);
	                dom.setAttribute('height', size.height);
	
	                return dom;
	            }
	
	            var BarcodeRender = function () {
	                function BarcodeRender(container, barcode) {
	                    _classCallCheck(this, BarcodeRender);
	
	                    this.container = container;
	                    this.barcode = barcode;
	                    this.style = barcode.style;
	
	                    var scale = this.style.unitValue;
	
	                    this.size = {
	                        width: barcode.size.width * scale,
	                        height: barcode.size.height * scale
	                    };
	
	                    var renderDom = createRenderDom(this.style.renderType, this.size);
	
	                    switch (this.style.renderType) {
	                        case 'svg':
	                            this.context = new _SVGRenderContext2.default(renderDom, this.style, scale);
	                            break;
	                        case 'canvas':
	                            this.context = new _CanvasRenderContext2.default(renderDom, this.style, scale);
	                            break;
	                        default:
	                            throw new _exceptions.UnrecognizedRenderException(this.style.renderType);
	                    }
	                    if (container) {
	                        container.appendChild(renderDom);
	                    }
	                    this.renderDom = renderDom;
	                }
	
	                _createClass(BarcodeRender, [{
	                    key: 'render',
	                    value: function render() {
	                        var style = this.style,
	                            shapes = this.barcode.shapes;
	
	                        var context = this.context;
	                        context.clear();
	
	                        context.setColor(style.color);
	                        context.setBackgroundColor(style.backgroundColor);
	
	                        shapes.forEach(function (shape) {
	                            if (shape.type === 'rect') {
	                                context.drawRect(shape);
	                            }
	                            if (shape.type === 'text') {
	                                context.drawText(shape);
	                            }
	                        });
	
	                        return this;
	                    }
	                }, {
	                    key: 'getImageData',
	                    value: function getImageData() {
	                        if (!this.context.getImageData) {
	                            throw new _exceptions.MethodNotImplementException('getImageData');
	                        }
	                        return this.context.getImageData();
	                    }
	                }, {
	                    key: 'getDataUrl',
	                    value: function getDataUrl() {
	                        return this.context.getDataUrl();
	                    }
	                }, {
	                    key: 'destroy',
	                    value: function destroy() {
	                        if (this.container) {
	                            this.container.removeChild(this.renderDom);
	                        }
	                    }
	                }]);
	
	                return BarcodeRender;
	            }();
	
	            exports.default = BarcodeRender;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            var CanvasRenderContext = function () {
	                function CanvasRenderContext(dom, style, scale) {
	                    _classCallCheck(this, CanvasRenderContext);
	
	                    this.dom = dom;
	                    this.style = style;
	                    this.ctx = this.dom.getContext('2d');
	                    this.scale = scale;
	                }
	
	                _createClass(CanvasRenderContext, [{
	                    key: 'setColor',
	                    value: function setColor(color) {
	                        this.ctx.fillStyle = color;
	                    }
	                }, {
	                    key: 'setBackgroundColor',
	                    value: function setBackgroundColor(color) {
	                        var ctx = this.ctx,
	                            dom = this.dom;
	
	                        ctx.save();
	                        ctx.fillStyle = color;
	                        ctx.fillRect(0, 0, dom.width, dom.height);
	                        ctx.restore();
	                    }
	                }, {
	                    key: 'drawRect',
	                    value: function drawRect(shape) {
	                        var ctx = this.ctx,
	                            scale = this.scale;
	
	                        ctx.fillRect(shape.x * scale, shape.y * scale, shape.width * scale, shape.height * scale);
	                    }
	                }, {
	                    key: 'drawText',
	                    value: function drawText(shape) {
	                        var ctx = this.ctx,
	                            style = this.style,
	                            scale = this.scale;
	
	
	                        ctx.save();
	                        ctx.font = (shape.fontStyle || style.fontStyle) + ' ' + (shape.fontWeight || style.fontWeight) + ' ' + style.fontSize + ' ' + style.fontFamily;
	                        ctx.textAlign = shape.textAlign || style.textAlign;
	                        ctx.textBaseline = 'top';
	                        var x = shape.x * scale;
	                        var y = shape.y * scale;
	                        ctx.fillText(shape.text, x, y, shape.maxWidth * scale);
	
	                        this.drawTextDecorationLine(shape.text, x, y, shape.textDecoration || style.textDecoration);
	
	                        ctx.restore();
	                    }
	                }, {
	                    key: 'drawTextDecorationLine',
	                    value: function drawTextDecorationLine(text, x, y, textDecoration) {
	                        var ratio = void 0;
	
	                        switch (textDecoration) {
	                            case 'underline':
	                                ratio = 0.8;
	                                break;
	                            case 'overline':
	                                ratio = 0.1;
	                                break;
	                            case 'line-through':
	                                ratio = 0.5;
	                                break;
	                            default:
	                                return;
	                        }
	
	                        var ctx = this.ctx,
	                            fontHeight = this.style.fontHeight;
	
	                        var width = ctx.measureText(text).width;
	                        switch (ctx.textAlign) {
	                            case 'center':
	                                x -= width / 2;
	                                break;
	                            case 'right':
	                                x -= width;
	                                break;
	                        }
	                        ctx.lineWidth = 1;
	                        ctx.beginPath();
	                        var _y = fontHeight * ratio + y;
	                        ctx.moveTo(x, _y);
	                        ctx.lineTo(x + width, _y);
	                        ctx.stroke();
	                    }
	                }, {
	                    key: 'clear',
	                    value: function clear() {
	                        var ctx = this.ctx,
	                            dom = this.dom;
	
	                        ctx.clearRect(0, 0, dom.width, dom.height);
	                    }
	                }, {
	                    key: 'getImageData',
	                    value: function getImageData() {
	                        var ctx = this.ctx,
	                            dom = this.dom;
	
	                        return ctx.getImageData(0, 0, dom.width, dom.height);
	                    }
	                }, {
	                    key: 'getDataUrl',
	                    value: function getDataUrl() {
	                        return this.dom.toDataURL();
	                    }
	                }]);
	
	                return CanvasRenderContext;
	            }();
	
	            exports.default = CanvasRenderContext;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            var alignmentMap = {
	                center: 'middle',
	                left: 'start',
	                right: 'end'
	            };
	
	            function isIE() {
	                return !!document.documentMode;
	            }
	
	            var SVGRenderContext = function () {
	                function SVGRenderContext(dom, style, scale) {
	                    _classCallCheck(this, SVGRenderContext);
	
	                    this.dom = dom;
	                    this.style = style;
	                    this.scale = scale;
	                    this.color = 'rgb(0,0,0)';
	                    this.addGroup();
	                }
	
	                _createClass(SVGRenderContext, [{
	                    key: 'setColor',
	                    value: function setColor(color) {
	                        this.color = color;
	                    }
	                }, {
	                    key: 'setBackgroundColor',
	                    value: function setBackgroundColor(color) {
	                        var dom = this.dom;
	
	                        dom.style.backgroundColor = color;
	                    }
	                }, {
	                    key: 'addGroup',
	                    value: function addGroup() {
	                        var dom = this.dom;
	
	                        this.g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	                        this.g.setAttribute('shape-rendering', 'crispEdges');
	                        dom.appendChild(this.g);
	                    }
	                }, {
	                    key: 'drawRect',
	                    value: function drawRect(shape) {
	                        var g = this.g,
	                            scale = this.scale,
	                            color = this.color;
	
	                        var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	                        rect.setAttribute('x', shape.x * scale);
	                        rect.setAttribute('y', shape.y * scale);
	                        rect.setAttribute('width', shape.width * scale);
	                        rect.setAttribute('height', shape.height * scale);
	                        rect.style.fill = color;
	                        g.appendChild(rect);
	                    }
	                }, {
	                    key: 'drawText',
	                    value: function drawText(shape) {
	                        var g = this.g,
	                            scale = this.scale,
	                            color = this.color,
	                            style = this.style,
	                            dom = this.dom;
	
	                        var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	
	                        text.style.fill = color;
	                        text.style.fontSize = style.fontSize;
	                        text.style.fontFamily = style.fontFamily;
	                        text.style.fontStyle = shape.fontStyle || style.fontStyle;
	                        text.style.fontWeight = shape.fontWeight || style.fontWeight;
	                        text.style.textDecoration = shape.textDecoration || style.textDecoration;
	                        text.style.textAnchor = alignmentMap[shape.textAlign || style.textAlign];
	                        text.textContent = shape.text;
	
	                        if (isIE()) {
	                           
	                            text.setAttribute('x', 0);
	                            text.setAttribute('y', 0);
	                            dom.appendChild(text);
	                            var rectInfo = text.getBBox();
	                            text.setAttribute('y', shape.y * scale + Math.abs(rectInfo.y));
	                        } else {
	                            text.style.alignmentBaseline = 'before-edge';
	                            text.setAttribute('y', shape.y * scale);
	                        }
	                        text.setAttribute('x', shape.x * scale);
	                        g.appendChild(text);
	                    }
	                }, {
	                    key: 'clear',
	                    value: function clear() {
	                        var dom = this.dom;
	
	                        dom.removeChild(this.g);
	                        this.addGroup();
	                    }
	                }, {
	                    key: 'getDataUrl',
	                    value: function getDataUrl() {
	                       
	                       
	                        return 'data:image/svg+xml;base64,' + btoa(this.dom.outerHTML);
	                    }
	                }]);
	
	                return SVGRenderContext;
	            }();
	
	            exports.default = SVGRenderContext;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	            var defaultConfig = {
	                height: 60,
	                showLabel: true,
	                labelPosition: 'bottom',
	                checkDigit: false,
	                quietZone: {
	                    top: 0,
	                    right: 10,
	                    bottom: 0,
	                    left: 10
	                },
	                nwRatio: 3
	            };
	
	            var TABLE = {
	                '0': '0000011',
	                '1': '0000110',
	                '2': '0001001',
	                '3': '1100000',
	                '4': '0010010',
	                '5': '1000010',
	                '6': '0100001',
	                '7': '0100100',
	                '8': '0110000',
	                '9': '1001000',
	                '-': '0001100',
	                '$': '0011000',
	                ':': '1000101',
	                '/': '1010001',
	                '.': '1010100',
	                '+': '0010101',
	                'A': '0011010',
	                'B': '0101001',
	                'C': '0001011',
	                'D': '0001110'
	            };
	
	            exports.default = {
	                defaultConfig: defaultConfig,
	                TABLE: TABLE
	            };
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _helper = __webpack_require__(5);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            var _exceptions = __webpack_require__(1);
	
	            var _utils = __webpack_require__(0);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            var Code128A = function () {
	                function Code128A(text) {
	                    _classCallCheck(this, Code128A);
	
	                    this.text = text;
	                    this.validate();
	                }
	
	                _createClass(Code128A, [{
	                    key: 'validate',
	                    value: function validate() {
	                        var text = this.text;
	
	
	                        var reg = /^[\x00-\x5F\xC8-\xCF]+$/;
	                        if (!reg.test(text)) {
	                            throw new _exceptions.InvalidTextException(text);
	                        }
	                    }
	                }, {
	                    key: 'getData',
	                    value: function getData() {
	                        var text = this.text;
	
	                        var checkDigit = this.checksum();
	                        var data = '';
	                        var startPattern = _helper2.default.getPatternByIndex(_helper2.default.Code128Sym.StartA);
	                        data += _helper2.default.encode(startPattern);
	
	                        (0, _utils.sliceString)(text, 1, function (char) {
	                            var pattern = _helper2.default.getCharPattern(char, 'A');
	                            data += _helper2.default.encode(pattern);
	                        });
	
	                        data += _helper2.default.encode(_helper2.default.getPatternByIndex(checkDigit));
	
	                        data += _helper2.default.encode(_helper2.default.stopPattern);
	                        return data;
	                    }
	                }, {
	                    key: 'checksum',
	                    value: function checksum() {
	                        var text = this.text;
	
	                        var weight = 0,
	                            sum = 0;
	
	                        (0, _utils.sliceString)(text, 1, function (char) {
	                            sum += _helper2.default.getCharValue(char, 'A') * ++weight;
	                        });
	                        sum += _helper2.default.Code128Sym.StartA;
	                        return sum % 103;
	                    }
	                }]);
	
	                return Code128A;
	            }();
	
	            exports.default = Code128A;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _helper = __webpack_require__(5);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            var _exceptions = __webpack_require__(1);
	
	            var _utils = __webpack_require__(0);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            var Code128B = function () {
	                function Code128B(text) {
	                    _classCallCheck(this, Code128B);
	
	                    this.text = text;
	                    this.validate();
	                }
	
	                _createClass(Code128B, [{
	                    key: 'validate',
	                    value: function validate() {
	                        var text = this.text;
	
	
	                        var reg = /^[\x20-\x7F\xC8-\xCF]+$/;
	                        if (!reg.test(text)) {
	                            throw new _exceptions.InvalidTextException(text);
	                        }
	                    }
	                }, {
	                    key: 'getData',
	                    value: function getData() {
	                        var text = this.text;
	
	                        var checkDigit = this.checksum();
	                        var data = '';
	                        var startPattern = _helper2.default.getPatternByIndex(_helper2.default.Code128Sym.StartB);
	                        data += _helper2.default.encode(startPattern);
	
	                        (0, _utils.sliceString)(text, 1, function (char) {
	                            var pattern = _helper2.default.getCharPattern(char, 'B');
	                            data += _helper2.default.encode(pattern);
	                        });
	
	                        data += _helper2.default.encode(_helper2.default.getPatternByIndex(checkDigit));
	
	                        data += _helper2.default.encode(_helper2.default.stopPattern);
	
	                        return data;
	                    }
	                }, {
	                    key: 'checksum',
	                    value: function checksum() {
	                        var text = this.text;
	
	                        var weight = 0,
	                            sum = 0;
	                        (0, _utils.sliceString)(text, 1, function (char) {
	                            sum += _helper2.default.getCharValue(char, 'B') * ++weight;
	                        });
	
	                        sum += _helper2.default.Code128Sym.StartB;
	                        return sum % 103;
	                    }
	                }]);
	
	                return Code128B;
	            }();
	
	            exports.default = Code128B;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _helper = __webpack_require__(5);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            var _utils = __webpack_require__(0);
	
	            var _exceptions = __webpack_require__(1);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            var Code128C = function () {
	                function Code128C(text) {
	                    _classCallCheck(this, Code128C);
	
	                    this.text = text;
	                    this.validate();
	                }
	
	                _createClass(Code128C, [{
	                    key: 'validate',
	                    value: function validate() {
	                        var text = this.text;
	
	
	                        var reg = /^(\xCF*[0-9]{2}\xCF*)+$/;
	                        if (!reg.test(text)) {
	                            throw new _exceptions.InvalidTextException(text);
	                        }
	                    }
	                }, {
	                    key: 'getData',
	                    value: function getData() {
	                        var text = this.text;
	
	                        var checkDigit = this.checksum();
	                        var data = '';
	                        var startPattern = _helper2.default.getPatternByIndex(_helper2.default.Code128Sym.StartC);
	                        data += _helper2.default.encode(startPattern);
	                        (0, _utils.sliceString)(text, 2, function (char) {
	                            var pattern = _helper2.default.getCharPattern(char, 'C');
	                            data += _helper2.default.encode(pattern);
	                        });
	
	                        data += _helper2.default.encode(_helper2.default.getPatternByIndex(checkDigit));
	
	                        data += _helper2.default.encode(_helper2.default.stopPattern);
	
	                        return data;
	                    }
	                }, {
	                    key: 'checksum',
	                    value: function checksum() {
	                        var text = this.text;
	
	                        var weight = 0,
	                            sum = 0;
	                        (0, _utils.sliceString)(text, 2, function (char) {
	                            sum += _helper2.default.getCharValue(char, 'C') * ++weight;
	                        });
	                        sum += _helper2.default.Code128Sym.StartC;
	                        return sum % 103;
	                    }
	                }]);
	
	                return Code128C;
	            }();
	
	            exports.default = Code128C;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _helper = __webpack_require__(5);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            var _utils = __webpack_require__(0);
	
	            var _exceptions = __webpack_require__(1);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            var CODE_SET_A = 'A',
	                CODE_SET_B = 'B',
	                CODE_SET_C = 'C';
	
	            var Code128Auto = function () {
	                function Code128Auto(text) {
	                    var isUccEan128 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	                    _classCallCheck(this, Code128Auto);
	
	                    this.text = text;
	                    this.isUccEan128 = isUccEan128;
	                    this.validate();
	                }
	
	                _createClass(Code128Auto, [{
	                    key: 'validate',
	                    value: function validate() {
	                        var text = this.text;
	
	
	                        var reg = /^[\x00-\x7F\xC8-\xD3]+$/;
	                        if (!reg.test(text)) {
	                            throw new _exceptions.InvalidTextException(text);
	                        }
	                    }
	                }, {
	                    key: 'calculateGroup',
	                    value: function calculateGroup() {
	                        var text = this.text,
	                            isUccEan128 = this.isUccEan128;
	
	                       
	                       
	
	                        var last = { code: isUccEan128 ? CODE_SET_C : CODE_SET_B, text: '' },
	                            groups = [];
	                        groups.push(last);
	
	                        for (var i = 0, len = text.length; i < len; i++) {
	                            var newCode = last.code,
	                                str = text[i];
	
	                           
	                           
	                            if (last.code !== CODE_SET_C && i + 3 < len && (0, _utils.isNumberLike)(text.substr(i, 4)) || last.code === CODE_SET_C && i + 1 < len && (0, _utils.isNumberLike)(text.substr(i, 2))) {
	                                newCode = CODE_SET_C;
	                                str += text[++i];
	                            } else {
	                                newCode = last.code === CODE_SET_C ? CODE_SET_B : last.code;
	
	                                if (_helper2.default.getCharValue(str, newCode) < 0) {
	                                    newCode = last.code === CODE_SET_A ? CODE_SET_B : CODE_SET_A;
	
	                                    if (_helper2.default.getCharValue(str, newCode) < 0) {
	                                        continue;
	                                    }
	                                }
	                            }
	
	                            if (last.code !== newCode) {
	                                last = { code: newCode, text: str };
	                                groups.push(last);
	                            } else {
	                                last.text += str;
	                            }
	                        }
	
	                        return groups.filter(function (g) {
	                            return g.text;
	                        });
	                    }
	                }, {
	                    key: 'getData',
	                    value: function getData() {
	                        var groups = this.calculateGroup();
	                        var checkDigit = this.checksum(groups);
	                        var data = '';
	
	                        groups.forEach(function (g, i) {
	                            if (i === 0) {
	                                var pattern = _helper2.default.getPatternByIndex(_helper2.default.Code128Sym['Start' + g.code]);
	                                data += _helper2.default.encode(pattern);
	                            } else {
	                                var _pattern = _helper2.default.getPatternByIndex(_helper2.default.Code128Sym['Code' + g.code]);
	                                data += _helper2.default.encode(_pattern);
	                            }
	
	                            if (g.code === CODE_SET_C) {
	                                (0, _utils.sliceString)(g.text, 2, function (char) {
	                                    data += _helper2.default.encode(_helper2.default.getCharPattern(char, g.code));
	                                });
	                            } else {
	                                (0, _utils.sliceString)(g.text, 1, function (char) {
	                                    data += _helper2.default.encode(_helper2.default.getCharPattern(char, g.code));
	                                });
	                            }
	                        });
	
	                        data += _helper2.default.encode(_helper2.default.getPatternByIndex(checkDigit));
	
	                        data += _helper2.default.encode(_helper2.default.stopPattern);
	
	                        return data;
	                    }
	                }, {
	                    key: 'checksum',
	                    value: function checksum(groups) {
	                        var weight = 0,
	                            sum = 0;
	
	                        groups.forEach(function (chunk, i) {
	                            var code = chunk.code,
	                                text = chunk.text;
	
	                            if (i === 0) {
	                                sum += _helper2.default.Code128Sym['Start' + code];
	                            } else {
	                                var value = _helper2.default.Code128Sym['Code' + code];
	                                sum += value * ++weight;
	                            }
	
	                            if (code === CODE_SET_C) {
	                                (0, _utils.sliceString)(text, 2, function (char) {
	                                    sum += _helper2.default.getCharValue(char, code) * ++weight;
	                                });
	                            } else {
	                                (0, _utils.sliceString)(text, 1, function (char) {
	                                    sum += _helper2.default.getCharValue(char, code) * ++weight;
	                                });
	                            }
	                        });
	
	                        return sum % 103;
	                    }
	                }]);
	
	                return Code128Auto;
	            }();
	
	            exports.default = Code128Auto;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _OneDimensionalBarcode = __webpack_require__(4);
	
	            var _OneDimensionalBarcode2 = _interopRequireDefault(_OneDimensionalBarcode);
	
	            var _index = __webpack_require__(2);
	
	            var _index2 = _interopRequireDefault(_index);
	
	            var _utils = __webpack_require__(0);
	
	            var _helper = __webpack_require__(32);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            var _exceptions = __webpack_require__(1);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	            function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	            var Code39 = function (_OneDimensionalBarcod) {
	                _inherits(Code39, _OneDimensionalBarcod);
	
	                function Code39(originConfig) {
	                    _classCallCheck(this, Code39);
	
	                    var _this = _possibleConstructorReturn(this, (Code39.__proto__ || Object.getPrototypeOf(Code39)).call(this, originConfig, _helper2.default.defaultConfig));
	
	                    var _this$config = _this.config,
	                        text = _this$config.text,
	                        checkDigit = _this$config.checkDigit,
	                        fullASCII = _this$config.fullASCII,
	                        nwRatio = _this$config.nwRatio,
	                        labelWithStartAndStopCharacter = _this$config.labelWithStartAndStopCharacter;
	
	
	                    var _text = fullASCII ? _helper2.default.getFullASCIIChar(text) : text;
	
	                    if (checkDigit) {
	                        var _checkDigit = _helper2.default.getMod43Val(_text);
	                        _this.text = _helper2.default.START_STOP_CHARACTERS + _text + _checkDigit + _helper2.default.START_STOP_CHARACTERS;
	                        var labelWithoutPattern = text + _checkDigit;
	                        var labelWithPattern = _helper2.default.START_STOP_CHARACTERS + labelWithoutPattern + _helper2.default.START_STOP_CHARACTERS;
	                        _this.label = labelWithStartAndStopCharacter ? labelWithPattern : labelWithoutPattern;
	                    } else {
	                        _this.text = _helper2.default.START_STOP_CHARACTERS + _text + _helper2.default.START_STOP_CHARACTERS;
	                        var _labelWithoutPattern = text;
	                        var _labelWithPattern = _helper2.default.START_STOP_CHARACTERS + _labelWithoutPattern + _helper2.default.START_STOP_CHARACTERS;
	                        _this.label = labelWithStartAndStopCharacter ? _labelWithPattern : _labelWithoutPattern;
	                    }
	
	                    _this.nwRatio = +nwRatio;
	
	                    var data = _this.calculateData();
	                    _this.adjustDesiredSize(data);
	                    _this.convertToShape(data);
	                    return _this;
	                }
	
	                _createClass(Code39, [{
	                    key: 'validate',
	                    value: function validate() {
	                        var _config = this.config,
	                            text = _config.text,
	                            fullASCII = _config.fullASCII,
	                            nwRatio = _config.nwRatio;
	                       
	
	                        var reg = /^[0-9A-Z\-\.\\$\/\+\%]+$/;
	                        if (!fullASCII && !reg.test(text)) {
	                            throw new _exceptions.InvalidTextException(text);
	                        }
	
	                        if (nwRatio != 2 && nwRatio != 3) {
	                            throw new _exceptions.BadArgumentsException({ nwRatio: nwRatio }, 'NwRatio is 2 or 3');
	                        }
	                    }
	                }, {
	                    key: 'encode',
	                    value: function encode(str) {
	                        var nwRatio = this.nwRatio;
	
	                        var data = '';
	                        var pattern1 = (0, _utils.strRepeat)('1', nwRatio);
	                        var pattern0 = (0, _utils.strRepeat)('0', nwRatio);
	                        (0, _utils.str2Array)(str).forEach(function (item, index) {
	                            if ((0, _utils.isEven)(index)) {
	                                if (item === '1') {
	                                    data += pattern1;
	                                } else {
	                                    data += '1';
	                                }
	                            } else {
	                                if (item === '1') {
	                                    data += pattern0;
	                                } else {
	                                    data += '0';
	                                }
	                            }
	                        });
	
	                        return data;
	                    }
	                }, {
	                    key: 'calculateData',
	                    value: function calculateData() {
	                        var _this2 = this;
	
	                        var text = this.text;
	
	                        var data = '';
	
	                        (0, _utils.sliceString)(text, 1, function (char) {
	                            data = data + _this2.encode(_helper2.default.TABLE[char]) + '0';
	                        });
	
	                        data = data.substr(0, data.length - 1);
	                        return data;
	                    }
	                }]);
	
	                return Code39;
	            }(_OneDimensionalBarcode2.default);
	
	            exports.default = Code39;
	
	
	            _index2.default.registerEncoder('Code39', Code39);
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _exceptions = __webpack_require__(1);
	
	            var _utils = __webpack_require__(0);
	
	            var defaultConfig = {
	                height: 60,
	                showLabel: true,
	                checkDigit: false,
	                fullASCII: false,
	                labelPosition: 'bottom',
	                nwRatio: 3,
	                labelWithStartAndStopCharacter: false,
	                quietZone: {
	                    top: 0,
	                    right: 10,
	                    bottom: 0,
	                    left: 10
	                }
	            };
	
	            var TABLE = {
	                '0': '000110100',
	                '1': '100100001',
	                '2': '001100001',
	                '3': '101100000',
	                '4': '000110001',
	                '5': '100110000',
	                '6': '001110000',
	                '7': '000100101',
	                '8': '100100100',
	                '9': '001100100',
	                'A': '100001001',
	                'B': '001001001',
	                'C': '101001000',
	                'D': '000011001',
	                'E': '100011000',
	                'F': '001011000',
	                'G': '000001101',
	                'H': '100001100',
	                'I': '001001100',
	                'J': '000011100',
	                'K': '100000011',
	                'L': '001000011',
	                'M': '101000010',
	                'N': '000010011',
	                'O': '100010010',
	                'P': '001010010',
	                'Q': '000000111',
	                'R': '100000110',
	                'S': '001000110',
	                'T': '000010110',
	                'U': '110000001',
	                'V': '011000001',
	                'W': '111000000',
	                'X': '010010001',
	                'Y': '110010000',
	                'Z': '011010000',
	                '-': '010000101',
	                '.': '110000100',
	                ' ': '011000100',
	                '$': '010101000',
	                '/': '010100010',
	                '+': '010001010',
	                '%': '000101010',
	                '*': '010010100'
	            };
	
	            var START_STOP_CHARACTERS = '*';
	
	            var MODULO_43_CHECK_TABLE = (0, _utils.str2Array)('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%');
	
	            function getMod43Val(text) {
	                var sum = 0;
	
	                (0, _utils.sliceString)(text, 1, function (char) {
	                    sum += MODULO_43_CHECK_TABLE.indexOf(char);
	                });
	                return MODULO_43_CHECK_TABLE[sum % 43];
	            }
	
	            var FULL_ASCII_TABLE = ['%U', '$A', '$B', '$C', '$D', '$E', '$F', '$G', '$H', '$I', '$J', '$K', '$L', '$M', '$N', '$O', '$P', '$Q', '$R', '$S', '$T', '$U', '$V', '$W', '$X', '$Y', '$Z', '%A', '%B', '%C', '%D', '%E', ' ', '/A', '/B', '/C', '/D', '/E', '/F', '/G', '/H', '/I', '/J', '/K', '/L', '-', '.', '/O', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/Z', '%F', '%G', '%H', '%I', '%J', '%V', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '%K', '%L', '%M', '%N', '%O', '%W', '+A', '+B', '+C', '+D', '+E', '+F', '+G', '+H', '+I', '+J', '+K', '+L', '+M', '+N', '+O', '+P', '+Q', '+R', '+S', '+T', '+U', '+V', '+W', '+X', '+Y', '+Z', '%P', '%Q', '%R', '%S', '%T'];
	
	            function getFullASCIIChar(text) {
	                var str = '';
	                (0, _utils.sliceString)(text, 1, function (char) {
	                    var c = FULL_ASCII_TABLE[char.charCodeAt(0)];
	                    if (c) {
	                        str += c;
	                    } else {
	                        throw new _exceptions.InvalidTextException(text);
	                    }
	                });
	
	                return str;
	            }
	
	            exports.default = {
	                TABLE: TABLE, START_STOP_CHARACTERS: START_STOP_CHARACTERS, defaultConfig: defaultConfig, getMod43Val: getMod43Val, getFullASCIIChar: getFullASCIIChar
	            };
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _TwoDimensionalBarcode = __webpack_require__(7);
	
	            var _TwoDimensionalBarcode2 = _interopRequireDefault(_TwoDimensionalBarcode);
	
	            var _index = __webpack_require__(2);
	
	            var _index2 = _interopRequireDefault(_index);
	
	            var _helper = __webpack_require__(34);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            var _utils = __webpack_require__(0);
	
	            var _exceptions = __webpack_require__(1);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	            function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	            var Code49 = function (_TwoDimensionalBarcod) {
	                _inherits(Code49, _TwoDimensionalBarcod);
	
	                function Code49(originConfig) {
	                    _classCallCheck(this, Code49);
	
	                    var _this = _possibleConstructorReturn(this, (Code49.__proto__ || Object.getPrototypeOf(Code49)).call(this, originConfig, _helper2.default.defaultConfig));
	
	                    var text = _this.config.text;
	
	                    _this.text = text;
	                    _this.label = text.replace(/[\xc9-\xcf]/g, '');
	                    _this.mode = _helper2.default.isNumericOnly(text) ? 2 : 0;
	                    _this.getModes();
	                    var data = _this.calculateData();
	                    _this.adjustDesiredSize(data);
	                    _this.convertToShape(data);
	                    return _this;
	                }
	
	                _createClass(Code49, [{
	                    key: 'validate',
	                    value: function validate() {
	                        var text = this.config.text;
	
	
	                        var reg = /^[\x00-\x80\xcf\xca\xc9]+$/;
	                        if (!reg.test(text)) {
	                            throw new _exceptions.InvalidTextException(text);
	                        }
	                    }
	                }, {
	                    key: 'getModes',
	                    value: function getModes() {
	                        var text = this.text,
	                            _config = this.config,
	                            grouping = _config.grouping,
	                            groupNo = _config.groupNo;
	
	                        var groups = _helper2.default.getTextGroup(text);
	
	                        if (groups.length > 1) {
	                            if (!grouping) {
	                                throw new _exceptions.TextTooLargeException();
	                            }
	                            if (groups.length > 9) {
	                                throw new _exceptions.GroupSizeException(groups.length);
	                            }
	                            if (groupNo > groups.length - 1) {
	                                throw new _exceptions.GroupOverflowException(groups.length);
	                            }
	                            this.groupCount = groups.length;
	                            this.mode = 3;
	                            text = groups[groupNo];
	                        }
	
	                        var modes = [];
	                        var i = 0,
	                            j = 0,
	                            len = text.length;
	                        while (i < len) {
	                            while (j < len) {
	                                if (text[j] < '0' || text[j] > '9') {
	                                    break;
	                                }
	                                j++;
	                            }
	
	                            if (j - i >= 5) {
	                                modes.push({ mode: 'number', text: text.substring(i, j) });
	                                i = j;
	                            } else {
	                                var lastGroup = modes[modes.length - 1];
	                                if (lastGroup && lastGroup.mode === 'alpha') {
	                                    lastGroup.text += text.substring(i, j + 1);
	                                } else {
	                                    modes.push({ mode: 'alpha', text: text.substring(i, j + 1) });
	                                }
	                                i = ++j;
	                            }
	                        }
	
	                        this.modes = modes;
	                    }
	                }, {
	                    key: 'encodeNumeric',
	                    value: function encodeNumeric(text) {
	                        var num1 = void 0,
	                            num2 = void 0;
	                        switch (text.length) {
	                            case 3:
	                                num1 = +text;
	                                return [~~(num1 / 48), num1 % 48];
	                            case 4:
	                                num1 = +text + 100000;
	                                return [~~(num1 / (48 * 48)), ~~(num1 % (48 * 48) / 48), num1 % 48];
	                            case 5:
	                                num1 = +text;
	                                return [~~(num1 / (48 * 48)), ~~(num1 % (48 * 48) / 48), num1 % 48];
	                            case 6:
	                                num1 = text.substr(0, 5);
	                                return this.encodeNumeric(num1).concat([+text[5]]);
	                            case 7:
	                                num1 = text.substr(0, 4);
	                                num2 = text.substr(4, 3);
	                                return this.encodeNumeric(num1).concat(this.encodeNumeric(num2));
	                            case 8:
	                                num1 = text.substr(0, 5);
	                                num2 = text.substr(5, 3);
	                                return this.encodeNumeric(num1).concat(this.encodeNumeric(num2));
	                            case 9:
	                                num1 = text.substr(0, 5);
	                                num2 = text.substr(5, 4);
	                                return this.encodeNumeric(num1).concat(this.encodeNumeric(num2));
	                            default:
	                                num1 = text.substr(0, 5);
	                                num2 = text.substr(5, text.length);
	                                return this.encodeNumeric(num1).concat(this.encodeNumeric(num2));
	                        }
	                    }
	                }, {
	                    key: 'encodeAlpha',
	                    value: function encodeAlpha(text) {
	                        return (0, _utils.str2Array)(text).reduce(function (result, ch) {
	                            result = result.concat(_helper2.default.getCharValue(ch));
	                            return result;
	                        }, []);
	                    }
	                }, {
	                    key: 'calculateData',
	                    value: function calculateData() {
	                        var _this2 = this;
	
	                        var modes = this.modes,
	                            mode = this.mode,
	                            groupCount = this.groupCount,
	                            groupNo = this.config.groupNo;
	
	                        var vals = modes.reduce(function (arr, item, index) {
	                            if (item.mode === 'number') {
	                                if (index === 0) {
	                                    arr.push(_helper2.default.CODE_NS);
	                                }
	                                arr = arr.concat(_this2.encodeNumeric(item.text));
	                                arr.push(_helper2.default.CODE_NS);
	                            } else {
	                                arr = arr.concat(_this2.encodeAlpha(item.text));
	                                arr.push(_helper2.default.CODE_NS);
	                            }
	                            return arr;
	                        }, []);
	                        vals.pop();
	
	                        if (mode === 3) {
	                            vals.unshift(_helper2.default.getGroupInfo(groupNo, groupCount));
	                        }
	
	                        var wl = vals.length % 7;
	                        while (vals.length % 7 !== 0) {
	                            vals.push(_helper2.default.CODE_NS);
	                        }
	
	                        var list = [];
	
	                        (0, _utils.sliceArray)(vals, 7, function (next) {
	                            var sum = next.reduce(function (r, v) {
	                                return r += v;
	                            }, 0);
	                            next.push(sum % 49);
	                            list = list.concat(next);
	                        });
	
	                        var totalRowCount = vals.length / 7;
	
	                        if (totalRowCount % 8 >= 6 || wl > 2 || wl == 0 || totalRowCount % 8 === 1) {
	                            list = list.concat((0, _utils.fillArray)(new Array(8), _helper2.default.CODE_NS));
	                            totalRowCount++;
	                        }
	                        var cr7 = 7 * (totalRowCount - 2) + mode;
	                        list[list.length - 2] = cr7;
	                        var factor00 = _helper2.default.getWeight(0, 0);
	
	                        var wr1 = cr7 * factor00.z,
	                            wr2 = cr7 * factor00.y,
	                            wr3 = cr7 * factor00.x;
	                        var dcnt = (totalRowCount - 1) * 8 / 2;
	                        if (totalRowCount > 6) {
	                            for (var j = 0, p = 0; j < dcnt; j++, p += 2) {
	                                var factor = _helper2.default.getWeight(~~(j / 4) + 1, j % 4);
	                                wr1 += factor.z * (list[p] * 49 + list[p + 1]);
	                            }
	                            wr1 %= 2401;
	                            list[list.length - 8] = ~~(wr1 / 49);
	                            list[list.length - 7] = ~~(wr1 % 49);
	                        }
	                        dcnt++;
	                        for (var _j = 0, _p = 0; _j < dcnt; _j++, _p += 2) {
	                            var _factor = _helper2.default.getWeight(~~(_j / 4) + 1, _j % 4);
	                            wr2 += _factor.y * (list[_p] * 49 + list[_p + 1]);
	                        }
	                        wr2 %= 2401;
	                        list[list.length - 6] = ~~(wr2 / 49);
	                        list[list.length - 5] = ~~(wr2 % 49);
	                        dcnt++;
	                        for (var _j2 = 0, _p2 = 0; _j2 < dcnt; _j2++, _p2 += 2) {
	                            var _factor2 = _helper2.default.getWeight(~~(_j2 / 4) + 1, _j2 % 4);
	                            wr3 += _factor2.x * (list[_p2] * 49 + list[_p2 + 1]);
	                        }
	                        wr3 %= 2401;
	
	                        list[list.length - 4] = ~~(wr3 / 49);
	                        list[list.length - 3] = ~~(wr3 % 49);
	                        var lastRow = list.slice(totalRowCount * 8 - 8, totalRowCount * 8 - 1);
	                        list[list.length - 1] = lastRow.reduce(function (r, v) {
	                                return r += v;
	                            }, 0) % 49;
	
	                        var matrix = [];
	                        for (var i = 0, len = list.length, row = 0; i < len; i += 8, row++) {
	                            var subArr = list.slice(i, i + 8);
	                            var rowArr = [];
	                            matrix.push(rowArr);
	                            for (var _j3 = 0, col = 0; _j3 < 8; _j3 += 2, col++) {
	                                var num = subArr[_j3] * 49 + subArr[_j3 + 1];
	                                rowArr.push(_helper2.default.getParityPattern(num, row, col, totalRowCount));
	                            }
	                            rowArr.unshift(_helper2.default.START_PATTERN);
	
	                            rowArr.push(_helper2.default.STOP_PATTERN);
	                        }
	                        return matrix;
	                    }
	
	                   
	
	                }, {
	                    key: 'convertToShape',
	                    value: function convertToShape(matrix) {
	                        var label = this.label,
	                            isLabelBottom = this.isLabelBottom,
	                            height = this.height,
	                            quietZone = this.quietZone,
	                            showLabel = this.config.showLabel,
	                            _style = this.style,
	                            fontSizeInUnit = _style.fontSizeInUnit,
	                            textAlign = _style.textAlign;
	
	
	                        if (!showLabel) {
	                            fontSizeInUnit = 0;
	                        }
	                        var shapes = [];
	
	                        var sepHeight = 1;
	
	                        var rowHeight = (height - sepHeight) / matrix.length - sepHeight;
	                       
	                       
	                       
	
	                        var totalLength = 70 + quietZone.left.relativeValue + quietZone.right.relativeValue;
	
	                        var startX = 0,
	                            startY = quietZone.top.relativeValue,
	                            textY = void 0;
	
	                        if (isLabelBottom) {
	                            textY = startY + height;
	                        } else {
	                            textY = startY;
	                            startY += fontSizeInUnit;
	                        }
	
	                        shapes.push({
	                            type: 'rect',
	                            x: startX,
	                            y: startY,
	                            width: totalLength,
	                            height: sepHeight
	                        });
	
	                        startY += sepHeight;
	
	                        matrix.forEach(function (row, index) {
	                            startX = quietZone.left.relativeValue;
	                            row.forEach(function (pattern) {
	                                (0, _utils.combineTruthy)(pattern).forEach(function (num) {
	                                    if (num !== 0) {
	                                        shapes.push({
	                                            type: 'rect',
	                                            x: startX,
	                                            y: startY,
	                                            width: num,
	                                            height: rowHeight
	                                        });
	                                        startX += num;
	                                    } else {
	                                        startX++;
	                                    }
	                                });
	                            });
	                            if (index !== 0 || index !== matrix.length - 1) {
	                                shapes.push({
	                                    type: 'rect',
	                                    x: quietZone.left.relativeValue,
	                                    y: startY - sepHeight,
	                                    width: 70,
	                                    height: sepHeight
	                                });
	                                startY += rowHeight + sepHeight;
	                            }
	                        });
	
	                        shapes.push({
	                            type: 'rect',
	                            x: 0,
	                            y: startY - sepHeight,
	                            width: totalLength,
	                            height: sepHeight
	                        });
	
	                        if (showLabel) {
	                            var textX = 0;
	                            var cellWidth = totalLength;
	
	                            switch (textAlign) {
	                                case 'center':
	                                    textX += cellWidth / 2;
	                                    break;
	                                case 'right':
	                                    textX += cellWidth;
	                                    break;
	                                default:
	                            }
	
	                            shapes.push({
	                                type: 'text',
	                                x: textX,
	                                y: textY,
	                                text: label,
	                                textAlign: textAlign,
	                                maxWidth: cellWidth
	                            });
	                        }
	
	                        if (isLabelBottom) {
	                            this.size = {
	                                width: startX + quietZone.right.relativeValue,
	                                height: textY + fontSizeInUnit + quietZone.bottom.relativeValue
	                            };
	                        } else {
	                            this.size = {
	                                width: startX + quietZone.right.relativeValue,
	                                height: startY + quietZone.bottom.relativeValue
	                            };
	                        }
	
	                        this.shapes = shapes;
	                    }
	
	                   
	
	                }, {
	                    key: 'adjustDesiredSize',
	                    value: function adjustDesiredSize(matrix) {
	                        var _config2 = this.config,
	                            desiredSize = _config2.desiredSize,
	                            showLabel = _config2.showLabel,
	                            quietZone = this.quietZone,
	                            fontHeight = this.fontHeight,
	                            containerWidth = this.containerWidth,
	                            containerHeight = this.containerHeight;
	
	
	                        if (!desiredSize) {
	                            return;
	                        }
	                        var symbolWidth = matrix[0].reduce(function (sum, n) {
	                            return sum += n.length;
	                        }, 0);
	                        symbolWidth = symbolWidth + (0, _utils.getQuietZoneRelativeValue)(quietZone.left) + (0, _utils.getQuietZoneRelativeValue)(quietZone.right);
	                        containerWidth = containerWidth - (0, _utils.getQuietZonePixelValue)(quietZone.left) - (0, _utils.getQuietZonePixelValue)(quietZone.right);
	
	                        var unitValue = void 0;
	                        if (desiredSize.forceRounding) {
	                            unitValue = ~~(containerWidth / symbolWidth);
	                            unitValue = unitValue < 1 ? 1 : unitValue;
	                        } else {
	                            unitValue = containerWidth / symbolWidth;
	                        }
	
	                        this.style.unitValue = unitValue;
	                        this.style.fontSizeInUnit = fontHeight / unitValue;
	
	                        containerHeight = showLabel ? containerHeight - fontHeight : containerHeight;
	                        this.height = containerHeight / unitValue - (0, _utils.getQuietZoneRelativeValue)(quietZone.top) - (0, _utils.getQuietZoneRelativeValue)(quietZone.bottom);
	
	                        Object.keys(quietZone).forEach(function (item) {
	                            if (quietZone[item].originIsAbsoluteValue) {
	                                quietZone[item].relativeValue = quietZone[item].pixelValue / unitValue;
	                            }
	                        });
	                    }
	                }]);
	
	                return Code49;
	            }(_TwoDimensionalBarcode2.default);
	
	            exports.default = Code49;
	
	
	            _index2.default.registerEncoder('Code49', Code49);
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _constants = __webpack_require__(6);
	
	            var _constants2 = _interopRequireDefault(_constants);
	
	            var _utils = __webpack_require__(0);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            var defaultConfig = {
	                showLabel: true,
	                grouping: false,
	                groupNo: 0,
	                quietZoneStart: 10,
	                quietZoneStop: 1,
	                labelPosition: 'bottom',
	                height: 60,
	                quietZone: {
	                    top: 0,
	                    right: 1,
	                    bottom: 0,
	                    left: 10
	                }
	            };
	
	            var ODD_TABLE = [0xC940, 0xF250, 0xECA0, 0xFB28, 0xE5A0, 0xF968, 0xDB40, 0xF6D0, 0xFDB4, 0xC4A0, 0xF128, 0x9940, 0xE650, 0xF994, 0xDCA0, 0xF728, 0xFDCA, 0x8B40, 0xE2D0, 0xCDA0, 0xF368, 0xBB40, 0xEED0, 0xFBB4, 0xC250, 0x8CA0, 0xE328, 0xCE50, 0xF394, 0xBCA0, 0xEF28, 0xFBCA, 0x85A0, 0xE168, 0xC6D0, 0xF1B4, 0x9DA0, 0xE768, 0xF9DA, 0xDED0, 0xF7B4, 0xC128, 0x8650, 0xE194, 0xC728, 0xF1CA, 0x9E50, 0xE794, 0xDF28, 0xF7CA, 0x82D0, 0xC368, 0x8ED0, 0xE3B4, 0xCF68, 0xF3DA, 0xBED0, 0xEFB4, 0x8328, 0xC394, 0x8F28, 0xE3CA, 0xCF94, 0x8168, 0xC1B4, 0x8768, 0xE1DA, 0xC7B4, 0x9F68, 0xE7DA, 0xDFB4, 0xD140, 0xF450, 0xFD14, 0xE9A0, 0xFA68, 0xD740, 0xF5D0, 0xFD74, 0xC8A0, 0xF228, 0xB140, 0xEC50, 0xFB14, 0x9340, 0xE4D0, 0xF934, 0xD9A0, 0xF668, 0xFD9A, 0xCBA0, 0xF2E8, 0xB740, 0xEDD0, 0xFB74, 0xC450, 0xF114, 0x98A0, 0xE628, 0xF98A, 0xDC50, 0xF714, 0x89A0, 0xE268, 0xCCD0, 0xF334, 0xB9A0, 0xEE68, 0xFB9A, 0xC5D0, 0xF174, 0x9BA0, 0xE6E8, 0xF9BA, 0xDDD0, 0xF774, 0xC228, 0x8C50, 0xE314, 0xCE28, 0xF38A, 0xBC50, 0xEF14, 0x84D0, 0xE134, 0xC668, 0xF19A, 0x9CD0, 0xE734, 0xDE68, 0xF79A, 0xC2E8, 0x8DD0, 0xE374, 0xCEE8, 0xF3BA, 0xBDD0, 0xEF74, 0xC114, 0x8628, 0xE18A, 0xC714, 0x9E28, 0xE78A, 0x8268, 0xC334, 0x8E68, 0xE39A, 0xCF34, 0xBE68, 0xEF9A, 0xC174, 0x86E8, 0xE1BA, 0xC774, 0x9EE8, 0xE7BA, 0xDF74, 0x8314, 0xC38A, 0x8F14, 0x8134, 0xC19A, 0x8734, 0xC79A, 0x9F34, 0x8374, 0xC3BA, 0x8F74, 0xCFBA, 0xBF74, 0xD0A0, 0xF428, 0xFD0A, 0xA340, 0xE8D0, 0xFA34, 0xD3A0, 0xF4E8, 0xFD3A, 0xAF40, 0xEBD0, 0xFAF4, 0xC850, 0xF214, 0xB0A0, 0xEC28, 0xFB0A, 0x91A0, 0xE468, 0xF91A, 0xD8D0, 0xF634, 0xC9D0, 0xF274, 0xB3A0, 0xECE8, 0xFB3A, 0x97A0, 0xE5E8, 0xF97A, 0xDBD0, 0xF6F4, 0xC428, 0xF10A, 0x9850, 0xE614, 0xDC28, 0xF70A, 0x88D0, 0xE234, 0xCC68, 0xF31A, 0xB8D0, 0xEE34, 0xC4E8, 0xF13A, 0x99D0, 0xE674, 0xDCE8, 0xF73A, 0x8BD0, 0xE2F4, 0xCDE8, 0xF37A, 0xBBD0, 0xEEF4, 0xC214, 0x8C28, 0xE30A, 0xCE14, 0x8468, 0xE11A, 0xC634, 0x9C68, 0xE71A, 0xDE34, 0xC274, 0x8CE8, 0xE33A, 0xCE74, 0xBCE8, 0xEF3A, 0x85E8, 0xE17A, 0xC6F4, 0x9DE8, 0xE77A, 0xDEF4, 0xC10A, 0x8614, 0xC70A, 0x8234, 0xC31A, 0x8E34, 0xCF1A, 0xC13A, 0x8674, 0xC73A, 0x9E74, 0xDF3A, 0x82F4, 0xC37A, 0x8EF4, 0xCF7A, 0xBEF4, 0x830A, 0x811A, 0x871A, 0x833A, 0x8F3A, 0x817A, 0x877A, 0x9F7A, 0xD050, 0xF414, 0xA1A0, 0xE868, 0xFA1A, 0xD1D0, 0xF474, 0xA7A0, 0xE9E8, 0xFA7A, 0xD7D0, 0xF5F4, 0xC828, 0xF20A, 0xB050, 0xEC14, 0x90D0, 0xE434, 0xD868, 0xF61A, 0xC8E8, 0xF23A, 0xB1D0, 0xEC74, 0x93D0, 0xE4F4, 0xD9E8, 0xF67A, 0xCBE8, 0xF2FA, 0xB7D0, 0xEDF4, 0xC414, 0x9828, 0xE60A, 0x8868, 0xE21A, 0xCC34, 0xB868, 0xEE1A, 0xC474, 0x98E8, 0xE63A, 0xDC74, 0x89E8, 0xE27A, 0xCCF4, 0xB9E8, 0xEE7A, 0xC5F4, 0x9BE8, 0xE6FA, 0xDDF4, 0xC20A, 0x8C14, 0x8434, 0xC61A, 0x9C34, 0xC23A, 0x8C74, 0xCE3A, 0xBC74, 0x84F4, 0xC67A, 0x9CF4, 0xDE7A, 0xC2FA, 0x8DF4, 0xCEFA, 0xBDF4, 0x860A, 0x821A, 0x8E1A, 0x863A, 0x9E3A, 0x827A, 0x8E7A, 0xBE7A, 0x86FA, 0x9EFA, 0xD028, 0xF40A, 0xA0D0, 0xE834, 0xD0E8, 0xF43A, 0xA3D0, 0xE8F4, 0xD3E8, 0xF4FA, 0xAFD0, 0xEBF4, 0xC814, 0x9068, 0xE41A, 0xD834, 0xC874, 0xB0E8, 0xEC3A, 0x91E8, 0xE47A, 0xD8F4, 0xC9F4, 0xB3E8, 0xECFA, 0x97E8, 0xE5FA, 0xDBF4, 0xC40A, 0x8834, 0xCC1A, 0xC43A, 0x9874, 0xDC3A, 0x88F4, 0xCC7A, 0xB8F4, 0xC4FA, 0x99F4, 0xDCFA, 0x8BF4, 0xCDFA, 0xBBF4, 0x841A, 0x8C3A, 0x847A, 0x9C7A, 0x8CFA, 0xBCFA, 0x85FA, 0x9DFA, 0xF520, 0xFD48, 0xDAC0, 0xF6B0, 0xFDAC, 0xCA40, 0xF290, 0xED20, 0xFB48, 0xCD60, 0xF358, 0xBAC0, 0xEEB0, 0xFBAC, 0xC520, 0xF148, 0x9A40, 0xE690, 0xF9A4, 0xDD20, 0xF748, 0xFDD2, 0xC6B0, 0xF1AC, 0x9D60, 0xE758, 0xF9D6, 0xDEB0, 0xF7AC, 0xC290, 0x8D20, 0xE348, 0xCE90, 0xF3A4, 0xBD20, 0xEF48, 0xFBD2, 0xC358, 0x8EB0, 0xE3AC, 0xCF58, 0xF3D6, 0xBEB0, 0xEFAC, 0xC148, 0x8690, 0xE1A4, 0xC748, 0xF1D2, 0x9E90, 0xE7A4, 0xDF48, 0xF7D2, 0xC1AC, 0x8758, 0xE1D6, 0xC7AC, 0x9F58, 0xE7D6, 0xDFAC, 0x8348, 0xC3A4, 0x8F48, 0xE3D2, 0xCFA4, 0xBF48, 0xEFD2, 0xE960, 0xFA58, 0xD6C0, 0xF5B0, 0xFD6C, 0xD240, 0xF490, 0xFD24, 0xEB20, 0xFAC8, 0x92C0, 0xE4B0, 0xF92C, 0xD960, 0xF658, 0xFD96, 0xCB60, 0xF2D8, 0xB6C0, 0xC920, 0xF248, 0xB240, 0xEC90, 0xFB24, 0x9640, 0xE590, 0xF964, 0xDB20, 0xF6C8, 0xFDB2, 0x8960, 0xE258, 0xCCB0, 0xF32C, 0xB960, 0xEE58, 0xFB96, 0xC5B0, 0xF16C, 0x9B60, 0xC490, 0xF124, 0x9920, 0xE648, 0xF992, 0xDC90, 0xF724, 0x8B20, 0xE2C8, 0xCD90, 0xF364, 0xBB20, 0xEEC8, 0xFBB2, 0x84B0, 0xE12C, 0xC658, 0xF196, 0x9CB0, 0xE72C, 0xDE58, 0xF796, 0xC2D8, 0x8DB0, 0xC248, 0x8C90, 0xE324, 0xBDB0, 0xCE48, 0xF392, 0xBC90, 0xEF24, 0x8590, 0xE164, 0xC6C8, 0xF1B2, 0x9D90, 0xE764, 0xDEC8, 0xF7B2, 0x8258, 0xC32C, 0x8E58, 0xE396, 0xCF2C, 0xBE58, 0xEF96, 0xC16C, 0x86D8, 0xC124, 0x8648, 0xE192, 0x9ED8, 0xC724, 0x9E48, 0xE792, 0xDF24, 0x82C8, 0xC364, 0x8EC8, 0xE3B2, 0xCF64, 0xBEC8, 0xEFB2, 0x812C, 0xC196, 0x872C, 0xC796, 0x9F2C, 0x836C, 0x8324, 0x8F6C, 0xC392, 0x8F24, 0xBF6C, 0xCF92, 0x8164, 0xC1B2, 0x8764, 0xC7B2, 0x9F64, 0xDFB2, 0xA2C0, 0xE8B0, 0xFA2C, 0xD360, 0xF4D8, 0xFD36, 0xD120, 0xF448, 0xFD12, 0xAEC0, 0xEBB0, 0xFAEC, 0xA640, 0xE990, 0xFA64, 0xD720, 0xF5C8, 0xFD72, 0x9160, 0xE458, 0xF916, 0xD8B0, 0xF62C, 0xC9B0, 0xF26C, 0xB360, 0xC890, 0xF224, 0xB120, 0xEC48, 0xFB12, 0x9760, 0xE5D8, 0xF976, 0x9320, 0xE4C8, 0xF932, 0xD990, 0xF664, 0xCB90, 0xF2E4, 0xB720, 0xEDC8, 0xFB72, 0x88B0, 0xE22C, 0xCC58, 0xF316, 0xB8B0, 0xEE2C, 0xC4D8, 0xF136, 0x99B0, 0xC448, 0xF112, 0x9890, 0xE624, 0xDC48, 0xF712, 0x8BB0, 0xE2EC, 0x8990, 0xE264, 0xBBB0, 0xCCC8, 0xF332, 0xB990, 0xEE64, 0xC5C8, 0xF172, 0x9B90, 0xE6E4, 0xDDC8, 0xF772, 0x8458, 0xE116, 0xC62C, 0x9C58, 0xE716, 0xDE2C, 0xC26C, 0x8CD8, 0xC224, 0x8C48, 0xE312, 0xBCD8, 0xCE24, 0xBC48, 0xEF12, 0x85D8, 0xE176, 0x84C8, 0xE132, 0x9DD8, 0xC664, 0x9CC8, 0xE732, 0xDE64, 0xC2E4, 0x8DC8, 0xE372, 0xCEE4, 0xBDC8, 0xEF72, 0x822C, 0xC316, 0x8E2C, 0xCF16, 0xC136, 0x866C, 0xC112, 0x8624, 0x9E6C, 0xC712, 0x9E24, 0x82EC, 0x8264, 0x8EEC, 0xC332, 0x8E64, 0xBEEC, 0xCF32, 0xBE64, 0xC172, 0x86E4, 0xC772, 0x9EE4, 0xDF72, 0x8116, 0x8716, 0x8336, 0x8312, 0x8F36, 0x8F12, 0x8176, 0x8132, 0x8776, 0x8732, 0x9F76, 0x9F32, 0x8372, 0x8F72, 0xBF72, 0xA160, 0xE858, 0xFA16, 0xD1B0, 0xF46C, 0xD090, 0xF424, 0xA760, 0xE9D8, 0xFA76, 0xA320, 0xE8C8, 0xFA32, 0xD7B0, 0xF5EC, 0xD390, 0xF4E4, 0xAF20, 0xEBC8, 0xFAF2, 0x90B0, 0xE42C, 0xD858, 0xF616, 0xC8D8, 0xF236, 0xB1B0, 0xC848, 0xF212, 0xB090, 0xEC24, 0x93B0, 0xE4EC, 0x9190, 0xE464, 0xD8C8, 0xF632, 0xCBD8, 0xF2F6, 0xB7B0, 0xC9C8, 0xF272, 0xB390, 0xECE4, 0x9790, 0xE5E4, 0xDBC8, 0xF6F2, 0x8858, 0xE216, 0xCC2C, 0xB858, 0xEE16, 0xC46C, 0x98D8, 0xC424, 0x9848, 0xE612, 0xDC24, 0x89D8, 0xE276, 0x88C8, 0xE232, 0xB9D8, 0xCC64, 0xB8C8, 0xEE32, 0xC5EC, 0x9BD8, 0xC4E4, 0x99C8, 0xE672, 0xDCE4, 0x8BC8, 0xE2F2, 0xCDE4, 0xBBC8, 0xEEF2, 0x842C, 0xC616, 0x9C2C, 0xC236, 0x8C6C, 0xC212, 0x8C24, 0xBC6C, 0xCE12, 0x84EC, 0x8464, 0x9CEC, 0xC632, 0x9C64, 0xDE32, 0xC2F6, 0x8DEC, 0xC272, 0x8CE4, 0xBDEC, 0xCE72, 0xBCE4, 0x85E4, 0xC6F2, 0x9DE4, 0xDEF2, 0x8216, 0x8E16, 0x8636, 0x8612, 0x9E36, 0x8276, 0x8232, 0x8E76, 0x8E32, 0xBE76, 0x86F6, 0x8672, 0x9EF6, 0x9E72, 0x82F2, 0x8EF2, 0xBEF2, 0xA0B0, 0xE82C, 0xD0D8, 0xF436, 0xD048, 0xF412, 0xA3B0, 0xE8EC, 0xA190, 0xE864, 0xD3D8, 0xF4F6, 0xD1C8, 0xF472, 0xAFB0, 0xEBEC, 0xA790, 0xE9E4, 0xD7C8, 0xF5F2, 0x9058, 0xE416, 0xD82C, 0xC86C, 0xB0D8, 0xC824, 0xB048, 0xEC12, 0x91D8, 0xE476, 0x90C8, 0xE432, 0xD864, 0xC9EC, 0xB3D8, 0xC8E4, 0xB1C8, 0xEC72, 0x97D8, 0xE5F6, 0x93C8, 0xE4F2, 0xD9E4, 0xCBE4, 0xB7C8, 0xEDF2, 0x882C, 0xCC16, 0xC436, 0x986C, 0xC412, 0x9824, 0x88EC, 0x8864, 0xB8EC, 0xCC32, 0xB864, 0xC4F6, 0x99EC, 0xC472, 0x98E4, 0xDC72, 0x8BEC, 0x89E4, 0xBBEC, 0xCCF2, 0xB9E4, 0xC5F2, 0x9BE4, 0xDDF2, 0x8416, 0x8C36, 0x8C12, 0x8476, 0x8432, 0x9C76, 0x9C32, 0x8CF6, 0x8C72, 0xBCF6, 0xBC72, 0x85F6, 0x84F2, 0x9DF6, 0x9CF2, 0x8DF2, 0xBDF2, 0xA058, 0xE816, 0xD06C, 0xD024, 0xA1D8, 0xE876, 0xA0C8, 0xE832, 0xD1EC, 0xD0E4, 0xA7D8, 0xE9F6, 0xA3C8, 0xE8F2, 0xD7EC, 0xD3E4, 0x902C, 0xC836, 0xB06C, 0xC812, 0x90EC, 0x9064, 0xD832, 0xC8F6, 0xB1EC, 0xC872, 0xB0E4, 0x93EC, 0x91E4, 0xD8F2, 0xCBF6, 0xB7EC, 0xC9F2, 0xB3E4, 0x8816, 0x9836, 0x8876, 0x8832, 0xB876, 0x98F6, 0x9872, 0x89F6, 0x88F2, 0xB9F6, 0xB8F2, 0x9BF6, 0x99F2, 0xEA60, 0xFA98, 0xD440, 0xF510, 0xFD44, 0xED70, 0xFB5C, 0x94C0, 0xE530, 0xF94C, 0xDA60, 0xF698, 0xFDA6, 0xCA20, 0xF288, 0xB440, 0xED10, 0xFB44, 0x9AE0, 0xE6B8, 0xF9AE, 0xDD70, 0xF75C, 0x8A60, 0xE298, 0xCD30, 0xF34C, 0xBA60, 0xEE98, 0xFBA6, 0xC510, 0xF144, 0x9A20, 0xE688, 0xF9A2, 0xDD10, 0xF744, 0x8D70, 0xE35C, 0xCEB8, 0xF3AE, 0xBD70, 0xEF5C, 0x8530, 0xE14C, 0xC698, 0xF1A6, 0x9D30, 0xE74C, 0xDE98, 0xF7A6, 0xC288, 0x8D10, 0xE344, 0xCE88, 0xF3A2, 0xBD10, 0xEF44, 0x86B8, 0xE1AE, 0xC75C, 0x9EB8, 0xE7AE, 0xDF5C, 0x8298, 0xC34C, 0x8E98, 0xE3A6, 0xCF4C, 0xBE98, 0xEFA6, 0xC144, 0x8688, 0xE1A2, 0xC744, 0x9E88, 0xE7A2, 0xDF44, 0x835C, 0xC3AE, 0x8F5C, 0xCFAE, 0xBF5C, 0x814C, 0xC1A6, 0x874C, 0xC7A6, 0x9F4C, 0xDFA6, 0x8344, 0xC3A2, 0x8F44, 0xCFA2, 0xBF44, 0xD2E0, 0xF4B8, 0xFD2E, 0xADC0, 0xEB70, 0xFADC, 0xA4C0, 0xE930, 0xFA4C, 0xD660, 0xF598, 0xFD66, 0xD220, 0xF488, 0xFD22, 0xAC40, 0xEB10, 0xFAC4, 0xC970, 0xF25C, 0xB2E0, 0xECB8, 0xFB2E, 0x96E0, 0xE5B8, 0xF96E, 0x9260, 0xE498, 0xF926, 0xD930, 0xF64C, 0xCB30, 0xF2CC, 0xB660, 0xC910, 0xF244, 0xB220, 0xEC88, 0xFB22, 0x9620, 0xE588, 0xF962, 0xDB10, 0xF6C4, 0xC4B8, 0xF12E, 0x9970, 0xE65C, 0xDCB8, 0xF72E, 0x8B70, 0xE2DC, 0x8930, 0xE24C, 0xBB70, 0xCC98, 0xF326, 0xB930, 0xEE4C, 0xC598, 0xF166, 0x9B30, 0xC488, 0xF122, 0x9910, 0xE644, 0xDC88, 0xF722, 0x8B10, 0xE2C4, 0xCD88, 0xF362, 0xBB10, 0xEEC4, 0xC25C, 0x8CB8, 0xE32E, 0xCE5C, 0xBCB8, 0xEF2E, 0x85B8, 0xE16E, 0x8498, 0xE126, 0x9DB8, 0xC64C, 0x9C98, 0xE726, 0xDE4C, 0xC2CC, 0x8D98, 0xC244, 0x8C88, 0xE322, 0xBD98, 0xCE44, 0xBC88, 0xEF22, 0x8588, 0xE162, 0xC6C4, 0x9D88, 0xE762, 0xDEC4, 0xC12E, 0x865C, 0xC72E, 0x9E5C, 0xDF2E, 0x82DC, 0x824C, 0x8EDC, 0xC326, 0x8E4C, 0xBEDC, 0xCF26, 0xBE4C, 0xC166, 0x86CC, 0xC122, 0x8644, 0x9ECC, 0xC722, 0x9E44, 0xDF22, 0x82C4, 0xC362, 0x8EC4, 0xCF62, 0xBEC4, 0x832E, 0x8F2E, 0x816E, 0x8126, 0x876E, 0x8726, 0x9F6E, 0x9F26, 0x8366, 0x8322, 0x8F66, 0x8F22, 0xBF66, 0x8162, 0x8762, 0x9F62, 0xD170, 0xF45C, 0xA6E0, 0xE9B8, 0xFA6E, 0xA260, 0xE898, 0xFA26, 0xD770, 0xF5DC, 0xD330, 0xF4CC, 0xD110, 0xF444, 0xAE60, 0xEB98, 0xFAE6, 0xA620, 0xE988, 0xFA62, 0xD710, 0xF5C4, 0xC8B8, 0xF22E, 0xB170, 0xEC5C, 0x9370, 0xE4DC, 0x9130, 0xE44C, 0xD898, 0xF626, 0xCBB8, 0xF2EE, 0xB770, 0xC998, 0xF266, 0xB330, 0xC888, 0xF222, 0xB110, 0xEC44, 0x9730, 0xE5CC, 0x9310, 0xE4C4, 0xD988, 0xF662, 0xCB88, 0xF2E2, 0xB710, 0xEDC4, 0xC45C, 0x98B8, 0xE62E, 0xDC5C, 0x89B8, 0xE26E, 0x8898, 0xE226, 0xB9B8, 0xCC4C, 0xB898, 0xEE26, 0xC5DC, 0x9BB8, 0xC4CC, 0x9998, 0xC444, 0x9888, 0xE622, 0xDC44, 0x8B98, 0xE2E6, 0x8988, 0xE262, 0xBB98, 0xCCC4, 0xB988, 0xEE62, 0xC5C4, 0x9B88, 0xE6E2, 0xDDC4, 0xC22E, 0x8C5C, 0xCE2E, 0xBC5C, 0x84DC, 0x844C, 0x9CDC, 0xC626, 0x9C4C, 0xDE26, 0xC2EE, 0x8DDC, 0xC266, 0x8CCC, 0xC222, 0xBDDC, 0x8C44, 0xBCCC, 0xCE22, 0xBC44, 0x85CC, 0x84C4, 0x9DCC, 0xC662, 0x9CC4, 0xDE62, 0xC2E2, 0x8DC4, 0xCEE2, 0xBDC4, 0x862E, 0x9E2E, 0x826E, 0x8226, 0x8E6E, 0x8E26, 0xBE6E, 0x86EE, 0x8666, 0x9EEE, 0x8622, 0x9E66, 0x9E22, 0x82E6, 0x8262, 0x8EE6, 0x8E62, 0xBEE6, 0xBE62, 0x86E2, 0x9EE2, 0xD0B8, 0xF42E, 0xA370, 0xE8DC, 0xA130, 0xE84C, 0xD3B8, 0xF4EE, 0xD198, 0xF466, 0xD088, 0xF422, 0xAF70, 0xEBDC, 0xA730, 0xE9CC, 0xA310, 0xE8C4, 0xD798, 0xF5E6, 0xD388, 0xF4E2, 0xAF10, 0xEBC4, 0xC85C, 0xB0B8, 0xEC2E, 0x91B8, 0xE46E, 0x9098, 0xE426, 0xD84C, 0xC9DC, 0xB3B8, 0xC8CC, 0xB198, 0xC844, 0xB088, 0xEC22, 0x97B8, 0xE5EE, 0x9398, 0xE4E6, 0x9188, 0xE462, 0xD8C4, 0xCBCC, 0xB798, 0xC9C4, 0xB388, 0xECE2, 0x9788, 0xE5E2, 0xDBC4, 0xC42E, 0x985C, 0xDC2E, 0x88DC, 0x884C, 0xB8DC, 0xCC26, 0xB84C, 0xC4EE, 0x99DC, 0xC466, 0x98CC, 0xC422, 0x9844, 0xDC22, 0x8BDC, 0x89CC, 0xBBDC, 0x88C4, 0xB9CC, 0xCC62, 0xB8C4, 0xC5E6, 0x9BCC, 0xC4E2, 0x99C4, 0xDCE2, 0x8BC4, 0xCDE2, 0xBBC4, 0x8C2E, 0x846E, 0x8426, 0x9C6E, 0x9C26, 0x8CEE, 0x8C66, 0xBCEE, 0x8C22, 0xBC66, 0x85EE, 0x84E6, 0x9DEE, 0x8462, 0x9CE6, 0x9C62, 0x8DE6, 0x8CE2, 0xBDE6, 0xBCE2, 0x85E2, 0x9DE2, 0xD05C, 0xA1B8, 0xE86E, 0xA098, 0xE826, 0xD1DC, 0xD0CC, 0xD044, 0xA7B8, 0xE9EE, 0xA398, 0xE8E6, 0xA188, 0xE862, 0xD7DC, 0xD3CC, 0xD1C4, 0xAF98, 0xEBE6, 0xA788, 0xE9E2, 0xC82E, 0xB05C, 0x90DC, 0x904C, 0xD826, 0xC8EE, 0xB1DC, 0xC866, 0xB0CC, 0xC822, 0xB044, 0x93DC, 0x91CC, 0x90C4, 0xD862, 0xCBEE, 0xB7DC, 0xC9E6, 0xB3CC, 0xC8E2, 0xB1C4, 0x97CC, 0x93C4, 0xD9E2, 0x982E, 0x886E, 0x8826, 0xB86E, 0x98EE, 0x9866, 0x9822, 0x89EE, 0x88E6, 0xB9EE, 0x8862, 0xB8E6, 0xB862, 0x9BEE, 0x99E6, 0x98E2, 0x8BE6, 0x89E2, 0xBBE6, 0xB9E2, 0xD02E, 0xA0DC, 0xA04C, 0xD0EE, 0xD066, 0xD022, 0xA3DC, 0xA1CC, 0xA0C4, 0xD3EE, 0xD1E6, 0xD0E2, 0xAFDC, 0xA7CC, 0xA3C4, 0x906E, 0x9026, 0xB0EE, 0xB066, 0x91EE, 0x90E6, 0x9062, 0xB3EE, 0xB1E6, 0xB0E2, 0x97EE, 0x93E6, 0x91E2, 0xD4E0, 0xF538, 0xFD4E, 0xA8C0, 0xEA30, 0xFA8C, 0xD420, 0xF508, 0xFD42, 0xDAF0, 0xF6BC, 0xCA70, 0xF29C, 0xB4E0, 0xED38, 0xFB4E, 0x9460, 0xE518, 0xF946, 0xDA30, 0xF68C, 0xCA10, 0xF284, 0xB420, 0xED08, 0xFB42, 0xCD78, 0xF35E, 0xBAF0, 0xEEBC, 0xC538, 0xF14E, 0x9A70, 0xE69C, 0xDD38, 0xF74E, 0x8A30, 0xE28C, 0xCD18, 0xF346, 0xBA30, 0xEE8C, 0xC508, 0xF142, 0x9A10, 0xE684, 0xDD08, 0xF742, 0xC6BC, 0x9D78, 0xE75E, 0xDEBC, 0xC29C, 0x8D38, 0xE34E, 0xCE9C, 0xBD38, 0xEF4E, 0x8518, 0xE146, 0xC68C, 0x9D18, 0xE746, 0xDE8C, 0xC284, 0x8D08, 0xE342, 0xCE84, 0xBD08, 0xEF42, 0xC35E, 0x8EBC, 0xCF5E, 0xBEBC, 0xC14E, 0x869C, 0xC74E, 0x9E9C, 0xDF4E, 0x828C, 0xC346, 0x8E8C, 0xCF46, 0xBE8C, 0xC142, 0x8684, 0xC742, 0x9E84, 0xDF42, 0x875E, 0x9F5E, 0x834E, 0x8F4E, 0xBF4E, 0x8146, 0x8746, 0x9F46, 0x8342, 0x8F42, 0xBF42, 0xE978, 0xFA5E, 0xD6F0, 0xF5BC, 0xD270, 0xF49C, 0xACE0, 0xEB38, 0xFACE, 0xA460, 0xE918, 0xFA46, 0xD630, 0xF58C, 0xD210, 0xF484, 0xAC20, 0xEB08, 0xFAC2, 0x92F0, 0xE4BC, 0xD978, 0xF65E, 0xCB78, 0xF2DE, 0xB6F0, 0xC938, 0xF24E, 0xB270, 0xEC9C, 0x9670, 0xE59C, 0x9230, 0xE48C, 0xD918, 0xF646, 0xCB18, 0xF2C6, 0xB630, 0xC908, 0xF242, 0xB210, 0xEC84, 0x9610, 0xE584, 0xDB08, 0xF6C2, 0x8978, 0xE25E, 0xCCBC, 0xB978, 0xEE5E, 0xC5BC, 0x9B78, 0xC49C, 0x9938, 0xE64E, 0xDC9C, 0x8B38, 0xE2CE, 0x8918, 0xE246, 0xBB38, 0xCC8C, 0xB918, 0xEE46, 0xC58C, 0x9B18, 0xC484, 0x9908, 0xE642, 0xDC84, 0x8B08, 0xE2C2, 0xCD84, 0xBB08, 0xEEC2, 0x84BC, 0xC65E, 0x9CBC, 0xDE5E, 0xC2DE, 0x8DBC, 0xC24E, 0x8C9C, 0xBDBC, 0xCE4E, 0xBC9C, 0x859C, 0x848C, 0x9D9C, 0xC646, 0x9C8C, 0xDE46, 0xC2C6, 0x8D8C, 0xC242, 0x8C84, 0xBD8C, 0xCE42, 0xBC84, 0x8584, 0xC6C2, 0x9D84, 0xDEC2, 0x825E, 0x8E5E, 0xBE5E, 0x86DE, 0x864E, 0x9EDE, 0x9E4E, 0x82CE, 0x8246, 0x8ECE, 0x8E46, 0xBECE, 0xBE46, 0x86C6, 0x8642, 0x9EC6, 0x9E42, 0x82C2, 0x8EC2, 0xBEC2, 0xA2F0, 0xE8BC, 0xD378, 0xF4DE, 0xD138, 0xF44E, 0xAEF0, 0xEBBC, 0xA670, 0xE99C, 0xA230, 0xE88C, 0xD738, 0xF5CE, 0xD318, 0xF4C6, 0xD108, 0xF442, 0xAE30, 0xEB8C, 0xA610, 0xE984, 0xD708, 0xF5C2, 0x9178, 0xE45E, 0xD8BC, 0xC9BC, 0xB378, 0xC89C, 0xB138, 0xEC4E, 0x9778, 0xE5DE, 0x9338, 0xE4CE, 0x9118, 0xE446, 0xD88C, 0xCB9C, 0xB738, 0xC98C, 0xB318, 0xC884, 0xB108, 0xEC42, 0x9718, 0xE5C6, 0x9308, 0xE4C2, 0xD984, 0xCB84, 0xB708, 0xEDC2, 0x88BC, 0xCC5E, 0xB8BC, 0xC4DE, 0x99BC, 0xC44E, 0x989C, 0xDC4E, 0x8BBC, 0x899C, 0xBBBC, 0x888C, 0xB99C, 0xCC46, 0xB88C, 0xC5CE, 0x9B9C, 0xC4C6, 0x998C, 0xC442, 0x9884, 0xDC42, 0x8B8C, 0x8984, 0xBB8C, 0xCCC2, 0xB984, 0xC5C2, 0x9B84, 0xDDC2, 0x845E, 0x9C5E, 0x8CDE, 0x8C4E, 0xBCDE, 0xBC4E, 0x85DE, 0x84CE, 0x9DDE, 0x8446, 0x9CCE, 0x9C46, 0x8DCE, 0x8CC6, 0xBDCE, 0x8C42, 0xBCC6, 0xBC42, 0x85C6, 0x84C2, 0x9DC6, 0x9CC2, 0x8DC2, 0xBDC2, 0xA178, 0xE85E, 0xD1BC, 0xD09C, 0xA778, 0xE9DE, 0xA338, 0xE8CE, 0xA118, 0xE846, 0xD7BC, 0xD39C, 0xD18C, 0xD084, 0xAF38, 0xEBCE, 0xA718, 0xE9C6, 0xA308, 0xE8C2, 0xD78C, 0xD384, 0x90BC, 0xD85E, 0xC8DE, 0xB1BC, 0xC84E, 0xB09C, 0x93BC, 0x919C, 0x908C, 0xD846, 0xCBDE, 0xB7BC, 0xC9CE, 0xB39C, 0xC8C6, 0xB18C, 0xC842, 0xB084, 0x979C, 0x938C, 0x9184, 0xD8C2, 0xCBC6, 0xB78C, 0xC9C2, 0xB384, 0x885E, 0xB85E, 0x98DE, 0x984E, 0x89DE, 0x88CE, 0xB9DE, 0x8846, 0xB8CE, 0xB846, 0x9BDE, 0x99CE, 0x98C6, 0x9842, 0x8BCE, 0x89C6, 0xBBCE, 0x88C2, 0xB9C6, 0xB8C2, 0x9BC6, 0x99C2, 0xA0BC, 0xD0DE, 0xD04E, 0xA3BC, 0xA19C, 0xA08C, 0xD3DE, 0xD1CE, 0xD0C6, 0xD042, 0xAFBC, 0xA79C, 0xA38C, 0xA184, 0xD7CE, 0xD3C6, 0xD1C2, 0x905E, 0xB0DE, 0xB04E, 0x91DE, 0x90CE, 0x9046, 0xB3DE, 0xB1CE, 0xB0C6, 0xB042, 0x97DE, 0x93CE, 0x91C6, 0x90C2, 0xB7CE, 0xB3C6, 0xB1C2, 0xA05E, 0xA1DE, 0xA0CE, 0xA046, 0xA7DE, 0xA3CE, 0xA1C6, 0xA0C2, 0xA9E0, 0xEA78, 0xFA9E, 0xD470, 0xF51C, 0xA860, 0xEA18, 0xFA86, 0xD410, 0xF504, 0xED7C, 0x94F0, 0xE53C, 0xDA78, 0xF69E, 0xCA38, 0xF28E, 0xB470, 0xED1C, 0x9430, 0xE50C, 0xDA18, 0xF686, 0xCA08, 0xF282, 0xB410, 0xED04, 0x9AF8, 0xE6BE, 0xDD7C, 0x8A78, 0xE29E, 0xCD3C, 0xBA78, 0xEE9E, 0xC51C, 0x9A38, 0xE68E, 0xDD1C, 0x8A18, 0xE286, 0xCD0C, 0xBA18, 0xEE86, 0xC504, 0x9A08, 0xE682, 0xDD04, 0x8D7C, 0xCEBE, 0xBD7C, 0x853C, 0xC69E, 0x9D3C, 0xDE9E, 0xC28E, 0x8D1C, 0xCE8E, 0xBD1C, 0x850C, 0xC686, 0x9D0C, 0xDE86, 0xC282, 0x8D04, 0xCE82, 0xBD04, 0x86BE, 0x9EBE, 0x829E, 0x8E9E, 0xBE9E, 0x868E, 0x9E8E, 0x8286, 0x8E86, 0xBE86, 0x8682, 0x9E82, 0xD2F8, 0xF4BE, 0xADF0, 0xEB7C, 0xA4F0, 0xE93C, 0xD678, 0xF59E, 0xD238, 0xF48E, 0xAC70, 0xEB1C, 0xA430, 0xE90C, 0xD618, 0xF586, 0xD208, 0xF482, 0xAC10, 0xEB04, 0xC97C, 0xB2F8, 0xECBE, 0x96F8, 0xE5BE, 0x9278, 0xE49E, 0xD93C, 0xCB3C, 0xB678, 0xC91C, 0xB238, 0xEC8E, 0x9638, 0xE58E, 0x9218, 0xE486, 0xD90C, 0xCB0C, 0xB618, 0xC904, 0xB208, 0xEC82, 0x9608, 0xE582, 0xDB04, 0xC4BE, 0x997C, 0xDCBE, 0x8B7C, 0x893C, 0xBB7C, 0xCC9E, 0xB93C, 0xC59E, 0x9B3C, 0xC48E, 0x991C, 0xDC8E, 0x8B1C, 0x890C, 0xBB1C, 0xCC86, 0xB90C, 0xC586, 0x9B0C, 0xC482, 0x9904, 0xDC82, 0x8B04, 0xCD82, 0xBB04, 0x8CBE, 0xBCBE, 0x85BE, 0x849E, 0x9DBE, 0x9C9E, 0x8D9E, 0x8C8E, 0xBD9E, 0xBC8E, 0x858E, 0x8486, 0x9D8E, 0x9C86, 0x8D86, 0x8C82, 0xBD86, 0xBC82, 0x8582, 0x9D82, 0xD17C, 0xA6F8, 0xE9BE, 0xA278, 0xE89E, 0xD77C, 0xD33C, 0xD11C, 0xAE78, 0xEB9E, 0xA638, 0xE98E, 0xA218, 0xE886, 0xD71C, 0xD30C, 0xD104, 0xAE18, 0xEB86, 0xA608, 0xE982, 0xC8BE, 0xB17C, 0x937C, 0x913C, 0xD89E, 0xCBBE, 0xB77C, 0xC99E, 0xB33C, 0xC88E, 0xB11C, 0x973C, 0x931C, 0x910C, 0xD886, 0xCB8E, 0xB71C, 0xC986, 0xB30C, 0xC882, 0xB104, 0x970C, 0x9304, 0xD982, 0x98BE, 0x89BE, 0x889E, 0xB9BE, 0xB89E, 0x9BBE, 0x999E, 0x988E, 0x8B9E, 0x898E, 0xBB9E, 0x8886, 0xB98E, 0xB886, 0x9B8E, 0x9986, 0x9882, 0x8B86, 0x8982, 0xBB86, 0xB982, 0xD0BE, 0xA37C, 0xA13C, 0xD3BE, 0xD19E, 0xD08E, 0xAF7C, 0xA73C, 0xA31C, 0xA10C, 0xD79E, 0xD38E, 0xD186, 0xD082, 0xAF1C, 0xA70C, 0xA304, 0xB0BE, 0x91BE, 0x909E, 0xB3BE, 0xB19E, 0xB08E, 0x97BE, 0x939E, 0x918E, 0x9086, 0xB79E, 0xB38E, 0xB186, 0xB082, 0x978E, 0x9386, 0x9182, 0xA1BE, 0xA09E, 0xA7BE, 0xA39E, 0xA18E, 0xA086, 0xAF9E, 0xA78E, 0xA386, 0xA182, 0xD4F8, 0xF53E, 0xA8F0, 0xEA3C, 0xD438, 0xF50E, 0xA830, 0xEA0C, 0xD408, 0xF502, 0xDAFC, 0xCA7C, 0xB4F8, 0xED3E, 0x9478, 0xE51E, 0xDA3C, 0xCA1C, 0xB438, 0xED0E, 0x9418, 0xE506, 0xDA0C, 0xCA04, 0xB408, 0xED02, 0xCD7E, 0xBAFC, 0xC53E, 0x9A7C, 0xDD3E, 0x8A3C, 0xCD1E, 0xBA3C, 0xC50E, 0x9A1C, 0xDD0E, 0x8A0C, 0xCD06, 0xBA0C, 0xC502, 0x9A04, 0xDD02, 0x9D7E, 0x8D3E, 0xBD3E, 0x851E, 0x9D1E, 0x8D0E, 0xBD0E, 0x8506, 0x9D06, 0x8D02, 0xBD02, 0xE97E, 0xD6FC, 0xD27C, 0xACF8, 0xEB3E, 0xA478, 0xE91E, 0xD63C, 0xD21C, 0xAC38, 0xEB0E, 0xA418, 0xE906, 0xD60C, 0xD204, 0x92FC, 0xD97E, 0xCB7E, 0xB6FC, 0xC93E, 0xB27C, 0x967C, 0x923C, 0xD91E, 0xCB1E, 0xB63C, 0xC90E, 0xB21C, 0x961C, 0x920C, 0xD906, 0xCB06, 0xB60C, 0xC902, 0xB204, 0x897E, 0xB97E, 0x9B7E, 0x993E, 0x8B3E, 0x891E, 0xBB3E, 0xB91E, 0x9B1E, 0x990E, 0x8B0E, 0x8906, 0xBB0E, 0xB906, 0x9B06, 0x9902, 0xA2FC, 0xD37E, 0xD13E, 0xAEFC];
	
	            var EVEN_TABLE = [0xBE5C, 0xC16E, 0x86DC, 0xC126, 0x864C, 0x9EDC, 0xC726, 0x9E4C, 0xDF26, 0x82CC, 0x8244, 0x8ECC, 0xC322, 0x8E44, 0xBECC, 0xCF22, 0xBE44, 0xC162, 0x86C4, 0xC762, 0x9EC4, 0xDF62, 0x812E, 0x872E, 0x9F2E, 0x836E, 0x8326, 0x8F6E, 0x8F26, 0xBF6E, 0x8166, 0x8122, 0x8766, 0x8722, 0x9F66, 0x9F22, 0x8362, 0x8F62, 0xBF62, 0xA2E0, 0xE8B8, 0xFA2E, 0xD370, 0xF4DC, 0xD130, 0xF44C, 0xAEE0, 0xEBB8, 0xFAEE, 0xA660, 0xE998, 0xFA66, 0xA220, 0xE888, 0xFA22, 0xD730, 0xF5CC, 0xD310, 0xF4C4, 0xAE20, 0xEB88, 0xFAE2, 0x9170, 0xE45C, 0xD8B8, 0xF62E, 0xC9B8, 0xF26E, 0xB370, 0xC898, 0xF226, 0xB130, 0xEC4C, 0x9770, 0xE5DC, 0x9330, 0xE4CC, 0x9110, 0xE444, 0xD888, 0xF622, 0xCB98, 0xF2E6, 0xB730, 0xC988, 0xF262, 0xB310, 0xECC4, 0x9710, 0xE5C4, 0xDB88, 0xF6E2, 0x88B8, 0xE22E, 0xCC5C, 0xB8B8, 0xEE2E, 0xC4DC, 0x99B8, 0xC44C, 0x9898, 0xE626, 0xDC4C, 0x8BB8, 0xE2EE, 0x8998, 0xE266, 0xBBB8, 0x8888, 0xE222, 0xB998, 0xCC44, 0xB888, 0xEE22, 0xC5CC, 0x9B98, 0xC4C4, 0x9988, 0xE662, 0xDCC4, 0x8B88, 0xE2E2, 0xCDC4, 0xBB88, 0xEEE2, 0x845C, 0xC62E, 0x9C5C, 0xDE2E, 0xC26E, 0x8CDC, 0xC226, 0x8C4C, 0xBCDC, 0xCE26, 0xBC4C, 0x85DC, 0x84CC, 0x9DDC, 0x8444, 0x9CCC, 0xC622, 0x9C44, 0xDE22, 0xC2E6, 0x8DCC, 0xC262, 0x8CC4, 0xBDCC, 0xCE62, 0xBCC4, 0x85C4, 0xC6E2, 0x9DC4, 0xDEE2, 0x822E, 0x8E2E, 0x866E, 0x8626, 0x9E6E, 0x9E26, 0x82EE, 0x8266, 0x8EEE, 0x8222, 0x8E66, 0xBEEE, 0x8E22, 0xBE66, 0x86E6, 0x8662, 0x9EE6, 0x9E62, 0x82E2, 0x8EE2, 0xBEE2, 0xA170, 0xE85C, 0xD1B8, 0xF46E, 0xD098, 0xF426, 0xA770, 0xE9DC, 0xA330, 0xE8CC, 0xA110, 0xE844, 0xD7B8, 0xF5EE, 0xD398, 0xF4E6, 0xD188, 0xF462, 0xAF30, 0xEBCC, 0xA710, 0xE9C4, 0xD788, 0xF5E2, 0x90B8, 0xE42E, 0xD85C, 0xC8DC, 0xB1B8, 0xC84C, 0xB098, 0xEC26, 0x93B8, 0xE4EE, 0x9198, 0xE466, 0x9088, 0xE422, 0xD844, 0xCBDC, 0xB7B8, 0xC9CC, 0xB398, 0xC8C4, 0xB188, 0xEC62, 0x9798, 0xE5E6, 0x9388, 0xE4E2, 0xD9C4, 0xCBC4, 0xB788, 0xEDE2, 0x885C, 0xCC2E, 0xB85C, 0xC46E, 0x98DC, 0xC426, 0x984C, 0xDC26, 0x89DC, 0x88CC, 0xB9DC, 0x8844, 0xB8CC, 0xCC22, 0xB844, 0xC5EE, 0x9BDC, 0xC4E6, 0x99CC, 0xC462, 0x98C4, 0xDC62, 0x8BCC, 0x89C4, 0xBBCC, 0xCCE2, 0xB9C4, 0xC5E2, 0x9BC4, 0xDDE2, 0x842E, 0x9C2E, 0x8C6E, 0x8C26, 0xBC6E, 0x84EE, 0x8466, 0x9CEE, 0x8422, 0x9C66, 0x9C22, 0x8DEE, 0x8CE6, 0xBDEE, 0x8C62, 0xBCE6, 0xBC62, 0x85E6, 0x84E2, 0x9DE6, 0x9CE2, 0x8DE2, 0xBDE2, 0xA0B8, 0xE82E, 0xD0DC, 0xD04C, 0xA3B8, 0xE8EE, 0xA198, 0xE866, 0xA088, 0xE822, 0xD3DC, 0xD1CC, 0xD0C4, 0xAFB8, 0xEBEE, 0xA798, 0xE9E6, 0xA388, 0xE8E2, 0xD7CC, 0xD3C4, 0x905C, 0xD82E, 0xC86E, 0xB0DC, 0xC826, 0xB04C, 0x91DC, 0x90CC, 0x9044, 0xD822, 0xC9EE, 0xB3DC, 0xC8E6, 0xB1CC, 0xC862, 0xB0C4, 0x97DC, 0x93CC, 0x91C4, 0xD8E2, 0xCBE6, 0xB7CC, 0xC9E2, 0xB3C4, 0x882E, 0x986E, 0x9826, 0x88EE, 0x8866, 0xB8EE, 0x8822, 0xB866, 0x99EE, 0x98E6, 0x9862, 0x8BEE, 0x89E6, 0xBBEE, 0x88E2, 0xB9E6, 0xB8E2, 0x9BE6, 0x99E2, 0xA05C, 0xD06E, 0xD026, 0xA1DC, 0xA0CC, 0xA044, 0xD1EE, 0xD0E6, 0xD062, 0xA7DC, 0xA3CC, 0xA1C4, 0xD7EE, 0xD3E6, 0xD1E2, 0x902E, 0xB06E, 0x90EE, 0x9066, 0x9022, 0xB1EE, 0xB0E6, 0xB062, 0x93EE, 0x91E6, 0x90E2, 0xB7EE, 0xB3E6, 0xB1E2, 0xA9C0, 0xEA70, 0xFA9C, 0xD460, 0xF518, 0xFD46, 0xA840, 0xEA10, 0xFA84, 0xED78, 0xFB5E, 0x94E0, 0xE538, 0xF94E, 0xDA70, 0xF69C, 0xCA30, 0xF28C, 0xB460, 0xED18, 0xFB46, 0x9420, 0xE508, 0xF942, 0xDA10, 0xF684, 0x9AF0, 0xE6BC, 0xDD78, 0xF75E, 0x8A70, 0xE29C, 0xCD38, 0xF34E, 0xBA70, 0xEE9C, 0xC518, 0xF146, 0x9A30, 0xE68C, 0xDD18, 0xF746, 0x8A10, 0xE284, 0xCD08, 0xF342, 0xBA10, 0xEE84, 0x8D78, 0xE35E, 0xCEBC, 0xBD78, 0xEF5E, 0x8538, 0xE14E, 0xC69C, 0x9D38, 0xE74E, 0xDE9C, 0xC28C, 0x8D18, 0xE346, 0xCE8C, 0xBD18, 0xEF46, 0x8508, 0xE142, 0xC684, 0x9D08, 0xE742, 0xDE84, 0x86BC, 0xC75E, 0x9EBC, 0xDF5E, 0x829C, 0xC34E, 0x8E9C, 0xCF4E, 0xBE9C, 0xC146, 0x868C, 0xC746, 0x9E8C, 0xDF46, 0x8284, 0xC342, 0x8E84, 0xCF42, 0xBE84, 0x835E, 0x8F5E, 0xBF5E, 0x814E, 0x874E, 0x9F4E, 0x8346, 0x8F46, 0xBF46, 0x8142, 0x8742, 0x9F42, 0xD2F0, 0xF4BC, 0xADE0, 0xEB78, 0xFADE, 0xA4E0, 0xE938, 0xFA4E, 0xD670, 0xF59C, 0xD230, 0xF48C, 0xAC60, 0xEB18, 0xFAC6, 0xA420, 0xE908, 0xFA42, 0xD610, 0xF584, 0xC978, 0xF25E, 0xB2F0, 0xECBC, 0x96F0, 0xE5BC, 0x9270, 0xE49C, 0xD938, 0xF64E, 0xCB38, 0xF2CE, 0xB670, 0xC918, 0xF246, 0xB230, 0xEC8C, 0x9630, 0xE58C, 0x9210, 0xE484, 0xD908, 0xF642, 0xCB08, 0xF2C2, 0xB610, 0xED84, 0xC4BC, 0x9978, 0xE65E, 0xDCBC, 0x8B78, 0xE2DE, 0x8938, 0xE24E, 0xBB78, 0xCC9C, 0xB938, 0xEE4E, 0xC59C, 0x9B38, 0xC48C, 0x9918, 0xE646, 0xDC8C, 0x8B18, 0xE2C6, 0x8908, 0xE242, 0xBB18, 0xCC84, 0xB908, 0xEE42, 0xC584, 0x9B08, 0xE6C2, 0xDD84, 0xC25E, 0x8CBC, 0xCE5E, 0xBCBC, 0x85BC, 0x849C, 0x9DBC, 0xC64E, 0x9C9C, 0xDE4E, 0xC2CE, 0x8D9C, 0xC246, 0x8C8C, 0xBD9C, 0xCE46, 0xBC8C, 0x858C, 0x8484, 0x9D8C, 0xC642, 0x9C84, 0xDE42, 0xC2C2, 0x8D84, 0xCEC2, 0xBD84, 0x865E, 0x9E5E, 0x82DE, 0x824E, 0x8EDE, 0x8E4E, 0xBEDE, 0xBE4E, 0x86CE, 0x8646, 0x9ECE, 0x9E46, 0x82C6, 0x8242, 0x8EC6, 0x8E42, 0xBEC6, 0xBE42, 0x86C2, 0x9EC2, 0xD178, 0xF45E, 0xA6F0, 0xE9BC, 0xA270, 0xE89C, 0xD778, 0xF5DE, 0xD338, 0xF4CE, 0xD118, 0xF446, 0xAE70, 0xEB9C, 0xA630, 0xE98C, 0xA210, 0xE884, 0xD718, 0xF5C6, 0xD308, 0xF4C2, 0xAE10, 0xEB84, 0xC8BC, 0xB178, 0xEC5E, 0x9378, 0xE4DE, 0x9138, 0xE44E, 0xD89C, 0xCBBC, 0xB778, 0xC99C, 0xB338, 0xC88C, 0xB118, 0xEC46, 0x9738, 0xE5CE, 0x9318, 0xE4C6, 0x9108, 0xE442, 0xD884, 0xCB8C, 0xB718, 0xC984, 0xB308, 0xECC2, 0x9708, 0xE5C2, 0xDB84, 0xC45E, 0x98BC, 0xDC5E, 0x89BC, 0x889C, 0xB9BC, 0xCC4E, 0xB89C, 0xC5DE, 0x9BBC, 0xC4CE, 0x999C, 0xC446, 0x988C, 0xDC46, 0x8B9C, 0x898C, 0xBB9C, 0x8884, 0xB98C, 0xCC42, 0xB884, 0xC5C6, 0x9B8C, 0xC4C2, 0x9984, 0xDCC2, 0x8B84, 0xCDC2, 0xBB84, 0x8C5E, 0xBC5E, 0x84DE, 0x844E, 0x9CDE, 0x9C4E, 0x8DDE, 0x8CCE, 0xBDDE, 0x8C46, 0xBCCE, 0xBC46, 0x85CE, 0x84C6, 0x9DCE, 0x8442, 0x9CC6, 0x9C42, 0x8DC6, 0x8CC2, 0xBDC6, 0xBCC2, 0x85C2, 0x9DC2, 0xD0BC, 0xA378, 0xE8DE, 0xA138, 0xE84E, 0xD3BC, 0xD19C, 0xD08C, 0xAF78, 0xEBDE, 0xA738, 0xE9CE, 0xA318, 0xE8C6, 0xA108, 0xE842, 0xD79C, 0xD38C, 0xD184, 0xAF18, 0xEBC6, 0xA708, 0xE9C2, 0xC85E, 0xB0BC, 0x91BC, 0x909C, 0xD84E, 0xC9DE, 0xB3BC, 0xC8CE, 0xB19C, 0xC846, 0xB08C, 0x97BC, 0x939C, 0x918C, 0x9084, 0xD842, 0xCBCE, 0xB79C, 0xC9C6, 0xB38C, 0xC8C2, 0xB184, 0x978C, 0x9384, 0xD9C2, 0x985E, 0x88DE, 0x884E, 0xB8DE, 0xB84E, 0x99DE, 0x98CE, 0x9846, 0x8BDE, 0x89CE, 0xBBDE, 0x88C6, 0xB9CE, 0x8842, 0xB8C6, 0xB842, 0x9BCE, 0x99C6, 0x98C2, 0x8BC6, 0x89C2, 0xBBC6, 0xB9C2, 0xD05E, 0xA1BC, 0xA09C, 0xD1DE, 0xD0CE, 0xD046, 0xA7BC, 0xA39C, 0xA18C, 0xA084, 0xD7DE, 0xD3CE, 0xD1C6, 0xD0C2, 0xAF9C, 0xA78C, 0xA384, 0xB05E, 0x90DE, 0x904E, 0xB1DE, 0xB0CE, 0xB046, 0x93DE, 0x91CE, 0x90C6, 0x9042, 0xB7DE, 0xB3CE, 0xB1C6, 0xB0C2, 0x97CE, 0x93C6, 0x91C2, 0xA0DE, 0xA04E, 0xA3DE, 0xA1CE, 0xA0C6, 0xA042, 0xAFDE, 0xA7CE, 0xA3C6, 0xA1C2, 0xD4F0, 0xF53C, 0xA8E0, 0xEA38, 0xFA8E, 0xD430, 0xF50C, 0xA820, 0xEA08, 0xFA82, 0xDAF8, 0xF6BE, 0xCA78, 0xF29E, 0xB4F0, 0xED3C, 0x9470, 0xE51C, 0xDA38, 0xF68E, 0xCA18, 0xF286, 0xB430, 0xED0C, 0x9410, 0xE504, 0xDA08, 0xF682, 0xCD7C, 0xBAF8, 0xEEBE, 0xC53C, 0x9A78, 0xE69E, 0xDD3C, 0x8A38, 0xE28E, 0xCD1C, 0xBA38, 0xEE8E, 0xC50C, 0x9A18, 0xE686, 0xDD0C, 0x8A08, 0xE282, 0xCD04, 0xBA08, 0xEE82, 0xC6BE, 0x9D7C, 0xDEBE, 0xC29E, 0x8D3C, 0xCE9E, 0xBD3C, 0x851C, 0xC68E, 0x9D1C, 0xDE8E, 0xC286, 0x8D0C, 0xCE86, 0xBD0C, 0x8504, 0xC682, 0x9D04, 0xDE82, 0x8EBE, 0xBEBE, 0x869E, 0x9E9E, 0x828E, 0x8E8E, 0xBE8E, 0x8686, 0x9E86, 0x8282, 0x8E82, 0xBE82, 0xE97C, 0xD6F8, 0xF5BE, 0xD278, 0xF49E, 0xACF0, 0xEB3C, 0xA470, 0xE91C, 0xD638, 0xF58E, 0xD218, 0xF486, 0xAC30, 0xEB0C, 0xA410, 0xE904, 0xD608, 0xF582, 0x92F8, 0xE4BE, 0xD97C, 0xCB7C, 0xB6F8, 0xC93C, 0xB278, 0xEC9E, 0x9678, 0xE59E, 0x9238, 0xE48E, 0xD91C, 0xCB1C, 0xB638, 0xC90C, 0xB218, 0xEC86, 0x9618, 0xE586, 0x9208, 0xE482, 0xD904, 0xCB04, 0xB608, 0xED82, 0x897C, 0xCCBE, 0xB97C, 0xC5BE, 0x9B7C, 0xC49E, 0x993C, 0xDC9E, 0x8B3C, 0x891C, 0xBB3C, 0xCC8E, 0xB91C, 0xC58E, 0x9B1C, 0xC486, 0x990C, 0xDC86, 0x8B0C, 0x8904, 0xBB0C, 0xCC82, 0xB904, 0xC582, 0x9B04, 0xDD82, 0x84BE, 0x9CBE, 0x8DBE, 0x8C9E, 0xBDBE, 0xBC9E, 0x859E, 0x848E, 0x9D9E, 0x9C8E, 0x8D8E, 0x8C86, 0xBD8E, 0xBC86, 0x8586, 0x8482, 0x9D86, 0x9C82, 0x8D82, 0xBD82, 0xA2F8, 0xE8BE, 0xD37C, 0xD13C, 0xAEF8, 0xEBBE, 0xA678, 0xE99E, 0xA238, 0xE88E, 0xD73C, 0xD31C, 0xD10C, 0xAE38, 0xEB8E, 0xA618, 0xE986, 0xA208, 0xE882, 0xD70C, 0xD304, 0x917C, 0xD8BE, 0xC9BE, 0xB37C, 0xC89E, 0xB13C, 0x977C, 0x933C, 0x911C, 0xD88E, 0xCB9E, 0xB73C, 0xC98E, 0xB31C, 0xC886, 0xB10C, 0x971C, 0x930C, 0x9104, 0xD882, 0xCB86, 0xB70C, 0xC982, 0xB304, 0x88BE, 0xB8BE, 0x99BE, 0x989E, 0x8BBE, 0x899E, 0xBBBE, 0x888E, 0xB99E, 0xB88E, 0x9B9E, 0x998E, 0x9886, 0x8B8E, 0x8986, 0xBB8E, 0x8882, 0xB986, 0xB882, 0x9B86, 0x9982, 0xA17C, 0xD1BE, 0xD09E, 0xA77C, 0xA33C, 0xA11C, 0xD7BE, 0xD39E, 0xD18E, 0xD086, 0xAF3C, 0xA71C, 0xA30C, 0xA104, 0xD78E, 0xD386, 0xD182, 0x90BE, 0xB1BE, 0xB09E, 0x93BE, 0x919E, 0x908E, 0xB7BE, 0xB39E, 0xB18E, 0xB086, 0x979E, 0x938E, 0x9186, 0x9082, 0xB78E, 0xB386, 0xB182, 0xA0BE, 0xA3BE, 0xA19E, 0xA08E, 0xAFBE, 0xA79E, 0xA38E, 0xA186, 0xA082, 0xA9F0, 0xEA7C, 0xD478, 0xF51E, 0xA870, 0xEA1C, 0xD418, 0xF506, 0xA810, 0xEA04, 0xED7E, 0x94F8, 0xE53E, 0xDA7C, 0xCA3C, 0xB478, 0xED1E, 0x9438, 0xE50E, 0xDA1C, 0xCA0C, 0xB418, 0xED06, 0x9408, 0xE502, 0xDA04, 0x9AFC, 0xDD7E, 0x8A7C, 0xCD3E, 0xBA7C, 0xC51E, 0x9A3C, 0xDD1E, 0x8A1C, 0xCD0E, 0xBA1C, 0xC506, 0x9A0C, 0xDD06, 0x8A04, 0xCD02, 0xBA04, 0x8D7E, 0xBD7E, 0x853E, 0x9D3E, 0x8D1E, 0xBD1E, 0x850E, 0x9D0E, 0x8D06, 0xBD06, 0x8502, 0x9D02, 0xD2FC, 0xADF8, 0xEB7E, 0xA4F8, 0xE93E, 0xD67C, 0xD23C, 0xAC78, 0xEB1E, 0xA438, 0xE90E, 0xD61C, 0xD20C, 0xAC18, 0xEB06, 0xA408, 0xE902, 0xC97E, 0xB2FC, 0x96FC, 0x927C, 0xD93E, 0xCB3E, 0xB67C, 0xC91E, 0xB23C, 0x963C, 0x921C, 0xD90E, 0xCB0E, 0xB61C, 0xC906, 0xB20C, 0x960C, 0x9204, 0xD902, 0x997E, 0x8B7E, 0x893E, 0xBB7E, 0xB93E, 0xE4A0, 0xF928, 0xD940, 0xF650, 0xFD94, 0xCB40, 0xF2D0, 0xEDA0, 0xFB68, 0x8940, 0xE250, 0xCCA0, 0xF328, 0xB940, 0xEE50, 0xFB94, 0xC5A0, 0xF168, 0x9B40, 0xE6D0, 0xF9B4, 0xDDA0, 0xF768, 0xFDDA, 0x84A0, 0xE128, 0xC650, 0xF194, 0x9CA0, 0xE728, 0xF9CA, 0xDE50, 0xF794, 0xC2D0, 0x8DA0, 0xE368, 0xCED0, 0xF3B4, 0xBDA0, 0xEF68, 0xFBDA, 0x8250, 0xC328, 0x8E50, 0xE394, 0xCF28, 0xF3CA, 0xBE50, 0xEF94, 0xC168, 0x86D0, 0xE1B4, 0xC768, 0xF1DA, 0x9ED0, 0xE7B4, 0xDF68, 0xF7DA, 0x8128, 0xC194, 0x8728, 0xE1CA, 0xC794, 0x9F28, 0xE7CA, 0x8368, 0xC3B4, 0x8F68, 0xE3DA, 0xCFB4, 0xBF68, 0xEFDA, 0xE8A0, 0xFA28, 0xD340, 0xF4D0, 0xFD34, 0xEBA0, 0xFAE8, 0x9140, 0xE450, 0xF914, 0xD8A0, 0xF628, 0xFD8A, 0xC9A0, 0xF268, 0xB340, 0xECD0, 0xFB34, 0x9740, 0xE5D0, 0xF974, 0xDBA0, 0xF6E8, 0xFDBA, 0x88A0, 0xE228, 0xCC50, 0xF314, 0xB8A0, 0xEE28, 0xFB8A, 0xC4D0, 0xF134, 0x99A0, 0xE668, 0xF99A, 0xDCD0, 0xF734, 0x8BA0, 0xE2E8, 0xCDD0, 0xF374, 0xBBA0, 0xEEE8, 0xFBBA, 0x8450, 0xE114, 0xC628, 0xF18A, 0x9C50, 0xE714, 0xDE28, 0xF78A, 0xC268, 0x8CD0, 0xE334, 0xCE68, 0xF39A, 0xBCD0, 0xEF34, 0x85D0, 0xE174, 0xC6E8, 0xF1BA, 0x9DD0, 0xE774, 0xDEE8, 0xF7BA, 0x8228, 0xC314, 0x8E28, 0xE38A, 0xCF14, 0xC134, 0x8668, 0xE19A, 0xC734, 0x9E68, 0xE79A, 0xDF34, 0x82E8, 0xC374, 0x8EE8, 0xE3BA, 0xCF74, 0xBEE8, 0xEFBA, 0x8114, 0xC18A, 0x8714, 0xC78A, 0x8334, 0xC39A, 0x8F34, 0xCF9A, 0x8174, 0xC1BA, 0x8774, 0xC7BA, 0x9F74, 0xDFBA, 0xA140, 0xE850, 0xFA14, 0xD1A0, 0xF468, 0xFD1A, 0xA740, 0xE9D0, 0xFA74, 0xD7A0, 0xF5E8, 0xFD7A, 0x90A0, 0xE428, 0xF90A, 0xD850, 0xF614, 0xC8D0, 0xF234, 0xB1A0, 0xEC68, 0xFB1A, 0x93A0, 0xE4E8, 0xF93A, 0xD9D0, 0xF674, 0xCBD0, 0xF2F4, 0xB7A0, 0xEDE8, 0xFB7A, 0x8850, 0xE214, 0xCC28, 0xF30A, 0xB850, 0xEE14, 0xC468, 0xF11A, 0x98D0, 0xE634, 0xDC68, 0xF71A, 0x89D0, 0xE274, 0xCCE8, 0xF33A, 0xB9D0, 0xEE74, 0xC5E8, 0xF17A, 0x9BD0, 0xE6F4, 0xDDE8, 0xF77A, 0x8428, 0xE10A, 0xC614, 0x9C28, 0xE70A, 0xC234, 0x8C68, 0xE31A, 0xCE34, 0xBC68, 0xEF1A, 0x84E8, 0xE13A, 0xC674, 0x9CE8, 0xE73A, 0xDE74, 0xC2F4, 0x8DE8, 0xE37A, 0xCEF4, 0xBDE8, 0xEF7A, 0x8214, 0xC30A, 0x8E14, 0xC11A, 0x8634, 0xC71A, 0x9E34, 0x8274, 0xC33A, 0x8E74, 0xCF3A, 0xBE74, 0xC17A, 0x86F4, 0xC77A, 0x9EF4, 0xDF7A, 0x810A, 0x870A, 0x831A, 0x8F1A, 0x813A, 0x873A, 0x9F3A, 0x837A, 0x8F7A, 0xBF7A, 0xA0A0, 0xE828, 0xFA0A, 0xD0D0, 0xF434, 0xA3A0, 0xE8E8, 0xFA3A, 0xD3D0, 0xF4F4, 0xAFA0, 0xEBE8, 0xFAFA, 0x9050, 0xE414, 0xD828, 0xF60A, 0xC868, 0xF21A, 0xB0D0, 0xEC34, 0x91D0, 0xE474, 0xD8E8, 0xF63A, 0xC9E8, 0xF27A, 0xB3D0, 0xECF4, 0x97D0, 0xE5F4, 0xDBE8, 0xF6FA, 0x8828, 0xE20A, 0xCC14, 0xC434, 0x9868, 0xE61A, 0xDC34, 0x88E8, 0xE23A, 0xCC74, 0xB8E8, 0xEE3A, 0xC4F4, 0x99E8, 0xE67A, 0xDCF4, 0x8BE8, 0xE2FA, 0xCDF4, 0xBBE8, 0xEEFA, 0x8414, 0xC60A, 0xC21A, 0x8C34, 0xCE1A, 0x8474, 0xC63A, 0x9C74, 0xDE3A, 0xC27A, 0x8CF4, 0xCE7A, 0xBCF4, 0x85F4, 0xC6FA, 0x9DF4, 0xDEFA, 0x820A, 0x861A, 0x823A, 0x8E3A, 0x867A, 0x9E7A, 0x82FA, 0x8EFA, 0xBEFA, 0xA050, 0xE814, 0xD068, 0xF41A, 0xA1D0, 0xE874, 0xD1E8, 0xF47A, 0xA7D0, 0xE9F4, 0xD7E8, 0xF5FA, 0x9028, 0xE40A, 0xC834, 0xB068, 0xEC1A, 0x90E8, 0xE43A, 0xD874, 0xC8F4, 0xB1E8, 0xEC7A, 0x93E8, 0xE4FA, 0xD9F4, 0xCBF4, 0xB7E8, 0xEDFA, 0x8814, 0xC41A, 0x9834, 0x8874, 0xCC3A, 0xB874, 0xC47A, 0x98F4, 0xDC7A, 0x89F4, 0xCCFA, 0xB9F4, 0xC5FA, 0x9BF4, 0xDDFA, 0x840A, 0x8C1A, 0x843A, 0x9C3A, 0x8C7A, 0xBC7A, 0x84FA, 0x9CFA, 0x8DFA, 0xBDFA, 0xEA40, 0xFA90, 0xED60, 0xFB58, 0xE520, 0xF948, 0xDA40, 0xF690, 0xFDA4, 0x9AC0, 0xE6B0, 0xF9AC, 0xDD60, 0xF758, 0xFDD6, 0x8A40, 0xE290, 0xCD20, 0xF348, 0xBA40, 0xEE90, 0xFBA4, 0x8D60, 0xE358, 0xCEB0, 0xF3AC, 0xBD60, 0xEF58, 0xFBD6, 0x8520, 0xE148, 0xC690, 0xF1A4, 0x9D20, 0xE748, 0xF9D2, 0xDE90, 0xF7A4, 0x86B0, 0xE1AC, 0xC758, 0xF1D6, 0x9EB0, 0xE7AC, 0xDF58, 0xF7D6, 0x8290, 0xC348, 0x8E90, 0xE3A4, 0xCF48, 0xF3D2, 0xBE90, 0xEFA4, 0x8358, 0xC3AC, 0x8F58, 0xE3D6, 0xCFAC, 0xBF58, 0xEFD6, 0x8148, 0xC1A4, 0x8748, 0xE1D2, 0xC7A4, 0x9F48, 0xE7D2, 0xDFA4, 0xD2C0, 0xF4B0, 0xFD2C, 0xEB60, 0xFAD8, 0xE920, 0xFA48, 0xD640, 0xF590, 0xFD64, 0xC960, 0xF258, 0xB2C0, 0xECB0, 0xFB2C, 0x96C0, 0xE5B0, 0xF96C, 0x9240, 0xE490, 0xF924, 0xD920, 0xF648, 0xFD92, 0xCB20, 0xF2C8, 0xB640, 0xED90, 0xFB64, 0xC4B0, 0xF12C, 0x9960, 0xE658, 0xF996, 0xDCB0, 0xF72C, 0x8B60, 0xE2D8, 0x8920, 0xE248, 0xBB60, 0xCC90, 0xF324, 0xB920, 0xEE48, 0xFB92, 0xC590, 0xF164, 0x9B20, 0xE6C8, 0xF9B2, 0xDD90, 0xF764, 0xC258, 0x8CB0, 0xE32C, 0xCE58, 0xF396, 0xBCB0, 0xEF2C, 0x85B0, 0xE16C, 0x8490, 0xE124, 0x9DB0, 0xC648, 0xF192, 0x9C90, 0xE724, 0xDE48, 0xF792, 0xC2C8, 0x8D90, 0xE364, 0xCEC8, 0xF3B2, 0xBD90, 0xEF64, 0xC12C, 0x8658, 0xE196, 0xC72C, 0x9E58, 0xE796, 0xDF2C, 0x82D8, 0x8248, 0x8ED8, 0xC324, 0x8E48, 0xE392, 0xBED8, 0xCF24, 0xBE48, 0xEF92, 0xC164, 0x86C8, 0xE1B2, 0xC764, 0x9EC8, 0xE7B2, 0xDF64, 0x832C, 0xC396, 0x8F2C, 0xCF96, 0x816C, 0x8124, 0x876C, 0xC192, 0x8724, 0x9F6C, 0xC792, 0x9F24, 0x8364, 0xC3B2, 0x8F64, 0xCFB2, 0xBF64, 0xD160, 0xF458, 0xFD16, 0xA6C0, 0xE9B0, 0xFA6C, 0xA240, 0xE890, 0xFA24, 0xD760, 0xF5D8, 0xFD76, 0xD320, 0xF4C8, 0xFD32, 0xAE40, 0xEB90, 0xFAE4, 0xC8B0, 0xF22C, 0xB160, 0xEC58, 0xFB16, 0x9360, 0xE4D8, 0xF936, 0x9120, 0xE448, 0xF912, 0xD890, 0xF624, 0xCBB0, 0xF2EC, 0xB760, 0xC990, 0xF264, 0xB320, 0xECC8, 0xFB32, 0x9720, 0xE5C8, 0xF972, 0xDB90, 0xF6E4, 0xC458, 0xF116, 0x98B0, 0xE62C, 0xDC58, 0xF716, 0x89B0, 0xE26C, 0x8890, 0xE224, 0xB9B0, 0xCC48, 0xF312, 0xB890, 0xEE24, 0xC5D8, 0xF176, 0x9BB0, 0xC4C8, 0xF132, 0x9990, 0xE664, 0xDCC8, 0xF732, 0x8B90, 0xE2E4, 0xCDC8, 0xF372, 0xBB90, 0xEEE4, 0xC22C, 0x8C58, 0xE316, 0xCE2C, 0xBC58, 0xEF16, 0x84D8, 0xE136, 0x8448, 0xE112, 0x9CD8, 0xC624, 0x9C48, 0xE712, 0xDE24, 0xC2EC, 0x8DD8, 0xC264, 0x8CC8, 0xE332, 0xBDD8, 0xCE64, 0xBCC8, 0xEF32, 0x85C8, 0xE172, 0xC6E4, 0x9DC8, 0xE772, 0xDEE4, 0xC116, 0x862C, 0xC716, 0x9E2C, 0x826C, 0x8224, 0x8E6C, 0xC312, 0x8E24, 0xBE6C, 0xCF12, 0xC176, 0x86EC, 0xC132, 0x8664, 0x9EEC, 0xC732, 0x9E64, 0xDF32, 0x82E4, 0xC372, 0x8EE4, 0xCF72, 0xBEE4, 0x8316, 0x8F16, 0x8136, 0x8112, 0x8736, 0x8712, 0x9F36, 0x8376, 0x8332, 0x8F76, 0x8F32, 0xBF76, 0x8172, 0x8772, 0x9F72, 0xD0B0, 0xF42C, 0xA360, 0xE8D8, 0xFA36, 0xA120, 0xE848, 0xFA12, 0xD3B0, 0xF4EC, 0xD190, 0xF464, 0xAF60, 0xEBD8, 0xFAF6, 0xA720, 0xE9C8, 0xFA72, 0xD790, 0xF5E4, 0xC858, 0xF216, 0xB0B0, 0xEC2C, 0x91B0, 0xE46C, 0x9090, 0xE424, 0xD848, 0xF612, 0xC9D8, 0xF276, 0xB3B0, 0xC8C8, 0xF232, 0xB190, 0xEC64, 0x97B0, 0xE5EC, 0x9390, 0xE4E4, 0xD9C8, 0xF672, 0xCBC8, 0xF2F2, 0xB790, 0xEDE4, 0xC42C, 0x9858, 0xE616, 0xDC2C, 0x88D8, 0xE236, 0x8848, 0xE212, 0xB8D8, 0xCC24, 0xB848, 0xEE12, 0xC4EC, 0x99D8, 0xC464, 0x98C8, 0xE632, 0xDC64, 0x8BD8, 0xE2F6, 0x89C8, 0xE272, 0xBBD8, 0xCCE4, 0xB9C8, 0xEE72, 0xC5E4, 0x9BC8, 0xE6F2, 0xDDE4, 0xC216, 0x8C2C, 0xCE16, 0x846C, 0x8424, 0x9C6C, 0xC612, 0x9C24, 0xC276, 0x8CEC, 0xC232, 0x8C64, 0xBCEC, 0xCE32, 0xBC64, 0x85EC, 0x84E4, 0x9DEC, 0xC672, 0x9CE4, 0xDE72, 0xC2F2, 0x8DE4, 0xCEF2, 0xBDE4, 0x8616, 0x8236, 0x8212, 0x8E36, 0x8E12, 0x8676, 0x8632, 0x9E76, 0x9E32, 0x82F6, 0x8272, 0x8EF6, 0x8E72, 0xBEF6, 0xBE72, 0x86F2, 0x9EF2, 0xD058, 0xF416, 0xA1B0, 0xE86C, 0xA090, 0xE824, 0xD1D8, 0xF476, 0xD0C8, 0xF432, 0xA7B0, 0xE9EC, 0xA390, 0xE8E4, 0xD7D8, 0xF5F6, 0xD3C8, 0xF4F2, 0xAF90, 0xEBE4, 0xC82C, 0xB058, 0xEC16, 0x90D8, 0xE436, 0x9048, 0xE412, 0xD824, 0xC8EC, 0xB1D8, 0xC864, 0xB0C8, 0xEC32, 0x93D8, 0xE4F6, 0x91C8, 0xE472, 0xD8E4, 0xCBEC, 0xB7D8, 0xC9E4, 0xB3C8, 0xECF2, 0x97C8, 0xE5F2, 0xDBE4, 0xC416, 0x982C, 0x886C, 0x8824, 0xB86C, 0xCC12, 0xC476, 0x98EC, 0xC432, 0x9864, 0xDC32, 0x89EC, 0x88E4, 0xB9EC, 0xCC72, 0xB8E4, 0xC5F6, 0x9BEC, 0xC4F2, 0x99E4, 0xDCF2, 0x8BE4, 0xCDF2, 0xBBE4, 0x8C16, 0x8436, 0x8412, 0x9C36, 0x8C76, 0x8C32, 0xBC76, 0x84F6, 0x8472, 0x9CF6, 0x9C72, 0x8DF6, 0x8CF2, 0xBDF6, 0xBCF2, 0x85F2, 0x9DF2, 0xD02C, 0xA0D8, 0xE836, 0xA048, 0xE812, 0xD0EC, 0xD064, 0xA3D8, 0xE8F6, 0xA1C8, 0xE872, 0xD3EC, 0xD1E4, 0xAFD8, 0xEBF6, 0xA7C8, 0xE9F2, 0xC816, 0x906C, 0x9024, 0xC876, 0xB0EC, 0xC832, 0xB064, 0x91EC, 0x90E4, 0xD872, 0xC9F6, 0xB3EC, 0xC8F2, 0xB1E4, 0x97EC, 0x93E4, 0xD9F2, 0x8836, 0x8812, 0x9876, 0x9832, 0x88F6, 0x8872, 0xB8F6, 0xB872, 0x99F6, 0x98F2, 0x8BF6, 0x89F2, 0xBBF6, 0xB9F2, 0xD4C0, 0xF530, 0xFD4C, 0xEA20, 0xFA88, 0xDAE0, 0xF6B8, 0xFDAE, 0xCA60, 0xF298, 0xB4C0, 0xED30, 0xFB4C, 0x9440, 0xE510, 0xF944, 0xDA20, 0xF688, 0xFDA2, 0xCD70, 0xF35C, 0xBAE0, 0xEEB8, 0xFBAE, 0xC530, 0xF14C, 0x9A60, 0xE698, 0xF9A6, 0xDD30, 0xF74C, 0x8A20, 0xE288, 0xCD10, 0xF344, 0xBA20, 0xEE88, 0xFBA2, 0xC6B8, 0xF1AE, 0x9D70, 0xE75C, 0xDEB8, 0xF7AE, 0xC298, 0x8D30, 0xE34C, 0xCE98, 0xF3A6, 0xBD30, 0xEF4C, 0x8510, 0xE144, 0xC688, 0xF1A2, 0x9D10, 0xE744, 0xDE88, 0xF7A2, 0xC35C, 0x8EB8, 0xE3AE, 0xCF5C, 0xBEB8, 0xEFAE, 0xC14C, 0x8698, 0xE1A6, 0xC74C, 0x9E98, 0xE7A6, 0xDF4C, 0x8288, 0xC344, 0x8E88, 0xE3A2, 0xCF44, 0xBE88, 0xEFA2, 0xC1AE, 0x875C, 0xC7AE, 0x9F5C, 0xDFAE, 0x834C, 0xC3A6, 0x8F4C, 0xCFA6, 0xBF4C, 0x8144, 0xC1A2, 0x8744, 0xC7A2, 0x9F44, 0xDFA2, 0xE970, 0xFA5C, 0xD6E0, 0xF5B8, 0xFD6E, 0xD260, 0xF498, 0xFD26, 0xACC0, 0xEB30, 0xFACC, 0xA440, 0xE910, 0xFA44, 0xD620, 0xF588, 0xFD62, 0x92E0, 0xE4B8, 0xF92E, 0xD970, 0xF65C, 0xCB70, 0xF2DC, 0xB6E0, 0xC930, 0xF24C, 0xB260, 0xEC98, 0xFB26, 0x9660, 0xE598, 0xF966, 0x9220, 0xE488, 0xF922, 0xD910, 0xF644, 0xCB10, 0xF2C4, 0xB620, 0xED88, 0xFB62, 0x8970, 0xE25C, 0xCCB8, 0xF32E, 0xB970, 0xEE5C, 0xC5B8, 0xF16E, 0x9B70, 0xC498, 0xF126, 0x9930, 0xE64C, 0xDC98, 0xF726, 0x8B30, 0xE2CC, 0x8910, 0xE244, 0xBB30, 0xCC88, 0xF322, 0xB910, 0xEE44, 0xC588, 0xF162, 0x9B10, 0xE6C4, 0xDD88, 0xF762, 0x84B8, 0xE12E, 0xC65C, 0x9CB8, 0xE72E, 0xDE5C, 0xC2DC, 0x8DB8, 0xC24C, 0x8C98, 0xE326, 0xBDB8, 0xCE4C, 0xBC98, 0xEF26, 0x8598, 0xE166, 0x8488, 0xE122, 0x9D98, 0xC644, 0x9C88, 0xE722, 0xDE44, 0xC2C4, 0x8D88, 0xE362, 0xCEC4, 0xBD88, 0xEF62, 0x825C, 0xC32E, 0x8E5C, 0xCF2E];
	
	            var WEIGHT = [[[20, 16, 38]], [[1, 9, 31], [9, 31, 26], [31, 26, 2], [26, 2, 12]], [[2, 12, 17], [12, 17, 23], [17, 23, 37], [23, 37, 18]], [[37, 18, 22], [18, 22, 6], [22, 6, 27], [6, 27, 44]], [[27, 44, 15], [44, 15, 43], [15, 43, 39], [43, 39, 11]], [[39, 11, 13], [11, 13, 5], [13, 5, 41], [5, 41, 33]], [[41, 33, 36], [33, 36, 8], [36, 8, 4], [8, 4, 32]], [[4, 32, 3], [32, 3, 19], [3, 19, 40], [19, 40, 25]], [[40, 25, 29], [25, 29, 10], [29, 10, 24], [10, 24, 30]], [[20, 16, 38], [0, 0, 0], [0, 0, 0], [0, 0, 0]]];
	
	            var PARITY = [[1, 0, 0, 1], [0, 1, 0, 1], [1, 1, 0, 0], [0, 0, 1, 1], [1, 0, 1, 0], [0, 1, 1, 0], [1, 1, 1, 1], [0, 0, 0, 0]];
	
	            var ALPHA_TABLE = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-', '.', ' ', '$', '/', '+', '%', '\u2000', '\u2001', _constants2.default.FNC1, _constants2.default.FNC2, _constants2.default.FNC3, '\u2005'];
	
	            var ASCII_TABLE = ['\u2000 ', '\u2000A', '\u2000B', '\u2000C', '\u2000D', '\u2000E', '\u2000F', '\u2000G', '\u2000H', '\u2000I', '\u2000J', '\u2000K', '\u2000L', '\u2000M', '\u2000N', '\u2000O', '\u2000P', '\u2000Q', '\u2000R', '\u2000S', '\u2000T', '\u2000U', '\u2000V', '\u2000W', '\u2000X', '\u2000Y', '\u2000Z', '\u20001', '\u20002', '\u20003', '\u20004', '\u20005', ' ', '\u20006', '\u20007', '\u20008', '$', '%', '\u20009', '\u20000', '\u2000-', '\u2000.', '\u2000$', '+', '\u2000/', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '\u2000+', '\u20011', '\u20012', '\u20013', '\u20014', '\u20015', '\u20016', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '\u20017', '\u20018', '\u20019', '\u20010', '\u2001-', '\u2001.', '\u2001A', '\u2001B', '\u2001C', '\u2001D', '\u2001E', '\u2001F', '\u2001G', '\u2001H', '\u2001I', '\u2001J', '\u2001K', '\u2001L', '\u2001M', '\u2001N', '\u2001O', '\u2001P', '\u2001Q', '\u2001R', '\u2001S', '\u2001T', '\u2001U', '\u2001V', '\u2001W', '\u2001X', '\u2001Y', '\u2001Z', '\u2001$', '\u2001/', '\u2001+', '\u2001%', '\u2001 '];
	
	            var CODE_NS = 48;
	            var START_PATTERN = '10';
	            var STOP_PATTERN = '1111';
	
	            function isNumericOnly(text) {
	                var reg = /^\d{5,81}$/;
	                return reg.test(text);
	            }
	
	            function getCharValue(char) {
	                var v = ALPHA_TABLE.indexOf(char);
	                if (v > -1) {
	                    return [v];
	                }
	
	                var index = char.charCodeAt(0);
	                var str = ASCII_TABLE[index];
	                return (0, _utils.str2Array)(str).map(function (c) {
	                    return ALPHA_TABLE.indexOf(c);
	                });
	            }
	
	            function getWeight(row, col) {
	                var v = WEIGHT[row][col];
	                return { x: v[0], y: v[1], z: v[2] };
	            }
	
	            function getParityPattern(value, row, col, rowCount) {
	                var isLastRow = row === rowCount - 1;
	                var isOdd = void 0,
	                    hex = void 0;
	                if (isLastRow) {
	                    isOdd = false;
	                } else {
	                    isOdd = PARITY[row][col];
	                }
	
	                if (isOdd) {
	                    hex = ODD_TABLE[value];
	                } else {
	                    hex = EVEN_TABLE[value];
	                }
	
	                return hex.toString(2);
	            }
	
	            function getGroupInfo(groupNo, groupCount) {
	                var i = 2,
	                    value = 1;
	                while (i < groupCount) {
	                    value += i;
	                    i++;
	                }
	
	                return value + groupNo;
	            }
	
	            function getDataLength(text) {
	                return (0, _utils.str2Array)(text).reduce(function (v, c) {
	                    if (ALPHA_TABLE.indexOf(c) > -1) {
	                        v++;
	                    } else {
	                        v += 2;
	                    }
	                    return v;
	                }, 0);
	            }
	
	            function getTextGroup(text) {
	                var i = 0,
	                    j = 1,
	                    len = text.length;
	                var result = [];
	                while (j < len) {
	                    var str = text.substring(i, j);
	                    if (getDataLength(str) > 48) {
	                        result.push(text.substring(i, j - 1));
	                        i = j - 1;
	                    }
	                    j++;
	                }
	                result.push(text.substring(i, j));
	
	                return result;
	            }
	
	            exports.default = {
	                defaultConfig: defaultConfig,
	                isNumericOnly: isNumericOnly,
	                getCharValue: getCharValue,
	                CODE_NS: CODE_NS,
	                getWeight: getWeight,
	                getParityPattern: getParityPattern,
	                START_PATTERN: START_PATTERN,
	                STOP_PATTERN: STOP_PATTERN,
	                getGroupInfo: getGroupInfo,
	                getTextGroup: getTextGroup
	            };
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _OneDimensionalBarcode = __webpack_require__(4);
	
	            var _OneDimensionalBarcode2 = _interopRequireDefault(_OneDimensionalBarcode);
	
	            var _index = __webpack_require__(2);
	
	            var _index2 = _interopRequireDefault(_index);
	
	            var _utils = __webpack_require__(0);
	
	            var _helper = __webpack_require__(36);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            var _exceptions = __webpack_require__(1);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	            function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	            var Code93 = function (_OneDimensionalBarcod) {
	                _inherits(Code93, _OneDimensionalBarcod);
	
	                function Code93(originConfig) {
	                    _classCallCheck(this, Code93);
	
	                    var _this = _possibleConstructorReturn(this, (Code93.__proto__ || Object.getPrototypeOf(Code93)).call(this, originConfig, _helper2.default.defaultConfig));
	
	                    var _this$config = _this.config,
	                        text = _this$config.text,
	                        checkDigit = _this$config.checkDigit,
	                        fullASCII = _this$config.fullASCII;
	
	
	                    var _text = fullASCII ? _helper2.default.getFullASCIIChar(text) : text;
	
	                    if (checkDigit) {
	                        var checkDigit_c = _this.checksum(_text);
	                        var checkDigit_k = _this.checksum(_text + checkDigit_c);
	
	                        _this.text = _helper2.default.START_STOP_CHARACTERS + _text + checkDigit_c + checkDigit_k + _helper2.default.START_STOP_CHARACTERS;
	                    } else {
	                        _this.text = _helper2.default.START_STOP_CHARACTERS + _text + _helper2.default.START_STOP_CHARACTERS;
	                    }
	                    _this.label = text;
	
	                    var data = _this.calculateData();
	                    _this.adjustDesiredSize(data);
	                    _this.convertToShape(data);
	                    return _this;
	                }
	
	                _createClass(Code93, [{
	                    key: 'validate',
	                    value: function validate() {
	                        var _config = this.config,
	                            text = _config.text,
	                            fullASCII = _config.fullASCII;
	                       
	
	                        var reg = /^[0-9A-Z\-\.\\$\/\+\%]+$/;
	                        if (!fullASCII && !reg.test(text)) {
	                            throw new _exceptions.InvalidTextException(text);
	                        }
	                    }
	                }, {
	                    key: 'encode',
	                    value: function encode(str) {
	                        var data = '';
	
	                        (0, _utils.str2Array)(str).forEach(function (n, index) {
	                            if ((0, _utils.isEven)(index)) {
	                                data += (0, _utils.strRepeat)('1', +n);
	                            } else {
	                                data += (0, _utils.strRepeat)('0', +n);
	                            }
	                        });
	
	                        return data;
	                    }
	                }, {
	                    key: 'calculateData',
	                    value: function calculateData() {
	                        var _this2 = this;
	
	                        var text = this.text;
	
	                        var data = '';
	
	                        (0, _utils.sliceString)(text, 1, function (char) {
	                            data += _this2.encode(_helper2.default.getCode93Code(char));
	                        });
	
	                        data += _helper2.default.TERMINATION;
	                        return data;
	                    }
	                }, {
	                    key: 'checksum',
	                    value: function checksum(str) {
	                        var weight = 1;
	                        var weightSum = (0, _utils.str2Array)(str).reduceRight(function (sum, char) {
	                            var value = _helper2.default.getCode93Value(char);
	                            if (weight > 20) {
	                                weight = 1;
	                            }
	                            sum += weight * value;
	                            weight++;
	                            return sum;
	                        }, 0);
	
	                        return _helper2.default.getCharByValue(weightSum % 47);
	                    }
	                }]);
	
	                return Code93;
	            }(_OneDimensionalBarcode2.default);
	
	            exports.default = Code93;
	
	
	            _index2.default.registerEncoder('Code93', Code93);
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _exceptions = __webpack_require__(1);
	
	            var _utils = __webpack_require__(0);
	
	            var TABLE_CH = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-', '.', ' ', '$', '/', '+', '%', '[',
	                ']', '{', '}', '*'];
	
	            var TABLE_CODE = ['131112', '111213', '111312', '111411', '121113', '121212', '121311', '111114', '131211', '141111', '211113', '211212', '211311', '221112', '221211', '231111', '112113', '112212', '112311', '122112', '132111', '111123', '111222', '111321', '121122', '131121', '212112', '212211', '211122', '211221', '221121', '222111', '112122', '112221', '122121', '123111', '121131', '311112', '311211', '321111', '112131', '113121', '211131', '121221',
	                '312111', '311121', '122211', '111141'];
	
	            var TABLE_FULL_ASCII = [']U', '[A', '[B', '[C', '[D', '[E', '[F', '[G', '[H', '[I', '[J', '[K', '[L', '[M', '[N', '[O', '[P', '[Q', '[R', '[S', '[T', '[U', '[V', '[W', '[X', '[Y', '[Z', ']A', ']B', ']C', ']D', ']E', ' ', '{A', '{B', '{C', '{D', '{E', '{F', '{G', '{H', '{I', '{J', '{K', '{L', '{M', '{N', '{O', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '{Z', ']F', ']G', ']H', ']I', ']J', ']V', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ']K', ']L', ']M', ']N', ']O', ']W', '}A', '}B', '}C', '}D', '}E', '}F', '}G', '}H', '}I', '}J', '}K', '}L', '}M', '}N', '}O', '}P', '}Q', '}R', '}S', '}T', '}U', '}V', '}W', '}X', '}Y', '}Z', ']P', ']Q', ']R', ']S', ']T'];
	
	            function getCode93Code(char) {
	                var index = TABLE_CH.indexOf(char);
	                if (index === -1) {
	                    throw new _exceptions.InvalidCharException(char);
	                }
	                return TABLE_CODE[index];
	            }
	
	            function getCode93Value(char) {
	                var index = TABLE_CH.indexOf(char);
	                if (index === -1) {
	                    throw new _exceptions.InvalidCharException(char);
	                }
	                return index;
	            }
	
	            function getCharByValue(index) {
	                return TABLE_CH[index];
	            }
	
	            var defaultConfig = {
	                height: 60,
	                showLabel: true,
	                checkDigit: false,
	                fullASCII: false,
	                quietZone: {
	                    top: 0,
	                    right: 10,
	                    bottom: 0,
	                    left: 10
	                },
	                labelPosition: 'bottom'
	            };
	
	            var START_STOP_CHARACTERS = '*';
	            var TERMINATION = '1';
	
	            function getFullASCIIChar(text) {
	                var str = '';
	
	                (0, _utils.sliceString)(text, 1, function (char) {
	                    var c = TABLE_FULL_ASCII[char.charCodeAt(0)];
	                    if (c) {
	                        str += c;
	                    } else {
	                        throw new _exceptions.InvalidTextException(text);
	                    }
	                });
	                return str;
	            }
	
	            exports.default = {
	                getCode93Code: getCode93Code, START_STOP_CHARACTERS: START_STOP_CHARACTERS, defaultConfig: defaultConfig, TERMINATION: TERMINATION, getCode93Value: getCode93Value, getCharByValue: getCharByValue, getFullASCIIChar: getFullASCIIChar
	            };
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _TwoDimensionalBarcode = __webpack_require__(7);
	
	            var _TwoDimensionalBarcode2 = _interopRequireDefault(_TwoDimensionalBarcode);
	
	            var _index = __webpack_require__(2);
	
	            var _index2 = _interopRequireDefault(_index);
	
	            var _helper = __webpack_require__(38);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            var _ECC = __webpack_require__(39);
	
	            var _ECC2 = _interopRequireDefault(_ECC);
	
	            var _ECC000_ = __webpack_require__(42);
	
	            var _ECC000_2 = _interopRequireDefault(_ECC000_);
	
	            var _exceptions = __webpack_require__(1);
	
	            var _utils = __webpack_require__(0);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	            function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	            var DataMatrix = function (_TwoDimensionalBarcod) {
	                _inherits(DataMatrix, _TwoDimensionalBarcod);
	
	                function DataMatrix(originConfig) {
	                    _classCallCheck(this, DataMatrix);
	
	                    var _this = _possibleConstructorReturn(this, (DataMatrix.__proto__ || Object.getPrototypeOf(DataMatrix)).call(this, originConfig, _helper2.default.defaultConfig));
	
	                    var _this$config = _this.config,
	                        text = _this$config.text,
	                        eccMode = _this$config.eccMode,
	                        ecc200SymbolSize = _this$config.ecc200SymbolSize,
	                        ecc200EncodingMode = _this$config.ecc200EncodingMode,
	                        structuredAppend = _this$config.structuredAppend,
	                        structureNumber = _this$config.structureNumber,
	                        fileIdentifier = _this$config.fileIdentifier,
	                        ecc000_140SymbolSize = _this$config.ecc000_140SymbolSize;
	
	                    structureNumber = +structureNumber;
	                    fileIdentifier = +fileIdentifier;
	                    var innerEncoder = void 0;
	                    switch (eccMode) {
	                        case 'ECC200':
	                            innerEncoder = new _ECC2.default(text, { ecc200SymbolSize: ecc200SymbolSize, ecc200EncodingMode: ecc200EncodingMode, structuredAppend: structuredAppend, structureNumber: structureNumber, fileIdentifier: fileIdentifier });
	                            break;
	                        case 'ECC000':
	                        case 'ECC050':
	                        case 'ECC080':
	                        case 'ECC100':
	                        case 'ECC140':
	                            innerEncoder = new _ECC000_2.default(text, { ecc000_140SymbolSize: ecc000_140SymbolSize, structuredAppend: structuredAppend, structureNumber: structureNumber, fileIdentifier: fileIdentifier, eccMode: eccMode });
	                            break;
	                        default:
	                            throw new _exceptions.BadArgumentsException(eccMode);
	                    }
	
	                    var matrix = innerEncoder.getMatrix();
	                    _this.adjustDesiredSize(matrix);
	                    _this.convertToShape(matrix);
	                    return _this;
	                }
	
	                _createClass(DataMatrix, [{
	                    key: 'validate',
	                    value: function validate() {
	                        var _config = this.config,
	                            text = _config.text,
	                            eccMode = _config.eccMode,
	                            structureNumber = _config.structureNumber,
	                            fileIdentifier = _config.fileIdentifier;
	
	                        var reg = void 0;
	                        if (eccMode === 'ECC200') {
	                            reg = /^[\x00-\xFF\u2000\u2004\u2005]+$/;
	                        } else {
	                            reg = /^[\x00-\xFF]+$/;
	                        }
	                        if (!reg.test(text)) {
	                            throw new _exceptions.InvalidTextException(text);
	                        }
	
	                        if (!(0, _utils.isNumberLike)(structureNumber)) {
	                            throw new _exceptions.BadArgumentsException({ structureNumber: structureNumber });
	                        }
	                        if (!(0, _utils.isNumberLike)(fileIdentifier)) {
	                            throw new _exceptions.BadArgumentsException({ fileIdentifier: fileIdentifier });
	                        }
	                    }
	                }]);
	
	                return DataMatrix;
	            }(_TwoDimensionalBarcode2.default);
	
	            exports.default = DataMatrix;
	
	
	            _index2.default.registerEncoder('DataMatrix', DataMatrix);
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	            var defaultConfig = {
	                eccMode: 'ECC200',
	                ecc200SymbolSize: 'squareAuto',
	                ecc200EncodingMode: 'auto',
	                ecc000_140SymbolSize: 'auto',
	                structuredAppend: false,
	                structureNumber: 0,
	                fileIdentifier: 0,
	                quietZone: {
	                    top: 2,
	                    left: 2,
	                    right: 2,
	                    bottom: 2
	                }
	            };
	
	            exports.default = {
	                defaultConfig: defaultConfig
	            };
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _ECC200Helper = __webpack_require__(8);
	
	            var _ECC200Helper2 = _interopRequireDefault(_ECC200Helper);
	
	            var _ReedSolomon = __webpack_require__(40);
	
	            var _ReedSolomon2 = _interopRequireDefault(_ReedSolomon);
	
	            var _exceptions = __webpack_require__(1);
	
	            var _SymbolCharacterPlacement = __webpack_require__(41);
	
	            var _SymbolCharacterPlacement2 = _interopRequireDefault(_SymbolCharacterPlacement);
	
	            var _utils = __webpack_require__(0);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            function mod256(num) {
	                return num % 256;
	            }
	            function roundUpCodeLength(num) {
	                return Math.ceil(num - 1e-5);
	            }
	
	            var ECC200 = function () {
	                function ECC200(text, config) {
	                    _classCallCheck(this, ECC200);
	
	                    this.text = text;
	                    this.m_symbol = (0, _utils.str2Array)(text).map(function (c) {
	                        return c.charCodeAt(0);
	                    });
	                    this.symbolSize = config.ecc200SymbolSize;
	                    this.encodingMode = config.ecc200EncodingMode;
	                    this.structuredAppend = config.structuredAppend;
	                    this.structureNumber = config.structureNumber;
	                    this.fileIdentifier = config.fileIdentifier;
	                    this.symbolInfo = _ECC200Helper2.default.getSymbolInfo('square144');
	                    this.m_code = [];
	                }
	
	                _createClass(ECC200, [{
	                    key: 'preEncode',
	                    value: function preEncode(c_pos, s_pos) {
	                        var m_symbol = this.m_symbol,
	                            m_code = this.m_code;
	
	                        var first = m_symbol[0];
	
	                        if (first == _ECC200Helper2.default.CONSTANTS.Macro05Input || first == _ECC200Helper2.default.CONSTANTS.Macro06Input) {
	                            m_code[c_pos++] = first == _ECC200Helper2.default.CONSTANTS.Macro05Input ? _ECC200Helper2.default.CONSTANTS.Macro05 : _ECC200Helper2.default.CONSTANTS.Macro06;
	                            s_pos++;
	                        }
	
	                        return { c_pos: c_pos, s_pos: s_pos };
	                    }
	                }, {
	                    key: 'checkValue',
	                    value: function checkValue(start) {
	                        var encodingMode = this.encodingMode,
	                            m_symbol = this.m_symbol;
	
	                        if (encodingMode == 'X12' || encodingMode == 'EDIFACT') {
	                            for (var i = start; i < m_symbol.length; ++i) {
	                                if (_ECC200Helper2.default.getTripletCharValue(encodingMode, m_symbol[i]) == _ECC200Helper2.default.CONSTANTS.InvalidTripletValue) return false;
	                            }
	                        }
	                        return true;
	                    }
	                }, {
	                    key: 'getEncodingLength',
	                    value: function getEncodingLength(charSet, codeWords, start, length) {
	                        var m_symbol = this.m_symbol;
	
	                        if (codeWords < 0) return -1;
	
	                        var e_len = 0;
	                        switch (charSet) {
	                            case 'ASCII':
	                                e_len = codeWords;
	                                break;
	                            case 'C40':
	                            case 'Text':
	                                e_len = ~~((codeWords + 2) / 3) * 2 + 2;
	                                break;
	                            case 'X12':
	                                e_len = ~~((codeWords + 2) / 3) * 2 + 2;
	                                if (codeWords % 3 == 1 || codeWords % 3 == 2 && _ECC200Helper2.default.isDigit(m_symbol[start + length - 2]) && _ECC200Helper2.default.isDigit(m_symbol[start + length - 1])) --e_len;
	                                break;
	                            case 'EDIFACT':
	                                ++codeWords;
	                                e_len = ~~(codeWords / 4) * 3 + codeWords % 4 + 1;
	                                break;
	                            case 'Base256':
	                                e_len = codeWords + 1 + (codeWords > _ECC200Helper2.default.CONSTANTS.Base256SmallBlockSize ? 2 : 1);
	                                break;
	                        }
	
	                        return e_len;
	                    }
	                }, {
	                    key: 'getMaxProperLength',
	                    value: function getMaxProperLength(start, maxLength) {
	                        var m_symbol = this.m_symbol,
	                            encodingMode = this.encodingMode;
	
	                        var min = start + 1,
	                            max = m_symbol.length;
	                        var curr = ~~((min + max) / 2);
	                        var length = 0;
	                        var ec_len = 0;
	
	                        while (min < max) {
	                            curr = ~~((min + max) / 2);
	                            ec_len = this.getEncodingLength(encodingMode, this.getCodeWordLength(encodingMode, start, curr - start), start, curr - start);
	                            if (ec_len < 0 || ec_len > maxLength) {
	                                max = curr - 1;
	                            } else {
	                                min = curr + 1;
	                            }
	                        }
	
	                        if (min > start) {
	                            if (curr < min) {
	                                ec_len = this.getEncodingLength(encodingMode, this.getCodeWordLength(encodingMode, start, min - start), start, min - start);
	                                if (ec_len < 0 || ec_len > maxLength) {
	                                    length = curr - start;
	                                } else {
	                                    length = min - start;
	                                }
	                            } else {
	                                curr = Math.min(curr, min);
	                                ec_len = this.getEncodingLength(encodingMode, this.getCodeWordLength(encodingMode, start, curr - start), start, curr - start);
	                                if (ec_len < 0 || ec_len > maxLength) {
	                                    length = curr - start - 1;
	                                } else {
	                                    length = curr - start;
	                                }
	                            }
	                        }
	
	                        return Math.max(0, length);
	                    }
	                }, {
	                    key: 'getCodeWordLength',
	                    value: function getCodeWordLength(charSet, start, length) {
	                        var m_symbol = this.m_symbol;
	
	                        var codeWords = 0;
	                        for (var i = start; i < start + length; ++i) {
	                            var data = m_symbol[i];
	                            switch (charSet) {
	                                case 'ASCII':
	                                    codeWords += data > _ECC200Helper2.default.ASCIIMax && data != _ECC200Helper2.default.CONSTANTS.FNC1Input ? 2 : 1;
	                                    if (i < start + length - 1 && _ECC200Helper2.default.isDigit(data) && _ECC200Helper2.default.isDigit(m_symbol[i + 1])) {
	                                        ++i;
	                                    }
	                                    break;
	                                case 'C40':
	                                case 'Text':
	                                    if (data == _ECC200Helper2.default.CONSTANTS.FNC1Input) {
	                                        data = _ECC200Helper2.default.CONSTANTS.TripletFNC1;
	                                    } else if (data > _ECC200Helper2.default.ASCIIMax) {
	                                        codeWords += 2;
	                                        data -= 128;
	                                    }
	                                    codeWords += _ECC200Helper2.default.getTripletCharSetChannel(charSet, data) == 0 ? 1 : 2;
	                                    break;
	                                case 'X12':
	                                    if (_ECC200Helper2.default.getX12Value(data) == _ECC200Helper2.default.CONSTANTS.InvalidTripletValue) {
	                                        codeWords = -1;
	                                    } else {
	                                        codeWords += 1;
	                                    }
	                                    break;
	                                case 'EDIFACT':
	                                    if (_ECC200Helper2.default.getEDIFACTValue(data) == _ECC200Helper2.default.CONSTANTS.InvalidTripletValue) {
	                                        codeWords = -1;
	                                    } else {
	                                        codeWords += 1;
	                                    }
	                                    break;
	                                case 'Base256':
	                                    codeWords += 1;
	                                    break;
	                            }
	
	                            if (codeWords < 0) return codeWords;
	                        }
	
	                        return codeWords;
	                    }
	                }, {
	                    key: 'getCodeLength',
	                    value: function getCodeLength(unit) {
	                        return this.getEncodingLength(unit.charSet, this.getCodeWordLength(unit.charSet, unit.start, unit.length), unit.start, unit.length);
	                    }
	                }, {
	                    key: 'getEncodingUnitsInfomative',
	                    value: function getEncodingUnitsInfomative(start, maxLength, s_taken) {
	                        var m_symbol = this.m_symbol;
	
	                        s_taken = 0;
	                        var sequence = [],
	                            currentUnit = {
	                                charSet: 'ASCII',
	                                start: start,
	                                length: 0,
	                                codeWords: 0,
	                                encodingLength: 0
	                            };
	                        var currentLength = 0;
	                        var offset = start;
	                        var charSetShifted = false;
	                        var symbolLength = m_symbol.length;
	                        while (offset < symbolLength) {
	                            charSetShifted = false;
	                            switch (currentUnit.charSet) {
	                                case 'ASCII':
	                                   
	                                    var c_Length = 0;
	                                    while (offset + c_Length < m_symbol.length - 1 && currentLength + ~~(c_Length / 2) < maxLength && _ECC200Helper2.default.isDigit(m_symbol[offset + c_Length]) && _ECC200Helper2.default.isDigit(m_symbol[offset + c_Length + 1])) {
	                                        c_Length += 2;
	                                    }
	                                    if (c_Length > 0) {
	                                        currentUnit.codeWords += c_Length >> 1;
	                                        offset += c_Length;
	                                        if (currentLength + ~~(c_Length / 2) >= maxLength) {
	                                            break;
	                                        }
	                                        continue;
	                                    }
	                                    break;
	                                case 'C40':
	                                case 'Text':
	                                case 'X12':
	                                   
	                                    do {
	                                        if (m_symbol[offset] > _ECC200Helper2.default.ASCIIMax) {
	                                            currentUnit.codeWords += 2;
	                                        }
	                                        if (_ECC200Helper2.default.getTripletCharSetChannel(currentUnit.charSet, m_symbol[offset]) > 0) {
	                                            ++currentUnit.codeWords;
	                                        }
	                                        ++currentUnit.codeWords;
	                                        ++offset;
	                                    } while (currentUnit.codeWords % 3 != 0 && offset < symbolLength);
	                                    break;
	                                case 'EDIFACT':
	                                   
	                                    do {
	                                        ++currentUnit.codeWords;
	                                        ++offset;
	                                    } while ((currentUnit.codeWords & 0x3) != 0 && offset < symbolLength);
	                                    break;
	                                case 'Base256':
	                                    ++currentUnit.codeWords;
	                                    ++offset;
	                                    break;
	                            }
	
	                            var d_len = 0;
	                            var r_len = maxLength - (currentLength + this.getEncodingLength(currentUnit.charSet, currentUnit.codeWords, currentUnit.start, offset - currentUnit.start));
	                            var cr_len = r_len;
	                           
	
	                            var newCharset = currentUnit.charSet;
	                           
	                            do {
	                                var _lookAhead = this.lookAhead(currentUnit.charSet, offset, cr_len, d_len);
	
	                                d_len = _lookAhead.d_len;
	                                newCharset = _lookAhead.newCharset;
	                            } while (--cr_len > 0 && this.getEncodingLength(newCharset, this.getCodeWordLength(newCharset, offset, d_len), offset, d_len) > r_len);
	
	                            if (cr_len <= 0) {
	                                break;
	                            }
	
	                           
	                            if (currentUnit.charSet != newCharset) {
	                                currentUnit.length = offset - currentUnit.start;
	                                if (currentUnit.length > 0) {
	                                    sequence.push(currentUnit);
	                                    currentLength += this.getEncodingLength(currentUnit.charSet, currentUnit.codeWords, currentUnit.start, currentUnit.length);
	                                }
	                                currentUnit = {
	                                    charSet: newCharset,
	                                    start: offset,
	                                    length: 0,
	                                    codeWords: 0,
	                                    encodingLength: 0
	                                };
	                                charSetShifted = true;
	                            }
	
	                           
	                           
	                            var endPoint = maxLength - 1;
	                            if (currentUnit.charSet == 'EDIFACT') {
	                                --endPoint;
	                            }
	                            if (currentUnit.charSet == 'Base256') {
	                                ++endPoint;
	                            }
	
	                            if (currentLength + this.getEncodingLength(currentUnit.charSet, currentUnit.codeWords, currentUnit.start, currentUnit.length) >= endPoint) {
	                                break;
	                            }
	
	                           
	                            if (!charSetShifted && currentUnit.charSet == 'ASCII') {
	                                ++currentUnit.codeWords;
	                                ++offset;
	                            }
	                        }
	                       
	                        currentUnit.length = offset - currentUnit.start;
	                        if (currentUnit.length > 0) {
	                            sequence.push(currentUnit);
	                            currentLength += this.getEncodingLength(currentUnit.charSet, currentUnit.codeWords, currentUnit.start, currentUnit.length);
	                        }
	
	                       
	                        currentUnit = {
	                            charSet: 'ASCII',
	                            start: offset,
	                            length: 0,
	                            codeWords: 0,
	                            encodingLength: 0
	                        };
	                        while (currentLength < maxLength && offset < m_symbol.length) {
	                            if (m_symbol[offset] > _ECC200Helper2.default.ASCIIMax && m_symbol[offset] != _ECC200Helper2.default.CONSTANTS.FNC1Input) {
	                                if (currentLength < maxLength - 1) {
	                                    ++currentLength;
	                                } else {
	                                    break;
	                                }
	                            }
	                            ++currentLength;
	                            ++offset;
	                        }
	
	                        if (offset > currentUnit.start) {
	                            currentUnit.length = offset - currentUnit.start;
	                            sequence.push(currentUnit);
	                        }
	
	                        s_taken = offset - start;
	
	                        return { s_taken: s_taken, units: _ECC200Helper2.default.mergeUnits(sequence) };
	                    }
	                }, {
	                    key: 'getEncodingUnits',
	                    value: function getEncodingUnits(s_pos, maxLength) {
	                        var _this = this;
	
	                        var encodingMode = this.encodingMode,
	                            m_symbol = this.m_symbol;
	
	                        var units = void 0;
	                        var codeLength = 0,
	                            s_taken = 0;
	
	                        if (s_pos < m_symbol.length) {
	                            if (encodingMode !== 'auto') {
	                                if (encodingMode === 'C40' || encodingMode == 'Text' || encodingMode == 'X12') {
	                                    maxLength++;
	                                }
	                                s_taken = this.getMaxProperLength(s_pos, maxLength);
	                                var unit = {
	                                    charSet: encodingMode,
	                                    start: s_pos,
	                                    length: s_taken,
	                                    codeWords: 0,
	                                    encodingLength: 0
	                                };
	                                unit.codeWords = this.getCodeWordLength(unit.charSet, unit.start, unit.length);
	                                unit.encodingLength = this.getEncodingLength(unit.charSet, unit.codeWords, unit.start, unit.length);
	                               
	                                if (unit.charSet == 'X12' && unit.encodingLength == maxLength && unit.codeWords % 3 == 2) {
	                                    --s_taken;
	                                    --unit.length;
	                                    --unit.codeWords;
	                                    --unit.encodingLength;
	                                }
	                                units = [unit];
	                            } else {
	                                var _getEncodingUnitsInfo = this.getEncodingUnitsInfomative(s_pos, maxLength, s_taken);
	
	                                units = _getEncodingUnitsInfo.units;
	                                s_taken = _getEncodingUnitsInfo.s_taken;
	                            }
	
	                            units.forEach(function (unit, i) {
	                                codeLength += _this.getCodeLength(unit);
	                                if (i === units.length - 1 && (unit.charSet === 'C40' || unit.charSet === 'Text' || unit.charSet === 'X12' && (unit.codeWords & 1) === 1)) {
	                                    codeLength--;
	                                }
	                            });
	                        }
	
	                        return { c_length: codeLength, s_taken: s_taken, units: units };
	                    }
	                }, {
	                    key: 'encodeStructureHeader',
	                    value: function encodeStructureHeader(c_pos, structureCount, fileInfo) {
	                        var m_code = this.m_code,
	                            structureNumber = this.structureNumber;
	
	                        m_code[c_pos++] = _ECC200Helper2.default.CONSTANTS.StructuredAppand;
	                        m_code[c_pos++] = mod256(structureNumber << 4 | 16 - structureCount + 1);
	                        var fi = this.generateFileIdentifier(structureCount, fileInfo);
	                        m_code[c_pos++] = mod256(fi >> 8);
	                        m_code[c_pos++] = mod256(fi);
	                        return c_pos;
	                    }
	                }, {
	                    key: 'generateFileIdentifier',
	                    value: function generateFileIdentifier(structureCount, fileInfo) {
	                        var m_symbol = this.m_symbol,
	                            fileIdentifier = this.fileIdentifier;
	
	                        var b1 = fileInfo % _ECC200Helper2.default.CONSTANTS.FileIdentifierMax + 1;
	                        var b2 = fileIdentifier == 0 ? m_symbol.length % _ECC200Helper2.default.CONSTANTS.FileIdentifierMax + 1 : fileIdentifier;
	                        return b1 << 8 | b2;
	                    }
	                }, {
	                    key: 'encode',
	                    value: function encode(unit, c_pos) {
	                        switch (unit.charSet) {
	                            case 'ASCII':
	                                return this.encodeASCII(unit.start, unit.length, c_pos);
	                            case 'C40':
	                                return this.encodeC40(unit.start, unit.length, c_pos);
	                            case 'Text':
	                                return this.encodeText(unit.start, unit.length, c_pos);
	                            case 'X12':
	                                return this.encodeX12(unit.start, unit.length, c_pos);
	                            case 'EDIFACT':
	                                return this.encodeEDIFACT(unit.start, unit.length, c_pos);
	                            case 'Base256':
	                                return this.encodeBase256(unit.start, unit.length, c_pos);
	                        }
	                    }
	                }, {
	                    key: 'encodeASCII',
	                    value: function encodeASCII(start, length, c_pos) {
	                        var m_code = this.m_code,
	                            m_symbol = this.m_symbol;
	
	
	                        for (var i = start, len = start + length; i < len; i++) {
	                            var type = _ECC200Helper2.default.getCharType(m_symbol[i]);
	
	                            if (type === 'FNC1') {
	                                m_code.push(_ECC200Helper2.default.CONSTANTS.ASCIIFNC1);
	                                c_pos++;
	                                continue;
	                            } else if (type === 'ExtendedASCII') {
	                                m_code.push(_ECC200Helper2.default.CONSTANTS.ASCIIUpperShift);
	                                m_code.push(m_symbol[i] - _ECC200Helper2.default.ASCIIMax);
	                                c_pos += 2;
	                                continue;
	                            } else if (i + 1 < len && type === 'Numeric' && _ECC200Helper2.default.getCharType(m_symbol[i + 1]) === 'Numeric') {
	                                var n = (m_symbol[i] - 48) * 10 + (m_symbol[i + 1] - 48) + 130;
	                                m_code.push(n);
	                                c_pos++;
	                                i++;
	                                continue;
	                            }
	
	                            m_code.push(m_symbol[i] + 1);
	                            c_pos++;
	                        }
	                        return c_pos;
	                    }
	                }, {
	                    key: 'encodeTriplet',
	                    value: function encodeTriplet(charSet, start, length, c_pos) {
	                        var m_code = this.m_code,
	                            m_symbol = this.m_symbol,
	                            symbolInfo = this.symbolInfo;
	
	
	                        var eVal = 0,
	                            eLen = 0,
	                            values = null,
	                            penddingVals = [],
	                            index = start;
	
	                        switch (charSet) {
	                            case 'C40':
	                                m_code[c_pos++] = _ECC200Helper2.default.CONSTANTS.LatchToC40;
	                                break;
	                            case 'Text':
	                                m_code[c_pos++] = _ECC200Helper2.default.CONSTANTS.LatchToText;
	                                break;
	                            case 'X12':
	                                m_code[c_pos++] = _ECC200Helper2.default.CONSTANTS.LatchToX12;
	                                break;
	                        }
	
	                        while (index < start + length) {
	                            values = _ECC200Helper2.default.getTripletEncodeValues(charSet, m_symbol[index++]);
	                            penddingVals = penddingVals.concat(values);
	                        }
	
	                        while (c_pos <= symbolInfo.symbolDataCapacity - 2 && penddingVals.length >= 3) {
	                            eVal = 0;
	
	                            for (eLen = 0; eLen < 3; ++eLen) {
	                                eVal *= 40;
	                                eVal += penddingVals.length > 0 ? penddingVals.shift() : 0;
	                            }
	                            ++eVal;
	
	                            m_code[c_pos++] = eVal >> 8;
	                            m_code[c_pos++] = eVal & 0xff;
	                        }
	
	                        var unlatch = true;
	
	                        if (penddingVals.length > 0) {
	                            var capacity = symbolInfo.symbolDataCapacity - c_pos;
	                            var currStart = start + length - penddingVals.length;
	                            var currLength = penddingVals.length;
	                            if (capacity === 0 || penddingVals.length > 3 || penddingVals.length >= 2 && capacity < 2 || charSet === 'X12' && this.getEncodingLength('ASCII', this.getCodeWordLength('ASCII', currStart, currLength), currStart, currLength) > (capacity == 1 ? 1 : capacity - 1)) {
	                                throw new _exceptions.TextTooLargeException();
	                            }
	
	                            unlatch = false;
	
	                            if (capacity >= 2) {
	                                if (charSet == 'X12') {
	                                    m_code[c_pos++] = _ECC200Helper2.default.CONSTANTS.TripletUnlatch;
	                                    c_pos = this.encodeASCII(index - penddingVals.length, penddingVals.length, c_pos);
	                                } else {
	                                    unlatch = true;
	
	                                    for (eLen = 0, eVal = 0; eLen < 3; ++eLen) {
	                                        eVal *= 40;
	                                        eVal += penddingVals.length > 0 ? penddingVals.shift() : 0;
	                                    }
	
	                                    ++eVal;
	
	                                    m_code[c_pos++] = eVal >> 8;
	                                    m_code[c_pos++] = eVal & 0xff;
	                                }
	                            } else {
	                                var lastSymbol = m_symbol[index - 1];
	                                if (charSet === 'X12') {
	                                    c_pos = this.encodeASCII(index - 1, 1, c_pos);
	                                } else {
	                                    if (lastSymbol > _ECC200Helper2.default.ASCIIMax) {
	                                        m_code[c_pos - 2] = _ECC200Helper2.default.CONSTANTS.TripletUnlatch;
	                                        --c_pos;
	                                    }
	                                    c_pos = this.encodeASCII(index - 1, 1, c_pos);
	                                }
	                            }
	                        }
	
	                        if (unlatch && c_pos < symbolInfo.symbolDataCapacity) {
	                            m_code[c_pos++] = _ECC200Helper2.default.CONSTANTS.TripletUnlatch;
	                        }
	                        return c_pos;
	                    }
	                }, {
	                    key: 'encodeC40',
	                    value: function encodeC40(start, length, c_pos) {
	                        return this.encodeTriplet('C40', start, length, c_pos);
	                    }
	                }, {
	                    key: 'encodeText',
	                    value: function encodeText(start, length, c_pos) {
	                        return this.encodeTriplet('Text', start, length, c_pos);
	                    }
	                }, {
	                    key: 'encodeX12',
	                    value: function encodeX12(start, length, c_pos) {
	                        return this.encodeTriplet('X12', start, length, c_pos);
	                    }
	                }, {
	                    key: 'encodeEDIFACT',
	                    value: function encodeEDIFACT(start, length, c_pos) {
	                        var m_code = this.m_code,
	                            m_symbol = this.m_symbol,
	                            symbolInfo = this.symbolInfo,
	                            text = this.text;
	
	                        m_code[c_pos++] = _ECC200Helper2.default.CONSTANTS.LatchToEDIFACT;
	
	                        var eLen = 0,
	                            eVal = 0,
	                            index = start;
	                        var unlatched = false;
	                        for (; index < start + length && symbolInfo.symbolDataCapacity - c_pos > 2;) {
	                            eLen = 0;
	                            eVal = 0;
	                            while (eLen < 4) {
	                                ++eLen;
	                                var value = 0;
	
	                                if (index < start + length) {
	                                    value = _ECC200Helper2.default.getEDIFACTValue(m_symbol[index++]);
	                                    if (value == _ECC200Helper2.default.CONSTANTS.InvalidTripletValue) {
	                                        throw new _exceptions.InvalidTextException(text);
	                                    }
	                                } else if (index == start + length) {
	                                    value = _ECC200Helper2.default.CONSTANTS.EDIFACTUnlatch;
	                                    unlatched = true;
	                                    ++index;
	                                } else {
	                                    --eLen;
	                                    break;
	                                }
	
	                                eVal <<= 6;
	                                eVal |= value;
	                            }
	
	                            switch (eLen) {
	                                case 1:
	                                    m_code[c_pos++] = mod256(eVal << 2);
	                                    break;
	                                case 2:
	                                    m_code[c_pos++] = mod256(eVal >> 4);
	                                    m_code[c_pos++] = mod256(eVal << 4);
	                                    break;
	                                case 3:
	                                    m_code[c_pos++] = mod256(eVal >> 10);
	                                    m_code[c_pos++] = mod256(eVal >> 2);
	                                    m_code[c_pos++] = mod256(eVal << 6);
	                                    break;
	                                case 4:
	                                    m_code[c_pos++] = mod256(eVal >> 16);
	                                    m_code[c_pos++] = mod256(eVal >> 8);
	                                    m_code[c_pos++] = mod256(eVal);
	                                    break;
	                            }
	                        }
	
	                        if (index < start + length) {
	                            c_pos = this.encodeASCII(index, m_symbol.length - index, c_pos);
	                        } else if (!unlatched && c_pos < symbolInfo.symbolDataCapacity - 2) {
	                            m_code[c_pos++] = _ECC200Helper2.default.CONSTANTS.EDIFACTUnlatch << 2;
	                        }
	
	                        return c_pos;
	                    }
	                }, {
	                    key: 'encodeBase256',
	                    value: function encodeBase256(start, length, c_pos) {
	                        var m_code = this.m_code,
	                            m_symbol = this.m_symbol;
	
	                        m_code[c_pos++] = _ECC200Helper2.default.CONSTANTS.LatchToBase256;
	
	                        if (length > _ECC200Helper2.default.CONSTANTS.Base256SmallBlockSize) {
	                            m_code[c_pos++] = _ECC200Helper2.default.getRandomizedValue(_ECC200Helper2.default.CONSTANTS.Base256SmallBlockSize + length / _ECC200Helper2.default.CONSTANTS.Base256SmallBlockSize, c_pos, _ECC200Helper2.default.CONSTANTS.Base256RandomBase);
	                        }
	                        m_code[c_pos++] = _ECC200Helper2.default.getRandomizedValue(length % (_ECC200Helper2.default.CONSTANTS.Base256SmallBlockSize + 1), c_pos, _ECC200Helper2.default.CONSTANTS.Base256RandomBase);
	
	                        for (var i = start; i < start + length; ++i) {
	                            m_code[c_pos++] = _ECC200Helper2.default.getRandomizedValue(m_symbol[i], c_pos, _ECC200Helper2.default.CONSTANTS.Base256RandomBase);
	                        }
	                        return c_pos;
	                    }
	                }, {
	                    key: 'padRight',
	                    value: function padRight(c_pos) {
	                        var m_code = this.m_code,
	                            symbolInfo = this.symbolInfo;
	
	                        for (var i = c_pos; i < symbolInfo.symbolDataCapacity; i++) {
	                            m_code[i] = i == c_pos ? _ECC200Helper2.default.CONSTANTS.ASCIIPad : _ECC200Helper2.default.getRandomizedValue(_ECC200Helper2.default.CONSTANTS.ASCIIPad, i + 1, _ECC200Helper2.default.CONSTANTS.PadRandomBase);
	                        }
	                    }
	                }, {
	                    key: 'lookAhead',
	                    value: function lookAhead(current, offset, codeLength, d_len) {
	                        var CharSet = {
	                            ASCII: 0,
	                            C40: 1,
	                            Text: 2,
	                            X12: 3,
	                            EDIFACT: 4,
	                            Base256: 5
	                        };
	                        var CharSetName = ['ASCII', 'C40', 'Text', 'X12', 'EDIFACT', 'Base256'];
	                        var m_symbol = this.m_symbol;
	
	                        d_len = 0;
	                        current = CharSet[current];
	                        var forceBreak = false;
	                        var start = offset;
	                        var counts = [0, 1, 1, 1, 1, 1.25];
	                        var winner = CharSet.C40;
	
	                        if (current != CharSet.ASCII) {
	                            counts = counts.map(function (c) {
	                                return ++c;
	                            });
	                        }
	
	                        counts[current] = 0;
	
	                        var _loop = function _loop() {
	                            ++d_len;
	                            var data = m_symbol[offset];
	                            var isFnc1 = data == _ECC200Helper2.default.CONSTANTS.FNC1Input;
	                            var isExtAscii = data > _ECC200Helper2.default.ASCIIMax;
	                            counts.forEach(function (c, i) {
	                                switch (i) {
	                                    case CharSet.ASCII:
	                                        if (isExtAscii && !isFnc1) {
	                                            counts[i] = roundUpCodeLength(counts[i]) + 2;
	                                        } else if (_ECC200Helper2.default.isDigit(data)) {
	                                            counts[i] += 0.5;
	                                        } else {
	                                            counts[i] += 1;
	                                        }
	                                        break;
	                                    case CharSet.C40:
	                                    case CharSet.Text:
	                                        if (isFnc1) {
	                                            counts[i] += 4 / 3;
	                                        } else if (isExtAscii) {
	                                            counts[i] += 8 / 3;
	                                        } else {
	                                            counts[i] += _ECC200Helper2.default.getTripletCharSetChannel(CharSetName[i], data) == 0 ? 2 / 3 : 4 / 3;
	                                        }
	                                        break;
	                                    case CharSet.X12:
	                                        if (isExtAscii) {
	                                            counts[i] += 13 / 3;
	                                        } else if (_ECC200Helper2.default.getX12Value(data) != _ECC200Helper2.default.CONSTANTS.InvalidTripletValue) {
	                                            counts[i] += 2 / 3;
	                                        } else {
	                                            counts[i] += 10 / 3;
	                                        }
	                                        break;
	                                    case CharSet.EDIFACT:
	                                        if (isExtAscii) {
	                                            counts[i] += 17 / 4;
	                                        } else if (_ECC200Helper2.default.getEDIFACTValue(data) != _ECC200Helper2.default.CONSTANTS.InvalidTripletValue) {
	                                            counts[i] += 0.75;
	                                        } else {
	                                            counts[i] += 13 / 4;
	                                        }
	                                        break;
	                                    case CharSet.Base256:
	                                        counts[i] += 1;
	                                        break;
	                                }
	                            });
	
	                            var indices = [CharSet.ASCII, CharSet.Base256, CharSet.EDIFACT, CharSet.Text, CharSet.X12, CharSet.C40];
	
	                            if (d_len > 3) {
	                                for (var _i2 = 0; _i2 < indices.length; ++_i2) {
	                                    var win = true,
	                                        set = indices[_i2],
	                                        value = counts[set] + 1;
	
	                                    for (var j = 0; j < counts.length; ++j) {
	                                        switch (set) {
	                                            case CharSet.ASCII:
	                                                if (counts[j] < value) {
	                                                    win = false;
	                                                }
	                                                break;
	                                            case CharSet.Base256:
	                                                if (j == CharSet.ASCII && counts[j] < value || counts[j] <= value) {
	                                                    win = false;
	                                                }
	                                                break;
	                                            case CharSet.EDIFACT:
	                                            case CharSet.Text:
	                                            case CharSet.X12:
	                                                if (counts[j] <= value) {
	                                                    win = false;
	                                                }
	                                                break;
	                                            case CharSet.C40:
	                                                if (j != CharSet.X12 && counts[j] <= value) {
	                                                    win = false;
	                                                } else {
	                                                    value -= 1;
	                                                    if (counts[j] < value) {
	                                                        win = false;
	                                                    } else if (counts[j] == value) {
	                                                        var index = start;
	                                                        while (index <= offset) {
	                                                            var x12value = _ECC200Helper2.default.getX12Value(m_symbol[index++]);
	                                                            if (x12value < 3) {
	                                                                return {
	                                                                    v: CharSetName[CharSet.X12]
	                                                                };
	                                                            } else if (x12value == _ECC200Helper2.default.CONSTANTS.InvalidTripletValue) {
	                                                                break;
	                                                            }
	                                                        }
	                                                        return {
	                                                            v: CharSetName[CharSet.C40]
	                                                        };
	                                                    }
	                                                }
	                                                break;
	                                        }
	                                        if (!win) {
	                                            break;
	                                        }
	                                    }
	
	                                    if (win) {
	                                        winner = set;
	                                        break;
	                                    }
	                                }
	                            }
	
	                            ++offset;
	
	                           
	                            var min = 0;
	                            for (var _i3 = 0; _i3 < counts.length; ++_i3) {
	                                if (roundUpCodeLength(counts[_i3]) < roundUpCodeLength(counts[min])) {
	                                    min = _i3;
	                                }
	                            }
	                            if (offset < m_symbol.length && roundUpCodeLength(counts[min]) >= codeLength) {
	                                forceBreak = true;
	                                return 'break';
	                            }
	                        };
	
	                        _loop2: while (offset < m_symbol.length && offset - start <= _ECC200Helper2.default.CONSTANTS.MaxLookAheadOffset) {
	                            var _ret = _loop();
	
	                            switch (_ret) {
	                                case 'break':
	                                    break _loop2;
	
	                                default:
	                                    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	                            }
	                        }
	
	                        if (offset == m_symbol.length || offset - start >= _ECC200Helper2.default.CONSTANTS.MaxLookAheadOffset || forceBreak) {
	                           
	                            var _min = 0;
	                            for (var i = 0; i < counts.length; ++i) {
	                               
	                                counts[i] = roundUpCodeLength(counts[i]);
	                                if (counts[i] < counts[_min]) {
	                                    _min = i;
	                                }
	                            }
	
	                            if (_min == 0 || _min == CharSet.C40) {
	                               
	                                winner = _min;
	                            } else {
	                               
	                               
	                                var flag = true;
	                                var minValue = counts[_min];
	                                for (var _i = 0; _i < counts.length; ++_i) {
	                                    if (_i != _min && counts[_i] <= minValue) {
	                                        flag = false;
	                                        break;
	                                    }
	                                }
	                                if (flag) {
	                                    winner = _min;
	                                }
	                            }
	                        }
	
	                        return { d_len: d_len, newCharset: CharSetName[winner] };
	                    }
	                }, {
	                    key: 'getMatrix',
	                    value: function getMatrix() {
	                        var _this2 = this;
	
	                        var text = this.text,
	                            m_symbol = this.m_symbol,
	                            symbolSize = this.symbolSize,
	                            structuredAppend = this.structuredAppend,
	                            structureNumber = this.structureNumber,
	                            symbolInfo = this.symbolInfo;
	
	
	                        if (m_symbol.length > 3116 * (structuredAppend ? 16 : 1)) {
	                            throw new _exceptions.TextTooLargeException();
	                        }
	
	                        var s_pos = 0,
	                            c_pos = 0,
	                            codeLength = 0,
	                            structureCount = 0,
	                            fileInfo = 0;
	                        if (symbolSize !== 'squareAuto' && symbolSize !== 'rectangularAuto') {
	                            symbolInfo = _ECC200Helper2.default.getSymbolInfo(symbolSize);
	                        } else if (symbolSize === 'rectangularAuto') {
	                            symbolInfo = _ECC200Helper2.default.getSymbolInfo('rectangular16x48');
	                        }
	                        this.symbolInfo = symbolInfo;
	
	                        if (!structuredAppend) {
	                            var _preEncode = this.preEncode(s_pos, c_pos);
	
	                            s_pos = _preEncode.s_pos;
	                            c_pos = _preEncode.c_pos;
	                        }
	
	                        var symbolCapacity = symbolInfo.symbolDataCapacity;
	                        if (structuredAppend) {
	                            symbolCapacity -= 4;
	                            codeLength = 4;
	                        } else {
	                            symbolCapacity -= c_pos;
	                            codeLength = c_pos;
	                        }
	
	                        if (!this.checkValue(s_pos)) {
	                            throw new _exceptions.InvalidTextException(text);
	                        }
	
	                        var encodingUnits = void 0;
	                        for (; structureCount < (structuredAppend ? _ECC200Helper2.default.CONSTANTS.MaxStructures : 1) && s_pos < m_symbol.length; structureCount++) {
	                            fileInfo ^= m_symbol[s_pos];
	
	                            var _getEncodingUnits = this.getEncodingUnits(s_pos, symbolCapacity),
	                                s_taken = _getEncodingUnits.s_taken,
	                                c_length = _getEncodingUnits.c_length,
	                                units = _getEncodingUnits.units;
	
	                            s_pos += s_taken;
	
	                            if (structureCount == structureNumber) {
	                                encodingUnits = units;
	                                codeLength += c_length;
	                            }
	                        }
	
	                        if (encodingUnits == null) {
	                            throw new _exceptions.InvalidStructureNumberException();
	                        }
	
	                        if (s_pos < m_symbol.length) {
	                            throw new _exceptions.TextTooLargeException();
	                        }
	
	                        if (symbolSize === 'squareAuto' || symbolSize === 'rectangularAuto') {
	                            symbolInfo = _ECC200Helper2.default.getSuitableSymbolSize(symbolSize, codeLength);
	                            this.symbolInfo = symbolInfo;
	                        }
	
	                        if (structuredAppend) {
	                            c_pos = this.encodeStructureHeader(c_pos, structureCount, mod256(fileInfo ^ m_symbol[m_symbol.length - 1]));
	                        }
	
	                        encodingUnits.forEach(function (unit) {
	                            return c_pos = _this2.encode(unit, c_pos);
	                        });
	
	                        if (c_pos < symbolInfo.symbolDataCapacity) {
	                            this.padRight(c_pos);
	                        }
	
	                        var code = this.eccProcess();
	
	                        var _helper$getInfoOfRegi = _ECC200Helper2.default.getInfoOfRegions(symbolInfo.regions),
	                            rowOfRegion = _helper$getInfoOfRegi.rowOfRegion,
	                            colOfRegion = _helper$getInfoOfRegi.colOfRegion;
	
	                        var sp = new _SymbolCharacterPlacement2.default(code, symbolInfo.symbolRows - 2 * rowOfRegion, symbolInfo.symbolColumns - 2 * colOfRegion);
	                        var data = sp.ECC200();
	
	                        return this.placeModules(data);
	                    }
	                }, {
	                    key: 'eccProcess',
	                    value: function eccProcess() {
	                        var symbolInfo = this.symbolInfo,
	                            m_code = this.m_code;
	
	                        var codeLength = symbolInfo.symbolDataCapacity / symbolInfo.interleavedBlocks;
	                        var eccLength = symbolInfo.eccLength / symbolInfo.interleavedBlocks;
	
	                       
	                        if (symbolInfo.symbolRows == 144) {
	                            ++codeLength;
	                        }
	                        var code = [];
	
	                        for (var i = 0; i < symbolInfo.interleavedBlocks; ++i) {
	                            var cLen = 0;
	                            var index = i;
	                            for (; cLen < codeLength && index < symbolInfo.symbolDataCapacity; ++cLen, index += symbolInfo.interleavedBlocks) {
	                                code[cLen] = m_code[index];
	                            }
	
	                            var eccValue = (0, _ReedSolomon2.default)(code, 0, cLen, eccLength);
	
	                            index = i;
	
	                            for (var j = 0; j < eccValue.length; ++j, index += symbolInfo.interleavedBlocks) {
	                                m_code[symbolInfo.symbolDataCapacity + index] = eccValue[j];
	                            }
	                        }
	
	                        return m_code;
	                    }
	                }, {
	                    key: 'placeModules',
	                    value: function placeModules(data) {
	                        var symbolInfo = this.symbolInfo;
	
	                        var matrix = _ECC200Helper2.default.createModules(symbolInfo.symbolRows, symbolInfo.symbolColumns);
	
	                        var _helper$getInfoOfRegi2 = _ECC200Helper2.default.getInfoOfRegions(symbolInfo.regions),
	                            rowOfRegion = _helper$getInfoOfRegi2.rowOfRegion,
	                            colOfRegion = _helper$getInfoOfRegi2.colOfRegion;
	
	                        for (var r = 0; r < rowOfRegion; r++) {
	                            for (var c = 0; c < colOfRegion; c++) {
	                                _ECC200Helper2.default.setFinder(matrix, symbolInfo, r, c);
	                                _ECC200Helper2.default.setRegionData(matrix, symbolInfo, r, c, data);
	                            }
	                        }
	
	                        return matrix;
	                    }
	                }]);
	
	                return ECC200;
	            }();
	
	            exports.default = ECC200;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	            exports.default = generateErrorCorrectionCode;
	
	            var _utils = __webpack_require__(0);
	
	            var GEN_BIT_MASK = 0x2d;
	            var MSB_MASK = 0x80;
	            var GEN_SEED = 0x01;
	            var _elements = (0, _utils.fillArray)(new Array(256), 0);
	            var _valToExp = (0, _utils.fillArray)(new Array(256), 0);
	
	            var seed = GEN_SEED,
	                exp = 0;
	            do {
	                seed %= 256;
	                var last = seed;
	                _elements[exp] = seed;
	                _valToExp[seed] = exp % 256;
	                seed <<= 1;
	                if ((last & MSB_MASK) != 0) {
	                    seed ^= GEN_BIT_MASK;
	                }
	            } while (++exp <= 255);
	
	            function GFSum(a, b) {
	                return (a ^ b) % 256;
	            }
	
	            function GFMultiply(a, b) {
	                if (a == 0 || b == 0) {
	                    return 0;
	                }
	
	                return _elements[(_valToExp[a] + _valToExp[b]) % 255];
	            }
	
	            var Coefficients = [null, null, null, null, null,
	
	                [228, 48, 15, 111, 62], null,
	
	                [23, 68, 144, 134, 240, 92, 254], null, null,
	
	                [28, 24, 185, 166, 223, 248, 116, 255, 110, 61],
	
	                [175, 138, 205, 12, 194, 168, 39, 245, 60, 97, 120],
	
	                [41, 153, 158, 91, 61, 42, 142, 213, 97, 178, 100, 242], null,
	
	                [156, 97, 192, 252, 95, 9, 157, 119, 138, 45, 18, 186, 83, 185], null, null, null,
	
	                [83, 195, 100, 39, 188, 75, 66, 61, 241, 213, 109, 129, 94, 254, 225, 48, 90, 188], null,
	
	                [15, 195, 244, 9, 233, 71, 168, 2, 188, 160, 153, 145, 253, 79, 108, 82, 27, 174, 186, 172], null, null, null,
	
	                [52, 190, 88, 205, 109, 39, 176, 21, 155, 197, 251, 223, 155, 21, 5, 172, 254, 124, 12, 181, 184, 96, 50, 193], null, null, null,
	
	                [211, 231, 43, 97, 71, 96, 103, 174, 37, 151, 170, 53, 75, 34, 249, 121, 17, 138, 110, 213, 141, 136, 120, 151, 233, 168, 93, 255], null, null, null, null, null, null, null,
	
	                [245, 127, 242, 218, 130, 250, 162, 181, 102, 120, 84, 179, 220, 251, 80, 182, 229, 18, 2, 4, 68, 33, 101, 137, 95, 119, 115, 44, 175, 184, 59, 25, 225, 98, 81, 112], null, null, null, null, null,
	
	                [77, 193, 137, 31, 19, 38, 22, 153, 247, 105, 122, 2, 245, 133, 242, 8, 175, 95, 100, 9, 167, 105, 214, 111, 57, 121, 21, 1, 253, 57, 54, 101, 248, 202, 69, 50, 150, 177, 226, 5, 9, 5], null, null, null, null, null,
	
	                [245, 132, 172, 223, 96, 32, 117, 22, 238, 133, 238, 231, 205, 188, 237, 87, 191, 106, 16, 147, 118, 23, 37, 90, 170, 205, 131, 88, 120, 100, 66, 138, 186, 240, 82, 44, 176, 87, 187, 147, 160, 175, 69, 213, 92, 253, 225, 19], null, null, null, null, null, null, null,
	
	                [175, 9, 223, 238, 12, 17, 220, 208, 100, 29, 175, 170, 230, 192, 215, 235, 150, 159, 36, 223, 38, 200, 132, 54, 228, 146, 218, 234, 117, 203, 29, 232, 144, 238, 22, 150, 201, 117, 62, 207, 164, 13, 137, 245, 127, 67, 247, 28, 155, 43, 203, 107, 233, 53, 143, 46], null, null, null, null, null,
	
	                [242, 93, 169, 50, 144, 210, 39, 118, 202, 188, 201, 189, 143, 108, 196, 37, 185, 112, 134, 230, 245, 63, 197, 190, 250, 106, 185, 221, 175, 64, 114, 71, 161, 44, 147, 6, 27, 218, 51, 63, 87, 10, 40, 130, 188, 17, 163, 31, 176, 170, 4, 107, 232, 7, 94, 166, 224, 124, 86, 47, 11, 204], null, null, null, null, null,
	
	                [220, 228, 173, 89, 251, 149, 159, 56, 89, 33, 147, 244, 154, 36, 73, 127, 213, 136, 248, 180, 234, 197, 158, 177, 68, 122, 93, 213, 15, 160, 227, 236, 66, 139, 153, 185, 202, 167, 179, 25, 220, 232, 96, 210, 231, 136, 223, 239, 181, 241, 59, 52, 172, 25, 49, 232, 211, 189, 64, 54, 108, 153, 132, 63, 96, 103, 82, 186]];
	
	            function generateErrorCorrectionCode(message, m_start, m_len, e_len) {
	                var d = (0, _utils.fillArray)(new Array(e_len), 0);
	                var g = Coefficients[e_len];
	
	                for (var i = m_start; i < m_start + m_len; ++i) {
	                    var f = GFSum(d[e_len - 1], message[i]);
	
	                    for (var j = e_len - 1; j > 0; --j) {
	                        d[j] = GFSum(GFMultiply(f, g[j]), d[j - 1]);
	                    }
	
	                    d[0] = GFMultiply(g[0], f);
	                }
	
	                d.reverse();
	                return d;
	            }
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _ECC200Helper = __webpack_require__(8);
	
	            var _ECC200Helper2 = _interopRequireDefault(_ECC200Helper);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            var SymbolCharacterPlacement = function () {
	                function SymbolCharacterPlacement(data, nrow, ncol) {
	                    _classCallCheck(this, SymbolCharacterPlacement);
	
	                    this.nrow = nrow;
	                    this.ncol = ncol;
	                    this.data = data;
	                    this.matrix = _ECC200Helper2.default.createModules(nrow, ncol);
	                }
	
	                _createClass(SymbolCharacterPlacement, [{
	                    key: 'ECC200',
	                    value: function ECC200() {
	                        var nrow = this.nrow,
	                            ncol = this.ncol,
	                            matrix = this.matrix;
	
	                        var row = 4,
	                            col = 0,
	                            chr = 0;
	
	                        do {
	                            
	                            if (row == nrow && col == 0) {
	                                this.corner1(chr++);
	                            }
	                            if (row == nrow - 2 && col == 0 && ncol % 4) {
	                                this.corner2(chr++);
	                            }
	                            if (row == nrow - 2 && col == 0 && ncol % 8 == 4) {
	                                this.corner3(chr++);
	                            }
	                            if (row == nrow + 4 && col == 2 && !(ncol % 8)) {
	                                this.corner4(chr++);
	                            }
	
	                            
	                            do {
	                                if (row < nrow && col >= 0 && matrix[row][col] === null) {
	                                    this.utah(row, col, chr++);
	                                }
	                                row -= 2;
	                                col += 2;
	                            } while (row >= 0 && col < ncol);
	                            row += 1;
	                            col += 3;
	
	                            
	                            do {
	                                if (row >= 0 && col < ncol && matrix[row][col] === null) {
	                                    this.utah(row, col, chr++);
	                                }
	
	                                row += 2;
	                                col -= 2;
	                            } while (row < nrow && col >= 0);
	                            row += 3;
	                            col += 1;
	                        } while (row < nrow || col < ncol);
	
	                        
	                        if (!matrix[nrow - 1][ncol - 1]) {
	                            matrix[nrow - 1][ncol - 1] = matrix[nrow - 2][ncol - 2] = 1;
	                            matrix[nrow - 2][ncol - 1] = matrix[nrow - 1][ncol - 2] = 0;
	                        }
	
	                        return matrix;
	                    }
	                }, {
	                    key: 'module',
	                    value: function module(row, col, chr, bit) {
	                        var nrow = this.nrow,
	                            ncol = this.ncol,
	                            matrix = this.matrix,
	                            data = this.data;
	
	                        if (row < 0) {
	                            row += nrow;
	                            col += 4 - (nrow + 4) % 8;
	                        }
	                        if (col < 0) {
	                            col += ncol;
	                            row += 4 - (ncol + 4) % 8;
	                        }
	                        var bitMask = (1 << 8 - bit) % 256;
	                        matrix[row][col] = (data[chr] & bitMask) != 0 ? 1 : 0;
	                    }
	                }, {
	                    key: 'utah',
	                    value: function utah(row, col, chr) {
	                        this.module(row - 2, col - 2, chr, 1);
	                        this.module(row - 2, col - 1, chr, 2);
	                        this.module(row - 1, col - 2, chr, 3);
	                        this.module(row - 1, col - 1, chr, 4);
	                        this.module(row - 1, col, chr, 5);
	                        this.module(row, col - 2, chr, 6);
	                        this.module(row, col - 1, chr, 7);
	                        this.module(row, col, chr, 8);
	                    }
	
	                    
	
	                }, {
	                    key: 'corner1',
	                    value: function corner1(chr) {
	                        var nrow = this.nrow,
	                            ncol = this.ncol;
	
	                        this.module(nrow - 1, 0, chr, 1);
	                        this.module(nrow - 1, 1, chr, 2);
	                        this.module(nrow - 1, 2, chr, 3);
	                        this.module(0, ncol - 2, chr, 4);
	                        this.module(0, ncol - 1, chr, 5);
	                        this.module(1, ncol - 1, chr, 6);
	                        this.module(2, ncol - 1, chr, 7);
	                        this.module(3, ncol - 1, chr, 8);
	                    }
	                }, {
	                    key: 'corner2',
	                    value: function corner2(chr) {
	                        var nrow = this.nrow,
	                            ncol = this.ncol;
	
	                        this.module(nrow - 3, 0, chr, 1);
	                        this.module(nrow - 2, 0, chr, 2);
	                        this.module(nrow - 1, 0, chr, 3);
	                        this.module(0, ncol - 4, chr, 4);
	                        this.module(0, ncol - 3, chr, 5);
	                        this.module(0, ncol - 2, chr, 6);
	                        this.module(0, ncol - 1, chr, 7);
	                        this.module(1, ncol - 1, chr, 8);
	                    }
	                }, {
	                    key: 'corner3',
	                    value: function corner3(chr) {
	                        var nrow = this.nrow,
	                            ncol = this.ncol;
	
	                        this.module(nrow - 3, 0, chr, 1);
	                        this.module(nrow - 2, 0, chr, 2);
	                        this.module(nrow - 1, 0, chr, 3);
	                        this.module(0, ncol - 2, chr, 4);
	                        this.module(0, ncol - 1, chr, 5);
	                        this.module(1, ncol - 1, chr, 6);
	                        this.module(2, ncol - 1, chr, 7);
	                        this.module(3, ncol - 1, chr, 8);
	                    }
	                }, {
	                    key: 'corner4',
	                    value: function corner4(chr) {
	                        var nrow = this.nrow,
	                            ncol = this.ncol;
	
	                        this.module(nrow - 1, 0, chr, 1);
	                        this.module(nrow - 1, ncol - 1, chr, 2);
	                        this.module(0, ncol - 3, chr, 3);
	                        this.module(0, ncol - 2, chr, 4);
	                        this.module(0, ncol - 1, chr, 5);
	                        this.module(1, ncol - 3, chr, 6);
	                        this.module(1, ncol - 2, chr, 7);
	                        this.module(1, ncol - 1, chr, 8);
	                    }
	                }]);
	
	                return SymbolCharacterPlacement;
	            }();
	
	            exports.default = SymbolCharacterPlacement;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _ECC000_140Helper = __webpack_require__(43);
	
	            var _ECC000_140Helper2 = _interopRequireDefault(_ECC000_140Helper);
	
	            var _exceptions = __webpack_require__(1);
	
	            var _utils = __webpack_require__(0);
	
	            var _BitwiseIterator = __webpack_require__(44);
	
	            var _BitwiseIterator2 = _interopRequireDefault(_BitwiseIterator);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            var ECC000_140 = function () {
	                function ECC000_140(text, config) {
	                    _classCallCheck(this, ECC000_140);
	
	                    this.text = text;
	                    this.m_symbol = (0, _utils.str2Array)(text).map(function (c) {
	                        return c.charCodeAt(0);
	                    });
	                    this.symbolSize = config.ecc000_140SymbolSize;
	                    this.eccMode = config.eccMode;
	                    this.m_code = [];
	                    this.m_module = [];
	                }
	
	                _createClass(ECC000_140, [{
	                    key: 'getMatrix',
	                    value: function getMatrix() {
	                        var m_symbol = this.m_symbol,
	                            symbolSize = this.symbolSize,
	                            eccMode = this.eccMode,
	                            m_code = this.m_code;
	
	                        if (m_symbol.length > 569) {
	                            throw new _exceptions.TextTooLargeException();
	                        }
	
	                        var scheme = _ECC000_140Helper2.default.chooseEncodationScheme(m_symbol);
	
	                        var headerBits = eccMode === 'ECC000' ? 7 : 19;
	                        var dataBits = this.calculateDataBits(scheme);
	                        var totalBits = this.calculateTotalBits(scheme, headerBits, dataBits);
	                        var _symbolSize = this._symbolSize = _ECC000_140Helper2.default.getProperSymbolSize(symbolSize, totalBits);
	
	                        if (totalBits > _ECC000_140Helper2.default.getSymbolSizeInfo(_symbolSize)) {
	                            throw new _exceptions.TextTooLargeException();
	                        }
	                        dataBits += 5 + 16 + 9;
	
	                        var encodedData = [];
	                        var dataIterator = new _BitwiseIterator2.default(encodedData);
	                        dataIterator.putBitsMSF(_ECC000_140Helper2.default.Constants.getFormatID(scheme) << 27, 5);
	                        var crc = this.crcProcess(scheme);
	                        dataIterator.putBitsLSF(crc, 16);
	                        dataIterator.putBitsLSF(m_symbol.length, 9);
	                        this.encode(scheme, dataIterator);
	                        var symbolIterator = new _BitwiseIterator2.default(m_code);
	                        symbolIterator.putBitsLSF(_ECC000_140Helper2.default.getECC(eccMode).headerBits, headerBits);
	                        dataIterator.offset = 0;
	                        this.eccProcess(symbolIterator, dataIterator, dataBits);
	                        this.randomizeBits();
	                        return this.placeModule();
	                    }
	                }, {
	                    key: 'eccProcess',
	                    value: function eccProcess(symbolIterator, dataIterator, dataBits) {
	                        var eccMode = this.eccMode;
	                       
	
	                        if (eccMode === 'ECC000') {
	                            while (dataIterator.offset < dataBits) {
	                                symbolIterator.putBit(dataIterator.fetchBit());
	                            }
	                            return;
	                        }
	
	                        var info = _ECC000_140Helper2.default.getECC(eccMode).eccInfo;
	                        var registers = [info.inputBits];
	
	                        var done = false;
	                        do {
	                            done = false;
	
	                           
	                            for (var i = 0; i < info.inputBits; ++i) {
	                                registers[i] >>= 1;
	                                registers[i] = _ECC000_140Helper2.default.setBit(registers[i], info.registerBits[i], dataIterator.fetchBit());
	                            }
	
	                           
	                            var bit = false;
	                            for (var _i = 0; _i < info.outputBits; ++_i) {
	                                bit = false;
	                                for (var j = 0; j < info.outputMasks[_i].length; ++j) {
	                                    bit ^= (registers[info.outputMasks[_i][j].registerNumber] & info.outputMasks[_i][j].mask) != 0;
	                                }
	                                symbolIterator.putBit(bit);
	                            }
	
	                           
	                            if (dataIterator.offset >= dataBits) {
	                                var _i2 = 0;
	                                for (; _i2 < registers.length; ++_i2) {
	                                    if (registers[_i2] != 0) {
	                                        break;
	                                    }
	                                }
	                                if (_i2 == registers.length) {
	                                    done = true;
	                                }
	                            }
	                        } while (!done);
	                    }
	                }, {
	                    key: 'randomizeBits',
	                    value: function randomizeBits() {
	                        var m_code = this.m_code,
	                            _symbolSize = this._symbolSize;
	
	                        var bytes = ~~((_ECC000_140Helper2.default.getSymbolSizeInfo(_symbolSize) + 7) / 8);
	                        for (var i = 0; i < bytes; ++i) {
	                            m_code[i] ^= _ECC000_140Helper2.default.Constants.RandomizeBytes[i];
	                        }
	                    }
	                }, {
	                    key: 'crcProcess',
	                    value: function crcProcess(scheme) {
	                        var m_symbol = this.m_symbol;
	
	                        var register = 0;
	                        var bytes = [];
	                       
	                        bytes.push(_ECC000_140Helper2.default.Constants.getFormatID(scheme) + 1);
	                        bytes.push(0);
	                        bytes.push.apply(bytes, _toConsumableArray(m_symbol));
	                        var mask = 0x8408;
	
	                        for (var i = 0; i < bytes.length; ++i) {
	                            for (var b = 0; b < 8; ++b) {
	                                var lsb = (register & 1) != 0;
	                                register >>= 1;
	                                if ((bytes[i] & 1 << b) != 0 ^ lsb) {
	                                    register ^= mask;
	                                }
	                            }
	                        }
	
	                        return register;
	                    }
	                }, {
	                    key: 'calculateDataBits',
	                    value: function calculateDataBits(scheme) {
	                        var m_symbol = this.m_symbol;
	
	                        var groupLength = _ECC000_140Helper2.default.Constants.GroupLengths[scheme];
	                        return ~~(m_symbol.length / groupLength) * _ECC000_140Helper2.default.Constants.BitLengths[scheme][0] + (m_symbol.length % groupLength == 0 ? 0 : _ECC000_140Helper2.default.Constants.BitLengths[scheme][m_symbol.length % groupLength]);
	                    }
	                }, {
	                    key: 'calculateTotalBits',
	                    value: function calculateTotalBits(scheme, headerBits, dataBits) {
	                        var eccMode = this.eccMode;
	
	                        var unprotectedLength = 5 + 16 + 9 + dataBits;
	                        var info = _ECC000_140Helper2.default.getECC(eccMode).eccInfo;
	                        var protectedLength = (~~((unprotectedLength + info.inputBits - 1) / info.inputBits) + info.registerBits[info.inputBits - 1]) * info.outputBits;
	                        return headerBits + protectedLength;
	                    }
	                }, {
	                    key: 'encode',
	                    value: function encode(scheme, bf) {
	                        var m_symbol = this.m_symbol;
	
	                        var value = 0;
	                        var s_num = scheme;
	                        var g_len = _ECC000_140Helper2.default.Constants.GroupLengths[s_num];
	                        var baseValue = _ECC000_140Helper2.default.Constants.BaseValues[s_num];
	
	                        for (var i = 0; i < m_symbol.length;) {
	                            value = 0;
	                            var b = 1;
	                           
	                            do {
	                                value += _ECC000_140Helper2.default.getCodeWord(scheme, m_symbol[i++]) * b;
	                                b *= baseValue;
	                            } while (i % g_len != 0 && i < m_symbol.length);
	
	                            var e_len = i % g_len;
	                            bf.putBitsLSF(value, _ECC000_140Helper2.default.Constants.BitLengths[s_num][e_len]);
	                        }
	                    }
	                }, {
	                    key: 'placeModule',
	                    value: function placeModule() {
	                        var m_module = this.m_module,
	                            _symbolSize = this._symbolSize,
	                            m_code = this.m_code;
	
	                        var size = _ECC000_140Helper2.default.getSymbolSizeInfo(_symbolSize);
	                        var m_iterator = new _BitwiseIterator2.default(m_module);
	                        var c_iterator = new _BitwiseIterator2.default(m_code);
	                        var mapping = _ECC000_140Helper2.default.getModuleMapping(_symbolSize);
	                        for (var i = 0; i < size; ++i) {
	                            m_iterator.putBit(c_iterator.getBit(mapping[i]));
	                        }
	
	                        var symbolRows = _ECC000_140Helper2.default.getSymbolSizeValue(_symbolSize) * 2 + 9;
	                        var matrix = _ECC000_140Helper2.default.createModules(symbolRows);
	                        _ECC000_140Helper2.default.setFinder(matrix, symbolRows);
	                        _ECC000_140Helper2.default.setRegionData(matrix, symbolRows, m_iterator);
	
	                        return matrix;
	                    }
	                }]);
	
	                return ECC000_140;
	            }();
	
	            exports.default = ECC000_140;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _ECC200Helper = __webpack_require__(8);
	
	            var _ECC200Helper2 = _interopRequireDefault(_ECC200Helper);
	
	            var _utils = __webpack_require__(0);
	
	            var _exceptions = __webpack_require__(1);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            var EncodationScheme = {
	                Base11: 0,
	                Base27: 1,
	                Base37: 2,
	                Base41: 3,
	                ASCII: 4,
	                Byte: 5
	            };
	
	            var ASCIIMax = 0x7f;
	
	            function getEncodationScheme(value) {
	                if (value >= 48 && value <= 57 || value == 32) return EncodationScheme.Base11;
	                if (value >= 65 && value <= 90) return EncodationScheme.Base27;
	                if (value >= 44 && value <= 47) return EncodationScheme.Base41;
	                if (value <= ASCIIMax) return EncodationScheme.ASCII;
	                return EncodationScheme.Byte;
	            }
	
	            function chooseEncodationScheme(data) {
	                var scheme = EncodationScheme.Base11;
	                for (var i = 0, len = data.length; i < len; i++) {
	                    scheme = updateEncodationScheme(scheme, getEncodationScheme(data[i]));
	                    if (scheme === EncodationScheme.Byte) {
	                        break;
	                    }
	                }
	                return scheme;
	            }
	
	            function updateEncodationScheme(oldScheme, newScheme) {
	                if (oldScheme == newScheme) {
	                    return oldScheme;
	                }
	                if (oldScheme == EncodationScheme.Byte || newScheme == EncodationScheme.Byte) {
	                    return EncodationScheme.Byte;
	                }
	
	                var scheme = oldScheme;
	                switch (oldScheme) {
	                    case EncodationScheme.Base11:
	                        if (newScheme == EncodationScheme.Base27) {
	                            scheme = EncodationScheme.Base37;
	                        } else if (newScheme > scheme) {
	                            scheme = newScheme;
	                        }
	                        break;
	                    case EncodationScheme.Base27:
	                        if (newScheme == EncodationScheme.Base11) {
	                            scheme = EncodationScheme.Base37;
	                        } else if (newScheme > scheme) {
	                            scheme = newScheme;
	                        }
	                        break;
	                    case EncodationScheme.Base37:
	                    case EncodationScheme.Base41:
	                        if (newScheme > scheme) {
	                            scheme = newScheme;
	                        }
	                        break;
	                }
	                return scheme;
	            }
	            function mod256(num) {
	                return num % 256;
	            }
	            function getCodeWord(scheme, value) {
	                if (scheme == EncodationScheme.Byte) {
	                    return value;
	                }
	                if (scheme == EncodationScheme.ASCII) {
	                    return mod256(value & 0x7f);
	                }
	
	                var result = 0;
	                if (value == 32) {
	                    return result;
	                }
	                if (value >= 48 && value <= 57) {
	                    result = mod256(value - 47);
	                }
	                if (scheme == EncodationScheme.Base11) {
	                    return result;
	                }
	                result += 26;
	                if (value >= 65 && value <= 90) {
	                    result = mod256(value - 64);
	                }
	                if (scheme != EncodationScheme.Base41) {
	                    return result;
	                }
	                switch (value) {
	                    case 44:
	                        return 38;
	                    case 45:
	                        return 39;
	                    case 46:
	                        return 37;
	                    case 47:
	                        return 40;
	                }
	                return result;
	            }
	
	            function setBit(value, bitLS, bitValue) {
	                var mask = 1 << bitLS;
	                value &= ~mask;
	                if (bitValue) {
	                    value |= mask;
	                }
	
	                return value;
	            }
	
	            function RegisterMask(registerNumber, bitLSF) {
	                this.registerNumber = registerNumber;
	                this.mask = 1 << bitLSF;
	            }
	
	            var Constants = {
	                BaseValues: [11, 27, 37, 41, 128, 256],
	                GroupLengths: [6, 5, 4, 4, 1, 1],
	                HeaderBits: [126, 57358, 465934, 523278, 517006],
	                BitLengths: [[21, 4, 7, 11, 14, 18, 21], [24, 5, 10, 15, 20, 24], [21, 6, 11, 16, 21], [22, 6, 11, 17, 22], [7, 7], [8, 8]],
	                SymbolCapacities: function () {
	                    var capacities = [];
	                    for (var i = 7; i < 50; i += 2) {
	                        capacities.push(i * i);
	                    }
	                    return capacities;
	                }(),
	                getFormatID: function getFormatID(scheme) {
	                    if (scheme === EncodationScheme.Base37) {
	                        ++scheme;
	                    } else if (scheme === EncodationScheme.Base41) {
	                        --scheme;
	                    }
	                    return scheme;
	                },
	                ECCInfos: [{ inputBits: 1, registerBits: [0], outputBits: 1, outputMasks: null }, {
	                    inputBits: 3,
	                    registerBits: [3, 3, 3],
	                    outputBits: 4,
	                    outputMasks: [[new RegisterMask(0, 3), new RegisterMask(1, 0), new RegisterMask(2, 2), new RegisterMask(2, 1), new RegisterMask(2, 0)], [new RegisterMask(0, 1), new RegisterMask(0, 0), new RegisterMask(1, 3), new RegisterMask(1, 2), new RegisterMask(1, 0)], [new RegisterMask(0, 2), new RegisterMask(0, 1), new RegisterMask(0, 0), new RegisterMask(1, 2), new RegisterMask(2, 3), new RegisterMask(2, 2)], [new RegisterMask(0, 3), new RegisterMask(0, 2), new RegisterMask(1, 3), new RegisterMask(1, 2), new RegisterMask(1, 1), new RegisterMask(2, 3), new RegisterMask(2, 2), new RegisterMask(2, 0)]]
	                }, {
	                    inputBits: 2,
	                    registerBits: [10, 11],
	                    outputBits: 3,
	                    outputMasks: [[new RegisterMask(0, 10), new RegisterMask(0, 9), new RegisterMask(0, 7), new RegisterMask(0, 5), new RegisterMask(0, 4), new RegisterMask(0, 3), new RegisterMask(0, 0), new RegisterMask(1, 8), new RegisterMask(1, 4), new RegisterMask(1, 3), new RegisterMask(1, 0)], [new RegisterMask(0, 9), new RegisterMask(0, 6), new RegisterMask(0, 5), new RegisterMask(0, 2), new RegisterMask(0, 1), new RegisterMask(0, 0), new RegisterMask(1, 11), new RegisterMask(1, 8), new RegisterMask(1, 5), new RegisterMask(1, 3), new RegisterMask(1, 2)], [new RegisterMask(0, 10), new RegisterMask(0, 5), new RegisterMask(0, 4), new RegisterMask(0, 3), new RegisterMask(1, 11), new RegisterMask(1, 10), new RegisterMask(1, 9), new RegisterMask(1, 7), new RegisterMask(1, 4), new RegisterMask(1, 2), new RegisterMask(1, 0)]]
	                }, {
	                    inputBits: 1,
	                    registerBits: [15],
	                    outputBits: 2,
	                    outputMasks: [[new RegisterMask(0, 15), new RegisterMask(0, 13), new RegisterMask(0, 10), new RegisterMask(0, 9), new RegisterMask(0, 8), new RegisterMask(0, 7), new RegisterMask(0, 6), new RegisterMask(0, 5), new RegisterMask(0, 0)], [new RegisterMask(0, 15), new RegisterMask(0, 14), new RegisterMask(0, 12), new RegisterMask(0, 11), new RegisterMask(0, 9), new RegisterMask(0, 4), new RegisterMask(0, 2), new RegisterMask(0, 1), new RegisterMask(0, 0)]]
	                }, {
	                    inputBits: 1,
	                    registerBits: [13],
	                    outputBits: 4,
	                    outputMasks: [[new RegisterMask(0, 13), new RegisterMask(0, 9), new RegisterMask(0, 6), new RegisterMask(0, 3), new RegisterMask(0, 1), new RegisterMask(0, 0)], [new RegisterMask(0, 13), new RegisterMask(0, 10), new RegisterMask(0, 9), new RegisterMask(0, 6), new RegisterMask(0, 5), new RegisterMask(0, 4), new RegisterMask(0, 3), new RegisterMask(0, 2), new RegisterMask(0, 0)], [new RegisterMask(0, 13), new RegisterMask(0, 12), new RegisterMask(0, 11), new RegisterMask(0, 9), new RegisterMask(0, 8), new RegisterMask(0, 6), new RegisterMask(0, 4), new RegisterMask(0, 2), new RegisterMask(0, 1), new RegisterMask(0, 0)], [new RegisterMask(0, 13), new RegisterMask(0, 12), new RegisterMask(0, 11), new RegisterMask(0, 9), new RegisterMask(0, 8), new RegisterMask(0, 6), new RegisterMask(0, 4), new RegisterMask(0, 3), new RegisterMask(0, 2), new RegisterMask(0, 1), new RegisterMask(0, 0)]]
	                }],
	                RandomizeBytes: [0x05, 0xff, 0xc7, 0x31, 0x88, 0xa8, 0x83, 0x9c, 0x64, 0x87, 0x9f, 0x64, 0xb3, 0xe0, 0x4d, 0x9c, 0x80, 0x29, 0x3a, 0x90, 0xb3, 0x8b, 0x9e, 0x90, 0x45, 0xbf, 0xf5, 0x68, 0x4b, 0x08, 0xcf, 0x44, 0xb8, 0xd4, 0x4c, 0x5b, 0xa0, 0xab, 0x72, 0x52, 0x1c, 0xe4, 0xd2, 0x74, 0xa4, 0xda, 0x8a, 0x08, 0xfa, 0xa7, 0xc7, 0xdd, 0x00, 0x30, 0xa9, 0xe6, 0x64, 0xab, 0xd5, 0x8b, 0xed, 0x9c, 0x79, 0xf8, 0x08, 0xd1, 0x8b, 0xc6, 0x22, 0x64, 0x0b, 0x33, 0x43, 0xd0, 0x80, 0xd4, 0x44, 0x95, 0x2e, 0x6f, 0x5e, 0x13, 0x8d, 0x47, 0x62, 0x06, 0xeb, 0x80, 0x82, 0xc9, 0x41, 0xd5, 0x73, 0x8a, 0x30, 0x23, 0x24, 0xe3, 0x7f, 0xb2, 0xa8, 0x0b, 0xed, 0x38, 0x42, 0x4c, 0xd7, 0xb0, 0xce, 0x98, 0xbd, 0xe1, 0xd5, 0xe4, 0xc3, 0x1d, 0x15, 0x4a, 0xcf, 0xd1, 0x1f, 0x39, 0x26, 0x18, 0x93, 0xfc, 0x19, 0xb2, 0x2d, 0xab, 0xf2, 0x6e, 0xa1, 0x9f, 0xaf, 0xd0, 0x8a, 0x2b, 0xa0, 0x56, 0xb0, 0x41, 0x6d, 0x43, 0xa4, 0x63, 0xf3, 0xaa, 0x7d, 0xaf, 0x35, 0x57, 0xc2, 0x94, 0x4a, 0x65, 0x0b, 0x41, 0xde, 0xb8, 0xe2, 0x30, 0x12, 0x27, 0x9b, 0x66, 0x2b, 0x34, 0x5b, 0xb8, 0x99, 0xe8, 0x28, 0x71, 0xd0, 0x95, 0x6b, 0x07, 0x4d, 0x3c, 0x7a, 0xb3, 0xe5, 0x29, 0xb3, 0xba, 0x8c, 0xcc, 0x2d, 0xe0, 0xc9, 0xc0, 0x22, 0xec, 0x4c, 0xde, 0xf8, 0x58, 0x07, 0xfc, 0x19, 0xf2, 0x64, 0xe2, 0xc3, 0xe2, 0xd8, 0xb9, 0xfd, 0x67, 0xa0, 0xbc, 0xf5, 0x2e, 0xc9, 0x49, 0x75, 0x62, 0x82, 0x27, 0x10, 0xf4, 0x19, 0x6f, 0x49, 0xf7, 0xb3, 0x84, 0x14, 0xea, 0xeb, 0xe1, 0x2a, 0x31, 0xab, 0x47, 0x7d, 0x08, 0x29, 0xac, 0xbb, 0x72, 0xfa, 0xfa, 0x62, 0xb8, 0xc8, 0xd3, 0x86, 0x89, 0x95, 0xfd, 0xdf, 0xcc, 0x9c, 0xad, 0xf1, 0xd4, 0x6c, 0x64, 0x23, 0x24, 0x2a, 0x56, 0x1f, 0x36, 0xeb, 0xb7, 0xd6, 0xff, 0xda, 0x57, 0xf4, 0x50, 0x79, 0x08, 0x0],
	                ModuleMapping: [[2, 45, 10, 38, 24, 21, 1, 12, 40, 26, 5, 33, 19, 47, 22, 31, 29, 15, 43, 8, 36, 34, 20, 48, 13, 41, 27, 6, 44, 9, 37, 23, 17, 30, 16, 39, 25, 4, 32, 18, 46, 11, 0, 28, 14, 42, 7, 35, 3],
	                   
	                    [2, 19, 55, 10, 46, 28, 64, 73, 1, 62, 17, 53, 35, 71, 8, 80, 44, 26, 49, 31, 67, 4, 76, 40, 22, 58, 13, 69, 6, 78, 42, 24, 60, 15, 51, 33, 74, 38, 20, 56, 11, 47, 29, 65, 37, 25, 61, 16, 52, 34, 70, 7, 79, 43, 12, 48, 30, 66, 63, 75, 39, 21, 57, 32, 68, 5, 77, 41, 23, 59, 14, 50, 0, 72, 36, 18, 54, 9, 45, 27, 3],
	                   
	                    [2, 26, 114, 70, 15, 103, 59, 37, 81, 4, 1, 117, 73, 18, 106, 62, 40, 84, 7, 95, 51, 29, 12, 100, 56, 34, 78, 92, 89, 45, 23, 111, 67, 65, 43, 87, 10, 98, 54, 32, 120, 76, 21, 109, 82, 5, 93, 49, 27, 115, 71, 16, 104, 60, 38, 96, 52, 30, 118, 74, 19, 107, 63, 41, 85, 8, 24, 112, 68, 13, 101, 57, 35, 79, 48, 90, 46, 75, 20, 108, 64, 42, 86, 9, 97, 53, 31, 119, 102, 58, 36, 80, 77, 91, 47, 25, 113, 69, 14, 39, 83, 6, 94, 50, 28, 116, 72, 17, 105, 61, 0, 88, 44, 22, 110, 66, 11, 99, 55, 33, 3],
	                   
	                    [2, 159, 29, 133, 81, 16, 120, 68, 42, 146, 94, 91, 1, 37, 141, 89, 24, 128, 76, 50, 154, 102, 11, 115, 63, 167, 83, 18, 122, 70, 44, 148, 96, 5, 109, 57, 161, 31, 135, 125, 73, 47, 151, 99, 8, 112, 60, 164, 34, 138, 86, 21, 40, 144, 92, 107, 105, 53, 157, 27, 131, 79, 14, 118, 66, 103, 12, 116, 64, 168, 38, 142, 90, 25, 129, 77, 51, 155, 110, 58, 162, 32, 136, 84, 19, 123, 71, 45, 149, 97, 6, 165, 35, 139, 87, 22, 126, 74, 48, 152, 100, 9, 113, 61, 132, 80, 15, 119, 67, 41, 145, 93, 55, 106, 54, 158, 28, 23, 127, 75, 49, 153, 101, 10, 114, 62, 166, 36, 140, 88, 69, 43, 147, 95, 4, 108, 56, 160, 30, 134, 82, 17, 121, 150, 98, 7, 111, 59, 163, 33, 137, 85, 20, 124, 72, 46, 0, 104, 52, 156, 26, 130, 78, 13, 117, 65, 39, 143, 3],
	                   
	                    [2, 187, 37, 157, 97, 217, 22, 142, 82, 202, 52, 172, 112, 7, 1, 41, 161, 101, 221, 26, 146, 86, 206, 56, 176, 116, 11, 131, 71, 191, 93, 213, 18, 138, 78, 198, 48, 168, 108, 105, 123, 63, 183, 33, 153, 28, 148, 88, 208, 58, 178, 118, 13, 133, 73, 193, 43, 163, 103, 223, 80, 200, 50, 170, 110, 5, 125, 65, 185, 35, 155, 95, 215, 20, 140, 54, 174, 114, 9, 129, 69, 189, 39, 159, 99, 219, 24, 144, 84, 204, 106, 127, 121, 61, 181, 31, 151, 91, 211, 16, 136, 76, 196, 46, 166, 134, 74, 194, 44, 164, 104, 224, 29, 149, 89, 209, 59, 179, 119, 14, 186, 36, 156, 96, 216, 21, 141, 81, 201, 51, 171, 111, 6, 126, 66, 160, 100, 220, 25, 145, 85, 205, 55, 175, 115, 10, 130, 70, 190, 40, 212, 17, 137, 77, 197, 47, 167, 107, 67, 122, 62, 182, 32, 152, 92, 147, 87, 207, 57, 177, 117, 12, 132, 72, 192, 42, 162, 102, 222, 27, 199, 49, 169, 109, 4, 124, 64, 184, 34, 154, 94, 214, 19, 139, 79, 173, 113, 8, 128, 68, 188, 38, 158, 98, 218, 23, 143, 83, 203, 53, 0, 120, 60, 180, 30, 150, 90, 210, 15, 135, 75, 195, 45, 165, 3],
	                   
	                    [2, 69, 205, 35, 171, 103, 239, 18, 154, 86, 222, 52, 188, 120, 256, 273, 1, 220, 50, 186, 118, 254, 33, 169, 101, 237, 67, 203, 135, 271, 16, 288, 152, 84, 178, 110, 246, 25, 161, 93, 229, 59, 195, 127, 263, 8, 280, 144, 76, 212, 42, 250, 29, 165, 97, 233, 63, 199, 131, 267, 12, 284, 148, 80, 216, 46, 182, 114, 157, 89, 225, 55, 191, 123, 259, 4, 276, 140, 72, 208, 38, 174, 106, 242, 21, 235, 65, 201, 133, 269, 14, 286, 150, 82, 218, 48, 184, 116, 252, 31, 167, 99, 193, 125, 261, 6, 278, 142, 74, 210, 40, 176, 108, 244, 23, 159, 91, 227, 57, 265, 10, 282, 146, 78, 214, 44, 180, 112, 248, 27, 163, 95, 231, 61, 197, 129, 274, 138, 70, 206, 36, 172, 104, 240, 19, 155, 87, 223, 53, 189, 121, 257, 137, 83, 219, 49, 185, 117, 253, 32, 168, 100, 236, 66, 202, 134, 270, 15, 287, 151, 41, 177, 109, 245, 24, 160, 92, 228, 58, 194, 126, 262, 7, 279, 143, 75, 211, 113, 249, 28, 164, 96, 232, 62, 198, 130, 266, 11, 283, 147, 79, 215, 45, 181, 20, 156, 88, 224, 54, 190, 122, 258, 255, 275, 139, 71, 207, 37, 173, 105, 241, 98, 234, 64, 200, 132, 268, 13, 285, 149, 81, 217, 47, 183, 115, 251, 30, 166, 56, 192, 124, 260, 5, 277, 141, 73, 209, 39, 175, 107, 243, 22, 158, 90, 226, 128, 264, 9, 281, 145, 77, 213, 43, 179, 111, 247, 26, 162, 94, 230, 60, 196, 0, 272, 136, 68, 204, 34, 170, 102, 238, 17, 153, 85, 221, 51, 187, 119, 3],
	                   
	                    [2, 82, 234, 44, 348, 196, 120, 272, 25, 329, 177, 101, 253, 63, 215, 139, 291, 6, 1, 239, 49, 353, 201, 125, 277, 30, 334, 182, 106, 258, 68, 220, 144, 296, 11, 315, 163, 87, 343, 191, 115, 267, 20, 324, 172, 96, 248, 58, 210, 134, 286, 310, 305, 153, 77, 229, 39, 132, 284, 37, 341, 189, 113, 265, 75, 227, 151, 303, 18, 322, 170, 94, 246, 56, 360, 208, 28, 332, 180, 104, 256, 66, 218, 142, 294, 9, 313, 161, 85, 237, 47, 351, 199, 123, 275, 185, 109, 261, 71, 223, 147, 299, 14, 318, 166, 90, 242, 52, 356, 204, 128, 280, 33, 337, 251, 61, 213, 137, 289, 4, 308, 156, 80, 232, 42, 346, 194, 118, 270, 23, 327, 175, 99, 225, 149, 301, 16, 320, 168, 92, 244, 54, 358, 206, 130, 282, 35, 339, 187, 111, 263, 73, 292, 7, 311, 159, 83, 235, 45, 349, 197, 121, 273, 26, 330, 178, 102, 254, 64, 216, 140, 316, 164, 88, 240, 50, 354, 202, 126, 278, 31, 335, 183, 107, 259, 69, 221, 145, 297, 12, 78, 230, 40, 344, 192, 116, 268, 21, 325, 173, 97, 249, 59, 211, 135, 287, 158, 306, 154, 55, 359, 207, 131, 283, 36, 340, 188, 112, 264, 74, 226, 150, 302, 17, 321, 169, 93, 245, 198, 122, 274, 27, 331, 179, 103, 255, 65, 217, 141, 293, 8, 312, 160, 84, 236, 46, 350, 279, 32, 336, 184, 108, 260, 70, 222, 146, 298, 13, 317, 165, 89, 241, 51, 355, 203, 127, 326, 174, 98, 250, 60, 212, 136, 288, 285, 307, 155, 79, 231, 41, 345, 193, 117, 269, 22, 110, 262, 72, 224, 148, 300, 15, 319, 167, 91, 243, 53, 357, 205, 129, 281, 34, 338, 186, 62, 214, 138, 290, 5, 309, 157, 81, 233, 43, 347, 195, 119, 271, 24, 328, 176, 100, 252, 143, 295, 10, 314, 162, 86, 238, 48, 352, 200, 124, 276, 29, 333, 181, 105, 257, 67, 219, 0, 304, 152, 76, 228, 38, 342, 190, 114, 266, 19, 323, 171, 95, 247, 57, 209, 133, 3],
	                   
	                    [2, 88, 424, 256, 46, 382, 214, 130, 298, 25, 361, 193, 109, 277, 67, 403, 235, 151, 319, 4, 1, 437, 269, 59, 395, 227, 143, 311, 38, 374, 206, 122, 290, 80, 416, 248, 164, 332, 17, 353, 185, 101, 49, 385, 217, 133, 301, 28, 364, 196, 112, 280, 70, 406, 238, 154, 322, 7, 343, 175, 91, 427, 259, 222, 138, 306, 33, 369, 201, 117, 285, 75, 411, 243, 159, 327, 12, 348, 180, 96, 432, 264, 54, 390, 295, 22, 358, 190, 106, 274, 64, 400, 232, 148, 316, 340, 337, 169, 85, 421, 253, 43, 379, 211, 127, 377, 209, 125, 293, 83, 419, 251, 167, 335, 20, 356, 188, 104, 440, 272, 62, 398, 230, 146, 314, 41, 115, 283, 73, 409, 241, 157, 325, 10, 346, 178, 94, 430, 262, 52, 388, 220, 136, 304, 31, 367, 199, 78, 414, 246, 162, 330, 15, 351, 183, 99, 435, 267, 57, 393, 225, 141, 309, 36, 372, 204, 120, 288, 236, 152, 320, 5, 341, 173, 89, 425, 257, 47, 383, 215, 131, 299, 26, 362, 194, 110, 278, 68, 404, 333, 18, 354, 186, 102, 438, 270, 60, 396, 228, 144, 312, 39, 375, 207, 123, 291, 81, 417, 249, 165, 344, 176, 92, 428, 260, 50, 386, 218, 134, 302, 29, 365, 197, 113, 281, 71, 407, 239, 155, 323, 8, 97, 433, 265, 55, 391, 223, 139, 307, 34, 370, 202, 118, 286, 76, 412, 244, 160, 328, 13, 349, 181, 254, 44, 380, 212, 128, 296, 23, 359, 191, 107, 275, 65, 401, 233, 149, 317, 172, 338, 170, 86, 422, 397, 229, 145, 313, 40, 376, 208, 124, 292, 82, 418, 250, 166, 334, 19, 355, 187, 103, 439, 271, 61, 135, 303, 30, 366, 198, 114, 282, 72, 408, 240, 156, 324, 9, 345, 177, 93, 429, 261, 51, 387, 219, 35, 371, 203, 119, 287, 77, 413, 245, 161, 329, 14, 350, 182, 98, 434, 266, 56, 392, 224, 140, 308, 192, 108, 276, 66, 402, 234, 150, 318, 315, 339, 171, 87, 423, 255, 45, 381, 213, 129, 297, 24, 360, 289, 79, 415, 247, 163, 331, 16, 352, 184, 100, 436, 268, 58, 394, 226, 142, 310, 37, 373, 205, 121, 405, 237, 153, 321, 6, 342, 174, 90, 426, 258, 48, 384, 216, 132, 300, 27, 363, 195, 111, 279, 69, 158, 326, 11, 347, 179, 95, 431, 263, 53, 389, 221, 137, 305, 32, 368, 200, 116, 284, 74, 410, 242, 0, 336, 168, 84, 420, 252, 42, 378, 210, 126, 294, 21, 357, 189, 105, 273, 63, 399, 231, 147, 3],
	                   
	                    [2, 102, 470, 286, 56, 424, 240, 148, 516, 332, 33, 401, 217, 125, 493, 309, 79, 447, 263, 171, 355, 10, 1, 476, 292, 62, 430, 246, 154, 522, 338, 39, 407, 223, 131, 499, 315, 85, 453, 269, 177, 361, 16, 384, 200, 108, 50, 418, 234, 142, 510, 326, 27, 395, 211, 119, 487, 303, 73, 441, 257, 165, 349, 4, 372, 188, 96, 464, 280, 249, 157, 525, 341, 42, 410, 226, 134, 502, 318, 88, 456, 272, 180, 364, 19, 387, 203, 111, 479, 295, 65, 433, 513, 329, 30, 398, 214, 122, 490, 306, 76, 444, 260, 168, 352, 7, 375, 191, 99, 467, 283, 53, 421, 237, 145, 36, 404, 220, 128, 496, 312, 82, 450, 266, 174, 358, 13, 381, 197, 105, 473, 289, 59, 427, 243, 151, 519, 335, 208, 116, 484, 300, 70, 438, 254, 162, 346, 378, 369, 185, 93, 461, 277, 47, 415, 231, 139, 507, 323, 24, 392, 505, 321, 91, 459, 275, 183, 367, 22, 390, 206, 114, 482, 298, 68, 436, 252, 160, 528, 344, 45, 413, 229, 137, 80, 448, 264, 172, 356, 11, 379, 195, 103, 471, 287, 57, 425, 241, 149, 517, 333, 34, 402, 218, 126, 494, 310, 270, 178, 362, 17, 385, 201, 109, 477, 293, 63, 431, 247, 155, 523, 339, 40, 408, 224, 132, 500, 316, 86, 454, 350, 5, 373, 189, 97, 465, 281, 51, 419, 235, 143, 511, 327, 28, 396, 212, 120, 488, 304, 74, 442, 258, 166, 388, 204, 112, 480, 296, 66, 434, 250, 158, 526, 342, 43, 411, 227, 135, 503, 319, 89, 457, 273, 181, 365, 20, 100, 468, 284, 54, 422, 238, 146, 514, 330, 31, 399, 215, 123, 491, 307, 77, 445, 261, 169, 353, 8, 376, 192, 290, 60, 428, 244, 152, 520, 336, 37, 405, 221, 129, 497, 313, 83, 451, 267, 175, 359, 14, 382, 198, 106, 474, 416, 232, 140, 508, 324, 25, 393, 209, 117, 485, 301, 71, 439, 255, 163, 347, 194, 370, 186, 94, 462, 278, 48, 159, 527, 343, 44, 412, 228, 136, 504, 320, 90, 458, 274, 182, 366, 21, 389, 205, 113, 481, 297, 67, 435, 251, 331, 32, 400, 216, 124, 492, 308, 78, 446, 262, 170, 354, 9, 377, 193, 101, 469, 285, 55, 423, 239, 147, 515, 406, 222, 130, 498, 314, 84, 452, 268, 176, 360, 15, 383, 199, 107, 475, 291, 61, 429, 245, 153, 521, 337, 38, 118, 486, 302, 72, 440, 256, 164, 348, 345, 371, 187, 95, 463, 279, 49, 417, 233, 141, 509, 325, 26, 394, 210, 317, 87, 455, 271, 179, 363, 18, 386, 202, 110, 478, 294, 64, 432, 248, 156, 524, 340, 41, 409, 225, 133, 501, 443, 259, 167, 351, 6, 374, 190, 98, 466, 282, 52, 420, 236, 144, 512, 328, 29, 397, 213, 121, 489, 305, 75, 173, 357, 12, 380, 196, 104, 472, 288, 58, 426, 242, 150, 518, 334, 35, 403, 219, 127, 495, 311, 81, 449, 265, 0, 368, 184, 92, 460, 276, 46, 414, 230, 138, 506, 322, 23, 391, 207, 115, 483, 299, 69, 437, 253, 161, 3],
	                   
	                    [2, 603, 103, 503, 303, 53, 453, 253, 153, 553, 353, 28, 428, 228, 128, 528, 328, 78, 478, 278, 178, 578, 378, 375, 1, 123, 523, 323, 73, 473, 273, 173, 573, 373, 48, 448, 248, 148, 548, 348, 98, 498, 298, 198, 598, 398, 23, 423, 223, 623, 311, 61, 461, 261, 161, 561, 361, 36, 436, 236, 136, 536, 336, 86, 486, 286, 186, 586, 386, 11, 411, 211, 611, 111, 511, 467, 267, 167, 567, 367, 42, 442, 242, 142, 542, 342, 92, 492, 292, 192, 592, 392, 17, 417, 217, 617, 117, 517, 317, 67, 155, 555, 355, 30, 430, 230, 130, 530, 330, 80, 480, 280, 180, 580, 380, 5, 405, 205, 605, 105, 505, 305, 55, 455, 255, 370, 45, 445, 245, 145, 545, 345, 95, 495, 295, 195, 595, 395, 20, 420, 220, 620, 120, 520, 320, 70, 470, 270, 170, 570, 433, 233, 133, 533, 333, 83, 483, 283, 183, 583, 383, 8, 408, 208, 608, 108, 508, 308, 58, 458, 258, 158, 558, 358, 33, 139, 539, 339, 89, 489, 289, 189, 589, 389, 14, 414, 214, 614, 114, 514, 314, 64, 464, 264, 164, 564, 364, 39, 439, 239, 326, 76, 476, 276, 176, 576, 376, 403, 401, 201, 601, 101, 501, 301, 51, 451, 251, 151, 551, 351, 26, 426, 226, 126, 526, 499, 299, 199, 599, 399, 24, 424, 224, 624, 124, 524, 324, 74, 474, 274, 174, 574, 374, 49, 449, 249, 149, 549, 349, 99, 187, 587, 387, 12, 412, 212, 612, 112, 512, 312, 62, 462, 262, 162, 562, 362, 37, 437, 237, 137, 537, 337, 87, 487, 287, 393, 18, 418, 218, 618, 118, 518, 318, 68, 468, 268, 168, 568, 368, 43, 443, 243, 143, 543, 343, 93, 493, 293, 193, 593, 406, 206, 606, 106, 506, 306, 56, 456, 256, 156, 556, 356, 31, 431, 231, 131, 531, 331, 81, 481, 281, 181, 581, 381, 6, 621, 121, 521, 321, 71, 471, 271, 171, 571, 371, 46, 446, 246, 146, 546, 346, 96, 496, 296, 196, 596, 396, 21, 421, 221, 509, 309, 59, 459, 259, 159, 559, 359, 34, 434, 234, 134, 534, 334, 84, 484, 284, 184, 584, 384, 9, 409, 209, 609, 109, 65, 465, 265, 165, 565, 365, 40, 440, 240, 140, 540, 340, 90, 490, 290, 190, 590, 390, 15, 415, 215, 615, 115, 515, 315, 252, 152, 552, 352, 27, 427, 227, 127, 527, 327, 77, 477, 277, 177, 577, 377, 203, 402, 202, 602, 102, 502, 302, 52, 452, 572, 372, 47, 447, 247, 147, 547, 347, 97, 497, 297, 197, 597, 397, 22, 422, 222, 622, 122, 522, 322, 72, 472, 272, 172, 35, 435, 235, 135, 535, 335, 85, 485, 285, 185, 585, 385, 10, 410, 210, 610, 110, 510, 310, 60, 460, 260, 160, 560, 360, 241, 141, 541, 341, 91, 491, 291, 191, 591, 391, 16, 416, 216, 616, 116, 516, 316, 66, 466, 266, 166, 566, 366, 41, 441, 529, 329, 79, 479, 279, 179, 579, 379, 4, 404, 204, 604, 104, 504, 304, 54, 454, 254, 154, 554, 354, 29, 429, 229, 129, 94, 494, 294, 194, 594, 394, 19, 419, 219, 619, 119, 519, 319, 69, 469, 269, 169, 569, 369, 44, 444, 244, 144, 544, 344, 282, 182, 582, 382, 7, 407, 207, 607, 107, 507, 307, 57, 457, 257, 157, 557, 357, 32, 432, 232, 132, 532, 332, 82, 482, 588, 388, 13, 413, 213, 613, 113, 513, 313, 63, 463, 263, 163, 563, 363, 38, 438, 238, 138, 538, 338, 88, 488, 288, 188, 0, 400, 200, 600, 100, 500, 300, 50, 450, 250, 150, 550, 350, 25, 425, 225, 125, 525, 325, 75, 475, 275, 175, 575, 3],
	                   
	                    [2, 658, 118, 550, 334, 64, 496, 280, 712, 172, 604, 388, 37, 469, 253, 685, 145, 577, 361, 91, 523, 307, 199, 631, 415, 10, 1, 125, 557, 341, 71, 503, 287, 719, 179, 611, 395, 44, 476, 260, 692, 152, 584, 368, 98, 530, 314, 206, 638, 422, 17, 449, 233, 665, 327, 57, 489, 273, 705, 165, 597, 381, 30, 462, 246, 678, 138, 570, 354, 84, 516, 300, 192, 624, 408, 405, 435, 219, 651, 111, 543, 511, 295, 727, 187, 619, 403, 52, 484, 268, 700, 160, 592, 376, 106, 538, 322, 214, 646, 430, 25, 457, 241, 673, 133, 565, 349, 79, 714, 174, 606, 390, 39, 471, 255, 687, 147, 579, 363, 93, 525, 309, 201, 633, 417, 12, 444, 228, 660, 120, 552, 336, 66, 498, 282, 613, 397, 46, 478, 262, 694, 154, 586, 370, 100, 532, 316, 208, 640, 424, 19, 451, 235, 667, 127, 559, 343, 73, 505, 289, 721, 181, 32, 464, 248, 680, 140, 572, 356, 86, 518, 302, 194, 626, 410, 5, 437, 221, 653, 113, 545, 329, 59, 491, 275, 707, 167, 599, 383, 265, 697, 157, 589, 373, 103, 535, 319, 211, 643, 427, 22, 454, 238, 670, 130, 562, 346, 76, 508, 292, 724, 184, 616, 400, 49, 481, 143, 575, 359, 89, 521, 305, 197, 629, 413, 8, 440, 224, 656, 116, 548, 332, 62, 494, 278, 710, 170, 602, 386, 35, 467, 251, 683, 366, 96, 528, 312, 204, 636, 420, 15, 447, 231, 663, 123, 555, 339, 69, 501, 285, 717, 177, 609, 393, 42, 474, 258, 690, 150, 582, 514, 298, 190, 622, 406, 442, 433, 217, 649, 109, 541, 325, 55, 487, 271, 703, 163, 595, 379, 28, 460, 244, 676, 136, 568, 352, 82, 215, 647, 431, 26, 458, 242, 674, 134, 566, 350, 80, 512, 296, 728, 188, 620, 404, 53, 485, 269, 701, 161, 593, 377, 107, 539, 323, 418, 13, 445, 229, 661, 121, 553, 337, 67, 499, 283, 715, 175, 607, 391, 40, 472, 256, 688, 148, 580, 364, 94, 526, 310, 202, 634, 452, 236, 668, 128, 560, 344, 74, 506, 290, 722, 182, 614, 398, 47, 479, 263, 695, 155, 587, 371, 101, 533, 317, 209, 641, 425, 20, 654, 114, 546, 330, 60, 492, 276, 708, 168, 600, 384, 33, 465, 249, 681, 141, 573, 357, 87, 519, 303, 195, 627, 411, 6, 438, 222, 563, 347, 77, 509, 293, 725, 185, 617, 401, 50, 482, 266, 698, 158, 590, 374, 104, 536, 320, 212, 644, 428, 23, 455, 239, 671, 131, 63, 495, 279, 711, 171, 603, 387, 36, 468, 252, 684, 144, 576, 360, 90, 522, 306, 198, 630, 414, 9, 441, 225, 657, 117, 549, 333, 286, 718, 178, 610, 394, 43, 475, 259, 691, 151, 583, 367, 97, 529, 313, 205, 637, 421, 16, 448, 232, 664, 124, 556, 340, 70, 502, 164, 596, 380, 29, 461, 245, 677, 137, 569, 353, 83, 515, 299, 191, 623, 407, 226, 434, 218, 650, 110, 542, 326, 56, 488, 272, 704, 402, 51, 483, 267, 699, 159, 591, 375, 105, 537, 321, 213, 645, 429, 24, 456, 240, 672, 132, 564, 348, 78, 510, 294, 726, 186, 618, 470, 254, 686, 146, 578, 362, 92, 524, 308, 200, 632, 416, 11, 443, 227, 659, 119, 551, 335, 65, 497, 281, 713, 173, 605, 389, 38, 693, 153, 585, 369, 99, 531, 315, 207, 639, 423, 18, 450, 234, 666, 126, 558, 342, 72, 504, 288, 720, 180, 612, 396, 45, 477, 261, 571, 355, 85, 517, 301, 193, 625, 409, 4, 436, 220, 652, 112, 544, 328, 58, 490, 274, 706, 166, 598, 382, 31, 463, 247, 679, 139, 102, 534, 318, 210, 642, 426, 21, 453, 237, 669, 129, 561, 345, 75, 507, 291, 723, 183, 615, 399, 48, 480, 264, 696, 156, 588, 372, 304, 196, 628, 412, 7, 439, 223, 655, 115, 547, 331, 61, 493, 277, 709, 169, 601, 385, 34, 466, 250, 682, 142, 574, 358, 88, 520, 635, 419, 14, 446, 230, 662, 122, 554, 338, 68, 500, 284, 716, 176, 608, 392, 41, 473, 257, 689, 149, 581, 365, 95, 527, 311, 203, 0, 432, 216, 648, 108, 540, 324, 54, 486, 270, 702, 162, 594, 378, 27, 459, 243, 675, 135, 567, 351, 81, 513, 297, 189, 621, 3],
	                   
	                    [2, 703, 123, 587, 355, 819, 65, 529, 297, 761, 181, 645, 413, 36, 500, 268, 732, 152, 616, 384, 94, 558, 326, 790, 210, 674, 442, 7, 1, 141, 605, 373, 837, 83, 547, 315, 779, 199, 663, 431, 54, 518, 286, 750, 170, 634, 402, 112, 576, 344, 808, 228, 692, 460, 25, 489, 257, 721, 359, 823, 69, 533, 301, 765, 185, 649, 417, 40, 504, 272, 736, 156, 620, 388, 98, 562, 330, 794, 214, 678, 446, 11, 475, 243, 707, 127, 591, 76, 540, 308, 772, 192, 656, 424, 47, 511, 279, 743, 163, 627, 395, 105, 569, 337, 801, 221, 685, 453, 18, 482, 250, 714, 134, 598, 366, 830, 293, 757, 177, 641, 409, 32, 496, 264, 728, 148, 612, 380, 90, 554, 322, 786, 206, 670, 438, 435, 467, 235, 699, 119, 583, 351, 815, 61, 525, 201, 665, 433, 56, 520, 288, 752, 172, 636, 404, 114, 578, 346, 810, 230, 694, 462, 27, 491, 259, 723, 143, 607, 375, 839, 85, 549, 317, 781, 419, 42, 506, 274, 738, 158, 622, 390, 100, 564, 332, 796, 216, 680, 448, 13, 477, 245, 709, 129, 593, 361, 825, 71, 535, 303, 767, 187, 651, 513, 281, 745, 165, 629, 397, 107, 571, 339, 803, 223, 687, 455, 20, 484, 252, 716, 136, 600, 368, 832, 78, 542, 310, 774, 194, 658, 426, 49, 730, 150, 614, 382, 92, 556, 324, 788, 208, 672, 440, 5, 469, 237, 701, 121, 585, 353, 817, 63, 527, 295, 759, 179, 643, 411, 34, 498, 266, 632, 400, 110, 574, 342, 806, 226, 690, 458, 23, 487, 255, 719, 139, 603, 371, 835, 81, 545, 313, 777, 197, 661, 429, 52, 516, 284, 748, 168, 96, 560, 328, 792, 212, 676, 444, 9, 473, 241, 705, 125, 589, 357, 821, 67, 531, 299, 763, 183, 647, 415, 38, 502, 270, 734, 154, 618, 386, 335, 799, 219, 683, 451, 16, 480, 248, 712, 132, 596, 364, 828, 74, 538, 306, 770, 190, 654, 422, 45, 509, 277, 741, 161, 625, 393, 103, 567, 204, 668, 436, 471, 465, 233, 697, 117, 581, 349, 813, 59, 523, 291, 755, 175, 639, 407, 30, 494, 262, 726, 146, 610, 378, 88, 552, 320, 784, 463, 28, 492, 260, 724, 144, 608, 376, 840, 86, 550, 318, 782, 202, 666, 434, 57, 521, 289, 753, 173, 637, 405, 115, 579, 347, 811, 231, 695, 478, 246, 710, 130, 594, 362, 826, 72, 536, 304, 768, 188, 652, 420, 43, 507, 275, 739, 159, 623, 391, 101, 565, 333, 797, 217, 681, 449, 14, 717, 137, 601, 369, 833, 79, 543, 311, 775, 195, 659, 427, 50, 514, 282, 746, 166, 630, 398, 108, 572, 340, 804, 224, 688, 456, 21, 485, 253, 586, 354, 818, 64, 528, 296, 760, 180, 644, 412, 35, 499, 267, 731, 151, 615, 383, 93, 557, 325, 789, 209, 673, 441, 6, 470, 238, 702, 122, 836, 82, 546, 314, 778, 198, 662, 430, 53, 517, 285, 749, 169, 633, 401, 111, 575, 343, 807, 227, 691, 459, 24, 488, 256, 720, 140, 604, 372, 532, 300, 764, 184, 648, 416, 39, 503, 271, 735, 155, 619, 387, 97, 561, 329, 793, 213, 677, 445, 10, 474, 242, 706, 126, 590, 358, 822, 68, 771, 191, 655, 423, 46, 510, 278, 742, 162, 626, 394, 104, 568, 336, 800, 220, 684, 452, 17, 481, 249, 713, 133, 597, 365, 829, 75, 539, 307, 640, 408, 31, 495, 263, 727, 147, 611, 379, 89, 553, 321, 785, 205, 669, 437, 239, 466, 234, 698, 118, 582, 350, 814, 60, 524, 292, 756, 176, 55, 519, 287, 751, 171, 635, 403, 113, 577, 345, 809, 229, 693, 461, 26, 490, 258, 722, 142, 606, 374, 838, 84, 548, 316, 780, 200, 664, 432, 273, 737, 157, 621, 389, 99, 563, 331, 795, 215, 679, 447, 12, 476, 244, 708, 128, 592, 360, 824, 70, 534, 302, 766, 186, 650, 418, 41, 505, 164, 628, 396, 106, 570, 338, 802, 222, 686, 454, 19, 483, 251, 715, 135, 599, 367, 831, 77, 541, 309, 773, 193, 657, 425, 48, 512, 280, 744, 381, 91, 555, 323, 787, 207, 671, 439, 4, 468, 236, 700, 120, 584, 352, 816, 62, 526, 294, 758, 178, 642, 410, 33, 497, 265, 729, 149, 613, 573, 341, 805, 225, 689, 457, 22, 486, 254, 718, 138, 602, 370, 834, 80, 544, 312, 776, 196, 660, 428, 51, 515, 283, 747, 167, 631, 399, 109, 791, 211, 675, 443, 8, 472, 240, 704, 124, 588, 356, 820, 66, 530, 298, 762, 182, 646, 414, 37, 501, 269, 733, 153, 617, 385, 95, 559, 327, 682, 450, 15, 479, 247, 711, 131, 595, 363, 827, 73, 537, 305, 769, 189, 653, 421, 44, 508, 276, 740, 160, 624, 392, 102, 566, 334, 798, 218, 0, 464, 232, 696, 116, 580, 348, 812, 58, 522, 290, 754, 174, 638, 406, 29, 493, 261, 725, 145, 609, 377, 87, 551, 319, 783, 203, 667, 3],
	                   
	                    [2, 759, 139, 635, 387, 883, 77, 573, 325, 821, 201, 697, 449, 945, 46, 542, 294, 790, 170, 666, 418, 914, 108, 604, 356, 852, 232, 728, 480, 15, 1, 147, 643, 395, 891, 85, 581, 333, 829, 209, 705, 457, 953, 54, 550, 302, 798, 178, 674, 426, 922, 116, 612, 364, 860, 240, 736, 488, 23, 519, 271, 767, 379, 875, 69, 565, 317, 813, 193, 689, 441, 937, 38, 534, 286, 782, 162, 658, 410, 906, 100, 596, 348, 844, 224, 720, 472, 7, 503, 255, 751, 131, 627, 89, 585, 337, 833, 213, 709, 461, 957, 58, 554, 306, 802, 182, 678, 430, 926, 120, 616, 368, 864, 244, 740, 492, 27, 523, 275, 771, 151, 647, 399, 895, 321, 817, 197, 693, 445, 941, 42, 538, 290, 786, 166, 662, 414, 910, 104, 600, 352, 848, 228, 724, 476, 11, 507, 259, 755, 135, 631, 383, 879, 73, 569, 205, 701, 453, 949, 50, 546, 298, 794, 174, 670, 422, 918, 112, 608, 360, 856, 236, 732, 484, 19, 515, 267, 763, 143, 639, 391, 887, 81, 577, 329, 825, 437, 933, 34, 530, 282, 778, 158, 654, 406, 902, 96, 592, 344, 840, 220, 716, 468, 465, 499, 251, 747, 127, 623, 375, 871, 65, 561, 313, 809, 189, 685, 60, 556, 308, 804, 184, 680, 432, 928, 122, 618, 370, 866, 246, 742, 494, 29, 525, 277, 773, 153, 649, 401, 897, 91, 587, 339, 835, 215, 711, 463, 959, 292, 788, 168, 664, 416, 912, 106, 602, 354, 850, 230, 726, 478, 13, 509, 261, 757, 137, 633, 385, 881, 75, 571, 323, 819, 199, 695, 447, 943, 44, 540, 176, 672, 424, 920, 114, 610, 362, 858, 238, 734, 486, 21, 517, 269, 765, 145, 641, 393, 889, 83, 579, 331, 827, 207, 703, 455, 951, 52, 548, 300, 796, 408, 904, 98, 594, 346, 842, 222, 718, 470, 5, 501, 253, 749, 129, 625, 377, 873, 67, 563, 315, 811, 191, 687, 439, 935, 36, 532, 284, 780, 160, 656, 118, 614, 366, 862, 242, 738, 490, 25, 521, 273, 769, 149, 645, 397, 893, 87, 583, 335, 831, 211, 707, 459, 955, 56, 552, 304, 800, 180, 676, 428, 924, 350, 846, 226, 722, 474, 9, 505, 257, 753, 133, 629, 381, 877, 71, 567, 319, 815, 195, 691, 443, 939, 40, 536, 288, 784, 164, 660, 412, 908, 102, 598, 234, 730, 482, 17, 513, 265, 761, 141, 637, 389, 885, 79, 575, 327, 823, 203, 699, 451, 947, 48, 544, 296, 792, 172, 668, 420, 916, 110, 606, 358, 854, 466, 511, 497, 249, 745, 125, 621, 373, 869, 63, 559, 311, 807, 187, 683, 435, 931, 32, 528, 280, 776, 156, 652, 404, 900, 94, 590, 342, 838, 218, 714, 526, 278, 774, 154, 650, 402, 898, 92, 588, 340, 836, 216, 712, 464, 960, 61, 557, 309, 805, 185, 681, 433, 929, 123, 619, 371, 867, 247, 743, 495, 30, 758, 138, 634, 386, 882, 76, 572, 324, 820, 200, 696, 448, 944, 45, 541, 293, 789, 169, 665, 417, 913, 107, 603, 355, 851, 231, 727, 479, 14, 510, 262, 642, 394, 890, 84, 580, 332, 828, 208, 704, 456, 952, 53, 549, 301, 797, 177, 673, 425, 921, 115, 611, 363, 859, 239, 735, 487, 22, 518, 270, 766, 146, 874, 68, 564, 316, 812, 192, 688, 440, 936, 37, 533, 285, 781, 161, 657, 409, 905, 99, 595, 347, 843, 223, 719, 471, 6, 502, 254, 750, 130, 626, 378, 584, 336, 832, 212, 708, 460, 956, 57, 553, 305, 801, 181, 677, 429, 925, 119, 615, 367, 863, 243, 739, 491, 26, 522, 274, 770, 150, 646, 398, 894, 88, 816, 196, 692, 444, 940, 41, 537, 289, 785, 165, 661, 413, 909, 103, 599, 351, 847, 227, 723, 475, 10, 506, 258, 754, 134, 630, 382, 878, 72, 568, 320, 700, 452, 948, 49, 545, 297, 793, 173, 669, 421, 917, 111, 607, 359, 855, 235, 731, 483, 18, 514, 266, 762, 142, 638, 390, 886, 80, 576, 328, 824, 204, 932, 33, 529, 281, 777, 157, 653, 405, 901, 95, 591, 343, 839, 219, 715, 467, 263, 498, 250, 746, 126, 622, 374, 870, 64, 560, 312, 808, 188, 684, 436, 555, 307, 803, 183, 679, 431, 927, 121, 617, 369, 865, 245, 741, 493, 28, 524, 276, 772, 152, 648, 400, 896, 90, 586, 338, 834, 214, 710, 462, 958, 59, 787, 167, 663, 415, 911, 105, 601, 353, 849, 229, 725, 477, 12, 508, 260, 756, 136, 632, 384, 880, 74, 570, 322, 818, 198, 694, 446, 942, 43, 539, 291, 671, 423, 919, 113, 609, 361, 857, 237, 733, 485, 20, 516, 268, 764, 144, 640, 392, 888, 82, 578, 330, 826, 206, 702, 454, 950, 51, 547, 299, 795, 175, 903, 97, 593, 345, 841, 221, 717, 469, 4, 500, 252, 748, 128, 624, 376, 872, 66, 562, 314, 810, 190, 686, 438, 934, 35, 531, 283, 779, 159, 655, 407, 613, 365, 861, 241, 737, 489, 24, 520, 272, 768, 148, 644, 396, 892, 86, 582, 334, 830, 210, 706, 458, 954, 55, 551, 303, 799, 179, 675, 427, 923, 117, 845, 225, 721, 473, 8, 504, 256, 752, 132, 628, 380, 876, 70, 566, 318, 814, 194, 690, 442, 938, 39, 535, 287, 783, 163, 659, 411, 907, 101, 597, 349, 729, 481, 16, 512, 264, 760, 140, 636, 388, 884, 78, 574, 326, 822, 202, 698, 450, 946, 47, 543, 295, 791, 171, 667, 419, 915, 109, 605, 357, 853, 233, 0, 496, 248, 744, 124, 620, 372, 868, 62, 558, 310, 806, 186, 682, 434, 930, 31, 527, 279, 775, 155, 651, 403, 899, 93, 589, 341, 837, 217, 713, 3],
	                   
	                    [2, 265, 793, 133, 661, 397, 925, 67, 595, 331, 859, 199, 727, 463, 991, 34, 562, 298, 826, 166, 694, 430, 958, 100, 628, 364, 892, 232, 760, 496, 1024, 1057, 1, 824, 164, 692, 428, 956, 98, 626, 362, 890, 230, 758, 494, 1022, 65, 593, 329, 857, 197, 725, 461, 989, 131, 659, 395, 923, 263, 791, 527, 1055, 32, 1088, 560, 296, 676, 412, 940, 82, 610, 346, 874, 214, 742, 478, 1006, 49, 577, 313, 841, 181, 709, 445, 973, 115, 643, 379, 907, 247, 775, 511, 1039, 16, 1072, 544, 280, 808, 148, 948, 90, 618, 354, 882, 222, 750, 486, 1014, 57, 585, 321, 849, 189, 717, 453, 981, 123, 651, 387, 915, 255, 783, 519, 1047, 24, 1080, 552, 288, 816, 156, 684, 420, 602, 338, 866, 206, 734, 470, 998, 41, 569, 305, 833, 173, 701, 437, 965, 107, 635, 371, 899, 239, 767, 503, 1031, 8, 1064, 536, 272, 800, 140, 668, 404, 932, 74, 886, 226, 754, 490, 1018, 61, 589, 325, 853, 193, 721, 457, 985, 127, 655, 391, 919, 259, 787, 523, 1051, 28, 1084, 556, 292, 820, 160, 688, 424, 952, 94, 622, 358, 738, 474, 1002, 45, 573, 309, 837, 177, 705, 441, 969, 111, 639, 375, 903, 243, 771, 507, 1035, 12, 1068, 540, 276, 804, 144, 672, 408, 936, 78, 606, 342, 870, 210, 1010, 53, 581, 317, 845, 185, 713, 449, 977, 119, 647, 383, 911, 251, 779, 515, 1043, 20, 1076, 548, 284, 812, 152, 680, 416, 944, 86, 614, 350, 878, 218, 746, 482, 565, 301, 829, 169, 697, 433, 961, 103, 631, 367, 895, 235, 763, 499, 1027, 4, 1060, 532, 268, 796, 136, 664, 400, 928, 70, 598, 334, 862, 202, 730, 466, 994, 37, 855, 195, 723, 459, 987, 129, 657, 393, 921, 261, 789, 525, 1053, 30, 1086, 558, 294, 822, 162, 690, 426, 954, 96, 624, 360, 888, 228, 756, 492, 1020, 63, 591, 327, 707, 443, 971, 113, 641, 377, 905, 245, 773, 509, 1037, 14, 1070, 542, 278, 806, 146, 674, 410, 938, 80, 608, 344, 872, 212, 740, 476, 1004, 47, 575, 311, 839, 179, 979, 121, 649, 385, 913, 253, 781, 517, 1045, 22, 1078, 550, 286, 814, 154, 682, 418, 946, 88, 616, 352, 880, 220, 748, 484, 1012, 55, 583, 319, 847, 187, 715, 451, 633, 369, 897, 237, 765, 501, 1029, 6, 1062, 534, 270, 798, 138, 666, 402, 930, 72, 600, 336, 864, 204, 732, 468, 996, 39, 567, 303, 831, 171, 699, 435, 963, 105, 917, 257, 785, 521, 1049, 26, 1082, 554, 290, 818, 158, 686, 422, 950, 92, 620, 356, 884, 224, 752, 488, 1016, 59, 587, 323, 851, 191, 719, 455, 983, 125, 653, 389, 769, 505, 1033, 10, 1066, 538, 274, 802, 142, 670, 406, 934, 76, 604, 340, 868, 208, 736, 472, 1000, 43, 571, 307, 835, 175, 703, 439, 967, 109, 637, 373, 901, 241, 1041, 18, 1074, 546, 282, 810, 150, 678, 414, 942, 84, 612, 348, 876, 216, 744, 480, 1008, 51, 579, 315, 843, 183, 711, 447, 975, 117, 645, 381, 909, 249, 777, 513, 1058, 530, 266, 794, 134, 662, 398, 926, 68, 596, 332, 860, 200, 728, 464, 992, 35, 563, 299, 827, 167, 695, 431, 959, 101, 629, 365, 893, 233, 761, 497, 1025, 529, 295, 823, 163, 691, 427, 955, 97, 625, 361, 889, 229, 757, 493, 1021, 64, 592, 328, 856, 196, 724, 460, 988, 130, 658, 394, 922, 262, 790, 526, 1054, 31, 1087, 559, 147, 675, 411, 939, 81, 609, 345, 873, 213, 741, 477, 1005, 48, 576, 312, 840, 180, 708, 444, 972, 114, 642, 378, 906, 246, 774, 510, 1038, 15, 1071, 543, 279, 807, 419, 947, 89, 617, 353, 881, 221, 749, 485, 1013, 56, 584, 320, 848, 188, 716, 452, 980, 122, 650, 386, 914, 254, 782, 518, 1046, 23, 1079, 551, 287, 815, 155, 683, 73, 601, 337, 865, 205, 733, 469, 997, 40, 568, 304, 832, 172, 700, 436, 964, 106, 634, 370, 898, 238, 766, 502, 1030, 7, 1063, 535, 271, 799, 139, 667, 403, 931, 357, 885, 225, 753, 489, 1017, 60, 588, 324, 852, 192, 720, 456, 984, 126, 654, 390, 918, 258, 786, 522, 1050, 27, 1083, 555, 291, 819, 159, 687, 423, 951, 93, 621, 209, 737, 473, 1001, 44, 572, 308, 836, 176, 704, 440, 968, 110, 638, 374, 902, 242, 770, 506, 1034, 11, 1067, 539, 275, 803, 143, 671, 407, 935, 77, 605, 341, 869, 481, 1009, 52, 580, 316, 844, 184, 712, 448, 976, 118, 646, 382, 910, 250, 778, 514, 1042, 19, 1075, 547, 283, 811, 151, 679, 415, 943, 85, 613, 349, 877, 217, 745, 36, 564, 300, 828, 168, 696, 432, 960, 102, 630, 366, 894, 234, 762, 498, 1026, 1023, 1059, 531, 267, 795, 135, 663, 399, 927, 69, 597, 333, 861, 201, 729, 465, 993, 326, 854, 194, 722, 458, 986, 128, 656, 392, 920, 260, 788, 524, 1052, 29, 1085, 557, 293, 821, 161, 689, 425, 953, 95, 623, 359, 887, 227, 755, 491, 1019, 62, 590, 178, 706, 442, 970, 112, 640, 376, 904, 244, 772, 508, 1036, 13, 1069, 541, 277, 805, 145, 673, 409, 937, 79, 607, 343, 871, 211, 739, 475, 1003, 46, 574, 310, 838, 450, 978, 120, 648, 384, 912, 252, 780, 516, 1044, 21, 1077, 549, 285, 813, 153, 681, 417, 945, 87, 615, 351, 879, 219, 747, 483, 1011, 54, 582, 318, 846, 186, 714, 104, 632, 368, 896, 236, 764, 500, 1028, 5, 1061, 533, 269, 797, 137, 665, 401, 929, 71, 599, 335, 863, 203, 731, 467, 995, 38, 566, 302, 830, 170, 698, 434, 962, 388, 916, 256, 784, 520, 1048, 25, 1081, 553, 289, 817, 157, 685, 421, 949, 91, 619, 355, 883, 223, 751, 487, 1015, 58, 586, 322, 850, 190, 718, 454, 982, 124, 652, 240, 768, 504, 1032, 9, 1065, 537, 273, 801, 141, 669, 405, 933, 75, 603, 339, 867, 207, 735, 471, 999, 42, 570, 306, 834, 174, 702, 438, 966, 108, 636, 372, 900, 512, 1040, 17, 1073, 545, 281, 809, 149, 677, 413, 941, 83, 611, 347, 875, 215, 743, 479, 1007, 50, 578, 314, 842, 182, 710, 446, 974, 116, 644, 380, 908, 248, 776, 0, 1056, 528, 264, 792, 132, 660, 396, 924, 66, 594, 330, 858, 198, 726, 462, 990, 33, 561, 297, 825, 165, 693, 429, 957, 99, 627, 363, 891, 231, 759, 495, 3],
	                   
	                    [2, 290, 850, 150, 710, 430, 990, 80, 1200, 640, 360, 920, 220, 780, 500, 1060, 45, 1165, 605, 325, 885, 185, 745, 465, 1025, 115, 675, 395, 955, 255, 815, 535, 1095, 10, 1, 859, 159, 719, 439, 999, 89, 1209, 649, 369, 929, 229, 789, 509, 1069, 54, 1174, 614, 334, 894, 194, 754, 474, 1034, 124, 684, 404, 964, 264, 824, 544, 1104, 19, 1139, 579, 299, 701, 421, 981, 71, 1191, 631, 351, 911, 211, 771, 491, 1051, 36, 1156, 596, 316, 876, 176, 736, 456, 1016, 106, 666, 386, 946, 246, 806, 526, 1086, 1130, 1121, 561, 281, 841, 141, 1014, 104, 1224, 664, 384, 944, 244, 804, 524, 1084, 69, 1189, 629, 349, 909, 209, 769, 489, 1049, 139, 699, 419, 979, 279, 839, 559, 1119, 34, 1154, 594, 314, 874, 174, 734, 454, 1207, 647, 367, 927, 227, 787, 507, 1067, 52, 1172, 612, 332, 892, 192, 752, 472, 1032, 122, 682, 402, 962, 262, 822, 542, 1102, 17, 1137, 577, 297, 857, 157, 717, 437, 997, 87, 376, 936, 236, 796, 516, 1076, 61, 1181, 621, 341, 901, 201, 761, 481, 1041, 131, 691, 411, 971, 271, 831, 551, 1111, 26, 1146, 586, 306, 866, 166, 726, 446, 1006, 96, 1216, 656, 218, 778, 498, 1058, 43, 1163, 603, 323, 883, 183, 743, 463, 1023, 113, 673, 393, 953, 253, 813, 533, 1093, 8, 1128, 568, 288, 848, 148, 708, 428, 988, 78, 1198, 638, 358, 918, 520, 1080, 65, 1185, 625, 345, 905, 205, 765, 485, 1045, 135, 695, 415, 975, 275, 835, 555, 1115, 30, 1150, 590, 310, 870, 170, 730, 450, 1010, 100, 1220, 660, 380, 940, 240, 800, 48, 1168, 608, 328, 888, 188, 748, 468, 1028, 118, 678, 398, 958, 258, 818, 538, 1098, 13, 1133, 573, 293, 853, 153, 713, 433, 993, 83, 1203, 643, 363, 923, 223, 783, 503, 1063, 617, 337, 897, 197, 757, 477, 1037, 127, 687, 407, 967, 267, 827, 547, 1107, 22, 1142, 582, 302, 862, 162, 722, 442, 1002, 92, 1212, 652, 372, 932, 232, 792, 512, 1072, 57, 1177, 879, 179, 739, 459, 1019, 109, 669, 389, 949, 249, 809, 529, 1089, 4, 1124, 564, 284, 844, 144, 704, 424, 984, 74, 1194, 634, 354, 914, 214, 774, 494, 1054, 39, 1159, 599, 319, 767, 487, 1047, 137, 697, 417, 977, 277, 837, 557, 1117, 32, 1152, 592, 312, 872, 172, 732, 452, 1012, 102, 1222, 662, 382, 942, 242, 802, 522, 1082, 67, 1187, 627, 347, 907, 207, 1030, 120, 680, 400, 960, 260, 820, 540, 1100, 15, 1135, 575, 295, 855, 155, 715, 435, 995, 85, 1205, 645, 365, 925, 225, 785, 505, 1065, 50, 1170, 610, 330, 890, 190, 750, 470, 689, 409, 969, 269, 829, 549, 1109, 24, 1144, 584, 304, 864, 164, 724, 444, 1004, 94, 1214, 654, 374, 934, 234, 794, 514, 1074, 59, 1179, 619, 339, 899, 199, 759, 479, 1039, 129, 951, 251, 811, 531, 1091, 6, 1126, 566, 286, 846, 146, 706, 426, 986, 76, 1196, 636, 356, 916, 216, 776, 496, 1056, 41, 1161, 601, 321, 881, 181, 741, 461, 1021, 111, 671, 391, 833, 553, 1113, 28, 1148, 588, 308, 868, 168, 728, 448, 1008, 98, 1218, 658, 378, 938, 238, 798, 518, 1078, 63, 1183, 623, 343, 903, 203, 763, 483, 1043, 133, 693, 413, 973, 273, 1096, 11, 1131, 571, 291, 851, 151, 711, 431, 991, 81, 1201, 641, 361, 921, 221, 781, 501, 1061, 46, 1166, 606, 326, 886, 186, 746, 466, 1026, 116, 676, 396, 956, 256, 816, 536, 1140, 580, 300, 860, 160, 720, 440, 1000, 90, 1210, 650, 370, 930, 230, 790, 510, 1070, 55, 1175, 615, 335, 895, 195, 755, 475, 1035, 125, 685, 405, 965, 265, 825, 545, 1105, 20, 282, 842, 142, 702, 422, 982, 72, 1192, 632, 352, 912, 212, 772, 492, 1052, 37, 1157, 597, 317, 877, 177, 737, 457, 1017, 107, 667, 387, 947, 247, 807, 527, 1087, 570, 1122, 562, 173, 733, 453, 1013, 103, 1223, 663, 383, 943, 243, 803, 523, 1083, 68, 1188, 628, 348, 908, 208, 768, 488, 1048, 138, 698, 418, 978, 278, 838, 558, 1118, 33, 1153, 593, 313, 873, 436, 996, 86, 1206, 646, 366, 926, 226, 786, 506, 1066, 51, 1171, 611, 331, 891, 191, 751, 471, 1031, 121, 681, 401, 961, 261, 821, 541, 1101, 16, 1136, 576, 296, 856, 156, 716, 95, 1215, 655, 375, 935, 235, 795, 515, 1075, 60, 1180, 620, 340, 900, 200, 760, 480, 1040, 130, 690, 410, 970, 270, 830, 550, 1110, 25, 1145, 585, 305, 865, 165, 725, 445, 1005, 637, 357, 917, 217, 777, 497, 1057, 42, 1162, 602, 322, 882, 182, 742, 462, 1022, 112, 672, 392, 952, 252, 812, 532, 1092, 7, 1127, 567, 287, 847, 147, 707, 427, 987, 77, 1197, 939, 239, 799, 519, 1079, 64, 1184, 624, 344, 904, 204, 764, 484, 1044, 134, 694, 414, 974, 274, 834, 554, 1114, 29, 1149, 589, 309, 869, 169, 729, 449, 1009, 99, 1219, 659, 379, 782, 502, 1062, 47, 1167, 607, 327, 887, 187, 747, 467, 1027, 117, 677, 397, 957, 257, 817, 537, 1097, 12, 1132, 572, 292, 852, 152, 712, 432, 992, 82, 1202, 642, 362, 922, 222, 1071, 56, 1176, 616, 336, 896, 196, 756, 476, 1036, 126, 686, 406, 966, 266, 826, 546, 1106, 21, 1141, 581, 301, 861, 161, 721, 441, 1001, 91, 1211, 651, 371, 931, 231, 791, 511, 1158, 598, 318, 878, 178, 738, 458, 1018, 108, 668, 388, 948, 248, 808, 528, 1088, 1085, 1123, 563, 283, 843, 143, 703, 423, 983, 73, 1193, 633, 353, 913, 213, 773, 493, 1053, 38, 346, 906, 206, 766, 486, 1046, 136, 696, 416, 976, 276, 836, 556, 1116, 31, 1151, 591, 311, 871, 171, 731, 451, 1011, 101, 1221, 661, 381, 941, 241, 801, 521, 1081, 66, 1186, 626, 189, 749, 469, 1029, 119, 679, 399, 959, 259, 819, 539, 1099, 14, 1134, 574, 294, 854, 154, 714, 434, 994, 84, 1204, 644, 364, 924, 224, 784, 504, 1064, 49, 1169, 609, 329, 889, 478, 1038, 128, 688, 408, 968, 268, 828, 548, 1108, 23, 1143, 583, 303, 863, 163, 723, 443, 1003, 93, 1213, 653, 373, 933, 233, 793, 513, 1073, 58, 1178, 618, 338, 898, 198, 758, 110, 670, 390, 950, 250, 810, 530, 1090, 5, 1125, 565, 285, 845, 145, 705, 425, 985, 75, 1195, 635, 355, 915, 215, 775, 495, 1055, 40, 1160, 600, 320, 880, 180, 740, 460, 1020, 412, 972, 272, 832, 552, 1112, 27, 1147, 587, 307, 867, 167, 727, 447, 1007, 97, 1217, 657, 377, 937, 237, 797, 517, 1077, 62, 1182, 622, 342, 902, 202, 762, 482, 1042, 132, 692, 254, 814, 534, 1094, 9, 1129, 569, 289, 849, 149, 709, 429, 989, 79, 1199, 639, 359, 919, 219, 779, 499, 1059, 44, 1164, 604, 324, 884, 184, 744, 464, 1024, 114, 674, 394, 954, 543, 1103, 18, 1138, 578, 298, 858, 158, 718, 438, 998, 88, 1208, 648, 368, 928, 228, 788, 508, 1068, 53, 1173, 613, 333, 893, 193, 753, 473, 1033, 123, 683, 403, 963, 263, 823, 0, 1120, 560, 280, 840, 140, 700, 420, 980, 70, 1190, 630, 350, 910, 210, 770, 490, 1050, 35, 1155, 595, 315, 875, 175, 735, 455, 1015, 105, 665, 385, 945, 245, 805, 525, 3],
	                   
	                    [2, 302, 894, 154, 1338, 746, 450, 1042, 80, 1264, 672, 376, 968, 228, 820, 524, 1116, 43, 1227, 635, 339, 931, 191, 783, 487, 1079, 117, 1301, 709, 413, 1005, 265, 857, 561, 1153, 6, 1, 917, 177, 1361, 769, 473, 1065, 103, 1287, 695, 399, 991, 251, 843, 547, 1139, 66, 1250, 658, 362, 954, 214, 806, 510, 1102, 140, 1324, 732, 436, 1028, 288, 880, 584, 1176, 29, 1213, 621, 325, 1343, 751, 455, 1047, 85, 1269, 677, 381, 973, 233, 825, 529, 1121, 48, 1232, 640, 344, 936, 196, 788, 492, 1084, 122, 1306, 714, 418, 1010, 270, 862, 566, 1158, 11, 1195, 603, 307, 899, 159, 464, 1056, 94, 1278, 686, 390, 982, 242, 834, 538, 1130, 57, 1241, 649, 353, 945, 205, 797, 501, 1093, 131, 1315, 723, 427, 1019, 279, 871, 575, 1167, 20, 1204, 612, 316, 908, 168, 1352, 760, 75, 1259, 667, 371, 963, 223, 815, 519, 1111, 38, 1222, 630, 334, 926, 186, 778, 482, 1074, 112, 1296, 704, 408, 1000, 260, 852, 556, 1148, 1190, 1185, 593, 297, 889, 149, 1333, 741, 445, 1037, 702, 406, 998, 258, 850, 554, 1146, 73, 1257, 665, 369, 961, 221, 813, 517, 1109, 147, 1331, 739, 443, 1035, 295, 887, 591, 1183, 36, 1220, 628, 332, 924, 184, 1368, 776, 480, 1072, 110, 1294, 980, 240, 832, 536, 1128, 55, 1239, 647, 351, 943, 203, 795, 499, 1091, 129, 1313, 721, 425, 1017, 277, 869, 573, 1165, 18, 1202, 610, 314, 906, 166, 1350, 758, 462, 1054, 92, 1276, 684, 388, 841, 545, 1137, 64, 1248, 656, 360, 952, 212, 804, 508, 1100, 138, 1322, 730, 434, 1026, 286, 878, 582, 1174, 27, 1211, 619, 323, 915, 175, 1359, 767, 471, 1063, 101, 1285, 693, 397, 989, 249, 1119, 46, 1230, 638, 342, 934, 194, 786, 490, 1082, 120, 1304, 712, 416, 1008, 268, 860, 564, 1156, 9, 1193, 601, 305, 897, 157, 1341, 749, 453, 1045, 83, 1267, 675, 379, 971, 231, 823, 527, 1253, 661, 365, 957, 217, 809, 513, 1105, 143, 1327, 735, 439, 1031, 291, 883, 587, 1179, 32, 1216, 624, 328, 920, 180, 1364, 772, 476, 1068, 106, 1290, 698, 402, 994, 254, 846, 550, 1142, 69, 347, 939, 199, 791, 495, 1087, 125, 1309, 717, 421, 1013, 273, 865, 569, 1161, 14, 1198, 606, 310, 902, 162, 1346, 754, 458, 1050, 88, 1272, 680, 384, 976, 236, 828, 532, 1124, 51, 1235, 643, 208, 800, 504, 1096, 134, 1318, 726, 430, 1022, 282, 874, 578, 1170, 23, 1207, 615, 319, 911, 171, 1355, 763, 467, 1059, 97, 1281, 689, 393, 985, 245, 837, 541, 1133, 60, 1244, 652, 356, 948, 485, 1077, 115, 1299, 707, 411, 1003, 263, 855, 559, 1151, 4, 1188, 596, 300, 892, 152, 1336, 744, 448, 1040, 78, 1262, 670, 374, 966, 226, 818, 522, 1114, 41, 1225, 633, 337, 929, 189, 781, 145, 1329, 737, 441, 1033, 293, 885, 589, 1181, 34, 1218, 626, 330, 922, 182, 1366, 774, 478, 1070, 108, 1292, 700, 404, 996, 256, 848, 552, 1144, 71, 1255, 663, 367, 959, 219, 811, 515, 1107, 719, 423, 1015, 275, 867, 571, 1163, 16, 1200, 608, 312, 904, 164, 1348, 756, 460, 1052, 90, 1274, 682, 386, 978, 238, 830, 534, 1126, 53, 1237, 645, 349, 941, 201, 793, 497, 1089, 127, 1311, 1024, 284, 876, 580, 1172, 25, 1209, 617, 321, 913, 173, 1357, 765, 469, 1061, 99, 1283, 691, 395, 987, 247, 839, 543, 1135, 62, 1246, 654, 358, 950, 210, 802, 506, 1098, 136, 1320, 728, 432, 858, 562, 1154, 7, 1191, 599, 303, 895, 155, 1339, 747, 451, 1043, 81, 1265, 673, 377, 969, 229, 821, 525, 1117, 44, 1228, 636, 340, 932, 192, 784, 488, 1080, 118, 1302, 710, 414, 1006, 266, 1177, 30, 1214, 622, 326, 918, 178, 1362, 770, 474, 1066, 104, 1288, 696, 400, 992, 252, 844, 548, 1140, 67, 1251, 659, 363, 955, 215, 807, 511, 1103, 141, 1325, 733, 437, 1029, 289, 881, 585, 1196, 604, 308, 900, 160, 1344, 752, 456, 1048, 86, 1270, 678, 382, 974, 234, 826, 530, 1122, 49, 1233, 641, 345, 937, 197, 789, 493, 1085, 123, 1307, 715, 419, 1011, 271, 863, 567, 1159, 12, 317, 909, 169, 1353, 761, 465, 1057, 95, 1279, 687, 391, 983, 243, 835, 539, 1131, 58, 1242, 650, 354, 946, 206, 798, 502, 1094, 132, 1316, 724, 428, 1020, 280, 872, 576, 1168, 21, 1205, 613, 150, 1334, 742, 446, 1038, 76, 1260, 668, 372, 964, 224, 816, 520, 1112, 39, 1223, 631, 335, 927, 187, 779, 483, 1075, 113, 1297, 705, 409, 1001, 261, 853, 557, 1149, 598, 1186, 594, 298, 890, 775, 479, 1071, 109, 1293, 701, 405, 997, 257, 849, 553, 1145, 72, 1256, 664, 368, 960, 220, 812, 516, 1108, 146, 1330, 738, 442, 1034, 294, 886, 590, 1182, 35, 1219, 627, 331, 923, 183, 1367, 1053, 91, 1275, 683, 387, 979, 239, 831, 535, 1127, 54, 1238, 646, 350, 942, 202, 794, 498, 1090, 128, 1312, 720, 424, 1016, 276, 868, 572, 1164, 17, 1201, 609, 313, 905, 165, 1349, 757, 461, 1284, 692, 396, 988, 248, 840, 544, 1136, 63, 1247, 655, 359, 951, 211, 803, 507, 1099, 137, 1321, 729, 433, 1025, 285, 877, 581, 1173, 26, 1210, 618, 322, 914, 174, 1358, 766, 470, 1062, 100, 378, 970, 230, 822, 526, 1118, 45, 1229, 637, 341, 933, 193, 785, 489, 1081, 119, 1303, 711, 415, 1007, 267, 859, 563, 1155, 8, 1192, 600, 304, 896, 156, 1340, 748, 452, 1044, 82, 1266, 674, 253, 845, 549, 1141, 68, 1252, 660, 364, 956, 216, 808, 512, 1104, 142, 1326, 734, 438, 1030, 290, 882, 586, 1178, 31, 1215, 623, 327, 919, 179, 1363, 771, 475, 1067, 105, 1289, 697, 401, 993, 531, 1123, 50, 1234, 642, 346, 938, 198, 790, 494, 1086, 124, 1308, 716, 420, 1012, 272, 864, 568, 1160, 13, 1197, 605, 309, 901, 161, 1345, 753, 457, 1049, 87, 1271, 679, 383, 975, 235, 827, 59, 1243, 651, 355, 947, 207, 799, 503, 1095, 133, 1317, 725, 429, 1021, 281, 873, 577, 1169, 22, 1206, 614, 318, 910, 170, 1354, 762, 466, 1058, 96, 1280, 688, 392, 984, 244, 836, 540, 1132, 632, 336, 928, 188, 780, 484, 1076, 114, 1298, 706, 410, 1002, 262, 854, 558, 1150, 1147, 1187, 595, 299, 891, 151, 1335, 743, 447, 1039, 77, 1261, 669, 373, 965, 225, 817, 521, 1113, 40, 1224, 958, 218, 810, 514, 1106, 144, 1328, 736, 440, 1032, 292, 884, 588, 1180, 33, 1217, 625, 329, 921, 181, 1365, 773, 477, 1069, 107, 1291, 699, 403, 995, 255, 847, 551, 1143, 70, 1254, 662, 366, 792, 496, 1088, 126, 1310, 718, 422, 1014, 274, 866, 570, 1162, 15, 1199, 607, 311, 903, 163, 1347, 755, 459, 1051, 89, 1273, 681, 385, 977, 237, 829, 533, 1125, 52, 1236, 644, 348, 940, 200, 1097, 135, 1319, 727, 431, 1023, 283, 875, 579, 1171, 24, 1208, 616, 320, 912, 172, 1356, 764, 468, 1060, 98, 1282, 690, 394, 986, 246, 838, 542, 1134, 61, 1245, 653, 357, 949, 209, 801, 505, 1300, 708, 412, 1004, 264, 856, 560, 1152, 5, 1189, 597, 301, 893, 153, 1337, 745, 449, 1041, 79, 1263, 671, 375, 967, 227, 819, 523, 1115, 42, 1226, 634, 338, 930, 190, 782, 486, 1078, 116, 435, 1027, 287, 879, 583, 1175, 28, 1212, 620, 324, 916, 176, 1360, 768, 472, 1064, 102, 1286, 694, 398, 990, 250, 842, 546, 1138, 65, 1249, 657, 361, 953, 213, 805, 509, 1101, 139, 1323, 731, 269, 861, 565, 1157, 10, 1194, 602, 306, 898, 158, 1342, 750, 454, 1046, 84, 1268, 676, 380, 972, 232, 824, 528, 1120, 47, 1231, 639, 343, 935, 195, 787, 491, 1083, 121, 1305, 713, 417, 1009, 574, 1166, 19, 1203, 611, 315, 907, 167, 1351, 759, 463, 1055, 93, 1277, 685, 389, 981, 241, 833, 537, 1129, 56, 1240, 648, 352, 944, 204, 796, 500, 1092, 130, 1314, 722, 426, 1018, 278, 870, 0, 1184, 592, 296, 888, 148, 1332, 740, 444, 1036, 74, 1258, 666, 370, 962, 222, 814, 518, 1110, 37, 1221, 629, 333, 925, 185, 777, 481, 1073, 111, 1295, 703, 407, 999, 259, 851, 555, 3],
	                   
	                    [2, 328, 952, 172, 1420, 796, 484, 1108, 94, 1342, 718, 406, 1030, 250, 1498, 874, 562, 1186, 55, 1303, 679, 367, 991, 211, 1459, 835, 523, 1147, 133, 1381, 757, 445, 1069, 289, 913, 601, 1225, 16, 1, 962, 182, 1430, 806, 494, 1118, 104, 1352, 728, 416, 1040, 260, 1508, 884, 572, 1196, 65, 1313, 689, 377, 1001, 221, 1469, 845, 533, 1157, 143, 1391, 767, 455, 1079, 299, 923, 611, 1235, 26, 1274, 650, 338, 1410, 786, 474, 1098, 84, 1332, 708, 396, 1020, 240, 1488, 864, 552, 1176, 45, 1293, 669, 357, 981, 201, 1449, 825, 513, 1137, 123, 1371, 747, 435, 1059, 279, 903, 591, 1215, 6, 1254, 630, 318, 942, 162, 499, 1123, 109, 1357, 733, 421, 1045, 265, 1513, 889, 577, 1201, 70, 1318, 694, 382, 1006, 226, 1474, 850, 538, 1162, 148, 1396, 772, 460, 1084, 304, 928, 616, 1240, 31, 1279, 655, 343, 967, 187, 1435, 811, 89, 1337, 713, 401, 1025, 245, 1493, 869, 557, 1181, 50, 1298, 674, 362, 986, 206, 1454, 830, 518, 1142, 128, 1376, 752, 440, 1064, 284, 908, 596, 1220, 11, 1259, 635, 323, 947, 167, 1415, 791, 479, 1103, 723, 411, 1035, 255, 1503, 879, 567, 1191, 60, 1308, 684, 372, 996, 216, 1464, 840, 528, 1152, 138, 1386, 762, 450, 1074, 294, 918, 606, 1230, 21, 1269, 645, 333, 957, 177, 1425, 801, 489, 1113, 99, 1347, 1015, 235, 1483, 859, 547, 1171, 40, 1288, 664, 352, 976, 196, 1444, 820, 508, 1132, 118, 1366, 742, 430, 1054, 274, 898, 586, 1210, 1264, 1249, 625, 313, 937, 157, 1405, 781, 469, 1093, 79, 1327, 703, 391, 1520, 896, 584, 1208, 77, 1325, 701, 389, 1013, 233, 1481, 857, 545, 1169, 155, 1403, 779, 467, 1091, 311, 935, 623, 1247, 38, 1286, 662, 350, 974, 194, 1442, 818, 506, 1130, 116, 1364, 740, 428, 1052, 272, 565, 1189, 58, 1306, 682, 370, 994, 214, 1462, 838, 526, 1150, 136, 1384, 760, 448, 1072, 292, 916, 604, 1228, 19, 1267, 643, 331, 955, 175, 1423, 799, 487, 1111, 97, 1345, 721, 409, 1033, 253, 1501, 877, 68, 1316, 692, 380, 1004, 224, 1472, 848, 536, 1160, 146, 1394, 770, 458, 1082, 302, 926, 614, 1238, 29, 1277, 653, 341, 965, 185, 1433, 809, 497, 1121, 107, 1355, 731, 419, 1043, 263, 1511, 887, 575, 1199, 672, 360, 984, 204, 1452, 828, 516, 1140, 126, 1374, 750, 438, 1062, 282, 906, 594, 1218, 9, 1257, 633, 321, 945, 165, 1413, 789, 477, 1101, 87, 1335, 711, 399, 1023, 243, 1491, 867, 555, 1179, 48, 1296, 1009, 229, 1477, 853, 541, 1165, 151, 1399, 775, 463, 1087, 307, 931, 619, 1243, 34, 1282, 658, 346, 970, 190, 1438, 814, 502, 1126, 112, 1360, 736, 424, 1048, 268, 1516, 892, 580, 1204, 73, 1321, 697, 385, 1457, 833, 521, 1145, 131, 1379, 755, 443, 1067, 287, 911, 599, 1223, 14, 1262, 638, 326, 950, 170, 1418, 794, 482, 1106, 92, 1340, 716, 404, 1028, 248, 1496, 872, 560, 1184, 53, 1301, 677, 365, 989, 209, 531, 1155, 141, 1389, 765, 453, 1077, 297, 921, 609, 1233, 24, 1272, 648, 336, 960, 180, 1428, 804, 492, 1116, 102, 1350, 726, 414, 1038, 258, 1506, 882, 570, 1194, 63, 1311, 687, 375, 999, 219, 1467, 843, 121, 1369, 745, 433, 1057, 277, 901, 589, 1213, 4, 1252, 628, 316, 940, 160, 1408, 784, 472, 1096, 82, 1330, 706, 394, 1018, 238, 1486, 862, 550, 1174, 43, 1291, 667, 355, 979, 199, 1447, 823, 511, 1135, 777, 465, 1089, 309, 933, 621, 1245, 36, 1284, 660, 348, 972, 192, 1440, 816, 504, 1128, 114, 1362, 738, 426, 1050, 270, 1518, 894, 582, 1206, 75, 1323, 699, 387, 1011, 231, 1479, 855, 543, 1167, 153, 1401, 1070, 290, 914, 602, 1226, 17, 1265, 641, 329, 953, 173, 1421, 797, 485, 1109, 95, 1343, 719, 407, 1031, 251, 1499, 875, 563, 1187, 56, 1304, 680, 368, 992, 212, 1460, 836, 524, 1148, 134, 1382, 758, 446, 924, 612, 1236, 27, 1275, 651, 339, 963, 183, 1431, 807, 495, 1119, 105, 1353, 729, 417, 1041, 261, 1509, 885, 573, 1197, 66, 1314, 690, 378, 1002, 222, 1470, 846, 534, 1158, 144, 1392, 768, 456, 1080, 300, 1216, 7, 1255, 631, 319, 943, 163, 1411, 787, 475, 1099, 85, 1333, 709, 397, 1021, 241, 1489, 865, 553, 1177, 46, 1294, 670, 358, 982, 202, 1450, 826, 514, 1138, 124, 1372, 748, 436, 1060, 280, 904, 592, 1280, 656, 344, 968, 188, 1436, 812, 500, 1124, 110, 1358, 734, 422, 1046, 266, 1514, 890, 578, 1202, 71, 1319, 695, 383, 1007, 227, 1475, 851, 539, 1163, 149, 1397, 773, 461, 1085, 305, 929, 617, 1241, 32, 324, 948, 168, 1416, 792, 480, 1104, 90, 1338, 714, 402, 1026, 246, 1494, 870, 558, 1182, 51, 1299, 675, 363, 987, 207, 1455, 831, 519, 1143, 129, 1377, 753, 441, 1065, 285, 909, 597, 1221, 12, 1260, 636, 178, 1426, 802, 490, 1114, 100, 1348, 724, 412, 1036, 256, 1504, 880, 568, 1192, 61, 1309, 685, 373, 997, 217, 1465, 841, 529, 1153, 139, 1387, 763, 451, 1075, 295, 919, 607, 1231, 22, 1270, 646, 334, 958, 782, 470, 1094, 80, 1328, 704, 392, 1016, 236, 1484, 860, 548, 1172, 41, 1289, 665, 353, 977, 197, 1445, 821, 509, 1133, 119, 1367, 743, 431, 1055, 275, 899, 587, 1211, 640, 1250, 626, 314, 938, 158, 1406, 1129, 115, 1363, 739, 427, 1051, 271, 1519, 895, 583, 1207, 76, 1324, 700, 388, 1012, 232, 1480, 856, 544, 1168, 154, 1402, 778, 466, 1090, 310, 934, 622, 1246, 37, 1285, 661, 349, 973, 193, 1441, 817, 505, 1344, 720, 408, 1032, 252, 1500, 876, 564, 1188, 57, 1305, 681, 369, 993, 213, 1461, 837, 525, 1149, 135, 1383, 759, 447, 1071, 291, 915, 603, 1227, 18, 1266, 642, 330, 954, 174, 1422, 798, 486, 1110, 96, 418, 1042, 262, 1510, 886, 574, 1198, 67, 1315, 691, 379, 1003, 223, 1471, 847, 535, 1159, 145, 1393, 769, 457, 1081, 301, 925, 613, 1237, 28, 1276, 652, 340, 964, 184, 1432, 808, 496, 1120, 106, 1354, 730, 242, 1490, 866, 554, 1178, 47, 1295, 671, 359, 983, 203, 1451, 827, 515, 1139, 125, 1373, 749, 437, 1061, 281, 905, 593, 1217, 8, 1256, 632, 320, 944, 164, 1412, 788, 476, 1100, 86, 1334, 710, 398, 1022, 891, 579, 1203, 72, 1320, 696, 384, 1008, 228, 1476, 852, 540, 1164, 150, 1398, 774, 462, 1086, 306, 930, 618, 1242, 33, 1281, 657, 345, 969, 189, 1437, 813, 501, 1125, 111, 1359, 735, 423, 1047, 267, 1515, 1183, 52, 1300, 676, 364, 988, 208, 1456, 832, 520, 1144, 130, 1378, 754, 442, 1066, 286, 910, 598, 1222, 13, 1261, 637, 325, 949, 169, 1417, 793, 481, 1105, 91, 1339, 715, 403, 1027, 247, 1495, 871, 559, 1310, 686, 374, 998, 218, 1466, 842, 530, 1154, 140, 1388, 764, 452, 1076, 296, 920, 608, 1232, 23, 1271, 647, 335, 959, 179, 1427, 803, 491, 1115, 101, 1349, 725, 413, 1037, 257, 1505, 881, 569, 1193, 62, 354, 978, 198, 1446, 822, 510, 1134, 120, 1368, 744, 432, 1056, 276, 900, 588, 1212, 1209, 1251, 627, 315, 939, 159, 1407, 783, 471, 1095, 81, 1329, 705, 393, 1017, 237, 1485, 861, 549, 1173, 42, 1290, 666, 230, 1478, 854, 542, 1166, 152, 1400, 776, 464, 1088, 308, 932, 620, 1244, 35, 1283, 659, 347, 971, 191, 1439, 815, 503, 1127, 113, 1361, 737, 425, 1049, 269, 1517, 893, 581, 1205, 74, 1322, 698, 386, 1010, 834, 522, 1146, 132, 1380, 756, 444, 1068, 288, 912, 600, 1224, 15, 1263, 639, 327, 951, 171, 1419, 795, 483, 1107, 93, 1341, 717, 405, 1029, 249, 1497, 873, 561, 1185, 54, 1302, 678, 366, 990, 210, 1458, 1156, 142, 1390, 766, 454, 1078, 298, 922, 610, 1234, 25, 1273, 649, 337, 961, 181, 1429, 805, 493, 1117, 103, 1351, 727, 415, 1039, 259, 1507, 883, 571, 1195, 64, 1312, 688, 376, 1000, 220, 1468, 844, 532, 1370, 746, 434, 1058, 278, 902, 590, 1214, 5, 1253, 629, 317, 941, 161, 1409, 785, 473, 1097, 83, 1331, 707, 395, 1019, 239, 1487, 863, 551, 1175, 44, 1292, 668, 356, 980, 200, 1448, 824, 512, 1136, 122, 459, 1083, 303, 927, 615, 1239, 30, 1278, 654, 342, 966, 186, 1434, 810, 498, 1122, 108, 1356, 732, 420, 1044, 264, 1512, 888, 576, 1200, 69, 1317, 693, 381, 1005, 225, 1473, 849, 537, 1161, 147, 1395, 771, 283, 907, 595, 1219, 10, 1258, 634, 322, 946, 166, 1414, 790, 478, 1102, 88, 1336, 712, 400, 1024, 244, 1492, 868, 556, 1180, 49, 1297, 673, 361, 985, 205, 1453, 829, 517, 1141, 127, 1375, 751, 439, 1063, 605, 1229, 20, 1268, 644, 332, 956, 176, 1424, 800, 488, 1112, 98, 1346, 722, 410, 1034, 254, 1502, 878, 566, 1190, 59, 1307, 683, 371, 995, 215, 1463, 839, 527, 1151, 137, 1385, 761, 449, 1073, 293, 917, 0, 1248, 624, 312, 936, 156, 1404, 780, 468, 1092, 78, 1326, 702, 390, 1014, 234, 1482, 858, 546, 1170, 39, 1287, 663, 351, 975, 195, 1443, 819, 507, 1131, 117, 1365, 741, 429, 1053, 273, 897, 585, 3],
	                   
	                    [2, 332, 1644, 988, 168, 1480, 824, 496, 1152, 86, 1398, 742, 414, 1070, 250, 1562, 906, 578, 1234, 45, 1357, 701, 373, 1029, 209, 1521, 865, 537, 1193, 127, 1439, 783, 455, 1111, 291, 1603, 947, 619, 1275, 4, 1, 1677, 1021, 201, 1513, 857, 529, 1185, 119, 1431, 775, 447, 1103, 283, 1595, 939, 611, 1267, 78, 1390, 734, 406, 1062, 242, 1554, 898, 570, 1226, 160, 1472, 816, 488, 1144, 324, 1636, 980, 652, 1308, 37, 1349, 693, 365, 181, 1493, 837, 509, 1165, 99, 1411, 755, 427, 1083, 263, 1575, 919, 591, 1247, 58, 1370, 714, 386, 1042, 222, 1534, 878, 550, 1206, 140, 1452, 796, 468, 1124, 304, 1616, 960, 632, 1288, 17, 1329, 673, 345, 1657, 1001, 847, 519, 1175, 109, 1421, 765, 437, 1093, 273, 1585, 929, 601, 1257, 68, 1380, 724, 396, 1052, 232, 1544, 888, 560, 1216, 150, 1462, 806, 478, 1134, 314, 1626, 970, 642, 1298, 27, 1339, 683, 355, 1667, 1011, 191, 1503, 1155, 89, 1401, 745, 417, 1073, 253, 1565, 909, 581, 1237, 48, 1360, 704, 376, 1032, 212, 1524, 868, 540, 1196, 130, 1442, 786, 458, 1114, 294, 1606, 950, 622, 1278, 7, 1319, 663, 335, 1647, 991, 171, 1483, 827, 499, 1426, 770, 442, 1098, 278, 1590, 934, 606, 1262, 73, 1385, 729, 401, 1057, 237, 1549, 893, 565, 1221, 155, 1467, 811, 483, 1139, 319, 1631, 975, 647, 1303, 32, 1344, 688, 360, 1672, 1016, 196, 1508, 852, 524, 1180, 114, 422, 1078, 258, 1570, 914, 586, 1242, 53, 1365, 709, 381, 1037, 217, 1529, 873, 545, 1201, 135, 1447, 791, 463, 1119, 299, 1611, 955, 627, 1283, 12, 1324, 668, 340, 1652, 996, 176, 1488, 832, 504, 1160, 94, 1406, 750, 268, 1580, 924, 596, 1252, 63, 1375, 719, 391, 1047, 227, 1539, 883, 555, 1211, 145, 1457, 801, 473, 1129, 309, 1621, 965, 637, 1293, 22, 1334, 678, 350, 1662, 1006, 186, 1498, 842, 514, 1170, 104, 1416, 760, 432, 1088, 903, 575, 1231, 42, 1354, 698, 370, 1026, 206, 1518, 862, 534, 1190, 124, 1436, 780, 452, 1108, 288, 1600, 944, 616, 1272, 1316, 1313, 657, 329, 1641, 985, 165, 1477, 821, 493, 1149, 83, 1395, 739, 411, 1067, 247, 1559, 1270, 81, 1393, 737, 409, 1065, 245, 1557, 901, 573, 1229, 163, 1475, 819, 491, 1147, 327, 1639, 983, 655, 1311, 40, 1352, 696, 368, 1680, 1024, 204, 1516, 860, 532, 1188, 122, 1434, 778, 450, 1106, 286, 1598, 942, 614, 1373, 717, 389, 1045, 225, 1537, 881, 553, 1209, 143, 1455, 799, 471, 1127, 307, 1619, 963, 635, 1291, 20, 1332, 676, 348, 1660, 1004, 184, 1496, 840, 512, 1168, 102, 1414, 758, 430, 1086, 266, 1578, 922, 594, 1250, 61, 399, 1055, 235, 1547, 891, 563, 1219, 153, 1465, 809, 481, 1137, 317, 1629, 973, 645, 1301, 30, 1342, 686, 358, 1670, 1014, 194, 1506, 850, 522, 1178, 112, 1424, 768, 440, 1096, 276, 1588, 932, 604, 1260, 71, 1383, 727, 215, 1527, 871, 543, 1199, 133, 1445, 789, 461, 1117, 297, 1609, 953, 625, 1281, 10, 1322, 666, 338, 1650, 994, 174, 1486, 830, 502, 1158, 92, 1404, 748, 420, 1076, 256, 1568, 912, 584, 1240, 51, 1363, 707, 379, 1035, 896, 568, 1224, 158, 1470, 814, 486, 1142, 322, 1634, 978, 650, 1306, 35, 1347, 691, 363, 1675, 1019, 199, 1511, 855, 527, 1183, 117, 1429, 773, 445, 1101, 281, 1593, 937, 609, 1265, 76, 1388, 732, 404, 1060, 240, 1552, 1204, 138, 1450, 794, 466, 1122, 302, 1614, 958, 630, 1286, 15, 1327, 671, 343, 1655, 999, 179, 1491, 835, 507, 1163, 97, 1409, 753, 425, 1081, 261, 1573, 917, 589, 1245, 56, 1368, 712, 384, 1040, 220, 1532, 876, 548, 1460, 804, 476, 1132, 312, 1624, 968, 640, 1296, 25, 1337, 681, 353, 1665, 1009, 189, 1501, 845, 517, 1173, 107, 1419, 763, 435, 1091, 271, 1583, 927, 599, 1255, 66, 1378, 722, 394, 1050, 230, 1542, 886, 558, 1214, 148, 456, 1112, 292, 1604, 948, 620, 1276, 5, 1317, 661, 333, 1645, 989, 169, 1481, 825, 497, 1153, 87, 1399, 743, 415, 1071, 251, 1563, 907, 579, 1235, 46, 1358, 702, 374, 1030, 210, 1522, 866, 538, 1194, 128, 1440, 784, 325, 1637, 981, 653, 1309, 38, 1350, 694, 366, 1678, 1022, 202, 1514, 858, 530, 1186, 120, 1432, 776, 448, 1104, 284, 1596, 940, 612, 1268, 79, 1391, 735, 407, 1063, 243, 1555, 899, 571, 1227, 161, 1473, 817, 489, 1145, 961, 633, 1289, 18, 1330, 674, 346, 1658, 1002, 182, 1494, 838, 510, 1166, 100, 1412, 756, 428, 1084, 264, 1576, 920, 592, 1248, 59, 1371, 715, 387, 1043, 223, 1535, 879, 551, 1207, 141, 1453, 797, 469, 1125, 305, 1617, 1299, 28, 1340, 684, 356, 1668, 1012, 192, 1504, 848, 520, 1176, 110, 1422, 766, 438, 1094, 274, 1586, 930, 602, 1258, 69, 1381, 725, 397, 1053, 233, 1545, 889, 561, 1217, 151, 1463, 807, 479, 1135, 315, 1627, 971, 643, 1320, 664, 336, 1648, 992, 172, 1484, 828, 500, 1156, 90, 1402, 746, 418, 1074, 254, 1566, 910, 582, 1238, 49, 1361, 705, 377, 1033, 213, 1525, 869, 541, 1197, 131, 1443, 787, 459, 1115, 295, 1607, 951, 623, 1279, 8, 361, 1673, 1017, 197, 1509, 853, 525, 1181, 115, 1427, 771, 443, 1099, 279, 1591, 935, 607, 1263, 74, 1386, 730, 402, 1058, 238, 1550, 894, 566, 1222, 156, 1468, 812, 484, 1140, 320, 1632, 976, 648, 1304, 33, 1345, 689, 997, 177, 1489, 833, 505, 1161, 95, 1407, 751, 423, 1079, 259, 1571, 915, 587, 1243, 54, 1366, 710, 382, 1038, 218, 1530, 874, 546, 1202, 136, 1448, 792, 464, 1120, 300, 1612, 956, 628, 1284, 13, 1325, 669, 341, 1653, 1499, 843, 515, 1171, 105, 1417, 761, 433, 1089, 269, 1581, 925, 597, 1253, 64, 1376, 720, 392, 1048, 228, 1540, 884, 556, 1212, 146, 1458, 802, 474, 1130, 310, 1622, 966, 638, 1294, 23, 1335, 679, 351, 1663, 1007, 187, 494, 1150, 84, 1396, 740, 412, 1068, 248, 1560, 904, 576, 1232, 43, 1355, 699, 371, 1027, 207, 1519, 863, 535, 1191, 125, 1437, 781, 453, 1109, 289, 1601, 945, 617, 1273, 660, 1314, 658, 330, 1642, 986, 166, 1478, 822, 121, 1433, 777, 449, 1105, 285, 1597, 941, 613, 1269, 80, 1392, 736, 408, 1064, 244, 1556, 900, 572, 1228, 162, 1474, 818, 490, 1146, 326, 1638, 982, 654, 1310, 39, 1351, 695, 367, 1679, 1023, 203, 1515, 859, 531, 1187, 757, 429, 1085, 265, 1577, 921, 593, 1249, 60, 1372, 716, 388, 1044, 224, 1536, 880, 552, 1208, 142, 1454, 798, 470, 1126, 306, 1618, 962, 634, 1290, 19, 1331, 675, 347, 1659, 1003, 183, 1495, 839, 511, 1167, 101, 1413, 1095, 275, 1587, 931, 603, 1259, 70, 1382, 726, 398, 1054, 234, 1546, 890, 562, 1218, 152, 1464, 808, 480, 1136, 316, 1628, 972, 644, 1300, 29, 1341, 685, 357, 1669, 1013, 193, 1505, 849, 521, 1177, 111, 1423, 767, 439, 1567, 911, 583, 1239, 50, 1362, 706, 378, 1034, 214, 1526, 870, 542, 1198, 132, 1444, 788, 460, 1116, 296, 1608, 952, 624, 1280, 9, 1321, 665, 337, 1649, 993, 173, 1485, 829, 501, 1157, 91, 1403, 747, 419, 1075, 255, 608, 1264, 75, 1387, 731, 403, 1059, 239, 1551, 895, 567, 1223, 157, 1469, 813, 485, 1141, 321, 1633, 977, 649, 1305, 34, 1346, 690, 362, 1674, 1018, 198, 1510, 854, 526, 1182, 116, 1428, 772, 444, 1100, 280, 1592, 936, 55, 1367, 711, 383, 1039, 219, 1531, 875, 547, 1203, 137, 1449, 793, 465, 1121, 301, 1613, 957, 629, 1285, 14, 1326, 670, 342, 1654, 998, 178, 1490, 834, 506, 1162, 96, 1408, 752, 424, 1080, 260, 1572, 916, 588, 1244, 721, 393, 1049, 229, 1541, 885, 557, 1213, 147, 1459, 803, 475, 1131, 311, 1623, 967, 639, 1295, 24, 1336, 680, 352, 1664, 1008, 188, 1500, 844, 516, 1172, 106, 1418, 762, 434, 1090, 270, 1582, 926, 598, 1254, 65, 1377, 1028, 208, 1520, 864, 536, 1192, 126, 1438, 782, 454, 1110, 290, 1602, 946, 618, 1274, 1271, 1315, 659, 331, 1643, 987, 167, 1479, 823, 495, 1151, 85, 1397, 741, 413, 1069, 249, 1561, 905, 577, 1233, 44, 1356, 700, 372, 1553, 897, 569, 1225, 159, 1471, 815, 487, 1143, 323, 1635, 979, 651, 1307, 36, 1348, 692, 364, 1676, 1020, 200, 1512, 856, 528, 1184, 118, 1430, 774, 446, 1102, 282, 1594, 938, 610, 1266, 77, 1389, 733, 405, 1061, 241, 549, 1205, 139, 1451, 795, 467, 1123, 303, 1615, 959, 631, 1287, 16, 1328, 672, 344, 1656, 1000, 180, 1492, 836, 508, 1164, 98, 1410, 754, 426, 1082, 262, 1574, 918, 590, 1246, 57, 1369, 713, 385, 1041, 221, 1533, 877, 149, 1461, 805, 477, 1133, 313, 1625, 969, 641, 1297, 26, 1338, 682, 354, 1666, 1010, 190, 1502, 846, 518, 1174, 108, 1420, 764, 436, 1092, 272, 1584, 928, 600, 1256, 67, 1379, 723, 395, 1051, 231, 1543, 887, 559, 1215, 785, 457, 1113, 293, 1605, 949, 621, 1277, 6, 1318, 662, 334, 1646, 990, 170, 1482, 826, 498, 1154, 88, 1400, 744, 416, 1072, 252, 1564, 908, 580, 1236, 47, 1359, 703, 375, 1031, 211, 1523, 867, 539, 1195, 129, 1441, 1138, 318, 1630, 974, 646, 1302, 31, 1343, 687, 359, 1671, 1015, 195, 1507, 851, 523, 1179, 113, 1425, 769, 441, 1097, 277, 1589, 933, 605, 1261, 72, 1384, 728, 400, 1056, 236, 1548, 892, 564, 1220, 154, 1466, 810, 482, 1610, 954, 626, 1282, 11, 1323, 667, 339, 1651, 995, 175, 1487, 831, 503, 1159, 93, 1405, 749, 421, 1077, 257, 1569, 913, 585, 1241, 52, 1364, 708, 380, 1036, 216, 1528, 872, 544, 1200, 134, 1446, 790, 462, 1118, 298, 636, 1292, 21, 1333, 677, 349, 1661, 1005, 185, 1497, 841, 513, 1169, 103, 1415, 759, 431, 1087, 267, 1579, 923, 595, 1251, 62, 1374, 718, 390, 1046, 226, 1538, 882, 554, 1210, 144, 1456, 800, 472, 1128, 308, 1620, 964, 0, 1312, 656, 328, 1640, 984, 164, 1476, 820, 492, 1148, 82, 1394, 738, 410, 1066, 246, 1558, 902, 574, 1230, 41, 1353, 697, 369, 1025, 205, 1517, 861, 533, 1189, 123, 1435, 779, 451, 1107, 287, 1599, 943, 615, 3],
	                   
	                    [2, 359, 1735, 1047, 187, 1563, 875, 531, 1219, 101, 1477, 789, 445, 1821, 1133, 273, 1649, 961, 617, 1305, 58, 1434, 746, 402, 1778, 1090, 230, 1606, 918, 574, 1262, 144, 1520, 832, 488, 1176, 316, 1692, 1004, 660, 1348, 15, 1, 1746, 1058, 198, 1574, 886, 542, 1230, 112, 1488, 800, 456, 1832, 1144, 284, 1660, 972, 628, 1316, 69, 1445, 757, 413, 1789, 1101, 241, 1617, 929, 585, 1273, 155, 1531, 843, 499, 1187, 327, 1703, 1015, 671, 1359, 26, 1402, 714, 370, 176, 1552, 864, 520, 1208, 90, 1466, 778, 434, 1810, 1122, 262, 1638, 950, 606, 1294, 47, 1423, 735, 391, 1767, 1079, 219, 1595, 907, 563, 1251, 133, 1509, 821, 477, 1165, 305, 1681, 993, 649, 1337, 4, 1380, 692, 348, 1724, 1036, 899, 555, 1243, 125, 1501, 813, 469, 1845, 1157, 297, 1673, 985, 641, 1329, 82, 1458, 770, 426, 1802, 1114, 254, 1630, 942, 598, 1286, 168, 1544, 856, 512, 1200, 340, 1716, 1028, 684, 1372, 39, 1415, 727, 383, 1759, 1071, 211, 1587, 1222, 104, 1480, 792, 448, 1824, 1136, 276, 1652, 964, 620, 1308, 61, 1437, 749, 405, 1781, 1093, 233, 1609, 921, 577, 1265, 147, 1523, 835, 491, 1179, 319, 1695, 1007, 663, 1351, 18, 1394, 706, 362, 1738, 1050, 190, 1566, 878, 534, 1491, 803, 459, 1835, 1147, 287, 1663, 975, 631, 1319, 72, 1448, 760, 416, 1792, 1104, 244, 1620, 932, 588, 1276, 158, 1534, 846, 502, 1190, 330, 1706, 1018, 674, 1362, 29, 1405, 717, 373, 1749, 1061, 201, 1577, 889, 545, 1233, 115, 437, 1813, 1125, 265, 1641, 953, 609, 1297, 50, 1426, 738, 394, 1770, 1082, 222, 1598, 910, 566, 1254, 136, 1512, 824, 480, 1168, 308, 1684, 996, 652, 1340, 7, 1383, 695, 351, 1727, 1039, 179, 1555, 867, 523, 1211, 93, 1469, 781, 1152, 292, 1668, 980, 636, 1324, 77, 1453, 765, 421, 1797, 1109, 249, 1625, 937, 593, 1281, 163, 1539, 851, 507, 1195, 335, 1711, 1023, 679, 1367, 34, 1410, 722, 378, 1754, 1066, 206, 1582, 894, 550, 1238, 120, 1496, 808, 464, 1840, 1646, 958, 614, 1302, 55, 1431, 743, 399, 1775, 1087, 227, 1603, 915, 571, 1259, 141, 1517, 829, 485, 1173, 313, 1689, 1001, 657, 1345, 12, 1388, 700, 356, 1732, 1044, 184, 1560, 872, 528, 1216, 98, 1474, 786, 442, 1818, 1130, 270, 625, 1313, 66, 1442, 754, 410, 1786, 1098, 238, 1614, 926, 582, 1270, 152, 1528, 840, 496, 1184, 324, 1700, 1012, 668, 1356, 23, 1399, 711, 367, 1743, 1055, 195, 1571, 883, 539, 1227, 109, 1485, 797, 453, 1829, 1141, 281, 1657, 969, 44, 1420, 732, 388, 1764, 1076, 216, 1592, 904, 560, 1248, 130, 1506, 818, 474, 1162, 302, 1678, 990, 646, 1334, 1391, 1377, 689, 345, 1721, 1033, 173, 1549, 861, 517, 1205, 87, 1463, 775, 431, 1807, 1119, 259, 1635, 947, 603, 1291, 773, 429, 1805, 1117, 257, 1633, 945, 601, 1289, 171, 1547, 859, 515, 1203, 343, 1719, 1031, 687, 1375, 42, 1418, 730, 386, 1762, 1074, 214, 1590, 902, 558, 1246, 128, 1504, 816, 472, 1848, 1160, 300, 1676, 988, 644, 1332, 85, 1461, 1784, 1096, 236, 1612, 924, 580, 1268, 150, 1526, 838, 494, 1182, 322, 1698, 1010, 666, 1354, 21, 1397, 709, 365, 1741, 1053, 193, 1569, 881, 537, 1225, 107, 1483, 795, 451, 1827, 1139, 279, 1655, 967, 623, 1311, 64, 1440, 752, 408, 247, 1623, 935, 591, 1279, 161, 1537, 849, 505, 1193, 333, 1709, 1021, 677, 1365, 32, 1408, 720, 376, 1752, 1064, 204, 1580, 892, 548, 1236, 118, 1494, 806, 462, 1838, 1150, 290, 1666, 978, 634, 1322, 75, 1451, 763, 419, 1795, 1107, 913, 569, 1257, 139, 1515, 827, 483, 1171, 311, 1687, 999, 655, 1343, 10, 1386, 698, 354, 1730, 1042, 182, 1558, 870, 526, 1214, 96, 1472, 784, 440, 1816, 1128, 268, 1644, 956, 612, 1300, 53, 1429, 741, 397, 1773, 1085, 225, 1601, 1284, 166, 1542, 854, 510, 1198, 338, 1714, 1026, 682, 1370, 37, 1413, 725, 381, 1757, 1069, 209, 1585, 897, 553, 1241, 123, 1499, 811, 467, 1843, 1155, 295, 1671, 983, 639, 1327, 80, 1456, 768, 424, 1800, 1112, 252, 1628, 940, 596, 1521, 833, 489, 1177, 317, 1693, 1005, 661, 1349, 16, 1392, 704, 360, 1736, 1048, 188, 1564, 876, 532, 1220, 102, 1478, 790, 446, 1822, 1134, 274, 1650, 962, 618, 1306, 59, 1435, 747, 403, 1779, 1091, 231, 1607, 919, 575, 1263, 145, 500, 1188, 328, 1704, 1016, 672, 1360, 27, 1403, 715, 371, 1747, 1059, 199, 1575, 887, 543, 1231, 113, 1489, 801, 457, 1833, 1145, 285, 1661, 973, 629, 1317, 70, 1446, 758, 414, 1790, 1102, 242, 1618, 930, 586, 1274, 156, 1532, 844, 306, 1682, 994, 650, 1338, 5, 1381, 693, 349, 1725, 1037, 177, 1553, 865, 521, 1209, 91, 1467, 779, 435, 1811, 1123, 263, 1639, 951, 607, 1295, 48, 1424, 736, 392, 1768, 1080, 220, 1596, 908, 564, 1252, 134, 1510, 822, 478, 1166, 1029, 685, 1373, 40, 1416, 728, 384, 1760, 1072, 212, 1588, 900, 556, 1244, 126, 1502, 814, 470, 1846, 1158, 298, 1674, 986, 642, 1330, 83, 1459, 771, 427, 1803, 1115, 255, 1631, 943, 599, 1287, 169, 1545, 857, 513, 1201, 341, 1717, 1352, 19, 1395, 707, 363, 1739, 1051, 191, 1567, 879, 535, 1223, 105, 1481, 793, 449, 1825, 1137, 277, 1653, 965, 621, 1309, 62, 1438, 750, 406, 1782, 1094, 234, 1610, 922, 578, 1266, 148, 1524, 836, 492, 1180, 320, 1696, 1008, 664, 1406, 718, 374, 1750, 1062, 202, 1578, 890, 546, 1234, 116, 1492, 804, 460, 1836, 1148, 288, 1664, 976, 632, 1320, 73, 1449, 761, 417, 1793, 1105, 245, 1621, 933, 589, 1277, 159, 1535, 847, 503, 1191, 331, 1707, 1019, 675, 1363, 30, 352, 1728, 1040, 180, 1556, 868, 524, 1212, 94, 1470, 782, 438, 1814, 1126, 266, 1642, 954, 610, 1298, 51, 1427, 739, 395, 1771, 1083, 223, 1599, 911, 567, 1255, 137, 1513, 825, 481, 1169, 309, 1685, 997, 653, 1341, 8, 1384, 696, 1067, 207, 1583, 895, 551, 1239, 121, 1497, 809, 465, 1841, 1153, 293, 1669, 981, 637, 1325, 78, 1454, 766, 422, 1798, 1110, 250, 1626, 938, 594, 1282, 164, 1540, 852, 508, 1196, 336, 1712, 1024, 680, 1368, 35, 1411, 723, 379, 1755, 1561, 873, 529, 1217, 99, 1475, 787, 443, 1819, 1131, 271, 1647, 959, 615, 1303, 56, 1432, 744, 400, 1776, 1088, 228, 1604, 916, 572, 1260, 142, 1518, 830, 486, 1174, 314, 1690, 1002, 658, 1346, 13, 1389, 701, 357, 1733, 1045, 185, 540, 1228, 110, 1486, 798, 454, 1830, 1142, 282, 1658, 970, 626, 1314, 67, 1443, 755, 411, 1787, 1099, 239, 1615, 927, 583, 1271, 153, 1529, 841, 497, 1185, 325, 1701, 1013, 669, 1357, 24, 1400, 712, 368, 1744, 1056, 196, 1572, 884, 88, 1464, 776, 432, 1808, 1120, 260, 1636, 948, 604, 1292, 45, 1421, 733, 389, 1765, 1077, 217, 1593, 905, 561, 1249, 131, 1507, 819, 475, 1163, 303, 1679, 991, 647, 1335, 703, 1378, 690, 346, 1722, 1034, 174, 1550, 862, 518, 1206, 815, 471, 1847, 1159, 299, 1675, 987, 643, 1331, 84, 1460, 772, 428, 1804, 1116, 256, 1632, 944, 600, 1288, 170, 1546, 858, 514, 1202, 342, 1718, 1030, 686, 1374, 41, 1417, 729, 385, 1761, 1073, 213, 1589, 901, 557, 1245, 127, 1503, 1826, 1138, 278, 1654, 966, 622, 1310, 63, 1439, 751, 407, 1783, 1095, 235, 1611, 923, 579, 1267, 149, 1525, 837, 493, 1181, 321, 1697, 1009, 665, 1353, 20, 1396, 708, 364, 1740, 1052, 192, 1568, 880, 536, 1224, 106, 1482, 794, 450, 289, 1665, 977, 633, 1321, 74, 1450, 762, 418, 1794, 1106, 246, 1622, 934, 590, 1278, 160, 1536, 848, 504, 1192, 332, 1708, 1020, 676, 1364, 31, 1407, 719, 375, 1751, 1063, 203, 1579, 891, 547, 1235, 117, 1493, 805, 461, 1837, 1149, 955, 611, 1299, 52, 1428, 740, 396, 1772, 1084, 224, 1600, 912, 568, 1256, 138, 1514, 826, 482, 1170, 310, 1686, 998, 654, 1342, 9, 1385, 697, 353, 1729, 1041, 181, 1557, 869, 525, 1213, 95, 1471, 783, 439, 1815, 1127, 267, 1643, 1326, 79, 1455, 767, 423, 1799, 1111, 251, 1627, 939, 595, 1283, 165, 1541, 853, 509, 1197, 337, 1713, 1025, 681, 1369, 36, 1412, 724, 380, 1756, 1068, 208, 1584, 896, 552, 1240, 122, 1498, 810, 466, 1842, 1154, 294, 1670, 982, 638, 1433, 745, 401, 1777, 1089, 229, 1605, 917, 573, 1261, 143, 1519, 831, 487, 1175, 315, 1691, 1003, 659, 1347, 14, 1390, 702, 358, 1734, 1046, 186, 1562, 874, 530, 1218, 100, 1476, 788, 444, 1820, 1132, 272, 1648, 960, 616, 1304, 57, 412, 1788, 1100, 240, 1616, 928, 584, 1272, 154, 1530, 842, 498, 1186, 326, 1702, 1014, 670, 1358, 25, 1401, 713, 369, 1745, 1057, 197, 1573, 885, 541, 1229, 111, 1487, 799, 455, 1831, 1143, 283, 1659, 971, 627, 1315, 68, 1444, 756, 1078, 218, 1594, 906, 562, 1250, 132, 1508, 820, 476, 1164, 304, 1680, 992, 648, 1336, 1333, 1379, 691, 347, 1723, 1035, 175, 1551, 863, 519, 1207, 89, 1465, 777, 433, 1809, 1121, 261, 1637, 949, 605, 1293, 46, 1422, 734, 390, 1766, 1629, 941, 597, 1285, 167, 1543, 855, 511, 1199, 339, 1715, 1027, 683, 1371, 38, 1414, 726, 382, 1758, 1070, 210, 1586, 898, 554, 1242, 124, 1500, 812, 468, 1844, 1156, 296, 1672, 984, 640, 1328, 81, 1457, 769, 425, 1801, 1113, 253, 576, 1264, 146, 1522, 834, 490, 1178, 318, 1694, 1006, 662, 1350, 17, 1393, 705, 361, 1737, 1049, 189, 1565, 877, 533, 1221, 103, 1479, 791, 447, 1823, 1135, 275, 1651, 963, 619, 1307, 60, 1436, 748, 404, 1780, 1092, 232, 1608, 920, 157, 1533, 845, 501, 1189, 329, 1705, 1017, 673, 1361, 28, 1404, 716, 372, 1748, 1060, 200, 1576, 888, 544, 1232, 114, 1490, 802, 458, 1834, 1146, 286, 1662, 974, 630, 1318, 71, 1447, 759, 415, 1791, 1103, 243, 1619, 931, 587, 1275, 823, 479, 1167, 307, 1683, 995, 651, 1339, 6, 1382, 694, 350, 1726, 1038, 178, 1554, 866, 522, 1210, 92, 1468, 780, 436, 1812, 1124, 264, 1640, 952, 608, 1296, 49, 1425, 737, 393, 1769, 1081, 221, 1597, 909, 565, 1253, 135, 1511, 1194, 334, 1710, 1022, 678, 1366, 33, 1409, 721, 377, 1753, 1065, 205, 1581, 893, 549, 1237, 119, 1495, 807, 463, 1839, 1151, 291, 1667, 979, 635, 1323, 76, 1452, 764, 420, 1796, 1108, 248, 1624, 936, 592, 1280, 162, 1538, 850, 506, 1688, 1000, 656, 1344, 11, 1387, 699, 355, 1731, 1043, 183, 1559, 871, 527, 1215, 97, 1473, 785, 441, 1817, 1129, 269, 1645, 957, 613, 1301, 54, 1430, 742, 398, 1774, 1086, 226, 1602, 914, 570, 1258, 140, 1516, 828, 484, 1172, 312, 667, 1355, 22, 1398, 710, 366, 1742, 1054, 194, 1570, 882, 538, 1226, 108, 1484, 796, 452, 1828, 1140, 280, 1656, 968, 624, 1312, 65, 1441, 753, 409, 1785, 1097, 237, 1613, 925, 581, 1269, 151, 1527, 839, 495, 1183, 323, 1699, 1011, 0, 1376, 688, 344, 1720, 1032, 172, 1548, 860, 516, 1204, 86, 1462, 774, 430, 1806, 1118, 258, 1634, 946, 602, 1290, 43, 1419, 731, 387, 1763, 1075, 215, 1591, 903, 559, 1247, 129, 1505, 817, 473, 1161, 301, 1677, 989, 645, 3],
	                   
	                    [2, 370, 1810, 1090, 190, 1630, 910, 550, 1990, 1270, 100, 1540, 820, 460, 1900, 1180, 280, 1720, 1000, 640, 1360, 55, 1495, 775, 415, 1855, 1135, 235, 1675, 955, 595, 1315, 145, 1585, 865, 505, 1945, 1225, 325, 1765, 1045, 685, 1405, 10, 1, 1838, 1118, 218, 1658, 938, 578, 2018, 1298, 128, 1568, 848, 488, 1928, 1208, 308, 1748, 1028, 668, 1388, 83, 1523, 803, 443, 1883, 1163, 263, 1703, 983, 623, 1343, 173, 1613, 893, 533, 1973, 1253, 353, 1793, 1073, 713, 1433, 38, 1478, 758, 398, 196, 1636, 916, 556, 1996, 1276, 106, 1546, 826, 466, 1906, 1186, 286, 1726, 1006, 646, 1366, 61, 1501, 781, 421, 1861, 1141, 241, 1681, 961, 601, 1321, 151, 1591, 871, 511, 1951, 1231, 331, 1771, 1051, 691, 1411, 16, 1456, 736, 376, 1816, 1096, 927, 567, 2007, 1287, 117, 1557, 837, 477, 1917, 1197, 297, 1737, 1017, 657, 1377, 72, 1512, 792, 432, 1872, 1152, 252, 1692, 972, 612, 1332, 162, 1602, 882, 522, 1962, 1242, 342, 1782, 1062, 702, 1422, 27, 1467, 747, 387, 1827, 1107, 207, 1647, 1984, 1264, 94, 1534, 814, 454, 1894, 1174, 274, 1714, 994, 634, 1354, 49, 1489, 769, 409, 1849, 1129, 229, 1669, 949, 589, 1309, 139, 1579, 859, 499, 1939, 1219, 319, 1759, 1039, 679, 1399, 4, 1444, 724, 364, 1804, 1084, 184, 1624, 904, 544, 131, 1571, 851, 491, 1931, 1211, 311, 1751, 1031, 671, 1391, 86, 1526, 806, 446, 1886, 1166, 266, 1706, 986, 626, 1346, 176, 1616, 896, 536, 1976, 1256, 356, 1796, 1076, 716, 1436, 41, 1481, 761, 401, 1841, 1121, 221, 1661, 941, 581, 2021, 1301, 829, 469, 1909, 1189, 289, 1729, 1009, 649, 1369, 64, 1504, 784, 424, 1864, 1144, 244, 1684, 964, 604, 1324, 154, 1594, 874, 514, 1954, 1234, 334, 1774, 1054, 694, 1414, 19, 1459, 739, 379, 1819, 1099, 199, 1639, 919, 559, 1999, 1279, 109, 1549, 1920, 1200, 300, 1740, 1020, 660, 1380, 75, 1515, 795, 435, 1875, 1155, 255, 1695, 975, 615, 1335, 165, 1605, 885, 525, 1965, 1245, 345, 1785, 1065, 705, 1425, 30, 1470, 750, 390, 1830, 1110, 210, 1650, 930, 570, 2010, 1290, 120, 1560, 840, 480, 277, 1717, 997, 637, 1357, 52, 1492, 772, 412, 1852, 1132, 232, 1672, 952, 592, 1312, 142, 1582, 862, 502, 1942, 1222, 322, 1762, 1042, 682, 1402, 7, 1447, 727, 367, 1807, 1087, 187, 1627, 907, 547, 1987, 1267, 97, 1537, 817, 457, 1897, 1177, 1025, 665, 1385, 80, 1520, 800, 440, 1880, 1160, 260, 1700, 980, 620, 1340, 170, 1610, 890, 530, 1970, 1250, 350, 1790, 1070, 710, 1430, 35, 1475, 755, 395, 1835, 1115, 215, 1655, 935, 575, 2015, 1295, 125, 1565, 845, 485, 1925, 1205, 305, 1745, 1363, 58, 1498, 778, 418, 1858, 1138, 238, 1678, 958, 598, 1318, 148, 1588, 868, 508, 1948, 1228, 328, 1768, 1048, 688, 1408, 13, 1453, 733, 373, 1813, 1093, 193, 1633, 913, 553, 1993, 1273, 103, 1543, 823, 463, 1903, 1183, 283, 1723, 1003, 643, 1509, 789, 429, 1869, 1149, 249, 1689, 969, 609, 1329, 159, 1599, 879, 519, 1959, 1239, 339, 1779, 1059, 699, 1419, 24, 1464, 744, 384, 1824, 1104, 204, 1644, 924, 564, 2004, 1284, 114, 1554, 834, 474, 1914, 1194, 294, 1734, 1014, 654, 1374, 69, 406, 1846, 1126, 226, 1666, 946, 586, 1306, 136, 1576, 856, 496, 1936, 1216, 316, 1756, 1036, 676, 1396, 1450, 1441, 721, 361, 1801, 1081, 181, 1621, 901, 541, 1981, 1261, 91, 1531, 811, 451, 1891, 1171, 271, 1711, 991, 631, 1351, 46, 1486, 766, 1169, 269, 1709, 989, 629, 1349, 179, 1619, 899, 539, 1979, 1259, 359, 1799, 1079, 719, 1439, 44, 1484, 764, 404, 1844, 1124, 224, 1664, 944, 584, 2024, 1304, 134, 1574, 854, 494, 1934, 1214, 314, 1754, 1034, 674, 1394, 89, 1529, 809, 449, 1889, 1687, 967, 607, 1327, 157, 1597, 877, 517, 1957, 1237, 337, 1777, 1057, 697, 1417, 22, 1462, 742, 382, 1822, 1102, 202, 1642, 922, 562, 2002, 1282, 112, 1552, 832, 472, 1912, 1192, 292, 1732, 1012, 652, 1372, 67, 1507, 787, 427, 1867, 1147, 247, 618, 1338, 168, 1608, 888, 528, 1968, 1248, 348, 1788, 1068, 708, 1428, 33, 1473, 753, 393, 1833, 1113, 213, 1653, 933, 573, 2013, 1293, 123, 1563, 843, 483, 1923, 1203, 303, 1743, 1023, 663, 1383, 78, 1518, 798, 438, 1878, 1158, 258, 1698, 978, 146, 1586, 866, 506, 1946, 1226, 326, 1766, 1046, 686, 1406, 11, 1451, 731, 371, 1811, 1091, 191, 1631, 911, 551, 1991, 1271, 101, 1541, 821, 461, 1901, 1181, 281, 1721, 1001, 641, 1361, 56, 1496, 776, 416, 1856, 1136, 236, 1676, 956, 596, 1316, 894, 534, 1974, 1254, 354, 1794, 1074, 714, 1434, 39, 1479, 759, 399, 1839, 1119, 219, 1659, 939, 579, 2019, 1299, 129, 1569, 849, 489, 1929, 1209, 309, 1749, 1029, 669, 1389, 84, 1524, 804, 444, 1884, 1164, 264, 1704, 984, 624, 1344, 174, 1614, 1952, 1232, 332, 1772, 1052, 692, 1412, 17, 1457, 737, 377, 1817, 1097, 197, 1637, 917, 557, 1997, 1277, 107, 1547, 827, 467, 1907, 1187, 287, 1727, 1007, 647, 1367, 62, 1502, 782, 422, 1862, 1142, 242, 1682, 962, 602, 1322, 152, 1592, 872, 512, 343, 1783, 1063, 703, 1423, 28, 1468, 748, 388, 1828, 1108, 208, 1648, 928, 568, 2008, 1288, 118, 1558, 838, 478, 1918, 1198, 298, 1738, 1018, 658, 1378, 73, 1513, 793, 433, 1873, 1153, 253, 1693, 973, 613, 1333, 163, 1603, 883, 523, 1963, 1243, 1040, 680, 1400, 5, 1445, 725, 365, 1805, 1085, 185, 1625, 905, 545, 1985, 1265, 95, 1535, 815, 455, 1895, 1175, 275, 1715, 995, 635, 1355, 50, 1490, 770, 410, 1850, 1130, 230, 1670, 950, 590, 1310, 140, 1580, 860, 500, 1940, 1220, 320, 1760, 1437, 42, 1482, 762, 402, 1842, 1122, 222, 1662, 942, 582, 2022, 1302, 132, 1572, 852, 492, 1932, 1212, 312, 1752, 1032, 672, 1392, 87, 1527, 807, 447, 1887, 1167, 267, 1707, 987, 627, 1347, 177, 1617, 897, 537, 1977, 1257, 357, 1797, 1077, 717, 1460, 740, 380, 1820, 1100, 200, 1640, 920, 560, 2000, 1280, 110, 1550, 830, 470, 1910, 1190, 290, 1730, 1010, 650, 1370, 65, 1505, 785, 425, 1865, 1145, 245, 1685, 965, 605, 1325, 155, 1595, 875, 515, 1955, 1235, 335, 1775, 1055, 695, 1415, 20, 391, 1831, 1111, 211, 1651, 931, 571, 2011, 1291, 121, 1561, 841, 481, 1921, 1201, 301, 1741, 1021, 661, 1381, 76, 1516, 796, 436, 1876, 1156, 256, 1696, 976, 616, 1336, 166, 1606, 886, 526, 1966, 1246, 346, 1786, 1066, 706, 1426, 31, 1471, 751, 1088, 188, 1628, 908, 548, 1988, 1268, 98, 1538, 818, 458, 1898, 1178, 278, 1718, 998, 638, 1358, 53, 1493, 773, 413, 1853, 1133, 233, 1673, 953, 593, 1313, 143, 1583, 863, 503, 1943, 1223, 323, 1763, 1043, 683, 1403, 8, 1448, 728, 368, 1808, 1656, 936, 576, 2016, 1296, 126, 1566, 846, 486, 1926, 1206, 306, 1746, 1026, 666, 1386, 81, 1521, 801, 441, 1881, 1161, 261, 1701, 981, 621, 1341, 171, 1611, 891, 531, 1971, 1251, 351, 1791, 1071, 711, 1431, 36, 1476, 756, 396, 1836, 1116, 216, 554, 1994, 1274, 104, 1544, 824, 464, 1904, 1184, 284, 1724, 1004, 644, 1364, 59, 1499, 779, 419, 1859, 1139, 239, 1679, 959, 599, 1319, 149, 1589, 869, 509, 1949, 1229, 329, 1769, 1049, 689, 1409, 14, 1454, 734, 374, 1814, 1094, 194, 1634, 914, 1285, 115, 1555, 835, 475, 1915, 1195, 295, 1735, 1015, 655, 1375, 70, 1510, 790, 430, 1870, 1150, 250, 1690, 970, 610, 1330, 160, 1600, 880, 520, 1960, 1240, 340, 1780, 1060, 700, 1420, 25, 1465, 745, 385, 1825, 1105, 205, 1645, 925, 565, 2005, 1532, 812, 452, 1892, 1172, 272, 1712, 992, 632, 1352, 47, 1487, 767, 407, 1847, 1127, 227, 1667, 947, 587, 1307, 137, 1577, 857, 497, 1937, 1217, 317, 1757, 1037, 677, 1397, 730, 1442, 722, 362, 1802, 1082, 182, 1622, 902, 542, 1982, 1262, 92, 493, 1933, 1213, 313, 1753, 1033, 673, 1393, 88, 1528, 808, 448, 1888, 1168, 268, 1708, 988, 628, 1348, 178, 1618, 898, 538, 1978, 1258, 358, 1798, 1078, 718, 1438, 43, 1483, 763, 403, 1843, 1123, 223, 1663, 943, 583, 2023, 1303, 133, 1573, 853, 1191, 291, 1731, 1011, 651, 1371, 66, 1506, 786, 426, 1866, 1146, 246, 1686, 966, 606, 1326, 156, 1596, 876, 516, 1956, 1236, 336, 1776, 1056, 696, 1416, 21, 1461, 741, 381, 1821, 1101, 201, 1641, 921, 561, 2001, 1281, 111, 1551, 831, 471, 1911, 1742, 1022, 662, 1382, 77, 1517, 797, 437, 1877, 1157, 257, 1697, 977, 617, 1337, 167, 1607, 887, 527, 1967, 1247, 347, 1787, 1067, 707, 1427, 32, 1472, 752, 392, 1832, 1112, 212, 1652, 932, 572, 2012, 1292, 122, 1562, 842, 482, 1922, 1202, 302, 639, 1359, 54, 1494, 774, 414, 1854, 1134, 234, 1674, 954, 594, 1314, 144, 1584, 864, 504, 1944, 1224, 324, 1764, 1044, 684, 1404, 9, 1449, 729, 369, 1809, 1089, 189, 1629, 909, 549, 1989, 1269, 99, 1539, 819, 459, 1899, 1179, 279, 1719, 999, 82, 1522, 802, 442, 1882, 1162, 262, 1702, 982, 622, 1342, 172, 1612, 892, 532, 1972, 1252, 352, 1792, 1072, 712, 1432, 37, 1477, 757, 397, 1837, 1117, 217, 1657, 937, 577, 2017, 1297, 127, 1567, 847, 487, 1927, 1207, 307, 1747, 1027, 667, 1387, 780, 420, 1860, 1140, 240, 1680, 960, 600, 1320, 150, 1590, 870, 510, 1950, 1230, 330, 1770, 1050, 690, 1410, 15, 1455, 735, 375, 1815, 1095, 195, 1635, 915, 555, 1995, 1275, 105, 1545, 825, 465, 1905, 1185, 285, 1725, 1005, 645, 1365, 60, 1500, 1871, 1151, 251, 1691, 971, 611, 1331, 161, 1601, 881, 521, 1961, 1241, 341, 1781, 1061, 701, 1421, 26, 1466, 746, 386, 1826, 1106, 206, 1646, 926, 566, 2006, 1286, 116, 1556, 836, 476, 1916, 1196, 296, 1736, 1016, 656, 1376, 71, 1511, 791, 431, 228, 1668, 948, 588, 1308, 138, 1578, 858, 498, 1938, 1218, 318, 1758, 1038, 678, 1398, 1395, 1443, 723, 363, 1803, 1083, 183, 1623, 903, 543, 1983, 1263, 93, 1533, 813, 453, 1893, 1173, 273, 1713, 993, 633, 1353, 48, 1488, 768, 408, 1848, 1128, 985, 625, 1345, 175, 1615, 895, 535, 1975, 1255, 355, 1795, 1075, 715, 1435, 40, 1480, 760, 400, 1840, 1120, 220, 1660, 940, 580, 2020, 1300, 130, 1570, 850, 490, 1930, 1210, 310, 1750, 1030, 670, 1390, 85, 1525, 805, 445, 1885, 1165, 265, 1705, 1323, 153, 1593, 873, 513, 1953, 1233, 333, 1773, 1053, 693, 1413, 18, 1458, 738, 378, 1818, 1098, 198, 1638, 918, 558, 1998, 1278, 108, 1548, 828, 468, 1908, 1188, 288, 1728, 1008, 648, 1368, 63, 1503, 783, 423, 1863, 1143, 243, 1683, 963, 603, 1604, 884, 524, 1964, 1244, 344, 1784, 1064, 704, 1424, 29, 1469, 749, 389, 1829, 1109, 209, 1649, 929, 569, 2009, 1289, 119, 1559, 839, 479, 1919, 1199, 299, 1739, 1019, 659, 1379, 74, 1514, 794, 434, 1874, 1154, 254, 1694, 974, 614, 1334, 164, 501, 1941, 1221, 321, 1761, 1041, 681, 1401, 6, 1446, 726, 366, 1806, 1086, 186, 1626, 906, 546, 1986, 1266, 96, 1536, 816, 456, 1896, 1176, 276, 1716, 996, 636, 1356, 51, 1491, 771, 411, 1851, 1131, 231, 1671, 951, 591, 1311, 141, 1581, 861, 1249, 349, 1789, 1069, 709, 1429, 34, 1474, 754, 394, 1834, 1114, 214, 1654, 934, 574, 2014, 1294, 124, 1564, 844, 484, 1924, 1204, 304, 1744, 1024, 664, 1384, 79, 1519, 799, 439, 1879, 1159, 259, 1699, 979, 619, 1339, 169, 1609, 889, 529, 1969, 1767, 1047, 687, 1407, 12, 1452, 732, 372, 1812, 1092, 192, 1632, 912, 552, 1992, 1272, 102, 1542, 822, 462, 1902, 1182, 282, 1722, 1002, 642, 1362, 57, 1497, 777, 417, 1857, 1137, 237, 1677, 957, 597, 1317, 147, 1587, 867, 507, 1947, 1227, 327, 698, 1418, 23, 1463, 743, 383, 1823, 1103, 203, 1643, 923, 563, 2003, 1283, 113, 1553, 833, 473, 1913, 1193, 293, 1733, 1013, 653, 1373, 68, 1508, 788, 428, 1868, 1148, 248, 1688, 968, 608, 1328, 158, 1598, 878, 518, 1958, 1238, 338, 1778, 1058, 0, 1440, 720, 360, 1800, 1080, 180, 1620, 900, 540, 1980, 1260, 90, 1530, 810, 450, 1890, 1170, 270, 1710, 990, 630, 1350, 45, 1485, 765, 405, 1845, 1125, 225, 1665, 945, 585, 1305, 135, 1575, 855, 495, 1935, 1215, 315, 1755, 1035, 675, 3],
	                   
	                    [2, 398, 1902, 1150, 210, 1714, 962, 586, 2090, 1338, 116, 1620, 868, 492, 1996, 1244, 304, 1808, 1056, 680, 2184, 1432, 69, 1573, 821, 445, 1949, 1197, 257, 1761, 1009, 633, 2137, 1385, 163, 1667, 915, 539, 2043, 1291, 351, 1855, 1103, 727, 1479, 22, 1, 1914, 1162, 222, 1726, 974, 598, 2102, 1350, 128, 1632, 880, 504, 2008, 1256, 316, 1820, 1068, 692, 2196, 1444, 81, 1585, 833, 457, 1961, 1209, 269, 1773, 1021, 645, 2149, 1397, 175, 1679, 927, 551, 2055, 1303, 363, 1867, 1115, 739, 1491, 34, 1538, 786, 410, 198, 1702, 950, 574, 2078, 1326, 104, 1608, 856, 480, 1984, 1232, 292, 1796, 1044, 668, 2172, 1420, 57, 1561, 809, 433, 1937, 1185, 245, 1749, 997, 621, 2125, 1373, 151, 1655, 903, 527, 2031, 1279, 339, 1843, 1091, 715, 1467, 10, 1514, 762, 386, 1890, 1138, 980, 604, 2108, 1356, 134, 1638, 886, 510, 2014, 1262, 322, 1826, 1074, 698, 2202, 1450, 87, 1591, 839, 463, 1967, 1215, 275, 1779, 1027, 651, 2155, 1403, 181, 1685, 933, 557, 2061, 1309, 369, 1873, 1121, 745, 1497, 40, 1544, 792, 416, 1920, 1168, 228, 1732, 2084, 1332, 110, 1614, 862, 486, 1990, 1238, 298, 1802, 1050, 674, 2178, 1426, 63, 1567, 815, 439, 1943, 1191, 251, 1755, 1003, 627, 2131, 1379, 157, 1661, 909, 533, 2037, 1285, 345, 1849, 1097, 721, 1473, 16, 1520, 768, 392, 1896, 1144, 204, 1708, 956, 580, 122, 1626, 874, 498, 2002, 1250, 310, 1814, 1062, 686, 2190, 1438, 75, 1579, 827, 451, 1955, 1203, 263, 1767, 1015, 639, 2143, 1391, 169, 1673, 921, 545, 2049, 1297, 357, 1861, 1109, 733, 1485, 28, 1532, 780, 404, 1908, 1156, 216, 1720, 968, 592, 2096, 1344, 850, 474, 1978, 1226, 286, 1790, 1038, 662, 2166, 1414, 51, 1555, 803, 427, 1931, 1179, 239, 1743, 991, 615, 2119, 1367, 145, 1649, 897, 521, 2025, 1273, 333, 1837, 1085, 709, 1461, 4, 1508, 756, 380, 1884, 1132, 192, 1696, 944, 568, 2072, 1320, 98, 1602, 2017, 1265, 325, 1829, 1077, 701, 2205, 1453, 90, 1594, 842, 466, 1970, 1218, 278, 1782, 1030, 654, 2158, 1406, 184, 1688, 936, 560, 2064, 1312, 372, 1876, 1124, 748, 1500, 43, 1547, 795, 419, 1923, 1171, 231, 1735, 983, 607, 2111, 1359, 137, 1641, 889, 513, 301, 1805, 1053, 677, 2181, 1429, 66, 1570, 818, 442, 1946, 1194, 254, 1758, 1006, 630, 2134, 1382, 160, 1664, 912, 536, 2040, 1288, 348, 1852, 1100, 724, 1476, 19, 1523, 771, 395, 1899, 1147, 207, 1711, 959, 583, 2087, 1335, 113, 1617, 865, 489, 1993, 1241, 1065, 689, 2193, 1441, 78, 1582, 830, 454, 1958, 1206, 266, 1770, 1018, 642, 2146, 1394, 172, 1676, 924, 548, 2052, 1300, 360, 1864, 1112, 736, 1488, 31, 1535, 783, 407, 1911, 1159, 219, 1723, 971, 595, 2099, 1347, 125, 1629, 877, 501, 2005, 1253, 313, 1817, 2169, 1417, 54, 1558, 806, 430, 1934, 1182, 242, 1746, 994, 618, 2122, 1370, 148, 1652, 900, 524, 2028, 1276, 336, 1840, 1088, 712, 1464, 7, 1511, 759, 383, 1887, 1135, 195, 1699, 947, 571, 2075, 1323, 101, 1605, 853, 477, 1981, 1229, 289, 1793, 1041, 665, 84, 1588, 836, 460, 1964, 1212, 272, 1776, 1024, 648, 2152, 1400, 178, 1682, 930, 554, 2058, 1306, 366, 1870, 1118, 742, 1494, 37, 1541, 789, 413, 1917, 1165, 225, 1729, 977, 601, 2105, 1353, 131, 1635, 883, 507, 2011, 1259, 319, 1823, 1071, 695, 2199, 1447, 812, 436, 1940, 1188, 248, 1752, 1000, 624, 2128, 1376, 154, 1658, 906, 530, 2034, 1282, 342, 1846, 1094, 718, 1470, 13, 1517, 765, 389, 1893, 1141, 201, 1705, 953, 577, 2081, 1329, 107, 1611, 859, 483, 1987, 1235, 295, 1799, 1047, 671, 2175, 1423, 60, 1564, 1952, 1200, 260, 1764, 1012, 636, 2140, 1388, 166, 1670, 918, 542, 2046, 1294, 354, 1858, 1106, 730, 1482, 25, 1529, 777, 401, 1905, 1153, 213, 1717, 965, 589, 2093, 1341, 119, 1623, 871, 495, 1999, 1247, 307, 1811, 1059, 683, 2187, 1435, 72, 1576, 824, 448, 236, 1740, 988, 612, 2116, 1364, 142, 1646, 894, 518, 2022, 1270, 330, 1834, 1082, 706, 1458, 1526, 1505, 753, 377, 1881, 1129, 189, 1693, 941, 565, 2069, 1317, 95, 1599, 847, 471, 1975, 1223, 283, 1787, 1035, 659, 2163, 1411, 48, 1552, 800, 424, 1928, 1176, 1033, 657, 2161, 1409, 187, 1691, 939, 563, 2067, 1315, 375, 1879, 1127, 751, 1503, 46, 1550, 798, 422, 1926, 1174, 234, 1738, 986, 610, 2114, 1362, 140, 1644, 892, 516, 2020, 1268, 328, 1832, 1080, 704, 2208, 1456, 93, 1597, 845, 469, 1973, 1221, 281, 1785, 2138, 1386, 164, 1668, 916, 540, 2044, 1292, 352, 1856, 1104, 728, 1480, 23, 1527, 775, 399, 1903, 1151, 211, 1715, 963, 587, 2091, 1339, 117, 1621, 869, 493, 1997, 1245, 305, 1809, 1057, 681, 2185, 1433, 70, 1574, 822, 446, 1950, 1198, 258, 1762, 1010, 634, 176, 1680, 928, 552, 2056, 1304, 364, 1868, 1116, 740, 1492, 35, 1539, 787, 411, 1915, 1163, 223, 1727, 975, 599, 2103, 1351, 129, 1633, 881, 505, 2009, 1257, 317, 1821, 1069, 693, 2197, 1445, 82, 1586, 834, 458, 1962, 1210, 270, 1774, 1022, 646, 2150, 1398, 904, 528, 2032, 1280, 340, 1844, 1092, 716, 1468, 11, 1515, 763, 387, 1891, 1139, 199, 1703, 951, 575, 2079, 1327, 105, 1609, 857, 481, 1985, 1233, 293, 1797, 1045, 669, 2173, 1421, 58, 1562, 810, 434, 1938, 1186, 246, 1750, 998, 622, 2126, 1374, 152, 1656, 2062, 1310, 370, 1874, 1122, 746, 1498, 41, 1545, 793, 417, 1921, 1169, 229, 1733, 981, 605, 2109, 1357, 135, 1639, 887, 511, 2015, 1263, 323, 1827, 1075, 699, 2203, 1451, 88, 1592, 840, 464, 1968, 1216, 276, 1780, 1028, 652, 2156, 1404, 182, 1686, 934, 558, 346, 1850, 1098, 722, 1474, 17, 1521, 769, 393, 1897, 1145, 205, 1709, 957, 581, 2085, 1333, 111, 1615, 863, 487, 1991, 1239, 299, 1803, 1051, 675, 2179, 1427, 64, 1568, 816, 440, 1944, 1192, 252, 1756, 1004, 628, 2132, 1380, 158, 1662, 910, 534, 2038, 1286, 1110, 734, 1486, 29, 1533, 781, 405, 1909, 1157, 217, 1721, 969, 593, 2097, 1345, 123, 1627, 875, 499, 2003, 1251, 311, 1815, 1063, 687, 2191, 1439, 76, 1580, 828, 452, 1956, 1204, 264, 1768, 1016, 640, 2144, 1392, 170, 1674, 922, 546, 2050, 1298, 358, 1862, 1462, 5, 1509, 757, 381, 1885, 1133, 193, 1697, 945, 569, 2073, 1321, 99, 1603, 851, 475, 1979, 1227, 287, 1791, 1039, 663, 2167, 1415, 52, 1556, 804, 428, 1932, 1180, 240, 1744, 992, 616, 2120, 1368, 146, 1650, 898, 522, 2026, 1274, 334, 1838, 1086, 710, 1548, 796, 420, 1924, 1172, 232, 1736, 984, 608, 2112, 1360, 138, 1642, 890, 514, 2018, 1266, 326, 1830, 1078, 702, 2206, 1454, 91, 1595, 843, 467, 1971, 1219, 279, 1783, 1031, 655, 2159, 1407, 185, 1689, 937, 561, 2065, 1313, 373, 1877, 1125, 749, 1501, 44, 396, 1900, 1148, 208, 1712, 960, 584, 2088, 1336, 114, 1618, 866, 490, 1994, 1242, 302, 1806, 1054, 678, 2182, 1430, 67, 1571, 819, 443, 1947, 1195, 255, 1759, 1007, 631, 2135, 1383, 161, 1665, 913, 537, 2041, 1289, 349, 1853, 1101, 725, 1477, 20, 1524, 772, 1160, 220, 1724, 972, 596, 2100, 1348, 126, 1630, 878, 502, 2006, 1254, 314, 1818, 1066, 690, 2194, 1442, 79, 1583, 831, 455, 1959, 1207, 267, 1771, 1019, 643, 2147, 1395, 173, 1677, 925, 549, 2053, 1301, 361, 1865, 1113, 737, 1489, 32, 1536, 784, 408, 1912, 1700, 948, 572, 2076, 1324, 102, 1606, 854, 478, 1982, 1230, 290, 1794, 1042, 666, 2170, 1418, 55, 1559, 807, 431, 1935, 1183, 243, 1747, 995, 619, 2123, 1371, 149, 1653, 901, 525, 2029, 1277, 337, 1841, 1089, 713, 1465, 8, 1512, 760, 384, 1888, 1136, 196, 602, 2106, 1354, 132, 1636, 884, 508, 2012, 1260, 320, 1824, 1072, 696, 2200, 1448, 85, 1589, 837, 461, 1965, 1213, 273, 1777, 1025, 649, 2153, 1401, 179, 1683, 931, 555, 2059, 1307, 367, 1871, 1119, 743, 1495, 38, 1542, 790, 414, 1918, 1166, 226, 1730, 978, 1330, 108, 1612, 860, 484, 1988, 1236, 296, 1800, 1048, 672, 2176, 1424, 61, 1565, 813, 437, 1941, 1189, 249, 1753, 1001, 625, 2129, 1377, 155, 1659, 907, 531, 2035, 1283, 343, 1847, 1095, 719, 1471, 14, 1518, 766, 390, 1894, 1142, 202, 1706, 954, 578, 2082, 1624, 872, 496, 2000, 1248, 308, 1812, 1060, 684, 2188, 1436, 73, 1577, 825, 449, 1953, 1201, 261, 1765, 1013, 637, 2141, 1389, 167, 1671, 919, 543, 2047, 1295, 355, 1859, 1107, 731, 1483, 26, 1530, 778, 402, 1906, 1154, 214, 1718, 966, 590, 2094, 1342, 120, 472, 1976, 1224, 284, 1788, 1036, 660, 2164, 1412, 49, 1553, 801, 425, 1929, 1177, 237, 1741, 989, 613, 2117, 1365, 143, 1647, 895, 519, 2023, 1271, 331, 1835, 1083, 707, 1459, 774, 1506, 754, 378, 1882, 1130, 190, 1694, 942, 566, 2070, 1318, 96, 1600, 848, 1267, 327, 1831, 1079, 703, 2207, 1455, 92, 1596, 844, 468, 1972, 1220, 280, 1784, 1032, 656, 2160, 1408, 186, 1690, 938, 562, 2066, 1314, 374, 1878, 1126, 750, 1502, 45, 1549, 797, 421, 1925, 1173, 233, 1737, 985, 609, 2113, 1361, 139, 1643, 891, 515, 2019, 1807, 1055, 679, 2183, 1431, 68, 1572, 820, 444, 1948, 1196, 256, 1760, 1008, 632, 2136, 1384, 162, 1666, 914, 538, 2042, 1290, 350, 1854, 1102, 726, 1478, 21, 1525, 773, 397, 1901, 1149, 209, 1713, 961, 585, 2089, 1337, 115, 1619, 867, 491, 1995, 1243, 303, 691, 2195, 1443, 80, 1584, 832, 456, 1960, 1208, 268, 1772, 1020, 644, 2148, 1396, 174, 1678, 926, 550, 2054, 1302, 362, 1866, 1114, 738, 1490, 33, 1537, 785, 409, 1913, 1161, 221, 1725, 973, 597, 2101, 1349, 127, 1631, 879, 503, 2007, 1255, 315, 1819, 1067, 1419, 56, 1560, 808, 432, 1936, 1184, 244, 1748, 996, 620, 2124, 1372, 150, 1654, 902, 526, 2030, 1278, 338, 1842, 1090, 714, 1466, 9, 1513, 761, 385, 1889, 1137, 197, 1701, 949, 573, 2077, 1325, 103, 1607, 855, 479, 1983, 1231, 291, 1795, 1043, 667, 2171, 1590, 838, 462, 1966, 1214, 274, 1778, 1026, 650, 2154, 1402, 180, 1684, 932, 556, 2060, 1308, 368, 1872, 1120, 744, 1496, 39, 1543, 791, 415, 1919, 1167, 227, 1731, 979, 603, 2107, 1355, 133, 1637, 885, 509, 2013, 1261, 321, 1825, 1073, 697, 2201, 1449, 86, 438, 1942, 1190, 250, 1754, 1002, 626, 2130, 1378, 156, 1660, 908, 532, 2036, 1284, 344, 1848, 1096, 720, 1472, 15, 1519, 767, 391, 1895, 1143, 203, 1707, 955, 579, 2083, 1331, 109, 1613, 861, 485, 1989, 1237, 297, 1801, 1049, 673, 2177, 1425, 62, 1566, 814, 1202, 262, 1766, 1014, 638, 2142, 1390, 168, 1672, 920, 544, 2048, 1296, 356, 1860, 1108, 732, 1484, 27, 1531, 779, 403, 1907, 1155, 215, 1719, 967, 591, 2095, 1343, 121, 1625, 873, 497, 2001, 1249, 309, 1813, 1061, 685, 2189, 1437, 74, 1578, 826, 450, 1954, 1742, 990, 614, 2118, 1366, 144, 1648, 896, 520, 2024, 1272, 332, 1836, 1084, 708, 1460, 1457, 1507, 755, 379, 1883, 1131, 191, 1695, 943, 567, 2071, 1319, 97, 1601, 849, 473, 1977, 1225, 285, 1789, 1037, 661, 2165, 1413, 50, 1554, 802, 426, 1930, 1178, 238, 653, 2157, 1405, 183, 1687, 935, 559, 2063, 1311, 371, 1875, 1123, 747, 1499, 42, 1546, 794, 418, 1922, 1170, 230, 1734, 982, 606, 2110, 1358, 136, 1640, 888, 512, 2016, 1264, 324, 1828, 1076, 700, 2204, 1452, 89, 1593, 841, 465, 1969, 1217, 277, 1781, 1029, 1381, 159, 1663, 911, 535, 2039, 1287, 347, 1851, 1099, 723, 1475, 18, 1522, 770, 394, 1898, 1146, 206, 1710, 958, 582, 2086, 1334, 112, 1616, 864, 488, 1992, 1240, 300, 1804, 1052, 676, 2180, 1428, 65, 1569, 817, 441, 1945, 1193, 253, 1757, 1005, 629, 2133, 1675, 923, 547, 2051, 1299, 359, 1863, 1111, 735, 1487, 30, 1534, 782, 406, 1910, 1158, 218, 1722, 970, 594, 2098, 1346, 124, 1628, 876, 500, 2004, 1252, 312, 1816, 1064, 688, 2192, 1440, 77, 1581, 829, 453, 1957, 1205, 265, 1769, 1017, 641, 2145, 1393, 171, 523, 2027, 1275, 335, 1839, 1087, 711, 1463, 6, 1510, 758, 382, 1886, 1134, 194, 1698, 946, 570, 2074, 1322, 100, 1604, 852, 476, 1980, 1228, 288, 1792, 1040, 664, 2168, 1416, 53, 1557, 805, 429, 1933, 1181, 241, 1745, 993, 617, 2121, 1369, 147, 1651, 899, 1305, 365, 1869, 1117, 741, 1493, 36, 1540, 788, 412, 1916, 1164, 224, 1728, 976, 600, 2104, 1352, 130, 1634, 882, 506, 2010, 1258, 318, 1822, 1070, 694, 2198, 1446, 83, 1587, 835, 459, 1963, 1211, 271, 1775, 1023, 647, 2151, 1399, 177, 1681, 929, 553, 2057, 1845, 1093, 717, 1469, 12, 1516, 764, 388, 1892, 1140, 200, 1704, 952, 576, 2080, 1328, 106, 1610, 858, 482, 1986, 1234, 294, 1798, 1046, 670, 2174, 1422, 59, 1563, 811, 435, 1939, 1187, 247, 1751, 999, 623, 2127, 1375, 153, 1657, 905, 529, 2033, 1281, 341, 729, 1481, 24, 1528, 776, 400, 1904, 1152, 212, 1716, 964, 588, 2092, 1340, 118, 1622, 870, 494, 1998, 1246, 306, 1810, 1058, 682, 2186, 1434, 71, 1575, 823, 447, 1951, 1199, 259, 1763, 1011, 635, 2139, 1387, 165, 1669, 917, 541, 2045, 1293, 353, 1857, 1105, 0, 1504, 752, 376, 1880, 1128, 188, 1692, 940, 564, 2068, 1316, 94, 1598, 846, 470, 1974, 1222, 282, 1786, 1034, 658, 2162, 1410, 47, 1551, 799, 423, 1927, 1175, 235, 1739, 987, 611, 2115, 1363, 141, 1645, 893, 517, 2021, 1269, 329, 1833, 1081, 705, 3]]
	            };
	
	            var ECCModeMap = {
	                ECC000: 0,
	                ECC050: 1,
	                ECC080: 2,
	                ECC100: 3,
	                ECC140: 4
	            };
	            function getECC(mode) {
	                var index = ECCModeMap[mode];
	                return {
	                    eccInfo: Constants.ECCInfos[index],
	                    headerBits: Constants.HeaderBits[index]
	                };
	            }
	
	            var SymbolSizeKeys = ['square9', 'square11', 'square13', 'square15', 'square17', 'square19', 'square21', 'square23', 'square25', 'square27', 'square29', 'square31', 'square33', 'square35', 'square37', 'square39', 'square41', 'square43', 'square45', 'square47', 'square49'];
	
	            function getSymbolSizeInfo(key) {
	                var index = SymbolSizeKeys.indexOf(key);
	                if (index < 0) {
	                    throw new _exceptions.BadArgumentsException({ ecc000_140SymbolSize: key });
	                }
	                return Constants.SymbolCapacities[index];
	            }
	            function getSymbolSizeValue(key) {
	                return SymbolSizeKeys.indexOf(key);
	            }
	            function getProperSymbolSize(symbolSize, bitLength) {
	                if (symbolSize == 'auto') {
	                    symbolSize = 'square9';
	                    for (var i = 0; i <= SymbolSizeKeys.length - 1; ++i) {
	                        if (bitLength <= Constants.SymbolCapacities[i]) {
	                            symbolSize = SymbolSizeKeys[i];
	                            break;
	                        }
	                    }
	                }
	                return symbolSize;
	            }
	
	            function getModuleMapping(key) {
	                var index = SymbolSizeKeys.indexOf(key);
	                return Constants.ModuleMapping[index];
	            }
	
	            function setFinder(matrix, symbolRows) {
	                var firstRow = matrix[0];
	                for (var i = 0; i < symbolRows; i++) {
	                    if ((0, _utils.isEven)(i)) {
	                        firstRow[i] = 1;
	                    } else {
	                        firstRow[i] = 0;
	                    }
	                }
	                var lastRow = matrix[symbolRows - 1];
	                for (var _i = 0; _i < symbolRows; _i++) {
	                    lastRow[_i] = 1;
	                }
	                for (var _i2 = 1; _i2 < symbolRows - 1; _i2++) {
	                    matrix[_i2][0] = 1;
	
	                    if ((0, _utils.isEven)(_i2)) {
	                        matrix[_i2][symbolRows - 1] = 1;
	                    } else {
	                        matrix[_i2][symbolRows - 1] = 0;
	                    }
	                }
	            }
	
	            function setRegionData(matrix, symbolRows, it) {
	                symbolRows -= 2;
	
	                for (var r = 0; r < symbolRows; ++r) {
	                    for (var c = 0; c < symbolRows; ++c) {
	                        matrix[1 + r][1 + c] = +it.getBit(r * symbolRows + c);
	                    }
	                }
	            }
	
	            exports.default = {
	                chooseEncodationScheme: chooseEncodationScheme,
	                Constants: Constants,
	                getECC: getECC,
	                getProperSymbolSize: getProperSymbolSize,
	                getSymbolSizeInfo: getSymbolSizeInfo,
	                getSymbolSizeValue: getSymbolSizeValue,
	                getCodeWord: getCodeWord,
	                getModuleMapping: getModuleMapping,
	                setBit: setBit,
	                setFinder: setFinder,
	                setRegionData: setRegionData,
	                createModules: _ECC200Helper2.default.createModules
	            };
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            var BitwiseIterator = function () {
	                function BitwiseIterator(data, offset) {
	                    _classCallCheck(this, BitwiseIterator);
	
	                    this._data = data;
	                    this.offset = offset || 0;
	                }
	
	                _createClass(BitwiseIterator, [{
	                    key: "fetchBit",
	                    value: function fetchBit() {
	                        return this.getBit(this.offset++);
	                    }
	                }, {
	                    key: "getBit",
	                    value: function getBit(offset) {
	                        if (offset >= this.bitLength) {
	                            return false;
	                        }
	
	                        return (this._data[~~(offset / 8)] & 0x80 >> offset % 8) != 0;
	                    }
	                }, {
	                    key: "setBit",
	                    value: function setBit(offset, bit) {
	                        var index = ~~(offset / 8);
	                        var mask = (0x80 >> offset % 8) % 256;
	                        this._data[index] &= (this._data[index] & ~mask) % 256;
	                        if (bit) {
	                            this._data[index] |= mask;
	                        }
	                    }
	                }, {
	                    key: "putBit",
	                    value: function putBit(bit) {
	                        this.setBit(this.offset, bit);
	                        this.offset++;
	                    }
	                }, {
	                    key: "putBitsMSF",
	                    value: function putBitsMSF(data, bits, offset) {
	                        var hasOffset = !!offset;
	                        if (!hasOffset) {
	                            offset = this.offset;
	                        }
	
	                        var mask = 0x80000000;
	                        for (var i = 0; i < bits; ++i) {
	                            this.setBit(offset + i, (data & mask) != 0);
	                            mask /= 2;
	                        }
	
	                        if (!hasOffset) {
	                            this.offset += bits;
	                        }
	                    }
	                }, {
	                    key: "putBitsLSF",
	                    value: function putBitsLSF(data, bits, offset) {
	                        var hasOffset = !!offset;
	                        if (!hasOffset) {
	                            offset = this.offset;
	                        }
	
	                        var mask = 1;
	                        for (var i = 0; i < bits; ++i) {
	                            this.setBit(offset + i, (data & mask) != 0);
	                            mask <<= 1;
	                        }
	
	                        if (!hasOffset) {
	                            this.offset += bits;
	                        }
	                    }
	                }, {
	                    key: "bitLength",
	                    get: function get() {
	                        return this._data.length * 8;
	                    }
	                }, {
	                    key: "currentBit",
	                    get: function get() {
	                        return this.getBit(this.offset);
	                    }
	                }]);
	
	                return BitwiseIterator;
	            }();
	
	            exports.default = BitwiseIterator;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            var _index = __webpack_require__(2);
	
	            var _index2 = _interopRequireDefault(_index);
	
	            var _EAN = __webpack_require__(46);
	
	            var _EAN2 = _interopRequireDefault(_EAN);
	
	            var _EAN3 = __webpack_require__(47);
	
	            var _EAN4 = _interopRequireDefault(_EAN3);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            _index2.default.registerEncoder('EAN8', _EAN2.default);
	            _index2.default.registerEncoder('EAN13', _EAN4.default);
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _EANBase2 = __webpack_require__(12);
	
	            var _EANBase3 = _interopRequireDefault(_EANBase2);
	
	            var _helper = __webpack_require__(9);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            var _exceptions = __webpack_require__(1);
	
	            var _utils = __webpack_require__(0);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	            function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	            var EAN8 = function (_EANBase) {
	                _inherits(EAN8, _EANBase);
	
	                function EAN8(originConfig) {
	                    _classCallCheck(this, EAN8);
	
	                    var _this = _possibleConstructorReturn(this, (EAN8.__proto__ || Object.getPrototypeOf(EAN8)).call(this, originConfig));
	
	                    var text = _this.config.text;
	
	
	                    if (text.length < 8) {
	                        text += _this.checksum(text, true);
	                    }
	                    _this.text = text;
	                    var data = _this.calculateData();
	                    _this.adjustDesiredSize(data);
	                    _this.convertToShape(data);
	                    return _this;
	                }
	
	                _createClass(EAN8, [{
	                    key: 'validate',
	                    value: function validate() {
	                        var text = this.config.text;
	
	
	                        var reg = /^[0-9](\d{6}||\d{7})$/;
	                        if (!reg.test(text)) {
	                            throw new _exceptions.InvalidTextException(text, 'Text should be numbers. The length should be 7 or 8.');
	                        }
	
	                        if (text.length === 8) {
	                            var checkDigit = this.checksum(text.substr(0, 7), true);
	
	                            if (checkDigit != text[7]) {
	                                throw new _exceptions.InvalidTextException(text, 'Check digit is invalid.');
	                            }
	                        }
	                    }
	                }, {
	                    key: 'calculateData',
	                    value: function calculateData() {
	                        var _this2 = this;
	
	                        var text = this.text,
	                            isTextGroup = this.isTextGroup;
	
	                        var leftStr = text.substr(0, 4);
	                        var rightStr = text.substr(4, 4);
	
	                        var data = [];
	                        data.push({
	                            text: '<',
	                            role: 'LEFT_QUIET_ZONE'
	                        });
	                        data.push({
	                            binary: _helper2.default.NORMAL_GUARD,
	                            role: 'GUARD'
	                        });
	
	                        if (isTextGroup) {
	                            (0, _utils.str2Array)(leftStr).forEach(function (c, i) {
	                                data.push({
	                                    binary: _this2.encodeChar(c, _helper2.default.ean8LeftStructure, i),
	                                    text: c
	                                });
	                            });
	                        } else {
	                            data.push({
	                                binary: this.encode(leftStr, _helper2.default.ean8LeftStructure),
	                                text: leftStr
	                            });
	                        }
	
	                        data.push({
	                            binary: _helper2.default.CENTRE_GUARD,
	                            role: 'GUARD'
	                        });
	
	                        if (isTextGroup) {
	                            (0, _utils.str2Array)(rightStr).forEach(function (c, i) {
	                                data.push({
	                                    binary: _this2.encodeChar(c, _helper2.default.rightStructure, i),
	                                    text: c
	                                });
	                            });
	                        } else {
	                            data.push({
	                                binary: this.encode(rightStr, _helper2.default.rightStructure),
	                                text: rightStr
	                            });
	                        }
	
	                        data.push({
	                            binary: _helper2.default.NORMAL_GUARD,
	                            role: 'GUARD'
	                        });
	
	                        data.push({
	                            text: '>',
	                            role: 'RIGHT_QUIET_ZONE'
	                        });
	
	                        return data;
	                    }
	                }]);
	
	                return EAN8;
	            }(_EANBase3.default);
	
	            exports.default = EAN8;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _EANBase2 = __webpack_require__(12);
	
	            var _EANBase3 = _interopRequireDefault(_EANBase2);
	
	            var _helper = __webpack_require__(9);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            var _exceptions = __webpack_require__(1);
	
	            var _utils = __webpack_require__(0);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	            function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	            var EAN13 = function (_EANBase) {
	                _inherits(EAN13, _EANBase);
	
	                function EAN13(originConfig) {
	                    _classCallCheck(this, EAN13);
	
	                    var _this = _possibleConstructorReturn(this, (EAN13.__proto__ || Object.getPrototypeOf(EAN13)).call(this, originConfig));
	
	                    var _this$config = _this.config,
	                        text = _this$config.text,
	                        addOn = _this$config.addOn,
	                        addOnHeight = _this$config.addOnHeight;
	
	
	                    if (text.length < 13) {
	                        text += _this.checksum(text);
	                    }
	
	                    _this.text = text;
	
	                    if ((0, _utils.isDefined)(addOn)) {
	                        _this.addOn = '' + addOn;
	                        if (addOnHeight !== 'auto') {
	                            if ((0, _utils.isNumberLike)(addOnHeight)) {
	                                addOnHeight = +addOnHeight;
	                            } else {
	                                addOnHeight = (0, _utils.convertUnit)((0, _utils.fixSize2PixelDefault)(addOnHeight));
	                                _this.addOnHeightInPiexl = addOnHeight;
	                                addOnHeight = addOnHeight / _this.style.unitValue;
	                            }
	                        }
	
	                        _this.addOnHeight = addOnHeight;
	                    }
	
	                    var data = _this.calculateData();
	                    _this.adjustDesiredSize(data);
	                    _this.convertToShape(data);
	                    return _this;
	                }
	
	                _createClass(EAN13, [{
	                    key: 'validate',
	                    value: function validate() {
	                        var text = this.config.text;
	
	                       
	
	                        var reg = /^[1-9](\d{11}||\d{12})$/;
	                        if (!reg.test(text)) {
	                            throw new _exceptions.InvalidTextException(text, 'Text should be numbers. And it should not start with 0. The length should be 12 or 13.');
	                        }
	
	                        if (text.length === 13) {
	                            var checkDigit = this.checksum(text.substr(0, 12));
	
	                            if (checkDigit != text[12]) {
	                                throw new _exceptions.InvalidTextException(text, 'Check digit is invalid.');
	                            }
	                        }
	                    }
	                }, {
	                    key: 'calculateData',
	                    value: function calculateData() {
	                        var _this2 = this;
	
	                        var text = this.text,
	                            addOn = this.addOn,
	                            isTextGroup = this.isTextGroup;
	
	                        var leftStr = text.substr(1, 6);
	                        var rightStr = text.substr(7, 6);
	                        var leftStructure = _helper2.default.leftStructure[text[0]];
	                        var data = [];
	                        data.push({
	                            text: text[0],
	                            role: 'LEFT_QUIET_ZONE'
	                        });
	                        data.push({
	                            binary: _helper2.default.NORMAL_GUARD,
	                            role: 'GUARD'
	                        });
	
	                        if (isTextGroup) {
	                            (0, _utils.str2Array)(leftStr).forEach(function (c, i) {
	                                data.push({
	                                    binary: _this2.encodeChar(c, leftStructure, i),
	                                    text: c
	                                });
	                            });
	                        } else {
	                            data.push({
	                                binary: this.encode(leftStr, leftStructure),
	                                text: leftStr
	                            });
	                        }
	
	                        data.push({
	                            binary: _helper2.default.CENTRE_GUARD,
	                            role: 'GUARD'
	                        });
	
	                        if (isTextGroup) {
	                            (0, _utils.str2Array)(rightStr).forEach(function (c, i) {
	                                data.push({
	                                    binary: _this2.encodeChar(c, _helper2.default.rightStructure, i),
	                                    text: c
	                                });
	                            });
	                        } else {
	                            data.push({
	                                binary: this.encode(rightStr, _helper2.default.rightStructure),
	                                text: rightStr
	                            });
	                        }
	
	                        data.push({
	                            binary: _helper2.default.NORMAL_GUARD,
	                            role: 'GUARD'
	                        });
	
	                        if (!addOn) {
	                            data.push({
	                                text: '>',
	                                role: 'NO_ADDON_RIGHT_QUIET_ZONE'
	                            });
	                        } else {
	                            data.push({
	                                role: 'ADDON_QUIET_ZONE'
	                            });
	                            this.addon(data);
	                        }
	
	                        return data;
	                    }
	                }, {
	                    key: 'addon',
	                    value: function addon(data) {
	                        var _this3 = this;
	
	                        var addOn = this.addOn,
	                            isTextGroup = this.isTextGroup;
	
	                        if (addOn.length === 2) {
	                            var structure = void 0,
	                                leftBinary = void 0,
	                                rightBinary = void 0;
	                            structure = _helper2.default.get2DigitAddOnTable(addOn);
	                            leftBinary = this.encodeChar(addOn[0], structure.leftStructure, 0);
	                            rightBinary = this.encodeChar(addOn[1], structure.rightStructure, 0);
	
	                            if (isTextGroup) {
	                                data.push({
	                                    binary: _helper2.default.ADD_ON_GUARD,
	                                    role: 'ADDON'
	                                });
	                                data.push({
	                                    binary: leftBinary,
	                                    text: addOn[0],
	                                    role: 'ADDON'
	                                });
	                                data.push({
	                                    binary: _helper2.default.ADD_ON_DELINEATOR,
	                                    role: 'ADDON'
	                                });
	                                data.push({
	                                    binary: rightBinary,
	                                    text: addOn[1],
	                                    role: 'ADDON'
	                                });
	                            } else {
	                                data.push({
	                                    binary: _helper2.default.ADD_ON_GUARD + leftBinary + _helper2.default.ADD_ON_DELINEATOR + rightBinary,
	                                    text: addOn,
	                                    role: 'ADDON'
	                                });
	                            }
	                        } else if (addOn.length === 5) {
	                            var _structure = _helper2.default.get5DigitAddOnTable(addOn);
	
	                            if (isTextGroup) {
	                                data.push({
	                                    binary: _helper2.default.ADD_ON_GUARD,
	                                    role: 'ADDON'
	                                });
	
	                                (0, _utils.str2Array)(addOn).forEach(function (char, index) {
	                                    data.push({
	                                        binary: _this3.encodeFor5DigitAddOn(char, index, _structure),
	                                        text: char,
	                                        role: 'ADDON'
	                                    });
	                                    if (index < addOn.length - 1) {
	                                        data.push({
	                                            binary: _helper2.default.ADD_ON_DELINEATOR,
	                                            role: 'ADDON'
	                                        });
	                                    }
	                                });
	                            } else {
	                                var binary = (0, _utils.str2Array)(addOn).reduce(function (result, char, index) {
	                                    result += _this3.encodeFor5DigitAddOn(char, index, _structure);
	                                    if (index < addOn.length - 1) {
	                                        result += _helper2.default.ADD_ON_DELINEATOR;
	                                    }
	                                    return result;
	                                }, '');
	
	                                data.push({
	                                    binary: _helper2.default.ADD_ON_GUARD + binary,
	                                    text: addOn,
	                                    role: 'ADDON'
	                                });
	                            }
	                        } else {
	                            throw new _exceptions.BadArgumentsException(addOn);
	                        }
	
	                        data.push({
	                            text: '>',
	                            role: 'ADDON_RIGHT_QUIET_ZONE'
	                        });
	                    }
	                }, {
	                    key: 'encodeFor5DigitAddOn',
	                    value: function encodeFor5DigitAddOn(char, index, structure) {
	                        var useTable = _helper2.default.TABLE[structure[index]];
	                        return useTable[char];
	                    }
	                }]);
	
	                return EAN13;
	            }(_EANBase3.default);
	
	            exports.default = EAN13;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _index = __webpack_require__(2);
	
	            var _index2 = _interopRequireDefault(_index);
	
	            var _Code2 = __webpack_require__(11);
	
	            var _Code3 = _interopRequireDefault(_Code2);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	            function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	            var GS1_128 = function (_Code) {
	                _inherits(GS1_128, _Code);
	
	                function GS1_128(originConfig) {
	                    _classCallCheck(this, GS1_128);
	
	                    return _possibleConstructorReturn(this, (GS1_128.__proto__ || Object.getPrototypeOf(GS1_128)).call(this, originConfig, true));
	                }
	
	                return GS1_128;
	            }(_Code3.default);
	
	            exports.default = GS1_128;
	
	
	            _index2.default.registerEncoder('GS1_128', GS1_128);
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _TwoDimensionalBarcode = __webpack_require__(7);
	
	            var _TwoDimensionalBarcode2 = _interopRequireDefault(_TwoDimensionalBarcode);
	
	            var _index = __webpack_require__(2);
	
	            var _index2 = _interopRequireDefault(_index);
	
	            var _helper = __webpack_require__(50);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            var _utils = __webpack_require__(0);
	
	            var _ReedSolomon = __webpack_require__(51);
	
	            var _ReedSolomon2 = _interopRequireDefault(_ReedSolomon);
	
	            var _bignumber = __webpack_require__(52);
	
	            var _bignumber2 = _interopRequireDefault(_bignumber);
	
	            var _exceptions = __webpack_require__(1);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	            function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	            var PDF417 = function (_TwoDimensionalBarcod) {
	                _inherits(PDF417, _TwoDimensionalBarcod);
	
	                function PDF417(originConfig) {
	                    _classCallCheck(this, PDF417);
	
	                    var _this = _possibleConstructorReturn(this, (PDF417.__proto__ || Object.getPrototypeOf(PDF417)).call(this, originConfig, _helper2.default.defaultConfig));
	
	                    var _this$config = _this.config,
	                        text = _this$config.text,
	                        errorCorrectionLevel = _this$config.errorCorrectionLevel,
	                        columns = _this$config.columns,
	                        rows = _this$config.rows,
	                        compact = _this$config.compact;
	
	                    _this.text = text;
	                    _this.ecl = errorCorrectionLevel === 'auto' ? errorCorrectionLevel : +errorCorrectionLevel;
	                    _this.columns = columns === 'auto' ? columns : +columns;
	                    _this.rows = rows === 'auto' ? rows : +rows;
	                    _this.compact = !!compact;
	                    var modes = _helper2.default.compaction(text);
	                    _this.encode(modes);
	                    _this.genEcc();
	                    var matrix = _this.fillMatrix();
	                    _this.adjustDesiredSize(matrix);
	                    _this.convertToShape(matrix);
	                    return _this;
	                }
	
	                _createClass(PDF417, [{
	                    key: 'validate',
	                    value: function validate() {
	                        var _config = this.config,
	                            text = _config.text,
	                            errorCorrectionLevel = _config.errorCorrectionLevel,
	                            rows = _config.rows,
	                            columns = _config.columns;
	
	                        var reg = /^[\x00-\xFF]+$/;
	                        if (!reg.test(text)) {
	                            throw new _exceptions.InvalidTextException(text);
	                        }
	
	                        if ((0, _utils.isNumberLike)(errorCorrectionLevel) && (errorCorrectionLevel < 0 || errorCorrectionLevel > 8)) {
	                            throw new _exceptions.BadArgumentsException({ errorCorrectionLevel: errorCorrectionLevel }, 'ErrorCorrectionLevel is from 0 - 8.');
	                        }
	                        if ((0, _utils.isNumberLike)(rows) && (rows < 3 || rows > 90)) {
	                            throw new _exceptions.BadArgumentsException({ rows: rows }, 'Rows is from 3 - 90.');
	                        }
	                        if ((0, _utils.isNumberLike)(columns) && (columns < 1 || columns > 30)) {
	                            throw new _exceptions.BadArgumentsException({ columns: columns }, 'Columns is from 1 - 30.');
	                        }
	                    }
	                }, {
	                    key: 'encodeNC',
	                    value: function encodeNC(group) {
	                        var text = group.text;
	                        var result = [];
	                        (0, _utils.sliceString)(text, 44, function (str) {
	                            var sum = new _bignumber2.default('1' + str);
	                            var i = 0;
	                            while (true) {
	                               
	                                var bNum = sum.dividedToIntegerBy((0, _bignumber2.default)(900).toPower(i)).modulo(900);
	                                if (bNum.lessThan(1)) {
	                                    break;
	                                }
	                                result.unshift(+bNum.toString());
	                                i++;
	                            }
	                        });
	
	                        result.unshift(_helper2.default.MODE_NC);
	                        return result;
	                    }
	                }, {
	                    key: 'encodeBC',
	                    value: function encodeBC(group) {
	                        var text = group.text;
	                        var result = [];
	                        (0, _utils.sliceString)(text, 6, function (str) {
	                            if (str.length === 6) {
	                                var p = 5,
	                                    sum = 0;
	
	                                (0, _utils.sliceString)(str, 1, function (c) {
	                                    sum += c.charCodeAt(0) * Math.pow(256, p--);
	                                });
	
	                                var i = 0,
	                                    t = Math.floor(sum / Math.pow(900, i)) % 900;
	                                do {
	                                    result.unshift(t);
	                                    t = Math.floor(sum / Math.pow(900, ++i)) % 900;
	                                } while (t > 0);
	                            } else {
	                                (0, _utils.sliceString)(str, 1, function (c) {
	                                    result.push(c.charCodeAt(0));
	                                });
	                            }
	                        });
	
	                        result.unshift(group.mode);
	                        return result;
	                    }
	                }, {
	                    key: 'encodeTC',
	                    value: function encodeTC(group) {
	                        var codes = [];
	                        var lastMode = 'al';
	                        group.subModes.forEach(function (s) {
	                            if (lastMode !== s.mode) {
	                                codes = codes.concat(_helper2.default.getTCSubModeValue(s.mode, lastMode));
	                            }
	
	                            (0, _utils.sliceString)(s.text, 1, function (c) {
	                                codes.push(_helper2.default.getTCValue(c, s.mode));
	                            });
	
	                            if (s.mode !== 'ps' && s.mode !== 'as') {
	                                lastMode = s.mode;
	                            }
	                        });
	
	                        var result = [_helper2.default.MODE_TC];
	                        (0, _utils.sliceArray)(codes, 2, function (arr) {
	                            if (arr.length === 2) {
	                                result.push(arr[0] * 30 + arr[1]);
	                            } else {
	                                result.push(arr[0] * 30 + 29);
	                            }
	                        });
	
	                        return result;
	                    }
	                }, {
	                    key: 'encode',
	                    value: function encode(modes) {
	                        var _this2 = this;
	
	                        var data = [];
	                        modes.forEach(function (g) {
	                            switch (g.mode) {
	                                case _helper2.default.MODE_TC:
	                                    data = data.concat(_this2.encodeTC(g));
	                                    break;
	                                case _helper2.default.MODE_BC:
	                                case _helper2.default.MODE_BC6:
	                                case _helper2.default.MODE_BC_SHIFT:
	                                    data = data.concat(_this2.encodeBC(g));
	                                    break;
	                                case _helper2.default.MODE_NC:
	                                    data = data.concat(_this2.encodeNC(g));
	                                    break;
	                            }
	                        });
	                        if (data[0] === _helper2.default.MODE_TC) {
	                            data.shift();
	                        }
	                        this.data = data;
	                    }
	                }, {
	                    key: 'genEcc',
	                    value: function genEcc() {
	                        var data = this.data,
	                            ecl = this.ecl,
	                            columns = this.columns,
	                            rows = this.rows;
	
	                        if (ecl === 'auto') {
	                            this.ecl = ecl = _helper2.default.getAutoECL(data);
	                        }
	                        var eccLength = Math.pow(2, ecl + 1);
	
	                        var totalLength = data.length + 1 + eccLength;
	
	                        if (rows === 'auto' && columns === 'auto') {
	                            var _helper$getAutoRowAnd = _helper2.default.getAutoRowAndCol(totalLength),
	                                col = _helper$getAutoRowAnd.col,
	                                row = _helper$getAutoRowAnd.row;
	
	                            this.columns = columns = col;
	                            this.rows = rows = row;
	                        } else {
	                            if (rows === 'auto') {
	                                rows = Math.ceil(totalLength / columns);
	                                if (rows > 90) {
	                                    throw new _exceptions.BadArgumentsException({ columns: columns }, 'Columns is not large enough');
	                                }
	                                rows = rows < 3 ? 3 : rows;
	                                this.rows = rows;
	                            } else if (columns === 'auto') {
	                                columns = Math.ceil(totalLength / rows);
	                                if (columns > 30) {
	                                    throw new _exceptions.BadArgumentsException({ rows: rows }, 'Rows is not large enough');
	                                }
	                                this.columns = columns;
	                            }
	                        }
	                        var dataSize = columns * rows - eccLength;
	                        data.unshift(dataSize);
	
	                        if (data.length > _helper2.default.MAX_DATA_NUM || data.length > dataSize) {
	                            throw new _exceptions.TextTooLargeException();
	                        }
	
	                        while (data.length < dataSize) {
	                            data.push(_helper2.default.PAD);
	                        }
	
	                        this.ecc = (0, _ReedSolomon2.default)(data, this.ecl);
	                    }
	                }, {
	                    key: 'fillMatrix',
	                    value: function fillMatrix() {
	                        var data = this.data,
	                            ecc = this.ecc,
	                            columns = this.columns,
	                            rows = this.rows,
	                            ecl = this.ecl,
	                            compact = this.compact;
	
	
	                        var cws = data.concat(ecc);
	
	                        var values = _helper2.default.createModules(rows, columns);
	                        cws.forEach(function (c, index) {
	                            var row = Math.floor(index / columns);
	                            var col = index % columns;
	                            values[row][col] = _helper2.default.getPattern(row, c);
	                        });
	
	                        var matrix = [];
	                        values.forEach(function (row, rowIndex) {
	                            var leftIndicator = _helper2.default.getPattern(rowIndex, _helper2.default.getIndicator(rowIndex, rows, ecl, columns)),
	                                rightIndicator = _helper2.default.getPattern(rowIndex, _helper2.default.getIndicator(rowIndex, rows, ecl, columns, true));
	                            var pattern = [_helper2.default.START, leftIndicator.toString(2)];
	                            row.forEach(function (v) {
	                                pattern.push(v.toString(2));
	                            });
	                            if (!compact) {
	                                pattern.push(rightIndicator.toString(2));
	                                pattern.push(_helper2.default.END);
	                            } else {
	                                pattern.push(_helper2.default.COMPACT_END);
	                            }
	
	                            matrix.push(pattern);
	                        });
	
	                        return matrix;
	                    }
	                }, {
	                    key: 'adjustDesiredSize',
	                    value: function adjustDesiredSize(matrix) {
	                        var desiredSize = this.config.desiredSize,
	                            quietZone = this.quietZone,
	                            fontHeight = this.fontHeight,
	                            containerWidth = this.containerWidth,
	                            containerHeight = this.containerHeight;
	
	
	                        if (!desiredSize) {
	                            return;
	                        }
	                        var symbolWidth = matrix[0].reduce(function (sum, n) {
	                                return sum += n.length;
	                            }, 0) + (0, _utils.getQuietZoneRelativeValue)(quietZone.left) + (0, _utils.getQuietZoneRelativeValue)(quietZone.right);
	                        containerWidth = containerWidth - (0, _utils.getQuietZonePixelValue)(quietZone.left) - (0, _utils.getQuietZonePixelValue)(quietZone.right);
	                        var uWidth = void 0,
	                            unitValue = void 0;
	                        if (desiredSize.forceRounding) {
	                            uWidth = ~~(containerWidth / symbolWidth);
	                            unitValue = uWidth < 1 ? 1 : uWidth;
	                        } else {
	                            unitValue = uWidth = containerWidth / symbolWidth;
	                        }
	                        containerHeight = containerHeight - (0, _utils.getQuietZonePixelValue)(quietZone.top) - (0, _utils.getQuietZonePixelValue)(quietZone.bottom);
	                        this.style.unitValue = unitValue;
	                        this.style.fontSizeInUnit = fontHeight / unitValue;
	                        this.height = containerHeight / unitValue - (0, _utils.getQuietZoneRelativeValue)(quietZone.top) - (0, _utils.getQuietZoneRelativeValue)(quietZone.bottom);
	
	                        Object.keys(quietZone).forEach(function (item) {
	                            if (quietZone[item].originIsAbsoluteValue) {
	                                quietZone[item].relativeValue = quietZone[item].pixelValue / unitValue;
	                            }
	                        });
	                    }
	                }, {
	                    key: 'convertToShape',
	                    value: function convertToShape(matrix) {
	                        var height = this.height,
	                            quietZone = this.quietZone;
	
	                        var rowHeight = height / matrix.length;
	
	                        var shapes = [];
	
	                        var startX = void 0,
	                            startY = quietZone.top.relativeValue;
	
	                        matrix.forEach(function (row) {
	                            startX = quietZone.left.relativeValue;
	                            row.forEach(function (pattern) {
	                                (0, _utils.combineTruthy)(pattern).forEach(function (num) {
	                                    if (num !== 0) {
	                                        shapes.push({
	                                            type: 'rect',
	                                            x: startX,
	                                            y: startY,
	                                            width: num,
	                                            height: rowHeight
	                                        });
	                                        startX += num;
	                                    } else {
	                                        startX++;
	                                    }
	                                });
	                            });
	                            startY += rowHeight;
	                        });
	
	                        this.size = {
	                            width: startX + quietZone.right.relativeValue,
	                            height: startY + quietZone.bottom.relativeValue
	                        };
	
	                        this.shapes = shapes;
	                    }
	                }]);
	
	                return PDF417;
	            }(_TwoDimensionalBarcode2.default);
	
	            exports.default = PDF417;
	
	
	            _index2.default.registerEncoder('PDF417', PDF417);
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _utils = __webpack_require__(0);
	
	            var CLUSTERS = [
	
	                [0x1d5c0, 0x1eaf0, 0x1f57c, 0x1d4e0, 0x1ea78, 0x1f53e, 0x1a8c0, 0x1d470, 0x1a860, 0x15040,
	                    0x1a830, 0x15020, 0x1adc0, 0x1d6f0, 0x1eb7c, 0x1ace0, 0x1d678, 0x1eb3e, 0x158c0, 0x1ac70,
	                    0x15860, 0x15dc0, 0x1aef0, 0x1d77c, 0x15ce0, 0x1ae78, 0x1d73e, 0x15c70, 0x1ae3c, 0x15ef0,
	                    0x1af7c, 0x15e78, 0x1af3e, 0x15f7c, 0x1f5fa, 0x1d2e0, 0x1e978, 0x1f4be, 0x1a4c0, 0x1d270,
	                    0x1e93c, 0x1a460, 0x1d238, 0x14840, 0x1a430, 0x1d21c, 0x14820, 0x1a418, 0x14810, 0x1a6e0,
	                    0x1d378, 0x1e9be, 0x14cc0, 0x1a670, 0x1d33c, 0x14c60, 0x1a638, 0x1d31e, 0x14c30, 0x1a61c,
	                    0x14ee0, 0x1a778, 0x1d3be, 0x14e70, 0x1a73c, 0x14e38, 0x1a71e, 0x14f78, 0x1a7be, 0x14f3c,
	                    0x14f1e, 0x1a2c0, 0x1d170, 0x1e8bc, 0x1a260, 0x1d138, 0x1e89e, 0x14440, 0x1a230, 0x1d11c,
	                    0x14420, 0x1a218, 0x14410, 0x14408, 0x146c0, 0x1a370, 0x1d1bc, 0x14660, 0x1a338, 0x1d19e,
	                    0x14630, 0x1a31c, 0x14618, 0x1460c, 0x14770, 0x1a3bc, 0x14738, 0x1a39e, 0x1471c, 0x147bc,
	                    0x1a160, 0x1d0b8, 0x1e85e, 0x14240, 0x1a130, 0x1d09c, 0x14220, 0x1a118, 0x1d08e, 0x14210,
	                    0x1a10c, 0x14208, 0x1a106, 0x14360, 0x1a1b8, 0x1d0de, 0x14330, 0x1a19c, 0x14318, 0x1a18e,
	                    0x1430c, 0x14306, 0x1a1de, 0x1438e, 0x14140, 0x1a0b0, 0x1d05c, 0x14120, 0x1a098, 0x1d04e,
	                    0x14110, 0x1a08c, 0x14108, 0x1a086, 0x14104, 0x141b0, 0x14198, 0x1418c, 0x140a0, 0x1d02e,
	                    0x1a04c, 0x1a046, 0x14082, 0x1cae0, 0x1e578, 0x1f2be, 0x194c0, 0x1ca70, 0x1e53c, 0x19460,
	                    0x1ca38, 0x1e51e, 0x12840, 0x19430, 0x12820, 0x196e0, 0x1cb78, 0x1e5be, 0x12cc0, 0x19670,
	                    0x1cb3c, 0x12c60, 0x19638, 0x12c30, 0x12c18, 0x12ee0, 0x19778, 0x1cbbe, 0x12e70, 0x1973c,
	                    0x12e38, 0x12e1c, 0x12f78, 0x197be, 0x12f3c, 0x12fbe, 0x1dac0, 0x1ed70, 0x1f6bc, 0x1da60,
	                    0x1ed38, 0x1f69e, 0x1b440, 0x1da30, 0x1ed1c, 0x1b420, 0x1da18, 0x1ed0e, 0x1b410, 0x1da0c,
	                    0x192c0, 0x1c970, 0x1e4bc, 0x1b6c0, 0x19260, 0x1c938, 0x1e49e, 0x1b660, 0x1db38, 0x1ed9e,
	                    0x16c40, 0x12420, 0x19218, 0x1c90e, 0x16c20, 0x1b618, 0x16c10, 0x126c0, 0x19370, 0x1c9bc,
	                    0x16ec0, 0x12660, 0x19338, 0x1c99e, 0x16e60, 0x1b738, 0x1db9e, 0x16e30, 0x12618, 0x16e18,
	                    0x12770, 0x193bc, 0x16f70, 0x12738, 0x1939e, 0x16f38, 0x1b79e, 0x16f1c, 0x127bc, 0x16fbc,
	                    0x1279e, 0x16f9e, 0x1d960, 0x1ecb8, 0x1f65e, 0x1b240, 0x1d930, 0x1ec9c, 0x1b220, 0x1d918,
	                    0x1ec8e, 0x1b210, 0x1d90c, 0x1b208, 0x1b204, 0x19160, 0x1c8b8, 0x1e45e, 0x1b360, 0x19130,
	                    0x1c89c, 0x16640, 0x12220, 0x1d99c, 0x1c88e, 0x16620, 0x12210, 0x1910c, 0x16610, 0x1b30c,
	                    0x19106, 0x12204, 0x12360, 0x191b8, 0x1c8de, 0x16760, 0x12330, 0x1919c, 0x16730, 0x1b39c,
	                    0x1918e, 0x16718, 0x1230c, 0x12306, 0x123b8, 0x191de, 0x167b8, 0x1239c, 0x1679c, 0x1238e,
	                    0x1678e, 0x167de, 0x1b140, 0x1d8b0, 0x1ec5c, 0x1b120, 0x1d898, 0x1ec4e, 0x1b110, 0x1d88c,
	                    0x1b108, 0x1d886, 0x1b104, 0x1b102, 0x12140, 0x190b0, 0x1c85c, 0x16340, 0x12120, 0x19098,
	                    0x1c84e, 0x16320, 0x1b198, 0x1d8ce, 0x16310, 0x12108, 0x19086, 0x16308, 0x1b186, 0x16304,
	                    0x121b0, 0x190dc, 0x163b0, 0x12198, 0x190ce, 0x16398, 0x1b1ce, 0x1638c, 0x12186, 0x16386,
	                    0x163dc, 0x163ce, 0x1b0a0, 0x1d858, 0x1ec2e, 0x1b090, 0x1d84c, 0x1b088, 0x1d846, 0x1b084,
	                    0x1b082, 0x120a0, 0x19058, 0x1c82e, 0x161a0, 0x12090, 0x1904c, 0x16190, 0x1b0cc, 0x19046,
	                    0x16188, 0x12084, 0x16184, 0x12082, 0x120d8, 0x161d8, 0x161cc, 0x161c6, 0x1d82c, 0x1d826,
	                    0x1b042, 0x1902c, 0x12048, 0x160c8, 0x160c4, 0x160c2, 0x18ac0, 0x1c570, 0x1e2bc, 0x18a60,
	                    0x1c538, 0x11440, 0x18a30, 0x1c51c, 0x11420, 0x18a18, 0x11410, 0x11408, 0x116c0, 0x18b70,
	                    0x1c5bc, 0x11660, 0x18b38, 0x1c59e, 0x11630, 0x18b1c, 0x11618, 0x1160c, 0x11770, 0x18bbc,
	                    0x11738, 0x18b9e, 0x1171c, 0x117bc, 0x1179e, 0x1cd60, 0x1e6b8, 0x1f35e, 0x19a40, 0x1cd30,
	                    0x1e69c, 0x19a20, 0x1cd18, 0x1e68e, 0x19a10, 0x1cd0c, 0x19a08, 0x1cd06, 0x18960, 0x1c4b8,
	                    0x1e25e, 0x19b60, 0x18930, 0x1c49c, 0x13640, 0x11220, 0x1cd9c, 0x1c48e, 0x13620, 0x19b18,
	                    0x1890c, 0x13610, 0x11208, 0x13608, 0x11360, 0x189b8, 0x1c4de, 0x13760, 0x11330, 0x1cdde,
	                    0x13730, 0x19b9c, 0x1898e, 0x13718, 0x1130c, 0x1370c, 0x113b8, 0x189de, 0x137b8, 0x1139c,
	                    0x1379c, 0x1138e, 0x113de, 0x137de, 0x1dd40, 0x1eeb0, 0x1f75c, 0x1dd20, 0x1ee98, 0x1f74e,
	                    0x1dd10, 0x1ee8c, 0x1dd08, 0x1ee86, 0x1dd04, 0x19940, 0x1ccb0, 0x1e65c, 0x1bb40, 0x19920,
	                    0x1eedc, 0x1e64e, 0x1bb20, 0x1dd98, 0x1eece, 0x1bb10, 0x19908, 0x1cc86, 0x1bb08, 0x1dd86,
	                    0x19902, 0x11140, 0x188b0, 0x1c45c, 0x13340, 0x11120, 0x18898, 0x1c44e, 0x17740, 0x13320,
	                    0x19998, 0x1ccce, 0x17720, 0x1bb98, 0x1ddce, 0x18886, 0x17710, 0x13308, 0x19986, 0x17708,
	                    0x11102, 0x111b0, 0x188dc, 0x133b0, 0x11198, 0x188ce, 0x177b0, 0x13398, 0x199ce, 0x17798,
	                    0x1bbce, 0x11186, 0x13386, 0x111dc, 0x133dc, 0x111ce, 0x177dc, 0x133ce, 0x1dca0, 0x1ee58,
	                    0x1f72e, 0x1dc90, 0x1ee4c, 0x1dc88, 0x1ee46, 0x1dc84, 0x1dc82, 0x198a0, 0x1cc58, 0x1e62e,
	                    0x1b9a0, 0x19890, 0x1ee6e, 0x1b990, 0x1dccc, 0x1cc46, 0x1b988, 0x19884, 0x1b984, 0x19882,
	                    0x1b982, 0x110a0, 0x18858, 0x1c42e, 0x131a0, 0x11090, 0x1884c, 0x173a0, 0x13190, 0x198cc,
	                    0x18846, 0x17390, 0x1b9cc, 0x11084, 0x17388, 0x13184, 0x11082, 0x13182, 0x110d8, 0x1886e,
	                    0x131d8, 0x110cc, 0x173d8, 0x131cc, 0x110c6, 0x173cc, 0x131c6, 0x110ee, 0x173ee, 0x1dc50,
	                    0x1ee2c, 0x1dc48, 0x1ee26, 0x1dc44, 0x1dc42, 0x19850, 0x1cc2c, 0x1b8d0, 0x19848, 0x1cc26,
	                    0x1b8c8, 0x1dc66, 0x1b8c4, 0x19842, 0x1b8c2, 0x11050, 0x1882c, 0x130d0, 0x11048, 0x18826,
	                    0x171d0, 0x130c8, 0x19866, 0x171c8, 0x1b8e6, 0x11042, 0x171c4, 0x130c2, 0x171c2, 0x130ec,
	                    0x171ec, 0x171e6, 0x1ee16, 0x1dc22, 0x1cc16, 0x19824, 0x19822, 0x11028, 0x13068, 0x170e8,
	                    0x11022, 0x13062, 0x18560, 0x10a40, 0x18530, 0x10a20, 0x18518, 0x1c28e, 0x10a10, 0x1850c,
	                    0x10a08, 0x18506, 0x10b60, 0x185b8, 0x1c2de, 0x10b30, 0x1859c, 0x10b18, 0x1858e, 0x10b0c,
	                    0x10b06, 0x10bb8, 0x185de, 0x10b9c, 0x10b8e, 0x10bde, 0x18d40, 0x1c6b0, 0x1e35c, 0x18d20,
	                    0x1c698, 0x18d10, 0x1c68c, 0x18d08, 0x1c686, 0x18d04, 0x10940, 0x184b0, 0x1c25c, 0x11b40,
	                    0x10920, 0x1c6dc, 0x1c24e, 0x11b20, 0x18d98, 0x1c6ce, 0x11b10, 0x10908, 0x18486, 0x11b08,
	                    0x18d86, 0x10902, 0x109b0, 0x184dc, 0x11bb0, 0x10998, 0x184ce, 0x11b98, 0x18dce, 0x11b8c,
	                    0x10986, 0x109dc, 0x11bdc, 0x109ce, 0x11bce, 0x1cea0, 0x1e758, 0x1f3ae, 0x1ce90, 0x1e74c,
	                    0x1ce88, 0x1e746, 0x1ce84, 0x1ce82, 0x18ca0, 0x1c658, 0x19da0, 0x18c90, 0x1c64c, 0x19d90,
	                    0x1cecc, 0x1c646, 0x19d88, 0x18c84, 0x19d84, 0x18c82, 0x19d82, 0x108a0, 0x18458, 0x119a0,
	                    0x10890, 0x1c66e, 0x13ba0, 0x11990, 0x18ccc, 0x18446, 0x13b90, 0x19dcc, 0x10884, 0x13b88,
	                    0x11984, 0x10882, 0x11982, 0x108d8, 0x1846e, 0x119d8, 0x108cc, 0x13bd8, 0x119cc, 0x108c6,
	                    0x13bcc, 0x119c6, 0x108ee, 0x119ee, 0x13bee, 0x1ef50, 0x1f7ac, 0x1ef48, 0x1f7a6, 0x1ef44,
	                    0x1ef42, 0x1ce50, 0x1e72c, 0x1ded0, 0x1ef6c, 0x1e726, 0x1dec8, 0x1ef66, 0x1dec4, 0x1ce42,
	                    0x1dec2, 0x18c50, 0x1c62c, 0x19cd0, 0x18c48, 0x1c626, 0x1bdd0, 0x19cc8, 0x1ce66, 0x1bdc8,
	                    0x1dee6, 0x18c42, 0x1bdc4, 0x19cc2, 0x1bdc2, 0x10850, 0x1842c, 0x118d0, 0x10848, 0x18426,
	                    0x139d0, 0x118c8, 0x18c66, 0x17bd0, 0x139c8, 0x19ce6, 0x10842, 0x17bc8, 0x1bde6, 0x118c2,
	                    0x17bc4, 0x1086c, 0x118ec, 0x10866, 0x139ec, 0x118e6, 0x17bec, 0x139e6, 0x17be6, 0x1ef28,
	                    0x1f796, 0x1ef24, 0x1ef22, 0x1ce28, 0x1e716, 0x1de68, 0x1ef36, 0x1de64, 0x1ce22, 0x1de62,
	                    0x18c28, 0x1c616, 0x19c68, 0x18c24, 0x1bce8, 0x19c64, 0x18c22, 0x1bce4, 0x19c62, 0x1bce2,
	                    0x10828, 0x18416, 0x11868, 0x18c36, 0x138e8, 0x11864, 0x10822, 0x179e8, 0x138e4, 0x11862,
	                    0x179e4, 0x138e2, 0x179e2, 0x11876, 0x179f6, 0x1ef12, 0x1de34, 0x1de32, 0x19c34, 0x1bc74,
	                    0x1bc72, 0x11834, 0x13874, 0x178f4, 0x178f2, 0x10540, 0x10520, 0x18298, 0x10510, 0x10508,
	                    0x10504, 0x105b0, 0x10598, 0x1058c, 0x10586, 0x105dc, 0x105ce, 0x186a0, 0x18690, 0x1c34c,
	                    0x18688, 0x1c346, 0x18684, 0x18682, 0x104a0, 0x18258, 0x10da0, 0x186d8, 0x1824c, 0x10d90,
	                    0x186cc, 0x10d88, 0x186c6, 0x10d84, 0x10482, 0x10d82, 0x104d8, 0x1826e, 0x10dd8, 0x186ee,
	                    0x10dcc, 0x104c6, 0x10dc6, 0x104ee, 0x10dee, 0x1c750, 0x1c748, 0x1c744, 0x1c742, 0x18650,
	                    0x18ed0, 0x1c76c, 0x1c326, 0x18ec8, 0x1c766, 0x18ec4, 0x18642, 0x18ec2, 0x10450, 0x10cd0,
	                    0x10448, 0x18226, 0x11dd0, 0x10cc8, 0x10444, 0x11dc8, 0x10cc4, 0x10442, 0x11dc4, 0x10cc2,
	                    0x1046c, 0x10cec, 0x10466, 0x11dec, 0x10ce6, 0x11de6, 0x1e7a8, 0x1e7a4, 0x1e7a2, 0x1c728,
	                    0x1cf68, 0x1e7b6, 0x1cf64, 0x1c722, 0x1cf62, 0x18628, 0x1c316, 0x18e68, 0x1c736, 0x19ee8,
	                    0x18e64, 0x18622, 0x19ee4, 0x18e62, 0x19ee2, 0x10428, 0x18216, 0x10c68, 0x18636, 0x11ce8,
	                    0x10c64, 0x10422, 0x13de8, 0x11ce4, 0x10c62, 0x13de4, 0x11ce2, 0x10436, 0x10c76, 0x11cf6,
	                    0x13df6, 0x1f7d4, 0x1f7d2, 0x1e794, 0x1efb4, 0x1e792, 0x1efb2, 0x1c714, 0x1cf34, 0x1c712,
	                    0x1df74, 0x1cf32, 0x1df72, 0x18614, 0x18e34, 0x18612, 0x19e74, 0x18e32, 0x1bef4],
	
	                [0x1f560, 0x1fab8, 0x1ea40, 0x1f530, 0x1fa9c, 0x1ea20, 0x1f518, 0x1fa8e, 0x1ea10, 0x1f50c,
	                    0x1ea08, 0x1f506, 0x1ea04, 0x1eb60, 0x1f5b8, 0x1fade, 0x1d640, 0x1eb30, 0x1f59c, 0x1d620,
	                    0x1eb18, 0x1f58e, 0x1d610, 0x1eb0c, 0x1d608, 0x1eb06, 0x1d604, 0x1d760, 0x1ebb8, 0x1f5de,
	                    0x1ae40, 0x1d730, 0x1eb9c, 0x1ae20, 0x1d718, 0x1eb8e, 0x1ae10, 0x1d70c, 0x1ae08, 0x1d706,
	                    0x1ae04, 0x1af60, 0x1d7b8, 0x1ebde, 0x15e40, 0x1af30, 0x1d79c, 0x15e20, 0x1af18, 0x1d78e,
	                    0x15e10, 0x1af0c, 0x15e08, 0x1af06, 0x15f60, 0x1afb8, 0x1d7de, 0x15f30, 0x1af9c, 0x15f18,
	                    0x1af8e, 0x15f0c, 0x15fb8, 0x1afde, 0x15f9c, 0x15f8e, 0x1e940, 0x1f4b0, 0x1fa5c, 0x1e920,
	                    0x1f498, 0x1fa4e, 0x1e910, 0x1f48c, 0x1e908, 0x1f486, 0x1e904, 0x1e902, 0x1d340, 0x1e9b0,
	                    0x1f4dc, 0x1d320, 0x1e998, 0x1f4ce, 0x1d310, 0x1e98c, 0x1d308, 0x1e986, 0x1d304, 0x1d302,
	                    0x1a740, 0x1d3b0, 0x1e9dc, 0x1a720, 0x1d398, 0x1e9ce, 0x1a710, 0x1d38c, 0x1a708, 0x1d386,
	                    0x1a704, 0x1a702, 0x14f40, 0x1a7b0, 0x1d3dc, 0x14f20, 0x1a798, 0x1d3ce, 0x14f10, 0x1a78c,
	                    0x14f08, 0x1a786, 0x14f04, 0x14fb0, 0x1a7dc, 0x14f98, 0x1a7ce, 0x14f8c, 0x14f86, 0x14fdc,
	                    0x14fce, 0x1e8a0, 0x1f458, 0x1fa2e, 0x1e890, 0x1f44c, 0x1e888, 0x1f446, 0x1e884, 0x1e882,
	                    0x1d1a0, 0x1e8d8, 0x1f46e, 0x1d190, 0x1e8cc, 0x1d188, 0x1e8c6, 0x1d184, 0x1d182, 0x1a3a0,
	                    0x1d1d8, 0x1e8ee, 0x1a390, 0x1d1cc, 0x1a388, 0x1d1c6, 0x1a384, 0x1a382, 0x147a0, 0x1a3d8,
	                    0x1d1ee, 0x14790, 0x1a3cc, 0x14788, 0x1a3c6, 0x14784, 0x14782, 0x147d8, 0x1a3ee, 0x147cc,
	                    0x147c6, 0x147ee, 0x1e850, 0x1f42c, 0x1e848, 0x1f426, 0x1e844, 0x1e842, 0x1d0d0, 0x1e86c,
	                    0x1d0c8, 0x1e866, 0x1d0c4, 0x1d0c2, 0x1a1d0, 0x1d0ec, 0x1a1c8, 0x1d0e6, 0x1a1c4, 0x1a1c2,
	                    0x143d0, 0x1a1ec, 0x143c8, 0x1a1e6, 0x143c4, 0x143c2, 0x143ec, 0x143e6, 0x1e828, 0x1f416,
	                    0x1e824, 0x1e822, 0x1d068, 0x1e836, 0x1d064, 0x1d062, 0x1a0e8, 0x1d076, 0x1a0e4, 0x1a0e2,
	                    0x141e8, 0x1a0f6, 0x141e4, 0x141e2, 0x1e814, 0x1e812, 0x1d034, 0x1d032, 0x1a074, 0x1a072,
	                    0x1e540, 0x1f2b0, 0x1f95c, 0x1e520, 0x1f298, 0x1f94e, 0x1e510, 0x1f28c, 0x1e508, 0x1f286,
	                    0x1e504, 0x1e502, 0x1cb40, 0x1e5b0, 0x1f2dc, 0x1cb20, 0x1e598, 0x1f2ce, 0x1cb10, 0x1e58c,
	                    0x1cb08, 0x1e586, 0x1cb04, 0x1cb02, 0x19740, 0x1cbb0, 0x1e5dc, 0x19720, 0x1cb98, 0x1e5ce,
	                    0x19710, 0x1cb8c, 0x19708, 0x1cb86, 0x19704, 0x19702, 0x12f40, 0x197b0, 0x1cbdc, 0x12f20,
	                    0x19798, 0x1cbce, 0x12f10, 0x1978c, 0x12f08, 0x19786, 0x12f04, 0x12fb0, 0x197dc, 0x12f98,
	                    0x197ce, 0x12f8c, 0x12f86, 0x12fdc, 0x12fce, 0x1f6a0, 0x1fb58, 0x16bf0, 0x1f690, 0x1fb4c,
	                    0x169f8, 0x1f688, 0x1fb46, 0x168fc, 0x1f684, 0x1f682, 0x1e4a0, 0x1f258, 0x1f92e, 0x1eda0,
	                    0x1e490, 0x1fb6e, 0x1ed90, 0x1f6cc, 0x1f246, 0x1ed88, 0x1e484, 0x1ed84, 0x1e482, 0x1ed82,
	                    0x1c9a0, 0x1e4d8, 0x1f26e, 0x1dba0, 0x1c990, 0x1e4cc, 0x1db90, 0x1edcc, 0x1e4c6, 0x1db88,
	                    0x1c984, 0x1db84, 0x1c982, 0x1db82, 0x193a0, 0x1c9d8, 0x1e4ee, 0x1b7a0, 0x19390, 0x1c9cc,
	                    0x1b790, 0x1dbcc, 0x1c9c6, 0x1b788, 0x19384, 0x1b784, 0x19382, 0x1b782, 0x127a0, 0x193d8,
	                    0x1c9ee, 0x16fa0, 0x12790, 0x193cc, 0x16f90, 0x1b7cc, 0x193c6, 0x16f88, 0x12784, 0x16f84,
	                    0x12782, 0x127d8, 0x193ee, 0x16fd8, 0x127cc, 0x16fcc, 0x127c6, 0x16fc6, 0x127ee, 0x1f650,
	                    0x1fb2c, 0x165f8, 0x1f648, 0x1fb26, 0x164fc, 0x1f644, 0x1647e, 0x1f642, 0x1e450, 0x1f22c,
	                    0x1ecd0, 0x1e448, 0x1f226, 0x1ecc8, 0x1f666, 0x1ecc4, 0x1e442, 0x1ecc2, 0x1c8d0, 0x1e46c,
	                    0x1d9d0, 0x1c8c8, 0x1e466, 0x1d9c8, 0x1ece6, 0x1d9c4, 0x1c8c2, 0x1d9c2, 0x191d0, 0x1c8ec,
	                    0x1b3d0, 0x191c8, 0x1c8e6, 0x1b3c8, 0x1d9e6, 0x1b3c4, 0x191c2, 0x1b3c2, 0x123d0, 0x191ec,
	                    0x167d0, 0x123c8, 0x191e6, 0x167c8, 0x1b3e6, 0x167c4, 0x123c2, 0x167c2, 0x123ec, 0x167ec,
	                    0x123e6, 0x167e6, 0x1f628, 0x1fb16, 0x162fc, 0x1f624, 0x1627e, 0x1f622, 0x1e428, 0x1f216,
	                    0x1ec68, 0x1f636, 0x1ec64, 0x1e422, 0x1ec62, 0x1c868, 0x1e436, 0x1d8e8, 0x1c864, 0x1d8e4,
	                    0x1c862, 0x1d8e2, 0x190e8, 0x1c876, 0x1b1e8, 0x1d8f6, 0x1b1e4, 0x190e2, 0x1b1e2, 0x121e8,
	                    0x190f6, 0x163e8, 0x121e4, 0x163e4, 0x121e2, 0x163e2, 0x121f6, 0x163f6, 0x1f614, 0x1617e,
	                    0x1f612, 0x1e414, 0x1ec34, 0x1e412, 0x1ec32, 0x1c834, 0x1d874, 0x1c832, 0x1d872, 0x19074,
	                    0x1b0f4, 0x19072, 0x1b0f2, 0x120f4, 0x161f4, 0x120f2, 0x161f2, 0x1f60a, 0x1e40a, 0x1ec1a,
	                    0x1c81a, 0x1d83a, 0x1903a, 0x1b07a, 0x1e2a0, 0x1f158, 0x1f8ae, 0x1e290, 0x1f14c, 0x1e288,
	                    0x1f146, 0x1e284, 0x1e282, 0x1c5a0, 0x1e2d8, 0x1f16e, 0x1c590, 0x1e2cc, 0x1c588, 0x1e2c6,
	                    0x1c584, 0x1c582, 0x18ba0, 0x1c5d8, 0x1e2ee, 0x18b90, 0x1c5cc, 0x18b88, 0x1c5c6, 0x18b84,
	                    0x18b82, 0x117a0, 0x18bd8, 0x1c5ee, 0x11790, 0x18bcc, 0x11788, 0x18bc6, 0x11784, 0x11782,
	                    0x117d8, 0x18bee, 0x117cc, 0x117c6, 0x117ee, 0x1f350, 0x1f9ac, 0x135f8, 0x1f348, 0x1f9a6,
	                    0x134fc, 0x1f344, 0x1347e, 0x1f342, 0x1e250, 0x1f12c, 0x1e6d0, 0x1e248, 0x1f126, 0x1e6c8,
	                    0x1f366, 0x1e6c4, 0x1e242, 0x1e6c2, 0x1c4d0, 0x1e26c, 0x1cdd0, 0x1c4c8, 0x1e266, 0x1cdc8,
	                    0x1e6e6, 0x1cdc4, 0x1c4c2, 0x1cdc2, 0x189d0, 0x1c4ec, 0x19bd0, 0x189c8, 0x1c4e6, 0x19bc8,
	                    0x1cde6, 0x19bc4, 0x189c2, 0x19bc2, 0x113d0, 0x189ec, 0x137d0, 0x113c8, 0x189e6, 0x137c8,
	                    0x19be6, 0x137c4, 0x113c2, 0x137c2, 0x113ec, 0x137ec, 0x113e6, 0x137e6, 0x1fba8, 0x175f0,
	                    0x1bafc, 0x1fba4, 0x174f8, 0x1ba7e, 0x1fba2, 0x1747c, 0x1743e, 0x1f328, 0x1f996, 0x132fc,
	                    0x1f768, 0x1fbb6, 0x176fc, 0x1327e, 0x1f764, 0x1f322, 0x1767e, 0x1f762, 0x1e228, 0x1f116,
	                    0x1e668, 0x1e224, 0x1eee8, 0x1f776, 0x1e222, 0x1eee4, 0x1e662, 0x1eee2, 0x1c468, 0x1e236,
	                    0x1cce8, 0x1c464, 0x1dde8, 0x1cce4, 0x1c462, 0x1dde4, 0x1cce2, 0x1dde2, 0x188e8, 0x1c476,
	                    0x199e8, 0x188e4, 0x1bbe8, 0x199e4, 0x188e2, 0x1bbe4, 0x199e2, 0x1bbe2, 0x111e8, 0x188f6,
	                    0x133e8, 0x111e4, 0x177e8, 0x133e4, 0x111e2, 0x177e4, 0x133e2, 0x177e2, 0x111f6, 0x133f6,
	                    0x1fb94, 0x172f8, 0x1b97e, 0x1fb92, 0x1727c, 0x1723e, 0x1f314, 0x1317e, 0x1f734, 0x1f312,
	                    0x1737e, 0x1f732, 0x1e214, 0x1e634, 0x1e212, 0x1ee74, 0x1e632, 0x1ee72, 0x1c434, 0x1cc74,
	                    0x1c432, 0x1dcf4, 0x1cc72, 0x1dcf2, 0x18874, 0x198f4, 0x18872, 0x1b9f4, 0x198f2, 0x1b9f2,
	                    0x110f4, 0x131f4, 0x110f2, 0x173f4, 0x131f2, 0x173f2, 0x1fb8a, 0x1717c, 0x1713e, 0x1f30a,
	                    0x1f71a, 0x1e20a, 0x1e61a, 0x1ee3a, 0x1c41a, 0x1cc3a, 0x1dc7a, 0x1883a, 0x1987a, 0x1b8fa,
	                    0x1107a, 0x130fa, 0x171fa, 0x170be, 0x1e150, 0x1f0ac, 0x1e148, 0x1f0a6, 0x1e144, 0x1e142,
	                    0x1c2d0, 0x1e16c, 0x1c2c8, 0x1e166, 0x1c2c4, 0x1c2c2, 0x185d0, 0x1c2ec, 0x185c8, 0x1c2e6,
	                    0x185c4, 0x185c2, 0x10bd0, 0x185ec, 0x10bc8, 0x185e6, 0x10bc4, 0x10bc2, 0x10bec, 0x10be6,
	                    0x1f1a8, 0x1f8d6, 0x11afc, 0x1f1a4, 0x11a7e, 0x1f1a2, 0x1e128, 0x1f096, 0x1e368, 0x1e124,
	                    0x1e364, 0x1e122, 0x1e362, 0x1c268, 0x1e136, 0x1c6e8, 0x1c264, 0x1c6e4, 0x1c262, 0x1c6e2,
	                    0x184e8, 0x1c276, 0x18de8, 0x184e4, 0x18de4, 0x184e2, 0x18de2, 0x109e8, 0x184f6, 0x11be8,
	                    0x109e4, 0x11be4, 0x109e2, 0x11be2, 0x109f6, 0x11bf6, 0x1f9d4, 0x13af8, 0x19d7e, 0x1f9d2,
	                    0x13a7c, 0x13a3e, 0x1f194, 0x1197e, 0x1f3b4, 0x1f192, 0x13b7e, 0x1f3b2, 0x1e114, 0x1e334,
	                    0x1e112, 0x1e774, 0x1e332, 0x1e772, 0x1c234, 0x1c674, 0x1c232, 0x1cef4, 0x1c672, 0x1cef2,
	                    0x18474, 0x18cf4, 0x18472, 0x19df4, 0x18cf2, 0x19df2, 0x108f4, 0x119f4, 0x108f2, 0x13bf4,
	                    0x119f2, 0x13bf2, 0x17af0, 0x1bd7c, 0x17a78, 0x1bd3e, 0x17a3c, 0x17a1e, 0x1f9ca, 0x1397c,
	                    0x1fbda, 0x17b7c, 0x1393e, 0x17b3e, 0x1f18a, 0x1f39a, 0x1f7ba, 0x1e10a, 0x1e31a, 0x1e73a,
	                    0x1ef7a, 0x1c21a, 0x1c63a, 0x1ce7a, 0x1defa, 0x1843a, 0x18c7a, 0x19cfa, 0x1bdfa, 0x1087a,
	                    0x118fa, 0x139fa, 0x17978, 0x1bcbe, 0x1793c, 0x1791e, 0x138be, 0x179be, 0x178bc, 0x1789e,
	                    0x1785e, 0x1e0a8, 0x1e0a4, 0x1e0a2, 0x1c168, 0x1e0b6, 0x1c164, 0x1c162, 0x182e8, 0x1c176,
	                    0x182e4, 0x182e2, 0x105e8, 0x182f6, 0x105e4, 0x105e2, 0x105f6, 0x1f0d4, 0x10d7e, 0x1f0d2,
	                    0x1e094, 0x1e1b4, 0x1e092, 0x1e1b2, 0x1c134, 0x1c374, 0x1c132, 0x1c372, 0x18274, 0x186f4,
	                    0x18272, 0x186f2, 0x104f4, 0x10df4, 0x104f2, 0x10df2, 0x1f8ea, 0x11d7c, 0x11d3e, 0x1f0ca,
	                    0x1f1da, 0x1e08a, 0x1e19a, 0x1e3ba, 0x1c11a, 0x1c33a, 0x1c77a, 0x1823a, 0x1867a, 0x18efa,
	                    0x1047a, 0x10cfa, 0x11dfa, 0x13d78, 0x19ebe, 0x13d3c, 0x13d1e, 0x11cbe, 0x13dbe, 0x17d70,
	                    0x1bebc, 0x17d38, 0x1be9e, 0x17d1c, 0x17d0e, 0x13cbc, 0x17dbc, 0x13c9e, 0x17d9e, 0x17cb8,
	                    0x1be5e, 0x17c9c, 0x17c8e, 0x13c5e, 0x17cde, 0x17c5c, 0x17c4e, 0x17c2e, 0x1c0b4, 0x1c0b2,
	                    0x18174, 0x18172, 0x102f4, 0x102f2, 0x1e0da, 0x1c09a, 0x1c1ba, 0x1813a, 0x1837a, 0x1027a,
	                    0x106fa, 0x10ebe, 0x11ebc, 0x11e9e, 0x13eb8, 0x19f5e, 0x13e9c, 0x13e8e, 0x11e5e, 0x13ede,
	                    0x17eb0, 0x1bf5c, 0x17e98, 0x1bf4e, 0x17e8c, 0x17e86, 0x13e5c, 0x17edc, 0x13e4e, 0x17ece,
	                    0x17e58, 0x1bf2e, 0x17e4c, 0x17e46, 0x13e2e, 0x17e6e, 0x17e2c, 0x17e26, 0x10f5e, 0x11f5c,
	                    0x11f4e, 0x13f58, 0x19fae, 0x13f4c, 0x13f46, 0x11f2e, 0x13f6e, 0x13f2c, 0x13f26],
	
	                [0x1abe0, 0x1d5f8, 0x153c0, 0x1a9f0, 0x1d4fc, 0x151e0, 0x1a8f8, 0x1d47e, 0x150f0, 0x1a87c,
	                    0x15078, 0x1fad0, 0x15be0, 0x1adf8, 0x1fac8, 0x159f0, 0x1acfc, 0x1fac4, 0x158f8, 0x1ac7e,
	                    0x1fac2, 0x1587c, 0x1f5d0, 0x1faec, 0x15df8, 0x1f5c8, 0x1fae6, 0x15cfc, 0x1f5c4, 0x15c7e,
	                    0x1f5c2, 0x1ebd0, 0x1f5ec, 0x1ebc8, 0x1f5e6, 0x1ebc4, 0x1ebc2, 0x1d7d0, 0x1ebec, 0x1d7c8,
	                    0x1ebe6, 0x1d7c4, 0x1d7c2, 0x1afd0, 0x1d7ec, 0x1afc8, 0x1d7e6, 0x1afc4, 0x14bc0, 0x1a5f0,
	                    0x1d2fc, 0x149e0, 0x1a4f8, 0x1d27e, 0x148f0, 0x1a47c, 0x14878, 0x1a43e, 0x1483c, 0x1fa68,
	                    0x14df0, 0x1a6fc, 0x1fa64, 0x14cf8, 0x1a67e, 0x1fa62, 0x14c7c, 0x14c3e, 0x1f4e8, 0x1fa76,
	                    0x14efc, 0x1f4e4, 0x14e7e, 0x1f4e2, 0x1e9e8, 0x1f4f6, 0x1e9e4, 0x1e9e2, 0x1d3e8, 0x1e9f6,
	                    0x1d3e4, 0x1d3e2, 0x1a7e8, 0x1d3f6, 0x1a7e4, 0x1a7e2, 0x145e0, 0x1a2f8, 0x1d17e, 0x144f0,
	                    0x1a27c, 0x14478, 0x1a23e, 0x1443c, 0x1441e, 0x1fa34, 0x146f8, 0x1a37e, 0x1fa32, 0x1467c,
	                    0x1463e, 0x1f474, 0x1477e, 0x1f472, 0x1e8f4, 0x1e8f2, 0x1d1f4, 0x1d1f2, 0x1a3f4, 0x1a3f2,
	                    0x142f0, 0x1a17c, 0x14278, 0x1a13e, 0x1423c, 0x1421e, 0x1fa1a, 0x1437c, 0x1433e, 0x1f43a,
	                    0x1e87a, 0x1d0fa, 0x14178, 0x1a0be, 0x1413c, 0x1411e, 0x141be, 0x140bc, 0x1409e, 0x12bc0,
	                    0x195f0, 0x1cafc, 0x129e0, 0x194f8, 0x1ca7e, 0x128f0, 0x1947c, 0x12878, 0x1943e, 0x1283c,
	                    0x1f968, 0x12df0, 0x196fc, 0x1f964, 0x12cf8, 0x1967e, 0x1f962, 0x12c7c, 0x12c3e, 0x1f2e8,
	                    0x1f976, 0x12efc, 0x1f2e4, 0x12e7e, 0x1f2e2, 0x1e5e8, 0x1f2f6, 0x1e5e4, 0x1e5e2, 0x1cbe8,
	                    0x1e5f6, 0x1cbe4, 0x1cbe2, 0x197e8, 0x1cbf6, 0x197e4, 0x197e2, 0x1b5e0, 0x1daf8, 0x1ed7e,
	                    0x169c0, 0x1b4f0, 0x1da7c, 0x168e0, 0x1b478, 0x1da3e, 0x16870, 0x1b43c, 0x16838, 0x1b41e,
	                    0x1681c, 0x125e0, 0x192f8, 0x1c97e, 0x16de0, 0x124f0, 0x1927c, 0x16cf0, 0x1b67c, 0x1923e,
	                    0x16c78, 0x1243c, 0x16c3c, 0x1241e, 0x16c1e, 0x1f934, 0x126f8, 0x1937e, 0x1fb74, 0x1f932,
	                    0x16ef8, 0x1267c, 0x1fb72, 0x16e7c, 0x1263e, 0x16e3e, 0x1f274, 0x1277e, 0x1f6f4, 0x1f272,
	                    0x16f7e, 0x1f6f2, 0x1e4f4, 0x1edf4, 0x1e4f2, 0x1edf2, 0x1c9f4, 0x1dbf4, 0x1c9f2, 0x1dbf2,
	                    0x193f4, 0x193f2, 0x165c0, 0x1b2f0, 0x1d97c, 0x164e0, 0x1b278, 0x1d93e, 0x16470, 0x1b23c,
	                    0x16438, 0x1b21e, 0x1641c, 0x1640e, 0x122f0, 0x1917c, 0x166f0, 0x12278, 0x1913e, 0x16678,
	                    0x1b33e, 0x1663c, 0x1221e, 0x1661e, 0x1f91a, 0x1237c, 0x1fb3a, 0x1677c, 0x1233e, 0x1673e,
	                    0x1f23a, 0x1f67a, 0x1e47a, 0x1ecfa, 0x1c8fa, 0x1d9fa, 0x191fa, 0x162e0, 0x1b178, 0x1d8be,
	                    0x16270, 0x1b13c, 0x16238, 0x1b11e, 0x1621c, 0x1620e, 0x12178, 0x190be, 0x16378, 0x1213c,
	                    0x1633c, 0x1211e, 0x1631e, 0x121be, 0x163be, 0x16170, 0x1b0bc, 0x16138, 0x1b09e, 0x1611c,
	                    0x1610e, 0x120bc, 0x161bc, 0x1209e, 0x1619e, 0x160b8, 0x1b05e, 0x1609c, 0x1608e, 0x1205e,
	                    0x160de, 0x1605c, 0x1604e, 0x115e0, 0x18af8, 0x1c57e, 0x114f0, 0x18a7c, 0x11478, 0x18a3e,
	                    0x1143c, 0x1141e, 0x1f8b4, 0x116f8, 0x18b7e, 0x1f8b2, 0x1167c, 0x1163e, 0x1f174, 0x1177e,
	                    0x1f172, 0x1e2f4, 0x1e2f2, 0x1c5f4, 0x1c5f2, 0x18bf4, 0x18bf2, 0x135c0, 0x19af0, 0x1cd7c,
	                    0x134e0, 0x19a78, 0x1cd3e, 0x13470, 0x19a3c, 0x13438, 0x19a1e, 0x1341c, 0x1340e, 0x112f0,
	                    0x1897c, 0x136f0, 0x11278, 0x1893e, 0x13678, 0x19b3e, 0x1363c, 0x1121e, 0x1361e, 0x1f89a,
	                    0x1137c, 0x1f9ba, 0x1377c, 0x1133e, 0x1373e, 0x1f13a, 0x1f37a, 0x1e27a, 0x1e6fa, 0x1c4fa,
	                    0x1cdfa, 0x189fa, 0x1bae0, 0x1dd78, 0x1eebe, 0x174c0, 0x1ba70, 0x1dd3c, 0x17460, 0x1ba38,
	                    0x1dd1e, 0x17430, 0x1ba1c, 0x17418, 0x1ba0e, 0x1740c, 0x132e0, 0x19978, 0x1ccbe, 0x176e0,
	                    0x13270, 0x1993c, 0x17670, 0x1bb3c, 0x1991e, 0x17638, 0x1321c, 0x1761c, 0x1320e, 0x1760e,
	                    0x11178, 0x188be, 0x13378, 0x1113c, 0x17778, 0x1333c, 0x1111e, 0x1773c, 0x1331e, 0x1771e,
	                    0x111be, 0x133be, 0x177be, 0x172c0, 0x1b970, 0x1dcbc, 0x17260, 0x1b938, 0x1dc9e, 0x17230,
	                    0x1b91c, 0x17218, 0x1b90e, 0x1720c, 0x17206, 0x13170, 0x198bc, 0x17370, 0x13138, 0x1989e,
	                    0x17338, 0x1b99e, 0x1731c, 0x1310e, 0x1730e, 0x110bc, 0x131bc, 0x1109e, 0x173bc, 0x1319e,
	                    0x1739e, 0x17160, 0x1b8b8, 0x1dc5e, 0x17130, 0x1b89c, 0x17118, 0x1b88e, 0x1710c, 0x17106,
	                    0x130b8, 0x1985e, 0x171b8, 0x1309c, 0x1719c, 0x1308e, 0x1718e, 0x1105e, 0x130de, 0x171de,
	                    0x170b0, 0x1b85c, 0x17098, 0x1b84e, 0x1708c, 0x17086, 0x1305c, 0x170dc, 0x1304e, 0x170ce,
	                    0x17058, 0x1b82e, 0x1704c, 0x17046, 0x1302e, 0x1706e, 0x1702c, 0x17026, 0x10af0, 0x1857c,
	                    0x10a78, 0x1853e, 0x10a3c, 0x10a1e, 0x10b7c, 0x10b3e, 0x1f0ba, 0x1e17a, 0x1c2fa, 0x185fa,
	                    0x11ae0, 0x18d78, 0x1c6be, 0x11a70, 0x18d3c, 0x11a38, 0x18d1e, 0x11a1c, 0x11a0e, 0x10978,
	                    0x184be, 0x11b78, 0x1093c, 0x11b3c, 0x1091e, 0x11b1e, 0x109be, 0x11bbe, 0x13ac0, 0x19d70,
	                    0x1cebc, 0x13a60, 0x19d38, 0x1ce9e, 0x13a30, 0x19d1c, 0x13a18, 0x19d0e, 0x13a0c, 0x13a06,
	                    0x11970, 0x18cbc, 0x13b70, 0x11938, 0x18c9e, 0x13b38, 0x1191c, 0x13b1c, 0x1190e, 0x13b0e,
	                    0x108bc, 0x119bc, 0x1089e, 0x13bbc, 0x1199e, 0x13b9e, 0x1bd60, 0x1deb8, 0x1ef5e, 0x17a40,
	                    0x1bd30, 0x1de9c, 0x17a20, 0x1bd18, 0x1de8e, 0x17a10, 0x1bd0c, 0x17a08, 0x1bd06, 0x17a04,
	                    0x13960, 0x19cb8, 0x1ce5e, 0x17b60, 0x13930, 0x19c9c, 0x17b30, 0x1bd9c, 0x19c8e, 0x17b18,
	                    0x1390c, 0x17b0c, 0x13906, 0x17b06, 0x118b8, 0x18c5e, 0x139b8, 0x1189c, 0x17bb8, 0x1399c,
	                    0x1188e, 0x17b9c, 0x1398e, 0x17b8e, 0x1085e, 0x118de, 0x139de, 0x17bde, 0x17940, 0x1bcb0,
	                    0x1de5c, 0x17920, 0x1bc98, 0x1de4e, 0x17910, 0x1bc8c, 0x17908, 0x1bc86, 0x17904, 0x17902,
	                    0x138b0, 0x19c5c, 0x179b0, 0x13898, 0x19c4e, 0x17998, 0x1bcce, 0x1798c, 0x13886, 0x17986,
	                    0x1185c, 0x138dc, 0x1184e, 0x179dc, 0x138ce, 0x179ce, 0x178a0, 0x1bc58, 0x1de2e, 0x17890,
	                    0x1bc4c, 0x17888, 0x1bc46, 0x17884, 0x17882, 0x13858, 0x19c2e, 0x178d8, 0x1384c, 0x178cc,
	                    0x13846, 0x178c6, 0x1182e, 0x1386e, 0x178ee, 0x17850, 0x1bc2c, 0x17848, 0x1bc26, 0x17844,
	                    0x17842, 0x1382c, 0x1786c, 0x13826, 0x17866, 0x17828, 0x1bc16, 0x17824, 0x17822, 0x13816,
	                    0x17836, 0x10578, 0x182be, 0x1053c, 0x1051e, 0x105be, 0x10d70, 0x186bc, 0x10d38, 0x1869e,
	                    0x10d1c, 0x10d0e, 0x104bc, 0x10dbc, 0x1049e, 0x10d9e, 0x11d60, 0x18eb8, 0x1c75e, 0x11d30,
	                    0x18e9c, 0x11d18, 0x18e8e, 0x11d0c, 0x11d06, 0x10cb8, 0x1865e, 0x11db8, 0x10c9c, 0x11d9c,
	                    0x10c8e, 0x11d8e, 0x1045e, 0x10cde, 0x11dde, 0x13d40, 0x19eb0, 0x1cf5c, 0x13d20, 0x19e98,
	                    0x1cf4e, 0x13d10, 0x19e8c, 0x13d08, 0x19e86, 0x13d04, 0x13d02, 0x11cb0, 0x18e5c, 0x13db0,
	                    0x11c98, 0x18e4e, 0x13d98, 0x19ece, 0x13d8c, 0x11c86, 0x13d86, 0x10c5c, 0x11cdc, 0x10c4e,
	                    0x13ddc, 0x11cce, 0x13dce, 0x1bea0, 0x1df58, 0x1efae, 0x1be90, 0x1df4c, 0x1be88, 0x1df46,
	                    0x1be84, 0x1be82, 0x13ca0, 0x19e58, 0x1cf2e, 0x17da0, 0x13c90, 0x19e4c, 0x17d90, 0x1becc,
	                    0x19e46, 0x17d88, 0x13c84, 0x17d84, 0x13c82, 0x17d82, 0x11c58, 0x18e2e, 0x13cd8, 0x11c4c,
	                    0x17dd8, 0x13ccc, 0x11c46, 0x17dcc, 0x13cc6, 0x17dc6, 0x10c2e, 0x11c6e, 0x13cee, 0x17dee,
	                    0x1be50, 0x1df2c, 0x1be48, 0x1df26, 0x1be44, 0x1be42, 0x13c50, 0x19e2c, 0x17cd0, 0x13c48,
	                    0x19e26, 0x17cc8, 0x1be66, 0x17cc4, 0x13c42, 0x17cc2, 0x11c2c, 0x13c6c, 0x11c26, 0x17cec,
	                    0x13c66, 0x17ce6, 0x1be28, 0x1df16, 0x1be24, 0x1be22, 0x13c28, 0x19e16, 0x17c68, 0x13c24,
	                    0x17c64, 0x13c22, 0x17c62, 0x11c16, 0x13c36, 0x17c76, 0x1be14, 0x1be12, 0x13c14, 0x17c34,
	                    0x13c12, 0x17c32, 0x102bc, 0x1029e, 0x106b8, 0x1835e, 0x1069c, 0x1068e, 0x1025e, 0x106de,
	                    0x10eb0, 0x1875c, 0x10e98, 0x1874e, 0x10e8c, 0x10e86, 0x1065c, 0x10edc, 0x1064e, 0x10ece,
	                    0x11ea0, 0x18f58, 0x1c7ae, 0x11e90, 0x18f4c, 0x11e88, 0x18f46, 0x11e84, 0x11e82, 0x10e58,
	                    0x1872e, 0x11ed8, 0x18f6e, 0x11ecc, 0x10e46, 0x11ec6, 0x1062e, 0x10e6e, 0x11eee, 0x19f50,
	                    0x1cfac, 0x19f48, 0x1cfa6, 0x19f44, 0x19f42, 0x11e50, 0x18f2c, 0x13ed0, 0x19f6c, 0x18f26,
	                    0x13ec8, 0x11e44, 0x13ec4, 0x11e42, 0x13ec2, 0x10e2c, 0x11e6c, 0x10e26, 0x13eec, 0x11e66,
	                    0x13ee6, 0x1dfa8, 0x1efd6, 0x1dfa4, 0x1dfa2, 0x19f28, 0x1cf96, 0x1bf68, 0x19f24, 0x1bf64,
	                    0x19f22, 0x1bf62, 0x11e28, 0x18f16, 0x13e68, 0x11e24, 0x17ee8, 0x13e64, 0x11e22, 0x17ee4,
	                    0x13e62, 0x17ee2, 0x10e16, 0x11e36, 0x13e76, 0x17ef6, 0x1df94, 0x1df92, 0x19f14, 0x1bf34,
	                    0x19f12, 0x1bf32, 0x11e14, 0x13e34, 0x11e12, 0x17e74, 0x13e32, 0x17e72, 0x1df8a, 0x19f0a,
	                    0x1bf1a, 0x11e0a, 0x13e1a, 0x17e3a, 0x1035c, 0x1034e, 0x10758, 0x183ae, 0x1074c, 0x10746,
	                    0x1032e, 0x1076e, 0x10f50, 0x187ac, 0x10f48, 0x187a6, 0x10f44, 0x10f42, 0x1072c, 0x10f6c,
	                    0x10726, 0x10f66, 0x18fa8, 0x1c7d6, 0x18fa4, 0x18fa2, 0x10f28, 0x18796, 0x11f68, 0x18fb6,
	                    0x11f64, 0x10f22, 0x11f62, 0x10716, 0x10f36, 0x11f76, 0x1cfd4, 0x1cfd2, 0x18f94, 0x19fb4,
	                    0x18f92, 0x19fb2, 0x10f14, 0x11f34, 0x10f12, 0x13f74, 0x11f32, 0x13f72, 0x1cfca, 0x18f8a,
	                    0x19f9a, 0x10f0a, 0x11f1a, 0x13f3a, 0x103ac, 0x103a6, 0x107a8, 0x183d6, 0x107a4, 0x107a2,
	                    0x10396, 0x107b6, 0x187d4, 0x187d2, 0x10794, 0x10fb4, 0x10792, 0x10fb2, 0x1c7ea]
	            ];
	
	            var START = '11111111010101000';
	            var END = '111111101000101001';
	            var COMPACT_END = '1';
	            var PAD = 900;
	            var mode_ll = '\u2000',
	                mode_ps = '\u2001',
	                mode_ml = '\u2002',
	                mode_al = '\u2003',
	                mode_pl = '\u2004',
	                mode_as = '\u2005';
	            var MAX_DATA_NUM = 925;
	
	            var subModeMap = {
	                ll: mode_ll,
	                ps: mode_ps,
	                ml: mode_ml,
	                al: mode_al,
	                pl: mode_pl,
	                as: mode_as
	            };
	
	            var TEXT_MAP = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ ' + mode_ll + mode_ml + mode_ps, 'abcdefghijklmnopqrstuvwxyz ' + mode_as + mode_ml + mode_ps, '0123456789&\r\t,:#-.$/+%*=^\u2004 ' + mode_ll + mode_al + mode_ps, ';<>@[\\]_`~!\r\t,:\n-.$/"|*()?{}\'' + mode_al];
	
	            var defaultConfig = {
	                errorCorrectionLevel: 'auto',
	                columns: 'auto',
	                rows: 'auto',
	                compact: false,
	                height: 60,
	                quietZone: {
	                    top: 2,
	                    left: 2,
	                    right: 2,
	                    bottom: 2
	                }
	            };
	
	            var MODE_TC = 900,
	                MODE_BC = 901,
	                MODE_NC = 902,
	                MODE_BC6 = 924,
	                MODE_BC_SHIFT = 913;
	
	            function isAlpha(c) {
	                return TEXT_MAP[0].indexOf(c) > -1;
	            }
	            function isLower(c) {
	                return TEXT_MAP[1].indexOf(c) > -1;
	            }
	            function isMixed(c) {
	                return TEXT_MAP[2].indexOf(c) > -1;
	            }
	            function isPunctuation(c) {
	                return TEXT_MAP[3].indexOf(c) > -1;
	            }
	
	            function isTC(c) {
	                return isAlpha(c) || isLower(c) || isMixed(c) || isPunctuation(c);
	            }
	
	            function nextTC(text, pos) {
	                var i = pos,
	                    len = text.length,
	                    nCount = 0;
	
	                while (i < len) {
	                    if (text[i] >= '0' && text[i] <= '9') {
	                        nCount++;
	                    } else {
	                        nCount = 0;
	                    }
	                    if (!isTC(text[i])) {
	                        break;
	                    }
	                    if (nCount >= 13) {
	                        i -= --nCount;
	                        break;
	                    }
	                    i++;
	                }
	
	                return text.substring(pos, i);
	            }
	
	            function nextNC(text, pos) {
	                var i = pos,
	                    len = text.length;
	                while (i < len) {
	                    if (text[i] < '0' || text[i] > '9') {
	                        break;
	                    }
	                    i++;
	                }
	                return text.substring(pos, i);
	            }
	
	            function nextBC(text, pos) {
	                var i = pos,
	                    len = text.length,
	                    nCount = 0,
	                    bCount = 0;
	                while (i < len) {
	                    if (text[i] < '0' || text[i] > '9') {
	                        nCount++;
	                    } else {
	                        nCount = 0;
	                    }
	                    if (isTC(text[i])) {
	                        bCount++;
	                    } else {
	                        nCount = 0;
	                    }
	                    if (bCount >= 5) {
	                        i -= --bCount;
	                        break;
	                    }
	                    if (nCount >= 13) {
	                        i -= --nCount;
	                        break;
	                    }
	                    i++;
	                }
	                return text.substring(pos, i);
	            }
	
	            function compaction(text) {
	                var pos = 0,
	                    len = text.length;
	                var g = { mode: MODE_TC, text: '' },
	                    groups = [];
	
	                while (pos < len) {
	                    var numStr = nextNC(text, pos);
	
	                    if (numStr.length >= 13) {
	                        g = { mode: MODE_NC, text: numStr };
	                        groups.push(g);
	                        pos += numStr.length;
	                    } else {
	                        var tcStr = nextTC(text, pos);
	
	                        if (tcStr.length >= 5) {
	                            g = { mode: MODE_TC, text: tcStr };
	                            groups.push(g);
	                            pos += tcStr.length;
	                        } else {
	                            var bcStr = nextBC(text, pos);
	
	                            if (bcStr.length === 1 && g.mode == MODE_TC) {
	                                g = { mode: MODE_BC_SHIFT, text: bcStr };
	                                groups.push(g);
	                            } else {
	                                if (bcStr.length % 6 === 0) {
	                                    g = { mode: MODE_BC6, text: bcStr };
	                                } else {
	                                    g = { mode: MODE_BC, text: bcStr };
	                                }
	                                groups.push(g);
	                            }
	                            pos += bcStr.length;
	                        }
	                    }
	                }
	
	                groups.forEach(function (g) {
	                    if (g.mode == MODE_TC) {
	                        var currentSubMode = { mode: 'al', text: '' };
	                        var subModes = [currentSubMode];
	                        g.subModes = subModes;
	                        for (var i = 0, _len = g.text.length; i < _len; i++) {
	                            var c = g.text[i];
	
	                            if (isAlpha(c)) {
	                                if (i === 0 || currentSubMode.mode === 'al') {
	                                    currentSubMode.text += c;
	                                } else {
	                                    var nextC = g.text[i + 1];
	                                    if (isAlpha(nextC)) {
	                                        currentSubMode = { mode: 'al', text: c };
	                                    } else {
	                                        if (currentSubMode.mode === 'll') {
	                                            currentSubMode = { mode: 'as', text: c };
	                                        } else {
	                                            currentSubMode = { mode: 'al', text: c };
	                                        }
	                                    }
	                                    subModes.push(currentSubMode);
	                                }
	                            } else if (isLower(c)) {
	                                if (currentSubMode.mode === 'll') {
	                                    currentSubMode.text += c;
	                                } else {
	                                    currentSubMode = { mode: 'll', text: c };
	                                    subModes.push(currentSubMode);
	                                }
	                            } else if (isMixed(c)) {
	                                if (currentSubMode.mode === 'pl' && isPunctuation(c)) {
	                                    currentSubMode.text += c;
	                                } else if (currentSubMode.mode === 'ml') {
	                                    currentSubMode.text += c;
	                                } else {
	                                    currentSubMode = { mode: 'ml', text: c };
	                                    subModes.push(currentSubMode);
	                                }
	                            } else if (isPunctuation(c)) {
	                                if (currentSubMode.mode === 'pl') {
	                                    currentSubMode.text += c;
	                                } else {
	                                    var _nextC = g.text[i + 1];
	                                    if (isPunctuation(_nextC)) {
	                                        currentSubMode = { mode: 'pl', text: c };
	                                    } else {
	                                        currentSubMode = { mode: 'ps', text: c };
	                                    }
	                                    subModes.push(currentSubMode);
	                                }
	                            }
	                        }
	                    }
	                });
	                return groups;
	            }
	
	            function getIndicator(rowIndex, rowCount, ecl, col, isRight) {
	                var x = ~~(rowIndex / 3),
	                    y = ~~((rowCount - 1) / 3),
	                    z = ecl * 3 + (rowCount - 1) % 3,
	                    v = col - 1,
	                    c = rowIndex % 3 * 3,
	                    temp = void 0;
	                switch (c) {
	                    case 0:
	                        if (!isRight) {
	                            temp = y;
	                        } else {
	                            temp = v;
	                        }
	                        break;
	                    case 3:
	                        if (!isRight) {
	                            temp = z;
	                        } else {
	                            temp = y;
	                        }
	                        break;
	                    case 6:
	                        if (!isRight) {
	                            temp = v;
	                        } else {
	                            temp = z;
	                        }
	                        break;
	                }
	                return 30 * x + temp;
	            }
	
	            function getPattern(row, value) {
	                var cluster = CLUSTERS[row % 3];
	                return cluster[value];
	            }
	
	            function getTCValue(char, mode) {
	                var result = void 0;
	                switch (mode) {
	                    case 'll':
	                        result = TEXT_MAP[1].indexOf(char);
	                        break;
	                    case 'ml':
	                        result = TEXT_MAP[2].indexOf(char);
	                        break;
	                    case 'al':
	                    case 'as':
	                        result = TEXT_MAP[0].indexOf(char);
	                        break;
	                    case 'pl':
	                    case 'ps':
	                        result = TEXT_MAP[3].indexOf(char);
	                        break;
	                }
	
	                return result;
	            }
	
	            var subModeTable = {
	                al: {
	                    ll: [27],
	                    ml: [28],
	                    pl: [28, 25]
	                },
	                ll: {
	                    al: [28, 28],
	                    ml: [28],
	                    pl: [28, 25]
	                },
	                ml: {
	                    al: [28],
	                    ll: [27],
	                    pl: [25]
	                },
	                pl: {
	                    al: [29],
	                    ll: [29, 27],
	                    ml: [29, 28]
	                }
	            };
	            function getTCSubModeValue(targetMode, lastMode) {
	                var index = getTCValue(subModeMap[targetMode], lastMode);
	                if (index > -1) {
	                    return [index];
	                }
	
	                return subModeTable[lastMode][targetMode];
	            }
	
	            function createModules(row, col) {
	                var arr = [];
	                for (var i = 0; i < row; i++) {
	                    arr.push((0, _utils.fillArray)(new Array(col), null));
	                }
	                return arr;
	            }
	
	            function getAutoECL(cws) {
	                var len = cws.length;
	
	                if (len <= 40) {
	                    return 2;
	                } else if (len <= 160) {
	                    return 3;
	                } else if (len <= 320) {
	                    return 4;
	                } else {
	                    return 5;
	                }
	            }
	
	            function getAutoRowAndCol(length) {
	                var col = 31,
	                    row = void 0,
	                    ratio = void 0;
	
	                do {
	                    col--;
	                    row = Math.ceil(length / col);
	                    ratio = row / col;
	                    if (col < 2) {
	                        break;
	                    }
	                } while (ratio < 4);
	                if (row < 3) {
	                    row = 3;
	                }
	                return { col: col, row: row };
	            }
	
	            exports.default = {
	                defaultConfig: defaultConfig,
	                compaction: compaction,
	                getIndicator: getIndicator,
	                MODE_TC: MODE_TC,
	                MODE_BC: MODE_BC,
	                MODE_NC: MODE_NC,
	                MODE_BC6: MODE_BC6,
	                MODE_BC_SHIFT: MODE_BC_SHIFT,
	                getTCValue: getTCValue,
	                PAD: PAD,
	                createModules: createModules,
	                getPattern: getPattern,
	                START: START,
	                END: END,
	                getAutoECL: getAutoECL,
	                subModeMap: subModeMap,
	                getTCSubModeValue: getTCSubModeValue,
	                MAX_DATA_NUM: MAX_DATA_NUM,
	                COMPACT_END: COMPACT_END,
	                getAutoRowAndCol: getAutoRowAndCol
	            };
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	            exports.default = generateErrorCorrectionCode;
	
	            var _utils = __webpack_require__(0);
	
	            var RS_COEFFICIENTS = [[0x01b, 0x395], [0x20a, 0x238, 0x2d3, 0x329], [0x0ed, 0x134, 0x1b4, 0x11c, 0x286, 0x28d, 0x1ac, 0x17b], [0x112, 0x232, 0x0e8, 0x2f3, 0x257, 0x20c, 0x321, 0x084, 0x127, 0x074, 0x1ba, 0x1ac, 0x127, 0x02a, 0x0b0, 0x041], [0x169, 0x23f, 0x39a, 0x20d, 0x0b0, 0x24a, 0x280, 0x141, 0x218, 0x2e6, 0x2a5, 0x2e6, 0x2af, 0x11c, 0x0c1, 0x205, 0x111, 0x1ee, 0x107, 0x093, 0x251, 0x320, 0x23b, 0x140, 0x323, 0x085, 0x0e7, 0x186, 0x2ad, 0x14a, 0x03f, 0x19a], [0x21b, 0x1a6, 0x006, 0x05d, 0x35e, 0x303, 0x1c5, 0x06a, 0x262, 0x11f, 0x06b, 0x1f9, 0x2dd, 0x36d, 0x17d, 0x264, 0x2d3, 0x1dc, 0x1ce, 0x0ac, 0x1ae, 0x261, 0x35a, 0x336, 0x21f, 0x178, 0x1ff, 0x190, 0x2a0, 0x2fa, 0x11b, 0x0b8, 0x1b8, 0x023, 0x207, 0x01f, 0x1cc, 0x252, 0x0e1, 0x217, 0x205, 0x160, 0x25d, 0x09e, 0x28b, 0x0c9, 0x1e8, 0x1f6, 0x288, 0x2dd, 0x2cd, 0x053, 0x194, 0x061, 0x118, 0x303, 0x348, 0x275, 0x004, 0x17d, 0x34b, 0x26f, 0x108, 0x21f], [0x209, 0x136, 0x360, 0x223, 0x35a, 0x244, 0x128, 0x17b, 0x035, 0x30b, 0x381, 0x1bc, 0x190, 0x39d, 0x2ed, 0x19f, 0x336, 0x05d, 0x0d9, 0x0d0, 0x3a0, 0x0f4, 0x247, 0x26c, 0x0f6, 0x094, 0x1bf, 0x277, 0x124, 0x38c, 0x1ea, 0x2c0, 0x204, 0x102, 0x1c9, 0x38b, 0x252, 0x2d3, 0x2a2, 0x124, 0x110, 0x060, 0x2ac, 0x1b0, 0x2ae, 0x25e, 0x35c, 0x239, 0x0c1, 0x0db, 0x081, 0x0ba, 0x0ec, 0x11f, 0x0c0, 0x307, 0x116, 0x0ad, 0x028, 0x17b, 0x2c8, 0x1cf, 0x286, 0x308, 0x0ab, 0x1eb, 0x129, 0x2fb, 0x09c, 0x2dc, 0x05f, 0x10e, 0x1bf, 0x05a, 0x1fb, 0x030, 0x0e4, 0x335, 0x328, 0x382, 0x310, 0x297, 0x273, 0x17a, 0x17e, 0x106, 0x17c, 0x25a, 0x2f2, 0x150, 0x059, 0x266, 0x057, 0x1b0, 0x29e, 0x268, 0x09d, 0x176, 0x0f2, 0x2d6, 0x258, 0x10d, 0x177, 0x382, 0x34d, 0x1c6, 0x162, 0x082, 0x32e, 0x24b, 0x324, 0x022, 0x0d3, 0x14a, 0x21b, 0x129, 0x33b, 0x361, 0x025, 0x205, 0x342, 0x13b, 0x226, 0x056, 0x321, 0x004, 0x06c, 0x21b], [0x20c, 0x37e, 0x04b, 0x2fe, 0x372, 0x359, 0x04a, 0x0cc, 0x052, 0x24a, 0x2c4, 0x0fa, 0x389, 0x312, 0x08a, 0x2d0, 0x35a, 0x0c2, 0x137, 0x391, 0x113, 0x0be, 0x177, 0x352, 0x1b6, 0x2dd, 0x0c2, 0x118, 0x0c9, 0x118, 0x33c, 0x2f5, 0x2c6, 0x32e, 0x397, 0x059, 0x044, 0x239, 0x00b, 0x0cc, 0x31c, 0x25d, 0x21c, 0x391, 0x321, 0x2bc, 0x31f, 0x089, 0x1b7, 0x1a2, 0x250, 0x29c, 0x161, 0x35b, 0x172, 0x2b6, 0x145, 0x0f0, 0x0d8, 0x101, 0x11c, 0x225, 0x0d1, 0x374, 0x13b, 0x046, 0x149, 0x319, 0x1ea, 0x112, 0x36d, 0x0a2, 0x2ed, 0x32c, 0x2ac, 0x1cd, 0x14e, 0x178, 0x351, 0x209, 0x133, 0x123, 0x323, 0x2c8, 0x013, 0x166, 0x18f, 0x38c, 0x067, 0x1ff, 0x033, 0x008, 0x205, 0x0e1, 0x121, 0x1d6, 0x27d, 0x2db, 0x042, 0x0ff, 0x395, 0x10d, 0x1cf, 0x33e, 0x2da, 0x1b1, 0x350, 0x249, 0x088, 0x21a, 0x38a, 0x05a, 0x002, 0x122, 0x2e7, 0x0c7, 0x28f, 0x387, 0x149, 0x031, 0x322, 0x244, 0x163, 0x24c, 0x0bc, 0x1ce, 0x00a, 0x086, 0x274, 0x140, 0x1df, 0x082, 0x2e3, 0x047, 0x107, 0x13e, 0x176, 0x259, 0x0c0, 0x25d, 0x08e, 0x2a1, 0x2af, 0x0ea, 0x2d2, 0x180, 0x0b1, 0x2f0, 0x25f, 0x280, 0x1c7, 0x0c1, 0x2b1, 0x2c3, 0x325, 0x281, 0x030, 0x03c, 0x2dc, 0x26d, 0x37f, 0x220, 0x105, 0x354, 0x28f, 0x135, 0x2b9, 0x2f3, 0x2f4, 0x03c, 0x0e7, 0x305, 0x1b2, 0x1a5, 0x2d6, 0x210, 0x1f7, 0x076, 0x031, 0x31b, 0x020, 0x090, 0x1f4, 0x0ee, 0x344, 0x18a, 0x118, 0x236, 0x13f, 0x009, 0x287, 0x226, 0x049, 0x392, 0x156, 0x07e, 0x020, 0x2a9, 0x14b, 0x318, 0x26c, 0x03c, 0x261, 0x1b9, 0x0b4, 0x317, 0x37d, 0x2f2, 0x25d, 0x17f, 0x0e4, 0x2ed, 0x2f8, 0x0d5, 0x036, 0x129, 0x086, 0x036, 0x342, 0x12b, 0x39a, 0x0bf, 0x38e, 0x214, 0x261, 0x33d, 0x0bd, 0x014, 0x0a7, 0x01d, 0x368, 0x1c1, 0x053, 0x192, 0x029, 0x290, 0x1f9, 0x243, 0x1e1, 0x0ad, 0x194, 0x0fb, 0x2b0, 0x05f, 0x1f1, 0x22b, 0x282, 0x21f, 0x133, 0x09f, 0x39c, 0x22e, 0x288, 0x037, 0x1f1, 0x00a], [0x160, 0x04d, 0x175, 0x1f8, 0x023, 0x257, 0x1ac, 0x0cf, 0x199, 0x23e, 0x076, 0x1f2, 0x11d, 0x17c, 0x15e, 0x1ec, 0x0c5, 0x109, 0x398, 0x09b, 0x392, 0x12b, 0x0e5, 0x283, 0x126, 0x367, 0x132, 0x058, 0x057, 0x0c1, 0x160, 0x30d, 0x34e, 0x04b, 0x147, 0x208, 0x1b3, 0x21f, 0x0cb, 0x29a, 0x0f9, 0x15a, 0x30d, 0x26d, 0x280, 0x10c, 0x31a, 0x216, 0x21b, 0x30d, 0x198, 0x186, 0x284, 0x066, 0x1dc, 0x1f3, 0x122, 0x278, 0x221, 0x025, 0x35a, 0x394, 0x228, 0x029, 0x21e, 0x121, 0x07a, 0x110, 0x17f, 0x320, 0x1e5, 0x062, 0x2f0, 0x1d8, 0x2f9, 0x06b, 0x310, 0x35c, 0x292, 0x2e5, 0x122, 0x0cc, 0x2a9, 0x197, 0x357, 0x055, 0x063, 0x03e, 0x1e2, 0x0b4, 0x014, 0x129, 0x1c3, 0x251, 0x391, 0x08e, 0x328, 0x2ac, 0x11f, 0x218, 0x231, 0x04c, 0x28d, 0x383, 0x2d9, 0x237, 0x2e8, 0x186, 0x201, 0x0c0, 0x204, 0x102, 0x0f0, 0x206, 0x31a, 0x18b, 0x300, 0x350, 0x033, 0x262, 0x180, 0x0a8, 0x0be, 0x33a, 0x148, 0x254, 0x312, 0x12f, 0x23a, 0x17d, 0x19f, 0x281, 0x09c, 0x0ed, 0x097, 0x1ad, 0x213, 0x0cf, 0x2a4, 0x2c6, 0x059, 0x0a8, 0x130, 0x192, 0x028, 0x2c4, 0x23f, 0x0a2, 0x360, 0x0e5, 0x041, 0x35d, 0x349, 0x200, 0x0a4, 0x1dd, 0x0dd, 0x05c, 0x166, 0x311, 0x120, 0x165, 0x352, 0x344, 0x33b, 0x2e0, 0x2c3, 0x05e, 0x008, 0x1ee, 0x072, 0x209, 0x002, 0x1f3, 0x353, 0x21f, 0x098, 0x2d9, 0x303, 0x05f, 0x0f8, 0x169, 0x242, 0x143, 0x358, 0x31d, 0x121, 0x033, 0x2ac, 0x1d2, 0x215, 0x334, 0x29d, 0x02d, 0x386, 0x1c4, 0x0a7, 0x156, 0x0f4, 0x0ad, 0x023, 0x1cf, 0x28b, 0x033, 0x2bb, 0x24f, 0x1c4, 0x242, 0x025, 0x07c, 0x12a, 0x14c, 0x228, 0x02b, 0x1ab, 0x077, 0x296, 0x309, 0x1db, 0x352, 0x2fc, 0x16c, 0x242, 0x38f, 0x11b, 0x2c7, 0x1d8, 0x1a4, 0x0f5, 0x120, 0x252, 0x18a, 0x1ff, 0x147, 0x24d, 0x309, 0x2bb, 0x2b0, 0x02b, 0x198, 0x34a, 0x17f, 0x2d1, 0x209, 0x230, 0x284, 0x2ca, 0x22f, 0x03e, 0x091, 0x369, 0x297, 0x2c9, 0x09f, 0x2a0, 0x2d9, 0x270, 0x03b, 0x0c1, 0x1a1, 0x09e, 0x0d1, 0x233, 0x234, 0x157, 0x2b5, 0x06d, 0x260, 0x233, 0x16d, 0x0b5, 0x304, 0x2a5, 0x136, 0x0f8, 0x161, 0x2c4, 0x19a, 0x243, 0x366, 0x269, 0x349, 0x278, 0x35c, 0x121, 0x218, 0x023, 0x309, 0x26a, 0x24a, 0x1a8, 0x341, 0x04d, 0x255, 0x15a, 0x10d, 0x2f5, 0x278, 0x2b7, 0x2ef, 0x14b, 0x0f7, 0x0b8, 0x02d, 0x313, 0x2a8, 0x012, 0x042, 0x197, 0x171, 0x036, 0x1ec, 0x0e4, 0x265, 0x33e, 0x39a, 0x1b5, 0x207, 0x284, 0x389, 0x315, 0x1a4, 0x131, 0x1b9, 0x0cf, 0x12c, 0x37c, 0x33b, 0x08d, 0x219, 0x17d, 0x296, 0x201, 0x038, 0x0fc, 0x155, 0x0f2, 0x31d, 0x346, 0x345, 0x2d0, 0x0e0, 0x133, 0x277, 0x03d, 0x057, 0x230, 0x136, 0x2f4, 0x299, 0x18d, 0x328, 0x353, 0x135, 0x1d9, 0x31b, 0x17a, 0x01f, 0x287, 0x393, 0x1cb, 0x326, 0x24e, 0x2db, 0x1a9, 0x0d8, 0x224, 0x0f9, 0x141, 0x371, 0x2bb, 0x217, 0x2a1, 0x30e, 0x0d2, 0x32f, 0x389, 0x12f, 0x34b, 0x39a, 0x119, 0x049, 0x1d5, 0x317, 0x294, 0x0a2, 0x1f2, 0x134, 0x09b, 0x1a6, 0x38b, 0x331, 0x0bb, 0x03e, 0x010, 0x1a9, 0x217, 0x150, 0x11e, 0x1b5, 0x177, 0x111, 0x262, 0x128, 0x0b7, 0x39b, 0x074, 0x29b, 0x2ef, 0x161, 0x03e, 0x16e, 0x2b3, 0x17b, 0x2af, 0x34a, 0x025, 0x165, 0x2d0, 0x2e6, 0x14a, 0x005, 0x027, 0x39b, 0x137, 0x1a8, 0x0f2, 0x2ed, 0x141, 0x036, 0x29d, 0x13c, 0x156, 0x12b, 0x216, 0x069, 0x29b, 0x1e8, 0x280, 0x2a0, 0x240, 0x21c, 0x13c, 0x1e6, 0x2d1, 0x262, 0x02e, 0x290, 0x1bf, 0x0ab, 0x268, 0x1d0, 0x0be, 0x213, 0x129, 0x141, 0x2fa, 0x2f0, 0x215, 0x0af, 0x086, 0x00e, 0x17d, 0x1b1, 0x2cd, 0x02d, 0x06f, 0x014, 0x254, 0x11c, 0x2e0, 0x08a, 0x286, 0x19b, 0x36d, 0x29d, 0x08d, 0x397, 0x02d, 0x30c, 0x197, 0x0a4, 0x14c, 0x383, 0x0a5, 0x2d6, 0x258, 0x145, 0x1f2, 0x28f, 0x165, 0x2f0, 0x300, 0x0df, 0x351, 0x287, 0x03f, 0x136, 0x35f, 0x0fb, 0x16e, 0x130, 0x11a, 0x2e2, 0x2a3, 0x19a, 0x185, 0x0f4, 0x01f, 0x079, 0x12f, 0x107]];
	
	            function generateErrorCorrectionCode(codewords, ecl) {
	                var coefficients = RS_COEFFICIENTS[ecl];
	                var eccCount = Math.pow(2, ecl + 1);
	                var ecc = (0, _utils.fillArray)(new Array(eccCount), 0);
	                codewords.forEach(function (c) {
	                    var t1 = c + ecc[eccCount - 1],
	                        t2 = void 0,
	                        t3 = void 0;
	                    for (var j = eccCount - 1; j > 0; --j) {
	                        t2 = t1 * coefficients[j] % 929;
	                        t3 = 929 - t2;
	                        ecc[j] = (ecc[j - 1] + t3) % 929;
	                    }
	                    t2 = t1 * coefficients[0] % 929;
	                    t3 = 929 - t2;
	                    ecc[0] = t3 % 929;
	                });
	
	                ecc.forEach(function (c, i) {
	                    if (c != 0) {
	                        ecc[i] = 929 - c;
	                    }
	                });
	
	                return ecc.reverse();
	            }
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            var __WEBPACK_AMD_DEFINE_RESULT__;
	
	            ;(function (globalObj) {
	                'use strict';
	
	                
	
	
	                var BigNumber,
	                    isNumeric = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
	                    mathceil = Math.ceil,
	                    mathfloor = Math.floor,
	                    notBool = ' not a boolean or binary digit',
	                    roundingMode = 'rounding mode',
	                    tooManyDigits = 'number type has more than 15 significant digits',
	                    ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_',
	                    BASE = 1e14,
	                    LOG_BASE = 14,
	                    MAX_SAFE_INTEGER = 0x1fffffffffffff,        
	                   
	                    POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
	                    SQRT_BASE = 1e7,
	
	                    
	                    MAX = 1E9;                                  
	
	
	                
	                function constructorFactory(config) {
	                    var div, parseNumeric,
	
	                       
	                        id = 0,
	                        P = BigNumber.prototype,
	                        ONE = new BigNumber(1),
	
	
	                        
	
	
	                        
	
	                       
	                        DECIMAL_PLACES = 20,                    
	
	                        
	                        ROUNDING_MODE = 4,                      
	
	                       
	
	                       
	                       
	                        TO_EXP_NEG = -7,                        
	
	                       
	                       
	                        TO_EXP_POS = 21,                        
	
	                       
	
	                       
	                       
	                        MIN_EXP = -1e7,                         
	
	                       
	                       
	                       
	                        MAX_EXP = 1e7,                          
	
	                       
	                        ERRORS = true,                          
	
	                       
	                        isValidInt = intValidatorWithErrors,    
	
	                       
	                        CRYPTO = false,                         
	
	                        
	                        MODULO_MODE = 1,                        
	
	                       
	                       
	                        POW_PRECISION = 0,                      
	
	                       
	                        FORMAT = {
	                            decimalSeparator: '.',
	                            groupSeparator: ',',
	                            groupSize: 3,
	                            secondaryGroupSize: 0,
	                            fractionGroupSeparator: '\xA0',     
	                            fractionGroupSize: 0
	                        };
	
	
	                    
	
	
	                   
	
	
	                    
	                    function BigNumber( n, b ) {
	                        var c, e, i, num, len, str,
	                            x = this;
	
	                       
	                        if ( !( x instanceof BigNumber ) ) {
	
	                           
	                           
	                           
	                            return new BigNumber( n, b );
	                        }
	
	                       
	                       
	                        if ( b == null || !isValidInt( b, 2, 64, id, 'base' ) ) {
	
	                           
	                            if ( n instanceof BigNumber ) {
	                                x.s = n.s;
	                                x.e = n.e;
	                                x.c = ( n = n.c ) ? n.slice() : n;
	                                id = 0;
	                                return;
	                            }
	
	                            if ( ( num = typeof n == 'number' ) && n * 0 == 0 ) {
	                                x.s = 1 / n < 0 ? ( n = -n, -1 ) : 1;
	
	                               
	                                if ( n === ~~n ) {
	                                    for ( e = 0, i = n; i >= 10; i /= 10, e++ );
	                                    x.e = e;
	                                    x.c = [n];
	                                    id = 0;
	                                    return;
	                                }
	
	                                str = n + '';
	                            } else {
	                                if ( !isNumeric.test( str = n + '' ) ) return parseNumeric( x, str, num );
	                                x.s = str.charCodeAt(0) === 45 ? ( str = str.slice(1), -1 ) : 1;
	                            }
	                        } else {
	                            b = b | 0;
	                            str = n + '';
	
	                           
	                           
	                            if ( b == 10 ) {
	                                x = new BigNumber( n instanceof BigNumber ? n : str );
	                                return round( x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE );
	                            }
	
	                           
	                           
	                            if ( ( num = typeof n == 'number' ) && n * 0 != 0 ||
	                                !( new RegExp( '^-?' + ( c = '[' + ALPHABET.slice( 0, b ) + ']+' ) +
	                                    '(?:\\.' + c + ')?$',b < 37 ? 'i' : '' ) ).test(str) ) {
	                                return parseNumeric( x, str, num, b );
	                            }
	
	                            if (num) {
	                                x.s = 1 / n < 0 ? ( str = str.slice(1), -1 ) : 1;
	
	                                if ( ERRORS && str.replace( /^0\.0*|\./, '' ).length > 15 ) {
	
	                                   
	                                    raise( id, tooManyDigits, n );
	                                }
	
	                               
	                                num = false;
	                            } else {
	                                x.s = str.charCodeAt(0) === 45 ? ( str = str.slice(1), -1 ) : 1;
	                            }
	
	                            str = convertBase( str, 10, b, x.s );
	                        }
	
	                       
	                        if ( ( e = str.indexOf('.') ) > -1 ) str = str.replace( '.', '' );
	
	                       
	                        if ( ( i = str.search( /e/i ) ) > 0 ) {
	
	                           
	                            if ( e < 0 ) e = i;
	                            e += +str.slice( i + 1 );
	                            str = str.substring( 0, i );
	                        } else if ( e < 0 ) {
	
	                           
	                            e = str.length;
	                        }
	
	                       
	                        for ( i = 0; str.charCodeAt(i) === 48; i++ );
	
	                       
	                        for ( len = str.length; str.charCodeAt(--len) === 48; );
	                        str = str.slice( i, len + 1 );
	
	                        if (str) {
	                            len = str.length;
	
	                           
	                           
	                            if ( num && ERRORS && len > 15 && ( n > MAX_SAFE_INTEGER || n !== mathfloor(n) ) ) {
	                                raise( id, tooManyDigits, x.s * n );
	                            }
	
	                            e = e - i - 1;
	
	                           
	                            if ( e > MAX_EXP ) {
	
	                               
	                                x.c = x.e = null;
	
	                               
	                            } else if ( e < MIN_EXP ) {
	
	                               
	                                x.c = [ x.e = 0 ];
	                            } else {
	                                x.e = e;
	                                x.c = [];
	
	                               
	
	                               
	                               
	                                i = ( e + 1 ) % LOG_BASE;
	                                if ( e < 0 ) i += LOG_BASE;
	
	                                if ( i < len ) {
	                                    if (i) x.c.push( +str.slice( 0, i ) );
	
	                                    for ( len -= LOG_BASE; i < len; ) {
	                                        x.c.push( +str.slice( i, i += LOG_BASE ) );
	                                    }
	
	                                    str = str.slice(i);
	                                    i = LOG_BASE - str.length;
	                                } else {
	                                    i -= len;
	                                }
	
	                                for ( ; i--; str += '0' );
	                                x.c.push( +str );
	                            }
	                        } else {
	
	                           
	                            x.c = [ x.e = 0 ];
	                        }
	
	                        id = 0;
	                    }
	
	
	                   
	
	
	                    BigNumber.another = constructorFactory;
	
	                    BigNumber.ROUND_UP = 0;
	                    BigNumber.ROUND_DOWN = 1;
	                    BigNumber.ROUND_CEIL = 2;
	                    BigNumber.ROUND_FLOOR = 3;
	                    BigNumber.ROUND_HALF_UP = 4;
	                    BigNumber.ROUND_HALF_DOWN = 5;
	                    BigNumber.ROUND_HALF_EVEN = 6;
	                    BigNumber.ROUND_HALF_CEIL = 7;
	                    BigNumber.ROUND_HALF_FLOOR = 8;
	                    BigNumber.EUCLID = 9;
	
	
	                    
	                    BigNumber.config = BigNumber.set = function () {
	                        var v, p,
	                            i = 0,
	                            r = {},
	                            a = arguments,
	                            o = a[0],
	                            has = o && typeof o == 'object'
	                                ? function () { if ( o.hasOwnProperty(p) ) return ( v = o[p] ) != null; }
	                                : function () { if ( a.length > i ) return ( v = a[i++] ) != null; };
	
	                       
	                       
	                       
	                        if ( has( p = 'DECIMAL_PLACES' ) && isValidInt( v, 0, MAX, 2, p ) ) {
	                            DECIMAL_PLACES = v | 0;
	                        }
	                        r[p] = DECIMAL_PLACES;
	
	                       
	                       
	                       
	                        if ( has( p = 'ROUNDING_MODE' ) && isValidInt( v, 0, 8, 2, p ) ) {
	                            ROUNDING_MODE = v | 0;
	                        }
	                        r[p] = ROUNDING_MODE;
	
	                       
	                       
	                       
	                       
	                        if ( has( p = 'EXPONENTIAL_AT' ) ) {
	
	                            if ( isArray(v) ) {
	                                if ( isValidInt( v[0], -MAX, 0, 2, p ) && isValidInt( v[1], 0, MAX, 2, p ) ) {
	                                    TO_EXP_NEG = v[0] | 0;
	                                    TO_EXP_POS = v[1] | 0;
	                                }
	                            } else if ( isValidInt( v, -MAX, MAX, 2, p ) ) {
	                                TO_EXP_NEG = -( TO_EXP_POS = ( v < 0 ? -v : v ) | 0 );
	                            }
	                        }
	                        r[p] = [ TO_EXP_NEG, TO_EXP_POS ];
	
	                       
	                       
	                       
	                       
	                       
	                        if ( has( p = 'RANGE' ) ) {
	
	                            if ( isArray(v) ) {
	                                if ( isValidInt( v[0], -MAX, -1, 2, p ) && isValidInt( v[1], 1, MAX, 2, p ) ) {
	                                    MIN_EXP = v[0] | 0;
	                                    MAX_EXP = v[1] | 0;
	                                }
	                            } else if ( isValidInt( v, -MAX, MAX, 2, p ) ) {
	                                if ( v | 0 ) MIN_EXP = -( MAX_EXP = ( v < 0 ? -v : v ) | 0 );
	                                else if (ERRORS) raise( 2, p + ' cannot be zero', v );
	                            }
	                        }
	                        r[p] = [ MIN_EXP, MAX_EXP ];
	
	                       
	                       
	                        if ( has( p = 'ERRORS' ) ) {
	
	                            if ( v === !!v || v === 1 || v === 0 ) {
	                                id = 0;
	                                isValidInt = ( ERRORS = !!v ) ? intValidatorWithErrors : intValidatorNoErrors;
	                            } else if (ERRORS) {
	                                raise( 2, p + notBool, v );
	                            }
	                        }
	                        r[p] = ERRORS;
	
	                       
	                       
	                       
	                        if ( has( p = 'CRYPTO' ) ) {
	
	                            if ( v === true || v === false || v === 1 || v === 0 ) {
	                                if (v) {
	                                    v = typeof crypto == 'undefined';
	                                    if ( !v && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
	                                        CRYPTO = true;
	                                    } else if (ERRORS) {
	                                        raise( 2, 'crypto unavailable', v ? void 0 : crypto );
	                                    } else {
	                                        CRYPTO = false;
	                                    }
	                                } else {
	                                    CRYPTO = false;
	                                }
	                            } else if (ERRORS) {
	                                raise( 2, p + notBool, v );
	                            }
	                        }
	                        r[p] = CRYPTO;
	
	                       
	                       
	                       
	                        if ( has( p = 'MODULO_MODE' ) && isValidInt( v, 0, 9, 2, p ) ) {
	                            MODULO_MODE = v | 0;
	                        }
	                        r[p] = MODULO_MODE;
	
	                       
	                       
	                       
	                        if ( has( p = 'POW_PRECISION' ) && isValidInt( v, 0, MAX, 2, p ) ) {
	                            POW_PRECISION = v | 0;
	                        }
	                        r[p] = POW_PRECISION;
	
	                       
	                       
	                        if ( has( p = 'FORMAT' ) ) {
	
	                            if ( typeof v == 'object' ) {
	                                FORMAT = v;
	                            } else if (ERRORS) {
	                                raise( 2, p + ' not an object', v );
	                            }
	                        }
	                        r[p] = FORMAT;
	
	                        return r;
	                    };
	
	
	                    
	                    BigNumber.max = function () { return maxOrMin( arguments, P.lt ); };
	
	
	                    
	                    BigNumber.min = function () { return maxOrMin( arguments, P.gt ); };
	
	
	                    
	                    BigNumber.random = (function () {
	                        var pow2_53 = 0x20000000000000;
	
	                       
	                       
	                       
	                       
	                        var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
	                            ? function () { return mathfloor( Math.random() * pow2_53 ); }
	                            : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
	                            (Math.random() * 0x800000 | 0); };
	
	                        return function (dp) {
	                            var a, b, e, k, v,
	                                i = 0,
	                                c = [],
	                                rand = new BigNumber(ONE);
	
	                            dp = dp == null || !isValidInt( dp, 0, MAX, 14 ) ? DECIMAL_PLACES : dp | 0;
	                            k = mathceil( dp / LOG_BASE );
	
	                            if (CRYPTO) {
	
	                               
	                                if (crypto.getRandomValues) {
	
	                                    a = crypto.getRandomValues( new Uint32Array( k *= 2 ) );
	
	                                    for ( ; i < k; ) {
	
	                                       
	                                       
	                                       
	                                       
	                                       
	                                       
	                                        v = a[i] * 0x20000 + (a[i + 1] >>> 11);
	
	                                       
	                                       
	                                       
	                                       
	                                        if ( v >= 9e15 ) {
	                                            b = crypto.getRandomValues( new Uint32Array(2) );
	                                            a[i] = b[0];
	                                            a[i + 1] = b[1];
	                                        } else {
	
	                                           
	                                           
	                                            c.push( v % 1e14 );
	                                            i += 2;
	                                        }
	                                    }
	                                    i = k / 2;
	
	                                   
	                                } else if (crypto.randomBytes) {
	
	                                   
	                                    a = crypto.randomBytes( k *= 7 );
	
	                                    for ( ; i < k; ) {
	
	                                       
	                                       
	                                       
	                                       
	                                        v = ( ( a[i] & 31 ) * 0x1000000000000 ) + ( a[i + 1] * 0x10000000000 ) +
	                                            ( a[i + 2] * 0x100000000 ) + ( a[i + 3] * 0x1000000 ) +
	                                            ( a[i + 4] << 16 ) + ( a[i + 5] << 8 ) + a[i + 6];
	
	                                        if ( v >= 9e15 ) {
	                                            crypto.randomBytes(7).copy( a, i );
	                                        } else {
	
	                                           
	                                            c.push( v % 1e14 );
	                                            i += 7;
	                                        }
	                                    }
	                                    i = k / 7;
	                                } else {
	                                    CRYPTO = false;
	                                    if (ERRORS) raise( 14, 'crypto unavailable', crypto );
	                                }
	                            }
	
	                           
	                            if (!CRYPTO) {
	
	                                for ( ; i < k; ) {
	                                    v = random53bitInt();
	                                    if ( v < 9e15 ) c[i++] = v % 1e14;
	                                }
	                            }
	
	                            k = c[--i];
	                            dp %= LOG_BASE;
	
	                           
	                            if ( k && dp ) {
	                                v = POWS_TEN[LOG_BASE - dp];
	                                c[i] = mathfloor( k / v ) * v;
	                            }
	
	                           
	                            for ( ; c[i] === 0; c.pop(), i-- );
	
	                           
	                            if ( i < 0 ) {
	                                c = [ e = 0 ];
	                            } else {
	
	                               
	                                for ( e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);
	
	                               
	                                for ( i = 1, v = c[0]; v >= 10; v /= 10, i++);
	
	                               
	                                if ( i < LOG_BASE ) e -= LOG_BASE - i;
	                            }
	
	                            rand.e = e;
	                            rand.c = c;
	                            return rand;
	                        };
	                    })();
	
	
	                   
	
	
	                   
	                    function convertBase( str, baseOut, baseIn, sign ) {
	                        var d, e, k, r, x, xc, y,
	                            i = str.indexOf( '.' ),
	                            dp = DECIMAL_PLACES,
	                            rm = ROUNDING_MODE;
	
	                        if ( baseIn < 37 ) str = str.toLowerCase();
	
	                       
	                        if ( i >= 0 ) {
	                            k = POW_PRECISION;
	
	                           
	                            POW_PRECISION = 0;
	                            str = str.replace( '.', '' );
	                            y = new BigNumber(baseIn);
	                            x = y.pow( str.length - i );
	                            POW_PRECISION = k;
	
	                           
	                           
	                            y.c = toBaseOut( toFixedPoint( coeffToString( x.c ), x.e ), 10, baseOut );
	                            y.e = y.c.length;
	                        }
	
	                       
	                        xc = toBaseOut( str, baseIn, baseOut );
	                        e = k = xc.length;
	
	                       
	                        for ( ; xc[--k] == 0; xc.pop() );
	                        if ( !xc[0] ) return '0';
	
	                        if ( i < 0 ) {
	                            --e;
	                        } else {
	                            x.c = xc;
	                            x.e = e;
	
	                           
	                            x.s = sign;
	                            x = div( x, y, dp, rm, baseOut );
	                            xc = x.c;
	                            r = x.r;
	                            e = x.e;
	                        }
	
	                        d = e + dp + 1;
	
	                       
	                        i = xc[d];
	                        k = baseOut / 2;
	                        r = r || d < 0 || xc[d + 1] != null;
	
	                        r = rm < 4 ? ( i != null || r ) && ( rm == 0 || rm == ( x.s < 0 ? 3 : 2 ) )
	                            : i > k || i == k &&( rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
	                        rm == ( x.s < 0 ? 8 : 7 ) );
	
	                        if ( d < 1 || !xc[0] ) {
	
	                           
	                            str = r ? toFixedPoint( '1', -dp ) : '0';
	                        } else {
	                            xc.length = d;
	
	                            if (r) {
	
	                               
	                                for ( --baseOut; ++xc[--d] > baseOut; ) {
	                                    xc[d] = 0;
	
	                                    if ( !d ) {
	                                        ++e;
	                                        xc = [1].concat(xc);
	                                    }
	                                }
	                            }
	
	                           
	                            for ( k = xc.length; !xc[--k]; );
	
	                           
	                            for ( i = 0, str = ''; i <= k; str += ALPHABET.charAt( xc[i++] ) );
	                            str = toFixedPoint( str, e );
	                        }
	
	                       
	                        return str;
	                    }
	
	
	                   
	                    div = (function () {
	
	                       
	                        function multiply( x, k, base ) {
	                            var m, temp, xlo, xhi,
	                                carry = 0,
	                                i = x.length,
	                                klo = k % SQRT_BASE,
	                                khi = k / SQRT_BASE | 0;
	
	                            for ( x = x.slice(); i--; ) {
	                                xlo = x[i] % SQRT_BASE;
	                                xhi = x[i] / SQRT_BASE | 0;
	                                m = khi * xlo + xhi * klo;
	                                temp = klo * xlo + ( ( m % SQRT_BASE ) * SQRT_BASE ) + carry;
	                                carry = ( temp / base | 0 ) + ( m / SQRT_BASE | 0 ) + khi * xhi;
	                                x[i] = temp % base;
	                            }
	
	                            if (carry) x = [carry].concat(x);
	
	                            return x;
	                        }
	
	                        function compare( a, b, aL, bL ) {
	                            var i, cmp;
	
	                            if ( aL != bL ) {
	                                cmp = aL > bL ? 1 : -1;
	                            } else {
	
	                                for ( i = cmp = 0; i < aL; i++ ) {
	
	                                    if ( a[i] != b[i] ) {
	                                        cmp = a[i] > b[i] ? 1 : -1;
	                                        break;
	                                    }
	                                }
	                            }
	                            return cmp;
	                        }
	
	                        function subtract( a, b, aL, base ) {
	                            var i = 0;
	
	                           
	                            for ( ; aL--; ) {
	                                a[aL] -= i;
	                                i = a[aL] < b[aL] ? 1 : 0;
	                                a[aL] = i * base + a[aL] - b[aL];
	                            }
	
	                           
	                            for ( ; !a[0] && a.length > 1; a.splice(0, 1) );
	                        }
	
	                       
	                        return function ( x, y, dp, rm, base ) {
	                            var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
	                                yL, yz,
	                                s = x.s == y.s ? 1 : -1,
	                                xc = x.c,
	                                yc = y.c;
	
	                           
	                            if ( !xc || !xc[0] || !yc || !yc[0] ) {
	
	                                return new BigNumber(
	
	                                   
	                                    !x.s || !y.s || ( xc ? yc && xc[0] == yc[0] : !yc ) ? NaN :
	
	                                       
	                                        xc && xc[0] == 0 || !yc ? s * 0 : s / 0
	                                );
	                            }
	
	                            q = new BigNumber(s);
	                            qc = q.c = [];
	                            e = x.e - y.e;
	                            s = dp + e + 1;
	
	                            if ( !base ) {
	                                base = BASE;
	                                e = bitFloor( x.e / LOG_BASE ) - bitFloor( y.e / LOG_BASE );
	                                s = s / LOG_BASE | 0;
	                            }
	
	                           
	                           
	                            for ( i = 0; yc[i] == ( xc[i] || 0 ); i++ );
	                            if ( yc[i] > ( xc[i] || 0 ) ) e--;
	
	                            if ( s < 0 ) {
	                                qc.push(1);
	                                more = true;
	                            } else {
	                                xL = xc.length;
	                                yL = yc.length;
	                                i = 0;
	                                s += 2;
	
	                               
	
	                                n = mathfloor( base / ( yc[0] + 1 ) );
	
	                               
	                               
	                                if ( n > 1 ) {
	                                    yc = multiply( yc, n, base );
	                                    xc = multiply( xc, n, base );
	                                    yL = yc.length;
	                                    xL = xc.length;
	                                }
	
	                                xi = yL;
	                                rem = xc.slice( 0, yL );
	                                remL = rem.length;
	
	                               
	                                for ( ; remL < yL; rem[remL++] = 0 );
	                                yz = yc.slice();
	                                yz = [0].concat(yz);
	                                yc0 = yc[0];
	                                if ( yc[1] >= base / 2 ) yc0++;
	                               
	                               
	
	                                do {
	                                    n = 0;
	
	                                   
	                                    cmp = compare( yc, rem, yL, remL );
	
	                                   
	                                    if ( cmp < 0 ) {
	
	                                       
	
	                                        rem0 = rem[0];
	                                        if ( yL != remL ) rem0 = rem0 * base + ( rem[1] || 0 );
	
	                                       
	                                        n = mathfloor( rem0 / yc0 );
	
	                                       
	                                       
	                                       
	                                       
	                                       
	                                       
	                                       
	
	                                        if ( n > 1 ) {
	
	                                           
	                                            if (n >= base) n = base - 1;
	
	                                           
	                                            prod = multiply( yc, n, base );
	                                            prodL = prod.length;
	                                            remL = rem.length;
	
	                                           
	                                           
	                                           
	                                           
	                                           
	                                            while ( compare( prod, rem, prodL, remL ) == 1 ) {
	                                                n--;
	
	                                               
	                                                subtract( prod, yL < prodL ? yz : yc, prodL, base );
	                                                prodL = prod.length;
	                                                cmp = 1;
	                                            }
	                                        } else {
	
	                                           
	                                           
	                                           
	                                           
	                                            if ( n == 0 ) {
	
	                                               
	                                                cmp = n = 1;
	                                            }
	
	                                           
	                                            prod = yc.slice();
	                                            prodL = prod.length;
	                                        }
	
	                                        if ( prodL < remL ) prod = [0].concat(prod);
	
	                                       
	                                        subtract( rem, prod, remL, base );
	                                        remL = rem.length;
	
	                                       
	                                        if ( cmp == -1 ) {
	
	                                           
	                                           
	                                           
	                                           
	                                            while ( compare( yc, rem, yL, remL ) < 1 ) {
	                                                n++;
	
	                                               
	                                                subtract( rem, yL < remL ? yz : yc, remL, base );
	                                                remL = rem.length;
	                                            }
	                                        }
	                                    } else if ( cmp === 0 ) {
	                                        n++;
	                                        rem = [0];
	                                    }
	
	                                   
	                                    qc[i++] = n;
	
	                                   
	                                    if ( rem[0] ) {
	                                        rem[remL++] = xc[xi] || 0;
	                                    } else {
	                                        rem = [ xc[xi] ];
	                                        remL = 1;
	                                    }
	                                } while ( ( xi++ < xL || rem[0] != null ) && s-- );
	
	                                more = rem[0] != null;
	
	                               
	                                if ( !qc[0] ) qc.splice(0, 1);
	                            }
	
	                            if ( base == BASE ) {
	
	                               
	                                for ( i = 1, s = qc[0]; s >= 10; s /= 10, i++ );
	                                round( q, dp + ( q.e = i + e * LOG_BASE - 1 ) + 1, rm, more );
	
	                               
	                            } else {
	                                q.e = e;
	                                q.r = +more;
	                            }
	
	                            return q;
	                        };
	                    })();
	
	
	                    
	                    function format( n, i, rm, caller ) {
	                        var c0, e, ne, len, str;
	
	                        rm = rm != null && isValidInt( rm, 0, 8, caller, roundingMode )
	                            ? rm | 0 : ROUNDING_MODE;
	
	                        if ( !n.c ) return n.toString();
	                        c0 = n.c[0];
	                        ne = n.e;
	
	                        if ( i == null ) {
	                            str = coeffToString( n.c );
	                            str = caller == 19 || caller == 24 && ne <= TO_EXP_NEG
	                                ? toExponential( str, ne )
	                                : toFixedPoint( str, ne );
	                        } else {
	                            n = round( new BigNumber(n), i, rm );
	
	                           
	                            e = n.e;
	
	                            str = coeffToString( n.c );
	                            len = str.length;
	
	                           
	                           
	                           
	
	                           
	                            if ( caller == 19 || caller == 24 && ( i <= e || e <= TO_EXP_NEG ) ) {
	
	                               
	                                for ( ; len < i; str += '0', len++ );
	                                str = toExponential( str, e );
	
	                               
	                            } else {
	                                i -= ne;
	                                str = toFixedPoint( str, e );
	
	                               
	                                if ( e + 1 > len ) {
	                                    if ( --i > 0 ) for ( str += '.'; i--; str += '0' );
	                                } else {
	                                    i += e - len;
	                                    if ( i > 0 ) {
	                                        if ( e + 1 == len ) str += '.';
	                                        for ( ; i--; str += '0' );
	                                    }
	                                }
	                            }
	                        }
	
	                        return n.s < 0 && c0 ? '-' + str : str;
	                    }
	
	
	                   
	                    function maxOrMin( args, method ) {
	                        var m, n,
	                            i = 0;
	
	                        if ( isArray( args[0] ) ) args = args[0];
	                        m = new BigNumber( args[0] );
	
	                        for ( ; ++i < args.length; ) {
	                            n = new BigNumber( args[i] );
	
	                           
	                            if ( !n.s ) {
	                                m = n;
	                                break;
	                            } else if ( method.call( m, n ) ) {
	                                m = n;
	                            }
	                        }
	
	                        return m;
	                    }
	
	
	                    
	                    function intValidatorWithErrors( n, min, max, caller, name ) {
	                        if ( n < min || n > max || n != truncate(n) ) {
	                            raise( caller, ( name || 'decimal places' ) +
	                                ( n < min || n > max ? ' out of range' : ' not an integer' ), n );
	                        }
	
	                        return true;
	                    }
	
	
	                    
	                    function normalise( n, c, e ) {
	                        var i = 1,
	                            j = c.length;
	
	                       
	                        for ( ; !c[--j]; c.pop() );
	
	                       
	                        for ( j = c[0]; j >= 10; j /= 10, i++ );
	
	                       
	                        if ( ( e = i + e * LOG_BASE - 1 ) > MAX_EXP ) {
	
	                           
	                            n.c = n.e = null;
	
	                           
	                        } else if ( e < MIN_EXP ) {
	
	                           
	                            n.c = [ n.e = 0 ];
	                        } else {
	                            n.e = e;
	                            n.c = c;
	                        }
	
	                        return n;
	                    }
	
	
	                   
	                    parseNumeric = (function () {
	                        var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
	                            dotAfter = /^([^.]+)\.$/,
	                            dotBefore = /^\.([^.]+)$/,
	                            isInfinityOrNaN = /^-?(Infinity|NaN)$/,
	                            whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
	
	                        return function ( x, str, num, b ) {
	                            var base,
	                                s = num ? str : str.replace( whitespaceOrPlus, '' );
	
	                           
	                            if ( isInfinityOrNaN.test(s) ) {
	                                x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
	                            } else {
	                                if ( !num ) {
	
	                                   
	                                    s = s.replace( basePrefix, function ( m, p1, p2 ) {
	                                        base = ( p2 = p2.toLowerCase() ) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
	                                        return !b || b == base ? p1 : m;
	                                    });
	
	                                    if (b) {
	                                        base = b;
	
	                                       
	                                        s = s.replace( dotAfter, '$1' ).replace( dotBefore, '0.$1' );
	                                    }
	
	                                    if ( str != s ) return new BigNumber( s, base );
	                                }
	
	                               
	                               
	                                if (ERRORS) raise( id, 'not a' + ( b ? ' base ' + b : '' ) + ' number', str );
	                                x.s = null;
	                            }
	
	                            x.c = x.e = null;
	                            id = 0;
	                        }
	                    })();
	
	
	                   
	                    function raise( caller, msg, val ) {
	                        var error = new Error( [
	                                'new BigNumber',    
	                                'cmp',              
	                                'config',           
	                                'div',              
	                                'divToInt',         
	                                'eq',               
	                                'gt',               
	                                'gte',              
	                                'lt',               
	                                'lte',              
	                                'minus',            
	                                'mod',              
	                                'plus',             
	                                'precision',        
	                                'random',           
	                                'round',            
	                                'shift',            
	                                'times',            
	                                'toDigits',         
	                                'toExponential',    
	                                'toFixed',          
	                                'toFormat',         
	                                'toFraction',       
	                                'pow',              
	                                'toPrecision',      
	                                'toString',         
	                                'BigNumber'         
	                            ][caller] + '() ' + msg + ': ' + val );
	
	                        error.name = 'BigNumber Error';
	                        id = 0;
	                        throw error;
	                    }
	
	
	                    
	                    function round( x, sd, rm, r ) {
	                        var d, i, j, k, n, ni, rd,
	                            xc = x.c,
	                            pows10 = POWS_TEN;
	
	                       
	                        if (xc) {
	
	                           
	                           
	                           
	                           
	                           
	                           
	                            out: {
	
	                               
	                                for ( d = 1, k = xc[0]; k >= 10; k /= 10, d++ );
	                                i = sd - d;
	
	                               
	                                if ( i < 0 ) {
	                                    i += LOG_BASE;
	                                    j = sd;
	                                    n = xc[ ni = 0 ];
	
	                                   
	                                    rd = n / pows10[ d - j - 1 ] % 10 | 0;
	                                } else {
	                                    ni = mathceil( ( i + 1 ) / LOG_BASE );
	
	                                    if ( ni >= xc.length ) {
	
	                                        if (r) {
	
	                                           
	                                            for ( ; xc.length <= ni; xc.push(0) );
	                                            n = rd = 0;
	                                            d = 1;
	                                            i %= LOG_BASE;
	                                            j = i - LOG_BASE + 1;
	                                        } else {
	                                            break out;
	                                        }
	                                    } else {
	                                        n = k = xc[ni];
	
	                                       
	                                        for ( d = 1; k >= 10; k /= 10, d++ );
	
	                                       
	                                        i %= LOG_BASE;
	
	                                       
	                                       
	                                        j = i - LOG_BASE + d;
	
	                                       
	                                        rd = j < 0 ? 0 : n / pows10[ d - j - 1 ] % 10 | 0;
	                                    }
	                                }
	
	                                r = r || sd < 0 ||
	
	                                   
	                                   
	                                   
	                                    xc[ni + 1] != null || ( j < 0 ? n : n % pows10[ d - j - 1 ] );
	
	                                r = rm < 4
	                                    ? ( rd || r ) && ( rm == 0 || rm == ( x.s < 0 ? 3 : 2 ) )
	                                    : rd > 5 || rd == 5 && ( rm == 4 || r || rm == 6 &&
	
	                               
	                                ( ( i > 0 ? j > 0 ? n / pows10[ d - j ] : 0 : xc[ni - 1] ) % 10 ) & 1 ||
	                                rm == ( x.s < 0 ? 8 : 7 ) );
	
	                                if ( sd < 1 || !xc[0] ) {
	                                    xc.length = 0;
	
	                                    if (r) {
	
	                                       
	                                        sd -= x.e + 1;
	
	                                       
	                                        xc[0] = pows10[ ( LOG_BASE - sd % LOG_BASE ) % LOG_BASE ];
	                                        x.e = -sd || 0;
	                                    } else {
	
	                                       
	                                        xc[0] = x.e = 0;
	                                    }
	
	                                    return x;
	                                }
	
	                               
	                                if ( i == 0 ) {
	                                    xc.length = ni;
	                                    k = 1;
	                                    ni--;
	                                } else {
	                                    xc.length = ni + 1;
	                                    k = pows10[ LOG_BASE - i ];
	
	                                   
	                                   
	                                    xc[ni] = j > 0 ? mathfloor( n / pows10[ d - j ] % pows10[j] ) * k : 0;
	                                }
	
	                               
	                                if (r) {
	
	                                    for ( ; ; ) {
	
	                                       
	                                        if ( ni == 0 ) {
	
	                                           
	                                            for ( i = 1, j = xc[0]; j >= 10; j /= 10, i++ );
	                                            j = xc[0] += k;
	                                            for ( k = 1; j >= 10; j /= 10, k++ );
	
	                                           
	                                            if ( i != k ) {
	                                                x.e++;
	                                                if ( xc[0] == BASE ) xc[0] = 1;
	                                            }
	
	                                            break;
	                                        } else {
	                                            xc[ni] += k;
	                                            if ( xc[ni] != BASE ) break;
	                                            xc[ni--] = 0;
	                                            k = 1;
	                                        }
	                                    }
	                                }
	
	                               
	                                for ( i = xc.length; xc[--i] === 0; xc.pop() );
	                            }
	
	                           
	                            if ( x.e > MAX_EXP ) {
	                                x.c = x.e = null;
	
	                               
	                            } else if ( x.e < MIN_EXP ) {
	                                x.c = [ x.e = 0 ];
	                            }
	                        }
	
	                        return x;
	                    }
	
	
	                   
	
	
	                    
	                    P.absoluteValue = P.abs = function () {
	                        var x = new BigNumber(this);
	                        if ( x.s < 0 ) x.s = 1;
	                        return x;
	                    };
	
	
	                    
	                    P.ceil = function () {
	                        return round( new BigNumber(this), this.e + 1, 2 );
	                    };
	
	
	                    
	                    P.comparedTo = P.cmp = function ( y, b ) {
	                        id = 1;
	                        return compare( this, new BigNumber( y, b ) );
	                    };
	
	
	                    
	                    P.decimalPlaces = P.dp = function () {
	                        var n, v,
	                            c = this.c;
	
	                        if ( !c ) return null;
	                        n = ( ( v = c.length - 1 ) - bitFloor( this.e / LOG_BASE ) ) * LOG_BASE;
	
	                       
	                        if ( v = c[v] ) for ( ; v % 10 == 0; v /= 10, n-- );
	                        if ( n < 0 ) n = 0;
	
	                        return n;
	                    };
	
	
	                    
	                    P.dividedBy = P.div = function ( y, b ) {
	                        id = 3;
	                        return div( this, new BigNumber( y, b ), DECIMAL_PLACES, ROUNDING_MODE );
	                    };
	
	
	                    
	                    P.dividedToIntegerBy = P.divToInt = function ( y, b ) {
	                        id = 4;
	                        return div( this, new BigNumber( y, b ), 0, 1 );
	                    };
	
	
	                    
	                    P.equals = P.eq = function ( y, b ) {
	                        id = 5;
	                        return compare( this, new BigNumber( y, b ) ) === 0;
	                    };
	
	
	                    
	                    P.floor = function () {
	                        return round( new BigNumber(this), this.e + 1, 3 );
	                    };
	
	
	                    
	                    P.greaterThan = P.gt = function ( y, b ) {
	                        id = 6;
	                        return compare( this, new BigNumber( y, b ) ) > 0;
	                    };
	
	
	                    
	                    P.greaterThanOrEqualTo = P.gte = function ( y, b ) {
	                        id = 7;
	                        return ( b = compare( this, new BigNumber( y, b ) ) ) === 1 || b === 0;
	
	                    };
	
	
	                    
	                    P.isFinite = function () {
	                        return !!this.c;
	                    };
	
	
	                    
	                    P.isInteger = P.isInt = function () {
	                        return !!this.c && bitFloor( this.e / LOG_BASE ) > this.c.length - 2;
	                    };
	
	
	                    
	                    P.isNaN = function () {
	                        return !this.s;
	                    };
	
	
	                    
	                    P.isNegative = P.isNeg = function () {
	                        return this.s < 0;
	                    };
	
	
	                    
	                    P.isZero = function () {
	                        return !!this.c && this.c[0] == 0;
	                    };
	
	
	                    
	                    P.lessThan = P.lt = function ( y, b ) {
	                        id = 8;
	                        return compare( this, new BigNumber( y, b ) ) < 0;
	                    };
	
	
	                    
	                    P.lessThanOrEqualTo = P.lte = function ( y, b ) {
	                        id = 9;
	                        return ( b = compare( this, new BigNumber( y, b ) ) ) === -1 || b === 0;
	                    };
	
	
	                    
	                    P.minus = P.sub = function ( y, b ) {
	                        var i, j, t, xLTy,
	                            x = this,
	                            a = x.s;
	
	                        id = 10;
	                        y = new BigNumber( y, b );
	                        b = y.s;
	
	                       
	                        if ( !a || !b ) return new BigNumber(NaN);
	
	                       
	                        if ( a != b ) {
	                            y.s = -b;
	                            return x.plus(y);
	                        }
	
	                        var xe = x.e / LOG_BASE,
	                            ye = y.e / LOG_BASE,
	                            xc = x.c,
	                            yc = y.c;
	
	                        if ( !xe || !ye ) {
	
	                           
	                            if ( !xc || !yc ) return xc ? ( y.s = -b, y ) : new BigNumber( yc ? x : NaN );
	
	                           
	                            if ( !xc[0] || !yc[0] ) {
	
	                               
	                                return yc[0] ? ( y.s = -b, y ) : new BigNumber( xc[0] ? x :
	
	                                   
	                                    ROUNDING_MODE == 3 ? -0 : 0 );
	                            }
	                        }
	
	                        xe = bitFloor(xe);
	                        ye = bitFloor(ye);
	                        xc = xc.slice();
	
	                       
	                        if ( a = xe - ye ) {
	
	                            if ( xLTy = a < 0 ) {
	                                a = -a;
	                                t = xc;
	                            } else {
	                                ye = xe;
	                                t = yc;
	                            }
	
	                            t.reverse();
	
	                           
	                            for ( b = a; b--; t.push(0) );
	                            t.reverse();
	                        } else {
	
	                           
	                            j = ( xLTy = ( a = xc.length ) < ( b = yc.length ) ) ? a : b;
	
	                            for ( a = b = 0; b < j; b++ ) {
	
	                                if ( xc[b] != yc[b] ) {
	                                    xLTy = xc[b] < yc[b];
	                                    break;
	                                }
	                            }
	                        }
	
	                       
	                        if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;
	
	                        b = ( j = yc.length ) - ( i = xc.length );
	
	                       
	                       
	                        if ( b > 0 ) for ( ; b--; xc[i++] = 0 );
	                        b = BASE - 1;
	
	                       
	                        for ( ; j > a; ) {
	
	                            if ( xc[--j] < yc[j] ) {
	                                for ( i = j; i && !xc[--i]; xc[i] = b );
	                                --xc[i];
	                                xc[j] += BASE;
	                            }
	
	                            xc[j] -= yc[j];
	                        }
	
	                       
	                        for ( ; xc[0] == 0; xc.splice(0, 1), --ye );
	
	                       
	                        if ( !xc[0] ) {
	
	                           
	                           
	                            y.s = ROUNDING_MODE == 3 ? -1 : 1;
	                            y.c = [ y.e = 0 ];
	                            return y;
	                        }
	
	                       
	                       
	                        return normalise( y, xc, ye );
	                    };
	
	
	                    
	                    P.modulo = P.mod = function ( y, b ) {
	                        var q, s,
	                            x = this;
	
	                        id = 11;
	                        y = new BigNumber( y, b );
	
	                       
	                        if ( !x.c || !y.s || y.c && !y.c[0] ) {
	                            return new BigNumber(NaN);
	
	                           
	                        } else if ( !y.c || x.c && !x.c[0] ) {
	                            return new BigNumber(x);
	                        }
	
	                        if ( MODULO_MODE == 9 ) {
	
	                           
	                           
	                            s = y.s;
	                            y.s = 1;
	                            q = div( x, y, 0, 3 );
	                            y.s = s;
	                            q.s *= s;
	                        } else {
	                            q = div( x, y, 0, MODULO_MODE );
	                        }
	
	                        return x.minus( q.times(y) );
	                    };
	
	
	                    
	                    P.negated = P.neg = function () {
	                        var x = new BigNumber(this);
	                        x.s = -x.s || null;
	                        return x;
	                    };
	
	
	                    
	                    P.plus = P.add = function ( y, b ) {
	                        var t,
	                            x = this,
	                            a = x.s;
	
	                        id = 12;
	                        y = new BigNumber( y, b );
	                        b = y.s;
	
	                       
	                        if ( !a || !b ) return new BigNumber(NaN);
	
	                       
	                        if ( a != b ) {
	                            y.s = -b;
	                            return x.minus(y);
	                        }
	
	                        var xe = x.e / LOG_BASE,
	                            ye = y.e / LOG_BASE,
	                            xc = x.c,
	                            yc = y.c;
	
	                        if ( !xe || !ye ) {
	
	                           
	                            if ( !xc || !yc ) return new BigNumber( a / 0 );
	
	                           
	                           
	                            if ( !xc[0] || !yc[0] ) return yc[0] ? y : new BigNumber( xc[0] ? x : a * 0 );
	                        }
	
	                        xe = bitFloor(xe);
	                        ye = bitFloor(ye);
	                        xc = xc.slice();
	
	                       
	                        if ( a = xe - ye ) {
	                            if ( a > 0 ) {
	                                ye = xe;
	                                t = yc;
	                            } else {
	                                a = -a;
	                                t = xc;
	                            }
	
	                            t.reverse();
	                            for ( ; a--; t.push(0) );
	                            t.reverse();
	                        }
	
	                        a = xc.length;
	                        b = yc.length;
	
	                       
	                        if ( a - b < 0 ) t = yc, yc = xc, xc = t, b = a;
	
	                       
	                        for ( a = 0; b; ) {
	                            a = ( xc[--b] = xc[b] + yc[b] + a ) / BASE | 0;
	                            xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
	                        }
	
	                        if (a) {
	                            xc = [a].concat(xc);
	                            ++ye;
	                        }
	
	                       
	                       
	                        return normalise( y, xc, ye );
	                    };
	
	
	                    
	                    P.precision = P.sd = function (z) {
	                        var n, v,
	                            x = this,
	                            c = x.c;
	
	                       
	                        if ( z != null && z !== !!z && z !== 1 && z !== 0 ) {
	                            if (ERRORS) raise( 13, 'argument' + notBool, z );
	                            if ( z != !!z ) z = null;
	                        }
	
	                        if ( !c ) return null;
	                        v = c.length - 1;
	                        n = v * LOG_BASE + 1;
	
	                        if ( v = c[v] ) {
	
	                           
	                            for ( ; v % 10 == 0; v /= 10, n-- );
	
	                           
	                            for ( v = c[0]; v >= 10; v /= 10, n++ );
	                        }
	
	                        if ( z && x.e + 1 > n ) n = x.e + 1;
	
	                        return n;
	                    };
	
	
	                    
	                    P.round = function ( dp, rm ) {
	                        var n = new BigNumber(this);
	
	                        if ( dp == null || isValidInt( dp, 0, MAX, 15 ) ) {
	                            round( n, ~~dp + this.e + 1, rm == null ||
	                            !isValidInt( rm, 0, 8, 15, roundingMode ) ? ROUNDING_MODE : rm | 0 );
	                        }
	
	                        return n;
	                    };
	
	
	                    
	                    P.shift = function (k) {
	                        var n = this;
	                        return isValidInt( k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, 16, 'argument' )
	
	                           
	                            ? n.times( '1e' + truncate(k) )
	                            : new BigNumber( n.c && n.c[0] && ( k < -MAX_SAFE_INTEGER || k > MAX_SAFE_INTEGER )
	                            ? n.s * ( k < 0 ? 0 : 1 / 0 )
	                            : n );
	                    };
	
	
	                    
	                    P.squareRoot = P.sqrt = function () {
	                        var m, n, r, rep, t,
	                            x = this,
	                            c = x.c,
	                            s = x.s,
	                            e = x.e,
	                            dp = DECIMAL_PLACES + 4,
	                            half = new BigNumber('0.5');
	
	                       
	                        if ( s !== 1 || !c || !c[0] ) {
	                            return new BigNumber( !s || s < 0 && ( !c || c[0] ) ? NaN : c ? x : 1 / 0 );
	                        }
	
	                       
	                        s = Math.sqrt( +x );
	
	                       
	                       
	                        if ( s == 0 || s == 1 / 0 ) {
	                            n = coeffToString(c);
	                            if ( ( n.length + e ) % 2 == 0 ) n += '0';
	                            s = Math.sqrt(n);
	                            e = bitFloor( ( e + 1 ) / 2 ) - ( e < 0 || e % 2 );
	
	                            if ( s == 1 / 0 ) {
	                                n = '1e' + e;
	                            } else {
	                                n = s.toExponential();
	                                n = n.slice( 0, n.indexOf('e') + 1 ) + e;
	                            }
	
	                            r = new BigNumber(n);
	                        } else {
	                            r = new BigNumber( s + '' );
	                        }
	
	                       
	                       
	                       
	                       
	                        if ( r.c[0] ) {
	                            e = r.e;
	                            s = e + dp;
	                            if ( s < 3 ) s = 0;
	
	                           
	                            for ( ; ; ) {
	                                t = r;
	                                r = half.times( t.plus( div( x, t, dp, 1 ) ) );
	
	                                if ( coeffToString( t.c   ).slice( 0, s ) === ( n =
	                                        coeffToString( r.c ) ).slice( 0, s ) ) {
	
	                                   
	                                   
	                                   
	                                    if ( r.e < e ) --s;
	                                    n = n.slice( s - 3, s + 1 );
	
	                                   
	                                   
	                                   
	                                    if ( n == '9999' || !rep && n == '4999' ) {
	
	                                       
	                                       
	                                        if ( !rep ) {
	                                            round( t, t.e + DECIMAL_PLACES + 2, 0 );
	
	                                            if ( t.times(t).eq(x) ) {
	                                                r = t;
	                                                break;
	                                            }
	                                        }
	
	                                        dp += 4;
	                                        s += 4;
	                                        rep = 1;
	                                    } else {
	
	                                       
	                                       
	                                        if ( !+n || !+n.slice(1) && n.charAt(0) == '5' ) {
	
	                                           
	                                            round( r, r.e + DECIMAL_PLACES + 2, 1 );
	                                            m = !r.times(r).eq(x);
	                                        }
	
	                                        break;
	                                    }
	                                }
	                            }
	                        }
	
	                        return round( r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m );
	                    };
	
	
	                    
	                    P.times = P.mul = function ( y, b ) {
	                        var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
	                            base, sqrtBase,
	                            x = this,
	                            xc = x.c,
	                            yc = ( id = 17, y = new BigNumber( y, b ) ).c;
	
	                       
	                        if ( !xc || !yc || !xc[0] || !yc[0] ) {
	
	                           
	                            if ( !x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc ) {
	                                y.c = y.e = y.s = null;
	                            } else {
	                                y.s *= x.s;
	
	                               
	                                if ( !xc || !yc ) {
	                                    y.c = y.e = null;
	
	                                   
	                                } else {
	                                    y.c = [0];
	                                    y.e = 0;
	                                }
	                            }
	
	                            return y;
	                        }
	
	                        e = bitFloor( x.e / LOG_BASE ) + bitFloor( y.e / LOG_BASE );
	                        y.s *= x.s;
	                        xcL = xc.length;
	                        ycL = yc.length;
	
	                       
	                        if ( xcL < ycL ) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;
	
	                       
	                        for ( i = xcL + ycL, zc = []; i--; zc.push(0) );
	
	                        base = BASE;
	                        sqrtBase = SQRT_BASE;
	
	                        for ( i = ycL; --i >= 0; ) {
	                            c = 0;
	                            ylo = yc[i] % sqrtBase;
	                            yhi = yc[i] / sqrtBase | 0;
	
	                            for ( k = xcL, j = i + k; j > i; ) {
	                                xlo = xc[--k] % sqrtBase;
	                                xhi = xc[k] / sqrtBase | 0;
	                                m = yhi * xlo + xhi * ylo;
	                                xlo = ylo * xlo + ( ( m % sqrtBase ) * sqrtBase ) + zc[j] + c;
	                                c = ( xlo / base | 0 ) + ( m / sqrtBase | 0 ) + yhi * xhi;
	                                zc[j--] = xlo % base;
	                            }
	
	                            zc[j] = c;
	                        }
	
	                        if (c) {
	                            ++e;
	                        } else {
	                            zc.splice(0, 1);
	                        }
	
	                        return normalise( y, zc, e );
	                    };
	
	
	                    
	                    P.toDigits = function ( sd, rm ) {
	                        var n = new BigNumber(this);
	                        sd = sd == null || !isValidInt( sd, 1, MAX, 18, 'precision' ) ? null : sd | 0;
	                        rm = rm == null || !isValidInt( rm, 0, 8, 18, roundingMode ) ? ROUNDING_MODE : rm | 0;
	                        return sd ? round( n, sd, rm ) : n;
	                    };
	
	
	                    
	                    P.toExponential = function ( dp, rm ) {
	                        return format( this,
	                            dp != null && isValidInt( dp, 0, MAX, 19 ) ? ~~dp + 1 : null, rm, 19 );
	                    };
	
	
	                    
	                    P.toFixed = function ( dp, rm ) {
	                        return format( this, dp != null && isValidInt( dp, 0, MAX, 20 )
	                            ? ~~dp + this.e + 1 : null, rm, 20 );
	                    };
	
	
	                    
	                    P.toFormat = function ( dp, rm ) {
	                        var str = format( this, dp != null && isValidInt( dp, 0, MAX, 21 )
	                            ? ~~dp + this.e + 1 : null, rm, 21 );
	
	                        if ( this.c ) {
	                            var i,
	                                arr = str.split('.'),
	                                g1 = +FORMAT.groupSize,
	                                g2 = +FORMAT.secondaryGroupSize,
	                                groupSeparator = FORMAT.groupSeparator,
	                                intPart = arr[0],
	                                fractionPart = arr[1],
	                                isNeg = this.s < 0,
	                                intDigits = isNeg ? intPart.slice(1) : intPart,
	                                len = intDigits.length;
	
	                            if (g2) i = g1, g1 = g2, g2 = i, len -= i;
	
	                            if ( g1 > 0 && len > 0 ) {
	                                i = len % g1 || g1;
	                                intPart = intDigits.substr( 0, i );
	
	                                for ( ; i < len; i += g1 ) {
	                                    intPart += groupSeparator + intDigits.substr( i, g1 );
	                                }
	
	                                if ( g2 > 0 ) intPart += groupSeparator + intDigits.slice(i);
	                                if (isNeg) intPart = '-' + intPart;
	                            }
	
	                            str = fractionPart
	                                ? intPart + FORMAT.decimalSeparator + ( ( g2 = +FORMAT.fractionGroupSize )
	                                ? fractionPart.replace( new RegExp( '\\d{' + g2 + '}\\B', 'g' ),
	                                '$&' + FORMAT.fractionGroupSeparator )
	                                : fractionPart )
	                                : intPart;
	                        }
	
	                        return str;
	                    };
	
	
	                    
	                    P.toFraction = function (md) {
	                        var arr, d0, d2, e, exp, n, n0, q, s,
	                            k = ERRORS,
	                            x = this,
	                            xc = x.c,
	                            d = new BigNumber(ONE),
	                            n1 = d0 = new BigNumber(ONE),
	                            d1 = n0 = new BigNumber(ONE);
	
	                        if ( md != null ) {
	                            ERRORS = false;
	                            n = new BigNumber(md);
	                            ERRORS = k;
	
	                            if ( !( k = n.isInt() ) || n.lt(ONE) ) {
	
	                                if (ERRORS) {
	                                    raise( 22,
	                                        'max denominator ' + ( k ? 'out of range' : 'not an integer' ), md );
	                                }
	
	                               
	                               
	                                md = !k && n.c && round( n, n.e + 1, 1 ).gte(ONE) ? n : null;
	                            }
	                        }
	
	                        if ( !xc ) return x.toString();
	                        s = coeffToString(xc);
	
	                       
	                       
	                        e = d.e = s.length - x.e - 1;
	                        d.c[0] = POWS_TEN[ ( exp = e % LOG_BASE ) < 0 ? LOG_BASE + exp : exp ];
	                        md = !md || n.cmp(d) > 0 ? ( e > 0 ? d : n1 ) : n;
	
	                        exp = MAX_EXP;
	                        MAX_EXP = 1 / 0;
	                        n = new BigNumber(s);
	
	                       
	                        n0.c[0] = 0;
	
	                        for ( ; ; )  {
	                            q = div( n, d, 0, 1 );
	                            d2 = d0.plus( q.times(d1) );
	                            if ( d2.cmp(md) == 1 ) break;
	                            d0 = d1;
	                            d1 = d2;
	                            n1 = n0.plus( q.times( d2 = n1 ) );
	                            n0 = d2;
	                            d = n.minus( q.times( d2 = d ) );
	                            n = d2;
	                        }
	
	                        d2 = div( md.minus(d0), d1, 0, 1 );
	                        n0 = n0.plus( d2.times(n1) );
	                        d0 = d0.plus( d2.times(d1) );
	                        n0.s = n1.s = x.s;
	                        e *= 2;
	
	                       
	                        arr = div( n1, d1, e, ROUNDING_MODE ).minus(x).abs().cmp(
	                            div( n0, d0, e, ROUNDING_MODE ).minus(x).abs() ) < 1
	                            ? [ n1.toString(), d1.toString() ]
	                            : [ n0.toString(), d0.toString() ];
	
	                        MAX_EXP = exp;
	                        return arr;
	                    };
	
	
	                    
	                    P.toNumber = function () {
	                        return +this;
	                    };
	
	
	                    
	                    P.toPower = P.pow = function ( n, m ) {
	                        var k, y, z,
	                            i = mathfloor( n < 0 ? -n : +n ),
	                            x = this;
	
	                        if ( m != null ) {
	                            id = 23;
	                            m = new BigNumber(m);
	                        }
	
	                       
	                        if ( !isValidInt( n, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, 23, 'exponent' ) &&
	                            ( !isFinite(n) || i > MAX_SAFE_INTEGER && ( n /= 0 ) ||
	                            parseFloat(n) != n && !( n = NaN ) ) || n == 0 ) {
	                            k = Math.pow( +x, n );
	                            return new BigNumber( m ? k % m : k );
	                        }
	
	                        if (m) {
	                            if ( n > 1 && x.gt(ONE) && x.isInt() && m.gt(ONE) && m.isInt() ) {
	                                x = x.mod(m);
	                            } else {
	                                z = m;
	
	                               
	                                m = null;
	                            }
	                        } else if (POW_PRECISION) {
	
	                           
	                           
	                           
	                           
	                            k = mathceil( POW_PRECISION / LOG_BASE + 2 );
	                        }
	
	                        y = new BigNumber(ONE);
	
	                        for ( ; ; ) {
	                            if ( i % 2 ) {
	                                y = y.times(x);
	                                if ( !y.c ) break;
	                                if (k) {
	                                    if ( y.c.length > k ) y.c.length = k;
	                                } else if (m) {
	                                    y = y.mod(m);
	                                }
	                            }
	
	                            i = mathfloor( i / 2 );
	                            if ( !i ) break;
	                            x = x.times(x);
	                            if (k) {
	                                if ( x.c && x.c.length > k ) x.c.length = k;
	                            } else if (m) {
	                                x = x.mod(m);
	                            }
	                        }
	
	                        if (m) return y;
	                        if ( n < 0 ) y = ONE.div(y);
	
	                        return z ? y.mod(z) : k ? round( y, POW_PRECISION, ROUNDING_MODE ) : y;
	                    };
	
	
	                    
	                    P.toPrecision = function ( sd, rm ) {
	                        return format( this, sd != null && isValidInt( sd, 1, MAX, 24, 'precision' )
	                            ? sd | 0 : null, rm, 24 );
	                    };
	
	
	                    
	                    P.toString = function (b) {
	                        var str,
	                            n = this,
	                            s = n.s,
	                            e = n.e;
	
	                       
	                        if ( e === null ) {
	
	                            if (s) {
	                                str = 'Infinity';
	                                if ( s < 0 ) str = '-' + str;
	                            } else {
	                                str = 'NaN';
	                            }
	                        } else {
	                            str = coeffToString( n.c );
	
	                            if ( b == null || !isValidInt( b, 2, 64, 25, 'base' ) ) {
	                                str = e <= TO_EXP_NEG || e >= TO_EXP_POS
	                                    ? toExponential( str, e )
	                                    : toFixedPoint( str, e );
	                            } else {
	                                str = convertBase( toFixedPoint( str, e ), b | 0, 10, s );
	                            }
	
	                            if ( s < 0 && n.c[0] ) str = '-' + str;
	                        }
	
	                        return str;
	                    };
	
	
	                    
	                    P.truncated = P.trunc = function () {
	                        return round( new BigNumber(this), this.e + 1, 1 );
	                    };
	
	
	                    
	                    P.valueOf = P.toJSON = function () {
	                        var str,
	                            n = this,
	                            e = n.e;
	
	                        if ( e === null ) return n.toString();
	
	                        str = coeffToString( n.c );
	
	                        str = e <= TO_EXP_NEG || e >= TO_EXP_POS
	                            ? toExponential( str, e )
	                            : toFixedPoint( str, e );
	
	                        return n.s < 0 ? '-' + str : str;
	                    };
	
	
	                    P.isBigNumber = true;
	
	                    if ( config != null ) BigNumber.config(config);
	
	                    return BigNumber;
	                }
	
	
	               
	
	
	                function bitFloor(n) {
	                    var i = n | 0;
	                    return n > 0 || n === i ? i : i - 1;
	                }
	
	
	               
	                function coeffToString(a) {
	                    var s, z,
	                        i = 1,
	                        j = a.length,
	                        r = a[0] + '';
	
	                    for ( ; i < j; ) {
	                        s = a[i++] + '';
	                        z = LOG_BASE - s.length;
	                        for ( ; z--; s = '0' + s );
	                        r += s;
	                    }
	
	                   
	                    for ( j = r.length; r.charCodeAt(--j) === 48; );
	                    return r.slice( 0, j + 1 || 1 );
	                }
	
	
	               
	                function compare( x, y ) {
	                    var a, b,
	                        xc = x.c,
	                        yc = y.c,
	                        i = x.s,
	                        j = y.s,
	                        k = x.e,
	                        l = y.e;
	
	                   
	                    if ( !i || !j ) return null;
	
	                    a = xc && !xc[0];
	                    b = yc && !yc[0];
	
	                   
	                    if ( a || b ) return a ? b ? 0 : -j : i;
	
	                   
	                    if ( i != j ) return i;
	
	                    a = i < 0;
	                    b = k == l;
	
	                   
	                    if ( !xc || !yc ) return b ? 0 : !xc ^ a ? 1 : -1;
	
	                   
	                    if ( !b ) return k > l ^ a ? 1 : -1;
	
	                    j = ( k = xc.length ) < ( l = yc.length ) ? k : l;
	
	                   
	                    for ( i = 0; i < j; i++ ) if ( xc[i] != yc[i] ) return xc[i] > yc[i] ^ a ? 1 : -1;
	
	                   
	                    return k == l ? 0 : k > l ^ a ? 1 : -1;
	                }
	
	
	                
	                function intValidatorNoErrors( n, min, max ) {
	                    return ( n = truncate(n) ) >= min && n <= max;
	                }
	
	
	                function isArray(obj) {
	                    return Object.prototype.toString.call(obj) == '[object Array]';
	                }
	
	
	                
	                function toBaseOut( str, baseIn, baseOut ) {
	                    var j,
	                        arr = [0],
	                        arrL,
	                        i = 0,
	                        len = str.length;
	
	                    for ( ; i < len; ) {
	                        for ( arrL = arr.length; arrL--; arr[arrL] *= baseIn );
	                        arr[ j = 0 ] += ALPHABET.indexOf( str.charAt( i++ ) );
	
	                        for ( ; j < arr.length; j++ ) {
	
	                            if ( arr[j] > baseOut - 1 ) {
	                                if ( arr[j + 1] == null ) arr[j + 1] = 0;
	                                arr[j + 1] += arr[j] / baseOut | 0;
	                                arr[j] %= baseOut;
	                            }
	                        }
	                    }
	
	                    return arr.reverse();
	                }
	
	
	                function toExponential( str, e ) {
	                    return ( str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str ) +
	                        ( e < 0 ? 'e' : 'e+' ) + e;
	                }
	
	
	                function toFixedPoint( str, e ) {
	                    var len, z;
	
	                   
	                    if ( e < 0 ) {
	
	                       
	                        for ( z = '0.'; ++e; z += '0' );
	                        str = z + str;
	
	                       
	                    } else {
	                        len = str.length;
	
	                       
	                        if ( ++e > len ) {
	                            for ( z = '0', e -= len; --e; z += '0' );
	                            str += z;
	                        } else if ( e < len ) {
	                            str = str.slice( 0, e ) + '.' + str.slice(e);
	                        }
	                    }
	
	                    return str;
	                }
	
	
	                function truncate(n) {
	                    n = parseFloat(n);
	                    return n < 0 ? mathceil(n) : mathfloor(n);
	                }
	
	
	               
	
	
	                BigNumber = constructorFactory();
	                BigNumber['default'] = BigNumber.BigNumber = BigNumber;
	
	
	               
	                if ( true ) {
	                    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return BigNumber; }).call(exports, __webpack_require__, exports, module),
	                    __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	                   
	                } else if ( typeof module != 'undefined' && module.exports ) {
	                    module.exports = BigNumber;
	
	                   
	                } else {
	                    if ( !globalObj ) globalObj = typeof self != 'undefined' ? self : Function('return this')();
	                    globalObj.BigNumber = BigNumber;
	                }
	            })(this);
	
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _TwoDimensionalBarcode = __webpack_require__(7);
	
	            var _TwoDimensionalBarcode2 = _interopRequireDefault(_TwoDimensionalBarcode);
	
	            var _index = __webpack_require__(2);
	
	            var _index2 = _interopRequireDefault(_index);
	
	            var _helper = __webpack_require__(3);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            var _QRCodeModel = __webpack_require__(54);
	
	            var _QRCodeModel2 = _interopRequireDefault(_QRCodeModel);
	
	            var _QRCodeModel3 = __webpack_require__(56);
	
	            var _QRCodeModel4 = _interopRequireDefault(_QRCodeModel3);
	
	            var _exceptions = __webpack_require__(1);
	
	            var _utils = __webpack_require__(0);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	            function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	            var QRCode = function (_TwoDimensionalBarcod) {
	                _inherits(QRCode, _TwoDimensionalBarcod);
	
	                function QRCode(originConfig) {
	                    _classCallCheck(this, QRCode);
	
	                    var _this = _possibleConstructorReturn(this, (QRCode.__proto__ || Object.getPrototypeOf(QRCode)).call(this, originConfig, _helper2.default.defaultConfig));
	
	                    var innerQRCode = void 0;
	                    if (_this.config.model == '2') {
	                        innerQRCode = new _QRCodeModel4.default(_this.config);
	                    } else {
	                        innerQRCode = new _QRCodeModel2.default(_this.config);
	                    }
	
	                    var matrix = innerQRCode.getMatrix();
	                    _this.adjustDesiredSize(matrix);
	                    _this.convertToShape(matrix);
	                    return _this;
	                }
	
	                _createClass(QRCode, [{
	                    key: 'validate',
	                    value: function validate() {
	                        var _config = this.config,
	                            version = _config.version,
	                            model = _config.model,
	                            charset = _config.charset,
	                            text = _config.text,
	                            charCode = _config.charCode,
	                            connectionNo = _config.connectionNo;
	                       
	
	                        if (!text && (!charCode || charCode.length === 0)) {
	                            throw new _exceptions.InvalidTextException(text);
	                        }
	                        if (model != '1' && model != '2') {
	                            throw new _exceptions.BadArgumentsException({ model: model });
	                        }
	
	                        if (charset != 'UTF-8' && charset != 'Shift_JIS') {
	                            throw new _exceptions.BadArgumentsException({ charset: charset });
	                        }
	
	                        if (model == '1' && (0, _utils.isNumberLike)(version) && (version < 1 || version > 14)) {
	                            throw new _exceptions.BadArgumentsException({ version: version }, 'Model 1 only support version 1 - 14.');
	                        }
	                        if (model == '2' && (0, _utils.isNumberLike)(version) && (version < 1 || version > 40)) {
	                            throw new _exceptions.BadArgumentsException({ version: version }, 'Model 2 only support version 1 - 40.');
	                        }
	
	                        if (connectionNo > 15 || connectionNo < 0) {
	                            throw new _exceptions.BadArgumentsException({ connectionNo: connectionNo }, 'ConnectionNo is in range 0 - 15.');
	                        }
	                    }
	                }]);
	
	                return QRCode;
	            }(_TwoDimensionalBarcode2.default);
	
	            exports.default = QRCode;
	
	
	            _index2.default.registerEncoder('QRCode', QRCode);
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _utils = __webpack_require__(0);
	
	            var _helper = __webpack_require__(3);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            var _QRCodeBase2 = __webpack_require__(14);
	
	            var _QRCodeBase3 = _interopRequireDefault(_QRCodeBase2);
	
	            var _Mode8BitByte = __webpack_require__(15);
	
	            var _Mode8BitByte2 = _interopRequireDefault(_Mode8BitByte);
	
	            var _ModeNumeric = __webpack_require__(16);
	
	            var _ModeNumeric2 = _interopRequireDefault(_ModeNumeric);
	
	            var _ModeAlphanumeric = __webpack_require__(17);
	
	            var _ModeAlphanumeric2 = _interopRequireDefault(_ModeAlphanumeric);
	
	            var _ModeKanji = __webpack_require__(18);
	
	            var _ModeKanji2 = _interopRequireDefault(_ModeKanji);
	
	            var _BitBuffer = __webpack_require__(19);
	
	            var _BitBuffer2 = _interopRequireDefault(_BitBuffer);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	            function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	            var QRCodeModel1 = function (_QRCodeBase) {
	                _inherits(QRCodeModel1, _QRCodeBase);
	
	                function QRCodeModel1() {
	                    _classCallCheck(this, QRCodeModel1);
	
	                    return _possibleConstructorReturn(this, (QRCodeModel1.__proto__ || Object.getPrototypeOf(QRCodeModel1)).apply(this, arguments));
	                }
	
	                _createClass(QRCodeModel1, [{
	                    key: 'encodeData',
	                    value: function encodeData(sets, connectionInfo) {
	                        var charCountIndicatorBitsNumber = this.charCountIndicatorBitsNumber,
	                            charCode = this.charCode;
	
	                        var buffer = new _BitBuffer2.default();
	                        buffer.put(0, 4);
	                        if (connectionInfo) {
	                            buffer.put(_helper2.default.MODE_INDICATOR.StructuredAppend, 4);
	                            buffer.put(connectionInfo.connectionNo, 4);
	                            buffer.put(connectionInfo.connectionCnt - 1, 4);
	                            buffer.put(_helper2.default.getParityData(charCode), 8);
	                        }
	
	                        sets.forEach(function (set) {
	                            if (!set.code) {
	                                return;
	                            }
	                            var data = void 0;
	                            switch (set.mode) {
	                                case 'Numeric':
	                                    data = new _ModeNumeric2.default(set.code);
	                                    break;
	                                case 'Alphanumeric':
	                                    data = new _ModeAlphanumeric2.default(set.code);
	                                    break;
	                                case '8BitByte':
	                                    data = new _Mode8BitByte2.default(set.code);
	                                    break;
	                                case 'Kanji':
	                                    data = new _ModeKanji2.default(set.code);
	                                    break;
	                            }
	
	                            buffer.put(data.getMode(), 4);
	                            buffer.put(data.getLength(), charCountIndicatorBitsNumber[data.mode]);
	                            data.write(buffer);
	                        });
	
	                        return buffer;
	                    }
	                }, {
	                    key: 'getFinalMessage',
	                    value: function getFinalMessage(blocks) {
	                        var data = [];
	
	                        var dataBlocks = blocks.map(function (block) {
	                            return block.data;
	                        });
	                        var ecBlocks = blocks.map(function (block) {
	                            return block.ec;
	                        });
	
	                        dataBlocks.forEach(function (db) {
	                            return data = data.concat(db);
	                        });
	                        ecBlocks.forEach(function (db) {
	                            return data = data.concat(db);
	                        });
	                        return data;
	                    }
	
	                   
	
	                }, {
	                    key: 'setModules',
	                    value: function setModules(data) {
	                        var modulesCount = this.modulesCount;
	
	                        this.modules = _helper2.default.createModules(modulesCount);
	                        this.addPositionDetectionPattern();
	
	                        this.addExtensionPattern();
	
	                        this.addTimingPattern();
	
	                        this.maskModules(data);
	                    }
	                }, {
	                    key: 'maskModules',
	                    value: function maskModules(data) {
	                        var modules = this.modules,
	                            errorCorrectionLevel = this.errorCorrectionLevel,
	                            model = this.model,
	                            mask = this.config.mask;
	
	                        if (mask === 'auto') {
	                            this.autoMask(data);
	                        } else {
	                            var maskFunc = _helper2.default.getMaskFunc(mask);
	                            this.maskPattern = mask;
	                            var newModules = _helper2.default.addFormatInformation(modules, mask, errorCorrectionLevel, model);
	                            this.modules = this.fillDataModules(newModules, data, maskFunc);
	                        }
	                    }
	                }, {
	                    key: 'autoMask',
	                    value: function autoMask(data) {
	                        var _this2 = this;
	
	                        var modules = this.modules,
	                            errorCorrectionLevel = this.errorCorrectionLevel,
	                            model = this.model;
	
	                        var result = void 0,
	                            score = void 0,
	                            pattern = void 0;
	
	                        _helper2.default.maskFuncs.forEach(function (fn, i) {
	                            var newModules = _helper2.default.addFormatInformation(modules, i, errorCorrectionLevel, model);
	                            var _mod = _this2.fillDataModules(newModules, data, fn);
	                            var _score = _helper2.default.getMaskScore(_mod);
	                           
	                            if (!score || _score < score) {
	                                result = _mod;
	                                score = _score;
	                                pattern = i;
	                            }
	                        });
	
	                        this.modules = result;
	                        this.maskPattern = pattern;
	                    }
	                }, {
	                    key: 'addExtensionPattern',
	                    value: function addExtensionPattern() {
	                        var modules = this.modules,
	                            version = this.version;
	
	                        var modulesCount = modules.length;
	                       
	                        modules[modulesCount - 1][modulesCount - 1] = 1;
	                        modules[modulesCount - 2][modulesCount - 1] = 0;
	                        modules[modulesCount - 1][modulesCount - 2] = 0;
	                        modules[modulesCount - 2][modulesCount - 2] = 0;
	
	                        var count = Math.floor(version / 2);
	                        if ((0, _utils.isEven)(version)) {
	                            for (var i = 0; i < count; i++) {
	                                this.addBaseExtension(13 + i * 8);
	                                this.addRightExtension(13 + i * 8);
	                            }
	                        } else {
	                            for (var _i = 0; _i < count; _i++) {
	                                this.addBaseExtension(17 + _i * 8);
	                                this.addRightExtension(17 + _i * 8);
	                            }
	                        }
	                    }
	                }, {
	                    key: 'addBaseExtension',
	                    value: function addBaseExtension(x) {
	                        var modules = this.modules;
	
	                        var modulesCount = modules.length;
	                        var lightRow = modulesCount - 2,
	                            darkRow = modulesCount - 1;
	                        modules[lightRow][x] = 0;
	                        modules[lightRow][x + 1] = 0;
	                        modules[lightRow][x + 2] = 0;
	                        modules[lightRow][x + 3] = 0;
	                        modules[darkRow][x] = 1;
	                        modules[darkRow][x + 1] = 1;
	                        modules[darkRow][x + 2] = 1;
	                        modules[darkRow][x + 3] = 1;
	                    }
	                }, {
	                    key: 'addRightExtension',
	                    value: function addRightExtension(x) {
	                        var modules = this.modules;
	
	                        var modulesCount = modules.length;
	                        var lightCol = modulesCount - 2,
	                            darkCol = modulesCount - 1;
	                        modules[x][lightCol] = 0;
	                        modules[x + 1][lightCol] = 0;
	                        modules[x + 2][lightCol] = 0;
	                        modules[x + 3][lightCol] = 0;
	                        modules[x][darkCol] = 1;
	                        modules[x + 1][darkCol] = 1;
	                        modules[x + 2][darkCol] = 1;
	                        modules[x + 3][darkCol] = 1;
	                    }
	                }, {
	                    key: 'fillDataModules',
	                    value: function fillDataModules(modules, data, maskFunc) {
	                        var modulesCount = modules.length;
	                        var x = void 0,
	                            y = void 0;
	                        x = y = modulesCount - 1;
	                        var xmax = 2;
	                        var bf = new _BitBuffer2.default(data);
	                        bf.next();
	                        bf.next();
	                        bf.next();
	                        bf.next();
	                        while (x >= 0) {
	                            if (x == modulesCount - 5) {
	                                xmax = 4;
	                            } else if (x == 8) {
	                                xmax = 2;
	                            } else if (x == 6) {
	                                x--;
	                                continue;
	                            }
	                            while (y >= 0) {
	                                if (modules[y][x] !== null) {
	                                    y--;
	                                    continue;
	                                } else {
	                                    for (var i = 0; i < xmax; i++) {
	                                        var dark = bf.next();
	
	                                        if (maskFunc(y, x - i)) {
	                                            dark = !dark;
	                                        }
	                                        modules[y][x - i] = +dark;
	                                    }
	                                }
	
	                                y--;
	                            }
	
	                            x -= xmax;
	                            y = modulesCount - 1;
	                        }
	
	                        return modules;
	                    }
	                }, {
	                    key: 'getMatrix',
	                    value: function getMatrix() {
	                        var charCode = this.charCode;
	
	                        var datas = this.analysisData(charCode);
	                        var buffer = this.encodeData(datas);
	                        var newBuffer = this.processConnection(buffer);
	                        this.padBuffer(newBuffer);
	                        var blocks = this.generateErrorCorrectionCode(newBuffer);
	                        var data = this.getFinalMessage(blocks);
	
	                        this.setModules(data);
	                        return this.modules;
	                    }
	                }]);
	
	                return QRCodeModel1;
	            }(_QRCodeBase3.default);
	
	            exports.default = QRCodeModel1;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	            exports.default = generateErrorCorrectionCode;
	            var EXP_TABLE = new Array(256);
	            for (var i = 0; i < 8; i++) {
	                EXP_TABLE[i] = 1 << i;
	            }
	            for (var _i = 8; _i < 256; _i++) {
	                EXP_TABLE[_i] = EXP_TABLE[_i - 4] ^ EXP_TABLE[_i - 5] ^ EXP_TABLE[_i - 6] ^ EXP_TABLE[_i - 8];
	            }
	            var LOG_TABLE = new Array(256);
	            for (var _i2 = 0; _i2 < 255; _i2 += 1) {
	                LOG_TABLE[EXP_TABLE[_i2]] = _i2;
	            }
	
	            var RS_COEFFICIENTS = [null, null, null, null, null, null, null,
	
	                [0, 87, 229, 146, 149, 238, 102, 21], null, null,
	
	                [0, 251, 67, 46, 61, 118, 70, 64, 94, 32, 45], null, null,
	
	                [0, 74, 152, 176, 100, 86, 100, 106, 104, 130, 218, 206, 140, 78], null,
	
	                [0, 8, 183, 61, 91, 202, 37, 51, 58, 58, 237, 140, 124, 5, 99, 105],
	
	                [0, 120, 104, 107, 109, 102, 161, 76, 3, 91, 191, 147, 169, 182, 194, 225, 120],
	
	                [0, 43, 139, 206, 78, 43, 239, 123, 206, 214, 147, 24, 99, 150, 39, 243, 163, 136],
	
	                [0, 215, 234, 158, 94, 184, 97, 118, 170, 79, 187, 152, 148, 252, 179, 5, 98, 96, 153], null,
	
	                [0, 17, 60, 79, 50, 61, 163, 26, 187, 202, 180, 221, 225, 83, 239, 156, 164, 212, 212, 188, 190], null,
	
	                [0, 210, 171, 247, 242, 93, 230, 14, 109, 221, 53, 200, 74, 8, 172, 98, 80, 219, 134, 160, 105, 165, 231], null,
	
	                [0, 229, 121, 135, 48, 211, 117, 251, 126, 159, 180, 169, 152, 192, 226, 228, 218, 111, 0, 117, 232, 87, 96, 227, 21], null,
	
	                [0, 173, 125, 158, 2, 103, 182, 118, 17, 145, 201, 111, 28, 165, 53, 161, 21, 245, 142, 13, 102, 48, 227, 153, 145, 218, 70], null,
	
	                [0, 168, 223, 200, 104, 224, 234, 108, 180, 110, 190, 195, 147, 205, 27, 232, 201, 21, 43, 245, 87, 42, 195, 212, 119, 242, 37, 9, 123], null,
	
	                [0, 41, 173, 145, 152, 216, 31, 179, 182, 50, 48, 110, 86, 239, 96, 222, 125, 42, 173, 226, 193, 224, 130, 156, 37, 251, 216, 238, 40, 192, 180], null,
	
	                [0, 10, 6, 106, 190, 249, 167, 4, 67, 209, 138, 138, 32, 242, 123, 89, 27, 120, 185, 80, 156, 38, 69, 171, 60, 28, 222, 80, 52, 254, 185, 220, 241], null,
	
	                [0, 111, 77, 146, 94, 26, 21, 108, 19, 105, 94, 113, 193, 86, 140, 163, 125, 58, 158, 229, 239, 218, 103, 56, 70, 114, 61, 183, 129, 167, 13, 98, 62, 129, 51], null,
	
	                [0, 200, 183, 98, 16, 172, 31, 246, 234, 60, 152, 115, 0, 167, 152, 113, 248, 238, 107, 18, 63, 218, 37, 87, 210, 105, 177, 120, 74, 121, 196, 117, 251, 113, 233, 30, 120], null, null, null,
	
	                [0, 59, 116, 79, 161, 252, 98, 128, 205, 128, 161, 247, 57, 163, 56, 235, 106, 53, 26, 187, 174, 226, 104, 170, 7, 175, 35, 181, 114, 88, 41, 47, 163, 125, 134, 72, 20, 232, 53, 35, 15], null,
	
	                [0, 250, 103, 221, 230, 25, 18, 137, 231, 0, 3, 58, 242, 221, 191, 110, 84, 230, 8, 188, 106, 96, 147, 15, 131, 139, 34, 101, 223, 39, 101, 213, 199, 237, 254, 201, 123, 171, 162, 194, 117, 50, 96], null,
	
	                [0, 190, 7, 61, 121, 71, 246, 69, 55, 168, 188, 89, 243, 191, 25, 72, 123, 9, 145, 14, 247, 1, 238, 44, 78, 143, 62, 224, 126, 118, 114, 68, 163, 52, 194, 217, 147, 204, 169, 37, 130, 113, 102, 73, 181], null,
	
	                [0, 112, 94, 88, 112, 253, 224, 202, 115, 187, 99, 89, 5, 54, 113, 129, 44, 58, 16, 135, 216, 169, 211, 36, 1, 4, 96, 60, 241, 73, 104, 234, 8, 249, 245, 119, 174, 52, 25, 157, 224, 43, 202, 223, 19, 82, 15], null,
	
	                [0, 228, 25, 196, 130, 211, 146, 60, 24, 251, 90, 39, 102, 240, 61, 178, 63, 46, 123, 115, 18, 221, 111, 135, 160, 182, 205, 107, 206, 95, 150, 120, 184, 91, 21, 247, 156, 140, 238, 191, 11, 94, 227, 84, 50, 163, 39, 34, 108], null,
	
	                [0, 232, 125, 157, 161, 164, 9, 118, 46, 209, 99, 203, 193, 35, 3, 209, 111, 195, 242, 203, 225, 46, 13, 32, 160, 126, 209, 130, 160, 242, 215, 242, 75, 77, 42, 189, 32, 113, 65, 124, 69, 228, 114, 235, 175, 124, 170, 215, 232, 133, 205], null,
	
	                [0, 116, 50, 86, 186, 50, 220, 251, 89, 192, 46, 86, 127, 124, 19, 184, 233, 151, 215, 22, 14, 59, 145, 37, 242, 203, 134, 254, 89, 190, 94, 59, 65, 124, 113, 100, 233, 235, 121, 22, 76, 86, 97, 39, 242, 200, 220, 101, 33, 239, 254, 116, 51], null,
	
	                [0, 183, 26, 201, 87, 210, 221, 113, 21, 46, 65, 45, 50, 238, 184, 249, 225, 102, 58, 209, 218, 109, 165, 26, 95, 184, 192, 52, 245, 35, 254, 238, 175, 172, 79, 123, 25, 122, 43, 120, 108, 215, 80, 128, 201, 235, 8, 153, 59, 101, 31, 198, 76, 31, 156], null,
	
	                [0, 106, 120, 107, 157, 164, 216, 112, 116, 2, 91, 248, 163, 36, 201, 202, 229, 6, 144, 254, 155, 135, 208, 170, 209, 12, 139, 127, 142, 182, 249, 177, 174, 190, 28, 10, 85, 239, 184, 101, 124, 152, 206, 96, 23, 163, 61, 27, 196, 247, 151, 154, 202, 207, 20, 61, 10], null,
	
	                [0, 82, 116, 26, 247, 66, 27, 62, 107, 252, 182, 200, 185, 235, 55, 251, 242, 210, 144, 154, 237, 176, 141, 192, 248, 152, 249, 206, 85, 253, 142, 65, 165, 125, 23, 24, 30, 122, 240, 214, 6, 129, 218, 29, 145, 127, 134, 206, 245, 117, 29, 41, 63, 159, 142, 233, 125, 148, 123], null,
	
	                [0, 107, 140, 26, 12, 9, 141, 243, 197, 226, 197, 219, 45, 211, 101, 219, 120, 28, 181, 127, 6, 100, 247, 2, 205, 198, 57, 115, 219, 101, 109, 160, 82, 37, 38, 238, 49, 160, 209, 121, 86, 11, 124, 30, 181, 84, 25, 194, 87, 65, 102, 190, 220, 70, 27, 209, 16, 89, 7, 33, 240], null,
	
	                [0, 65, 202, 113, 98, 71, 223, 248, 118, 214, 94, 1, 122, 37, 23, 2, 228, 58, 121, 7, 105, 135, 78, 243, 118, 70, 76, 223, 89, 72, 50, 70, 111, 194, 17, 212, 126, 181, 35, 221, 117, 235, 11, 229, 149, 147, 123, 213, 40, 115, 6, 200, 100, 26, 246, 182, 218, 127, 215, 36, 186, 110, 106], null,
	
	                [0, 45, 51, 175, 9, 7, 158, 159, 49, 68, 119, 92, 123, 177, 204, 187, 254, 200, 78, 141, 149, 119, 26, 127, 53, 160, 93, 199, 212, 29, 24, 145, 156, 208, 150, 218, 209, 4, 216, 91, 47, 184, 146, 47, 140, 195, 195, 125, 242, 238, 63, 99, 108, 140, 230, 242, 31, 204, 11, 178, 243, 217, 156, 213, 231], null,
	
	                [0, 5, 118, 222, 180, 136, 136, 162, 51, 46, 117, 13, 215, 81, 17, 139, 247, 197, 171, 95, 173, 65, 137, 178, 68, 111, 95, 101, 41, 72, 214, 169, 197, 95, 7, 44, 154, 77, 111, 236, 40, 121, 143, 63, 87, 80, 253, 240, 126, 217, 77, 34, 232, 106, 50, 168, 82, 76, 146, 67, 106, 171, 25, 132, 93, 45, 105], null,
	
	                [0, 247, 159, 223, 33, 224, 93, 77, 70, 90, 160, 32, 254, 43, 150, 84, 101, 190, 205, 133, 52, 60, 202, 165, 220, 203, 151, 93, 84, 15, 84, 253, 173, 160, 89, 227, 52, 199, 97, 95, 231, 52, 177, 41, 125, 137, 241, 166, 225, 118, 2, 54, 32, 82, 215, 175, 198, 43, 238, 235, 27, 101, 184, 127, 3, 5, 8, 163, 238], null];
	
	            function generateErrorCorrectionCode(codewords, ecCount, dataCount) {
	                var kd = [];
	                var coefficients = RS_COEFFICIENTS[ecCount];
	
	                var copy = codewords.slice(0);
	                for (var _i3 = 0; _i3 < dataCount; _i3++) {
	                    if (copy[0] != 0) {
	                        var exp = LOG_TABLE[copy[0]];
	
	                        for (var _i4 = 0; _i4 <= coefficients.length - 1; _i4++) {
	                            var kk = coefficients[_i4] + exp;
	                            while (kk >= 255) {
	                                kk -= 255;
	                            }kd[_i4] = EXP_TABLE[kk];
	                        }
	
	                        for (var _i5 = 0; _i5 <= coefficients.length - 1; _i5++) {
	                            copy[_i5] = copy[_i5] ^ kd[_i5];
	                        }
	                    }
	
	                    for (var _i6 = 1; _i6 < copy.length; _i6++) {
	                        copy[_i6 - 1] = copy[_i6];
	                    }
	                    copy[copy.length - 1] = 0;
	                }
	
	                return copy.slice(0, ecCount);
	            }
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });
	
	            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	            var _utils = __webpack_require__(0);
	
	            var _helper = __webpack_require__(3);
	
	            var _helper2 = _interopRequireDefault(_helper);
	
	            var _BCH = __webpack_require__(13);
	
	            var _BCH2 = _interopRequireDefault(_BCH);
	
	            var _QRCodeBase2 = __webpack_require__(14);
	
	            var _QRCodeBase3 = _interopRequireDefault(_QRCodeBase2);
	
	            var _Mode8BitByte = __webpack_require__(15);
	
	            var _Mode8BitByte2 = _interopRequireDefault(_Mode8BitByte);
	
	            var _ModeNumeric = __webpack_require__(16);
	
	            var _ModeNumeric2 = _interopRequireDefault(_ModeNumeric);
	
	            var _ModeAlphanumeric = __webpack_require__(17);
	
	            var _ModeAlphanumeric2 = _interopRequireDefault(_ModeAlphanumeric);
	
	            var _ModeKanji = __webpack_require__(18);
	
	            var _ModeKanji2 = _interopRequireDefault(_ModeKanji);
	
	            var _BitBuffer = __webpack_require__(19);
	
	            var _BitBuffer2 = _interopRequireDefault(_BitBuffer);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	            function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	            var QRCodeModel2 = function (_QRCodeBase) {
	                _inherits(QRCodeModel2, _QRCodeBase);
	
	                function QRCodeModel2() {
	                    _classCallCheck(this, QRCodeModel2);
	
	                    return _possibleConstructorReturn(this, (QRCodeModel2.__proto__ || Object.getPrototypeOf(QRCodeModel2)).apply(this, arguments));
	                }
	
	                _createClass(QRCodeModel2, [{
	                    key: 'encodeData',
	                    value: function encodeData(sets, connectionInfo) {
	                        var charCountIndicatorBitsNumber = this.charCountIndicatorBitsNumber,
	                            charCode = this.charCode;
	
	                        var buffer = new _BitBuffer2.default();
	                        if (connectionInfo) {
	                            buffer.put(_helper2.default.MODE_INDICATOR.StructuredAppend, 4);
	                            buffer.put(connectionInfo.connectionNo, 4);
	                            buffer.put(connectionInfo.connectionCnt - 1, 4);
	                            buffer.put(_helper2.default.getParityData(charCode), 8);
	                        }
	
	                        sets.forEach(function (set) {
	                            if (!set.code) {
	                                return;
	                            }
	                            var data = void 0;
	                            switch (set.mode) {
	                                case 'Numeric':
	                                    data = new _ModeNumeric2.default(set.code);
	                                    break;
	                                case 'Alphanumeric':
	                                    data = new _ModeAlphanumeric2.default(set.code);
	                                    break;
	                                case '8BitByte':
	                                    data = new _Mode8BitByte2.default(set.code);
	                                    break;
	                                case 'Kanji':
	                                    data = new _ModeKanji2.default(set.code);
	                                    break;
	                            }
	
	                            buffer.put(data.getMode(), 4);
	                            buffer.put(data.getLength(), charCountIndicatorBitsNumber[data.mode]);
	                            data.write(buffer);
	                        });
	
	                        return buffer;
	                    }
	                }, {
	                    key: 'getFinalMessage',
	                    value: function getFinalMessage(blocks) {
	                        var data = [];
	
	                        var dataBlocks = blocks.map(function (block) {
	                            return block.data;
	                        });
	                        var ecBlocks = blocks.map(function (block) {
	                            return block.ec;
	                        });
	
	                        var dcMaxNum = (0, _utils.getMaxValue)(dataBlocks);
	                        var ecMaxNum = (0, _utils.getMaxValue)(ecBlocks);
	
	                        var _loop = function _loop(i) {
	                            dataBlocks.forEach(function (dbk) {
	                                if ((0, _utils.isDefined)(dbk[i])) {
	                                    data.push(dbk[i]);
	                                }
	                            });
	                        };
	
	                        for (var i = 0; i < dcMaxNum; i++) {
	                            _loop(i);
	                        }
	
	                        var _loop2 = function _loop2(i) {
	                            ecBlocks.forEach(function (ebk) {
	                                if ((0, _utils.isDefined)(ebk[i])) {
	                                    data.push(ebk[i]);
	                                }
	                            });
	                        };
	
	                        for (var i = 0; i < ecMaxNum; i++) {
	                            _loop2(i);
	                        }
	
	                        return data;
	                    }
	
	                   
	
	                }, {
	                    key: 'setModules',
	                    value: function setModules(data) {
	                        var modulesCount = this.modulesCount,
	                            version = this.version;
	
	                        this.modules = _helper2.default.createModules(modulesCount);
	                        this.addPositionDetectionPattern();
	
	                        this.addAlignmentPattern();
	
	                        this.addTimingPattern();
	                        if (version > 6) {
	                            this.addVersionInformation();
	                        }
	                        this.maskModules(data);
	                    }
	                }, {
	                    key: 'maskModules',
	                    value: function maskModules(data) {
	                        var modules = this.modules,
	                            errorCorrectionLevel = this.errorCorrectionLevel,
	                            model = this.model,
	                            mask = this.config.mask;
	
	                        if (mask === 'auto') {
	                            this.autoMask(data);
	                        } else {
	                            var maskFunc = _helper2.default.getMaskFunc(mask);
	                            this.maskPattern = mask;
	                            var newModules = _helper2.default.addFormatInformation(modules, mask, errorCorrectionLevel, model);
	                            this.modules = this.fillDataModules(newModules, data, maskFunc);
	                        }
	                    }
	                }, {
	                    key: 'autoMask',
	                    value: function autoMask(data) {
	                        var _this2 = this;
	
	                        var modules = this.modules,
	                            errorCorrectionLevel = this.errorCorrectionLevel,
	                            model = this.model;
	
	                        var result = void 0,
	                            score = void 0,
	                            pattern = void 0;
	
	                        _helper2.default.maskFuncs.forEach(function (fn, i) {
	                            var newModules = _helper2.default.addFormatInformation(modules, i, errorCorrectionLevel, model);
	                            var _mod = _this2.fillDataModules(newModules, data, fn);
	                            var _score = _helper2.default.getMaskScore(_mod);
	                           
	                            if (!score || _score < score) {
	                                result = _mod;
	                                score = _score;
	                                pattern = i;
	                            }
	                        });
	
	                        this.modules = result;
	                        this.maskPattern = pattern;
	                    }
	                }, {
	                    key: 'addAlignmentPattern',
	                    value: function addAlignmentPattern() {
	                        var _this3 = this;
	
	                        var modules = this.modules,
	                            version = this.version;
	
	                        var pos = _helper2.default.getAlignmentPattersPos(version);
	                        pos.forEach(function (row) {
	                            pos.forEach(function (col) {
	                                if (modules[row][col] === null) {
	                                    _this3.addPattern(col - 2, row - 2, 5);
	                                }
	                            });
	                        });
	                    }
	                }, {
	                    key: 'addVersionInformation',
	                    value: function addVersionInformation() {
	                        var modulesCount = this.modulesCount,
	                            modules = this.modules,
	                            version = this.version;
	
	                        var data = _BCH2.default.getBCH18(version);
	
	                        for (var i = 0; i < 18; i++) {
	                            var dark = data >> i & 1;
	                            modules[Math.floor(i / 3)][i % 3 + modulesCount - 8 - 3] = dark;
	                            modules[i % 3 + modulesCount - 8 - 3][Math.floor(i / 3)] = dark;
	                        }
	                    }
	                }, {
	                    key: 'fillDataModules',
	                    value: function fillDataModules(modules, data, maskFunc) {
	
	                        var modulesCount = modules.length;
	                        var inc = -1;
	                        var row = modulesCount - 1;
	                        var bitIndex = 7;
	                        var byteIndex = 0;
	
	                        for (var col = modulesCount - 1; col > 0; col -= 2) {
	
	                            if (col == 6) col -= 1;
	
	                            while (true) {
	                               
	                                for (var c = 0; c < 2; c += 1) {
	                                    if (modules[row][col - c] == null) {
	
	                                        var dark = false;
	
	                                        if (byteIndex < data.length) {
	                                            dark = (data[byteIndex] >>> bitIndex & 1) == 1;
	                                        }
	
	                                        if (maskFunc(row, col - c)) {
	                                            dark = !dark;
	                                        }
	
	                                        modules[row][col - c] = +dark;
	
	                                        bitIndex -= 1;
	
	                                        if (bitIndex == -1) {
	                                            byteIndex += 1;
	                                            bitIndex = 7;
	                                        }
	                                    }
	                                }
	
	                                row += inc;
	
	                                if (row < 0 || modulesCount <= row) {
	                                    row -= inc;
	                                    inc = -inc;
	                                    break;
	                                }
	                            }
	                        }
	
	                        return modules;
	                    }
	                }, {
	                    key: 'getMatrix',
	                    value: function getMatrix() {
	                        var charCode = this.charCode;
	
	                        var datas = this.analysisData(charCode);
	                        var buffer = this.encodeData(datas);
	                        var newBuffer = this.processConnection(buffer);
	
	                        this.padBuffer(newBuffer);
	                        var blocks = this.generateErrorCorrectionCode(newBuffer);
	                        var data = this.getFinalMessage(blocks);
	
	                        this.setModules(data);
	                        return this.modules;
	                    }
	                }]);
	
	                return QRCodeModel2;
	            }(_QRCodeBase3.default);
	
	            exports.default = QRCodeModel2;
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            var _index = __webpack_require__(2);
	
	            var _index2 = _interopRequireDefault(_index);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function convertUnit(num) {
	                var divDom = document.createElement('div');
	                divDom.style.visibility = 'hidden';
	                divDom.style.absolute = 'hidden';
	                divDom.style.padding = '0';
	                divDom.style.border = '0';
	                divDom.style.width = num;
	                document.body.appendChild(divDom);
	                var info = divDom.getBoundingClientRect();
	                document.body.removeChild(divDom);
	                return info.width;
	            }
	
	            _index2.default.registerPlugin('convertUnit', convertUnit);
	
	             }),
	        
	         (function(module, exports, __webpack_require__) {
	
	            "use strict";
	
	
	            var _index = __webpack_require__(2);
	
	            var _index2 = _interopRequireDefault(_index);
	
	            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	            function measureText(text, style) {
	                var spanDom = document.createElement('span');
	                spanDom.style.visibility = 'hidden';
	                spanDom.style.absolute = 'hidden';
	                spanDom.style.lineHeight = '1';
	                spanDom.textContent = text;
	                Object.keys(style).forEach(function (item) {
	                    spanDom.style[item] = style[item];
	                });
	                document.body.appendChild(spanDom);
	                var info = spanDom.getBoundingClientRect();
	                document.body.removeChild(spanDom);
	                return info.height;
	            }
	
	            _index2.default.registerPlugin('measureText', measureText);
	
	             })
	         ])["default"];
	});


/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.barcode.12.0.0.js.map
}));