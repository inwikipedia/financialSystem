/*
 * Activiti Modeler component part of the Activiti project
 * Copyright 2005-2014 Alfresco Software, Ltd. All rights reserved.
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.

 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */
var KISBPM = KISBPM || {};

KISBPM.URL = {

    //根据模型ID获取模型数据(一般不需修改)
    getModel: function(modelId) {
        return ACTIVITI.CONFIG.contextRoot + '/service/model/' + modelId + '/json';
    },
    //获取stencilset配置参数(一般不需修改)
    getStencilSet: function() {
        return ACTIVITI.CONFIG.contextRoot + '/service/editor/stencilset?version=' + Date.now();
    },
    //保存模型(一般不需修改)
    putModel: function(modelId) {
        return ACTIVITI.CONFIG.contextRoot + '/service/model/' + modelId + '/save';
    },
    //根据查询条件，获取用户列表，应用范围：任务受理人编辑
    getUser : function () {
        return ACTIVITI.CONFIG.contextRoot + '/api/sys/user';
    },
    //获取角色列表，应用范围：任务受理人编辑和受理组编辑
    getRole : function () {
        return ACTIVITI.CONFIG.contextRoot + '/api/sys/role';
    },
    //根据用户ID获取用户信息，应用范围：任务受理人展示
    getUserById : function (userId) {
        return ACTIVITI.CONFIG.contextRoot + '/api/sys/user/' + userId;
    },
    //根据角色ID获取角色信息，应用范围：受理组展示
    getRoleById : function (rId) {
        return ACTIVITI.CONFIG.contextRoot + '/api/sys/role/' + rId;
    },
    //获取oldForm关联表单列表，应用范围：关联表单编辑
    getForm : function () {
        return ACTIVITI.CONFIG.contextRoot + '/api/form?pageNo=1&pageSize=50';
    },
    //获取newForm关联表单列表，应用范围：关联表单编辑
    getMobileForm : function () {
        return ACTIVITI.CONFIG.contextRoot + '/api/form?pageNo=1&pageSize=50&design=1';
    },
    //根据表单id获得表单信息，应用范围：关联表单展示
    getFormById : function (formId) {
        return ACTIVITI.CONFIG.contextRoot + '/api/form/' + formId;
    },
    //保存表单权限配置，应用范围：表单权限编辑
    postFormPrivilege : function () {
        return ACTIVITI.CONFIG.contextRoot + '/api/form_privilege/ctFormPrivilege';
    },
    //根据权限ID获得权限详细信息，应用范围：表单权限回填
    getFormPrivilegeById : function (pid) {
        return ACTIVITI.CONFIG.contextRoot + '/api/form_privilege/ctFormPrivilege/' + pid;
    },
    //获得组织机构树，应用范围：任务受理人编辑
    getOrgList : function () {
        return ACTIVITI.CONFIG.contextRoot + '/api/sys/org/listOrgByOrgName';
    },
    //根据组织机构ID获得该机构下所有用户列表，应用范围：任务受理人编辑
    getUserByOrgId : function () {
        return ACTIVITI.CONFIG.contextRoot + '/api/sys/org/listUserEOByOrgId';
    },
    //获取跳转条件列表
    getCondition : function () {
        return ACTIVITI.CONFIG.contextRoot + '/api/process/condition';
    },
    //根据code获取跳转条件名称
    getConditionByCode : function (code) {
        return ACTIVITI.CONFIG.contextRoot + '/api/process/condition/' + code;
    },
    getOrgById : function (pid) {
        return ACTIVITI.CONFIG.contextRoot + '/api/sys/org/' + pid;
    },
    //获取流程监听
    getListener : function () {
        return ACTIVITI.CONFIG.contextRoot + '/api/process/condition/listener';
    }
    

};