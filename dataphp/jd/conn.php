<?php
//mysqli(本地主机,数据库的用户名,数据库的密码,数据库名称);
define('HOST','localhost');//本地主机
define('NAME','root');//数据库的用户名
define('PASSWORD','');//数据库的密码
define('DBNAME','login');//数据库名称
$conn=@new mysqli(HOST,NAME,PASSWORD,DBNAME);
if($conn->connect_error){
    die('数据库连接失败'.$conn->connect_error);//结束并输出里面的内容
}
//前后端交互
// 1.建数据库
// 2.建表
