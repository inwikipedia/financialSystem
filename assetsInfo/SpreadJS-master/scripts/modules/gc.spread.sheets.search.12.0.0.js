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
var GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["Search"] =
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

	(function() {
	    'use strict';
	
	    var Sheets = __webpack_require__(2);
	    var RegexHelper = __webpack_require__(3)._RegexHelper;
	    
	    var keyword_null = null, Math_max = Math.max, const_string = 'string';
	    var Search = {};
	    
	    function trySearch(source, searchString, searchFlags) {
	        if (!source) {
	            return false;
	        }
	        source = source.toString();
	        searchString = searchString.toString();
	        if (searchFlags === 0) {
	            return source.indexOf(searchString) > -1;
	        }
	        var isExactMatch = (searchFlags & 2 ) > 0,
	            isIgnoreCase = (searchFlags & 1 ) > 0,
	            isUseWildCards = (searchFlags & 4 ) > 0,
	            rgExp;
	        if (!isUseWildCards) {
	            if (isIgnoreCase) {
	                searchString = searchString.toLowerCase();
	                source = source.toLowerCase();
	            }
	            return isExactMatch ? searchString === source : source.indexOf(searchString) >= 0;
	        }
	        rgExp = isExactMatch ? RegexHelper._getWildcardCriteriaFullMatch(searchString, false, true) : RegexHelper._getWildcardCriteria(searchString);
	        searchString = rgExp ? rgExp : searchString;
	        rgExp = isIgnoreCase ? RegexHelper._getRegIgnoreCase(searchString) : RegexHelper._getReg(searchString);
	        return rgExp.test(source);
	    }
	    function nextCell(r, c, searchOrder, isBlockRange, rowStart, rowEnd, columnStart, columnEnd) {
	        var result = keyword_null,
	            nextRow = r + 1, nextCol = c + 1;
	        if (searchOrder === 0 ) {
	            if (nextCol >= 0 && nextCol <= columnEnd) {
	                result = {r: r, c: nextCol};
	            } else if (nextRow >= 0 && nextRow <= rowEnd) {
	                result = {r: nextRow, c: isBlockRange ? columnStart : 0};
	            }
	        } else if (nextRow <= rowEnd) {
	            result = {r: nextRow, c: c};
	        } else if (nextCol <= columnEnd) {
	            result = {r: isBlockRange ? rowStart : 0, c: nextCol};
	        }
	        return result;
	    }
	    
	   
	    
	    Sheets.Worksheet.prototype.search = function (searchCondition) {
	        if (!searchCondition) {
	            return keyword_null;
	        }
	        var self = this,
	            sheetArea = searchCondition.sheetArea, searchString = searchCondition.searchString, searchTarget = searchCondition.searchTarget, searchFlags = searchCondition.searchFlags,
	            rowCount = self.getRowCount(sheetArea), colCount = self.getColumnCount(sheetArea),
	            searchResult = new Search.SearchResult();
	        if (!searchString || searchTarget === 0  || (rowCount <= 0 && colCount <= 0)) {
	            return searchResult;
	        }
	    
	        var rowStart = Math_max(0, searchCondition.rowStart),
	            columnStart = Math_max(0, searchCondition.columnStart),
	            rowEnd = searchCondition.rowEnd, columnEnd = searchCondition.columnEnd,
	            isBlockRange = (searchFlags & 8 ) > 0;
	        if (rowEnd < 0 || !isBlockRange) {
	            rowEnd = rowCount - 1;
	        }
	        if (columnEnd < 0 || !isBlockRange) {
	            columnEnd = colCount - 1;
	        }
	    
	        var findBeginRow = searchCondition.findBeginRow, findBeginColumn = searchCondition.findBeginColumn,
	            r = findBeginRow < 0 ? rowStart : findBeginRow,
	            c = findBeginColumn < 0 ? columnStart : findBeginColumn;
	        while (r >= 0 && c >= 0) {
	            var cell = self.getCell(r, c, sheetArea),
	                searchSource;
	    
	           
	            if ((searchTarget & 1 ) > 0) {
	                searchSource = cell.text();
	                if (searchSource !== '' && trySearch(searchSource, searchString, searchFlags)) {
	                    searchResult.searchFoundFlag |= 1 ;
	                    searchResult.foundString = searchSource;
	                }
	            }
	           
	            if (Sheets._supportsCalc && (searchTarget & 8 ) > 0) {
	                searchSource = cell.formula();
	                if (typeof searchSource === const_string && searchSource !== '' && trySearch(searchSource, searchString, searchFlags)) {
	                    searchResult.searchFoundFlag |= 8 ;
	                    searchResult.foundString = searchSource;
	                }
	            }
	           
	            if ((searchTarget & 4 ) > 0) {
	                searchSource = cell.tag();
	                if (typeof searchSource === const_string && searchSource !== '' && trySearch(searchSource, searchString, searchFlags)) {
	                    searchResult.searchFoundFlag |= 4 ;
	                    searchResult.foundString = searchSource;
	                }
	            }
	    
	            if (searchResult.searchFoundFlag !== 0 ) {
	                searchResult.foundRowIndex = r;
	                searchResult.foundColumnIndex = c;
	                return searchResult;
	            }
	    
	            var rowcol = nextCell(r, c, searchCondition.searchOrder, isBlockRange, rowStart, rowEnd, columnStart, columnEnd);
	            if (!rowcol) {
	                break;
	            }
	            r = rowcol.r;
	            c = rowcol.c;
	        }
	    
	       
	        return searchResult;
	    };
	    
	   
	    
	    Sheets.Workbook.prototype.search = function (searchCondition) {
	        if (!searchCondition) {
	            return keyword_null;
	        }
	        var self = this,
	            SearchFoundFlags_None = 0 ,
	            sheetCount = self.getSheetCount(),
	            defaultSearchResult = new Search.SearchResult();
	        if (!searchCondition.searchString || searchCondition.searchTarget === SearchFoundFlags_None || sheetCount <= 0) {
	            return defaultSearchResult;
	        }
	        if (searchCondition.startSheetIndex === -1) {
	            searchCondition.startSheetIndex = 0;
	        }
	        if (searchCondition.endSheetIndex === -1) {
	            searchCondition.endSheetIndex = sheetCount - 1;
	        }
	        var sheetIndex, sheet, searchResult,
	            startSheetIndex = searchCondition.startSheetIndex, endSheetIndex = searchCondition.endSheetIndex;
	        if (endSheetIndex >= startSheetIndex && 0 <= startSheetIndex && startSheetIndex < sheetCount && 0 <= endSheetIndex && endSheetIndex < sheetCount) {
	            for (sheetIndex = startSheetIndex; sheetIndex <= endSheetIndex; sheetIndex++) {
	                sheet = self.getSheet(sheetIndex);
	                searchResult = sheet.search(searchCondition);
	                if (searchResult && searchResult.searchFoundFlag !== SearchFoundFlags_None) {
	                    searchResult.foundSheetIndex = sheetIndex;
	                    return searchResult;
	                }
	            }
	        }
	        return defaultSearchResult;
	    };
	    
	   
	   
	    
	    Search.SearchCondition = function () {
	        return {
	           
	            
	            startSheetIndex: -1,
	           
	            
	            endSheetIndex: -1,
	           
	            
	            searchString: keyword_null,
	           
	            
	            searchFlags: 0 ,
	           
	            
	            searchOrder: 0 ,
	           
	            
	            searchTarget: 1 ,
	           
	            
	            sheetArea: 3 ,
	           
	            
	            rowStart: -1,
	           
	            
	            columnStart: -1,
	           
	            
	            rowEnd: -1,
	           
	            
	            columnEnd: -1,
	            findBeginRow: -1,
	            findBeginColumn: -1
	        };
	    };
	   
	    
	   
	   
	    
	    Search.SearchResult = function () {
	        return {
	           
	            
	            searchFoundFlag: 0 ,
	           
	            
	            foundSheetIndex: -1,
	           
	            
	            foundRowIndex: -1,
	           
	            
	            foundColumnIndex: -1,
	           
	            
	            foundString: keyword_null
	        };
	    };
	   
	    
	   
	   
	    
	    Search.SearchFlags = {
	        
	        none: 0,
	        
	        ignoreCase: 1,
	        
	        exactMatch: 2,
	        
	        useWildCards: 4,
	        
	        blockRange: 8
	    };
	   
	    
	   
	   
	    
	    Search.SearchOrder = {
	        
	        zOrder: 0,
	        
	        nOrder: 1
	    };
	   
	    
	   
	   
	    
	    Search.SearchFoundFlags = {
	        
	        none: 0,
	        
	        cellText: 1,
	        
	        cellTag: 4,
	        
	        cellFormula: 8
	    };
	   
	    
	    module.exports = Search;
	
	}());

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sheets;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Common;

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.search.12.0.0.js.map