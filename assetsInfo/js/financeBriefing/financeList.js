layui.use(['table', 'config','form'], function () {
    var config = layui.config,admin = layui.admin,table = layui.table,tools=layui.tools;
    var account = config.getAccount();
    var form = layui.form;
    // 渲染表格
    var renderTable = function (search) {
        if (!search) {
            search = {};
        }
        // 渲染表格
        table.render({
            elem: '#financeTbale',
            id: 'financeTbale',
            url: admin.formatUrl('/api/finicialProcess/financialProcessTable/page'),
            // 格式化后台返回的数据
            parseData: function (res) { //res 即为原始返回的数据
                // 返回结果，进行渲染表格
                return {
                    "code": res.respCode, //解析接口状态
                    "msg": res.message, //解析提示文本
                    "count": res.data.count, //解析数据长度
                    "data": res.data.list //解析数据列表
                };
            },
            // height: 472,
            cols: [
                [ {
                    field: 'financialTableName',
                    title: '名称',
                    align: 'center',
                    minWidth: 240,
                    templet:function(d) {
                        var text= d.financialTableName ? d.financialTableName : "";
                        return '<div title="'+text+'"><span>'+ text +'</span></div>'
                    }
                }, {
                    field: 'createTime',
                    title: '创建日期',
                    align: 'center',
                    minWidth: 240,
                    templet:function(d) {
                        var text= d.createTime ? tools.getDate(d.createTime, "YYYY-MM-DD HH:mm:ss") : "";
                        return '<div title="'+text+'"><span>'+ text +'</span></div>'
                    }
                },  {
                    field: 'createUserName',
                    title: '发布者',
                    align: 'center',
                    minWidth: 240,
                    templet:function(d) {
                        var text= d.createUserName? d.createUserName : "";
                        return '<div title="'+text+'"><span>'+ text +'</span></div>'
                    }
                },{
                    title: '操作',
                    align: 'left',
                    width: 240,
                    toolbar:'#barTool',
                    unresize: true
                }]
            ],
            cellMinWidth: 90,
            page: {
                layout: ['limit', 'count', 'prev', 'page', 'next', 'skip']
            },
            request: {
                pageName: 'page',
                limitName: 'pageSize'
            },
            where: search
        });
    };
    for(var i =0;i<account.roles.length;i++){
        if(account.roles[i].extInfo=='FINANCIAL_OFFICER'){
            $('#btn-create').css('display','block');
            break;
        }
    }
    // $.ajax({
    //     url: "api/sys/dictype/list?dicCode=financialreport",
    //     type: 'get',
    //     // data:JSON.stringify(objData),
    //     contentType: 'application/json',
    //     success: function (res) {
    //         if (res.ok) {
    //             var arrId=[];
    //             for (var i = 0; i <res.data.length ; i++) {
    //                 arrId.push(res.data[i].dicTypeCode);
    //             }
    //             console.log(account.usid,arrId,account)
    //             if(arrId.indexOf(account.usid)!=-1){
    //                 console.log(account.usid,arrId,account)
    //
    //             }
    //         }else{
    //             return  layer.msg(res.message, {
    //                 icon: 5
    //             });
    //         }
    //     }
    // });
    renderTable();
    table.on('tool(financeTbale)', function (obj) {
        var dateTime=new Date().getTime();
        var data=obj.data;
        if(obj.event === 'btn-edit'||obj.event === 'btn-look'){
            var port=window.location.port;
            var protocol=window.location.protocol;
            var domain = document.domain;
            var winObj = window.open("http://"+domain+":"+port+"/ADC_info/financialEditor?eventReceiveId="+data.id+'&time='+dateTime);
            // var winObj = window.open("components/weekly/spreadHtml.html");
            sessionStorage.setItem("documentKey", data.extInfo6);
            var loop = setInterval(function() {
                // layer.msg('校验中。。。',{icon:16,time:2000,shade:0});
                if (winObj.closed) {
                    clearInterval(loop);
                    table.reload('financeTbale', {
                        where: {
                            reload: new Date().getTime()
                        }
                    });
                }
            }, 300);
        }else if(obj.event === 'btn-export'){
            window.location.href = "/ADC_info/api/sys/file/"+data.fileId+"/download";
        }else if(obj.event === 'btn-send'){
            var option={
                id:data.id
            };
            var index = layer.load(2, {
                shade: [0.2, '#fff'],
                content:'<span style="margin-left: -75px;">正在发送中，请稍候...</span>',
                success: function (layerContentStyle) {
                    layerContentStyle.find('.layui-layer-content').css({
                        'padding-top': '35px',
                        'text-align': 'center',
                        'width': '140px'
                    });
                }
            });
            $.ajax({
                url: "/api/finicialProcess/financialProcessTable/send",
                type: 'post',
                data: JSON.stringify(option),
                contentType: 'application/json',
                success: function (res) {
                    layer.close(index);
                    if (res.ok) {
                        table.reload('financeTbale', {
                            where: {
                                reload: new Date().getTime()
                            }
                        });
                        return layer.msg('发送成功', {
                            icon: 1
                        });
                    } else {
                        return layer.msg(res.message, {
                            icon: 5
                        });
                    }
                }
            });
        }else if(obj.event === 'btn-del'){
            layer.confirm('确定删除该条简报吗？', {
                icon: 3,
                title: '提示'
            }, function() {
                $.ajax({
                    url: "/api/finicialProcess/financialProcessTable/"+data.id,
                    type: 'delete',
                    contentType: 'application/json',
                    success: function (res) {
                        if (res.ok) {
                            table.reload('financeTbale', {
                                where: {
                                    reload: new Date().getTime()
                                }
                            });
                            return  layer.msg('删除成功', {
                                icon: 1
                            });
                        }else{
                            return  layer.msg(res.message, {
                                icon: 5
                            });
                        }
                    }
                });
            });
        }
    });
    $('#btn-create').off('click').on('click',function () {
        admin.popupCenter({
            title: '新建',
            area: ['652px', '390px'],
            path: 'components/financeBriefing/uploadFinance.html',
            finish: function(data) {

                if(data){
                    table.reload('financeTbale', {
                        where: {
                            reload: new Date().getTime()
                        }
                    });
                }
            },
            success: function() {
            }
        });
    });
});