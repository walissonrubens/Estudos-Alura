let numeroSecreto = gerarNumeroAleatorio()

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

exibirTexto('h1', 'Jogo do número secreto')
exibirTexto('p', 'escolha um numero entre 1 e 10'
)

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTexto('h1', 'Acertou!')
        exibirTexto('p', 'Você acertou o numero secreto!')
    } else {
        if(chute > numeroSecreto){
            exibirTexto('h1', 'O numero é menor')
        } else {
            exibirTexto('h1', 'o numero é maior')
        }
    }

}

function gerarNumeroAleatorio(){
   return parseInt(Math.random() * 10 + 1);
}