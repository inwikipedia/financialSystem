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
'use strict';
//stencil：模板
angular.module('activitiModeler')
    .controller('StencilController', ['$rootScope', '$scope', '$http', '$modal', '$timeout', function ($rootScope, $scope, $http, $modal, $timeout) {
        // Property window toggle state属性窗口切换状态
        $scope.propertyWindowState = {'collapsed': false};//collapsed折叠

        // Add reference to global header-config
        $scope.headerConfig = KISBPM.HEADER_CONFIG;
        //设置坐标防止click事件与drop事件同时发生
        $scope.ox = undefined;
        $scope.oy = undefined;
        $scope.nx = undefined;
        $scope.ny = undefined;

        $scope.shutDownOthers = function (data) {
            //console.log(document.getElementsByClassName("stencil-group ng-scope")[0].innerText);
            for (var i = 0; i < document.getElementsByClassName("stencil-group ng-scope").length; i++) {

                if (document.getElementsByClassName("stencil-group ng-scope")[i].innerText.trim().split(" ", 1).toString().trim() != data.name) {
                    //console.log(document.getElementsByClassName("stencil-group ng-scope")[i].className.indexOf("collapsed"));

                    if (document.getElementsByClassName("stencil-group ng-scope")[i].className.indexOf("collapsed") == "-1") {
                        document.getElementsByClassName("stencil-group ng-scope")[i].className += " collapsed";
                        if (i == "8") {
                            $scope.stencilItemGroups[i + 1].expanded = !$scope.stencilItemGroups[i + 1].expanded;
                        } else {
                            $scope.stencilItemGroups[i].expanded = !$scope.stencilItemGroups[i].expanded;
                        }

                        //console.log(i,$scope.stencilItemGroups);
                    }
                    //console.log(document.getElementsByClassName("stencil-group ng-scope")[i].innerText.trim().split(" ",1).toString().trim());
                } else {
                    console.log("yoo");
                }
            }
            data.expanded = !data.expanded;

        };

        $scope.showDescription = function (data, icon, id) {
            //console.log("1");
            //console.log(jQuery("#"+id).offset().top);
            var top = jQuery("#" + id).offset().top - 56;
            jQuery("body").append("<div style='width: 160px;height: 160px;background: #ffffff;position: absolute;top: " + top + "px;left: 17%;z-index: 999999999;text-align: center;padding-top: 24px;font-size: 14px;border: 1px solid #d2d2d2;border-radius: 2px;' id='mydiv1'>" + "<div class='triangle-left' style='position: absolute;left: -4.33333333%;top: 50%;'></div>" + "<div class='triangle-left-small' style='position: absolute;left: -3.33333333%;top: 50.5%;'></div>" + "<img style='width: 80px;height: 80px;' src='editor-app/stencilsets/bpmn2.0/icons/" + icon + "'><div>" + data + "</div></div>");
        };

        $scope.hideDescription = function () {
            //console.log("2");
            jQuery("#mydiv1").remove();
        };

        //右侧属性栏展开与收缩
        $scope.propertyWindowState.toggle = function () {
            $scope.propertyWindowState.collapsed = !$scope.propertyWindowState.collapsed;
            $timeout(function () {
                jQuery(window).trigger('resize');
            });

            if (!$scope.propertyWindowState.collapsed) {
                //alert(jQuery("#propertySection").width());

            } else {
                jQuery("#propertySection").width('33').css('background', 'none').css('overflow', 'visible');
                jQuery("#selectedbody").css('display', 'none');
                jQuery("#titlesection").css('display', 'none');
                jQuery("#titlesectionf").css('display', 'none');
                jQuery("#propertiesHelpWrapper").removeClass("col-xs-3").addClass("col-xs-1").addClass("tliner");
                jQuery("#canvasHelpWrapper").removeClass("col-xs-7").addClass("col-xs-9");
                jQuery("#selectedtitle").addClass("snobg");
                jQuery("#titlesectio").css('display', 'inline');
                jQuery("#gariten").css('display', 'block');
            }

        };

        $rootScope.platecs = function () {
            console.log(1);
            $scope.propertyWindowState.collapsed = !$scope.propertyWindowState.collapsed;
            jQuery("#propertiesHelpWrapper").removeClass("col-xs-1").removeClass("tliner").addClass("col-xs-3");
            jQuery("#canvasHelpWrapper").removeClass("col-xs-9").addClass("col-xs-7");
            jQuery("#propertySection").width('100%').css('background', 'linear-gradient(to top, #949494 0%, #afafaf 100%)');
            jQuery("#titlesection").css('display', 'inline');
            jQuery("#titlesectionf").css('display', 'inline');
            jQuery("#titlesectio").css('display', 'none');
            jQuery("#selectedbody").css('display', 'block');
            jQuery("#selectedtitle").removeClass("snobg");
            jQuery("#gariten").css('display', 'none');
        };

        $scope.propertyGroupState = {'collapsed': false};

        //属性分组显示或隐藏
        $scope.propertyGroupState.toggle = function (key) {
            $scope.propertyGroupState.collapsed = !$scope.propertyGroupState.collapsed;
            if (jQuery("#" + key).css('display') === 'none') {
                jQuery("#" + key).css('display', '');
                jQuery("#icon" + key).removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
            } else {
                jQuery("#" + key).css('display', 'none');
                jQuery("#icon" + key).removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
            }
        };


        // Code that is dependent on an initialised Editor is wrapped in a promise for the editor
        $scope.editorFactory.promise.then(function () {
            //test work .1
            //var formGroupsMe = [];

            /* Build stencil item list */

            // Build simple json representation of stencil setj
            var stencilItemGroups = [];

            // Helper method: find a group in an array
            var findGroup = function (name, groupArray) {
                for (var index = 0; index < groupArray.length; index++) {
                    if (groupArray[index].name === name) {
                        return groupArray[index];
                    }
                }
                return null;
            };

            // Helper method: add a new group to an array of groups
            var addGroup = function (groupName, groupArray) {
                var group = {name: groupName, items: [], paletteItems: [], groups: [], visible: true};
                groupArray.push(group);
                return group;
            };

            /*
             StencilSet items
             */
            $http({method: 'GET', url: KISBPM.URL.getStencilSet()}).success(function (data, status, headers, config) {

                var quickMenuDefinition = ['UserTask', 'EndNoneEvent', 'ExclusiveGateway',
                    'CatchTimerEvent', 'ThrowNoneEvent', 'TextAnnotation',
                    'SequenceFlow', 'Association'];
                var ignoreForPaletteDefinition = ['SequenceFlow', 'MessageFlow', 'Association', 'DataAssociation', 'DataStore', 'SendTask'];
                var quickMenuItems = [];

                var morphRoles = [];
                for (var i = 0; i < data.rules.morphingRules.length; i++) {
                    var role = data.rules.morphingRules[i].role;
                    var roleItem = {'role': role, 'morphOptions': []};
                    morphRoles.push(roleItem);
                }

                // Check all received items
                for (var stencilIndex = 0; stencilIndex < data.stencils.length; stencilIndex++) {
                    // Check if the root group is the 'diagram' group. If so, this item should not be shown.
                    var currentGroupName = data.stencils[stencilIndex].groups[0];
                    if (currentGroupName === 'Diagram' || currentGroupName === 'Form') {
                        continue;  // go to next item
                    }

                    var removed = false;
                    if (data.stencils[stencilIndex].removed) {
                        removed = true;
                    }

                    var currentGroup = undefined;
                    if (!removed) {
                        // Check if this group already exists. If not, we create a new one

                        if (currentGroupName !== null && currentGroupName !== undefined && currentGroupName.length > 0) {

                            currentGroup = findGroup(currentGroupName, stencilItemGroups); // Find group in root groups array
                            if (currentGroup === null) {
                                currentGroup = addGroup(currentGroupName, stencilItemGroups);
                            }

                            // Add all child groups (if any)
                            for (var groupIndex = 1; groupIndex < data.stencils[stencilIndex].groups.length; groupIndex++) {
                                var childGroupName = data.stencils[stencilIndex].groups[groupIndex];
                                var childGroup = findGroup(childGroupName, currentGroup.groups);
                                if (childGroup === null) {
                                    childGroup = addGroup(childGroupName, currentGroup.groups);
                                }

                                // The current group variable holds the parent of the next group (if any),
                                // and is basically the last element in the array of groups defined in the stencil item
                                currentGroup = childGroup;

                            }

                        }
                    }

                    // Construct the stencil item
                    var stencilItem = {
                        'id': data.stencils[stencilIndex].id,
                        'name': data.stencils[stencilIndex].title,
                        'description': data.stencils[stencilIndex].description,
                        'icon': data.stencils[stencilIndex].icon,
                        'type': data.stencils[stencilIndex].type,
                        'roles': data.stencils[stencilIndex].roles,
                        'removed': removed,
                        'customIcon': false,
                        'canConnect': false,
                        'canConnectTo': false,
                        'canConnectAssociation': false
                    };

                    if (data.stencils[stencilIndex].customIconId && data.stencils[stencilIndex].customIconId > 0) {
                        stencilItem.customIcon = true;
                        stencilItem.icon = data.stencils[stencilIndex].customIconId;
                    }

                    if (!removed) {
                        if (quickMenuDefinition.indexOf(stencilItem.id) >= 0) {
                            quickMenuItems[quickMenuDefinition.indexOf(stencilItem.id)] = stencilItem;
                        }
                    }

                    if (stencilItem.id === 'TextAnnotation' || stencilItem.id === 'BoundaryCompensationEvent') {
                        stencilItem.canConnectAssociation = true;
                    }

                    for (var i = 0; i < data.stencils[stencilIndex].roles.length; i++) {
                        var stencilRole = data.stencils[stencilIndex].roles[i];
                        if (stencilRole === 'sequence_start') {
                            stencilItem.canConnect = true;
                        } else if (stencilRole === 'sequence_end') {
                            stencilItem.canConnectTo = true;
                        }

                        for (var j = 0; j < morphRoles.length; j++) {
                            if (stencilRole === morphRoles[j].role) {
                                if (!removed) {
                                    morphRoles[j].morphOptions.push(stencilItem);
                                }
                                stencilItem.morphRole = morphRoles[j].role;
                                break;
                            }
                        }
                    }

                    if (currentGroup) {
                        // Add the stencil item to the correct group
                        currentGroup.items.push(stencilItem);
                        if (ignoreForPaletteDefinition.indexOf(stencilItem.id) < 0) {
                            currentGroup.paletteItems.push(stencilItem);
                        }

                    } else {
                        // It's a root stencil element
                        if (!removed) {
                            stencilItemGroups.push(stencilItem);
                        }
                    }
                }

                for (var i = 0; i < stencilItemGroups.length; i++) {
                    if (stencilItemGroups[i].paletteItems && stencilItemGroups[i].paletteItems.length == 0) {
                        stencilItemGroups[i].visible = false;
                    }
                }

                $scope.stencilItemGroups = stencilItemGroups;

                var containmentRules = [];
                for (var i = 0; i < data.rules.containmentRules.length; i++) {
                    var rule = data.rules.containmentRules[i];
                    containmentRules.push(rule);
                }
                $scope.containmentRules = containmentRules;

                // remove quick menu items which are not available anymore due to custom pallette
                var availableQuickMenuItems = [];
                for (var i = 0; i < quickMenuItems.length; i++) {
                    if (quickMenuItems[i]) {
                        availableQuickMenuItems[availableQuickMenuItems.length] = quickMenuItems[i];
                    }
                }

                $scope.quickMenuItems = availableQuickMenuItems;
                $scope.morphRoles = morphRoles;
            }).error(function (data, status, headers, config) {
                console.log('Something went wrong when fetching stencil items:' + JSON.stringify(data));
            });

            /*
             * Listen to selection change events: show properties
             */
            $scope.editor.registerOnEvent(ORYX.CONFIG.EVENT_SELECTION_CHANGED, function (event) {
                //console.log($scope);
                var shapes = event.elements;
                var canvasSelected = false;
                if (shapes && shapes.length == 0) {
                    shapes = [$scope.editor.getCanvas()];
                    canvasSelected = true;
                }
                if (shapes && shapes.length > 0) {

                    var selectedShape = shapes.first();
                    var stencil = selectedShape.getStencil();

                    if ($rootScope.selectedElementBeforeScrolling && stencil.id().indexOf('BPMNDiagram') !== -1) {
                        // ignore canvas event because of empty selection when scrolling stops
                        return;
                    }

                    if ($rootScope.selectedElementBeforeScrolling && $rootScope.selectedElementBeforeScrolling.getId() === selectedShape.getId()) {
                        $rootScope.selectedElementBeforeScrolling = null;
                        return;
                    }

                    // Store previous selection
                    $scope.previousSelectedShape = $scope.selectedShape;

                    // Only do something if another element is selected (Oryx fires this event multiple times)
                    if ($scope.selectedShape !== undefined && $scope.selectedShape.getId() === selectedShape.getId()) {
                        if ($rootScope.forceSelectionRefresh) {
                            // Switch the flag again, this run will force refresh
                            $rootScope.forceSelectionRefresh = false;
                        } else {
                            // Selected the same element again, no need to update anything
                            return;
                        }
                    }

                    var selectedItem = {'title': '', 'properties': {}};

                    if (canvasSelected) {
                        selectedItem.auditData = {
                            'author': $scope.modelData.createdByUser,
                            'createDate': $scope.modelData.createDate
                        };
                    }

                    // Gather properties of selected item
                    var properties = stencil.properties();
                    //console.log(properties);
                    for (var i = 0; i < properties.length; i++) {
                        var property = properties[i];
                        //
                        //console.log(property._jsonProp);
                        //
                        if (property.popular() == false) continue;
                        var key = property.prefix() + "-" + property.id();

                        if (key === 'oryx-name') {
                            selectedItem.title = selectedShape.properties[key];
                        }

                        // First we check if there is a config for 'key-type' and then for 'type' alone
                        var propertyConfig = KISBPM.PROPERTY_CONFIG[key + '-' + property.type()];
                        if (propertyConfig === undefined || propertyConfig === null) {
                            propertyConfig = KISBPM.PROPERTY_CONFIG[property.type()];
                        }

                        if (propertyConfig === undefined || propertyConfig === null) {
                            console.log('WARNING: no property configuration defined for ' + key + ' of type ' + property.type());
                        } else {

                            if (selectedShape.properties[key] === 'true') {
                                selectedShape.properties[key] = true;
                            }

                            if (KISBPM.CONFIG.showRemovedProperties == false && property.isHidden()) {
                                continue;
                            }

                            var groupName = '其它';

                            if ('groupName' in property._jsonProp) {
                                groupName = property._jsonProp.groupName;
                            }

                            var currentProperty = {
                                'key': key,
                                'title': property.title(),
                                'type': property.type(),
                                'mode': 'read',
                                'hidden': property.isHidden(),
                                'value': selectedShape.properties[key],
                                'groupName': groupName
                            };

                            if ((currentProperty.type === 'complex' || currentProperty.type === 'multiplecomplex') && currentProperty.value && currentProperty.value.length > 0) {
                                try {
                                    currentProperty.value = JSON.parse(currentProperty.value);
                                } catch (err) {
                                    // ignore
                                }
                            }

                            if (propertyConfig.readModeTemplateUrl !== undefined && propertyConfig.readModeTemplateUrl !== null) {
                                currentProperty.readModeTemplateUrl = propertyConfig.readModeTemplateUrl + '?version=' + $rootScope.staticIncludeVersion;
                            }
                            if (propertyConfig.writeModeTemplateUrl !== null && propertyConfig.writeModeTemplateUrl !== null) {
                                currentProperty.writeModeTemplateUrl = propertyConfig.writeModeTemplateUrl + '?version=' + $rootScope.staticIncludeVersion;
                            }

                            if (propertyConfig.templateUrl !== undefined && propertyConfig.templateUrl !== null) {
                                currentProperty.templateUrl = propertyConfig.templateUrl + '?version=' + $rootScope.staticIncludeVersion;
                                currentProperty.hasReadWriteMode = false;
                            } else {
                                currentProperty.hasReadWriteMode = true;
                            }

                            if (currentProperty.value === undefined
                                || currentProperty.value === null
                                || currentProperty.value.length == 0) {
                                currentProperty.noValue = true;
                            }

                            if (!selectedItem.properties.hasOwnProperty(currentProperty.groupName)) {
                                selectedItem.properties[currentProperty.groupName] = [];

                            }
                            selectedItem.properties[currentProperty.groupName].push(currentProperty);

                            //selectedItem.properties.push(currentProperty);
                        }
                    }

                    //selectedItem.properties.sort(compare("groupName"));
                    console.log("selectedItem:");
                    console.log(selectedItem);
                    // Need to wrap this in an $apply block, see http://jimhoskins.com/2012/12/17/angularjs-and-apply.html
                    $scope.safeApply(function () {
                        $scope.selectedItem = selectedItem;
                        $scope.selectedShape = selectedShape;
                        $scope.groupMap = {
                            "group0": "基本属性",
                            "group1": "任务委派",
                            "group2": "任务策略",
                            "group3": "表单配置",
                            "group4": "事件设置",
                            "group5": "超时设置",
                            "group6": "其他设置",
                            "group7": "服务任务",
                            "group8": "脚本任务",
                            "group9": "业务规则",
                            "group91": "邮件配置",
                            "group92": "条件配置",
                            "group93": "时间配置"
                        };
                    });

                } else {
                    $scope.safeApply(function () {
                        $scope.selectedItem = {};
                        $scope.selectedShape = null;
                    });
                }
            });

            $scope.editor.registerOnEvent(ORYX.CONFIG.EVENT_SELECTION_CHANGED, function (event) {

                KISBPM.eventBus.dispatch(KISBPM.eventBus.EVENT_TYPE_HIDE_SHAPE_BUTTONS);
                var shapes = event.elements;

                if (shapes && shapes.length == 1) {

                    var selectedShape = shapes.first();

                    var a = $scope.editor.getCanvas().node.getScreenCTM();

                    var absoluteXY = selectedShape.absoluteXY();

                    absoluteXY.x *= a.a;
                    absoluteXY.y *= a.d;

                    var additionalIEZoom = 1;
                    if (!isNaN(screen.logicalXDPI) && !isNaN(screen.systemXDPI)) {
                        var ua = navigator.userAgent;
                        if (ua.indexOf('MSIE') >= 0) {
                            //IE 10 and below
                            var zoom = Math.round((screen.deviceXDPI / screen.logicalXDPI) * 100);
                            if (zoom !== 100) {
                                additionalIEZoom = zoom / 100
                            }
                        }
                    }

                    if (additionalIEZoom === 1) {
                        absoluteXY.y = absoluteXY.y - jQuery("#canvasSection").offset().top + 5;
                        absoluteXY.x = absoluteXY.x - jQuery("#canvasSection").offset().left;

                    } else {
                        var canvasOffsetLeft = jQuery("#canvasSection").offset().left;
                        var canvasScrollLeft = jQuery("#canvasSection").scrollLeft();
                        var canvasScrollTop = jQuery("#canvasSection").scrollTop();

                        var offset = a.e - (canvasOffsetLeft * additionalIEZoom);
                        var additionaloffset = 0;
                        if (offset > 10) {
                            additionaloffset = (offset / additionalIEZoom) - offset;
                        }
                        absoluteXY.y = absoluteXY.y - (jQuery("#canvasSection").offset().top * additionalIEZoom) + 5 + ((canvasScrollTop * additionalIEZoom) - canvasScrollTop);
                        absoluteXY.x = absoluteXY.x - (canvasOffsetLeft * additionalIEZoom) + additionaloffset + ((canvasScrollLeft * additionalIEZoom) - canvasScrollLeft);
                    }

                    var bounds = new ORYX.Core.Bounds(a.e + absoluteXY.x, a.f + absoluteXY.y, a.e + absoluteXY.x + a.a * selectedShape.bounds.width(), a.f + absoluteXY.y + a.d * selectedShape.bounds.height());
                    var shapeXY = bounds.upperLeft();

                    var stencilItem = $scope.getStencilItemById(selectedShape.getStencil().idWithoutNs());
                    var morphShapes = [];
                    if (stencilItem && stencilItem.morphRole) {
                        for (var i = 0; i < $scope.morphRoles.length; i++) {
                            if ($scope.morphRoles[i].role === stencilItem.morphRole) {
                                morphShapes = $scope.morphRoles[i].morphOptions;
                            }
                        }
                    }

                    var x = shapeXY.x;
                    if (bounds.width() < 48) {
                        x -= 24;
                    }

                    if (morphShapes && morphShapes.length > 0) {
                        // In case the element is not wide enough, start the 2 bottom-buttons more to the left
                        // to prevent overflow in the right-menu
                        var morphButton = document.getElementById('morph-button');
                        morphButton.style.display = "block";
                        morphButton.style.left = x + 24 + 'px';
                        morphButton.style.top = (shapeXY.y + bounds.height() + 2) + 'px';
                    }

                    var deleteButton = document.getElementById('delete-button');
                    deleteButton.style.display = "block";
                    deleteButton.style.left = x + 'px';
                    deleteButton.style.top = (shapeXY.y + bounds.height() + 2) + 'px';

                    if (stencilItem && (stencilItem.canConnect || stencilItem.canConnectAssociation)) {
                        var quickButtonCounter = 0;
                        var quickButtonX = shapeXY.x + bounds.width() + 5;
                        var quickButtonY = shapeXY.y;
                        jQuery('.Oryx_button').each(function (i, obj) {
                            if (obj.id !== 'morph-button' && obj.id != 'delete-button') {
                                quickButtonCounter++;
                                if (quickButtonCounter > 3) {
                                    quickButtonX = shapeXY.x + bounds.width() + 5;
                                    quickButtonY += 24;
                                    quickButtonCounter = 1;

                                } else if (quickButtonCounter > 1) {
                                    quickButtonX += 24;
                                }
                                obj.style.display = "block";
                                obj.style.left = quickButtonX + 'px';
                                obj.style.top = quickButtonY + 'px';
                            }
                        });
                    }
                }
            });

            if (!$rootScope.stencilInitialized) {
                KISBPM.eventBus.addListener(KISBPM.eventBus.EVENT_TYPE_HIDE_SHAPE_BUTTONS, function (event) {
                    jQuery('.Oryx_button').each(function (i, obj) {
                        obj.style.display = "none";
                    });
                });

                /*
                 * Listen to property updates and act upon them
                 */
                KISBPM.eventBus.addListener(KISBPM.eventBus.EVENT_TYPE_PROPERTY_VALUE_CHANGED, function (event) {
                    if (event.property && event.property.key) {
                        // If the name property is been updated, we also need to change the title of the currently selected item
                        if (event.property.key === 'oryx-name' && $scope.selectedItem !== undefined && $scope.selectedItem !== null) {
                            $scope.selectedItem.title = event.newValue;
                        }

                        // Update "no value" flag
                        event.property.noValue = (event.property.value === undefined
                            || event.property.value === null
                            || event.property.value.length == 0);
                    }
                });

                $rootScope.stencilInitialized = true;
            }

            $scope.morphShape = function () {
                $scope.safeApply(function () {

                    var shapes = $rootScope.editor.getSelection();
                    if (shapes && shapes.length == 1) {
                        $rootScope.currentSelectedShape = shapes.first();
                        var stencilItem = $scope.getStencilItemById($rootScope.currentSelectedShape.getStencil().idWithoutNs());
                        var morphShapes = [];
                        for (var i = 0; i < $scope.morphRoles.length; i++) {
                            if ($scope.morphRoles[i].role === stencilItem.morphRole) {
                                morphShapes = $scope.morphRoles[i].morphOptions.slice();
                            }
                        }

                        // Method to open shape select dialog (used later on)
                        var showSelectShapeDialog = function () {
                            $rootScope.morphShapes = morphShapes;
                            $modal({
                                backdrop: false,
                                keyboard: true,
                                template: 'editor-app/popups/select-shape.html?version=' + Date.now()
                            });
                        };

                        showSelectShapeDialog();
                    }
                });
            };

            $scope.deleteShape = function () {
                KISBPM.TOOLBAR.ACTIONS.deleteItem({'$scope': $scope});
            };

            $scope.quickAddItem = function (newItemId) {
                $scope.safeApply(function () {

                    var shapes = $rootScope.editor.getSelection();
                    if (shapes && shapes.length == 1) {
                        $rootScope.currentSelectedShape = shapes.first();

                        var containedStencil = undefined;
                        var stencilSets = $scope.editor.getStencilSets().values();
                        for (var i = 0; i < stencilSets.length; i++) {
                            var stencilSet = stencilSets[i];
                            var nodes = stencilSet.nodes();
                            for (var j = 0; j < nodes.length; j++) {
                                if (nodes[j].idWithoutNs() === newItemId) {
                                    containedStencil = nodes[j];
                                    break;
                                }
                            }
                        }

                        if (!containedStencil) return;

                        var option = {
                            type: $scope.currentSelectedShape.getStencil().namespace() + newItemId,
                            namespace: $scope.currentSelectedShape.getStencil().namespace()
                        };
                        option['connectedShape'] = $rootScope.currentSelectedShape;
                        option['parent'] = $rootScope.currentSelectedShape.parent;
                        option['containedStencil'] = containedStencil;

                        var args = {sourceShape: $rootScope.currentSelectedShape, targetStencil: containedStencil};
                        var targetStencil = $scope.editor.getRules().connectMorph(args);
                        if (!targetStencil) {
                            return;
                        }// Check if there can be a target shape
                        option['connectingType'] = targetStencil.id();

                        var command = new KISBPM.CreateCommand(option, undefined, undefined, $scope.editor);

                        $scope.editor.executeCommands([command]);
                    }
                });
            };

        }); // end of $scope.editorFactory.promise block

        /* Click handler for clicking a property */
        $scope.propertyClicked = function (index, key) {
            //console.log("++++", $scope.selectedItem.properties, index, key);
            if (!$scope.selectedItem.properties[key][index].hidden) {
                $scope.selectedItem.properties[key][index].mode = "write";
            }
        };
        /**
         * 功能:清除表单权限ID
         * 时间:2019/12/30
         * 作者:lijiacheng
         * @param
         */
        $scope.clearFormProperties = function (index,property) {
            property.value = null;
            property.noValue = true;
            console.log(88888888888)
            // $scope.
        };
        /* MouseEnter handler for clicking a property */
        $scope.showMeTheDetails = function (index, property) {

            //console.log(property);
            var top = jQuery("#" + property.$$hashKey).offset().top - 20;
            //var bottom = jQuery("#" + property.$$hashKey).offset().bottom;
            var pvalue = property.value;
            if (property.key == "oryx-usertaskassignment" && property.value.assignment) {
                if (property.value.assignment.assignee) {
                    pvalue = property.value.assignment.assignee;
                } else {
                    pvalue = "无代理人";
                }
            }
            //console.log(top,jQuery(window).height(),jQuery(document).height(),jQuery("#" + property.$$hashKey).offset());
            //防止挤出当前窗口高度
            if (jQuery(window).height() - top < 80) {
                top -= (80 - (jQuery(window).height() - top));
            }
            jQuery('body').append("<div style='position: absolute;right: 18.3%;top:" + top + "px;width: 300px;height: 80px;background: #ffffff;font-size: 16px;padding: 16px 0 0 16px;border: 1px solid #d2d2d2;border-radius: 2px;' id='mydiv2'>" + property.title + ":&nbsp;&nbsp;" + pvalue + "<div class='triangle-right' style='position: absolute;right: -2.53333333%;top: 50%;'></div>" + "<div class='triangle-right-small' style='position: absolute;right: -2.13333333%;top: 50.5%;'></div>" + "</div>")
        };
        $scope.hideDetailsForMe = function () {
            jQuery("#mydiv2").remove();
        };

        /* Helper method to retrieve the template url for a property */
        $scope.getPropertyTemplateUrl = function (index, key) {
            return $scope.selectedItem.properties[key][index].templateUrl;
        };
        $scope.getPropertyReadModeTemplateUrl = function (index, key) {
            return $scope.selectedItem.properties[key][index].readModeTemplateUrl;
        };
        $scope.getPropertyWriteModeTemplateUrl = function (index, key) {
            return $scope.selectedItem.properties[key][index].writeModeTemplateUrl;
        };

        //todo
        /* Method available to all sub controllers (for property controllers) to update the internal Oryx model */
        $scope.updatePropertyInModel = function (property, shapeId) {

            /*for (var item in $scope.selectedItem.properties) {
                for (var i = 0; i < item.length; i++) {
                    if (item[i].key == "oryx-initiator") {
                        item[i].writeModeTemplateUrl = "editor-app/configuration/properties/default-value-display-template.html";
                        item[i].value = "initiator";
                    }

                    /!*if ($scope.selectedItem.properties[i].key=="oryx-usertaskassignment") {
                        if ($scope.selectedItem.properties[i].value=="") {
                            $scope.selectedItem.properties[i].value = {assignment:{}};
                        }
                    }*!/
                }
            }*/

            if (property.key && property.key == "oryx-formtypeselect") {
                var temporary = property.value;
                //console.log("=>+>+>",temporary);
                if (temporary == "外部表单") {
                    if ($scope.selectedItem.properties.group3 && $scope.selectedItem.properties.group3[1].key == "oryx-formkeydefinition") {
                        console.log("Shiny Days!");
                        $scope.selectedItem.properties.group3[1].writeModeTemplateUrl = "editor-app/configuration/properties/string-property-write-mode-template.html";
                        $scope.selectedItem.properties.group3[1].readModeTemplateUrl = "editor-app/configuration/properties/default-value-display-template.html";
                        // });
                    }
                } else if (temporary == "自定义表单") {
                    for (var i = 0; i < $scope.selectedItem.properties.group3.length; i++) {
                        if ($scope.selectedItem.properties.group3[i].key == "oryx-formkeydefinition") {
                            $scope.selectedItem.properties.group3[i].writeModeTemplateUrl = "editor-app/configuration/properties/form-keydefinition-select-template.html";
                            $scope.selectedItem.properties.group3[i].readModeTemplateUrl = "editor-app/configuration/properties/form-keydefinition-display-template.html";
                            //$scope.propertyClicked(i);
                        }
                    }
                }
            }

            //以下三条都是根据多实例类型来设置后续相应的值
            if (property.value && property.value == "Parallel") {
                //console.log($scope.selectedItem.properties["group2"]);
                for (var i = 0; i < $scope.selectedItem.properties["group2"].length; i++) {
                    if ($scope.selectedItem.properties["group2"][i].key == "oryx-multiinstance_cardinality") {
                        //$scope.selectedItem.properties[i].value = "assigneeList";
                        //console.log($scope.selectedItem.properties["group2"][i]);
                        $scope.selectedItem.properties["group2"][i].writeModeTemplateUrl = "editor-app/configuration/properties/default-value-display-template.html";
                        $scope.propertyClicked(i, "group2");
                    }
                    if ($scope.selectedItem.properties["group2"][i].key == "oryx-multiinstance_collection") {
                        if (!$scope.selectedItem.properties["group2"][i].value) {
                            $scope.selectedItem.properties["group2"][i].value = "assigneeList";
                        }
                        $scope.selectedItem.properties["group2"][i].writeModeTemplateUrl = "editor-app/configuration/properties/multiinstance-list-select-template.html";
                        $scope.propertyClicked(i, "group2");
                    }
                    if ($scope.selectedItem.properties["group2"][i].key == "oryx-multiinstance_variable") {
                        $scope.selectedItem.properties["group2"][i].value = "assignee";
                        $scope.selectedItem.properties["group2"][i].writeModeTemplateUrl = "editor-app/configuration/properties/default-value-display-template.html";
                        $scope.propertyClicked(i, "group2");
                    }
                    if ($scope.selectedItem.properties["group2"][i].key == "oryx-multiinstance_condition") {
                        if (!$scope.selectedItem.properties["group2"][i].value) {
                            $scope.selectedItem.properties["group2"][i].value = '${actMultiInsCompleteService.complete(execution,"all")}';
                        }
                        $scope.selectedItem.properties["group2"][i].writeModeTemplateUrl = "editor-app/configuration/properties/multiinstance-property-pass-template.html";
                        $scope.propertyClicked(i, "group2");
                    }
                    //console.log($scope.selectedItem.properties);
                    for (var j = 0; j < $scope.selectedItem.properties.length; j++) {
                        if ($scope.selectedItem.properties[j].toString().match("group2")) {
                            if (i < 4 && $scope.selectedItem.properties["group1"][i].key == "oryx-usertaskassignment") {
                                $scope.selectedItem.properties["group1"][i].writeModeTemplateUrl = "editor-app/configuration/properties/assignment-display-template.html";

                                $scope.propertyClicked(i, "group1");
                                //console.log(typeof $scope.selectedItem.properties[i].value);
                                if (typeof $scope.selectedItem.properties["group1"][i].value != "string" && $scope.selectedItem.properties["group1"][i].value) {
                                    $scope.selectedItem.properties["group1"][i].value.assignment.assignee = "${assignee}";
                                } else {
                                    $scope.selectedItem.properties["group1"][i].value = {assignment: {assignee: "${assignee}"}};
                                }

                            }
                        }
                    }
                }

            }


            if (property.value && property.value == "Sequential") {
                console.log($scope.selectedItem.properties["group2"]);
                //group2是任务策略
                for (var i = 0; i < $scope.selectedItem.properties["group2"].length; i++) {
                    //多实例基数
                    if ($scope.selectedItem.properties["group2"][i].key == "oryx-multiinstance_cardinality") {
                        //$scope.selectedItem.properties[i].value = "assigneeList";
                        $scope.selectedItem.properties["group2"][i].writeModeTemplateUrl = "editor-app/configuration/properties/string-property-write-mode-template.html";
                        $scope.propertyClicked(i, "group2");
                    }
                    //多实例列表
                    if ($scope.selectedItem.properties["group2"][i].key == "oryx-multiinstance_collection") {
                        if (!$scope.selectedItem.properties["group2"][i].value) {
                            $scope.selectedItem.properties["group2"][i].value = "assigneeList";
                        }
                        $scope.selectedItem.properties["group2"][i].writeModeTemplateUrl = "editor-app/configuration/properties/multiinstance-list-select-template.html";
                        $scope.propertyClicked(i, "group2");
                    }
                    //多实例变量
                    if ($scope.selectedItem.properties["group2"][i].key == "oryx-multiinstance_variable") {
                        $scope.selectedItem.properties["group2"][i].value = "assignee";
                        $scope.selectedItem.properties["group2"][i].writeModeTemplateUrl = "editor-app/configuration/properties/default-value-display-template.html";
                        $scope.propertyClicked(i, "group2");
                    }
                    //多实例完成条件
                    if ($scope.selectedItem.properties["group2"][i].key == "oryx-multiinstance_condition") {
                        $scope.selectedItem.properties["group2"][i].value = '${actMultiInsCompleteService.complete(execution,"all")}';
                        $scope.selectedItem.properties["group2"][i].writeModeTemplateUrl = "editor-app/configuration/properties/default-value-display-template.html";
                        $scope.propertyClicked(i, "group2");
                    }
                    for (var j = 0; j < $scope.selectedItem.properties.length; j++) {
                        if ($scope.selectedItem.properties[j].toString().match("group2")) {
                            if (i < 4 && $scope.selectedItem.properties["group1"][i].key == "oryx-usertaskassignment") {
                                /*if ($scope.selectedItem.properties[i].value) {
                                    $scope.selectedItem.properties[i].value.assignment.assignee = "${assignee}";
                                } else {
                                    $scope.selectedItem.properties[i].value = {assignment:{assignee:"${assignee}"}};
                                }*/
                                $scope.selectedItem.properties["group1"][i].writeModeTemplateUrl = "editor-app/configuration/properties/assignment-display-template.html";
                                $scope.propertyClicked(i, "group1");
                                if (typeof $scope.selectedItem.properties["group1"][i].value != "string" && $scope.selectedItem.properties["group1"][i].value) {
                                    $scope.selectedItem.properties["group1"][i].value.assignment.assignee = "${assignee}";
                                } else {
                                    $scope.selectedItem.properties["group1"][i].value = {assignment: {assignee: "${assignee}"}};
                                }
                            }
                        }
                    }

                }
            }

            if (property.value && property.value == "None") {
                //console.log($scope.selectedItem.properties["group2"]);
                for (var i = 0; i < $scope.selectedItem.properties["group2"].length; i++) {
                    if ($scope.selectedItem.properties["group2"][i].key == "oryx-multiinstance_cardinality") {
                        //$scope.selectedItem.properties[i].value = "assigneeList";
                        $scope.selectedItem.properties["group2"][i].writeModeTemplateUrl = "editor-app/configuration/properties/default-value-display-template.html";
                        $scope.propertyClicked(i, "group2");
                    }
                    if ($scope.selectedItem.properties["group2"][i].key == "oryx-multiinstance_collection") {
                        $scope.selectedItem.properties["group2"][i].value = "";
                        $scope.selectedItem.properties["group2"][i].writeModeTemplateUrl = "editor-app/configuration/properties/default-value-display-template.html";
                        $scope.propertyClicked(i, "group2");
                    }
                    if ($scope.selectedItem.properties["group2"][i].key == "oryx-multiinstance_variable") {
                        $scope.selectedItem.properties["group2"][i].value = "";
                        $scope.selectedItem.properties["group2"][i].writeModeTemplateUrl = "editor-app/configuration/properties/default-value-display-template.html";
                        $scope.propertyClicked(i, "group2");
                    }
                    if ($scope.selectedItem.properties["group2"][i].key == "oryx-multiinstance_condition") {
                        $scope.selectedItem.properties["group2"][i].value = "";
                        $scope.selectedItem.properties["group2"][i].writeModeTemplateUrl = "editor-app/configuration/properties/default-value-display-template.html";
                        $scope.propertyClicked(i, "group2");
                    }
                    //console.log($scope.selectedItem.properties,i);
                    for (var j = 0; j < $scope.selectedItem.properties.length; j++) {
                        if ($scope.selectedItem.properties[j].toString().match("group2")) {
                            if (i < 4 && $scope.selectedItem.properties["group1"][i].key == "oryx-usertaskassignment") {
                                //debugger;
                                if ($scope.selectedItem.properties["group1"][i].value && $scope.selectedItem.properties["group1"][i].value.assignment.assignee == "${assignee}") {
                                    //$scope.selectedItem.properties[i].value = "";
                                    delete $scope.selectedItem.properties["group1"][i].value.assignment.assignee;
                                    //$scope.selectedItem.properties[i].value.assignment.assignee = "${assignee}";
                                }

                                //$scope.selectedItem.properties["group1"][i].writeModeTemplateUrl = "editor-app/configuration/properties/assignment-write-template.html";
                                //$scope.propertyClicked(i,"group1").preventDefault();
                            }
                        }
                    }
                }

            }

            //设置为流程发起人之后要完成的一系列神奇的操作
            if ($scope.selectedItem.properties["group1"] && $scope.selectedItem.properties["group1"][0].value == true) {
                $scope.selectedItem.properties["group1"][1].writeModeTemplateUrl = "editor-app/configuration/properties/assignment-display-template.html";
                $scope.selectedItem.properties["group1"][2].writeModeTemplateUrl = "editor-app/configuration/properties/default-value-display-template.html";
                $scope.selectedItem.properties["group1"][2].value = "";
                $scope.selectedItem.properties["group1"][3].writeModeTemplateUrl = "editor-app/configuration/properties/default-value-display-template.html";
                $scope.selectedItem.properties["group1"][3].value = "";
                if (!$scope.selectedItem.properties["group1"][1].value) {
                    $scope.propertyClicked(0, "group1");
                    $scope.selectedItem.properties["group1"][1].value = {assignment: {assignee: "${initiator}"}};
                } else {
                    $scope.selectedItem.properties["group1"][1].value.assignment.assignee = "${initiator}";
                }
                for (var j = 0; j < $scope.selectedItem.properties["group2"].length; j++) {
                    $scope.selectedItem.properties["group2"][j].value = "";
                    $scope.selectedItem.properties["group2"][j].writeModeTemplateUrl = "editor-app/configuration/properties/default-value-display-template.html";
                }
                $scope.selectedItem.properties["group2"][0].value = "None";
                //$scope.selectedItem.properties["group2"][0].writeModeTemplateUrl = "editor-app/configuration/properties/default-value-display-template.html";
                $scope.propertyClicked(0, "group2");
            } else if ($scope.selectedItem.properties["group1"] && $scope.selectedItem.properties["group1"][0].value == false && $scope.selectedItem.properties["group1"][1].value && $scope.selectedItem.properties["group1"][1].value.assignment.assignee == "${initiator}") {
                delete $scope.selectedItem.properties["group1"][1].value.assignment.assignee;
                //$scope.selectedItem.properties["group1"][1].writeModeTemplateUrl = "editor-app/configuration/properties/assignment-select-template.html";
                $scope.selectedItem.properties["group1"][2].writeModeTemplateUrl = "editor-app/configuration/properties/group-select-template.html";
                $scope.selectedItem.properties["group1"][3].writeModeTemplateUrl = "editor-app/configuration/properties/groupdept-select-template.html";
                $scope.selectedItem.properties["group2"][0].writeModeTemplateUrl = "editor-app/configuration/properties/multiinstance-property-write-template.html";
            }

            /*for (var vas in $scope.selectedItem.properties) {
                //console.log($scope.selectedItem.properties[vas]);
                for (var i = 0; i < $scope.selectedItem.properties[vas].length; i++) {
                    if ($scope.selectedItem.properties[vas][i].key== "oryx-setvalueinitiator") {

                        console.log($scope.selectedItem.properties["group1"][1],$scope.selectedItem.properties["group1"][1].value);
                        if ($scope.selectedItem.properties[vas][i].value == true) {
                            $scope.selectedItem.properties["group1"][1].writeModeTemplateUrl = "editor-app/configuration/properties/assignment-display-template.html";
                            $scope.selectedItem.properties["group1"][2].writeModeTemplateUrl = "editor-app/configuration/properties/default-value-display-template.html";
                            $scope.selectedItem.properties["group1"][2].value="";
                            $scope.selectedItem.properties["group1"][3].writeModeTemplateUrl = "editor-app/configuration/properties/default-value-display-template.html";
                            $scope.selectedItem.properties["group1"][3].value="";
                            if (!$scope.selectedItem.properties["group1"][1].value) {
                                $scope.propertyClicked(i,"group1");
                                $scope.selectedItem.properties["group1"][1].value = {assignment: {assignee: "${initiator}"}};
                            } else {
                                $scope.selectedItem.properties["group1"][1].value.assignment.assignee = "${initiator}";
                            }
                            for (var j=0;j<$scope.selectedItem.properties["group2"].length;j++) {
                                $scope.selectedItem.properties["group2"][j].value = "";
                                $scope.selectedItem.properties["group2"][j].writeModeTemplateUrl = "editor-app/configuration/properties/default-value-display-template.html";
                            }
                            $scope.selectedItem.properties["group2"][0].value = "None";
                            //$scope.selectedItem.properties["group2"][0].writeModeTemplateUrl = "editor-app/configuration/properties/default-value-display-template.html";
                            $scope.propertyClicked(i, "group2");
                        } else if ($scope.selectedItem.properties[vas][i].value == false &&$scope.selectedItem.properties["group1"][1].value&& $scope.selectedItem.properties["group1"][1].value.assignment.assignee == "${initiator}") {
                            delete $scope.selectedItem.properties["group1"][1].value.assignment.assignee;
                            //$scope.selectedItem.properties["group1"][1].writeModeTemplateUrl = "editor-app/configuration/properties/assignment-select-template.html";
                            $scope.selectedItem.properties["group1"][2].writeModeTemplateUrl = "editor-app/configuration/properties/group-select-template.html";
                            $scope.selectedItem.properties["group1"][3].writeModeTemplateUrl = "editor-app/configuration/properties/groupdept-select-template.html";
                            $scope.selectedItem.properties["group2"][0].writeModeTemplateUrl = "editor-app/configuration/properties/multiinstance-property-write-template.html";
                        }

                    }

                }


            }*/


            //console.log();
            var shape = $scope.selectedShape;
            // Some updates may happen when selected shape is already changed, so when an additional
            // shapeId is supplied, we need to make sure the correct shape is updated (current or previous)
            if (shapeId) {
                if (shape.id != shapeId && $scope.previousSelectedShape && $scope.previousSelectedShape.id == shapeId) {
                    shape = $scope.previousSelectedShape;
                } else {
                    shape = null;
                }
            }

            if (!shape) {
                // When no shape is selected, or no shape is found for the alternative
                // shape ID, do nothing
                return;
            }
            var key = property.key;
            var newValue = property.value;
            var oldValue = shape.properties[key];

            if (newValue != oldValue) {
                var commandClass = ORYX.Core.Command.extend({
                    construct: function () {
                        this.key = key;
                        this.oldValue = oldValue;
                        this.newValue = newValue;
                        this.shape = shape;
                        this.facade = $scope.editor;
                    },
                    execute: function () {
                        this.shape.setProperty(this.key, this.newValue);
                        this.facade.getCanvas().update();
                        this.facade.updateSelection();
                    },
                    rollback: function () {
                        this.shape.setProperty(this.key, this.oldValue);
                        this.facade.getCanvas().update();
                        this.facade.updateSelection();
                    }
                });
                // Instantiate the class
                var command = new commandClass();

                // Execute the command
                $scope.editor.executeCommands([command]);
                $scope.editor.handleEvents({
                    type: ORYX.CONFIG.EVENT_PROPWINDOW_PROP_CHANGED,
                    elements: [shape],
                    key: key
                });

                // Switch the property back to read mode, now the update is done
                property.mode = 'read';

                // Fire event to all who is interested
                // Fire event to all who want to know about this
                var event = {
                    type: KISBPM.eventBus.EVENT_TYPE_PROPERTY_VALUE_CHANGED,
                    property: property,
                    oldValue: oldValue,
                    newValue: newValue
                };
                KISBPM.eventBus.dispatch(event.type, event);
            } else {
                // Switch the property back to read mode, no update was needed
                //切换表单时，避免数据错误显示,简化逻辑，通过判断是否为数字 决定是否显示外部表单value
                if (shape.properties["oryx-formtypeselect"]) {
                    if (shape.properties["oryx-formtypeselect"] == "外部表单" && (property.writeModeTemplateUrl == "editor-app/configuration/properties/string-property-write-mode-template.html")) {
                        if (!isNaN(Number(shape.properties["oryx-formkeydefinition"]))) {
                            property.value = "";
                        }
                    }
                }
                property.mode = 'read';
            }

        };

        /**
         * Helper method that searches a group for an item with the given id.
         * If not found, will return undefined.
         */
        $scope.findStencilItemInGroup = function (stencilItemId, group) {

            var item;

            // Check all items directly in this group
            for (var j = 0; j < group.items.length; j++) {
                item = group.items[j];
                if (item.id === stencilItemId) {
                    return item;
                }
            }

            // Check the child groups
            if (group.groups && group.groups.length > 0) {
                for (var k = 0; k < group.groups.length; k++) {
                    item = $scope.findStencilItemInGroup(stencilItemId, group.groups[k]);
                    if (item) {
                        return item;
                    }
                }
            }

            return undefined;
        };

        /**
         * Helper method to find a stencil item.
         */
        $scope.getStencilItemById = function (stencilItemId) {
            for (var i = 0; i < $scope.stencilItemGroups.length; i++) {
                var element = $scope.stencilItemGroups[i];

                // Real group
                if (element.items !== null && element.items !== undefined) {
                    var item = $scope.findStencilItemInGroup(stencilItemId, element);
                    if (item) {
                        return item;
                    }
                } else { // Root stencil item
                    if (element.id === stencilItemId) {
                        return element;
                    }
                }
            }
            return undefined;
        };

        /*
         * DRAG AND DROP FUNCTIONALITY
         */

        $scope.dropCallback = function (event, ui) {

            $scope.editor.handleEvents({
                type: ORYX.CONFIG.EVENT_HIGHLIGHT_HIDE,
                highlightId: "shapeRepo.attached"
            });
            $scope.editor.handleEvents({
                type: ORYX.CONFIG.EVENT_HIGHLIGHT_HIDE,
                highlightId: "shapeRepo.added"
            });

            $scope.editor.handleEvents({
                type: ORYX.CONFIG.EVENT_HIGHLIGHT_HIDE,
                highlightId: "shapeMenu"
            });

            KISBPM.eventBus.dispatch(KISBPM.eventBus.EVENT_TYPE_HIDE_SHAPE_BUTTONS);

            if ($scope.dragCanContain) {

                var item = $scope.getStencilItemById(ui.draggable[0].id);

                var pos = {x: event.pageX, y: event.pageY};

                var additionalIEZoom = 1;
                if (!isNaN(screen.logicalXDPI) && !isNaN(screen.systemXDPI)) {
                    var ua = navigator.userAgent;
                    if (ua.indexOf('MSIE') >= 0) {
                        //IE 10 and below
                        var zoom = Math.round((screen.deviceXDPI / screen.logicalXDPI) * 100);
                        if (zoom !== 100) {
                            additionalIEZoom = zoom / 100;
                        }
                    }
                }

                var screenCTM = $scope.editor.getCanvas().node.getScreenCTM();

                // Correcting the UpperLeft-Offset
                pos.x -= (screenCTM.e / additionalIEZoom);
                pos.y -= (screenCTM.f / additionalIEZoom);
                // Correcting the Zoom-Factor
                pos.x /= screenCTM.a;
                pos.y /= screenCTM.d;

                // Correcting the ScrollOffset
                pos.x -= document.documentElement.scrollLeft;
                pos.y -= document.documentElement.scrollTop;

                var parentAbs = $scope.dragCurrentParent.absoluteXY();
                pos.x -= parentAbs.x;
                pos.y -= parentAbs.y;

                var containedStencil = undefined;
                var stencilSets = $scope.editor.getStencilSets().values();
                for (var i = 0; i < stencilSets.length; i++) {
                    var stencilSet = stencilSets[i];
                    var nodes = stencilSet.nodes();
                    for (var j = 0; j < nodes.length; j++) {
                        if (nodes[j].idWithoutNs() === ui.draggable[0].id) {
                            containedStencil = nodes[j];
                            break;
                        }
                    }

                    if (!containedStencil) {
                        var edges = stencilSet.edges();
                        for (var j = 0; j < edges.length; j++) {
                            if (edges[j].idWithoutNs() === ui.draggable[0].id) {
                                containedStencil = edges[j];
                                break;
                            }
                        }
                    }
                }

                if (!containedStencil) return;

                if ($scope.quickMenu) {
                    var shapes = $scope.editor.getSelection();
                    if (shapes && shapes.length == 1) {
                        var currentSelectedShape = shapes.first();

                        var option = {};
                        option.type = currentSelectedShape.getStencil().namespace() + ui.draggable[0].id;
                        option.namespace = currentSelectedShape.getStencil().namespace();
                        option.connectedShape = currentSelectedShape;
                        option.parent = $scope.dragCurrentParent;
                        option.containedStencil = containedStencil;

                        // If the ctrl key is not pressed,
                        // snapp the new shape to the center
                        // if it is near to the center of the other shape
                        if (!event.ctrlKey) {
                            // Get the center of the shape
                            var cShape = currentSelectedShape.bounds.center();
                            // Snapp +-20 Pixel horizontal to the center
                            if (20 > Math.abs(cShape.x - pos.x)) {
                                pos.x = cShape.x;
                            }
                            // Snapp +-20 Pixel vertical to the center
                            if (20 > Math.abs(cShape.y - pos.y)) {
                                pos.y = cShape.y;
                            }
                        }

                        option.position = pos;

                        if (containedStencil.idWithoutNs() !== 'SequenceFlow' && containedStencil.idWithoutNs() !== 'Association' &&
                            containedStencil.idWithoutNs() !== 'MessageFlow' && containedStencil.idWithoutNs() !== 'DataAssociation') {
                            var args = {sourceShape: currentSelectedShape, targetStencil: containedStencil};
                            var targetStencil = $scope.editor.getRules().connectMorph(args);
                            if (!targetStencil) {
                                return;
                            }// Check if there can be a target shape
                            option.connectingType = targetStencil.id();
                        }

                        var command = new KISBPM.CreateCommand(option, $scope.dropTargetElement, pos, $scope.editor);
                        if (Math.abs($scope.ox - $scope.nx) > 10 && Math.abs($scope.oy - $scope.ny) > 10) {
                            $scope.editor.executeCommands([command]);
                        }
                    }
                } else {
                    var canAttach = false;
                    if (containedStencil.idWithoutNs() === 'BoundaryErrorEvent' || containedStencil.idWithoutNs() === 'BoundaryTimerEvent' ||
                        containedStencil.idWithoutNs() === 'BoundarySignalEvent' || containedStencil.idWithoutNs() === 'BoundaryMessageEvent' ||
                        containedStencil.idWithoutNs() === 'BoundaryCancelEvent' || containedStencil.idWithoutNs() === 'BoundaryCompensationEvent') {
                        // Modify position, otherwise boundary event will get position related to left corner of the canvas instead of the container
                        pos = $scope.editor.eventCoordinates(event);
                        canAttach = true;
                    }

                    var option = {};
                    option['type'] = $scope.modelData.model.stencilset.namespace + item.id;
                    option['namespace'] = $scope.modelData.model.stencilset.namespace;
                    option['position'] = pos;
                    option['parent'] = $scope.dragCurrentParent;

                    var commandClass = ORYX.Core.Command.extend({
                        construct: function (option, dockedShape, canAttach, position, facade) {
                            this.option = option;
                            this.docker = null;
                            this.dockedShape = dockedShape;
                            this.dockedShapeParent = dockedShape.parent || facade.getCanvas();
                            this.position = position;
                            this.facade = facade;
                            this.selection = this.facade.getSelection();
                            this.shape = null;
                            this.parent = null;
                            this.canAttach = canAttach;
                        },
                        execute: function () {
                            if (!this.shape) {
                                this.shape = this.facade.createShape(option);
                                this.parent = this.shape.parent;
                            } else if (this.parent) {
                                this.parent.add(this.shape);
                            }

                            if (this.canAttach && this.shape.dockers && this.shape.dockers.length) {
                                this.docker = this.shape.dockers[0];

                                this.dockedShapeParent.add(this.docker.parent);

                                // Set the Docker to the new Shape
                                this.docker.setDockedShape(undefined);
                                this.docker.bounds.centerMoveTo(this.position);
                                if (this.dockedShape !== this.facade.getCanvas()) {
                                    this.docker.setDockedShape(this.dockedShape);
                                }
                                this.facade.setSelection([this.docker.parent]);
                            }

                            this.facade.getCanvas().update();
                            this.facade.updateSelection();

                        },
                        rollback: function () {
                            if (this.shape) {
                                this.facade.setSelection(this.selection.without(this.shape));
                                this.facade.deleteShape(this.shape);
                            }
                            if (this.canAttach && this.docker) {
                                this.docker.setDockedShape(undefined);
                            }
                            this.facade.getCanvas().update();
                            this.facade.updateSelection();

                        }
                    });

                    // Update canvas
                    var command = new commandClass(option, $scope.dragCurrentParent, canAttach, pos, $scope.editor);
                    $scope.editor.executeCommands([command]);

                    // Fire event to all who want to know about this
                    var dropEvent = {
                        type: KISBPM.eventBus.EVENT_TYPE_ITEM_DROPPED,
                        droppedItem: item,
                        position: pos
                    };
                    KISBPM.eventBus.dispatch(dropEvent.type, dropEvent);
                }
            }

            $scope.dragCurrentParent = undefined;
            $scope.dragCurrentParentId = undefined;
            $scope.dragCurrentParentStencil = undefined;
            $scope.dragCanContain = undefined;
            $scope.quickMenu = undefined;
            $scope.dropTargetElement = undefined;
        };


        $scope.overCallback = function (event, ui) {
            $scope.dragModeOver = true;
        };

        $scope.outCallback = function (event, ui) {
            $scope.dragModeOver = false;
        };

        $scope.startDragCallback = function (event, ui) {
            $scope.dragModeOver = false;
            $scope.quickMenu = false;
            if (!ui.helper.hasClass('stencil-item-dragged')) {
                ui.helper.addClass('stencil-item-dragged');
            }
        };

        $scope.startDragCallbackQuickMenu = function (event, ui) {
             $scope.ox = event.pageX;
            $scope.oy = event.pageY;
            $scope.dragModeOver = false;
            $scope.quickMenu = true;
        };
        $scope.stopDragCallback = function (event, ui) {
             $scope.nx = event.pageX;
            $scope.ny = event.pageY;
        };

        $scope.dragCallback = function (event, ui) {

            if ($scope.dragModeOver != false) {

                var coord = $scope.editor.eventCoordinatesXY(event.pageX, event.pageY);

                var additionalIEZoom = 1;
                if (!isNaN(screen.logicalXDPI) && !isNaN(screen.systemXDPI)) {
                    var ua = navigator.userAgent;
                    if (ua.indexOf('MSIE') >= 0) {
                        //IE 10 and below
                        var zoom = Math.round((screen.deviceXDPI / screen.logicalXDPI) * 100);
                        if (zoom !== 100) {
                            additionalIEZoom = zoom / 100
                        }
                    }
                }

                if (additionalIEZoom !== 1) {
                    coord.x = coord.x / additionalIEZoom;
                    coord.y = coord.y / additionalIEZoom;
                }

                var aShapes = $scope.editor.getCanvas().getAbstractShapesAtPosition(coord);

                if (aShapes.length <= 0) {
                    if (event.helper) {
                        $scope.dragCanContain = false;
                        return false;
                    }
                }

                if (aShapes[0] instanceof ORYX.Core.Canvas) {
                    $scope.editor.getCanvas().setHightlightStateBasedOnX(coord.x);
                }

                if (aShapes.length == 1 && aShapes[0] instanceof ORYX.Core.Canvas) {
                    var parentCandidate = aShapes[0];

                    $scope.dragCanContain = true;
                    $scope.dragCurrentParent = parentCandidate;
                    $scope.dragCurrentParentId = parentCandidate.id;

                    $scope.editor.handleEvents({
                        type: ORYX.CONFIG.EVENT_HIGHLIGHT_HIDE,
                        highlightId: "shapeRepo.attached"
                    });
                    $scope.editor.handleEvents({
                        type: ORYX.CONFIG.EVENT_HIGHLIGHT_HIDE,
                        highlightId: "shapeRepo.added"
                    });
                    return false;
                } else {
                    var item = $scope.getStencilItemById(event.target.id);

                    var parentCandidate = aShapes.reverse().find(function (candidate) {
                        return (candidate instanceof ORYX.Core.Canvas
                            || candidate instanceof ORYX.Core.Node
                            || candidate instanceof ORYX.Core.Edge);
                    });

                    if (!parentCandidate) {
                        $scope.dragCanContain = false;
                        return false;
                    }

                    if (item.type === "node") {

                        // check if the draggable is a boundary event and the parent an Activity
                        var _canContain = false;
                        var parentStencilId = parentCandidate.getStencil().id();

                        if ($scope.dragCurrentParentId && $scope.dragCurrentParentId === parentCandidate.id) {
                            return false;
                        }

                        var parentItem = $scope.getStencilItemById(parentCandidate.getStencil().idWithoutNs());
                        if (parentItem.roles.indexOf("Activity") > -1) {
                            if (item.roles.indexOf("IntermediateEventOnActivityBoundary") > -1) {
                                _canContain = true;
                            }
                        } else if (parentCandidate.getStencil().idWithoutNs() === 'Pool') {
                            if (item.id === 'Lane') {
                                _canContain = true;
                            }
                        }

                        if (_canContain) {
                            $scope.editor.handleEvents({
                                type: ORYX.CONFIG.EVENT_HIGHLIGHT_SHOW,
                                highlightId: "shapeRepo.attached",
                                elements: [parentCandidate],
                                style: ORYX.CONFIG.SELECTION_HIGHLIGHT_STYLE_RECTANGLE,
                                color: ORYX.CONFIG.SELECTION_VALID_COLOR
                            });

                            $scope.editor.handleEvents({
                                type: ORYX.CONFIG.EVENT_HIGHLIGHT_HIDE,
                                highlightId: "shapeRepo.added"
                            });
                        } else {
                            for (var i = 0; i < $scope.containmentRules.length; i++) {
                                var rule = $scope.containmentRules[i];
                                if (rule.role === parentItem.id) {
                                    for (var j = 0; j < rule.contains.length; j++) {
                                        if (item.roles.indexOf(rule.contains[j]) > -1) {
                                            _canContain = true;
                                            break;
                                        }
                                    }

                                    if (_canContain) {
                                        break;
                                    }
                                }
                            }

                            // Show Highlight
                            $scope.editor.handleEvents({
                                type: ORYX.CONFIG.EVENT_HIGHLIGHT_SHOW,
                                highlightId: 'shapeRepo.added',
                                elements: [parentCandidate],
                                color: _canContain ? ORYX.CONFIG.SELECTION_VALID_COLOR : ORYX.CONFIG.SELECTION_INVALID_COLOR
                            });

                            $scope.editor.handleEvents({
                                type: ORYX.CONFIG.EVENT_HIGHLIGHT_HIDE,
                                highlightId: "shapeRepo.attached"
                            });
                        }

                        $scope.dragCurrentParent = parentCandidate;
                        $scope.dragCurrentParentId = parentCandidate.id;
                        $scope.dragCurrentParentStencil = parentStencilId;
                        $scope.dragCanContain = _canContain;

                    } else {
                        var canvasCandidate = $scope.editor.getCanvas();
                        var canConnect = false;

                        var targetStencil = $scope.getStencilItemById(parentCandidate.getStencil().idWithoutNs());
                        if (targetStencil) {
                            var associationConnect = false;
                            if (stencil.idWithoutNs() === 'Association' && (curCan.getStencil().idWithoutNs() === 'TextAnnotation' || curCan.getStencil().idWithoutNs() === 'BoundaryCompensationEvent')) {
                                associationConnect = true;
                            } else if (stencil.idWithoutNs() === 'DataAssociation' && curCan.getStencil().idWithoutNs() === 'DataStore') {
                                associationConnect = true;
                            }

                            if (targetStencil.canConnectTo || associationConnect) {
                                canConnect = true;
                            }
                        }

                        //Edge
                        $scope.dragCurrentParent = canvasCandidate;
                        $scope.dragCurrentParentId = canvasCandidate.id;
                        $scope.dragCurrentParentStencil = canvasCandidate.getStencil().id();
                        $scope.dragCanContain = canConnect;

                        // Show Highlight
                        $scope.editor.handleEvents({
                            type: ORYX.CONFIG.EVENT_HIGHLIGHT_SHOW,
                            highlightId: 'shapeRepo.added',
                            elements: [canvasCandidate],
                            color: ORYX.CONFIG.SELECTION_VALID_COLOR
                        });

                        $scope.editor.handleEvents({
                            type: ORYX.CONFIG.EVENT_HIGHLIGHT_HIDE,
                            highlightId: "shapeRepo.attached"
                        });
                    }
                }
            }
        };

        $scope.dragCallbackQuickMenu = function (event, ui) {

            if ($scope.dragModeOver != false) {
                var coord = $scope.editor.eventCoordinatesXY(event.pageX, event.pageY);

                var additionalIEZoom = 1;
                if (!isNaN(screen.logicalXDPI) && !isNaN(screen.systemXDPI)) {
                    var ua = navigator.userAgent;
                    if (ua.indexOf('MSIE') >= 0) {
                        //IE 10 and below
                        var zoom = Math.round((screen.deviceXDPI / screen.logicalXDPI) * 100);
                        if (zoom !== 100) {
                            additionalIEZoom = zoom / 100
                        }
                    }
                }

                if (additionalIEZoom !== 1) {
                    coord.x = coord.x / additionalIEZoom;
                    coord.y = coord.y / additionalIEZoom;
                }

                var aShapes = $scope.editor.getCanvas().getAbstractShapesAtPosition(coord);

                if (aShapes.length <= 0) {
                    if (event.helper) {
                        $scope.dragCanContain = false;
                        return false;
                    }
                }

                if (aShapes[0] instanceof ORYX.Core.Canvas) {
                    $scope.editor.getCanvas().setHightlightStateBasedOnX(coord.x);
                }

                var stencil = undefined;
                var stencilSets = $scope.editor.getStencilSets().values();
                for (var i = 0; i < stencilSets.length; i++) {
                    var stencilSet = stencilSets[i];
                    var nodes = stencilSet.nodes();
                    for (var j = 0; j < nodes.length; j++) {
                        if (nodes[j].idWithoutNs() === event.target.id) {
                            stencil = nodes[j];
                            break;
                        }
                    }

                    if (!stencil) {
                        var edges = stencilSet.edges();
                        for (var j = 0; j < edges.length; j++) {
                            if (edges[j].idWithoutNs() === event.target.id) {
                                stencil = edges[j];
                                break;
                            }
                        }
                    }
                }

                var candidate = aShapes.last();

                var isValid = false;
                if (stencil.type() === "node") {
                    //check containment rules
                    var canContain = $scope.editor.getRules().canContain({
                        containingShape: candidate,
                        containedStencil: stencil
                    });

                    var parentCandidate = aShapes.reverse().find(function (candidate) {
                        return (candidate instanceof ORYX.Core.Canvas
                            || candidate instanceof ORYX.Core.Node
                            || candidate instanceof ORYX.Core.Edge);
                    });

                    if (!parentCandidate) {
                        $scope.dragCanContain = false;
                        return false;
                    }

                    $scope.dragCurrentParent = parentCandidate;
                    $scope.dragCurrentParentId = parentCandidate.id;
                    $scope.dragCurrentParentStencil = parentCandidate.getStencil().id();
                    $scope.dragCanContain = canContain;
                    $scope.dropTargetElement = parentCandidate;
                    isValid = canContain;

                } else { //Edge

                    var shapes = $scope.editor.getSelection();
                    if (shapes && shapes.length == 1) {
                        var currentSelectedShape = shapes.first();
                        var curCan = candidate;
                        var canConnect = false;

                        var targetStencil = $scope.getStencilItemById(curCan.getStencil().idWithoutNs());
                        if (targetStencil) {
                            var associationConnect = false;
                            if (stencil.idWithoutNs() === 'Association' && (curCan.getStencil().idWithoutNs() === 'TextAnnotation' || curCan.getStencil().idWithoutNs() === 'BoundaryCompensationEvent')) {
                                associationConnect = true;
                            } else if (stencil.idWithoutNs() === 'DataAssociation' && curCan.getStencil().idWithoutNs() === 'DataStore') {
                                associationConnect = true;
                            }

                            if (targetStencil.canConnectTo || associationConnect) {
                                while (!canConnect && curCan && !(curCan instanceof ORYX.Core.Canvas)) {
                                    candidate = curCan;
                                    //check connection rules
                                    canConnect = $scope.editor.getRules().canConnect({
                                        sourceShape: currentSelectedShape,
                                        edgeStencil: stencil,
                                        targetShape: curCan
                                    });
                                    curCan = curCan.parent;
                                }
                            }
                        }
                        var parentCandidate = $scope.editor.getCanvas();

                        isValid = canConnect;
                        $scope.dragCurrentParent = parentCandidate;
                        $scope.dragCurrentParentId = parentCandidate.id;
                        $scope.dragCurrentParentStencil = parentCandidate.getStencil().id();
                        $scope.dragCanContain = canConnect;
                        $scope.dropTargetElement = candidate;
                    }

                }

                $scope.editor.handleEvents({
                    type: ORYX.CONFIG.EVENT_HIGHLIGHT_SHOW,
                    highlightId: 'shapeMenu',
                    elements: [candidate],
                    color: isValid ? ORYX.CONFIG.SELECTION_VALID_COLOR : ORYX.CONFIG.SELECTION_INVALID_COLOR
                });
            }
        };

    }])
