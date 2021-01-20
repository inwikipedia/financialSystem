/***
 * 用于进行工作流页面的二次加载
 * @param procIndex
 * @param d
 * @returns {*}
*/
function getProcessTitleText(d) {
    var text;
    switch (d.processDefinitionKey) {
        /*日常事务类*/
        case 'p70053bc83b2b4a27998092819961c768':
            text= getProcessTitle("projectDaily",d);
            break;
        /*经营类*/
        case 'p7111b710ba2d47cf9c1b87d2847060b9':
            text= getProcessTitle("projectBusiness",d);
            break;
        /*
         * 里程碑*
         */
        case 'p5992ffe665f44d859c912f725eb771f2':
            text=  getProcessTitle("mileStone",d);
            break;
            /*变更*/
        case 'pa0001fb0970341808dd0869ab05c8a3c':
            text=  d.name;
            break;
        /*结项*/
        case 'p9d12f5b27f9a482c8772de52d2825334':
            text=  d.name;
            break;
        default:
            text=  d.name ;

    }
    return text;
}

/***
 * 用于进行工作流页面的二次加载
 * @param procIndex
 * @param d
 * @returns {*}
 */
function getProcessTitle(procIndex,d) {
    var text;
    $.ajax({
        url: '/api/activiti-task/procInsId/' + d.processInstanceId,
        data: {},
        type: 'get',
        async: false,
        success: function (res) {
            //先验证数据是否正常，否则整个页面无法正常显示
            //改为try catch 写法
            try {
                var data = JSON.parse(res.data.data);
                if(procIndex === 'mileStone'){
                    var processInstanceName = d.processInstanceName ? ('['+d.processInstanceName+']') : '';
                    if(!processInstanceName){
                        processInstanceName=d.name ? d.name : '';
                    }
                    var projectName = data.projectName ? data.projectName : '';
                    var milestoneName = data.milestoneName ? data.milestoneName : '';
                    var initiatorName = d.initiatorName ? d.initiatorName : '';
                    text = processInstanceName + '-' + projectName + '项目-' + milestoneName + '里程碑-' + initiatorName;
                } else if (data["input_1543541363646"]) {
                    //拼接列表回显
                    if (procIndex === "projectBusiness") {
                        text = '[经营类项目创建申请]-' + data["input_1543541363646"];
                    } else if (procIndex === "projectDaily") {
                        text = '[日常事务类项目创建申请]-' + data["input_1543541363646"];
                    }
                } else {
                    //这段看需要改动
                    text = d.name + '-' + data.datetime_1556239092300;
                }
            } catch (error) {
                text = d.name;
            }
        }
    });
    return text;

}
/***
 * 用于进行工作流页面的二次加载
 * @param procIndex
 * @param d
 * @returns {*}
 */
function getRsProjectName(d) {
    var arrBusinessKey =d.businessKey.split(':');
    var text;
    $.ajax({
        url: '/api/research/info?researchProjectId=' + arrBusinessKey[0],
        data: {},
        type: 'get',
        async: false,
        success: function (res) {
            //先验证数据是否正常，否则整个页面无法正常显示
            //改为try catch 写法
            try {
                text="["+res.data[0].researchProjectName+"]-"+d.name;
            } catch (error) {
                text = d.name;
            }
        }
    });
    return text;

}