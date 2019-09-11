<?php
//1.php连接数据库
//引入连接数据库的文件
require "conn.php";  //include "conn.php"

//2.获取数据
//先判断传输数据的界面是否点击了submit按钮。
if(isset($_POST['submit'])){
    $picurl=$_POST['picurl'];
    $title=$_POST['title'];
    $price=$_POST['price'];
    //通过sql语句将上面取到的数据添加到数据库。
    $sql="insert jingdong values(null, '$picurl', '$title' ,'$price' )";
    $conn->query($sql);

}else{
    exit('非法操作');//退出，并打印里面的内容。
}



