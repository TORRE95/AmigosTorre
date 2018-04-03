function inicioSesion() {
	
	var mail = document.getElementById('mail').value;
	var pass = document.getElementById('pass').value;
	if(mail != "" && pass != ""){
		inicioAjax = new XMLHttpRequest();
		inicioAjax.open('GET', 'php/selectUsuarios.php?mail='+mail+'&pass='+pass);
		inicioAjax.send();
		inicioAjax.onreadystatechange = function(){
			if (inicioAjax.readyState == 4 && inicioAjax.status == 200) {
				//inicio = JSON.parse(inicioAjax.responseText);
				if (inicioAjax.responseText=="0") {
						window.location.assign('dashboard.html');
					}

				if (inicioAjax.responseText == "1") {
							window.location.assign('dashboardS.html');
						}
				if (inicioAjax.responseText == "Error") {
							alert("Datos incorrectos.");
						}
				
				
			}
		}
	}
} 

function registrar() {
	var nombre = document.getElementById("nombre").value;
	var mail = document.getElementById("mail").value;
	var pass1 = document.getElementById("pass1").value;
	var pass2 = document.getElementById("pass2").value;
	if (nombre != "" && mail != "" && pass1 != "" && pass2 != "") {
		if (pass1 == pass2) {
			registroAjax = new XMLHttpRequest();
			registroAjax.open('GET', "php/registrarUsuarios.php?nombre="+nombre+"&mail="+mail+"&pass1="+pass1);
			registroAjax.send();
			registroAjax.onreadystatechange = function(){
				if (registroAjax.readyState == 4 && registroAjax.status == 200) {
					
					if (registroAjax.responseText=="1") {
						sessionStorage.setItem("nombre", nombre);
						//lo que hace cuando sale bien el registro
						location.href='index.html';
					}
					else{

						alert("Error inesperado, intente más tarde")
					}
				}
			}
		}
	}
}

function registrarServidor() {
	var nombre = document.getElementById("nombre").value;
	var mail = document.getElementById("mail").value;
	var pass1 = document.getElementById("pass1").value;
	var pass2 = document.getElementById("pass2").value;
	var ubicacion = document.getElementById("ubicacion").value;
	if (nombre != "" && mail != "" && pass1 != "" && pass2 != "" && ubicacion != "") {
		if (pass1 == pass2) {
			registroAjax = new XMLHttpRequest();
			registroAjax.open('GET', "php/registrarServer.php?nombre="+nombre+"&mail="+mail+"&pass1="+pass1+"&ubicacion="+ubicacion+"");
			registroAjax.send();
			registroAjax.onreadystatechange = function(){
				if (registroAjax.readyState == 4 && registroAjax.status == 200) {
					
					if (registroAjax.responseText=="1") {
						sessionStorage.setItem("nombre", nombre);
						//lo que hace cuando sale bien el registro
						window.location.assign('index.html');
					}
					else{

						// lo que quieras hacer si no se registra bien
					}
				}
			}
		}
	}
}

function cargarHistorial() {
	historialAjax = new XMLHttpRequest();
	historialAjax.open('POST', "php/selectHistorial.php");
	historialAjax.send();
	historialAjax.onreadystatechange = function(){
		if (historialAjax.readyState == 4 && historialAjax.status == 200) {
			historial = JSON.parse(historialAjax.responseText);
			for (var i = 0; i < historial.length; i++) {
				var info = 
						"<div class='estadisticas'>"+
							"<span>"+historial[i].nombreArchivo+"</span><br>"+
							"<span>"+historial[i].monto+"</span>"+
						"</div>";
				document.querySelector('section').innerHTML += info;
			}
			
			
		}
	}
}

function orden() {
	ordenAjax = new XMLHttpRequest();
	ordenAjax.open('POST', "php/selectHistorial.php");
	ordenAjax.send();
	ordenAjax.onreadystatechange = function(){
		if (ordenAjax.readyState == 4 && ordenAjax.status == 200) {
			orden = JSON.parse(ordenAjax.responseText);
			for (var i = 0; i < orden.length; i++) {
				var info = 
						"<div class='estadisticas'>"+
							"<span>"+orden[i].nombreArchivo+"</span><br>"+
							"<span>"+orden[i].monto+"</span>"+
						"</div>";
				document.querySelector('section').innerHTML += info;
			}
			
			
		}
	}
}