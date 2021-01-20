(function() {
    var callWithJQuery;

    callWithJQuery = function(pivotModule) {
        return pivotModule(jQuery, {});
    };

    callWithJQuery(function($, ec) {
        var makeEcChart;
        makeEcChart = function(chartOpts) {
            if (chartOpts == null) {
                chartOpts = {};
            }
            return function(pivotData, opts) {
                var agg, attrs, eStack, base, base1, base2, base3, base4, base5, colKey, colKeys, columns, dataColumns, defaults, fullAggName, groupByTitle, h, hAxisTitle, headers, i, j, k, l, len, len1, len2, len3, len4, m, numCharsInHAxis, numSeries, params, ref, ref1, ref2, ref3, renderArea, result, rotationAngle, row, rowHeader, rowKey, rowKeys, s, scatterData, series, title, titleText, vAxisTitle, val, vals, x, xs;
                var deftooltip = {
                    trigger: 'item',
                    transitionDuration: 0.5,
                    backgroundColor: 'rgba(0,0,0,0)',
                    formatter: function(params, ticket, callback) {
                        if (params[0] !== undefined) {
                            var res = '<B><div style="background:#fff;border:1px solid #1e90ff;vertical-align:auto"><div style="line-height: 20px;background: #828282;height: 20px;color:#fff;" ALIGN ="center">&nbsp&nbsp' + params[0].name +
                                '&nbsp&nbsp</div>';
                            for (var i = 0, l = params.length; i < l; i++) {
                                res += '<div style="background: #eee;height: 20px;line-height: 20px;color:#828282">&nbsp&nbsp' + params[i].seriesName + ' &nbsp | &nbsp ' + params[i].value + ' &nbsp&nbsp</div>';
                            }
                            res += '</div></B>';
                        } else {
                            var res = '<B><div style="background:#fff;border:1px solid #1e90ff;vertical-align:auto"><div style="line-height: 20px;background: #828282;height: 20px;color:#fff;" ALIGN ="center">&nbsp&nbsp' + params.name +
                                '&nbsp&nbsp</div>';
                            if (params.seriesName !== "") {
                                res += '<div style="background: #eee;height: 20px;line-height: 20px;color:#828282">&nbsp&nbsp' + params.seriesName + ' &nbsp | &nbsp ' + params.value + ' &nbsp&nbsp</div>';
                            }
                            res += '</div></B>';
                        }
                        setTimeout(function() {
                            callback(ticket, res);
                        }, 1)
                        return ' ';
                    },
                    textStyle: {
                        color: '#000',
                        fontSize: '8'
                    }
                };
                if (chartOpts.type === "map") {
                    defaults = {
                        localeStrings: {
                            vs: "vs",
                            by: "by"
                        },
                        ec: {},
                        title: {
                            text: "",
                            x: "center",
                            textStyle: {
                                fontFamily: "Segoe UI, Lucida Grande, Helvetica, Arial, Microsoft YaHei",
                                fontFamily2: '微软雅黑',
                            },
                        },
                        tooltip: {},
                        dataRange: {
                            show: true,
                            min: 0,
                            max: 2500,
                            x: 'left',
                            y: 'bottom',
                            text: ['高', '低'],
                            calculable: true
                        },
                        toolbox: {
                            show: true,
                            orient: 'horizontal',
                            x: '100',
                            y: '100',
                            feature: {
                                mark: { show: true },
                                dataView: { show: true, readOnly: true },
                                restore: { show: true },
                                saveAsImage: { show: true }
                            }
                        },
                        roamController: {
                            show: false,
                            x: 'right',
                            width: 40,
                            height: 60,
                            mapTypeControl: {
                                'china': true
                            }
                        },
                        series: [],
                        TextStyle: {
                            fontFamily: "Segoe UI, Lucida Grande, Helvetica, Arial, Microsoft YaHei",
                            fontFamily2: '微软雅黑',
                        },
                    };
                } else if (chartOpts.type === "pie") {
                    defaults = {
                        localeStrings: {
                            vs: "vs",
                            by: "by"
                        },
                        ec: {},
                        title: {
                            text: "",
                            x: "center",
                            textStyle: {
                                fontFamily: "Segoe UI, Lucida Grande, Helvetica, Arial, Microsoft YaHei",
                                fontFamily2: '微软雅黑',
                            },
                        },
                        tooltip: {},
                        legend: {
                            x: "center",
                            y: "bottom",
                            data: []
                        },
                        series: [{
                            name: '访问来源',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            //center: ['50%', '60%'],
                            data: [],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }]
                    };
                } else {
                    //初期默认值设定
                    defaults = {
                        localeStrings: {
                            vs: "vs",
                            by: "by"
                        },
                        ec: {},
                        title: {
                            text: "",
                            x: "center",
                            textStyle: {
                                fontFamily: "Segoe UI, Lucida Grande, Helvetica, Arial, Microsoft YaHei",
                                fontFamily2: '微软雅黑',
                            },
                        },
                        tooltip: {},
                        legend: {
                            x: "center",
                            y: "bottom"
                        },

                        toolbox: {
                            show: true,
                            orient: 'horizontal',
                            x: 'right',
                            y: 'top',
                            feature: {
                                dataView: { show: true, readOnly: false },
                                restore: { show: true },
                                saveAsImage: { show: true }
                            }
                        },
                        //calculable: true,
                        xAxis: [{
                            type: 'category',
                            splitLine: {
                                show: false
                            },
                            splitArea: {
                                show: false
                            },
                            axisLabel: {
                                interval: 0,
                                rotate: -45,
                                margin: 2
                            },
                            nameTextStyle: {
                                fontFamily: "Segoe UI, Lucida Grande, Helvetica, Arial, Microsoft YaHei",
                                fontFamily2: '微软雅黑',
                            },
                        }],
                        yAxis: [{
                            type: 'value',
                            splitLine: {
                                show: true
                            },
                            splitArea: { show: true },
                            nameTextStyle: {
                                fontFamily: "Segoe UI, Lucida Grande, Helvetica, Arial, Microsoft YaHei",
                                fontFamily2: '微软雅黑',
                            },
                        }]

                    };
                }
                defaults.tooltip = deftooltip;
                opts = $.extend(true, defaults, opts);
                if ((base = opts.ec).size == null) {
                    base.size = {};
                }
                //宽度取得
                if ((base1 = opts.ec.size).width == null) {
                    base1.width = window.innerWidth / 1.2;
                }
                //高度取得
                if ((base2 = opts.ec.size).height == null) {
                    base2.height = window.innerHeight / 1.2 - 50;
                }
                //类型取得
                if (chartOpts.type == null) {
                    chartOpts.type = "line";
                }
                rowKeys = pivotData.getRowKeys();
                if (rowKeys.length === 0) {
                    rowKeys.push([]);
                }
                colKeys = pivotData.getColKeys();
                if (colKeys.length === 0) {
                    colKeys.push([]);
                }
                //标题头取得
                headers = (function() {
                    var i, len, results;
                    results = [];
                    for (i = 0, len = colKeys.length; i < len; i++) {
                        h = colKeys[i];
                        results.push(h.join("-"));
                    }
                    return results;
                })();


                rotationAngle = 0;
                fullAggName = pivotData.aggregatorName;
                if (pivotData.valAttrs.length) {
                    fullAggName += "(" + (pivotData.valAttrs.join(", ")) + ")";
                }

                numCharsInHAxis = 0;
                for (k = 0, len2 = headers.length; k < len2; k++) {
                    x = headers[k];
                    numCharsInHAxis += x.length;
                }
                if (numCharsInHAxis > 50) {
                    rotationAngle = 45;
                }
                columns = [];
                //console.log(rowKeys)
                //console.log(colKeys)
                for (l = 0, len3 = pivotData.rowAttrs.length; l < len3; l++) {

                    rowHeader = pivotData.rowAttrs[l];
                    //console.log(rowHeader)
                    row = [rowHeader === "" ? pivotData.rowAttrs : rowHeader];

                    for (m = 0, len4 = pivotData.rowKeys.length; m < len4; m++) {
                        colKey = colKeys[m];

                        val = pivotData.rowKeys[m];
                        //console.log(val[l])

                        row.push(val[l]);

                    }
                    columns.push(row);

                }
                //console.log(columns)
                vAxisTitle = pivotData.aggregatorName + (pivotData.valAttrs.length ? "(" + (pivotData.valAttrs.join(", ")) + ")" : "");
                hAxisTitle = pivotData.colAttrs.join("-");
                titleText = fullAggName;
                if (hAxisTitle !== "") {
                    titleText += " " + opts.localeStrings.vs + " " + hAxisTitle;
                }
                groupByTitle = pivotData.rowAttrs.join("-");
                if (groupByTitle !== "") {
                    titleText += " " + opts.localeStrings.by + " " + groupByTitle;
                }

                opts.title.text = " ";
                var seriesData = [];
                var seriesName = [];

                for (var i = 0; i < columns.length; i++) {
                    seriesData[i] = { name: "", type: "", data: [] };
                    seriesData[i].name = columns[i][0];
                    if (chartOpts.type === "bar_line") {
                        seriesData[i].type = "bar";
                        seriesData[0].type = "line";
                    } else {
                        seriesData[i].type = chartOpts.type;
                    }
                    seriesData[i].symbol = "emptyCircle";
                    seriesData[i].showAllSymbol = true;
                    seriesData[i].symbolSize = function(value) {
                        return 4;
                    }
                    if (chartOpts.stack === "bar") {
                        seriesData[i].stack = "bar";
                    }
                    if (chartOpts.stack === "areaStyle") {
                        seriesData[i].smooth = true;
                        seriesData[i].itemStyle = { normal: { areaStyle: { type: 'default' } } };
                    }
                    seriesName[i] = columns[i][0];
                    columns[i].splice(0, 1);
                    for (var j = 0; j < columns[i].length; j++) {

                        if (columns[i][j] === null) {
                            columns[i][j] = "0";
                        }
                    }
                    seriesData[i].data = columns[i];
                }


                if (chartOpts.type === "map") {
                    opts.series = seriesData;
                    var eSeries = [];
                    var eSeriesDataArr = [];
                    var j = 0;
                    for (var i = 0; i < opts.series.length; i++) {
                        var eSeriesData = { name: seriesName[i], type: 'map', mapType: 'china', itemStyle: { normal: { label: { show: true } }, emphasis: { label: { show: true } } }, data: [] };
                        for (var z = 0; z < opts.series[i].data.length; z++) {
                            var eSvalue = pivotData.colTotals[headers[z]];
                            if (eSvalue === undefined) {
                                eSvalue = "";
                            } else {
                                eSvalue = eSvalue.value();
                            }
                            var eSeriesDataT = { name: headers[z], value: eSvalue };
                            eSeriesData.data[z] = eSeriesDataT;
                            eSeriesDataArr[j] = opts.series[i].data[z];
                            j++;

                        }
                        eSeries[i] = eSeriesData;
                    }
                    opts.series = eSeries;
                    opts.dataRange.min = Math.min.apply(null, eSeriesDataArr);
                    opts.dataRange.max = Math.max.apply(null, eSeriesDataArr);
                } else if (chartOpts.type === "pie") {
                    var eSeries = [];
                    var j = 0;

                    var eSeriesData = { value: "", name: "" };
                    for (var z = 0; z < pivotData.rowKeys.length; z++) {
                        var eSvalue = pivotData.rowKeys[z][0];
                        //console.log(pivotData)
                        if (eSvalue === undefined) {
                            eSvalue = "";
                        } else {
                            eSvalue = eSvalue;
                        }
                        var eSeriesDataT = { value: eSvalue, name: headers[z] };
                        eSeries[j] = eSeriesDataT;
                        j++;
                    }
                    opts.legend.data = headers;

                    opts.series[0].name = pivotData.rowAttrs[0];

                    opts.series[0].data = eSeries;

                }

                if (chartOpts.type !== "map" && chartOpts.type !== "pie") {
                    opts.xAxis[0].data = headers;
                    opts.xAxis[0].name = hAxisTitle;
                    opts.yAxis[0].name = vAxisTitle;
                    opts.xAxis[0].axisLabel.rotate = -rotationAngle;
                    //数据设定
                    opts.series = seriesData;
                    opts.legend.data = seriesName;
                }

                if (chartOpts.stack === "Cbar") {
                    var Axis = opts.yAxis;
                    opts.yAxis = opts.xAxis;
                    opts.xAxis = Axis;

                }
                echartsId = echartsId + 1;
                var divEchartsId = "ecDefaultsTemp" + echartsId;
                $("#" + divEchartsId).remove();
                renderArea = $("<div id =\"" + divEchartsId + "\"style=\"width: " + base1.width + "px;height: " + base2.height + "px;\">", {
                    style: "display:none;"
                }).appendTo($("body"));
                var result = $("<div style=\"width: " + base1.width + "px;height: " + base2.height + "px;\"></div>");
                ExeRequire(result, opts, divEchartsId);
                return $("<div>").append(result);
            };
        };
        return $.pivotUtilities.ec_renderers = {
            "线图": makeEcChart(),
            "柱图": makeEcChart({
                type: "bar"

            }),
            "填充柱图": makeEcChart({
                type: "bar",
                stack: "bar"
            }),
            "横向柱图": makeEcChart({
                type: "bar",
                stack: "Cbar"
            }),
            "填充线图": makeEcChart({
                type: "line",
                stack: "areaStyle"
            }),
            // "Map Chart": makeEcChart({
            //     type: "map"
            // }),
            "饼图": makeEcChart({
                type: "pie"
            }),
            "线柱图": makeEcChart({
                type: "bar_line"
            }),
        };
    });

}).call(this);


var echartsId = 0;

ExeRequire = function(eDom, opts, divEchartsId) {
    var option = opts;
    var myChart = echarts.init(document.getElementById(divEchartsId), 'walden');
    myChart.setOption(option);
    eDom.append($("#" + divEchartsId));

};