<?php 

	require 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");
	$nombre = $_GET['nombre'];
	$mail = $_GET['mail'];
	$pass = $_GET['pass1'];
	$ubicacion = $_GET['ubicacion'];
	$insert = "INSERT INTO usuarios (Nombre, Correo, Password, Ubicacion, tipoUser) VALUES('$nombre', '$mail', '$pass', '$ubicacion', '1')";
	$res = $conexion->query($insert);
	echo($res);

	

 ?>