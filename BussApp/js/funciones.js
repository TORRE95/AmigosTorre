function mostrar(){
	var abre = document.getElementById("submenu");


    if (abre.style.display == 'block') {
        abre.style.display = "none";
    } else {
        abre.style.display = "block";
        abre.style.zIndex = "99999";
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
						"<div class='viajeIzq'>"+
							"<ul>"+
								"<li><label>"+historial[i].ruta+"</label></li>"+
								"<li><label>"+historial[i].fecha+"</label></li>"+
							"</ul>"+
						"</div>"+
						"<div class='viajeDer'>"+
							"<ul>"+
								"<li><label>$"+historial[i].importe+"</label></li>"+
							"</ul>"+
						"</div>";
				document.querySelector('section').innerHTML += info;
			}
			
			
		}
	}
}

function registrar() {
	
	
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("ape").value;
	var mail = document.getElementById("mail").value;
	var pass1 = document.getElementById("pass1").value;
	var pass2 = document.getElementById("pass2").value;
	var celular = document.getElementById("num").value;

	if (nombre != "" && mail != "" && pass1 != "" && pass2 != "" && apellido != "" && celular != "" && pass1 == pass2) {
	
	
			registroAjax = new XMLHttpRequest();
			registroAjax.open('GET', "php/registrarUsuarios.php?nombre="+nombre+"&mail="+mail+"&pass="+pass1+"&ape="+apellido+"&cel="+celular);
			registroAjax.send();
			alert("¡Registrado exitosamente!");

			registroAjax.onreadystatechange = function(){
				if (registroAjax.readyState == 4 && registroAjax.status == 200) {
					
					if (registroAjax.responseText=="1") {
						//lo que hace cuando sale bien el registro
						window.location.href='index.html';
					}
					else{

						alert("Error inesperado, intente más tarde")
					}
				}
			}
		
	}
}

function inicioSesion() {
	console.log("iniciando");
	
	var celular = document.getElementById('cel').value;

	var pass = document.getElementById('pass').value;



	if(celular != "" && pass != ""){
		inicioAjax = new XMLHttpRequest();
		inicioAjax.open('GET', 'php/selectUsuarios.php?cel='+celular+'&pass='+pass);
		inicioAjax.send();
		inicioAjax.onreadystatechange = function(){
			if (inicioAjax.readyState == 4 && inicioAjax.status == 200) {
				if (inicioAjax.responseText!="0") {
						localStorage.setItem('idUsuario', inicioAjax.responseText);
						window.location.assign('inicio.html');
					}else{
						alert("Datos incorrectos.")
					}
				
				
			}
		}
	}
} 