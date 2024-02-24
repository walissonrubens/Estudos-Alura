let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

exibirTexto('h1', 'Jogo do número secreto')
exibirTexto('p', 'escolha um numero entre 1 e 10'
)

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTexto('h1', 'Acertou!')
        exibirTexto('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
            exibirTexto('h1', 'O numero é menor')
        } else {
            exibirTexto('h1', 'o numero é maior')
        }
        tentativas++
        limparCampo()
    }

}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    tentativas = 1
    limparCampo()
    exibirTexto('h1', 'Jogo do número secreto')
    exibirTexto('p', 'escolha um numero entre 1 e 10')
    document.getElementById('reiniciar').setAttribute('disabled', true)
}