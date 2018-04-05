<?php 

	require 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");
	date_default_timezone_set("America/Mexico_City");
	$idUsuario = $_GET['idUsuario'];
	$nombreServer = $_GET['nombreServer'];
	$montoTotal = $_GET['montoTotal'];
	$numImpresiones = $_GET['numImpresiones'];
	$hora = date('H:i');
	$insert = "INSERT INTO orden (idUsuario, nombreServer, montoTotal, numImpresiones, hora) VALUES ('$idUsuario', '$nombreServer', '$montoTotal', '$numImpresiones', '$hora')";
	$res = $conexion->query($insert);
	echo($res);
	

 ?>