/*.directive('selectSearch',function ($compile) {
    return {
        restrict: 'AE', //attribute or element
        scope: {
            datas: '=',
            //bindAttr: '='
        },
        template:
        '<input type = "text" ng-change="changeKeyValue(searchField)" ng-model="searchField" style = "display:block;width:200px" ' +
        'ng-click = "hidden=!hidden" value="{{searchField}}"/></input>' +
        '<div  ng-hide="hidden">' +
        '   <select style = "width:200px" ng-change="change(property.value)" ng-model="property.value" multiple ng-options="o.usid as o.usname for o in userItems">' +
        //'       <option ng-repeat="data in datas" >{{data}}</option>' +
        '   </select>' +
        '</div>',
        //   replace: true,
        link: function ($scope, elem, attr, ctrl) {

            $scope.tempdatas = $scope.datas; //下拉框选项副本
            $scope.hidden = true;//选择框是否隐藏
            $scope.searchField = '';//文本框数据
            //将下拉选的数据值赋值给文本框
            $scope.change = function (x) {
                $scope.searchField = x;
                $scope.hidden = true;
            }
            //获取的数据值与下拉选逐个比较，如果包含则放在临时变量副本，并用临时变量副本替换下拉选原先的数值，如果数据为空或找不到，就用初始下拉选项副本替换
            $scope.changeKeyValue = function (v) {

                var newDate = [];  //临时下拉选副本
                //如果包含就添加
                angular.forEach($scope.datas, function (data, index, array) {
                    if (data.indexOf(v) >= 0) {
                        newDate.unshift(data);
                    }
                });
                //用下拉选副本替换原来的数据
                $scope.datas = newDate;
                //下拉选展示
                $scope.hidden = false;
                //如果不包含或者输入的是空字符串则用初始变量副本做替换
                if ($scope.datas.length == 0 || '' == v) {
                    $scope.datas = $scope.tempdatas;
                }
                console.log($scope.datas);
            }
        }
    };
    })*/;
