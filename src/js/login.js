const username=document.querySelector('.username');
const password=document.querySelector('.password');
const login=document.querySelector('.box-btn');
const warn=document.querySelector('.warn');
const reg=document.querySelector('.register')
//点击登录按钮，传输数据
login.onclick=function(){
    $.ajax({
        type: 'post',
        url:"http://10.31.157.62/peval_object/h51907/object/php/login.php",
        data:{
            user:username.value,
            pass:password.value
        }

    }).done(function(jude){
        if(!jude){
            warn.innerHTML='用户名和密码错误'
            warn.style.color='red'
        }else{
            location.href='http://10.31.157.62/peval_object/h51907/object/src/html/login.html';
            reg.innerHTML='欢迎'+username.value;
            //成功登录以后，将用户名存到本地储存
            localStorage.setItem('customname', username.value);
        }

    })
}