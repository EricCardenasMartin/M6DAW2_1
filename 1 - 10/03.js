var first,last = 0;

do{
	do{
		first = prompt("Introduce el numero mas pequeño:");
		last = prompt("Introduce el numero mas grande:");

		if(isNaN(first) || isNaN(last))
			alert("Porfavor introduce solo numeros");
	}while(isNaN(first) || isNaN(last))

	if(first > last)
		alert("Porfavor el primer numero tiene que ser menor al segundo, introduzca valores validos");
} while(first > last);

for(var i = first; i <= last; i++)
	document.write(i + "<br>");