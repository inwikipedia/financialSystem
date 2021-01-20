/*
 * File   : jquery.fn.adcganttchart.js
 * Created: Monday October 8th 2018 1:16:41 pm
 * Author : yuchunyu97
 * License: MIT License
 * 
 * Copyright (c) 2018 yuchunyu97
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * -----
 * Last Modified: Friday November 30th 2018 4:52:46 pm
 * Modified By  : yuchunyu97 at <yuchunyu97@gmail.com>
 * -----
 * Description: ADC 甘特图插件 脚本文件
 * -----
 * HISTORY:
 * 2018-11-30	yuchunyu97	自定义进度条前后的样式，暂时支持默认的三角形和不显示图形
 * 2018-11-29	yuchunyu97	鼠标悬浮在时间轴上显示周首日、月首日和当天日期
 * 2018-11-29	yuchunyu97	v1.1.0 周视图增加标记功能，可在进度条上添加标记文字
 * 2018-11-29	yuchunyu97	将默认的 url 参数设为空；增加 data 参数，可以直接传入数据
 * 2018-11-22	yuchunyu97	压缩版的 JS 文件有问题，暂时不要使用，增加配置项目图标（使用绝对路径），取消 img 标签默认显示文字，防止与正文重合
 * 2018-10-16	yuchunyu97	修复一个滚动条补丁的 bug 以及一个默认配置错误的问题
 * 2018-10-16	yuchunyu97	版本发布 v1.0.0
 * 2018-10-16	yuchunyu97	FIX 修复计算每周信息时出现重复日期的 bug
 * 2018-10-16	yuchunyu97	增加动态加载
 * 2018-10-15	yuchunyu97	初步完成视图切换按钮和图例按钮，不过是并未优化
 * 2018-10-15	yuchunyu97	增加回到今天方法，且默认当前日期在容器中央
 * 2018-10-15	yuchunyu97	日视图矩阵信息计算完成
 * 2018-10-15	yuchunyu97	月视图矩阵信息计算完成
 * 2018-10-12	yuchunyu97	根据项目进度信息，计算出项目进度矩阵并绘制出进度图，已完成周视图，（月视图、日视图待完成）IE 兼容性测试完成，没问题
 * 2018-10-11	yuchunyu97	IE 8 兼容性问题：IE 8 下面 parseInt('08')、parseInt('09') 会转成 0，解决方法：加个参数：parseInt(numString, 10)
 * 2018-10-11	yuchunyu97	增加判断浏览器类型方法，增加 loading 动画方法
 * 2018-10-11	yuchunyu97	增加滚动条补丁
 * 2018-10-10	yuchunyu97	表格时间轴、项目轴以及主体表格，通过 JS 动态生成
 * 2018-10-10	yuchunyu97	完善配置参数
 * 2018-10-10	yuchunyu97	增加 JS 工具方法 getWeekInfo calcDate compareDate 以及内部方法 xAxisInitial pullData render
 * 2018-10-10	yuchunyu97	完善表格主体样式，实现滚动条在可是范围内滑动
 * 2018-10-09	yuchunyu97	插件 js 脚本框架搭建完成，基础 CSS 样式完成
 * 2018-10-08	yuchunyu97	由旧版的项目进度条放在一个 TD 标签内改为放在多个对应时间的 TD 标签内，便于扩展时间轴；并且优化项目进度条的显示样式（增加首尾的箭头）
 * 2018-10-08	yuchunyu97	重构 HTML/CSS 代码框架，解决项目列表上下、左右滑动不流畅的问题，以及横向滚动条在最底部的 bug
 */

