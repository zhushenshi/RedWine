<?php
 require("01_init.php");
// $sql = "SELECT * FROM articles limit 0,5";
// $result = mysqli_query($conn,$sql);
// $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
// echo json_encode($rows);

$pageNo=$_REQUEST["pageNo"];
if($pageNo==null) $pageNo=1;
$pageSize=$_REQUEST["pageSize"];
if($pageSize==null) $pageSize=5;
$target=$_REQUEST["target"];
// if($articles==null) $articles="articles";
$sql=" SELECT * FROM ".$target." limit ".($pageNo-1)*$pageSize.",$pageSize ";
$result=mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);

$sql1="SELECT aid FROM articles";
$result1=mysqli_query($conn,$sql1);
$data=mysqli_fetch_all($result1,1);
$count=count($data);
$pageCount=ceil(($count/$pageSize));
$output=[
	"rows"=>$rows,
	"pageNo"=>$pageNo,
	// "count"=>$count,
	"pageCount"=>$pageCount,
	// "data"=>$data
];
echo json_encode($output);
// echo json_encode($rows);
// echo json_encode($count);
// $data=mysqli_fetch_all($result,1);
// $pageCount=ceil(($count/$pageSize));
// $output=[
// 	"pageNo"=>$pageNo,
// 	"pageSize"=>$pageSize,
// 	"count"=>$count,
// 	"pageCount"=>$pageCount,
// 	"data"=>$data
// ];
// echo json_encode($output);
?>
