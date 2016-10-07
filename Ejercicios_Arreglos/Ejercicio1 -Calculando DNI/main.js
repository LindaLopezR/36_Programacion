// Escribe aquí tu codigo Javascript
var numero = parseInt(prompt('Introduzca su número DNI'));
var respuestaLetra = prompt('Introduzca su letra DNI');
var respuesta = numero % 23;
if(respuesta>=0 && respuesta<=99999999) {
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
		if(letras[respuesta] === respuestaLetra) {
			alert('El número y la letra introducida son correctas. Número: '+respuesta+' Letra: '+respuestaLetra);
		} else {
			alert('El número y la letra introducida son incorrectas. Número: '+respuesta+' Letra: '+respuestaLetra);
		}
} else {
	alert('El número introducido no es válido');
}
