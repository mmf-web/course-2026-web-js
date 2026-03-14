const timerEl = document.querySelector('#timer')
const startBtnEl = document.querySelector('#start-btn')

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const renderTime = () => {
  const time = new Date()
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  timerEl.innerText = `${hours}:${minutes}:${seconds}`
}

async function start(color, ms) {
  timerEl.style.backgroundColor = color
  let intervalId = setInterval(renderTime, 1000)
  await sleep(ms)
  clearInterval(intervalId)
}

const work = (ms) => start('aqua', ms)
const rest = (ms) => start('#c8e6c9', ms)

async function pomodoro(n, workMs, restMs) {
  while (true) {
    for (let i = 0; i < n - 1; i++) {
      await work(workMs)
      await rest(restMs)
    }

    await work(workMs)
    await rest(3 * restMs)
  }
}

const CONFIG = {
  WORK_ROUNDS: 4,
  WORK_DURATION_MS: 5 * 1000,
  REST_DURATION_MS: 1 * 1000,
}
pomodoro(CONFIG.WORK_ROUNDS, CONFIG.WORK_DURATION_MS, CONFIG.REST_DURATION_MS)
