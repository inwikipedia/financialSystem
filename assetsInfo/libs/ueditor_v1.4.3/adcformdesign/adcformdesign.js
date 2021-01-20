/*
 * File   : adcformdesign.js
 * Created: Wednesday October 24th 2018 1:13:29 pm
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
 * Last Modified: Friday November 2nd 2018 2:58:54 pm
 * Modified By  : yuchunyu97 at <yuchunyu97@gmail.com>
 * -----
 * Description: 表单设计器，参照 http://formdesign.leipi.org/
 * -----
 * HISTORY:
 */

UE.ADCFormDesignUrl = 'adcformdesign';

/**
 * 单行文本框
 *
 */
UE.plugins['adc_form_input'] = function () {
    var me = this,
        thePlugins = 'adc_form_input';
    me.commands[thePlugins] = {
        execCommand: function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl: this.options.UEDITOR_HOME_URL + UE.ADCFormDesignUrl + '/adc_form_input.html',
                name: thePlugins,
                editor: this,
                title: 'ADC表单设计器 - 单行文本框',
                cssRules: "width:600px;height:310px;",
                buttons: [{
                    className: 'edui-okbutton',
                    label: '确定',
                    onclick: function () {
                        dialog.close(true);
                    }
                },
                {
                    className: 'edui-cancelbutton',
                    label: '取消',
                    onclick: function () {
                        dialog.close(false);
                    }
                }
                ]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup({
        editor: this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
            baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
            me.execCommand(thePlugins);
            this.hide();
        },
        _delete: function () {
            if (window.confirm('确认删除该控件吗？')) {
                baidu.editor.dom.domUtils.remove(this.anchorEl, false);
            }
            this.hide();
        }
    });
    popup.render();
    me.addListener('mouseover', function (t, evt) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var adcform = el.getAttribute('adcform');
        if (/input/ig.test(el.tagName) && adcform == thePlugins) {
            var html = popup.formatHtml(
                '<nobr>ADC表单设计器 - 单行文本框: <span onclick=$$._edittext() class="edui-clickable">编辑</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">删除</span></nobr>');
            if (html) {
                popup.getDom('content').innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor(popup.anchorEl);
            } else {
                popup.hide();
            }
        }
    });
};

/**
 * 多行文本框
 *
 */
UE.plugins['adc_form_textarea'] = function () {
    var me = this,
        thePlugins = 'adc_form_textarea';
    me.commands[thePlugins] = {
        execCommand: function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl: this.options.UEDITOR_HOME_URL + UE.ADCFormDesignUrl + '/adc_form_textarea.html',
                name: thePlugins,
                editor: this,
                title: 'ADC表单设计器 - 多行文本框',
                cssRules: "width:600px;height:310px;",
                buttons: [{
                    className: 'edui-okbutton',
                    label: '确定',
                    onclick: function () {
                        dialog.close(true);
                    }
                },
                {
                    className: 'edui-cancelbutton',
                    label: '取消',
                    onclick: function () {
                        dialog.close(false);
                    }
                }
                ]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup({
        editor: this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
            baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
            me.execCommand(thePlugins);
            this.hide();
        },
        _delete: function () {
            if (window.confirm('确认删除该控件吗？')) {
                baidu.editor.dom.domUtils.remove(this.anchorEl, false);
            }
            this.hide();
        }
    });
    popup.render();
    me.addListener('mouseover', function (t, evt) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var adcform = el.getAttribute('adcform');
        if (/textarea/ig.test(el.tagName) && adcform == thePlugins) {
            var html = popup.formatHtml(
                '<nobr>ADC表单设计器 - 多行文本框: <span onclick=$$._edittext() class="edui-clickable">编辑</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">删除</span></nobr>');
            if (html) {
                popup.getDom('content').innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor(popup.anchorEl);
            } else {
                popup.hide();
            }
        }
    });
};

/**
 * 下拉菜单
 *
 */
