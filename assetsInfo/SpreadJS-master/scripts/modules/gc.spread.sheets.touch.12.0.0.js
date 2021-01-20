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
var GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["Touch"] =
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
	
	    var Touch = {},
	        Common = __webpack_require__(2),
	        Sheets = __webpack_require__(3);
	
	    var isNullOrUndefined = Common._Types._isNullOrUndefined,
	        BaseDialog = Sheets._BaseDialog,
	        $ = Sheets.GC$,
	        $_extend = $.extend,
	        $_isEmptyObject = $.isEmptyObject,
	        $_inherit = $.inherit,
	        Sheets_util = Sheets._util,
	        createElement = Sheets_util._createElement,
	        _ThemeStyleHelper = Sheets._ThemeStyleHelper,
	        Rect = Sheets.Rect,
	        _FocusHelper = Sheets._FocusHelper,
	        _DPIHelper = Sheets._DPIHelper,
	        createRange = Sheets._createRange,
	        Events = Sheets.Events,
	        _Layout = Sheets._Layout,
	        _LayoutModel = Sheets._LayoutModel,
	        cancelDefault = Sheets_util._cancelDefault,
	        browser_mozilla = Sheets_util._browser.mozilla,
	        getCssClassThemeStyle = Sheets._ThemeStyleHelper._getCssClassThemeStyle,
	        util_device = Sheets_util._device(), IPAD_OR_IPHONE = util_device.ipad || util_device.iphone;
	
	    var keyword_null = null, keyword_undefined = void 0, Math_abs = Math.abs, Math_min = Math.min, Math_max = Math.max,
	        Math_pow = Math.pow, Math_atan2 = Math.atan2, Math_PI = Math.PI, Math_round = Math.round, Math_sqrt = Math.sqrt,
	        Math_atan = Math.atan, Math_log = Math.log, Math_floor = Math.floor, const_toolbar_offset = 100,
	        CONST_TOUCH = 'touch', CONST_NONE = 'none', MS_POINTER_DOWN = 'MSPointerDown', MS_POINTER_MOVE = 'MSPointerMove',
	        MS_POINTER_UP = 'MSPointerUp', POINTER_DOWN = 'pointerdown', POINTER_MOVE = 'pointermove', POINTER_UP = 'pointerup',
	        TOUCH_START = 'touchstart', TOUCH_MOVE = 'touchmove', TOUCH_END = 'touchend',
	        MSPOINTER_TYPE_TOUCH = 'MSPOINTER_TYPE_TOUCH',
	        isNotANumber = isNaN, convertToInt = parseInt, convertToFloat = parseFloat,
	        WINDOW = window, DOCUMENT = document, gcGlobal = WINDOW._gcGlobal;
	    var BASE_64_PART1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB', BASE_64_PART4 = 'AAAAAElFTkSuQmCC';
	
	    var CanvasHelper = Sheets._CanvasHelper;
	
	    function sR() {
	        return Common._getResource(Touch.SR)();
	    }
	    function getHeight(obj) {
	        return obj.height;
	    }
	    function getWidth(obj) {
	        return obj.width;
	    }
	
	    function clearSetInterval(id) {
	        clearInterval(id);
	    }
	    function newDateValueOf() {
	        return new Date().valueOf();
	    }
	    function touchHelper_AreClose(p1, p2) {
	        if (!p1 || !p2) {
	            return false;
	        }
	        var TAPPED_MAX_OFFSET = 13;
	        var TAPPED_MAX_DISTANCE = 15;
	        var tappedMaxOffsetXByDPI = TAPPED_MAX_OFFSET;
	        var tappedMaxOffsetYByDPI = TAPPED_MAX_OFFSET;
	        var tappedMaxDistanceXByDPI = TAPPED_MAX_DISTANCE;
	        var tappedMaxDistanceYByDPI = TAPPED_MAX_DISTANCE;
	        var dx = p1.X - p2.X;
	        var dy = p1.Y - p2.Y;
	        return Math_abs(dx) < tappedMaxOffsetXByDPI && Math_abs(dy) < tappedMaxOffsetYByDPI &&
	            (Math_sqrt(dx * dx + dy * dy)) < Math_min(tappedMaxDistanceXByDPI, tappedMaxDistanceYByDPI);
	    }
	    function getActiveSheet(spread) {
	        return spread.getActiveSheet();
	    }
	    function getSelections(sheet) {
	        return sheet.getSelections();
	    }
	    function getFrozenTrailingColumnCount(sheet) {
	        return sheet.frozenTrailingColumnCount();
	    }
	    function getFrozenTrailingRowCount(sheet) {
	        return sheet.frozenTrailingRowCount();
	    }
	    function getColumnCount(sheet, sheetArea) {
	        return sheet.getColumnCount(sheetArea);
	    }
	    function getRowCount(sheet, sheetArea) {
	        return sheet.getRowCount(sheetArea);
	    }
	    var DOUBLE_TAPPED_TIME_OFFSET = 400;
	    var RIGHT_TAPPED_TIME_OFFSET = 1000;
	    var MANIPULATION_DELTA_INTERVAL = 20;
	
	   
	    function _getElementOffset(element) {
	        var t = $(element).offset(), body = DOCUMENT.body, top = 0, left = 0;
	        if (t) {
	            top = t.top + body.clientTop || 0;
	            left = t.left + body.clientLeft || 0;
	        }
	        return {
	            _top: top,
	            _left: left
	        };
	    }
	
	    function TouchEventProvider() {
	        var self = this;
	        self._elements = [];
	        self._pressedPointers = {
	            length: 0
	        };
	        self._manipulationProcessor = new ManipulationProcessor();
	        self._tapEventProcesser = new TapEventProcesser();
	    }
	
	    $_extend(TouchEventProvider.prototype, {
	        _ManipulationStarting: function (handler) {
	            this._manipulationProcessor._ManipulationStarting = handler;
	        },
	        _ManipulationStarted: function (handler) {
	            this._manipulationProcessor._ManipulationStarted = handler;
	        },
	        _ManipulationCompleted: function (handler) {
	            var self = this;
	            self._manipulationProcessor._ManipulationCompleted = function (e) {
	                if (handler) {
	                    handler(e);
	                    var touchMouseMessageFilter = self._touchMouseMessageFilter;
	                    if (touchMouseMessageFilter) {
	                        touchMouseMessageFilter._postProcessManipulationComplete();
	                    }
	                }
	            };
	        },
	        _ManipulationInertiaStarting: function (handler) {
	            this._manipulationProcessor._ManipulationInertiaStarting = handler;
	        },
	        _ManipulationDelta: function (handler) {
	            this._manipulationProcessor._ManipulationDelta = handler;
	        },
	        _Tapped: function (handler) {
	            this._tapEventProcesser._Tapped = handler;
	        },
	        _DoubleTapped: function (handler) {
	            this._tapEventProcesser._DoubleTapped = handler;
	        },
	        _RightTapped: function (handler) {
	            this._tapEventProcesser._RightTapped = handler;
	        },
	        _TouchOperatorStart: function (handler) {
	            this._touchOperatorStart = handler;
	        },
	        _TouchOperatorEnd: function (handler) {
	            this._touchOperatorEnd = handler;
	        },
	        _getOffsetRelativeToDownElement: function (target, targetElement) {
	            var element = targetElement ? targetElement._element : this._downElement._element;
	            return Sheets_util._getRelativeOffset(target, element);
	        },
	        _msPointerDown: function (element, e) {
	            var self = this, pointerType = e.pointerType, target = e.target, offsetX = e.offsetX, offsetY = e.offsetY;
	            if (pointerType === e[MSPOINTER_TYPE_TOUCH] || pointerType === CONST_TOUCH) {
	                var offset = self._getOffsetRelativeToDownElement(target, element), offsetLeft = offset._left, offsetTop = offset._top;
	                var needHandle = self._down(element, target, e.pointerId, new TouchPoint(offsetX + offsetLeft, offsetY + offsetTop), e.timeStamp);
	                if (needHandle) {
	                    cancelDefault(e);
	                }
	                if (self._downElement._eventFlag === 'sheet') {
	                    var canvasOffsetLeft = e.pageX - (offsetX + offsetLeft), canvasOffsetTop = e.pageY - (offsetY + offsetTop);
	                    self._downElement._element.canvasOffset = {top: canvasOffsetTop, left: canvasOffsetLeft};
	                }
	            }
	        },
	        _msPointerMove: function (e) {
	            var self = this, pointerType = e.pointerType, pointerId = e.pointerId;
	            if (pointerType === e[MSPOINTER_TYPE_TOUCH] || pointerType === CONST_TOUCH) {
	                if (self._pressedPointers[pointerId] === keyword_undefined) {
	                    return false;
	                }
	                var offset = self._getOffsetRelativeToDownElement(e.target);
	                var needHandle = self._move(pointerId, new TouchPoint(e.offsetX + offset._left, e.offsetY + offset._top), e.timeStamp);
	                if (needHandle) {
	                    cancelDefault(e);
	                }
	            }
	        },
	        _msPointerUp: function (e) {
	            var self = this, pointerType = e.pointerType, pointerId = e.pointerId;
	            if (pointerType === e[MSPOINTER_TYPE_TOUCH] || pointerType === CONST_TOUCH) {
	                if (self._pressedPointers[pointerId] === keyword_undefined) {
	                    return false;
	                }
	                var offset = self._getOffsetRelativeToDownElement(e.target);
	                var needHandle = self._up(pointerId, new TouchPoint(e.offsetX + offset._left, e.offsetY + offset._top));
	                if (needHandle) {
	                    cancelDefault(e);
	                }
	            }
	        },
	        _msPointerCancel: function (e) {
	            var self = this, pointerType = e.pointerType, pointerId = e.pointerId;
	            if (pointerType === e[MSPOINTER_TYPE_TOUCH] || pointerType === CONST_TOUCH) {
	                if (self._pressedPointers[pointerId] === keyword_undefined) {
	                    return false;
	                }
	                var offset = self._getOffsetRelativeToDownElement(e.target);
	                var needHandle = self._cancel(pointerId, new TouchPoint(e.offsetX + offset._left, e.offsetY + offset._top));
	                if (needHandle) {
	                    cancelDefault(e);
	                }
	            }
	        },
	        _touchStart: function (element, e) {
	            var canvasOffset = _getElementOffset(element._element), changedTouches = e.changedTouches;
	            var needHandle = false;
	            for (var i = 0; i < changedTouches.length; i++) {
	                var touch = changedTouches[i];
	                var timeStamp = browser_mozilla ? newDateValueOf() : e.timeStamp;
	                needHandle = this._down(element, e.target, touch.identifier, new TouchPoint(touch.pageX - canvasOffset._left, touch.pageY - canvasOffset._top), timeStamp) || needHandle;
	            }
	            if (needHandle) {
	                cancelDefault(e);
	            }
	        },
	        _touchMove: function (e) {
	            var self = this, canvasOffset = _getElementOffset(self._downElement._element), changedTouches = e.changedTouches;
	            var needHandle = false;
	            for (var i = 0; i < changedTouches.length; i++) {
	                var touch = changedTouches[i];
	                var timeStamp = browser_mozilla ? newDateValueOf() : e.timeStamp;
	                needHandle = self._move(touch.identifier, new TouchPoint(touch.pageX - canvasOffset._left, touch.pageY - canvasOffset._top), timeStamp) || needHandle;
	            }
	            if (needHandle) {
	                cancelDefault(e);
	            }
	        },
	        _touchEnd: function (e) {
	            var self = this, canvasOffset = _getElementOffset(self._downElement._element), changedTouches = e.changedTouches;
	            var needHandle = false;
	            for (var i = 0; i < changedTouches.length; i++) {
	                var touch = changedTouches[i];
	                needHandle = self._up(touch.identifier, new TouchPoint(touch.pageX - canvasOffset._left, touch.pageY - canvasOffset._top)) || needHandle;
	            }
	            if (needHandle) {
	                cancelDefault(e);
	            }
	        },
	        _touchCancel: function (e) {
	            var self = this, canvasOffset = _getElementOffset(self._downElement._element), changedTouches = e.changedTouches;
	            var needHandle = false;
	            for (var i = 0; i < changedTouches.length; i++) {
	                var touch = changedTouches[i];
	                needHandle = self._cancel(touch.identifier, new TouchPoint(touch.pageX - canvasOffset._left, touch.pageY - canvasOffset._top)) || needHandle;
	            }
	            if (needHandle) {
	                cancelDefault(e);
	            }
	        },
	        _fixPosition: function (position) {
	            var self = this, downElement = self._downElement, manipulationElement = self._manipulationElement;
	            if (downElement !== manipulationElement) {
	                var downElementOffset = $(downElement._element).offset();
	                var manipulationElementOffset = $(manipulationElement._element).offset();
	                position.X += (downElementOffset.left - manipulationElementOffset.left);
	                position.Y += (downElementOffset.top - manipulationElementOffset.top);
	            }
	        },
	        _setCaptureElement: function (element) {
	            var self = this, elements = self._elements, tmpElement, i;
	            self._manipulationElement = keyword_null;
	            self._touchMouseMessageFilter = keyword_null;
	            for (i = 0; i < elements.length; i++) {
	                if (elements[i] === element) {
	                    var downElement = elements[i];
	                    var manipulationElement = keyword_null;
	                    var tapElement = keyword_null;
	                    if (downElement._canDoManipulation && !downElement._canDoManipulation()) {
	                        for (i = 0; i < elements.length; i++) {
	                            tmpElement = elements[i];
	                            if (tmpElement !== downElement && tmpElement._level >= 0 && tmpElement._level < downElement._level && (!tmpElement._canDoManipulation || tmpElement._canDoManipulation())) {
	                                manipulationElement = tmpElement;
	                                break;
	                            }
	                        }
	                        if (manipulationElement === keyword_null) {
	                            return false;
	                        }
	                    }
	                    if (downElement._canDoTap && !downElement._canDoTap()) {
	                        for (i = 0; i < elements.length; i++) {
	                            tmpElement = elements[i];
	                            if (tmpElement !== downElement && tmpElement._level >= 0 && tmpElement._level < downElement._level && (!tmpElement._canDoTap || tmpElement._canDoTap())) {
	                                tapElement = tmpElement;
	                                break;
	                            }
	                        }
	                        if (tapElement === keyword_null) {
	                            return false;
	                        }
	                    }
	                    if (manipulationElement === keyword_null) {
	                        manipulationElement = downElement;
	                    }
	                    if (tapElement === keyword_null) {
	                        tapElement = downElement;
	                    }
	                    self._downElement = downElement;
	                    self._manipulationElement = manipulationElement;
	                    self._tapElement = tapElement;
	                    self._ManipulationStarting(tapElement._manipulationStarting || keyword_null);
	                    self._ManipulationStarted(manipulationElement._manipulationStarted || keyword_null);
	                    self._ManipulationDelta(manipulationElement._manipulationDelta || keyword_null);
	                    self._ManipulationInertiaStarting(manipulationElement._manipulationInertiaStarting || keyword_null);
	                    self._ManipulationCompleted(manipulationElement._manipulationCompleted || keyword_null);
	                    self._Tapped(tapElement._tapped || keyword_null);
	                    self._DoubleTapped(tapElement._doubleTapped || keyword_null);
	                    self._RightTapped(tapElement._rightTapped || keyword_null);
	                    self._TouchOperatorStart(manipulationElement._touchOperatorStart || keyword_null);
	                    self._TouchOperatorEnd(manipulationElement._touchOperatorEnd || keyword_null);
	                    if (manipulationElement._messageFilter) {
	                        self._touchMouseMessageFilter = downElement._messageFilter;
	                    }
	                    break;
	                }
	            }
	            return true;
	        },
	        _down: function (element, sourceElement, id, position, timeStamp) {
	            var self = this;
	            if (self._pressedPointers[id] !== keyword_undefined) {
	                return false;
	            }
	            if (self._pressedPointers.length === 0 && !self._setCaptureElement(element, sourceElement)) {
	                return false;
	            }
	            if (!self._manipulationElement) {
	                return false;
	            }
	            if (self._pressedPointers.length >= self._manipulationElement._maxPointer) {
	                return true;
	            }
	            if (self._touchMouseMessageFilter && self._touchMouseMessageFilter._preProcessPointerDown()) {
	                return false;
	            }
	            self._fixPosition(position);
	            if (self._touchMouseMessageFilter && self._pressedPointers.length === 0) {
	                self._touchMouseMessageFilter._preProcessManipulationStarting();
	            }
	            self._pressedPointers[id] = {id: id, time: newDateValueOf(), position: position};
	            self._pressedPointers.length++;
	
	            self._manipulationProcessor._PreviewPointerDown(sourceElement, id, position, timeStamp);
	            self._manipulationProcessor._PointerDown(id, position, self._pressedPointers.length, timeStamp);
	
	            if (self._pressedPointers.length === 1) {
	                self._tapEventProcesser._PointerDown(position);
	            }
	            if (self._pressedPointers.length === 1 && self._touchOperatorStart) {
	                self._touchOperatorStart({_Position: position});
	            }
	            return true;
	        },
	        _move: function (id, position, timeStamp) {
	            var self = this;
	            if (self._pressedPointers[id] === keyword_undefined) {
	                return false;
	            }
	            if (self._touchMouseMessageFilter && self._touchMouseMessageFilter._preProcessPointerMove()) {
	                return false;
	            }
	            self._fixPosition(position);
	            self._pressedPointers[id] = {id: id, time: newDateValueOf(), position: position};
	            self._manipulationProcessor._PointerMove(id, position, timeStamp);
	            return true;
	        },
	        _up: function (id, position) {
	            var self = this;
	            if (self._pressedPointers[id] === keyword_undefined) {
	                return false;
	            }
	            delete self._pressedPointers[id];
	            self._pressedPointers.length--;
	            if (self._touchMouseMessageFilter && self._touchMouseMessageFilter._preProcessPointerUp()) {
	                return false;
	            }
	            self._fixPosition(position);
	            self._manipulationProcessor._PreviewPointerUp(id);
	            self._manipulationProcessor._PointerUp(id);
	
	            if (self._pressedPointers.length === 0) {
	                self._tapEventProcesser._PreviewPointerUp(position);
	                self._tapEventProcesser._PointerUp(position);
	            }
	            if (self._pressedPointers.length === 0 && self._touchOperatorEnd) {
	                self._touchOperatorEnd({_Position: position});
	            }
	            if (self._touchMouseMessageFilter && self._pressedPointers.length === 0 && self._manipulationProcessor._process === 0 ) {
	                self._touchMouseMessageFilter._postProcessManipulationComplete();
	            }
	            return true;
	        },
	        _cancel: function (id, position) {
	            return this._up(id, position);
	        },
	        _attachDettach: function (targetElement, isAttach) {
	            var self = this;
	            var eventFlag = '.' + targetElement._eventFlag;
	            var _gcSheet = '.gcSheet', _msPointerDown_gcSheet = MS_POINTER_DOWN + _gcSheet,
	                _msPointerMove_gcSheet = MS_POINTER_MOVE + _gcSheet + eventFlag,
	                _msPointerUp_gcSheet = MS_POINTER_UP + _gcSheet + eventFlag,
	                _msPointerCancel_gcSheet = 'MSPointerCancel' + _gcSheet + eventFlag,
	                _msLostPointerCapture_gcSheet = 'MSLostPointerCapture' + _gcSheet + eventFlag,
	                _pointerdown_gcSheet = POINTER_DOWN + _gcSheet,
	                _pointermove_gcSheet = POINTER_MOVE + _gcSheet + eventFlag,
	                _pointerup_gcSheet = POINTER_UP + _gcSheet + eventFlag,
	                _lostPointerCapture_gcSheet = 'LostPointerCapture' + _gcSheet + eventFlag,
	                _pointercancel_gcSheet = 'pointercancel' + _gcSheet + eventFlag,
	                _touchStart_gcSheet = TOUCH_START + _gcSheet, _touchMove_gcSheet = TOUCH_MOVE + _gcSheet,
	                _touchEnd_gcSheet = TOUCH_END + _gcSheet, _touchCancel_gcSheet = 'touchcancel' + _gcSheet;
	
	            function _handleDocumentEvents() {
	                $(DOCUMENT).bind(_msPointerMove_gcSheet, onPointerMove).bind(_msPointerUp_gcSheet, onPointerUp)
	                    .bind(_pointermove_gcSheet, onPointerMove).bind(_pointerup_gcSheet, onPointerUp)
	                    .bind(_msPointerCancel_gcSheet, onPointerCancel).bind(_msLostPointerCapture_gcSheet, onPointerCancel)
	                    .bind(_lostPointerCapture_gcSheet, onPointerCancel).bind(_pointercancel_gcSheet, onPointerCancel);
	            }
	            function _unhandleDocumentEvents() {
	                $(DOCUMENT).unbind(_msPointerMove_gcSheet).unbind(_pointermove_gcSheet).unbind(_msPointerUp_gcSheet)
	                    .unbind(_pointerup_gcSheet).unbind(_msPointerCancel_gcSheet).unbind(_pointercancel_gcSheet)
	                    .unbind(_msLostPointerCapture_gcSheet).unbind(_lostPointerCapture_gcSheet);
	            }
	
	            function onPointerDown(e) {
	                _handleDocumentEvents();
	                self._msPointerDown(targetElement, e);
	            }
	
	            function onPointerMove(e) {
	                self._msPointerMove(e);
	            }
	
	            function onPointerUp(e) {
	                self._msPointerUp(e);
	                if (self._pressedPointers.length === 0) {
	                    _unhandleDocumentEvents();
	                }
	            }
	
	            function onPointerCancel(e) {
	                self._msPointerCancel(e);
	                if (self._pressedPointers.length === 0) {
	                    _unhandleDocumentEvents();
	                }
	            }
	
	            var element = targetElement._element, elements = self._elements;
	            var elementIndex = Common._ArrayHelper._indexOf(elements, targetElement);
	            if (elementIndex >= 0 && isAttach || elementIndex < 0 && !isAttach) {
	                return;
	            }
	            var isIEOrEdge = Sheets_util._isIEOrEdgeInTouchDevice();
	            if (isAttach) {
	                if (isIEOrEdge) {
	                    var elementStyle = element.style;
	                    if (!isNullOrUndefined(elementStyle.msTouchAction)) {
	                        elementStyle.msTouchAction = CONST_NONE;
	                    }
	                    if (!isNullOrUndefined(elementStyle.touchAction)) {
	                        elementStyle.touchAction = CONST_NONE;
	                    }
	
	                    $(element).bind(_msPointerDown_gcSheet, onPointerDown).bind(_pointerdown_gcSheet, onPointerDown);
	
	                } else {
	                    $(element).bind(_touchStart_gcSheet, function (e) {
	                        self._touchStart(targetElement, e);
	                    });
	                    $(element).bind(_touchMove_gcSheet, function (e) {
	                        self._touchMove(e);
	                    }).bind(_touchEnd_gcSheet, function (e) {
	                        self._touchEnd(e);
	                    }).bind(_touchCancel_gcSheet, function (e) {
	                        self._touchCancel(e);
	                    });
	                }
	            } else if (isIEOrEdge) {
	                $(element).unbind(_msPointerDown_gcSheet).unbind(_pointerdown_gcSheet);
	            } else {
	                $(element).unbind(_touchStart_gcSheet).unbind(_touchMove_gcSheet).unbind(_touchEnd_gcSheet).unbind(_touchCancel_gcSheet);
	            }
	            if (isAttach) {
	                elements.push(targetElement);
	            } else {
	                elements.splice(elementIndex, 1);
	            }
	        },
	        _dispose: function () {
	            var self = this, elements = self._elements;
	            for (var i = elements.length - 1; i >= 0; i--) {
	                self._attachDettach(elements[i], false);
	            }
	        }
	    });
	   
	
	   
	    function _AngleBetween(vector1, vector2) {
	        var num = Math_atan2(vector2.Y, vector2.X) - Math_atan2(vector1.Y, vector1.X);
	        if (num > Math_PI) {
	            num -= Math_PI * 2;
	        } else if (num < -Math_PI) {
	            num += Math_PI * 2;
	        }
	        return num;
	    }
	    function _GetLength(p1, p2) {
	        return Math_sqrt((p2.X - p1.X) * (p2.X - p1.X) + (p2.Y - p1.Y) * (p2.Y - p1.Y));
	    }
	    function _CalculateSingleManipulatorRotation(currentPosition, previousPosition, pivot) {
	        var center = new TouchPoint(pivot._Center.X, pivot._Center.Y);
	        var rf = new TouchPoint(previousPosition.X - center.X, previousPosition.Y - center.Y);
	        var rf2 = new TouchPoint(currentPosition.X - center.X, currentPosition.Y - center.Y);
	        var num = Math_min(1.0, Math_pow((_GetLength(previousPosition, center) / pivot._Radius), 4.0));
	        var f = _AngleBetween(rf, rf2);
	        if (isNotANumber(f)) {
	            return 0;
	        }
	        return (f * num);
	    }
	    function _IsZero(d) {
	        return (Math_abs(d) <= 2.2204460492503131E-16);
	    }
	   
	   
	   
	   
	    function manipulationHelper_GetTranslateLocked(offsetX, offsetY) {
	        var translateXLocked = false, translateYLocked = false, angle;
	        if (offsetX !== 0) {
	            angle = Math_atan(offsetY / offsetX) / Math_PI * 180;
	           
	            if (angle < 20) {
	                translateXLocked = true;
	            }
	        }
	        if (offsetX === 0) {
	            translateYLocked = true;
	        } else {
	            angle = Math_atan(offsetY / offsetX) / Math_PI * 180;
	           
	            if (angle > 75 && angle < 105) {
	                translateYLocked = true;
	            }
	        }
	        return {_translateXLocked: translateXLocked, _translateYLocked: translateYLocked};
	    }
	
	    function ManipulationProcessor() {
	        var self = this;
	        self._totalTranslateX = 0;
	        self._totalTranslateY = 0;
	        self._totalScale = 1;
	        self._totalRotation = 0;
	        self._totalExpansion = 0;
	        self._process = 0 ;
	        self._workingModes = 511 ;
	        self._manipulatorPointers = new ManipulatorCollection();
	        self._minimumScaleRotateRadius = 20;
	        self._deltaHistory = new DeltaHistory();
	    }
	
	    $_extend(ManipulationProcessor.prototype, {
	        _PreviewPointerDown: function (originalSource, id, position, timeStamp) {
	            var self = this;
	            if (self._process === 3 ) {
	                self._Complete(true);
	            }
	            self._isScroll = self._process === 2  && self._manipulatorPointers._Count() === 1;
	
	            self._originalSource = originalSource;
	            var manipulatorState = {};
	            manipulatorState._ID = id;
	            manipulatorState._PreviousPoint = position;
	            manipulatorState._InitialPoint = position;
	            self._manipulatorPointers._Add(manipulatorState);
	            self._lastTime = timeStamp;
	            if (self._manipulatorPointers._Count() > 1) {
	                self._TranslateXLocked = false;
	                self._TranslateYLocked = false;
	                if (self._process === 1 ) {
	                    self._StartManipulation();
	                }
	            }
	        },
	        _PointerDown: function (id, position, pointerCount) {
	            if (this._process === 0  && pointerCount === 1) {
	                this._Starting(this._manipulatorPointers._ItemAt(0)._InitialPoint);
	            }
	        },
	        _PointerMove: function (id, position, timeStamp) {
	            var self = this;
	            if (self._workingModes === 0  || !self._manipulatorPointers._Contains(id)) {
	                return;
	            }
	            if (self._process === 1  && self._manipulatorPointers._Count() === 1) {
	               
	                var isPinned = self._IsPinned();
	               
	                if (!self._SupportsMode(1 ) && !self._SupportsMode(2 ) && !isPinned) {
	                    return;
	                }
	               
	                var initialPoint = self._manipulatorPointers._Find(id)._InitialPoint;
	                if (!touchHelper_AreClose(position, initialPoint)) {
	                    var offsetX = Math_abs(position.X - initialPoint.X);
	                    var offsetY = Math_abs(position.Y - initialPoint.Y);
	                    self._SetTranslateRails(offsetX, offsetY);
	                } else {
	                    return;
	                }
	            }
	            if (timeStamp - self._lastTime < MANIPULATION_DELTA_INTERVAL) {
	                return;
	            }
	            self._manipulatorPointers._Find(id)._CurrentPoint = position;
	           
	           
	            var count = self._manipulatorPointers._Count(), i, item;
	            if (count > 1) {
	                for (i = 0; i < count; i++) {
	                    item = self._manipulatorPointers._ItemAt(i);
	                   
	                    if (!item._CurrentPoint) {
	                        return;
	                    }
	                }
	            }
	            self._PointerMoveCore(timeStamp);
	            self._lastTime = timeStamp;
	            count = self._manipulatorPointers._Count();
	            for (i = 0; i < count; i++) {
	                item = self._manipulatorPointers._ItemAt(i);
	                item._PreviousPoint = item._CurrentPoint;
	                item._CurrentPoint = keyword_null;
	            }
	        },
	        _PointerUp: function () {
	            var self = this;
	            if (self._needFireEvents) {
	                self._OnManipulationCompleted(self._needFireEvents);
	                self._needFireEvents = keyword_null;
	            }
	        },
	        _PreviewPointerUp: function (id) {
	            var self = this;
	            if (!self._manipulatorPointers._Contains(id)) {
	                return;
	            }
	            self._manipulatorPointers._Remove(id);
	            if (self._process === 2 ) {
	                if (self._manipulatorPointers._Count() === 0) {
	                    if (self._SupportsMode(64 ) || self._SupportsMode(256 ) || self._SupportsMode(128 )) {
	                        self._StartInertia();
	                    } else {
	                        self._Complete(true);
	                    }
	                }
	            } else if (self._process === 2  || self._process === 3 ) {
	                self._Complete(true);
	            } else if (self._process === 1 ) {
	                self._Complete(false);
	            }
	        },
	        _PointerMoveCore: function (timeStamp) {
	            var self = this;
	            var translateX;
	            var translateY;
	            var expansion;
	            var scale;
	            var rotation;
	            var position;
	            var retureValue = self._CalculateTranslate();
	            translateX = retureValue._translateX;
	            translateY = retureValue._translateY;
	            position = retureValue._position;
	            var retureValue2 = self._CalculateRotationAndScale();
	            rotation = retureValue2._rotation;
	            scale = retureValue2._scale;
	            expansion = retureValue2._expansion;
	            self._totalTranslateX += translateX;
	            self._totalTranslateY += translateY;
	            self._totalScale *= scale;
	            self._totalRotation += rotation;
	            self._totalExpansion += expansion;
	            var deltaSnap = {};
	            deltaSnap._expansion = expansion;
	            deltaSnap._rotation = rotation;
	            deltaSnap._timeStamp = timeStamp - self._lastTime;
	            deltaSnap._translateX = translateX;
	            deltaSnap._translateY = translateY;
	            self._deltaHistory._Enqueue(deltaSnap);
	            self._lastPosition = position;
	            if (self._process === 1  || self._process === 2 ) {
	                if (self._process === 1 ) {
	                    var complete = self._StartManipulation();
	                    if (complete) {
	                        return;
	                    }
	                }
	                var delta = new ManipulationDelta();
	                delta._Expansion = expansion;
	                delta._Rotation = rotation;
	                delta._Scale = scale;
	                delta._Translation = new TouchPoint(translateX, translateY);
	                var velocities = new ManipulationVelocities(self._deltaHistory);
	                var args = new ManipulationDeltaEventArgs(self._originalSource, self._GetCumulative(), delta, false, position, velocities);
	                self._OnManipulationDelta(args);
	                if (args._IsComplete) {
	                    self._Complete(true);
	                    return;
	                }
	            }
	        },
	        _StartManipulation: function () {
	            var self = this;
	            self._process = 2 ;
	           
	           
	            var args = new ManipulationStartedEventArgs(self._originalSource, self._manipulatorPointers._Count(), self._GetCumulative(), self._manipulatorPointers._ItemAt(0)._InitialPoint);
	            self._OnManipulationStarted(args);
	            if (args._IsComplete) {
	                self._Complete(true);
	                return true;
	            }
	            return false;
	        },
	        _SetTranslateRails: function (offsetX, offsetY) {
	            var returnValue = manipulationHelper_GetTranslateLocked(offsetX, offsetY);
	            this._TranslateXLocked = returnValue._translateXLocked;
	            this._TranslateYLocked = returnValue._translateYLocked;
	        },
	        _CalculateTranslate: function () {
	            var translateX = 0;
	            var translateY = 0;
	            var temp = this._GetAveragePoint();
	            var currentAveragePoint = temp._currentAveragePoint;
	            var previousAveragePoint = temp._previousAveragePoint;
	            var position = new TouchPoint(currentAveragePoint.X, currentAveragePoint.Y);
	            translateX = currentAveragePoint.X - previousAveragePoint.X;
	            translateY = currentAveragePoint.Y - previousAveragePoint.Y;
	            return {_translateX: translateX, _translateY: translateY, _position: position};
	        },
	        _CalculateRotationAndScale: function () {
	            var self = this;
	            var rotation = 0;
	            var scale = 1;
	            var expansion = 0;
	            if (self._SupportsMode(16 ) && self._manipulatorPointers._Count() === 1 && self._IsPinned()) {
	                rotation = _CalculateSingleManipulatorRotation(self._manipulatorPointers._ItemAt(0)._CurrentPoint, self._manipulatorPointers._ItemAt(0)._PreviousPoint, self._pivot);
	            }
	            if (self._manipulatorPointers._Count() > 1) {
	                var temp = self._CalculateMultiManipulatorRotationAndScale();
	                rotation = temp._rotation;
	                scale = temp._scale;
	                expansion = temp._expansion;
	            }
	            rotation = rotation / Math_PI * 180;
	            return {_rotation: rotation, _scale: scale, _expansion: expansion};
	        },
	        _CalculateMultiManipulatorRotationAndScale: function () {
	            var self = this;
	            var temp = self._GetAveragePoint();
	            var currentAveragePoint = temp._currentAveragePoint;
	            var previousAveragePoint = temp._previousAveragePoint;
	            var isPinned = self._IsPinned();
	            var pivotCenter = isPinned ? self._pivot._Center : new TouchPoint(0, 0);
	            var rotation = 0;
	            var scale = 1;
	            var expansion = 0;
	            var rotationCount = 0;
	            var scaleCount = 0;
	            var currentDistanseTotal = 0;
	            var previousDistanseTotal = 0;
	            var count = self._manipulatorPointers._Count();
	            for (var i = 0; i < count; i++) {
	                var manipulatorPointer = self._manipulatorPointers._ItemAt(i);
	                var current = manipulatorPointer._CurrentPoint;
	                var previous = manipulatorPointer._PreviousPoint;
	                var currentDistanse = _GetLength(current, currentAveragePoint);
	                var previousDistanse = _GetLength(previous, previousAveragePoint);
	                var previousVector = isPinned ? new TouchPoint(previous.X - pivotCenter.X, previous.Y - pivotCenter.Y) :
	                    new TouchPoint(previous.X - previousAveragePoint.X, previous.Y - previousAveragePoint.Y);
	                var currentVector = isPinned ? new TouchPoint(current.X - pivotCenter.X, current.Y - pivotCenter.Y) :
	                    new TouchPoint(current.X - currentAveragePoint.X, current.Y - currentAveragePoint.Y);
	                var previousLength = _GetLength(previous, pivotCenter);
	                var currentLength = _GetLength(current, pivotCenter);
	                if (previousDistanse >= self._minimumScaleRotateRadius && currentDistanse >= self._minimumScaleRotateRadius) {
	                    scaleCount++;
	                    currentDistanseTotal += currentDistanse;
	                    previousDistanseTotal += previousDistanse;
	                    if ((!isPinned || previousLength >= self._minimumScaleRotateRadius) && currentLength >= self._minimumScaleRotateRadius) {
	                        var angleTmp = _AngleBetween(previousVector, currentVector);
	                        rotation += angleTmp;
	                        rotationCount++;
	                    }
	                }
	            }
	            if (rotationCount > 0 && self._SupportsMode(16 )) {
	                rotation = rotation / rotationCount;
	            } else {
	                rotation = 0;
	            }
	            if (scaleCount > 0 && self._SupportsMode(32 )) {
	                if (!self._isScroll) {
	                    scale = currentDistanseTotal / previousDistanseTotal;
	                }
	                expansion = (currentDistanseTotal - previousDistanseTotal) / scaleCount;
	                self._lastDistance = currentDistanseTotal / scaleCount;
	            } else {
	                self._lastDistance = 0;
	            }
	            return {_rotation: rotation, _scale: scale, _expansion: expansion};
	        },
	        _SupportsMode: function (mode) {
	            return (this._workingModes & mode) !== 0 ;
	        },
	        _GetAveragePoint: function () {
	            var xPrevious = 0;
	            var yPrevious = 0;
	            var xCurrent = 0;
	            var yCurrent = 0;
	            var manipulatorPointers = this._manipulatorPointers, count = manipulatorPointers._Count();
	            for (var i = 0; i < count; i++) {
	                var point = manipulatorPointers._ItemAt(i);
	                var previousPoint = point._PreviousPoint,
	                    currentPoint = point._CurrentPoint;
	                xPrevious += previousPoint.X;
	                yPrevious += previousPoint.Y;
	                xCurrent += currentPoint.X;
	                yCurrent += currentPoint.Y;
	            }
	            var previousAveragePoint = new TouchPoint(xPrevious / count, yPrevious / count);
	            var currentAveragePoint = new TouchPoint(xCurrent / count, yCurrent / count);
	            return {_currentAveragePoint: currentAveragePoint, _previousAveragePoint: previousAveragePoint};
	        },
	        _IsPinned: function () {
	            var pivot = this._pivot;
	            return pivot && !isNotANumber(pivot._Radius);
	        },
	        _Starting: function (position) {
	            var self = this;
	            var args = new ManipulationStartingEventArgs(self._originalSource, self._workingModes, keyword_null, position);
	            args._Mode = 511 ;
	            self._OnManipulationStarting(args);
	            self._ManipulationMode = args._Mode;
	            if (args._Mode === 0 ) {
	                self._Complete(false);
	                return false;
	            }
	            self._workingModes = args._Mode;
	            self._pivot = args._Pivot;
	            self._process = 1 ;
	            return true;
	        },
	        _Complete: function (raisEvent) {
	            var self = this;
	            var isInertia = (self._process === 3 );
	            self._process = 0 ;
	            if (self._inertiaTimer) {
	                clearSetInterval(self._inertiaTimer);
	                self._inertiaTimer = keyword_null;
	            }
	            if (raisEvent) {
	                var args = new ManipulationCompletedEventArgs(self._originalSource, self._GetCumulative(), isInertia,
	                    touchPoint_Round(self._lastPosition), new ManipulationVelocities(self._deltaHistory));
	               
	                if (self._process === 3 ) {
	                    self._needFireEvents = args;
	                } else {
	                    self._OnManipulationCompleted(args);
	                }
	            }
	            self._deltaHistory._Clear();
	            self._manipulatorPointers._Clear();
	            self._pivot = keyword_null;
	            self._totalTranslateX = 0;
	            self._totalTranslateY = 0;
	            self._totalScale = 1;
	            self._totalRotation = 0;
	            self._totalExpansion = 0;
	            self._TranslateXLocked = false;
	            self._TranslateYLocked = false;
	            self._workingModes = 0 ;
	        },
	        _StartInertia: function () {
	            var self = this;
	            var inertiaData = {};
	            var velocities = new ManipulationVelocities(self._deltaHistory);
	            inertiaData._CurrentTranslateXVelocity = self._SupportsMode(64 ) ? velocities._Linear().X : 0;
	            inertiaData._CurrentTranslateYVelocity = self._SupportsMode(64 ) ? velocities._Linear().Y : 0;
	            inertiaData._CurrentExpansionVelocity = self._SupportsMode(256 ) ? velocities._Expansion() : 0;
	            inertiaData._CurrentRotationVelocity = self._SupportsMode(128 ) ? velocities._Angular() : 0;
	           
	            if (inertiaData._CurrentTranslateXVelocity === 0 && inertiaData._CurrentTranslateYVelocity === 0 &&
	                inertiaData._CurrentExpansionVelocity === 0 && inertiaData._CurrentRotationVelocity === 0) {
	                self._Complete(true);
	                return;
	            }
	            inertiaData._TranslateBehavior = new InertiaTranslationBehavior(inertiaData._CurrentTranslateXVelocity, inertiaData._CurrentTranslateYVelocity);
	            inertiaData._ExpansionBehavior = new InertiaExpansionBehavior(inertiaData._CurrentExpansionVelocity);
	            inertiaData._RotationBehavior = new InertiaRotationBehavior(inertiaData._CurrentRotationVelocity);
	            velocities = new ManipulationVelocities(keyword_null, inertiaData._CurrentTranslateXVelocity,
	                inertiaData._CurrentTranslateYVelocity, inertiaData._CurrentRotationVelocity, inertiaData._CurrentExpansionVelocity);
	            var args = new ManipulationInertiaStartingEventArgs(self._originalSource, self._GetCumulative(),
	                new ManipulationDelta(), velocities, inertiaData._ExpansionBehavior, inertiaData._RotationBehavior, inertiaData._TranslateBehavior);
	            self._OnManipulationInertiaStarting(args);
	            inertiaData._TranslateBehavior = args._TranslationBehavior;
	            inertiaData._ExpansionBehavior = args._ExpansionBehavior;
	            inertiaData._RotationBehavior = args._RotationBehavior;
	            if (inertiaData._TranslateBehavior._XDeceleration <= 0 && inertiaData._TranslateBehavior._YDeceleration <= 0) {
	                inertiaData._TranslateBehavior._SetDecelerationInternal(0.003);
	            }
	            if (inertiaData._ExpansionBehavior._DecelerationInternal() <= 0) {
	                inertiaData._ExpansionBehavior._SetDecelerationInternal(0.002);
	            }
	            if (inertiaData._RotationBehavior._DecelerationInternal() <= 0) {
	                inertiaData._RotationBehavior._SetDecelerationInternal(0.003);
	            }
	            var startTime = newDateValueOf();
	            inertiaData._StartTime = startTime;
	            inertiaData._LastTime = startTime;
	            inertiaData._DeltaXRemainder = 0;
	            inertiaData._DeltaYRemainder = 0;
	            self._process = 3 ;
	            self._inertiaTimer = setInterval(function () {
	                try {
	                    self._InertiaTick(inertiaData);
	                } catch (e) {
	                   
	                }
	            }, 20);
	        },
	        _InertiaTick: function (inertiaData) {
	            var self = this;
	            var currentTime = newDateValueOf();
	            var timeDuriing = currentTime - inertiaData._LastTime;
	            if (timeDuriing === 0) {
	                return;
	            }
	            var averageTranslateXVelocity = inertiaData._CurrentTranslateXVelocity;
	            var averageTranslateYVelocity = inertiaData._CurrentTranslateYVelocity;
	            var averageExpansionVelocity = inertiaData._CurrentExpansionVelocity;
	            var RotationVelocity = inertiaData._CurrentRotationVelocity;
	            inertiaData._CurrentTranslateXVelocity = self._GetInertiaCurrentVelocity(timeDuriing, inertiaData._TranslateBehavior._XDeceleration, inertiaData._CurrentTranslateXVelocity);
	            inertiaData._CurrentTranslateYVelocity = self._GetInertiaCurrentVelocity(timeDuriing, inertiaData._TranslateBehavior._YDeceleration, inertiaData._CurrentTranslateYVelocity);
	            inertiaData._CurrentExpansionVelocity = self._GetInertiaCurrentVelocity(timeDuriing, inertiaData._ExpansionBehavior._DecelerationInternal(), inertiaData._CurrentExpansionVelocity);
	            inertiaData._CurrentRotationVelocity = self._GetInertiaCurrentVelocity(timeDuriing, inertiaData._RotationBehavior._DecelerationInternal(), inertiaData._CurrentRotationVelocity);
	            averageTranslateXVelocity = (averageTranslateXVelocity + inertiaData._CurrentTranslateXVelocity) / 2;
	            averageTranslateYVelocity = (averageTranslateYVelocity + inertiaData._CurrentTranslateYVelocity) / 2;
	            averageExpansionVelocity = (averageExpansionVelocity + inertiaData._CurrentExpansionVelocity) / 2;
	            RotationVelocity = (RotationVelocity + inertiaData._CurrentRotationVelocity) / 2;
	            inertiaData._LastTime = currentTime;
	            var complete = false;
	            if (_IsZero(averageTranslateXVelocity) && _IsZero(averageTranslateYVelocity) && _IsZero(averageExpansionVelocity) && _IsZero(RotationVelocity)) {
	                complete = true;
	            }
	            var deltaX = timeDuriing * averageTranslateXVelocity;
	            var deltaY = timeDuriing * averageTranslateYVelocity;
	            var deltaExpansion = timeDuriing * averageExpansionVelocity;
	            var deltaRotation = timeDuriing * RotationVelocity;
	            var deltaScale = 1;
	            if (self._lastDistance > 0) {
	                if (self._lastDistance + deltaExpansion * 2 < 0) {
	                    deltaExpansion = -self._lastDistance / 2 + 1;
	                }
	                if (self._lastDistance !== 0) {
	                    deltaScale = (self._lastDistance + deltaExpansion * 2) / self._lastDistance;
	                }
	            }
	            self._totalExpansion += deltaExpansion;
	            self._totalRotation += deltaRotation;
	            self._totalTranslateX += deltaX;
	            self._totalTranslateY += deltaY;
	            self._totalScale *= deltaScale;
	            self._lastDistance += deltaExpansion;
	            self._lastPosition = new TouchPoint((self._lastPosition.X + deltaX), (self._lastPosition.Y + deltaY));
	           
	           
	           
	            inertiaData._DeltaXRemainder += deltaX;
	            inertiaData._DeltaYRemainder += deltaY;
	            if (complete) {
	                deltaX = Math_round(inertiaData._DeltaXRemainder);
	                deltaY = Math_round(inertiaData._DeltaYRemainder);
	                if (_IsZero(deltaX) && _IsZero(deltaY)) {
	                    self._Complete(true);
	                    return;
	                }
	            } else {
	                if (Math_abs(inertiaData._DeltaXRemainder) >= 1) {
	                    deltaX = inertiaData._DeltaXRemainder;
	                    inertiaData._DeltaXRemainder -= deltaX;
	                }
	                if (Math_abs(inertiaData._DeltaYRemainder) >= 1) {
	                    deltaY = inertiaData._DeltaYRemainder;
	                    inertiaData._DeltaYRemainder -= deltaY;
	                }
	            }
	            var delta = new ManipulationDelta();
	            delta._Translation = new TouchPoint(deltaX, deltaY);
	            delta._Scale = deltaScale;
	            delta._Expansion = deltaExpansion;
	            delta._Rotation = deltaRotation;
	            var deltaVelocities = new ManipulationVelocities(keyword_null, inertiaData._CurrentTranslateXVelocity,
	                inertiaData._CurrentTranslateYVelocity, inertiaData._CurrentRotationVelocity, inertiaData._CurrentExpansionVelocity);
	            var deltaArgs = new ManipulationDeltaEventArgs(self._originalSource, self._GetCumulative(), delta, true,
	                touchPoint_Round(self._lastPosition), deltaVelocities);
	            self._OnManipulationDelta(deltaArgs);
	            if (deltaArgs._IsComplete) {
	                self._Complete(true);
	                return;
	            }
	            if (complete) {
	                self._Complete(true);
	            }
	        },
	        _GetInertiaCurrentVelocity: function (time, desiredDeceleration, velocity) {
	            if (_IsZero(velocity)) {
	                return 0;
	            }
	            var newVelocity;
	            if (velocity < 0) {
	                newVelocity = velocity + desiredDeceleration * time;
	            } else {
	                newVelocity = velocity - desiredDeceleration * time;
	            }
	            if ((newVelocity < 0 && velocity > 0) || (newVelocity > 0 && velocity < 0)) {
	                newVelocity = 0;
	            }
	            return newVelocity;
	        },
	        _GetCumulative: function () {
	            var self = this;
	            var cumulative = new ManipulationDelta();
	            cumulative._Expansion = self._totalExpansion;
	            cumulative._Rotation = self._totalRotation;
	            cumulative._Scale = self._totalScale;
	            cumulative._Translation = new TouchPoint(self._totalTranslateX, self._totalTranslateY);
	            return cumulative;
	        },
	        _GetManipulationData: function (isInertial, oldCumulative, oldDelta, oldVelocities) {
	            var self = this;
	            var cumulative = new ManipulationDelta();
	            var delta = new ManipulationDelta();
	            var vTranslationX = 0;
	            var vTranslationY = 0;
	            var vAngular = 0;
	            var vExpansion = 0;
	            var translateXLocaked = self._SupportsMode(4 ) && self._TranslateXLocked;
	            var translateYLocaked = self._SupportsMode(8 ) && self._TranslateYLocked;
	            if (self._SupportsMode(1 ) && !translateYLocaked && (!isInertial || self._SupportsMode(64 ))) {
	                cumulative._Translation.X = oldCumulative._Translation.X;
	                delta._Translation.X = oldDelta._Translation.X;
	                vTranslationX = oldVelocities._Linear().X;
	            }
	            if (self._SupportsMode(2 ) && !translateXLocaked && (!isInertial || self._SupportsMode(64 ))) {
	                cumulative._Translation.Y = oldCumulative._Translation.Y;
	                delta._Translation.Y = oldDelta._Translation.Y;
	                vTranslationY = oldVelocities._Linear().Y;
	            }
	            if (self._SupportsMode(32 ) && (!isInertial || self._SupportsMode(256 ))) {
	                cumulative._Scale = oldCumulative._Scale;
	                cumulative._Expansion = oldCumulative._Expansion;
	                delta._Scale = oldDelta._Scale;
	                delta._Expansion = oldDelta._Expansion;
	                vExpansion = oldVelocities._Expansion();
	            } else {
	                cumulative._Scale = oldCumulative._Scale;
	                delta._Scale = 1.0;
	            }
	            if (self._SupportsMode(16 ) && (!isInertial || self._SupportsMode(128 ))) {
	                cumulative._Rotation = oldCumulative._Rotation;
	                delta._Rotation = oldDelta._Rotation;
	                vAngular = oldVelocities._Angular();
	            }
	            var velocities = new ManipulationVelocities(keyword_null, vTranslationX, vTranslationY, vAngular, vExpansion);
	            return new ManipulationData(cumulative, delta, velocities);
	        },
	        _OnManipulationStarting: function (e) {
	            if (this._ManipulationStarting && e) {
	                this._ManipulationStarting(e);
	            }
	        },
	        _OnManipulationStarted: function (e) {
	            if (this._ManipulationStarted && e) {
	                this._ManipulationStarted(e);
	            }
	        },
	        _OnManipulationCompleted: function (e) {
	            var self = this;
	            if (self._ManipulationCompleted && e) {
	                var manipulationData = self._GetManipulationData(false, e._Cumulative, e._Cumulative, e._Velocities);
	                e._Cumulative = manipulationData._Cumulative;
	                e._Velocities = manipulationData._Velocities;
	                self._ManipulationCompleted(e);
	            }
	        },
	        _OnManipulationInertiaStarting: function (e) {
	            var self = this;
	            if (self._ManipulationInertiaStarting && e) {
	                var manipulationData = self._GetManipulationData(false, e._Cumulative, e._Delta, e._Velocities);
	                e._Cumulative = manipulationData._Cumulative;
	                e._Delta = manipulationData._Delta;
	                e._Velocities = manipulationData._Velocities;
	                self._ManipulationInertiaStarting(e);
	            }
	        },
	        _OnManipulationDelta: function (e) {
	            var self = this;
	            if (self._ManipulationDelta && e) {
	                var manipulationData = self._GetManipulationData(e._IsInertia, e._Cumulative, e._Delta, e._Velocities);
	                e._Cumulative = manipulationData._Cumulative;
	                e._Delta = manipulationData._Delta;
	                e._Velocities = manipulationData._Velocities;
	                self._ManipulationDelta(e);
	            }
	        }
	    });
	   
	
	   
	    function TapEventProcesser() {
	    }
	
	    $_extend(TapEventProcesser.prototype, {
	        _PointerDown: function (point) {
	            var self = this;
	            self._pointerCount++;
	            if (self._pointerCount > 1) {
	                return;
	            }
	            var currentTimestamp = newDateValueOf();
	            if (self._firstDownPosition && touchHelper_AreClose(point, self._firstDownPosition) && currentTimestamp - self._lastDownTimestamp < DOUBLE_TAPPED_TIME_OFFSET) {
	                self._count++;
	            } else {
	                self._firstDownPosition = point;
	                self._count = 1;
	            }
	            self._lastDownPosition = point;
	            self._lastDownTimestamp = currentTimestamp;
	        },
	        _PointerUp: function () {
	            var self = this;
	            if (self._needFireEvents) {
	                if (self._needFireEvents instanceof TappedEventArgs) {
	                    self._OnTapped(self._needFireEvents);
	                } else if (self._needFireEvents instanceof RightTappedEventArgs) {
	                    self._OnRightTapped(self._needFireEvents);
	                }
	                self._needFireEvents = keyword_null;
	            }
	        },
	       
	        _PreviewPointerUp: function (point) {
	            var self = this;
	            self._pointerCount--;
	            if (self._pointerCount > 0) {
	                return;
	            }
	            var currentTimestamp = newDateValueOf();
	            if (touchHelper_AreClose(point, self._lastDownPosition)) {
	                if ((currentTimestamp - self._lastDownTimestamp > RIGHT_TAPPED_TIME_OFFSET)) {
	                    self._needFireEvents = new RightTappedEventArgs(self._lastDownPosition);
	                } else if (self._count > 1) {
	                    self._count = 0;
	                    self._OnDoubleTapped(new DoubleTappedEventArgs(self._firstDownPosition));
	                    self._firstDownPosition = keyword_null;
	                } else {
	                    self._needFireEvents = new TappedEventArgs(self._lastDownPosition);
	                }
	            } else {
	                self._firstDownPosition = keyword_null;
	            }
	        },
	        _PointerCancel: function () {
	            this._firstDownPosition = keyword_null;
	        },
	        _OnTapped: function (e) {
	            if (this._Tapped && e) {
	                this._Tapped(e);
	            }
	        },
	        _OnDoubleTapped: function (e) {
	            if (this._DoubleTapped && e) {
	                this._DoubleTapped(e);
	            }
	        },
	        _OnRightTapped: function (e) {
	            if (this._RightTapped && e) {
	                this._RightTapped(e);
	            }
	        }
	    });
	   
	
	   
	    function TouchPoint(x, y) {
	        this.X = x;
	        this.Y = y;
	    }
	    function touchPoint_Round(point) {
	        return new TouchPoint(point ? Math_round(point.X) : -1, point ? Math_round(point.Y) : -1);
	    }
	    Touch._TouchPoint = TouchPoint;
	
	    function DeltaHistory() {
	        var self = this;
	        self._count = 0;
	        self._start = 0;
	        self._maxCount = 10;
	        self._history = [];
	    }
	    $_extend(DeltaHistory.prototype, {
	        _GetVelocity: function (mode) {
	            var self = this;
	            if (self._count === 0) {
	                return 0;
	            }
	            var total = 0;
	            var totalCount = (1 + self._count) * self._count / 2;
	            for (var i = self._count - 1; i >= 0; i--) {
	                var value = 0, item = self._Item(i);
	                if (mode === 0 ) {
	                    value = item._translateX;
	                } else if (mode === 1 ) {
	                    value = item._translateY;
	                } else if (mode === 2 ) {
	                    value = item._expansion;
	                } else if (mode === 3 ) {
	                    value = item._rotation;
	                }
	                var velocity = self._GetSingleVelocity(value, item._timeStamp);
	                velocity *= i + 1;
	                total += velocity;
	            }
	            return total / totalCount;
	        },
	        _GetSingleVelocity: function (value, time) {
	            return value / time;
	        },
	        _Item: function (index) {
	            return this._history[this._GetInnerListIndex(index)];
	        },
	        _Last: function () {
	            return this._history[this._count - 1];
	        },
	        _Enqueue: function (snap) {
	            var self = this;
	            if (self._count === 10) {
	                self._Dequeue();
	            }
	            self._count++;
	            self._history[self._GetInnerListIndex(self._count - 1)] = snap;
	            var interval = MANIPULATION_DELTA_INTERVAL * self._maxCount;
	            for (var i = 0; i < self._count; i++) {
	                if (snap._timeStamp - self._history[i]._timeStamp > interval) {
	                    self._Dequeue();
	                    i--;
	                }
	            }
	        },
	        _Dequeue: function () {
	            var self = this;
	            self._start++;
	            if (self._start === self._maxCount) {
	                self._start = 0;
	            }
	            self._count--;
	        },
	        _Clear: function () {
	            this._count = 0;
	        },
	        _GetInnerListIndex: function (index) {
	            return (this._start + index) % this._maxCount;
	        }
	    });
	
	    function ManipulationVelocities(history, translateX, translateY, angular, expansion) {
	        var self = this;
	        if (history) {
	            self._history = history;
	        } else {
	            self._linear = new TouchPoint(translateX, translateY);
	            self._angular = angular;
	            self._expansion = expansion;
	        }
	    }
	    $_extend(ManipulationVelocities.prototype, {
	        _Linear: function () {
	            var self = this;
	            if (!self._linear) {
	                self._linear = new TouchPoint(self._history._GetVelocity(0 ), self._history._GetVelocity(1 ));
	            }
	            return self._linear;
	        },
	        _Angular: function () {
	            var self = this;
	            if (isNullOrUndefined(self._angular)) {
	                self._angular = self._history._GetVelocity(3 );
	            }
	            return self._angular;
	        },
	        _Expansion: function () {
	            var self = this;
	            if (isNullOrUndefined(self._expansion)) {
	                self._expansion = self._history._GetVelocity(2 );
	            }
	            return self._expansion;
	        }
	    });
	
	    function InertiaExpansionBehavior(initialVelocity) {
	        this._initialVelocity = initialVelocity;
	        this._decelerationInternal = 0;
	    }
	    $_extend(InertiaExpansionBehavior.prototype, {
	        _DecelerationInternal: function () {
	            var self = this, desiredExpansion = self._DesiredExpansion, desiredDeceleration = self._DesiredDeceleration,
	                initialVelocity = self._initialVelocity;
	            if (!isNotANumber(desiredExpansion) && desiredExpansion !== 0) {
	               
	               
	               
	               
	               
	                return 0.5 * initialVelocity * initialVelocity / desiredExpansion;
	            } else if (!isNotANumber(desiredDeceleration)) {
	                return desiredDeceleration;
	            }
	            return self._decelerationInternal;
	        },
	        _SetDecelerationInternal: function (value) {
	            this._decelerationInternal = value;
	        }
	    });
	
	    function InertiaRotationBehavior(initialVelocity) {
	        this._initialVelocity = initialVelocity;
	        this._decelerationInternal = 0;
	    }
	    $_extend(InertiaRotationBehavior.prototype, {
	        _DecelerationInternal: function () {
	            var self = this, desiredRotation = self._DesiredRotation, desiredDeceleration = self._DesiredDeceleration,
	                initialVelocity = self._initialVelocity;
	            if (!isNotANumber(desiredRotation) && desiredRotation !== 0) {
	               
	               
	               
	               
	               
	                return 0.5 * initialVelocity * initialVelocity / desiredRotation;
	            } else if (!isNotANumber(desiredDeceleration)) {
	                return desiredDeceleration;
	            }
	            return self._decelerationInternal;
	        },
	        _SetDecelerationInternal: function (value) {
	            this._decelerationInternal = value;
	        }
	    });
	
	    function InertiaTranslationBehavior(initialXVelocity, initialYVelocity) {
	        var self = this;
	        self._initialXVelocity = initialXVelocity;
	        self._initialYVelocity = initialYVelocity;
	        self._XDeceleration = 0;
	        self._YDeceleration = 0;
	        self._decelerationInternal = 0;
	        self._velocity = Math_sqrt((initialXVelocity * initialXVelocity + initialYVelocity * initialYVelocity));
	    }
	    $_extend(InertiaTranslationBehavior.prototype, {
	        _UpdateXYDecelerations: function () {
	            var self = this, desiredDisplacement = self._DesiredDisplacement, velocity = self._velocity,
	                initialXVelocity = self._initialXVelocity, initialYVelocity = self._initialYVelocity,
	                deceleration = self._DecelerationInternal();
	            if (!isNotANumber(desiredDisplacement) && desiredDisplacement !== 0) {
	               
	               
	               
	               
	               
	               
	                self._XDeceleration = 0.5 * velocity * Math_abs(initialXVelocity) / desiredDisplacement;
	                self._YDeceleration = 0.5 * velocity * Math_abs(initialYVelocity) / desiredDisplacement;
	            } else if (!isNotANumber(deceleration) && deceleration !== 0) {
	                self._XDeceleration = deceleration * Math_abs(initialXVelocity) / velocity;
	                self._YDeceleration = deceleration * Math_abs(initialYVelocity) / velocity;
	            } else {
	                self._XDeceleration = 0;
	                self._YDeceleration = 0;
	            }
	        },
	       
	       
	       
	       
	       
	       
	       
	       
	        _DecelerationInternal: function () {
	            var self = this, desiredDeceleration = self._DesiredDeceleration;
	            if (isNotANumber(desiredDeceleration) && isNotANumber(self._DesiredDisplacement)) {
	                return self._decelerationInternal;
	            }
	            return desiredDeceleration;
	        },
	        _SetDecelerationInternal: function (value) {
	            this._decelerationInternal = value;
	            this._UpdateXYDecelerations();
	        }
	    });
	
	    function ManipulationDelta() {
	        var self = this;
	        self._Translation = new TouchPoint(0, 0);
	        self._Scale = 0;
	        self._Rotation = 0;
	        self._Expansion = 0;
	    }
	
	   
	   
	   
	   
	
	   
	   
	   
	
	    function ManipulatorCollection() {
	        this._list = [];
	    }
	    $_extend(ManipulatorCollection.prototype, {
	        _Contains: function (id) {
	            var list = this._list;
	            for (var i = 0; i < list.length; i++) {
	                var item = list[i];
	                if (item._ID === id) {
	                    return true;
	                }
	            }
	            return false;
	        },
	        _Add: function (state) {
	            this._list.push(state);
	        },
	        _Remove: function (id) {
	            var list = this._list;
	            for (var i = 0; i < list.length; i++) {
	                if (list[i]._ID === id) {
	                    list.splice(i, 1);
	                    break;
	                }
	            }
	        },
	        _Count: function () {
	            return this._list.length;
	        },
	        _ItemAt: function (index) {
	            return this._list[index];
	        },
	        _Find: function (id) {
	            var list = this._list;
	            for (var i = 0; i < list.length; i++) {
	                var item = list[i];
	                if (item._ID === id) {
	                    return item;
	                }
	            }
	            return keyword_null;
	        },
	        _Clear: function () {
	            var list = this._list;
	            list.splice(0, list.length);
	        }
	    });
	
	    function ManipulationData(cumulative, delta, velocities) {
	        var self = this;
	        self._Cumulative = cumulative;
	        self._Delta = delta;
	        self._Velocities = velocities;
	    }
	
	    function ManipulationCompletedEventArgs(originalSource, cumulative, isInertia, position, velocities) {
	        var self = this;
	        self._OriginalSource = originalSource;
	        self._Cumulative = cumulative;
	        self._IsInertia = isInertia;
	        self._Position = position;
	        self._Velocities = velocities;
	    }
	
	    function ManipulationDeltaEventArgs(originalSource, cumulative, delta, isInertia, position, velocities) {
	        var self = this;
	        self._OriginalSource = originalSource;
	        self._Cumulative = cumulative;
	        self._Delta = delta;
	        self._IsInertia = isInertia;
	        self._Position = position;
	        self._Velocities = velocities;
	    }
	
	    function ManipulationInertiaStartingEventArgs(originalSource, cumulative, delta, velocities, expansionBehavior, rotationBehavior, translationBehavior) {
	        var self = this;
	        self._OriginalSource = originalSource;
	        self._Cumulative = cumulative;
	        self._Delta = delta;
	        self._Velocities = velocities;
	        self._ExpansionBehavior = expansionBehavior;
	        self._RotationBehavior = rotationBehavior;
	        self._TranslationBehavior = translationBehavior;
	    }
	
	    function ManipulationStartedEventArgs(originalSource, pointerCount, cumulative, position) {
	        var self = this;
	        self._OriginalSource = originalSource;
	        self._PointerCount = pointerCount;
	        self._Cumulative = cumulative;
	        self._Position = position;
	    }
	
	    function ManipulationStartingEventArgs(originalSource, mode, pivot, position) {
	        var self = this;
	        self._OriginalSource = originalSource;
	        self._Mode = mode;
	        self._Pivot = pivot;
	        self._Position = position;
	    }
	
	    function TappedEventArgs(location) {
	        this._Position = location;
	    }
	
	    function RightTappedEventArgs(location) {
	        this._Position = location;
	    }
	
	    function DoubleTappedEventArgs(location) {
	        this._Position = location;
	    }
	
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	
	   
	   
	   
	   
	   
	   
	
	   
	   
	   
	   
	   
	   
	
	   
	
	   
	
	   
	   
	   
	   
	   
	
	    function _getNewZoomFactor(scale, oldZoomFactor) {
	        var newZoomFactor = scale * oldZoomFactor;
	        if (newZoomFactor > 4) {
	            newZoomFactor = 4;
	        } else if (newZoomFactor < 0.5) {
	            newZoomFactor = 0.5;
	        }
	        return newZoomFactor;
	    }
	    function TouchZoomManager(sheet) {
	        this._sheet = sheet;
	    }
	    $_extend(TouchZoomManager.prototype, {
	        _getTouchCanvas: function (width, height) {
	            var canvas = this._canvas;
	            if (!canvas) {
	                canvas = createElement('canvas');
	                _DPIHelper._adjustDevicePixel(canvas, keyword_null, this._sheet);
	                _DPIHelper._setSize(canvas, width, height);
	            } else if (width !== _DPIHelper._getLogicWidth(canvas) || height !== _DPIHelper._getLogicHeight(canvas)) {
	                _DPIHelper._setSize(canvas, width, height);
	            }
	            return canvas;
	        },
	        _saveCanvas: function (srcCanvas, oldSheetLayout, oldGroupLayout, oldZoomFactor) {
	            var self = this;
	            var canvasWidth = _DPIHelper._getLogicWidth(srcCanvas), canvasHeight = _DPIHelper._getLogicHeight(srcCanvas);
	            var canvas = self._getTouchCanvas(canvasWidth, canvasHeight);
	            var ctx = canvas.getContext('2d'), ratioX = _DPIHelper._getScaleX(canvas), ratioY = _DPIHelper._getScaleY(canvas);
	            CanvasHelper._scaleTo(ctx, 1, 1);
	            ctx.drawImage(srcCanvas, 0, 0, getWidth(canvas), getHeight(canvas), 0, 0, getWidth(canvas), getHeight(canvas));
	            CanvasHelper._scaleTo(ctx, ratioX, ratioY);
	            self._canvas = canvas;
	            self._oldSheetLayout = oldSheetLayout;
	            self._oldGroupLayout = oldGroupLayout;
	            self._oldZoomFactor = oldZoomFactor;
	        },
	        _restoreCanvas: function (destCanvas, newZoomFactor, grayAreaBackColor) {
	            var self = this, sheet = self._sheet, x, y, w, h, destX, destY, destW, destH, canvasWidth = _DPIHelper._getLogicWidth(destCanvas),
	                canvasHeight = _DPIHelper._getLogicHeight(destCanvas), frozenTrailingColumnCount = getFrozenTrailingColumnCount(sheet),
	                frozenTrailingRowCount = getFrozenTrailingRowCount(sheet), TRAILIN_GFREEZELINE_WIDTH = frozenTrailingColumnCount > 0 ? 1 : 0,
	                TRAILING_FREEZELINE_HEIGHT = frozenTrailingRowCount > 0 ? 1 : 0, oldGroupLayout = self._oldGroupLayout,
	                newGroupLayout = _getOutlineLayout(sheet), oldSheetLayout = self._oldSheetLayout, newSheetLayout = sheet._getSheetLayout();
	            var cumulativeScale = newZoomFactor / self._oldZoomFactor;
	            var ctx = destCanvas.getContext('2d'), ratioX = _DPIHelper._getScaleX(destCanvas), ratioY = _DPIHelper._getScaleY(destCanvas);
	            var canvas = self._canvas;
	            ctx.save();
	            ctx.fillStyle = grayAreaBackColor;
	            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
	           
	            var rowOutlines = sheet.rowOutlines, columnOutlines = sheet.columnOutlines;
	            if (rowOutlines) {
	                rowOutlines._paint(sheet, ctx, keyword_null, true);
	            }
	            if (columnOutlines) {
	                columnOutlines._paint(sheet, ctx, keyword_null, false);
	            }
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            x = oldGroupLayout.x + getWidth(oldGroupLayout);
	            y = oldGroupLayout.y + getHeight(oldGroupLayout);
	            w = oldSheetLayout._frozenTrailingX - x - TRAILIN_GFREEZELINE_WIDTH;
	            h = oldSheetLayout._frozenTrailingY - y - TRAILING_FREEZELINE_HEIGHT;
	            destX = newGroupLayout.x + getWidth(newGroupLayout);
	            destY = newGroupLayout.y + getHeight(newGroupLayout);
	            destW = w * cumulativeScale;
	            destH = h * cumulativeScale;
	            x *= ratioX;
	            y *= ratioY;
	            w *= ratioX;
	            h *= ratioY;
	            destX *= ratioX;
	            destY *= ratioY;
	            destW *= ratioX;
	            destH *= ratioY;
	            CanvasHelper._scaleTo(ctx, 1, 1);
	            ctx.drawImage(canvas, x, y, w, h, destX, destY, destW, destH);
	           
	            if (frozenTrailingColumnCount > 0) {
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	                x = oldSheetLayout._frozenTrailingX - TRAILIN_GFREEZELINE_WIDTH;
	                y = oldGroupLayout.y + getHeight(oldGroupLayout);
	                w = oldSheetLayout._frozenTrailingWidth + TRAILIN_GFREEZELINE_WIDTH;
	                h = oldSheetLayout._frozenTrailingY - y - TRAILING_FREEZELINE_HEIGHT;
	                destX = newSheetLayout._frozenTrailingX - TRAILIN_GFREEZELINE_WIDTH;
	                destY = newGroupLayout.y + getHeight(newGroupLayout);
	                destW = newSheetLayout._frozenTrailingWidth + TRAILIN_GFREEZELINE_WIDTH;
	                destH = h * cumulativeScale;
	                x *= ratioX;
	                y *= ratioY;
	                w *= ratioX;
	                h *= ratioY;
	                destX *= ratioX;
	                destY *= ratioY;
	                destW *= ratioX;
	                destH *= ratioY;
	                ctx.drawImage(canvas, x, y, w, h, destX, destY, destW, destH);
	            }
	           
	            if (frozenTrailingRowCount > 0) {
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	                x = oldGroupLayout.x + getWidth(oldGroupLayout);
	                y = oldSheetLayout._frozenTrailingY - TRAILING_FREEZELINE_HEIGHT;
	                w = oldSheetLayout._frozenTrailingX - x - TRAILIN_GFREEZELINE_WIDTH;
	                h = oldSheetLayout._frozenTrailingHeight + TRAILING_FREEZELINE_HEIGHT;
	                destX = newGroupLayout.x + getWidth(newGroupLayout);
	                destY = newSheetLayout._frozenTrailingY - TRAILING_FREEZELINE_HEIGHT;
	                destW = w * cumulativeScale;
	                destH = newSheetLayout._frozenTrailingHeight + TRAILING_FREEZELINE_HEIGHT;
	                x *= ratioX;
	                y *= ratioY;
	                w *= ratioX;
	                h *= ratioY;
	                destX *= ratioX;
	                destY *= ratioY;
	                destW *= ratioX;
	                destH *= ratioY;
	                ctx.drawImage(canvas, x, y, w, h, destX, destY, destW, destH);
	            }
	           
	            if (frozenTrailingColumnCount > 0 && frozenTrailingRowCount > 0) {
	                x = oldSheetLayout._frozenTrailingX - TRAILIN_GFREEZELINE_WIDTH;
	                y = oldSheetLayout._frozenTrailingY - TRAILING_FREEZELINE_HEIGHT;
	                w = oldSheetLayout._frozenTrailingWidth + TRAILIN_GFREEZELINE_WIDTH;
	                h = oldSheetLayout._frozenTrailingHeight + TRAILING_FREEZELINE_HEIGHT;
	                destX = newSheetLayout._frozenTrailingX - TRAILIN_GFREEZELINE_WIDTH;
	                destY = newSheetLayout._frozenTrailingY - TRAILING_FREEZELINE_HEIGHT;
	                destW = newSheetLayout._frozenTrailingWidth + TRAILIN_GFREEZELINE_WIDTH;
	                destH = newSheetLayout._frozenTrailingHeight + TRAILING_FREEZELINE_HEIGHT;
	                x *= ratioX;
	                y *= ratioY;
	                w *= ratioX;
	                h *= ratioY;
	                destX *= ratioX;
	                destY *= ratioY;
	                destW *= ratioX;
	                destH *= ratioY;
	                ctx.drawImage(canvas, x, y, w, h, destX, destY, destW, destH);
	            }
	            CanvasHelper._scaleTo(ctx, ratioX, ratioY);
	            ctx.restore();
	        },
	
	        _startZoom: function () {
	            var self = this, sheet = self._sheet, zoomFactor = sheet.zoom();
	            var ctx = sheet._render._getBufferCtx();
	            if (ctx) {
	                self._saveCanvas(ctx.canvas, sheet._getSheetLayout(), _getOutlineLayout(sheet), zoomFactor);
	            }
	        },
	        _continueZoom: function (cumulativeScale) {
	            var self = this, sheet = self._sheet;
	            if (!sheet.endEdit()) {
	                return;
	            }
	            var newZoomFactor = _getNewZoomFactor(cumulativeScale, self._oldZoomFactor);
	            if (sheet.zoom() !== newZoomFactor) {
	                sheet._trigger(Events.UserZooming, {
	                    sheet: sheet,
	                    sheetName: sheet.name(),
	                    oldZoomFactor: sheet.zoom(),
	                    newZoomFactor: newZoomFactor
	                });
	                sheet._zoomInternal(newZoomFactor);
	                sheet.invalidateLayout();
	                var render = sheet._render, ctx = render._getCtx();
	                if (ctx) {
	                    self._restoreCanvas(ctx.canvas, newZoomFactor, render._getGrayAreaBackColor(false));
	                }
	
	                if (sheet._paintFloatingObject) {
	                    sheet._paintFloatingObject(keyword_null, newZoomFactor);
	                }
	                if (sheet._paintComment) {
	                    sheet._paintComment(keyword_null);
	                }
	            }
	        },
	        _endZoom: function (cumulativeScale) {
	            var self = this, sheet = self._sheet;
	            sheet._zoomInternal(_getNewZoomFactor(cumulativeScale, self._oldZoomFactor));
	            sheet._needSyncHScrollbarSize = true;
	            sheet._needSyncVScrollbarSize = true;
	            sheet._invalidate();
	        }
	    });
	    Touch._TouchZoomManager = TouchZoomManager;
	
	   
	   
	   
	   
	   
	   
	
	    var BOUNDARY_SCOPE = 200, INERTIA_BOUNDARY_SCOPE = 20;
	    function _getNewTopRowInfo(sheet, translationY, oldTopRow) {
	        var r = oldTopRow, height = 0, offset = 0, cachePool = sheet._cachePool, minRow, maxRow,
	            viewportY = sheet._getSheetLayout()._viewportY, rowLayout = sheet._getViewportRowLayout(1).findRow(r);
	        if (rowLayout) {
	            if (translationY > 0) {
	                minRow = sheet._getScrollableRow(-1);
	                height = viewportY - rowLayout.y;
	                while (r > minRow && height < translationY) {
	                    r--;
	                    height += cachePool._getZoomRowHeight(r);
	                }
	                offset = translationY - height;
	            } else if (translationY < 0) {
	                maxRow = sheet._getLastVisualScrollRow();
	                height = -(rowLayout.y + getHeight(rowLayout) - viewportY);
	                while (r < maxRow && height > translationY) {
	                    r++;
	                    height -= cachePool._getZoomRowHeight(r);
	                }
	                offset = translationY - height;
	            }
	        }
	        return {_row: r, _offset: offset};
	    }
	    function _getNewLeftColumnInfo(sheet, translationX, oldLeftColumn) {
	        var c = oldLeftColumn, width = 0, offset = 0, minColumn, maxColumn, cachePool = sheet._cachePool,
	            viewportX = sheet._getSheetLayout()._viewportX, columnLayout = sheet._getViewportColumnLayout(1).findCol(c);
	        if (columnLayout) {
	            if (translationX > 0) {
	                minColumn = sheet._getScrollableColumn(-1);
	                width = viewportX - columnLayout.x;
	                while (c > minColumn && width < translationX) {
	                    c--;
	                    width += cachePool._getZoomColWidth(c);
	                }
	                offset = translationX - width;
	            } else if (translationX < 0) {
	                maxColumn = sheet._getLastVisualScrollColumn();
	                width = -(columnLayout.x + getWidth(columnLayout) - viewportX);
	                while (c < maxColumn && width > translationX) {
	                    c++;
	                    width -= cachePool._getZoomColWidth(c);
	                }
	                offset = translationX - width;
	            }
	        }
	        return {_col: c, _offset: offset};
	    }
	    function _getBoundaryFactor(distance, scope) {
	       
	        return convertToInt((-scope / (distance / scope + 1.0) + scope));
	    }
	    function _getDistance(boundaryFactor, scope) {
	        return convertToInt((scope * (-scope / (boundaryFactor - scope) - 1)));
	    }
	    function _fillRect(ctx, fillStyle, x, y, width, height) {
	        ctx.fillStyle = fillStyle;
	        ctx.fillRect(x, y, width, height);
	    }
	    function _getColHeaderFillStyle(ctx, x, y, w, h) {
	        var fillStyle, themeStyle = _ThemeStyleHelper._getVisualStateThemeStyle(0 , 'gc-columnHeader-normal'),
	            backgroundImg = themeStyle && themeStyle.backgroundImage, backgroundColor = themeStyle && themeStyle.backgroundColor;
	        if (backgroundImg && backgroundImg.indexOf('linear-gradient') !== -1) {
	            var colors = Sheets_util._getLinearGradientColors(backgroundImg);
	            fillStyle = ctx.createLinearGradient(x + w / 2, y, x + w / 2, y + h);
	            for (var i = 0, len = colors.length; i < len; i++) {
	                var color = colors[i];
	                fillStyle.addColorStop(color.point, color.color);
	            }
	        } else if (backgroundColor) {
	            fillStyle = backgroundColor;
	        }
	        return fillStyle;
	    }
	    function _getRowHeaderFillStyle() {
	        var themeStyle = _ThemeStyleHelper._getVisualStateThemeStyle(0 , 'gc-rowHeader-normal');
	        return themeStyle && themeStyle.backgroundColor;
	    }
	    function _fillGrayArea(sheet, considerHeader) {
	
	        var layout = sheet._getSheetLayout(), render = sheet._render, options = sheet.options, sheetAreaOffset = options.sheetAreaOffset, offsetLeft = sheetAreaOffset.left, offsetTop = sheetAreaOffset.top,
	            grayAreaBackColor = render._getGrayAreaBackColor(false), ctx = render._getCtx(), bufferCtx = render._getBufferCtx(), x, y, width, height;
	        var viewportRowLayout = sheet._getViewportRowLayout(1);
	        var outlineLayout = _getOutlineLayout(sheet);
	        x = layout._headerX;
	
	        var rowOffset = offsetLeft >= 1 ? 1 : 0, colOffset = offsetTop >= 1 ? 1 : 0;
	
	        width = getWidth(layout);
	       
	        var firstRow = sheet._getScrollableRow(-1);
	        var firstRowLayout = viewportRowLayout.findRow(firstRow);
	        if (firstRowLayout) {
	            y = layout._viewportY;
	            height = firstRowLayout.y - y - 1 - colOffset;
	            if (height > 0) {
	                if (considerHeader) {
	                   
	                    var rowHeaderWidth = layout._rowHeaderWidth, rowHeaderFillStyle = _getRowHeaderFillStyle();
	                    _fillRect(ctx, rowHeaderFillStyle, x, y, rowHeaderWidth - 1, height + 1);
	                    _fillRect(bufferCtx, rowHeaderFillStyle, x, y, rowHeaderWidth - 1, height + 1);
	                   
	                    _fillRect(ctx, grayAreaBackColor, x + rowHeaderWidth, y, width - rowHeaderWidth - outlineLayout.width, height);
	                    _fillRect(bufferCtx, grayAreaBackColor, x + rowHeaderWidth, y, width - rowHeaderWidth - outlineLayout.width, height);
	                } else {
	                   
	                    _fillRect(ctx, grayAreaBackColor, x, y, width, height);
	                    _fillRect(bufferCtx, grayAreaBackColor, x, y, width, height);
	                }
	            }
	        }
	       
	        var lastRow = sheet._getScrollableRow(getRowCount(sheet), true);
	        var lastRowLayout = viewportRowLayout.findRow(lastRow);
	        if (lastRowLayout) {
	            y = lastRowLayout.y + getHeight(lastRowLayout);
	            height = layout._frozenTrailingY - y - 1 - colOffset;
	            if (height > 0) {
	                _fillRect(ctx, grayAreaBackColor, x, y, width, height);
	                _fillRect(bufferCtx, grayAreaBackColor, x, y, width, height);
	            }
	        }
	        var viewportColLayout = sheet._getViewportColumnLayout(1);
	        y = layout._headerY;
	        height = getHeight(layout);
	       
	        var firstCol = sheet._getScrollableColumn(-1);
	        var firstColLayout = viewportColLayout.findCol(firstCol);
	        if (firstColLayout) {
	            x = layout._viewportX;
	            width = firstColLayout.x - x - 1 - rowOffset;
	            if (width > 0) {
	                if (considerHeader) {
	                   
	                    var colHeaderHeight = layout._colHeaderHeight, colHeaderFillStyle = _getColHeaderFillStyle(ctx, x, y, width + 1, colHeaderHeight - 1);
	                    _fillRect(ctx, colHeaderFillStyle, x, y, width + 1, colHeaderHeight - 1);
	                    _fillRect(bufferCtx, colHeaderFillStyle, x, y, width + 1, colHeaderHeight - 1);
	                   
	                    _fillRect(ctx, grayAreaBackColor, x, y + colHeaderHeight, width, height - colHeaderHeight - outlineLayout.height);
	                    _fillRect(bufferCtx, grayAreaBackColor, x, y + colHeaderHeight, width, height - colHeaderHeight - outlineLayout.height);
	                } else {
	                   
	                    _fillRect(ctx, grayAreaBackColor, x, y, width, height);
	                    _fillRect(bufferCtx, grayAreaBackColor, x, y, width, height);
	                }
	            }
	        }
	       
	        var lastCol = sheet._getScrollableColumn(getColumnCount(sheet), true);
	        var lastColLayout = viewportColLayout.findCol(lastCol);
	        if (lastColLayout) {
	            x = lastColLayout.x + getWidth(lastColLayout);
	            width = layout._frozenTrailingX - x - 1 - rowOffset;
	            if (width > 0) {
	                _fillRect(ctx, grayAreaBackColor, x, y, width, height);
	                _fillRect(bufferCtx, grayAreaBackColor, x, y, width, height);
	            }
	        }
	    }
	    function _strokeLine(ctx, strokeStyle, x1, y1, x2, y2) {
	        ctx.beginPath();
	        ctx.strokeStyle = strokeStyle;
	        ctx.moveTo(x1, y1);
	        ctx.lineTo(x2, y2);
	        ctx.stroke();
	    }
	    function _getOutlineLayout(sheet) {
	        var options = sheet.options, sheetAreaOffset = options.sheetAreaOffset;
	        return sheet._getOutlineLayout && sheet._getOutlineLayout() || {x: sheetAreaOffset.left, y: sheetAreaOffset.top, width: 0, height: 0};
	    }
	    function _drawOutlineBorder(sheet, considerHeader) {
	        var layout = sheet._getSheetLayout(), render = sheet._render, ctx = render._getCtx();
	        var viewportRowLayout = sheet._getViewportRowLayout(1);
	        var outlineLayout = _getOutlineLayout(sheet);
	
	       
	        var firstRow = sheet._getScrollableRow(-1);
	        var firstRowLayout = viewportRowLayout.findRow(firstRow);
	        var outlineBorderColor = getCssClassThemeStyle('gc-group').color;
	        if (firstRowLayout) {
	            var y = layout._viewportY, height = firstRowLayout.y - y;
	            if (height > 0 && considerHeader && outlineLayout.width > 0 && layout._rowHeaderWidth === 0) {
	                _strokeLine(ctx, outlineBorderColor, layout._frozenX - 0.5, y, layout._frozenX - 0.5, firstRowLayout.y);
	            }
	        }
	        var viewportColLayout = sheet._getViewportColumnLayout(1);
	       
	        var firstCol = sheet._getScrollableColumn(-1);
	        var firstColLayout = viewportColLayout.findCol(firstCol);
	        if (firstColLayout) {
	            var x = layout._viewportX, width = firstColLayout.x - x;
	            if (width > 0 && considerHeader && outlineLayout.height > 0 && layout._colHeaderHeight === 0) {
	                _strokeLine(ctx, outlineBorderColor, x, layout._frozenY - 0.5, firstColLayout.x, layout._frozenY - 0.5);
	            }
	        }
	
	
	    }
	    function _makeUpGridline(sheet, considerHeader) {
	        var layout = sheet._getSheetLayout(), render = sheet._render,
	            viewportGridlineColor = sheet.options.gridline.color,
	            themeStyle = _ThemeStyleHelper._getVisualStateThemeStyle(0 , 'gc-columnHeader-normal'),
	            headerGridlineColor = themeStyle && themeStyle.borderBottomColor, ctx = render._getCtx(), x, y, width, height;
	        var viewportRowLayout = sheet._getViewportRowLayout(1);
	        var outlineLayout = _getOutlineLayout(sheet);
	        x = layout._headerX;
	        width = getWidth(layout);
	       
	        var firstRow = sheet._getScrollableRow(-1);
	        var firstRowLayout = viewportRowLayout.findRow(firstRow);
	        if (firstRowLayout) {
	            y = layout._viewportY;
	            height = firstRowLayout.y - y;
	            if (height > 0) {
	                 _strokeLine(ctx, viewportGridlineColor, x, firstRowLayout.y - 0.5, x + width - outlineLayout.width, firstRowLayout.y - 0.5);
	                if (considerHeader) {
	                    if(outlineLayout.width === 0) {
	                        _strokeLine(ctx, viewportGridlineColor, layout._headerX - 0.5, y, layout._headerX - 0.5, firstRowLayout.y);
	                    }
	                    _strokeLine(ctx, headerGridlineColor, layout._frozenX - 0.5, y, layout._frozenX - 0.5, firstRowLayout.y);
	                }
	            }
	        }
	        var viewportColLayout = sheet._getViewportColumnLayout(1);
	        y = layout._headerY;
	        height = getHeight(layout);
	       
	        var firstCol = sheet._getScrollableColumn(-1);
	        var firstColLayout = viewportColLayout.findCol(firstCol);
	        if (firstColLayout) {
	            x = layout._viewportX;
	            width = firstColLayout.x - x;
	            if (width > 0) {
	                _strokeLine(ctx, viewportGridlineColor, firstColLayout.x - 0.5, y, firstColLayout.x - 0.5, y + height - outlineLayout.height);
	                if (considerHeader) {
	                    if(outlineLayout.height === 0) {
	                        _strokeLine(ctx, viewportGridlineColor, x, layout._headerY - 0.5, firstColLayout.x, layout._headerY - 0.5);
	                    }
	                    _strokeLine(ctx, headerGridlineColor, x, layout._frozenY - 0.5, firstColLayout.x, layout._frozenY - 0.5);
	                }
	            }
	        }
	    }
	    function _buildScrollDirection(isTranslationXFinished, isTranslationYFinished) {
	        var dir = 0 ;
	        if (!isTranslationXFinished) {
	            dir |= 1 ;
	        }
	        if (!isTranslationYFinished) {
	            dir |= 2 ;
	        }
	        return dir;
	    }
	    function TouchScrollManager(sheet) {
	        this._sheet = sheet;
	    }
	    function _createTouchViewportColumnLayout(sheet, offset) {
	        var colLayouts = new _LayoutModel();
	        var cachePool = sheet._cachePool, layout = sheet._getSheetLayout(),
	            col = Math_max(sheet.frozenColumnCount(), sheet._scrollLeftCol),
	            colCount = getColumnCount(sheet) - getFrozenTrailingColumnCount(sheet),
	            colX = layout._viewportX + offset, colWidth, viewportWidth = layout._viewportWidth - offset;
	        for (; viewportWidth > 0 && col < colCount; col++) {
	            colWidth = cachePool._getZoomColWidth(col);
	            colLayouts.push(new _Layout(-1, col, colX, -1, colWidth, -1));
	            colX += colWidth;
	            viewportWidth -= colWidth;
	        }
	        return colLayouts;
	    }
	    function _createTouchViewportRowLayout(sheet, offset) {
	        var rowLayouts = new _LayoutModel();
	        var cachePool = sheet._cachePool, layout = sheet._getSheetLayout(),
	            row = Math_max(sheet.frozenRowCount(), sheet._scrollTopRow),
	            rowCount = getRowCount(sheet) - getFrozenTrailingRowCount(sheet),
	            rowY = layout._viewportY + offset, rowHeight, viewportHeight = layout._viewportHeight - offset;
	        for (; viewportHeight > 0 && row < rowCount; row++) {
	            rowHeight = cachePool._getZoomRowHeight(row);
	            rowLayouts.push(new _Layout(row, -1, -1, rowY, -1, rowHeight));
	            rowY += rowHeight;
	            viewportHeight -= rowHeight;
	        }
	        return rowLayouts;
	    }
	    function _getScrollDirection(deltaTranslationX, deltaTranslationY) {
	        var dir = 0;
	        dir |= deltaTranslationX !== 0 ? 1  : 0;
	        dir |= deltaTranslationY !== 0 ? 2  : 0;
	        return dir;
	    }
	    $_extend(TouchScrollManager.prototype, {
	        _updateTouchViewportColumnLayout: function (offset) {
	            var sheet = this._sheet, colLayoutCache = sheet._colLayoutCache;
	            if (!colLayoutCache.viewport) {
	                colLayoutCache.viewport = {};
	            }
	            colLayoutCache.viewport[1] = _createTouchViewportColumnLayout(sheet, offset);
	
	            sheet._touchScrollOffsetLeft = offset;
	        },
	        _updateTouchViewportRowLayout: function (offset) {
	            var sheet = this._sheet, rowLayoutCache = sheet._rowLayoutCache;
	            if (!rowLayoutCache.viewport) {
	                rowLayoutCache.viewport = {};
	            }
	            rowLayoutCache.viewport[1] = _createTouchViewportRowLayout(sheet, offset);
	
	            sheet._touchScrollOffsetTop = offset;
	        },
	        _invalidateLayout: function () {
	            var sheet = this._sheet, oldViewportColumnLayout = sheet._colLayoutCache.viewport, oldViewportRowLayout = sheet._rowLayoutCache.viewport;
	            sheet.invalidateLayout();
	            sheet._colLayoutCache.viewport = oldViewportColumnLayout;
	            sheet._rowLayoutCache.viewport = oldViewportRowLayout;
	        },
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	        _vScrollTo: function (translationY, isInertia, bufferRect, clipRect) {
	            var self = this, sheet = self._sheet, options = sheet.options, oldTopRow = sheet._scrollTopRow, topRowInfo = _getNewTopRowInfo(sheet, translationY, oldTopRow),
	                newTopRow = topRowInfo._row, offset = topRowInfo._offset;
	            sheet._scrollTopRow = newTopRow;
	            if (sheet._layoutSuspended > 0) {
	                return false;
	            }
	
	            var bounds = sheet._getBounds(), layout = sheet._getSheetLayout(), viewportY = layout._viewportY,
	                viewportHeight = layout._viewportHeight, x = (bounds ? bounds.x : layout.x), width = getWidth(layout),
	                adj, y, height;
	            var sheetAreaOffset = options.sheetAreaOffset;
	            width = width + sheetAreaOffset.left;
	           
	            if (translationY < 0) {
	                self._cachedOffsetY = 0;
	                self._cachedAvailableOffsetY = 0;
	                var rl1, rl2;
	                var rowLayouts = sheet._getViewportRowLayout(1);
	                if (rowLayouts && rowLayouts.length > 0) {
	                    rl1 = rowLayouts.findRow(newTopRow);
	                }
	                if (rl1) {
	                    rl2 = rowLayouts[rowLayouts.length - 1];
	                    if (rl2.row >= newTopRow) {
	                        adj = 2 + sheetAreaOffset.top;
	                        y = viewportY + Math_abs(translationY);
	                        height = Math_min(viewportY + viewportHeight, rl2.y + getHeight(rl2)) - y;
	                       
	                        if (height >= 0) {
	                            height -= adj;
	                           
	                           
	                           
	                            self._updateTouchViewportRowLayout(offset - getHeight(rl1));
	                           
	                           
	                            bufferRect.x = x;
	                            bufferRect.y = y;
	                            bufferRect.width = width;
	                            bufferRect.height = height;
	                            bufferRect.tx = x;
	                            bufferRect.ty = viewportY;
	                            clipRect.x = x;
	                            clipRect.y = viewportY + height;
	                            clipRect.width = width;
	                            clipRect.height = viewportHeight - height;
	
	                        }
	                    }
	                }
	            } else if (translationY > 0) {
	                var minRow = sheet._getScrollableRow(-1), offsetY, availableOffsetY;
	                if (newTopRow === minRow && offset > 0) {
	                    if (self._cachedOffsetY > 0 && self._cachedAvailableOffsetY > 0) {
	                        offsetY = self._cachedOffsetY + translationY;
	                        availableOffsetY = _getBoundaryFactor(offsetY, BOUNDARY_SCOPE);
	                        translationY = availableOffsetY - self._cachedAvailableOffsetY;
	                        offset = availableOffsetY;
	                        if (translationY <= 0) {
	                            return isInertia;
	                        }
	                        if (isInertia && availableOffsetY >= INERTIA_BOUNDARY_SCOPE) {
	                            return true;
	                        }
	                        self._cachedOffsetY = offsetY;
	                        self._cachedAvailableOffsetY = availableOffsetY;
	                    } else {
	                        if (offset >= BOUNDARY_SCOPE) {
	                            translationY -= offset - (BOUNDARY_SCOPE - 1);
	                            offset = BOUNDARY_SCOPE - 1;
	                            if (translationY <= 0) {
	                                return isInertia;
	                            }
	                        }
	                        offsetY = _getDistance(offset, BOUNDARY_SCOPE);
	                        availableOffsetY = offset;
	                        if (isInertia && availableOffsetY >= INERTIA_BOUNDARY_SCOPE) {
	                            return true;
	                        }
	                        self._cachedOffsetY = offsetY;
	                        self._cachedAvailableOffsetY = availableOffsetY;
	                    }
	                } else {
	                    self._cachedOffsetY = 0;
	                    self._cachedAvailableOffsetY = 0;
	                }
	                if (translationY < viewportHeight) {
	                    adj = 2 + sheetAreaOffset.top;
	                    y = viewportY;
	                    height = viewportHeight - translationY;
	                    if (getFrozenTrailingRowCount(sheet) > 0) {
	                        height -= 1;
	                    }
	                   
	                   
	                   
	                   
	                    self._updateTouchViewportRowLayout(offset);
	                   
	                   
	                    bufferRect.x = x;
	                    bufferRect.y = y;
	                    bufferRect.width = width;
	                    bufferRect.height = height;
	                    bufferRect.tx = x;
	                    bufferRect.ty = y + translationY;
	                    clipRect.x = x;
	                    clipRect.y = y;
	                    clipRect.width = width;
	                    clipRect.height = translationY + adj;
	                }
	            }
	
	            return false;
	        },
	        _hScrollTo: function (translationX, isInertia, bufferRect, clipRect) {
	            var self = this, sheet = self._sheet, oldLeftCol = sheet._scrollLeftCol, leftColumnInfo = _getNewLeftColumnInfo(sheet, translationX, oldLeftCol),
	                newLeftCol = leftColumnInfo._col, offset = leftColumnInfo._offset;
	            sheet._scrollLeftCol = newLeftCol;
	            if (sheet._layoutSuspended > 0) {
	                return false;
	            }
	
	            var bounds = sheet._getBounds(), layout = sheet._getSheetLayout(), viewportX = layout._viewportX,
	                viewportWidth = layout._viewportWidth, y = (bounds ? bounds.y : layout.y), height = getHeight(layout),
	                adj, x, width, offsetX, availableOffsetX;
	            var sheetAreaOffset = sheet.options.sheetAreaOffset;
	            height = height + sheetAreaOffset.top;
	           
	            if (translationX < 0) {
	                self._cachedOffsetX = 0;
	                self._cachedAvailableOffsetX = 0;
	                var cl1, cl2;
	                var colLayouts = sheet._getViewportColumnLayout(1);
	                if (colLayouts && colLayouts.length > 0) {
	                    cl1 = colLayouts.findCol(newLeftCol);
	                }
	                if (cl1) {
	                    cl2 = colLayouts[colLayouts.length - 1];
	                    if (cl2.col >= newLeftCol) {
	                        adj = 2 + sheetAreaOffset.left;
	                        x = viewportX + Math_abs(translationX);
	                        width = Math_min(viewportX + viewportWidth, cl2.x + getWidth(cl2)) - x;
	                       
	                        if (width >= 0) {
	                            width -= adj;
	                           
	                           
	                           
	                            self._updateTouchViewportColumnLayout(offset - getWidth(cl1));
	                           
	                           
	                            bufferRect.x = x;
	                            bufferRect.y = y;
	                            bufferRect.width = width;
	                            bufferRect.height = height;
	                            bufferRect.tx = viewportX;
	                            bufferRect.ty = y;
	                            clipRect.x = viewportX + width;
	                            clipRect.y = y;
	                            clipRect.width = viewportWidth - width;
	                            clipRect.height = height;
	                        }
	                    }
	                }
	            } else if (translationX > 0) {
	                var minColumn = sheet._getScrollableColumn(-1);
	                if (newLeftCol === minColumn && offset > 0) {
	                    if (self._cachedOffsetX > 0 && self._cachedAvailableOffsetX > 0) {
	                        offsetX = self._cachedOffsetX + translationX;
	                        availableOffsetX = _getBoundaryFactor(offsetX, BOUNDARY_SCOPE);
	                        translationX = availableOffsetX - self._cachedAvailableOffsetX;
	                        offset = availableOffsetX;
	                        if (translationX <= 0) {
	                            return isInertia;
	                        }
	                        if (isInertia && availableOffsetX >= INERTIA_BOUNDARY_SCOPE) {
	                            return true;
	                        }
	                        self._cachedOffsetX = offsetX;
	                        self._cachedAvailableOffsetX = availableOffsetX;
	                    } else {
	                        if (offset >= BOUNDARY_SCOPE) {
	                            translationX -= offset - (BOUNDARY_SCOPE - 1);
	                            offset = BOUNDARY_SCOPE - 1;
	                            if (translationX <= 0) {
	                                return isInertia;
	                            }
	                        }
	                        offsetX = _getDistance(offset, BOUNDARY_SCOPE);
	                        availableOffsetX = offset;
	                        if (isInertia && availableOffsetX >= INERTIA_BOUNDARY_SCOPE) {
	                            return true;
	                        }
	                        self._cachedOffsetX = offsetX;
	                        self._cachedAvailableOffsetX = availableOffsetX;
	                    }
	                } else {
	                    self._cachedOffsetX = 0;
	                    self._cachedAvailableOffsetX = 0;
	                }
	                if (translationX < viewportWidth) {
	                    adj = 2 + sheetAreaOffset.left;
	                    x = viewportX;
	                    width = viewportWidth - translationX;
	                    if (getFrozenTrailingColumnCount(sheet) > 0) {
	                        width -= 1;
	                    }
	                   
	                   
	                   
	                   
	                    self._updateTouchViewportColumnLayout(offset);
	                   
	                   
	                    bufferRect.x = x;
	                    bufferRect.y = y;
	                    bufferRect.width = width;
	                    bufferRect.height = height;
	                    bufferRect.tx = x + translationX;
	                    bufferRect.ty = y;
	                    clipRect.x = x;
	                    clipRect.y = y;
	                    clipRect.width = translationX + adj;
	                    clipRect.height = height;
	                }
	            }
	
	            return false;
	        },
	        _continueScrollCore: function (deltaTranslationX, deltaTranslationY, dir, isInertia) {
	            var self = this, sheet = self._sheet, isVerticalCompleted = true, isHorizontalCompleted = true, render = sheet._render, ctx = render._getCtx();
	            var bufferRect, clipRect, bufferRect2, clipRect2, paintV = (dir & 2 ) !== 0, paintH = (dir & 1 ) !== 0;
	            if (!paintH && !paintV) {
	                return;
	            }
	            var bounds = sheet._getBounds(), layout = sheet._getSheetLayout(), y = (bounds ? bounds.y : layout.y), height = getHeight(layout),
	                x = (bounds ? bounds.x : layout.x), width = getWidth(layout);
	            if (paintV) {
	                clipRect = {};
	                bufferRect = {};
	                isVerticalCompleted = self._vScrollTo(deltaTranslationY, isInertia, bufferRect, clipRect);
	                render._copyScreen(bufferRect.x, bufferRect.y, getWidth(bufferRect), getHeight(bufferRect), bufferRect.tx, bufferRect.ty);
	            }
	            if (paintH) {
	                bufferRect2 = {};
	                clipRect2 = {};
	                isHorizontalCompleted = self._hScrollTo(deltaTranslationX, isInertia, bufferRect2, clipRect2);
	                render._copyScreen(bufferRect2.x, bufferRect2.y, getWidth(bufferRect2), getHeight(bufferRect2), bufferRect2.tx, bufferRect2.ty);
	                if (!paintV) {
	                    clipRect = clipRect2;
	                }
	            }
	            var sp = sheet.parent;
	            if (sp && !sp.options.scrollbarShowMax) {
	                if (paintH) {
	                    sheet._needSyncHScrollbarSize = true;
	                }
	                if (paintV) {
	                    sheet._needSyncVScrollbarSize = true;
	                }
	            }
	            self._invalidateLayout();
	           
	            var extensionForRowOutlines = sheet.rowOutlines && !sheet.rowOutlines._isEmpty() ? 1 : 0;
	            var extensionForColumnOutlines = sheet.columnOutlines && !sheet.columnOutlines._isEmpty() ? 1 : 0;
	            if (paintH && paintV) {
	                render._paintBody(ctx, new Rect(clipRect.x, clipRect.y, getWidth(clipRect), getHeight(clipRect) + extensionForRowOutlines), new Rect(clipRect2.x, clipRect2.y, getWidth(clipRect2) + extensionForColumnOutlines, getHeight(clipRect2)));
	            } else {
	                render._paintBody(ctx, new Rect(clipRect.x, clipRect.y, getWidth(clipRect) + extensionForColumnOutlines, getHeight(clipRect) + extensionForRowOutlines));
	            }
	           
	           
	            var adornmentRect = new Rect(x, y, width, height);
	
	            var selectRange = sheet.getSelections();
	            if(selectRange && selectRange.length > 0) {
	                var selectionRect = sheet.getRangeRect(1, 1, selectRange[0]);
	                var endX = Math_max(adornmentRect.x + adornmentRect.width, selectionRect.x + selectionRect.width);
	                var endY = Math_max(adornmentRect.y + adornmentRect.height, selectionRect.y + selectionRect.height);
	                adornmentRect.x = Math_min(adornmentRect.x, selectionRect.x);
	                adornmentRect.y = Math_min(adornmentRect.y, selectionRect.y);
	                adornmentRect.width = endX - adornmentRect.x + 1;
	                adornmentRect.height = endY - adornmentRect.y + 1;
	            }
	
	            render._paintAdornment(ctx, adornmentRect);
	            _makeUpGridline(sheet, true);
	            _fillGrayArea(sheet, true);
	            self._onSheetScroll(paintH, paintV);
	            _drawOutlineBorder(sheet, true);
	            var sheetAreaOffset = sheet.options.sheetAreaOffset;
	            if(!sheet.options.rowHeaderVisible) {
	                render._paintSheetOffset(ctx, new Rect(x, y, 2, height + sheetAreaOffset.top));
	            }
	            if(!sheet.options.colHeaderVisible) {
	                render._paintSheetOffset(ctx, new Rect(x, y, width + sheetAreaOffset.left, 2));
	            }
	
	            return isVerticalCompleted && isHorizontalCompleted;
	        },
	        _onSheetScroll: function (hScroll, vScroll) {
	            var sheet = this._sheet;
	            if (vScroll) {
	                sheet._syncVScrollbarPosition();
	            }
	            if (hScroll) {
	                sheet._syncHScrollbarPosition();
	            }
	           
	            sheet._eventHandler._updateEditingEditor();
	            var commentManager = sheet._modelManager._comments;
	            if (commentManager) {
	                commentManager._updateCommentsLayoutWhenSheetScroll();
	            }
	        },
	        _endScrollWithAnimation: function (translationX, translationY, isInertia) {
	            function _getCurrentPositionByTime(time, isPositive, timeUnit, positionUnit) {
	                time /= timeUnit;
	                return Math_pow(0.75, time) * positionUnit * (isPositive ? 1 : -1);
	            }
	
	            function _getCurrentTimeByPosition(position, timeUnit, positionUnit) {
	                position = Math_abs(position);
	                position /= positionUnit;
	                return Math_log(position) / Math_log(0.75) * timeUnit;
	            }
	
	            var self = this, sheet = self._sheet, POSITION_UNIT = BOUNDARY_SCOPE, TIME_UNIT = 10, TIME_INTERVAL = 20, TOTAL_TIME = 100,
	                currentTimeX = _getCurrentTimeByPosition(translationX, TIME_UNIT, POSITION_UNIT),
	                currentTimeY = _getCurrentTimeByPosition(translationY, TIME_UNIT, POSITION_UNIT),
	                lastPositionX = translationX, lastPositionY = translationY, cumulativeTranslationX = 0,
	                cumulativeTranslationY = 0, isTranslationXFinished = false, isTranslationYFinished = false;
	            self._interval = setInterval(function () {
	                if (isTranslationXFinished && isTranslationYFinished) {
	                    sheet._cachePool._endCache();
	                    var sp = sheet.parent;
	                    if (sp && !sp.options.scrollbarShowMax) {
	                        sheet._needSyncHScrollbarSize = true;
	                        sheet._needSyncVScrollbarSize = true;
	                    }
	                    sheet._cachePool._clearCacheEndPan();
	                    sheet._touchScrollOffsetTop = 0;
	                    sheet._touchScrollOffsetLeft = 0;
	                    sheet._invalidate();
	                    sheet._syncHScrollbarPosition();
	                    sheet._syncVScrollbarPosition();
	                    clearSetInterval(self._interval);
	                    self._interval = keyword_null;
	                    return;
	                }
	                currentTimeX += TIME_INTERVAL;
	                currentTimeY += TIME_INTERVAL;
	                if (currentTimeX > TOTAL_TIME && currentTimeY > TOTAL_TIME) {
	                    self._continueScrollCore(translationX - cumulativeTranslationX, translationY - cumulativeTranslationY,
	                        _buildScrollDirection(isTranslationXFinished, isTranslationYFinished), isInertia);
	                    isTranslationXFinished = true;
	                    isTranslationYFinished = true;
	                } else {
	                    if (currentTimeX > TOTAL_TIME && !isTranslationXFinished) {
	                        self._continueScrollCore(translationX - cumulativeTranslationX, 0, 1 , isInertia);
	                        isTranslationXFinished = true;
	                    }
	                    if (currentTimeY > TOTAL_TIME && !isTranslationYFinished) {
	                        self._continueScrollCore(0, translationY - cumulativeTranslationY, 2 , isInertia);
	                        isTranslationYFinished = true;
	                    }
	                    var currentPositionX = _getCurrentPositionByTime(currentTimeX, translationX > 0, TIME_UNIT, POSITION_UNIT),
	                        currentPositionY = _getCurrentPositionByTime(currentTimeY, translationY > 0, TIME_UNIT, POSITION_UNIT),
	                        deltaTranslationX = Math_floor(lastPositionX - currentPositionX), deltaTranslationY = Math_floor(lastPositionY - currentPositionY);
	                    self._continueScrollCore(deltaTranslationX, deltaTranslationY,
	                        _buildScrollDirection(isTranslationXFinished, isTranslationYFinished), isInertia);
	                    lastPositionX = currentPositionX;
	                    lastPositionY = currentPositionY;
	                    cumulativeTranslationX += deltaTranslationX;
	                    cumulativeTranslationY += deltaTranslationY;
	                }
	            }, TIME_INTERVAL);
	        },
	
	        _startScroll: function (isPan) {
	            var self = this, sheet = self._sheet, cachePool = sheet._cachePool;
	            if (self._interval) {
	                cachePool._clearCacheEndPan();
	                clearSetInterval(self._interval);
	                self._interval = keyword_null;
	            }
	            self._cachedOffsetX = 0;
	            self._cachedAvailableOffsetX = 0;
	            self._cachedOffsetY = 0;
	            self._cachedAvailableOffsetY = 0;
	            self._oldScrollTopRow = sheet._scrollTopRow;
	            self._oldScrollLeftCol = sheet._scrollLeftCol;
	            if (isPan) {
	                cachePool._startCacheBeforPan();
	            }
	        },
	        _continueScroll: function (deltaTranslation, isInertia) {
	            var deltaTranslationX = convertToInt(deltaTranslation.X), deltaTranslationY = convertToInt(deltaTranslation.Y);
	            var dir = _getScrollDirection(deltaTranslationX, deltaTranslationY);
	            return this._continueScrollCore(deltaTranslationX, deltaTranslationY, dir, isInertia);
	        },
	        _endScroll: function (isInertia) {
	            var self = this, sheet = self._sheet;
	            var sheetLayout = sheet._getSheetLayout(), viewportX = sheetLayout._viewportX, viewportY = sheetLayout._viewportY;
	
	            var newTopRow = sheet._scrollTopRow;
	            var newLeftCol = sheet._scrollLeftCol;
	
	            var colLayouts = sheet._getViewportColumnLayout(1), cl, maxColumn = sheet._getLastVisualScrollColumn();
	            if (colLayouts && colLayouts.length > 0) {
	                cl = colLayouts.findCol(newLeftCol);
	                if (newLeftCol < maxColumn && cl && cl.x + getWidth(cl) - viewportX < getWidth(cl) / 2) {
	                    newLeftCol++;
	                }
	            }
	            var rowLayouts = sheet._getViewportRowLayout(1), rl, maxRow = sheet._getLastVisualScrollRow();
	            if (rowLayouts && rowLayouts.length > 0) {
	                rl = rowLayouts.findRow(newTopRow);
	                if (newTopRow < maxRow && rl && rl.y + getHeight(rl) - viewportY < getHeight(rl) / 2) {
	                    newTopRow++;
	                }
	            }
	            var translationX = 0, translationY = 0;
	            if (colLayouts && colLayouts.length > 0) {
	                cl = colLayouts.findCol(newLeftCol);
	                translationX = viewportX - cl.x;
	            }
	            if (rowLayouts && rowLayouts.length > 0) {
	                rl = rowLayouts.findRow(newTopRow);
	                translationY = viewportY - rl.y;
	            }
	            var oldTopRow = self._oldScrollTopRow;
	            if (newTopRow !== oldTopRow) {
	                sheet._setTopRow(newTopRow);
	            }
	            var oldLeftCol = self._oldScrollLeftCol;
	            if (newLeftCol !== oldLeftCol) {
	                sheet._setLeftColumn(newLeftCol);
	            }
	            self._endScrollWithAnimation(translationX, translationY, isInertia);
	        }
	    });
	
	    function _getTouchResizeInfo(sheet, target, x, y, resizeArea) {
	        var parent = sheet.parent, eventHandler = sheet._eventHandler, sheet_options = sheet.options;
	        var rowViewportIndex = target.rowViewportIndex, colViewportIndex = target.colViewportIndex;
	        var selections = getSelections(sheet);
	        var op = keyword_null;
	        if (sheet._isTouchMode && selections.length > 0) {
	            var selection = selections[selections.length - 1];
	            var row = selection.row, lastRow = selection.row + selection.rowCount - 1, col = selection.col, lastCol = selection.col + selection.colCount - 1;
	            if (!parent || parent.options.allowUserResize) {
	                if (row !== -1 && col === -1 && rowViewportIndex >= 0 && colViewportIndex < 0 && sheet_options.rowHeaderVisible) {
	                    op = eventHandler._getResizeRowInfo(sheet, target, resizeArea, 2 , y);
	                    if (op && (op.action === 'sizeRow' || op.action === 'sizeHiddenRow') && op.sheetArea === 2  && op.index !== lastRow) {
	                        op = keyword_null;
	                    }
	                } else if (row === -1 && col !== -1 && rowViewportIndex < 0 && colViewportIndex >= 0 && sheet_options.colHeaderVisible) {
	                    op = eventHandler._getResizeColInfo(sheet, target, resizeArea, 1 , x);
	                    if (op && (op.action === 'sizeCol' || op.action === 'sizeHiddenCol') && op.sheetArea === 1  && op.index !== lastCol) {
	                        op = keyword_null;
	                    }
	                }
	            }
	        }
	        return op;
	    }
	    function _getSelectionHitInfo(sheet, target, x, y) {
	        if (sheet.selectionPolicy() === 0) {
	            return keyword_null;
	        }
	        var hitTestType = target.hitTestType;
	        var selectionIndicatorRects = getSelectionIndicatorRects(sheet);
	        var selections = getSelections(sheet);
	        var type = 3 ;
	        if (sheet._isTouchMode && selections.length > 0) {
	            var selection = selections[selections.length - 1];
	            if (selection.row !== -1 && selection.col !== -1) {
	                type = 3 ;
	            } else if (selection.row !== -1) {
	                type = 2 ;
	            } else if (selection.col !== -1) {
	                type = 1 ;
	            }
	        }
	        for (var i = 0; i < selectionIndicatorRects.length; i++) {
	            var rect = selectionIndicatorRects[i];
	            if (rect) {
	                rect.x -= getWidth(rect);
	                rect.y -= getHeight(rect);
	                rect.width *= 3;
	                rect.height *= 3;
	                if (rect.contains(x, y)) {
	                    if (isNullOrUndefined(target.row)) {
	                        var rowLayout = sheet._getViewportRowLayout(1);
	                        if (rowLayout && rowLayout.length > 0) {
	                            target.row = rowLayout[rowLayout.length - 1].row;
	                        }
	                    }
	                    if (isNullOrUndefined(target.col)) {
	                        var columnLayout = sheet._getViewportColumnLayout(1);
	                        if (columnLayout && columnLayout.length > 0) {
	                            target.col = columnLayout[columnLayout.length - 1].col;
	                        }
	                    }
	                    return {x: x, y: y, type: type, isHeader: false, isFirstIndicator: i === 0};
	                }
	            }
	        }
	        if (hitTestType === 1 ) {
	            return {x: x, y: y, type: 1 , isHeader: true};
	        } else if (hitTestType === 2 ) {
	            return {x: x, y: y, type: 2 , isHeader: true};
	        }
	        return keyword_null;
	    }
	    function _getDragFillInfo(sheet, target, x, y) {
	        var op = keyword_null;
	        var rowViewportIndex = target.rowViewportIndex, colViewportIndex = target.colViewportIndex;
	        if (isNullOrUndefined(rowViewportIndex) || isNullOrUndefined(colViewportIndex)) {
	            return op;
	        }
	        var parent = sheet.parent;
	        var activeSelRange = sheet._getActiveSelectedRange();
	        if (rowViewportIndex >= 0 && colViewportIndex >= 0 && sheet._modelManager.getSelections().length === 1) {
	           
	            var actualRange = sheet._getActualRange(activeSelRange);
	            var frozenTrailingColCount = getFrozenTrailingColumnCount(sheet), frozenTrailingRowCount = getFrozenTrailingRowCount(sheet);
	            var endCol = getColumnCount(sheet) - frozenTrailingColCount, endRow = getRowCount(sheet) - frozenTrailingRowCount;
	            if (colViewportIndex === 1 && frozenTrailingColCount > 0 && actualRange.col < endCol && actualRange.col + actualRange.colCount > endCol) {
	                var colLayoutModel = sheet._getColumnLayout(colViewportIndex);
	                if (colLayoutModel && colLayoutModel.length > 0) {
	                    var colLayout = colLayoutModel[colLayoutModel.length - 1];
	                    if (x > colLayout.x + getWidth(colLayout)) {
	                        return op;
	                    }
	                }
	            }
	            if (rowViewportIndex === 1 && frozenTrailingRowCount > 0 && actualRange.row < endRow && actualRange.row + actualRange.rowCount > endRow) {
	                var rowLayoutModel = sheet._getRowLayout(rowViewportIndex);
	                if (rowLayoutModel && rowLayoutModel.length > 0) {
	                    var rowLayout = rowLayoutModel[rowLayoutModel.length - 1];
	                    if (y > rowLayout.y + getHeight(rowLayout)) {
	                        return op;
	                    }
	                }
	            }
	        }
	        var rect = getTouchDragFillIndicatorRect(sheet);
	        if (rect) {
	            if (!op) {
	                rect.x -= getWidth(rect);
	                rect.y -= getHeight(rect);
	                rect.width *= 3;
	                rect.height *= 3;
	                if (rect.contains(x, y)) {
	                    op = {action: 'drag', side: 'corner'};
	                }
	            }
	            if (!parent || !parent.options.allowUserDragFill) { 
	                if (op && op.side === 'corner') {
	                    op.side = keyword_null;
	                }
	            }
	        }
	        return op;
	    }
	    function _isTouchSelected(sheet, r, c, sheetArea) {
	        var selected = false;
	        var selections = sheet._modelManager.getSelections();
	        for (var i = 0, count = selections.length; i < count; i++) {
	            var sel = selections[i], isViewport = sheetArea === 3  || isNullOrUndefined(sheetArea);
	            if (isViewport) {
	                sel = sheet._getActualRange(sel);
	            }
	            var row = sel.row, col = sel.col, rowCount = sel.rowCount, colCount = sel.colCount;
	            if (isViewport) {
	                selected = (row <= r && r < row + rowCount && col <= c && c < col + colCount);
	            } else if (sheetArea === 2 ) {
	                selected = (col === -1 && row <= r && r < row + rowCount);
	            } else if (sheetArea === 1 ) {
	                selected = (row === -1 && col <= c && c < col + colCount);
	            } else if (sheetArea === 0 ) {
	                return selected;
	            }
	            if (selected) {
	                break;
	            }
	        }
	        return selected;
	    }
	    function _changeActiveCellBeforeSelect(sheet, isHeader, isFirstIndicator, selectionType) {
	        if (isHeader) {
	            return;
	        }
	        var selections = getSelections(sheet), selection = selections[selections.length - 1];
	        if (isFirstIndicator) {
	            if (selectionType === 3 ) {
	                sheet._activeRowIndex = selection.row + selection.rowCount - 1;
	                sheet._activeColIndex = selection.col + selection.colCount - 1;
	            } else if (selectionType === 2 ) {
	                sheet._activeRowIndex = selection.row + selection.rowCount - 1;
	                sheet._activeColIndex = 0;
	            } else if (selectionType === 1 ) {
	                sheet._activeRowIndex = 0;
	                sheet._activeColIndex = selection.col + selection.colCount - 1;
	            }
	        } else if (selectionType === 3 ) {
	            sheet._activeRowIndex = selection.row;
	            sheet._activeColIndex = selection.col;
	        } else if (selectionType === 2 ) {
	            sheet._activeRowIndex = selection.row;
	            sheet._activeColIndex = 0;
	        } else if (selectionType === 1 ) {
	            sheet._activeRowIndex = 0;
	            sheet._activeColIndex = selection.col;
	        }
	    }
	    function _changeActiveCellAfterSelect(sheet, isHeader, isFirstIndicator, selectionType) {
	        var selections = getSelections(sheet), selection = selections[selections.length - 1];
	        if (isHeader || isFirstIndicator) {
	            if (selectionType === 3 ) {
	                sheet._activeRowIndex = selection.row;
	                sheet._activeColIndex = selection.col;
	            } else if (selectionType === 2 ) {
	                sheet._activeRowIndex = selection.row;
	                sheet._activeColIndex = 0;
	            } else if (selectionType === 1 ) {
	                sheet._activeRowIndex = 0;
	                sheet._activeColIndex = selection.col;
	            }
	        }
	    }
	    function TouchEventHandler(sheet) {
	        var self = this;
	        self._isScroll = false;
	        self._touchZoomManager = new TouchZoomManager(sheet);
	        self._touchScrollManager = new TouchScrollManager(sheet);
	        self._sheet = sheet;
	    }
	    Sheets._defineFeature(TouchEventHandler);
	    $_extend(TouchEventHandler.prototype, {
	        _doManipulationStarting: function (e) {
	            var self = this;
	            var sheet = self._sheet, sheetLayout = sheet._getSheetLayout(),
	                viewportX = sheetLayout._viewportX, viewportY = sheetLayout._viewportY,
	                frozenTrailingX = sheetLayout._frozenTrailingX, frozenTrailingY = sheetLayout._frozenTrailingY,
	                position = e._Position;
	            var mode = 0 ;
	            var target = self._touchHitTest(position.X, position.Y), dragInfo = target.dragInfo,
	                targetX = target.x, targetY = target.y;
	            if (target && (target.resizeInfo || (dragInfo && dragInfo.side === 'corner') || target.selectionHitInfo)) {
	                mode |= 2 ;
	                mode |= 1 ;
	            } else {
	                if (viewportY <= targetY && targetY < frozenTrailingY) {
	                    mode |= 2 ;
	                }
	                if (viewportX <= targetX && targetX < frozenTrailingX) {
	                    mode |= 1 ;
	                }
	                mode |= 64  | 32 ;
	                if (sheet.parent) {
	                    mode |= 4  | 8 ;
	                }
	            }
	            e._Mode = mode;
	        },
	        _doManipulationStarted: function (e) {
	            var self = this;
	            var argObj = { e: e, r: keyword_null };
	            TouchEventHandler._callFeatureHandler(self, 'preProcessManipulationStarted', argObj);
	            if (argObj.r) {
	                return;
	            }
	
	            var position = e._Position;
	            var sheet = self._sheet, parent = sheet.parent;
	            var eventHandler = sheet._eventHandler;
	            var render = sheet._render;
	            var target = self._touchHitTest(position.X, position.Y), dragInfo = target.dragInfo, selectionHitInfo = target.selectionHitInfo;
	            sheet._currentTarget = target;
	            if (target.resizeInfo) {
	                if (!sheet.endEdit()) {
	                    return;
	                }
	                eventHandler._startResizing(target);
	            } else if (dragInfo && dragInfo.side === 'corner') {
	                eventHandler._startDragFill && eventHandler._startDragFill(target);
	            } else if (selectionHitInfo) {
	                if (!sheet.endEdit()) {
	                    return;
	                }
	                var isHeader = selectionHitInfo.isHeader, isFirstIndicator = selectionHitInfo.isFirstIndicator, selectionType = selectionHitInfo.type;
	                if (isHeader) {
	                    eventHandler._startSelectingCore(target, true);
	                }
	                var hitTestType = target.hitTestType;
	                target.hitTestType = selectionType;
	                eventHandler._startSelectingScroll(target);
	                target.hitTestType = hitTestType;
	                _changeActiveCellBeforeSelect(sheet, isHeader, isFirstIndicator, selectionType);
	                sheet._showTouchSelectionIndicator = false;
	                render._refreshTouchSelectionIndicator();
	            } else {
	               
	               
	               
	               
	               
	                if (sheet._commentRender) {
	                    sheet._commentRender()._showWhenTouchMoveOrScroll = false;
	                }
	                sheet._showTouchSelectionIndicator = false;
	                render._refreshTouchSelectionIndicator();
	                if (e._PointerCount > 1 && parent && parent.options.allowUserZoom) {
	                    self._isScroll = false;
	                    self._touchZoomManager._startZoom();
	                } else {
	                    self._isScroll = true;
	                    self._touchScrollManager._startScroll(e._PointerCount === 1);
	                }
	            }
	        },
	        _doManipulationDelta: function (e) {
	            var self = this;
	            var argObj = { e: e, r: keyword_null };
	            TouchEventHandler._callFeatureHandler(self, 'preProcessManipulationDelta', argObj);
	            if (argObj.r) {
	                return;
	            }
	
	            var position = e._Position;
	            var sheet = self._sheet;
	            var eventHandler = sheet._eventHandler;
	            var currentTarget = sheet._currentTarget;
	            var positionX = position.X, positionY = position.Y;
	            if (currentTarget) {
	                var dragInfo = currentTarget.dragInfo;
	                var selectionHitInfo = currentTarget.selectionHitInfo;
	                if (currentTarget.resizeInfo) {
	                    eventHandler._mousePosition = {e: e, x: positionX, y: positionY};
	                    eventHandler._continueResizing();
	                } else if (dragInfo && dragInfo.side === 'corner') {
	                    eventHandler._mousePosition = {e: e, x: positionX, y: positionY};
	                    eventHandler._continueDragFill && eventHandler._continueDragFill();
	                } else if (selectionHitInfo || eventHandler._isSelecting) {
	                    if (selectionHitInfo) {
	                        if (!eventHandler._startHitInfo || !eventHandler._isWorking) {
	                            return;
	                        }
	                        if (eventHandler._forceCancelSelectiong === true) {
	                            return;
	                        }
	                        var selectionType = selectionHitInfo.type;
	                        eventHandler._mousePosition = {e: e, x: positionX, y: positionY};
	                        if (selectionType === 3 ) {
	                            eventHandler._continueCellSelecting();
	                        } else if (selectionType === 2 ) {
	                            eventHandler._continueRowSelecting();
	                        } else if (selectionType === 1 ) {
	                            eventHandler._continueColumnSelecting();
	                        }
	                    }
	                } else if (!self._isScroll) {
	                   
	                    var scale = e._Cumulative._Scale;
	                    self._touchZoomManager._continueZoom(scale);
	                } else {
	                    e._IsComplete = self._touchScrollManager._continueScroll(e._Delta._Translation, e._IsInertia);
	                }
	            }
	        },
	       
	       
	        _doManipulationCompleted: function (e) {
	            var self = this;
	            var argObj = { e: e, r: keyword_null };
	            TouchEventHandler._callFeatureHandler(self, 'preProcessManipulationCompleted', argObj);
	            if (argObj.r) {
	                return;
	            }
	            
	            var sheet = self._sheet;
	            var eventHandler = sheet._eventHandler;
	            sheet._showTouchSelectionIndicator = true;
	            var currentTarget = sheet._currentTarget;
	            var selectionHitInfo = currentTarget.selectionHitInfo;
	            if (currentTarget.resizeInfo) {
	                eventHandler._stopResizing();
	            } else if (currentTarget.dragInfo && eventHandler._isDraggingFill) {
	                eventHandler._endDragFill && eventHandler._endDragFill();
	                sheet.parent.touchToolStrip._closeAutoFillIndicator();
	            } else if (selectionHitInfo || eventHandler._isSelecting) {
	                eventHandler._stopSelecting();
	                if (selectionHitInfo) {
	                    _changeActiveCellAfterSelect(sheet, selectionHitInfo.isHeader, selectionHitInfo.isFirstIndicator, selectionHitInfo.type);
	                }
	                sheet._render._repaintSelection();
	            } else {
	               
	               
	                if (sheet._commentRender) {
	                    sheet._commentRender()._showWhenTouchMoveOrScroll = true;
	                }
	                if (!self._isScroll) {
	                    var scale = e._Cumulative._Scale;
	                    self._touchZoomManager._endZoom(scale);
	                } else {
	                    self._touchScrollManager._endScroll(e._IsInertia);
	                }
	            }
	        },
	        _doTapped: function (e) {
	            var self = this;
	            var argObj = { e: e, r: keyword_null };
	            TouchEventHandler._callFeatureHandler(self, 'preProcessTapped', argObj);
	            if (argObj.r) {
	                return;
	            }
	
	            var position = e._Position;
	            var sheet = self._sheet, parent = sheet.parent;
	            var cellTypeCauseSelectionChanged = false;
	           
	           
	            sheet._noMoreSelectionChanged = keyword_undefined;
	            self._clearTouchToolStripTimeout();
	           
	            if (sheet._unSelectAllFloatingObjects) {
	                sheet._unSelectAllFloatingObjects();
	            }
	           
	            var commentManager = sheet._modelManager._comments;
	            if (commentManager) {
	                commentManager._clearActiveComment();
	            }
	            var eventHandler = sheet._eventHandler;
	            var target = self._touchHitTest(position.X, position.Y, true), filterButtonHitInfo = target.filterButtonHitInfo,
	                hitTestType = target.hitTestType;
	            var row = target.row, col = target.col;
	            var hitInfo = target.outlineHitInfo;
	            if (hitInfo) {
	                if (!sheet.isEditing()) {
	                    var what = hitInfo.what;
	                    var rowOutlines = sheet.rowOutlines, columnOutlines = sheet.columnOutlines;
	                    if (what === 'rg' || what === 'rgh') {
	                        rowOutlines && rowOutlines._doClick(sheet, hitInfo);
	                    } else if (what === 'cg' || what === 'cgh') {
	                        columnOutlines && columnOutlines._doClick(sheet, hitInfo);
	                    }
	                }
	            } else {
	                sheet._currentTarget = target;
	                if (filterButtonHitInfo) {
	                    if (!sheet.endEdit()) {
	                        return;
	                    }
	                    var rowFilter = filterButtonHitInfo.rowFilter;
	                    if (rowFilter) {
	                        rowFilter.openFilterDialog(filterButtonHitInfo);
	                    }
	                } else if (target.resizeInfo) {
	                   
	                } else if (sheet._canSelect(target.rowViewportIndex < 0 ? -1 : row, target.colViewportIndex < 0 ? -1 : col)) {
	                    if (sheet._existTouchDragFillIndicator && !eventHandler._isDraggingFill) {
	                        parent.touchToolStrip._closeAutoFillIndicator();
	                    }
	                   
	                   
	                   
	                   
	                   
	                   
	                   
	                   
	                   
	                   
	                    var oldActiveRow = sheet.getActiveRowIndex();
	                    var oldActiveCol = sheet.getActiveColumnIndex();
	                    var cellTypeHitInfo = target.cellTypeHitInfo;
	                    if (cellTypeHitInfo) {
	                        var ct = sheet.getCellType(cellTypeHitInfo.row, cellTypeHitInfo.col, hitTestType);
	                        if (!cellTypeHitInfo.sheet) {
	                            cellTypeHitInfo.sheet = sheet;
	                        }
	                        if(self._canSetSelectionChange(ct, cellTypeHitInfo)) {
	                            var sheetArea = cellTypeHitInfo.sheetArea;
	                            if ((isNullOrUndefined(sheetArea) || sheetArea === 3 ) && (row !== oldActiveRow || col !== oldActiveCol)) {
	                                sheet.suspendPaint();
	                                if (!sheet.endEdit()) {
	                                    return;
	                                }
	                                var args = {
	                                    sheet: sheet,
	                                    sheetName: sheet.name(),
	                                    row: oldActiveRow,
	                                    col: oldActiveCol,
	                                    cancel: false
	                                };
	                                sheet._trigger(Events.LeaveCell, args);
	                                if (args && args.cancel === true) {
	                                    return;
	                                }
	                            var oldSels = sheet._modelManager.getSelections();
	                            var span = sheet._modelManager.getSpan(row, col);
	                                var newSels = [createRange(span.row, span.col, span.rowCount, span.colCount)];
	                                sheet._raiseSelectionChanging(oldSels, newSels);
	                                sheet._trigger(Events.FloatingElementSelected, {type: 'worksheet'});
	                                var isFocusAware = cellTypeHitInfo.isReservedLocation && cellTypeHitInfo.isFocusAware;
	                                sheet._setActiveCellAndSelection(row, col, keyword_undefined, keyword_undefined, isFocusAware ? 0  : 1 );
	                                var enterCellArgs = {
	                                    sheet: sheet,
	                                    sheetName: sheet.name(),
	                                    row: row,
	                                    col: col
	                                };
	                                sheet._trigger(Events.EnterCell, enterCellArgs);
	                                sheet._trigger(Events.FormulatextboxEnterCell, enterCellArgs);
	                                sheet._raiseSelectionChanged(oldSels);
	                                sheet._noMoreSelectionChanged = true;  
	                                eventHandler._updateValidationUI && eventHandler._updateValidationUI(row, col);
	                                sheet.resumePaint();
	                                cellTypeCauseSelectionChanged = true;
	                            } else {
	                                sheet._render._refreshTouchSelectionIndicator();
	                            }
	                        }
	                        ct.processCellAndPaddingMouseDown(cellTypeHitInfo);
	                        ct.processMouseUp(cellTypeHitInfo);
	                    }
	                    if (cellTypeHitInfo && cellTypeHitInfo.isReservedLocation) {
	                        return true;
	                    }
	                    sheet._trigger(Events.CellClick, {
	                        sheet: sheet,
	                        sheetName: sheet.name(),
	                        sheetArea: hitTestType,
	                        row: target.row,
	                        col: target.col
	                    });
	                    try {
	                        eventHandler._hitTestResult = target;
	                        if (sheet.isEditing() && oldActiveRow === sheet.getActiveRowIndex() && oldActiveCol === sheet.getActiveColumnIndex() && !sheet.endEdit()) {
	                            return;
	                        }
	                    } finally {
	                        eventHandler._hitTestResult = keyword_null;
	                    }
	                    if (isNullOrUndefined(row) || isNullOrUndefined(col)) {
	                        return;
	                    }
	                    if (hitTestType === 3 ) {
	                        eventHandler._updateValidationUI && eventHandler._updateValidationUI(row, col);
	                    }
	                    if (_isTouchSelected(sheet, row, col, hitTestType) && !cellTypeCauseSelectionChanged) {
	                        self._touchToolStripTimeout = setTimeout(function () {
	                            var eventArgs = {
	                                x: target.x,
	                                y: target.y,
	                                handled: false
	                            };
	                            var touchToolStrip = parent.touchToolStrip;
	                            sheet._trigger(Events.TouchToolStripOpening, eventArgs);
	                            if (!eventArgs.handled) {
	                                touchToolStrip.open(target.x, target.y - const_toolbar_offset);
	                            }
	                            self._clearTouchToolStripTimeout();
	                        }, DOUBLE_TAPPED_TIME_OFFSET + 20);
	                    } else {
	                        sheet._trigger(Events.FloatingElementSelected, {type: 'worksheet'});
	                        var oldSelections = sheet._modelManager.getSelections();
	                        eventHandler._startSelectingCore(target);
	                        var newSelections = sheet._modelManager.getSelections();
	                        sheet._raiseSelectionChanging(oldSelections, newSelections);
	                        eventHandler._stopSelecting();
	                    }
	                }
	            }
	        },
	        _canSetSelectionChange: function (cellType, cellTypeHitInfo) {
	            if(!cellType || !cellType.activedOnClick || cellType.activedOnClick() || !cellTypeHitInfo.isReservedLocation) {
	                return true;
	            }
	            return false;
	        },
	        _doDoubleTapped: function (e) {
	            var self = this;
	            var sheet = self._sheet, position = e._Position;
	            self._clearTouchToolStripTimeout();
	            var i, selectedRange;
	            var currentTarget = sheet._currentTarget;
	            if (currentTarget) {
	                sheet._trigger(Events.CellDoubleClick, {
	                    sheet: sheet,
	                    sheetName: sheet.name(),
	                    sheetArea: currentTarget.hitTestType,
	                    row: currentTarget.row,
	                    col: currentTarget.col
	                });
	                var resizeInfo = currentTarget.resizeInfo;
	                if (resizeInfo) {
	                    var selections = sheet._modelManager.getSelections();
	                    if (resizeInfo.action === 'sizeRow' || resizeInfo.action === 'sizeHiddenRow') {
	                        var rowList = [];
	                        if (sheet._isRowSelected(resizeInfo.index)) {
	                            for (i = 0; i < selections.length; i++) {
	                                selectedRange = selections[i];
	                                if (selectedRange.col === -1) {
	                                    selectedRange = sheet._getActualRange(selectedRange);
	                                    for (var r = 0; r < selectedRange.rowCount; r++) {
	                                        rowList.push({row: selectedRange.row + r});
	                                    }
	                                }
	                            }
	                        } else {
	                            rowList.push({row: resizeInfo.index});
	                        }
	                        sheet._commandManager().execute({ cmd: 'autoFitRow', sheetName: sheet.name(), rows: rowList, columnHeader: resizeInfo.sheetArea === 1  });
	                    } else {
	                        var columnList = [];
	                        if (sheet._isColumnSelected(resizeInfo.index)) {
	                            for (i = 0; i < selections.length; i++) {
	                                selectedRange = selections[i];
	                                if (selectedRange.row === -1) {
	                                    selectedRange = sheet._getActualRange(selectedRange);
	                                    for (var c = 0; c < selectedRange.colCount; c++) {
	                                        columnList.push({col: selectedRange.col + c});
	                                    }
	                                }
	                            }
	                        } else {
	                            columnList.push({col: resizeInfo.index});
	                        }
	                        sheet._commandManager().execute({ cmd: 'autoFitColumn', sheetName: sheet.name(), columns: columnList, rowHeader: resizeInfo.sheetArea === 2  });
	                    }
	                    return;
	                }
	            }
	            var target = self._touchHitTest(position.X, position.Y, true);
	            if (target && target.row >= 0 && target.col >= 0 && target.rowViewportIndex >= 0 && target.colViewportIndex >= 0 && !target.resizeInfo && (!sheet.options.isProtected || !sheet._getStyleProperty(target.row, target.col, 'locked'))) {
	                sheet._clearSelectionImp();
	                var rowViewportIndex = sheet._getRowViewportIndex(target.row);
	                var colViewportIndex = sheet._getColumnViewportIndex(target.col);
	                sheet._setActiveCellImp(target.row, target.col, rowViewportIndex, colViewportIndex, true);
	                sheet.addSelection(target.row, target.col, 1, 1);
	                sheet._eventHandler._resumeFocus(false, true);
	                sheet._startEditImp(sheet._getCanvas(), target.row, target.col);
	            }
	        },
	       
	       
	        _doTouchOperatorStart: function (e) {
	            var self = this, sheet = self._sheet, position = e._Position;
	            var target = self._touchHitTest(position.X, position.Y);
	            if (!sheet.isEditing()) {
	                self._target = target;
	               
	                var targetWithoutSelection = self._touchHitTest(position.X, position.Y, true);
	                if (!targetWithoutSelection || !targetWithoutSelection.cellTypeHitInfo || !targetWithoutSelection.cellTypeHitInfo.isEditting) {
	                    sheet._eventHandler._releaseFocus(targetWithoutSelection);
	                }
	            } else if (target.row !== sheet._activeRowIndex || target.col !== sheet._activeColIndex) {
	                sheet._eventHandler._releaseFocus(target);
	            }
	        },
	        _doTouchOperatorEnd: function () {
	            var self = this, sheet = self._sheet;
	            if (!sheet.isEditing()) {
	                var target = self._target;
	                var resumeFocus = true;
	                if (target) {
	                    var cellTypeHitInfo = target.cellTypeHitInfo;
	                    if (cellTypeHitInfo && cellTypeHitInfo.isReservedLocation) {
	                        resumeFocus = false;
	                    } else {
	                        var ct = sheet.getCellType(target.row, target.col);
	                        if (ct && ct.isEditting()) {
	                            resumeFocus = false;
	                        }
	                    }
	                }
	                if (resumeFocus) {
	                    sheet._eventHandler._resumeFocus(true);
	                }
	            }
	        },
	
	        _touchHitTest: function (x, y, ignoreSelection) {
	            var self = this;
	            var sheet = self._sheet;
	            sheet._getSheetLayout();
	            var target = {
	                x: x,
	                y: y,
	                rowViewportIndex: keyword_null,
	                colViewportIndex: keyword_null,
	                row: -1,
	                col: -1,
	                resizeInfo: keyword_null,
	                hitTestType: keyword_null,
	                outlineHitInfo: keyword_null,
	                filterButtonHitInfo: keyword_null,
	                dragInfo: keyword_null,
	                cellTypeHitInfo: keyword_null,
	                selectionHitInfo: keyword_null
	            };
	            var rowOutlines = sheet.rowOutlines, columnOutlines = sheet.columnOutlines, outlineHitInfo;
	            if (rowOutlines) {
	                outlineHitInfo = rowOutlines.hitTest(sheet, x, y);
	            }
	            if (!outlineHitInfo && columnOutlines) {
	                outlineHitInfo = columnOutlines.hitTest(sheet, x, y);
	            }
	            if (outlineHitInfo) {
	                target.outlineHitInfo = outlineHitInfo;
	            } else {
	                var rowViewportIndex, colViewportIndex;
	                rowViewportIndex = sheet._getRowViewportIndexFromY(y);
	                colViewportIndex = sheet._getColumnViewportIndexFromX(x);
	                target.rowViewportIndex = rowViewportIndex;
	                target.colViewportIndex = colViewportIndex;
	                target.row = sheet._getRowIndexFromY(y, rowViewportIndex);
	                target.col = sheet._getColumnIndexFromX(x, colViewportIndex);
	                if (rowViewportIndex >= 0 && rowViewportIndex <= 2 && colViewportIndex >= 0) {
	                    var cellLayout = sheet._getCellLayoutByCell(rowViewportIndex, colViewportIndex, keyword_undefined, target.row, target.col);
	                    if (cellLayout) {
	                        target.row = cellLayout.row;
	                        target.col = cellLayout.col;
	                    }
	                }
	                target.hitTestType = sheet._getSheetArea(rowViewportIndex, colViewportIndex);
	                var resizeInfo, dragInfo, rowFilter, filterButtonHitInfo, selectionHitInfo;
	               
	               
	               
	               
	               
	               
	               
	                resizeInfo = _getTouchResizeInfo(sheet, target, x, y, 10);
	                rowFilter = sheet._rowFilter;
	                filterButtonHitInfo = rowFilter && rowFilter.hitTest(target, x, y);
	                if (!filterButtonHitInfo) {
	                    var tableManager = sheet.tables, table = tableManager && tableManager.find(target.row, target.col),
	                        tableFilter = table && table._rowFilter;
	                    filterButtonHitInfo = tableFilter && tableFilter.hitTest(target, x, y);
	                }
	                if (sheet._existTouchDragFillIndicator) {
	                    dragInfo = _getDragFillInfo(sheet, target, x, y);
	                    target.dragInfo = dragInfo;
	                } else if (resizeInfo) {
	                    target.resizeInfo = resizeInfo;
	                } else if (filterButtonHitInfo) {
	                    target.filterButtonHitInfo = filterButtonHitInfo;
	                } else if (!ignoreSelection) {
	                    selectionHitInfo = _getSelectionHitInfo(sheet, target, x, y);
	                    target.selectionHitInfo = selectionHitInfo;
	                } else {
	                    target.cellTypeHitInfo = sheet._getCellTypeHitInfo(target, x, y);
	                }
	            }
	            return target;
	        },
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	        _clearTouchToolStripTimeout: function () {
	            var self = this, touchToolStripTimeout = self._touchToolStripTimeout;
	            if (touchToolStripTimeout) {
	                clearTimeout(touchToolStripTimeout);
	                self._touchToolStripTimeout = keyword_null;
	            }
	        }
	    });
	    Touch.TouchEventHandler = TouchEventHandler;
	
	    function TouchManager(element, sheet, touchEventProvider) {
	        var self = this;
	        self._touchEventProvider = touchEventProvider;
	        self._touchMouseMessageFilter = new TouchMouseMessageFilter(sheet);
	        self._touchEventHandler = new TouchEventHandler(sheet);
	        self._touchTarget = new TouchTargetElement(element, 'sheet', self._touchMouseMessageFilter, 100, 10);
	        self._touchEventProvider._attachDettach(self._touchTarget, true);
	    }
	    $_extend(TouchManager.prototype, {
	        _attach: function () {
	            var self = this, touchEventHandler = self._touchEventHandler;
	            var touchTarget = self._touchTarget;
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
	            touchTarget._doubleTapped = function (e) {
	                return touchEventHandler._doDoubleTapped(e);
	            };
	           
	           
	           
	            touchTarget._touchOperatorStart = function (e) {
	                return touchEventHandler._doTouchOperatorStart(e);
	            };
	            touchTarget._touchOperatorEnd = function (e) {
	                return touchEventHandler._doTouchOperatorEnd(e);
	            };
	        },
	        _detach: function () {
	            var self = this, touchTarget = self._touchTarget;
	            if (touchTarget) {
	                self._touchEventProvider._attachDettach(touchTarget, false);
	                touchTarget._manipulationStarting = keyword_null;
	                touchTarget._manipulationStarted = keyword_null;
	                touchTarget._manipulationDelta = keyword_null;
	                touchTarget._manipulationInertiaStarting = keyword_null;
	                touchTarget._manipulationCompleted = keyword_null;
	
	                touchTarget._tapped = keyword_null;
	                touchTarget._doubleTapped = keyword_null;
	                touchTarget._rightTapped = keyword_null;
	
	                touchTarget._touchOperatorStart = keyword_null;
	                touchTarget._touchOperatorEnd = keyword_null;
	                self._touchTarget = keyword_null;
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
	   
	
	   
	
	   
	   
	   
	   
	   
	   
	
	    var TOOLSTRIP_BUTTON_CLASS = 'gc-toolstrip-button', TOOLSTRIP_TEXT_CLASS = 'gc-toolstrip-text', TOOLSTRIP_IMAGE_CLASS = 'gc-toolstrip-image',
	        TOOLSTRIP_ITEM_CLASS = 'gc-toolstrip-item', TOOLSTRIP_SEPARATE_LINE_CLASS = 'gc-touch-sperate-line',
	        CONST_HEIGHT = 'height', CONST_WIDTH = 'width', CONST_PX = 'px', CONST_BUTTON = 'button';
	
	    $_inherit(TouchToolStrip, BaseDialog);
	   
	    
	    function TouchToolStrip(workbook, host) {
	        var self = this;
	        BaseDialog.call(self, host, Sheets_util._getPreferredZIndex(workbook._host));
	        self._imageAreaHeight = 32;
	        self._separatorHeight = 45;
	        self._menuItems = {};
	        self._isOpen = false;
	        self._workbook = workbook;
	
	       
	        var container = self._getContainer();
	        self._toolStripDialog = container;
	        container.addClass('gc-toolstrip-default ui-state-default well');
	        container.appendTo(self._getHost());
	        container.hide();
	        self._createLayoutTable();
	        self._setDefaultCellDomString();
	        self._attachEvent();
	    }
	    $_extend(TouchToolStrip.prototype, {
	       
	        
	        open: function (x, y) {
	            var self = this;
	            var sheet = getActiveSheet(self._workbook);
	            if (sheet) {
	                _FocusHelper._setActiveElement(keyword_null, true);
	                self._toolStripDialog.css({left: x, top: y});
	                self._show();
	                self._isOpen = true;
	                self._resetDialogPosition();
	                if (!$_isEmptyObject(self._menuItems)) {
	                    var items = self._menuItems;
	                    for (var name in items) {
	                        if (items.hasOwnProperty(name)) {
	                            var item = items[name];
	                            var display = item._canExecute ? item._canExecute.call(self) : true;
	                            if (display) {
	                                $('#' + name).show();
	                            } else {
	                                $('#' + name).hide();
	                            }
	                        }
	                    }
	                }
	            }
	        },
	       
	        
	        add: function (item) {
	            if (item) {
	                var self = this;
	                var menuItems = self._menuItems;
	                if (item instanceof TouchToolStripSeparator) {
	                    var separatorName = item.name();
	                   
	                    if (separatorName) {
	                        menuItems[separatorName] = item;
	                        self._addDom(item._getDOM(TOOLSTRIP_SEPARATE_LINE_CLASS, self._separatorHeight + CONST_PX));
	                    }
	                } else if (item instanceof TouchToolStripItem) {
	                    var name = item.name();
	                    if (!self.getItem(name)) {
	                        menuItems[name] = item;
	                        self._addDom(item._getDOM(TOOLSTRIP_IMAGE_CLASS, self._imageAreaHeight + CONST_PX, TOOLSTRIP_TEXT_CLASS, TOOLSTRIP_BUTTON_CLASS));
	                    }
	                }
	            }
	        },
	       
	        
	        getItem: function (name) {
	            return this._menuItems[name];
	        },
	       
	        
	        getItems: function () {
	            var self = this;
	            var items = [], menuItems = self._menuItems;
	            if (!$_isEmptyObject(menuItems)) {
	                for (var name in menuItems) {
	                    if (menuItems.hasOwnProperty(name)) {
	                        items.push(menuItems[name]);
	                    }
	                }
	                return items;
	            }
	            return keyword_null;
	        },
	       
	        
	        remove: function (name) {
	            var self = this;
	            if (self.getItem(name)) {
	                $('#' + name).parent().remove();
	                var item = self._menuItems[name];
	                delete self._menuItems[name];
	                return item;
	            }
	            return keyword_null;
	        },
	       
	        
	        clear: function () {
	            var self = this;
	            if (self._toolStripDialog) {
	                self._toolStripDialog.find('td.' + TOOLSTRIP_ITEM_CLASS).remove();
	                self._menuItems = {};
	            }
	        },
	       
	        
	        close: function () {
	            var self = this;
	            gcGlobal._resumeEvent();
	            if (self._toolStripDialog) {
	                self._toolStripDialog.hide();
	            }
	            self._isOpen = false;
	            self._closeOverlay();
	            var sheet = getActiveSheet(self._workbook);
	            if (sheet) {
	                sheet._setFocus();
	                var sels = getSelections(sheet);
	                if (sels.length > 0 && !sheet._existTouchDragFillIndicator && sels[0].row === -1 && sels[0].col === -1) {
	                    sheet._clearSelectionImp();
	                }
	            }
	        },
	       
	        
	        imageAreaHeight: function (height) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._imageAreaHeight;
	            }
	
	            if (height > 0) {
	                self._imageAreaHeight = height;
	                self._toolStripDialog.find('span.' + TOOLSTRIP_IMAGE_CLASS).css(CONST_HEIGHT, height + CONST_PX);
	            }
	            return self;
	        },
	       
	        
	        itemHeight: function (height) {
	            var self = this, items = self._toolStripDialog.find('button.' + TOOLSTRIP_BUTTON_CLASS);
	            if (arguments.length === 0) {
	                return convertToFloat(items.css(CONST_HEIGHT));
	            }
	
	            if (height > 0) {
	                items.css(CONST_HEIGHT, height + CONST_PX);
	            }
	            return self;
	        },
	       
	        
	        itemWidth: function (width) {
	            var self = this, items = self._toolStripDialog.find('button.' + TOOLSTRIP_BUTTON_CLASS);
	            if (arguments.length === 0) {
	                return convertToFloat(items.css(CONST_WIDTH));
	            }
	            if (width > 0) {
	                var CONST_MIN_WIDTH = 'min-width';
	                var minWidth = convertToFloat(items.css(CONST_MIN_WIDTH));
	                if (minWidth > width) {
	                    items.css(CONST_MIN_WIDTH, width + CONST_PX);
	                }
	                items.css(CONST_WIDTH, width + CONST_PX);
	            }
	            return self;
	        },
	       
	        
	        separatorHeight: function (height) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._separatorHeight;
	            }
	            if (height > 0) {
	                self._separatorHeight = height;
	                self._toolStripDialog.find('div.' + TOOLSTRIP_SEPARATE_LINE_CLASS).css(CONST_HEIGHT, height + CONST_PX);
	            }
	            return self;
	        },
	        _createLayoutTable: function () {
	            var CONST_TABLE = 'table';
	            var self = this, table = $(createElement(CONST_TABLE)).css({
	                'padding': 0,
	                'display': CONST_TABLE
	            }).attr({
	                'cellspacing': 0,
	                'cellpadding': 0
	            });
	            self._tableRow = $(createElement('tr')).appendTo(table);
	            table.appendTo(self._toolStripDialog);
	        },
	        _dispose: function () {
	            var self = this, toolStripDialog = self._toolStripDialog;
	            if (toolStripDialog) {
	                if (self._isOpen) {
	                    gcGlobal._resumeEvent();
	                }
	                toolStripDialog.remove();
	                self._closeOverlay();
	                self._toolStripDialog = keyword_null;
	            }
	        },
	        _attachEvent: function () {
	            var self = this;
	            self._toolStripDialog.bind('click', function (e) {
	                var item = e.target;
	                var tagName = item.tagName.toLowerCase();
	                var name;
	                if (tagName === CONST_BUTTON) {
	                    name = item.id;
	                } else {
	                    var parent = item.parentElement;
	                    if (parent && parent.tagName.toLowerCase() === CONST_BUTTON) {
	                        name = parent.id;
	                    }
	                }
	                var menuItem = self._menuItems[name];
	                if (name && menuItem) {
	                    menuItem._command.call(self);
	                }
	            });
	        },
	        _addDom: function (element) {
	            if (this._toolStripDialog && element) {
	                $(createElement('td')).append(element).appendTo(this._tableRow).addClass(TOOLSTRIP_ITEM_CLASS);
	            }
	        },
	        _setDefaultCellDomString: function () {
	            function _getItemName(name) {
	                var num = 0;
	                var itemName = name + num;
	                while (DOCUMENT.getElementById(itemName)) {
	                    num++;
	                    itemName = name + num;
	                }
	                return itemName;
	            }
	
	            var BASE_64_PART2 = 'gAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAA';
	            var imageSrcDict = {
	                0 : BASE_64_PART1 + BASE_64_PART2 + 'A8ElEQVRIS92VwQ3CMAxFe+qZERiHY8dgDI4cYYNOhDhwY4ayQviW4q/Eddu0KRe+9CQ72P8rEpAmhPBT3ENLd76EiPv5HO5hSmK+KYTFsz+04A4G9NZ0hAizn7jTos2MFRYYugFZQlscoFzRZsYKCwwNulAqnZddtJmxwiIZ3oT6WFh4S2tQHwsLb2kN6mNh4S2tQX0sLLwly4IyY4WFZ2gReV/ZhBOQH2ddgKcYwBAc7R/weL0ZgqO6gGPXE1E0JlBdwJx2CUhvkCL63xvw33QKUc0N+B5MIaq5gb5o8kotBszJDShFlkvQ+ZHBvoTmC+fiVfoq/m86' + BASE_64_PART4,
	                1 : BASE_64_PART1 + BASE_64_PART2 + 'BkklEQVRIS7WTUXECQRBEcYCFOIiESAAH/OYPCcQBEogDJCABCUhAwqXf1QzVM0cojko+Xt3ObG/33t7eYhiGf6UU68+vneD5Mu4HpZDgKja+YCYH94NSSHAUg3glZC9k8zgAYwLmhuS6o/tBKUJ8CTGsoveIsin3g1LEAkxzAd/kXbihwxwatGys+EEpEAT5LR6FuDmMb+t+UAoEwVL44h7CvB8lGxrn3A9KkaLAj8pDMD9HL/v0ZgfAQfSAk/WgXAT3g1K4MPCj2AoPhNvRJO4HpejigF1jxtjNy9Ek7gel6GIjfzoP+Ihewf2gFPcWNNL817/c/aAUKXpbfy/FXlzFIM6gOYy3Gp+iz/xBPHeLQGLAMI2PNmYOw1uojZfdCyYNCXexiGcGpiljdp9hsBGjvnvBpCHhRbgBZChjAgj0eXrX7gWThoR992lAMGOOLMfJuIHuBZMGQuE75KN66Cpq14xH2L1g0kixyLNm3I8sNbwJulHfvWDSkJArmou4hlxXeh4AvBEBuZnnbtHfMix+AHqkr6wgQ4Q7' + BASE_64_PART4,
	                2 : BASE_64_PART1 + BASE_64_PART2 + 'A3UlEQVRIS72PwQ3CMAxFOwrjcOyZCTgyAjfWYCJO3JiCCVL/iFSO9W0MDTzpqYob+ztTKeWn0uJIadE6H8/ljXsR96q6tzt4YogH/olPcQ2R8mp3CHRBwO3+6EKkvNodcDkSgyyoAx0iRz/AA/8Op0sdtJuv1Va3Ct8FYHgL8dgUAGxIe41+kRAH6CbdaGW86nFAhnaXLSLEAbqJCbxlUgEZ2DIgFaCbmMBbJhWQgS0DUgG6iQm8ZVIBGTYFsK21oN3F1yrEARnsIM/u8JeAT9S9nrQ4UlocKS2Os0wLtkPMdu9POt0AAAAASUVORK5CYII=',
	                3 : BASE_64_PART1 + 'UAAAAXCAIAAABrvZPKAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAIdJREFUOE/tzEEKgCAQheEOWLdx351adYc8Qgs3rbuAUC9nkkF0BKNN9CMy0Xx25llf8Edr7d57j/tlP4wTHf4W/b7gsT0vLs7Sz9bFWfM9nrDXE9ITphlVPO512wkkM++FNF86vBfKeKR43rjLe5QwOvxPVPSoipHmkY5RxSMFo7rXY9+eMSdet07b6c/bnwAAAABJRU5ErkJggg=='
	            };
	
	            var self = this;
	           
	            var pasteRes = imageSrcDict[0 ];
	            var cutRes = imageSrcDict[1 ];
	            var copyRes = imageSrcDict[2 ];
	            var autoFillRes = imageSrcDict[3 ];
	            self._pasteItem = new TouchToolStripItem(_getItemName('wijspread_toolstrip_paste'), sR().ToolStrip_PasteText, pasteRes, self._doTapPaste);
	            self._cutItem = new TouchToolStripItem(_getItemName('wijspread_toolstrip_cut'), sR().ToolStrip_CutText, cutRes, self._doTapCut);
	            self._copyItem = new TouchToolStripItem(_getItemName('wijspread_toolstrip_copy'), sR().ToolStrip_CopyText, copyRes, self._doTapCopy);
	            self._autoFillItem = new TouchToolStripItem(_getItemName('wijspread_toolstrip_autofill'), sR().ToolStrip_AutoFillText, autoFillRes, self._showAutoFillIndicator, self._hideAutoFill);
	            self.add(self._pasteItem);
	            self.add(self._cutItem);
	            self.add(self._copyItem);
	            self.add(new TouchToolStripSeparator(self._hideAutoFill));
	            self.add(self._autoFillItem);
	        },
	        _hideAutoFill: function () {
	            var sheet = getActiveSheet(this._workbook);
	            if (!sheet) {
	                return false;
	            }
	            var selections = getSelections(sheet);
	            for (var i = 0; i < selections.length; i++) {
	                var sel = selections[i];
	                if (sel.row === -1 && sel.col === -1) {
	                    return false;
	                }
	            }
	            return true;
	        },
	        _showAutoFillIndicator: function () {
	            this.close();
	            var activeSheet = getActiveSheet(this._workbook);
	            if (activeSheet) {
	                var length = getSelections(activeSheet).length;
	                if (length <= 1) {
	                    activeSheet._existTouchDragFillIndicator = true;
	                    activeSheet._render._repaintSelection();
	                }
	            }
	        },
	        _closeAutoFillIndicator: function () {
	            var activeSheet = getActiveSheet(this._workbook);
	            if (activeSheet) {
	                activeSheet._existTouchDragFillIndicator = false;
	                activeSheet._render._repaintSelection();
	            }
	        },
	        _doTapCopy: function () {
	            var sheet = getActiveSheet(this._workbook);
	            if (sheet) {
	                this._clipboardTouchData = sheet._doCopy(true);
	            }
	            this.close();
	        },
	        _doTapCut: function () {
	            var sheet = getActiveSheet(this._workbook);
	            if (sheet) {
	                this._clipboardTouchData = sheet._doCut(true);
	            }
	            this.close();
	        },
	        _doTapPaste: function () {
	            var self = this, clipboardTouchData = self._clipboardTouchData;
	            var sheet = getActiveSheet(self._workbook);
	            if (sheet && !isNullOrUndefined(clipboardTouchData)) {
	                sheet._doPaste({pasteHtml: clipboardTouchData.copyHtml, pasteText: clipboardTouchData.copyText});
	            }
	            self.close();
	        },
	        _updateResource: function () {
	            var self = this, selector = 'span.' + TOOLSTRIP_TEXT_CLASS;
	            $('#' + self._pasteItem._name).find(selector).text(sR().ToolStrip_PasteText);
	            $('#' + self._cutItem._name).find(selector).text(sR().ToolStrip_CutText);
	            $('#' + self._copyItem._name).find(selector).text(sR().ToolStrip_CopyText);
	            $('#' + self._autoFillItem._name).find(selector).text(sR().ToolStrip_AutoFillText);
	        }
	    });
	    Touch.TouchToolStrip = TouchToolStrip;
	
	
	    function _getTextSpanWidth(font, text, textClassName) {
	        var textSpan = createElement('span'), body = DOCUMENT.body;
	        textSpan.className = textClassName;
	        textSpan.style.font = font;
	        textSpan.style.cssFloat = 'left';
	        textSpan.textContent = text;
	        body.insertBefore(textSpan, keyword_null);
	        var textSpanWidth = $(textSpan).width();
	        body.removeChild(textSpan);
	        return textSpanWidth;
	    }
	   
	    
	    function TouchToolStripItem(name, text, image, command, canExecute) {
	        this._font = 'normal 12px Arial';
	        var self = this;
	        self._name = name;
	        self._text = text;
	        self._image = image;
	        if (command) {
	            self._command = command;
	        }
	        if (canExecute) {
	            self._canExecute = canExecute;
	        }
	    }
	    $_extend(TouchToolStripItem.prototype, {
	       
	        
	        name: function (value) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._name;
	            }
	            $('#' + self._name).attr('id', value);
	            $('#' + self._name + 'Text').attr('id', value + 'Text');
	            $('#' + self._name + 'Image').attr('id', value + 'Image');
	            self._name = value;
	            return self;
	        },
	       
	        
	        text: function (value) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._text;
	            }
	            self._text = value;
	            $('#' + self.name() + 'Text').text(value);
	            return self;
	        },
	       
	        
	        font: function (value) {
	            var self = this;
	            var text = $('#' + self.name() + 'Text');
	            if (arguments.length === 0) {
	                return self._font;
	            }
	            self._font = value;
	            text.css('font', value);
	            return self;
	        },
	       
	        
	        foreColor: function (value) {
	            var self = this;
	            var text = $('#' + self.name() + 'Text');
	            if (arguments.length === 0) {
	                return self._foreColor ? self._foreColor : text.css('color');
	            }
	            text.css('color', value);
	            return self;
	        },
	       
	        
	        image: function (value) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._image;
	            }
	            self._image = value;
	            $('#' + self.name() + 'Image').css('background-image', 'url(' + value + ')');
	            return self;
	        },
	        _getDOM: function (imageClassName, imageAreaHeight, textClassName, buttonClassName) {
	            var self = this;
	            var name = self.name(), font = self.font(), text = self.text();
	            var imgSpan = $(createElement('span'));
	            imgSpan.attr('id', name + 'Image');
	            imgSpan.addClass(imageClassName);
	            imgSpan.css({
	                'background-image': 'url(' + self.image() + ')',
	                'background-repeat': 'no-repeat',
	                'display': 'block',
	                'height': imageAreaHeight,
	                'background-position-x': '50%'
	            });
	            var textSpan = $(createElement('span'));
	            textSpan.attr('id', name + 'Text');
	            textSpan.addClass(textClassName);
	            textSpan.css('font', font);
	            textSpan.text(text);
	
	            var textSpanWidth = _getTextSpanWidth(font, text, textClassName), buttonWidth = 60;
	            if (textSpanWidth > buttonWidth) {
	                buttonWidth = textSpanWidth;
	            }
	
	            var button = $(createElement(CONST_BUTTON));
	            button.attr('type', CONST_BUTTON);
	            button.attr('id', name);
	            button.addClass(buttonClassName + ' gc-toolstrip-button-style ui-state-default ui-widget btn btn-default');
	            button.css({
	                'box-sizing': 'content-box',
	                'border': '0px',
	                'padding': '4px',
	                'margin': '3px',
	                'width': buttonWidth + CONST_PX
	            });
	            button.append(imgSpan);
	            button.append(textSpan);
	            return button[0];
	        }
	    });
	    Touch.TouchToolStripItem = TouchToolStripItem;
	
	   
	    
	    function TouchToolStripSeparator(canExecute) {
	        function _getSeparatorName() {
	            var CONST_SEPARATOR = 'separator';
	            var num = 0;
	            var separatorName = CONST_SEPARATOR + num.toString();
	            while (DOCUMENT.getElementById(separatorName)) {
	                num++;
	                separatorName = CONST_SEPARATOR + num.toString();
	            }
	            return separatorName;
	        }
	
	        this._name = _getSeparatorName();
	        if (canExecute) {
	            this._canExecute = canExecute;
	        }
	    }
	    $_extend(TouchToolStripSeparator.prototype, {
	       
	        
	        name: function () {
	            return this._name;
	        },
	        _getDOM: function (className, height) {
	            var element = $(createElement('div'));
	            element.attr('id', this.name());
	            element.addClass(className);
	            element.css({
	                'width': '1px',
	                'height': height,
	                'display': 'inline-block;',
	                'background-color': '#CCC',
	                'margin-left': '5px',
	                'margin-right': '5px',
	                'opacity': 0.6
	            });
	            return element[0];
	        }
	    });
	    Touch.TouchToolStripSeparator = TouchToolStripSeparator;
	   
	
	   
	    function TouchMouseMessageFilter(owner) {
	        this._owner = owner;
	    }
	
	    $_extend(TouchMouseMessageFilter.prototype, {
	        _preProcessManipulationStarting: function () {
	            this._eventMode = 2 ;
	            this._owner._isTouchMode = true;
	        },
	        _postProcessManipulationComplete: function () {
	            this._eventMode = 0 ;
	            this._touchCompleteTimestamp = newDateValueOf();
	        },
	        _preProcessPointerDown: function () {
	            return this._eventMode === 1 ;
	        },
	        _preProcessPointerUp: function () {
	            return this._eventMode === 1 ;
	        },
	        _preProcessPointerMove: function () {
	            return this._eventMode === 1 ;
	        },
	        _preProcessMouseDown: function () {
	            var self = this;
	            if (self._eventMode === 2 ) {
	                return true;
	            } else if (self._touchCompleteTimestamp) {
	                if (newDateValueOf() - self._touchCompleteTimestamp <= 200) {
	                    self._mouseDownHandled++;
	                    return true;
	                }
	                self._touchCompleteTimestamp = 0;
	                self._mouseDownHandled = 0;
	                self._eventMode = 1 ;
	            } else {
	                self._eventMode = 1 ;
	            }
	            self._owner._isTouchMode = false;
	            return false;
	        },
	        _preProcessMouseUp: function () {
	            var self = this;
	            if (self._mouseDownHandled) {
	                self._mouseDownHandled--;
	                return true;
	            }
	            if (self._eventMode === 2 ) {
	                return true;
	            }
	            self._eventMode = 0 ;
	            return false;
	        },
	        _preProcessMouseMove: function () {
	            return this._eventMode === 2 ;
	        }
	    });
	    Touch._TouchMouseMessageFilter = TouchMouseMessageFilter;
	   
	
	   
	   
	   
	   
	   
	
	   
	    function TouchTargetElement(element, eventFlag, messageFilter, maxPointer, level) {
	        var self = this;
	        self._element = element;
	        self._messageFilter = messageFilter;
	        self._eventFlag = eventFlag;
	        self._maxPointer = maxPointer;
	        self._level = level;
	    }
	    Touch._TouchTargetElement = TouchTargetElement;
	   
	
	   
	    function _SimulateMouseEvents() {
	    }
	    $_extend(_SimulateMouseEvents.prototype, {
	        _simulateMouseEvent: function (event, simulatedType) {
	            var originalEvent = event, touches = originalEvent.touches, targetTouches = originalEvent.targetTouches, changedTouches = originalEvent.changedTouches;
	           
	            if (originalEvent.isPrimary === false) {
	                return;
	            }
	            if (touches && touches.length >= 1 && targetTouches && targetTouches.length >= 1) { 
	                if (touches[0].clientX !== targetTouches[0].clientX || touches[0].clientY !== targetTouches[0].clientY) {
	                    return;
	                }
	            }
	           
	            cancelDefault(event);
	            var touchPoint = !isNullOrUndefined(changedTouches) ? changedTouches[0] : originalEvent, simulatedEvent = DOCUMENT.createEvent('MouseEvents');
	           
	            simulatedEvent.initMouseEvent(simulatedType, true, true, WINDOW, 1, touchPoint.screenX, touchPoint.screenY,
	                touchPoint.clientX, touchPoint.clientY, false, false, false, false, 0, keyword_null);
	           
	            event.target.dispatchEvent(simulatedEvent);
	        },
	        _down: function (event) {
	            var pointerType = event.pointerType;
	            if (!pointerType || (pointerType === event[MSPOINTER_TYPE_TOUCH] || pointerType === CONST_TOUCH)) {
	                var self = event.data;
	               
	                if (self._touchHandled) {
	                    return;
	                }
	               
	                self._touchHandled = true;
	               
	                self._touchMoved = false;
	               
	                self._simulateMouseEvent(event, 'mouseover');
	                self._simulateMouseEvent(event, 'mousemove');
	                self._simulateMouseEvent(event, 'mousedown');
	            }
	        },
	        _move: function (event) {
	            var pointerType = event.pointerType;
	            if (!pointerType || (pointerType === event[MSPOINTER_TYPE_TOUCH] || pointerType === CONST_TOUCH)) {
	                var self = event.data;
	               
	                if (!self._touchHandled) {
	                    return;
	                }
	               
	                self._touchMoved = true;
	               
	                self._simulateMouseEvent(event, 'mousemove');
	            }
	        },
	        _up: function (event) {
	            var pointerType = event.pointerType;
	            if (!pointerType || (pointerType === event[MSPOINTER_TYPE_TOUCH] || pointerType === CONST_TOUCH)) {
	                var self = event.data;
	               
	                if (!self._touchHandled) {
	                    return;
	                }
	               
	                self._simulateMouseEvent(event, 'mouseup');
	                self._simulateMouseEvent(event, 'mouseout');
	                if (!self._touchMoved) {
	                   
	                    self._simulateMouseEvent(event, 'click');
	                }
	                self._touchHandled = false;
	            }
	        },
	        _bindUnBindTouchEvents: function (element, isBind, eventNamespace) {
	            var self = this;
	            var firstChar = eventNamespace.charAt(0);
	            if (firstChar !== '.') {
	                eventNamespace = '.' + eventNamespace;
	            }
	            var _msPointerDown = MS_POINTER_DOWN + eventNamespace, _msPointerMove = MS_POINTER_MOVE + eventNamespace,
	                _msPointerUp = MS_POINTER_UP + eventNamespace, _pointerdown = POINTER_DOWN + eventNamespace,
	                _pointermove = POINTER_MOVE + eventNamespace, _pointerup = POINTER_UP + eventNamespace,
	                _touchStart = TOUCH_START + eventNamespace, _touchMove = TOUCH_MOVE + eventNamespace,
	                _touchEnd = TOUCH_END + eventNamespace;
	            var isIEOrEdge = Sheets_util._isIEOrEdgeInTouchDevice();
	            if (isBind) {
	                if (isIEOrEdge) {
	                    var elementStyle = element.style;
	                    if (!isNullOrUndefined(elementStyle.msTouchAction)) {
	                        elementStyle.msTouchAction = CONST_NONE;
	                    }
	                    if (!isNullOrUndefined(elementStyle.touchAction)) {
	                        elementStyle.touchAction = CONST_NONE;
	                    }
	                    $(element).bind(_msPointerDown, self, self._down).bind(_pointerdown, self, self._down);
	                    $(DOCUMENT).bind(_msPointerMove, self, self._move).bind(_pointermove, self, self._move)
	                        .bind(_msPointerUp, self, self._up).bind(_pointerup, self, self._up);
	                } else {
	                    $(element).bind(_touchStart, self, self._down).bind(_touchMove, self, self._move).bind(_touchEnd, self, self._up);
	                }
	            } else if (isIEOrEdge) {
	                $(element).unbind(_msPointerDown).unbind(_pointerdown);
	                $(DOCUMENT).unbind(_msPointerMove).unbind(_pointermove).unbind(_msPointerUp).unbind(_pointerup);
	            } else {
	                $(element).unbind(_touchStart).unbind(_touchMove).unbind(_touchEnd);
	            }
	        }
	    });
	    Touch._SimulateMouseEvents = _SimulateMouseEvents;
	   
	
	   
	
	    var hit_element_newSheet = 'newSheet';    
	    var hit_element_tab = 'tab';
	    function TabStripTouchEventHandler(tab) {
	        this._tab = tab;
	    }
	    $_extend(TabStripTouchEventHandler.prototype, {
	       
	       
	
	        _doManipulationStarted: function (e) {
	            var self = this, position = e._Position;
	            var tab = self._tab;
	            var activeSheet = getActiveSheet(tab._workbook);
	            if (tab._tabNameEditor) {
	                tab._endSheetTabEditing(activeSheet, false);
	            }
	            var hit_element_resizebar = 'resize';
	            var hitTestInfo = tab.hitTest(position.X, position.Y), hitTestInfo_element = hitTestInfo.element;
	            if (hitTestInfo_element === hit_element_resizebar) {
	                tab._resizeTab = true;
	                tab._activeX = position.X;
	            } else if (hitTestInfo_element === hit_element_tab || hitTestInfo_element === hit_element_newSheet || hitTestInfo_element === '') {
	                var srcCanvas = tab._canvas, canvasWidth = _DPIHelper._getLogicWidth(srcCanvas), canvasHeight = _DPIHelper._getLogicHeight(srcCanvas);
	                var canvas = self._getTouchCanvas(canvasWidth, canvasHeight);
	                var ctx = canvas.getContext('2d'), ratioX = _DPIHelper._getScaleX(canvas), ratioY = _DPIHelper._getScaleY(canvas);
	                CanvasHelper._scaleTo(ctx, 1, 1);
	                ctx.drawImage(srcCanvas, 0, 0, getWidth(canvas), getHeight(canvas), 0, 0, getWidth(canvas), getHeight(canvas));
	                CanvasHelper._scaleTo(ctx, ratioX, ratioY);
	                self._canvas = canvas;
	                self._oldFirstTab = tab._firstTab;
	
	                self._tabStartPosition = tab._getTabStartPosition();
	                self._tabEndPosition = tab._getTabEndPosition();
	                self._newTabSize = tab._getNewTabSize();
	                tab._hideNewTabSecondMoreTab = true;
	            }
	            self._minFirstTabIndex = tab._getNextVisibleIndex(-1);
	            self._maxFirstTabIndex = tab._reCalculateFirstTabIndex(tab._getVisibleTabs());
	        },
	        _doManipulationDelta: function (e) {
	            var self = this, positionX = e._Position.X;
	            var tab = self._tab;
	            if (tab._resizeTab) {
	                var d = positionX - tab._activeX;
	                var ss = tab._workbook, ss_options = ss.options;
	                var totalWidth = ss._vp.clientWidth;
	                ss_options.tabStripRatio = ss._getActualTabStripRatio() + d / totalWidth;
	                var minRatio = tab._resizeBarWidth / totalWidth;
	                var maxRatio = 1;
	                if (ss._getActualTabStripRatio() < minRatio) {
	                    ss_options.tabStripRatio = minRatio;
	                    tab._activeX = tab._resizeBarWidth;
	                } else if (ss._getActualTabStripRatio() >= maxRatio) {
	                    ss_options.tabStripRatio = maxRatio;
	                    tab._activeX = totalWidth;
	                } else {
	                    tab._activeX = positionX;
	                }
	            } else {
	                var srcCanvas = self._canvas, oldFirstTab = self._oldFirstTab;
	                if (!srcCanvas || isNullOrUndefined(oldFirstTab)) {
	                    return;
	                }
	                var minFirstTabIndex = self._minFirstTabIndex, maxFirstTabIndex = self._maxFirstTabIndex, newTabSize = self._newTabSize,
	                    tabStartPosition = self._tabStartPosition, tabEndPosition = self._tabEndPosition, translationX = e._Cumulative._Translation.X;
	                var firstTabInfo = self._getNewFirstTabInfo(translationX, oldFirstTab);
	                tab._firstTab = firstTabInfo._firstTab;
	                var availableWidth = firstTabInfo._width;
	                if (translationX > 0 && oldFirstTab === minFirstTabIndex && tab._firstTab === minFirstTabIndex) {
	                    availableWidth = 0;
	                } else if (translationX < 0 && oldFirstTab === maxFirstTabIndex && tab._firstTab === maxFirstTabIndex) {
	                    availableWidth = 0;
	                }
	                if (translationX > 0 && translationX > availableWidth + newTabSize) {
	                    translationX = availableWidth + newTabSize;
	                } else if (translationX < 0 && translationX < availableWidth - newTabSize) {
	                    translationX = availableWidth - newTabSize;
	                }
	                if (translationX !== 0) {
	                    var destCanvas = tab._canvas, ctx = destCanvas.getContext('2d'), ratioX = _DPIHelper._getScaleX(destCanvas),
	                        ratioY = _DPIHelper._getScaleY(destCanvas);
	                    ctx.save();
	                    ctx.clearRect(0, 0, _DPIHelper._getLogicWidth(destCanvas), _DPIHelper._getLogicHeight(destCanvas));
	                    var rect = tab._getBounds();
	                    tab._paintBackground(ctx, rect);
	                    var x, y = 0, width, height = getHeight(rect), x2, xOffset;
	                    if (translationX > 0) {
	                        x = tabStartPosition;
	                        x2 = x + translationX;
	                        width = tabEndPosition - x2;
	                        if (width > 0) {
	                            CanvasHelper._scaleTo(ctx, 1, 1);
	                            ctx.drawImage(srcCanvas, x * ratioX, y, width * ratioX, height * ratioY, x2 * ratioX, y, width * ratioX, height * ratioY);
	                            CanvasHelper._scaleTo(ctx, ratioX, ratioY);
	                        }
	                        xOffset = translationX - availableWidth;
	                        if (tabEndPosition - tabStartPosition <= translationX) {
	                            xOffset = 0;
	                        }
	                        width = availableWidth;
	                        x = tabStartPosition;
	                        if (width > 0) {
	                            CanvasHelper._translate(ctx, xOffset, 0);
	                            tab._paintTabs(ctx, new Rect(x, y, width, height));
	                            CanvasHelper._translate(ctx, -xOffset, 0);
	                        }
	                    } else if (translationX < 0) {
	                        x2 = tabStartPosition;
	                        x = x2 + Math_abs(translationX);
	                        width = tabEndPosition - x;
	                        if (width > 0) {
	                            CanvasHelper._scaleTo(ctx, 1, 1);
	                            ctx.drawImage(srcCanvas, x * ratioX, y, width * ratioX, height * ratioY, x2 * ratioX, y, width * ratioX, height * ratioY);
	                            CanvasHelper._scaleTo(ctx, ratioX, ratioY);
	                        }
	                        xOffset = translationX - availableWidth;
	                        if (tabEndPosition - tabStartPosition <= Math_abs(translationX)) {
	                            xOffset = 0;
	                        }
	                        width = Math_abs(availableWidth);
	                        x = tabEndPosition - width;
	                        if (width > 0) {
	                            CanvasHelper._translate(ctx, xOffset, 0);
	                            tab._paintTabs(ctx, new Rect(x, y, width, height));
	                            CanvasHelper._translate(ctx, -xOffset, 0);
	                        }
	                    }
	                    CanvasHelper._scaleTo(ctx, 1, 1);
	                    x = 0;
	                    width = tabStartPosition;
	                    ctx.drawImage(srcCanvas, x * ratioX, y, width * ratioX, height * ratioY, x * ratioX, y, width * ratioX, height * ratioY);
	
	                    var themeStyle = _ThemeStyleHelper._getCssClassThemeStyle(''), themeVersion = convertToInt(themeStyle.zIndex);
	                    if (themeVersion > 2007 ) {
	                        x = tabEndPosition;
	                        width = rect.x + getWidth(rect) - tab._resizeBarWidth - x;
	                        ctx.drawImage(srcCanvas, x * ratioX, y, width * ratioX, height * ratioY, x * ratioX, y, width * ratioX, height * ratioY);
	                    }
	
	                    x = getWidth(rect) - tab._resizeBarWidth;
	                    width = tab._resizeBarWidth;
	                    ctx.drawImage(srcCanvas, x * ratioX, y, width * ratioX, height * ratioY, x * ratioX, y, width * ratioX, height * ratioY);
	                    CanvasHelper._scaleTo(ctx, ratioX, ratioY);
	                    ctx.restore();
	                }
	            }
	        },
	       
	       
	        _doManipulationCompleted: function () {
	            var tab = this._tab;
	            if (tab._resizeTab) {
	                tab._resizeTab = false;
	                tab._workbook._doTabHSResize();
	            } else {
	                tab._hideNewTabSecondMoreTab = keyword_undefined;
	                tab.repaint();
	            }
	        },
	        _doTapped: function (e) {
	            var tab = this._tab, sp = tab._workbook, position = e._Position;
	            var activeSheet = getActiveSheet(sp);
	            if (tab._tabNameEditor) {
	                tab._endSheetTabEditing(activeSheet, false);
	            }
	            var hit_element_navButton = ["first", "prevArrow", "nextArrow", "last", "", "prevButton", "nextButton"];
	            var hitTestInfo = tab.hitTest(position.X, position.Y), hitTestInfo_element = hitTestInfo.element;
	            sp._suspendSetFocus = true;
	            try {
	                if (hit_element_navButton.indexOf(hitTestInfo_element) >= 0) {
	                    tab._doNavButtonClick(hitTestInfo.index, true);
	                } else if (hitTestInfo_element === hit_element_tab) {
	                    tab._doSheetTabClick(hitTestInfo.index, hitTestInfo.position);
	                } else if (hitTestInfo_element === hit_element_newSheet) {
	                    tab._doNewTabClick(hitTestInfo.position);
	                }
	            } finally {
	                sp._suspendSetFocus = false;
	                var newActiveSheet = getActiveSheet(sp);
	                if (newActiveSheet !== activeSheet) {
	                    newActiveSheet._isTouchMode = true;
	                    newActiveSheet._setFocus();
	                }
	            }
	        },
	        _doDoubleTapped: function (e) {
	            return this._tab._doMouseDbClickImp(e._Position.X, e._Position.Y);
	        },
	       
	       
	        _getTouchCanvas: function (width, height) {
	            var canvas = this._canvas;
	            if (!canvas) {
	                canvas = createElement('canvas');
	                _DPIHelper._adjustDevicePixel(canvas, this._tab._workbook);
	                _DPIHelper._setSize(canvas, width, height);
	            } else if (width !== _DPIHelper._getLogicWidth(canvas) || height !== _DPIHelper._getLogicHeight(canvas)) {
	                _DPIHelper._setSize(canvas, width, height);
	            }
	            return canvas;
	        },
	        _getNewFirstTabInfo: function (translationX, oldFirstTab) {
	           
	            var self = this, tab = self._tab, tabSizes = tab._tabSizes, min = self._minFirstTabIndex, max = self._maxFirstTabIndex;
	            var c = oldFirstTab, width = 0;
	            if (translationX > 0) {
	                while (c >= min) {
	                    if (width > translationX) {
	                        break;
	                    }
	                    width += tabSizes[c];
	                    c--;
	                }
	                if (c < min) {
	                    c = min;
	                }
	            } else if (translationX < 0 && max !== -1) {
	                while (c <= max) {
	                    if (width < translationX) {
	                        break;
	                    }
	                    width -= tabSizes[c];
	                    c++;
	                }
	                if (c > max) {
	                    c = max;
	                }
	            }
	            return {_firstTab: c, _width: width};
	        }
	    });
	
	    function TabStripTouchManager(element, tab, touchEventProvider) {
	        var self = this;
	        self._touchMouseMessageFilter = new TouchMouseMessageFilter(self);
	        self._touchTarget = new TouchTargetElement(element, 'tabStrip', self._touchMouseMessageFilter, 1, -1);
	        self._touchEventProvider = touchEventProvider;
	        self._touchEventHandler = new TabStripTouchEventHandler(tab);
	        var touchEventHandler = self._touchEventHandler;
	        var touchTarget = self._touchTarget;
	       
	       
	       
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
	        touchTarget._doubleTapped = function (e) {
	            return touchEventHandler._doDoubleTapped(e);
	        };
	       
	       
	       
	    }
	    $_extend(TabStripTouchManager.prototype, {
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
	   
	
	   
	    function paintImage(sheet, imgSrc, ctx, rect) {
	        var imageLoader = sheet._getImageLoader();
	        if (imageLoader._getState(imgSrc)) {
	            ctx.drawImage(imageLoader._getImage(imgSrc), rect.x, rect.y, getWidth(rect), getHeight(rect));
	        } else {
	            imageLoader._addImage(imgSrc);
	        }
	    }
	    function paintTouchResizeIndicator(sheet, ctx) {
	        var layout = sheet._getSheetLayout();
	        var image, imageSize = 16;
	        var headerCellRect, resizeIndicatorRect, headerRect;
	        var selections = getSelections(sheet);
	        if (sheet._isTouchMode && selections.length > 0) {
	            var selection = selections[selections.length - 1];
	            var row = selection.row, lastRow = selection.row + selection.rowCount - 1, col = selection.col, lastCol = selection.col + selection.colCount - 1;
	            var parent = sheet.parent;
	            var BASE_64_PART3 = 'AAAAAQCAYAAAAf8/9hAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADs';
	            if (!parent || parent.options.allowUserResize) {
	                if (row !== -1 && col === -1 && sheet.getRowResizable(lastRow)) {
	                    var rowViewportIndex = sheet._getRowViewportIndex(lastRow);
	                    image = BASE_64_PART1 + BASE_64_PART3 + 'MAAA7DAcdvqGQAAABaSURBVDhPY/z//z8DLsDIyAiWBKphBAtgAUxQGgPANIMAMhsdYDUAmwZchtDOC8SCgTcA5DfcgUAEoNwFo7GAPQxwJVtsYYHVBdgU4gpInF5A1oBLMwMDAwMApuAtD6Z7YxQAAAAASUVORK5CYII=';
	                    headerCellRect = sheet.getCellRect(lastRow, getColumnCount(sheet, 2 ) - 1, rowViewportIndex, -1);
	                    headerRect = layout._rowHeaderRect(rowViewportIndex);
	                    if (headerRect.y <= headerCellRect.y && headerCellRect.y + getHeight(headerCellRect) <= headerRect.y + getHeight(headerRect)) {
	                        resizeIndicatorRect = new Rect(layout._frozenX - imageSize, headerCellRect.y + getHeight(headerCellRect) - imageSize / 2, imageSize, imageSize);
	                    }
	                } else if (row === -1 && col !== -1 && sheet.getColumnResizable(lastCol)) {
	                    var colViewportIndex = sheet._getColumnViewportIndex(lastCol);
	                    image = BASE_64_PART1 + BASE_64_PART3 + 'IAAA7CARUoSoAAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAE1JREFUOE/ljtEKACAIA/v/nzZ9mFhsJPRocLEuGS4zk/iJyyP/D6gE0wrYoCqoLoUafPl8fEBln3ulSscfErk65TMjMFRBhUowosDWBoHpba8+C7w0' + BASE_64_PART4;
	                    headerCellRect = sheet.getCellRect(getRowCount(sheet, 1 ) - 1, lastCol, -1, colViewportIndex);
	                    headerRect = layout._colHeaderRect(colViewportIndex);
	                    if (headerRect.x <= headerCellRect.x && headerCellRect.x + getWidth(headerCellRect) <= headerRect.x + getWidth(headerRect)) {
	                        resizeIndicatorRect = new Rect(headerCellRect.x + getWidth(headerCellRect) - imageSize / 2, layout._frozenY - imageSize, imageSize, imageSize);
	                    }
	                }
	                if (image && resizeIndicatorRect) {
	                    paintImage(sheet, image, ctx, resizeIndicatorRect);
	                }
	            }
	        }
	    }
	    function getTouchDragFillIndicatorRect(sheet) {
	        var rect = keyword_null;
	        var selections = getSelections(sheet);
	        var length = selections.length;
	        if (sheet._isTouchMode && length > 0) {
	            var sel = selections[length - 1];
	            var selectRect = sheet._getRangeWholeRect(sel);
	            var dragFillIndicatorWidth = 17;
	            var dragFillIndicatorHeight = 20;
	            rect = new Rect(selectRect.x + getWidth(selectRect) - dragFillIndicatorWidth, selectRect.y + getHeight(selectRect), dragFillIndicatorWidth, dragFillIndicatorHeight);
	        }
	        return rect;
	    }
	    function getCurrentViewportRange(sheet, row, col) {
	        var rowViewportIndex = sheet._getRowViewportIndex(row);
	        var colViewportIndex = sheet._getColumnViewportIndex(col);
	        var viewportRowLayoutModel = sheet._getViewportRowLayout(rowViewportIndex),
	            viewportColumnLayoutModel = sheet._getViewportColumnLayout(colViewportIndex),
	            topRow = 0, bottomRow = 0, leftCol = 0, rightCol = 0;
	        if (viewportRowLayoutModel.length > 0) {
	            topRow = viewportRowLayoutModel[0].row;
	            bottomRow = viewportRowLayoutModel[viewportRowLayoutModel.length - 1].row;
	        }
	        if (viewportColumnLayoutModel.length > 0) {
	            leftCol = viewportColumnLayoutModel[0].col;
	            rightCol = viewportColumnLayoutModel[viewportColumnLayoutModel.length - 1].col;
	        }
	        return createRange(topRow, leftCol, bottomRow - topRow + 1, rightCol - leftCol + 1);
	    }
	    function isContainedByCurrentViewport(sheet, row, col) {
	        var rowViewportIndex = sheet._getRowViewportIndex(row);
	        var colViewportIndex = sheet._getColumnViewportIndex(col);
	        var sheetLayout = sheet._getSheetLayout();
	        var viewportRect = sheetLayout._viewportRect(rowViewportIndex, colViewportIndex);
	        var colContained = false;
	        var viewportColumnLayoutModel = sheet._getViewportColumnLayout(colViewportIndex);
	        var columnLayout = col === -1 ? viewportColumnLayoutModel[0] : viewportColumnLayoutModel.findCol(col);
	        if (columnLayout) {
	            colContained = viewportRect.x <= columnLayout.x && columnLayout.x + getWidth(columnLayout) <= viewportRect.x + getWidth(viewportRect);
	        }
	        var rowContained = false;
	        var viewportRowLayoutModel = sheet._getViewportRowLayout(rowViewportIndex);
	        var rowLayout = row === -1 ? viewportRowLayoutModel[0] : viewportRowLayoutModel.findRow(row);
	        if (rowLayout) {
	            rowContained = viewportRect.y <= rowLayout.y && rowLayout.y + getHeight(rowLayout) <= viewportRect.y + getHeight(viewportRect);
	        }
	        return colContained && rowContained;
	    }
	    function getSelectionIndicatorRects(sheet) {
	        var selections = getSelections(sheet);
	        var rects = [];
	        if (sheet._isTouchMode && selections.length > 0) {
	            var selection = selections[selections.length - 1];
	            var selectRect = sheet._getRangeWholeRect(selection);
	            var radius = 8;
	            var sheetLayout = sheet._getSheetLayout(), selectionFirstRow = selection.row,
	                selectionLastRow = selection.row + selection.rowCount - 1, selectionFirstCol = selection.col,
	                selectionLastCol = selection.col + selection.colCount - 1,
	                topLeftViewportRange = getCurrentViewportRange(sheet, selectionFirstRow, selectionFirstCol),
	                bottomRightViewportRange = getCurrentViewportRange(sheet, selectionLastRow, selectionLastCol),
	                topRow = topLeftViewportRange.row,
	                bottomRow = bottomRightViewportRange.row + bottomRightViewportRange.rowCount - 1,
	                leftCol = topLeftViewportRange.col,
	                rightCol = bottomRightViewportRange.col + bottomRightViewportRange.colCount - 1,
	                frozenRect, viewportRect,
	                equalBottomRow = selectionLastRow === bottomRow && isContainedByCurrentViewport(sheet, bottomRow, -1),
	                equalRightCol = selectionLastCol === rightCol && isContainedByCurrentViewport(sheet, -1, rightCol);
	            if (selection.row !== -1 && selection.col !== -1) {
	                if (leftCol <= selectionFirstCol && selectionFirstCol <= rightCol && topRow <= selectionFirstRow && selectionFirstRow <= bottomRow) {
	                    rects[0] = new Rect(selectRect.x - radius, selectRect.y - radius, radius * 2, radius * 2);
	                }
	                if (((leftCol <= selectionLastCol && selectionLastCol < rightCol) || equalRightCol) && ((topRow <= selectionLastRow && selectionLastRow < bottomRow) || equalBottomRow)) {
	                    rects[1] = new Rect(selectRect.x + getWidth(selectRect) - radius, selectRect.y + getHeight(selectRect) - radius, radius * 2, radius * 2);
	                }
	            } else if (selection.row !== -1) {
	                frozenRect = sheetLayout._viewportRect(1, 0);
	                viewportRect = sheetLayout._viewportRect(1, 1);
	                var startX = frozenRect.x + (getWidth(frozenRect) + getWidth(viewportRect)) / 2 - radius;
	                var viewportLastColumn = getColumnCount(sheet) - 1 - getFrozenTrailingColumnCount(sheet);
	                var viewportColumnLayoutModel = sheet._getViewportColumnLayout(1);
	                var columnLayout = viewportColumnLayoutModel.findCol(viewportLastColumn);
	                if (columnLayout) {
	                    var frozenColumnLayoutModel = sheet._getViewportColumnLayout(0);
	                    var leftColLayout = frozenColumnLayoutModel[0] || viewportColumnLayoutModel[0];
	                    if (leftColLayout) {
	                        startX = leftColLayout.x + (columnLayout.x + getWidth(columnLayout) - leftColLayout.x) / 2 - radius;
	                    }
	                }
	                if (topRow <= selectionFirstRow && selectionFirstRow <= bottomRow) {
	                    rects[0] = new Rect(startX, selectRect.y - radius, radius * 2, radius * 2);
	                }
	                if ((topRow <= selectionLastRow && selectionLastRow < bottomRow) || equalBottomRow) {
	                    rects[1] = new Rect(startX, selectRect.y + getHeight(selectRect) - radius, radius * 2, radius * 2);
	                }
	            } else if (selection.col !== -1) {
	                frozenRect = sheetLayout._viewportRect(0, 1);
	                viewportRect = sheetLayout._viewportRect(1, 1);
	                var startY = frozenRect.y + (getHeight(frozenRect) + getHeight(viewportRect)) / 2 - radius;
	                var viewportLastRow = getRowCount(sheet) - 1 - getFrozenTrailingRowCount(sheet);
	                var viewportRowLayoutModel = sheet._getViewportRowLayout(1);
	                var rowLayout = viewportRowLayoutModel.findRow(viewportLastRow);
	                if (rowLayout) {
	                    var frozenRowLayoutModel = sheet._getViewportRowLayout(0);
	                    var topRowLayout = frozenRowLayoutModel[0] || viewportRowLayoutModel[0];
	                    if (topRowLayout) {
	                        startY = topRowLayout.y + (rowLayout.y + getHeight(rowLayout) - topRowLayout.y) / 2 - radius;
	                    }
	                }
	                if (leftCol <= selectionFirstCol && selectionFirstCol <= rightCol) {
	                    rects[0] = new Rect(selectRect.x - radius, startY, radius * 2, radius * 2);
	                }
	                if ((leftCol <= selectionLastCol && selectionLastCol < rightCol) || equalRightCol) {
	                    rects[1] = new Rect(selectRect.x + getWidth(selectRect) - radius, startY, radius * 2, radius * 2);
	                }
	            }
	            var rec;
	            for (var i = rects.length - 1; i >= 0; i--) {
	                rec = rects[i];
	                if (!rec || rec.x < 0 || rec.y < 0) {
	                    rects[i] = keyword_null;
	                }
	            }
	        }
	        return rects;
	    }
	    function paintTouchSelectionIndicator(sheet, showTouchSelectionIndicator, ctx) {
	        if (Sheets.needPaintSelection(sheet)) {
	            if (sheet.isEditing() || !showTouchSelectionIndicator || sheet.selectionPolicy() === 0) {
	                return;
	            }
	            var selectionIndicatorRects = getSelectionIndicatorRects(sheet), len = selectionIndicatorRects.length, rect;
	            if (len > 0) {
	                ctx.save();
	                ctx.fillStyle = sheet._selectionIndicatorColor() || 'white';
	                ctx.strokeStyle = sheet.getSelectionBorderColor();
	                for (var i = 0; i < len; i++) {
	                    rect = selectionIndicatorRects[i];
	                    if (rect) {
	                        ctx.beginPath();
	                        ctx.arc(rect.x + getWidth(rect) / 2, rect.y + getHeight(rect) / 2, getWidth(rect) / 2, 0, Math.PI * 2, false);
	                        ctx.fill();
	                        ctx.stroke();
	                    }
	                }
	                ctx.restore();
	            }
	        }
	    }
	    function paintTouchDragFillIndicator(sheet, ctx) {
	        var dragFillIndicatorRect = getTouchDragFillIndicatorRect(sheet);
	        if (dragFillIndicatorRect) {
	            var imgSrc = BASE_64_PART1 + 'EAAAATCAIAAAD5x3GmAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwwAADsMBx2 + oZAAAAGhJREFUOE / djkEOwCAIBHk6P98u1lKo1diEU + dggOyAAkC + YPl / Onx3WDmiytm4aulQoKba + 4uiO77YhHDH5SqnRa0If / Nhq0fnjPob2h5oVXJI0rJA3h1ya1kgU4f4nQfVzozk7APgAIEqATZbalz1' + BASE_64_PART4;
	            paintImage(sheet, imgSrc, ctx, dragFillIndicatorRect);
	        }
	    }
	    Sheets._SheetRender.prototype._refreshTouchSelectionIndicator = function () {
	        var self = this, sheet = self._sheet;
	        var selections = getSelections(sheet), length = selections.length;
	        if (sheet._layoutSuspended <= 0 && length > 0) {
	            self._repaintSelection(selections[length - 1], keyword_undefined, keyword_undefined, true);
	        }
	    };
	
	    Sheets.Worksheet._registerFeature(CONST_TOUCH, {
	        init: function () {
	            this._existTouchDragFillIndicator = false;
	            this._showTouchSelectionIndicator = true;
	        },
	        setHost: function (host) {
	            var self = this, workbook = self.parent,
	                provider = workbook && workbook._touchEventProvider || new TouchEventProvider();
	            var touchManager = new TouchManager(host[0], self, provider);
	            touchManager._attach();
	            self._touchManager = touchManager;
	        },
	        dispose: function (clearCache) {
	            var self = this;
	            if (self._touchManager) {
	                self._touchManager._detach();
	            }
	
	            if (clearCache !== false) {
	                self._touchManager = keyword_null;
	            }
	        },
	        startEdit: function () {
	           
	            this._render._refreshTouchSelectionIndicator();
	        },
	        paintAdornment: function (e) {
	            var sheet = this;
	            var ctx = e.ctx;
	            if (sheet._isTouchMode) {
	                if (!sheet.options.isProtected) {
	                    paintTouchResizeIndicator(sheet, ctx);
	                }
	                if (sheet._existTouchDragFillIndicator) {
	                    paintTouchDragFillIndicator(sheet, ctx);
	                } else {
	                    paintTouchSelectionIndicator(sheet, sheet._showTouchSelectionIndicator, ctx);
	                }
	            }
	        },
	        preProcessMouseDown: function(argObj) {
	            var event = argObj.e;
	            var touchManager = this._touchManager;
	            if (IPAD_OR_IPHONE || touchManager._preProcessMouseDown(event)) {
	                cancelDefault(event);
	                argObj.r = true;
	            }
	        },
	        preProcessMouseMove: function(argObj) {
	            var event = argObj.e;
	            var touchManager = this._touchManager;
	            if (IPAD_OR_IPHONE || touchManager._preProcessMouseMove(event)) {
	                cancelDefault(event);
	                argObj.r = true;
	            }
	        },
	        preProcessMouseUp: function(argObj) {
	            var event = argObj.e;
	            var touchManager = this._touchManager;
	            if (IPAD_OR_IPHONE || touchManager._preProcessMouseUp(event)) {
	                cancelDefault(event);
	                argObj.r = true;
	            }
	        },
	        preProcessMouseDbClick: function(argObj) {
	            if (IPAD_OR_IPHONE || this._isTouchMode) {
	                argObj.r = true;
	            }
	        },
	        preProcessMouseOut: function(argObj) {
	            if (IPAD_OR_IPHONE) {
	                argObj.r = true;
	            }
	        },
	        preProcessMouseWheel: function(argObj) {
	            if (IPAD_OR_IPHONE) {
	                argObj.r = true;
	            }
	        }
	    });
	
	    Sheets.Workbook._registerFeature(CONST_TOUCH, {
	        init: function () {
	            this._touchEventProvider = new TouchEventProvider();
	        },
	        setHost: function () {
	            var self = this;
	
	           
	            
	            self.touchToolStrip = new TouchToolStrip(self, self._getContainerDiv());
	        },
	        dispose: function () {
	            var self = this, touchEventProvider = self._touchEventProvider, touchToolStrip = self.touchToolStrip;
	            if (touchEventProvider) {
	                touchEventProvider._dispose();
	            }
	            if (touchToolStrip) {
	                touchToolStrip._dispose();
	                self.touchToolStrip = keyword_null;
	            }
	        },
	        onCultureChanged: function () {
	            var touchToolStrip = this.touchToolStrip;
	            if (touchToolStrip) {
	                touchToolStrip._updateResource();
	            }
	        }
	    });
	
	    Sheets._SheetTabBase._registerFeature(CONST_TOUCH, {
	        setHost: function () {
	            var self = this;
	            var touchManager = new TabStripTouchManager(self._canvas, self, self._workbook._touchEventProvider);
	            touchManager._attach();
	            self._touchManager = touchManager;
	        },
	        dispose: function () {
	            var self = this, touchManager = self._touchManager;
	            if (touchManager) {
	                touchManager._detach();
	                self._touchManager = keyword_null;
	            }
	        },
	        preProcessMouseDown: function (argObj) {
	            var touchManager = this._touchManager, event = argObj.e;
	            if (IPAD_OR_IPHONE || touchManager._preProcessMouseDown(event)) {
	                cancelDefault(event);
	                argObj.r = false;
	            }
	        },
	        preProcessMouseMove: function (argObj) {
	            var touchManager = this._touchManager, event = argObj.e;
	            if (IPAD_OR_IPHONE || touchManager._preProcessMouseMove(event)) {
	                cancelDefault(event);
	                argObj.r = false;
	            }
	        },
	        preProcessMouseUp: function (argObj) {
	            var touchManager = this._touchManager, event = argObj.e;
	            if (IPAD_OR_IPHONE || touchManager._preProcessMouseUp(event)) {
	                cancelDefault(event);
	                argObj.r = false;
	            }
	        },
	        preProcessMouseDbClick: function (argObj) {
	            var sheet = getActiveSheet(this._workbook);
	            if (IPAD_OR_IPHONE || sheet._isTouchMode) {
	                argObj.r = false;
	            }
	        },
	        preProcessMouseOut: function (argObj) {
	            if (IPAD_OR_IPHONE) {
	                argObj.r = false;
	            }
	        }
	    });
	
	    var NS_SCROLLBAR = '.gcScrollbar';
	    Sheets._Scrollbar._registerFeature(CONST_TOUCH, {
	        initEvents: function(element) {
	            var simulateMouseEvents = this._simulateMouseEvents = new _SimulateMouseEvents();
	            simulateMouseEvents._bindUnBindTouchEvents(element, true, NS_SCROLLBAR);
	        },
	        dispose: function(element) {
	            var simulateMouseEvents = this._simulateMouseEvents;
	            if (simulateMouseEvents) {
	                simulateMouseEvents._bindUnBindTouchEvents(element, false, NS_SCROLLBAR);
	            }
	        }
	    });
	   
	
	    module.exports = Touch;
	
	}());

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Common;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sheets;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        ToolStrip_PasteText: 'Paste',
	        ToolStrip_CutText: 'Cut',
	        ToolStrip_CopyText: 'Copy',
	        ToolStrip_AutoFillText: 'AutoFill'
	    };
	
	}());

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.touch.12.0.0.js.map