/**
 * 带筛选功能的下拉框
 * 使用方法 <select ngc-select-search name="select1" ng-options="">
 * 说明[ select 一定要有name,ng-options 属性]
 */
/*.directive('ngcSelectSearch', function($animate, $compile, $parse) {

function parseOptions(optionsExp, element, scope) {
    // ngOptions里的正则
    var NG_OPTIONS_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/;

    var match = optionsExp.match(NG_OPTIONS_REGEXP);
    if (!(match)) {
        console.log('ng-options 表达式有误')
    }
    var valueName = match[5] || match[7];
    var keyName = match[6];
    var displayFn = $parse(match[2]);
    var keyFn = $parse(match[1]);
    var valuesFn = $parse(match[8]);

    var labelArray = [],
        idArray = [],
        optionValues = [];
    scope.$watch(match[8], function(newValue, oldValue) {
        if (newValue && newValue.length > 0) {
            optionValues = valuesFn(scope) || [];
            labelArray = [];
            idArray = []
            for (var index = 0, l = optionValues.length; index < l; index++) {
                var it = optionValues[index];
                if (match[2] && match[1]) {
                    var localIt = {};
                    localIt[valueName] = it;
                    var label = displayFn(scope, localIt);
                    var dataId = keyFn(scope, localIt);
                    labelArray.push(label);
                    idArray.push(dataId);
                }
            }

            scope.options = {
                'optionValues': optionValues,
                'labelArray': labelArray,
                'idArray': idArray
            }
        }
    });
}
return {
    restrict: 'A',
    require: ['ngModel'],
    priority: 100,
    replace: false,
    scope: true,
    template: '<div class="chose-container">' +
    '<div class="chose-single"><span class="j-view"></span><i class="glyphicon glyphicon-remove"></i></div>' +
    '<div class="chose-drop chose-hide j-drop">' +
    '<div class="chose-search">' +
    '<input class="j-key" type="text" autocomplete="off">' +
    '</div>' +
    '<ul class="chose-result">' +
    // '<li ng-repeat="'+repeatTempl+'" data-id="'+keyTempl+'" >{{'+ valueTempl+'}}</li>'+
    '</ul>' +
    '</div>' +
    '</div>',
    link: {
        pre: function selectSearchPreLink(scope, element, attr, ctrls) {
            console.log(this);
            var $ = jQuery;
            var tmplNode = $(this.template).first();

            var modelName = attr.ngModel,
                name = attr.name? attr.name:('def'+Date.now());
            tmplNode.attr('id', name + '_chosecontianer');

            $animate.enter(tmplNode, element.parent(), element);
        },
        post: function selectSearchPostLink(scope, element, attr, ctrls) {
            var choseNode = element.next(); //$('#'+attr.name +'_chosecontianer');
            choseNode.addClass(attr.class);
            element.addClass('chose-hide');
            // 当前选中项
            var ngModelCtrl = ctrls[0];
            if (!ngModelCtrl || !attr.name) return;

            parseOptions(attr.ngOptions, element, scope);
            var rs = {};

            function setView() {
                var currentKey = ngModelCtrl.$modelValue;
                if (isNaN(currentKey) || !currentKey) {
                    currentKey = '';
                    choseNode.find('.j-view:first').text('请选择');
                    choseNode.find('i').addClass('chose-hide');
                }
                if ((currentKey + '').length > 0) {
                    for (var i = 0, l = rs.idArray.length; i < l; i++) {
                        if (rs.idArray[i] == currentKey) {
                            choseNode.find('.j-view:first').text(rs.labelArray[i]);
                            choseNode.find('i').removeClass('chose-hide');
                            break;
                        }
                    }
                }
            }

            function setViewAndData() {
                if (!scope.options) {
                    return;
                }
                rs = scope.options;
                setView();
            }
            scope.$watchCollection('options', setViewAndData);
            scope.$watch(attr.ngModel, setView);


            function getListNodes(value) {
                var nodes = [];
                value = $.trim(value);
                for (var i = 0, l = rs.labelArray.length; i < l; i++) {
                    if (rs.labelArray[i].indexOf(value) > -1) {
                        nodes.push($('<li>').data('id', rs.idArray[i]).text(rs.labelArray[i]))
                    }
                }
                return nodes;

            }
            choseNode.on('keyup', '.j-key', function() {
                // 搜索输入框keyup，重新筛选列表
                var value = $(this).val();
                choseNode.find('ul:first').empty().append(getListNodes(value));
                return false;
            }).on('click', function() {
                choseNode.find('.j-drop').removeClass('chose-hide');
                if (choseNode.find('.j-view:first').text() != '请选择') {
                    choseNode.find('i').removeClass('chose-hide');
                }
                choseNode.find('ul:first').empty().append(getListNodes(choseNode.find('.j-key').val()));
                return false;
            }).on('click', 'ul>li', function() {
                var _this = $(this);
                ngModelCtrl.$setViewValue(_this.data('id'));
                ngModelCtrl.$render();
                choseNode.find('.j-drop').addClass('chose-hide');
                return false;

            }).on('click', 'i', function() {
                ngModelCtrl.$setViewValue('');
                ngModelCtrl.$render();
                choseNode.find('.j-view:first').text('请选择');
                return false;

            });
            var $ = jQuery;
            $(document).on("click", function() {
                $('.j-drop').addClass('chose-hide');
                choseNode.find('i').addClass('chose-hide');
                return false;
            });

        }
    }
};
})*/


