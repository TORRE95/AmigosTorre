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
	var section = "<div class='tips1'><p>TIPS</p></div>"
	document.querySelector('section').innerHTML += section;
}

function ubica() {
	var section = "<div class='tips2'><p>UBICA A TU ESTILISTA</p></div>"
	document.querySelector('section').innerHTML = section;
}
function adquiere() {
	var section = "<div class='tips3'><p>ADQUIERE</p></div>"
	document.querySelector('section').innerHTML = section;
}