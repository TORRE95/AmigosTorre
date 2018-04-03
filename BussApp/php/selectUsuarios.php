<?php 
	
	$celular = $_GET['cel'];
	$pass = $_GET['pass'];
	require_once 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");
	$query = "SELECT * FROM usuarios WHERE Numero = '$celular' AND Password = '$pass';";
	$resultado = $conexion->query($query);

	if (mysqli_num_rows($resultado)>0) {
		$r = $resultado->fetch_object();
		echo $r->idUsuario;
	}else{
		echo "0";
	}
		

	
	//IMPRIMIR LA RESPUESTA EN JSON
	//echo json_encode($arreglo);
	//echo $query;

 ?>