layui.define('tree', function (exports) {
    "use strict";

    var _MOD = 'treeSelect',
        treeData = {}, //全局树形数据缓存
        $ = layui.jquery,
        win = $(window),
        TreeSelect = function () {
            this.v = '1.0.0';
        };

    /**
     * 初始化下拉树选择框
     */
    TreeSelect.prototype.render = function (options) {
        // console.log(options);
        // elem
        var elem = options.elem,
            // 请求地址
            data = options.data,
            // ajax请求方式：post/get
            type = options.type,
            // 节点点击回调
            click = options.click,
            // key.id: id对应的字段, key.pid: pid对应的字段, key.rootPid: 根节点的pid数值
            key = options.key,
            tmp = new Date().getTime(),
            treeInputId = 'treeSelect-input-' + tmp;

        var init = {
            tree: function () {
                if (type === 'post' || type === 'get') {
                    $.ajax({
                        url: data,
                        type: type,
                        dataType: 'json',
                        success: function (d) {
                            treeData = d;
                            console.log(d);
                            layui.tree({
                                elem: '#treeSelect-ul-' + tmp,
                                nodes: d
                            });
                            init.removeLayTree();
                            init.setIndex(d, $(elem).next(), true);
                        }
                    });
                } else if (typeof data === 'object') {
                    var m = init.toTree(data);
                    treeData = m;
                    layui.tree({
                        elem: '#treeSelect-ul-' + tmp,
                        nodes: m
                    });
                    init.removeLayTree();
                    init.setIndex(m, $(elem).next(), true);
                } else {
                    return console.error('Invalid options');
                }
                return init;
            },
            toTree: function (value) {
                // 先对传入的数组进行处理，留下有用的信息
                var menus = [],
                    childrenKey = 'children',
                    rootValue = '0';

                if (options.dataFilter && typeof options.dataFilter === 'function') {
                    menus = options.dataFilter(value);
                } else {
                    menus = value;
                }

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
                return [menus[NOW]];
            },
            removeLayTree: function () {
                $(elem).next().find('ul.layui-tree').remove();
            },
            setIndex: function (data, parentDom, isRoot) {
                var d = data;
                // 生成新的tree以便支持lay-index
                var tree = $('<ul>').addClass('layui-anim layui-anim-upbit');
                if (isRoot) {
                    tree.attr({
                        'id': 'treeSelect-ul-' + tmp
                    }).addClass('layui-tree layui-box');
                }
                for (var i = 0; i < d.length; i++) {
                    var obj = d[i];
                    var iSpread = '<i class="layui-icon layui-icon-triangle-r"></i>';
                    // 没有子节点，不需要图标
                    if (obj.children == null || obj.children.length == 0) iSpread = '<i class="offset"></i>';
                    var a = $('<a>');
                    var iBranch = '<i class="layui-icon layui-icon-file"></i>';
                    // 如果是根节点，不需要图标
                    if (isRoot) iBranch = '';
                    var cite = $('<cite>').html(obj.name);
                    // 获取主键名称
                    var id;
                    if (key != null && key.id != null) {
                        id = obj[key.id];
                    } else {
                        id = obj.id;
                    }
                    var li = $('<li>').attr('lay-index', id).append(iSpread).append(a.append(iBranch).append(cite));
                    if (obj.children != null && obj.children.length > 0) {
                        init.setIndex(obj.children, li, false);
                    }
                    tree.append(li);
                }
                parentDom.append(tree);
            },
            input: function () {
                $(elem).hide();
                var $treeDiv = $('<div>').attr({
                        id: 'treeSelect-div-' + tmp
                    }).addClass('layui-treeselect layui-unselect layui-form-select'),
                    placeholder = $(elem).attr('placeholder'),
                    $treeTitle = $('<div class="layui-select-title">').attr('id', 'treeSelect-title-' + tmp),
                    value = $(elem).val(),
                    $treeInput = $('<input>').attr({
                        placeholder: placeholder,
                        readonly: 'readonly',
                        type: 'text',
                        value: value,
                        id: treeInputId,
                    }).addClass('layui-input layui-unselect').click(function () {}),
                    $treeUl = $('<ul>').addClass('layui-anim layui-anim-upbit layui-tree layui-box').attr({
                        id: 'treeSelect-ul-' + tmp,
                    });
                $(elem).after($treeDiv.append($treeTitle.append($treeInput).append('<i class="layui-edge"></i>')).append($treeUl));
                init.tree().titleToggle().spreadToggle().select();

                return init;
            },
            style: function () {
                var style = '<style>' +
                    '.layui-treeselect .layui-tree{' +
                    '   display: none;\
                        position: absolute;\
                        left: 0;\
                        top: 42px;\
                        padding: 5px 0;\
                        z-index: 999;\
                        min-width: 100%;\
                        border: 1px solid #d2d2d2;\
                        max-height: 300px;\
                        overflow-y: auto;\
                        background-color: #fff;\
                        border-radius: 2px;\
                        box-shadow: 0 2px 4px rgba(0,0,0,.12);\
                        box-sizing: border-box;' +
                    '}' +
                    '.layui-tree-branch{display: none;}' +
                    '.layui-treeselect .layui-tree li>i.layui-icon{cursor: pointer;}' +
                    '.layui-form-selected-new .layui-tree{display: inline-block}</style>'
                $('head').append(style);
            },
            titleToggle: function () {
                init.event('click', '#treeSelect-title-' + tmp, function () {

                    var $treeUl = $('#treeSelect-div-' + tmp);
                    if ($treeUl.hasClass('layui-form-selected-new')) {
                        $treeUl.removeClass('layui-form-selected-new').addClass('layui-unselect');
                    } else {
                        $treeUl.addClass('layui-form-selected-new').removeClass('layui-unselect');
                    }
                });
                return init;
            },
            spreadToggle: function () {
                init.event('click', '.layui-treeselect .layui-tree li>i.layui-icon', function () {
                    var ul = $(this).parent().find('ul').eq(0),
                        down = 'layui-icon-triangle-d',
                        right = 'layui-icon-triangle-r';

                    if (!ul.hasClass('layui-show')) {
                        ul.addClass('layui-show');
                        $(this).addClass(down).removeClass(right);
                    } else {
                        ul.removeClass('layui-show');
                        $(this).addClass(right).removeClass(down);
                    }
                });
                return init;
            },
            select: function () {
                init.event('click', '.layui-treeselect ul li a', function (e) {
                    var cite = $(this).find('cite').html();
                    var targetId = $(this).parent('li').attr('lay-index');
                    $('#' + treeInputId).val(cite);
                    $(elem).attr('value', $(this).parent().attr('lay-index'));
                    $('#treeSelect-div-' + tmp).removeClass('layui-form-selected-new').addClass('layui-unselect');
                    if (click) {
                        // 获取当前节点
                        var getThisNode = function (id, menus) {
                            if (menus.children && menus.children.length > 0) {
                                for (var i = 0; i < menus.children.length; i++) {
                                    var tmp = getThisNode(id, menus.children[i]);
                                    if (tmp) {
                                        return tmp;
                                    }
                                }
                            }
                            if (id === menus.id) {
                                return menus;
                            } else {
                                return false;
                            }
                        };

                        click(getThisNode(targetId, treeData[0]));
                    }
                });
                return init;
            },
            event: function (evt, elem, func) {
                // BUG 事件绑定在 body 上，如果只刷新容器，body 上的事件会叠加，会发生问题
                // $('body').on(evt, elem, func);
                // FIX 已解决
                $(options.elem).parent().on(evt, elem, func);
            }
        };
        init.input().style();
        return new TreeSelect();
    };

    /**
     * 设置提示文字
     * @param filter lay-filter属性
     * @param title 需要显示的提示内容
     * @returns {TreeSelect}
     */
    TreeSelect.prototype.setTitle = function (filter, title) {
        $('*[lay-filter=' + filter + ']').next().find('input').attr('placeholder', title);
        return new TreeSelect();
    };

    /**
     * 选中节点
     * @param filter lay-filter属性
     * @param id 选中的id
     */
    TreeSelect.prototype.checkNode = function (filter, id) {
        var o = $('*[lay-filter=' + filter + ']'),
            ts = o.next(),
            tsInput = ts.find('input'),
            li = ts.find('ul.layui-tree li[lay-index]');
        li.each(function (i, el) {
            var index = $(el).attr('lay-index');
            if (index == id) {
                var title = $(el).find('cite').eq(0).text();
                tsInput.val(title);
                o.val(index);
                return false;
            }
        })
    };



    var treeSelect = new TreeSelect();
    //暴露接口
    exports(_MOD, treeSelect);
})