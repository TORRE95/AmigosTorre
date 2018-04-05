<?php 

	require 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");
	date_default_timezone_set("America/Mexico_City");
	$idOrden = $_GET['id'];

	$insert = "UPDATE orden SET Completado = 1 WHERE idOrden = '$idOrden'";
	$res = $conexion->query($insert);
	echo($res);
	

 ?>