function Enviar(){
    let dia = document.getElementById('idia')
    let resultado = document.getElementById('res')

    if(dia.value === 'sabado' || dia.value === 'domingo'){
        resultado.innerHTML = 'Bom fim de semana'
    } else{
        resultado.innerHTML = 'Boa semana!'
    }
}