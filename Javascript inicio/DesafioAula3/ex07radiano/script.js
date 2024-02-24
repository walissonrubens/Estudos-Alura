function Verificar(){
  let valorPi = document.getElementById('ipi').value
  let valorDivisor = document.getElementById('idivisor').value
  let resultado = document.getElementById('res')
  
  let conversao = (valorPi * 180) / valorDivisor
  res.innerHTML = `o resultado é ${conversao}`
}