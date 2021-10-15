var n;

do{
	n = prompt("Introduce un numero del 1 al 9");

	if(isNaN(n))
		alert("Por favor, introduce un numero");
	else if(n < 1 || n > 9)
		alert("Es un número pero no está entre el 1 y el 9, por favor introduce un número valido");
}while(isNaN(n) || n < 1 || n > 9);

//preprocesado
var paco = "";

for(var x = 0; x <= n*2; x++){
		paco += (n - Math.abs(x-n));
}

var a = "";

for(var x = 0; x < n; x++)
	a += "_";

var tempPaco = "";

for(var y = 0; y <= n; y++){
	tempPaco = paco.substring(n-y, paco.length-(n-y));
	
	document.write(a + tempPaco + a);

	a = a.substring(1);

	document.write("<br/>")
}