const guessElement = document.getElementById('guess')

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()
recognition.addEventListener('result', onSpeak)

function onSpeak(e){
  const guess = e.results[0][0].transcript 
  showGuessOnScreen(guess)
  checkIfGuessIsValid(guess)
}

function showGuessOnScreen(guess){
  guessElement.innerHTML = `
    <div>Você disse</div>
    <span class="box">${guess}</span>
  `
}

recognition.addEventListener('end', () => {
  recognition.start()
})