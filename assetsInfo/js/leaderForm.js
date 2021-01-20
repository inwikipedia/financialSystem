layui.use(['element','laypage','tree','util','table','form','laydate'], function () {
    var element = layui.element,
        table = layui.table,
        tree = layui.tree,
        form = layui.form,
        admin = layui.admin,
        laydate = layui.laydate,
        config = layui.config,
        layer = layui.layer,
        tools = layui.tools,
        util = layui.util;
    var account = config.getAccount();
    var newData = [];
    var dateChange=function(data){
        var str = data.replace(/-/g,'/');
        var date = new Date(str).getTime();
        return date;
    };
    var reportFun = function (url,treeId,item) {
        var timeStr = new Date().getTime();
        $.ajax({
            // "../../components/leaderStatement/"+json
            url: "/api/leaderview/jsonTitle/"+treeId+'?ts='+timeStr,
            type: 'get',
            contentType:'json',
            success: function (res) {
                if(res.ok){
                    var col=[];
                    var selectOptionData='<option value=""  selected>请选择</option>';
                    var arrData=res.data.data?JSON.parse(res.data.data):[];
                    // var arrData=res.data;
                    for(var i =0;i<arrData.length;i++){
                        var headData=arrData[i];
                        col.push({
                            title:'<span title="'+headData.name+'">'+headData.name+'</span>',
                            field: headData.searchName,
                            align: 'center',
                            width:arrData[i].width?arrData[i].width:"",
                            searchIndex:i,//修改源码添加searchIndex字段
                            templet: function(d,name) {
                                if(name&&(name.searchIndex||name.searchIndex==0)){
                                    if(arrData[name.searchIndex].type=='date'){
                                        d[arrData[name.searchIndex].searchName]= tools.getDate(d[arrData[name.searchIndex].searchName],"YYYY-MM-DD")
                                    }
                                    if(arrData[name.searchIndex].searchName=='finishStatus'){
                                        if(d[arrData[name.searchIndex].searchName]==0){
                                            d[arrData[name.searchIndex].searchName]='未开始';
                                        }else if(d[arrData[name.searchIndex].searchName]==3){
                                            d[arrData[name.searchIndex].searchName]='未完成';
                                        }else if(d[arrData[name.searchIndex].searchName]==6){
                                            d[arrData[name.searchIndex].searchName]='未完成（已有风险）';
                                        }else if(d[arrData[name.searchIndex].searchName]==9){
                                            d[arrData[name.searchIndex].searchName]='已完成';
                                        }
                                    }
                                    if(arrData[name.searchIndex].searchName=='projectName'){
                                        return '<div  title="'+(d[arrData[name.searchIndex].searchName]?d[arrData[name.searchIndex].searchName]:'')+'"><span style="cursor: pointer" data-leaderProjectId="'+d.projectId+'" class="jumpProject">'+ (d[arrData[name.searchIndex].searchName]?d[arrData[name.searchIndex].searchName]:'') +'</span></div>'
                                    }else if(arrData[name.searchIndex].searchName=='names'){
                                        return '<div  title="'+(d[arrData[name.searchIndex].searchName]?d[arrData[name.searchIndex].searchName]:'')+'"><span style="cursor: pointer" data-leaderTaskId="'+d.taskId+'" class="jumpTask">'+ (d[arrData[name.searchIndex].searchName]?d[arrData[name.searchIndex].searchName]:'') +'</span></div>'
                                    }else{
                                        return '<div title="'+(d[arrData[name.searchIndex].searchName]?d[arrData[name.searchIndex].searchName]:'')+'"><span>'+ (d[arrData[name.searchIndex].searchName]?d[arrData[name.searchIndex].searchName]:'') +'</span></div>'
                                    }

                                }

                            }
                        });
                        if(headData.isSearch){
                            selectOptionData+='<option value="'+headData.searchName+'" data-type="'+headData.type+'" data-searchType="'+headData.searchType+'">'+headData.name+'</option>';
                        }
                    }
                    // 渲染表格
                    function tableInit(search) {
                        if (!search) {
                            search = {};
                        }
                        search.projectType=projectType;
                        if(!search.finishedStatus&&url=='/api/operate/projectLeaderView/findDeptCommitProject'){
                            search.finishedStatus='申请中';
                        }
                        if(!search.finishedStatus&&url=='/api/operate/projectLeaderView/findDeptRunProject'){
                            search.finishedStatus='进行中';
                        }
                        if(item.extInfo1&&item.extInfo1==0){
                            search.searchFlag=0;
                        }else if(item.extInfo1&&item.extInfo1==1){
                            search.searchFlag=1;
                        }

                        table.render({
                            elem: '#tableContent-form',
                            url: admin.formatUrl(url), //数据接口
                            method: 'POST',
                            contentType: 'application/json',
                            parseData: function (res) { //res 即为原始返回的数据

                                // layer.close(index);
                                // 返回结果，进行渲染表格
                                return {
                                    "count": res.data.count,
                                    "code": res.respCode, //解析接口状态
                                    "msg": res.message, //解析提示文本
                                    "data": res.data.list //解析数据列表
                                };
                            },
                            request: {
                                pageName: 'page',
                                limitName: 'pageSize'
                            },
                            cols: [
                                col
                            ],
                            page: true,
                            limit: 10, //显示的数量
                            limits:[10,15,20,25,30],
                            where: search
                        });
                        //跳转到工作管理页面
                        $('.botTable').off('click','.jumpProject').on('click','.jumpProject',function () {
                            sessionStorage.setItem('leaderProjectId', $(this).attr('data-leaderProjectId'));
                            window.open('#!ADC_externalForm_revenueBudget_html','_self');
                        });
                        $('.botTable').off('click','.jumpTask').on('click','.jumpTask',function () {
                            sessionStorage.setItem('leaderTaskId', $(this).attr('data-leaderTaskId'));
                            window.open('#!ADC_externalForm_revenueBudget_html','_self');
                        });
                    }

                    tableInit();
                    //查询条件对应的id数字
                    var searchLength=1;
                    //查询条件的个数
                    var searchArr=[{'id':1,'value':''}];
                    laydate.render({
                        elem: '#dateReport'+searchLength,
                        type: 'date',
                    });
                    var addItem=function () {
                        $('#reportItem').append('<div class="layui-form-item'+searchLength+' layui-form-item"  style="margin:15px 15px 15px 15px;">\n' +
                            '                                <div class="layui-inline searchInfo" >\n' +
                            '                                    <div class="layui-inline " style="float: left;width:160px">\n' +
                            '                                        <select class="selectSearchName"  name="report_select'+searchLength+'" id="report_select'+searchLength+'"  lay-filter="report_select'+searchLength+'" >\n' +
                            // '                                            <option value=""  selected>请选择</option>\n' +
                            // '                                            <option value="1">业务名称</option>\n' +
                            // '                                            <option value="2">业务属性</option>\n' +
                            // '                                            <option value="3">业务经理</option>\n' +
                            // '                                            <option value="4">业务类型</option>\n' +
                            // '                                            <option value="5">业务开始日期</option>\n' +
                            // '                                            <option value="6">业务结束日期</option>\n' +
                            // // '                                            <option value="7">业务状态</option>\n' +
                            // '                                            <option value="8">业务累计人天投入</option>\n' +
                            // '                                            <option value="9">创建人</option>\n' +
                            // '                                            <option value="10">创建时间</option>\n' +
                            selectOptionData+
                            // '                                            <option value="11">修改时间</option>\n' +
                            '                                        </select>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="layui-inline" style="float: left;width:150px">\n' +
                            '                                        <select   name="report_Symbol'+searchLength+'" id="report_Symbol'+searchLength+'"  lay-filter="report_Symbol'+searchLength+'" >\n' +
                            '                                            <option value="=">等于</option>\n' +
                            '                                            <option value="!=">不等于</option>\n' +
                            '                                            <option value="like">包含</option>\n' +
                            '                                            <option value="not like">不包含</option>\n' +
                            '                                        </select>\n' +
                            '                                    </div>\n' +
                            '                                    <input name="searchField" type="text" placeholder="单行输入" style="margin-right:10px" class="layui-input setInput" id="search-report'+searchLength+'">\n' +
                            '                                    <input autocomplete="off" style="display: none;" type="text" name="dateReport'+searchLength+'" id="dateReport'+searchLength+'" placeholder="日期" class="layui-input setInput" >\n' +
                            '                                   <div class="layui-inline" id="report_attrShow'+searchLength+'" style="display:none;float: left;width:170px">\n' +
                            '                                        <select  name="report_attr'+searchLength+'" id="report_attr'+searchLength+'"   lay-filter="report_attr" >\n' +
                            '                                            <option value="0">未开始</option>\n' +
                            '                                            <option value="3">未完成</option>\n' +
                            '                                            <option value="6">未完成（已有风险）</option>\n' +
                            '                                            <option value="9">已完成</option>\n' +
                            '                                        </select>\n' +
                            '                                    </div>\n'+
                            '                                   <div class="layui-inline" id="report_typeShow'+searchLength+'" style="display:none;float: left;width:170px">\n' +
                            '                                        <select  name="report_type'+searchLength+'" id="report_type'+searchLength+'"   lay-filter="report_type" >\n' +
                            '                                            <option value="0">业务任务</option>\n' +
                            '                                            <option value="1">项目任务</option>\n' +
                            '                                        </select>\n' +
                            '                                    </div>\n'+
                            '                                   <div class="layui-inline" style="float: left;width:100px">\n' +
                            '                                        <select  name="report_and'+searchLength+'" id="report_and'+searchLength+'"   lay-filter="report_and" >\n' +
                            '                                            <option value="and">且</option>\n' +
                            '                                            <option value="or">或</option>\n' +
                            '                                        </select>\n' +
                            '                                    </div>\n'+
                            '                                </div>\n' +
                            '                                <div class="layui-inline" style="margin-left: 80px;">\n' +
                            '                                    <button id="report-add'+searchLength+'" class="layui-btn layui-btn-sm layui-btn-normal " style="background-color: #2696ff;color:#fff" lay-submit >+</button>\n' +
                            '                                    <button id="report-del'+searchLength+'" del-index="'+searchLength+'" class="layui-btn layui-btn-sm layui-btn-normal " style="background-color: #2696ff;color:#fff" lay-submit >-</button>\n' +
                            '                                </div>\n'+
                            '                        </div>');
                        laydate.render({
                            elem: '#dateReport'+searchLength,
                            type: 'date',
                        });
                        var isBudgetNames=false;
                        for (var i = 0; i <searchArr.length ; i++) {
                            if(searchArr[i].value=='budgetNames'){
                                isBudgetNames=true;

                            }
                        }
                        if(isBudgetNames){
                            $('.selectSearchName option[value=budgetNames]').attr('disabled','disabled');
                        }else{
                            $('.selectSearchName option[value=budgetNames]').removeAttr('disabled');
                        }
                        form.render();
                    };
                    $('#reportItem').empty();
                    addItem();
                    //绑定选择条件下垃圾与符号联动事件
                    var bindSelect=function(index){
                        form.on('select(report_select'+index+')', function(data) {
                            data.elem.dataset.searchType=$(data.elem[data.elem.selectedIndex]).attr('data-searchType');
                            data.elem.dataset.type=$(data.elem[data.elem.selectedIndex]).attr('data-type');
                            var searchType=$(data.elem[data.elem.selectedIndex]).attr('data-searchType');
                            var type=$(data.elem[data.elem.selectedIndex]).attr('data-type');
                            var isBudgetNames=false;
                            for (var i = 0; i <searchArr.length ; i++) {
                                if(index==searchArr[i].id){
                                    searchArr[i].value=data.value;
                                }
                                if(searchArr[i].value=='budgetNames'){
                                    isBudgetNames=true;

                                }
                            }
                            if(isBudgetNames){
                                $('.selectSearchName option[value=budgetNames]').attr('disabled','disabled');
                            }else{
                                $('.selectSearchName option[value=budgetNames]').removeAttr('disabled');
                            }
                            var elem = $('#report_Symbol'+index);
                            if(type=='date'){
                                $('#dateReport'+index).show();
                                $('#search-report'+index).hide();
                                $('#report_typeShow'+index).hide();
                                $('#report_attrShow'+index).hide();
                            }
                            else if(type=='select'&&data.value=='types'){
                                $('#dateReport'+index).hide();
                                $('#report_attrShow'+index).hide();
                                $('#search-report'+index).hide();
                                $('#report_typeShow'+index).show();
                            }else if(type=='select'&&data.value=='finishStatus'){
                                $('#dateReport'+index).hide();
                                $('#report_attrShow'+index).show();
                                $('#search-report'+index).hide();
                                $('#report_typeShow'+index).hide();
                            }
                            else{
                                $('#dateReport'+index).hide();
                                $('#report_attrShow'+index).hide();
                                $('#search-report'+index).show();
                                $('#report_typeShow'+index).hide();
                            }
                            if(searchType==2){
                                elem.empty().append('');
                                elem.append('<option value="=">=</option>\n' +
                                    '                                        <option value="!=">&lt&gt</option>\n' +
                                    '                                        <option value=">=">≥</option>\n' +
                                    '                                        <option value=">">&gt</option>\n'+
                                    '                                        <option value="<=">≤</option>\n'+
                                    '                                        <option value="<">&lt</option>');
                            }else if((type=='select'&&data.value=='finishStatus')||(type=='select'&&data.value=='types')){
                                elem.empty().append('');
                                elem.append('<option value="=">等于</option>\n' +
                                    '                                        <option value="!=">不等于</option>');
                            }else{
                                elem.empty().append('');
                                elem.append('<option value="=">等于</option>\n' +
                                    '                                        <option value="!=">不等于</option>\n' +
                                    '                                        <option value="like">包含</option>\n' +
                                    '                                        <option value="not like">不包含</option>');
                            };
                            form.render();
                        });
                    };
                    var bindAdd=function(index){
                        //增加一个查询条件
                        $('#report-add'+index).off('click').on('click',function () {
                            searchLength++;
                            searchArr.push({'id':searchLength,'value':''});
                            addItem();
                            bindSelect(searchLength);
                            bindAdd(searchLength);
                            binDel(searchLength);
                        });
                    };
                    var binDel=function(index){
                        $('#report-del'+index).off('click').on('click',function () {
                            var idx=$(this).attr('del-index');
                            if(searchArr.length>1){
                                for (var i = 0; i <searchArr.length ; i++) {
                                    if(idx==searchArr[i].id){
                                        searchArr.splice(i,1)
                                    }
                                }
                                $(this).parent().parent('.layui-form-item'+idx).remove();
                            }
                            var isBudgetNames=false;
                            for (var i = 0; i <searchArr.length ; i++) {
                                if(searchArr[i].value=='budgetNames'){
                                    isBudgetNames=true;

                                }
                            }
                            if(isBudgetNames){
                                $('.selectSearchName option[value=budgetNames]').attr('disabled','disabled');
                            }else{
                                $('.selectSearchName option[value=budgetNames]').removeAttr('disabled');
                            }
                            form.render();
                        });
                    };
                    bindSelect(searchLength);
                    bindAdd(searchLength);
                    binDel(searchLength);
                    //查询
                    $('#searchReport').off('click').on('click',function() {
                        var obj={};
                        var allObject=[];
                        for (var i = 0; i <searchArr.length ; i++) {
                            var searchName=$("#report_select"+searchArr[i].id+" option:selected").val();
                            var searchType=$("#report_select"+searchArr[i].id+" option:selected").attr('data-searchtype');
                            var type=$("#report_select"+searchArr[i].id+" option:selected").attr('data-type');
                            var logic=$("#report_and"+searchArr[i].id+" option:selected").val();
                            var operator=$("#report_Symbol"+searchArr[i].id+" option:selected").val();
                            var valueInput =$("#search-report"+searchArr[i].id).val();
                            if(type=='date'){
                                valueInput=dateChange($("#dateReport"+searchArr[i].id)[0].value);
                            }else if (type=='select'&&searchName=='types'){
                                valueInput=$("#report_typeShow"+searchArr[i].id+" select")[0].value;
                            }else if(type=='select'&&searchName=='finishStatus'){
                                valueInput=$("#report_attrShow"+searchArr[i].id+" select")[0].value;
                            }
                            // if(operator=='like'||operator=='not like'){
                            //     valueInput='%'+valueInput+'%';
                            // }
                            if(searchName=='projectEndTime'){
                                searchName='projectEndDate';
                            }
                            if(valueInput){
                                if(!obj[searchName]){
                                    obj[searchName]=[];
                                }
                                obj[searchName].push(
                                    {
                                        "logic":logic ,
                                        "name":valueInput ,
                                        "operator": operator
                                    }
                                );
                                allObject.push(
                                    {
                                        "logic":logic ,
                                        "name":valueInput ,
                                        "operator": operator,
                                        "searchField":searchName
                                    }
                                );
                            }
                        }
                        if(allObject.length!=0){
                            obj.allObject=allObject;
                        }
                        console.log(obj,55555);
                        tableInit(obj);
                    });
                    var reset =function(index){
                        $("#report_select"+index+" option[value='']").prop('selected', 'selected');
                        $("#report_and"+index+" option[value='1']").prop('selected', 'selected');
                        var elem = $('#report_Symbol'+index);
                        elem.empty().append('');
                        elem.append('<option value="=">等于</option>\n' +
                            '                                        <option value="!=">不等于</option>\n' +
                            '                                        <option value="like">包含</option>\n' +
                            '                                        <option value="not like">不包含</option>');
                        $("#search-report"+index).val("");
                        $("#search-report"+index).show();
                        $("#dateReport"+index).val("");
                        $("#dateReport"+index).hide();
                        $('#report_attrShow'+index).hide();
                        $('#report_typeShow'+index).hide();
                        $('.selectSearchName option[value=budgetNames]').removeAttr('disabled');
                        form.render();
                    };
                    //重置
                    $('#resetReport').off('click').on('click',function() {
                        tableInit();
                        for (var i = 0; i <searchArr.length ; i++) {
                            reset(searchArr[i].id);
                            searchArr[i].value='';
                        }
                    });
                }else{
                    return layer.msg(res.message, {
                        icon: 5
                    });
                }
            }
        });
    };
    var projectType=0;
    $.ajax({
        type: "get",
        url: "/api/leaderview/jsonTitle/leaderView",
        success: function (res) {
            if (res != null) {
                var childrenData = [];
                var data = res.data.data;
                if( $('#isEdit').val()==2){
                    data.splice(res.data.data.length-2,2)
                }
                for (var i = 0; i < data.length; i++) {
                    data[i].indexType = i;
                    if (data[i].level == 2) {
                        newData.push(data[i])
                    } else if (data[i].level == 3) {
                        childrenData.push(data[i])
                    }
                }
                for (var j = 0; j < newData.length; j++) {
                    newData[j].children = [];
                    for (var i = 0; i < childrenData.length; i++) {
                        if (childrenData[i].parentId == newData[j].id) {
                            newData[j].children.push(childrenData[i])
                        }
                    }
                }
                layui.tree({
                    elem: '#reportTree', // 指定元素
                    showLine: 'false',
                    nodes: newData,
                    click: function(item){ // 点击节点回调
                        if(item.parentId=='VID001'){
                            projectType=0;
                        }else if(item.parentId=='VID011'){
                            projectType=2;
                        }else if(item.parentId=='VID020'){
                            projectType=1;
                        }
                        if(item.remarks){
                            $('.reportEchart').css('display','none');
                            $('.researchMoney').css('display','none');
                            $('.reportTableForm').css('display','block');
                            reportFun(item.remarks,item.id,item)
                        }
                        if(item.extInfo1!=0&&item.extInfo1!=1&&item.extInfo1){
                            eval(item.extInfo1+"()");
                        }
                    }
                });
                // 默认选中第一个树节点
                $('#reportTree ul li a cite').first().css('color', '#18B1EB');
                $('#reportTree li ul').addClass('layui-show');
                // $('#searchName').attr('name', newData[0].id);
                // $('#searchPatent').attr('name', newData[0].id);
                // 左侧树样式
                $('#reportTree ul li a cite').off('click').on('click', function(){
                    $('#reportTree li a cite').css('color', '#666')
                    $(this).css('color', '#18B1EB')
                });
                $('#reportTree li>a').off('dblclick')
                // $('#reportTree li').find('.layui-tree-spread').parent().prepend('<img class="treeImg" style="display:none;position: absolute;right: 15px;top: 2px;" src="../../assets/images/icon/shouqi.png"/><img class="treeImg" style="position: absolute;right: 15px;top: 2px;" src="../../assets/images/icon/zhankai1.png"/>');
                // $('#reportTree li').find('img').css('cursor', 'pointer');
                // for (var x = 0; x < data.length; x++) {
                //     if(data[x].level == 2){
                //         $('#reportTree li').eq(x-1).prepend('<img style="position: relative;top:-1px;cursor: default" src="../../assets/images/icon/'+data[x].icon+'.png"/>');
                //     }
                // }
                $('#reportTree li').find('.layui-tree-spread').parent().prepend('<img src="../../assetsInfo/images/icon/shouqi.png"/>');
                // $('#reportTree li').find('.layui-tree-leaf').parent().parent().prepend('<img src="../../assets/images/icon/zhankai.png"/>')
                $('#reportTree li ul li ul li').find('.layui-tree-leaf').parent().parent().find('img').css('visibility', 'hidden');

                /* $('#deliverable-tree li').find('.layui-tree-spread').parent().children('a').on('click', function(){
                 $(this).parent().find('img').toggle();
                 $(this).parent().find('ul').toggleClass('layui-show')
                 })*/
                $('#reportTree li').find('.layui-tree-spread').parent().children('img').off('click').on('click', function(){
                    $(this).parent().find('img.treeImg').toggle();
                    $(this).parent().find('ul').toggleClass('layui-show')
                });
                $('.reportEchart').css('display','none');
                $('.researchMoney').css('display','none');
                $('.reportTableForm').css('display','block');
                reportFun(data[2].remarks,data[2].id,data[2]);
                form.render();
            }
        }
    });
    var reportManageEchart = function () {
        $('.reportEchart').css('display','block');
        $('.reportTableForm').css('display','none');
        $('.researchMoney').css('display','none');
        // $.ajax({
        //     type: "get",
        //     url: "/api/research/menu?topNodeId=VID000",
        //     success: function (res) {
        //
        //     }
        // })
        //echart
        var showUpL = function(xData, data1, data2, data3, data4) {
            echarts.dispose(document.getElementById("echartBox"));
            // 图表初始化
            var myChart = echarts.init(document.getElementById("echartBox"));
            // 图表配置项
            var  option = {
                title: {
                    left: 'center',
                    text: '数据中心经营类项目盈亏一览',
                    textStyle: {
                        color:'#008acd'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    textStyle: {
                        align: 'left'
                    },
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {

                    data: ['2017', '2018', '2019'],
                    bottom: 'bottom',
                },
                // toolbox: {
                //     feature: {
                //         saveAsImage: {}
                //     }
                // },
                grid: {
                    left: 3,
                    right: 20,
                    bottom: 50,
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,

                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月','9月','10月','11月','12月']
                }],
                yAxis: [{
                    type: 'value',
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            color: "#E8E8E8"
                        }
                    },
                    scale:true,
                }],
                series: [{
                    name: '2017',
                    type: 'line',
                    color: '#62d5d7',
                    data: [176, 167, 2339, 999, 1242, 455, 1217, 879,454,323,1111,2222]
                }, {
                    name: '2018',
                    type: 'line',
                    color: '#c8b9e6',
                    data: [271, 111, 2155, 778, 1918, 422, 1031, 0,777,645,895,1456]
                }, {
                    name: '2019',
                    type: 'line',
                    color: '#84c4f2',
                    data: [229, 123, 2760, 333, 1062, 412, 1071, 444,565,687,245,1212]
                }]
            };
            myChart.setOption(option);
        };
        showUpL()
    };
    var reportResearchEchart = function () {
        $('.reportEchart').css('display','block');
        $('.reportTableForm').css('display','none');
        $('.researchMoney').css('display','none');
        // $.ajax({
        //     type: "get",
        //     url: "/api/research/menu?topNodeId=VID000",
        //     success: function (res) {
        //
        //     }
        // })
        //echart
        var showUpL = function(xData, data1, data2, data3, data4) {
            echarts.dispose(document.getElementById("echartBox"));
            // 图表初始化
            var myChart = echarts.init(document.getElementById("echartBox"));
            // 图表配置项
            var  option = {
                title: {
                    left: 'center',
                    text: '数据中心科研类项目支出一览',
                    textStyle: {
                        color:'#008acd'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    textStyle: {
                        align: 'left'
                    },
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {

                    data: ['2017', '2018', '2019'],
                    bottom: 'bottom',
                },
                // toolbox: {
                //     feature: {
                //         saveAsImage: {}
                //     }
                // },
                grid: {
                    left: 3,
                    right: 20,
                    bottom: 50,
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,

                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月','9月','10月','11月','12月']
                }],
                yAxis: [{
                    type: 'value',
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            color: "#E8E8E8"
                        }
                    },
                    scale:true,
                }],
                series: [{
                    name: '2017',
                    type: 'line',
                    color: '#62d5d7',
                    data: [1212, 454, 854, 1541, 1242, 345, 1217, 879,454,323,1111,2012]
                }, {
                    name: '2018',
                    type: 'line',
                    color: '#c8b9e6',
                    data: [1111, 655, 848, 1200, 999, 654, 1031, 0,777,645,895,1456]
                }, {
                    name: '2019',
                    type: 'line',
                    color: '#84c4f2',
                    data: [1002, 520, 778, 1344, 1062, 454, 1071, 444,565,687,245,1212]
                }]
            };
            myChart.setOption(option);
        };
        showUpL()
    };
    var reportManageAllEchart = function () {
        $('.reportEchart').css('display','block');
        $('.reportTableForm').css('display','none');
        $('.researchMoney').css('display','block');
        var showUpL = function(xData, data1, data2, data3, data4) {
            echarts.dispose(document.getElementById("echartBox"));
            // 图表初始化
            var myChart = echarts.init(document.getElementById("echartBox"));

            // 图表配置项
            var  option = {
                tooltip: {
                    trigger: 'axis',
                    textStyle: {
                        align: 'left'
                    },
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: ['项目总盈亏'],
                    top: 'top',
                },
                // toolbox: {
                //     feature: {
                //         saveAsImage: {}
                //     }
                // },
                grid: {
                    left: 3,
                    right: 20,
                    bottom: 50,
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,

                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月','9月','10月','11月','12月']
                }],
                yAxis: [{
                    type: 'value',
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            color: "#E8E8E8"
                        }
                    },
                    scale:true,
                }],
                series: [{
                    name: '项目总盈亏',
                    type: 'line',
                    color: '#d16865',
                    data: [1212, 454, 854, 1541, 1242, 345, 1217, 879,454,323,1111,2012]
                }]
            };
            myChart.setOption(option);
        };
        showUpL()
    }
})