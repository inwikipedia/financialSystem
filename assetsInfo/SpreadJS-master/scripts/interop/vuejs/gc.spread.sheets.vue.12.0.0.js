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
	exports.GCVUE = undefined;

	var _gcSpreadSheets = __webpack_require__(1);

	var _gcSpreadSheets2 = _interopRequireDefault(_gcSpreadSheets);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.GCVUE = _gcSpreadSheets2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _vueNameSpace = __webpack_require__(2);

	var _vueNameSpace2 = _interopRequireDefault(_vueNameSpace);

	var _gcSpread = __webpack_require__(3);

	var _gcSpread2 = _interopRequireDefault(_gcSpread);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SPREAD_TAG_NAME = 'gc-spread-sheets';
	var WORKSHEET_TAG_NAME = 'gc-worksheet';
	var COLUMN_TAG_NAME = 'gc-column';
	var SHEET_CLASS = 'gc-vue-sheet';
	var COLUMN_CLASS = 'gc-vue-column';
	var DEFUALT_ROWCOUNT = 200;
	var DEFUALT_COLCOUNT = 20;
	var GC_BUS = new _vueNameSpace2.default();

	var SPREAD_PROP_LIST = ["hostStyle", "hostClass", "name", "allowUserZoom", "allowUserResize", "tabStripVisible", "tabEditable", "newTabVisible", "allowUserEditFormula", "autoFitType", "allowUserDragFill", "allowUserDragDrop", "highlightInvalidData", "referenceStyle", "backColor", "grayAreaBackColor", "backgroundImage", "backgroundImageLayout", "showVerticalScrollbar", "showHorizontalScrollbar", "showScrollTip", "showResizeTip", "showDragDropTip", "showDragFillTip"];
	//setSpreadOptions is a function name  defined in SPREAD_TAG_NAME  component
	var SPREAD_WATCH_PROP_OBJECT = _gcSpread2.default.createWatchData(SPREAD_PROP_LIST, 'setSpreadOptions');

	var SHEET_PROP_LIST = ["name", "frozenColumnCount", "frozenRowCount", "frozenTrailingColumnCount", "frozenTrailingRowCount", "allowCellOverflow", "frozenlineColor", "sheetTabColor", "selectionPolicy", "selectionUnit", "zoom", "currentTheme", "clipBoardOptions", "rowHeaderVisible", "columnHeaderVisible", "rowHeaderAutoText", "columnHeaderAutoText", "rowHeaderAutoTextIndex", "columnHeaderAutoTextIndex", "isProtected", "showRowOutline", "showColumnOutline", "selectionBackColor", "selectionBorderColor", "defaultStyle", "rowOutlineInfo", "columnOutlineInfo", "autoGenerateColumns"];
	//setSheetOptions is a function name  defined in WORKSHEET_TAG_NAME  component
	var SHEET_WATCH_PROP_OBJECT = _gcSpread2.default.createWatchData(SHEET_PROP_LIST, 'setSheetOptions');

	var COLUMN_PROP_LIST = ["dataField", "headerText", "width", "visible", "resizable", "autoFit", "columnStyle", "headerStyle", "cellType", "formatter"];
	//setColumnOptions is a function name  defined in COLUMN_TAG_NAME  component
	var COLUMN_WATCH_PROP_OBJECT = _gcSpread2.default.createWatchData(COLUMN_PROP_LIST, 'setColumnOptions');

	/**
	 * The object 'SPREAD_WATCH_PROP_OBJECT' , 'SHEET_WATCH_PROP_OBJECT', 'COLUMN_WATCH_PROP_OBJECT' is used for each component watching data
	 * If there are extra watch propertys , use Object.assign() to extend the object.
	 * It is can be instead of by watch the all property declared in each component.
	 */

	_vueNameSpace2.default.component(SPREAD_TAG_NAME, {
	    template: '<div v-bind="{class : hostClass , style : hostStyle}"><slot slot-scope="props"></slot></div>',
	    props: SPREAD_PROP_LIST,
	    data: function data() {
	        return {
	            spread: null,
	            sheetCount: 0,
	            isInit: false
	        };
	    },
	    computed: {},
	    mounted: function mounted() {
	        var dom = this.$el;
	        var sheetTagcount = this.getSheetTagCount();
	        var sheetCount = void 0;
	        if (sheetTagcount > 0) {
	            sheetCount = 0;
	        } else {
	            sheetCount = 1;
	        }
	        var spread = _gcSpread2.default.createWorkBook(dom, sheetCount);
	        this.spread = spread;
	        this.initSpread();
	        this.bindSpreadEvent(spread);
	    },

	    methods: {
	        getSheetTagCount: function getSheetTagCount() {
	            return this.$el.getElementsByClassName(SHEET_CLASS).length;
	        },
	        bindSpreadEvent: function bindSpreadEvent(spread) {
	            var self = this;
	            var events = ['ValidationError', 'CellClick', 'CellDoubleClick', 'EnterCell', 'LeaveCell', 'ValueChanged', 'TopRowChanged', 'LeftColumnChanged', 'InvalidOperation', 'RangeFiltering', 'RangeFiltered', 'TableFiltering', 'TableFiltered', 'RangeSorting', 'RangeSorted', 'ClipboardChanging', 'ClipboardChanged', 'ClipboardPasting', 'ClipboardPasted', 'ColumnWidthChanging', 'ColumnWidthChanged', 'RowHeightChanging', 'RowHeightChanged', 'DragDropBlock', 'DragDropBlockCompleted', 'DragFillBlock', 'DragFillBlockCompleted', 'EditStarting', 'EditChange', 'EditEnding', 'EditEnd', 'EditEnded', 'RangeGroupStateChanging', 'RangeGroupStateChanged', 'SelectionChanging', 'SelectionChanged', 'SheetTabClick', 'SheetTabDoubleClick', 'SheetNameChanging', 'SheetNameChanged', 'UserZooming', 'UserFormulaEntered', 'CellChanged', 'ColumnChanged', 'RowChanged', 'ActiveSheetChanging', 'ActiveSheetChanged', 'SparklineChanged', 'RangeChanged', 'ButtonClicked', 'EditorStatusChanged', 'FloatingObjectChanged', 'FloatingObjectSelectionChanged', 'PictureChanged', 'FloatingObjectRemoving', 'FloatingObjectRemoved', 'PictureSelectionChanged', 'FloatingObjectLoaded', 'TouchToolStripOpening', 'CommentChanged', 'CommentRemoving', 'CommentRemoved', 'SlicerChanged'];
	            events.forEach(function (event) {
	                _gcSpread2.default.bindEvent(spread, event, function () {
	                    var args = arguments;
	                    var exportEventName = event.charAt(0).toLocaleLowerCase() + event.substr(1);
	                    self.$emit(exportEventName, args[0], args[1]);
	                });
	            });
	        },
	        getSheetCount: function getSheetCount() {
	            var count = 0;
	            var len = this.$children.length;
	            for (var i = 0; i < len; i++) {
	                if (this.$children[i].$options.name === WORKSHEET_TAG_NAME) {
	                    count++;
	                }
	            }
	            return count;
	        },
	        setSpreadOptions: function setSpreadOptions(attr, value) {
	            var spread = this.spread;
	            switch (attr) {
	                case 'name':
	                    spread.name = value;
	                    break;
	                case 'allowUserZoom':
	                case 'allowUserResize':
	                case 'tabStripVisible':
	                case 'tabEditable':
	                case 'newTabVisible':
	                case 'allowUserEditFormula':
	                case 'allowUserDragFill':
	                case 'allowUserDragDrop':
	                case 'highlightInvalidData':
	                case 'showVerticalScrollbar':
	                case 'showHorizontalScrollbar':
	                case 'showDragDropTip':
	                case 'showDragFillTip':
	                    _gcSpread2.default.setSpreadOptions(spread, attr, !!value);
	                    break;
	                case 'autoFitType':
	                case 'referenceStyle':
	                case 'backColor':
	                case 'grayAreaBackColor':
	                case 'backgroundImage':
	                case 'backgroundImageLayout':
	                case 'showScrollTip':
	                case 'showResizeTip':
	                    _gcSpread2.default.setSpreadOptions(spread, attr, value);
	                    break;
	            }
	        },

	        initSpread: function initSpread() {
	            var len = SPREAD_PROP_LIST.length;
	            for (var i = 0; i < len; i++) {
	                if (this[SPREAD_PROP_LIST[i]] !== undefined) {
	                    this.setSpreadOptions(SPREAD_PROP_LIST[i], this[SPREAD_PROP_LIST[i]]);
	                }
	            }
	            this.$nextTick(function () {
	                if (!this.isInit) {
	                    this.$emit("workbookInitialized", this.spread);
	                    this.isInit = true;
	                }
	            });
	        }
	    },
	    destroyed: function destroyed() {
	        _gcSpread2.default.destroyedSpread(this.spread);
	    },

	    watch: _gcSpread2.default.extendObejct({}, SPREAD_WATCH_PROP_OBJECT)
	});

	_vueNameSpace2.default.component(WORKSHEET_TAG_NAME, {
	    template: "<div class='" + SHEET_CLASS + "'><slot></slot></div>",
	    props: SHEET_PROP_LIST.concat(["dataSource", "rowCount", "colCount"]),
	    data: function data() {
	        return {
	            sheet: null,
	            sheetName: undefined
	        };
	    },
	    computed: {
	        spread: function spread() {
	            return this.$parent.spread;
	        }
	    },
	    methods: {
	        getColCount: function getColCount() {
	            var childrenLength = this.$children.length,
	                colCount = this.colCount,
	                rsCount = void 0;
	            if (childrenLength > 0 && colCount !== undefined) {
	                rsCount = this.colCount - childrenLength;
	            } else if (childrenLength > 0 && colCount === undefined) {
	                rsCount = childrenLength;
	            } else if (childrenLength === 0 && colCount === undefined) {
	                rsCount = DEFUALT_COLCOUNT;
	            } else if (childrenLength === 0) {
	                rsCount = this.colCount;
	            }
	            return rsCount;
	        },
	        initSheet: function initSheet() {
	            if (!this.spread) {
	                return;
	            }
	            var index = this.getSheetIndex();
	            this.sheet = _gcSpread2.default.addSheet(this.spread, this.name, index);
	            // sheet name may set failed when the name be used
	            this.sheetName = _gcSpread2.default.getSheetName(this.sheet);
	            this.initSheetOptions();
	        },

	        //get the index of component
	        getSheetIndex: function getSheetIndex() {
	            var index = 0,
	                el = this.$parent.$el,
	                selfWrap = this.$el;
	            var siblings = el.getElementsByClassName(SHEET_CLASS);
	            for (var sibling in siblings) {
	                if (siblings[sibling] === selfWrap) {
	                    break;
	                }
	                index++;
	            }
	            return index;
	        },
	        initSheetOptions: function initSheetOptions() {
	            var len = SHEET_PROP_LIST.length,
	                attr = void 0;
	            for (var i = 0; i < len; i++) {
	                attr = SHEET_PROP_LIST[i];
	                if (this[attr] !== undefined) {
	                    this.setSheetOptions(attr, this[attr]);
	                }
	            }
	            this.reSizeSheet();
	            this.$nextTick(function () {
	                this.setSheetOptionsAfterSheetInit();
	            });
	            // this.setOutlineInfoAfterSheetInit();
	        },
	        setSheetOptionsAfterSheetInit: function setSheetOptionsAfterSheetInit() {
	            if (this.rowOutlineInfo) {
	                _gcSpread2.default.setRowOutlineInfo(this.sheet, this.rowOutlineInfo);
	            }
	            if (this.columnOutlineInfo) {
	                _gcSpread2.default.setColumnOutlineInfo(this.sheet, this.columnOutlineInfo);
	            }
	            if (this.frozenColumnCount) {
	                _gcSpread2.default.setSheetAttribute(this.sheet, "frozenColumnCount", parseInt(this.frozenColumnCount, 10));
	            }
	        },
	        setSheetOptions: function setSheetOptions(attr, value) {
	            var sheet = this.sheet;
	            switch (attr) {
	                case 'name':
	                    // sheet name is unique in workbook ,if use set a name has been used ,it will throw NotSupportException
	                    _gcSpread2.default.setSheetAttribute(sheet, attr, value);
	                    this.sheetName = value;
	                    break;
	                case 'frozenColumnCount':
	                case 'frozenRowCount':
	                case 'frozenTrailingColumnCount':
	                case 'frozenTrailingRowCount':
	                    _gcSpread2.default.setSheetAttribute(sheet, attr, parseInt(value, 10));
	                    break;
	                case 'selectionPolicy':
	                case 'selectionUnit':
	                case 'zoom':
	                case 'currentTheme':
	                case 'showRowOutline':
	                case 'showColumnOutline':

	                    _gcSpread2.default.setSheetAttribute(sheet, attr, value);
	                    break;
	                case 'autoGenerateColumns':
	                    _gcSpread2.default.setSheetAttributeData(sheet, attr, value);
	                    break;
	                case 'isProtected':
	                case 'allowCellOverflow':
	                case 'frozenlineColor':
	                case 'sheetTabColor':
	                case 'clipBoardOptions':
	                case 'rowHeaderVisible':
	                case 'selectionBackColor':
	                case 'selectionBorderColor':
	                case 'rowHeaderAutoText':
	                case 'rowHeaderAutoTextIndex':
	                    _gcSpread2.default.setSheetOptions(sheet, attr, value);
	                    break;
	                case 'columnHeaderAutoTextIndex':
	                    _gcSpread2.default.setSheetOptions(sheet, 'colHeaderAutoTextIndex', value);
	                    break;
	                case 'columnHeaderVisible':
	                    _gcSpread2.default.setSheetOptions(sheet, 'colHeaderVisible', value);
	                    break;
	                case 'columnHeaderAutoText':
	                    _gcSpread2.default.setSheetOptions(sheet, 'colHeaderAutoText', value);
	                    break;
	                case 'defaultStyle':
	                    _gcSpread2.default.setSheetDefaultStyle(sheet, value);
	                    break;
	                case 'rowOutlineInfo':
	                    _gcSpread2.default.setRowOutlineInfo(sheet, value);
	                    break;
	                case 'columnOutlineInfo':
	                    _gcSpread2.default.setColumnOutlineInfo(sheet, value);
	                    break;
	            }
	        },
	        reSizeSheet: function reSizeSheet() {
	            var caseText = '',
	                dataSource = this.dataSource,
	                columnChildCount = this.$children.length,
	                colCount = this.colCount;
	            caseText += dataSource === null || dataSource === undefined ? '0' : '1';
	            caseText += columnChildCount > 0 ? '1' : '0';
	            caseText += colCount > 0 ? '1' : '0';
	            _gcSpread2.default.setDataSource(this.sheet, null, true);
	            /**
	             * caseText   dataSource(0,1)+ columnChildCount(0,1) + colCount(0,1)
	             * The string is Connect by three part : has dataSource or not , has column tag or not , has defined colCountor not
	             * The result is Octal numbers[use as string below]
	             */
	            switch (caseText) {
	                case '000':
	                case '001':
	                    _gcSpread2.default.setColCount(this.sheet, this.colCount || DEFUALT_COLCOUNT);
	                    _gcSpread2.default.setRowCount(this.sheet, this.rowCount || DEFUALT_ROWCOUNT);
	                    break;
	                case '010':
	                case '011':
	                    _gcSpread2.default.setColCount(this.sheet, 0);
	                    _gcSpread2.default.setRowCount(this.sheet, this.rowCount || DEFUALT_ROWCOUNT);
	                    break;
	                case '100':
	                case '101':
	                    _gcSpread2.default.setDataSource(this.sheet, dataSource, true);
	                    break;
	                case '110':
	                case '111':
	                    _gcSpread2.default.setDataSource(this.sheet, dataSource, false);
	                    _gcSpread2.default.setColCount(this.sheet, 0);
	                    break;
	            }
	        },
	        dataSourceChangeHandle: function dataSourceChangeHandle(newData, oldData) {
	            var childrenLength = this.$children.length;
	            if (oldData && !newData) {
	                _gcSpread2.default.setDataSource(this.sheet, null, true);
	                _gcSpread2.default.setRowCount(this.sheet, this.rowCount || DEFUALT_ROWCOUNT);
	                _gcSpread2.default.setColCount(this.sheet, childrenLength || this.colCount || DEFUALT_COLCOUNT);
	            } else if (oldData) {
	                _gcSpread2.default.setDataSource(this.sheet, newData, true);
	            } else if (newData) {
	                _gcSpread2.default.setDataSource(this.sheet, newData, true);
	                if (childrenLength) {
	                    _gcSpread2.default.setColCount(this.sheet, childrenLength);
	                }
	            }
	            GC_BUS.$emit("gc-sheet:dataSourceChanged", this.sheet.name());
	            if (this.frozenColumnCount) {
	                _gcSpread2.default.setSheetAttribute(this.sheet, "frozenColumnCount", parseInt(this.frozenColumnCount, 10));
	            }
	        },
	        rowCountChangeHandle: function rowCountChangeHandle() {
	            if (!this.dataSource) {
	                _gcSpread2.default.setRowCount(this.sheet, this.rowCount || DEFUALT_ROWCOUNT);
	            }
	        },
	        colCountChangeHandle: function colCountChangeHandle() {
	            var childrenLength = this.$children.length;
	            if (!this.dataSource) {
	                _gcSpread2.default.setColCount(this.sheet, childrenLength || this.colCount || DEFUALT_COLCOUNT);
	            }
	        }
	    },

	    mounted: function mounted() {
	        var self = this;
	        this.initSheet();

	        GC_BUS.$on("gc-column:mounted", function (sheetName, beforeMountCloumnTagCount) {
	            if (sheetName !== self.sheetName) {
	                return;
	            }
	            //  childrenLength must greater than 0
	            if (beforeMountCloumnTagCount === 0) {
	                //It means some 'gc-column' be exist before this column add
	                _gcSpread2.default.setColCount(self.sheet, 1);
	            }
	        });
	        GC_BUS.$on("gc-column:destroyed", function (sheet, index) {
	            if (sheet.name() !== self.sheetName) {
	                return;
	            }
	            var childrenLength = self.$children.length;
	            if (childrenLength === 0) {
	                if (self.dataSource) {
	                    _gcSpread2.default.setDataSource(self.sheet, null, true);
	                    _gcSpread2.default.setDataSource(self.sheet, self.dataSource, true);
	                } else {
	                    _gcSpread2.default.setColCount(self.sheet, self.colCount || DEFUALT_COLCOUNT);
	                }
	            }
	        });
	    },
	    destroyed: function destroyed() {
	        this.spread.removeSheet(this.spread.getSheetIndex(this.sheet.name()));
	    },

	    watch: _gcSpread2.default.extendObejct({
	        dataSource: function dataSource(val, old) {
	            this.dataSourceChangeHandle(val, old);
	        },
	        colCount: function colCount(newCount, oldCount) {
	            this.colCountChangeHandle(newCount, oldCount);
	        },
	        rowCount: function rowCount() {
	            this.rowCountChangeHandle();
	        },
	        spread: function spread() {
	            this.initSheet();
	        }
	    }, SHEET_WATCH_PROP_OBJECT)

	});

	_vueNameSpace2.default.component(COLUMN_TAG_NAME, {
	    template: "<div class='" + COLUMN_CLASS + "'></div>",
	    props: COLUMN_PROP_LIST,
	    data: function data() {
	        return {
	            columnIndex: undefined
	        };
	    },
	    computed: {
	        sheet: function sheet() {
	            return this.$parent.sheet;
	        }
	    },
	    methods: {
	        //get the index of component
	        getColumnIndex: function getColumnIndex() {
	            var index = 0,
	                el = this.$parent.$el,
	                selfWrap = this.$el;
	            var siblings = el.getElementsByClassName(COLUMN_CLASS);
	            for (var i = 0; i < siblings.length; i++) {
	                if (siblings[i] === selfWrap) {
	                    index = i;
	                }
	            }
	            return index;
	        },
	        setColumnOptions: function setColumnOptions(attr, value) {
	            var sheet = this.sheet,
	                index = this.getColumnIndex();
	            _gcSpread2.default.suspendPaint(sheet);
	            _gcSpread2.default.suspendEvent(sheet);
	            switch (attr) {
	                case 'dataField':
	                    _gcSpread2.default.bindColumn(sheet, index, {
	                        name: value,
	                        displayName: this.headerText
	                    });
	                    /**
	                     * beacuse bindColumn will change smoe column information
	                     * so we need reset some information to column
	                     */
	                    if (this.width !== undefined) {
	                        _gcSpread2.default.setColumnWidth(sheet, index, this.width);
	                    }
	                    if (this.visible !== undefined) {
	                        _gcSpread2.default.setColumnVisible(sheet, index, this.visible);
	                    }
	                    if (this.resizable !== undefined) {
	                        _gcSpread2.default.setColumnResizable(sheet, index, this.resizable);
	                    }
	                    break;
	                case 'headerText':
	                    if (value) {
	                        _gcSpread2.default.bindColumn(sheet, index, {
	                            name: this.dataField,
	                            displayName: value
	                        });
	                    }
	                    /**
	                     * beacuse bindColumn will change smoe column information
	                     * so we need reset some information to column
	                     */
	                    if (this.width !== undefined) {
	                        _gcSpread2.default.setColumnWidth(sheet, index, this.width);
	                    }
	                    if (this.visible !== undefined) {
	                        _gcSpread2.default.setColumnVisible(sheet, index, this.visible);
	                    }
	                    if (this.resizable !== undefined) {
	                        _gcSpread2.default.setColumnResizable(sheet, index, this.resizable);
	                    }
	                    break;
	                case 'width':
	                    _gcSpread2.default.setColumnWidth(sheet, index, value);
	                    break;
	                case 'visible':
	                    _gcSpread2.default.setColumnVisible(sheet, index, value);
	                    break;
	                case 'resizable':
	                    _gcSpread2.default.setColumnResizable(sheet, index, value);
	                    break;
	                case 'autoFit':
	                    if (value) {
	                        _gcSpread2.default.setAutoFitColumn(sheet, index);
	                    }
	                    break;
	                case 'columnStyle':
	                    _gcSpread2.default.setColumnStyle(sheet, index, value);
	                    break;
	                case 'headerStyle':
	                    _gcSpread2.default.setHeaderStyle(sheet, index, value);
	                    break;
	                case 'cellType':
	                    _gcSpread2.default.setCellType(sheet, index, value);
	                    break;
	                case 'formatter':
	                    _gcSpread2.default.setFormatter(sheet, index, value);
	                    break;
	            }
	            _gcSpread2.default.resumeEvent(sheet);
	            _gcSpread2.default.resumePaint(sheet);
	        },
	        initColumn: function initColumn() {
	            var index = this.getColumnIndex();
	            this.columnIndex = index;
	            _gcSpread2.default.addColumn(this.sheet, index);
	            var len = COLUMN_PROP_LIST.length,
	                attr;
	            for (var i = 0; i < len; i++) {
	                attr = COLUMN_PROP_LIST[i];
	                if (this[attr] !== undefined) {
	                    this.setColumnOptions(attr, this[attr]);
	                }
	            }
	        }
	    },
	    created: function created() {
	        var self = this;
	        GC_BUS.$on("gc-sheet:dataSourceChanged", function (sheetName) {
	            //ignore different sheet event
	            if (!self.sheet || self.sheet && self.sheet.name() !== sheetName) {
	                return;
	            }
	            // rebind bindColumn
	            var sheet = self.sheet,
	                index = self.getColumnIndex();
	            if (self.headerText || self.dataField) {
	                _gcSpread2.default.bindColumn(self.sheet, self.getColumnIndex(), {
	                    name: self.dataField,
	                    displayName: self.headerText
	                });
	            }
	            /**
	             * beacuse bindColumn will change smoe column information
	             * so we need reset some information to column
	             */
	            if (self.width !== undefined) {
	                _gcSpread2.default.setColumnWidth(sheet, index, self.width);
	            }
	            if (self.visible !== undefined) {
	                _gcSpread2.default.setColumnVisible(sheet, index, self.visible);
	            }
	            if (self.resizable !== undefined) {
	                _gcSpread2.default.setColumnResizable(sheet, index, self.resizable);
	            }
	        });
	        GC_BUS.$on("gc-column:mounted", function (sheetName) {
	            if (!self.sheet || self.sheet && self.sheet.name() !== sheetName) {
	                return;
	            }
	            self.columnIndex = self.getColumnIndex();
	        });
	    },
	    beforeMount: function beforeMount() {
	        var el = this.$parent.$el;
	        if (!el) {
	            return;
	        }
	        var siblings = el.getElementsByClassName(COLUMN_CLASS);
	        this.beforeMountCloumnTagCount = siblings.length;
	    },
	    mounted: function mounted() {
	        if (!this.sheet) {
	            return;
	        }
	        this.initColumn();
	        GC_BUS.$emit("gc-column:mounted", this.sheet.name(), this.beforeMountCloumnTagCount);
	    },
	    destroyed: function destroyed() {
	        var index = this.columnIndex;
	        _gcSpread2.default.deleteColumn(this.sheet, index);
	        GC_BUS.$emit("gc-column:destroyed", this.sheet, index);
	    },

	    watch: _gcSpread2.default.extendObejct({
	        sheet: function sheet() {
	            if (this.sheet) {
	                this.initColumn();
	            }
	        }
	    }, COLUMN_WATCH_PROP_OBJECT)
	});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Vue = window.Vue;
	exports.default = Vue;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _spreadNameSpace = __webpack_require__(4);

	var _spreadNameSpace2 = _interopRequireDefault(_spreadNameSpace);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    extendObejct: function extendObejct(dest, src) {
	        for (var prop in src) {
	            if (src.hasOwnProperty(prop)) {
	                dest[prop] = src[prop];
	            }
	        }
	        return dest;
	    },
	    createWatchData: function createWatchData(list, functionName) {
	        var watchOject = {};
	        var len = list.length;
	        for (var i = 0; i < len; i++) {
	            watchOject[list[i]] = function (prop) {
	                return function (val) {
	                    this[functionName](prop, val);
	                };
	            }(list[i]);
	        }
	        return watchOject;
	    },
	    setSpreadOptions: function setSpreadOptions(spread, attr, value) {
	        spread.suspendPaint();
	        spread.options[attr] = value;
	        spread.resumePaint();
	    },
	    createWorkBook: function createWorkBook(dom, sheetCount) {
	        return new _spreadNameSpace2.default.Spread.Sheets.Workbook(dom, { sheetCount: sheetCount });
	    },
	    destroyedSpread: function destroyedSpread(spread) {
	        spread.destroy();
	    },
	    bindEvent: function bindEvent(host, event, callback) {
	        var namespace = _spreadNameSpace2.default.Spread.Sheets.Events;
	        host.bind(namespace[event], callback);
	    },
	    setSheetAttribute: function setSheetAttribute(sheet, attr, value) {
	        return sheet[attr](value);
	    },
	    setSheetAttributeData: function setSheetAttributeData(sheet, attr, value) {
	        return sheet[attr] = value;
	    },
	    setSheetOptions: function setSheetOptions(sheet, attr, value) {
	        sheet.suspendPaint();
	        sheet.options[attr] = value;
	        sheet.resumePaint();
	    },
	    setRowCount: function setRowCount(sheet, value) {
	        sheet.suspendPaint();
	        sheet.setRowCount(value);
	        sheet.resumePaint();
	    },
	    setFrozenColumnCount: function setFrozenColumnCount(sheet, value) {
	        sheet.frozenColumnCount(value);
	    },

	    //host may be workbook or work sheet
	    suspendPaint: function suspendPaint(host) {
	        host.suspendPaint();
	    },
	    resumePaint: function resumePaint(host) {
	        host.resumePaint();
	    },
	    suspendEvent: function suspendEvent(host) {
	        host.suspendEvent();
	    },
	    resumeEvent: function resumeEvent(host) {
	        host.resumeEvent();
	    },
	    createSheet: function createSheet(name) {
	        return new _spreadNameSpace2.default.Spread.Sheets.Worksheet(name);
	    },
	    addSheet: function addSheet(spread, sheetName, index) {
	        var sheet = this.createSheet(sheetName);
	        if (index === undefined) {
	            index = spread.getSheetCount();
	        }
	        spread.addSheet(index, sheet);
	        return sheet;
	    },
	    getSheetName: function getSheetName(sheet) {
	        return sheet.name();
	    },
	    setSheetDefaultStyle: function setSheetDefaultStyle(sheet, style) {
	        sheet.suspendPaint();
	        sheet.setDefaultStyle(style);
	        sheet.resumePaint();
	    },
	    setRowOutlineInfo: function setRowOutlineInfo(sheet, value) {
	        sheet.suspendPaint();
	        value.forEach(function (item) {
	            sheet.rowOutlines.group(item.index, item.count);
	        });
	        sheet.resumePaint();
	    },
	    setColumnOutlineInfo: function setColumnOutlineInfo(sheet, value) {
	        sheet.suspendPaint();
	        value.forEach(function (item) {
	            sheet.columnOutlines.group(item.index, item.count);
	        });
	        sheet.resumePaint();
	    },
	    setDataSource: function setDataSource(sheet, value, reset) {
	        sheet.suspendPaint();
	        sheet.setDataSource(value, reset);
	        sheet.resumePaint();
	    },
	    setColCount: function setColCount(sheet, value) {
	        sheet.suspendPaint();
	        sheet.setColumnCount(value);
	        sheet.resumePaint();
	    },
	    addColumn: function addColumn(sheet, index) {
	        sheet.suspendPaint();
	        sheet.addColumns(index, 1);
	        sheet.resumePaint();
	    },
	    deleteColumn: function deleteColumn(sheet, index) {
	        sheet.suspendPaint();
	        sheet.deleteColumns(index, 1);
	        sheet.resumePaint();
	    },
	    bindColumn: function bindColumn(sheet, index, data) {
	        sheet.suspendPaint();
	        sheet.bindColumn(index, data);
	        sheet.resumePaint();
	    },
	    setColumnWidth: function setColumnWidth(sheet, index, width) {
	        sheet.suspendPaint();
	        sheet.setColumnWidth(index, width);
	        sheet.resumePaint();
	    },
	    setColumnVisible: function setColumnVisible(sheet, index, visible) {
	        sheet.suspendPaint();
	        sheet.setColumnVisible(index, visible);
	        sheet.resumePaint();
	    },
	    setColumnResizable: function setColumnResizable(sheet, index, resizable) {
	        sheet.suspendPaint();
	        sheet.setColumnResizable(index, resizable);
	        sheet.resumePaint();
	    },
	    setAutoFitColumn: function setAutoFitColumn(sheet, index) {
	        sheet.autoFitColumn(index);
	    },
	    setColumnStyle: function setColumnStyle(sheet, index, style) {
	        sheet.suspendPaint();
	        sheet.setStyle(-1, index, style);
	        sheet.resumePaint();
	    },
	    setHeaderStyle: function setHeaderStyle(sheet, index, style) {
	        sheet.suspendPaint();
	        sheet.setStyle(-1, index, style, _spreadNameSpace2.default.Spread.Sheets.SheetArea.colHeader);
	        sheet.resumePaint();
	    },
	    setCellType: function setCellType(sheet, index, type) {
	        sheet.suspendPaint();
	        sheet.setCellType(-1, index, type);
	        sheet.resumePaint();
	    },
	    setFormatter: function setFormatter(sheet, index, formatter) {
	        sheet.suspendPaint();
	        sheet.setFormatter(-1, index, formatter, _spreadNameSpace2.default.Spread.Sheets.SheetArea.viewport);
	        sheet.resumePaint();
	    }
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var GC = window.GC;
	exports.default = GC;

/***/ })
/******/ ])
});
;