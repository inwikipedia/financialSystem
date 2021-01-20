(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SpreadSheetsComponents"] = factory();
	else
		root["SpreadSheetsComponents"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Column = exports.Worksheet = exports.SpreadSheets = undefined;

	var _SpreadSheets = __webpack_require__(1);

	var _SpreadSheets2 = _interopRequireDefault(_SpreadSheets);

	var _Worksheet = __webpack_require__(5);

	var _Worksheet2 = _interopRequireDefault(_Worksheet);

	var _Column = __webpack_require__(7);

	var _Column2 = _interopRequireDefault(_Column);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.SpreadSheets = _SpreadSheets2.default;
	exports.Worksheet = _Worksheet2.default;
	exports.Column = _Column2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactImport = __webpack_require__(2);

	var _reactImport2 = _interopRequireDefault(_reactImport);

	var _utils = __webpack_require__(3);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SpreadSheets = function (_React$Component) {
	    _inherits(SpreadSheets, _React$Component);

	    function SpreadSheets(props) {
	        _classCallCheck(this, SpreadSheets);

	        //need reRender when didMount
	        var _this = _possibleConstructorReturn(this, (SpreadSheets.__proto__ || Object.getPrototypeOf(SpreadSheets)).call(this, props));

	        _this.state = { needFirstRender: true };
	        _this.isEmitSpread = false;
	        return _this;
	    }

	    _createClass(SpreadSheets, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            //create spreadJS
	            var realChildren = _utils2.default.filterReallyChild(this.props.children, _utils2.default.sheetTagName);
	            var defaultSheetCount = realChildren.length ? 0 : 1;
	            this.spread = _utils2.default.createSpread(this.refs.spreadJs, defaultSheetCount);
	            //change props first time
	            var changes = _utils2.default.watchChanges({}, this.props);
	            _utils2.default.changeWorkBookByAPI(this.spread, changes);
	            //bind Event
	            _utils2.default.bindEvent(this.spread, this.props);
	            //reRender
	            this.setState({
	                needFirstRender: false
	            });
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            if (this.state.needFirstRender === false && this.isEmitSpread === false) {
	                //return the workbook instance
	                if (this.props && this.props.workbookInitialized) {
	                    this.props.workbookInitialized(this.spread);
	                }
	                this.isEmitSpread = true;
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var oldChildrenCount = _utils2.default.filterReallyChild(this.props.children, _utils2.default.sheetTagName).length;
	            var nextChildrenCount = _utils2.default.filterReallyChild(nextProps.children, _utils2.default.sheetTagName).length;
	            if (oldChildrenCount === 0 && nextChildrenCount > 0) {
	                //remove all sheet
	                _utils2.default.removeAllSheet(this.spread);
	            } else if (nextChildrenCount === 0 && oldChildrenCount > 0) {
	                //add some sheet
	                _utils2.default.addSheet(this.spread, 0);
	            }
	            //change props
	            var changes = _utils2.default.watchChanges(this.props, nextProps);
	            _utils2.default.changeWorkBookByAPI(this.spread, changes);
	        }
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var otherParameters = this.spread ? { spread: this.spread } : {};
	            return _utils2.default.getNewReallyChildren(this.props.children, _utils2.default.sheetTagName, otherParameters);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.spread.destroy();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _reactImport2.default.createElement(
	                'div',
	                { ref: 'spreadJs', className: "container" + (this.props.hostClass || ''), style: _utils2.default.assign({ width: '100%', height: '100%' }, this.props.hostStyle) },
	                this.renderChildren(this.props.children)
	            );
	        }
	    }]);

	    return SpreadSheets;
	}(_reactImport2.default.Component);

	exports.default = SpreadSheets;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var React = window.React;
	exports.default = React;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactImport = __webpack_require__(2);

	var _reactImport2 = _interopRequireDefault(_reactImport);

	var _spreadJSImport = __webpack_require__(4);

	var _spreadJSImport2 = _interopRequireDefault(_spreadJSImport);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var utils = {

	    defaultRowCount: 200,

	    defaultColumnCount: 20,

	    workBookTagName: 'SpreadSheets',

	    sheetTagName: 'Worksheet',

	    columnTagName: 'Column',

	    createSpread: function createSpread(host, sheetCount) {
	        return new _spreadJSImport2.default.Spread.Sheets.Workbook(host, { sheetCount: sheetCount });
	    },

	    addSheet: function addSheet(spread, index, columnCount) {
	        var sheet = new _spreadJSImport2.default.Spread.Sheets.Worksheet();
	        if (columnCount === 0) {
	            sheet.setColumnCount(0);
	        }
	        spread.addSheet(index, sheet);
	        return sheet;
	    },

	    removeAllSheet: function removeAllSheet(spread) {
	        for (var i = 0; i < spread.sheets.length; i++) {
	            spread.removeSheet(0);
	        }
	    },

	    removeSheet: function removeSheet(spread, sheet) {
	        var sheetName = sheet.name();
	        var sheetIndex = spread.getSheetIndex(sheetName);
	        spread.removeSheet(sheetIndex);
	        return null;
	    },

	    addColumn: function addColumn(sheet, index) {
	        var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

	        sheet.addColumns(index, count);
	    },

	    removeColumn: function removeColumn(sheet, index) {
	        var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

	        sheet.deleteColumns(index, count);
	    },

	    removeAllColumn: function removeAllColumn(sheet) {
	        sheet.setColumnCount(0);
	    },

	    bindEvent: function bindEvent(spread, props) {
	        var customEventNameSpace = '.react';
	        var events = ['ValidationError', 'CellClick', 'CellDoubleClick', 'EnterCell', 'LeaveCell', 'ValueChanged', 'TopRowChanged', 'LeftColumnChanged', 'InvalidOperation', 'RangeFiltering', 'RangeFiltered', 'TableFiltering', 'TableFiltered', 'RangeSorting', 'RangeSorted', 'ClipboardChanging', 'ClipboardChanged', 'ClipboardPasting', 'ClipboardPasted', 'ColumnWidthChanging', 'ColumnWidthChanged', 'RowHeightChanging', 'RowHeightChanged', 'DragDropBlock', 'DragDropBlockCompleted', 'DragFillBlock', 'DragFillBlockCompleted', 'EditStarting', 'EditChange', 'EditEnding', 'EditEnd', 'EditEnded', 'RangeGroupStateChanging', 'RangeGroupStateChanged', 'SelectionChanging', 'SelectionChanged', 'SheetTabClick', 'SheetTabDoubleClick', 'SheetNameChanging', 'SheetNameChanged', 'UserZooming', 'UserFormulaEntered', 'CellChanged', 'ColumnChanged', 'RowChanged', 'ActiveSheetChanging', 'ActiveSheetChanged', 'SparklineChanged', 'RangeChanged', 'ButtonClicked', 'EditorStatusChanged', 'FloatingObjectChanged', 'FloatingObjectSelectionChanged', 'PictureChanged', 'FloatingObjectRemoving', 'FloatingObjectRemoved', 'PictureSelectionChanged', 'FloatingObjectLoaded', 'TouchToolStripOpening', 'CommentChanged', 'CommentRemoving', 'CommentRemoved', 'SlicerChanged'];
	        events.forEach(function (event) {
	            spread.bind(event + customEventNameSpace, function (event, data) {
	                var eventType = event.type;
	                var camelCaseEvent = eventType[0].toLowerCase() + eventType.substr(1);
	                var propsEvent = props[camelCaseEvent];
	                if (propsEvent) {
	                    propsEvent(event, data);
	                }
	            });
	        });
	    },


	    watchChanges: function watchChanges(oldProps, nextProps) {
	        var changes = {};
	        for (var oldKey in oldProps) {
	            if (oldProps.hasOwnProperty(oldKey)) {
	                if (oldProps[oldKey] !== nextProps[oldKey]) {
	                    changes[oldKey] = nextProps[oldKey];
	                }
	            }
	        }
	        for (var nextKey in nextProps) {
	            if (nextProps.hasOwnProperty(nextKey)) {
	                if (oldProps[nextKey] !== nextProps[nextKey]) {
	                    changes[nextKey] = nextProps[nextKey];
	                }
	            }
	        }
	        return changes;
	    },

	    changeWorkBookByAPI: function changeWorkBookByAPI(spread, changes) {

	        spread.suspendEvent();
	        spread.suspendPaint();
	        for (var changeKey in changes) {
	            if (!changes.hasOwnProperty(changeKey)) {
	                continue;
	            }
	            switch (changeKey) {
	                case 'name':
	                    spread.name = changes[changeKey];
	                    break;
	                case 'allowUserZoom':
	                case 'allowUserResize':
	                case 'tabStripVisible':
	                case 'tabEditable':
	                case 'newTabVisible':
	                case 'allowUserEditFormula':
	                case 'autoFitType':
	                case 'allowUserDragFill':
	                case 'allowUserDragDrop':
	                case 'highlightInvalidData':
	                case 'referenceStyle':
	                case 'backColor':
	                case 'grayAreaBackColor':
	                case 'backgroundImage':
	                case 'backgroundImageLayout':
	                case 'showVerticalScrollbar':
	                case 'showHorizontalScrollbar':
	                case 'showScrollTip':
	                case 'showResizeTip':
	                case 'showDragDropTip':
	                case 'showDragFillTip':
	                    spread.options[changeKey] = changes[changeKey];
	                    break;
	                default:
	                    break;
	            }
	        }
	        spread.resumePaint();
	        spread.resumeEvent();
	    },

	    changeWorkSheetByAPI: function changeWorkSheetByAPI(Worksheet, changes) {
	        if (!Worksheet) {
	            return;
	        }

	        Worksheet.suspendPaint();
	        Worksheet.suspendEvent();
	        for (var changeKey in changes) {
	            if (!changes.hasOwnProperty(changeKey)) {
	                continue;
	            }
	            var value = changes[changeKey];
	            switch (changeKey) {
	                case 'frozenColumnCount':
	                case 'frozenRowCount':
	                case 'frozenTrailingColumnCount':
	                case 'frozenTrailingRowCount':
	                case 'zoom':
	                case 'selectionPolicy':
	                case 'selectionUnit':
	                    Worksheet[changeKey](parseInt(value));
	                    break;
	                case 'name':
	                case 'currentTheme':
	                case 'showRowOutline':
	                case 'showColumnOutline':
	                    Worksheet[changeKey](value);
	                    break;
	                case 'autoGenerateColumns':
	                    Worksheet[changeKey] = value;
	                    break;
	                case 'allowCellOverflow':
	                case 'frozenlineColor':
	                case 'sheetTabColor':
	                case 'clipBoardOptions':
	                case 'rowHeaderAutoText':
	                case 'rowHeaderVisible':
	                case 'isProtected':
	                case 'selectionBackColor':
	                case 'selectionBorderColor':
	                    Worksheet.options[changeKey] = value;
	                    break;
	                case 'rowHeaderAutoTextIndex':
	                    Worksheet.options[changeKey] = parseInt(value);
	                    break;
	                case 'dataSource':
	                    Worksheet.setDataSource(value);
	                    break;
	                case 'rowCount':
	                    Worksheet.setRowCount(parseInt(value));
	                    break;
	                case 'colCount':
	                    Worksheet.setColumnCount(parseInt(value));
	                    break;
	                case 'defaultStyle':
	                    Worksheet.setDefaultStyle(value);
	                    break;
	                case 'columnHeaderVisible':
	                    Worksheet.options.colHeaderVisible = value;
	                    break;
	                case 'columnHeaderAutoText':
	                    Worksheet.options.colHeaderAutoText = value;
	                    break;
	                case 'columnHeaderAutoTextIndex':
	                    Worksheet.options.colHeaderAutoTextIndex = parseInt(value);
	                    break;
	                default:
	                    break;
	            }
	        }
	        Worksheet.resumeEvent();
	        Worksheet.resumePaint();
	    },

	    changeWorkSheetAfterInitColumnByAPI: function changeWorkSheetAfterInitColumnByAPI(Worksheet, changes) {
	        if (!Worksheet) {
	            return;
	        }

	        Worksheet.suspendPaint();
	        Worksheet.suspendEvent();
	        for (var changeKey in changes) {
	            if (!changes.hasOwnProperty(changeKey)) {
	                continue;
	            }
	            var value = changes[changeKey];
	            switch (changeKey) {
	                case 'rowOutlineInfo':
	                    Worksheet.rowOutlines.ungroup();
	                    value.forEach(function (item) {
	                        Worksheet.rowOutlines.group(item.index, item.count);
	                    });
	                    break;
	                case 'columnOutlineInfo':
	                    Worksheet.columnOutlines.ungroup();
	                    value.forEach(function (item) {
	                        if (Worksheet.getColumnCount() > item.index) {
	                            Worksheet.columnOutlines.group(item.index, item.count);
	                        }
	                    });
	                    break;

	                default:
	                    break;
	            }
	        }
	        Worksheet.resumeEvent();
	        Worksheet.resumePaint();
	    },

	    changeColumnByAPI: function changeColumnByAPI(sheet, index, changes) {
	        if (!sheet) {
	            return;
	        }

	        sheet.suspendPaint();
	        sheet.suspendEvent();
	        for (var changeKey in changes) {
	            if (!changes.hasOwnProperty(changeKey)) {
	                continue;
	            }
	            var newValue = changes[changeKey];
	            switch (changeKey) {
	                case 'width':
	                    sheet.setColumnWidth(index, newValue);
	                    break;
	                case 'visible':
	                    sheet.setColumnVisible(index, newValue);
	                    break;
	                case 'resizable':
	                    sheet.setColumnResizable(index, newValue);
	                    break;
	                case 'autoFit':
	                    if (newValue) {
	                        sheet.autoFitColumn(index);
	                    }
	                    break;
	                case 'style':
	                    sheet.setStyle(-1, index, newValue);
	                    break;
	                case 'headerStyle':
	                    sheet.setStyle(-1, index, newValue, _spreadJSImport2.default.Spread.Sheets.SheetArea.colHeader);
	                    break;
	                case 'cellType':
	                    sheet.setCellType(-1, index, newValue);
	                    break;
	                case 'formatter':
	                    sheet.setFormatter(-1, index, newValue, _spreadJSImport2.default.Spread.Sheets.SheetArea.viewport);
	                    break;
	                case 'dataField':
	                    sheet.bindColumn(index, {
	                        name: newValue,
	                        displayName: changes.headerText
	                    });
	                    /**
	                     * beacuse bindColumn will change some column information
	                     * so we need reset some information to column
	                     */
	                    if (changes['width'] !== undefined) {
	                        sheet.setColumnWidth(index, changes['width']);
	                    }
	                    if (changes['visible'] !== undefined) {
	                        sheet.setColumnVisible(index, changes['visible']);
	                    }
	                    if (changes['resizable'] !== undefined) {
	                        sheet.setColumnResizable(index, changes['resizable']);
	                    }
	                    break;
	                case 'headerText':
	                    if (changes.dataField) {
	                        sheet.bindColumn(index, {
	                            name: changes.dataField,
	                            displayName: newValue
	                        });
	                        /**
	                         * beacuse bindColumn will change some column information
	                         * so we need reset some information to column
	                         */
	                        if (changes['width'] !== undefined) {
	                            sheet.setColumnWidth(index, changes['width']);
	                        }
	                        if (changes['visible'] !== undefined) {
	                            sheet.setColumnVisible(index, changes['visible']);
	                        }
	                        if (changes['resizable'] !== undefined) {
	                            sheet.setColumnResizable(index, changes['resizable']);
	                        }
	                    }
	                    break;
	                default:
	                    break;
	            }
	        }
	        sheet.resumeEvent();
	        sheet.resumePaint();
	    },

	    filterReallyChild: function filterReallyChild() {
	        var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	        var childTypeName = arguments[1];

	        var temPropsChildren = _reactImport2.default.Children.map(children, function (child) {
	            if (child.type && child.type.displayName === childTypeName) {
	                return child;
	            }
	        });
	        return temPropsChildren || [];
	    },

	    getNewReallyChildren: function getNewReallyChildren(children, childTypeName, otherParameters) {
	        var temPropsChildren = this.filterReallyChild(children, childTypeName);
	        return _reactImport2.default.Children.map(temPropsChildren, function (child, index) {
	            if (child) {
	                return _reactImport2.default.cloneElement(child, utils.assign({ index: index }, otherParameters));
	            }
	        });
	    },
	    assign: function assign() {
	        var obj1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	        var obj2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	        var result = {};
	        for (var key in obj1) {
	            if (obj1.hasOwnProperty(key)) {
	                result[key] = obj1[key];
	            }
	        }
	        for (var _key in obj2) {
	            if (obj2.hasOwnProperty(_key)) {
	                result[_key] = obj2[_key];
	            }
	        }
	        return result;
	    }
	};

	exports.default = utils;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var GC = window.GC;
	exports.default = GC;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactImport = __webpack_require__(2);

	var _reactImport2 = _interopRequireDefault(_reactImport);

	var _utils = __webpack_require__(3);

	var _utils2 = _interopRequireDefault(_utils);

	var _columnManager = __webpack_require__(6);

	var _columnManager2 = _interopRequireDefault(_columnManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultColumnCount = _utils2.default.defaultColumnCount,
	    defaultRowCount = _utils2.default.defaultRowCount;

	var Worksheet = function (_React$Component) {
	    _inherits(Worksheet, _React$Component);

	    function Worksheet(props) {
	        _classCallCheck(this, Worksheet);

	        var _this = _possibleConstructorReturn(this, (Worksheet.__proto__ || Object.getPrototypeOf(Worksheet)).call(this, props));

	        _this.isFirst = true;
	        _this.reallyChildCount = null;
	        //need reRender when didMount
	        _this.state = { needFirestRender: true };
	        _this.columnIndexManager = new _columnManager2.default();
	        _this.changes = null;
	        return _this;
	    }

	    _createClass(Worksheet, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            //reRender
	            this.setState({
	                needFirestRender: false
	            });
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps) {
	            if (this.isFirst) {
	                //create sheet
	                var realChildren = _utils2.default.filterReallyChild(this.props.children, _utils2.default.columnTagName);
	                var columnCount = realChildren.length ? 0 : null;
	                this.sheet = _utils2.default.addSheet(nextProps.spread, nextProps.index, columnCount);
	                //change props first time
	                this.changes = _utils2.default.watchChanges({}, nextProps);
	                _utils2.default.changeWorkSheetByAPI(this.sheet, this.changes);
	                if (columnCount === 0) {
	                    this.removeAllColumn(nextProps);
	                }
	                this.isFirst = false;
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            if (this.changes) {
	                _utils2.default.changeWorkSheetAfterInitColumnByAPI(this.sheet, this.changes);
	                this.changes = null;
	            }
	            //reSetDataSource
	            if (this.needReSetDataSource) {
	                this.sheet.setDataSource(null);
	                this.sheet.setDataSource(this.props.dataSource);
	                this.needReSetDataSource = false;
	            }
	            this.columnIndexManager.setColumnCount(this.reallyChildCount);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.changes = _utils2.default.watchChanges(this.props, nextProps);
	            _utils2.default.changeWorkSheetByAPI(this.sheet, this.changes);
	            this.changeColumnRowCount(nextProps);
	        }
	    }, {
	        key: 'changeColumnRowCount',
	        value: function changeColumnRowCount(nextProps) {
	            var oldChildrenCount = _utils2.default.filterReallyChild(this.props.children, _utils2.default.columnTagName).length;
	            var nextChildrenCount = _utils2.default.filterReallyChild(nextProps.children, _utils2.default.columnTagName).length;
	            if (nextChildrenCount > 0) {
	                if (this.props.dataSource === null && nextProps.dataSource !== null) {
	                    this.sheet.setColumnCount(nextChildrenCount);
	                } else if (this.props.dataSource !== null && nextProps.dataSource === null) {
	                    this.sheet.setRowCount(nextProps.rowCount || defaultRowCount);
	                }
	            } else {
	                if (this.props.dataSource !== null && nextProps.dataSource === null) {
	                    this.sheet.setRowCount(nextProps.rowCount || defaultRowCount);
	                    this.sheet.setColumnCount(nextProps.colCount || defaultColumnCount);
	                }
	            }

	            if (oldChildrenCount === 0 && nextChildrenCount > 0) {
	                //remove all sheet
	                this.removeAllColumn(nextProps);
	            } else if (oldChildrenCount > 0 && nextChildrenCount === 0) {
	                if (!nextProps.dataSource) {
	                    //add some sheet
	                    _utils2.default.addColumn(this.sheet, 0, nextProps.colCount || defaultColumnCount); //200
	                } else {
	                    this.needReSetDataSource = true;
	                }
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            //remove sheet
	            if (this.sheet.name()) {
	                this.sheet = _utils2.default.removeSheet(this.props.spread, this.sheet);
	            }
	            this.isFirst = true;
	        }
	    }, {
	        key: 'removeAllColumn',
	        value: function removeAllColumn(nextProps) {
	            _utils2.default.removeAllColumn(this.sheet);
	            var beforFrozeColumnCount = nextProps.frozenColumnCount;
	            if (beforFrozeColumnCount) {
	                this.sheet.frozenColumnCount(parseInt(beforFrozeColumnCount));
	            }
	        }
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var otherParameters = this.sheet ? { sheet: this.sheet, columnIndexManager: this.columnIndexManager } : {};
	            var child = _utils2.default.getNewReallyChildren(this.props.children, _utils2.default.columnTagName, otherParameters);
	            this.reallyChildCount = child.length;
	            return child;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _reactImport2.default.createElement(
	                'div',
	                null,
	                this.renderChildren()
	            );
	        }
	    }]);

	    return Worksheet;
	}(_reactImport2.default.Component);

	Worksheet.displayName = _utils2.default.sheetTagName;
	exports.default = Worksheet;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var columnIndexManager = function () {
	    function columnIndexManager() {
	        _classCallCheck(this, columnIndexManager);
	    }

	    _createClass(columnIndexManager, [{
	        key: 'setColumnCount',
	        value: function setColumnCount(count) {
	            var columnIndexArray = [];
	            for (var i = 0; i < count; i++) {
	                columnIndexArray.push(i);
	            }
	            this.columnIndexArray = columnIndexArray;
	        }
	    }, {
	        key: 'deleteColumn',
	        value: function deleteColumn(index) {
	            this.columnIndexArray.splice(index, 0, '');
	        }
	    }, {
	        key: 'getRealyColumnIndex',
	        value: function getRealyColumnIndex(index) {

	            if (index < this.columnIndexArray.length) {
	                return this.columnIndexArray[index];
	            }
	        }
	    }]);

	    return columnIndexManager;
	}();

	exports.default = columnIndexManager;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactImport = __webpack_require__(2);

	var _reactImport2 = _interopRequireDefault(_reactImport);

	var _utils = __webpack_require__(3);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Column = function (_React$Component) {
	    _inherits(Column, _React$Component);

	    function Column(props) {
	        _classCallCheck(this, Column);

	        var _this = _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).call(this, props));

	        _this.isFirst = true;
	        _this.state = { needFirestRender: true };
	        return _this;
	    }

	    _createClass(Column, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.sheet) {
	                this.initColumn(this.props);
	            } else {
	                this.setState({
	                    needFirestRender: false
	                });
	            }
	        }
	    }, {
	        key: 'initColumn',
	        value: function initColumn(props) {
	            var sheet = props.sheet,
	                index = props.index;
	            //add column

	            _utils2.default.addColumn(props.sheet, props.index);
	            //change props first time
	            var changes = _utils2.default.watchChanges({}, props);
	            _utils2.default.changeColumnByAPI(sheet, index, changes);
	            this.isFirst = false;
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps) {
	            if (this.isFirst) {
	                this.initColumn(nextProps);
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            //change props
	            var _props = this.props,
	                sheet = _props.sheet,
	                index = _props.index;

	            var changes = _utils2.default.watchChanges(this.props, nextProps);
	            _utils2.default.changeColumnByAPI(sheet, index, changes);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            var _props2 = this.props,
	                sheet = _props2.sheet,
	                index = _props2.index,
	                columnIndexManager = _props2.columnIndexManager;

	            if (sheet && sheet.name()) {
	                //remove column by index
	                var reallyIndex = columnIndexManager.getRealyColumnIndex(index);
	                _utils2.default.removeColumn(sheet, reallyIndex);
	                columnIndexManager.deleteColumn(index);
	                this.isFirst = true;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _reactImport2.default.createElement('div', null);
	        }
	    }]);

	    return Column;
	}(_reactImport2.default.Component);

	Column.displayName = _utils2.default.columnTagName;
	exports.default = Column;

/***/ })
/******/ ])
});
;