// 开头加一个分号是为了防止第一对括号与别人定义的函数相连，导致解析代码的时候报错
;
(function ($, undefined) {
    "use strict";

    // 获取当前日期
    var now = new Date();

    // 调试模式
    var DEBUG = false;
    // 版本号
    var VERSION = '1.1.0';
    var colorArray=['background-color: rgba(85,183,255,1)','background-color: rgba(54,203,203,0.66)'
                   ,'background-color: rgba(77,203,115,0.7)','background-color: rgba(250,211,55,1)','background-color: rgba(255,134,127,1)'];

    // 定义插件的默认属性
    var defaults = {
        // height: 560 // 容器的高度
        // ,
        width: 0 // 容器的宽度
        , toolbarHeight: 60 // 工具条高度
        , cellHeight: 50 // 单元格高度
        , projectCellWidth: 175 // 项目名称列宽度

        , projectImage: '/ADC_info/favicon.ico' // 项目图标
        , minStartDate:''//最小时间
        , separator: '-' // 日期分隔符
        , defaultDate: [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-') // 自定义开始日期
        , request: {} // 发送请求时的数据，start 开始时间，end 结束时间
        , loadMore: { left: 0, right: 0 }
        , container: { width: 0, height: 0 } // 表格容器尺寸

        , viewCurrent: 0 // 当前视图索引
        , viewSet: [ // 视图列表：周视图、月视图、日视图
            // id，名称，自动加载的天数，单个单元格的宽度
            { id: 'D', name: '日', loadDays: 30, cellWidth: 112, firstDay: '' },
            { id: 'W', name: '周', loadDays: 24 * 7, cellWidth: 112, firstDay: '周首日 ' },
            { id: 'M', name: '月', loadDays: 18 * 30, cellWidth: 112, firstDay: '月首日 ' }

        ]

        , legend: [ // 图例；style 为对应图例及项目进度条的样式
              { name: '需求', style: 'background-color: rgb(54, 203, 203);opacity: .7964;' }
            , { name: '设计', style: 'background-color: rgb(77, 203, 115);opacity: .7964;' }
            , { name: '开发', style: 'background-color: rgb(250, 211, 55);opacity: .7964;' }
            , { name: '测试', style: 'background-color: rgb(255, 134, 127);opacity: .7964;' }
            // , { name: '运维', style: 'background-color: rgb(84, 161, 248);opacity: .7964;' }
        ]

        , xAxis: [] // x 轴，时间轴
        , yAxis: [] // y 轴，项目轴
        , dataMatrix: [] // 表格数据矩阵

        , url: ''
        , rawData: [] // 当前请求获取到的原始数据

        , styleBarStart: 'triangle' // 无样式 '' ；默认 三角形 'triangle' ；(TODO)半圆 'semicircle'
        , styleBarEnd: 'triangle'  // 无样式 '' ；默认 三角形 'triangle' ；(TODO)半圆 'semicircle'
    };

    var ELEM = 'adc-ganttchart',
        ELEM_TOOLBAR = ELEM + '-toolbar',
        ELEM_TOOLBAR_TEXT=ELEM_TOOLBAR+'-text',
        ELEM_TOOLBAR_VIEW_CONTAINER = ELEM_TOOLBAR + '-view-container',
        ELEM_TOOLBAR_VIEW = ELEM_TOOLBAR + '-view',
        ELEM_TOOLBAR_LEGEND_CONTAINER = ELEM_TOOLBAR + '-legend-container',
        ELEM_TOOLBAR_LEGEND = ELEM_TOOLBAR + '-legend',
        ELEM_TOOLBAR_LEGEND_HIDE = ELEM_TOOLBAR + '-legend-hide',
        ELEM_CONTAINER = ELEM + '-container',
        ELEM_BOX = ELEM + '-box',
        ELEM_HEADER = ELEM + '-header',
        ELEM_BODY = ELEM + '-body',
        ELEM_MAIN = ELEM + '-main',
        ELEM_FIXED = ELEM + '-fixed',
        ELEM_CELL = ELEM + '-cell',
        ELEM_CELL_PATCH = ELEM + '-cell-patch',
        ELEM_LOADING = ELEM + '-loading',
        ELEM_LOADING_LT_IE10 = ELEM + '-loading-lt-ie10',
        ELEM_DEFAULT_DATE = ELEM + '-default-date';
    
    // 容器模板
    var TPL_LOADING = '<div class="' + ELEM_LOADING + '"><div class="loading"></div></div>',
        TPL_LOADING_LT_IE10 = '<div class="' + ELEM_LOADING_LT_IE10 + '"><div class="loading">Loading . . .</div></div>';
    var TPL =  '<div class="' + ELEM_TOOLBAR + '">\
                    <div class="' + ELEM_TOOLBAR_VIEW_CONTAINER + '"></div>\
                    <div class="' + ELEM_TOOLBAR_LEGEND_CONTAINER + '"></div>\
                </div>\
                <div class="' + ELEM_CONTAINER + '">\
                    <div class="' + ELEM_BOX + '">\
                        <div class="' + ELEM_HEADER + '">\
                            <table cellspacing="0" cellpadding="0" border="0">\
                                <thead></thead>\
                            </table>\
                        </div>\
                        <div class="' + ELEM_BODY + ' ' + ELEM_MAIN + '">\
                            <table cellspacing="0" cellpadding="0" border="0">\
                                <tbody></tbody>\
                            </table>\
                        </div>\
                        <div class="' + ELEM_FIXED + '">\
                            <div class="' + ELEM_HEADER + '">\
                                <table cellspacing="0" cellpadding="0" border="0">\
                                    <thead></thead>\
                                </table>\
                            </div>\
                            <div class="' + ELEM_BODY + '">\
                                <table cellspacing="0" cellpadding="0" border="0">\
                                    <tbody></tbody>\
                                </table>\
                            </div>\
                        </div>\
                    </div>\
                </div>';

    /**
     * 当前实例
     * 通过 call() 方法调用，使 this 指向实例化的 Class 类
     *
     * @returns 返回一些暴露出来操作当前实例的方法
     */
    var Instance = function () {
        var that = this;

        return {
            version: VERSION,
            // config: that.options,
            today: function () { that.scrollToDefaultDate.call(that, true); }
        };
    };

    /**
     * 内部类
     * 处理甘特图相关的方法
     *
     * @param {*} options 配置参数
     * @param {*} elem jQuery 对象，选择的元素
     */
    var Class = function (options, elem) {
        var that = this;

        that.options = options;
        that.elem = elem;

        // 初始化
        that.init();
    };

    /**
     * 初始化
     *
     */
    Class.prototype.init = function () {
        var that = this,
            options = that.options,
            elem = that.elem;

        // 先加载基本 HTML 框架
        // 给最外层容器增加 class 以及宽度
        elem.addClass(ELEM);
        if (options.width > 0) elem.css('width', options.width);
        // 添加内容框架
        elem.append(TPL);
        console.log(options.toolbarHeight,options.height,options.cellHeight)
        // elem.find('.' + ELEM_TOOLBAR).css('height', options.toolbarHeight);
        elem.find('.' + ELEM_CONTAINER).css('height', options.height - options.toolbarHeight);
        elem.find('.' + ELEM_MAIN).css('height', options.height - options.toolbarHeight - options.cellHeight);
        elem.find('.' + ELEM_FIXED).find('.' + ELEM_BODY).css('height', options.height - options.toolbarHeight - options.cellHeight);

        // 视图切换按钮
        $.each(options.viewSet, function (index, item) {
            $('.' + ELEM_TOOLBAR_VIEW_CONTAINER).append('<div class="' + ELEM_TOOLBAR_VIEW + '" data-view="' + index + '">' + item.name + '</div>');
        });
        $('.' + ELEM_TOOLBAR_VIEW).on('click', function () {
            var viewIndex = $(this).data('view');
            that.reload.call(that, {viewCurrent: viewIndex});
        });

        // 图例
        var toolbarLegendContainer = $('.' + ELEM_TOOLBAR_LEGEND_CONTAINER),
            styleSheet = '<style>.adc-ganttchart-project-style {background-color: transparent;}';
        // $.each(options.legend, function (index, item) {
        //     toolbarLegendContainer.append('<div class="' + ELEM_TOOLBAR_LEGEND + ' adc-ganttchart-legend' + index + '" data-legend="' + index + '">' + item.name + '</div>');
        //     styleSheet += '.adc-ganttchart-project-style' + index + ',.adc-ganttchart-legend' + index + ':before {' + item.style + '}';
        // });
        $.each(colorArray, function (index, item) {

            styleSheet += '.adc-ganttchart-project-style' + index + ',.adc-ganttchart-legend' + index + ':before {' + item + '}';
        });

        styleSheet += '</style>';
        $('.' + ELEM).append(styleSheet);
        $('.' + ELEM_TOOLBAR_LEGEND).on('click', function () {
            var legendIndex = $(this).data('legend'),
                legendClass = $(this).hasClass(ELEM_TOOLBAR_LEGEND_HIDE);
            if (legendClass) {
                $(this).removeClass(ELEM_TOOLBAR_LEGEND_HIDE);
                $('.adc-ganttchart-project-style' + legendIndex).css('visibility', 'visible');
            } else {
                $(this).addClass(ELEM_TOOLBAR_LEGEND_HIDE);
                $('.adc-ganttchart-project-style' + legendIndex).css('visibility', 'hidden');
            }
        });

        that.loading(true);
        that.pullData();
        that.requestInitial(true);

        // 获取数据


        // 绘制容器
        // 包括绘制主体框架，生成矩阵数据，绘制进度图
        that.render();

        // 滚动事件处理
        that.scrollEvent();
        // // 滚动到当前默认日期
        // that.scrollToDefaultDate();
        // 完成加载
        that.loading(false);
        options.container.width = $('.' + ELEM_MAIN).find('table').width();
        options.container.height = $('.' + ELEM_MAIN).find('table').height();
    };

    /**
     * 重新渲染
     * 可以用在切换视图
     * 也可以用在动态加载数据
     *
     * @param {*} config 配置，可以进行更新配置
     */
    Class.prototype.reload = function (config) {
        var that = this,
            options = that.options,
            toLeft = false,
            toRight = false;
        
        // 必须传参才可以使用
        if (!config 
            || (config.hasOwnProperty('viewCurrent') 
                && config.viewCurrent === options.viewCurrent) 
            || (config.hasOwnProperty('loadMore') 
                && config.loadMore.left === options.loadMore.left 
                && config.loadMore.right === options.loadMore.right)) {
            return;
        }
        // 如果是动态加载，判断是向左还是向右加载
        if (config.hasOwnProperty('loadMore') && config.loadMore.left === options.loadMore.left && config.loadMore.right !== options.loadMore.right) {
            toRight = true;
        } else if (config.hasOwnProperty('loadMore') && config.loadMore.left !== options.loadMore.left && config.loadMore.right === options.loadMore.right) {
            toLeft = true;
        }
        // 如果是切换视图，将动态加载设置重置
        if (config.hasOwnProperty('viewCurrent')) {
            config.loadMore = { left: 0, right: 0 };
        }

        // 重新渲染

        options = $.extend(options, config);
        that.requestInitial();
        if (that.minStartDate)
        {
            var startDate=options.request.start;
            if (new Date(startDate).getTime()<new Date(that.minStartDate).getTime())
            {
                options.request.start=that.minStartDate;
            }

            if (new Date(startDate).getTime()==new Date(that.minStartDate).getTime())
            {
                 return;
            }
        }

        that.loading(true);

        that.render();

        if (config && config.hasOwnProperty('viewCurrent')) {
            that.scrollToDefaultDate();
        } else if (config && toLeft) {
            // 如果是向左加载，则向左偏移加载的宽度
            var newWidth = $('.' + ELEM_MAIN).find('table').width(),
            diff = newWidth - options.container.width,
            left = $('.' + ELEM_MAIN).scrollLeft();
            $('.' + ELEM_MAIN).scrollLeft(left + diff);
        }

        options.container.width = $('.' + ELEM_MAIN).find('table').width();
        options.container.height = $('.' + ELEM_MAIN).find('table').height();

        that.loading(false);
    };

    /**
     * Ajax 获取数据
     *
     */
    Class.prototype.pullData = function () {
        var that = this,
            options = that.options;
        if (options.url) {
            $.ajax({
                type: 'GET'
                , url: options.url
                , contentType: 'application/json; charset=utf-8'
                , data: options.request
                , dataType: 'json'
                , headers: {}
                , async: false // 必须为同步请求，否则后面渲染可能获取不到数据
                , success: function (res) {
                    // 保存原始数据
                    options.rawData = res;
                    options.data=res.data;
                }
                , error: function (err, msg) {
                    console && console.error && console.error(msg);
                }
            });
        } else if (options.data) {
            options.rawData = {
                data: options.data
            };
        } else {
            console && console.error && console.error('Parameter url cannot be empty.');
        }
        if (options.rawData.data.length>0)
        {
            that.minStartDate=new Date(options.rawData.data[0].start).toFormat();
            that.options.defaultDate=that.minStartDate;
        }
    };
    // 重写时间戳转换方法
    Date.prototype.toFormat = function() {
        return this.getFullYear() + "-" + (this.getMonth() + 1 < 10 ? '0' + (this.getMonth() + 1) : this.getMonth() + 1) + "-" + (this.getDate() < 10 ? '0' + (this.getDate()) : this.getDate()) ;

    };

    Class.prototype.requestInitial = function (isFirst) {

        var that = this,
            options = that.options,
            loadMore = options.loadMore;
        // 根据开始日期 defaultDate 以及当前视图 viewCurrent 和各个视图的加载天数
        var startDate = that.calcDate(options.defaultDate, -options.viewSet[options.viewCurrent].loadDays * (loadMore.left + 1));
        var endDate = that.calcDate(options.defaultDate, options.viewSet[options.viewCurrent].loadDays * (loadMore.right + 1));
        // DONE: 根据不同的视图，调整开始日期/结束日期为本周/月的第一天/最后一天
        if (options.viewCurrent === 0) {
            // 周视图
            var tmpStartDate = that.dateStringFormat(startDate),
                tmpStartWeek = tmpStartDate.getDay(),
                tmpEndDate = that.dateStringFormat(endDate),
                tmpEndWeek = tmpEndDate.getDay();

            if (tmpStartWeek === 0) {
                // 当前开始日期为周日
                startDate = that.calcDate(startDate, -6);
            } else if (tmpStartWeek > 1) {
                // 当前开始日期为周二到周六
                startDate = that.calcDate(startDate, 1 - tmpStartWeek);
            }
            if (tmpEndWeek > 0) {
                // 当前结束日期不为周日
                endDate = that.calcDate(endDate, 7 - tmpEndWeek);
            }
        } else if (options.viewCurrent === 1) {
            // 月视图
            var tmpStartDate = that.dateStringFormat(startDate),
                tmpStartYear = tmpStartDate.getFullYear(),
                tmpStartMonth = tmpStartDate.getMonth() + 1,
                tmpEndDate = that.dateStringFormat(endDate),
                tmpEndYear = tmpEndDate.getFullYear(),
                tmpEndMonth = tmpEndDate.getMonth() + 1;
            startDate = that.calcDate([tmpStartYear, tmpStartMonth, 1].join(options.separator), 0);
            if (tmpEndMonth === 12) {
                // 本年最后一个月，则计算下一年 1 月减一天
                endDate = that.calcDate([tmpEndYear + 1, 1, 1].join(options.separator), -1);
            } else {
                // 否则，直接计算下个月的前一天
                endDate = that.calcDate([tmpEndYear, tmpEndMonth + 1, 1].join(options.separator), -1);
            }
        }
        //第一次加载默认显示在项目初始日期
        if (isFirst&that.minStartDate!=''&that.minStartDate!=undefined)
        {
            startDate=that.minStartDate;
        }
        options.request = { start: startDate, end: endDate };
    };
    /**
     * 初始化 y轴项目轴
     *
     */
    Class.prototype.yAxisInitial = function () {
        var that = this,
            options = that.options,
            data = options.rawData.data,
            result = [];
        // 根据项目条目，提取 y轴项目信息
        $.each(data, function (index, item) {
            // TODO: 根据配置信息，根据不同的 key 动态获取
            result.push({
                id: item.id,
                name: item.name,
                schedule: item.schedule,
                start: item.start,
                mark: item.mark
            });
        });
        // 保存 y轴数据
        options.yAxis = result;
    };

    /**
     * 初始化 x轴时间轴
     *
     */
    Class.prototype.xAxisInitial = function () {
        var that = this,
            options = that.options,
            separator = options.separator,
            startDate = options.request.start,
            endDate = options.request.end,
            viewInfo = options.viewSet[options.viewCurrent];
        // 缓存结果的
        var result = [];

        switch (viewInfo.id) {
            case 'W':
                // 周视图
                // 初始化当前时间为开始时间所在周的第一天

                if (!startDate)
                {
                    break;
                }

                var currentDate = that.getWeekInfo(startDate).firstDateOfWeek;
                while (that.compareDate(currentDate, endDate) <= 0) {
                    // 获取本周信息
                    var currentWeekInfo = that.getWeekInfo(currentDate);
                    // 根据实际情况，显示年份信息
                    // var currentYearInfo = result.length === 0 || (currentWeekInfo.month === 1 && currentWeekInfo.week === 1) ? currentWeekInfo.year + ' ' : '';
                    var currentYearInfo1 =  currentWeekInfo.year
                    var currentYearInfo = currentYearInfo1.toString().substring(4,2) + '年';
                    // 格式化
                    currentWeekInfo.month = currentWeekInfo.month.toString().length === 1 ? '0' + currentWeekInfo.month : currentWeekInfo.month;
                    // 判断当前日期是否在当前周
                    var isDefaultDate = that.compareDate(options.defaultDate, currentDate);
                    isDefaultDate = isDefaultDate >= 0 && isDefaultDate < 7;
                    // 缓存数据
                    result.push({
                        name: currentYearInfo + currentWeekInfo.month + '月第' + currentWeekInfo.week + '周',
                        firstDate: currentWeekInfo.firstDateOfWeek,
                        isDefaultDate: isDefaultDate
                    });
                    // 将当前时间向后顺延一周
                    currentDate = that.calcDate(currentDate, 7);
                }
                break;
            case 'M':
                if (!startDate)
                {
                    break;
                }
                // 月视图
                // 初始化当前时间为开始时间所在月份的第一天
                var startDateIns = that.dateStringFormat(startDate),
                    currentDate = [startDateIns.getFullYear(), startDateIns.getMonth() + 1, startDateIns.getDate()].join(separator);
                while (that.compareDate(currentDate, endDate) <= 0) {
                    // 获取当前时间实例和对应的年月日信息
                    var currentMonthDateIns = that.dateStringFormat(currentDate),
                        currentMonthYear = currentMonthDateIns.getFullYear(),
                        currentMonthMonth = currentMonthDateIns.getMonth() + 1,
                        currentMonthDay = currentMonthDateIns.getDate(),
                        // 格式化
                        currentMonthMonth = currentMonthMonth.toString().length === 1 ? '0' + currentMonthMonth : currentMonthMonth,
                        currentMonthDay = currentMonthDay.toString().length === 1 ? '0' + currentMonthDay : currentMonthDay,
                        // 计算本月信息
                        currentMonthInfo = currentMonthMonth + '月',
                        // 根据实际情况，显示年份信息
                        // currentYearInfo = result.length === 0 || parseInt(currentMonthMonth, 10) === 1 ? currentMonthYear + '年' : '',
                        currentYearInfo =  currentMonthYear + '年',
                        countDays = new Date(currentMonthYear, parseInt(currentMonthMonth, 10), 0).getDate();
                    // 判断当前日期是否在当前月
                    var isDefaultDate = that.compareDate(options.defaultDate, currentDate);
                    isDefaultDate = isDefaultDate >= 0 && isDefaultDate < countDays;
                    // 缓存数据
                    result.push({
                        name: currentYearInfo + currentMonthInfo,
                        firstDate: [currentMonthYear, currentMonthMonth, currentMonthDay].join(separator),
                        isDefaultDate: isDefaultDate,
                        // HINT: 月视图特有的信息，即当前年月，以及当月有多少天
                        Y: currentMonthYear,
                        M: parseInt(currentMonthMonth, 10),
                        countDays: countDays
                    });
                    // 将当前时间向后顺延一个月
                    if (currentMonthMonth === 12) {
                        currentMonthYear++;
                        currentMonthMonth = 1;
                    } else {
                        currentMonthMonth++;
                    }
                    currentDate = [currentMonthYear, currentMonthMonth, 1].join(separator);
                }
                break;
            case 'D':
                // 日视图
                if (!startDate)
                {
                    break;
                }
                var currentDate = startDate;
                while (that.compareDate(currentDate, endDate) <= 0) {
                    var currentDayIns = that.dateStringFormat(currentDate),
                        currentDayYear = currentDayIns.getFullYear(),
                        currentDayMonth = currentDayIns.getMonth() + 1,
                        currentDayDay = currentDayIns.getDate(),
                        // 格式化
                        currentDayMonth = currentDayMonth.toString().length === 1 ? '0' + currentDayMonth : currentDayMonth,
                        currentDayDay = currentDayDay.toString().length === 1 ? '0' + currentDayDay : currentDayDay,
                        // 根据实际情况，显示年份和月份信息
                        // currentYearInfo = result.length === 0 || (parseInt(currentDayMonth, 10) === 1 && parseInt(currentDayDay, 10) === 1) ? currentDayYear + '年' : '',
                        currentYearInfo = currentDayYear + '/',
                        // currentMonthInfo = result.length === 0 || parseInt(currentDayDay, 10) === 1 ? currentDayMonth + '月' : '';
                        currentMonthInfo = currentDayMonth + '/';
                    // 判断当前日期是否在当天
                    var isDefaultDate = that.compareDate(options.defaultDate, currentDate);
                    isDefaultDate = isDefaultDate === 0;
                    // 缓存数据
                    result.push({
                        name: currentYearInfo + currentMonthInfo + currentDayDay + '',
                        firstDate: [currentDayYear, currentDayMonth, currentDayDay].join(separator),
                        isDefaultDate: isDefaultDate
                    });
                    // 将当前时间向后顺延一天
                    currentDate = that.calcDate(currentDate, 1);
                }
                break;
        
            default:
                break;
        }

        // 保存 x轴数据
        options.xAxis = result;
    };

    /**
     * 绘制主体框架内容
     *
     */
    Class.prototype.render = function () {
        var that = this,
            options = that.options,
            elem = that.elem;
        
        // 切换视图
        $('.adc-ganttchart-toolbar-view-container').find('.adc-ganttchart-toolbar-view').removeClass('adc-ganttchart-toolbar-view-active');
        $($('.adc-ganttchart-toolbar-view-container').find('.adc-ganttchart-toolbar-view')[options.viewCurrent]).addClass('adc-ganttchart-toolbar-view-active');
        
        // TODO: 此处动态加载完全是重新计算和重新绘制，需要优化为动态加载 ！！！对于提升性能极其重要
        that.xAxisInitial();
        that.yAxisInitial();

        // 增加 y轴 项目列表数据
        elem.find('.' + ELEM_FIXED).find('thead').empty();
        elem.find('.' + ELEM_FIXED).find('thead').append('<tr><th><div class="' + ELEM_CELL + '">任务计划名称</div></th></tr>');
        var fixedTbodyDOM = '';
        //设置最小滑动日期

       if (options.yAxis.length ==0)
       {
           options.yAxis.push({name:'暂无任务',id:'',schedule:[],mark:[],start:''})
       }
       //console.log(JSON.stringify(options.yAxis))

        $.each(options.yAxis, function (index, item) {
            var colorIndex=(index+colorArray.length)%(colorArray.length);
            var backgroundColor=colorArray[colorIndex];

            fixedTbodyDOM +=   '<tr data-id="' + item.id + '">\
                                    <td>\
                                        <div class="' + ELEM_CELL + '">\
                                           <div class="adc-point" style="'+backgroundColor+'"></div>' + item.name + '\
                                        </div>\
                                    </td>\
                                </tr>';
        });
        elem.find('.' + ELEM_FIXED).find('tbody').empty();
        elem.find('.' + ELEM_FIXED).find('tbody').append(fixedTbodyDOM);
        // 增加 x轴 时间轴
        var mainTheadDOM = '<tr>';
        $.each(options.xAxis, function (index, item) {
            var isDefaultDate = item.isDefaultDate ? ELEM_DEFAULT_DATE : '';
            mainTheadDOM += '<th title="' + options.viewSet[options.viewCurrent].firstDay + item.firstDate + '" data-firstdate="' + item.firstDate + '" class="' + isDefaultDate + '"><div class="' + ELEM_CELL + '">' + item.name + '</div></th>';
        });
        mainTheadDOM += '</tr>';
        $(elem.find('.' + ELEM_HEADER).find('thead')[0]).empty();
        $(elem.find('.' + ELEM_HEADER).find('thead')[0]).append(mainTheadDOM);

        // 增加主体内表格内容
        var mainTbodyDOM = '',
            xLength = options.xAxis.length,
            yLength = options.yAxis.length;
        for (var i = 0; i < yLength; i++) {
            var trDom = '<tr>';
            for (var j = 0; j < xLength; j++) {
                var isDefaultDate = options.xAxis[j].isDefaultDate ? ELEM_DEFAULT_DATE : '';
                trDom += '<td class="' + isDefaultDate + '"><div class="' + ELEM_CELL + '"></div></td>';
            }
            trDom += '</tr>';

            mainTbodyDOM += trDom;
        }
        elem.find('.' + ELEM_MAIN).find('tbody').empty();
        elem.find('.' + ELEM_MAIN).find('tbody').append(mainTbodyDOM);

        // 动态添加项目列表样式：宽度，及右侧边距
        $('.' + ELEM_FIXED).find('.' + ELEM_CELL).css('width', options.projectCellWidth + 1);
        // [修复] 2019年2月24日 处理人 马思薇 甘特图左侧出现偏移导致甘特图多个左边距
        // $($('.' + ELEM_HEADER)[0]).css('margin-left', options.projectCellWidth + 2);
        // $('.' + ELEM_MAIN).css('margin-left', options.projectCellWidth + 2);

        // TODO: 此处动态加载完全是重新计算和重新绘制，需要优化为动态加载 ！！！对于提升性能极其重要
        that.generateDateMatrix();
        that.drawScheduleChart();

        // 在进度条上添加标记
        that.mark();

        // 滚动条补丁
        that.scrollPatch();
    };

    /**
     * 根据项目进度信息，计算出项目进度矩阵
     *
     */
    Class.prototype.generateDateMatrix = function () {
        var that = this,
            options = that.options,
            xAxis = options.xAxis,
            yAxis = options.yAxis,
            requestStart = options.request.start,
            requestEnd = options.request.end,
            viewInfo = options.viewSet[options.viewCurrent];
        
        // 首先初始化数据矩阵
        var tmpMatrix = [];
        for (var i = 0; i < yAxis.length; i++) {
            var tmpArray = [];
            for (var j = 0; j < xAxis.length; j++) {
                tmpArray.push([]);
            }
            tmpMatrix.push(tmpArray);
        }

        // 读取项目数据，并填写到矩阵数据中
        $.each(yAxis, function (index, item) {

            var startDate = JSON.parse(JSON.stringify(item.start)), // 防止对元数据进行修改
                schedule = JSON.parse(JSON.stringify(item.schedule)), // 防止对元数据进行修改
                yAxisStart = index,
                rowData = tmpMatrix[yAxisStart];
            
            // DONE: 项目开始时间早于当前最早时间，需要将项目开始时间调整到当前最早时间，并且调整 schedule
            var judgeDate = that.compareDate(requestStart, startDate);
            
            if (judgeDate > 0) {
                startDate = requestStart;
                $.each(schedule, function (ind, val) {
                    var tmp = schedule[ind];
                    if (judgeDate > 0) {
                        if (judgeDate >= val) {
                            judgeDate -= tmp;
                            schedule[ind] = 0;
                        } else {
                            schedule[ind] -= judgeDate;
                            judgeDate = 0;
                        }
                    }
                });
            }
            // 判断项目开始时间晚于当前时间轴的最晚时间，则跳过
            if (that.compareDate(startDate, requestEnd) > 0) return true;

            // 周视图、月视图、日视图 计算数据单独处理
            switch (viewInfo.id) {
                case 'W':
                    // 周视图
                    // 首先获取起始日期所在周的信息
                    var startWeekInfo = that.getWeekInfo(startDate),
                        xAxisStart = 0;
                    // 根据周首日和 x 轴的信息，获取对应矩阵中 x 轴开始的位置
                    $.each(xAxis, function (i, ii) {
                        if (!startWeekInfo)
                        {
                            return false;
                        }
                        if (startWeekInfo.firstDateOfWeek === ii.firstDate) {
                            xAxisStart = i;
                            return false;
                        }
                    });
                    // 获取到了矩阵中的起始位置，从该位置开始进行计算，并添加需要绘制的信息
                    var currentScheduleIndex = -1; // 标记当前项目阶段数组的索引
                    $.each(schedule, function (ind, val) {
                        if (val !== 0) {
                            currentScheduleIndex = ind;
                            return false;
                        }
                    });
                    // 如果当前时间轴内没有要绘制的进度，则跳过
                    if (currentScheduleIndex === -1) return true;

                    for (var i = xAxisStart; i < xAxis.length; i++) {
                        // 获取当前周首日
                        var currentWeekFirstDate = xAxis[i].firstDate;
                        // 计算从开始时间到周末的长度
                        var currentWeekRemainLength =  i === xAxisStart ? 7 - that.compareDate(startDate, currentWeekFirstDate) : 7;

                        // 临时变量，储存当前矩阵中单个位置的数据
                        var resultArray = [];
                        // 根据项目阶段的索引值，设置阶段天数为 0 的阶段到临时数组中
                        for (var j = 0; j < schedule.length; j++) {
                            if(schedule[j] === 0) {
                                resultArray.push(0);
                            }
                        }
                        // 计算矩阵中每个位置应有的数据
                        while (currentWeekRemainLength > 0) {
                            // 所有项目阶段都已完成，则跳出循环
                            if (currentScheduleIndex >= schedule.length) break;
                            // 当前周的剩余天数大于 0，且还有未计算的项目阶段，则进行计算
                            var currentScheduleLength = schedule[currentScheduleIndex];
                            if (currentWeekRemainLength < currentScheduleLength) {
                                // 如果当前周的剩余天数 小于 当前阶段的剩余总天数
                                // 直接将当前周的剩余天数加入数组
                                resultArray.push(Math.round(currentWeekRemainLength / 7 * 100));
                                // 当前项目阶段剩余天数为 减去当前周的剩余天数
                                schedule[currentScheduleIndex] -= currentWeekRemainLength;
                                // 当前周的剩余天数为 0，注意，这一步的顺序一定要在下面
                                currentWeekRemainLength = 0;
                            } else {
                                // 如果当前周的剩余天数 大于等于 当前阶段的剩余总天数
                                // 直接将当前阶段的剩余总天数加入数组
                                resultArray.push(Math.round(currentScheduleLength / 7 * 100));
                                // 当前项目阶段剩余天数为 0
                                schedule[currentScheduleIndex] = 0;
                                // 当前周的剩余天数为减去当前阶段的剩余总天数（小于 7）
                                currentWeekRemainLength -= currentScheduleLength;
                                // 项目阶段索引加 1
                                currentScheduleIndex++;
                            }
                        }
                        // 将矩阵中单个位置的数据添加到行内对应位置
                        rowData[i] = resultArray;
                        // 所有项目阶段都已完成，则跳出循环
                        if (currentScheduleIndex >= schedule.length) break;

                        // 矩阵中单个位置的数据计算完，开始时间增加到下周一，进行下一个位置的计算
                        startDate = that.calcDate(startDate, currentWeekRemainLength);
                    }
                    break;
                case 'M':
                    // 月视图
                    // 首先获取起始日期所在年月的信息
                    var startMonthInfo = that.dateStringFormat(startDate),
                        startMonthInfoYear = startMonthInfo.getFullYear(),
                        startMonthInfoMonth = startMonthInfo.getMonth() + 1,
                        xAxisStart = 0;
                    // 根据年月信息和 x 轴的信息，获取对应矩阵中 x 轴开始的位置
                    $.each(xAxis, function (i, ii) {
                        if (startMonthInfoYear === ii.Y && startMonthInfoMonth === ii.M) {
                            xAxisStart = i;
                            return false;
                        }
                    });
                    // 获取到了矩阵中的起始位置，从该位置开始进行计算，并添加需要绘制的信息
                    var currentScheduleIndex = -1; // 标记当前项目阶段数组的索引
                    $.each(schedule, function (ind, val) {
                        if (val !== 0) {
                            currentScheduleIndex = ind;
                            return false;
                        }
                    });
                    // 如果当前时间轴内没有要绘制的进度，则跳过
                    if (currentScheduleIndex === -1) return true;

                    for (var i = xAxisStart; i < xAxis.length; i++) {
                        var monthInfo = xAxis[i],
                            monthDayCount = monthInfo.countDays,
                            // 获取本月第一天
                            currentMonthFirstDate = monthInfo.firstDate,
                            // 计算当月还剩多少天
                            currentMonthRemainLength =  i === xAxisStart ? monthDayCount - that.compareDate(startDate, currentMonthFirstDate) : monthDayCount;
                        // 临时变量，储存当前矩阵中单个位置的数据
                        var resultArray = [];
                        // 根据项目阶段的索引值，设置阶段天数为 0 的阶段到临时数组中
                        for (var j = 0; j < schedule.length; j++) {
                            if(schedule[j] === 0) {
                                resultArray.push(0);
                            }
                        }
                        // 计算矩阵中每个位置应有的数据
                        while (currentMonthRemainLength > 0) {
                            // 所有项目阶段都已完成，则跳出循环
                            if (currentScheduleIndex >= schedule.length) break;
                            // 当月的剩余天数大于 0，且还有未计算的项目阶段，则进行计算
                            var currentScheduleLength = schedule[currentScheduleIndex];
                            if (currentMonthRemainLength < currentScheduleLength) {
                                // 如果当月的剩余天数 小于 当前阶段的剩余总天数
                                // 直接将当月的剩余天数加入数组
                                resultArray.push(Math.round(currentMonthRemainLength / monthDayCount * 100));
                                // 当前项目阶段剩余天数为 减去当月的剩余天数
                                schedule[currentScheduleIndex] -= currentMonthRemainLength;
                                // 当月的剩余天数为 0，注意，这一步的顺序一定要在下面
                                currentMonthRemainLength = 0;
                            } else {
                                // 如果当月的剩余天数 大于等于 当前阶段的剩余总天数
                                // 直接将当前阶段的剩余总天数加入数组
                                resultArray.push(Math.round(currentScheduleLength / monthDayCount * 100));
                                // 当前项目阶段剩余天数为 0
                                schedule[currentScheduleIndex] = 0;
                                // 当月的剩余天数为减去当前阶段的剩余总天数（小于 7）
                                currentMonthRemainLength -= currentScheduleLength;
                                // 项目阶段索引加 1
                                currentScheduleIndex++;
                            }
                        }
                        // 将矩阵中单个位置的数据添加到行内对应位置
                        rowData[i] = resultArray;
                        // 所有项目阶段都已完成，则跳出循环
                        if (currentScheduleIndex >= schedule.length) break;

                        // 矩阵中单个位置的数据计算完，开始时间增加到下月，进行下一个位置的计算
                        startDate = that.calcDate(startDate, monthDayCount);
                    }
                    break;
                case 'D':
                    // 日视图
                    // 首先获取起始日期
                    var startDayInfo = that.dateStringFormat(startDate),
                        xAxisStart = 0;
                    // 根据当天信息和 x 轴的信息，获取对应矩阵中 x 轴开始的位置
                    $.each(xAxis, function (i, ii) {
                        var xAxisDateInfo = that.dateStringFormat(ii.firstDate);
                        if (startDayInfo.getFullYear() === xAxisDateInfo.getFullYear()
                            && startDayInfo.getMonth() === xAxisDateInfo.getMonth()
                            && startDayInfo.getDate() === xAxisDateInfo.getDate()) {
                            xAxisStart = i;
                            return false;
                        }
                    });
                    // 获取到了矩阵中的起始位置，从该位置开始进行计算，并添加需要绘制的信息
                    var currentScheduleIndex = -1; // 标记当前项目阶段数组的索引
                    $.each(schedule, function (ind, val) {
                        if (val !== 0) {
                            currentScheduleIndex = ind;
                            return false;
                        }
                    });
                    // 如果当前时间轴内没有要绘制的进度，则跳过
                    if (currentScheduleIndex === -1) return true;

                    for (var i = xAxisStart; i < xAxis.length; i++) {
                        var dayInfo = xAxis[i];
                        // 临时变量，储存当前矩阵中单个位置的数据
                        var resultArray = [];
                        // 根据项目阶段的索引值，设置阶段天数为 0 的阶段到临时数组中
                        for (var j = 0; j < schedule.length; j++) {
                            if(schedule[j] === 0) {
                                resultArray.push(0);
                            }
                        }
                        // 所有项目阶段都已完成，则跳出循环
                        if (currentScheduleIndex >= schedule.length) break;

                        // 增加信息
                        resultArray.push(100);
                        // 将矩阵中单个位置的数据添加到行内对应位置
                        rowData[i] = resultArray;

                        schedule[currentScheduleIndex]--;
                        if (schedule[currentScheduleIndex] === 0) currentScheduleIndex++;
                        
                        // 矩阵中单个位置的数据计算完，开始时间增加到下一天，进行下一个位置的计算
                        startDate = that.calcDate(startDate, 1);
                    }
                    break;

                default:
                    break;
            }
        });
        console.log(tmpMatrix)

        // 保存数据
        options.dataMatrix = tmpMatrix;
    };

    /**
     * 绘制进度图
     *
     */
    Class.prototype.drawScheduleChart = function () {
        
        
        var that = this,
            options = that.options,
            dataMatrix = options.dataMatrix, // 数据
            cellArray = $('.' + ELEM_MAIN).find('.' + ELEM_CELL); // 主体内的所有单元格数组
        for (var i = 0; i < dataMatrix.length; i++) {
            var row = dataMatrix[i],
                start = true; // 标记当前的位置为该项目的起始
            var colorIndex=(i+colorArray.length)%(colorArray.length);
            var backgroundColor=colorArray[colorIndex];
            for (var j = 0; j < row.length; j++) {
                // 这层循环为一个项目
                var base = row.length * i, // 基数
                    index = base + j,
                    result = row[j];
                if (result.length > 0) {
                    // 如果当前矩阵单元格内数组长度不为空，则有数据
                    var htmlContent = '';
                    // 处理一个单元格内的进度
                    var totalLength = 0; // 计算单元格内总长度，以对首个单元格内的前面的空白进行处理
                    var projectStatus = ''; // 判断当前进度状态是否为：起始、终止、正在进行
                    $.each(result, function (ind, val) {
                        
                        totalLength += val; // 计算单元格内总长度

                        // 默认无样式 '' ；三角形 ‘triangle’ ；（TODO）半圆 'semicircle'

                        // 当前进度状态，起始
                        if (ind === 0 && start) {
                            projectStatus = 'adc-ganttchart-project-start-' + options.styleBarStart;
                        }

                        // 当前进度状态，正在进行
                        if (start && result[0] === 0) {
                            // projectStatus = 'adc-ganttchart-project-processing';
                        }
                        // 当前进度状态，终止
                        if ((!row[j + 1] || row[j + 1].length === 0) && ind === result.length - 1) {
                            projectStatus = 'adc-ganttchart-project-end-' + options.styleBarEnd;
                        }
                        //console.log(projectStatus)
                        if (val !== 0) {
                            //项目的甘特图是带图例的 数组中索引取图例的颜色 ，但是任务的颜色取任务侧边栏的颜色
                            //htmlContent += '<div class="adc-ganttchart-project adc-ganttchart-project-style' + ind + ' ' + projectStatus + '" style="width: ' + val + '%;"></div>';
                            var bgcolor = backgroundColor.replace('background-color: ','');
                            bgcolor = bgcolor.substring(0,bgcolor.lastIndexOf(","))+",1)";
                            if(options.data)
                            htmlContent += '<div class="adc-ganttchart-project adc-ganttchart-project-style' + colorIndex + ' ' + projectStatus + '" style="width: ' + val + '%;" onclick="layer.tips(\'任务名称:'+options.data[i].name+'<br>开始时间:'+options.data[i].start+'<br>结束时间:'+options.data[i].end+'\', this, {tips: [1, \''+bgcolor+'\'] });"></div>';
                        }
                        // 清空当前进度状态
                        projectStatus = '';
                    });
                    // 为起始位置增加补丁
                    // FIX: 如果当前时间段内只有一个阶段，需要判断当前单元格后是否有数据，才可以确定当前是否要加起始补丁
                
                    if (start && totalLength < 100 && row[j + 1].length > 0) {
                        var patch = 100 - totalLength;
                        htmlContent = '<div class="adc-ganttchart-project adc-ganttchart-project-style" style="width: ' + patch + '%;"></div>' + htmlContent;
                    }
                    // 为终止位置增加补丁
                    if ((!row[j + 1] || row[j + 1].length === 0) && totalLength < 100) {
                        var patch = 100 - totalLength;
                        htmlContent += '<div class="adc-ganttchart-project adc-ganttchart-project-style" style="width: ' + patch + '%;"></div>';
                    }
                    if (start) start = false;
                    // 将 HTML 添加到单元格
                    $(cellArray[index]).html(htmlContent);
                }
            }
        }
    };

    /**
     * 在进度条上添加标记
     *
     */
    Class.prototype.mark = function () {
        var that = this,
            options = that.options,
            xAxis = options.xAxis,
            yAxis = options.yAxis,
            elem = that.elem,
            projectRow = elem.find('.adc-ganttchart-main').find('tbody').find('tr');
        
        // TODO: 暂时只支持周试图，月视图和日视图待定
        if (options.viewCurrent !== 0) return;

        for (var y = 0; y < yAxis.length; y++) {
            // 逐个项目进行添加
            var target = yAxis[y];
            var rowElem = $(projectRow[y]).find('td');
            if (!target.mark) continue;
            $.each(target.mark, function (ind, item) {
                // 对单个项目中的每一项文本进行标记
                if (
                    // 首先去除掉在项目开始时间以前和结束时间以后的
                    that.compareDate(item[0], target.start) < 0
                    || 
                    that.compareDate(item[0], that.calcDate(target.start, target.schedule)) >= 0
                    ||
                    // 再去除掉当前渲染部分的时间以前和以后的
                    that.compareDate(item[0], options.request.start) < 0
                    || 
                    that.compareDate(item[0], options.request.end) >= 0
                ) return true;

                // 获取 x 轴坐标，即从第几天开始标记
                for (var x = 0; x < xAxis.length; x++) {
                    var remain = that.compareDate(item[0], xAxis[x].firstDate);
                    if (remain >= 0 && remain < 7) break;
                }
                console.log(remain);
                // 定义样式，与合并自定义样式
                var style = {
                    left: (remain / 7 * 100) + '%'
                };
                $.extend(style, item[2]);
                var styleStr = '';
                for (var name in style) {
                    styleStr += name;
                    styleStr += ':';
                    styleStr += style[name];
                    styleStr += ';';
                }
                // $(rowElem[x]).prepend('<span style="' + styleStr + '">' + item[1] + '</span>');
            });
        }
    };

    /**
     * 滚动条补丁
     *
     */
    Class.prototype.scrollPatch = function () {
        var that = this,
            elem = that.elem,
            scollWidth = $('.' + ELEM_MAIN).width() - $('.' + ELEM_MAIN).prop('clientWidth'), //纵向滚动条宽度
            scollHeight = $('.' + ELEM_MAIN).height() - $('.' + ELEM_MAIN).prop('clientHeight'); //横向滚动条高度
        
        // 先移除
        $(elem.find('.' + ELEM_HEADER).find('thead')[0]).find('.' + ELEM_CELL_PATCH).remove();
        if (scollWidth) {
            // 有纵向滚动条，在表头加补丁
            // var patchElem = $('<th class="' + ELEM_CELL_PATCH + '"><div></div></th>'); //补丁元素
            patchElem.find('div').css({
                height: 20,
                width: scollWidth
            });
            $(elem.find('.' + ELEM_HEADER).find('thead').find('tr')[0]).append(patchElem);
        }
        
        // 先移除
        elem.find('.' + ELEM_FIXED).find('tbody').find('.' + ELEM_CELL_PATCH).remove();
        if (scollHeight) {
            // 有横向滚动条，在 FIXED 表体列加补丁
            var patchElem = $('<tr class="' + ELEM_CELL_PATCH + '"><td><div></div></td></tr>'); //补丁元素
            patchElem.find('div').css({
                height: scollHeight,
                width: 175
            });
            elem.find('.' + ELEM_FIXED).find('tbody').append(patchElem);
        }
    };

    /**
     * 监听处理滚动事件
     *
     */
    Class.prototype.scrollPending = false;
    Class.prototype.scrollEvent = function () {
        var that = this,
            options = that.options;
        $('.' + ELEM_MAIN).on('scroll', function () {
            var othis = $(this),
                scrollLeft = othis.scrollLeft(),
                scrollTop = othis.scrollTop(),
                tableWidth = $('.' + ELEM_MAIN).width(),
                watchWidth = options.viewSet[options.viewCurrent].cellWidth * 7,
                loadMore = JSON.parse(JSON.stringify(options.loadMore));

            $('.' + ELEM_HEADER).scrollLeft(scrollLeft);
            $('.' + ELEM_FIXED).find('.' + ELEM_BODY).scrollTop(scrollTop);
            
            if (!that.scrollPending && scrollLeft < watchWidth) {
                // 向左加载
                loadMore.left++;
                that.reload({ loadMore: loadMore });
                doScrollPending();
            } else if (!that.scrollPending && options.container.width - tableWidth - scrollLeft < watchWidth) {
                // 向右加载
                loadMore.right++;
                that.reload({ loadMore: loadMore });
                doScrollPending();
            }

            function doScrollPending () {
                // TODO 如何 防止横向无限加载
                that.scrollPending = true;
                setTimeout(function () {
                    that.scrollPending = false;
                }, 700);
            }
        });
    };

    /**
     * 滚动到当前日期
     * 或者叫回到今天
     *
     * @param {*} animate 如果为 true，则增加动画效果
     */
    Class.prototype.scrollToDefaultDate = function (animate) {
        //console.log(this.options);

        var that = this,
            options = that.options,
            cellWidth = options.viewSet[options.viewCurrent].cellWidth,
            mainWidth = $('.' + ELEM_MAIN).width(),
            left = $($('.' + ELEM_HEADER)[0]).find('th.adc-ganttchart-default-date')[0].offsetLeft;
        left -= mainWidth / 2;
        left += cellWidth / 2;
        if (animate) $('.' + ELEM_MAIN).animate({ scrollLeft: left }, 300);
        else $('.' + ELEM_MAIN).scrollLeft(left);
        
        // TODO: 可以通过动画的滑动制作自动展示
        // $('.adc-ganttchart-main').animate({scrollLeft: 5537}, 5537 * 10, 'linear');
        // $('.adc-ganttchart-main').stop(); // 可以停止当前的动画效果
        // 增加新动画之前需要判断是否已有动画
        // $('.adc-ganttchart-main').is(':animated');
    };

    /**
     * 加载动画
     *
     * @param {*} flag 标志，true 为显示，false 为移除
     */
    Class.prototype.loading = function (flag) {
        var that = this,        
            browserInfo = that.browser();
        if (browserInfo.browser === 'ie' && parseInt(browserInfo.version, 10) < 10) {
            // 先判断浏览器是否小于 IE 10
            if (flag) {
                $('.' + ELEM).append(TPL_LOADING_LT_IE10);
            } else {
                $('.' + ELEM).find('.' + ELEM_LOADING_LT_IE10).remove();
            }
        } else {
            if (flag) {
                $('.' + ELEM).append(TPL_LOADING);
            } else {
                $('.' + ELEM).find('.' + ELEM_LOADING).remove();
            }
        }
    };

    // ****************
    //   以下为工具方法
    // ****************

    /**
     * 工具方法，判断浏览器类型
     *
     * @returns 浏览器类型
     */
    Class.prototype.browser = function () {
        // MAC
        //     Chrome: mozilla/5.0 (macintosh; intel mac os x 10_13_5) applewebkit/537.36 (khtml, like gecko) chrome/69.0.3497.100 safari/537.36
        //     Safari: mozilla/5.0 (macintosh; intel mac os x 10_13_5) applewebkit/605.1.15 (khtml, like gecko) version/11.1.1 safari/605.1.15
        // Windows
        //     Chrome:       mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/69.0.3497.100 safari/537.36
        //     Opera:        mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/69.0.3497.100 safari/537.36 opr/56.0.3051.43
        //     Firefox:      mozilla/5.0 (windows nt 10.0; win64; x64; rv:61.0) gecko/20100101 firefox/61.0
        //     QQ 浏览器:     mozilla/5.0 (windows nt 10.0; wow64; trident/7.0; .net4.0c; .net4.0e; core/1.63.5514.400 qqbrowser/10.1.1614.400; rv:11.0) like gecko
        //     搜狗高速浏览器: mozilla/5.0 (windows nt 10.0; wow64) applewebkit/537.36 (khtml, like gecko) chrome/58.0.3029.110 safari/537.36 se 2.x metasr 1.0
        //     360安全浏览器: mozilla/5.0 (windows nt 10.0; wow64; trident/7.0; .net4.0c; .net4.0e; rv:11.0) like gecko
        //     UC浏览器:     mozilla/5.0 (windows nt 10.0; wow64) applewebkit/537.36 (khtml, like gecko) chrome/55.0.2883.87 ubrowser/6.2.4094.1 safari/537.36
        //     Edge:        mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/64.0.3282.140 safari/537.36 edge/17.17134
        //     IE 11:       mozilla/5.0 (windows nt 10.0; wow64; trident/7.0; .net4.0c; .net4.0e; rv:11.0) like gecko

        //   - IE 10:       mozilla/5.0 (compatible; msie 10.0; windows nt 10.0; wow64; trident/7.0; .net4.0c; .net4.0e)
        //   - IE 9 :       mozilla/5.0 (compatible; msie 9.0; windows nt 10.0; wow64; trident/7.0; .net4.0c; .net4.0e)
        //   - IE 8 :       mozilla/4.0 (compatible; msie 8.0; windows nt 10.0; wow64; trident/7.0; .net4.0c; .net4.0e)

        // 有趣的故事：浏览器User-agent String里的历史故事 http://www.nowamagic.net/librarys/veda/detail/2576
        // 原文：https://webaim.org/blog/user-agent-string-history/
        // Gecko 是一款渲染引擎并且很出色，Netscape 开发
        // 苹果开发了 Safari 浏览器，并使用 KHTML 作为渲染引擎
        //     但苹果加入了许多新的特性，于是苹果从 KHTML 另辟分支称之为 WebKit
        // 谷歌开发了 Chrome 浏览器，Chrome 使用 Webkit 作为渲染引

        var browser = '';
        var version = '';

        var userAgent = navigator.userAgent.toLowerCase(); // 取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("opera") > -1 || userAgent.indexOf("opr") > -1; // 判断是否 Opera 浏览器
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("msie") > -1 && !isOpera; // 判断是否 IE 浏览器，小于 11 版本
        var isFirefox = userAgent.indexOf("firefox") > -1; // 判断是否 Firefox 浏览器
        var isSafari = userAgent.indexOf("safari") > -1; // 判断是否 Safari 浏览器
        var isChrome = userAgent.indexOf("chrome") > -1; // 判断是否 Chrome 浏览器

        if (isIE) {
            // IE 且版本小于 11
            var reIE = new RegExp("msie (\\d+\\.\\d+);");
            reIE.test(userAgent);
            browser = 'ie';
            version = parseFloat(RegExp["$1"]).toString();
        }

        // TODO: 其他浏览器类型稍后完善...

        return {
            browser: browser,
            version: version
        };
    };

    /**
     * 工具方法，根据传入的时间字符串，实例化为 Date 对象
     *
     * @param {*} dateString 时间字符串，如：'2018-01-01' '2018-1-1'
     * @param {*} separator 分隔符
     * @returns 实例化的 Date 对象
     */
    Class.prototype.dateStringFormat = function (dateString, separator) {
        var that = this,
            separator = separator || that.options.separator,
            date = dateString.split(separator),
        dateIns = new Date(parseInt(date[0], 10), parseInt(date[1], 10) - 1, parseInt(date[2], 10));

        return dateIns;
    };

    /**
     * 工具方法，根据提供的日期，获取当天是本月第几周
     *
     * @param {*} date 日期字符串
     * @param {*} separator 分隔符
     * @returns 返回一个信息对象
     */
    Class.prototype.getWeekInfo = function (date, separator) {
        if (!date)
        {
            return;
        }
        var that = this,
            separator = separator || that.options.separator,
            dateIns = that.dateStringFormat(date, separator),
            dateYear = dateIns.getFullYear(), // 年
            dateMonth = dateIns.getMonth() + 1, // 月
            dateDay = dateIns.getDate(), // 日
            dateWeek = dateIns.getDay(), // 星期，注意：0 表示周日
            firstDayOfMonth = new Date(dateYear, dateMonth - 1, 1), // 本月第一天
            firstDayOfMonth_Week = firstDayOfMonth.getDay(), // 本月第一天是星期几
            lastDayOfFirstWeek = firstDayOfMonth_Week === 0 ? 1 : 7 - firstDayOfMonth_Week + 1, // 本月第一周的最后一天

            lastDayOfMonth = new Date(dateYear, 11, 31), // 12月最后一天
            lastDayOfMonth_Week = lastDayOfMonth.getDay(), // 12月最后一天是星期几
            firstDayOfLastWeek = lastDayOfMonth_Week === 0 ? 25 : lastDayOfMonth.getDate() - lastDayOfMonth_Week + 1; // 12月最后一周的第一天
        if (firstDayOfMonth_Week === 1) {
            // 本月第一天是周一，那太好了，直接往后计算
            // if (dateMonth === 12 && dateDay >= firstDayOfLastWeek) {
            //     // 如果是最后一个月的最后一周，按下一年计算
            //     return that.getWeekInfo([dateYear + 1, 1, 1].join(separator), separator);
            // }
            // else {
                // 否则,正常计算
                var currentWeek = parseInt((dateDay - 1) / 7, 10) + 1;
            // }
        } else if (dateDay > lastDayOfFirstWeek) {
            // 本月第一天不是周一，但是当前日期不在本月“第一周”内
            if (dateMonth === 1) {
                // 如果当前日期在本年第一月，则多算一周
                var currentWeek = parseInt((dateDay - lastDayOfFirstWeek - 1) / 7, 10) + 2;   
            } 
            // else if (dateMonth === 12 && dateDay >= firstDayOfLastWeek) {
            //     // 如果是最后一个月的最后一周，按下一年计算
            //     return that.getWeekInfo([dateYear + 1, 1, 1].join(separator), separator);
            // } 
            else {
                // 否则，正常计算
                var currentWeek = parseInt((dateDay - lastDayOfFirstWeek - 1) / 7, 10) + 1;   
            }
        } else {
            // 本月第一天不是周一，而且当前日期属于上个月
            if (dateMonth === 1) {
                // 如果当前日期在本年第一月
                var currentWeek = 1;
            } else {
                // 否则，计算当天的前一天是几月的第几周
                return that.getWeekInfo(that.calcDate(date, -1), separator);
            }
        }
        // HINT: 计算本周第一天
        // Optimization: 当当前日期为周一时，直接返回当前日期
        var currentWeekFirstDate = dateWeek === 1 ? that.calcDate(date, 0) : dateWeek === 0 ? that.calcDate(date, -6) : that.calcDate(date, 1 - dateWeek);

        return {
            year: dateYear,
            month: dateMonth,
            week: currentWeek,
            firstDateOfWeek: currentWeekFirstDate
        };
    };

    /**
     * 工具方法，日期计算器
     * 根据当前日期以及计算的天数，算出应得日期
     * 即日期的加法
     *
     * @param {String} date 要计算的日期，如 "2017-01-11"
     * @param {Number|Array} day 需要加的天数，减就传负数，如 48
     * @param {String} separator 分隔符
     * @returns 返回计算后的日期，如 "2017-02-28"
     */
    Class.prototype.calcDate = function (date, day, separator) {
        var that = this,
            separator = separator || that.options.separator,
            calcDateDateIns = that.dateStringFormat(date, separator);
        // 扩展：如果 day 是一个数组，那么就将数组内的数求和
        if (day instanceof Array) {
            day = (function (arr) {
                var count = 0;
                while (arr.length > 0) {
                    count += arr.shift();
                }
                return count;
            })(JSON.parse(JSON.stringify(day)));
        }
        calcDateDateIns.setDate(calcDateDateIns.getDate() + day);

        var newDateArray = [];
        newDateArray.push(calcDateDateIns.getFullYear());
        var m = calcDateDateIns.getMonth() + 1;
        m = m.toString().length === 1 ? '0' + m.toString() : m.toString();
        newDateArray.push(m);
        var d = calcDateDateIns.getDate();
        d = d.toString().length === 1 ? '0' + d.toString() : d.toString();
        newDateArray.push(d);

        return newDateArray.join(separator);
    };

    /**
     * 工具方法，日期计算器
     * 计算出两个日期相差的天数
     * 也可以用作日期的减法
     *
     * @param {*} a 日期字符串
     * @param {*} b 日期字符串
     * @param {*} separator 分隔符
     * @returns 正数: a > b 即 a 比 b 晚几天;
     *          负数: a < b 即 a 比 b 早几天;
     *          0: a = b 即 a 和 b 是同一天;
     */
    Class.prototype.compareDate = function (a, b, separator) {
        var that = this,
            separator = separator || that.options.separator,
            dateAIns = that.dateStringFormat(a, separator),
            dateATime = dateAIns.getTime(),
            dateBIns = that.dateStringFormat(b, separator),
            dateBTime = dateBIns.getTime(),
            result = dateATime - dateBTime;
        
        return result / (24 * 60 * 60 * 1000);
    };

    /**
     * 插件的扩展方法名
     *
     * @param {*} options 配置参数
     * @returns
     */
    $.fn.ADCGanttChart = function (options) {
        // 将默认属性和用户自定义属性合并cs
        var options = $.extend({}, defaults, options);

        /**
         * this 是 jQuery 选择器选择出来的 jQuery 对象，为数组
         * reutrn 后将支持链式调用
         * 在函数内对 DOM 对象进行操作
         */
        var that = this;

        // 实例化工具类
        var ins = new Class(options, that);
        return Instance.call(ins);
    };
})(jQuery);