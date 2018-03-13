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



function redireccion1(){
	window.location="acercaDe.html";
}


function redireccion2(){
	window.location="app.html";
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
	document.querySelector('section').innerHTML += section;
}

function ubica() {
	var section = 
	"<div class='estilistas'>"+
		"<p>Perfiles de estilistas</p>"+
	"</div>"
	document.querySelector('section').innerHTML = section;
}
function adquiere() {
	var section = "<div class='tips3'><p>ADQUIERE</p></div>"
	document.querySelector('section').innerHTML = section;
}