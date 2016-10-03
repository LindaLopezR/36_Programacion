// Escribe aquí tu codigo Javascript
var numero1 = parseInt(prompt ('Introduzca un número'));
var numero2 = parseInt(prompt ('Introduzca un número'));
var numero3 = parseInt(prompt ('Introduzca un número'));
function numeroMayor(numero1, numero2, numero3) {
	if (numero1<numero2 && numero1<numero3){
		console.log ('El menor '+numero1);
	} else {
		if (numero2<numero1 && numero2<numero3){
			console.log ('El menor '+numero2);	
		} else {
			console.log ('El menor '+numero3);
		}
	}
}
numeroMayor(numero1,numero2,numero3);