UE.plugins['adc_form_select'] = function () {
    var me = this,
        thePlugins = 'adc_form_select';
    me.commands[thePlugins] = {
        execCommand: function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl: this.options.UEDITOR_HOME_URL + UE.ADCFormDesignUrl + '/adc_form_select.html',
                name: thePlugins,
                editor: this,
                title: 'ADC表单设计器 - 下拉菜单',
                cssRules: "width:600px;height:310px;",
                buttons: [{
                    className: 'edui-okbutton',
                    label: '确定',
                    onclick: function () {
                        dialog.close(true);
                    }
                },
                {
                    className: 'edui-cancelbutton',
                    label: '取消',
                    onclick: function () {
                        dialog.close(false);
                    }
                }
                ]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup({
        editor: this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
            baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
            me.execCommand(thePlugins);
            this.hide();
        },
        _delete: function () {
            if (window.confirm('确认删除该控件吗？')) {
                baidu.editor.dom.domUtils.remove(this.anchorEl, false);
            }
            this.hide();
        }
    });
    popup.render();
    me.addListener('mouseover', function (t, evt) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var adcform = el.getAttribute('adcform');
        if (/select/ig.test(el.tagName) && adcform == thePlugins) {
            var html = popup.formatHtml(
                '<nobr>ADC表单设计器 - 下拉菜单: <span onclick=$$._edittext() class="edui-clickable">编辑</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">删除</span></nobr>');
            if (html) {
                popup.getDom('content').innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor(popup.anchorEl);
            } else {
                popup.hide();
            }
        }
    });
};

/**
 * 单选框
 *
 */
UE.plugins['adc_form_radio'] = function () {
    var me = this,
        thePlugins = 'adc_form_radio';
    me.commands[thePlugins] = {
        execCommand: function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl: this.options.UEDITOR_HOME_URL + UE.ADCFormDesignUrl + '/adc_form_radio.html',
                name: thePlugins,
                editor: this,
                title: 'ADC表单设计器 - 单选框',
                cssRules: "width:600px;height:310px;",
                buttons: [{
                    className: 'edui-okbutton',
                    label: '确定',
                    onclick: function () {
                        dialog.close(true);
                    }
                },
                {
                    className: 'edui-cancelbutton',
                    label: '取消',
                    onclick: function () {
                        dialog.close(false);
                    }
                }
                ]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup({
        editor: this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
            baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
            me.execCommand(thePlugins);
            this.hide();
        },
        _delete: function () {
            if (window.confirm('确认删除该控件吗？')) {
                baidu.editor.dom.domUtils.remove(this.anchorEl, false);
            }
            this.hide();
        }
    });
    popup.render();
    me.addListener('mouseover', function (t, evt) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var adcform = el.getAttribute('adcform');
        if (/span/ig.test(el.tagName) && adcform == thePlugins) {
            var html = popup.formatHtml(
                '<nobr>ADC表单设计器 - 单选框: <span onclick=$$._edittext() class="edui-clickable">编辑</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">删除</span></nobr>');
            if (html) {
                popup.getDom('content').innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor(popup.anchorEl);
            } else {
                popup.hide();
            }
        }
    });
};

/**
 * 复选框
 *
 */
