<?php 

	header('Access-Control-Allow-Origin: *');
	require_once 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");
	$query = "SELECT * FROM usuarios";
	$resultado = $conexion->query($query);
	$arreglo = array();
	while ($r = $resultado->fetch_object()) {
		array_push($arreglo, array(
			"idUsuario"=>$r->idUsuario,
			"nombre"=>$r->Nombre,
			"apellidos"=>$r->Apellidos,
			"correo"=>$r->Correo,
			"pass" =>$r->Password
		));
	}
	
	
	//IMPRIMIR LA RESPUESTA EN JSON
	echo json_encode($arreglo);

 ?>