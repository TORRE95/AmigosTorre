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