UE.plugins['adc_form_checkbox'] = function () {
    var me = this,
        thePlugins = 'adc_form_checkbox';
    me.commands[thePlugins] = {
        execCommand: function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl: this.options.UEDITOR_HOME_URL + UE.ADCFormDesignUrl + '/adc_form_checkbox.html',
                name: thePlugins,
                editor: this,
                title: 'ADC表单设计器 - 复选框',
                cssRules: "width:600px;height:310px;",
                buttons: [{
                    className: 'edui-okbutton',
                    label: '确定',
                    onclick: function () {
                        dialog.close(true);
                    }
                },
                {
                    className: 'edui-cancelbutton',
                    label: '取消',
                    onclick: function () {
                        dialog.close(false);
                    }
                }
                ]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup({
        editor: this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
            baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
            me.execCommand(thePlugins);
            this.hide();
        },
        _delete: function () {
            if (window.confirm('确认删除该控件吗？')) {
                baidu.editor.dom.domUtils.remove(this.anchorEl, false);
            }
            this.hide();
        }
    });
    popup.render();
    me.addListener('mouseover', function (t, evt) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var adcform = el.getAttribute('adcform');
        if (/span/ig.test(el.tagName) && adcform == thePlugins) {
            var html = popup.formatHtml(
                '<nobr>ADC表单设计器 - 复选框: <span onclick=$$._edittext() class="edui-clickable">编辑</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">删除</span></nobr>');
            if (html) {
                popup.getDom('content').innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor(popup.anchorEl);
            } else {
                popup.hide();
            }
        }
    });
};

/**
 * 文件上传
 *
 */
UE.plugins['adc_form_file'] = function () {
    var me = this,
        thePlugins = 'adc_form_file';
    me.commands[thePlugins] = {
        execCommand: function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl: this.options.UEDITOR_HOME_URL + UE.ADCFormDesignUrl + '/adc_form_file.html',
                name: thePlugins,
                editor: this,
                title: 'ADC表单设计器 - 文件上传',
                cssRules: "width:600px;height:310px;",
                buttons: [{
                    className: 'edui-okbutton',
                    label: '确定',
                    onclick: function () {
                        dialog.close(true);
                    }
                },
                {
                    className: 'edui-cancelbutton',
                    label: '取消',
                    onclick: function () {
                        dialog.close(false);
                    }
                }
                ]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup({
        editor: this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
            baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
            me.execCommand(thePlugins);
            this.hide();
        },
        _delete: function () {
            if (window.confirm('确认删除该控件吗？')) {
                baidu.editor.dom.domUtils.remove(this.anchorEl.parentNode, false);
            }
            this.hide();
        }
    });
    popup.render();
    me.addListener('mouseover', function (t, evt) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var adcform = el.getAttribute('adcform');
        if (/input/ig.test(el.tagName) && adcform == thePlugins) {
            var html = popup.formatHtml(
                '<nobr>ADC表单设计器 - 文件上传: <span onclick=$$._edittext() class="edui-clickable">编辑</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">删除</span></nobr>');
            if (html) {
                popup.getDom('content').innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor(popup.anchorEl);
            } else {
                popup.hide();
            }
        }
    });
};

/**
 * 日期选择
 *
 */
UE.plugins['adc_form_datetime'] = function () {
    var me = this,
        thePlugins = 'adc_form_datetime';
    me.commands[thePlugins] = {
        execCommand: function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl: this.options.UEDITOR_HOME_URL + UE.ADCFormDesignUrl + '/adc_form_datetime.html',
                name: thePlugins,
                editor: this,
                title: 'ADC表单设计器 - 日期选择',
                cssRules: "width:600px;height:310px;",
                buttons: [{
                    className: 'edui-okbutton',
                    label: '确定',
                    onclick: function () {
                        dialog.close(true);
                    }
                },
                {
                    className: 'edui-cancelbutton',
                    label: '取消',
                    onclick: function () {
                        dialog.close(false);
                    }
                }
                ]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup({
        editor: this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
            baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
            me.execCommand(thePlugins);
            this.hide();
        },
        _delete: function () {
            if (window.confirm('确认删除该控件吗？')) {
                baidu.editor.dom.domUtils.remove(this.anchorEl, false);
                var script = this.editor.document.getElementsByClassName(this.anchorEl.name + '_script');
                if (script.length > 0) {
                    baidu.editor.dom.domUtils.remove(script[0], false);
                }
            }
            this.hide();
        }
    });
    popup.render();
    me.addListener('mouseover', function (t, evt) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var adcform = el.getAttribute('adcform');
        if (/input/ig.test(el.tagName) && adcform == thePlugins) {
            var html = popup.formatHtml(
                '<nobr>ADC表单设计器 - 日期选择: <span onclick=$$._edittext() class="edui-clickable">编辑</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">删除</span></nobr>');
            if (html) {
                popup.getDom('content').innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor(popup.anchorEl);
            } else {
                popup.hide();
            }
        }
    });
};

