const timerInputEl = document.querySelector('#timer-input')

function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve()
    }, ms)
  })
}

function sayHelloStart() {
  const ms = Number(timerInputEl.value)

  sleep(ms)
    .then(() => {
      console.log('hello 1', new Date().toISOString())
    })
    .then(function () {
      return sleep(ms)
    })
    .then(function () {
      console.log('hello 2', new Date().toISOString())
    })
}

function sayHelloBetter() {
  const ms = Number(timerInputEl.value)

  sleep(ms)
    .then(() => console.log('hello 1', new Date().toISOString()))
    .then(() => sleep(ms))
    .then(() => console.log('hello 2', new Date().toISOString()))
}

async function sayHelloAsync() {
  const ms = Number(timerInputEl.value)

  await sleep(ms)
  console.log('hello 1', new Date().toISOString())

  await sleep(ms)
  console.log('hello 2', new Date().toISOString())
}

timerInputEl.addEventListener('change', sayHelloAsync)
