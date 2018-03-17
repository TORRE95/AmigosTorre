function inicioSesion() {
	
	var mail = document.getElementById('mail').value;
	var pass = document.getElementById('pass').value;
	if(mail != "" && pass != ""){
		inicioAjax = new XMLHttpRequest();
		inicioAjax.open('POST', "php/selectUsuarios.php");
		inicioAjax.send();
		inicioAjax.onreadystatechange = function(){
			if (inicioAjax.readyState == 4 && inicioAjax.status == 200) {
				inicio = JSON.parse(inicioAjax.responseText);
				for (var i = 0; i < inicio.length; i++) {

					if(mail == inicio[i].correo && pass == inicio[i].pass){
						sessionStorage.setItem("nombre", inicio[i].nombre);
						location.href = "inicio.html";
						break;
					}else{
						if (inicio[i] == inicio.length && mail != inicio[i].correo) {
							alert("Correo y/o contraseña incorrectos")
						}else if(inicio[i] == inicio.length && pass == inicio[i].pass){
							alert("Correo y/o contraseña incorrectos")
						}
					}
				}
				
				
			}
		}
	}
} 

function registrar() {
	var nombre = document.getElementById("nombre").value;
	var apellidos = document.getElementById("apellidos").value;
	var mail = document.getElementById("mail").value;
	var pass1 = document.getElementById("pass1").value;
	var pass2 = document.getElementById("pass2").value;
	//alert(nombre+apellidos+mail+pass1+pass2)
		if (nombre != "" && mail != "" && pass1 != "" && pass2 != "" && apellidos != "") {
			if (pass1 == pass2) {
				registroAjax = new XMLHttpRequest();
				registroAjax.open('GET', "php/registrarUsuarios.php?nombre="+nombre+"&mail="+mail+"&pass1="+pass1+"&apellidos"+apellidos);
				registroAjax.send();
				registroAjax.onreadystatechange = function(){
					if (registroAjax.readyState == 4 && registroAjax.status == 200) {
						
						if (registroAjax.responseText=="1") {
							console.log(registroAjax.responseText);
							//lo que hace cuando sale bien el registro
							sessionStorage.setItem("nombre", nombre);
							location.href="inicio.html";
						}
						else{

							// lo que quieras hacer si no se registra bien
						}
					}
				}
			}
		}
}
function getNombre() {
	var div ="Hola "+ sessionStorage.getItem('nombre');
	document.querySelector('h1').innerHTML = div;

}
function cerrar() {
	lol = document.getElementById('btnCerrar')
	lol.style.backgroundColor = "transparent";
	lol.style.border="none";
	lol.style.zIndex ="-9"
	lol.innerHTML = "";

}


function redireccion1(){
	window.location="acercaDe.html";
}


function redireccion2(){
	window.location="app.html";
}
function redireccion3() {
	window.location="pago.html";
}

function noBack() {
	window.location.hash="no-back-button";
	window.location.hash="Again-No-back-button";
	window.onhashchange=function(){
		window.location.hash="";
	}
}

