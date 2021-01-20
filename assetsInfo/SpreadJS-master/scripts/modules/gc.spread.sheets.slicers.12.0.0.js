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
var GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["Slicers"] =
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
	
	    var tableSlicer = __webpack_require__(1);
	    __webpack_require__(8);
	    tableSlicer.SR = {};
	    tableSlicer.SR['en'] = __webpack_require__(9);
	    
	    module.exports = tableSlicer;
	
	}());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Sheets = __webpack_require__(2);
	    var Common = __webpack_require__(3);
	    var Slicers = __webpack_require__(4);
	    var FloatingObjects = __webpack_require__(5);
	    var Tables = __webpack_require__(6);
	    var ConditionalFormatting = __webpack_require__(7);
	    var hasOwnProperty = Common._hasOwnProperty;
	    var SheetsSlicers = {};
	    var sR = function () {
	        return Common._getResource(SheetsSlicers.SR)();
	    };
	    var arrayHelper = Common._ArrayHelper,
	        $ = Sheets.GC$,
	        StyleHelper = Sheets._StyleHelper,
	        Commands = Sheets.Commands,
	        createElement = Sheets._util._createElement,
	        defProperty = Sheets._util._defProperty,
	        isDefined = Sheets._util._isDefined,
	        getLength = arrayHelper._getLength,
	        adjustFontWithFallback = Sheets._util._adjustFontWithFallback,
	        $_isArray = $.isArray,
	        $_extend = $.extend;
	
	    var DOCUMENT = document;
	    var keyword_undefined = void 0, keyword_null = null, DEFAULT_FONT = 'normal 11pt calibri';
	    var parseFloatFn = parseFloat;
	
	
	   
	    var NAME = 'name',
	        STYLE = 'style',
	        UPPERSTYLE = 'Style',
	        LIGHT = 'light',
	        DARK = 'dark',
	        WHITE = 'white',
	        BLACK = 'black',
	        SOLID = 'solid',
	        COLOR = 'color',
	        UPPERCOLOR = 'Color',
	        BACKGROUND_COLOR = 'background-color',
	        WIDTH = 'width',
	        UPPERWIDTH = 'Width',
	        HEIGHT = 'height',
	        FONT = 'font',
	        SET_BORDERS = 'setBorders',
	        BACK_COLOR = 'back' + UPPERCOLOR,
	        FORE_COLOR = 'fore' + UPPERCOLOR,
	        BORDER = 'border',
	        BORDER_WIDTH = BORDER + 'Width',
	        BORDER_STYLE = BORDER + UPPERSTYLE,
	        BORDER_COLOR = BORDER + UPPERCOLOR,
	        BORDER_LEFT = BORDER + 'Left',
	        BORDER_TOP = BORDER + 'Top',
	        BORDER_RIGHT = BORDER + 'Right',
	        BORDER_BOTTOM = BORDER + 'Bottom',
	        TEXT_DECORATION = 'textDecoration',
	        WITH_DATA_STYLE = 'WithData' + UPPERSTYLE,
	        WITH_NO_DATA_STYLE = 'WithNoData' + UPPERSTYLE,
	        ELECTED_ITEM = 'electedItem',
	        HOVERED = 'hovered',
	        WHOLE_SLICER_STYLE = 'wholeSlicer' + UPPERSTYLE,
	        HEADER_STYLE = 'header' + UPPERSTYLE,
	        SELECTED_ITEM_WITH_DATA_STYLE = 's' + ELECTED_ITEM + WITH_DATA_STYLE,
	        SELECTED_ITEM_WITH_NODATA_STYLE = 's' + ELECTED_ITEM + WITH_NO_DATA_STYLE,
	        UNSELECTED_ITEM_WITH_DATA_STYLE = 'unS' + ELECTED_ITEM + WITH_DATA_STYLE,
	        UNSELECTED_ITEM_WITH_NODATA_STYLE = 'unS' + ELECTED_ITEM + WITH_NO_DATA_STYLE,
	        HOVERED_SELECTED_ITEM_WITH_DATA_STYLE = HOVERED + 'S' + ELECTED_ITEM + WITH_DATA_STYLE,
	        HOVERED_SELECTED_ITEM_WITH_NODATA_STYLE = HOVERED + 'S' + ELECTED_ITEM + WITH_NO_DATA_STYLE,
	        HOVERED_UNSELECTED_ITEM_WITH_DATA_STYLE = HOVERED + 'UnS' + ELECTED_ITEM + WITH_DATA_STYLE,
	        HOVERED_UNSELECTED_ITEM_WITH_NODATA_STYLE = HOVERED + 'UnS' + ELECTED_ITEM + WITH_NO_DATA_STYLE,
	        UNDOFILTER = 'undoFilter',
	        UNDOADD = 'undoAdd',
	        UNDOREMOVE = 'undoRemove',
	        UNDO_UPDATE_TABLE_SLICER = "undoUpdateTableSlicer";
	
	
	    var DIV = 'div',
	        PX = 'px',
	        DEFAULT = 'default',
	        CURSOR = 'cursor',
	        POSITION = 'position',
	        ABSOLUTE = 'absolute',
	        PADDING = 'padding',
	        TOP = 'top',
	        MARGIN_TOP = 'margin-' + TOP,
	        LEFT = 'left',
	        RIGHT = 'right',
	        TEXT_ALIGN = 'text-align',
	        OVER_FLOW = 'overflow',
	        HIDDEN = 'hidden',
	        AUTO = 'auto',
	        TEXT_OVERFLOW = 'text-overflow',
	        ELLIPSIS = 'ellipsis',
	        WHITE_SPACE = 'white-space',
	        NOWRAP = 'nowrap',
	        UN_SELECTABLE = 'unselectable',
	        ON = 'on',
	        FONT_WEIGHT = 'font-weight',
	        FONT_SIZE = 'font-size',
	        BORDER_RADIUS = 'border-radius',
	        BOX_SIZING = 'box-sizing',
	        CONTENT_BOX = 'content-box',
	        BUTTON = 'button',
	        CLEAR_FILTER_ICON = '\u2717',
	        MARK = 'mark',
	        ITEM_VALUE = 'itemValue',
	        ACCENT = 'Accent ',
	        SLICER_STYLE = 'Slicer' + UPPERSTYLE,
	        COLOR1 = '#999999',
	        COLOR2 = '#828282',
	        COLOR3 = '#CCCCCC';
	
	   
	    var prefix = 'gc-slicer-',
	        CONTAINER = 'container',
	        CONTAINER_NAME = prefix + CONTAINER,
	        HEADER = 'header',
	        HEADER_NAME = prefix + HEADER,
	        HEADER_BORDERDIV_NAME = prefix + 'header-borderDiv',
	        CAPTION_NAME = prefix + 'caption',
	        CLEARFILTER = 'clearfilter',
	        CLEARFILTER_NAME = prefix + CLEARFILTER,
	        BODY = 'body',
	        BODY_NAME = prefix + BODY,
	        TABLE_NAME = prefix + 'table',
	        TR_NAME = prefix + 'tr',
	        TD1_NAME = prefix + 'td1',
	        TD2_NAME = prefix + 'td2',
	        ITEMSCONTAINER = 'itemscontainer',
	        ITEMSCONTAINER_NAME = prefix + ITEMSCONTAINER,
	        ITEM = 'item',
	        ITEM_NAME = prefix + ITEM,
	        NO_USER_SELECT = 'gc-no-user-select';
	   
	
	   
	    var SlicerStyleInfo = (function () {
	        var properties = [BACK_COLOR, FORE_COLOR, FONT, BORDER_LEFT, BORDER_TOP, BORDER_RIGHT, BORDER_BOTTOM, TEXT_DECORATION];
	
	       
	        
	        function SlicerStyleInfo(backColor, foreColor, font, borderLeft, borderTop, borderRight, borderBottom, textDecoration) {
	            for (var i = 0, len = getLength(properties); i < len; i++) {
	                this[properties[i]](arguments[i]);
	            }
	        }
	
	        var proto = {
	            constructor: SlicerStyleInfo,
	           
	            
	            setBorders: function (value) {
	                var self = this;
	                self[BORDER_LEFT](value)[BORDER_TOP](value)[BORDER_RIGHT](value)[BORDER_BOTTOM](value);
	            },
	            fromJSON: function (jsonData) {
	                if (!jsonData || $.isEmptyObject(jsonData)) {
	                    return;
	                }
	                var self = this;
	                properties.forEach(function (p) {
	                    var t = jsonData[p];
	                    if (!isDefined(t)) {
	                        return;
	                    }
	                    if (p.indexOf(BORDER) >= 0) {
	                       
	                        var border = createBorder();
	                        border.fromJSON(t);
	                        self[p](border, false);
	                    } else {
	                        self[p](t, false);
	                    }
	                });
	            },
	            toJSON: function () {
	                var self = this;
	                var jsonData = {};
	                properties.forEach(function (p) {
	                    var t = self[p]();
	                    if (!self[p].isDefault(t)) {
	                        jsonData[p] = (t && t.toJSON) ? t.toJSON() : t;
	                    }
	                });
	                return jsonData;
	            }
	        };
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	        for (var j = 0, length = getLength(properties); j < length; j++) {
	            proto[properties[j]] = defProperty(properties[j]);
	        }
	        SlicerStyleInfo.prototype = proto;
	
	        return SlicerStyleInfo;
	    })();
	
	    function createStyleInfo(styleName) {
	        var styleInfo, n;
	        if (!styleName || getLength(styleName) === 0) {
	            styleInfo = new SlicerStyleInfo();
	        } else if (styleName.indexOf(LIGHT) === 0) {
	            n = parseInt(styleName.replace(LIGHT, ''));
	            styleInfo = SlicerStyles[LIGHT + n]() ;
	
	        } else if (styleName.indexOf(DARK) === 0) {
	            n = parseInt(styleName.replace(DARK, ''));
	            styleInfo = SlicerStyles[DARK + n]();
	        } else if (SlicerStyles[styleName]) {
	            styleInfo = SlicerStyles[styleName]();
	        }
	        return styleInfo;
	    }
	
	    var SlicerBorder = (function () {
	        var properties = [BORDER_WIDTH, BORDER_STYLE, BORDER_COLOR],
	            len = getLength(properties);
	
	       
	        
	        function SlicerBorder(borderWidth, borderStyle, borderColor) {
	            for (var i = 0; i < len; i++) {
	                this[properties[i]](arguments[i]);
	            }
	        }
	
	       
	        
	       
	        
	       
	        
	        var slicerBorderDefProperty = function (propertyName, defaultValue, callback) {
	            return defProperty(propertyName, defaultValue, callback, function (value) {
	                var type = typeof value;
	                return propertyName === BORDER_WIDTH ? type === 'number' && value >= 0 : type === 'string';
	            });
	        };
	        var proto = {
	            constructor: SlicerBorder,
	            fromJSON: function (jsonData) {
	                if (!jsonData || $.isEmptyObject(jsonData)) {
	                    return;
	                }
	                for (var i = 0; i < len; i++) {
	                    var pName = properties[i];
	                    if (isDefined(jsonData[pName])) {
	                        this[pName](jsonData[pName], false);
	                    }
	                }
	            },
	            toJSON: function () {
	                var dicData = {};
	                for (var i = 0; i < len; i++) {
	                    dicData[properties[i]] = this[properties[i]]();
	                }
	
	                var jsonData = {};
	                for (var item in dicData) {
	                    if (dicData[item] !== keyword_undefined && dicData[item] !== keyword_null) {
	                        jsonData[item] = dicData[item];
	                    }
	                }
	                return jsonData;
	            }
	        };
	        for (var j = 0; j < len; j++) {
	            proto[properties[j]] = slicerBorderDefProperty(properties[j], keyword_undefined, keyword_undefined);
	        }
	        SlicerBorder.prototype = proto;
	        return SlicerBorder;
	    })();
	
	    function createBorder(borderWidth, borderStyle, borderColor) {
	        return new SlicerBorder(borderWidth, borderStyle, borderColor);
	    }
	
	    function createDefaultStyleInfo() {
	        var border = new SlicerBorder(0, '', '');
	        var styleInfo = new SlicerStyleInfo(WHITE, BLACK, DEFAULT_FONT);
	        styleInfo.setBorders(border);
	        return styleInfo;
	    }
	
	    function isBuildinStyle(styleName) {
	        var index = 0, lightStyleLength = 17, darkStyleLength = 16;
	        if (styleName.indexOf(SLICER_STYLE + 'Light') > -1 && getLength(styleName) === lightStyleLength) {  
	            index = parseInt(styleName[lightStyleLength - 1]);
	        }
	        if (styleName.indexOf(SLICER_STYLE + 'Dark') > -1 && getLength(styleName) === darkStyleLength) {  
	            index = parseInt(styleName[darkStyleLength - 1]);
	        }
	        return index >= 1 && index <= 6;
	    }
	
	    var SlicerStyle = (function () {
	        function defSlicerStyleProperty(propertyName, defaultValue, callback, valueCheck) {
	            return defProperty(propertyName, defaultValue, callback, valueCheck);
	        }
	
	       
	        
	        function SlicerStyle() {
	            var self = this;
	            self[NAME]('');
	            self[WHOLE_SLICER_STYLE](createDefaultStyleInfo(), false);
	        }
	
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	        var properties = [
	            NAME,
	            WHOLE_SLICER_STYLE,
	            HEADER_STYLE,
	            SELECTED_ITEM_WITH_DATA_STYLE,
	            SELECTED_ITEM_WITH_NODATA_STYLE,
	            UNSELECTED_ITEM_WITH_DATA_STYLE,
	            UNSELECTED_ITEM_WITH_NODATA_STYLE,
	            HOVERED_SELECTED_ITEM_WITH_DATA_STYLE,
	            HOVERED_SELECTED_ITEM_WITH_NODATA_STYLE,
	            HOVERED_UNSELECTED_ITEM_WITH_DATA_STYLE,
	            HOVERED_UNSELECTED_ITEM_WITH_NODATA_STYLE
	        ];
	        var proto = {
	            constructor: SlicerStyle,
	            name: defSlicerStyleProperty(NAME, ''),
	            fromJSON: function (jsonData) {
	                if (!jsonData || $.isEmptyObject(jsonData)) {
	                    return;
	                }
	                var self = this, jsonData_name = jsonData.name;
	                if (isDefined(jsonData_name)) {
	                    self.name(jsonData_name, false);
	                    if (isBuildinStyle(jsonData_name)) {
	                        var functionName = jsonData_name.toLocaleLowerCase().replace('slicerstyle', '').replace(' ', '');
	                        var slicerStyle = createStyleInfo(functionName);
	                        properties.forEach(function (p) {
	                            self[p](slicerStyle[p](), false);
	                        });
	                        return;
	                    }
	                }
	                properties.forEach(function (p) {
	                    var jsonData_p = jsonData[p];
	                    if (p !== NAME && isDefined(jsonData_p)) {
	                        var styleInfo = createStyleInfo();
	                        styleInfo.fromJSON(jsonData_p);
	                        self[p](styleInfo, false);
	                    }
	                });
	            },
	            toJSON: function () {
	                var self = this,
	                    dicData;
	                if (isBuildinStyle(self.name())) {
	                    dicData = {
	                        name: self.name()
	                    };
	                } else {
	                    dicData = self.toJSONInternal();
	                }
	                var jsonData = {};
	                for (var item in dicData) {
	                    if (dicData[item] !== keyword_null && dicData[item] !== keyword_undefined && !Sheets.GC$.isEmptyObject(dicData[item])) {
	                        jsonData[item] = dicData[item];
	                    }
	                }
	                return jsonData;
	            },
	            toJSONInternal: function () {
	                var self = this, jsonData = {}, TO_JSON = 'toJSON';
	                jsonData[NAME] = self.name();
	                for (var i = 1, len = getLength(properties); i < len; i++) {
	                    var pName = properties[i];
	                    jsonData[pName] = self[pName]() ? self[pName]()[TO_JSON]() : keyword_null;
	                }
	                return jsonData;
	            }
	        };
	        for (var j = 1, length = getLength(properties); j < length; j++) {    
	            proto[properties[j]] = defSlicerStyleProperty(properties[j]);
	        }
	        SlicerStyle.prototype = proto;
	        return SlicerStyle;
	    })();
	
	    function createStyle() {
	        return new SlicerStyle();
	    }
	
	    var createBuiltinStyle = function (name, styleIndex,
	                                       wholeStyleFont, wholeStyleBackColor, wholeStyleBorder,
	                                       headerStyleBorder, headerStyleBottomBorder,
	                                       selectedWithDataStyleForeColor, selectedWithDataStyleBackColor, selectedWithDataStyleBorder,
	                                       selectedWithNoDataStyleForeColor, selectedWithNoDataStyleBackColor, selectedWithNoDataStyleBorder,
	                                       unselectedWithDataStyleForeColor, unselectedWithDataStyleBackColor, unselectedWithDataStyleBorder,
	                                       unselectedWithNoDataStyleForeColor, unselectedWithNoDataStyleBackColor, unselectedWithNoDataStyleBorder,
	                                       hoveredStyleForeColor, hoveredStyleBackColor, hoveredStyleBorder) {
	        var style = createStyle();
	        var styleName = SLICER_STYLE + name + styleIndex;
	        style[NAME](styleName);
	       
	        var wholeStyle = createStyleInfo();
	        wholeStyle[FONT](wholeStyleFont)[BACK_COLOR](wholeStyleBackColor)[SET_BORDERS](wholeStyleBorder);
	        style[WHOLE_SLICER_STYLE](wholeStyle);
	       
	        var headerStyle = createStyleInfo();
	        headerStyle[BORDER_LEFT](headerStyleBorder)[BORDER_TOP](headerStyleBorder)[BORDER_RIGHT](headerStyleBorder)[BORDER_BOTTOM](headerStyleBottomBorder);
	        style[HEADER_STYLE](headerStyle);
	       
	        style[SELECTED_ITEM_WITH_DATA_STYLE](createStyleInfoForItem(selectedWithDataStyleForeColor, selectedWithDataStyleBackColor, selectedWithDataStyleBorder));
	       
	        style[SELECTED_ITEM_WITH_NODATA_STYLE](createStyleInfoForItem(selectedWithNoDataStyleForeColor, selectedWithNoDataStyleBackColor, selectedWithNoDataStyleBorder));
	       
	        style[UNSELECTED_ITEM_WITH_DATA_STYLE](createStyleInfoForItem(unselectedWithDataStyleForeColor, unselectedWithDataStyleBackColor, unselectedWithDataStyleBorder));
	       
	        style[UNSELECTED_ITEM_WITH_NODATA_STYLE](createStyleInfoForItem(unselectedWithNoDataStyleForeColor, unselectedWithNoDataStyleBackColor, unselectedWithNoDataStyleBorder));
	       
	        setHoveredStyle(style, createStyleInfoForItem(hoveredStyleForeColor, hoveredStyleBackColor, hoveredStyleBorder));
	        return style;
	    };
	
	    function setHoveredStyle(style, hoverStyle) {
	        style[HOVERED_SELECTED_ITEM_WITH_DATA_STYLE](hoverStyle)[HOVERED_SELECTED_ITEM_WITH_NODATA_STYLE](hoverStyle)[HOVERED_UNSELECTED_ITEM_WITH_DATA_STYLE](hoverStyle)[HOVERED_UNSELECTED_ITEM_WITH_NODATA_STYLE](hoverStyle);
	    }
	
	    function createStyleInfoForItem(foreColor, backColor, border) {
	        var styleInfo = createStyleInfo();
	        styleInfo[FORE_COLOR](foreColor)[BACK_COLOR](backColor)[SET_BORDERS](border);
	        return styleInfo;
	    }
	
	    function createLightStyle(styleIndex) {
	        var themeColor = ACCENT + styleIndex;
	        return createBuiltinStyle('Light', styleIndex,
	            DEFAULT_FONT, WHITE, createBorder(1, SOLID, themeColor),
	            createBorder(0, '', ''), createBorder(1, SOLID, themeColor),
	            BLACK, themeColor + ',Lighter 60%', createBorder(1, SOLID, COLOR1),
	            COLOR2, themeColor + ',Lighter 80%', createBorder(1, SOLID, COLOR3),
	            BLACK, WHITE, createBorder(1, SOLID, COLOR3),
	            COLOR2, WHITE, createBorder(1, SOLID, '#E0E0E0'),
	            BLACK, '#F9E36F', createBorder(1, SOLID, COLOR1)
	        );
	    }
	
	    function createDarkStyle(styleIndex) {
	        var themeColor = ACCENT + styleIndex;
	        return createBuiltinStyle('Dark', styleIndex,
	            DEFAULT_FONT, WHITE, createBorder(1, SOLID, themeColor),
	            createBorder(0, '', ''), createBorder(1, SOLID, themeColor),
	            WHITE, themeColor, createBorder(1, SOLID, themeColor),
	            themeColor + ',Darker 25%', themeColor + ',Lighter 60%', createBorder(1, SOLID, themeColor + ',Lighter 60%'),
	            BLACK, '#C0C0C0', createBorder(1, SOLID, '#C0C0C0'),
	            '#959595', '#DFDFDF', createBorder(1, SOLID, '#DFDFDF'),
	            BLACK, '#F9E36F', createBorder(1, SOLID, COLOR1)
	        );
	    }
	
	    var SlicerStyles = (function () {
	       
	        
	        function SlicerStyles() {
	        }
	
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	
	       
	        for (var i = 1; i <= 6; i++) {
	            SlicerStyles['light' + i] = function (index) {
	                return function () {
	                    return createLightStyle(index);
	                };
	            }(i);
	            SlicerStyles['dark' + i] = function (index) {
	                return function () {
	                    return createDarkStyle(index);
	                };
	            }(i);
	        }
	
	       
	        
	        SlicerStyles.other1 = function () {
	            return createBuiltinStyle('Other', 1,
	                DEFAULT_FONT, WHITE, createBorder(1, SOLID, '#808080'),
	                createBorder(0, '', ''), createBorder(1, SOLID, '#A6A6A6'),
	                BLACK, '#BFBFBF', createBorder(1, SOLID, COLOR1),
	                BLACK, '#D9D9D9', createBorder(1, SOLID, COLOR3),
	                BLACK, WHITE, createBorder(1, SOLID, COLOR3),
	                '#959595', WHITE, createBorder(1, SOLID, '#E0E0E0'),
	                BLACK, '#F9E36F', createBorder(1, SOLID, COLOR1)
	            );
	        };
	       
	        
	        SlicerStyles.other2 = function () {
	            return createBuiltinStyle('Other', 2,
	                DEFAULT_FONT, WHITE, createBorder(1, SOLID, '#4F81BD'),
	                createBorder(0, '', ''), createBorder(1, SOLID, '#4F81BD'),
	                BLACK, '#A9C1E3', createBorder(1, SOLID, COLOR1),
	                COLOR2, '#D5E2F6', createBorder(1, SOLID, COLOR3),
	                BLACK, WHITE, createBorder(1, SOLID, COLOR3),
	                COLOR2, WHITE, createBorder(1, SOLID, '#E0E0E0'),
	                BLACK, '#F9E36F', createBorder(1, SOLID, COLOR1)
	            );
	        };
	
	        return SlicerStyles;
	    })();
	   
	
	   
	   
	    function applyStyle(itemslicer, style) {
	        var header = itemslicer._header,
	            caption = itemslicer._caption,
	            theme = getTheme(itemslicer.slicerData),
	            zoomFactor = itemslicer.zoomFactor();
	        if (!style) {
	            return;
	        }
	       
	       
	        if (style[WHOLE_SLICER_STYLE]) {
	            setStyleInfo(itemslicer._container, style[WHOLE_SLICER_STYLE], theme, caption, zoomFactor);
	            adjustSize(itemslicer, CONTAINER);
	        }
	       
	        var hBDiv = itemslicer._headerBorderDiv,
	            mergedStyle = getMergedStyleInfo(style[WHOLE_SLICER_STYLE], style[HEADER_STYLE]);
	        if (isDarwingInnerBorder(style)) {
	            var bb = mergedStyle[BORDER_BOTTOM], bbWidth = (bb && bb[BORDER_WIDTH]) || 0;
	            hBDiv[STYLE][HEIGHT] = (itemslicer._headerHeight - bbWidth) * getHeaderFontFactor(style) * zoomFactor + PX;
	            setBorder(hBDiv, bb, theme, BORDER_BOTTOM);
	           
	            mergedStyle[BORDER_LEFT] = mergedStyle[BORDER_TOP] = mergedStyle[BORDER_RIGHT] = mergedStyle[BORDER_BOTTOM] = keyword_null;
	        } else {
	            hBDiv[STYLE][BORDER_BOTTOM + WIDTH] = 0 + PX;
	            hBDiv[STYLE][HEIGHT] = header[STYLE][HEIGHT];
	        }
	        setStyleInfo(header, mergedStyle, theme, caption, zoomFactor);
	        adjustSize(itemslicer, HEADER);
	        for (var index in itemslicer._itemsSet) {
	            if (hasOwnProperty(itemslicer._itemsSet, index)) {
	                var itemIndex = parseInt(index);
	                refreshItemStyle(itemslicer, itemIndex);
	            }
	        }
	    }
	
	    function applyCSSStyle(dom, names, values) {
	        var cssObj = {};
	        if (!!names && !!values && getLength(names) === getLength(values)) {
	            for (var i = 0, len = getLength(names); i < len; i++) {
	                cssObj[names[i]] = values[i];
	            }
	            $(dom).css(cssObj);
	        }
	    }
	
	    function getMergedStyleInfo(inheritedStyleInfo, ownedStyleInfo) {
	        var mergedStyleInfo = {}, item;
	        if (ownedStyleInfo) {
	            for (item in ownedStyleInfo) {
	                if (hasOwnProperty(ownedStyleInfo, item)) {
	                    mergedStyleInfo[item] = ownedStyleInfo[item];
	                }
	            }
	        }
	        if (inheritedStyleInfo) {
	            for (item in inheritedStyleInfo) {
	                if (mergedStyleInfo[item] === keyword_undefined && inheritedStyleInfo[item] !== keyword_undefined) {
	                    mergedStyleInfo[item] = inheritedStyleInfo[item];
	                }
	            }
	        }
	        return mergedStyleInfo;
	    }
	
	    function getNormalizeColor(color, theme) {
	        if (!theme) {
	            return color;
	        }
	        var normalizeColor;
	        if (color && theme.getColor) {
	            normalizeColor = theme.getColor(color);
	        }
	        return normalizeColor;
	    }
	
	    function getTheme(slicerData) {
	        var sheet = slicerData && slicerData._getSheet && slicerData._getSheet();
	        return sheet && sheet.currentTheme();
	    }
	
	    function setBorder(target, border, theme, borderPrefix) {
	        if (!target) {
	            return;
	        }
	        var borderWidth = border && border[BORDER_WIDTH] || 0,
	            borderStyle = border && border[BORDER_STYLE] || '',
	            borderColor = border && border[BORDER_COLOR] || '';
	        target[STYLE][borderPrefix + UPPERWIDTH] = borderWidth + PX;
	        target[STYLE][borderPrefix + UPPERSTYLE] = borderStyle;
	        target[STYLE][borderPrefix + UPPERCOLOR] = getNormalizeColor(borderColor, theme);
	    }
	
	    function setStyleInfo(target, styleInfo, theme, caption, zoomFactor) {
	        if (!target || !styleInfo) {
	            return;
	        }
	       
	        var foreColor = styleInfo[FORE_COLOR] || BLACK,
	            backColor = styleInfo[BACK_COLOR] || WHITE,
	            font = styleInfo[FONT] || DEFAULT_FONT;
	        target[STYLE][BACKGROUND_COLOR] = getNormalizeColor(backColor, theme);
	        target[STYLE][COLOR] = getNormalizeColor(foreColor, theme);
	        target[STYLE][FONT] = adjustFontWithFallback(StyleHelper._scaleFont(font, zoomFactor)[FONT]);
	        setBorder(target, styleInfo[BORDER_LEFT], theme, BORDER_LEFT);
	        setBorder(target, styleInfo[BORDER_TOP], theme, BORDER_TOP);
	        setBorder(target, styleInfo[BORDER_RIGHT], theme, BORDER_RIGHT);
	        setBorder(target, styleInfo[BORDER_BOTTOM], theme, BORDER_BOTTOM);
	       
	        var composedTextDecoration = StyleHelper._composeTextDecoration(styleInfo[TEXT_DECORATION]);
	        if (Common._StringHelper._contains(target.className, HEADER_NAME)) {
	            caption[STYLE][TEXT_DECORATION] = composedTextDecoration;
	        } else if (Common._StringHelper._contains(target.className, ITEM_NAME)) {
	            target[STYLE][TEXT_DECORATION] = composedTextDecoration;
	        }
	    }
	
	    function isDarwingInnerBorder(style) {
	        var headerStyle = style[HEADER_STYLE];
	        if (!headerStyle || !(headerStyle[BORDER_LEFT] || headerStyle[BORDER_TOP] || headerStyle[BORDER_RIGHT] || headerStyle[BORDER_RIGHT])) {
	            return true;
	        }
	        var mergedStyle = getMergedStyleInfo(style[WHOLE_SLICER_STYLE], headerStyle);
	        if ((mergedStyle[BORDER_BOTTOM] && mergedStyle[BORDER_BOTTOM][BORDER_WIDTH] > 0) &&
	            (!mergedStyle[BORDER_LEFT] || mergedStyle[BORDER_LEFT][BORDER_WIDTH] === 0) &&
	            (!mergedStyle[BORDER_TOP] || mergedStyle[BORDER_TOP][BORDER_WIDTH] === 0) &&
	            (!mergedStyle[BORDER_RIGHT] || mergedStyle[BORDER_RIGHT][BORDER_WIDTH] === 0)) {
	            return true;
	        }
	        return false;
	    }
	
	    function getHeaderFontFactor(style) {
	        if (!style) {
	            return 1;
	        }
	        var actualHeaderStyle = getMergedStyleInfo(style[WHOLE_SLICER_STYLE], style[HEADER_STYLE]);
	        if (!actualHeaderStyle || !actualHeaderStyle[FONT]) {
	            return 1;
	        }
	        var font = actualHeaderStyle[FONT],
	            fontFactor = 1,
	            splitFont = StyleHelper._splitFont,
	            normalizeFont = StyleHelper._normalizeFont;
	        var dfsString = splitFont(normalizeFont(DEFAULT_FONT)).fontSize,
	            cfsString = splitFont(normalizeFont(font)).fontSize;
	        if (dfsString && cfsString) {
	            var dfsNumber = parseFloatFn(dfsString),
	                cfsNumber = parseFloatFn(cfsString);
	            if (!isNaN(cfsNumber)) {
	                fontFactor = cfsNumber / dfsNumber;
	            }
	        }
	        return fontFactor;
	    }
	
	    function getSizeOffset(element) {
	        var wOffset = 0, hOffset = 0;
	        if (element) {
	            var style = element[STYLE],
	                borderLeftWidth = style[BORDER_LEFT + UPPERWIDTH],
	                borderTopWidth = style[BORDER_TOP + UPPERWIDTH],
	                borderRightWidth = style[BORDER_RIGHT + UPPERWIDTH],
	                borderBottomWidth = style[BORDER_BOTTOM + UPPERWIDTH];
	            if (borderLeftWidth) {
	                wOffset += parseFloatFn(borderLeftWidth);
	            }
	            if (borderTopWidth) {
	                hOffset += parseFloatFn(borderTopWidth);
	            }
	            if (borderRightWidth) {
	                wOffset += parseFloatFn(borderRightWidth);
	            }
	            if (borderBottomWidth) {
	                hOffset += parseFloatFn(borderBottomWidth);
	            }
	        }
	        return {
	            widthOffset: wOffset,
	            heightOffset: hOffset
	        };
	    }
	
	    function getDataTexts(data) {
	        var dataTexts = [], text;
	        if (data) {
	            for (var i = 0; i < getLength(data); i++) {
	                if (data[i] === keyword_undefined || data[i] === keyword_null || data[i] === '') {
	                    text = sR().Blank;
	                } else {
	                    text = String(data[i]);
	                }
	                dataTexts.push(text);
	            }
	        }
	        return dataTexts;
	    }
	
	   
	    function createContainer(itemslicer) {
	        var container = createElement(DIV);
	        applyCSSStyle(container,
	            [POSITION, PADDING, BOX_SIZING, OVER_FLOW],
	            [ABSOLUTE, 6 * itemslicer.zoomFactor(), CONTENT_BOX, HIDDEN]);
	        $(container).addClass(CONTAINER_NAME);
	        adjustSize(itemslicer, CONTAINER);
	        $(container).append(createHeader(itemslicer)).append(createBody(itemslicer));
	        return container;
	    }
	
	    function createHeader(itemslicer) {
	        var header = createElement(DIV),
	            headerBorderDiv = createElement(DIV),
	            caption = createElement('span'),
	            clearFilter = createElement(DIV),
	            zoomFactor = itemslicer.zoomFactor(),
	            style = itemslicer.style();
	        applyCSSStyle(header,
	            [WIDTH, POSITION, TOP, LEFT, RIGHT, BOX_SIZING, OVER_FLOW],
	            [AUTO, ABSOLUTE, 0, 0, 0, CONTENT_BOX, HIDDEN]);
	        $(header).addClass(HEADER_NAME);
	        itemslicer._header = header;
	
	        var zoomedPD = itemslicer._containerPadding * zoomFactor;
	        applyCSSStyle(headerBorderDiv,
	            [WIDTH, POSITION, LEFT, RIGHT, BOX_SIZING, OVER_FLOW],
	            [AUTO, ABSOLUTE, zoomedPD, zoomedPD, CONTENT_BOX, HIDDEN]);
	        $(headerBorderDiv).addClass(HEADER_BORDERDIV_NAME);
	        itemslicer._headerBorderDiv = headerBorderDiv;
	        $(header).append(headerBorderDiv);
	
	        var captionTop = itemslicer._captionTop * getHeaderFontFactor(style) * zoomFactor,
	            captionWidth = getCaptionWidth(itemslicer) * zoomFactor;
	        applyCSSStyle(caption,
	            [BOX_SIZING, POSITION, TOP, OVER_FLOW, WIDTH, TEXT_OVERFLOW, WHITE_SPACE],
	            [CONTENT_BOX, ABSOLUTE, captionTop, HIDDEN, captionWidth, ELLIPSIS, NOWRAP]);
	        $(caption).text(itemslicer.captionName()).attr(UN_SELECTABLE, ON).addClass(CAPTION_NAME + ' ' + NO_USER_SELECT);
	        itemslicer._caption = caption;
	
	        var cfWidth = itemslicer._clearFilterWidth * zoomFactor,
	            cfHeight = itemslicer._clearFilterHeight * zoomFactor,
	            cfTop = itemslicer._clearFilterTop * getHeaderFontFactor(style) * zoomFactor,
	            cfRight = itemslicer._clearFilterRight * zoomFactor,
	            cfFontSize = itemslicer._fontSize * zoomFactor + PX;
	        applyCSSStyle(clearFilter,
	            [WIDTH, HEIGHT, CURSOR, POSITION, TOP, RIGHT, TEXT_ALIGN, BOX_SIZING, FONT_WEIGHT, BORDER_RADIUS, OVER_FLOW, FONT_SIZE],
	            [cfWidth, cfHeight, DEFAULT, ABSOLUTE, cfTop, cfRight, 'center', CONTENT_BOX, 'normal', 2, HIDDEN, cfFontSize]);
	        $(clearFilter).attr('title', 'Clear Filter (Alt+C)').attr(UN_SELECTABLE, ON).text(CLEAR_FILTER_ICON).addClass(CLEARFILTER_NAME + ' ' + NO_USER_SELECT);
	        itemslicer._clearFilter = clearFilter;
	
	        adjustSize(itemslicer, HEADER);
	        $(headerBorderDiv).append(caption).append(clearFilter);
	        return header;
	    }
	
	    function createBody(itemslicer) {
	        var body = createElement(DIV),
	            table = createElement('table'),
	            tr = createElement('tr'),
	            td1 = createElement('td'),
	            td2 = createElement('td');
	
	        var marginTop = (itemslicer._headerHeight - itemslicer._containerPadding + itemslicer._headerMarginBottom) * getHeaderFontFactor(itemslicer.style()) * itemslicer.zoomFactor();
	        applyCSSStyle(body,
	            [WIDTH, OVER_FLOW, MARGIN_TOP, BOX_SIZING],
	            [AUTO, HIDDEN, marginTop, CONTENT_BOX]);
	        $(body).attr(UN_SELECTABLE, ON).addClass(BODY_NAME + ' ' + NO_USER_SELECT);
	        itemslicer._body = body;
	
	        applyCSSStyle(table, [BOX_SIZING, 'border-spacing'], [CONTENT_BOX, 0 + PX]);
	        $(table).attr(UN_SELECTABLE, ON).addClass(TABLE_NAME + ' ' + NO_USER_SELECT);
	        itemslicer._tb = table;
	
	        $(tr).css(BOX_SIZING, CONTENT_BOX).addClass(TR_NAME);
	        itemslicer._tr = tr;
	
	        applyCSSStyle(td1, [PADDING, BOX_SIZING], [0, CONTENT_BOX]);
	        $(td1).addClass(TD1_NAME);
	        itemslicer._td1 = td1;
	
	        applyCSSStyle(td2, [PADDING, BOX_SIZING, CURSOR], [0, CONTENT_BOX, DEFAULT]);
	        $(td2).addClass(TD2_NAME);
	        itemslicer._td2 = td2;
	
	        $(td1).append(createItemsContainer(itemslicer));
	        var scrollbar = createScrollbar(itemslicer);
	        $(td2).append(scrollbar);
	        itemslicer._scrollbar = scrollbar;
	        $(tr).append(td1).append(td2);
	        $(table).append(tr);
	        $(body).append(table);
	        return body;
	    }
	
	    function createItemsContainer(itemslicer) {
	        var itemsContainer = createElement(DIV),
	            zoomFactor = itemslicer.zoomFactor(),
	            width, height;
	
	        itemslicer._itemsContainer = itemsContainer;
	        height = getItemsContainerHeight(itemslicer);
	        itemslicer._itemsContainerHeight = height;
	        width = getItemsContainerWidth(itemslicer);
	        itemslicer._itemsContainerWidth = width;
	
	        applyCSSStyle(itemsContainer,
	            [WIDTH, HEIGHT, FONT_SIZE],
	            [width * zoomFactor, height * zoomFactor, itemslicer._fontSize * zoomFactor + PX]);
	        $(itemsContainer).attr(UN_SELECTABLE, ON).addClass(ITEMSCONTAINER_NAME + ' ' + NO_USER_SELECT);
	
	        var sortedItems = getSortedItems(itemslicer), itemsCount;
	        itemslicer._sortedItems = sortedItems;
	        itemsCount = Math.min(getMaxVisibleItemsCount(itemslicer), getLength(sortedItems));
	        for (var i = 0; i < itemsCount; i++) {
	            var itemValue = sortedItems[i],
	                item = createItem(itemslicer, itemValue, i);
	            $(itemsContainer).append(item);
	            itemslicer._items.push(item);
	            itemslicer._itemsSet[itemslicer._exclusiveDataTexts.indexOf(itemValue)] = item;
	        }
	        return itemsContainer;
	    }
	
	    function createItem(itemslicer, itemValue, itemIndex) {
	        var value = itemValue,
	            item = createElement(BUTTON),
	            zoomFactor = itemslicer.zoomFactor();
	
	        var marginTop = itemslicer._itemMargin * zoomFactor + PX;
	        applyCSSStyle(item,
	            [TEXT_ALIGN, WHITE_SPACE, MARGIN_TOP, CURSOR, BOX_SIZING, BORDER_RADIUS, PADDING, OVER_FLOW, TEXT_OVERFLOW, BACKGROUND_COLOR],
	            [LEFT, NOWRAP, marginTop, DEFAULT, CONTENT_BOX, 5, '1px 6px', HIDDEN, ELLIPSIS, WHITE]);
	        $(item).attr('type', BUTTON).attr(UN_SELECTABLE, ON).text(value).addClass(ITEM_NAME + ' ' + NO_USER_SELECT);
	
	        if ((itemIndex + 1) % itemslicer.columnCount() !== 0) {
	            $(item).css('margin-right', itemslicer._itemMargin * zoomFactor + PX);
	        }
	        adjustSize(itemslicer, ITEM, item);
	        return item;
	    }
	
	    function getCaptionWidth(itemslicer) {
	        var container = itemslicer._container,
	            header = itemslicer._header,
	            containerBLW = 1,
	            containerBRW = 1,
	            headerBLW = 0,
	            headerBRW = 0,
	            stringStyle2Number = function (stringStyle) {
	                if (!stringStyle) {
	                    return 0;
	                }
	                return parseFloatFn(stringStyle);
	            };
	
	        var containerStyle, headerStyle,
	            blw = BORDER + 'Left' + UPPERWIDTH,
	            brw = BORDER + 'Right' + UPPERWIDTH;
	        if (container) {
	            containerStyle = container.style;
	            containerBLW = stringStyle2Number(containerStyle[blw]);
	            containerBRW = stringStyle2Number(containerStyle[brw]);
	        }
	        if (header) {
	            headerStyle = header.style;
	            headerBLW = stringStyle2Number(headerStyle[blw]);
	            headerBRW = stringStyle2Number(headerStyle[brw]);
	        }
	        return itemslicer.width() - (containerBLW + containerBRW) - 2 * itemslicer._containerPadding - (headerBLW + headerBRW) - itemslicer._clearFilterWidth;
	    }
	
	    function getItemsContainerHeight(itemslicer) {
	        var containerSizeOffset = getSizeOffset(itemslicer._container);
	        var height = itemslicer.height() - 2 * itemslicer._containerPadding - containerSizeOffset.heightOffset;
	        return itemslicer.showHeader() ? height - itemslicer._headerHeight * getHeaderFontFactor(itemslicer.style()) - itemslicer._headerMarginBottom : height;
	    }
	
	    function getItemsContainerWidth(itemslicer) {
	        var containerSizeOffset = getSizeOffset(itemslicer._container);
	        var width = itemslicer.width() - 2 * itemslicer._containerPadding - containerSizeOffset.widthOffset - 1;
	        return itemslicer._needShowScrollbar() ? width - itemslicer._scrollbarWidth : width;
	    }
	
	    function getItemWidth(itemslicer, containerWidth) {
	        var columnCount = itemslicer.columnCount();
	        return (containerWidth - (columnCount - 1) * itemslicer._itemMargin) / columnCount;
	    }
	
	    function getMaxVisibleItemsCount(itemslicer) {
	        return Math.ceil(itemslicer._itemsContainerHeight / (itemslicer.itemHeight() + 2 * (itemslicer._itemVerticalPadding + itemslicer._itemBorderWidth) + itemslicer._itemMargin)) * itemslicer.columnCount();
	    }
	
	    function getSortedItems(itemslicer) {
	        var exclusiveDataTexts = itemslicer._exclusiveDataTexts;
	
	       
	        var sortedItems = itemslicer._orderBySortState(exclusiveDataTexts.slice(0), itemslicer.sortState());
	       
	        var noDataItemIndexes = itemslicer.slicerData.getFilteredOutIndexes(itemslicer.columnName, 2);
	        
	        var tempItems;
	        if (!itemslicer.showNoDataItems()) {
	            tempItems = sortedItems.concat();
	            for (var i = 0; i < getLength(tempItems); i++) {
	                if (arrayHelper._contains(noDataItemIndexes, exclusiveDataTexts.indexOf(tempItems[i]))) {
	                    arrayHelper._remove(sortedItems, tempItems[i]);
	                }
	            }
	        } else if (itemslicer.visuallyNoDataItems() && itemslicer.showNoDataItemsInLast()) {
	            tempItems = [];
	            var len = getLength(sortedItems), j, item;
	            for (j = 0; j < len; j++) {
	                item = sortedItems[j];
	                if (!arrayHelper._contains(noDataItemIndexes, exclusiveDataTexts.indexOf(item))) {
	                    tempItems.push(item);
	                }
	            }
	            for (j = 0; j < len; j++) {
	                item = sortedItems[j];
	                if (arrayHelper._contains(noDataItemIndexes, exclusiveDataTexts.indexOf(item))) {
	                    tempItems.push(item);
	                }
	            }
	            sortedItems = tempItems;
	        }
	        var srBlank = sR().Blank;
	        if (arrayHelper._contains(sortedItems, srBlank)) {
	            arrayHelper._remove(sortedItems, srBlank);
	            sortedItems.push(srBlank);
	        }
	        return sortedItems;
	    }
	
	    function createScrollbar(itemslicer) {
	        var scrollbarObj = new Sheets._Scrollbar(false);
	        itemslicer._scrollbarObj = scrollbarObj;
	        var scrollbar = scrollbarObj._getScrollbar();
	        $(scrollbar).bind('scroll.gcScrollbar', function (e, args) {
	            var scrollEventType = args.scrollEventType, scrollOrientation = args.scrollOrientation;
	            e.data = itemslicer;
	            if (scrollOrientation === 1 ) {
	                var eventTypes = [0, 1, 2, 3, 5];
	                if (eventTypes.indexOf(scrollEventType) >= 0) {
	                    itemslicer._doScroll(e, args);
	                }
	            }
	        });
	        return scrollbar;
	    }
	
	    function resetData(itemslicer) {
	        var slicerData = itemslicer.slicerData;
	       
	        itemslicer.data = slicerData.getData(itemslicer.columnName);
	        itemslicer.exclusiveDatas = slicerData.getExclusiveData(itemslicer.columnName);
	        itemslicer._dataTexts = getDataTexts(itemslicer.data);
	        itemslicer._exclusiveDataTexts = getDataTexts(itemslicer.exclusiveDatas);
	        itemslicer._sortedItems = getSortedItems(itemslicer);
	       
	        refreshScrollbar(itemslicer);
	        refreshItems(itemslicer);
	    }
	
	   
	    function refresh(itemslicer, zoomFactor) {
	        var style = itemslicer.style(),
	            container = itemslicer._container;
	        if (!container) {
	            return;
	        }
	        if (zoomFactor !== keyword_undefined && zoomFactor !== itemslicer.zoomFactor()) {
	            itemslicer.zoomFactor(zoomFactor);
	            applyStyle(itemslicer, style);
	        }
	       
	        $(container).css(PADDING, 6 * zoomFactor);
	        adjustSize(itemslicer, CONTAINER);
	       
	        refreshHeader(itemslicer);
	       
	        var marginTop = itemslicer.showHeader() ? (itemslicer._headerHeight + itemslicer._headerMarginBottom - itemslicer._containerPadding) * getHeaderFontFactor(style) * zoomFactor : 0;
	        $(itemslicer._body).css(MARGIN_TOP, marginTop);
	        refreshItemsContainer(itemslicer);
	        refreshScrollbar(itemslicer);
	    }
	
	    function refreshHeader(itemslicer) {
	        var zoomFactor = itemslicer.zoomFactor(),
	            header = itemslicer._header,
	            body = itemslicer._body,
	            caption = itemslicer._caption,
	            clearFilter = itemslicer._clearFilter,
	            style = itemslicer.style();
	        if (itemslicer.showHeader()) {
	            if (itemslicer._container.firstChild !== header) {
	                $(header).insertBefore(body);
	                $(body).css(MARGIN_TOP, (itemslicer._headerHeight + itemslicer._headerMarginBottom) * getHeaderFontFactor(style) * zoomFactor);
	            }
	            $(header).css(HEIGHT, itemslicer._headerHeight * getHeaderFontFactor(style) * zoomFactor);
	
	            var leftRight = itemslicer._containerPadding * zoomFactor;
	            applyCSSStyle(itemslicer._headerBorderDiv, [LEFT, RIGHT], [leftRight, leftRight]);
	
	           
	            if (caption.innerHTML !== itemslicer.captionName()) {
	                $(caption).text(itemslicer.captionName());
	            }
	
	            var captionTop = itemslicer._captionTop * getHeaderFontFactor(style) * zoomFactor,
	                captionWidth = getCaptionWidth(itemslicer) * zoomFactor;
	            applyCSSStyle(caption, [TOP, WIDTH, FONT_WEIGHT], [captionTop, captionWidth, 'bold']);
	
	           
	            var unSelectedItemIndexes = itemslicer._unSelectedItemIndexes;
	            var clearFilterState = unSelectedItemIndexes && getLength(unSelectedItemIndexes) > 0 ? 1  : 0 ;
	
	            changeClearFilterColor(itemslicer, clearFilterState);
	            var cfWidth = itemslicer._clearFilterWidth * zoomFactor,
	                cfHeight = cfWidth,
	                cfTop = itemslicer._clearFilterTop * getHeaderFontFactor(style) * zoomFactor,
	                cfRight = itemslicer._clearFilterRight * zoomFactor;
	            applyCSSStyle(clearFilter, [WIDTH, HEIGHT, TOP, RIGHT], [cfWidth, cfHeight, cfTop, cfRight]);
	
	            adjustSize(itemslicer, HEADER);
	        } else {
	            $(header).remove();
	        }
	    }
	
	    function refreshItemsContainer(itemslicer) {
	        var zoomFactor = itemslicer.zoomFactor();
	        var containerHeight = getItemsContainerHeight(itemslicer);
	        itemslicer._itemsContainerHeight = containerHeight;
	        var containerWidth = getItemsContainerWidth(itemslicer);
	        itemslicer._itemsContainerWidth = containerWidth;
	        applyCSSStyle(itemslicer._itemsContainer, [WIDTH, HEIGHT, FONT_SIZE], [containerWidth * zoomFactor, containerHeight * zoomFactor, itemslicer._fontSize * zoomFactor]);
	
	        refreshItems(itemslicer);
	    }
	
	    function refreshItems(itemslicer) {
	        var sortedItems = itemslicer._sortedItems;
	        if (!sortedItems) {
	            return;
	        }
	       
	        var items = itemslicer._items;
	        if (items && getLength(items) > 0) {
	            $(items).remove();
	        }
	       
	        itemslicer._items = [];
	        items = itemslicer._items;
	        itemslicer._itemsSet = {};
	        var itemsCount = Math.min(getMaxVisibleItemsCount(itemslicer), getLength(sortedItems));
	        var start = itemslicer._needShowScrollbar() ? itemslicer._scrollbarObj.value() * itemslicer.columnCount() : 0;
	        var end = Math.min(start + itemsCount, getLength(sortedItems));
	        for (var i = start; i < end; i++) {
	            var itemValue = sortedItems[i];
	            var item = createItem(itemslicer, itemValue, i);
	            $(itemslicer._itemsContainer).append(item);
	            items.push(item);
	            itemslicer._itemsSet[itemslicer._exclusiveDataTexts.indexOf(itemValue)] = item;
	        }
	       
	        if (getLength(items) === 0) {
	            return;
	        }
	        for (var index in itemslicer._itemsSet) {
	            if (hasOwnProperty(itemslicer._itemsSet, index)) {
	                refreshItemStyle(itemslicer, parseInt(index));
	            }
	        }
	    }
	
	    function refreshItemStyle(itemslicer, index) {
	        var hitInfo = itemslicer._hitInfo;
	        var hoveredItemIndex = hitInfo ? itemslicer._exclusiveDataTexts.indexOf(hitInfo[ITEM_VALUE]) : -1;
	        var unSelectedItemIndexes = itemslicer._unSelectedItemIndexes;
	        var noDataItemIndexes = itemslicer._noDataItemIndexes;
	        var item = itemslicer._itemsSet[index],
	            itemState = 0;
	        if (index === hoveredItemIndex) {
	            itemState |= 1 
	            ;
	        }
	        if (arrayHelper._contains(unSelectedItemIndexes, index)) {
	            itemState |= 4 
	            ;
	        } else {
	            itemState |= 2 
	            ;
	        }
	        if (arrayHelper._contains(noDataItemIndexes, index) && itemslicer.visuallyNoDataItems()) {
	            itemState |= 16 
	            ;
	        } else {
	            itemState |= 8 
	            ;
	        }
	        applyItemStyle(itemslicer, item, itemState);
	    }
	
	    function applyItemStyle(itemslicer, item, state) {
	        var style = itemslicer.style(), matchedStyleName;
	        if (!item || !style) {
	            return;
	        }
	
	        switch (state) {
	            case 2  | 8 
	            :
	                matchedStyleName = SELECTED_ITEM_WITH_DATA_STYLE;
	                break;
	            case 2  | 16 
	            :
	                matchedStyleName = SELECTED_ITEM_WITH_NODATA_STYLE;
	                break;
	            case 4  | 8 
	            :
	                matchedStyleName = UNSELECTED_ITEM_WITH_DATA_STYLE;
	                break;
	            case 4  | 16 
	            :
	                matchedStyleName = UNSELECTED_ITEM_WITH_NODATA_STYLE;
	                break;
	            case 1  | 2  | 8 
	            :
	                matchedStyleName = HOVERED_SELECTED_ITEM_WITH_DATA_STYLE;
	                break;
	            case 1  | 2  | 16 
	            :
	                matchedStyleName = HOVERED_SELECTED_ITEM_WITH_NODATA_STYLE;
	                break;
	            case 1  | 4  | 8 
	            :
	                matchedStyleName = HOVERED_UNSELECTED_ITEM_WITH_DATA_STYLE;
	                break;
	            case 1  | 4  | 16 
	            :
	                matchedStyleName = HOVERED_UNSELECTED_ITEM_WITH_NODATA_STYLE;
	                break;
	        }
	        setStyleInfo(item, getMergedStyleInfo(style[WHOLE_SLICER_STYLE], style[matchedStyleName]), getTheme(itemslicer.slicerData), itemslicer._caption, itemslicer.zoomFactor());
	        adjustSize(itemslicer, ITEM, item);
	    }
	
	    function refreshScrollbar(itemslicer) {
	        var scrollbar = itemslicer._scrollbar,
	            td2 = itemslicer._td2;
	        if (itemslicer._needShowScrollbar()) {
	            if (!scrollbar) {
	                scrollbar = createScrollbar(itemslicer);
	            }
	            if (td2.firstChild !== scrollbar) {
	                $(td2).append(scrollbar);
	                refreshItemsContainer(itemslicer);
	            }
	            var zoomFactor = itemslicer.zoomFactor(),
	                itemsContainerHeight = itemslicer._itemsContainerHeight,
	                pageValue = Math.floor(itemsContainerHeight / (itemslicer.itemHeight() + 2 * itemslicer._itemVerticalPadding + itemslicer._itemMargin)),
	                scrollbarObj = itemslicer._scrollbarObj;
	            scrollbarObj.value(itemslicer._scrollbarValue);
	            scrollbarObj._width(itemslicer._scrollbarWidth * zoomFactor, false);
	            scrollbarObj._height(itemsContainerHeight * zoomFactor, false);
	            scrollbarObj._minimum(0);
	            scrollbarObj._maximum(Math.ceil((getLength(itemslicer._exclusiveDataTexts)) / itemslicer.columnCount()) - pageValue);
	            scrollbarObj._pageValue(pageValue);
	            scrollbarObj._smallChange(1);
	            scrollbarObj._largeChange(pageValue - 1);
	            scrollbarObj._refreshLayout();
	        } else {
	            if (td2.firstChild === scrollbar) {
	                var pe = scrollbar.parentElement;
	                pe && pe.removeChild(scrollbar);
	                refreshItemsContainer(itemslicer);
	            }
	            itemslicer._scrollbarValue = 0;
	        }
	    }
	
	    function adjustSize(itemslicer, area, item) {
	        var zoomFactor = itemslicer.zoomFactor(),
	            width, height, domElement;
	
	        switch (area) {
	            case CONTAINER:
	                var container = itemslicer._container,
	                    containerSizeOffset = getSizeOffset(container),
	                    containerPadding = itemslicer._containerPadding;
	                width = (itemslicer.width() - 2 * containerPadding) * zoomFactor - containerSizeOffset.widthOffset;
	                height = (itemslicer.height() - 2 * containerPadding) * zoomFactor - containerSizeOffset.heightOffset;
	                domElement = container;
	                break;
	            case HEADER:
	                var header = itemslicer._header,
	                    headerSizeOffset = getSizeOffset(header),
	                    headerActualHeight = itemslicer._headerHeight * getHeaderFontFactor(itemslicer.style()) * zoomFactor - headerSizeOffset.heightOffset;
	                $(header).css(HEIGHT, headerActualHeight);
	                width = itemslicer._clearFilterWidth * zoomFactor;
	                height = itemslicer._clearFilterHeight * zoomFactor;
	                domElement = itemslicer._clearFilter;
	                break;
	            case ITEM:
	                var itemSizeOffset = getSizeOffset(item);
	                width = getItemWidth(itemslicer, itemslicer._itemsContainerWidth) * zoomFactor - 2 * itemslicer._itemHorizontalPadding - itemSizeOffset.widthOffset;
	                height = itemslicer.itemHeight() * zoomFactor - itemSizeOffset.heightOffset;
	                domElement = item;
	                break;
	        }
	        applyCSSStyle(domElement, [WIDTH, HEIGHT], [width, height]);
	    }
	
	   
	    function attachEvents(itemslicer) {
	        var container = itemslicer._container,
	            ns = '.slicer',
	            MOUSE = 'mouse',
	            WHEEL = 'wheel',
	            DOM_MOUSE_SCROLL = 'DOMMouseScroll';
	        if (!container) {
	            return;
	        }
	        $(container).bind(MOUSE + 'down' + ns, function (e) {
	            itemslicer._doMouseDown(e);
	        }).bind(MOUSE + 'move' + ns, function (e) {
	            itemslicer._doMouseMove(e);
	        }).bind(MOUSE + 'out' + ns, function (e) {
	            itemslicer._doMouseLeave(e);
	        });
	        container.addEventListener(MOUSE + WHEEL, function (e) {
	            itemslicer._doMouseWheel(e);
	        }, false);
	        container.addEventListener(DOM_MOUSE_SCROLL, function (e) {
	            itemslicer._doMouseWheel(e);
	        }, false);
	        $(DOCUMENT).bind(MOUSE + 'up' + ns, function (e) {
	            doDocumentMouseUp(itemslicer, e);
	        }).bind('keydown' + ns, function (e) {
	            itemslicer._doKeyDown(e);
	        }).bind('keyup' + ns, function (e) {
	            itemslicer._doKeyUp(e);
	        });
	        DOCUMENT.addEventListener(MOUSE + WHEEL, function (e) {
	            itemslicer._doMouseWheel(e);
	        }, false);
	        DOCUMENT.addEventListener(DOM_MOUSE_SCROLL, function (e) {
	            itemslicer._doMouseWheel(e);
	        }, false);
	    }
	
	    function detachEvents(itemslicer) {
	        var container = itemslicer._container;
	        container && $(container).unbind('.slicer');
	    }
	
	   
	    function mouseDownOnItemWithCtrl(itemslicer, hitInfo) {
	        var exclusiveData = itemslicer.exclusiveDatas,
	            unSelectedItemIndexes = itemslicer._unSelectedItemIndexes,
	            itemExclusiveIndex = getExclusiveRowIndex(itemslicer, hitInfo[ITEM_VALUE]),
	            selectingItemIndexes = itemslicer._selectingItemIndexes,
	            filteringItemIndexes = itemslicer._filteringItemIndexes;
	       
	        if (arrayHelper._contains(selectingItemIndexes, itemExclusiveIndex)) {
	            arrayHelper._remove(selectingItemIndexes, itemExclusiveIndex);
	        } else {
	            selectingItemIndexes.push(itemExclusiveIndex);
	        }
	        for (var i = 0; i < getLength(exclusiveData); i++) {
	            if (!arrayHelper._contains(unSelectedItemIndexes, i)) {
	                filteringItemIndexes.push(i);
	            }
	        }
	        for (var j = 0; j < getLength(selectingItemIndexes); j++) {
	            if (arrayHelper._contains(filteringItemIndexes, selectingItemIndexes[j])) {
	                arrayHelper._remove(filteringItemIndexes, selectingItemIndexes[j]);
	            } else {
	                filteringItemIndexes.push(selectingItemIndexes[j]);
	            }
	        }
	        if (getLength(filteringItemIndexes) === 0) {
	            for (var k = 0; k < getLength(itemslicer._exclusiveDataTexts); k++) {
	                filteringItemIndexes.push(k);
	            }
	        }
	        itemslicer._activeItemIndex = itemExclusiveIndex;
	    }
	
	    function mouseDownOnItemWithShift(itemslicer, hitInfo) {
	        var sortedItems = itemslicer._sortedItems,
	            exclusiveDataTexts = itemslicer._exclusiveDataTexts,
	            activeItemText = exclusiveDataTexts[itemslicer._activeItemIndex];
	        clearItemsStyle(itemslicer);
	        var index1 = sortedItems.indexOf(activeItemText), index2 = sortedItems.indexOf(hitInfo[ITEM_VALUE]);
	        var start = Math.min(index1, index2);
	        var end = Math.max(index1, index2);
	        for (var i = start; i <= end; i++) {
	            var itemExclusiveIndex = exclusiveDataTexts.indexOf(sortedItems[i]),
	                selectingItemIndexes = itemslicer._selectingItemIndexes,
	                filteringItemIndexes = itemslicer._filteringItemIndexes;
	            if (selectingItemIndexes.indexOf(itemExclusiveIndex) === -1) {
	                selectingItemIndexes.push(itemExclusiveIndex);
	            }
	            if (filteringItemIndexes.indexOf(itemExclusiveIndex) === -1) {
	                filteringItemIndexes.push(itemExclusiveIndex);
	            }
	        }
	    }
	
	    function mouseDownOnItemWithoutKeyDown(itemslicer, hitInfo) {
	        clearItemsStyle(itemslicer);
	        var itemExclusiveIndex = getExclusiveRowIndex(itemslicer, hitInfo[ITEM_VALUE]);
	        refreshItemStyle(itemslicer, itemExclusiveIndex);
	        itemslicer._selectingItemIndexes.push(itemExclusiveIndex);
	        itemslicer._filteringItemIndexes.push(itemExclusiveIndex);
	        itemslicer._activeItemIndex = itemExclusiveIndex;
	    }
	
	    function clearItemsStyle(itemslicer) {
	        var items = itemslicer._items;
	        if (!items || getLength(items) === 0) {
	            return;
	        }
	        var noDataItemIndexes = itemslicer._noDataItemIndexes;
	        for (var i = 0, len = getLength(items); i < len; i++) {
	            var item = items[i],
	                index = itemslicer._exclusiveDataTexts.indexOf(items[i].innerHTML),
	                state = arrayHelper._contains(noDataItemIndexes, index) ? 4  | 16  : 4  | 8 ;
	            applyItemStyle(itemslicer, item, state);
	        }
	    }
	
	    function getExclusiveRowIndex(itemslicer, itemValue) {
	        var exclusiveDatasCache = itemslicer._exclusiveDataTexts;
	        if (exclusiveDatasCache) {
	            for (var i = 0, length = getLength(exclusiveDatasCache); i < length; i++) {
	                if (exclusiveDatasCache[i] === itemValue) {
	                    return i;
	                }
	            }
	        }
	        return -1;
	    }
	
	    function preRefreshItemsStyle(itemslicer, itemIndexes) {
	        var unSelectedItemIndexes = itemslicer._unSelectedItemIndexes;
	        var noDataItemIndexes = itemslicer._noDataItemIndexes;
	        for (var i = 0; i < getLength(itemIndexes); i++) {
	            var itemState = 0;
	            if (itemslicer._isCtrlKeyDown) {
	                if (arrayHelper._contains(unSelectedItemIndexes, itemIndexes[i])) {
	                    itemState |= 2 
	                    ;
	                } else {
	                    itemState |= 4 
	                    ;
	                }
	            } else {
	                itemState |= 2 
	                ;
	            }
	            if (arrayHelper._contains(noDataItemIndexes, itemIndexes[i]) && itemslicer.visuallyNoDataItems()) {
	                itemState |= 16 
	                ;
	            } else {
	                itemState |= 8 
	                ;
	            }
	            applyItemStyle(itemslicer, itemslicer._itemsSet[itemIndexes[i]], itemState);
	        }
	    }
	
	    function doDocumentMouseUp(itemslicer, event) {
	        var hitInfo = itemslicer._hitInfo;
	        itemslicer._doMouseUp(event);
	        hitInfo = hitInfo ? new SlicerHitInfo(hitInfo[MARK], hitInfo[ITEM_VALUE]) : keyword_null ;
	
	        itemslicer._hitInfo = keyword_null;
	        clearOldHover(itemslicer, hitInfo);
	    }
	
	    function changeClearFilterColor(itemslicer, state) {
	        var clearFilter = itemslicer._clearFilter;
	        if (!clearFilter) {
	            return;
	        }
	        var style = itemslicer.style(),
	            mergedHeaderStyle = getMergedStyleInfo(style[WHOLE_SLICER_STYLE], style[HEADER_STYLE]),
	            backColor = mergedHeaderStyle && mergedHeaderStyle[BACK_COLOR];
	        if (!backColor) {
	            backColor = WHITE;
	        }
	        itemslicer._clearFilterNormalBackColor = backColor;
	        switch (state) {
	            case 0 
	            :
	                itemslicer._isFiltered = false;
	                applyCSSStyle(clearFilter, [COLOR, BACKGROUND_COLOR], [itemslicer._clearFilterNonActivedForeColor, backColor]);
	                break;
	            case 1 
	            :
	                itemslicer._isFiltered = true;
	                applyCSSStyle(clearFilter, [COLOR, BACKGROUND_COLOR], [itemslicer._clearFilterActivedForeColor, backColor]);
	                break;
	            case 2 
	            :
	                $(clearFilter).css(BACKGROUND_COLOR, itemslicer._clearFilterHoveredBackColor);
	                break;
	        }
	    }
	
	    function clearOldHover(itemslicer, hitInfo) {
	        if (!hitInfo) {
	            return;
	        }
	        var selectingItemIndexes = itemslicer._selectingItemIndexes;
	        switch (hitInfo[MARK]) { 
	            case 4 
	            :
	                if (!itemslicer._clearFilter) {
	                    return;
	                }
	                if (itemslicer._isFiltered) {
	                    changeClearFilterColor(itemslicer, 1 
	                    );
	                } else {
	                    changeClearFilterColor(itemslicer, 0 
	                    );
	                }
	                break;
	            case 5 
	            :
	                var itemExclusiveIndex = itemslicer._exclusiveDataTexts.indexOf(hitInfo[ITEM_VALUE]);
	                if (selectingItemIndexes && arrayHelper._contains(selectingItemIndexes, itemExclusiveIndex)) {
	                    preRefreshItemsStyle(itemslicer, selectingItemIndexes);
	                } else {
	                    refreshItemStyle(itemslicer, itemExclusiveIndex);
	                }
	                break;
	        }
	    }
	
	    function setNewHover(itemslicer, hitInfo) {
	        if (!hitInfo) {
	            return;
	        }
	        switch (hitInfo[MARK]) {
	            case 4 
	            :
	                if (!itemslicer._clearFilter || !itemslicer._isFiltered) {
	                    return;
	                }
	                changeClearFilterColor(itemslicer, 2 
	                );
	                break;
	            case 5 
	            :
	                var index = itemslicer._exclusiveDataTexts.indexOf(hitInfo[ITEM_VALUE]);
	                refreshItemStyle(itemslicer, index);
	                break;
	            case 6 
	            :
	                itemslicer._itemsContainer.style.cursor = DEFAULT;
	                break;
	        }
	    }
	
	    function getItemElement(itemslicer, itemValue) {
	        var items = itemslicer._items;
	        if (items && itemValue !== keyword_null) {
	            for (var i = 0; i < getLength(items); i++) {
	                var item = items[i];
	                if (item.innerHTML.toLowerCase() === itemValue.toLowerCase()) {
	                    return item;
	                }
	            }
	        }
	        return keyword_null;
	    }
	
	   
	    function hitTest(itemslicer, e) {
	        var containerRect = getRect(itemslicer, CONTAINER),
	            mark = keyword_null,
	            itemValue = keyword_null;
	        if (!containerRect) {
	            return keyword_null;
	        }
	        var x = e.pageX, y = e.pageY,
	            headerRect = getRect(itemslicer, HEADER),
	            clearfilterRect = getRect(itemslicer, CLEARFILTER),
	            bodyRect = getRect(itemslicer, BODY),
	            icRect = getRect(itemslicer, ITEMSCONTAINER);
	        if (headerRect && headerRect.contains(x, y)) {
	            mark = clearfilterRect && clearfilterRect.contains(x, y) ? 4 
	                : 1 
	            ;
	        } else if (bodyRect && bodyRect.contains(x, y)) {
	            var items = itemslicer._items;
	            if (icRect && icRect.contains(x, y) && items) {
	                for (var i = 0; i < getLength(items); i++) {
	                    var itemRect = getRect(itemslicer, ITEM, i);
	                    if (itemRect && itemRect.contains(x, y)) {
	                        mark = 5 
	                        ;
	                        for (var key in itemslicer._itemsSet) {
	                            if (itemslicer._itemsSet[key] === items[i]) {
	                                itemValue = itemslicer._exclusiveDataTexts[key];
	                                break;
	                            }
	                        }
	                        break;
	                    }
	                }
	                if (i >= getLength(items)) {
	                    var lastItemRect = getRect(itemslicer, ITEM, getLength(items) - 1);
	                    if (y < lastItemRect.y + itemslicer.itemHeight() * itemslicer.zoomFactor()) {
	                        mark = 6 
	                        ;
	                    } else {
	                        mark = 7 
	                        ;
	                    }
	                }
	            } else {
	                mark = 8 
	                ;
	            }
	        } else {
	            mark = 0 
	            ;
	        }
	        return new SlicerHitInfo(mark, itemValue);
	    }
	
	    function getRect(itemslicer, area, itemIndex) {
	        var containerRect = (area === CONTAINER) ? keyword_undefined : getRect(itemslicer, CONTAINER),
	            container = itemslicer._container,
	            containerBorderWidth = itemslicer._containerBorderWidth,
	            containerPadding = itemslicer._containerPadding,
	            zoomFactor = itemslicer.zoomFactor(),
	            style = itemslicer.style(),
	            showHeader = itemslicer.showHeader(),
	            headerHeight = itemslicer._headerHeight,
	            clearFilterWidth = itemslicer._clearFilterWidth,
	            exclusiveDatasCache = itemslicer._exclusiveDataTexts,
	            x, y, width, height;
	
	        switch (area) {
	            case CONTAINER:
	                x = 0;
	                y = 0;
	                width = container.offsetWidth;
	                height = container.offsetHeight;
	                do {
	                    x += container.offsetLeft;
	                    y += container.offsetTop;
	                    container = container.offsetParent;
	                } while (container);
	                break;
	            case HEADER:
	                if (!containerRect || !showHeader) {
	                    return keyword_null;
	                }
	                x = containerRect.x + containerBorderWidth * zoomFactor;
	                y = containerRect.y + containerBorderWidth * zoomFactor;
	                width = itemslicer.width() * zoomFactor;
	                height = headerHeight * getHeaderFontFactor(style) * zoomFactor;
	                break;
	            case CLEARFILTER:
	                if (!containerRect || !showHeader) {
	                    return keyword_null;
	                }
	                x = containerRect.x + containerRect.width - (containerBorderWidth + containerPadding + clearFilterWidth) * zoomFactor;
	                y = containerRect.y + containerBorderWidth + itemslicer._captionTop * getHeaderFontFactor(style) * zoomFactor;
	                width = clearFilterWidth * zoomFactor;
	                height = itemslicer._clearFilterHeight * zoomFactor;
	                break;
	            case BODY:
	                if (!containerRect) {
	                    return keyword_null;
	                }
	                var xOffset = containerBorderWidth + containerPadding, yOffset = 0,
	                    bodyVerticalOffset = headerHeight * getHeaderFontFactor(style) + itemslicer._headerMarginBottom;
	                x = containerRect.x + xOffset * zoomFactor;
	                y = containerRect.y + yOffset * zoomFactor + (showHeader ? bodyVerticalOffset * zoomFactor : 0);
	                width = (itemslicer.width() - 2 * xOffset) * zoomFactor;
	                height = containerRect.height - 2 * yOffset * zoomFactor - (showHeader ? bodyVerticalOffset * zoomFactor : 0);
	                break;
	            case ITEMSCONTAINER:
	                var bodyRect = getRect(itemslicer, BODY);
	                if (!bodyRect) {
	                    return keyword_null;
	                }
	                if (!itemslicer._needShowScrollbar()) {
	                    return bodyRect;
	                }
	                x = bodyRect.x;
	                y = bodyRect.y;
	                width = bodyRect.width - itemslicer._scrollbarWidth * itemslicer.zoomFactor();
	                height = bodyRect.height;
	                break;
	            case ITEM:
	                if (!containerRect || getLength(exclusiveDatasCache) === 0 || itemIndex >= getLength(exclusiveDatasCache)) {
	                    return keyword_null;
	                }
	                var icRect = getRect(itemslicer, ITEMSCONTAINER);
	                if (!icRect) {
	                    return keyword_null;
	                }
	                var columnCount = itemslicer.columnCount(), itemMargin = itemslicer._itemMargin;
	                width = (icRect.width - (columnCount - 2) * itemMargin * zoomFactor) / columnCount;
	                height = itemslicer.itemHeight() * zoomFactor + 2 * (itemslicer._itemBorderWidth);
	                x = icRect.x + (itemIndex % columnCount) * (width + itemMargin * zoomFactor);
	                y = icRect.y + Math.floor(itemIndex / columnCount) * (height + itemMargin * zoomFactor);
	                break;
	        }
	        return new Sheets.Rect(x, y, width, height);
	    }
	
	    function checkValue(value) {
	        return value > 0;
	    }
	
	    var ItemSlicer = (function () {
	        function propertyChangeCallback(propertyName) {
	            return function (value, oldValue) {
	                refresh(this);
	                this.onPropertyChanged(propertyName, value, oldValue);
	            };
	        }
	
	        function propertyChangeCallbackSorted(propertyName) {
	            return function (value, oldValue) {
	                var self = this;
	                self._sortedItems = getSortedItems(self);
	                refresh(self);
	                self.onPropertyChanged(propertyName, value, oldValue);
	            };
	        }
	
	        function defItemSlicerProperty(propertyName, defaultValue, callback, valueCheck) {
	            if (!callback) {
	                callback = propertyChangeCallback(propertyName);
	            }
	            return Sheets._util._defProperty(propertyName, defaultValue, callback, valueCheck);
	        }
	
	       
	        
	        function ItemSlicer(name, slicerData, columnName) {
	            var self = this;
	            self.name(name, false);
	           
	            self._container = keyword_null;
	            self._containerPadding = 6;
	            self._containerBorderWidth = 1;
	            self._fontSize = 14;
	           
	            self._header = keyword_null;
	            self._headerHeight = 27;
	            self._headerMarginBottom = 5;
	            self._caption = keyword_null;
	            self._clearFilter = keyword_null;
	            self._clearFilterWidth = 28;
	            self._clearFilterHeight = 25;
	            self._clearFilterTop = 3;
	            self._clearFilterRight = 0;
	            self._isFiltered = false;
	            self._captionTop = 3;
	           
	            self._body = keyword_null;
	            self._tb = keyword_null;
	            self._tr = keyword_null;
	            self._td1 = keyword_null;
	            self._td2 = keyword_null;
	            self._itemsContainer = keyword_null;
	            self._itemsContainerWidth = 0;
	            self._itemsContainerHeight = 0;
	            self._scrollbar = keyword_null;
	            self._tableBorderSpacing = 2;
	            self._items = [];
	            self._itemsSet = {};
	            self._itemBorderWidth = 1;
	            self._itemVerticalPadding = 1;
	            self._itemHorizontalPadding = 6;
	            self._itemMargin = 2;
	            self._scrollbarWidth = 17;
	            self._scrollbarValue = 0;
	           
	            self._clearFilterNormalBackColor = WHITE;
	            self._clearFilterHoveredBackColor = '#F9E578';
	            self._clearFilterActivedForeColor = 'red';
	            self._clearFilterNonActivedForeColor = '#B0ADB0';
	           
	            self._isMouseDownOnItem = false;
	            self._isMouseDownOnScrollbar = false;
	            self._selectingItemIndexes = [];
	            self._filteringItemIndexes = [];
	            self._activeItemIndex = 0;
	            self._sortedItems = [];
	            self._unSelectedItemIndexes = [];
	            self._noDataItemIndexes = [];
	            self._exclusiveDataTexts = [];
	            self._dataTexts = [];
	
	            self.slicerData = slicerData;
	            self.columnName = columnName;
	            self.data = slicerData.getData(columnName);
	            self.exclusiveDatas = slicerData.getExclusiveData(columnName);
	            self.slicerData.attachListener(self);
	            self._onDataLoaded();
	        }
	
	        ItemSlicer.getDefaultStyle = function () {
	            var createItemSlicerStyleInfo = function (backColor, foreColor, font, borderLeft, borderTop, borderRight, borderBottom, textDecoration) {
	                var styleItemSlicerInfo = {};
	                styleItemSlicerInfo[BACK_COLOR] = backColor;
	                styleItemSlicerInfo[FORE_COLOR] = foreColor;
	                styleItemSlicerInfo[FONT] = font;
	                styleItemSlicerInfo[BORDER_LEFT] = borderLeft;
	                styleItemSlicerInfo[BORDER_TOP] = borderTop;
	                styleItemSlicerInfo[BORDER_RIGHT] = borderRight;
	                styleItemSlicerInfo[BORDER_BOTTOM] = borderBottom;
	                styleItemSlicerInfo[TEXT_DECORATION] = textDecoration;
	                return styleItemSlicerInfo;
	            };
	            var createItemSlicerBorder = function (borderWidth, borderStyle, borderColor) {
	                var border = {};
	                border[BORDER_WIDTH] = borderWidth;
	                border[BORDER_STYLE] = borderStyle;
	                border[BORDER_COLOR] = borderColor;
	                return border;
	            };
	            var border1 = createItemSlicerBorder(1, SOLID, '#808080'),
	                border2 = createItemSlicerBorder(0, '', ''),
	                border3 = createItemSlicerBorder(1, SOLID, '#999999'),
	                border4 = createItemSlicerBorder(1, SOLID, '#CCCCCC'),
	                border5 = createItemSlicerBorder(1, SOLID, '#E0E0E0'),
	                styleInfo = createItemSlicerStyleInfo('#F9E36F', BLACK, DEFAULT_FONT, border3, border3, border3, border3);
	
	            var style = {};
	            style[WHOLE_SLICER_STYLE] = createItemSlicerStyleInfo(WHITE, BLACK, DEFAULT_FONT, border1, border1, border1, border1);
	            style[HEADER_STYLE] = createItemSlicerStyleInfo(WHITE, BLACK, 'bold 11pt calibri', border2, border2, border2, createItemSlicerBorder(1, SOLID, '#A6A6A6'));
	            style[SELECTED_ITEM_WITH_DATA_STYLE] = createItemSlicerStyleInfo('#BFBFBF', BLACK, DEFAULT_FONT, border3, border3, border3, border3);
	            style[SELECTED_ITEM_WITH_NODATA_STYLE] = createItemSlicerStyleInfo('#D9D9D9', BLACK, DEFAULT_FONT, border4, border4, border4, border4);
	            style[UNSELECTED_ITEM_WITH_DATA_STYLE] = createItemSlicerStyleInfo(WHITE, BLACK, DEFAULT_FONT, border4, border4, border4, border4);
	            style[UNSELECTED_ITEM_WITH_NODATA_STYLE] = createItemSlicerStyleInfo(WHITE, '#959595', DEFAULT_FONT, border5, border5, border5, border5);
	            style[HOVERED_SELECTED_ITEM_WITH_DATA_STYLE] = styleInfo;
	            style[HOVERED_SELECTED_ITEM_WITH_NODATA_STYLE] = styleInfo;
	            style[HOVERED_UNSELECTED_ITEM_WITH_DATA_STYLE] = styleInfo;
	            style[HOVERED_UNSELECTED_ITEM_WITH_NODATA_STYLE] = styleInfo;
	
	            return style;
	        };
	
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	
	           
	        var propertiesInfo = [
	                [NAME],
	                [WIDTH, 180],
	                [HEIGHT, 210],
	                ['captionName', ''],
	                ['columnCount', 1, keyword_null, checkValue],
	                ['itemHeight', 21, keyword_null, checkValue],
	                ['showHeader', true],
	                ['sortState', 1 , propertyChangeCallbackSorted('sortState')],
	                ['showNoDataItems', true, propertyChangeCallbackSorted('showNoDataItems')],
	                ['showNoDataItemsInLast', true, propertyChangeCallbackSorted('showNoDataItemsInLast')],
	                ['visuallyNoDataItems', true, propertyChangeCallbackSorted('visuallyNoDataItems')],
	                [STYLE, ItemSlicer.getDefaultStyle(), function (value, oldValue) {
	                    applyStyle(this, value);
	                    refresh(this);
	                    this.onPropertyChanged('visuallyNoDataItems', value, oldValue);
	                }],
	                ['zoomFactor', 1, keyword_null, checkValue],
	                ['isLocked'],
	                ['disableResizingAndMoving']
	            ];
	        var proto = {
	            constructor: ItemSlicer,
	            _onDataLoaded: function () {
	                var self = this;
	                self._dataTexts = getDataTexts(self.data);
	                self._exclusiveDataTexts = getDataTexts(self.exclusiveDatas);
	                self._container = createContainer(self);
	                self.captionName(self.columnName, false);
	                attachEvents(self);
	                self.onFiltered();
	                applyStyle(self, self.style());
	                refresh(self);
	            },
	           
	            
	            getDOMElement: function () {
	                return this._container;
	            },
	            _orderBySortState: function (arr, sortState) {
	                var result = [];
	                if (sortState !== 0 
	                ) {
	                    var quickSortResult = Slicers._SortHelper.quickSort(arr);
	                    for (var i = 0; i < getLength(quickSortResult); i++) {
	                        result[i] = quickSortResult[i].value;
	                    }
	                    if (sortState === 2 
	                    ) {
	                        result.reverse();
	                    }
	                    return result;
	                }
	            },
	           
	            _needShowScrollbar: function () {
	                var self = this, exclusiveDataTexts = self._exclusiveDataTexts;
	                var visibleItemsCount = self.showNoDataItems() ? getLength(exclusiveDataTexts) : getLength(exclusiveDataTexts) - getLength(self._noDataItemIndexes);
	                var visibleItemsTotalHeight = Math.ceil(visibleItemsCount / self.columnCount()) * (self.itemHeight() + 2 * (self._itemBorderWidth + self._itemVerticalPadding) + self._itemMargin);
	                return visibleItemsTotalHeight > self._itemsContainerHeight;
	            },
	            _doScroll: function (e, args) {
	                this._scrollTo(e, args);
	            },
	            _scrollTo: function (e, args) {
	                var self = this,
	                    newValue = args.newValue;
	                if (newValue !== self._scrollbarValue && newValue <= self._scrollbarObj._maximum()) {
	                    self._scrollbarValue = newValue;
	                    refreshScrollbar(self);
	                    refreshItems(self);
	                }
	            },
	           
	            onDataChanged: function () {
	               
	                resetData(this);
	            },
	            onRowsChanged: function () {
	                resetData(this);
	            },
	            onColumnNameChanged: function (oldName, newName) {
	                var self = this;
	                if (self.columnName !== oldName || !self._caption) {
	                    return;
	                }
	                self.columnName = newName;
	                self.captionName(newName, false);
	                $(self._caption).text(newName);
	            },
	            onColumnRemoved: function (columnName) {
	                var self = this;
	                if (columnName !== self.columnName) {
	                    return;
	                }
	               
	                self.slicerData.doUnfilter(columnName);
	                detachEvents(self);
	                $(self._container).remove();
	                self._container = keyword_null;
	               
	            },
	            onFiltered: function () {
	                var self = this,
	                    slicerData = self.slicerData,
	                    columnName = self.columnName;
	               
	                self._sortedItems = getSortedItems(self);
	                self._noDataItemIndexes = slicerData.getFilteredOutIndexes(columnName, 2 
	                );
	                self._unSelectedItemIndexes = slicerData.getFilteredOutIndexes(columnName, 1 
	                );
	               
	                refresh(self);
	            },
	            _hitInReservedArea: function (event) {
	                var info = hitTest(this, event);
	                if (info) {
	                    var mark = info.mark;
	                    return mark === 5  ||
	                        mark === 6  ||
	                        mark === 8  ||
	                        mark === 4 ;
	                }
	                return false;
	            },
	           
	            _doMouseDown: function (event) {
	                var self = this,
	                    hitInfo = hitTest(self, event);
	                if (!hitInfo) {
	                    return;
	                }
	                if (hitInfo[MARK] === 8 ) {
	                    self._isMouseDownOnScrollbar = true;
	                }
	                if (hitInfo[MARK] === 5 ) {
	                    self._filteringItemIndexes = [];
	                    self._isMouseDownOnItem = true;
	                    if (event.ctrlKey) {
	                        mouseDownOnItemWithCtrl(self, hitInfo);
	                    } else if (event.shiftKey) {
	                        mouseDownOnItemWithShift(self, hitInfo);
	                    } else {
	                        mouseDownOnItemWithoutKeyDown(self, hitInfo);
	                    }
	                }
	                preRefreshItemsStyle(self, self._selectingItemIndexes);
	               
	                if (hitInfo[MARK] === 5  ||
	                    hitInfo[MARK] === 6  ||
	                    hitInfo[MARK] === 8  ||
	                    (hitInfo[MARK] === 4  &&
	                        self._isFiltered)) {
	                    event.stopPropagation();
	                }
	            },
	            _doMouseUp: function (event) {
	                var self = this,
	                    hitInfo = hitTest(self, event);
	                if (!hitInfo) {
	                    return;
	                }
	                var slicerData = self.slicerData,
	                    selectingItemIndexes = self._selectingItemIndexes,
	                    hasDoFilter = false;
	                if (hitInfo[MARK] === 4 
	                ) {
	                    if (self._isFiltered) {
	                        slicerData.doUnfilter(self.columnName);
	                        changeClearFilterColor(self, 0 
	                        );
	                        hasDoFilter = true;
	                    }
	                } else if (selectingItemIndexes && getLength(selectingItemIndexes) > 0 && !self._isCtrlKeyDown && !self._isShiftKeyDown) {
	                    slicerData.doFilter(self.columnName, {
	                        exclusiveRowIndexes: self._filteringItemIndexes
	                    });
	                    hasDoFilter = true;
	                }
	                self._isMouseDownOnItem = false;
	                self._isMouseDownOnScrollbar = false;
	                if (hasDoFilter) {
	                    self._selectingItemIndexes = [];
	                    self._filteringItemIndexes = [];
	                }
	            },
	            _doMouseMove: function (event) {
	                var self = this, hitInfo = self._hitInfo,
	                    oldHitInfo = hitInfo ? new SlicerHitInfo(hitInfo[MARK], hitInfo[ITEM_VALUE]) : keyword_null,
	                    newHitInfo = hitTest(self, event),
	                    exclusiveDataTexts = self._exclusiveDataTexts,
	                    filteringItemIndexes = self._filteringItemIndexes;
	                if (!newHitInfo) {
	                    return;
	                }
	               
	                if (oldHitInfo && oldHitInfo[MARK] === newHitInfo[MARK] && (oldHitInfo[MARK] !== 5  ||
	                        oldHitInfo[ITEM_VALUE] === newHitInfo[ITEM_VALUE])) {
	                    return;
	                }
	               
	                if (!self._isMouseDownOnItem) {
	                    self._hitInfo = newHitInfo;
	                    clearOldHover(self, oldHitInfo);
	                    setNewHover(self, newHitInfo);
	                    return;
	                }
	               
	                if (newHitInfo[MARK] === 5 ) {
	                    var hitItemIndex = exclusiveDataTexts.indexOf(newHitInfo[ITEM_VALUE]);
	                    var noDataItemIndexes = self._noDataItemIndexes, i, length, index, item;
	                    if (arrayHelper._contains(filteringItemIndexes, hitItemIndex)) {
	                        var sortedItems = self._sortedItems;
	                        var index1 = sortedItems.indexOf(exclusiveDataTexts[self._activeItemIndex]),
	                            index2 = sortedItems.indexOf(newHitInfo[ITEM_VALUE]);
	                        var start = Math.min(index1, index2);
	                        var end = Math.max(index1, index2);
	                        var shouldUnSelectIndexes = [];
	                        for (i = 0, length = getLength(filteringItemIndexes); i < length; i++) {
	                            var exclusiveRowIndex = filteringItemIndexes[i];
	                            index = sortedItems.indexOf(exclusiveDataTexts[exclusiveRowIndex]);
	                            if (index > end || index < start) {
	                                shouldUnSelectIndexes.push(exclusiveRowIndex);
	                            }
	                        }
	                        for (i = 0, length = getLength(shouldUnSelectIndexes); i < length; i++) {
	                            index = shouldUnSelectIndexes[i];
	                            item = getItemElement(self, exclusiveDataTexts[index]);
	                            if (arrayHelper._contains(noDataItemIndexes, index)) {
	                                applyItemStyle(self, item, 4  | 16 
	                                );
	                            } else {
	                                applyItemStyle(self, item, 4  | 8 
	                                );
	                            }
	                            arrayHelper._remove(filteringItemIndexes, index);
	                        }
	                    } else {
	                        item = getItemElement(self, exclusiveDataTexts[hitItemIndex]);
	                        if (arrayHelper._contains(noDataItemIndexes, hitItemIndex)) {
	                            applyItemStyle(self, item, 2  | 16 
	                            );
	                        } else {
	                            applyItemStyle(self, item, 2  | 8 
	                            );
	                        }
	                        arrayHelper._add(filteringItemIndexes, hitItemIndex);
	                    }
	                }
	                self._hitInfo = newHitInfo;
	            },
	            _doMouseLeave: function () {
	                var self = this,
	                    hitInfo = self._hitInfo;
	                var oldHitInfo = hitInfo ? new SlicerHitInfo(hitInfo[MARK], hitInfo[ITEM_VALUE]) : keyword_null;
	                self._hitInfo = keyword_null;
	                clearOldHover(self, oldHitInfo);
	            },
	            _doMouseWheel: function (event) {
	                var hitInfo = hitTest(this, event);
	                if (hitInfo[MARK] === 8 ) {
	                    event.stopPropagation();
	                    return true;
	                }
	                return false;
	            },
	           
	            _doKeyDown: function (event) {
	                var self = this;
	                if (event.keyCode === 17  && !self._isCtrlKeyDown) {
	                    self._isCtrlKeyDown = true;
	                }
	                if (event.keyCode === 16  && !self._isShiftKeyDown) {
	                    self._isShiftKeyDown = true;
	                }
	            },
	            _doKeyUp: function (event) {
	                var self = this,
	                    slicerData = self.slicerData;
	                if (event.keyCode === 17  && self._isCtrlKeyDown) {
	                    self._isCtrlKeyDown = false;
	                }
	                if (event.keyCode === 16  && self._isShiftKeyDown) {
	                    self._isShiftKeyDown = false;
	                }
	                if (!self._isCtrlKeyDown && !self._isShiftKeyDown && getLength(self._selectingItemIndexes) > 0) {
	                    slicerData.doFilter(self.columnName, {
	                        exclusiveRowIndexes: self._filteringItemIndexes
	                    });
	                    self._selectingItemIndexes = [];
	                    self._filteringItemIndexes = [];
	                }
	            },
	            onPropertyChanged: function (name, value, oldValue) {
	                var self = this;
	                if (self.slicerData._getSheet) {
	                    var sheet = self.slicerData._getSheet();
	                    sheet._modelManager._backupSlicerChanged(self, name, oldValue);
	                }
	            }
	        };
	        for (var j = 0, len = getLength(propertiesInfo); j < len; j++) {
	            proto[propertiesInfo[j][0]] = defItemSlicerProperty(propertiesInfo[j][0], propertiesInfo[j][1], propertiesInfo[j][2], propertiesInfo[j][3]);
	        }
	
	        $.extend(ItemSlicer.prototype, proto);
	        return ItemSlicer;
	    })();
	    var SlicerHitInfo = (function () {
	        function SlicerHitInfo(mark, itemValue) {
	            var self = this;
	            self[MARK] = mark === keyword_undefined ? keyword_null : mark;
	            self[ITEM_VALUE] = itemValue === keyword_undefined ? keyword_null : itemValue;
	        }
	
	        return SlicerHitInfo;
	    })();
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	
	   
	    function initDataSource(tableSlicerData, data, columnNames) {
	        var table = tableSlicerData._table,
	            sheet = table._sheet,
	            dataRange = table.dataRange(),
	            lastRow = dataRange.row + dataRange.rowCount - 1,
	            lastCol = dataRange.col + dataRange.colCount - 1;
	        for (var r = dataRange.row; r <= lastRow; r++) {
	            var rDatas = [];
	            data.push(rDatas);
	            for (var c = dataRange.col; c <= lastCol; c++) {
	                rDatas.push({
	                    value: sheet.getValue(r, c),
	                    text: sheet.getText(r, c)
	                });
	            }
	        }
	        for (c = 0; c < dataRange.colCount; c++) {
	            var columnName = table.getColumnName(c) || '';
	            columnNames.push(columnName);
	        }
	    }
	
	    function initFilterInfo(tableSlicerData, superFunction) {
	        var sheet = tableSlicerData._sheet,
	            rowFilter = tableSlicerData._table.rowFilter();
	        sheet.suspendPaint();
	        var filteredColumns = (rowFilter && rowFilter._filteredColumns) || [];
	        for (var i = 0; i < getLength(filteredColumns); i++) {
	            onFilteredByTable(tableSlicerData, superFunction, [filteredColumns[i]]);
	        }
	        sheet.resumePaint();
	    }
	
	    function onFilteredByTable(tableSlicerData, superFunction, columns) {
	        for (var c = 0; c < columns.length; c++) {
	            var table = tableSlicerData._table,
	                rowFilter = tableSlicerData._rowFilter,
	                filteredCol = columns[c] - table.range().col;
	            var range = table.dataRange();
	            var filteredSheetCol = filteredCol + range.col;
	           
	            var columnName = tableSlicerData.columnNames[filteredCol];
	            var exclusiveIndexes = [],
	                exclusiveSet = {};
	            if (arrayHelper._contains(rowFilter._filteredColumns, filteredSheetCol)) {
	                var filteredRows = [];
	                for (var r = range.row; r < range.row + range.rowCount; r++) {
	                    if (!rowFilter._isRowfilteredOutByColumnForSlicer(r, filteredSheetCol)) {
	                        filteredRows.push(r);
	                    }
	                }
	                for (var j = 0; j < getLength(filteredRows); j++) {
	                    var rowIndex = filteredRows[j] - range.row;
	                    var exclusiveIndex = tableSlicerData.getExclusiveRowIndex(columnName, rowIndex);
	                    if (!exclusiveSet[exclusiveIndex]) {
	                        exclusiveSet[exclusiveIndex] = true;
	                        exclusiveIndexes.push(exclusiveIndex);
	                    }
	                }
	            } else {
	                var length = getLength(tableSlicerData.getExclusiveData(columnName));
	                for (var k = 0; k < length; k++) {
	                    exclusiveIndexes.push(k);
	                }
	            }
	
	            if (!isArrayEquals(getFilteredExclusiveRowIndexesBySelf(tableSlicerData, columnName), exclusiveIndexes)) {
	                superFunction.prototype.doFilter.call(tableSlicerData, columnName, {exclusiveRowIndexes: exclusiveIndexes});
	                tableSlicerData.onFiltered();
	                tableSlicerData._sheet._invalidate();
	            }
	        }
	    }
	
	    function isArrayEquals(a1, a2) {
	        var isNullOrUndefined = Common._Types._isNullOrUndefined;
	        if (isNullOrUndefined(a1) && isNullOrUndefined(a2)) {    
	            return true;
	        }
	
	        if ((isNullOrUndefined(a1) && !isNullOrUndefined(a2)) ||
	            (!isNullOrUndefined(a1) && isNullOrUndefined(a2)) ||
	            (!isNullOrUndefined(a1) && !isNullOrUndefined(a2) && (!($_isArray(a1)) || !($_isArray(a2)))) ||
	            a1.length !== a2.length) {
	            return false;
	        }
	
	        for (var i = 0; i < a1.length; i++) {
	            if (a1[i] !== a2[i]) {
	                return false;
	            }
	        }
	        return true;
	    }
	
	    function getFilteredExclusiveRowIndexesBySelf(tableSlicerData, columnName) {
	        var exclusiveData = tableSlicerData.getExclusiveData(columnName),
	            filteredOutBySelfIndexes = tableSlicerData.getFilteredOutIndexes(columnName, 1 
	            );
	        var exclusiveIndexes = [];
	        for (var i = 0; i < getLength(exclusiveData); i++) {
	            if (arrayHelper._contains(filteredOutBySelfIndexes, i)) {
	                exclusiveIndexes.push(i);
	            }
	        }
	        return exclusiveIndexes;
	    }
	
	    var TableSlicerData = (function (_super) {
	        $.inherit(TableSlicerData, _super);
	
	       
	        
	        function TableSlicerData(table) {
	            var self = this, data = [], columnNames = [], rowFilter = table.rowFilter();
	            self._table = table;
	            self._sheet = table._sheet;
	            self._rowFilter = rowFilter;
	            self._savedSlicers = keyword_null;
	            initDataSource(self, data, columnNames);
	            _super.call(self, data, columnNames);
	            initFilterInfo(self, _super);
	            if (rowFilter) {
	                rowFilter.filterHandler = function (args) {
	                    onFilteredByTable(self, _super, args.columns);
	                };
	            }
	        }
	
	        var proto = {
	            constructor: TableSlicerData,
	            _getSheet: function () {
	                return this._sheet;
	            },
	           
	            
	            getTable: function () {
	                return this._table;
	            },
	           
	            
	            doFilter: function (columnName, conditional, isPreview) {
	                var self = this, sheet = self._sheet, table = self._table,
	                    rowFilter = self._rowFilter,
	                    ranges = conditional.ranges,
	                    exclusiveRowIndexes = conditional.exclusiveRowIndexes,
	                    isFilterByIndex = !!exclusiveRowIndexes;
	                sheet._modelManager._backupSlicerChanged(self, UNDOFILTER, {
	                    columnName: columnName,
	                    oldValue: self.getFilteredIndexes(columnName)
	                });
	                var colIndex = self.getColumnIndex(columnName);
	                if (colIndex < 0 || !(isFilterByIndex || ranges)) {
	                    return;
	                }
	                if (isPreview) {
	                    _super.prototype.doFilter.call(self, columnName, conditional, isPreview);
	                } else {
	                    var columnData = isFilterByIndex ? self.getExclusiveData(columnName) : self.getData(columnName);
	                    var filteredRowIndexes = [];
	                    if (isFilterByIndex) {
	                        filteredRowIndexes = exclusiveRowIndexes;
	                    } else {
	                        var sortedColumnDataCache = self._getSortedColumnDataCache(),
	                            sorted2DataMapping = self._getSorted2DataMapping();
	                        if (!sortedColumnDataCache[colIndex]) {
	                            self._sortOneCol(colIndex);
	                        }
	                        var sortedData = sortedColumnDataCache[colIndex];
	                        for (var rangeIndex = 0; rangeIndex < getLength(ranges); rangeIndex++) {
	                            var range = ranges[rangeIndex];
	                            var startEnd = self._getStartEndIndex(sortedData, range);
	                            for (var k = startEnd.start; k <= startEnd.end; k++) {
	                                filteredRowIndexes.push(sorted2DataMapping[colIndex][k]);
	                            }
	                        }
	                    }
	                    sheet.suspendPaint();
	                    var sheetColIndex = table.startColumn() + colIndex;
	                   
	                    if (rowFilter) {
	                        rowFilter.removeFilterItems(sheetColIndex, true);
	                    }
	                    sheet._refreshObjectsAboveSheet();
	                    if (ConditionalFormatting) {
	                        for (var j = 0; j < getLength(filteredRowIndexes); j++) {
	                            var con = new ConditionalFormatting._createCondition(2, 0 
	                                , columnData[filteredRowIndexes[j]]);
	                            con.useWildCards(false);
	                            rowFilter && rowFilter.addFilterItem(sheetColIndex, con);
	                        }
	                    }
	                    _super.prototype._doFilterInternal.call(self, columnName, conditional);
	                    var filtered = [], filteredSet = {};
	                    self._getFilteredExclusiveIndexes(columnName, filtered, filteredSet);
	                    if (rowFilter) {
	                        rowFilter.filter(sheetColIndex, true);
	                        rowFilter.onFilter(rowFilter._getFilterArgs(0 
	                            , [sheetColIndex]));
	                    }
	                    self.onFiltered();
	                    sheet.resumePaint();
	                }
	            },
	           
	            
	            doUnfilter: function (columnName) {
	               
	                var self = this, sheet = self._sheet, table = self._table;
	                var colIndex = self.getColumnIndex(columnName);
	                var rowFilter = self._rowFilter;
	                if (colIndex !== -1) {
	                    sheet._modelManager._backupSlicerChanged(self, UNDOFILTER, {
	                        columnName: columnName,
	                        oldValue: self.getFilteredIndexes(columnName)
	                    });
	                    var sheetColIndex = table.startColumn() + colIndex;
	                    rowFilter.removeFilterItems(sheetColIndex);
	                    _super.prototype._doUnfilterInternal.call(self, columnName);
	                    rowFilter.unfilter(sheetColIndex, true);
	                    rowFilter.onFilter(rowFilter._getFilterArgs(0 
	                        , [sheetColIndex]));
	                    self.onFiltered();
	                    self._sheet._invalidate();
	                }
	            },
	           
	            
	            refresh: function () {
	                var self = this, data = [], columnNames = [];
	                initDataSource(self, data, columnNames);
	                self._setDataSource(data, columnNames);
	                self._notifyListeners();
	            },
	            onColumnNameChanged: function (oldName, newName) {
	                var self = this;
	                _super.prototype.onColumnNameChanged.call(self, oldName, newName);
	                self._sheet.slicers.all().forEach(function (slicer) {
	                    slicer.columnName(newName);
	                });
	            },
	            onRowsAdded: function (row, rowCount) {
	                var self = this,
	                    sheet = self._sheet,
	                    table = self._table,
	                    dataRange = table.dataRange();
	                _super.prototype.onRowsAdded.call(self, row, rowCount, true);
	                for (var i = row; i < row + rowCount; i++) {
	                    for (var j = 0; j < getLength(self.columnNames); j++) {
	                        self.data[i][j] = {
	                            value: sheet.getValue(dataRange.row + i, dataRange.col + j),
	                            text: sheet.getText(dataRange.row + i, dataRange.col + j)
	                        };
	                    }
	                }
	                self._setDataSource(self.data, self.columnNames);
	                self._notifyListeners(row, rowCount, true, 'onRowsChanged');
	            },
	            onRowsRemoved: function (row, rowCount) {
	                _super.prototype._onRowsRemovedCore.call(this, row, rowCount, false);
	            },
	            onColumnsAdded: function (col, colCount) {
	                var self = this,
	                    sheet = self._sheet,
	                    table = self._table,
	                    dataRange = table.dataRange();
	                var data = self.data,
	                    columnNames = self.columnNames;
	                for (var i = 0; i < getLength(data); i++) {
	                    for (var j = col; j < col + colCount; j++) {
	                        data[i].splice(j, 0, {
	                            value: sheet.getValue(dataRange.row + i, dataRange.col + j),
	                            text: sheet.getText(dataRange.row + i, dataRange.col + j)
	                        });
	                    }
	                }
	                for (var k = col; k < col + colCount; k++) {
	                    var columnName = table.getColumnName(k) || '';
	                    columnNames.splice(k, 0, columnName);
	                }
	                self._setDataSource(data, columnNames);
	            },
	            onColumnsRemoved: function (col, colCount) {
	                var self = this, sheet = self._sheet, tableName = self._table.name();
	                var columnNames = self.columnNames;
	                var shouldRemoveColumnNames = [];
	                for (var i = col; i < col + colCount; i++) {
	                    shouldRemoveColumnNames.push(columnNames[i]);
	                }
	                _super.prototype.onColumnsRemoved.call(self, col, colCount);
	
	                var slicers = sheet && sheet.slicers;
	                shouldRemoveColumnNames.forEach(function (columnName) {
	                    slicers.all(tableName, columnName).forEach(function (slicer) {
	                        slicers.remove(slicer.name());
	                    });
	                });
	            },
	            onTableRemoved: function (table) {
	                var self = this;
	                if (!table || table !== self._table) {
	                    return;
	                }
	                self._savedSlicers = [];
	                var sheet = self._sheet,
	                    slicers = sheet.slicers,
	                    tableName = table.name();
	                slicers.all(tableName).forEach(function (slicer) {
	                    self._savedSlicers.push(slicer);
	                    slicers.remove(slicer.name());
	                });
	                if (slicers) {
	                    removeSlicerData(slicers, self);
	                }
	                self._listeners = [];
	            },
	            onTableAdded: function (table) {
	                var self = this,
	                    sheet = self._sheet,
	                    slicers = sheet.slicers;
	                if (slicers && table && table._hasSlicerData()) {
	                    addSlicerData(slicers, table.getSlicerData());
	                }
	                var savedSlicers = self._savedSlicers || [];
	                savedSlicers.forEach(function (slicer) {
	                    var name = slicer.name(), tableName = slicer._slicerData._table.name(),
	                        columnName = slicer.columnName(), style = slicer.style();
	                    slicers.add(name, tableName, columnName, style);
	                });
	            }
	        };
	        $.extend(TableSlicerData.prototype, proto);
	
	        return TableSlicerData;
	    })(Slicers.GeneralSlicerData);
	
	    if (Tables) {
	        $.extend(Tables.Table.prototype, {
	           
	            
	            getSlicerData: function () {
	                var self = this;
	                if (!self._slicerData) {
	                    self._slicerData = new TableSlicerData(self);
	                }
	                return self._slicerData;
	            }
	        });
	    }
	
	    function canDoFilter(tableitemslicer) {
	        var table = tableitemslicer._table,
	            sheet = table._sheet,
	            rowFilter = table && table.rowFilter();
	        return !sheet.options.isProtected || (rowFilter && rowFilter._canDoFilter(sheet));
	    }
	
	    var TableItemSlicer = (function (_super) {
	        $.inherit(TableItemSlicer, _super);
	
	        function TableItemSlicer(name, slicerData, columnName) {
	            _super.call(this, name, slicerData, columnName);
	            this.isSelected(false);
	        }
	
	        var proto = {
	            constructor: TableItemSlicer,
	            isSelected: defProperty('isSelected', false),
	            sheet: defProperty('sheet'),
	            slicer: defProperty('slicer'),
	            _onDataLoaded: function () {
	                var self = this, slicerData = self.slicerData;
	                if (slicerData && slicerData instanceof TableSlicerData) {
	                    self.sheet(slicerData._getSheet());
	                    self._table = slicerData.getTable();
	                }
	                _super.prototype._onDataLoaded.call(this);
	            },
	            onColumnRemoved: function (columnName) {
	                var self = this, sheet = self.sheet(), table = self._table, slicerData = self.slicerData;
	                if (columnName !== self.columnName) {
	                    return;
	                }
	                var filteredOutIndexes = slicerData.getFilteredOutIndexes(columnName, 1 
	                );
	                if (getLength(filteredOutIndexes) !== 0) {
	                    slicerData.doUnfilter(columnName);
	                }
	                if (sheet && table) {
	                    sheet._floatingObjectModel._remove(self.name());
	                }
	            },
	            _orderBySortState: function (arr, sortState) {
	                var self = this, slicerData = self.slicerData,
	                    col = slicerData.getColumnIndex(self.columnName),
	                    table = self._table,
	                    dataRange = table.dataRange();
	                var result = [];
	                if (sortState !== 0 
	                ) {
	                    var exclusiveValues = [];
	                   
	                    var dataSheet = slicerData._getSheet();
	                    for (var i = 0; i < getLength(arr); i++) {
	                        var rowIndexes = slicerData.getRowIndexes(self.columnName, i);
	                        exclusiveValues.push(dataSheet.getValue(dataRange.row + rowIndexes[0], dataRange.col + col));
	                    }
	                    var sortedExclusiveValues = Slicers._SortHelper.quickSort(exclusiveValues);
	                    for (var j = 0; j < getLength(sortedExclusiveValues); j++) {
	                        result[j] = arr[sortedExclusiveValues[j].index];
	                    }
	                    if (sortState === 2 
	                    ) {
	                        result.reverse();
	                    }
	                } else {
	                    return arr;
	                }
	                return result;
	            },
	
	           
	            _doScroll: function (event, args) {
	                var self = this,
	                    sheet = self.sheet(),
	                    slicer = self.slicer();
	                if (!slicer || !sheet._canEditFloatingObject(slicer)) {
	                    args.newValue = args.oldValue;
	                }
	                var tableItemSlicers = getTableItemSlicers(slicer);
	                for (var i = 0; i < getLength(tableItemSlicers); i++) {
	                    _super.prototype._scrollTo.call(tableItemSlicers[i], event, args);
	                }
	            },
	            _doMouseDown: function (event) {
	                var self = this,
	                    sheet = self.sheet(),
	                    slicer = self.slicer();
	                if (!slicer || !sheet._canEditFloatingObject(slicer)) {
	                    return;
	                }
	                var hitInfo = hitTest(self, event);
	                if (!canDoFilter(self) && (hitInfo[MARK] === 5  ||
	                        hitInfo[MARK] === 6  ||
	                        hitInfo[MARK] === 8 
	                    )) {
	                    event.stopPropagation();
	                    return;
	                }
	                var tableItemSlicers = getTableItemSlicers(slicer);
	                for (var i = 0; i < getLength(tableItemSlicers); i++) {
	                    _super.prototype._doMouseDown.call(tableItemSlicers[i], event);
	                }
	            },
	            _doMouseUp: function (event) {
	                var self = this,
	                    sheet = self.sheet(),
	                    slicer = self.slicer();
	                if (!slicer || !sheet._canEditFloatingObject(slicer) || !canDoFilter(self)) {
	                    return;
	                }
	                var hitInfo = hitTest(self, event);
	                if (!hitInfo) {
	                    return;
	                }
	                var slicerData = self.slicerData,
	                    selectedItemIndexes = self._selectingItemIndexes,
	                    filteringItemIndexes = self._filteringItemIndexes,
	                    exclusiveData = slicerData.getExclusiveData(self.columnName),
	                    hasDoFilter = false;
	                var ret = keyword_null;
	                if (hitInfo[MARK] === 4  ||
	                    (hitInfo[MARK] === 5  &&
	                        getLength(filteringItemIndexes) === getLength(exclusiveData) && !self._isCtrlKeyDown && !self._isShiftKeyDown)) {
	                    var value = slicerData.getFilteredIndexes(self.columnName);
	                    ret = sheet._commandManager().execute({
	                        cmd: 'unfilterSlicer',
	                        sheetName: sheet.name(),
	                        slicerData: slicerData,
	                        columnName: self.columnName,
	                        value: value
	                    });
	                    hasDoFilter = true;
	                } else if (selectedItemIndexes && getLength(selectedItemIndexes) > 0 && !self._isCtrlKeyDown && !self._isShiftKeyDown) {
	                    var oldValue = slicerData.getFilteredIndexes(self.columnName);
	                    var newValue = filteringItemIndexes.concat();
	                    ret = sheet._commandManager().execute({
	                        cmd: 'filterSlicer',
	                        sheetName: sheet.name(),
	                        slicerData: slicerData,
	                        columnName: self.columnName,
	                        oldValue: oldValue,
	                        newValue: newValue
	                    });
	                    hasDoFilter = true;
	                }
	                var tableItemSlicers = getTableItemSlicers(slicer);
	                for (var i = 0, length = getLength(tableItemSlicers); i < length; i++) {
	                    var itemSlicer = tableItemSlicers[i];
	                    itemSlicer._isMouseDownOnItem = false;
	                    itemSlicer._isMouseDownOnScrollbar = false;
	                    if (hasDoFilter) {
	                        itemSlicer._selectingItemIndexes = [];
	                        itemSlicer._filteringItemIndexes = [];
	                    }
	                }
	                return !!ret;
	            },
	            _doMouseMove: function (event) {
	                var self = this,
	                    sheet = self.sheet(),
	                    slicer = self.slicer();
	                if (!slicer || self._isMouseDownOnScrollbar || !sheet._canEditFloatingObject(slicer)) {
	                    return;
	                }
	                var tableItemSlicers = getTableItemSlicers(slicer);
	                for (var i = 0; i < getLength(tableItemSlicers); i++) {
	                    _super.prototype._doMouseMove.call(tableItemSlicers[i], event);
	                }
	            },
	            _doMouseLeave: function (event) {
	                var self = this,
	                    sheet = self.sheet(),
	                    slicer = self.slicer();
	                if (!slicer || !sheet._canEditFloatingObject(slicer)) {
	                    return;
	                }
	                var tableItemSlicers = getTableItemSlicers(slicer);
	                for (var i = 0; i < getLength(tableItemSlicers); i++) {
	                    _super.prototype._doMouseLeave.call(tableItemSlicers[i], event);
	                }
	            },
	            _doMouseWheel: function (event) {
	                var self = this;
	                if (_super.prototype._doMouseWheel.call(this, event)) {
	                    return true;
	                }
	                var sheet = self.sheet(),
	                    slicers = sheet.slicers,
	                    selectedSlicers = slicers && slicers._getSelectedSlicers(),
	                    scrollbarObj = self._scrollbarObj;
	                if (selectedSlicers && getLength(selectedSlicers) === 1 && self.isSelected() && self._needShowScrollbar() && scrollbarObj) {
	                    scrollbarObj._scrollContainerMousewheel(event);
	                    event.stopPropagation();
	                    return true;
	                }
	                return false;
	            },
	            _doKeyUp: function (event) {
	                var self = this,
	                    slicerData = self.slicerData,
	                    sheet = self.sheet(),
	                    filteringItemIndexes = self._filteringItemIndexes;
	                if (event.keyCode === 17  && self._isCtrlKeyDown) {
	                    self._isCtrlKeyDown = false;
	                }
	                if (event.keyCode === 16  && self._isShiftKeyDown) {
	                    self._isShiftKeyDown = false;
	                }
	                if (!self._isCtrlKeyDown && !self._isShiftKeyDown && getLength(self._selectingItemIndexes) > 0) {
	                    var rowCount = getLength(slicerData.getExclusiveData(self.columnName));
	                    if (getLength(filteringItemIndexes) === rowCount) {
	                        var value = slicerData.getFilteredIndexes(self.columnName);
	                        sheet._commandManager().execute({
	                            cmd: 'unfilterSlicer',
	                            sheetName: sheet.name(),
	                            slicerData: slicerData,
	                            columnName: self.columnName,
	                            value: value
	                        });
	                    } else {
	                        var oldValue = slicerData.getFilteredIndexes(self.columnName),
	                            newValue = filteringItemIndexes.concat();
	                        sheet._commandManager().execute({
	                            cmd: 'filterSlicer',
	                            sheetName: sheet.name(),
	                            slicerData: slicerData,
	                            columnName: self.columnName,
	                            oldValue: oldValue,
	                            newValue: newValue
	                        });
	                    }
	                    self._selectingItemIndexes = [];
	                    self._filteringItemIndexes = [];
	                }
	            }
	        };
	
	        $.extend(TableItemSlicer.prototype, proto);
	        return TableItemSlicer;
	    })(ItemSlicer);
	
	    function addSlicerData(slicerCollection, slicerData) {
	        var slicerDatas = slicerCollection._slicerDatas;
	        if (!slicerData) {
	            return;
	        }
	        var table = slicerData.getTable();
	        for (var i = 0; i < getLength(slicerDatas); i++) {
	            if (slicerDatas[i].getTable() === table) {
	                return;
	            }
	        }
	        slicerDatas.push(slicerData);
	    }
	
	    function removeSlicerData(slicerCollection, slicerData) {
	        arrayHelper._remove(slicerCollection._slicerDatas, slicerData);
	    }
	
	    function getSlicerData(slicerCollection, tableName) {
	        var slicerDatas = slicerCollection._slicerDatas;
	        for (var i = 0; i < getLength(slicerDatas); i++) {
	            var slicerData = slicerDatas[i], table = slicerData.getTable();
	            if (slicerData && table && table.tableName() === tableName) {
	                return slicerData;
	            }
	        }
	        return keyword_null;
	    }
	
	    function isSlicerNameValid(slicerCollection, name, result) {
	        var error;
	
	        if (!name) {
	            error = sR().Exp_SlicerNameInvalid;
	        } else if (hasOwnProperty(getSlicerSetInSpread(slicerCollection), name)) {
	            error = sR().Exp_SlicerNameExist;
	        }
	
	        if (error && result) {
	            result.error = new Error(error);
	        }
	
	        return !error;
	    }
	
	    function getSlicerSetInSpread(slicerCollection) {
	        var sheet = slicerCollection._sheet;
	        var slicerSet = {};
	        var sheets = sheet && sheet.parent && sheet.parent.sheets;
	        if (sheets) {
	            for (var i = 0; i < getLength(sheets); i++) {
	                var sheetSlicerSet = sheets[i].slicers._getSlicerSet();
	                for (var name in sheetSlicerSet) {
	                    if (hasOwnProperty(sheetSlicerSet, name)) {
	                        slicerSet[name] = sheetSlicerSet[name];
	                    }
	                }
	            }
	        }
	        return slicerSet;
	    }
	
	   
	    
	    var SlicerCollection = (function () {
	        function SlicerCollection(sheet) {
	            var self = this;
	            self._sheet = sheet;
	            self._slicerDatas = [];
	            self._slicerSet = {};
	        }
	
	        SlicerCollection.prototype = {
	            constructor: SlicerCollection,
	           
	           
	            
	            add: function (name, tableName, columnName, style) {
	                var self = this,
	                    sheet = self._sheet,
	                    workbook = sheet.parent;
	                var table = workbook._findTable(tableName);
	                if (!table || table.getColumnIndexInTable(columnName) === -1) {
	                    return keyword_null;
	                }
	                sheet.suspendPaint();
	                var slicer = new Slicer(name, table, columnName) ;
	
	                if (style) {
	                    slicer.style(style);
	                }
	                self._addInternal(slicer);
	                sheet._floatingObjectModel._add(slicer);
	                sheet.resumePaint();
	                return slicer;
	            },
	            _addInternal: function (slicer) {
	                var self = this, sheet = self._sheet;
	                if (!slicer) {
	                    return;
	                }
	                var name = slicer.name(), nameCheckResult = {};
	                if (!isSlicerNameValid(self, name, nameCheckResult)) {
	                    throw nameCheckResult.error;
	                }
	                self._slicerSet[name] = slicer;
	                addSlicerData(self, slicer._getSlicerData());
	                sheet._modelManager._backupSlicerChanged(self, UNDOADD, name);
	            },
	           
	            
	            get: function (name) {
	                if (name === keyword_null || name === keyword_undefined) {
	                    return keyword_null;
	                }
	                return this._slicerSet[name];
	            },
	           
	            
	            remove: function (name) {
	                var self = this, sheet = self._sheet;
	                self._removeInternal(name);
	                sheet._floatingObjectModel._remove(name);
	            },
	            _removeInternal: function (name) {
	                var self = this,
	                    sheet = self._sheet,
	                    slicerSet = self._slicerSet;
	                var slicer = self.get(name);
	                if (!slicer || !hasOwnProperty(slicerSet, name)) {
	                    return;
	                }
	               
	                var slicerData = slicer._getSlicerData();
	                var tableItemSlicers = getTableItemSlicers(slicer);
	                for (var i = 0; i < getLength(tableItemSlicers); i++) {
	                    slicerData.detachListener(tableItemSlicers[i]);
	                }
	                sheet._modelManager._backupSlicerChanged(self, UNDOREMOVE, slicer);
	                delete self._slicerSet[name];
	            },
	            _rename: function (oldName, newName) {
	                var self = this, sheet = self._sheet;
	
	                var nameCheckResult = {};
	
	                if (!isSlicerNameValid(self, newName, nameCheckResult)) {
	                    throw nameCheckResult.error;
	                }
	
	                var slicer = self._slicerSet[oldName];
	                delete self._slicerSet[oldName];
	                self._slicerSet[newName] = slicer;
	
	                sheet._floatingObjectModel._rename(oldName, newName);
	            },
	           
	            
	            clear: function () {
	                var self = this,
	                    sheet = self._sheet;
	                sheet.suspendPaint();
	                $.each(this._slicerSet, function (key, slicer) {
	                    self.remove(slicer.name());
	                });
	                sheet.resumePaint();
	            },
	           
	            
	            all: function (tableName, columnName) {
	                var slicers = [];
	                $.each(this._slicerSet, function (index, slicer) {
	                    if (!tableName || (getTable(slicer).name() === tableName && (!columnName || slicer.columnName() === columnName))) {
	                        slicers.push(slicer);
	                    }
	                });
	                return slicers;
	            },
	            _onGroupChanged: function (start, end, isRow) {
	                FloatingObjects.FloatingObjectCollection.prototype._onGroupChanged.call(this, start, end, isRow);
	            },
	            _getSlicerSet: function () {
	                return this._slicerSet;
	            },
	           
	            _getAutoSlicerName: function (columnName) {
	                var slicerSet = getSlicerSetInSpread(this);
	                if (!hasOwnProperty(slicerSet, columnName)) {
	                    return columnName;
	                }
	                var autoID = 1,
	                    separator = ' ',
	                    baseName = columnName.split(separator)[0];
	                while (hasOwnProperty(slicerSet, baseName + separator + autoID)) {
	                    autoID++;
	                }
	                return baseName + separator + autoID;
	            },
	            _getSelectedSlicers: function () {
	                var self = this, slicerSet = self._slicerSet;
	                if (!slicerSet || Sheets.GC$.isEmptyObject(slicerSet)) {
	                    return [];
	                }
	                var selectedSlicers = [];
	                for (var key in slicerSet) {
	                    if (hasOwnProperty(slicerSet, key)) {
	                        var slicer = slicerSet[key];
	                        if (slicer && slicer.isSelected()) {
	                            selectedSlicers.push(slicer);
	                        }
	                    }
	                }
	                return selectedSlicers;
	            },
	            _mouseWheelSelectedSlicer: function (e) {
	                var self = this, slicers = self._getSelectedSlicers();
	                if (getLength(slicers) !== 1) {
	                    return false;
	                }
	                var itemSlicers = getTableItemSlicers(slicers[0]);
	                if (getLength(itemSlicers) > 0) {
	                    for (var i = 0; i < getLength(itemSlicers); i++) {
	                        itemSlicers[i]._doMouseWheel(e);
	                    }
	                    return true;
	                }
	                return false;
	            },
	            toJSON: function () {
	                var self = this, jsonData = [], slicerSet = self._slicerSet;
	                if (slicerSet && !Sheets.GC$.isEmptyObject(slicerSet)) {
	                    for (var item in slicerSet) {
	                        if (hasOwnProperty(slicerSet, item)) {
	                            jsonData.push(slicerSet[item].toJSON());
	                        }
	                    }
	                }
	                return jsonData;
	            },
	            fromJSON: function (jsonData) {
	                if (!jsonData || getLength(jsonData) === 0) {
	                    return;
	                }
	                var self = this, sheet = self._sheet, workbook = sheet.parent;
	                self._slicerSet = {};
	                for (var i = 0; i < getLength(jsonData); i++) {
	                    var tableName = jsonData[i].tableName,
	                        columnName = jsonData[i].columnName;
	                    if (tableName && columnName) {
	                        var table = workbook._findTable(tableName);
	                        if (table && table.getColumnIndexInTable(columnName) !== -1) {
	                            var slicer = new Slicer(jsonData[i].name, table, columnName);
	                            slicer.sheet(sheet);
	                            slicer.fromJSON(jsonData[i]);
	                            sheet.slicers._addInternal(slicer);
	                            sheet._floatingObjectModel._add(slicer);
	                        }
	                    }
	                }
	            }
	        };
	        return SlicerCollection;
	    })();
	
	    function onNameChanged(tableSlicer, oldName, newName) {
	        var slicerData = tableSlicer._slicerData;
	        if (slicerData) {
	            var sheet = slicerData._getSheet();
	            var slicers = sheet.slicers;
	            slicers.all().forEach(function (slicer) {
	                if (slicer === tableSlicer) {
	                    slicers._rename(oldName, newName);
	                    tableSlicer.onPropertyChanged(NAME, newName, oldName);
	                }
	            });
	        }
	    }
	
	    function getTable(tableSlicer) {
	        return tableSlicer._slicerData.getTable();
	    }
	
	    function getTableItemSlicers(tableSlicer) {
	        return tableSlicer._tableItemSlicers;
	    }
	
	    var Slicer = (function (_super) {
	        var NAME_IN_FORMULA = 'nameInFormula',
	            SLICER_CAPTION_NAME = 'captionName',
	            COLUMN_COUNT = 'columnCount',
	            COLUMN_NAME = 'columnName',
	            ITEM_HEIGHT = 'itemHeight',
	            SHOW_HEADER = 'showHeader',
	            SORT_STATE = 'sortState',
	            DISABLE_RESIZING_AND_MOVING = 'disableResizingAndMoving',
	            SHOW_NO_DATA_ITEMS = 'showNoDataItems',
	            SHOW_NO_DATA_ITEMS_IN_LAST = 'showNoDataItemsInLast',
	            VISUALLY_NO_DATA_ITEMS = 'visuallyNoDataItems',
	            ISSELECTED = 'isSelected',
	            DYNAMICMOVE = 'dynamicMove',
	            DYNAMICSIZE = 'dynamicSize',
	            TABLE_NAME_STR = 'tableName',
	            SLICER = 'Slicer',
	            DEFAULT_X = 100,
	            DEFAULT_Y = 100,
	            DEFAULT_WIDTH = 192,
	            DEFAULT_HEIGHT = 250;
	
	        $.inherit(Slicer, _super);
	
	        var slicerProperties = [];
	
	        function defSlicerProperty(propertyName, defaultValue, callback, valueCheck) {
	            slicerProperties.push(propertyName);
	            return defProperty(propertyName, defaultValue, function (value, old) {
	                callback.call(this, propertyName, value, old);
	            }, valueCheck);
	        }
	
	        function checkSlicerName(value) {
	            if (!value) {
	                return false;
	            }
	
	            var self = this, slicerData = self._slicerData;
	
	            if (value === self.name()) {
	                return false;
	            }
	
	            if (slicerData) {
	                var sheet = slicerData._getSheet(), slicers = sheet && sheet.slicers;
	                if (slicers) {
	                    var nameCheckResult = {};
	                    if (!isSlicerNameValid(slicers, value, nameCheckResult)) {
	                        throw nameCheckResult.error;
	                    }
	                }
	            }
	
	            return true;
	        }
	
	        function onPropertyChanged(name, value, oldValue) {
	            var self = this,
	                tableItemSlicers = self._tableItemSlicers || [];
	            for (var i = 0; i < getLength(tableItemSlicers); i++) {
	                if (tableItemSlicers[i][name]) {
	                    if (name === 'style') {
	                        tableItemSlicers[i][name](value.toJSONInternal());
	                    } else {
	                        tableItemSlicers[i][name](value);
	                    }
	                }
	            }
	            var sheet = self.sheet();
	            if (sheet) {
	                sheet._modelManager._backupSlicerChanged(self, name, oldValue);
	                self._trigger({
	                    sheet: sheet,
	                    sheetName: sheet.name(),
	                    slicer: self,
	                    propertyName: name
	
	                });
	            }
	        }
	
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	
	       
	        
	        function Slicer(name, table, columnName) {
	            _super.call(this, name, DEFAULT_X, DEFAULT_Y, DEFAULT_WIDTH, DEFAULT_HEIGHT);
	            var self = this, sheet, slicerData;
	            self.typeName = SLICER;
	            self._kind = SLICER;
	            if (table) {
	                sheet = table._sheet;
	                self.sheet(sheet);
	                slicerData = getSlicerData(sheet.slicers, table.tableName());
	            }
	            if (!slicerData) {
	                slicerData = table.getSlicerData();
	            }
	            self._slicerData = slicerData;
	            self[COLUMN_NAME](columnName);
	            self._tableItemSlicers = [];
	            self._sourceName = columnName;
	            self[NAME_IN_FORMULA](SLICER + '_' + columnName);
	            self[SLICER_CAPTION_NAME](columnName);
	            self[DYNAMICSIZE](false);
	            self[DYNAMICMOVE](false);
	        }
	
	        var propertiesInfo = [
	            [NAME, '', function (proName, value, old) {
	                onNameChanged(this, old, value);
	            }, checkSlicerName],
	            [SLICER_CAPTION_NAME, '', onPropertyChanged],
	            [COLUMN_COUNT, 1, onPropertyChanged, checkValue],
	            [ITEM_HEIGHT, 21, onPropertyChanged, checkValue],
	            [SHOW_HEADER, true, onPropertyChanged],
	            [SORT_STATE, 1 , onPropertyChanged],
	            [DISABLE_RESIZING_AND_MOVING, false, function (proName, newValue, oldValue) {
	                var self = this;
	                self.allowMove(!newValue, false);     
	                self.allowResize(!newValue, false);
	                onPropertyChanged.call(self, DISABLE_RESIZING_AND_MOVING, newValue, oldValue);
	                var sheet = self.sheet();
	                if (sheet) {
	                    sheet._invalidate();
	                }
	            }],
	            [SHOW_NO_DATA_ITEMS, true, onPropertyChanged],
	            [SHOW_NO_DATA_ITEMS_IN_LAST, true, onPropertyChanged],
	            [VISUALLY_NO_DATA_ITEMS, true, onPropertyChanged],
	            [STYLE, SlicerStyles.light1(), onPropertyChanged],
	            [COLUMN_NAME, '', function (proName, newValue, oldValue) {
	                var self = this;
	                self._sourceName = newValue;
	                self.captionName(newValue, false);
	                var sheet = self.sheet();
	                sheet._modelManager._backupSlicerChanged(self, proName, oldValue);
	            }]
	        ];
	        var proto = {
	            constructor: Slicer,
	           
	            sourceName: function () {
	                return this._sourceName;
	            },
	           
	            nameInFormula: defSlicerProperty(NAME_IN_FORMULA, '', onPropertyChanged),
	            onPropertyChanged: onPropertyChanged,
	            cloneContent: function () {
	                var self = this,
	                    sheet = self.sheet(),
	                    slicerData = self._slicerData;
	                var tableItemSlicer = new TableItemSlicer(self.name(), slicerData, self.columnName());
	                tableItemSlicer[WIDTH](self[WIDTH](), false)[HEIGHT](self[HEIGHT](), false)[SLICER_CAPTION_NAME](self[SLICER_CAPTION_NAME]())[COLUMN_COUNT](self[COLUMN_COUNT]())[ITEM_HEIGHT](self[ITEM_HEIGHT]())[SHOW_HEADER](self[SHOW_HEADER]())[SORT_STATE](self[SORT_STATE]()).isLocked(self.isLocked())[DISABLE_RESIZING_AND_MOVING](self[DISABLE_RESIZING_AND_MOVING]())[SHOW_NO_DATA_ITEMS](self[SHOW_NO_DATA_ITEMS]())[SHOW_NO_DATA_ITEMS_IN_LAST](self[SHOW_NO_DATA_ITEMS_IN_LAST]())[VISUALLY_NO_DATA_ITEMS](self[VISUALLY_NO_DATA_ITEMS]())[STYLE](self[STYLE]().toJSONInternal()).zoomFactor(sheet.zoom())[ISSELECTED](self[ISSELECTED]()).slicer(self);
	                if (tableItemSlicer.sheet() !== sheet) {
	                    tableItemSlicer.sheet(sheet);
	                }
	                self._tableItemSlicers.push(tableItemSlicer);
	                return tableItemSlicer.getDOMElement();
	            },
	            _getSlicerData: function () {
	                return this._slicerData;
	            },
	            _needSaveJsonToFloatingObjects: function () {
	                return false;
	            },
	
	           
	            refresh: function (zoomFactor) {
	                var tableItemSlicers = this._tableItemSlicers;
	                for (var i = 0; i < getLength(tableItemSlicers); i++) {
	                    refresh(tableItemSlicers[i], zoomFactor);
	                }
	            },
	            refreshContent: function (contentContainer) { 
	                var self = this, newZoomFactor = self.sheet().zoom();
	                if (newZoomFactor !== self._oldZoomFactor) {
	                    self._oldZoomFactor = newZoomFactor;
	                    self.refresh(newZoomFactor);
	                }
	            },
	            clone: function (sheet) {
	                var self = this;
	                if (!self.sheet() && sheet) {
	                    self.sheet(sheet, false);
	                }
	                var slicer = new Slicer(self.name(), getTable(self), self.columnName());
	                slicer.sheet(self.sheet(), false);
	               
	                slicer.fromJSON(self.toJSON(), false, self._slicerData);
	                return slicer;
	            },
	
	           
	            fromJSON: function (jsonData, noSchema, slicerData) {
	                if (!jsonData) {
	                    return;
	                }
	                var self = this,
	                    tableName = jsonData.tableName,
	                    columnName = jsonData[COLUMN_NAME];
	
	                if (!tableName || !columnName) {
	                    return;
	                }
	                _super.prototype.fromJSON.call(this, jsonData);
	                var sheet = self.sheet(),
	                    slicers = sheet.slicers,
	                    workbook = sheet.parent;
	                var sData = slicerData ? slicerData : getSlicerData(slicers, tableName);
	                if (!sData) {
	                    var table = workbook._findTable(tableName);
	                    sData = table.getSlicerData();
	                    addSlicerData(slicers, sData);
	                }
	                self._slicerData = sData;
	                self[COLUMN_NAME](columnName);
	               
	               
	                var x = jsonData.x !== keyword_undefined ? jsonData.x : DEFAULT_X;
	                var y = jsonData.y !== keyword_undefined ? jsonData.y : DEFAULT_Y;
	                self.position(new Sheets.Point(x, y), false);
	                self[WIDTH](jsonData[WIDTH] !== keyword_undefined ? jsonData[WIDTH] : DEFAULT_WIDTH, false);
	                self[HEIGHT](jsonData[HEIGHT] !== keyword_undefined ? jsonData[HEIGHT] : DEFAULT_HEIGHT, false);
	                if (jsonData.sourceName !== keyword_undefined) {
	                    self._sourceName = jsonData.sourceName;
	                }
	
	                slicerProperties.forEach(function (p) {
	                    var t = jsonData[p];
	                    if (t === keyword_undefined) {
	                        return;
	                    }
	                    self[p](t, false);
	                });
	
	                if (jsonData.style !== keyword_undefined) {
	                    var style = createStyle();
	                    style.fromJSON(jsonData.style);
	                    self.style(style, false);
	                }
	            },
	            toJSON: function () {
	                var self = this;
	                var jsonData = {};
	                var baseProperties = ['x', 'y', WIDTH, HEIGHT, DYNAMICMOVE, DYNAMICSIZE, 'isLocked', 'fixedPosition'];
	                baseProperties.forEach(function (p) {
	                    var t = self[p]();
	                    if (self[p].isDefault(t) && p !== DYNAMICMOVE && p !== DYNAMICSIZE) {
	                        return;
	                    }
	                    jsonData[p] = t;
	                });
	
	                var sourceName = self._sourceName;
	                if (sourceName) {
	                    jsonData['sourceName'] = sourceName;
	                }
	
	                if (self[STYLE]()) {
	                    jsonData[STYLE] = self[STYLE]().toJSON();
	                }
	
	                var slicerData = self._slicerData, table = slicerData.getTable();
	                if (table[TABLE_NAME_STR]) {
	                    jsonData[TABLE_NAME_STR] = table[TABLE_NAME_STR]();
	                }
	
	                slicerProperties.forEach(function (p) {
	                    var t = self[p]();
	                    if (p === STYLE || self[p].isDefault(t)) {
	                        return;
	                    }
	                    jsonData[p] = t;
	                });
	
	                return jsonData;
	            },
	            _trigger: function (args) {
	                var sheet = this.sheet();
	                sheet && sheet._trigger(Sheets.Events.SlicerChanged, args);
	            }
	        };
	        for (var j = 0, len = getLength(propertiesInfo); j < len; j++) {
	            proto[propertiesInfo[j][0]] = defSlicerProperty(propertiesInfo[j][0], propertiesInfo[j][1], propertiesInfo[j][2], propertiesInfo[j][3]);
	        }
	        $.extend(Slicer.prototype, proto);
	
	        return Slicer;
	    })(FloatingObjects.FloatingObject);
	   
	
	   
	    $_extend(Sheets.Worksheet.prototype, {
	        _updateTableSlicer: function (row, col, rowCount, colCount, sheetArea) {
	            if (sheetArea === keyword_undefined) {
	                sheetArea = 3 ;
	            }
	            var self = this;
	            var tm = self.tables;
	            if (tm) {
	                for (var r = 0; r < rowCount; r++) {
	                    for (var c = 0; c < colCount; c++) {
	                        var row2 = r + row;
	                        var col2 = c + col;
	                        var table = tm.find(row2, col2);
	                        if (sheetArea === 3  && table && table._hasSlicerData()) {
	                            var dataRange = table.dataRange();
	                            if (dataRange.contains(row2, col2)) {
	                                var slicerData = table.getSlicerData();
	                                slicerData && slicerData.onDataChanged([{
	                                    columnName: table.getColumnName(col2 - dataRange.col),
	                                    row: row2 - dataRange.row,
	                                    data: {
	                                        value: self.getValue(row2, col2),
	                                        text: self.getText(row2, col2)
	                                    }
	                                }]);
	                            }
	                        }
	                    }
	                }
	                self._modelManager._backupSlicerChanged(null, UNDO_UPDATE_TABLE_SLICER, {
	                    row: row,
	                    col: col,
	                    rowCount: rowCount,
	                    colCount: colCount,
	                    sheetArea: sheetArea
	                });
	            }
	        }
	    });
	    var adapter = {
	        priority: 900,
	       
	        init: function () {
	            var self = this;
	
	           
	           
	           
	           
	            
	            self.slicers = new SlicerCollection(self);
	        },
	        setHost: function () {
	            var self = this;
	            self.bind('tableRemoved', function (sender, args) {
	                var tables = args.tables;
	                for (var i = 0; i < getLength(tables); i++) {
	                    var slicers = self.slicers,
	                        slicerData = getSlicerData(slicers, tables[i].name());
	                    slicerData && removeSlicerData(slicers, slicerData);
	                }
	            });
	        },
	        toJson: function (data, serializationOption) {
	            var ignoreStyle = serializationOption && serializationOption.ignoreStyle;
	            if (!ignoreStyle) {
	                var slicers = this.slicers.toJSON();
	                if (slicers.length > 0) {
	                    data.slicers = slicers;
	                }
	            }
	        },
	        preProcessMouseWheel: function (argObj) {
	            var slicers = this.slicers;
	            if (slicers && slicers._mouseWheelSelectedSlicer(argObj.e)) {
	                argObj.r = true;
	            }
	        },
	        onGroupChanged: function (args) {
	            this.slicers._onGroupChanged(args.start, args.end, args.isRow);
	        }
	    };
	    Sheets.Worksheet._registerFeature('slicer', adapter);
	    var initDefaultCommands = function (commands) {
	        var usbk = 'unfilterSlicerByKey', fs = 'filterSlicer', us = 'unfilterSlicer', csp = 'changeSlicerProperty';
	        commands.register(usbk, Commands[usbk], 67 , false, false, true, false);
	        commands.register(fs, Commands[fs]);
	        commands.register(us, Commands[us]);
	        commands.register(csp, Commands[csp]);
	    };
	    var ssAdapter = {
	        init: function () {
	            initDefaultCommands(this.commandManager());
	        },
	        fromJson: function (data, noSchema, deserializationOptions) {
	           
	           
	            var ignoreStyle = deserializationOptions && deserializationOptions.ignoreStyle;
	            if (ignoreStyle) {
	                return;
	            }
	            var workbook = this;
	            for (var i = 0, length = workbook.getSheetCount(); i < length; i++) {
	                var sheet = workbook.getSheet(i);
	                var sheetSettings = data.sheets && data.sheets[sheet.name()];
	                var slicers = sheetSettings && sheetSettings.slicers;
	                if (slicers) {
	                    sheet.slicers.fromJSON(slicers);
	                }
	            }
	        }
	    };
	    Sheets.Workbook._registerFeature('slicer', ssAdapter);
	   
	
	   
	    var _SheetModelManager = Sheets._SheetModelManager;
	    $.extend(_SheetModelManager.prototype, {
	        _backupSlicerChanged: function (slicerItem, name, value) {
	            var changes = this._changes;
	            if (changes) {
	                var slicerChanges = changes._slicerChanges;
	                if (!slicerChanges) {
	                    slicerChanges = changes._slicerChanges = [];
	                }
	                slicerChanges.push({slicerItem: slicerItem, name: name, value: value});
	            }
	        },
	        _restoreSlicer: function (slicerChanges) {
	            if (slicerChanges) {
	                for (var i = slicerChanges.length - 1; i >= 0; i--) {
	                    var change = slicerChanges[i];
	                    var slicer = change.slicerItem, name = change.name, value = change.value;
	                    if (name === UNDOFILTER) {
	                        var columnName = value.columnName, oldValue = value.oldValue;
	                        slicer.doFilter(columnName, {exclusiveRowIndexes: oldValue});
	                    } else if (name === UNDOADD) {
	                        slicer._removeInternal(value);
	                    } else if (name === UNDOREMOVE) {
	                        if (!value) {
	                            return;
	                        }
	                        slicer._addInternal(value);
	                    } else if (name === UNDO_UPDATE_TABLE_SLICER) {
	                        if (!value) {
	                            return;
	                        }
	                        this._sheet._updateTableSlicer(value.row, value.col, value.rowCount, value.colCount, value.sheetArea);
	                    } else {
	                        slicer[name](value);
	                    }
	                }
	            }
	        }
	    });
	    _SheetModelManager._registerFeature('SLICER_PROPERTYCHANGE', {
	       
	        priority: 5500,
	        undo: function (changes) {
	            var slicerChanges = changes._slicerChanges;
	            if (slicerChanges) {
	                this._restoreSlicer(slicerChanges);
	            }
	        }
	    });
	   
	
	    SheetsSlicers = {
	        ItemSlicer: ItemSlicer,
	        SlicerStyleInfo: SlicerStyleInfo,
	        SlicerBorder: SlicerBorder,
	        SlicerStyle: SlicerStyle,
	        SlicerStyles: SlicerStyles,
	        TableSlicerData: TableSlicerData,
	        Slicer: Slicer,
	        SlicerCollection: SlicerCollection
	    };
	    module.exports = SheetsSlicers;
	
	
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

	module.exports = GC.Spread.Slicers;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sheets.FloatingObjects;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sheets.Tables;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sheets.ConditionalFormatting;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var Sheets = __webpack_require__(2);
	
	    var Commands = Sheets.Commands,
	        $ = Sheets.GC$,
	        ActionBase = Commands.ActionBase;
	    var SlicerDataFilterUndoAction = (function (_super) {
	        $.inherit(SlicerDataFilterUndoAction, _super);
	        function SlicerDataFilterUndoAction(sheet, command) {
	            _super.call(this);
	            this._sheet = sheet;
	            this._command = command;
	        }
	
	        var proto = {
	            canExecute: function() {
	                return !!this._command.slicerData;
	            },
	            execute: function () {
	                var self = this, command = self._command;
	                if (self.canExecute()) {
	                    var sheet = self._sheet;
	                    sheet._modelManager.startTransaction();
	                    self._beforeAction(sheet, true);
	                    command.slicerData.doFilter(command.columnName, { exclusiveRowIndexes: command.newValue });
	                    self._afterAction(sheet, true);
	                    var changesKey = Commands._getChangesKey(sheet.name());
	                    self._command[changesKey] = sheet._modelManager.endTransaction();
	                    return true;
	                }
	                return false;
	            },
	            canUndo: function () {
	                return !!this._command.slicerData;
	            },
	            undo: function () {
	                var self = this;
	                if (self.canUndo()) {
	                    var sheet = self._sheet,
	                        changesKey = Commands._getChangesKey(sheet.name()),
	                        changes = self._command[changesKey];
	                    self._beforeAction(sheet, true);
	                    sheet._modelManager.undo(changes);
	                   
	                    self._afterAction(sheet, true);
	                    return true;
	                }
	                return false;
	            }
	        };
	
	        $.extend(SlicerDataFilterUndoAction.prototype, proto);
	
	        return SlicerDataFilterUndoAction;
	    })(ActionBase);
	    var SlicerDataUnFilterUndoAction = (function (_super) {
	        $.inherit(SlicerDataUnFilterUndoAction, _super);
	        function SlicerDataUnFilterUndoAction(sheet, command) {
	            _super.call(this);
	            this._sheet = sheet;
	            this._command = command;
	        }
	
	        var proto = {
	            canExecute: function() {
	                return !!this._command.slicerData;
	            },
	            execute: function () {
	                var self = this, command = self._command;
	                if (self.canExecute()) {
	                    var sheet = self._sheet;
	                    sheet._modelManager.startTransaction();
	                    self._beforeAction(sheet, true);
	                    command.slicerData.doUnfilter(command.columnName);
	                    self._afterAction(sheet, true);
	                    var changesKey = Commands._getChangesKey(sheet.name());
	                    self._command[changesKey] = sheet._modelManager.endTransaction();
	                    return true;
	                }
	                return false;
	            },
	            canUndo: function () {
	                return !!this._command.slicerData;
	            },
	            undo: function () {
	                var self = this;
	                if (self.canUndo()) {
	                    var sheet = self._sheet,
	                        changesKey = Commands._getChangesKey(sheet.name()),
	                        changes = self._command[changesKey];
	                    self._beforeAction(sheet, true);
	                    sheet._modelManager.undo(changes);
	                    self._afterAction(sheet, true);
	                    return true;
	                }
	                return false;
	            }
	        };
	
	        $.extend(SlicerDataUnFilterUndoAction.prototype, proto);
	
	        return SlicerDataUnFilterUndoAction;
	    })(ActionBase);
	    var SlicerPropertyUndoAction = (function (_super) {
	        $.inherit(SlicerPropertyUndoAction, _super);
	        function SlicerPropertyUndoAction(sheet, command) {
	            _super.call(this);
	            this._sheet = sheet;
	            this._command = command;
	        }
	
	        var proto = {
	            canExecute: function() {
	                return !!this._command.slicer;
	            },
	            execute: function () {
	                var self = this, command = self._command;
	                if (self.canExecute()) {
	                    var sheet = self._sheet;
	                    self._beforeAction(sheet, true);
	                    command.slicer[command.propertyName](command.newValue);
	                    self._afterAction(sheet, true);
	                    return true;
	                }
	                return false;
	            },
	            canUndo: function() {
	                return !!this._command.slicer;
	            },
	            undo: function () {
	                var self = this, command = self._command;
	                if (self.canUndo()) {
	                    var sheet = self._sheet;
	                    self._beforeAction(sheet, true);
	                    command.slicer[command.propertyName](command.oldValue);
	                    self._afterAction(sheet, true);
	                    return true;
	                }
	                return false;
	            }
	        };
	        $.extend(SlicerPropertyUndoAction.prototype, proto);
	
	        return SlicerPropertyUndoAction;
	    })(ActionBase);
	
	    var executeCommand = Commands._executeCommand;
	
	    Commands.filterSlicer = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, SlicerDataFilterUndoAction, options, isUndo);
	        }
	    };
	    Commands.unfilterSlicer = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, SlicerDataUnFilterUndoAction, options, isUndo);
	        }
	    };
	    Commands.changeSlicerProperty = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, SlicerPropertyUndoAction, options, isUndo);
	        }
	    };
	    Commands.unfilterSlicerByKey = {
	        canUndo: false,
	        execute: function (context, options) {
	            var sheet = Commands._getWorksheet(context, options);
	            var selectedSlicers = sheet.slicers._getSelectedSlicers();
	            if (selectedSlicers.length !== 1) {
	                return;
	            }
	            var slicer = selectedSlicers[0], slicerData = slicer._getSlicerData();
	            if (!slicerData) {
	                return;
	            }
	            var value = slicerData.getFilteredIndexes(slicer.columnName());
	            return sheet._commandManager().execute({ cmd: 'unfilterSlicer', sheetName: sheet.name(), slicerData: slicerData, columnName: slicer.columnName(), value: value });
	        }
	    };
	
	
	}());

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Blank: '(blank)',
	        Exp_SlicerNameInvalid: 'The slicer name is not valid.',
	        Exp_SlicerNameExist: 'The slicer name is already in use, please enter a unique name.'
	    };
	
	}());

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.slicers.12.0.0.js.map