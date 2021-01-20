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
var GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["CellTypes"] =
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
	
	    __webpack_require__(1);
	    __webpack_require__(4);
	    __webpack_require__(5);
	    module.exports = __webpack_require__(6);
	
	}());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var Core = __webpack_require__(2);
	    var Common = __webpack_require__(3);
	
	    var _createElement = Core._util._createElement;
	    var isNullOrUndefined = Common._Types._isNullOrUndefined;
	    var Core_util = Core._util;
	    var getFontHeight = Core_util._getFontHeight;
	    var cancelDefault = Core_util._cancelDefault;
	    var CellTypes = Core.CellTypes, CellTypeContext = CellTypes.Context, BaseCellType = CellTypes.Base;
	    var $ = Core.GC$, $_each = $.each;
	    var adjustFontWithFallback = Core_util._adjustFontWithFallback;
	
	
	    var keyword_null = null, keyword_undefined = void 0, Math_max = Math.max,
	        convertToInt = parseInt;
	    var cssPosition = 'position', cssAbsolute = 'absolute', cssFont = 'font', cssLeft = 'left',
	        cssRight = 'right', cssTop = 'top', cssAlphabetic = 'alphabetic', _gcEditingInput = '.gcEditingInput',
	        cssBackgroundColor = 'background-color', cssWhite = 'white', cssGreen = 'green', STR_DIV = 'div';
	
	    var IS_FIRST_MOUSE_UP = '_isFirstMouseUp', MOUSE_UP_TOKEN = '_mouseupToken';
	    function deleteTokenAndClearTimeout(sheet, row, col, sheetArea) {
	        var modelManager = sheet._modelManager;
	        if (modelManager) {
	            modelManager.do('setValueForKey', row, col, IS_FIRST_MOUSE_UP, keyword_undefined, sheetArea);
	
	            var mouseupToken = modelManager.getValueForKey(row, col, MOUSE_UP_TOKEN, sheetArea);
	            if (mouseupToken) {
	                clearTimeout(mouseupToken);
	                modelManager.do('setValueForKey', row, col, MOUSE_UP_TOKEN, keyword_undefined, sheetArea);
	            }
	        }
	    }
	
	   
	   
	        CellTypes.CheckBoxTextAlign = {
	                top: 0,
	                bottom: 1,
	                left: 2,
	                right: 3
	    };
	    $.inherit(CheckBoxCellType, BaseCellType);
	    var CHECKBOX_SIZE = 12;
	    var checkBoxCellTypePropertyDict = {
	        caption: '', textTrue: '', textIndeterminate: '', textFalse: '', textAlign: 3 , isThreeState: false
	    };
	   
	       
	       
	       
	       
	       
	       
	        function CheckBoxCellType() {
	        var self = this;
	        BaseCellType.call(self);
	        self.typeName = 5  + '';
	        $_each(checkBoxCellTypePropertyDict, function (p, v) {
	            self['_' + p] = v;
	        });
	    }
	    function getCheckBoxMargin(zoomFactor) {
	        return 5 * zoomFactor;
	    }
	
	    function getCheckBoxLeft(textAlign, cellStyle, cellRect, textWidth, zoomFactor) {
	        var margin = getCheckBoxMargin(zoomFactor);
	        var cellStyleHAlign = cellStyle.hAlign;
	        var x = cellRect.x - 1, w = cellRect.width + 1, totalWidth = 0, startX = 0;
	        if (textAlign === 0  || textAlign === 1 ) {
	            startX = x + margin;
	            if (cellStyleHAlign === 1 ) {
	                startX = x + w / 2 - CHECKBOX_SIZE / 2;
	            } else if (cellStyleHAlign === 2 ) {
	                startX = x + w - margin - CHECKBOX_SIZE;
	            }
	        } else if (textAlign === 2 ) {
	            totalWidth = CHECKBOX_SIZE + textWidth;
	            startX = x + margin + textWidth;
	            if (cellStyleHAlign === 1 ) {
	                startX = x + w / 2 - totalWidth / 2 + textWidth;
	            } else if (cellStyleHAlign === 2 ) {
	                startX = x + w - margin - totalWidth + textWidth;
	            }
	        } else {
	            totalWidth = CHECKBOX_SIZE + textWidth;
	            startX = x + margin;
	            if (cellStyleHAlign === 1 ) {
	                startX = x + w / 2 - totalWidth / 2;
	            } else if (cellStyleHAlign === 2 ) {
	                startX = x + w - margin - totalWidth;
	            }
	        }
	        return startX - x;
	    }
	    function getCheckBoxTop(textAlign, cellStyle, cellRect, textHeight, zoomFactor) {
	        var margin = getCheckBoxMargin(zoomFactor);
	        var cellStyleVAlign = cellStyle.vAlign;
	        var y = cellRect.y - 1, h = cellRect.height + 1, totalHeight = 0, startY = 0;
	        if (textAlign === 0 ) {
	            totalHeight = CHECKBOX_SIZE + textHeight;
	            startY = y + margin + textHeight;
	            if (cellStyleVAlign === 1 ) {
	                startY = y + h / 2 - totalHeight / 2 + textHeight;
	            } else if (cellStyleVAlign === 2 ) {
	                startY = y + h - margin - totalHeight + textHeight;
	            }
	        } else if (textAlign === 1 ) {
	            totalHeight = CHECKBOX_SIZE + textHeight;
	            startY = y + margin;
	            if (cellStyleVAlign === 1 ) {
	                startY = y + h / 2 - totalHeight / 2;
	            } else if (cellStyleVAlign === 2 ) {
	                startY = y + h - margin - totalHeight;
	            }
	        } else {
	            startY = y + margin;
	            if (cellStyleVAlign === 1 ) {
	                startY = y + h / 2 - CHECKBOX_SIZE / 2;
	            } else if (cellStyleVAlign === 2 ) {
	                startY = y + h - margin - CHECKBOX_SIZE;
	            }
	        }
	        return startY - y;
	    }
	    function executeEditCellCommand(cellType, sheet, row, col, sheetArea) {
	        var oldValue = sheet.getValue(row, col, sheetArea);
	        var newValue = cellType._getNextState(oldValue);
	        var cellEditCmd = { cmd: 'editCell', sheetName: sheet.name(), row: row, col: col, newValue: newValue, autoFormat: true };
	        sheet._commandManager().execute(cellEditCmd);
	        cellType._triggerButtonClicked(sheet, row, col, sheetArea);
	    }
	    function onValueChanging(cellType, editorContext, cellStyle, cellRect, context) {
	        var sheet = context && context.sheet;
	        var oldValue = cellType.getEditorValue(editorContext, context);
	        cellType.setEditorValue(editorContext, oldValue, context);
	        cellType.updateEditor(editorContext, cellStyle, cellRect, context);
	        cellType._triggerButtonClicked(sheet, sheet._activeRowIndex, sheet._activeColIndex, context.sheetArea);
	    }
	    var checkBoxCellType_prototype = {
	        paintValue: function (ctx, value, x, y, w, h, style, options) {
	            if (!ctx) {
	                return;
	            }
	            ctx.save();
	            ctx.rect(x, y, w, h);
	            ctx.clip();
	            ctx.beginPath();
	            var styleHAlign = style.hAlign, styleFont = style.font, styleForeColor = style.foreColor;
	            var self = this, ownTextAlign = self._textAlign;
	            var text = self.getText(value, options);
	            var textWidth = 0, textHeight = 0, sheet = options.sheet;
	            if (sheet) {
	                textWidth = sheet._getStringWidthByCanvas(text, styleFont);
	                textHeight = getFontHeight(styleFont);
	                if (text) {
	                    var lines = text.split(/\r\n|\r|\n/);
	                    textHeight *= lines.length;
	                }
	            }
	            var zoomFactor = sheet.zoom();
	            var radius = CHECKBOX_SIZE / 2, rect = new Core.Rect(++x, ++y, --w, --h),
	                startX = convertToInt((x + getCheckBoxLeft(ownTextAlign, style, rect, textWidth, zoomFactor)).toString()),
	                startY = convertToInt((y + getCheckBoxTop(ownTextAlign, style, rect, textHeight, zoomFactor)).toString());
	            var textAlign = cssLeft;
	            var textStartX = startX + 1;
	            if (styleHAlign === 1 ) {
	                textAlign = 'center';
	                textStartX += radius;
	            } else if (styleHAlign === 2 ) {
	                textAlign = cssRight;
	                textStartX += radius * 2;
	            }
	            if (styleFont && ctx.font !== styleFont) {
	                Core_util._setContextFont(ctx, styleFont);
	            }
	            if (styleForeColor) {
	                ctx.fillStyle = styleForeColor;
	            }
	            var textDecoration = style.textDecoration, fontSize = options.fontInfo.fontSize,
	                baselineOffset = fontSize > 8 ? Math.floor((fontSize - 8) / 5 + 2) : 1,
	                lineOffset = textHeight / 2 - fontSize / 2 + baselineOffset - 1;
	            if (ctx.textBaseline !== cssAlphabetic) {
	                ctx.textBaseline = cssAlphabetic;
	            }
	            if (ownTextAlign === 2 ) {
	                ctx.textAlign = cssRight;
	                ctx.fillText(text, startX + 1 - 2, startY + radius + textHeight / 2 - lineOffset);
	                if (textDecoration) {
	                    self._renderTextDecoration(ctx, textDecoration, startX + 1 - 2, startY + radius + textHeight / 2 - lineOffset, textWidth, fontSize, baselineOffset);
	                }
	            } else if (ownTextAlign === 0 ) {
	                ctx.textAlign = textAlign;
	                ctx.fillText(text, textStartX, startY - 2 - lineOffset);
	                if (textDecoration) {
	                    self._renderTextDecoration(ctx, textDecoration, textStartX, startY - 2 - lineOffset, textWidth, textHeight);
	                }
	            }
	            ctx.save();
	            ctx.strokeStyle = 'black';
	            ctx.strokeRect(startX + 0.5, startY + 0.5, radius * 2 + 0.05, radius * 2 + 0.05);
	            ctx.fillStyle = cssWhite;
	            ctx.fillRect(startX + 1, startY + 1, radius * 2 - 1, radius * 2 - 1);
	            if (self._isThreeState && isNullOrUndefined(value)) {
	                ctx.beginPath();
	                ctx.fillStyle = cssGreen;
	                ctx.rect(startX + 3, startY + 3, (radius - 2.5) * 2, (radius - 2.5) * 2);
	                ctx.fill();
	            } else if (!!value === true) {
	                ctx.beginPath();
	                ctx.lineWidth = 2.5;
	                ctx.moveTo(startX + 3, startY + radius);
	                ctx.lineTo(startX + radius, startY + radius * 2 - 3.5);
	                ctx.lineTo(startX + radius * 2 - 1.5, startY + 3);
	                ctx.stroke();
	            }
	            ctx.restore();
	            if (styleForeColor) {
	                ctx.fillStyle = styleForeColor;
	            }
	            if (ownTextAlign === 3 ) {
	                ctx.textAlign = cssLeft;
	                ctx.fillText(text, startX + 1 + radius * 2 + 2, startY + radius + textHeight / 2 - lineOffset);
	                if (textDecoration) {
	                    self._renderTextDecoration(ctx, textDecoration, startX + 1 + radius * 2 + 2,
	                        startY + radius + textHeight / 2 - lineOffset, textWidth, fontSize, baselineOffset);
	                }
	            } else if (ownTextAlign === 1 ) {
	                ctx.textAlign = textAlign;
	                ctx.fillText(text, textStartX, startY + radius * 2 + 2 + textHeight - lineOffset);
	                if (textDecoration) {
	                    self._renderTextDecoration(ctx, textDecoration, textStartX,
	                        startY + radius * 2 + 2 + textHeight - lineOffset, textWidth, fontSize, baselineOffset);
	                }
	            }
	            ctx.restore();
	        },
	       
	        getText: function (text, options) {
	            return this._getDisplayText(text);
	        },
	        focus: function (editorContext, context) {
	            if (editorContext) {
	                editorContext.parentNode.focus();
	            }
	        },
	        createEditorElement: function (context, cellWrapperElement) {
	            var host = context && context.sheet && context.sheet.parent && context.sheet.parent._host;
	            var zindex = Core_util._getPreferredZIndex(host) + 1000;
	            $(cellWrapperElement).css('z-index', zindex).attr('tabindex', 1).attr('gcUIElement', 'gcEditingInput');
	
	            var $contentContainer = $(cellWrapperElement.firstChild);
	            $contentContainer.css('overflow', 'hidden');
	            var $input = $(_createElement('input'));
	            $input.attr('type', 'checkbox');
	            $contentContainer.append($input);
	            var $span = $(_createElement('span'));
	            $span.css(cssPosition, cssAbsolute).css(cssFont, adjustFontWithFallback('normal 11pt calibri')).css('cursor', 'default').css('white-space', 'nowrap');
	            $contentContainer.append($span);
	            var $childDiv = $(_createElement(STR_DIV));
	            $childDiv.css(cssPosition, cssAbsolute).css(cssBackgroundColor, cssGreen)
	                .css('width', (CHECKBOX_SIZE / 2 - 2.5) * 2).css('height', (CHECKBOX_SIZE / 2 - 2.5) * 2);
	            $contentContainer.append($childDiv);
	            return keyword_null;
	        },
	        _getNextState: function (value) {
	            var newValue;
	            if (this._isThreeState) {
	               
	                if (isNullOrUndefined(value)) {
	                    newValue = false;
	                } else if (!!value === true) {
	                    newValue = keyword_null;
	                } else {
	                    newValue = true;
	                }
	            } else {
	                newValue = !value;
	            }
	            return newValue;
	        },
	        setEditorValue: function (editorContext, value, context) {
	            if (editorContext) {
	                var children = editorContext.parentNode.children, checkbox = children[0], span = children[1], greenDiv = children[2];
	                if (checkbox && span && greenDiv) {
	                    var self = this, sheet = context && context.sheet, startEditNotBySpace = sheet && sheet._startEditByKeydown, checked;
	                    if (!startEditNotBySpace) {
	                        value = self._getNextState(value);
	                    }
	                    if (self._isThreeState) {
	                        if (isNullOrUndefined(value)) {
	                            checked = false;
	                            $(greenDiv).show();
	                        } else {
	                            checked = !!value;
	                            $(greenDiv).hide();
	                        }
	                    } else {
	                        checked = !!value;
	                    }
	                    checkbox.checked = checked;
	                    $(span).text(self._getDisplayText(value));
	                }
	            }
	        },
	        getEditorValue: function (editorContext, context) {
	            if (editorContext) {
	                var children = editorContext.parentNode.children, checkbox = children[0], span = children[1], greenDiv = children[2];
	                if (checkbox && span && greenDiv) {                     if (!this._isThreeState || !$(greenDiv).isVisible()) {
	                        return checkbox.checked;
	                    }
	                }
	            }
	            return keyword_null;
	        },
	        _triggerButtonClicked: function (sheet, row, col, sheetArea) {
	            var parent = sheet.parent;
	            if (parent) {
	                parent._triggerButtonClicked(sheet, row, col, sheetArea);
	            }
	        },
	        activateEditor: function (editorContext, cellStyle, cellRect, context) {
	            var sheet = context && context.sheet;
	            if (editorContext && sheet) {
	               
	                var $editor = $(editorContext.parentNode.parentNode);
	               
	                var self = this;
	                $editor.bind('mousedown' + _gcEditingInput, function (e) {
	                    cancelDefault(e);
	                });
	                $editor.bind('mouseup' + _gcEditingInput, function () {
	                    onValueChanging(self, editorContext, cellStyle, cellRect, context);
	                });
	                $editor.bind('keydown' + _gcEditingInput, function (e) {
	                    var keyCode = e.keyCode;
	                    if (!e.ctrlKey && !e.shiftKey && !e.altKey) {
	                        if (keyCode === 32 ) {
	                            self._isKeyDown = true;
	                            cancelDefault(e);
	                            return false;
	                        } else if (keyCode === 8 ) {
	                            cancelDefault(e);
	                        }
	                    }
	                });
	                $editor.bind('keyup' + _gcEditingInput, function (e) {
	                    if (self._isKeyDown && e.keyCode === 32  && !e.ctrlKey && !e.shiftKey && !e.altKey) {
	                        self._isKeyDown = false;
	                        onValueChanging(self, editorContext, cellStyle, cellRect, context);
	                    }
	                });
	                $(editorContext).bind('click', function (e) {
	                    cancelDefault(e);
	                });
	            }
	        },
	        updateEditor: function (editorContext, cellStyle, cellRect, context) {
	            var sheet = context && context.sheet;
	            if (editorContext && sheet) {
	                var render = sheet._render, contentContainer = editorContext.parentNode;
	                var children = contentContainer.children, checkbox = children[0], span = children[1], greenDiv = children[2];
	                if (checkbox && span && greenDiv) {
	                    $(contentContainer).width(cellRect.width).height(cellRect.height);
	                    var $span = $(span);
	                    var text = $span.text();
	                    var cellStyleForeColor = cellStyle.foreColor, cellStyleFont = cellStyle.font,
	                        cellStyleHAlign = cellStyle.hAlign, cellStyleTextDecoration = cellStyle.textDecoration;
	                    if (cellStyleForeColor) {
	                        $span.css('color', cellStyleForeColor);
	                    }
	                    var font;
	                    if (cellStyleFont) {
	                        font = cellStyleFont;
	                    } else {
	                        font = render._getDefaultFont();
	                    }
	                    var zoomFactor = sheet.zoom();
	                    if (zoomFactor > 1) {
	                        font = render._getZoomFont(font);
	                    }
	                    $span.css(cssFont, adjustFontWithFallback(font));
	                    var textWidth = sheet._getStringWidth(text, font);
	                    var textHeight = getFontHeight(font);
	                    if (text) {
	                        var lines = text.split(/\r\n|\r|\n/);
	                        textHeight *= lines.length;
	                    }
	                    var self = this, ownTextAlign = self._textAlign;
	                    var marginLeft = getCheckBoxLeft(ownTextAlign, cellStyle, cellRect, textWidth, zoomFactor),
	                        marginTop = getCheckBoxTop(ownTextAlign, cellStyle, cellRect, textHeight, zoomFactor);
	                    $(checkbox).css('margin-left', marginLeft).css('margin-top', marginTop);
	                    var checkboxOffsetLeft = checkbox.offsetLeft, checkboxOffsetTop = checkbox.offsetTop,
	                        checkboxOffsetWidth = checkbox.offsetWidth, checkboxOffsetHeight = checkbox.offsetHeight;
	                    var textLeft = 0, textTop = 0;
	                    if (ownTextAlign === 0 ) {
	                        textLeft = checkboxOffsetLeft;
	                        if (cellStyleHAlign === 1 ) {
	                            textLeft = checkboxOffsetLeft + CHECKBOX_SIZE / 2 - textWidth / 2;
	                        } else if (cellStyleHAlign === 2 ) {
	                            textLeft = checkboxOffsetLeft + CHECKBOX_SIZE - textWidth;
	                        }
	                        textTop = checkboxOffsetTop - textHeight;
	                    } else if (ownTextAlign === 1 ) {
	                        textLeft = checkboxOffsetLeft;
	                        if (cellStyleHAlign === 1 ) {
	                            textLeft = checkboxOffsetLeft + CHECKBOX_SIZE / 2 - textWidth / 2;
	                        } else if (cellStyleHAlign === 2 ) {
	                            textLeft = checkboxOffsetLeft + CHECKBOX_SIZE - textWidth;
	                        }
	                        textTop = checkboxOffsetTop + checkboxOffsetHeight;
	                    } else if (ownTextAlign === 2 ) {
	                        textLeft = checkboxOffsetLeft - textWidth - 2;
	                        textTop = checkboxOffsetTop + CHECKBOX_SIZE / 2 - textHeight / 2;
	                    } else {
	                        textLeft = checkboxOffsetLeft + checkboxOffsetWidth + 2;
	                        textTop = checkboxOffsetTop + CHECKBOX_SIZE / 2 - textHeight / 2;
	                    }
	                    $span.css(cssLeft, textLeft).css(cssTop, textTop);
	                    if (self._isThreeState) {
	                        var left = checkboxOffsetLeft + (checkboxOffsetWidth - greenDiv.offsetWidth) / 2,
	                            top = checkboxOffsetTop + (checkboxOffsetHeight - greenDiv.offsetHeight) / 2;
	                        $(greenDiv).css(cssLeft, left).css(cssTop, top).toggle().toggle();
	                    } else {
	                        $(greenDiv).hide();
	                    }
	                    if (cellStyleTextDecoration) {
	                        self._setTextDecoration($span, cellStyleTextDecoration);
	                    }
	                }
	            }
	        },
	        _getDisplayText: function (value) {
	            var self = this, caption = self._caption;
	            if (self._isThreeState && isNullOrUndefined(value)) {
	                return self._textIndeterminate || caption;
	            } else if (!!value === true) {
	                return self._textTrue || caption;
	            }
	            return self._textFalse || caption;
	        },
	        getHitInfo: function (x, y, cellStyle, cellRect, context) {
	            if (context) {
	                var sheetArea = context.sheetArea;
	                if (isNullOrUndefined(sheetArea) || sheetArea === 3 ) {
	                    return {
	                        x: x,
	                        y: y,
	                        row: context.row,
	                        col: context.col,
	                        cellRect: cellRect,
	                        sheetArea: 3 ,
	                        isReservedLocation: true,
	                        sheet: context.sheet
	                    };
	                }
	            }
	            return keyword_null;
	        },
	        processMouseDown: function (hitInfo) {
	            if (!hitInfo) {
	                return false;
	            }
	            if (hitInfo.isReservedLocation) {
	                this._isMouseDownReservedLocation = true;
	            }
	        },
	        processMouseUp: function (hitInfo) {
	            var self = this;
	            var sheet = hitInfo && hitInfo.sheet;
	            if (sheet && self._isMouseDownReservedLocation && hitInfo.isReservedLocation) {
	                self._isMouseDownReservedLocation = false;
	                var row = hitInfo.row, col = hitInfo.col, sheetArea = hitInfo.sheetArea;
	                var isFirstMouseUp = sheet._modelManager.getValueForKey(row, col, IS_FIRST_MOUSE_UP, sheetArea);
	                if (!isFirstMouseUp) {
	                    executeEditCellCommand(self, sheet, row, col, sheetArea);
	                    sheet._modelManager.do('setValueForKey', row, col, IS_FIRST_MOUSE_UP, true, sheetArea);
	                    var mouseupToken = setTimeout(function () {
	                        deleteTokenAndClearTimeout(sheet, row, col, sheetArea);
	                    }, 250);
	                    sheet._modelManager.do('setValueForKey', row, col, MOUSE_UP_TOKEN, mouseupToken, sheetArea);
	                    return true;
	                }
	                deleteTokenAndClearTimeout(sheet, row, col, sheetArea);
	            }
	            return false;
	        },
	        processMouseLeave: function (hitInfo) {
	            if (!hitInfo) {
	                return false;
	            }
	            this._isMouseDownReservedLocation = false;
	        },
	        isReservedKey: function (e, context) {
	            return e.keyCode === 32  && !e.ctrlKey && !e.shiftKey && !e.altKey;
	        },
	        processKeyUp: function (event, context) {
	            executeEditCellCommand(this, context.sheet, context.row, context.col, context.sheetArea);
	            return true;
	        },
	        getAutoFitWidth: function (value, text, cellStyle, zoomFactor, context) {
	            var self = this, ownTextAlign = self._textAlign;
	            var width = CellTypeContext._getAutoFitWidth(value, self._getDisplayText(value), cellStyle, zoomFactor, context);
	            if (ownTextAlign === 0  || ownTextAlign === 1 ) {
	                width = Math_max(width, CHECKBOX_SIZE);
	            } else {
	                width += CHECKBOX_SIZE;
	            }
	            return width + 5 + 2;
	        },
	        getAutoFitHeight: function (value, text, cellStyle, zoomFactor, context) {
	            var self = this, ownTextAlign = self._textAlign;
	            var height = CellTypeContext._getAutoFitHeight(value, self._getDisplayText(value), cellStyle, zoomFactor, context);
	            if (ownTextAlign === 0  || ownTextAlign === 1 ) {
	                height += CHECKBOX_SIZE;
	            } else {
	                height = Math_max(height, CHECKBOX_SIZE);
	            }
	            return height + 5;
	        },
	        _cancelDefaultKeydown: function (event) {
	            if (this.isReservedKey(event)) {
	                cancelDefault(event);
	            }
	        },
	        isImeAware: function (context) {
	            return false;
	        },
	        _cloneCellType: function () {
	        },
	        toJSON: function () {
	            var self = this;
	            var dataDic = {typeName: self.typeName}, currentValue;
	            $_each(checkBoxCellTypePropertyDict, function (p, v) {
	                currentValue = self['_' + p];
	                if (currentValue !== v) {
	                    dataDic[p] = currentValue;
	                }
	            });
	            return dataDic;
	        },
	        fromJSON: function (setting) {
	            var self = this;
	            $_each(checkBoxCellTypePropertyDict, function (p) {
	                var jsonValue = setting[p];
	                if (!isNullOrUndefined(jsonValue)) {
	                    self['_' + p] = jsonValue;
	                }
	            });
	        }
	    };
	    $_each(checkBoxCellTypePropertyDict, function (p) {
	        checkBoxCellType_prototype[p] = function (value) {
	            if (arguments.length === 0) {
	                return this['_' + p];
	            }
	            this['_' + p] = value;
	            return this;
	        };
	    });
	    $.extend(CheckBoxCellType.prototype, checkBoxCellType_prototype);
	    CellTypes.CheckBox = CheckBoxCellType;
	    CellTypes._typeDict[5 ] = CheckBoxCellType;
	   
	
	    module.exports = CellTypes;
	
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
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var Core = __webpack_require__(2);
	    var Common = __webpack_require__(3);
	
	    var Events_SelectionChanged = Core.Events.SelectionChanged;
	    var isNullOrUndefined = Common._Types._isNullOrUndefined;
	    var Core_util = Core._util, cancelDefault = Core_util._cancelDefault;
	    var CellTypes = Core.CellTypes, CellTypeContext = CellTypes.Context, TextCellType = CellTypes.Text, BaseCellType = CellTypes.Base;
	    var $ = Core.GC$, $_each = $.each;
	
	    var keyword_null = null, keyword_undefined = void 0;
	
	    var IS_FIRST_MOUSE_UP = '_isFirstMouseUp', MOUSE_UP_TOKEN = '_mouseupToken';
	    function deleteTokenAndClearTimeout(sheet, row, col, sheetArea) {
	        var modelManager = sheet._modelManager;
	        if (modelManager) {
	            modelManager.do('setValueForKey', row, col, IS_FIRST_MOUSE_UP, keyword_undefined, sheetArea);
	
	            var mouseupToken = modelManager.getValueForKey(row, col, MOUSE_UP_TOKEN, sheetArea);
	            if (mouseupToken) {
	                clearTimeout(mouseupToken);
	                modelManager.do('setValueForKey', row, col, MOUSE_UP_TOKEN, keyword_undefined, sheetArea);
	            }
	        }
	    }
	
	   
	   
	   
	   
	   
	   
	    $.inherit(ButtonCellType, BaseCellType);
	    var BUTTON_BORDER_COLOR = '#707070', BUTTON_PRESSED_COLOR = '#34B4E3', BUTTON_CELLTYPE_EVENT_NAMESPACE = '.buttonCellType';
	    var buttonCellTypePropertyDict = {
	        marginTop: 2,
	        marginRight: 2,
	        marginBottom: 2,
	        marginLeft: 2,
	        text: '',
	        buttonBackColor: keyword_null,
	        buttonState: 0 
	    };
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	    function ButtonCellType() {
	        var self = this;
	        BaseCellType.call(self);
	        self.typeName = 6  + '';
	        $_each(buttonCellTypePropertyDict, function (p, v) {
	            self['_' + p] = v;
	        });
	    }
	    var buttonCellType_prototype = {
	       
	        paintValue: function (ctx, value, x, y, w, h, style, options) {
	            if (!ctx) {
	                return;
	            }
	            var self = this, marginLeft = self._marginLeft, marginTop = self._marginTop;
	            var startX = x + marginLeft, startY = y + marginTop, width = w - marginLeft - self._marginRight,
	                height = h - marginTop - self._marginBottom,
	                isIntersect = startX + width > x && startX < x + w && startY + height > y && startY < y + h;
	            if (width - 2 > 0 && height - 2 > 0 && isIntersect) {
	                ctx.save();
	                if (startX < x || startX + width > x + w || startY < y || startY + height > y + h) {
	                    ctx.rect(x, y, w, h);
	                    ctx.clip();
	                }
	                ctx.beginPath();
	                var strokeStyle = BUTTON_BORDER_COLOR;
	                if (strokeStyle && ctx.strokeStyle !== strokeStyle) {
	                    ctx.strokeStyle = strokeStyle;
	                }
	                ctx.strokeRect(startX + 0.5, startY + 0.5, width - 1, height - 1);
	                var fillStyle, buttonState = self._buttonState, text = self._text;
	                if (buttonState === 2 ) {
	                    fillStyle = BUTTON_PRESSED_COLOR;
	                } else {
	                    fillStyle = self._buttonBackColor;
	                    if (!fillStyle) {
	                        var gradient = ctx.createLinearGradient(x + w / 2, y, x + w / 2, y + h);
	                        gradient.addColorStop(0.125, '#F6FAFB');
	                        gradient.addColorStop(1.0, '#D2DBEB');
	                        fillStyle = gradient;
	                    }
	                }
	                if (ctx.fillStyle !== fillStyle) {
	                    ctx.fillStyle = fillStyle;
	                }
	                ctx.fillRect(startX + 1, startY + 1, width - 2, height - 2);
	                ctx.restore();
	                if (text) {
	                    TextCellType.prototype.paintValue.call(self, ctx, text, startX, startY, width, height, style, options);
	                }
	            }
	        },
	       
	        getText: function (value, context) {
	            return value;
	        },
	        _triggerButtonClicked: function (sheet, row, col, sheetArea) {
	            var parent = sheet.parent;
	            if (parent) {
	                parent._triggerButtonClicked(sheet, row, col, sheetArea);
	            }
	        },
	        getHitInfo: function (x, y, cellStyle, cellRect, context) {
	            var self = this;
	            if (context) {
	                var sheetArea = context.sheetArea;
	                if ((isNullOrUndefined(sheetArea) || sheetArea === 3 ) && cellRect) {
	                    var leftX = cellRect.x + self._marginLeft, rightX = cellRect.x + cellRect.width - self._marginRight,
	                        topY = cellRect.y + self._marginTop, bottomY = cellRect.y + cellRect.height - self._marginBottom;
	                    var info = {
	                        x: x,
	                        y: y,
	                        row: context.row,
	                        col: context.col,
	                        cellRect: cellRect,
	                        sheetArea: sheetArea,
	                        sheet: context.sheet
	                    };
	                    if (leftX <= x && x <= rightX && topY <= y && y <= bottomY) {
	                        info.isReservedLocation = true;
	                    }
	                    return info;
	                }
	            }
	            return keyword_null;
	        },
	        processMouseDown: function (hitInfo) {
	            var self = this;
	            var sheet = hitInfo && hitInfo.sheet;
	            if (sheet && hitInfo.isReservedLocation && !self._isMouseDownReservedLocation) {
	                self._isMouseDownReservedLocation = true;
	                self._buttonState = 2 ;
	                sheet.repaint(hitInfo.cellRect);
	                return true;
	            }
	            return false;
	        },
	        processMouseUp: function (hitInfo) {
	            var self = this;
	            var sheet = hitInfo && hitInfo.sheet;
	            if (self._isMouseDownReservedLocation && sheet && hitInfo.isReservedLocation) {
	                self._buttonState = 0 ;
	                sheet.repaint(hitInfo.cellRect);
	                self._isMouseDownReservedLocation = false;
	                var row = hitInfo.row, col = hitInfo.col, sheetArea = hitInfo.sheetArea;
	                var isFirstMouseUp = sheet._modelManager.getValueForKey(row, col, IS_FIRST_MOUSE_UP, sheetArea);
	                if (!isFirstMouseUp) {
	                    self._triggerButtonClicked(sheet, row, col, sheetArea);
	                    sheet._modelManager.do('setValueForKey', row, col, IS_FIRST_MOUSE_UP, true, sheetArea);
	                    var mouseupToken = setTimeout(function () {
	                        deleteTokenAndClearTimeout(sheet, row, col, sheetArea);
	                    }, 250);
	                    sheet._modelManager.do('setValueForKey', row, col, MOUSE_UP_TOKEN, mouseupToken, sheetArea);
	                    return true;
	                }
	                deleteTokenAndClearTimeout(sheet, row, col, sheetArea);
	            }
	            return false;
	        },
	        processMouseLeave: function (hitInfo) {
	            var self = this;
	            var sheet = hitInfo && hitInfo.sheet;
	            if (sheet && self._isMouseDownReservedLocation) {
	                self._buttonState = 0 ;
	                sheet.repaint(hitInfo.cellRect);
	                self._isMouseDownReservedLocation = false;
	            }
	        },
	        processKeyDown: function (event, context) {
	            var sheet = context.sheet;
	            var self = this;
	            if (sheet && !self._isKeyPressed) {
	                var cellRect = sheet.getCellRect(context.row, context.col);
	                self._buttonState = 2 ;
	                sheet.repaint(cellRect);
	               
	                sheet._bind(Events_SelectionChanged + BUTTON_CELLTYPE_EVENT_NAMESPACE, function () {
	                    sheet._unbind(Events_SelectionChanged + BUTTON_CELLTYPE_EVENT_NAMESPACE);
	                    self._isKeyPressed = false;
	                    self._buttonState = 0 ;
	                    sheet.repaint(cellRect);
	                });
	                self._isKeyPressed = true;
	                return true;
	            }
	            return false;
	        },
	        processKeyUp: function (event, context) {
	            var sheet = context.sheet;
	            var self = this;
	            if (sheet && self._isKeyPressed) {
	                var row = context.row;
	                var col = context.col;
	                var cellRect = sheet.getCellRect(row, col);
	                self._buttonState = 0 ;
	                sheet.repaint(cellRect);
	                sheet._unbind(Events_SelectionChanged + BUTTON_CELLTYPE_EVENT_NAMESPACE);
	                self._triggerButtonClicked(sheet, row, col, context.sheetArea);
	                self._isKeyPressed = false;
	                return true;
	            }
	            return false;
	        },
	        isReservedKey: function (e, context) {
	            return e.keyCode === 32  && !e.ctrlKey && !e.shiftKey && !e.altKey;
	        },
	        getAutoFitWidth: function (value, text, cellStyle, zoomFactor, context) {
	            var self = this;
	            var width = CellTypeContext._getAutoFitWidth(value, self._text, cellStyle, zoomFactor, context);
	            return width + self._marginLeft + self._marginRight;
	        },
	        getAutoFitHeight: function (value, text, cellStyle, zoomFactor, context) {
	            var self = this;
	            var height = CellTypeContext._getAutoFitHeight(value, self._text, cellStyle, zoomFactor, context);
	            return height + self._marginTop + self._marginBottom;
	        },
	        _cancelDefaultKeydown: function (event) {
	            if (this.isReservedKey(event)) {
	                cancelDefault(event);
	            }
	        },
	        isImeAware: function (context) {
	            return false;
	        },
	        toJSON: function () {
	            var self = this;
	            var dataDic = {typeName: self.typeName}, currentValue;
	            $_each(buttonCellTypePropertyDict, function (p, v) {
	                if (p !== 'buttonState') {
	                    currentValue = self['_' + p];
	                    if (currentValue !== v) {
	                        dataDic[p] = currentValue;
	                    }
	                }
	            });
	            return dataDic;
	        },
	        fromJSON: function (settings) {
	            var self = this;
	            $_each(buttonCellTypePropertyDict, function (p) {
	                var jsonValue = settings[p];
	                if (!isNullOrUndefined(jsonValue)) {
	                    self['_' + p] = jsonValue;
	                }
	            });
	        },
	        _createCellTypeElement: function (context) {
	        },
	        _cloneCellType: function () {
	        },
	    };
	
	    $_each(buttonCellTypePropertyDict, function (p) {
	        buttonCellType_prototype[p] = function (value) {
	            if (arguments.length === 0) {
	                return this['_' + p];
	            }
	            this['_' + p] = value;
	            return this;
	        };
	    });
	    $.extend(ButtonCellType.prototype, buttonCellType_prototype);
	    CellTypes.Button = ButtonCellType;
	    CellTypes._typeDict[6 ] = ButtonCellType;
	   
	
	    module.exports = CellTypes;
	
	}());

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Core = __webpack_require__(2);
	    var Common = __webpack_require__(3);
	
	    var _createElement = Core._util._createElement;
	    var isNullOrUndefined = Common._Types._isNullOrUndefined;
	    var Core_util = Core._util, getFontHeight = Core_util._getFontHeight, browser = Core_util._browser,
	        browser_mozilla = browser.mozilla;
	    var CellTypes = Core.CellTypes, BaseCellType = CellTypes.Base;
	    var $ = Core.GC$, $_each = $.each;
	    var _WordWrapHelper = Core._WordWrapHelper;
	
	    var keyword_null = null, Math_max = Math.max, Math_min = Math.min, Math_floor = Math.floor,
	        window_open = window.open;
	    var cssPosition = 'position', cssAbsolute = 'absolute', cssMargin = 'margin', cssFont = 'font', cssLeft = 'left',
	        cssTop = 'top', cssPadding = 'padding', cssBorder = 'border', cssBoxSizing = 'box-sizing',
	        cssBackgroundColor = 'background-color', cssContentBox = 'content-box', cssDefault = 'default', cssWhite = 'white',
	        STR_DIV = 'div';
	    var HYPERLINK_INFO = 'hyperlinkInfo';
	    
	    function _removeChild(parent, child) {
	        parent.removeChild(child);
	    }
	
	   
	   
	    
	    CellTypes.HyperLinkTargetType = {
	        
	        blank: 0,
	        
	        self: 1,
	        
	        parent: 2,
	        
	        top: 3
	    };
	    $.inherit(HyperLinkCellType, BaseCellType);
	    var hyperLinkCellTypePropertyDict = {
	        linkColor: '#0066cc',
	        visitedLinkColor: '#3399ff',
	        text: '',
	        linkToolTip: '',
	        target: 0 ,
	        activeOnClick: true,
	    };
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	
	   
	    
	
	    function HyperLinkCellType() {
	        var self = this;
	        BaseCellType.call(self);
	        self.typeName = 8  + '';
	        self._id = HyperLinkCellType._getUniqueId();
	        $_each(hyperLinkCellTypePropertyDict, function (p, v) {
	            self['_' + p] = v;
	        });
	        self._onAction = function (context) {
	            var sheet = context && context.sheet;
	            var row = context.row, col = context.col, sheetArea = context.sheetArea;
	            var link = sheet.getValue(row, col, sheetArea);
	            var targetValue = getTargetValue(this._target);
	            if (link) {
	                window_open(link, targetValue);
	            }
	        };
	    }
	
	    function getTargetValue(targetType) {
	        return ['_blank', '_self', '_parent', '_top'][targetType];
	    }
	
	    function calcPosition(cellRect, editorWidth, editorHeight, hAlign, vAlign, indent) {
	       
	        var x = 0;
	        var y = 0;
	        var width = cellRect.width;
	        var height = cellRect.height;
	        x = indent = indent || 0;
	        if (hAlign === 1 ) {
	            x = (width - editorWidth) / 2;
	        } else if (hAlign === 2 ) {
	            x = width - editorWidth - indent;
	        }
	        if (vAlign === 1 ) {
	            y = (height - editorHeight) / 2;
	        } else if (vAlign === 2 ) {
	            y = height - editorHeight;
	        }
	        return {x: x, y: y};
	    }
	
	
	    function getLinkRectForAutoFit(text, hAlign, font, indent) {
	        var ret = getLinkRect(text, font);
	        var w = ret.width;
	        w += (hAlign !== 1  && !isNullOrUndefined(indent)) === true ? indent : 0;
	        ret.width = w;
	        return ret;
	    }
	
	    function getLinkRectForIsHitTest(text, hAlign, vAlign, font, cellRect, indent) {
	        var ret = getLinkRect(text, font);
	        var p = calcPosition(cellRect, ret.width, ret.height, hAlign, vAlign, indent);
	        ret.x = p.x;
	        ret.y = p.y;
	        return ret;
	    }
	
	    function getLinkRect(text, font) {
	        var lineHeight = getFontHeight(font);
	        var width = Math.max(0, _WordWrapHelper._measureText(text, font, true));
	        var height = text.split(/\r\n|\r|\n/).length * lineHeight;
	        return {x: 0, y: 0, width: width, height: height};
	    }
	
	    function isHitHyperlink(x, y, cellStyle, cellRect, context, text) {
	        var sheet = context.sheet, render = sheet._render;
	        if (isNullOrUndefined(cellStyle)) {
	            return false;
	        }
	        if (!text) {
	            var value = sheet.getValue(context.row, context.col, context.sheetArea);
	            if (!isNullOrUndefined(value)) {
	                text = value + '';
	            }
	        }
	        if (!text) {
	            return false;
	        }
	        text = text.replace(/\s+/g, ' ');
	        var font = cellStyle && cellStyle.font ? cellStyle.font : render._getDefaultFont();
	        if (sheet.zoom() > 1) {
	            font = render._getZoomFont(font);
	        }
	        var lines = [text];
	        var indent = getTextIndent(cellStyle);
	        if(cellStyle.wordWrap) {
	            lines = _WordWrapHelper._getWrapInfo(text, cellRect.width - 3 - indent, font);
	            text = lines.join("\r\n");
	        }
	        var LinkRectDiv = getLinkRectForIsHitTest(text, cellStyle.hAlign, cellStyle.vAlign, font, cellRect, indent);
	        var y2 = cellRect.y + LinkRectDiv.y;
	        for(var i = 0; i < lines.length; i++) {
	            var linkRect = getLinkRectForIsHitTest(lines[i], cellStyle.hAlign, cellStyle.vAlign, font, cellRect, indent);
	            var x1 = cellRect.x + linkRect.x;
	            var x2 = Math_min(x1 + linkRect.width, cellRect.x + cellRect.width);
	            var y1 = y2;
	            y2 = Math_min(y1 + linkRect.height, cellRect.y + cellRect.height);
	            if (x1 <= x && x < x2 && y1 <= y && y < y2) {
	                return true;
	            }
	        }
	        return false;
	    }
	
	    function getTextIndent(style) {
	        return (style.textIndent || 0) * 8;
	    }
	
	    function hyperlinkCellType_getAutoFitWidthOrHeight(actualText, cellStyle, zoomFactor, context, isWidth) {
	        var sheet = context && context.sheet;
	        if (sheet) {
	            var render = sheet._render;
	            var font = cellStyle.font || render._getDefaultFont();
	            if (zoomFactor > 1) {
	                font = render._getZoomFont(font);
	            }
	            var indent = getTextIndent(cellStyle);
	            if(!cellStyle.wordWrap && !isWidth) {
	                actualText = actualText.replace(/\s+/g, ' ');
	            } else if(cellStyle.wordWrap) {
	                var row = context.row, col = context.col, sheetArea = context.sheetArea;
	                var columnWidth = 0;
	                var span = sheet._modelManager.findSpan(row, col, sheetArea);
	                if(span) {
	                    if(span.row >= row && span.rowCount <= 1 && span.col >= col && col === span.col) {
	                        columnWidth = sheet._getZoomColumnWidth(col);
	                        if(span.colCount > 1) {
	                            for(var colIdx = (col + 1); colIdx < (col + span.colCount); colIdx++) {
	                                columnWidth += sheet._getZoomColumnWidth(colIdx);
	                            }
	                        }
	                    }
	                } else {
	                    columnWidth = sheet._getZoomColumnWidth(col);
	                }
	                var lines = _WordWrapHelper._getWrapInfo(actualText, columnWidth - 3 - indent, font);
	                if(isWidth && actualText.split(/\r\n|\r|\n/).length > 1) {
	                    var width = 0;
	                    for (var i = 0; i < lines.length; i++) {
	                        width = Math.max(width, getLinkRectForAutoFit(lines[i], cellStyle.hAlign, font, getTextIndent(cellStyle)).width);
	                    }
	                    return width;
	                } else if (!isWidth) {
	                    actualText = lines.join('\r\n');
	                }
	            }
	            var linkRect = getLinkRectForAutoFit(actualText, cellStyle.hAlign, font, getTextIndent(cellStyle));
	            return isWidth ? linkRect.width : linkRect.height;
	        }
	        return 0;
	    }
	
	    var hyperLinkCellType_prototype = {
	        _paintLinkText: function (ctx, indent, x, y, w, h, style, options, lines, textHeight) {
	            var adjX = 1, textAlign = cssLeft, hAlign = style.hAlign, vAlign = style.vAlign, linkTextHeight = options.lineHeight;
	            var lineCount = lines.length;
	            adjX += indent;
	            if (hAlign === 1) {
	                adjX = w / 2;
	                textAlign = 'center';
	            } else if (hAlign === 2) {
	                adjX = w - 1;
	                adjX -= indent;
	                textAlign = 'right';
	            }
	            if (ctx.textAlign !== textAlign) {
	                ctx.textAlign = textAlign;
	            }
	            var adjY = 1, textBaseline = 'alphabetic', fontSize = options.fontInfo.fontSize,
	                baselineOffset = fontSize > 8 ? Math_floor((fontSize - 8) / 5 + 2) : 1,
	                lineOffset = linkTextHeight / 2 - fontSize / 2 + baselineOffset - 1;
	            adjY += linkTextHeight - lineOffset;
	            if (vAlign === 1 ) {
	                if (linkTextHeight < h) {
	                    if (browser_mozilla) {
	                        adjY = (h - textHeight) / 2 + 1;
	                    } else if (browser.msie) {
	                        adjY = (h - textHeight) / 2 + 0.5;
	                    } else {
	                        adjY = (h - textHeight) / 2;
	                    }
	                    if (Math_floor(adjY) !== adjY) {
	                        adjY = adjY + 0.5;
	                    }
	                    adjY += linkTextHeight / 2 - lineOffset;
	                }
	            } else if (vAlign === 2 ) {
	                adjY = h - textHeight - 2.5 - lineOffset;
	            }
	            if (ctx.textBaseline !== textBaseline) {
	                ctx.textBaseline = textBaseline;
	            }
	            var verticalPosition = y + adjY;
	            for(var i = 0; i < lineCount; i++) {
	                ctx.fillText(lines[i], x + adjX, verticalPosition);
	                var textLength = ctx.measureText(lines[i]).width;
	                var textDecoration = style.textDecoration;
	                if (textDecoration) {
	                    this._renderTextDecoration(ctx, textDecoration, x + adjX, verticalPosition, textLength, fontSize, baselineOffset);
	                }
	                verticalPosition += linkTextHeight;
	            }
	        },
	        _paintLinkUnderline: function (ctx, indent, x, y, w, h, style, options, lines) {
	            var hAlign = style.hAlign, vAlign = style.vAlign, linkTextHeight = options.lineHeight, linkTextWidth;
	            var lineCount = lines.length;
	            var x1, x2, y1 = 0, y2 = 0, linkTextPosition, xSkew = 0, ySkew = 0;
	            if (hAlign !== 2 ) {
	                xSkew = 1;
	            }
	            if (style.vAlign === 2 ) {
	                ySkew = -2.5;
	            }
	            ySkew -= Math_max(0, Math.round(linkTextHeight / 9) - 1);
	            if (ctx.strokeStyle !== ctx.fillStyle) {
	                ctx.strokeStyle = ctx.fillStyle;
	            }
	            ctx.lineWidth = 1;
	            ctx.beginPath();
	            for(var i = 0; i < lineCount; i++) {
	                linkTextWidth = ctx.measureText(lines[i]).width;
	                linkTextPosition = calcPosition(new Core.Rect(x, y, w, h), linkTextWidth, linkTextHeight * lineCount, hAlign, vAlign, indent);
	                x1 = xSkew + x + linkTextPosition.x;
	                x2 = x1 + linkTextWidth;
	                y1 = ySkew + y + linkTextPosition.y + linkTextHeight;
	                if (Math_floor(y1) === y1) {
	                    y1 = y1 + 0.5;
	                }
	                y2 = y1;
	                ctx.moveTo(x1, y1);
	                ctx.lineTo(x2, y2);
	                ctx.stroke();
	                ySkew += linkTextHeight ;
	            }
	        },
	        paintValue: function (ctx, value, x, y, w, h, style, options) {
	            var self = this;
	           
	            if (!ctx) {
	                return;
	            }
	           
	            var text = self.getText(value, options);
	            if (isNullOrUndefined(text)) {
	                return;
	            }
	            text = text + '';
	            var textSegment = text.split(/\r\n|\r|\n/);
	            var i = 0;
	            while(i < textSegment.length) {
	                textSegment[i] = textSegment[i].replace(/\s+/g, ' ');
	                i++;
	            }
	            text = textSegment.join('\r\n');
	           
	            var visited = false;
	            var modelManager = options.sheet._modelManager, row = options.row, col = options.col, sheetArea = options.sheetArea;
	            var hyperlinkInfo = modelManager.getValueForKey(row, col, HYPERLINK_INFO, sheetArea);
	            if (hyperlinkInfo) {
	                if (self._id === hyperlinkInfo.id) {
	                    visited = hyperlinkInfo.visited;
	                } else {
	                    modelManager.do('setValueForKey', row, col, HYPERLINK_INFO, undefined, sheetArea);
	                }
	            }
	            ctx.save();
	            ctx.beginPath();
	           
	            var fillStyle;
	            if (visited) {
	                fillStyle = self._visitedLinkColor;
	            } else {
	                fillStyle = self._linkColor;
	            }
	            if (fillStyle && ctx.fillStyle !== fillStyle) {
	                ctx.fillStyle = fillStyle;
	            }
	           
	            var font = style.font;
	            if (font && ctx.font !== font) {
	                Core_util._setContextFont(ctx, font);
	            }
	            var indent = getTextIndent(style);
	            if (options.sheet.outlineColumn && options.sheet.outlineColumn._isOutlineColumn(options.col)) {
	                indent = 0;
	            }
	            var wordWrap = style.wordWrap, lines = [], lineCount = 0, textHeight = 0;
	            if (wordWrap) {
	               
	               
	                var wordWrapWidth = w - 3 - indent;
	                wordWrapWidth -= 1;
	                lines = _WordWrapHelper._getWrapInfo(text, wordWrapWidth, font); 
	                lineCount = lines.length;
	                if (lineCount > 1 && style.vAlign !== 0 ) {
	                    var linkTextHeight = options.lineHeight;
	                    textHeight = (lineCount - 1) * linkTextHeight;
	                }
	            } else {
	                lines.push(text);
	            }
	            ctx.rect(x, y, w, h);
	            ctx.clip();
	            ctx.beginPath();
	           
	            self._paintLinkText(ctx, indent, x, y, w, h, style, options, lines, textHeight);
	           
	           
	            self._paintLinkUnderline(ctx, indent, x, y, w, h, style, options, lines);
	           
	            ctx.restore();
	        },
	       
	        getText: function (value, options) {
	            return this._text || value;
	        },
	        _triggerButtonClicked: function (sheet, row, col, sheetArea) {
	            if (!sheet._startEditByKeydown) {
	                var parent = sheet.parent;
	                if (parent) {
	                    parent._triggerButtonClicked(sheet, row, col, sheetArea);
	                }
	            }
	        },
	        getHitInfo: function (x, y, cellStyle, cellRect, context) {
	            var self = this;
	            if (context) {
	                var sheetArea = context.sheetArea;
	                if ((isNullOrUndefined(sheetArea) || sheetArea === 3 ) && cellStyle && cellRect) {
	                    return {
	                        x: x,
	                        y: y,
	                        row: context.row,
	                        col: context.col,
	                        cellStyle: cellStyle,
	                        cellRect: cellRect,
	                        sheetArea: sheetArea,
	                        isFocusAware: true,
	                        sheet: context.sheet,
	                        isReservedLocation: isHitHyperlink(x, y, cellStyle, cellRect, context, self._text)
	                    };
	                }
	            }
	            return keyword_null;
	        },
	        processMouseDown: function (hitInfo) {
	            var sheet = hitInfo && hitInfo.sheet, self = this;
	            if (!sheet || sheet.isEditing()) {
	                return;
	            }
	            if (hitInfo.isReservedLocation) {
	                self._isMouseDownLink = true;
	            }
	        },
	        processMouseUp: function (hitInfo) {
	            var sheet = hitInfo && hitInfo.sheet;
	            if (!sheet || sheet.isEditing()) {
	                return;
	            }
	            var self = this;
	            if (hitInfo.isReservedLocation && self._isMouseDownLink) {
	                self._executeOnClickEvent(hitInfo);
	            }
	            self._isMouseDownLink = false;
	        },
	        processMouseMove: function (hitInfo) {
	            var row = hitInfo.row, col = hitInfo.col, sheet = hitInfo.sheet, self = this;
	            if (!sheet || sheet.isEditing() && sheet.getActiveRowIndex() === row && sheet.getActiveColumnIndex() === col) {
	                return;
	            }
	            var canvas = sheet._getCanvas();
	            if (hitInfo.isReservedLocation) {
	                if (canvas) {
	                    self._showLinkToolTip(sheet, hitInfo);
	                    canvas.style.cursor = 'pointer';
	                }
	            } else {
	                self._hideLinkToolTip(sheet);
	                if (canvas) {
	                    canvas.style.cursor = cssDefault;
	                }
	            }
	        },
	        processMouseLeave: function (hitInfo) {
	            var sheet = hitInfo.sheet, self = this;
	            self._isMouseDownLink = false;
	            self._hideLinkToolTip(sheet);
	            if (sheet) {
	                var canvas = sheet._getCanvas();
	                if (canvas) {
	                    canvas.style.cursor = cssDefault;
	                }
	            }
	        },
	        _showLinkToolTip: function (sheet, hitInfo) {
	            var self = this;
	            if (self._linkToolTip) {
	                var tip = self._getLinkToolTipElement();
	                var $tip = $(tip);
	                $tip.text(self._linkToolTip);
	                var offset = sheet._eventHandler._getCanvasPosition();
	                var left = offset.left + hitInfo.x;
	                var top = offset.top + hitInfo.y + 20;
	                if ($tip.parent().length === 0) {
	                    var host = sheet && sheet._getHost();
	                    if (host) {
	                        host.insertBefore(tip, keyword_null);
	                    }
	                    $tip.css(cssTop, top).css(cssLeft, left);
	                }
	            }
	        },
	        _hideLinkToolTip: function (sheet) {
	            var self = this;
	            if (self._linkToolTipElement) {
	                var host = sheet && sheet._getHost();
	                if (host && self._linkToolTipElement.parentElement === host) {
	                    _removeChild(host, self._linkToolTipElement);
	                }
	                self._linkToolTipElement = keyword_null;
	            }
	        },
	        _getLinkToolTipElement: function () {
	            var self = this;
	            if (!self._linkToolTipElement) {
	                var div = _createElement(STR_DIV);
	                $(div).css(cssPosition, cssAbsolute).css(cssMargin, 0).css(cssPadding, 2).css(cssBorder, '1px #c0c0c0 solid')
	                    .css('box-shadow', '1px 2px 5px rgba(0,0,0,0.4)').css(cssBoxSizing, cssContentBox)
	                    .css(cssBackgroundColor, cssWhite).css(cssFont, '9pt Arial');
	                self._linkToolTipElement = div;
	            }
	            return self._linkToolTipElement;
	        },
	        isReservedKey: function (e, context) {
	            return e.keyCode === 32  && !e.ctrlKey && !e.shiftKey && !e.altKey;
	        },
	        processKeyUp: function (event, context) {
	            var sheet = context.sheet, self = this;
	            if (!sheet) {
	                return false;
	            }
	            self._executeOnClickEvent(context);
	            return true;
	        },
	        getAutoFitWidth: function (value, text, cellStyle, zoomFactor, context) {
	            return hyperlinkCellType_getAutoFitWidthOrHeight(this._text || value, cellStyle, zoomFactor, context, true);
	        },
	        getAutoFitHeight: function (value, text, cellStyle, zoomFactor, context) {
	            return hyperlinkCellType_getAutoFitWidthOrHeight(this._text || value, cellStyle, zoomFactor, context);
	        },
	        isImeAware: function (context) {
	            return false;
	        },
	        _executeOnClickEvent: function (context) {
	            var sheet = context && context.sheet;
	            var self = this;
	            var row = context.row, col = context.col, sheetArea = context.sheetArea;
	            var action = self.onClickAction();
	            action.call(this, context);
	            sheet._modelManager.do('setValueForKey', row, col, HYPERLINK_INFO, {id: self._id, visited: true}, sheetArea);
	            sheet.repaint(sheet.getCellRect(row, col));
	            self._triggerButtonClicked(sheet, row, col, sheetArea);
	        },
	       
	        
	        onClickAction: function (fn) {
	            if (arguments.length === 0) {
	                return this._onAction; 
	            }
	            if (fn) {
	                this._onAction = fn;
	            }
	            return this;
	        },
	        toJSON: function () {
	            var self = this;
	            var dataDic = {typeName: self.typeName}, currentValue;
	            $_each(hyperLinkCellTypePropertyDict, function (p, v) {
	                currentValue = self['_' + p];
	                if (currentValue !== v) {
	                    dataDic[p] = currentValue;
	                }
	            });
	            return dataDic;
	        },
	        fromJSON: function (settings) {
	            var self = this;
	            $_each(hyperLinkCellTypePropertyDict, function (p) {
	                var jsonValue = settings[p];
	                if (!isNullOrUndefined(jsonValue)) {
	                    self['_' + p] = jsonValue;
	                }
	            });
	        },
	        _createCellTypeElement: function (context) {
	        },
	        _cloneCellType: function () {
	            var self = this, currentValue;
	            var hCellType = new HyperLinkCellType();
	            $_each(hyperLinkCellTypePropertyDict, function (p, v) {
	                currentValue = self['_' + p];
	                if (currentValue !== v) {
	                    hCellType['_' + p] = currentValue;
	                }
	            });
	            hCellType._onAction = self._onAction;
	            return hCellType;
	        },
	    };
	
	    $_each(hyperLinkCellTypePropertyDict, function (p) {
	        hyperLinkCellType_prototype[p] = function (value) {
	            if (arguments.length === 0) {
	                return this['_' + p];
	            }
	            this['_' + p] = value;
	            return this;
	        };
	    });
	
	    $.extend(HyperLinkCellType.prototype, hyperLinkCellType_prototype);
	
	    HyperLinkCellType._getUniqueId = function () {
	        var self = this;
	        if (isNullOrUndefined(self._id)) {
	            self._id = 0;
	        }
	        return 'id_' + self._id++;
	    };
	    CellTypes.HyperLink = HyperLinkCellType;
	    CellTypes._typeDict[8 ] = HyperLinkCellType;
	   
	
	    module.exports = CellTypes;
	
	}());

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var Core = __webpack_require__(2);
	    var Common = __webpack_require__(3);
	
	    var _createElement = Core._util._createElement;
	    var isNullOrUndefined = Common._Types._isNullOrUndefined;
	    var Core_util = Core._util;
	    var cancelDefault = Core_util._cancelDefault;
	    var CellTypes = Core.CellTypes, BaseCellType = CellTypes.Base;
	    var $ = Core.GC$, $_extend = $.extend, $_each = $.each;
	    var adjustFontWithFallback = Core_util._adjustFontWithFallback;
	
	    var DOCUMENT = document;
	    var keyword_null = null, keyword_undefined = void 0, Math_max = Math.max,
	        convertToInt = parseInt;
	    var click_event = 'click', keydown_event = 'keydown', mouseover_event = 'mouseover', mouseout_event = 'mouseout';
	    var cssPosition = 'position', cssAbsolute = 'absolute', cssFont = 'font', cssLeft = 'left',
	        cssTop = 'top', attrGcUIElement = 'gcUIElement',
	        attrTabIndex = 'tabindex', cssNone = 'none',
	        cssWidth = 'width', cssHeight = 'height', cssOutline = 'outline', cssBoxSizing = 'box-sizing',
	        cssColor = 'color', cssBackgroundColor = 'background-color', cssZIndex = 'z-index',
	        cssDisplay = 'display', cssContentBox = 'content-box', cssWhite = 'white',
	        cssBlack = 'black', cssTitle = 'title', STR_DIV = 'div', STR_SPAN = 'span', STR_TEXT = 'text', STR_VALUE = 'value',
	        cssBorder = 'border';
	
	    function _appendChild(parent, child) {
	        parent.appendChild(child);
	    }
	    function _removeChild(parent, child) {
	        parent.removeChild(child);
	    }
	    function getComboBoxOnElement(editorContext) {
	        return editorContext && editorContext.parentNode.parentNode.comboBox;
	    }
	
	   
	   
	    
	    CellTypes.EditorValueType = {
	        
	        text: 0,
	        
	        index: 1,
	        
	        value: 2
	    };
	    var DefaultDropDownButtonWidth = 17, DefaultMaxVisibleItemCount = 20;
	    var COMBO_BOX_BORDER_WIDTH = 0, COMBO_BOX_EDITOR_LEFT_PADDING = 1, COMBO_BOX_EDITOR_TOP_PADDING = 1, DROP_DOWN_ITEM_LEFT_PADDING = COMBO_BOX_EDITOR_LEFT_PADDING;
	    var END_EDIT_EVENT = 'EndEdit.gcEditingInput';
	    var SCROLLBAR_SIZE = 18, HOVER_COLOR = 'lightgrey', SELECTED_COLOR = '#1E90FF';
	    var comboBoxCellTypePropertyDict = {
	        editorValueType: 0 ,
	        items: keyword_null,
	        itemHeight: 22,
	        editable: false,
	        maxDropDownItems: DefaultMaxVisibleItemCount
	    };
	    $.inherit(ComboBoxCellType, BaseCellType);
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	    function ComboBoxCellType() {
	        var self = this;
	        BaseCellType.call(self);
	        self.typeName = 7  + '';
	        self._autoFormatValue = false;
	        self._hasInPlaceEditor = false;
	        $_each(comboBoxCellTypePropertyDict, function (p, v) {
	            if (p === 'items') {
	                v = [];
	            }
	            self['_' + p] = v;
	        });
	    }
	
	    function _hasOwnProperty(obj, p) {
	        return obj.hasOwnProperty(p);
	    }
	    var comboBoxCellType_prototype = {
	        isReservedKey: function (e, context) {
	            return this._hasInPlaceEditor;
	        },
	        paintValue: function (ctx, value, x, y, w, h, style, options) {
	            var self = this, btnWidth = DefaultDropDownButtonWidth, txtWidth = Math_max(0, w - btnWidth - 1);
	           
	            if (style.hAlign === 3 ) {
	                style.hAlign = 0 ;
	            }
	           
	            if (style.wordWrap) {
	                style.wordWrap = false;
	            }
	           
	            if (txtWidth > 0 && h > 0) {
	                BaseCellType.prototype.paintValue.call(self, ctx, self.getText(value, options), x, y, txtWidth, h, style, options);
	            }
	           
	            ctx.save();
	            if (btnWidth > w || btnWidth > h) {
	                ctx.rect(x, y, w, h);
	                ctx.clip();
	            }
	            ctx.beginPath();
	            ctx.lineWidth = 2;
	            ctx.fillStyle = cssBlack;
	            ctx.moveTo(x + w - btnWidth + 3, y + (h - 2) / 2 - 2.5);
	            ctx.lineTo(x + w - btnWidth + 6, y + (h - 2) / 2 + 3.5);
	            ctx.lineTo(x + w - btnWidth + 9, y + (h - 2) / 2 - 2.5);
	            ctx.fill();
	            ctx.restore();
	        },
	       
	        getText: function (value, options) {
	            return value;
	        },
	        createEditorElement: function (context, cellWrapperElement) {
	            var sheet = context && context.sheet;
	            var parent = sheet && sheet.parent, host = parent && parent._host;
	            var zindex = Core_util._getPreferredZIndex(host) + 1000;
	            var defaults = sheet.defaults;
	            var self = this;
	            var comboBox = new ComboBox(cellWrapperElement, 0, 0, defaults.colWidth, defaults.rowHeight, zindex);
	            comboBox.editorValueType(self._editorValueType);
	            comboBox.items(self._items);
	            comboBox.itemHeight(self._itemHeight);
	            comboBox.itemCountPerPage(self._maxDropDownItems);
	            comboBox.editable(self._editable);
	            var editor = comboBox.getComboBox();
	           
	            Object.defineProperty(editor, 'comboBox', {
	                get: function () {
	                    return this._combo;
	                },
	                set: function (value) {
	                    if (this._combo !== value) {
	                       
	                        if (this._combo) {
	                            this._combo.dispose();
	                        }
	                       
	                        this._combo = value;
	                    }
	                }
	            });
	            editor.comboBox = comboBox;
	            return keyword_null;
	        },
	        getEditorValue: function (editorContext, context) {
	            var comboBox = getComboBoxOnElement(editorContext);
	            if (comboBox) {
	                this._autoFormatValue = !comboBox._isEditorValueInItems;
	            }
	            return comboBox && comboBox.editorValue();
	        },
	        setEditorValue: function (editorContext, value, context) {
	            var comboBox = getComboBoxOnElement(editorContext);
	            if (comboBox) {
	                comboBox.editorValue(value);
	            }
	        },
	        focus: function (editorContext, context) {
	            var comboBox = getComboBoxOnElement(editorContext);
	            if (comboBox) {
	                comboBox.focus();
	            }
	        },
	        selectAll: function (editorContext, context) {
	            var comboBox = getComboBoxOnElement(editorContext);
	            if (comboBox) {
	                comboBox.selectAll();
	            }
	        },
	        activateEditor: function (editorContext, cellStyle, cellRect, context) {
	            var self = this, sheet = context.sheet;
	            var comboBox = getComboBoxOnElement(editorContext);
	            if (comboBox) {
	                comboBox.editorValueType(self._editorValueType);
	                comboBox.items(self._items);
	                comboBox.itemHeight(self._itemHeight);
	                comboBox.itemCountPerPage(self._maxDropDownItems);
	                comboBox.editable(self._editable);
	                comboBox.bind(END_EDIT_EVENT, function (event, args) {
	                    var keyCode = args.keyCode;
	                    if (keyCode) {
	                        var commands = sheet._commandManager();
	                        var shortcutKey = commands.getShortcutKey(keyCode, false, false, false, false);
	                        var cmds = commands.getCommands(shortcutKey);
	                        if (cmds) {
	                            for (var i = 0, l = cmds.length; i < l; i++) {
	                                if (cmds[i]._name === 'navigationLeft' || cmds[i]._name === 'navigationRight') {
	                                    sheet._editorStatus = 1 ;
	                                }
	                                if (cmds[i].execute(sheet.parent, {sheetName: sheet.name()})) {
	                                    return true;
	                                }
	                            }
	                        }
	                    } else if (args.isMouse && comboBox._isDisplayMode) {
	                        sheet.endEdit();
	                    }
	                });
	            }
	            self._hasInPlaceEditor = true;
	        },
	        deactivateEditor: function (editorContext, context) {
	            if (editorContext) {
	                var comboBox = getComboBoxOnElement(editorContext);
	                if (comboBox) {
	                    comboBox.unbind(END_EDIT_EVENT);
	                    comboBox.closeDropDownList();
	                    comboBox._isDisplayMode = false;
	                }
	            }
	            this._hasInPlaceEditor = false;
	        },
	        updateEditor: function (editorContext, cellStyle, cellRect, context) {
	            var sheet = editorContext && context && context.sheet;
	            if (!sheet) {
	                return;
	            }
	            var comboBox = getComboBoxOnElement(editorContext);
	            if (cellStyle && comboBox) {
	                var render = sheet._render;
	                comboBox.updateStyle(cellStyle.backColor, cellStyle.foreColor, render._getZoomFont(cellStyle.font || render._getDefaultFont()));
	            }
	            if (cellRect && comboBox) {
	                comboBox.updateLocationAndSize(cellRect.x, cellRect.y, cellRect.width, cellRect.height);
	            }
	        },
	        format: function (value, format, conditionalForeColor, context) {
	            if (isNullOrUndefined(value)) {
	                return '';
	            }
	            var self = this, editorValueType = self._editorValueType, items = self._items, item;
	            if (items) {
	                var count = items.length;
	                if (editorValueType === 1 ) {
	                    var index = convertToInt(value);
	                    if (0 <= index && index < count) {
	                        item = items[index];
	                        if (item !== keyword_undefined && item !== keyword_null) {
	                            value = _hasOwnProperty(item, STR_TEXT) ? item.text : item;
	                        }
	                    }
	                } else if (editorValueType === 2 ) {
	                    for (var i = 0; i < count; i++) {
	                        item = items[i];
	                        if (item && _hasOwnProperty(item, STR_VALUE) && item.value === value) {
	                            value = item.text;
	                            break;
	                        }
	                    }
	                }
	            }
	            return BaseCellType.prototype.format.call(self, value, format, conditionalForeColor);
	        },
	        parse: function (text, formatStr, context) {
	            var self = this, editorValueType = self._editorValueType, items = self._items, item, i;
	            var parseText = BaseCellType.prototype.parse.call(self, text, formatStr);
	            if (items) {
	                var count = items.length;
	                if (editorValueType === 0 ) {
	                    return parseText;
	                } else if (editorValueType === 1 ) {
	                    for (i = 0; i < count; i++) {
	                        item = items[i];
	                        if (item && _hasOwnProperty(item, STR_TEXT) && item.text === parseText || item === parseText) {
	                            return i;
	                        }
	                    }
	                } else if (editorValueType === 2 ) {
	                    for (i = 0; i < count; i++) {
	                        item = items[i];
	                        if (item && _hasOwnProperty(item, STR_TEXT) && item.text === parseText) {
	                            return item.value;
	                        }
	                    }
	                }
	            }
	            return parseText;
	        },
	        getHitInfo: function (x, y, cellStyle, cellRect, context) {
	            if (!context) {
	                return keyword_null;
	            }
	            var sheetArea = context.sheetArea, sheet = context.sheet;
	            if ((isNullOrUndefined(sheetArea) || sheetArea === 3 ) && cellRect) {
	                var x2 = cellRect.x + cellRect.width;
	                var info = {
	                    x: x,
	                    y: y,
	                    row: context.row,
	                    col: context.col,
	                    cellStyle: cellStyle,
	                    cellRect: cellRect,
	                    sheetArea: sheetArea,
	                    sheet: sheet
	                };
	                if (x2 - DefaultDropDownButtonWidth <= x && x < x2) {
	                    info.isReservedLocation = true;
	                    return info;
	                }
	            }
	            return keyword_null;
	        },
	        processMouseDown: function (hitInfo) {
	            var sheet = hitInfo.sheet, sheetArea = hitInfo.sheetArea;
	            if ((isNullOrUndefined(sheetArea) || sheetArea === 3 ) && hitInfo.isReservedLocation && sheet) {
	                sheet.startEdit();
	                var comboBox = getComboBoxOnElement(sheet._editor);
	                if (comboBox) {
	                   
	                    if (Core_util._browser.mozilla) {
	                        comboBox._showTime = new Date().valueOf();
	                    }
	                    comboBox.showDropDownList();
	                    comboBox._isDisplayMode = true;
	                }
	            }
	        },
	        getAutoFitWidth: function (value, text, cellStyle, zoomFactor, context) {
	            if (cellStyle && cellStyle.wordWrap) {
	               
	                cellStyle.wordWrap = false;
	            }
	            var width = CellTypes.Context._getAutoFitWidth(value, text, cellStyle, zoomFactor, context);
	            return width + DefaultDropDownButtonWidth;
	        },
	        getAutoFitHeight: function (value, text, cellStyle, zoomFactor, context) {
	            if (cellStyle && cellStyle.wordWrap) {
	               
	                cellStyle.wordWrap = false;
	            }
	            return CellTypes.Context._getAutoFitHeight(value, text, cellStyle, zoomFactor, context);
	        },
	        isImeAware: function (context) {
	            return true;
	        },
	        _cloneCellType: function () {
	        },
	        toJSON: function () {
	            var self = this;
	            var dataDic = {typeName: self.typeName}, currentValue;
	            $_each(comboBoxCellTypePropertyDict, function (p, v) {
	                currentValue = self['_' + p];
	                var isNotDefaultValue = p === 'items' ? currentValue && currentValue.length > 0 : currentValue !== v;
	                if (isNotDefaultValue) {
	                    dataDic[p] = currentValue;
	                }
	            });
	            return dataDic;
	        },
	        fromJSON: function (settings) {
	            var self = this;
	            $_each(comboBoxCellTypePropertyDict, function (p) {
	                var jsonValue = settings[p];
	                if (!isNullOrUndefined(jsonValue)) {
	                    self['_' + p] = jsonValue;
	                }
	            });
	        }
	    };
	    $_each(comboBoxCellTypePropertyDict, function (p) {
	        comboBoxCellType_prototype[p] = function (value) {
	            if (arguments.length === 0) {
	                return this['_' + p];
	            }
	            this['_' + p] = value;
	            return this;
	        };
	    });
	    $_extend(ComboBoxCellType.prototype, comboBoxCellType_prototype);
	    CellTypes.ComboBox = ComboBoxCellType;
	    CellTypes._typeDict[7 ] = ComboBoxCellType;
	
	    function ComboBox(host, left, top, width, height, zindex) {
	        var self = this;
	        self._DOMObject = host;
	        var containerDiv = host.firstChild;
	        $(host).bind(keydown_event, function (event) {
	            self._onKeydown(event);
	        }).css(cssZIndex, zindex || 0).css(cssLeft, left).css(cssTop, top)
	            .css(cssWidth, width).css(cssHeight, height).css('overflow', 'visible')
	            .attr(attrGcUIElement, 'gcComboBox');
	       
	        var comboBoxEditorWidth = Math_max(0, width - DefaultDropDownButtonWidth);
	        var divObject, textareaObject;
	        self._editable = false;
	        self._divObject = divObject = _createElement(STR_DIV);
	        self._textareaObject = textareaObject = _createElement('textarea');
	        self._EDITOR = divObject;
	        _appendChild(containerDiv, divObject);
	        comboBox_setEditorDefaultCSS(divObject);
	        comboBox_setEditorDefaultCSS(textareaObject);
	        $(textareaObject).bind('keyup', function () {
	            var text = self._EDITOR.value;
	            self._text = text;
	            var value = self._textToValue(text);
	            self.editorValue(value);
	            self._selectByText(text);
	            self._removeTip();
	        }).bind(mouseover_event, function () {
	            self._updateTip();
	        }).bind(mouseout_event, function () {
	            self._removeTip();
	        });
	        $(divObject).bind(click_event, function () {
	            if (self._isDisplayMode) {
	                self._trigger(END_EDIT_EVENT, {isMouse: true});
	            } else {
	                self._toggleDropDownList();
	            }
	        }).bind(mouseover_event, function () {
	            self._updateTip();
	        }).bind(mouseout_event, function () {
	            self._removeTip();
	        });
	        self._updateEditor(0, 0, comboBoxEditorWidth, height);
	       
	        var dropDownButtonHost = self._BUTTON = _createElement(STR_DIV);
	        _appendChild(containerDiv, dropDownButtonHost);
	        $(dropDownButtonHost).css(cssBorder, cssNone)
	            .css(cssPosition, cssAbsolute).css(cssBackgroundColor, cssWhite).css(cssBoxSizing, cssContentBox).attr(attrGcUIElement, 'gcDropDownButton')
	            .bind(click_event, function () {
	               
	                if (!isNullOrUndefined(self._showTime)) {
	                    var lastUpdateShowTime = self._showTime;
	                    self._showTime = keyword_undefined;
	                    var currentTime = new Date().valueOf();
	                    if (currentTime - lastUpdateShowTime < 100) {
	                        return;
	                    }
	                }
	                if (self._isDisplayMode) {
	                    self._trigger(END_EDIT_EVENT, {isMouse: true});
	                } else {
	                    self._toggleDropDownList();
	                }
	            });
	        var canvas = _createElement('canvas');
	        self._canvas = canvas;
	        self._updateButton(comboBoxEditorWidth, 0, width - comboBoxEditorWidth, height);
	        _appendChild(dropDownButtonHost, canvas);
	       
	        var dropDownListHost = self._LIST = _createElement(STR_DIV);
	        _appendChild(containerDiv, dropDownListHost);
	        self._isShown = false;
	        $(dropDownListHost).css(cssPosition, cssAbsolute).css(cssBorder, '1px solid').css(cssBackgroundColor, cssWhite)
	            .css(cssZIndex, zindex || 0).css(cssOutline, cssNone).css(cssDisplay, cssNone).css('cursor', 'default')
	            .css(cssBoxSizing, cssContentBox).attr(attrGcUIElement, 'gcDropDownWindow').attr(attrTabIndex, -1)
	            .css(cssWidth, width - 2 * COMBO_BOX_BORDER_WIDTH).css(cssHeight, height);
	        self._updateList(0, height - 2 * COMBO_BOX_BORDER_WIDTH);
	        self._itemCount = 0;
	        var divList = self._divList = _createElement(STR_DIV);
	        _appendChild(dropDownListHost, divList);
	        self._scrollablePanel = new Core._ScrollablePanel(dropDownListHost, divList);
	        self._itemHeight = 22;
	        self._itemCountPerPage = DefaultMaxVisibleItemCount;
	        self._selectedIndex = -1;
	
	        self._editorValueType = 0 ;
	        self._items = [];
	    }
	    function comboBox_setEditorDefaultCSS(elem) {
	        $(elem).css('margin', 0).css('overflow', 'hidden').css('resize', cssNone).css(cssPosition, cssAbsolute)
	            .css('padding', COMBO_BOX_EDITOR_TOP_PADDING + 'px 0px 0px ' + COMBO_BOX_EDITOR_LEFT_PADDING + 'px').css(cssOutline, cssNone)
	            .css(cssBackgroundColor, cssWhite).css('white-space', 'nowrap').css(cssBoxSizing, cssContentBox).css(cssBorder, cssNone)
	            .attr(attrGcUIElement, 'gcComboBoxEditor').attr(attrTabIndex, -1);
	    }
	    $_extend(ComboBox.prototype, {
	        getComboBox: function () {
	            return this._DOMObject;
	        },
	        dispose: function () {
	            var _this = this;
	            $(_this._DOMObject).unbind(keydown_event);
	
	            $(_this._textareaObject).unbind("keyup").unbind(mouseover_event).unbind(mouseout_event);
	
	            $(_this._divObject).unbind(click_event).unbind(mouseover_event).unbind(mouseout_event);
	
	            $(_this._BUTTON).unbind(click_event);
	            $(_this._divList).find("div").forEach(function (item) {
	                $(item).unbind(mouseover_event).unbind(mouseout_event).unbind(click_event);
	            });
	
	            _this._scrollablePanel.dispose();
	        },
	        updateLocationAndSize: function (left, top, width, height) {
	            var self = this;
	            var comboBoxEditorWidth = Math_max(0, width - DefaultDropDownButtonWidth);
	            self._updateEditor(0, 0, comboBoxEditorWidth, height);
	            self._updateButton(comboBoxEditorWidth, 0, width - comboBoxEditorWidth, height);
	            self._updateList(0, height - 2 * COMBO_BOX_BORDER_WIDTH);
	            self.listWidth(width - 2 * COMBO_BOX_BORDER_WIDTH);
	            self._updateItemWidth();
	        },
	        updateStyle: function (backColor, foreColor, font) {
	            var self = this;
	            font = adjustFontWithFallback(font);
	           
	            backColor = backColor ? backColor : keyword_undefined;
	            $(self._EDITOR).css(cssBackgroundColor, backColor).css(cssColor, foreColor).css(cssFont, font);
	            $(self._BUTTON).css(cssBackgroundColor, backColor).css(cssColor, foreColor).css(cssFont, font);
	            $(self._LIST).css(cssBackgroundColor, backColor).css(cssColor, foreColor).css(cssFont, font);
	            $(self._DOMObject).css(cssBackgroundColor, 'transparent');
	        },
	        editorValueType: function (value) {
	            if (arguments.length === 0) {
	                return this._editorValueType;
	            }
	            this._editorValueType = value;
	            return this;
	        },
	        editorValue: function (value) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._editorValue;
	            }
	
	            if (value !== self._editorValue) {
	                self._editorValue = value;
	
	                var text = self._valueToText(value);
	                self.text(text);
	                self._selectByText(text, true);
	            }
	            return self;
	        },
	        _valueToText: function (value) {
	            var text, self = this, items = self._items, itemsLength = items.length, editorValueType = self._editorValueType, item;
	            self._isEditorValueInItems = true;
	            if (editorValueType === 1 ) {
	                item = items[value];
	                text = item && _hasOwnProperty(item, STR_TEXT) ? item.text : item;
	                if (text === keyword_undefined) {
	                    text = value;
	                    self._isEditorValueInItems = false;
	                }
	            } else if (editorValueType === 0 ) {
	                text = value;
	                for (var j = 0; j < itemsLength; j++) {
	                    item = items[j];
	                    if (item && _hasOwnProperty(item, STR_TEXT) && item.text === value || item === value) {
	                        break;
	                    }
	                }
	                if (j >= itemsLength) {
	                    self._isEditorValueInItems = false;
	                }
	            } else if (editorValueType === 2 ) {
	                for (var i = 0; i < itemsLength; i++) {
	                    item = items[i];
	                    if (item && _hasOwnProperty(item, STR_VALUE) && item.value === value) {
	                        text = item.text;
	                        break;
	                    }
	                }
	                if (i >= itemsLength) {
	                    text = value;
	                    self._isEditorValueInItems = false;
	                }
	            }
	           
	            if (isNullOrUndefined(value)) {
	                text = '';
	            }
	            return text;
	        },
	        _textToValue: function (text) {
	            var self = this, items = self._items, itemsLength = items.length, editorValueType = self._editorValueType, value = text, item;
	            if (editorValueType === 1 ) {
	                for (var i = 0; i < itemsLength; i++) {
	                    item = items[i];
	                    if (item && _hasOwnProperty(item, STR_TEXT) && item.text === text || item === text) {
	                        value = i;
	                    }
	                }
	            } else if (editorValueType === 2 ) {
	                for (var j = 0; j < itemsLength; j++) {
	                    item = items[j];
	                    if (item && _hasOwnProperty(item, STR_TEXT) && item.text === text) {
	                        value = item.value;
	                    } else if (item === text) {
	                        value = keyword_undefined;
	                    }
	                }
	            }
	            return value;
	        },
	        _selectByText: function (text, exactMatch) {
	            var i;
	            if (text) {
	                var items = this._items, length = items.length;
	                for (i = 0; i < length; i++) {
	                    var item = items[i];
	                    if (_hasOwnProperty(item, STR_TEXT)) {
	                        item = item.text;
	                    }
	                    if ((exactMatch ? item : item.toString().substr(0, text.length)) === text) {
	                        break;
	                    }
	                }
	                if (i >= length) {
	                    i = -1;
	                }
	            } else {
	                i = -1;
	            }
	            this._setSelectedIndexInternal(i);
	        },
	        _removeTip: function () {
	            $(this._EDITOR).removeAttr(cssTitle);
	        },
	        _updateTip: function () {
	            var self = this;
	            var textWidth = self._measureText(self._text);
	            var $DOMObject = $(self._EDITOR);
	            var containerWidth = $DOMObject.width();
	            if (textWidth > containerWidth + COMBO_BOX_EDITOR_LEFT_PADDING) {
	                $DOMObject.attr(cssTitle, self._text);
	            } else {
	                $DOMObject.removeAttr(cssTitle);
	            }
	        },
	        _updateEditor: function (left, top, width, height) {
	            width -= COMBO_BOX_BORDER_WIDTH;
	            height -= 2 * COMBO_BOX_BORDER_WIDTH;
	            $(this._EDITOR).css(cssLeft, left).css(cssTop, top).css(cssWidth, width - COMBO_BOX_EDITOR_LEFT_PADDING).css(cssHeight, height - COMBO_BOX_EDITOR_TOP_PADDING);
	        },
	        updateImeMode: function (editorContext, imeMode) {
	            if (this.isImeAware()) {
	                var comboBox = getComboBoxOnElement(editorContext);
	                if (comboBox && comboBox._EDITOR) {
	                    $(comboBox._EDITOR).css('ime-mode', imeMode);
	                }
	            }
	        },
	        editable: function (isEditable) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._editable;
	            }
	            if (self._editable !== isEditable) {
	                self._editable = isEditable;
	
	                var contentContainer = self._DOMObject.firstChild;
	                var DOMObject = self._EDITOR, $DOMObject = $(DOMObject);
	                var locationAndSize = {
	                    left: convertToInt($DOMObject.css(cssLeft)),
	                    top: convertToInt($DOMObject.css(cssTop)),
	                    width: convertToInt($DOMObject.css(cssWidth)),
	                    height: convertToInt($DOMObject.css(cssHeight))
	                };
	                var style = {
	                    backColor: $DOMObject.css(cssBackgroundColor),
	                    foreColor: $DOMObject.css(cssColor),
	                    font: DOMObject.style.font
	                };
	                _removeChild(contentContainer, DOMObject);
	
	                self._EDITOR = isEditable ? self._textareaObject : self._divObject;
	                _appendChild(contentContainer, self._EDITOR);
	
	                $(self._EDITOR).css(cssBackgroundColor, style.backColor).css(cssColor, style.foreColor).css(cssFont, style.font);
	                self._updateEditor(locationAndSize.left, locationAndSize.top, locationAndSize.width, locationAndSize.height);
	                return self;
	            }
	        },
	        text: function (newText) {
	            var self = this, DOMObject = self._EDITOR;
	            if (arguments.length === 0) {
	                return self._text;
	            }
	            if (newText !== self._text) {
	                self._text = newText;
	                if (self._editable) {
	                    DOMObject.value = newText;
	                } else {
	                    DOMObject.textContent = newText;
	                }
	            }
	        },
	        focus: function () {
	            var self = this, element = self._EDITOR;
	            element.focus();
	            if (self._editable) {
	                element.selectionStart = element.value.length;
	            }
	        },
	        selectAll: function () {
	            var self = this;
	            if (self._editable) {
	                self._EDITOR.select();
	            }
	        },
	        _updateButton: function (left, top, width, height) {
	            width -= COMBO_BOX_BORDER_WIDTH;
	            height -= 2 * COMBO_BOX_BORDER_WIDTH;
	            var self = this, canvas = self._canvas;
	            $(self._BUTTON).css(cssLeft, left).css(cssTop, top).css(cssWidth, width).css(cssHeight, height);
	            $(canvas).attr(cssWidth, width).attr(cssHeight, height);
	
	           
	            var canvasWidth = canvas.width, canvasHeight = canvas.height;
	            var context = canvas.getContext('2d');
	            context.beginPath();
	            context.lineWidth = 2;
	            context.fillStyle = cssBlack;
	            context.moveTo(canvasWidth - DefaultDropDownButtonWidth + 4, (canvasHeight - 2) / 2 - 2.5);
	            context.lineTo(canvasWidth - DefaultDropDownButtonWidth + 7, (canvasHeight - 2) / 2 + 3.5);
	            context.lineTo(canvasWidth - DefaultDropDownButtonWidth + 10, (canvasHeight - 2) / 2 - 2.5);
	            context.fill();
	        },
	        showDropDownList: function () {
	            var self = this, scrollablePanel = self._scrollablePanel;
	            self._isShown = true;
	
	            $(self._LIST).bind(keydown_event, function (event) {
	                self._onKeydown(event);
	            }).show();
	            self._isNeedVScrollbar = false;
	            self._updateItemHeight();
	            self._updateItemWidth();
	            if (self._isNeedVScrollbar) {
	                scrollablePanel._verticalSmallChange($(self._divList.children).height());
	                scrollablePanel._refreshLayout(false);
	            }
	            self._setSelectedItemBackColor(SELECTED_COLOR);
	            self._scrollToIndex(self._selectedIndex);
	            self.focus();
	        },
	        closeDropDownList: function () {
	            var self = this;
	            self._isShown = false;
	
	            $(self._LIST).unbind(keydown_event).hide();
	            self._setSelectedItemBackColor('');
	            self.focus();
	        },
	        _toggleDropDownList: function () {
	            this._isShown ? this.closeDropDownList() : this.showDropDownList();
	        },
	        listWidth: function (newWidth) {
	            var self = this, $List = $(self._LIST);
	            if (arguments.length === 0) {
	                return $List.width();
	            }
	            if (newWidth > 0) {
	                $List.width(newWidth);
	                self._scrollablePanel._refreshLayout(false);
	            }
	        },
	        listHeight: function (newHeight) {
	            var self = this, $List = $(self._LIST);
	            if (arguments.length === 0) {
	                return $List.height();
	            }
	            if (newHeight > 0) {
	                $List.height(newHeight);
	                self._scrollablePanel._refreshLayout(false);
	            }
	        },
	        _updateList: function (left, top) {
	            $(this._LIST).css(cssLeft, left).css(cssTop, top);
	        },
	        items: function (newItems) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._items;
	            }
	            if (newItems) {
	                self._items = newItems;
	               
	                var divList = self._divList, child;
	                while ((child = divList.firstChild)) {
	                    _removeChild(divList, child);
	                }
	                self._itemCount = 0;
	
	               
	                for (var i = 0, length = newItems.length; i < length; i++) {
	                    var item = newItems[i];
	                    self._addItem(_hasOwnProperty(item, STR_TEXT) ? item.text : item);
	                }
	                return self;
	            }
	        },
	        _addItem: function (item) {
	            var self = this;
	            var newItem = _createElement(STR_DIV);
	            var spanText = _createElement(STR_SPAN);
	            spanText.textContent = item.toString();
	            spanText.style.paddingLeft = DROP_DOWN_ITEM_LEFT_PADDING + 'px';
	            _appendChild(newItem, spanText);
	            _appendChild(self._divList, newItem);
	            self._itemCount++;
	            $(newItem).bind(click_event, function () {
	                var index = $(newItem).index();
	                self.selectedIndex(index);
	                self.closeDropDownList();
	                self._trigger(END_EDIT_EVENT, {isMouse: true});
	            }).bind(mouseover_event, function () {
	                var $item = $(newItem);
	                newItem.oldBackColor = $item.css(cssBackgroundColor);
	                $item.css(cssBackgroundColor, HOVER_COLOR);
	            }).bind(mouseout_event, function () {
	                $(newItem).css(cssBackgroundColor, newItem.oldBackColor || '');
	            });
	        },
	        _addMeasureSpan: function () {
	            var self = this;
	           
	           
	            self._measureSpan = _createElement(STR_SPAN);
	            $(self._measureSpan).css(cssDisplay, cssNone).css(cssFont, self._LIST.style.font).appendTo(DOCUMENT.body);
	        },
	        _removeMeasureSpan: function () {
	            _removeChild(DOCUMENT.body, this._measureSpan);
	        },
	        _measureTextWidth: function (text) {
	            this._measureSpan.textContent = text;
	            return $(this._measureSpan).width() + 2 + DROP_DOWN_ITEM_LEFT_PADDING;
	        },
	        _setSelectedItemBackColor: function (color) {
	            var self = this, index = self._selectedIndex;
	            if (0 <= index && index < self._itemCount) {
	                $(self._divList.children[index]).css(cssBackgroundColor, color);
	            }
	        },
	        _onKeydown: function (event) {
	            var self = this;
	            var keyCode = event.keyCode, which = event.which;
	            if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey ||
	               
	                (which === 37  || which === 39 ) && self.editable()) {
	                return;
	            }
	            var itemCount = self._itemCount;
	            var selectedIndex = self._selectedIndex;
	            var newSelectedIndex = 0;
	            if (which === 38  || which === 40 ) {
	                if (selectedIndex >= 0 && selectedIndex < itemCount) {
	                    newSelectedIndex = selectedIndex + (which === 38  ? -1 : 1);
	                }
	                if (newSelectedIndex >= 0 && newSelectedIndex < itemCount) {
	                    self.selectedIndex(newSelectedIndex);
	                }
	                if (self._isShown) {
	                    self._scrollToIndex(newSelectedIndex);
	                }
	                cancelDefault(event);
	            } else if (which === 13 || which === 37  || which === 39  || which === 9 ) {
	                self.selectedIndex(self._selectedIndex);
	                self.closeDropDownList();
	                self._trigger(END_EDIT_EVENT, {keyCode: keyCode});
	                cancelDefault(event);
	            } else if (which === 27 ) {
	                self.closeDropDownList();
	                self._trigger(END_EDIT_EVENT, {keyCode: keyCode});
	                cancelDefault(event);
	            }
	        },
	        getSelectedValue: function (selectedIndex, items, editorValueType) {
	            var item = items[selectedIndex];
	            var value;
	            if (!isNullOrUndefined(item)) {
	                if (editorValueType === 1 ) {
	                    value = selectedIndex;
	                } else if (editorValueType === 0 ) {
	                    value = _hasOwnProperty(item, STR_TEXT) ? item.text : item;
	                } else if (editorValueType === 2  && _hasOwnProperty(item, STR_VALUE)) {
	                    value = item.value;
	                }
	            }
	            return value;
	        },
	        _setSelectedIndexInternal: function (value) {
	            var self = this;
	            self._setSelectedItemBackColor('');
	            self._selectedIndex = value;
	            self._setSelectedItemBackColor(SELECTED_COLOR);
	            self._scrollToIndex(value);
	        },
	        selectedIndex: function (index) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._selectedIndex;
	            }
	            if (0 <= index && index < self._itemCount) {
	                self._setSelectedIndexInternal(index);
	
	                var value = self.getSelectedValue(self._selectedIndex, self._items, self._editorValueType);
	                if (!isNullOrUndefined(value)) {
	                    self.editorValue(value);
	                }
	            }
	        },
	        itemCountPerPage: function (value) {
	            if (arguments.length === 0) {
	                return this._itemCountPerPage;
	            }
	
	            if (value > 0) {
	                this._itemCountPerPage = value;
	            }
	        },
	        _measureText: function (text) {
	            this._addMeasureSpan();
	            var width = this._measureTextWidth(text);
	            this._removeMeasureSpan();
	            return width;
	        },
	        itemHeight: function (itemHeight) {
	            if (arguments.length === 0) {
	                return this._itemHeight;
	            }
	            if (itemHeight > 0) {
	                this._itemHeight = itemHeight;
	            }
	        },
	        _updateItemHeight: function () {
	            var self = this;
	            self._addMeasureSpan();
	            var firstItem = self._items[0];
	            var actualItemHeight = Math_max(self._itemHeight, $(self._measureSpan).text(isNullOrUndefined(firstItem) ? '' : firstItem).height());
	            $(self._divList.children).css(cssHeight, actualItemHeight);
	            var height, itemCount = self._itemCount, itemCountPerPage = self._itemCountPerPage;
	            if (itemCount <= itemCountPerPage) {
	                height = itemCount * actualItemHeight;
	            } else {
	                height = itemCountPerPage * actualItemHeight;
	                self._isNeedVScrollbar = true;
	            }
	            self.listHeight(height);
	            self._removeMeasureSpan();
	        },
	        _updateItemWidth: function () {
	            var self = this;
	            self._addMeasureSpan();
	            var longestItemWidth = 0, width;
	            var items = self._items;
	            if (items) {
	                for (var i = 0, length = items.length; i < length; i++) {
	                    var item = items[i];
	                    width = self._measureTextWidth(_hasOwnProperty(item, STR_TEXT) ? item.text : item);
	                    if (longestItemWidth < width) {
	                        longestItemWidth = width;
	                    }
	                }
	            }
	            self._removeMeasureSpan();
	
	            if (self.listWidth() < longestItemWidth + SCROLLBAR_SIZE) {
	                self.listWidth(longestItemWidth + SCROLLBAR_SIZE);
	            }
	        },
	        _scrollToIndex: function (index) {
	            if (index >= 0 && index < this._itemCount) {
	                var child = this._divList.children[index];
	                this._scrollablePanel._scrollChildIntoView(child);
	            }
	        },
	        bind: function (type, data, fn) {
	            $(this._DOMObject).bind(type, data, fn);
	        },
	        unbind: function (type, fn) {
	            $(this._DOMObject).unbind(type, fn);
	        },
	        _trigger: function (type, data) {
	            $(this._DOMObject).trigger(type, data);
	        }
	    });
	   
	
	    module.exports = CellTypes;
	
	}());

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.celltypes.12.0.0.js.map