<?php 

class Funciones {
	public function conectar() {
		$host = "localhost";
		$user = "id5128008_root";
		$pass = "12345";
		$db = "id5128008_bussapp";

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