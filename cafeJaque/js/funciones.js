
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
	var url = "php/ordenCafe.php?usuario="+id;
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

function getCorreo() {
	var id = localStorage.getItem("idUsuario");
	var url = "php/getDatosUser.php?idUser="+id;
	datosUserAjax = new XMLHttpRequest();
	datosUserAjax.open("GET", url);
	datosUserAjax.send();
	datosUserAjax.onreadystatechange = function(){
		if (datosUserAjax.readyState == 4 && datosUserAjax.status == 200) {	
			datos = JSON.parse(datosUserAjax.responseText);
			for (var i = 0; i < datos.length; i++) {
				if(datos[i].nombreUsuario == 0){
					document.getElementById("nombre").value = "";
				}else{
					document.getElementById("nombre").value = datos[i].nombreUsuario;
				}
				if (datos[i].telefono == 0) {
					document.getElementById("tel").value = "";
				}else{
					document.getElementById("tel").value = datos[i].telefono;
				}
				document.getElementById("mail").value = datos[i].correo;
			}
		}
	}
}

function updatePerfil() {
	var id = localStorage.getItem("idUsuario");
	var nombreUser = document.getElementById("nombre").value;
	var tel = document.getElementById("tel").value;
	var url = "php/updateUsuarios.php?nombreUser="+nombreUser+"&tel="+tel+"&id="+id;
	if(nombreUser != "" && tel != ""){
		updateAjax = new XMLHttpRequest();
		updateAjax.open("GET", url);
		updateAjax.send();
		updateAjax.onreadystatechange = function(){
			if (updateAjax.readyState == 4 && updateAjax.status == 200) {	
				if (updateAjax.responseText=="1") {
					alert("Datos actualizados");
				}else{
					alert("Error inesperado, intente más tarde");
				}
			}
		}
	}
}

function pedidos() {
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
						"<div class='modulosP'>"+
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
						document.querySelector('section').innerHTML += info;
				}	
			}
		}
	}
}



function cargarCafeterias(){

	cafeAjax = new XMLHttpRequest();
	cafeAjax.open('GET', "php/selectCafeterias.php");
	cafeAjax.send();
	cafeAjax.onreadystatechange = function(){
		if (cafeAjax.readyState == 4 && cafeAjax.status == 200) {
			cafeteria = JSON.parse(cafeAjax.responseText);
			for (var i = 0; i < cafeteria.length; i++) {
					var info = 
						"<a onclick='menu("+cafeteria[i].idUsuario+")'>"+
							"<div class='cafe'>"+
								"<div class='fotoCafe'>"+
									"<i class='far fa-image fa-3x'></i>"+
								"</div>"+
								"<div class='desc'>"+
									"<h3>"+cafeteria[i].Nombre+"</h3>"+"<br>"+
									"<span>"+cafeteria[i].Descripcion+"</span>"+
									"</div>"+
									"<div class='rate'>"+
										"<h2>"+cafeteria[i].Rate+"</h2>"+
										"<i class='fas fa-star'></i>"+
									"</div>"+
								"</div>"+
						"</a>";
				document.querySelector('section').innerHTML += info;
			}
			
			
		}
	}


}


function menu(idCafe){

	localStorage.setItem('idCafeteria', idCafe);
	window.location.href='menu.html';



}

function cargarMenu(){
	var idCafe = localStorage.getItem('idCafeteria');
	menuAjax = new XMLHttpRequest();
	menuAjax.open('GET', "php/selectMenu.php?id="+idCafe);
	menuAjax.send();

	

	menuAjax.onreadystatechange = function(){
		if (menuAjax.readyState == 4 && menuAjax.status == 200) {
			menu = JSON.parse(menuAjax.responseText);
			for (var i = 0; i < menu.length; i++) {
					var info = 
					"<div class='item'>"+
						"<div class='fotoItem'>"+
							"<i class='far fa-image fa-3x'></i>"+
						"</div>"+
						"<div class='desc'>"+
							"<h3>"+menu[i].Nombre+"</h3>"+
							"<div style='font-size: 14px; text-align: left; margin-left: 10px;'>"+menu[i].Descripcion+"</div>"+
						"</div>"+
						"<div class='precio'>"+
							"<div class='dinero'><h3>$"+menu[i].Precio+"</h3></div>"+
							"<div class='agregar'><button onclick=carrito("+menu[i].idProducto+")>Agregar</button></div>"+
						"</div>"+
					"</div>";
				document.querySelector('section').innerHTML += info;
			}
			
			
		}
	}


}
