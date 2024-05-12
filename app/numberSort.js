const lesserValue = 1
const biggerValue = 100
const secretNumber = randomNumber()
const lesserValueElement = document.getElementById('lesser-value')
const biggerValueElement = document.getElementById('bigger-value')

function randomNumber() {
    return parseInt(Math.random() * (biggerValue - lesserValue + 1)) + lesserValue
}
console.log(secretNumber);

lesserValueElement.innerHTML = lesserValue
biggerValueElement.innerHTML = biggerValue