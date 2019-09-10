<?php
//注册php文件
require "conn.php";

//检测用户名
if(isset($_GET['username'])){
    $username=$_GET['username'];
    
    //通过查询方式来测试是否存在用户名。
    $result=$conn->query("select * from username where username='$username'");

    if($result->fetch_assoc()){//存在
        echo true;//1
    }else{//不存在
        echo false;//0
    }

}




//前端用户点击了submit按钮。通过name属性接收前端传入表单的值。
if(isset($_POST['submit'])){
  
    $name=$_POST['username'];
    $pass=sha1($_POST['password']);//加密
    
    // $email=$_POST['email'];
    //添加数据库(new():是时间)
    $conn->query("insert username values(null,'$name','$pass')");

    //php的跳转
    header('location:http://10.31.157.62/peval_object/h51907/object/src/html/index1.html');
}