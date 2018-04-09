<?php
include("cn.php");
$mail = $_POST['mail'];
$user = $_POST['user'];
$pass = $_POST['pass'];
$pswrd = $_POST['pswrd'];

# print($mail.$user.$pass.$pswrd);

$con = conectar();

if($pass == $pswrd) {
	$verifica = mysqli_query($con, "select * from usuarios where usuario = '$user';");
	if(mysqli_num_rows($verifica) > 0) {
		echo 3;
		exit;
	}
	
	$query = "insert into usuarios(usuario, correo, contrasena) values('$user', '$mail', '$pass')";
	$consulta = consultar($con, $query);
	
	if(!$consulta) {
		echo 0;
	} else {
		echo 1;
	}
	mysqli_close($con);
} else {
	echo "<script>alert('¡Las contraseñas no coinciden!')</script>";
	echo "<script>window.location.replace('../html/singin.html');</script>";
}