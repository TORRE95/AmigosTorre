function inicioSesion() {

    var mail = document.getElementById('mail').value;
    var pass = document.getElementById('pass').value;
    if (mail != "" && pass != "") {
        inicioAjax = new XMLHttpRequest();
        inicioAjax.open('POST', "https://make-upapp.000webhostapp.com/selectUsuarios.php");
        inicioAjax.send();
        inicioAjax.onreadystatechange = function() {
            if (inicioAjax.readyState == 4 && inicioAjax.status == 200) {
                inicio = JSON.parse(inicioAjax.responseText);
                for (var i = 0; i < inicio.length; i++) {

                    if (mail == inicio[i].correo && pass == inicio[i].pass) {
                        localStorage.setItem("nombre", inicio[i].nombre);
                        location.href = "app.html";
                        break;
                    } else {
                        if (inicio[i] == inicio.length && mail != inicio[i].correo) {
                            alert("Correo y/o contraseña incorrectos")
                        } else if (inicio[i] == inicio.length && pass == inicio[i].pass) {
                            alert("Correo y/o contraseña incorrectos")
                        }
                    }
                }


            }
        }
    }
}

function add() {
    var mail = document.getElementById('mail');
    var pass = document.getElementById('pass');
    if (mail.value == "" && pass.value == "") {
        mail.classList.add("error");
        pass.classList.add("error");
    } else {
        if (mail.value != "" && pass.value == "") {
            mail.classList.add("listo");
            pass.classList.add("error");
        } else {
            pass.classList.add("listo");
            if (mail.value == "" && pass.value != "") {
                pass.classList.add("listo");
                mail.classList.add("error");
            } else {
                mail.classList.add("listo");
            }
        }
    }
}

function add2() {
    var mail = document.getElementById('mail');
    var pass = document.getElementById('pass');
    if (mail.value == "" && pass.value == "") {
        mail.classList.add("error");
        pass.classList.add("error");
    }
}

function registrar() {
    var nombre = document.getElementById("nombre").value;
    var ape = document.getElementById("apellidos").value;
    var mail = document.getElementById("mailR").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var url = "https://make-upapp.000webhostapp.com/registrarUsuarios.php?nombre="+nombre+"&mail="+mail+"&pass1="+pass1+"&apellidos="+ape;
    if (nombre != "" && mail != "" && pass1 != "" && pass2 != "" && ape != "") {
        if (pass1 == pass2) {
            registroAjax = new XMLHttpRequest();
            registroAjax.open('GET', url);
            registroAjax.send();
            registroAjax.onreadystatechange = function() {
                if (registroAjax.readyState == 4 && registroAjax.status == 200) {

                    if (registroAjax.responseText == "1") {
                        alert("iniciando sesión");
                       localStorage.setItem("nombre", nombre);
                       window.location = "app.html";
                    }else{
                        console.log("Error inesperado, intente más tarde");
                    }
                }
            }
        }else{
            alert("Error, las contraseñas no coinciden")
        }
    }
}

function getNombre() {
    var div = "Bienvenido " + localStorage.getItem('nombre');
    document.querySelector('h1').innerHTML = div;

}

function cerrar() {
    lol = document.getElementById('btnCerrar')
    lol.style.backgroundColor = "transparent";
    lol.style.border = "none";
    lol.style.zIndex = "-9"
    lol.innerHTML = "";

}


function redireccion1() {
    window.location = "acercaDe.html";
}


function redireccion2() {
    window.location = "app.html";
}

function redireccion3() {
    window.location = "pago.html";
}

function redireccion4() {
    window.location = "index.html";
}



function noBack() {
    window.location.hash = "no-back-button";
    window.location.hash = "Again-No-back-button";
    window.onhashchange = function() {
        window.location.hash = "";
    }
}

