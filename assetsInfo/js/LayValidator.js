
/**
	依赖layui2.4 + jquery
	使用说明：LayValidator 为 Layui 的表格编辑提供数据校验
	
	调用说明：
		LayValidator.init(option); 
			即可监听单元格数据变化，完成编辑时若不合法，弹出提示，字体变红
		LayValidator.validate(index); 
			在保存数据时调用，判断index行的数据合法性，全部合法返回true；
			有错误数据弹出提示，返回false；
	参数说明：
		LayValidator.init(
			{
				filter:'xxx', 	//与待校验table元素的lay-filter属性对应
				cols:[			//需要校验的列设置
					{
						field:'xxx', //必填，列名
						type:'xxx',		//非必填，输入类型限制，支持：integer，float（整数+小数），float2（小数点后两位）
						maxLength: 10,  //非必填，限制输入长度
						notEmpty: true, //非必填，限制不为空
					}
					//some other cols..
				],
				success: function(obj){ //do sth }, 	//单元格校验成功的回调函数，非必要，obj为on edit事件产生
				error: function(obj){ //do sth },		//单元格校验失败的回调函数，非必要，obj为on edit事件产生
				final: function(obj){ },				//无论校验失败与否，都回调，非必要
			}
		);
**/



var LayValidator = (function(){
	var tables = {
	
	}


	//可判断的类型和判断逻辑
	var typeFunctions = {
		'integer':
			function(txt){
				var patt = /^[0-9]*$/;
				return patt.test(txt);
			},
		'float':
			function(txt){
				var patt = /^(\-|\+)?\d+(\.\d+)?$/;
				return patt.test(txt);
			},
		'float2':
			function(txt){
				var patt = /^(\-)?\d+(\.\d{1,2})?$/;
				return patt.test(txt);
			}
	}
	//弹出错误提示
	function showTip(msg,elem){
		layui.layer.tips(msg,elem,{tips:3,time:1000,tipsMore:true});
	}
	//设置错误单元格的样式
	function setErrStyle(elem){
		elem.addClass('validator-err');
	}
	//类型错误的动作
	function showTypeErr( rule, elem ){
		setErrStyle(elem);
		var msg = '';
		switch(rule.type){
			case 'integer': msg = "必须为整数！"; break;
			case 'float': msg = "必须为数字！"; break;
			case 'float2': msg = "格式为数字，最多两位小数！"; break;
		}
		showTip(msg,elem);
	}
	
	function checkCell(obj,rule){
		//获取当前表格的规则
		if(!rule) return true;
		
		//获取当前编辑的数据
		var index = obj.tr.attr('data-index');
		var td = obj.tr.children('td[data-field='+obj.field+']');
		var preDiv = td.children('div');
		var input = td.children('input');
		var value = obj.value;
		var valueNotEmpty = true;
		if( value===null || value==='' || value === undefined ) valueNotEmpty = false;
		//对各个规则进行校验
		var res = false;
		//1，不为空,错误时恢复原来的值
		if( rule.notEmpty ){
			if( value === '' || value === null ){
				var preValue = preDiv.html();
				showTip("不能为空",preDiv);
				setTimeout(function(){ //恢复原来的值
					preDiv.html(preValue);
				},80);
				return false;
			}
		}
		//2，type 
		if( valueNotEmpty && rule.type && typeof typeFunctions[rule.type] == 'function'){
			if(!typeFunctions[rule.type](value)){
				showTypeErr(rule,preDiv);
				return false;
			}
		}
		//3，length
		if( valueNotEmpty && rule.hasOwnProperty("maxLength") ){
			if( new String(value).length>rule.maxLength ){
				showTip("长度不能大于"+rule.maxLength,preDiv);
				setErrStyle(preDiv);
				return false;
			}
		}
		preDiv.removeClass('validator-err');
		return true;
		
	}
	
	//初始化输入检查组件，监听输入
	function init(opt){
		if(!opt.hasOwnProperty('filter')){
			layui.layer.msg("validator未找到filter！");
			return;
		}
		tables[opt.filter] = {
			opt:opt
		}
		layui.table.on('edit('+opt.filter+')', function(obj){ 
			var rule = null;
			for(var i in opt.cols){
				if(opt.cols[i].field==obj.field){
					rule = opt.cols[i];
					break;
				}
			}
			if(checkCell(obj,rule)){//校验成功的回调函数
				if(typeof opt.success == 'function') opt.success(obj);
			}else{
				if(typeof opt.error == 'function') opt.error(obj);
			}
			if( typeof opt.final=='function' ) opt.final(obj);
		});
	}
	
	function validate(index,filter){
		var res = true;
		if(!filter)
			for(var j in tables){
				filter = j;
				break;
			}
		var tb = $('table[lay-filter='+filter+']+div');
		var tr = tb.find('tr[data-index='+index+']');
		var opt = tables[filter].opt;
		for(var i in opt.cols){
			var rule = opt.cols[i];
			var td = tr.children('td[data-field='+rule.field+']');
			var value = td.children('div').html();
			var obj = {
				tr: tr,
				field: rule.field,
				value: value
			}
			if(!checkCell(obj,rule)){
				res = false;
			}
		}
		return res;
	}
	
	return {
		init: init,
		validate: validate
	}
})();
		