let inputEl = document.querySelector('#number')
let buttonEl = document.querySelector('#guess')
let resultEl = document.querySelector('#result')

let answer = Math.round(Math.random() * 100) // floor V, ceil ^
console.log('Answer: ', answer)

buttonEl.addEventListener('click', onGuessClick)

function onGuessClick() {
  let inputValue = Number(inputEl.value)

  if (inputValue === answer) {
    resultEl.innerHTML = 'Win'
    return
  }

  if (inputValue > answer) {
    resultEl.innerHTML += '<p>Less than ' + inputValue + '</p>'
  } else {
    resultEl.innerHTML += '<p>Greater than ' + inputValue + '</p>'
  }
}