/**
 * 组织机构选择
 *
 */
UE.plugins['adc_form_org_select'] = function () {
    var me = this,
        thePlugins = 'adc_form_org_select';
    me.commands[thePlugins] = {
        execCommand: function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl: this.options.UEDITOR_HOME_URL + UE.ADCFormDesignUrl + '/adc_form_org_select.html',
                name: thePlugins,
                editor: this,
                title: 'ADC表单设计器 - 组织机构选择',
                cssRules: "width:600px;height:310px;",
                buttons: [{
                    className: 'edui-okbutton',
                    label: '确定',
                    onclick: function () {
                        dialog.close(true);
                    }
                },
                {
                    className: 'edui-cancelbutton',
                    label: '取消',
                    onclick: function () {
                        dialog.close(false);
                    }
                }
                ]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup({
        editor: this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
            baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
            me.execCommand(thePlugins);
            this.hide();
        },
        _delete: function () {
            if (window.confirm('确认删除该控件吗？')) {
                baidu.editor.dom.domUtils.remove(this.anchorEl.parentNode, false);
                var script = this.editor.document.getElementsByClassName(this.anchorEl.name + '_script');
                if (script.length > 0) {
                    baidu.editor.dom.domUtils.remove(script[0], false);
                }
            }
            this.hide();
        }
    });
    popup.render();
    me.addListener('mouseover', function (t, evt) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var adcform = el.getAttribute('adcform');
        if (/input/ig.test(el.tagName) && adcform == thePlugins) {
            var html = popup.formatHtml(
                '<nobr>ADC表单设计器 - 组织机构选择: <span onclick=$$._edittext() class="edui-clickable">编辑</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">删除</span></nobr>');
            if (html) {
                popup.getDom('content').innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor(popup.anchorEl);
            } else {
                popup.hide();
            }
        }
    });
};

/**
 * 人员选择
 *
 */
UE.plugins['adc_form_user_select'] = function () {
    var me = this,
        thePlugins = 'adc_form_user_select';
    me.commands[thePlugins] = {
        execCommand: function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl: this.options.UEDITOR_HOME_URL + UE.ADCFormDesignUrl + '/adc_form_user_select.html',
                name: thePlugins,
                editor: this,
                title: 'ADC表单设计器 - 人员选择',
                cssRules: "width:600px;height:310px;",
                buttons: [{
                    className: 'edui-okbutton',
                    label: '确定',
                    onclick: function () {
                        dialog.close(true);
                    }
                },
                {
                    className: 'edui-cancelbutton',
                    label: '取消',
                    onclick: function () {
                        dialog.close(false);
                    }
                }
                ]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup({
        editor: this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
            baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
            me.execCommand(thePlugins);
            this.hide();
        },
        _delete: function () {
            if (window.confirm('确认删除该控件吗？')) {
                baidu.editor.dom.domUtils.remove(this.anchorEl.parentNode, false);
                var script = this.editor.document.getElementsByClassName(this.anchorEl.name + '_script');
                if (script.length > 0) {
                    baidu.editor.dom.domUtils.remove(script[0], false);
                }
            }
            this.hide();
        }
    });
    popup.render();
    me.addListener('mouseover', function (t, evt) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var adcform = el.getAttribute('adcform');
        if (/input/ig.test(el.tagName) && adcform == thePlugins) {
            var html = popup.formatHtml(
                '<nobr>ADC表单设计器 - 人员选择: <span onclick=$$._edittext() class="edui-clickable">编辑</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">删除</span></nobr>');
                if (html) {
                popup.getDom('content').innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor(popup.anchorEl);
            } else {
                popup.hide();
            }
        }
    });
};

