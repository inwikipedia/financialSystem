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
 * Form keydefinition
 */

var KisBpmFormKeyDefinitionCtrl = ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {

    // console.log($rootScope.formType);
    //请求自定义表单列表 同时增加formName判断 修复初始化必须选择表单类型才能修改关联表单问题
    if ($rootScope.formType || $rootScope.formkeydefinition.formName) {
        $http({method: 'GET', url: KISBPM.URL.getForm()}).success(function (data, status, headers, config) {
            if (data.ok == true) {
                $scope.formItems = data.data.list;
                //$scope.property.value = $scope.property.value.assignment.assignee;
            }
        }).error(function (data, status, headers, config) {
            console.log('KisBpmFormKeyDefinitionCtrl is wrong!');
        });

    } else {
        alert("必须先选择表单类型！！！！");
        console.log($scope.property);
        $scope.property.mode = 'read';
    }


    $scope.formKeyDefinitionChanged = function () {
        $scope.updatePropertyInModel($scope.property);
    };
}];

var FormKeyDefinitionDisplayCtrl = ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {

    $http({
        method: 'GET',
        url: KISBPM.URL.getFormById($scope.property.value)
    }).success(function (data, status, headers, config) {
        if (data.ok == true) {
            $scope.formName = data.data.formName;
            $rootScope.formkeydefinition = {};
            $rootScope.formkeydefinition.formID = $scope.property.value;
            $rootScope.formkeydefinition.formName = $scope.formName;
        }
    }).error(function (data, status, headers, config) {
        console.log('FormKeyDefinitionDisplayCtrl is wrong!');
    });

}];

/*
 * Form Properties
 */

var KisBpmFormPropertiesCtrl = ['$scope', '$modal', '$timeout', '$translate', function ($scope, $modal, $timeout, $translate) {

    // Config for the modal window
    var opts = {
        template: 'editor-app/configuration/properties/form-properties-popup.html?version=' + Date.now(),
        scope: $scope
    };

    // Open the dialog
    $modal(opts);
}];

