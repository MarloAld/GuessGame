const menorValor = 10
const maiorValor = 110
const secretNumber = numeroAleatorio()
const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')

function numeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(secretNumber);

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor