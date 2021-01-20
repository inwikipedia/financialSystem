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
 * Group Modify By Sucdaze 2018-06-07
 */
var KisBpmGroupCtrl = ['$scope', '$modal', function ($scope, $modal) {

    // Config for the modal window
    var opts = {
        template: 'editor-app/configuration/properties/group-popup.html?version=' + Date.now(),
        scope: $scope
    };

    // Open the dialog
    $modal(opts);
 }];

var KisBpmGroupPopupCtrl = ['$scope', '$http', function ($scope, $http) {

    //选中的受理组
    $scope.selectedRoleArr = [];

    //初始化
    $scope.init = function () {
        if ($scope.property.value) {
            $http({
                method: 'GET',
                url: KISBPM.URL.getRoleById($scope.property.value)
            }).success(function (data, status, headers, config) {
                if (!data.data) {
                    return;
                }
                if (data.ok == true) {
                    var roleObj = {};
                    roleObj.rid = data.data.rid;
                    roleObj.rname = data.data.rname;
                    $scope.selectedRoleArr.push(roleObj);
                }
            }).
            error(function (data, status, headers, config) {
                console.log('init of KisBpmGroupPopupCtrl is wrong!');
            });
        }
    }

    $scope.init();

    //获取角色列表
    $scope.getRoleList = function () {
        $http({
            method: 'GET',
            url: KISBPM.URL.getRole()
        }).success(function (data, status, headers, config) {
            if (data.ok == true) {
                $scope.roleList = data.data;
                $scope.searchList = data.data;
                if(data.data.length > 0){
                    $scope.selectRole = data.data[0].rid;
                }
            }
        }).
        error(function (data, status, headers, config) {
            console.log('getRoleList of KisBpmGroupPopupCtrl is wrong!');
        });
    }

    $scope.getRoleList();


    //选择受理组
    $scope.chooseRole = function () {
        jQuery("#sel_all_area_role").find("option:selected").each(function (i) {
            var roleObj = {};
            roleObj.rid = jQuery(this).val();
            roleObj.rname = jQuery(this).text();
            $scope.selectedRoleArr[0] = roleObj;
        });
    }

    //清空受理组
    $scope.removeRole = function () {
        $scope.selectedRoleArr = [];
    }

    //受理组检索
    $scope.doSearch = function () {
        if ($scope.roleList instanceof Array) {
            var keyWords = $scope.searchText;
            if (keyWords != "" && keyWords != null) {
                var dataArr = $scope.roleList;
                var reg = new RegExp(keyWords);
                $scope.searchList = [];
                for (var i = 0; i < dataArr.length; i++) {
                    if (dataArr[i].rname.match(reg)) {
                        $scope.searchList.push(dataArr[i]);
                    }
                }
            } else {
                $scope.searchList = $scope.roleList;
            }
        }
    }

    //保存按钮
    $scope.save = function () {
        if($scope.selectedRoleArr.length > 0){
            $scope.property.value = $scope.selectedRoleArr[0].rid;
        }
        else{
            $scope.property.value = null;
        }
        var str = '[{"value":"' + $scope.property.value + '","$$hashKey":"' + $scope.property.$$hashKey + '"}]';
        var assignment = '{"assignment": {"candidateGroups": [{"value":"' + $scope.property.value + '","$$hashKey":"' + $scope.property.$$hashKey + '"}]}}';
        for (var i = 0; i < $scope.selectedItem.properties["group1"].length; i++) {

            if ($scope.selectedItem.properties["group1"][i].key == "oryx-usertaskassignment") {
                if (typeof ($scope.selectedItem.properties["group1"][i].value) == "object") {
                    if (!($scope.property.value == null)) {
                        $scope.selectedItem.properties["group1"][i].value.assignment.candidateGroups = JSON.parse(str);
                        //2019/2/18任务受理人变为受理组
                        delete $scope.selectedItem.properties["group1"][i].value.assignment.assignee;
                    } else {
                        if ($scope.selectedItem.properties["group1"][i].value.assignment.candidateGroups) {
                            delete $scope.selectedItem.properties["group1"][i].value.assignment.candidateGroups;
                        }
                    }

                } else {
                    if (!($scope.property.value == null)) {
                        $scope.selectedItem.properties["group1"][i].value = JSON.parse(assignment);
                    }
                }
                $scope.updatePropertyInModel($scope.selectedItem.properties["group1"][i]);
                console.log($scope.selectedItem.properties["group1"][i]);
            }
        }
        $scope.updatePropertyInModel($scope.property);
        console.log($scope.property);
        $scope.close();
    };

    // Close button handler
    $scope.close = function () {
        //handleAssignmentInput($scope);
        $scope.property.mode = 'read';
        $scope.$hide();
    };

}];

//    $http({
//        method: 'GET',
//        url: KISBPM.URL.getRole()
//    }).success(function (data, status, headers, config) {
//        if (data.ok == true) {
//            console.log(":>", data);
//            $scope.userItems = data.data;
//            console.log($scope, $scope.property, $scope.property.value);
//            /*if($scope.property.value.hasOwnProperty('rid')){
//                $scope.property.value = $scope.property.value.rid;
//            }*/
//        }
//    }).
//    error(function (data, status, headers, config) {
//        console.log('KisBpmGroupCtrl is wrong!');
//    });
//
//
//    $scope.GroupChanged = function () {
//        var str = '[{"value":"' + $scope.property.value + '","$$hashKey":"' + $scope.property.$$hashKey + '"}]';
//        var assignment = '{"assignment": {"candidateGroups": [{"value":"' + $scope.property.value + '","$$hashKey":"' + $scope.property.$$hashKey + '"}]}}';
//        for (var i = 0; i < $scope.selectedItem.properties.length; i++) {
//            
//            if ($scope.selectedItem.properties[i].key == "oryx-usertaskassignment") {
//                if (typeof ($scope.selectedItem.properties[i].value) == "object") {
//                    if(!($scope.property.value == null)){
//                        $scope.selectedItem.properties[i].value.assignment.candidateGroups = JSON.parse(str);
//                    } 
//                    else{
//                        if($scope.selectedItem.properties[i].value.assignment.candidateGroups){
//                            delete $scope.selectedItem.properties[i].value.assignment.candidateGroups;
//                        }
//                    }
//                    
//                } else {
//                    if(!($scope.property.value == null)){
//                        $scope.selectedItem.properties[i].value = JSON.parse(assignment);
//                    }                   
//                }
//                //console.log($scope.selectedItem.properties[i]);
//            }
//        }
//        $scope.updatePropertyInModel($scope.selectedItem.properties[13]);
//        $scope.updatePropertyInModel($scope.property);
//        //console.log($scope.property, $scope.selectedItem.properties[12])
//    };

