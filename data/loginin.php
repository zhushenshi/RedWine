<?php
//data/login.php
require("01_init.php");
$uname=$_REQUEST["uname"];
$email=$_REQUEST["email"];
$upwd=$_REQUEST["upwd"];
if($uname&&$email&&$upwd){
	$sql="INSERT INTO `user`(`uid`, `upwd`, `uname`, `email`) VALUES (default,'$upwd','$upwd','$email')";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	session_start();
	$_SESSION["uid"]=$row[0];
	echo "true";
}else{
	echo "false";
}