<?php
session_start();
require_once 'conexion.php';
//instanciamos la clase Funciones
$funciones = new Funciones();
$conexion = $funciones->conectar();
$conexion->set_charset("utf8");
#cerrar sesion
if (isset($_GET['salir'])) {
if ($_GET['salir'] == 1) {
session_destroy();
}
}
?>
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="estilo.css">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    </head>
    <body>
        <div class="panel">
            <ul class="menus">
                <li>Perfil</li>
                <li>historial</li>
                <li><a href="index.php?salir=1">Cerrar Sesión</a></li>
            </ul>
            
        </div>
        
        <div id="map"></div>
        <script>
        // This example creates a 2-pixel-wide red polyline showing the path of
        // the first trans-Pacific flight between Oakland, CA, and Brisbane,
        // Australia which was made by Charles Kingsford Smith.
        function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: 20.5218493, lng: -100.8159036},
        mapTypeId: 'terrain'
        });
        //ruta1
        var flightPlanCoordinates = [
        {lat: 20.5193333, lng: -100.8098611111111},
        {lat: 20.5196389, lng: -100.81383333333333},
        {lat: 20.5310556, lng: -100.8128611111111},
        {lat: 20.5309444, lng: -100.81875}
        ];
        var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
        });
        flightPath.setMap(map);
        //ruta 2
        var flightPlanCoordinates = [
        {lat: 20.5181667, lng: -100.85541666666666},
        {lat: 20.5189444, lng: -100.84049999999999},
        {lat: 20.5099444, lng: -100.8175},
        {lat: 20.4963611, lng: -100.82005555555556}
        ];
        var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#000FF0',
        strokeOpacity: 1.0,
        strokeWeight: 2
        });
        flightPath.setMap(map);
        }
        </script>
        <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCuyMbdtLt_T5XYedMu_HWwTdjGTg6a0lk&callback=initMap">
        </script>
        
        <nav class="navbar">
            <ul class="rutas">
                <a ><li class="ruta" id="rutaA"><span><label>RUTA A</label></span><span id="precio"><label>$12.00</label></span></li></a>
                <a ><li class="ruta" id="rutaB"><span><label>RUTA B</label></span><span id="precio"><label>$8.00</label></span></li></a>
                <a ><li class="ruta" id="rutaC"><span><label>RUTA C</label></span><span id="precio"><label>$9.50</label></span></li></a>
                <a ><li class="ruta" id="rutaD"><span><label>RUTA D</label></span><span id="precio"><label>$15.00</label></span></li></a>
            </ul>
        </nav>
    </body>
</html>