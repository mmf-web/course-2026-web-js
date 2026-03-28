const api = new ChuckNorrisApi()
// const api = new FakeApi()

const renderer = new HTMLRenderer()
// const renderer = new ConsoleRenderer()

const app = new App(api, renderer)
app.run()
