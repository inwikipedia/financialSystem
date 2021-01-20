var name = sessionStorage.getItem("name");
var type = sessionStorage.getItem("type");
var savePath = sessionStorage.getItem("savePath");
var root = sessionStorage.getItem("root");
var id = sessionStorage.getItem("id");
var eventReceiveId = sessionStorage.getItem("eventReceiveId");
var loginUserId = sessionStorage.getItem("loginUserId");
var documentKey = sessionStorage.getItem("documentKey");
var loginUsname = sessionStorage.getItem("loginUsname");
var ServerIP = sessionStorage.getItem("ServerIP");
var onDocumentStateChange = function (event) {
    if (event.data) {
        console.log("文档已更改", event, event.data);
    } else {
        console.log("在文档编辑服务上收集更改");
    }
};

console.log(ServerIP,eventReceiveId,documentKey);
/** 随机生成固定位数或者一定范围内的字符串数字组合
 * @param {Number} min 范围最小值
 * @param {Number} max 范围最大值，当不传递时表示生成指定位数的组合
 * @returns {String} 返回字符串结果
 * */
/* function randomRange(min, max) {
     var returnStr = "",
         range = (max ? Math.round(Math.random() * (max - min)) + min : min),
         arr = ['0', '1', '2', '3', '4', '5', '6',
             '7', '8', '9', 'a', 'b', 'c', 'd', 'e',
             'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
             'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
             'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C',
             'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
             'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
             'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
     for (var i = 0; i < range; i++) {
         var index = Math.round(Math.random() * (arr.length - 1));
         returnStr += arr[index];
     }
     return returnStr;
 }
 var key = randomRange(20);*/
if (root == 'true') {
    let urlIPGet = "http://" + ServerIP + "/api/sys/file/" + id+"download";
    // /api/sys/file/3643fc83efb34e038e0643ba39c9fd31/download
    let urlIP  = "http://" + ServerIP + "/api/event" + "/event/save?path=" + savePath + "&id="
        + id + '&eventReceiveId=' + eventReceiveId + '&loginUserId=' + loginUserId;
        console.log(urlIPGet);
        console.log(urlIP);
        config = {
            "events": {
                "onDocumentStateChange": onDocumentStateChange,
            },
            "document": {
                "permissions": {
                    "edit": true,
                },
                "key": documentKey, //key值相同才可以协同工作
                "fileType": type,  //文件的类型doc,xlsx,ppt等
                "title": name + '.' + type,  //文件名+文件类型
                //文件的存放位置
                "url": urlIPGet,
                "info": {
                    "folder": "Example Files",
                }
            },

            "editorConfig": {
                "lang": "zh-CN",   //"en-US",汉化
                //回调only office的API接口，将修改后的文档存放起来
                //ONLYOFFICE文档服务器通知文档编辑状态的URL
                "callbackUrl": urlIP,
                "user": {
                    "id": eventReceiveId,
                    "name": loginUsname
                },

                "customization": {
                    "autosave": true,//自动保存
                    "forcesave": true,//“保存”按钮时，将请求发送回ONLYOFFICE Document Server执行保存操作
                    "textColor": "#FF0000",
                }
            }
        };

    var docEditor = new DocsAPI.DocEditor("placeholder", config);
} else if (root == 'false') {
    config = {
        "document": {
            "permissions": {
                "edit": false,
            },
            "fileType": type,
            "title": name + '.' + type,
            "url": "http://" + ServerIP + "/Files/" + savePath

        },
        "editorConfig": {
            "lang": "zh-CN",
        }
    };
    var docEditor = new DocsAPI.DocEditor("placeholder", config);

}