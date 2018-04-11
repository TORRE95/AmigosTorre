function registrar() {
	var mail = document.getElementById('mail').value;
	var user = document.getElementById('user').value;
	var pass = document.getElementById('pass').value;
	var pswrd = document.getElementById('pass2').value;
	var url = "https://frincon20.000webhostapp.com/registrar.php?user="+user+"&mail="+mail+"&pass="+pass;
	if (user != "" && mail != "" && pass != "" && pswrd != "") {
		if (pass == pswrd) {
			registroAjax = new XMLHttpRequest();
			registroAjax.open('GET', url);
			registroAjax.send();
			registroAjax.onreadystatechange = function(){
				if (registroAjax.readyState == 4 && registroAjax.status == 200) {
					
					if (registroAjax.responseText=="1") {
						//lo que hace cuando sale bien el registro
						location.href='../index.html';
						alert("¡ Registro exitoso !")
					}
					else{

						alert("Error inesperado, intente más tarde")
					}
				}
			}
		}
	}
}


function iniciarSesion(){
	var user = document.getElementById('user').value;
	var pass = document.getElementById('pass').value;
	if(user != "" && pass !=""){
		inicioAjax = new XMLHttpRequest();
		inicioAjax.open('GET', 'https://frincon20.000webhostapp.com/login.php?user='+user+'&pass='+pass);
		inicioAjax.send();
		
		inicioAjax.onreadystatechange = function(){
			
			inicio = JSON.parse(inicioAjax.responseText);

			if (inicioAjax.readyState == 4 && inicioAjax.status == 200) {

				if (inicio[0].Correo == user && inicio[0].Password == pass) {
					localStorage.setItem('idUsuario',  inicio[0].idUsuario);
					localStorage.setItem('nombreUsuario', inicio[0].Usuario)
					window.location = "html/inicio.html";
					//console.log("HOLA");
				}else{
					//console.log("ADIOS");
					alert("Usuario y/o contraseña incorrecto");
				}
			}			
			
		}
	}
}

