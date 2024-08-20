function carryGifts (gifts, maxWeight) {
  const bag = []
  let bagCurrentPosition = 0

  for (let i = 0; i < gifts.length; i++) {
    const currentBagContent = bag[bagCurrentPosition] || ''
    const combination = currentBagContent + ' ' + gifts[i]
    if (combination.replace(/ /g, '').length <= maxWeight) {
      bag[bagCurrentPosition] = combination.trim()
    } else if (gifts[i].length <= maxWeight) {
      bagCurrentPosition++
      bag[bagCurrentPosition] = gifts[i]
    }
  }

  return bag
}

module.exports = { carryGifts }