/**
 * 表格扩展
 *
 */
UE.plugins['adc_form_expand'] = function () {
    var me = this,
        thePlugins = 'adc_form_expand';
    me.commands[thePlugins] = {
        execCommand: function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl: this.options.UEDITOR_HOME_URL + UE.ADCFormDesignUrl + '/adc_form_expand.html',
                name: thePlugins,
                editor: this,
                title: 'ADC表单设计器 - 表格扩展',
                cssRules: "width:600px;height:310px;",
                buttons: [{
                    className: 'edui-okbutton',
                    label: '确定',
                    onclick: function () {
                        dialog.close(true);
                    }
                },
                {
                    className: 'edui-cancelbutton',
                    label: '取消',
                    onclick: function () {
                        dialog.close(false);
                    }
                }
                ]
            });
            dialog.render();
            dialog.open();
        }
    };
};
/** 
 * 列表控件
 */
UE.plugins['adc_form_listctrl'] = function () {
    var me = this,
        thePlugins = 'adc_form_listctrl';
    me.commands[thePlugins] = {
        execCommand:function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl: this.options.UEDITOR_HOME_URL + UE.ADCFormDesignUrl + '/adc_form_listctrl.html',
                name:thePlugins,
                editor:this,
                title: 'ADC表单设计器 - 列表控件',
                cssRules:"width:1300px;height:540px;",
                buttons:[
                {
                    className:'edui-okbutton',
                    label:'确定',
                    onclick:function () {
                        dialog.close(true);
                    }
                },
                {
                    className:'edui-cancelbutton',
                    label:'取消',
                    onclick:function () {
                        dialog.close(false);
                    }
                }]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup( {
        editor:this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
              baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
              me.execCommand(thePlugins);
              this.hide();
        },
        _delete:function(){
            if( window.confirm('确认删除该控件吗？') ) {
                baidu.editor.dom.domUtils.remove(this.anchorEl,false);
                var script = this.editor.document.getElementsByClassName(this.anchorEl.name + '_script');
                if (script.length > 0) {
                    baidu.editor.dom.domUtils.remove(script[0], false);
                }
            }
            this.hide();
        }
    } );
    popup.render();
    me.addListener( 'mouseover', function( t, evt ) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var adcform = el.getAttribute('adcform');
        if ( /t/ig.test( el.tagName ) && adcform == thePlugins) {
            var html = popup.formatHtml(
                '<nobr>ADC表单设计器 - 列表控件: <span onclick=$$._edittext() class="edui-clickable">编辑</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">删除</span></nobr>' );
                if ( html ) {
                popup.getDom( 'content' ).innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor( popup.anchorEl );
            } else {
                popup.hide();
            }
        }
    });
};
/**
 * ADC表单设计器 - 控件列表
 *
 */
UE.plugins['adc_form_design'] = function () {
    var me = this,
        thePlugins = 'adc_form_design';
    me.commands[thePlugins] = {
        execCommand: function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl: this.options.UEDITOR_HOME_URL + UE.ADCFormDesignUrl + '/adcformdesign.html',
                name: thePlugins,
                editor: this,
                title: 'ADC表单设计器 - 控件列表',
                cssRules: "width:620px;height:260px;",
                buttons: [{
                    className: 'edui-okbutton',
                    label: '确定',
                    onclick: function () {
                        dialog.close(true);
                    }
                }]
            });
            dialog.render();
            dialog.open();
        }
    };
};