var KisBpmFormPropertiesPopupCtrl = ['$scope', '$rootScope', '$q', '$translate', '$timeout', '$http', function ($scope, $rootScope, $q, $translate, $timeout, $http) {
    $scope.formColmn = []; //定期表单列为空数组
    //console.log(1);
    if ($rootScope.formkeydefinition.formID != "" && $rootScope.formkeydefinition.formName != undefined) {
        $scope.formName = $rootScope.formkeydefinition.formName;
        var httpPromise = $http({
            method: 'GET',
            url: KISBPM.URL.getFormById($rootScope.formkeydefinition.formID)
        }).success(function (data, status, headers, config) {
            if (data.ok) {
                if (data.data.columnName != '' && data.data.columnID != '' && data.data.columnName != null && data.data.columnID != null) {
                    $scope.columnNameList = data.data.columnName.split(",");
                    $scope.columnIDList = data.data.columnID.split(",");
                    for (var i = 0; i < $scope.columnIDList.length; i++) {
                        var x = {};
                        x.id = $scope.columnIDList[i];
                        x.name = $scope.columnNameList[i];
                        x.type = '0';
                        $scope.formColmn.push(x);
                    }
                } else {
                    //alert("表单字段数据为空！");
                }
            }
        }).error(function (data, status, headers, config) {
            console.log('KisBpmFormPropertiesPopupCtrl is wrong!');
        });
    } else {
        alert("必须先配置关联表单！");
        $scope.$hide();
        $scope.property.mode = 'read';
    }

    // Put json representing form properties on scope
    if ($scope.property.value !== undefined && $scope.property.value !== null
        && $scope.property.value.formProperties !== undefined
        && $scope.property.value.formProperties !== null) {
        // Note that we clone the json object rather then setting it directly,
        // this to cope with the fact that the user can click the cancel button and no changes should have happended
        $scope.formProperties = angular.copy($scope.property.value.formProperties);

        for (var i = 0; i < $scope.formProperties.length; i++) {
            var formProperty = $scope.formProperties[i];
            if (formProperty.enumValues && formProperty.enumValues.length > 0) {
                for (var j = 0; j < formProperty.enumValues.length; j++) {
                    var enumValue = formProperty.enumValues[j];
                    if (!enumValue.id && !enumValue.name && enumValue.value) {
                        enumValue.id = enumValue.value;
                        enumValue.name = enumValue.value;
                    }
                }
            }
        }
        console.log($scope.formProperties);

    } else {
        $scope.formProperties = [];
    }

    // Array to contain selected properties (yes - we only can select one, but ng-grid isn't smart enough)
    $scope.selectedProperties = [];
    $scope.selectedEnumValues = [];

    $scope.translationsRetrieved = false;

    $scope.labels = {};

    var idPromise = $translate('PROPERTY.FORMPROPERTIES.ID');
    var namePromise = $translate('PROPERTY.FORMPROPERTIES.NAME');
    var typePromise = $translate('PROPERTY.FORMPROPERTIES.TYPE');

    $q.all([idPromise, namePromise, typePromise, httpPromise]).then(function (results) {
        $scope.labels.idLabel = results[0];
        $scope.labels.nameLabel = results[1];
        $scope.labels.typeLabel = results[2];
        $scope.translationsRetrieved = true;
        // Config for grid
        $scope.gridOptions = {
            data: 'formColmn',
            enableRowReordering: true,
            headerRowHeight: 28,
            multiSelect: false,
            keepLastSelected: false,
            selectedItems: $scope.selectedProperties,
            columnDefs: [{field: 'id', displayName: $scope.labels.idLabel},
                {field: 'name', displayName: $scope.labels.nameLabel},
                {
                    field: 'type',
                    displayName: '权限设置',
                    width:390,
                    cellTemplate:'<div class="mylii" style="height: 30px;"><label class="labelPrv"><input style="margin-top:9px" type="radio" value="2" checked name="privilege{{row.entity.id}}">可编辑</label>' +
                    '<label class="labelPrv"><input style="margin-top:9px" type="radio" value="0"  name="privilege{{row.entity.id}}"> 不可见</label>' +
                    '<label class="labelPrv"><input style="margin-top:9px" type="radio" value="1"  name="privilege{{row.entity.id}}">只读</label>' +
                    '<label class="labelPrv"><input style="margin-top:9px" type="radio" value="3"  name="privilege{{row.entity.id}}">必填</label>' +
                    '<label class="labelPrv"><input style="margin-top:9px" type="radio" value="4"  name="privilege{{row.entity.id}}">只读且必填</label></div>'
                    // '<select class="mylii" style="margin-left: 6px;margin-top: 5px;">' +'<option value="2">可编辑</option>' +
                    //     '<option value="0">不可见</option>' +
                    //     '<option value="1">只读</option>' +
                    //     '<option value="3">必填</option></select>'
                }
            ]
        };

        $scope.enumGridOptions = {
            data: 'selectedProperties[0].enumValues',
            enableRowReordering: true,
            headerRowHeight: 28,
            multiSelect: false,
            keepLastSelected: false,
            selectedItems: $scope.selectedEnumValues,
            columnDefs: [{field: 'id', displayName: $scope.labels.idLabel},
                {field: 'name', displayName: $scope.labels.nameLabel}]
        }
        //表单权限回填
        if ($scope.property.value != "" && $scope.property.value != null && typeof ($scope.property.value) == "object") {
            $http({
                method: 'GET',
                url: KISBPM.URL.getFormPrivilegeById($scope.property.value.formProperties[0].id)
            }).success(function (data, status, headers, config) {
                if (data.ok) {
                    console.log($scope.property.value.formProperties[0].id)
                    var privilegeMap = JSON.parse(data.data.privilege);
                    var arr = [];
                    var ipm = 0;
                    for (var key in privilegeMap) {
                        arr.push(privilegeMap[key]);
                    }
                    console.log(arr.length)
                    jQuery(".mylii").each(function () {
                        jQuery(this).find("input[value="+arr[ipm]+"]").attr("checked","checked");
                        ipm += 1;
                        // console.log(jQuery(this).val());
                    });

                    for (var k = 0; k < $scope.formColmn.length; k++) {
                        for (var key in privilegeMap) {
                            if (key == $scope.formColmn[k].id) {
                                $scope.formColmn[k].type = privilegeMap[key];
                                break;
                            }
                        }
                    }
                    ///
                    // console.log($scope.formColmn);
                }
            }).error(function (data, status, headers, config) {
                console.log('Something went wrong!');
            });
        }
    });

    // Handler for when the value of the type dropdown changes
    $scope.propertyTypeChanged = function () {

        // Check date. If date, show date pattern
        if ($scope.selectedProperties[0].type === 'date') {
            $scope.selectedProperties[0].datePattern = 'MM-dd-yyyy hh:mm';

        } else {
            delete $scope.selectedProperties[0].datePattern;
        }

        // Check enum. If enum, show list of options
        if ($scope.selectedProperties[0].type === 'enum') {
            $scope.selectedProperties[0].enumValues = [{id: 'value1', name: 'Value 1'}, {
                id: 'value2',
                name: 'Value 2'
            }];

        } else {
            delete $scope.selectedProperties[0].enumValues;
        }
    };

    // Click handler for add button
    var propertyIndex = 1;
    $scope.addNewProperty = function () {
        $scope.formProperties.push({
            id: 'new_property_' + propertyIndex++,
            name: '',
            type: 'string',
            readable: true,
            writable: true
        });

        $timeout(function () {
            $scope.gridOptions.selectItem($scope.formProperties.length - 1, true);
        });
    };

    // Click handler for remove button
    $scope.removeProperty = function () {
        if ($scope.selectedProperties.length > 0) {
            var index = $scope.formProperties.indexOf($scope.selectedProperties[0]);
            $scope.gridOptions.selectItem(index, false);
            $scope.formProperties.splice(index, 1);

            $scope.selectedProperties.length = 0;
            if (index < $scope.formProperties.length) {
                $scope.gridOptions.selectItem(index + 1, true);
            } else if ($scope.formProperties.length > 0) {
                $scope.gridOptions.selectItem(index - 1, true);
            }
        }
    };

    // Click handler for up button
    $scope.movePropertyUp = function () {
        if ($scope.selectedProperties.length > 0) {
            var index = $scope.formProperties.indexOf($scope.selectedProperties[0]);
            if (index != 0) { // If it's the first, no moving up of course
                // Reason for funny way of swapping, see https://github.com/angular-ui/ng-grid/issues/272
                var temp = $scope.formProperties[index];
                $scope.formProperties.splice(index, 1);
                $timeout(function () {
                    $scope.formProperties.splice(index + -1, 0, temp);
                }, 100);

            }
        }
    };

    // Click handler for down button
    $scope.movePropertyDown = function () {
        if ($scope.selectedProperties.length > 0) {
            var index = $scope.formProperties.indexOf($scope.selectedProperties[0]);
            if (index != $scope.formProperties.length - 1) { // If it's the last element, no moving down of course
                // Reason for funny way of swapping, see https://github.com/angular-ui/ng-grid/issues/272
                var temp = $scope.formProperties[index];
                $scope.formProperties.splice(index, 1);
                $timeout(function () {
                    $scope.formProperties.splice(index + 1, 0, temp);
                }, 100);

            }
        }
    };

    $scope.addNewEnumValue = function () {
        if ($scope.selectedProperties.length > 0) {
            $scope.selectedProperties[0].enumValues.push({id: '', name: ''});
        }

        $timeout(function () {
            $scope.enumGridOptions.selectItem($scope.selectedProperties[0].enumValues.length - 1, true);
        });
    };

    // Click handler for remove button
    $scope.removeEnumValue = function () {
        if ($scope.selectedProperties.length > 0 && $scope.selectedEnumValues.length > 0) {
            var index = $scope.selectedProperties[0].enumValues.indexOf($scope.selectedEnumValues[0]);
            $scope.enumGridOptions.selectItem(index, false);
            $scope.selectedProperties[0].enumValues.splice(index, 1);

            $scope.selectedEnumValues.length = 0;
            if (index < $scope.selectedProperties[0].enumValues.length) {
                $timeout(function () {
                    $scope.enumGridOptions.selectItem(index + 1, true);
                });

            } else if ($scope.selectedProperties[0].enumValues.length > 0) {
                $timeout(function () {
                    $scope.enumGridOptions.selectItem(index - 1, true);
                });
            }
        }
    };

    // Click handler for up button
    $scope.moveEnumValueUp = function () {
        if ($scope.selectedProperties.length > 0 && $scope.selectedEnumValues.length > 0) {
            var index = $scope.selectedProperties[0].enumValues.indexOf($scope.selectedEnumValues[0]);
            if (index != 0) { // If it's the first, no moving up of course
                // Reason for funny way of swapping, see https://github.com/angular-ui/ng-grid/issues/272
                var temp = $scope.selectedProperties[0].enumValues[index];
                $scope.selectedProperties[0].enumValues.splice(index, 1);
                $timeout(function () {
                    $scope.selectedProperties[0].enumValues.splice(index + -1, 0, temp);
                });

            }
        }
    };

    // Click handler for down button
    $scope.moveEnumValueDown = function () {
        if ($scope.selectedProperties.length > 0 && $scope.selectedEnumValues.length > 0) {
            var index = $scope.selectedProperties[0].enumValues.indexOf($scope.selectedEnumValues[0]);
            if (index != $scope.selectedProperties[0].enumValues.length - 1) { // If it's the last element, no moving down of course
                // Reason for funny way of swapping, see https://github.com/angular-ui/ng-grid/issues/272
                var temp = $scope.selectedProperties[0].enumValues[index];
                $scope.selectedProperties[0].enumValues.splice(index, 1);
                $timeout(function () {
                    $scope.selectedProperties[0].enumValues.splice(index + 1, 0, temp);
                });

            }
        }
    };

    // Click handler for save button
    $scope.save = function () {
        console.log($scope.formColmn);
        //
        //原生获取select的选项值
        var arr = [];
        jQuery(".ngCanvas input[type=radio]:checked").each(function () {
            arr.push(jQuery(this).val());
            console.log(arr);
        });
        //
        //
        var privilege = {};
        for (var j = 0; j < $scope.formColmn.length; j++) {
            //privilege[$scope.formColmn[j].id] = $scope.formColmn[j].type;
            privilege[$scope.formColmn[j].id] = arr[j];
        }
        var data = {};
        var method = 'POST';  //新增
        data.formId = $rootScope.formkeydefinition.formID;
        data.privilege = JSON.stringify(privilege);
        data.processDefinitionKey = $rootScope.modelData.model.properties.process_id;
        console.log(data.privilege);
        if ($scope.property.value != "" && $scope.property.value != null) { //修改
            method = 'PUT';
            if (typeof ($scope.property.value) == "string") {
                data.id = $scope.property.value;
            } else if ($scope.property.value.hasOwnProperty("formProperties")) {
                data.id = $scope.property.value.formProperties[0].id;
            } else {
                method = 'POST';
            }
        }
        console.log(method);
        $http({
            method: method,
            data: data,
            url: KISBPM.URL.postFormPrivilege()
        }).success(function (data, status, headers, config) {
            console.log(data);
            if (data.ok) {
                var idObj = {
                    "id": data.data.id,
                    "name": data.data.id,
                    "type": "",
                    "readable": true,
                    "writable": true,
                    "expression": "",
                    "variable": ""
                };
                $scope.property.value = {"formProperties": [idObj]};
                $scope.updatePropertyInModel($scope.property);
                $scope.close();
            }
        }).error(function (data, status, headers, config) {
            console.log('Something went wrong!');
        });

        // if ($scope.formProperties.length > 0) {
        //     $scope.property.value = {};
        //     $scope.property.value.formProperties = $scope.formProperties;
        // } else {
        //     $scope.property.value = null;
        // }
        //
        // $scope.updatePropertyInModel($scope.property);
        // $scope.close();
    };

    $scope.cancel = function () {
        $scope.$hide();
        $scope.property.mode = 'read';
    };

    // Close button handler
    $scope.close = function () {
        $scope.$hide();
        $scope.property.mode = 'read';
    };
    /**
     * 功能:一键可编辑
     * 时间:2019/12/27
     * 作者:lijiacheng
     * @param
     */
    $scope.editAll = function () {
        jQuery(".ngCanvas input[type=radio][value='2']").each(function () {
            // jQuery(this).parent().siblings().find("input").removeAttr("checked");
            jQuery(this).prop("checked","checked");
            // console.log(jQuery(this).parent().siblings().find("input"),7777);
        });
    };
    /**
     * 功能:一键只读
     * 时间:2019/12/27
     * 作者:lijiacheng
     * @param
     */
    $scope.lookAll = function () {
        jQuery(".ngCanvas input[type=radio][value='1']").each(function () {
            jQuery(this).prop("checked","checked");
        });
    };
}];