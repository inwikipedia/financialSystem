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
var GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["CalcEngine"] = GC["Spread"]["CalcEngine"] || {}; GC["Spread"]["CalcEngine"]["BasicFunctions"] =
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
	
	    var Common = __webpack_require__(2);
	    var Calc = __webpack_require__(3);
	
	    var RegexHelper = Common._RegexHelper, stringHelper = Common._StringHelper, dateTimeHelper = Common._DateTimeHelper,
	        toOADate = dateTimeHelper._toOADate, parseLocale = dateTimeHelper._parseLocale,
	        arrayHelper_getLength = Common._ArrayHelper._getLength,
	        Types = Common._Types, inArray = Types._inArray, isNullOrUndefined = Types._isNullOrUndefined;
	    var keyword_undefined = void 0, isNaNFunc = isNaN, parseFloatFunc = parseFloat, parseIntFunc = parseInt,
	        Math_abs = Math.abs, Math_sqrt = Math.sqrt, Math_max = Math.max, Math_min = Math.min, Math_floor = Math.floor,
	        Math_exp = Math.exp, Math_log = Math.log, Math_PI = Math.PI, Math_random = Math.random, Math_pow = Math.pow;
	    var Calc_Errors = Calc.Errors, CalcErrorsNull = Calc_Errors.Null, CalcErrorsDivideByZero = Calc_Errors.DivideByZero,
	        CalcErrorsValue = Calc_Errors.Value, CalcErrorsReference = Calc_Errors.Reference,
	        CalcErrorsName = Calc_Errors.Name,
	        CalcErrorsNotAvailable = Calc_Errors.NotAvailable, CalcErrorsNumber = Calc_Errors.Number;
	    var CalcConvert = Calc.Convert, CalcConvertedError = CalcConvert.CalcConvertedError,
	        CalcConvert_isError = CalcConvert._isError, CalcConvert_isReference = CalcConvert._isReference,
	        CalcConvert_isArray = CalcConvert._isArray,
	        CalcConvert_tryToBool = CalcConvert._tryToBool, CalcConvert_toInt = CalcConvert._toInt,
	        CalcConvert_toDouble = CalcConvert._toDouble,
	        CalcConvert_toString = CalcConvert._toString, CalcConvert_isNumber = CalcConvert._isNumber,
	        CalcConvert_toArray = CalcConvert._toArray, CalcConvert_toResult = CalcConvert._toResult;
	    var Calc_Helper = Calc._Helper, tryExtractToSingleValue = Calc_Helper.tryExtractToSingleValue,
	        CalcReference = Calc.CalcReference;
	    var Functions = Calc.Functions, isBoolean = Functions._isBoolean, isString = Functions._isString,
	        isLeapYear = Functions._isLeapYear,
	        getDaysInMonth = Functions._getDaysInMonth, fact = Functions._fact,
	        st_includeSubstotals = Functions._st_includeSubstotals,
	        st_devVarIncludeSubtotals = Functions._st_devVarIncludeSubtotals;
	    var MathHelper = Functions._MathHelper, approxCeiling = MathHelper._approxCeiling,
	        approxFloor = MathHelper._approxFloor;
	    var defineBuiltInFunction = Functions._defineBuiltInFunction;
	    var _tryToDouble = CalcConvert._tryToDouble, _tryToBool = CalcConvert._tryToBool,
	        CalcConvert_isNotAvailableError = CalcConvert._isNotAvailableError;
	    var sR = function () {
	        return Common._getResource(Calc.SR)();
	    };
	
	   
	    function gcdImp(a, b) {
	        while (b !== 0) {
	            var r = a % b;
	            a = b;
	            b = r;
	        }
	        return a;
	    }
	
	    function approximateNumber(number, sign, mode, flag) {
	        if (sign === 0 || number === 0) {
	            return 0;
	        }
	        if (mode !== 0 && number < 0) {
	            return flag === true ? approxFloor(number / Math.abs(sign)) * Math.abs(sign) : approxCeiling(number / Math.abs(sign)) * Math.abs(sign);
	        }
	        return flag === true ? approxCeiling(number / Math.abs(sign)) * Math.abs(sign) : approxFloor(number / Math.abs(sign)) * Math.abs(sign);
	    }
	
	    function calcIfs(args, func) {
	        var sumRange = args[0];
	        var length = arrayHelper_getLength(sumRange), rowCount = sumRange.rowCount, colCount = sumRange.colCount;
	        var ranges = [], criteriaFuns = [], resultValue = [],
	            obj, condition, i, j, criteriaFun, range;
	        for (j = 1; j < arrayHelper_getLength(args); j = j + 2) {
	            range = CalcConvert_toArray(args[j], 0 , true, false, false);
	            if (range.rowCount !== rowCount || range.colCount !== colCount) {
	                return CalcErrorsValue;
	            }
	            criteriaFun = MathHelper._parseCriteria(args[j + 1]);
	            ranges.push(range);
	            criteriaFuns.push(criteriaFun);
	        }
	        for (i = 0; i < length; i++) {
	            condition = true;
	            for (j = 0; j < arrayHelper_getLength(ranges); j++) {
	                criteriaFun = criteriaFuns[j];
	                obj = ranges[j][i];
	                condition = criteriaFun && criteriaFun(obj);
	                if (!condition) {
	                    break;
	                }
	            }
	            if (condition) {
	                obj = sumRange[i];
	                if (obj !== CalcConvertedError) {
	                    resultValue.push(obj);
	                }
	            }
	        }
	        return func(resultValue);
	    }
	
	
	    function mt_oddEven(isOdd, num) {
	        num = num < 0.0 ? Math_floor(num) : Math.ceil(num);
	        if (isOdd && num % 2.0 === 0.0 || !isOdd && num % 2.0 !== 0.0) {
	            num += num < 0.0 ? -1 : 1;
	        }
	        return num;
	    }
	
	    function mt_ceilingFloor(isCeiling, num, sign) {
	        if (num > 0.0 && sign < 0.0) {
	            return CalcErrorsNumber;
	        }
	        if (num < 0.0 && sign > 0.0) {
	            sign = -sign;
	            return isCeiling ? approxFloor(num / sign) * sign : approxCeiling(num / sign) * sign;
	        }
	        return isCeiling ? approxCeiling(num / sign) * sign : approxFloor(num / sign) * sign;
	    }
	
	   
	    function mt_roundDownUpTrunc(isUp, number, digits) {
	        var power = MathHelper._pow10(Math_abs(digits)), temp1, temp2;
	        number = digits < 0 ? number / power : number * power;
	        temp1 = approxCeiling(number);
	        temp2 = approxFloor(number);
	        if (isUp) {
	            var temp = temp1;
	            temp1 = temp2;
	            temp2 = temp;
	        }
	        number = number < 0.0 ? temp1 : temp2;
	        number = digits < 0 ? number * power : number / power;
	        return CalcConvert_toResult(number);
	    }
	
	   
	    function mt_sumx(issumx, ismy2, array1, array2) {
	        var temp = ismy2 ? -1 : 1, sum = 0.0, x, y, i;
	        if (arrayHelper_getLength(array1) !== arrayHelper_getLength(array2)) {
	            return CalcErrorsNotAvailable;
	        }
	        for (i = 0; i < arrayHelper_getLength(array1); i++) {
	            x = array1[i];
	            y = array2[i];
	            if (x !== CalcConvertedError && y !== CalcConvertedError) {
	                sum += issumx ? (x - y) * (x - y) : x * x + temp * y * y;
	            }
	        }
	        return CalcConvert_toResult(sum);
	    }
	
	    function mt_abs(number) {
	        return CalcConvert_toResult(Math_abs(number));
	    }
	
	    function mt_int(number) {
	        return approxFloor(number);
	    }
	
	    function mt_combin(n, k) {
	        var result = 1.0, i;
	        if (n < k) {
	            return CalcErrorsNumber;
	        }
	        k = Math_min(n - k, k);
	        for (i = 1.0; i <= k; i++) {
	            result *= n - i + 1.0;
	            result /= i;
	        }
	        return CalcConvert_toResult(result);
	    }
	
	    function mt_combina(n, m) {
	        var result = 1, i;
	        for (i = 1; i <= m; i++) {
	            result *= n + i - 1;
	        }
	        for (i = 2; i <= m; i++) {
	            result /= i;
	        }
	        return CalcConvert_toResult(result);
	    }
	
	    function mt_decimal(text, radix) {
	        if (!text || text.length > 255) {
	            return 0;
	        }
	        var length = text.length;
	        if (length === 0) {
	            return 0;
	        }
	        if (text[0] === '-') {
	            return CalcErrorsNumber;
	        }
	        var startIndex = 0;
	
	        while (startIndex < length && text[startIndex] === " ") {
	            startIndex++;
	        }
	
	        var result = 0.0;
	       
	        if (startIndex === length) {
	            return 0.0;
	        }
	        var baseStep = 1.0;
	        for (var i = length - 1; i >= startIndex; i--) {
	            var ch = text.charCodeAt(i) | ' '.charCodeAt(0);
	            var digit = (ch - 'a'.charCodeAt(0)) >= 0 ? ch - 87 : ch - 48; 
	            if ((digit < 0) || (digit >= radix)) {
	                return CalcErrorsNumber;
	            }
	            result += digit * baseStep;
	            baseStep *= radix;
	        }
	        return result;
	    }
	
	    function mt_degrees(number) {
	        return 180 * number / Math_PI;
	    }
	
	    function mt_odd(number) {
	        return mt_oddEven(true, number);
	    }
	
	    function mt_even(number) {
	        return mt_oddEven(false, number);
	    }
	
	    function mt_fact(number) {
	        return fact(number);
	    }
	
	    function mt_factdouble(number) {
	        var result = 1.0, i;
	        for (i = number; i > 1; i -= 2) {
	            result *= i;
	        }
	        return result;
	    }
	
	    function mt_ln(number) {
	        return CalcConvert_toResult(Math_log(number));
	    }
	
	    function mt_mod(num, divisor) {
	        return num - divisor * Math_floor(num / divisor);
	    }
	
	    function mt_pi() {
	        return Math_PI;
	    }
	
	    function mt_power(number, power) {
	        return Math_pow(number, power);
	    }
	
	    function mt_sum() {
	        var args = arguments;
	        var result = 0, argIndex;
	        for (argIndex = 0; argIndex < arrayHelper_getLength(args); argIndex++) {
	            var obj = args[argIndex], arrayValue, i;
	            if (CalcConvert_isError(obj)) {
	                return obj;
	            } else if (CalcConvert_isReference(obj) || CalcConvert_isArray(obj)) {
	                arrayValue = CalcConvert_toArray(obj, 1 , true, true, false);
	                if (arrayValue.isError) {
	                    return arrayValue[0];
	                }
	            } else {
	                arrayValue = CalcConvert_toArray(obj, 1 , true, true, true);
	            }
	            for (i = 0; i < arrayHelper_getLength(arrayValue); i++) {
	                if (arrayValue[i] !== CalcConvertedError) {
	                    result += arrayValue[i];
	                }
	            }
	        }
	        return result;
	    }
	
	    function mt_sign(number) {
	        return number === 0 ? 0 : -1;
	    }
	
	    function mt_gcd() {
	        var args = arguments;
	        var result = 0, i, j, array, obj;
	        for (i = 0; i < arrayHelper_getLength(args); i++) {
	            array = args[i];
	            for (j = 0; j < arrayHelper_getLength(array); j++) {
	                obj = array[j];
	                if (obj !== CalcConvertedError) {
	                    if (obj < 0) {
	                        return CalcErrorsNumber;
	                    }
	                    result = gcdImp(result, CalcConvert_toInt(obj));
	                }
	            }
	        }
	        return result;
	    }
	
	    function mt_lcm() {
	        var args = arguments;
	        var result = 1, nums = [], i, j, array, obj;
	        for (i = 0; i < arrayHelper_getLength(args); i++) {
	            array = args[i];
	            for (j = 0; j < arrayHelper_getLength(array); j++) {
	                obj = array[j];
	                if (obj !== CalcConvertedError) {
	                    if (obj < 0) {
	                        return CalcErrorsNumber;
	                    } else if (obj === 0) {
	                        return 0;
	                    }
	                    nums.push(CalcConvert_toInt(obj));
	                }
	            }
	            for (j = 0; j < arrayHelper_getLength(nums); j++) {
	                obj = nums[j];
	                result /= gcdImp(result, obj);
	                result *= obj;
	            }
	        }
	        return result;
	    }
	
	    function mt_product() {
	        return st_includeSubstotals(arguments, true, 6 );
	    }
	
	    function mt_sqrt(number) {
	        return Math_sqrt(number);
	    }
	
	    function mt_quotient(numerator, denominator) {
	        return parseIntFunc((numerator / denominator).toString());
	    }
	
	    function mt_subtotal(number) {
	        var args = arguments;
	        var list = [], retValue = CalcErrorsValue;
	        for (var i = 1; i < arrayHelper_getLength(args); i++) {
	            list[i - 1] = args[i];
	        }
	        if (inArray(number, [1 , 101  , 2 , 102 , 3 , 103 ,
	            4 , 104 , 5 , 105 , 6 , 106 , 9 , 109 ]) >= 0) {
	            retValue = st_includeSubstotals(list, false, number);
	        } else if (inArray(number, [7 , 107 , 8 , 108 , 10 , 110 , 11 , 111 ]) >= 0) {
	            retValue = st_devVarIncludeSubtotals(list, false, number);
	        }
	        return retValue;
	    }
	
	   
	   
	   
	   
	   
	   
	   
	   
	
	    function mt_ceiling(number, sign) {
	        return mt_ceilingFloor(true, number, sign);
	    }
	
	    function mt_floor(number, sign) {
	        return mt_ceilingFloor(false, number, sign);
	    }
	
	    function mt_ceiling_math(number, sign, mode) {
	        return approximateNumber(number, sign, mode, true);
	    }
	
	    function mt_floor_math(number, sign, mode) {
	        return approximateNumber(number, sign, mode, false);
	    }
	
	    function mt_base(number, radix, minLength) {
	        var result = "" + number.toString(radix);
	        if (minLength && result.length < minLength) {
	            return Array.apply(null, {length: minLength - result.length + 1}).join(0) + result;
	        }
	        return result;
	    }
	
	    function mt_mround(number, multiple) {
	        if (number < 0.0 && multiple > 0.0 || multiple < 0.0 && number > 0.0) {
	            return CalcErrorsNumber;
	        }
	        return approxFloor(number / multiple + 0.5) * multiple;
	    }
	
	    function mt_round(number, numDigits) {
	        return MathHelper._round(number, numDigits);
	    }
	
	    function mt_roundDownTrunc(number, digits) {
	        return mt_roundDownUpTrunc(false, number, digits);
	    }
	
	    function mt_roundUp(number, digits) {
	        return mt_roundDownUpTrunc(true, number, digits);
	    }
	
	    function mt_exp(number) {
	        return CalcConvert_toResult(Math_exp(number));
	    }
	
	    function mt_ceilingPrecise(number, significance) {
	       
	        return approxCeiling(number / Math_abs(significance)) * Math_abs(significance);
	    }
	
	    function mt_floorPrecise(number, significance) {
	       
	        return approxFloor(number / Math_abs(significance)) * Math_abs(significance);
	    }
	
	    function mt_log(num, newBase) {
	        if (newBase === 1.0) {
	            return CalcErrorsDivideByZero;
	        }
	        return CalcConvert_toResult(MathHelper._log(num, newBase));
	    }
	
	    function mt_log10(number) {
	        return CalcConvert_toResult(MathHelper._log(number, 10));
	    }
	
	    function mt_sumif(range, criteria, sumRange) {
	        sumRange = sumRange !== keyword_undefined ? sumRange : range;
	        if (isNullOrUndefined(criteria)) {
	            criteria = 0;
	        }
	        var sum = 0.0, i, criteriaFun = MathHelper._parseCriteria(criteria),
	            rangeIsArray = CalcConvert_isArray(range), sumRangeIsArray = CalcConvert_isArray(sumRange);
	        var rangeA = range.toArray(0 , true, false),
	            sumRangeA = sumRange.toArray(1 , true, false);
	        if ((rangeIsArray ? 1 : range.getRangeCount()) !== (sumRangeIsArray ? 1 : sumRange.getRangeCount()) ||
	            (rangeIsArray ? range.getRowCount() : range.getRowCount(0)) > (sumRangeIsArray ? sumRange.getRowCount() : sumRange.getRowCount(0)) ||
	            (rangeIsArray ? range.getColumnCount() : range.getColumnCount(0)) > (sumRangeIsArray ? sumRange.getColumnCount() : sumRange.getColumnCount(0))) {
	            return CalcErrorsValue;
	        }
	        if (rangeA.isError) {
	            return rangeA[0];
	        }
	        if (sumRangeA.isError) {
	            return sumRangeA[0];
	        }
	        for (i = 0; i < arrayHelper_getLength(rangeA); i++) {
	            if (criteriaFun && criteriaFun(rangeA[i]) && sumRangeA[i] !== CalcConvertedError) {
	                sum += sumRangeA[i];
	            }
	        }
	        return CalcConvert_toResult(sum);
	    }
	
	    function mt_sumifs() {
	        return calcIfs(arguments, function (resultValue) {
	            var sum = 0.0;
	            for (var i = 0; i < resultValue.length; i++) {
	                sum += resultValue[i];
	            }
	            return sum;
	        });
	    }
	
	    function mt_maxifs() {
	        return calcIfs(arguments, function (resultValue) {
	            var value = null;
	            if (resultValue.length > 0) {
	                value = Math.max.apply(null, resultValue);
	            }
	            return value;
	        });
	    }
	
	    function mt_minifs() {
	        return calcIfs(arguments, function (resultValue) {
	            var value = null;
	            if (resultValue.length > 0) {
	                value = Math.min.apply(null, resultValue);
	            }
	            return value;
	        });
	    }
	
	    function mt_munit(dimensions) {
	        var result = [];
	        var i = 0;
	        var row = [];
	        for (; i < dimensions; i++) {
	            row[i] = 0;
	        }
	        for (i = 0; i < dimensions; i++) {
	            result[i] = row.slice(0);
	            result[i][i] = 1;
	        }
	        return new Calc.CalcArray(result);
	    }
	
	    function mt_sumproduct() {
	        var args = arguments;
	        var sum = 0.0, i, argsArray = [];
	        var rowCount, columnCount, array, product, argIndex, o;
	        var length = 0;
	        for (i = 0; i < arrayHelper_getLength(args); i++) {
	            array = CalcConvert_toArray(args[i], 1 , true, true, false, true);
	            if (array.isError) {
	                return array[0];
	            }
	            if (array.isConvertError) {
	                return CalcErrorsValue;
	            }
	            if (i === 0) {
	                rowCount = array.rowCount;
	                columnCount = array.colCount;
	                length = arrayHelper_getLength(array);
	            } else if (array.rowCount !== rowCount || array.colCount !== columnCount) {
	                return CalcErrorsValue;
	            }
	            argsArray.push(array);
	        }
	        for (i = 0; i < length; i++) {
	            product = 1.0;
	            for (argIndex = 0; argIndex < arrayHelper_getLength(args); argIndex++) {
	                o = argsArray[argIndex][i];
	                if (o !== CalcConvertedError) {
	                    product *= o;
	                } else {
	                    product = 0.0;
	                    break;
	                }
	            }
	            sum += product;
	        }
	        return CalcConvert_toResult(sum);
	    }
	
	    function mt_sumsq() {
	        var args = arguments;
	        var x, i, j, array, sumx2 = 0.0;
	        for (i = 0; i < arrayHelper_getLength(args); i++) {
	            array = args[i];
	            for (j = 0; j < arrayHelper_getLength(array); j++) {
	                x = array[j];
	                if (x !== CalcConvertedError) {
	                    sumx2 += x * x;
	                }
	            }
	        }
	        return CalcConvert_toResult(sumx2);
	    }
	
	    function mt_sumx2my2(array1, array2) {
	        return mt_sumx(false, true, array1, array2);
	    }
	
	    function mt_sumx2py2(array1, array2) {
	        return mt_sumx(false, false, array1, array2);
	    }
	
	    function mt_sumxmy2(array1, array2) {
	        return mt_sumx(true, false, array1, array2);
	    }
	
	    function mt_seriessum(x, n, m, coeff) {
	        var i, a, sum = 0.0;
	        for (i = 0; i < arrayHelper_getLength(coeff); i++) {
	            a = CalcConvert_toDouble(coeff[i]);
	            if (isNaNFunc(a)) {
	                return CalcErrorsValue;
	            }
	            sum += a * Math_pow(x, n + i * m);
	        }
	        return CalcConvert_toResult(sum);
	    }
	
	    function mt_sqrtpi(number) {
	        return CalcConvert_toResult(Math_sqrt(number * Math_PI));
	    }
	
	    function mt_radians(number) {
	        return Math_PI * number / 180;
	    }
	
	    function mt_sin(number) {
	        return CalcConvert_toResult(Math.sin(number));
	    }
	
	    function mt_csc(number) {
	        var r = mt_sin(number);
	        if (r === 0) {
	            return CalcErrorsDivideByZero;
	        }
	
	        return 1.0 / r;
	    }
	
	    function mt_cos(number) {
	        return CalcConvert_toResult(Math.cos(number));
	    }
	
	    function mt_sec(number) {
	        var r = mt_cos(number);
	        if (r === 0) {
	            return CalcErrorsDivideByZero;
	        }
	        return 1.0 / r;
	    }
	
	    function mt_tan(number) {
	        return CalcConvert_toResult(Math.tan(number));
	    }
	
	    function mt_cot(number) {
	        if (number === 0) {
	            return CalcErrorsDivideByZero;
	        }
	        return CalcConvert_toResult(1.0 / Math.tan(number));
	    }
	
	    function mt_asin(number) {
	        return CalcConvert_toResult(Math.asin(number));
	    }
	
	    function mt_acos(number) {
	        return CalcConvert_toResult(Math.acos(number));
	    }
	
	    function mt_sinh(number) {
	        return CalcConvert_toResult(MathHelper._sinhCosh(number, true));
	    }
	
	    function mt_csch(number) {
	        if (number > 709 || number < -709) {
	            return 0;
	        }
	        var r = mt_sinh(number);
	        if (r === 0) {
	            return CalcErrorsDivideByZero;
	        }
	        return 1.0 / r;
	    }
	
	    function mt_cosh(number) {
	        return CalcConvert_toResult(MathHelper._sinhCosh(number, false));
	    }
	
	    function mt_sech(number) {
	        if (number > 709 || number < -709) {
	            return 0;
	        }
	        var r = mt_cosh(number);
	        if (r === 0) {
	            return CalcErrorsDivideByZero;
	        }
	        return 1.0 / r;
	    }
	
	    function mt_asinh(num) {
	        return CalcConvert_toResult(Math_log(num + Math_sqrt(num * num + 1.0)));
	    }
	
	    function mt_acosh(num) {
	        return CalcConvert_toResult(Math_log(num + Math_sqrt(num * num - 1.0)));
	    }
	
	    function mt_atan(number) {
	        return CalcConvert_toResult(Math.atan(number));
	    }
	
	    function mt_acot(number) {
	        return CalcConvert_toResult(number < 0 ? (Math.PI + Math.atan(1 / number)) : (Math.atan(1 / number)));
	    }
	
	    function mt_atan2(x, y) {
	        if (x === 0.0 && y === 0.0) {
	            return CalcErrorsDivideByZero;
	        }
	        return CalcConvert_toResult(Math.atan2(y, x));
	    }
	
	    function mt_tanh(number) {
	        var x = Math_exp(number), y = Math_exp(-number);
	        return CalcConvert_toResult(x - y) / (x + y);
	    }
	
	    function mt_coth(number) {
	        if (number === 0) {
	            return CalcErrorsDivideByZero;
	        }
	        if (number > 10) {
	            return 1;
	        }
	        if (number < -10) {
	            return -1;
	        }
	        var r = mt_tanh(number);
	        return 1.0 / r;
	    }
	
	    function mt_atanh(number) {
	        return CalcConvert_toResult(Math_log((1.0 + number) / (1.0 - number)) / 2.0);
	    }
	
	    function mt_acoth(number) {
	        return mt_atanh(1.0 / number);
	    }
	
	    function mt_mdeterm(array) {
	        var dim = array.rowCount, result = 1.0, i2, j2, j3, k1, k2, found, temp, factor;
	        if (array.rangeCount > 1 || dim !== array.colCount) {
	            return CalcErrorsValue;
	        }
	        for (i2 = 0; i2 < dim - 1; i2++) {
	            if (array[i2][i2] === 0.0) {
	                found = false;
	                for (j2 = i2 + 1; !found && j2 < dim; j2++) {
	                    if (array[j2][i2] !== 0.0) {
	                        for (k1 = i2; k1 < dim; k1++) {
	                            temp = array[i2][k1];
	                            array[i2][k1] = array[j2][k1];
	                            array[j2][k1] = temp;
	                        }
	                        result *= -1.0;
	                        found = true;
	                    }
	                }
	                if (!found) {
	                    return 0.0;
	                }
	            }
	            for (j3 = i2 + 1; j3 < dim; j3++) {
	                if (array[j3][i2] !== 0.0) {
	                    factor = array[j3][i2] / array[i2][i2];
	                    for (k2 = i2; k2 < dim; k2++) {
	                        array[j3][k2] -= factor * array[i2][k2];
	                    }
	                }
	            }
	        }
	        for (i2 = 0; i2 < dim; i2++) {
	            result *= array[i2][i2];
	        }
	        return result;
	    }
	
	    function mt_minverse(array) {
	        var dim = array.rowCount, b = [], i1, i2, i3, j1, j2, j3, k, k1, k2, k3, k4, factor, factor1, temp, temp1,
	            found;
	        if (array.rangeCount > 1 || dim !== array.colCount) {
	            return CalcErrorsValue;
	        }
	        for (i1 = 0; i1 < dim; i1++) {
	            b[i1] = [dim];
	            for (j1 = 0; j1 < dim; j1++) {
	                b[i1][j1] = i1 === j1 ? 1.0 : 0.0;
	            }
	        }
	        for (i2 = 0; i2 < dim; i2++) {
	            if (array[i2][i2] === 0.0) {
	                found = false;
	                for (j2 = i2 + 1; !found && j2 < dim; j2++) {
	                    if (array[j2][i2] !== 0.0) {
	                        for (k = i2; k < dim; k++) {
	                            temp = array[i2][k];
	                            array[i2][k] = array[j2][k];
	                            array[j2][k] = temp;
	                        }
	                        for (k1 = 1; k1 < dim; k1++) {
	                            temp1 = b[i2][k1];
	                            b[i2][k1] = b[j2][k1];
	                            b[j2][k1] = temp1;
	                        }
	                        found = true;
	                    }
	                }
	                if (!found) {
	                    return CalcErrorsNumber;
	                }
	            }
	            for (j3 = 0; j3 < dim; j3++) {
	                if (j3 !== i2 && array[j3][i2] !== 0.0) {
	                    factor = array[j3][i2] / array[i2][i2];
	                    for (k2 = i2; k2 < dim; k2++) {
	                        array[j3][k2] -= factor * array[i2][k2];
	                    }
	                    for (k3 = 0; k3 < dim; k3++) {
	                        b[j3][k3] -= factor * b[i2][k3];
	                    }
	                }
	            }
	        }
	        for (i3 = 0; i3 < dim; i3++) {
	            factor1 = array[i3][i3];
	            for (k4 = 0; k4 < dim; k4++) {
	                b[i3][k4] /= factor1;
	            }
	        }
	        return new Calc.CalcArray(b);
	    }
	
	    function mt_mmult(arrayA, arrayB) {
	        var rowCountA = arrayA.rowCount, columnCountA = arrayA.colCount,
	            rowCountB = arrayB.rowCount, columnCountB = arrayB.colCount;
	        var result = [], resultRow, rowA, i2, j2, k, sum;
	        if (columnCountA !== rowCountB) {
	            return CalcErrorsValue;
	        }
	        for (i2 = 0; i2 < rowCountA; i2++) {
	            result[i2] = resultRow = [];
	            rowA = arrayA[i2];
	            for (j2 = 0; j2 < columnCountB; j2++) {
	                sum = 0.0;
	                for (k = 0; k < rowCountB; k++) {
	                    sum += rowA[k] * arrayB[k][j2];
	                }
	                resultRow[j2] = sum;
	            }
	        }
	        return new Calc.CalcArray(result);
	    }
	
	    function mt_multinomial() {
	        var args = arguments;
	        var sumx = 0, prod = 1.0, array, i, j;
	        for (i = 0; i < arrayHelper_getLength(args); i++) {
	            array = args[i];
	            for (j = 0; j < arrayHelper_getLength(array); j++) {
	                var x = CalcConvert_toInt(array[j]);
	                if (x < 0 || 170 < x) {
	                    return CalcErrorsNumber;
	                }
	                sumx += x;
	                prod *= fact(x);
	            }
	        }
	        if (sumx < 0 || 170 < sumx) {
	            return CalcErrorsNumber;
	        }
	        return fact(sumx) / prod;
	    }
	
	    function mt_rand() {
	        return Math_abs(Math_random() * 2 - 1);
	    }
	
	    function mt_randbetween(min, max) {
	        return max < min ? CalcErrorsNumber : CalcConvert_toInt(min + Math_random() * (max - min + 1));
	    }
	
	    function mt_roman(number, formArg) {
	        var keyArray = ['M', 'D', 'C', 'L', 'X', 'V', 'I'], valueArray = [1000, 500, 100, 50, 10, 5, 1];
	        var form, infoLength = 7, sb = [], i;
	        if (isBoolean(formArg)) {
	            form = formArg ? 0 : 4;
	        } else {
	            form = formArg;
	        }
	        for (i = 0; i < infoLength; i += 2) {
	            if (2 <= i && valueArray[i - 2] - valueArray[i] <= number) {
	                var i1 = i, i2 = i - 2, step;
	                for (step = 0; step < form && i1 + 1 < infoLength && valueArray[i2] - valueArray[i1 + 1] <= number; step++) {
	                    i1++;
	                }
	                sb.push(keyArray[i1]);
	                sb.push(keyArray[i2]);
	                number += valueArray[i1];
	                number -= valueArray[i2];
	            }
	            if (1 <= i && valueArray[i - 1] <= number) {
	                sb.push(keyArray[i - 1]);
	                number -= valueArray[i - 1];
	            }
	            if (1 <= i && valueArray[i - 1] - valueArray[i] <= number) {
	                var i21 = i, i22 = i - 1, step1;
	                for (step1 = 0; step1 < form && i21 + 1 < infoLength && valueArray[i22] - valueArray[i21 + 1] <= number; step1++) {
	                    i21++;
	                }
	                sb.push(keyArray[i21]);
	                sb.push(keyArray[i22]);
	                number += valueArray[i21];
	                number -= valueArray[i22];
	            }
	            while (valueArray[i] <= number) {
	                sb.push(keyArray[i]);
	                number -= valueArray[i];
	            }
	        }
	        return sb.join('');
	    }
	
	    function mt_arabic(text) {
	        if (!text.length) {
	            return 0;
	        }
	        if (text.length > 255) {
	            return CalcErrorsValue;
	        }
	        text = text.toLowerCase();
	        var number = 0;
	        var index = text.length - 1, startIndex;
	        var subtractNumber = 0;
	        var currentPartValue;
	        var currentCharValue, prevCharValue = -1;
	       
	        while (index >= 0 && text[index] === ' ') {
	            index--;
	        }
	        var actualStart = 0;
	        while (actualStart <= index && text[actualStart] === ' ') {
	            actualStart++;
	        }
	        var isNegative = false;
	        if (actualStart <= index && text[actualStart] === '-') {
	            isNegative = true;
	            actualStart++;
	        }
	        do {
	            startIndex = index;
	            var startChar = text[startIndex];
	            --index;
	            while (index >= actualStart && (text[index].charCodeAt(0) | ' '.charCodeAt(0)) === startChar.charCodeAt(0)) {
	                --index;
	            }
	
	            switch (startChar) {
	                case 'i':
	                    currentPartValue = startIndex - index;
	                    currentCharValue = 1;
	                    break;
	                case 'v':
	                    currentPartValue = (startIndex - index) * 5;
	                    currentCharValue = 5;
	                    break;
	                case 'x':
	                    currentPartValue = (startIndex - index) * 10;
	                    currentCharValue = 10;
	                    break;
	                case 'l':
	                    currentPartValue = (startIndex - index) * 50;
	                    currentCharValue = 50;
	                    break;
	                case 'c':
	                    currentPartValue = (startIndex - index) * 100;
	                    currentCharValue = 100;
	                    break;
	                case 'd':
	                    currentPartValue = (startIndex - index) * 500;
	                    currentCharValue = 500;
	                    break;
	                case 'm':
	                    currentPartValue = (startIndex - index) * 1000;
	                    currentCharValue = 1000;
	                    break;
	                default:
	                    return CalcErrorsValue;
	            }
	            if (currentCharValue >= prevCharValue) {
	                number += currentPartValue - subtractNumber;
	                prevCharValue = currentCharValue;
	                subtractNumber = 0;
	            } else {
	                subtractNumber += currentPartValue;
	            }
	        } while (index >= actualStart);
	        if (subtractNumber !== 0) {
	            number -= subtractNumber;
	        }
	        if (isNegative) {
	            number = -number;
	        }
	        return number;
	    }
	
	   
	
	   
	    function lg_and_or(isAndFormula, args) {
	        var i, j, array;
	        for (i = 0; i < arrayHelper_getLength(args); i++) {
	            array = args[i];
	            for (j = 0; j < arrayHelper_getLength(array); j++) {
	                if (isAndFormula) {
	                    if (!array[j]) {
	                        return false;
	                    }
	                } else if (array[j] && array[j] !== CalcConvertedError) {
	                    return true;
	                }
	            }
	        }
	        return !!isAndFormula;
	    }
	
	    function lg_and() {
	        return lg_and_or(true, arguments);
	    }
	
	    function lg_or() {
	        return lg_and_or(false, arguments);
	    }
	
	    function lg_not(logical) {
	        var retValue = {};
	        CalcConvert._tryToBool(logical, retValue);
	        return !retValue.value;
	    }
	
	    function lg_if(logicalTest, valueIfTrue, valueIfFalse) {
	        var arg0 = logicalTest, arg1 = valueIfTrue, val = tryExtractToSingleValue(arg0), arg2;
	        if (valueIfFalse !== keyword_undefined) {
	            arg2 = valueIfFalse;
	        } else {
	            arg2 = arrayHelper_getLength(arguments) === 2 ? false : 0;
	        }
	        var retValue = {};
	        CalcConvert_tryToBool(val.value, retValue);
	        return retValue.value ? arg1 : arg2;
	    }
	
	    function _iferror$evaluateSingle(value, valueIfError) {
	        if (CalcConvert_isError(value)) {
	            return isNullOrUndefined(valueIfError) ? 0 : valueIfError;
	        }
	        return isNullOrUndefined(value) ? 0 : value;
	    }
	
	    function lg_iferror(value, valueIfError) {
	        if (!CalcConvert_isError(value) && CalcConvert_isReference(value)) {
	            if (value.getRangeCount() > 1) {
	                return CalcErrorsValue;
	            }
	            var rowOffset = 0, colOffset = 0;
	            var offsetIdentity = this._offsetIdentity;
	            if (offsetIdentity) {
	                rowOffset = offsetIdentity.row;
	                colOffset = offsetIdentity.col;
	                var range = value._identities && value._identities[0];
	               
	                if (range && (rowOffset + 1 > range.rowCount || colOffset + 1 > range.colCount)) {
	                    return valueIfError;
	                }
	            }
	            value = value.getValue(0, rowOffset, colOffset);
	        }
	        return _iferror$evaluateSingle(value, valueIfError);
	    }
	
	    function lg_true() {
	        return true;
	    }
	
	    function lg_false() {
	        return false;
	    }
	
	    function lg_ifna(value, valueIfNA) {
	        if (CalcConvert_isNotAvailableError(value)) {
	            return valueIfNA;
	        }
	        return value;
	    }
	
	    function lg_ifs() {
	        for (var index = 0, end = arguments.length; index < end; index++) {
	            var booleanValue = {value: false};
	            if (CalcConvert_isError(arguments[index])) {
	                return arguments[index];
	            }
	            if (CalcConvert_tryToBool(arguments[index++], booleanValue)) {
	                if (booleanValue.value) {
	                    return arguments[index];
	                }
	            } else {
	                return CalcErrorsValue;
	            }
	        }
	        return CalcErrorsNotAvailable;
	    }
	
	    function lg_switch() {
	        if (arguments.length < 3) {
	            return CalcErrorsValue;
	        }
	        if (CalcConvert_isError(arguments[0])) {
	            return arguments[0];
	        }
	        for (var index = 1, argsCount = arguments.length - 1; index < argsCount; index++) {
	            var valueValue = arguments[index++];
	            if (CalcConvert_isError(valueValue)) {
	                return valueValue;
	            }
	            if (typeof arguments[0] === 'string' && typeof valueValue === 'string') {
	                if (arguments[0].toUpperCase() === valueValue.toUpperCase()) {
	                    return arguments[index];
	                }
	            } else if (arguments[0] === valueValue) {
	                return arguments[index];
	            }
	        }
	        if (arguments.length % 2 === 0) {
	            return arguments[arguments.length - 1];
	        }
	        return CalcErrorsNotAvailable;
	    }
	
	    function lg_xor() {
	        var i, j, array, count = 0;
	        for (i = 0; i < arrayHelper_getLength(arguments); i++) {
	            array = arguments[i];
	            for (j = 0; j < arrayHelper_getLength(array); j++) {
	                if (array[j]) {
	                    count++;
	                }
	            }
	
	        }
	        if (count % 2) {
	            return true;
	        }
	        return false;
	    }
	
	   
	
	
	   
	    function getDayOfYear(date) {
	        var year = date.getFullYear();
	        var month = date.getMonth();
	        var day = date.getDate();
	        var days = day, i;
	        for (i = 0; i < month; i++) {
	            days += getDaysInMonth(year, i);
	        }
	        return days;
	    }
	
	    function caculateWeekendMask(weekend) {
	        if (isString(weekend)) {
	            if (arrayHelper_getLength(weekend) !== 7 || isNaNFunc(parseIntFunc(weekend))) {
	                return CalcErrorsValue;
	            }
	        } else if (!isNaNFunc(weekend)) {
	            if (Math_floor(weekend) < 1 || Math_floor(weekend) > 17) {
	                return CalcErrorsNumber;
	            }
	            weekend = weekend.toString();
	        }
	        var weekendArray = ['1', '2', '3', '4', '5', '6', '7'],
	            weekendMask = [0, 0, 0, 0, 0, 0, 0], n;
	        switch (arrayHelper_getLength(weekend)) {
	            case 1:
	                if (inArray(weekend, weekendArray) >= 0) {
	                    n = parseIntFunc(weekend);
	                    weekendMask[(n + 4) % 7] = 1;
	                    weekendMask[(n + 5) % 7] = 1;
	                    break;
	                }
	                return CalcErrorsNumber;
	            case 2:
	                if (weekend[0] === '1' && inArray(weekend[1], weekendArray) >= 0) {
	                    n = parseIntFunc(weekend[1]);
	                    weekendMask[(n + 5) % 7] = 1;
	                    break;
	                }
	                return CalcErrorsNumber;
	            case 7:
	                for (n = 0; n < 7; n++) {
	                    weekendMask[n] = parseIntFunc(weekend[n]);
	                }
	                break;
	            default:
	                return CalcErrorsValue;
	        }
	        return weekendMask;
	    }
	
	    function getWorkdayDate(isWorkdayFormula, date, days, values, weekendMask) {
	        var o = dt_weekday(date, 3);
	        if (CalcConvert_isError(o)) {
	            return o;
	        }
	        var weekdayValue = CalcConvert_toInt(o);
	        for (; days < 0; ++days) {
	            date.setDate(date.getDate() - 1);
	            weekdayValue = weekdayValue === 0 ? 6 : --weekdayValue;
	            if (isWorkdayFormula && (weekdayValue === 5 || weekdayValue === 6) ||
	                !isWorkdayFormula && weekendMask[weekdayValue] || values.indexOf(toOADate(date)) >= 0) {
	                days--;
	            }
	        }
	        for (; days > 0; --days) {
	            date.setDate(date.getDate() + 1);
	            weekdayValue = weekdayValue === 6 ? 0 : ++weekdayValue;
	            if (isWorkdayFormula && (weekdayValue === 5 || weekdayValue === 6) ||
	                !isWorkdayFormula && weekendMask[weekdayValue] || values.indexOf(toOADate(date)) >= 0) {
	                days++;
	            }
	        }
	        return toOADate(date);
	    }
	
	    function removeHolidays(weekend, holidays, start_serial, end_serial, res, isNetworkdaysIntl) {
	        var ele, weekendMask;
	        if (isNetworkdaysIntl) {
	            weekend = weekend !== keyword_undefined ? weekend : '0000011';
	            weekendMask = caculateWeekendMask(weekend);
	            if (CalcConvert_isError(weekendMask)) {
	                return weekendMask;
	            }
	        }
	        if (holidays !== keyword_undefined) {
	            ele = CalcConvert_toArray(holidays, 4 , true, true, false);
	        }
	        if (!ele) {
	            return res;
	        }
	        if (ele.isError) {
	            return ele[0];
	        }
	        var cnt = arrayHelper_getLength(ele), list = [], k;
	        for (k = 0; k < cnt; k++) {
	            var tmpDateTime = ele[k];
	            var date = dateTimeHelper._fromOADate(tmpDateTime), day = date.getDay();
	            var isWeekEnd = arrayHelper_getLength(weekendMask) ? weekendMask[dt_weekday(date, 3)] : (day === 6 || day === 0);
	            if (list.indexOf(tmpDateTime) === -1 && !isWeekEnd && tmpDateTime >= start_serial && tmpDateTime <= end_serial) {
	                list.push(tmpDateTime);
	            }
	        }
	       
	        res -= arrayHelper_getLength(list);
	        return res;
	    }
	
	    function getNetWorkdays(isNetworkdaysIntl, start_date, end_date, weekend, holidays, removeWeekendsFunc) {
	        var start_serial = CalcConvert_toInt(toOADate(start_date));
	        var end_serial = CalcConvert_toInt(toOADate(end_date));
	        var isNegative = false;
	       
	        if (start_serial > end_serial) {
	            var temp_date = start_date;
	            start_date = end_date;
	            end_date = temp_date;
	            var temp_serial = start_serial;
	            start_serial = end_serial;
	            end_serial = temp_serial;
	            isNegative = true;
	        }
	        var res = end_serial - start_serial + 1;
	       
	        res = removeWeekendsFunc(start_date, end_date, res, weekend);
	        if (isNetworkdaysIntl && CalcConvert_isError(res)) {
	            return res;
	        }
	        if (res <= 0) {
	            return 0;
	        }
	        res = removeHolidays(weekend, holidays, start_serial, end_serial, res, isNetworkdaysIntl);
	        res = isNegative ? -res : res;
	        return res;
	    }
	
	   
	    function dt_edateEomonth(isEomonthFormula, startDate, months) {
	        startDate = CalcConvert._toDateTime(startDate);
	        var calcDate = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
	       
	       
	        calcDate.setMonth(calcDate.getMonth() + months);
	        var days = getDaysInMonth(calcDate.getFullYear(), calcDate.getMonth());
	        calcDate.setDate(isEomonthFormula ? days : Math_min(startDate.getDate(), days));
	        return calcDate;
	    }
	
	    function dt_date(year, month, day) {
	        if (year <= 1899) {
	            year += 1900;
	        }
	        var date = new Date(year, month - 1, day);
	        if (date < new Date(1899, 11, 30)) {
	            return CalcErrorsNumber;
	        }
	        return date;
	    }
	
	    function dt_time(hour, minute, second) {
	        var time = dateTimeHelper._fromOADate(0);
	        time.setHours(hour);
	        time.setMinutes(minute);
	        time.setSeconds(second);
	        time.setMilliseconds(0);
	        if (time.getHours() < 0 && time.getMinutes() < 0 && time.getSeconds() < 0) {
	            return CalcErrorsNumber;
	        }
	        return time;
	    }
	
	    function dt_datevalue(text) {
	        var date, i;
	        if (isString(text)) {
	            date = parseLocale(text);
	            if (!date) {
	                date = new Date(text);
	                if (!date || isNaNFunc(date.valueOf())) {                     date = null;
	                }
	            }
	        }
	        if (!date) {
	            return CalcErrorsValue;
	        }
	        var year = date.getFullYear(), days = getDayOfYear(date);
	        if (year < 1900) {
	            return CalcErrorsValue;
	        }
	        for (i = 1900; i < year; i++) {
	            days += 365;
	            isLeapYear(i) && days++;
	        }
	        return days;
	    }
	
	    function dt_timevalue(time) {
	        var date;
	        if (isString(time)) {
	            date = parseLocale(time);
	        }
	        if (!date) {
	            return CalcErrorsValue;
	        }
	        return (((date.getHours() * 60) + date.getMinutes()) * 60 + date.getSeconds()) / (24 * 3600);
	    }
	
	    function dt_now() {
	        return new Date();
	    }
	
	    function dt_today() {
	        var date = new Date();
	        date.setHours(0);
	        date.setMinutes(0);
	        date.setSeconds(0);
	        date.setMilliseconds(0);
	        return date;
	    }
	
	    function dt_hour(serialNumber) {
	        return serialNumber.getHours();
	    }
	
	    function dt_minute(serialNumber) {
	        return serialNumber.getMinutes();
	    }
	
	    function dt_second(serialNumber) {
	        return serialNumber.getSeconds();
	    }
	
	    function dt_day(serialNumber) {
	        return serialNumber.getDate();
	    }
	
	    function dt_month(serialNumber) {
	        return serialNumber.getMonth() + 1;
	    }
	
	    function dt_year(serialNumber) {
	        return serialNumber.getFullYear();
	    }
	
	    function dt_weeknum(date, type) {
	        if (type === 1 || type === 2) {
	            var days = getDayOfYear(date);
	            var dayOfFirstDay = new Date(date.getFullYear(), 0, 1).getDay();
	            if (type === 2) {
	                dayOfFirstDay -= 1;
	                if (dayOfFirstDay < 0) {
	                    dayOfFirstDay = 6;
	                }
	            }
	            var dayDiff = days - 1 - (6 - dayOfFirstDay);
	            if (dayDiff < 0) {
	                dayDiff = 0;
	            }
	            return 1 + CalcConvert_toInt(dayDiff / 7) + ((dayDiff % 7 !== 0) ? 1 : 0);
	        }
	        return CalcErrorsNumber;
	    }
	
	    function dt_weekday(dt, type) {
	        var day = dt.getDay();
	        switch (type) {
	            case 1:
	                return day + 1;
	            case 2:
	                return day === 0 ? 7 : day;
	            case 3:
	                return day === 0 ? 6 : day - 1;
	            default:
	                return CalcErrorsNumber;
	        }
	    }
	
	    function dt_edate(startDate, months) {
	        return dt_edateEomonth(false, startDate, months);
	    }
	
	    function dt_eomonth(startDate, months) {
	        return dt_edateEomonth(true, startDate, months);
	    }
	
	    function dt_workday(startDate, days, holidays) {
	        return getWorkdayDate(true, startDate, days, holidays);
	    }
	
	    function dt_workday_intl(startDate, days, weekend, holidays) {
	       
	        var weekendMask = caculateWeekendMask(weekend);
	        if (CalcConvert_isError(weekendMask)) {
	            return weekendMask;
	        }
	        return weekendMask.join('') === '1111111' ? CalcErrorsValue : getWorkdayDate(false, startDate, days, holidays, weekendMask);
	    }
	
	    function dt_networkdays(startDate, endDate, holidays) {
	        function removeWeekends(start_date, end_date, res) {
	            var offsetInOneWeek = CalcConvert_toInt(toOADate(end_date) - toOADate(start_date)) % 7;
	            var weekDays = CalcConvert_toInt(dt_weekday(start_date, 2) + offsetInOneWeek);
	            var maxOffset = start_date.getDay() === 0 ? 1 : 2;
	            offsetInOneWeek = weekDays > 5 ? weekDays - 5 : 0;
	            offsetInOneWeek = offsetInOneWeek > maxOffset ? maxOffset : offsetInOneWeek;
	            res -= offsetInOneWeek;
	           
	            res -= Math_floor(res / 7) * 2;
	            return res;
	        }
	
	        return getNetWorkdays(false, startDate, endDate, keyword_undefined, holidays, removeWeekends);
	    }
	
	    function removeWeekends_intl(start_date, end_date, res, weekend) {
	        weekend = weekend !== keyword_undefined ? weekend : '0000011';
	        var weekendMask = caculateWeekendMask(weekend);
	        var weekendsCountInOneWeek = 0, offsetWeekendsCount = 0, i;
	        if (CalcConvert_isError(weekendMask)) {
	            return weekendMask;
	        }
	        for (i = 0; i < arrayHelper_getLength(weekendMask); i++) {
	            if (weekendMask[i] === 1) {
	                weekendsCountInOneWeek++;
	            }
	        }
	       
	       
	        if (res < 30) {
	            for (i = 0; i < res; i++) {
	                if (weekendMask[(CalcConvert_toInt(dt_weekday(start_date, 3)) + i) % 7]) {
	                    offsetWeekendsCount++;
	                }
	            }
	            res = res - offsetWeekendsCount;
	            return res;
	        }
	        var tempRes = res, offsetHeader = 0, offsetTail = 0;
	        for (i = 0; i < tempRes; i++) {
	            if (CalcConvert_toInt(dt_weekday(start_date, 3) + i) % 7 === 0) {
	                break;
	            }
	            offsetHeader++;
	        }
	        for (i = 0; i < offsetHeader; i++) {
	            if (weekendMask[(CalcConvert_toInt(dt_weekday(start_date, 3)) + i) % 7]) {
	                offsetWeekendsCount++;
	            }
	        }
	        for (i = 0; i < tempRes; i++) {
	            if ((CalcConvert_toInt(dt_weekday(end_date, 3)) + 7 - i) % 7 === 6) {
	                break;
	            }
	            offsetTail++;
	        }
	        for (i = 0; i < offsetTail; i++) {
	            if (weekendMask[(CalcConvert_toInt(dt_weekday(end_date, 3)) + 7 - i) % 7]) {
	                offsetWeekendsCount++;
	            }
	        }
	        tempRes = tempRes - offsetHeader - offsetTail;
	        res -= CalcConvert_toInt(tempRes / 7) * weekendsCountInOneWeek;
	        res -= offsetWeekendsCount;
	        return res;
	    }
	
	    function dt_networkdays_intl(startDate, endDate, weekend, holidays) {
	        return getNetWorkdays(true, startDate, endDate, weekend, holidays, removeWeekends_intl);
	    }
	
	    function dt_datedif(start, end, unit) {
	        function calcDateDifFunction() {
	            var builtinProcedureArray = [];
	            builtinProcedureArray[0] = (function (startDate, endDate) {
	                return (endDate.getFullYear() - startDate.getFullYear()) + (endDate.getMonth() < startDate.getMonth() || (endDate.getMonth() === startDate.getMonth() && endDate.getDate() < startDate.getDate()) ? -1 : 0);
	            });
	            builtinProcedureArray[1] = (function (startDate, endDate) {
	                return 12 * (endDate.getFullYear() - startDate.getFullYear()) + (endDate.getMonth() - startDate.getMonth()) + (endDate.getDate() < startDate.getDate() ? -1 : 0);
	            });
	            builtinProcedureArray[2] = (function (startDate, endDate) {
	                return (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
	            });
	            builtinProcedureArray[3] = (function (startDate, endDate) {
	                var date = new Date(endDate.getFullYear(), endDate.getMonth() + (endDate.getDate() < startDate.getDate() ? -1 : 0), startDate.getDate());
	                return (endDate.getTime() - date.getTime()) / (1000 * 3600 * 24);
	            });
	            builtinProcedureArray[4] = (function (startDate, endDate) {
	                return (endDate.getMonth() - startDate.getMonth()) + (endDate.getMonth() < startDate.getMonth() || (endDate.getMonth() === startDate.getMonth() && endDate.getDate() < startDate.getDate()) ? 12 : 0) + (endDate.getDate() < startDate.getDate() ? -1 : 0);
	            });
	            builtinProcedureArray[5] = (function (startDate, endDate) {
	                var year = endDate.getFullYear() + (endDate.getMonth() < startDate.getMonth() || (endDate.getMonth() === startDate.getMonth() && endDate.getDate() < startDate.getDate()) ? -1 : 0);
	                var month = startDate.getMonth();
	                var day = startDate.getDate();
	                var isStartLeap = isLeapYear(startDate.getFullYear());
	               
	               
	               
	               
	               
	                if (month === 1 && day === 29 && !isLeapYear(year)) {
	                    day--;
	                }
	               
	               
	               
	                if (!isStartLeap && month === 1 && day === 28 && isLeapYear(year)) {
	                    day++;
	                }
	                var date = new Date(year, month, day);
	                return (endDate - date) / (1000 * 3600 * 24);
	            });
	            return builtinProcedureArray;
	        }
	
	       
	       
	        start.setHours(0, 0, 0, 0);
	        end.setHours(0, 0, 0, 0);
	        unit = unit.toLocaleUpperCase();
	        var builtinProcedure = calcDateDifFunction();
	        var index = inArray(unit, ['Y', 'M', 'D', 'MD', 'YM', 'YD']);
	        if (end < start) {
	            return CalcErrorsNumber;
	        }
	        if (index < 0) {
	            throw sR().Exp_NotSupported;
	        }
	        var procedure = builtinProcedure[index];
	        return procedure(start, end);
	    }
	
	    function dt_days(startDate, endDate) {
	        var startDateDoubleValue = {value: 0};
	        if (!_tryToDouble(startDate, startDateDoubleValue)) {
	            return CalcErrorsValue;
	        }
	        var endDateDoubleValue = {value: 0};
	        if (!_tryToDouble(endDate, endDateDoubleValue)) {
	            return CalcErrorsValue;
	        }
	        var DaysBetween1900And10000 = 2958465;
	
	        function IsDateValid(days) {
	            return days >= 0.0 && days < (DaysBetween1900And10000 + 1);
	        }
	
	        if (!IsDateValid(startDateDoubleValue.value) || !IsDateValid(endDateDoubleValue.value)) {
	            return CalcErrorsNumber;
	        }
	        return startDateDoubleValue.value - endDateDoubleValue.value;
	    }
	
	    function dt_isoweeknum(date) {
	        if (isNaN(date)) {
	            return CalcErrorsNumber;
	        }
	
	        function getFirstMondayOfISOYear(isoYear) {
	            var time = new Date(isoYear, 0, 4);
	            var dayOfWeek = time.getDay();
	            if (dayOfWeek === 0) {
	                dayOfWeek = 7;
	            }
	            time.setDate(time.getDate() + 1 - dayOfWeek);
	            return time;
	        }
	
	        var lotusErrorDate = new Date(1900, 1, 28);
	        if (date.getTime() <= lotusErrorDate.getTime()) {
	            date.setDate(date.getDate() - 1);
	        }
	        var year;
	        if ((year = date.getFullYear()) === 1900) {
	            year += 400;
	        } else if (year === 9999) {
	            year -= 400;
	        }
	        date.setYear(year);
	
	        if (date.getTime() < new Date(year, 11, 29).getTime()) {
	            year--;
	        }
	        var firstMondayOfISOYear = getFirstMondayOfISOYear(year + 1);
	        if (date.getTime() < firstMondayOfISOYear.getTime()) {
	            firstMondayOfISOYear = getFirstMondayOfISOYear(year);
	        }
	        return parseInt((date.getTime() - firstMondayOfISOYear.getTime()) / (24 * 60 * 60 * 1000) / 7) + 1;
	    }
	
	   
	
	   
	    function addCommas(value) {
	        var str = value.toString(), prefix = '', i, result = [];
	        if (value < 0) {
	            str = str.substr(1);
	            prefix = '-';
	        }
	        var splits = str.split('.'), splitsLength = arrayHelper_getLength(splits);
	        if (splitsLength < 1 || splitsLength > 2) {
	            return CalcErrorsValue;
	        }
	        if (splitsLength === 2) {
	            result.push(splits[1]);
	            result.push('.');
	        }
	        str = splits[0];
	        for (i = arrayHelper_getLength(str) - 3; i >= 0; i -= 3) {
	            result.push(str.substr(i, 3));
	            i > 0 && result.push(',');
	        }
	        result.push(str.substring(0, i + 3));
	        result.reverse();
	        return prefix + result.join('');
	    }
	
	    function concatText(args, flag) {
	       
	        var sb = [], i, j, length = arrayHelper_getLength(args);
	        for (i = 0; i < length; i++) {
	            var array = args[i], len = arrayHelper_getLength(array);
	            if (len === 0 && flag === "concat") {
	                return CalcErrorsNull;
	            }
	            for (j = 0; j < len; j++) {
	                if (!isNullOrUndefined(array[j])) {
	                    sb.push(CalcConvert_toString(array[j]));
	                }
	            }
	        }
	        return sb.join('');
	    }
	
	    function determineType(character) {
	        var charUniCode = character.charCodeAt(0);
	
	       
	       
	
	       
	       
	       
	       
	
	        if ((charUniCode >= 0x0 && charUniCode < 0x81) || (charUniCode === 0xf8f0) || (charUniCode >= 0xff61 && charUniCode < 0xffa0) || (charUniCode >= 0xf8f1 && charUniCode < 0xf8f4)) {
	            return "singleByte";
	        } else if (charUniCode >= 0xd800 && charUniCode <= 0xdfff) {
	            return "fourByte";
	        }
	        return "doubleByte";
	    }
	
	    function tx_left_right(isLeftFormula, text, numChars) {
	        var newText = [], flag = 0;
	        for (var i = 0; i < text.length; i++) {
	            var byte = determineType(text[i]);
	            if (byte === "fourByte") {
	                if (flag === 0) {
	                    flag++;
	                    continue;
	                } else {
	                    flag = 0;
	                    newText.push(text[i - 1] + text[i]);
	                }
	            } else {
	                newText.push(text[i]);
	            }
	        }
	        if (numChars >= newText.length) {
	            return text;
	        }
	        return newText.splice(isLeftFormula ? 0 : newText.length - numChars, numChars).join('');
	    }
	
	    function tx_clean(text) {
	        var sb = [], i, ch;
	        for (i = 0; i < arrayHelper_getLength(text); i++) {
	            ch = text.charCodeAt(i);
	            if (!(0x0 <= ch && ch <= 0x1F || 0x7F === ch || 0x80 <= ch && ch <= 0x9F)) {
	                sb.push(text[i]);
	            }
	        }
	        return sb.join('');
	    }
	
	    function tx_trim(text) {
	        text = text.trim();
	        var str = [], bAddWhiteSp = true, i;
	        for (i = 0; i < arrayHelper_getLength(text); i++) {
	            var ch = text.charAt(i), isChWhiteSpace = ch === ' ' || ch === '\t' || ch === '\n';
	            if (!isChWhiteSpace || bAddWhiteSp) {
	                str.push(ch);
	            }
	            bAddWhiteSp = !isChWhiteSpace;
	        }
	        return str.join('');
	    }
	
	    function tx_dollar(number, decimals) {
	        function toCurrency(value) {
	            var commasValue = addCommas(value), result = [];
	            if (value < 0) {
	                commasValue = commasValue.substr(1);
	            }
	            result.push('$');
	            result.push(commasValue);
	            if (value < 0) {
	                result.push(')');
	                result.unshift('(');
	            }
	            return result.join('');
	        }
	
	        number = CalcConvert_toDouble(mt_round(number, decimals));
	        return toCurrency(number);
	    }
	
	    function tx_fixed(number, decimals, noCommas) {
	        var divisor = 0;
	        if (decimals < 0) {
	            divisor = CalcConvert_toInt(Math_pow(10, Math_abs(decimals)));
	            number /= divisor;
	        }
	        number = CalcConvert_toDouble(mt_round(number, Math_max(0, decimals)));
	        if (decimals < 0) {
	            number *= divisor;
	        }
	        var result = noCommas ? number.toString() : addCommas(number);
	       
	       
	        if (decimals > 0) {
	            var indexOfDot = result.indexOf('.');
	            if (indexOfDot === -1) {
	                result += '.';
	                for (var i = 0; i < decimals; i++) {
	                    result += '0';
	                }
	            } else {
	                var d2 = result.length - (indexOfDot + 1);
	                for (var j = d2; j < decimals; j++) {
	                    result += '0';
	                }
	            }
	        }
	        return result;
	    }
	
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	
	    function tx_text(value, format) {
	        if (format === '') {
	            return CalcConvert_toString(value);
	        }
	        if (isNullOrUndefined(value)) {
	            value = 0;
	        }
	       
	        try {
	            var Formatter = __webpack_require__(4);
	            var GeneralFormatter = Formatter && Formatter.GeneralFormatter;
	            if (GeneralFormatter) {
	               
	               
	               
	               
	               
	               
	               
	               
	                var formatter = new GeneralFormatter(format);
	               
	               
	               
	               
	               
	               
	                return formatter.format(value);
	            }
	            return value.toString();
	        } catch (err) {
	            return CalcErrorsValue;
	        }
	    }
	
	    function tx_value(text) {
	        if (!text) {
	            return 0;
	        }
	        var temp = parseLocale(text), result;
	        if (!isNullOrUndefined(temp)) {
	            result = toOADate(temp);
	            return CalcConvert_isError(result) ? dt_timevalue(temp) : result;
	        }
	        return parseFlotByBrowser(text);
	    }
	
	    function parseFlotByBrowser(text) {
	        var cultureOption = Common.CultureManager._getCultureInfo().NumberFormat, isDigit = Calc.isDigit;
	        if (text[0] === '$' || text[0] === cultureOption.currencySymbol) {
	            text = text.substring(1);
	        }
	        var temp = parseFloatFunc(text);
	        var positiveNum = isDigit(text[0].charCodeAt(0)) ,
	            negateNum = (text[0].charCodeAt(0) === 45) && isDigit(text[1].charCodeAt(0));
	                var positiveCondition = !text || isNaNFunc(temp) || !positiveNum && text[0] !== '.',
	            negateCondition = !text || isNaNFunc(temp) || !negateNum && text[0] !== '-' && text[1] !== '.';
	        if (positiveCondition && negateCondition) {
	            return CalcErrorsValue;
	        }
	        if (text[0] === '.' || (text[0] === '-' && text[1] === '.')) {
	            if (text[0] === '-') {
	                text.replace(text[1], '0.');
	            } else {
	                text = '0' + text;
	            }
	        }
	        var length = text.length;
	        var currentCharIndex = 0, currentChar;
	        var lastNumberGroupIndex = 0, lastNumberSeparatorIndex = 0;
	        for (; currentCharIndex < length; currentCharIndex++) {
	            currentChar = text[currentCharIndex];
	            while (currentCharIndex < length && isDigit(currentChar.charCodeAt(0))) {
	                currentCharIndex++;
	                currentChar = text[currentCharIndex];
	            }
	            if (currentCharIndex === length) {
	                if (lastNumberGroupIndex && currentCharIndex - lastNumberGroupIndex <= 3) {
	                    return CalcErrorsValue;
	                }
	                break;
	            }
	            if (currentChar === cultureOption.numberGroupSeparator) {
	                if (lastNumberSeparatorIndex
	                    || lastNumberGroupIndex && currentCharIndex - lastNumberGroupIndex <= 3) {
	                    return CalcErrorsValue;
	                }
	                lastNumberGroupIndex = currentCharIndex;
	            } else if (currentChar === cultureOption.numberDecimalSeparator) {
	                if (lastNumberSeparatorIndex
	                    || lastNumberGroupIndex && currentCharIndex - lastNumberGroupIndex <= 3) {
	                    return CalcErrorsValue;
	                }
	                lastNumberSeparatorIndex = currentCharIndex;
	            }
	        }
	        text = stringHelper._replace(text, ',', '');
	        return parseFloatFunc(text);
	    }
	
	    function tx_lower(text) {
	        return text.toLowerCase();
	    }
	
	    function tx_upper(text) {
	        return text.toUpperCase();
	    }
	
	    function tx_proper(text) {
	        var textLen = arrayHelper_getLength(text), ret = [];
	        if (textLen > 0) {
	            var upperCaseText = text.toUpperCase(), lowerCaseText = text.toLowerCase(), index = 1;
	            ret[0] = upperCaseText[0];
	            while (index < textLen) {
	                ret[index] = Calc._isLetter(text[index - 1]) ? lowerCaseText[index] : upperCaseText[index];
	                index++;
	            }
	        }
	        return ret.join('');
	    }
	
	    function tx_char(number) {
	        return String.fromCharCode(number);
	    }
	
	    function tx_code(text) {
	        return text[0].charCodeAt(0);
	    }
	
	    function tx_replace(oldText, start, length, newText) {
	        var oldTextLength = arrayHelper_getLength(oldText);
	        start = Math_min(start, oldTextLength + 1);
	        length = Math_min(length || 0, oldTextLength - start + 1);
	        var before = oldText.substring(0, start - 1);
	        var after = oldText.substr(start - 1 + length);
	        return before.concat(newText).concat(after);
	    }
	
	    function tx_replaceB(oldText, start, length, newText) {
	        if (isJCKCulture() || Calc.usedbcs ) {
	            var offsetArr = [], t;
	            var offset = 0;
	            for (var i = 0; i < oldText.length; i++) {
	                t = oldText[i];
	                var byte = determineType(oldText[i]);
	                if (byte === 'doubleByte') {
	                    offset++;
	                    t = oldText[i];
	                }
	                offsetArr[i + offset] = t;
	            }
	            var oldTextLength = offsetArr.length;
	            start = Math_min(start, oldTextLength + 1);
	            length = Math_min(length || 0, oldTextLength - start + 1);
	            if (isNullOrUndefined(offsetArr[start - 1])) {
	                offsetArr[start - 1] = ' ';
	                offsetArr[start] = ' ';
	            } else if (isNullOrUndefined(offsetArr[start - 2]) && start >= 2) {
	                offsetArr[start - 2] = ' ';
	                offsetArr[start - 1] = ' ';
	            }
	            var before = offsetArr.slice(0, start - 1).join('');
	            var after = offsetArr.slice(start - 1 + length).join('');
	            return before.concat(newText).concat(after);
	        }
	        return tx_replace(oldText, start, length, newText);
	    }
	
	    function tx_substitute(searchtext, oldtext, newtext, instanceNum) {
	        var result, oldtextLength = arrayHelper_getLength(oldtext);
	        if (arrayHelper_getLength(arguments) > 3) {
	            var inst = CalcConvert_toInt(instanceNum), index = 0, i;
	            if (inst < 1) {
	                return CalcErrorsValue;
	            }
	            for (i = 0; i < inst; i++) {
	                index = searchtext.indexOf(oldtext, index);
	                if (index === -1) {
	                    return searchtext;
	                }
	                index += oldtextLength;
	            }
	            var before = searchtext.substring(0, index - oldtextLength);
	            var after = searchtext.substr(index);
	            result = before.concat(newtext).concat(after);
	        } else {
	            result = stringHelper._join(searchtext, oldtext, newtext);
	        }
	        return result;
	    }
	
	    function tx_concatenate() {
	        return concatText(arguments, "concatenate");
	    }
	
	    function tx_concat() {
	        return concatText(arguments, "concat");
	    }
	
	    function tx_textjoin(splitStr, ignoreEmptyArg) {
	        if (splitStr.isReference && splitStr.length === 0) {
	            return CalcErrorsNull;
	        }
	        var boolValue = {value: false}, ignoreEmpty = isNullOrUndefined(ignoreEmptyArg[0]) ? true : ignoreEmptyArg[0];
	        if (_tryToBool(ignoreEmpty, boolValue)) {
	            ignoreEmpty = boolValue.value;
	        } else {
	            return CalcErrorsValue;
	        }
	        var args = arguments;
	        var texts = [], delimiters = [], length = arrayHelper_getLength(args);
	        for (var i = 2; i < length; i++) {
	            processParameter(texts, args[i], ignoreEmpty);
	        }
	        processParameter(delimiters, args[0], false);
	        return textJoin(texts, delimiters);
	    }
	
	    function processParameter(result, array, ignoreEmpty) {
	        var len = arrayHelper_getLength(array);
	        if (len === 0) {
	            return CalcErrorsNull;
	        }
	        for (var i = 0; i < len; i++) {
	            if (!isNullOrUndefined(array[i]) && array[i] !== '') {
	                result.push(CalcConvert_toString(array[i]));
	            } else if (!ignoreEmpty) {
	                result.push("");
	            }
	        }
	    }
	
	    function textJoin(texts, delimiters) {
	        if (texts.length === 0) {
	            return '';
	        }
	        if (delimiters.length === 1) {
	            return texts.join(delimiters[0]);
	        }
	        var text = texts[0], i, j;
	        for (i = 1, j = 0; i < texts.length; i++, j++) {
	            if (j === delimiters.length) {
	                j = 0;
	            }
	            text += delimiters[j] + texts[i];
	        }
	        return text;
	    }
	
	
	        function tx_left(text, numChars) {
	        return tx_left_right(true, text, numChars);
	    }
	
	    function tx_right(text, numChars) {
	        return tx_left_right(false, text, numChars);
	    }
	
	    function tx_leftB_rightB(isLeftFormula, text, numChars) {
	        if (isJCKCulture() || Calc.usedbcs ) {
	            var offsetArr = [], t, flag = 0, i;
	            var offset = 0;
	            for (i = 0; i < text.length; i++) {
	                t = text[i];
	                var byte = determineType(text[i]);
	                if (byte === 'fourByte') {
	                    if (flag % 2 === 0) {
	                        flag++;
	                        continue;
	                    } else {
	                        flag++;
	                        t = text[i - 1] + text[i];
	                    }
	                    offsetArr[offsetArr.length] = t;
	                } else {
	                    if (byte === 'doubleByte') {
	                        offset++;
	                        t = text[i];
	                    }
	                    var pos = flag > 0 ? (flag / 2) : 0;
	                    offsetArr[i - pos + offset] = t;
	                }
	            }
	            if (!isLeftFormula) {
	                offsetArr = reverseMultiByteArray(offsetArr);
	            }
	            var lengthB = offsetArr.length;
	            if (numChars >= lengthB) {
	                return text;
	            }
	            var result;
	            if (isLeftFormula) {
	                result = offsetArr.slice(0, (numChars - 1) < 0 ? 0 : numChars);
	                if (result.length > 0 && isNullOrUndefined(result[result.length - 1])) {
	                    result[result.length - 1] = '\u200b';
	                }
	            } else {
	                result = offsetArr.slice(lengthB - numChars);
	                if (result.length > 0 && isNullOrUndefined(result[0])) {
	                    result[0] = '\u200b';
	                }
	            }
	            return result.join('');
	        }
	        return tx_left_right(isLeftFormula, text, numChars);
	    }
	
	    function tx_leftB(text, numChars) {
	        return tx_leftB_rightB(true, text, numChars);
	    }
	
	    function tx_rightB(text, numChars) {
	        return tx_leftB_rightB(false, text, numChars);
	    }
	
	    function tx_mid(text, start, length) {
	        start--;
	        var textLength = arrayHelper_getLength(text);
	        if (start >= textLength) {
	            return '';
	        } else if (textLength < start + length) {
	            return text.substr(start);
	        }
	        return text.substr(start, length);
	    }
	
	    function reverseMultiByteArray(array) {
	        var reverseArr = [];
	        for (var i = 0; i < array.length; i++) {
	            if (isNullOrUndefined(array[i])) {
	                reverseArr[i] = array[i + 1];
	                i++;
	            } else {
	                reverseArr[i] = array[i];
	            }
	        }
	        if (reverseArr.length === array.length - 1) {
	            reverseArr[reverseArr.length] = keyword_undefined;
	        }
	        return reverseArr;
	    }
	
	    function convertMultiByteTextToArray(text) {
	        var offsetArr = [], t, flag = 0, i;
	        var offset = 0;
	        for (i = 0; i < text.length; i++) {
	            t = text[i];
	            var byte = determineType(text[i]);
	            if (byte === 'doubleByte' || byte === 'fourByte') {
	                if (byte === 'fourByte') {
	                    if (flag % 2 === 0) {
	                        flag++;
	                        continue;
	                    } else {
	                        offset++;
	                        flag++;
	                        t = text[i - 1] + text[i];
	                    }
	                } else {
	                    offset++;
	                    t = text[i];
	                }
	            }
	            var pos = flag > 0 ? (flag / 2) : 0;
	            offsetArr[i - pos + offset] = t;
	        }
	        return reverseMultiByteArray(offsetArr);
	    }
	
	    function tx_midB(text, start, length) {
	        if (isJCKCulture() || Calc.usedbcs ) {
	            var offsetArr = convertMultiByteTextToArray(text);
	            var textLength = offsetArr.length;
	            start--;
	            if (start < 0) {
	                return CalcErrorsValue;
	            }
	            if (start >= textLength) {
	                return '';
	            } else if (textLength < start + length) {
	                return offsetArr.slice(start).join('');
	            }
	            var result = offsetArr.slice(start, start + length);
	            if (determineType(result[result.length - 1]) !== 'singleByte') {
	                result[result.length - 1] = '\u200b'; 
	                if (isNullOrUndefined(result[0])) {
	                    result[result.length] = '\u200b';
	                }
	            }
	            return result.join('');
	        }
	        return tx_mid(text, start, length);
	    }
	
	    function tx_rept(text, count) {
	        var result = [], i;
	        if (count < 0 || count * arrayHelper_getLength(text) > 32767) {
	            return CalcErrorsValue;
	        }
	        for (i = 0; i < count; i++) {
	            result.push(text);
	        }
	        return result.join('');
	    }
	
	    function tx_len(text) {
	        return text ? text.length : 0;
	    }
	
	    function isJCKCulture() {
	        var cultureInfo = Common.CultureManager._getCultureInfo();
	        if (cultureInfo.isJCKCulture) {
	            return true;
	        }
	        return false;
	    }
	
	    function tx_lenB(text) {
	        if (!text) {
	            return 0;
	        }
	        if (isJCKCulture() || Calc.usedbcs ) {
	            var offset = 0;
	            for (var i = 0; i < text.length; i++) {
	                if (text[i].charCodeAt(0) === 0x200b) {
	                    continue;
	                }
	                var byte = determineType(text[i]);
	                var cultureInfo = Common.CultureManager._getCultureInfo();
	                if (byte === 'doubleByte' && (text[i].charCodeAt(0) !== 0x24ae )) {
	                    if ((cultureInfo && cultureInfo.name().toLocaleLowerCase()) === 'ja-jp' && (text[i].charCodeAt(0) === 0x2c7 || text[i].charCodeAt(0) === 0x248c || text[i].charCodeAt(0) === 0x2014) ) {
	                        continue;
	                    }
	                    offset++;
	                }
	            }
	            return text.length + offset;
	        }
	        return text.length;
	    }
	
	    function tx_find(searchtext, text, start) {
	        if (start < 1 || arrayHelper_getLength(text) < start) {
	            return CalcErrorsValue;
	        }
	        var found = text.indexOf(searchtext, start - 1);
	        return found === -1 ? CalcErrorsValue : found + 1;
	    }
	
	    function tx_findB(searchtext, text, start) {
	        if (isJCKCulture() || Calc.usedbcs ) {
	            var offsetArr = convertMultiByteTextToArray(text);
	            var searchArr = convertMultiByteTextToArray(searchtext);
	            var lengthB = offsetArr.length;
	            if (start < 1 || lengthB < start) {
	                return CalcErrorsValue;
	            }
	            var offsetText = replaceBlankCharter(offsetArr);
	            var searchText1 = replaceBlankCharter(searchArr);
	            var found = offsetText.indexOf(searchText1, start - 1);
	            return found === -1 ? CalcErrorsValue : found + 1;
	        }
	        return tx_find(searchtext, text, start);
	    }
	
	    function tx_search(searchtext, text, startIndex) {
	        var index = -1, wildcardCriteria, matchStr;
	        wildcardCriteria = RegexHelper._getWildcardCriteria(searchtext);
	        if (wildcardCriteria) {
	            matchStr = RegexHelper._getRegIgnoreCase(wildcardCriteria).exec(text);
	            index = isNullOrUndefined(matchStr) ? -1 : matchStr.index;
	        } else {
	            index = text.toLowerCase().indexOf(searchtext.toLowerCase(), --startIndex);
	        }
	        if (index === -1) {
	            return CalcErrorsValue;
	        }
	        return index + 1;
	    }
	
	    function replaceBlankCharter(text, allReplace) {
	        var i;
	        if (allReplace) {
	            for (i = 0; i < text.length; i++) {
	                if (isNullOrUndefined(text[i])) {
	                    text[i] = '\u200b';
	                }
	            }
	            return text;
	        }
	        for (i = 0; i < text.length; i++) {
	            if (isNullOrUndefined(text[i]) && (text[i - 1] && text[i - 1].length !== 2)) {
	                text[i] = '\u200b';
	            }
	        }
	        return text.join('');
	    }
	
	    function tx_searchB(searchtext, text, startIndex) {
	        if (isJCKCulture() || Calc.usedbcs ) {
	            var offsetArr = convertMultiByteTextToArray(text);
	            var searchArr = convertMultiByteTextToArray(searchtext);
	            var lengthB = offsetArr.length;
	            if (startIndex < 1 || lengthB < startIndex) {
	                return CalcErrorsValue;
	            }
	            var index = tx_search(replaceBlankCharter(searchArr), replaceBlankCharter(offsetArr), startIndex);
	            if (index === CalcErrorsValue) {
	                return CalcErrorsValue;
	            }
	            return index;
	        }
	        return tx_search(searchtext, text, startIndex);
	    }
	
	    function tx_exact(text1, text2) {
	        return text1 === text2;
	    }
	
	    function tx_t(value) {
	        return isString(value) ? value : '';
	    }
	
	    function tx_unichar(value) {
	        if (value) {
	            var number = value;
	            if (number <= 0 || number > 0x10FFFF) {
	                return CalcErrorsValue;
	            }
	            if (number >= 0xD800 && number <= 0xDFFF) {
	                return CalcErrorsNotAvailable;
	            }
	            if (number < 0x100000) {
	                return String.fromCharCode(number);
	            }
	            number -= 0x100000;
	            return String.fromCharCode(((number >> 10) + 0xD800), ((number & 1023) + 0xDC00));
	        }
	        return CalcErrorsValue;
	    }
	
	    function tx_unicode(value) {
	        var text = CalcConvert_toString(value);
	        if (text === "" || text === null) {
	            return CalcErrorsValue;
	        }
	        var ch;
	        if ((ch = text.charCodeAt(0)) >= 0xD800 && ch <= 0xDBFF) {
	            if (text.length === 1) {
	                return CalcErrorsValue;
	            }
	            var nextChar;
	            if ((nextChar = text.charCodeAt(1)) >= 0xDC00 && nextChar <= 0xDFFF) {
	                return ch | nextChar << 8;
	            }
	            return 1;
	        }
	        if (ch >= 0xDC00 && ch <= 0xDFFF) {
	            return ch - 0xd000 + 0xd000;
	        }
	        return ch;
	    }
	
	    function tx_bahttext(value) {
	        function ConvertNumber(intVal) {
	           
	           
	           
	
	            var SCALE_TH = ["\u0e25\u0e49\u0e32\u0e19", "\u0e2a\u0e34\u0e1a", "\u0e23\u0e49\u0e2d\u0e22", "\u0e1e\u0e31\u0e19", "\u0e2b\u0e21\u0e37\u0e48\u0e19", "\u0e41\u0e2a\u0e19", ""];
	            var DIGIT_TH = ["\u0e28\u0e39\u0e19\u0e22\u0e4c", "\u0e2b\u0e19\u0e36\u0e48\u0e07", "\u0e2a\u0e2d\u0e07", "\u0e2a\u0e32\u0e21", "\u0e2a\u0e35\u0e48", "\u0e2b\u0e49\u0e32", "\u0e2b\u0e01", "\u0e40\u0e08\u0e47\u0e14", "\u0e41\u0e1b\u0e14", "\u0e40\u0e01\u0e49\u0e32"];
	            var SYMBOLS_TH = ["\u0e25\u0e1a", "\u0e1a\u0e32\u0e17", "\u0e16\u0e49\u0e27\u0e19", "\u0e2a\u0e15\u0e32\u0e07\u0e04\u0e4c", "\u0e22\u0e35\u0e48", "\u0e40\u0e2d\u0e47\u0e14", ",", " ", "\u0e3f"];
	
	            var buffer = '';
	            var digits = intVal + '';
	            var digitLength = digits.length;
	            for (var index = digitLength; index > 0; --index) {
	                var digit = parseInt(digits[digitLength - index]);
	                var digit_text = DIGIT_TH[digit];
	                var scale_idx = ((1 < index) ? ((index - 1) % 6) : 6);
	                if ((1 === scale_idx) && (2 === digit)) {
	                    digit_text = SYMBOLS_TH[4];
	                }
	                if (1 === digit) {
	                    switch (scale_idx) {
	                        case 0:
	                        case 6:
	                            buffer += ((index < digitLength) ? SYMBOLS_TH[5] : digit_text);
	                            break;
	                        case 1:
	                            break;
	                        default:
	                            buffer += (digit_text);
	                            break;
	                    }
	                } else if (0 === digit) {
	                    if (0 === scale_idx) {
	                        buffer += (SCALE_TH[scale_idx]);
	                    }
	                    continue;
	                } else {
	                    buffer += (digit_text);
	                }
	                buffer += (SCALE_TH[scale_idx]);
	            }
	            return buffer;
	        }
	
	        if (value) {
	            var integerPart = Math.abs(parseInt(value));
	            var decimalPart = parseFloat((Math.abs(value) - integerPart).toFixed(2));
	            if (integerPart !== 0) {
	                if (decimalPart === 0.0) {
	                    return ((value < 0.0 ? "\u0e25\u0e1a" : '') + ConvertNumber(integerPart) + "\u0e1a\u0e32\u0e17\u0e16\u0e49\u0e27\u0e19");
	                }
	                return ((value < 0.0 ? "\u0e25\u0e1a" : '') + ConvertNumber(integerPart) + "\u0e1a\u0e32\u0e17" + ConvertNumber(decimalPart * 100) + "\u0e2a\u0e15\u0e32\u0e07\u0e04\u0e4c");
	            } else if (decimalPart !== 0.0) {
	                return ((value < 0.0 ? "\u0e25\u0e1a" : '') + ConvertNumber(decimalPart * 100) + "\u0e2a\u0e15\u0e32\u0e07\u0e04\u0e4c");
	            }
	            return "\u0e28\u0e39\u0e19\u0e22\u0e4c\u0e1a\u0e32\u0e17\u0e16\u0e49\u0e27\u0e19";
	        }
	        return CalcErrorsValue;
	    }
	
	   
	
	   
	    function in_isError(err) {
	        return CalcConvert_isError(err);
	    }
	
	    function in_isErr(err) {
	        return CalcConvert_isError(err) ? err._code !== CalcErrorsNotAvailable._code : false;
	    }
	
	    function in_isNA(err) {
	        return CalcConvert_isError(err) ? err._code === CalcErrorsNotAvailable._code : false;
	    }
	
	    function in_error_Type(err) {
	        if (!isNullOrUndefined(err) && CalcConvert_isError(err)) {
	            var ret = inArray(err._code, [CalcErrorsNull._code, CalcErrorsDivideByZero._code, CalcErrorsValue._code,
	                CalcErrorsReference._code, CalcErrorsName._code, CalcErrorsNumber._code, CalcErrorsNotAvailable._code]);
	            if (ret >= 0) {
	                return ret + 1;
	            }
	        }
	        return CalcErrorsNotAvailable;
	    }
	
	    function in_isNumber(value) {
	        return CalcConvert_isNumber(value);
	    }
	
	    function in_isEven(value) {
	        return approxFloor(Math_abs(value)) % 2.0 === 0.0;
	    }
	
	    function in_isOdd(value) {
	        return approxFloor(Math_abs(value)) % 2.0 !== 0.0;
	    }
	
	    function in_number(value) {
	        if (CalcConvert_isNumber(value)) {
	            return CalcConvert_toDouble(value);
	        } else if (isBoolean(value)) {
	            return value ? 1.0 : 0.0;
	        } else if (CalcConvert_isError(value)) {
	            return value;
	        }
	        return 0.0;
	    }
	
	    function in_isBlank(value) {
	        return isNullOrUndefined(value);
	    }
	
	    function in_isLogical(value) {
	        return isBoolean(value);
	    }
	
	    function in_isText(value) {
	        return isString(value);
	    }
	
	    function in_isNonText(value) {
	        return !isString(value);
	    }
	
	    function in_isRef(value) {
	        return CalcConvert_isReference(value);
	    }
	
	    function in_type(value) {
	        if (isBoolean(value)) {
	            return 4;
	        } else if (CalcConvert_isNumber(value)) {
	            return 1;
	        } else if (isString(value)) {
	            return 2;
	        } else if (CalcConvert_isError(value)) {
	            return 16;
	        } else if (CalcConvert_isArray(value)) {
	            return 64;
	        }
	        return CalcErrorsValue;
	    }
	
	    function in_na() {
	        return CalcErrorsNotAvailable;
	    }
	
	    function in_sheet(context, value) {
	        var i = 0;
	        var sheet = context.source._sheet;
	        if (CalcConvert_isArray(value)) {
	            return CalcErrorsNotAvailable;
	        }
	
	        var source = value && (value._source || value.references[0]._source) || context.source;
	        if (value instanceof CalcReference || isNullOrUndefined(value)) {
	            return sheet.parent.getSheetIndex(source._sheet.name()) + 1;
	        }
	
	        if (CalcConvert_isNumber(value) || isString(value)) {
	            for (i; i < sheet.parent.sheets.length; i++) {
	                if (value.toUpperCase() === sheet.parent.sheets[i].name().toUpperCase()) {
	                    return i + 1;
	                }
	            }
	        }
	
	        return CalcErrorsNotAvailable;
	    }
	
	    function in_sheets(context, value) {
	        var sheet = context.source._sheet;
	        if (CalcConvert_isArray(value) || CalcConvert_isNumber(value)) {
	            return CalcErrorsNotAvailable;
	        } else if (isString(value)) {
	            return CalcErrorsValue;
	        }
	
	        if (isNullOrUndefined(value)) {
	            return sheet.parent.sheets.length;
	        }
	
	        var source = value && (value._source || value.references) || context.source;
	        if (value instanceof CalcReference) {
	            return source.length || sheet.parent.getSheetIndex(source._sheet.name()) + 1;
	        }
	        return CalcErrorsNotAvailable;
	    }
	
	   
	    function defineAsyncRefreshFunction() {
	        var refreshFunction = new Calc.Functions.AsyncFunction('REFRESH', 1, 3, keyword_undefined);
	        refreshFunction.evaluate = asyc_refresh;
	        Calc.Functions._builtInFunctions['REFRESH'] = refreshFunction;
	       
	       
	       
	    }
	
	    function asyc_refresh(context, arg) {
	        return arg;
	    }
	
	
	    function isSurrogate(c) {
	        return ((c >= 0xd800) && (c <= 0xdfff));
	    }
	
	    function isSurrogatePair(highSurrogate, lowSurrogate) {
	        if ((highSurrogate < 0xd800) || (highSurrogate > 0xdbff)) {
	            return false;
	        }
	        return ((lowSurrogate >= 0xdc00) && (lowSurrogate <= 0xdfff));
	    }
	
	    function tx_encodeurl(text) {
	        var sb = '';
	        var end;
	        if ((end = text.length - 1) < 0) {
	            return '';
	        }
	        for (var i = 0; i <= end; i++) {
	            var c = text.charCodeAt(i);
	            if ((((c >= 'A'.charCodeAt(0)) && (c <= 'Z'.charCodeAt(0))) || ((c >= '0'.charCodeAt(0)) && (c <= '9'.charCodeAt(0)))) || (((c >= 'a'.charCodeAt(0))
	                && (c <= 'z'.charCodeAt(0))) || (((c === '-'.charCodeAt(0)) || (c === '_'.charCodeAt(0))) || (c === '.'.charCodeAt(0))))) {
	                sb += text[i];
	            } else {
	                var bytes;
	                if (isSurrogate(c)) {
	                    if (end === i || !isSurrogatePair(c, text.charCodeAt(i + 1))) {
	                        return null;
	                    }
	                    bytes = [c, text.charCodeAt(i + 1)];
	                    i++;
	                } else {
	                    bytes = [c];
	                }
	                for (var j = 0; j < bytes.length; j++) {
	                    sb += ('%');
	                    sb += (bytes[j].toString(16).toUpperCase());
	                }
	            }
	        }
	        return sb;
	    }
	
	
	   
	   
	    var doubleArgDefaultValue = {_argType: 0 },
	        doubleArgDefaultValue1 = {
	            _argType: 0 ,
	            _argCondition: '= 0',
	            _conditionErrorValue: CalcErrorsDivideByZero
	        },
	        doubleArgDefaultValue2 = {_argType: 0 , _argCondition: '= 0', _conditionErrorValue: 0},
	        doubleArgDefaultValue3 = {
	            _defaultValue: 1,
	            _argType: 0 ,
	            _argCondition: '= 0',
	            _conditionErrorValue: 0
	        },
	        stringIntArgDefaultValue4 = {_argType: 2, _argCondition: '< 0'},
	        doubleArgDefaultValue5 = {_argType: 0 , _argCondition: ['> 134217728', '< -134217728']},
	        floatArgDefaultValue = {_argType: 1 },
	        floatArgDefaultValue1 = {_argType: 1 , _argCondition: '< 0'},
	        stringIntArgDefaultValue = {_argType: 2 },
	        stringIntArgDefaultValue2 = {_defaultValue: 1, _argType: 2 },
	        stringIntArgDefaultValue3 = {
	            _defaultValue: 1,
	            _argType: 2 ,
	            _argCondition: '< 0',
	            _conditionErrorValue: CalcErrorsValue
	        },
	        stringArgDefaultValue = {_argType: 5 }, dateTimeArgTypeObj = {_argType: 6 },
	        stringArgDefaultValue1 = {
	            _argType: 2 ,
	            _argCondition: '< 0',
	            _conditionErrorValue: CalcErrorsValue
	        },
	        arrayArgDefaultValue = {
	            _defaultValue: [],
	            _argType: 4 ,
	            _valueType: 4 ,
	            _toOneDimension: true,
	            _breakOnError: true,
	            _breakOnConvertError: true
	        },
	        arrayArgDefaultValue1 = {
	            _argType: 4 ,
	            _valueType: 1 ,
	            _toOneDimension: true,
	            _breakOnError: true
	        },
	        arrayArgDefaultValue2 = {
	            _argType: 4 ,
	            _valueType: 1 ,
	            _breakOnError: true,
	            _breakOnConvertError: true
	        },
	        arrayArgDefaultValue3 = {
	            _argType: 4 ,
	            _valueType: 1 ,
	            _toOneDimension: true,
	            _breakOnError: true,
	            _isAllArgsSameLimit: true
	        },
	        arrayArgDefaultValue4 = {
	            _argType: 4 ,
	            _valueType: 3 ,
	            _toOneDimension: true,
	            _breakOnError: true,
	            _isAllArgsSameLimit: true
	        };
	
	   
	    defineBuiltInFunction('ABS', mt_abs, 1, 1, doubleArgDefaultValue);
	    defineBuiltInFunction('ACOS', mt_acos, 1, 1, {_argType: 0 , _argCondition: ['> 1', '< -1']});
	    defineBuiltInFunction('ACOT', mt_acot, 1, 1, doubleArgDefaultValue);
	    defineBuiltInFunction('ASIN', mt_asin, 1, 1, {_argType: 0 , _argCondition: ['> 1', '< -1']});
	    defineBuiltInFunction('ATAN', mt_atan, 1, 1, doubleArgDefaultValue);
	    defineBuiltInFunction('ATAN2', mt_atan2, 2, 2, [doubleArgDefaultValue, doubleArgDefaultValue]);
	    defineBuiltInFunction('COS', mt_cos, 1, 1, doubleArgDefaultValue);
	    defineBuiltInFunction('SEC', mt_sec, 1, 1, doubleArgDefaultValue5);
	    defineBuiltInFunction('CEILING', mt_ceiling, 2, 2, [doubleArgDefaultValue2, doubleArgDefaultValue2]);
	    defineBuiltInFunction('ODD', mt_odd, 1, 1, floatArgDefaultValue);
	    defineBuiltInFunction('EVEN', mt_even, 1, 1, floatArgDefaultValue);
	    defineBuiltInFunction('FLOOR', mt_floor, 2, 2, [doubleArgDefaultValue2, doubleArgDefaultValue2]);
	    defineBuiltInFunction('LN', mt_ln, 1, 1, {_argType: 1 , _argCondition: '<= 0'});
	    defineBuiltInFunction('SQRT', mt_sqrt, 1, 1, {_argType: 1 , _argCondition: '< 0'});
	    defineBuiltInFunction('SIN', mt_sin, 1, 1, doubleArgDefaultValue);
	    defineBuiltInFunction('CSC', mt_csc, 1, 1, doubleArgDefaultValue5);
	    defineBuiltInFunction('TAN', mt_tan, 1, 1, doubleArgDefaultValue);
	    defineBuiltInFunction('COT', mt_cot, 1, 1, doubleArgDefaultValue5);
	    defineBuiltInFunction('SIGN', mt_sign, 1, 1,
	        {_argType: 1 , _argCondition: '> 0', _conditionErrorValue: 1});
	    defineBuiltInFunction('GCD', mt_gcd, 1, keyword_undefined,
	        arrayArgDefaultValue3, -1 , -1 );
	    defineBuiltInFunction('LCM', mt_lcm, 1, keyword_undefined,
	        arrayArgDefaultValue3, -1 , -1 );
	    defineBuiltInFunction('PRODUCT', mt_product, 1, keyword_undefined, keyword_undefined, -1 , -1 );
	    defineBuiltInFunction('POWER', mt_power, 2, 2, [floatArgDefaultValue, floatArgDefaultValue]);
	    defineBuiltInFunction('MOD', mt_mod, 2, 2, [floatArgDefaultValue,
	        {_argType: 1 , _argCondition: '= 0', _conditionErrorValue: CalcErrorsDivideByZero}]);
	    defineBuiltInFunction('QUOTIENT', mt_quotient, 2, 2,
	        [doubleArgDefaultValue, doubleArgDefaultValue1],
	        keyword_undefined, keyword_undefined);
	    defineBuiltInFunction('SUBTOTAL', mt_subtotal, 2, keyword_undefined, stringIntArgDefaultValue, '!= 0', '!= 0');
	    defineBuiltInFunction('INT', mt_int, 1, 1, floatArgDefaultValue);
	    defineBuiltInFunction('MROUND', mt_mround, 2, 2, [doubleArgDefaultValue2, doubleArgDefaultValue2]);
	    defineBuiltInFunction('ROUND', mt_round, 2, 2, [doubleArgDefaultValue, stringIntArgDefaultValue]);
	    defineBuiltInFunction('ROUNDDOWN', mt_roundDownTrunc, 2, 2, [doubleArgDefaultValue, stringIntArgDefaultValue]);
	    defineBuiltInFunction('ROUNDUP', mt_roundUp, 2, 2, [doubleArgDefaultValue, stringIntArgDefaultValue]);
	    defineBuiltInFunction('TRUNC', mt_roundDownTrunc, 1, 2,
	        [doubleArgDefaultValue, {_defaultValue: 0, _argType: 2 }],
	        keyword_undefined, keyword_undefined, {_acceptsMissingArgument: 1});
	    defineBuiltInFunction('EXP', mt_exp, 1, 1, doubleArgDefaultValue);
	    defineBuiltInFunction('LOG', mt_log, 1, 2, [{_argType: 0 , _argCondition: '<= 0'},
	            {_defaultValue: 10, _argType: 0 , _argCondition: '<= 0'}],
	        keyword_undefined, keyword_undefined, {_acceptsMissingArgument: 1});
	    defineBuiltInFunction('LOG10', mt_log10, 1, 1, {_argType: 0 , _argCondition: '<= 0'});
	    defineBuiltInFunction('SUM', mt_sum, 1, keyword_undefined, keyword_undefined, -1 , -1 );
	    defineBuiltInFunction('SUMIF', mt_sumif, 2, 3, keyword_undefined, [0, 2], [0, 2], {_acceptsMissingArgument: 2});
	    defineBuiltInFunction('SUMIFS', mt_sumifs, 3, keyword_undefined, arrayArgDefaultValue1, [0, '%= 1'], [0, '%= 1']);
	    defineBuiltInFunction('SUMPRODUCT', mt_sumproduct, 1, keyword_undefined, keyword_undefined,
	        -1 , -1 , {_arrayArgumentEvaluateMode: 1 });
	    defineBuiltInFunction('SUMSQ', mt_sumsq, 1, keyword_undefined,
	        arrayArgDefaultValue3, -1 , -1 );
	    defineBuiltInFunction('SUMX2MY2', mt_sumx2my2, 2, 2,
	        arrayArgDefaultValue3, -1 , -1 );
	    defineBuiltInFunction('SUMX2PY2', mt_sumx2py2, 2, 2,
	        arrayArgDefaultValue3, -1 , -1 );
	    defineBuiltInFunction('SUMXMY2', mt_sumxmy2, 2, 2,
	        arrayArgDefaultValue3, -1 , -1 );
	    defineBuiltInFunction('SERIESSUM', mt_seriessum, 4, 4,
	        [doubleArgDefaultValue, stringIntArgDefaultValue, stringIntArgDefaultValue,
	            {
	                _argType: 4 ,
	                _valueType: 1 ,
	                _toOneDimension: true,
	                _breakOnError: true,
	                _breakOnConvertError: true
	            }], 3, 3);
	    defineBuiltInFunction('PI', mt_pi, 0, 0);
	    defineBuiltInFunction('SQRTPI', mt_sqrtpi, 1, 1, {_argType: 0 , _argCondition: '< 0'});
	    defineBuiltInFunction('DEGREES', mt_degrees, 1, 1, floatArgDefaultValue);
	    defineBuiltInFunction('RADIANS', mt_radians, 1, 1, doubleArgDefaultValue);
	    defineBuiltInFunction('COSH', mt_cosh, 1, 1, doubleArgDefaultValue);
	    defineBuiltInFunction('SECH', mt_sech, 1, 1, doubleArgDefaultValue);
	    defineBuiltInFunction('ACOSH', mt_acosh, 1, 1, {_argType: 0 , _argCondition: '< 0'});
	    defineBuiltInFunction('SINH', mt_sinh, 1, 1, doubleArgDefaultValue);
	    defineBuiltInFunction('CSCH', mt_csch, 1, 1, doubleArgDefaultValue);
	    defineBuiltInFunction('ASINH', mt_asinh, 1, 1, doubleArgDefaultValue);
	    defineBuiltInFunction('TANH', mt_tanh, 1, 1, doubleArgDefaultValue);
	    defineBuiltInFunction('COTH', mt_coth, 1, 1, {_argType: 0 });
	    defineBuiltInFunction('ATANH', mt_atanh, 1, 1, {
	        _argType: 0 ,
	        _argCondition: ['<= -1', '>= 1']
	    });
	    defineBuiltInFunction('ACOTH', mt_acoth, 1, 1, {
	        _argType: 0     });
	    defineBuiltInFunction('MDETERM', mt_mdeterm, 1, 1, arrayArgDefaultValue2, -1 , -1 );
	    defineBuiltInFunction('MINVERSE', mt_minverse, 1, 1, arrayArgDefaultValue2, -1 , -1 );
	    defineBuiltInFunction('MMULT', mt_mmult, 2, 2, [arrayArgDefaultValue2, arrayArgDefaultValue2], -1 , -1 );
	    defineBuiltInFunction('FACT', mt_fact, 1, 1,
	        {_argType: 3 , _argCondition: ['< 0', '> 170']});
	    defineBuiltInFunction('FACTDOUBLE', mt_factdouble, 1, 1,
	        {_argType: 3 , _argCondition: ['< 0', '> 300']});
	    defineBuiltInFunction('MULTINOMIAL', mt_multinomial, 1, keyword_undefined,
	        {
	            _argType: 4 ,
	            _valueType: 0 ,
	            _toOneDimension: true,
	            _breakOnError: true,
	            _isAllArgsSameLimit: true
	        }, -1 , -1 );
	    defineBuiltInFunction('RAND', mt_rand, 0, 0, keyword_undefined, keyword_undefined, keyword_undefined, {_isVolatile: true});
	    defineBuiltInFunction('RANDBETWEEN', mt_randbetween, 2, 2,
	        [stringIntArgDefaultValue, stringIntArgDefaultValue], keyword_undefined, keyword_undefined,
	        {_isVolatile: true});
	    defineBuiltInFunction('COMBIN', mt_combin, 2, 2, [floatArgDefaultValue1, floatArgDefaultValue1]);
	    defineBuiltInFunction('COMBINA', mt_combina, 2, 2, [stringIntArgDefaultValue4, stringIntArgDefaultValue4]);
	    defineBuiltInFunction('DECIMAL', mt_decimal, 2, 2, [{
	        _defaultValue: '0',
	        _argType: 5
	    }, {_argType: 0 , _argCondition: ['> 36', '< 2']}]);
	    defineBuiltInFunction('CEILING.MATH', mt_ceiling_math, 1, 3, [doubleArgDefaultValue, {
	        _argType: 0,
	        _defaultValue: 1
	    }, {_argType: 0, _defaultValue: 0}]);
	    defineBuiltInFunction('FLOOR.MATH', mt_floor_math, 1, 3, [doubleArgDefaultValue, {
	        _argType: 0,
	        _defaultValue: 1
	    }, {_argType: 0, _defaultValue: 0}]);
	    defineBuiltInFunction('BASE', mt_base, 2, 3, [{
	        _argType: 0,
	        _argCondition: ['< 0', '>= 9007199254740992']
	    }, {
	        _argType: 3,
	        _argCondition: ['> 36', '< 2']
	    }, {
	        _argType: 3 ,
	        _defaultValue: 0,
	        _argCondition: ['< 0', '>= 256']
	    }]);
	    defineBuiltInFunction('ROMAN', mt_roman, 1, 2,
	        [{_argType: 2 , _argCondition: ['< 0', '> 3999'], _conditionErrorValue: CalcErrorsValue},
	            {
	                _defaultValue: 0,
	                _argType: 2 ,
	                _argCondition: ['< 0', '> 4'],
	                _conditionErrorValue: CalcErrorsValue
	            }],
	        keyword_undefined, keyword_undefined, {_acceptsMissingArgument: 1});
	    defineBuiltInFunction('ARABIC', mt_arabic, 1, 1, stringArgDefaultValue);
	    defineBuiltInFunction('CEILING.PRECISE', mt_ceilingPrecise, 1, 2, [doubleArgDefaultValue2, doubleArgDefaultValue3]);
	    defineBuiltInFunction('ISO.CEILING', mt_ceilingPrecise, 1, 2, [doubleArgDefaultValue2, doubleArgDefaultValue3]);
	    defineBuiltInFunction('FLOOR.PRECISE', mt_floorPrecise, 1, 2, [doubleArgDefaultValue2, doubleArgDefaultValue3]);
	    defineBuiltInFunction('MAXIFS', mt_maxifs, 3, keyword_undefined, arrayArgDefaultValue1, [0, '%= 1'], [0, '%= 1']);
	    defineBuiltInFunction('MINIFS', mt_minifs, 3, keyword_undefined, arrayArgDefaultValue1, [0, '%= 1'], [0, '%= 1']);
	    defineBuiltInFunction('MUNIT', mt_munit, 1, 1, doubleArgDefaultValue);
	   
	   
	
	   
	    defineBuiltInFunction('AND', lg_and, 1, keyword_undefined,
	        arrayArgDefaultValue4, -1 , -1 );
	    defineBuiltInFunction('OR', lg_or, 1, keyword_undefined,
	        arrayArgDefaultValue4, -1 , -1 );
	    defineBuiltInFunction('NOT', lg_not, 1, 1);
	    defineBuiltInFunction('IF', lg_if, 2, 3, keyword_undefined, [1, 2], [1, 2], {
	        _acceptsError: [1, 2],
	        _acceptsMissingArgument: 2,
	        isBranch: true,
	        findTestArgument: 0,
	        findBranchArgument: function (test) {
	            if (CalcConvert._isError(test)) {
	                return -1;
	            }
	            var retValue = {value: false};
	            CalcConvert_tryToBool(test, retValue);
	            return retValue.value ? 1 : 2;
	        }
	    });
	    defineBuiltInFunction('IFERROR', lg_iferror, 2, 2, keyword_undefined, 0, keyword_undefined, {_acceptsError: -1});
	    defineBuiltInFunction('TRUE', lg_true, 0, 0);
	    defineBuiltInFunction('FALSE', lg_false, 0, 0);
	    defineBuiltInFunction('IFNA', lg_ifna, 2, 2, keyword_undefined, 0, keyword_undefined, {_acceptsError: -1});
	    defineBuiltInFunction('IFS', lg_ifs, 2, 254, keyword_undefined, 0, keyword_undefined, {_acceptsError: -1});
	    defineBuiltInFunction('SWITCH', lg_switch, 3, 253, keyword_undefined, 1, keyword_undefined, {_acceptsError: -1});
	    defineBuiltInFunction('XOR', lg_xor, 1, keyword_undefined,
	        arrayArgDefaultValue4, -1 , -1 );
	   
	
	   
	    defineBuiltInFunction('DATE', dt_date, 3, 3, [{
	        _argType: 2 ,
	        _argCondition: ['< 0', '> 9999']
	    }, stringIntArgDefaultValue, stringIntArgDefaultValue]);
	    defineBuiltInFunction('TIME', dt_time, 3, 3, [stringIntArgDefaultValue, stringIntArgDefaultValue, stringIntArgDefaultValue]);
	    defineBuiltInFunction('DATEVALUE', dt_datevalue, 1, 1, {_acceptsEmptyString: true});
	    defineBuiltInFunction('TIMEVALUE', dt_timevalue, 1, 1, {_acceptsEmptyString: true});
	    defineBuiltInFunction('NOW', dt_now, 0, 0, keyword_undefined, keyword_undefined, keyword_undefined, {_isVolatile: true});
	    defineBuiltInFunction('TODAY', dt_today, 0, 0, keyword_undefined, keyword_undefined, keyword_undefined, {_isVolatile: true});
	    defineBuiltInFunction('HOUR', dt_hour, 1, 1, dateTimeArgTypeObj);
	    defineBuiltInFunction('MINUTE', dt_minute, 1, 1, dateTimeArgTypeObj);
	    defineBuiltInFunction('SECOND', dt_second, 1, 1, dateTimeArgTypeObj);
	    defineBuiltInFunction('DAY', dt_day, 1, 1, dateTimeArgTypeObj);
	    defineBuiltInFunction('MONTH', dt_month, 1, 1, dateTimeArgTypeObj);
	    defineBuiltInFunction('YEAR', dt_year, 1, 1, dateTimeArgTypeObj);
	    defineBuiltInFunction('WEEKNUM', dt_weeknum, 1, 2,
	        [dateTimeArgTypeObj, stringIntArgDefaultValue2], keyword_undefined, keyword_undefined, {_acceptsMissingArgument: 1});
	    defineBuiltInFunction('WEEKDAY', dt_weekday, 1, 2,
	        [dateTimeArgTypeObj, stringIntArgDefaultValue2], keyword_undefined, keyword_undefined, {_acceptsMissingArgument: 1});
	    defineBuiltInFunction('EDATE', dt_edate, 2, 2, [dateTimeArgTypeObj, stringIntArgDefaultValue]);
	    defineBuiltInFunction('EOMONTH', dt_eomonth, 2, 2, [dateTimeArgTypeObj, stringIntArgDefaultValue]);
	    defineBuiltInFunction('WORKDAY', dt_workday, 2, 3,
	        [dateTimeArgTypeObj, stringIntArgDefaultValue, arrayArgDefaultValue], 2, 2, {_acceptsMissingArgument: 2});
	    defineBuiltInFunction('WORKDAY.INTL', dt_workday_intl, 2, 4,
	        [dateTimeArgTypeObj, stringIntArgDefaultValue, {_defaultValue: '0000011'}, arrayArgDefaultValue],
	        [2, 3], [2, 3], {_acceptsMissingArgument: [2, 3]});
	    defineBuiltInFunction('DAYS360', Functions._days360, 2, 3,
	        [dateTimeArgTypeObj, dateTimeArgTypeObj, {_defaultValue: false, _argType: 7 }],
	        {_acceptsMissingArgument: 2});
	    defineBuiltInFunction('NETWORKDAYS', dt_networkdays, 2, 3,
	        [dateTimeArgTypeObj, dateTimeArgTypeObj], 2, 2, {_acceptsMissingArgument: 2});
	    defineBuiltInFunction('NETWORKDAYS.INTL', dt_networkdays_intl, 2, 4,
	        [dateTimeArgTypeObj, dateTimeArgTypeObj], [2, 3], [2, 3], {_acceptsMissingArgument: [2, 3]});
	    defineBuiltInFunction('YEARFRAC', Functions._yearfrac, 2, 3,
	        [dateTimeArgTypeObj, dateTimeArgTypeObj, {_defaultValue: 0, _argType: 2 }],
	        {_acceptsMissingArgument: 2});
	    defineBuiltInFunction('DATEDIF', dt_datedif, 3, 3, [dateTimeArgTypeObj, dateTimeArgTypeObj, stringArgDefaultValue]);
	    defineBuiltInFunction('DAYS', dt_days, 2, 2);
	    defineBuiltInFunction('ISOWEEKNUM', dt_isoweeknum, 1, 1, dateTimeArgTypeObj);
	   
	
	   
	    defineBuiltInFunction('CLEAN', tx_clean, 1, 1, stringArgDefaultValue);
	    defineBuiltInFunction('TRIM', tx_trim, 1, 1, stringArgDefaultValue);
	    defineBuiltInFunction('DOLLAR', tx_dollar, 1, 2, [doubleArgDefaultValue,
	        {
	            _defaultValue: 2,
	            _argType: 2 ,
	            _argCondition: '> 99',
	            _conditionErrorValue: CalcErrorsValue
	        }], keyword_undefined, keyword_undefined, {_acceptsMissingArgument: 1});
	    defineBuiltInFunction('FIXED', tx_fixed, 1, 3,
	        [doubleArgDefaultValue, {_defaultValue: 2, _argType: 2 },
	            {_defaultValue: false, _argType: 7 }],
	        keyword_undefined, keyword_undefined, {_acceptsMissingArgument: [1, 2]});
	    defineBuiltInFunction('TEXT', tx_text, 2, 2, [{}, stringArgDefaultValue]);
	    defineBuiltInFunction('VALUE', tx_value, 1, 1, stringArgDefaultValue);
	    defineBuiltInFunction('LOWER', tx_lower, 1, 1, stringArgDefaultValue);
	    defineBuiltInFunction('UPPER', tx_upper, 1, 1, stringArgDefaultValue);
	    defineBuiltInFunction('PROPER', tx_proper, 1, 1, stringArgDefaultValue);
	    defineBuiltInFunction('CHAR', tx_char, 1, 1,
	        {_argType: 2 , _argCondition: ['> 255', '< 1'], _conditionErrorValue: CalcErrorsValue});
	    defineBuiltInFunction('CODE', tx_code, 1, 1, {_argType: 5 , _acceptsEmptyString: true});
	    defineBuiltInFunction('REPLACE', tx_replace, 4, 4, [stringArgDefaultValue,
	        {_argType: 2 , _argCondition: '< 1', _conditionErrorValue: CalcErrorsValue},
	        stringArgDefaultValue1, stringArgDefaultValue], keyword_undefined, keyword_undefined, {_acceptsMissingArgument: 2});
	    defineBuiltInFunction('SUBSTITUTE', tx_substitute, 3, 4,
	        [stringArgDefaultValue, {_argType: 5 , _acceptsEmptyString: true}, stringArgDefaultValue],
	        keyword_undefined, keyword_undefined, {_acceptsMissingArgument: 3});
	    defineBuiltInFunction('CONCATENATE', tx_concatenate, 2, keyword_undefined,
	        {_argType: 4 , _valueType: 0 , _toOneDimension: true, _isAllArgsSameLimit: true},
	        keyword_undefined, -1 );
	    defineBuiltInFunction('LEFT', tx_left, 1, 2, [stringArgDefaultValue, stringIntArgDefaultValue3],
	        keyword_undefined, keyword_undefined, {_acceptsMissingArgument: 1});
	    defineBuiltInFunction('MID', tx_mid, 3, 3, [stringArgDefaultValue, {
	        _argType: 2 ,
	        _argCondition: '<= 0',
	        _conditionErrorValue: CalcErrorsValue
	    }, stringArgDefaultValue1]);
	    defineBuiltInFunction('RIGHT', tx_right, 1, 2, [stringArgDefaultValue, stringIntArgDefaultValue3],
	        keyword_undefined, keyword_undefined, {_acceptsMissingArgument: 1});
	    defineBuiltInFunction('REPT', tx_rept, 2, 2, [stringArgDefaultValue, stringIntArgDefaultValue]);
	    defineBuiltInFunction('LEN', tx_len, 1, 1, stringArgDefaultValue);
	    defineBuiltInFunction('FIND', tx_find, 2, 3, [stringArgDefaultValue, stringArgDefaultValue, stringIntArgDefaultValue2],
	        keyword_undefined, keyword_undefined, {_acceptsMissingArgument: 2});
	    defineBuiltInFunction('SEARCH', tx_search, 2, 3, [stringArgDefaultValue, stringArgDefaultValue, stringIntArgDefaultValue3],
	        keyword_undefined, keyword_undefined, {_acceptsMissingArgument: 2});
	    defineBuiltInFunction('EXACT', tx_exact, 2, 2, [stringArgDefaultValue, stringArgDefaultValue]);
	    defineBuiltInFunction('T', tx_t, 1, 1);
	    defineBuiltInFunction('UNICHAR', tx_unichar, 1, 1, [{_argType: 2, _conditionErrorValue: CalcErrorsValue}]);
	    defineBuiltInFunction('UNICODE', tx_unicode, 1, 1);
	    defineBuiltInFunction('BAHTTEXT', tx_bahttext, 1, 1, [{_argType: 0, _conditionErrorValue: CalcErrorsValue}]);
	    defineBuiltInFunction('CONCAT', tx_concat, 1, keyword_undefined,
	        {
	            _argType: 4 ,
	            _toOneDimension: true,
	            _breakOnError: true,
	            _isAllArgsSameLimit: true
	        }, -1 , -1 );
	    defineBuiltInFunction('TEXTJOIN', tx_textjoin, 3, keyword_undefined,
	        {
	            _argType: 4 ,
	            _toOneDimension: true,
	            _breakOnError: true,
	            _isAllArgsSameLimit: true
	        }, -1 , -1 );
	
	
	
	
	
	    defineBuiltInFunction('FINDB', tx_findB, 2, 3, [stringArgDefaultValue, stringArgDefaultValue, stringIntArgDefaultValue2],
	        keyword_undefined, keyword_undefined, {_acceptsMissingArgument: 2});
	    defineBuiltInFunction('LEFTB', tx_leftB, 1, 2, [stringArgDefaultValue, stringIntArgDefaultValue3],
	        keyword_undefined, keyword_undefined, {_acceptsMissingArgument: 1});
	    defineBuiltInFunction('RIGHTB', tx_rightB, 1, 2, [stringArgDefaultValue, stringIntArgDefaultValue3],
	        keyword_undefined, keyword_undefined, {_acceptsMissingArgument: 1});
	    defineBuiltInFunction('MIDB', tx_midB, 3, 3, [stringArgDefaultValue, stringArgDefaultValue1, stringArgDefaultValue1]);
	    defineBuiltInFunction('LENB', tx_lenB, 1, 1, stringArgDefaultValue);
	    defineBuiltInFunction('REPLACEB', tx_replaceB, 4, 4, [stringArgDefaultValue,
	        {_argType: 2 , _argCondition: '< 1', _conditionErrorValue: CalcErrorsValue},
	        stringArgDefaultValue1, stringArgDefaultValue], keyword_undefined, keyword_undefined, {_acceptsMissingArgument: 2});
	    defineBuiltInFunction('SEARCHB', tx_searchB, 2, 3, [stringArgDefaultValue, stringArgDefaultValue, stringIntArgDefaultValue3],
	        keyword_undefined, keyword_undefined, {_acceptsMissingArgument: 2});
	   
	
	
	
	    defineBuiltInFunction('ENCODEURL', tx_encodeurl, 0, 1, stringArgDefaultValue);
	
	
	   
	    defineBuiltInFunction('ISERROR', in_isError, 1, 1, keyword_undefined, keyword_undefined, keyword_undefined,
	        {_acceptsError: -1 });
	    defineBuiltInFunction('ISERR', in_isErr, 1, 1, keyword_undefined, keyword_undefined, keyword_undefined,
	        {_acceptsError: -1 });
	    defineBuiltInFunction('ISNA', in_isNA, 1, 1, keyword_undefined, keyword_undefined, keyword_undefined,
	        {_acceptsError: -1 });
	    defineBuiltInFunction('ERROR.TYPE', in_error_Type, 1, 1, keyword_undefined, keyword_undefined, keyword_undefined,
	        {_acceptsError: -1 });
	    defineBuiltInFunction('ISNUMBER', in_isNumber, 1, 1, keyword_undefined, keyword_undefined, keyword_undefined,
	        {_acceptsError: -1 });
	    defineBuiltInFunction('ISEVEN', in_isEven, 1, 1, doubleArgDefaultValue, keyword_undefined, keyword_undefined);
	    defineBuiltInFunction('ISODD', in_isOdd, 1, 1, doubleArgDefaultValue, keyword_undefined, keyword_undefined);
	    defineBuiltInFunction('N', in_number, 1, 1, keyword_undefined, keyword_undefined, keyword_undefined);
	    defineBuiltInFunction('ISBLANK', in_isBlank, 1, 1, keyword_undefined, keyword_undefined, keyword_undefined,
	        {_acceptsError: -1 });
	    defineBuiltInFunction('ISLOGICAL', in_isLogical, 1, 1, keyword_undefined, keyword_undefined, keyword_undefined,
	        {_acceptsError: -1 });
	    defineBuiltInFunction('ISTEXT', in_isText, 1, 1, keyword_undefined, keyword_undefined, keyword_undefined,
	        {_acceptsError: -1 });
	    defineBuiltInFunction('ISNONTEXT', in_isNonText, 1, 1, keyword_undefined, keyword_undefined, keyword_undefined,
	        {_acceptsError: -1 });
	    defineBuiltInFunction('ISREF', in_isRef, 1, 1, keyword_undefined, -1 , keyword_undefined,
	        {_acceptsError: -1 });
	    defineBuiltInFunction('TYPE', in_type, 1, 1, keyword_undefined, keyword_undefined, -1 ,
	        {_acceptsError: -1 });
	    defineBuiltInFunction('NA', in_na, 0, 0);
	
	    defineBuiltInFunction('SHEET', in_sheet, 0, 0, keyword_undefined, -1, keyword_undefined,
	        {
	            _isContextSensitive: true
	        });
	    defineBuiltInFunction('SHEETS', in_sheets, 0, 0, keyword_undefined, -1, keyword_undefined,
	        {
	            _isContextSensitive: true
	        });
	    defineAsyncRefreshFunction();
	   
	
	    module.exports = Functions;
	
	}());

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Common;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.CalcEngine;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	if(typeof GC.Spread.Formatter === 'undefined') {var e = new Error("Cannot find module \"GC.Spread.Formatter\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
	module.exports = GC.Spread.Formatter;

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.calcengine.basicfunctions.12.0.0.js.map