UE.plugins['adc_form_design_template'] = function () {
    var me = this,
        thePlugins = 'adc_form_design_template';
    me.commands[thePlugins] = {
        execCommand: function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl: this.options.UEDITOR_HOME_URL + UE.ADCFormDesignUrl + '/adcformdesign_template.html',
                name: thePlugins,
                editor: this,
                title: 'ADC表单设计器 - 模板',
                cssRules: "width:640px;height:380px;",
                buttons: [{
                    className: 'edui-okbutton',
                    label: '确定',
                    onclick: function () {
                        dialog.close(true);
                    }
                }]
            });
            dialog.render();
            dialog.open();
        }
    };
};

UE.plugins['error'] = function () {
    var me = this,
        thePlugins = 'error';
    me.commands[thePlugins] = {
        execCommand: function () {
            alert('发生错误！请刷新重试');
        }
    };
};
/**
 * 项目列表
 *
 */
UE.plugins['adc_form_project_list'] = function () {
    var me = this,
        thePlugins = 'adc_form_project_list';
    me.commands[thePlugins] = {
        execCommand: function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl: this.options.UEDITOR_HOME_URL + UE.ADCFormDesignUrl + '/adc_form_project_list.html',
                name: thePlugins,
                editor: this,
                title: 'ADC表单设计器 - 项目列表',
                cssRules: "width:600px;height:310px;",
                buttons: [{
                    className: 'edui-okbutton',
                    label: '确定',
                    onclick: function () {
                        dialog.close(true);
                    }
                },
                    {
                        className: 'edui-cancelbutton',
                        label: '取消',
                        onclick: function () {
                            dialog.close(false);
                        }
                    }
                ]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup({
        editor: this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
            baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
            me.execCommand(thePlugins);
            this.hide();
        },
        _delete: function () {
            if (window.confirm('确认删除该控件吗？')) {
                baidu.editor.dom.domUtils.remove(this.anchorEl.parentNode, false);
                var script = this.editor.document.getElementsByClassName(this.anchorEl.name + '_script');
                if (script.length > 0) {
                    baidu.editor.dom.domUtils.remove(script[0], false);
                }
            }
            this.hide();
        }
    });
    popup.render();
    me.addListener('mouseover', function (t, evt) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var adcform = el.getAttribute('adcform');
        if (/input/ig.test(el.tagName) && adcform == thePlugins) {
            var html = popup.formatHtml(
                '<nobr>ADC表单设计器 - 项目列表: <span onclick=$$._edittext() class="edui-clickable">编辑</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">删除</span></nobr>');
            if (html) {
                popup.getDom('content').innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor(popup.anchorEl);
            } else {
                popup.hide();
            }
        }
    });
};
/**
 * 业务列表
 *
 */
UE.plugins['adc_form_business_list'] = function () {
    var me = this,
        thePlugins = 'adc_form_business_list';
    me.commands[thePlugins] = {
        execCommand: function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl: this.options.UEDITOR_HOME_URL + UE.ADCFormDesignUrl + '/adc_form_business_list.html',
                name: thePlugins,
                editor: this,
                title: 'ADC表单设计器 - 科研列表',
                cssRules: "width:600px;height:310px;",
                buttons: [{
                    className: 'edui-okbutton',
                    label: '确定',
                    onclick: function () {
                        dialog.close(true);
                    }
                },
                    {
                        className: 'edui-cancelbutton',
                        label: '取消',
                        onclick: function () {
                            dialog.close(false);
                        }
                    }
                ]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup({
        editor: this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
            baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
            me.execCommand(thePlugins);
            this.hide();
        },
        _delete: function () {
            if (window.confirm('确认删除该控件吗？')) {
                baidu.editor.dom.domUtils.remove(this.anchorEl.parentNode, false);
                var script = this.editor.document.getElementsByClassName(this.anchorEl.name + '_script');
                if (script.length > 0) {
                    baidu.editor.dom.domUtils.remove(script[0], false);
                }
            }
            this.hide();
        }
    });
    popup.render();
    me.addListener('mouseover', function (t, evt) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var adcform = el.getAttribute('adcform');
        if (/input/ig.test(el.tagName) && adcform == thePlugins) {
            var html = popup.formatHtml(
                '<nobr>ADC表单设计器 - 科研列表: <span onclick=$$._edittext() class="edui-clickable">编辑</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">删除</span></nobr>');
            if (html) {
                popup.getDom('content').innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor(popup.anchorEl);
            } else {
                popup.hide();
            }
        }
    });
};
/**
 * 经营类审批单业务下拉框
 *
 */