function tips() {
	var section = 
			"<center><b><p id='grande'>TIPS</p></b></center>"+
			"<center>"+
				"<div class='video'>"+
					"<iframe width='90%' height='180px' src='https://www.youtube.com/embed/4NhTfaHXCaQ' "+
					"frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>"+
				"</div>"+
			"</center>"+
			"<div id='margen'>"+
			"<div>"+
				"<ul class='list-unstyled'>"+
				 	"<li class='media'>"+
					    "<div class='media-body'>"+
					      "<b><p class='mt-0 mb-1' id='grande'>Quema con un encendedor la punta del delineador de ojos</p></b>"+
					      "Agarra tu lápiz delineador de ojos y con ayuda de un encendedor coloca la llama en la punta por un segundo, deja que se enfríe un poco y notarás el cambio en su consistencia. Además, así es menos probable que el trazo se corra."+
					    "</div>"+
				  	"</li>"+
				  	"<img class='mr-3' src='images/Make-up-3.webp' width='200px' height='150px' alt='1'><li><br></li>"+
				 	"<li class='media'>"+
					    "<div class='media-body'>"+
					      "<b><p class='mt-0 mb-1' id='grande'>Si quieres que tu sombras resalten, pinta primero tu párpado con delineador blanco</p></b>"+
					     "Para que la sombra de ojos destaque, toma un lápiz delineador de color blanco y rellena tus párpados. El tono opaco del blanco hará más intenso cualquier color de sombra que apliques."+
					    "</div>"+
			  		"</li>"+
				  	"<img class='mr-3' src='images/3.webp' width='200px' height='150px' alt='2'><li><br></li>"+
				 	"<li class='media'>"+
					    "<div class='media-body'>"+
					      "<b><p class='mt-0 mb-1' id='grande'>Para hacer el estilo “ojo de gato”, primero dibuja el contorno dejando un espacio abierto</p></b>"+
					      "Es más fácil lograr un “ojo de gato” si primero pintas el contorno y después rellenas el espacio interior con un pincel."+
					    "</div>"+
				  	"</li>"+
					"<img class='mr-3' src='images/2.webp' width='200px' height='150px' alt='3'><li><br></li>"+
				"</ul>"+
			"</div>"+
		"</div>";
	document.querySelector('section').innerHTML = section;
	var nav =  document.getElementById('navbarSupportedContent');
	nav.className = "collapse navbar-collapse";
}

