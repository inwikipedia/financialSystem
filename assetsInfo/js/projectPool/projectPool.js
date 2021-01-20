//控制input只能输入非负整数
function replaceNonNegative(obj) {
    obj.value=obj.value.replace(/[^\d]/g,'');
}
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
    // 渲染表格
    var renderTable = function (search) {
        if (!search) {
            search = {};
        }
        var col =[
            {
                type: 'numbers',
                title: '序号',
                width: 80,
                align: 'center',
            },
            {
                field: 'contractNo',
                title: '合同编号',
                width: 140,
                align: 'center',
                templet: function(d) {
                    if(d.contractNo){
                        return '<div title="'+d.contractNo+'"><div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">'+ d.contractNo +'</div></div>';
                    }else{
                        return '<div></div>'
                    }
                }
            },
            {
                field: 'name',
                title: '合同名称',
                align: 'center',
                templet: function(d) {
                    if(d.name){
                        return '<div title="'+d.name+'"><div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">'+ d.name +'</div></div>';
                    }else{
                        return '<div></div>'
                    }

                }
            },
            {
                field: 'projectOwner',
                title: '客户名称',
                align: 'center',
                templet: function(d) {
                    if(d.projectOwner){
                        return '<div title="'+d.projectOwner+'"><div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">'+ d.projectOwner +'</div></div>';
                    }else{
                        return '<div></div>'
                    }
                }
            }, {
                field: 'contractAmountStr',
                title: '合同金额',
                align: 'center',
                templet: function(d) {
                    if(d.contractAmountStr||d.contractAmountStr==0){
                        return '<div title="'+d.contractAmountStr+'"><div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">'+ d.contractAmountStr +'</div></div>';
                    }else{
                        return '<div></div>'
                    }
                }
            }, {
                field: 'projectBeginTime',
                title: '生效日期',
                align: 'center',
                templet: function (row) {
                    if (row.projectBeginTime) {
                        return '<div title="'+tools.getDate(row.projectBeginTime,"YYYY-MM-DD")+'"><div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">'+ tools.getDate(row.projectBeginTime,"YYYY-MM-DD") +'</div></div>' ;
                    }else{
                        return '<div></div>'
                    }
                }
            }, {
                field: 'projectEndTime',
                title: '终止日期',
                align: 'center',
                templet: function (row) {
                    if (row.projectEndTime) {
                        return '<div title="'+tools.getDate(row.projectEndTime,"YYYY-MM-DD")+'"><div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">'+ tools.getDate(row.projectEndTime,"YYYY-MM-DD") +'</div></div>' ;
                    }else{
                        return '<div></div>'
                    }
                }
            },{
                title: '操作',
                align: 'center',
                toolbar:'#barTool',
                width: 163
            }
        ];
        for(var items of config.getAccount().roles) {
            if (items.extInfo == 'ZHU_REN') {
                col.unshift({
                    field: 'projectTeam',
                    title: '部门名称',
                    align: 'center',
                    templet: function(d) {
                        if(d.projectTeam){
                            return '<div title="'+d.projectTeam+'"><div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">'+ d.projectTeam +'</div></div>';
                        }else{
                            return '<div></div>'
                        }

                    }
                })
                break
            }
            if (items.extInfo == 'SUPER_ADMIN'||items.extInfo == 'ADMIN'||items.extInfo=="PROJECT_ADMIN") {
                col.unshift({
                    field: 'projectTeam',
                    title: '部门名称',
                    align: 'center',
                    templet: function(d) {
                        if(d.projectTeam){
                            return '<div title="'+d.projectTeam+'"><div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">'+ d.projectTeam +'</div></div>';
                        }else{
                            return '<div></div>'
                        }

                    }
                });
                col.unshift({
                    type: 'checkbox'
                });
                $("#btn-dept").css("display","inline-block");
                break
            }

        }
        // 渲染表格
        table.render({
            elem: '#tableContent-project',
            id: 'tableContent-project',
            url: admin.formatUrl('/api/project/pool/page'),
            contentType: "application/json",
            method: 'post',
            // 格式化后台返回的数据
            parseData: function (res) { //res 即为原始返回的数据

                // 返回结果，进行渲染表格
                return {
                    "code": res.respCode, //解析接口状态
                    "count": res.data.count,
                    "msg": res.message, //解析提示文本
                    "data": res.data.list //解析数据列表
                };
            },
            request: {
                pageName: 'page',
                limitName: 'pageSize'
            },
            height:'full-200',
            cols: [
                col
            ],
            page: true,
            limit: 15, //显示的数量
            limits: [10, 15, 20, 25, 30],
            cellMinWidth: 90,
            where: search
        });
    }

