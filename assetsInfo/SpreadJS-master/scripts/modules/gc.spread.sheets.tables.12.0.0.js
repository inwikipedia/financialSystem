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
var GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["Tables"] =
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
	    exports.SR['en'] = __webpack_require__(7);
	    
	    module.exports = exports;
	
	}());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Tables = {},
	        TableThemes,
	        Sheets = __webpack_require__(2),
	        Common = __webpack_require__(3),
	        CalcEngine = __webpack_require__(4),
	        Filters = __webpack_require__(5),
	        HideRowFilter = Filters && Filters.HideRowFilter,
	        Bindings = __webpack_require__(6);
	
	    var createRange = Sheets._createRange,
	        Sheets_util = Sheets._util,
	        defProperty = Sheets_util._defProperty,
	        isDefined = Sheets_util._isDefined,
	        util_toString = Sheets_util._toString,
	        _CacheMgr = Sheets._CacheMgr,
	        Worksheet = Sheets.Worksheet,
	        Events = Sheets.Events,
	        LineBorder = Sheets.LineBorder,
	        Style = Sheets.Style,
	        $ = Sheets.GC$,
	        $_inArray = $.inArray,
	        $_each = $.each,
	        $_isEmptyObject = $.isEmptyObject,
	        isNullOrUndefined = Common._Types._isNullOrUndefined,
	        _DateTimeHelper = Common._DateTimeHelper,
	        _ArrayHelper_contains = Common._ArrayHelper._contains,
	        CellBindingSource = Bindings && Bindings.CellBindingSource,
	        _BindingManager = Bindings && Bindings._BindingManager,
	        getValueByPath = Bindings && Bindings._getValueByPath;
	
	    var keyword_null = null, keyword_undefined = void 0, Math_min = Math.min, Math_floor = Math.floor,
	        JSON_STRINGIFY = JSON.stringify, JSON_PARSE = JSON.parse,
	        CONST_NAME = 'name', CONST_HIGHLIGHT_FIRST_COLUMN = 'highlightFirstColumn',
	        CONST_HIGHLIGHT_LAST_COLUMN = 'highlightLastColumn',
	        CONST_BAND_ROWS = 'bandRows', CONST_BAND_COLUMNS = 'bandColumns',
	        CONST_AUTO_GENERATE_COLUMNS = 'autoGenerateColumns';
	
	    var HEADER_ROW_STYLE = 'headerRowStyle', FOOTER_ROW_STYLE = 'footerRowStyle', WHOLE_TABLE_STYLE = 'wholeTableStyle',
	        HIGHLIGHT_LAST_COLUMN_STYLE = 'highlightLastColumnStyle',
	        HIGHLIGHT_FIRST_COLUMN_STYLE = 'highlightFirstColumnStyle',
	        FIRST_ROW_STRIP_STYLE = 'firstRowStripStyle', SECOND_ROW_STRIP_STYLE = 'secondRowStripStyle',
	        FIRST_COLUMN_STRIP_STYLE = 'firstColumnStripStyle', SECOND_COLUMN_STRIP_STYLE = 'secondColumnStripStyle',
	        FIRST_HEADER_CELL_STYLE = 'firstHeaderCellStyle', LAST_HEADER_CELL_STYLE = 'lastHeaderCellStyle',
	        FIRST_FOOTER_CELL_STYLE = 'firstFooterCellStyle', LAST_FOOTER_CELL_STYLE = 'lastFooterCellStyle';
	    var styleProperties = [HEADER_ROW_STYLE, FOOTER_ROW_STYLE, WHOLE_TABLE_STYLE, HIGHLIGHT_LAST_COLUMN_STYLE, HIGHLIGHT_FIRST_COLUMN_STYLE, FIRST_ROW_STRIP_STYLE,
	        SECOND_ROW_STRIP_STYLE, FIRST_COLUMN_STRIP_STYLE, SECOND_COLUMN_STRIP_STYLE, FIRST_HEADER_CELL_STYLE, LAST_HEADER_CELL_STYLE, FIRST_FOOTER_CELL_STYLE, LAST_FOOTER_CELL_STYLE];
	    var FIRST_ROW_STRIP_SIZE = 'firstRowStripSize', SECOND_ROW_STRIP_SIZE = 'secondRowStripSize',
	        FIRST_COLUMN_STRIP_SIZE = 'firstColumnStripSize', SECOND_COLUMN_STRIP_SIZE = 'secondColumnStripSize',
	        TABLE_NS = '.table';
	    var sizeProperties = [FIRST_ROW_STRIP_SIZE, SECOND_ROW_STRIP_SIZE, FIRST_COLUMN_STRIP_SIZE, SECOND_COLUMN_STRIP_SIZE];
	
	    var TABLE_STYLE_DEFAULT_FONT = 'bold 11pt calibri', CONST_COLUMN = 'Column',
	        CONST_ID = 'id',
	        CONST_DATAFIELD = 'dataField', CONST_FOOTER_FORMULA = 'footerFormula',
	        CONST_DATA_AREA_FORMULA = 'dataAreaFormula', CONST_FOOTER_VALUE = 'footerValue';
	    var tcProperties = [CONST_ID, CONST_NAME, CONST_DATAFIELD, CONST_FOOTER_FORMULA, CONST_DATA_AREA_FORMULA, CONST_FOOTER_VALUE];
	
	    function sR() {
	        return Common._getResource(Tables.SR)();
	    }
	
	    function throwError(message) {
	        throw new Error(message);
	    }
	
	    function setFormulaToSheet(sheet, row, col, formula, expr) {
	        if (!formula && expr) {
	            formula = expressionToFormula(sheet, expr, row, col);
	        }
	        CalcEngine && sheet._setFormulaCore(row, col, formula, expr);
	    }
	
	    function setValue(sheet, row, col, value) {
	        sheet.setValue(row, col, value);
	    }
	
	    function suspendPaint(sheet) {
	        sheet.suspendPaint();
	    }
	
	    function resumePaint(sheet) {
	        sheet.resumePaint();
	    }
	
	    function _getOperatorAdjustor(sheet) {
	        return sheet._getCalcServiceInternal()._getOperatorAdjustor();
	    }
	
	    function suspendCalcService(sheet) {
	        CalcEngine && sheet.suspendCalcService();
	    }
	
	    function resumeCalcService(sheet, recalcAll) {
	        CalcEngine && sheet.resumeCalcService(recalcAll);
	    }
	
	    function getRowCount(obj) {
	        return obj.rowCount;
	    }
	
	    function getColCount(obj) {
	        return obj.colCount;
	    }
	
	    function isValidTableName(name) {
	        
	        return name && (!(/\d/.test(name[0]) ||
	            /[\s\+\-\*\\:%!\[\]]/.test(name) ||
	            ["C", "c", "R", "r"].indexOf(name) !== -1 ||
	            /^[A-Za-z]{1,3}(\$)?\d+$/.test(name) ||
	            /^[Rr]\d*[Cc]\d*$/.test(name) ||
	            name.length >= 255
	        ));
	    }
	
	    function checkTableName(value) {
	        if (!value) {
	            return false;
	        }
	
	        if (!isValidTableName(value)) {
	            throwError(sR().Exp_TableNameInvalid);
	        }
	
	        var self = this,
	            oldName = self.name(),
	            owner = self._owner;
	
	        if (value === oldName) {
	            return false;
	        }
	
	        if (owner) {
	            var table = owner.findByName(value);
	            return !table || self === table;   
	        }
	
	        return true;
	    }
	
	   
	    function adjustFormulaOnRemoveTables(sheet, tables, convertToError) {
	        var workbook = sheet.parent, adjustor = _getOperatorAdjustor(sheet);
	
	        function adjustNames(names, removedTables) {
	            $_each(names, function (index, ne) {
	                var oldExpr = ne.getExpression();
	                var newExpr = CalcEngine.CalcOperatorAdjustor.adjustExpressionOnRemoveTable(oldExpr, removedTables, -1, -1, convertToError);
	                if (newExpr !== oldExpr) {
	                    ne._setExpression(newExpr);
	                    adjustor.invalidName(sheet._getSheetSource(), ne.getName());
	                }
	            });
	        }
	
	        if (workbook) {
	            adjustNames(workbook.getCustomNames(), tables);
	            $_each(workbook.sheets, function (index, worksheet) {
	                adjustNames(worksheet.getCustomNames(), tables);
	            });
	        } else {
	            adjustNames(sheet.getCustomNames(), tables);
	        }
	        adjustor.onAfterRemoveTable(tables, convertToError);
	    }
	
	    function formulaToExpression(sheet, formula, sheetRow, sheetColumn) {
	        return sheet._calcService.parse(sheet._getSheetSource(), formula, sheetRow, sheetColumn, false, false, false);
	    }
	
	    function expressionToFormula(sheet, expr, sheetRow, sheetColumn, toStandard) {
	        toStandard = toStandard === keyword_undefined ? true : toStandard;
	        return sheet._calcService.unparse(sheet._getSheetSource(), expr, sheetRow, sheetColumn, false, toStandard);
	    }
	
	    function propertyChangeCallback(propertyName) {
	        return function (value, old) {
	            var self = this, sheet = self._sheet;
	            if (sheet && value !== old) {
	                sheet._modelManager._backupTableProperty(self, propertyName, old);
	            }
	        };
	    }
	
	    Worksheet._registerFeature('table', {
	        priority: 2000,
	        init: function () {
	            var self = this;
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            
	            self.tables = self._modelManager._tables;
	
	            self.bind(Events.ResetBinding + TABLE_NS, function () {
	                self.tables._resetTablesBindingManager();
	            });
	            self.bind(Events.InitBinding + TABLE_NS, function () {
	                var tm = self.tables;
	                tm._resetTablesBindingManager();
	                suspendCalcService(self);
	                var tables = tm.all();
	                for (var i = 0, count = tables.length; i < count; i++) {
	                    var table = tables[i];
	                    if (table) {
	                        table._applyBindingPath();
	                    }
	                }
	                resumeCalcService(self);
	            });
	        },
	        setHost: function () {
	            var self = this;
	            self.bind(Events.BeforeDragDrop + TABLE_NS, function (sender, args) {
	                var sheet = self, tableManager = self.tables;
	                var Exp_DragDropChangePartOfTable = sR().Exp_DragDropChangePartOfTable;
	
	                var fromRow = args.fromRow;
	                var fromColumn = args.fromColumn;
	                var rowCount = getRowCount(args);
	                var columnCount = args.columnCount;
	                var dragRect = sheet._eventHandler._dragRect;
	                var toRow = dragRect.row;
	                var toColumn = dragRect.col;
	                var isDragInsert = args.isDragInsert;
	                var isDragCopy = args.isDragCopy;
	                var invalidMessage = keyword_null;
	
	                if (isDragInsert && (fromRow === -1 || fromColumn === -1)) {
	                    if (fromColumn >= 0) {
	                       
	                        if ((self.isDragCopy && (toColumn <= fromColumn || toColumn >= fromColumn + columnCount)) ||
	                            (!isDragCopy && (toColumn < fromColumn || toColumn > fromColumn + columnCount))) {
	                            var isInvalid = false;
	                            if (tableManager._hasPartTable(-1, toColumn, -1, 1)) {
	                                isInvalid = true;
	                                invalidMessage = sR().Exp_DragDropShiftTableCell;
	                            }
	                            if (!isInvalid && !isDragCopy && tableManager._hasPartTable(-1, fromColumn, -1, columnCount)) {
	                                invalidMessage = Exp_DragDropChangePartOfTable;
	                            }
	                        }
	                    } else if (fromRow >= 0 && fromColumn < 0) { 
	                       
	                        if ((isDragCopy && (toRow <= fromRow || toRow >= fromRow + rowCount)) || (!isDragCopy && (toRow < fromRow || toRow > fromRow + rowCount))) { 
	                            if (!isDragCopy && tableManager._hasPartTable(fromRow, -1, rowCount, -1)) {
	                                invalidMessage = Exp_DragDropChangePartOfTable;
	                            }
	                        }
	                    }
	                }
	
	                args.invalidMessage = invalidMessage;
	            });
	        },
	        dispose: function (clearCache) {
	            if (clearCache !== false) {
	                this.unbind(TABLE_NS);
	            }
	        },
	        onLayoutChanged: function (e) {
	            var self = this;
	            var changeType = e.changeType;
	            var row = e.row;
	            var rowCount = getRowCount(e);
	            var col = e.col;
	            var colCount = getColCount(e);
	            var tableManager = self.tables;
	            if (changeType === 'addRows') {
	                tableManager._onRowsAdded(row, rowCount);
	            } else if (changeType === 'addRows2') {
	                tableManager._onRowsAdded2(row, rowCount);
	            } else if (changeType === 'deleteRows') {
	                tableManager._onRowsRemoved(row, rowCount);
	            } else if (changeType === 'addColumns') {
	                tableManager._onColumnsAdded(col, colCount);
	            } else if (changeType === 'deleteColumns') {
	                tableManager._onColumnsRemoved(col, colCount);
	            } else if (changeType === 'clear') {
	                var sheetArea = e.sheetArea;
	                if (!e.ignoreTable && (sheetArea === 3 || isNullOrUndefined(sheetArea))) {
	                    tableManager._clear(row, col, rowCount, colCount, e.type);
	                }
	            }
	        },
	        toJson: function (dataDic, serializationOption) {
	            function _serializeTablesDataSource(sheet, dataTable) {
	                var allTables = sheet.tables.all();
	                for (var i = 0, length = allTables.length; i < length; i++) {
	                    var table = allTables[i],
	                        tableDataSource = table._getDataSource(),
	                        tableDataRange = table.dataRange(),
	                        tableDataRangeStartRow = tableDataRange.row,
	                        tableDataRangeStartCol = tableDataRange.col,
	                        tableDataRangeEndRow = tableDataRangeStartRow + getRowCount(tableDataRange) - 1,
	                        tableDataRangeEndCol = tableDataRangeStartCol + getColCount(tableDataRange) - 1;
	                    if (tableDataSource) {
	                        for (var r = tableDataRangeStartRow; r <= tableDataRangeEndRow; r++) {
	                            for (var c = tableDataRangeStartCol; c <= tableDataRangeEndCol; c++) {
	                                var boundValue = table._getValue(r, c);
	                                if (boundValue._hasValue) {
	                                    var convertedValue = boundValue._value;
	                                    if (_DateTimeHelper._isDate(convertedValue)) {
	                                        convertedValue = _DateTimeHelper._toOADateString(convertedValue);
	                                    }
	                                    sheet._setValueToDataTable(dataTable, r, c, convertedValue);
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	
	            var self = this, tables = self.tables;
	
	            var ignoreStyle = serializationOption && serializationOption.ignoreStyle;
	            if (!ignoreStyle) {
	                if (tables) {
	                    dataDic['tables'] = tables.toJSON();
	                }
	                if (serializationOption && serializationOption.includeBindingSource) {
	                    var data = dataDic.data;
	                    data.dataTable = data.dataTable || {};
	                    _serializeTablesDataSource(self, data.dataTable);
	                }
	            }
	        },
	        fromJson: function (sheetSettings, noSchema, deserializationOptions) {
	            var sheet = this, sheet_tables = sheet.tables, sheetSettings_tableManager = sheetSettings.tableManager;
	            var tables = noSchema ? (sheetSettings_tableManager && sheetSettings_tableManager.tables) : sheetSettings.tables;
	            var ignoreStyle = deserializationOptions && deserializationOptions.ignoreStyle;
	            if (isDefined(tables) && !ignoreStyle && sheet_tables) {
	                sheet_tables.fromJSON(tables, noSchema);
	            }
	        },
	        lastNonNullRowAndCol: function () {
	            var self = this;
	            var tableManager = self.tables;
	            var lastRow = -1;
	            var lastColumn = -1;
	            var tableList = tableManager.all();
	            if (tableList) {
	                for (var i = 0, len = tableList.length; i < len; i++) {
	                    var table = tableList[i];
	                    if (table) {
	                        var range = table.range();
	                        var bottom = range.row + getRowCount(range) - 1;
	                        var right = range.col + getColCount(range) - 1;
	                        if (bottom > lastRow) {
	                            lastRow = bottom;
	                        }
	                        if (right > lastColumn) {
	                            lastColumn = right;
	                        }
	                    }
	                }
	            }
	
	            return {
	                lastNonNullRow: lastRow,
	                lastNonNullCol: lastColumn
	            };
	        }
	    });
	
	    $.extend(Sheets.Workbook.prototype, {
	        _findTable: function (tableName) {
	            var sheets = this.sheets, table, tableManager;
	            if (sheets) {
	                for (var i = 0; i < sheets.length; i++) {
	                    tableManager = sheets[i].tables;
	                    if (tableManager) {
	                        table = tableManager.findByName(tableName);
	                        if (table) {
	                            return table;
	                        }
	                    }
	                }
	            }
	            return keyword_null;
	        }
	    });
	   
	
	   
	   
	    
	    function Table(name, row, col, rowCount, colCount, style, options) {
	        var self = this;
	        self._showHeader = (options && options.showHeader !== keyword_undefined) ? options.showHeader : true;
	        self._showFooter = (options && options.showFooter !== keyword_undefined) ? options.showFooter : false;
	
	        self._bindingManager = keyword_null;
	        self._rowFilter = keyword_null;
	        self._owner = keyword_null;
	
	        if (isDefined(name)) {
	            self.name(name);
	        }
	        self._row = isDefined(row) ? row : -1;
	        self._col = isDefined(col) ? col : -1;
	        self._rowCount = isDefined(rowCount) ? rowCount : -1;
	        self._colCount = isDefined(colCount) ? colCount : -1;
	        if (isDefined(style)) {
	            self.style(style);
	        }
	       
	        self._columns = [];
	        for (var i = 0; i < self._colCount; i++) {
	            self._columns.push(new TableColumn(i + 1));
	        }
	       
	        self._slicerData = keyword_null;
	    }
	
	    Table.prototype = {
	       
	        
	        range: function () {
	            var self = this;
	            return createRange(self._row, self._col, self._rowCount, self._colCount);
	        },
	       
	        
	        dataRange: function () {
	            var self = this;
	            var r = (self._showHeader ? self._row + 1 : self._row);
	            var rc = (self._showHeader ? self._rowCount - 1 : self._rowCount);
	            if (self._showFooter) {
	                rc--;
	            }
	            return createRange(r, self._col, rc, self._colCount);
	        },
	       
	        
	        name: defProperty(CONST_NAME, '', propertyChangeCallback(CONST_NAME), checkTableName),
	       
	        
	        headerIndex: function () {
	            return (this._showHeader ? this._row : -1);
	        },
	       
	        
	        footerIndex: function () {
	            return (this._showFooter ? this._row + this._rowCount - 1 : -1);
	        },
	       
	        
	        showHeader: function (value) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._showHeader;
	            }
	
	           
	            if (self._showHeader !== value) {
	                var sheet = self._sheet;
	                if (sheet) {
	                    sheet.suspendPaint();
	                }
	                self._showHeaderInternal(value);
	                if (sheet) {
	                    sheet.resumePaint();
	                }
	            }
	            return self;
	        },
	        _showHeaderInternal: function (value) {
	            var self = this;
	            var sheet = self._sheet;
	            if (sheet) {
	                sheet._modelManager._backupTableProperty(self, "showHeader", self._showHeader);
	            }
	            var show = self._showHeader = value;
	            if (show) {
	                if (self._row > 0) {
	                    self._row = self._row - 1;
	                    self._rowCount += 1;
	                }
	               
	                self._syncHeader();
	            } else {
	                var oldRow = self._row;
	                self._row = self._row + 1;
	                self._rowCount -= 1;
	               
	                self._clearSheetRow(oldRow);
	                self._resetFilter();
	            }
	            if (sheet) {
	                CalcEngine && sheet.recalcRange(self._row + (value ? 0 : -1), self._col, 1, self._colCount);
	            }
	        },
	       
	        
	        showFooter: function (value) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._showFooter;
	            }
	
	           
	            if (self._showFooter !== value) {
	                var sheet = self._sheet;
	                if (sheet) {
	                    sheet.suspendPaint();
	                }
	                self._showFooterInternal(value);
	                if (sheet) {
	                    sheet.resumePaint();
	                }
	            }
	            return self;
	        },
	        _showFooterInternal: function (value) {
	            var self = this;
	            var sheet = self._sheet;
	            if (sheet) {
	                sheet._modelManager._backupTableProperty(self, "showFooter", self._showFooter);
	            }
	            var show = self._showFooter = value;
	            if (show) {
	                if (!sheet || self._row + self._rowCount < sheet.getRowCount()) {
	                    self._rowCount += 1;
	                   
	                   
	                   
	                   
	                    var tcs = self._columns, tcsLength = tcs.length, row = self.footerIndex();
	                    var baseCol = self._col;
	                    for (var i = 0; i < tcsLength; i++) {
	                        var tc = tcs[i], expr = tc && tc.footerFormula(), col = baseCol + i;
	                        if (expr) {
	                            var formula = expressionToFormula(sheet, expr, row, col);
	                            if (formula) {
	                               
	                                expr = formulaToExpression(sheet, formula, row, col);
	                                tc.footerFormula(expr);
	                            }
	                        }
	                    }
	                }
	               
	                self._syncFooter();
	            } else {
	                var oldRow = self._row + self._rowCount - 1;
	                self._rowCount -= 1;
	               
	                self._clearSheetRow(oldRow);
	            }
	            if (sheet) {
	                CalcEngine && sheet.recalcRange(self._row + self._rowCount + (value ? -1 : 0), self._col, 1, self._colCount);
	            }
	        },
	       
	        
	        bandRows: defProperty(CONST_BAND_ROWS, true, propertyChangeCallback(CONST_BAND_ROWS)),
	       
	        
	        bandColumns: defProperty(CONST_BAND_COLUMNS, false, propertyChangeCallback(CONST_BAND_COLUMNS)),
	       
	        
	        highlightFirstColumn: defProperty(CONST_HIGHLIGHT_FIRST_COLUMN, false, propertyChangeCallback(CONST_HIGHLIGHT_FIRST_COLUMN)),
	       
	        
	        highlightLastColumn: defProperty(CONST_HIGHLIGHT_LAST_COLUMN, false, propertyChangeCallback(CONST_HIGHLIGHT_LAST_COLUMN)),
	       
	        
	        style: defProperty('style', keyword_undefined, propertyChangeCallback('style')),
	       
	        
	        rowFilter: function () {
	            var self = this;
	            if (!self._rowFilter && _TableFilter) { 
	                self._rowFilter = new _TableFilter(self);
	                self._rowFilter._updateRange(self.dataRange());
	            }
	            return self._rowFilter;
	        },
	       
	        
	        autoGenerateColumns: defProperty(CONST_AUTO_GENERATE_COLUMNS, true, propertyChangeCallback(CONST_AUTO_GENERATE_COLUMNS)),
	       
	        
	        bindColumns: function (columns) {
	            var self = this;
	            if (columns) {
	                var length = Math_min(self._colCount, columns.length);
	                for (var i = 0; i < length; i++) {
	                    var column = self._columns[i];
	                    if (!column) {
	                        column = new TableColumn(self._newAutoId());
	                        self._columns[i] = column;
	                    }
	                    column.name(columns[i].name());
	                    column.dataField(columns[i].dataField());
	                }
	            }
	        },
	       
	        
	        bindingPath: function (value) {
	            var self = this;
	            if (arguments.length === 0) {
	                return self._bindingPath;
	            }
	            self._bindingPath = value;
	            self._applyBindingPath();
	            return self;
	        },
	       
	        
	        getColumnName: function (tableColumnIndex) {
	            var tcs = this._columns;
	            if (tcs && 0 <= tableColumnIndex && tableColumnIndex < tcs.length) {
	                var tc = tcs[tableColumnIndex];
	                if (tc) {
	                    var name = tc.name();
	                    if (name !== keyword_null) {
	                        name = util_toString(name);
	                    }
	                    return name;
	                }
	            }
	            return keyword_null;
	        },
	       
	        
	        setColumnName: function (tableColumnIndex, name) {
	            var self = this;
	            if (self._hasColumnName(name)) {
	                return self;
	            }
	            var tcs = self._columns;
	            if (tcs && 0 <= tableColumnIndex && tableColumnIndex < tcs.length) {
	                var tc = tcs[tableColumnIndex];
	                if (!tc) {
	                    tc = self._columns[tableColumnIndex] = new TableColumn(self._newAutoId());
	                }
	                var oldName = tc.name();
	                var sheet = self._sheet;
	                if (oldName !== name && sheet) {
	                    sheet._modelManager._backupTableColumn(tc, 'name', oldName);
	                    tc.name(name);
	                }
	                if (self._showHeader && sheet) {
	                    sheet.setText(self.headerIndex(), self._col + tableColumnIndex, name);
	                }
	                self._onColumnNameChanged(oldName, tc.name());
	            }
	            return self;
	        },
	        _onColumnNameChanged: function (oldName, newName) {
	            var slicerData = this._slicerData;
	            slicerData && slicerData.onColumnNameChanged(oldName, newName);
	        },
	       
	        setColumnDataField: function (tableColumnIndex, dataField) {
	            var self = this;
	            var tcs = self._columns;
	            if (tcs && 0 <= tableColumnIndex && tableColumnIndex < tcs.length) {
	                var tc = tcs[tableColumnIndex];
	                if (!tc) {
	                    tc = self._columns[tableColumnIndex] = new TableColumn(self._newAutoId());
	                }
	                var sheet = self._sheet;
	                var oldValue = tc.dataField();
	                if (sheet && dataField !== oldValue) {
	                    sheet._modelManager._backupTableColumn(tc, 'dataField', oldValue);
	                }
	                tc.dataField(dataField);
	            }
	            return self;
	        },
	       
	        getColumnDataField: function (tableColumnIndex) {
	            var tcs = this._columns;
	            if (tcs && 0 <= tableColumnIndex && tableColumnIndex < tcs.length) {
	                var tc = tcs[tableColumnIndex];
	                if (tc) {
	                    var dataField = tc.dataField();
	                    if (dataField !== keyword_null) {
	                        dataField = util_toString(dataField);
	                    }
	                    return dataField;
	                }
	            }
	            return keyword_null;
	        },
	       
	        
	        getColumnFormula: function (tableColumnIndex) {
	            var tcs = this._columns, sheet = this._sheet;
	            if (tcs && sheet && 0 <= tableColumnIndex && tableColumnIndex < tcs.length) {
	                var tc = tcs[tableColumnIndex];
	                if (tc) {
	                    var sheetRow = this.footerIndex(), sheetColumn = this._col + tableColumnIndex;
	                    var expr = tc.footerFormula();
	                    return expr && expressionToFormula(sheet, expr, sheetRow, sheetColumn, false);
	                }
	            }
	            return keyword_null;
	        },
	       
	        
	        setColumnFormula: function (tableColumnIndex, formula) {
	            this._setFooterFormula(tableColumnIndex, formula);
	            return this;
	        },
	       
	        
	        setColumnDataFormula: function (tableColumnIndex, formula) {
	            if (!CalcEngine) {
	                return;
	            }
	
	            var self = this;
	            var tcs = self._columns;
	            if (tcs && 0 <= tableColumnIndex && tableColumnIndex < tcs.length) {
	                var tc = tcs[tableColumnIndex];
	                if (tc) {
	                    var sheet = self._sheet;
	                    suspendCalcService(sheet);
	                    var columnIndexInSheet = tableColumnIndex + self._col;
	                    var row = self._row;
	                    var rowCount = self._rowCount;
	                    if (self.showHeader()) {
	                        row++;
	                        rowCount--;
	                    }
	                    if (self.showFooter()) {
	                        rowCount--;
	                    }
	                    var expr = formulaToExpression(self._sheet, formula, row, columnIndexInSheet);
	                    var oldValue = tc.dataAreaFormula();
	                    if (sheet && expr !== oldValue) {
	                        sheet._modelManager._backupTableColumn(tc, 'dataAreaFormula', oldValue);
	                    }
	                    tc.dataAreaFormula(expr);
	                    for (var rowIndex = row; rowIndex < row + rowCount; rowIndex++) {
	                        setFormulaToSheet(sheet, rowIndex, columnIndexInSheet, formula, expr);
	                    }
	                    resumeCalcService(sheet, false);
	                }
	            }
	            return self;
	        },
	       
	        
	        getColumnValue: function (tableColumnIndex) {
	            var self = this;
	            var tcs = self._columns;
	            if (tcs && 0 <= tableColumnIndex && tableColumnIndex < tcs.length) {
	                var tc = tcs[tableColumnIndex];
	                if (tc) {
	                   
	                    if (self._showFooter && tc.footerFormula()) {
	                        var sheet = self._sheet;
	                        if (sheet) {
	                            return sheet.getValue(self.footerIndex(), self._col + tableColumnIndex);
	                        }
	                    }
	                    return tc.footerValue();
	                }
	            }
	            return keyword_null;
	        },
	       
	        
	        setColumnValue: function (tableColumnIndex, value) {
	            var self = this;
	            var tcs = self._columns;
	            var sheet = self._sheet;
	            if (tcs && 0 <= tableColumnIndex && tableColumnIndex < tcs.length) {
	                var tc = tcs[tableColumnIndex];
	                if (tc) {
	                    var oldValue = tc.footerValue();
	                    if (sheet && value !== oldValue) {
	                        sheet._modelManager._backupTableColumn(tc, 'footerValue', oldValue);
	                    }
	                    tc.footerValue(value);
	                }
	                if (self._showFooter && sheet) {
	                    setValue(sheet, self.footerIndex(), self._col + tableColumnIndex, value);
	                }
	            }
	            return self;
	        },
	       
	        
	        filterButtonVisible: function (tableColumnIndex, value) {
	            var self = this, sheet = self._sheet, rowFilter = self.rowFilter();
	            if (tableColumnIndex < 0 || tableColumnIndex >= self._colCount) {
	                return;
	            }
	            var args = arguments;
	            switch (args.length) {
	                case 0:
	                    return rowFilter && rowFilter.filterButtonVisible();
	                case 1:
	                    var arg0 = args[0], arg0Type = typeof arg0;
	                    if (arg0Type === 'number') {
	                        return rowFilter && rowFilter.filterButtonVisible(arg0);
	                    } else if (arg0Type === 'boolean' && rowFilter) {
	                        suspendPaint(sheet);
	                        for (var i = 0; i < self._colCount; i++) {
	                            rowFilter.filterButtonVisible(i, arg0);
	                        }
	                        resumePaint(sheet);
	                    }
	                    return self;
	                case 2:
	                    rowFilter && rowFilter.filterButtonVisible(tableColumnIndex, value);
	                    return self;
	            }
	        },
	        _hasSlicerData: function () {
	            return !!this._slicerData;
	        },
	        _setOwner: function (value) {
	            var self = this;
	            self._owner = value;
	            self._sheet = value && value._sheet;
	           
	            var rowFilter = self._rowFilter;
	            if (rowFilter && rowFilter._sheet !== value._sheet) {
	                rowFilter.table(self);
	            }
	        },
	       
	        _bind: function (bindingSource) {
	            var self = this, autoGenerateColumns = self.autoGenerateColumns();
	            var oldFilterButtonVisibleInfo = self._rowFilter && self._rowFilter._filterButtonVisibleInfo;
	            self._resetFilter();
	            var sheet = self._sheet;
	            if (sheet) {
	                var drg = self.dataRange();
	                if (autoGenerateColumns) {
	                    sheet._clearCore(drg.row, drg.col, getRowCount(drg), getColCount(drg), 3 , 1  | 16 , false, true);
	                } else {
	                    $_each(self._columns, function (index, v) {
	                        var dataField = v.dataField();
	                        if (dataField) {
	                            sheet._clearCore(drg.row, drg.col + index, getRowCount(drg), 1, 3 , 1  | 16 , false, true);
	                        }
	                    });
	                }
	            }
	            if (autoGenerateColumns) {
	                var cr = self.range();
	                self._clear(cr.row, cr.col, getRowCount(cr), getColCount(cr));
	            }
	            self._bindingManager = bindingSource;
	            if (bindingSource) {
	                if (sheet) {
	                    sheet._modelManager._backupTableProperty(self, "range", {
	                        row: self._row,
	                        col: self._col,
	                        rowCount: self._rowCount,
	                        colCount: self._colCounts
	                    });
	                }
	                var rc = bindingSource.getRowCount(), cc = bindingSource.getColumnCount();
	                if (self._showHeader) {
	                    rc++;
	                }
	                if (self._showFooter) {
	                    rc++;
	                }
	                self._rowCount = rc;
	               
	                if (autoGenerateColumns) {
	                    self._colCount = cc;
	                    self._columns = [];
	                    var names = bindingSource._getFields();
	                    for (var i = 0; i < self._colCount; i++) {
	                        var tc = new TableColumn(i + 1);
	                        self._columns[i] = tc;
	                        if (names) {
	                            tc.name(names[i]);
	                            tc.dataField(names[i]);
	                        }
	                    }
	                } else {
	                    var tableBindingFields = [];
	                    self._columns.forEach(function (tableBindingColumn) {
	                        var dataField = tableBindingColumn.dataField();
	                        dataField && tableBindingFields.push(dataField);
	                    });
	                    bindingSource._setFields(tableBindingFields);
	                }
	            }
	            if (self._rowFilter) {
	                self._rowFilter._updateRange(self.dataRange());
	                self._rowFilter._filterButtonVisibleInfo = oldFilterButtonVisibleInfo;
	            }
	        },
	        _getDataSourceCol: function (col) {
	            var self = this, bindingManager = self._bindingManager;
	            if (bindingManager) {
	                var fields = bindingManager._getFields();
	                if (fields) {
	                    var column = self._columns[col - self.startColumn()];
	                    var dataField = column && column.dataField();
	                    for (var i = 0, count = fields.length; i < count; i++) {
	                        if (fields[i] === dataField) {
	                            return i;
	                        }
	                    }
	                }
	            }
	            return -1;
	        },
	        _getValue: function (row, col) {
	            var hasValue = false, value = keyword_undefined;
	            var self = this, bindingManager = self._bindingManager, newRow = row - self.dataRange().row, newCol;
	            if (bindingManager && newRow < bindingManager.getRowCount() && (newCol = self._getDataSourceCol(col)) >= 0) {
	                hasValue = true;
	                value = bindingManager.getValue(newRow, newCol).value;
	            }
	            return { _hasValue: hasValue, _value: value };
	        },
	        _setValue: function (row, col, value) {
	            var self = this, bindingManager = self._bindingManager, newRow = row - self.dataRange().row, newCol,
	                isValueSet = false, oldValue;
	            if (bindingManager && (newCol = self._getDataSourceCol(col)) >= 0) {
	                var bdValue = bindingManager.getValue(newRow, newCol);
	                oldValue = bdValue.value;
	                var sheet = self._sheet, modelManager = sheet && sheet._modelManager;
	                if (modelManager && bdValue.hasBinding && oldValue !== value) {
	                    modelManager._updateDirty(row, col, { _oldValue: oldValue });
	                }
	                bindingManager.setValue(newRow, newCol, value, modelManager && modelManager._changes);
	                isValueSet = true;
	            }
	            return isValueSet;
	        },
	        _getStyle: function (row, col, property) {
	            if (TableTheme[property]) {
	                var s = new Style();
	                this._compose(row, col, s);
	                return s;
	            }
	            return keyword_null;
	        },
	        _compose: function (row, col, dest) {
	            var self = this, style = self.style();
	            if (!style) {
	                return;
	            }
	            var sheet = self._sheet;
	           
	           
	           
	            var showHeader = self._showHeader, showFooter = self._showFooter,
	                highlightLastColumn = self.highlightLastColumn(), highlightFirstColumn = self.highlightFirstColumn();
	            var headerRowIndex = self.headerIndex(), footerRowIndex = self.footerIndex(),
	                isFirstRow = (showHeader ? (row === self._row + 1) : (row === self._row)),
	                isLastRow = (showFooter ? (row === self._row + self._rowCount - 2) : (row === self._row + self._rowCount - 1)),
	                isFirstCol = (col === self._col),
	                isLastCol = (col === self._col + self._colCount - 1),
	                firstTableRow = (showHeader ? (row === headerRowIndex) : (row === self._row)),
	                lastTableRow = (showFooter ? (row === footerRowIndex) : (row === self._row + self._rowCount - 1)),
	                highlightLastColumnStyle = style[HIGHLIGHT_LAST_COLUMN_STYLE](),
	                highlightFirstColumnStyle = style[HIGHLIGHT_FIRST_COLUMN_STYLE]();
	
	           
	           
	           
	           
	           
	            var tempStyle = new Style();
	            if (headerRowIndex === row) {
	               
	                var lastHeaderCellStyle = style[LAST_HEADER_CELL_STYLE]();
	                if (isLastCol && highlightLastColumn && lastHeaderCellStyle) {
	                    lastHeaderCellStyle._compose(tempStyle, true, true, true, true);
	                }
	                var firstHeaderCellStyle = style[FIRST_HEADER_CELL_STYLE]();
	                if (isFirstCol && highlightFirstColumn && firstHeaderCellStyle) {
	                    firstHeaderCellStyle._compose(tempStyle, true, true, true, true);
	                }
	                var headerRowStyle = style[HEADER_ROW_STYLE]();
	                if (headerRowStyle) {
	                    headerRowStyle._compose(tempStyle, true, isFirstCol, true, isLastCol);
	                }
	                if (isLastCol && highlightLastColumn && highlightLastColumnStyle) {
	                    highlightLastColumnStyle._compose(tempStyle, true, true, false, true);
	                }
	                if (isFirstCol && highlightFirstColumn && highlightFirstColumnStyle) {
	                    highlightFirstColumnStyle._compose(tempStyle, true, true, false, true);
	                }
	            } else if (footerRowIndex === row) {
	               
	                var lastFooterCellStyle = style[LAST_FOOTER_CELL_STYLE]();
	                if (isLastCol && highlightLastColumn && lastFooterCellStyle) {
	                    lastFooterCellStyle._compose(tempStyle, true, true, true, true);
	                }
	                var firstFooterCellStyle = style[FIRST_FOOTER_CELL_STYLE]();
	                if (isFirstCol && highlightFirstColumn && firstFooterCellStyle) {
	                    firstFooterCellStyle._compose(tempStyle, true, true, true, true);
	                }
	                var footerRowStyle = style[FOOTER_ROW_STYLE]();
	                if (footerRowStyle) {
	                    footerRowStyle._compose(tempStyle, true, isFirstCol, true, isLastCol);
	                }
	                if (isLastCol && highlightLastColumn && highlightLastColumnStyle) {
	                    highlightLastColumnStyle._compose(tempStyle, false, true, true, true);
	                }
	                if (isFirstCol && highlightFirstColumn && highlightFirstColumnStyle) {
	                    highlightFirstColumnStyle._compose(tempStyle, false, true, true, true);
	                }
	            } else {
	               
	                if (isLastCol && highlightLastColumn && highlightLastColumnStyle) {
	                    highlightLastColumnStyle._compose(tempStyle, firstTableRow, true, lastTableRow, true);
	                }
	                if (isFirstCol && highlightFirstColumn && highlightFirstColumnStyle) {
	                    highlightFirstColumnStyle._compose(tempStyle, firstTableRow, true, lastTableRow, true);
	                }
	                var relativeRow = (showHeader ? row - self._row - 1 : row - self._row), relativeCol = col - self._col;
	                if (_CacheMgr._cached && _CacheMgr._visibleRowIndexCache) {
	                    var relativeRowCatch = _CacheMgr._visibleRowIndexCache;
	                    var r = self.dataRange().row;
	                    while (relativeRowCatch[r] === -1) {
	                        r++;
	                    }
	                    if (r > row) {
	                        return;
	                    }
	                    relativeRow = relativeRowCatch[row] - relativeRowCatch[r];
	                } else if (sheet) {
	                    var rCount = 0, cCount = 0;
	                    for (r = self.dataRange().row; r < row; r++) {
	                        if (sheet.getRowHeight(r) > 0) {
	                            rCount++;
	                        }
	                    }
	                    for (var c = self._col; c < col; c++) {
	                        if (sheet.getColumnWidth(c) > 0) {
	                            cCount++;
	                        }
	                    }
	                    relativeRow = rCount;
	                    relativeCol = cCount;
	                }
	                if (self.bandRows()) {
	                    var firstStripSize = style[FIRST_ROW_STRIP_SIZE](),
	                        stripSize = firstStripSize + style[SECOND_ROW_STRIP_SIZE]();
	                    if (stripSize > 0) {
	                        var alter = relativeRow % stripSize,
	                            firstStripStyle = style[FIRST_ROW_STRIP_STYLE](),
	                            secondStripStyle = style[SECOND_ROW_STRIP_STYLE]();
	                        if (alter < firstStripSize && firstStripStyle) {
	                            var bandFirst = (alter === 0);
	                            var bandLast = (isLastRow || alter === firstStripSize - 1);
	                            firstStripStyle._compose(tempStyle, bandFirst, isFirstCol, bandLast, isLastCol);
	                        } else if (alter >= firstStripSize && secondStripStyle) {
	                            bandFirst = (alter === firstStripSize);
	                            bandLast = (isLastRow || alter === stripSize - 1);
	                            secondStripStyle._compose(tempStyle, bandFirst, isFirstCol, bandLast, isLastCol);
	                        }
	                    }
	                }
	                if (self.bandColumns()) {
	                    firstStripSize = style[FIRST_COLUMN_STRIP_SIZE]();
	                    stripSize = firstStripSize + style[SECOND_COLUMN_STRIP_SIZE]();
	                    if (stripSize > 0) {
	                        alter = relativeCol % stripSize;
	                        firstStripStyle = style[FIRST_COLUMN_STRIP_STYLE]();
	                        secondStripStyle = style[SECOND_COLUMN_STRIP_STYLE]();
	                        if (alter < firstStripSize && firstStripStyle) {
	                            bandFirst = (alter === 0);
	                            bandLast = (isLastCol || alter === firstStripSize - 1);
	                            firstStripStyle._compose(tempStyle, isFirstRow, bandFirst, isLastRow, bandLast);
	                        } else if (alter >= firstStripSize && secondStripStyle) {
	                            bandFirst = (alter === firstStripSize);
	                            bandLast = (isLastCol || alter === stripSize - 1);
	                            secondStripStyle._compose(tempStyle, isFirstRow, bandFirst, isLastRow, bandLast);
	                        }
	                    }
	                }
	            }
	            var wholeTableStyle = style[WHOLE_TABLE_STYLE]();
	            if (wholeTableStyle) {
	                wholeTableStyle._compose(tempStyle, firstTableRow, isFirstCol, lastTableRow, isLastCol);
	            }
	            self._composeCellStyle(dest, tempStyle);
	        },
	        _composeCellStyle: function (dest, src) {
	            var self = dest, composeLevel = 20,  borderLeft, borderTop, borderRight,
	                borderBottom;
	           
	            if (isNullOrUndefined(self.backColor)) {
	                self.backColor = src.backColor;
	            }
	            if (isNullOrUndefined(self.foreColor)) {
	                self.foreColor = src.foreColor;
	            }
	            if (isNullOrUndefined(self.themeFont) && isNullOrUndefined(self.font)) {
	                self.themeFont = src.themeFont;
	                self.font = src.font;
	            } else if (!isNullOrUndefined(self.themeFont) && isNullOrUndefined(self.font)) {
	                self.font = src.font;
	            }
	            if (isNullOrUndefined(self.borderLeft)) {
	                borderLeft = src.borderLeft;
	                self.borderLeft = ((borderLeft && borderLeft._clone()) || borderLeft);
	                if (self.borderLeft) {
	                    self.borderLeft.level = composeLevel;
	                }
	            }
	            if (isNullOrUndefined(self.borderTop)) {
	                borderTop = src.borderTop;
	                self.borderTop = ((borderTop && borderTop._clone()) || borderTop);
	                if (self.borderTop) {
	                    self.borderTop.level = composeLevel;
	                }
	            }
	            if (isNullOrUndefined(self.borderRight)) {
	                borderRight = src.borderRight;
	                self.borderRight = ((borderRight && borderRight._clone()) || borderRight);
	                if (self.borderRight) {
	                    self.borderRight.level = composeLevel;
	                }
	            }
	            if (isNullOrUndefined(self.borderBottom)) {
	                borderBottom = src.borderBottom;
	                self.borderBottom = ((borderBottom && borderBottom._clone()) || borderBottom);
	                if (self.borderBottom) {
	                    self.borderBottom.level = composeLevel;
	                }
	            }
	            if (isNullOrUndefined(self.textDecoration)) {
	                self.textDecoration = src.textDecoration;
	            }
	        },
	        _moveTo: function (row, col) {
	            var self = this;
	            if (row === self._row && col === self._col) {
	                return;
	            }
	            var sheet = self._sheet;
	            if (sheet) {
	                if (row < 0 || sheet.getRowCount() < row + self._rowCount || col < 0 || sheet.getColumnCount() < col + self._colCount) {
	                    throwError(sR().Exp_TableMoveOutOfRange);
	                }
	               
	                var tableManager = self._owner, tables, i, length;
	                if (tableManager) {
	                    tables = tableManager.all();
	                    i = 0;
	                    length = tables.length;
	                    for (; i < length; i++) {
	                        if (tables[i] === self) {
	                            tables.splice(i, 1);
	                            self._clearSheetModelFormula();
	                            break;
	                        }
	                    }
	                }
	                sheet.moveTo(self._row, self._col, row, col, self._rowCount, self._colCount, 1  | 2 );
	               
	                if (tables && i <= length) {
	                    self._moveToCore(row, col);
	                    tables.splice(i, 0, self);
	                    self._syncSheetModelFormula();
	                }
	            }
	        },
	        _moveToCore: function (row, col) {
	            var self = this;
	            var sheet = self._sheet;
	            if (sheet) {
	                sheet._modelManager._backupTableProperty(self, "range", {
	                    row: self._row,
	                    col: self._col,
	                    rowCount: self._rowCount,
	                    colCount: self._colCount
	                });
	            }
	            self._row = row;
	            self._col = col;
	            self._updateFilter();
	        },
	        _clearSheetModelFormula: function (colIndex, endColIndex) {
	            var self = this, sheet = self._sheet;
	            if (!sheet || !CalcEngine) {
	                return;
	            }
	            var columnInfos = self._columns, footerIndex = self.footerIndex(), tableRange = self.range(),
	                tableDataRange = self.dataRange();
	            if (isNullOrUndefined(colIndex)) {
	                colIndex = 0;
	                endColIndex = columnInfos.length;
	            }
	            for (; colIndex < endColIndex; colIndex++) {
	                var info = columnInfos[colIndex], col = tableRange.col + colIndex;
	                if (info && info.footerFormula() && footerIndex >= 0) {
	                    setFormulaToSheet(sheet, footerIndex, col, keyword_null);
	                    setValue(sheet, footerIndex, col, keyword_null);
	                }
	                if (info && info.dataAreaFormula()) {
	                    for (var rowIndex = 0, rowCount = getRowCount(tableDataRange); rowIndex < rowCount; rowIndex++) {
	                        setFormulaToSheet(sheet, tableDataRange.row + rowIndex, col, keyword_null);
	                        setValue(sheet, tableDataRange.row + rowIndex, col, keyword_null);
	                    }
	                }
	            }
	        },
	        _syncSheetModelFormula: function () {
	            var self = this, sheet = self._sheet;
	            if (!sheet || !CalcEngine) {
	                return;
	            }
	            var footerIndex = self.footerIndex(), tableRange = self.range(), tableDataRange = self.dataRange();
	            $_each(self._columns, function (i, info) {
	                var sheetColumn = tableRange.col + i;
	                var footerFormulaExpr = info.footerFormula(), dataAreaFormulaExpr = info.dataAreaFormula();
	                if (footerFormulaExpr && footerIndex >= 0) {
	                    setFormulaToSheet(sheet, footerIndex, sheetColumn, keyword_null, footerFormulaExpr);
	                }
	                if (dataAreaFormulaExpr) {
	                    for (var rowIndex = 0, rowCount = getRowCount(tableDataRange); rowIndex < rowCount; rowIndex++) {
	                        var sheetRow = tableDataRange.row + rowIndex;
	                        setFormulaToSheet(sheet, sheetRow, sheetColumn, keyword_null, dataAreaFormulaExpr);
	                    }
	                }
	            });
	        },
	        _resize: function (newRange, ignoreUpdateDataSource) {
	            var self = this, oldDataRange = self.dataRange();
	            if (newRange.equals(self.range())) {
	                return;
	            }
	            var row = newRange.row, col = newRange.col, rowCount = getRowCount(newRange),
	                colCount = getColCount(newRange);
	            var showHeader = self._showHeader, showFooter = self._showFooter;
	            var minRowCount = 0, minColCount = 1;
	            if (showHeader) {
	                minRowCount += 1;
	            }
	            if (showFooter) {
	                minRowCount += 1;
	            }
	            var sheet = self._sheet;
	            if (sheet) {
	                if (rowCount < minRowCount || colCount < minColCount ||
	                    row + rowCount > sheet.getRowCount() || col + colCount > sheet.getColumnCount()) {
	                    throwError(sR().Exp_TableResizeOutOfRange);
	                }
	                if (row !== self._row || !newRange.intersect(self._row, self._col, self._rowCount, self._colCount)) {
	                    throwError(sR().Exp_TableResizeInvalidRange);
	                }
	                sheet._modelManager._backupTableProperty(self, "range", {
	                    row: self._row,
	                    col: self._col,
	                    rowCount: self._rowCount,
	                    colCount: self._colCount
	                });
	                sheet._modelManager._backupTableProperty(self, "columns", self._columns.slice());
	            }
	            var tcs = self._columns;
	           
	            var newStartCol = col, newEndCol = col + colCount - 1;
	            var oldStartCol = self._col, oldEndCol = self._col + self._colCount - 1;
	            var oldColCount = self._colCount;
	            self._col = col;
	            self._colCount = colCount;
	            if (newStartCol < oldStartCol) {
	               
	                var insertIndex = 0;
	                for (var i = newStartCol; i < oldStartCol; i++) {
	                    var tc = new TableColumn(self._newAutoId());
	                    tcs.splice(insertIndex++, 0, tc);
	                }
	                if (showHeader) {
	                    self._syncHeader(0, oldStartCol - newStartCol);
	                }
	                if (showFooter) {
	                    self._syncFooter(0, oldStartCol - newStartCol);
	                }
	            } else if (newStartCol <= oldEndCol) {
	               
	                self._clearSheetModelFormula(oldStartCol, newStartCol);
	                tcs.splice(0, newStartCol - oldStartCol);
	            }
	            if (newEndCol > oldEndCol) {
	                for (i = oldEndCol + 1; i <= newEndCol; i++) {
	                    tc = new TableColumn(self._newAutoId());
	                    tcs.push(tc);
	                }
	                if (showHeader) {
	                    self._syncHeader(oldColCount, newEndCol - oldEndCol);
	                }
	                if (showFooter) {
	                    self._syncFooter(oldColCount, newEndCol - oldEndCol);
	                }
	            } else if (newEndCol >= oldStartCol) {
	               
	                self._clearSheetModelFormula(newEndCol, oldEndCol);
	                tcs.splice(tcs.length - (oldEndCol - newEndCol), oldEndCol - newEndCol);
	            }
	           
	            if (rowCount !== self._rowCount) {
	                var bm = self._bindingManager, dataRange = self.dataRange(), dataRangeRow = dataRange.row,
	                    dataRangeRowCount = getRowCount(dataRange);
	                if (bm) {
	                    if (rowCount > self._rowCount) {
	                        var addRowIndex = dataRangeRow + dataRangeRowCount, addRowCount = rowCount - self._rowCount;
	                        if (sheet) {
	                            sheet.addRows(addRowIndex, addRowCount);
	                        }
	                       
	                        if (!showFooter) {
	                            if (!ignoreUpdateDataSource) {
	                                self._updateDataSourceOnAddRows(addRowIndex, addRowCount);
	                            }
	                            self._rowCount = rowCount;
	                            self._updateFormulaOnAddRows(addRowIndex, addRowCount);
	                        }
	                    } else if (sheet) {
	                        var deleteRowCount = self._rowCount - rowCount;
	                        sheet.deleteRows(dataRangeRow + dataRangeRowCount - deleteRowCount, deleteRowCount);
	                    }
	                } else {
	                   
	                    var oldFooterIndex;
	                    if (showFooter) {
	                        self._syncFooter();
	                        oldFooterIndex = self.footerIndex();
	                    }
	                    self._rowCount = rowCount;
	                   
	                    if (showFooter) {
	                        self._syncSheetByFooter();
	                        self._clearSheetRow(oldFooterIndex);
	                    }
	                }
	            }
	            self._updateFilter();
	            self._onTableResized(oldDataRange, self.dataRange());
	        },
	        _onTableResized: function (oldRange, newRange) {
	            var self = this, slicerData = self._slicerData;
	            if (!slicerData) {
	                return;
	            }
	
	            var oldRangeCol = oldRange.col, oldRangeRowCount = getRowCount(oldRange),
	                oldRangeColCount = getColCount(oldRange);
	            var newRangeCol = newRange.col, newRangeRowCount = getRowCount(newRange),
	                newRangeColCount = getColCount(newRange);
	            var oldEndRow = oldRange.row + oldRangeRowCount, oldEndCol = oldRangeCol + oldRangeColCount,
	                newEndRow = newRange.row + newRangeRowCount, newEndCol = newRangeCol + newRangeColCount;
	
	           
	           
	            if (newEndRow < oldEndRow) {
	                slicerData.onRowsRemoved(newRangeRowCount, oldEndRow - newEndRow);
	            }
	
	           
	            if (newEndRow > oldEndRow) {
	                slicerData.onRowsAdded(oldRangeRowCount, newEndRow - oldEndRow);
	            }
	
	           
	            if (newRangeCol > oldRangeCol) {
	                slicerData.onColumnsRemoved(0, newRangeCol - oldRangeCol);
	            }
	            if (newEndCol < oldEndCol) {
	                slicerData.onColumnsRemoved(newRangeColCount, oldEndCol - newEndCol);
	            }
	
	           
	            if (newRangeCol < oldRangeCol) {
	                slicerData.onColumnsAdded(0, oldRangeCol - newRangeCol);
	            }
	            if (newEndCol > oldEndCol) {
	                slicerData.onColumnsAdded(oldRangeCol + oldRangeColCount - newRangeCol, newEndCol - oldEndCol);
	            }
	        },
	        _updateFilter: function () {
	            var self = this, rowFilter = self._rowFilter;
	            if (rowFilter) {
	                rowFilter._updateRange(self.dataRange());
	                rowFilter.reFilter();
	            }
	        },
	        _resetFilter: function () {
	            var rowFilter = this._rowFilter;
	            if (rowFilter) {
	                rowFilter.unfilter();
	                rowFilter.reset();
	            }
	        },
	        _hasColumnName: function (name, excludeIndex) {
	            if (name !== keyword_null) {
	                name = util_toString(name);
	            }
	            for (var i = 0; i < this._colCount; i++) {
	                if (i === excludeIndex) {
	                    continue;
	                }
	                var cn = this.getColumnName(i);
	                if (name === cn) {
	                    return true;
	                }
	            }
	            return false;
	        },
	        _getHeaderName: function (col) {
	            var self = this, tcs = self._columns;
	            if (!self._showHeader || !tcs) {
	                return keyword_null;
	            }
	            var c = (col - self._col);
	            if (0 <= c && c < tcs.length) {
	                var tc = tcs[c];
	                if (tc) {
	                    var name = tc.name();
	                    if (!isNullOrUndefined(name)) {
	                        name = util_toString(name);
	                    }
	                    return name;
	                }
	            }
	            return keyword_null;
	        },
	        _setHeaderName: function (col, name) {
	            var self = this, tcs = self._columns;
	            if (!self._showHeader || !tcs) {
	                return;
	            }
	            var length = tcs.length;
	            var c = (col - self._col);
	            if (0 <= c && c < length) {
	                var tc = tcs[c];
	                if (tc) {
	                    var oldName = tc.name();
	                    var sheet = self._sheet;
	                    if (sheet && name !== oldName) {
	                        sheet._modelManager._backupTableColumn(tc, 'name', oldName);
	                    }
	                    tc.name(name);
	                   
	                   
	                   
	                   
	                   
	                   
	                    self._onColumnNameChanged(oldName, tc.name());
	                }
	            }
	        },
	        _setFooterFormula: function (tableColumnIndex, formula, expr) {
	            var self = this, tcs = self._columns;
	            var sheetRow = self.footerIndex(), sheetColumn = self._col + tableColumnIndex;
	            var sheet = self._sheet;
	            if (CalcEngine && 0 <= tableColumnIndex && tableColumnIndex < tcs.length) {
	                var tc = tcs[tableColumnIndex];
	                if (formula && !expr && sheet) {
	                    expr = formulaToExpression(sheet, formula, sheetRow, sheetColumn);
	                    if (self._showFooter) {
	                        setFormulaToSheet(sheet, sheetRow, sheetColumn, formula, expr);
	                    }
	                }
	                if (tc) {
	                    var oldValue = tc.footerFormula();
	                    if (sheet && expr !== oldValue) {
	                        sheet._modelManager._backupTableColumn(tc, 'footerFormula', oldValue);
	                    }
	                    tc.footerFormula(expr);
	                }
	            }
	        },
	        _setFooterValue: function (col, value) {
	            var self = this, tcs = self._columns;
	            if (!self._showFooter || !tcs) {
	                return;
	            }
	            var c = (col - self._col);
	            if (0 <= c && c < tcs.length) {
	                var tc = tcs[c];
	                if (tc) {
	                    var oldValue = tc.footerValue();
	                    if (value !== oldValue) {
	                        var sheet = self._sheet;
	                        if (sheet) {
	                            sheet._modelManager._backupTableColumn(tc, 'footerValue', oldValue);
	                            sheet._modelManager._updateDirty(self._row + self._rowCount - 1, col, { _oldValue: tc.footerValue() });
	                        }
	                    }
	                    tc.footerValue(value);
	                }
	            }
	        },
	        _newAutoId: function () {
	            var tcs = this._columns, count = tcs && tcs.length;
	            if (count === 0) {
	                return -1;
	            }
	            var ids = [], tc;
	            for (var i = 0; i < count; i++) {
	                tc = tcs[i];
	                if (tc && tc._isAutoId()) {
	                    ids.push(tc.id());
	                }
	            }
	            ids.sort(function (a, b) {
	                return (a - b);
	            });
	            count = ids.length;
	            if (count > 0) {
	                for (i = 0; i < count; i++) {
	                    if (ids[i] !== i + 1) {
	                        return (i + 1);
	                    }
	                }
	                return count + 1;
	            }
	            return 1;
	        },
	        _getNoConflictTableColumnName: function (name, columnIndex) {
	            var newName = name, index = 2;
	            while (this._hasColumnName(newName, columnIndex)) {
	                newName = name + index++;
	            }
	            return newName;
	        },
	       
	        _syncHeader: function (start, count) {
	            var self = this, tcs = self._columns;
	            var sheet = self._sheet;
	            if (!self._showHeader || !tcs || !sheet) {
	                return;
	            }
	            var tcsLength = tcs.length;
	            var row = self.headerIndex();
	            var baseCol = self._col, tc;
	            if (isNullOrUndefined(start)) {
	                start = 0;
	            }
	            if (isNullOrUndefined(count)) {
	                count = tcsLength;
	            }
	            var end = Math_min(tcsLength, start + count);
	            var txt;
	            for (var i = start; i < end; i++) {
	                tc = tcs[i];
	                if (tc) {
	                   
	                   
	                    var tableList = self._owner._tableList;
	                    var index = $_inArray(self, tableList);
	                    if (index > -1) {
	                        tableList.splice(index, 1);
	                    }
	                    txt = sheet.getText(row, baseCol + i);
	                    if (index > -1) {
	                        tableList.splice(index, 0, self);
	                    }
	                    setFormulaToSheet(sheet, row, baseCol + i, keyword_null);
	                    if (txt) {
	                       
	                        CalcEngine && sheet._recalcCell(row, baseCol + i);
	
	                        var newName = self._getNoConflictTableColumnName(txt, i);
	                        if (newName === txt) {
	                            sheet._modelManager._backupTableColumn(tc, 'name', tc.name());
	                            tc.name(txt);
	                        } else {
	                            sheet.setText(row, baseCol + i, newName);
	                        }
	                    } else {
	                        sheet.setText(row, baseCol + i, tc.name());
	                    }
	                }
	            }
	        },
	       
	        _syncFooter: function (start, count) {
	            var self = this, tcs = self._columns;
	            var sheet = self._sheet;
	            if (!self._showFooter || !tcs || !sheet) {
	                return;
	            }
	            var tcsLength = tcs.length;
	            var row = self.footerIndex();
	            var baseCol = self._col, tc;
	            if (isNullOrUndefined(start)) {
	                start = 0;
	            }
	            if (isNullOrUndefined(count)) {
	                count = tcsLength;
	            }
	            var end = Math_min(tcsLength, start + count);
	            var expr, value;
	            for (var i = start; i < end; i++) {
	                tc = tcs[i];
	                if (tc) {
	                    expr = sheet._getExpression && sheet._getExpression(row, baseCol + i);
	                    if (expr) {
	                        var oldFormula = tc.dataAreaFormula();
	                        if (expr !== oldFormula) {
	                            sheet._modelManager._backupTableColumn(tc, 'dataAreaFormula', oldFormula);
	                        }
	                        tc.footerFormula(expr);
	                    } else if (!self._ignoreFormula) {
	                        setFormulaToSheet(sheet, row, baseCol + i, keyword_null, tc.footerFormula());
	                    }
	                    value = sheet.getValue(row, baseCol + i);
	                    if (!isNullOrUndefined(value)) {
	                        var oldValue = tc.footerValue();
	                        if (value !== oldValue) {
	                            sheet._modelManager._backupTableColumn(tc, 'footerValue', oldValue);
	                        }
	                        tc.footerValue(value);
	                    } else {
	                        setValue(sheet, row, baseCol + i, tc.footerValue());
	                    }
	                }
	            }
	        },
	        _clearHeader: function (start, count) {
	            var self = this, tcs = self._columns;
	            if (!self._showHeader || !tcs) {
	                return;
	            }
	            var tcsLength = tcs.length;
	            var tc;
	            if (isNullOrUndefined(start)) {
	                start = 0;
	            }
	            if (isNullOrUndefined(count)) {
	                count = tcsLength;
	            }
	            var end = Math_min(tcsLength, start + count);
	            for (var i = start; i < end; i++) {
	                tc = tcs[i];
	                if (tc) {
	                    var oldName = tc.name();
	                    var sheet = self._sheet;
	                    if (sheet && oldName !== keyword_null) {
	                        sheet._modelManager._backupTableColumn(tc, 'name', oldName);
	                    }
	                    tc.name(keyword_null);
	                    self._onColumnNameChanged(oldName, tc.name());
	                }
	            }
	        },
	        _clearDataRange: function (clearRange) {
	            var self = this;
	            var dataRange = self.dataRange();
	            if (dataRange.containsRange(clearRange)) {
	                var row = clearRange.row, col = clearRange.col, rowCount = getRowCount(clearRange),
	                    colCount = getColCount(clearRange);
	                var changedDataItems = [];
	                for (var r = 0; r < rowCount; r++) {
	                    for (var c = 0; c < colCount; c++) {
	                        self._setValue(row + r, col + c, keyword_null);
	                        changedDataItems.push({
	                            columnName: self.getColumnName(col + c - dataRange.col),
	                            row: row + r - dataRange.row,
	                            data: ''
	                        });
	                    }
	                }
	                var slicerData = self._slicerData;
	                slicerData && slicerData.onDataChanged(changedDataItems);
	            }
	        },
	        _clearFooter: function (start, count) {
	            var self = this, tcs = self._columns;
	            if (!self._showFooter || !tcs) {
	                return;
	            }
	            var tc;
	            if (isNullOrUndefined(start)) {
	                start = 0;
	            }
	            if (isNullOrUndefined(count)) {
	                count = tcs.length;
	            }
	            var end = Math_min(tcs.length, start + count);
	            for (var i = start; i < end; i++) {
	                tc = tcs[i];
	                if (tc) {
	                    var sheet = self._sheet;
	                    var oldFormula = tc.footerFormula();
	                    if (sheet && keyword_null !== oldFormula) {
	                        sheet._modelManager._backupTableColumn(tc, 'footerFormula', oldFormula);
	                    }
	                    tc.footerFormula(keyword_null);
	                    var oldValue = tc.footerValue();
	                    if (sheet && keyword_null !== oldValue) {
	                        sheet._modelManager._backupTableColumn(tc, 'footerValue', oldValue);
	                    }
	                    tc.footerValue(keyword_null);
	                }
	            }
	        },
	       
	        _syncSheetByFooter: function () {
	            var self = this, tcs = self._columns;
	            if (!self._showFooter || !tcs) {
	                return;
	            }
	            var sheet = self._sheet;
	            if (!sheet) {
	                return;
	            }
	            var count = tcs.length, tc;
	            var baseCol = self._col, col;
	            var footerIndex = self.footerIndex();
	            for (var i = 0; i < count; i++) {
	                tc = tcs[i];
	                if (tc) {
	                    col = baseCol + i;
	                    setValue(sheet, footerIndex, col, tc.footerValue());
	                    setFormulaToSheet(sheet, footerIndex, col, keyword_null, tc.footerFormula());
	                }
	            }
	        },
	        _clearSheetRow: function (row) {
	            var self = this, sheet = self._sheet;
	            if (!sheet) {
	                return;
	            }
	            if (row < 0 || sheet.getRowCount() <= row) {
	                return;
	            }
	            var baseCol = self._col, count = self._colCount, col;
	            for (var i = 0; i < count; i++) {
	                col = baseCol + i;
	                setFormulaToSheet(sheet, row, col, keyword_null);
	                setValue(sheet, row, col, keyword_null);
	            }
	        },
	        _onRowsAdded: function (row, count, ignoreUpdateDataSource) {
	            var self = this, dataSourceChanged = false;
	            if (row >= self._row + self._rowCount) {
	                return dataSourceChanged;
	            }
	            var sheet = self._sheet;
	            if (sheet) {
	                sheet._modelManager._backupTableProperty(self, "range", {
	                    row: self._row,
	                    col: self._col,
	                    rowCount: self._rowCount,
	                    colCount: self._colCount
	                });
	            }
	            var firstRow = self._row, lastRow = self._row + self._rowCount - 1;
	            if (row <= firstRow) {
	                self._row += count;
	            } else if (row <= lastRow) {
	                if (!ignoreUpdateDataSource) {
	                    dataSourceChanged = self._updateDataSourceOnAddRows(row, count);
	                }
	                self._rowCount += count;
	            }
	            return dataSourceChanged;
	        },
	        _onRowsAdded2: function (row, count) {
	            var self = this, lastRow = self._row + self._rowCount - 1;
	            if (row <= lastRow) {
	                self._updateFormulaOnAddRows(row, count);
	            }
	            var slicerData = self._slicerData;
	            var dataRange = self.dataRange(), oldDataRangeRow = dataRange.row, oldEndRow = self.endRow();
	            if (row >= oldDataRangeRow && row <= oldEndRow && slicerData) {
	                slicerData.onRowsAdded(row - oldDataRangeRow, count);
	            }
	            if (self._rowFilter) {
	                self._rowFilter._onRowsAdded(row, count);
	            }
	        },
	        _updateDataSourceOnAddRows: function (row, count) {
	            var self = this, firstRow = self._row, bm = self._bindingManager;
	            if (bm) {
	                var sheet = this._sheet, changes = sheet && sheet._modelManager._changes;
	                bm._addItems(row - (self.showHeader() ? firstRow + 1 : firstRow), count, changes);
	                return true;
	            }
	            return false;
	        },
	        _updateFormulaOnAddRows: function (row, count) {
	            if (!CalcEngine) {
	                return;
	            }
	            var self = this, sheet = self._sheet;
	            suspendCalcService(sheet);
	            $_each(self._columns, function (i, column) {
	                var dataAreaFormula = column.dataAreaFormula();
	                if (dataAreaFormula) {
	                    var columnIndexInSheet = i + self._col;
	                    for (var rowIndex = row; rowIndex < row + count; rowIndex++) {
	                        setFormulaToSheet(sheet, rowIndex, columnIndexInSheet, keyword_null, dataAreaFormula);
	                    }
	                }
	            });
	            resumeCalcService(sheet, false);
	        },
	        _onColumnsAdded: function (col, count) {
	            var self = this;
	            if (col >= self._col + self._colCount) {
	                return;
	            }
	            var oldColumn = self._col;
	            var sheet = self._sheet;
	            if (sheet) {
	                sheet._modelManager._backupTableProperty(self, "range", {
	                    row: self._row,
	                    col: self._col,
	                    rowCount: self._rowCount,
	                    colCount: self._colCount
	                });
	                sheet._modelManager._backupTableProperty(self, "columns", self._columns.slice());
	            }
	            if (col <= self._col) {
	                self._col += count;
	            } else if (col < self._col + self._colCount) {
	                self._colCount += count;
	               
	                var tcs = self._columns;
	                if (tcs) {
	                    for (var i = 0; i < count; i++) {
	                        var tc = new TableColumn(self._newAutoId());
	                        tcs.splice(col + i - self._col, 0, tc);
	                    }
	                }
	            }
	            if (self._rowFilter) {
	                self._rowFilter._onColumnsAdded(col, count);
	            }
	            if (col >= oldColumn) {
	                var slicerData = self._slicerData;
	                slicerData && slicerData.onColumnsAdded(col - oldColumn, count);
	            }
	        },
	        _onRowsRemoved: function (row, count, ignoreUpdateDataSource) {
	            var self = this, dataSourceChanged = false;
	            if (row >= self._row + self._rowCount) {
	                return dataSourceChanged;
	            }
	            var dataRange = self.dataRange(), oldDataRangeRow = dataRange.row,
	                oldDataRangeRowCount = getRowCount(dataRange);
	            var firstRow = self._row, lastRow = self._row + self._rowCount - 1;
	            var sheet = self._sheet, bm = self._bindingManager, changes;
	            if (sheet) {
	                sheet._modelManager._backupTableProperty(self, "range", {
	                    row: self._row,
	                    col: self._col,
	                    rowCount: self._rowCount,
	                    colCount: self._colCount
	                });
	                changes = sheet._modelManager._changes;
	            }
	            if (row < firstRow) {
	                if (row + count <= firstRow) {
	                    self._row -= count;
	                }
	            } else if (row === firstRow) {
	                if (!self._showHeader) {
	                    self._rowCount -= Math_min(lastRow - row + 1, count);
	                    if (!ignoreUpdateDataSource && bm) {
	                        bm._removeItems(row - (self.showHeader() ? firstRow + 1 : firstRow), Math_min(lastRow - row + 1, count), changes);
	                        dataSourceChanged = true;
	                    }
	                }
	            } else if (row <= lastRow) {
	                self._rowCount -= Math_min(lastRow - row + 1, count);
	                if (!ignoreUpdateDataSource && bm) {
	                    bm._removeItems(row - (self.showHeader() ? firstRow + 1 : firstRow), Math_min(lastRow - row + 1, count), changes);
	                    dataSourceChanged = true;
	                }
	               
	                if (row === lastRow && self._showFooter) {
	                    self._showFooter = false;
	                }
	            }
	            if (self._rowFilter) {
	                self._rowFilter._onRowsRemoved(row, count);
	            }
	
	            if (row >= oldDataRangeRow && row < oldDataRangeRow + oldDataRangeRowCount) {
	                var slicerData = self._slicerData;
	                slicerData && slicerData.onRowsRemoved(row - oldDataRangeRow, count);
	            }
	            return dataSourceChanged;
	        },
	        _onColumnsRemoved: function (col, count) {
	            var self = this;
	            var tcs = self._columns;
	            if (col >= self._col + self._colCount) {
	                return;
	            }
	            var sheet = self._sheet;
	            if (sheet) {
	                sheet._modelManager._backupTableProperty(self, "range", {
	                    row: self._row,
	                    col: self._col,
	                    rowCount: self._rowCount,
	                    colCount: self._colCount
	                });
	                sheet._modelManager._backupTableProperty(self, "columns", self._columns.slice());
	            }
	            var oldColumn = self._col;
	            var firstCol = self._col, lastCol = self._col + self._colCount - 1;
	            if (col < firstCol) {
	                if (col + count <= firstCol) {
	                    self._col -= count;
	                } else {
	                    self._col = col;
	                    self._colCount -= (col + count - firstCol);
	                   
	                    if (tcs) {
	                        tcs.splice(0, col + count - firstCol);
	                    }
	                }
	            } else {
	                self._colCount -= Math_min(lastCol - col + 1, count);
	               
	                if (tcs) {
	                    tcs.splice(col - firstCol, Math_min(lastCol - col + 1, count));
	                }
	            }
	            if (self._rowFilter) {
	                self._rowFilter._onColumnsRemoved(col, count);
	            }
	            if (col >= oldColumn) {
	                var slicerData = self._slicerData;
	                slicerData && slicerData.onColumnsRemoved(col - oldColumn, count);
	            }
	        },
	        _clear: function (row, col, rowCount, colCount) {
	            var self = this;
	            var maxRowCount = rowCount, maxColCount = colCount;
	            var sheet = self._sheet;
	            if (sheet) {
	                maxRowCount = sheet.getRowCount();
	                maxColCount = sheet.getColumnCount();
	            }
	            var r = row < 0 ? 0 : row;
	            var c = col < 0 ? 0 : col;
	            var rc = row < 0 ? maxRowCount : rowCount;
	            var cc = col < 0 ? maxColCount : colCount;
	            var clearRange = createRange(r, c, rc, cc);
	           
	            var headerIndex = self.headerIndex();
	            if (self._showHeader && r <= headerIndex && headerIndex < r + rc) {
	                var headerRange = createRange(headerIndex, self._col, 1, self._colCount);
	                var cr = clearRange.getIntersect(headerRange, maxRowCount, maxColCount);
	                if (cr) {
	                    self._clearHeader(cr.col - self._col, getColCount(cr));
	                }
	            }
	           
	            var dataRange = self.dataRange();
	            var intersectRange = clearRange.getIntersect(dataRange, maxRowCount, maxColCount);
	            if (intersectRange) {
	                self._clearDataRange(intersectRange);
	            }
	           
	            var footerIndex = self.footerIndex();
	            if (self._showFooter && r <= footerIndex && footerIndex < r + rc) {
	                var footerRange = createRange(footerIndex, self._col, 1, self._colCount);
	                cr = clearRange.getIntersect(footerRange, maxRowCount, maxColCount);
	                if (cr) {
	                    self._clearFooter(cr.col - self._col, getColCount(cr));
	                }
	            }
	           
	            if (self._rowFilter) {
	                self._rowFilter._clear(row, col, rowCount, colCount);
	            }
	        },
	        toJSON: function () {
	            var self = this, style = self.style(), rowFilter = self._rowFilter, COLUMNS = 'columns';
	            var dictData = {
	                name: [self.name(), keyword_null],
	                row: [self._row, -1],
	                col: [self._col, -1],
	                rowCount: [self._rowCount, -1],
	                colCount: [self._colCount, -1],
	                showHeader: [self._showHeader, true],
	                showFooter: [self._showFooter, false],
	                highlightFirstColumn: [self.highlightFirstColumn(), false],
	                highlightLastColumn: [self.highlightLastColumn(), false],
	                bandRows: [self.bandRows(), true],
	                bandColumns: [self.bandColumns(), false],
	                style: [style ? style.toJSON() : keyword_null, keyword_null],
	                autoGenerateColumns: [self.autoGenerateColumns(), true],
	                bindingPath: [self.bindingPath(), keyword_undefined],
	                rowFilter: [rowFilter ? rowFilter.toJSON() : keyword_null, keyword_null]
	            };
	            dictData[COLUMNS] = [[]];
	            for (var i = 0; i < self._columns.length; i++) {
	                var columnJSON = self._columns[i].toJSON(), footerFormula = columnJSON[CONST_FOOTER_FORMULA],
	                    dataAreaFormula = columnJSON[CONST_DATA_AREA_FORMULA];
	                if (footerFormula) {
	                    columnJSON[CONST_FOOTER_FORMULA] = expressionToFormula(self._sheet, footerFormula, self.footerIndex(), i + self._col);
	                }
	                if (dataAreaFormula) {
	                    columnJSON[CONST_DATA_AREA_FORMULA] = expressionToFormula(self._sheet, dataAreaFormula, self.footerIndex(), i + self._col);
	                }
	                dictData[COLUMNS][0][i] = columnJSON;
	            }
	            dictData[COLUMNS][1] = keyword_null;
	            var jsData = {};
	            for (var item in dictData) { 
	                var value = dictData[item];
	                if (value[0] !== value[1]) {
	                    jsData[item] = value[0];
	                }
	            }
	            return $_isEmptyObject(jsData) ? keyword_undefined : jsData;
	        },
	        fromJSON: function (jsData, noSchema) {
	            if (!jsData) {
	                return;
	            }
	            var self = this;
	            $_each([CONST_NAME, CONST_HIGHLIGHT_FIRST_COLUMN, CONST_HIGHLIGHT_LAST_COLUMN, CONST_BAND_ROWS, CONST_BAND_COLUMNS, CONST_AUTO_GENERATE_COLUMNS], function (index, v) {
	                if (isDefined(jsData[v])) {
	                    self[v](jsData[v], false); 
	                }
	            });
	            var row = jsData.row;
	            if (isDefined(row)) {
	                self._row = row;
	            }
	            var col = jsData.col;
	            if (isDefined(col)) {
	                self._col = col;
	            }
	            var rowCount = jsData.rowCount;
	            if (isDefined(rowCount)) {
	                self._rowCount = rowCount;
	            }
	            var colCount = jsData.colCount;
	            if (isDefined(colCount)) {
	                self._colCount = colCount;
	            }
	            var showHeader = jsData.showHeader;
	            if (isDefined(showHeader)) {
	                self._showHeader = showHeader;
	            }
	            var showFooter = jsData.showFooter;
	            if (isDefined(showFooter)) {
	                self._showFooter = showFooter;
	            }
	            var style = jsData.style;
	            if (style) {
	                var tableStyle = new TableTheme();
	                tableStyle.fromJSON(style, noSchema);
	                self.style(tableStyle);
	            }
	            var dataSource = jsData.dataSource, dataBinding = jsData.dataBinding,
	                bindingPath = jsData.bindingPath;
	            if (noSchema) {
	                if (dataSource && _BindingManager) {
	                    self._bindingManager = new _BindingManager();
	                    self._bindingManager.bind(dataSource);
	                }
	                if (dataBinding && _BindingManager) {
	                    self._bindingManager = new _BindingManager();
	                    self._bindingManager.fromJSON(dataBinding, noSchema);
	                }
	            } else if (bindingPath) {
	                self._bindingPath = bindingPath;
	                var sheet = self._sheet, sheetDataSource = sheet && sheet.getDataSource && sheet.getDataSource();
	                if (CellBindingSource && sheetDataSource instanceof CellBindingSource) {
	                    var actualDataSource = getValueByPath(sheetDataSource.getSource(), bindingPath);
	                    if (actualDataSource) {
	                        self._bindingManager = new _BindingManager();
	                        self._bindingManager.bind(actualDataSource);
	                    }
	                }
	            }
	            var columns = jsData.columns;
	            if (columns) {
	                var columnsData = columns, count = columnsData.length;
	                var tcs = self._columns = [], tc, data;
	                for (var i = 0; i < count; i++) {
	                    data = columnsData[i];
	                    tc = new TableColumn(self._newAutoId());
	                    tc.fromJSON(data, noSchema);
	                    var oldColumnName = tc.name(),
	                        newColumnName = self._getNoConflictTableColumnName(oldColumnName, i);
	                    tcs.push(tc);
	                    if (newColumnName !== oldColumnName) {
	                        self.setColumnName(i, newColumnName);
	                    }
	                    var footerFormula = tc.footerFormula();
	                    if (footerFormula) {
	                        tc.footerFormula(formulaToExpression(self._sheet, footerFormula, self.footerIndex(), i + self._col));
	                    }
	                    var dataAreaFormula = tc.dataAreaFormula();
	                    if (dataAreaFormula) {
	                        tc.dataAreaFormula(formulaToExpression(self._sheet, dataAreaFormula, self.footerIndex(), i + self._col));
	                    }
	                }
	            }
	            var rowFilter = jsData.rowFilter;
	            if (rowFilter) {
	                var filter = _TableFilter && new _TableFilter();
	                if (filter) {
	                    filter.table(self);
	                    filter.fromJSON(rowFilter, noSchema);
	                    self._rowFilter = filter;
	                    self._rowFilter.reFilter();
	                }
	            }
	        },
	       
	        startRow: function () {
	            return this._row;
	        },
	        startColumn: function () {
	            return this._col;
	        },
	        endRow: function () {
	            return this._row + this._rowCount - 1;
	        },
	        endColumn: function () {
	            return this._col + this._colCount - 1;
	        },
	        hasHeadersRow: function () {
	            return this._showHeader;
	        },
	        hasTotalsRow: function () {
	            return this._showFooter;
	        },
	        tableName: function () {
	            return this.name();
	        },
	        getColumnIndexInTable: function (columnName) {
	            columnName = columnName.toLowerCase();
	            var index = -1, columnName2 = Common._StringHelper._replace(columnName, '\r\n', '\n');
	            if (!isNullOrUndefined(columnName)) {
	                $_each(this._columns, function (i, column) {
	                    var cName = column.name().toString().toLowerCase();
	                    if (cName === columnName || cName === columnName2) {
	                        index = i;
	                        return false;
	                    }
	                });
	            }
	            return index;
	        },
	        source: function () {
	            var sheet = this._sheet;
	
	            return sheet._getSheetSource && sheet._getSheetSource();
	        },
	       
	        _applyBindingPath: function () {
	            var self = this, sheet = self._sheet;
	            if (!sheet) {
	                return;
	            }
	            var path = self.bindingPath();
	            if (path) {
	                var dataSource = sheet.getDataSource && sheet.getDataSource();
	                if (CellBindingSource && dataSource instanceof CellBindingSource) {
	                    var actualDataSource = getValueByPath(dataSource.getSource(), path);
	                    if (actualDataSource) {
	                        var dataRange = self.dataRange(), dataRangeRow = dataRange.row,
	                            dataRangeRowCount = getRowCount(dataRange);
	                        var bindingManager = new _BindingManager();
	                        bindingManager.bind(actualDataSource, sheet._modelManager._changes);
	                        var rowCount = bindingManager.getRowCount();
	                        try {
	                            suspendPaint(sheet);
	                            self._bindingManager = keyword_null;
	                            if (rowCount > dataRangeRowCount) {
	                                sheet.addRows(dataRangeRow + dataRangeRowCount, rowCount - dataRangeRowCount);
	                            } else if (rowCount < dataRangeRowCount) {
	                                sheet.deleteRows(dataRangeRow + rowCount, dataRangeRowCount - rowCount);
	                            }
	                           
	                           
	                           
	                           
	                           
	                            self._bind(bindingManager);
	                            var calcService = CalcEngine && sheet._getCalcServiceInternal();
	                            if (calcService && !calcService.IsSuspended()) {
	                                sheet.recalcAll();
	                            }
	                        } finally {
	                            resumePaint(sheet);
	                        }
	                    }
	                }
	            }
	        },
	        clone: function () {
	            var self = this, table = new Table();
	            var jsonStr = JSON_STRINGIFY(self.toJSON());
	            table._setOwner(self._owner);
	            table.fromJSON(JSON_PARSE(jsonStr));
	            return table;
	        },
	        _copyDataSourceImp: function (dataSource) {
	            var newBindingManager = new _BindingManager();
	            newBindingManager.bind(dataSource);
	            this._bindingManager = newBindingManager;
	        },
	        _copyDataSource: function (srcTable) {
	            if (srcTable && !srcTable.bindingPath()) {
	                var bindingManager = srcTable._bindingManager;
	                if (bindingManager) {
	                    this._copyDataSourceImp(bindingManager.getSource());
	                }
	            }
	        },
	        _getDataSource: function () {
	            var bindingManager = this._bindingManager;
	            if (bindingManager) {
	                return bindingManager.getSource();
	            }
	            return keyword_null;
	        },
	        _getDataSourceRowCount: function () {
	            var bindingManager = this._bindingManager;
	            if (bindingManager) {
	                return bindingManager.getRowCount();
	            }
	            return 0;
	        },
	       
	        sort: function (tableColumnIndex, ascending) {
	            var self = this, sheet = self._sheet, dataRange = self.dataRange(), rowFilter = self.rowFilter();
	            if (sheet && 0 <= tableColumnIndex && tableColumnIndex < dataRange.colCount) {
	                sheet.suspendPaint();
	                sheet.sortRange(dataRange.row, dataRange.col, dataRange.rowCount, dataRange.colCount, true, [{
	                    index: tableColumnIndex + dataRange.col,
	                    ascending: ascending
	                }]);
	
	                if (rowFilter) {
	                    rowFilter._sortInfo = {
	                        index: tableColumnIndex + dataRange.col,
	                        ascending: ascending
	                    };
	                }
	                sheet.resumePaint();
	            }
	        }
	    };
	    Tables.Table = Table;
	   
	
	   
	    var _TableFilter = (function (_super) {
	        if (!_super) {
	            return keyword_null;
	        }
	
	        $.inherit(_TableFilter, _super);
	
	        function _TableFilter(table) {
	            var self = this;
	            _super.call(self);
	            self.table(table);
	        }
	
	        $.extend(_TableFilter.prototype, {
	            _getStartCol: function () {
	                return 0;
	            },
	            _getEndCol: function () {
	                return this.range.colCount;
	            },
	            table: function (table) {
	                var self = this;
	                if (arguments.length === 0) {
	                    return self._table;
	                }
	                self._table = table;
	                if (table) {
	                    self._sheet = table._sheet;
	                }
	            },
	            _onRowsAdded: function (row, count) {
	                var self = this, table = self._table;
	                _super && _super.prototype._onRowsAdded.call(self, row, count);
	                table && self._setRangeInternal(table.dataRange());
	            },
	            _onRowsRemoved: function (row, count) {
	                var self = this, table = self._table;
	                _super && _super.prototype._onRowsRemoved.call(self, row, count);
	                table && self._setRangeInternal(table.dataRange());
	            }
	        });
	
	        return _TableFilter;
	    })(HideRowFilter);
	   
	
	   
	
	   
	    
	    function TableColumn(id) {
	        var self = this;
	        self.id(id);
	        self.name(CONST_COLUMN + self.id());
	    }
	
	    TableColumn.prototype = {
	       
	        
	        id: defProperty(CONST_ID, keyword_undefined, function (value) {
	            var self = this;
	            if (!self.name()) {
	                self.name(CONST_COLUMN + value);
	            }
	        }),
	        _isAutoId: function () {
	            return this.id() > 0;
	        },
	       
	        
	        name: defProperty(CONST_NAME, keyword_undefined, function (value) {
	            if (!value) {
	                var self = this;
	                self.name(CONST_COLUMN + self.id());
	            }
	        }),
	       
	        
	        dataField: defProperty(CONST_DATAFIELD),
	        footerValue: defProperty(CONST_FOOTER_VALUE),
	        dataAreaFormula: defProperty(CONST_DATA_AREA_FORMULA),
	        footerFormula: defProperty(CONST_FOOTER_FORMULA),
	        toJSON: function () {
	            var self = this;
	            var jsonData = {};
	            $_each(tcProperties, function (i, p) {
	                var value = self[p]();
	                if (value) {
	                    jsonData[p] = value;
	                }
	            });
	            return $_isEmptyObject(jsonData) ? keyword_undefined : jsonData;
	        },
	        fromJSON: function (jsonData) {
	            if (!jsonData) {
	                return;
	            }
	           
	           
	           
	           
	           
	           
	           
	            var self = this;
	            $_each(tcProperties, function (i, p) {
	                var value = jsonData[p] !== keyword_undefined ? jsonData[p] : jsonData['_' + p];
	                if (value) {
	                    self[p](value, false);
	                }
	            });
	        }
	    };
	    Tables.TableColumn = TableColumn;
	   
	
	   
	    var CONST_BORDER_LEFT = 'borderLeft', CONST_BORDER_TOP = 'borderTop', CONST_BORDER_RIGHT = 'borderRight',
	        CONST_BORDER_BOTTOM = 'borderBottom', CONST_BORDER_HORIZONTAL = 'borderHorizontal',
	        CONST_BORDER_VERTICAL = 'borderVertical';
	    var tableStyleProperties = ['backColor', 'foreColor', 'font', CONST_BORDER_LEFT, CONST_BORDER_TOP, CONST_BORDER_RIGHT,
	        CONST_BORDER_BOTTOM, CONST_BORDER_HORIZONTAL, CONST_BORDER_VERTICAL, 'textDecoration'];
	
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	
	   
	    
	    function TableStyle(backColor, foreColor, font, borderLeft, borderTop, borderRight, borderBottom, borderHorizontal, borderVertical, textDecoration) {
	        var self = this, args = arguments;
	        $_each(tableStyleProperties, function (i, p) {
	            self[p] = args[i];
	        });
	    }
	
	    TableStyle.prototype = {
	        _compose: function (dest, firstRow, firstCol, lastRow, lastCol) {
	            var self = this;
	            $_each(tableStyleProperties, function (i, p) {
	                if (p.indexOf('border') >= 0) {
	                    if (firstCol && isDefined(self[CONST_BORDER_LEFT]) && !isDefined(dest[CONST_BORDER_LEFT])) {
	                        dest[CONST_BORDER_LEFT] = self[CONST_BORDER_LEFT];
	                        dest[CONST_BORDER_LEFT].level = 20 ;
	                    }
	                    if (firstRow && isDefined(self[CONST_BORDER_TOP]) && !isDefined(dest[CONST_BORDER_TOP])) {
	                        dest[CONST_BORDER_TOP] = self[CONST_BORDER_TOP];
	                        dest[CONST_BORDER_TOP].level = 20 ;
	                    }
	                    if (lastCol && isDefined(self[CONST_BORDER_RIGHT]) && !isDefined(dest[CONST_BORDER_RIGHT])) {
	                        dest[CONST_BORDER_RIGHT] = self[CONST_BORDER_RIGHT];
	                        dest[CONST_BORDER_RIGHT].level = 20 ;
	                    }
	                    if (lastRow && isDefined(self[CONST_BORDER_BOTTOM]) && !isDefined(dest[CONST_BORDER_BOTTOM])) {
	                        dest[CONST_BORDER_BOTTOM] = self[CONST_BORDER_BOTTOM];
	                        dest[CONST_BORDER_BOTTOM].level = 20 ;
	                    }
	                    if (!lastRow && isDefined(self[CONST_BORDER_HORIZONTAL]) && !isDefined(dest[CONST_BORDER_BOTTOM])) {
	                        dest[CONST_BORDER_BOTTOM] = self[CONST_BORDER_HORIZONTAL];
	                        dest[CONST_BORDER_BOTTOM].level = 20 ;
	                    }
	                    if (!lastCol && isDefined(self[CONST_BORDER_VERTICAL]) && !isDefined(dest[CONST_BORDER_RIGHT])) {
	                        dest[CONST_BORDER_RIGHT] = self[CONST_BORDER_VERTICAL];
	                        dest[CONST_BORDER_RIGHT].level = 20 ;
	                    }
	                } else if (isDefined(self[p]) && !isDefined(dest[p])) {
	                    dest[p] = self[p];
	                }
	            });
	        },
	        _clone: function () {
	            var newStyle = new TableStyle();
	            var jsonStr = JSON_STRINGIFY(this.toJSON());
	            newStyle.fromJSON(JSON_PARSE(jsonStr));
	            return newStyle;
	        },
	        toJSON: function () {
	            var self = this;
	            var ret = {};
	            $_each(tableStyleProperties, function (i, p) {
	                var tmpData = self[p];
	                var tmpJSONData = tmpData && tmpData.toJSON ? tmpData.toJSON() : tmpData;
	                ret[p] = $_isEmptyObject(tmpJSONData) ? keyword_undefined : tmpJSONData;
	            });
	            return ret;
	        },
	        fromJSON: function (jsData, noSchema) {
	            if (jsData) {
	                var self = this;
	                $_each(tableStyleProperties, function (i, p) {
	                    var tmpData = jsData[p];
	                    if (isDefined(tmpData)) {
	                        if (p.indexOf('border') >= 0) {
	                            var border = new LineBorder();
	                            border.fromJSON(tmpData, noSchema);
	                            self[p] = border;
	                        } else {
	                            self[p] = tmpData;
	                        }
	                    }
	                });
	            }
	        }
	    };
	    Tables.TableStyle = TableStyle;
	   
	
	   
	
	   
	    
	    function TableTheme() {
	    }
	
	    TableTheme.prototype = {
	       
	        
	        name: defProperty(CONST_NAME),
	        builtInName: defProperty('builtInName'),
	        toJSON: function () {
	            var self = this, builtInName = self.builtInName();
	            if (builtInName) {
	                return {
	                   
	                    buildInName: builtInName
	                };
	            }
	
	            var json = {
	                name: self.name()
	            }, tmp;
	            $_each(styleProperties, function (i, p) {
	                tmp = self[p]();
	                if (tmp) {
	                    json[p] = tmp.toJSON();
	                }
	            });
	            $_each(sizeProperties, function (i, p) {
	                tmp = self[p]();
	                if (tmp !== 1) {
	                    json[p] = tmp;
	                }
	            });
	            return $_isEmptyObject(json) ? keyword_undefined : json;
	        },
	        fromJSON: function (jsData, noSchema) {
	            function _copyFrom(tableTheme, style) {
	                tableTheme.name(style.name());
	                $_each(sizeProperties, function (i, p) {
	                    tableTheme[p](style[p]());
	                });
	                $_each(styleProperties, function (i, p) {
	                    var tableStyle = style[p]();
	                    tableTheme[p](tableStyle ? tableStyle._clone() : keyword_null);
	                });
	                tableTheme.builtInName(style.builtInName(), false);
	            }
	
	            if (!jsData) {
	                return;
	            }
	
	            var self = this, buildInName = jsData.buildInName;
	            if (buildInName) {
	                _copyFrom(self, TableThemes[buildInName.toLowerCase()]);
	                
	                return;
	            }
	
	            var jsData_name = jsData.name, name = isDefined(jsData_name) ? jsData_name : jsData._name;
	            if (isDefined(name)) {
	                self.name(name, false);
	            }
	            $_each(sizeProperties, function (i, p) {
	                var jsPropValue = jsData[p] !== keyword_undefined ? jsData[p] : jsData['_' + p];
	                if (jsPropValue) {
	                    self[p](jsPropValue, false);
	                }
	            });
	            $_each(styleProperties, function (i, p) {
	                var jsPropValue = jsData[p] !== keyword_undefined ? jsData[p] : jsData['_' + p];
	                if (jsPropValue) {
	                    var style = new TableStyle();
	                    style.fromJSON(jsPropValue, noSchema);
	                    self[p](style, false);
	                }
	            });
	        }
	    };
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	    $_each(styleProperties, function (i, p) {
	        TableTheme.prototype[p] = defProperty(p);
	    });
	    $_each(sizeProperties, function (i, p) {
	        TableTheme.prototype[p] = defProperty(p, 1);
	    });
	    Tables.TableTheme = TableTheme;
	   
	
	   
	    var COLOR_WHITE = 'white', COLOR_BLACK = 'black';
	
	    function getBorder(borderColor, styleOrBorder) {
	        if (isNaN(styleOrBorder)) {
	            return styleOrBorder;
	        }
	        return new LineBorder(borderColor, styleOrBorder);
	    }
	
	    function _createStyle(borderColor, backColor, foreColor, font, borderLeft, borderTop, borderRight, borderBottom, borderHorizontal, borderVertical) {
	        var ts = new TableStyle();
	        if (backColor) {
	            ts.backColor = backColor;
	        }
	        if (foreColor) {
	            ts.foreColor = foreColor;
	        }
	        if (font) {
	            ts.font = TABLE_STYLE_DEFAULT_FONT;
	        }
	        if (borderLeft) {
	            ts.borderLeft = getBorder(borderColor, borderLeft);
	        }
	        if (borderTop) {
	            ts.borderTop = getBorder(borderColor, borderTop);
	        }
	        if (borderRight) {
	            ts.borderRight = getBorder(borderColor, borderRight);
	        }
	        if (borderBottom) {
	            ts.borderBottom = getBorder(borderColor, borderBottom);
	        }
	        if (borderHorizontal) {
	            ts.borderHorizontal = getBorder(borderColor, borderHorizontal);
	        }
	        if (borderVertical) {
	            ts.borderVertical = getBorder(borderColor, borderVertical);
	        }
	        return ts;
	    }
	
	    function _getTheme(factor) {
	       
	       
	       
	       
	       
	       
	       
	        if (factor === 0) {
	            return 'Text 1';
	        }
	        return 'Accent ' + factor;
	    }
	
	    function _getLightStyle(id) {
	        var index = id - 1;
	        var result = keyword_null;
	        var num = Math_floor(index / 7);
	        if (num >= 0 && num < 3) {
	            result = [_createLightA, _createLightB, _createLightC][num](index % 7);
	
	            var name = 'Light' + id;
	            result.name(name);
	            result.builtInName(name);
	        }
	        return result;
	    }
	
	    function _createLightA(factor) {
	        var themeColor = _getTheme(factor);
	        var bkStrip1 = themeColor + ' 80';
	        var style = new TableTheme();
	       
	        style[HEADER_ROW_STYLE](_createStyle(themeColor, 0, themeColor, 1, 0, 0, 0, 1));
	       
	        style[WHOLE_TABLE_STYLE](_createStyle(themeColor, 0, themeColor, 0, 0, 1, 0, 1));
	       
	        style[FIRST_ROW_STRIP_STYLE](_createStyle(themeColor, bkStrip1));
	       
	        style[HIGHLIGHT_FIRST_COLUMN_STYLE](_createStyle(themeColor, 0, themeColor, 1));
	       
	        style[HIGHLIGHT_LAST_COLUMN_STYLE](_createStyle(themeColor, 0, themeColor, 1));
	       
	        style[FIRST_COLUMN_STRIP_STYLE](_createStyle(themeColor, bkStrip1));
	       
	        style[FOOTER_ROW_STYLE](_createStyle(themeColor, 0, themeColor, 1, 0, 1));
	        return style;
	    }
	
	    function _createLightB(factor) {
	        var themeColor = _getTheme(factor);
	        var style = new TableTheme();
	       
	        style[HEADER_ROW_STYLE](_createStyle(themeColor, themeColor, COLOR_WHITE, 1));
	       
	        style[WHOLE_TABLE_STYLE](_createStyle(themeColor, 0, 0, 0, 1, 1, 1, 1));
	       
	        style[FIRST_ROW_STRIP_STYLE](_createStyle(themeColor, 0, 0, 0, 0, 1));
	       
	        style[SECOND_ROW_STRIP_STYLE](_createStyle(themeColor, 0, 0, 0, 0, 1));
	       
	        style[FIRST_COLUMN_STRIP_STYLE](_createStyle(themeColor, 0, 0, 0, 1));
	       
	        style[SECOND_COLUMN_STRIP_STYLE](_createStyle(themeColor, 0, 0, 0, 1));
	       
	        style[HIGHLIGHT_FIRST_COLUMN_STYLE](_createStyle(themeColor, 0, 0, 1));
	       
	        style[HIGHLIGHT_LAST_COLUMN_STYLE](_createStyle(themeColor, 0, 0, 1));
	       
	        style[FOOTER_ROW_STYLE](_createStyle(themeColor, 0, 0, 1, 0, 6));
	        return style;
	    }
	
	    function _createLightC(factor) {
	        var themeColor = _getTheme(factor);
	        var bkStrip1 = themeColor + ' 80';
	        var style = new TableTheme();
	       
	        style[HEADER_ROW_STYLE](_createStyle(themeColor, 0, 0, 1, 0, 0, 0, 2));
	       
	        style[WHOLE_TABLE_STYLE](_createStyle(themeColor, 0, 0, 0, 1, 1, 1, 1, 1, 1));
	       
	        style[FIRST_ROW_STRIP_STYLE](_createStyle(themeColor, bkStrip1));
	       
	        style[FIRST_COLUMN_STRIP_STYLE](_createStyle(themeColor, bkStrip1));
	       
	        style[HIGHLIGHT_FIRST_COLUMN_STYLE](_createStyle(themeColor, 0, 0, 1));
	       
	        style[HIGHLIGHT_LAST_COLUMN_STYLE](_createStyle(themeColor, 0, 0, 1));
	       
	        style[FOOTER_ROW_STYLE](_createStyle(themeColor, 0, 0, 1, 0, 6));
	        return style;
	    }
	
	    function _getMediumStyle(id) {
	        var index = id - 1;
	        var result = keyword_null;
	        var num = Math_floor(index / 7);
	        if (num >= 0 && num < 4) {
	            result = [_createMediumA, _createMediumB, _createMediumC, _createMediumD][num](index % 7);
	
	            var name = 'Medium' + id;
	            result.name(name);
	            result.builtInName(name);
	        }
	        return result;
	    }
	
	    function _createMediumA(factor) {
	        var color = _getTheme(factor);
	        var border = color + ' 20';
	        var bkHeader = color;
	        var bkStrip1 = color + ' 80';
	        var style = new TableTheme();
	       
	        style[HEADER_ROW_STYLE](_createStyle(border, bkHeader, COLOR_WHITE, 1));
	       
	        style[WHOLE_TABLE_STYLE](_createStyle(border, 0, 0, 0, 1, 1, 1, 1, 1));
	       
	        style[FIRST_ROW_STRIP_STYLE](_createStyle(border, bkStrip1));
	       
	        style[FIRST_COLUMN_STRIP_STYLE](_createStyle(border, bkStrip1));
	       
	        style[HIGHLIGHT_FIRST_COLUMN_STYLE](_createStyle(border, 0, 0, 1));
	       
	        style[HIGHLIGHT_LAST_COLUMN_STYLE](_createStyle(border, 0, 0, 1));
	       
	        style[FOOTER_ROW_STYLE](_createStyle(border, 0, COLOR_BLACK, 1, 0, 6));
	        return style;
	    }
	
	    function _createMediumB(factor) {
	        var color = _getTheme(factor);
	        var borderColor = COLOR_WHITE;
	        var bkHeader = color;
	        var bkStrip1 = color + ' 60';
	        var bkStrip2 = color + ' 80';
	        var style = new TableTheme();
	       
	        style[HEADER_ROW_STYLE](_createStyle(borderColor, bkHeader, COLOR_WHITE, 1, 0, 0, 0, 2, 0, 1));
	       
	        style[WHOLE_TABLE_STYLE](_createStyle(borderColor, bkStrip2, 0, 0, 0, 0, 0, 0, 1, 1));
	       
	        style[FIRST_ROW_STRIP_STYLE](_createStyle(borderColor, bkStrip1));
	       
	        style[FIRST_COLUMN_STRIP_STYLE](_createStyle(borderColor, bkStrip1));
	       
	        style[HIGHLIGHT_FIRST_COLUMN_STYLE](_createStyle(borderColor, bkHeader, COLOR_WHITE, 1));
	       
	        style[HIGHLIGHT_LAST_COLUMN_STYLE](_createStyle(borderColor, bkHeader, COLOR_WHITE, 1));
	       
	        style[FOOTER_ROW_STYLE](_createStyle(borderColor, bkHeader, COLOR_WHITE, 1, 0, 2, 0, 0, 0, 1));
	        return style;
	    }
	
	    function _createMediumC(factor) {
	        var color = _getTheme(factor), COLOR_D3D3D3 = '#D3D3D3';
	        var bkHeader = color;
	        var bkStrip1 = COLOR_D3D3D3;
	        var border = (factor === 0 ? COLOR_BLACK : COLOR_D3D3D3);
	        var style = new TableTheme();
	       
	        style[HEADER_ROW_STYLE](_createStyle(COLOR_BLACK, bkHeader, COLOR_WHITE, 1, 0, 2, 0, 2));
	       
	        style[WHOLE_TABLE_STYLE](_createStyle(border, 0, 0, 0, 1, new LineBorder(COLOR_BLACK, 2 ), 1, new LineBorder(COLOR_BLACK, 2 ), (factor === 0) ? 1 : 0, 1));
	       
	        style[FIRST_ROW_STRIP_STYLE](_createStyle(border, bkStrip1));
	       
	        style[FIRST_COLUMN_STRIP_STYLE](_createStyle(border, bkStrip1));
	       
	        style[HIGHLIGHT_FIRST_COLUMN_STYLE](_createStyle(border, bkHeader, COLOR_WHITE));
	       
	        style[HIGHLIGHT_LAST_COLUMN_STYLE](_createStyle(border, bkHeader, COLOR_WHITE));
	       
	        style[FIRST_FOOTER_CELL_STYLE](_createStyle(border, bkHeader, COLOR_WHITE, 1));
	       
	        style[LAST_FOOTER_CELL_STYLE](_createStyle(border, bkHeader, COLOR_WHITE, 1));
	       
	        style[FOOTER_ROW_STYLE](_createStyle(COLOR_BLACK, 0, COLOR_BLACK, 0, 0, 6));
	        return style;
	    }
	
	    function _createMediumD(factor) {
	        var color = _getTheme(factor);
	        var footerBorder = color;
	        var border = color + ' 40';
	        var bkHeader = color + ' 80';
	        var bkStrip1 = color + ' 60';
	        var bkStrip2 = color + ' 80';
	        var style = new TableTheme();
	       
	        style[HEADER_ROW_STYLE](_createStyle(border, bkHeader, COLOR_BLACK, 1, 1, 1, 1, 1, 0, 1));
	       
	        style[WHOLE_TABLE_STYLE](_createStyle(border, bkHeader, 0, 0, 1, 1, 1, 1, 1, 1));
	       
	        style[FIRST_ROW_STRIP_STYLE](_createStyle(border, bkStrip1));
	       
	        style[FIRST_COLUMN_STRIP_STYLE](_createStyle(border, bkStrip1));
	       
	        style[HIGHLIGHT_FIRST_COLUMN_STYLE](_createStyle(border, 0, 0, 1));
	       
	        style[HIGHLIGHT_LAST_COLUMN_STYLE](_createStyle(border, 0, 0, 1));
	       
	        style[FOOTER_ROW_STYLE](_createStyle(border, bkStrip2, COLOR_BLACK, 1, 1, new LineBorder(footerBorder, 2 ), 1, 1, 0, 1));
	        return style;
	    }
	
	    function _getDarkStyle(id) {
	        var index = id - 1;
	        var result = keyword_null;
	        var num = Math_floor(index / 7);
	        if (num >= 0 && num < 2) {
	            result = [_createDarkA, _createDarkB][num](index % 7);
	
	            var name = 'Dark' + id;
	            result.name(name);
	            result.builtInName(name);
	        }
	        return result;
	    }
	
	    function _createDarkA(factor) {
	        var color = _getTheme(factor);
	        var headerColor = COLOR_BLACK;
	        var bkStrip1 = (factor === 0 ? color + ' 25' : color + ' -25');
	        var tableBk = (factor === 0 ? color + ' 50' : color);
	        var footColor = (factor === 0 ? color : color + ' -50');
	        var style = new TableTheme();
	       
	        style[HEADER_ROW_STYLE](_createStyle(COLOR_WHITE, headerColor, COLOR_WHITE, 1, 0, 0, 0, 2));
	       
	        style[WHOLE_TABLE_STYLE](_createStyle(color, tableBk, COLOR_WHITE));
	       
	        style[FIRST_ROW_STRIP_STYLE](_createStyle(color, bkStrip1));
	       
	        style[FIRST_COLUMN_STRIP_STYLE](_createStyle(color, bkStrip1));
	       
	        style[HIGHLIGHT_FIRST_COLUMN_STYLE](_createStyle(COLOR_WHITE, bkStrip1, COLOR_WHITE, 1, 0, 0, 2));
	       
	        style[HIGHLIGHT_LAST_COLUMN_STYLE](_createStyle(COLOR_WHITE, bkStrip1, COLOR_WHITE, 1, 2));
	       
	        style[FOOTER_ROW_STYLE](_createStyle(COLOR_WHITE, footColor, COLOR_WHITE, 1, 0, 2));
	        return style;
	    }
	
	    function _createDarkB(factor) {
	        function _getTableBackground(index) {
	            if (index < 0 || index > 3) {
	                return '';
	            }
	            return ['Background 1 -15', 'Accent 1 80', 'Accent 3 80', 'Accent 5 80'][index];
	        }
	
	        function _getStripColor(index) {
	            if (index < 0 || index > 3) {
	                return '';
	            }
	            return ['Background 1 -35', 'Accent 1 60', 'Accent 3 60', 'Accent 5 60'][index];
	        }
	
	        function _getHeaderColor(index) {
	            if (index < 0 || index > 3) {
	                return '';
	            }
	            return ['Text 1', 'Accent 2', 'Accent 4', 'Accent 6'][index];
	        }
	
	        var color = _getTheme(factor);
	        var headerColor = _getHeaderColor(factor);
	        var bkStrip1 = _getStripColor(factor);
	        var tableBk = _getTableBackground(factor);
	        var footColor = tableBk;
	        var style = new TableTheme();
	       
	        style[HEADER_ROW_STYLE](_createStyle(color, headerColor, COLOR_WHITE));
	       
	        style[WHOLE_TABLE_STYLE](_createStyle(color, tableBk));
	       
	        style[FIRST_ROW_STRIP_STYLE](_createStyle(color, bkStrip1));
	       
	        style[FIRST_COLUMN_STRIP_STYLE](_createStyle(color, bkStrip1));
	       
	        style[HIGHLIGHT_FIRST_COLUMN_STYLE](_createStyle(color, 0, 0, 1));
	       
	        style[HIGHLIGHT_LAST_COLUMN_STYLE](_createStyle(color, 0, 0, 1));
	       
	        style[FOOTER_ROW_STYLE](_createStyle(COLOR_BLACK, footColor, 0, 1, 0, 6));
	        return style;
	    }
	
	   
	    
	    TableThemes = {};
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    
	   
	    for (var j = 1; j <= 28; j++) {
	        if (j <= 21) {
	            TableThemes['light' + j] = _getLightStyle(j);
	        }
	        if (j <= 11) {
	            TableThemes['dark' + j] = _getDarkStyle(j);
	        }
	        TableThemes['medium' + j] = _getMediumStyle(j);
	    }
	    Tables.TableThemes = TableThemes;
	   
	
	   
	   
	    
	    function TableManager(sheet) {
	        this._sheet = sheet;
	        this._tableList = [];
	        this._updateDataSourceSuspended = false;
	    }
	
	    TableManager.prototype = {
	       
	        
	        add: function (name, row, column, rowCount, columnCount, style, options) {
	            var self = this;
	            self._checkCanAddTable(self._sheet, name, row, column, rowCount, columnCount, true);
	            return self._addInternal(new Table(name, row, column, rowCount, columnCount, style || TableThemes.medium2, options));
	        },
	       
	        
	        addFromDataSource: function (name, row, column, dataSource, style, options) {
	            if (!dataSource) {
	                throwError(sR().Exp_TableDataSourceNullError);
	            }
	            if (_BindingManager) {
	                var self = this, sheet = self._sheet;
	                sheet.suspendPaint();
	                var bm = new _BindingManager();
	                bm.bind(dataSource);
	                var rowCount = bm.getRowCount() + 1;
	                var columnCount = bm.getColumnCount();
	
	                var table = self.add(name, row, column, rowCount, columnCount, style, options);
	                table._bind(bm);
	                sheet.clearPendingChanges();
	                sheet.resumePaint();
	                return table;
	            }
	        },
	       
	        
	        find: function (row, column) {
	            var tableList = this._tableList, count = tableList.length, t;
	            for (var i = 0; i < count; i++) {
	                t = tableList[i];
	                var cr = t.range();
	                if ((cr.row <= row && row < cr.row + getRowCount(cr)) && (cr.col <= column && column < cr.col + getColCount(cr))) {
	                    return t;
	                }
	            }
	            return keyword_null;
	        },
	       
	        
	        findByName: function (name) {
	            var tableList = this._tableList, count = tableList.length, table;
	            for (var i = 0; i < count; i++) {
	                table = tableList[i];
	                if (table.name().toLowerCase() === name.toLowerCase()) {
	                    return table;
	                }
	            }
	            return keyword_null;
	        },
	        _findByRange: function (row, col, rowCount, colCount) {
	            var tableList = this._tableList, count = tableList.length;
	            var ret = [], t;
	            for (var i = 0; i < count; i++) {
	                t = tableList[i];
	                if (t.range().intersect(row, col, rowCount, colCount)) {
	                    ret.push(t);
	                }
	            }
	            return ret;
	        },
	        _addInternal: function (table) {
	            if (!table) {
	                return;
	            }
	            var self = this;
	            if (self.findByName(table.name())) {
	                throwError(sR().Exp_TableHasSameNameError);
	            }
	
	            var sheet = self._sheet;
	            sheet.suspendPaint();
	            table._setOwner(self);
	            sheet._modelManager._backupTableList();
	            self._tableList.push(table);
	            table._applyBindingPath();
	           
	            if (table.showHeader()) {
	                table._syncHeader();
	            }
	            if (table.showFooter()) {
	                table._syncFooter();
	            }
	
	            self._onTableAdded(table);
	            sheet.resumePaint();
	            return table;
	        },
	        _removeInternal: function (table) {
	            var self = this;
	            var index = $_inArray(table, self._tableList);
	            if (index > -1) {
	                var sheet = self._sheet;
	                if (sheet) {
	                    sheet._modelManager._backupTableList();
	                }
	                self._tableList.splice(index, 1);
	                self._onTableRemoved([table], false);
	                return table;
	            }
	            return keyword_null;
	        },
	       
	        
	        remove: function (table, options) {
	            var self = this;
	            if (typeof table === 'string') {
	                table = self.findByName(table);
	            }
	            if (table) {
	                options = options || 0 ;
	                table = self._removeInternal(table);
	                if (table) {
	                    try {
	                        var cr = table.range(), sheet = self._sheet;
	                        suspendPaint(sheet);
	                        var row1 = cr.row, row2 = cr.row + getRowCount(cr), col1 = cr.col,
	                            col2 = cr.col + getColCount(cr),
	                            r, c;
	
	                       
	                        if ((options & 1 ) !== 1 ) {
	                            for (r = row1; r < row2; r++) {
	                                for (c = col1; c < col2; c++) {
	                                    setFormulaToSheet(sheet, r, c, keyword_null);
	                                    setValue(sheet, r, c, keyword_null);
	                                }
	                            }
	                        } else if (table.showHeader()) {
	                            r = table.headerIndex();
	                            for (c = col1; c < col2; c++) {
	                                sheet.setValue(r, c, table.getColumnName(c - cr.col));
	                            }
	                        }
	                       
	                        if ((options & 2 ) === 2 ) {
	                            for (r = row1; r < row2; r++) {
	                                for (c = col1; c < col2; c++) {
	                                    var style = sheet.getStyle(r, c) || new Style();
	                                    table._compose(r, c, style);
	                                    sheet.setStyle(r, c, style);
	                                }
	                            }
	                        }
	                    } finally {
	                        resumePaint(sheet);
	                    }
	                }
	            }
	            return table;
	        },
	       
	        
	        move: function (table, row, column) {
	            var self = this, sheet = self._sheet;
	            if (typeof table === 'string') {
	                table = self.findByName(table);
	            }
	            if (table && row >= 0 && column >= 0) {
	                var cr = table.range();
	                var tables = self._findByRange(row, column, getRowCount(cr), getColCount(cr)),
	                    tablesLength = tables.length;
	               
	                if (tablesLength === 0 || (tablesLength === 1 && tables[0] === table)) {
	                    suspendPaint(sheet);
	                    try {
	                        table._moveTo(row, column);
	                    } finally {
	                        resumePaint(sheet);
	                    }
	                }
	            }
	        },
	       
	        
	        resize: function (table, range) {
	            var self = this, sheet = self._sheet;
	            if (typeof table === 'string') {
	                table = self.findByName(table);
	            }
	            if (table) {
	                var cr = table.range(), args = arguments;
	                var newRange = range;
	                if (args.length === 3) {
	                    newRange = createRange(cr.row, cr.col, args[1], args[2]);
	                }
	                if (newRange) {
	                    var rowCount = getRowCount(newRange), colCount = getColCount(newRange);
	                    if (rowCount >= 0 && colCount >= 0) {
	                        var tables = self._findByRange(newRange.row, newRange.col, rowCount, colCount);
	                       
	                        if (tables.length <= 1) {
	                            suspendPaint(sheet);
	                            try {
	                                table._resize(newRange);
	                            } finally {
	                                resumePaint(sheet);
	                            }
	                        }
	                    }
	                }
	            }
	        },
	       
	        
	        all: function () {
	            var result = [];
	            $_each(this._tableList, function (i, v) {
	                result.push(v);
	            });
	            return result;
	        },
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	        _checkCanAddTable: function (sheet, name, row, col, rowCount, colCount, throwException) {
	           
	            if (!name) {
	                if (throwException) {
	                    throwError(sR().Exp_TableEmptyNameError);
	                }
	                return false;
	            }
	            if (!isValidTableName(name)) {
	                if (throwException) {
	                    throwError(sR().Exp_TableNameInvalid);
	                }
	                return false;
	            }
	           
	            if (row < 0 || rowCount < 1 || row + rowCount > sheet.getRowCount()) {
	                if (throwException) {
	                    throwError(sR().Exp_TableInvalidRow);
	                }
	                return false;
	            }
	            if (col < 0 || colCount < 1 || col + colCount > sheet.getColumnCount()) {
	                if (throwException) {
	                    throwError(sR().Exp_TableInvalidColumn);
	                }
	                return false;
	            }
	           
	            var tableManager = sheet.tables;
	            if (tableManager._has(row, col, rowCount, colCount)) {
	                if (throwException) {
	                    throwError(sR().Exp_TableIntersectError);
	                }
	                return false;
	            }
	            if (tableManager.findByName(name)) {
	                if (throwException) {
	                    throwError(sR().Exp_TableHasSameNameError);
	                }
	                return false;
	            }
	            var arrarFormulas = CalcEngine && sheet._getsArrayFormulas(row, col, rowCount, colCount);
	            var arrarFormulasRanges = arrarFormulas && arrarFormulas.ranges, returnValue = true;
	            if (arrarFormulasRanges) {
	                $_each(arrarFormulas, function (i, baseRange) {
	                    if (getRowCount(baseRange) > 1 || getColCount(baseRange) > 1) {
	                        if (throwException) {
	                            throwError(sR().Exp_ArrayFormulaTable);
	                        }
	                        returnValue = false;
	                        return false;
	                    }
	                });
	            }
	            return returnValue;
	        },
	        _hasPartTable: function (row, column, rowCount, columnCount) {
	            var tables = this.all();
	            if (tables) {
	                var range = createRange(row, column, rowCount, columnCount);
	                var count = tables.length, cr;
	                for (var i = 0; i < count; i++) {
	                    cr = tables[i].range();
	                    if (range.intersect(cr.row, cr.col, getRowCount(cr), getColCount(cr)) && !range.containsRange(cr)) {
	                        return true;
	                    }
	                }
	            }
	            return false;
	        },
	        _has: function (row, col, rowCount, colCount) {
	            var tableList = this._tableList, count = tableList.length, t;
	            for (var i = 0; i < count; i++) {
	                t = tableList[i];
	                if (t.range().intersect(row, col, rowCount, colCount)) {
	                    return true;
	                }
	            }
	            return false;
	        },
	        _onRowsAdded2: function (row, count) {
	            var self = this, tables = self._tableList;
	            for (var i = 0, tablesCount = tables.length; i < tablesCount; i++) {
	                tables[i]._onRowsAdded2(row, count, self._updateDataSourceSuspended);
	            }
	
	        },
	        _onRowsAdded: function (row, count) {
	            var self = this, tables = self._tableList;
	            var handledDataSources = [];
	            for (var i = 0, tablesCount = tables.length; i < tablesCount; i++) {
	                var t = tables[i], dataSource = t._getDataSource();
	                if (_ArrayHelper_contains(handledDataSources, dataSource)) {
	                    t._onRowsAdded(row, count, true);
	                } else {
	                    var dataSourceChanged = t._onRowsAdded(row, count, self._updateDataSourceSuspended);
	                    if (dataSourceChanged) {
	                        handledDataSources.push(dataSource);
	                    }
	                }
	            }
	           
	            if (!self._updateDataSourceSuspended) {
	                try {
	                    var sheet = self._sheet;
	                    suspendPaint(sheet);
	                    self._updateDataSourceSuspended = true;
	                    var sourceRowCount, dataRange;
	                    for (i = 0, tablesCount = tables.length; i < tablesCount; i++) {
	                        t = tables[i];
	                        sourceRowCount = t._getDataSourceRowCount();
	                        dataRange = t.dataRange();
	                        if (sourceRowCount > 0 && sourceRowCount !== getRowCount(dataRange)) {
	                            var newRowCount = sourceRowCount;
	                            if (t.showHeader()) {
	                                newRowCount += 1;
	                            }
	                            if (t.showFooter()) {
	                                newRowCount += 1;
	                            }
	                            var oldRange = t.range();
	                            var newRange = createRange(oldRange.row, oldRange.col, newRowCount, getColCount(dataRange));
	                            t._resize(newRange, self._updateDataSourceSuspended);
	                        }
	                    }
	                } finally {
	                    self._updateDataSourceSuspended = false;
	                    resumePaint(sheet);
	                }
	            }
	           
	        },
	        _onColumnsAdded: function (col, count) {
	            var tableList = this._tableList, length = tableList.length, t;
	            for (var i = 0; i < length; i++) {
	                t = tableList[i];
	                t._onColumnsAdded(col, count);
	            }
	        },
	        _onRowsRemoved: function (row, count) {
	            var self = this, tables = self._tableList;
	            var handledDataSources = [];
	            var remainedList = [], removedList = [];
	            for (var i = 0, tablesCount = tables.length; i < tablesCount; i++) {
	                var t = tables[i], dataSource = t._getDataSource();
	                var cr = t.range(), contains = (row <= cr.row && cr.row + getRowCount(cr) <= row + count);
	                if (!contains) {
	                    if (_ArrayHelper_contains(handledDataSources, dataSource)) {
	                        t._onRowsRemoved(row, count, true);
	                    } else {
	                        var dataSourceChanged = t._onRowsRemoved(row, count, self._updateDataSourceSuspended);
	                        if (dataSourceChanged) {
	                            handledDataSources.push(dataSource);
	                        }
	                    }
	                    remainedList.push(t);
	                } else {
	                    removedList.push(t);
	                }
	            }
	            self._sheet._modelManager._backupTableList();
	            self._tableList = remainedList;
	           
	            self._onTableRemoved(removedList, true);
	
	           
	            try {
	                var sheet = self._sheet;
	                suspendPaint(sheet);
	                self._updateDataSourceSuspended = true;
	                tables = self._tableList;
	                var sourceRowCount, dataRange;
	                for (i = 0, tablesCount = tables.length; i < tablesCount; i++) {
	                    t = tables[i];
	                    sourceRowCount = t._getDataSourceRowCount();
	                    dataRange = t.dataRange();
	                    if (sourceRowCount > 0 && sourceRowCount !== getRowCount(dataRange)) {
	                        var newRowCount = sourceRowCount;
	                        if (t.showHeader()) {
	                            newRowCount += 1;
	                        }
	                        if (t.showFooter()) {
	                            newRowCount += 1;
	                        }
	                        var oldRange = t.range();
	                        var newRange = createRange(oldRange.row, oldRange.col, newRowCount, getColCount(dataRange));
	                        t._resize(newRange, self._updateDataSourceSuspended);
	                    }
	                }
	            } finally {
	                self._updateDataSourceSuspended = false;
	                resumePaint(sheet);
	            }
	           
	        },
	        _onColumnsRemoved: function (col, count) {
	            var self = this, tableList = self._tableList, remainedList = [], removedList = [];
	            var length = tableList.length, t;
	            for (var i = 0; i < length; i++) {
	                t = tableList[i];
	                var cr = t.range(), contains = (col <= cr.col && cr.col + getColCount(cr) <= col + count);
	                if (!contains) {
	                    t._onColumnsRemoved(col, count);
	                    remainedList.push(t);
	                } else {
	                    removedList.push(t);
	                }
	            }
	            self._sheet._modelManager._backupTableList();
	            self._tableList = remainedList;
	           
	            self._onTableRemoved(removedList, true);
	        },
	        _clear: function (row, col, rowCount, colCount, type) {
	            var self = this;
	            var clearRange = createRange(row, col, rowCount, colCount);
	            var tableList, count, t;
	            var removedList = [];
	            var sheet = self._sheet;
	           
	            if ((type & 1 ) === 1 ) {
	                var remainedList = [];
	                tableList = self._tableList;
	                count = tableList.length;
	                for (var i = 0; i < count; i++) {
	                    t = tableList[i];
	                    if (!clearRange.containsRange(t.range())) {
	                        remainedList.push(t);
	                    } else {
	                        removedList.push(t);
	                    }
	                }
	                count = remainedList.length;
	                for (i = 0; i < count; i++) {
	                    t = remainedList[i];
	                    t._clear(row, col, rowCount, colCount);
	                }
	                if (sheet) {
	                    sheet._modelManager._backupTableList();
	                }
	                self._tableList = remainedList;
	            }
	           
	            if ((type & 2 ) === 2 ) {
	                tableList = self._tableList;
	                count = tableList.length;
	                for (i = 0; i < count; i++) {
	                    t = tableList[i];
	                    if (clearRange.containsRange(t.range())) {
	                        if (sheet) {
	                            sheet._modelManager._backupTableProperty(t, "style", t.style());
	                        }
	                        t.style(keyword_null);
	                    }
	                }
	            }
	            self._onTableRemoved(removedList, true);
	            return removedList;
	        },
	        _onTableRemoved: function (tables, convertToError) {
	            if (!tables || tables.length === 0) {
	                return;
	            }
	            $.each(tables, function (index, table) {
	                if (table._hasSlicerData()) {
	                    table.getSlicerData().onTableRemoved(table);
	                }
	            });
	            CalcEngine && adjustFormulaOnRemoveTables(this._sheet, tables, convertToError);
	        },
	        _onTableAdded: function (table) {
	            if (table && table._hasSlicerData()) {
	                table.getSlicerData().onTableAdded(table);
	            }
	        },
	        _getNoConflictTableName: function (name) {
	            var i = 1;
	            while (this.findByName(name)) {
	                name = 'table' + i;
	                i++;
	            }
	            return name;
	        },
	        _getValue: function (row, col) {
	            var tm = this;
	            var hasValue = false, value = keyword_null;
	            var table = tm.find(row, col);
	            if (table) {
	                if (table.showHeader() && row === table.headerIndex()) {
	                    value = table._getHeaderName(col);
	                   
	                    if (!isNullOrUndefined(value)) {
	                        value = util_toString(value);
	                    }
	                    hasValue = true;
	                } else {
	                    value = table._getValue(row, col);
	                    hasValue = value._hasValue;
	                    value = value._value;
	                }
	            }
	            return {
	                _hasValue: hasValue,
	                _value: value
	            };
	        },
	        _setValue: function (row, col, value, tableChanges) {
	            var tm = this, isValueSet = false, isValid = true;
	            var table = tm.find(row, col);
	            if (table) {
	                if (table.showHeader() && row === table.headerIndex()) {
	                    if (table._hasColumnName(value)) {
	                        isValid = false;
	                    } else {
	                        value = isNullOrUndefined(value) ? value : util_toString(value) ;
	                        table._setHeaderName(col, value);
	                    }
	                } else if (table.showFooter() && row === table.footerIndex()) {
	                    table._setFooterValue(col, value, tableChanges);
	                } else {
	                    isValueSet = table._setValue(row, col, value, tableChanges);
	                }
	            }
	
	            return isValueSet || !isValid;
	        },
	        _updataFooterFormulaWhenSetSheetFormula: function (row, col, rowCount, colCount, value, expr) {
	            var table = this.find(row, col);
	            if (CalcEngine && table) {
	                if (rowCount > 1 || colCount > 1) {
	                    this._sheet._raiseInvalidOperation(0 , sR().Exp_ArrayFormulaTable);
	                    return false;
	                }
	                if (table.showHeader() && row === table.headerIndex() && value) {
	                    return false;
	                }
	                if (table.showFooter() && row === table.footerIndex()) {
	                    table._setFooterFormula(col - table._col, value, expr);
	                }
	            }
	            return true;
	        },
	        _resetTablesBindingManager: function () {
	            var tables = this.all();
	            for (var i = 0, count = tables.length; i < count; i++) {
	                var table = tables[i];
	                if (table.bindingPath()) {
	                    table._bindingManager = keyword_null;
	                }
	            }
	        },
	        _onCopyOrMoving: function (range, isMove) {
	            var savedTables = [];
	            var srcTableManager = this, tables, table, i;
	            if (srcTableManager) {
	                tables = srcTableManager.all();
	                if (tables) {
	                    for (i = tables.length - 1; i >= 0; i--) {
	                        table = tables[i];
	                        if (range.containsRange(table.range())) {
	                            if (isMove) {
	                                if (this._sheet) {
	                                    this._sheet._modelManager._backupTableList();
	                                }
	                                srcTableManager._tableList.splice(i, 1);
	                                table._clearSheetModelFormula();
	                            }
	                            savedTables.push(table);
	                        }
	                    }
	                }
	            }
	            return savedTables;
	        },
	        _onCopyOrMoved: function (savedTables, srcRow, srcColumn, destRow, destColumn, isMove) {
	            var tableManager = this;
	            for (var i = 0, length = savedTables.length; i < length; i++) {
	                var srcTable = savedTables[i], dataSource;
	                var table;
	                if (!isMove) {
	                    dataSource = srcTable.bindingPath() ? keyword_undefined : srcTable._getDataSource();
	                    table = new Table();
	                    table._setOwner(tableManager);
	                    table.fromJSON(JSON_PARSE(JSON_STRINGIFY(srcTable.toJSON())));
	                    table.name(tableManager._getNoConflictTableName(table.name()));
	                } else {
	                    table = srcTable;
	                }
	                var destTableRange = table.range();
	                table._ignoreFormula = true;
	                table._moveToCore(destRow + destTableRange.row - srcRow, destColumn + destTableRange.col - srcColumn);
	                tableManager._addInternal(table);
	                if (isMove) {
	                   
	                    var slicerData = table._slicerData;
	                    if (slicerData) {
	                        slicerData._sheet = tableManager._sheet;
	                        slicerData.refresh();
	                    }
	                } else if (dataSource) {
	                    table._copyDataSourceImp(dataSource);
	                }
	                table._ignoreFormula = false;
	            }
	        },
	        _syncFormulaInTables: function (savedTables) {
	            for (var i = 0, length = savedTables.length; i < length; i++) {
	                savedTables[i]._syncSheetModelFormula();
	            }
	        },
	        toJSON: function () {
	            var tables = this._tableList;
	            var jsonData = [];
	            if (tables) {
	                for (var i = 0; i < tables.length; i++) {
	                    jsonData.push(tables[i].toJSON());
	                }
	            }
	            return jsonData.length === 0 ? keyword_undefined : jsonData;
	        },
	        fromJSON: function (jsData, noSchema) {
	            if (jsData) {
	                for (var i = 0, length = jsData.length; i < length; i++) {
	                    var item = jsData[i];
	                    var table = new Table();
	                    table._setOwner(this);
	                    this._tableList.push(table);
	                    table.fromJSON(item, noSchema);
	                }
	            }
	        }
	    };
	    Tables.TableManager = TableManager;
	   
	
	   
	   
	    
	    Tables.TableRemoveOptions = {
	        
	        none: 0,
	        
	        keepData: 1,
	        
	        keepStyle: 2
	    };
	   
	
	    var _SheetModelManager = Sheets._SheetModelManager;
	    $.extend(_SheetModelManager.prototype, {
	        _backupTableProperty: function (table, name, value) {
	            var self = this;
	            var changes = self._changes;
	            if (changes) {
	                if (!changes._tableChanges) {
	                    changes._tableChanges = [];
	                }
	                var tableChanges = changes._tableChanges;
	                tableChanges.push({ type: "property", table: table, name: name, value: value });
	            }
	        },
	        _backupTableList: function () {
	            var self = this;
	            var changes = self._changes;
	            if (changes) {
	                if (!changes._tableChanges) {
	                    changes._tableChanges = [];
	                }
	                var tableChanges = changes._tableChanges;
	                var tableManager = self._tables;
	                tableChanges.push({ type: "collection", tableList: tableManager._tableList.slice() });
	            }
	        },
	        _backupTableColumn: function (tableColumn, name, value) {
	            var self = this;
	            var changes = self._changes;
	            if (changes) {
	                if (!changes._tableChanges) {
	                    changes._tableChanges = [];
	                }
	                var tableChanges = changes._tableChanges;
	                tableChanges.push({ type: "tableColumn", tableColumn: tableColumn, name: name, value: value });
	            }
	        },
	        _backupDataSource: function (bindingManager, row, col) {
	            var self = this;
	            var bdValue = bindingManager.getValue(row, col);
	            var oldValue = bdValue.value;
	            var changes = self._changes;
	            if (changes) {
	                if (!changes._tableChanges) {
	                    changes._tableChanges = [];
	                }
	                var tableChanges = changes._tableChanges;
	                tableChanges.push({
	                    type: "dataSource",
	                    bindingManager: bindingManager,
	                    row: row,
	                    col: col,
	                    oldValue: oldValue
	                });
	            }
	        },
	        _restoreTables: function (tableChanges) {
	            if (tableChanges) {
	                for (var i = tableChanges.length - 1; i >= 0; i--) {
	                    var change = tableChanges[i];
	                    switch (change.type) {
	                        case "collection":
	                            this._tables._tableList = change.tableList;
	                            break;
	                        case "tableColumn":
	                            change.tableColumn[change.name](change.value);
	                            break;
	                        case "property":
	                            var table = change.table, propertyName = change.name,
	                                propertyValue = change.value;
	                            if (propertyName === "range") {
	                                table._row = propertyValue.row;
	                                table._col = propertyValue.col;
	                                table._rowCount = propertyValue.rowCount;
	                                table._colCount = propertyValue.colCount;
	                            } else if (propertyName === "columns") {
	                                table._columns = propertyValue;
	                            } else {
	                                table[propertyName](propertyValue);
	                            }
	                            break;
	                        case "dataSource":
	                            change.bindingManager.setValue(change.row, change.col, change.oldValue);
	                            break;
	                        default:
	                            break;
	                    }
	                }
	            }
	        }
	    });
	
	    _SheetModelManager._registerFeature('table', {
	        priority: 7000,
	        init: function () {
	            this._tables = new TableManager(this._sheet);
	        },
	        getValue: function (argObj) {
	            var row = argObj.row, col = argObj.col, sheetArea = argObj.sheetArea;
	            var tm = this._sheet.tables, table, returnObj;
	            if (sheetArea === 3  && tm) {
	                table = tm.find(row, col);
	                if (table) {
	                    returnObj = tm._getValue(row, col);
	                    argObj.isValueGet = returnObj._hasValue;
	                    argObj.value = returnObj._value;
	                }
	            }
	        },
	        setValue: function (argObj) {
	            var row = argObj.row, col = argObj.col, value = argObj.value, sheetArea = argObj.sheetArea;
	            var tm = this._sheet.tables, table;
	            if (sheetArea === 3  && tm) {
	                table = tm.find(row, col);
	                if (table) {
	                    var changes = argObj.changes, tableChanges;
	                    if (changes) {
	                        tableChanges = changes._tableChanges;
	                        if (!tableChanges) {
	                            tableChanges = changes._tableChanges = [];
	                        }
	                    }
	
	                    argObj.isValueSet = tm._setValue(row, col, value, tableChanges);
	                }
	            }
	        },
	        undo: function (changes) {
	
	            var tableChanges = changes._tableChanges;
	            if (tableChanges) {
	                this._restoreTables(tableChanges);
	            }
	        }
	    });
	
	    module.exports = Tables;
	
	
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

	module.exports = GC.Spread.CalcEngine;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sheets.Filter;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sheets.Bindings;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_DragDropShiftTableCell: 'This operation is not allowed. The operation is attempting to shift cells in a table on your worksheet.',
	        Exp_DragDropChangePartOfTable: 'Cannot complete operation: You are attempting to change a portion of a table row or column in a way that is not allowed.',
	        Exp_TableEmptyNameError: 'The table name cannot be empty.',
	        Exp_TableNameInvalid: 'The table name is not valid.',
	        Exp_TableInvalidRow: 'Invalid row index or row count.',
	        Exp_TableInvalidColumn: 'Invalid column index or column count.',
	        Exp_TableIntersectError: 'The tables cannot be intersected.',
	        Exp_TableHasSameNameError: 'The current worksheet already exists in a table with the same name.',
	        Exp_TableDataSourceNullError: 'Table datasource cannot be null.',
	        Exp_TableMoveOutOfRange: 'The table cannot be moved out of the sheet.',
	        Exp_TableResizeOutOfRange: 'The invalid row count, column count, and table cannot be resized out of the sheet.',
	        Exp_ArrayFormulaTable: 'multi-cell array formulas are not allowed in tables.',
	        Exp_TableResizeInvalidRange: 'The headers must remain in the same row, and the resulting table range must overlap the original table range.'
	    };
	
	}());

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.tables.12.0.0.js.map