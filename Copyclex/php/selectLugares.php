<?php 

	require_once 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");
	//$nombre = $_POST['nombre'];
	//  SELECT * FROM historial WHERE idUsuario IN (SELECT Nombre FROM usuarios WHERE idUsuario != 0);
	$query = "SELECT * FROM usuarios WHERE tipoUser = 1	;";
	$resultado = $conexion->query($query);
	$arreglo = array();
	while ($r = $resultado->fetch_object()) {
		array_push($arreglo, array(
			"idUsuario"=>$r->idUsuario,
			"Nombre"=>$r->Nombre,
			"Ubicacion"=>$r->Ubicacion

		));
	}
	
	
	//IMPRIMIR LA RESPUESTA EN JSON
	echo json_encode($arreglo);

 ?>