var KISBPM = KISBPM || {};
//create command for undo/redo
KISBPM.CreateCommand = ORYX.Core.Command.extend({
    construct: function (option, currentReference, position, facade) {
        this.option = option;
        this.currentReference = currentReference;
        this.position = position;
        this.facade = facade;
        this.shape;
        this.edge;
        this.targetRefPos;
        this.sourceRefPos;
        /*
         * clone options parameters
         */
        this.connectedShape = option.connectedShape;
        this.connectingType = option.connectingType;
        this.namespace = option.namespace;
        this.type = option.type;
        this.containedStencil = option.containedStencil;
        this.parent = option.parent;
        this.currentReference = currentReference;
        this.shapeOptions = option.shapeOptions;
    },
    execute: function () {

        if (this.shape) {
            if (this.shape instanceof ORYX.Core.Node) {
                this.parent.add(this.shape);
                if (this.edge) {
                    this.facade.getCanvas().add(this.edge);
                    this.edge.dockers.first().setDockedShape(this.connectedShape);
                    this.edge.dockers.first().setReferencePoint(this.sourceRefPos);
                    this.edge.dockers.last().setDockedShape(this.shape);
                    this.edge.dockers.last().setReferencePoint(this.targetRefPos);
                }

                this.facade.setSelection([this.shape]);

            } else if (this.shape instanceof ORYX.Core.Edge) {
                this.facade.getCanvas().add(this.shape);
                this.shape.dockers.first().setDockedShape(this.connectedShape);
                this.shape.dockers.first().setReferencePoint(this.sourceRefPos);
            }
        } else {
            this.shape = this.facade.createShape(this.option);
            this.edge = (!(this.shape instanceof ORYX.Core.Edge)) ? this.shape.getIncomingShapes().first() : undefined;
        }

        if (this.currentReference && this.position) {

            if (this.shape instanceof ORYX.Core.Edge) {

                if (!(this.currentReference instanceof ORYX.Core.Canvas)) {
                    this.shape.dockers.last().setDockedShape(this.currentReference);

                    if (this.currentReference.getStencil().idWithoutNs() === 'TextAnnotation') {
                        var midpoint = {};
                        midpoint.x = 0;
                        midpoint.y = this.currentReference.bounds.height() / 2;
                        this.shape.dockers.last().setReferencePoint(midpoint);
                    } else {
                        this.shape.dockers.last().setReferencePoint(this.currentReference.bounds.midPoint());
                    }
                } else {
                    this.shape.dockers.last().bounds.centerMoveTo(this.position);
                }
                this.sourceRefPos = this.shape.dockers.first().referencePoint;
                this.targetRefPos = this.shape.dockers.last().referencePoint;

            } else if (this.edge) {
                this.sourceRefPos = this.edge.dockers.first().referencePoint;
                this.targetRefPos = this.edge.dockers.last().referencePoint;
            }
        } else {
            var containedStencil = this.containedStencil;
            var connectedShape = this.connectedShape;
            var bc = connectedShape.bounds;
            var bs = this.shape.bounds;

            var pos = bc.center();
            if (containedStencil.defaultAlign() === "north") {
                pos.y -= (bc.height() / 2) + ORYX.CONFIG.SHAPEMENU_CREATE_OFFSET + (bs.height() / 2);
            } else if (containedStencil.defaultAlign() === "northeast") {
                pos.x += (bc.width() / 2) + ORYX.CONFIG.SHAPEMENU_CREATE_OFFSET_CORNER + (bs.width() / 2);
                pos.y -= (bc.height() / 2) + ORYX.CONFIG.SHAPEMENU_CREATE_OFFSET_CORNER + (bs.height() / 2);
            } else if (containedStencil.defaultAlign() === "southeast") {
                pos.x += (bc.width() / 2) + ORYX.CONFIG.SHAPEMENU_CREATE_OFFSET_CORNER + (bs.width() / 2);
                pos.y += (bc.height() / 2) + ORYX.CONFIG.SHAPEMENU_CREATE_OFFSET_CORNER + (bs.height() / 2);
            } else if (containedStencil.defaultAlign() === "south") {
                pos.y += (bc.height() / 2) + ORYX.CONFIG.SHAPEMENU_CREATE_OFFSET + (bs.height() / 2);
            } else if (containedStencil.defaultAlign() === "southwest") {
                pos.x -= (bc.width() / 2) + ORYX.CONFIG.SHAPEMENU_CREATE_OFFSET_CORNER + (bs.width() / 2);
                pos.y += (bc.height() / 2) + ORYX.CONFIG.SHAPEMENU_CREATE_OFFSET_CORNER + (bs.height() / 2);
            } else if (containedStencil.defaultAlign() === "west") {
                pos.x -= (bc.width() / 2) + ORYX.CONFIG.SHAPEMENU_CREATE_OFFSET + (bs.width() / 2);
            } else if (containedStencil.defaultAlign() === "northwest") {
                pos.x -= (bc.width() / 2) + ORYX.CONFIG.SHAPEMENU_CREATE_OFFSET_CORNER + (bs.width() / 2);
                pos.y -= (bc.height() / 2) + ORYX.CONFIG.SHAPEMENU_CREATE_OFFSET_CORNER + (bs.height() / 2);
            } else {
                pos.x += (bc.width() / 2) + ORYX.CONFIG.SHAPEMENU_CREATE_OFFSET + (bs.width() / 2);
            }

            // Move shape to the new position
            this.shape.bounds.centerMoveTo(pos);

            // Move all dockers of a node to the position
            if (this.shape instanceof ORYX.Core.Node) {
                (this.shape.dockers || []).each(function (docker) {
                    docker.bounds.centerMoveTo(pos);
                });
            }

            //this.shape.update();
            this.position = pos;

            if (this.edge) {
                this.sourceRefPos = this.edge.dockers.first().referencePoint;
                this.targetRefPos = this.edge.dockers.last().referencePoint;
            }
        }

        this.facade.getCanvas().update();
        this.facade.updateSelection();

    },
    rollback: function () {
        this.facade.deleteShape(this.shape);
        if (this.edge) {
            this.facade.deleteShape(this.edge);
        }
        //this.currentParent.update();
        this.facade.setSelection(this.facade.getSelection().without(this.shape, this.edge));
    }
});
