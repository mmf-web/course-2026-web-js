let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
renderCards()
renderTurn()

function removeCards(cardsToRemove) {
  // remove from cards

  renderCards()
  renderTurn()
}

function renderTurn() {
  let d1 = rollDice()
  let d2 = rollDice()

  let b1 = document.createElement('button')
  b1.innerText = d1 + ', ' + d2
  // Listen click and call removeCards([d1, d2])

  let b2 = document.createElement('button')
  b2.innerText = d1 + d2
  // Listen click and call removeCards([d1+d2])

  let choice = document.querySelector('#choice')
  choice.innerHTML = ''

  choice.appendChild(b1)
  choice.appendChild(b2)
}

function renderCards() {
  let cardsEl = document.querySelector('#cards')

  for (let i = 0; i < 12; i++) {
    let div = document.createElement('div')
    div.innerText = i + 1

    if (cards.includes(i + 1)) {
      div.style.color = 'red'
    }

    cardsEl.appendChild(div)
  }
}

function rollDice() {
  return Math.round(Math.random() * 6)
}
