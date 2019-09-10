//失去焦点，通过ajax传后端，接受后端返回值
const username=document.querySelector('.username');
const warn=document.querySelector('.warn')
username.onblur=function(){
    $.ajax({
        url:"http://10.31.157.62/peval_object/h51907/object/php/reg.php",
        data:{
            username:username.value
        },//传给后端

        }).done(function(jude){
            if(!jude){
                warn.innerHTML='输入正确'
                warn.style.color='green'
            }
            if(jude){
                warn.innerHTML='用户名已存在';
                warn.style.color='red'
            }
        })
}