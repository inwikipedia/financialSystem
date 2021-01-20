/*
 * File   : admin.js
 * Created: Monday September 3rd 2018 3:36:39 pm
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
 * Last Modified: Tuesday November 27th 2018 3:46:31 pm
 * Modified By  : yuchunyu97 at <yuchunyu97@gmail.com>
 * -----
 * Description:
 * -----
 * HISTORY:
 */

layui.define(['config', 'layer'], function(exports) {
    var config = layui.config;
    var layer = layui.layer;
    var popupRightIndex, popupCenterIndex, popupCenterParam;

    var tableCache = [];
    var reqCount = 0,
        loading = false;
    var new_element = document.createElement("script");
    new_element.setAttribute("type", "text/javascript");
    new_element.setAttribute(
        "src",
        "/assetsInfo/js/jsencrypt.min.js"
    );
    document.body.appendChild(new_element);
    $.ajaxSetup({
        complete: function(jqXHR, textStatus) {
            if (jqXHR.api) reqCount--;

            if (reqCount === 0) {
                admin.removeLoading();
                loading = false;
            }
            if (jqXHR.status === 401||(jqXHR.responseJSON&&jqXHR.responseJSON.message.indexOf("登录")!=-1)) {
                layer.msg('登录状态失效，请重新登录！');
                setTimeout(function () {
                    config.removeAccount();
                    if (window.top!=null && window.top.document.URL!=document.URL){
                        window.top.location.replace(window.top.location.origin+'/ADC_info/login.html?redirect_to=' + window.location.hash);
                    }else{
                        location.replace('/ADC_info/login.html?redirect_to=' + window.location.hash);
                    }
                    // location.replace('/api/login?redirect_to=' + window.location.hash);
                },2000);
            }
        }
    });
    var admin = {
        /**
         * 将侧边栏设置成为折叠状态
         *
         * @param {*} expand Boolean
         * @returns
         */
        flexible: function(expand) {
            var isExapnd = $('.layui-layout-admin').hasClass('admin-nav-mini');
            if (isExapnd == !expand) {
                return;
            }
            if (expand) {
                $('.layui-layout-admin').removeClass('admin-nav-mini');
            } else {
                $('.layui-layout-admin').addClass('admin-nav-mini');
            }
            admin.onResize();

            // PC 侧边栏变化后，重新渲染表格
            for (var i = 0; i < tableCache.length; i++) {
                (function(value) {
                    setTimeout(function() {
                        layui.table.reload(value);
                    }, 300);
                })(tableCache[i]);
            }
        },

        /**
         * 添加数据表格 ID
         *
         * @param {*} value ID
         */
        addTableCache: function(value) {
            tableCache.push(value);
        },

        /**
         * 设置导航栏选中
         *
         * @param {*} url #! 后面的东西
         */
        activeNav: function(url) {
            $('#sys-nav .layui-nav .layui-nav-item .layui-nav-child dd').removeClass('layui-this');
            $('#sys-nav .layui-nav .layui-nav-item').removeClass('layui-this');
            if (url && url != '') {
                $('#sys-nav .layui-nav .layui-nav-item').removeClass('layui-nav-itemed');

                var $a = $('#sys-nav .layui-nav>.layui-nav-item>a[href="#!' + url + '"]');
                $a.parent('dd').addClass('layui-this');
                $a.parent('li').addClass('layui-this');

                var $b = $('#sys-nav .layui-nav>.layui-nav-item>.layui-nav-child>dd>a[href="#!' + url + '"]');
                $b.parent('dd').parent('.layui-nav-child').parent('.layui-nav-item').addClass('layui-this');
                // $b.parent('dd').parent('.layui-nav-child').parent('.layui-nav-item').css('opacity','0.8');
                // $a.parent('li').css('opacity','0.8');

            }
        },

        /**
         * 右侧弹出框
         *
         * @param {*} path
         * @returns
         */
        popupRight: function(path) {
            var param = new Object();
            param.path = path;
            param.id = 'adminPopupR';
            param.title = false;
            param.anim = 2;
            param.isOutAnim = false;
            param.closeBtn = false;
            param.offset = 'r';
            param.shadeClose = true;
            param.area = '336px';
            param.skin = 'layui-layer-adminRight';
            param.end = function() {
                layer.closeAll('tips');
            };
            popupRightIndex = admin.open(param);
            return popupRightIndex;
        },
        /**
         * 关闭右侧弹出框
         *
         */
        closePopupRight: function() {
            layer.close(popupRightIndex);
        },

        /**
         * 封装 layer.open
         *
         * admin.open({
         *  title: 'xxx',
         *  path: 'system/user_form.html',
         *  success: function(){
         *
         *  }
         * });
         *
         * path是新增的参数，其他参数均为layer.open的参数，
         * 但是type和content参数无效，type固定是1（页面层）， content会被path的内容覆盖，
         * open没有finish方法，popupCenter才有。
         *
         * @param {*} param
         * @returns
         */
        open: function(param,top) {
            var sCallBack = param.success;
            param.type = 1;
            if (param.width)
            {
                var defaultWidth = param.width+"px";
            }
            else if (window.innerWidth < 450) {
                var defaultWidth = '80%';
            } else {
                var defaultWidth = '450px';
            }

            param.maxmin = param.maxmin ? param.maxmin : false;
            param.area = param.area ? param.area : defaultWidth;
            param.offset = param.offset ? param.offset : 'auto';
            param.resize ? param.resize : false;
            param.shade ? param.shade : .2;
            param.success = function(layero, index) {
                $(layero).children('.layui-layer-content').load(param.path, function() {
                    sCallBack ? sCallBack(layero, index) : '';

                    var elem = $('#adminPopupC');
                    if (elem.length&&!top) {
                        var h = $(elem[0]).height() + 43,
                            winH = window.innerHeight;
                        elem.parent().css('top', (winH - h) / 2 + 'px');
                        elem.css('overflow','overlay');
                    }
                });
            };
            return layer.open(param);
        },

        /**
         * 中间弹出框
         *
         * admin封装的popupCenter虽然没有什么特别的样式，但是带有回调的功能。
         *
         * admin.popupCenter({
         *  title: '添加用户',
         *  path: 'components/system/user_form.html',
         *  finish: function () {
         *      // 这个方法就是回调的功能，用户添加成功之后让表格reload
         *      table.reload('user-table', {});
         *  },
         *      success: function() {
         *      // user_form.html成功渲染到弹窗中
         *  },
         *  end: function() {
         *      // 弹窗关闭
         *  }
         * });
         *
         * @param {*} param
         * @returns
         */
        popupCenter: function(param,top) {
            param.id = 'adminPopupC';
            popupCenterParam = param;
            popupCenterIndex = admin.open(param,top);
            return popupCenterIndex;
        },
        popupCenterHtml: function(param) {
            console.log(param);
            param.id = 'adminPopupC';
            popupCenterIndex = admin.open(param);
            return popupCenterIndex;
        },
        /**
         * 关闭中间弹出并且触发finish回调
         *
         */
        finishPopupCenter: function(res) {
            layer.close(popupCenterIndex);
            popupCenterParam.finish ? popupCenterParam.finish(res) : '';
        },
        /**
         * 关闭中间弹出
         *
         */
        closePopupCenter: function() {
            layer.close(popupCenterIndex);
        },

        /**
         * 封装ajax请求，返回数据类型为json
         *
         * admin.req('user', {
         *  userId: 'xxx',
         *  userName: '张三'
         *  }, function (data) {
         *      console.log(JSON.stringify(data));
         *  }, {method: 'POST'});
         *
         * @param {*} url
         * @param {*} data
         * @param {*} success
         * @param {*} param 其他 ajax 参数，对象
         */
        req: function(url, data, success, param) {
            if (param && param.method && param.method.toLowerCase() !== 'get') {
                data = JSON.stringify(data);
            }
            var loads = {};
            admin.ajax($.extend({
                url: admin.formatUrl("/ADC_info"+url),
                data: data,
                dataType: 'json',
                contentType: 'application/json; charset=UTF-8',
                beforeSend: function (jqXHR) {
                    loads[url] = layer.load(2);
                    function encryptedData (publicKey, pwd) {
                        // 私钥 和后端沟通
                        // 新建JSEncrypt对象
                        var encryptor = new JSEncrypt()
                        // 设置公钥
                        encryptor.setPublicKey(publicKey)
                        // 加密数据
                        var decrypt = encryptor.encrypt(pwd.toString())
                        return decrypt
                    }
                    var pubKey="MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKtSP3y2DkyoDQsFGr6sn4saLBFwcijEPWsWQ1Hnz8sIvn7V3TyNrSesf+7nPgnUk9Gt/7aKsXUkY67BzMJ5xkECAwEAAQ==";
                    var verifyToken = encryptedData(pubKey,new Date().getTime());
                    jqXHR.setRequestHeader("Verify-Token", verifyToken);
                },
                success: function (res) {
                    layer.close(loads[url]);
                    delete loads[url];
                    if (res.ok||res.status)
                    {
                        success(res)
                    }
                    else if(res.message.indexOf("请登录") != -1) {
                        layer.msg('登录状态失效，请重新登录！');

                        setTimeout(function () {
                            config.removeAccount();
                            // location.replace('./login.html?redirect_to=');
                            location.replace('/ADC_info/login.html');

                        }, 2000)
                    }
                    else {
                        layer.msg(res.message);
                    }
                },
                error : function (res) {
                    layer.close(loads[url]);
                    delete loads[url];
                }
            }, param));
        },

        /**
         * 封装ajax请求
         *
         * @param {*} param
         */
        ajax: function(param) {
            // 处理一些错误
            if (!param.error) {
                param.error = function(xhr) {
                    // 关闭所有弹层
                    // layer.closeAll();
                    if (xhr.status === 404) {
                        // 可能是登录信息失效，跳转到登录页
                        // config.removeAccount();
                        // location.replace('./login.html?redirect_to=' + window.location.hash);
                        layer.msg('Error 404');
                    } else if (xhr.status === 401) {
                        layer.msg('登录状态失效，请重新登录！');
                        setTimeout(function () {
                            config.removeAccount();
                            location.replace('/ADC_info/login.html?redirect_to=' + window.location.hash);
                            // location.replace('/api/login?redirect_to=' + window.location.hash);

                        },2000);


                    } else if (xhr.status === 502 || xhr.status === 504) {
                        layer.msg('后台服务不可用，请稍后再试');
                        setTimeout(function () {
                            config.removeAccount();

                            location.replace('/ADC_info/login.html?redirect_to=' + window.location.hash);
                            // location.replace('/api/login?redirect_to=' + window.location.hash);

                        },2000);
                    }
                };
            }
            $.ajax(param);
        },

        /**
         * 窗口大小改变监听
         * 处理表格重新渲染
         * 暂时禁用该方法
         * 有待优化
         *
         */
        onResize: function() {
            if (config.autoRender) {
                if ($('.layui-table-view').length > 0) {
                    setTimeout(function() {
                        admin.events.refresh();
                    }, 800);
                }
            }
        },

        resize: function() {
            // 触发 window 的 resize 事件，适应表格尺寸
            $(window).trigger("resize");
        },

        /**
         * 显示加载动画
         *
         * @param {*} element
         */
        showLoading: function(element) {
            element = admin._loadingElem(element);
            $(element).append('<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop admin-loading" style="z-index: 9999999999;"></i>');
        },
        /**
         * 移除加载动画
         *
         * @param {*} element
         */
        removeLoading: function(element) {
            element = admin._loadingElem(element);
            $(element + '>.admin-loading').remove();
        },

        _loadingElem: function(element) {
            if (typeof element === 'number' || !element) {
                switch (element) {
                    case 1:
                        element = '#adminPopupC';
                        break;
                    case 2:
                        element = '.layui-body';
                        break;

                    default:
                        element = 'body';
                        break;
                }
            }
            return element;
        },

        /**
         * 格式化 URL，在后面加时间戳，兼容 IE
         *
         * @param {*} url
         * @returns
         */
        formatUrl: function(url) {
            url = config.base_server + url;
            var d = new Date();
            if (url.indexOf('?') < 0) {
                url = url + '?_ts=' + d.getTime();
            } else {
                url = url + '&_ts=' + d.getTime();
            }
            return encodeURI(url);
        },

        /**
         * 将 id pid 类型的数据转换为 树形数据
         *
         * @param {*} data
         * @param {*} param
         * @returns
         */
        toTree: function(data, param) {

            if (!param) param = {};
            param.id = param.id ? param.id : 'id';
            param.pid = param.pid ? param.pid : 'parentId';
            param.root = param.root ? param.root : '0';
            param.children = param.children ? param.children : 'children';
            // 循环
            var NOW;
            for (var i = 0; i < data.length; i++) {
                var itemI = data[i];
                if (itemI[param.pid] === param.root) {
                    NOW = i;
                    continue;
                }
                for (var j = 0; j < data.length; j++) {
                    if (i === j) {
                        continue;
                    }
                    var itemJ = data[j];
                    if (itemI[param.pid] === itemJ[param.id]) {
                        if (!itemJ[param.children] || Object.prototype.toString.call(itemJ[param.children]) !==
                            '[object Array]') {
                            itemJ[param.children] = [];
                        }
                        itemJ[param.children].push(itemI);
                        break;
                    }
                }
            }
            console.log(NOW)

            return [data[NOW]];
        },

        /**
         * 刷新
         *
         */
        refresh: function() {
            Q.refresh();
        },

        /**
         * 注册非菜单的路由信息
         *
         * @param {*} hash 浏览器地址内的 hash 值，即路由路径
         * @param {*} path 文件地址，通常组件放在 components/ 目录下，也可自定义
         * @param {*} name 页面名称
         */
        regRouter: function(hash, path, name) {
            Q.reg(hash, function() {
                // 通常组件放在 components/ 目录下，也可自定义
                layui.index.loadView(hash, path, name, '00000000');
            });
        },

        /**
         * 功能描述: 获得URL中参数对象
         *
         * @param:
         * @return:
         * @auther: quym
         * @date: 2018/9/30 15:41
         */
        GetRequest: function() {
            var url = location.hash; //获取url中"?"符后的字串
            var theRequest = new Object();
            if (url.indexOf("?") != -1) {
                var str = url.substr(url.indexOf("?") + 1);
                var strs = str.split("&");
                for (var i = 0; i < strs.length; i++) {
                    theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
                }
            }
            return theRequest;
        },

        /**
         * 功能描述: 添加按钮权限
         *
         * @param:
         * @return:
         * @auther: quym
         * @date: 2018/9/30 15:41
         */
        setUserPermission: function(permission) {
            //头部按钮权限控制
            for (var i=0;i<permission.length;i++)
            {
                var item=permission[i];
                if (!window.$access[item.name]) {
                    $("#" + item.id + "").hide();

                }
            }
        },

    };

    // ewAdmin提供的事件
    admin.events = {
        flexible: function(e) { // 折叠侧导航
            var expand = $('.layui-layout-admin').hasClass('admin-nav-mini');
            admin.flexible(expand);
        },
        refresh: function() { // 刷新主体部分
            admin.refresh();
        },
        back: function() { //后退
            history.back();
        },
        theme: function() { // 设置主题
            admin.popupRight('components/tpl/theme.html');
        },
        fullScreen: function(e) { // 全屏
            var ac = 'layui-icon-screen-full',
                ic = 'layui-icon-screen-restore';
            var ti = $(this).find('i');

            var isFullscreen = document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || false;
            if (isFullscreen) {
                var efs = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
                if (efs) {
                    efs.call(document);
                } else if (window.ActiveXObject) {
                    var ws = new ActiveXObject('WScript.Shell');
                    ws && ws.SendKeys('{F11}');
                }
                ti.addClass(ac).removeClass(ic);
            } else {
                var el = document.documentElement;
                var rfs = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen;
                if (rfs) {
                    rfs.call(el);
                } else if (window.ActiveXObject) {
                    var ws = new ActiveXObject('WScript.Shell');
                    ws && ws.SendKeys('{F11}');
                }
                ti.addClass(ic).removeClass(ac);
            }
        },
        // 关闭所有弹窗
        closeDialog: function() {
            layer.closeAll('page');
        }
    };

    // 所有ew-event
    $('body').on('click', '*[ew-event]', function() {
        var event = $(this).attr('ew-event');
        var te = admin.events[event];
        te && te.call(this, $(this));
    });

    // 移动设备遮罩层点击事件
    $('.site-mobile-shade').click(function() {
        admin.flexible(true);
    });

    // 侧导航折叠状态下鼠标经过显示提示
    $('body').on('mouseenter', '.layui-layout-admin.admin-nav-mini .layui-side .layui-nav .layui-nav-item>a', function() {
        var tipText = $(this).find('cite').text();
        if (document.body.clientWidth > 750) {
            layer.tips(tipText, this);
        }
    }).on('mouseleave', '.layui-layout-admin.admin-nav-mini .layui-side .layui-nav .layui-nav-item>a', function() {
        layer.closeAll('tips');
    });

    // 侧导航折叠状态下点击展开
    $('body').on('click', '.layui-layout-admin.admin-nav-mini .layui-side .layui-nav .layui-nav-item>a', function() {
        if (document.body.clientWidth > 750) {
            layer.closeAll('tips');
            admin.flexible(true);
        }
    });

    // 所有lay-tips处理
    $('body').on('mouseenter', '*[lay-tips]', function() {
        var tipText = $(this).attr('lay-tips');
        var dt = $(this).attr('lay-direction');
        layer.tips(tipText, this, {
            tips: dt || 1,
            time: -1
        });
    }).on('mouseleave', '*[lay-tips]', function() {
        layer.closeAll('tips');
    });

    // 注册路由
    admin.regRouter('theme', 'docs/generater_theme.html', '主题生成器');

    exports('admin', admin);
});
