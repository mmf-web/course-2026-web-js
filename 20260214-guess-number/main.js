let inputEl = document.querySelector('#number')
let buttonEl = document.querySelector('#guess')
let resultEl = document.querySelector('#result')

let answer = Math.round(Math.random() * 100) // floor V, ceil ^
console.log('Answer: ', answer)

buttonEl.addEventListener('click', onGuessClick)

function onGuessClick() {
  let inputValue = Number(inputEl.value)
  resultEl.innerHTML = inputValue === answer ? 'Win' : 'Not really'

  // console.log("User's guess: ", inputValue)

  // ! We compare string and number !
  // Please do not use ==, use ===
  // if (inputValue == answer) {
  //   resultEl.innerHTML = 'Win'
  // } else {
  //   resultEl.innerHTML = 'Not really'
  // }

  // If else – if you are not lazy
  // if (inputValue === answer) {
  //   resultEl.innerHTML = 'Win'
  // } else {
  //   resultEl.innerHTML = 'Not really'
  // }
}
