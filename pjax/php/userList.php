<?php
	$page=$_GET['page'];
	$offset=$page*5;
	$userList=array();
	for ($i=0; $i < 5; $i++) { 
		$userId=$offset+$i;
		$userList['userId'.$userId]='Kaitlyn'.$userId;
	}
	echo json_encode($userList);