     // 编写一个函数，供添加按钮调用，动态在表格的最后一行添加子节点；
     function addLine(obj,data) { //传入一个this对象

        //  /* 通过this获取节点   新增表格行   动态创建多个表格时使用*/
        //  var table = obj.parentNode.parentNode.parentNode.parentNode.parentNode; //obj为函数调用节点的this，使用.parentNode找到需要的父节点
        //  var lastLine = table.lastChild;
        //  //拿出第2行的HTML代码   
        //  var lastcode = table.rows[1].innerHTML;
        //  var newcd = lastcode.toString();
        //  //创建一行
        //  var newnode = document.createElement('tr');
        //  //设置新建行的HTML代码
        //  newnode.innerHTML = newcd + "<i class='layui-icon layui-icon-delete' style='font-size: 30px; margin-right:-50px' href='javascript:;' onclick='removeLine(this)'></i>";
        //  //将该行添加到表格最后
         
        //  lastLine.appendChild(newnode); 


         //  var table = name.toString();
         //  var lastLine = document.getElementById('table').lastChild;
         //  var lastcode = document.getElementById('table').rows[2].cells; 
         // var newcode = "";
         // for(i=0;i<lastcode.length-1;i++){        
         //     newcode += lastcode[i].outerHTML.toString();
         // }
         //  var newnode = document.createElement('tr');        
         //  newnode.innerHTML = newcode + "<td><a href='javascript:;' onclick='removeLine(this)'>删除</a></td>";           
         //  lastLine.appendChild(newnode);          

         /* 只有一个表格时可用，通过getElementById获取节点，在节点上新增行 */
         //  var table = name.toString();
         //  var lastLine = document.getElementById('table').lastChild;
         //  var lastcode = document.getElementById('table').rows[1].innerHTML;
         //  alert(lastLine);
         //  var newcd = lastcode.toString();
         //  var newnode = document.createElement('tr');
         //  newnode.innerHTML = newcd + "<i class='layui-icon layui-icon-delete' style='font-size: 30px; margin-right:-50px' href='javascript:;' onclick='removeLine(this)'></i>";
         //  lastLine.appendChild(newnode);


         //obj为函数调用节点的this，使用.parentNode找到需要的父节点
         var table = obj.parentNode.parentNode.parentNode.parentNode.parentNode; 
         //  var lastLine = table.lastChild;
         //定义一个变量存储当前的（行数-1）
         var j = table.rows.length;
         var needline = table.rows[j-1];
         if(needline.getAttribute('name') == 'remark'){
             j--;
         }
         //存储不同表格的ID
         var tableid = table.getAttribute('tableid');
         //判断合计的行数
         var x =$("table[tableid='"+tableid+"'] tr[name='sum']").length;
        j=j-x;
         //找到第二行的<tr></tr>节点 
         var account = "";
         var targetline = table.rows[1];
         //定义一个字符串用来存储HTML代码
         var newcode = "";
         //定义存储第一行的校验规则
         var strr = new Array();
         //存储第一行的权限设定
         var strr1 = new Array();
         var strr2 = new Array();
         var strr3 = new Array();
         for(var i = 0;i<targetline.children.length;i++){
            strr[i] = targetline.children[i].children[0].getAttribute('lay-verify');
            //判断input是否有disabled属性，如果没有则在strr1数组的对应位加上disabled字符串
            strr1[i] = targetline.children[i].children[0].getAttribute('disabled');
            if(strr1[i] != null){
                strr1[i] += 'disabled';
            }
            strr2[i] = targetline.children[i].getAttribute('style');
            strr3[i] = targetline.children[i].children[0].getAttribute('maxlength');
         }
         //循环遍历第二行的<td></td>标签，通过设置的name属性来判断类型，将HTML代码写到newcode中
         var dateTime=Date.now().toString(36);
         for(i = 0;i<targetline.children.length;i++){
            if(targetline.children[i].getAttribute('name') == 'datetime'){
                //如果判断是datetime，则插入一个id由行列编号组成的input标签
               newcode += "<td name='datetime' style='"+ strr2[i] +"'>" + "<input name = 'datetime_" + j + "_"+ i + "_listctrl_"+ dateTime+ "_" + tableid +"'id = 'date_" + i + j + tableid + "'class = 'layui-input" +"'  maxlength='"+strr3[i]+"'>" + "</td>";
               //将所有i当成字符串组合起来
               account += i + '`';
            }
            else if(targetline.children[i].getAttribute('name') == 'input'){
                //为新增的input设置name属性
                if(!data){
                    newcode += "<td name='input' style='"+ strr2[i] +"'>" + "<input  name = 'input_" + j + "_" + i + "_listctrl_" + dateTime+ "_" + tableid + "'class='layui-input'" + "' onblur = 'checkstr(this)'" + strr1[i] +" lay-verify = '" + strr[i] +"'  maxlength='"+strr3[i]+"'></td>";
                }else{
                    if(i==0){
                        newcode += "<td name='input' style='"+ strr2[i] +"'>" + "<input disabled value='"+j+"' name = 'input_" + j + "_" + i + "_listctrl_" + dateTime+ "_" + tableid + "'class='layui-input'" + "' onblur = 'checkstr(this)'" + strr1[i] +" lay-verify = '" + strr[i] +"'  maxlength='"+strr3[i]+"'></td>";
                    }else if(i==1){
                        newcode += "<td name='input' style='"+ strr2[i] +"'>" + "<input disabled value='"+(data.userName?data.userName:'')+"' name = 'input_" + j + "_" + i + "_listctrl_" + dateTime+ "_" + tableid + "'class='layui-input'" + "' onblur = 'checkstr(this)'" + strr1[i] +" lay-verify = '" + strr[i] +"'  maxlength='"+strr3[i]+"'></td>";
                    }else if(i==2){
                        newcode += "<td name='input' style='"+ strr2[i] +"'>" + "<input disabled value='"+(data.workLevel?data.workLevel:'')+"' name = 'input_" + j + "_" + i + "_listctrl_" + dateTime+ "_" + tableid + "'class='layui-input'" + "' onblur = 'checkstr(this)'" + strr1[i] +" lay-verify = '" + strr[i] +"'  maxlength='"+strr3[i]+"'></td>";
                    }
                }
            }
            else if(targetline.children[i].getAttribute('name') == 'textarea'){
                newcode +=  "<td name='textarea' style='"+ strr2[i] +"'>" + "<textarea name = 'textarea_" + j + "_" + i + "_listctrl_" + dateTime+ "_" + tableid + "'class='layui-textarea" +"'></textarea>" + "</td>";
            }
            else if(targetline.children[i].getAttribute('name') == 'select'){
                var oparr = targetline.children[i].children[0].innerHTML.toString();
                newcode +=  "<td name='select' style='"+ strr2[i] +"'>" + "<select name = 'select_" + j + "_" + i + "_listctrl_" + dateTime+ "_" + tableid + "'>" + oparr + "</select>" +"</td>";
            }
            else if(targetline.children[i].getAttribute('name') == 'inputuserselect'){
                newcode += "<td name='inputuserselect' style='"+ strr2[i] +"'>" + "<input " + "name = 'inputuserselect_" + j + "_" + i + "_listctrl_" + dateTime+ "_" + tableid + "'" + "onclick='javascript:userlistctrlselect(this)' value='" + userData + "' class='layui-input' readonly='readonly' style='position: relative;'>" + "<em class='layui-icon layui-icon-username' style='position: absolute; top: 50%; right: 20px; font-size: 20px; width: 20px; height: 20px; margin-top: -10px;'></em></td>";
            }
            else if(targetline.children[i].getAttribute('name') == 'inputorgselect'){
                newcode += "<td name='inputorgselect' style='"+ strr2[i] +"'>" + "<input " + "name = 'inputorgselect_" + j + "_" + i + "_listctrl_" + dateTime+ "_" + tableid + "'" + "onclick='javascript:orglistctrlselect(this)' value='" + orgData + "' class='layui-input' readonly='readonly' style='position: relative;'>" + "<em class='layui-icon layui-icon-website' style='position: absolute; top: 50%; right: 20px; font-size: 20px; width: 20px; height: 20px; margin-top: -10px;'></em></td>";
            }
            else if(targetline.children[i].getAttribute('name') == 'int'){
                newcode += "<td name = 'int' style='"+ strr2[i] +"'>" + "<input name = 'int_" + j + "_" + i + "_listctrl_" + dateTime+ "_" + tableid + "' value = '' maxlength='"+strr3[i]+"' onkeyup = 'replaceit(this)' class='layui-input'>" + "</td>";
            }
            else{
                if(!data){
                    newcode += "<td name = '" + i +"' style='"+ strr2[i] +"'>" + "<input name = 'sum_" + j + "_" + i + "_listctrl_" + dateTime+ "_" + tableid + "' value = '' onblur='javascript:numbersum(this)'  onkeyup = 'replaceit(this)' class='layui-input' maxlength='"+strr3[i]+"'>" + "</td>";
                }else{
                    if(i==3){
                        newcode += "<td name = '" + i +"' style='"+ strr2[i] +"'>" + "<input disabled value='"+(data.workTime?data.workTime:'0')+"' name = 'sum_" + j + "_" + i + "_listctrl_" + dateTime+ "_" + tableid + "' value = '' onblur='javascript:numbersum(this)'  onkeyup = 'replaceit(this)' class='layui-input' maxlength='"+strr3[i]+"'>" + "</td>";
                    }else{
                        newcode += "<td name = '" + i +"' style='"+ strr2[i] +"'>" + "<input name = 'sum_" + j + "_" + i + "_listctrl_" + dateTime+ "_" + tableid + "' value = '' onblur='javascript:numbersum(this)'  onkeyup = 'replaceit(this)' class='layui-input' maxlength='"+strr3[i]+"'>" + "</td>";
                    }
                }
            }
         }
         //创建一行
         var newnode = document.createElement('tr');
         //新建行添加HTML代码
         newnode.innerHTML = newcode + "<i class='layui-icon layui-icon-delete' style='font-size: 30px; margin-right:-50px;cursor:pointer' href='javascript:;' onclick='deltableNum(this),removeLine(this)'></i>";
         //如果有合计，则将加工好的字符串插入表格倒数第二行
         if(needline.getAttribute('name') == 'sum'){
             var newtr = table.insertRow(j);
             if(data){
                 newtr.innerHTML = newcode;
             }else{
                 newtr.innerHTML = newcode + "<i class='layui-icon layui-icon-delete' style='font-size: 30px; margin-right:-50px;cursor:pointer' href='javascript:;' onclick='deltableNum(this),removeLine(this)'></i>";
             }
         //如果没有合计，则将新建好的行插入表格最后一行
        }else if( needline.getAttribute('name') == 'remark'){
             var newtr1 = table.insertRow(j);
             newtr1.innerHTML = newcode + "<i class='layui-icon layui-icon-delete' style='font-size: 30px; margin-right:-50px;cursor:pointer' href='javascript:;' onclick='deltableNum(this),removeLine(this)'></i>";
         }else if(needline.getAttribute('name') == null){
            var newtr2 = table.insertRow(j);
            newtr2.innerHTML = newcode + "<i class='layui-icon layui-icon-delete' style='font-size: 30px; margin-right:-50px;cursor:pointer' href='javascript:;' onclick='deltableNum(this),removeLine(this)'></i>";
         }
         
         //删掉最后一个 ` 符号
         account = account.substr(0,account.length-1);
         //将字符串以 ` 符号为分界分成数组
         account = account.split("`");
         //使用数组内存储的数据找到对应的id
         for(k = 0;k < account.length;k++){
            layui.laydate.render({
                elem: "#date_" + account[k] + j + tableid,
                range:$("#sicStartTable").length!=0?true:false
                });
         }
         var tableStr =table.getAttribute('id');
         //解决table嵌套table时少1像素问题
         if($('#sicTable').length!=0){
             $('#sicTable').css('width','calc(100% + 2px)');
         }
         if($('#sicStartTable').length!=0){
             $('#sicStartTable').css('width','calc(100% + 2px)');
         }
         var serialArr= ["rgTable","cgTable","xzTable","qtTable"];
         //注值序号
         for(var y =0;y<serialArr.length;y++){
             if($('#'+serialArr[y]).length!=0&&tableStr==serialArr[y]){
                 for (var t = 1; t <$('#'+serialArr[y] +" tr").length ; t++) {
                     $('#'+serialArr[y] +" tr")[t].children[0].children[0].value=t;
                 }
             }
         }
         //渲染复制的select下拉框
         layui.form.render();
     }
     // 创建删除函数
     function removeLine(obj) {
         var tableStr =obj.parentNode.parentNode.parentNode.getAttribute('id');
         var table = obj.parentNode.parentNode;
         table.removeChild(obj.parentNode);

         //更新name
         var j = table.rows.length
         if(table.rows[j-1].getAttribute('name') == 'sum'){
             for(var j = 2;j < table.rows.length-1;j++){
                 for(i = 0; i <table.rows[j].children.length-1; i++){
                     var name = table.rows[j].children[i].children[0].getAttribute('name')
                     if(name){
                         var nameArr = name.split('_')
                         nameArr[1] = j;
                         nameArr[2] = i;
                         var newName = nameArr.join('_')
                         table.rows[j].children[i].children[0].setAttribute('name', newName)
                     }
                 }
             }
         }else{
             for(var j = 2;j < table.rows.length;j++){
                 for(i = 0; i <table.rows[j].children.length-1; i++){
                     var name = (table.rows[j]).children[i].children[0].getAttribute('name');
                     var nameArr = name.split('_')
                     nameArr[1] = j;
                     nameArr[2] = i;
                     var newName = nameArr.join('_')
                     table.rows[j].children[i].children[0].setAttribute('name', newName)
                 }
             }
         }
         if($('#sicTable').length!=0){
             for (var i = 1; i <$("#sicTable tr").length ; i++) {
                 $("#sicTable tr")[i].children[0].children[0].value=i;
             }
         }
         if($('#sicStartTable').length!=0){
             for (var i = 1; i <$("#sicStartTable tr").length ; i++) {
                 $("#sicStartTable tr")[i].children[0].children[0].value=i;
             }
         }
         var serialArr= ["rgTable","cgTable","xzTable","qtTable"];
         //注值序号
         for(var y =0;y<serialArr.length;y++){
             if($('#'+serialArr[y]).length!=0&&tableStr==serialArr[y]){
                 for (var t = 1; t <$('#'+serialArr[y] +" tr").length ; t++) {
                     $('#'+serialArr[y] +" tr")[t].children[0].children[0].value=t;
                 }
             }
         }
     }
     //人员选择
     function userlistctrlselect(obj) { 
        var data = {data: []};
        var that = obj;
        var dataUsid = "",
        dataUsid = that.dataset.usid,
            dataUsname = that.dataset.usname;
        if (dataUsid && dataUsname) {
            dataUsid = dataUsid.split(","),
            dataUsname = dataUsname.split(",");
            for (var i = 0; i < dataUsid.length; i++) {
                data.data.push({
                    id: dataUsid[i],
                    name: dataUsname[i]
                });
            }
        }
        function callback (res) {
            if (res.length > 0) {
                var ids = [], names = [];
                for (var i = 0; i < res.length; i++) {
                    ids.push(res[i].id);
                    names.push(res[i].name);
                }
                that.dataset.usid = ids.join(",");
                that.dataset.usname = names.join(",");
                that.value = names.join(",");
            } else {
                that.dataset.usid = "";
                that.dataset.usname = "";
                that.value = "";
            }
        }
        ADCFormDesignHelper.personnelSelect(data, callback);
      }
      //组织机构选择
     function orglistctrlselect(obj) {
        var that = obj;
        function callback (res) {
            if (res.id && res.name) {
                that.dataset.id = res.id;
                that.dataset.name = res.name;
                that.value = res.name;
            }
        }
        ADCFormDesignHelper.orgsSelect(callback);
      }
      //将当前登陆人员的组织机构填入进去
      var orgData = (function () {
          var tmp = $('[adcform="adc_form_listctrl"]').find('[name="inputorgselect"]');
          var account = layui.config.getAccount();
          var org = account.orgs;
          for(var i = 0;i < tmp.length;i++){
              var that = tmp[i].children[0];
              that.value = org[0].name;
              that.dataset.name = org[0].name;
              that.dataset.id = org[0].id;
          }
          if(org.length!=0){
              return org[0].name;
          }
       })();
      //将当前登陆人员填入进去
      var userData = (function () { 
          var tmp = $('[adcform="adc_form_listctrl"]').find('[name="inputuserselect"]');
          var account = layui.config.getAccount();
          for(var i =0;i < tmp.length;i++){
              var that = tmp[i].children[0];
              that.value = account.usname;
              that.dataset.usname = account.usname;
              that.dataset.usid = account.usid;
          }
          return account.usname;
       })();
      //格式校验，如果需要特定的格式，可以修改该函数
      function check(obj) { 
        var re = /^\d+(?=\.{0,1}\d+$|$)/ 
        if (obj.value != "") { 
            if (!re.test(obj.value)) { 
                alert("请输入正确的数字"); 
                obj.value = ""; 
                obj.focus(); 
            }
        } 
    }
    //控制input只能输入数字
      function replaceit(obj) { 
        obj.value=obj.value.replace(/[^0-9.]/g,'');
     }
     //控制input只能输入非负整数
      function replaceNonNegative(obj) {
        obj.value=obj.value.replace(/[^\d]/g,'');
     }
     //控制input只能输入正数
      function replacePositiveIntegerOrDecimal(obj) {
        obj.value=obj.value.replace(/^\d+(\.?|(\.\d+)?)$/,'');
      }
      // function aaaa(obj) {
      //     obj.value=obj.value.replace(/^(\.+)|(\d+\.+)|(\.+\d+)$/,'');
      // }

     //合计的相加函数
     function numbersum(obj) {
        //找到table节点
        var table = obj.parentNode.parentNode.parentNode.parentNode;
        //获取table行数存到 j 中
        var j = table.rows.length;
        //获取当前表格的id
         var tableid = table.getAttribute('tableid');
         //通过当前表格id查找合计总行数
         var x =$("table[tableid='"+tableid+"'] tr[name='sum']").length;
         //使用this的parentnode找到td标签，获取里面的name属性，name的值等于需要用到value的input的列号
        var target = obj.parentNode.getAttribute('name');
         //定义一个全局变量存储结果
        var result = 0;
        //循环时把合计的行数去掉
         for(i = 1;i < j - x;i++){
             //将input里的内容转化为数值，传给num1
            var num1 = parseFloat(table.rows[i].children[target].children[0].value,10);
             //如果num1为空，即input里没有输入，则给num1赋一个0
            if(!num1){
                num1 = 0;
                result += num1;
            }else if(num1){
                result += num1;
            }
         }
         //将结果输入进最后一行合计的input
         if(table.rows[j-1].children[target]){
             table.rows[j-1].children[target].children[0].value = result;
         }else{
             //通过表格id以及合计的name查找对应需要添加合计的总数的位置
             $("table[tableid='"+tableid+"'] tr[name='sum'] td[name='"+target+"']")[0].children[0].value=result;
         }
      }
      function checkstr(obj) { 
          var name = obj.getAttribute('lay-verify');
          switch(name){
              case 'phonenumber':
              if (obj.value != '' && !/^1[3|4|5|6|7|8]\d{9}$/.test(obj.value) && !/^\d{8}$/.test(obj.value) && obj.value!=null) {
                alert("手机号格式不正确");
            }
            break;
            case 'nothing':
            break;

            case 'notnull':
            if(obj.value == ''){
                alert('该输入框不能为空');
            }
            break;
            
            case 'number':
            if (!/[0-9]$/.test(obj.value) && obj.value!=null) {
                alert(' 只能输入数字');
            }
            break;

            case 'word':
            if (!/[A-Za-z]$/.test(obj.value) && obj.value != null) {
                alert(' 只能输入英文');
            }
            break;

            case 'postcode':
            if (!/[0-9]{6}$/.test(obj.value) && obj.value!=null){
                alert('邮编格式不正确');
            }
            break;

            case 'email':
            if (obj.value != '' && !/([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(obj.value) && obj.value!=null) {
                alert('邮箱格式不正确');
            }
            break;

            case 'url':
            if(!/((https|http|ftp|rtsp|mms){0,1}(:\/\/){0,1})www\.(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/.test(obj.value) && obj.value!=null){
                alert('网址格式不正确');
            }
            break;
            case 'str616':
            if(!/^[0-9a-zA-Z]{6,16}$/.test(obj.value) && obj.value!=null){
                alert('请输入6-16位字符');
            }
            break;
            case 'num616':
            if(!/^[0-9]{6,16}$/.test(obj.value) && obj.value!=null){
                alert('请输入6-16位数字');
            }
            break;
            case 'str618':
            if(!/^[0-9a-zA-Z]{6,18}$/.test(obj.value) && obj.value!=null){
                alert('请输入6-18位');
            }
            break;
          }
       }
       //单行文本框统计列表控件可编辑行数的方法，需要设置不同的列表控件名称
       //增加行的统计
       function tableNum(obj) { 
        var table = obj.parentNode.parentNode.parentNode.parentNode.parentNode; 
        var j = table.rows.length;
        var needline = table.rows[j-1];
        var firstline = table.rows[1];
        //减去合计或备注行
        if(needline.getAttribute('name') == 'sum' || needline.getAttribute('name') == 'remark' && firstline.style.display != 'none'){
            var neednum = j - 2;
        }else if(needline.getAttribute('name') == null && firstline.style.display != 'none'){
            var neednum = j - 1;
        }else if(needline.getAttribute('name') == null && firstline.style.display == 'none'){
            var neednum = j - 2;
        }else if(needline.getAttribute('name') == 'remark' && firstline.style.display == 'none'){
            var neednum = j - 3;
        }
        //获取点击加号表格的title内容
        var tableTitle = table.getAttribute('title');
        //在整个div里找到对应的input
        var tmp = $('#adcformdesign-table-td').find('[adcform_listctrlmark="'+ tableTitle +'"]');
        //修改input的value值
        if(tmp.length > 0){
            tmp[0].value = neednum;
        }
        }
        //删除行的统计
        function deltableNum(obj) { 
            var table = obj.parentNode.parentNode.parentNode;
            var j = table.rows.length;
            //解决table嵌套table时少1像素问题
            if($('#sicTable').length!=0&&j==3){
                $('#sicTable').css('width','calc(100% + 1px)');
            }
            if($('#sicStartTable').length!=0&&j==3){
                $('#sicStartTable').css('width','calc(100% + 1px)');
            }
            var needline = table.rows[j-1];
            var firstline = table.rows[1];
            //减去合计或备注行，再减去将要删掉的一行
            if(needline.getAttribute('name') == 'sum' || needline.getAttribute('name') == 'remark' && firstline.style.display != 'none'){
                var neednum = j - 3;
            }else if(needline.getAttribute('name') == null && firstline.style.display != 'none'){
                var neednum = j - 2;
            }else if(needline.getAttribute('name') == null && firstline.style.display == 'none'){
                var neednum = j - 3;
            }else if(needline.getAttribute('name') == 'remark' && firstline.style.display == 'none'){
                var neednum = j - 4;
            }
            var tableTitle = table.getAttribute('title');
            var tmp = $('#adcformdesign-table-td').find('[adcform_listctrlmark="'+ tableTitle +'"]');
            if(tmp.length > 0){
                tmp[0].value = neednum;
            }
         }