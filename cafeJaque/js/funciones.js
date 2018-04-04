
function registrar() {
	
	
	var nombre = document.getElementById("nombre").value;
	var mail = document.getElementById("mail").value;
	var pass1 = document.getElementById("pass1").value;
	var pass2 = document.getElementById("pass2").value;

	if (nombre != "" && mail != "" && pass1 != "" && pass2 != "" && pass1 == pass2) {
	
	
			registroAjax = new XMLHttpRequest();
			registroAjax.open('GET', "php/registrarUsuarios.php?nombre="+nombre+"&mail="+mail+"&pass="+pass1);
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

	
	var mail = document.getElementById('mail').value;
	var pass = document.getElementById('pass').value;
	if(mail != "" && pass != ""){
		inicioAjax = new XMLHttpRequest();
		inicioAjax.open('GET', 'php/selectUsuarios.php?mail='+mail+'&pass='+pass);
		inicioAjax.send();
		
		inicioAjax.onreadystatechange = function(){
		if (inicioAjax.readyState == 4 && inicioAjax.status == 200) {
			inicio = JSON.parse(inicioAjax.responseText);

					localStorage.setItem('idUsuario', inicio[0].idUsuario);
					localStorage.setItem('tipoUsuario', inicio[0].tipoUsuario);

			if (inicio[0].tipoUsuario=="0") {
						window.location.assign('inicio.html');
					}

				if (inicio[0].tipoUsuario == "1") {
							window.location.assign('dashboard.html');
						}
			
		}
		}
	}
} 