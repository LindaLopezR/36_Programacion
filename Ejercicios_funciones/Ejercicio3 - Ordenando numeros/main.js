// Escribe aquí tu codigo Javascript
function numeroMayor(numero1, numero2, numero3) {
	if (numero1>numero2 && numero2>numero3){
		console.log ('El orden es '+numero1+' - '+numero2+' - '+numero3);
	} else {
		if (numero2>numero1 && numero1>numero3){
			console.log ('El orden es '+numero2+' - '+numero1+' - '+numero3);	
		} else {
			if (numero3>numero2 && numero2>numero1){
				console.log ('El orden es '+numero3+' - '+numero2+' - '+numero1);
			} else {
				if (numero2>numero3 && numero3>numero1) {
					console.log ('El orden es '+numero2+' - '+numero3+' - '+numero1);
				}else {
					if (numero3>numero1 && numero1>numero2) {
						console.log ('El orden es '+numero3+' - '+numero1+' - '+numero2);
					}else { 
						console.log ('El orden es '+numero1+' - '+numero3+' - '+numero2);
					}
				}
			}
		}
	}
}
numeroMayor(3,2,1);
numeroMayor(2,3,1);
numeroMayor(1,3,2); -
numeroMayor(1,2,3);
numeroMayor(2,1,3);
numeroMayor(3,1,2);