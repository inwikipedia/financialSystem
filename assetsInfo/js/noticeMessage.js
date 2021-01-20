var timeOutDailyNumber;
//获取未审批日报条数
var getDailyNumber;
timeOutDailyNumber =setInterval(function () {
    getDailyNumber();
},300000);
var loginTimeOut =setTimeout(function () {
    clearTimeout(loginTimeOut);
    layer.msg('登录状态失效，请重新登录！');
   var loginTimeHH= setTimeout(function () {
       clearTimeout(loginTimeHH);
        layui.config.removeAccount();
        location.replace('/ADC_info/login.html?redirect_to=' + window.location.hash);
    },2000);
},14400000);
layui.use(['admin', 'index', 'laydate', 'table', 'element','upload','formSelects'], function () {
    var element = layui.element,
        table = layui.table,
        laydate = layui.laydate,
        admin = layui.admin,
        config = layui.config,
        tools = layui.tools,
        layer = layui.layer,
        formSelects = layui.formSelects,
        upload = layui.upload,
        form = layui.form;
    var fullHeight = "254px";
    var isAdmin=false;
    for(var items of config.getAccount().roles) {
        if (items.extInfo == 'SUPER_ADMIN'||items.extInfo == 'ADMIN'||items.extInfo=='NOTICE_ADMIN') {
            isAdmin = true;

        }
    }
    if(isAdmin){
        $("#tableBar").show();
    }else{
        $("#tableBar").hide();
    }
    //判断窗口分辨率
    $(document).ready(function() {
        if(screen.width==1920){
            if(isAdmin){
                fullHeight="450";
            }else{
                fullHeight="490";
            }
        }if(screen.width<=1366){
            if(isAdmin){
                fullHeight="210";
            }else{
                fullHeight="252";
            }
        }
    });
    $('.noticeNumberTitle').on("mouseenter",function () {
        $(".noticeNumberFirst").hide();
    }).on("mouseleave",function () {
        if($(".noticeNumberFirst").html()!=0){
            $(".noticeNumberFirst").show();
        }
    });
    getDailyNumber= function () {
        var optionNum={
            approveState:2,
            page:1,
            pageSize:9999
        };
        $.ajax({
            url: "/api/Daily/page4Tips",
            type: 'post',
            data: JSON.stringify(optionNum),
            contentType: 'application/json',
            success: function (res) {
                if (res.ok) {
                    if(res.data.count==0){
                        $(".noticeNumber").hide();
                    }else{
                        $(".noticeNumber").show();
                    }
                    if(String(res.data.count).length==1){
                        $(".noticeNumber").css("width","16px");
                    }else if(String(res.data.count).length==2){
                        $(".noticeNumber").css("width","22px");
                    }else if(String(res.data.count).length==3){
                        $(".noticeNumber").css("width","30px");
                        res.data.count="99+";
                    }
                    $(".noticeNumber").html(res.data.count)
                } else {
                    return layui.layer.msg(res.message, {
                        icon: 5
                    });
                }
            },
            error: function (err) {
                return layui.layer.msg(err.message, {
                    icon: 5
                });
            }
        });
    };
    getDailyNumber();

    /**
     * 功能:系统通知
     * 时间:2020/3/23
     * 作者:lijiacheng
     * @param
     */
    var messageNoti =function () {
        var ts =new Date().getTime();
        $.ajax({
            url: "/api/notice/tipUserNoticeList?ts="+ts,
            type: 'get',
            success: function (res) {
                if (res.ok) {
                    var arrData= res.data;
                    var html ="";
                    for(var i =0;i<arrData.length;i++){
                        var msgTitle ="系统公告";
                        var msgContent ="您收到一条新的系统公告，请前往通知公告查看！";
                        if(arrData[i].noticeName.indexOf("财务成本认领通知")>-1){
                            msgTitle="财务简报";
                            msgContent="您所在部门有未认领的成本数据，请前往财务简报-成本数据管理查看！";
                            if(arrData[i].noticeContent.indexOf("逾期")>-1){
                                msgContent="您所在部门有逾期未认领的成本数据，请前往财务简报-成本数据管理查看！";
                            }
                        }
                        html+='<div class="messageLi">\n' +
                            '            <div class="message-top">\n' +
                            '                <span class="messageCycle"></span>\n' +
                            '                <span  class="messageLi-title">'+msgTitle+'</span>\n' +
                            '                <span class="messageLi-time">'+(arrData[i].updateTime?tools.getDate(arrData[i].updateTime,"YYYY/MM/DD HH:mm:ss"):"")+'</span>\n' +
                            '            </div>\n' +
                            '            <div  class="message-bottom" title="'+msgContent+'">'+msgContent+'</div>\n' +
                            '        </div>';
                    }
                    if(html){
                        $(".messageBox").css("display","block");
                        $(".message-notice").css("display","none");
                        $(".messageBox").css("height","300px");
                        $(".messageUl").css("height","240px");
                        $(".messageUl").empty().append(html);
                    }else{
                        $(".messageBox").css("display","none");
                        $(".message-notice").css("display","block");
                        $(".huiNotice").css("display","inline-block");
                        $(".lanNotice").css("display","none");
                        var noHtml='<div style="text-align: center;line-height: 70px;">您暂无新消息通知!</div>';
                        $(".messageBox").css("height","auto");
                        $(".messageUl").css("height","70px");
                        $(".messageUl").empty().append(noHtml);
                    }
                    $(".messageLi").off("click").on("click",function () {
                        ignoreFun([arrData[$(this).index()]])
                    });
                    $(".messageIgnore").off("click").on("click",function () {
                        if(arrData.length!=0){
                            ignoreFun(arrData,true)
                        }
                    });
                    $(".messageTitle_right").off("click").on("click",function () {
                        $(".messageBox").css("display","none");
                        $(".message-notice").css("display","block");
                        $(".huiNotice").css("display","inline-block");
                        $(".lanNotice").css("display","none");
                    });
                    $(".message-notice").off("click").on("click",function () {
                        $(".messageBox").css("display","block");
                        $(".message-notice").css("display","none");
                    });
                    $(".message-notice").off("mouseover").on("mouseover",function () {
                        $(".huiNotice").css("display","none");
                        $(".lanNotice").css("display","inline-block");
                    }).off("mouseout").on("mouseout",function () {
                        $(".huiNotice").css("display","inline-block");
                        $(".lanNotice").css("display","none");
                    });
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
    };
    messageNoti();
    var timeOut =setInterval(function () {
        messageNoti();
    },30000)
    var noticeRenderTable = function () {
        // 渲染表格
        table.render({
            elem: '#table-bulletin',
            id: 'table-bulletin',
            // height: window_height - 50,
            height: fullHeight,
            // height: "210px",
            // width:'full-500',
            method:'post',
            contentType: 'application/json',
            url: admin.formatUrl('/api/notice/noticeUserVOList'),
            // 格式化后台返回的数据
            parseData: function (res) { //res 即为原始返回的数据
                // 返回结果，进行渲染表格
                console.log(res);
                res.data.dataList=!res.data.dataList?[]:res.data.dataList;
                if(res.data.dataList.length==0){
                    $(".tableShow").hide();
                    $(".tableNone").show();
                }else{
                    $(".tableShow").show();
                    $(".tableNone").hide();
                }
                return {
                    "code": res.respCode, //解析接口状态
                    "msg": res.message, //解析提示文本
                    "data": !res.data.dataList?[]:res.data.dataList, //解析数据列表
                    "count": res.data.count //解析数据长度
                };
            },
            text :{
                none: '<div style="text-align: center;background-color: #fff">\n' +
                '<div style="height: 10px">无数据</div><img style="height: 100px" src="../assets/images/back.png" alt="">\n' +
                '</div>'
            },
            cols: [
                [
                    {
                        type: 'checkbox',
                        hide: !isAdmin
                    },
                    {
                        title: "#",
                        type: 'numbers'
                    }, {
                    field: 'noticeName',
                    title: '名称',
                    align: 'left',
                    style: 'color: #333333;'

                }, {
                    field: 'noticeTypeName',
                    title: '类型',
                    align: 'left',
                    style: 'color: #333333;',
                    width:110,

                }, {
                    title: '操作',
                    align: 'center',
                    width:80,
                    // toolbar: '#barTool',
                    templet: function (d) {
                        if (d.optFlag == 1) {
                            return '<button class="layui-btn layui-btn-normal layui-btn-xs b-b" lay-event="btn_download">下载</button>';
                        } else {
                            return '<button class="layui-btn layui-btn-normal layui-btn-xs b-b" lay-event="btn_look">查看</button>';
                        }
                    },
                    style: 'color: #333333;',
                },
                    {
                        field: 'updateTime',
                        title: '时间',
                        align: 'left',
                        width:160,
                        templet: function (d) {
                            return d.updateTime?tools.getDate(d.updateTime,"YYYY/MM/DD HH:mm:ss"):'';
                        },
                        style: 'color: #333333;',

                    }
                ]
            ],
            request: {
                pageName: 'page',
                limitName: 'pageSize'
            },
            limit: 10,
            limits: [10, 20, 30, 40, 50],
            // where:{
            //     page:1,
            //     pageSize:10
            // },
            page: true,
            // even: true,
            // skin: 'nob',
        });
    }
    noticeRenderTable();
    table.on('tool(table-bulletin)', function (obj) {
        var data = obj.data;
        if (obj.event === 'btn_download') {
            if (data.fileId) {
                window.location.href = "/api/sys/file/" + data.fileId + "/download"
            } else {
                layer.msg('文件不存在')
            }
        } else if (obj.event === 'btn_look') {
            popModelNotice("look", data);
        }
    })
    // 批量删除
    $("#tableBar").find('#btn_notice_del').off("click").on('click', function () {
        var checkStatus = table.checkStatus('table-bulletin');
        var data = checkStatus.data[0];
        if (checkStatus.data.length == 0) {
            return layer.msg('请选择要删除的公告', {
                icon: 0
            });
        }
        var delArr = [];
        for (var i = 0; i < checkStatus.data.length; i++) {
            delArr.push(checkStatus.data[i].id);
        }
        // 删除公告
        layer.confirm('确定删除这' + checkStatus.data.length + '条公告吗？', {
            icon: 3,
            title: '提示'
        }, function () {
            admin.req('/api/notice/delete/' + delArr.join(','), {}, function (data) {
                if (data.ok) {
                    layer.msg('删除公告成功！', {
                        icon: 1
                    });
                    clearInterval(timeOut);
                    messageNoti();
                    timeOut =setInterval(function () {
                        messageNoti();
                    },30000)
                    noticeRenderTable();
                } else {
                    return layer.msg('删除公告失败：' + data.message, {
                        icon: 5
                    });
                }
            }, {
                method: 'delete'
            });
        });
    });
    // 新增
    $("#tableBar").find('#btn_notice_add').off("click").on('click', function () {
        popModelNotice("add");
    });
    $("#tableBar").find('#btn_notice_edit').off("click").on('click', function () {
        var checkStatus = table.checkStatus('table-bulletin');
        console.log(checkStatus)
        if (checkStatus.data.length != 1) {
            return layer.msg('请选择1条要编辑的公告', {
                icon: 0
            });
        }
        popModelNotice("edit", checkStatus.data[0]);

    });

    var ignoreFun =function (data,type) {
        var option =[];
        for(var i =0;i<data.length;i++){
            option.push({
                noticeId:data[i].id,
                operationStatus:1
            });
        }

        var load2 =layer.load(2);
        $.ajax({
            url: "/api/notice/ignoreNotice",
            type: 'put',
            data: JSON.stringify(option),
            contentType: 'application/json',
            success: function (res) {
                layer.close(load2);
                if (res.ok) {
                    if(!type){
                        if(data[0].noticeName.indexOf("财务成本认领通知")>-1){
                            window.open("#!costClaim","_self");
                        }else{
                            popModelNotice("look", data[0],true)
                        }
                    }
                    clearInterval(timeOut);
                    messageNoti();
                    timeOut =setInterval(function () {
                        messageNoti();
                    },30000)
                } else {
                    return layer.msg(res.message, {
                        icon: 5
                    });
                }
            },
            error: function (err) {
                layer.close(load2);
                return layer.msg(err.message, {
                    icon: 5
                });
            }
        });
    };
    // 弹出框
    function popModelNotice(type, data,isNotice) {
        console.log(data);
        // 判断操作事件
        if (type === 'add') {
            var title = '新增公告';
            data = {};
        } else if (type === 'edit') {
            var title = '编辑公告：' + data.noticeName;
        } else if (type === 'look') {
            var title = '公告详情：' + data.noticeName;
        }
        data.type = type;

        admin.popupCenter({
            resize: false,
            title: title,
            area:["650px","500px"],
            path: 'components/tpl/system_notice.html',
            finish: function () {
                noticeRenderTable();
            },
            success: function () {
                setFormValue(data, type);
                admin.req(
                    "/api/sys/dictype/list", {
                        dicCode: "notice_type"
                    },
                    function (res) {
                        var arr = res.data,
                            formSelectArr = [];
                        var optionSe ="<option value=''>选择类型</option>";
                        for (var i = 0; i < arr.length; i++) {
                            var land = arr[i];
                            optionSe += '<option data-dictypecode="'+land.dicTypeCode+'" value="' + land.id + '" id="'+ land.id +'">' + land.dicTypeName +
                                '</option>';
                        }
                        $("#selectCode").empty().append(optionSe);
                        form.on('select(userState_pop)',function (data) {
                            data.elem.dataset.name=data.elem[data.elem.selectedIndex].value;
                            data.elem.dataset.id=data.elem[data.elem.selectedIndex].id;
                            var code=$(data.elem[data.elem.selectedIndex]).attr("data-dictypecode");
                            if (code === 'ZL') {
                                $(".noticeForm").find('#shangchuan').show();
                                $('#selectCode').attr('data-code', code)
                            }
                            if (code === 'XTTZ') {
                                $(".noticeForm").find('#shangchuan').hide();
                                $('#selectCode').attr('data-code', code)
                            }
                            // data.elem.dataset.dictypecode=$(data.elem[data.elem.selectedIndex]).attr("data-dictypecode");
                        })
                        // for (var i = 0; i < arr.length; i++) {
                        //     formSelectArr.push({
                        //         name: arr[i].dicTypeName,
                        //         value: arr[i].id,
                        //         code: arr[i].dicTypeCode,
                        //         id: arr[i].id
                        //     })
                        // }
                        // formSelects.data("userState_pop", "local", {
                        //     arr: formSelectArr
                        // })
                        // 下拉
                        // formSelects.on('userState_pop', function (id, vals, val, isAdd, isDisabled) {
                        //     console.log(val, isAdd, isDisabled)
                        //     if (val.code === 'ZL') {
                        //         $(".noticeForm").find('#shangchuan').show();
                        //         $('#selectCode').attr('data-code', val.code)
                        //     }
                        //     if (val.code === 'XTTZ') {
                        //         $(".noticeForm").find('#shangchuan').hide();
                        //         $('#selectCode').attr('data-code', val.code)
                        //     }
                        // }, true);
                        // formSelects.btns("userState_pop", [])
                        if (type === "edit") {
                            $(".p-form input[name='noticeIsLook']").parent().parent().show();
                            $(".p-form input[name='noticeIsLook']").parent().parent().show();
                            console.log(data, 'data')
                            $('#selectCode').val(data.noticeTypeId);
                            // layui.formSelects.value("userState_pop", [data.noticeTypeId])
                            $(".noticeForm").find('#shangchuan').show();
                            $(".noticeForm").find('#fileName').val(data.noticeFileName)
                            $(".noticeForm").find('#fileId').val(data.noticeFileId)
                            arr.map(function(item) {
                                if (item.id == data.noticeTypeId) {
                                    $('#selectCode').attr('data-code', item.dicTypeCode)
                                    if (item.dicTypeCode === 'ZL') {
                                        $(".noticeForm").find('#shangchuan').show();
                                    }
                                    if (item.dicTypeCode === 'XTTZ') {
                                        $(".noticeForm").find('#shangchuan').hide();
                                    }
                                }
                            })
                            var file = data.noticeFileId;
                            //删除附件
                            $(".noticeForm").find("#delFile")
                                .off("click")
                                .on("click", function () {
                                    if ($(".noticeForm").find("#fileId").val()) {
                                        $.ajax({
                                            url: "/api/sys/file/deleteFileByFileId/" + file,
                                            type: "delete",
                                            success: function (data) {
                                                if (data.ok) {
                                                    $(".noticeForm").find("#fileName").val("")
                                                    $(".noticeForm").find("#fileId").val("")
                                                    file = ""
                                                } else {
                                                    return layer.msg(data.reason, {
                                                        icon: 5
                                                    })
                                                }
                                            }
                                        })
                                    } else {
                                        return layer.msg("请先选择文件", {
                                            icon: 5
                                        })
                                    }
                                })
                        } else if (type === "add") {
                            $(".p-form input[name='noticeIsLook']").parent().parent().show();
                            // layui.formSelects.value("userState_pop", ["0"])
                        } else if (type === "look") {
                            if(isAdmin){
                                $(".p-form input[name='noticeIsLook']").parent().parent().show();
                            }
                            $('#selectCode').val(data.noticeTypeId);
                            $('#selectCode').attr("disabled","disabled");
                            $(".p-form input[name='noticeIsLook']").attr("disabled","disabled");
                            $(".noticeForm").find('#shangchuan').show();
                            $(".noticeForm").find('#fileName').val(data.noticeFileName)
                            $(".noticeForm").find('#fileId').val(data.noticeFileId)
                            arr.map(function(item) {
                                if (item.id == data.noticeTypeId) {
                                    $(".noticeForm").find('#selectCode').attr('data-code', item.dicTypeCode)
                                    if (item.dicTypeCode === 'ZL') {
                                        $(".noticeForm").find('#shangchuan').show();
                                        $(".noticeForm").find('#downFile').show();
                                        $(".noticeForm").find('#chooseFile').hide();
                                        $(".noticeForm").find('#delFile').hide();
                                        $(".noticeForm").find('#upload').hide();
                                    }
                                    if (item.dicTypeCode === 'XTTZ') {
                                        $(".noticeForm").find('#shangchuan').hide();
                                    }
                                }
                            })
                            //下载附件
                            $(".noticeForm").find("#downFile")
                                .off("click")
                                .on("click", function () {
                                    if (data.noticeFileId) {
                                        var file = data.noticeFileId;
                                        window.open("/ADC_info/api/sys/file/"+file+"/download")
                                    } else {
                                        return layer.msg("文件不存在或损坏，请联系管理员", {
                                            icon: 5
                                        })
                                    }
                                })
                        }
                        admin.removeLoading(".userState-loading")
                        layui.form.render();
                    }
                )

            }
        });
    }
    // 设置表单内容
    function setFormValue(obj, type) {
        console.log(type)
        console.log(obj, 'obj')
        var inputs = $('.p-form').find('input'),
            formNames = ['noticeName', 'noticeType', 'noticeTypeId', 'type', 'noticeContent', 'id'];

        // obj.title && title.text(obj.title);

        $(".p-form input[name='noticeIsLook'][value='"+obj.noticeIsLook+"']").prop("checked",true);
        for (var i = 0; i < formNames.length; i++) {
            if(obj[formNames[i]]){
                obj[formNames[i]] = ADCFormDesignHelper.htmlDecodeByRegExp(obj[formNames[i]]);
            }
            console.log(obj[formNames[i]])
            if (type == 'edit') {
                if(obj.noticeIsLook==0){
                    $("#receiveUserIds").parent().parent().show();
                    $('#receiveUserIds').attr('data-name',obj.receiveUserNames);
                    $('#receiveUserIds').attr('disabled',"disabled");
                    $('#receiveUserIds').attr('title',obj.receiveUserNames);
                    $('#receiveUserIds').val(obj.receiveUserNames);
                    $('#receiveUserIds').attr('data-id',obj.receiveUserIds);
                }else{
                    $("#receiveUserIds").parent().parent().hide();
                }
                $(' .p-form  input[name="' + formNames[i] + '"]').val(obj[formNames[i]]);
                $('.p-form textarea').val(obj.noticeContent);
                $('.p-form  input[name="noticeType"]').val('edit');

                // if(obj.optFlag == 1){
                //   $('#btn').trigger("click")
                // }
                // if(obj.optFlag == 2){
                //   $('#btn').trigger("click")
                // }
            } else if (type == 'add') {
                $('.p-form  input[name="' + formNames[i] + '"]').val('');
                $('.p-form  input[name="noticeType"]').val('add');
            } else if (type == 'look') {
                if(isAdmin){
                    if(obj.noticeIsLook==0){
                        $("#receiveUserIds").parent().parent().show();
                        $('#receiveUserIds').attr('data-name',obj.receiveUserNames);
                        $('#receiveUserIds').attr('disabled',"disabled");
                        $('#receiveUserIds').attr('title',obj.receiveUserNames);
                        $('#receiveUserIds').val(obj.receiveUserNames);
                        $('#receiveUserIds').attr('data-id',obj.receiveUserIds);
                    }else{
                        $("#receiveUserIds").parent().parent().hide();
                    }
                }
                console.log($(".noticeForm").find('.p-form input[name="' + formNames[i] + '"]'),44444444)
                $(".noticeForm").find('.p-form input[name="' + formNames[i] + '"]').val(obj[formNames[i]]);
                $(".noticeForm").find('.p-form input[name="' + formNames[i] + '"]').attr('readonly', 'readonly');
                $(".noticeForm").find('.p-form textarea').val(obj.noticeContent).attr('readonly', 'readonly').css("height",'270px');
                $(".noticeForm").find('.p-form input[name="noticeType"]').val('look');
                $(".noticeForm").find('#submitBtn').hide();

            }
        }
    }


    // 表单提交，编辑/新增
    // 获取右侧表单内的数据，
    // 给后台发请求执行操作
    form.on('submit(menuSave_menu)', function (data) {
        console.log(data.field, 'data.field')
        // 获取表单数据
        var d = data.field;
        var code = $('#selectCode').attr('data-code');

        // 判断公告名称ID 是否填写
        if (d.noticeName === '') {
            return layer.msg('名称为必填项！', {
                icon: 5
            });
        }
        if(d.noticeIsLook==0&&!$('#receiveUserIds').val()){
            return layer.msg('接收人为必填项！', {
                icon: 5
            });
        }
        if (d.noticeTypeId === '') {
            return layer.msg('类型为必填项！', {
                icon: 5
            });
        }
        if (code == 'ZL' && d.fileId == '') {
            return layer.msg('请先上传文件！', {
                icon: 5
            });
        }
        if (code == 'XTTZ' && d.content == '') {
            return layer.msg('内容为必填项！', {
                icon: 5
            });
        }
        d.receiveUserIds=$('#receiveUserIds').attr('data-id');
        d.receiveUserNames= $('#receiveUserIds').val();
        // 判断是编辑还是新增
        // 设置不同的 HTTP 方法，和提示信息
        if (d.noticeType === 'add') {
            var ajaxType = 'POST',
                ajaxUrl="/api/notice/create",
                ajaxName = '新增公告';
        } else if (d.noticeType === 'edit') {
            var ajaxType = 'PUT',
                ajaxUrl="/api/notice/update",
                ajaxName = '编辑公告';
        }
        delete d.noticeType;
        if (code === 'XTTZ') {
            // d.optFlag = 2;
            // 删除和提交信息无关的元素
            delete d.file;
            delete d.fileId;
        } else if (code === 'ZL') {
            // d.optFlag = 1;
            d.noticeFileId=d.fileId;
            d.noticeFileName = $(".noticeForm").find("#fileName").val();
            delete d.fileId;
        }
        console.log($("#fileName").val())
        // d.ext1 = $("#fileName").val()
        // var noticeTypeNameArr =formSelects.value('userState_pop');
        // d.noticeTypeName= noticeTypeNameArr[0].name;
        // 发送请求
        admin.req(ajaxUrl, d, function (data) {
            if (data.ok) {
                layer.msg(ajaxName + '成功！', {
                    icon: 1
                });
                clearInterval(timeOut);
                messageNoti();
                timeOut =setInterval(function () {
                    messageNoti();
                },30000)
                admin.finishPopupCenter();
            } else {
                return layer.msg(ajaxName + '失败：' + data.message, {
                    icon: 5
                });
            }
        }, {
            method: ajaxType
        });

    });
})