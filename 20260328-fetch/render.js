class HTMLRenderer {
  constructor() {
    this.quoteEl = document.querySelector('#quote')
    this.nextBtnEl = document.querySelector('#next-btn')
  }

  onNextQuote = (fn) => {
    this.nextBtnEl.addEventListener('click', fn)
  }

  renderQuote = (quote) => {
    this.quoteEl.innerText = quote.value
  }
}

class ConsoleRenderer {
  constructor() {
    window.getNextQuote = () => {
      this.onNextQuote?.()
    }
  }

  onNextQuote = (fn) => {
    this.onNextQuote = fn
  }

  renderQuote = (quote) => {
    console.log('quote: ', quote.value)
  }
}