function tips() {
    var section =
        "<center><b><p id='grande' style='color: #DCBCAD;'>TIPS</p></b></center>" +
        "<center>" +
        "<div class='video'>" +
        "<iframe width='90%' height='180px' src='https://www.youtube.com/embed/4NhTfaHXCaQ' " +
        "frameborder='0' allow='autoplay; encrypted-media' allowfullscreen style='margin-bottom: 10%;'></iframe>" +
        "</div>" +
        "</center>" +
        "<div id='margen'>" +
        "<div>" +
        "<ul>" +
        "<li class='media'>" +
        "<div style='margin-botom: 10%;'>" +
        "<b><p align='justify' id='grande' style='margin-botom: 2%; color: #DCBCAD;'>Quema con un encendedor la punta del delineador de ojos</p></b>" +
        "<p align='justify' id='tips' style='color: white;'>Agarra tu lápiz delineador de ojos y con ayuda de un encendedor coloca la llama en la punta por un segundo, deja que se enfríe un poco y notarás el cambio en su consistencia. Además, así es menos probable que el trazo se corra.</p>" +
        "</div>" +
        "</li>" +
        "<img src='images/Make-up-3.webp' width='200px' height='150px' alt='1'><li><br></li>" +
        "<li>" +
        "<div style='margin-botom: 10%;'>" +
        "<b><p align='justify'  id='grande' style='margin-botom: 2%; color: #DCBCAD;'>Si quieres que tu sombras resalten, pinta primero tu párpado con delineador blanco</p></b>" +
        "<p align='justify' id='tips' style='color: white;'>Para que la sombra de ojos destaque, toma un lápiz delineador de color blanco y rellena tus párpados. El tono opaco del blanco hará más intenso cualquier color de sombra que apliques.</p>" +
        "</div>" +
        "</li>" +
        "<img src='images/3.webp' width='200px' height='150px' alt='2'><li><br></li>" +
        "<li>" +
        "<div style='margin-botom: 10%;'>" +
        "<b><p align='justify' id='grande' style='margin-botom: 2%;'>Para hacer el estilo “ojo de gato”, primero dibuja el contorno dejando un espacio abierto</p></b>" +
        "<p align='justify' id='tips'>Es más fácil lograr un “ojo de gato” si primero pintas el contorno y después rellenas el espacio interior con un pincel.</p>" +
        "</div>" +
        "</li>" +
        "<img src='images/2.webp' width='200px' height='150px' alt='3'><li><br></li>" +
        "</ul>" +
        "</div>" +
        "</div>";
    document.querySelector('section').innerHTML = section;
    var nav = document.getElementById('navbarSupportedContent');
    nav.className = "collapse navbar-collapse";
}

function ubica2() {
    window.location = "app.html";
    setTimeout(function() { ubica(); }, 200);
}

function ubica() {


    var cerca = "<center><p class='cerca'>Estilistas cerca de ti: </p></center>";
    document.querySelector("h1").innerHTML = cerca;
    var borrar = "";
    document.querySelector("div.borrar").innerHTML = borrar;
    var estilista;
    estilista = new XMLHttpRequest();
    estilista.open('POST', "https://make-upapp.000webhostapp.com/selectEstilistas.php");
    estilista.send();
    estilista.onreadystatechange = function() {
        if (estilista.readyState == 4 && estilista.status == 200) {
            datos = JSON.parse(estilista.responseText);
            for (var i = 0; i < datos.length; i++) {
                var llenado =
                    "<center>" +
                    "<div class='est'>" +
                    "<ul>" +
                    "<li>" +
                    "<img src='" + datos[i].foto + "' width='230px' height='200px' alt='imgEstilista' style='" +
                    "border-radius: 20px;'>" +
                    "<div>" +
                    "<h3 style='color: #DCBCAD;'>" + datos[i].nombre + "</h3>" +
                    "<input type='hidden' value='" + datos[i].idEstilista + "' id='idEst'>" +
                    "<h6 style='color: white;'>A " + datos[i].distancia + "km de ti</h6>" +
                    "<button onclick='verPerfil(" + datos[i].idEstilista + ");' class='btnVerPerfil'>Ver perfil</button>" +
                    "<div>" +
                    "</li><br>" +
                    "</ul>" +
                    "</div>" +
                    "</center>"
                document.querySelector('section').innerHTML += llenado;
            }
        }
    }
}

function verPerfil(id) {
    var perfilEst;
    perfilEst = new XMLHttpRequest();
    perfilEst.open('POST', "https://make-upapp.000webhostapp.com/selectEstilistas.php");
    perfilEst.send();
    perfilEst.onreadystatechange = function() {
        if (perfilEst.readyState == 4 && perfilEst.status == 200) {
            datosEstilista = JSON.parse(perfilEst.responseText);
            for (var i = 0; i < datosEstilista.length; i++) {
                if (id == datosEstilista[i].idEstilista) {
                    var perfil =
                        "<div>" +
                        "<center>" +
                        "<img src='" + datosEstilista[i].foto + "' alt='1' width='230px' height='200px' id='imgPerfil'><br>" +
                        "<b><h2 style='color: #B29600;'>" + datosEstilista[i].nombre + "</h2>" +
                        "<b><h3 style='color: #B29600; font-style: italic;'>" + datosEstilista[i].nombreTienda + "</h3>" +
                        "<h5 style='color: white;'>" + datosEstilista[i].ubicacion + ", a " + datos[i].distancia + "km de ti</h5></center>" +
                        "<p id='descripcion' align='justify' style='color: white;'>" + datosEstilista[i].descripcion + "</p>" +
                        "<h6 style='color: white;'>Contacto: </h6>" +
                        "<b><a href = 'http://"+datosEstilista[i].contacto+"'><h3 style='font-size: 18px; color: #DCBCAD;'>FAEBOOK</h3></a>" +
                        "<center><p class='calificacion' style='color: #B29600;'>Calificación: " + datosEstilista[i].calificacion + " / 5.0</p></b>" +
                        

                    "</center>" +
                    "<div>" +
                    "<div class='dropdown'>" +
                    "<button onclick='agendar()' class='dropbtn' style='letter-spacing: 1.1pt; border-radius: 18px;'" +
                    "'>Agendar cita</button>" +
                    "<button  type='button' onclick='llamar()' class='dropbtn' style='letter-spacing: 1.1pt; border-radius: 18px;'" +
                    "'>Llamar</button>" +
                    "<div id='myDropdown' class='dropdown-content'>" +
                    "<div>" +
                    "<center>" +
                    "<div class='agendar'>" +
                    "<b><p style='margin-top: 10%;'>Elige un día y la hora: " +
                    "</p><input type='datetime-local' id='dateTime'></b><br>" +
                    "<button onclick='redireccion3()' id='btnPagarCita'>Pagar</button>" +
                    "</div>" +
                    "</center>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>";
                    document.querySelector('section').innerHTML = perfil;
                }
            }
        }

    }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function agendar() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function llamar(){
	window.location.href = "skype:live:gojacqui?call";
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
        }
    }
}

