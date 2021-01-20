/*
 * File   : ADCFormDesignHelper.js
 * Created: Wednesday October 31st 2018 9:14:27 am
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
 * Last Modified: Thursday December 6th 2018 9:56:30 am
 * Modified By  : yuchunyu97 at <yuchunyu97@gmail.com>
 * -----
 * Description:
 * -----
 * HISTORY:
 */
var ADCFormDesignHelper = {
    //转义解析HTML编码
    htmlDecodeByRegExp:function (str){
        var s = "";
        if(str.length == 0||typeof str === 'number') return str;
        s = str.replace(/&amp;/g,"&");
        s = s.replace(/&lt;/g,"<");
        s = s.replace(/&gt;/g,">");
        s = s.replace(/&nbsp;/g," ");
        s = s.replace(/&#39;/g,"\'");
        s = s.replace(/&quot;/g,"\"");
        return s;
    },
    /**
     * 预览表单
     *
     * @param {*} editor UE实例化对象
     */
    Preview: function (editor) {
        // 如果没有 layer 模块，则返回错误
        if (!layer) return alert('Layer 加载失败');
        // 获取编辑器内的内容
        var UEContent = editor.getContent();
        if (!UEContent) return layer.msg('无可预览的内容', {
            icon: 0
        });
        try {
            layer.open({
                type: 1,
                title: 'ADC表单预览',
                id: 'ADCFormDesignHelper-Preview',
                content: ADCFormDesignHelper.formatHtml(UEContent),
                area: ['80%', '90%'],
                success: function () {
                    layui.form.render();
                }
            });
        } catch (error) {
            console.error(error);
            layui.layer.msg('ADCFormDesign 预览异常，请在控制台查看错误', {
                icon: 5
            });
            try {
                layui.layer.close($('#ADCFormDesignHelper-Preview').parent().attr('id').split('layer')[1]);
            } catch (e) {}
        }
    },
    View: function (data) {
        if (!data.contentHtml) {
            return layer.msg('表单信息为空，无法查看！', {
                icon: 5
            });
        }
        try {
            layer.open({
                type: 1,
                title: data.formName + ' [' + data.formCode + ']',
                id: 'ADCFormDesignHelper-View',
                content: ADCFormDesignHelper.formatHtml(data.contentHtml),
                area: ['80%', '90%'],
                success: function () {
                    layui.form.render();
                }
            });
        } catch (error) {
            console.error(error);
            layui.layer.msg('查看表单内容出错，请在控制台查看错误信息', {
                icon: 5
            });
            try {
                layui.layer.close($('#ADCFormDesignHelper-View').parent().attr('id').split('layer')[1]);
            } catch (e) {}
        }
    },
    formatHtml: function (content) {
        // 去除表格内单元格设置 多宽度
        // content = content.replace(/\swidth=\"(.*?)\"/ig, '');
        // 去除一些编辑时的占位符
        // content = content.replace(/\{\|\-/g, "").replace(/\-\|\}/g, "").replace(/&nbsp;(.*?)&nbsp;/g, "");
        content = content.replace(/assets/g, "assetsInfo");
        content = content.replace(/\/api\//g,"/ADC_info/api/");
        content = content.replace(/\/ADC_info\/ADC_info\//g,"/ADC_info/");
        content = content.replace(/\/上传失败！上传文件大小不能超过 10M\//g,"/上传失败！上传文件大小不能超过 50M/");
        content = content.replace(/\{\|\-/g, "").replace(/\-\|\}/g, "");
        content = content.replace(/<table(.*?)>/ig, function () {
            return '<table' + arguments[1] + ' style="margin: 0 auto;">'
        });
        content += '<button lay-submit style="display: none;" id="adcformdesign-submit" lay-filter="adcformdesign"></button>';
        // 加上外部容器
        content = '<div class="layui-table layui-form adc-form-design-helper" style="padding: 20px;box-sizing: border-box;" id="adcformdesign-table-td">' + content + '</div>';

        return content;
    },
    /**
     * 表格扩展工具方法
     *
     * @param {*} content 需要格式化的 DOM 字符串
     *
     * @return 格式化好的字符串
     */
    formatExpandHtml: function (content) {
        // 默认模板行是隐藏掉的，所以要先将隐藏属性去掉
        content = content.replace('display: none;', '');
        // 将 DOM 字符串解析为 jQuery 对象
        var dom = $(content),
            tds = dom.find('td');
        // 让本行的 position 为 relative
        dom.css('position', 'relative');

        // 添加删除行按钮
        var iDOM = $('<i></i>');
        iDOM.attr('class', 'layui-icon layui-icon-delete');
        iDOM.css({
            "position": "absolute",
            "bottom": "0",
            "right": "0",
            "cursor": "pointer",
            "color": "#FF5722"
        });
        iDOM.on("click", function () {
            $(this).parent().parent().remove();
        });
        // 添加上下移动行按钮
        var iUpDOM = $('<i></i>');
        iUpDOM.attr('class', 'layui-icon layui-icon-up');
        iUpDOM.css({
            "position": "absolute",
            "top": "4px",
            "left": "-18px",
            "cursor": "pointer",
            "color": "#999",
            "width": "16px",
            "height": "16px",
            "line-height": "16px",
            "font-size": "12px",
            "background": "#f2f2f2",
            "border-radius": "16px",
            "text-align": "center"
        });
        iUpDOM.on("click", function () {
            var trDOM = $(this).parent().parent(),
                tbodyDom = trDOM.parent(),
                totalRow = tbodyDom.children().length - 3,
                currentRow = trDOM[0].rowIndex - 1;
            if (currentRow === 1 || totalRow <= 1) {
                return;
            } else {
                $(tbodyDom.children()[currentRow - 1 + 2]).before(trDOM);
            }
        });
        var iDownDOM = $('<i></i>');
        iDownDOM.attr('class', 'layui-icon layui-icon-down');
        iDownDOM.css({
            "position": "absolute",
            "bottom": "4px",
            "left": "-18px",
            "cursor": "pointer",
            "color": "#999",
            "width": "16px",
            "height": "16px",
            "line-height": "16px",
            "font-size": "12px",
            "background": "#f2f2f2",
            "border-radius": "16px",
            "text-align": "center"
        });
        iDownDOM.on("click", function () {
            var trDOM = $(this).parent().parent(),
                tbodyDom = trDOM.parent(),
                totalRow = tbodyDom.children().length - 3,
                currentRow = trDOM[0].rowIndex - 1;
            if (currentRow === totalRow || totalRow <= 1) {
                return;
            } else {
                $(tbodyDom.children()[currentRow + 1 + 2]).after(trDOM);
            }
        });

        $(tds[tds.length - 1]).append(iDOM);
        $(tds[0]).append(iUpDOM);
        $(tds[0]).append(iDownDOM);

        // TODO: 将 name 值变成唯一的
        // [√] input
        // [√] textarea
        // [√] select
        // [√] radio
        // [√] checkbox
        // [] file
        // HINT: 可扩展表格内的控件不可加类型判断，权限为可编辑
        var randomStr = randomString(8);
        var DOMsArray = [];
        DOMsArray = DOMsArray.concat(
            dom.find('[adcform="adc_form_input"]'),
            dom.find('[adcform="adc_form_textarea"]'),
            dom.find('[adcform="adc_form_select"]'),
            dom.find('[adcform="adc_form_radio"]').find('input'),
            dom.find('[adcform="adc_form_checkbox"]').find('input')
        );
        for (var i = 0; i < DOMsArray.length; i++) {
            var item = DOMsArray[i];
            for (var j = 0; j < item.length; j++) {
                item[j].name = item[j].name + '_expand_' + randomStr;
            }
        }

        return dom;

        function randomString(len) {
            len = len || 32;
            var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
            var maxPos = $chars.length;
            var pwd = '';
            for (randomi = 0; randomi < len; randomi++) {
                pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return pwd;
        }
    },
    // 在待办事项、已办事项、已发事项中动态添加已有数据中可扩展表单数据的函数
    expandHtmlViewer: function (formId, formData) {
        var el = $(formId),
            // 保存扩展表格内的数据（就是动弹增加的数据）
            dataArray = [],
            dataObj = {},
            // 保存扩展表格的DOM对象，因为可能会有多个可扩展表格
            expandFormArray = [],
            // 保存相应可扩展表格对应的单行模板
            expandFormTemplateArray = [],
            expandFormDataArray = [];
        // 将数据中可扩展表格相关的数据提取出来
        for (name in formData) {
            // alert(name);
            if (name.indexOf('expand') > -1) {
                dataArray.push({
                    name: name,
                    value: formData[name]
                });
                var randomStr = name.split('_expand_');
                if (!(randomStr[1] in dataObj)) {
                    dataObj[randomStr[1]] = randomStr[0];
                }
            }
        }
        // 如果有可扩展表格及数据，则获取对应的DOM对象
        if (dataArray.length > 0) {
            expandFormArray = el.find('[adcform="adc_form_expand"]');
            for (var i = 0; i < expandFormArray.length; i++) {
                var tmp = $($(expandFormArray[i]).find('tr')[1].outerHTML);
                tmp.css('display', 'table-row');
                expandFormTemplateArray.push(tmp);
                expandFormDataArray.push([]);
            }
        } else return;
        // 将数据按照可扩展表单分组
        for (var name in dataObj) {
            var inputName = dataObj[name];
            for (var i = 0; i < expandFormTemplateArray.length; i++) {
                if (expandFormTemplateArray[i].find('[name="' + inputName + '"]').length) expandFormDataArray[i].push(name);
            }
        }
        // 最终处理
        for (var i = 0; i < expandFormDataArray.length; i++) {
            var tmp = expandFormDataArray[i];
            if (tmp.length > 0) {
                for (var j = 0; j < tmp.length; j++) {
                    // 创建副本
                    var copy = $(expandFormTemplateArray[i][0].outerHTML);
                    // TODO: 设置 name 值
                    // [√] input
                    // [√] textarea
                    // [√] select
                    // [√] radio
                    // [√] checkbox
                    // [] file

                    var randomStr = tmp[j];
                    var DOMsArray = [];
                    DOMsArray = DOMsArray.concat(
                        copy.find('[adcform="adc_form_input"]'),
                        copy.find('[adcform="adc_form_textarea"]'),
                        copy.find('[adcform="adc_form_select"]'),
                        copy.find('[adcform="adc_form_radio"]').find('input'),
                        copy.find('[adcform="adc_form_checkbox"]').find('input')
                    );
                    for (var k = 0; k < DOMsArray.length; k++) {
                        var item = DOMsArray[k];
                        for (var l = 0; l < item.length; l++) {
                            item[l].name = item[l].name + '_expand_' + randomStr;
                            item[l].disabled = "disabled";
                        }
                    }
                    // 添加到表单中
                    $(expandFormArray[i]).append(copy);
                }
            }
        }
    },
    // 在待办事项、已办事项、已发事项中动态添加已有数据中列表控件数据的函数
    listctrldataview: function (formId, formData, priv) {
        var el = $(formId),
            //存储传入的name和value
            dataArray = [],
            //存储单元格中的控件类型
            Typename = {},
            //存储新增行的数据
            arrv = new Array(),
            arrn = new Array(),
            //用来将新增行的数据插入进去
            num2 = 0,
            //存储DOM空间，可能有两个表格
            listctrlFormArray = [],
            //存储字符串
            newcode = "",
            //存储有日期选择控件的列号
            account = "",
            //存储有新增行的列表控件的dom空间
            listctrlFormTemplateArray = [],
            tableData = {},
            tableid = {},
            tdStyle = [];
        for (name in formData) {
            if (name.indexOf('listctrl') > -1) {
                //从返回的数据中拿出name和value， push进dataArray中
                dataArray.push({
                    name: name,
                    value: formData[name]
                });
                //将name以'_'为分界，拆分成数组，并放入randomStr中，只会存储最后一个数据
                var randomStr = name.split('_');
                //把第一行的类型存到Typename中,把新增行的name存到Typename中
                if (randomStr[5] != undefined) {
                    Typename[name] = randomStr[0];
                }
                //如果拆分的数组第五个元素不在tableid中，且第五个元素不是undefined，将其作为name设置到tableid中
                if (!(randomStr[5] in tableid) && randomStr[5] != undefined){
                    tableid[randomStr[5]] = randomStr[1];
                }
            }
        }
        // //单元格的个数
        // var num1 = Object.keys(Typename).length;
        if (dataArray.length > 0) {
            //找到所有的列表控件
            listctrlFormArray = el.find('[adcform="adc_form_listctrl"]');
            //遍历tableid中的属性名
            for(var n in tableid){
                //遍历列表控件
                for(var i = 0;i < listctrlFormArray.length;i++){
                    //如果找到列表控件的tableid属性与 n 相同，则把这个列表控件的dom空间push到数组中
                    if(listctrlFormArray[i].getAttribute('tableid') == n){
                        var tmp = $(listctrlFormArray[i]);
                        listctrlFormTemplateArray.push(tmp);
                    }
                }
            }
        }
        //遍历存储dom空间的数组
        for (var i = 0; i < listctrlFormTemplateArray.length; i++) {
            //原有表格的行数
            var initlength = listctrlFormTemplateArray[i][0].children[0].rows.length;
            //找到原有表格的节点
            //判断合计拥有的行数
            var sumNum=0;
            for (var j = 0; j <listctrlFormTemplateArray[i][0].children[0].rows.length ; j++) {
                if (listctrlFormTemplateArray[i][0].children[0].rows[j].getAttribute('name') == 'sum') {
                    sumNum++
                }
            }
            //当没有合计时处理回显
            if(sumNum==0){
                sumNum=1
            }
            var tr2 = listctrlFormTemplateArray[i][0].children[0].rows[initlength - sumNum];
            //新增行数
            var rowlength = 0;
            //遍历Typename的属性名
            for(var m in Typename){
                //拆分成数组
                var TypenameStr = m.split('_');
                // console.log(TypenameStr,44444);
                //找到属性名中有对应新增表格的dom空间，将对应的类型名、列数存入tableData；
                if(TypenameStr[5] == listctrlFormTemplateArray[i][0].getAttribute('tableid')){
                    tableData[TypenameStr[2]] = TypenameStr[0];
                    //存储新增行的行数
                    rowlength = TypenameStr[1];
                    console.log(rowlength,6);
                }
                //遍历dataArray，如果存在第n个的name与m相同，则把name与value分别push进两个数组，用来将name和value回填进表格中
                for (n = 0; n < dataArray.length; n++) {
                    if(dataArray[n].name == m){
                        arrv.push(dataArray[n].value);
                        arrn.push(dataArray[n].name);
                    }
                }
            }
            if (tr2.getAttribute('name') == 'sum') {
                // rowlength--;
                for(var t = 0;t < tr2.children.length;t++){
                    tdStyle.push(tr2.children[t].getAttribute('style'));
                }
            }
            else if(tr2.getAttribute('name') != 'sum'){
                for(var t = 0;t < tr2.children.length;t++){
                    tdStyle.push(tr2.children[t].getAttribute('style'));
                }
            }
            // 循环遍历新增行的行数次
            for (j = 0; j < rowlength - 1; j++) {
                //每次渲染后，表格行数
                var linelength = listctrlFormTemplateArray[i][0].children[0].rows.length;
                //第二行节点
                var tr1 = listctrlFormTemplateArray[i][0].children[0].rows[1];
                //倒数第二行节点，如果有sum则每次都在这个节点后插入
                var tr3 = listctrlFormTemplateArray[i][0].children[0].rows[linelength - (1+sumNum)];
                newcode = "";
                newcode += "<tr>";
                for (var name in tableData) {
                    if (tableData[name] == 'input') {
                        newcode += "<td name='input' style='"+ tdStyle[name] +"'><input name='" + arrn[num2] + "' value = '" + arrv[num2] + "'class = 'layui-input'" +"></td>";
                    } else if (tableData[name] == 'textarea') {
                        newcode += "<td name='textarea' style='"+ tdStyle[name] +"'><textarea name='" + arrn[num2] + "'value ='" + arrv[num2] + "'class='layui-textarea" +"'></textarea></td>";
                    } else if (tableData[name] == 'inputuserselect') {
                        newcode += "<td name='inputuserselect' style='"+ tdStyle[name] +"'>" + "<input name = '" + arrn[num2] + "'value ='" + arrv[num2] + "' onclick='javascript:userselect(this)' class='layui-input' readonly='readonly' style='position: relative;'>" + "<em class='layui-icon layui-icon-username' style='position: absolute; top: 50%; right: 20px; font-size: 20px; width: 20px; height: 20px; margin-top: -10px;'></em></td>";
                    } else if (tableData[name] == 'inputorgselect') {
                        newcode += "<td name='inputorgselect' style='"+ tdStyle[name] +"'>" + "<input name = '" + arrn[num2] + "'value ='" + arrv[num2] + "' onclick='javascript:orgselect(this)' class='layui-input' readonly='readonly' style='position: relative;'>" + "<em class='layui-icon layui-icon-website' style='position: absolute; top: 50%; right: 20px; font-size: 20px; width: 20px; height: 20px; margin-top: -10px;'></em></td>";
                    } else if (tableData[name] == 'select') {
                            var td1 = tr1.cells[name];
                            var oparr = td1.children[0].innerHTML.toString();
                            newcode += "<td name='select' style='"+ tdStyle[name] +"'>" + "<select name = '" + arrn[num2] + "'value ='" + arrv[num2] + "'>" + oparr + "</select>" + "</td>";
                    } else if (tableData[name] == 'datetime') {
                        newcode += "<td name='datetime' style='"+ tdStyle[name] +"'>" + "<input name = '" + arrn[num2] + "'value ='" + arrv[num2] + "'id = 'date_" + name + "_" +(j + 2) + "'class='layui-input" +"'>" + "</td>";
                        account += name + '`';
                    } else if(tableData[name] == 'sum'){
                        newcode += "<td name = '" + name + "' style='"+ tdStyle[name] +"'>" + "<input name = '" + arrn[num2] + "'value ='" + arrv[num2] + "' onblur='javascript:numbersum(this)'  class = 'layui-input' onkeyup = 'replaceit(this)'>" + "</td>";
                    } else{
                        newcode +='<td name="int" style="'+ tdStyle[name] +'"><input class="layui-input" name="'+ arrn[num2] +'" value="'+ arrv[num2] +'" title="'+ arrv[num2] +'" onkeyup="replaceit(this)" onblur="replaceit(this)" maxlength="12"/></td>'
                    }
                    num2++;
                }
                newcode += "</tr>";

                //添加删除按钮
                if (tr2.getAttribute('name') == 'sum') {
                    $(tr3).after(newcode);
                    for (var name in priv) {
                        var type = name.split('_')[0];
                        if (type == 'table' && priv[name] == 2) {
                            $(tr3).next().append("<i class='layui-icon layui-icon-delete' style='font-size: 30px; margin-right:-50px;cursor:pointer' href='javascript:;' onclick='deltableNum(this),removeLine(this)'></i>")
                            break;
                        }
                    }
                } else {
                    $(listctrlFormTemplateArray[i][0]).append(newcode);
                    for (var name in priv) {
                        var type = name.split('_')[0];
                        if (type == 'table' && priv[name] == 2) {
                            $(listctrlFormTemplateArray[i][0]).children('tbody').children('tr')[j+2].innerHTML=newcode+"<i class='layui-icon layui-icon-delete' style='font-size: 30px; margin-right:-50px;cursor:pointer' href='javascript:;' onclick='deltableNum(this),removeLine(this)'></i>";
                        }
                    }
                }

                if (account != "") {
                    //删掉最后一个 ` 符号
                    account = account.substr(0, account.length - 1);
                    //将字符串以 ` 符号为分界分成数组
                    account = account.split("`");
                    //使用数组内存储的数据找到对应的id
                    for (k = 0; k < account.length; k++) {
                        layui.laydate.render({
                            elem: "#date_" + account[k] + "_" +(j + 2),
                            range:$("#sicStartTable").length!=0?true:false
                        });
                    }
                    account = "";
                }
            }

            tableData = {};
            TypenameStr = [];
            rowlength = 0;
            tdStyle = [];
        }
        //根据权限回显列表控件‘+’按钮
        for(var i=0; i<$('table[adcform="adc_form_listctrl"]').length; i++){
            $('table[adcform="adc_form_listctrl"]').eq(i).find('tr').first().children().last().find('span').hide();
        }
        for (var name in priv) {
            var type = name.split('_')[0];
            if (type == 'table' && priv[name] == 2) {
                if($('table[adcform="adc_form_listctrl"]')[0].rows.length>2&&($("#sicStartTable").length!=0||$("#sicTable").length!=0)){
                    $('table[adcform="adc_form_listctrl"]').css('width','calc(100% + 2px)');
                }
                for(var i=0; i<$('table[adcform="adc_form_listctrl"]').length; i++){
                    $('table[adcform="adc_form_listctrl"]').eq(i).find('tr').first().children().last().find('span').show();
                }
                break;
            }
        }
    },
    // 在待办事项、已办事项、已发事项中渲染
    milepostdataview: function (formId, formData) {
        var el = $(formId),
            //存储
            dataLength = 0,
            dataArr=[];
        for (name in formData) {
            if (name.indexOf('milepostList') > -1) {
                //从返回的数据中拿出name和value， push进dataArray中
                dataLength=formData[name];
            }else if(name.indexOf('milepostArr') > -1){
                dataArr=formData[name];
            }
        }
        var html='';
        for (var i = 0; i <dataArr.length ; i++) {
            var temp=dataArr[i];
                var contHtml='';
                for (var j = 0; j <temp.outcomes.length ; j++) {
                    if(j!=0){
                        contHtml+='<div style="margin-bottom: 5px">' +
                            '<input maxlength="50" lay-verify="required" name="'+temp.outcomes[j].name+'" type="text" title="预计成果物" value="" adcform="adc_form_input" class="layui-input" placeholder="预计成果物" adcform_listctrlmark="" adcform_hide="0" adcform_fontsize="14" adcform_align="left" adcform_height="30" adcform_validate="adcformvalidate_none" style="box-sizing: border-box; font-size: 14px; text-align: left; height: 30px;width: calc(100% - 20px );"/>' +
                            '<i class="clickImg layui-icon layui-icon-delete" style="font-size: 20px; margin-right:-50px;cursor:pointer" href="javascript:;" onclick="delOutcomes(this)"></i></div>';
                    }

                }
                html+='<div class="milepost_right_box" >' +
                    '<div class="milepost_row">' +
                    '<lable class="milepost_label">\n' +
                    '<input style="display:none" title="里程碑名称：" type="checkbox" lay-skin="primary"/>\n' +
                    '</lable>' +
                    '<div class="milepost_text">' +
                    '<input lay-verify="required" maxlength="20" name="'+temp.name.name+'" type="text" title="里程碑名称" value="" adcform="adc_form_input" class="layui-input" placeholder="里程碑名称" adcform_listctrlmark="" adcform_hide="0" adcform_fontsize="14" adcform_align="left" adcform_height="30" adcform_validate="adcformvalidate_none" style="box-sizing: border-box; font-size: 14px; text-align: left; height: 30px;">' +
                    '<div src="/assetsInfo/libs/addtable/addtable.js" cdata_tag="script" _ue_custom_node_="true">' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="milepost_row">' +
                    '<lable class="milepost_label">负责人：</lable>' +
                    '<div class="milepost_text">' +
                    '<select lay-verify="required"  name="'+temp.user.name+'" type="select" lay-filter="'+temp.user.name+'" title="负责人" adcform="adc_form_select" adcform_height="30" adcform_width="190" style="height: 30px; width: 190px;">' +
                    '<option value="请选择">请选择</option></select>' +
                    '</div></div>' +
                    '<div class="milepost_row_textarear">' +
                    '<div class="milepost_textarear_label">' +
                    '<lable class="milepost_label">里程碑目标：</lable>' +
                    '</div>' +
                    '<div class="milepost_text">' +
                    '<textarea maxlength="120" name="'+temp.target.name+'" title="里程碑目标" value="" adcform="adc_form_textarea" class="layui-textarea" placeholder="里程碑目标" adcform_rich="0" adcform_fontsize="14" adcform_height="80" style="box-sizing: border-box; font-size: 14px; height: 80px;">' +
                    '</textarea>' +
                    '</div></div>' +
                    '<div class="milepost_row">' +
                    '<lable class="milepost_label">预计起止日期：</lable>' +
                    '<div class="milepost_text">' +
                    '<span style="position: relative"><input lay-verify="required" name="'+temp.date.name+'" type="text" title="预计起止日期" placeholder="预计起止日期" adcform="adc_form_datetime" adcform_theme="#37ABFF" adcform_type="_range" class="'+temp.date.name+' layui-input" adcform_hide="0" adcform_auto="1" adcform_fontsize="14" adcform_align="left" adcform_width="220" adcform_height="30" style="box-sizing: border-box; font-size: 14px; text-align: left; width: 220px; height: 30px;background: rgba(243,247,255,1);">' +
                    '<img src="/assetsInfo/images/riliform.png" style="position: absolute; top: 50%; right: 5px; font-size: 20px; width: 20px; height: 20px; margin-top: -10px;"/><script class="'+temp.date.name+'_script">\
                    (function(){var param = {\
                        elem: ".'+temp.date.name+'"\
                    };\
                    var type = document.querySelector(".'+temp.date.name+'").getAttribute("adcform_type").split("_");\
                    var theme = document.querySelector(".'+temp.date.name+'").getAttribute("adcform_theme");\
                    var auto = document.querySelector(".'+temp.date.name+'").getAttribute("adcform_auto");\
                    if(type[0]!==""){param.type=type[0];}\
                    if(type[1]!==""){param.range=true;}\
                    if(theme){param.theme=theme;}\
                    if(auto == "1" && type[1]==""){param.value = new Date();}\
                    layui.laydate.render(param);})();\
                <\/script></span>'+
                    '</div></div>' +
                    '<div class="milepost_row_textarear"><div class="milepost_textarear_label"> <lable class="milepost_label">预计成果物：</lable> </div><div class="milepost_text">' +
                    '<div style="margin-bottom: 5px">' +
                    '<input maxlength="50" lay-verify="required" name="'+temp.outcomes[0].name+'" type="text" title="预计成果物" value="" adcform="adc_form_input" class="layui-input" placeholder="预计成果物" adcform_listctrlmark="" adcform_hide="0" adcform_fontsize="14" adcform_align="left" adcform_height="30" adcform_validate="adcformvalidate_none" style="box-sizing: border-box; font-size: 14px; text-align: left; height: 30px;width: calc(100% - 20px );"/>' +
                    '<img class="clickImg" onclick="addOutcomes(this)" src="/assetsInfo/images/Group-.png" style="cursor: pointer;"/></div>' +
                    contHtml +
                    '</div></div></div>';
        }
        $("#projectTable").empty().append(html);
        for (var i = 0; i <$('#projectTable select').length ; i++) {
            layui.form.on('select('+$('#projectTable select').eq(i).attr('name')+')',function (data) {
                data.elem.dataset.name=data.elem[data.elem.selectedIndex].value;
                data.elem.dataset.id=data.elem[data.elem.selectedIndex].id;
                layui.form.render('select');
            });
        }
        // console.log(dataLength,54444444,html);
    },
    // 在待办事项、已办事项、已发事项中渲染
    proMilepostdataview: function (formId, formData) {
        var el = $(formId),
            //存储
            dataArr=[];
        for (name in formData) {
            if(name.indexOf('proMilepostArr') > -1){
                dataArr=formData[name];
            }
        }
        var html='';
        for (var i = 0; i <dataArr.length ; i++) {
            var temp=dataArr[i];
            var newContHtml='';
            var oldContHtml='';
            for (var j = 0; j <temp.newOutcomes.length ; j++) {
                if(j!=0){
                    newContHtml+='<div style="margin-bottom: 5px">' +
                        '<input maxlength="50" lay-verify="proMilepost_required" name="'+temp.newOutcomes[j].name+'" type="text" title="新预计成果物" value="" adcform="adc_form_input" class="layui-input" placeholder="新预计成果物" adcform_listctrlmark="" adcform_hide="0" adcform_fontsize="14" adcform_align="left" adcform_height="30" adcform_validate="adcformvalidate_none" style="box-sizing: border-box; font-size: 14px; text-align: left; height: 30px;width: calc(100% - 20px );">' +
                        '<i class="clickImg layui-icon layui-icon-delete" style="font-size: 20px; margin-right:-50px;cursor:pointer" href="javascript:;" onclick="delOutcomes(this)"></i></div>';
                }

            }
            for (var x = 0; x <temp.oldOutcomes.length ; x++) {
                if(x!=0){
                    oldContHtml+='<div style="margin-bottom: 5px">' +
                        '<input disabled name="'+temp.oldOutcomes[x].name+'" type="text" title="原预计成果物" value="" adcform="adc_form_input" class="layui-input" placeholder="原预计成果物" adcform_listctrlmark="" adcform_hide="0" adcform_fontsize="14" adcform_align="left" adcform_height="30" adcform_validate="adcformvalidate_none" style="box-sizing: border-box; font-size: 14px; text-align: left; height: 30px;background-color: rgba(248,248,248,1);">' +
                        '</div>';
                }

            }
            html+='<div class="milepost_project_box">' +
                '<div class="project_row">' +
                '<lable class="project_label"><input type="checkbox" title="原里程碑名称：" lay-skin="primary"  style="\n' +
                ' display: none;\n' +
                '"></lable>' +
                '<div class="project_input">' +
                '<select  name="'+temp.oldName.name+'" type="select" lay-filter="'+temp.oldName.name+'" title="原里程碑名称" adcform="adc_form_select" adcform_height="30" adcform_width="190" style="height: 30px; width: 190px;">' +
                '<option value="请选择">请选择</option></select></div></div>' +
                '<div class="project_row"><label class="project_label">原负责人:</label>' +
                '<div class="project_input"><span class="layui-input-inline" style="position: relative;">' +
                '<input disabled name="'+temp.oldUser.name+'" type="text" title="原负责人" adcform="adc_form_user_select" class="layui-input" placeholder="原负责人" readonly="readonly" onclick="" adcform_default="1" adcform_height="30" adcform_fontsize="14" style="box-sizing: border-box; height: 30px; font-size: 14px; cursor: pointer; padding-right: 30px;background-color: rgba(248,248,248,1);"><img src="/assetsInfo/images/bumenyuangongguanli.png" style="position: absolute; top: 50%; right: 5px; font-size: 20px; width: 20px; height: 20px; margin-top: -10px;" _src="/assetsInfo/images/bumenyuangongguanli.png"></span>' +
                '</div></div>' +
                '<div class="project_row">' +
                '<div class="project_textarea"><label class="project_label">原里程碑目标:</label>' +
                '</div><div class="project_input">' +
                '<textarea disabled name="'+temp.oldTarget.name+'" title="原里程碑目标" value="" adcform="adc_form_textarea" class="layui-textarea" placeholder="原里程碑目标" adcform_rich="0" adcform_fontsize="14" adcform_height="80" style="box-sizing: border-box; font-size: 14px; height: 80px;background-color: rgba(248,248,248,1);"></textarea></div></div>' +
                '<div class="project_row"><label class="project_label">原预计起止时间:</label>' +
                '<div class="project_input">' +
                '<div class="project_input_date">' +
                '<span style="position: relative;">' +
                '<input disabled name="'+temp.oldDate.startName+'" type="text" title="原预计开始时间" placeholder="原预计开始时间" adcform="adc_form_datetime" adcform_theme="#37ABFF" adcform_type="_" class="'+temp.oldDate.startName+' layui-input" adcform_hide="0" adcform_auto="1" adcform_fontsize="14" adcform_align="left" adcform_height="30" style="box-sizing: border-box; font-size: 14px; text-align: left; height: 30px;background-color: rgba(248,248,248,1);"><img src="/assetsInfo/images/riliform.png" style="position: absolute; top: 50%; right: 5px; font-size: 20px; width: 20px; height: 20px; margin-top: -10px;" _src="/assetsInfo/images/riliform.png">' +
            '</span>' +
                '</div>' +
                '<span class="project_input_span">至</span>' +
                '<div class="project_input_date">' +
                '<span style="position: relative;">' +
                '<input disabled name="'+temp.oldDate.endName+'" type="text" title="原预计结束时间" placeholder="原预计结束时间" adcform="adc_form_datetime" adcform_theme="#37ABFF" adcform_type="_" class="'+temp.oldDate.endName+' layui-input" adcform_hide="0" adcform_auto="1" adcform_fontsize="14" adcform_align="left" adcform_height="30" style="box-sizing: border-box; font-size: 14px; text-align: left; height: 30px;background-color: rgba(248,248,248,1);">' +
                '<img src="/assetsInfo/images/riliform.png" style="position: absolute; top: 50%; right: 5px; font-size: 20px; width: 20px; height: 20px; margin-top: -10px;" _src="/assetsInfo/images/riliform.png">' +
            '</span>' +
                '</div></div></div>' +
                '<div class="project_row">' +
                '<div class="project_textarea"><label class="project_label">原预计成果物:</label></div>' +
                '<div class="project_input">' +
                '<div style="margin-bottom: 5px"><input disabled name="'+temp.oldOutcomes[0].name+'" type="text" title="原预计成果物" value="" adcform="adc_form_input" class="layui-input" placeholder="原预计成果物" adcform_listctrlmark="" adcform_hide="0" adcform_fontsize="14" adcform_align="left" adcform_height="30" adcform_validate="adcformvalidate_none" style="box-sizing: border-box; font-size: 14px; text-align: left; height: 30px;background-color: rgba(248,248,248,1);"></div>' +
                oldContHtml +
                '</div></div>' +
                '<div class="project_row"><label class="project_label">新里程碑名称:</label>' +
                '<div class="project_input"><input lay-verify="proMilepost_required" maxlength="20" name="'+temp.newName.name+'" type="text" title="新里程碑名称" value="" adcform="adc_form_input" class="layui-input" placeholder="新里程碑名称" adcform_listctrlmark="" adcform_hide="0" adcform_fontsize="14" adcform_align="left" adcform_height="30" adcform_validate="adcformvalidate_none" style="box-sizing: border-box; font-size: 14px; text-align: left; height: 30px;">' +
                '</div></div>' +
                '<div class="project_row"><label class="project_label">新负责人:</label>' +
                '<div class="project_input"><select lay-filter="'+temp.newUser.name+'" name="'+temp.newUser.name+'" type="select" title="新负责人" adcform="adc_form_select" adcform_height="30" adcform_width="190" style="height: 30px; width: 190px;" lay-verify="proMilepost_required">' +
                '<option value="请选择">请选择</option>' +
                '</select>' +
                '</div></div>' +
                '<div class="project_row"><div class="project_textarea"><label class="project_label">新里程碑目标:</label>' +
                '</div><div class="project_input">' +
                '<textarea maxlength="120" name="'+temp.newTarget.name+'" title="新里程碑目标" value="" adcform="adc_form_textarea" class="layui-textarea" placeholder="新里程碑目标" adcform_rich="0" adcform_fontsize="14" adcform_height="80" style="box-sizing: border-box; font-size: 14px; height: 80px;"></textarea></div></div>' +
                '<div class="project_row"><label class="project_label">新预计起止时间:</label>' +
                '<div class="project_input"><div class="project_input_date">' +
                '<span style="position: relative;">' +
                '<input lay-verify="adcformdesign_Time|proMilepost_required" name="'+temp.newDate.startName+'" type="text" title="新预计开始时间" placeholder="新预计开始时间" adcform="adc_form_datetime" adcform_theme="#37ABFF" adcform_type="_" class="'+temp.newDate.startName+' layui-input" adcform_hide="0" adcform_auto="1" adcform_fontsize="14" adcform_align="left" adcform_height="30" style="box-sizing: border-box; font-size: 14px; text-align: left; height: 30px;background: rgba(243,247,255,1);"><img src="/assetsInfo/images/riliform.png" style="position: absolute; top: 50%; right: 5px; font-size: 20px; width: 20px; height: 20px; margin-top: -10px;" _src="/assetsInfo/images/riliform.png">' +
                '<script class="'+temp.newDate.startName+'_script">\
                    (function(){var param = {\
                        elem: ".'+temp.newDate.startName+'"\
                    };\
                    var type = document.querySelector(".'+temp.newDate.startName+'").getAttribute("adcform_type").split("_");\
                    var theme = document.querySelector(".'+temp.newDate.startName+'").getAttribute("adcform_theme");\
                    var auto = document.querySelector(".'+temp.newDate.startName+'").getAttribute("adcform_auto");\
                    if(type[0]!==""){param.type=type[0];}\
                    if(type[1]!==""){param.range=true;}\
                    if(theme){param.theme=theme;}\
                    if(auto == "1" && type[1]==""){param.value = new Date();}\
                    layui.laydate.render(param);})();\
                <\/script></span>' +
                '</div>' +
                '<span class="project_input_span">至</span>' +
                '<div class="project_input_date">' +
                '<span style="position: relative;">' +
                '<input lay-verify="proMilepost_required" name="'+temp.newDate.endName+'" type="text" title="新预计结束时间" placeholder="新预计结束时间" adcform="adc_form_datetime" adcform_theme="#37ABFF" adcform_type="_" class="'+temp.newDate.endName+' layui-input" adcform_hide="0" adcform_auto="1" adcform_fontsize="14" adcform_align="left" adcform_height="30" style="box-sizing: border-box; font-size: 14px; text-align: left; height: 30px;background: rgba(243,247,255,1);"><img src="/assetsInfo/images/riliform.png" style="position: absolute; top: 50%; right: 5px; font-size: 20px; width: 20px; height: 20px; margin-top: -10px;" _src="/assetsInfo/images/riliform.png">' +
                '<script class="'+temp.newDate.endName+'_script">\
                    (function(){var param = {\
                        elem: ".'+temp.newDate.endName+'",\
                        done: function(value, date, endDate){\
                           console.log(date);\
                           layui.laydate.render({\
                           elem:".'+temp.newDate.startName+'"\
                           }).config.max={\
                            year:date.year,\
                            month:date.month-1,\
                            date: date.date\
                           }; \
                        }\
                    };\
                    var type = document.querySelector(".'+temp.newDate.endName+'").getAttribute("adcform_type").split("_");\
                    var theme = document.querySelector(".'+temp.newDate.endName+'").getAttribute("adcform_theme");\
                    var auto = document.querySelector(".'+temp.newDate.endName+'").getAttribute("adcform_auto");\
                    if(type[0]!==""){param.type=type[0];}\
                    if(type[1]!==""){param.range=true;}\
                    if(theme){param.theme=theme;}\
                    if(auto == "1" && type[1]==""){param.value = new Date();}\
                    layui.laydate.render(param);})();\
                <\/script>\
            </span>' +
                '</div></div></div' +
                '><div class="project_row"><div class="project_textarea" style="\n' +
                '    vertical-align: bottom;\n' +
                '"><label class="project_label" style="\n' +
                '    top: 0px;\n' +
                '">新预计成果物:</label></div>' +
                '<div class="project_input">' +
                '<div style="margin-bottom:5px">' +
                '<input maxlength="50" lay-verify="proMilepost_required" name="'+temp.newOutcomes[0].name+'" type="text" title="新预计成果物" value="" adcform="adc_form_input" class="layui-input" placeholder="新预计成果物" adcform_listctrlmark="" adcform_hide="0" adcform_fontsize="14" adcform_align="left" adcform_height="30" adcform_validate="adcformvalidate_none" style="box-sizing: border-box; font-size: 14px; text-align: left; height: 30px;width: calc(100% - 20px );"><img class="clickImg" onclick="addOutcomes(this)" src="/assetsInfo/images/Group-.png" style="cursor: pointer;" _src="/assetsInfo/images/Group-.png">' +
                '</div>' +
                 newContHtml+
                '</div></div></div>';
        }
        $("#proMilepost").empty().append(html);
        for (var i = 0; i <$('#proMilepost select[title="原里程碑名称"]').length ; i++) {
            ADCFormDesignHelper.setSelectCheck($('#proMilepost select[title="原里程碑名称"]').eq(i).attr('name'));
        }
        for (var j = 0; j <$('#proMilepost select[title="新负责人"]').length ; j++) {
            layui.form.on('select('+$('#proMilepost select[title="新负责人"]').eq(j).attr('name')+')',function (data) {
                data.elem.dataset.name=data.elem[data.elem.selectedIndex].value;
                data.elem.dataset.id=data.elem[data.elem.selectedIndex].id;
                layui.form.render('select');
            });
        }
        layui.form.render();
    },
    /**
     * 解析表单
     *
     * 单行文本框       <input name="input_1540780867931" type="text" title="单行文本框" value="" adcform="adc_form_input" class="layui-input" placeholder="单行文本框" adcform_hide="0" adcform_fontsize="14" adcform_align="left" adcform_width="190" adcform_height="30" adcform_validate="adcformvalidate_none" style="box-sizing: border-box; font-size: 14px; text-align: left; width: 190px; height: 30px;"/>
     * 多行文本框       <textarea name="textarea_1540780965898" title="多行文本框" value="" adcform="adc_form_textarea" class="layui-textarea" placeholder="多行文本框" adcform_rich="0" adcform_fontsize="14" adcform_width="300" adcform_height="80" style="box-sizing: border-box; font-size: 14px; width: 300px; height: 80px;"></textarea>
     * 下拉菜单         <select name="select_1540780986835" type="select" title="下拉菜单" adcform="adc_form_select" adcform_height="30" adcform_width="190" style="height: 30px; width: 190px;"><option value="男">男</option><option value="女">女</option></select>
     * 单选框           <span adcform="adc_form_radio" title="单选框" name="radio_1540781163367"><input name="radio_1540781163367" value="男" type="radio"/>男&nbsp;<input name="radio_1540781163367" value="女" type="radio"/>女&nbsp;</span>
     * 复选框           <span adcform="adc_form_checkbox" title="复选框" name="checkbox_1540781189849"><input name="checkbox_1540781189849" value="吃饭" type="checkbox"/>吃饭&nbsp;<input name="checkbox_1540781189849" value="睡觉" type="checkbox"/>睡觉&nbsp;</span>
     * 文件上传         <span adcform="adc_form_file" name="file_1540781288085" title="文件上传"><input name="file_1540781288085" type="file" title="文件上传" adcform="adc_form_file" adcform_hide="0" adcform_align="left" adcform_width="180" style="text-align: left; width: 180px;"/><button onclick="{var xhr = new XMLHttpRequest();xhr.open(&quot;POST&quot;, &quot;/api/sys/file/upload&quot;);var fd = new FormData();fd.append(&quot;file&quot;, document.querySelector(&quot;input[name=file_1540781288085]&quot;).files[0]);xhr.onload = function(e){if(xhr.status===200){document.querySelector(&quot;input[name=&#39;file_1540781288085&#39;]&quot;).style.display=&quot;none&quot;;document.querySelector(&quot;button[name=&#39;file_1540781288085_upload&#39;]&quot;).style.display=&quot;none&quot;;document.querySelector(&quot;button[name=&#39;file_1540781288085_download&#39;]&quot;).style.display=&quot;inherit&quot;;document.querySelector(&quot;button[name=&#39;file_1540781288085_del&#39;]&quot;).style.display=&quot;inherit&quot;;document.querySelector(&quot;input[name=&#39;file_1540781288085_fileid&#39;]&quot;).setAttribute(&quot;value&quot;, JSON.parse(xhr.responseText).data.fileId);}else{alert(&quot;上传失败！请在控制台查看错误日志&quot;);console.error(xhr);}};xhr.send(fd);}" name="file_1540781288085_upload">上传</button><button onclick="{var fileId = document.querySelector(&quot;input[name=&#39;file_1540781288085_fileid&#39;]&quot;).getAttribute(&quot;value&quot;);window.open(&quot;/api/sys/file/&quot;+fileId+&quot;/download&quot;);}" name="file_1540781288085_download" style="display: none;">下载</button><button onclick="{document.querySelector(&quot;input[name=&#39;file_1540781288085&#39;]&quot;).style.display=&quot;inherit&quot;;document.querySelector(&quot;button[name=&#39;file_1540781288085_upload&#39;]&quot;).style.display=&quot;inherit&quot;;document.querySelector(&quot;button[name=&#39;file_1540781288085_download&#39;]&quot;).style.display=&quot;none&quot;;document.querySelector(&quot;button[name=&#39;file_1540781288085_del&#39;]&quot;).style.display=&quot;none&quot;;document.querySelector(&quot;input[name=&#39;file_1540781288085_fileid&#39;]&quot;).setAttribute(&quot;value&quot;, &quot;&quot;);}" name="file_1540781288085_del" style="display: none;">删除</button><input style="display: none !important;" name="file_1540781288085_fileid"/></span>
     * 日期时间选择     <input name="datetime_1540781313216" type="text" title="日期时间选择" placeholder="日期时间选择" adcform="adc_form_datetime" adcform_theme="#37ABFF" adcform_type="_" class="datetime_1540781313216 layui-input" adcform_hide="0" adcform_fontsize="14" adcform_align="left" adcform_width="190" adcform_height="30" style="box-sizing: border-box; font-size: 14px; text-align: left; width: 190px; height: 30px;"/></p><script class="datetime_1540781313216_script">(function(){var param = {elem: ".datetime_1540781313216"};var type = document.querySelector(".datetime_1540781313216").getAttribute("adcform_type").split("_");var theme = document.querySelector(".datetime_1540781313216").getAttribute("adcform_theme");if(type[0]!==""){param.type=type[0];}if(type[1]!==""){param.range=true;}if(theme){param.theme=theme;}layui.laydate.render(param);})();</script>
     * 人员选择         {|-<span class="layui-input-inline" style="position: relative;"><input name="input_1540950161457" type="text" title="人员选择" adcform="adc_form_user_select" class="layui-input" placeholder="人员选择" readonly="readonly" onclick="{ var data = {data: []}; var that = this; function callback (res) { if (res.length &gt;0) { that.dataset.usid = res[0].id; that.dataset.usname = res[0].name; that.value = res[0].name; } } ADCFormDesignHelper.personnelSelect(data, callback); }" adcform_default="1" adcform_width="190" adcform_height="30" adcform_fontsize="14" style="box-sizing: border-box; width: 190px; height: 30px; font-size: 14px; cursor: pointer; padding-right: 30px;"/><em class="layui-icon layui-icon-username" style="position: absolute; top: 50%; right: 5px; font-size: 20px; width: 20px; height: 20px; margin-top: -10px;"></em></span>-|} </p><script class="input_1540950161457_script">(function (that) { var adcform_default = that.getAttribute("adcform_default"); if (adcform_default == "1") { var account = layui.config.getAccount(); that.value = account.usname; that.dataset.usname = account.usname; that.dataset.usid = account.usid; } })(document.querySelector("input[name='input_1540950161457']"));</script>
     * 组织机构选择     {|-<span class="layui-input-inline" style="position: relative;"><in
     * put name="input_1540950202226" type="text" title="组织机构选择" adcform="adc_form_org_select" class="layui-input" placeholder="组织机构选择" readonly="readonly" onclick="{ var that = this; function callback (res) { if (res.id &amp;&amp; res.name) { that.dataset.id = res.id; that.dataset.name = res.name; that.value = res.name; } } ADCFormDesignHelper.orgsSelect(callback); }" adcform_default="1" adcform_width="190" adcform_height="30" adcform_fontsize="14" style="box-sizing: border-box; width: 190px; height: 30px; font-size: 14px; cursor: pointer; padding-right: 30px;"/><em class="layui-icon layui-icon-website" style="position: absolute; top: 50%; right: 5px; font-size: 20px; width: 20px; height: 20px; margin-top: -10px;"></em></span>-|}<script class="input_1540950202226_script">(function (that) { var adcform_default = that.getAttribute("adcform_default"); if (adcform_default == "1") { var account = layui.config.getAccount(); var org = account.orgs; if (org.length >0) { that.value = org[0].name; that.dataset.name = org[0].name; that.dataset.id = org[0].id; } } })(document.querySelector("input[name='input_1540950202226']"));</script>
     *
     * @param {*} content
     */
    ParsingForm: function (content) {
        var reg = {
            input: /<input(.*?)adcform="adc_form_input"(.*?)>/ig,
            textarea: /<textarea(.*?)adcform="adc_form_textarea"(.*?)>/ig,
            select: /<select(.*?)adcform="adc_form_select"(.*?)>/ig,
            radio: /<span(.*?)adcform="adc_form_radio"(.*?)>/ig,
            checkbox: /<span(.*?)adcform="adc_form_checkbox"(.*?)>/ig,
            file: /<span(.*?)adcform="adc_form_file"(.*?)>/ig,
            datetime: /<input(.*?)adcform="adc_form_datetime"(.*?)>/ig,
            userselect: /<input(.*?)adcform="adc_form_user_select"(.*?)>/ig,
            orgselect: /<input(.*?)adcform="adc_form_org_select"(.*?)>/ig,
            listctrl: /<table(.*?)adcform="adc_form_listctrl"(.*?)>/ig,
            projectList: /<table(.*?)adcform="adc_form_project_list"(.*?)>/ig,
            businessList: /<table(.*?)adcform="adc_form_business_list"(.*?)>/ig,
            milepostList: /<table(.*?)adcform="adc_form_milepost"(.*?)>/ig,
            businessSelect: /<table(.*?)adcform="adc_form_business_select"(.*?)>/ig,
            barCanvas: /<table(.*?)adcform="adc_form_bar_canvas"(.*?)>/ig
        };
        var fileds = [];
        // 匹配单行文本框
        var inputResult = content.match(reg.input);
        inputResult = inputResult ? inputResult : [];
        // 匹配多行文本框
        var textareaResult = content.match(reg.textarea);
        textareaResult = textareaResult ? textareaResult : [];
        // 匹配下拉菜单
        var selectResult = content.match(reg.select);
        selectResult = selectResult ? selectResult : [];
        // 匹配单选框
        var radioResult = content.match(reg.radio);
        radioResult = radioResult ? radioResult : [];
        // 匹配复选框
        var checkboxResult = content.match(reg.checkbox);
        checkboxResult = checkboxResult ? checkboxResult : [];
        // 匹配文件上传
        var fileResult = content.match(reg.file);
        fileResult = fileResult ? fileResult : [];
        // 匹配日期时间选择
        var datetimeResult = content.match(reg.datetime);
        datetimeResult = datetimeResult ? datetimeResult : [];
        // 匹配人员选择
        var userselectResult = content.match(reg.userselect);
        userselectResult = userselectResult ? userselectResult : [];
        // 匹配组织机构选择
        var orgselectResult = content.match(reg.orgselect);
        orgselectResult = orgselectResult ? orgselectResult : [];
        //匹配列表控件
        var orglistctrlResult = content.match(reg.listctrl);
        orglistctrlResult = orglistctrlResult ? orglistctrlResult : [];
        //匹配项目列表控件
        var orgprojectListResult = content.match(reg.projectList);
        orgprojectListResult = orgprojectListResult ? orgprojectListResult : [];
        //匹配业务列表控件
        var businessListResult = content.match(reg.businessList);
        businessListResult = businessListResult ? businessListResult : [];
        //匹配业务列表控件
        var milepostListResult = content.match(reg.milepostList);
        milepostListResult = milepostListResult ? milepostListResult : [];
        //匹配业务下拉控件
        var businessSelectResult = content.match(reg.businessSelect);
        businessSelectResult = businessSelectResult ? businessSelectResult : [];
        //匹配
        var barCanvasResult = content.match(reg.barCanvas);
        barCanvasResult = barCanvasResult ? barCanvasResult : [];

        var resultArray = [].concat(inputResult, textareaResult,
            selectResult, radioResult, checkboxResult, fileResult,
            datetimeResult, userselectResult, orgselectResult,
            orglistctrlResult,orgprojectListResult,
            businessListResult,milepostListResult,businessSelectResult,barCanvasResult);
        console.log(resultArray.length);
        for (var i = 0; i < resultArray.length; i++) {
            var tmp = resultArray[i],
                name = null,
                title = null;
            //匹配列表控件的处理办法
            if (tmp.indexOf("adc_form_listctrl") != -1) {
                tmp.replace(/name="(.*?)"/ig, function () {
                    name = arguments[1].split('`');
                    return arguments[0].split('`');
                }).replace(/table_title="(.*?)"/ig, function () {
                    title = arguments[1].split('`');
                    return arguments[0].split('`');
                });
                for (var j = 0; j < name.length; j++) {
                    fileds.push({
                        name: name[j],
                        title: title[j]
                    });
                }
            }
            //其他类型的处理方法
            else {
                tmp.replace(/name="(.*?)"/ig, function () {
                    name = arguments[1];
                    console.log(arguments[1]);
                    return arguments[0];
                }).replace(/title="(.*?)"/ig, function () {
                    title = arguments[1];
                    return arguments[0];
                });
                // if(name.indexOf('dateTime') == -1){
                    fileds.push({
                        name: name,
                        title: title
                    });
                // }

            }
        }

        // fileds.push({
        //     name: 'uploadFile',
        //     title: '文件上传权限'
        // });
        // fileds.push({
        //     name: 'projectChange',
        //     title: '项目变更表权限'
        // });
        // fileds.push({
        //     name: 'milepost_projectTable',
        //     title: '里程碑权限'
        // });
        var newContent = content;
        console.log(fileds);
        return {
            fields: fileds,
            content: newContent
        };
    },
    // 选人插件
    // 调用该方法可以调起 iframe 弹窗
    // 在弹窗内进行人员选择
    // 该方法接受两个个参数：
    // 1. 数据对象，所有需要传递到选人弹窗的数据
    // 2. 回掉函数，会在选完人点击确定的时候将选中的数据以数组的方式回传
    personnelSelect: function (data, callback,gType) {
        layer.open({
            type: 2,
            id: 'personnelSelect',
            title: '请选择',
            content: 'components/tpl/personnel_group_select.html',
            area: ['96%', '80%'],
            btn: ['确定', '取消'],
            yes: function (index, layero) {
                var finalData = $('#personnelSelect iframe')[0].contentWindow
                    .task_personnel_select.finish();
                // 获取到数据，执行回掉函数
                callback && typeof callback === 'function' && callback(
                    finalData);
                layer.close(index);
            },
            success: function () {
                // 执行 iframe 内的方法
                $('#personnelSelect iframe')[0].contentWindow.task_personnel_select
                    .init(data,gType);
            },
            resize: false
        });
    },
    orgsSelect: function (callback) {
        layer.open({
            type: 2,
            id: 'orgsSelect',
            title: '请选择',
            content: 'components/tpl/task_orgs_select.html',
            area: ['50%', '80%'],
            btn: ['确定', '取消'],
            yes: function (index, layero) {
                var finalData = $('#orgsSelect iframe')[0].contentWindow
                    .task_orgs_select.finish();
                // 获取到数据，执行回掉函数
                if (finalData.id == '' || finalData.name == '') {
                    return layer.msg('请选择组织机构', {
                        icon: 0
                    });
                }
                callback && typeof callback === 'function' && callback(
                    finalData);
                layer.close(index);
            },
            resize: false
        });
    },
    projectInit: function (that) {
    $.ajax({
        url:"/api/budget/project/query/allNotOld?property=0",
        type:"GET",
        contentType: 'application/json',
        async:false,
        success:function (data) {
            // console.log(name)
            //console.log(data);
            //数据结构先做成和数据字典一样
            var cur = data.data;
            var  option='';
            for (var i = 0; i < cur.length; i++) {
                var land = cur[i];
                option += '<option value="' + land.name + '" id="'+ land.id + '">' + land.name +
                    '</option>';
            }
            $('select[name='+that+']').empty().append(option);
            if(cur.length!=0){
                $('select[name='+that+']')[0].dataset.name=cur[0].name;
                $('select[name='+that+']')[0].dataset.id=cur[0].id;
            }
            layui.form.on('select('+that+')',function (data) {
                data.elem.dataset.name=data.elem[data.elem.selectedIndex].value;
                data.elem.dataset.id=data.elem[data.elem.selectedIndex].id;
                if($('#projectMemberInfo').length!=0){
                    ADCFormDesignHelper.setProjectMemberInfo(data.elem[data.elem.selectedIndex].id);
                }
            });
            layui.form.render('select');
            // $("#adcform_list");
        },
        error:function (err) {
            layer.msg('获取信息失败！');
            console.log(err);
        }
    })
},
    businessInit: function (that) {
        $.ajax({
            url:"/api/budget/project/query/allNotOld?property=2",
            type:"GET",
            contentType: 'application/json',
            async:false,
            success:function (data) {
                // console.log(name)
                //console.log(data);
                //数据结构先做成和数据字典一样
                var cur = data.data;
                var  option='';
                for (var i = 0; i < cur.length; i++) {
                    var land = cur[i];
                    // var  option=  fnAddComboOption(oNode,land.name,land.name)
                    option += '<option value=\"' + land.name + '\" id=\"'+ land.id + '\">' + land.name +
                        '</option>';
                    // fnSetAttribute(option, 'selected', 'selected');
                    // option.selected = true;
                }
                // console.log($(this),45444);
                $('select[name='+that+']').empty().append(option);
                if(cur.length!=0){
                    $('select[name='+that+']')[0].dataset.name=cur[0].projectName;
                    $('select[name='+that+']')[0].dataset.id=cur[0].id;
                }
                layui.form.on('select('+that+')',function (data) {
                    data.elem.dataset.name=data.elem[data.elem.selectedIndex].value;
                    data.elem.dataset.id=data.elem[data.elem.selectedIndex].id;
                    if($('#projectMemberInfo').length!=0){
                        ADCFormDesignHelper.setProjectMemberInfo(data.elem[data.elem.selectedIndex].id);
                    }
                    if($('#proAssess').length!=0){
                        ADCFormDesignHelper.setProjectAssessInfo(data.elem[data.elem.selectedIndex].id);
                    }
                });
                layui.form.render('select');
                // $("#adcform_list");
            },
            error:function (err) {
                layer.msg('获取信息失败！');
                console.log(err);
            }
        })
    },
    setProjectAssessInfo:function (id) {
        $.ajax({
            url:'/api/research/formInfo/'+id,
            type:"GET",
            contentType: 'application/json',
            async:false,
            success:function (res) {
                if(res.ok){
                    $('input[title="项目承担部门"]').val(res.data.deptName);
                    $('input[title="项目承担部门"]').attr('data-name',res.data.deptName);
                    $('input[title="项目承担部门"]').attr('data-id',res.data.deptId);

                }else{
                    $('input[title="项目承担部门"]').val("");
                    $('input[title="项目承担部门"]').attr('data-name',"");
                    $('input[title="项目承担部门"]').attr('data-id',"");
                    layer.msg(res.message, {
                        icon: 5
                    });
                }
            },
            error:function (err) {
                layer.msg('获取信息失败！');
                console.log(err);
            }
        })
    },
    setResearchInfo:function (id) {
        $.ajax({
            url:'/api/research/formInfo/'+id,
            type:"GET",
            contentType: 'application/json',
            async:false,
            success:function (res) {
                if(res.ok){
                    if($('#sicTable').length==0){
                        $('input[title="承担部门"]').val(res.data.deptName);
                        $('input[title="承担部门"]').attr('data-name',res.data.deptName);
                        $('input[title="承担部门"]').attr('data-id',res.data.deptId);
                    }else{
                        $('input[title="项目承担部门"]').val(res.data.deptName);
                        $('input[title="项目承担部门"]').attr('data-name',res.data.deptName);
                        $('input[title="项目承担部门"]').attr('data-id',res.data.deptId);
                    }
                    if($('#researchCheck').length!=0){
                      var projectBeginTime = res.data.projectBeginTime?layui.tools.getDate(res.data.projectBeginTime,"YYYY-MM-DD"):"";
                      var projectEndTime =res.data.projectEndTime?layui.tools.getDate(res.data.projectEndTime,"YYYY-MM-DD"):"";
                      if(projectBeginTime&&projectEndTime){
                          $('input[title="计划起止时间"]').val(projectBeginTime+' - '+projectEndTime);
                      }
                    }
                    $('input[title="项目负责人"]').val(res.data.projectLeaderName);
                    $('input[title="项目负责人"]').attr('data-usname',res.data.projectLeaderName);
                    $('input[title="项目负责人"]').attr('data-usid',res.data.projectLeaderId);
                    if($("#sicStartTable").length!=0){
                        $('input[title="合同编号"]').val(res.data.contractNo);
                    }
                }else{
                    if($('#sicTable').length==0){
                        $('input[title="承担部门"]').val("");
                        $('input[title="承担部门"]').attr('data-name',"");
                        $('input[title="承担部门"]').attr('data-id',"");
                    }else{
                        $('input[title="项目承担部门"]').val("");
                        $('input[title="项目承担部门"]').attr('data-name',"");
                        $('input[title="项目承担部门"]').attr('data-id',"");
                    }
                    if($('#researchCheck').length!=0){
                        $('input[title="计划起止时间"]').val("");
                    }
                    if($("#sicStartTable").length!=0){
                        $('input[title="合同编号"]').val("");
                    }
                    $('input[title="项目负责人"]').val("");
                    $('input[title="项目负责人"]').attr('data-usname',"");
                    $('input[title="项目负责人"]').attr('data-usid',"");
                    layer.msg(res.message, {
                        icon: 5
                    });
                }
            },
            error:function (err) {
                layer.msg('获取信息失败！');
                console.log(err);
            }
        })
    },
    researchInit: function (that) {
        $.ajax({
            url:"/api/budget/project/query/allNotOld?property=2",
            type:"GET",
            contentType: 'application/json',
            async:false,
            success:function (data) {
                // console.log(name)
                //console.log(data);
                //数据结构先做成和数据字典一样
                var cur = data.data;
                var  option='';
                for (var i = 0; i < cur.length; i++) {
                    var land = cur[i];
                    // var  option=  fnAddComboOption(oNode,land.name,land.name)
                    option += '<option value=\"' + land.id + '\"  id=\"'+ land.name + '\">' + land.name +
                        '</option>';
                    // fnSetAttribute(option, 'selected', 'selected');
                    // option.selected = true;
                }
                // console.log($(this),45444);
                $('select[name='+that+']').empty().append(option);
                if(cur.length!=0){
                    $('select[name='+that+']')[0].dataset.name=cur[0].name;
                    $('select[name='+that+']')[0].dataset.id=cur[0].id;
                }

                layui.form.on('select('+that+')',function (data) {
                    data.elem.dataset.name=data.elem[data.elem.selectedIndex].id;
                    data.elem.dataset.id=data.elem[data.elem.selectedIndex].value;
                    ADCFormDesignHelper.setResearchInfo(data.elem[data.elem.selectedIndex].value);
                });
                layui.form.render('select');
                // $("#adcform_list");
            },
            error:function (err) {
                layer.msg('获取信息失败！');
                console.log(err);
            }
        })
    },
    //经营类所属业务
    businessSelectInit: function (that) {
        $.ajax({
            url:"/api/budget/budget/getBudgetList?property=0",
            type:"GET",
            contentType: 'application/json',
            async:false,
            success:function (result) {
                if(result.ok){
                    var arr=result.data;
                    var elem = $('select[name='+that+']');
                    elem.empty().append('<option value="">请选择</option>');
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i].projectName)
                        {
                            elem.append('<option value="' + arr[i].id + '">' + arr[i].projectName + '</option>');
                        }
                    }
                   layui.form.render('select');
                }

            },
            error:function (err) {
                layer.msg('获取信息失败！');
                console.log(err);
            }
        })
    },
    //经营类\事务类业务类型
    businessSelectTypeInit: function (that) {
        $.ajax({
            url:"/api/budget/business/query/all",
            type:"GET",
            contentType: 'application/json',
            async:false,
            success:function (result) {
                if(result.ok){
                    var arr=result.data;
                    var elem = $('select[name='+that+']');
                    elem.empty().append('<option value="">请选择</option>');
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i].name)
                        {
                            elem.append('<option value="' + arr[i].id + '">' + arr[i].name + '</option>');
                        }
                    }
                    layui.form.render('select');
                }

            },
            error:function (err) {
                layer.msg('获取信息失败！');
                console.log(err);
            }
        })
    },
    //事务类所属业务
    affairSelectInit: function (that) {
        $.ajax({
            url:"/api/budget/budget/getBudgetList?property=1",
            type:"GET",
            contentType: 'application/json',
            async:false,
            success:function (result) {
                if(result.ok){
                    var arr=result.data;
                    var elem = $('select[name='+that+']');
                    elem.empty().append('<option value="">请选择</option>');
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i].projectName)
                        {
                            elem.append('<option value="' + arr[i].id + '">' + arr[i].projectName + '</option>');
                        }
                    }
                    layui.form.render('select');
                }

            },
            error:function (err) {
                layer.msg('获取信息失败！');
                console.log(err);
            }
        })
    },
    //项目组成员绩效评价表单成员回显
    setProjectMemberInfo:function(id){
        layui.admin.req('/api/progress/projectBudgetChange/getByProjectId/'+id, {}, function (res){
            if (res.ok) {
                var cur = res.data.mapList;
                var  option='';
                for (var i = 0; i < cur.length; i++) {
                    var land = cur[i];
                    option += '<option value="' + land.name + '" id="'+ land.id + '">' + land.name +
                        '</option>';
                }
                if(cur.length!=0){
                    $('#projectMemberInfo')[0].dataset.usname=cur[0].name;
                    $('#projectMemberInfo')[0].dataset.usid=cur[0].id;
                }
                $('#projectMemberInfo').empty().append(option);
                layui.form.on('select(projectMemberInfo)',function (data) {
                    data.elem.dataset.usname=data.elem[data.elem.selectedIndex].value;
                    data.elem.dataset.usid=data.elem[data.elem.selectedIndex].id;
                });
                layui.form.render();
            } else {
                layer.msg(res.message, {
                    icon: 5
                });
            }
        }, {
            method: 'get'
        });


    },
    scientificInit: function (that) {
        $.ajax({
            url:"/api/budget/project/query/allNotOld?property=2",
            type:"GET",
            contentType: 'application/json',
            async:false,
            success:function (data) {
                // console.log(name)
                //console.log(data);
                //数据结构先做成和数据字典一样
                var cur = data.data;
                var  option='';
                for (var i = 0; i < cur.length; i++) {
                    var land = cur[i];
                    option += '<option value="'+land.name+ '" data-name="'+land.name+'" id="'+land.id+'">' + land.name +
                        '</option>';
                }
                $('select[name='+that+']').empty().append(option);
                if(cur.length!=0){
                    $('select[name='+that+']')[0].dataset.name=cur[0].name;
                    $('select[name='+that+']')[0].dataset.id=cur[0].id;
                    ADCFormDesignHelper.setProjectContent(cur[0].id);
                }
                layui.form.on('select('+that+')',function (data) {
                    data.elem.dataset.name=data.elem[data.elem.selectedIndex].value;
                    data.elem.dataset.id=data.elem[data.elem.selectedIndex].id;
                    ADCFormDesignHelper.setProjectContent(data.elem[data.elem.selectedIndex].id,false,false,true);
                });
                layui.form.render('select');
                // $("#adcform_list");
            },
            error:function (err) {
                layer.msg('获取信息失败！');
                console.log(err);
            }
        })
    },
    //inspectContent 工作管理回显 //contentArr 待办、已办、已发回显
    setProjectContent:function(id,contentArr,inspectContent,isFirst){
        if($('input[title="项目负责人"]').length!=0&&$('input[title="承担部门"]').length!=0&&$('select[title="检查内容"]').length!=0){
            var showAll=false;
            if(contentArr||inspectContent){
                showAll=true;
            }
            $.ajax({
                url:"/api/research/save/checkpoint?showAll="+showAll+"&projectId="+id,
                type:"GET",
                contentType: 'application/json',
                async:false,
                success:function (res) {
                    if(res.ok){
                        $('input[title="项目负责人"]').val(res.data.leaderName);
                        $('input[title="项目负责人"]').attr('data-usname',res.data.leaderName);
                        $('input[title="项目负责人"]').attr('data-usid',res.data.leaderId);
                        $('input[title="承担部门"]').val(res.data.ownDepartmentName);
                        $('input[title="承担部门"]').attr('data-name',res.data.ownDepartmentName);
                        $('input[title="承担部门"]').attr('data-id',res.data.ownDepartmentId);
                        var contenOption='';
                        for (var i = 0; i < res.data.checkDetailArray.length; i++) {
                            var optionList = res.data.checkDetailArray[i];
                            contenOption += '<option value="'+optionList[1]+ '"  id="'+optionList[0]+'">' + optionList[1] +
                                '</option>';
                        }
                        // for(var item in res.data.checkDetailMap){
                        //     contenOption += '<option value="'+res.data.checkDetailMap[item]+ '"  id="'+item+'">' + res.data.checkDetailMap[item] +
                        //         '</option>';
                        // }
                        if(inspectContent){
                            $('select[title="检查内容"]').attr('disabled','disabled');
                            $('select[title="检查内容"]')[0].dataset.name=inspectContent.checkDetail;
                            $('select[title="检查内容"]')[0].dataset.id=inspectContent.id;
                        }else if(!contentArr&&res.data.checkDetailArray.length!=0){
                            $('select[title="检查内容"]')[0].dataset.name=res.data.checkDetailArray[0][1];
                            $('select[title="检查内容"]')[0].dataset.id=res.data.checkDetailArray[0][0];
                        }
                        layui.form.on('select('+$('select[title="检查内容"]').attr('name')+')',function (data) {
                            data.elem.dataset.name=data.elem[data.elem.selectedIndex].value;
                            data.elem.dataset.id=data.elem[data.elem.selectedIndex].id;
                        });
                        $('select[title="检查内容"]').empty().append(contenOption);
                        if(inspectContent){
                            $('select[title="检查内容"]').val(inspectContent.checkDetail);
                        }else if(contentArr&&contentArr.length!=0){
                            $('select[title="检查内容"]').val(contentArr[0].value);
                        }

                        layui.form.render('select');
                    }else{
                        $('select[title="检查内容"]').val('');
                        $('select[title="检查内容"]')[0].dataset.name='';
                        $('select[title="检查内容"]')[0].dataset.id='-1';
                        $('select[title="检查内容"]').empty();
                        layui.form.render('select');
                        if(inspectContent||contentArr||isFirst){
                            return layer.msg( res.message, {
                                icon: 5
                            });
                        }
                    }
                }
            });
        }
    },
    metaphaseInit: function (that) {
        $.ajax({
            url:"/api/budget/project/query/allNotOld?property=2",
            type:"GET",
            contentType: 'application/json',
            async:false,
            success:function (data) {
                // console.log(name)
                //console.log(data);
                //数据结构先做成和数据字典一样
                var cur = data.data;
                var  option='';
                for (var i = 0; i < cur.length; i++) {
                    var land = cur[i];
                    option += '<option value="'+land.name+ '" data-name="'+land.name+'" id="'+land.id+'">' + land.name +
                        '</option>';
                }
                $('select[name='+that+']').empty().append(option);
                if(cur.length!=0){
                    $('select[name='+that+']')[0].dataset.name=cur[0].name;
                    $('select[name='+that+']')[0].dataset.id=cur[0].id;
                    ADCFormDesignHelper.metaphaseContent(cur[0].id);
                }
                layui.form.on('select('+that+')',function (data) {
                    data.elem.dataset.name=data.elem[data.elem.selectedIndex].value;
                    data.elem.dataset.id=data.elem[data.elem.selectedIndex].id;
                    ADCFormDesignHelper.metaphaseContent(data.elem[data.elem.selectedIndex].id,true);
                });
                layui.form.render('select');
                // $("#adcform_list");
            },
            error:function (err) {
                layer.msg('获取信息失败！');
                console.log(err);
            }
        })
    },
    metaphaseContent:function(id,isFirst){
        if($('input[title="项目负责人"]').length!=0&&$('input[title="项目承担部门"]').length!=0&&
            $('textarea[title="项目目标"]').length!=0&&$('textarea[title="研究内容"]').length!=0
            &&$('textarea[title="考核指标"]').length!=0
        ){
            $.ajax({
                url:"/api/research/save/checkpoint?midterm=true&projectId="+id,
                type:"GET",
                contentType: 'application/json',
                async:false,
                success:function (res) {
                    if(res.ok){
                        $('input[title="项目负责人"]').val(res.data.leaderName);
                        $('input[title="项目负责人"]').attr('data-usname',res.data.leaderName);
                        $('input[title="项目负责人"]').attr('data-usid',res.data.leaderId);
                        $('input[title="项目承担部门"]').val(res.data.ownDepartmentName);
                        $('input[title="项目承担部门"]').attr('data-name',res.data.ownDepartmentName);
                        $('input[title="项目承担部门"]').attr('data-id',res.data.ownDepartmentId);
                        $('textarea[title="项目目标"]').val(res.data.target);
                        $('textarea[title="研究内容"]').val(res.data.content);
                        $('textarea[title="考核指标"]').val(res.data.assessmentIndex);
                    }else{
                        if(isFirst){
                            return layer.msg( res.message, {
                                icon: 5
                            });
                        }
                    }

                }
            });
        }
    },
    //获取项目相关信息
    setProjectInfo:function(id){
        ADCFormDesignHelper.setMilepostInfo(id);
        layui.admin.req('/api/progress/projectBudgetChange/getByProjectId/'+id, {}, function (res){
            if (res.ok) {
                var  projectData=res.data;
                $(".proSituation").children('.project_row').eq(0).children('project_input').children('textarea').val(projectData.projectDescription);
                var strName ="";
                var strId ="";
                for (var i = 0; i <projectData.mapList.length ; i++) {
                    if(i!=projectData.mapList.length-1){
                        strName+=projectData.mapList[i].name+",";
                        strId+=projectData.mapList[i].id+",";
                    }else{
                        strName+=projectData.mapList[i].name;
                        strId+=projectData.mapList[i].id;
                    }
                }
                $(".proLead").children('.project_row').eq(0).children('.project_input').children('span').children('input').val(projectData.projectLeaderName);
                $(".proLead").children('.project_row').eq(0).children('.project_input').children('span').children('input').attr('data-usname',projectData.projectLeaderName);
                $(".proLead").children('.project_row').eq(0).children('.project_input').children('span').children('input').attr('data-usid',projectData.projectLeaderId);
                $(".proMember").children('.project_row').eq(0).children('.project_input').children('span').children('input').val(strName);
                $(".proMember").children('.project_row').eq(0).children('.project_input').children('span').children('input').attr('data-usname',strName);
                $(".proMember").children('.project_row').eq(0).children('.project_input').children('span').children('input').attr('data-usid',strId);
                $(".proMember").children('.project_row').eq(1).children('.project_input').children('span').children('input').val(strName);
                $(".proMember").children('.project_row').eq(1).children('.project_input').children('span').children('input').attr('data-usname',strName);
                $(".proMember").children('.project_row').eq(1).children('.project_input').children('span').children('input').attr('data-usid',strId);
                $(".proDepartment").children('.project_row').eq(0).children('.project_input').children('span').children('input').attr('data-name',projectData.bearDeptName);
                $(".proDepartment").children('.project_row').eq(0).children('.project_input').children('span').children('input').attr('data-id',projectData.bearDeptId);
                $(".proDepartment").children('.project_row').eq(0).children('.project_input').children('span').children('input').val(projectData.bearDeptName);
                $(".proSituation").children('.project_row').eq(0).children('.project_input').children('textarea').val(projectData.projectDescription);
                $("input[name='projectLeaderId']").val(projectData.projectLeaderId);
                $("input[name='departmentId']").val(projectData.bearDeptId);
                // department
                var projectBeginTime = projectData.projectBeginTime?layui.tools.getDate(projectData.projectBeginTime,"YYYY-MM-DD"):'';
                var projectEndTime = projectData.projectEndTime?layui.tools.getDate(projectData.projectEndTime,"YYYY-MM-DD"):'';
                $(".proDate").children('.project_row').eq(0).children('.project_input').children('.project_input_date').eq(0).children('span').children('input').val(projectBeginTime);
                $(".proDate").children('.project_row').eq(0).children('.project_input').children('.project_input_date').eq(1).children('span').children('input').val(projectEndTime);
                if(projectData.projectBudgetChangeEO&&projectData.projectBudgetChangeEO.length!=0){
                    var personCost=projectData.projectBudgetChangeEO.personCost?projectData.projectBudgetChangeEO.personCost.toFixed(2):0;
                    var purchaseCost=projectData.projectBudgetChangeEO.purchaseCost?projectData.projectBudgetChangeEO.purchaseCost.toFixed(2):0;
                    var cooperationCost=projectData.projectBudgetChangeEO.cooperationCost?projectData.projectBudgetChangeEO.cooperationCost.toFixed(2):0;
                    var otherCost=projectData.projectBudgetChangeEO.otherCost?projectData.projectBudgetChangeEO.otherCost.toFixed(2):0;
                    $(".proBudget").children('.project_col').eq(0).children('.project_col_row').eq(0).children('.project_col_row_input').children('input').val(personCost);
                    $(".proBudget").children('.project_col').eq(0).children('.project_col_row').eq(1).children('.project_col_row_input').children('input').val(purchaseCost);
                    $(".proBudget").children('.project_col').eq(0).children('.project_col_row').eq(2).children('.project_col_row_input').children('input').val(cooperationCost);
                    $(".proBudget").children('.project_col').eq(0).children('.project_col_row').eq(3).children('.project_col_row_input').children('input').val(otherCost);
                    var num =parseFloat(personCost,10)+parseFloat(purchaseCost,10)+parseFloat(cooperationCost,10)+parseFloat(otherCost,10);
                    $(".proBudget").children('.project_col').eq(0).children('.project_col_row').eq(4).children('.project_col_row_input').children('input').val(isNaN(num.toFixed(2))?0:num.toFixed(2));
                    $(".proBudget")[0].dataset.id=projectData.projectBudgetChangeEO.id;
                }else{
                    $(".proBudget").children('.project_col').eq(0).children('.project_col_row').eq(0).children('.project_col_row_input').children('input').val(0);
                    $(".proBudget").children('.project_col').eq(0).children('.project_col_row').eq(1).children('.project_col_row_input').children('input').val(0);
                    $(".proBudget").children('.project_col').eq(0).children('.project_col_row').eq(2).children('.project_col_row_input').children('input').val(0);
                    $(".proBudget").children('.project_col').eq(0).children('.project_col_row').eq(3).children('.project_col_row_input').children('input').val(0);
                    $(".proBudget").children('.project_col').eq(0).children('.project_col_row').eq(4).children('.project_col_row_input').children('input').val(0);
                }
                layui.form.render();
            } else {
                layer.msg(res.message, {
                    icon: 5
                });
            }
        }, {
            method: 'get'
        });


    },
    //经营类项目实施获取承担部门以及负责人
    getLeaderInfo:function(id,ele){
        layui.admin.req('/api/progress/projectBudgetChange/getByProjectId/'+id, {}, function (res){
            if (res.ok) {
                var  projectData=res.data;
                var cur = res.data.mapList;
                var  option='<option value="" >请选择</option>';
                for (var i = 0; i < cur.length; i++) {
                    var land = cur[i];
                    option += '<option value="' + land.name + '" id="'+ land.id + '">' + land.name +
                        '</option>';
                }
                if(!ele){
                    $('.milepost_text input[name="inputorgselect_1564473772934"]').val(projectData.bearDeptName);
                    $('.milepost_text input[name="inputorgselect_1564473772934"]').data('name',projectData.bearDeptName);
                    $('.milepost_text input[name="inputorgselect_1564473772934"]').data('id',projectData.bearDeptId);
                    $('.milepost_text input[name="inputuserselect_1564473799414"]').val(projectData.projectLeaderName);
                    $('.milepost_text input[name="inputuserselect_1564473799414"]').data('usid',projectData.projectLeaderId);
                    $('.milepost_text input[name="inputuserselect_1564473799414"]').data('usname',projectData.projectLeaderName);
                    $('#projectTable select').empty().append(option);
                }else{
                    ele.children('.milepost_right_box').eq(ele.children('.milepost_right_box').length-1).children('.milepost_row').eq(1).children('.milepost_text').children('select').empty().append(option);
                }
                for (var i = 0; i <$('#projectTable select').length ; i++) {
                    layui.form.on('select('+$('#projectTable select').eq(i).attr('name')+')',function (data) {
                        data.elem.dataset.name=data.elem[data.elem.selectedIndex].value;
                        data.elem.dataset.id=data.elem[data.elem.selectedIndex].id;
                        layui.form.render('select');
                    });
                }

                layui.form.render();
            } else {
                layer.msg(res.message, {
                    icon: 5
                });
            }
        }, {
            method: 'get'
        });
    },
    //为里程碑相关信息
    setMilepostInfo:function(id,ele){
        layui.admin.req('/api/progress/projectMilepost/page4Tips', {"projectId":id,'notUsed':'notUsed'}, function (res){
            if (res.ok) {
                var cur = res.data.list;
                var  option='<option value="" >请选择</option>';
                for (var i = 0; i < cur.length; i++) {
                    var land = cur[i];
                    option += '<option value="' + land.milepostName + '" id="'+ land.id + '">' + land.milepostName +
                        '</option>';
                }
                if(ele){
                    ele.children('.milepost_project_box').eq(ele.children('.milepost_project_box').length-1).children('.project_row').children('.project_input').children('select[title="原里程碑名称"]').empty().append(option);
                }else{
                    $('#proMilepost select[title="原里程碑名称"]').empty().append(option);
                }

                layui.form.render('select');
                for (var i = 0; i <$('#proMilepost select[title="原里程碑名称"]').length ; i++) {
                    ADCFormDesignHelper.setSelectInit($('#proMilepost select[title="原里程碑名称"]').eq(i).attr('name'),ele);
                }
            } else {
                layer.msg(res.message, {
                    icon: 5
                });
            }
        }, {
            method: 'post'
        });
        layui.admin.req('/api/progress/projectBudgetChange/getByProjectId/'+id, {}, function (res){
            if (res.ok) {
                var cur = res.data.mapList;
                var  option='<option value="" >请选择</option>';
                for (var i = 0; i < cur.length; i++) {
                    var land = cur[i];
                    option += '<option value="' + land.name + '" id="'+ land.id + '">' + land.name +
                        '</option>';
                }
                if(ele){
                    ele.children('.milepost_project_box').eq(ele.children('.milepost_project_box').length-1).children('.project_row').children('.project_input').children('select[title="新负责人"]').empty().append(option);
                }else{
                    $('#proMilepost select[title="新负责人"]').empty().append(option);
                }

                layui.form.render('select');
                for (var i = 0; i <$('#proMilepost select').length ; i++) {
                    layui.form.on('select('+$('#proMilepost select[title="新负责人"]').eq(i).attr('name')+')',function (data) {
                        data.elem.dataset.name=data.elem[data.elem.selectedIndex].value;
                        data.elem.dataset.id=data.elem[data.elem.selectedIndex].id;
                        layui.form.render('select');
                    });
                    // ADCFormDesignHelper.setSelectInit(,ele);
                }
            } else {
                layer.msg(res.message, {
                    icon: 5
                });
            }
        }, {
            method: 'get'
        });
        // lay-verify="proMilepost_required"
    },
    //为里程碑名称绑定相关事件
    setSelectInit:function(name,ele){
        if(!ele){
            var Times = new Date().getTime();
            var ele=$('select[name="'+name+'"]').parent().parent().parent();
            ele.children('.project_row').eq(1).children('.project_input').children('span').children('input').data('data-usid','');
            ele.children('.project_row').eq(1).children('.project_input').children('span').children('input').data('usname','');
            ele.children('.project_row').eq(1).children('.project_input').children('span').children('input').val('');
            ele.children('.project_row').eq(2).children('.project_input').children('textarea').val('');
            ele.children('.project_row').eq(3).children('.project_input').children('.project_input_date').eq(0).children('span').children('input').val('');
            ele.children('.project_row').eq(3).children('.project_input').children('.project_input_date').eq(1).children('span').children('input').val('');
            ele.children('.project_row').eq(4).children('.project_input').children('input').eq(0).val('');
        }
       ADCFormDesignHelper.setSelectCheck(name);
    },
    setSelectCheck:function(name){
        console.log(name)
        layui.form.on('select('+name+')',function (data) {
            data.elem.dataset.name=data.elem[data.elem.selectedIndex].value;
            data.elem.dataset.id=data.elem[data.elem.selectedIndex].id;
            var id=data.elem[data.elem.selectedIndex].id;
            var elem =$(data.elem).parent().parent().parent();
            layui.admin.req('/api/progress/projectMilepost/'+id, {}, function (res){
                if (res.ok) {
                    var info=res.data;
                    elem.children('.project_row').eq(1).children('.project_input').children('span').children('input').data('data-usid',info.milepostManagerId);
                    elem.children('.project_row').eq(1).children('.project_input').children('span').children('input').data('usname',info.milepostManagerName);
                    elem.children('.project_row').eq(1).children('.project_input').children('span').children('input').val(info.milepostManagerName);
                    elem.children('.project_row').eq(2).children('.project_input').children('textarea').val(info.milepostTarget);
                    var milepostBeginTime=info.milepostBeginTime?layui.tools.getDate(info.milepostBeginTime,"YYYY-MM-DD"):'';
                    var milepostEndTime=info.milepostEndTime?layui.tools.getDate(info.milepostEndTime,"YYYY-MM-DD"):'';
                    elem.children('.project_row').eq(3).children('.project_input').children('.project_input_date').eq(0).children('span').children('input').val(milepostBeginTime);
                    elem.children('.project_row').eq(3).children('.project_input').children('.project_input_date').eq(1).children('span').children('input').val(milepostEndTime);
                    if(info.projectMilepostResultEOList&&info.projectMilepostResultEOList.length!=0){
                        var html='';
                        var dateTime = new Date().getTime();
                        for (var i = 0; i <info.projectMilepostResultEOList.length ; i++) {
                            html+= '<div style="margin-bottom: 5px">' +
                                '<input name="input_'+dateTime+'7'+i+'" data-id="'+info.projectMilepostResultEOList[i].id+'" disabled type="text" value="'+info.projectMilepostResultEOList[i].fileName+'" title="原预计成果物" value="" adcform="adc_form_input" disabled class="layui-input" placeholder="原预计成果物" adcform_listctrlmark="" adcform_hide="0" adcform_fontsize="14" adcform_align="left" adcform_height="30" adcform_validate="adcformvalidate_none" style="box-sizing: border-box; font-size: 14px; text-align: left; height: 30px;background-color: rgba(248,248,248,1);">' +
                                '</div>';
                        }
                        elem.children('.project_row').eq(4).children('.project_input').empty().append(html);
                    }else{
                        elem.children('.project_row').eq(4).children('.project_input').children('div').children('input').val('');
                    }
                } else {
                    layer.msg(res.message, {
                        icon: 5
                    });
                }
            }, {
                method: 'get'
            });
        });
    },
    setOutcomes :function(outcomesId,type,data,privilege,readType,projectName){
        layui.use(['table'], function () {
            var table = layui.table;
            layui.admin.req('/api/progress/projectMilepost/'+outcomesId, {}, function (res) {
                if (res.ok) {
                    var parent_json = res.data;
                    var milepostBeginTime = parent_json.milepostBeginTime?layui.util.toDateString(parent_json.milepostBeginTime, 'yyyy-MM-dd'):'';
                    var milepostEndTime = parent_json.milepostEndTime?layui.util.toDateString(parent_json.milepostEndTime, 'yyyy-MM-dd'):'';
                    var finishTime =parent_json.finishTime?layui.util.toDateString(parent_json.finishTime, 'yyyy-MM-dd'):'';
                    var milepostTarget = parent_json.milepostTarget?parent_json.milepostTarget:'';
                    var con = '<div class="milestoneInfo" >' +
                        '<ul style="float: left; width: 40%;">' +
                        '<li><span style="color:#666;font-size: 14px">负责人：</span><span class="target-right">' + (parent_json.milepostManagerName ? parent_json.milepostManagerName : '') + '</span></li>' +
                        '<li><span style="color:#666;font-size: 14px">起止时间：</span><span class="target-right">' + milepostBeginTime + ' 至 ' + milepostEndTime + '</span></li>' +
                        '<li><span style="color:#666;font-size: 14px">完成时间：</span><span class="target-right">' + finishTime + '</span></li>' +
                        '</ul>' +
                        '<div style="float: right; width: 60%;height:68px"><span style="color:#666;font-size: 14px;font-weight: bold">目标：</span><span class="target-right" style="word-break: break-all;">' + milepostTarget + '</span></div>' +
                        '</div>' +
                        '<div class="milestone-box" style="width: 100%;"><table id="milestone-result" lay-filter="milestone-result"></table></div>' +
                        '<input name="milestoneInfo_id" type="text" title="里程碑" value="' + parent_json.id + '" adcform="adc_form_input" class="layui-input" adcform_hide="0" adcform_fontsize="14" adcform_align="left" adcform_height="30" adcform_validate="adcformvalidate_none" style="display: none">' +
                        '<input name="projectLeaderId" type="text" title="项目负责人ID" value="' + parent_json.projectLeaderId + '" adcform="adc_form_input" class="layui-input" adcform_hide="0" adcform_fontsize="14" adcform_align="left" adcform_height="30" adcform_validate="adcformvalidate_none" style="display: none">'+
                        '<input name="projectName" type="text" title="项目名称" value="' + (projectName?projectName:"") + '" adcform="adc_form_input" class="layui-input" adcform_hide="0" adcform_fontsize="14" adcform_align="left" adcform_height="30" adcform_validate="adcformvalidate_none" style="display: none">'+
                        '<input name="milestoneName" type="text" title="里程碑名称" value="' + parent_json.milepostName + '" adcform="adc_form_input" class="layui-input" adcform_hide="0" adcform_fontsize="14" adcform_align="left" adcform_height="30" adcform_validate="adcformvalidate_none" style="display: none">';
                    $('#milestone_details').empty().append(con);
                    var id = parent_json.id;
                    var renderAll = function (resData) {
                        table.render({
                            elem: '#milestone-result',
                            id: 'milestone-result',
                            data:resData,
                            cols: [
                                [{
                                    field: 'fileName',
                                    title: '成果物',
                                    templet: function (d) {
                                        var text = d.resultFileName ? d.resultFileName : "";
                                        return '<div title="' + text + '"><span>' + text + '</span></div>'
                                    }
                                }, {
                                    field: 'resultFileName',
                                    title: '文件名称',
                                    align: 'center',
                                    templet: function (d) {
                                        var text = d.fileName ? d.fileName : "";
                                        return '<div title="' + text + '"><span>' + text + '</span></div>'
                                    }
                                }, {
                                    field: 'fileSize',
                                    title: '大小',
                                    align: 'center',
                                    templet: function (d) {
                                        var text = d.fileSize ? d.fileSize : "";
                                        return '<div title="' + text + '"><span>' + text + '</span></div>'
                                    }
                                }, {
                                    field: 'uploadUserName',
                                    title: '上传人',
                                    align: 'center',
                                    templet: function (d) {
                                        var text = d.uploadUserName ? d.uploadUserName : "";
                                        return '<div title="' + text + '"><span>' + text + '</span></div>'
                                    }
                                }, {
                                    field: 'uploadTime',
                                    title: '上传时间',
                                    align: 'center',
                                    templet: function (d) {
                                        return d.uploadTime?layui.util.toDateString(d.uploadTime, 'yyyy-MM-dd'):'';
                                    }
                                }, {
                                    templet: '#control',
                                    title: '操作',
                                    align: 'center',
                                    unresize: true
                                }]
                            ],
                            limit: resData.length,
                            cellMinWidth: 80,
                            skin: 'row',
                            even: true
                        });
                        if(privilege==1||readType=='look'){
                            $('#milestone_details .upFile').css('display','none');
                        }else{
                            $('#milestone_details .upFile').css('display','inline-block');
                        }
                        table.on('tool(milestone-result)', function (obj) {
                            // 获取点击列的数据
                            var data = obj.data;
                            var layEvent = obj.event;
                            if (layEvent === 'download') {
                                window.location.href = "/ADC_info/api/progress/projectMilepostResult/" + data.fileId + '/download';
                            } else if (layEvent === 'upFile') {
                                var indexs=obj.tr[0].rowIndex;
                                var ele = obj.tr.children().eq(obj.tr.children().length - 1).children().children('input');
                                obj.tr.children().eq(obj.tr.children().length - 1).children().children('input').click();
                                ele.off('change').on('change', function (data) {
                                    if (this.files[0].size > 50 * 1024 * 1024) {
                                        return layui.layer.msg("上传文件大小不能超过 50M", {icon: 0});
                                    }
                                    var xhr = new XMLHttpRequest();
                                    xhr.open("POST", "/ADC_info/api/progress/projectMilepostResult/upload?remark=123&milepostResultId="+obj.data.id);
                                    var fd = new FormData();
                                    fd.append("file", this.files[0]);
                                    xhr.onload = function (e) {
                                        if (xhr.status === 200) {
                                            if (JSON.parse(xhr.responseText).ok) {
                                                var  res=JSON.parse(xhr.responseText).data;
                                                var objData=obj.data;
                                                objData.fileName=res.fileName;
                                                objData.fileId=res.fileId;
                                                objData.fileSize=res.fileSize;
                                                objData.uploadUserName=res.uploadUserName;
                                                objData.uploadUserId=res.uploadUserId;
                                                objData.uploadTime=res.uploadTime;
                                                var  cbList = table.cache['milestone-result'];
                                                cbList[indexs]=objData;
                                                renderAll(cbList)
                                            } else {

                                                layui.layer.msg(JSON.parse(xhr.responseText).message, {icon: 0});
                                            }
                                        } else if (xhr.status === 413) {
                                            layui.layer.msg("上传失败！上传文件大小不能超过 50M", {icon: 0});
                                        }
                                        else {
                                            layui.layer.msg("上传失败！请在控制台查看错误日志", {icon: 5});
                                            console.error(xhr);
                                        }
                                    };
                                    xhr.send(fd);
                                });
                            }
                        })
                    };
                    var renderTable = function (id) {
                        console.log("11111");
                        table.render({
                            elem: '#milestone-result',
                            id: 'milestone-result',
                            url: '/ADC_info/api/progress/projectMilepost/getMilepostResultAndFile/' + id,
                            parseData: function (res) {
                                return {
                                    "code": res.respCode, //解析接口状态
                                    "msg": res.message, //解析提示文本
                                    "data": res.data.projectMilepostResultVOList //解析数据列表
                                };
                            },
                            page:false,
                            cols: [
                                [{
                                    field: 'fileName',
                                    title: '成果物',
                                    templet: function (d) {
                                        var text = d.resultFileName ? d.resultFileName : "";
                                        return '<div title="' + text + '"><span>' + text + '</span></div>'
                                    }
                                }, {
                                    field: 'resultFileName',
                                    title: '文件名称',
                                    align: 'center',
                                    templet: function (d) {
                                        var text = d.fileName ? d.fileName : "";
                                        return '<div title="' + text + '"><span>' + text + '</span></div>'
                                    }
                                }, {
                                    field: 'fileSize',
                                    title: '大小',
                                    align: 'center',
                                    templet: function (d) {
                                        var text = d.fileSize ? d.fileSize : "";
                                        return '<div title="' + text + '"><span>' + text + '</span></div>'
                                    }
                                }, {
                                    field: 'uploadUserName',
                                    title: '上传人',
                                    align: 'center',
                                    templet: function (d) {
                                        var text = d.uploadUserName ? d.uploadUserName : "";
                                        return '<div title="' + text + '"><span>' + text + '</span></div>'
                                    }
                                }, {
                                    field: 'uploadTime',
                                    title: '上传时间',
                                    align: 'center',
                                    templet: function (d) {
                                        return d.uploadTime?layui.util.toDateString(d.uploadTime, 'yyyy-MM-dd'):'';
                                    }
                                }, {
                                    templet: '#control',
                                    title: '操作',
                                    align: 'center',
                                    unresize: true
                                }]
                            ],
                            cellMinWidth: 80,
                            skin: 'row',
                            even: true
                        });
                        if(privilege==1||readType=='look'){
                            $('#milestone_details .upFile').css('display','none');
                        }else{
                            $('#milestone_details .upFile').css('display','inline-block');
                        }
                        table.on('tool(milestone-result)', function (obj) {
                            // 获取点击列的数据
                            var data = obj.data;
                            var layEvent = obj.event;
                            if (layEvent === 'download') {
                                window.location.href = "/ADC_info/api/progress/projectMilepostResult/" + data.fileId + '/download';
                            } else if (layEvent === 'upFile') {
                                var indexs=obj.tr[0].rowIndex;
                                var ele = obj.tr.children().eq(obj.tr.children().length - 1).children().children('input');
                                obj.tr.children().eq(obj.tr.children().length - 1).children().children('input').click();
                                ele.off('change').on('change', function (data) {
                                    if (this.files[0].size > 50 * 1024 * 1024) {
                                        return layui.layer.msg("上传文件大小不能超过 50M", {icon: 0});
                                    }
                                    var xhr = new XMLHttpRequest();
                                    xhr.open("POST", "/ADC_info/api/progress/projectMilepostResult/upload?remark=123&milepostResultId="+obj.data.id);
                                    var fd = new FormData();
                                    fd.append("file", this.files[0]);
                                    xhr.onload = function (e) {
                                        if (xhr.status === 200) {
                                            if (JSON.parse(xhr.responseText).ok) {
                                                var  res=JSON.parse(xhr.responseText).data;
                                                var objData=obj.data;
                                                objData.fileName=res.fileName;
                                                objData.fileId=res.fileId;
                                                objData.fileSize=res.fileSize;
                                                objData.uploadUserName=res.uploadUserName;
                                                objData.uploadUserId=res.uploadUserId;
                                                objData.uploadTime=res.uploadTime;
                                                var  cbList = table.cache['milestone-result'];
                                                cbList[indexs]=objData;
                                                renderAll(cbList)
                                            } else {
                                                layui.layer.msg(JSON.parse(xhr.responseText).message, {icon: 0});
                                            }
                                        } else if (xhr.status === 413) {
                                            layui.layer.msg("上传失败！上传文件大小不能超过 50M", {icon: 0});
                                        }
                                        else {
                                            layui.layer.msg("上传失败！请在控制台查看错误日志", {icon: 5});
                                            console.error(xhr);
                                        }
                                    };
                                    xhr.send(fd);
                                });
                            }
                        })
                    };

                    if(type){
                        renderTable(id);
                    }else{
                        renderAll(data);
                    }
                } else {
                    layer.msg(res.message, {
                        icon: 5
                    });
                }
            }, {
                method: 'get'
            });

        })
    },
    // 任务交付物
    setTaskOutcomes :function(outcomesId,type,data,privilege,readType,projectName){
        layui.use(['table'], function () {
            var table = layui.table;
            layui.admin.req('/api/budget/taskResult/queryWithResult/'+outcomesId, {}, function (res) {
                if (res.ok) {
                    var parent_json = res.data;
                    var milepostBeginTime = parent_json.planStartTime?layui.util.toDateString(parent_json.planStartTime, 'yyyy-MM-dd'):'';
                    var milepostEndTime = parent_json.planEndTime?layui.util.toDateString(parent_json.planEndTime, 'yyyy-MM-dd'):'';
                    var finishTime =parent_json.finishedTime?layui.util.toDateString(parent_json.finishedTime, 'yyyy-MM-dd'):'';
                    var milepostTarget = parent_json.taskTarget?parent_json.taskTarget:'';
                    if(!parent_json.projectLeaderId){
                        parent_json.projectLeaderId=parent_json.pm;
                    }
                    var con = '<div class="milestoneInfo" >' +
                                    '<ul style="float: left; width: 40%;">' +
                                        '<li><span style="color:#666;font-size: 14px">任务成员：</span><span class="target-right">' + (parent_json.memberNames ? parent_json.memberNames : '') + '</span></li>' +
                                        '<li><span style="color:#666;font-size: 14px">起止时间：</span><span class="target-right">' + milepostBeginTime + ' 至 ' + milepostEndTime + '</span></li>' +
                                        '<li><span style="color:#666;font-size: 14px">完成时间：</span><span class="target-right">' + finishTime + '</span></li>' +
                                    '</ul>' +
                                '<div style="float: right; width: 60%;height:68px"><span style="color:#666;font-size: 14px;font-weight: bold">任务目标：</span><span class="target-right" style="word-wrap:break-word;">' + milepostTarget + '</span></div>' +
                                '</div>' +
                                '<div class="milestone-box" style="width: 100%;"><table id="taskmilestone-result" lay-filter="taskmilestone-result"></table></div>' +
                                '<input name="task_id" type="text" title="任务ID" value="' + parent_json.id + '" adcform="adc_form_input" class="layui-input" adcform_hide="0" adcform_fontsize="14" adcform_align="left" adcform_height="30" adcform_validate="adcformvalidate_none" style="display: none">' +
                                '<input name="projectLeaderId" type="text" title="项目负责人ID" value="' + parent_json.projectLeaderId + '" adcform="adc_form_input" class="layui-input" adcform_hide="0" adcform_fontsize="14" adcform_align="left" adcform_height="30" adcform_validate="adcformvalidate_none" style="display: none">';
                    // '<input name="projectName" type="text" title="项目名称" value="' + (projectName?projectName:"") + '" adcform="adc_form_input" class="layui-input" adcform_hide="0" adcform_fontsize="14" adcform_align="left" adcform_height="30" adcform_validate="adcformvalidate_none" style="display: none">'+
                    // '<input name="milestoneName" type="text" title="里程碑名称" value="' + parent_json.milepostName + '" adcform="adc_form_input" class="layui-input" adcform_hide="0" adcform_fontsize="14" adcform_align="left" adcform_height="30" adcform_validate="adcformvalidate_none" style="display: none">'
                    $('#task_milestone_details').empty().append(con);
                    var id = parent_json.id;
                    var renderAll = function (resData) {
                        table.render({
                            elem: '#taskmilestone-result',
                            id: 'taskmilestone-result',
                            data:resData,
                            cols: [
                                [{
                                    field: 'resultName',
                                    title: '成果物',
                                    templet: function (d) {
                                        var text = d.resultName ? d.resultName : "";
                                        return '<div title="' + text + '"><span>' + text + '</span></div>'
                                    }
                                }, {
                                    field: 'resultFileName',
                                    title: '文件名称',
                                    align: 'center',
                                    templet: function (d) {
                                        var text = d.fileName ? d.fileName : "";
                                        return '<div title="' + text + '"><span>' + text + '</span></div>'
                                    }
                                }, {
                                    field: 'fileSize',
                                    title: '大小',
                                    align: 'center',
                                    templet: function (d) {
                                        var text = d.fileSize ? d.fileSize : "";
                                        return '<div title="' + text + '"><span>' + text + '</span></div>'
                                    }
                                }, {
                                    field: 'uploadUserName',
                                    title: '上传人',
                                    align: 'center',
                                    templet: function (d) {
                                        var text = d.uploadUserName ? d.uploadUserName : "";
                                        return '<div title="' + text + '"><span>' + text + '</span></div>'
                                    }
                                }, {
                                    field: 'uploadTime',
                                    title: '上传时间',
                                    align: 'center',
                                    templet: function (d) {
                                        return d.uploadTime?layui.util.toDateString(d.uploadTime, 'yyyy-MM-dd'):'';
                                    }
                                }, {
                                    templet: '#control',
                                    title: '操作',
                                    align: 'center',
                                    unresize: true
                                }]
                            ],
                            limit: resData.length,
                            cellMinWidth: 80,
                            skin: 'row',
                            even: true
                        });
                        if(privilege==1||readType=='look'){
                            $('#task_milestone_details .upFile').css('display','none');
                        }else{
                            $('#task_milestone_details .upFile').css('display','inline-block');
                        }
                        table.on('tool(taskmilestone-result)', function (obj) {
                            // 获取点击列的数据
                            var data = obj.data;
                            var layEvent = obj.event;
                            if (layEvent === 'download') {
                                window.location.href = "/ADC_info/api/progress/projectMilepostResult/" + data.fileId + '/download';
                            } else if (layEvent === 'upFile') {
                                var indexs=obj.tr[0].rowIndex;
                                var ele = obj.tr.children().eq(obj.tr.children().length - 1).children().children('input');
                                obj.tr.children().eq(obj.tr.children().length - 1).children().children('input').click();
                                ele.off('change').on('change', function (data) {
                                    if (this.files[0].size > 50 * 1024 * 1024) {
                                        return layui.layer.msg("上传文件大小不能超过 50M", {icon: 0});
                                    }
                                    var xhr = new XMLHttpRequest();
                                    xhr.open("POST", "/ADC_info/api/sys/file/upload");
                                    var fd = new FormData();
                                    fd.append("file", this.files[0]);
                                    fd.append("foreignId", obj.data.id);
                                    fd.append("remark", '123');
                                    xhr.onload = function (e) {
                                        if (xhr.status === 200) {
                                            if (JSON.parse(xhr.responseText).ok) {
                                                var  res=JSON.parse(xhr.responseText).data;
                                                var objData=obj.data;
                                                objData.fileName=res.fileName;
                                                objData.fileId=res.fileId;
                                                objData.fileSize=res.fileSize;
                                                objData.uploadUserName=res.uploadUserName;
                                                objData.uploadUserId=res.uploadUserId;
                                                objData.uploadTime=res.createTime;
                                                var  cbList = table.cache['taskmilestone-result'];
                                                cbList[indexs]=objData;
                                                renderAll(cbList)
                                            } else {

                                                layui.layer.msg(JSON.parse(xhr.responseText).message, {icon: 0});
                                            }
                                        } else if (xhr.status === 413) {
                                            layui.layer.msg("上传失败！上传文件大小不能超过 50M", {icon: 0});
                                        }
                                        else {
                                            layui.layer.msg("上传失败！请在控制台查看错误日志", {icon: 5});
                                            console.error(xhr);
                                        }
                                    };
                                    xhr.send(fd);
                                });
                            }
                        })
                    };
                    var renderTable = function (id) {
                        console.log("2222");
                        table.render({
                            elem: '#taskmilestone-result',
                            id: 'taskmilestone-result',
                            url: '/api/progress/projectMilepost/getMilepostAndResult/' + id,
                            parseData: function (res) {
                                return {
                                    "code": res.respCode, //解析接口状态
                                    "msg": res.message, //解析提示文本
                                    "data": res.data.projectMilepostResultVOList //解析数据列表
                                };
                            },
                            page:false,
                            cols: [
                                [{
                                    field: 'fileName',
                                    title: '成果物',
                                    templet: function (d) {
                                        var text = d.resultFileName ? d.resultFileName : "";
                                        return '<div title="' + text + '"><span>' + text + '</span></div>'
                                    }
                                }, {
                                    field: 'resultFileName',
                                    title: '文件名称',
                                    align: 'center',
                                    templet: function (d) {
                                        var text = d.fileName ? d.fileName : "";
                                        return '<div title="' + text + '"><span>' + text + '</span></div>'
                                    }
                                }, {
                                    field: 'fileSize',
                                    title: '大小',
                                    align: 'center',
                                    templet: function (d) {
                                        var text = d.fileSize ? d.fileSize : "";
                                        return '<div title="' + text + '"><span>' + text + '</span></div>'
                                    }
                                }, {
                                    field: 'uploadUserName',
                                    title: '上传人',
                                    align: 'center',
                                    templet: function (d) {
                                        var text = d.uploadUserName ? d.uploadUserName : "";
                                        return '<div title="' + text + '"><span>' + text + '</span></div>'
                                    }
                                }, {
                                    field: 'uploadTime',
                                    title: '上传时间',
                                    align: 'center',
                                    templet: function (d) {
                                        return d.uploadTime?layui.util.toDateString(d.uploadTime, 'yyyy-MM-dd'):'';
                                    }
                                }, {
                                    templet: '#control',
                                    title: '操作',
                                    align: 'center',
                                    unresize: true
                                }]
                            ],
                            cellMinWidth: 80,
                            skin: 'row',
                            even: true
                        });
                        if(privilege==1||readType=='look'){
                            $('#milestone_details .upFile').css('display','none');
                        }else{
                            $('#milestone_details .upFile').css('display','inline-block');
                        }
                        table.on('tool(taskmilestone-result)', function (obj) {
                            // 获取点击列的数据
                            var data = obj.data;
                            var layEvent = obj.event;
                            if (layEvent === 'download') {
                                window.location.href = "/ADC_info/api/progress/projectMilepostResult/" + data.fileId + '/download';
                            } else if (layEvent === 'upFile') {
                                var indexs=obj.tr[0].rowIndex;
                                var ele = obj.tr.children().eq(obj.tr.children().length - 1).children().children('input');
                                obj.tr.children().eq(obj.tr.children().length - 1).children().children('input').click();
                                ele.off('change').on('change', function (data) {
                                    if (this.files[0].size > 50 * 1024 * 1024) {
                                        return layui.layer.msg("上传文件大小不能超过 50M", {icon: 0});
                                    }
                                    var xhr = new XMLHttpRequest();
                                    xhr.open("POST", "/ADC_info/api/sys/file/upload");
                                    var fd = new FormData();
                                    fd.append("file", this.files[0]);
                                    fd.append("foreignId", obj.data.id);
                                    xhr.onload = function (e) {
                                        if (xhr.status === 200) {
                                            if (JSON.parse(xhr.responseText).ok) {
                                                var  res=JSON.parse(xhr.responseText).data;
                                                var objData=obj.data;
                                                objData.fileName=res.fileName;
                                                objData.fileId=res.fileId;
                                                objData.fileSize=res.fileSize;
                                                objData.uploadUserName=res.uploadUserName;
                                                objData.uploadUserId=res.uploadUserId;
                                                objData.uploadTime=res.createTime;
                                                var  cbList = table.cache['taskmilestone-result'];
                                                cbList[indexs]=objData;
                                                renderAll(cbList)
                                            } else {
                                                layui.layer.msg(JSON.parse(xhr.responseText).message, {icon: 0});
                                            }
                                        } else if (xhr.status === 413) {
                                            layui.layer.msg("上传失败！上传文件大小不能超过 50M", {icon: 0});
                                        }
                                        else {
                                            layui.layer.msg("上传失败！请在控制台查看错误日志", {icon: 5});
                                            console.error(xhr);
                                        }
                                    };
                                    xhr.send(fd);
                                });
                            }
                        })
                    };

                    if(type){
                        renderAll(res.data.taskResultVOList);
                    }else{
                        renderAll(data);
                    }

                } else {
                    layer.msg(res.message, {
                        icon: 5
                    });
                }
            }, {
                method: 'get'
            });

        })
    },
    //绘制柱状图
    setBarCanvas: function (canvasId) {
        $(".imgOccupy").css("display","none");
        var oNode= document.getElementById(canvasId);
        var gTitle = oNode.getAttribute('title').replace(/&quot;/g, "\""),
            gType = oNode.getAttribute('adcform_type'),
            gUrl = oNode.getAttribute('adcform_url'),
            gxdata = oNode.getAttribute('adcform_xdata'),
            gydata = oNode.getAttribute('adcform_ydata'),
            gTheme = oNode.getAttribute('adcform_theme');
        $.ajax({
            url:"/api/model/model",
            type:"GET",
            data:{
                MId: gUrl
            },
            async:false,
            success:function (res) {
                if(res.ok){
                    if(res.data[0].mparam){
                        $.ajax({
                            url:"/api/dataset/page",
                            data:{
                                Param: res.data[0].mparam,
                                associates: res.data[0].massociates,
                                tableName: res.data[0].mtables
                            },
                            type:"GET",
                            async:false,
                            success:function (info) {
                                if(info.ok){
                                    //循环接口返回的字段名
                                   ADCFormDesignHelper.getBarInfo(info.data.list,canvasId)

                                }else{
                                    layui.layer.msg('获取信息失败！');
                                }
                            },
                            error:function (err) {
                                layui.layer.msg('获取信息失败！');
                            }
                        })
                    }else{
                        $.ajax({
                            url:"/api/dataset/forCode/"+res.data[0].mCode,
                            type:"GET",
                            async:false,
                            success:function (info) {
                                if(info.ok){
                                    //循环接口返回的字段名
                                    ADCFormDesignHelper.getBarInfo(info.data,canvasId)

                                }else{
                                    layui.layer.msg('获取信息失败！');
                                }
                            },
                            error:function (err) {
                                layui.layer.msg('获取信息失败！');
                            }
                        })
                    }
                }else{
                    layui.layer.msg('获取信息失败！');
                }
            },
            error:function (err) {
                layui.layer.msg('获取信息失败！');
            }
        });


    },
    getBarInfo:function(cur,canvasId){
        var oNode= document.getElementById(canvasId);
        var gTitle = oNode.getAttribute('title').replace(/&quot;/g, "\""),
            gType = oNode.getAttribute('adcform_type'),
            gxdata = oNode.getAttribute('adcform_xdata'),
            gydata = oNode.getAttribute('adcform_ydata'),
            gTheme = oNode.getAttribute('adcform_theme');
        //循环接口返回的字段名
        var xData=[] , yData=[];
        for(var i =0;i<cur.length;i++){
            xData.push(cur[i][gxdata]);
            yData.push(cur[i][gydata]);
        }
        // 图表初始化
        var myChart = echarts.init(document.getElementById(canvasId));
        myChart.resize();
        var option = {
            xAxis: {
                type: 'category',
                data: xData,
                axisTick:{
                    lineStyle:{color:'#3B4961'}    // x轴刻度的颜色
                },
                axisLabel:{color:'#3B4961'}
            },
            // tooltip: {
            //     padding: 10,
            //     formatter: function (obj) {
            //         var value = obj.value;
            //         return '人力投入（人天）：' + value;
            //     }
            // },
            // color: data.color,
            grid: {
                left: '3%',
                right: '4%',
                bottom: '5%',
                top: '10%',
                containLabel: true
            },
            yAxis: {
                type: 'value',
                axisTick:{
                    lineStyle:{color:'#3B4961'}    // x轴刻度的颜色
                },
                axisLabel:{color:'#3B4961'}
            },
            series: [{
                data: yData,
                type: 'bar'
            }]
        };

        myChart.setOption(option);
    },
    /**
     * 启动流程
     *
     * @param {*} data 原始数据，包含 processDefinitionId, contentHtml, privilege id项目ID  outcomesId里程碑ID  projectName项目名称  taskId 任务ID
     * @param {*} callback 回调函数  inspectContent 检查内容
     */

    startProcess: function (data, callback,id,outcomesId,projectName,inspectContent,taskId) {
        var content = data.data.contentHtml;
        if (data.data.id.indexOf('.html') > 0) {
            content = data.data.id;
        } else {
            content = ADCFormDesignHelper.formatHtml(content);
        }
        l = layer.open({
            type: 1,
            title: '启动流程',
            id: 'ADCFormDesignHelper-startProcess',
            content: content,
            area: ['80%', '90%'],
            btn: ['启动', '取消'],
            btnAlign: 'c',
            yes: function (index, layero) {
                $('#adcformdesign-submit').click();
            },
            success: function () {
                if(id){
                    ADCFormDesignHelper.formProjectNameGet(id,inspectContent);
                }
                if(outcomesId){
                    ADCFormDesignHelper.setOutcomes(outcomesId,true,false,false,false,projectName);
                }
                if(taskId){
                    ADCFormDesignHelper.setTaskOutcomes(taskId,true,false,false,false,'');
                }
                // 加权限
                if (data.data.id.indexOf('.html') < 0) {
                    ADCFormDesignHelper.formatPriv('#ADCFormDesignHelper-startProcess', JSON.parse(data.data.privilege));
                }
                layui.form.render();
                if($("#proMilepost").length!=0){
                    var idMilepost =$('.project_name select').attr('data-id');
                    ADCFormDesignHelper.setProjectInfo(idMilepost);
                }
                if($('#projectMemberInfo').length!=0){
                    var idProject=$('#ADCFormDesignHelper-startProcess select[title="项目名称"]').attr('data-id');
                    // if($('select[name="select_1562657453349"]' ).length!=0){
                    //     idProject = $('select[name="select_1562657453349"]' ).attr('data-id');
                    // }else{
                    //     idProject = $('select[name="selectBusiness_1562654917409"]' ).attr('data-id');
                    // }
                    ADCFormDesignHelper.setProjectMemberInfo(idProject);
                }
                if($('#projectMemberInfo').length!=0){
                    var idProject=$('#ADCFormDesignHelper-startProcess select[title="项目名称"]').attr('data-id');
                    ADCFormDesignHelper.setProjectMemberInfo(idProject);
                }
                if($('#researchStop').length!=0
                    ||$('#sicStartTable').length!=0
                    ||$('#sicTable').length!=0
                    ||$('#researchCheck').length!=0){
                    ADCFormDesignHelper.setResearchInfo($('#ADCFormDesignHelper-startProcess select[title="项目名称"]').attr('data-id'));
                }
                if($('#projectTable').length!=0){
                    var idProject=$('.milepost_text select[name="select_1564473766397"]' ).attr('data-id');
                    ADCFormDesignHelper.getLeaderInfo(idProject,$('#projectTable'));
                }
                layui.form.on('submit(adcformdesign)', function (d) {
                    var formdata = ADCFormDesignHelper.formdataGet('#ADCFormDesignHelper-startProcess', d.field);// formdata = d.field
                    layui.use(['element','laypage','tree','util','table','form','laydate','layedit'], function () {
                        var layedit = layui.layedit;
                        if($('#demoForm').length!=0){
                            formdata['textarea_1567502854371']=layedit.getContent(layedit.index);
                        }
                        if(formdata.milestoneResult && formdata.milestoneResult.length!=0){
                            console.log(formdata,'这里是完成任务的弹出');
                            for (var i = 0; i <formdata.milestoneResult.length ; i++) {
                                if(!formdata.milestoneResult[i].fileId){
                                    return  layer.msg('缺少成果交付物，请提交', {
                                        icon: 5
                                    });
                                }
                            }
                        }
                        console.log(formdata,'这里是完成任务的弹出');
                        if(formdata.taskmilestoneResult && formdata.taskmilestoneResult.length!=0){
                            for (var i = 0; i <formdata.taskmilestoneResult.length ; i++) {
                                if(!formdata.taskmilestoneResult[i].fileId){
                                    return  layer.msg('缺少成果交付物，请提交', {
                                        icon: 5
                                    });
                                }
                            }
                        }
                        for(var items in formdata){
                            if(items=='select_1567409760846'&&!formdata[items]){
                                return  layer.msg('无检查内容', {
                                    icon: 5
                                });
                            }
                        }
                        var arrMiledpostName=[];
                        if(formdata.milepostArr&&formdata.milepostArr.length!=0){
                            for (var i = 0; i < formdata.milepostArr.length; i++) {
                                if(arrMiledpostName.indexOf(formdata.milepostArr[i].name.value)==-1){
                                    arrMiledpostName.push(formdata.milepostArr[i].name.value)
                                }else{
                                    return  layer.msg('存在相同的里程碑名称，请重新填写', {
                                        icon: 5
                                    });
                                }
                            }
                        }
                        var arrMilepostId=[];
                        var milepostNameArr=[];
                        var milepostData=[];
                        if(formdata.proMilepostArr&&formdata.proMilepostArr.length!=0){
                            for (var i = 0; i <formdata.proMilepostArr.length ; i++) {
                                if(formdata.proMilepostArr[i].id){
                                    if(arrMilepostId.indexOf(formdata.proMilepostArr[i].id)==-1){
                                        arrMilepostId.push(formdata.proMilepostArr[i].id);
                                    }else{
                                        return  layer.msg('存在相同的里程碑变更，请重新填写', {
                                            icon: 5
                                        });
                                    }
                                }
                                if(milepostNameArr.indexOf(formdata.proMilepostArr[i].newName.value)==-1){
                                    milepostNameArr.push(formdata.proMilepostArr[i].newName.value)
                                }else{
                                    return  layer.msg('存在相同的新里程碑名称，请重新填写', {
                                        icon: 5
                                    });
                                }
                                if(formdata.proMilepostArr[i].newName.value!==formdata.proMilepostArr[i].oldName.value){
                                    milepostData.push(formdata.proMilepostArr[i].newName.value);
                                }
                            }
                            $.ajax({
                                url: "/api/progress/projectMilepost/queryCountByNameList",
                                type: 'post',
                                data:JSON.stringify({
                                    'milepostNameArr':milepostData,
                                    'projectId':formdata['select_1564650327815_proid']
                                }),
                                contentType:"application/json",
                                async:false,
                                traditional:true,
                                success: function (res) {
                                    if (res.ok) {
                                        if(res.data){
                                            return  layer.msg(res.data+'名称重复，请重新填写', {
                                                icon: 5
                                            });
                                        }else{
                                            formdata = JSON.stringify(formdata);
                                            var processKey = data.processKey;
                                            var makeupoliet = {
                                                processDefinitionId: data.processId,
                                                processDefinitionKey:data.processDefinitionKey,
                                                formData: formdata,
                                                message: '发起人'
                                            };
                                            ADCFormDesignHelper.startActivity(makeupoliet,callback,data);
                                        }

                                    }
                                }
                            });
                        }else{
                            formdata = JSON.stringify(formdata);
                            var processKey = data.processKey;
                            var makeupoliet = {
                                processDefinitionId: data.processId,
                                processDefinitionKey:data.processDefinitionKey,
                                formData: formdata,
                                message: '发起人'
                            };
                            // if(data.processDefinitionKey=='pdc2fb60b480c413982c876bedcda0249 '){
                            //     var processInstanceName = d.processInstanceName ? ('['+d.processInstanceName+']') : '';
                            //     if(!processInstanceName){
                            //         processInstanceName=d.name ? d.name : '';
                            //     }
                            //     var projectName = data.projectName ? data.projectName : '';
                            //     var milestoneName = data.milestoneName ? data.milestoneName : '';
                            //     var initiatorName = d.initiatorName ? d.initiatorName : '';
                            //     text = processInstanceName + '-' + projectName + '项目-' + milestoneName + '里程碑-' + initiatorName;
                            //     makeupoliet.variables=[{
                            //         name:"ACT_BUSINESS_NAME",
                            //         value:"["+JSON.parse(formdata)[""]+"]-"+d.name
                            //     }]
                            // }
                            ADCFormDesignHelper.startActivity(makeupoliet,callback,data);
                        }
                    });
                });
            }
        });
    },
    //项目进度一览携带项目名称
    formProjectNameGet:function(id,inspectContent){
        if($('#researchStop').length!=0
            ||$('#sicStartTable').length!=0
            ||$('#sicTable').length!=0
            ||$('#researchCheck').length!=0){
            $('#ADCFormDesignHelper-startProcess select[title="项目名称"]')[0].dataset.name=$('#ADCFormDesignHelper-startProcess select[title="项目名称"] option[value='+id+']')[0].id;
            $('#ADCFormDesignHelper-startProcess select[title="项目名称"]')[0].dataset.id=$('#ADCFormDesignHelper-startProcess select[title="项目名称"] option[value='+id+']').val();
            $('#ADCFormDesignHelper-startProcess select[title="项目名称"] option[value='+id+']').prop('selected', 'selected');
            ADCFormDesignHelper.setResearchInfo(id);
        }else{
            $('#ADCFormDesignHelper-startProcess select[title="项目名称"]')[0].dataset.name=$('#ADCFormDesignHelper-startProcess select[title="项目名称"] option[id='+id+']').val();
            $('#ADCFormDesignHelper-startProcess select[title="项目名称"]')[0].dataset.id=$('#ADCFormDesignHelper-startProcess select[title="项目名称"] option[id='+id+']')[0].id;
            $('#ADCFormDesignHelper-startProcess select[title="项目名称"] option[id='+id+']').prop('selected', 'selected');
        }
        $('#ADCFormDesignHelper-startProcess select[title="项目名称"]').attr('disabled', 'disabled');
        $('#ADCFormDesignHelper-startProcess select[title="项目名称"]').removeAttr('lay-search');
        if($('#proMilepost').length!=0){
            ADCFormDesignHelper.setProjectInfo(id);
        }
        if($('#projectMemberInfo').length!=0){
            ADCFormDesignHelper.setProjectMemberInfo(id);
        }
        if($('#proAssess').length!=0){
            ADCFormDesignHelper.setProjectAssessInfo(id);
        }
        if($('#projectTable').length!=0){
            ADCFormDesignHelper.getLeaderInfo(id,$('#projectTable'));
        }
        ADCFormDesignHelper.setProjectContent(id,false,inspectContent);
        ADCFormDesignHelper.metaphaseContent(id,true);
        var setList= function (dataId){
            $.ajax({
                url:"/api/FinWorkTimeStatistics/findUserWorkTimeByProjectId?projectId="+dataId,
                type:"GET",
                contentType: 'application/json',
                async:false,
                success:function (data) {
                    var tableLength = $('#table>tbody>tr').length;
                    $('input[name=input_1_0_listctrl_jxa5d0p7]').val('');
                    $('input[name=input_1_1_listctrl_jxa5d0p7]').val('');
                    $('input[name=input_1_2_listctrl_jxa5d0p7]').val('');
                    $('input[name=sum_1_3_listctrl_jxa5d0p7]').val('');
                    $('input[name=sum_1_4_listctrl_jxa5d0p7]').val('');
                    for(var j=0;j<tableLength;j++){
                        if(j!=0&&j!=1&&j!=(tableLength-1)){
                            $('#table>tbody>tr').eq(j).addClass('removeItem')
                        }
                    }
                    $('.removeItem').remove();
                    var item=$('.addItem')[0];
                    var numTime=$('input[name=sum_1_3_listctrl_jxa5d0p7]')[0];
                    var numCost=$('input[name=sum_1_4_listctrl_jxa5d0p7]')[0];
                    for(var i=0;i<data.data.length;i++){
                        if (i != 0){
                            addLine(item,data.data[i])
                            tableNum(item);
                        } else if(i == 0){
                            $('input[name=input_1_0_listctrl_jxa5d0p7]').val(i+1);
                            $('input[name=input_1_1_listctrl_jxa5d0p7]').val(data.data[i].userName);
                            $('input[name=input_1_2_listctrl_jxa5d0p7]').val(data.data[i].workLevel);
                            $('input[name=sum_1_3_listctrl_jxa5d0p7]').val(data.data[i].workTime);
                        }
                    }
                    numbersum(numTime);
                    numbersum(numCost);
                    layui.form.render('select');
                    // $("#adcform_list");
                },
                error:function (err) {
                    layer.msg('获取信息失败！');
                    console.log(err);
                }
            })
        };
        if($('input[name=input_1_0_listctrl_jxa5d0p7]').length!=0){
            setList(id);
        }
        layui.form.render('select');
    },
    /**
     * 获取表单内填写的数据
     *
     * @param {*} elem 容器选择器名
     * @param {*} data 表单信息
     */
    formdataGet: function (elem, data) {
        if($('.milepost_right_box').length>0){
            var arr=[];
            for (var i = 0; i <$('.milepost_right_box').length ; i++) {
                var temp =$('.milepost_right_box').eq(i);
                arr.push({
                    name:{
                        value:temp.children().eq(0).children('.milepost_text').children('input').val(),
                        name:temp.children().eq(0).children('.milepost_text').children('input').attr('name')
                    },
                    user:{
                        usname:temp.children().eq(1).children('.milepost_text').children('select').attr('data-name'),
                        usid:temp.children().eq(1).children('.milepost_text').children('select').attr('data-id'),
                        name:temp.children().eq(1).children('.milepost_text').children('select').attr('name')
                    },
                    target:{
                        value:temp.children().eq(2).children('.milepost_text').children('textarea').val(),
                        name:temp.children().eq(2).children('.milepost_text').children('textarea').attr('name')
                    },
                    date:{
                        value:temp.children().eq(3).children('.milepost_text').children('span').children('input').val(),
                        name:temp.children().eq(3).children('.milepost_text').children('span').children('input').attr('name')
                    },
                    outcomes:[

                    ]
                });
                for (var j = 0; j < temp.children().eq(4).children('.milepost_text').children('div').length; j++) {
                    arr[i].outcomes.push({
                        value:temp.children().eq(4).children('.milepost_text').children('div').eq(j).children('input').val(),
                        name:temp.children().eq(4).children('.milepost_text').children('div').eq(j).children('input').attr('name')
                    })
                }

            }
            data.milepostArr=arr;
            data.milepostList=$('.milepost_right_box').length;
        }
        if($('.milepost_project_box').length>0){
            var arr=[];
            for (var i = 0; i <$('.milepost_project_box').length ; i++) {
                var temp = $('.milepost_project_box').eq(i);
                arr.push({
                    id:temp.children().eq(0).children('.project_input').children('select').attr('data-id'),
                    oldName:{
                        value:temp.children().eq(0).children('.project_input').children('select').val(),
                        name:temp.children().eq(0).children('.project_input').children('select').attr('name'),
                    },
                    newName:{
                        value:temp.children().eq(5).children('.project_input').children('input').val(),
                        name:temp.children().eq(5).children('.project_input').children('input').attr('name'),
                    },
                    oldUser:{
                        usid:temp.children().eq(1).children('.project_input').children('span').children('input').attr('data-id'),
                        usname:temp.children().eq(1).children('.project_input').children('span').children('input').val(),
                        name:temp.children().eq(1).children('.project_input').children('span').children('input').attr('name'),
                    },
                    newUser:{
                        usid:temp.children().eq(6).children('.project_input').children('select').attr('data-id'),
                        usname:temp.children().eq(6).children('.project_input').children('select').val(),
                        name:temp.children().eq(6).children('.project_input').children('select').attr('name'),
                    },
                    oldTarget:{
                        value:temp.children().eq(2).children('.project_input').children('textarea').val(),
                        name:temp.children().eq(2).children('.project_input').children('textarea').attr('name'),
                    },
                    newTarget:{
                        value:temp.children().eq(7).children('.project_input').children('textarea').val(),
                        name:temp.children().eq(7).children('.project_input').children('textarea').attr('name'),
                    },
                    oldDate:{
                        startValue:temp.children().eq(3).children('.project_input').children('.project_input_date').eq(0).children('span').children('input').val(),
                        startName:temp.children().eq(3).children('.project_input').children('.project_input_date').eq(0).children('span').children('input').attr('name'),
                        endName:temp.children().eq(3).children('.project_input').children('.project_input_date').eq(1).children('span').children('input').attr('name'),
                        endValue:temp.children().eq(3).children('.project_input').children('.project_input_date').eq(1).children('span').children('input').val(),
                    },
                    newDate:{
                        startValue:temp.children().eq(8).children('.project_input').children('.project_input_date').eq(0).children('span').children('input').val(),
                        startName:temp.children().eq(8).children('.project_input').children('.project_input_date').eq(0).children('span').children('input').attr('name'),
                        endName:temp.children().eq(8).children('.project_input').children('.project_input_date').eq(1).children('span').children('input').attr('name'),
                        endValue:temp.children().eq(8).children('.project_input').children('.project_input_date').eq(1).children('span').children('input').val(),
                    },
                    newOutcomes:[],
                    oldOutcomes:[],
                });
                for (var j = 0; j < temp.children().eq(4).children('.project_input').children('div').length; j++) {
                    arr[i].oldOutcomes.push({
                        id:temp.children().eq(4).children('.project_input').children('div').eq(j).children('input').attr('data-id'),
                        value:temp.children().eq(4).children('.project_input').children('div').eq(j).children('input').val(),
                        name:temp.children().eq(4).children('.project_input').children('div').eq(j).children('input').attr('name')
                    })
                }
                for (var x = 0; x < temp.children().eq(9).children('.project_input').children('div').length; x++) {
                    arr[i].newOutcomes.push({
                        value:temp.children().eq(9).children('.project_input').children('div').eq(x).children('input').val(),
                        name:temp.children().eq(9).children('.project_input').children('div').eq(x).children('input').attr('name')
                    });
                }
            }
            data.proMilepostArr=arr;
            data.costId=$(".proBudget").attr('data-id');
        }
        if($('#milestone-result').length!=0){
            data.milestoneResult=layui.table.cache['milestone-result'];
        }
        if($('#taskmilestone-result').length!=0){
            data.taskmilestoneResult=layui.table.cache['taskmilestone-result'];
        }
        for (var name in data) {
            var type = name.split('_')[0];
            switch (type) {
                case 'checkbox':
                    // 复选框，需要手动获取选择的内容
                    var checkboxArray = $(elem + ' input[name="' + name + '"]'),
                        checkboxValue = [];
                    for (var i = 0; i < checkboxArray.length; i++) {
                        if (checkboxArray[i].checked) checkboxValue.push(checkboxArray[i].value);
                    }
                    data[name] = checkboxValue.join('|');
                    break;
                case 'inputuserselect':
                    // 人员选择，增加 usid usname
                    var el = $(elem + ' input[name="' + name + '"]'),
                        usid = el.attr("data-usid"),
                        usname = el.attr("data-usname");
                    data[name + '_usid'] = usid;
                    data[name + '_usname'] = usname;
                    break;
                case 'selectMember':
                    // 人员选择，增加 usid usname
                    var el = $(elem + ' select[name="' + name + '"]'),
                        usid = el.attr("data-usid"),
                        usname = el.attr("data-usname");
                    data[name + '_usid'] = usid;
                    data[name + '_usname'] = usname;
                    break;

                case 'inputorgselect':
                    // 组织机构选择，增加 id name
                    var el = $(elem + ' input[name="' + name + '"]'),
                        orgid = el.attr("data-id"),
                        orgname = el.attr("data-name");
                    data[name + '_id'] = orgid;
                    data[name + '_name'] = orgname;
                    break;
                case 'file':
                    // 文件上传
                    var info = name.split('_');
                    if (info.length === 2) {
                        var el = document.querySelector(elem + ' input[name="' + name + '"]');
                        data[name] = el.dataset.filename;
                    }
                    break;
                case 'select':
                    // 组织机构选择，增加 id name
                    var el = $(elem + ' select[name="' + name + '"]'),
                        selectid = el.attr("data-id"),
                        selectname =el.attr("data-name");
                    if(selectid&&selectname){
                        data[name + '_proid'] = selectid;
                        data[name + '_proname'] = selectname;
                    }
                    break;
                case 'selectBusiness':
                    // 组织机构选择，增加 id name
                    var el = $(elem + ' select[name="' + name + '"]'),
                        selectid = el.attr("data-id"),
                        selectname = el.attr("data-name");
                    if(selectid&&selectname){
                        data[name + '_proid'] = selectid;
                        data[name + '_proname'] = selectname;
                    }
                    break;

                case 'selectResearch':
                    // 组织机构选择，增加 id name
                    var el = $(elem + ' select[name="' + name + '"]'),
                        selectid = el.attr("data-id"),
                        selectname = el.attr("data-name");
                    if(selectid&&selectname){
                        data[name + '_proid'] = selectid;
                        data[name + '_proname'] = selectname;
                    }
                    break;
                default:
                    break;
            }
        }
        return data;
    },

    /**
     * 将数据填入表单内
     *
     * @param {*} elem 容器选择器名
     * @param {*} data 表单信息
     */
    formdataUpdate: function (elem, data,privilege,readType,raw_data) {
        console.log(data,12138);
        var arrVal=[];
        var leaderArr=[];
        var milestoneInfo='';
        var taskId='';
        var projectMemberId='';
        var contentArr=[];
        for (var name in data) {
            console.log('aaa',name);
            if(name=='milestoneInfo_id'){
                milestoneInfo=data[name];
            }
            if(name=='task_id'){
                taskId=data[name];
            }
            if(name=='milestoneResult'){
                ADCFormDesignHelper.setOutcomes(milestoneInfo,false,data[name],privilege.uploadFile,readType,data.projectName);
            }
            if(name=='taskmilestoneResult'){
                ADCFormDesignHelper.setTaskOutcomes(taskId,false,data[name],privilege.uploadFile,readType,data.projectName);
            }
            var type = name.split('_')[0];
            if(name=='projectName'||name=='milestoneName'){
                var el = $(elem + ' input[name="' + name + '"]');
                el.val(data[name])
            }
            switch (type) {
                case 'int':
                case 'sum':
                    // 数值
                case 'input':
                    // 单行输入框
                    var el = $(elem + ' input[name="' + name + '"]');
                    el.val(data[name]);
                    break;
                    // var el = $(elem + ' input[name="' + name + '"]');
                    // el.val(data[name]);
                    // break;

                case 'textarea':
                    // 多行输入框
                    var el = $(elem + ' textarea[name="' + name + '"]');
                    el.val(data[name]);
                        layui.use(['element','laypage','tree','util','table','form','laydate','layedit'], function () {
                            if(name=='textarea_1567502854371'&&$('#demoForm').length!=0){
                                var layedit = layui.layedit;
                                layedit.setContent(layedit.index,data[name]);
                            }
                        })
                    break;
                case 'select':
                    // 下拉菜单
                    var el = $(elem + ' select[name="' + name + '"]');
                    var arr=[];
                    var str='';
                    if(name.split('_')[2]=='proid'){
                        arr.push(name.split('_')[0]);
                        arr.push(name.split('_')[1]);
                        str=arr.join('_');
                        $(elem + ' select[name="' + str + '"]')[0].dataset.id=data[name];

                    }
                    if(name.split('_')[2]=='proname'){
                        arr.push(name.split('_')[0]);
                        arr.push(name.split('_')[1]);
                        str=arr.join('_');
                        $(elem + ' select[name="' + str + '"]')[0].dataset.name=data[name];
                    }
                    //里程碑ID回显
                    if(name.split('_')[3]=='proid'){
                        arr.push(name.split('_')[0]);
                        arr.push(name.split('_')[1]);
                        arr.push(name.split('_')[2]);
                        str=arr.join('_');
                        $(elem + ' select[name="' + str + '"]')[0].dataset.id=data[name];

                    }
                    if(name.split('_')[3]=='proname'){
                        arr.push(name.split('_')[0]);
                        arr.push(name.split('_')[1]);
                        arr.push(name.split('_')[2]);
                        str=arr.join('_');
                        $(elem + ' select[name="' + str + '"]')[0].dataset.name=data[name];
                    }
                    //负责人D回显
                    if(name.split('_')[4]=='proid'){
                        arr.push(name.split('_')[0]);
                        arr.push(name.split('_')[1]);
                        arr.push(name.split('_')[2]);
                        arr.push(name.split('_')[3]);
                        str=arr.join('_');
                        $(elem + ' select[name="' + str + '"]')[0].dataset.id=data[name];

                    }
                    if(name.split('_')[4]=='proname'){
                        arr.push(name.split('_')[0]);
                        arr.push(name.split('_')[1]);
                        arr.push(name.split('_')[2]);
                        arr.push(name.split('_')[3]);
                        str=arr.join('_');
                        $(elem + ' select[name="' + str + '"]')[0].dataset.name=data[name];
                    }

                    if(name.split('_')[2]=='milepost'){
                        arrVal.push({
                            name:name,
                            value:data[name]
                        })
                    }
                    if(name.split('_')[2]=='leader'){
                        leaderArr.push({
                            name:name,
                            value:data[name]
                        })
                    }
                    if(name=='select_1567409760846'){
                        contentArr.push({
                            value:data[name]
                        })
                    }
                    el.val(data[name]);
                    if(name=='select_1564650327815_proid'){
                        var optionData ={
                            "projectId":data[name],
                        };
                        if(raw_data&&raw_data.name.indexOf('发起人修改')!=-1){
                            optionData.notUsed='notUsed';
                        }
                        layui.admin.req('/api/progress/projectMilepost/page4Tips', optionData, function (res){
                            if (res.ok) {
                                var cur = res.data.list;
                                var  option='<option value="" >请选择</option>';
                                for (var i = 0; i < cur.length; i++) {
                                    var land = cur[i];
                                    if(land.extInfo5){
                                     var arrLand = land.extInfo5.split(',');
                                     for(var k = 0 ; k < arrLand.length; k++){
                                         option += '<option value="' + arrLand[k] + '" >' + arrLand[k] +
                                             '</option>';
                                     }
                                    }
                                    option += '<option value="' + land.milepostName + '" id="'+ land.id + '">' + land.milepostName +
                                        '</option>';
                                }
                                $('#proMilepost select[title="原里程碑名称"]').empty().append(option);
                                for (var i = 0; i <arrVal.length ; i++) {
                                    $(elem + ' select[name="' + arrVal[i].name + '"]').val(arrVal[i].value);
                                }
                                layui.form.render('select');
                            } else {
                                layer.msg(res.message, {
                                    icon: 5
                                });
                            }
                        }, {method: 'post'});
                        layui.admin.req('/api/progress/projectBudgetChange/getByProjectId/'+data[name], {}, function (res){
                            if (res.ok) {
                                var cur = res.data.mapList;
                                var  option='<option value="" >请选择</option>';
                                for (var i = 0; i < cur.length; i++) {
                                    var land = cur[i];
                                    option += '<option value="' + land.name + '" id="' + land.id + '">' + land.name +
                                        '</option>';
                                }
                                $('#proMilepost select[title="新负责人"]').empty().append(option);
                                for (var i = 0; i <leaderArr.length ; i++) {
                                    $(elem + ' select[name="' + leaderArr[i].name + '"]').val(leaderArr[i].value);
                                }
                                layui.form.render('select');
                            } else {
                                layer.msg(res.message, {
                                    icon: 5
                                });
                            }
                        }, {
                            method: 'get'
                        });
                    }
                    if(name=='select_1564473766397_proid'){
                        layui.admin.req('/api/progress/projectBudgetChange/getByProjectId/'+data[name], {}, function (res){
                            if (res.ok) {
                                var cur = res.data.mapList;
                                var  option='<option value="" >请选择</option>';
                                for (var i = 0; i < cur.length; i++) {
                                    var land = cur[i];
                                    option += '<option value="' + land.name + '" id="'+ land.id + '">' + land.name +
                                        '</option>';
                                }
                                $('#projectTable select').empty().append(option);
                                // if(cur.length!=0){
                                //     $('#projectTable select')[0].dataset.name=cur[0].name;
                                //     $('#projectTable select')[0].dataset.id=cur[0].id;
                                // }
                                for (var i = 0; i <arrVal.length ; i++) {
                                    $(elem + ' select[name="' + arrVal[i].name + '"]').val(arrVal[i].value);
                                }
                                layui.form.render();
                            } else {
                                layer.msg(res.message, {
                                    icon: 5
                                });
                            }
                        }, {method: 'get'});
                    }
                    if(name=='select_1562657453349_proid'){
                        projectMemberId=data[name];
                    }
                    break;
                //成员绩效表单下拉框值注入
                case 'selectMember':
                    if(name.split('_')[2]=='usname'){
                        var usname=data[name];
                        layui.admin.req('/api/progress/projectBudgetChange/getByProjectIdNew?id='+projectMemberId+"&usname="+data[name], {}, function (res){
                            if (res.ok) {
                                var cur = res.data.mapList;
                                var  option='';
                                for (var i = 0; i < cur.length; i++) {
                                    var land = cur[i];
                                    option += '<option value="' + land.name + '" id="' + land.id + '">' + land.name +
                                        '</option>';
                                }
                                $('#projectMemberInfo').empty().append(option);
                                $('#projectMemberInfo').val(usname);
                                layui.form.render('select');
                            } else {
                                layer.msg(res.message, {
                                    icon: 5
                                });
                            }
                        }, {
                            method: 'get'
                        });
                    }

                    break;
                case 'selectBusiness':
                    // 下拉菜单
                    var el = $(elem + ' select[name="' + name + '"]');
                    var arr=[];
                    var str='';
                    if(name.split('_')[2]=='proid'){
                        arr.push(name.split('_')[0]);
                        arr.push(name.split('_')[1]);
                        str=arr.join('_');
                        $(elem + ' select[name="' + str + '"]')[0].dataset.id=data[name];

                    }
                    if(name.split('_')[2]=='proname'){
                        arr.push(name.split('_')[0]);
                        arr.push(name.split('_')[1]);
                        str=arr.join('_');
                        $(elem + ' select[name="' + str + '"]')[0].dataset.name=data[name];
                    }
                    el.val(data[name]);
                    if(name=='selectBusiness_1567406165420_proid'){
                        if(contentArr.length!=0){
                            ADCFormDesignHelper.setProjectContent(data[name],contentArr);
                        }
                    }
                    if(name=='selectBusiness_1562654917409_proid'){
                        projectMemberId=data[name];
                    }
                    break;
                case 'selectResearch':
                    // 下拉菜单
                    var el = $(elem + ' select[name="' + name + '"]');
                    var arr=[];
                    var str='';
                    if(name.split('_')[2]=='proid'){
                        arr.push(name.split('_')[0]);
                        arr.push(name.split('_')[1]);
                        str=arr.join('_');
                        $(elem + ' select[name="' + str + '"]')[0].dataset.id=data[name];

                    }
                    if(name.split('_')[2]=='proname'){
                        arr.push(name.split('_')[0]);
                        arr.push(name.split('_')[1]);
                        str=arr.join('_');
                        $(elem + ' select[name="' + str + '"]')[0].dataset.name=data[name];
                    }
                    el.val(data[name]);
                    break;
                case 'radio':
                    // 单选框
                    var el = $(elem + ' input[name="' + name + '"]');
                    for (var i = 0; i < el.length; i++) {
                        if (el[i].value === data[name]) el[i].checked = true;
                    }
                    if(name=='radio_1564650341241'&&data[name]=='是'){
                        $('.proDepartment').css('display','block');
                    }
                    if(name=='radio_1564650489079'&&data[name]=='是'){
                        $('.proMember').css('display','block');
                    }
                    if(name=='radio_1564650583053'&&data[name]=='是'){
                        $('.proSituation').css('display','block');
                    }
                    if(name=='radio_1564650640720'&&data[name]=='是'){
                        $('.proDate').css('display','block');
                    }
                    if(name=='radio_1564650885130'&&data[name]=='是'){
                        $('.proBudget').css('display','block');
                    }
                    if(name=='radio_1582522007759'&&data[name]=='是'){
                        $('.proLead').css('display','block');
                    }
                    if(name=='radio_1564711119020'&&data[name]=='是'){
                        $('.proMilepost').css('display','block');
                        if(privilege.projectChange=='2'){
                             $('#del_milepost_btn').css('display', 'inline-block');
                             $('#add_milepost_btn').css('display', 'inline-block');
                        }

                    }
                    break;
                case 'checkbox':
                    // 复选框
                    var el = $(elem + ' input[name="' + name + '"]'),
                        val = data[name].split('|');
                    for (var i = 0; i < el.length; i++) {
                        for (var j = 0; j < val.length; j++) {
                            if (el[i].value === val[j]) {
                                el[i].checked = true;
                                break;
                            }
                        }
                    }
                    break;
                case 'file':
                    // 文件上传
                    var fileInfo = name.split('_');
                     if (fileInfo.length === 3 && fileInfo[2] === 'fileid' && data[name] !== '') {
                        var el = $(elem + ' input[name="' + name + '"]');
                        el.val(data[name]);
                        // 保存文件名
                        var elName = [fileInfo[0], fileInfo[1]].join('_');
                        document.querySelector(elem + ' input[name="' + elName + '"]').dataset.filename = data[elName];

                        var prefix = [fileInfo[0], fileInfo[1]].join('_');
                        $(elem + ' input[name="' + prefix + '"]').css('display', 'none');
                        $(elem + ' button[name="' + prefix + '_upload"]').css('display', 'none');
                        $(elem + ' button[name="' + prefix + '_download"]').css('display', 'inherit');
                        $(elem + ' button[name="' + prefix + '_del"]').css('display', 'inherit');
                        $(elem + ' button[name="' + prefix + '_del"]').on('click', function () {
                            $('.' + prefix + '_tip').remove();
                        });

                        // var name = data[elName];
                        // var subname=name.substr(name.lastIndexOf('\\')+1,name.length-1);
                        // $(elem + ' button[name="' + prefix + '_download"]').before('<div class="' + prefix + '_tip">' + subname  + '</div>');
                    }
                    break;
                case 'datetime':
                    // 日期时间选择
                    var el = $(elem + ' input[name="' + name + '"]');
                    el.val(data[name]);
                    break;
                case 'inputorgselect':
                    // 组织机构选择
                    var info = name.split('_');
                    if (info.length >= 2) {
                        var el = $(elem + ' input[name="' + name + '"]'),
                            oid = data[name + '_id'],
                            oname = data[name + '_name'];
                        el.val(data[name]);
                        el.attr('data-id', oid);
                        el.attr('data-name', oname);
                    }
                    break;
                case 'inputuserselect':
                    // 人员选择
                    var info = name.split('_');
                    if (info.length >= 2) { //做了修改，如果用===来判断，列表控件的内容填入不进去
                        var el = $(elem + ' input[name="' + name + '"]'),
                            oid = data[name + '_usid'],
                            oname = data[name + '_usname'];
                        el.val(data[name]);
                        el.attr('data-usid', oid);
                        el.attr('data-usname', oname);
                    }
                    break;
                case 'selectMember':
                    // 人员选择
                        var el = $(elem + ' select[name="' + name + '"]'),
                            oid = data[name + '_usid'],
                            oname = data[name + '_usname'];
                        el.val(data[name]);
                        el.attr('data-usid', oid);
                        el.attr('data-usname', oname);
                    break;
                default:
                    break;
            }
        }
        // var timeFormOut = setTimeout(function () {
        //     var arrElem =["input"]
        //     $(elem +" ")
        // },0)
    },
    startActivity: function startProcess(makeupoliet,callback,data) {
        var startFun =function () {
            layui.admin.req('/api/userInfo', "", function (res) {
                if (res.ok) {
                    layui.admin.req('/api/activiti/repository/startProcess', makeupoliet, function (res) {
                        if (res.ok) {
                            layer.msg('启动流程成功！', {
                                icon: 1
                            });
                            // 获取到数据，执行回掉函数
                            callback && typeof callback === 'function' && callback();
                            layer.close(l);
                        } else {
                            layer.msg('启动流程失败！' + res.message, {
                                icon: 5
                            });
                        }
                    }, {
                        method: 'post'
                    });
                } else {
                    layer.msg(res.message, {
                        icon: 5
                    });
                }
            }, {
                method: 'get'
            });
        }
        layer.confirm('确认要启动该流程？', {
            icon: 3,
            title: '提示'
        }, function () {
            if(data.processDefinitionKey=="p1f7644df2b8f4eeebe8d75a28bf9d76e"){
                // console.log(JSON.parse(666666)
                // makeupoliet.formData["inputuserselect_1564650579087_usid"])
                // makeupoliet.formData["inputuserselect_1564650579087_usname"]
                var optionPro ={
                    id:JSON.parse(makeupoliet.formData)["select_1564650327815_proid"],
                    projectMemberIds:JSON.parse(makeupoliet.formData)["inputuserselect_1564650579087_usid"].split(",")
                };
                console.log(444444);
                $.ajax({
                    url: "/api/budget/project/checkChangeMember",
                    type: 'post',
                    data:JSON.stringify(optionPro),
                    contentType: 'application/json',
                    success: function (res) {
                        if (res.ok) {
                            if(res.data.ok){
                                startFun();
                            }else{
                                return layer.msg(res.data.message, {
                                    icon: 5
                                });
                            }
                        } else {
                            return layer.msg(res.message, {
                                icon: 5
                            });
                        }
                    },
                    error: function (err) {
                        return layer.msg(err.message, {
                            icon: 5
                        });
                    }
                });
            }else{
                startFun();
            }
        });
    },
    /**
     * 为表单加权限
     *
     * @param {*} elem 容器选择器名
     * @param {*} priv 权限信息
     */
    formatPriv: function (elem, priv) {
        // 权限控制：0 不可见; 1 只读; 2 可编辑; 3 必填;
        var dealPriv = [
            function (target) {
                target.css('display', 'none');
            },
            function (target) {
                target.attr('disabled', 'disabled');
            },
            function (target) {},
            function (target) {
                target.attr('required', 'required');
                var varify = el.attr('lay-verify');
                varify = varify ? varify : '';
                varify = varify.split('|');
                if (varify.length === 1 && varify[0] === '') varify = [];
                varify.push('required');
                el.attr('lay-verify', varify.join('|'));
            }
        ];
        for (var name in priv) {
            var type = name.split('_')[0];
            var value = parseInt(priv[name], 10);
            switch (type) {
                case 'input':
                    // 单行输入框
                    var el = $(elem + ' input[name="' + name + '"]');
                    dealPriv[value](el);
                    var temp=el.attr("adcform_validate");
                    if(typeof(temp)!="undefined"){
                        var validate = 'adcformdesign_'+el.attr('adcform_validate').split('_')[1];
                        var varify = el.attr('lay-verify');
                        varify = varify ? varify : '';
                        varify = varify.split('|');
                        if (varify.length === 1 && varify[0] === '') varify = [];
                        varify.push(validate);
                        el.attr('lay-verify', varify.join('|'));
                    }
                    break;
                case 'radio':
                    // 单选框
                    var el = $(elem + ' input[name="' + name + '"]');
                    dealPriv[value](el);
                    var validate = 'adcformdesign_radio';

                    var varify = el.attr('lay-verify');
                    varify = varify ? varify : '';
                    varify = varify.split('|');
                    if (varify.length === 1 && varify[0] === '') varify = [];
                    varify.push(validate);
                    el.attr('lay-verify', varify.join('|'));
                    break;
                case 'checkbox':
                    // 复选框
                    var el = $(elem + ' input[name="' + name + '"]');
                    dealPriv[value](el);
                    var validate = 'adcformdesign_checkbox';

                    var varify = el.attr('lay-verify');
                    varify = varify ? varify : '';
                    varify = varify.split('|');
                    if (varify.length === 1 && varify[0] === '') varify = [];
                    varify.push(validate);
                    el.attr('lay-verify', varify.join('|'));
                    break;
                case 'datetime':
                // 日期时间选择
                case 'inputuserselect':
                // 人员选择
                case 'inputorgselect':
                    // 组织机构选择
                    var el = $(elem + ' input[name="' + name + '"]');
                    dealPriv[value](el);
                    break;
                case 'textarea':
                    // 多行输入框
                    var el = $(elem + ' textarea[name="' + name + '"]');
                    dealPriv[value](el);
                    if(name=='textarea_1567502854371'&&$('#demoForm').length!=0&&value==1){
                        layui.use(['element','laypage','tree','util','table','form','laydate','layedit'], function () {
                            var layedit = layui.layedit;
                            $('#LAY_layedit_'+layedit.index).contents().find("body").attr('contenteditable',false);
                        })
                    }
                    break;
                case 'selectBusiness':
                    // 下拉菜单
                    var el = $(elem + ' select[name="' + name + '"]');
                    if(value=='1'){
                        $('#adcformdesign-table-td select[title="项目名称"]').removeAttr('lay-search');
                    }
                    dealPriv[value](el);
                    break;
                case 'selectResearch':
                    // 下拉菜单
                    var el = $(elem + ' select[name="' + name + '"]');
                    if(value=='1'){
                        $('#adcformdesign-table-td select[title="项目名称"]').removeAttr('lay-search');
                    }
                    dealPriv[value](el);
                    break;
                case 'select':
                    // 下拉菜单
                    var el = $(elem + ' select[name="' + name + '"]');
                    if(value=='1'){
                        $('#adcformdesign-table-td select[title="项目名称"]').removeAttr('lay-search');
                    }
                    dealPriv[value](el);
                    break;
                case 'selectMember':
                    // 下拉菜单
                    var el = $(elem + ' select[name="' + name + '"]');
                    dealPriv[value](el);
                    break;
                case 'file':
                    // 文件上传
                    switch (value) {
                        case 0:
                        case 1:
                             // 不可见 只读
                            var el1 = $(elem + ' input[name="' + name + '"]');
                            dealPriv[1](el1);
                            var el2 = $(elem + ' button[name="' + name + '_upload"]');
                            //文件上传控件回显权限控制
                            dealPriv[1](el2);
                            // var el3 = $(elem + ' button[name="' + name + '_download"]');
                            // dealPriv[2](el3);
                            var el4 = $(elem + ' button[name="' + name + '_del"]');
                            el4.css('display', 'none');
                            dealPriv[1](el4);
                            break;
                        case 2:
                            // 可编辑
                            break;
                        case 3:
                            // 必填
                            var el = $(elem + ' input[name="' + name + '_fileid"]');
                            dealPriv[3](el);
                            break;
                    }
                    break;
                case 'table':
                    //列表控件
                    var el = $(elem + ' td[name="' + name + '"]');
                    var num = name.split('_')[name.split('_').length-1];
                    var table = el.parent().parent();
                    switch (value) {
                        case 0:
                        case 1:
                            // 不可见 只读
                            for (j = 0;j<table.length;j++){
                                for (i = 1; i < table[j].children.length; i++) {
                                    if(td1 = table[j].rows[i].getAttribute('name') != 'sum'){
                                        var td1 = table[j].rows[i].cells[num - 1].children[0];
                                        td1.disabled = 'disabled';
                                    }
                                }
                            }
                            if(name=='table_1562052646880_2'){
                                $('.pull-right').css('display','none');
                            }
                            break;
                        case 2:
                            // 可编辑
                            break;
                        case 3:
                            //必填
                            for (j = 0;j<table.length;j++){
                                for (i = 1; i < table[j].children.length; i++) {
                                    var td1 = table[j].rows[i].cells[num - 1].children[0];
                                    td1.required = 'required';
                                }
                            }
                            break;
                    }
                    break;
                case 'milepost':
                    // 里程碑权限
                    if(value==1){
                        ADCFormDesignHelper.formatPrivReadonlyForm('.milepost_form')
                    }
                    break;
                case 'projectChange':
                    // 项目变更权限
                    if(value==1){
                        ADCFormDesignHelper.formatPrivReadonlyForm('#proMilepost')
                    }
                    break;
                default:
                    break;
            }
        }
        var dateChange=function(data){
            var str = data.replace(/-/g,'/');
            var date = new Date(str).getTime();
            return date;
        };
        // layui 表单验证
        layui.form.verify({
            // 验证必填单选框是否填写
            adcformdesign_radio: function (value, item) {
               var endValue= $(item).parent().parent().siblings('.project_input_date').children().children('input').val();
                if(endValue&&dateChange(value)>dateChange(endValue)){
                    return '开始时间大于结束时间，请重新填写'
                }
            },
            // 验证必填单选框是否填写
            adcformdesign_radio: function (value, item) {
                var required = $(item).attr('lay-verify').indexOf('required') >= 0,
                    name = $(item).attr('name'),
                    title = $(item).data('name'),
                    radioArray = $('input[name="' + name + '"]'),
                    checked = false;
                for (var i = 0; i < radioArray.length; i++) {
                    if (radioArray[i].checked) checked = true;
                }
                if (required && !checked) return title + ' 为必填项';
            },
            // 验证必填复选框是否填写
            adcformdesign_checkbox: function (value, item) {
                var required = $(item).attr('lay-verify').indexOf('required') >= 0,
                    name = $(item).attr('name'),
                    title = $(item).data('name'),
                    checkboxArray = $('input[name="' + name + '"]'),
                    checked = false;
                for (var i = 0; i < checkboxArray.length; i++) {
                    if (checkboxArray[i].checked) checked = true;
                }
                if (required && !checked) return title + ' 为必填项';
            },

            adcformdesign_none: function (value, item) {},
            adcformdesign_mobile: function (value, item) {
                if (value != '' && !/^1[3|4|5|6|7|8]\d{9}$/.test(value)) {
                    return '手机号格式不正确';
                }
            },
            adcformdesign_phone: function (value, item) {
                if (value != '' && !/^\d{8}$/.test(value)) {
                    return '座机号格式不正确';
                }
            },
            adcformdesign_mobileorphone: function (value, item) {
                if (value != '' && !/^1[3|4|5|6|7|8]\d{9}$/.test(value) && !/^\d{8}$/.test(value)) {
                    return '手机号格式不正确';
                }
            },
            adcformdesign_email: function (value, item) {
                if ( value!=''&&!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)) {
                    return '邮箱格式不正确';
                }
            },
            adcformdesign_idcard: function (value, item) {
                if (value != '' && !/\d{18}/.test(value)) {
                    return '身份证号格式不正确';
                }
            },
            adcformdesign_qq: function (value, item) {
                if (value != '' && !/\d{6,10}/.test(value)) {
                    return 'QQ 格式不正确';
                }
            },
            adcformdesign_number: function (value, item) {
                try {
                    var el = $(item);
                    var tip = el.attr('title') || el.attr('placeholder') || '';
                } catch (err) {}
                if (!/\d*/.test(value) && value != '') {
                    return tip + ' 只能输入数字';
                }
            },
            adcformdesign_word: function (value, item) {
                try {
                    var el = $(item);
                    var tip = el.attr('placeholder') || el.attr('title') || '';
                } catch (err) {}
                if (!/[\u4e00-\u9fa5]+/.test(value) && value != '') {
                    return tip + ' 必须包含汉字';
                }
            },
            adcformdesign_english: function (value, item) {
                try {
                    var el = $(item);
                    var tip = el.attr('title') || el.attr('placeholder') || '';
                } catch (err) {}
                if (!/[A-Za-z]*/.test(value) && value != '') {
                    return tip + ' 只能输入英文';
                }
            }

        });
    },
    /**
     * 为表单加权限
     *
     * @param {*} elem 容器选择器名
     * @param {*} priv 权限信息
     */
    formatPrivReadonlyForm: function (elem) {
        var inputElem = $(elem + ' input'),
            textareaElem = $(elem + ' textarea'),
            selectElem = $(elem + ' select'),
            buttonElem = $(elem + ' button');
        inputElem.attr('disabled', 'disabled');
        textareaElem.attr('disabled', 'disabled');
        selectElem.attr('disabled', 'disabled');
        buttonElem.attr('disabled', 'disabled');
        $(elem + ' select[title="项目名称"]').removeAttr('lay-search');
        //所有文件控件下载按钮移除只读属性
        for (var i = 0; i <buttonElem.length ; i++) {
            if(buttonElem.eq(i).html()=='下载'){
                buttonElem.eq(i).removeAttr('disabled');
            }
        }
        if($('#projectTable').length!=0){
            $(elem + ' .milepost_info #add_project_btn').css('display','none');
            $(elem + ' .milepost_info #del_project_btn').css('display','none');
            $(elem + ' #projectTable .clickImg').css('display','none');
        }
        if($('#proMilepost').length!=0){
            $('.project_change_form .clickImg').css('display','none');
            $('#add_milepost_btn').css('display','none');
            $('#del_milepost_btn').css('display','none');
        }
        //禁用layui富文本编辑器
        if($('#demoForm').length!=0){
            layui.use(['element','laypage','tree','util','table','form','laydate','layedit'], function () {
                var layedit = layui.layedit;
                $('#LAY_layedit_'+layedit.index).contents().find("body").attr('contenteditable',false);
            })
        }
    },


    /**
     * 将表单权限设置为只读
     *
     * @param {*} elem
     */
    formatPrivReadonly: function (elem, priv) {
        // 权限控制：0 不可见; 1 只读; 2 可编辑; 3 必填;
        var dealPriv = [
            function (target) {
                target.css('display', 'none');
            },
            function (target) {
                target.attr('disabled', 'disabled');
            },
            function (target) {
                target.attr('disabled', 'disabled');
            },
            function (target) {
                target.attr('disabled', 'disabled');
            }
        ];
        for (var name in priv) {
            var type = name.split('_')[0];
            var value = parseInt(priv[name], 10);
            switch (type) {
                case 'input':
                    // 单行输入框
                    var el = $(elem + ' input[name="' + name + '"]');
                    dealPriv[value](el);
                    break;
                case 'radio':
                    // 单选框
                    var el = $(elem + ' input[name="' + name + '"]');
                    dealPriv[value](el);
                    break;
                case 'checkbox':
                    // 复选框
                    var el = $(elem + ' input[name="' + name + '"]');
                    dealPriv[value](el);

                    break;
                case 'datetime':
                // 日期时间选择
                case 'inputuserselect':
                // 人员选择
                case 'inputorgselect':
                    // 组织机构选择
                    var el = $(elem + ' input[name="' + name + '"]');
                    dealPriv[value](el);
                    break;
                case 'textarea':
                    // 多行输入框
                    var el = $(elem + ' textarea[name="' + name + '"]');
                    dealPriv[value](el);
                    //禁用layui富文本编辑器
                    if(name=='textarea_1567502854371'&&$('#demoForm').length!=0&&value==1){
                        layui.use(['element','laypage','tree','util','table','form','laydate','layedit'], function () {
                            var layedit = layui.layedit;
                            $('#LAY_layedit_'+layedit.index).contents().find("body").attr('contenteditable',false);
                        })
                    }
                    break;
                case 'select':
                    // 下拉菜单
                    var el = $(elem + ' select[name="' + name + '"]');
                    if(value=='1'){
                        $('#ADCFormDesignHelper-startProcess select[title="项目名称"]').removeAttr('lay-search');
                    }
                    dealPriv[value](el);
                    break;
                case 'selectMember':
                    // 下拉菜单
                    var el = $(elem + ' select[name="' + name + '"]');
                    dealPriv[value](el);
                    break;
                case 'selectBusiness':
                    // 下拉菜单
                    var el = $(elem + ' select[name="' + name + '"]');
                    if(value=='1'){
                        $('#ADCFormDesignHelper-startProcess select[title="项目名称"]').removeAttr('lay-search');
                    }
                    dealPriv[value](el);
                    break;
                case 'selectResearch':
                    // 下拉菜单
                    var el = $(elem + ' select[name="' + name + '"]');
                    if(value=='1'){
                        $('#ADCFormDesignHelper-startProcess select[title="项目名称"]').removeAttr('lay-search');
                    }
                    dealPriv[value](el);
                    break;
                case 'file':
                    // 文件上传
                    var el1 = $(elem + ' input[name="' + name + '"]');
                    var el2 = $(elem + ' button[name="' + name + '_upload"]');
                    // var el3 = $(elem + ' button[name="' + name + '_download"]');
                    var el4 = $(elem + ' button[name="' + name + '_del"]');
                    dealPriv[value](el1);
                    dealPriv[value](el2);
                    // dealPriv[value](el3);
                    dealPriv[value](el4);

                    break;
                case 'table':
                    //列表控件
                    var el = $(elem + ' td[name="' + name + '"]');
                    var num = name.split('_')[name.split('_').length-1];
                    var table = el.parent().parent();
                    switch (value) {
                        case 0:
                        case 1:
                            // 不可见 只读
                            for (i = 1; i < table.children("tr").length; i++) {
                                if(td1 = table[0].rows[i].getAttribute('name') != 'sum') {
                                    var td1 = table[0].rows[i].cells[num - 1].children;
                                    td1[0].disabled = 'disabled';
                                }
                            }
                            break;
                        case 2:
                            // 可编辑
                            break;
                        case 3:
                            //必填
                            for (i = 0; i < table.rows.length; i++) {
                                var td1 = table[0].rows[i].cells[num - 1].children;
                                td1[0].required = 'required';
                            }
                            break;
                    }
                    break;
                case 'milepost':
                    // 里程碑权限
                    if(value==1){
                        ADCFormDesignHelper.formatPrivReadonlyForm('.milepost_form')
                    }
                    break;
                case 'projectChange':
                    // 项目变更权限
                    if(value==1){
                        ADCFormDesignHelper.formatPrivReadonlyForm('#proMilepost')
                    }
                    break;
                default:
                    break;
            }
        }

        // layui 表单验证
        layui.form.verify({
            // 验证必填单选框是否填写
            adcformdesign_radio: function (value, item) {
                var required = $(item).attr('lay-verify').indexOf('required') >= 0,
                    name = $(item).attr('name'),
                    title = $(item).data('name'),
                    radioArray = $('input[name="' + name + '"]'),
                    checked = false;
                for (var i = 0; i < radioArray.length; i++) {
                    if (radioArray[i].checked) checked = true;
                }
                if (required && !checked) return title + ' 为必填项';
            },
            // 验证必填复选框是否填写
            adcformdesign_checkbox: function (value, item) {
                var required = $(item).attr('lay-verify').indexOf('required') >= 0,
                    name = $(item).attr('name'),
                    title = $(item).data('name'),
                    checkboxArray = $('input[name="' + name + '"]'),
                    checked = false;
                for (var i = 0; i < checkboxArray.length; i++) {
                    if (checkboxArray[i].checked) checked = true;
                }
                if (required && !checked) return title + ' 为必填项';
            },

            adcformdesign_none: function (value, item) {},
            adcformdesign_mobile: function (value, item) {
                if (value != '' && !/^1[3|4|5|6|7|8]\d{9}$/.test(value)) {
                    return '手机号格式不正确';
                }
            },
            adcformdesign_phone: function (value, item) {
                if (value != '' && !/^\d{8}$/.test(value)) {
                    return '座机号格式不正确';
                }
            },
            adcformdesign_mobileorphone: function (value, item) {
                if (value != '' && !/^1[3|4|5|6|7|8]\d{9}$/.test(value) && !/^\d{8}$/.test(value)) {
                    return '手机号格式不正确';
                }
            },
            adcformdesign_email: function (value, item) {
                if ( value!=''&&!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)) {
                    return '邮箱格式不正确';
                }
            },
            adcformdesign_idcard: function (value, item) {
                if (value != '' && !/\d{18}/.test(value)) {
                    return '身份证号格式不正确';
                }
            },
            adcformdesign_qq: function (value, item) {
                if (value != '' && !/\d{6,10}/.test(value)) {
                    return 'QQ 格式不正确';
                }
            },
            adcformdesign_number: function (value, item) {
                try {
                    var el = $(item);
                    var tip = el.attr('title') || el.attr('placeholder') || '';
                } catch (err) {}
                if (!/\d*/.test(value) && value != '') {
                    return tip + ' 只能输入数字';
                }
            },
            adcformdesign_word: function (value, item) {
                try {
                    var el = $(item);
                    var tip = el.attr('title') || el.attr('placeholder') || '';
                } catch (err) {}
                if (!/[\u4e00-\u9fa5]+/.test(value) && value != '') {
                    return tip + ' 只能输入汉字';
                }
            },
            adcformdesign_english: function (value, item) {
                try {
                    var el = $(item);
                    var tip = el.attr('title') || el.attr('placeholder') || '';
                } catch (err) {}
                if (!/[A-Za-z]*/.test(value) && value != '') {
                    return tip + ' 只能输入英文';
                }
            }

        });
    }
};
// 选人插件
// 调用该方法可以调起 iframe 弹窗
// 在弹窗内进行人员选择
// 该方法接受两个个参数：
// 1. 数据对象，所有需要传递到选人弹窗的数据
// 2. 回掉函数，会在选完人点击确定的时候将选中的数据以数组的方式回传
/*function personnelSelect(data, callback) {
    var layerIns100 = layer.open({
        type: 2,
        id: 'personnelSelect',
        title: '请选择',
        content: 'components/tpl/task_personnel_select.html',
        area: ['96%', '80%'],
        btn: ['确定', '取消'],
        yes: function (index, layero) {
            var finalData = $('#personnelSelect iframe')[0].contentWindow
                .task_personnel_select.finish();
            // 获取到数据，执行回掉函数
            callback && typeof callback === 'function' && callback(finalData, index);
        },
        success: function () {
            layui.form.render();
            // 执行 iframe 内的方法
            $('#personnelSelect iframe')[0].contentWindow.task_personnel_select
                .init(data);
        },
        resize: false
    });
}*/
