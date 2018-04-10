<?php 

	$user = $_GET['user'];
	$pass = $_GET['pass'];
	require_once 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");
	$query = "SELECT * FROM usuarios WHERE Usuario = '$user' AND Password = '$pass';";
	$resultado = $conexion->query($query);


	$arreglo = array();
	while ($r = $resultado->fetch_object()) {
		array_push($arreglo, array(
			"idUsuario"=>$r->idUsuario,
			"Usuario"=>$r->Usuario,
			"Correo"=>$r->Correo, 
			"Password"=>$r->Password
			
		));
	}

	echo json_encode($arreglo);

 ?>