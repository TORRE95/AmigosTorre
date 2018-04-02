<?php 
	require 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");

	$query = "SELECT * FROM historial;";
	$resultado = $conexion->query($query);
	$arreglo = array();
	while ($r = $resultado->fetch_object()) {
		array_push($arreglo, array(
			"idHistoria"=>$r->idHistoria,
			"ruta"=>$r->ruta,
			"importe"=>$r->importe,
			"fecha"=>$r->fecha,
			"correo"=>$r->correo
		));
	}

	echo json_encode($arreglo);

 ?>