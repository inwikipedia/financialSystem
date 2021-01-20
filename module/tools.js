/*
 * File   : tools.js
 * Created: Wednesday November 28th 2018 9:07:32 am
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
 * Last Modified: Thursday December 6th 2018 9:04:36 am
 * Modified By  : yuchunyu97 at <yuchunyu97@gmail.com>
 * -----
 * Description: 工具类
 * -----
 * HISTORY:
 */

layui.define(function (exports) {

    var tools = {
        /**
         * Time 相对时间
         * 常用于表示几分钟前、几小时前等相对于此时此刻的时间描述。
         *
         * @param {Number|String|Date} time 【必须】 时间戳或 Date 类型，不建议使用字符串类型，因为可能存在浏览器兼容问题
         * @returns 处理后的字符串
         */
        time: function (time) {
            if (!time) return 'No Time';
            var timeType = typeof time;
            var timestamp;

            // 先获取要操作的时间戳
            if (timeType === 'number') {
                time = time.toString().length > 10 ? time : time * 1000;
                timestamp = (new Date(time)).getTime();
            } else if (timeType === 'object') {
                timestamp = time.getTime();
            } else if (timeType === 'string') {
                timestamp = (new Date(time)).getTime();
            }

            // 获取当前时间戳
            var currentTime = (new Date()).getTime();
            // 判断传入时间是否早于当前时间
            var IS_EARLY = timestamp <= currentTime;
            // 获取两个时间戳的差值
            var diff = currentTime - timestamp;
            // 如果 IS_EARLY 为 false，则差值取反
            if (!IS_EARLY) diff = -diff;

            var resStr = '';
            var dirStr = IS_EARLY ? '前' : '后';

            // 开始判断时间段
            if (diff < 1 * 1000) resStr = '刚刚';
            // 少于等于59秒
            else if (diff < 60 * 1000) resStr = parseInt(diff / 1000) + '秒' + dirStr;
            // 多于59秒，少于等于59分钟59秒
            else if (diff >= 60 * 1000 && diff < 60 * 60 * 1000) resStr = Math.floor(diff / (60 * 1000)) + '分钟' + dirStr;
            // 多于59分钟59秒，少于等于23小时59分钟59秒
            else if (diff >= 60 * 60 * 1000 && diff < 24 * 60 * 60 * 1000) resStr = Math.floor(diff / (60 * 60 * 1000)) + '小时' + dirStr;
            // 多于23小时59分钟59秒，少于等于29天59分钟59秒
            else if (diff >= 24 * 60 * 60 * 1000 && diff < 30 * 24 * 60 * 60 * 1000) resStr = Math.floor(diff / (24 * 60 * 60 * 1000)) + '天' + dirStr;
            // 多于29天59分钟59秒，少于364天23小时59分钟59秒，且传入的时间戳早于当前
            else if (diff >= 30 * 24 * 60 * 60 * 1000 && diff <= 365 * 24 * 60 * 60 * 1000 * 1000 && IS_EARLY) resStr = this.getDate(timestamp, 'MM-DD HH:mm:ss');
            // 其他
            else resStr = this.getDate(timestamp);

            return resStr;
        },
        /**
         * 如果传入的数值小于 10，即位数只有 1 位，则在前面补充 0
         *
         * @param {Number|String} num 【必须】数值
         * @returns 处理后的字符串
         */
        getHandledValue: function (num) {
            return num < 10 ? '0' + num : num;
        },
        /**
         * 格式化时间戳
         *
         * @param {Number} timeStamp 【必填】传入的时间戳
         * @param {String} format 要返回的时间字符串的格式类型，对应值如下：
         *          YYYY    年  1997
         *          YY      年  97
         *          MM      月  03
         *          DD      日  01
         *          HH      时  06
         *          mm      分  20
         *          ss      秒  00
         * 
         *          默认格式为：YYYY-MM-DD HH:mm:ss
         * 
         *          为了简化操作，函数提供了一些常用格式的简写
         *          T_date || T_1      YYYY-MM-DD
         *          T_time || T_2      HH:mm:ss
         *          T_datetime || T_0  YYYY-MM-DD HH:mm:ss
         * @returns 格式化后的字符串
         */
        getDate: function (timeStamp, formatter) {
            formatter = formatter || 'YYYY-MM-DD HH:mm:ss';
            // 简易模板
            var template = {
                date: 'YYYY-MM-DD',
                1: 'YYYY-MM-DD',
                time: 'HH:mm:ss',
                2: 'HH:mm:ss',
                datetime: 'YYYY-MM-DD HH:mm:ss',
                0: 'YYYY-MM-DD HH:mm:ss'
            };
            if (formatter.indexOf('T_') > -1) formatter = template[formatter.split('_')[1]];

            var d = new Date(timeStamp);
            var year = d.getFullYear().toString();
            var month = this.getHandledValue(d.getMonth() + 1).toString();
            var date = this.getHandledValue(d.getDate()).toString();
            var hours = this.getHandledValue(d.getHours()).toString();
            var minutes = this.getHandledValue(d.getMinutes()).toString();
            var second = this.getHandledValue(d.getSeconds()).toString();
            var resStr = formatter
                .replace('YYYY', year)
                .replace('YY', year.substr(2))
                .replace('MM', month)
                .replace('DD', date)
                .replace('HH', hours)
                .replace('mm', minutes)
                .replace('ss', second);
            return resStr;
        }

    };
    exports('tools', tools);
});