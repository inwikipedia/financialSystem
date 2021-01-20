/*
 * File   : index.js
 * Created: Thursday August 30th 2018 1:17:27 pm
 * Author : yuchunyu97
 * License: MIT License
 * 
 * Copyright (c) 2018 yuchunyu97
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
 * Last Modified: Wednesday December 5th 2018 4:13:20 pm
 * Modified By  : yuchunyu97 at <yuchunyu97@gmail.com>
 * -----
 * Description: 框架基本功能模块，主要是菜单、顶部栏渲染以及路由注册
 * -----
 * HISTORY:
 * 2018-08-30	yuchunyu97	增加面包屑功能
 * 2018-08-30	yuchunyu97	完成基本功能
 */

layui.define(['config', 'admin', 'layer', 'laytpl', 'element', 'form', 'table', 'laydate', 'tools','tree'], function(exports) {
    var $ = layui.$;
    var config = layui.config;
    var admin = layui.admin;
    var layer = layui.layer;
    var laytpl = layui.laytpl;
    var element = layui.element;
    var form = layui.form;
    var tools = layui.tools;
    var menuArr=[];
    var menuIndex=0;
    var menuNum=11;
    //判断窗口分辨率
    $(document).ready(function() {
        if($(window).width()==1920){
            menuNum=11;
        }if($(window).width()<=1366){
            menuNum=7;
        }
    });
    var index = {

        /**
         * 获取菜单数据后，将父子关系的数据转换成树形结构的数据
         *
         * @param {*} value
         * @returns
         */
        toTree: function(value) {
            // 先对传入的数组进行处理，留下有用的信息
            var menus = [],
                childrenKey = 'subMenus',
                rootValue = '0';
            for (var i = 0; i < value.length; i++) {
                var valueNow = value[i];
                // 将增删改查权限的菜单过滤出去
                if (valueNow['permission'] !== null) {
                    continue;
                }
                // 构造 URL
                var path = valueNow['href'],
                    url = 'javascript:;';
                if (path && path.indexOf('.') >= 0) {

                    /**
                     * Q.js 关键字模式，路由中不能用斜线（/）
                     * 有问题看文档！！！
                     * 有问题看文档！！！
                     * 有问题看文档！！！
                     * 有问题看文档！！！
                     * 有问题看文档！！！
                     */
                    // url = '#!ADC_' + path.split('.')[0].split('/').join('_');
                    url = '#!ADC_' + path.split('.').join('_').split('/').join('_').split('?').join('_').split("=").join('_')
                }else if(path=='#!personCalendar'){
                    url = path;
                }else if(path=='#!dailyLook'){
                    url = path;
                }else if(path=='#!setCostReceiver'){
                    url = path;
                }else if(path=='#!costClaim'){
                    url = path;
                }
                var icon = valueNow['icon'] === null ? 'icon-default' : valueNow['icon'];
                // 写入数据
                menus.push({
                    id: valueNow['id'],
                    pid: valueNow['parentId'],

                    name: valueNow['name'],
                    url: url,
                    path: path,
                    icon: icon,
                    sort: valueNow['sort']

                });
            }
            // // 菜单排序
            // menus.sort(function (a, b) {
            //     if (!a.sort) a.sort = '';
            //     if (!b.sort) b.sort = '';
            //     a = a.sort.split('-');
            //     b = b.sort.split('-');
            //     if (a.length === b.length) {
            //         if (a.length === 0) {
            //             return 0;
            //         } else if (a.length === 1) {
            //             return a[0] - b[0];
            //         } else {
            //             if (a[0] === b[0]) {
            //                 return a[1] - b[1];
            //             } else {
            //                 return 0;
            //             }
            //         }
            //     } else {
            //         return a.length - b.length;
            //     }
            // });
            // 循环
            var NOW;
            for (var i = 0; i < menus.length; i++) {
                var itemI = menus[i];
                if (itemI.pid === rootValue) {
                    NOW = i;
                    continue;
                }
                for (var j = 0; j < menus.length; j++) {
                    if (i === j) {
                        continue;
                    }
                    var itemJ = menus[j];
                    if (itemI.pid === itemJ.id) {
                        if (!itemJ[childrenKey] || Object.prototype.toString.call(itemJ[childrenKey]) !==
                            '[object Array]') {
                            itemJ[childrenKey] = [];
                        }
                        itemJ[childrenKey].push(itemI);
                        break;
                    }
                }
            }
            var newMenu = menus[NOW];
            // 排序
            function newMenuSort(obj) {
                // 菜单排序
                obj.sort(function(a, b) {
                    if (!a.sort) a.sort = '';
                    if (!b.sort) b.sort = '';
                    a = a.sort.split('-');
                    b = b.sort.split('-');
                    if (a.length === b.length) {
                        if (a.length === 0) {
                            return 0;
                        } else if (a.length === 1) {
                            return a[0] - b[0];
                        } else {
                            if (a[0] === b[0]) {
                                return a[1] - b[1];
                            } else {
                                return a[1] - b[1];
                            }
                        }
                    } else {
                        return a.length - b.length;
                    }
                });
                for (var i = 0; i < obj.length; i++) {
                    if (obj[i].subMenus) {
                        newMenuSort(obj[i].subMenus);
                    }
                }
            };
            newMenuSort(newMenu.subMenus);
            return newMenu;
        },

        /**
         * 渲染左侧导航栏和上侧 header
         *
         * @returns
         */
        initNav: function(callback) {
            // 获取菜单
            var account = config.getAccount();
            if (!account) return;
            // 上侧 header 用户信息
            $('.layui-layout-admin .layui-header').vm(account);
            // 上侧 header 用户信息
            // $('.layui-layout-admin .layui-header').vm(account);
            // 重写时间戳转换方法
            Date.prototype.toLocaleDate = function() {
                return this.getFullYear() + "-" + (this.getMonth() + 1 < 10 ? '0' + (this.getMonth() + 1) : this.getMonth() + 1) + "-" + (this.getDate() < 10 ? '0' + (this.getDate()) : this.getDate());
            };
            //访问量
            var timeDay= new Date().toLocaleDate();
            $.ajax({
                url: admin.formatUrl('/api/hit/hitInfo/querySingleDayUV?yearMouthAndDay='+ timeDay ),
                type: 'GET',
                dataType: 'JSON',
                success: function(data) {
                    console.log(data);
                    // $("#PvNum").html(data.data[0].VALUE);
                    var usid = config.getAccount().usid;
                    if(usid == "GHVRTMA9H2"){
                        $(".hidden").show()
                    }else{
                        $(".hidden").hide()
                    }
                },
                error: function(xhr) {
                    if (xhr.status === 404 || xhr.status === 401) {
                        layer.msg('登录状态失效，请重新登录！');
                        // 可能是登录信息失效，跳转到登录页
                        config.removeAccount();
                        setTimeout(function () {
                            location.replace('/ADC_info/login.html?redirect_to=' + window.location.hash);
                        },2000);
                    } else if (xhr.status === 502 || xhr.status === 504) {
                        layer.msg('后台服务不可用，请稍后再试');
                    }
                }
            });


            // 获取菜单数据
            $.ajax({
                url: admin.formatUrl('/api/sys/menu/listMenuByUserId/' + account.usid),
                type: 'GET',
                dataType: 'JSON',
                async: false, // 同步进行，防止访问不到 config.menus 数据
                success: function(data) {
                    if(data.ok){
                        // 权限控制
                        window.$access = {};
                        $.each(data.data, function(index, item) {
                            if (item.permission) window.$access[item.permission] = true;
                        });


                        var menusTree = index.toTree(data.data);
                        var currentMenu = menusTree ? menusTree.subMenus : [];
                        // 加入首页菜单
                        currentMenu.unshift({
                            id: 'AAAAAAAA',
                            name: '首页',
                            // url: 'javascript:;',
                            url: '#!dashboard',
                            path: 'dashboard.html',
                            icon: 'icon-home',
                            sort: '0',
                            /*subMenus: [{
                             id: 'BBBBBBBB',
                             name: '信息展示',
                             url: '#!dashboard',
                             path: 'dashboard.html',
                             sort: '0-1'
                             }]*/
                        });
                        config.menus = currentMenu;
                        for(var i =0;i<config.menus.length;i+=menuNum){
                            menuArr.push(config.menus.slice(i,i+menuNum));
                        }
                        $(document).ready(function() {
                            if($(window).width()==1920){
                                if(config.menus.length <=11){
                                    $(".zuoBtn").hide();
                                    $(".youBtn").hide();
                                }
                            }if($(window).width()<=1366){
                                if(config.menus.length <=6){
                                    $(".zuoBtn").hide();
                                    $(".youBtn").hide();
                                }
                            }
                        })
                        var setNavFunction =function () {
                        // 渲染
                        $('#sys-nav').load('components/side.html', function() {
                            laytpl(sideNav.innerHTML).render(menuArr[menuIndex], function(html) {
                                $('#sideNav').after(html);
                            });
                            // laytpl(sideNav.innerHTML).render(config.menus, function(html) {
                            //     $('#sideNav').after(html);
                            // });
                            element.render('nav'); // 并不知道干什么用的渲染
                            admin.activeNav(Q.lash); // 设置导航栏选中
                            // 侧边栏 用户信息
                            //$('.layui-layout-admin .layui-side .admin-user').vm(account);
                            //控制菜单变换
                            if(menuIndex){
                                if(menuIndex == menuArr.length - 1){
                                  $(".youBtn").attr('src', '../assetsInfo/images/icon/right1.png')
                                } else {
                                  $(".youBtn").attr('src', '../assetsInfo/images/icon/you1.png')
                                }
                                $(".zuoBtn").attr('src', '../assetsInfo/images/icon/zuo1.png')
                                $(".zuoBtn").off("click").on("click",function () {
                                    if(menuIndex!=0){
                                        menuIndex--
                                        setNavFunction();
                                    }
                                })
                            }else{
                                if(menuIndex == menuArr.length - 1){
                                  $(".youBtn").attr('src', '../assetsInfo/images/icon/right1.png')
                                } else {
                                  $(".youBtn").attr('src', '../assetsInfo/images/icon/you1.png')
                                }
                                $(".zuoBtn").attr('src', '../assetsInfo/images/icon/left1.png')
                                $(".youBtn").off("click").on("click",function () {
                                    if(menuIndex!=menuArr.length-1){
                                        menuIndex++
                                        setNavFunction()
                                    }
                                })
                            }
                        });
                    }
                        setNavFunction();
                        callback();
                    }else{

                    }
                },
                error: function(xhr) {
                    if (xhr.status === 404 || xhr.status === 401) {
                        layer.msg('登录状态失效，请重新登录！');
                        // 可能是登录信息失效，跳转到登录页
                        config.removeAccount();
                        setTimeout(function () {
                            location.replace('/ADC_info/login.html?redirect_to=' + window.location.hash);
                        },2000);
                        // location.replace('/api/login?redirect_to=' + window.location.hash);
                    } else if (xhr.status === 502 || xhr.status === 504) {
                        layer.msg('后台服务不可用，请稍后再试');
                    }
                }
            });



        },

        /**
         * 路由注册
         *
         */
        initRouter: function() {
            // 如果菜单为空，则需要重新登录
            if (config.menus.length === 0) {
                config.removeAccount();
                location.replace('/ADC_info/login.html?redirect_to=' + window.location.hash);
                // location.replace('/api/login?redirect_to=' + window.location.hash);
                return;
            }
            index.regRouter(config.menus);
            Q.init({
                index: 'dashboard'
            });
        },

        /**
         * 使用递归循环注册
         *
         * @param {*} menus
         */
        regRouter: function(menus) {
            $.each(menus, function(i, data) {
                if (data.url && data.url.indexOf('#!') == 0) {
                    Q.reg(data.url.substring(2), function() {
                        var menuId = data.url.substring(2);
                        var menuPath = 'components/' + data.path;

                        index.loadView(menuId, menuPath, data.name, data.id);
                    });
                }
                // 递归注册路由
                if (data.subMenus) {
                    index.regRouter(data.subMenus);
                }
            });
            Q.reg("projectDetail", function() {
                // 通常组件放在 components/ 目录下，也可自定义
                layui.index.loadView("projectDetail", "components/project/projectDetail.html", "projecDetail", "11111111111");
            });
            Q.reg("personCalendar", function() {
                // 通常组件放在 components/ 目录下，也可自定义
                layui.index.loadView("personCalendar", "components/project/personCalendar.html", "personCalendar", '222222222222');
            });
            Q.reg("dailyLook", function() {
                // 通常组件放在 components/ 目录下，也可自定义
                layui.index.loadView("dailyLook", "components/externalForm/dailyLook.html", "dailyLook", 'dailyLook');
            });
            Q.reg("setCostReceiver", function() {
                // 通常组件放在 components/ 目录下，也可自定义
                layui.index.loadView("setCostReceiver", "components/costDataManage/setCostReceiver.html", "setCostReceiver", 'setCostReceiver');
            });
            Q.reg("costClaim", function() {
                // 通常组件放在 components/ 目录下，也可自定义
                layui.index.loadView("costClaim", "components/costDataManage/costClaim.html", "costClaim", 'costClaim');
            });
        },

        /**
         * 路由加载组件页面
         *
         * @param {*} menuId
         * @param {*} menuPath
         * @param {*} menuName
         */
        loadView: function(menuId, menuPath, menuName, id) {
            var contentDom = '.layui-layout-admin .layui-body';

            // 增加生命周期钩子，在当前页面被卸载之前执行的处理
            if (admin.beforeDestroy) {
                admin.beforeDestroy();
                admin.beforeDestroy = undefined;
            }

            // 加载页面
            if (!window.$params) window.$params = {};
            if (menuPath.indexOf('?') > -1) {
                // 增加 param 参数
                var params = {};
                var str = menuPath.split('?')[1].split('&');
                $.each(str, function(ind, it) {
                    var arr = it.split('=');
                    params[arr[0]] = arr[1];
                });
                $.extend(window.$params, params);
            }
            $(contentDom).load(menuPath, function() {
                // admin.removeLoading();
                // 渲染 layui form 
                // 解决页面渲染完 form 元素未渲染的 bug
                form.render();
            });
            if (menuPath.indexOf('newBigScreen') <= -1) {
                $(contentDom).css("height","100%");
            }
            // 更新面包屑
            index.updateBreadcrumb(index.getPathNameFromMenus(id, {

                subMenus: config.menus
            }));
            // 设置导航栏选中
            admin.activeNav(Q.lash);
            // 移动设备切换页面隐藏侧导航
            if (document.body.clientWidth <= 750) {
                admin.flexible(true); // 设置侧栏折叠
            }
        },

        /**
         * 更新面包屑信息
         *
         * @param {*} value
         */
        updateBreadcrumb: function(value) {
            var elem = $('.admin-breadcrumb'),
                icon = '<i class="layui-icon layui-icon-location"></i>';
            elem.empty();
            //elem.append(icon); 面包屑的第一个icon
            var length = 0;

            if (value.length === 2 && value[1].name === "首页") {
                length = 1;
            }
            for (var i = length; i < value.length; i++) {
                var path = value[i].path;
                if (value[i].name === '首页') {
                    path = '#!dashboard';
                }

                if (i==0)
                {
                    elem.append('<a href="' + path + '">'+'<i class="layui-icon layui-icon-location" style="margin-right: 0px;font-size: 14px"></i> '+ value[i].name + '</a>');
                }
                else {
                    elem.append('<a href="' + path + '">'+ value[i].name + '</a>');
                }


            }
            element.render('breadcrumb');

            // 顺便更新一下浏览器title 哈哈哈哈哈
            if (value.length > 0) {
                var title = value[value.length - 1].name + ' | '
            }
            window.document.title = title + 'ADC智能信息化系统';
        },
        /**
         * 通过 id 获取面包屑路径名称
         * 深度优先遍历
         *
         */

        getPathNameFromMenus: function(id, menus) {
            if (id == '11111111111') {
                return [{
                    name: '首页',
                    path: 'javascript:;'
                }, {
                    name: '信息化管理',
                    path: 'javascript:;'
                }, {
                    name: '项目管理',
                    path: '/#!ADC_project_list_html'
                }, {
                    name: '项目详情',
                    path: 'javascript:;'
                }];
            }
            if (id == '222222222222') {
                return [{
                    name: '首页',
                    path: 'javascript:;'
                }, {
                    name: '信息化管理',
                    path: 'javascript:;'
                }, {
                    name: '员工日程',
                    path: '#!ADC_project_staff_html'
                }, {
                    name: '日程详情',
                    path: 'javascript:;'
                }];
            }
            if (id == 'dailyLook') {
                return [{
                    name: '首页',
                    path: 'javascript:;'
                }, {
                    name: '日报查看',
                    path: 'javascript:;'
                }];
            }
            if (id == 'setCostReceiver') {
                return [{
                    name: '首页',
                    path: 'javascript:;'
                }, {
                    name: '接收人设置',
                    path: 'javascript:;'
                }];
            }
            if (id == 'costClaim') {
                return [{
                    name: '首页',
                    path: 'javascript:;'
                }, {
                    name: '部门成本管理',
                    path: 'javascript:;'
                }];
            }

            if (menus.subMenus) {
                for (var i = 0; i < menus.subMenus.length; i++) {
                    var tmp = index.getPathNameFromMenus(id, menus.subMenus[i]);

                    if (tmp) {
                        if (menus.name)
                        {
                            tmp.unshift({
                                name: menus.name,
                                path: menus.url
                            });
                        }

                        return tmp;
                    }
                }
            }
            if (id === menus.id) {
                return [{
                    name: menus.name,
                    path: 'javascript:;'
                }];
            } else {
                return false;
            }
        },

        /**
         * 页面元素绑定事件监听
         *
         */
        bindEvent: function() {
            // 退出登录
            $('#btn-logout').click(function() {
                layer.confirm('确定退出登录？', function() {
                    admin.req('/api/logout', {}, function(res) {
                        // config.removeAccount();
                        // // replace() 方法不会在 History 对象中生成一个新的记录。当使用该方法时，新的 URL 将覆盖 History 对象中的当前记录。
                        // location.replace('/api/login?redirect_to=' + window.location.hash);
                    });
                    config.removeAccount();
                    // replace() 方法不会在 History 对象中生成一个新的记录。当使用该方法时，新的 URL 将覆盖 History 对象中的当前记录。
                    location.replace('/ADC_info/login.html?redirect_to=' + window.location.hash);
                    // location.replace('/api/login?redirect_to=' + window.location.hash);
                });
            });
            // 修改密码
            $('#btn-setpw').click(function() {
                admin.popupRight('components/tpl/password.html');
            });
            // 个人信息
            $('#btn-setinf').click(function() {
                var w = window.innerWidth < 700 ? '90%' : '700px';
                var h = window.innerHeight < 500 ? '80%' : '500px';
                admin.popupCenter({
                    title: '个人信息',
                    path: 'components/tpl/user_info_tpl.html',
                    area: [w, h],
                    resize: false,
                    btn: ['保存', '取消'],
                    yes: function() {
                        $('[lay-filter="userInfoSubmit"]').click();
                    },
                    finish: function() {},
                    success: function() {}
                });
            });
            // 消息
            $('#btn-getmsg').click(function() {
                admin.popupRight('components/tpl/message.html');
            });
        },

        /**
         * 初始化
         *
         */
        init: function(callback) {
            index.initNav(callback);
            index.initRouter(callback);
            index.bindEvent(callback);

            // 使用Pandyle.config来设置comPath
            // 定义组件路径
            Pandyle.config({
                comPath: {
                    tpl: 'components/tpl/{name}.html'
                }
            });
        },


        // TODO: Encapsulation Table Module

    };

    exports('index', index);
});