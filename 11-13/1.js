var a = prompt("Yo vivo en Barcelona, ¿dónde vives?", "Barcelona");

if(a == null || a == "")
	document.write("Pues me quedo sin saber dónde naciste");
else if(a == "Barcelona")
	document.write("Naciste en Barcelona, como yo");
else
	document.write("La Ciudad " + a + " es muy bonita");