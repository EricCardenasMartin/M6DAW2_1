var nombre = prompt("Dime tu nombre");
var apellido = prompt("Dime tu apellido");

// var nombre = "Paco";
// var apellido = "PacoPaco";

var edad = prompt("Dime tu edad");
var jubilacion = 65-edad;

if(jubilacion <= 0)
	document.write(nombre + " " + apellido + " estas jubilado desde hace " + Math.abs(jubilacion) + " años");
else{
	document.write("Lo siento<br>");
	if (jubilacion >= 55)
		document.write(nombre + " " + apellido + " te faltan " + Math.abs(jubilacion) + " años para jubilarte");
}
