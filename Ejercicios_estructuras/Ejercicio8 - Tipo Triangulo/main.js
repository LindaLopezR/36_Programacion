// Escribe aquí tu codigo Javascript
var angulo = parseInt (prompt ('¿El triángulo tiene un ángulo recto ó de 90 grados? Escribe 1 si lo tiene, y escribe 2 si no'));
if (angulo===1) {
	console.log('Es un triángulo rectángulo');
} else {
	var lado1 = parseInt (prompt ('Introduce la longitud del lado 1'));
	var lado2 = parseInt (prompt ('Introduce la longitud del lado 2'));
	var lado3 = parseInt (prompt ('Introduce la longitud del lado 3'));
	if (lado1===lado2 && lado2===lado3) {
			console.log('Es un triángulo equilátero');
		} else {
			if (lado2===lado3 && lado3!==lado1 || lado1===lado2 && lado2!==lado3 || lado1===lado3 && lado3!==lado2) {
				console.log('Es un triángulo isósceles');
			} else {
				if (lado1!==lado2 && lado2!==lado3) {
					console.log('Es un triángulo escaleno');
				} else {
					console.log('No es un triángulo');
				}
			}
		}
	}


