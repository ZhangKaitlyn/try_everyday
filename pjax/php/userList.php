<?php
	$userList=array();
	for ($i=0; $i < 20; $i++) { 
		$temp['username']='Kaitlyn'+$i;
		$temp['userId']=10000+$i;
		array_push($userList, $temp);
	}
	echo json_encode($userList);