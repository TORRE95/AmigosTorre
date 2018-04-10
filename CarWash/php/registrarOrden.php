<?php 

	$dir = $_GET['dir'];
	$pag = $_GET['pag'];
	$paq = $_GET['paq'];
	$use = $_GET['idUsuario'];
	require_once 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");
	$query = "INSERT INTO ordenes (direccion, pago, idUsuario, paquete) VALUES ('$dir', '$pag', '$use', '$paq');";
	$res = $conexion->query($query);
	echo($res);

 ?>