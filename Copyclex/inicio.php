<?php 
	
	session_start();
	require_once 'conexion.php';
	//instanciamos la clase Funciones 
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");


	#cerrar sesion
	if (isset($_GET['salir'])) {
		if ($_GET['salir'] == 1) {
			session_destroy();
		}
	}

 ?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<a href="index.php?salir=1" style="position: absolute; right: 2%; top: 5%; color: #900">Cerrar Sesión</a><br><br><br>
</body>
</html>