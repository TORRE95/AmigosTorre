<?php 

	require_once 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");
	$id = $_GET['id'];
	//  SELECT * FROM historial WHERE idUsuario IN (SELECT Nombre FROM usuarios WHERE idUsuario != 0);
	$query1 = "SELECT Nombre FROM usuarios WHERE idUsuario = '$id';";
	$resultado1 = $conexion->query($query1);
	$row = mysqli_fetch_row($resultado1);
	$nombre = $row[0];

	$query = "SELECT * FROM orden WHERE nombreServer = '$nombre' AND Completado = 0;";
	$resultado = $conexion->query($query);
	$arreglo = array();
	while ($r = $resultado->fetch_object()) {
		array_push($arreglo, array(
			"idOrden"=>$r->idOrden,
			"idUsuario"=>$r->idUsuario,
			"Monto"=>$r->montoTotal,
			"Impresiones"=>$r->numImpresiones

		));
	}
	
	
	//IMPRIMIR LA RESPUESTA EN JSON
	echo json_encode($arreglo);

 ?>