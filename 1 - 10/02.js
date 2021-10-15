var first,last = 0;

first = prompt("Introduce el numero mas pequeño:");
last = prompt("Introduce el numero mas grande:");

// do{
// 	first = prompt("Introduce el numero mas pequeño:");
// 	last = prompt("Introduce el numero mas grande:");

// 	if(first > last)
// 		alert("Porfavor el primer numero tiene que ser menor al segundo, introduzca valores validos");
// } while(first > last);

for(var i = first; i <= last; i++)
	document.write(i + "<br>");