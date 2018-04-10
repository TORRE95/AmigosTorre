<?php 
	require_once 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");
	$query = "SELECT * FROM sucursales";
	$resultado = $conexion->query($query);


	$arreglo = array();
	while ($r = $resultado->fetch_object()) {
		array_push($arreglo, array(
			"idSucursal"=>$r->idSucursal,
			"nombreSucursal"=>$r->nombreSucursal,
			"direccion"=>$r->direccion, 
			"dueño"=>$r->dueño,
			"telefono"=>$r->telefono,
			"horario"=>$r->horario,
			"rutaFoto"=>$r->rutaFoto
			
		));
	}

	echo json_encode($arreglo);

 ?>