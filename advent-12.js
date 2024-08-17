function selectSleigh (distance, sleighs) {
  let ss = {
    name: null,
    consumption: 0
  }

  for (let i = 0; i < sleighs.length; i++) {
    const isConsumptionGreater = sleighs[i].consumption > ss.consumption
    const canBeUse = sleighs[i].consumption * distance <= 20
    if (isConsumptionGreater && canBeUse) {
      ss = sleighs[i]
    }
  }

  return ss.name
}

module.exports = { selectSleigh }
