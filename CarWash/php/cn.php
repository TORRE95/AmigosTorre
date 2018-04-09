<?php
function conectar() {
	$servidor = "localhost";
	$usuario = "root";
	$pass = "";
	$bd = "mobilwasher";
	
	$con = mysqli_connect($servidor, $usuario, $pass, $bd);
	
	return $con;
}

function desconectar($con) {
	mysqli_close($con);
}

function consultar($con, $query) {
	$resultado = mysqli_query($con, $query) or die(mysqli_error($con));
	return $resultado;
}