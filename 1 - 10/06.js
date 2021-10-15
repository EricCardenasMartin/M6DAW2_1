var num,text, num_text,pregunta;

num = 5;
text = "Oreja";
num_text = "6";
pregunta = false;

console.log("Type of num: " + typeof(num));
console.log("Type of text: " + typeof(text));
console.log("Type of num_text: " + typeof(num_text));
console.log("Type of pregunta: " + typeof(pregunta));

var numMastext = num + text;
var num_textMasPregunta = num_text + pregunta;
var numMasPregunta = num + pregunta;

console.log("Type of numMastext: " + typeof(numMastext));
console.log("Type of num_textMasPregunta: " + typeof(num_textMasPregunta));
console.log("Type of numMasPregunta: " + typeof(numMasPregunta));