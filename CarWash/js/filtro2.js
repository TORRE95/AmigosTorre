
window.onload = function() {

var fecha = new Date();
var dia = fecha.getDay();
var hora = fecha.getHours();
//DATOS DUROS DE LOS AUTOLAVADOS

//autolavado1
var hrAbir1 = 09;
var hrCrrar1 = 18;
var dias1 = [0,1,2,3,4,5,6]

//autolavado2
var hrAbir2 = 09;
var hrCrrar2 = 18;
var dias2 = [0,3,4,5,6];

//autolavado3
var hrAbir3 = 09;
var hrCrrar3 = 18;
var dias3 = [0,1,2,3,4,5,6];

//autolavado4
var hrAbir4 = 16;
var hrCrrar4 = 18;
var dias4 = [0,1,2,3,4,5,6];

//autolavado5
var hrAbir5 = 09;
var hrCrrar5 = 18;
var dias5 = [0,1,2,3,4,5,6];


	opaco(hrAbir1, hrCrrar1, dias1, dia,hora, 1);
	opaco(hrAbir2, hrCrrar2, dias2, dia,hora, 2);
	opaco(hrAbir3, hrCrrar3, dias3, dia,hora, 3);
	opaco(hrAbir4, hrCrrar4, dias4, dia,hora, 4);
	opaco(hrAbir5, hrCrrar5, dias5, dia,hora, 5);

function opaco(hrabrir, hrcerrar, dias, diaActual, hrActual, numAut){
	var aux = "cont";
	var numb = numAut;
	var res = aux.concat(numb);

	if(hrActual>hrabrir && hrActual<hrcerrar){
		
		if(dias.indexOf(diaActual)>=0 && dias.indexOf(diaActual)<=6){
			//alert('bandera1');
			document.getElementById(res).setAttribute("onclick", "inicio(1)");
			document.getElementById(res).setAttribute("class", "grupo");
		}else{
			//alert('bandera2');
			document.getElementById(res).setAttribute("onclick", "inicio(0)");
			document.getElementById(res).setAttribute("class", "grupo opaco");
		}

	}else{
		//alert('bandera3');
		document.getElementById(res).setAttribute("onclick", "inicio(0)");
		document.getElementById(res).setAttribute("class", "grupo opaco");	
	}
}

};
