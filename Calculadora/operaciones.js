var d1;
var d2;
var resultado;

function calcularOpSum(){

	var d1 = document.getElementById("d1").value;
	var d2 = document.getElementById("d2").value;
	console.log(d1);
	console.log(d2);

	resultado=parseFloat(d1)+parseFloat(d2);
	console.log(resultado);

	var resultadoElement = document.getElementById("resultado");
	resultadoElement.innerHTML = 'El resultado es: ' + resultado;

}

function calcularOpRes(){

        var d1 = document.getElementById("d1").value;
        var d2 = document.getElementById("d2").value;
        console.log(d1);
        console.log(d2);

        resultado=parseFloat(d1)-parseFloat(d2);
        console.log(resultado);

        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = 'El resultado es: ' + resultado;

}

function calcularOpMul(){

        var d1 = document.getElementById("d1").value;
        var d2 = document.getElementById("d2").value;
        console.log(d1);
        console.log(d2);

        resultado=parseFloat(d1)*parseFloat(d2);
        console.log(resultado);

        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = 'El resultado es: ' + resultado;

}

function calcularOpDiv(){

        var d1 = document.getElementById("d1").value;
        var d2 = document.getElementById("d2").value;
        console.log(d1);
        console.log(d2);

        resultado=parseFloat(d1)/parseFloat(d2);
        console.log(resultado);

        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = 'El resultado es: ' + resultado;

}

function calcularOpPot(){

        var d1 = document.getElementById("d1").value;
        var d2 = document.getElementById("d2").value;
        console.log(d1);
        console.log(d2);

        resultado=Math.pow(d1,d2);
        console.log(resultado);

        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = 'El resultado es: ' + resultado;

}

function calcularOpSqrt(){

        var d1 = document.getElementById("d1").value;
        var d2 = document.getElementById("d2").value;
        console.log(d1);
        console.log(d2);

        resultado=Math.sqrt(d1);
        console.log(resultado);

        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = 'El resultado es: ' + resultado;

}