function ubica() {
	var llenado = 
	"<div class='est'>"+
		"<ul class='list-unstyled'>"+
		 	"<li class='media'>"+
		    	"<img class='mr-3' src='images/est1.jpg' width='80px' height='80px' alt='imgEstilista'>"+
		    	"<div class='media-body'>"+
		    		"<h5 class='mt-0 mb-1'>Marco Antonio Lira González</h5>"+
		      		"<button class='btn btn-secondary' onclick='verPerfil();'>Ver perfil</button><p>A 1.5km de ti</p>"+
		    	"<div>"+
		  	"</li><br>"+
		  	"<li class='media'>"+
		    	"<img class='mr-3' src='images/est2.jpg' width='80px' height='80px' alt='imgEstilista'>"+
		    	"<div class='media-body'>"+
		      		"<h5 class='mt-0 mb-1'>Ramón Serrato Jiménez</h5>"+
		      		"<button class='btn btn-secondary' onclick='verPerfil();'>Ver perfil</button><p>A 1.8km de ti</p>"+
		    	"<div>"+
		  	"</li><br>"+
		  	"<li class='media'>"+
		    	"<img class='mr-3' src='images/est3.jpg' width='80px' height='80px' alt='imgEstilista'>"+
		    	"<div class='media-body'>"+
		      		"<h5 class='mt-0 mb-1'>Andrea Rodríguez Álvarez</h5>"+
		      		"<button class='btn btn-secondary' onclick='verPerfil();'>Ver perfil</button><p>A 2.5km de ti</p>"+
		    	"<div>"+
		  	"</li><br>"+
		  	"<li class='media'>"+
		    	"<img class='mr-3' src='images/est4.jpg' width='80px' height='80px' alt='imgEstilista'>"+
		    	"<div class='media-body'>"+
		      		"<h5 class='mt-0 mb-1'>Cecilia Domínguez Ocampo</h5>"+
		      		"<button class='btn btn-secondary' onclick='verPerfil();'>Ver perfil</button><p>A 2.5km de ti</p>"+
		    	"<div>"+
		  	"</li><br>"+
		  	"<li class='media'>"+
		    	"<img class='mr-3' src='images/est6.jpg' width='80px' height='80px' alt='imgEstilista'>"+
		    	"<div class='media-body'>"+
		      		"<h5 class='mt-0 mb-1'>Diana Paulina González Tellez</h5>"+
		      		"<button class='btn btn-secondary' onclick='verPerfil();'>Ver perfil</button><p>A 5km de ti</p>"+
		    	"<div>"+
		  	"</li><br>"+
		  	"<li class='media'>"+
		    	"<img class='mr-3' src='images/est5.jpg' width='80px' height='80px' alt='imgEstilista'>"+
		    	"<div class='media-body'>"+
		      		"<h5 class='mt-0 mb-1'>Estefanía Morales Becerril</h5>"+
		      		"<button class='btn btn-secondary' onclick='verPerfil();'>Ver perfil</button><p>A 5.3km de ti</p>"+
		    	"<div>"+
		  	"</li><br>"+
		"</ul>"
	"</div>";
	document.querySelector('section').innerHTML = llenado;
	//var section="<span class='estilistas' onload='ubica()'></span>";
	//document.querySelector('section').innerHTML = section;
	// estilista = new XMLHttpRequest();
	// estilista.open('POST', "php/selectEstilistas.php");
	// estilista.send();
	// estilista.onreadystatechange = function(){
	// 	if (estilista.readyState == 4 && estilista.status == 200) {
	// 		datos = JSON.parse(estilista.responseText);
	// 		for (var i = 0; i < datos.length; i++) {
	// 			div = "<div><p>"+datos[i].nombre+"</p>"+
	// 					"<button>Ver estilista</button></div>";

	// 			//console.log(div);
	// 			document.querySelector('span').innerHTML += div;
	// 		}
			
				
	// 	}
	// }
	var nav =  document.getElementById('navbarSupportedContent');
	nav.className = "collapse navbar-collapse";
}
// function hide() {
// 	//var boton = document.getElementById('boton');
// 	var agenda = document.getElementById('article');
// 	agenda.setAtribute( "hide");
// }
function verPerfil() {
	var perfil =
	"<div>"+
		"<center>"+
			"<img src='images/est1.jpg' alt='1' width='200px' height='200px' id='imgPerfil'><br>"+
			"<b><p>Marco Antonio Lira González</p>"+
			"<p>Celaya, Guanajuato</p>"+
			"<p>mail@mail.com</p></center>"+
			"<p>Si desean lucir hermosas y radiantes eneventos sociales, el maquillista profesional Marco Antonio les "+
			"ofrecerá un servicio de calidad garantizada cuidando cada detalle."+
			" Para esta profesional, su belleza es sumamente importante, pues sabe que deben lucir hermosas y seguras."+
			"Servicios que ofrece:"+
			"Marco Antonio pondrá a su disposición un excelente paquete de servicios para cualquier evento social."+
			" Cuentan con servicio para novias, XV años y eventos sociales. El trabajo de esta profesional es fino y bien cuidado."+
			" Cuentan con servicio de maquillaje en alta definición para las fotos y alto peinado.</p>"+
			"<center><p>Calificación: 4.8 / 5</p></b>"+
			"</center>"+
			"<div class='dropdown'>"+
				"<button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenu2' data-toggle='dropdown'"+
				" aria-haspopup='true' aria-expanded='false'>Agendar cita</button>"+
				"<div class='dropdown-menu' aria-labelledby='dropdownMenu2'>"+
					"<div class='margen'>"+
						"<b><p>Elige un día y la hora: </p><input type='datetime-local' class='form-control'></b><br>"+
						"<button class='btn btn-secondary' onclick='redireccion3()'>Pagar</button>"+
					"</div>"+
				"</div>"+
			"</div>"+
	"</div>";
	document.querySelector('section').innerHTML = perfil;
}
// "<div id='margen'>"+
// 		"<b><p>Elige un día y la hora: </p><input type='datetime-local' class='form-control'></b><br>"+
// 		"<button class='btn btn-secondary' onclick='redireccion3()'>Pagar</button>"+
// 	"</div>";
// function agendar(){
// 	var cita = 
	
// 	document.querySelector('article').innerHTML = cita;
// }

