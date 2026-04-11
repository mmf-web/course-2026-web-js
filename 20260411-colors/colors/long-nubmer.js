class LongNumber extends ColorSchema {
  #value

  constructor(value = 0) {
    super('LongNumber')
    this.fields = [{ name: 'value', onInput: (value) => this.setValue(value), getValue: () => this.#value }]
    this.#value = value
  }

  setValue(value) {
    this.#value = value
  }

  get value() {
    return this.#value
  }

  // 255100100
  toRGB = () => ({
    r: Math.floor(this.#value / 1_000_000),
    g: Math.floor(this.#value / 1000) % 1000,
    b: this.#value % 1000,
  })

  fromRGB = ({ r, g, b }) => {
    this.#value = r * 1_000_000 + g * 1000 + b
  }
}
