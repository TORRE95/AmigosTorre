<?php 

	$idUsuario = $_GET['usuario'];
	require 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");
	$query = "SELECT * FROM orden WHERE idCafe = '$idUsuario'";
	$resultado = $conexion->query($query);
	$arreglo = array();
	while ($r = $resultado->fetch_object()) {
		array_push($arreglo, array(
			"idOrden"=>$r->idOrden,
			"idUsuario"=>$r->idUsuario,
			"idCafe"=>$r->idCafe,
			"monto"=>$r->Monto,
			"descripcion"=>$r->descripcion,
			"hora"=>$r->Hora,
			"completado"=>$r->Completado
		));
	}

	echo json_encode($arreglo);

 ?>