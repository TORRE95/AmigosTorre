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




function rutaA() {

	localStorage.setItem('ruta', 1);
	window.location.href='pago.html';
}

function rutaB() {

	localStorage.setItem('ruta', 2);
	window.location.href='pago.html';
}

function rutaC() {

	localStorage.setItem('ruta', 3);
	window.location.href='pago.html';
}
function rutaD() {

	localStorage.setItem('ruta', 4);
	window.location.href='pago.html';
}

function insertarHistorial(){



	var ruta = localStorage.getItem('ruta');

	
	switch(ruta){

		case '1':

			var ruta = "Ruta A";
			var monto = 12.00;
			var idUsuario = localStorage.getItem('idUsuario');

			//alert(idUsuario);
			nuevoRegistroAjax = new XMLHttpRequest();
			nuevoRegistroAjax.open('GET', 'php/insertarHistorial.php?ruta='+ruta+'&monto='+monto+'&idUsuario='+idUsuario);
			nuevoRegistroAjax.send();
			alert("Pagado exitosamnte!");

			nuevoRegistroAjax.onreadystatechange = function(){

				if (nuevoRegistroAjax.readyState == 4 && nuevoRegistroAjax.status == 200) {


							
							if (nuevoRegistroAjax.responseText=="1") {
								//lo que hace cuando sale bien el registro
								//window.location.href='index.html';
								alert("Insertado al historial");
							}
							else{

								alert("Error inesperado, intente más tarde")
							}
						}
					}
				break;


		case '2':
			
			var ruta = "Ruta B";
			var monto = 8.00;
			var idUsuario = localStorage.getItem('idUsuario');
			


			nuevoRegistroAjax = new XMLHttpRequest();
			nuevoRegistroAjax.open('GET', 'php/insertarHistorial.php?ruta='+ruta+'&monto='+monto+'&idUsuario='+idUsuario);
			nuevoRegistroAjax.send();

			nuevoRegistroAjax.onreadystatechange = function(){
				console.log("pagado");

				if (nuevoRegistroAjax.readyState == 4 && nuevoRegistroAjax.status == 200) {
							
							if (nuevoRegistroAjax.responseText=="1") {
								//lo que hace cuando sale bien el registro
								//window.location.href='index.html';
								alert("Insertado al historial");
							}
							else{

								alert("Error inesperado, intente más tarde")
							}
						}
					}
				break;


		case '3':


			var ruta = "Ruta C";
			var monto = 9.50;
			var idUsuario = localStorage.getItem('idUsuario');

			//alert(idUsuario);
			nuevoRegistroAjax = new XMLHttpRequest();
			nuevoRegistroAjax.open('GET', 'php/insertarHistorial.php?ruta='+ruta+'&monto='+monto+'&idUsuario='+idUsuario);
			nuevoRegistroAjax.send();

			nuevoRegistroAjax.onreadystatechange = function(){
				console.log("pagado");

				if (nuevoRegistroAjax.readyState == 4 && nuevoRegistroAjax.status == 200) {
							
							if (nuevoRegistroAjax.responseText=="1") {
								//lo que hace cuando sale bien el registro
								//window.location.href='index.html';
								alert("Insertado al historial");
							}
							else{

								alert("Error inesperado, intente más tarde")
							}
						}
					}
				break;


		case '4':

				var ruta = "Ruta D";
				var monto = 15.00;
				var idUsuario = localStorage.getItem('idUsuario');

				//alert(idUsuario);
				nuevoRegistroAjax = new XMLHttpRequest();
				nuevoRegistroAjax.open('GET', 'php/insertarHistorial.php?ruta='+ruta+'&monto='+monto+'&idUsuario='+idUsuario);
				nuevoRegistroAjax.send();

				nuevoRegistroAjax.onreadystatechange = function(){
					console.log("pagado");

					if (nuevoRegistroAjax.readyState == 4 && nuevoRegistroAjax.status == 200) {
								
								if (nuevoRegistroAjax.responseText=="1") {
									//lo que hace cuando sale bien el registro
									//window.location.href='index.html';
									alert("Insertado al historial");
								}
								else{

									alert("Error inesperado, intente más tarde")
								}
							}
						}
				break;


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



