class App {
  constructor(api, renderer) {
    this.api = api
    this.renderer = renderer
  }

  run = async () => {
    this.printQuote()
    this.renderer.onNextQuote(this.printQuote)
  }

  async printQuote() {
    const quote = await this.api.getQuote()
    this.renderer.renderQuote(quote)
  }
}