UE.plugins['adc_form_business_select'] = function () {
    var me = this,
        thePlugins = 'adc_form_business_select';
    me.commands[thePlugins] = {
        execCommand: function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl: this.options.UEDITOR_HOME_URL + UE.ADCFormDesignUrl + '/adc_form_business_select.html',
                name: thePlugins,
                editor: this,
                title: 'ADC表单设计器 - 业务列表',
                cssRules: "width:600px;height:310px;",
                buttons: [{
                    className: 'edui-okbutton',
                    label: '确定',
                    onclick: function () {
                        dialog.close(true);
                    }
                },
                    {
                        className: 'edui-cancelbutton',
                        label: '取消',
                        onclick: function () {
                            dialog.close(false);
                        }
                    }
                ]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup({
        editor: this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
            baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
            me.execCommand(thePlugins);
            this.hide();
        },
        _delete: function () {
            if (window.confirm('确认删除该控件吗？')) {
                baidu.editor.dom.domUtils.remove(this.anchorEl.parentNode, false);
                var script = this.editor.document.getElementsByClassName(this.anchorEl.name + '_script');
                if (script.length > 0) {
                    baidu.editor.dom.domUtils.remove(script[0], false);
                }
            }
            this.hide();
        }
    });
    popup.render();
    me.addListener('mouseover', function (t, evt) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var adcform = el.getAttribute('adcform');
        if (/input/ig.test(el.tagName) && adcform == thePlugins) {
            var html = popup.formatHtml(
                '<nobr>ADC表单设计器 - 业务列表: <span onclick=$$._edittext() class="edui-clickable">编辑</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">删除</span></nobr>');
            if (html) {
                popup.getDom('content').innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor(popup.anchorEl);
            } else {
                popup.hide();
            }
        }
    });
};
UE.plugins['adc_form_bar_canvas'] = function () {
    var me = this,
        thePlugins = 'adc_form_bar_canvas';
    me.commands[thePlugins] = {
        execCommand: function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl: this.options.UEDITOR_HOME_URL + UE.ADCFormDesignUrl + '/adc_form_bar_canvas.html',
                name: thePlugins,
                editor: this,
                title: 'ADC表单设计器 - 柱状图',
                cssRules: "width:600px;height:310px;",
                buttons: [{
                    className: 'edui-okbutton',
                    label: '确定',
                    onclick: function () {
                        dialog.close(true);
                    }
                },
                    {
                        className: 'edui-cancelbutton',
                        label: '取消',
                        onclick: function () {
                            dialog.close(false);
                        }
                    }
                ]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup({
        editor: this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
            baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
            me.execCommand(thePlugins);
            this.hide();
        },
        _delete: function () {
            if (window.confirm('确认删除该控件吗？')) {
                baidu.editor.dom.domUtils.remove(this.anchorEl.parentNode, false);
                var script = this.editor.document.getElementsByClassName(this.anchorEl.name + '_script');
                if (script.length > 0) {
                    baidu.editor.dom.domUtils.remove(script[0], false);
                }
            }
            this.hide();
        }
    });
    popup.render();
    me.addListener('mouseover', function (t, evt) {

        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        if((/img/ig.test(el.tagName))||(/div/ig.test(el.tagName))){
            el =el.parentElement;
        }
        var adcform = el.getAttribute('adcform');
        if ((/img/ig.test(el.tagName))||(/div/ig.test(el.tagName)) && adcform == thePlugins) {
            var html = popup.formatHtml(
                '<nobr>ADC表单设计器 - 柱状图: <span onclick=$$._edittext() class="edui-clickable">编辑</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">删除</span></nobr>');
            if (html) {
                popup.getDom('content').innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor(popup.anchorEl);
            } else {
                popup.hide();
            }
        }
    });
};
// 在 UE 中注册按钮
UE.registerUI('button_adc_form_design', function (editor, uiName) {
    if (!this.options.adcformdesign) {
        return false;
    }
    //注册按钮执行时的command命令，使用命令默认就会带有回退操作
    editor.registerCommand(uiName, {
        execCommand: function () {
            editor.execCommand('adc_form_design');
        }
    });
    //创建一个button
    var btn = new UE.ui.Button({
        //按钮的名字
        name: uiName,
        //提示
        title: "ADC表单设计器",
        //需要添加的额外样式，指定icon图标，这里默认使用一个重复的icon
        cssRules: 'background-position: -401px -40px;',
        //点击时执行的命令
        onclick: function () {
            //这里可以不用执行命令,做你自己的操作也可
            editor.execCommand(uiName);
        }
    });
    //因为你是添加button,所以需要返回这个button
    return btn;
});

