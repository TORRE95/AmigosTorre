<?php
include("cn.php");
$con = conectar();
$user = $_POST['user'];
$pass = $_POST['pass'];
session_start();
$_SESSION['user'] = $user;

$query = "select * from usuarios where usuario = '$user' and contrasena = '$pass'";
$resultado = consultar($con, $query);
$filas = mysqli_num_rows($resultado);

//print($filas);

//echo $user . $pass;

if($filas > 0) {
	echo 0;
} else {
	echo 1;
}

mysqli_free_result($resultado);
mysqli_close($con);