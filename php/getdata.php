<?php

require("conn.php");

//传输方式是get
if(isset($_GET['sid'])){
   
    $sid=$_GET['sid'];
    
    $result=$conn->query("select * from cart where sid=$sid");
    echo json_encode($result->fetch_assoc());
};
