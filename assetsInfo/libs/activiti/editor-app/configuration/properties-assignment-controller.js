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

/*
 * Assignment Modify By Shanzm 2018-05-10
 */
//var KisBpmAssignmentCtrl = [ '$scope', '$http' ,function($scope, $http) {
//
//
//    $http({method: 'GET', url: KISBPM.URL.getUser()}).success(function (data, status, headers, config) {
//		if(data.ok == true){
//		    console.log(":::",data);
//            $scope.userItems = data.data.list;
//            if($scope.property.value.hasOwnProperty('assignment')){
//                $scope.property.value = $scope.property.value.assignment.assignee;
//            }
//
//            jQuery("#testuser").select2({
//                width:100,
//                theme:'default'
//            });
//        }
//    }).
//    error(function (data, status, headers, config) {
//        console.log('KisBpmAssignmentCtrl is wrong!');
//    });
//
//
//    $scope.assignmentChanged = function() {
//        var userAssign = $scope.property.value;
//        var groupAssign = $scope.selectedItem.properties[13].value;
//        console.log($scope.selectedItem.properties[13].value);
//        if ($scope.selectedItem.properties[13].value) {
//            $scope.property.value = {};
//            $scope.property.value.assignment = {};
//            $scope.property.value.assignment.assignee = userAssign;
//            console.log("let's make some mistakes:",$scope.selectedItem.properties[13].value);
//            //$scope.property.value.assignment.candidateGroups = [{value:$scope.selectedItem.properties[13].value}];
//        } else {
//            $scope.property.value = {};
//            $scope.property.value.assignment = {};
//            $scope.property.value.assignment.assignee = userAssign;
//        }
//        $scope.updatePropertyInModel($scope.property);
//    };
//}];


var AssignmentDisplayCtrl = ['$scope', '$http', function ($scope, $http) {
    if ($scope.property.value.hasOwnProperty('assignment')) {

        /* 无代理人 */
        if(!$scope.property.value.assignment.assignee){
             return;
        }
        /**
         * 表达式数据回显
         */
        if ($scope.property.value.assignment.assignee.include('$')) {
            $scope.usname = $scope.property.value.assignment.assignee;
        } else {
            /*选择人回显*/
            $http({
                method: 'GET',
                url: KISBPM.URL.getUserById($scope.property.value.assignment.assignee)
            }).success(function (data, status, headers, config) {
                if (!data.data) {
                    return;
                }
                if (data.ok == true) {
                    $scope.usname = data.data.usname;
                }
            }).error(function (data, status, headers, config) {
                console.log(data, 'AssignmentDisplayCtrl is wrong!');
            });
        }
    }

    $scope.clearAssignee = function () {
        //阻止在为流程发起人时对任务受理人进行修改
        if ($scope.property.value.assignment.assignee && $scope.property.value.assignment.assignee == "${initiator}") {
            return;
        }
        if ($scope.property.value.assignment) {
            delete $scope.property.value.assignment.assignee;
        }
    }
}];

var KisBpmAssignmentCtrl = ['$scope', '$modal', function ($scope, $modal) {

    // Config for the modal window
    var opts = {
        template: 'editor-app/configuration/properties/assignment-popup.html?version=' + Date.now(),
        scope: $scope
    };

    // Open the dialog
    $modal(opts);
}];

