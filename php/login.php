<?php
//前端向后端传数据，
//登录PHP文件
require "conn.php";

if(isset($_POST['user']) && isset($_POST['pass'])){
    $user=$_POST['user'];
    $pass=sha1($_POST['pass']);

    $result=$conn->query("select * from usertable where username='$user' and password='$pass' ");

    if($result->fetch_assoc()){//匹配成功
        echo true;
    }else{
        echo false;
    }

}