function paquetes(nombre){

	switch(nombre){
		case "Splash Autolavado":{
			var info = 
		"<center>"+
			"<div class='container'>"+
				"<h2  class='tlt-info txt-cntr'>Paquete I</h2>"+
					"<p>Aspirado</p>"+
				"<p style='font-weight: bold'>Precio: $50</p>"+
			"</div>"+
			"<div class='container'>"+
				"<h2  class='tlt-info txt-cntr'>Paquete II</h2>"+
				"<p>Lavado exterior</p>"+
				"<p>Lavado interior (alfombra y asientos)</p>"+
				"<p>Aspirado</p>"+
				"<p style='font-weight: bold'>Precio: $250</p>"+
			"</div>"+
			"<div class='container'>"+
				"<h2  class='tlt-info txt-cntr'>Paquete III</h2>"+
				"<p>Lavado exterior</p>"+
				"<p>Lavado interior (alfombra y asientos)</p>"+
				"<p>Aspirado</p>"+
				"<p>Lavado de motor, chasís y suspensión</p>"+
				"<p>Pulido y encerado</p>"+
				"<p style='font-weight: bold'>Precio: $600</p>"+
			"</div><br>"+
			"<a href='servicio.html'><button class='bt bt-df' style='font-weight: bold'>SOLICITA UN PAQUETE</button></a>"+
			"</center>";

			break;
		}
		case "Autolavado Express":{
			var info = 
		"<center>"+
			"<div class='container'>"+
				"<h2  class='tlt-info txt-cntr'>Paquete I</h2>"+
					"<p>Lavado Sencillo (Exterior)</p>"+
				"<p style='font-weight: bold'>Precio: $80</p>"+
			"</div>"+
			"<div class='container'>"+
				"<h2  class='tlt-info txt-cntr'>Paquete II</h2>"+
				"<p>Lavado exterior</p>"+
				"<p>Lavado interior (alfombra y asientos)</p>"+
				"<p>Aspirado</p>"+
				"<p style='font-weight: bold'>Precio: $200</p>"+
			"</div>"+
			"<div class='container'>"+
				"<h2  class='tlt-info txt-cntr'>Paquete III</h2>"+
				"<p>Lavado exterior</p>"+
				"<p>Lavado interior (alfombra y asientos)</p>"+
				"<p>Aspirado</p>"+
				"<p>Lavado de motor, chasís y suspensión</p>"+
				"<p>Pulido y encerado</p>"+
				"<p style='font-weight: bold'>Precio: $500</p>"+
			"</div><br>"+
			"<a href='servicio.html'><button class='bt bt-df' style='font-weight: bold'>SOLICITA UN PAQUETE</button></a>"+
			"</center>";

			break;
		}
		case "Green Wash":{
			var info = 
		"<center>"+
			"<div class='container'>"+
				"<h2  class='tlt-info txt-cntr'>Paquete I</h2>"+
					"<p>Lavado Interior</p>"+
					"<p>Aspirado</p>"+
				"<p style='font-weight: bold'>Precio: $150</p>"+
			"</div>"+
			"<div class='container'>"+
				"<h2  class='tlt-info txt-cntr'>Paquete II</h2>"+
				"<p>Lavado exterior</p>"+
				"<p>Lavado interior (alfombra y asientos)</p>"+
				"<p>Aspirado</p>"+
				"<p>Encerado</p>"+
				"<p style='font-weight: bold'>Precio: $320</p>"+
			"</div>"+
			"<div class='container'>"+
				"<h2  class='tlt-info txt-cntr'>Paquete III</h2>"+
				"<p>Lavado exterior</p>"+
				"<p>Lavado interior (alfombra y asientos)</p>"+
				"<p>Aspirado</p>"+
				"<p>Lavado de motor, chasís y suspensión</p>"+
				"<p>Pulido y encerado</p>"+
				"<p style='font-weight: bold'>Precio: $600</p>"+
			"</div><br>"+
			"<a href='servicio.html'><button class='bt bt-df' style='font-weight: bold'>SOLICITA UN PAQUETE</button></a>"+
			"</center>";

			break;
		}
		case "Burbujas Car":{
			var info = 
		"<center>"+
			"<div class='container'>"+
				"<h2  class='tlt-info txt-cntr'>Paquete I</h2>"+
					"<p>Aspirado</p>"+
				"<p style='font-weight: bold'>Precio: $120</p>"+
			"</div>"+
			"<div class='container'>"+
				"<h2  class='tlt-info txt-cntr'>Paquete II</h2>"+
				"<p>Lavado exterior</p>"+
				"<p>Lavado interior (alfombra y asientos)</p>"+
				"<p>Aspirado</p>"+
				"<p style='font-weight: bold'>Precio: $250</p>"+
			"</div>"+
			"<div class='container'>"+
				"<h2  class='tlt-info txt-cntr'>Paquete III</h2>"+
				"<p>Lavado exterior</p>"+
				"<p>Lavado interior (alfombra y asientos)</p>"+
				"<p>Aspirado</p>"+
				"<p>Lavado de motor, chasís y suspensión</p>"+
				"<p>Pulido y encerado</p>"+
				"<p style='font-weight: bold'>Precio: $600</p>"+
			"</div><br>"+
			"<a href='servicio.html'><button class='bt bt-df' style='font-weight: bold'>SOLICITA UN PAQUETE</button></a>"+
			"</center>";

			break;
		}
	}
	
	localStorage.setItem('construc', info);
	location.href = "paquetes.html";
}
function cargarPaquetes(){
	document.querySelector('section').innerHTML += localStorage.getItem('construc');
}
function cargarSucursales(){
	sucursalAjax = new XMLHttpRequest();
	sucursalAjax.open('GET', "https://frincon20.000webhostapp.com/getSucursales.php");
	sucursalAjax.send();
	sucursalAjax.onreadystatechange = function(){
		if (sucursalAjax.readyState == 4 && sucursalAjax.status == 200) {
			sucursal = JSON.parse(sucursalAjax.responseText);
			for (var i = 0; i < sucursal.length; i++) {
				var info = 
							"<div class = 'grupo' id='cont1' onclick='paquetes("+'"'+sucursal[i].nombreSucursal+'"'+");'"+">"+
								"<div class='cont-img'>"+
									"<img class='img' src='"+sucursal[i].rutaFoto+"'>"+
								"</div>"+
								"<div class='info'>"+
									"<h2 class='tlt-info txt-cntr'>"+sucursal[i].nombreSucursal+"</h2>"+
									"<ul>"+
										"<li>Dirección: "+sucursal[i].direccion+"</li>"+
										"<li>Encargado: "+sucursal[i].dueño+"</li>"+
										"<li>Tel:"+sucursal[i].telefono+"</li>"+
										"<li>"+sucursal[i].horario+"</li>"+
									"</ul>"+
								"</div>"+
						"</div>";
				document.querySelector('section').innerHTML += info;
			}
			
			
		}
	}
}

function mostrar() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("contenido").style.marginLeft = "300px";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
}

function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("contenido").style.marginLeft = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}

function printNombre() {
	var nombre = localStorage.getItem('nombreUsuario');
	document.getElementById('nombreUser'). value = nombre;
	
}

function enviar_datos() {
	var dir = document.getElementById('dir').value;
	var pag = document.getElementById('pag').value;
	var paq = document.getElementById('paq').value;
	var nombre = localStorage.getItem('idUsuario');
	var url = "https://frincon20.000webhostapp.com/registrarOrden.php?dir="+dir+"&pag="+pag+"&paq="+paq+"&idUsuario="+nombre;
	console.log(url)
	registroAjax = new XMLHttpRequest();
	registroAjax.open('GET', url);
	registroAjax.send();
	registroAjax.onreadystatechange = function(){
		if (registroAjax.readyState == 4 && registroAjax.status == 200) {
		
			if (registroAjax.responseText=="1") {
				alert('¡Pedido exitoso!');
				window.location = "gracias.html";
			}
			else{
				alert("Error inesperado, intente más tarde");
			}
		}
	}
}