var KisBpmAssignmentPopupCtrl = ['$scope', '$http', function ($scope, $http) {

    //初始化
    $scope.init = function () {
        console.log($scope.property.value.assignment);
        if ($scope.property.value.assignment) {
            if ($scope.property.value.assignment.assignee) {
                $http({
                    method: 'GET',
                    url: KISBPM.URL.getUserById($scope.property.value.assignment.assignee)
                }).success(function (data, status, headers, config) {
                    if (!data.data) {
                        return;
                    }
                    if (data.ok == true) {
                        var userObj = {};
                        userObj.usid = data.data.usid;
                        userObj.usname = data.data.usname;
                        $scope.selectedUserArr.push(userObj);
                        console.log($scope.selectedUserArr);
                    }
                }).error(function (data, status, headers, config) {
                    console.log(data, 'AssignmentDisplayCtrl(init) is wrong!');
                });
            }
        }
    };

    $scope.init();

    //组织机构树参数配置
    $scope.treeSetting = {
        data: {
            simpleData: {
                enable: true,
                idKey: "id",
                pIdKey: "parentId",
                rootPId: 0
            },
            key: {
                name: "name"
            }
        },
        callback: {
            onClick: function (event, treeId, treeNode, clickFlag) {
                var searchUrl = KISBPM.URL.getUserByOrgId() + "?orgId=" + treeNode.id;
                $http({
                    method: 'GET',
                    url: searchUrl
                }).success(function (data, status, headers, config) {
                    if (data.ok == true) {
                        $scope.userList = data.data;
                        $scope.searchList = data.data;
                        console.log(data.data);
                    }
                }).error(function (data, status, headers, config) {
                    console.log('getUserList of KisBpmAssignmentPopupCtrl is wrong!');
                });
            }
        }
    };

    $scope.doSearch = function () {

        if ($scope.userList instanceof Array) {
            var keyWords = $scope.searchText;
            if (keyWords != "" && keyWords != null) {
                var dataArr = $scope.userList;
                console.log(dataArr);
                var reg = new RegExp(keyWords);
                $scope.searchList = [];
                for (var i = 0; i < dataArr.length; i++) {
                    if (dataArr[i].usname.match(reg)) {
                        $scope.searchList.push(dataArr[i]);
                    }
                }
            } else {
                $scope.searchList = $scope.userList;
            }
        }
    };

    //选中的用户
    $scope.selectedUserArr = [];

    //选择用户
    $scope.chooseUser = function () {
        jQuery("#sel_all_area").find("option:selected").each(function (i) {
            var userObj = {};
            userObj.usid = jQuery(this).val();
            userObj.usname = jQuery(this).text();
            $scope.selectedUserArr[0] = userObj;
        });
    }

    //清空用户
    $scope.removeUser = function () {
        $scope.selectedUserArr = [];
    }

    //获取组织机构树
    $scope.getOrgList = function () {
        $http({
            method: 'GET',
            url: KISBPM.URL.getOrgList()
        }).success(function (data, status, headers, config) {
            if (data.ok == true) {
                console.log(data);
                $scope.orgList = data.data;
                jQuery.fn.zTree.init(jQuery("#orgTree"), $scope.treeSetting, $scope.orgList);
            }
        }).error(function (data, status, headers, config) {
            console.log('getOrgList of KisBpmAssignmentPopupCtrl is wrong!');
        });
    };


    //执行 获取组织机构树
    $scope.getOrgList();


    //获取角色列表
    $scope.getRoleList = function () {
        $http({
            method: 'GET',
            url: KISBPM.URL.getRole()
        }).success(function (data, status, headers, config) {
            if (data.ok == true) {
                $scope.roleList = data.data;
                if (data.data.length > 0) {
                    $scope.selectRole = data.data[0].rid;
                }
            }
        }).error(function (data, status, headers, config) {
            console.log('getRoleList of KisBpmAssignmentPopupCtrl is wrong!');
        });
    }

    $scope.getRoleList();

    $scope.getUserByRole = function () {
        var searchUrl = KISBPM.URL.getUser() + "?pageNo=1&pageSize=99999&roleName=" + $scope.selectRole;
        $http({
            method: 'GET',
            url: searchUrl
        }).success(function (data, status, headers, config) {
            if (data.ok == true) {
                $scope.userListByRole = data.data.list;
                $scope.searchListByRole = data.data.list;
            }
        }).error(function (data, status, headers, config) {
            console.log('KisBpmAssignmentCtrl is wrong!');
        });
    }

    $scope.doSearchByRole = function () {
        if ($scope.userListByRole instanceof Array) {
            var keyWords = $scope.searchTextByRole;
            if (keyWords != "" && keyWords != null) {
                var dataArr = $scope.userListByRole;
                var reg = new RegExp(keyWords);
                $scope.searchListByRole = [];
                for (var i = 0; i < dataArr.length; i++) {
                    if (dataArr[i].usname.match(reg)) {
                        $scope.searchListByRole.push(dataArr[i]);
                    }
                }
            } else {
                $scope.searchListByRole = $scope.userListByRole;
            }
        }
    }

    //选择用户
    $scope.chooseUserFromRole = function () {
        jQuery("#sel_all_area_role").find("option:selected").each(function (i) {
            var userObj = {};
            userObj.usid = jQuery(this).val();
            userObj.usname = jQuery(this).text();
            $scope.selectedUserArr[0] = userObj;
        });
    }

    //保存按钮
    $scope.save = function () {
        console.log($scope.property, $scope.selectedItem);

        if ($scope.expAssignee == undefined || $scope.expAssignee == "") {
            if ($scope.selectedUserArr.length > 0) {
                if ($scope.property.value.assignment) {
                    $scope.property.value.assignment.assignee = $scope.selectedUserArr[0].usid;
                } else {
                    $scope.property.value = {};
                    $scope.property.value.assignment = {};
                    $scope.property.value.assignment.assignee = $scope.selectedUserArr[0].usid;
                }

                //2019/2/18任务受理组变为受理人
                delete $scope.property.value.assignment.candidateGroups;
                $scope.selectedItem.properties["group1"][2].value = null;
                $scope.updatePropertyInModel($scope.selectedItem.properties["group1"][2]);
                $scope.selectedItem.properties["group1"][3].value = null;
                $scope.updatePropertyInModel($scope.selectedItem.properties["group1"][3]);

            } else {
                if ($scope.property.value.assignment) {
                    if ($scope.property.value.assignment.assignee) {
                        delete $scope.property.value.assignment.assignee;
                    }
                }
            }
        } else {
            if ($scope.property.value.assignment) {
                $scope.property.value.assignment.assignee = $scope.expAssignee;
            } else {
                $scope.property.value = {};
                $scope.property.value.assignment = {};
                $scope.property.value.assignment.assignee = $scope.expAssignee;
            }
        }

        $scope.updatePropertyInModel($scope.property);
        $scope.close();
    };

    // Close button handler
    $scope.close = function () {
        //handleAssignmentInput($scope);
        $scope.property.mode = 'read';
        $scope.$hide();
    };

    //    //条件查询带分页
    //    $scope.doSearch = function () {
    //        var pageNo = $scope.paginationConf.currentPage;
    //        var pageSize = $scope.paginationConf.itemsPerPage;
    //        var usname = $scope.queryName;
    //        var rolename = $scope.queryRole;
    //        var orgname = $scope.queryOrg;
    //        var searchUrl = KISBPM.URL.getUser() + "?pageNo=" + pageNo + "&pageSize=" + pageSize;
    //        if (usname != undefined && usname != "") {
    //            searchUrl += "&usname=" + usname;
    //        }
    //        if (rolename != undefined && rolename != "") {
    //            searchUrl += "&rolename=" + rolename;
    //        }
    //        if (orgname != undefined && orgname != "") {
    //            searchUrl += "&orgname=" + orgname;
    //        }
    //
    //        $http({
    //            method: 'GET',
    //            url: searchUrl
    //        }).success(function (data, status, headers, config) {
    //            if (data.ok == true) {
    //                $scope.userItems = data.data.list;
    //                $scope.paginationConf.totalItems = data.data.count; //查询结果总数
    //                $scope.paginationConf.currentPage = data.data.pageNo; //当前页码
    //                $scope.paginationConf.itemsPerPage = data.data.pageSize; //每页多少条
    //            }
    //        }).
    //        error(function (data, status, headers, config) {
    //            console.log('KisBpmAssignmentCtrl is wrong!');
    //        });
    //    }
    //
    //
    //    //分页参数配置
    //    $scope.paginationConf = {
    //        currentPage: 1, //当前页码
    //        totalItems: 80, //查询结果总数
    //        itemsPerPage: 10, //每页多少条
    //        pagesLength: 9,
    //        perPageOptions: [10, 15, 20, 30, 50],
    //        onChange: function () {
    //            $scope.doSearch();
    //        }
    //    };
    //
    //    //选择的用户对应的usid
    //    $scope.selectedUsid = "";
    //
    //    //选择用户执行
    //    $scope.doSelect = function (usid, index) {
    //        $scope.selectedUsid = usid;
    //        jQuery("input[name='userInfo']").get(index).checked = true;
    //    }
    //
    //    //重置查询条件
    //    $scope.doReset = function () {
    //        $scope.queryName = "";
    //        $scope.queryRole = "";
    //        $scope.queryOrg = "";
    //    }
    //
    //    //角色列表
    //    $scope.getRoleList = function () {
    //        $http({
    //            method: 'GET',
    //            url: KISBPM.URL.getRole()
    //        }).success(function (data, status, headers, config) {
    //            if (data.ok == true) {
    //                $scope.roleList = data.data;
    //            }
    //        }).
    //        error(function (data, status, headers, config) {
    //            console.log('getRoleList of KisBpmAssignmentPopupCtrl is wrong!');
    //        });
    //    }
    //
    //    $scope.getRoleList();


    // Put json representing assignment on scope
    //    if ($scope.property.value !== undefined && $scope.property.value !== null &&
    //        $scope.property.value.assignment !== undefined &&
    //        $scope.property.value.assignment !== null) {
    //        $scope.assignment = $scope.property.value.assignment;
    //    } else {
    //        $scope.assignment = {};
    //    }
    //
    //    if ($scope.assignment.candidateUsers == undefined || $scope.assignment.candidateUsers.length == 0) {
    //        $scope.assignment.candidateUsers = [{
    //            value: ''
    //        }];
    //    }
    //
    //    // Click handler for + button after enum value
    //    var userValueIndex = 1;
    //    $scope.addCandidateUserValue = function (index) {
    //        $scope.assignment.candidateUsers.splice(index + 1, 0, {
    //            value: 'value ' + userValueIndex++
    //        });
    //    };
    //
    //    // Click handler for - button after enum value
    //    $scope.removeCandidateUserValue = function (index) {
    //        $scope.assignment.candidateUsers.splice(index, 1);
    //    };
    //
    //    if ($scope.assignment.candidateGroups == undefined || $scope.assignment.candidateGroups.length == 0) {
    //        $scope.assignment.candidateGroups = [{
    //            value: ''
    //        }];
    //    }
    //
    //    var groupValueIndex = 1;
    //    $scope.addCandidateGroupValue = function (index) {
    //        $scope.assignment.candidateGroups.splice(index + 1, 0, {
    //            value: 'value ' + groupValueIndex++
    //        });
    //    };
    //
    //    // Click handler for - button after enum value
    //    $scope.removeCandidateGroupValue = function (index) {
    //        $scope.assignment.candidateGroups.splice(index, 1);
    //    };


    var handleAssignmentInput = function ($scope) {
        if ($scope.assignment.candidateUsers) {
            var emptyUsers = true;
            var toRemoveIndexes = [];
            for (var i = 0; i < $scope.assignment.candidateUsers.length; i++) {
                if ($scope.assignment.candidateUsers[i].value != '') {
                    emptyUsers = false;
                } else {
                    toRemoveIndexes[toRemoveIndexes.length] = i;
                }
            }

            for (var i = 0; i < toRemoveIndexes.length; i++) {
                $scope.assignment.candidateUsers.splice(toRemoveIndexes[i], 1);
            }

            if (emptyUsers) {
                $scope.assignment.candidateUsers = undefined;
            }
        }

        if ($scope.assignment.candidateGroups) {
            var emptyGroups = true;
            var toRemoveIndexes = [];
            for (var i = 0; i < $scope.assignment.candidateGroups.length; i++) {
                if ($scope.assignment.candidateGroups[i].value != '') {
                    emptyGroups = false;
                } else {
                    toRemoveIndexes[toRemoveIndexes.length] = i;
                }
            }

            for (var i = 0; i < toRemoveIndexes.length; i++) {
                $scope.assignment.candidateGroups.splice(toRemoveIndexes[i], 1);
            }

            if (emptyGroups) {
                $scope.assignment.candidateGroups = undefined;
            }
        }
    };
}];
