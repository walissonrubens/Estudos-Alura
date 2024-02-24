function calculoImc(peso, altura){
    return peso / parseFloat((altura ** 2))

}

let resultado = calculoImc(60, 1.70)
console.log(resultado)