<?php 

	require 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");
	$nombre = $_GET['nombre'];
	$mail = $_GET['mail'];
	$pass = $_GET['pass1'];
	$insert = "INSERT INTO usuarios (Nombre, Correo, Password) VALUES ('$nombre', '$mail', '$pass')";
	$res = $conexion->query($insert);
	echo($res);

	

 ?>