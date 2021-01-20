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
var GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["FormulaTextBox"] =
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
	    __webpack_require__(5);
	    __webpack_require__(6);
	    __webpack_require__(7);
	    __webpack_require__(8);
	    exports.SR = {};
	    exports.SR['en'] = __webpack_require__(9);
	    
	    module.exports = exports;
	
	}());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Sheets = __webpack_require__(2);
	    var CalcNS = __webpack_require__(3);
	    var SheetsCalcNS = Sheets.CalcEngine;
	    var Common = __webpack_require__(4);
	    var FormulaTextBoxNS = {};
	    var keyword_null = null, keyword_undefined = void 0, Math_max = Math.max, Math_min = Math.min;
	    var $ = Sheets.GC$;
	    var $_extend = $.extend;
	    var createElement = Sheets._util._createElement;
	    var WINDOW = window;
	    var DOCUMENT = document;
	    var StringHelper = Common._StringHelper;
	    var Sheets_util = Sheets._util;
	    var cancelDefault = Sheets_util._cancelDefault;
	    var browser = Sheets_util._browser, lessThanIE10 = browser.msie && parseInt(browser.version, 10) < 10;
	    var toUpperCase = StringHelper._toUpperCase;
	    var CONST_FORMULATEXTBOX = 'formulatextbox', CONST_GCUIELEMENT = 'gcUIElement', CONST_INPUT = 'input',
	        NBSP_SPACE_LETTER = '\u00a0';
	
	    var ns_formulatextbox_internal = '.gcFormulaTextBoxInternal', ns_formulatextbox = '.gcFormulaTextBox', EVENT_TEXTCHANGED = 'TextChanged', EVENT_CARETCHANGED = 'CaretChanged', EVENT_APPENDSTARTED = 'AppendStarted', EVENT_APPENDENDED = 'AppendEnded';
	    var Keys = {left: 37, right: 39, up: 38, down: 40, tab: 9, enter: 13, pup: 33, pdn: 34, end: 35, home: 36, esc: 27};
	
	    var DEFAULT_RANGE_COLORS = ['#0000ff', '#008000', '#9900cc', '#800000', '#00cc33', '#cc6600', '#cc0099'];
	
	    var RangeSelectOffImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAIAAACw+gCQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJSSURBVDhPY3hILqBYZ/eqV81LXpbNfp7S/yS0+Z5p+olD5x5OWXGyYcaBmql7yifuLOnbBkRFPVuACKIFqjNzwv2Qhhue5ReByK/qYlDtxb///n35+efd1z/PP/wB6vn2+/f7b79ffgIhiBaoTlPP5I2bN2/asmX7jh3Hjh+ft3wLUOfX779ef/h+6+nHtXsuffrx+/bj16euvwQiiBaETiAy904NTasGantRkvA8wetpsO0NJ839htKb9l/Jal6T3rgytX4FEEG0QHXuOnbr55+/P379AyIg40m8x8uZ3U+aC49bKn64eHzX0es4Xds0Y9ejl++vPXx3+f77Nx9/3PU3e5YR/CTM4WGs53pVPqBrgX6+8+QNFtdmNq0q6NpU1LOpe/6+o+fvH3fR36XCc9dE/KG3EdDNQPaF7VunLTuY0bA0omg2RAtUZ1LNUohjgCEJDJVtdlpPty6dr8x3yUDsvoPqRm2hqcp8Jy+9WbH/7cQ1EB0wnXEVCyBBt+fc8+NXXy9Yf/znz5/31swFaliiKjBZme/yrSe7z36YsuZBy4KbEC1QnRFFcxKqFgP1A1Fq7ZKcpqU1EzYuWX/kxIa1/WBtizYcAwqG5E71SZsA0QLVGZI3A+Lax+/+ACMwvHDmsn1v1xx8e+jSp83HXgP1ALmztryYsv4ZEEG0QHUGZk+FuHbHqadABORO3fC8Z/mdvmU3Oxdd9cuY1LX0VsOci/WzQQiiBaET4lQgii1fEFU6F4iAXgC6JShnakDWZKBmoDshCKIFqpMMQK7Ohw8BTajNa73pg9oAAAAASUVORK5CYII=")';
	    var RangeSelectOnImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAIAAACw+gCQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAItSURBVDhPY3hILqBYZ/eqVxDUuvRl/cKXZbNf5E59ntT3DIgi2p/6NT5xq35iV/YYiCyLHkG0IHQuOvR/1t6/03b+mbD1d/eGXy2rf9Yu/wFE5Yu+Fc79mjXza+rUz0BkmHoWogXFTqCFVfNfQmwLa3vqVfsYiBzA9sCRftIJiBaozuYZO+89eAREt+4+AKIbt+9fvXkPiC5du3P28s0T564dOnV579Hz2w6cSaqcDdEC1Vk/ZQtQQ2vv7MaumbUd0+o6ZzT3zmnunQ1kF9T0pZe2J+U3x+U0bNx9MqZ4CkQLVGdB6xKgDaX1/b/+/PnyE4E+ff/z8uPvR29/3X35MzCxfPW2o2HZPRAtUJ2lXSuADkstann/9febz7/ff/3zLDP4Spj9Pjs1oE6gthvPfnpEFS7deDAwrRWiBaozv3kh0D8RadVAlFvZvWLDrjvRrk+bCrdpCS1ZsyOpoMU9ssA5NBeo0zuhDqIFqjO9Zubhk1eA6MT5G+eu3H78/PVFX/OnxQnrNQTuPnyx9+hFoA+B2uav2ecaVQ7RAtUZVzQBKH3g+KXTl24fdjE44mp4yFbtSYrfGg3+yQocQLTryEWgzgVr9zmEFkK0QHWGZbbvPHQOiI6cvnb5wMENhjJPE30eB1k9dFIDaruy/wAwPoA6563eaxOQDdEC1YkG1hvKrNKVuOEA0nYr2Pp5qA1UAglg1wkEW03lF2kI3wy1xaoNCHDqJAjI1fnwIQDHT83/UVFPcQAAAABJRU5ErkJggg==")';
	
	    var SR = function () {
	        return Common._getResource(FormulaTextBoxNS.SR)();
	    };
	
	    function getActiveSheet(workbook) {
	        return workbook.getActiveSheet();
	    }
	
	    function getBuiltInFunctionsDescription() {
	        var resourceArr = [];
	        $.each(Common._getResource(CalcNS.SR)()._builtInFunctionsResource, function (name, description) {
	            if (CalcNS.Functions._builtInFunctions[name]) {
	                description.name = name;
	                resourceArr.push(description);
	            }
	        });
	        return resourceArr;
	    }
	
	    function getFunctionDescription(functionObj) {
	        var resourceArr = [], description;
	        $.each(functionObj, function (name, func) {
	            description = func.description();
	            if (description) {
	                description.name = name;
	                resourceArr.push(description);
	            }
	        });
	        return resourceArr;
	    }
	
	    function isStructureReference(table, range) {
	        if (!table) {
	            return false;
	        }
	        var isRowSr = false, isColSr = false;
	        if (range.rowCount === 1) {
	           
	            if (table.hasHeadersRow() && range.row === table.startRow()) {
	                return true;
	            }
	           
	            if (table.hasTotalsRow() && range.row === table.endRow()) {
	                return true;
	            }
	        } else {
	           
	            if (table.hasHeadersRow() && range.row === table.startRow()) {
	               
	                if (range.rowCount === table.dataRange().rowCount + 1) {
	                    isRowSr = true;
	                }
	               
	                if (table.hasTotalsRow() && range.rowCount === table.dataRange().rowCount + 1 + 1) {
	                    isRowSr = true;
	                }
	            }
	           
	            if (range.row === table.dataRange().row) {
	               
	                if (range.rowCount === table.dataRange().rowCount) {
	                    isRowSr = true;
	                }
	               
	                if (table.hasTotalsRow() && range.rowCount === table.dataRange().rowCount + 1) {
	                    isRowSr = true;
	                }
	            }
	        }
	        if (range.col + range.colCount <= table.startColumn() + table.dataRange().colCount) {
	           
	            isColSr = true;
	        }
	        return isRowSr && isColSr;
	    }
	
	    function getSheetNameForFormula(sheet) {
	        var sheetName = sheet.name();
	        if (!SheetsCalcNS._validateSheetName(sheetName.split(''), false)) {
	            return '\'' + sheetName + '\'';
	        }
	        return sheetName;
	    }
	
	    function rangeToString(sheet, range) {
	        if (!range) {
	            return keyword_null;
	        }
	        var ftbAcrossSheet = FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance;
	        var sourceSheet = ftbAcrossSheet && ftbAcrossSheet._sheet || sheet;
	        var baseRow = sourceSheet._activeRowIndex, baseCol = sourceSheet._activeColIndex,
	            parent = sheet.parent, useR1C1 = (parent && parent.options.referenceStyle === 1 );
	        var rangeReferenceRelative = 15 ;
	        if (sheet._formulaTextBox && sheet._formulaTextBox._isAbsoluteReference) {
	            rangeReferenceRelative = 0 ;
	        }
	        if (range.row < 0 && range.col < 0) {
	            range = new Sheets.Range(0, -1, sheet.getRowCount(), -1);
	        }
	        var tableManager = sheet.tables, table = tableManager && tableManager.find(range.row, range.col);
	        if (ftbAcrossSheet && ftbAcrossSheet._isAbsoluteReference) {
	            rangeReferenceRelative = 0 ;
	        }
	        if (isStructureReference(table, range)) {
	            if (ftbAcrossSheet && ftbAcrossSheet._text && ftbAcrossSheet._sheet !== sheet) {
	               
	                baseRow = baseCol = -1;
	            }
	            return SheetsCalcNS.rangeToFormulaWithStructReference(sheet, range, baseRow, baseCol,
	                rangeReferenceRelative, useR1C1, table);
	        }
	        var rangeToFormula = SheetsCalcNS.rangeToFormula(range, baseRow, baseCol, rangeReferenceRelative, useR1C1);
	       
	       
	        if ((ftbAcrossSheet && ftbAcrossSheet._text) || (sheet._formulaTextBox && sheet._formulaTextBox._isSelectMode && sheet._formulaTextBox._needSheetName)) {
	            var sheetName = getSheetNameForFormula(sheet);
	            rangeToFormula = sheetName + '!' + rangeToFormula;
	        }
	        return rangeToFormula;
	    }
	
	    FormulaTextBoxNS._rangeToString = rangeToString;
	
	   
	    Sheets.Events.FormulaTextBoxTextChanged = 'FormulaTextBoxTextChanged';
	    Sheets.Events.FormulaTextBoxCaretChanged = 'FormulaTextBoxCaretChanged';
	
	   
	    WINDOW._gcGlobal._clickOutsideSheetCallBack.push(function (activeElement, hitElement) {
	        var FormulatextboxAcrossSheetSingleton = FormulaTextBoxNS._formulatextboxAcrossSheetSingleton;
	        if (!hitElement && activeElement.endEdit && FormulatextboxAcrossSheetSingleton) {
	            var ftbAcrossSheet = FormulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance;
	            if (ftbAcrossSheet && ftbAcrossSheet._dom && activeElement._formulaTextBox) {
	                activeElement._formulaTextBox && activeElement._formulaTextBox.destroy();
	                activeElement._formulaTextBox = keyword_null;
	                ftbAcrossSheet._clear();
	            }
	        }
	    });
	
	    function attachFormulaTextBox(sheet, editingElement) {
	        var workbook = sheet.parent, options = workbook && workbook.options;
	        if (!editingElement || !options || !options.allowUserEditFormula || !options.enableFormulaTextbox) {
	            return;
	        }
	        if (sheet._formulaTextBox) {
	            sheet._formulaTextBox.destroy();
	        }
	        sheet._formulaTextBox = new FormulaTextBox(editingElement, null, workbook) ;
	
	        var text = sheet._formulaTextBox.text();
	        var formulaInfo = sheet.getFormulaInformation(sheet._activeRowIndex, sheet._activeColIndex);
	        if (text[0] === '=' && (!formulaInfo || !formulaInfo.hasFormula)) {
	            text = '\'' + text;
	            sheet._formulaTextBox.text(text);
	        }
	        var fbx = sheet._formulaTextBox, eventHandler = sheet._eventHandler, render = sheet._render;
	        fbx.bind('AppendStarted', function () {
	            fbx.close();
	            var oldStatus = sheet._editorStatus;
	            if (oldStatus !== 1 ) {
	                sheet._editorStatus = 1 ;
	                sheet._raiseEditorStatusChanged(oldStatus, 1 );
	            }
	        });
	        fbx.bind('AppendEnded', function () {
	            render._paintFormulaTextBox();
	        });
	        fbx.bind(EVENT_TEXTCHANGED, function (e, eData) {
	            if (sheet._disposed) {
	                return;
	            }
	           
	            if (eData && eData.type !== CONST_INPUT) {
	                eventHandler._updateEditingEditor(eData);
	                var activeRow = sheet._activeRowIndex,
	                    activeCol = sheet._activeColIndex,
	                    ct = sheet.getCellType(activeRow, activeCol);
	                sheet._trigger(Sheets.Events.EditChange, {
	                    sheet: sheet,
	                    sheetName: sheet.name(),
	                    row: activeRow,
	                    col: activeCol,
	                    editingText: ct.getEditorValue(sheet._editor)
	                });
	            }
	           
	            render._paintFormulaTextBox();
	           
	            sheet._trigger(Sheets.Events.FormulaTextBoxTextChanged, {
	                sheet: sheet,
	                sheetName: sheet.name(),
	                text: fbx.text()
	            });
	        });
	        fbx.bind('CaretChanged', function () {
	            render._paintFormulaTextBox();
	           
	            sheet._trigger(Sheets.Events.FormulaTextBoxCaretChanged, {
	                sheet: sheet,
	                sheetName: sheet.name(),
	                caret: fbx.caret()
	            });
	        });
	       
	        fbx.add(getBuiltInFunctionsDescription());
	       
	        fbx.add(getFunctionDescription(CalcNS.Functions._customFunctions));
	       
	        fbx.add(getFunctionDescription(sheet._functions).concat(getFunctionDescription(workbook._functions)));
	        render._paintFormulaTextBox();
	    }
	
	    FormulaTextBoxNS._attachFormulaTextBox = attachFormulaTextBox;
	
	    function detachFormulaTextBox(sheet) {
	        if (sheet._formulaTextBox) {
	            sheet._formulaTextBox.destroy();
	            sheet._formulaTextBox = keyword_null;
	           
	            sheet._render._paintFormulaTextBox();
	        }
	        var attachedFbx = sheet.parent && sheet.parent._attachedFormulaTextBox;
	        if (DOCUMENT.activeElement === (attachedFbx && attachedFbx._host)) {
	            sheet._eventHandler._changeFocusHolder();
	        }
	    }
	
	    FormulaTextBoxNS._detachFormulaTextBox = detachFormulaTextBox;
	
	
	    function stringToRange(sheet, rangeText) {
	        if (!rangeText) {
	            return keyword_null;
	        }
	
	        var ftbAcrossSheet = FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance;
	        var sourceSheet = ftbAcrossSheet && ftbAcrossSheet._sheet || sheet;
	        var baseRow = sourceSheet._activeRowIndex, baseCol = sourceSheet._activeColIndex;
	        try {
	            return SheetsCalcNS.formulaToRange(sheet, rangeText, baseRow, baseCol);
	        } catch (ex) {
	           
	        }
	        return keyword_null;
	    }
	
	    FormulaTextBoxNS._stringToRange = stringToRange;
	
	
	    $_extend(Sheets._SheetTabBase.prototype, {
	        _canCreateNewTab: function (sheet) {
	            return !(sheet && sheet._formulaTextBox && sheet._formulaTextBox._canAppendRange());
	        }
	    });
	
	
	    Sheets.Worksheet._registerFeature(CONST_FORMULATEXTBOX, {
	        startEdit: function (args) {
	            attachFormulaTextBox(this, args.element);
	        },
	
	        endEdit: function () {
	            detachFormulaTextBox(this);
	        }
	    });
	
	    var _SheetTabBase = Sheets._SheetTabBase, _SheetTabBase_prototype = _SheetTabBase.prototype,
	        oldAllowSheetReorder = _SheetTabBase_prototype._allowSheetReorder;
	    _SheetTabBase._registerFeature(CONST_FORMULATEXTBOX, {
	        preProcessMouseDbClick: function (argObj) {
	            var sheet = getActiveSheet(this._workbook), formulaTextBox = sheet._formulaTextBox;
	            var needIgnoreMouseEvent = formulaTextBox && formulaTextBox._canAppendRange();
	            var ftbAcrossSheet = FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance;
	            if (needIgnoreMouseEvent) {
	                argObj.r = false;
	            } else if (ftbAcrossSheet && ftbAcrossSheet._dom) {
	                ftbAcrossSheet._clear();
	            }
	        }
	    });
	    _SheetTabBase_prototype._allowSheetReorder = function () {
	        var sheet = getActiveSheet(this._workbook), formulaTextBox = sheet._formulaTextBox,
	            ftbAcrossSheet = FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance,
	            formulaAcrossSheetInputing = ftbAcrossSheet && ftbAcrossSheet._text;
	        return oldAllowSheetReorder.call(this) && !formulaAcrossSheetInputing && !formulaTextBox;
	    };
	
	   
	    var FormulaTextBox = (function () {
	
	        var selectModeId = 1;
	
	       
	       
	       
	        
	        function FormulaTextBox(host, options, workbook) {
	            var self = this;
	            var contentDiv = host;
	            self._isSelectMode = false;
	            self._isAbsoluteReference = false;
	            self._needSheetName = true;
	            self._undoStack = [];
	            self._redoStack = [];
	
	            if (options && options.rangeSelectMode) {
	                if (options.absoluteReference === true) {
	                    self._isAbsoluteReference = true;
	                }
	                if (options.needSheetName === false) {
	                    self._needSheetName = false;
	                }
	                self._isSelectMode = true;
	                self._isSelectButtonPressed = false;
	                self._isSelectFocusIn = false;
	                self._selectModeDom = host;
	                var rangeSelectDom = createRangeSelectDom(host, self);
	                contentDiv = rangeSelectDom.contentDiv;
	                self._rangeSelectButton = rangeSelectDom.button;
	                self._rangeSelectHost = host;
	                self._selectModeId = selectModeId++;
	            }
	            self._allowMoveResize = true;
	            self._init(workbook && workbook.getHost() || DOCUMENT.body);
	            if (contentDiv) {
	                self._attachHost(contentDiv);
	            }
	            if (workbook) {
	                self._isInWorkbook = true;
	                self._setWorkbook(workbook);
	                self._workbook._unbind(Sheets.Events.FormulatextboxActiveSheetChanging, FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._handleFormulatextboxAcrossSheetBeforeTabChange);
	                self._workbook._bind(Sheets.Events.FormulatextboxActiveSheetChanging, FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._handleFormulatextboxAcrossSheetBeforeTabChange);
	                self._workbook._unbind(Sheets.Events.FormulatextboxActiveSheetChanged, FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._handleFormulatextboxAcrossSheetAfterTabChange);
	                self._workbook._bind(Sheets.Events.FormulatextboxActiveSheetChanged, FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._handleFormulatextboxAcrossSheetAfterTabChange);
	            }
	            var text = self.text();
	            self._tokens = self._parse(text);
	           
	            var editableHost = self._isEditableDIVElement(contentDiv);
	            if (editableHost) {
	                self._colorText(self._tokens);
	               
	                try {
	                   
	                   
	                    var selection = WINDOW.getSelection();
	                    selection.selectAllChildren(contentDiv);
	                    if (selection.rangeCount > 0) {
	                        selection.collapseToEnd();
	                    }
	                } catch (e) {
	                   
	                }
	               
	               
	               
	               
	               
	               
	               
	                $(self._host).data("text-before", text);
	            }
	        }
	
	        function createRangeSelectDom(host, fbx) {
	            var $host = $(host);
	           
	            $host.attr('contenteditable', 'false');
	            var table = createElement('table');
	            $(table).css('border-spacing', '0');
	            $(table).css('width', '100%');
	            $host.append(table);
	            var tbdy = createElement('tbody');
	            table.appendChild(tbdy);
	            var tr = document.createElement('tr');
	            tbdy.appendChild(tr);
	            var lefttd = document.createElement('td');
	           
	            $(lefttd).css('padding-right', '0px');
	            tr.appendChild(lefttd);
	            var righttd = document.createElement('td');
	            $(righttd).css('width', '23px');
	            $(righttd).css('padding-right', '0px');
	            tr.appendChild(righttd);
	
	            var leftWidth = $host.width() - $(righttd).width();
	            var left = createElement('div');
	            var clipper = createElement('div');
	            $(clipper).width(leftWidth);
	            $(clipper).css({
	                'overflow-y': 'auto',
	                'overflow-x': 'hidden',
	                height: '20px'
	            });
	            clipper.appendChild(left);
	            lefttd.appendChild(clipper);
	            var right = createElement('div');
	            righttd.appendChild(right);
	            $(left).css({
	                display: 'inline-block',
	                float: 'left',
	                height: 'auto',
	                outline: 'none'
	            });
	            $(left).width(leftWidth);
	            $(left).attr('contenteditable', 'true');
	            $(left).attr('spellcheck', 'false');
	           
	            var $right = $(right);
	            $right.css({
	                display: 'block',
	                float: 'right',
	                width: '23px',
	                height: '23px',
	                background: RangeSelectOffImage,
	                'background-repeat': 'no-repeat'
	            });
	
	            $right.bind('click', function () {
	                if (fbx._isSelectButtonPressed) {
	                   
	                    fbx._workbook._trigger('RangeSelectEnding', fbx);
	                    fbx.endSelectMode();
	                } else {
	                    fbx.startSelectMode();
	                }
	            });
	           
	            return {contentDiv: left, button: right};
	
	
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	        }
	
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	
	        function createEditorElement(host) {
	            var textareaElement = createElement('textarea');
	            var $textarea = $(textareaElement);
	            $textarea.css({'display': 'none'});
	            $(host).append(textareaElement);
	            return textareaElement;
	        }
	
	        FormulaTextBoxNS._createEditorElement = createEditorElement;
	
	
	       
	       
	        FormulaTextBox.prototype = {
	            constructor: FormulaTextBox,
	            _beginRangeSelect: function (activeRangeText) {
	                var self = this;
	                self._startingEdit();
	                self._startEdit();
	                self._isSelectFocusIn = true;
	
	                var editingElement = createEditorElement(self._workbook._host);
	
	                var sheet = self._activeSheet();
	                sheet.suspendPaint();
	
	                attachFormulaTextBox(sheet, editingElement);
	                var sheetFormulatextBox = sheet._formulaTextBox;
	                sheetFormulatextBox._isSelectMode = true;
	                sheetFormulatextBox._selectModeId = self._selectModeId;
	                sheetFormulatextBox._isAbsoluteReference = self._isAbsoluteReference;
	                sheetFormulatextBox._needSheetName = self._needSheetName;
	
	                if (activeRangeText) {
	                    self.text(activeRangeText);
	                    self.caret(activeRangeText.length);
	                }
	
	                var text = self.text();
	                var caret = self.caret();
	                if (caret <= 0) {
	                    caret = text.length;
	                }
	                self.focus();
	                self.caret(caret);
	                self._isAppending = true;
	                self._appendingStart = 1;
	                var lastRangeTextIndex = text.lastIndexOf(',', caret);
	                if (lastRangeTextIndex !== -1) {
	                    self._appendingStart = lastRangeTextIndex + 1;
	                }
	
	                if (!text) {
	                    self.text('=');
	                    text = '=';
	                    self.caret(1);
	                    caret = 1;
	                }
	                if (text.indexOf('=') !== 0) {
	                    text = '=' + text;
	                    caret++;
	                }
	
	                sheetFormulatextBox.text(text);
	                sheetFormulatextBox.caret(caret);
	                sheetFormulatextBox._isAppending = self._isAppending;
	                sheetFormulatextBox._appendingStart = self._appendingStart;
	
	                sheet.resumePaint();
	            },
	
	           
	            startSelectMode: function (formula) {
	                var rangeText = formula;
	                if (rangeText && rangeText.indexOf('=') !== 0) {
	                    rangeText = '=' + rangeText;
	                }
	                var self = this;
	                self._isSelectMode = true;
	                self._isSelectButtonPressed = true;
	                $(self._rangeSelectButton).css({'background': RangeSelectOnImage, 'background-repeat': 'no-repeat'});
	                self._beginRangeSelect(rangeText);
	            },
	            endSelectMode: function () {
	                this._isSelectButtonPressed = false;
	                this._endRangeSelect();
	                $(this._rangeSelectButton).css({'background': RangeSelectOffImage, 'background-repeat': 'no-repeat'});
	            },
	            _endRangeSelect: function () {
	                var sheet = this._activeSheet();
	                sheet._endEditImp(true, keyword_undefined, true);
	                sheet.repaint();
	            },
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            
	            destroy: function () {
	                var self = this;
	                if (self._isSelectButtonPressed) {
	                    self._endRangeSelect();
	                }
	                self._isAppending = false;
	                self._appendingStart = -1;
	                self._detachHost();
	                self._detachWorkbook();
	                $(self._funcsPopup).remove();
	                $(self._funcHelpPopup).remove();
	                $(self._helpDiv).remove();
	            },
	           
	            
	            bind: function (type, data, fn) {
	                var host = this._host;
	                if (host && type) {
	                    type = type.split(/\s+/).join(ns_formulatextbox + ' ');
	                    $(host).bind(type + ns_formulatextbox, data, fn);
	                }
	            },
	           
	            
	            unbind: function (type, fn) {
	                var host = this._host;
	                if (host && type) {
	                    type = type.split(/\s+/).join(ns_formulatextbox + ' ');
	                    $(host).unbind(type + ns_formulatextbox, fn);
	                }
	            },
	           
	            
	            unbindAll: function () {
	                var host = this._host;
	                if (host) {
	                    $(host).unbind(ns_formulatextbox);
	                }
	            },
	           
	            
	            caret: function (value) {
	                var self = this, host = self._host;
	                if (!host) {
	                    return;
	                }
	               
	               
	                var hostFocused = (DOCUMENT.activeElement === host);
	                var $host = $(host);
	                if (arguments.length === 0) {
	                    if (hostFocused) {
	                        return self._getCaret(host).end;
	                    }
	                    return $host.data('caret-before');
	                }
	                if (value !== self.caret()) {
	                    if (hostFocused) {
	                        self._setCaret(host, value);
	                        $host.data('caret-before', self._getCaret(host).end);
	                    } else {
	                        $host.data('caret-before', value);
	                    }
	                    self._trigger(EVENT_CARETCHANGED, {});
	                }
	            },
	            _getCaret: function (element) {
	                var self = this;
	                var start = -1, end = -1, selection, range;
	                if (self._isInputElement(element)) {
	                    start = element.selectionStart;
	                    end = element.selectionEnd;
	                } else if (self._isEditableDIVElement(element)) {
	                    selection = WINDOW.getSelection();
	                    if (selection.rangeCount > 0) {
	                        range = selection.getRangeAt(0);
	                        var clonedRange = range.cloneRange();
	                        clonedRange.selectNodeContents(element);
	                        clonedRange.setEnd(range.endContainer, range.endOffset);
	                        end = clonedRange.toString().length;
	                        clonedRange = range.cloneRange();
	                        clonedRange.selectNodeContents(element);
	                        clonedRange.setEnd(range.startContainer, range.startOffset);
	                        start = clonedRange.toString().length;
	                        clonedRange.detach();
	                    }
	                }
	                return {start: start, end: end};
	            },
	            _setCaret: function (element, pos) {
	                var self = this, selection, range;
	                if (self._isInputElement(element)) {
	                    element.setSelectionRange(pos, pos);
	                } else if (self._isEditableDIVElement(element)) {
	                    var caretNode = this._getColorNode(element, pos);
	                    if (caretNode) {
	                        selection = WINDOW.getSelection();
	                        range = DOCUMENT.createRange();
	                        range.setStart(caretNode.node.firstChild, caretNode.offset);
	                        range.collapse(true);
	                        selection.removeAllRanges();
	                        selection.addRange(range);
	                        if (this._isSelectMode) {
	                           
	                            element.parentElement.scrollTop = element.parentElement.scrollHeight;
	                        }
	                    }
	                }
	            },
	           
	            
	            text: function (value) {
	                var self = this, host = self._host, activeSheet = self._activeSheet();
	
	                if (!host || !activeSheet || activeSheet._disposed) {
	                    return '';
	                }
	                var input = self._isInputElement(host), editable = self._isEditableDIVElement(host);
	               
	                if (arguments.length === 0) {
	                    var txt = '';
	                    if (input) {
	                        txt = host.value;
	                    } else if (editable) {
	                        if (lessThanIE10) {  
	                            txt = Sheets_util._getEditableDivValue(host);
	                        } else {
	                            txt = host.innerText;
	                        }
	                        txt = txt.replace(/\r\n?/g, '\n');
	                       
	                        if (txt.indexOf(NBSP_SPACE_LETTER) >= 0) {
	                            txt = Sheets_util._replaceSpaceChar(txt, NBSP_SPACE_LETTER, ' ');
	                        }
	                    }
	                    return txt;
	                }
	               
	                if (value === null || typeof (value) === 'undefined') {
	                    value = '';
	                }
	                if (value !== self.text()) {
	                    self._tokens = self._parse(value);
	                    if (input) {
	                        host.value = value;
	                    } else if (editable) {
	                        self._colorText(self._tokens);
	                        self.caret(value.length);
	                    }
	                    var parameter = {};
	                    var ftbAcrossSheet = FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance;
	                    if (ftbAcrossSheet && ftbAcrossSheet._text) {
	                        parameter = {
	                            sheet: ftbAcrossSheet._sheet,
	                            editor: ftbAcrossSheet._dom && ftbAcrossSheet._dom.firstChild.firstChild,
	                            canvasOffset: ftbAcrossSheet._canvasOffset
	                        };
	                    }
	                    self._trigger(EVENT_TEXTCHANGED, parameter);
	                }
	            },
	           
	            
	            autoComplete: function (value) {
	               
	                if (arguments.length === 0) {
	                    return this._autoComplete;
	                }
	               
	                this._autoComplete = value;
	            },
	           
	            
	            showHelp: function (value) {
	               
	                if (arguments.length === 0) {
	                    return this._showHelp;
	                }
	               
	                this._showHelp = value;
	            },
	           
	            
	            add: function (functionDescription) {
	                if (!functionDescription) {
	                    return;
	                }
	                if ($.isArray(functionDescription)) {
	                    var count = functionDescription.length;
	                    for (var i = 0; i < count; i++) {
	                        this._add(functionDescription[i]);
	                    }
	                } else {
	                    this._add(functionDescription);
	                }
	            },
	            _add: function (func) {
	                var addName = (func && func.name && toUpperCase(func.name));
	                if (!addName) {
	                    return;
	                }
	                var funcs = this._funcs, count = funcs.length, index, fName;
	                for (index = 0; index < count; index++) {
	                    fName = toUpperCase(funcs[index].name);
	                    if (fName === addName) {
	                        return;
	                    } else if (fName > addName) {
	                        break;
	                    }
	                }
	                funcs.splice(index, 0, func);
	            },
	           
	            
	            remove: function (name) {
	                if (!name) {
	                    return;
	                }
	                name = toUpperCase(name);
	                var funcs = this._funcs, count = funcs.length;
	                for (var i = 0; i < count; i++) {
	                    if (toUpperCase(funcs[i].name) === name) {
	                        funcs.splice(i, 1);
	                        break;
	                    }
	                }
	            },
	           
	            
	            workbook: function (value) {
	                var self = this;
	               
	                if (arguments.length === 0) {
	                    return self._workbook;
	                }
	                if (value === keyword_null) {
	                    if (self._isSelectMode) {
	                        self._endRangeSelect();
	                    }
	                } else {
	                    self._setWorkbook(value);
	                   
	                    self._attachSpread();
	                }
	            },
	            _setWorkbook: function (workbook) {
	                if (!workbook) {
	                    return;
	                }
	                var self = this;
	                if (self._workbook) {
	                    self._detachWorkbook();
	                }
	                var host = self._host;
	                if (host) {
	                    self._workbook = workbook;
	                }
	            },
	           
	           
	            _getRanges: function () {
	                var ranges = [];
	                var tokens = this._tokens, tokenCount = (tokens && tokens.length), token, tokenText, tmpLength = 0, index = 0;
	                if (tokenCount > 0) {
	                    for (var i = 0; i < tokenCount; i++) {
	                        token = tokens[i];
	                        tokenText = token.text;
	                        if (token.type === 11 ) {
	                            ranges.push({
	                                textOffset: tmpLength,
	                                text: tokenText,
	                                ranges: token.ranges,
	                                index: index++,
	                                allowDrag: token.allowDrag
	                            });
	                        }
	                        tmpLength += tokenText.length;
	                    }
	                }
	                return ranges;
	            },
	            _getActiveRange: function () {
	                var host = this._host, ranges = this._getRanges();
	                if (host && ranges && ranges.length > 0) {
	                    var caretPosition = this.caret(), count = ranges.length, range, textOffset;
	                    for (var i = 0; i < count; i++) {
	                        range = ranges[i];
	                        textOffset = range.textOffset;
	                        if (textOffset < caretPosition && caretPosition <= textOffset + range.text.length) {
	                            return range;
	                        } else if (textOffset >= caretPosition) {
	                            break;
	                        }
	                    }
	                }
	                return keyword_null;
	            },
	            _isActiveRange: function (paramRange) {
	                if (!paramRange) {
	                    return false;
	                }
	                var caretPosition = this.caret();
	                var rangeString = paramRange.text, rangeStringOffset = paramRange.textOffset;
	                return rangeStringOffset < caretPosition && caretPosition <= rangeStringOffset + rangeString.length;
	
	            },
	            _getRangeColor: function (index) {
	                var ranges = this._getRanges(), count = ranges.length;
	                if (index < 0 || count <= index) {
	                    return '';
	                }
	                var tmpRanges = [], range, colorIndex = 0;
	                for (var i = 0; i < count; i++) {
	                    range = ranges[i];
	                   
	                    var duplicated = false, j = 0;
	                    for (; j < tmpRanges.length; j++) {
	                        if (tmpRanges[j].text.replace(/\s+/g, '').toUpperCase() === range.text.replace(/\s+/g, '').toUpperCase()) {
	                            duplicated = true;
	                            break;
	                        }
	                    }
	                    if (duplicated) {
	                        if (index === i) {
	                            colorIndex = j;
	                            break;
	                        }
	                    } else {
	                        tmpRanges.push(range);
	                        if (index === i) {
	                            colorIndex = tmpRanges.length - 1;
	                            break;
	                        }
	                    }
	                }
	                var colors = DEFAULT_RANGE_COLORS;
	                return colors[colorIndex % colors.length];
	            },
	            _canAppendRange: function () {
	                if (this._isAppending) {
	                    return true;
	                }
	                if (this._isSelectMode) {
	                    return true;
	                }
	                var activeToken = this._getToken(this.caret());
	                if (activeToken) {
	                    var tokenType = activeToken.type, tokenText = activeToken.text;
	                    return (tokenType === 1  || tokenType === 8 
	                        || (tokenType === 7  && tokenText !== '%') || tokenType === 5 
	                        || tokenType === 9  || tokenType === 15 );
	                }
	                return false;
	            },
	            _isAppendingRange: function (paramRange) {
	                if (!paramRange || !this._isAppending) {
	                    return false;
	                }
	                var appendingStart = this._appendingStart, appendingEnd = this.caret(), rangeStringOffset = paramRange.textOffset;
	                return appendingStart <= rangeStringOffset && rangeStringOffset < appendingEnd;
	
	            },
	            _getAppendingRanges: function () {
	                var ret = [];
	                var ranges = this._getRanges(), count = ranges.length, range;
	                if (count > 0) {
	                    for (var i = 0; i < count; i++) {
	                        range = ranges[i];
	                        if (this._isAppendingRange(range)) {
	                            ret.push(range);
	                        }
	                    }
	                }
	                return ret;
	            },
	            _appendRange: function (rangeString, replacing, clearPrevAppending) {
	                var self = this, host = self._host;
	                if (!rangeString || !host) {
	                    return;
	                }
	                if (!self._isAppending) {
	                    if (!self._canAppendRange()) {
	                        return;
	                    }
	                    replacing = false;
	                    self._isAppending = true;
	                    self._appendingStart = self.caret();
	                    self._trigger(EVENT_APPENDSTARTED, {});
	                }
	                var appendingStart = self._appendingStart, text = self.text(), caretPosition = self.caret();
	                if (!text) {
	                    text = '=';
	                    appendingStart = self._appendingStart = 1;
	                    caretPosition = 1;
	                }
	                var caretNewPosition = caretPosition;
	                if (clearPrevAppending) {
	                    replacing = false;
	                    text = text.substr(0, appendingStart) + text.substr(caretPosition);
	                    self._tokens = self._parse(text);
	                    caretPosition = appendingStart;
	                    caretNewPosition = caretPosition;
	                }
	                var activeToken = self._getToken(caretPosition);
	                if (replacing) {
	                    var prevText = text.substr(0, caretPosition);
	                    prevText = prevText.substr(0, prevText.length - activeToken.text.length);
	                    if (prevText.length >= appendingStart) {
	                        activeToken.text = rangeString;
	                        caretNewPosition = prevText.length + rangeString.length;
	                    }
	                } else {
	                    var tokens = self._tokens, activeTokenIndex = Common._ArrayHelper._indexOf(tokens, activeToken);
	                    var isRangeSelectAppendRange = self._isSelectMode && tokens.length > 1 && (activeTokenIndex === tokens.length - 1) && activeToken.type === 11;
	                    if (caretPosition > appendingStart || isRangeSelectAppendRange) {
	                        tokens.splice(activeTokenIndex + 1, 0, {
	                            text: this._listSeparator(),
	                            type: 8 
	                        });
	                        tokens.splice(activeTokenIndex + 2, 0, {text: rangeString, type: 11 });
	                        rangeString = ',' + rangeString;
	                    } else {
	                        tokens.splice(activeTokenIndex + 1, 0, {text: rangeString, type: 11 });
	                    }
	                    caretNewPosition = caretPosition + rangeString.length;
	                }
	               
	                self._updateHostValue();
	                var parameter = {};
	                var ftbAcrossSheet = FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance;
	                if (ftbAcrossSheet && ftbAcrossSheet._text) {
	                    parameter = {
	                        sheet: ftbAcrossSheet._sheet,
	                        editor: ftbAcrossSheet._dom && ftbAcrossSheet._dom.firstChild.firstChild,
	                        canvasOffset: ftbAcrossSheet._canvasOffset
	                    };
	                }
	                self._trigger(EVENT_TEXTCHANGED, parameter);
	                self.caret(caretNewPosition);
	            },
	            _stopAppending: function () {
	                var self = this;
	                if (self._isAppending) {
	                    self._isAppending = false;
	                    self._appendingStart = -1;
	                    self._trigger(EVENT_APPENDENDED, {});
	                }
	            },
	            _startAppending: function () {
	                this._isAppending = true;
	                this._appendingStart = this.caret();
	            },
	            _appendingStartIndex: function (index) {
	                if (index !== void 0) {
	                    this._appendingStart = index;
	                }
	                return this._appendingStart;
	            },
	            _repalceRange: function (rangeIndex, rangeString, moveCaretForAppending) {
	                var self = this, host = self._host;
	                if (!host || rangeIndex < 0 || !rangeString) {
	                    return;
	                }
	                var tmpText = '';
	                var replaced = false;
	                var tokens = self._tokens, tokenCount = (tokens && tokens.length), token, index = 0;
	                for (var i = 0; i < tokenCount; i++) {
	                    token = tokens[i];
	                    if (token.type === 11  && index++ === rangeIndex) {
	                        tokens[i] = {text: rangeString, type: 11 };
	                        replaced = true;
	                        break;
	                    }
	                    tmpText += token.text;
	                }
	                if (replaced) {
	                    self._updateHostValue();
	                    self._trigger(EVENT_TEXTCHANGED, {});
	                    if (moveCaretForAppending) {
	                       
	                       
	                        self.caret(self.text().length);
	                    } else {
	                        self.caret(tmpText.length + rangeString.length);
	                    }
	                }
	            },
	           
	            _attachSpread: function () {
	                var self = this;
	                if (!self._workbook) {
	                    return;
	                }
	                var host = self._host;
	                if (self._workbook && host) {
	                    var Events = Sheets.Events;
	                    host.setAttribute(CONST_GCUIELEMENT, 'gcAttachedFormulaTextBox');
	                    if (!self._isSelectMode) {
	                        self._workbook._attachedFormulaTextBox = self;
	                    }
	                    self._workbook._bind(Events.FormulatextboxEditStarted, self, self._onSpreadEditStarted);
	                    self._workbook._bind(Events.FormulatextboxEnterCell, self, self._onSpreadEnterCell);
	                    self._workbook._bind(Events.FormulatextboxEditEnded, self, self._onSpreadEditEnded);
	                    self._workbook._bind(Events.FormulatextboxActiveSheetChanged, self, self._onSpreadActiveSheetChanged);
	                    self._workbook._bind(Events.FormulatextboxRangeChanged, self, self._onSpreadRangeChanged);
	                    self._workbook._bind(Events.FormulaTextBoxTextChanged, self, self._onSpreadFormulaTextBoxTextChanged);
	                    self._workbook._bind(Events.FormulaTextBoxCaretChanged, self, self._onSpreadFormulaTextBoxCaretChanged);
	                    var sheet = getActiveSheet(self._workbook);
	                    if (sheet && !self._isSelectMode) {
	                        self.text(self._getEditText(sheet, sheet._activeRowIndex, sheet._activeColIndex));
	                    }
	                    self._bind(EVENT_TEXTCHANGED, self, self._onFormulaTextBoxTextChanged);
	                    self._bind(EVENT_CARETCHANGED, self, self._onFormulaTextBoxCaretChanged);
	                }
	            },
	           
	            
	            refresh: function () {
	                var workbook = this._workbook;
	                if (workbook) {
	                    var sheet = getActiveSheet(workbook);
	                    if (sheet && !this._isSelectMode) {
	                        this.text(this._getEditText(sheet, sheet._activeRowIndex, sheet._activeColIndex));
	                    }
	                }
	            },
	            _detachWorkbook: function () {
	                var self = this, workbook = self._workbook;
	                if (!self._isInWorkbook && workbook) {
	                    var Events = Sheets.Events;
	                    if (!self._isSelectMode) {
	                        workbook._attachedFormulaTextBox = null;
	                        workbook._unbind(Events.FormulatextboxEditStarted, self._onSpreadEditStarted);
	                        workbook._unbind(Events.FormulatextboxEnterCell, self._onSpreadEnterCell);
	                        workbook._unbind(Events.FormulatextboxEditEnded, self._onSpreadEditEnded);
	                        workbook._unbind(Events.FormulatextboxActiveSheetChanged, self._onSpreadActiveSheetChanged);
	                        workbook._unbind(Events.FormulatextboxRangeChanged, self._onSpreadRangeChanged);
	                        workbook._unbind(Events.FormulaTextBoxTextChanged, self._onSpreadFormulaTextBoxTextChanged);
	                        workbook._unbind(Events.FormulaTextBoxCaretChanged, self._onSpreadFormulaTextBoxCaretChanged);
	                        self._unbind(EVENT_TEXTCHANGED, self._onFormulaTextBoxTextChanged);
	                        self._unbind(EVENT_CARETCHANGED, self._onFormulaTextBoxCaretChanged);
	                    }
	                    self.text('');
	                }
	                self._workbook = null;
	            },
	            _startingEdit: function () {
	                var self = this;
	                if (self._isWorking) {
	                    return;
	                }
	                self._isWorking = true;
	                var workbook = this._workbook;
	                var sheet = (workbook && getActiveSheet(workbook));
	                if (sheet && !sheet.isEditing()) {
	                    if (!self._isSelectMode) {
	                        sheet._startEditImp(null, sheet._activeRowIndex, sheet._activeColIndex, null, null, false, null);
	                    }
	                    self._editStarting = true;
	                } else {
	                    self._editStarting = false;
	                }
	                self._isWorking = false;
	               
	                if (!self._isFuncsShown) {
	                    self._openFuncHelp();
	                }
	            },
	            _startEdit: function () {
	                var self = this;
	                var workbook = self._workbook;
	                var sheet = (workbook && getActiveSheet(workbook));
	                if (!sheet) {
	                    return;
	                }
	               
	                var fbx = sheet._formulaTextBox;
	                if (self._editStarting && fbx) {
	                    var fbxText = fbx.text(), selfText = self.text();
	                    if (selfText !== fbxText) {
	                        var caret = self.caret();
	                        var formulaInfo = sheet.getFormulaInformation(sheet.getActiveRowIndex(), sheet.getActiveColumnIndex());
	                        self.text(fbxText);
	                        if (formulaInfo.isArrayFormula) {
	                            if (caret >= selfText.length) {
	                                caret = caret - 1;
	                            }
	                            caret = Math_max(0, caret - 1);
	                        }
	                        self.caret(caret);
	                    }
	                }
	               
	               
	                var oldStatus = sheet._editorStatus;
	                if (oldStatus !== 2 ) {
	                    sheet._editorStatus = 2 ;
	                    sheet._raiseEditorStatusChanged(oldStatus, 2 );
	                }
	            },
	            _getEditText: function (sheet, row, col) {
	                var text = '';
	                if (sheet) {
	                    var parent = sheet.parent, options = parent && parent.options;
	                    var formulaInfo = sheet.getFormulaInformation(row, col);
	                    if (formulaInfo && formulaInfo.hasFormula) {
	                        text = '=' + formulaInfo.formulaWithCulture;
	                        if (formulaInfo.isArrayFormula) {
	                            text = '{' + text + '}';
	                        }
	                    } else {
	                        var cellStyle = sheet.getActualStyle(row, col);
	                        var value = sheet.getValue(row, col);
	                        if ((typeof value === 'string' && cellStyle.quotePrefix) || (text.length > 0 && text[0] === '=' && options && options.allowUserEditFormula)) {
	                            text = '\'' + value;
	                        } else {
	                            text = Sheets_util._formatValue2Text(cellStyle, value, sheet) || '';
	                        }
	                    }
	                }
	                return text;
	            },
	            _onSpreadActiveSheetChanged: function (e, eData) {
	                var self = e.data;
	                if (self._isWorking) {
	                    return;
	                }
	                var newSheet = eData.newSheet;
	                if (self._isSelectMode) {
	                   
	                    return;
	                }
	                self._isWorking = true;
	                self.close();
	                if (eData) {
	                    var sheet = newSheet;
	                    self.text(self._getEditText(sheet, sheet._activeRowIndex, sheet._activeColIndex));
	                }
	                self._isWorking = false;
	            },
	            _onSpreadEditStarted: function (e) {
	                var self = e.data;
	                if (self._isWorking) {
	                    return;
	                }
	                var workbook = self._workbook;
	                var sheet = (workbook && getActiveSheet(workbook));
	                var fbx = (sheet && sheet._formulaTextBox);
	                if (!fbx) {
	                    return;
	                }
	                if (self._isSelectMode !== fbx._isSelectMode || self._selectModeId !== fbx._selectModeId) {
	                    return;
	                }
	                self._isWorking = true;
	                self.text(fbx.text());
	                self._isWorking = false;
	            },
	            _onSpreadEnterCell: function (e, eData) {
	                var self = e.data;
	                if (self._isSelectMode) {
	                    return;
	                }
	                if (self._isWorking) {
	                    return;
	                }
	                self._isWorking = true;
	                if (eData) {
	                    self.text(self._getEditText(eData.sheet, eData.row, eData.col));
	                }
	                self._isWorking = false;
	            },
	            _onSpreadRangeChanged: function (e, eData) {
	                var self = e.data;
	                if (self._isWorking || self._isSelectMode) {
	                    return;
	                }
	                self._isWorking = true;
	                if (eData) {
	                    var sheet = eData.sheet, row = eData.row, col = eData.col, rowCount = eData.rowCount, colCount = eData.colCount;
	                    if (new Sheets.Range(row, col, rowCount, colCount).contains(sheet._activeRowIndex, sheet._activeColIndex)) {
	                        self.text(self._getEditText(sheet, sheet._activeRowIndex, sheet._activeColIndex));
	                    }
	                }
	                self._isWorking = false;
	            },
	            _onSpreadEditEnded: function (e, eData) {
	                var self = e.data;
	                if (self._isSelectMode && self._isSelectButtonPressed && self._isSelectFocusIn) {
	                    eData.ignore = true;
	                    return;
	                }
	                if (self._isWorking) {
	                    return;
	                }
	                self._isWorking = true;
	                self.close();
	                if (eData && eData.sheet._formulaTextBox && !eData.sheet._formulaTextBox._isSelectMode && !self._isSelectMode) {
	                    self.text(self._getEditText(eData.sheet, eData.row, eData.col));
	                }
	                self._isWorking = false;
	            },
	            _onSpreadFormulaTextBoxTextChanged: function (e, eData) {
	                var self = e.data;
	                if (self._isWorking) {
	                    return;
	                }
	                if (eData.sheet._formulaTextBox &&
	                    (self._isSelectMode !== eData.sheet._formulaTextBox._isSelectMode ||
	                        self._selectModeId !== eData.sheet._formulaTextBox._selectModeId)) {
	                    return;
	                }
	                self._isWorking = true;
	                if (eData) {
	                    var caret = self.caret();
	                    self.text(eData.text);
	                    self.caret(caret);
	                }
	                self._isWorking = false;
	            },
	            _onSpreadFormulaTextBoxCaretChanged: function (e, eData) {
	                var self = e.data;
	                if (self._isWorking) {
	                    return;
	                }
	                if (eData.sheet._formulaTextBox &&
	                    (self._isSelectMode !== eData.sheet._formulaTextBox._isSelectMode ||
	                        self._selectModeId !== eData.sheet._formulaTextBox._selectModeId)) {
	                    return;
	                }
	                self._isWorking = true;
	                if (eData) {
	                    self.caret(eData.caret);
	                }
	                self._isWorking = false;
	            },
	            _onFormulaTextBoxTextChanged: function (e) {
	                var self = e.data;
	                if (self._isWorking) {
	                    return;
	                }
	                var workbook = self._workbook, sheet = (workbook && getActiveSheet(workbook));
	                if (!sheet) {
	                    return;
	                }
	                if (!sheet.isEditing()) {
	                    self._startingEdit();
	                    self.focus();
	                }
	                self._isWorking = true;
	                var rowIndex = sheet._activeRowIndex, columnIndex = sheet._activeColIndex;
	                var fbx = sheet._formulaTextBox, cellType = sheet.getCellType(rowIndex, columnIndex);
	                if (fbx) {
	                    if (self._isSelectMode !== fbx._isSelectMode || self._selectModeId !== fbx._selectModeId) {
	                        return;
	                    }
	                    var caret = fbx.caret();
	                    fbx.text(self.text());
	                    fbx.caret(caret);
	                } else {
	                    var context = {
	                        sheet: sheet,
	                        row: rowIndex,
	                        col: columnIndex,
	                        sheetArea: 3 
	                    };
	                    cellType.setEditorValue(sheet._editor, self.text(), context);
	                }
	                self._isWorking = false;
	            },
	            _onFormulaTextBoxCaretChanged: function (e) {
	                var self = e.data;
	                if (self._isWorking) {
	                    return;
	                }
	                var workbook = self._workbook, sheet = (workbook && getActiveSheet(workbook));
	                if (!sheet || !sheet.isEditing()) {
	                    return;
	                }
	                var fbx = sheet._formulaTextBox;
	                if (fbx && (self._isSelectMode !== fbx._isSelectMode || self._selectModeId !== fbx._selectModeId)) {
	                    return;
	                }
	               
	                self._isWorking = true;
	                if (fbx) {
	                    fbx.caret(self.caret());
	                    self._openFuncHelp();
	                }
	                self._isWorking = false;
	            },
	           
	           
	            _init: function (parentElement) {
	                var self = this;
	                self._isImeInputting = false;
	                self._isInputKey = false;
	               
	                self._isAppending = false;
	                self._appendingStart = -1;
	               
	                self._funcs = [];
	                self._autoComplete = true;
	                self._showHelp = true;
	                self._autoClose = true;
	                var funcsPopup = createElement('div');
	                funcsPopup.className = 'gcsj-func-ac-popup';
	                funcsPopup.style.display = 'none';
	                funcsPopup.setAttribute(CONST_GCUIELEMENT, 'gcFuncACPopup');
	                parentElement.insertBefore(funcsPopup, keyword_null);
	                self._funcsPopup = funcsPopup;
	                self._isFuncsShown = false;
	                var funcHelpPopup = createElement('div');
	                funcHelpPopup.className = 'gcsj-func-help-popup';
	                funcHelpPopup.style.display = 'none';
	                funcHelpPopup.setAttribute(CONST_GCUIELEMENT, 'gcFuncHelpPopup');
	                parentElement.insertBefore(funcHelpPopup, keyword_null);
	                self._funcHelpPopup = funcHelpPopup;
	                self._isFuncHelpShown = false;
	                $(funcsPopup).bind('mouseover', function () {
	                    self._autoClose = false;
	                }).bind('mouseout', function () {
	                    self._autoClose = true;
	                });
	                $(funcHelpPopup).bind('mouseover', function () {
	                    self._autoClose = false;
	                }).bind('mouseout', function () {
	                    self._autoClose = true;
	                });
	                $(funcsPopup).bind('scroll', function () {
	                    if (self._funcsScrollingTimer) {
	                        clearTimeout(self._funcsScrollingTimer);
	                    }
	                    self._funcsScrollingTimer = setTimeout(function () {
	                        if (self._host) {
	                            self._host.focus();
	                        }
	                    }, 100);
	                });
	                var helpDiv = createElement('div');
	                helpDiv.style.display = 'none';
	                helpDiv.setAttribute(CONST_GCUIELEMENT, 'gcFuncHelpDiv');
	                parentElement.insertBefore(helpDiv, keyword_null);
	                self._helpDiv = helpDiv;
	                self._workbook = null;
	                self._isWorking = false;
	                self._editStarting = false;
	                self._isInWorkbook = false;
	            },
	            _attachHost: function (host) {
	                if (!host) {
	                    return;
	                }
	                var self = this, editable = self._isEditableDIVElement(host);
	               
	                if (!self._isInputElement(host) && !editable) {
	                    return;
	                }
	                var $host = $(host);
	                if (self._host) {
	                    self._detachHost();
	                }
	                self._host = host;
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	                if (browser && browser.msie) {
	                    if (editable || lessThanIE10) {
	                        self._bind('focus', function () {
	                            $host.data('text-before', self.text());
	                        });
	                        self._bind('click', function () {
	                            $host.focus();
	                        });
	                        'input keydown keyup cut paste'.split(' ').forEach(function (eventName) {
	                            self._bind(eventName, function () {
	                                self._checkInput();
	                            });
	                        });
	                    } else {
	                        self._bind(CONST_INPUT, function () {
	                            self._onInput();
	                        });
	                    }
	                } else {
	                    self._bind(CONST_INPUT, function () {
	                       
	                       
	                       
	                        if (editable) {
	                            var lastChild = self._host.lastChild;
	                            if (browser.chrome && lastChild && lastChild.tagName === 'BR') {
	                                self._host.removeChild(lastChild);
	                            }
	                        }
	                        self._onInput();
	                    });
	                }
	               
	                self._bind('keydown', function (e) {
	                    var ctrlKey = e.ctrlKey, shiftKey = e.shiftKey, altKey = e.altKey, metaKey = e.metaKey, modifyKey = ctrlKey || shiftKey || altKey || metaKey, keyCode = e.keyCode;
	                    self._isInputKey = false;
	                   
	                    if (!modifyKey && self._isFuncsShown) {
	                        if (keyCode === Keys.down) {
	                            self._selectFunc(1);
	                            cancelDefault(e);
	                        } else if (keyCode === Keys.up) {
	                            self._selectFunc(-1);
	                            cancelDefault(e);
	                        } else if (keyCode === Keys.tab) {
	                            self._completeFunc();
	                            cancelDefault(e);
	                        }
	                    }
	                   
	                    if (keyCode === Keys.esc) {
	                        self.close();
	                    }
	                   
	                    self._checkCaret(e);
	
	                    var sheet = getActiveSheet(self._workbook);
	                    var isValidInputing = sheet._eventHandler._allowEnterEditing(e);
	                    if (self._isSelectMode && isValidInputing) {
	                        var fbx = sheet._formulaTextBox;
	                        if (fbx && fbx._isAppending) {
	                            fbx._stopAppending();
	                        }
	                    }
	
	                    if (editable) {
	                        if (isValidInputing) {
	                            self._updateUndoStack();
	                        } else if (keyCode === 13  && (ctrlKey || altKey)) {
	                            self._updateUndoStack(true);
	                        }
	                        if (editable && ctrlKey && (keyCode === 90  || keyCode === 89 )) {
	                            cancelDefault(e);
	                        }
	                    }
	                });
	               
	                self._bind('keyup', function (e) {
	                    self._checkCaret(e);
	
	                    var editorValue = self.text();
	                    if (editable) {
	                        var newEditorValue;
	                        var keyCode = e.keyCode, ctrlKey = e.ctrlKey;
	                        if (ctrlKey && keyCode === 90 ) {
	                            newEditorValue = self._undoStack.pop() || '';
	                            self.text(newEditorValue);
	                            self._redoStack.push(editorValue);
	                        } else if (ctrlKey && keyCode === 89 ) {
	                            newEditorValue = self._redoStack.pop();
	                            if (newEditorValue) {
	                                self.text(newEditorValue);
	                                self._undoStack.push(editorValue);
	                            }
	                        }
	                    }
	                });
	               
	                self._bind('focus', function (e) {
	                    var isFirefox = browser && browser.mozilla;
	                    if (isFirefox && !self._host.innerText) {
	                       
	                       
	                       
	                       
	                        self._host.innerText = '';
	                    }
	                    self._checkCaret(e);
	                    if (self._isSelectMode && self._isSelectButtonPressed) {
	                        self._isSelectFocusIn = true;
	                        self._beginRangeSelect();
	                    }
	                });
	               
	                self._bind('blur', function () {
	                    if (self._autoClose) {
	                        self.close();
	                    }
	                    if (self._isSelectMode) {
	                        self._endRangeSelect();
	                        self._isSelectFocusIn = false;
	                    }
	                });
	               
	                self._bind('mousedown', function () {
	                    self._isSelectFocusIn = true;
	                    self._startingEdit();
	                });
	               
	                self._bind('mouseup', function () {
	                    self._startEdit();
	                });
	               
	                self._bind('click', function (e) {
	                    if (self._isAppending) {
	                        self._stopAppending();
	                    }
	                    var workbook = self._workbook, sheet = (workbook && getActiveSheet(workbook));
	                    var fbx = (sheet && sheet._formulaTextBox);
	                    if (fbx && fbx._isAppending && !fbx._isSelectMode) {
	                        fbx._stopAppending();
	                    }
	                    self._checkCaret(e);
	                });
	               
	                self._bind('compositionstart', function () {
	                    self._isImeInputting = true;
	                });
	                self._bind('compositionend', function () {
	                    self._isImeInputting = false;
	                    if (browser.edge || browser.chrome) {
	                       
	                       
	                       
	                       
	
	                       
	                        self._checkInput();
	                    }
	                });
	            },
	            _detachHost: function () {
	                var self = this, host = self._host;
	                if (host) {
	                    var $host = $(host);
	                    $host.removeData('text-before');
	                    $host.removeData('caret-before');
	                    self._unbindAll();
	                    self.unbindAll();
	                    if (self._isSelectMode) {
	                        $(self._selectModeDom).empty();
	                        self._selectModeDom = keyword_null;
	                    }
	                    self._host = keyword_null;
	                }
	            },
	            _checkInput: function () {
	                var self = this, $host = $(self._host), text = self.text();
	                if ($host.data('text-before') !== text) {
	                    if (!self._isImeInputting) {
	                        $host.data("text-before", text);
	                    }
	                    self._onInput();
	                }
	            },
	            _checkCaret: function (e) {
	               
	                if (browser && browser.msie) {
	                    var checkCaretObj = function (self, event) {
	                        return function () {
	                            self._checkCaretCore(self, event);
	                        };
	                    };
	                    setTimeout(checkCaretObj(this, e), 10);
	                } else {
	                    this._checkCaretCore(this, e);
	                }
	            },
	            _checkCaretCore: function (self, e) {
	                var keyCode = e.keyCode;
	                var navKey = (keyCode === Keys.left || keyCode === Keys.right || keyCode === Keys.home || keyCode === Keys.end || keyCode === Keys.pdn || keyCode === Keys.pup || keyCode === Keys.tab || keyCode === Keys.enter);
	                if (!self._autoComplete) {
	                    navKey = (navKey || keyCode === Keys.up || keyCode === Keys.down);
	                }
	                var mouseClick = (typeof (e.button) !== 'undefined');
	                if (navKey || mouseClick) {
	                    var host = self._host, $host = $(host), caretPosition = self._getCaret(host);
	                   
	                    if (caretPosition.start !== caretPosition.end) {
	                        return;
	                    }
	                    var caret = caretPosition.end;
	                    if ($host.data('caret-before') !== caret) {
	                        $host.data('caret-before', caret);
	                        self._trigger(EVENT_CARETCHANGED, {});
	                        self._openFuncHelp();
	                    }
	                }
	            },
	            _activeRow: function () {
	                if (this._workbook) {
	                    return getActiveSheet(this._workbook)._activeRowIndex;
	                }
	                return keyword_undefined;
	            },
	            _activeCol: function () {
	                if (this._workbook) {
	                    return getActiveSheet(this._workbook)._activeColIndex;
	                }
	                return keyword_undefined;
	            },
	            _activeSheet: function () {
	                if (this._workbook) {
	                    return getActiveSheet(this._workbook);
	                }
	            },
	           
	            _parse: function (text) {
	                var self = this;
	                var newToken = [];
	                if (!text || text[0] !== '=') {
	                    newToken.push({text: text, type: 17 });
	                    return newToken;
	                }
	                var parser = new CalcNS.Parser();
	                var tokens2 = parser.parseReferenceExpressionInfos(text, self._activeSheet(), self._activeRow(), self._activeCol(), true);
	                newToken = self._convertToTextboxToken(tokens2);
	                return newToken;
	            },
	            _onInput: function () {
	                var self = this, editorText = self.text();
	               
	               
	               
	               
	                if (editorText !== '\n' && editorText.indexOf('\n') >= 0) {
	                    return;
	                }
	                var host = self._host, $host = $(host);
	                self._isInputKey = true;
	                self._tokens = self._parse(editorText);
	                if (self._isEditableDIVElement(host)) {
	                    if (!self._isImeInputting) {
	                        if (editorText === '\n') {
	                           
	                            $host.empty();
	                            self._trigger(EVENT_TEXTCHANGED, {type: CONST_INPUT});
	                        } else {
	                            var caretPosition = self.caret();
	                            self._colorText(self._tokens);
	                            self._trigger(EVENT_TEXTCHANGED, {type: CONST_INPUT});
	                            self.caret(caretPosition);
	                        }
	                    }
	                } else {
	                   
	                   
	                   
	                    self._trigger(EVENT_TEXTCHANGED, {type: CONST_INPUT});
	                }
	                caretPosition = self.caret();
	                if ($host.data('caret-before') !== caretPosition) {
	                    $host.data('caret-before', caretPosition);
	                    self._trigger(EVENT_CARETCHANGED, {});
	                }
	                self._openFuncs();
	                if (!self._isFuncsShown) {
	                    self._openFuncHelp();
	                }
	            },
	            _CR: function () {
	                return Common.CultureManager._getCultureInfo().NumberFormat;
	            },
	            _arrayGroupSeperator: function () {
	                var CR = this._CR();
	                return CR && CR.arrayGroupSeperator || ';';
	            },
	            _arrayListSeparator: function () {
	                var CR = this._CR();
	                return CR && CR.arrayListSeparator || ',';
	            },
	            _listSeparator: function () {
	                var CR = this._CR();
	                return CR && CR.listSeparator || ',';
	            },
	            _numberDecimalSeparator: function () {
	                var CR = this._CR();
	                return CR && CR.numberDecimalSeparator || '.';
	            },
	           
	            _convertToTextboxToken: function (tokenList) {
	                var newTokens = [];
	                var bracketStack = [];
	
	                var arrayGroupSeperator = this._arrayGroupSeperator(),
	                    listSeparator = this._listSeparator(),
	                    arrayListSeparator = this._arrayListSeparator();
	                var isInArray = false;
	                for (var i = 0; i < tokenList.length; i++) {
	                   
	                    if (i > 0 && i < tokenList.length - 1 && tokenList[i - 1].text === ';' && tokenList[i].text === ',' && tokenList[i + 1].text === 'ARRAYROW') {
	                        continue;
	                    }
	                    var calcToken = tokenList[i];
	                    var tokenType = this._getCalcType(calcToken, bracketStack);
	                    var text = calcToken.text;
	                    if (tokenType === 2 ) {
	                        newTokens.push({text: text, type: tokenType});
	                    } else if (isInArray && tokenType === 8 && text === ',') {
	                        newTokens.push({text: arrayListSeparator, type: 9 });
	                    } else if (isInArray && tokenType === 8 && text === ';') {
	                        newTokens.push({text: arrayGroupSeperator, type: 10 });
	                    } else if (tokenType === 8) {
	                        newTokens.push({text: listSeparator, type: tokenType});
	                    } else if (tokenType === 3 ) {
	                        if (text === 'ARRAY') {
	                            isInArray = true;
	                        }
	                        newTokens.push({text: '{', type: 3 });
	                    } else if (tokenType === 4 ) {
	                        if (text === 'ARRAY') {
	                            isInArray = false;
	                            newTokens.push({text: '}', type: 4 });
	                        } else {
	                            newTokens.push({text: text, type: 4 });
	                        }
	                    } else if (tokenType === 6 ) {
	                        newTokens.push({text: ')', type: tokenType});
	                    } else if (tokenType === 13 ) {
	                        newTokens.push({
	                            text: Common._NumberHelper._replaceNormalToCultureSymbol(text),
	                            type: tokenType,
	                            ranges: calcToken.ranges,
	                            allowDrag: calcToken.canDrag
	                        });
	                    } else if (tokenType !== null) {
	                        newTokens.push({
	                            text: text,
	                            type: tokenType,
	                            ranges: calcToken.ranges,
	                            allowDrag: calcToken.canDrag
	                        });
	                    }
	                }
	                return newTokens;
	            },
	            _getCalcType: function (token, bracketStack) {
	                var type = token.type;
	                var subType = token.subType;
	                var text = token.text;
	                var value = token.value;
	                if (type === 1 ) {
	                    if (subType === 1 ) {
	                        if (text === 'ARRAY' || text === 'ARRAYROW') {
	                            bracketStack.push(3 );
	                            return 3 ;
	                        }
	                        bracketStack.push(5 );
	                        if (value.trim() === '(') {
	                            return 5 ;
	                        }
	                        return 2 ;
	                    }
	                    if (subType === 2 ) {
	                        if (value.trim() === ')') {
	                            return 6 ;
	                        }
	                        if (bracketStack.length > 0) {
	                            var lastBracket = bracketStack[bracketStack.length - 1];
	                            if (lastBracket === 3 ) {
	                                bracketStack.pop();
	                                return 4 ;
	                            } else if (lastBracket === 5 ) {
	                                bracketStack.pop();
	                                return 6 ;
	                            }
	                        }
	                    }
	                    if (value.trim() === '=') {
	                        return 1 ;
	                    }
	                } else if (type === 3 ) {
	                    if (subType === 0 ) {
	                        return 8 ;
	                    }
	                } else if ((type === 5 ) || (type === 6 ) || (type === 4 )) {
	                    return 7 ;
	                } else if (type === 0 ) {
	                    if (subType === 7  || subType === 0 ) {
	                        return 11 ;
	                    } else if (subType === 5 ) {
	                        return 12 ;
	                    } else if (subType === 4 ) {
	                        return 13 ;
	                    } else if (subType === 3 ) {
	                        return 14 ;
	                    } else if (subType === 6 ) {
	                        return 16 ;
	                    }
	                    return 14 ;
	                } else if (type === 7 ) {
	                    return 15 ;
	                } else if (type === 8 ) {
	                    return 17 ;
	                }
	                return 17 ;
	            },
	            _updateHostValue: function () {
	                var self = this, host = self._host, tokens = self._tokens;
	                var text = '', tokenCount = (tokens && tokens.length);
	                for (var i = 0; i < tokenCount; i++) {
	                    text += tokens[i].text;
	                }
	                if (self._isInputElement(host)) {
	                    host.value = text;
	                } else if (self._isEditableDIVElement(host)) {
	                    self._colorText(tokens);
	                }
	            },
	            _isInputElement: function (element) {
	                var tagName = (element && element.tagName);
	                return (tagName === 'TEXTAREA' || tagName === 'INPUT');
	            },
	            _isEditableDIVElement: function (element) {
	                return (element && element.tagName === 'DIV' && element.contentEditable === 'true');
	            },
	            _isGCEditingInputElement: function (element) {
	                return $(element).attr(CONST_GCUIELEMENT) === 'gcEditingInput';
	            },
	            _isFormula: function (text) {
	                return text && text[0] === '=';
	
	            },
	            _bind: function (type, data, fn) {
	                var host = this._host;
	                if (host && type) {
	                    type = type.split(/\s+/).join(ns_formulatextbox_internal + ' ');
	                    $(host).bind(type + ns_formulatextbox_internal, data, fn);
	                }
	            },
	            _unbind: function (type, fn) {
	                var host = this._host;
	                if (host && type) {
	                    type = type.split(/\s+/).join(ns_formulatextbox_internal + ' ');
	                    $(host).unbind(type + ns_formulatextbox_internal, fn);
	                }
	            },
	            _unbindAll: function () {
	                var host = this._host;
	                if (host) {
	                    $(host).unbind(ns_formulatextbox_internal);
	                }
	            },
	            _trigger: function (type, data) {
	                var host = this._host;
	                if (host) {
	                    $(host).trigger(type, data);
	                }
	            },
	            _getToken: function (caretPosition) {
	                if (caretPosition <= 0) {
	                    return keyword_null;
	                }
	                var tokens = this._tokens, tokenCount = (tokens && tokens.length);
	                if (tokenCount > 0) {
	                    var textIndex = 0, token;
	                    for (var i = 0; i < tokenCount; i++) {
	                        token = tokens[i];
	                        textIndex += token.text.length;
	                        if (textIndex >= caretPosition) {
	                            return token;
	                        }
	                    }
	                }
	                return keyword_null;
	            },
	            _getFuncs: function () {
	                var workbook = this._workbook;
	                var sheet = (workbook && getActiveSheet(workbook));
	                var fbx = (sheet && sheet._formulaTextBox);
	                if (fbx) {
	                    var all = fbx._funcs;
	                    for (var i = 0; i < all.length; i++) {
	                        all[i].isFunc = true;
	                    }
	                    return all.concat(this._getCustomNames(workbook, sheet)).concat(this._getTableNames(sheet));
	                }
	                return this._funcs;
	            },
	            _getCustomNames: function (workbook, sheet) {
	                var names = [];
	
	                var sheetNames = sheet.getCustomNames();
	                if (sheetNames) {
	                    $.each(sheetNames, function (i, sheetName) {
	                        names.push({
	                            name: sheetName._name,
	                            description: sheetName._comment
	                        });
	                    });
	                }
	                var workbookCustomNames = workbook.getCustomNames();
	                if (workbookCustomNames) {
	                    $.each(workbookCustomNames, function (i, bookName) {
	                        names.push({
	                            name: bookName._name,
	                            description: bookName._comment
	                        });
	                    });
	                }
	
	                return names;
	            },
	            _getTableNames: function (sheet) {
	                var names = [];
	                var tableManager = sheet.tables;
	                if (tableManager) {
	                    var tables = tableManager.all();
	                    if (tables) {
	                        for (var i = 0; i < tables.length; i++) {
	                            names.push({
	                                name: tables[i].name(),
	                                description: SR().Fbx_TableName_Description + tables[i].name()
	                            });
	                        }
	                    }
	                }
	                return names;
	            },
	            _getFuncsStartWith: function (startName, funcs) {
	                startName = toUpperCase(startName);
	                if (StringHelper._contains(startName, '[')) {
	                    startName = startName.substr(startName.lastIndexOf('[') + 1);
	                    startName = StringHelper._replace(startName, '@', '');
	                }
	               
	                var results = [];
	                var count = (funcs && funcs.length), f;
	                for (var i = 0; i < count; i++) {
	                    f = funcs[i];
	                    if (toUpperCase(f.name).indexOf(startName) === 0) {
	                        results.push(f);
	                    }
	                }
	                return results;
	            },
	            _getTextInTokenBeforeCaret: function () {
	                var caretPosition = this.caret();
	                if (caretPosition <= 0) {
	                    return '';
	                }
	                var tokens = this._tokens, tokenCount = (tokens && tokens.length);
	                if (tokenCount > 0) {
	                    var textIndex = 0, token;
	                    for (var i = 0; i < tokenCount; i++) {
	                        token = tokens[i];
	                        if (textIndex + token.text.length >= caretPosition) {
	                            return token.text.substring(0, caretPosition - textIndex);
	                        }
	                        textIndex += token.text.length;
	                    }
	                }
	                return '';
	            },
	            _getActiveFuncInfo: function () {
	                var caretPosition = this.caret(), tokens = this._tokens, tokenCount = (tokens && tokens.length);
	                var tmpTokens = [], textIndex = 0, token;
	                for (var i = 0; i < tokenCount; i++) {
	                    token = tokens[i];
	                    tmpTokens.push(token);
	                    if (token.type === 6 ) {
	                        var parenMatchCount = 0;
	                        while (tmpTokens.length > 0) {
	                            var popToken = tmpTokens.pop();
	                            if (popToken.type === 6 ) {
	                                parenMatchCount++;
	                            }
	                            if (popToken.type === 5 ) {
	                                parenMatchCount--;
	                            }
	                            if (parenMatchCount === 0) {
	                                if (tmpTokens.length > 0) {
	                                    popToken = tmpTokens[tmpTokens.length - 1];
	                                    if (popToken && popToken.type === 2 ) {
	                                        tmpTokens.pop();
	                                    }
	                                }
	                                break;
	                            }
	                        }
	                    }
	                    textIndex += token.text.length;
	                    if (textIndex >= caretPosition) {
	                        break;
	                    }
	                }
	                if (tmpTokens.length > 0) {
	                    var activeParamterIndex = 0;
	                    while (tmpTokens.length > 0) {
	                        token = tmpTokens.pop();
	                        if (token.type === 8 ) {
	                            activeParamterIndex++;
	                        } else if (token.type === 2 ) {
	                            var funcName = toUpperCase(token.text);
	                            var funcs = this._getFuncs(), funcCount = (funcs && funcs.length), func;
	                            for (i = 0; i < funcCount; i++) {
	                                func = funcs[i];
	                                if (toUpperCase(func.name) === funcName) {
	                                    return {func: func, activeParamterIndex: activeParamterIndex, isFunc: func.isFunc};
	                                }
	                            }
	                            break;
	                        }
	                    }
	                }
	                return keyword_null;
	            },
	           
	           
	            _openFuncs: function () {
	                var self = this;
	                var funcs = self._getFuncsForInput();
	                var show = (self._autoComplete && self._isFormula(self.text()) && funcs && funcs.length > 0 && !self._isAppending && !self._isImeInputting);
	                if (show && !self._isSelectMode) {
	                    self._closeFuncHelp();
	                    var funcsPopup = self._funcsPopup;
	                    if (funcs.length > 8) {
	                        funcsPopup.style.height = '204px';
	                        funcsPopup.style.overflowY = 'scroll';
	                    } else {
	                        funcsPopup.style.height = 'auto';
	                        funcsPopup.style.overflowY = '';
	                    }
	                    var popupContent = '';
	                    var count = funcs.length, func;
	                    for (var i = 0; i < count; i++) {
	                        func = funcs[i];
	                        popupContent += '<div class=\'gcsj-func-ac-row\'><div class=\'gcsj-func-ac-row-name\' isFunc=' + func.isFunc + '>' + func.name + '</div><div class=\'gcsj-func-ac-row-description\'>' + (func.description || '') + '</div></div>';
	                    }
	                    var $funcsPopup = $(self._funcsPopup);
	                    $funcsPopup.html(popupContent).show();
	                    self._isFuncsShown = true;
	                   
	                    var $items = $funcsPopup.find('.gcsj-func-ac-row');
	                    if ($items.length > 0) {
	                        var activeClassName = 'gcsj-ac-row-active';
	                        $($items[0]).addClass(activeClassName);
	                        $items.bind('mouseover', function () {
	                            $items.removeClass(activeClassName);
	                            $(this).addClass(activeClassName);
	                        });
	                        $items.bind('click', function () {
	                            self._completeFunc();
	                        });
	                    }
	                    self._position();
	                } else {
	                    self._closeFuncs();
	                }
	            },
	           
	            _getFuncsForInput: function () {
	                var self = this;
	                var token = self._getToken(self.caret()), tokenText = (token && token.text), funcs = [];
	                var tokenIndex = self._tokens.indexOf(token);
	                if (token && token.type === 14 ) {
	                    return funcs;
	                }
	                var tableColumnNames = self._getTableColumnNames(tokenIndex);
	                if (tableColumnNames.length > 0) {
	                    funcs = funcs.concat(tableColumnNames).concat(SR()._tableFunctionsResource);
	                    if (StringHelper._endsWith(tokenText, '[') || StringHelper._endsWith(tokenText, '[@')) {
	                        return funcs;
	                    }
	                } else {
	                    funcs = this._getFuncs();
	                }
	               
	                tokenText = self._getTextInTokenBeforeCaret();
	                var result = [];
	                if (tokenText) {
	                    result = self._getFuncsStartWith(tokenText, funcs);
	                }
	                return result;
	            },
	            _getTableColumnNames: function (tokenIndex) {
	                var columnNames = [];
	                var tokens = this._tokens, tokenCount = (tokens && tokens.length);
	                if (tokenIndex < 0 || tokenIndex >= tokens.length) {
	                    return columnNames;
	                }
	                var workbook = this._workbook;
	                var sheet = (workbook && getActiveSheet(workbook));
	                var dealedTable = {};
	                if (typeof tokenIndex === 'undefined' || tokenIndex === keyword_null) {
	                    tokenIndex = tokenCount;
	                }
	                if (sheet) {
	                    var token = tokens[tokenIndex];
	                    var tableManager = sheet.tables, table = tableManager && tableManager.findByName(StringHelper._leftBefore(token.text, '['));
	                    if (typeof table !== 'undefined' && table !== keyword_null && !dealedTable[table]) {
	                        dealedTable[table] = true;
	                        var index = 0;
	                        var tableName = '';
	                        while (tableName !== keyword_null) {
	                            tableName = table.getColumnName(index++);
	                            if (tableName !== keyword_null) {
	                                columnNames.push({name: tableName, description: ''});
	                            }
	                        }
	                        if (columnNames.length > 0) {
	                            return columnNames;
	                        }
	                    }
	                }
	                return columnNames;
	            },
	            _closeFuncs: function () {
	                $(this._funcsPopup).hide();
	                this._isFuncsShown = false;
	            },
	            _selectFunc: function (step) {
	                var $items = $(this._funcsPopup).find('.gcsj-func-ac-row'), count = $items.length;
	                if (count === 0) {
	                    return;
	                }
	                var activeClassName = 'gcsj-ac-row-active';
	                var newIndex = 0;
	                if (step) {
	                    for (var i = 0; i < count; i++) {
	                        if ($($items[i]).hasClass(activeClassName)) {
	                            newIndex = i + step;
	                            break;
	                        }
	                    }
	                }
	                var scrollTopTmp = $(this._funcsPopup).scrollTop();
	                $items.removeClass(activeClassName);
	                var offsetHeight = 0;
	                if (count > 0) {
	                    offsetHeight = $items[0].offsetHeight;
	                }
	                newIndex = Math_max(newIndex, 0);
	                newIndex = Math_min(newIndex, count - 1);
	                var element = $items[newIndex];
	                $(element).addClass(activeClassName);
	               
	                if (element.offsetTop + element.offsetHeight > $(this._funcsPopup).scrollTop() + $(this._funcsPopup).height()) {
	                    $(this._funcsPopup).scrollTop($(this._funcsPopup).scrollTop() + offsetHeight);
	                } else if (element.offsetTop < $(this._funcsPopup).scrollTop()) {
	                    $(this._funcsPopup).scrollTop(element.offsetTop);
	                } else {
	                    $(this._funcsPopup).scrollTop(scrollTopTmp);
	                }
	            },
	            _completeFunc: function () {
	                var self = this;
	                var active = $(self._funcsPopup).find('.gcsj-ac-row-active .gcsj-func-ac-row-name');
	                var funcName = active.text();
	                var isFunc = active.attr('isFunc') === 'true';
	                if (!funcName) {
	                    return;
	                }
	                var caretPosition = self.caret(), tokens = self._tokens, tokenCount = (tokens && tokens.length);
	                var tokenTextIndex = 0, tokenTextLength = 0, tokenIndex = 0, token = keyword_null;
	                while (tokenIndex < tokenCount) {
	                    token = tokens[tokenIndex];
	                    tokenTextLength = token.text.length;
	                    if (tokenTextIndex + tokenTextLength >= caretPosition) {
	                        break;
	                    }
	                    tokenIndex++;
	                    tokenTextIndex += tokenTextLength;
	                }
	               
	                var offset = caretPosition - tokenTextIndex;
	                var curTokenText = token.text;
	                var begin = 0, end = 0;
	                if (StringHelper._contains(curTokenText, '[')) {
	                    begin = curTokenText.lastIndexOf('[', offset - 1);
	                    if (begin === -1) {
	                        begin = curTokenText.indexOf('[');
	                        if (begin === -1) {
	                            token.text = funcName;
	                        } else {
	                            token.text = funcName + curTokenText.substr(begin);
	                        }
	                        begin = 0;
	                    } else {
	                        begin++;
	                        if (curTokenText.charAt(begin) === '@') {
	                            begin = begin + 1;
	                        }
	                        end = curTokenText.indexOf(']', offset);
	                        if (end === -1) {
	                            end = curTokenText.length;
	                        }
	                        token.text = curTokenText.substring(0, begin) + funcName + curTokenText.substr(end);
	                    }
	                } else {
	                    token.text = funcName;
	                }
	                if (isFunc) {
	                    token.type = 2 ;
	                } else {
	                    token.type = 11 ;
	                }
	               
	               
	                var nextTokenIndex = tokenIndex + 1, nextToken = tokens[nextTokenIndex];
	                if (isFunc && (!nextToken || nextToken.type !== 5 )) {
	                    tokens.splice(nextTokenIndex, 0, {text: '(', type: 5 });
	                }
	                self._closeFuncs();
	               
	                self._host.focus();
	                self._updateHostValue();
	                self.caret(tokenTextIndex + funcName.length + begin + (isFunc ? 1 : 0));
	                self._openFuncHelp();
	               
	                self._tokens = self._parse(self.text());
	                self._trigger(EVENT_TEXTCHANGED, {});
	            },
	           
	           
	            _openFuncHelp: function () {
	                var self = this;
	                if (self._isFuncsShown) {
	                    self._closeFuncs();
	                }
	                var activeFuncInfo = self._getActiveFuncInfo();
	                if (activeFuncInfo === keyword_null || activeFuncInfo.isFunc !== true) {
	                    self._closeFuncHelp();
	                    return;
	                }
	                var listSeparator = self._listSeparator();
	                var show = (self._showHelp && self._isFormula(self.text()) && activeFuncInfo && !self._isAppending && !self._isImeInputting);
	                if (show && !self._isSelectMode) {
	                    var func = activeFuncInfo.func;
	                   
	                    var paramters = func.parameters, paramterCount = (paramters && paramters.length),
	                        activeParamterIndex = Math_min(paramterCount - 1, activeFuncInfo.activeParamterIndex), paramter;
	                    var helpParamters = '';
	                    for (var i = 0; i < paramterCount; i++) {
	                        paramter = paramters[i];
	                        var p = paramter.name;
	                        if (paramter.repeatable) {
	                            p += listSeparator + '...';
	                        }
	                        if (paramter.optional) {
	                            p = '[' + p + ']';
	                        }
	                        var paramterSeparator = (i === paramterCount - 1 ? '' : listSeparator + ' ');
	                        if (i === activeParamterIndex) {
	                            p = '<span class=\'gcsj-func-help-paramter gcsj-func-help-paramter-active\'>' + p + '</span>' + paramterSeparator;
	                        } else {
	                            p = '<span class=\'gcsj-func-help-paramter\'>' + p + '</span>' + paramterSeparator;
	                        }
	                        helpParamters += p;
	                    }
	                   
	                    var helpTitle = '<div class=\'gcsj-func-help-title\'><div class=\'gcsj-func-help-formula\'><span class=\'gcsj-func-help-formula-name\'>' +
	                        func.name + '</span><span class=\'gcsj-func-help-paramter-paren\'>(</span>' + helpParamters +
	                        '<span class=\'gcsj-func-help-paramter-paren\'>)</span></div></div>';
	                   
	                    var helpSummary = '<div class=\'gcsj-func-help-section\'><div class=\'gcsj-func-help-section-title\'>' +
	                        SR().Fbx_Summary + '</div><div class=\'gcsj-func-help-section-content\'>' +
	                        (func.description || '') + '</div></div>';
	                    var helpContent = '<div class=\'gcsj-func-help-section-content\'>' + helpSummary + '</div>';
	                    var helpBody = '<div class=\'gcsj-func-help-body\'>' + helpContent + '</div>';
	                   
	                    var popupContent = helpTitle + helpBody;
	                   
	                    $(self._funcHelpPopup).html(popupContent).show();
	                    self._isFuncHelpShown = true;
	                    self._position();
	                } else {
	                    self._closeFuncHelp();
	                }
	            },
	            _closeFuncHelp: function () {
	                $(this._funcHelpPopup).hide();
	                this._isFuncHelpShown = false;
	            },
	           
	            close: function () {
	                this._closeFuncs();
	                this._closeFuncHelp();
	            },
	            _isReservedKey: function (event, context) {
	                if (this._isAppending) {
	                    return false;
	                }
	                var modifyKey = event.ctrlKey || event.shiftKey || event.altKey || event.metaKey, keyCode = event.keyCode;
	                var ctrlKey = event.ctrlKey, altKey = event.altKey, metaKey = event.metaKey;
	                var src = event.srcElement || event.target;
	                if (src && context && context.isEditing && src.getAttribute('gcUIElement') === 'gcAttachedFormulaTextBox') {
	                    return (keyCode === 67  && (ctrlKey || metaKey) && !altKey) || (keyCode === 88  && (ctrlKey || metaKey) && !altKey);
	                }
	               
	                return (this._isFuncsShown && !modifyKey && (keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.tab));
	
	            },
	            _position: function () {
	                var self = this;
	                var popup = keyword_null;
	                if (self._isFuncsShown) {
	                    popup = self._funcsPopup;
	                } else if (self._isFuncHelpShown) {
	                    popup = self._funcHelpPopup;
	                }
	                if (!popup) {
	                    return;
	                }
	                var $host = $(self._host), $popup = $(popup);
	                var ftbAcrossSheet = FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance;
	                if (ftbAcrossSheet && ftbAcrossSheet._sheet) {
	                    var rect = ftbAcrossSheet._sheet.getCellRect(ftbAcrossSheet._rowIndex, ftbAcrossSheet._columnIndex);
	                    var canvasOffset = ftbAcrossSheet._canvasOffset;
	                    $popup.css('top', rect.y + rect.height + canvasOffset.top).css('left', rect.x + canvasOffset.left);
	                    return;
	                }
	               
	                var $hostContainer = $host.parent(), hostOuterHeight = $host.outerHeight();
	                if (self._isGCEditingInputElement(self._host)) {
	                    $hostContainer = $hostContainer.parent();
	                    hostOuterHeight = $hostContainer.outerHeight();
	                }
	                var top = $hostContainer.css('top');
	                var topNumber = parseFloat(top);
	                if (!isNaN(topNumber)) {
	                    top = topNumber;
	                }
	                var left = $hostContainer.css('left');
	               
	                if (top === 'auto') {
	                    top = $host.offset().top;
	                    left = $host.offset().left;
	                }
	               
	                var inputBottom = top + hostOuterHeight;
	               
	                var totalHeight = $(DOCUMENT.body).outerHeight();
	                var popupHeight = $popup.outerHeight();
	                var bottomIfDown = inputBottom + popupHeight;
	                if (bottomIfDown > totalHeight) {
	                   
	                    var topIfUp = top - popupHeight;
	                    if (topIfUp >= 0) {
	                        inputBottom = topIfUp;
	                    }
	                }
	                $popup.css('top', inputBottom).css('left', left);
	            },
	            focus: function () {
	                $(this._host).focus();
	            },
	           
	            _colorText: function (tokens) {
	                var self = this;
	                var htmlContent = '', tokensText = '';
	                var tokenCount = (tokens && tokens.length), rangeIndex = 0, token;
	                for (var i = 0; i < tokenCount; i++) {
	                    token = tokens[i];
	                    var style = '';
	                    if (token.type === 11 ) {
	                        style = ' style=\'color: ' + self._getRangeColor(rangeIndex++) + '\'';
	                    }
	                   
	                   
	                   
	                   
	                    self._helpDiv.innerText = token.text;
	                    htmlContent += '<span' + style + ' class=\'gcsj-func-color-text\'>' +
	                        self._helpDiv.innerHTML + '</span>';
	                    tokensText += token.text;
	                }
	               
	                if (!tokensText && !self.text()) {
	                    return;
	                }
	                var host = self._host;
	                if (htmlContent) {
	                    host.innerHTML = '<span class=\'gcsj-func-color-content\'>' + htmlContent + '</span>';
	                } else {
	                    while (host.firstChild) {
	                        host.removeChild(host.firstChild);
	                    }
	                }
	            },
	            _getColorNode: function (element, position) {
	                var $nodes = $(element).find('.gcsj-func-color-content .gcsj-func-color-text'), nodeCount = $nodes.length;
	                position = Math_max(0, position);
	                var node, text;
	                for (var i = 0; i < nodeCount; i++) {
	                    node = $nodes[i];
	                    text = node.innerText;
	                    position -= text.length;
	                    if (position <= 0) {
	                        return {node: node, offset: text.length + position};
	                    }
	                }
	                if (text) {
	                    return {node: node, offset: text.length};
	                }
	                return keyword_null;
	            },
	            _updateUndoStack: function (isEditingWrap) {
	                var self = this, host = self._host;
	                var editable = self._isEditableDIVElement(host);
	                var editorValue = self.text();
	                if (editable && editorValue) {
	                   
	                   
	                   
	                    editorValue = isEditingWrap ? editorValue.substr(0, editorValue.length - 2) : editorValue;
	                    self._undoStack.push(editorValue);
	                }
	            }
	        };
	       
	        return FormulaTextBox;
	    })();
	    FormulaTextBoxNS.FormulaTextBox = FormulaTextBox;
	
	   
	
	
	    module.exports = FormulaTextBoxNS;
	
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

	(function () {
	    'use strict';
	
	    var Sheets = __webpack_require__(2);
	    var CalcNS = __webpack_require__(3);
	    var SheetsCalcNS = Sheets.CalcEngine;
	    var FormulaTextBoxNS = __webpack_require__(1);
	    var createRange = Sheets._createRange;
	    var $ = Sheets.GC$;
	    var $_extend = $.extend;
	    var keyword_null = null, keyword_undefined = void 0, Math_max = Math.max, Math_min = Math.min;
	    var stringToRange = FormulaTextBoxNS._stringToRange;
	    var rangeToString = FormulaTextBoxNS._rangeToString;
	    
	    
	    $_extend(Sheets._SheetEventHandler.prototype, {
	       
	       
	        _startFormulaRangeAppending: function (target) {
	            var self = this;
	            var sheet = self._sheet, fbx = sheet._formulaTextBox;
	            if (!fbx) {
	                return;
	            }
	            self._updateFormulaTextboxUndoStack();
	            var frozenRowCount = sheet.frozenRowCount();
	            var frozenColCount = sheet.frozenColumnCount();
	            var fbxHasStarted = fbx._isAppending;
	            if (!fbxHasStarted || !self._formulaRangeAppendingInfo) {
	                self._formulaRangeAppendingInfo = {
	                    anchorRow: -1,
	                    anchorCol: -1,
	                    leadingRow: -1,
	                    leadingCol: -1
	                };
	            }
	            var rowCount = sheet.getRowCount(), colCount = sheet.getColumnCount();
	            var hitTestType = target.hitTestType, hitRow = target.row,
	                hitCol = target.col, shiftKey = self.shift, ctrlKey = self.ctrl;
	            var rangeAppendingInfo = self._formulaRangeAppendingInfo,
	                oldAnchorRow = rangeAppendingInfo.anchorRow,
	                oldAnchorCol = rangeAppendingInfo.anchorCol,
	                anchorRow = -1, anchorCol = -1, range;
	            if (hitTestType === 0 ) {
	               
	                anchorRow = frozenRowCount ? sheet._getFirstVisualRow() : sheet._scrollTopRow;
	                anchorCol = frozenColCount ? sheet._getFirstVisualColumn() : sheet._scrollLeftCol;
	                range = createRange(-1, -1, -1, -1);
	    
	                fbx._appendRange(rangeToString(sheet, range), shiftKey, !ctrlKey);
	                self._isWorking = true;
	            } else if (hitTestType === 1 ) {
	               
	                anchorRow = frozenRowCount ? sheet._getFirstVisualRow() : sheet._scrollTopRow;
	                anchorCol = hitCol;
	                range = sheet._getExtendedRange(0, hitCol, rowCount - 1, hitCol, true);
	                if (shiftKey && oldAnchorCol >= 0) {
	                    range = sheet._getExtendedRange(0, hitCol, rowCount - 1, oldAnchorCol, true);
	                }
	                range = createRange(-1, range.col, -1, range.colCount);
	                fbx._appendRange(rangeToString(sheet, range), shiftKey, !ctrlKey);
	                self._isWorking = true;
	            } else if (hitTestType === 2 ) {
	               
	                anchorRow = hitRow;
	                anchorCol = frozenColCount ? sheet._getFirstVisualColumn() : sheet._scrollLeftCol;
	                range = sheet._getExtendedRange(hitRow, 0, hitRow, colCount - 1, true);
	                if (shiftKey && oldAnchorRow >= 0) {
	                    range = sheet._getExtendedRange(hitRow, 0, oldAnchorRow, colCount - 1, true);
	                }
	                range = createRange(range.row, -1, range.rowCount, -1);
	                fbx._appendRange(rangeToString(sheet, range), shiftKey, !ctrlKey);
	                self._isWorking = true;
	            } else if (hitTestType === 3 ) {
	               
	                anchorRow = hitRow;
	                anchorCol = hitCol;
	               
	                if (hitRow !== keyword_undefined && hitCol !== keyword_undefined) {
	                    range = sheet._getExtendedRange(hitRow, hitCol, hitRow, hitCol, true);
	                    range = createRange(range.row, range.col, 1, 1);
	                    if (shiftKey && oldAnchorRow >= 0 && oldAnchorCol >= 0) {
	                        range = sheet._getExtendedRange(hitRow, hitCol, oldAnchorRow, oldAnchorCol, true);
	                    }
	                    fbx._appendRange(rangeToString(sheet, range), shiftKey, !ctrlKey);
	                }
	                self._isWorking = true;
	            }
	           
	            self._isFormulaRangeAppending = self._isWorking;
	            if (!shiftKey || !fbxHasStarted) {
	                rangeAppendingInfo.anchorRow = anchorRow;
	                rangeAppendingInfo.anchorCol = anchorCol;
	                rangeAppendingInfo.leadingRow = anchorRow;
	                rangeAppendingInfo.leadingCol = anchorCol;
	            }
	            self._startHitInfo = {
	                _scrollRowViewportIndex: target.rowViewportIndex,
	                _scrollColViewportIndex: target.colViewportIndex,
	                _hitTestType: target.hitTestType
	            };
	            self._startScroll();
	        },
	        _clearFormulaTextbox: function (sheet) {
	            var crossSheet = false;
	            var ftbInfo = FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance;
	            if (ftbInfo && ftbInfo._dom) {
	               
	                var orginalSheet = ftbInfo._sheet;
	                var formulaTextBox = sheet._formulaTextBox;
	                if (formulaTextBox) {
	                    orginalSheet.setFormula(ftbInfo._rowIndex, ftbInfo._columnIndex, formulaTextBox.text());
	                }
	                if (orginalSheet !== sheet) {
	                    Sheets.Commands._FormulatextboxCommands._changeSheetForFormulaTextboxAcrossSheet(orginalSheet);
	                    if (!orginalSheet.endEdit()) {
	                        return;
	                    }
	                    crossSheet = true;
	                } else {
	                    if (formulaTextBox) {
	                        formulaTextBox.destroy();
	                        sheet._formulaTextBox = keyword_null;
	                    }
	                    ftbInfo._clear();
	                }
	            }
	            return crossSheet;
	        },
	        _continueFormulaRangeAppending: function () {
	            var self = this;
	            var hi = self._startHitInfo;
	            if (!hi || !self._isWorking) {
	                return;
	            }
	            var hitTestType = hi._hitTestType;
	            if (hitTestType === 3 ) {
	                self._continueFormulaRangeCellAppending();
	            } else if (hitTestType === 2 ) {
	                self._continueFormulaRangeRowAppending();
	            } else if (hitTestType === 1 ) {
	                self._continueFormulaRangeColumnAppending();
	            }
	        },
	        _continueFormulaRangeCellAppending: function () {
	            var self = this;
	            var rangeAppendingInfo = self._formulaRangeAppendingInfo,
	                anchorRow = rangeAppendingInfo.anchorRow,
	                anchorCol = rangeAppendingInfo.anchorCol,
	                hitRow = self._getHitRowIndex(), hitCol = self._getHitColumnIndex();
	            if (anchorRow >= 0 && anchorCol >= 0 && hitRow >= 0 && hitCol >= 0) {
	                var sheet = self._sheet;
	                var range = sheet._getExtendedRange(hitRow, hitCol, anchorRow, anchorCol, true);
	                var rangeString = rangeToString(sheet, range);
	                if (rangeString) {
	                    var fbx = sheet._formulaTextBox;
	                    fbx._appendRange(rangeString, true, false);
	                }
	            }
	            self._continueScroll();
	        },
	        _continueFormulaRangeRowAppending: function () {
	            var self = this;
	            var anchorRow = self._formulaRangeAppendingInfo.anchorRow, hitRow = self._getHitRowIndex();
	            if (anchorRow >= 0 && hitRow >= 0) {
	                var sheet = self._sheet;
	                var range = sheet._getExtendedRange(hitRow, 0, anchorRow, sheet.getColumnCount() - 1, true);
	                range = createRange(range.row, -1, range.rowCount, -1);
	                var rangeString = rangeToString(sheet, range);
	                if (rangeString) {
	                    var fbx = sheet._formulaTextBox;
	                    fbx._appendRange(rangeString, true, false);
	                }
	            }
	            self._continueScroll();
	        },
	        _continueFormulaRangeColumnAppending: function () {
	            var self = this;
	            var anchorCol = self._formulaRangeAppendingInfo.anchorCol, hitCol = self._getHitColumnIndex();
	            if (anchorCol >= 0 && hitCol >= 0) {
	                var sheet = self._sheet;
	                var range = sheet._getExtendedRange(0, hitCol, sheet.getRowCount() - 1, anchorCol, true);
	                range = createRange(-1, range.col, -1, range.colCount);
	                var rangeString = rangeToString(sheet, range);
	                if (rangeString) {
	                    var fbx = sheet._formulaTextBox;
	                    fbx._appendRange(rangeString, true, false);
	                }
	            }
	            self._continueScroll();
	        },
	        _stopFormulaRangeAppending: function () {
	            var self = this;
	            self._stopScroll();
	            self._startHitInfo = keyword_null;
	            self._isWorking = false;
	            self._isFormulaRangeAppending = false;
	        },
	       
	       
	        _startFormulaRangeMoving: function (target) {
	            var self = this;
	            var sheet = self._sheet, fbx = self._getActualFormulaTextBox(), hi = target.formulaRangeHitInfo;
	            if (!hi || !hi.inBorder || !fbx) {
	                return;
	            }
	            if (fbx._isAppending) {
	                fbx._stopAppending();
	            }
	            fbx.close();
	            var paramRange = hi.paramRange, rangeString = (paramRange && paramRange.text);
	            if (!rangeString) {
	                return;
	            }
	            var range = stringToRange(sheet, rangeString);
	            if (!range) {
	                return;
	            }
	            self._updateFormulaTextboxUndoStack();
	            var rg = sheet._getActualRange(range), hitRow = target.row, hitCol = target.col;
	            if (hitRow < rg.row) {
	                hitRow = rg.row;
	            }
	            if (hitRow >= rg.row + rg.rowCount) {
	                hitRow = rg.row + rg.rowCount - 1;
	            }
	            if (hitCol < rg.col) {
	                hitCol = rg.col;
	            }
	            if (hitCol >= rg.col + rg.colCount) {
	                hitCol = rg.col + rg.colCount - 1;
	            }
	            var rowOffset = hitRow - rg.row;
	            var colOffset = hitCol - rg.col;
	            self._isWorking = true;
	            self._isFormulaRangeMoving = true;
	            self._formulaRangeMovingInfo = {
	                paramRange: paramRange,
	                fromRange: range,
	                rowOffset: rowOffset,
	                colOffset: colOffset
	            };
	            self._startHitInfo = {
	                _scrollRowViewportIndex: target.rowViewportIndex,
	                _scrollColViewportIndex: target.colViewportIndex,
	                _hitTestType: target.hitTestType
	            };
	            self._startScroll();
	        },
	        _continueFormulaRangeMoving: function () {
	            var self = this;
	            if (!self._isWorking || !self._isFormulaRangeMoving) {
	                return;
	            }
	            var hitRow = self._getHitRowIndex();
	            var hitCol = self._getHitColumnIndex();
	            if (hitRow >= 0 && hitCol >= 0) {
	                var movingInfo = self._formulaRangeMovingInfo, range = movingInfo.fromRange,
	                    rowOffset = movingInfo.rowOffset, colOffset = movingInfo.colOffset,
	                    oldToRow = movingInfo.toRow, oldToCol = movingInfo.toCol;
	                var toRow = hitRow, toCol = hitCol;
	                if (toRow !== oldToRow || toCol !== oldToCol) {
	                    movingInfo.toRow = toRow;
	                    movingInfo.toCol = toCol;
	                    var sheet = self._sheet, sheetRowCount = sheet.getRowCount(),
	                        sheetColCount = sheet.getColumnCount(),
	                        fromRow = range.row, fromCol = range.col,
	                        fromRowCount = range.rowCount, fromColCount = range.colCount;
	                    var newRow = fromRow < 0 ? -1 : Math_max(0, Math_min(sheetRowCount - fromRowCount, hitRow - rowOffset));
	                    var newCol = fromCol < 0 ? -1 : Math_max(0, Math_min(sheetColCount - fromColCount, hitCol - colOffset));
	                    var rangeString = rangeToString(sheet, createRange(newRow, newCol, fromRowCount, fromColCount));
	                    if (rangeString) {
	                        var fbx = self._getActualFormulaTextBox();
	                        fbx._repalceRange(movingInfo.paramRange.index, rangeString, true);
	                    }
	                }
	            }
	            self._continueScroll();
	        },
	        _stopFormulaRangeMoving: function () {
	            var self = this;
	            self._stopScroll();
	            self._isWorking = false;
	            self._isFormulaRangeMoving = false;
	            self._formulaRangeMovingInfo = keyword_null;
	
	            var formulaTextBox = self._getActualFormulaTextBox();
	            if (formulaTextBox.onRangeMoved) {
	                formulaTextBox.onRangeMoved();
	            }
	        },
	       
	       
	        _startFormulaRangeResizing: function (target) {
	            var self = this;
	            var sheet = self._sheet, fbx = self._getActualFormulaTextBox(), hi = target.formulaRangeHitInfo;
	            if (!hi || !fbx) {
	                return;
	            }
	            if (fbx._isAppending) {
	                fbx._stopAppending();
	            }
	            var paramRange = hi.paramRange, rangeString = (paramRange && paramRange.text);
	            if (!paramRange || !rangeString) {
	                return;
	            }
	            var range = stringToRange(sheet, rangeString);
	            if (!range) {
	                return;
	            }
	            self._updateFormulaTextboxUndoStack();
	            var row = range.row, endRow = range.row < 0 ? -1 : range.row + range.rowCount - 1,
	                col = range.col, endCol = range.col < 0 ? -1 : range.col + range.colCount - 1;
	            var anchorRow, anchorCol, toRow, toCol;
	            if (hi.inTopLeft) {
	                anchorRow = endRow;
	                anchorCol = endCol;
	                toRow = row;
	                toCol = col;
	            } else if (hi.inTopRight) {
	                anchorRow = endRow;
	                anchorCol = col;
	                toRow = row;
	                toCol = endCol;
	            } else if (hi.inBottomLeft) {
	                anchorRow = row;
	                anchorCol = endCol;
	                toRow = endRow;
	                toCol = col;
	            } else if (hi.inBottomRight) {
	                anchorRow = row;
	                anchorCol = col;
	                toRow = endRow;
	                toCol = endCol;
	            } else {
	                return;
	            }
	            self._isWorking = true;
	            self._isFormulaRangeResizing = true;
	            self._formulaRangeResizingInfo = {
	                paramRange: paramRange,
	                anchorRow: anchorRow,
	                anchorCol: anchorCol,
	                toRow: toRow,
	                toCol: toCol
	            };
	            self._startHitInfo = {
	                _scrollRowViewportIndex: target.rowViewportIndex,
	                _scrollColViewportIndex: target.colViewportIndex,
	                _hitTestType: target.hitTestType
	            };
	            self._startScroll();
	        },
	        _dealMouseDownInFormulatextbox: function (sheet, target) {
	            var fbx = sheet._formulaTextBox;
	            if (fbx && fbx._canAppendRange()) {
	                this._startFormulaRangeAppending(target);
	                return true;
	            } else if (this._clearFormulaTextbox(sheet)) {
	                return true;
	            }
	            return false;
	        },
	        _continueFormulaRangeResizing: function () {
	            var self = this;
	            if (!self._isWorking || !self._isFormulaRangeResizing) {
	                return;
	            }
	            var hitRow = self._getHitRowIndex();
	            var hitCol = self._getHitColumnIndex();
	            if (hitRow >= 0 && hitCol >= 0) {
	                var resizingInfo = self._formulaRangeResizingInfo, anchorRow = resizingInfo.anchorRow, anchorCol = resizingInfo.anchorCol, oldToRow = resizingInfo.toRow, oldToCol = resizingInfo.toCol;
	                var toRow = hitRow, toCol = hitCol;
	                if (toRow !== oldToRow || toCol !== oldToCol) {
	                    resizingInfo.toRow = toRow;
	                    resizingInfo.toCol = toCol;
	                    var sheet = self._sheet, sheetRowCount = sheet.getRowCount(), sheetColCount = sheet.getColumnCount();
	                    var fromRow = anchorRow < 0 ? sheetRowCount - 1 : anchorRow, fromCol = anchorCol < 0 ? sheetColCount - 1 : anchorCol;
	                    var row = Math_min(fromRow, toRow), col = Math_min(fromCol, toCol), rowCount = Math_max(fromRow, toRow) - row + 1, colCount = Math_max(fromCol, toCol) - col + 1;
	                    if (row === 0 && rowCount === sheetRowCount) {
	                        row = -1;
	                        rowCount = -1;
	                    }
	                    if (col === 0 && colCount === sheetColCount) {
	                        col = -1;
	                        colCount = -1;
	                    }
	                    var rangeString = rangeToString(sheet, createRange(row, col, rowCount, colCount));
	                    if (rangeString) {
	                        var fbx = self._getActualFormulaTextBox();
	                        fbx._repalceRange(resizingInfo.paramRange.index, rangeString, true);
	                    }
	                }
	            }
	            self._continueScroll();
	        },
	        _stopFormulaRangeResizing: function () {
	            var self = this;
	            self._stopScroll();
	            self._isWorking = false;
	            self._isFormulaRangeResizing = false;
	            self._formulaRangeResizingInfo = keyword_null;
	            var formulaTextBox = self._getActualFormulaTextBox();
	            if (formulaTextBox._isSelectMode) {
	               
	               
	                formulaTextBox._appendingStart = 1;
	                var lastRangeTextIndex = formulaTextBox.text().lastIndexOf(',', formulaTextBox.caret());
	                if (lastRangeTextIndex !== -1) {
	                    formulaTextBox._appendingStart = lastRangeTextIndex + 1;
	                }
	            }
	
	            if (formulaTextBox.onRangeResized) {
	                formulaTextBox.onRangeResized();
	            }
	        },
	       
	        _getFormulaRangeHitInfo: function (target, x, y) {
	            var sheet = this._sheet, fbx = this._getActualFormulaTextBox(), paramRanges = (fbx && fbx._getRanges());
	            if (!paramRanges || paramRanges.length === 0 || !fbx._allowMoveResize) {
	                return keyword_null;
	            }
	            var rowViewportIndex = target.rowViewportIndex, colViewportIndex = target.colViewportIndex;
	            if (this._inGrayArea(rowViewportIndex, colViewportIndex, x, y)) {
	                return keyword_null;
	            }
	            var paramRange, cr, rect;
	            for (var i = paramRanges.length - 1; i >= 0; i--) {
	                paramRange = paramRanges[i];
	                if (paramRange.allowDrag === false) {
	                    continue;
	                }
	                var ftbInfo = FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance;
	                if (ftbInfo && ftbInfo._text) {
	                    continue;
	                }
	                cr = stringToRange(sheet, paramRange.text);
	                if (!cr) {
	                    continue;
	                }
	                rect = sheet.getRangeRect(rowViewportIndex, colViewportIndex, cr);
	                var size = 5;
	                var x1 = rect.x - 2, x2 = rect.x + rect.width + 1 - size, y1 = rect.y - 2, y2 = rect.y + rect.height + 1 - size;
	               
	                if (x1 + size <= x && x < x2) { 
	                    if ((y1 + 1 <= y && y <= y1 + 3) || (y2 + 1 <= y && y <= y2 + 3)) {
	                        return { paramRange: paramRange, inBorder: true };
	                    }
	                }
	                if (y1 + size <= y && y < y2) { 
	                    if ((x1 + 1 <= x && x <= x1 + 3) || (x2 + 1 <= x && x <= x2 + 3)) {
	                        return { paramRange: paramRange, inBorder: true };
	                    }
	                }
	               
	                if (x2 <= x && x < x2 + size && y2 <= y && y < y2 + size) {
	                    return { paramRange: paramRange, inBottomRight: true };
	                }
	                if (x1 <= x && x < x1 + size && y2 <= y && y < y2 + size) {
	                    return { paramRange: paramRange, inBottomLeft: true };
	                }
	                if (x2 <= x && x < x2 + size && y1 <= y && y < y1 + size) {
	                    return { paramRange: paramRange, inTopRight: true };
	                }
	                if (x1 <= x && x < x1 + size && y1 <= y && y < y1 + size) {
	                    return { paramRange: paramRange, inTopLeft: true };
	                }
	            }
	            return keyword_null;
	        },
	        _getActualFormulaTextBox: function () {
	            var sheet = this._sheet;
	            return sheet._formulaTextBox || sheet._formulaTextBoxForChart;
	        },
	        _changeFormulaReference: function () {
	            var self = this, sheet = self._sheet, fbx = sheet._formulaTextBox;
	            if (!fbx) {
	                return;
	            }
	           
	            var baseRow = sheet._activeRowIndex, baseCol = sheet._activeColIndex, parent = sheet.parent, useR1C1 = (parent && parent.options.referenceStyle === 1 );
	            var context = new SheetsCalcNS.SheetParserContext(sheet, useR1C1, CalcNS._createCellIdentity(baseRow, baseCol));
	            var parser = new CalcNS.Parser();
	            var range, expression;
	            if (fbx._isAppending) {
	                var ranges = fbx._getAppendingRanges();
	                for (var i = 0; i < ranges.length; i++) {
	                    range = ranges[i];
	                    try {
	                        expression = parser.parse(context, range.text);
	                    } catch (ex) {
	                        expression = keyword_null;
	                    }
	                   
	                    if (!expression) {
	                        continue;
	                    }
	                    if (expression.type === 1 ) {
	                        self._changeRangeExpressionReference(expression, baseRow, baseCol, true, true);
	                        fbx._repalceRange(range.index, parser.unparse(context, expression));
	                    }
	                }
	            } else {
	                range = fbx._getActiveRange();
	                if (!range) {
	                    return;
	                }
	                try {
	                    expression = parser.parse(context, range.text);
	                } catch (ex) {
	                    expression = keyword_null;
	                }
	               
	                if (!expression) {
	                    return;
	                }
	                if (expression.type === 1  && !expression._isCell()) {
	                    var separatorPosition = range.textOffset + range.text.lastIndexOf(':');
	                    var leftActive = (fbx.caret() <= separatorPosition);
	                    if (leftActive) {
	                        self._changeRangeExpressionReference(expression, baseRow, baseCol, true, false);
	                        var newRangeText = parser.unparse(context, expression);
	                        fbx._repalceRange(range.index, newRangeText);
	                        fbx.caret(range.textOffset + newRangeText.lastIndexOf(':'));
	                    } else {
	                        self._changeRangeExpressionReference(expression, baseRow, baseCol, false, true);
	                        fbx._repalceRange(range.index, parser.unparse(context, expression));
	                    }
	                } else if (expression.type === 1 ) {
	                    self._changeCellExpressionReference(expression, baseRow, baseCol);
	                    fbx._repalceRange(range.index, parser.unparse(context, expression));
	                }
	            }
	        },
	        _changeRangeExpressionReference: function (expression, baseRow, baseCol, changeLeft, changeRight) {
	            var startRowRelative = expression.rowRelative, startColumnRelative = expression.columnRelative;
	            if (changeLeft) {
	                if (startRowRelative && startColumnRelative) {
	                    expression.rowRelative = false;
	                    expression.columnRelative = false;
	                    expression.row += baseRow;
	                    expression.column += baseCol;
	                } else if (startRowRelative) { 
	                    expression.columnRelative = true;
	                    expression.column -= baseCol;
	                } else if (startColumnRelative) {
	                    expression.rowRelative = true;
	                    expression.columnRelative = false;
	                    expression.row -= baseRow;
	                    expression.column += baseCol;
	                } else { 
	                    expression.columnRelative = true;
	                    expression.column -= baseCol;
	                }
	            }
	            var endRowRelative = expression.endRowRelative, endColumnRelative = expression.endColumnRelative;
	            if (changeRight) {
	                if (endRowRelative && endColumnRelative) {
	                    expression.endRowRelative = false;
	                    expression.endColumnRelative = false;
	                    expression.endRow += baseRow;
	                    expression.endColumn += baseCol;
	                } else if (endRowRelative) { 
	                    expression.endColumnRelative = true;
	                    expression.endColumn -= baseCol;
	                } else if (endColumnRelative) {
	                    expression.endRowRelative = true;
	                    expression.endColumnRelative = false;
	                    expression.endRow -= baseRow;
	                    expression.endColumn += baseCol;
	                } else { 
	                    expression.endColumnRelative = true;
	                    expression.endColumn -= baseCol;
	                }
	            }
	        },
	        _changeCellExpressionReference: function (expression, baseRow, baseCol) {
	            var rowRelative = expression.rowRelative, columnRelative = expression.columnRelative;
	            if (rowRelative && columnRelative) {
	                expression.rowRelative = false;
	                expression.columnRelative = false;
	                expression.row += baseRow;
	                expression.column += baseCol;
	            } else if (rowRelative) { 
	                expression.columnRelative = true;
	                expression.column -= baseCol;
	            } else if (columnRelative) {
	                expression.rowRelative = true;
	                expression.columnRelative = false;
	                expression.row -= baseRow;
	                expression.column += baseCol;
	            } else { 
	                expression.columnRelative = true;
	                expression.column -= baseCol;
	            }
	        },
	        _updateFormulaTextboxUndoStack: function () {
	            var sheet = this._sheet, fbx = sheet._formulaTextBox;
	            if (fbx) {
	                var host = fbx._host;
	                if (host && fbx._isEditableDIVElement(host)) {
	                    fbx._updateUndoStack();
	                }
	            }
	        }
	
	       
	    });
	
	}());

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var Sheets = __webpack_require__(2);
	    var FormulaTextBoxNS = __webpack_require__(1);
	    var keyword_undefined = void 0;
	    var Commands = Sheets.Commands;
	    var createRange = Sheets._createRange;
	    var rangeToString = FormulaTextBoxNS._rangeToString;
	    var stringToRange = FormulaTextBoxNS._stringToRange;
	    var detachFormulaTextBox = FormulaTextBoxNS._detachFormulaTextBox;
	    var Common = __webpack_require__(4);
	    var isNullOrUndefined = Common._Types._isNullOrUndefined;
	
	    function getKeyboardAppendingInfo(sheet) {
	        var appendingInfo;
	        var fbx = sheet._formulaTextBox, eventHandler = sheet._eventHandler;
	        if (fbx._isAppending) {
	            appendingInfo = eventHandler._formulaRangeAppendingInfo;
	        } else {
	            appendingInfo = eventHandler._formulaRangeAppendingInfo = {
	                anchorRow: sheet._activeRowIndex,
	                anchorCol: sheet._activeColIndex,
	                leadingRow: sheet._leadingCellRow,
	                leadingCol: sheet._leadingCellCol
	            };
	        }
	        return appendingInfo;
	    }
	
	    function moveFormulaTextBoxCell(sheet, direction, wrap, beginRow, beginCol) {
	        var fbx = sheet._formulaTextBox, parent = sheet.parent, options = parent && parent.options;
	        if (!fbx || !fbx._canAppendRange() || !options || !options.allowUserEditFormula || !options.enableFormulaTextbox) {
	            return;
	        }
	        var appendingInfo = getKeyboardAppendingInfo(sheet);
	        var anchorRow = appendingInfo.anchorRow, anchorCol = appendingInfo.anchorCol,
	            leadingRow = appendingInfo.leadingRow, leadingCol = appendingInfo.leadingCol;
	        if (isNullOrUndefined(beginRow)) {
	            beginRow = anchorRow;
	        }
	        if (isNullOrUndefined(beginCol)) {
	            beginCol = anchorCol;
	        }
	        var eventHandler = sheet._eventHandler;
	        var newAnchorRow, newAnchorCol, newLeadingRow, newLeadingCol;
	        var nextCell;
	        switch (direction) {
	            case 3 
	            :
	                nextCell = sheet._getMoveLeftCell(beginRow, beginCol, wrap, leadingRow);
	                break;
	            case 4 
	            :
	                nextCell = sheet._getMoveRightCell(beginRow, beginCol, wrap, leadingRow);
	                break;
	            case 1 
	            :
	                nextCell = sheet._getMoveUpCell(beginRow, beginCol, wrap, leadingCol);
	                break;
	            case 2 
	            :
	                nextCell = sheet._getMoveDownCell(beginRow, beginCol, wrap, leadingCol);
	                break;
	            case 5 
	            :
	                nextCell = sheet._getMoveFirstCell();
	                break;
	            case 6 
	            :
	                nextCell = sheet._getMoveLastCell();
	                break;
	            default:
	                break;
	        }
	        if (!nextCell) {
	            return;
	        }
	        newAnchorRow = nextCell.row;
	        newAnchorCol = nextCell.col;
	        newLeadingRow = nextCell.leadingCellRow ? nextCell.leadingCellRow : newAnchorRow;
	        newLeadingCol = nextCell.leadingCellCol ? nextCell.leadingCellCol : newAnchorCol;
	        if (!sheet._canMoveCurrentTo(newAnchorRow, newAnchorCol)) {
	            return;
	        }
	        appendingInfo.anchorRow = newAnchorRow;
	        appendingInfo.anchorCol = newAnchorCol;
	        appendingInfo.leadingRow = newLeadingRow;
	        appendingInfo.leadingCol = newLeadingCol;
	        var rangeString = rangeToString(eventHandler._sheet, createRange(newAnchorRow, newAnchorCol, 1, 1));
	        if (rangeString) {
	            fbx._appendRange(rangeString, false, true);
	        }
	        if (newAnchorRow >= 0 && newAnchorCol >= 0) {
	            sheet._scrollByMoveCell(newAnchorRow, newAnchorCol);
	        }
	    }
	
	    function navigateNoWrap(sheet, direction) {
	        if (sheet) {
	            if (sheet._editorStatus === 2 ) {
	                return false;
	            }
	            var fbx = sheet._formulaTextBox;
	            if (fbx && fbx._canAppendRange()) {
	                moveFormulaTextBoxCell(sheet, direction, false);
	                return true;
	            } else if (fbx) {
	                sheet = FormulatextboxActions._handleFormulaTextboxAcrossSheet(sheet); 
	            }
	            sheet._moveActiveCell(direction, false);
	            return true;
	        }
	        return false;
	    }
	
	    function navigateNoWrapFrom(sheet, direction, row, col) {
	        if (sheet) {
	            if (sheet._editorStatus === 2 ) {
	                return false;
	            }
	            var fbx = sheet._formulaTextBox;
	            if (fbx && fbx._canAppendRange()) {
	                moveFormulaTextBoxCell(sheet, direction, false, row, col);
	                return true;
	            } else if (fbx) {
	                sheet = FormulatextboxActions._handleFormulaTextboxAcrossSheet(sheet);
	            }
	            sheet._moveActiveCell(direction, false, row, col);
	            return true;
	        }
	        return false;
	    }
	
	    function changeFormulaTextBoxActiveRange(sheet, key, isCtrl) {
	        var fbx = sheet._formulaTextBox, parent = sheet.parent, options = parent && parent.options;
	        if (!fbx || !fbx._canAppendRange() || !options || !options.allowUserEditFormula || !options.enableFormulaTextbox) {
	            return;
	        }
	        var eventHandler = sheet._eventHandler, appendingInfo = getKeyboardAppendingInfo(sheet), anchorRow = appendingInfo.anchorRow, anchorCol = appendingInfo.anchorCol;
	        var range;
	        if (fbx._isAppending) {
	            var activeParamRange = fbx._getActiveRange();
	            range = stringToRange(sheet, activeParamRange.text);
	        } else {
	            range = createRange(anchorRow, anchorCol, 1, 1);
	        }
	        if (range) {
	            var newRange = sheet._getKeyboardSelectedRange(range, key, isCtrl, anchorRow, anchorCol);
	            var rangeString = rangeToString(eventHandler._sheet, newRange);
	            if (rangeString) {
	                fbx._appendRange(rangeString, true, false);
	            }
	        }
	    }
	
	    function alterSelection(sheet, key, isCtrl) {
	        if (sheet) {
	            if (sheet._editorStatus === 2 ) {
	                return false;
	            }
	            var fbx = sheet._formulaTextBox;
	            if (fbx && fbx._canAppendRange()) {
	                changeFormulaTextBoxActiveRange(sheet, key, isCtrl);
	                return true;
	            } else if (fbx) {
	                sheet = FormulatextboxActions._handleFormulaTextboxAcrossSheet(sheet);
	            }
	            if (!sheet.endEdit()) {
	                return false;
	            }
	            sheet._changeActiveSelectedRange(key, isCtrl);
	            return true;
	        }
	        return false;
	    }
	
	    Commands._navigateNoWrap = navigateNoWrap;
	    Commands._navigateNoWrapFrom = navigateNoWrapFrom;
	    Commands._alterSelection = alterSelection;
	
	    var FormulatextboxActions = (function () {
	        function FormulatextboxActions() {
	        }
	
	       
	       
	       
	       
	        FormulatextboxActions._commitArrayFormula = function (sheet) {
	            return FormulatextboxActions._handleFormulaTextboxAcrossSheet(sheet);
	        };
	
	       
	       
	       
	       
	        FormulatextboxActions._commitInputNavigationDown = function (sheet) {
	            return FormulatextboxActions._handleFormulaTextboxAcrossSheet(sheet);
	        };
	       
	       
	       
	       
	        FormulatextboxActions._commitInputNavigationUp = function (sheet) {
	            return FormulatextboxActions._handleFormulaTextboxAcrossSheet(sheet);
	        };
	        FormulatextboxActions._handleFormulaTextboxAcrossSheet = function (sheet) {
	            var actualSheet = sheet;
	            var ftbAcrossSheet = FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance;
	            if (ftbAcrossSheet && ftbAcrossSheet._text) {
	                actualSheet = ftbAcrossSheet._sheet;
	                FormulatextboxActions._changeSheetForFormulaTextboxAcrossSheet(actualSheet);
	            }
	            return actualSheet;
	        };
	        FormulatextboxActions._changeSheetForFormulaTextboxAcrossSheet = function (sheet, saveValue) {
	            if (saveValue === void 0) {
	                saveValue = true;
	            }
	            var workbookTmp = sheet.parent;
	            var ftbAcrossSheet = FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance;
	            if (ftbAcrossSheet && ftbAcrossSheet._text) {
	                workbookTmp._changeSheetForFormulaAcrossSheet(sheet, saveValue);
	            }
	        };
	       
	       
	       
	       
	        FormulatextboxActions._navigationPageUp = function (sheet, newActiveRow, prevPageTopRow) {
	            var returnValue = false;
	            var fbx = sheet._formulaTextBox;
	            if (fbx && fbx._canAppendRange()) {
	                var appendingInfo = getKeyboardAppendingInfo(sheet);
	                appendingInfo.anchorRow = newActiveRow;
	                appendingInfo.leadingRow = newActiveRow;
	                var rangeString = rangeToString(sheet, createRange(appendingInfo.anchorRow, appendingInfo.anchorCol, 1, 1));
	                if (rangeString) {
	                    fbx._appendRange(rangeString, false, true);
	                }
	               
	                sheet._setTopRow(prevPageTopRow);
	                returnValue = true;
	            } else if (fbx) {
	                sheet = FormulatextboxActions._handleFormulaTextboxAcrossSheet(sheet);
	            }
	            return {sheet: sheet, r: returnValue};
	        };
	       
	       
	       
	       
	        FormulatextboxActions._navigationPageDown = function (sheet, newActiveRow, nextPageTopRow) {
	            var returnValue = false;
	            var fbx = sheet._formulaTextBox;
	            if (fbx && fbx._canAppendRange()) {
	                var appendingInfo = getKeyboardAppendingInfo(sheet);
	                appendingInfo.anchorRow = newActiveRow;
	                appendingInfo.leadingRow = newActiveRow;
	                var rangeString = rangeToString(sheet, createRange(appendingInfo.anchorRow, appendingInfo.anchorCol, 1, 1));
	                if (rangeString) {
	                    fbx._appendRange(rangeString, false, true);
	                }
	               
	                sheet._setTopRow(nextPageTopRow);
	                returnValue = true;
	            } else if (fbx) {
	                sheet = FormulatextboxActions._handleFormulaTextboxAcrossSheet(sheet);
	            }
	            return {sheet: sheet, r: returnValue};
	        };
	       
	       
	       
	       
	        FormulatextboxActions._navigationFirst = function (sheet) {
	            var returnValue = false;
	            var fbx = sheet._formulaTextBox, activeRow = sheet._activeRowIndex, activeCol = sheet._activeColIndex;
	            if (fbx && fbx._canAppendRange()) {
	                if (!fbx._isAppending) {
	                    sheet._eventHandler._formulaRangeAppendingInfo = {
	                        anchorRow: activeRow,
	                        anchorCol: activeCol,
	                        leadingRow: sheet._leadingCellRow,
	                        leadingCol: sheet._leadingCellCol
	                    };
	                }
	                moveFormulaTextBoxCell(sheet, 5 , false, activeRow, activeCol);
	                returnValue = true;
	            } else if (fbx) {
	                sheet = FormulatextboxActions._handleFormulaTextboxAcrossSheet(sheet);
	            }
	            return {sheet: sheet, r: returnValue};
	        };
	       
	       
	       
	       
	        FormulatextboxActions._navigationLast = function (sheet) {
	            var returnValue = false;
	            var fbx = sheet._formulaTextBox, activeRow = sheet._activeRowIndex, activeCol = sheet._activeColIndex;
	            if (fbx && fbx._canAppendRange()) {
	                if (!fbx._isAppending) {
	                    sheet._eventHandler._formulaRangeAppendingInfo = {
	                        anchorRow: activeRow,
	                        anchorCol: activeCol,
	                        leadingRow: sheet._leadingCellRow,
	                        leadingCol: sheet._leadingCellCol
	                    };
	                }
	                moveFormulaTextBoxCell(sheet, 6 , false, activeRow, activeCol);
	                returnValue = true;
	            } else if (fbx) {
	                sheet = FormulatextboxActions._handleFormulaTextboxAcrossSheet(sheet);
	            }
	            return {sheet: sheet, r: returnValue};
	        };
	       
	       
	       
	       
	        FormulatextboxActions._moveToNextCell = function (sheet) {
	            return FormulatextboxActions._handleFormulaTextboxAcrossSheet(sheet);
	        };
	       
	       
	       
	       
	        FormulatextboxActions._moveToPreviousCell = function (sheet) {
	            return FormulatextboxActions._handleFormulaTextboxAcrossSheet(sheet);
	        };
	       
	       
	       
	        FormulatextboxActions._cancelInput = function (sheet) {
	            var ftbAcrossSheet = FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance;
	            if (FormulaTextBoxNS && ftbAcrossSheet && ftbAcrossSheet._text) {
	                sheet = ftbAcrossSheet._sheet;
	                var rowIndex = ftbAcrossSheet._rowIndex;
	                var columnIndex = ftbAcrossSheet._columnIndex;
	                FormulatextboxActions._changeSheetForFormulaTextboxAcrossSheet(sheet, false);
	                detachFormulaTextBox(sheet);
	                sheet._setActiveCellAndSelection(rowIndex, columnIndex, keyword_undefined, keyword_undefined, 1 );
	
	               
	                if (sheet.isEditing()) {
	                    var cacheValue = sheet.getValue(rowIndex, columnIndex, 3 );
	                    if (!sheet._endEditImp(true, undefined, undefined, true)) {
	                        return false;
	                    }
	                    sheet.setValue(rowIndex, columnIndex, cacheValue, 3 , true);
	                    return true;
	                }
	            }
	        };
	        return FormulatextboxActions;
	    })();
	    Sheets.Commands._FormulatextboxCommands = FormulatextboxActions;
	
	}());

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var Sheets = __webpack_require__(2);
	    var $ = Sheets.GC$;
	    var FormulaTextBoxNS = __webpack_require__(1);
	    
	    var keyword_null = null, keyword_undefined = void 0;
	    
	    var FormulatextboxAcrossSheet = (function () {
	        function FormulatextboxAcrossSheet() {
	            var self = this;
	            self._rowIndex = -1;
	            self._columnIndex = -1;
	            self._text = '';
	            self._caret = -1;
	            self._sheet = null;
	            self._isAppending = false;
	            self._appendingIndex = -1;
	            self._dom = null;
	            self._workbook = null;
	            self._canvasOffset = null;
	        }
	    
	        FormulatextboxAcrossSheet.prototype = {
	            constructor: FormulatextboxAcrossSheet,
	            _clear: function () {
	                var self = this;
	                self._removeDom();
	                self._rowIndex = -1;
	                self._columnIndex = -1;
	                self._text = '';
	                self._caret = -1;
	                self._isAppending = false;
	                self._appendingIndex = -1;
	                self._sheet = null;
	                self._workbook = null;
	                self._canvasOffset = null;
	            },
	            _removeDom: function () {
	                var self = this;
	                if (!self._sheet._disposed) {
	                    var cellType = self._sheet.getCellType(self._rowIndex, self._columnIndex);
	                    var context = {
	                        sheet: self._sheet,
	                        row: self._rowIndex,
	                        col: self._columnIndex,
	                        sheetArea: 3 
	                    };
	                    if(self._dom && self._dom.firstChild) {
	                        cellType.deactivateEditor(self._dom.firstChild.firstChild, context);
	                    }
	                }
	                $(self._dom).remove();
	                self._dom = null;
	            },
	            _save: function (sheet) {
	                var self = this;
	                var sheetFormulaTextBox = sheet._formulaTextBox;
	                if (sheetFormulaTextBox) {
	                    self._text = sheetFormulaTextBox.text();
	                    self._rowIndex = sheet.getActiveRowIndex();
	                    self._columnIndex = sheet.getActiveColumnIndex();
	                    self._caret = sheetFormulaTextBox.caret();
	                    self._isAppending = sheetFormulaTextBox._isAppending;
	                    self._appendingIndex = sheetFormulaTextBox._appendingStartIndex();
	                    self._isSelectMode = sheetFormulaTextBox._isSelectMode;
	                    self._selectModeId = sheetFormulaTextBox._selectModeId;
	                    self._isAbsoluteReference = sheetFormulaTextBox._isAbsoluteReference;
	                    self._sheet = sheet;
	                    self._workbook = sheet.parent;
	                    self._canvasOffset = sheet._eventHandler._getCanvasPosition();
	                }
	            },
	            _update: function (sheet) {
	                var self = this;
	                if (sheet._formulaTextBox) {
	                    self._text = sheet._formulaTextBox.text();
	                    self._caret = sheet._formulaTextBox.caret();
	                    self._isAppending = sheet._formulaTextBox._isAppending;
	                    self._appendingIndex = sheet._formulaTextBox._appendingStartIndex();
	                }
	            },
	            _exportInfo: function (sheet) {
	                var self = this;
	                var sheetFormulaTextBox = sheet._formulaTextBox;
	                if (sheetFormulaTextBox) {
	                    sheetFormulaTextBox._isSelectMode = self._isSelectMode;
	                    sheetFormulaTextBox._selectModeId = self._selectModeId;
	                    sheetFormulaTextBox._isAbsoluteReference = self._isAbsoluteReference;
	                    sheetFormulaTextBox.text(self._text);
	                    sheetFormulaTextBox.caret(self._caret);
	                    if (self._isAppending) {
	                        sheetFormulaTextBox._startAppending();
	                        sheetFormulaTextBox._appendingStartIndex(self._appendingIndex);
	                    }
	                }
	            },
	            _handleFormulatextboxBeforeChange: function (eData) {
	                var oldSheet = eData.oldSheet;
	                var self = this;
	                var oldSheetFormulaTextBox = oldSheet._formulaTextBox;
	                if (!oldSheetFormulaTextBox) {
	                    return;
	                }
	                oldSheetFormulaTextBox.close();
	               
	                if ((!self._sheet || self._sheet._disposed) && oldSheetFormulaTextBox._canAppendRange() ||
	                    self._selectModeId !== oldSheetFormulaTextBox._selectModeId) {
	                    self._save(oldSheet);
	                    var cacheValue = oldSheet.getValue(oldSheet._activeRowIndex, oldSheet._activeColIndex, 3 );
	                    oldSheet.suspendEvent();
	                    try {
	                        if (!oldSheet.endEdit(true)) {
	                            return;
	                        }
	                    } finally {
	                        oldSheet.resumeEvent();
	                    }
	                    oldSheet.setValue(oldSheet._activeRowIndex, oldSheet._activeColIndex, cacheValue, 3 , true);
	                    oldSheet._editorStatus = 1 ;
	                    eData.needTriggerSheetChange = false;
	                } else if (self._text) {
	                   
	                    self._update(oldSheet);
	                   
	                    oldSheetFormulaTextBox.destroy();
	                    oldSheet._formulaTextBox = keyword_null;
	                    eData.needTriggerSheetChange = false;
	                }
	            },
	            _handleFormulatextboxAfterChange: function (eData) {
	                var oldSheet = eData.oldSheet, newSheet = eData.newSheet;
	                var self = this;
	                if (newSheet._disposed) {
	                    return;
	                }
	                if (self._dom && self._text === '') {
	                    oldSheet._loadAndSetSheetSelections();
	                    self._clear();
	                }
	               
	                if (self._text && self._sheet === newSheet) {
	                    newSheet._editorStatus = 0 ;
	                    newSheet._setActiveCellAndSelection(self._rowIndex, self._columnIndex, keyword_undefined, keyword_undefined, 0 );
	                    newSheet.suspendEvent();
	                    if (self._isSelectMode) {
	    
	                        var editingElement = FormulaTextBoxNS._createEditorElement(newSheet.parent._host);
	    
	                        FormulaTextBoxNS._attachFormulaTextBox(newSheet, editingElement);
	    
	                        newSheet._editorStatus = 2 ;
	                        newSheet._render._paintFormulaTextBox();
	                    } else {
	                        newSheet.startEdit(false);
	                    }
	                    newSheet.resumeEvent();
	                    self._exportInfo(newSheet);
	                    self._updateEditor(newSheet, self._rowIndex, self._columnIndex);
	                    oldSheet._loadAndSetSheetSelections();
	                    self._clear();
	                } else if (self._text && !self._dom) {
	                   
	                    newSheet._editorStatus = 1 ;
	                    oldSheet._editorStatus = 1 ;
	                    self._createHiddenDomForFormulaAcrossSheet(newSheet);
	                    newSheet._saveAndClearSheetSelections();
	                } else if (self._text && self._sheet !== newSheet) {
	                   
	                    newSheet._editorStatus = 1 ;
	                    oldSheet._editorStatus = 1 ;
	                    self._createHiddenDomForFormulaAcrossSheet(newSheet);
	                    oldSheet._loadAndSetSheetSelections();
	                    newSheet._saveAndClearSheetSelections();
	                }
	            },
	            _createHiddenDomForFormulaAcrossSheet: function (newSheet) {
	                var self = this;
	                var sheet = self._sheet;
	                if (sheet._disposed) {
	                    return;
	                }
	                var row = self._rowIndex;
	                var col = self._columnIndex;
	                var cellType = sheet.getCellType(row, col);
	                var context = {
	                    sheet: sheet,
	                    row: row,
	                    col: col,
	                    sheetArea: 3 ,
	                    canvasOffset: this._canvasOffset
	                };
	                var isImeAware = cellType.isImeAware(context);
	                var focusHolder;
	               
	                if (isImeAware) {
	                    newSheet._editorStatus = 1 ;
	                    focusHolder = cellType._createCellTypeElement(context);
	                   
	                    if (self._dom) {
	                        self._removeDom();
	                    }
	                    self._dom = focusHolder;
	                    $(focusHolder).css('position', 'absolute');
	                    var rect = sheet.getCellRect(row, col);
	                    $(focusHolder).attr('id', 'across');
	                    var style = sheet.getActualStyle(row, col);
	                    cellType._activateEditorWrapper(focusHolder, style, rect, context);
	                    var parentElement = self._workbook && self._workbook.getHost() || document.body;
	                    parentElement.insertBefore(focusHolder, keyword_null);
	                    if(self._isSelectMode) {
	                        $(focusHolder).css({'display': 'none'});
	                    }
	                    FormulaTextBoxNS._attachFormulaTextBox(newSheet, cellType.getEditingElement());
	                    if(focusHolder.firstChild && !self._isSelectMode) {
	                        cellType.focus(focusHolder.firstChild.firstChild);
	                    }
	                    self._exportInfo(newSheet);
	                    cellType._updateEditorWrapper(focusHolder, style, rect, context);
	                }
	            },
	            _updateEditor: function (sheet, activeRow, activeCol) {
	                var ct = sheet.getCellType(activeRow, activeCol),
	                    editor = sheet._editor, sheetLayout = sheet._getSheetLayout(),
	                    cellStyle = sheet.getActualStyle(activeRow, activeCol),
	                    cellRect = sheet.getCellRect(activeRow, activeCol);
	                if (cellRect && cellRect.width > 0 && cellRect.height > 0 &&
	                    cellRect.x >= sheetLayout._frozenX && cellRect.y >= sheetLayout._frozenY &&
	                    cellRect.x + cellRect.width <= sheetLayout._frozenTrailingX + sheetLayout._frozenTrailingWidth &&
	                    cellRect.y + cellRect.height <= sheetLayout._frozenTrailingY + sheetLayout._frozenTrailingHeight) {
	                    var context = {
	                        sheet: sheet,
	                        row: activeRow,
	                        col: activeCol,
	                        sheetArea: 3 
	                    };
	                    if(editor && editor.parentNode) {
	                        ct._updateEditorWrapper(editor.parentNode.parentNode, cellStyle, cellRect, context, true);
	                    }
	                }
	            }
	        };
	        return FormulatextboxAcrossSheet;
	    })();
	    
	    
	    var formulatextboxAcrossSheetSingleton = (function () {
	        function formulatextboxAcrossSheetSingleton() {
	        }
	    
	        formulatextboxAcrossSheetSingleton._handleFormulatextboxAcrossSheetBeforeTabChange = function (e, eData) {
	            if (!FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance) {
	                FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance = new FormulatextboxAcrossSheet();
	            }
	            FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance._handleFormulatextboxBeforeChange(eData);
	        };
	        formulatextboxAcrossSheetSingleton._handleFormulatextboxAcrossSheetAfterTabChange = function (e, eData) {
	            if (!FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance) {
	                FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance = new FormulatextboxAcrossSheet();
	            }
	            FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance._handleFormulatextboxAfterChange(eData);
	        };
	        return formulatextboxAcrossSheetSingleton;
	    })();
	    FormulaTextBoxNS._formulatextboxAcrossSheetSingleton = formulatextboxAcrossSheetSingleton;
	    
	    module.exports = FormulaTextBoxNS;
	
	}());

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    var Sheets = __webpack_require__(2);
	    var Common = __webpack_require__(4);
	    var FormulaTextBoxNS = __webpack_require__(1);
	    var $ = Sheets.GC$;
	    var $_extend = $.extend;
	    var StringHelper = Common._StringHelper;
	    var stringToRange = FormulaTextBoxNS._stringToRange;
	    
	    $_extend(Sheets._SheetRender.prototype, {
	        _paintFormulaTextBox: function () {
	            var self = this;
	            var sheet = self._sheet;
	            if (sheet._layoutSuspended > 0) {
	                return;
	            }
	            var layout = sheet._getSheetLayout(), ctx = self._getCtx();
	            self._copyDoubleBuffer(layout.x, layout.y, layout.width, layout.height);
	            self._paintAdornment(ctx);
	        }
	    });
	    
	    Sheets.Worksheet._registerFeature('formulatextboxrender', {
	        paintAdornment: function (e) {
	            var sheet = this;
	            var ctx = e.ctx, clipRect = e.clipRect;
	            var render = sheet._render;
	            var layout = sheet._getSheetLayout(), rect, r, c;
	
	            var fbx = sheet._eventHandler._getActualFormulaTextBox();
	            if (fbx) {
	                for (r = 0; r <= 2; r++) {
	                    for (c = 0; c <= 2; c++) {
	                        rect = layout._viewportRect(r, c);
	                        if (!rect || rect.width === 0 || rect.height === 0) {
	                            continue;
	                        }
	                        paintFormulaTextBoxRange(render, ctx, r, c, clipRect, fbx);
	                    }
	                }
	            }
	        }
	    });
	    
	    function paintFormulaTextBoxRange(render, ctx, rowViewportIndex, colViewportIndex, viewRect, fbx) {
	        var sheet = render._sheet, eventHandler = sheet._eventHandler,
	            paramRanges = (fbx && fbx._getRanges()), rangeCount = (paramRanges && paramRanges.length);
	        if (rangeCount <= 0) {
	            return;
	        }
	        var clipRect = render._getClipRect(rowViewportIndex, colViewportIndex, viewRect);
	        if (!clipRect) {
	            return;
	        }
	        ctx.save();
	        ctx.rect(clipRect.x, clipRect.y, clipRect.width, clipRect.height);
	        ctx.clip();
	        ctx.beginPath();
	        var paintRects = [];
	        var isHovering = eventHandler.isFormulaRangeHoving, hoveringInfo = eventHandler._formulRangeHovingInfo,
	            isMoving = eventHandler._isFormulaRangeMoving, movingInfo = eventHandler._formulaRangeMovingInfo,
	            isResizing = eventHandler._isFormulaRangeResizing, resizingInfo = eventHandler._formulaRangeResizingInfo;
	        var paramRange, rangeString, ranges, rects, color;
	        for (var i = 0; i < rangeCount; i++) {
	            paramRange = paramRanges[i];
	            rangeString = paramRange.text;
	           
	            if (paramRange.ranges && paramRange.ranges.length > 0) {
	                ranges = paramRange.ranges;
	            } else {
	                ranges = [stringToRange(sheet, rangeString)];
	            }
	            if (!ranges) {
	                continue;
	            }
	           
	            var ftbAcrossSheet = FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance;
	            if (ftbAcrossSheet && ftbAcrossSheet._sheet) {
	                if (StringHelper._contains(rangeString, '!')) {
	                    var sheetNameInFormula = StringHelper._leftBefore(rangeString, '!');
	                    if (sheet.name() !== sheetNameInFormula && '\'' + sheet.name() + '\'' !== sheetNameInFormula) {
	                        continue;
	                    }
	                } else {
	                    var leftBefore = StringHelper._leftBefore(rangeString, '[');
	                    var tableManager = sheet.tables;
	                    if (!sheet.getCustomNames()[leftBefore] && !(tableManager && tableManager.findByName(leftBefore))) {
	                        continue;
	                    }
	                }
	            }
	            rects = render._getPaintingRects(rowViewportIndex, colViewportIndex, ranges, clipRect);
	            for (var j = 0; j < rects.length; j++) {
	                var rect = rects[j];
	                if (rect && rect.width > 0 && rect.height > 0) {
	                    color = fbx._getRangeColor(i);
	                   
	                    if (fbx._isAppendingRange(paramRange)) {
	                        if (isHovering && hoveringInfo.paramRange.index === i) {
	                            ctx.beginPath();
	                            ctx.lineWidth = 2;
	                            ctx.strokeStyle = color;
	                            ctx.rect(rect.x + 1, rect.y + 1, rect.width - 3, rect.height - 3);
	                            ctx.stroke();
	                        }
	                        render._paintDashRect(ctx, rect, color);
	                    } else if ((isHovering && hoveringInfo.paramRange.index === i)
	                        || (isMoving && movingInfo.paramRange.index === i)
	                        || (isResizing && resizingInfo.paramRange.index === i)) {
	                        ctx.beginPath();
	                        ctx.lineWidth = 2;
	                        ctx.strokeStyle = color;
	                        ctx.rect(rect.x + 1, rect.y + 1, rect.width - 3, rect.height - 3);
	                        ctx.stroke();
	                    } else {
	                        ctx.beginPath();
	                        ctx.lineWidth = 2;
	                        ctx.strokeStyle = color;
	                        ctx.rect(rect.x, rect.y, rect.width - 1, rect.height - 1);
	                        ctx.stroke();
	                    }
	                   
	                    if (fbx._isActiveRange(paramRange)) {
	                        var val = Common._ColorHelper._fromString(color);
	                        val.a = 0.1;
	                        ctx.beginPath();
	                        ctx.fillStyle = Common._ColorHelper._toString(val);
	                        ctx.fillRect(rect.x + 1, rect.y + 1, rect.width - 3, rect.height - 3);
	                    }
	                    paintRects.push({rect: rect, color: color, allowDrag: paramRange.allowDrag});
	                }
	            }
	        }
	       
	        if (paintRects.length > 0 && fbx._allowMoveResize) {
	            var paintRectCount = paintRects.length ;
	            for (i = 0; i < paintRectCount; i++) {
	                rect = paintRects[i].rect;
	                color = paintRects[i].color;
	                var size = 5;
	                var x1 = rect.x - 2, x2 = rect.x + rect.width + 1 - size, y1 = rect.y - 2, y2 = rect.y + rect.height + 1 - size;
	                if (paintRects[i].allowDrag === false) {
	                    continue;
	                }
	               
	                ftbAcrossSheet = FormulaTextBoxNS._formulatextboxAcrossSheetSingleton._formulatextboxAcrossSheetInstance;
	                if (ftbAcrossSheet && ftbAcrossSheet._text) {
	                    continue;
	                }
	                ctx.beginPath();
	                ctx.fillStyle = color;
	                ctx.fillRect(x1, y1, size, size);
	                ctx.fillRect(x2, y1, size, size);
	                ctx.fillRect(x1, y2, size, size);
	                ctx.fillRect(x2, y2, size, size);
	            }
	        }
	        ctx.beginPath();
	        ctx.restore();
	    }
	
	}());

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    function tableFunctionDescription (name, description) {
	        return {
	            name: name,
	            description: description
	        };
	    }
	    
	    module.exports = {
	        Fbx_Summary: 'Summary',
	        Fbx_TableName_Description: 'Table name for ',
	        Fbx_CustomName_Description: 'Custom name for ',
	        _tableFunctionsResource: [
	            tableFunctionDescription('#All', 'Returns the entire contents of the table, or specified table columns including column headers, data and total rows.'),
	            tableFunctionDescription('#Data', 'Returns the data cells of the table or specified table columns.'),
	            tableFunctionDescription('#Headers', 'Returns the columns headers for the table, or specified table columns.'),
	            tableFunctionDescription('#Totals', 'Returns the total rows for the table or specified table columns.'),
	            tableFunctionDescription('@', 'This row.')
	        ]
	    };
	    
	
	}());

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.formulatextbox.12.0.0.js.map