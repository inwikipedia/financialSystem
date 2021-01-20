(function () {
   
    if($('.layui-layer-title').length>0)
    {
        var permissionTitle = $('.layui-layer-title')[0].innerText;

    }
    else{
        var permissionTitle='查看任务'
    }
  
  
    //获取页面所有input标签
    var tmp = $('#adcformdesign-table-td').find('[adcform = "adc_form_listctrl"]');
    var dateInput = $('#adcformdesign-table-td').find('[adcform = "adc_form_input"]');
    var departmentID = $('#adcformdesign-table-td').find('[adcform = "adc_form_org_select"]');
    var remarkData = $('#adcformdesign-table-td').find('[name="remark"]');
    //存储年、月、部门、备注文本框
    var inputDom = [];
    var tmpDom = [];
    var departDom = [];
    var remarkDom = [];
    var tableDateControlDom = [];
    var disInputDom = [];
    //为部门选择添加不可选
    $('#adcformdesign-table-td').find('[adcform="adc_form_org_select"]').each(function () {
        $(this).attr('disabled', true);
    })
    //列表控件dom数组
    tmp.each(function () {
        tmpDom.push($(this));
    })
    //年月dom数组
    dateInput.each(function () {
        if ($(this)[0].getAttribute('adcform_listctrlmark') == undefined) {
            inputDom.push($(this));
        } else if ($(this)[0].getAttribute('adcform_listctrlmark') != undefined) {
            disInputDom.push($(this));
        }
    })
    for (var r = 0; r < disInputDom.length; r++) {
        disInputDom[r].attr('disabled', true);
    }
    //部门dom数组
    departmentID.each(function () {
        departDom.push($(this));
    })
    //备注dom数组
    remarkData.each(function () {
        remarkDom.push($(this));
    })
    //流程实例ID
    var processInstanceId = layui.config.businessParam.processInstanceId;
    if (permissionTitle.indexOf('新增项目') == -1 && permissionTitle.indexOf('启动流程') == -1) {
        //获取启动流程时存入的年月数据，渲染上下两个表单的年月
        $.ajax({
            url: "/api/project/projectSchedule/selectByUserDeptAndProType?processInstId=" + processInstanceId + "&projectType=1-执行情况&classType=0",
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            async: false,
            success: function (data) {
                var list = data.data;
                if (list[0] != undefined) {
                    var yearData = list[0].year.split('^^');
                    inputDom[0][0].value = yearData[2];
                    var monthData = list[0].month.split('^^');
                    inputDom[1][0].value = monthData[2];
                    if (monthData[2] == '12') {
                        inputDom[2][0].value = parseFloat(yearData[2]) + 1;
                        inputDom[3][0].value = '1';
                    } else {
                        inputDom[2][0].value = yearData[2];
                        inputDom[3][0].value = parseFloat(monthData[2]) + 1;
                    }
                }
            },
            error: function () {
                layui.msg('获取数据失败');
                return;
            }
        })
        var apiUrl1 = "/api/project/projectSchedule/selectByUserDeptAndProType?processInstId=" + processInstanceId + "&projectType=行业工作&classType=0";
        var apiUrl2 = "/api/project/projectSchedule/selectByUserDeptAndProType?processInstId=" + processInstanceId + "&projectType=科研与技术创新&classType=0";
        var apiUrl3 = "/api/project/projectPlan/selectByUserDeptAndProType?processInstId=" + processInstanceId + "&projectType=行业工作&classType=0";
        if(permissionTitle.indexOf('管理部汇总') > 0){
            apiUrl1 = "/api/project/projectSchedule/selectByUserDeptAndProType?processInstId=" + processInstanceId + "&projectType=s行业工作&classType=0";
            apiUrl2 = "/api/project/projectSchedule/selectByUserDeptAndProType?processInstId=" + processInstanceId + "&projectType=s科研与技术创新&classType=0";
            apiUrl3 = "/api/project/projectPlan/selectByUserDeptAndProType?processInstId=" + processInstanceId + "&projectType=s行业工作&classType=0";
        }
        //第一个列表控件的数据回显
        $.ajax({
            url: apiUrl1,
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            async: false,
            success: function (data) {
                var list = data.data;
                if (list.length > 0) {
                    tmpDom[0][0].children[0].children[1].style.display = 'none';
                } else {
                    tmpDom[0][0].children[0].children[1].style.display = 'table-row'
                }
                tableRender(tmpDom[0], list, inputDom[0], inputDom[1]);
            },
            error: function () {
                layui.msg('获取数据失败');
                return;
            }
        })
        //第二个列表控件的数据回显
        $.ajax({
            url: apiUrl2,
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            async: false,
            success: function (data) {
                var list = data.data;
                if (list.length > 0) {
                    tmpDom[1][0].children[0].children[1].style.display = 'none';
                } else {
                    tmpDom[1][0].children[0].children[1].style.display = 'table-row'
                }
                tableRender(tmpDom[1], list, inputDom[0], inputDom[1]);
            },
            error: function () {
                layui.msg('获取数据失败');
                return;
            }
        })
        //第三个列表控件的数据回显
        $.ajax({
            url: apiUrl3,
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            async: false,
            success: function (data) {
                var list = data.data;
                if (list.length > 0) {
                    tmpDom[2][0].children[0].children[1].style.display = 'none';
                } else {
                    tmpDom[2][0].children[0].children[1].style.display = 'table-row'
                }
                tableRender(tmpDom[2], list, inputDom[2], inputDom[3]);
            },
            error: function () {
                layui.msg('获取数据失败');
                return;
            }
        })
    }
    //时间控件自动保存方法
    var tableDateControl = tmpDom[2].find('[name = "datetime"]');
    tableDateControl.each(function () {
        tableDateControlDom.push($(this));
    })
    for (var y = 0; y < tableDateControlDom.length; y++) {
        var domII = tableDateControlDom[y][0].children[0];
        var id = domII.getAttribute('id');
        var name = domII.getAttribute('name');
        var dateValue = domII.value;
        $(domII).remove();
        tableDateControlDom[y][0].innerHTML = "<input name = '" + name + "'id = '" + id + "'readonly = 'readonly' class = 'layui-input' value = '" + dateValue + "'>";
        layui.laydate.render({
            elem: "#" + id,
            done: function () {
                var that = $(this)[0].elem;
                var str = {
                    "cooperationDepartment": "",
                    "department": "",
                    "extInf01": "",
                    "extInf02": "",
                    "extInf03": "",
                    "extInf04": "",
                    "extInf05": "",
                    "finishTime": "",
                    "id": "",
                    "majorPerson": "",
                    "mark": "",
                    "month": "",
                    "participant": "",
                    "progressTarget": "",
                    "projectContent": "",
                    "projectName": "",
                    "projectType": "",
                    "year": ""
                };
                var inputArray = new Array();
                var tr1 = $(that).parent().parent();
                for (var dd = 0; dd < tr1.find('td').length; dd++) {
                    var inputName = tr1[0].children[dd].children[0].getAttribute('name');
                    inputArray.push(inputName);
                    var table = $(that).parent().parent().parent().parent();
                    var inputType = table[0].children[0].children[0].cells[dd].innerText;
                    var domI = tr1[0].children[dd].children[0];
                    formCtrl.inputStr(inputArray, inputType, domI, str);
                    inputArray = [];
                }
                var tableid = table[0].getAttribute('tableid');
                var j = table[0].rows.length;
                str.remark = tableid + "^^" + "remark" + "^^" + table[0].rows[j - 1].children[0].children[0].value;
                str.year = inputDom[2][0].getAttribute('name') + "^^" + "year" + "^^" + inputDom[2][0].value;
                str.month = inputDom[3][0].getAttribute('name') + "^^" + "month" + "^^" + inputDom[3][0].value;
                str.projectType = '行业工作';
                str.department = departDom[1][0].getAttribute('data-id');
                str.extInf01 = processInstanceId;
                str.extInf02 = '0';
                var message = formCtrl.notNull($(that));
                console.log(message);
                if (message) {
                    formCtrl.transferData(str,tr1[0]);
                } else {
                    return;
                }
            }
        })
    }
    //统计项目数目
    if (tmpDom[0][0].children[0].children[1].style.display == 'none') {
        $('#adcformdesign-table-td').find('[adcform_listctrlmark="列表控件"]')[0].value = tmpDom[0].children().children().length - 3;
    } else if (tmpDom[0][0].children[0].children[1].style.display != 'none') {
        $('#adcformdesign-table-td').find('[adcform_listctrlmark="列表控件"]')[0].value = tmpDom[0].children().children().length - 2;
    }
    if (tmpDom[1][0].children[0].children[1].style.display == 'none') {
        $('#adcformdesign-table-td').find('[adcform_listctrlmark="列表控件1"]')[0].value = tmpDom[1].children().children().length - 3;
    } else if (tmpDom[1][0].children[0].children[1].style.display != 'none') {
        $('#adcformdesign-table-td').find('[adcform_listctrlmark="列表控件1"]')[0].value = tmpDom[1].children().children().length - 2;
    }
    if (tmpDom[2][0].children[0].children[1].style.display == 'none') {
        $('#adcformdesign-table-td').find('[adcform_listctrlmark="列表控件2"]')[0].value = tmpDom[2].children().children().length - 2;
    } else if (tmpDom[2][0].children[0].children[1].style.display != 'none') {
        $('#adcformdesign-table-td').find('[adcform_listctrlmark="列表控件2"]')[0].value = tmpDom[2].children().children().length - 1;
    }
    //下面的表格，如果没输入年月，不可编辑
    if (inputDom[2][0].value && inputDom[3][0].value) {
        tmpDom[2].find('input').attr('disabled', false);
        tmpDom[2].find('textarea').attr('disabled', false);
        tmpDom[2].find('em').css('display', 'inline');
    } else {
        tmpDom[2].find('input').attr('disabled', true);
        tmpDom[2].find('textarea').attr('disabled', true);
        tmpDom[2].find('em').css('display', 'none');
    }
    // inputDom[2].on('input propertychange', function () {
    //     formCtrl.dateJudge(inputDom[2], inputDom[3], tmpDom[2]);
    // })
    // inputDom[3].on('input propertychange', function () {
    //     formCtrl.dateJudge(inputDom[2], inputDom[3], tmpDom[2]);
    // })
    //上面的两个表格，如果没输入年月，不可编辑
    if (inputDom[0][0].value && inputDom[1][0].value) {
        tmpDom[0].find('input').attr('disabled', false);
        tmpDom[0].find('textarea').attr('disabled', false);
        tmpDom[0].find('em').css('display', 'inline');
        tmpDom[1].find('input').attr('disabled', false);
        tmpDom[1].find('textarea').attr('disabled', false);
        tmpDom[1].find('em').css('display', 'inline');
    } else if (!inputDom[0][0].value || !inputDom[1][0].value) {
        tmpDom[0].find('input').attr('disabled', true);
        tmpDom[0].find('textarea').attr('disabled', true);
        tmpDom[0].find('em').css('display', 'none');
        tmpDom[1].find('input').attr('disabled', true);
        tmpDom[1].find('textarea').attr('disabled', true);
        tmpDom[1].find('em').css('display', 'none');
    }
    //一般用不到的输入时改变列表控件
    // inputDom[0].on('input propertychange', function () {
    //     formCtrl.dateJudge1(inputDom[0], inputDom[1], tmpDom[0], tmpDom[1]);
    // })
    // inputDom[1].on('input propertychange', function () {
    //     formCtrl.dateJudge1(inputDom[0], inputDom[1], tmpDom[0], tmpDom[1]);
    // })
    //第一个备注传参
    if (permissionTitle.indexOf('处理任务') != -1) {
        for (var x = 0; x < inputDom.length; x++) {
            inputDom[x].attr('disabled', true);
        }
    }
    if (permissionTitle.indexOf('新增项目') != -1) {
        tmp.each(function () {
            $(this).find('input').attr('disabled', true);
            $(this).find('textarea').attr('disabled', true);
            $(this).find('em').css('display', 'none');
        })
    }
    if (permissionTitle.indexOf('启动流程') != -1) {
        tmp.each(function () {
            $(this).find('input').attr('disabled', true);
            $(this).find('textarea').attr('disabled', true);
            $(this).find('em').css('display', 'none');
        })
    }
    if (permissionTitle.indexOf('查看任务') != -1) {
        $('#adcformdesign-table-td').find('input').attr('disabled', true);
        tmp.each(function () {
            $(this).find('[class="layui-icon layui-icon-add-circle"]').css('display', 'none');
            $(this).css('width', '100%');
            $(this).find('input').attr('disabled', true);
            $(this).find('textarea').attr('disabled', true);
        })
    }
    var remark1 = remarkDom[0].find('input');
    remark1.each(function () {
        $(this).on('blur', function () {
            var str = {
                "completion": "",
                "createTime": "",
                "department": "",
                "extInfo1": "",
                "extInfo2": "",
                "extInfo3": "",
                "extInfo4": "",
                "extInfo5": "",
                "id": "",
                "implementation": "",
                "mark": "",
                "month": "",
                "projectName": "",
                "projectType": "",
                "remark": "",
                "year": ""
            };
            var inputArray = new Array();
            var table = $(this).parent().parent().parent().parent();
            var tr1 = table[0].children[0].children[1];
            if (table[0].children[0].children[1].style.display == 'none') {
                tr1 = table[0].children[0].children[2];
            }
            for (var i = 0; i < $(tr1).find('td').length; i++) {
                var inputName = tr1.children[i].children[0].getAttribute('name');
                inputArray.push(inputName);
                var inputType = table[0].children[0].children[0].cells[i].innerText;
                var domI = tr1.children[i].children[0];
                formCtrl.inputString(inputArray, inputType, domI, str);
                inputArray = [];
            }
            str.year = inputDom[0][0].getAttribute('name') + "^^" + "year" + "^^" + inputDom[0][0].value;
            str.month = inputDom[1][0].getAttribute('name') + "^^" + "month" + "^^" + inputDom[1][0].value;
            var tableid = table[0].getAttribute('tableid');
            var j = table[0].rows.length;
            str.remark = tableid + "^^" + "remark" + "^^" + table[0].rows[j - 1].children[0].children[0].value;
            str.projectType = '行业工作';
            str.department = departDom[0][0].getAttribute('data-id');
            str.extInfo1 = processInstanceId;
            str.extInfo2 = '0';
            var message = formCtrl.notNull($(tr1.children[0].children[0]));
            console.log(message);
            if (message) {
                formCtrl.transData(str,tr1);
            } else {
                return;
            }
        })
    })
    //第二个备注传参
    var remark2 = remarkDom[1].find('input');
    remark2.each(function () {
        $(this).on('blur', function () {
            var str = {
                "completion": "",
                "createTime": "",
                "department": "",
                "extInfo1": "",
                "extInfo2": "",
                "extInfo3": "",
                "extInfo4": "",
                "extInfo5": "",
                "id": "",
                "implementation": "",
                "mark": "",
                "month": "",
                "projectName": "",
                "projectType": "",
                "remark": "",
                "year": ""
            };
            var inputArray = new Array();
            var table = $(this).parent().parent().parent().parent();
            var tr1 = table[0].children[0].children[1];
            if (table[0].children[0].children[1].style.display == 'none') {
                tr1 = table[0].children[0].children[2];
            }
            for (var i = 0; i < $(tr1).find('td').length; i++) {
                var inputName = tr1.children[i].children[0].getAttribute('name');
                inputArray.push(inputName);
                var inputType = table[0].children[0].children[0].cells[i].innerText;
                var domI = tr1.children[i].children[0];
                formCtrl.inputString(inputArray, inputType, domI, str);
                inputArray = [];
            }
            var tableid = table[0].getAttribute('tableid');
            str.year = inputDom[0][0].getAttribute('name') + "^^" + "year" + "^^" + inputDom[0][0].value;
            str.month = inputDom[1][0].getAttribute('name') + "^^" + "month" + "^^" + inputDom[1][0].value;
            var j = table[0].rows.length;
            str.remark = tableid + "^^" + "remark" + "^^" + table[0].rows[j - 1].children[0].children[0].value;
            str.projectType = '科研与技术创新';
            str.department = departDom[0][0].getAttribute('data-id');
            str.extInfo1 = processInstanceId;
            str.extInfo2 = '0';
            var message = formCtrl.notNull($(tr1.children[0].children[0]));
            if (message) {
                formCtrl.transData(str,tr1);
            } else {
                return;
            }
        })
    })
    //第一个表格里的多行文本框传参
    var table1 = tmpDom[0].find('textarea');
    table1.each(function () {
        //失去焦点自动保存
        if ($(this).parent().parent()[0].getAttribute('name') != 'remark') {
            $(this).on('blur', function () {
                var str = {
                    "completion": "",
                    "createTime": "",
                    "department": "",
                    "extInfo1": "",
                    "extInfo2": "",
                    "extInfo3": "",
                    "extInfo4": "",
                    "extInfo5": "",
                    "id": "",
                    "implementation": "",
                    "mark": "",
                    "month": "",
                    "projectName": "",
                    "projectType": "",
                    "remark": "",
                    "year": ""
                };
                var inputArray = new Array();
                var tr1 = $(this).parent().parent();
                console.log(tr1.find('td'));
                for (var i = 0; i < tr1.find('td').length; i++) {
                    var inputName = tr1[0].children[i].children[0].getAttribute('name');
                    inputArray.push(inputName);
                    var table = $(this).parent().parent().parent().parent();
                    var inputType = table[0].children[0].children[0].cells[i].innerText;
                    var domI = tr1.find('textarea')[i];
                    formCtrl.inputString(inputArray, inputType, domI, str);
                    inputArray = [];
                }
                str.year = inputDom[0][0].getAttribute('name') + "^^" + "year" + "^^" + inputDom[0][0].value;
                str.month = inputDom[1][0].getAttribute('name') + "^^" + "month" + "^^" + inputDom[1][0].value;
                var tableid = table[0].getAttribute('tableid');
                var j = table[0].rows.length;
                str.remark = tableid + "^^" + "remark" + "^^" + table[0].rows[j - 1].children[0].children[0].value;
                str.projectType = '行业工作';
                str.department = departDom[0][0].getAttribute('data-id');
                str.extInfo1 = processInstanceId;
                str.extInfo2 = '0';
                var message = formCtrl.notNull($(this));
                console.log(message);
                if (message) {
                    formCtrl.transData(str,tr1[0]);
                } else {
                    return;
                }
            })
        }
    })
    var deleteEm1 = tmpDom[0].find('[class="layui-icon layui-icon-delete"]');
    deleteEm1.each(function () {
        $(this).on('click', function () {
            var tr1 = $(this).parent();
            if (tr1[0].getAttribute('markId') == undefined) {
                return;
            } else if (tr1[0].getAttribute('markId') != undefined) {
                var id = tr1[0].getAttribute('markId');
                formCtrl.deleteData(id);
            }
        })
    })
    //第二个表格里的多行文本框传参
    var table2 = tmpDom[1].find('textarea');
    table2.each(function () {
        //失去焦点自动保存
        if ($(this).parent().parent()[0].getAttribute('name') != 'remark') {
            $(this).on('blur', function () {
                var str = {
                    "completion": "",
                    "createTime": "",
                    "department": "",
                    "extInfo1": "",
                    "extInfo2": "",
                    "extInfo3": "",
                    "extInfo4": "",
                    "extInfo5": "",
                    "id": "",
                    "implementation": "",
                    "mark": "",
                    "month": "",
                    "projectName": "",
                    "projectType": "",
                    "remark": "",
                    "year": ""
                };
                var inputArray = new Array();
                var tr1 = $(this).parent().parent();
                for (var i = 0; i < tr1.find('td').length; i++) {
                    var inputName = tr1[0].children[i].children[0].getAttribute('name');
                    inputArray.push(inputName);
                    var table = $(this).parent().parent().parent().parent();
                    var inputType = table[0].children[0].children[0].cells[i].innerText;
                    var domI = tr1.find('textarea')[i];
                    formCtrl.inputString(inputArray, inputType, domI, str);
                    inputArray = [];
                }
                var tableid = table[0].getAttribute('tableid');
                var j = table[0].rows.length;
                str.remark = tableid + "^^" + "remark" + "^^" + table[0].rows[j - 1].children[0].children[0].value;
                str.year = inputDom[0][0].getAttribute('name') + "^^" + "year" + "^^" + inputDom[0][0].value;
                str.month = inputDom[1][0].getAttribute('name') + "^^" + "month" + "^^" + inputDom[1][0].value;
                str.projectType = '科研与技术创新';
                str.department = departDom[0][0].getAttribute('data-id');
                str.extInfo1 = processInstanceId;
                str.extInfo2 = '0';
                var message = formCtrl.notNull($(this));
                console.log(message);
                if (message) {
                    formCtrl.transData(str,tr1[0]);
                } else {
                    return;
                }
            })
        }
    })
    var deleteEm2 = tmpDom[1].find('[class="layui-icon layui-icon-delete"]');
    deleteEm2.each(function () {
        $(this).on('click', function () {
            var tr1 = $(this).parent();
            if (tr1[0].getAttribute('markId') == undefined) {
                return;
            } else if (tr1[0].getAttribute('markId') != undefined) {
                var id = tr1[0].getAttribute('markId');
                formCtrl.deleteData(id);
            }
        })
    })
    var table3 = tmpDom[2].find('input');
    //为table3每一个input加一个方法
    table3.each(function () {
        //失去焦点自动保存
        if ($(this).parent()[0].getAttribute('name') != 'datetime') {
            $(this).on('blur', function () {
                var str = {
                    "cooperationDepartment": "",
                    "department": "",
                    "extInf01": "",
                    "extInf02": "",
                    "extInf03": "",
                    "extInf04": "",
                    "extInf05": "",
                    "finishTime": "",
                    "id": "",
                    "majorPerson": "",
                    "mark": "",
                    "month": "",
                    "participant": "",
                    "progressTarget": "",
                    "projectContent": "",
                    "projectName": "",
                    "projectType": "",
                    "year": ""
                };
                var inputArray = new Array();
                var tr1 = $(this).parent().parent();
                for (var i = 0; i < tr1.find('td').length; i++) {
                    var inputName = tr1[0].children[i].children[0].getAttribute('name');
                    inputArray.push(inputName);
                    var table = $(this).parent().parent().parent().parent();
                    var inputType = table[0].children[0].children[0].cells[i].innerText;
                    var domI = tr1[0].children[i].children[0];
                    formCtrl.inputStr(inputArray, inputType, domI, str);
                    inputArray = [];
                }
                str.year = inputDom[2][0].getAttribute('name') + "^^" + "year" + "^^" + inputDom[2][0].value;
                str.month = inputDom[3][0].getAttribute('name') + "^^" + "month" + "^^" + inputDom[3][0].value;
                str.projectType = '行业工作';
                str.department = departDom[1][0].getAttribute('data-id');
                str.extInf01 = processInstanceId;
                str.extInf02 = '0';
                var message = formCtrl.notNull($(this));
                console.log(message);
                if (message) {
                    formCtrl.transferData(str,tr1[0]);
                } else {
                    return;
                }
            })
        }
    })
    var table4 = tmpDom[2].find('textarea');
    table4.each(function () {
        $(this).on('blur', function () {
            var str = {
                "cooperationDepartment": "",
                "department": "",
                "extInf01": "",
                "extInf02": "",
                "extInf03": "",
                "extInf04": "",
                "extInf05": "",
                "finishTime": "",
                "id": "",
                "majorPerson": "",
                "mark": "",
                "month": "",
                "participant": "",
                "progressTarget": "",
                "projectContent": "",
                "projectName": "",
                "projectType": "",
                "year": ""
            };
            var inputArray = new Array();
            var tr1 = $(this).parent().parent();
            for (var i = 0; i < tr1.find('td').length; i++) {
                var inputName = tr1[0].children[i].children[0].getAttribute('name');
                inputArray.push(inputName);
                var table = $(this).parent().parent().parent().parent();
                var inputType = table[0].children[0].children[0].cells[i].innerText;
                var domI = tr1[0].children[i].children[0];
                formCtrl.inputStr(inputArray, inputType, domI, str);
                inputArray = [];
            }
            str.year = inputDom[2][0].getAttribute('name') + "^^" + "year" + "^^" + inputDom[2][0].value;
            str.month = inputDom[3][0].getAttribute('name') + "^^" + "month" + "^^" + inputDom[3][0].value;
            str.projectType = '行业工作';
            str.department = departDom[1][0].getAttribute('data-id');
            str.extInf01 = processInstanceId;
            str.extInf02 = '0';
            var message = formCtrl.notNull($(this));
            console.log(message);
            if (message) {
                formCtrl.transferData(str,tr1[0]);
            } else {
                return;
            }
        })
    })
    var deleteEm3 = tmpDom[2].find('[class="layui-icon layui-icon-delete"]');
    deleteEm3.each(function () {
        $(this).on('click', function () {
            var tr1 = $(this).parent();
            if (tr1[0].getAttribute('markId') == undefined) {
                return;
            } else if (tr1[0].getAttribute('markId') != undefined) {
                var id = tr1[0].getAttribute('markId');
                formCtrl.deleteDataPlan(id);
            }
        })
    })
    //为第一个表格的加号添加事件，点击后为新增行的组件加上失焦自动保存的方法
    var addicon1 = tmpDom[0].find('[class="layui-icon layui-icon-add-circle"]');
    addicon1.each(function () {
        $(this).on('click', function () {
            var newtable = $(this).parent().parent().parent().parent().parent();
            var j = newtable.children().children().length;
            var newDom = newtable[0].children[0].children[j - 2];
            var newinput = $(newDom).find('textarea');
            var newEm = $(newDom).find('[class="layui-icon layui-icon-delete"]');
            newEm.on('click', function () {
                var tr1 = $(this).parent();
                if (tr1[0].getAttribute('markId') == undefined) {
                    return;
                } else if (tr1[0].getAttribute('markId') != undefined) {
                    var id = tr1[0].getAttribute('markId');
                    formCtrl.deleteData(id);
                }
            })
            newinput.each(function () {
                if ($(this).parent().parent()[0].getAttribute('name') != 'remark') {
                    $(this).on('blur', function () {
                        var str = {
                            "completion": "",
                            "createTime": "",
                            "department": "",
                            "extInfo1": "",
                            "extInfo2": "",
                            "extInfo3": "",
                            "extInfo4": "",
                            "extInfo5": "",
                            "id": "",
                            "implementation": "",
                            "mark": "",
                            "month": "",
                            "projectName": "",
                            "projectType": "",
                            "remark": "",
                            "year": ""
                        };
                        var newinputArray = new Array();
                        var tr1 = $(this).parent().parent();
                        for (var i = 0; i < tr1.find('td').length; i++) {
                            var newinputName = tr1[0].children[i].children[0].getAttribute('name');
                            newinputArray.push(newinputName);
                            var table = $(this).parent().parent().parent().parent();
                            var newinputType = table[0].children[0].children[0].cells[i].innerText;
                            var domI = tr1.find('textarea')[i];
                            formCtrl.inputString(newinputArray, newinputType, domI, str);
                            newinputArray = [];
                        }
                        str.year = inputDom[0][0].getAttribute('name') + "^^" + "year" + "^^" + inputDom[0][0].value;
                        str.month = inputDom[1][0].getAttribute('name') + "^^" + "month" + "^^" + inputDom[1][0].value;
                        str.id = "";
                        str.projectType = '行业工作';
                        var tableid = table[0].getAttribute('tableid');
                        var j = table[0].rows.length;
                        str.remark = tableid + "^^" + "remark" + "^^" + table[0].rows[j - 1].children[0].children[0].value;
                        str.department = departDom[0][0].getAttribute('data-id');
                        str.extInfo1 = processInstanceId;
                        str.extInfo2 = '0';
                        var message = formCtrl.notNull($(this));
                        console.log(message);
                        if (message) {
                            formCtrl.transData(str,tr1[0]);
                        } else {
                            return;
                        }
                    })
                }
            })
        })
    })
    var addicon2 = tmpDom[1].find('[class="layui-icon layui-icon-add-circle"]');
    addicon2.each(function () {
        $(this).on('click', function () {
            var newtable = $(this).parent().parent().parent().parent().parent();
            var j = newtable.children().children().length;
            var newDom = newtable[0].children[0].children[j - 2];
            var newinput = $(newDom).find('textarea');
            var newEm = $(newDom).find('[class="layui-icon layui-icon-delete"]');
            newEm.on('click', function () {
                var tr1 = $(this).parent();
                if (tr1[0].getAttribute('markId') == undefined) {
                    return;
                } else if (tr1[0].getAttribute('markId') != undefined) {
                    var id = tr1[0].getAttribute('markId');
                    formCtrl.deleteData(id);
                }
            })
            newinput.each(function () {
                if ($(this).parent().parent()[0].getAttribute('name') != 'remark') {
                    $(this).on('blur', function () {
                        var str = {
                            "completion": "",
                            "createTime": "",
                            "department": "",
                            "extInfo1": "",
                            "extInfo2": "",
                            "extInfo3": "",
                            "extInfo4": "",
                            "extInfo5": "",
                            "id": "",
                            "implementation": "",
                            "mark": "",
                            "month": "",
                            "projectName": "",
                            "projectType": "",
                            "remark": "",
                            "year": ""
                        };
                        var newinputArray = new Array();
                        var tr1 = $(this).parent().parent();
                        for (var i = 0; i < tr1.find('td').length; i++) {
                            var newinputName = tr1[0].children[i].children[0].getAttribute('name');
                            newinputArray.push(newinputName);
                            var table = $(this).parent().parent().parent().parent();
                            var newinputType = table[0].children[0].children[0].cells[i].innerText;
                            var domI = tr1.find('textarea')[i];
                            formCtrl.inputString(newinputArray, newinputType, domI, str);
                            newinputArray = [];
                        }
                        str.year = inputDom[0][0].getAttribute('name') + "^^" + "year" + "^^" + inputDom[0][0].value;
                        str.month = inputDom[1][0].getAttribute('name') + "^^" + "month" + "^^" + inputDom[1][0].value;
                        str.id = "";
                        var tableid = table[0].getAttribute('tableid');
                        var j = table[0].rows.length;
                        str.remark = tableid + "^^" + "remark" + "^^" + table[0].rows[j - 1].children[0].children[0].value;
                        str.projectType = '科研与技术创新';
                        str.department = departDom[0][0].getAttribute('data-id');
                        str.extInfo1 = processInstanceId;
                        str.extInfo2 = '0';
                        var message = formCtrl.notNull($(this));
                        console.log(message);
                        if (message) {
                            formCtrl.transData(str,tr1[0]);
                        } else {
                            return;
                        }
                    })
                }
            })
        })
    })
    var addicon3 = tmpDom[2].find('[class="layui-icon layui-icon-add-circle"]');
    addicon3.each(function () {
        $(this).on('click', function () {
            var newtable = $(this).parent().parent().parent().parent().parent();
            var j = newtable.children().children().length;
            var newDom = newtable[0].children[0].children[j - 1];
            var newinput = $(newDom).find('input');
            var newtextarea = $(newDom).find('textarea');
            var newTableDate = $(newDom).find('[name = "datetime"]');
            var newTableDateDom = [];
            newTableDate.each(function () {
                newTableDateDom.push($(this));
            })
            var newEm = $(newDom).find('[class="layui-icon layui-icon-delete"]');
            newEm.on('click', function () {
                var tr1 = $(this).parent();
                if (tr1[0].getAttribute('markId') == undefined) {
                    return;
                } else if (tr1[0].getAttribute('markId') != undefined) {
                    var id = tr1[0].getAttribute('markId');
                    formCtrl.deleteDataPlan(id);
                }
            })
            for (var ss = 0; ss < newTableDateDom.length; ss++) {
                var domIII = newTableDateDom[ss][0].children[0];
                var newName = domIII.getAttribute('name');
                var newId = domIII.getAttribute('id');
                var newValue = domIII.value;
                $(domIII).remove();
                newTableDateDom[ss][0].innerHTML = "<input name = '" + newName + "'id = '" + newId + "'readonly = 'readonly' class = 'layui-input' value = '" + newValue + "'>";
                layui.laydate.render({
                    elem: "#" + newId,
                    done: function () {
                        var that = $(this)[0].elem;
                        var str = {
                            "cooperationDepartment": "",
                            "department": "",
                            "extInf01": "",
                            "extInf02": "",
                            "extInf03": "",
                            "extInf04": "",
                            "extInf05": "",
                            "finishTime": "",
                            "id": "",
                            "majorPerson": "",
                            "mark": "",
                            "month": "",
                            "participant": "",
                            "progressTarget": "",
                            "projectContent": "",
                            "projectName": "",
                            "projectType": "",
                            "year": ""
                        };
                        var inputArray = new Array();
                        var tr1 = $(that).parent().parent();
                        for (var d = 0; d < tr1.find('td').length; d++) {
                            var inputName = tr1[0].children[d].children[0].getAttribute('name');
                            inputArray.push(inputName);
                            var table = $(that).parent().parent().parent().parent();
                            var inputType = table[0].children[0].children[0].cells[d].innerText;
                            var domI = tr1[0].children[d].children[0];
                            formCtrl.inputStr(inputArray, inputType, domI, str);
                            inputArray = [];
                        }
                        str.year = inputDom[2][0].getAttribute('name') + "^^" + "year" + "^^" + inputDom[2][0].value;
                        str.month = inputDom[3][0].getAttribute('name') + "^^" + "month" + "^^" + inputDom[3][0].value;
                        str.id = "";
                        str.projectType = '行业工作';
                        str.department = departDom[1][0].getAttribute('data-id');
                        str.extInf01 = processInstanceId;
                        str.extInf02 = '0';
                        var message = formCtrl.notNull($(that));
                        console.log(message);
                        if (message) {
                            formCtrl.transferData(str,tr1[0]);
                        } else {
                            return;
                        }
                    }
                })
            }
            newinput.each(function () {
                $(this).on('blur', function () {
                    var str = {
                        "cooperationDepartment": "",
                        "department": "",
                        "extInf01": "",
                        "extInf02": "",
                        "extInf03": "",
                        "extInf04": "",
                        "extInf05": "",
                        "finishTime": "",
                        "id": "",
                        "majorPerson": "",
                        "mark": "",
                        "month": "",
                        "participant": "",
                        "progressTarget": "",
                        "projectContent": "",
                        "projectName": "",
                        "projectType": "",
                        "year": ""
                    };
                    var newinputArray = new Array();
                    var tr1 = $(this).parent().parent();
                    for (var i = 0; i < tr1.find('td').length; i++) {
                        var newinputName = tr1[0].children[i].children[0].getAttribute('name');
                        newinputArray.push(newinputName);
                        var table = $(this).parent().parent().parent().parent();
                        var newinputType = table[0].children[0].children[0].cells[i].innerText;
                        var domI = tr1[0].children[i].children[0];
                        formCtrl.inputStr(newinputArray, newinputType, domI, str);
                        newinputArray = [];
                    }
                    str.year = inputDom[2][0].getAttribute('name') + "^^" + "year" + "^^" + inputDom[2][0].value;
                    str.month = inputDom[3][0].getAttribute('name') + "^^" + "month" + "^^" + inputDom[3][0].value;
                    str.id = "";
                    str.projectType = '行业工作';
                    str.department = departDom[1][0].getAttribute('data-id');
                    str.extInf01 = processInstanceId;
                    str.extInf02 = '0';
                    var message = formCtrl.notNull($(this));
                    console.log(message);
                    if (message) {
                        formCtrl.transferData(str,tr1[0]);
                    } else {
                        return;
                    }
                })
            })
            newtextarea.each(function () {
                $(this).on('blur', function () {
                    var str = {
                        "cooperationDepartment": "",
                        "department": "",
                        "extInf01": "",
                        "extInf02": "",
                        "extInf03": "",
                        "extInf04": "",
                        "extInf05": "",
                        "finishTime": "",
                        "id": "",
                        "majorPerson": "",
                        "mark": "",
                        "month": "",
                        "participant": "",
                        "progressTarget": "",
                        "projectContent": "",
                        "projectName": "",
                        "projectType": "",
                        "year": ""
                    };
                    var newinputArray = new Array();
                    var tr1 = $(this).parent().parent();
                    for (var i = 0; i < tr1.find('td').length; i++) {
                        var newinputName = tr1[0].children[i].children[0].getAttribute('name');
                        newinputArray.push(newinputName);
                        var table = $(this).parent().parent().parent().parent();
                        var newinputType = table[0].children[0].children[0].cells[i].innerText;
                        var domI = tr1[0].children[i].children[0];
                        formCtrl.inputStr(newinputArray, newinputType, domI, str);
                        newinputArray = [];
                    }
                    str.year = inputDom[2][0].getAttribute('name') + "^^" + "year" + "^^" + inputDom[2][0].value;
                    str.month = inputDom[3][0].getAttribute('name') + "^^" + "month" + "^^" + inputDom[3][0].value;
                    str.id = "";
                    str.projectType = '行业工作';
                    str.department = departDom[1][0].getAttribute('data-id');
                    str.extInf01 = processInstanceId;
                    str.extInf02 = '0';
                    var message = formCtrl.notNull($(this));
                    console.log(message)
                    if (message) {
                        formCtrl.transferData(str,tr1[0]);
                    } else {
                        return;
                    }
                })
            })
        })
    })
})()

