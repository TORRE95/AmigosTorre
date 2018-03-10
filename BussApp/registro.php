<?php 
	#hablilitamos el uso de variables de sesion

	session_start();

	require_once('conexion.php');

	//instanciamos la clase Funciones 
	$funciones = new Funciones();
	$conexion = $funciones->conectar();
	$conexion->set_charset("utf8");

	#registro
	if (isset($_POST['registro'])) {

		$num = $_POST['num'];
		$mail = $_POST['mail'];
		$nombre = $_POST['nombre'];
		$apellidos = $_POST['ape'];
		$pass1 = $_POST['pass1'];
		$pass2 = $_POST['pass2'];



		if ($pass1 == $pass2 && $pass1 != "" && $pass2 != "" && $nombre != "" && $mail != "") {
			
			$insert ="INSERT INTO usuarios (Nombre, Apellidos, Correo, Password, Numero) VALUES('$nombre', '$apellidos', '$mail', md5('$pass1'), $num);";

			if ($conexion->query($insert)) {
				$_SESSION['mail'];
				$_SESSION['nombre'];
				echo "<script>alert('Usuario registrado correctamente'); window.location='inicio.php'</script>";
			}else {
				echo "ERROR:".$conexion->error."<br>";
				echo $insert."<br>";
			}

		}else {
				echo "<script>alert('ERROR: Las constraseñas no coinciden')</script>";
		}

	}

 ?>

<!DOCTYPE html>
<html>
<head>
	<title>Make-Up Me - Registro</title>
</head>
<body>

<h1>Registro</h1>
<form action="#" method="POST">
	<label>
		Nombre: 
		<input type="text" name="nombre" required>
	</label><br><br>
	<label>
		Apellidos:
		<input type="text" name="ape" required>
	</label><br><br>
	<label>
		Correo:
		<input type="mail" name="mail" required>
	</label><br><br>
	<label>
		Contraseña: 
		<input type="password" name="pass1" required>
	</label><br><br>
	<label>
		Confirmar contraseña:
		<input type="password" name="pass2" required>
	</label><br><br>
	<label>
		Número de Celular:
		<input type="number" name="num" required>
	</label><br><br>
	<input type="submit" name="registro" value="Registro">
</form><br><br>
<a href="index.php">¿Ya tienes cuenta? ¡Inicia sesión para continuar!</a>
</body>
</html>