let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do desafio'

function verificarConsole() {
    console.log('o botão foi clicado')

}

function verificarAlert() {
    alert('Eu amo JS')
}

function verificarPrompt() {
    let cidade = prompt('informe uma cidade:')
    alert(`Estive em ${cidade} e lembrei de você`)
}

function verificarSoma() {
    let n1 = Number(prompt('Insira um numero:'))
    let n2 = Number(prompt('Insira outro numero:'))


    if (isNaN(n1) || isNaN(n2)) {
        alert('Digite um numero')
    } else {
        let soma = n1 + n2
        alert(`a soma de ${n1} + ${n2} é igual a ${soma}`)
    }
}