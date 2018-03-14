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
						localStorage.setItem("nombre", inicio[i].nombre);
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
						localStorage.setItem("nombre", nombre);
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
	var div ="Hola "+ localStorage.getItem('nombre');
	document.querySelector('h1').innerHTML = div;

}
function cerrar() {
	lol = document.getElementById('btnCerrar')
	lol.style.backgroundColor = "transparent";
	lol.style.border="none";
	lol.style.zIndex ="-9"
	lol.innerHTML = "";

}

function terminos() {
	seccion = document.getElementById('btnCerrar');
	seccion.className = "section";
	var section = 
			"<button style='float: right;' onclick='cerrar();''>Cerrar</button>"+
			"<br><br><br><br><br><br><br><br>"+
			"<center>"+
				"<div class='text'>"+
					"<big>"+
						"Usted acepta nuestros términos y condiciones, tanto si quiere adquirir el modo Premium, ya que obtendrá ciertos beneficios al tenerlo, pero no podrá descargar ningún video de la sección de asesores, ya que esto se consideraría ilegal por los derechos de autor."+
						"En el modo gratuito tendrá pocos beneficios, los cuales su intensión es que pueda ver de que trata la aplicación, y para poder obtener le resto de los tips y videos, usted tendrá que descargar el modo Premium."+
						"No nos hacemos responsables por el mal uso del maquillaje, ya que lo que viene aquí son consejos especializados que se deben seguir paso a paso para obtener el trabajo deseado."+
					"</big>"+
				"</div>"+
			"</center>";
	document.querySelector('section').innerHTML = section;

}

function redireccion0() {
	window.location = "inicio.html";
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
		"<div class='tips1'>"+
			"<p>TIPS</p> <br><br><br><br>"+
			"<iframe width='560' height='315'"+ 
				"src='https://www.youtube.com/embed/4NhTfaHXCaQ' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>"+
		"</div>"
	document.querySelector('section').innerHTML = section;
}

function ubica() {
	var section="<span class='estilistas' onload='ubica()'></span>";
	document.querySelector('section').innerHTML = section;
	estilista = new XMLHttpRequest();
	estilista.open('POST', "php/selectEstilistas.php");
	estilista.send();
	estilista.onreadystatechange = function(){
		if (estilista.readyState == 4 && estilista.status == 200) {
			datos = JSON.parse(estilista.responseText);
			for (var i = 0; i < datos.length; i++) {
				div = "<div><p>"+datos[i].nombre+"</p>"+
						"<button>Ver estilista</button></div>";

				//console.log(div);
				document.querySelector('span').innerHTML += div;
			}
			
				
		}
	}
}
function adquiere() {
	var section = "<div class='tips3'><p>ADQUIERE</p></div>"
	document.querySelector('section').innerHTML = section;
}

function tarjetas(){
	var section = 
		"<h1>Tarjeta de crédito/débito</h1>"+
		"<div>"+
			"<label>"+
				"Nombre del titular de la tarjeta"+
				"<input type='text' id='nombre' required>"+
			"</label><br>"+
		"</div>"+
		"<div>"+
			"<label>"+
				"Número de tarjeta"+
				"<input type='number' id='numeroTarjeta' minlength='16' maxlength='16' required>"+
			"</label><br>"+
		"</div>"+
		"<div>"+
			"Fecha de vencimiento"+
			"<select id='mes'>"+
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
			"<select id='year'>"+
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
			"</select><br>"+
		"</div>"+
		"<div>"+
			"Código de Seguridad: <input type='number' id='cv' placeholder='3 dígitos'><br>"+
		"</div>"+
		"<div>"+
			"<input type='button' id='pagar' value='Pagar' onclick='redireccionX()'>"+
		"</div>";
	document.querySelector('section').innerHTML = section;
}

function redireccionX(){
	var nombre =  document.getElementById('nombre').value;
	var numTarjeta = document.getElementById('numeroTarjeta').value;
	var mes = document.getElementById('mes').value;
	var year = document.getElementById('year').value;
	var cv = document.getElementById('cv').value;
	if(nombre != "" && numTarjeta != "" && mes != "" && year != "" && cv !=""){
		if (cv.length != 3 && numTarjeta.length != 16) {
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
		"<center>"+
			" UNA VEZ PAGADO TU SERVICIO QUE REQUIERES DE MAKE-UP-ME <br>"+
			"  EN TU LUGAR DE PREFERENCIAS TENDRAS QUE INGRESAR EL CODIGO DE BARRAS PARA VALIDAR TU PAGO.<br>"+
			"<input type='number' placeholder='Número del código de barras'><br>"+
			"<button onclick='redireccion2()'>Continuar</button>"+
		"</center>";
	document.querySelector('section').innerHTML = section;
}

