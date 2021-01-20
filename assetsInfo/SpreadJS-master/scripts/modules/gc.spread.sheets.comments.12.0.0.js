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
var GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["Comments"] =
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
	
	    var comments = __webpack_require__(1);
	    __webpack_require__(4);
	    __webpack_require__(5);
	    
	    module.exports = comments;
	
	}());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var Sheets = __webpack_require__(2);
	    var Commands = Sheets.Commands;
	    var Worksheet = Sheets.Worksheet;
	    var keyword_null = null, keyword_undefined = void 0, Math_max = Math.max, Math_min = Math.min, Math_floor = Math.floor, Math_atan2 = Math.atan2, Math_abs = Math.abs, strDefault = 'default';
	    var $ = Sheets.GC$, $_extend = $.extend;
	    var createElement = Sheets._util._createElement;
	    var Common = __webpack_require__(3);
	    var arrayHelper = Common._ArrayHelper;
	    var commentStorageKey = 'comment';
	    var _FocusHelper = Sheets._FocusHelper;
	    var _DPIHelper = Sheets._DPIHelper;
	    var util = Sheets._util;
	    var Events = Sheets.Events;
	    var cancelDefault = util._cancelDefault;
	    var getDistance = util._getDistance;
	    var getTextHeight = util._getTextHeight;
	    var parseFloatFn = parseFloat;
	    var StringHelper = Common._StringHelper;
	    var CanvasHelper = Sheets._CanvasHelper;
	
	    var DOCUMENT = document;
	    var MOUSE = 'mouse', MOVE = 'move', MOUSEDOWN = MOUSE + 'down', MOUSEMOVE = MOUSE + MOVE, MOUSEUP = MOUSE + 'up',
	        MOUSE_WHEEL = MOUSE + 'wheel', DOM_MOUSE_SCROLL = 'DOMMouseScroll',
	        LEFT = 'left', TOP = 'top', RIGHT = 'right', BOTTOM = 'bottom', WIDTH = 'width', HEIGHT = 'height', CSS_POSITION = 'position',
	        CSS_ABSOLUTE = 'absolute', CSS_OVERFLOW = 'overflow', CSS_VISIBLE = 'visible', CSS_ZINDEX = 'z-index', CSS_HIDDEN = 'hidden',
	        CSS_BOX_SIZING = 'box-sizing', CSS_CONTENT_BOX = 'content-box', CSS_PADDING = 'padding', CSS_PX = 'px', CSS_DIV = 'div',
	        COMMENT_NS = '.comment', FLOAT_BLOCK_CANVAS_NS = '.floatBlockCanvas', HOST_CONTAINER_NS = '.hostContainer',
	        LINE_CANVAS_CONTAINER_NS = '.lineCanvasContainer', HOST_NS = '.host', EDITOR_NS = '.editor', GC_SPREAD_NS = 'gc-spread-',
	        CLASS_NAME = 'className', CURSOR = 'cursor', TEXT = 'text', COMMENT_ZINDEX_MIN = 701, NORMAL_COMMENT_ZINDEX_MAX = 898,
	        NO_USER_SELECT = 'gc-no-user-select', BLANK_SPACE = ' ', CSS_UN_SELECTABLE = 'unselectable', CSS_ON = 'on',
	        COMMENT_EDITOR = 'comment_editor', COMMENT_INDICATOR = 'comment_indicator',
	        CSS_FONT_FAMILY = 'font-family', CSS_FONT_STYLE = 'font-style', CSS_FONT_SIZE = 'font-size', CSS_FONT_WEIGHT = 'font-weight',
	        COLOR = 'color', CSS_BACKGROUND_COLOR = 'background-' + COLOR, CSS_TEXT_ALIGN = TEXT + '-align', CSS_TEXT_DECORATION = TEXT + '-decoration',
	        TEXT_AREA = 'textArea', LINE_CANVAS_NS = '.lineCanvas', COMMENT_DOCUMENT_NS = '.commentDocument', DASH_RESIZE = '-resize',
	        CSS_LINE_HEIGHT = 'line-height';
	
	    function createPoint(x, y) {
	        return new Sheets.Point(x, y);
	    }
	
	    function createRect(x, y, w, h) {
	        return new Sheets.Rect(x, y, w, h);
	    }
	
	    function getHeight(obj) {
	        return obj.height;
	    }
	    function getWidth(obj) {
	        return obj.width;
	    }
	    function _canEditComment(sheet, comment) {
	        var options = sheet.options;
	        return !options.isProtected || options.protectionOptions.allowEditObjects || comment && !comment.locked();
	    }
	
	    $_extend(Worksheet.prototype, {
	        _paintComment: function (clipRect) {
	            var sheet = this,
	                commentRender = sheet._commentRender();
	            if (!sheet._hoverCell) {
	                var layout = sheet._getSheetLayout(),
	                    rect;
	                for (var r = 0; r <= 2; r++) {
	                    for (var c = 0; c <= 2; c++) {
	                        rect = layout._viewportRect(r, c);
	                        if (!rect || getWidth(rect) === 0 || getHeight(rect) === 0) {
	                            continue;
	                        }
	                        if (!clipRect || rect.intersectRect(clipRect)) {
	                            var commentManager = sheet._modelManager._comments;
	                            if (commentRender && commentManager) {
	                                commentRender._renderComment(commentManager);
	                            }
	                        }
	                    }
	                }
	            }
	        }
	    });
	
	    var CellRange = Sheets.CellRange;
	   
	    
	    CellRange.prototype.comment = function (value) {
	       
	        var self = this, sheet = self.sheet, row = self.row, col = self.col;
	        if (arguments.length === 0) {
	            return sheet._modelManager._comments.get(row, col);
	        }
	        if (value instanceof Comment) { 
	            sheet._modelManager._comments._addInternal(row, col, value);
	        }
	        return self;
	    };
	
	    var showComment = function (s, e) {
	        var t = s._getCanvasOffset();
	        var target = s.hitTest(e.pageX - t.left, e.pageY - t.top);
	        if (target) {
	           
	            hoverShowComment(s, target);
	        }
	    };
	
	    var bindEvents = function (host, sheet) {
	        var commentManager = sheet._modelManager._comments;
	        sheet.bind(Events.TopRowChanged + COMMENT_NS, function () {
	            commentManager._updateCommentsLayoutWhenSheetScroll();
	        });
	        sheet.bind(Events.LeftColumnChanged + COMMENT_NS, function () {
	            commentManager._updateCommentsLayoutWhenSheetScroll();
	        });
	        sheet.bind(Events.FloatingElementSelected + COMMENT_NS, function (event, data) {
	            if (data.type !== 'comments') {
	                commentManager._clearActiveComment();
	            }
	        });
	        host.bind(MOUSEDOWN + COMMENT_NS, function () {
	            commentManager._clearActiveComment();
	        }).bind(MOUSE_WHEEL + COMMENT_NS, function (e) {
	            showComment(sheet, e);
	        }).bind(MOUSEMOVE + COMMENT_NS, function (e) {
	            showComment(sheet, e);
	        });
	    };
	
	
	
	    var unbindEvents = function (sheet, host) {
	        host.unbind(COMMENT_NS);
	        sheet.unbind(COMMENT_NS);
	    };
	
	   
	    function updateCommentsInSpanChangedArea(isAddSpan, row, col, rowCount, colCount) {
	        var self = this, commentsManager = self._modelManager._comments, comment;
	        if (isAddSpan && commentsManager) {
	            var comments = commentsManager.all();
	            for (var i = 0; i < comments.length; i++) {
	                comment = comments[i];
	                var rowIndex = comment._rowIndex,
	                    colIndex = comment._colIndex;
	                if (rowIndex === row && colIndex === col) {
	                    continue;
	                }
	                if (rowIndex >= row && rowIndex < row + rowCount && colIndex >= col && colIndex < col + colCount) {
	                    commentsManager.remove(rowIndex, colIndex);
	                }
	            }
	        }
	        comment = commentsManager.get(row, col);
	        if (comment) {
	            var view = commentsManager._getCommentView(comment);
	            if (view) {
	                view._updateAbsoluteLocationAndLayout();
	            }
	        }
	    }
	
	    function paintCommentFloatLayoutPanel() {
	        var self = this, commentRender = self._commentRender();
	        if (commentRender) {
	            commentRender._renderCommentFloatPanel(self);
	        }
	    }
	
	    function paintCommentCellAdorner(ctx, sheetArea, cell) {
	        var self = this,
	            commentRender = self._commentRender();
	        if (commentRender) {
	            commentRender._renderCommentCellAdorner(ctx, sheetArea, cell);
	        }
	    }
	
	    function hoverShowComment(sheet, target) {
	        var row = -1, col = -1;
	        if (target && target.rowViewportIndex >= 0 && target.colViewportIndex >= 0) {
	            row = target.row;
	            col = target.col;
	        }
	        if (sheet.parent) {
	            if (row < 0 || col < 0) {
	                return;
	            }
	            var comment = sheet._modelManager._comments.get(row, col);
	            sheet._modelManager._comments._hoverShow(comment);
	        }
	    }
	
	    function getRowHeight(sheet, row) {
	        return sheet && sheet.getRowHeight(row);
	    }
	
	    function getColumnWidth(sheet, col) {
	        return sheet && sheet.getColumnWidth(col);
	    }
	
	    function getViewportLeftColumn(sheet, columnViewportIndex) {
	        return sheet && sheet.getViewportLeftColumn(columnViewportIndex);
	    }
	
	    function getViewportTopRow(sheet, rowViewportIndex) {
	        return sheet && sheet.getViewportTopRow(rowViewportIndex);
	    }
	
	    Events.CommentChanged = 'CommentChanged';
	   
	    
	    var CommentState = {
	        
	        active: 1,
	        
	        edit: 2,
	        
	        normal: 3
	    };
	   
	    
	    var DisplayMode = {
	        
	        alwaysShown: 1,
	        
	        hoverShown: 2
	    };
	
	    var Padding = (function () {
	       
	        
	        function Padding(top, right, bottom, left) {
	            var self = this;
	            if (arguments.length <= 1) {
	                self[TOP] = self[RIGHT] = self[BOTTOM] = self[LEFT] = top || 0;
	            } else {
	                self[TOP] = top;
	                self[RIGHT] = right;
	                self[BOTTOM] = bottom;
	                self[LEFT] = left;
	            }
	        }
	
	        Padding.prototype = {
	            constructor: Padding,
	            clone: function () {
	                var self = this;
	                return new Padding(self[TOP], self[RIGHT], self[BOTTOM], self[LEFT]);
	            },
	            toString: function () {
	                var self = this, result = '', properties = [TOP, RIGHT, BOTTOM, LEFT];
	                properties.forEach(function (pName) {
	                    result += self[pName] + CSS_PX + BLANK_SPACE;
	                });
	                return result.trim();
	            }
	        };
	        return Padding;
	    })();
	
	    var Comment = (function () {
	       
	        
	        function Comment(text) {
	            var self = this;
	            self._rowIndex = -1;
	            self._colIndex = -1;
	            self.text(text || '');
	           
	           
	           
	            self.zIndex(NORMAL_COMMENT_ZINDEX_MAX);
	        }
	
	        var propertyNames = [];
	
	        function defProperty(propertyName, defaultValue, valueCheck) {
	            propertyNames.push(propertyName);
	            return Sheets._util._defProperty(propertyName, defaultValue, propertyChangeCallback(propertyName), valueCheck);
	        }
	
	        function propertyChangeCallback(propertyName) {
	            var pname = propertyName;
	            return function (value, oldValue) {
	                var self = this, sheet = self._sheet;
	
	               
	                if (sheet) {
	                    sheet._modelManager._saveCommentChange({ type: "property", comment: self, name: pname, value: oldValue });
	
	                    if (sheet._layoutSuspended <= 0) {
	                        sheet._paintComment();
	                    }
	                    sheet._trigger(Events.CommentChanged, {
	                        sheet: sheet,
	                        sheetName: sheet.name(),
	                        comment: self,
	                        propertyName: pname
	                    });
	                }
	            };
	        }
	
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	       
	        
	
	        var propertiesInfo = [
	            [TEXT, ''],
	            ['location', createPoint(9, -18)],
	            [WIDTH, 160, function (value) {
	                return (value > 0);
	            }],
	            [HEIGHT, 100, function (value) {
	                return (value > 0);
	            }],
	            ['fontFamily', 'Arial'],
	            ['fontStyle', 'normal'],
	            ['fontSize', '9pt', function(value) {
	               
	                return /^\d+pt$/.test(value) && (parseInt(value) > 0);
	            }],
	            ['fontWeight', 'normal'],
	            ['textDecoration', 0 ],
	            ['foreColor', 'black'],
	            ['locked', true],
	            ['lockText', true],
	            ['horizontalAlign', 0 ],
	            ['autoSize', false],
	            ['dynamicSize', true, function (value) {
	                return (typeof value === 'boolean' && this.dynamicMove());
	            }],
	            ['dynamicMove', true, function (value) {
	                if (!value) {
	                    this.dynamicSize(false);
	                }
	                return true;
	            }],
	            ['backColor', '#FFFFE1'],
	            ['opacity', 1, function (value) {
	                return (value >= 0 && value <= 1);
	            }],
	            ['borderWidth', 1, function (value) {
	                return (value >= 1);
	            }],
	            ['borderStyle', 'solid'],
	            ['borderColor', 'black'],
	            ['padding'],
	            ['showShadow', false],
	            ['displayMode', 2 ],
	            ['commentState', 3 ],
	            ['zIndex', -1],
	            ['ignoreDefaultLocation', false]
	        ];
	        var proto = {
	            clone: function () {
	                var self = this;
	                var comment = new Comment();
	                propertyNames.forEach(function (p) {
	                    var t = self[p]();
	                    if (self[p].isDefault && self[p].isDefault(t)) {
	                        return;
	                    }
	                    comment[p]((t && t.clone) ? t.clone() : t);
	                });
	
	                comment._sheet = self._sheet;
	                comment._rowIndex = self._rowIndex;
	                comment._colIndex = self._colIndex;
	                return comment;
	            },
	            toJSON: function () {
	                var self = this;
	                var jsonData = {
	                    rowIndex: self._rowIndex,
	                    colIndex: self._colIndex
	                };
	                propertyNames.forEach(function (p) {
	                    var t = self[p]();
	                    if (self[p].isDefault && self[p].isDefault(t)) {
	                        return;
	                    }
	                    jsonData[p] = (t && t.clone) ? t.clone() : t;
	                });
	                return jsonData;
	            },
	            fromJSON: function (jsonData) {
	                if (!jsonData) {
	                    return;
	                }
	                var self = this;
	
	                propertyNames.forEach(function (p) {
	                    var t = jsonData[p];
	                    if (t === keyword_undefined) {
	                        return;
	                    }
	
	                    if (p === 'location') {
	                        self.location(new Sheets.Point(t.x, t.y), false);
	                    } else if (p === 'padding') {
	                        self.padding(new Padding(t.top, t.right, t.bottom, t.left), false);
	                    } else {
	                        self[p](t, false);
	                    }
	                });
	
	                if (jsonData.rowIndex !== keyword_undefined) {
	                    self._rowIndex = jsonData.rowIndex;
	                }
	                if (jsonData.colIndex !== keyword_undefined) {
	                    self._colIndex = jsonData.colIndex;
	                }
	            }
	        };
	        propertiesInfo.forEach(function (pInfo) {
	            proto[pInfo[0]] = defProperty(pInfo[0], pInfo[1], pInfo[2]);
	        });
	       
	        var oldZIndexFn = proto.zIndex;
	        proto.zIndex = function () {
	            var result = oldZIndexFn.apply(this, arguments);
	            if (arguments.length === 0 && result === NORMAL_COMMENT_ZINDEX_MAX) {
	                var count = this._sheet.comments._commentCounter, index = this._index;
	                result = NORMAL_COMMENT_ZINDEX_MAX - (count - 1 - index);
	            }
	            return result;
	        };
	
	        $_extend(Comment.prototype, proto);
	        return Comment;
	    })();
	
	    var CommentView = (function () {
	        function CommentView(comment, commentManager) {
	            var self = this, sheet = comment && comment._sheet;
	            self._rowViewportIndex = 1;
	            self._columnViewportIndex = 1;
	            self._comment = comment;
	            self._updateCommentViewportIndex();
	            self._zoomFactor = sheet.zoom();
	            self._commentManager = commentManager;
	            self._editor = commentManager._editorDom;
	            self._init();
	            var adjustedRect = self._getAdjustedCommentRect(self._getAbsoluteLocation(), comment.width(), comment.height());
	            self._absoluteLocation = createPoint(adjustedRect.x, adjustedRect.y);
	            self._updateStartCoordinate();
	            self._updateEndCoordinate();
	        }
	
	        Sheets._defineFeature(CommentView);
	        function createResizeRect(resizeHitRects, x, y, s, cursor) {
	            var r = createRect(x, y, s, s);
	            r.cursor = cursor;
	            resizeHitRects.push(r);
	        }
	
	        function css(commentView, name, value, value2) {
	            $(commentView._floatBlockCanvas).css(name, value);
	            $(commentView._hostContainer).css(name, value2);
	        }
	
	        function getLineActualTextHeight(lines, font) {
	            var length = lines.length, totalHeight = 0;
	            for (var i = 0; i < length; i++) {
	                totalHeight += getTextHeight(lines[i], font);
	            }
	            return totalHeight;
	        }
	
	        CommentView.prototype = {
	            constructor: CommentView,
	            _init: function () {
	                var self = this, sheet = self._comment._sheet;
	
	                self._floatBlockCanvasClassName = GC_SPREAD_NS + 'floatBlockCanvas';
	                self._hostContainerClassName = GC_SPREAD_NS + 'host-container';
	                self._hostClassName = GC_SPREAD_NS + 'host';
	                self._lineCanvasClassName = GC_SPREAD_NS + 'lineCanvas';
	                self._floatBlockCanvasContainer = createElement(CSS_DIV);
	                $(self._floatBlockCanvasContainer).addClass(GC_SPREAD_NS + 'floatBlockCanvas-container')
	                    .css([CSS_POSITION, CSS_OVERFLOW, CSS_BOX_SIZING], [CSS_ABSOLUTE, CSS_HIDDEN, CSS_CONTENT_BOX]);
	
	                self._floatBlockCanvas = createElement('canvas');
	                _DPIHelper._adjustDevicePixel(self._floatBlockCanvas, null, sheet);
	                $(self._floatBlockCanvas).addClass(self._floatBlockCanvasClassName)
	                    .css([LEFT, TOP, CSS_POSITION], [0, 0, CSS_ABSOLUTE]);
	
	                self._hostContainer = createElement(CSS_DIV);
	                $(self._hostContainer).addClass(self._hostContainerClassName)
	                    .css([CSS_POSITION, CSS_BOX_SIZING, CSS_OVERFLOW], [CSS_ABSOLUTE, CSS_CONTENT_BOX, CSS_HIDDEN]);
	
	                self._host = createElement(CSS_DIV);
	                $(self._host).addClass(self._hostClassName + BLANK_SPACE + NO_USER_SELECT)
	                    .css([LEFT, TOP, WIDTH, HEIGHT, CSS_POSITION, 'word-wrap', 'word-break', 'white-space', CSS_OVERFLOW, CSS_BOX_SIZING, CSS_UN_SELECTABLE, CSS_LINE_HEIGHT],
	                        [0, 0, '100%', '100%', CSS_ABSOLUTE, 'break-word', 'normal', 'pre-wrap', CSS_HIDDEN, CSS_CONTENT_BOX, CSS_ON, 'normal']);
	
	                $(self._hostContainer).append(self._host);
	                $(self._floatBlockCanvasContainer).append(self._floatBlockCanvas).append(self._hostContainer);
	
	                self._lineCanvasContainer = createElement(CSS_DIV);
	                $(self._lineCanvasContainer).addClass(GC_SPREAD_NS + 'lineCanvas-container')
	                    .css([CSS_POSITION, CSS_OVERFLOW, 'pointer-events'], [CSS_ABSOLUTE, CSS_HIDDEN, 'none']);
	
	                self._lineCanvas = createElement('canvas');
	                _DPIHelper._adjustDevicePixel(self._lineCanvas, keyword_null, sheet);
	                $(self._lineCanvas).addClass(self._lineCanvasClassName)
	                    .css([LEFT, RIGHT, CSS_POSITION], [0, 0, CSS_ABSOLUTE]);
	                $(self._lineCanvasContainer).append(self._lineCanvas);
	
	                self._resizeHitRects = [];
	                self._hostMargin = 7;
	                self._isMoving = false;
	                self._isResizing = false;
	                CommentView._callFeatureHandler(self, 'init', [self._floatBlockCanvas, self._host]);
	            },
	
	           
	            _open: function () {
	                var self = this, sheet = self._comment._sheet;
	                if (!self._commentLayoutPanel && sheet) {
	                    self._commentLayoutPanel = sheet._commentRender()._commentLayoutPanel;
	                }
	                if (!self._commentLayoutPanel) {
	                    return;
	                }
	                self._commentLayoutPanel.appendChild(self._lineCanvasContainer);
	                self._attachLineCanvasEventHandler();
	                self._commentLayoutPanel.appendChild(self._floatBlockCanvasContainer);
	                self._attachEventHandler(self._floatBlockCanvas, FLOAT_BLOCK_CANVAS_NS);
	                self._attachEventHandler(self._hostContainer, HOST_CONTAINER_NS);
	                if (self._isEditing()) {
	                    self._attachEditorEventHandler();
	                } else {
	                    self._attachHostEventHandler();
	                }
	                self._absoluteLocation = self._getAbsoluteLocation();
	                self._updateLayout();
	            },
	            _close: function () {
	                var self = this;
	                if (self._floatBlockCanvasContainer && self._lineCanvasContainer && self._commentLayoutPanel) {
	                   
	                    self._detachEventHandler(self._floatBlockCanvas, FLOAT_BLOCK_CANVAS_NS);
	                    self._detachEventHandler(self._hostContainer, HOST_CONTAINER_NS);
	                    self._detachHostEventHandler();
	                    self._detachLineCanvasEventHandler();
	                    self._detachEditorEventHandler();
	                    $(self._floatBlockCanvasContainer).remove();
	                    $(self._lineCanvasContainer).remove();
	                }
	            },
	            _getActualWidth: function () {
	                return this._comment.width() * this._zoomFactor;
	            },
	            _getActualHeight: function () {
	                return this._comment.height() * this._zoomFactor;
	            },
	            _getAbsoluteLocation: function () {
	                var self = this, comment = self._comment;
	                if (comment === self._commentManager._hoverShowComment && comment.commentState() === 3 
	                    && !comment.ignoreDefaultLocation()) {
	                    comment._hoverLocation = self._convertToAbsoluteLocation(createPoint(9, -18));
	                    return comment._hoverLocation;
	                }
	                return self._convertToAbsoluteLocation(comment.location());
	            },
	
	           
	            _convertToAbsoluteLocation: function (relativeLocation) {
	                var self = this, comment = self._comment, sheet = comment && comment._sheet, zoomFactor = self._zoomFactor;
	                var absoluteLocation = createPoint(0, 0);
	
	                if (sheet) {
	                    var cellRect = self._getCellRect(sheet, comment._rowIndex, comment._colIndex, self._rowViewportIndex, self._columnViewportIndex);
	                    if (cellRect.x !== keyword_null && cellRect.x !== undefined && cellRect.y !== keyword_null && cellRect.y !== undefined && getWidth(cellRect) && getHeight(cellRect)) {
	                        var sheetLayout = sheet._getSheetLayout();
	                        absoluteLocation.x = cellRect.x + getWidth(cellRect) + relativeLocation.x * zoomFactor - sheetLayout._rowHeaderWidth;
	                        absoluteLocation.y = cellRect.y + relativeLocation.y * zoomFactor - sheetLayout._colHeaderHeight;
	                    }
	                }
	                return absoluteLocation;
	            },
	            _getCellRect: function (sheet, row, col, rowViewportIndex, columnViewportIndex) {
	                var self = this, rect = createRect(0, 0, 0, 0), layout = sheet._getSheetLayout(),
	                    scrollTopRow = getViewportTopRow(sheet, rowViewportIndex),
	                    scrollLeftColumn = getViewportLeftColumn(sheet, columnViewportIndex),
	                    x, y, zoomFactor = self._zoomFactor;
	                x = getDistance(sheet, scrollLeftColumn, col, false);
	                y = getDistance(sheet, scrollTopRow, row, true);
	
	
	                if (row >= scrollTopRow) {
	                    rect.y = y;
	                } else {
	                    rect.y = -y;
	                }
	                if (col >= scrollLeftColumn) {
	                    rect.x = x;
	                } else {
	                    rect.x = -x;
	                }
	                var range = sheet.getSpan(row, col);
	                if (range !== keyword_undefined && range !== keyword_null) {
	                    rect.height = getDistance(sheet, row, row + range.rowCount, true);
	                    rect.width = getDistance(sheet, col, col + range.colCount, false);
	                } else {
	                    rect[HEIGHT] = getRowHeight(sheet, row) * zoomFactor;
	                    rect[WIDTH] = getColumnWidth(sheet, col) * zoomFactor;
	                }
	                rect.x += layout._rowHeaderWidth;
	                rect.y += layout._colHeaderHeight;
	
	                var frozenWidth = layout._frozenWidth, frozenHeight = layout._frozenHeight;
	                if (rowViewportIndex === 1) {
	                    rect.y += frozenHeight;
	                } else if (rowViewportIndex === 2) {
	                    rect.y += frozenHeight + layout._viewportHeight;
	                }
	                if (columnViewportIndex === 1) {
	                    rect.x += frozenWidth;
	                } else if (columnViewportIndex === 2) {
	                    rect.x += frozenWidth + layout._viewportWidth;
	                }
	                return rect;
	            },
	            _convertToRelativeLocation: function (absoluteLocation) {
	                var self = this, comment = self._comment, sheet = comment && comment._sheet, zoomFactor = self._zoomFactor;
	                var relativeLocation = createPoint(0, 0);
	                if (sheet) {
	                    var cellRect = self._getCellRect(sheet, comment._rowIndex, comment._colIndex, self._rowViewportIndex, self._columnViewportIndex);
	                    if (cellRect.x !== keyword_null && cellRect.x !== keyword_undefined && cellRect.y !== keyword_null && cellRect.y !== keyword_undefined && getWidth(cellRect) && getHeight(cellRect)) {
	                        var sheetLayout = sheet._getSheetLayout();
	                        relativeLocation.x = (absoluteLocation.x - (cellRect.x + getWidth(cellRect) - sheetLayout._rowHeaderWidth)) / zoomFactor;
	                        relativeLocation.y = (absoluteLocation.y - (cellRect.y - sheetLayout._colHeaderHeight)) / zoomFactor;
	                    }
	                }
	                return relativeLocation;
	            },
	
	           
	            _updateLayoutWhenLocationChanged: function () {
	                var self = this;
	                self._absoluteLocation = self._getAbsoluteLocation();
	                self._updateStartCoordinate();
	                self._updateEndCoordinate();
	                self._updateLayout();
	            },
	            _updateLayoutWhenWidthHeightChanged: function () {
	                var self = this;
	                self._absoluteLocation = self._getAbsoluteLocation();
	                self._updateEndCoordinate();
	            },
	            _updateLayoutWhenRowColumnChanged: function () {
	                var self = this, comment = self._comment;
	                if (comment.dynamicMove()) {
	                    if (comment.dynamicSize()) {
	                       
	                       
	                        self._updateSizeAndLocationByCoordinate();
	                    } else {
	                       
	                       
	                       
	                        self._updateLocationByCoordinate();
	                        self._updateEndCoordinate();
	                    }
	                } else {
	                   
	                   
	                   
	                    self._updateStartCoordinate();
	                    self._updateEndCoordinate();
	                    var relativeLocation = self._convertToRelativeLocation(self._absoluteLocation === comment._hoverLocation ? self._getAbsoluteLocation() : self._absoluteLocation);
	                    comment.location(relativeLocation);
	                }
	            },
	            _updateAbsoluteLocationAndLayout: function () {
	                var self = this;
	                self._absoluteLocation = self._getAbsoluteLocation();
	                self._updateLayout();
	            },
	            _updateLocationByCoordinate: function () {
	               
	                var self = this, comment = self._comment;
	                var absoluteLocation = self._getLocationByCoordinate();
	                self._absoluteLocation = absoluteLocation;
	                comment.location(self._convertToRelativeLocation(absoluteLocation), false);
	                self._updateLayout();
	            },
	            _getLocationByCoordinate: function () {
	                var self = this, comment = self._comment, sheet = comment && comment._sheet, zoomFactor = self._zoomFactor;
	                var viewportLeftColumn = getViewportLeftColumn(sheet, self._columnViewportIndex),
	                    viewportTopRow = getViewportTopRow(sheet, self._rowViewportIndex);
	               
	                var x = 0;
	                for (var i = 0; i < self._columnViewportIndex; i++) {
	                    x += sheet.getViewportWidth(i);
	                }
	
	                var w = getDistance(sheet, viewportLeftColumn, self._startColumn, false);
	                if (viewportLeftColumn < self._startColumn) {
	                    x += w;
	                } else {
	                    x -= w;
	                }
	                var startColumnWidth = getColumnWidth(sheet, self._startColumn);
	                if (startColumnWidth < self._startColumnOffset) {
	                    self._startColumnOffset = startColumnWidth;
	                }
	                x = x + self._startColumnOffset * zoomFactor;
	               
	                var y = 0;
	                for (var j = 0; j < self._columnViewportIndex; j++) {
	                    y += sheet.getViewportHeight(j);
	                }
	
	                var h = getDistance(sheet, viewportTopRow, self._startRow, true);
	                if (viewportTopRow < self._startRow) {
	                    y += h;
	                } else {
	                    y -= h;
	                }
	
	                var startRowHeight = getRowHeight(sheet, self._startRow);
	                if (startRowHeight < self._startRowOffset) {
	                    self._startRowOffset = startRowHeight;
	                }
	                y = y + self._startRowOffset * zoomFactor;
	                return createPoint(x, y);
	            },
	            _updateSizeByCoordinate: function () {
	               
	                var self = this, comment = self._comment, sheet = comment && comment._sheet;
	               
	                var width = getDistance(sheet, self._startColumn, self._endColumn, false);
	                var startColumnWidth = getColumnWidth(sheet, self._startColumn);
	                if (startColumnWidth < self._startColumnOffset) {
	                    self._startColumnOffset = startColumnWidth;
	                }
	                var endColumnWidth = getColumnWidth(sheet, self._endColumn);
	                if (endColumnWidth < self._endColumnOffset) {
	                    self._endColumnOffset = endColumnWidth;
	                }
	                width = width - self._startColumnOffset + self._endColumnOffset;
	               
	                var height = getDistance(sheet, self._startRow, self._endRow, true);
	                var actualStartRowHeight = getRowHeight(sheet, self._startRow);
	                if (actualStartRowHeight < self._startRowOffset) {
	                    self._startRowOffset = actualStartRowHeight;
	                }
	                var actualEndRowHeight = getRowHeight(sheet, self._endRow);
	                if (actualEndRowHeight < self._endRowOffset) {
	                    self._endRowOffset = actualEndRowHeight;
	                }
	                height = height - self._startRowOffset + self._endRowOffset;
	                comment.width(width);
	                comment.height(height);
	            },
	            _updateSizeAndLocationByCoordinate: function () {
	                var self = this;
	                self._updateSizeByCoordinate();
	                self._updateLocationByCoordinate();
	            },
	
	           
	            _updateStartCoordinate: function () {
	               
	                var self = this, comment = self._comment, sheet = comment && comment._sheet, zoomFactor = self._zoomFactor;
	                if (!self._absoluteLocation) {
	                    return;
	                }
	                var viewportLeftColumn = getViewportLeftColumn(sheet, self._columnViewportIndex),
	                    viewportTopRow = getViewportTopRow(sheet, self._rowViewportIndex);
	                var startX;
	                if (self._columnViewportIndex === 0) {
	                    startX = self._absoluteLocation.x;
	                } else if (self._columnViewportIndex === 1) {
	                    startX = self._absoluteLocation.x - sheet.getViewportWidth(0);
	                } else if (self._columnViewportIndex === 2) {
	                    startX = self._absoluteLocation.x - (sheet.getViewportWidth(0) + sheet.getViewportWidth(1));
	                }
	                var startY;
	                if (self._rowViewportIndex === 0) {
	                    startY = self._absoluteLocation.y;
	                } else if (self._rowViewportIndex === 1) {
	                    startY = self._absoluteLocation.y - sheet.getViewportHeight(0);
	                } else if (self._rowViewportIndex === 2) {
	                    startY = self._absoluteLocation.y - (sheet.getViewportHeight(0) + sheet.getViewportHeight(1));
	                }
	                var startLocation = createPoint(startX, startY);
	                var x = 0, y = 0;
	                for (var col = viewportLeftColumn; col < sheet.getColumnCount(); col++) {
	                    var actualColWidth = getColumnWidth(sheet, col) * zoomFactor;
	                    if (x + actualColWidth < startLocation.x) {
	                        x += actualColWidth;
	                    } else {
	                        self._startColumn = col;
	                        self._startColumnOffset = (startLocation.x - x) / zoomFactor;
	                        break;
	                    }
	                }
	                for (var row = viewportTopRow; row < sheet.getRowCount(); row++) {
	                    var actualRowHeight = getRowHeight(sheet, row) * zoomFactor;
	                    if (y + actualRowHeight < startLocation.y) {
	                        y += actualRowHeight;
	                    } else {
	                        self._startRow = row;
	                        self._startRowOffset = (startLocation.y - y) / zoomFactor;
	                        break;
	                    }
	                }
	            },
	            _updateEndCoordinate: function () {
	               
	                var self = this, comment = self._comment, sheet = comment && comment._sheet, zoomFactor = self._zoomFactor;
	                if (!self._absoluteLocation) {
	                    return;
	                }
	                var viewportLeftColumn = getViewportLeftColumn(sheet, self._columnViewportIndex),
	                    viewportTopRow = getViewportTopRow(sheet, self._rowViewportIndex);
	                var endX;
	                if (self._columnViewportIndex === 0) {
	                    endX = self._absoluteLocation.x + self._getActualWidth();
	                } else if (self._columnViewportIndex === 1) {
	                    endX = self._absoluteLocation.x + self._getActualWidth() - sheet.getViewportWidth(0);
	                } else if (self._columnViewportIndex === 2) {
	                    endX = self._absoluteLocation.x + self._getActualWidth() - (sheet.getViewportWidth(0) + sheet.getViewportWidth(1));
	                }
	                var endY;
	                if (self._rowViewportIndex === 0) {
	                    endY = self._absoluteLocation.y + self._getActualHeight();
	                } else if (self._rowViewportIndex === 1) {
	                    endY = self._absoluteLocation.y + self._getActualHeight() - sheet.getViewportHeight(0);
	                } else if (self._rowViewportIndex === 2) {
	                    endY = self._absoluteLocation.y + self._getActualHeight() - (sheet.getViewportHeight(0) + sheet.getViewportHeight(1));
	                }
	                var endLocation = createPoint(endX, endY);
	                var x = 0, y = 0;
	                for (var col = viewportLeftColumn; col < sheet.getColumnCount(); col++) {
	                    var actualColWidth = getColumnWidth(sheet, col) * zoomFactor;
	                    if (x + actualColWidth < endLocation.x) {
	                        x += actualColWidth;
	                    } else {
	                        self._endColumn = col;
	                        self._endColumnOffset = (endLocation.x - x) / zoomFactor;
	                        break;
	                    }
	                }
	                for (var row = viewportTopRow; row < sheet.getRowCount(); row++) {
	                    var actualRowHeight = getRowHeight(sheet, row) * zoomFactor;
	                    if (y + actualRowHeight < endLocation.y) {
	                        y += actualRowHeight;
	                    } else {
	                        self._endRow = row;
	                        self._endRowOffset = (endLocation.y - y) / zoomFactor;
	                        break;
	                    }
	                }
	            },
	
	           
	            _onRowsAdded: function (row, rowCount) {
	                var self = this, comment = self._comment;
	               
	                if (row <= self._startRow) {
	                    if (comment.dynamicMove()) {
	                        self._startRow += rowCount;
	                        self._endRow += rowCount;
	                    }
	                } else if (row > self._startRow && row <= self._endRow && comment.dynamicSize()) {
	                    self._endRow += rowCount;
	                }
	                self._updateSizeAndLocationByCoordinate();
	            },
	            _onColumnsAdded: function (column, columnCount) {
	                var self = this, comment = self._comment;
	               
	                if (column <= self._startColumn) {
	                    if (comment.dynamicMove()) {
	                        self._startColumn += columnCount;
	                        self._endColumn += columnCount;
	                    }
	                } else if (column > self._startColumn && column <= self._endColumn && comment.dynamicSize()) {
	                    self._endColumn += columnCount;
	                }
	                self._updateSizeAndLocationByCoordinate();
	            },
	            _onRowsRemoved: function (row, rowCount) {
	                var self = this, comment = self._comment;
	               
	                var endRemovedRow = row + rowCount - 1;
	                if (row < self._startRow) {
	                    if (endRemovedRow < self._startRow) {
	                        if (comment.dynamicMove()) {
	                            self._startRow -= rowCount;
	                            self._endRow -= rowCount;
	                        }
	                    } else if (endRemovedRow < self._endRow && comment.dynamicMove()) {
	                        if (comment.dynamicSize()) {
	                            self._endRow -= rowCount;
	                        } else {
	                            self._endRow -= self._startRow - row + 1;
	                        }
	                        self._startRow = row;
	                        self._startRowOffset = 0;
	                    }
	                } else if (row <= self._endRow) {
	                    if (endRemovedRow < self._endRow) {
	                        if (comment.dynamicSize()) {
	                            self._endRow -= rowCount;
	                        }
	                    } else if (comment.dynamicSize()) {
	                        self._endRow = row;
	                        self._endRowOffset = 0;
	                    }
	                }
	                self._updateSizeAndLocationByCoordinate();
	            },
	            _onColumnsRemoved: function (column, columnCount) {
	                var self = this, comment = self._comment;
	               
	                var endRemovedColumn = column + columnCount - 1;
	                if (column < self._startColumn) {
	                    if (endRemovedColumn < self._startColumn) {
	                        if (comment.dynamicMove()) {
	                            self._startColumn -= columnCount;
	                            self._endColumn -= columnCount;
	                        }
	                    } else if (endRemovedColumn < self._endColumn && comment.dynamicMove()) {
	                        if (comment.dynamicSize()) {
	                            self._endColumn -= columnCount;
	                        } else {
	                            self._endColumn -= self._startColumn - column + 1;
	                        }
	                        self._startColumn = column;
	                        self._startColumnOffset = 0;
	                    }
	                } else if (column <= self._endColumn) {
	                    if (endRemovedColumn < self._endColumn) {
	                        if (comment.dynamicSize()) {
	                            self._endColumn -= columnCount;
	                        }
	                    } else if (comment.dynamicSize()) {
	                        self._endColumn = column;
	                        self._endColumnOffset = 0;
	                    }
	                }
	                self._updateSizeAndLocationByCoordinate();
	            },
	
	            _updateLayout: function () {
	                var self = this, comment = self._comment, sheet = comment._sheet;
	                if (self._isOpened()) {
	                   
	                    var sheetZoomFactor = sheet.zoom();
	                    if (self._zoomFactor !== sheetZoomFactor) {
	                        self._zoomFactor = sheetZoomFactor;
	                        self._absoluteLocation = self._getLocationByCoordinate();
	                    } else {
	                        self._zoomFactor = sheetZoomFactor;
	                        if ((self._absoluteLocation === comment._hoverLocation) &&
	                            (comment.displayMode() === 1  || comment.commentState() === 2 )) {
	                           
	                            self._absoluteLocation = self._getAbsoluteLocation();
	                        }
	                    }
	                    self._updateCommentViewportIndex();
	                    self._updateIndicatorSize();
	                    self._formatComment();
	                    self._updateLineContainerLayout();
	                    self._updateAdornerLayout();
	                   
	                    if (util._browser.chrome) {
	                        self._offsetCommentLayoutInChrome();
	                    }
	                }
	            },
	            _updateIndicatorSize: function () {
	                var self = this, sheet = self._comment._sheet;
	                var useTouchLayout = sheet.parent && sheet.parent.options.useTouchLayout;
	                if (useTouchLayout) {
	                    self._hostMargin = 11;
	                } else {
	                    self._hostMargin = 7;
	                }
	            },
	            _updateCommentViewportIndex: function () {
	                var self = this, comment = self._comment, sheet = comment._sheet;
	                self._rowViewportIndex = sheet._getRowViewportIndex(comment._rowIndex);
	                self._columnViewportIndex = sheet._getColumnViewportIndex(comment._colIndex);
	            },
	            _formatComment: function () {
	                var self = this, comment = self._comment;
	                var targetDom = comment.commentState() === 2  ? self._editor : self._host;
	                self._formatCommentState();
	                self._formatCommentStyle(targetDom);
	                self._formatCommentText(targetDom);
	                self._formatCommentRect(targetDom);
	                self._formatCommentProtection();
	            },
	            _formatCommentText: function (targetDom) {
	                var self = this, comment = self._comment;
	                if (targetDom === self._host) {
	                    targetDom.innerHTML = StringHelper._escapeHtml(comment.text());
	                }
	               
	               
	               
	               
	            },
	            _formatCommentRect: function (targetDom) {
	                var self = this, comment = self._comment, absoluteLocation = (comment.commentState() === 2  || comment.displayMode() === 1 ) ? self._getAbsoluteLocation() : self._absoluteLocation, zoomFactor = self._zoomFactor;
	                if (!absoluteLocation) {
	                    return;
	                }
	                var adjustedRect;
	                if (self._isResizing) {
	                    adjustedRect = self._getAdjustedCommentRect(absoluteLocation, comment.width(), comment.height());
	                } else {
	                    adjustedRect = self._getAdjustedCommentRect(absoluteLocation);
	                }
	                self._adjustCommentRect(adjustedRect);
	                var adjustedWidth = getWidth(adjustedRect) * zoomFactor, adjustedHeight = getHeight(adjustedRect) * zoomFactor, left = adjustedRect.x, top = adjustedRect.y, right = left + adjustedWidth, bottom = top + adjustedHeight, margin = self._hostMargin, rect = self._getViewportRect(self._rowViewportIndex, self._columnViewportIndex);
	               
	                if (left < rect.x) {
	                    css(self, LEFT, left - rect.x, left + margin - rect.x);
	                    adjustedWidth += left - rect.x;
	                    left = rect.x;
	                } else {
	                    css(self, LEFT, 0, margin);
	                    if (right > rect.x + getWidth(rect)) {
	                        adjustedWidth += ((rect.x + getWidth(rect) - 1) - right);
	                    }
	                }
	               
	                adjustedWidth = Math_min(getWidth(rect) - 1, adjustedWidth);
	               
	                if (top < rect.y) {
	                    css(self, TOP, top - rect.y, top + margin - rect.y);
	                    adjustedHeight += top - rect.y;
	                    top = rect.y;
	                } else {
	                    css(self, TOP, 0, margin);
	                    if (bottom > rect.y + getHeight(rect)) {
	                        adjustedHeight += ((rect.y + getHeight(rect) - 1) - bottom);
	                    }
	                }
	               
	                adjustedHeight = Math_min(getHeight(rect) - 1, adjustedHeight);
	               
	                $(self._floatBlockCanvasContainer).css({
	                    left: left,
	                    top: top,
	                    width: adjustedWidth,
	                    height: adjustedHeight
	                });
	                var width = adjustedWidth, height = adjustedHeight;
	               
	                _DPIHelper._setSize(self._floatBlockCanvas, width, height);
	               
	                var hostContainerWidth = Math_max(0, width - 2 * (margin + comment.borderWidth())), hostContainerHeight = Math_max(0, height - 2 * (margin + comment.borderWidth()));
	                $(self._hostContainer).css({
	                    width: hostContainerWidth,
	                    height: hostContainerHeight
	                });
	               
	                var targetDomWidth = hostContainerWidth, targetDomHeight = hostContainerHeight;
	                var padding = comment.padding();
	                if (padding) {
	                    targetDomWidth -= Math.ceil(parseFloatFn(padding.left) + parseFloatFn(padding.right));
	                    targetDomHeight -= Math.ceil(parseFloatFn(padding.top) + parseFloatFn(padding.bottom));
	                }
	                $(targetDom).css({
	                    width: Math_max(0, targetDomWidth),
	                    height: Math_max(0, targetDomHeight)
	                });
	            },
	            _adjustCommentRect: function (adjustedRect) {
	                var self = this, comment = self._comment, absoluteLocation = self._absoluteLocation;
	                if (adjustedRect.x !== absoluteLocation.x || adjustedRect.y !== absoluteLocation.y || getWidth(adjustedRect) !== comment.width() || getHeight(adjustedRect) !== comment.height()) {
	                    var location = self._convertToRelativeLocation(createPoint(adjustedRect.x, adjustedRect.y)), width = getWidth(adjustedRect), height = getHeight(adjustedRect);
	                    var commentlocation = comment.location();
	                    if (location.x !== commentlocation.x || location.y !== commentlocation.y) {
	                        comment.location(location, false);
	                    }
	                    if (width !== comment.width()) {
	                        comment.width(width, false);
	                    }
	                    if (height !== comment.height()) {
	                        comment.height(height, false);
	                    }
	                    if (comment.dynamicMove()) {
	                        self._absoluteLocation = createPoint(adjustedRect.x, adjustedRect.y);
	                    }
	                }
	            },
	            _formatCommentProtection: function () {
	                var self = this, comment = self._comment, sheet = comment && comment._sheet;
	                if (_canEditComment(sheet)) {
	                    self._attachEventHandler(self._floatBlockCanvas, FLOAT_BLOCK_CANVAS_NS);
	                    self._attachEventHandler(self._hostContainer, HOST_CONTAINER_NS);
	                    self._attachLineCanvasEventHandler();
	                    self._attachHostEventHandler();
	                    self._attachEditorEventHandler();
	                } else {
	                    if (comment.locked()) {
	                        self._detachEventHandler(self._floatBlockCanvas, FLOAT_BLOCK_CANVAS_NS);
	                        self._attachMouseWheelEvent(self._floatBlockCanvas);
	                        self._detachEventHandler(self._hostContainer, HOST_CONTAINER_NS);
	                        self._attachMouseWheelEvent(self._hostContainer);
	                        self._floatBlockCanvas.style.cursor = strDefault;
	                        self._hostContainer.style.cursor = strDefault;
	                    } else {
	                        self._attachEventHandler(self._floatBlockCanvas, FLOAT_BLOCK_CANVAS_NS);
	                        self._attachEventHandler(self._hostContainer, HOST_CONTAINER_NS);
	                    }
	                    if (comment.lockText()) {
	                        self._detachHostEventHandler();
	                        self._attachMouseWheelEvent(self._host);
	                        self._detachEditorEventHandler();
	                        self._attachMouseWheelEvent(self._editor);
	                        if (comment.locked() || comment.commentState() !== 1 ) {
	                            comment.commentState(3 );
	                        }
	                        self._host.style.cursor = comment.locked() ? strDefault : MOVE;
	                    } else {
	                        self._attachHostEventHandler();
	                        self._attachEditorEventHandler();
	                    }
	                    self._attachLineCanvasEventHandler();
	                }
	            },
	            _formatCommentState: function () {
	                var self = this, comment = self._comment, commentManager = self._commentManager, sheet = comment && comment._sheet;
	                switch (comment.commentState()) {
	                    case 1 
	                    :
	                        commentManager._setActiveComment(comment);
	                        if (self._isEditing()) {
	                            self._detachEditor();
	                        }
	                        if (sheet.getSelections().length > 0) {
	                            sheet._saveAndClearSheetSelections();
	                        }
	                        _FocusHelper._setActiveElement(sheet);
	                        break;
	                    case 2 
	                    :
	                        commentManager._setActiveComment(comment);
	                        if (!self._isEditing()) {
	                            self._attachEditor();
	                        }
	                        if (sheet.getSelections().length > 0) {
	                            sheet._saveAndClearSheetSelections();
	                        }
	                        _FocusHelper._setActiveElement(keyword_null);
	                        break;
	                    case 3 
	                    :
	                        if (comment === commentManager._getActiveComment()) {
	                            commentManager._clearActiveComment();
	                            if (sheet.getSelections().length === 0) {
	                                sheet._loadAndSetSheetSelections();
	                            }
	                        }
	                        break;
	                }
	            },
	            _formatCommentStyle: function (targetDom) {
	                function getBackColor(color, opacity, useOpacity) {
	                    if (!useOpacity) { return color; }
	
	                    var colorHelper = Common._ColorHelper;
	                    var argb = colorHelper._fromString(color);
	                    argb.a = opacity;
	
	                    return colorHelper._toString(argb);
	                }
	
	                var self = this, comment = self._comment;
	                var $targetDom = $(targetDom);
	               
	                $targetDom.css('font-family', comment.fontFamily()).css('font-style', comment.fontStyle()).css('font-size', parseInt(comment.fontSize()) * self._zoomFactor + 'pt').css('font-weight', comment.fontWeight());
	               
	                $targetDom.css('text-decoration', Sheets._StyleHelper._composeTextDecoration(comment.textDecoration()));
	               
	                var dict = {
	                    0 : 'left',
	                    1 : 'center',
	                    2 : 'right',
	                    3 : 'general'
	                };
	                $targetDom.css('text-align', dict[comment.horizontalAlign()]);
	               
	                if (comment.padding()) {
	                    $targetDom.css(CSS_PADDING, comment.padding().toString());
	                } else {
	                    $targetDom.css(CSS_PADDING, '0px');
	                }
	               
	                $targetDom.css('background-color', getBackColor(comment.backColor(), comment.opacity(), targetDom === self._host)).css('color', comment.foreColor());
	               
	                $(self._hostContainer).css('border-width', comment.borderWidth()).css('border-style', comment.borderStyle()).css('border-color', comment.borderColor());
	               
	                var actualZIndex = self._commentManager._getCommentActualZIndex(comment);
	                $(self._lineCanvasContainer).css(CSS_ZINDEX, actualZIndex);
	                $(self._floatBlockCanvasContainer).css(CSS_ZINDEX, actualZIndex);
	
	            },
	            _offsetCommentLayoutInChrome: function () {
	                var self = this, sheet = this._comment._sheet;
	                var $hostContainer = $(self._hostContainer);
	                if (!sheet || !$hostContainer) {
	                    return;
	                }
	                var canvasOffset = sheet._getCanvasOffset();
	                var xOffset = canvasOffset.left - Math.floor(canvasOffset.left) >= 0.5 ? 0.5 : 0;
	                var yOffset = canvasOffset.top - Math.floor(canvasOffset.top) >= 0.5 ? 0.5 : 0;
	                $hostContainer.css(LEFT, parseFloatFn($hostContainer.css(LEFT)) + xOffset);
	                $hostContainer.css(TOP, parseFloatFn($hostContainer.css(TOP)) + yOffset);
	            },
	            _updateLineContainerLayout: function () {
	                var self = this, comment = self._comment, sheet = comment._sheet;
	                var cellRect = self._getCellRect(sheet, comment._rowIndex, comment._colIndex, self._rowViewportIndex, self._columnViewportIndex);
	                var sheetLayout = sheet._getSheetLayout();
	                var startX = cellRect.x + getWidth(cellRect) - sheetLayout._rowHeaderWidth;
	                var startY = cellRect.y - sheetLayout._colHeaderHeight;
	                var startPoint = createPoint(startX, startY);
	                var endPoint;
	                var floatBlockCanvasContainerPosition = $(self._floatBlockCanvasContainer).position();
	                var hostContainerPosition = $(self._hostContainer).position();
	                var $hostContainer = $(self._hostContainer);
	                if (floatBlockCanvasContainerPosition.left + hostContainerPosition.left > startPoint.x) {
	                    endPoint = createPoint(floatBlockCanvasContainerPosition.left + hostContainerPosition.left, floatBlockCanvasContainerPosition.top + hostContainerPosition.top);
	                } else if (floatBlockCanvasContainerPosition.top + hostContainerPosition.top + $hostContainer.height() < startPoint.y) {
	                    endPoint = createPoint(floatBlockCanvasContainerPosition.left + hostContainerPosition.left + $hostContainer.width(), floatBlockCanvasContainerPosition.top + hostContainerPosition.top + $hostContainer.height());
	                } else {
	                    endPoint = createPoint(floatBlockCanvasContainerPosition.left + hostContainerPosition.left + $hostContainer.width(), floatBlockCanvasContainerPosition.top + hostContainerPosition.top);
	                }
	                var margin = self._hostMargin;
	                var width = Math_abs(startPoint.x - endPoint.x) + 2 * margin, height = Math_abs(startPoint.y - endPoint.y) + 2 * margin;
	                var left = Math_min(startPoint.x, endPoint.x) - margin, top = Math_min(startPoint.y, endPoint.y) - margin, right = left + width, bottom = top + height;
	                var rect = self._getViewportRect(self._rowViewportIndex, self._columnViewportIndex);
	                if (left < rect.x) {
	                    width -= rect.x - left;
	                    left = rect.x;
	                }
	                if (right > rect.x + getWidth(rect)) {
	                    width -= right - (rect.x + getWidth(rect));
	                }
	                width = Math_min(getWidth(rect), width);
	                if (top < rect.y) {
	                    height -= rect.y - top;
	                    top = rect.y;
	                }
	                if (bottom > rect.y + getHeight(rect)) {
	                    height -= bottom - (rect.y + getHeight(rect));
	                }
	                height = Math_min(getHeight(rect), height);
	                $(self._lineCanvasContainer).css(LEFT, left).css(TOP, top).css(WIDTH, width).css(HEIGHT, height);
	                _DPIHelper._setSize(self._lineCanvas, width, height);
	                startPoint.x = startPoint.x - left;
	                startPoint.y = startPoint.y - top;
	                endPoint.x = endPoint.x - left;
	                endPoint.y = endPoint.y - top;
	                self._drawLine(startPoint, endPoint);
	            },
	
	           
	            _drawLine: function (start, end) {
	                var self = this;
	                if (!self._lineCtx) {
	                    self._lineCtx = self._lineCanvas.getContext('2d');
	                }
	                var ctx = self._lineCtx;
	                var color = self._comment.borderColor();
	                ctx.strokeStyle = color;
	                ctx.clearRect(0, 0, _DPIHelper._getLogicWidth(self._lineCanvas), _DPIHelper._getLogicHeight(self._lineCanvas));
	                ctx.beginPath();
	                ctx.moveTo(start.x, start.y);
	                ctx.lineTo(end.x, end.y);
	                ctx.stroke();
	                ctx.save();
	                CanvasHelper._translate(ctx, start.x, start.y);
	                ctx.fillStyle = color;
	                ctx.beginPath();
	                var rotation = Math_atan2(end.y - start.y, end.x - start.x);
	                ctx.rotate(rotation);
	                ctx.moveTo(0, 0);
	                ctx.lineTo(7, -4);
	                ctx.lineTo(7, 4);
	                ctx.lineTo(0, 0);
	                ctx.fill();
	                CanvasHelper._translate(ctx, -start.x, -start.y);
	                ctx.closePath();
	                ctx.restore();
	            },
	            _updateAdornerLayout: function () {
	                var self = this, comment = self._comment, sheet = comment._sheet;
	                self._adornerDrawState = self._comment.commentState();
	                if (!self._adornerCtx) {
	                    self._adornerCtx = self._floatBlockCanvas.getContext('2d');
	                }
	                var ctx = self._adornerCtx;
	                var width = _DPIHelper._getLogicWidth(self._floatBlockCanvas),
	                    height = _DPIHelper._getLogicHeight(self._floatBlockCanvas),
	                    hostWidth = $(self._hostContainer).outerWidth(),
	                    hostHeight = $(self._hostContainer).outerHeight(),
	                    hostMargin = self._hostMargin;
	                ctx.clearRect(0, 0, width, height);
	                if (self._comment.showShadow()) {
	                    self._drawStateAdorner(ctx, width, height);
	                    var diff = (hostMargin + 2) * 2;
	                    ctx.clearRect(hostMargin, hostMargin, width - diff, height - diff);
	                    self._drawShadowAdorner(ctx, hostMargin, hostWidth, hostHeight);
	                }
	                if (_canEditComment(sheet, comment)) {
	                    self._drawResizeIndicators(ctx, hostMargin, width, height, hostWidth, hostHeight);
	                }
	                ctx.restore();
	            },
	            _drawShadowAdorner: function (ctx, hostMargin, hostWidth, hostHeight) {
	                ctx.fillRect(hostMargin + 2, hostHeight + hostMargin, hostWidth, 2);
	                ctx.fillRect(hostWidth + hostMargin, hostMargin + 2, 2, hostHeight);
	            },
	            _drawStateAdorner: function (ctx, width, height) {
	                var x, y;
	                switch (this._adornerDrawState) {
	                    case 1 
	                    :
	                        ctx.beginPath();
	                        for (y = 0; y < height; y++) {
	                            x = y % 2 === 0 ? 1 : 3;
	                            while (x < width) {
	                                ctx.moveTo(x, y);
	                                ctx.lineTo(x + 1, y + 1);
	                                x = x + 4;
	                            }
	                        }
	                        ctx.stroke();
	                        ctx.closePath();
	                        break;
	                    case 2 
	                    :
	                        ctx.beginPath();
	                        x = 0;
	                        y = 0;
	                        var lineSpace = 4;
	                        while (x < (width + height)) {
	                            ctx.moveTo(x + lineSpace, 0);
	                            ctx.lineTo(0, y + lineSpace);
	                            x = x + lineSpace;
	                            y = y + lineSpace;
	                        }
	                        ctx.stroke();
	                        ctx.closePath();
	                        break;
	                    default:
	                }
	            },
	            _drawResizeIndicators: function (ctx, hostMargin, width, height, hostWidth, hostHeight) {
	                var self = this, resizeHitRects = self._resizeHitRects;
	                if (self._adornerDrawState === 1  || self._adornerDrawState === 2 ) {
	                    resizeHitRects.splice(0, resizeHitRects.length);
	
	                   
	                    createResizeRect(resizeHitRects, 0, 0, hostMargin, 'nw' + DASH_RESIZE);
	                   
	                    createResizeRect(resizeHitRects, width - hostMargin, 0, hostMargin, 'ne' + DASH_RESIZE);
	                   
	                    createResizeRect(resizeHitRects, 0, height - hostMargin, hostMargin, 'sw' + DASH_RESIZE);
	                   
	                    createResizeRect(resizeHitRects, width - hostMargin, height - hostMargin, hostMargin, 'se' + DASH_RESIZE);
	
	                    if (hostHeight >= 3 * hostMargin) {
	                       
	                        createResizeRect(resizeHitRects, 0, Math_floor(height / 2 - hostMargin / 2), hostMargin, 'w' + DASH_RESIZE);
	                       
	                        createResizeRect(resizeHitRects, width - hostMargin, Math_floor(height / 2 - hostMargin / 2), hostMargin, 'e' + DASH_RESIZE);
	                    } else {
	                        resizeHitRects.push(keyword_null);
	                        resizeHitRects.push(keyword_null);
	                    }
	                    if (hostWidth >= 3 * hostMargin) {
	                       
	                        createResizeRect(resizeHitRects, Math_floor(width / 2 - hostMargin / 2), 0, hostMargin, 'n' + DASH_RESIZE);
	                       
	                        createResizeRect(resizeHitRects, Math_floor(width / 2 - hostMargin / 2), height - hostMargin, hostMargin, 's' + DASH_RESIZE);
	                    } else {
	                        resizeHitRects.push(keyword_null);
	                        resizeHitRects.push(keyword_null);
	                    }
	
	                    ctx.restore();
	                   
	                    ctx.fillStyle = 'white';
	                    ctx.strokeStyle = '#939393';
	                    ctx.linewidth = 1;
	                    CanvasHelper._translate(ctx, 0.5, 0.5);
	                    $.each(resizeHitRects, function (index, rect) {
	                        if (rect) {
	                            var x = rect.x, y = rect.y, w = getWidth(rect), h = getHeight(rect);
	                            ctx.beginPath();
	                            ctx.fillRect(x, y, w - 1, h - 1);
	                            ctx.strokeRect(x, y, w - 1, h - 1);
	                            ctx.stroke();
	                            ctx.closePath();
	                        }
	                    });
	                    CanvasHelper._translate(ctx, -0.5, -0.5);
	                }
	            },
	            _drawMoveResizeContainer: function () {
	                var self = this;
	                var viewportRect = self._getViewportRect(self._rowViewportIndex, self._columnViewportIndex);
	
	               
	                if (self._moveResizeContainerDom) {
	                    $(self._moveResizeContainerDom).remove();
	                } else {
	                    self._moveResizeContainerDom = createElement(CSS_DIV);
	                }
	                var $moveResizeContainerDom = $(self._moveResizeContainerDom);
	                var $hostContainer = $(self._hostContainer);
	                $moveResizeContainerDom.addClass('gc-spread-moveResizeContainer')
	                    .css([CSS_POSITION, LEFT, TOP, WIDTH, HEIGHT, 'border'],
	                        [CSS_ABSOLUTE, self._absoluteLocation.x + self._hostMargin - viewportRect.x,
	                            self._absoluteLocation.y + self._hostMargin - viewportRect.y,
	                            $hostContainer.outerWidth() - 2,
	                            $hostContainer.outerHeight() - 2,
	                            'gray solid thin']);
	
	               
	                if (self._moveResizePanelDom) {
	                    $(self._moveResizePanelDom).remove();
	                } else {
	                    self._moveResizePanelDom = createElement(CSS_DIV);
	                }
	                var $moveResizePanelDom = $(self._moveResizePanelDom);
	                $moveResizePanelDom.bind('mousemove', function (e) {
	                    self._doMouseMove(e);
	                }).bind(MOUSEUP, function (e) {
	                    self._doMouseUp(e);
	                }).css([CSS_POSITION, CSS_OVERFLOW, TOP, LEFT, WIDTH, HEIGHT, 'background', CSS_ZINDEX],
	                    [CSS_ABSOLUTE, CSS_HIDDEN, viewportRect.y, viewportRect.x, getWidth(viewportRect), getHeight(viewportRect), 'rgba(255,255,255,0.01)', 901]);
	
	                $moveResizePanelDom.append(self._moveResizeContainerDom);
	                if (self._commentLayoutPanel) {
	                    self._commentLayoutPanel.appendChild(self._moveResizePanelDom);
	                }
	            },
	            _doMoveResizeContainer: function (event) {
	                var self = this, margin = self._hostMargin, zoomFactor = self._zoomFactor;
	                var commentManager = self._commentManager, mouseCapture = commentManager._mouseCapture;
	                if (mouseCapture._capture) {
	                    var scrollOffset = self._getViewportScrollOffset(),
	                        offsetX = event.pageX / zoomFactor - mouseCapture.x + scrollOffset.x,
	                        offsetY = event.pageY / zoomFactor - mouseCapture.y + scrollOffset.y;
	                    if (offsetX === 0 && offsetY === 0) {
	                        return;
	                    }
	                    var viewportRect = self._getViewportRect(self._rowViewportIndex, self._columnViewportIndex), location;
	                    var $moveResizeContainerDom = $(self._moveResizeContainerDom);
	                    if (mouseCapture._resizeDirct < 0) {
	                        var newX = mouseCapture._cachedRect.x + offsetX, newY = mouseCapture._cachedRect.y + offsetY;
	                        location = self._convertToAbsoluteLocation(createPoint(newX, newY));
	                        $moveResizeContainerDom.css([LEFT, TOP], [location.x + margin - viewportRect.x, location.y + margin - viewportRect.y]);
	                    } else {
	                        var commentResizeRect = self._getResizeRect(offsetX, offsetY, mouseCapture._resizeDirct);
	                        location = self._convertToAbsoluteLocation(createPoint(commentResizeRect.x, commentResizeRect.y));
	                        $moveResizeContainerDom.css([LEFT, TOP, WIDTH, HEIGHT], [location.x + margin - viewportRect.x,
	                            location.y + margin - viewportRect.y,
	                            getWidth(commentResizeRect) * zoomFactor - 2 * margin - 2,
	                            getHeight(commentResizeRect) * zoomFactor - 2 * margin - 2
	                        ]);
	                    }
	                }
	            },
	            _attachEditor: function () {
	                var self = this, comment = self._comment;
	                if (!self._isEditing()) {
	                    var editor = self._commentManager._editorDom;
	                    $(self._host).remove();
	                    self._detachHostEventHandler();
	                    $(editor).remove();
	                    $(self._hostContainer).append(editor);
	                    self._setDomStyle(editor);
	                    self._formatCommentRect(editor);
	                    $(editor).focus();
	                    editor.selectionStart = editor.value.length;
	                    self._attachEditorEventHandler();
	                    if (comment.commentState() !== 2 ) {
	                        comment.commentState(2 );
	                    }
	                }
	            },
	            _detachEditor: function () {
	                var self = this, comment = self._comment, sheet = comment._sheet;
	                if (self._isEditing()) {
	                    var editor = self._commentManager._editorDom;
	                    self._detachEditorEventHandler();
	                    $(editor).remove();
	                    $(self._hostContainer).append(self._host);
	                    self._setDomStyle(self._host);
	                    self._attachHostEventHandler();
	                    CommentView._callFeatureHandler(self, 'detachEditor', self._host);
	                    if (comment.commentState() === 2 ) {
	                        comment.commentState(3 );
	                    }
	                    if ($(editor).val() !== comment.text()) {
	                        sheet._commandManager().execute({ cmd: 'changeComment', sheetName: sheet.name(), row: comment._rowIndex, col: comment._colIndex, oldValue: comment.text(), newValue: $(editor).val(), propertyName: TEXT });
	                    }
	                }
	            },
	            _getViewportHeight: function (rowViewportIndex) {
	                var self = this, sheet = self._comment._sheet;
	                var viewportHeight = -1;
	                if (rowViewportIndex === 0 || rowViewportIndex === 2) {
	                    viewportHeight = sheet.getViewportHeight(rowViewportIndex);
	                } else if (rowViewportIndex === 1) {
	                    viewportHeight = getDistance(sheet, sheet.getViewportBottomRow(0) + 1, getViewportTopRow(sheet, 2) + 1, true);
	                }
	                return viewportHeight;
	            },
	            _getViewportWidth: function (columnViewportIndex) {
	                var self = this, sheet = self._comment._sheet;
	                var viewportWidth = -1;
	                if (columnViewportIndex === 0 || columnViewportIndex === 2) {
	                    viewportWidth = sheet.getViewportWidth(columnViewportIndex);
	                } else if (columnViewportIndex === 1) {
	                    viewportWidth = getDistance(sheet, sheet.getViewportRightColumn(0) + 1, getViewportLeftColumn(sheet, 2) + 1, false);
	                }
	                return viewportWidth;
	            },
	            _getViewportRect: function (rowViewportIndex, columnViewportIndex) {
	                var self = this, sheet = self._comment._sheet;
	                var layout = sheet._getSheetLayout();
	                var rect = layout._viewportRect(rowViewportIndex, columnViewportIndex);
	                if (rowViewportIndex === 0 && columnViewportIndex === 0 || rowViewportIndex === 0 && columnViewportIndex === 2 || rowViewportIndex === 2 && columnViewportIndex === 0 || rowViewportIndex === 2 && columnViewportIndex === 2) {
	                    rect = createRect(0, 0, layout._frozenWidth + layout._viewportWidth + layout._frozenTrailingWidth, layout._frozenHeight + layout._viewportHeight + layout._frozenTrailingHeight);
	                } else if (rowViewportIndex === 0 && columnViewportIndex === 1 || rowViewportIndex === 2 && columnViewportIndex === 1) {
	                    rect = createRect(layout._frozenWidth, 0, layout._viewportWidth, layout._frozenHeight + layout._viewportHeight + layout._frozenTrailingHeight);
	                } else if (rowViewportIndex === 1 && columnViewportIndex === 0 || rowViewportIndex === 1 && columnViewportIndex === 2) {
	                    rect = createRect(0, layout._frozenHeight, layout._frozenWidth + layout._viewportWidth + layout._frozenTrailingWidth, layout._viewportHeight);
	                } else if (rowViewportIndex === 1 && columnViewportIndex === 1) {
	                    rect = createRect(layout._frozenWidth, layout._frozenHeight, layout._viewportWidth, layout._viewportHeight);
	                }
	                return rect;
	            },
	            _setDomStyle: function (targetDOM) {
	                var self = this, comment = self._comment, $targetDOM = $(targetDOM);
	                if (targetDOM !== self._editor && targetDOM !== self._host) {
	                    return;
	                }
	                if (targetDOM === self._editor) {
	                    targetDOM.value = comment.text();
	                } else {
	                    targetDOM.innerHTML = StringHelper._escapeHtml(comment.text());
	                }
	                $targetDOM.css([CSS_FONT_FAMILY, CSS_FONT_STYLE, CSS_FONT_SIZE, CSS_FONT_WEIGHT, COLOR, CSS_BACKGROUND_COLOR, CSS_TEXT_ALIGN, CSS_TEXT_DECORATION],
	                    [comment.fontFamily(), comment.fontStyle(), comment.fontSize(), comment.fontWeight(), comment.foreColor(), comment.backColor(), comment.horizontalAlign(), comment.textDecoration()]);
	
	                if (comment.padding()) {
	                    $targetDOM.css(CSS_PADDING, comment.padding().toString());
	                } else {
	                    $targetDOM.css(CSS_PADDING, '0px');
	                }
	            },
	            _isOpened: function () {
	                return this._floatBlockCanvasContainer && this._floatBlockCanvasContainer.parentNode;
	            },
	            _isEditing: function () {
	                var self = this;
	                return self._isOpened() && self._comment === self._commentManager._getActiveComment() && $(self._hostContainer).find(TEXT_AREA).length > 0;
	            },
	            _getCommentRect: function () {
	                var self = this, sheet = self._comment._sheet, commentRect = keyword_null;
	                if (self._isOpened()) {
	                    var sheetLayout = sheet._getSheetLayout();
	                    commentRect = createRect(self._absoluteLocation.x + sheetLayout._headerX + sheetLayout._rowHeaderWidth,
	                        self._absoluteLocation.y + sheetLayout._headerY + sheetLayout._colHeaderHeight,
	                        self._getActualWidth(), self._getActualHeight());
	                }
	                return commentRect;
	            },
	            _getCommentEditorRect: function () {
	                var self = this, comment = self._comment, zoomFactor = self._zoomFactor;
	                if (self._isOpened()) {
	                    var commentRect = self._getCommentRect();
	                    if (commentRect) {
	                        var x, y, width, height;
	                        var editAreaXOffset = (self._hostMargin + comment.borderWidth()) * zoomFactor,
	                            editAreaYOffset = editAreaXOffset;
	                        x = commentRect.x + editAreaXOffset;
	                        y = commentRect.y + editAreaYOffset;
	                        width = getWidth(commentRect) - 2 * editAreaXOffset;
	                        height = getHeight(commentRect) - 2 * editAreaYOffset;
	                        return createRect(x, y, width, height);
	                    }
	                }
	                return keyword_null;
	            },
	            _setCursorState: function (event) {
	                var self = this, comment = self._comment, sheet = comment._sheet, target = event.target,
	                    mouseCapture = self._commentManager._mouseCapture,
	                    style = target.style, cursor = strDefault;
	                if (mouseCapture._capture) {
	                    if (target[CLASS_NAME] === self._hostClassName || target[CLASS_NAME] === self._floatBlockCanvasClassName ||
	                        target[CLASS_NAME] === self._lineCanvasClassName || target[CLASS_NAME] === GC_SPREAD_NS + 'floatPanel') {
	                        cursor = mouseCapture._resizeDirct >= 0 ? 'crosshair' : MOVE;
	                    }
	                } else if (target[CLASS_NAME] === self._hostClassName) {
	                    if (!_canEditComment(sheet) && comment.lockText()) {
	                        if (!comment.locked()) {
	                            cursor = MOVE;
	                        }
	                    } else {
	                        cursor = TEXT;
	                    }
	                } else if (target[CLASS_NAME] === self._floatBlockCanvasClassName || target[CLASS_NAME] === self._hostContainerClassName) { 
	                    if (_canEditComment(sheet, comment)) {
	                        var resizeDirct = self._getResizeDirection(event);
	                        cursor = resizeDirct >= 0 && resizeDirct < self._resizeHitRects.length ? self._resizeHitRects[resizeDirct].cursor : MOVE;
	                    }
	                }
	                style[CURSOR] = cursor;
	            },
	            _doMouseDownToEdit: function (event) {
	                var self = this, comment = self._comment, sheet = comment && comment._sheet;
	                if (!sheet.endEdit()) {
	                    return;
	                }
	
	                var argObj = {e: event, r: keyword_null};
	                CommentView._callFeatureHandler(self, 'preProcessMouseDownEdit', argObj);
	                if (argObj.r) {
	                    return;
	                }
	                sheet._trigger(Events.FloatingElementSelected, {type: 'comments'});
	
	                self._commentManager._setActiveComment(comment);
	                comment.commentState(2 );
	                self._doMouseUp(event);
	                return cancelDefault(event);
	            },
	            _doMouseDownToDragOrResize: function (event) {
	                var self = this, comment = self._comment, sheet = comment && comment._sheet, zoomFactor = self._zoomFactor;
	                var commentManager = self._commentManager, mouseCapture = commentManager._mouseCapture;
	                if (!sheet.endEdit()) {
	                    return;
	                }
	
	                var argObj = {e: event, r: keyword_null};
	                CommentView._callFeatureHandler(self, 'preProcessMouseDownDragResize', argObj);
	                if (argObj.r) {
	                    return;
	                }
	
	                sheet._trigger(Events.FloatingElementSelected, {type: 'comments'});
	
	                mouseCapture.x = event.pageX / zoomFactor;
	                mouseCapture.y = event.pageY / zoomFactor;
	                mouseCapture._cachedRect = createRect(comment.location().x, comment.location().y, comment.width(), comment.height());
	                mouseCapture._resizeDirct = self._getResizeDirection(event);
	                self._handleDocumentMouseMove();
	                mouseCapture._capture = true;
	                self._setCursorState(event);
	                commentManager._setActiveComment(comment);
	                comment.commentState(1 );
	                if (_canEditComment(sheet, comment)) {
	                    self._moveInfo = {};
	                    self._moveInfo._startTopRow = getViewportTopRow(sheet, self._rowViewportIndex);
	                    self._moveInfo._startLeftColumn = getViewportLeftColumn(sheet, self._columnViewportIndex);
	                    self._drawMoveResizeContainer();
	                    if (mouseCapture._resizeDirct < 0) {
	                        self._isMoving = true;
	                    } else {
	                        self._isResizing = true;
	                    }
	                }
	               
	                var eventHandler = sheet._eventHandler,
	                    canvasOffset = sheet._getCanvasOffset(),
	                    mousePosition = createPoint(event.pageX - canvasOffset.left,
	                        event.pageY - canvasOffset.top),
	                    sheetHitTestInfo = sheet.hitTest(mousePosition.x, mousePosition.y);
	                eventHandler._startHitInfo = {
	                    _scrollRowViewportIndex: sheetHitTestInfo.rowViewportIndex,
	                    _scrollColViewportIndex: sheetHitTestInfo.colViewportIndex,
	                    _hitTestType: sheetHitTestInfo.hitTestType
	                };
	                eventHandler._mousePosition = mousePosition;
	                eventHandler._startScroll();
	                eventHandler._isCommentWorking = true;
	                event.stopPropagation();
	            },
	            _getAdjustedCommentRect: function (location, width, height) {
	                var self = this, comment = self._comment, sheet = comment && comment._sheet,
	                    margin = self._hostMargin,
	                    zoomFactor = self._zoomFactor,
	                    columnVP = self._columnViewportIndex,
	                    rowVP = self._rowViewportIndex;
	                var viewportRect = self._getViewportRect(rowVP, columnVP);
	
	                var actualWidth = width !== void 0 ? width * zoomFactor : self._getActualWidth();
	                var actualHeight = height !== void 0 ? height * zoomFactor : self._getActualHeight();
	
	                var left = location.x,
	                    top = location.y,
	                    layout = sheet._getSheetLayout(),
	                    cellRect = self._getCellRect(sheet, 0, 0, rowVP, columnVP),
	                    right = location.x + (0 - (cellRect.x - layout._rowHeaderWidth)) + actualWidth - margin,
	                    bottom = location.y + (0 - (cellRect.y - layout._colHeaderHeight)) + actualHeight - margin,
	                    leftBoundry = 0, topBoundry = 0, rightBoundry = 0, bottomBoundry = 0;
	                if (columnVP === 0) {
	                    leftBoundry = 0 - margin;
	                    rightBoundry = getWidth(layout) - layout._rowHeaderWidth;
	                } else if (columnVP === 1) {
	                    var scrollLeftColumnOffset = getDistance(sheet, sheet.getViewportRightColumn(0) + 1, getViewportLeftColumn(sheet, 1), false);
	                    leftBoundry = viewportRect.x - margin - scrollLeftColumnOffset;
	                    var trailingFrozenViewportWidth = self._getViewportWidth(2);
	                    rightBoundry = trailingFrozenViewportWidth;
	                } else if (columnVP === 2) {
	                    leftBoundry = 0 - margin;
	                    rightBoundry = 0;
	                }
	                if (left < leftBoundry) {
	                    if (self._isResizing) {
	                        actualWidth -= leftBoundry - left;
	                    } else {
	                        right += leftBoundry - left;
	                    }
	                    left = leftBoundry;
	                }
	                if (columnVP === 1 || columnVP === 2) {
	                    rightBoundry += getDistance(sheet, 0, sheet.getColumnCount(), false, right);
	                }
	                if (right > rightBoundry) {
	                    if (self._isResizing) {
	                        actualWidth -= right - rightBoundry;
	                    } else if (self._isMoving) {
	                        left -= right - rightBoundry;
	                    } else {
	                        var x = self._commentManager._hoverShowComment && !comment.ignoreDefaultLocation() ? 9  : comment.location().x;
	                        var hOffset = 2 * Math_abs(x) + getColumnWidth(sheet, comment._colIndex) + comment.width();
	                        var leftAttempt = left - hOffset;
	                        if (leftAttempt > leftBoundry) {
	                            left = leftAttempt;
	                        } else if (left < rightBoundry) {
	                            actualWidth -= right - rightBoundry;
	                        } else {
	                            leftAttempt = left - hOffset;
	                            var rightAttempt = right - hOffset;
	                            if (rightAttempt > leftBoundry) {
	                                if (leftAttempt < leftBoundry) {
	                                    actualWidth -= leftBoundry - leftAttempt;
	                                    left = leftBoundry;
	                                } else {
	                                    left = leftAttempt;
	                                }
	                            } else {
	                                leftAttempt = left - (right - rightBoundry);
	                                if (leftAttempt < leftBoundry) {
	                                    actualWidth -= leftBoundry - leftAttempt;
	                                    left = leftBoundry;
	                                } else {
	                                    left = leftAttempt;
	                                }
	                            }
	                        }
	                    }
	                }
	                if (rowVP === 0) {
	                    topBoundry = 0 - margin;
	                    bottomBoundry = getHeight(layout) - layout._colHeaderHeight;
	                } else if (rowVP === 1) {
	                    var scrollTopRowOffset = getDistance(sheet, sheet.getViewportBottomRow(0) + 1, getViewportTopRow(sheet, 1), true);
	                    topBoundry = viewportRect.y - margin - scrollTopRowOffset;
	                    var trailingFrozenViewportHeight = self._getViewportHeight(2);
	                    bottomBoundry = trailingFrozenViewportHeight;
	                } else {
	                    topBoundry = 0 - margin;
	                    bottomBoundry = 0;
	                }
	                if (top < topBoundry) {
	                    if (self._isResizing) {
	                        actualHeight -= topBoundry - top;
	                    } else {
	                        bottom += topBoundry - top;
	                    }
	                    top = topBoundry;
	                }
	                if (rowVP === 1 || rowVP === 2) {
	                    bottomBoundry += getDistance(sheet, 0, sheet.getRowCount(), true, bottom);
	                }
	                if (bottom > bottomBoundry) {
	                    if (self._isResizing) {
	                        actualHeight -= bottom - bottomBoundry;
	                    } else if (self._isMoving) {
	                        top -= bottom - bottomBoundry;
	                    } else if (bottom > bottomBoundry) {
	                        var vOffset = bottom - bottomBoundry;
	                        var attemptTop = top - vOffset;
	                        if (attemptTop < topBoundry) {
	                            actualHeight -= topBoundry - attemptTop;
	                            top = topBoundry;
	                        } else {
	                            top = attemptTop;
	                        }
	                    }
	                }
	                return createRect(left, top, actualWidth / zoomFactor, actualHeight / zoomFactor);
	            },
	            _getViewportScrollOffset: function () {
	                var self = this, sheet = self._comment._sheet, x, y;
	                var moveInfo = self._moveInfo,
	                    oldStartTopRow = moveInfo._startTopRow,
	                    oldStartLeftColumn = moveInfo._startLeftColumn,
	                    newStartTopRow = getViewportTopRow(sheet, self._rowViewportIndex),
	                    newStartLeftColumn = getViewportLeftColumn(sheet, self._columnViewportIndex);
	                var viewportOffsetHeight = getDistance(sheet, oldStartTopRow, newStartTopRow, true),
	                    viewportOffsetWidth = getDistance(sheet, oldStartLeftColumn, newStartLeftColumn, false);
	                x = oldStartLeftColumn < newStartLeftColumn ? viewportOffsetWidth : -viewportOffsetWidth;
	                y = oldStartTopRow < newStartTopRow ? viewportOffsetHeight : -viewportOffsetHeight;
	                return createPoint(x, y);
	            },
	            _doMoveResizeComment: function (event) {
	                var self = this, comment = self._comment, sheet = comment && comment._sheet, zoomFactor = self._zoomFactor;
	                var commentManager = self._commentManager, mouseCapture = commentManager._mouseCapture;
	                var ChangeComment = Commands.ChangeComment;
	                if (mouseCapture._capture) {
	                    var scrollOffset = self._getViewportScrollOffset(),
	                        offsetX = event.pageX / zoomFactor - mouseCapture.x + scrollOffset.x,
	                        offsetY = event.pageY / zoomFactor - mouseCapture.y + scrollOffset.y;
	                    if (offsetX === 0 && offsetY === 0) {
	                        return;
	                    }
	                    var absoluteLocation, adjustedRect, location;
	                    if (mouseCapture._resizeDirct < 0) {
	                        var newX = mouseCapture._cachedRect.x + offsetX, newY = mouseCapture._cachedRect.y + offsetY;
	                        absoluteLocation = self._convertToAbsoluteLocation(createPoint(newX, newY));
	                        adjustedRect = self._getAdjustedCommentRect(absoluteLocation);
	                        location = self._convertToRelativeLocation(createPoint(adjustedRect.x, adjustedRect.y));
	                        if (location.x !== comment.location().x || location.x !== comment.location().y) {
	                            sheet._commandManager().execute({ cmd: 'changeComment', sheetName: sheet.name(), row: comment._rowIndex, col: comment._colIndex, oldValue: comment.location().clone(), newValue: location, propertyName: 'location' });
	                        }
	                    } else {
	                       
	                        comment.autoSize(false);
	                        var resizeRect = self._getResizeRect(offsetX, offsetY, mouseCapture._resizeDirct);
	
	                        absoluteLocation = self._convertToAbsoluteLocation(createPoint(resizeRect.x, resizeRect.y));
	                        adjustedRect = self._getAdjustedCommentRect(absoluteLocation, getWidth(resizeRect), getHeight(resizeRect));
	                        location = self._convertToRelativeLocation(createPoint(adjustedRect.x, adjustedRect.y));
	                        var actions = [];
	                       
	                        if (location.x !== comment.location().x || location.y !== comment.location().y) {
	                            actions.push(new ChangeComment(sheet, { cmd: 'changeComment', sheetName: sheet.name(), row: comment._rowIndex, col: comment._colIndex, oldValue: comment.location().clone(), newValue: location, propertyName: 'location' }));
	                        }
	                       
	                        if (getWidth(adjustedRect) !== comment.width()) {
	                            actions.push(new ChangeComment(sheet, { cmd: 'changeComment', sheetName: sheet.name(), row: comment._rowIndex, col: comment._colIndex, oldValue: comment.width(), newValue: adjustedRect.width, propertyName: WIDTH }));
	                        }
	                       
	                        if (getHeight(adjustedRect) !== comment.height()) {
	                            actions.push(new ChangeComment(sheet, { cmd: 'changeComment', sheetName: sheet.name(), row: comment._rowIndex, col: comment._colIndex, oldValue: comment.height(), newValue: adjustedRect.height, propertyName: HEIGHT }));
	                        }
	
	                        if (actions.length > 0) {
	                            sheet._commandManager().execute({ cmd: 'changeCommentTransaction', sheetName: sheet.name(), commands: actions });
	                        }
	                    }
	                }
	            },
	            _doMouseMove: function (event) {
	                var self = this, sheet = self._comment._sheet;
	                var argObj = {e: event, r: keyword_null};
	                CommentView._callFeatureHandler(self, 'preProcessMouseMove', argObj);
	                if (argObj.r) {
	                    return;
	                }
	
	                this._setCursorState(event);
	                if (sheet.getSelections() && sheet.getSelections().length > 0) {
	                    return;
	                }
	
	                var commentManager = self._commentManager, target = event.target;
	                var eventHandler = sheet._eventHandler, canvasOffset = sheet._getCanvasOffset();
	                var point = createPoint(event.pageX - canvasOffset.left, event.pageY - canvasOffset.top);
	                if (target && commentManager._mouseCapture._capture) {
	                    if (self._moveResizeContainerDom) {
	                        self._doMoveResizeContainer(event);
	                    }
	                   
	                    if (self._rowViewportIndex === 1) {
	                        eventHandler._mousePosition.y = point.y;
	                    }
	                    if (self._columnViewportIndex === 1) {
	                        eventHandler._mousePosition.x = point.x;
	                    }
	                    eventHandler._continueScroll();
	                }
	                return cancelDefault(event);
	            },
	            _doMouseUp: function (event) {
	                var self = this, sheet = self._comment._sheet;
	                var argObj = {e: event, r: keyword_null};
	                CommentView._callFeatureHandler(self, 'preProcessMouseUp', argObj);
	                if (argObj.r) {
	                    return;
	                }
	
	                if (sheet.getSelections() && sheet.getSelections().length > 0) {
	                    return;
	                }
	
	                var target = event.target, commentManager = self._commentManager;
	               
	                var eventHandler = sheet._eventHandler;
	                eventHandler._isCommentWorking = false;
	                eventHandler._stopScroll();
	                if (target) {
	                    self._doMoveResizeComment(event);
	                    if (self._moveResizePanelDom) {
	                        $(self._moveResizePanelDom).remove();
	                        self._moveResizePanelDom = null;
	                        self._isMoving = false;
	                        self._isResizing = false;
	                    }
	                    self._unhandleDocumentMouseMove();
	                    commentManager._mouseCapture._capture = false;
	                    self._setCursorState(event);
	                }
	                return cancelDefault(event);
	            },
	            _getResizeDirection: function (event) {
	                var self = this, resizeHitRects = self._resizeHitRects;
	                if (resizeHitRects.length > 0 && (self._adornerDrawState === 1  || self._adornerDrawState === 2 )) {
	                    var target = self._floatBlockCanvas, x = event.pageX - $(target).offset().left, y = event.pageY - $(target).offset().top;
	
	                    for (var i = 0; i < resizeHitRects.length; i++) {
	                        var resizeHitRect = resizeHitRects[i];
	                        if (resizeHitRect && resizeHitRect.contains(x, y)) {
	                            return i;
	                        }
	                    }
	                }
	                return -1;
	            },
	            _getResizeRect: function (offsetX, offsetY, resizeDirct) {
	                var self = this;
	                var horizontalPosition = -1, verticalPosition = -1;
	                switch (resizeDirct) {
	                    case 0 
	                    :
	                        horizontalPosition = 0;
	                        verticalPosition = 0;
	                        break;
	                    case 1 
	                    :
	                        horizontalPosition = 2;
	                        verticalPosition = 0;
	                        break;
	                    case 2 
	                    :
	                        horizontalPosition = 0;
	                        verticalPosition = 2;
	                        break;
	                    case 3 
	                    :
	                        horizontalPosition = 2;
	                        verticalPosition = 2;
	                        break;
	                    case 4 
	                    :
	                        horizontalPosition = 0;
	                        verticalPosition = 1;
	                        break;
	                    case 5 
	                    :
	                        horizontalPosition = 2;
	                        verticalPosition = 1;
	                        break;
	                    case 6 
	                    :
	                        horizontalPosition = 1;
	                        verticalPosition = 0;
	                        break;
	                    case 7 
	                    :
	                        horizontalPosition = 1;
	                        verticalPosition = 2;
	                        break;
	                }
	
	                var horizontalInfo = self._getHorizontalInfo(offsetX, horizontalPosition);
	                var verticalInfo = self._getVerticalInfo(offsetY, verticalPosition);
	                return createRect(horizontalInfo.x, verticalInfo.y, horizontalInfo.w, verticalInfo.h);
	            },
	            _getHorizontalInfo: function (offsetX, position) {
	                var self = this;
	                var hostMargin = 2 * self._hostMargin;
	                var mouseCapture = self._commentManager._mouseCapture;
	                var resizeHostWidth = (getWidth(mouseCapture._cachedRect) - hostMargin);
	                if (position === 0) {
	                    resizeHostWidth -= offsetX;
	                } else if (position === 2) {
	                    resizeHostWidth += offsetX;
	                }
	
	               
	                var x = mouseCapture._cachedRect.x;
	                if (resizeHostWidth >= 0) {
	                    if (position === 0) {
	                        x += offsetX;
	                    }
	                } else if (position === 0) {
	                    x += getWidth(mouseCapture._cachedRect) - hostMargin;
	                } else if (position === 2) {
	                    x += resizeHostWidth;
	                }
	
	                var width = getWidth(mouseCapture._cachedRect);
	                if (position !== 1) {
	                    width = Math_abs(resizeHostWidth) + hostMargin;
	                }
	
	                return {x: x, w: width};
	            },
	            _getVerticalInfo: function (offsetY, position) {
	                var self = this;
	                var hostMargin = 2 * self._hostMargin;
	                var mouseCapture = self._commentManager._mouseCapture;
	                var resizeHostHeight = (getHeight(mouseCapture._cachedRect) - hostMargin);
	                if (position === 0) {
	                    resizeHostHeight -= offsetY;
	                } else if (position === 2) {
	                    resizeHostHeight += offsetY;
	                }
	
	               
	                var y = mouseCapture._cachedRect.y;
	                if (resizeHostHeight >= 0) {
	                    if (position === 0) {
	                        y += offsetY;
	                    }
	                } else if (position === 0) {
	                    y = getHeight(mouseCapture._cachedRect) - hostMargin;
	                } else if (position === 2) {
	                    y += resizeHostHeight;
	                }
	
	                var height = getHeight(mouseCapture._cachedRect);
	                if (position !== 1) {
	                    height = Math_abs(resizeHostHeight) + hostMargin;
	                }
	
	                return {y: y, h: height};
	            },
	
	           
	            _attachMouseWheelEvent: function (targetDom) {
	                var self = this, sheet = self._comment._sheet;
	                if (targetDom) {
	                    var ns = keyword_undefined;
	                    switch (targetDom) {
	                        case self._floatBlockCanvas:
	                            ns = FLOAT_BLOCK_CANVAS_NS;
	                            break;
	                        case self._hostContainer:
	                            ns = HOST_CONTAINER_NS;
	                            break;
	                        case self._lineCanvasContainer:
	                            ns = LINE_CANVAS_CONTAINER_NS;
	                            break;
	                        case self._host:
	                            ns = HOST_NS;
	                            break;
	                        case self._editor:
	                            ns = EDITOR_NS;
	                            break;
	                    }
	                    if (ns) {
	                       
	                        $(targetDom).unbind(MOUSE_WHEEL + ns).unbind(DOM_MOUSE_SCROLL + ns);
	                        var mousewheelHandler = function (event) {
	                            sheet._mouseWheelDelegate(event);
	                            cancelDefault(event);
	                        };
	                       
	                        $(targetDom).bind(MOUSE_WHEEL + ns, mousewheelHandler).bind(DOM_MOUSE_SCROLL + ns, mousewheelHandler);
	                    }
	                }
	            },
	            _attachEventHandler: function (ele, ns) {
	                var self = this, comment = self._comment, sheet = comment && comment._sheet;
	                self._detachEventHandler(ele, ns);
	                var mousewheelHandler = function (event) {
	                    if (sheet) {
	                        sheet._mouseWheelDelegate(event);
	                    }
	                };
	                $(ele).bind(MOUSEDOWN + ns, function (event) {
	                    self._doMouseDownToDragOrResize(event);
	                }).bind(MOUSEMOVE + ns, function (event) {
	                    self._doMouseMove(event);
	                }).bind(MOUSEUP + ns, function (event) {
	                    self._doMouseUp(event);
	                }).bind(MOUSE_WHEEL + ns, mousewheelHandler).bind(DOM_MOUSE_SCROLL + ns, mousewheelHandler);
	            },
	            _detachEventHandler: function (ele, ns) {
	                $(ele).unbind(ns);
	            },
	            _attachLineCanvasEventHandler: function () {
	                var self = this, comment = self._comment, sheet = comment && comment._sheet, commentManager = self._commentManager;
	                self._detachLineCanvasEventHandler();
	                if (!sheet) {
	                    return;
	                }
	                var canvasOffset = sheet._getCanvasOffset();
	               
	                var mousewheelHandler = function (event) {
	                    sheet._mouseWheelDelegate(event);
	                };
	                $(self._lineCanvas).bind(MOUSEDOWN + LINE_CANVAS_NS, function (event) {
	                    var commentHitInfo = sheet._modelManager._comments.hitTest(event.pageX - canvasOffset.left, event.pageY - canvasOffset.top);
	                    if (commentHitInfo) {
	                        var hitTestComment = commentHitInfo.comment;
	                        var hitTestCommentView = commentManager._getCommentView(hitTestComment);
	                        if (commentHitInfo.area === COMMENT_EDITOR) {
	                            hitTestCommentView._doMouseDownToEdit(event);
	                        } else if (commentHitInfo.area === COMMENT_INDICATOR) {
	                            hitTestCommentView._doMouseDownToDragOrResize(event);
	                        }
	                        $(hitTestCommentView._floatBlockCanvasContainer).css(CSS_ZINDEX, parseInt($(self._lineCanvasContainer).css(CSS_ZINDEX) + 1));
	                    } else {
	                        sheet._mouseDownDelegate(event);
	                    }
	                }).bind(MOUSEMOVE + LINE_CANVAS_NS, function (event) {
	                    var commentHitInfo = sheet._modelManager._comments.hitTest(event.pageX - canvasOffset.left, event.pageY - canvasOffset.top);
	                    var lineCanvasStyle = self._lineCanvas.style;
	                    if (commentHitInfo) {
	                        var hitTestComment = commentHitInfo.comment;
	                        var hitTestCommentView = commentManager._getCommentView(hitTestComment);
	                        hitTestCommentView._doMouseMove(event);
	
	                        if (commentHitInfo.area === COMMENT_EDITOR) {
	                            lineCanvasStyle.cursor = TEXT;
	                        } else if (commentHitInfo.area === COMMENT_INDICATOR) {
	                            lineCanvasStyle.cursor = MOVE;
	                        }
	                    } else {
	                        sheet._mouseMoveDelegate(event);
	                        self._commentManager._hoverShow(keyword_null);
	                        var canvas = sheet._getCanvas();
	                        if (canvas) {
	                            lineCanvasStyle.cursor = canvas.style.cursor;
	                        }
	                    }
	                }).bind(MOUSEUP + LINE_CANVAS_NS, function (event) {
	                    var commentHitInfo = sheet._modelManager._comments.hitTest(event.pageX - canvasOffset.left, event.pageY - canvasOffset.top);
	                    if (commentHitInfo) {
	                        var hitTestComment = commentHitInfo.comment;
	                        var hitTestCommentView = commentManager._getCommentView(hitTestComment);
	                        hitTestCommentView._doMouseUp(event);
	                    } else {
	                        sheet._mouseUpDelegate(event);
	                    }
	                }).bind('dblclick' + LINE_CANVAS_NS, function (event) {
	                    sheet._dblClickDelegate(event);
	                }).bind(MOUSE_WHEEL + LINE_CANVAS_NS, mousewheelHandler).bind(DOM_MOUSE_SCROLL + LINE_CANVAS_NS, mousewheelHandler);
	            },
	            _detachLineCanvasEventHandler: function () {
	                var self = this;
	                $(self._lineCanvas).unbind(LINE_CANVAS_NS);
	            },
	            _attachHostEventHandler: function () {
	                var self = this, comment = self._comment, sheet = comment && comment._sheet;
	                if (comment.commentState() !== 2  && self._host) {
	                    self._detachHostEventHandler();
	                    var mousewheelHandler = function (event) {
	                        if (sheet) {
	                            sheet._mouseWheelDelegate(event);
	                        }
	                    };
	                    $(self._host).bind(MOUSEDOWN + HOST_NS, function (event) {
	                        self._doMouseDownToEdit(event);
	                    }).bind(MOUSEMOVE + HOST_NS, function (event) {
	                        self._doMouseMove(event);
	                    }).bind(MOUSEUP + HOST_NS, function (event) {
	                        self._doMouseUp(event);
	                    }).bind(MOUSE_WHEEL + HOST_NS, mousewheelHandler).bind(DOM_MOUSE_SCROLL + HOST_NS, mousewheelHandler);
	                }
	            },
	            _detachHostEventHandler: function () {
	                var self = this, comment = self._comment;
	                if (comment.commentState() !== 2  && self._host) {
	                    $(self._host).unbind(HOST_NS);
	                }
	            },
	            _attachEditorEventHandler: function () {
	                var self = this, comment = self._comment, sheet = comment && comment._sheet;
	                var editor = self._editor;
	                if (comment.commentState() === 2  && editor) {
	                    this._detachEditorEventHandler();
	                    var mousewheelHandler = function (event) {
	                        if (sheet) {
	                            sheet._mouseWheelDelegate(event);
	                            util._cancelDefault(event);
	                        }
	                    };
	                    $(editor).bind(MOUSEDOWN + EDITOR_NS, function (event) {
	                        event.stopPropagation();
	                    }).bind(MOUSEMOVE + EDITOR_NS, function (event) {
	                        event.stopPropagation();
	                    }).bind(MOUSEUP + EDITOR_NS, function (event) {
	                        event.stopPropagation();
	                    }).bind(MOUSE_WHEEL + EDITOR_NS, mousewheelHandler).bind(DOM_MOUSE_SCROLL + EDITOR_NS, mousewheelHandler).bind('input' + EDITOR_NS, function () {
	                        if (comment.autoSize()) {
	                            self._doAutosize();
	                        }
	                    }).bind('keydown' + EDITOR_NS, function (event) {
	                        if (event.keyCode === 27  || event.keyCode === 9 ) {
	                            comment.commentState(1 );
	                            cancelDefault(event);
	                            _FocusHelper._setActiveElement(sheet);
	                        }
	                    }).bind('focusout' + EDITOR_NS, function () {
	                        if ($(editor).val() !== comment.text()) {
	                            sheet._commandManager().execute({ cmd: 'changeComment', sheetName: sheet.name(), row: comment._rowIndex, col: comment._colIndex, oldValue: comment.text(), newValue: $(editor).val(), propertyName: TEXT });
	                        }
	                    });
	                }
	            },
	            _doAutosize: function () {
	                var self = this;
	                var comment = self._comment, sheet = comment && comment._sheet;
	                var targetDOM, lines;
	                if (comment.commentState() === 2 ) {
	                    targetDOM = self._editor;
	                    lines = targetDOM.value.split('\n');
	                } else {
	                    targetDOM = self._host;
	                    lines = StringHelper._unescapeHtml(targetDOM.innerHTML).split('\n');
	                }
	                var oldHeight = $(targetDOM).height(), oldWidth = $(targetDOM).width(), newHeight, newWidth;
	                var lineHeight = 0;
	                var style = targetDOM.style;
	                var font = '';
	                if (style.font) {
	                    lineHeight = getLineActualTextHeight(lines, font);
	                    font += style.font;
	                } else {
	                   
	                    if (comment.fontStyle()) {
	                        font += BLANK_SPACE + comment.fontStyle();
	                    }
	                    if (comment.fontWeight()) {
	                        font += BLANK_SPACE + comment.fontWeight();
	                    }
	                    if (comment.fontSize()) {
	                        font += BLANK_SPACE + comment.fontSize();
	                    }
	                    if (comment.fontFamily()) {
	                        font += BLANK_SPACE + comment.fontFamily();
	                    }
	                    lineHeight = getLineActualTextHeight(lines, font);
	                }
	                var minHeight = lineHeight, minWidth = 5;
	                if (lines && lines.length > 0) {
	                    newHeight = minHeight;
	                    var maxLineWidth = 0;
	                    for (var i = 0; i < lines.length; i++) {
	                        var lineWidth = sheet._getStringWidth(lines[i], font);
	                        if (maxLineWidth < lineWidth) {
	                            maxLineWidth = lineWidth;
	                        }
	                    }
	                    newWidth = Math_max(maxLineWidth, minWidth);
	                } else {
	                    newHeight = minHeight;
	                    newWidth = minWidth;
	                }
	                $(targetDOM).css(HEIGHT, newHeight).css(WIDTH, newWidth);
	                if (comment.commentState() === 2 ) {
	                    comment.text(targetDOM.value);
	                }
	                self._isAutosizing = true;
	                var heightOffset = newHeight - oldHeight;
	                if (heightOffset !== 0) {
	                    comment.height(comment.height() + heightOffset);
	                }
	                var widthOffset = newWidth - oldWidth;
	                if (widthOffset !== 0) {
	                    comment.width(comment.width() + widthOffset);
	                }
	                self._isAutosizing = false;
	            },
	            _detachEditorEventHandler: function () {
	                var self = this, editor = self._editor;
	                if (editor) {
	                    $(editor).unbind(EDITOR_NS);
	                }
	            },
	            _handleDocumentMouseMove: function () {
	                var self = this, mouseCapture = self._commentManager._mouseCapture;
	                if (!mouseCapture._capture) {
	                    $(DOCUMENT).bind(MOUSEMOVE + COMMENT_DOCUMENT_NS, function (e) {
	                        self._doMouseMove(e);
	                    }).bind(MOUSEUP + COMMENT_DOCUMENT_NS, function (e) {
	                        self._doMouseUp(e);
	                    });
	                    mouseCapture._capture = true;
	                }
	            },
	            _unhandleDocumentMouseMove: function () {
	                var mouseCapture = this._commentManager._mouseCapture;
	                if (mouseCapture._capture) {
	                    mouseCapture._capture = false;
	                    $(DOCUMENT).unbind(COMMENT_DOCUMENT_NS);
	                }
	            }
	        };
	        return CommentView;
	    })();
	
	    var CommentManager = (function () {
	       
	        
	        function CommentManager(sheet) {
	            var self = this;
	            self._sheet = sheet;
	            self._mouseCapture = {_capture: false, x: 0, y: 0, _cachedRect: keyword_null, _resizeDirct: -1};
	            self._editorDom = keyword_null;
	            self._hoverShowComment = keyword_null;
	            self._activeComment = keyword_null;
	            self._commentList = [];
	            self._commentCounter = 0;
	            self._commentViewList = [];
	            self._createEditDom();
	            self._bindEventsOnSheet();
	            self._cache = {};
	        }
	
	        CommentManager.prototype = {
	            constructor: CommentManager,
	            dispose:function() {
	                var self = this;
	                var comments = self.all();
	                comments.forEach(function (comment) {
	                    self._hide(comment);
	                });
	                self._unbindEventsOnSheet();
	            },
	           
	            
	            add: function (row, col, text) {
	                var self = this, sheet = self._sheet;
	                var span = sheet.getSpan(row, col);
	                if (span && (span.row !== row || span.col !== col)) {
	                    return keyword_null;
	                }
	                var oldComment = self.get(row, col);
	                var comment = typeof text === 'string' ? new Comment(text) : text;
	                self._addInternal(row, col, comment);
	                sheet._raiseCellChanged('comment', row, col, 3 , oldComment, comment);
	                return comment;
	            },
	            _addInternal: function (row, col, comment) {
	                var self = this, sheet = self._sheet, commentList = self._commentList;
	               
	                self._removeInternal(row, col);
	
	                if (!comment) {
	                    return;
	                }
	
	                sheet._modelManager._saveCommentChange({type: "add", row: row, col: col});
	
	                comment._rowIndex = row;
	                comment._colIndex = col;
	                comment._sheet = sheet;
	
	                commentList.push(comment);
	                comment._index = self._commentCounter;
	                self._commentCounter++;
	                
	                self._updateCache(row, col, comment);
	                sheet._invalidate();
	            },
	           
	            
	            get: function (row, col) {
	                return this._cache[row + "_" + col] || keyword_null;
	            },
	            _updateCache: function (row, col, comment) {
	                this._cache[row + "_" + col] = comment;
	            },
	            _updateRowCol: function (comment, rowIndex, colIndex) {
	                var oldRowIndex = comment._rowIndex, oldColIndex = comment._colIndex;
	                if (this.get(oldRowIndex, oldColIndex) === comment) {
	                    this._updateCache(oldRowIndex, oldColIndex, keyword_undefined);
	                }
	                this._sheet._modelManager._saveCommentChange({type: "rowcol", comment: comment, row: oldRowIndex, col: oldColIndex});
	                comment._rowIndex = rowIndex;
	                comment._colIndex = colIndex;
	                this._updateCache(rowIndex, colIndex, comment);
	            },
	           
	            
	            remove: function (row, col) {
	                var self = this, comment = self._removeInternal(row, col), sheet = self._sheet;
	                if (comment) {
	                    sheet._raiseCellChanged(commentStorageKey, row, col, 3 , comment, keyword_undefined);
	                    sheet._invalidate();
	                }
	            },
	            _removeInternal: function(row, col) {
	                var self = this, sheet = self._sheet, comment = self.get(row, col);
	                if (comment) {
	                    sheet._modelManager._saveCommentChange({type: "remove", row: row, col: col, comment: comment});
	
	                    self._hide(comment);
	                    arrayHelper._remove(self._commentList, comment);
	                    arrayHelper._remove(self._commentViewList, self._getCommentView(comment));
	                    self._updateCache(row, col, keyword_undefined);
	                }
	                return comment;
	            },
	           
	            
	            clear: function (range) {
	                var self = this, sheet = self._sheet, commentList = self._commentList;
	                sheet.suspendPaint();
	                for (var i = commentList.length - 1; i >= 0; i--) {
	                    var comment = commentList[i], rowIndex = comment._rowIndex, colIndex = comment._colIndex;
	                    if (!range || (rowIndex >= range.row && rowIndex < range.row + range.rowCount &&
	                        colIndex >= range.col && colIndex < range.col + range.colCount)) {
	                        self.remove(rowIndex, colIndex);
	                    }
	                }
	                sheet.resumePaint();
	            },
	           
	            
	            all: function () {
	                return this._commentList.concat();
	            },
	            _swap: function (comment1, row1, col1, comment2, row2, col2) {
	                if (comment1 || comment2) {
	                    if (comment1) {
	                        this._updateRowCol(comment1, row2, col2);
	                    }
	                    if (comment2) {
	                        this._updateRowCol(comment2, row1, col1);
	                    }
	                }
	            },
	
	           
	            getOuterContainer: function (comment) {
	                var commentView = this._getCommentView(comment);
	                return commentView ? commentView._floatBlockCanvasContainer : keyword_null;
	            },
	            _createEditDom: function () {
	                var textArea = createElement(TEXT_AREA);
	                $(textArea).addClass('gc-comment-editor').css(LEFT, 0).css(TOP, 0).css(CSS_POSITION, CSS_ABSOLUTE).css('margin', 0).css(CSS_PADDING, 0).css('word-wrap', 'break-word').css('word-break', 'normal').css(CSS_OVERFLOW, CSS_HIDDEN).css('resize', 'none').css('outline', 'none').css('border', '0px').css(CSS_BOX_SIZING, CSS_CONTENT_BOX).css(CSS_LINE_HEIGHT, 'normal').attr('autocomplete', 'off').attr('gcUIElement', 'gcEditingInput');
	                this._editorDom = textArea;
	            },
	            _bindEventsOnSheet: function () {
	                var self = this, sheet = self._sheet;
	                if (!sheet) {
	                    return;
	                }
	                sheet._bind(Events.ColumnChanged + COMMENT_NS, function (event, data) {
	                    var propertyName = data.propertyName;
	                    if (propertyName === WIDTH || propertyName === 'isVisible') {
	                        self._updateCommentsLayoutWhenRowColumnChanged();
	                    }
	                });
	                sheet._bind(Events.RowChanged + COMMENT_NS, function (event, data) {
	                    var propertyName = data.propertyName;
	                    if (propertyName === HEIGHT || propertyName === 'isVisible') {
	                        self._updateCommentsLayoutWhenRowColumnChanged();
	                    }
	                });
	                sheet._bind(Events.ColumnWidthChanged + COMMENT_NS, function () {
	                    self._updateCommentsLayoutWhenRowColumnChanged();
	                });
	                sheet._bind(Events.RowHeightChanged + COMMENT_NS, function () {
	                    self._updateCommentsLayoutWhenRowColumnChanged();
	                });
	                sheet._bind(Events.CommentChanged + COMMENT_NS, function (event, data) {
	                    if (!data) {
	                        return;
	                    }
	
	                    var propertyName = data.propertyName,
	                        comment = data.comment,
	                        commentView = self._getCommentView(comment);
	                    if (!commentView) {
	                        return;
	                    }
	
	                   
	                    var autoSizeFactors = ['autoSize', 'text', 'fontFamily', 'fontStyle', 'fontSize', 'fontWeight', 'padding'];
	                    if (propertyName === 'location') {
	                        commentView._updateLayoutWhenLocationChanged();
	                    } else if (propertyName === WIDTH || propertyName === HEIGHT) {
	                        commentView._updateLayoutWhenWidthHeightChanged();
	                    } else if (autoSizeFactors.indexOf(propertyName) >= 0 && comment.autoSize() && !commentView._isAutosizing) {
	                        commentView._doAutosize();
	                    }
	                });
	            },
	            _unbindEventsOnSheet: function () {
	                var self = this, sheet = self._sheet;
	                if (!sheet) {
	                    return;
	                }
	                sheet._unbind(COMMENT_NS);
	            },
	            _getCommentView: function (comment) {
	                var self = this, commentViewList = self._commentViewList;
	                if (comment) {
	                    for (var i = 0; i < commentViewList.length; i++) {
	                        var commentView = commentViewList[i];
	                        if (commentView._comment === comment) {
	                            return commentView;
	                        }
	                    }
	                }
	                return keyword_null;
	            },
	            _isEmpty: function () {
	                return this._commentList.length === 0;
	            },
	            _getTopCommentZIndex: function () {
	                var self = this, commentList = self._commentList;
	                if (commentList.length > 0) {
	                    var topCommentZindex = commentList[0].zIndex();
	                    for (var i = 1; i < commentList.length; i++) {
	                        var comment = commentList[i];
	                        if (topCommentZindex < comment.zIndex()) {
	                            topCommentZindex = comment.zIndex();
	                        }
	                    }
	                    return topCommentZindex;
	                }
	                return 0;
	            },
	           
	            _onRowsAdded: function (row, rowCount) {
	                var self = this, commentList = self._commentList, commentViewList = self._commentViewList;
	                for (var i = 0; i < commentList.length; i++) {
	                    var comment = commentList[i];
	                    if (row <= comment._rowIndex) {
	                        self._updateRowCol(comment, comment._rowIndex + rowCount, comment._colIndex);
	                    }
	                }
	                for (var j = 0; j < commentViewList.length; j++) {
	                    var commentView = commentViewList[j];
	                    if (commentView._isOpened()) {
	                        commentView._onRowsAdded(row, rowCount);
	                    }
	                }
	            },
	            _onColumnsAdded: function (column, columnCount) {
	                var self = this, commentList = self._commentList, commentViewList = self._commentViewList;
	                for (var i = 0; i < commentList.length; i++) {
	                    var comment = commentList[i];
	                    if (column <= comment._colIndex) {
	                        self._updateRowCol(comment, comment._rowIndex, comment._colIndex + columnCount);
	                    }
	                }
	                for (var j = 0; j < commentViewList.length; j++) {
	                    var commentView = commentViewList[j];
	                    if (commentView._isOpened()) {
	                        commentView._onColumnsAdded(column, columnCount);
	                    }
	                }
	            },
	            _onRowsRemoved: function (row, rowCount) {
	                var self = this, commentList = self._commentList, commentViewList = self._commentViewList, i, comment;
	                for (i = commentList.length - 1; i >= 0; i--) {
	                    comment = commentList[i];
	                    var rowIndex = comment._rowIndex, colIndex = comment._colIndex;
	                    if (rowIndex >= row && rowIndex < row + rowCount) {
	                        self.remove(rowIndex, colIndex);
	                    }
	                }
	
	                for (i = 0; i < commentList.length; i++) {
	                    comment = commentList[i];
	                    if (row < comment._rowIndex) {
	                        self._updateRowCol(comment, comment._rowIndex - rowCount, comment._colIndex);
	                    }
	                }
	                for (i = 0; i < commentViewList.length; i++) {
	                    var commentView = commentViewList[i];
	                    if (commentView._isOpened()) {
	                        commentView._onRowsRemoved(row, rowCount);
	                    }
	                }
	            },
	            _onColumnsRemoved: function (column, columnCount) {
	                var self = this, commentList = self._commentList, commentViewList = self._commentViewList, i, comment;
	                for (i = commentList.length - 1; i >= 0; i--) {
	                    comment = commentList[i];
	                    var rowIndex = comment._rowIndex, colIndex = comment._colIndex;
	                    if (colIndex >= column && colIndex < column + columnCount) {
	                        self.remove(rowIndex, colIndex);
	                    }
	                }
	
	                for (i = 0; i < commentList.length; i++) {
	                    comment = commentList[i];
	                    if (column < comment._colIndex) {
	                        self._updateRowCol(comment, comment._rowIndex, comment._colIndex - columnCount);
	                    }
	                }
	                for (i = 0; i < commentViewList.length; i++) {
	                    var commentView = commentViewList[i];
	                    if (commentView._isOpened()) {
	                        commentView._onColumnsRemoved(column, columnCount);
	                    }
	                }
	            },
	
	           
	            _getActiveComment: function () {
	                return this._activeComment;
	            },
	            _setActiveComment: function (comment) {
	                var self = this;
	                if (comment && comment !== self._activeComment) {
	                    self._clearActiveComment();
	                    self._activeComment = comment;
	                }
	            },
	            _clearActiveComment: function () {
	                var self = this, activeComment = self._activeComment;
	                if (activeComment) {
	                    var commentView = self._getCommentView(activeComment);
	                    if (commentView && !commentView._isMoving && !commentView._isResizing) {
	                        if (commentView._isEditing()) {
	                            commentView._detachEditor();
	                        }
	                        activeComment.commentState(3 );
	                        self._activeComment = keyword_null;
	                    }
	                }
	            },
	
	           
	            _show: function (comment) {
	                var self = this;
	                var commentView = self._getCommentView(comment);
	                var isFirstlyOpen = false;
	                if (!commentView) {
	                    isFirstlyOpen = true;
	                    commentView = new CommentView(comment, self);
	                    self._commentViewList.push(commentView);
	                }
	                commentView._open();
	                if (isFirstlyOpen && comment.autoSize() && !commentView._isAutosizing) {
	                    commentView._doAutosize();
	                }
	            },
	            _hoverShow: function (comment) {
	                var self = this, activeComment = self._activeComment;
	                if (activeComment) {
	                    if (activeComment.displayMode() === 1 ) {
	                        if (activeComment.commentState() === 2 ) {
	                            return;
	                        }
	                    } else if (activeComment.commentState() === 2  || activeComment.commentState() === 1 ) {
	                        return;
	                    }
	                }
	                if (comment !== self._hoverShowComment) {
	                    if (self._hoverShowComment) {
	                        self._hide(self._hoverShowComment);
	                    }
	                    if (comment && comment.displayMode() === 2 ) {
	                        if (!self._mouseCapture._capture && !comment._timeout) {
	                            self._hoverShowComment = comment;
	                            comment._timeout = setTimeout(function () {
	                                self._show(comment);
	                            }, 200);
	                        }
	                    } else {
	                        self._hoverShowComment = keyword_null;
	                    }
	                }
	            },
	            _hide: function (comment) {
	                var self = this, commentView = self._getCommentView(comment);
	                if (commentView && commentView._isOpened()) {
	                    commentView._close();
	                   
	                    if (comment === self._activeComment) {
	                        self._sheet._loadAndSetSheetSelections();
	                    }
	                }
	                clearTimeout(comment._timeout);
	                delete comment._timeout;
	            },
	            _showCommentLayoutPanel: function () {
	               
	                $(this._sheet._commentRender()._commentLayoutPanel).show();
	            },
	            _hideCommentLayoutPanel: function () {
	               
	                $(this._sheet._commentRender()._commentLayoutPanel).hide();
	            },
	
	           
	            _isHitComment: function (comment, x, y) {
	                var commentView = this._getCommentView(comment);
	                if (commentView) {
	                    var commentRect = commentView._getCommentRect();
	                    if (commentRect) {
	                        return commentRect.contains(x, y);
	                    }
	                }
	                return false;
	            },
	            _isHitCommentEditor: function (comment, x, y) {
	                var commentView = this._getCommentView(comment);
	                if (commentView) {
	                    var commentEditAreaRect = commentView._getCommentEditorRect();
	                    if (commentEditAreaRect) {
	                        return commentEditAreaRect.contains(x, y);
	                    }
	                }
	                return false;
	            },
	            hitTest: function (x, y) {
	                var self = this, topComment = keyword_null;
	                for (var i = 0; i < self._commentList.length; i++) {
	                    var comment = self._commentList[i];
	                    if (!_canEditComment(self._sheet, comment)) {
	                        continue;
	                    }
	                    if (self._isHitComment(comment, x, y)) {
	                        if (topComment) {
	                            if (comment.zIndex() > topComment.zIndex()) {
	                                topComment = comment;
	                            }
	                        } else {
	                            topComment = comment;
	                        }
	                    }
	                }
	                if (topComment) {
	                    return {
	                        x: x,
	                        y: y,
	                        comment: topComment,
	                        area: self._isHitCommentEditor(topComment, x, y) ? COMMENT_EDITOR : COMMENT_INDICATOR
	                    };
	                }
	                return keyword_null;
	            },
	            _getCommentActualZIndex: function (comment) {
	                var self = this, zIndex = self._getTopCommentZIndex();
	                if (comment === self._hoverShowComment) {
	                    return zIndex + 2;
	                } else if (comment === self._activeComment) {
	                    return zIndex + 1;
	                }
	                return comment.zIndex();
	            },
	            _updateCommentsLayoutWhenRowColumnChanged: function () {
	                this._commentViewList.forEach(function (commentView) {
	                    commentView._updateLayoutWhenRowColumnChanged();
	                });
	            },
	            _updateCommentsLayoutWhenSheetScroll: function () {
	                this._commentViewList.forEach(function (commentView) {
	                    commentView._updateAbsoluteLocationAndLayout();
	                });
	            },
	           
	            fromJSON: function (jsonData, noSchema) {
	                var self = this;
	                if (!jsonData || jsonData.length === 0) {
	                    return;
	                }
	                self._commentCounter = 0;
	                for (var i = 0; i < jsonData.length; i++) {
	                    var item = jsonData[i], comment = new Comment();
	                    comment.fromJSON(item, noSchema);
	                    if (comment.commentState() !== 3 ) {
	                        self._activeComment = comment;
	                    }
	                    self._sheet._modelManager._comments._addInternal(comment._rowIndex, comment._colIndex, comment);
	                }
	            },
	            toJSON: function () {
	                var comments = this._commentList;
	                if (!comments || comments.length === 0) {
	                    return keyword_undefined;
	                }
	                var jsonData = [];
	                for (var i = 0; i < comments.length; i++) {
	                    jsonData.push(comments[i].toJSON());
	                }
	                if (jsonData.length === 0) {
	                    return keyword_undefined;
	                }
	                return jsonData;
	            }
	        };
	        return CommentManager;
	    })();
	
	    var CommentRender = (function () {
	        function CommentRender(containerDiv) {
	            var self = this;
	            self._sheet = keyword_null;
	            self._showWhenTouchMoveOrScroll = true;
	            self._commentLayoutPanel = self._createCommentLayoutPanel();
	            containerDiv.appendChild(self._commentLayoutPanel);
	        }
	
	        CommentRender.prototype = {
	            constructor: CommentRender,
	            _createCommentLayoutPanel: function () {
	                var commentLayoutPanel = createElement(CSS_DIV);
	                $(commentLayoutPanel).addClass('gc-comment-layoutPanel' + BLANK_SPACE + NO_USER_SELECT)
	                    .css([CSS_POSITION, LEFT, TOP, HEIGHT, WIDTH, CSS_OVERFLOW, CSS_ZINDEX, CSS_UN_SELECTABLE],
	                        [CSS_ABSOLUTE, 0, 0, 0, 0, CSS_VISIBLE, COMMENT_ZINDEX_MIN, CSS_ON]);
	                return commentLayoutPanel;
	            },
	            _renderCommentFloatPanel: function (sheet) {
	                var self = this;
	                if (sheet._modelManager._comments._isEmpty()) {
	                    return;
	                }
	                var sheetLayout = sheet._getSheetLayout();
	                $(self._commentLayoutPanel).css(LEFT, sheetLayout.x + sheetLayout._rowHeaderWidth).css(TOP, sheetLayout.y + sheetLayout._colHeaderHeight);
	               
	                if (self._sheet !== sheet) {
	                    if (self._sheet) {
	                        var modelManager = self._sheet._modelManager;
	                        var activeComment = modelManager._comments._getActiveComment();
	                        if (activeComment && activeComment.commentState() === 2 ) {
	                            activeComment.commentState(1 );
	                        }
	                    }
	                    self._sheet = sheet;
	                }
	            },
	            _renderCommentCellAdorner: function (ctx, sheetArea, cell) {
	                var row = cell.row, col = cell.col, x = cell.x, y = cell.y, width = getWidth(cell), height = getHeight(cell);
	                var self = this;
	                if (sheetArea === 3  && self._sheet) {
	                    var comment = self._sheet._modelManager._comments.get(row, col);
	                    if (comment) {
	                        var redAngleSize = 6;
	                        if (ctx && width > 0 && height > 0) {
	                            ctx.save();
	                            ctx.rect(x, y, width, height);
	                            ctx.clip();
	                            ctx.fillStyle = 'red';
	                            ctx.beginPath();
	                            ctx.moveTo(x + width - redAngleSize, y);
	                            ctx.lineTo(x + width, y);
	                            ctx.lineTo(x + width, y + redAngleSize);
	                            ctx.lineTo(x + width - redAngleSize, y);
	                            ctx.fill();
	                            ctx.restore();
	                        }
	                    }
	                }
	            },
	            _renderComment: function (commentManager) {
	                if (!this._showWhenTouchMoveOrScroll) {
	                    commentManager._hideCommentLayoutPanel();
	                    return;
	                }
	
	                commentManager._showCommentLayoutPanel();
	                var sheet = this._sheet, comments = commentManager.all();
	                for (var i = 0; i < comments.length; i++) {
	                    var comment = comments[i];
	                    var commentView = commentManager._getCommentView(comment);
	                    if (this._canShowComment(commentManager, comment)) {
	                       
	                        if (comment.displayMode() === 1  && comment === commentManager._hoverShowComment) {
	                            commentManager._hoverShowComment = keyword_null;
	                        }
	                        if (commentView && commentView._isOpened()) {
	                            commentView._updateLayout();
	                        } else {
	                            commentManager._show(comment);
	                        }
	                    } else if (commentView && commentView._isOpened()) {
	                        commentManager._hide(comment);
	                    }
	                }
	               
	                var activeComment = commentManager._getActiveComment();
	                if (activeComment) {
	                    var activeCommentView = commentManager._getCommentView(activeComment);
	                    if (activeCommentView && activeCommentView._isOpened() && sheet.getSelections().length > 0) {
	                        sheet._modelManager.do('clearSelection');
	                    }
	                }
	            },
	            _canShowComment: function (commentManager, comment) {
	                var sheet = commentManager._sheet;
	                if (sheet && getColumnWidth(sheet, comment._colIndex) && getRowHeight(sheet, comment._rowIndex)) {
	                    switch (comment.displayMode()) { 
	                        case 1 
	                        :
	                            return true;
	                        case 2 
	                        :
	                            if (comment.commentState() === 3 ) {
	                                if (comment === commentManager._hoverShowComment) {
	                                    return true;
	                                }
	                            } else {
	                                if (commentManager && comment !== commentManager._hoverShowComment) {
	                                    commentManager._hoverShowComment = comment;
	                                }
	                                return true;
	                            }
	                    }
	                }
	                return false;
	            }
	        };
	        return CommentRender;
	    })();
	
	    var _SheetModelManager = Sheets._SheetModelManager;
	    $.extend(_SheetModelManager.prototype, {
	        _saveCommentChange: function (change) {
	            var changes = this._changes;
	            if (changes) {
	                var commentChanges = changes._commentChanges;
	                if (!commentChanges) {
	                    commentChanges = changes._commentChanges = [];
	                }
	                commentChanges.push(change);
	            }
	        },
	        _restoreComments: function (commentChanges) {
	            if (commentChanges) {
	                var self = this;
	                var comments = self._comments;
	                for (var i = commentChanges.length - 1; i >= 0; i--) {
	                    var change = commentChanges[i], comment = change.comment;
	                    if (change.type === "add") {
	                        comments._removeInternal(change.row, change.col);
	                    } else if (change.type === "remove") {
	                        comments._addInternal(change.row, change.col, change.comment);
	                    } else if (change.type === "property") {
	                        var propertyName = change.name, propertyValue = change.value;
	                        comment[propertyName](propertyValue);
	                    } else if (change.type === "rowcol") {
	                        comments._updateRowCol(comment, change.row, change.col);
	                    }
	                }
	            }
	        }
	    });
	    _SheetModelManager._registerFeature('comments', {
	        init: function() {
	            this._comments = new CommentManager(this._sheet);
	        },
	        undo: function (changes) {
	            var commentChanges = changes._commentChanges;
	            if (commentChanges) {
	                this._restoreComments(commentChanges);               
	            }
	        }
	    });
	
	   
	    var adapter = {
	        init: function () {
	            var self = this;
	           
	            
	            self.comments = self._modelManager._comments;
	            self._commentRender = function () {
	                var parent = self.parent;
	                if (parent) {
	                    if (!parent._commentRenderCache) {
	                        parent._commentRenderCache = new CommentRender(parent._getContainerDiv());
	                    }
	
	                    parent._commentRenderCache._sheet = self;
	                    return self.parent._commentRenderCache;
	                }
	            };
	           
	        },
	
	        dispose: function () {
	            var commentManager = this._modelManager._comments;
	            if (commentManager) {
	                commentManager.dispose();
	            }
	           
	           
	            unbindEvents(this, $(this._getCanvas()));
	        },
	
	        setHost: function (host) {
	            if (!host) {
	                return;
	            }
	            bindEvents(host, this);
	        },
	        onLayoutChanged: function (e) {
	            var self = this;
	            var commentManager = self._modelManager._comments;
	            var changeType = e.changeType;
	            var row = e.row;
	            var rowCount = e.rowCount;
	            var col = e.col;
	            var colCount = e.colCount;
	           
	           
	            if (changeType === 'addRows') {
	                commentManager._onRowsAdded(row, rowCount);
	            } else if (changeType === 'deletingRows') {
	                commentManager._onRowsRemoved(row, rowCount);
	            } else if (changeType === 'addColumns') {
	                commentManager._onColumnsAdded(col, colCount);
	            } else if (changeType === 'deletingColumns') {
	                commentManager._onColumnsRemoved(col, colCount);
	            } else if (e.sheetArea === 3 ) {
	                if (changeType === 'clear') {
	                    if ((e.type & 4 ) === 4) {
	                        commentManager.clear(new Sheets.Range(row, col, rowCount, colCount));
	                    }
	                } else if (changeType === 'addSpan') {
	                    updateCommentsInSpanChangedArea.call(self, true, row, col, rowCount, colCount);
	                } else if (changeType === 'removeSpan') {
	                    updateCommentsInSpanChangedArea.call(self, false, row, col);
	                }
	            }
	        },
	        paint: function (e) {
	            if (!this._modelManager._comments._isEmpty()) {
	                paintCommentFloatLayoutPanel.call(this);
	                this._paintComment(e.clipRect);
	            }
	        },
	        paintCell: function (e) {
	            if (!e.isPrinting && e.sheetArea === 3 ) {
	                paintCommentCellAdorner.call(this, e.ctx, e.sheetArea, e.cell);
	            }
	        },
	
	        toJson: function (data, serializationOption) {
	            var ignoreStyle = serializationOption && serializationOption.ignoreStyle;
	            if (ignoreStyle) {
	                return;
	            }
	            data.comments = this._modelManager._comments.toJSON();
	        },
	
	        fromJson: function (data, noSchema, deserializationOptions) {
	            var ignoreStyle = deserializationOptions && deserializationOptions.ignoreStyle;
	            if (ignoreStyle) {
	                return;
	            }
	            if (data) {
	                var state = noSchema ? data.commentManager : data.comments;
	                if (state) {
	                    this._modelManager._comments.fromJSON(state, noSchema);
	                }
	            }
	        },
	        lastNonNullRowAndCol: function () {
	            var lastNonNullRow = 0, lastNonNullCol = 0;
	            var commentManager = this._modelManager._comments;
	            if (commentManager) {
	                var commentViewList = commentManager._commentViewList;
	                if (commentViewList && commentViewList.length > 0) {
	                    for (var i = 0, len = commentViewList.length; i < len; i++) {
	                        var cv = commentViewList[i];
	                        if (cv && cv._comment) {
	                            if (cv._endRow > lastNonNullRow) {
	                                lastNonNullRow = cv._endRow;
	                            }
	                            if (cv._endColumn > lastNonNullCol) {
	                                lastNonNullCol = cv._endColumn;
	                            }
	                        }
	                    }
	                }
	            }
	
	            return {
	                lastNonNullRow: lastNonNullRow, lastNonNullCol: lastNonNullCol
	            };
	        },
	
	        clearSelection: function () {
	            this._modelManager._comments._clearActiveComment();
	        },
	        processKeyDown: function (argObj) {
	            var self = this, activeComment = self._modelManager._comments._getActiveComment();
	            if (activeComment && self._eventHandler._allowEnterEditing(argObj.e)) {
	                activeComment.commentState(2 );
	                argObj.r = true;
	            }
	        }
	    };
	    Worksheet._registerFeature('comments', adapter);
	
	    var ssAdapter = {
	        init: function () {
	            Commands._initCommentDefaultCommands(this.commandManager());
	        }
	    };
	
	   
	    Sheets.Workbook._registerFeature('comments', ssAdapter);
	
	    module.exports = {
	        CommentState: CommentState,
	        DisplayMode: DisplayMode,
	        Padding: Padding,
	        Comment: Comment,
	        _CommentView: CommentView
	    };
	
	
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
	
	    var Sheets = __webpack_require__(2);
	    var Commands = Sheets.Commands;
	    var $ = Sheets.GC$;
	    var Events = Sheets.Events;
	    var isNullOrUndefined = __webpack_require__(3)._Types._isNullOrUndefined;
	    var Comments = __webpack_require__(1);
	    var ActionBase = Commands.ActionBase;
	    var DELETE_COMMENT = 'deleteComment',
	        DELETE_COMMENT_BY_KEY = 'deleteCommentByKey',
	        DEACTIVATE_COMMENT = 'deactivateComment',
	        MOVE_COMMENT_UP = 'moveCommentUp',
	        MOVE_COMMENT_DOWN = 'moveCommentDown',
	        MOVE_COMMENT_LEFT = 'moveCommentLeft',
	        MOVE_COMMENT_RIGHT = 'moveCommentRight',
	        CHANGE_COMMENT = 'changeComment',
	        CHANGE_COMMENT_TRANSACTION = 'changeCommentTransaction';
	    var keyword_null = null;
	    
	    var executeCommand = Commands._executeCommand;
	    
	    function moveComment(sheet, x, y) {
	        var ret = false;
	        var activeComment = sheet._modelManager._comments._getActiveComment();
	        if (activeComment) {
	            var location = activeComment.location();
	            return sheet._commandManager().execute({ cmd: CHANGE_COMMENT, sheetName: sheet.name(), row: activeComment._rowIndex, col: activeComment._colIndex, oldValue: location.clone(), newValue: new Sheets.Point(location.x + x, location.y + y), propertyName: 'location' });
	        }
	    
	        return ret;
	    }
	
	    function fixActionArgs(command) {
	        var comment = command.comment;
	        if (comment && (isNullOrUndefined(command.row) || isNullOrUndefined(command.col))) {
	            command.row = comment._rowIndex;
	            command.col = comment._colIndex;
	        }
	    }
	
	   
	    var CommentDeleteUndoAction = (function (_super) {
	        $.inherit(CommentDeleteUndoAction, _super);
	        function CommentDeleteUndoAction(sheet, command) {
	            _super.call(this);
	            fixActionArgs(command);
	            this._sheet = sheet;
	            this._command = command;
	        }
	
	        var proto = {
	            execute: function () {
	                var self = this;
	                if (self.canExecute()) {
	                    var sheet = self._sheet;
	
	                    self._beforeAction(sheet, true);
	                    var comment = sheet.comments.get(self._command.row, self._command.col), modelManager = sheet._modelManager, commentManager = modelManager._comments;
	                    var args = {
	                        sheet: sheet,
	                        sheetName: sheet.name(),
	                        comment: comment,
	                        cancel: false
	                    };
	                    sheet._trigger(Events.CommentRemoving, args);
	                    if (!args.cancel) {
	                        modelManager.startTransaction();
	
	                        commentManager.remove(comment._rowIndex, comment._colIndex);
	                        commentManager._activeComment = keyword_null;
	                        sheet._loadAndSetSheetSelections();
	                        sheet._trigger(Events.CommentRemoved, {
	                            sheet: sheet,
	                            sheetName: sheet.name(),
	                            comment: comment
	                        });
	
	                        var changesKey = Commands._getChangesKey(sheet.name());
	                        self._command[changesKey] = modelManager.endTransaction();
	                    }
	                    self._afterAction(sheet, true);
	                    return true;
	                }
	                return false;
	            },
	            undo: function () {
	                var self = this;
	                var sheet = self._sheet;
	                self._beforeAction(sheet, true);
	                var changesKey = Commands._getChangesKey(sheet.name());
	                sheet._modelManager.undo(self._command[changesKey]);
	                sheet._saveAndClearSheetSelections();
	                self._afterAction(sheet, true);
	                return true;
	            }
	        };
	
	        $.extend(CommentDeleteUndoAction.prototype, proto);
	        return CommentDeleteUndoAction;
	    })(ActionBase);
	
	   
	    var CommentPropertyUndoAction = (function (_super) {
	        $.inherit(CommentPropertyUndoAction, _super);
	        function CommentPropertyUndoAction(sheet, command) {
	            _super.call(this);
	            fixActionArgs(command);
	            this._sheet = sheet;
	            this._command = command;
	        }
	
	        var proto = {
	            execute: function () {
	                var self = this;
	                var command = self._command;
	                var sheet = self._sheet;
	                var comment = sheet.comments.get(command.row, command.col);
	                if (self.canExecute() && comment) {
	                    self._beforeAction(sheet, true);
	                    var propertyName = command.propertyName;
	                    comment[propertyName](command.newValue);
	                    if (propertyName === "location") {
	                        if (command.displayMode) {
	                            comment.displayMode(command.displayMode);
	                        } else {
	                            command.displayMode = comment.displayMode();
	                        }
	                    }
	                    self._afterAction(sheet, true);
	                    return true;
	                }
	                return false;
	            },
	            undo: function () {
	                var self = this;
	                var command = self._command;
	                var sheet = self._sheet;
	                self._beforeAction(sheet, true);
	                var comment = sheet.comments.get(command.row, command.col);
	                if (comment) {
	                    comment[command.propertyName](command.oldValue);
	                    self._afterAction(sheet, true);
	                    return true;
	                }
	                return false;
	            }
	        };
	
	        $.extend(CommentPropertyUndoAction.prototype, proto);
	        return CommentPropertyUndoAction;
	    })(ActionBase);
	    Commands.ChangeComment = CommentPropertyUndoAction;
	
	    function doTransaction(transactionCmd, undo) {
	        if(undo ? transactionCmd.canUndo() : transactionCmd.canExecute()) {
	            var transaction = transactionCmd._commentUndoTransaction;
	            if (transaction) {
	                for (var i = 0; i < transaction.length; i++) {
	                    var action = transaction[i];
	                    if (action) {
	                        if (undo) {
	                            action.undo();
	                        } else {
	                            action.execute();
	                        }
	                    }
	                }
	                return true;
	            }
	        }
	        return false;
	    }
	
	    var CommentUndoTransaction = (function (_super) {
	        $.inherit(CommentUndoTransaction, _super);
	        function CommentUndoTransaction(sheet, command) {
	            var self = this;
	            _super.call(self);
	            self._commentUndoTransaction = [];
	            self._sheet = sheet;
	            self._command = command;
	
	            var commands = command.commands;
	            if (commands) {
	                for (var i = 0; i < commands.length; i++) {
	                    self.add(commands[i]);
	                }
	            }
	        }
	
	        var proto = {
	            execute: function () {
	                return doTransaction(this, false);
	            },
	            undo: function () {
	                return doTransaction(this, true);
	            },
	            add: function (action) {
	                this._commentUndoTransaction.push(action);
	            }
	        };
	        $.extend(CommentUndoTransaction.prototype, proto);
	        return CommentUndoTransaction;
	    })(ActionBase);
	
	    Commands[DELETE_COMMENT_BY_KEY] = {
	        canUndo: false,
	        execute: function (context, options) {
	            var sheet = Commands._getWorksheet(context, options);
	            var activeComment = sheet._modelManager._comments._getActiveComment();
	            if (activeComment) {
	                return sheet._commandManager().execute({
	                    cmd: DELETE_COMMENT,
	                    sheetName: sheet.name(),
	                    row: activeComment._rowIndex,
	                    col: activeComment._colIndex
	                });
	            }
	    
	            return false;
	        }
	    };
	    Commands[DEACTIVATE_COMMENT] = {
	        canUndo: false,
	        execute: function (context, options) {
	            var sheet = Commands._getWorksheet(context, options);
	            var comments = sheet._modelManager._comments;
	            if (comments._getActiveComment()) {
	                comments._clearActiveComment();
	                sheet._loadAndSetSheetSelections();
	                sheet.repaint();
	                return true;
	            }
	            return false;
	        }
	    };
	    Commands[MOVE_COMMENT_UP] = {
	        canUndo: false,
	        execute: function (context, options) {
	            var sheet = Commands._getWorksheet(context, options);
	            return moveComment(sheet, 0, -1);
	        }
	    };
	    Commands[MOVE_COMMENT_DOWN] = {
	        canUndo: false,
	        execute: function (context, options) {
	            var sheet = Commands._getWorksheet(context, options);
	            return moveComment(sheet, 0, 1);
	        }
	    };
	    Commands[MOVE_COMMENT_LEFT] = {
	        canUndo: false,
	        execute: function (context, options) {
	            var sheet = Commands._getWorksheet(context, options);
	            return moveComment(sheet, -1, 0);
	        }
	    };
	    Commands[MOVE_COMMENT_RIGHT] = {
	        canUndo: false,
	        execute: function (context, options) {
	            var sheet = Commands._getWorksheet(context, options);
	            return moveComment(sheet, 1, 0);
	        }
	    };
	    Commands[DELETE_COMMENT] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, CommentDeleteUndoAction, options, isUndo);
	        }
	    };
	    Commands[CHANGE_COMMENT] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, CommentPropertyUndoAction, options, isUndo);
	        }
	    };
	    Commands[CHANGE_COMMENT_TRANSACTION] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, CommentUndoTransaction, options, isUndo);
	        }
	    };
	
	    
	    var initCommentDefaultCommands = function (commands) {
	        var isMac = Sheets._util._isMacOS();
	        commands.register(DELETE_COMMENT_BY_KEY, Commands[DELETE_COMMENT_BY_KEY], isMac ? 8  : 46 , false, false, false, false);
	        commands.register(DEACTIVATE_COMMENT, Commands[DEACTIVATE_COMMENT], 27, false, false, false, false);
	        commands.register(MOVE_COMMENT_UP, Commands[MOVE_COMMENT_UP], 38, false, false, false, false);
	        commands.register(MOVE_COMMENT_DOWN, Commands[MOVE_COMMENT_DOWN], 40, false, false, false, false);
	        commands.register(MOVE_COMMENT_LEFT, Commands[MOVE_COMMENT_LEFT], 37, false, false, false, false);
	        commands.register(MOVE_COMMENT_RIGHT, Commands[MOVE_COMMENT_RIGHT], 39, false, false, false, false);
	        commands.register(DELETE_COMMENT, Commands[DELETE_COMMENT]);
	        commands.register(CHANGE_COMMENT, Commands[CHANGE_COMMENT]);
	        commands.register(CHANGE_COMMENT_TRANSACTION, Commands[CHANGE_COMMENT_TRANSACTION]);
	    };
	    Commands._initCommentDefaultCommands = initCommentDefaultCommands;
	    
	    
	    var CommentActions = {
	        CommentDeleteUndoAction: CommentDeleteUndoAction,
	        CommentPropertyUndoAction: CommentPropertyUndoAction
	    };
	    $.extend(Comments, CommentActions);
	    module.exports = Comments;
	
	}());

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var Touch = __webpack_require__(6);
	    if (Touch) {
	        (function () {
	            var Sheets = __webpack_require__(2),
	                $ = Sheets.GC$,
	                $_extend = $.extend,
	                cancelDefault = Sheets._util._cancelDefault;
	            var _TouchMouseMessageFilter = Touch._TouchMouseMessageFilter,
	                _TouchTargetElement = Touch._TouchTargetElement;
	    
	           
	            function CommentTouchManager(element, commentView, touchEventProvider) {
	                var self = this;
	                var comment = self._comment = commentView._comment;
	                self._touchMouseMessageFilter = new _TouchMouseMessageFilter(self);
	                self._touchTarget = new _TouchTargetElement(element, 'Comment' + comment._rowIndex + comment._colIndex, self._touchMouseMessageFilter, 2, 200);
	                self._touchEventProvider = touchEventProvider;
	                self._touchEventHandler = new CommentTouchEventHandler(element, commentView);
	                var touchEventHandler = self._touchEventHandler;
	                var touchTarget = self._touchTarget;
	                touchTarget._canDoManipulation = function () {
	                    return self._comment.commentState() !== 3 ;
	                };
	                touchTarget._canDoTap = function () {
	                    return true;
	                };
	                touchTarget._manipulationStarting = function (e) {
	                    return touchEventHandler._doManipulationStarting(e);
	                };
	                touchTarget._manipulationStarted = function (e) {
	                    return touchEventHandler._doManipulationStarted(e);
	                };
	                touchTarget._manipulationDelta = function (e) {
	                    return touchEventHandler._doManipulationDelta(e);
	                };
	               
	               
	               
	                touchTarget._manipulationCompleted = function (e) {
	                    return touchEventHandler._doManipulationCompleted(e);
	                };
	                touchTarget._tapped = function (e) {
	                    return touchEventHandler._doTapped(e);
	                };
	               
	               
	               
	               
	               
	               
	            }
	    
	            $_extend(CommentTouchManager.prototype, {
	                _attach: function () {
	                    var self = this, touchEventProvider = self._touchEventProvider;
	                    if (touchEventProvider) {
	                        touchEventProvider._attachDettach(self._touchTarget, true);
	                    }
	                },
	                _detach: function () {
	                    var self = this, touchEventProvider = self._touchEventProvider;
	                    if (touchEventProvider) {
	                        touchEventProvider._attachDettach(self._touchTarget, false);
	                    }
	                },
	                _preProcessMouseDown: function (event) {
	                    return this._touchMouseMessageFilter._preProcessMouseDown(event);
	                },
	                _preProcessMouseUp: function (event) {
	                    return this._touchMouseMessageFilter._preProcessMouseUp(event);
	                },
	                _preProcessMouseMove: function (event) {
	                    return this._touchMouseMessageFilter._preProcessMouseMove(event);
	                }
	            });
	    
	            function CommentTouchEventHandler(element, commentView) {
	                var self = this;
	                self._containerElement = element;
	                self._commentView = commentView;
	                self._comment = commentView._comment;
	                self._sheet = self._comment._sheet;
	                self._touchZoomManager = new Touch._TouchZoomManager(self._sheet);
	            }
	    
	            $_extend(CommentTouchEventHandler.prototype, {
	                _positionToPage: function(position) {
	                    var newPosition = new Touch._TouchPoint(position.X, position.Y);
	                    var t = $(this._containerElement).offset();
	                    if (t) {
	                        var body = document.body;
	                        newPosition.X += t.left + body.clientLeft || 0;
	                        newPosition.Y += t.top + body.clientTop || 0;
	                    }
	                    return newPosition;
	                },
	                _doManipulationStarting: function (e) {
	                    e._Mode = 1  | 2  | 32 ;
	                },
	                _doManipulationStarted: function (e) {
	                    var self = this;
	                    var pagePosition = self._positionToPage(e._Position);
	                    self._commentView._doMouseDownToDragOrResize({
	                        target: e._OriginalSource,
	                        isTouch: true,
	                        button: 0,
	                        pageX: pagePosition.X,
	                        pageY: pagePosition.Y,
	                        stopPropagation: function () {
	                        }
	                    });
	                    self._touchZoomManager._startZoom();
	                },
	                _doManipulationDelta: function (e) {
	                    var self = this, scale = e._Cumulative._Scale, sheet = self._sheet, parent = sheet.parent;
	                    if (scale !== 1 && parent && parent.options.allowUserZoom) {
	                        sheet._eventHandler._isCommentWorking = false;
	                        var commentView = self._commentView;
	                       
	                        $(commentView._moveResizeContainerDom).remove();
	                        self._touchZoomManager._continueZoom(scale);
	                    } else {
	                        var pagePosition = self._positionToPage(e._Position);
	                        self._commentView._doMouseMove({
	                            target: e._OriginalSource,
	                            isTouch: true,
	                            button: 0,
	                            pageX: pagePosition.X,
	                            pageY: pagePosition.Y,
	                            stopPropagation: function () {
	                            }
	                        });
	                    }
	                },
	               
	               
	                _doManipulationCompleted: function (e) {
	                    var self = this, scale = e._Cumulative._Scale, sheet = self._sheet, parent = sheet.parent;
	                    if (scale !== 1 && parent && parent.options.allowuserZoom) {
	                        self._touchZoomManager._endZoom(scale);
	                    } else {
	                        var pagePosition = self._positionToPage(e._Position);
	                        self._commentView._doMouseUp({
	                            target: e._OriginalSource,
	                            isTouch: true,
	                            button: 0,
	                            pageX: pagePosition.X,
	                            pageY: pagePosition.Y,
	                            stopPropagation: function () {
	                            }
	                        });
	                    }
	                },
	                _doTapped: function () {
	                    var self = this, comment = self._comment, sheet = self._sheet;
	                    try {
	                        sheet.suspendPaint();
	                        if (comment.commentState() === 3 ) {
	                            comment.commentState(1 );
	                        } else if (comment.commentState() === 1 ) {
	                            comment.commentState(2 );
	                        }
	                    } finally {
	                        sheet.resumePaint();
	                    }
	                }
	               
	               
	               
	               
	            });
	    
	            function CommentContentTouchManager(element, commentView, touchEventProvider) {
	                var self = this;
	                var comment = self._comment = commentView._comment;
	                self._touchMouseMessageFilter = new _TouchMouseMessageFilter(self);
	                self._touchTarget = new _TouchTargetElement(element, 'Comment' + comment._rowIndex + comment._colIndex, self._touchMouseMessageFilter, 2, 200);
	                self._touchEventProvider = touchEventProvider;
	                self._touchEventHandler = new CommentContentTouchEventHandler(element, commentView);
	                var touchEventHandler = self._touchEventHandler;
	                var touchTarget = self._touchTarget;
	                touchTarget._canDoManipulation = function () {
	                    return self._comment.commentState() !== 3 ;
	                };
	                touchTarget._canDoTap = function () {
	                    return true;
	                };
	                touchTarget._manipulationStarting = function (e) {
	                    return touchEventHandler._doManipulationStarting(e);
	                };
	                touchTarget._manipulationStarted = function (e) {
	                    return touchEventHandler._doManipulationStarted(e);
	                };
	                touchTarget._manipulationDelta = function (e) {
	                    return touchEventHandler._doManipulationDelta(e);
	                };
	               
	               
	               
	                touchTarget._manipulationCompleted = function (e) {
	                    return touchEventHandler._doManipulationCompleted(e);
	                };
	                touchTarget._tapped = function (e) {
	                    return touchEventHandler._doTapped(e);
	                };
	               
	               
	               
	               
	               
	               
	            }
	    
	            $_extend(CommentContentTouchManager.prototype, {
	                _attach: function () {
	                    var self = this, touchEventProvider = self._touchEventProvider;
	                    if (touchEventProvider) {
	                        touchEventProvider._attachDettach(self._touchTarget, true);
	                    }
	                },
	                _detach: function () {
	                    var self = this, touchEventProvider = self._touchEventProvider;
	                    if (touchEventProvider) {
	                        touchEventProvider._attachDettach(self._touchTarget, false);
	                    }
	                },
	                _preProcessMouseDown: function (event) {
	                    return this._touchMouseMessageFilter._preProcessMouseDown(event);
	                },
	                _preProcessMouseUp: function (event) {
	                    return this._touchMouseMessageFilter._preProcessMouseUp(event);
	                },
	                _preProcessMouseMove: function (event) {
	                    return this._touchMouseMessageFilter._preProcessMouseMove(event);
	                }
	            });
	    
	            $.inherit(CommentContentTouchEventHandler, CommentTouchEventHandler);
	            function CommentContentTouchEventHandler(element, commentView) {
	                CommentTouchEventHandler.call(this, element, commentView);
	            }
	    
	            CommentContentTouchEventHandler.prototype._doManipulationStarted = function (e) {
	                var self = this;
	                var pagePosition = self._positionToPage(e._Position);
	                self._commentView._doMouseDownToEdit({
	                    target: e._OriginalSource,
	                    isTouch: true,
	                    button: 0,
	                    pageX: pagePosition.X,
	                    pageY: pagePosition.Y,
	                    stopPropagation: function () {
	                    }
	                });
	                self._touchZoomManager._startZoom();
	            };
	           
	    
	            __webpack_require__(1)._CommentView._registerFeature('touch', {
	                init: function (elements) {
	                    var self = this, sheet = self._comment._sheet;
	                    var touchEventProvider = sheet.parent._touchEventProvider;
	                    self._touchManager = new CommentTouchManager(elements[0], self, touchEventProvider);
	                    self._touchManager._attach();
	                    self._touchContentManager = new CommentContentTouchManager(elements[1], self, touchEventProvider);
	                    self._touchContentManager._attach();
	                },
	                detachEditor: function (element) {
	                    var self = this, sheet = self._comment._sheet;
	                    self._touchContentManager = new CommentContentTouchManager(element, self, sheet.parent._touchEventProvider);
	                    self._touchContentManager._attach();
	                },
	                preProcessMouseDownEdit: function(argObj) {
	                    var event = argObj.e;
	                    var touchContentManager = this._touchContentManager;
	                    if (touchContentManager && !event.isTouch && touchContentManager._preProcessMouseDown(event)) {
	                        cancelDefault(event);
	                        argObj.r = true;
	                    }
	                },
	                preProcessMouseDownDragResize: function(argObj) {
	                    var event = argObj.e;
	                    var touchManager = this._touchManager;
	                    if (touchManager && !event.isTouch && touchManager._preProcessMouseDown(event)) {
	                        cancelDefault(event);
	                        argObj.r = true;
	                    }
	                },
	                preProcessMouseMove: function(argObj) {
	                    var event = argObj.e, isTouch = event.isTouch;
	                    var touchManager = this._touchManager;
	                    var touchContentManager = this._touchContentManager;
	                    if (touchManager && !isTouch && touchManager._preProcessMouseMove(event)) {
	                        cancelDefault(event);
	                        argObj.r = true;
	                    }
	                    if (touchContentManager && !isTouch && touchContentManager._preProcessMouseMove(event)) {
	                        cancelDefault(event);
	                        argObj.r = true;
	                    }
	                },
	                preProcessMouseUp: function (argObj) {
	                    var event = argObj.e, isTouch = event.isTouch;
	                    var touchManager = this._touchManager;
	                    var touchContentManager = this._touchContentManager;
	                    if (touchManager && !isTouch && touchManager._preProcessMouseUp(event)) {
	                        cancelDefault(event);
	                        argObj.r = true;
	                    }
	                    if (touchContentManager && !isTouch && touchContentManager._preProcessMouseUp(event)) {
	                        cancelDefault(event);
	                        argObj.r = true;
	                    }
	                }
	            });
	        })();
	    }
	
	}());

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sheets.Touch;

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.comments.12.0.0.js.map