function tarjetas() {
    var section =
        "<b>" +
        "<center><h2 style='font-size: 25px;'>Tarjeta de crédito/débito</h2></center><br>" +
        "<div>" +
        "<label>" +
        "<p class='txtNombreTarjeta'>Nombre del titular de la tarjeta</p>" +
        "<input type='text' id='nombreTarjeta' required >" +
        "</label>" +
        "</div>" +
        "<div>" +
        "<label>" +
        "<p class='txtNumTarjeta'>Número de tarjeta</p>" +
        "<input type='number' id='numTarjeta'  required>" +
        "</label>" +
        "</div>" +
        "<div>" +
        "<p class='txtFV'>MM/YY</p>" +
        "<select id='mes' class='FV'>" +
        "<option value='1'>1</option>" +
        "<option value='2'>2</option>" +
        "<option value='3'>3</option>" +
        "<option value='4'>4</option>" +
        "<option value='5'>5</option>" +
        "<option value='6'>6</option>" +
        "<option value='7'>7</option>" +
        "<option value='8'>8</option>" +
        "<option value='9'>9</option>" +
        "<option value='10'>10</option>" +
        "<option value='11'>11</option>" +
        "<option value='12'>12</option>" +
        "</select>" +
        "<select id='year' class='FV'>" +
        "<option value='2018'>2018</option>" +
        "<option value='2019'>2019</option>" +
        "<option value='2020'>2020</option>" +
        "<option value='2021'>2021</option>" +
        "<option value='2022'>2022</option>" +
        "<option value='2023'>2023</option>" +
        "<option value='2024'>2024</option>" +
        "<option value='2025'>2025</option>" +
        "<option value='2026'>2026</option>" +
        "<option value='2027'>2027</option>" +
        "<option value='2028'>2028</option>" +
        "<option value='2029'>2029</option>" +
        "</select>" +
        "</div>" +
        "<div>" +
        "<label>" +
        "<p class='txtCV'>Código de Seguridad: </p><input type='number' id='cv' max='999' min='001'>" +
        "</label>" +
        "</div>" +
        "<div>" +
        "<center><input type='button' class='button' value='Pagar' onclick='redireccionX()'></center>" +
        "</div>" +
        "</b>";
    var apartado = document.querySelector('section').innerHTML = section;

}

function redireccionX() {
    var nombre = document.getElementById('nombreTarjeta').value;
    var numTarjeta = document.getElementById('numTarjeta').value;
    var mes = document.getElementById('mes').value;
    var year = document.getElementById('year').value;
    var cv = document.getElementById('cv').value;
    if (nombre != "" && numTarjeta != "" && mes != "" && year != "" && cv != "") {
        if (cv.length != 3 && numTarjeta.length != 16 || cv.length != 3 && numTarjeta.length == 16 || numTarjeta.length != 16 && cv.length == 3) {
            alert("El código de seguridad tiene que contener solo 3 números y la tarjeta es de 16 números");
        } else {
            alert("Tarjeta aceptada, ya eres premium :)");
            redireccion2();
        }
    } else {
        alert("Campos vacíos, verifica y vuelve a intentar");
    }
}

function efectivo() {
    var section =
        "<center align='justify'>" +
        "<center><h2 style='font-size: 30px; margin-bottom: 10%; letter-spacing: 2pt;'>Efectivo</h2></center>" +
        " <p class='txtEfectivo' style='letter-spacing: 2pt;'>Una vez pagado el servicio que requieres de Make-up-me" +
        " en tu establecimiento preferido, tendrás que ingresar el código de barras para validar el pago.</p>" +
        "<input type='number' class='numCB'><br>" +
        "<center><button onclick='redireccion2()' class='button'>Continuar</button></center>" +
        "</center>";
    document.querySelector('section').innerHTML = section;
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function nav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}