var formCtrl = {
    transferData: function (str,obj) {
        if (obj.getAttribute('markId') == undefined) {
            str.id = "";
        } else if (obj.getAttribute('markId') != undefined) {
            str.id = obj.getAttribute('markId');
        }
        $.ajax({
            url: "/api/project/projectPlan/saveOrUpdate",
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            async: false,
            data: JSON.stringify(str),
            success: function (data) {
                var markId = data.data.id;
                obj.setAttribute('markId',markId);
            },
            error: function () {
                return;
            }
        })
    },
    transData: function (str,obj) {
        if (obj.getAttribute('markId') == undefined) {
            str.id = "";
        } else if (obj.getAttribute('markId') != undefined) {
            str.id = obj.getAttribute('markId');
        }
        $.ajax({
            url: "/api/project/projectSchedule/saveOrUpdate",
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            async: false,
            data: JSON.stringify(str),
            success: function (data) {
                var markId = data.data.id;
                obj.setAttribute('markId',markId);
            },
            error: function () {
                return;
            }
        })
    },
    deleteDataPlan: function (id) {
        $.ajax({
            url: "/api/project/projectPlan/" + id,
            type: 'DELETE',
            dataType: 'json',
            contentType: 'application/json',
            async: false,
            success: function (data) {
                console.log(data);
            },
            error: function (data) {
                if (data.ok != true) {
                    layui.msg('程序异常');
                }
                return;
            }
        })
    },
    deleteData: function (id) {
        $.ajax({
            url: "/api/project/projectSchedule/" + id,
            type: 'DELETE',
            dataType: 'json',
            contentType: 'application/json',
            async: false,
            success: function (data) {
                console.log(data);
            },
            error: function (data) {
                if (data.ok != true) {
                    layui.msg('程序异常');
                }
                return;
            }
        })
    },
    notNull: function (obj) {
        var tr1 = obj.parent().parent();
        var textareaDom = tr1.find('textarea');
        var textareaArray = [];
        textareaDom.each(function () { 
            textareaArray.push($(this));
         })
        var j = textareaArray.length;
        for (var num = 0; num < j; num++) {
            console.log(textareaArray[num]);
            if (textareaArray[num][0].value == "") {
                if (num + 1 < j) {
                    continue;
                }else{
                    return 0;
                }
            } else {
                return 1;
            }
        }
    },
    inputStr: function (inputArray, inputType, obj, str) {
        if (inputType.indexOf('标记') != -1) {
            inputType = 'mark';
            inputArray.push(inputType);
            var inputValue = obj.value;
            inputArray.push(inputValue);
            inputArray = inputArray.join('^^');
            str.mark = inputArray;
        } else if (inputType.indexOf('工作项目') != -1) {
            inputType = 'projectName';
            inputArray.push(inputType);
            var inputValue = obj.value;
            inputArray.push(inputValue);
            inputArray = inputArray.join('^^');
            str.projectName = inputArray;
        } else if (inputType.indexOf('主要工作内容') != -1) {
            inputType = 'projectContent';
            inputArray.push(inputType);
            var inputValue = obj.value;
            inputArray.push(inputValue);
            inputArray = inputArray.join('^^');
            str.projectContent = inputArray;
        } else if (inputType.indexOf('进度目标') != -1) {
            inputType = 'progressTarget';
            inputArray.push(inputType);
            var inputValue = obj.value;
            inputArray.push(inputValue);
            inputArray = inputArray.join('^^');
            str.progressTarget = inputArray;
        } else if (inputType.indexOf('完成时间') != -1) {
            inputType = 'finishTime';
            inputArray.push(inputType);
            var inputValue = obj.value;
            inputArray.push(inputValue);
            inputArray = inputArray.join('^^');
            str.finishTime = inputArray;
        } else if (inputType.indexOf('负责人') != -1) {
            inputType = 'majorPerson';
            inputArray.push(inputType);
            var inputValue = obj.value;
            inputArray.push(inputValue);
            inputArray = inputArray.join('^^');
            str.majorPerson = inputArray;
        } else if (inputType.indexOf('参与人') != -1) {
            inputType = 'participant';
            inputArray.push(inputType);
            var inputValue = obj.value;
            inputArray.push(inputValue);
            inputArray = inputArray.join('^^');
            str.participant = inputArray;
        } else if (inputType.indexOf('合作部门') != -1) {
            inputType = 'cooperationDepartment';
            inputArray.push(inputType);
            var inputValue = obj.value;
            inputArray.push(inputValue);
            inputArray = inputArray.join('^^');
            str.cooperationDepartment = inputArray;
        }
    },
    inputString: function (inputArray, inputType, obj, str) {
        if (inputType.indexOf('标记') != -1) {
            inputType = 'mark';
            inputArray.push(inputType);
            var inputValue = obj.value;
            inputArray.push(inputValue);
            inputArray = inputArray.join('^^');
            str.mark = inputArray;
        } else if (inputType.indexOf('工作项目') != -1) {
            inputType = 'projectName';
            inputArray.push(inputType);
            var inputValue = obj.value;
            inputArray.push(inputValue);
            inputArray = inputArray.join('^^');
            str.projectName = inputArray;
        } else if (inputType.indexOf('完成情况') != -1) {
            inputType = 'completion';
            inputArray.push(inputType);
            var inputValue = obj.value;
            inputArray.push(inputValue);
            inputArray = inputArray.join('^^');
            str.completion = inputArray;
        } else if (inputType.indexOf('执行情况') != -1) {
            inputType = 'implementation';
            inputArray.push(inputType);
            var inputValue = obj.value;
            inputArray.push(inputValue);
            inputArray = inputArray.join('^^');
            str.implementation = inputArray;
        }
    },
    dateJudge1: function (dom1, dom2, dom3, dom4) {
        if (dom1[0].value && dom2[0].value) {
            dom3.find('input').attr('disabled', false);
            dom3.find('textarea').attr('disabled', false);
            dom3.find('em').css('display', 'inline');
            dom4.find('input').attr('disabled', false);
            dom4.find('textarea').attr('disabled', false);
            dom4.find('em').css('display', 'inline');
        } else if (!dom1[0].value || !dom2[0].value) {
            dom3.find('input').attr('disabled', true);
            dom3.find('textarea').attr('disabled', true);
            dom3.find('em').css('display', 'none');
            dom4.find('input').attr('disabled', true);
            dom4.find('textarea').attr('disabled', true);
            dom4.find('em').css('display', 'none');
        }
    },
    dateJudge: function (dom1, dom2, dom3, dom4) {
        if (dom1[0].value && dom2[0].value) {
            dom3.find('input').attr('disabled', false);
            dom3.find('textarea').attr('disabled', false);
            dom3.find('em').css('display', 'inline');
        } else {
            dom3.find('input').attr('disabled', true);
            dom3.find('textarea').attr('disabled', true);
            dom3.find('em').css('display', 'none');
        }
    }
}

