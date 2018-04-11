<?php 

	require 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");
	$user = $_GET['user'];
	$mail = $_GET['mail'];
	$pass = $_GET['pass'];
	$insert = "INSERT INTO usuarios (Usuario, Correo, Password) VALUES ('$user', '$mail', '$pass')";
	$res = $conexion->query($insert);
	echo($res);

	

 ?>