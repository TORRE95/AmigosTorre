<?php 

	require 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");

	$query = "SELECT *  FROM estilistas";
	$select = $conexion->query($query);

	$arreglo = array();
	while ($r = $select->fetch_object()) {
		array_push($arreglo, array(
			"idEstilista"=>$r->idEstilista,
			"nombre"=>$r->Nombre,
			"apellidos"=>$r->Apellidos,
			"nombreTienda"=>$r->nombreTienda,
			"ubicacion" =>$r->Ubicacion,
			"descripcion" =>$r->Descripcion,
			"contacto"=>$r->Contacto,
			"calificacion" =>$r->Calificacion
		));
	}
	
	
	//IMPRIMIR LA RESPUESTA EN JSON
	echo json_encode($arreglo);

 ?>