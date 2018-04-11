<?php 

class Funciones {
	public function conectar() {
		$host = "localhost";
		$user = "id5309646_root";
		$pass = "12345";
		$db = "id5309646_car";

		$conexion = new mysqli($host, $user, $pass, $db);



		if ($conexion-> connect_errno > 0) {
			echo "ERROR:".$conexion->error."<br>";
		} else {
			
			return $conexion;
		}
	}

	public function desconectar($conexion){
		mysql_close($conexion);
	}
}

 ?>