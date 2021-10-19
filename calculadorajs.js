var v1 = 0;
var v2 = 0;
var func= 0;

function entrada(num){
	var num;
	document.getElementById("textocalc").value += num;
	var final = document.getElementById("textocalc").value;
}
function operacao(tipo){
	v1 = document.getElementById("textocalc").value;
	document.getElementById("textocalc").value = null;
	func = tipo;
}
function limpar(){
	document.getElementById("textocalc").value = null;
	var v1 = 0;
	var v2 = 0;
}
function resultado()
{
	v2 = document.getElementById("textocalc").value;
	if (func == 1){
		var resultado = parseInt(v1)+parseInt(v2);
	}
	if (func == 2){
		var resultado = parseInt(v1) - parseInt(v2);
	}
	if (func == 3){
		var resultado = parseInt(v1) / parseInt(v2);
	}
	if (func == 4){
		var resultado = parseInt(v1) * parseInt(v2);
	}
	if (func == 5){
		var resultado = (parseInt(v1)/100) * parseInt(v2);
	}
	if (func == 6){
		var resultado = Math.sqrt(parseInt(v1));
	}

	document.getElementById("textocalc").value = resultado;	
}