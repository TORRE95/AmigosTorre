<?php 
	require 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");

	$id = $_GET['id'];

	$query = "SELECT * FROM historial WHERE idUsuario = $id;";
	$resultado = $conexion->query($query);
	$arreglo = array();
	while ($r = $resultado->fetch_object()) {
		array_push($arreglo, array(
			"idHistoria"=>$r->idHistoria,
			"ruta"=>$r->ruta,
			"importe"=>$r->importe,
			"fecha"=>$r->fecha
			
		));
	}

	echo json_encode($arreglo);

 ?>