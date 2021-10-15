var name,firstSurname,lastSurname;

name = prompt("Introduce tu nombre:");
firstSurname = prompt("Introduce tu primer apellido:");
lastSurname = prompt("Introduce tu segundo apellido:");

var n;

n = parseInt(prompt("Introduce un numero del 1 al 3"));

switch(n){
	case 1:
		document.write(name);
		break;
	case 2:
		document.write(firstSurname);
		break;
	case 3:
		document.write(lastSurname);
		break;
	default:
		document.write("error");
		break;
}