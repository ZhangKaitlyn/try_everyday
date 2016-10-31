<?php
	$page=$_GET['page'];
	$offset=$page*5;
	$userList=array();
	for ($i=0; $i < 5; $i++) { 
		$offset+=$i;
		$userList['userId'.$offset]='Kaitlyn'.$i;
	}
	echo json_encode($userList);