var GroupDisplayCtrl = ['$scope', '$http', function ($scope, $http) {
    //console.log($scope.property);
    if ($scope.property.value) {
        $http({
            method: 'GET',
            url: KISBPM.URL.getRoleById($scope.property.value)
        }).success(function (data, status, headers, config) {
            //console.log(data);
            if (!data.data) {
                return;
            }
            if (data.ok == true) {
                $scope.rname = data.data.rname;
            }
        }).
        error(function (data, status, headers, config) {
            console.log('GroupDisplayCtrl is wrong!');
        });
    }
    
    $scope.clearCandidateGroups = function () {
        $scope.property.value = null;
        $scope.updatePropertyInModel($scope.property);
        for (var i = 0; i < $scope.selectedItem.properties["group1"].length; i++) {
            
            if ($scope.selectedItem.properties["group1"][i].key == "oryx-usertaskassignment") {
                if (typeof ($scope.selectedItem.properties["group1"][i].value) == "object") {
                    if ($scope.selectedItem.properties["group1"][i].value.assignment.candidateGroups) {
                            delete $scope.selectedItem.properties["group1"][i].value.assignment.candidateGroups;
                        }
                }
            }
        }
        $scope.selectedItem.properties["group1"][3].value=null;
        $scope.updatePropertyInModel($scope.selectedItem.properties["group1"][3]);
    }
}];

/*

var KisBpmAssignmentPopupCtrl = [ '$scope', function($scope) {

    // Put json representing assignment on scope
    if ($scope.property.value !== undefined && $scope.property.value !== null
        && $scope.property.value.assignment !== undefined
        && $scope.property.value.assignment !== null)
    {
        $scope.assignment = $scope.property.value.assignment;
    } else {
        $scope.assignment = {};
    }

    if ($scope.assignment.candidateUsers == undefined || $scope.assignment.candidateUsers.length == 0)
    {
        $scope.assignment.candidateUsers = [{value: ''}];
    }

    // Click handler for + button after enum value
    var userValueIndex = 1;
    $scope.addCandidateUserValue = function(index) {
        $scope.assignment.candidateUsers.splice(index + 1, 0, {value: 'value ' + userValueIndex++});
    };

    // Click handler for - button after enum value
    $scope.removeCandidateUserValue = function(index) {
        $scope.assignment.candidateUsers.splice(index, 1);
    };

    if ($scope.assignment.candidateGroups == undefined || $scope.assignment.candidateGroups.length == 0)
    {
        $scope.assignment.candidateGroups = [{value: ''}];
    }

    var groupValueIndex = 1;
    $scope.addCandidateGroupValue = function(index) {
        $scope.assignment.candidateGroups.splice(index + 1, 0, {value: 'value ' + groupValueIndex++});
    };

    // Click handler for - button after enum value
    $scope.removeCandidateGroupValue = function(index) {
        $scope.assignment.candidateGroups.splice(index, 1);
    };

    $scope.save = function() {

        $scope.property.value = {};
        handleAssignmentInput($scope);
        $scope.property.value.assignment = $scope.assignment;

        $scope.updatePropertyInModel($scope.property);
        $scope.close();
    };

    // Close button handler
    $scope.close = function() {
        handleAssignmentInput($scope);
        $scope.property.mode = 'read';
        $scope.$hide();
    };

    var handleAssignmentInput = function($scope) {
        if ($scope.assignment.candidateUsers)
        {
            var emptyUsers = true;
            var toRemoveIndexes = [];
            for (var i = 0; i < $scope.assignment.candidateUsers.length; i++)
            {
                if ($scope.assignment.candidateUsers[i].value != '')
                {
                    emptyUsers = false;
                }
                else
                {
                    toRemoveIndexes[toRemoveIndexes.length] = i;
                }
            }

            for (var i = 0; i < toRemoveIndexes.length; i++)
            {
                $scope.assignment.candidateUsers.splice(toRemoveIndexes[i], 1);
            }

            if (emptyUsers)
            {
                $scope.assignment.candidateUsers = undefined;
            }
        }

        if ($scope.assignment.candidateGroups)
        {
            var emptyGroups = true;
            var toRemoveIndexes = [];
            for (var i = 0; i < $scope.assignment.candidateGroups.length; i++)
            {
                if ($scope.assignment.candidateGroups[i].value != '')
                {
                    emptyGroups = false;
                }
                else
                {
                    toRemoveIndexes[toRemoveIndexes.length] = i;
                }
            }

            for (var i = 0; i < toRemoveIndexes.length; i++)
            {
                $scope.assignment.candidateGroups.splice(toRemoveIndexes[i], 1);
            }

            if (emptyGroups)
            {
                $scope.assignment.candidateGroups = undefined;
            }
        }
    };
}];*/
