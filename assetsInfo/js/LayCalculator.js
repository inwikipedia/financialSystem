var LayCalculator = (function(){
	function calc(obj,exp,res){
		var reg=/\{[a-z,A-Z,0-9]+\}/g;//匹配被大括号包裹的列名
		var vs = exp.match(reg);//获取变量名的集合，带有大括号,有重复
		 
		var tr = obj.tr;
		setTimeout(function(){
			for( var i in vs ){
				var name = vs[i];
				var col = name.substring(1,name.length-1);
				var value = tr.children('td[data-field='+col+']').children('div').html();
                value = value == '' ? 0 : value;
				exp = exp.replace(name,value);
			}
			var r = eval(exp);
			tr.children('td[data-field='+res+']').children('div').html(r);
		},100);
	}
	return {
		calc:calc
	}
})();