// 初始化，执行一次渲染表格
    renderTable();
    $('#btn-dept').off('click').on('click', function() {
        var checkStatus = table.checkStatus('tableContent-project');
        if (checkStatus.data.length == 0) {
            return layer.msg('请至少选择一条！', {
                icon: 0
            });
        }
        admin.popupCenter({
            title: '变更部门',
            area: ['400px', '200px'],
            path: 'components/projectPool/projectDept.html',
            finish: function(data) {
                table.reload('tableContent-project', {
                    where: {
                        reload: new Date().getTime()
                    }
                });
            },
            success: function() {
                $('#infoOwnDepartment').off('click').on('click',function () {
                    layer.open({
                        type: 2,
                        id: 'orgsSelect',
                        title: false,
                        moveOut: true,
                        content: '/ADC_info/components/tpl/dept_select.html',
                        area: ['50%', '70%'],
                        btn: ['确定', '取消'],
                        yes: function (index, layero) {
                            var finalData = $('#orgsSelect iframe')[0].contentWindow.task_orgs_select.finish();
                            // 获取到数据，执行回掉函数
                            if (finalData.id == '' || finalData.name == '') {
                                return layer.msg('请选择组织机构', {
                                    icon: 0
                                });
                            }
                            $('#infoOwnDepartment').val(finalData.name);
                            $('#infoOwnDepartment').attr('data-id',finalData.id);
                            layer.close(index);
                        },
                        resize: false
                    });
                });
                $('#popDeptCancle').off('click').on('click', function () {
                    admin.closePopupCenter();
                });
                $('#btn-dept-sure').off('click').on('click', function () {
                    if(!$('#infoOwnDepartment').val()){
                        return layer.msg('请选择部门', {
                            icon: 5
                        });
                    }
                    var option=[];
                    for(var i =0;i<checkStatus.data.length;i++){
                        option.push({
                          id:checkStatus.data[i].id,
                            deptId:$('#infoOwnDepartment').attr('data-id'),
                        });
                    }

                    admin.req('/api/project/pool/updateDeptId', option, function(res) {
                        if (res.ok) {
                            admin.finishPopupCenter();
                        } else {
                            layer.msg('修改失败' + res.message, {
                                icon: 5
                            });
                        }
                    }, {method: 'post'});
                });
            }
        });
    })
    $('#btn-project-search').off('click').on('click',function () {
        var data={
            contractAmountStr:$('.contractAmountStr').val(),
            name:$('.projectName').val(),
            contractNo:$('.contractNo').val(),
        };
        renderTable(data);
    });
    $('#btn-project-reset').off('click').on('click',function () {

        $('.contractNo').val('');
        $('.projectName').val('');
        $('.contractAmountStr').val('');
        form.render('select');
        renderTable();
    });
    table.on('tool(tableContent-project)', function (obj) {
        var data = obj.data;
        if(obj.event=='btn-claim'){
            admin.popupCenter({
                title: '认领项目',
                area: ['700px', '480px'],
                path: 'components/projectPool/projectClaim.html',
                finish: function(data) {
                    table.reload('tableContent-project', {
                        where: {
                            reload: new Date().getTime()
                        }
                    });
                },
                success: function() {
                    setInfoData(data);
                }
            });
        }
    });
    var setInfoData = function (resData) {
        $('#memberName').attr('data-name',account.usname);
        $('#memberName').val(account.usname);
        $('#memberName').attr('data-id',account.usid);
        $('#leaderName').attr('data-name',account.usname);
        $('#leaderName').val(account.usname);
        $('#leaderName').attr('data-id',account.usid);
        $('#projectAdminName').attr('data-name',account.usname);
        $('#projectAdminName').val(account.usname);
        $('#projectAdminName').attr('data-id',account.usid);
        $('#memberName').off('click').on('click',function () {
            var data={
                data:[]
            };
            var memberId=$('#memberName').attr('data-id').split(',');
            var memberName=$('#memberName').attr('data-name').split(',');
            for(var i =0;i<memberName.length;i++){
                if(memberId[i]){
                    data.data.push({
                        id: memberId[i],
                        name: memberName[i],
                    });
                }
            }
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
                    var strVal='';
                    var strId='';
                    for (var i = 0; i < finalData.length; i++) {
                        if(i==0){
                            strVal+=finalData[i].name;
                            strId+=finalData[i].id;
                        }else{
                            strVal+=','+finalData[i].name;
                            strId+=','+finalData[i].id;
                        }
                    }
                    $('#memberName').attr('data-name',strVal);
                    $('#memberName').val(strVal);
                    $('#memberName').attr('data-id',strId);
                    layer.close(index);
                },
                success: function () {
                    // 执行 iframe 内的方法
                    $('#personnelSelect iframe')[0].contentWindow.task_personnel_select
                        .init(data);
                },
                resize: false
            });
        });
        $('#leaderName').off('click').on('click',function () {
            var data={
                data:[]
            };
            if($('#leaderName').attr('data-name')){
                data.data.push({
                    name:$('#leaderName').attr('data-name'),
                    id:$('#leaderName').attr('data-id')
                })
            }
            layer.open({
                type: 2,
                id: 'personnelLeaderSelect',
                title: '请选择',
                content: 'components/tpl/personnel_group_select.html',
                area: ['96%', '80%'],
                btn: ['确定', '取消'],
                yes: function (index, layero) {
                    var finalData = $('#personnelLeaderSelect iframe')[0].contentWindow
                        .task_personnel_select.finish();
                    for (var i = 0; i < finalData.length; i++) {
                        $('#leaderName').attr('data-name',finalData[i].name);
                        $('#leaderName').val(finalData[i].name);
                        $('#leaderName').attr('data-id',finalData[i].id);
                    }
                    layer.close(index);
                },
                success: function () {
                    // 执行 iframe 内的方法
                    $('#personnelLeaderSelect iframe')[0].contentWindow.task_personnel_select
                        .init(data,'radio');
                },
                resize: false
            });
        });
        $('#projectAdminName').off('click').on('click',function () {
            var data={
                data:[]
            };
            if($('#projectAdminName').attr('data-name')){
                data.data.push({
                    name:$('#projectAdminName').attr('data-name'),
                    id:$('#projectAdminName').attr('data-id')
                })
            }
            layer.open({
                type: 2,
                id: 'personnelProjectAdminNameSelect',
                title: '请选择',
                content: 'components/tpl/personnel_group_select.html',
                area: ['96%', '80%'],
                btn: ['确定', '取消'],
                yes: function (index, layero) {
                    var finalData = $('#personnelProjectAdminNameSelect iframe')[0].contentWindow
                        .task_personnel_select.finish();
                    for (var i = 0; i < finalData.length; i++) {
                        $('#projectAdminName').attr('data-name',finalData[i].name);
                        $('#projectAdminName').val(finalData[i].name);
                        $('#projectAdminName').attr('data-id',finalData[i].id);
                    }
                    if(finalData.length==0){
                        $('#projectAdminName').attr('data-name',"");
                        $('#projectAdminName').val("");
                        $('#projectAdminName').attr('data-id',"");
                    }
                    layer.close(index);
                },
                success: function () {
                    // 执行 iframe 内的方法
                    $('#personnelProjectAdminNameSelect iframe')[0].contentWindow.task_personnel_select
                        .init(data,'radio');
                },
                resize: false
            });
        });
        $('#popmenuCancle').off('click').on('click', function () {
            admin.closePopupCenter();
        });
        $('#btn-claim').off('click').on('click', function () {
            if(!$('#leaderName').val()){
                return layer.msg('请选择项目负责人', {
                    icon: 5
                });
            }
            if(!$('#memberName').val()){
                return layer.msg('请选择项目组成员', {
                    icon: 5
                });
            }
            // if(!$('#projectAdminName').val()){
            //     return layer.msg('请选择项目管理员', {
            //         icon: 5
            //     });
            // }
            var claimMemberVOList=[];
            claimMemberVOList.push({
                userId: $('#leaderName').attr('data-id'),
                userName: $('#leaderName').attr('data-name'),
                userType: 1,
            });
            claimMemberVOList.push({
                userId: $('#projectAdminName').attr('data-id'),
                userName: $('#projectAdminName').attr('data-name'),
                userType: 2,
            });
            var memberId=$('#memberName').attr('data-id').split(',');
            var memberName=$('#memberName').attr('data-name').split(',');
            for(var i =0;i<memberName.length;i++){
                claimMemberVOList.push({
                    userId: memberId[i],
                    userName: memberName[i],
                    userType: 0,
                });
            }
            var option=[
                {
                    "claimMemberVOList":claimMemberVOList,
                    personInput:$('#personInput').val(),
                    remark:$('#remark').val(),
                    idSet:[resData.id]
                }
            ];
            admin.req('/api/project/pool', option, function(res) {
                if (res.ok) {
                    admin.finishPopupCenter();
                } else {
                    layer.msg('保存失败' + res.message, {
                        icon: 5
                    });
                }
            }, {method: 'post'});
        });
    }
});
