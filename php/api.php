<?php
require("sqlcon.php");
// if(isset($_GET['sid'])){
//     $sid=$_GET['sid'];
    $result=$sqlcon->query("select * from cart");
    // echo json_encode($result->fetch_assoc());
// }
$arr = array();
while($row = $result->fetch_assoc()){
    array_push($arr,$row);
}

echo json_encode($arr);

$sqlcon->close();
?>