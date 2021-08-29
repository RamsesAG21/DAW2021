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
	resultadoElement.innerHTML = 'El resultado de la Suma es: ' + resultado;

}

function calcularOpRes(){

        var d1 = document.getElementById("d1").value;
        var d2 = document.getElementById("d2").value;
        console.log(d1);
        console.log(d2);

        resultado=parseFloat(d1)-parseFloat(d2);
        console.log(resultado);

        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = 'El resultado de la Resta es: ' + resultado;

}

function calcularOpMul(){

        var d1 = document.getElementById("d1").value;
        var d2 = document.getElementById("d2").value;
        console.log(d1);
        console.log(d2);

        resultado=parseFloat(d1)*parseFloat(d2);
        console.log(resultado);

        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = 'El resultado de la Multiplicacion es: ' + resultado;

}

function calcularOpDiv(){

        var d1 = document.getElementById("d1").value;
        var d2 = document.getElementById("d2").value;
        console.log(d1);
        console.log(d2);

        resultado=parseFloat(d1)/parseFloat(d2);
        console.log(resultado);

        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = 'El resultado de la Division es: ' + resultado;

}

function calcularOpPot(){

        var d1 = document.getElementById("d1").value;
        var d2 = document.getElementById("d2").value;
        console.log(d1);
        console.log(d2);

        resultado=Math.pow(d1,d2);
        console.log(resultado);

        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = 'El resultado de la Potencia es: ' + resultado;

}

function calcularOpSqrt(){

        var d1 = document.getElementById("d1").value;
        var d2 = document.getElementById("d2").value;
        console.log(d1);
        console.log(d2);

        resultado=Math.sqrt(d1);
        console.log(resultado);

        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = 'El resultado de la Raiz es: ' + resultado;

}


