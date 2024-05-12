const muteBtn = document.querySelector('.nav-btn')
const guessBox = document.querySelector('.guess-box')

muteBtn.addEventListener('click', () => {
    muteBtn.classList.toggle('active')
    guessBox.classList.toggle('active')
    if(muteBtn.classList[1]){
        muteBtn.innerHTML = `<button class="nav-btn"><i class="fa-solid fa-microphone-slash"></i></button>`
    }else {
        muteBtn.innerHTML = `<button class="nav-btn"><i class="fa-solid fa-microphone"></i></button>`
    }
})