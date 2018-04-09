function mostrar(){
	var abre = document.getElementById("submenu");


    if (abre.style.visibility == 'hidden') {
        abre.style.visibility = "visible";
        abre.style.opacity = '1';
    } else {

    	abre.style.visibility = 'hidden'
        abre.style.opacity = "0";
        abre.style.zIndex = "99999";
    }
}

function cargarHistorial() {
 	var idUsuario = localStorage.getItem('idUsuario');
 	//alert(idUsuario);
	historialAjax = new XMLHttpRequest();
	historialAjax.open('GET', "https://bus-app.000webhostapp.com/selectHistorial.php?id="+idUsuario);
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
	var a = new Date();
	var hora = a.getHours()+':'+a.getMinutes();
		
	var usuario = localStorage.getItem('idUsuario');
	localStorage.setItem('qrruta', '[Ruta A, Precio: 12.00, '+hora+', Usuario:'+' '+ usuario+ ']' );
	localStorage.setItem('Fecha', a.toLocaleDateString());
	window.location.href='pago.html';

}

function rutaB() {

	localStorage.setItem('ruta', 2);
	var a = new Date();
	var hora = a.getHours()+':'+a.getMinutes();
		
	var usuario = localStorage.getItem('idUsuario');
	localStorage.setItem('qrruta', '[Ruta B, Precio: 8.00, '+hora+', Usuario:'+' '+ usuario+ ']' );
	localStorage.setItem('Fecha', a.toLocaleDateString());
	window.location.href='pago.html';
}

function rutaC() {

	localStorage.setItem('ruta', 3);
	var a = new Date();
	var hora = a.getHours()+':'+a.getMinutes();
		
	var usuario = localStorage.getItem('idUsuario');
	localStorage.setItem('qrruta', '[Ruta C, Precio: 9.50, '+hora+', Usuario:'+' '+ usuario+ ']' );
	localStorage.setItem('Fecha', a.toLocaleDateString());
	window.location.href='pago.html';
}
function rutaD() {

	localStorage.setItem('ruta', 4);
	var a = new Date();
	var hora = a.getHours()+':'+a.getMinutes();
		
	var usuario = localStorage.getItem('idUsuario');
	localStorage.setItem('qrruta', '[Ruta D, Precio: 15.00, '+hora+', Usuario:'+' '+ usuario+ ']' );
	localStorage.setItem('Fecha', a.toLocaleDateString());
	window.location.href='pago.html';
}

function insertarHistorial(){



	var ruta = localStorage.getItem('ruta');

	
	switch(ruta){

		case '1':

			var ruta = "Ruta A";
			var monto = 12.00;
			//localStorage.setItem('qrruta', monto);
			//var a = new Date();
			//localStorage.setItem('Fecha', a);
			var idUsuario = localStorage.getItem('idUsuario');

			//alert(idUsuario);
			nuevoRegistroAjax = new XMLHttpRequest();
			nuevoRegistroAjax.open('GET', 'https://bus-app.000webhostapp.com/insertarHistorial.php?ruta='+ruta+'&monto='+monto+'&idUsuario='+idUsuario);
			nuevoRegistroAjax.send();
			alert("Pagado exitosamnte!");

			nuevoRegistroAjax.onreadystatechange = function(){

				if (nuevoRegistroAjax.readyState == 4 && nuevoRegistroAjax.status == 200) {


							
							if (nuevoRegistroAjax.responseText=="1") {
								//lo que hace cuando sale bien el registro
								//localStorage.setItem('qrruta', '[Ruta A, Precio: 8.50, 11:25]');
								//alert("Insertado al historial");
								window.location.href='qr.html';
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
			nuevoRegistroAjax.open('GET', 'https://bus-app.000webhostapp.com/insertarHistorial.php?ruta='+ruta+'&monto='+monto+'&idUsuario='+idUsuario);
			nuevoRegistroAjax.send();
			alert("Pagado exitosamnte!");
			nuevoRegistroAjax.onreadystatechange = function(){
			

				if (nuevoRegistroAjax.readyState == 4 && nuevoRegistroAjax.status == 200) {
							
							if (nuevoRegistroAjax.responseText=="1") {
								//lo que hace cuando sale bien el registro
								//ocalStorage.setItem('qrruta', '[Ruta B, Precio: 8.50, 11:25]');
								window.location.href='qr.html';
								//alert("Insertado al historial");
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
			nuevoRegistroAjax.open('GET', 'https://bus-app.000webhostapp.com/insertarHistorial.php?ruta='+ruta+'&monto='+monto+'&idUsuario='+idUsuario);
			nuevoRegistroAjax.send();
			
			nuevoRegistroAjax.onreadystatechange = function(){
			

				if (nuevoRegistroAjax.readyState == 4 && nuevoRegistroAjax.status == 200) {
							
							if (nuevoRegistroAjax.responseText=="1") {
								//lo que hace cuando sale bien el registro
								//localStorage.setItem('qrruta', '[Ruta C, Precio: 8.50, 11:25]');
								window.location.href='qr.html';
								alert("Pagado exitosamnte!");
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
				nuevoRegistroAjax.open('GET', 'https://bus-app.000webhostapp.com/insertarHistorial.php?ruta='+ruta+'&monto='+monto+'&idUsuario='+idUsuario);
				nuevoRegistroAjax.send();
				alert("Pagado exitosamnte!");

				nuevoRegistroAjax.onreadystatechange = function(){
					

					if (nuevoRegistroAjax.readyState == 4 && nuevoRegistroAjax.status == 200) {
								
								if (nuevoRegistroAjax.responseText=="1") {
									//lo que hace cuando sale bien el registro
									//localStorage.setItem('qrruta', '[Ruta D, Precio: 8.50, 11:25]');
									window.location.href='qr.html';
									alert("Pagado exitosamnte!");
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
			registroAjax.open('GET', "https://bus-app.000webhostapp.com/registrarUsuarios.php?nombre="+nombre+"&mail="+mail+"&pass="+pass1+"&ape="+apellido+"&cel="+celular);
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
		console.log("Ajax");
		inicioAjax = new XMLHttpRequest();
		inicioAjax.open('GET', 'https://bus-app.000webhostapp.com/selectUsuarios.php?cel='+celular+'&pass='+pass);
		inicioAjax.send();
		inicioAjax.onreadystatechange = function(){
			if (inicioAjax.readyState == 4 && inicioAjax.status == 200) {
				if (inicioAjax.responseText!="0") {
						localStorage.setItem('idUsuario', inicioAjax.responseText);
						window.location.href = 'inicio.html';
						
					}else{
						alert("Datos incorrectos.")
					}
				
				
			}
		}
	}
} 



