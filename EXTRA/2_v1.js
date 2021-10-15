var columns,rows, limit;

limit = 10000;

columns = InitInt(columns,0, limit);

rows = InitInt(rows,0,limit);

var tileSize = 50;

var bTile = `<div class="tile black"></div>`; //Black tile

var wTile = `<div class="tile white"></div>`; //White tile

var isBlack = true;

document.write(`<div class="board" style="width:${tileSize*columns}px;height:${tileSize*rows}px">`);

for(let y = 0; y < rows; y++){
	document.write("<div>");
	for(let x = 0; x < columns; x++){
		document.write( isBlack ? bTile : wTile );
		console.log(`Tile { ${x}, ${y} }`);
		
		if(columns%2==0 && x == columns-1)	//Si el numero de columnas es par tenemos que continuar 
				continue;					//con el mismo color al cambiar de fila para que todo cuadre :D
			
		isBlack= !isBlack;
	}
	
	document.write("</div>");
}
document.write("</div>");

function InitInt(n, min, max){
	do{
		n = prompt(`Introduce un numero del ${min} al ${max}`);

		if(isNaN(n))
			alert("Por favor, introduce un numero");
		else if(n < min || n > max)
			alert(`Es un número pero no está entre el ${min} y el ${max}, por favor introduce un número valido`);
	}while(isNaN(n) || n < min || n > max);

	return n;
}