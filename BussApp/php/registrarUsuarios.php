<?php 

	require 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	//$conexion->set_charset("utf8");
	$nombre = $_GET['nombre'];
	$mail = $_GET['mail'];
	$pass = $_GET['pass'];
	$apellido = $_GET['ape'];
	$cel = $_GET['cel'];
	$insert = "INSERT INTO usuarios (Nombre, Apellidos, Numero, Correo, Password) VALUES ('$nombre','$apellido', '$cel', '$mail', '$pass')";
	$res = $conexion->query($insert);
	echo($res);


	
	

 ?>