UE.registerUI('button_adc_form_preview', function (editor, uiName) {
    if (!this.options.adcformdesign) {
        return false;
    }
    //注册按钮执行时的command命令，使用命令默认就会带有回退操作
    editor.registerCommand(uiName, {
        execCommand: function () {
            try {
                ADCFormDesignHelper.Preview(editor);
            } catch (e) {
                console.log(e);
                alert('ADCFormDesign 预览异常，请在控制台查看错误');
            }
        }
    });
    //创建一个button
    var btn = new UE.ui.Button({
        //按钮的名字
        name: uiName,
        //提示
        title: "ADC表单预览",
        //需要添加的额外样式，指定icon图标，这里默认使用一个重复的icon
        cssRules: 'background-position: -420px -19px;',
        //点击时执行的命令
        onclick: function () {
            //这里可以不用执行命令,做你自己的操作也可
            editor.execCommand(uiName);
        }
    });

    //因为你是添加button,所以需要返回这个button
    return btn;
});

UE.registerUI('button_adc_form_template', function (editor, uiName) {
    if (!this.options.adcformdesign) {
        return false;
    }
    //注册按钮执行时的command命令，使用命令默认就会带有回退操作
    editor.registerCommand(uiName, {
        execCommand: function () {
            editor.execCommand('adc_form_design_template');
        }
    });
    //创建一个button
    var btn = new UE.ui.Button({
        //按钮的名字
        name: uiName,
        //提示
        title: "ADC表单设计器 - 模板",
        //需要添加的额外样式，指定icon图标，这里默认使用一个重复的icon
        cssRules: 'background-position: -339px -40px;',
        //点击时执行的命令
        onclick: function () {
            //这里可以不用执行命令,做你自己的操作也可
            editor.execCommand(uiName);
        }
    });
    //因为你是添加button,所以需要返回这个button
    return btn;
});

UE.registerUI('button_adc_form_expand', function (editor, uiName) {
    if (!this.options.adcformdesign) {
        return false;
    }
    //注册按钮执行时的command命令，使用命令默认就会带有回退操作
    editor.registerCommand(uiName, {
        execCommand: function () {
            editor.execCommand('adc_form_expand');
        }
    });
    //创建一个button
    var btn = new UE.ui.Button({
        //按钮的名字
        name: uiName,
        //提示
        title: "ADC表单设计器 - 表格扩展",
        //需要添加的额外样式，指定icon图标，这里默认使用一个重复的icon
        cssRules: 'background-position: -52px -100px;',
        //点击时执行的命令
        onclick: function () {
            //这里可以不用执行命令,做你自己的操作也可
            editor.execCommand(uiName);
        }
    });
    //因为你是添加button,所以需要返回这个button
    return btn;
});

