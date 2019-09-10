<?php  
	header('content-type:text/html;charset=utf-8');//设置字符编码
	//mysqli(本地主机,数据库的用户名,数据库的密码,数据库名称);
	define('HOST','localhost');//本地主机
	define('NAME','root');//数据库的用户名
	define('PASSWORD','');//数据库的密码
	define('DBNAME','yi');//数据库名称
	$sqlcon=@new mysqli(HOST,NAME,PASSWORD,DBNAME);
	if($sqlcon->connect_error){
		die('数据库连接失败'.$sqlcon->connect_error);//结束并输出里面的内容
	}
	$sqlcon->query('SET NAMES UTF8');//设置字符编码
?>