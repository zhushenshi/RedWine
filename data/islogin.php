<?php
//data/users/islogin.php
require("01_init.php");
session_start();
@$uid=$_SESSION["uid"];
if($uid==null){
	echo json_encode(["ok"=>0]);
}
else{
	$sql="select uname from user where uid=$uid";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	echo json_encode(["ok"=>1,"uname"=>$row[0]]);
	// echo json_encode(["ok"=>1,"uname"=>"fff"]);
}