<?php 

	require_once 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");
	//$nombre = $_POST['nombre'];
	//  SELECT * FROM historial WHERE idUsuario IN (SELECT Nombre FROM usuarios WHERE idUsuario != 0);
	$query = "SELECT * FROM historial;";
	$resultado = $conexion->query($query);
	$arreglo = array();
	while ($r = $resultado->fetch_object()) {
		array_push($arreglo, array(
			"idUsuario"=>$r->idUsuario,
			"idHistorial"=>$r->idHistorial,
			"monto"=>$r->Monto,
			"nombreArchivo" => $r->nombreArchivo

		));
	}
	
	
	//IMPRIMIR LA RESPUESTA EN JSON
	echo json_encode($arreglo);

 ?>