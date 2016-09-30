// Escribe aquí tu codigo Javascript
var saldoTotal=0;
var i=0;
do {
	var nombre = prompt('Introduce tú nombre');
	var cuenta = parseInt (prompt('Introduce el número de cuenta'));
	var saldo = parseInt (prompt('Introduce el saldo de la cuenta'));
	if (saldo>0){
		console.log ('Número de cuenta: '+cuenta+' | '+'Cliente: '+nombre+' | '+'Estado de cuenta: Acreedor'+' - '+'Saldo: $'+saldo);
		var saldoTotal =saldoTotal+saldo;
		i++;
	}else{
		if (saldo<0){
			console.log ('Número de cuenta: '+cuenta+' | '+'Cliente: '+nombre+' | '+'Estado de cuenta: Deudor'+' | '+'Saldo: $'+saldo);
		}else {
			console.log ('Número de cuenta: '+cuenta+' | '+'Cliente: '+nombre+' | '+'Estado de cuenta: Nulo');	
		}
	}
} while (cuenta>0);
console.log ('La suma total de '+i+' acreedores es $'+saldoTotal);



