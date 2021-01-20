layui.use(['form','laydate','upload','table','util'], function() {
    var laydate = layui.laydate,
        upload = layui.upload,
        admin = layui.admin,
        config = layui.config,
        form = layui.form;
    $.ajaxSetup({
        beforeSend: function(jqXHR, settings) {
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
        complete: function(jqXHR, textStatus) {
            if (jqXHR.status === 401||(jqXHR.responseJSON&&jqXHR.responseJSON.message.indexOf("登录")!=-1)) {
                layer.msg('登录状态失效，请重新登录！');
                setTimeout(function () {
                    config.removeAccount();
                    if (window.top!=null && window.top.document.URL!=document.URL){
                        window.top.location.replace(window.top.location.origin+'/ADC_info/login.html?redirect_to=' + window.location.hash);
                    }else{
                        location.replace('/ADC_info/login.html?redirect_to=' + window.location.hash);
                    }
                },2000);
            }
        }
    });
})
