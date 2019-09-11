<?php
header('content-type:text/html;charset=utf-8');//设置字符编码
//连接数据库
$conn=@mysql_connect('localhost','root','12345678');
if(!$conn){
    die('数据库连接错误'.mysql_error());
}
//选择数据库
mysql_select_db('taobao');
//设置字符集
mysql_query('SET NAMES UTF8');

//获取前端传来的id，利用id在数据库里面将其删除。
if(isset($_GET['id'])){
    $id=$_GET['id'];
    mysql_query("delete from taobaopic where sid=$id ");
}else{
    exit('非法操作')
}
