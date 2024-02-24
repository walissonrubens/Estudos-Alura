function imc(peso, altura){
	IMC = peso / parseFloat((altura**2))
	console.log(IMC)
	if(IMC <= 18.5){
		console.log("Magreza")
	} else if(IMC <= 24.9){
		console.log("Normal")
	} else if(IMC <= 29.9){
		console.log("Sobrepeso")	
	} else {
		console.log("obesidade")
	}
	
}


console.log(imc(60,1.70))
