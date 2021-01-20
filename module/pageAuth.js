/*
 * File   : pageAuth.js
 * Created: Thursday August 30th 2018 11:34:38 am
 * Author : shanzm
 * License: MIT License
 * 
 * Copyright (c) 2018 shanzm
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
 * Last Modified: Thursday August 30th 2018 5:21:18 pm
 * 
 * -----
 * Description: 权限控制
 * -----
 * HISTORY:
 * 2018-11-22	shanzm	初始化建立
 */

layui.define(['config'], function(exports) {
    var config = layui.config;

    var orgs = [], //部门数组
        roles = [], //角色数组
        orgName = "", //部门名称
        processType = "", //流程阶段 启动：start，待办：pending，已办、已发：finish
        departmentName = "", //数据来自哪个部门的提交
        processInstanceId = ""; //流程实例ID

    var pageAuth = {

        init: function() {
            orgs = config.getAccount().orgs; //部门数组
            orgName = orgs.length > 0 ? orgs[0].name : "";
            roles = config.getAccount().roles; //角色数组
            processType = config.businessParam.hasOwnProperty("processType") ? config.businessParam.processType : "";
            departmentName = config.businessParam.hasOwnProperty("departmentName") ? config.businessParam.departmentName : "";
            processInstanceId = config.businessParam.hasOwnProperty("processInstanceId") ? config.businessParam.processInstanceId : "";

        },

        //是否启用行权限锁定
        enableLock: function() {
            if (orgName != '财务部') {
                return true;
            } else {
                return false;
            }
        },

        //获取表格列权限
        getTableAuth: function() {
            var auth = 0;
            if (processType == "finish") {
                auth = 2;
            } else {
                for (var i = 0; i < roles.length; i++) {
                    if (roles[i].name == '财务人员' || roles[i].name == '管理员') {
                        break;
                    }
                    if (roles[i].name == '部长' || roles[i].name == '副部长') {
                        auth = 1;
                        break;
                    }
                    if (roles[i].name == '本部长' || roles[i].name == '副本部长') {
                        auth = 2;
                        break;
                    }
                }
            }
            return auth;
        },

        //获取按钮权限
        getButtonAuth: function() {
            var buttonAuth = ['none', 'none', 'none', 'none']; //新增，删除，上传，下载
            for (var i = 0; i < roles.length; i++) {
                if (roles[i].name == '财务人员' || roles[i].name == '管理员') {
                    if (processType == "finish") {
                        buttonAuth = ['none', 'none', 'none', 'display'];
                    } else if (processType == "pending") {
                        buttonAuth = ['display', 'display', 'none', 'display'];
                    } else {
                        buttonAuth = ['display', 'display', 'display', 'display'];
                    }
                    break;
                }
                if (roles[i].name == '部长' || roles[i].name == '副部长') {
                    if (processType == "finish") {
                        buttonAuth = ['none', 'none', 'none', 'none'];
                    } else {
                        buttonAuth = ['display', 'display', 'none', 'none'];
                    }
                    break;
                }
                if (roles[i].name == '本部长' || roles[i].name == '副本部长') {
                    break;
                }
            }
            return buttonAuth;
        },

        //获取数据查询条件
        getQueryConditions: function() {
            var searchObj = {};
            //如果为财务部，则查询所有部门数据
            if (orgName == '财务部') {
                searchObj.myDepartment = false;
            } else {
                searchObj.myDepartment = true;
                if (departmentName != '' && departmentName != null) {
                    searchObj.deptId = departmentName;
                }
            }
            //启动阶段查询所有processInstanceId为空的数据
            if (processType == 'start') {
                searchObj.processInstanceIdIsNull = true;
            } else {
                //searchObj.processInstanceIdIsNull = false;
                if (processInstanceId != '' && processInstanceId != null) {
                    searchObj.processInstanceId = processInstanceId;
                }
            }
            return searchObj;
        },

        //获取当前时间，格式YYYY-MM-DD
        getNowFormatDate: function() {
            var date = new Date();
            var seperator1 = "";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate;
            return currentdate;
        }


    };
    exports('pageAuth', pageAuth);
});