var rowCount = 0;

for(var i = 1; i <= 100; i++){
	if(i%2==1){
		document.write(i == 69 ? ";)" : i)
		rowCount++;

		if(rowCount < 10)
			document.write(" - ");
		else {
			document.write("<br/>");
			rowCount = 0
		}
	}
}