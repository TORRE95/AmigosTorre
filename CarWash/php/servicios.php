<?php
include('cn.php');
# echo $_SESSION['user'];
$dir = $_POST['dir'];
$ent = $_POST['ent'];
$car = $_POST['car'];
$pag = $_POST['pag'];
$paq = $_POST['paq'];
$dat = date("Y-m-d");
$use = $_POST['use'];

$con = conectar();

$query = "insert into ordenes (direccion, entre_calles, caracteristica, pago, cliente, fecha, paquete) values ('$dir', '$ent', '$car', '$pag', '$use', '$dat', '$paq');";
$consulta = consultar($con, $query);
if(!$consulta) {
	echo 1;
} else {
	echo 0;
}
mysqli_close($con);