//layui中表格合并的方法封装
function alarmTableRowSpan(fieldName, index) { //第一个参数为要合并的列，第二个参数为索引值
    var fixedNode = document.getElementsByClassName("layui-table-body")[index - 1];
    if (!fixedNode) {
        return false;
    }
    var child = fixedNode.getElementsByTagName("td");
    var childFilterArr = [];
    // 获取data-field属性为fieldName的td
    for (var i = 0; i < child.length; i++) {
        if (child[i].getAttribute("data-field") == fieldName) {
            childFilterArr.push(child[i]);
        }
    }
    // 获取td的个数和种类
    var childFilterTextObj = {};
    for (var i = 0; i < childFilterArr.length; i++) {
        var childText = childFilterArr[i].textContent;
        if (childFilterTextObj[childText] == undefined) {
            childFilterTextObj[childText] = 1;
        } else {
            var num = childFilterTextObj[childText];
            childFilterTextObj[childText] = num * 1 + 1;
        }
    }
    // 给获取到的td设置合并单元格属性
    for (var key in childFilterTextObj) {
        var tdNum = childFilterTextObj[key];
        var canRowSpan = true;
        for (var i = 0; i < childFilterArr.length; i++) {
            if (childFilterArr[i].textContent == key) {
                if (canRowSpan) {
                    childFilterArr[i].setAttribute("rowspan", tdNum);
                    canRowSpan = false;
                } else {
                    childFilterArr[i].style.display = "none";
                }
            }
        }
    }
}