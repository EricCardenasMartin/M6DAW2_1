var n;
var intentos = 5;

do{
	n = prompt("Introduce un numero del 1 al 9");

	if(isNaN(n)){
		intentos--;
		alert("No es un número, te quedan " + intentos + " oportunidades, introduce un número");
	} else if(n < 1 || n > 9){
		intentos--;
		alert("Es un número pero no está entre el 1 y el 9, te quedan " + intentos + " oportunidades, introduce un número");
	} else
		break;
}while(intentos > 0);

for(var i = n; i > 0; i--){
	console.log("mmm...");
	document.write(`La tabla del ${n} es: <br/>`);
	for(var x = 1; x < 10; x++)
		document.write(`${i} x ${x} = ${i*x} <br/>`);

	document.write("<br/>");
}