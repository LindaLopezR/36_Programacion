// Escribe aquí tu codigo Javascript
var invitados =  ["Yare", "Adry", "Nat"];
alert('Su lista de invitados:'+invitados);
var numero = parseInt(prompt('Ingrese la cantidad de número de invitados nuevos:'));
for(i=0; i<numero; i++){
	var colados = prompt('Ingresa el nombre del colado:');
	invitados.push(colados);
}
alert('Su lista ahora es: '+invitados);
