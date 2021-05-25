function check(){
    var form = document.getElementsByTagName("form")[0]
    var password = document.getElementById("regpass").value
    var rePassword = document.getElementById("reregpass").value
    if(password !== rePassword && password !== ''){
    alert("确认密码与密码不一致!")
    } else {
    form.submit()
    }
    }
    // $('#login').click(function(){
    //     $.ajax({
    //         type:"post",
    //         url:"/index/login",
    //         date:{"name":$("#l_name").val(),"pass":$("#l_pass").val()},
    //         success:function (date){
    //             if(date.status == 1){
    //                 window.location.href = "/"
    //                 alert("登录成功！")
    //             }else{
    //                 alert("登录失败！")
    //             }
    //         }
    //     })
    // })