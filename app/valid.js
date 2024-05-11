function checkIfGuessIsValid(guess){
    const number = +guess
    
    if(isNaN(number)){
        guessElement.innerHTML += '<div>Valor Inválido</div>'
        return
    }

    if(numberOutOfRange(number)){
        guessElement.innerHTML += '<div>Valor fora do intervalo</div>'
        return
    }

    if(number === secretNumber){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era: ${secretNumber}</h3>
            <button id="play-again" class="play__again-btn">Jogar novamente</button>
        `
    } else if(number > secretNumber){
        guessElement.innerHTML += 
        `<div>
            O número secreto é menor <i class="fa-solid fa-arrow-down"></i>
        </div>`
    } else {
        guessElement.innerHTML += 
        `<div>
            O número secreto é maior <i class="fa-solid fa-arrow-up"></i>
        </div>`
    }
}

function isNaN(number) {
    return Number.isNaN(number);
}

function numberOutOfRange(number) {
    return number > maiorValor || number < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'play-again'){
        window.location.reload()
    }
})