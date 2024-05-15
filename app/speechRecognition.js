const guessElement = document.getElementById('guess')
const muteBtn = document.querySelector('.nav-btn')

const submitBtn = document.querySelector('#send')

submitBtn.addEventListener('click', function(e){
  e.preventDefault();
  const guessBox = document.querySelector('#writen-guess')
  const guess = guessBox.value
  showGuessOnScreen(guess)
  checkIfGuessIsValid(guess)
})

window.SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'

function isUnMuted(){
  return muteBtn.classList[1] == 'active'
}

muteBtn.addEventListener('click', () => {
  muteBtn.classList.toggle('active')
  guessBox.classList.toggle('active')
  if(isUnMuted()){
      listen()
      muteBtn.innerHTML = `<button class="nav-btn"><i class="fa-solid fa-microphone"></i></button>`
  }else {
      muteBtn.innerHTML = `<button class="nav-btn"><i class="fa-solid fa-microphone-slash"></i></button>`
  }
})

function listen(){
  recognition.start()
  recognition.addEventListener('result', onSpeak)
}

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

