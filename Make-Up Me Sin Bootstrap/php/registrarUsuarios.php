<?php 
	header('Access-Control-Allow-Origin: *');
	require 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");
	$nombre = $_GET['nombre'];
	$apellidos = $_GET['apellidos'];
	$mail = $_GET['mail'];
	$pass = $_GET['pass1'];
	$insert = "INSERT INTO usuarios (Nombre, Apellidos, Correo, Password) VALUES('$nombre', '$apellidos', '$mail', '$pass')";
	$res = $conexion->query($insert);
	echo($res);

	

 ?>