function adquiere() {
	var section = "<div class='tips3'><p>ADQUIERE</p></div>"
	document.querySelector('section').innerHTML = section;
}

function tarjetas(){
	var section = 
	"<b>"+
		"<h2 class='font-italic'>Tarjeta de crédito/débito</h2><br>"+
		"<div class='form-group'>"+
			"<label>"+
				"Nombre del titular de la tarjeta"+
				"<input type='text' id='nombre' class='form-control' required placeholder='Nombre del titular'>"+
			"</label>"+
		"</div>"+
		"<div class='form-group'>"+
			"<label>"+
				"Número de tarjeta"+
				"<input type='number' id='numeroTarjeta' class='form-control' placeholder='16 dígitos' minlength='16' maxlength='16' required>"+
			"</label>"+
		"</div>"+
		"<div  class='input-group mb-3'>"+
			"<p class='input-group-text'>MM/YY</p>"+
			"<select id='mes' class='custom-select'>"+
				"<option value='1'>1</option>"+
				"<option value='2'>2</option>"+
				"<option value='3'>3</option>"+
				"<option value='4'>4</option>"+
				"<option value='5'>5</option>"+
				"<option value='6'>6</option>"+
				"<option value='7'>7</option>"+
				"<option value='8'>8</option>"+
				"<option value='9'>9</option>"+
				"<option value='10'>10</option>"+
				"<option value='11'>11</option>"+
				"<option value='12'>12</option>"+
			"</select>"+
			"<select id='year' class='custom-select'>"+
				"<option value='2018'>2018</option>"+
				"<option value='2019'>2019</option>"+
				"<option value='2020'>2020</option>"+
				"<option value='2021'>2021</option>"+
				"<option value='2022'>2022</option>"+
				"<option value='2023'>2023</option>"+
				"<option value='2024'>2024</option>"+
				"<option value='2025'>2025</option>"+
				"<option value='2026'>2026</option>"+
				"<option value='2027'>2027</option>"+
				"<option value='2028'>2028</option>"+
				"<option value='2029'>2029</option>"+
			"</select>"+
		"</div>"+
		"<div class='form-group'>"+
			"<label>"+
				"Código de Seguridad: <input type='number' id='cv' placeholder='3 dígitos' class='form-control'>"+
			"</label>"+
		"</div>"+
		"<div>"+
			"<center><input type='button' id='button' value='Pagar' class='btn btn-primary' onclick='redireccionX()'></center>"+
		"</div>"+
	"</b>";
	document.querySelector('section').innerHTML = section;
}

function redireccionX(){
	var nombre =  document.getElementById('nombre').value;
	var numTarjeta = document.getElementById('numeroTarjeta').value;
	var mes = document.getElementById('mes').value;
	var year = document.getElementById('year').value;
	var cv = document.getElementById('cv').value;
	if(nombre != "" && numTarjeta != "" && mes != "" && year != "" && cv !=""){
		if (cv.length != 3 && numTarjeta.length != 16 || cv.length !=3 && numTarjeta.length == 16 || numTarjeta.length != 16 && cv.length == 3) {
			alert("El código de seguridad tiene que contener solo 3 números y la tarjeta es de 16 números");
		}else{
			alert("Tarjeta aceptada, ya eres premium :)");
			redireccion2();
		}
	}else{
		alert("Campos vacíos, verifica y vuelve a intentar");
	}
}

function efectivo(){
	var section =
		"<center class='text-justify'>"+
			" <p id='texto'>Una vez pagado el servicio que requieres de Make-up-me"+
			" en tu establecimiento preferido, tendrás que ingresar el código de barras para validar el pago.</p>"+
			"<input type='number' placeholder='Número del código de barras' class='form-control'><br>"+
			"<center><button onclick='redireccion2()' class='btn btn-primary' id='button'>Continuar</button></center>"+
		"</center>";
	document.querySelector('section').innerHTML = section;
}

