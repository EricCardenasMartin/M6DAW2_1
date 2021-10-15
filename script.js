/*############## Start Chunk.js ################*/

class Chunk {
	constructor(chunkX, chunkY) {
		this.chunkX = chunkX;
		this.chunkY = chunkY;

		this.rowsLeft = totalRows-chunkY*maxTilePerChunk;
		this.columnsLeft = totalColumns-chunkX*maxTilePerChunk;

		this.rows = this.rowsLeft > maxTilePerChunk ? maxTilePerChunk : this.rowsLeft;
		this.columns = this.columnsLeft > maxTilePerChunk ? maxTilePerChunk : this.columnsLeft;

		console.log(`${this.chunkX},${this.chunkY}: This(${this.columns}, ${this.rows}) # Left(${this.columnsLeft} , ${this.rowsLeft})`);

		chunksToProcess.push(this);
	}

	Process() {

		let board = "";
		
		let bTile = `<div class="tile black"></div>`; //Black tile

		let wTile = `<div class="tile white"></div>`; //White tile

		let isBlack = true;

		for(let y = 0; y < this.rows; y++){
			board += "<div>";
			for(let x = 0; x < this.columns; x++){
				board += isBlack ? bTile : wTile;
				console.log(`Tile { ${x}, ${y} }`);
				
				if(this.columns%2==0 && x == this.columns-1)	//Si el numero de columnas es par tenemos que continuar 
						continue;					//con el mismo color al cambiar de fila para que todo cuadre :D
					
				isBlack= !isBlack;
			}
			
			board += "</div>";
		}
		board += "</div>";

		chunksDiv.innerHTML += `<div style="
		position:absolute;
		top:${this.chunkY * maxTilePerChunk * tileSize}px;
		left:${this.chunkX * maxTilePerChunk * tileSize}px;
		width:${this.columns * tileSize}px;
		height:${this.rows * tileSize}px;
		border:1px solid black;
		/box-sizing:border-box;
		">${board}</div>`;

		if(this.chunkY == 0 && this.columnsLeft != this.columns)
			var tempChunkX = new Chunk(this.chunkX+1, this.chunkY);

		if(this.rowsLeft != this.rows)
			var tempChunkY = new Chunk(this.chunkX, this.chunkY+1);
	}
}

// class MetaChunk extends Chunk {
// 	constructor(chunkX, chunkY) {
// 		super(chunkX, chunkY)

// 		this.
// 	}

// 	Process = () => {


// 		if(this.chunkY == 0 && this.columnsLeft != this.columns)
// 			var tempChunkX = new Chunk(this.chunkX+1, this.chunkY);

// 		if(this.rowsLeft != this.rows)
// 			var tempChunkY = new Chunk(this.chunkX, this.chunkY+1);
// 	}
// }

var chunksCurrentlyProcessing = [];
var tempChunksCurrentlyProcessing = [];
var chunksToProcess = [];

function ProcessChunks(){
	if(chunksCurrentlyProcessing == 0){
		chunksCurrentlyProcessing = chunksToProcess;
		// console.log("1: chunksCurrentlyProcessing" + chunksCurrentlyProcessing);
		// console.log("1: chunksToProcess" + chunksToProcess);

		chunksToProcess = [];

		// console.log("2: chunksCurrentlyProcessing" + chunksCurrentlyProcessing);
		// console.log("2: chunksToProcess" + chunksToProcess);

		// console.log("");
		// console.log("#####################################");
		// console.log("");
	} 
	
	let maxChunks = chunksCurrentlyProcessing.length < 20 ? chunksCurrentlyProcessing.length : 20;

	for(i = 0; i < maxChunks; i++){
		tempChunksCurrentlyProcessing.push(chunksCurrentlyProcessing.pop());
	}

	if(chunksCurrentlyProcessing.length == 0)
		chunksCurrentlyProcessing = chunksToProcess;

	tempChunksCurrentlyProcessing.forEach(c => c.Process());
	tempChunksCurrentlyProcessing = [];

	// for(i=0;i<chunksCurrentlyProcessing.length;i++){
		// chunksCurrentlyProcessing[i].Process();
		// setTimeout(chunksCurrentlyProcessing[i].Process, 1);
	// }
	// chunksCurrentlyProcessing.forEach(c => setTimeout(c.Process, 1));
	// chunksDiv.style.display = "none";
	// chunksDiv.style.display = "block";
	
	if(chunksCurrentlyProcessing.length != 0){
		setTimeout(ProcessChunks, .01);
		// ProcessChunks();
	}
	// if(chunksToProcess.length != 0)
	// 	ProcessChunks();
}

/*############## End Chunk.js ################*/

/*############## Start Main.js ################*/


// Generar Chunk
// Añadir a Tail
// contenido Chunk
// Si todavia falta en Y ((yPos + maxHeight) / height < rows)
//		Generar chunk en posicion X = headXPos Y = HeadYPos + maxHeight
//		rellenar este chunk
// Si todavia falta en X (((xPos + maxWidth) / width < columns))
//		Generar chunk en posicion X = headXPos Y = HeadYPos + maxHeight
//		rellenar este chunk

// Evaluar Tail

var totalColumns,totalRows, limit;

limit = 10000;

// totalColumns = InitInt(totalColumns,0, limit);

// totalRows = InitInt(totalRows,0,limit);

totalColumns = 100;
totalRows = 100;

var tileSize = 50;
var maxTilePerChunk = 50;

document.write(`<div id="Chunks" style="position:relative;"></div>`);


var chunksDiv = document.getElementById("Chunks");
// chunksToProcess.push(a);

document.addEventListener("DOMContentLoaded", function(){
    chunksDiv = document.getElementById("Chunks");
	
	const a = new Chunk(0,0);
	ProcessChunks();
			// setTimeout(function(){ProcessChunks();}, 1000);

	let chunksProcessed = 0;

	// while(true){
	// 	console.log("A");
	// 	if(chunksToProcess.length != 0){
	// 		setTimeout(function(){
	// 	console.log("B");
	// 	ProcessChunks();}, 1);

	// 		// ProcessChunks();
	// 		// chunksProcessed++;
	// 	}
	// 	else{
	// 		break;
	// 	}
	// }

			
	// while(true){
	// 	if(chunksToProcess.length != 0){
	// 		console.log("Chunks processde: " + chunksProcessed);

	// 		if(chunksProcessed >= 10){
	// 			setTimeout(ProcessChunks(), 1);
	// 			chunksProcessed = 0;
	// 			// break;
	// 		}
	// 		else {
	// 			ProcessChunks();
	// 			chunksProcessed++;
	// 		}
	// 	}
	// 	else
	// 		break;
	// }
});

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

/*############## End Main.js ################*/