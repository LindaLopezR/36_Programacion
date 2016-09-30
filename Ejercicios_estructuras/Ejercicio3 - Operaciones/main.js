// Escribe aquí tu codigo Javascript
var numero1 = parseInt (prompt('Introduce un número'));
var numero2 = parseInt (prompt('Introduce un segundo número'));
if (numero1>numero2) {
	var sumar = numero1+numero2;
	var restar = numero1-numero2;
	console.log ('La suma de los 2 números es '+sumar+' y la resta de '+numero1+' y '+numero2+' es '+restar);
} else {
	if (numero1===numero2) {
		alert ('Los 2 números son iguales');
	} else {
		var multiplicar = numero2*numero1;
		var dividir = numero2/numero1;
		console.log ('El producto de los 2 números es '+multiplicar+' y la división de '+numero2+' y '+numero1+' es '+dividir);
	}
}