function tableRender(tmpDom, list, dom1, dom2) {
    if (list[0] != undefined) {
        var yearData = list[0].year.split('^^');
        dom1[0].value = yearData[2];
        var monthData = list[0].month.split('^^');
        dom2[0].value = monthData[2];
    }
    for (var s in list[0]) {

        if (s == 'remark' && list[0].remark != null) {
            var remarkData = list[0].remark.split('^^');
            var j = tmpDom[0].rows.length;
            tmpDom[0].children[0].rows[j - 1].children[0].children[0].value = remarkData[2];
        }
    }
    for (var i = 0; i < list.length; i++) {
        var id = list[i].id;
        var nameNums = {};
        var inputElements = {};
        var tableData = {};
        var tableValue = {};
        var nTv = [];
        var type = [];
        for (var name in list[i]) {
            if (!(list[i][name] in inputElements)) {
                inputElements[list[i][name]] = name;
            }
        }
        for (var l in inputElements) {
            nTv = l.split('^^');
            if (nTv[1] != 'year' && nTv[1] != 'month' && !(nTv[0] in nameNums)) {
                nameNums[nTv[0]] = nTv[2];
            }
            var value = nTv[0].split('_');
            if (value[4] != undefined && !(value[2] in tableValue)) {
                tableValue[value[2]] = nTv[2] + "^^" + nTv[0];
            }
        }
        for (var m in nameNums) {
            type = m.split('_');
            if (type[4] != undefined && !(type[2] in tableData)) {
                tableData[type[2]] = type[0];
            }
        }
        var newcode = "";
        var account = "";
        var j = tmpDom[0].rows.length;
        var tr1 = tmpDom[0].children[0].rows[1];
        var tr3 = tmpDom[0].children[0].rows[j - 1];
        for (var name in tableData) {
            var myStom = tableValue[name].split('^^');
            if (tableData[name] == 'input') {
                newcode += "<td name='input' ><input name='" + myStom[1] + "' value = '" + myStom[0] + "'class = 'layui-input'" + "></td>";
            } else if (tableData[name] == 'textarea') {
                newcode += "<td name='textarea'><textarea name='" + myStom[1] + "' class='layui-textarea" + "'>" + myStom[0] + "</textarea></td>";
            } else if (tableData[name] == 'inputuserselect') {
                newcode += "<td name='inputuserselect'>" + "<input name='" + myStom[1] + "' value = '" + myStom[0] + "'onclick='javascript:userlistctrlselect(this)' class='layui-input' readonly='readonly' style='position: relative;'>" + "<em class='layui-icon layui-icon-username' style='position: absolute; top: 50%; right: 20px; font-size: 20px; width: 20px; height: 20px; margin-top: -10px;'></em></td>";
            } else if (tableData[name] == 'inputorgselect') {
                newcode += "<td name='inputorgselect'>" + "<input name='" + myStom[1] + "' value = '" + myStom[0] + "'onclick='javascript:orglistctrlselect(this)' class='layui-input' readonly='readonly' style='position: relative;'>" + "<em class='layui-icon layui-icon-website' style='position: absolute; top: 50%; right: 20px; font-size: 20px; width: 20px; height: 20px; margin-top: -10px;'></em></td>";
            } else if (tableData[name] == 'select') {
                var td1 = tr1.cells[name];
                var oparr = td1.children[0].innerHTML.toString();
                newcode += "<td name='select'>" + "<select name='" + myStom[1] + "' value = '" + myStom[0] + "'>" + oparr + "</select>" + "</td>";
            } else if (tableData[name] == 'datetime') {
                newcode += "<td name='datetime'>" + "<input name='" + myStom[1] + "' value = '" + myStom[0] + "' id = 'date_" + name + "_" + (j + 2) + "'class='layui-input" + "'>" + "</td>";
                account += name + '`';
            } else if (tableData[name] == 'sum') {
                newcode += "<td name = '" + name + "'>" + "<input name='" + myStom[1] + "' value = '" + myStom[0] + "' onclick='javascript:numbersum(this)' onblur='checked(this)' class = 'layui-input' onkeyup = 'replaceit(this)'>" + "</td>";
            } else {
                newcode += "<td name = 'int'>" + "<input name='" + myStom[1] + "' value = '" + myStom[0] + "' onblur='javascript:checked(this)' onkeyup = 'replaceit(this)' class='layui-input'>" + "</td>";
            }
        }
        if (tr3.getAttribute('name') == 'remark') {
            var newtr = tmpDom[0].insertRow(j - 1);
            newtr.setAttribute('markId', id);
            newtr.innerHTML = newcode + "<i class='layui-icon layui-icon-delete' style='font-size: 30px; margin-right:-50px;cursor:pointer' href='javascript:;' onclick='deltableNum(this),removeLine(this)'></i>";
        } else if (tr3.getAttribute('name') != 'remark') {
            var newtr = tmpDom[0].insertRow(j);
            newtr.setAttribute('markId', id);
            newtr.innerHTML = newcode + "<i class='layui-icon layui-icon-delete' style='font-size: 30px; margin-right:-50px;cursor:pointer' href='javascript:;' onclick='deltableNum(this),removeLine(this)'></i>";
        }
        if (account != "") {
            //删掉最后一个 ` 符号
            account = account.substr(0, account.length - 1);
            //将字符串以 ` 符号为分界分成数组
            account = account.split("`");
            //使用数组内存储的数据找到对应的id
            for (k = 0; k < account.length; k++) {
                layui.laydate.render({
                    elem: "#date_" + account[k] + "_" + (j + 2)
                });
            }
            account = "";
        }
    }
}