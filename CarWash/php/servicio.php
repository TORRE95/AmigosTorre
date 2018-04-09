<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
<link rel="stylesheet" type="text/css" href="../css/OneLineCSS.css">
<link rel="stylesheet" type="text/css" href="../css/menuDes.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css" integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1" crossorigin="anonymous">
<script src="../js/menuDes.js"></script>
<script type="text/javascript" src="../js/jquery-3.3.1.min.js"></script>
<title>Pedir servicio</title>
</head>

<body background="../img/fondoIndex.jpg">
	<center>
	<h1 class="center-vertical" style="color: aliceblue">Mobil Wash</h1>
	<form action="../php/servicios.php" method="post">
		<input type="text" placeholder=" Dirección" required maxlength="200" name="dir" id="dir"><br>
		<input type="text" placeholder=" Entre calles" required maxlength="200" name="ent" id="ent"><br>
		<input type="text" placeholder=" Característica(s)" required maxlength="200" name="car" id="car"><br>
		<select name="pag" id="pag">
			<option value="efectivo">Efectivo</option>
			<option value="credito">Tarjeta de Crédito</option>
			<option value="debito">Tarjeta de Débito</option>
			<option value="otro">Otro</option>
		</select><br>
		<select name="paq" id="paq">
			<option value="1">Paquete I</option>
			<option value="2">Paquete II</option>
			<option value="3">Paquete III</option>
		</select><br>
		<?php
		session_start();
		$use = $_SESSION['user'];
		?>
		<input type="button" value="SOLICITAR" class="bt bt-df" onClick="javascript:enviar_datos();">
		<input type="text" value="<?= $use?>" name="use" style="visibility: hidden;" id="use">
	</form>
	</center>
<script>
	function enviar_datos() {
		var dir = document.getElementById('dir').value;
		var ent = document.getElementById('ent').value;
		var car = document.getElementById('car').value;
		var pag = document.getElementById('pag').value;
		var paq = document.getElementById('paq').value;
		var use = document.getElementById('use').value;
		
		$.ajax({
			type:'POST',
			url:'servicios.php',
			data:('dir='+dir+'&ent='+ent+'&car='+car+'&pag='+pag+'&paq='+paq+'&use='+use),
			success:function(respuesta) {
				if(respuesta == 0) {alert('¡Pedido exitoso!');window.location.replace('../html/gracias.html');}
				if(respuesta == 1) {alert('¡Error al procesar pedido!');}
			}
		})
	}
</script>
</body>
</html>
