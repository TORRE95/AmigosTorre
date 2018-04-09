<?php 
	require 'conexion.php';
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");

	//Recibimos las variables
	
		$ruta = $_GET['ruta'];
		$importe = $_GET['monto'];
		$id = $_GET['idUsuario'];

		//Insertamos datos en la bd
		$query = "INSERT INTO historial (Ruta, Importe, idUsuario) VALUES('$ruta', '$importe', '$id');";
		$insertar = $conexion->query($query);


		if($insertar){
			echo "1";
		}
		else{
			echo "0";
		}
	

 ?>