// Escribe aquí tu codigo Javascript
alert ('Valores de tu primera lista');
var lista1=0;
console.log ('Lista1');
for(i=0;i<3;i++){
	var listaA = parseInt (prompt ('Valor'));
	var lista1=lista1+listaA;
	console.log (listaA);
}
alert ('Valores de tu segunda lista');
var lista2=0;
console.log ('Lista2');
for(i=0;i<3;i++){
	var listaB = parseInt (prompt ('Valor'));
	var lista2=lista2+listaB;
	console.log (listaB);
}
if (listaA>listaB){
	alert('La lista 1 es mayor');
}else{
	if (listaA<listaB) {
		alert('La lista 2 es mayor');
	} else {
		alert('Las 2 listas 1 son iguales');
	}
}