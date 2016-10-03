// Escribe aquí tu codigo Javascript
var totalFemenino=0;
var totalMasculino=0;
var edadVaria=0;
var cantidadTotal=0;
do {
	alert ('Introduzca 0 para finalizar el programa');
	var documento = parseInt (prompt('Introduzca el número de documento'));
	if (documento>0) {
		console.log('No. de documento: '+documento);
		var sexo = prompt('Introduzca el sexo de la persona (femenino/masculino)');
		switch (sexo){
			case 'femenino': console.log ('Sexo: Femenino');
			totalFemenino++;
			var edadMujer = prompt('Introduzca la edad de la persona');
			console.log('Edad: '+edadMujer);
			break;
			case 'masculino': console.log ('Sexo: Masculino');
			totalMasculino++;
			var edadHombre = prompt('Introduzca la edad de la persona');
			console.log('Edad: '+edadHombre);
			if (edadHombre>16 && edadHombre<65) {
				edadVaria++;
			}
			break;
			default: console.log ('Sexo: Indefinido');
			break;
		}
	cantidadTotal++;
	}
} while (documento>0);
console.log('Cantidad de personas totales: '+cantidadTotal);
console.log('Cantidad de mujeres totales: '+totalFemenino);
console.log('Cantidad de hombres totales: '+totalMasculino);
console.log('Cantidad de hombres entre 16 y 65 años: '+edadVaria);
