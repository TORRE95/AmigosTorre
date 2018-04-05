
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
		alert("Iniciando Sesion");
		
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


function orden() {
	var id = localStorage.getItem('idUsuario');
	var url = "php/orden.php?usuario="+id;
	if (id != "") {
		ordenAjax = new XMLHttpRequest();
		ordenAjax.open("GET", url);
		ordenAjax.send();
		ordenAjax.onreadystatechange = function(){
			if (ordenAjax.readyState == 4 && ordenAjax.status == 200) {
				orden = JSON.parse(ordenAjax.responseText);
				for (var i = 0; i < orden.length; i++) {
					var info = 
						"<div class='modulos'>"+
							"<div class='orden'>"+
								"<div class='numero'><label>#58"+orden[i].idOrden+"</label></div>"+
								"<div class='hora'><label>"+orden[i].hora+"</label></div>"+
							"</div>"+
							"<div class='articulos'>"+
								"<ul>"+
									"<li>"+orden[i].descripcion+"</li>"+
								"</ul>"+
							"</div>"+
							"<div class='total'><label>$"+orden[i].monto+"</label></div>"+
						"</div>";
						document.querySelector('article').innerHTML += info;
				}	
			}
		}
	}
}

function agregarProducto() {
	var id = localStorage.getItem('idUsuario');
	var nombre = document.getElementById('nombreP').value;
	var precio = document.getElementById('precio').value;
	var descripcion = document.getElementById('descripcion').value;
	var url = "php/agregarProducto.php?nombre="+nombre+"&precio="+precio+"&descripcion="+descripcion+"&id="+id;
	if(nombre != "" && precio != "" && descripcion != ""){
		productoAjax = new XMLHttpRequest();
		productoAjax.open("GET", url);
		productoAjax.send();
		alert("Producto agregado con éxito")
		productoAjax.onreadystatechange = function(){
			if (productoAjax.readyState == 4 && productoAjax.status == 200) {	
				if (productoAjax.responseText=="1") {
					window.location='dashboard.html';
				}else{
					window.location='productos.html'
				}
			}
		}
	}
	
}