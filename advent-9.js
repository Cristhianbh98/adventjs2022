function countTime (leds) {
  let time = 0

  while (!leds.every(led => led === 1)) {
    leds = leds.map((led, i) => {
      const previousLed = i === 0 ? leds[leds.length - 1] : leds[i - 1]
      return led === 0 && previousLed === 1 ? 1 : led
    })
    time += 7
  }

  return time
}

module.exports = { countTime }
