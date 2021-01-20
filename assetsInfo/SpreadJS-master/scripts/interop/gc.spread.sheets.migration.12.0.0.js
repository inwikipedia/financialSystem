var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Commands = window.GC.Spread.Commands;
        Sheets.Key = GC_Spread_Commands.Key;
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var _extends = function (dest, src) {
            for (var prop in src) {
                if (src.hasOwnProperty(prop)) {
                    dest[prop] = src[prop];
                }
            }
            function __() {
                this.constructor = dest;
            }

            __.prototype = src.prototype;
            dest.prototype = new __();
        };

        var GC_Spread_Common = window.GC.Spread.Common;
        Sheets.Culture = GC_Spread_Common.CultureManager.culture;
        window.spreadJSEras = GC_Spread_Common.CultureInfo.eras;
        Sheets.addCultureInfo = function (cultureName, culture) {
            writePropertiesToChild(culture, 'NumberFormat');
            writePropertiesToChild(culture, 'DateTimeFormat');
            return GC_Spread_Common.CultureManager.addCultureInfo(cultureName, culture);
        }
        Sheets.getCultureInfo = function (cultureName) {
            GC_Spread_Common.CultureManager.getCultureInfo(cultureName);
            var self = this;
            var NumberFormat = self.NumberFormat;
            var DateTimeFormat = self.DateTimeFormat;
            writePropertiesToParent(self, NumberFormat);
            writePropertiesToParent(self, DateTimeFormat);
        }
        Sheets.CultureInfo = (function (_super) {
            _extends(CultureInfo, _super);

            function CultureInfo() {
                _super.apply(this);
                var self = this;
                var NumberFormat = self.NumberFormat;
                var DateTimeFormat = self.DateTimeFormat;
                writePropertiesToParent(self, NumberFormat);
                writePropertiesToParent(self, DateTimeFormat);
            }

            return CultureInfo;
        })(GC_Spread_Common.CultureInfo);

        function writePropertiesToParent(host, obj) {
            for (var item in obj) {
                if (!obj.hasOwnProperty(item)) {
                    break;
                }
                host[item] = obj[item];
            }
        }

        function writePropertiesToChild(host, child) {
            var src = host[child] || {};
            for (var item in src) {
                if (!src.hasOwnProperty(item)) {
                    break;
                }
                host[child][item] = host[item];
            }
        }
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var keyword_null = null, keyword_undefined = undefined;
        var GC_Spread_Formatter = window.GC.Spread.Formatter;
        var cultureManager = GC.Spread.Common.CultureManager;
        var _extends = function (dest, src) {
            for (var prop in src) {
                if (src.hasOwnProperty(prop)) {
                    dest[prop] = src[prop];
                }
            }
            function __() {
                this.constructor = dest;
            }

            __.prototype = src.prototype;
            dest.prototype = new __();
        };

        (function (FormatMode) {
            FormatMode[FormatMode["CustomMode"] = 0] = "CustomMode";
            FormatMode[FormatMode["StandardDateTimeMode"] = 1] = "StandardDateTimeMode";
            FormatMode[FormatMode["StandardNumericMode"] = 2] = "StandardNumericMode";
        })(Sheets.FormatMode || (Sheets.FormatMode = {}));
        var FormatMode = Sheets.FormatMode;

        (function (NumberFormatType) {
            NumberFormatType[NumberFormatType["General"] = 0] = "General";
            NumberFormatType[NumberFormatType["Number"] = 1] = "Number";
            NumberFormatType[NumberFormatType["DateTime"] = 2] = "DateTime";
            NumberFormatType[NumberFormatType["Text"] = 3] = "Text";
        })(Sheets.NumberFormatType || (Sheets.NumberFormatType = {}));
        var NumberFormatType = Sheets.NumberFormatType;

        var FormatterHelper = {
            StandardNumberFormatter: {
                CurrencyPattern1: "c",
                CurrencyPattern2: "C",
                DecimalPattern1: "d",
                DecimalPattern2: "D",
                ScientificPattern1: "e",
                ScientificPattern2: "E",
                FixedPointPattern1: "f",
                FixedPointPattern2: "F",
                GeneralPattern1: "g",
                GeneralPattern2: "G",
                NumberPattern1: "n",
                NumberPattern2: "N",
                PercentPattern1: "p",
                PercentPattern2: "P",
                RoundTripPattern1: "r",
                RoundTripPattern2: "R",
                HexadecimalPattern1: "x",
                HexadecimalPattern2: "X"

            },

            DefaultTokens: {
                DoubleQuote: '\"',
                SingleQuote: '\'',
                Tab: '\t',
                LeftSquareBracket: '[',
                RightSquareBracket: ']',
                LessThanSign: '<',
                GreaterThanSign: '>',
                EqualsThanSign: ':',
                PlusSign: '+',
                HyphenMinus: '-',
                UnderLine: '_',
                LeftParenthesis: '(',
                RightParenthesis: ')',
                Dollar: '$',
                Comma: ',',
                //Space  : (char)0x20,
                Space: ' ',
                SolidusSign: '/',
                ReverseSolidusSign: '\\',
                Zero: '0',
                QuestionMark: '?',
                Colon: ':',
                Semicolon: ',',
                Sharp: '#',
                CommercialAt: '@',
                NumberSign: '#',
                Asterisk: '*',
                // EndCharOfArray : "\0",
                Exponential1: "E+",
                Exponential2: "E-",
                DecimalSeparator: ".",
                numberGroupSeparator: ",",
                percentSymbol: "%",
                nanSymbol: "NaN",
                FormatSeparator: ";",
                negativeSign: "-",
                ReplacePlaceholder: "@",
                ExponentialSymbol: "E",
            },

            getPrecision: function (formatStr) {
                if (formatStr) {
                    if (formatStr.length > 0) {
                        var formatTemp = formatStr.substr(1);
                        var formatNumber = parseInt(formatTemp);
                        if (!isNaN(formatNumber)) {
                            return formatNumber;
                        }
                        return null;
                    }
                }
            },

            startWith: function (str, pattern) {
                if (str.substr(0, 1) === pattern) {
                    return true;
                }
                return false;
            },

            addDecimalPrecision: function (baseFormat, c, count) {
                var formatTemp = baseFormat;
                if (count > 0) {
                    formatTemp += FormatterHelper.DefaultTokens.DecimalSeparator;
                    for (var i = 0; i < count; i++) {
                        formatTemp += c;
                    }
                }
                return formatTemp;
            },

            addIntegralPrecision: function (baseFormat, c, count) {
                var formatTemp = baseFormat;
                if (count > 0) {
                    var strTemp = "";
                    for (var i = 0; i < count; i++) {
                        strTemp += c;
                    }
                    formatTemp = strTemp + formatTemp;
                }
                return formatTemp;
            },

            standardNumberFormatToExcelCompatibleFormatString: function (formatString, cultureInfo) {
                if (formatString) {
                    var formatStr = formatString.toLowerCase();
                    var numberFormatInfo = cultureInfo.NumberFormat;
                    var baseFormat, precision, currentPrecision = FormatterHelper.getPrecision(formatStr);
                    if (FormatterHelper.startWith(formatStr, FormatterHelper.StandardNumberFormatter.CurrencyPattern1)) {
                        // $#,##0.
                        baseFormat = numberFormatInfo.currencySymbol + "#,##0";
                        precision = currentPrecision !== keyword_null ? currentPrecision : numberFormatInfo.currencyDecimalDigits;
                        return FormatterHelper.addDecimalPrecision(baseFormat, FormatterHelper.DefaultTokens.Zero, precision);
                    }
                    else if (FormatterHelper.startWith(formatStr, FormatterHelper.StandardNumberFormatter.DecimalPattern1)) {
                        // 0
                        baseFormat = "0";
                        precision = currentPrecision !== keyword_null ? currentPrecision : 1;
                        return FormatterHelper.addIntegralPrecision(baseFormat, FormatterHelper.DefaultTokens.Zero, precision - 1);
                    }
                    else if (FormatterHelper.startWith(formatStr, FormatterHelper.StandardNumberFormatter.ScientificPattern1)) {
                        // 0.########################################E+000
                        baseFormat = "0";
                        var suffix = "E+000";
                        if (currentPrecision !== keyword_null) {
                            var format = FormatterHelper.addDecimalPrecision(baseFormat, FormatterHelper.DefaultTokens.Zero, currentPrecision);
                            return format + suffix;
                        }
                        else {
                            return "0.########################################E+000";
                        }
                    }
                    else if (FormatterHelper.startWith(formatStr, FormatterHelper.StandardNumberFormatter.FixedPointPattern1)) {
                        // 0
                        baseFormat = "0";
                        precision = currentPrecision !== keyword_null ? currentPrecision : numberFormatInfo.numberDecimalDigits;
                        return FormatterHelper.addDecimalPrecision(baseFormat, FormatterHelper.DefaultTokens.Zero, precision);
                    }
                    else if (FormatterHelper.startWith(formatStr, FormatterHelper.StandardNumberFormatter.GeneralPattern1)) {
                        return "General";
                    }
                    else if (FormatterHelper.startWith(formatStr, FormatterHelper.StandardNumberFormatter.NumberPattern1)) {
                        // #,##0
                        baseFormat = "#,##0";
                        precision = currentPrecision !== keyword_null ? currentPrecision : numberFormatInfo.numberDecimalDigits;
                        return FormatterHelper.addDecimalPrecision(baseFormat, FormatterHelper.DefaultTokens.Zero, precision);
                    }
                    else if (FormatterHelper.startWith(formatStr, FormatterHelper.StandardNumberFormatter.PercentPattern1)) {
                        // 0
                        baseFormat = "0";
                        precision = currentPrecision !== keyword_null ? currentPrecision : numberFormatInfo.numberDecimalDigits;
                        return FormatterHelper.addDecimalPrecision(baseFormat, FormatterHelper.DefaultTokens.Zero, precision) + FormatterHelper.DefaultTokens.percentSymbol;
                    }
                    else if (FormatterHelper.startWith(formatStr, FormatterHelper.StandardNumberFormatter.RoundTripPattern1)) {
                        return "General";
                    }
                    else if (FormatterHelper.startWith(formatStr, FormatterHelper.StandardNumberFormatter.HexadecimalPattern1)) {
                        return "General";
                    }
                    else {
                        return keyword_null;
                    }
                }
                return keyword_null;
            },

            standardDateTimeFormatToExcelCompatibleFormatString: function (formatString, cultureInfo) {
                var formatStringTemp = "";
                var dateTimeFormatInfo = cultureInfo.DateTimeFormat;
                switch (formatString) {
                    case "D":
                        formatStringTemp = dateTimeFormatInfo.longDatePattern;
                        break;
                    case "d":
                        formatStringTemp = dateTimeFormatInfo.shortDatePattern;
                        break;
                    case "F":
                        formatStringTemp = dateTimeFormatInfo.fullDateTimePattern;
                        break;
                    case "f":
                        formatStringTemp = dateTimeFormatInfo.longDatePattern + " " + dateTimeFormatInfo.shortTimePattern;
                        break;
                    case "G":
                        formatStringTemp = dateTimeFormatInfo.shortDatePattern + " " + dateTimeFormatInfo.longTimePattern;
                        break;
                    case "g":
                        formatStringTemp = dateTimeFormatInfo.shortDatePattern + " " + dateTimeFormatInfo.shortTimePattern;
                        break;
                    case "M":
                    case "m":
                        formatStringTemp = dateTimeFormatInfo.monthDayPattern;
                        break;
                    case "R":
                    case "r":
                        formatStringTemp = dateTimeFormatInfo.rfc1123Pattern;
                        break;
                    case "s":
                        formatStringTemp = dateTimeFormatInfo.sortableDateTimePattern;
                        break;
                    case "T":
                        formatStringTemp = dateTimeFormatInfo.longTimePattern;
                        break;
                    case "t":
                        formatStringTemp = dateTimeFormatInfo.shortTimePattern;
                        break;
                    case "u":
                        formatStringTemp = dateTimeFormatInfo.universalSortableDateTimePattern;
                        break;
                    case "U":
                        formatStringTemp = dateTimeFormatInfo.fullDateTimePattern;
                        break;
                    case "Y":
                    case "y":
                        formatStringTemp = dateTimeFormatInfo.yearMonthPattern;
                        break;
                }
                return formatStringTemp.split("'").join('"');
            }
        };

        Sheets.GeneralFormatter = (function (_super) {
            _extends(GeneralFormatter, _super);

            function GeneralFormatter(format, formatMode, cultureName) {
                this.formatMode = formatMode;
                this.standardFormatStr = format;
                var excelCompatibleFormatString = format;
                var cultureInfo;
                if (cultureName) {
                    cultureInfo = cultureManager.getCultureInfo(cultureName);
                } else {
                    cultureInfo = cultureManager.getCultureInfo();
                }
                if (formatMode === FormatMode.StandardNumericMode) {
                    excelCompatibleFormatString = FormatterHelper.standardNumberFormatToExcelCompatibleFormatString(format, cultureInfo);
                } else if (formatMode === FormatMode.StandardDateTimeMode) {
                    excelCompatibleFormatString = FormatterHelper.standardDateTimeFormatToExcelCompatibleFormatString(format, cultureInfo);
                }
                _super.call(this, excelCompatibleFormatString, cultureName);
            }

            GeneralFormatter.prototype.updateCulture = function () {
                if (this.cultureName) {
                    return;
                }
                var format = this.standardFormatStr;
                var excelCompatibleFormatString = this.formatCached;
                var cultureInfo = cultureManager.getCultureInfo();
                if (this.formatMode === FormatMode.StandardNumericMode) {
                    excelCompatibleFormatString = FormatterHelper.standardNumberFormatToExcelCompatibleFormatString(format, cultureInfo);
                } else if (this.formatMode === FormatMode.StandardDateTimeMode) {
                    excelCompatibleFormatString = FormatterHelper.standardDateTimeFormatToExcelCompatibleFormatString(format, cultureInfo);
                }
                this.formatCached = excelCompatibleFormatString;
                this.init();
            }

            GeneralFormatter.prototype.Format = _super.prototype.format;

            GeneralFormatter.prototype.format = function (obj, conditionalForeColor) {
                this.updateCulture();
                return this.Format.call(this, obj, conditionalForeColor);
            }
            GeneralFormatter.prototype.FormatString = _super.prototype.formatString;
            GeneralFormatter.prototype.HasFormatedColor = _super.prototype.hasFormatedColor;
            GeneralFormatter.prototype.Parse = _super.prototype.parse;
            GeneralFormatter.prototype.GetPreferredEditingFormatter = function (Obj) {
                var formatter = this.getPreferredEditingFormatter.call(this, Obj);
                formatter.Format = this.format;
                formatter.FormatString = this.formatString;
                formatter.HasFormatedColor = this.hasFormatedColor;
                formatter.Parse = this.parse;
                return formatter;
            };
            GeneralFormatter.prototype.GetPreferredDisplayFormatter = function (s, valueRef) {
                var formatter = this.getPreferredDisplayFormatter.call(this, s, valueRef);
                formatter.Format = this.format;
                formatter.FormatString = this.formatString;
                formatter.HasFormatedColor = this.hasFormatedColor;
                formatter.Parse = this.parse;
                return formatter;
            };
            GeneralFormatter.prototype.FormatMode = function () {
                return this.formatMode;
            }
            GeneralFormatter.prototype.ExcelCompatibleFormatString = function () {
                var self = this;
                this.updateCulture();
                self.init();
                var formatStringBuilder = keyword_null;
                switch (self.FormatMode()) {
                    case FormatMode.CustomMode:
                        if (self.formatters) {
                            for (var index = 0; index < self.formatters.length; index++) {
                                var formatter = self.formatters[index];
                                if (isCustomType(formatter, "CustomNumberFormat")) {
                                    if (formatStringBuilder == keyword_null) {
                                        formatStringBuilder = "";
                                    }
                                    else {
                                        formatStringBuilder += ";";
                                    }
                                    var formatTemp = formatter.ExcelCompatibleFormatString();
                                    formatStringBuilder += (formatTemp);
                                }
                            }
                        }
                        break;
                    case FormatMode.StandardDateTimeMode:
                        if (isCustomType(self.formatters[0], "StandardDateTimeFormatter")) {
                            return self.formatters[0].ExcelCompatibleFormatString();
                        }
                        break;
                    case FormatMode.StandardNumericMode:
                        if (isCustomType(self.formatters[0], "StandardNumberFormatter")) {
                            return self.formatters[0].ExcelCompatibleFormatString();
                        }
                        break;
                }
                if (formatStringBuilder) {
                    return formatStringBuilder.toString();
                }
                else {
                    return "";
                }
            };
            GeneralFormatter.prototype.IsDefaultFormat = function () {
                return this.formatCached.toLowerCase() === "general";
            };
            GeneralFormatter.prototype.GetFormatType = function (obj) {
                this.init();
                var formatInfo = this._getFormatInfo(obj);
                if (isCustomType(formatInfo, "CustomNumberFormat")) {
                    var customFormat = formatInfo.Formatter();
                    if (isCustomType(customFormat, "NumberFormatDigital")) {
                        return NumberFormatType.Number;
                    }
                    else if (isCustomType(customFormat, "NumberFormatDateTime")) {
                        return NumberFormatType.DateTime;
                    }
                    else if (isCustomType(customFormat, "NumberFormatText")) {
                        return NumberFormatType.Text;
                    }
                }
                else {
                    if (isCustomType(formatInfo, "NumberFormatDigital") || isCustomType(formatInfo, "StandardNumberFormatter")) {
                        return NumberFormatType.Number;
                    }
                    else if (isCustomType(formatInfo, "NumberFormatDateTime") || isCustomType(formatInfo, "StandardDateTimeFormatter")) {
                        return NumberFormatType.DateTime;
                    }
                    else if (isCustomType(formatInfo, "NumberFormatText")) {
                        return NumberFormatType.Text;
                    }
                }
                return NumberFormatType.General;
            };

            return GeneralFormatter;
        })(GC_Spread_Formatter.GeneralFormatter);


        Sheets.AutoFormatter = (function () {
            function AutoFormatter(innerFormatter) {
                this._innerFormatter = innerFormatter;
            }

            AutoFormatter.prototype.FormatString = function () {
                return this._innerFormatter ?
                    this._innerFormatter.FormatString() : '';
            };
            AutoFormatter.prototype.innerFormatter = function (formatter) {
                if (arguments.length === 0) {
                    return this._innerFormatter;
                }
                this._innerFormatter = formatter;
                return this;
            };
            AutoFormatter.prototype.Parse = function (text) {
                return this._innerFormatter ?
                    this._innerFormatter.Parse(text) : text;
            };
            AutoFormatter.prototype.Format = function (obj) {
                return this._innerFormatter ?
                    this._innerFormatter.Format(obj) : ((obj === keyword_undefined || obj === keyword_null) ? "" : obj.toString());
            };
            AutoFormatter.prototype.toJSON = function () {
                return this._innerFormatter.toJSON();
            };
            AutoFormatter.prototype.fromJSON = function (settings) {
                this._innerFormatter = new GeneralFormatter(settings.formatCached, settings.formatModeType, settings.customerCultureName);
            };
            return AutoFormatter;
        }());

        function isCustomType(obj, type) {
            if (obj === keyword_undefined || obj === keyword_null) {
                return type === "null";
            }
            if (!type) {
                return false;
            }
            if (obj && obj._classNames) {
                for (var index = 0; index < obj._classNames.length; index++) {
                    var classname = obj._classNames[index];
                    if (classname === type) {
                        return true;
                    }
                }
                return false;
            }
            else {
                if (type === "DateTime" || type === "TimeSpan") {
                    return obj instanceof Date;
                }
            }
            if (type === "function" && /^\s*\bfunction\b/.test("" + obj)) {
                return true;
            }
            if (Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === type.toLowerCase()) {
                return true;
            }
            return obj instanceof type;
        };


        Sheets.CustomFormatterBase = (function (_super) {
            _extends(CustomFormatterBase, _super);

            function CustomFormatterBase() {
                _super.call(this);
            }

            CustomFormatterBase.prototype.Format = function (value, conditionalForeColor) {
                return null;
            };

            CustomFormatterBase.prototype.Parse = function (str) {
                return null;
            };

            CustomFormatterBase.prototype.format = function (value, conditionalForeColor) {
                return this.Format.apply(this, arguments);
            };

            CustomFormatterBase.prototype.parse = function (str) {
                return this.Parse.apply(this, arguments);
            };

            CustomFormatterBase.prototype.FormatString = _super.prototype.formatString;

            return CustomFormatterBase;
        })(GC_Spread_Formatter.FormatterBase);
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    var GC_Spread_Slicers = window.GC.Spread.Slicers;

    if (!GcSpread.Slicer) {
        GcSpread.Slicer = {};
    }
    GcSpread.Slicer.FilteredOutDataType = GC_Spread_Slicers.FilteredOutDataType;
    GcSpread.Slicer.SlicerAggregateType = GC_Spread_Slicers.SlicerAggregateType;

    var GeneralSlicerData = GC_Spread_Slicers.GeneralSlicerData;
    GeneralSlicerData.prototype.changeData = GeneralSlicerData.prototype.onDataChanged;
    GeneralSlicerData.prototype.changeColumnName = GeneralSlicerData.prototype.onColumnNameChanged;
    GeneralSlicerData.prototype.addRows = GeneralSlicerData.prototype.onRowsAdded;
    GeneralSlicerData.prototype.removeRows = GeneralSlicerData.prototype.onRemovedRows;
    GeneralSlicerData.prototype.removeColumns = GeneralSlicerData.prototype.onRemovedColumns;
    GcSpread.Slicer.GeneralSlicerData = GeneralSlicerData;

    GcSpread.Slicer.SlicerDataItem = (function () {
        function SlicerDataItem(columnName, rowIndex, data) {
            var self = this;
            self.columnName = columnName;
            self.rowIndex = rowIndex;
            self.data = data;
        }

        return SlicerDataItem;
    })();
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets = window.GC.Spread.Sheets;

        function ThemeColor(name, text1, text2, background1, background2, accent1, accent2, accent3, accent4, accent5, accent6, link, followedLink) {
            GC_Spread_Sheets.ColorScheme.apply(this, [name, background1, background2, text1, text2, accent1, accent2, accent3, accent4, accent5, accent6, link, followedLink]);
        }
        ThemeColor.prototype = new GC_Spread_Sheets.ColorScheme();
        ThemeColor.prototype.hyperline = ThemeColor.prototype.hyperlink;
        ThemeColor.prototype.followedHyperline = ThemeColor.prototype.followedHyperlink;
        Sheets.ThemeColor = ThemeColor;

        Sheets.SpreadTheme = GC_Spread_Sheets.Theme;
        Sheets.ThemeColors = GC_Spread_Sheets.ThemeColors;
        Sheets.SpreadThemes = GC_Spread_Sheets.Themes;
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        function uppercaseFirstLetter(str) {
            if (str && str[0]) {
                return str[0].toUpperCase() + str.substr(1);
            }
            return str;
        }

        function redefineEnum(obj, map) {
            var result = {};
            for (var p in obj) {
                if (obj.hasOwnProperty(p)) {
                    var newP = map && map[p] || uppercaseFirstLetter(p);
                    result[newP] = obj[p];
                }
            }
            return result;
        }

        Sheets._redefineEnum = redefineEnum;
        Sheets._extends = function (dest, src) {
            for (var prop in src) {
                if (src.hasOwnProperty(prop)) {
                    dest[prop] = src[prop];
                }
            }
            function __() {
                this.constructor = dest;
            }

            __.prototype = src.prototype;
            dest.prototype = new __();
        };
        Sheets.CellPosition = function (row, col) {
            this.row = row;
            this.col = col;
        };
        Sheets.defineProperty = function (obj, innerObjName, names) {
            var items = {};
            names.forEach(function (name) {
                if (typeof obj[innerObjName][name] === 'function') {
                    items[name] = {
                        get: function () {
                            return obj[innerObjName][name]();
                        },
                        set: function (value) {
                            obj[innerObjName][name](value);
                        }
                    };
                }
            });
            Object.defineProperties(obj, items);
        };
        Sheets.getPropertyValue = function (value) {
            if (typeof value === 'function') {
                return value();
            } else {
                return value;
            }
        };
        Sheets._rewritePrototypeMethod = function (proto, propName, funcName, innerName, afterProcessFunc) {
            if (!innerName) {
                innerName = funcName;
            }
            proto[funcName] = function () {
                var retValue = this[propName][innerName].apply(this[propName], arguments);
                if (retValue && typeof afterProcessFunc === 'function') {
                    retValue = afterProcessFunc(retValue);
                }
                return retValue;
            }
        };
        Sheets._processCustomFunctions = function (proto) {
            (function (proto) {
                var GC_Spread_CalcEngine = window.GC.Spread.CalcEngine;
                var Function = GC_Spread_CalcEngine.Functions.Function;

                var addCustomFunction = proto.addCustomFunction,
                    removeCustomFunction = proto.removeCustomFunction,
                    clearCustomFunctions = proto.clearCustomFunctions,
                    getCustomFunction = proto.getCustomFunction;

                var customFunctions = {};
                proto.addCustomFunction = function (fn) {
                    if (fn) {
                        customFunctions[fn.name] = fn;
                        var _prototype = Object.getPrototypeOf(fn);
                        // Old evaluate use a single Array argument (args)
                        if (_prototype && _prototype.evaluate && !_prototype.__evaluate__) {
                            // backup original function for latter restore
                            var evaluate = _prototype.evaluate;
                            _prototype.__evaluate__ = evaluate;
                            _prototype.evaluate = function () {
                                if (_prototype.evaluateAsync) {
                                    // async function use an additional context argument follows args
                                    var args = Array.prototype.slice.call(arguments, 1),
                                        context = arguments[0];

                                    // link renamed method
                                    context.SetAsyncResult = context.setAsyncResult;

                                    return _prototype.evaluateAsync.call(this, args, context);
                                } else {
                                    return evaluate.call(this, arguments);
                                }
                            }
                        }
                    }
                    addCustomFunction.call(this, fn);
                };

                proto.removeCustomFunction = function (fnName) {
                    var fn = getCustomFunction.call(this, fnName);
                    if (fn) {
                        delete customFunctions[fnName];
                        removeCustomFunction.call(this, fnName);
                        var _prototype = Object.getPrototypeOf(fn);
                        if (_prototype && _prototype.__evaluate__) {
                            _prototype.evaluate = _prototype.__evaluate__;
                            delete _prototype.__evaluate__;
                        }
                    }
                };

                proto.clearCustomFunctions = function () {
                    foreachItem(customFunctions, function (fn) {
                        if (fn) {
                            var _prototype = Object.getPrototypeOf(fn);
                            delete _prototype.___evaluate__;
                        }
                    });
                    customFunctions = {};
                    clearCustomFunctions.call(this);
                }

                proto.addCustomFunctionDescription = function (fd) {
                    var fnName = fd.name;
                    var fn = getCustomFunction.call(this, fnName);
                    if (fn) {
                        setFunctionDescription(fn, {description: fd.description, parameters: fd.parameters});
                    }
                }

                proto.getCustomFunctionDescription = function (fnName) {
                    var fn = getCustomFunction.call(this, fnName);
                    if (fn) {
                        return fn.description();
                    }
                }

                proto.removeCustomFunctionDescription = function (fnName) {
                    var fn = getCustomFunction.call(this, fnName);
                    if (fn) {
                        setFunctionDescription(fn, null);
                    }
                }

                proto.clearCustomFunctionDescriptions = function () {
                    foreachItem(customFunctions, function (fn) {
                        if (fn) {
                            setFunctionDescription(fn, null);
                        }
                    });
                }

                function foreachItem(obj, fn) {
                    if (obj && typeof fn === 'function') {
                        for (var prop in obj) {
                            if (obj.hasOwnProperty(prop)) {
                                var item = obj[prop];
                                if (item) {
                                    fn(item);
                                }
                            }
                        }
                    }
                }

                function setFunctionDescription(fn, description) {
                    if (fn) {
                        Function.call(fn, fn.name, fn.minArgs, fn.maxArgs, description);
                    }
                }

            })(proto);
        };

        var GC_Spread_Sheets = window.GC.Spread.Sheets;
        Sheets.getTypeFromString = GC_Spread_Sheets.getTypeFromString;
        Sheets.findControl = GC_Spread_Sheets.findControl;
        Sheets.VisualState = redefineEnum(GC_Spread_Sheets.VisualState);
        Sheets.SortState = redefineEnum(GC_Spread_Sheets.SortState);
        Sheets.StorageType = redefineEnum(GC_Spread_Sheets.StorageType);
        Sheets.Point = GC_Spread_Sheets.Point;
        Sheets.Rect = GC_Spread_Sheets.Rect;
        Sheets.Range = GC_Spread_Sheets.Range;
        Sheets.Events = GC_Spread_Sheets.Events;
        // simple implement for replace, do modify if not fit
        Sheets.FormatConverter = (function () {
            function FormatConverter() {
            }

            FormatConverter.IsNumber = function (value) {
                if (value instanceof Date || typeof value === 'number') {
                    return true;
                }

                return false;
            }

            function getOADate(date) {
                return date.getTime() / 86400000 + 25569;   // 25569: oaDate of 1970/1/1
            }

            FormatConverter.ToDouble = function (value) {
                if (value instanceof Date) {
                    return getOADate(value);
                }
                var _type = typeof value;
                switch (_type) {
                    case 'number':
                        return value;
                    case 'boolean':
                        return value ? 1.0 : 0.0;
                    default:
                        return value ? parseFloat(value) : 0.0;
                }
            }

            FormatConverter.toString = function (value) {
                if (value == null) {
                    return '';
                }
                var _type = typeof value;
                switch (_type) {
                    case 'string':
                        return value;
                    case 'boolean':
                        return value ? 'TRUE' : 'FALSE';
                    default:
                        return '' + value;
                }
            }

            return FormatConverter;
        })();

        Sheets.KeyMap = (function () {
            function KeyMap(key, ctrl, shift, alt, meta, action) {
                var self = this;
                self.key = key;
                self.ctrl = ctrl;
                self.shift = shift;
                self.alt = alt;

                self.meta = action && meta || false;
                self.action = action || meta;
            }

            return KeyMap;
        })();
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var keyword_undefined = undefined;
        var GC_Spread_Sheets = window.GC.Spread.Sheets;
        Sheets.HorizontalAlign = GC_Spread_Sheets.HorizontalAlign;
        Sheets.VerticalAlign = GC_Spread_Sheets.VerticalAlign;
        Sheets.ImageLayout = Sheets._redefineEnum(GC_Spread_Sheets.ImageLayout);
        Sheets.LineStyle = GC_Spread_Sheets.LineStyle;
        Sheets.TextDecorationType = Sheets._redefineEnum(GC_Spread_Sheets.TextDecorationType);

        function LineBorder(color, style) { //eslint-disable-line
            GC_Spread_Sheets.LineBorder.apply(this, arguments);
        }

        LineBorder.prototype = new GC_Spread_Sheets.LineBorder();
        LineBorder.prototype.width = function (border) {
            var lineStyle = Sheets.LineStyle;
            if (border && border.style) {
                switch (border.style) {
                    case lineStyle.dashDot:
                    case lineStyle.thin:
                    case lineStyle.dashed:
                    case lineStyle.dotted:
                    case lineStyle.hair:
                    case lineStyle.dashDotDot:
                        return 1;
                    case lineStyle.medium:
                    case lineStyle.mediumDashDot:
                    case lineStyle.mediumDashDotDot:
                    case lineStyle.mediumDashed:
                    case lineStyle.slantedDashDot:
                        return 2;
                    case lineStyle.thick:
                    case lineStyle.double:
                        return 3;
                }
            }
            return 0;
        };
        Sheets.LineBorder = LineBorder;
        Sheets.buildFontString = function (cssStyle) {
            var userAgent = navigator.userAgent.toLowerCase();
            if(userAgent.indexOf('chrome') < 0 && userAgent.indexOf('PhantomJS') < 0 &&  userAgent.indexOf('webkit') >= 0) {
                return cssStyle.font;
            }

            var f = "";
            var normal = "normal";
            var defaultFontWeight = "400";
            if (cssStyle.fontStyle !== normal) {
                f = cssStyle.fontStyle;
            }
            if (cssStyle.fontVariant !== normal) {
                f += (f ? " " : "") + cssStyle.fontVariant;
            }
            if (cssStyle.fontWeight !== normal && cssStyle.fontWeight !== defaultFontWeight) {
                f += (f ? " " : "") + cssStyle.fontWeight;
            }
            f += (f ? " " : "") + cssStyle.fontSize;
            if (cssStyle.lineHeight !== normal) {
                f += "/" + cssStyle.lineHeight;
            }
            f += " " + cssStyle.fontFamily;
            return f;
        };
        //buildFont not support
        //compose not support
        //clear not support
        var Style = (function (_super) {
            Sheets._extends(Style, _super);

            function Style() {
                _super.apply(this, arguments);
            }

            Style.prototype.copyFrom = function (style) {
                this.fromJSON(style.toJSON());
            };

            return Style;
        })(GC_Spread_Sheets.Style);
        Sheets.Style = Style;
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets = window.GC.Spread.Sheets;
        Sheets.ShowResizeTip = Sheets._redefineEnum(GC_Spread_Sheets.ShowResizeTip);
        Sheets.ShowScrollTip = Sheets._redefineEnum(GC_Spread_Sheets.ShowScrollTip);
        Sheets.AutoFitType = Sheets._redefineEnum(GC_Spread_Sheets.AutoFitType);
        Sheets.InvalidOperationType = Sheets._redefineEnum(GC_Spread_Sheets.InvalidOperationType);
        Sheets.ResizeZeroIndicator = Sheets._redefineEnum(GC_Spread_Sheets.ResizeZeroIndicator);
        Sheets.HorizontalPosition = GC_Spread_Sheets.HorizontalPosition;
        Sheets.VerticalPosition = GC_Spread_Sheets.VerticalPosition;

        var Workbook = GC_Spread_Sheets.Workbook;
        var $ = window.jQuery;

        function applyOptions(sheet, options) {
            if (!options) {
                return;
            }
            var defaults = sheet.defaults, gridline = sheet.options.gridline;

            // options
            if (typeof (options.name) === 'string' && options.name.length > 0) {
                sheet.name(options.name);
            }
            if (options.data) {
                sheet.setDataSource(options.data);
            }
            if (typeof (options.defaultRowHeight) === 'number') {
                defaults.rowHeight = options.defaultRowHeight;
            }
            if (typeof (options.defaultColWidth) === 'number') {
                defaults.colWidth = options.defaultColWidth;
            }
            if (typeof (options.defaultRowHeaderColWidth) === 'number') {
                defaults.rowHeaderColWidth = options.defaultRowHeaderColWidth;
            }
            if (typeof (options.defaultColHeaderRowHeight) === 'number') {
                defaults.colHeaderRowHeight = options.defaultColHeaderRowHeight;
            }

            if (typeof (options.rowCount) === 'number') {
                sheet.setRowCount(options.rowCount);
            }
            if (typeof (options.colCount) === 'number') {
                sheet.setColumnCount(options.colCount);
            }
            if (typeof (options.frozenRowCount) === 'number') {
                sheet.frozenRowCount(options.frozenRowCount);
            }
            if (typeof (options.frozenColCount) === 'number') {
                sheet.frozenColCount(options.frozenColCount);
            }
            if (typeof (options.frozenTrailingRowCount) === 'number') {
                sheet.frozenTrailingRowCount(options.frozenTrailingRowCount);
            }
            if (typeof (options.frozenTrailingColCount) === 'number') {
                sheet.frozenTrailingColCount(options.frozenTrailingColCount);
            }
            if (options.gridlineColor) {
                gridline.color = options.gridlineColor;
            }
            if (typeof (options.showVerticalGridline) === 'boolean') {
                gridline.showVerticalGridline = options.showVerticalGridline;
            }
            if (typeof (options.showHorizontalGridline) === 'boolean') {
                gridline.showHorizontalGridline = options.showHorizontalGridline;
            }

            if (options.borderColor) {
                sheet.options.borderColor = options.borderColor;
            }
            if (typeof (options.borderWidth) === 'number') {
                sheet.options.borderWidth = options.borderWidth;
            }
            if (typeof (options._zoomFactor) === 'number') {
                sheet.zoom(options._zoomFactor);
            }

            if (typeof (options.rowHeaderVisible) === 'boolean') {
                sheet.options.rowHeaderVisible = options.rowHeaderVisible;
            }
            if (typeof (options.colHeaderVisible) === 'boolean') {
                sheet.options.colHeaderVisible = options.colHeaderVisible;
            }
            if (typeof (options.autoGenerateColumns) === 'boolean') {
                sheet.autoGenerateColumns = options.autoGenerateColumns;
            }

            if (options.rowHeaderAutoText) {
                sheet.rowHeaderAutoText = options.rowHeaderAutoText;
            }
            if (options.colHeaderAutoText) {
                sheet.colHeaderAutoText = options.colHeaderAutoText;
            }

            var activeRowIndex, activeColIndex;
            if (typeof (options._activeRowIndex) === 'number') {
                activeRowIndex = options._activeRowIndex;
            }
            if (typeof (options._activeColIndex) === 'number') {
                activeColIndex = options._activeColIndex;
            }
            sheet.setActiveCell(activeRowIndex, activeColIndex);

            if (typeof (options._allowCellOverflow) === 'boolean') {
                sheet.options.allowCellOverflow = options._allowCellOverflow;
            }
            if (typeof (options.isProtected) === 'boolean') {
                sheet.options.isProtected = options.isProtected;
            }
            if (typeof (options.allowUndo) === 'boolean') {
                var parent = sheet.getParent();
                if (parent) {
                    parent.options.allowUndo = options.allowUndo;
                }
            }

            var columns = options.columns;
            if (columns && columns.length > 0) {
                sheet.autoGenerateColumns = false;
                sheet.bindColumns(columns);
            }
        }

        function isValidSheetName(spread, name) {
            var sheetCount = spread.getSheetCount();
            for (var i = 0; i < sheetCount; i++) {
                var sheet = spread.sheets[i];
                if (name === sheet.name()) {
                    return false;
                }
            }
            return true;
        }

        function getNewSheetName(spread, num) {
            var name = 'Sheet';
            while (!isValidSheetName(spread, name + num)) {
                num++;
            }
            return name + num;
        }

        function applySheetsSetting(spread, sheetsSetting) {
            if (sheetsSetting && sheetsSetting.length > 0) {
                var sheetTemp;
                var n = spread.getSheetCount();
                while (n < sheetsSetting.length) {
                    sheetTemp = new Sheets.Sheet(getNewSheetName(n));
                    spread.addSheet(n, sheetTemp);
                    n = spread.getSheetCount();
                }
                for (var i = 0; i < sheetsSetting.length; i++) {
                    sheetTemp = spread.getSheet(i);
                    applyOptions(sheetTemp, sheetsSetting[i]);
                }
            }
        }

        function Spread(host, options) {
            var self = this;
            self.customCommandIndex = 1;
            if (typeof options === 'number' || options === null || options === undefined) {
                var tempOption = {};
                if (typeof arguments[0] === 'string') {
                    tempOption.name = arguments[0];
                }
                if (typeof arguments[1] === 'number') {
                    tempOption.sheetCount = arguments[1];
                }
                options = tempOption;
            }
            if (typeof host === 'string' || host === null || host === undefined) {
                host = null;
                if (typeof arguments[2] === "object") {
                    host = arguments[2];
                }
            }
            Workbook.apply(self, arguments);
            if ($) {
                $(host).data('spread', $(host).data('workbook'));
            }
            if (options) {
                var options_name = options.name;
                if (options_name) {
                    self.name = options_name;
                }
                var options_activeSheetIndex = options.activeSheetIndex;
                if (options_activeSheetIndex) {
                    self.setActiveSheetIndex(options_activeSheetIndex);
                }
                var options_sheets = options.sheets;
                if (options_sheets) {
                    applySheetsSetting(self, options.sheets);
                }
            }
        }

        Sheets._extends(Spread, Workbook);
        var map = {
            canUserDragDrop: 'allowUserDragDrop',
            canUserDragFill: 'allowUserDragFill',
            allowUserZoom: 'allowUserZoom',
            allowUserResize: 'allowUserResize',
            allowUndo: 'allowUndo',
            allowSheetReorder: 'allowSheetReorder',
            defaultDragFillType: 'defaultDragFillType',
            showDragFillSmartTag: 'showDragFillSmartTag',
            showHorizontalScrollbar: 'showHorizontalScrollbar',
            showVerticalScrollbar: 'showVerticalScrollbar',
            scrollbarShowMax: 'scrollbarShowMax',
            scrollbarMaxAlign: 'scrollbarMaxAlign',
            tabStripVisible: 'tabStripVisible',
            tabEditable: 'tabEditable',
            newTabVisible: 'newTabVisible',
            tabNavigationVisible: 'tabNavigationVisible',
            cutCopyIndicatorVisible: 'cutCopyIndicatorVisible',
            cutCopyIndicatorBorderColor: 'cutCopyIndicatorBorderColor',
            backColor: 'backColor',
            backgroundImage: 'backgroundImage',
            backgroundImageLayout: 'backgroundImageLayout',
            grayAreaBackColor: 'grayAreaBackColor',
            showResizeTip: 'showResizeTip',
            showDragDropTip: 'showDragDropTip',
            showDragFillTip: 'showDragFillTip',
            showScrollTip: 'showScrollTip',
            scrollIgnoreHidden: 'scrollIgnoreHidden',
            highlightInvalidData: 'highlightInvalidData',
            useTouchLayout: 'useTouchLayout',
            hideSelection: 'hideSelection',
            resizeZeroIndicator: 'resizeZeroIndicator',
            canUserEditFormula: 'allowUserEditFormula',
            enableFormulaTextbox: 'enableFormulaTextbox',
            autoFitType: 'autoFitType',
            referenceStyle: 'referenceStyle'
        };
        for (var p in map) {
            if (map.hasOwnProperty(p)) {
                (function (oldName, name) {
                    Spread.prototype[oldName] = function (value) {
                        if (arguments.length === 0) {
                            return this.options[name];
                        }
                        this.options[name] = value;
                        return this;
                    };
                })(p, map[p]);
            }
        }
        Spread.prototype.setTabStripRatio = function (value) {
            this.options.tabStripRatio = value;
        };
        Spread.prototype.getTabStripRatio = function () {
            return this.options.tabStripRatio;
        };
        Spread.prototype.showCell = function (row, col, verticalPosition, horizontalPosition) {
            var sheet = this.getActiveSheet();
            if (sheet) {
                sheet.showCell(row, col, verticalPosition, horizontalPosition);
            }
        };
        Spread.prototype.showColumn = function (col, horizontalPosition) {
            var sheet = this.getActiveSheet();
            if (sheet) {
                sheet.showColumn(col, horizontalPosition);
            }
        };
        Spread.prototype.showActiveCell = function (verticalPosition, horizontalPosition) {
            var sheet = this.getActiveSheet();
            if (sheet) {
                sheet.showCell(sheet.getActiveRowIndex(), sheet.getActiveColumnIndex(), verticalPosition, horizontalPosition);
            }
        };
        Spread.prototype.showRow = function (row, verticalPosition) {
            var sheet = this.getActiveSheet();
            if (sheet) {
                sheet.showRow(row, verticalPosition);
            }
        };
        Spread.prototype.doCommand = function (action) {
            var commandManager = this.commandManager();
            if (commandManager) {
                if (action.customAction) {
                    if (!action.isRegistered) {
                        var customCommand = {
                            canUndo: action.canUndo(),
                            execute: function (context, options, isUndo) {
                                return action.executeImp(context, options, isUndo);
                            }
                        }
                        var customCommandName = 'customCommand_' + this.customCommandIndex;
                        this.customCommandIndex++;
                        commandManager.register(customCommandName, customCommand);
                        action.name = customCommandName;
                        action.isRegistered = true;
                    }
                    commandManager.execute({cmd: action.name});
                } else {
                    commandManager.execute(action.options);
                }
            }
        };
        var originalIsPaintSuspended = Workbook.prototype.isPaintSuspended;
        Spread.prototype.isPaintSuspended = function (value) {
            if (arguments.length === 0) {
                return originalIsPaintSuspended.call(this);
            }
            if (value) {
                if (!this.isPaintSuspended()) {
                    this.suspendPaint();
                }
            } else {
                while (this.isPaintSuspended()) {
                    this.resumePaint();
                }
            }
            return this;
        };
        Spread.prototype.fromJSON = function (workbookData) {
            var getTypeFromString = GC_Spread_Sheets.getTypeFromString,
                isSame = Sheets.getTypeFromString === getTypeFromString;

            if (!isSame) {
                GC_Spread_Sheets.getTypeFromString = Sheets.getTypeFromString;
            }
            Workbook.prototype.fromJSON.call(this, workbookData);
            if (!isSame) {
                GC_Spread_Sheets.getTypeFromString = getTypeFromString;
            }
        };
        Sheets._processCustomFunctions(Spread.prototype);
        Sheets.Spread = Spread;
        GC_Spread_Sheets.Workbook = Spread;
        if (!window.wijmo) {
            window.wijmo = {spread: Sheets};
        }
        var GcSpreadSheetsOptions = Sheets.GcSpreadSheetsOptions = function () {
            var self = this;
            self.sheetCount = 1;
            self.name = "";
            self.font = "10pt Arial";
            self.allowUserZoom = true;
            self.allowUserResize = true;
            self.tabStripVisible = true;
            self.tabEditable = true;
            self.newTabVisible = true;
            self.tabStripRatio = 0.5;
            self.activeSheetIndex = 0;
            self.sheets = [];
        };

        var methods = {
            init: function (options) {
                var defaultOptions = new GcSpreadSheetsOptions();
                var newOptions = {};
                if (options) {
                    for (var p in defaultOptions) {
                        if (defaultOptions.hasOwnProperty(p)) {
                            newOptions[p] = options[p] || defaultOptions[p];
                        }
                    }
                } else {
                    newOptions = defaultOptions;
                }
                var host = this.get(0);
                new Spread(host, newOptions);
            },
            spread: function () {
                return this.data("workbook");
            },
            destroy: function () {
                var spreadTmp = this.data("workbook");
                if (spreadTmp) {
                    spreadTmp.destroy();
                }
            },
            refresh: function () {
                var spreadTmp = this.data("workbook");
                if (spreadTmp) {
                    spreadTmp.refresh();
                }
            },
            repaint: function () {
                var spreadTmp = this.data("workbook");
                if (spreadTmp) {
                    spreadTmp.repaint();
                }
            }
        };

        if ($) { //for compatibility
            $.fn.wijspread = function (method) {
                if (methods[method]) {
                    return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
                } else if (typeof method === 'object' || !method) {
                    return methods.init.apply(this, arguments);
                }
            };

            if (typeof $.wijmo === 'undefined') {
                $.wijmo = {wijspread: undefined};
            }
            $.wijmo.wijspread = Sheets;
        }
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})
(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets = window.GC.Spread.Sheets;
        var Commands = GC_Spread_Sheets.Commands;
        var KeyMap = Sheets.KeyMap;
        var _extend = Sheets._extends;
        Sheets.RangeChangedAction = Sheets._redefineEnum(GC_Spread_Sheets.RangeChangedAction);
        Sheets.SheetArea = GC_Spread_Sheets.SheetArea;
        Sheets.HeaderAutoText = GC_Spread_Sheets.HeaderAutoText;

        var Sheet = (function (Worksheet) {
            _extend(Sheet, Worksheet);

            function Sheet() {
                Worksheet.apply(this, arguments);
                this.rowRangeGroup = this.rowOutlines;
                this.colRangeGroup = this.columnOutlines;
                this.keyMap = [];
                this._allowEditorReservedLocations = true;
            }

            Sheet.prototype.addKeyMap = function (keyCode, ctrl, shift, alt, meta, action) {
                if (typeof action === 'function') {
                    var key = action.name || action._actionName;
                    var parent = this.getParent();
                    var commandManager = parent && parent.commandManager();
                    if (commandManager && Commands[key]) {
                        commandManager.register('custom_' + key, Commands[key], keyCode, ctrl, shift, alt, meta);
                    }
                }
                var keyMaps = this.keyMap;
                if (!keyMaps) {
                    keyMaps = this.keyMap = [];
                }
                keyMaps.push(new KeyMap(keyCode, ctrl, shift, alt, meta, action));
            };
            Sheet.prototype.removeKeyMap = function (keyCode, ctrl, shift, alt, meta) {
                var parent = this.getParent();
                var commandManager = parent && parent.commandManager();
                if (commandManager) {
                    commandManager.setShortcutKey('', keyCode, ctrl, shift, alt, meta);
                }
                var keyMaps = this.keyMap;
                if (keyMaps) {
                    for (var i = 0, length = keyMaps.length; i < length; i++) {
                        var item = keyMaps[i];
                        if (item && item.key === keyCode && item.ctrl === ctrl && item.shift === shift && item.alt === alt && item.meta === meta) {
                            keyMaps.splice(i, 1);
                            break;
                        }
                    }
                }
            };
            var originalIsPaintSuspended = Worksheet.prototype.isPaintSuspended;
            Sheet.prototype.isPaintSuspended = function (value) {
                if (arguments.length === 0) {
                    return originalIsPaintSuspended.call(this);
                }
                if (value) {
                    if (!this.isPaintSuspended()) {
                        this.suspendPaint();
                    }
                } else {
                    while (this.isPaintSuspended()) {
                        this.resumePaint();
                    }
                }
                return this;
            };
            Sheet.prototype.getName = function () {
                return this.name();
            };
            Sheet.prototype.setName = function (value) {
                this.name(value);
            };
            Sheet.prototype.allowUndo = function (value) {
                var parent = this.getParent();
                if (arguments.length === 0) {
                    return parent ? parent.options.allowUndo : true;
                }

                if (parent) {
                    parent.options.allowUndo = value;
                }
                return this;
            };
            Sheet.prototype.referenceStyle = function (value) {
                var parent = this.getParent();
                if (arguments.length === 0) {
                    return parent ? parent.options.referenceStyle : Sheets.ReferenceStyle.A1;
                }

                if (parent) {
                    parent.options.referenceStyle = value;
                }
                return this;
            };
            Sheet.prototype.setGridlineOptions = function (options) {
                for (var item in options) {
                    if (options.hasOwnProperty(item)) {
                        this.options.gridline[item] = options[item];
                    }
                }
            };
            Sheet.prototype.getGridlineOptions = function () {
                return this.options.gridline;
            };
            Sheet.prototype.setRowHeaderVisible = function (visible) {
                this.options.rowHeaderVisible = visible;
            };
            Sheet.prototype.getRowHeaderVisible = function () {
                return this.options.rowHeaderVisible;
            };
            Sheet.prototype.setColumnHeaderVisible = function (visible) {
                this.options.colHeaderVisible = visible;
            };
            Sheet.prototype.getColumnHeaderVisible = function () {
                return this.options.colHeaderVisible;
            };
            Sheet.prototype.setRowHeaderAutoText = function (autoText) {
                this.options.rowHeaderAutoText = autoText;
            };
            Sheet.prototype.getRowHeaderAutoText = function () {
                return this.options.rowHeaderAutoText;
            };
            Sheet.prototype.setColumnHeaderAutoText = function (autoText) {
                this.options.colHeaderAutoText = autoText;
            };
            Sheet.prototype.getColumnHeaderAutoText = function () {
                return this.options.colHeaderAutoText;
            };
            Sheet.prototype.setRowHeaderAutoTextIndex = function (autoTextIndex) {
                this.options.rowHeaderAutoTextIndex = autoTextIndex;
            };
            Sheet.prototype.getRowHeaderAutoTextIndex = function () {
                return this.options.rowHeaderAutoTextIndex;
            };
            Sheet.prototype.setColumnHeaderAutoTextIndex = function (autoTextIndex) {
                this.options.colHeaderAutoTextIndex = autoTextIndex;
            };
            Sheet.prototype.getColumnHeaderAutoTextIndex = function () {
                return this.options.colHeaderAutoTextIndex;
            };
            Sheet.prototype.setIsProtected = function (isProtected) {
                this.options.isProtected = isProtected;
            };
            Sheet.prototype.getIsProtected = function () {
                return this.options.isProtected;
            };
            Sheet.prototype.setFrozenCount = function (rowCount, colCount) {
                this.frozenRowCount(rowCount);
                this.frozenColumnCount(colCount);
            };
            Sheet.prototype.setFrozenColumnCount = function (colCount) {
                this.frozenColumnCount(colCount);
            };
            Sheet.prototype.getFrozenColumnCount = function () {
                return this.frozenColumnCount();
            };
            Sheet.prototype.setFrozenRowCount = function (rowCount) {
                this.frozenRowCount(rowCount);
            };
            Sheet.prototype.getFrozenRowCount = function () {
                return this.frozenRowCount();
            };
            Sheet.prototype.setFrozenTrailingRowCount = function (rowCount) {
                this.frozenTrailingRowCount(rowCount);
            };
            Sheet.prototype.getFrozenTrailingRowCount = function () {
                return this.frozenTrailingRowCount();
            };
            Sheet.prototype.setFrozenTrailingColumnCount = function (colCount) {
                this.frozenTrailingColumnCount(colCount);
            };
            Sheet.prototype.getFrozenTrailingColumnCount = function () {
                return this.frozenTrailingColumnCount();
            };
            var map = {
                allowCellOverflow: 'allowCellOverflow',
                sheetTabColor: 'sheetTabColor',
                frozenlineColor: 'frozenlineColor',
                clipBoardOptions: 'clipBoardOptions',
                protectionOption: 'protectionOptions',
                selectionBackColor: 'selectionBackColor',
                selectionBorderColor: 'selectionBorderColor'
            };
            for (var p in map) {
                if (map.hasOwnProperty(p)) {
                    (function (oldName, name) {
                        Sheet.prototype[oldName] = function (value) {
                            if (arguments.length === 0) {
                                return this.options[name];
                            }
                            this.options[name] = value;
                            return this;
                        };
                    })(p, map[p]);
                }
            }
            Sheet.prototype.undoManager = function () {
                return this.getParent().undoManager();
            };
            // retired items
            Sheet.prototype.doCommand = function (action) {
                return this.getParent().doCommand(action);
            };
            Sheet.prototype.allowEditorReservedLocations = function (value) {
                if (arguments.length === 0) {
                    return this._allowEditorReservedLocations;
                }
                this._allowEditorReservedLocations = value;
                return this;
            };
            // retired items (end)

            Sheet.prototype.getDeleteRows = function () {
                return this.getDeletedRows();
            };
            Sheet.prototype.updateEventsData = function (type, data) {
                switch (type) {
                    case 'RangeChanged':
                        data.column = data.col;
                        data.columnCount = data.colCount;
                        break;
                    case 'ClipboardChanging':
                    case 'ClipboardChanged':
                        data.copyData = data.copyData.text;
                        break;
                }
            };

            return Sheet;
        })(GC_Spread_Sheets.Worksheet);

        Sheets.Sheet = Sheet;
        GC_Spread_Sheets.Worksheet = Sheet;

        Sheets._processCustomFunctions(Sheet.prototype);

    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets = window.GC.Spread.Sheets;
        var _extends = Sheets._extends;
        Sheets.TextFileOpenFlags = {None: 0, IncludeRowHeader: 1, IncludeColumnHeader: 2, UnFormatted: 8, ImportFormula: 16};
        Sheets.ClipboardPasteOptions = Sheets._redefineEnum(GC_Spread_Sheets.ClipboardPasteOptions);
        Sheets.CopyToOption = Sheets._redefineEnum(GC_Spread_Sheets.CopyToOptions, {
            outline: 'RangeGroup'
        });
        var spreadActions = {};
        [
            "cancelInput", "changeFormulaReference", "clear", "clearAndEditing", "commitArrayFormula",
            "commitInputNavigationDown", "commitInputNavigationUp", "copy", "cut", "moveToNextCell",
            "moveToNextCellThenControl", "moveToPreviousCell", "moveToPreviousCellThenControl",
            "navigationBottom", "navigationDown", "navigationEnd", "navigationEnd2", "navigationFirst",
            "navigationHome", "navigationHome2", "navigationLast", "navigationLeft", "navigationNextSheet",
            "navigationPageDown", "navigationPageUp", "navigationPreviousSheet", "navigationRight",
            "navigationTop", "navigationUp", "paste", "redo", "selectionBottom", "selectionDown",
            "selectionEnd", "selectionFirst", "selectionHome", "selectionLast", "selectionLeft",
            "selectionPageDown", "selectionPageUp", "selectionRight", "selectionTop", "selectionUp",
            "selectNextControl", "selectPreviousControl", "undo"
        ].forEach(function (name) {
            spreadActions[name] = function () {
                if (GC_Spread_Sheets.Commands[name]) {
                    var sheet = this, parent = sheet.getParent();
                    if (parent) {
                        var commandManager = parent && parent.commandManager();
                        if (commandManager) {
                            commandManager.execute({cmd: name, sheetName: sheet.name()});
                        }
                    }
                }
            };
            spreadActions[name]._actionName = name;
        });
        Sheets.SpreadActions = spreadActions;
        var UndoRedo = {};
        UndoRedo.ActionBase = (function () {
            function ActionBase() {
                this.canExecuteChanged = null;
                this.customAction = true;
                this.isRegistered = false;
                this.name = null;
            }

            ActionBase.prototype.executeImp = function (context, options, isUndo) {
                if (isUndo) {
                    if (this.canUndo()) {
                        return this.undo.call(this, options);
                    }
                } else {
                    if (this.canExecute()) {
                        return this.execute.call(this, options);
                    }
                }
                return false;
            };
            ActionBase.prototype.execute = function (arg) {
            };

            ActionBase.prototype.canExecute = function () {
                return true;
            };

            ActionBase.prototype.canUndo = function () {
                return true;
            };

            ActionBase.prototype.saveState = function () {
            };

            ActionBase.prototype.undo = function (arg) {
                return true;
            };
            return ActionBase;
        }());

        UndoRedo.FloatingObjectUndoActionBase = (function (_super) {
            _extends(FloatingObjectUndoActionBase, _super);
            function FloatingObjectUndoActionBase() {
                _super.call(this);
            }

            FloatingObjectUndoActionBase.prototype.init = function (sheet, deleteExtent) {
                this._sheet = sheet;
                this._floatingObjectExtent = deleteExtent;
                this._savedFloatingObjects = [];
            };
            FloatingObjectUndoActionBase.prototype.refreshUI = function (sender) {
                var sheetView = this._sheet;
                if (sheetView) {
                    sheetView.invalidateLayout();
                    sheetView.repaint();
                }
            };
            FloatingObjectUndoActionBase.prototype.hasFloatingObjectsSelected = function () {
                var floatingObjects = this._sheet.floatingObjects.all();
                for (var i = 0; i < floatingObjects.length; i++) {
                    if (floatingObjects[i].isSelected()) {
                        return true;
                    }
                }
                return false;
            };
            FloatingObjectUndoActionBase.prototype.canExecute = function (sender) {
                if (this.hasFloatingObjectsSelected()) {
                    return true;
                }
                return false;
            };
            FloatingObjectUndoActionBase.prototype.canUndo = function () {
                if (this._savedFloatingObjects && this._savedFloatingObjects.length > 0) {
                    return true;
                }
                return false;
            };
            FloatingObjectUndoActionBase.prototype.saveState = function () {
                var self = this;
                if (self._floatingObjectExtent && self._floatingObjectExtent.names instanceof Array) {
                    for (var i = 0, len = self._floatingObjectExtent.names.length; i < len; i++) {
                        var item = self._sheet.floatingObjects.get(self._floatingObjectExtent.names[i]);
                        if (item) {
                            self._savedFloatingObjects.push(item);
                        }
                    }
                }
            };
            return FloatingObjectUndoActionBase;
        }(UndoRedo.ActionBase));

        UndoRedo.DragFillExtent = function (startRange, fillRange, autoFillType, fillDirection) {
            this.startRange = startRange;
            this.fillRange = fillRange;
            this.autoFillType = autoFillType;
            this.fillDirection = fillDirection;
        };
        UndoRedo.DragFillUndoAction = function (sheet, dragFillExtent) {
            this.options = {
                cmd: 'dragFill',
                sheetName: sheet.name(),
                startRange: dragFillExtent.startRange,
                fillRange: dragFillExtent.fillRange,
                autoFillType: dragFillExtent.autoFillType,
                fillDirection: dragFillExtent.fillDirection
            };
        };
        UndoRedo.DragDropUndoAction = function (sheet, dragMoveExtent, copy, insert, option) {
            this.options = {
                cmd: 'dragDrop',
                sheetName: sheet.name(),
                formRow: dragMoveExtent.fromRow,
                fromColumn: dragMoveExtent.fromColumn,
                toRow: dragMoveExtent.toRow,
                tocolumn: dragMoveExtent.toRow,
                rowCount: dragMoveExtent.rowCount,
                columnCount: dragMoveExtent.columnCount,
                copy: copy,
                insert: insert,
                option: option
            };
        };
        UndoRedo.DragDropExtent = function (fromRow, fromColumn, toRow, toColumn, rowCount, columnCount) {
            var self = this;
            self.fromRow = fromRow;
            self.fromColumn = fromColumn;
            self.toRow = toRow;
            self.toColumn = toColumn;
            self.rowCount = rowCount;
            self.columnCount = columnCount;
        }
        UndoRedo.ClipboardPasteUndoAction = function (sheet, srcSheet, destSheet, pasteExtent, option) {
            this.options = {
                cmd: 'clipboardPaste',
                sheetName: sheet.name(),
                fromSheet: srcSheet,
                fromRanges: [pasteExtent.fromRange],
                pastedRanges: pasteExtent.pastedRanges,
                isCutting: pasteExtent.isCutting,
                clipboardText: pasteExtent.clipboardText,
                pasteOption: option
            };
        };
        UndoRedo.ClipboardPasteRangeUndoAction = function (sheet, srcSheet, destSheet, pasteRangeExtent, option) {
            this.options = {
                cmd: 'clipboardPaste',
                sheetName: sheet.name(),
                fromSheet: srcSheet,
                fromRanges: pasteRangeExtent.sourceRange,
                pastedRanges: pasteRangeExtent.targetRange,
                isCutting: pasteRangeExtent.isCutting,
                clipboardText: pasteRangeExtent.clipboardText,
                pasteOption: option
            };
        };
        UndoRedo.CellEditUndoAction = function (sheet, cellEditInfo) {
            this.options = {
                cmd: 'editCell',
                sheetName: sheet.name(),
                row: cellEditInfo.row,
                col: cellEditInfo.col,
                newValue: cellEditInfo.newValue,
                autoFormat: cellEditInfo.autoFormat
            };
        };
        UndoRedo.ClearRangeValueUndoAction = function (sheet, clearRange) {
            this.options = {
                cmd: 'clearValues',
                sheetName: sheet.name(),
                ranges: [clearRange]
            };
        };
        UndoRedo.ClearValueUndoAction = function (sheet, ranges) {

            this.options = {
                cmd: 'clearValues',
                sheetName: sheet.name(),
                ranges: ranges
            };
        };
        UndoRedo.ColumnResizeUndoAction = function (sheet, columns, size, rowHeader) {
            this.options = {
                cmd: 'resizeColumn',
                sheetName: sheet.name(),
                columns: columns,
                size: size,
                rowHeader: rowHeader
            };
        };
        UndoRedo.ColumnAutoFitUndoAction = function (sheet, columns, rowHeader, autoFitType) {

            this.options = {
                cmd: 'autoFitColumn',
                sheetName: sheet.name(),
                columns: columns,
                rowHeader: rowHeader,
                autoFitType: autoFitType
            };

        };
        UndoRedo.ZoomUndoAction = function (sheet, newZoomFactor) {
            this.options = {
                cmd: 'zoom',
                sheetName: sheet.name(),
                zoomFactor: newZoomFactor
            };
        };
        UndoRedo.SheetRenameUndoAction = function (sheet, newName) {
            this.options = {
                cmd: 'renameSheet',
                sheetName: sheet.name(),
                name: newName
            };
        };
        UndoRedo.GroupExtent = function (index, count) {
            this.index = index;
            this.count = count;
        };
        UndoRedo.RowGroupUndoAction = function (sheet, groupExtent) {
            this.options = {
                cmd: 'outlineRow',
                sheetName: sheet.name(),
                index: groupExtent.index,
                count: groupExtent.count
            };
        };
        UndoRedo.ColumnGroupUndoAction = function (sheet, groupExtent) {

            this.options = {
                cmd: 'outlineColumn',
                sheetName: sheet.name(),
                index: groupExtent.index,
                count: groupExtent.count
            };
        };
        UndoRedo.RowUngroupUndoAction = function (sheet, groupExtent) {
            this.options = {
                cmd: 'removeRowOutline',
                sheetName: sheet.name(),
                index: groupExtent.index,
                count: groupExtent.count
            };
        };
        UndoRedo.ColumnUngroupUndoAction = function (sheet, groupExtent) {
            this.options = {
                cmd: 'removeColumnOutline',
                sheetName: sheet.name(),
                index: groupExtent.index,
                count: groupExtent.count
            };
        };
        UndoRedo.GroupExpandExtent = function (index, level, collapsed) {
            this.index = index;
            this.level = level;
            this.collapsed = collapsed;
        };
        UndoRedo.RowGroupExpandUndoAction = function (sheet, rowExpandExtent) {
            this.options = {
                cmd: 'expandRowOutline',
                sheetName: sheet.name(),
                index: rowExpandExtent.index,
                level: rowExpandExtent.level,
                collapsed: rowExpandExtent.collapsed
            };
        };
        UndoRedo.ColumnGroupExpandUndoAction = function (sheet, columnExpandExtent) {
            this.options = {
                cmd: 'expandColumnOutline',
                sheetName: sheet.name(),
                index: columnExpandExtent.index,
                level: columnExpandExtent.level,
                collapsed: columnExpandExtent.collapsed
            };
        };
        UndoRedo.GroupHeaderExpandExtent = function (level) {
            this.level = level;
        };
        UndoRedo.RowGroupHeaderExpandUndoAction = function (sheet, rowGroupHeaderExpandExtent) {
            this.options = {
                cmd: 'expandRowOutlineForLevel',
                sheetName: sheet.name(),
                level: rowGroupHeaderExpandExtent.level
            };
        };
        UndoRedo.ColumnGroupHeaderExpandUndoAction = function (sheet, columnGroupHeaderExpandExtent) {
            this.options = {
                cmd: 'expandColumnOutlineForLevel',
                sheetName: sheet.name(),
                level: columnGroupHeaderExpandExtent.level
            };
        };
        UndoRedo.RowResizeUndoAction = function (sheet, rows, size, columnHeader) {
            this.options = {
                cmd: 'resizeRow',
                sheetName: sheet.name(),
                rows: rows,
                size: size,
                columnHeader: columnHeader
            };
        };
        UndoRedo.RowAutoFitUndoAction = function (sheet, rows, columnHeader, autoFitType) {
            this.options = {
                cmd: 'autoFitRow',
                sheetName: sheet.name(),
                rows: rows,
                columnHeader: columnHeader,
                autoFitType: autoFitType
            };
        };
        UndoRedo.FloatingObjectExtent = function (names) {
            this.names = names;
        };
        UndoRedo.ReszingFloatingObjectExtent = function (offsetX, offsetY, offsetWidth, offsetHeight) {
            this.offsetX = offsetX;
            this.offsetY = offsetY;
            this.offsetWidth = offsetWidth;
            this.offsetHeight = offsetHeight;
        };
        UndoRedo.ResizingFloatingObjectUndoAction = function (sheet, floatingObjectExtent, resizingSettings) {
            this.options = {
                cmd: 'resizeFloatingObjects',
                sheetName: sheet.name(),
                floatingObjects: floatingObjectExtent.names,
                offsetX: resizingSettings.offsetX,
                offsetY: resizingSettings.offsetY,
                offsetWidth: resizingSettings.offsetWidth,
                offsetHeight: resizingSettings.offsetHeight
            };
        };
        UndoRedo.MovingFloatingObjectExtent = function (offsetX, offsetY) {
            this.offsetX = offsetX;
            this.offsetY = offsetY;
        };
        UndoRedo.MovingFloatingObjectUndoAction = function (sheet, floatingObjectExtent, movingSettings) {
            this.options = {
                cmd: 'moveFloatingObjects',
                sheetName: sheet.name(),
                floatingObjects: floatingObjectExtent.names,
                offsetX: movingSettings.offsetX,
                offsetY: movingSettings.offsetY
            };
        };
        UndoRedo.DeleteFloatingObjectUndoAction = function (sheet, deleteExtent) {
            this.options = {
                cmd: 'deleteFloatingObjects',
                sheetName: sheet.name(),
                floatingObjects: deleteExtent.names
            };
        };
        UndoRedo.ClipboardPasteFloatingObjectUndoAction = function (sheet, floatingObjectExtent, fromSheet) {
            this.options = {
                cmd: 'pasteFloatingObjects',
                sheetName: sheet.name(),
                floatingObjects: floatingObjectExtent.names,
                fromSheet: fromSheet
            };
        };
        UndoRedo.DragCopyFloatingObjectUndoAction = function (sheet, floatingObjectExtent, movingInfo) {
            this.options = {
                cmd: 'dragCopyFloatingObjects',
                sheetName: sheet.name(),
                floatingObjects: floatingObjectExtent.names,
                offsetX: movingInfo.offsetX,
                offsetY: movingInfo.offsetY
            };
        };
        UndoRedo.PasteExtent = function (fromRange, pastedRanges, isCutting, clipboardText) {
            this.fromRange = fromRange;
            this.pastedRanges = pastedRanges;
            this.isCutting = isCutting;
            this.clipboardText = clipboardText;
        };
        UndoRedo.PasteRangeExtent = function (sourceRange, targetRange, isCutting, clipboardText) {
            this.sourceRange = sourceRange;
            this.targetRange = targetRange;
            this.isCutting = isCutting;
            this.clipboardText = clipboardText;
        };

        Sheets.UndoRedo = UndoRedo;
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        Sheets.EditorStatus = Sheets._redefineEnum(window.GC.Spread.Sheets.EditorStatus);
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets = window.GC.Spread.Sheets;
        Sheets.SelectionPolicy = Sheets._redefineEnum(GC_Spread_Sheets.SelectionPolicy);
        Sheets.SelectionUnit = Sheets._redefineEnum(GC_Spread_Sheets.SelectionUnit);
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets = window.GC.Spread.Sheets;
        var _extends = Sheets._extends;

        var Sheet = Sheets.Sheet;
        Sheet.prototype.setBorder = function (cellRange, border, option, sheetArea) {
            var newRange = new GC_Spread_Sheets.CellRange(this, cellRange.row, cellRange.col, cellRange.rowCount, cellRange.colCount, sheetArea);
            newRange.setBorder(border, option);
        };

        function clearStyleProperty(sheet, row, col, rowCount, colCount, propertyName, sheetArea) {
            for (var i = 0, r = row; i < rowCount; i++, r++) {
                for (var j = 0, c = col; j < colCount; j++, c++) {
                    var style = sheet.getStyle(r, c, sheetArea);
                    if (style) {
                        if (propertyName === "dataValidator") {
                            propertyName = "validator";
                        }
                        style[propertyName] = undefined;
                    }
                }
            }
        }

        var Cell = (function (_super) {
            _extends(Cell, _super);

            function Cell(sheet, row, col, sheetArea) {
                _super.call(this, sheet, row, col, 1, 1, sheetArea);

                Object.defineProperty(this, 'row2', {
                    get: function () {
                        return row + this.rowCount - 1;
                    }
                });
                Object.defineProperty(this, 'col2', {
                    get: function () {
                        return col + this.colCount - 1;
                    }
                });
            }

            var cellPrototype = Cell.prototype;

            cellPrototype.clearStyleProperty = function (propertyName) {
                var self = this;
                clearStyleProperty(self.sheet, self.row, self.col, self.rowCount, self.colCount, propertyName, self.sheetArea);
            };

            cellPrototype.dataValidator = cellPrototype.validator;

            return Cell;
        })(GC_Spread_Sheets.CellRange);
        Sheets.Cell = Cell;

        var Row = (function (_super) {
            _extends(Row, _super);

            function Row(sheet, index, sheetArea) {
                _super.call(this, sheet, index, -1, 1, -1, sheetArea);
                Object.defineProperty(this, 'index', {
                    get: function () {
                        return this.row;
                    }
                });
                Object.defineProperty(this, 'index2', {
                    get: function () {
                        return this.row + this.rowCount - 1;
                    }
                });
            }

            var rowPrototype = Row.prototype;
            rowPrototype.clearStyleProperty = function (propertyName) {
                var self = this;

                clearStyleProperty(self.sheet, self.row, -1, self.rowCount, 1, propertyName, self.sheetArea);
                // need trigger Events.RowChanged
            };

            rowPrototype.dataValidator = rowPrototype.validator;

            return Row;
        })(GC_Spread_Sheets.CellRange);
        Sheets.Row = Row;

        var Column = (function (_super) {
            _extends(Column, _super);

            function Column(sheet, index, sheetArea) {
                _super.call(this, sheet, -1, index, -1, 1, sheetArea);
                Object.defineProperty(this, 'index', {
                    get: function () {
                        return this.col;
                    }
                });
                Object.defineProperty(this, 'index2', {
                    get: function () {
                        return this.col + this.colCount - 1;
                    }
                });
            }

            var columnPrototype = Column.prototype;
            columnPrototype.clearStyleProperty = function (propertyName) {
                var self = this;
                clearStyleProperty(self.sheet, -1, self.col, -1, self.colCount, propertyName, self.sheetArea);
                // need trigger Events.ColumnChanged
            };

            columnPrototype.dataValidator = columnPrototype.validator;

            return Column;
        })(GC_Spread_Sheets.CellRange);
        Sheets.Column = Column;

        Sheet.prototype.getCell = function (row, col, sheetArea) {
            return new Cell(this, row, col, sheetArea);
        }

        Sheet.prototype.getCells = function (row, col, row2, col2, sheetArea) {
            var rowIndex = row2 > row ? row : row2;
            var colIndex = col2 > col ? col : col2;
            var result = this.getCell(rowIndex, colIndex, sheetArea);
            result.rowCount = Math.abs(row2 - row) + 1;
            result.colCount = Math.abs(col2 - col) + 1;
            return result;
        };
        Sheet.prototype.getRow = function (index, sheetArea) {
            return new Row(this, index, sheetArea);
        };
        Sheet.prototype.getRows = function (index, index2, sheetArea) {
            var indexMin = index2 > index ? index : index2;
            var result = this.getRow(indexMin, sheetArea);
            result.rowCount = Math.abs(index2 - index) + 1;
            return result;

        };
        Sheet.prototype.getColumn = function (index, sheetArea) {
            return new Column(this, index, sheetArea);
        };
        Sheet.prototype.getColumns = function (index, index2, sheetArea) {
            var indexMin = index2 > index ? index : index2;
            var result = this.getColumn(indexMin, sheetArea);
            result.colCount = Math.abs(index2 - index) + 1;
            return result;
        };

    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        Sheets.CellBindingSource = window.GC.Spread.Sheets.Bindings.CellBindingSource;

        Sheets.Sheet.prototype.isColumnBound = function (column) {
            return !!this.getDataColumnName(column);
        };
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets = window.GC.Spread.Sheets;
        Sheets.ReferenceStyle = Sheets._redefineEnum(GC_Spread_Sheets.ReferenceStyle, {
            'r1c1': 'R1C1'
        });
        Sheets.NameInfo = GC_Spread_Sheets.NameInfo;

        var GC_Spread_CalcEngine = window.GC.Spread.CalcEngine;
        var Sheets_Calc = Sheets.Calc || (Sheets.Calc = {});
        Sheets_Calc.evaluateFormula = GC_Spread_Sheets.CalcEngine.evaluateFormula;
        Sheets_Calc.rangeToFormula = GC_Spread_Sheets.CalcEngine.rangeToFormula;
        Sheets_Calc.rangesToFormula = GC_Spread_Sheets.CalcEngine.rangesToFormula;
        Sheets_Calc.RangeReferenceRelative = GC_Spread_Sheets.CalcEngine.RangeReferenceRelative;
        Sheets_Calc.SheetParserContext = GC_Spread_Sheets.CalcEngine.SheetParserContext; // internal
        Sheets_Calc.ParserContext = GC_Spread_CalcEngine.ParserContext; // internal
        Sheets_Calc.Parser = GC_Spread_CalcEngine.Parser; // internal
        Sheets_Calc.EvaluateContext = GC_Spread_CalcEngine.EvaluateContext; // internal
        Sheets_Calc.AsyncEvaluateContext = GC_Spread_CalcEngine.AsyncEvaluateContext;
        Sheets_Calc.Evaluator = GC_Spread_CalcEngine.Evaluator; // internal
        Sheets_Calc.CalcSource = GC_Spread_CalcEngine.CalcSource; // internal
        Sheets_Calc.CalcService = GC_Spread_CalcEngine.CalcService; // internal
        Sheets_Calc.CalcSourceModel = GC_Spread_CalcEngine.CalcSourceModel; // internal
        Sheets_Calc.CalcError = GC_Spread_CalcEngine.CalcError;
        Sheets_Calc.Errors = GC_Spread_CalcEngine.Errors; // internal
        Sheets_Calc.CalcArray = GC_Spread_CalcEngine.CalcArray; // internal
        Sheets_Calc.CalcValueType = {
            anyType: 0,
            numberType: 1,
            stringType: 2,
            booleanType: 3,
            dateType: 4
        };
        Sheets_Calc.Reference = GC_Spread_CalcEngine.CalcReference;
        Sheets_Calc.SheetReference = GC_Spread_CalcEngine.CalcReference;

        function Operator(name) {
            this.name = name;
        }

        Operator.prototype.getName = function () {
            return this.name;
        };
        Operator.prototype.compareTo = function (other) {
            return this.name.toLowerCase() === other.name.toLowerCase();
        };
        Sheets_Calc.Operator = Operator;

        function UnaryOperator(name) {
            Operator.call(this, name);
        }

        UnaryOperator.prototype.evaluate = function (operand, context) { //eslint-disable-line

        };
        Sheets_Calc.UnaryOperator = UnaryOperator;

        function BinaryOperator(name, acceptsReference) {
            Operator.call(this, name);
            this.acceptsReference = acceptsReference;
        }

        BinaryOperator.prototype.evaluate = function (left, right, context) { //eslint-disable-line

        };
        Sheets_Calc.BinaryOperator = BinaryOperator;

        var Sheets_Calc_Functions = Sheets_Calc.Functions || (Sheets_Calc.Functions = {});
        Sheets_Calc_Functions.ArrayArgumentEvaluateMode = GC_Spread_CalcEngine.Functions.ArrayArgumentEvaluateMode; // internal
        Sheets_Calc_Functions.Function = GC_Spread_CalcEngine.Functions.Function;
        Sheets_Calc_Functions.AsyncFunction = GC_Spread_CalcEngine.Functions.AsyncFunction;
        Sheets_Calc_Functions.defineGlobalCustomFunction = GC_Spread_CalcEngine.Functions.defineGlobalCustomFunction;
        Sheets_Calc_Functions.findGlobalFunction = GC_Spread_CalcEngine.Functions.findGlobalFunction;

        var Sheets_Calc_Expressions = Sheets_Calc.Expressions || (Sheets_Calc.Expressions = {});
        var Expression = Sheets_Calc_Expressions.Expression = GC_Spread_CalcEngine.Expression;

        Sheets_Calc_Expressions.ParenthesesExpression = function (arg) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.parentheses);
            this.value = arg;
        };

        Sheets_Calc_Expressions.FunctionExpression = function (fn, arg) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.function);
            this.function = fn;
            this.arguments = arg;
            this.functionName = fn.name;
        };
        Sheets_Calc_Expressions.FunctionExpression.prototype.argCount = function () {
            return this.arguments ? this.arguments.length : 0;
        };
        Sheets_Calc_Expressions.FunctionExpression.prototype.getArg = function (index) {
            return this.arguments ? this.arguments[index] : null;
        };
        Sheets_Calc_Expressions.FunctionExpression.prototype.getFunctionName = function () {
            return this.functionName;
        };

        Sheets_Calc_Expressions.NameExpression = function (name) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.name);
            this.name = name;
        };
        Sheets_Calc_Expressions.BangNameExpression = function (name) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.name);
            this.name = name;
        };
        Sheets_Calc_Expressions.ExternalNameExpression = function (source, name) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.name);
            this.source = source;
            this.name = name;
        };
        Sheets_Calc_Expressions.ConstantExpression = function (value) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.unknow);
            this.value = value;
        };
        Sheets_Calc_Expressions.BooleanExpression = function (value) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.boolean);
            this.value = value;
        };
        Sheets_Calc_Expressions.DoubleExpression = function (value, originalNumAsString) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.number);
            this.value = value;
        };
        Sheets_Calc_Expressions.StringExpression = function (value) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.string);
            this.value = value;
        };
        Sheets_Calc_Expressions.ErrorExpression = function (value) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.error);
            this.value = value;
        };
        Sheets_Calc_Expressions.ExternalErrorExpression = function (source, value) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.error);
            this.value = value;
        };
        Sheets_Calc_Expressions.SheetRangeErrorExpression = function (startSource, endSource, value) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.error);
            this.value = value;
        };
        Sheets_Calc_Expressions.BangErrorExpression = function (value) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.error);
            this.value = value;
        };
        Sheets_Calc_Expressions.ArrayExpression = function (value) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.array);
            this.value = value;
        };
        Sheets_Calc_Expressions.MissingArgumentExpression = function () {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.missingArgument);
        };
        Sheets_Calc_Expressions.OperatorExpression = function (operator) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.operator);
            this.operatorType = operator;
        };
        Sheets_Calc_Expressions.UnaryOperatorExpression = function (operator, operand) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.operator);
            this.operatorType = operator;
            this.value = operand;
        };
        Sheets_Calc_Expressions.BinaryOperatorExpression = function (operator, left, right) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.operator);
            this.operatorType = operator;
            this.value = left;
            this.value2 = right;
        };
        Sheets_Calc_Expressions.ReferenceExpression = function () {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.reference);
        };
        Sheets_Calc_Expressions.ExternalReferenceExpression = function (source) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.reference);
            this.source = source;
        };
        Sheets_Calc_Expressions.CellExpression = function (row, column, rowRelative, columnRelative) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.reference);
            this.row = row;
            this.column = column;
            this.rowRelative = rowRelative;
            this.columnRelative = columnRelative;
        };
        Sheets_Calc_Expressions.BangCellExpression = function (row, column, rowRelative, columnRelative) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.reference);
            this.row = row;
            this.column = column;
            this.rowRelative = rowRelative;
            this.columnRelative = columnRelative;
        };
        Sheets_Calc_Expressions.ExternalCellExpression = function (source, row, column, rowRelative, columnRelative) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.reference);
            this.source = source;
            this.row = row;
            this.column = column;
            this.rowRelative = rowRelative;
            this.columnRelative = columnRelative;
        };
        Sheets_Calc_Expressions.RangeExpression = function (startRow, startColumn, endRow, endColumn, startRowRelative, startColumnRelative, endRowRelative, endColumnRelative) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.reference);
            this.row = startRow;
            this.column = startColumn;
            this.endRow = endRow;
            this.endColumn = endColumn;
            this.rowRelative = startRowRelative;
            this.columnRelative = startColumnRelative;
            this.endRowRelative = endRowRelative;
            this.endColumnRelative = endColumnRelative;
        };
        Sheets_Calc_Expressions.BangRangeExpression = function (startRow, startColumn, endRow, endColumn, startRowRelative, startColumnRelative, endRowRelative, endColumnRelative) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.reference);
            this.row = startRow;
            this.column = startColumn;
            this.endRow = endRow;
            this.endColumn = endColumn;
            this.rowRelative = startRowRelative;
            this.columnRelative = startColumnRelative;
            this.endRowRelative = endRowRelative;
            this.endColumnRelative = endColumnRelative;
        };
        Sheets_Calc_Expressions.ExternalRangeExpression = function (source, startRow, startColumn, endRow, endColumn, startRowRelative, startColumnRelative, endRowRelative, endColumnRelative) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.reference);
            this.source = source;
            this.row = startRow;
            this.column = startColumn;
            this.endRow = endRow;
            this.endColumn = endColumn;
            this.rowRelative = startRowRelative;
            this.columnRelative = startColumnRelative;
            this.endRowRelative = endRowRelative;
            this.endColumnRelative = endColumnRelative;
        };
        Sheets_Calc_Expressions.SheetRangeExpression = function (startSource, endSource, startRow, startColumn, endRow, endColumn, startRowRelative, startColumnRelative, endRowRelative, endColumnRelative) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.reference);
            this.source = startSource;
            this.endSource = endSource;
            this.row = startRow;
            this.column = startColumn;
            this.endRow = endRow;
            this.endColumn = endColumn;
            this.rowRelative = startRowRelative;
            this.columnRelative = startColumnRelative;
            this.endRowRelative = endRowRelative;
            this.endColumnRelative = endColumnRelative;
        };
        Sheets_Calc_Expressions.StructReferenceExpression = function (structRef, context) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.structReference);

        };
        Sheets_Calc_Expressions.NameIdentityExpression = function (nameIdentity) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.unknow);
        };
        Sheets_Calc_Expressions.ExternalNameIdentityExpression = function (source, nameIdentity) {
            Expression.call(this, GC_Spread_CalcEngine.ExpressionType.unknow);
        };
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets_CellTypes = window.GC.Spread.Sheets.CellTypes;
        Sheets.BaseCellType = GC_Spread_Sheets_CellTypes.Base;
        Sheets.TextCellType = GC_Spread_Sheets_CellTypes.Text;
        Sheets.RowHeaderCellType = GC_Spread_Sheets_CellTypes.RowHeader;
        Sheets.ColumnHeaderCellType = GC_Spread_Sheets_CellTypes.ColumnHeader;
        Sheets.CornerCellType = GC_Spread_Sheets_CellTypes.Corner;
        Sheets.CheckBoxTextAlign = GC_Spread_Sheets_CellTypes.CheckBoxTextAlign;
        Sheets.CheckBoxCellType = GC_Spread_Sheets_CellTypes.CheckBox;
        Sheets.ButtonCellType = GC_Spread_Sheets_CellTypes.Button;
        Sheets.HyperLinkTargetType = Sheets._redefineEnum(GC_Spread_Sheets_CellTypes.HyperLinkTargetType);
        Sheets.HyperLinkCellType = GC_Spread_Sheets_CellTypes.HyperLink;
        Sheets.EditorValueType = Sheets._redefineEnum(GC_Spread_Sheets_CellTypes.EditorValueType);
        Sheets.ComboBoxCellType = GC_Spread_Sheets_CellTypes.ComboBox;

        Sheets.CustomCellType = Sheets.BaseCellType;
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets_Comments = window.GC.Spread.Sheets.Comments;
        Sheets.Comment = GC_Spread_Sheets_Comments.Comment;
        Sheets.CommentState = Sheets._redefineEnum(GC_Spread_Sheets_Comments.CommentState);
        Sheets.DisplayMode = Sheets._redefineEnum(GC_Spread_Sheets_Comments.DisplayMode);
        Sheets.Padding = GC_Spread_Sheets_Comments.Padding;

        var Sheet = Sheets.Sheet;
        Sheet.prototype.setComment = function (row, col, comment) {
            if (row === undefined || col === undefined) {
                return;
            }
            if (comment) {
                var cmt = this.comments.add(row, col, comment);
                var ignoreNames = ['clone', 'toJSON', 'fromJSON', 'text', 'zIndex'];
                for (var prop in comment) {
                    if (ignoreNames.indexOf(prop) === -1) {
                        var item = comment[prop];
                        if (typeof item === 'function') {
                            cmt[prop](comment[prop]());
                        }
                    }
                }
            } else {
                this.comments.remove(row, col);
            }
        };
        Sheet.prototype.getComment = function (row, col) {
            return this.comments.get(row, col);
        };
        Sheet.prototype.getComments = function () {
            return this.comments.all();
        };
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets_ConditionalFormatting = window.GC.Spread.Sheets.ConditionalFormatting;
        var GC_Spread_Sheets_ConditionalFormatting_IconSetRule = GC_Spread_Sheets_ConditionalFormatting.IconSetRule;
        var _extends = Sheets._extends, defineProperty = Sheets.defineProperty,
            getPropertyValue = Sheets.getPropertyValue, rewriteMethod = Sheets._rewritePrototypeMethod;
        var keyword_null = null, key_undefined = undefined;

        function defineRuleProperty(rule) {
            defineProperty(rule, 'innerRule', ['ranges', 'style', 'condition', 'type',
                'operator', 'value1', 'value2', 'text', 'formula', 'rank']);
        }

        function convertRule(rule) {
            var retRule = {};
            switch (rule.ruleType()) {
                case 1: /*cellValueRule*/
                    retRule = new Sheets.CellValueRule();
                    break;
                case 2: /*specificTextRule*/
                    retRule = new Sheets.SpecificTextRule();
                    break;
                case 3: /*formulaRule*/
                    retRule = new Sheets.FormulaRule();
                    break;
                case 4: /*dateOccurringRule*/
                    retRule = new Sheets.DateOccurringRule();
                    break;
                case 5: /*top10Rule*/
                    retRule = new Sheets.Top10Rule();
                    break;
                case 6: /*uniqueRule*/
                    retRule = new Sheets.UniqueRule();
                    break;
                case 7: /*duplicateRule*/
                    retRule = new Sheets.DuplicateRule();
                    break;
                case 8: /*averageRule*/
                    retRule = new Sheets.AverageRule();
                    break;
                case 10: /*twoScaleRule*/
                    retRule = new Sheets.TwoScaleRule();
                    break;
                case 11: /*threeScaleRule*/
                    retRule = new Sheets.ThreeScaleRule();
                    break;
                case 12: /*dataBarRule*/
                    retRule = new Sheets.DataBarRule();
                    break;
                case 13: /*iconSetRule*/
                    retRule = new Sheets.IconSetRule();
                    break;
                default: /*conditionRuleBase*/
                    retRule = new Sheets.ConditionRuleBase();
                    break;
            }
            retRule.innerRule = rule;
            return retRule;
        }

        function getCachedRule(cfs, rule) {
            var tempRule = rule;
            if (!tempRule || tempRule.innerRule) {
                return;
            }
            cfs._ruleCache.every(function (item) {
                if (item.innerRule === tempRule) {
                    tempRule = item;
                    return false;
                }
                return true;
            });
            return tempRule;
        }

        function rewriteRuleMethod(destProto) {
            destProto.hasNoReference = function () {
                var ranges = this.innerRule.ranges();
                return !(ranges && ranges.length > 0);
            };
            ['evaluate', 'initCondition', 'reset', 'contains', 'fromJSON', 'toJSON',
                'priority', 'getExpected', 'intersects', 'stopIfTrue', 'getBaseCoordinate'].forEach(function (funcName) {
                rewriteMethod(destProto, 'innerRule', funcName);
            });
            rewriteMethod(destProto, 'innerRule', 'createCondition', keyword_null, function (value) {
                return convertCondition(value);
            });
        }

        function defineConditionProperty(con) {
            Sheets.defineProperty(con, 'innerCondition', ['compareType', 'item1', 'item2',
                'ignoreBlank', 'expected', 'formula', 'treatNullValueAsZero', 'integerValue',
                'forceValue2Text', 'useWildCards', 'ignoreCase', 'customValueType',
                'expectTypeId', 'type', 'ranges', 'isPercent', 'regex']);
        }

        function convertCondition(condition) {
            var retCondition = {};
            switch (condition.conType()) {
                case 0: /*relationCondition*/
                    retCondition = new Sheets.RelationCondition();
                    break;
                case 1: /*numberCondition*/
                    retCondition = new Sheets.NumberCondition();
                    break;
                case 2: /*textCondition*/
                    retCondition = new Sheets.TextCondition();
                    break;
                case 3: /*colorCondition*/
                    retCondition = new Sheets.ColorCondition();
                    break;
                case 4: /*formulaCondition*/
                    retCondition = new Sheets.FormulaCondition();
                    break;
                case 5: /*dateCondition*/
                    retCondition = new Sheets.DateCondition();
                    break;
                case 6: /*dateExCondition*/
                    retCondition = new Sheets.DateExCondition();
                    break;
                case 7: /*textLengthCondition*/
                    retCondition = new Sheets.TextLengthCondition();
                    break;
                case 8: /*top10Condition*/
                    retCondition = new Sheets.Top10Condition();
                    break;
                case 10: /*averageCondition*/
                    retCondition = new Sheets.AverageCondition();
                    break;
                case 11: /*cellValueCondition*/
                    retCondition = new Sheets.CellValueCondition();
                    break;
                case 12: /*areaCondition*/
                    retCondition = new Sheets.AreaCondition();
                    break;
            }
            retCondition.innerCondition = condition;
            return retCondition;
        }

        function rewriteConditionMethod(destProto) {
            ['evaluate', 'reset', 'getExpected', 'getValidList', 'fromJSON', 'toJSON'].forEach(function (funcName) {
                rewriteMethod(destProto, 'innerCondition', funcName);
            });
        }

        Sheets.GeneralCompareType = Sheets._redefineEnum(GC_Spread_Sheets_ConditionalFormatting.GeneralComparisonOperators);
        Sheets.RelationCompareType = Sheets._redefineEnum(GC_Spread_Sheets_ConditionalFormatting.LogicalOperators);
        Sheets.ComparisonOperator = Sheets._redefineEnum(GC_Spread_Sheets_ConditionalFormatting.ComparisonOperators);
        Sheets.TextComparisonOperator = Sheets._redefineEnum(GC_Spread_Sheets_ConditionalFormatting.TextComparisonOperators);
        Sheets.TextCompareType = Sheets._redefineEnum(GC_Spread_Sheets_ConditionalFormatting.TextCompareType);
        Sheets.ColorCompareType = Sheets._redefineEnum(GC_Spread_Sheets_ConditionalFormatting.ColorCompareType);
        Sheets.CustomValueType = Sheets._redefineEnum(GC_Spread_Sheets_ConditionalFormatting.CustomValueType);
        Sheets.DateCompareType = Sheets._redefineEnum(GC_Spread_Sheets_ConditionalFormatting.DateCompareType);
        Sheets.Top10ConditionType = Sheets._redefineEnum(GC_Spread_Sheets_ConditionalFormatting.Top10ConditionType);
        Sheets.DateOccurringType = Sheets._redefineEnum(GC_Spread_Sheets_ConditionalFormatting.DateOccurringType);
        Sheets.QuarterType = Sheets._redefineEnum(GC_Spread_Sheets_ConditionalFormatting.QuarterType);
        Sheets.AverageConditionType = Sheets._redefineEnum(GC_Spread_Sheets_ConditionalFormatting.AverageConditionType);
        Sheets.ScaleValueType = Sheets._redefineEnum(GC_Spread_Sheets_ConditionalFormatting.ScaleValueType);
        Sheets.BarDirection = Sheets._redefineEnum(GC_Spread_Sheets_ConditionalFormatting.BarDirection);
        Sheets.DataBarAxisPosition = Sheets._redefineEnum(GC_Spread_Sheets_ConditionalFormatting.DataBarAxisPosition);
        Sheets.IconSetType = Sheets._redefineEnum(GC_Spread_Sheets_ConditionalFormatting.IconSetType);
        Sheets.IconValueType = Sheets._redefineEnum(GC_Spread_Sheets_ConditionalFormatting.IconValueType);
        Sheets.ConditionType = Sheets._redefineEnum(GC_Spread_Sheets_ConditionalFormatting.ConditionType);
        Sheets.RuleType = Sheets._redefineEnum(GC_Spread_Sheets_ConditionalFormatting.RuleType);

        var Condition = Sheets.Condition = GC_Spread_Sheets_ConditionalFormatting.Condition;
        Sheets.RelationCondition = (function (_super) {
            _extends(RelationCondition, _super);

            function RelationCondition(compareType, item1, item2) {
                if(item1 && item1.innerCondition) {
                    item1 = item1.innerCondition;
                }
                if(item2 && item2.innerCondition) {
                    item2 = item2.innerCondition;
                }
                this.innerCondition = new Condition(0, {
                    compareType: compareType,
                    item1: item1,
                    item2: item2,
                    ignoreBlank: false
                });
                this.innerCondition.outer = this;
                defineConditionProperty(this);
            }

            RelationCondition.prototype.create = function (compareType, item1, item2) {
                return new RelationCondition(compareType, item1, item2);
            };
            rewriteConditionMethod(RelationCondition.prototype);

            return RelationCondition;
        })(Condition);
        Sheets.NumberCondition = (function (_super) {
            _extends(NumberCondition, _super);

            function NumberCondition(compareType, expected, formula) {
                this.innerCondition = new Condition(1, {
                    compareType: compareType,
                    expected: expected,
                    formula: formula,
                    ignoreBlank: false,
                    integerValue: false
                });
                this.innerCondition.outer = this;
                defineConditionProperty(this);
            }

            rewriteConditionMethod(NumberCondition.prototype);

            return NumberCondition;
        })(Condition);
        Sheets.TextCondition = (function (_super) {
            _extends(TextCondition, _super);

            function TextCondition(compareType, expected, formula) {
                this.innerCondition = new Condition(2, {
                    compareType: compareType,
                    expected: expected,
                    formula: formula,
                    forceValue2Text: false,
                    useWildCards: true,
                    ignoreCase: false,
                    ignoreBlank: false
                });
                this.innerCondition.outer = this;
                defineConditionProperty(this);
            }

            TextCondition.prototype.getExpectedString = function (evaluator, baseRow, baseColumn) {
                var obj = this.getExpected(evaluator, baseRow, baseColumn);
                return (obj === key_undefined || obj === keyword_null) ? keyword_null : obj.toString();
            };
            rewriteConditionMethod(TextCondition.prototype);

            return TextCondition;
        })(Condition);
        Sheets.ColorCondition = (function (_super) {
            _extends(ColorCondition, _super);

            function ColorCondition(compareType, expected) {
                this.innerCondition = new Condition(3, {
                    compareType: compareType,
                    expected: expected,
                    ignoreBlank: false
                });
                this.innerCondition.outer = this;
                defineConditionProperty(this);
            }

            rewriteConditionMethod(ColorCondition.prototype);

            return ColorCondition;
        })(Condition);
        Sheets.FormulaCondition = (function (_super) {
            _extends(FormulaCondition, _super);

            function FormulaCondition(customValueType, formula) {
                this.innerCondition = new Condition(4, {
                    customValueType: customValueType,
                    formula: formula,
                    ignoreBlank: false
                });
                this.innerCondition.outer = this;
                defineConditionProperty(this);
            }

            rewriteConditionMethod(FormulaCondition.prototype);

            return FormulaCondition;
        })(Condition);
        Sheets.DateCondition = (function (_super) {
            _extends(DateCondition, _super);

            function DateCondition(compareType, expected, formula) {
                this.innerCondition = new Condition(5, {
                    compareType: compareType,
                    expected: expected,
                    formula: formula,
                    ignoreBlank: false
                });
                this.innerCondition.outer = this;
                defineConditionProperty(this);
            }

            DateCondition.prototype.getExpectedDateTime = function (evaluator, baseRow, baseColumn) {
                var obj = this.getExpected(evaluator, baseRow, baseColumn);
                if (obj instanceof Date) {
                    return obj;
                } else if (typeof (obj) === "string") {
                    return new Date(obj);
                }
                return keyword_null;
            };
            rewriteConditionMethod(DateCondition.prototype);

            return DateCondition;
        })(Condition);
        Sheets.DateExCondition = (function (_super) {
            _extends(DateExCondition, _super);

            function DateExCondition(expected) {
                this.innerCondition = new Condition(6, {
                    expected: expected,
                    formula: keyword_null,
                    expectTypeId: 0,
                    ignoreBlank: false
                });
                this.innerCondition.outer = this;
                defineConditionProperty(this);
            }

            rewriteConditionMethod(DateExCondition.prototype);
            DateExCondition.prototype.getExpectedInt = function (evaluator, baseRow, baseColumn) {
                var result = this.getExpected(evaluator, baseRow, baseColumn);
                result = parseInt(result, 10);
                return isNaN(result) ? keyword_null : result;
            };
            DateExCondition.fromDay = Condition.fromDay;
            DateExCondition.fromMonth = Condition.fromMonth;
            DateExCondition.fromQuarter = Condition.fromQuarter;
            DateExCondition.fromWeek = Condition.fromWeek;
            DateExCondition.fromYear = Condition.fromYear;

            return DateExCondition;
        })(Condition);
        Sheets.TextLengthCondition = (function (_super) {
            _extends(TextLengthCondition, _super);

            function TextLengthCondition(compareType, expected, formula) {
                this.innerCondition = new Condition(7, {
                    compareType: compareType,
                    expected: expected,
                    formula: formula,
                    ignoreBlank: false
                });
                this.innerCondition.outer = this;
                defineConditionProperty(this);
            }

            TextLengthCondition.prototype.getExpectedInt = function (evaluator, baseRow, baseColumn) {
                var obj = this.getExpected(evaluator, baseRow, baseColumn);
                obj = parseInt(obj, 10);
                return isNaN(obj) ? keyword_null : obj;
            };
            rewriteConditionMethod(TextLengthCondition.prototype);

            return TextLengthCondition;
        })(Condition);
        Sheets.Top10Condition = (function (_super) {
            _extends(Top10Condition, _super);

            function Top10Condition(type, rank, ranges) {
                this.innerCondition = new Condition(8, {
                    type: type,
                    expected: rank,
                    ranges: ranges,
                    isPercent: false,
                    ignoreBlank: false
                });
                this.innerCondition.outer = this;
                defineConditionProperty(this);
            }

            Top10Condition.prototype.getExpectedInt = function (evaluator, baseRow, baseColumn) {
                var obj = this.getExpected(evaluator, baseRow, baseColumn);
                obj = parseInt(obj, 10);
                return (isNaN(obj) || !isFinite(obj)) ? keyword_null : obj;
            };
            rewriteConditionMethod(Top10Condition.prototype);

            return Top10Condition;
        })(Condition);
        Sheets.UniqueCondition = (function (_super) {
            _extends(UniqueCondition, _super);

            function UniqueCondition(duplicated, ranges) {
                this.innerCondition = new Condition(9, {
                    expected: duplicated,
                    ranges: ranges,
                    ignoreBlank: false
                });
                this.innerCondition.outer = this;
                defineConditionProperty(this);
            }

            UniqueCondition.prototype.getExpectedBoolean = function (evaluator, baseRow, baseColumn) {
                var obj = this.getExpected(evaluator, baseRow, baseColumn);
                return !!obj;
            };
            rewriteConditionMethod(UniqueCondition.prototype);

            return UniqueCondition;
        })(Condition);
        Sheets.AverageCondition = (function (_super) {
            _extends(AverageCondition, _super);

            function AverageCondition(type, ranges) {
                this.innerCondition = new Condition(10, {
                    type: type,
                    ranges: ranges,
                    ignoreBlank: false
                });
                this.innerCondition.outer = this;
                defineConditionProperty(this);
            }

            AverageCondition.prototype.getExpectedDouble = function (evaluator, baseRow, baseColumn) {
                var obj = this.getExpected(evaluator, baseRow, baseColumn);
                obj = parseFloat(obj);
                return isNaN(obj) ? NaN : obj;
            };
            rewriteConditionMethod(AverageCondition.prototype);

            return AverageCondition;
        })(Condition);
        Sheets.CellValueCondition = (function (_super) {
            _extends(CellValueCondition, _super);

            function CellValueCondition(compareType, expected, formula) {
                this.innerCondition = new Condition(11, {
                    compareType: compareType,
                    expected: expected,
                    formula: formula,
                    treatNullValueAsZero: false
                });
                this.innerCondition.outer = this;
                defineConditionProperty(this);
            }

            CellValueCondition.prototype.isSatisfyingCondition = function (value) {
                return this.evaluate(keyword_null, 0, 0, value);
            };
            rewriteConditionMethod(CellValueCondition.prototype);

            return CellValueCondition;
        })(Condition);
        Sheets.AreaCondition = (function (_super) {
            _extends(AreaCondition, _super);

            function AreaCondition(expected, formula) {
                this.innerCondition = new Condition(12, {
                    expected: expected,
                    formula: formula,
                    ignoreBlank: false
                });
                this.innerCondition.outer = this;
                defineConditionProperty(this);
            }

            rewriteConditionMethod(AreaCondition.prototype);
            AreaCondition.fromSource = Condition.fromSource;
            AreaCondition.fromFormula = Condition.fromFormula;

            return AreaCondition;
        })(Condition);

        var ConditionRuleBase = Sheets.ConditionRuleBase = (function (_super) {
            _extends(ConditionRuleBase, _super);

            function ConditionRuleBase(style) {
                this.innerRule = new GC_Spread_Sheets_ConditionalFormatting.ConditionRuleBase(keyword_null, style);
                defineRuleProperty(this);
            }

            // getBaseCoordinate are internal methods now.
            ConditionRuleBase.prototype.isScaleRule = function () {
                return false;
            };
            rewriteRuleMethod(ConditionRuleBase.prototype);

            return ConditionRuleBase;
        })(GC_Spread_Sheets_ConditionalFormatting.ConditionRuleBase);
        var NormalConditionRule = Sheets.NormalConditionRule = GC_Spread_Sheets_ConditionalFormatting.NormalConditionRule;
        Sheets.AverageRule = (function (_super) {
            _extends(AverageRule, _super);

            function AverageRule(type, style) {
                this.innerRule = new NormalConditionRule(8, keyword_null, style, keyword_null, keyword_null, keyword_null, keyword_null, keyword_null, type);
                defineRuleProperty(this);
            }

            rewriteRuleMethod(AverageRule.prototype);

            return AverageRule;
        })(NormalConditionRule);
        Sheets.CellValueRule = (function (_super) {
            _extends(CellValueRule, _super);

            function CellValueRule(operator, value1, value2, style) {
                this.innerRule = new NormalConditionRule(1, keyword_null, style, operator, value1, value2);
                defineRuleProperty(this);
            }

            CellValueRule.prototype.isFormula = function (val) {
                return (val !== key_undefined && val !== keyword_null) && (val[0] === "=");
            };
            rewriteRuleMethod(CellValueRule.prototype);

            return CellValueRule;
        })(NormalConditionRule);
        Sheets.DateOccurringRule = (function (_super) {
            _extends(DateOccurringRule, _super);

            function DateOccurringRule(type, style) {
                this.innerRule = new NormalConditionRule(4, keyword_null, style, keyword_null, keyword_null, keyword_null, keyword_null, keyword_null, type);
                defineRuleProperty(this);
            }

            rewriteRuleMethod(DateOccurringRule.prototype);

            return DateOccurringRule;
        })(NormalConditionRule);
        Sheets.DuplicateRule = (function (_super) {
            _extends(DuplicateRule, _super);

            function DuplicateRule(style) {
                this.innerRule = new NormalConditionRule(7, keyword_null, style);
                defineRuleProperty(this);
            }

            rewriteRuleMethod(DuplicateRule.prototype);

            return DuplicateRule;
        })(NormalConditionRule);
        Sheets.FormulaRule = (function (_super) {
            _extends(FormulaRule, _super);

            function FormulaRule(formula, style) {
                this.innerRule = new NormalConditionRule(3, keyword_null, style, keyword_null, keyword_null, keyword_null, keyword_null, formula);
                defineRuleProperty(this);
            }

            rewriteRuleMethod(FormulaRule.prototype);

            return FormulaRule;
        })(NormalConditionRule);
        Sheets.SpecificTextRule = (function (_super) {
            _extends(SpecificTextRule, _super);

            function SpecificTextRule(operator, text, style) {
                this.innerRule = new NormalConditionRule(2, keyword_null, style, operator, keyword_null, keyword_null, text);
                defineRuleProperty(this);
            }

            rewriteRuleMethod(SpecificTextRule.prototype);

            return SpecificTextRule;
        })(NormalConditionRule);
        Sheets.Top10Rule = (function (_super) {
            _extends(Top10Rule, _super);

            function Top10Rule(type, rank, style) {
                this.innerRule = new NormalConditionRule(5, keyword_null, style, keyword_null, keyword_null, keyword_null, keyword_null, keyword_null, type, rank);
                defineRuleProperty(this);
            }

            rewriteRuleMethod(Top10Rule.prototype);

            return Top10Rule;
        })(NormalConditionRule);
        Sheets.UniqueRule = (function (_super) {
            _extends(UniqueRule, _super);

            function UniqueRule(style) {
                this.innerRule = new NormalConditionRule(6, keyword_null, style);
                defineRuleProperty(this);
            }

            rewriteRuleMethod(UniqueRule.prototype);

            return UniqueRule;
        })(NormalConditionRule);
        var ScaleRule = Sheets.ScaleRule = GC_Spread_Sheets_ConditionalFormatting.ScaleRule;
        Sheets.TwoScaleRule = (function (_super) {
            _extends(TwoScaleRule, _super);

            function TwoScaleRule(minType, minValue, minColor, maxType, maxValue, maxColor) {
                if(arguments.length === 0) {
                    this.innerRule = new ScaleRule(10);
                } else {
                    this.innerRule = new ScaleRule(10, minType, minValue, minColor, keyword_null, keyword_null, keyword_null, maxType, maxValue, maxColor);
                }
                defineRuleProperty(this);
            }

            var names = ['minType', 'minValue', 'minColor', 'maxType', 'maxValue', 'maxColor'];
            ['getMinimumType', 'setMinimumType',
                'getMinimumValue', 'setMinimumValue',
                'getMinimumColor', 'setMinimumColor',
                'getMaximumType', 'setMaximumType',
                'getMaximumValue', 'setMaximumValue',
                'getMaximumColor', 'setMaximumColor'].forEach(function (item, index) {
                rewriteMethod(TwoScaleRule.prototype, 'innerRule', item, names[index / 2]);
            });
            rewriteRuleMethod(TwoScaleRule.prototype);
            TwoScaleRule.prototype.isScaleRule = function () {
                return true;
            };

            return TwoScaleRule;
        })(ScaleRule);
        Sheets.ThreeScaleRule = (function (_super) {
            _extends(ThreeScaleRule, _super);

            function ThreeScaleRule(minType, minValue, minColor, midType, midValue, midColor, maxType, maxValue, maxColor) {
                if(arguments.length === 0) {
                    this.innerRule = new ScaleRule(11);
                } else {
                    this.innerRule = new ScaleRule(11, minType, minValue, minColor, midType, midValue, midColor, maxType, maxValue, maxColor);
                }
                defineRuleProperty(this);
            }

            var names = ['minType', 'minValue', 'minColor', 'midType', 'midValue', 'midColor', 'maxType', 'maxValue', 'maxColor'];
            ['getMinimumType', 'setMinimumType',
                'getMinimumValue', 'setMinimumValue',
                'getMinimumColor', 'setMinimumColor',
                'getMidpointType', 'setMidpointType',
                'getMidpointValue', 'setMidpointValue',
                'getMidpointColor', 'setMidpointColor',
                'getMaximumType', 'setMaximumType',
                'getMaximumValue', 'setMaximumValue',
                'getMaximumColor', 'setMaximumColor'].forEach(function (item, index) {
                rewriteMethod(ThreeScaleRule.prototype, 'innerRule', item, names[index / 2]);
            });
            rewriteRuleMethod(ThreeScaleRule.prototype);

            return ThreeScaleRule;
        })(ScaleRule);
        Sheets.DataBarRule = (function (_super) {
            _extends(DataBarRule, _super);

            function DataBarRule(minType, minValue, maxType, maxValue, color, ranges) {
                if(arguments.length === 0) {
                    this.innerRule = new GC_Spread_Sheets_ConditionalFormatting.DataBarRule();
                } else {
                    this.innerRule = new GC_Spread_Sheets_ConditionalFormatting.DataBarRule(minType, minValue, maxType, maxValue, color, ranges);
                }
                defineRuleProperty(this);
            }

            [['minimumType', 'minType'], ['minimumValue', 'minValue'], ['maximumType', 'maxType'],
                ['maximumValue', 'maxValue']].forEach(function (item) {
                rewriteMethod(DataBarRule.prototype, 'innerRule', item[0], item[1]);
            });
            ['gradient', 'color', 'showBorder', 'borderColor', 'dataBarDirection', 'showBarOnly',
                'negativeFillColor', 'useNegativeFillColor', 'negativeBorderColor', 'useNegativeBorderColor',
                'axisPosition', 'axisColor'].forEach(function (item) {
                rewriteMethod(DataBarRule.prototype, 'innerRule', item);
            });
            rewriteRuleMethod(DataBarRule.prototype);

            return DataBarRule;
        })(GC_Spread_Sheets_ConditionalFormatting.DataBarRule);
        var IconSetRule = Sheets.IconSetRule = (function (_super) {
            _extends(IconSetRule, _super);

            function IconSetRule(iconSetType) {
                if(arguments.length === 0) {
                    this.innerRule = new GC_Spread_Sheets_ConditionalFormatting_IconSetRule();
                } else {
                    this.innerRule = new GC_Spread_Sheets_ConditionalFormatting_IconSetRule(iconSetType);
                }
                defineRuleProperty(this);
            }

            IconSetRule.prototype.iconCriteria = function () {
                return this.innerRule.iconCriteria();
            };
            ['iconSetType', 'reverseIconOrder', 'showIconOnly'].forEach(function (item) {
                rewriteMethod(IconSetRule.prototype, 'innerRule', item);
            });
            rewriteRuleMethod(IconSetRule.prototype);

            return IconSetRule;
        })(GC_Spread_Sheets_ConditionalFormatting_IconSetRule);
        var getIcon = GC_Spread_Sheets_ConditionalFormatting_IconSetRule.getIcon;
        GC_Spread_Sheets_ConditionalFormatting_IconSetRule.getIcon = function () {
            if (IconSetRule.getIcon !== getIcon) {
                return IconSetRule.getIcon.apply(keyword_null, arguments);
            } else {
                return getIcon.apply(keyword_null, arguments);
            }
        };
        Sheets.IconCriterion = function (isGreaterThanOrEqualTo, iconValueType, iconValue) {
            this.isGreaterThanOrEqualTo = isGreaterThanOrEqualTo;
            this.iconValueType = iconValueType;
            this.iconValue = iconValue;
        };

        var ConditionalFormats = Sheets.ConditionalFormats = (function (_super) {
            _extends(ConditionalFormats, _super);

            function ConditionalFormats(worksheet) {
                this.sheet = worksheet;
                this._ruleCache = [];
                this.cfs = worksheet.conditionalFormats;
            }

            ConditionalFormats.prototype.addRule = function (rule) {
                if (rule && rule.innerRule) {
                    this._ruleCache.push(rule);
                    this.cfs.addRule(rule.innerRule);
                    return rule;
                } else {
                    this.cfs.addRule(rule);
                    return convertRule(rule);
                }
            };
            ConditionalFormats.prototype.removeRule = function (rule) {
                if (rule && rule.innerRule) {
                    var ruleCache = this._ruleCache;
                    for (var index = ruleCache.length - 1; index >= 0; index--) {
                        if (ruleCache[index] && (ruleCache[index].innerRule === rule)) {
                            ruleCache.splice(index, 1);
                        }
                    }
                    this.cfs.removeRule(rule.innerRule);
                } else {
                    this.cfs.removeRule(rule);
                }
            };
            ConditionalFormats.prototype.getRule = function (index) {
                var rule = this.cfs.getRule(index);
                return getCachedRule(this, rule);
            };
            ConditionalFormats.prototype.getRules = function (row, column) {
                var self = this, result = [];
                var retRuleArray;
                if(arguments.length === 0) {
                    retRuleArray = self.cfs.getRules();
                } else {
                    retRuleArray = self.cfs.getRules(row, column);
                }
                retRuleArray.forEach(function (item) {
                    result.push(getCachedRule(self, item));
                });
                return result;
            };
            ConditionalFormats.prototype.containsRule = function (rule, row, column) {
                if (rule && rule.innerRule) {
                    rule = rule.innerRule;
                }
                return this.cfs.containsRule(rule, row, column);
            };
            ConditionalFormats.prototype.clearRule = function () {
                this.cfs.clearRule();
                this._ruleCache.length = 0;
            };
            ConditionalFormats.prototype.count = function () {
                return this.cfs.count();
            };
            ConditionalFormats.prototype.removeRuleByRange = function (row, column, rowCount, columnCount) {
                this.cfs.removeRuleByRange(row, column, rowCount, columnCount);
                var ruleCache = this._ruleCache, length = ruleCache.length, i = 0,
                    rules = [];
                while (i < length) {
                    var temp = this.getRule(i);
                    if (temp) {
                        rules.push(temp);
                    }
                    i++;
                }
                var count = rules.length - 1;
                for (i = length - 1; i >= 0; i--) {
                    if (ruleCache[i] === rules[count]) {
                        count--;
                    } else {
                        ruleCache.splice(i, 1);
                    }
                }
            };
            return ConditionalFormats;
        })(GC_Spread_Sheets_ConditionalFormatting.ConditionalFormats);

        Sheets.Sheet.prototype.getConditionalFormats = function () {
            if (!this._conditionalFormats) {
                this._conditionalFormats = new ConditionalFormats(this);
            }
            return this._conditionalFormats;
        };
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets_Fill = window.GC.Spread.Sheets.Fill;
        Sheets.AutoFillType = Sheets._redefineEnum(GC_Spread_Sheets_Fill.AutoFillType);
        Sheets.FillDirection = Sheets._redefineEnum(GC_Spread_Sheets_Fill.FillDirection);
        Sheets.FillSeries = Sheets._redefineEnum(GC_Spread_Sheets_Fill.FillSeries);
        Sheets.FillType = Sheets._redefineEnum(GC_Spread_Sheets_Fill.FillType);
        Sheets.FillDateUnit = Sheets._redefineEnum(GC_Spread_Sheets_Fill.FillDateUnit);

        var Sheet = Sheets.Sheet;
        var newFillAuto = Sheet.prototype.fillAuto;
        Sheet.prototype.fillAuto = function (startRange, wholeRange, seriesOrOptions) {
            if (seriesOrOptions === GcSpread.Sheets.FillSeries.Column || seriesOrOptions === GcSpread.Sheets.FillSeries.Row) {
                newFillAuto.apply(this, [startRange, wholeRange, {fillType: Sheets.FillType.Auto, series: seriesOrOptions}]);
            } else {
                newFillAuto.apply(this, arguments);
            }
        };
        Sheet.prototype.fillAutobyDirection = function (startRange, wholeRange, direction) {
            this.fillAuto(startRange, wholeRange, {fillType: Sheets.FillType.Direction, direction: direction});
        };
        Sheet.prototype.fillLinear = function (startRange, wholeRange, series, step, stop) {
            this.fillAuto(startRange, wholeRange, {fillType: Sheets.FillType.Linear, series : series, step: step, stop: stop });
        };
        Sheet.prototype.fillGrowth = function (startRange, wholeRange, series, step, stop) {
            this.fillAuto(startRange, wholeRange, {fillType: Sheets.FillType.Growth, series : series, step: step, stop: stop});
        };
        Sheet.prototype.fillDate = function (startRange, wholeRange, series, unit, step, stop) {
            this.fillAuto(startRange, wholeRange, {fillType: Sheets.FillType.Date, series : series, step: step, stop: stop, unit: unit});
        };

    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Sread_Sheets_ConditionalFormatting = window.GC.Spread.Sheets.ConditionalFormatting;
        var GC_Spread_Sheets_Filter = window.GC.Spread.Sheets.Filter;
        Sheets.FilterActionType = Sheets._redefineEnum(GC_Spread_Sheets_Filter.FilterActionType);

        var RowFilterBase = GC_Spread_Sheets_Filter.RowFilterBase;
        var addFilterItemTemp = RowFilterBase.prototype.addFilterItem;
        RowFilterBase.prototype.addFilterItem = function (col, condition) {
            if(condition && condition.innerCondition) {
                condition = condition.innerCondition;
            }
            addFilterItemTemp.call(this, col, condition);
        };
        RowFilterBase.prototype.isHideRowFilter = function() {
            return false;
        };
        RowFilterBase.prototype.getShowFilterButton = function () {
            return this.filterButtonVisible();
        };
        RowFilterBase.prototype.setShowFilterButton = function (value) {
            this.filterButtonVisible(value);
        };
        RowFilterBase.prototype.addAverageFilter = function (col, compareType) {
            var con = new GC_Sread_Sheets_ConditionalFormatting.Condition(GC_Sread_Sheets_ConditionalFormatting.ConditionType.averageCondition, {
                type: compareType
            });
            this.addFilterItem(col, con);
        };
        RowFilterBase.prototype.addBackgroundFilter = function (col, color) {
            var con = new GC_Sread_Sheets_ConditionalFormatting.Condition(GC_Sread_Sheets_ConditionalFormatting.ConditionType.colorCondition, {
                compareType: GC_Sread_Sheets_ConditionalFormatting.ColorCompareType.backgroundColor,
                expected: color
            });
            this.addFilterItem(col, con);
        };
        RowFilterBase.prototype.addDateFilter = function (col, compareType, date) {
            var con = new GC_Sread_Sheets_ConditionalFormatting.Condition(GC_Sread_Sheets_ConditionalFormatting.ConditionType.dateCondition, {
                compareType: compareType,
                expected: date
            });
            this.addFilterItem(col, con);
        };
        RowFilterBase.prototype.addForegroundFilter = function (col, color) {
            var con = new GC_Sread_Sheets_ConditionalFormatting.Condition(GC_Sread_Sheets_ConditionalFormatting.ConditionType.colorCondition, {
                compareType: GC_Sread_Sheets_ConditionalFormatting.ColorCompareType.foregroundColor,
                expected: color
            });
            this.addFilterItem(col, con);
        };
        RowFilterBase.prototype.addNumberFilter = function (col, compareType, num) {
            var con = new GC_Sread_Sheets_ConditionalFormatting.Condition(GC_Sread_Sheets_ConditionalFormatting.ConditionType.numberCondition, {
                compareType: compareType,
                expected: num
            });
            this.addFilterItem(col, con);
        };
        RowFilterBase.prototype.addTextFilter = function (col, compareType, text) {
            var con = new GC_Sread_Sheets_ConditionalFormatting.Condition(GC_Sread_Sheets_ConditionalFormatting.ConditionType.textCondition, {
                compareType: compareType,
                expected: text
            });
            this.addFilterItem(col, con);
        };
        RowFilterBase.prototype.addTop10Filter = function (col, compareType, rank) {
            var con = new GC_Sread_Sheets_ConditionalFormatting.Condition(GC_Sread_Sheets_ConditionalFormatting.ConditionType.top10Condition, {
                type: compareType,
                expected: rank
            });
            this.addFilterItem(col, con);
        };
        RowFilterBase.prototype.isColumnFiltered = function (col) {
            return this.isFiltered(col);
        };
        var getFilterItemsTemp = RowFilterBase.prototype.getFilterItems;
        RowFilterBase.prototype.getFilterItems = function (col) {
            var conditions = getFilterItemsTemp.call(this, col);
            var result = [];
            conditions.forEach(function (item) {
                if(item && item.outer) {
                    result.push(item.outer);
                } else {
                    result.push(item);
                }
            });
            return result;
        };
        Sheets.RowFilterBase = RowFilterBase;

        var HideRowFilter = GC_Spread_Sheets_Filter.HideRowFilter;
        HideRowFilter.prototype.isHideRowFilter = function() {
            return true;
        };
        Sheets.HideRowFilter = HideRowFilter;
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets_FloatingObjects = window.GC.Spread.Sheets.FloatingObjects;

        var FloatingObject = GC_Spread_Sheets_FloatingObjects.FloatingObject;
        FloatingObject.prototype.position = function (position) {
            if (arguments.length === 0) {
                return {x: this.x(), y: this.y()};
            }

            this.x(position.x);
            this.y(position.y);
        };
        Sheets.FloatingObject = FloatingObject;

        Sheets.Picture = GC_Spread_Sheets_FloatingObjects.Picture;

        Sheets.CustomFloatingObject = FloatingObject;
        Sheets.CustomFloatingObject.prototype.Content = FloatingObject.prototype.content;

        var Sheet = Sheets.Sheet;
        Sheet.prototype.addFloatingObject = function (customFloatingObject) {
            return this.floatingObjects.add(customFloatingObject);
        };
        Sheet.prototype.findFloatingObject = function (name) {
            return this.floatingObjects.get(name);
        };
        Sheet.prototype.removeFloatingObject = function (name) {
            return this.floatingObjects.remove(name);
        };
        Sheet.prototype.getFloatingObjects = function () {
            return this.floatingObjects.all();
        };
        Sheet.prototype.setFloatingObjectZIndex = function (name, zIndex) {
            var picture = this.pictures.get(name);
            if (picture) {
                return this.pictures.zIndex(name, zIndex);
            }

            return this.floatingObjects.zIndex(name, zIndex);
        };
        Sheet.prototype.getFloatingObjectZIndex = function (name) {
            var picture = this.pictures.get(name);
            if (picture) {
                return this.pictures.zIndex(name);
            }

            return this.floatingObjects.zIndex(name);
        };
        Sheet.prototype.addPicture = function (name, src, startRow, startColumn, endRow, endColumn, startRowOffset, startColumnOffset, endRowOffset, endColumnOffset) {
            function getCellPosition(sheet, row, column) {
                var cellRect = sheet.getCellRect(row, column);
                if (cellRect.x !== undefined && cellRect.y !== undefined) {
                    return {x: cellRect.x, y: cellRect.y};
                }
                var index, sum = 0, retValue = {};
                for(index = 0; index < column; index++) {
                    sum += sheet.getColumnWidth(index);
                }
                retValue.x = sum;
                sum = 0;
                for(index = 0; index < row; index++) {
                    sum += sheet.getRowHeight(index);
                }
                retValue.y = sum;
                return retValue;
            }

            var x = 0, y = 0, width = 100, height = 100;
            var startCellPos = getCellPosition(this, startRow, startColumn);
            if (startCellPos) {
                x = startCellPos.x + (startColumnOffset || 0);
                y = startCellPos.y + (startRowOffset || 0);
            }
            var endCellPos = getCellPosition(this, endRow, endColumn);
            if (endCellPos) {
                width = endCellPos.x + (endColumnOffset || 0) - x;
                height = endCellPos.y + (endRowOffset || 0) - y;
            }
            var firstCellPos = getCellPosition(this, 0, 0);
            if (firstCellPos) {
                x -= firstCellPos.x;
                y -= firstCellPos.y;
            }
            return this.pictures.add(name, src, x, y, width, height);
        };
        Sheet.prototype.findPicture = function (name) {
            return this.pictures.get(name);
        };
        Sheet.prototype.removePicture = function (name) {
            return this.pictures.remove(name);
        };
        Sheet.prototype.getPictures = function () {
            return this.pictures.all();
        };
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var FormulaTextBox = window.GC.Spread.Sheets.FormulaTextBox.FormulaTextBox;
        FormulaTextBox.prototype.spread = function (value) {
            if(arguments.length === 0) {
                return this.workbook();
            }

            this.workbook(value);
        };
        Sheets.FormulaTextBox = FormulaTextBox;
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets_Outlines = window.GC.Spread.Sheets.Outlines;
        Sheets.RangeGroupDirection = Sheets._redefineEnum(GC_Spread_Sheets_Outlines.OutlineDirection);
        Sheets.GroupState = Sheets._redefineEnum(GC_Spread_Sheets_Outlines.OutlineState);
        Sheets.RangeGroupDirection = Sheets._redefineEnum(GC_Spread_Sheets_Outlines.OutlineDirection);

        var RangeGroupInfo = GC_Spread_Sheets_Outlines.OutlineInfo;
        RangeGroupInfo.prototype.getState = function () {
            return this.state();
        };
        RangeGroupInfo.prototype.setState = function (value) {
            this.state(value);
        };
        Sheets.RangeGroupInfo = RangeGroupInfo;

        (function (outlinePrototype) {
            function isItemEquals(item1, item2) {
                if (item1 && item2) {
                    for (var prop in item1) {
                        if (item1.hasOwnProperty(prop)) {
                            if (item1[prop] !== item2[prop]) {
                                return false;
                            }
                        }
                    }
                    return true;
                } else {
                    return !item1 && !item2;
                }
            }
            outlinePrototype.equals = function (obj) {
                var self = this;
                if (obj) {
                    try {
                        var length = (self.items || []).length,
                            length2 = (obj.items || []).length;

                        if (length !== length2) {
                            return false;
                        }

                        if (self.direction() !== obj.direction()) {
                            return false;
                        }

                        var items = [].concat(self.head, self.tail, self.items || []),
                            items2 = [].concat(obj.head, obj.tail, obj.items || []);

                        for (var i = 0, count = items.length; i < count; i++) {
                            if (!isItemEquals(items[i], items2[i])) {
                                return false;
                            }
                        }

                    } catch (err) {
                        return false;
                    }
                }
                return false;
            };

            outlinePrototype.getCollapsed = outlinePrototype.getCollapsed;
            outlinePrototype.getDirection = function () {
                return this.direction();
            }
            outlinePrototype.setDirection = function (value) {
                this.direction(value);
            }
        })(GC_Spread_Sheets_Outlines.Outline.prototype);
        Sheets.RangeGroup = GC_Spread_Sheets_Outlines.Outline;
        Sheets.GroupedItemIndexEnumerator = (function () {
            function GroupedItemIndexEnumerator(rangeGroup) {
                this.isEOF = false;
                this.rangeGroup = keyword_null;
                this.current = -1;
                this.rangeGroup = rangeGroup;
            }
            GroupedItemIndexEnumerator.prototype.nextToCurrent = function () {
                return this.current + 1;
            };
            GroupedItemIndexEnumerator.prototype.moveNext = function () {
                var self = this;
                if (self.isEOF || !self.rangeGroup || !self.rangeGroup.items) {
                    return false;
                }
                var found = false;
                for (var n = self.current + 1; n < self.rangeGroup.items.length; n++) {
                    if (self.rangeGroup.items[n]) {
                        found = true;
                        self.current = n;
                        break;
                    }
                }
                if (!found) {
                    self.current = -1;
                }
                if (self.current > -1) {
                    return true;
                }
                else {
                    self.isEOF = true;
                    return false;
                }
            };
            GroupedItemIndexEnumerator.prototype.reset = function () {
                this.isEOF = false;
                this.current = -1;
            };
            return GroupedItemIndexEnumerator;
        }());

        var Sheet = Sheets.Sheet;

        Sheet.prototype.showRowRangeGroup = Sheet.prototype.showRowOutline;
        Sheet.prototype.showColumnRangeGroup = Sheet.prototype.showColumnOutline;
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets_Print = window.GC.Spread.Sheets.Print;
        if (GC_Spread_Sheets_Print) {
            Sheets.PrintVisibilityType = Sheets._redefineEnum(GC_Spread_Sheets_Print.PrintVisibilityType);
            Sheets.PrintCentering = Sheets._redefineEnum(GC_Spread_Sheets_Print.PrintCentering);
            Sheets.PrintPageOrientation = Sheets._redefineEnum(GC_Spread_Sheets_Print.PrintPageOrientation);
            Sheets.PrintPageOrder = Sheets._redefineEnum(GC_Spread_Sheets_Print.PrintPageOrder);
            Sheets.PaperKind = Sheets._redefineEnum(GC_Spread_Sheets_Print.PaperKind, {
                dlEnvelope: 'DLEnvelope',
                usStandardFanfold: 'USStandardFanfold'
            });
            Sheets.PaperSize = GC_Spread_Sheets_Print.PaperSize;
            Sheets.PrintInfo = GC_Spread_Sheets_Print.PrintInfo;
        }
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var keyword_null = null, Math_max = Math.max, Math_min = Math.min;
        var GC_Spread_Sheets_Search = window.GC.Spread.Sheets.Search;
        Sheets.SearchFlags = Sheets._redefineEnum(GC_Spread_Sheets_Search.SearchFlags);
        Sheets.SearchOrder = Sheets._redefineEnum(GC_Spread_Sheets_Search.SearchOrder);
        Sheets.SearchFoundFlags = Sheets._redefineEnum(GC_Spread_Sheets_Search.SearchFoundFlags);
        Sheets.SearchResult = GC_Spread_Sheets_Search.SearchResult;
        Sheets.SearchCondition = GC_Spread_Sheets_Search.SearchCondition;
        (function (EnumeratorOption) {
            EnumeratorOption[EnumeratorOption["All"] = 0] = "All";
            EnumeratorOption[EnumeratorOption["HasValue"] = 1] = "HasValue";
            EnumeratorOption[EnumeratorOption["HasStyle"] = 2] = "HasStyle";
        })(Sheets.EnumeratorOption || (Sheets.EnumeratorOption = {}));
        var EnumeratorOption = Sheets.EnumeratorOption;
        var SearchOrder = Sheets.SearchOrder;

        Sheets.CellsEnumerator = (function () {
            function CellsEnumerator(sheet, searchCondition) {
                this.actualEndRow = -1;
                this.isActualEndRowSet = false;
                this.isBlockRange = false;
                this.options = EnumeratorOption.HasValue;
                if (!sheet) {
                    throw new Error("sheet is null.");
                }
                var self = this;
                self.worksheet = sheet;
                self.sheetArea = searchCondition.sheetArea;
                self.searchOrder = searchCondition.searchOrder;
                self.rowStart = searchCondition.rowStart;
                self.columnStart = searchCondition.columnStart;
                self.rowEnd = searchCondition.rowEnd;
                self.columnEnd = searchCondition.columnEnd;
                self.findBeginRow = searchCondition.findBeginRow;
                self.findBeginColumn = searchCondition.findBeginColumn;
                self.init();
                self.block = self.worksheet;
            }

            CellsEnumerator.prototype.init = function () {
                this.currentRow = -1;
                this.currentColumn = -1;
            };
            CellsEnumerator.prototype.moveNext = function () {
                var self = this;
                if (self.currentRow === -1 && self.currentColumn === -1) {
                    if (self.rowStart <= self.rowEnd && self.columnStart <= self.columnEnd) {
                        self.currentRow = self.findBeginRow;
                        self.currentColumn = self.findBeginColumn;
                        if (self.isIndexAcceptable(self.currentRow, self.currentColumn)) {
                            if (!self.skipCurrent()) {
                                return true;
                            }
                        }
                    }
                }
                if (self.rowStart <= self.rowEnd && self.columnStart <= self.columnEnd) {
                    while (self.tryMoveNext()) {
                        if (!self.skipCurrent()) {
                            return true;
                        }
                    }
                }
                self.currentRow = -1;
                self.currentColumn = -1;
                return false;
            };
            CellsEnumerator.prototype.isIndexAcceptable = function (row, column) {
                var self = this;
                if ((self.options & EnumeratorOption.HasValue) > 0) {
                    if (self.block) {
                        if (self.block.getValue(row, column, self.sheetArea) !== keyword_null ||
                            self.block.getFormula(row, column, self.sheetArea) !== keyword_null ||
                            self.block.getTag(row, column, self.sheetArea) !== keyword_null) {
                            return true;
                        }
                    }
                }
                return self.options === EnumeratorOption.All;
            };
            CellsEnumerator.prototype.skipCurrent = function () {
                return false;
            };
            CellsEnumerator.prototype.tryMoveNext = function () {
                var self = this;
                var r1 = self.currentRow;
                var c1 = self.currentColumn;
                var isValueFound = false;
                if ((self.options & EnumeratorOption.HasValue) > 0) {
                    var r1Temp = {value: r1};
                    var c1Temp = {value: c1};
                    if (self.nextValue(r1Temp, c1Temp)) {
                        r1 = r1Temp.value;
                        c1 = c1Temp.value;
                        isValueFound = true;
                    }
                }
                if (self.options === EnumeratorOption.HasValue) {
                    if (isValueFound) {
                        self.currentRow = r1;
                        self.currentColumn = c1;
                    }
                    else {
                        self.currentRow = -1;
                        self.currentColumn = -1;
                    }
                }
                return !(self.currentRow === -1 && self.currentColumn === -1);
            };
            CellsEnumerator.prototype.nextValue = function (refRow, refColumn) {
                while (this.next(refRow, refColumn)) {
                    if (this.isIndexAcceptable(refRow.value, refColumn.value)) {
                        return true;
                    }
                }
                return false;
            };
            CellsEnumerator.prototype.nextValue = function (refRow, refColumn) {
                while (this.next(refRow, refColumn)) {
                    if (this.isIndexAcceptable(refRow.value, refColumn.value)) {
                        return true;
                    }
                }
                return false;
            };
            CellsEnumerator.prototype.getNextNonEmptyColumnInRow = function (model, row, column) {
                for (var i = column; i <= this.columnEnd; i++) {
                    if (model.getValue(row, i) !== keyword_null) {
                        return i;
                    }
                }
                return -1;
            };
            CellsEnumerator.prototype.isZOrderOver = function (row, column) {
                var self = this;
                if (self.isBlockRange) {
                    return (row >= self.rowStart && row <= self.getActualEndRow() && column >= self.columnStart &&
                    column <= self.actualEndColumn());
                }
                else {
                    if (row > self.getActualEndRow()) {
                        return false;
                    }
                    if (row === self.getActualEndRow()) {
                        if (column < 0 || column > self.actualEndColumn()) {
                            return false;
                        }
                    }
                    if (row < self.rowStart) {
                        return false;
                    }
                    if (row === self.rowStart) {
                        if (column < self.columnStart) {
                            return false;
                        }
                    }
                }
                return true;
            };
            CellsEnumerator.prototype.getActualEndRow = function () {
                var self = this;
                if (self.isActualEndRowSet) {
                    return self.actualEndRow;
                }
                else {
                    var endRowTemp = -1;
                    var isSet = false;
                    if ((self.options & EnumeratorOption.HasValue) > 0) {
                        if (self.block) {
                            var index = self.block.getRowCount(self.sheetArea) - 1;
                            endRowTemp = Math_max(endRowTemp, index);
                            isSet = true;
                        }
                    }
                    endRowTemp = isSet ? Math_min(endRowTemp, self.rowEnd) : self.rowEnd;
                    self.actualEndRow = endRowTemp;
                    self.isActualEndRowSet = true;
                    return self.actualEndRow;
                }
            };
            CellsEnumerator.prototype.actualEndColumn = function () {
                return this.columnEnd;
            };
            CellsEnumerator.prototype.next = function (refRow, refColumn) {
                var self = this;
                if (self.searchOrder === SearchOrder.ZOrder) {
                    var endColumnCurrenRow = self.getActualEndColumnZOrder(refRow.value);
                    if (refColumn.value + 1 <= endColumnCurrenRow) {
                        refColumn.value += 1;
                        return self.isZOrderOver(refRow.value, refColumn.value);
                    }
                    else {
                        if (refRow.value + 1 <= self.getActualEndRow()) {
                            refRow.value += 1;
                            if (self.isBlockRange) {
                                refColumn.value = self.columnStart;
                            }
                            else {
                                refColumn.value = 0;
                            }
                            return self.isZOrderOver(refRow.value, refColumn.value);
                        }
                        else {
                            return false;
                        }
                    }
                }
                else if (self.searchOrder === SearchOrder.NOrder) {
                    var endRowCurrenColumn = self.getActualEndRowNOrder(refColumn.value);
                    if (refRow.value + 1 <= endRowCurrenColumn) {
                        refRow.value += 1;
                        return self.isNOrderOver(refRow.value, refColumn.value);
                    }
                    else {
                        if (refColumn.value + 1 <= self.actualEndColumn()) {
                            refColumn.value += 1;
                            if (self.isBlockRange) {
                                refRow.value = self.rowStart;
                            }
                            else {
                                refRow.value = 0;
                            }
                            return self.isNOrderOver(refRow.value, refColumn.value);
                        }
                        else {
                            return false;
                        }
                    }
                }
                return false;
            };
            CellsEnumerator.prototype.getActualEndColumnZOrder = function (row) {
                var self = this;
                if (row >= self.rowStart && row <= self.rowEnd) {
                    var endColumnTemp = -1;
                    var isSet = false;
                    if ((self.options & EnumeratorOption.HasValue) > 0) {
                        if (self.block) {
                            endColumnTemp = Math_max(endColumnTemp, self.block.getColumnCount(self.sheetArea) - 1);
                            isSet = true;
                        }
                    }
                    if (row === self.rowEnd || self.isBlockRange) {
                        endColumnTemp = isSet ? Math_min(endColumnTemp, self.columnEnd) : self.columnEnd;
                    }
                    else {
                        endColumnTemp = isSet ? Math_max(endColumnTemp, self.worksheet.getColumnCount(self.sheetArea) - 1) :
                        self.worksheet.getColumnCount(self.sheetArea) - 1;
                    }
                    return endColumnTemp;
                }
                else {
                    return -1;
                }
            };
            CellsEnumerator.prototype.getActualEndRowNOrder = function (column) {
                var self = this;
                if (column >= self.columnStart && column <= self.columnEnd) {
                    var endRowTemp = -1;
                    var isSet = false;
                    if ((self.options & EnumeratorOption.HasValue) > 0) {
                        if (self.block) {
                            endRowTemp = Math_max(endRowTemp, self.rowEnd);
                            isSet = true;
                        }
                    }
                    if (column === self.columnEnd || self.isBlockRange) {
                        endRowTemp = isSet ? Math_min(endRowTemp, self.rowEnd) : self.rowEnd;
                    }
                    else {
                        endRowTemp = isSet ? Math_max(endRowTemp, self.worksheet.getRowCount(self.sheetArea) - 1) :
                        self.worksheet.getRowCount(self.sheetArea) - 1;
                    }
                    return endRowTemp;
                }
                else {
                    return -1;
                }
            };
            CellsEnumerator.prototype.isNOrderOver = function (row, column) {
                var self = this;
                if (self.isBlockRange) {
                    return (row >= self.rowStart && row <= self.getActualEndRow() && column >= self.columnStart &&
                    column <= self.actualEndColumn());
                }
                else {
                    if (column > self.actualEndColumn()) {
                        return false;
                    }
                    if (column === self.actualEndColumn()) {
                        if (row < 0 || row > self.getActualEndRow()) {
                            return false;
                        }
                    }
                    if (column < self.columnStart) {
                        return false;
                    }
                    if (column === self.columnStart) {
                        if (row < self.rowStart) {
                            return false;
                        }
                    }
                }
                return true;
            };
            CellsEnumerator.prototype.current = function () {
                var self = this;
                if (0 <= self.currentRow && self.currentRow < self.worksheet.getRowCount(self.sheetArea) &&
                    0 <= self.currentColumn && self.currentColumn < self.worksheet.getColumnCount(self.sheetArea)) {
                    return new Sheets.Cell(self.worksheet, self.currentRow, self.currentColumn, self.sheetArea);
                }
                return keyword_null;
            };

            return CellsEnumerator;
        }());
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets_Sparklines = window.GC.Spread.Sheets.Sparklines;
        Sheets.Sparkline = GC_Spread_Sheets_Sparklines.Sparkline;
        Sheets.SparklineGroup = GC_Spread_Sheets_Sparklines.SparklineGroup;
        Sheets.EmptyValueStyle = Sheets._redefineEnum(GC_Spread_Sheets_Sparklines.EmptyValueStyle);
        Sheets.SparklineAxisMinMax = GC_Spread_Sheets_Sparklines.SparklineAxisMinMax;
        Sheets.SparklineType = GC_Spread_Sheets_Sparklines.SparklineType;
        Sheets.DataOrientation = Sheets._redefineEnum(GC_Spread_Sheets_Sparklines.DataOrientation);

        function SparklineSetting() {
            GC_Spread_Sheets_Sparklines.SparklineSetting.apply(this, arguments);

            var fieldArray = [
                'displayEmptyCellsAs',
                'rightToLeft',
                'displayHidden',
                'displayXAxis',
                'manualMax',
                'manualMin',
                'maxAxisType',
                'minAxisType',
                'groupMaxValue',
                'groupMinValue',
                'lineWeight'
            ];
            for (var i = 0; i < fieldArray.length; i++) {
                (function(obj, field) {
                    Object.defineProperty(obj, field, {
                        get: function () {
                            return obj.options[field];
                        },
                        set: function (value) {
                            obj.options[field] = value;
                        }
                    });
                })(this, fieldArray[i]);
            }
        }

        SparklineSetting.prototype = new GC_Spread_Sheets_Sparklines.SparklineSetting();
        var propertyArray = [
            'axisColor',
            'firstMarkerColor',
            'highMarkerColor',
            'lastMarkerColor',
            'lowMarkerColor',
            'markersColor',
            'negativeColor',
            'seriesColor',
            'showFirst',
            'showHigh',
            'showLast',
            'showLow',
            'showNegative',
            'showMarkers'
        ];
        for (var i = 0; i < propertyArray.length; i++) {
            (function (property) {
                SparklineSetting.prototype[property] = function (value) {
                    if (arguments.length === 0) {
                        return this.options[property];
                    }
                    this.options[property] = value;
                    return this;
                };
            })(propertyArray[i]);
        }
        Sheets.SparklineSetting = SparklineSetting;
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets_Sparklines = window.GC.Spread.Sheets.Sparklines;
        Sheets.SparklineEx = GC_Spread_Sheets_Sparklines.SparklineEx;
        Sheets.LineSparkline = GC_Spread_Sheets_Sparklines.LineSparkline;
        Sheets.ColumnSparkline = GC_Spread_Sheets_Sparklines.ColumnSparkline;
        Sheets.WinlossSparkline = GC_Spread_Sheets_Sparklines.WinlossSparkline;
        Sheets.PieSparkline = GC_Spread_Sheets_Sparklines.PieSparkline;
        Sheets.AreaSparkline = GC_Spread_Sheets_Sparklines.AreaSparkline;
        Sheets.ScatterSparkline = GC_Spread_Sheets_Sparklines.ScatterSparkline;
        Sheets.BulletSparkline = GC_Spread_Sheets_Sparklines.BulletSparkline;
        Sheets.SpreadSparkline = GC_Spread_Sheets_Sparklines.SpreadSparkline;
        Sheets.StackedSparkline = GC_Spread_Sheets_Sparklines.StackedSparkline;
        Sheets.HBarSparkline = GC_Spread_Sheets_Sparklines.HBarSparkline;
        Sheets.VBarSparkline = GC_Spread_Sheets_Sparklines.VBarSparkline;
        Sheets.BoxPlotSparkline = GC_Spread_Sheets_Sparklines.BoxPlotSparkline;
        Sheets.VariSparkline = GC_Spread_Sheets_Sparklines.VariSparkline;
        Sheets.CascadeSparkline = GC_Spread_Sheets_Sparklines.CascadeSparkline;
        Sheets.ParetoSparkline = GC_Spread_Sheets_Sparklines.ParetoSparkline;
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets_Tables = window.GC.Spread.Sheets.Tables;

        var Table = GC_Spread_Sheets_Tables.Table;
        Table.prototype.refresh = function () {

        };
        Sheets.SheetTable = Table;

        Sheets.TableColumnInfo = GC_Spread_Sheets_Tables.TableColumn;
        Sheets.TableStyleInfo = GC_Spread_Sheets_Tables.TableStyle;
        Sheets.TableStyle = GC_Spread_Sheets_Tables.TableTheme;

        function TableStyles() {

        }

        TableStyles.customStyles = function () {
            var styles = TableStyles._customStyles;
            return (!!styles ? styles : keyword_null);
        };

        TableStyles.addCustomStyles = function (style) {
            if (!style) {
                return;
            }
            if (!TableStyles._customStyles) {
                TableStyles._customStyles = [];
            }

            var styles = TableStyles._customStyles, count = styles.length, s;
            for (var i = 0; i < count; i++) {
                s = styles[i];
                if (s.name() === style.name()) {
                    throw new Error("The style with the same name already exists in the styles.");
                }
            }
            styles.push(style);
        };

        TableStyles.removeCustomStyle = function (style) {
            if (!style) {
                return false;
            }

            var styles = TableStyles._customStyles;
            if (styles) {
                var index = inArray(style, styles);
                if (index > -1) {
                    styles.splice(index, 1);
                    return true;
                }
            }
            return false;
        };

        function inArray(elem, arr, i) {
            if (arr) {
                if (Array.prototype.indexOf) {
                    return Array.prototype.indexOf.call(arr, elem, i);
                }
                var len = arr.length;
                i = i ? i < 0 ? Math_max(0, len + i) : i : 0;
                for (; i < len; i++) {
                    // Skip accessing in sparse arrays
                    if (i in arr && arr[i] === elem) {
                        return i;
                    }
                }
            }
            return -1;
        }

        TableStyles.removeCustomStyleByName = function (styleName) {
            var styles = TableStyles._customStyles;
            if (styles) {
                var count = styles.length, s;
                for (var i = 0; i < count; i++) {
                    s = styles[i];
                    if (s.name() === styleName) {
                        styles.splice(i, 1);
                        return true;
                    }
                }
            }
            return false;
        };

        var properties = [], index;
        for (index = 1; index <= 21; index++) {
            properties.push('light' + index);
        }
        for (index = 1; index <= 28; index++) {
            properties.push('medium' + index);
        }
        for (index = 1; index <= 11; index++) {
            properties.push('dark' + index);
        }
        for (index = 0; index < properties.length; index++) {
            (function (property) {
                TableStyles[property] = function () {
                    return GC_Spread_Sheets_Tables.TableThemes[property];
                };
            })(properties[index]);
        }
        Sheets.TableStyles = TableStyles;

        Sheets.TableRemoveOptions = Sheets._redefineEnum(GC_Spread_Sheets_Tables.TableRemoveOptions);

        var Sheet = Sheets.Sheet;
        Sheet.prototype.addTable = function (name, row, column, rowCount, columnCount, style) {
            return this.tables.add(name, row, column, rowCount, columnCount, style);
        };
        Sheet.prototype.addTableByDataSource = function (name, row, column, dataSource, style) {
            return this.tables.addFromDataSource(name, row, column, dataSource, style);
        };
        Sheet.prototype.findTable = function (row, column) {
            return this.tables.find(row, column);
        };
        Sheet.prototype.findTableByName = function (name) {
            return this.tables.findByName(name);
        };
        Sheet.prototype.removeTable = function (table, options) {
            return this.tables.remove(table, options);
        };
        Sheet.prototype.removeTableByName = function (name, options) {
            var table = this.tables.findByName(name);
            if (table) {
                return this.tables.remove(table, options);
            }
        };
        Sheet.prototype.moveTable = function (table, row, column) {
            return this.tables.move(table, row, column);
        };
        Sheet.prototype.moveTableByName = function (name, row, column) {
            var table = this.tables.findByName(name);
            if (table) {
                return this.tables.move(table, row, column);
            }
        };
        Sheet.prototype.resizeTable = function (table, range) {
            var tables = this.tables;
            return tables.resize.apply(tables, arguments);
        };
        Sheet.prototype.resizeTableByName = function (name, range) {
            return this.resizeTable.apply(this, arguments);
        };
        Sheet.prototype.getTables = function () {
            return this.tables.all();
        };
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets_Slicers = window.GC.Spread.Sheets.Slicers;
        var _extends = Sheets._extends;

        Sheets.ItemSlicer = (function (_super) {
            _extends(ItemSlicer, _super);

            function ItemSlicer(name) {
                var columnNames = [];
                var data = [];
                var slicerData = new GcSpread.Slicer.GeneralSlicerData(data, columnNames);
                _super.call(this, name, slicerData, '');
            }

            ItemSlicer.prototype.setData = function (slicerData, columnName) {
                _super.call(this, this.name(), slicerData, columnName);
            };

            return ItemSlicer;
        })(GC_Spread_Sheets_Slicers.ItemSlicer);

        Sheets.SlicerStyleInfo = GC_Spread_Sheets_Slicers.SlicerStyleInfo;
        Sheets.SlicerBorder = GC_Spread_Sheets_Slicers.SlicerBorder;
        Sheets.SlicerStyle = GC_Spread_Sheets_Slicers.SlicerStyle;
        Sheets.SlicerStyles = GC_Spread_Sheets_Slicers.SlicerStyles;
        Sheets.TableSlicerData = GC_Spread_Sheets_Slicers.TableSlicerData;
        Sheets.Slicer = GC_Spread_Sheets_Slicers.Slicer;

        var Sheet = Sheets.Sheet;
        Sheet.prototype.addSlicer = function (name, tableName, columnName, style) {
            return this.slicers.add(name, tableName, columnName, style);
        };
        Sheet.prototype.removeSlicer = function (name) {
            return this.slicers.remove(name);
        };
        Sheet.prototype.getSlicer = function (name) {
            return this.slicers.get(name);
        };
        Sheet.prototype.getSlicers = function (tableName, columnName) {
            return this.slicers.all(tableName, columnName);
        };
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets_Touch = window.GC.Spread.Sheets.Touch;
        Sheets.TouchToolStrip = GC_Spread_Sheets_Touch.TouchToolStrip;
        Sheets.TouchToolStripItem = GC_Spread_Sheets_Touch.TouchToolStripItem;
        Sheets.TouchToolStripSeparator = GC_Spread_Sheets_Touch.TouchToolStripSeparator;
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
var GcSpread;
(function (GcSpread) {
    (function (Sheets) {
        var GC_Spread_Sheets_DataValidation = window.GC.Spread.Sheets.DataValidation;
        var getPropertyValue = Sheets.getPropertyValue, rewriteMethod = Sheets._rewritePrototypeMethod;

        Sheets.CriteriaType = Sheets._redefineEnum(GC_Spread_Sheets_DataValidation.CriteriaType);
        Sheets.DataValidationResult = Sheets._redefineEnum(GC_Spread_Sheets_DataValidation.DataValidationResult);
        Sheets.ErrorStyle = Sheets._redefineEnum(GC_Spread_Sheets_DataValidation.ErrorStyle);

        function defineValidatorProperty(validator) {
            Sheets.defineProperty(validator, 'innerValidator', ['condition', 'type', 'errorStyle', 'ignoreBlank',
                'inCellDropdown', 'showInputMessage', 'showErrorMessage', 'inputTitle', 'errorTitle', 'inputMessage',
                'errorMessage', 'comparisonOperator']);
        }

        function convertValidator(validator) {
            var retValidator = new DefaultDataValidator();
            validator.outer = retValidator;
            retValidator.innerValidator = validator;
            return retValidator;
        }

        function getOuterStyle(tempStyle) {
            if (!tempStyle) {
                return null;
            }
            if(tempStyle.validator && tempStyle.validator.outer) {
                var style = new GcSpread.Sheets.Style();
                style.fromJSON(tempStyle.toJSON());
                style.validator = tempStyle.validator.outer;
                return style;
            }
            return tempStyle;
        }

        var DefaultDataValidator = (function (_super) {
            Sheets._extends(DefaultDataValidator, _super);

            function DefaultDataValidator(condition) {
                if (condition && condition.innerCondition) {
                    condition = condition.innerCondition;
                }
                this.innerValidator = new GC_Spread_Sheets_DataValidation.DefaultDataValidator(condition);
                this.innerValidator.outer = this;
                defineValidatorProperty(this);
            }

            rewriteMethod(DefaultDataValidator.prototype, 'innerValidator', 'IgnoreBlank', 'ignoreBlank');
            ['value1', 'value2', 'isValid', 'reset', 'getValidList', 'fromJSON', 'toJSON'].forEach(function (funcName) {
                rewriteMethod(DefaultDataValidator.prototype, 'innerValidator', funcName);
            });

            return DefaultDataValidator;
        })(GC_Spread_Sheets_DataValidation.DefaultDataValidator);
        ['createNumberValidator', 'createDateValidator', 'createTextLengthValidator',
            'createFormulaValidator', 'createFormulaListValidator', 'createListValidator'].forEach(function (funcName) {
            DefaultDataValidator[funcName] = function () {
                var validator = GC_Spread_Sheets_DataValidation[funcName].apply(null, arguments);
                return convertValidator(validator);
            };
        });

        var sheetPrototype = Sheets.Sheet.prototype,
            setDataValidator = sheetPrototype.setDataValidator,
            getDataValidator = sheetPrototype.getDataValidator,
            setStyle = sheetPrototype.setStyle,
            getStyle = sheetPrototype.getStyle,
            setDefaultStyle = sheetPrototype.setDefaultStyle,
            getDefaultStyle = sheetPrototype.getDefualtStyle,
            addNamedStyle = sheetPrototype.addNamedStyle,
            getNamedStyle = sheetPrototype.getNamedStyle;
        var spreadPrototype = Sheets.Spread.prototype,
            addSpreadNamedStyle = spreadPrototype.addNamedStyle,
            getSpreadNamedStyle = spreadPrototype.getNamedStyle;

        sheetPrototype.setDataValidator = function (row, col, value, sheetArea) {
            var validator = value;
            if (validator && validator.innerValidator) {
                validator = validator.innerValidator;
            }
            setDataValidator.call(this, row, col, validator, sheetArea);
        };
        sheetPrototype.getDataValidator = function (row, col, sheetArea) {
            var validator = getDataValidator.call(this, row, col, sheetArea);
            if (!validator) {
                return null;
            }
            return validator.outer || validator;
        };
        sheetPrototype.setStyle = function (row, col, style, sheetArea) {
            if (style && style.validator && style.validator.innerValidator) {
                style.validator = style.validator.innerValidator;
            }
            setStyle.call(this, row, col, style, sheetArea);
        };
        sheetPrototype.getStyle = function () {
            var tempStyle = getStyle.apply(this, arguments);
            return getOuterStyle(tempStyle);
        };
        sheetPrototype.setDefaultStyle = function (style, sheetArea) {
            if (style && style.validator && style.validator.innerValidator) {
                style.validator = style.validator.innerValidator;
            }
            setDefaultStyle.call(this, style, sheetArea);
        };
        sheetPrototype.getDefualtStyle = function () {
            var tempStyle = getDefaultStyle.apply(this, arguments);
            return getOuterStyle(tempStyle);
        };
        sheetPrototype.addNamedStyle = function (style) {
            if (style && style.validator && style.validator.innerValidator) {
                style.validator = style.validator.innerValidator;
            }
            addNamedStyle.call(this, style);
        };
        sheetPrototype.getNamdStyle = function () {
            var tempStyle = getNamedStyle.apply(this, arguments);
            return getOuterStyle(tempStyle);
        };
        spreadPrototype.addNamedStyle = function (style) {
            if (style && style.validator && style.validator.innerValidator) {
                style.validator = style.validator.innerValidator;
            }
            addSpreadNamedStyle.call(this, style);
        };
        spreadPrototype.getNamedStyle = function () {
            var tempStyle = getSpreadNamedStyle.apply(this, arguments);
            return getOuterStyle(tempStyle);
        };
        Sheets.DefaultDataValidator = DefaultDataValidator;
    })(GcSpread.Sheets || (GcSpread.Sheets = {}));
})(GcSpread || (GcSpread = {}));
