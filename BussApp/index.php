<?php 
	session_start();
	require_once 'conexion.php';
	//instanciamos la clase Funciones 
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");
	if(isset($_POST['iniciar'])){
			$num = $_POST['numero'];
			$pass = $_POST['pass'];

			//Buscar en BD
			$buscar = "SELECT COUNT(*) AS Total FROM usuarios WHERE Numero = '$num' AND Password = md5('$pass') ;";

			$resultado = $conexion->query($buscar);

			$total = $resultado->fetch_assoc();

			//Si encontramos al usuario

			if($total['Total'] > 0){
				//Buscar datos del usuario
				$datosUsuario = "SELECT * FROM usuarios WHERE Numero = '$num' AND Password = md5('$pass');";
				$res = $conexion->query($datosUsuario);
				$r = $res->fetch_assoc();
				

				#Creamos las variables de sesión
				$_SESSION['idUsuario'] = $r['idUsuario'];
				$_SESSION['numero'] = $r['Numero']; 
				header('Location: inicio.php');

			}else{
				echo "<script>alert('Usuario y/o contraseña incorrectos')</script>";

			}
	}

 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Make-Up Me - Bienvenido</title>
</head>
<body>
<h1>Make-Up Me</h1>

<form action="" method="POST">
	<label>
		Número de Celular:
		<input type="number" name="numero" required>
	</label><br><br>
	<label>
		Contraseña:
		<input type="password" name="pass" required>
	</label><br><br>
	<input type="submit" name="iniciar" value="Iniciar Sesión">
</form><br>
<a href="registro.php">¿No tienes cuenta? ¡Regístrate ahora!</a>


</body>
</html>