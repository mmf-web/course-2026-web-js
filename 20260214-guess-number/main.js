let inputEl = document.querySelector('#number')
let guessEl = document.querySelector('#guess')
let restartEl = document.querySelector('#restart')
let resultEl = document.querySelector('#result')

let answer
onRestart()

guessEl.addEventListener('click', onGuessClick)
restartEl.addEventListener('click', onRestart)

function onGuessClick() {
  let inputValue = Number(inputEl.value)
  if (Number.isNaN(inputValue)) {
    alert('Bad input! Please enter a number')
    return
  }

  if (inputValue === answer) {
    resultEl.innerHTML = 'Win'
    guessEl.disabled = true
    return
  }

  if (inputValue > answer) {
    resultEl.innerHTML += '<p>Less than ' + inputValue + '</p>'
  } else {
    resultEl.innerHTML += '<p>Greater than ' + inputValue + '</p>'
  }
}

function onRestart() {
  answer = Math.round(Math.random() * 100) // floor V, ceil ^
  console.log('Answer: ', answer)

  resultEl.innerHTML = 'Computer set a random number. You are to guess it. Input any number from 0 to 100.'
  guessEl.disabled = false
}
