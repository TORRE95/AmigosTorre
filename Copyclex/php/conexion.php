<?php 

class Funciones {
	public function conectar() {
		$host = "localhost";
		$user = "id5093318_root";
		$pass = "copyclex";
		$db = "id5093318_copyclex";

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