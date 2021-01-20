function tempDownByDicCode(dicCode) {
    var load2 = layui.layer.load(2);
    $.ajax({
        url: "/api/sys/dictype/getDicTypeByCode/"+dicCode,
        type: 'get',
        success: function (res) {
            layui.layer.close(load2);
            if (res.ok) {
                window.open("/ADC_info/api/sys/file/"+res.data.dicTypeName.split("-")[1]+"/download")
            } else {
                layui.layer.msg(res.message, {
                    icon: 5
                });
            }
        },
        error:function (err) {
            layui.layer.close(load2);
            layui.layer.msg(err.message, {
                icon: 5
            });
        }
    });
};