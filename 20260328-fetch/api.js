class ChuckNorrisApi {
  getQuote = async () => {
    const r = await fetch('https://api.chucknorris.io/jokes/random')
    const body = await r.json()
    return body
  }
}

class FakeApi {
  getQuote = async () => {
    await new Promise((res) => setTimeout(res, 1000))
    return { value: 'Test quote ' + Math.random() }
  }
}
