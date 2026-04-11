class RGB {
  #r
  #g
  #b

  static validate(value) {
    if (typeof value !== 'number') {
      throw new Error('not a number')
    }
    if (value < 0 || value > 255) {
      throw new Error('must be between 0 and 255')
    }
    return value
  }

  constructor(r = 0, g = 0, b = 0) {
    this.setRGB(r, g, b)
  }

  setRGB(r, g, b) {
    this.#r = RGB.validate(r)
    this.#g = RGB.validate(g)
    this.#b = RGB.validate(b)
  }

  setR(r) {
    this.#r = RGB.validate(r)
  }

  setG(g) {
    this.#g = RGB.validate(g)
  }

  setB(b) {
    this.#b = RGB.validate(b)
  }

  get r() {
    return this.#r
  }

  get g() {
    return this.#g
  }

  get b() {
    return this.#b
  }
}
