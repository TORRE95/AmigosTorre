<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<?php 
		require 'libreria.php';
		$res = printselect("*", "usuarios");
		echo $res."<br>";

		$lol = printinsert("usuarios", "1,1,1,1,1,1");
		echo $lol."<br>";

		$lel = printdeleteRow("usuarios" ,"idUsuario = 1");
		echo $lel;
	 ?>
</body>
</html>