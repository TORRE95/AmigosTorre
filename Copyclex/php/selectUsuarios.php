<?php 

	$mail = $_GET['mail'];
	$pass = $_GET['pass'];
	require_once 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");
	$query = "SELECT * FROM usuarios WHERE Correo = '$mail' AND Password = '$pass';";
	$resultado = $conexion->query($query);

	if (mysqli_num_rows($resultado)>0) {
		$r = $resultado->fetch_object();
		echo $r->tipoUser;
	}else{
		echo "Error";
	}
		

	
	//IMPRIMIR LA RESPUESTA EN JSON
	//echo json_encode($arreglo);
	//echo $query;

 ?>