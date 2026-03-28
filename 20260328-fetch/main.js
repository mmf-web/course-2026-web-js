const api = new ChuckNorrisApi()
// const api = new FakeApi()

const renderer = new HTMLRenderer()
// const renderer = new ConsoleRenderer()

// Business layer
getQuote()
renderer.onNextQuote(getQuote)

function getQuote() {
  api.getQuote().then((quote) => {
    renderer.renderQuote(quote)
  })
}
