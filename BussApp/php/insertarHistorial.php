<?php 

	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");

	//Recibimos las variables
	if (!empty($_POST)) {
		$ruta = $_POST['ruta'];
		$importe = $_POST['importe'];
		$correo = $_POST['mail'];

		//Insertamos datos en la bd
		$query = "INSERT INTO historial (Ruta, Importe, Correo) VALUES('$ruta', '$importe', '$correo');";
		$insertar = $conexion->query($query);

		echo json_encode($insertar);
	}

 ?>