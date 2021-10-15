var modulos = [{
	nombre: "Desenvolupament web en entorn client",
	ciclo: "DAW",
	ufs: ["UF1. Sintaxi del llenguatge. Objectes predefinits del llenguatge.", "UF2. Estructures definides pel programador. Objectes.", "UF3. Esdeveniments. Manegament de formularis. Model d'objectes document.", "UF4. Comunicació asíncrona client-servidor."]
}, {
	nombre: "Desenvolupament web en servidor",
	ciclo: "DAW2",
	ufs: ["UF2. Sintaxi del llenguatge. Objectes predefinits del llenguatge.", "UF3. Estructures definides pel programador. Objectes.", "UF4. Esdeveniments. Manegament de formularis. Model d'objectes document.", "UF5. Comunicació asíncrona client-servidor."]
}, {
	nombre: "Entorns de desenvolupament",
	ciclo: "DAW",
	ufs: ["UF6. Sintaxi del llenguatge. Objectes predefinits del llenguatge.", "UF7. Estructures definides pel programador. Objectes.", "UF8. Esdeveniments. Manegament de formularis. Model d'objectes document.", "UF9. Comunicació asíncrona client-servidor."]
}]

for(var modulo in modulos){
document.write("<b>modulo</b>: M6<br/>");
document.write("<b>Nombre</b>: " + modulos[modulo].nombre + "<br/>");
document.write("<b>Ciclo formativo</b>: " + modulos[modulo].ciclo + "<br/>");
document.write("<b>UFS</b>:");
document.write("<ul>");
for(var uf in modulos[modulo].ufs)
	document.write("<li>" + modulos[modulo].ufs[uf] + "</li>");
document.write("</ul>");
}
